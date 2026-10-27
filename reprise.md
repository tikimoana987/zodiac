# 🔄 Prompt de reprise — Zodiaque & Décans · Cosmic Interface

> Copie-colle ce prompt dans une nouvelle conversation pour reprendre le projet exactement où il en est, avec tout le contexte nécessaire.

---

## 🎯 Contexte du projet

Nous développons **"Zodiaque & Décans · Cosmic Interface"**, une interface web immersive et multilingue sur le thème du zodiaque, en 7 langues (FR, EN, ES, ZH, RU, DE, IT).

**L'utilisateur saisit sa date de naissance** (et, s'il le souhaite, son heure et son nom) et découvre :
- Son signe solaire et son décan (sur 3), calculés à partir de la position réelle du Soleil
- Un profil enrichi (forces, faiblesses, amour, carrière, éléments porte-bonheur)
- Ses affinités avec les 12 signes, y compris le sien (jauge étoilée 1-5)
- Une explication détaillée de chaque compatibilité (modale)
- Sa Lune natale et son **horoscope du jour ou de la semaine**, calculé d'après la position réelle des planètes
- Sa **compatibilité avec une autre personne** (signes, animaux chinois, Lunes)
- La **carte du ciel visible** depuis son lieu, heure par heure, avec étoiles filantes et éclipses
- En parallèle, sa fiche du **zodiaque chinois** (animal, élément de l'année, yin/yang, animal de l'heure, affinités traditionnelles) : deux fiches côte à côte

L'expérience inclut **une transition cinématique** (viseur balaie le ciel → tracé animé de constellation → apparition du profil) et un **thème dynamique** qui bascule vers les couleurs du signe trouvé.

---

## 📦 État actuel du code

**17 fichiers dans un même dossier**, ~460 Ko, ouverture par double-clic sur `ZODIAC.html` (aucun serveur). **Version autonome** : `ZODIAC-standalone.html`, un seul fichier (~650 Ko), produit par `python3 build-standalone.py`. Chargement par `<script src>` classiques, dans cet ordre :
`zodiac-data.js` → `zodiac-sky-data.js` → `zodiac-i18n.js` → `zodiac-i18n-fr.js` puis `-en`, `-es`, `-zh`, `-ru`, `-de`, `-it` → `zodiac-astro.js` → `zodiac-planets.js` → `zodiac-skymap.js` → `zodiac-observe.js` → `zodiac-places-data.js` → `zodiac-places.js` → `zodiac-natal.js` → `zodiac-transits.js` → `zodiac-numerology.js` → `zodiac-tarot.js` → `zodiac-app.js`.
Styles dans `zodiac.css`. Tests dans `zodiac-tests.js` (73 tests, `ZODIAC.html?test` ou `ZODIAC-standalone.html?test`).
**Aucune ressource en ligne** : `html2canvas` 1.4.1 est une copie locale (`html2canvas.min.js`, licence MIT). Tout fonctionne sans internet.

### Fonctionnalités en place ✅
- **Calcul astronomique** : longitude du Soleil (Meeus, chap. 25), validée contre astropy (écart max 0,009° sur 1900-2100) ; signe = tranche de 30°, décan = tranche de 10°
- **Heure de naissance facultative**, alerte « jour de transition » si le Soleil change de signe ou de décan ce jour-là sans heure, position du Soleil affichée
- **Prénom ou nom facultatif** : en tête du profil et de l'image exportée, gardé sur l'appareil, jamais dans l'URL
- **Date du jour** en en-tête, dans la langue choisie, suivie de l'année chinoise en cours
- **Moteur des planètes** (Lune, Mercure → Pluton) validé contre astropy et PyEphem : moins de 0,06° d'écart pour tous les astres sur 1900-2100
- **Lune natale** (phase, signe lunaire) dans la fiche occidentale
- **Horoscope** jour/semaine (inclus dans l'export) : transits « signe entier » vers le signe solaire, rétrogradations, positions des 10 astres, phase du jour, événements lunaires de la semaine
- **Compatibilité à deux** (dans l'export seulement si renseignée) : signes (matrice + éléments), animaux chinois (relation traditionnelle), Lunes si certaines ; entente globale = moyenne des axes disponibles ; données de l'autre personne en mémoire seulement
- **Carte du ciel** : 921 étoiles, 88 constellations (zodiaque nommé, signe de la personne en valeur), Soleil, Lune, planètes ; lieu par liste de 123 villes ou géolocalisation ; curseur d'heure de midi à midi ; mode jour ; étoiles filantes (radiants) ; 3 prochaines éclipses avec visibilité locale des éclipses de Lune. Précision contre astropy : ≤ 0,06°
- **Zodiaque chinois en double fiche** : animal (année chinoise selon la table du Nouvel An 1900-2101), élément de l'année + yin/yang, animal de l'heure, profil complet, affinités traditionnelles (six harmonies, triades, oppositions, nuisances, punitions), modale dédiée ; deux colonnes alignées sur grand écran, empilées sur mobile
- 12 signes complets, **3 décans par signe (système des triplicités)** avec traits, description et planète
- **Affinités** 12×12 en étoiles or dégressif (`.star-5` lumineux → `.star-1` terne), modale de compatibilité élémentaire
- **7 langues complètes**, changement à chaud sans perdre le résultat
- **URL** `?date=YYYY-MM-DD&time=HH:MM&lang=xx`, persistance `localStorage` via le wrapper `store`
- Boutons Partager (presse-papiers), Exporter en image, Nouvelle recherche
- **Accessibilité** : `aria-live`, modale avec focus piégé et rendu, `aria-label` traduits, `prefers-reduced-motion`
- Symboles ♈–♓ en rendu texte coloré par le thème (sélecteur de variante U+FE0E)
- **Mode clair** (bouton ☀ / ☾, mémorisé), **roue du zodiaque** animée sous l'en-tête, **historique** des 8 dernières recherches
- Export en image de tout ce qui est affiché (profil, compatibilité si renseignée, horoscope, carte du ciel), sans rognage ni commandes : cadre de largeur figée, marges de 32 px, signature en pied, résolution adaptée aux limites des navigateurs

---

## 🗺️ Roadmap (plan validé)

### ✅ Fait
- Fiabilité : tests automatiques, calcul astronomique, heure de naissance, étoiles or dégressif
- Découpage en fichiers (sans mise en ligne)
- Nom sur le profil et l'export, date du jour en en-tête
- Zodiaque chinois en double fiche, année chinoise en en-tête
- Moteur des planètes, phase de lune, Lune natale, horoscope jour/semaine par transits
- Carte du ciel visible, étoiles filantes, éclipses
- Compatibilité à deux

### (archive) Cahier des charges du zodiaque chinois, réalisé
- Fiche occidentale et fiche chinoise **côte à côte en 2 colonnes** sur grand écran (élargir la page, aujourd'hui 880 px), empilées sur mobile ; l'export d'image suit la même mise en page
- Contenu chinois au même niveau que l'occidental : animal, profil, forces, faiblesses, amour, carrière, porte-bonheur
- Équivalent du décan : **élément de l'année** (Bois, Feu, Terre, Métal, Eau) + yin/yang ; **animal de l'heure** (« ascendant chinois ») si l'heure est donnée
- Affinités chinoises selon les règles traditionnelles (triades, paires harmonieuses, oppositions)
- **Piège** : l'année chinoise commence au Nouvel An lunaire (entre le 21 janvier et le 20 février) → table de dates 1900-2100 intégrée
- Année chinoise ajoutée à l'en-tête (« Dimanche 25 octobre 2026 · Année du Cheval de Feu »)

### ✅ Ajouts après le plan
- Thème natal : lieu de naissance avec fuseau historique, ascendant, Milieu du Ciel, maisons Placidus, aspects, lecture en 7 langues, onglets « Signe & zodiaque chinois » / « Thème natal »
- Version hors ligne en un seul fichier (bouton en pied de page, script d'assemblage)
- Application installable (PWA) publiée sur GitHub Pages, hors ligne y compris sur iPhone

### ✅ Plan initial terminé
Fiabilité, découpage, nom et date du jour, zodiaque chinois, planètes et horoscope, carte du ciel, compatibilité, finitions (mode clair, historique, roue du zodiaque).

### ⏭️ Feuille de route validée (après l'audit externe et les 14 langues)
1. ✅ Version corrective : fuseau de la 2e personne, heure locale de la carte du ciel, avertissement hors 1900–2100, heure stricte, bulle « signe ou constellation »
2. ✅ Éclipses de Soleil visibles depuis le lieu + carte « Observer le ciel cette nuit » (levers, couchers, crépuscules, Lune, planètes)
3. ✅ Sources du projet sur GitHub + tests lancés automatiquement à chaque modification + publication automatique (GitHub Pages, source « GitHub Actions »)
4. ✅ Astrologie approfondie : 4a transits personnalisés sur le thème natal ; 4b synastrie ; 4c roue du thème interactive
5. ✅ Numérologie : troisième onglet ; chemin de vie, cycles personnels, nombres du nom (latin, abjad, cyrillique)
6. Tarot : ✅ 6a deux jeux, carte de naissance, carte du jour ; ✅ 6b tirage à trois cartes ; ✅ cartes illustrées (Gemini) et rendez-vous quotidien (« C'est mon profil » rouvert à chaque visite, un tirage par jour avec question, cartes face cachée) ; plus tard : cartes renversées (option), arcanes mineurs
7. iPhone, en tout dernier

Remarques : chaque nouveau texte coûte 14 traductions — regrouper les textes de chaque étape ; présenter numérologie et tarot comme des traditions symboliques. Pistes de l'audit gardées pour plus tard : coordonnées manuelles + fuseau, version de la PWA et mise à jour proposée, audit du poids, calendrier .ics, comparateur de systèmes de maisons, rapport PDF, profils locaux et sauvegarde JSON.

### Pistes notées, non planifiées
- Horoscope personnel en vue Thème natal : transits par rapport aux planètes de naissance plutôt qu'au seul signe solaire

### 🌐 Mise en ligne (dégelée pour l'application installable)
- Site : **https://tikimoana987.github.io/zodiac/**, dépôt GitHub `tikimoana987/zodiac` (public), publié par GitHub Pages depuis la branche `main`, racine
- Contenu publié : le dossier `site/` généré par `build-standalone.py` (index.html, manifeste, `sw.js` versionné, icônes, README)
- Raison : sur iPhone, un fichier HTML local ne peut pas exécuter de JavaScript ; seule une adresse web + « Sur l'écran d'accueil » permet l'usage hors ligne
- Toujours gelé : aperçus de lien (Open Graph), données chargées via `fetch`

### Écarté (décisions validées)
- **Comètes** : rares, imprévisibles, nécessitent des données en ligne → remplacées par étoiles filantes et éclipses
- Élément dominant en barre (sans thème complet, toujours 100 % d'un élément)
- Personnalités célèbres ; tilt 3D, particules, son ; tarot, chakra, partie du corps (reportés)
- Position de **naissance** (ascendant, thème natal) : possible plus tard, distincte de la position actuelle

### Règle pour chaque ajout
Traduit dans les 7 langues, couvert par un test, validé contre une référence indépendante quand il s'agit d'astronomie.

---

## 🧮 Points techniques critiques à connaître

### Ajouter une langue (méthode suivie)
- Traduire `fr.json` (référence) en conservant **exactement** la structure ; gabarits à garder : `{el}`, `{start}`, `{end}`, `{d}`, `{a}`, `{b}`, `{zhr}`, `{name}`.
- Écrire la traduction en parties JSON, puis tout assembler avec `add_lang.py <code> "<nom>" "<nom attendu de l'année>" parties…` (outil de travail de Claude, hors projet) : contrôle de structure, création du fichier, ajout à la page et au test. Sinon, à la main : créer le fichier avec `new_lang.js`, ajouter `<script src="zodiac-i18n-xx.js">` dans `ZODIAC.html`, le nom attendu de l'année (test « Nom de l'année ») et `DEFAULT_CITY.xx` (déjà prévus : ko, pt, tr, ar, hi, th).
- Le test des ascendants exige que chaque texte nomme le signe (sauf russe, à cause des déclinaisons).
- `placeName()` : ne traduire le nom des villes que si l'écriture identifie la langue sans ambiguïté.

### Écriture de droite à gauche et écritures liées
- `RTL_LANGS` (arabe) pose `dir="rtl"` sur la page. Dans la feuille de style, utiliser **uniquement des propriétés logiques** (`margin-inline-start`, `text-align:end`, `inset-inline-end`, `border-inline-start`…), jamais left/right pour le placement du texte.
- Toute valeur en degrés passe par `ltr()` (`<bdi dir="ltr">`).
- Arabe, hindi, thaï : `letter-spacing:0` forcé (sinon liaisons cassées, surtout dans l'export html2canvas).
- Recherche de villes : `normPlace()` normalise aussi l'écriture arabe ; `build-places.py` garde pour chaque ville jusqu'à 3 noms dans l'écriture de son pays (`LOCAL_SCRIPTS`), sans lettres d'autres langues (`FOREIGN_LETTERS`), en cyrillique classés par ressemblance avec le nom principal.

### Adresse, confidentialité, version
- Paramètres de l'adresse après « # » (`readUrlParams`, `updateURL`) : `date`, `time`, `place`, `lang`. Le mode test reste `?test` (lu sur `location.search`). Promesse affichée à l'utilisateur : rien n'est envoyé en ligne — ne jamais ajouter d'appel réseau, de statistiques ou de pistage.
- `APP_VERSION` est remplacé par build-standalone.py (« date · empreinte ») ; bandeau de mise à jour sur `controllerchange` (seulement si un service worker contrôlait déjà la page).
- Pistes restantes (dans l'ordre validé) : 2 cartes renversées (option) ; 3 lieux absents (coordonnées manuelles) ; 4 calendrier .ics ; 5 fiche du thème à imprimer ; 6 arcanes mineurs ; puis iPhone / version hors ligne en dernier.

### Organisation du résultat
- Cinq sections, une par onglet (`VIEW_MODES` : signs, natal, sky, compat, numbers) ; toutes sont dans `#profileContent` (exportée telle quelle : seule la section affichée est visible). La numérologie s'affiche dans `#numbersBody`, le tarot dans `#tarotBody`, tous deux dans la section `numbers`.
- Les scripts de vérification de Claude doivent ouvrir le bon onglet avant d'agir sur une section (les sections cachées ne sont pas cliquables).
- Captures d'écran sur une machine de test lente : créer le contexte Playwright avec `reduced_motion='reduce'` (les animations décoratives coupées, la page repasse à ~40 images/s).
- Illustrations : sources dans le dossier de travail de Claude (`art/`, planches Gemini 2048 × 2048, découpe `art/cut.py`) ; prompts dans la conversation du 26-27 octobre 2026.
- Piège de l'environnement de Claude : sur une machine de test à un seul processeur (rendu logiciel), la page met plus d'une seconde par image — animations figées, captures d'écran qui expirent. Ce n'est pas une régression : vérifier avec une page minimale (`requestAnimationFrame`) et se fier au circuit GitHub.

### Bouton « Version hors ligne »
- Grisé pour le moment (« bientôt disponible ») : constante `OFFLINE_ENABLED = false` dans zodiac-app.js ; le code du téléchargement est intact (mettre `true` pour le réactiver).

### Dépôt GitHub et publication
- Dépôt `tikimoana987/zodiac` : **les sources à la racine**, `tools/run_tests.py`, `.github/workflows/tests-et-publication.yml`. Réglage *Settings → Pages → Source* : **GitHub Actions** (le site n'est plus servi depuis la racine de la branche).
- Le circuit tourne sur **ubuntu-24.04** (version fixée : `ubuntu-latest` migre vers Ubuntu 26 depuis le 19 octobre 2026, non prévu par Playwright 1.56) : checkout v7, setup-python v7 (Python 3.12), `pip install -r tools/requirements.txt` (Playwright 1.56), `playwright install --with-deps chromium`, `python build-standalone.py`, `python tools/run_tests.py`, puis upload-pages-artifact v5 (`site/`) et deploy-pages v5 — uniquement sur `main`.
- Pour mettre à jour : déposer les sources modifiées (glisser-déposer sur GitHub, ou Claude Code avec git) ; ne plus déposer `site/`.
- Mise en place terminée le 26 octobre 2026 : source Pages = GitHub Actions (l'ancien « pages build and deployment » ne se lance plus), ancien `index.html` de la racine supprimé, `.gitignore` ajouté. Le circuit prend ~1 min (exceptionnellement ~12 min quand l'installation du navigateur de test est lente chez GitHub) ; un seul passage publie à la fois, les suivants attendent leur tour.
- Mises à jour visibles : GitHub Pages autorise 10 min de cache navigateur ; le service worker demande donc la page avec `cache: 'no-cache'` (revalidation systématique). Un onglet ouvert avant une mise à jour garde l'ancienne version jusqu'au rechargement (Ctrl+Maj+R sur ordinateur) ; piste : afficher la version et proposer le rechargement.
- Piège rencontré : « Create new file » lancé depuis l'intérieur d'un dossier ajoute le chemin tapé à celui du dossier ouvert (`.github/workflows/.github/workflows/…`) ; toujours partir de la page principale du dépôt.
- Les fichiers générés sont ignorés (`.gitignore`) ; `ZODIAC.zip` livré par Claude les contient encore pour un usage local.

### Observation (`zodiac-observe.js`) et précision Soleil/Lune
- Les tableaux `MOON_LON_FIX`, `MOON_LAT_FIX`, `MOON_DIST` (zodiac-planets.js) et `SUN_LON_FIX`, `SUN_DIST_FIX` (zodiac-astro.js) sont **générés par ajustement** (fit_moon.py, fit_sun.py, gen_fix.py : outils de travail de Claude) : ne pas les modifier à la main. Les instants sont en temps universel ; le décalage avec le temps des éphémérides (ΔT) est absorbé par l'ajustement.
- Éclipse locale : rapprochement maximal sur ±4 h, contacts par bissection, parties visibles limitées au Soleil levé (bord supérieur à −0,833°). Rayons : Soleil 959,63″ à 1 UA, Lune 1 737,4 km. Parallaxe rigoureuse avec aplatissement terrestre.
- Nuit : de midi à midi, heure locale du lieu (`mapTz`), comme le curseur de la carte ; résultats mis en mémoire (`nightCache`, `eclipseCache`).

### Villes de naissance (`zodiac-places.js`, `zodiac-places-data.js`)
- Données générées par `build-places.py` (GeoNames via `geonamescache`) : format compact décrit en tête du script (9 caractères en base 36 par ville : coordonnées au centième de degré, fuseau, classe de population). Ne pas modifier à la main.
- Le script retire : doublons au même endroit (Bristol TN/VA), arrondissements numérotés (« Paris 15 Vaugirard », « Paris 11e Arrondissement »), noms alternatifs de plus de deux mots (surnoms : « Paris of the North » pour Varsovie) ; il ne garde les noms en d'autres langues que pour les villes de plus d'un million d'habitants (tous les noms latins filtrés, 2 par autre écriture).
- Identifiant d'une ville : `Nom|PAYS`, complété de `|lat|lon` pour les 295 homonymes d'un même pays (séparateur `|` : deux noms contiennent une virgule). C'est lui qui va dans l'adresse (`place=Paris%7CFR`), l'historique et l'appareil. `birthPlace()` accepte aussi l'ancien format (nom d'une des 123 villes de `CITIES`), rattaché à la ville du même nom la plus proche.
- La base est décodée à la première utilisation (≈ 140 ms) ; recherche ≈ 30 ms, lancée 60 ms après la dernière frappe.
- `CITIES` (123 villes) reste la liste de la carte du ciel.

### Bulles d'information
- `infoBtn(key, titre)` crée le bouton ; le texte vient de `I18N[lang].info[key]` (21 clés, un test vérifie qu'elles sont complètes et traduites). `infoItem(label, valeur, clé)` accepte une clé facultative.
- Une seule bulle `#infoPop`, créée à la demande, positionnée en coordonnées de page ; écouteur de clic en phase de capture sur `document`. Fermée à chaque rendu du résultat (`closeInfo`).
- L'export retire `.info-btn` et `.natal-complete` des copies.

### Thème natal (`zodiac-natal.js`)
- `CITIES` a un 5e champ : le fuseau IANA. `Kyiv` utilise `Europe/Kiev` (ancien nom, reconnu par tous les navigateurs). Un test vérifie que chaque fuseau est accepté par `Intl`.
- `localInstant(date, h, min, tz)` : avec `tz`, heure du lieu via `zonedInstant` ; sans, fuseau de l'appareil. Heure inexistante (passage à l'heure d'été) : décalage d'avant le changement ; heure ambiguë : première occurrence. `computeSky`, `natalMoon`, `personChart` prennent ce `tz` ; l'autre personne de la compatibilité n'en a pas (fuseau de l'appareil).
- Maisons : Placidus si |latitude| < 66°, sinon maisons égales (`chart.system` = `'placidus'` | `'equal'`). Pointes 11, 12, 2, 3 par itération sur le demi-arc ; 5 à 9 par opposition.
- Roue : ascendant à gauche (`270 − (λ − ASC)`), Bélier à gauche sans ascendant ; symboles des astres écartés de 8° minimum, repère à la position exacte.
- Onglets : `viewMode` ('signs' | 'natal') mémorisé (`zodiac_view`) ; panneaux `#viewSigns` / `#viewNatal` dans `#profileContent`, l'export ne capture que le visible. Lieu : `zodiac_lastPlace`, paramètre d'adresse `place`, clé d'historique incluant le lieu.
- Références de test : maisons de la Swiss Ephemeris (14 thèmes), conversions de la base IANA (60 cas depuis 1970) — à ne pas modifier à la main.

### Application installable (`site/`, `sw.js`, manifeste)
- Le service worker n'est enregistré que si la page est servie en `http(s)` **et** contient le lien vers le manifeste : seul `site/index.html` l'a (balises ajoutées par `build-standalone.py`).
- Stratégie : page en réseau d'abord (mises à jour), copie gardée hors ligne ; autres fichiers en mémoire d'abord. `__VERSION__` dans `sw.js` est remplacé par l'empreinte du contenu : ne pas la fixer à la main.
- Chemins relatifs partout (`./`, `sw.js`, `manifest.webmanifest`) : le site vit sous `/zodiac/`.
- Pour publier une mise à jour : `python3 build-standalone.py`, puis remplacer dans le dépôt les fichiers par ceux de `site/`.

### Version autonome (`build-standalone.py`, `ZODIAC-standalone.html`)
- **Après toute modification des sources, relancer `python3 build-standalone.py`** puis tester `ZODIAC-standalone.html?test` : sinon la version autonome livrée ne correspond plus au code.
- Ne jamais ajouter de ressource en ligne (CDN, police web…) : le script d'assemblage refuse un `<script src>` externe, et la version autonome doit fonctionner réseau coupé.
- `PRISTINE_PAGE` (copie vierge de la page, en tête de `zodiac-app.js`) doit être capturée **avant toute modification du DOM** ; ne rien placer avant elle qui modifie la page. La suite de tests est intégrée **avant** les scripts de l'appli, pour figurer dans cette copie.
- La suite de tests intégrée a le type `text/x-zodiac-tests` (non exécutée) ; `?test` la lance via `new Function`.
- Ne jamais écrire de donnée personnelle dans le balisage d'origine de la page : elle se retrouverait dans les copies.

### Chargement des fichiers
Pas de modules ES ni de `fetch` : ils ne fonctionnent pas quand la page est ouverte en `file://`. Les `<script src>` classiques partagent leurs déclarations globales (`const`, `function`) ; un fichier ne peut utiliser que ce que les fichiers chargés **avant** lui ont déclaré (sauf à l'intérieur de fonctions appelées plus tard).

### Calcul du Soleil (cœur de l'application)
```javascript
function sunLongitude(ms){            // ms = instant UTC, résultat en degrés (0° = point vernal)
  const T = (ms / 86400000 + 2440587.5 - 2451545.0) / 36525;
  const L0 = 280.46646 + 36000.76983*T + 0.0003032*T*T;
  const M  = (357.52911 + 35999.05029*T - 0.0001537*T*T) * DEG;
  const C  = (1.914602 - 0.004817*T - 0.000014*T*T) * Math.sin(M)
           + (0.019993 - 0.000101*T) * Math.sin(2*M) + 0.000289 * Math.sin(3*M);
  const omega = (125.04 - 1934.136*T) * DEG;
  return norm360(L0 + C - 0.00569 - 0.00478*Math.sin(omega));
}
```
- Signe = `floor(λ / 30)`, décan = `floor((λ mod 30) / 10)`. Ne jamais revenir à une table de dates fixes : `SIGN_META.start/end` ne servent qu'à l'affichage « Période habituelle ».
- L'heure saisie est interprétée dans le **fuseau du navigateur** (`localInstant()`). Limite connue : une personne née dans un autre fuseau que celui de son ordinateur peut obtenir un résultat décalé, uniquement les jours de transition.
- Sans heure : calcul à midi, et `computeSky()` compare 00 h 00 et 23 h 59 pour détecter un changement de signe (`cusp = 'sign'`) ou de décan (`cusp = 'decan'`).
- Toute modification de la formule doit continuer à passer le test de comparaison avec astropy (écart < 0,02°).

### Planète des décans : calculée, jamais stockée
```javascript
function decanRuler(signKey, decanIdx){
  const i = SIGN_ORDER.indexOf(signKey);
  return SIGN_META[SIGN_ORDER[(i + 4*decanIdx) % 12]].ruler;
}
```
Toute description de décan doit nommer la planète renvoyée par cette fonction. Ne pas réintroduire de planète « en dur » dans les textes d'étiquette.

### Format de `decanTraits`
`decanTraits[signe][index] = [ ["Trait1","Trait2","Trait3"], "Description qui nomme la planète." ]`
L'étiquette de planète est générée au rendu à partir de `decanRuler()` + `PLANET_SYM` + `t.rulers`.

### Clé de compatibilité
`compatKey(el1, el2)` trie selon `ELEMENT_ORDER = ["fire","earth","air","water"]`. Ne **pas** utiliser un tri alphabétique : il produit `air_fire`, `earth_fire`, `air_earth`, absentes de `compat.pairs` (c'était le bug qui vidait la modale pour 3 paires sur 10).

### Dates et heures
Toujours passer par `parseISODate()` (rejette `2023-02-29`, `1990-04-31`…) et `parseTime()` plutôt que `new Date(str)`.

### Tests
Ouvrir `ZODIAC.html?test`. Les tests appellent directement les fonctions globales des autres fichiers : renommer une fonction impose de mettre `zodiac-tests.js` à jour. Les données de référence astronomiques (`SUN_REF`, `SIGN_CASES`) viennent d'astropy : ne pas les recalculer avec la formule du fichier, sinon le test ne vérifie plus rien.

### Étoiles d'affinité
Classes `.star-1` à `.star-5` (or fixe, du plus terne au plus lumineux), générées par `starHtml(score)`. Ne pas les lier à `var(--gold)`, qui change avec le thème du signe (rouge pour le Bélier).

### Stockage
Toujours passer par `store.get/set/remove`, jamais `localStorage` directement (exceptions possibles en navigation privée ou iframe sandboxée).

### Planètes (`zodiac-planets.js`)
- `ORBITS` reprend la table 1 du JPL (Standish) : ne pas modifier un chiffre sans refaire la comparaison aux références.
- `JS_CORRECTION` (Jupiter, Saturne) est un **ajustement sur références astropy** : ne pas le retoucher à la main ; s'il faut le refaire, réajuster sur des positions de référence et valider sur d'autres dates.
- Toutes les longitudes sont **géocentriques, équinoxe de la date** (zodiaque tropical) ; ne pas oublier la précession si un calcul repart de J2000.
- Aspects de l'horoscope : « signe entier » (`wholeSignAspect()`), pas d'orbe en degrés — c'est le principe des horoscopes de presse par signe solaire.
- La carte Horoscope est hors de `#profileContent` mais **incluse dans l'export** (voir « Export en image »).
- Les textes `horo.retroTexts` ne doivent pas commencer par le nom de la planète (l'en-tête l'affiche déjà) ; un test le vérifie.

### Compatibilité à deux
- `compatibility()` est pure et symétrique ; l'axe lunaire n'est compté que si les deux signes lunaires sont certains.
- `pairState` (autre personne) n'est **jamais** écrit dans `store` ni dans l'URL : ce sont les données d'un tiers.
- La carte est hors de `#profileContent` ; elle entre dans l'export **seulement si `pairState` est renseigné**. Elle se réaffiche au changement de langue ou de prénom.

### Carte du ciel (`zodiac-sky-data.js`, `zodiac-skymap.js`)
- La **mention de copyright et la licence BSD** de d3-celestial en tête de `zodiac-sky-data.js` doivent rester (condition de la licence).
- `ECLIPSES` est une table calculée avec astropy et contrôlée sur des éclipses connues : ne pas la modifier à la main.
- `DEFAULT_CITY` doit désigner des noms présents dans `CITIES` (un test le vérifie).
- L'heure de la carte est celle de l'appareil. Le lieu choisi n'est stocké que sur l'appareil (`zodiac_place`).
- Les étoiles et tracés sont précessés une fois par date dans `skyCache` ; le curseur d'heure ne recalcule que hauteur et azimut.
- Coordonnées de la carte : nord en haut, **est à gauche** (vue du ciel, pas d'une carte terrestre) ; un test le vérifie.

### Zodiaque chinois
- **Année chinoise** : avant le Nouvel An de son année (`LNY_DATES`), une date appartient à l'année précédente. Ne jamais utiliser l'année civile seule.
- `LNY_DATES` est une donnée de référence (bibliothèques + recoupement astronomique) : ne pas la recalculer à la main. Une année lunaire de 12 mois dure 353 à 355 jours, de 13 mois 383 à 385.
- **Relations** : les listes de `zodiac-data.js` font foi, avec la priorité opposition > harmonie > triade > nuisance > punition (Serpent-Singe est à la fois harmonie et punition → harmonie). Les tests les recontrôlent par les règles arithmétiques des branches.
- **Nom de l'année** (`cnYearName()`) : modèles `cn.yearOf` avec `{el}` ; le russe utilise `{el.m}` / `{el.f}` et la clé `cn.yearElementAdj` (propre au russe) pour accorder l'adjectif.
- **Double fiche** : `.dual` est une grille de 5 rangées × 2 colonnes remplie colonne par colonne (`grid-auto-flow:column`). `westernCards()` et `chineseCards()` doivent toujours renvoyer **5 cartes chacune**, dans des rôles parallèles, sinon l'alignement des rangées se décale. Hors plage, la fiche chinoise n'a qu'une carte : c'est volontaire.
- Traductions chinoises regroupées sous la clé `cn` de chaque fichier de langue.

### Mode clair
- Toute couleur qui dépend du fond passe par une variable de `:root` (`--ov-03` … `--ov-30` pour les voiles, `--field-bg`, `--on-gold`, `--purple-ink`…), redéfinie dans `:root[data-theme="light"]`. Ne pas réintroduire de `rgba(255,255,255,…)` hors de la carte du ciel.
- `--gold` et `--purple` sont posées par `paintTheme()` : en mode clair, couleur du signe assombrie (`LIGHT_SHADE`) ; un test vérifie le contraste ≥ 4,5:1 pour les 12 palettes. `--gold-bright` garde la couleur vive pour le ciel nocturne (carte, animation de recherche).
- La bascule coupe les transitions un instant (classe `theme-switching`), sinon certains boutons gardaient près d'une seconde les couleurs de l'autre mode.
- Un petit script dans `<head>` applique le mode clair avant l'affichage (pas d'éclair sombre au chargement).

### Roue du zodiaque
- Orientation traditionnelle : Bélier à gauche, signes dans le sens antihoraire (`wheelScreenAngle(lon) = 270 − lon`). Une seule boucle d'animation (`wheelRunning`) ; pas de rotation libre quand un résultat est affiché ni quand l'appareil demande moins d'animations.
- Les symboles sont contre-tournés à chaque image pour rester droits.

### Historique
- Clé `zodiac_history`, 8 entrées maximum, dédoublonnées par date + heure + nom. Seules les recherches principales y entrent, jamais l'autre personne de la compatibilité.

### Export en image (`exportImage()`)
- Ne pas capturer `#profileContent` directement : html2canvas recalcule la mise en page dans un cadre de la largeur de la fenêtre, barre de défilement comprise, ce qui décalait le rendu et rognait le bord droit et le bas.
- Blocs exportés, dans l'ordre : `#profileContent`, `.compat-card` (si `pairState`), `.sky-card`, `.map-card`. Chacun est recopié dans un cadre de largeur figée (marges 32 px + signature), mesuré avant la capture, avec `x`, `y`, `width`, `height` explicites.
- Dans les copies, les commandes sont retirées (`.compat-form`, `.pair-error`, `.sky-controls`, curseur et libellé de `.map-time`) : html2canvas les dessine mal (le curseur devient un rectangle blanc).
- Échelle : 2 si possible, sinon réduite pour rester sous 16 millions de pixels et 32 000 px de haut.
- La carte du ciel (SVG stylé par classes CSS) est correctement rendue par html2canvas : pas besoin d'inliner les styles.
- Ce cadre ne doit **pas** être masqué par `visibility:hidden` ni `opacity` : html2canvas recopie ce style sur les décorations `::before` (▲ ▼ des forces et faiblesses), qui disparaissent. Il est masqué en l'enfermant dans un conteneur de taille nulle (`#exportHolder`, `overflow:hidden`), ouvert uniquement dans la copie (`onclone`).
- Les symboles des signes gardent leur U+FE0E (un test le vérifie).

### Nom saisi
Toujours passer par `escapeHtml()` avant de l'insérer dans du HTML. Le stocker uniquement via `store` (`zodiac_name`), jamais dans l'URL. Pas de texte en dégradé (`background-clip:text`) dans `#profileContent` : html2canvas ne sait pas le rendre à l'export.

### Ajouter une clé de traduction
L'ajouter dans **les 7 fichiers** `zodiac-i18n-xx.js`. Si une langue l'oublie, `deepMerge` affiche le français au lieu de planter, et les tests de traduction le signalent.

### Ajouter une langue
Créer `zodiac-i18n-xx.js` avec `I18N.xx = deepMerge(I18N.fr, { … })`, l'ajouter dans `ZODIAC.html` après les autres langues, ajouter le bouton dans `#langs`, et traduire au minimum : interface (dont `labelName`, `labelBirthTime`, `optional`, `cuspSign`, `cuspDecan`, `labels.sunPosition`), `signNames`, `summaries`, `decanTraits`, `strengths`, `weaknesses`, `love`, `career`, `rulers`, `colors`, `stones`, `modalities`, `elements`, `compat`, `exportError`, `close`, `langSelector`. Puis ouvrir `ZODIAC.html?test` : les tests de traduction signalent toute clé manquante ou restée en français.
