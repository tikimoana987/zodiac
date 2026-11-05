# Cahier — Cosmic Daily (V10.8, 5 novembre 2026)

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
