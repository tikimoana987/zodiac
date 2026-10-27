# Cahier des charges — textes des 56 arcanes mineurs (pour ChatGPT)

> Destinataire : l'assistant qui rédige les textes. Livrable : **14 fichiers JSON**, un par langue, au format exact décrit ci-dessous.
> Contexte : appli web « Zodiaque & Décans » (astrologie, numérologie, tarot), 14 langues, ton bienveillant et nuancé, présentée comme une tradition symbolique (jamais comme une prédiction).

## 1. Décisions déjà prises
- Les 56 arcanes mineurs s'ajoutent aux 22 majeurs, en option dans le **tirage du jour** (« jeu complet, 78 cartes »). La carte de naissance et la carte du jour restent des arcanes majeurs.
- Deux jeux : **Tarot de Marseille** (par défaut) et **Waite-Smith**. Les **noms** diffèrent selon le jeu (voir § 4) ; les **sens** sont communs aux deux jeux.
- Chaque carte a un sens **à l'endroit** et un sens **renversé** (option « cartes renversées »).

## 2. Les 56 cartes (clés à utiliser telles quelles)
Couleurs : `wands` (Bâtons, Feu), `cups` (Coupes, Eau), `swords` (Épées, Air), `pentacles` (Deniers / Pentacles, Terre).
Rangs : `ace`, `2` à `10`, `page`, `knight`, `queen`, `king`.
Clé d'une carte = `couleur_rang` : `wands_ace`, `wands_2`, …, `wands_10`, `wands_page`, `wands_knight`, `wands_queen`, `wands_king`, puis de même pour `cups`, `swords`, `pentacles` (14 × 4 = 56 clés).

## 3. Format de chaque fichier (`minors-xx.json`, xx = code de langue)
```json
{
  "lang": "fr",
  "labels": {
    "fullDeck": "Jeu complet (78 cartes)",
    "majorsOnly": "Arcanes majeurs seuls",
    "minorBadge": "Arcane mineur",
    "infoMinors": "Texte de la bulle (i), 3 à 5 phrases : les 56 arcanes mineurs, les quatre couleurs et leur élément, l'option dans le tirage du jour."
  },
  "suits": {
    "wands":     { "marseille": "Bâtons", "ws": "Bâtons", "element": "Feu", "theme": "l'action, l'élan, la créativité" },
    "cups":      { "marseille": "Coupes", "ws": "Coupes", "element": "Eau", "theme": "les émotions, l'amour, les relations" },
    "swords":    { "marseille": "Épées", "ws": "Épées", "element": "Air", "theme": "la pensée, les décisions, les conflits" },
    "pentacles": { "marseille": "Deniers", "ws": "Pentacles", "element": "Terre", "theme": "la matière, le travail, le corps" }
  },
  "cards": {
    "wands_ace": {
      "name": { "marseille": "As de Bâtons", "ws": "As de Bâtons" },
      "upright":  { "keywords": ["Élan", "Inspiration", "Commencement"], "text": "Une étincelle d'énergie neuve : le moment de lancer ce qui vous tient à cœur." },
      "reversed": { "keywords": ["Retard", "Hésitation", "Énergie dispersée"], "text": "L'élan tarde ou s'éparpille : clarifier son désir avant d'agir." }
    }
  }
}
```
(Les textes de l'exemple `wands_ace` sont indicatifs ; ils peuvent être réécrits.)

## 4. Noms selon le jeu
- **Marseille** — figures : *Valet, Cavalier, Reine, Roi* ; couleur Terre : *Deniers*.
- **Waite-Smith** — figures : *Page, Chevalier, Reine, Roi* ; couleur Terre : *Pentacles* (en français) ; utiliser l'usage établi dans chaque langue (EN *Page, Knight, Queen, King* ; *Wands, Cups, Swords, Pentacles* ; pour le Marseille en anglais : *Batons/Wands, Cups, Swords, Coins*, figures *Page/Valet, Knight, Queen, King*).
- Rangs numérotés : écrire le nom complet usuel (« Deux de Coupes », « Two of Cups », « ワンドの2 », « Двойка Кубков »…), avec la grammaire correcte de chaque langue (élisions : « As d'Épées » ; génitifs ; ordre des mots).

## 5. Règles d'écriture (à respecter strictement)
1. **Mots-clés** : exactement 3 par sens, noms ou groupes nominaux courts (1 à 3 mots), majuscule initiale (sauf langues sans majuscules).
2. **Texte** : **une seule phrase**, de 60 à 130 caractères en français (longueur équivalente dans les autres langues), sur le modèle « image ou idée clé : conseil ou nuance ».
3. **Sens renversé** : énergie de la carte **bloquée, retardée, intériorisée ou excessive** ; ton nuancé, **jamais menaçant ni fataliste**. Pour les cartes difficiles (ex. Dix d'Épées, Trois d'Épées), le renversé peut annoncer une sortie de crise.
4. **Interdits** : prédictions certaines (« vous allez… »), conseils médicaux, juridiques ou financiers, mentions de mort ou de violence explicites, jugement moral, stéréotypes.
5. **Registre de la 2e personne** : fr *vous* · en *you* · es *tú* · pt *você* · it *tu* · de *du* · tr *siz* · ru *вы* · ar neutre (impératif masculin usuel) · hi *आप* · th neutre poli · zh *您* · ja forme polie (です/ます) · ko forme polie (-요 / -습니다).
6. **Cohérence** : mêmes concepts dans les 14 langues (adapter, ne pas traduire mot à mot) ; vocabulaire tarologique établi de chaque langue.
7. **Ponctuation** propre à chaque langue (« : » avec espace en français, 、。 en japonais et chinois, « ، » en arabe…). Pas de point final en thaï.

## 6. Exemples tirés de l'appli (arcanes majeurs, à imiter pour le ton et la longueur)
| Carte | Langue | Sens | Mots-clés | Texte |
|---|---|---|---|---|
| Le Bateleur | fr | endroit | Initiative · Habileté · Commencement | Tous les outils sont sur la table : le moment d'oser et de mettre ses talents en jeu. |
| Le Bateleur | fr | renversé | Doute de soi · Manipulation · Talents inexploités | Les outils sont là mais mal employés : doute, dispersion ou tentation de tromper ; revenir à une intention juste. |
| L'Étoile | fr | endroit | Espoir · Inspiration · Sérénité | La lumière après l'épreuve : confiance retrouvée, inspiration et foi en l'avenir. |
| L'Étoile | fr | renversé | Découragement · Doute · Espoir voilé | L'espoir pâlit un moment : la lumière est toujours là, il faut lui laisser une place. |
| The Magician | en | upright | Initiative · Skill · Beginning | All the tools are on the table: time to dare and put your talents into play. |
| The Star | en | reversed | Discouragement · Doubt · Veiled hope | Hope fades for a while: the light is still there, make room for it. |

## 7. Liste de contrôle avant livraison (à vérifier pour chaque fichier)
- [ ] JSON valide (UTF-8, guillemets droits `"` pour la syntaxe), clé `lang` correcte.
- [ ] `labels` : 4 entrées ; `suits` : 4 couleurs × 4 champs.
- [ ] `cards` : **56 clés exactement**, toutes celles du § 2, aucune autre.
- [ ] Chaque carte : `name.marseille`, `name.ws`, `upright` et `reversed` avec 3 mots-clés et un texte.
- [ ] Aucun texte vide, aucune répétition mot pour mot entre deux cartes.
- [ ] Longueurs respectées ; ton conforme au § 5.

## 8. Livraison
Un fichier par langue : `minors-fr.json`, `minors-en.json`, `minors-es.json`, `minors-pt.json`, `minors-it.json`, `minors-de.json`, `minors-tr.json`, `minors-ru.json`, `minors-ar.json`, `minors-hi.json`, `minors-th.json`, `minors-zh.json`, `minors-ja.json`, `minors-ko.json`.
Conseil : écrire d'abord le **français** complet, le faire valider, puis produire les 13 autres langues **à partir du français** (une ou deux langues par réponse, pour éviter les coupures).
