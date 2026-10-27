# 🌌 Zodiaque & Décans · Cosmic Interface

> Interface web immersive et multilingue qui calcule le signe astrologique, le décan et les affinités à partir d'une date de naissance, avec transition cinématique de recherche dans le ciel et tracé animé de constellation.

---

## 🎯 Objectif

Offrir une expérience astrologique **visuelle, poétique et complète**, accessible en 14 langues, où l'utilisateur saisit sa date de naissance et découvre :
- Son **signe solaire** et son **décan** précis (sur 3), calculés à partir de la position réelle du Soleil
- Une **heure de naissance facultative** pour trancher les jours où le Soleil change de signe ou de décan
- Un **profil enrichi** (forces, faiblesses, amour, carrière, éléments porte-bonheur)
- Ses **affinités** avec les 12 signes (y compris le sien), sous forme de jauge étoilée
- Une **explication détaillée** de chaque compatibilité (modale interactive)
- Sa **Lune natale** (phase et signe lunaire)
- Son **horoscope du jour ou de la semaine**, calculé d'après la position réelle des planètes (transits)
- Sa **compatibilité avec une autre personne** : signes, animaux chinois et Lunes, avec une entente globale
- La **carte du ciel visible** depuis son lieu d'observation, heure par heure, avec étoiles filantes et éclipses à venir
- En parallèle, sa **fiche du zodiaque chinois** : animal, élément de l'année, yin/yang, animal de l'heure, affinités traditionnelles — les deux fiches côte à côte

Le tout dans une ambiance **cosmique** (fond étoilé, dégradés or/violet, animations fluides) qui évolue dynamiquement selon le signe trouvé.

---

## 🏗️ Architecture

### Trois formes, toujours sans connexion une fois installées
- **Version de travail** : plusieurs fichiers dans **un même dossier** ; ouvrir `ZODIAC.html` d'un double-clic suffit, pas de serveur.
- **Version autonome** : `ZODIAC-standalone.html`, **un seul fichier** (~650 Ko) contenant toute l'appli, à utiliser et à partager. Fabriquée par `python3 build-standalone.py` (Python 3, aucune dépendance), à relancer après chaque modification.
- **Application installable (PWA)** : le dossier `site/` (généré par le même script), publié sur GitHub Pages à l'adresse **https://tikimoana987.github.io/zodiac/** (dépôt `tikimoana987/zodiac`). Ajoutée à l'écran d'accueil, elle fonctionne sans internet, **iPhone compris** — sur iOS, c'est la seule façon d'utiliser l'outil hors ligne, car iOS refuse d'exécuter le JavaScript d'un fichier HTML ouvert depuis l'appareil.
- **Aucune ressource en ligne** : même l'outil d'export en image (html2canvas) est une copie locale ; tout fonctionne sans internet (vérifié réseau coupé).

Les fichiers sont chargés par de simples balises `<script src>` (pas de modules ES ni de `fetch`, qui ne fonctionnent pas en `file://`). Leurs déclarations sont donc partagées entre fichiers, et **l'ordre de chargement compte**.

| Fichier | Rôle |
|---|---|
| `ZODIAC.html` | Structure de la page, ordre de chargement des scripts |
| `zodiac.css` | Styles (thème dynamique via `--gold`, `--purple`, `--glow`) |
| `zodiac-sky-data.js` | Données du ciel : 921 étoiles (magnitude ≤ 4,5), tracés des 88 constellations, étiquettes, 682 éclipses (1950-2100), 10 pluies d'étoiles filantes, 123 villes |
| `zodiac-data.js` | Données : `SIGN_ORDER`, `SIGN_META`, `SIGN_THEME`, `CONST`, `AFF`, `COLOR_HEX`, `ELEMENT_ORDER`, `PLANET_SYM` ; zodiaque chinois : `CN_ORDER`, `CN_META`, `CN_ELEMENTS`, `CN_ELEMENT_SYM`, listes de relations, `CN_RELATION_SCORE`, table `LNY_DATES` (Nouvel An 1900-2101) |
| `zodiac-i18n.js` | Noyau des traductions : objet `I18N`, fusion récursive `deepMerge()` |
| `zodiac-i18n-fr.js` | Français, langue de référence |
| `zodiac-i18n-en.js` … `-it.js` | Une langue par fichier (EN, ES, ZH, RU, DE, IT), fusionnée sur le français |
| `zodiac-astro.js` | Calculs purs, sans DOM : Soleil, signe, décan, dates, heures, formats ; année chinoise, animal de l'heure, relations entre animaux |
| `zodiac-skymap.js` | Calculs purs de la carte : coordonnées équatoriales, temps sidéral, hauteur/azimut, projection, étoiles filantes, éclipses |
| `zodiac-places-data.js` | Base des villes de naissance (générée par `build-places.py`, ne pas modifier) : 33 955 villes de plus de 15 000 habitants, fuseau, noms dans les autres langues pour les villes de plus d'un million d'habitants — GeoNames, CC BY 4.0 |
| `zodiac-places.js` | Recherche des villes (sans accents, « St » = « Saint », articles ignorés, autres langues), identifiants `Nom|PAYS`, compatibilité des anciens liens |
| `build-places.py` | Construit `zodiac-places-data.js` depuis GeoNames (`pip install geonamescache`) ; à relancer seulement pour mettre à jour la base |
| `zodiac-observe.js` | Observation depuis un lieu : positions vues de la surface (parallaxe), **éclipses de Soleil locales** (contacts, phase centrale, part du Soleil cachée, lever ou coucher éclipsé), levers, couchers et crépuscules, programme de la nuit (`nightPlan`) |
| `zodiac-transits.js` | **Transits sur le thème natal** : aspects des planètes du moment (Soleil à Pluton) aux points du thème (Soleil à Saturne, Lune si l'heure est connue, ascendant et milieu du ciel si heure et lieu le sont), période d'influence et jour exact ; **synastrie** (aspects entre deux thèmes, harmonie et tension) |
| `zodiac-numerology.js` | **Numérologie** : chemin de vie, cycles personnels (année, mois, jour), nombres du nom (expression, intime, personnalité) en alphabet latin (méthode pythagoricienne), arabe (abjad) et cyrillique |
| `zodiac-tarot.js` | **Tarot** (22 arcanes majeurs) : numérotation des deux jeux (Marseille, Waite-Smith), carte de naissance, carte du jour, 22 illustrations originales et leurs deux habillages |
| `zodiac-tarot-art.js` | **Illustrations du tarot** : 22 arcanes et 2 dos, générés avec Gemini (Google) à partir de prompts rédigés pour le projet, découpés et convertis en WebP 320 × 512 (≈ 1 Mo), sans texte |
| `zodiac-natal.js` | Thème natal : heure locale du lieu de naissance → temps universel (`zonedInstant`), ascendant, Milieu du Ciel, maisons Placidus (repli en maisons égales au-delà de 66°), maison de chaque astre, aspects (`natalChart`) |
| `zodiac-planets.js` | Calculs purs : Lune et planètes (Mercure → Pluton), rétrogradations, phases, transits, Lune natale, compatibilité à deux |
| `zodiac-app.js` | État, thème, animation, rendu, modale, horoscope, actions, initialisation |
| `zodiac-tests.js` | Suite de tests, chargée seulement par `ZODIAC.html?test` (intégrée, inerte, dans la version autonome) |
| `html2canvas.min.js` | Copie locale de html2canvas 1.4.1 (licence MIT, texte complet en tête du fichier) |
| `build-standalone.py` | Assemble `ZODIAC-standalone.html` : styles, scripts et tests intégrés dans la page |
| `ZODIAC-standalone.html` | Version autonome en un seul fichier (générée, ne pas modifier à la main) |
| `manifest.webmanifest` | Manifeste de l'application installable : nom, icônes, couleurs |
| `sw.js` | Service worker (modèle) : garde l'appli en mémoire ; sa version est inscrite par le script d'assemblage |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Icônes de l'application (roue dorée sur fond nuit) |
| `site/` | Dossier à publier tel quel sur GitHub Pages (généré : `index.html`, manifeste, `sw.js` versionné, icônes, `README.md`) |

Ordre de chargement : données → données du ciel → noyau i18n → langues → calculs → planètes → carte du ciel → thème natal → application.

| Dépendance | Version | Usage |
|---|---|---|
| `html2canvas` | 1.4.1 (copie locale `html2canvas.min.js`) | Export en image PNG (profil, compatibilité, horoscope, carte du ciel) |

### Sections de `zodiac-app.js`
1. **État global** — `currentLang`, `currentSignKey`, `currentDecanIdx`, `currentDate`, `currentTime`, `currentName`, `currentSky`, `currentCn`, `skyDate`, `skyPeriod`, `isSearching`, `lastFocus`, `store`, `escapeHtml()`, `slugify()`
2. **Thème dynamique** — `applyTheme()` / `resetTheme()`
3. **Animation de recherche** — overlay avec viseur, scan, tracé SVG
4. **Rendu du profil** — `renderOwner()`, `renderResult()`, `natalMoonItems()`, `renderSky()` (horoscope), `todayISO()`, `westernCards()`, `chineseCards()` (5 cartes chacune), briques communes (`strengthsCard()`, `loveCareerCard()`, `affinityCard()`, `infoItem()`), `starHtml()`
5. **Modale de compatibilité** — `openCompat(sys, autre)` : `sys = 'west'` (éléments) ou `'cn'` (relations traditionnelles)
6. **Actions** — partage (clipboard), export PNG, reset
7. **Lancement de recherche** — `launchSearch()`, `updateURL()`
8. **Traductions de l'interface** — `applyUITranslations()`
   (+ section **Roue du zodiaque** : `buildWheel()`, `updateWheel()`, `wheelToSign()`, `startWheel()` ; section **Historique** : `readHistory()`, `pushHistory()`, `renderHistory()` ; mode clair : `paintTheme()`, `setMode()`, `shade()`)
   (+ section **Compatibilité à deux** : `compatCardHtml()`, `renderCompat()`, `bindCompat()`)
   (+ section **Carte du ciel** : `currentPlace()`, `placeOptions()`, `renderMap()`, `bindMap()`)
9. **Initialisation** — lecture URL + localStorage, bindings, chargement des tests si `?test`

---

## ✨ Fonctionnalités implémentées

### 🎴 Nouvelles cartes et rendez-vous quotidien
- [x] **Cartes illustrées** : 22 illustrations originales générées avec Gemini (style gravure céleste, sans aucun texte), dans un gabarit 120 × 216 ; l'appli ajoute numéro et nom selon la langue et le jeu ; habillages Marseille (parchemin, bandeaux jaunes) et Waite-Smith (ivoire, cadre fin) ; arcane XIII sans nom à Marseille
- [x] **Dos de cartes** propres à chaque jeu : mandala (Marseille), étoile dans l'anneau violet (Waite-Smith)
- [x] **Rendez-vous quotidien** : l'appli rouvre directement le dernier profil sur les résultats du jour, sans l'animation de recherche (« Nouvelle recherche » pour changer de personne)
- [x] **Rituel du tirage** : la question est écrite d'abord (au moins 3 caractères), puis trois cartes tirées **face cachée** et retournées une à une (souris, doigt, clavier) ; **un seul tirage par jour et par personne**, conservé jusqu'au lendemain (« Prochain tirage : demain ») ; question gardée sur l'appareil et absente de l'image exportée ; anciens tirages affichés retournés
- [x] Mention « Illustrations des cartes générées avec Gemini (Google) » ; 14 langues

### 🔮 Tirage à trois cartes (étape 6b)
- [x] Dans « Numérologie & tarot », sous la carte de naissance et la carte du jour : **Passé · Présent · Avenir**, trois arcanes distincts tirés au hasard (générateur cryptographique du navigateur), avec illustration, mots-clés et explication
- [x] **Un tirage par question** : rien n'est tiré d'avance ; « Tirer les cartes », puis « Nouvelle question » pour une autre question ; le tirage reste affiché pour la journée et pour la personne (mémorisé sur l'appareil)
- [x] Les deux jeux s'appliquent (noms, numéros, habillage) ; boutons absents de l'image exportée ; pas de cartes renversées pour l'instant (choix délibéré)
- [x] Distribution des cartes en glissement sans jeu d'opacité (une carte reste visible même si l'animation ne se joue pas) ; aucun décalage en mode « animations réduites »

### 🗂️ Résultat organisé en cinq sections
- [x] **Chaque onglet n'affiche que sa section** (auparavant, compatibilité, horoscope, carte du ciel et nuit s'ajoutaient sous tous les onglets) : ☉ Signe & zodiaque chinois · ✦ Thème natal · ☾ Ciel du moment (horoscope, carte du ciel, éclipses, nuit) · ♡ Compatibilité (formulaire, scores, synastrie) · № Numérologie & tarot (nombres puis tarot, sous deux intertitres)
- [x] Onglets : cinq côte à côte sur ordinateur (icône au-dessus du titre), grille de deux colonnes sur mobile ; mots très longs coupés plutôt que rognés ; ancien choix « Tarot » repris dans la section commune
- [x] **L'export en image ne contient que la section affichée** (avec le nom et la date en tête) : images bien plus légères
- [x] Une section cachée le reste quelle que soit sa mise en page (`[role="tabpanel"][hidden]{ display:none !important }`)

### 🃏 Tarot (étape 6a)
- [x] Section **« Numérologie & tarot »** (d'abord un quatrième onglet) ; réglage du **jeu : Tarot de Marseille (par défaut) ou Waite-Smith**, retenu sur l'appareil
- [x] **Carte de naissance** : jour + mois + année, réduits jusqu'à 22 ou moins (22 : le Fou) ; 3/11/1982 → 1996 → 25 → VII Le Chariot
- [x] **Carte du jour** : tirage propre à chaque personne et à chaque date (empreinte FNV-1a), le même toute la journée, à la date de lecture de l'horoscope
- [x] **Différences des deux jeux respectées** : noms (Le Mat / Le Fou, Le Bateleur / Le Magicien, La Papesse, Le Pape, L'Amoureux, La Roue de Fortune, L'Arcane sans nom / La Mort, La Maison Dieu / La Tour), Force et Justice échangent VIII et XI, Le Mat sans numéro, arcane XIII sans nom dans son bandeau à Marseille
- [x] **22 illustrations originales** (symboles), deux habillages : Marseille (couleurs franches, contours de gravure, bandeaux) et Waite-Smith (palette douce, cadre fin)
- [x] Pour chaque arcane : noms, 3 mots-clés, une explication ; 14 langues ; 1 bulle (i) sur la méthode et les deux jeux
- [x] **Bouton « Version hors ligne » grisé** (« bientôt disponible ») : `OFFLINE_ENABLED = false` dans zodiac-app.js, code du téléchargement conservé

### 🔢 Numérologie (étape 5)
- [x] Section **« Numérologie & tarot »** (d'abord un troisième onglet « Numérologie ») à côté de « Signe & zodiaque chinois » et « Thème natal » (retenu d'une recherche à l'autre ; flèches du clavier ; sur mobile, les trois onglets s'empilent pour que les titres longs tiennent dans toutes les langues)
- [x] **Chemin de vie** : jour, mois et année réduits séparément puis additionnés, nombres maîtres 11, 22, 33 gardés
- [x] **Cycles personnels** (année, mois, jour, de 1 à 9) à la date de lecture de l'horoscope ; thème de l'année personnelle
- [x] **Nombres du nom** (champ « Nom ») : expression (toutes les lettres), nombre intime (voyelles), personnalité (consonnes) ; accents ignorés, Y voyelle s'il n'est pas à côté d'une voyelle ; **abjad** pour l'arabe (valeur affichée, محمد = 92 → 11) ; **table cyrillique** pour le russe ; autres écritures : invitation à saisir le nom en lettres latines
- [x] Sens des 12 nombres (mots-clés, phrase), thèmes des 9 années personnelles, 2 bulles (i), présentée comme une tradition symbolique ; 14 langues

### 🎡 Roue du thème interactive (étape 4c)
- [x] **Chaque élément de la roue est touchable** : astre, signe, maison, aspect, ascendant et milieu du ciel ouvrent une bulle d'explication (textes du thème natal déjà traduits : domaine, style du signe, maison, liste des aspects ; portrait du signe ; domaine de la maison et astres qu'elle contient ; sens de l'aspect)
- [x] **Mise en avant** : un astre ou un aspect sélectionné fait ressortir ses aspects, les autres s'estompent ; zones de toucher agrandies (traits d'aspects compris) pour le doigt
- [x] **Clavier** : astres, signes, maisons et angles atteignables par Tab, ouverts par Entrée ou Espace, refermés par Échap (le focus revient sur la roue)
- [x] Ponctuation selon la langue (virgule et deux-points arabes et japonais, point final 。 ou ।, pas de point en thaï), aussi dans la lecture du thème ; aucune bulle ni mise en avant dans l'image exportée

### 💞 Synastrie (étape 4b)
- [x] **Analyse approfondie** sous les trois axes de la compatibilité : aspects entre les planètes des deux thèmes natals (Soleil à Saturne, Lune si l'heure est connue, ascendant si heure et lieu le sont)
- [x] **Points d'harmonie** (trigones, sextiles, conjonctions sauf avec Saturne ou Mars hors Vénus) et **points de tension** (carrés, oppositions, conjonctions difficiles), 5 de chaque au plus, liens Soleil–Lune, Vénus–Mars et ascendant en premier ; bilan « n points d'harmonie · n points de tension »
- [x] Écarts 6° (conjonction, opposition), 5° (carré, trigone), 4° (sextile) ; textes composés à partir des domaines déjà traduits ; note quand une heure de naissance manque ; 1 nouvelle bulle (i)
- [x] Le score simple (signes, animaux chinois, Lunes) est inchangé

### 🔮 Transits personnalisés (étape 4a)
- [x] Nouveau groupe **« Sur votre thème natal »** en tête de l'horoscope (jour ou semaine) : planète du moment, aspect (conjonction, sextile, carré, trigone, opposition), point du thème touché, **jour où l'aspect est exact** et **période d'influence** (avec l'année quand elle diffère)
- [x] Orbe 1° pour les planètes rapides, 1,5° pour les lentes ; tri : planètes lentes, puis points personnels (Soleil, Lune, ascendant, milieu du ciel), puis écart ; 8 transits au plus
- [x] Explication composée à partir des textes déjà traduits (sens de l'aspect, domaines de la planète et du point touché) : pas de combinatoire de 450 textes × 14 langues
- [x] Calcul mis en mémoire (moins de 10 ms) ; 1 nouvelle bulle (i)

### 🧪 Dépôt GitHub, tests et publication automatiques
- [x] **Sources du projet sur GitHub** (`tikimoana987/zodiac`) : l'appli, les scripts d'assemblage, la documentation, un README
- [x] **`tools/run_tests.py`** : suite intégrée dans 5 fuseaux, version autonome réseau coupé, parcours réels en français, arabe et japonais, site installable servi comme sur GitHub Pages puis réseau coupé ; code de sortie 1 au moindre échec
- [x] **Circuit GitHub Actions** (`.github/workflows/tests-et-publication.yml`) : à chaque modification de `main`, installation de Chromium, assemblage (`build-standalone.py`), tous les tests, puis **publication automatique du site** sur GitHub Pages si tout passe ; rien n'est publié en cas d'échec
- [x] Les fichiers générés (`ZODIAC-standalone.html`, `site/`) ne sont plus dans le dépôt (`.gitignore`) : GitHub les reconstruit
- **Mettre l'appli à jour** : déposer les fichiers sources modifiés sur GitHub ; tests et publication suivent tout seuls (onglet *Actions*)

### 🔭 Éclipses de Soleil vues du lieu et « Observer le ciel cette nuit »
- [x] **Précision accrue du Soleil et de la Lune** : corrections ajustées par moindres carrés sur 20 000 positions de référence (astropy, 1895–2105) — Lune 4,3″ en longitude (32″ avant), 0,4″ en latitude, **distance** à 1,2 km ; Soleil 1,8″ (11″ avant) et distance. Validé sur des dates indépendantes. Signes, décans et thèmes en profitent aussi
- [x] **Éclipses de Soleil vues du lieu choisi** (carte du ciel) : partielle, totale ou annulaire *d'ici*, part du Soleil cachée, heures de début, maximum et fin à l'heure locale, durée de la totalité ou de l'anneau, Soleil levé ou couché éclipsé. Contrôlé contre astropy sur 14 cas (Munich 1999, Dallas 2024, Madrid et Reykjavik 2026, Le Caire 2027…) : heures à 35 s près, part cachée à 0,8 point près, type toujours juste
- [x] **Avertissement de sécurité** dès qu'une éclipse de Soleil est visible : lunettes conformes à la norme ISO 12312-2
- [x] **Carte « Observer le ciel cette nuit »** (même lieu et même date que la carte du ciel) : coucher et lever du Soleil, nuit noire (crépuscule astronomique), Lune (éclairement, lever, coucher), meilleur moment (nuit noire sans Lune), planètes visibles à l'œil nu avec horaires, signe et direction ; jour polaire, nuit polaire, été sans nuit noire. Levers et couchers à 32 s près d'astropy
- [x] Calculs mis en mémoire : le curseur de la carte reste instantané ; 2 nouvelles bulles (i) ; carte incluse dans l'export

### 🛠️ Version corrective (après l'audit externe)
- [x] **Compatibilité** : lieu de naissance de la 2e personne (même champ de recherche), donc calcul dans **son** fuseau horaire — sa Lune et son signe ne dépendent plus du fuseau de l'appareil
- [x] **Carte du ciel à l'heure locale du lieu choisi** : curseur (midi → midi) et heure affichée suivent le fuseau de la ville ; « Ma position » garde l'heure de l'appareil
- [x] **Avertissement** si la naissance sort de la période vérifiée (1900–2100)
- [x] **Lecture stricte de l'heure** : `HH:MM` ou `HH:MM:SS` uniquement (« 12:34xyz » et « 12:34:99 » sont refusés)
- [x] **Bulle « signe ou constellation »** sur le titre « Zodiaque occidental » : zodiaque tropical, constellations inégales, précession ; en hindi et en thaï, rappel que l'astrologie védique et l'astrologie thaïe traditionnelle utilisent le zodiaque sidéral
- [x] Le champ de recherche de ville est devenu un composant réutilisable (`makePlaceField`)

### 🌟 Thème natal
- [x] Recherche des villes **dans l'écriture de leur pays** pour toutes les villes (arabe, cyrillique, hangeul, japonais, chinois, thaï, devanagari) : « الدار البيضاء » trouve Casablanca, « Удомля » une ville russe de 30 000 habitants ; écriture arabe normalisée (article « ال », ة/ه, alifs, graphies persanes et ourdoues) ; noms choisis sans lettres propres à d'autres langues de la même écriture, et en cyrillique par ressemblance avec le nom principal (« Москва » plutôt que « Питер » ou « Мәскәү »)
- [x] Champ **« Lieu de naissance »** (facultatif) : **recherche parmi 33 955 villes** du monde (toutes celles de plus de 15 000 habitants, 692 en France, plus les capitales de territoires), chacune avec son **fuseau officiel** (ex. `Europe/Paris`). Suggestions dès 2 lettres (1 caractère en chinois, japonais, coréen, thaï), sans tenir compte des accents ; « St » vaut « Saint » ; un article en tête est ignoré (« Le Caire ») ; les grandes villes se trouvent aussi par leur nom dans d'autres langues (« Londres », « 東京 », « Москва »), affiché dans la suggestion ; homonymes d'un même pays distingués par leurs coordonnées ; flèches, Entrée, Échap, bouton ×. Pour un village, la ville la plus proche convient. L'heure de naissance est alors convertie avec l'historique des changements d'heure du lieu, intégré au navigateur (heure d'été, changements de fuseau, heure locale d'avant 1911…) — y compris pour le signe, le décan et la Lune natale. Sans lieu : fuseau de l'appareil, comme avant
- [x] **Deux grands onglets** bien visibles au-dessus du résultat, avec icône et description (« le portrait simple » / « le portrait complet ») : « Signe & zodiaque chinois » (double fiche) | « Thème natal ». Seul le bloc principal bascule ; compatibilité, horoscope et carte du ciel restent communs. Navigation au clavier (flèches), choix retenu d'une recherche à l'autre
- [x] **Calculs** : ascendant, Milieu du Ciel, maisons **Placidus** (repli en maisons égales au-delà du cercle polaire), position des 10 astres (signe, degré, maison, rétrogradation), aspects majeurs (conjonction 8°, sextile 5°, carré 7°, trigone 7°, opposition 8°)
- [x] **Précision** contrôlée contre la Swiss Ephemeris : ascendant ≤ 0,012°, Milieu du Ciel ≤ 0,005°, maisons ≤ 0,014° (60 thèmes, latitudes de −35° à +64°)
- [x] **Fuseaux** contrôlés contre la base IANA 2026e : 100 % identiques depuis 1970 ; avant 1970, le navigateur conserve des historiques locaux que la base fusionnée a perdus (ex. heure d'Amsterdam jusqu'en 1940) : il est le plus exact
- [x] **Affichage** : « big three » (Soleil, Lune, Ascendant) ; roue traditionnelle (ascendant à gauche, signes, maisons, astres, lignes d'aspects bleues harmonieuses / rouges tendues) ; tableau des positions ; **lecture** : portrait des 12 ascendants, phrase « quoi / comment / où » par astre (mots-clés de l'astre, du signe, de la maison) ; liste des aspects avec leur sens
- [x] Sous les champs, une information rappelle que **l'heure et le lieu sont nécessaires pour le thème natal**. Sans heure ou sans lieu : planètes dans les signes seulement, message qui dit quoi compléter et bouton **« Compléter l'heure et le lieu »** qui mène au bon champ ; sans heure, positions calculées à midi (Lune possiblement décalée)
- [x] Lieu dans l'adresse partageable (`&place=Paris`), mémorisé sur l'appareil et dans l'historique ; l'export en image reprend la vue affichée
- [x] Textes en 14 langues : 12 ascendants, 10 astres, 12 signes, 12 maisons, 5 aspects

### ℹ️ Bulles d'information
- [x] **Boutons (i)** à côté des notions moins connues : position du Soleil, Lune natale, modalité, planète, décan, affinités (occidentales et chinoises), année chinoise, élément de l'année, polarité, élément fixe, animal de l'heure, thème natal, ascendant, Milieu du Ciel, maisons, aspects, rétrogradation, horoscope, carte du ciel, compatibilité — 21 explications de deux ou trois phrases, distinguant le fait astronomique de la tradition
- [x] Une seule bulle, placée sous le bouton (au-dessus s'il manque de place) ; fonctionne au doigt comme à la souris ; fermeture par second appui, Échap (le focus revient au bouton), appui ailleurs ; absente de l'image exportée

### 📱 Application installable (GitHub Pages)
- [x] Adresse : **https://tikimoana987.github.io/zodiac/** — sur iPhone : Safari → Partager → « Sur l'écran d'accueil » ; sur Android : menu → « Installer l'application »
- [x] **Fonctionne sans internet** une fois installée : le service worker garde la page, le manifeste et les icônes ; un lien avec date (`?date=…&lang=…`) s'ouvre aussi hors ligne
- [x] **Mises à jour automatiques** : avec du réseau, la page en ligne est toujours prise d'abord ; chaque nouvelle publication change `sw.js` (version = empreinte du contenu), ce qui remplace la copie gardée et efface l'ancienne
- [x] Les données (nom, historique, lieu, mode) restent sur l'appareil ; sur iPhone, l'app de l'écran d'accueil a son propre stockage, distinct de Safari
- [x] Effet secondaire : sur le site, « Partager » copie un vrai lien (date, heure, langue ; jamais le nom)
- **Publier une mise à jour** : `python3 build-standalone.py`, puis déposer le contenu de `site/` dans le dépôt GitHub (remplacer les fichiers)

### 📦 Version hors ligne
- [x] Lien **« ⬇ Version hors ligne »** en pied de page : télécharge `ZODIAC-standalone.html`, l'outil complet en un seul fichier, utilisable sans internet (calculs, horoscope, carte du ciel, compatibilité, export en image)
- [x] Depuis la version autonome, la page **se recopie elle-même** : la personne qui reçoit le fichier peut le transmettre à son tour ; une copie de copie est identique au bit près
- [x] La copie est **toujours vierge** : nom, historique, lieu et personnes comparées restent dans le navigateur, jamais dans le fichier
- [x] Depuis la version en plusieurs fichiers ouverte en local, le navigateur interdit de télécharger un fichier local : la version autonome s'ouvre dans un nouvel onglet, avec un message expliquant qu'il suffit d'y cliquer à nouveau pour l'enregistrer
- [x] Limites du fichier local : « Partager » copie une adresse locale (utiliser le site pour partager un lien) ; sur iPhone, un fichier local ne fonctionne pas (voir l'application installable) ; « Me localiser » peut être refusé sur un fichier local, la liste de villes prend le relais

### ✨ Finitions
- [x] **Mode clair** (bouton ☀ / ☾ dans l'en-tête, mémorisé sur l'appareil, sombre par défaut) : toutes les couleurs dépendant du fond passent par des variables CSS ; la couleur du signe est assombrie en mode clair pour garder un **contraste ≥ 4,5:1** (WCAG AA, vérifié par un test pour les 12 palettes) ; la carte du ciel et l'animation de recherche restent nocturnes ; l'image exportée suit le mode
- [x] **Roue du zodiaque** sous l'en-tête : 12 secteurs teintés selon l'élément, graduations des décans, Soleil et Lune placés à leur position exacte. À l'accueil, elle tourne lentement et montre le ciel du jour ; après une recherche, elle pivote jusqu'au signe trouvé (placé en haut et mis en valeur) et montre le Soleil et la Lune de naissance. Immobile si l'appareil demande moins d'animations
- [x] **Historique des recherches** : les 8 dernières sous le formulaire (signe, prénom, date, heure), un clic relance la recherche, bouton « Effacer l'historique » ; stocké sur l'appareil uniquement ; les personnes saisies dans la compatibilité n'y figurent jamais

### 🎨 Expérience utilisateur
- [x] Interface cosmique : fond étoilé animé, dégradés, effet de scintillement
- [x] **Date du jour** en en-tête, dans la langue choisie (« Dimanche 25 octobre 2026 »)
- [x] Saisie de date native (`<input type="date">`), heure facultative (`<input type="time">`) et **prénom ou nom facultatif**
- [x] **Transition animée** (~4s) : viseur qui balaie le ciel → verrouillage → tracé de la constellation → fondu
- [x] **Thème dynamique par signe** : les couleurs de l'interface (y compris les symboles ♈–♓) basculent vers celles du signe trouvé
- [x] Cartes animées (hover, fade-in, pulse sur les icônes)
- [x] Responsive (mobile 640px et moins)

### 🔮 Contenu astrologique
- [x] **12 signes** avec icônes Unicode (♈–♓) suivies du sélecteur de variante texte U+FE0E : rendues en texte coloré par le thème, jamais en emoji (Windows les dessinait en carrés violets, y compris à l'export)
- [x] **3 décans par signe** selon le **système des triplicités**, chacun avec 3 traits, une description et la planète affichée en étiquette (ex. « ♃ Jupiter »)
- [x] **Calcul astronomique** : signe et décan déduits de la longitude écliptique du Soleil à l'instant de naissance
- [x] **Alerte de transition** : si le Soleil change de signe ou de décan le jour saisi et qu'aucune heure n'est donnée, un message invite à préciser l'heure
- [x] **Position du Soleil** affichée (« 24°37′ ♈ » avec heure, « ≈ 24° ♈ » sans heure)
- [x] **Profil enrichi** :
  - Période habituelle, modalité, planète dominante
  - Chiffres, couleurs (avec swatches), pierre, jour porte-bonheur
  - Forces (3) et faiblesses (3)
  - Texte amour et texte carrière
- [x] **Affinités** : grille des 12 signes avec jauge 1–5 étoiles
  - Toujours en or (fixe, indépendant du thème du signe), de plus en plus terne de 5 vers 1 : classes `.star-5` à `.star-1`
- [x] **Modale de compatibilité** : niveau + explication basée sur les éléments (les 10 combinaisons s'affichent)
- [x] Résumé du signe + description du décan

### 🐉 Zodiaque chinois (double fiche)
- [x] **Deux fiches côte à côte** sur grand écran (page élargie à 1180 px quand un résultat s'affiche), cartes alignées rangée par rangée ; sur mobile, la fiche occidentale puis la fiche chinoise
- [x] **Animal** déterminé par l'année chinoise, qui commence au **Nouvel An lunaire** (table 1900-2101 intégrée) : une naissance le 26 janvier 1990 relève encore de l'année du Serpent
- [x] **Élément de l'année** (Bois, Feu, Terre, Métal, Eau) et **yin/yang**, l'équivalent du décan, avec traits et description
- [x] **Animal de l'heure** (« ascendant chinois ») si l'heure est donnée, par tranches de 2 h
- [x] Profil complet : résumé, forces, faiblesses, amour, carrière, élément fixe, nombres et couleurs porte-bonheur
- [x] **Affinités traditionnelles** : six harmonies (5★), triades (4★), relation neutre ou même signe (3★), nuisances, punitions et auto-punition (2★), oppositions (1★) ; modale avec le nom de la relation
- [x] **En-tête** : date du jour suivie de l'année chinoise en cours (« Dimanche 25 octobre 2026 · Année du Cheval de Feu »)
- [x] Hors 1900-2100 : la fiche chinoise est remplacée par un message

### 🪐 Planètes et horoscope
- [x] **Lune natale** dans la fiche occidentale : phase (emoji + nom) et signe lunaire ; sans heure, deux signes possibles sont affichés si la Lune change de signe ce jour-là
- [x] **Carte « Horoscope »** sous la double fiche, **incluse dans l'image exportée** : date de lecture modifiable (aujourd'hui par défaut), mode **Jour** ou **Semaine**
- [x] **Transits « signe entier »** vers le signe solaire, comme dans les horoscopes de presse : astre dans le signe, en trigone, en carré ou en opposition ; regroupés en « Grandes tendances » (Jupiter → Pluton) et « Climat du moment » (Soleil, Lune, Mercure, Vénus, Mars)
- [x] **Rétrogradations** du moment, avec texte dédié
- [x] **Positions des 10 astres** (signe, degré, ℞) et **phase de la Lune** du jour (pourcentage éclairé)
- [x] En mode semaine : plages de dates pour chaque transit (« jusqu'au 28 oct. ») et **événements lunaires** (nouvelle Lune, quartiers, pleine Lune) avec date et heure locales ; la Lune est exclue des transits hebdomadaires (elle change de signe tous les 2 jours et demi)
- [x] Mention honnête en pied de carte : positions calculées, interprétations symboliques

### 💞 Compatibilité à deux
- [x] Carte placée sous la double fiche, **incluse dans l'image exportée seulement si elle est renseignée** : prénom (facultatif), date et heure (facultative) de l'autre personne
- [x] **Trois axes** notés de 1 à 5 : signes du zodiaque (matrice d'affinités + texte des éléments), animaux chinois (relation traditionnelle), **Lunes** (affinité émotionnelle, seulement si les deux signes lunaires sont certains)
- [x] **Entente globale** : moyenne des axes disponibles (« 3,0 / 5 »), avec le texte de niveau correspondant
- [x] Les deux prénoms en tête (« Vous » / « L'autre personne » si aucun), signe et animal de chacun ; le prénom de la personne principale se met à jour en direct
- [x] Les données de l'autre personne restent **en mémoire seulement** : jamais enregistrées sur l'appareil, ni dans l'URL ; effacées par « Nouvelle recherche »

### 🔭 Carte du ciel
- [x] **Ciel visible** depuis le lieu choisi : projection centrée sur le zénith, nord en haut, est à gauche (comme en levant les yeux), points cardinaux traduits
- [x] **921 étoiles** colorées selon leur température, **tracés des 88 constellations**, écliptique ; les 12 constellations du zodiaque sont nommées, **celle du signe de la personne est mise en valeur** ; 9 constellations repères nommées (Orion, Grande Ourse, Petite Ourse, Cassiopée, Cygne, Croix du Sud, Lyre, Aigle, Grand Chien)
- [x] **Soleil, Lune et planètes visibles à l'œil nu** placés sur la carte ; liste avec hauteur et direction
- [x] **Curseur d'heure** de midi à midi pour parcourir la nuit (par défaut : maintenant si l'on regarde aujourd'hui après midi, sinon 22:00), date partagée avec la carte Horoscope
- [x] **Mode jour** : fond éclairci, étoiles atténuées, message explicatif, liste renommée « Au-dessus de l'horizon »
- [x] **Lieu** : liste de 123 villes (pays traduit automatiquement) ou bouton « Me localiser » (géolocalisation du navigateur) ; le choix est mémorisé sur l'appareil ; ville par défaut selon la langue
- [x] **Étoiles filantes** : pluies en cours (pic, taux horaire, radiant affiché sur la carte) ou prochain pic
- [x] **Éclipses** : les 3 prochaines, avec pour celles de Lune la visibilité depuis le lieu choisi

### 🌍 Internationalisation
- [x] **Menu de langues compact** (🌐 + liste) : chaque langue affichée dans sa propre écriture ; seules les langues dont le fichier est chargé apparaissent (`LANGS` dans `zodiac-i18n.js`)
- [x] **Japonais** (日本語) : registre poli, termes de l'astrologie japonaise (牡羊座, 活動宮・不動宮・柔軟宮, アセンダント, ハウス, 逆行), noms officiels des constellations et des pluies d'étoiles filantes ; tradition japonaise du 12e animal, la **イノシシ** (sanglier) ; nom de l'année « 火のウマ年 »
- [x] **Coréen** (한국어) : signes en « 자리 », modalités 활동궁・고정궁・변동궁, 어센던트, 하우스 ; année chinoise sous la forme populaire en Corée, avec la couleur de l'élément : « 붉은 말의 해 » (l'année du cheval rouge, 2026)
- [x] **Portugais du Brésil** (Português) : « você », noms de signes en usage au Brésil (Câncer, Escorpião), « mapa astral », formats de date brésiliens (`pt-BR`)
- [x] **Turc** (Türkçe) : Koç, Boğa, İkizler…, Yükselen, Ev, Öncü・Sabit・Değişken ; année « Ateş Atı Yılı »
- [x] **Arabe** (العربية) : arabe standard moderne et vocabulaire de la tradition astrologique arabe — الوجه (décan), الطالع (ascendant), منقلب・ثابت・ذو جسدين (modalités), الاقتران・التسديس・التربيع・التثليث・المقابلة (aspects), noms arabes des constellations ; année « عام حصان النار »
  - **Mise en page de droite à gauche** (`dir="rtl"`) : tout est en miroir (en-tête, formulaire, onglets, fiches, tableaux, fenêtre de compatibilité, bulles) grâce aux propriétés CSS logiques ; la roue et la carte du ciel gardent l'orientation astronomique
  - Valeurs en degrés isolées en lecture gauche-droite (`<bdi dir="ltr">`) : sinon « ° » et « ′ » passent du mauvais côté du nombre
  - Pas d'espacement entre les lettres pour l'arabe, le hindi et le thaï : il casse les liaisons, à l'écran comme dans l'image exportée
- [x] **Hindi** (हिन्दी) : vocabulaire de l'astrologie indienne — rashis (मेष, वृषभ…), लग्न (ascendant), भाव (maisons), द्रेष्काण (décan), चर・स्थिर・द्विस्वभाव (modalités), वक्री (rétrograde), युति・त्रिकोण・प्रतियुति (aspects) ; année « अग्नि घोड़े का वर्ष »
- [x] **Thaï** (ไทย) : vocabulaire de l'astrologie thaïe — ลัคนา (ascendant), เรือน (maisons), ตรียางค์ (décan), พักร์ (rétrograde), กุม・โยค・จตุโกณ・ตรีโกณ・เล็ง (aspects) ; noms d'années du calendrier thaï (ชวด… มะเมีย) : « ปีมะเมีย ธาตุไฟ » ; dates dans le **calendrier bouddhiste** (1982 → 2525)
- [x] **14 langues** au total ; textes rédigés avec soin, mais une relecture par une personne de langue maternelle reste recommandée avant une diffusion large
- [x] Formats régionaux centralisés (`loc()`) : portugais du Brésil (`pt-BR`), arabe avec chiffres occidentaux ; le thaï gardera le calendrier bouddhiste ; sens d'écriture de droite à gauche prêt pour l'arabe (`RTL_LANGS`)
- [x] **Nom des villes dans l'écriture de la langue** quand le choix est fiable : japonais (katakana pour l'étranger, idéogrammes japonais pour le Japon et le monde chinois : 東京, 大阪, 広州, パリ), chinois simplifié (东京, 广州), thaï. Ailleurs, nom de la base et pays traduit — la base indique l'écriture d'un nom, pas sa langue (« Лондан » est biélorusse, 경성 est l'ancien nom de Séoul)
- [x] 14 langues : Français · English · Español · Português (Brasil) · Italiano · Deutsch · Türkçe · Русский · العربية · हिन्दी · ไทย · 中文 · 日本語 · 한국어
- [x] Traduction complète dans les 14 langues : noms, résumés, décans, forces/faiblesses, amour/carrière, planètes, couleurs, pierres, modalités, éléments, compatibilités, messages d'erreur et libellés d'accessibilité
- [x] Formatage de dates via `Intl.DateTimeFormat` (respecte la locale)
- [x] Changement de langue à chaud **sans perdre le résultat affiché**

### 🔗 Partage et persistance
- [x] **URL partageable** : `?date=YYYY-MM-DD&time=HH:MM&lang=xx` (`time` facultatif)
  - À l'ouverture avec `date` valide → auto-recherche ; date invalide → message d'erreur
  - Seule une date réellement recherchée est écrite dans l'URL
- [x] **Persistance** via `localStorage` : langue, dernière date, dernière heure et nom (sans plantage si le stockage est bloqué)
- [x] Le nom ne quitte jamais l'appareil : il n'est **jamais** écrit dans l'URL
- [x] Bouton **"🔗 Partager"** : copie l'URL via `navigator.clipboard` + toast, repli sur une boîte de copie manuelle si le presse-papiers est indisponible
- [x] **En-tête du profil** : nom (si saisi) et date/heure de naissance, mis à jour en direct quand le nom change
- [x] Bouton **"📷 Exporter en image"** : image PNG de **tout ce qui est affiché** — double fiche, compatibilité (seulement si elle est renseignée), horoscope et carte du ciel — via `html2canvas` ; nom en tête d'image ; fichier du type `zodiac-tiki-scorpio-1982-11-03.png` ; message d'erreur traduit en cas d'échec
  - Chaque bloc est recopié dans un cadre de **largeur figée**, avec **32 px de marge** et une signature « ✦ Zodiaque & Décans » en pied ; la hauteur est mesurée avant la capture : rien ne peut être rogné, même avec la barre de défilement de Windows. Les commandes (champs, boutons, curseur, menu des villes) sont retirées de l'image : la date, le lieu et l'heure y figurent en texte
  - Résolution ×2 si possible, réduite automatiquement pour rester sous 16 millions de pixels et 32 000 pixels de haut (limites des navigateurs, notamment sur iPhone et iPad)
- [x] Bouton **"↺ Nouvelle recherche"** : reset propre (URL, storage, thème, focus)

### ♿ Accessibilité
- [x] `aria-live="polite"` sur les résultats
- [x] `aria-modal="true"` + focus management sur la modale : focus sur « Fermer » à l'ouverture, piégé dans la modale (Tab), rendu à la carte d'origine à la fermeture
- [x] `aria-pressed` sur les boutons de langue
- [x] `aria-label` traduits (bouton Fermer, sélecteur de langue)
- [x] `focus-visible` outlines sur tous les éléments interactifs
- [x] Navigation clavier dans la modale (Escape pour fermer, Entrée/Espace sur les affinités)
- [x] **`prefers-reduced-motion`** : désactive les animations CSS + skip l'animation JS
- [x] Messages d'erreur `role="alert"` (date vide ou invalide)

---

## 🧮 Logique de calcul (points clés)

### Position du Soleil (cœur du calcul)
`sunLongitude(ms)` calcule la longitude écliptique apparente du Soleil (algorithme de Jean Meeus, *Astronomical Algorithms*, chap. 25). Écart maximal mesuré contre la bibliothèque astropy sur 1900-2100 : **0,009°**, soit environ 13 minutes sur l'heure d'entrée dans un signe.
Un calendrier fixe ne suffit pas : l'entrée dans un signe varie d'un jour selon les années (le Soleil est entré en Bélier le 20 mars 2024 à 4 h 06, heure de Paris).

### Détermination du signe et du décan
Signe = tranche de 30° (`floor(λ / 30)`), décan = tranche de 10° dans le signe (`floor((λ mod 30) / 10)`).
La date est validée par `parseISODate()`, l'heure par `parseTime()`. L'heure est interprétée dans le **fuseau du navigateur** ; sans heure, le calcul prend midi.

### Jours de transition
Sans heure, `computeSky()` calcule aussi la position à 00 h 00 et 23 h 59 : si le signe ou le décan change entre les deux, `cusp` vaut `'sign'` ou `'decan'` et le profil affiche une alerte.

### Planète du décan (système des triplicités)
Calculée par `decanRuler()`, pas stockée : décan 1 = maître du signe, décan 2 = maître du signe suivant du même élément (+4 dans `SIGN_ORDER`), décan 3 = maître du troisième (+8).
Exemple : Bélier → Mars, Soleil (Lion), Jupiter (Sagittaire). Les descriptions de décans de chaque langue nomment cette planète.

### Matrice d'affinités
Codée en dur (12×12 symétrique). Tendances par paire d'éléments :

| Paire | Scores |
|---|---|
| Même élément, signes différents | 5 |
| Même signe | 4 |
| Feu-Air, Terre-Eau | 3 à 5 |
| Terre-Air | 2 à 3 |
| Air-Eau | 2 |
| Feu-Terre, Feu-Eau | 1 à 2 |

### Planètes et Lune
- **Planètes** : orbites képlériennes du JPL (E. M. Standish, « Approximate Positions of the Planets », table 1), position géocentrique = planète − Terre, puis précession J2000 → date.
- **Correction Jupiter-Saturne** : leurs perturbations mutuelles sont corrigées par des termes sinus/cosinus sur les arguments classiques, ajustés sur 1500 positions astropy et validés sur 800 autres.
- **Lune** : J. Meeus, chap. 47, 34 termes principaux. **Soleil** : Meeus, chap. 25 (inchangé).
- **Précision mesurée** sur 400 instants de 1900 à 2100 (astropy ; PyEphem pour Pluton) : Soleil 0,008° · Lune 0,022° · Mercure 0,023° · Vénus 0,020° · Mars 0,049° · Jupiter 0,047° · Saturne 0,054° · Uranus 0,058° · Neptune 0,034° · Pluton 0,022°.
- **Rétrograde** : la longitude décroît sur ±12 h ; conforme à astropy sur 262 cas.
- **Phases** : élongation Lune − Soleil, 8 phases de 45° ; événements trouvés par dichotomie, à moins de 3 minutes d'astropy sur le premier semestre 2024.
- **Aspects « signe entier »** : distance entre le signe de l'astre et le signe solaire — 0 conjonction, 4 ou 8 trigone, 3 ou 9 carré, 6 opposition.

### Compatibilité à deux
- `compatibility(p1, p2)` (fonction pure) : signe solaire de chacun par `computeSky()`, animal par `chineseYearInfo()`, Lune par `natalMoon()`.
- Axe occidental : `AFF[a][b]` ; axe chinois : `cnScore()` (absent hors 1900-2100) ; axe lunaire : `AFF` sur les signes lunaires, écarté si l'un d'eux est incertain (Lune qui change de signe le jour de naissance, heure inconnue).
- Entente globale = moyenne des axes présents ; la fonction est symétrique (un test le vérifie sur 40 paires au hasard).

### Carte du ciel
- **Étoiles** : coordonnées J2000 ramenées à l'équinoxe de la date (précession), une fois par date de lecture.
- **Astres** : longitude et latitude écliptiques (`bodyLatitude()` : série de Meeus pour la Lune, géométrie pour les planètes) → coordonnées équatoriales de la date.
- **Hauteur et azimut** : temps sidéral de Greenwich (Meeus, éq. 12.4), sans réfraction ; parallaxe corrigée pour la Lune.
- **Précision mesurée contre astropy** (4 villes, 1960-2090) : étoiles 0,012°, planètes 0,03°, Lune 0,06° ; latitude lunaire 0,004°.
- **Éclipses** : table calculée avec astropy (géométrie Soleil-Terre-Lune, règle de Danjon), contrôlée sur 53 éclipses connues de 1999 à 2029 et sur des éclipses marginales. Visibilité d'une éclipse de Lune : Lune au-dessus de l'horizon au maximum. Les éclipses de Soleil ne sont visibles que d'une bande du globe : l'appli le signale sans calculer la bande.
- **Étoiles filantes** : dates du calendrier de l'Organisation internationale des météores (le pic réel peut varier d'un jour).
- **Heure** : celle de l'appareil ; pour une ville lointaine choisie dans la liste, le ciel affiché est celui de l'heure de l'appareil, pas de l'heure locale de cette ville.

### Zodiaque chinois
- **Année chinoise** : si la date de naissance précède le Nouvel An de son année (table `LNY_DATES`), elle appartient à l'année précédente.
- **Tronc céleste** (élément + yin/yang) : `(année − 4) mod 10`, deux troncs par élément dans l'ordre Bois, Feu, Terre, Métal, Eau ; pair = yang. **Branche terrestre** (animal) : `(année − 4) mod 12`, 0 = Rat.
- **Animal de l'heure** : `floor(((heure + 1) mod 24) / 2)` ; le Rat couvre 23:00-00:59.
- **Relations** (`cnRelation()`), par priorité : opposition (6 branches d'écart) > six harmonies > triade (même reste modulo 4) > nuisance > punition > neutre. Les listes de `zodiac-data.js` sont recontrôlées par ces règles arithmétiques dans les tests.
- **Table du Nouvel An** : bibliothèques de calendrier chinois (lunardate, lunarcalendar, concordantes), recoupées par le calcul astronomique des nouvelles lunes ; seuls écarts du calcul, expliqués : 1916 (heure locale de Pékin alors en vigueur) et 2034 (mois intercalaire).

### Modale de compatibilité
`compatKey()` construit une clé `el1_el2` dans l'ordre de `ELEMENT_ORDER` (Feu, Terre, Air, Eau) et récupère l'explication dans `I18N[lang].compat.pairs[clé]`. 10 combinaisons couvrent toutes les paires.

---

## 📜 Crédits et licences
- **Étoiles et tracés des constellations** : [d3-celestial](https://github.com/ofrohn/d3-celestial), © 2015 Olaf Frohn, licence BSD-3-Clause (texte complet en tête de `zodiac-sky-data.js`) ; étoiles issues du catalogue XHIP (Anderson & Francis, 2012, d'après Hipparcos), tracés d'après l'Union astronomique internationale.
- **Export en image** : [html2canvas](https://html2canvas.hertzen.com) 1.4.1, © Niklas von Hertzen, licence MIT (texte complet en tête de `html2canvas.min.js`, donc aussi dans la version autonome).
- **Valeurs de référence des maisons** : calculées avec la Swiss Ephemeris 2.10 (Astrodienst), utilisée uniquement pour valider les calculs, non distribuée avec l'appli.
- **Fuseaux horaires** : base IANA (domaine public), intégrée aux navigateurs.
- **Villes de naissance** : [GeoNames](https://www.geonames.org), licence Creative Commons Attribution 4.0 (CC BY 4.0) ; mention affichée en pied de page de l'appli.
- **Corrections du Soleil et de la Lune** : ajustées sur l'éphéméride intégrée d'astropy (ERFA), utilisée uniquement pour le calcul des coefficients et la validation.
- **Orbites des planètes** : JPL, E. M. Standish, « Approximate Positions of the Planets » (données publiques).
- **Soleil et Lune** : formules de J. Meeus, *Astronomical Algorithms*.
- **Références de validation** (non embarquées) : astropy, PyEphem, lunardate, lunarcalendar.

---

## 📊 Statistiques

| Métrique | Valeur |
|---|---|
| Fichiers | 17 fichiers de l'appli (1 HTML, 1 CSS, 15 JS) + `html2canvas.min.js` + `build-standalone.py` + `ZODIAC-standalone.html` |
| Langues supportées | 14 |
| Signes × décans | 12 × 3 = 36 profils |
| Combinaisons d'affinités | 12 × 12 = 144 |
| Explications élémentaires | 10 (× 7 langues = 70 textes) |
| Dépendances externes | 1 (html2canvas CDN) |
| Poids approximatif | ~460 Ko non minifié (dont ~230 Ko de traductions et ~55 Ko de données du ciel) |
| Tests automatisés | 71 (dans `zodiac-tests.js`) |

---

## 🧪 Comment tester

### Tests automatiques
Ouvrir `ZODIAC.html?test` (tous les fichiers dans le même dossier). Un rapport s'affiche en bas à droite (détail aussi dans la console). Les 71 tests couvrent (dont 6 pour le thème natal : fuseaux, villes, maisons contre la Swiss Ephemeris, repli polaire, thème de référence, textes) :
La version autonome se teste de la même façon : `ZODIAC-standalone.html?test` (la suite y est intégrée ; un test supplémentaire vérifie que sa copie vierge est complète et sans donnée personnelle).
- le calcul du Soleil, comparé à 40 positions de référence calculées par astropy (1900-2100) ;
- signes et décans de dates de référence, équinoxes connues, jours de transition, effet de l'heure ;
- la validation des dates et des heures ;
- les planètes des décans, la matrice d'affinités, les 144 paires de la modale dans les 7 langues, les étoiles ;
- la complétude des traductions (structure identique au français, aucun texte resté en français, chaque décan nomme sa planète) ;
- le zodiaque chinois : dates connues du Nouvel An, cohérence de toute la table, année/animal/élément/polarité de cas de référence, cycle de 60 ans, animal de l'heure, relations recontrôlées par les règles arithmétiques, nom de l'année dans les 7 langues (accords compris), textes traduits ;
- les planètes : positions des 10 astres face aux références (1900-2100), rétrogradations, phases lunaires de 2024, aspects, transits hebdomadaires, Lune natale, textes de l'horoscope ;
- la compatibilité : cas de référence, symétrie sur 40 paires, axes absents (hors plage chinoise, Lune incertaine) ;
- la carte du ciel : hauteur et azimut face à astropy (étoiles, Lune, planètes, 4 villes), latitude lunaire, projection, table des éclipses, visibilité locale, étoiles filantes, villes ;
- l'interface : neutralisation du nom saisi, nom du fichier exporté, date du jour, ligne de naissance, symboles des signes en rendu texte, contraste du mode clair pour les 12 palettes, géométrie de la roue, règles de l'historique.

Les tests sont écrits pour réussir quel que soit le fuseau horaire de l'ordinateur.

### Cas nominaux (sans heure)
| Date | Signe attendu | Décan |
|---|---|---|
| 1990-05-15 | Taureau | 3e (sous Saturne) |
| 2000-12-25 | Capricorne | 1er (sous Saturne) |
| 1985-08-10 | Lion | 2e (sous Jupiter) |
| 1970-03-25 | Bélier | 1er (sous Mars) |

### Jours de transition (alerte attendue sans heure)
- `1990-12-22` → le Soleil entre en Capricorne à 4 h 06 (heure de Paris) : avant, Sagittaire ; après, Capricorne
- `1990-01-20` → entrée en Verseau à 9 h 01 (heure de Paris)
- `2024-03-20` → entrée en Bélier à 4 h 06 (heure de Paris)
- `2000-02-29` → passage du 1er au 2e décan des Poissons dans la journée

### URLs prêtes à tester
- `ZODIAC.html?test` → rapport des tests automatiques
- `ZODIAC.html?date=2024-03-20&lang=fr` → Bélier, avec alerte de transition
- `ZODIAC.html?date=2024-03-20&time=03:30&lang=fr` → Poissons, 29°58′ (heure de Paris)
- `ZODIAC.html?date=2024-03-20&time=04:30&lang=fr` → Bélier
- `ZODIAC.html?date=1990-05-15&lang=fr` → Taureau, 3e décan
- `ZODIAC.html?date=1990-04-15&lang=fr` → Bélier, 3e décan (Jupiter) ; ouvrir Balance dans les affinités pour vérifier un texte Feu × Air
- `ZODIAC.html?date=1978-07-05&lang=ru` → Cancer, 2e décan (Pluton), en russe
- `ZODIAC.html?date=1995-10-20&lang=zh` → Balance, 3e décan (Mercure), en chinois
- `ZODIAC.html?date=2023-02-29&lang=it` → message « Data non valida. » (date inexistante)
- `ZODIAC.html?date=1990-04-15&time=10:30&lang=fr` → Bélier + Cheval de Métal, animal de l'heure Serpent
- `ZODIAC.html?date=1990-01-26&lang=fr` → fiche chinoise : Serpent de Terre (Nouvel An 1990 le 27 janvier)
- `ZODIAC.html?date=1990-04-15&lang=ru` → nom d'année accordé : « Год Металлической Лошади »
- `ZODIAC.html?date=1850-06-01&lang=fr` → fiche chinoise remplacée par le message « disponible de 1900 à 2100 »
- `ZODIAC.html?date=1990-04-15&time=10:30&lang=fr` → compatibilité avec le 1988-08-10 à 08:00 : Bélier + Lion 5★, Cheval + Dragon 3★ (neutre), Lunes Sagittaire + Cancer 1★, entente globale 3,0 / 5
- `ZODIAC.html?date=1985-11-08&lang=fr` → dans la carte du ciel, date du 2026-10-25 et curseur sur 22:00 à Paris : pleine Lune et Saturne au sud-est, Orionides en cours ; choisir Sydney : ciel de jour (7 h du matin là-bas), Croix du Sud visible
- `ZODIAC.html?date=1985-11-08&lang=fr` → Scorpion ; dans la carte Horoscope, choisir la date du 2024-04-08 puis « Semaine » : nouvelle Lune (éclipse) le lundi 8 avril à 20:22 (heure de Paris)

Les heures indiquées dans ces exemples supposent un ordinateur réglé sur l'heure de Paris.
