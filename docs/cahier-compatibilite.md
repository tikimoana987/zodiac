# ZODIAC — Cahier de la compatibilité approfondie V0.2.1

31 octobre 2026 · Joann · Validé après deux tours de relecture (DeepSeek, Gemini, GPT).
Copie du document de travail ; intégré en V8 (`zodiac-compat.js`, textes dans `data/compat/compat-xx.json`, générés dans `zodiac-compat-data.js` par `tools/regen_compat.js`).

## Ce qui change depuis la V0.1

La V0.2 intègre les relectures de DeepSeek, Gemini et GPT, arbitrées le 31 octobre. Les règles ont été vérifiées sur 3 000 paires de dates tirées au hasard : aucun résultat ne change quand on échange les deux personnes.

| Point | V0.1 | V0.2 |
| --- | --- | --- |
| Signe incertain (heure manquante) | Signe de midi ; Lune cachée | Les deux signes possibles sont testés ; si la tonalité change, axe « incertain », hors bilan ; même règle pour la Lune |
| Attirance | Meilleur des deux sens | Les deux sens affichés ; tonalité combinée, sans biais positif |
| Soleils | Anciens textes d'éléments | 7 lectures neuves ; badge d'élément gardé |
| Aperçu | Nom d'axe inséré dans une phrase | Étiquettes « Point fort » et « À construire », sans accord grammatical |
| Bilan | « 4 points forts · 2 points d'attention » | « Harmonies 3 · Complémentarités 3 · Points d'attention 3 · Axes analysés 9/9 » (cas 1) |
| Ouverture | Écart d'au moins 2 | Proportion des axes analysés (25 %) |
| Axe Mars | « Énergie et conflits » | « Élan et désaccords » |
| Méthode | 14 langues d'un coup | Français d'abord, intégré et testé ; puis 13 langues ; publication quand les 14 sont prêtes |
| Tests | 5 cas | 5 cas recalculés et 9 cas limites, symétrie comprise |

### V0.2.1

Deuxième tour de relecture, arbitré le 31 octobre ; chaque point a été vérifié dans le code ou mesuré sur 2 000 à 3 000 paires de dates.

| Point | V0.2.1 |
| --- | --- |
| Conseil `advice.lifePath.attention` | Retiré : les chemins de vie ne donnent jamais de point d'attention |
| 8 textes du zodiaque chinois | Réécrits : « même animal » disait « peu de complémentarité » face à une pastille « Complémentarité », et trois textes étaient fatalistes ; ils servent aussi dans l'onglet Signes |
| Nombre d'axes analysés | Format neutre « 9/9 », toujours sur 9, sans préposition à traduire |
| Ouverture | Quatrième ouverture « surtout complémentaire » (8 % des paires) |
| Attirance : même relation dans les deux sens | Une seule lecture, avec la mention « dans les deux sens » (16 % des paires) |
| « Incertain » | Deux libellés : « signe incertain » (l'axe compte) et « lecture incertaine » (l'axe sort du bilan) |
| Point fort en complémentarité | La pastille de tonalité s'affiche à côté du nom de l'axe |
| Fuseau sans lieu | Celui de l'appareil, comme dans toute l'appli ; Paris ne servait qu'aux calculs du cahier ; limite documentée |
| Chemin de vie | Calcul actuel de ZODIAC, identique au portrait, documenté (D8) |
| Zodiaque chinois | L'année change à la date du Nouvel An lunaire, sans heure : aucune incertitude liée à l'heure (D12) |
| Heures inexistantes ou ambiguës | Hors périmètre : petit chantier à part pour toute l'appli (feuille de route) |
| Volume | 124 textes par langue, 1 736 au total |

À l'intégration (1er novembre), trois noms de relations chinoises ont été renommés dans les 14 langues pour éviter une confusion avec les relations entre signes : « Opposition (六冲) » devient « Choc (六冲) », « Même signe » devient « Même animal », « Même signe (自刑) » devient « Même animal (自刑) » (clé `cnNames`, 127 textes par langue).

## Objectif et principes

La compatibilité passe de trois axes notés sur 5 à une lecture en neuf axes, avec forces, points d'attention et « Conseils des étoiles ». Elle reste dans l'onglet « Compatibilité » et garde tout ce qui existe déjà (synastrie, zodiaque chinois).

- **Réaliste mais encourageante, jamais fataliste.** Une relation dépend des personnes et de leurs choix, pas des astres. Aucun texte ne prédit l'avenir de la relation ni ne la déclare « incompatible ».
- **Un défi est une piste de travail.** Chaque point d'attention est formulé avec ce qui aide : communication, patience, compréhension.
- **Pas de note.** Ni étoiles ni score : un bilan par tonalités, et une bulle (i) qui explique ce choix.
- **Lecture par signes, assumée.** Les neuf axes comparent des signes ; la synastrie, gardée en complément, compare des degrés. Les traditions (astrologie occidentale, zodiaque chinois, numérologie pythagoricienne) sont citées comme des lectures, pas comme des faits.
- **Relation amoureuse, vocabulaire ouvert.** Les textes visent une relation amoureuse, sans le mot « couple » ni d'amour trop appuyé, pour rester lisibles en amitié.
- **Inclusive.** Aucun genre supposé, aucune forme de relation supposée ; « vous » et « l'autre personne », comme aujourd'hui.
- **Confidentielle.** Les données de l'autre personne restent en mémoire seulement, jamais enregistrées ni envoyées ; l'invitation à compléter l'heure améliore la lecture sur l'appareil, rien n'est collecté.

## Ce qui existait avant

L'onglet « Compatibilité » comparait trois axes, notés de 1 à 5, et affichait une synastrie détaillée. Il demande la date de l'autre personne, et en option son heure et son lieu de naissance.

| Élément | Calcul d'avant | Textes d'avant | Devenir |
| --- | --- | --- | --- |
| Signes solaires | Matrice d'affinités (AFF), note 1 à 5 | 10 textes par paire d'éléments (« Deux feux qui s'embrasent… ») | 7 lectures neuves ; badge « Feu × Air » gardé ; textes d'éléments et AFF gardés pour l'onglet Signes |
| Lunes | Matrice AFF, seulement si les deux signes sont certains | Mêmes 10 textes d'éléments | 7 lectures propres aux émotions ; règle des signes possibles |
| Animaux chinois | Relations traditionnelles (harmonie, triade, clash…), note 1 à 5 | 8 textes de relation | 8 textes réécrits (D12), qui servent aussi dans l'onglet Signes |
| Synastrie | Aspects entre planètes, orbes 4 à 6° | « Points d'harmonie / Points de tension » | Gardée, repliée ; « Points d'attention » |
| Entente globale | Moyenne des axes, étoiles, « 3,0 / 5 » | 5 niveaux, de « Relation tendue » à « Âmes sœurs » | Remplacée par le bilan (D3) |
| Bulles (i) | — | « Compatibilité », « Synastrie » | « Compatibilité » réécrite, deux nouvelles (D11) |

Les niveaux d'avant contredisaient le principe non fataliste : « Âmes sœurs » et « Relation tendue » sonnaient comme des verdicts.

## Décisions

Douze décisions, arbitrées le 31 octobre après deux tours de relecture.

1. **D1 — Neuf axes.** Émotions (Lunes), affection (Vénus), attirance (Vénus et Mars croisés), communication (Mercure), tempéraments (Soleils), élan et désaccords (Mars), première impression (ascendants), chemins de vie (numérologie), zodiaque chinois.
2. **D2 — Une seule méthode pour les planètes : la lecture par signes.** Pour la Lune, Vénus, Mars, Mercure, le Soleil et l'ascendant, on compare les deux signes par leur écart sur la roue (0 à 6 signes), ce qui donne 7 relations. Ce n'est pas un aspect en degrés : la bulle (i) le dit, et précise que la synastrie, elle, lit les degrés et peut parfois différer.
3. **D3 — Fin de la note sur 5.** Les étoiles et les niveaux « Âmes sœurs… Relation tendue » sont remplacés par trois tonalités par axe — harmonie, complémentarité, point d'attention — et un bilan en étiquettes, avec le nombre d'axes analysés au format « 7/9 », toujours sur 9.
4. **D4 — Soleils : 7 lectures neuves**, comme pour les autres axes ; le badge d'élément (« Feu × Air ») reste affiché. Les anciens textes d'éléments et la matrice AFF restent utilisés dans l'onglet Signes.
5. **D5 — Attirance dans les deux sens.** Vénus de vous face à Mars de l'autre personne, et Mars de vous face à Vénus de l'autre : les deux relations sont affichées. Tonalité de l'axe : harmonie si les deux sens sont en harmonie, point d'attention si les deux le sont, complémentarité dans tous les autres cas ; ce regroupement est expliqué dans la bulle (i), et la relation de chaque sens reste visible. Si les deux sens ont la même relation, une seule lecture s'affiche, avec la mention « dans les deux sens ».
6. **D6 — Signes possibles.** Sans heure, si une planète (Lune comprise) change de signe le jour de la naissance, on teste les deux signes possibles, à 0 h et à 23 h 59. Même tonalité dans tous les cas : l'axe compte normalement, avec la mention « signe incertain ». Tonalités différentes : l'axe affiche « lecture incertaine », sans pastille, et sort du bilan et des conseils. Les heures sont celles du fuseau du lieu de naissance, à défaut celui de l'appareil, comme dans toute l'appli : sans lieu, une naissance loin de ce fuseau peut être lue sur une journée décalée, limite rappelée dans la bulle (i).
7. **D7 — Ascendants** : seulement avec heures et lieux des deux personnes ; sinon l'axe n'est pas affiché et une invitation propose de compléter.
8. **D8 — Chemins de vie par familles**, convention pythagoricienne courante parmi d'autres : 1-5-7 (réflexion), 2-4-8 (concret), 3-6-9 (création). Le chemin de vie est celui que ZODIAC calcule déjà, identique au portrait : jour, mois et année réduits séparément, puis additionnés et réduits, nombres maîtres gardés (18/08/1976 : 9 + 8 + 5 = 22). 11, 22 et 33 sont rattachés à 2, 4 et 6 pour la comparaison et affichés tels quels. Même nombre ou même famille : harmonie ; familles différentes : complémentarité.
9. **D9 — Conseils des étoiles.** Au plus trois conseils, pris parmi les axes certains en point d'attention ou en complémentarité, dans l'ordre des rangs (les chemins de vie n'ont qu'un conseil de complémentarité) ; s'il n'y en a aucun, un conseil pour entretenir l'harmonie ; puis une phrase de clôture.
10. **D10 — Affichage repliable**, comme le portrait : aperçu visible, analyse complète dépliée à la demande, exportée dépliée.
11. **D11 — Méthode de rédaction.** Textes français d'abord (ChatGPT, puis vérification), intégrés et testés dans l'appli sans publication ; traduction des 13 autres langues ensuite ; publication quand les 14 sont prêtes. Trois bulles (i) : « Compatibilité » (méthode, pas de note, incertitudes), « Relations entre signes » (les 7 relations, l'attirance dans les deux sens, signes et degrés), « Chemins de vie » (familles).
12. **D12 — Zodiaque chinois.** L'année change à la date du Nouvel An lunaire, sans tenir compte de l'heure : né le 27/01/1990, c'est le Cheval, avec ou sans heure. Certaines traditions font commencer l'année vers le 4 février ; la bulle (i) le signale. Les 8 textes de relation sont réécrits selon les règles de rédaction, en cohérence avec les tonalités, et servent aussi dans l'onglet Signes.

## Les axes et leurs calculs

Chaque axe compare un élément de chaque personne. L'ordre du tableau est l'ordre d'importance, utilisé pour l'aperçu et les conseils.

| Rang | Axe | Compare | Données nécessaires | Si une donnée manque |
| --- | --- | --- | --- | --- |
| 1 | Émotions | Lune et Lune | Dates | Règle des signes possibles (D6) |
| 2 | Affection | Vénus et Vénus | Dates | Règle des signes possibles |
| 3 | Attirance | Vénus de chacun face à Mars de l'autre, dans les deux sens (D5) | Dates | Règle des signes possibles, appliquée aux deux sens |
| 4 | Communication | Mercure et Mercure | Dates | Règle des signes possibles |
| 5 | Tempéraments | Soleil et Soleil | Dates | Règle des signes possibles (jour de changement de signe) |
| 6 | Élan et désaccords | Mars et Mars | Dates | Règle des signes possibles |
| 7 | Première impression | Ascendant et ascendant | Dates, heures et lieux des deux | Axe non affiché, invitation à compléter |
| 8 | Chemins de vie | Familles de nombres (D8) | Dates | — |
| 9 | Zodiaque chinois | Animaux, relations traditionnelles | Dates entre 1900 et 2100 | Axe non affiché, message actuel |

Mars a deux rôles : l'attirance (croisée avec la Vénus de l'autre) et l'élan (Mars face à Mars, la façon d'agir et de traverser un désaccord). Les deux textes sont écrits sur des registres distincts.

### Les 7 relations entre deux signes

L'écart se compte sur la roue, dans le sens le plus court : de 0 (même signe) à 6 (signes opposés).

| Écart | Nom | Tonalité | Idée à exprimer |
| --- | --- | --- | --- |
| 0 | Même signe | Harmonie | Complicité, effet miroir ; veiller à ne pas amplifier les mêmes travers |
| 1 | Signes voisins | Point d'attention | Rythmes différents, ajustements au quotidien |
| 2 | Sextile | Harmonie | Entente facile, envie de faire ensemble |
| 3 | Carré | Point d'attention | Frictions stimulantes, sources de croissance |
| 4 | Trigone | Harmonie | Fluidité naturelle, même élément |
| 5 | Quinconce | Point d'attention | Décalage subtil, besoin de se traduire l'un à l'autre |
| 6 | Opposition | Complémentarité | Attirance des contraires, équilibre à construire |

Chemins de vie : même nombre ou même famille → harmonie ; familles différentes → complémentarité. Ils ne donnent jamais de point d'attention, ce qui garantit au moins un point fort ou une complémentarité dans chaque bilan.

Zodiaque chinois : harmonie et triade → harmonie ; même animal et neutre → complémentarité ; choc (clash), nuisance, punition et punition de soi (même animal chez le Dragon, le Cheval, le Coq et le Cochon) → point d'attention.

## Affichage

Le résultat s'ouvre sur un aperçu court ; l'analyse complète se déplie, comme le portrait symbolique.

**Toujours visible**

1. Les deux personnes : prénom, signe, animal.
2. Le bilan, en étiquettes suivies d'un nombre, sans accord grammatical ni pluriel à gérer : « Harmonies 3 · Complémentarités 3 · Points d'attention 3 · Axes analysés 9/9 » (cas 1), toujours sur 9. Les axes incertains ou non disponibles ne sont pas comptés.
3. L'aperçu, 30 à 60 mots :
   1. une phrase d'ouverture selon le bilan : « surtout harmonie » si les harmonies dépassent les points d'attention d'au moins 25 % des axes analysés, « surtout à construire » dans le cas inverse ; sinon « surtout complémentaire » si les complémentarités font au moins la moitié des axes analysés, « équilibrée » dans les autres cas ;
   2. l'étiquette « Point fort » suivie du nom du premier axe en harmonie, à défaut de la première complémentarité, avec sa pastille de tonalité ; s'il n'y en a aucun, la phrase de repli `preview.noResource` remplace cette seule ligne ;
   3. l'étiquette « À construire » suivie du nom du premier point d'attention, s'il y en a un.
4. Le bouton « Lire l'analyse complète ».

**Analyse dépliée**

1. Un bloc par axe disponible, dans l'ordre des rangs : titre, les deux signes ou valeurs, la pastille de tonalité, la lecture. L'attirance affiche ses deux sens, chacun avec sa relation et sa lecture courte ; si les deux sens ont la même relation, une seule lecture, avec la mention « dans les deux sens ».
2. Signe incertain, même tonalité : le bloc garde sa pastille, avec la mention « signe incertain ». Lecture incertaine : le bloc montre les signes possibles et la mention « lecture incertaine », sans pastille ni lecture.
3. **Conseils des étoiles** : au plus trois conseils (D9), puis une phrase de clôture.
4. La synastrie, repliée sous « Pour aller plus loin », avec « Points d'attention » au lieu de « Points de tension ».
5. La mention : lecture symbolique, pas une prédiction.

**Tonalités** — harmonie, complémentarité, point d'attention : trois pastilles de couleur et de libellé distincts, lisibles sans la couleur (accessibilité). Les étiquettes s'affichent avec la ponctuation de chaque langue, comme dans le portrait : deux-points en français et en anglais, pleine chasse en japonais et en chinois, aucun en thaï.

## Textes

124 textes par langue, plus 3 noms de relations chinoises (`cnNames`). Un fichier `data/compat/compat-xx.json` par langue, sur le modèle des fichiers du portrait.

| Bloc | Clés JSON | Nombre | Longueur (français) |
| --- | --- | --- | --- |
| Lectures par axe et par relation | `readings.moon`, `.venus`, `.mercury`, `.sun`, `.mars`, `.asc` → `d0` à `d6` | 6 × 7 = 42 | 35 à 55 mots |
| Lectures de l'attirance | `readings.attraction.d0` à `d6`, valables dans les deux sens | 7 | 20 à 35 mots |
| Relations chinoises (réécrites, D12) | `chinese.harmony`, `.triad`, `.clash`, `.harm`, `.punishment`, `.selfPunish`, `.same`, `.neutral` | 8 | 20 à 35 mots |
| Chemins de vie | `lifePath.same`, `.family`, `.different` | 3 | 35 à 55 mots |
| Familles de nombres | `families.mind`, `.matter`, `.creation` | 3 | 1 à 3 mots |
| Conseils des étoiles | `advice.<axe>.attention` et `.complement` pour 8 axes, `advice.lifePath.complement` | 17 | 20 à 35 mots |
| Conseils généraux | `advice.harmony`, `advice.closing` | 2 | 20 à 35 mots |
| Ouvertures de l'aperçu | `preview.mostlyHarmony`, `.mostlyComplement`, `.balanced`, `.mostlyToBuild`, `.noResource` | 5 | 15 à 30 mots |
| Noms des relations | `relations.d0` à `d6` | 7 | 1 à 3 mots |
| Tonalités | `tones.harmony`, `.complement`, `.attention` | 3 | 1 à 3 mots |
| Étiquettes, titres, boutons | `labels.*` : 9 axes ; point fort, à construire ; harmonies, complémentarités, points d'attention, axes analysés ; conseils des étoiles, déplier, replier, pour aller plus loin ; signe incertain, lecture incertaine, compléter, dans les deux sens ; mention | 24 | courts |
| Bulles (i) | `info.compat` (réécrite), `info.compatRelations`, `info.compatLifePath` | 3 | 40 à 110 mots |
| Noms chinois renommés | `cnNames.clash`, `.same`, `.selfPunish` | 3 | courts |

La synastrie est gardée ; seul son libellé « Points de tension » change. Les cinq niveaux de l'entente globale disparaissent. Les noms des planètes, des signes, des animaux et des éléments viennent des traductions existantes. `preview.noResource` sert de repli si un bilan n'avait ni harmonie ni complémentarité : c'est impossible tant que les chemins de vie sont comptés, mais le cas est prévu et testé.

## Règles de rédaction

- **Ton.** Réaliste, chaleureux, encourageant ; formulations actives au présent de tendance ou au conditionnel (« vous gagnez à », « cela invite à », « peut »), jamais de constat figé.
- **Mots interdits** (vérifiés automatiquement en français) : incompatible, âmes sœurs, destin, fatal, condamné, vous allez, couple ; « toujours » et « jamais » sont signalés pour relecture.
- **Lecture et conseil séparés.** La lecture décrit ce que la relation entre les deux signes peut produire ; le conseil dit seulement ce qui aide, sans répéter le diagnostic.
- **Un défi = une piste.** Chaque lecture en point d'attention nomme la difficulté puis ce qui la rend vivable, sans la minimiser.
- **Registres distincts** : Affection (Vénus) = manière d'aimer et de montrer de l'attention ; Attirance (Vénus × Mars) = magnétisme, envie de se rapprocher ; Élan et désaccords (Mars × Mars) = façon d'agir, d'avancer et de traverser un désaccord. Les carrés de l'attirance (`d3`) et de l'élan (`d3`) doivent se lire différemment.
- **Attirance dans les deux sens.** Ces lectures valent quel que soit le sens : pas de « vous » d'un côté et « l'autre » de l'autre.
- **Relations chinoises.** Les 8 textes gardent le nom traditionnel de la relation sans en faire un verdict ; leur ton suit leur tonalité : « même animal » parle de complémentarité, pas de manque.
- **Neutralité.** Aucun genre, aucune forme de relation supposés ; « vous » et « l'autre personne », ou « vous deux ». Pas de prénom.
- **Indépendance.** Chaque texte se comprend seul ; pas de « comme on l'a vu ».
- **Aucune variable** : aucune accolade ; les noms d'axes s'affichent en étiquettes, jamais insérés dans une phrase.
- **Vocabulaire astrologique dosé.** « Carré », « trigone » seulement dans les noms de relations et les bulles (i).
- **Registre par langue**, comme le reste de l'appli : vouvoiement en français, russe, turc, hindi, chinois (您), coréen et japonais polis ; tutoiement en espagnol (espagnol d'Espagne : « vosotros » pour s'adresser aux deux personnes), italien, allemand ; « você » en portugais du Brésil ; arabe et thaï comme les textes existants.
- **Ponctuation.** Apostrophes droites ('), pas de guillemets décoratifs. En thaï : ni deux-points ni point final.
- **Contrôles automatiques** avant intégration (`tools/regen_compat.js` et la suite de tests) : clés identiques dans les 14 fichiers, aucune accolade, mots interdits, règle du thaï, apostrophes droites, aucun texte resté en français dans une autre langue.

## Cas d'essai

Les cinq paires de référence, calculées avec les règles V0.2.1 et le code de l'appli (fuseau de Paris quand le lieu manque, dans les tests). H = harmonie, C = complémentarité, A = point d'attention, ? = incertain (hors bilan), — = non affiché. « Vous » est la première personne.

| Axe | 1. 03/11/1982 19 h Paris × 17/04/1990 8 h 30 Lyon | 2. 24/01/1975 × 18/08/1976 | 3. 03/11/1982 × 10/11/1990 | 4. 03/11/1982 × 05/05/1988 | 5. 18/02/1975 × 25/12/1984 |
| --- | --- | --- | --- | --- | --- |
| Émotions | Gémeaux × Capricorne, quinconce : A | ? (Gémeaux × Taureau ou Gémeaux) | ? | ? | Taureau × Verseau, carré : A |
| Affection | Scorpion × Poissons, trigone : H | Verseau × Vierge, quinconce : A | Scorpion × Scorpion : H | Scorpion × Gémeaux, quinconce : A | Poissons × Verseau, voisins : A |
| Attirance | carré et sextile : C | quinconce et trigone : C | quinconce et sextile : C | carré et quinconce : A | ? (Mars de l'autre en Verseau ou Poissons) |
| Communication | Scorpion × Taureau, opposition : C | Verseau × Vierge, quinconce : A | ? (Mercure de vous en Balance ou Scorpion) | ? | Verseau × Sagittaire, sextile : H |
| Tempéraments | Scorpion × Bélier, quinconce : A | Verseau × Lion, opposition : C | Scorpion × Scorpion : H | Scorpion × Taureau, opposition : C | Verseau × Capricorne, voisins : A |
| Élan et désaccords | Capricorne × Verseau, voisins : A | Capricorne × Vierge, trigone : H | Capricorne × Gémeaux, quinconce : A | Capricorne × Verseau, voisins : A | ? |
| Première impression | Gémeaux × Gémeaux : H | — | — | — | — |
| Chemins de vie | 7 × 4 : C | 11 × 22, même famille : H | 7 × 4 : C | 7 × 9 : C | 33 × 5 : C |
| Zodiaque chinois | Chien × Cheval, triade : H | Tigre × Dragon, neutre : C | Chien × Cheval, triade : H | Chien × Dragon, choc : A | Lapin × Rat, punition : A |
| Bilan H · C · A | 3 · 3 · 3 | 2 · 3 · 2 | 3 · 2 · 1 | 0 · 2 · 4 | 1 · 1 · 4 |
| Axes analysés | 9/9 | 7/9 | 6/9 | 6/9 | 6/9 |
| Ouverture | équilibrée | équilibrée | surtout harmonie | surtout à construire | surtout à construire |
| Point fort / À construire | Affection / Émotions | Élan et désaccords / Affection | Affection / Élan et désaccords | Tempéraments, pastille Complémentarité / Affection | Communication / Émotions |
| Conseils | Émotions, Attirance, Communication | Affection, Attirance, Communication | Attirance, Élan et désaccords, Chemins de vie | Affection, Attirance, Tempéraments | Émotions, Affection, Tempéraments |

Les cas 4 et 5, sans harmonie dominante, servent de tests de ton : leur aperçu doit rester encourageant. Le cas 1 montre l'attirance combinée (un sens en harmonie, l'autre en point d'attention → complémentarité).

### Cas limites

| Cas | Données | Résultat attendu |
| --- | --- | --- |
| Tout en harmonie | 24/05/1954 × 17/04/1962 | Harmonies 7, Lune « lecture incertaine » ; aucun conseil par axe, le conseil « entretenir l'harmonie » puis la clôture ; ouverture « surtout harmonie » |
| Surtout complémentaire | 24/05/1951 × 11/12/2003 | Harmonies 2 · Complémentarités 5 · Points d'attention 1 · 8/9 ; ouverture « surtout complémentaire » ; point fort Communication |
| Ni harmonie ni complémentarité | Données fictives (test unitaire) | `preview.noResource` remplace la ligne « Point fort » ; « À construire » reste |
| Attirance, même relation dans les deux sens | 11/07/1995 × 06/04/1969 | Quinconce dans les deux sens : une seule lecture, mention « dans les deux sens » ; point d'attention |
| Attirance, un sens incertain | Cas 5 | « Lecture incertaine », les deux sens affichés avec les signes possibles, hors bilan |
| Une seule heure connue | 03/11/1982 19 h Paris × 17/04/1990 sans heure | Première impression non affichée, invitation à compléter ; 8/9 |
| Lune incertaine, autres planètes à midi | Cas 3 | Émotions et Communication en « lecture incertaine », hors bilan |
| Même animal chinois | 25/12/1984 × 15/06/1996 ; 05/05/1988 × 01/07/2000 | Rat × Rat, même animal : C ; Dragon × Dragon, punition de soi : A |
| Nouvel An chinois | 26/01/1990 et 27/01/1990, sans heure | Serpent puis Cheval, certains : l'heure n'intervient pas |
| Hors 1900-2100 | 15/06/1899 × 03/11/1982 | Zodiaque chinois non affiché (message actuel) ; 5/9 |
| Passage à l'heure d'été | 28/03/2021 à 2 h 30, Paris (heure inexistante) | Comportement actuel de l'appli : même résultat qu'à 3 h 30 |
| Retour à l'heure d'hiver | 31/10/2021 à 2 h 30, Paris (heure ambiguë) | Comportement actuel : première occurrence (heure d'été) |
| Symétrie | 300 paires au hasard, tirage fixe (test du dépôt) ; 3 000 lors de l'étude | Échanger les deux personnes ne change ni le bilan, ni l'ouverture, ni les conseils |

Sur 2 000 paires au hasard, l'ouverture se répartit en 24 % « surtout harmonie », 8 % « surtout complémentaire », 41 % « équilibrée » et 27 % « surtout à construire ».

## Questions tranchées

| Question | Décision | Où |
| --- | --- | --- |
| Type de relation | Amoureuse, vocabulaire lisible en amitié | Principes, règles de rédaction |
| Note sur 5 | Supprimée, bulle (i) qui explique ce choix | D3, D11 |
| Familles de nombres | 1-5-7, 2-4-8, 3-6-9, présentées comme une convention | D8 |
| Mars en double | Deux axes gardés, registres distincts | D1, règles de rédaction |
| Synastrie | Gardée, repliée, « Points d'attention » | Affichage |
