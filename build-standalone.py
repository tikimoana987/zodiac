#!/usr/bin/env python3
"""Zodiaque & Décans — assemblage de la version autonome.

Produit :
- ZODIAC-standalone.html : toute l'appli (page, styles, scripts, traductions, données du ciel et html2canvas
  pour l'export en image) dans un seul fichier, utilisable sans internet et facile à partager ;
- le dossier site/ : la même appli en application installable (PWA) à déposer tel quel sur GitHub Pages
  (index.html, manifeste, service worker, icônes). Sur iPhone, c'est la seule façon de l'utiliser hors ligne :
  iOS refuse d'exécuter le JavaScript d'un fichier HTML ouvert depuis l'appareil.

Utilisation, dans le dossier du projet :   python3 build-standalone.py
Aucune dépendance : Python 3 suffit. À relancer après chaque modification des fichiers sources.
"""
import hashlib
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
    build_site(html)


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


def build_site(html):
    """Dossier site/ : version autonome + balises d'application installable, service worker versionné."""
    site = HERE / 'site'
    shutil.rmtree(site, ignore_errors=True)
    site.mkdir()
    anchor = '<meta name="viewport"'
    if anchor not in html:
        sys.exit('Balise <meta name="viewport"> introuvable : impossible d\'ajouter les balises d\'application')
    i = html.index(anchor)
    j = html.index('>', i) + 1
    page = html[:j] + '\n' + PWA_HEAD + html[j:]
    (site / 'index.html').write_text(page, encoding='utf-8')
    for name in SITE_FILES:
        if not (HERE / name).exists():
            sys.exit(f"Fichier manquant pour le site : {name}")
        shutil.copy(HERE / name, site / name)
    # Version = empreinte du contenu : chaque modification change sw.js, donc l'appli installée se met à jour
    digest = hashlib.sha256(page.encode('utf-8'))
    for name in SITE_FILES:
        digest.update((HERE / name).read_bytes())
    version = digest.hexdigest()[:12]
    (site / 'sw.js').write_text(read('sw.js').replace('__VERSION__', version), encoding='utf-8')
    (site / 'README.md').write_text(
        "# Zodiaque & Décans\n\n"
        "Signe et décan (position réelle du Soleil), zodiaque chinois, horoscope par transits, carte du ciel, "
        "compatibilité, en 7 langues.\n\n"
        "**Utiliser l'appli : https://tikimoana987.github.io/zodiac/**\n\n"
        "Sur iPhone : ouvrir l'adresse dans Safari, puis Partager → « Sur l'écran d'accueil ». "
        "L'appli fonctionne ensuite sans internet.\n\n"
        "Fichiers générés par `build-standalone.py` à partir des sources du projet : ne pas les modifier à la main.\n",
        encoding='utf-8')
    print(f"site/ : {len(list(site.iterdir()))} fichiers, version {version}")


if __name__ == '__main__':
    build()
