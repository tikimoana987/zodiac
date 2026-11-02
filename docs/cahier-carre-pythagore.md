# ZODIAC — Cahier du carré de Pythagore V0.2

1er novembre 2026 · Joann · Arbitré après relecture (DeepSeek, Gemini, GPT).
Copie du document de travail ; intégré dans `zodiac-square.js` (calcul, seuils, affichage), carte de l'onglet « Numérologie », textes dans les fichiers de langue (`num.square`, `info.square`, `info.squareLines`).

## Ce qui change depuis la V0.1

| Point | V0.1 | V0.2 |
| --- | --- | --- |
| Variante « + 19 » | Présentée comme « la variante d'Alexandrov » | Gardée, présentée comme variante moderne des calculateurs actuels ; Alexandrov gardait la soustraction après 2000 (le 01/01/2000 donnerait 4 · 4 · 2 · 2) |
| Seuils des lignes | Calibrés sur 1930-2015, « en tiers » | Calibrés séparément pour les naissances avant 2000 et depuis 2000 (sinon « Habitudes » serait discrète pour 77 % des personnes nées depuis 2000) ; chaque niveau concerne 17 à 52 % des personnes de son siècle |
| Noms | Vitalité, Chance, Mémoire et esprit, Liens et famille, Talents | Constance, Occasions, Réflexion, Liens et proches, Créativité |
| Niveaux affichés | Adjectifs accordés au nom de la ligne | « Niveau discret / équilibré / marqué », invariables ; aucun niveau affiché pour les cases |
| Bouton | « Lire toutes les cases » | « Lire l'analyse complète » |
| Mots interdits | Non listés | Santé, maladie, faiblesse, manque, défaut, excès, don inné, destin, fatal, « vous allez », dans tous les textes visibles |
| Tests | 6 dates | 11 dates, dont 31/12/1999, 01/01/2000 et trois 29 février |

## Principes

- Une tradition symbolique (psychomatrice d'Alexandre Alexandrov), pas un diagnostic ni une mesure.
- Jamais de santé : la case 4 s'appelle « Constance » (persévérance).
- Une case vide est une qualité à cultiver ; une case très remplie, une force à doser.
- Aucun classement entre les personnes, aucune prédiction, aucun talent inné.
- Calcul local, rien n'est envoyé ni enregistré.

## Calcul

| Étape | Règle | Exemple : 03/11/1982 |
| --- | --- | --- |
| Chiffres de la date | Jour, mois et année en 8 chiffres | 0 3 1 1 1 9 8 2 |
| 1er nombre | Somme des chiffres de la date | 25 |
| 2e nombre | Somme des chiffres du 1er | 7 |
| 3e nombre, né avant 2000 | 1er nombre − 2 × premier chiffre non nul du jour | 25 − 6 = 19 |
| 3e nombre, né en 2000 ou après | 1er nombre + 19 (variante moderne) | — |
| 4e nombre | Somme des chiffres du 3e | 10 |
| Grille | Chaque chiffre de 1 à 9 compté dans la date et les quatre nombres, zéros ignorés | 11111 · 22 · 3 · — · 5 · — · 7 · 8 · 99 |

De 1900 à 2100, une grille compte de 8 à 15 chiffres et le 3e nombre n'est jamais négatif. Grille en colonnes 1-2-3, 4-5-6, 7-8-9, dans le même ordre dans toutes les langues.

## Les 9 cases

| Case | Nom | Ce qu'elle évoque |
| --- | --- | --- |
| 1 | Caractère | Affirmation de soi, volonté |
| 2 | Énergie | Élan, enthousiasme, énergie donnée aux autres |
| 3 | Curiosité et méthode | Goût de comprendre, sens de l'ordre |
| 4 | Constance | Persévérance, capacité à tenir dans la durée |
| 5 | Intuition et logique | Relier les indices, flair, raisonnement |
| 6 | Sens du concret | Goût du faire, de la matière |
| 7 | Occasions | Repérer et saisir les occasions |
| 8 | Sens du devoir | Responsabilité, fiabilité |
| 9 | Réflexion | Vie de l'esprit, goût d'apprendre |

Textes par nombre de chiffres : aucun, un, deux, trois ou plus ; case 1 : un ou moins, deux, trois, quatre ou plus.

## Les 8 lignes et leurs seuils

D = niveau discret jusqu'à ce nombre ; M = niveau marqué à partir de ce nombre ; entre les deux, niveau équilibré.

| Ligne | Cases | Nom | Avant 2000 : D / M | Depuis 2000 : D / M |
| --- | --- | --- | --- | --- |
| 1re ligne | 1 · 4 · 7 | Détermination | ≤ 3 / ≥ 6 | ≤ 3 / ≥ 6 |
| 2e ligne | 2 · 5 · 8 | Liens et proches | ≤ 2 / ≥ 5 | ≤ 3 / ≥ 5 |
| 3e ligne | 3 · 6 · 9 | Habitudes et stabilité | ≤ 3 / ≥ 6 | ≤ 2 / ≥ 4 |
| 1re colonne | 1 · 2 · 3 | Estime de soi | ≤ 5 / ≥ 8 | ≤ 5 / ≥ 8 |
| 2e colonne | 4 · 5 · 6 | Vie matérielle | ≤ 1 / ≥ 3 | ≤ 1 / ≥ 4 |
| 3e colonne | 7 · 8 · 9 | Créativité | ≤ 2 / ≥ 4 | ≤ 1 / ≥ 4 |
| Diagonale | 1 · 5 · 9 | Élan spirituel | ≤ 4 / ≥ 7 | ≤ 3 / ≥ 6 |
| Diagonale | 3 · 5 · 7 | Tempérament | ≤ 2 / ≥ 5 | ≤ 2 / ≥ 4 |

## Affichage

Carte « Carré de Pythagore » dans l'onglet « Numérologie », avant le portrait : nombres de travail, grille de 9 cases cliquables, 8 boutons de lignes (« Détermination — Niveau marqué »), texte choisi affiché dessous et annoncé (case 1 au départ), « Lire l'analyse complète » (17 lectures). Export : grille, nombres et analyse complète dépliée.

## Textes (89 par langue)

9 noms de cases, 36 textes de cases (30 à 45 mots), 8 noms de lignes, 24 textes de lignes (20 à 35 mots), 3 niveaux, 7 libellés, 2 bulles (i).

## Cas d'essai (ordre des lignes : Détermination, Liens, Habitudes, Estime de soi, Vie matérielle, Créativité, Élan spirituel, Tempérament)

| Date | Nombres | Cases 1 à 9 | Lignes |
| --- | --- | --- | --- |
| 03/11/1982 | 25 · 7 · 19 · 10 | 11111 · 22 · 3 · — · 5 · — · 7 · 8 · 99 | M · É · D · M · D · M · M · É |
| 17/04/1990 | 31 · 4 · 29 · 11 | 11111 · 2 · 3 · 44 · — · — · 7 · — · 999 | M · D · É · É · É · M · M · D |
| 24/01/1975 | 29 · 11 · 25 · 7 | 1111 · 222 · — · 4 · 55 · — · 77 · — · 99 | M · M · D · É · M · M · M · É |
| 10/01/1909 | 21 · 3 · 19 · 10 | 111111 · 2 · 3 · — · — · — · — · — · 999 | M · D · É · M · D · É · M · D |
| 29/02/1996 | 38 · 11 · 34 · 7 | 111 · 22 · 33 · 4 · — · 6 · 7 · 8 · 999 | É · É · M · É · É · M · É · É |
| 31/12/1999 | 35 · 8 · 29 · 11 | 11111 · 22 · 33 · — · 5 · — · — · 8 · 9999 | É · É · M · M · D · M · M · É |
| 01/01/2000 | 4 · 4 · 23 · 5 | 11 · 22 · 3 · 44 · 5 · — · — · — · — | É · D · D · D · É · D · D · D |
| 29/02/2000 | 15 · 6 · 34 · 7 | 1 · 222 · 3 · 4 · 5 · 6 · 7 · — · 9 | D · É · É · D · É · É · D · É |
| 11/12/2003 | 10 · 1 · 29 · 11 | 1111111 · 222 · 3 · — · — · — · — · — · 9 | M · D · D · M · D · D · M · D |
| 29/02/2004 | 19 · 10 · 38 · 11 | 1111 · 222 · 3 · 4 · — · — · — · 8 · 99 | É · É · É · M · D · É · M · D |
| 09/06/2010 | 18 · 9 · 37 · 10 | 111 · 2 · 3 · — · — · 6 · 7 · 8 · 99 | É · D · M · D · D · M · É · D |

## Questions tranchées

Lignes calibrées par siècle (sans classement) ; variante « + 19 » gardée et présentée comme moderne ; export avec analyse complète ; carte avant le portrait ; case 1 en quatre niveaux.
