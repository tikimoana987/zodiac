# ZODIAC — Cahier de l'onglet Tarot V0.2

1er novembre 2026 · Joann · Arbitré après relecture (DeepSeek, Gemini, GPT).
Copie du document de travail ; intégré dans `zodiac-spreads.js` (tirages), `zodiac-app.js` (onglet), `zodiac.css`, textes dans les fichiers de langue (`tabs.tarot…`, `tarot.spreads`, `tarot.gesture`, `info.spread`).

## Ce qui change depuis la V0.1

| Point | V0.1 | V0.2 |
| --- | --- | --- |
| Six mois | Un tirage par jour | Un tirage par mois civil, gardé jusqu'à la fin du mois |
| Sauvegarde | Un seul emplacement pour tous les profils (le tirage d'un profil écrasait celui d'un autre) | Un tirage par profil et par type ; tirages expirés et questions effacés automatiquement |
| Options | « Valent pour tous les tirages » | Seulement pour les 4 tirages interactifs, au moment du mélange ; carte de naissance et carte du jour inchangées |
| Sélection | Non précisé | Sélection en cours retrouvée après fermeture ; « Recommencer » ; « Poser les cartes » actif quand le compte est complet ; tirage consommé à ce moment |
| Clavier | Un bouton par carte | Un seul arrêt Tab, puis les flèches ; annonces au début et à la fin |
| Question | Contradiction entre décision et schéma | Obligatoire pour les trois tirages à question, comme avant ; schéma corrigé |
| Mois, arabe | Non précisé | Noms fournis par le navigateur comme les autres dates ; mois dans le sens de lecture ; compteur jamais inversé |
| Bulle (i) | 60 à 110 mots | 100 à 150 mots |
| Avenir | « La tendance si rien ne change » | « Ce qui pourrait se dessiner si rien ne change » |
| Textes | 31 | 35 par langue |

Non retenus : ouvrir les tirages sans profil (reporté, deux relectures sur trois contre) ; rendre la question facultative.

## Objectif et principes

Le tarot quitte l'onglet « Numérologie & tarot » pour un onglet à lui, plus interactif : on mélange le jeu, on choisit ses cartes dans un éventail, on les retourne une à une. Trois tirages s'ajoutent à ceux d'avant. Demande d'une testeuse, validée le 31 octobre (feuille de route, § 3.3).

- **Un rituel, pas une prédiction.** Le tarot reste présenté comme une tradition symbolique qui invite à la réflexion.
- **L'ambiance compte.** Le geste (mélanger, choisir, retourner) fait partie de l'expérience ; il reste sobre en mode « animations réduites ».
- **Le hasard est honnête.** Le jeu est mélangé par le hasard du navigateur ; choisir une carte face cachée revient à tirer au hasard, le choix est un geste symbolique.
- **Peu de textes nouveaux.** Les 78 cartes ont déjà leur sens (à l'endroit et renversé, 14 langues) ; les nouveaux tirages réutilisent ces textes et n'ajoutent que des noms de positions et des consignes.
- **Confidentiel.** La question posée reste sur l'appareil, jamais envoyée ; elle n'apparaît pas dans l'image exportée.

## Ce qui existait avant

| Élément | Fonctionnement d'avant | Devenir |
| --- | --- | --- |
| Carte de naissance | Calculée depuis la date (somme réduite à 22 au plus) | Déplacée dans l'onglet Tarot, inchangée |
| Carte du jour | Tirage figé pour une personne et une date, la même toute la journée | Déplacée, inchangée |
| Tirage à trois cartes | Passé · Présent · Avenir ; question obligatoire ; un tirage par jour, gardé sur l'appareil | Garde son fonctionnement, gagne le geste « mélanger, choisir » |
| Deux jeux | Marseille et Waite-Smith, illustrations originales | Inchangés |
| Options | Cartes renversées ; jeu complet de 78 cartes | Valent pour les 4 tirages interactifs |
| Textes des cartes | 78 cartes × (nom, 3 mots-clés, une phrase), à l'endroit et renversé, 14 langues | Réutilisés tels quels |
| Oracle Oui / Non | Bouton sur l'accueil et lien dans « Numérologie & tarot » | Le lien passe dans l'onglet Tarot ; le bouton de l'accueil reste |
| Portrait symbolique | Dans « Numérologie & tarot » | Reste avec la numérologie |

## Décisions

1. **D1 — Un sixième onglet « Tarot ».** L'onglet « Numérologie & tarot » devient « Numérologie » (nombres et portrait symbolique). Le nouvel onglet réunit la carte de naissance, la carte du jour, les tirages et l'accès à l'Oracle. Il s'ouvre après la saisie d'une date de naissance.
2. **D2 — Cinq tirages**, du plus simple au plus long : carte du jour (automatique), une question · une carte, Passé · Présent · Avenir, Situation · Défi · Conseil, les six prochains mois. Lectures par thème reportées (version légère plus tard).
3. **D3 — Le geste.** Mélanger le jeu, choisir ses cartes face cachée dans l'éventail (toutes les cartes du jeu), puis « Poser les cartes », actif seulement quand le compte est complet, et les retourner une à une. « Recommencer » remet l'éventail à zéro sans consommer le tirage. Une sélection en cours est retrouvée après fermeture de la page. La carte du jour ne passe pas par ce geste.
4. **D4 — Hasard.** Mélange de Fisher-Yates avec le hasard cryptographique du navigateur ; l'éventail montre les cartes dans cet ordre ; la carte choisie est celle qui s'y trouve. Le sens renversé, si l'option est active, est tiré au mélange, une chance sur deux.
5. **D5 — Fréquence.** Une question · une carte, Passé · Présent · Avenir, Situation · Défi · Conseil : un tirage par jour et par type, jusqu'à minuit (heure de l'appareil). Six mois : un tirage par mois civil. Un tirage est consommé quand on pose les cartes.
6. **D6 — Question.** Obligatoire (au moins 3 caractères) pour les trois tirages à question ; aucune pour les six mois. Elle reste sur l'appareil et s'efface avec le tirage expiré.
7. **D7 — Pas de texte par carte et par position** : nom, mots-clés et phrase de la carte sous le nom de la position et une courte consigne (un texte par carte et par position coûterait plus de 14 000 textes).
8. **D8 — Six mois à partir du mois en cours** ; noms des mois fournis par le navigateur avec le même réglage de langue que les autres dates ; en arabe, dans le sens de lecture.
9. **D9 — Méthode.** 35 textes courts par langue, rédigés en français par Claude, traduits par ChatGPT ; intégration et tests ; publication quand les 14 sont prêtes.
10. **D10 — Sauvegarde par profil et par type** (`zodiac_spreads`) ; tirages expirés et questions effacés ; l'ancien tirage à trois cartes (`zodiac_spread`) repris dans le nouveau format.
11. **D11 — Options** au moment du mélange, pour les 4 tirages interactifs seulement ; un tirage fait ne change jamais ; changer de jeu change seulement l'apparence. Carte de naissance et carte du jour : 22 arcanes majeurs, jamais renversées.
12. **D12 — Clavier et lecteurs d'écran** : un seul arrêt Tab sur l'éventail, flèches (inversées en arabe), Début et Fin ; Entrée ou Espace pour choisir ; annonces au début, à chaque choix (« 2/3 ») et à la fin ; compteur toujours lu de gauche à droite.
13. **D13 — Bulle (i) des tirages** de 100 à 150 mots ; consigne « Avenir » : « Ce qui pourrait se dessiner si rien ne change ».

## Les tirages

| Tirage | Cartes | Positions et consigne | Question |
| --- | --- | --- | --- |
| Carte du jour | 1 | — (la même toute la journée) | Non |
| Une question · une carte | 1 | Réponse du tarot — la carte qui éclaire votre question | Oui |
| Passé · Présent · Avenir | 3 | Passé — ce qui a conduit à la situation ; Présent — ce qui se joue ; Avenir — ce qui pourrait se dessiner si rien ne change | Oui |
| Situation · Défi · Conseil | 3 | Situation — ce qui est en jeu ; Défi — ce qui demande votre attention ; Conseil — la piste à suivre | Oui |
| Les six prochains mois | 6 | Un mois par carte, à partir du mois en cours — le climat symbolique du mois | Non |

## Le geste

Choisir un tirage → écrire sa question (si le tirage la demande) → mélanger le jeu → choisir ses cartes face cachée dans l'éventail → les poser → les retourner une à une → lecture gardée sur l'appareil jusqu'à minuit (fin du mois pour les six mois).

- **Mélanger** : animation d'environ 1,5 s ; aucune en mode « animations réduites ». Les options s'appliquent à ce moment.
- **Choisir** : toutes les cartes du jeu (22, ou 78) face cachée, dos légers, bande que l'on fait défiler ; une carte choisie se soulève et prend son numéro ; compteur « 2/3 » ; toucher à nouveau une carte la repose.
- **Poser** : actif quand le compte est complet ; le tirage est alors enregistré et ne peut plus être refait jusqu'à la période suivante.
- **Retourner et lire** : position, consigne, puis nom, mots-clés et phrase de chaque carte (à l'endroit ou renversée).
- **Reprendre** : une sélection commencée est retrouvée telle quelle si l'on ferme la page.

## Textes (35 par langue)

| Clé | Texte français |
| --- | --- |
| `tabs.numTarot` (réécrit) | Numérologie |
| `tabs.numTarotSub` (réécrit) | Nombres et portrait |
| `tabs.tarot` | Tarot |
| `tabs.tarotSub` | Tirages et arcanes |
| `tarot.spreads.title` | Choisissez un tirage |
| `tarot.spreads.one.name / desc / pos / hint` | Une question, une carte · Une seule carte pour éclairer une question précise. · Réponse du tarot · La carte qui éclaire votre question |
| `tarot.spreads.three.name / desc` | Passé · Présent · Avenir · Ce qui a conduit à la situation, ce qui se joue, ce qui pourrait se dessiner. |
| `tarot.spreads.three.hints` (3) | Ce qui a conduit à la situation · Ce qui se joue · Ce qui pourrait se dessiner si rien ne change |
| `tarot.spreads.sca.name / desc` | Situation · Défi · Conseil · Ce qui est en jeu, ce qui demande votre attention, la piste à suivre. |
| `tarot.spreads.sca.pos` (3) | Situation · Défi · Conseil |
| `tarot.spreads.sca.hints` (3) | Ce qui est en jeu · Ce qui demande votre attention · La piste à suivre |
| `tarot.spreads.six.name / desc / hint / note / done` | Les six prochains mois · Une carte par mois, comme un fil de réflexion pour la demi-année à venir. · Le climat symbolique du mois · Chaque carte propose un thème de réflexion pour le mois, pas une prévision. · Votre tirage des six mois est fait. Prochain tirage : le mois prochain. |
| `tarot.gesture` (7) | Mélanger le jeu · Le jeu se mélange… · Choisissez vos cartes · Carte face cachée · Recommencer · Poser les cartes · Toutes les cartes sont choisies |
| `info.spread` (réécrit) | Bulle (i) des tirages, 147 mots |

## Accessibilité, confidentialité, export

- Clavier : un seul arrêt Tab sur l'éventail, flèches, Début, Fin, Entrée ou Espace ; « Carte face cachée 5/22 », choisie ou non ; annonces au début, à chaque choix et à la fin.
- Animations réduites : pas d'animation de mélange ni de soulèvement.
- Téléphone : bande que l'on fait défiler du doigt.
- Arabe : éventail et positions dans le sens de lecture ; compteur et numéros jamais inversés ; la question s'affiche dans son propre sens d'écriture.
- Confidentialité : tirages et questions sur l'appareil seulement, effacés à expiration ; rien n'est envoyé ; la question n'apparaît pas dans l'image exportée.
- Export : carte de naissance, carte du jour et tirages retournés, avec le nom du tirage ; ni liste des tirages, ni éventail, ni boutons, ni question.

## Synthèse « Ce que cela signifie pour votre question » (V10.7, 4 novembre 2026)

Idée d'une testeuse (4 novembre 2026). Une fois toutes les cartes d'un tirage retournées, une rubrique bien visible conclut la lecture : titre (« Ce que suggèrent les six prochains mois » pour le tirage sans question), étiquette de tendance, conclusion courte, mois porteurs ou à surveiller (six mois), phrase de clôture.

- **Tendance de chaque carte** (`tarotTendency`, `zodiac-tarot.js`) : `up` élan favorable, `open` ouverture à saisir (sous condition), `work` défi à travailler. Arcanes majeurs : sens traditionnels (`TAROT_MAJOR_TENDENCY`, à l'endroit puis renversé). Mineurs : tableau par rang et par couleur (`TAROT_MINOR_UPRIGHT`) ; renversée, `up` → `open`, `open` → `work`, `work` → `open` (un défi renversé s'allège : Cinq de Coupes renversé = acceptation). À l'endroit : 46 favorables, 19 ouvertures, 13 défis.
- **Tendance d'ensemble** (`spreadTendency`, `zodiac-spreads.js`) : moyenne pondérée (`up` +1, `open` 0, `work` −1), seuils ±0,3. Poids : une carte 1 ; Passé · Présent · Avenir 1, 2, 3 ; Situation · Défi · Conseil 1, 0, 2 (le Défi est par nature un point d'attention) ; six mois 1 chacun.
- **Texte** (`spreadSynthHtml`) : deux variantes par tirage et par tendance (`I18N[l].tarot.synth`), choisies d'après le tirage lui-même (la même lecture redonne la même synthèse) ; la phrase cite la carte qui décide entre guillemets (carte unique, Avenir, Conseil). Six mois : `sixBest` et `sixCare` listent les mois favorables et les mois défi (`Intl.ListFormat`), seulement s'il y a quelque chose à distinguer (ni aucun, ni tous).
- **Limite honnête** : l'appli ne comprend pas la question tapée (tout reste sur l'appareil) ; les textes parlent du tirage, jamais de la question.
- **Ton** : encourageant, jamais de promesse, de peur ni de fatalité ; français rédigé par ChatGPT sur consigne, contrôlé et corrigé (accord avec un seul mois, « Conseil »), 13 traductions contrôlées automatiquement.
- **Tests** : tendances des 78 cartes, synthèse de chaque tirage (cas pondérés, mois, même texte au rechargement, aucun repère non remplacé dans les 14 langues), textes des 14 langues ; parcours réel (fr, ar, ja) : la tendance affichée est celle du tirage ; audit axe-core avec le tirage retourné.

## Tarot par thème (V10.11, 8 novembre 2026)

Souhait de la testeuse (6 novembre) : « une vraie lecture personnalisée, pas une succession de définitions ». L'appli ne comprend pas la question tapée (tout reste sur l'appareil) ; la personnalisation vient du **thème**, des **positions** et des **combinaisons**.

- **Thème choisi avant le tirage** (`SPREAD_THEMES` : `general` « Question libre », `love` « Amour », `work` « Travail et argent », `self` « Vie personnelle ») ; retenu sur l'appareil (`zodiac_spread_theme`), gardé avec le brouillon et la lecture (`theme`), rappelé au-dessus des cartes ; anciens tirages sans thème : question libre (`themeOf`).
- **« Votre lecture »** (`spreadStoryHtml`) : pour chaque carte, une phrase de position du thème (`positions[theme][answer|past|present|future|situation|challenge|advice|month]`, 3 variantes, `{card}`, `{month}`), puis le sens de la carte dans le thème (`cards[key][theme].up|rev` ; question libre : le sens général déjà affiché) ; puis les **combinaisons remarquables** présentes (`combos`, 40 paires choisies d'après la tradition, deux au plus, `{a}` et `{b}`, dans les deux sens). Variantes choisies d'après le tirage (même lecture au rechargement).
- **Synthèse du thème** : `spreadSynthHtml` prend `synth[theme][type][tendance]` (2 variantes) quand un thème est choisi, la synthèse générale sinon ; même calcul de tendance qu'avant.
- **Textes** : français rédigé par ChatGPT en deux lots (majeurs, positions, combinaisons, synthèses ; puis 56 mineurs), contrôlé (repères, longueurs, aucune promesse, sens traditionnels et tendances respectés), 13 traductions contrôlées ; russe : « Vie personnelle » = « Личное развитие » (« Личная жизнь » se comprend comme la vie amoureuse).
- **Fichiers** : `data/tarot-themes/tarot-themes-xx.json` → `node tools/regen_tarot_themes.js` → `zodiac-tarot-themes-ui.js` (`TAROT_THEMES_UI`, noms des thèmes, toujours chargé) et `zodiac-tarot-themes-xx.js` (`window.TAROT_THEMES_I18N.xx`, chargé à la demande sur le site, `ensureTarotThemes`).
- **Tests** : 2 tests intégrés (textes des 14 langues ; récit, combinaisons, synthèse du thème, ancien tirage) ; parcours réel (thème choisi au clavier, lecture complète, retrouvée après rechargement) ; site installable (chargement à la demande, hors ligne).

## Tests

Mélange (reproductible et statistique), choix dans l'éventail, reprise et « Recommencer », fréquence (jour, mois), profils, migration, nettoyage, options, six mois (novembre → avril, décembre → mai, noms des mois dans les 14 langues), textes (14 langues avant publication), parcours réel en français, arabe et japonais (choix au clavier, rechargement), accessibilité (éventail ouvert, tirage retourné, thèmes sombre et clair), export (image réelle).
