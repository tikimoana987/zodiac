# Cahier — Cosmic Daily (V10.8, 5 novembre 2026 ; V10.9 « Cosmic Daily 2 », 7 novembre 2026)

## 000. Variété et événements du ciel (V10.15, 9 novembre 2026)

Retour de la testeuse : trop de répétitions d'une rubrique à l'autre (le même trait du signe dans plusieurs rubriques le même jour, les mêmes formules de chute). Décisions de Joann : plutôt qu'une réécriture complète, **plus de variantes** et **corrections ciblées** ; et des lignes liées au **vrai ciel du jour**.

- **Carte des traits** (dans les consignes de rédaction) : pour chaque signe, les facettes propres à chaque rubrique et des motifs réservés à une seule rubrique (le canapé du Taureau en Bien-être, les onglets des Gémeaux en Carrière…), plus un catalogue de mécaniques comiques à faire tourner (fausse dépêche, faux avis client, faux sondage, mini-dialogue, note de service, témoin inattendu…) et un plafond pour la chute « … demande / réclame Y ».
- **Volume** : Drôle et Piquant passent de 8 à **12 variantes** par rubrique, Roast My Zodiac de 10 à **15** ; 243 textes repérés (motif hors de sa rubrique ou formule répétée) réécrits. Mesure : textes Drôle et Piquant dont le motif sort de sa rubrique, **22 % → 1 %** (sur 1 440 textes au lieu de 960). Classique et phrases d'ambiance inchangés.
- **Événements du ciel** (`cosmicEvents(iso, sign)`, `COSMIC_EVENTS` par ordre d'importance) : éclipse de Soleil ou de Lune dans les trois jours, pleine ou nouvelle Lune (±12°), premier ou dernier quartier (±8°), Lune, Soleil, Vénus, Mars, Jupiter ou Saturne dans le signe lu, Mercure, Vénus, Mars, Jupiter ou Saturne rétrograde, pluie d'étoiles filantes en cours (`{shower}`, nom sans article). Deux au plus par jour, sous les rubriques (symbole et ligne dans la voix choisie) et dans la ligne « Ciel du jour » (libellés `ui.events`, sans doublon pour « Lune dans votre signe ») ; Mercure garde ses textes (`mercury`). Textes `events` : 17 événements × 3 voix × 3 variantes.
- **Traductions** : seulement les textes nouveaux ou réécrits (environ 950 par langue, fichiers `cosmic3-xx.json`), fusionnés par numéro dans `data/cosmic/cosmic-xx.json`.
- **Tests** : tailles (8 / 12 / 15), événements des 14 langues, cas réels (Saturne dans le Bélier en 2026, éclipse de Soleil et nouvelle Lune du 6 février 2027, pleine Lune du 24 novembre 2026, Mercure rétrograde le 5 novembre 2026).

## 00. Retouches (V10.10, 8 novembre 2026)

- **Un seul Roast My Zodiac par jour** et par signe (décision de Joann : la rareté fait le charme) ; bouton « Encore un » retiré.
- **Accueil** : Cosmic Daily devient une carte animée (galaxie dessinée en code par `galaxySvg()` : spirale d'étoiles qui tourne, trois planètes en orbite, étoiles qui scintillent), placée en premier, à côté de la carte de l'Oracle.

## 0. Version 2 (V10.9), après les essais de la testeuse

Constat (6 novembre) : textes trop semblables (Bien-être et Sagesse communs à tous les signes, deux variantes seulement, beaucoup de phrases ouvrant sur « la Lune en … ») et humour trop sage. Décisions (Joann, 6 et 7 novembre) : Classique sérieux et naturel ; Drôle franchement drôle ; Piquant et Roast My Zodiac mordants (sarcasme, comparaisons absurdes, chutes inattendues) ; vouvoiement partout ; limites : ni handicap, ni maladie, ni mort, ni suicide, ni terme médical ou psychiatrique, rien sur le physique, le poids, la sexualité, l'âge, le genre, l'origine, la religion ; clichés d'argent permis (Capricorne), jamais la situation financière réelle ; fausse certitude comique permise en Drôle et Piquant, jamais en Classique ni sur l'argent, la santé ou l'amour réels.

- **Textes** : chaque rubrique est propre au signe (Bien-être et Sagesse compris), **8 variantes** par signe × voix × rubrique (12 × 3 × 5 × 8 = 1 440), parcourues en 8 jours avec un décalage par rubrique et par signe ; une **phrase d'ambiance** (`sky`, 3 voix × 4 éléments × 6) porte seule le ciel du jour (`{moon}`), les rubriques parlent du signe dès la première phrase ; **Roast My Zodiac** : 10 roasts de 3 ou 4 phrases par signe (le roast du jour, puis « Encore un »). Rédaction ChatGPT en trois lots (le lot 1 a fait reprendre Piquant et Roast My Zodiac après lecture de la testeuse), 13 traductions.
- **Partage en image** (`cosmicRoastCanvas`, `shareRoastImage`) : image 1080 × 1350 dessinée sur l'appareil (fond étoilé, symbole et nom du signe, texte coupé par mots avec `Intl.Segmenter`, adresse du site), partagée par le système (`navigator.share` avec fichier) ou téléchargée.
- **Accueil, sans profil** : bouton « ✺ Cosmic Daily » à côté de l'Oracle (masqué quand un profil est affiché), fenêtre `#cosmicDialog` : choix du signe retenu sur l'appareil (`zodiac_cosmicSign`), focus gardé, Échap (après la bulle (i) si elle est ouverte), retour du focus au bouton. Deux affichages (`cosmicCtx.tab`, `cosmicCtx.dlg`) aux identifiants suffixés (`-tab`, `-dlg`) ; dans la fenêtre, la carte n'est pas une `section` (pas de second repère de même nom).
- **Tests** : 3 tests intégrés (textes des 14 langues, nouvelle structure ; 8 jours sans répétition, deux signes jamais au même rang, Roast My Zodiac ; image 1080 × 1350 et coupure des lignes en français, arabe, japonais, thaï) ; parcours réel (onglet, voix au clavier, Roast My Zodiac, fenêtre de l'accueil) ; audit axe-core avec Roast My Zodiac déplié et avec la fenêtre ouverte.

Les sections suivantes décrivent la version 1 ; ce qui change est résumé ci-dessus.

## 1. Principe

Idée d'une testeuse (4 novembre 2026). Un 7e onglet, **Cosmic Daily**, propose chaque jour un mini-horoscope léger et drôle, d'après le **vrai ciel du jour**, pour le signe et la **voix** choisis :

- voix : ✨ **Classique** (doux, inspirant), 😂 **Drôle**, 😈 **Piquant** (sarcastique mais affectueux) ; la voix est retenue sur l'appareil (`zodiac_cosmicVoice`) ;
- rubriques : 💼 Carrière, ❤️ Amour, 🌿 Bien-être, ✨ Sagesse cosmique, 😈 Cosmic Roast (un par voix, décision du 4 novembre) ;
- signe : celui du profil par défaut, un sélecteur pour lire les autres (non retenu : lire celui d'un ami reste ponctuel) ;
- ligne de plus quand **Mercure est rétrograde** ;
- bouton **Partager** (texte du jour et adresse du site, jamais le profil) ; mention « Un jeu pour sourire, pas une prédiction. »

« Cosmic Daily » et « Cosmic Roast » restent en anglais dans toutes les langues (noms de marque). Le choix d'une voix n'existe que dans cet onglet (décision du 4 novembre : pas de voix drôle pour la synthèse du tarot, dont la question peut être grave).

## 2. Le ciel du jour

`cosmicSky(iso)` (`zodiac-cosmic.js`), à **midi, heure de l'appareil** : signe que traverse la Lune (`moonLongitude`), son **élément** (`SIGN_META[…].element` : `fire`, `earth`, `air`, `water`), Mercure rétrograde ou non (`isRetrograde('mercury', …)`). Exemple : Mercure rétrograde du 24 octobre au 13 novembre 2026.

## 3. Assemblage du texte

- Textes écrits **par élément du signe lunaire** (un texte « Feu » convient à la Lune en Bélier, en Lion ou en Sagittaire), avec le repère `{moon}` remplacé par « la Lune en … » de la langue (`moon`), toujours sujet de sa phrase, avec majuscule en début de phrase.
- Par signe : Carrière, Amour, Cosmic Roast (12 signes × 3 voix × 3 rubriques × 4 éléments × 2 variantes). Communs : Bien-être, Sagesse cosmique (3 voix × 2 × 4 × 2). Mercure : 3 variantes par voix.
- `cosmicReading(lang, sign, voice, iso)` : variante = (jour + rang de la rubrique + rang du signe) modulo 2, donc l'horoscope change chaque jour et le même jour redonne le même texte ; **une seule rubrique cite la Lune** quand l'autre variante le permet (sinon trop répétitif).
- Changer de signe ou de voix ne redessine que les rubriques : le focus reste sur la commande (leçon du changement d'heure dans Safari).

## 4. Textes et garde-fous

Rédigés par ChatGPT sur consignes (exemples de ton jugés par l'équipe, puis lot 1 : textes communs + Bélier à Cancer ; lot 2 : Lion à Poissons), contrôlés automatiquement et relus ; 13 traductions (une langue à la fois), contrôlées automatiquement. Garde-fous : taquiner les clichés du signe, jamais la personne (physique, santé, argent, intelligence, vie amoureuse réelle, sexualité, âge, genre, origine, religion, handicap) ; Bien-être sans conseil médical ni alcool ; aucune promesse ; pas de jeux de mots intraduisibles ; maximes inventées.

## 5. Fichiers

| Fichier | Rôle |
|---|---|
| `data/cosmic/cosmic-xx.json` | Les 14 langues (source de vérité) : `ui` (libellés, texte de la bulle), `moon`, `common`, `mercury`, `signs` |
| `tools/regen_cosmic.js` | Contrôle les 14 fichiers (structure identique au français, `{moon}` aux mêmes endroits, accolades, apostrophes, thaï, marques) et génère les deux suivants |
| `zodiac-cosmic-ui.js` | `COSMIC_UI` : libellés et bulle (i), 14 langues, toujours chargé |
| `zodiac-cosmic-xx.js` | `window.COSMIC_I18N.xx` : les textes d'une langue (≈ 90 à 230 Ko) |
| `zodiac-cosmic.js` | Onglet : ciel du jour, assemblage, rendu, partage, chargement à la demande |
| `zodiac-app.js` | 7e onglet (`VIEW_MODES`, `VIEW_TABS`, `tabCosmic`, `viewCosmic`), appel de `renderCosmic()` |
| `build-standalone.py`, `sw.js` | Site : `zodiac-cosmic-xx.js` retirés de la page (`LAZY_RE`), publiés à part et listés dans `window.ZODIAC_LAZY` ; le service worker les garde s'ils ont été chargés (`LAZY`), sans les précharger |

**Changer un texte :** modifier `data/cosmic/cosmic-xx.json`, lancer `node tools/regen_cosmic.js`, puis les tests.

## 6. Poids

Sur le site, chaque visiteur ne charge que **sa langue** (préchargée 1,5 s après l'ouverture, et à chaque changement de langue), ensuite gardée hors ligne. ZODIAC.html et la version autonome contiennent les 14 langues : version autonome ≈ 10 Mo (8,4 Mo avant).

## 7. Tests

- Suite intégrée : textes des 14 langues (structure, `{moon}`, marques, ponctuation) ; ciel du jour et horoscope (Mercure rétrograde en novembre 2026, élément, bonne liste de textes, alternance sur 8 jours, même texte le même jour, Lune citée au plus deux fois, majuscule en allemand). 122 tests au total.
- Parcours réel (fr, ar, ja) : 5 rubriques, voix au clavier avec le focus gardé, voix retenue après rechargement, autre signe.
- Audit axe-core : onglet Cosmic Daily en français et en arabe, thèmes sombre et clair.
- Site installable : textes chargés à la demande, une langue à la fois ; réseau coupé après une mise à jour, Cosmic Daily en français toujours disponible.
- Vérifié aussi dans WebKitGTK (moteur de Safari) : suite 122/122, voix au clavier.
