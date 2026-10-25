#!/usr/bin/env python3
"""Zodiaque & Décans — construction de zodiac-places.js (villes de naissance).

Source : GeoNames (https://www.geonames.org), villes de plus de 15 000 habitants et capitales de territoires,
licence Creative Commons Attribution 4.0, via la bibliothèque Python « geonamescache » (pip install geonamescache).

Format compact, groupé par pays, villes triées de la plus peuplée à la moins peuplée :
  PLACE_TZ   : liste des fuseaux IANA ;
  PLACE_DATA : texte, une ligne « =CC » par pays, puis une ligne par ville :
               nom;CODE[;noms alternatifs séparés par |]
               CODE = 9 caractères en base 36 : latitude (3, centièmes de degré + 90°), longitude (3, centièmes + 180°),
               n° de fuseau dans PLACE_TZ (2), classe de population (1, ≈ 4 × log10 de la population). Précision ≈ 1 km.
Usage : python3 build-places.py   (à relancer seulement pour mettre à jour la base de villes)
"""
import json
import math
import pathlib
import re
import unicodedata

import geonamescache

HERE = pathlib.Path(__file__).resolve().parent
ALT_MIN_POP = 1_000_000        # noms dans d'autres langues : seulement pour les très grandes villes
LATIN_ALTS, SCRIPT_ALTS = 999, 2  # noms gardés par ville : tous les noms latins filtrés / 2 par autre écriture

# Écritures des langues de l'appli (en plus du latin) : chinois/japonais, kana, hangul, cyrillique, arabe, devanagari, thaï
SCRIPTS = {'cjk': r'[\u4e00-\u9fff]', 'kana': r'[\u3040-\u30ff]', 'hangul': r'[\uac00-\ud7af]', 'cyrillic': r'[\u0400-\u04ff]',
           'arabic': r'[\u0600-\u06ff]', 'devanagari': r'[\u0900-\u097f]', 'thai': r'[\u0e00-\u0e7f]'}


def norm(s):
    s = unicodedata.normalize('NFD', s)
    return re.sub(r'\s+', ' ', re.sub(r"[’'`\-‐.,()]", ' ', ''.join(ch for ch in s if unicodedata.category(ch) != 'Mn').lower())).strip()


def script_of(name):
    for key, rx in SCRIPTS.items():
        if re.search(rx, name):
            return key
    return 'latin' if re.fullmatch(r"[A-Za-zÀ-ÖØ-öø-ÿĀ-žƀ-ɏḀ-ỿ' .\-’()]+", name) else None


# Écriture locale de chaque pays : toute ville, même petite, se trouve aussi par son nom local
# (un utilisateur arabophone, russophone ou thaï cherche sa ville dans sa propre écriture). 3 noms au plus.
LOCAL_SCRIPTS = {'arabic': 'AE BH DZ EG IQ JO KW LB LY MA OM PS QA SA SD SY TN YE MR', 'cyrillic': 'RU UA BY BG RS MK KZ KG MN TJ',
                 'hangul': 'KR KP', 'kana': 'JP', 'cjk': 'JP CN TW HK MO', 'thai': 'TH', 'devanagari': 'IN NP'}
COUNTRY_SCRIPTS = {}
for _sc, _ccs in LOCAL_SCRIPTS.items():
    for _cc in _ccs.split():
        COUNTRY_SCRIPTS.setdefault(_cc, []).append(_sc)


# Une écriture sert à plusieurs langues : on écarte les lettres propres aux autres langues que celle du pays
# (persan et ourdou pour les pays arabes ; ukrainien, biélorusse, serbe, macédonien pour les pays russophones)
FOREIGN_LETTERS = {'arabic': re.compile(r'[پچژگکیہۃھٹڈڑںے]'), 'cyrillic': re.compile(r'[іїєґўђћљњџјѓќѕәөүңһғқұҳҷӣӯӑӗҫӳ]')}
RUSSIAN_COUNTRIES = {'RU', 'KZ', 'KG', 'TJ', 'MN'}


CYR = dict(zip('абвгдеёжзийклмнопрстуфхцчшщъыьэюя', ['a','b','v','g','d','e','e','zh','z','i','i','k','l','m','n','o','p','r','s','t','u','f','kh','ts','ch','sh','shch','','y','','e','yu','ya']))


def translit(name):
    return ''.join(CYR.get(ch, ch) for ch in norm(name))


def bigrams(x):
    x = x.replace(' ', '')
    return {x[k:k + 2] for k in range(len(x) - 1)}


def local_alts(city):
    scripts = COUNTRY_SCRIPTS.get(city['countrycode'], [])
    def ok(a):
        sc = script_of(a)
        if sc not in scripts or len(a) > 30 or len(a.split()) > 3 or ';' in a or '|' in a:
            return False
        if sc == 'arabic' and FOREIGN_LETTERS['arabic'].search(a):
            return False
        if sc == 'cyrillic' and city['countrycode'] in RUSSIAN_COUNTRIES and FOREIGN_LETTERS['cyrillic'].search(a):
            return False
        return True
    names = {a for a in city['alternatenames'] if ok(a)}
    # Cyrillique : on garde d'abord les noms qui, translittérés, ressemblent le plus au nom principal
    # (« Москва » ≈ Moscow, « Санкт-Петербург » ≈ Saint Petersburg ; pas « Питер », « СПб » ni les formes tatares)
    target = bigrams(norm(city['name']))
    def rank(a):
        if script_of(a) != 'cyrillic' or not target:
            return (0, len(a), a)
        b = bigrams(translit(a))
        sim = 2 * len(target & b) / (len(target) + len(b)) if b else 0
        return (-sim, len(a), a)
    return sorted(names, key=rank)[:3]


def pick_alts(city):
    seen = {norm(city['name'])}
    by_script = {}
    for a in sorted(set(city['alternatenames']), key=lambda x: (len(x), x)):
        sc = script_of(a)
        n = norm(a)
        if not sc or not n or n in seen or len(a) > 30 or ';' in a or '|' in a or any(ch.isdigit() for ch in a):
            continue
        # En alphabet latin, seulement de vrais noms propres : majuscule initiale, au moins 4 lettres, pas de sigle
        # Plus de deux mots : surnom ou périphrase (« Paris of the North » pour Varsovie), pas un nom de ville
        if len(a.split()) > 2:
            continue
        if sc == 'latin' and (len(a) < 4 or not a[0].isupper() or a.isupper() or not re.search(r'[aeiouyáéíóúàèìòùâêîôûäëïöüåæøœ]', a.lower())):
            continue
        # Idéogrammes : 3 formes (chinois simplifié, traditionnel, japonais — ex. 广州 / 廣州 / 広州)
        limit = LATIN_ALTS if sc == 'latin' else 3 if sc == 'cjk' else SCRIPT_ALTS
        if len(by_script.setdefault(sc, [])) < limit:
            by_script[sc].append(a)
            seen.add(n)
    return [a for lst in by_script.values() for a in lst]


def base36(n, width):
    digits = '0123456789abcdefghijklmnopqrstuvwxyz'
    out = ''
    while n:
        n, r = divmod(n, 36)
        out = digits[r] + out
    out = out.rjust(width, '0')
    assert len(out) == width, (n, width)
    return out


def build():
    cities = list(geonamescache.GeonamesCache().get_cities().values())
    # Même nom, même pays, même endroit à 1 km près (ex. Bristol, villes jumelles du Tennessee et de Virginie) :
    # une seule entrée, la plus peuplée — pour un thème natal elles sont identiques
    unique = {}
    for c in sorted(cities, key=lambda c: -c['population']):
        unique.setdefault((c['name'], c['countrycode'], round(c['latitude'], 2), round(c['longitude'], 2)), c)
    cities = list(unique.values())
    # Arrondissements numérotés (« Paris 15 Vaugirard », « Lyon 03 »…) : la ville principale les couvre, même endroit à 1 km près
    by_country = {}
    for c in cities:
        by_country.setdefault(c['countrycode'], set()).add(c['name'])
    cities = [c for c in cities if not ((m := re.match(r'^(.+?) \d{1,2}(?:e|er|ème|eme)?(?: |$)', c['name'])) and m.group(1) in by_country[c['countrycode']])]
    tzs = sorted({c['timezone'] for c in cities})
    tz_index = {tz: i for i, tz in enumerate(tzs)}
    lines = []
    for cc in sorted({c['countrycode'] for c in cities}):
        group = sorted((c for c in cities if c['countrycode'] == cc), key=lambda c: (-c['population'], c['name']))
        lines.append('=' + cc)
        for c in group:
            name = c['name'].replace(';', ',').strip()
            pop_class = max(0, min(35, round(math.log10(max(c['population'], 1)) * 4)))
            code = (base36(round((c['latitude'] + 90) * 100), 3) + base36(round((c['longitude'] + 180) * 100), 3)
                    + base36(tz_index[c['timezone']], 2) + base36(pop_class, 1))
            fields = [name, code]
            alts = pick_alts(c) if c['population'] >= ALT_MIN_POP else []
            seen_alt = {norm(a) for a in alts} | {norm(name)}
            alts += [a for a in local_alts(c) if norm(a) not in seen_alt]
            if alts:
                fields.append('|'.join(alts))
            lines.append(';'.join(fields))
    data = '\n'.join(lines)
    js = ('/* Zodiaque & Décans — villes de naissance (fichier généré par build-places.py : ne pas modifier à la main).\n'
          f'   Source : GeoNames (www.geonames.org), {len(cities)} villes de plus de 15 000 habitants et capitales de territoires,\n'
          '   licence Creative Commons Attribution 4.0 (CC BY 4.0). Format décrit dans build-places.py. */\n'
          'const PLACE_TZ = ' + json.dumps(tzs) + ';\n' +
          'const PLACE_DATA = `' + data.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${') + '`;\n')
    (HERE / 'zodiac-places-data.js').write_text(js, encoding='utf-8')
    print(f"zodiac-places-data.js : {len(cities)} villes, {len(tzs)} fuseaux, {len(js.encode()) // 1024} Ko")


if __name__ == '__main__':
    build()
