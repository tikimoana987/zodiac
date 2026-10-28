# ZODIAC — Portrait symbolique
## Cahier des charges rédactionnel consolidé — V0.3

**Date :** 27 octobre 2026  
**Statut :** V0.2 validée par Claude ; complément des bornes et des cas d’essai intégré ; **GO RÉDACTION non donné**.  
**Sources de cadrage :** `feuille-de-route.md`, § 2 ; `ZODIAC_Cahier_Portrait_Symbolique_V0_1_POUR_VALIDATION.md` ; `portrait-symbolique-reponses-claude.md` (A1–A4, B1–B5) ; V0.2 consolidée ; `portrait-symbolique-complement-v0-2.md` (bornes et six cas testés par Claude) ; décisions explicites de l’utilisateur.  
**Périmètre de ChatGPT :** rédaction future des contenus `portrait-xx.json`, de quatre portraits d’exemple obligatoires et des contrôles éditoriaux sur six scénarios de référence, uniquement après nouveau GO.  
**Périmètre de Claude :** calculs et tables, assemblage dans l’application, intégration, affichage, export, contrôles techniques, tests et dépôt GitHub. **La V0.3 est un document de cadrage seulement : aucune source ZODIAC ni aucun JSON de portrait n’est modifié ou créé.**

---

## 1. Décisions validées (1 à 5 et B2)

1. **Deux arcanes distincts :** conserver la carte de naissance actuelle ET l’arcane du chemin de vie, sans confondre leurs méthodes de calcul. Prévoir un texte particulier en cas de convergence.
2. **Nombres maîtres :** conserver 11, 22 et 33 comme résultats principaux ; afficher 11/2, 22/4 et 33/6 comme lectures secondaires. Correspondances : 11 → XI, **Force à Marseille / Justice chez Waite-Smith** ; 22 → **Le Mat / Le Fou** (convention de l’application, pas numérotation historique du Mat) ; 33 → **VI**, par réduction à 6.
3. **Décans :** conserver les planètes des décans de ZODIAC et afficher leur arcane mineur selon les correspondances Golden Dawn ; expliquer les différences des systèmes dans une bulle (i).
4. **Emplacement :** bloc dédié, repliable, dans « Numérologie & tarot », avec aperçu synthétique puis six rubriques détaillées, réutilisation des données existantes et export image.
5. **Format :** six rubriques ; **portrait français réellement assemblé de 250 à 350 mots** et **aperçu de 35 à 50 mots** ; adaptation naturelle dans les treize autres langues.
6. **B2 — planète maîtresse :** **décision définitivement validée** : garder les maîtres *modernes* déjà affichés par ZODIAC, **Pluton pour le Scorpion, Uranus pour le Verseau, Neptune pour les Poissons**, avec les correspondances tarot retenues par Claude ; ne pas leur substituer Mars, Saturne ou Jupiter dans le portrait. **La bulle explique expressément** que la Golden Dawn historique employait sept planètes et que les associations Uranus/Neptune/Pluton aux arcanes sont une **extension moderne**, et non des attributions historiques originelles.

## 2. Finalité, ton et cohérence

Le portrait rapproche la numérologie, les deux arcanes personnels, le signe, sa planète maîtresse moderne et le décan. Il s’agit d’une **lecture symbolique**, jamais d’un diagnostic de personnalité, d’une vérité individuelle démontrée ou d’une prédiction.

- Français : registre **vous** ; style clair, positif, nuancé, avec des possibilités plutôt que des certitudes.
- Bannir toute prédiction certaine, injonction rigide, conseil médical/juridique/financier, jugement moral, stéréotype ou formulation fataliste.
- Chaque unité est **autonome et réutilisable** : ne nommer **aucune carte, aucun numéro, aucun signe ni aucune planète** à l’intérieur des unités rédactionnelles. Les titres, noms et numéros sont ajoutés par l’application selon la langue et le jeu.
- Ne pas recoller mot pour mot les notices des arcanes existants ; les sections doivent apporter une lecture complémentaire et ne pas se répéter entre elles.
- Aucune donnée personnelle enregistrée dans le JSON des traductions ; la confidentialité actuelle du projet est préservée.

## 3. Corpus figé : 77 unités narratives par langue — bornes V0.3

La correction A1 de Claude **remplace intégralement** les 132 unités prévues en V0.1. Les bornes ci-dessous **remplacent celles de la V0.2**, conformément au complément de Claude.

| Clé rédactionnelle | Entrées | Mots français par entrée | Usage |
|---|---:|---:|---|
| `arcana.<key>.essence` | 22 | **24–30** | Rubrique 1, pour l’arcane de naissance et, lorsque distinct, celui du chemin de vie |
| `lifePath.<key>.energy` | 11 | **48–58** | Rubrique 2 |
| `lifePath.<key>.strengths` | 11 | **48–58** | Rubrique 3 |
| `lifePath.<key>.challenges` | 11 | **30–38** | Rubrique 4 |
| `lifePath.<key>.lesson` | 11 | **16–22** | Rubrique 4, suite |
| `lifePath.<key>.thread` | 11 | **40–50** | Rubrique 6 ; aussi aperçu replié |
| **Total** | **77** | | **Hors libellés, phrases et bulles** |

**Clés des 22 majeurs, dans cet ordre :**  
`fool`, `magician`, `priestess`, `empress`, `emperor`, `hierophant`, `lovers`, `chariot`, `strength`, `hermit`, `wheel`, `justice`, `hangedman`, `death`, `temperance`, `devil`, `tower`, `star`, `moon`, `sun`, `judgement`, `world`.

**Sous-ensemble de 11 clés pour `lifePath` :**  
`magician`, `priestess`, `empress`, `emperor`, `hierophant`, `lovers`, `chariot`, `strength`, `justice`, `hermit`, `fool`.

La coexistence des clés `strength` et `justice` est nécessaire à la permutation VIII/XI entre les deux jeux. Le corpus ne doit pas introduire d’autres clés majeures ou chemins de vie.

### Éléments complémentaires par langue

- `phrases.convergence` : **24–30 mots**, lorsque les deux arcanes sont identiques ; remplace la seconde `essence`.
- `phrases.master` : **15–20 mots**, si le chemin de vie est 11, 22 ou 33 ; seule variable dynamique autorisée **`{n}`**, qui reçoit la réduction secondaire (2, 4, 6).
- `phrases.skyIntro` : **16–22 mots**, introduction à la rubrique 5, mentionnant expressément **la tradition de la Golden Dawn**.
- `info.portrait` : bulle (i) de **3 à 5 phrases** expliquant les deux calculs distincts et le caractère symbolique du portrait.
- `info.portraitDecan` : bulle (i) de **3 à 5 phrases**, distinguant triplicités ZODIAC / correspondances Golden Dawn / planète du décan, donnant l’exemple du **3e décan du Bélier** (Jupiter selon ZODIAC, Vénus dans la correspondance Golden Dawn, Quatre de Bâtons) et expliquant que les associations Uranus, Neptune et Pluton sont **des extensions modernes**.
- `labels` : titre du bloc, développer/replier, six titres de rubriques, noms des deux arcanes, signe, planète maîtresse, décan, mention `uncertain`.

Pour l’aperçu replié, **réutiliser `thread`**, sans le dupliquer dans la version détaillée : quand le bloc est ouvert, l’aperçu disparaît. La borne de `thread` (**40–50 mots**) respecte la plage fonctionnelle d’aperçu de **35–50 mots**, sans imposer deux textes distincts.

**Point de contrôle arithmétique :** les nouvelles bornes donnent un minimum indicatif d’environ **255 mots** en comptant neuf mots-clés célestes d’un mot chacun, mais elles **ne garantissent pas le maximum de 350 mots** : la somme des maxima peut atteindre **355 mots** (deux `essence` ou `essence` + `convergence`, avec `master` et 27 mots de mots-clés célestes). Le seuil **250–350 mots sur l’assemblage réel** reste donc bloquant. Les 255 et 355 sont des calculs de bornes, **pas des portraits vérifiés**.

## 4. Structure d’affichage et assemblage

| Rubrique | Source / assemblage attendu |
|---|---|
| 1. Vos deux arcanes | `essence` de naissance + `essence` du chemin de vie ; en convergence, remplacer la deuxième par `convergence` ; ajout conditionnel de `master` pour 11/22/33 selon l’assemblage défini par Claude |
| 2. Votre énergie personnelle | `lifePath.energy` |
| 3. Vos forces et ressources | `lifePath.strengths` |
| 4. Vos défis et leçons | `lifePath.challenges` + `lifePath.lesson` |
| 5. Votre ciel et ses correspondances avec le tarot | `skyIntro` + **trois lignes dynamiques** : signe → majeur + 3 mots-clés ; planète maîtresse → majeur + 3 mots-clés ; décan → mineur + 3 mots-clés |
| 6. Votre fil conducteur | `lifePath.thread` |

Les **noms**, les **numéros d’arcanes**, les **formules de calcul** et les **trois mots-clés existants des cartes** sont fournis par l’application, sans rédiger un texte inédit par correspondance. Pas de phrase libre supplémentaire inventée à l’assemblage.

### Affichage et informations

- Les deux méthodes de calcul sont présentées distinctement, en **formules** par l’application ; la bulle `portrait` explique leur différence.
- La planète du **décan** conserve la méthode déjà utilisée dans ZODIAC. La **planète maîtresse du signe** suit le référentiel moderne validé en B2. Ce sont deux notions différentes : les distinguer expressément.
- En cas de naissance à proximité d’une frontière de signe/décan sans heure connue, la ligne concernée peut afficher `labels.uncertain` ; aucun texte additionnel à rédiger.
- Export : bloc **déplié**, lisible et sans troncature ; responsabilité de Claude.

## 5. Référentiel de correspondances à respecter

Le tableau ci-dessous reprend **les correspondances transmises par Claude** dans `portrait-symbolique-reponses-claude.md` ; elles ne sont **pas revérifiées indépendamment** dans ce document rédactionnel.

### Signes → arcanes majeurs

| Signe | Arcane |
|---|---|
| Bélier | IV — L’Empereur |
| Taureau | V — Le Pape / Le Hiérophante |
| Gémeaux | VI — L’Amoureux / Les Amoureux |
| Cancer | VII — Le Chariot |
| Lion | La Force |
| Vierge | IX — L’Hermite |
| Balance | La Justice |
| Scorpion | XIII — sans nom (Marseille) / La Mort (Waite-Smith) |
| Sagittaire | XIV — Tempérance |
| Capricorne | XV — Le Diable |
| Verseau | XVII — L’Étoile |
| Poissons | XVIII — La Lune |

### Planètes maîtresses → arcanes majeurs

| Planète | Arcane | Statut historique |
|---|---|---|
| Mercure | I — Le Bateleur / Le Magicien | Référentiel historique |
| Lune | II — La Papesse / La Grande Prêtresse | Référentiel historique |
| Vénus | III — L’Impératrice | Référentiel historique |
| Jupiter | X — La Roue de Fortune | Référentiel historique |
| Mars | XVI — La Maison Dieu / La Tour | Référentiel historique |
| Soleil | XIX — Le Soleil | Référentiel historique |
| Saturne | XXI — Le Monde | Référentiel historique |
| **Uranus** | Le Mat / Le Fou | **Extension moderne** (attribution anciennement élément Air) |
| **Neptune** | XII — Le Pendu | **Extension moderne** (anciennement élément Eau) |
| **Pluton** | XX — Le Jugement | **Extension moderne** (anciennement élément Feu) |

**B2 validé :** pour Scorpion, Verseau, Poissons, afficher respectivement Pluton, Uranus, Neptune avec cette extension moderne. **Ne pas modifier les calculs de ZODIAC** ni présenter ces trois liens comme issus originellement de la Golden Dawn historique.

### Les 36 décans → mineurs

- Signes de **Feu** → Bâtons ; **Terre** → Deniers / Pentacles ; **Air** → Épées ; **Eau** → Coupes.
- Signes **cardinaux** → 2, 3, 4 ; **fixes** → 5, 6, 7 ; **mutables** → 8, 9, 10, dans l’ordre des trois décans.
- Correspondances transmises : Bélier 2–4 Bâtons ; Taureau 5–7 Deniers ; Gémeaux 8–10 Épées ; Cancer 2–4 Coupes ; Lion 5–7 Bâtons ; Vierge 8–10 Deniers ; Balance 2–4 Épées ; Scorpion 5–7 Coupes ; Sagittaire 8–10 Bâtons ; Capricorne 2–4 Deniers ; Verseau 5–7 Épées ; Poissons 8–10 Coupes.
- Selon le document de Claude, les maîtres planétaires de décans des deux systèmes ne coïncident que dans **6 décans sur 36** ; utiliser ce constat comme contexte documentaire, pas comme donnée recalculée ici.

## 6. Contrat technique rédactionnel des fichiers (B3)

Produire, **après GO**, un fichier JSON UTF-8 **par langue** :  
`portrait-fr.json`, `portrait-en.json`, `portrait-es.json`, `portrait-pt.json`, `portrait-it.json`, `portrait-de.json`, `portrait-tr.json`, `portrait-ru.json`, `portrait-ar.json`, `portrait-hi.json`, `portrait-th.json`, `portrait-zh.json`, `portrait-ja.json`, `portrait-ko.json`.

**Structure définie par Claude :**

```text
lang: "fr"
labels:
  title, more, less
  sections: arcana, energy, strengths, challenges, sky, thread
  birthCard, lifePathArcana, sign, planet, decan, uncertain
phrases:
  convergence, master, skyIntro
arcana:
  22 clés majeures, chacune avec essence
lifePath:
  11 clés de chemin de vie, chacune avec energy, strengths, challenges, lesson, thread
info:
  portrait, portraitDecan
```

- Format réel à livrer : **JSON strict**, sans commentaires ni virgules finales.
- La **seule variable** de substitution dans les textes est `{n}`, exclusivement dans `phrases.master`.
- Les unités narratives ne doivent pas mentionner de carte, signe, planète ou numéro en clair, y compris dans les descriptions associées au chemin de vie.
- En thaï : **pas de deux-points ni de point final** dans les textes.
- Conserver les registres validés : FR `vous`, EN `you`, ES `tú`, PT `você`, IT `tu`, DE `du`, TR `siz`, RU `вы`, HI `आप`, ZH `您`, JA et KO polis ; arabe/thaï selon les règles du corpus des mineurs.
- **Convention source Claude pour les JSON : apostrophe ASCII `'`** ; ne pas confondre avec les guillemets doubles `"` imposés à la syntaxe JSON. Cette convention vaut pour le corpus, pas pour la typographie du présent cahier.

## 7. Contrôle obligatoire : portrait **réellement assemblé** de 250 à 350 mots

### 7.1 Principe

La conformité **unitaire** aux bornes V0.3 du § 3 **ne garantit pas** automatiquement un portrait complet de 250–350 mots. Les assemblages comportent des portions conditionnelles (`convergence`, `master`) et trois lignes célestes dynamiques ; il faut donc **compter le texte final affiché**, et non la somme théorique d’un modèle de carte.

**Critère d’acceptation bloquant pour le français :** chaque portrait de test assemblé dans sa version détaillée doit contenir **250 à 350 mots**, avec un **aperçu replié de 35 à 50 mots** (`thread` seul pour le texte, les intitulés des deux cartes étant exclus du compte). Aucun cas sous le seuil minimal ou au-dessus du maximal ne peut être validé sans correction éditoriale.

### 7.2 Convention de comptage

- Mesurer **toutes les phrases narratives visibles** dans les six rubriques, y compris `convergence`, `master`, `skyIntro`, **ainsi que les mots-clés des trois lignes célestes lorsqu’ils sont affichés**. Les intitulés et noms propres ne servent pas à atteindre artificiellement le seuil.
- **Exclure** les titres des rubriques, **noms de cartes, de signes et de planètes**, libellés techniques, chiffres ou formules de calcul isolés, texte des bulles (i), textes masqués et doublon de l’aperçu replié (règle conservée de la V0.1).
- Pour les trois lignes célestes, **comptabiliser à part** les trois groupes de mots-clés et les noms affichés. Fournir également un total **« prose seule »** (sans mots-clés) afin de vérifier que la longueur n’est pas artificiellement gonflée par les métadonnées. Les noms sont exclus du seuil global de 250–350 mots.
- Utiliser une **même méthode de segmentation des mots** pour tous les tests français ; joindre le résultat par rubrique et le total général. Pour les 13 autres langues, appliquer un contrôle de longueur naturel pour chaque écriture, sans exiger mécaniquement 250–350 mots pour le chinois, le japonais ou le thaï.

### 7.3 Six cas de référence transmis par Claude (conditions figées)

**Provenance :** valeurs fournies dans `portrait-symbolique-complement-v0-2.md` comme **vérifiées avec le code de l’application par Claude** ; elles ne sont pas recalculées indépendamment dans ce cahier. Conditions annoncées : **sans heure de naissance, fuseau Europe/Paris, aucune date sur une journée de transition** ; arcane du décan selon la Golden Dawn et planète du décan selon ZODIAC.

| Cas | Naissance | Chemin de vie → arcane | Carte de naissance | Signe → arcane | Planète maîtresse → arcane | Décan ZODIAC → mineure Golden Dawn |
|---|---|---|---|---|---|---|
| **1. Convergence** | **03/11/1982** | **7 → VII Le Chariot** | 1996 → 25 → 7 → VII (**identique**) | Scorpion → XIII | Pluton → XX Le Jugement (**moderne**) | 2e décan, Neptune → **Six de Coupes** |
| **2. Maître 11** | **24/01/1975** | **11/2 → XI**, Force (Marseille) / Justice (Waite-Smith) | II La Papesse / La Grande Prêtresse | Verseau → XVII L’Étoile | Uranus → Le Mat / Le Fou (**moderne**) | 1er décan, Uranus → **Cinq d’Épées** |
| **3. Maître 22** | **18/08/1976** | **22/4 → Le Mat / Le Fou** | IV L’Empereur | Lion → La Force | Soleil → XIX Le Soleil | 3e décan, Mars → **Sept de Bâtons** |
| **4. Maître 33 + convergence** | **18/02/1975** | **33/6 → VI L’Amoureux / Les Amoureux** | VI (**identique**) | Verseau → XVII L’Étoile | Uranus → Le Mat / Le Fou (**moderne**) | 3e décan, Vénus → **Sept d’Épées** |
| **5. Deux arcanes distincts, sans maître** | **08/01/1975** | **4 → IV L’Empereur** | 22 → Le Mat / Le Fou | Capricorne → XV Le Diable | Saturne → XXI Le Monde | 2e décan, Vénus → **Trois de Deniers** |
| **6. Exemple de la bulle** | **17/04/1990** | **4 → IV L’Empereur** | IV (**identique**) | Bélier → IV L’Empereur | Mars → XVI La Maison Dieu / La Tour | 3e décan, **Jupiter (ZODIAC) / Vénus (Golden Dawn)** → **Quatre de Bâtons** |

**Assertions d’acceptation par cas :**

1. **Convergence (03/11/1982)** : afficher la première `essence` et `phrases.convergence` à la place de la seconde `essence` ; `phrases.master` absent.
2. **11 (24/01/1975)** : afficher `phrases.master` avec `{n}=2` ; vérifier les deux jeux et la permutation **Force / Justice**.
3. **22 (18/08/1976)** : afficher `phrases.master` avec `{n}=4` ; correspondance **Mat / Fou**, sans prétendre que le Mat historique est numéroté XXII.
4. **33 (18/02/1975)** : afficher **simultanément** `phrases.master` avec `{n}=6` et `phrases.convergence` ; éviter une répétition des significations de l’arcane VI.
5. **Distinct sans maître (08/01/1975)** : afficher **deux** `essence`, sans `convergence` ni `master`.
6. **Troisième décan du Bélier (17/04/1990)** : conserver **Jupiter** comme planète du décan ZODIAC, présenter **Vénus** comme attribution Golden Dawn et **Quatre de Bâtons** comme mineure ; les traditions doivent rester explicitement distinguées dans `info.portraitDecan`.

**Vérifications transversales :** deux jeux pour les cas concernés ; notes sur les maîtres modernes **Pluton/Uranus/Neptune** ; `uncertain` en cas de frontière sans heure (contrôle séparé, non couvert par les six dates ci-dessus) ; cohérence des 9 mots-clés de la rubrique céleste. **Les quatre portraits rédigés et assemblés obligatoires restent les cas 1 à 4** ; les cas 5 et 6 servent de tests complémentaires.

### 7.4 Si un portrait ne respecte pas la plage

- **Ne pas combler artificiellement** par des répétitions ou des phrases génériques.
- Corriger la rédaction concernée dans le corpus français puis refaire l’assemblage et les tests ; si la plage s’avère incompatible avec les bornes unitaires imposées au § 3, **demander à Claude une validation de l’ajustement des bornes ou de la règle d’assemblage**, au lieu de changer silencieusement le schéma de 77 unités.
- Garder la règle déjà validée : **250–350 mots réellement affichés**. La mise en page exportée doit suivre le contenu, pas tronquer les textes pour tenir sur l’image.

## 8. Validation qualité et livrables futurs (après GO)

### 8.1 Validations du JSON

- [ ] JSON UTF-8 valide, `lang` cohérent, schéma sans champs manquants ou supplémentaires.
- [ ] `arcana` = **22** clés exactes avec `essence` ; `lifePath` = **11** clés exactes avec les cinq champs requis.
- [ ] **77** unités narratives, `phrases` = trois entrées, `info` = deux bulles, `labels` complets.
- [ ] Longueurs unitaires du § 3 et des trois phrases conformes, textes non vides, aucun doublon textuel exact.
- [ ] Aucun nom de carte/signe/planète/numéro dans les unités ; aucun substituant hors `{n}` dans `master`.
- [ ] Ton symbolique, sans certitude prédictive ; registre et ponctuation corrects.

### 8.2 Validation des portraits assemblés

- [ ] **Quatre portraits français assemblés** pour relecture : convergence (03/11/1982), maître 11 (24/01/1975), maître 22 (18/08/1976), maître 33 + convergence (18/02/1975).
- [ ] Exécuter les **six scénarios du § 7.3** : quatre portraits rédigés obligatoires (cas 1–4) et deux contrôles complémentaires (cas 5–6), avec comparaison des jeux et vérifications célestes.
- [ ] **250–350 mots** par portrait français détaillé et **35–50 mots** pour l’aperçu ; contrôle **bloquant**. Les maxima unitaires permettant théoriquement **355 mots**, ne jamais déduire la conformité du seul respect des bornes.
- [ ] Pas d’incohérence des nombres maîtres, des correspondances modernes ou des planètes des décans.
- [ ] Libellés et titres adaptés à chaque tradition ; aucun texte coupé à l’export (validation applicative Claude).

### 8.3 Ordre de réalisation (non lancé)

1. **Après GO RÉDACTION explicite seulement :** produire `portrait-fr.json` (77 unités, libellés, 3 phrases, 2 bulles) et **quatre** portraits assemblés pour relecture (cas 1–4), puis le rapport de validation des **six** cas.
2. Faire relire et valider le français ; Claude contrôle schéma, longueurs, assemblages, cohérence et cas spéciaux.
3. Produire les **13 autres langues**, une ou deux par livraison, en partant du français approuvé.
4. Claude assure intégration, contrôles techniques, tests, publication et export image.

---

## 9. État à la clôture de la V0.3

- **Base V0.2 validée**, décision **B2** confirmée : maîtres modernes de ZODIAC conservés, extensions modernes des correspondances clairement signalées.
- **Bornes unitaires révisées** conformément au complément de Claude : `essence` et `convergence` 24–30, `master` 15–20, `energy` et `strengths` 48–58, `challenges` 30–38, `lesson` 16–22, `skyIntro` 16–22, `thread` 40–50.
- **Six scénarios de référence** inclus avec dates, résultats et assertions ; quatre portraits rédigés obligatoires à produire après GO.
- **Contrôle bloquant inchangé** : **250–350 mots** sur le portrait français *réellement assemblé* et **35–50 mots** sur l’aperçu. Un extrême théorique à **355 mots** impose le contrôle final ; pas d’hypothèse de conformité automatique.
- **Aucun texte `portrait-fr.json` n’a été rédigé**, aucun corpus multilingue généré et aucune source ZODIAC modifiée.
- **Action suivante en attente : GO RÉDACTION explicite** de l’utilisateur. Cette V0.3 est le cahier de référence pour le lot français.
