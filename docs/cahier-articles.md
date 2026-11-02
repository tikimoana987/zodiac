# Cahier — articles « En savoir plus » (V10.3, 2 novembre 2026)

## 1. Principe

Chaque bulle (i) d'une méthode garde son texte court et se termine par un lien **« En savoir plus »**. Ce lien ouvre un article dans un panneau de lecture : un titre, quatre rubriques, puis les sources.

- **D'où ça vient** (`history`) : l'histoire de la méthode.
- **Le principe** (`principle`) : la logique de la tradition.
- **Comment ZODIAC l'applique** (`zodiac`) : ce que l'appli calcule réellement, fidèle au code.
- **Ce que ce n'est pas** (`notThis`) : les limites, sans promesse ni prédiction.
- **Sources** : ouvrages et documents cités, en tête de liste.

Les textes sont présentés comme une lecture symbolique, jamais comme une preuve ou un destin. Rien n'est chargé ni envoyé : tout est déjà dans la page, hors ligne compris.

## 2. Les dix articles et leurs points d'entrée

| Article | Bulles (i) qui y mènent |
|---|---|
| `signs` — Signes du zodiaque et décans | position du Soleil, décan, signe et constellation, modalité, planète, affinités |
| `chinese` — Zodiaque chinois | année chinoise, élément de l'année, polarité, élément fixe, animal de l'heure, affinités chinoises |
| `natal` — Thème natal | thème natal, ascendant, Milieu du Ciel, maisons, aspects |
| `sky` — Ciel du moment | horoscope, carte du ciel, nuit, rétrogradation, éclipse de Soleil, calendrier, transits |
| `compat` — Compatibilité symbolique | compatibilité, relations entre signes, chemins de vie, synastrie |
| `numerology` — Numérologie | numérologie, année personnelle |
| `square` — Carré de Pythagore | carré, lignes du carré |
| `portrait` — Portrait symbolique | portrait, décan du portrait |
| `tarot` — Tarot et tirages | tarot, cartes renversées, arcanes mineurs, tirages |
| `oracle` — Oracle Oui / Non | bouton « En savoir plus » dans la fenêtre de l'Oracle |

Sans article : prénom, heure, lieu de naissance, confidentialité. La table est `ARTICLE_OF_INFO` dans `zodiac-articles.js` ; un test vérifie que chaque bulle citée existe et que les dix articles sont tous accessibles.

## 3. Textes

- Français rédigé par ChatGPT sur consigne, contrôlé (longueurs, mots interdits, exactitude historique, fidélité aux calculs), puis 4 corrections validées par Joann : source JPL remplacée par *Keplerian Elements for Approximate Positions of the Major Planets* (E. M. Standish) ; « œil » ; phrase du portrait « correspondances traditionnelles, et non de calculs astronomiques » ; source unique du carré (Alexandrov, 2015).
- 13 traductions par ChatGPT, contrôlées automatiquement : structure, accolades, apostrophes droites (langues en alphabet latin), thaï sans deux-points ni point final, aucun texte resté en français, chiffres et méthodes conformes.
- Alignements faits à l'intégration : noms des tirages et réponses de l'Oracle repris mot pour mot de l'interface (russe, arabe, hindi, chinois, japonais, coréen) ; un espace manquant en arabe.
- Les guillemets ‘ ’ du coréen sont les guillemets de la langue (déjà employés dans l'appli), pas des apostrophes.
- Paragraphes : une ligne vide (`\n\n`) dans le JSON sépare deux paragraphes.

## 4. Fichiers

| Fichier | Rôle |
|---|---|
| `data/articles/articles-xx.json` | Les 14 textes validés (source de vérité) |
| `tools/regen_articles.js` | Contrôle les 14 fichiers et génère `zodiac-articles-data.js` ; s'arrête à la moindre anomalie |
| `zodiac-articles-data.js` | `ARTICLES_I18N`, généré : ne pas modifier à la main |
| `zodiac-articles.js` | Table bulle → article, panneau de lecture, clavier |
| `ZODIAC.html` | Panneau `#article` ; bouton `#oracleArticle` dans l'Oracle ; scripts chargés après `zodiac-app.js`, avant `zodiac-oracle.js` |
| `zodiac-app.js` | `showPop()` ajoute le lien `.info-more` quand la bulle a un article |
| `zodiac-oracle.js` | Libellé du bouton et ordre de tabulation (centre, « En savoir plus », « Fermer ») |
| `zodiac.css` | Styles `.info-more`, `.article-*`, `.oracle-article` |

**Changer un texte :** modifier `data/articles/articles-xx.json`, lancer `node tools/regen_articles.js`, puis les tests.

## 5. Accessibilité

- Le lien est un vrai bouton. Au clavier : Tab mène du bouton (i) à « En savoir plus », Maj+Tab y revient, Tab depuis le lien ferme la bulle et poursuit après le bouton (i).
- Panneau : `role="dialog"`, `aria-modal`, titre `<h2>` qui reçoit le focus à l'ouverture (les flèches font défiler) ; focus gardé entre les deux boutons « Fermer » ; Échap ferme ; le focus revient au bouton (i) ou au bouton de l'Oracle.
- Clavier écouté en phase de capture : ouvert depuis l'Oracle, Échap ne ferme que l'article.
- Arabe de droite à gauche par la page ; propriétés CSS logiques ; thèmes clair et sombre par les variables existantes ; plein écran sous 560 px avec marges de sécurité (encoche).

## 6. Tests

- Suite intégrée (3 tests) : 14 langues et règles d'écriture, corrections du français ; table bulle → article et accès aux dix articles ; lien dans la bulle, panneau, rubriques, sources, retour du focus, Oracle sans rubrique « Sources » vide. 113 tests au total.
- Parcours réels (`tools/run_tests.py`, fr, ar, ja) : bulle « décan » au clavier, lien, panneau, focus gardé, Échap, retour au bouton (i), puis article de l'Oracle (Échap laisse l'Oracle ouvert).
- Audit axe-core : bulle avec lien ouverte, puis article ouvert, en français et en arabe, thèmes sombre et clair.

## 7. Poids

Environ 0,6 Mo de textes (14 langues). Version autonome mesurée : 7,8 Mo avant, 8,4 Mo après. À reprendre dans le chantier d'allègement des mises à jour.
