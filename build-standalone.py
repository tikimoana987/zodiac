#!/usr/bin/env python3
"""Zodiaque & Décans — assemblage de la version autonome.

Produit :
- ZODIAC-standalone.html : toute l'appli (page, styles, scripts, traductions, données du ciel et html2canvas
  pour l'export en image) dans un seul fichier, utilisable sans internet et facile à partager ;
- le dossier site/ : la même appli en application installable (PWA), publiée sur GitHub Pages
  (index.html, un fichier par module nommé d'après son contenu, manifeste, service worker, icônes). Sur iPhone,
  c'est la seule façon de l'utiliser hors ligne : iOS refuse d'exécuter le JavaScript d'un fichier HTML ouvert
  depuis l'appareil. À chaque nouvelle version, seuls les modules modifiés sont retéléchargés (voir sw.js).

Utilisation, dans le dossier du projet :   python3 build-standalone.py
Aucune dépendance : Python 3 suffit. À relancer après chaque modification des fichiers sources.
"""
import hashlib
import json
import time
import pathlib
import re
import shutil
import sys

HERE = pathlib.Path(__file__).resolve().parent
SOURCE, OUTPUT, TESTS = 'ZODIAC.html', 'ZODIAC-standalone.html', 'zodiac-tests.js'


def read(name):
    path = HERE / name
    if not path.exists():
        sys.exit(f"Fichier manquant : {name} (il doit être dans le même dossier que {SOURCE})")
    return path.read_text(encoding='utf-8')


def safe_script(code):
    # Une séquence « </script » dans le code fermerait la balise : on la neutralise (sans effet sur le JavaScript)
    return code.replace('</script', '<\\/script')


def build():
    html = read(SOURCE)

    # 0. Tous les scripts de la page doivent être des fichiers locaux du dossier (vérifié sur la page d'origine,
    #    avant intégration : le code intégré peut lui-même contenir le texte « <script src= »)
    external = [s for s in re.findall(r'<script src="([^"]+)"></script>', html) if not re.fullmatch(r'[^"/:]+\.js', s)]
    if external:
        sys.exit(f"Script(s) externe(s) dans ZODIAC.html, la version autonome ne fonctionnerait pas hors ligne : {external}")

    # 1. Feuille de style intégrée
    css = read('zodiac.css')
    link = '<link rel="stylesheet" href="zodiac.css">'
    if link not in html:
        sys.exit("Balise <link> de zodiac.css introuvable dans ZODIAC.html")
    html = html.replace(link, '<style>\n' + css.replace('</style', '<\\/style') + '\n</style>')
    # Portrait symbolique : CSS local intégré également dans la version autonome et PWA.
    portrait_link = '<link rel="stylesheet" href="zodiac-portrait.css">'
    if portrait_link in html:
        html = html.replace(portrait_link, '<style>\n' + read('zodiac-portrait.css').replace('</style', '<\\/style') + '\n</style>')

    # 2. Suite de tests intégrée, inerte (type non exécutable) : lancée seulement par ZODIAC-standalone.html?test.
    #    Placée avant les scripts de l'appli pour figurer dans la copie que la page fait d'elle-même.
    marker = '<!-- Ordre de chargement'
    if marker not in html:
        sys.exit("Repère « Ordre de chargement » introuvable dans ZODIAC.html")
    tests = '<script type="text/x-zodiac-tests" id="zodiacTests">\n' + safe_script(read(TESTS)) + '\n</script>\n'
    html = html.replace(marker, tests + marker, 1)

    # 3. Chaque <script src="…"> local remplacé par son contenu, dans le même ordre
    names = []
    def inline(match):
        name = match.group(1)
        names.append(name)
        return '<script>\n' + safe_script(read(name)) + '\n</script>'
    html = re.sub(r'<script src="([^"/:]+\.js)"></script>', inline, html)

    # 4. Marque de version autonome (sert au bouton « Version hors ligne » et au mode test)
    if '<html lang="fr">' not in html:
        sys.exit('Balise <html lang="fr"> introuvable dans ZODIAC.html')
    html = html.replace('<html lang="fr">', '<html lang="fr" data-standalone="1">', 1)

    # Numéro de version affiché en bas de page : date d'assemblage (UTC) · empreinte du contenu
    stamp = time.strftime('%Y-%m-%d', time.gmtime()) + ' · ' + hashlib.sha256(html.encode('utf-8')).hexdigest()[:7]
    html = html.replace("'__APP_VERSION__'", f"'{stamp}'", 1)
    (HERE / OUTPUT).write_text(html, encoding='utf-8')
    size = (HERE / OUTPUT).stat().st_size
    print(f"{OUTPUT} : {size // 1024} Ko, {len(names)} scripts intégrés + styles + tests")
    build_site(stamp)


PWA_HEAD = """<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#0b0a1a">
<link rel="icon" type="image/png" href="icon-192.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Zodiaque">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
"""
SITE_FILES = ['manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']


LAZY_RE = re.compile(r'zodiac-cosmic-(?!ui\.)[a-z]{2}\.js')   # textes de Cosmic Daily, une langue par fichier (pas les libellés « ui »)


def asset_name(name, data):
    """Nom publié d'un module : son nom suivi de l'empreinte de son contenu (zodiac-app.1a2b3c4d5e.js).
    Un nom donné ne change donc jamais de contenu : l'appli installée le garde d'une version à l'autre."""
    stem, ext = name.rsplit('.', 1)
    return f"{stem}.{hashlib.sha256(data).hexdigest()[:10]}.{ext}"


def build_site(stamp, dest=None, override=None):
    """Dossier site/ : la page (quelques Ko) charge les modules comme ZODIAC.html, dans le même ordre, mais sous
    leur nom publié ; sw.js reçoit la liste des modules et ne télécharge que ceux qu'il n'a pas encore.
    stamp : numéro de version affiché (le même que la version autonome).
    dest, override : pour les tests seulement (autre dossier ; {fichier source: texte} pour simuler une mise à jour)."""
    override = override or {}
    site = pathlib.Path(dest) if dest else HERE / 'site'
    shutil.rmtree(site, ignore_errors=True)
    site.mkdir(parents=True)
    html = override.get(SOURCE) or read(SOURCE)
    assets = []
    lazy = {}   # modules chargés à la demande (une langue de Cosmic Daily) : nom source → nom publié

    def publish(name):
        text = override.get(name) or read(name)
        if name == 'zodiac-app.js':
            if "'__APP_VERSION__'" not in text:
                sys.exit("Repère '__APP_VERSION__' introuvable dans zodiac-app.js")
            text = text.replace("'__APP_VERSION__'", f"'{stamp}'", 1)
        data = text.encode('utf-8')
        published = asset_name(name, data)
        (site / published).write_bytes(data)
        if published not in assets:
            assets.append(published)
        return published

    for css in ('zodiac.css', 'zodiac-portrait.css'):
        link = f'<link rel="stylesheet" href="{css}">'
        if link in html:
            html = html.replace(link, f'<link rel="stylesheet" href="{publish(css)}">')
    def script(m):
        name = m.group(1)
        if LAZY_RE.fullmatch(name):   # retiré de la page : chargé à la demande, une langue à la fois
            published = publish(name)
            assets.remove(published)
            lazy[name] = published
            return ''
        return f'<script src="{publish(name)}"></script>'
    html = re.sub(r'<script src="([^"/:]+\.js)"></script>\n?', script, html)
    anchor = '<meta name="viewport"'
    if anchor not in html:
        sys.exit('Balise <meta name="viewport"> introuvable : impossible d\'ajouter les balises d\'application')
    i = html.index(anchor)
    j = html.index('>', i) + 1
    # Manifeste et icônes : noms fixes (l'appli installée les connaît sous ce nom), gardés tant qu'ils ne changent pas
    shell = hashlib.sha256()
    for name in SITE_FILES:
        if not (HERE / name).exists():
            sys.exit(f"Fichier manquant pour le site : {name}")
        shutil.copy(HERE / name, site / name)
        shell.update((HERE / name).read_bytes())
    shell_version = shell.hexdigest()[:12]
    # Version = empreinte de la page, des modules et des icônes ; écrite dans la page, que sw.js vérifie
    digest = hashlib.sha256((html + '\n'.join(assets) + '\n'.join(lazy.values()) + shell_version).encode('utf-8'))
    version = digest.hexdigest()[:12]
    page = (html[:j] + '\n' + PWA_HEAD + f'<meta name="zodiac-version" content="{version}">\n'
            + f'<script>window.ZODIAC_LAZY = {json.dumps(lazy)};</script>\n' + html[j:])
    (site / 'index.html').write_text(page, encoding='utf-8')
    sw = read('sw.js')
    for mark in ('__VERSION__', '__SHELL__', '__ASSETS__', '__LAZY__'):
        if mark not in sw:
            sys.exit(f"Repère {mark} introuvable dans sw.js")
    sw = (sw.replace('__VERSION__', version).replace('__SHELL__', shell_version).replace('__ASSETS__', json.dumps(assets))
          .replace('__LAZY__', json.dumps(sorted(lazy.values()))))
    (site / 'sw.js').write_text(sw, encoding='utf-8')
    # Servis à la demande seulement, jamais gardés en mémoire par l'appli : la version autonome (bouton
    # « Version hors ligne ») et la suite de tests (adresse ?test)
    if (HERE / OUTPUT).exists() and not dest:
        shutil.copy(HERE / OUTPUT, site / OUTPUT)
    (site / TESTS).write_text(override.get(TESTS) or read(TESTS), encoding='utf-8')
    (site / 'README.md').write_text(
        "# Zodiaque & Décans\n\n"
        "Signe et décan (position réelle du Soleil), zodiaque chinois, horoscope par transits, carte du ciel, "
        "compatibilité, numérologie, tarot, en 14 langues.\n\n"
        "**Utiliser l'appli : https://tikimoana987.github.io/zodiac/**\n\n"
        "Sur iPhone : ouvrir l'adresse dans Safari, puis Partager → « Sur l'écran d'accueil ». "
        "L'appli fonctionne ensuite sans internet.\n\n"
        "Fichiers générés par `build-standalone.py` à partir des sources du projet : ne pas les modifier à la main.\n",
        encoding='utf-8')
    weight = (site / 'index.html').stat().st_size + sum((site / a).stat().st_size for a in assets)
    if not dest:
        print(f"site/ : page {(site / 'index.html').stat().st_size // 1024} Ko + {len(assets)} modules "
              f"({weight // 1024} Ko en tout) + {len(lazy)} à la demande, version {version}")
    return {'version': version, 'shell': shell_version, 'assets': assets, 'lazy': lazy}


if __name__ == '__main__':
    build()
