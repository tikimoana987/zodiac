# Zodiaque & Décans

Appli web d'astrologie et d'astronomie, en 14 langues, utilisable hors ligne et sans compte :
signe et décan (position réelle du Soleil), zodiaque chinois, thème natal (ascendant, maisons Placidus, aspects),
horoscope par transits, compatibilité, carte du ciel, éclipses de Soleil vues de son lieu, programme de la nuit.

**Utiliser l'appli : https://tikimoana987.github.io/zodiac/** — installable (« Sur l'écran d'accueil »), elle fonctionne ensuite sans internet.

## Organisation

| Élément | Rôle |
|---|---|
| `ZODIAC.html`, `zodiac.css`, `zodiac-*.js` | L'appli (version de travail en plusieurs fichiers ; s'ouvre d'un double-clic) |
| `build-standalone.py` | Assemble `ZODIAC-standalone.html` (un seul fichier) et le dossier `site/` publié |
| `build-places.py` | Régénère la base des villes (`zodiac-places-data.js`) depuis GeoNames |
| `tools/run_tests.py` | Tous les tests : suite intégrée (5 fuseaux), version autonome réseau coupé, parcours en 3 langues, site installable |
| `.github/workflows/` | À chaque modification : tests, puis publication automatique du site s'ils passent |
| `projet.md`, `reprise.md` | Documentation complète et notes de reprise |

## Tester sur son ordinateur

```
pip install -r tools/requirements.txt
python -m playwright install chromium
python build-standalone.py
python tools/run_tests.py
```

On peut aussi ouvrir `ZODIAC.html?test` dans un navigateur : le rapport des tests s'affiche dans la page.

## Sources et licences des données

- Étoiles et constellations : [d3-celestial](https://github.com/ofrohn/d3-celestial) (O. Frohn, licence BSD), catalogue Hipparcos
- Villes : [GeoNames](https://www.geonames.org) (licence CC BY 4.0)
- Export en image : [html2canvas](https://html2canvas.hertzen.com) (N. von Hertzen, licence MIT)
- Fuseaux horaires : base IANA (domaine public), intégrée aux navigateurs
- Positions des astres : formules de J. Meeus et du JPL, corrections ajustées sur l'éphéméride d'astropy ; validations contre astropy et la Swiss Ephemeris

Les positions des astres sont des calculs astronomiques ; les portraits, affinités et horoscopes relèvent de traditions symboliques.
