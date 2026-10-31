# 🗺️ Zodiaque & Décans — ce qu'il reste à faire

> État au 31 octobre 2026, après le portrait symbolique, l'audit d'accessibilité et les tests Safari / Firefox (V7.3), et le retour détaillé d'une testeuse (§ 3). Ce document complète `projet.md` (ce qui est fait) et `reprise.md` (notes techniques).
> Légende : 🟢 petit · 🟡 moyen · 🔴 gros chantier · ❓ décision à prendre · ⭐ recommandation de Claude

---

## 0. Où en est l'appli

| Domaine | État |
|---|---|
| Feuille de route d'origine (étapes 1 à 6) | ✅ terminée, sauf l'iPhone (gardé pour la fin) |
| Pistes 1 à 6 | ✅ version et bandeau de mise à jour · ✅ cartes renversées · ✅ lieux par coordonnées GPS · ✅ calendrier du ciel · ✅ fiche du thème natal à imprimer ou en PDF · ✅ arcanes mineurs (jeu complet de 78 cartes) |
| Langues | 14 (FR, EN, ES, PT, IT, DE, TR, RU, AR, HI, TH, ZH, JA, KO) |
| Tests automatiques | 96 (79 historiques + 17 portrait), dans 5 fuseaux horaires, plus la version autonome hors ligne, le site installable et un audit d'accessibilité bloquant (axe-core, 0 anomalie) ; mêmes tests dans Safari (WebKit) et Firefox, pour information |
| Publication | automatique sur GitHub Pages, après les tests (circuit GitHub Actions) |
| Poids | version autonome ≈ 6,8 Mo : illustrations du tarot ≈ 3,1 Mo (déjà en WebP), villes ≈ 1 Mo, 14 langues ≈ 1,6 Mo, textes du portrait ≈ 0,4 Mo |
| Confidentialité | aucune donnée envoyée en ligne (adresse en « # », pas de serveur, pas de statistiques) ; seule exception : les événements ajoutés à Google Agenda à la demande de l'utilisateur |

---

## 1. ✅ Les 56 arcanes mineurs (intégrés le 27 octobre 2026)

Option « Jeu complet (78 cartes) » du tirage du jour, désactivée par défaut ; noms selon le jeu (Marseille / Waite-Smith) ; sens à l'endroit et renversé ; 14 langues ; un jeu d'illustrations commun aux deux habillages, chargé au démarrage ; bulle (i) ; 2 tests. Détails dans `projet.md` et `reprise.md`.

### 1.1 Reste à faire : 9 illustrations à refaire avec Gemini 🟢

Gemini a refusé de générer des images pendant l'intégration (« plan sans génération d'images ») : 18 cartes ont été faites avec **ChatGPT en dépannage**. Les générateurs comptent mal ; ces 9 cartes ont **un objet de trop ou de moins** et sont à refaire avec Gemini quand il refonctionne :

| Carte | Illustration actuelle | Problème |
|---|---|---|
| Six de Coupes | ChatGPT | 5 coupes au lieu de 6 |
| Dix de Coupes | ChatGPT | 11 coupes au lieu de 10 |
| Cinq d'Épées | ChatGPT | 6 épées au lieu de 5 |
| Six d'Épées | ChatGPT | 5 épées au lieu de 6 |
| Sept d'Épées | ChatGPT | 8 épées au lieu de 7 |
| Neuf d'Épées | ChatGPT | 8 épées au lieu de 9 |
| Dix d'Épées | Gemini | 9 épées au lieu de 10 |
| Cinq de Deniers | Gemini | 6 deniers au lieu de 5 |
| Neuf de Deniers | Gemini | 8 deniers au lieu de 9 |

- [ ] Préparer avec Claude deux planches de retouches (sur le modèle des planches 10 et 11 de `docs/prompts-gemini-arcanes-mineurs.md` : disposition imposée, « aucun autre objet ») ; dans Gemini, « Aspect ratio » sur 1:1 et la planche des As à Six de Bâtons jointe comme modèle.
- [ ] Ensuite : découpe, contrôle, conversion et nouveau `zodiac-tarot-minors-art.js` (rien d'autre ne change dans l'appli).
- [ ] Facultatif : refaire aussi les 9 autres cartes ChatGPT avec Gemini, pour un style parfaitement homogène.

---

## 2. ✅ Portrait symbolique V0.3 (intégré le 28 octobre 2026)

> **Statut actualisé :** décisions fixées par le cahier V0.3, 14 JSON traduits et validés, module local et bloc repliable, aperçu et six rubriques, formules distinctes, cas maîtres 11/22/33, 36 décans Golden Dawn, bulles explicatives, export déplié et tests. Référence : `docs/ZODIAC_Cahier_Portrait_Symbolique_V0_3_FINAL_POUR_VALIDATION.md`. Les choix ci-dessous sont conservés comme historique de conception ; **ils ne sont plus en attente**.

Idée d'une testeuse (27 octobre 2026), approuvée : aller au-delà des textes courts actuels et **relier les traditions entre elles** à partir de la date de naissance, pour un portrait plus approfondi. Toujours présenté comme une lecture symbolique (jamais comme un destin).

### 2.1 Contenu réalisé
- **Arcane du chemin de vie** (chemin de vie 4 → IV L'Empereur), avec un portrait détaillé : énergie personnelle, forces, défis, mission, leçon (quelques phrases par rubrique).
- **Correspondances de la Golden Dawn** (tradition ésotérique de la fin du XIXe siècle) : arcane majeur du signe (Bélier → L'Empereur, Scorpion → La Mort…) et de la planète maîtresse (Vénus → L'Impératrice…) ; **carte mineure du décan** : les 36 décans correspondent aux cartes 2 à 10 des mineurs (1er décan du Bélier → Deux de Bâtons). Lien naturel avec le nom de l'appli et les mineurs déjà intégrés.
- Un court **texte de synthèse** qui relie ces éléments.

### 2.2 Décisions validées ✅
- [x] **Deux arcanes** : carte de naissance et arcane du chemin de vie, calculs et formules distincts ; texte de convergence si identiques.
- [x] **Nombres maîtres** : 11 → Force à Marseille / Justice chez Waite-Smith, secondaire 11/2 ; 22 → Mat/Fou, 22/4 ; 33 → VI, 33/6.
- [x] **Décans** : planète ZODIAC inchangée, arcane mineur Golden Dawn, attribution historique distincte ; bulle explicative.
- [x] **Maîtres modernes** : Pluton / Uranus / Neptune conservés selon le signe, présentés comme extensions modernes.
- [x] **Interface** : bloc replié, aperçu 35–50 mots et six rubriques, portrait français assemblé 250–350 mots ; export déplié.

### 2.3 Livrables intégrés
- [x] **14 traductions** : 77 unités narratives, 3 phrases, 2 bulles, libellés par langue ; sources `data/portraits/`.
- [x] **Code indépendant** : `zodiac-portrait.js`, `zodiac-portrait-data.js` (généré), `zodiac-portrait.css` ; intégration sans modifier les calculs existants.
- [x] **Tests** : six cas du cahier, 36 décans, deux jeux, 14 langues, repli, export, frontières incertaines, libellés, ponctuation et formules dans `zodiac-portrait-tests.js` ; test de bout en bout dans `tools/run_tests.py`.
- [x] **Documentation** : cahier V0.3 copié dans `docs/`, notes `reprise.md` et `projet.md` mises à jour.

---

## 3. 🆕 Retour d'une testeuse (31 octobre 2026) : pistes validées

Retour détaillé d'une testeuse, validé le 31 octobre. Fil conducteur pour tous ces chantiers : des lectures **réalistes mais encourageantes, jamais fatalistes** ; une relation dépend des personnes et de leurs choix, pas des astres. Chaque gros chantier suit la méthode du portrait : cahier de décisions, textes rédigés puis validés dans les 14 langues, intégration et tests.

### 3.1 🟢 Oracle Oui / Non
- [ ] Un cercle et quatre réponses : **Oui, Non, Peut-être, Bientôt**. La personne pense à sa question sans rien écrire et touche le centre ; une flèche lumineuse tourne, ralentit et s'arrête au hasard (générateur du navigateur). Toucher à nouveau pour une autre question.
- [ ] Présenté clairement comme un jeu, pas comme une prédiction ; version sobre en mode « animations réduites ».
- [ ] Peu de textes (≈ 6 par langue). ❓ Emplacement : onglet Tarot (§ 3.3) ou accès direct depuis l'accueil.

### 3.2 🟡 Compatibilité approfondie
- Aujourd'hui : trois axes (signes, animaux chinois, Lunes) notés sur 5, et une entente globale.
- [ ] Ajouter Vénus (affection), Mars (attirance, énergie), Mercure (communication), les ascendants et les chemins de vie ; les positions sont déjà calculées par le thème natal.
- [ ] Rubriques : affinité émotionnelle, attirance, communication, forces du couple, défis possibles, et **« Conseils des étoiles »** (comment la communication, la patience et la compréhension aident deux tempéraments différents).
- [ ] ❓ Garder, adoucir ou remplacer la note sur 5 : des forces et des points d'attention plutôt qu'un verdict.
- [ ] Ascendant de l'autre personne : ajouter son lieu de naissance (facultatif, gardé en mémoire seulement et jamais enregistré, comme aujourd'hui).
- [ ] Cahier de décisions, puis textes dans les 14 langues : c'est le plus gros du travail.

### 3.3 🟡 Onglet Tarot et nouveaux tirages
- Aujourd'hui, dans « Numérologie & tarot » : carte de naissance, carte du jour, Passé · Présent · Avenir, deux jeux (Marseille, Waite-Smith), cartes renversées, jeu complet de 78 cartes en option.
- [ ] Un onglet **Tarot** à part ; ❓ le portrait symbolique reste avec la numérologie.
- [ ] Un jeu à mélanger, des cartes à choisir dans un éventail, révélées une à une.
- [ ] Nouveaux tirages, par étapes : une question · une carte ; Situation · Défi · Conseil ; les six prochains mois (une carte par mois). Plus tard : lectures par thème (amour, travail, questions personnelles), coûteuses en textes (78 cartes × 3 thèmes × 14 langues).

### 3.4 🟡 Carré de Pythagore (matrice 3×3)
- Aujourd'hui : chemin de vie, expression (« nombre du destin »), nombre intime, personnalité, cycles de l'année, du mois et du jour ; ❓ peut-être à rendre plus visibles.
- [ ] Matrice calculée à partir de la date de naissance ; chaque case cliquable, avec son interprétation (caractère, talents, forces, fragilités, émotions, leçons de vie).
- [ ] ❓ Méthode de calcul à fixer dans un cahier (il en existe plusieurs variantes) ; environ 50 textes par langue.

### 3.5 Mis de côté : abonnement premium
- Idée externe (version gratuite et abonnement payant), **qui n'est pas la vision du projet** : mise de côté. Elle supposerait paiement, comptes ou clés, obligations légales, et contredirait la promesse de confidentialité.

### 3.6 ❓ À étudier plus tard : une courte pause financée (ton idée)
- Idée : au moment de la recherche, une pause de 5 à 10 secondes financée (publicité ou partenaire) ; fréquence à choisir : à chaque recherche, toutes les 5 recherches ou une fois par jour.
- Point clé : les régies publicitaires classiques (type Google AdSense) chargent du code d'un tiers qui suit les visiteurs. Conséquences : fin de la promesse « aucune donnée envoyée », bandeau de consentement aux cookies obligatoire en Europe, rien en version hors ligne, et des revenus faibles tant que l'audience reste petite.
- Piste compatible avec la promesse : un **message partenaire** (image et lien intégrés à l'appli, sans code tiers ni pistage) pendant l'animation de recherche, qui dure déjà ≈ 4 secondes ; partenariat direct ou lien d'affiliation.
- À décider quand l'appli aura des utilisateurs réguliers.

---

## 4. 🟡 Frise annuelle des événements (en image)

Idée notée le 27 octobre : visualiser l'année du ciel sous forme d'une frise stylisée, belle à regarder et à partager.

- [ ] Contenu : les 12 mois en ligne ou en spirale, avec lunes, éclipses, rétrogradations (bandes colorées par planète), changements de signe du Soleil et transits personnels.
- [ ] Forme : ❓ image dans l'appli (avec export PNG comme les autres sections), ou affiche à imprimer en PDF (A4 ou A3 paysage).
- [ ] Accès : ❓ pour tous dans « Ciel du moment », ou réservée à la console d'administration.
- [ ] Données : déjà disponibles (module du calendrier, calcul d'un an en moins d'une seconde).
- [ ] Textes : quelques intitulés et une légende (environ 10 textes × 14 langues).

---

## 5. 🟡 Console d'administration locale (non publiée)

Idée notée le 27 octobre. Point clé : l'appli est publique et n'a pas de serveur, donc une section « admin » cachée dans le site ne serait jamais vraiment protégée. ⭐ D'où **une console à part, présente dans le dépôt mais exclue du site en ligne**, que tu ouvres sur ton ordinateur.

- [ ] **Export d'un calendrier de 12 mois** en .ics pour n'importe quel profil (Apple, Outlook ; Google en import sur ordinateur).
- [ ] **Dos de cartes** : choix par jeu, et ❓ selon les saisons ou les périodes de l'année (par exemple un dos par saison, ou pour les solstices et équinoxes).
- [ ] **Habillages de l'appli (skins)** : palettes, fonds, typographies ; aperçu en direct.
- [ ] **Fichier de réglages** (`zodiac-config.js`) produit par la console, à déposer sur GitHub comme une mise à jour ; le site en tient compte à la publication suivante.
- [ ] Éventuellement : génération de la frise annuelle (§ 4) pour un profil, aperçu des nouvelles cartes avant publication.
- [ ] Technique : la console réutilise les modules de l'appli ; `build-standalone.py` l'exclut du dossier `site/` ; ses propres tests.

---

## 6. 🔴 iPhone et version hors ligne (en dernier)

- [ ] **Bouton « Version hors ligne »** : il est grisé (« bientôt disponible ») ; ❓ décider s'il est réactivé, et pour quels appareils. Une seule ligne suffit : `OFFLINE_ENABLED = true` dans `zodiac-app.js`.
- [ ] **Appli installée sur iPhone** (« Sur l'écran d'accueil ») : vérifier le fonctionnement hors ligne, la conservation des données (Safari peut effacer les données d'un site non utilisé pendant plusieurs semaines ; c'est moins vrai pour une appli installée, à vérifier), le bandeau de mise à jour, les zones sûres (encoche, barre d'accueil).
- [ ] **Fichier autonome sur iPhone** : l'application Fichiers n'ouvre pas bien un fichier HTML local, d'où la question de l'intérêt du bouton sur iPhone.
- [ ] **Fonctions à vérifier dans Safari** (moteur WebKit) : export en image (html2canvas), impression ou PDF, calendrier .ics (« Ajouter tous les événements »), coordonnées GPS, tirage du jour, partage.
- [x] **Tests WebKit et Firefox dans le circuit GitHub** (31 octobre, V7) : tâche « Informatif — webkit / firefox », non bloquante.
- [x] Premiers résultats (V7.3) : Firefox, tout passe ; Safari (WebKit), fuseaux horaires récents inconnus des navigateurs pas à jour → corrigé par des fuseaux équivalents ; test hors ligne adapté à WebKit.
- [ ] Quand la ligne WebKit est verte plusieurs fois de suite : la rendre bloquante (voir `reprise.md`).
- [ ] Icône, écran de démarrage et nom sur l'écran d'accueil de l'iPhone.

---

## 7. 🟢 Améliorations notées en cours de route (à valider)

- [ ] **Numérologie** : « nombre actif » (prénom usuel) et « nombre héréditaire » (nom de famille), en plus des nombres actuels.
- [ ] **Tarot** : croix celtique et autres tirages classiques, en complément du § 3.3 (le « oui ou non » devient l'Oracle, § 3.1).
- [ ] **Dos de cartes** : le n° 6 (rose des vents) reste en réserve, par exemple pour un troisième jeu ou une saison (§ 5).
- [ ] **Page d'aide ou foire aux questions** : installer l'appli, importer le calendrier, enregistrer en PDF, effacer ses données, confidentialité.
- [ ] **Turc** : les sens des 22 arcanes majeurs tutoient (sen), alors que l'interface et les arcanes mineurs vouvoient (siz) ; harmoniser au vouvoiement.
- [ ] **Relecture des traductions** par des personnes dont c'est la langue maternelle, en priorité arabe, hindi, thaï, chinois, japonais et coréen. Les textes ont été écrits avec soin, mais une relecture humaine reste préférable.
- [ ] **Animation de recherche** (≈ 4 s à chaque profil) : permettre de la passer d'un toucher, ou l'écourter après la première fois 🟢
- [ ] **Arcane de l'année personnelle** : année personnelle 1 à 9 → arcane du même numéro, avec ses mots-clés, dans la continuité du portrait 🟢
- [ ] **Allègement des mises à jour** 🟡 : le site est une seule page de 6,8 Mo, retéléchargée en entier à chaque version, alors que les illustrations et les villes (≈ 4 Mo) ne changent presque jamais. Les placer dans des fichiers séparés gardés par le service worker, et ne charger que la langue choisie, rendrait chaque mise à jour environ trois fois plus légère. La version autonome resterait en un seul fichier.
- [ ] **Performance sur les appareils modestes** : le flou et les étoiles animées du fond coûtent cher en dessin. Le mode « animations réduites » les coupe déjà ; ❓ envisager un allègement automatique sur les petits appareils.

---

## 8. 🟢 Qualité, maintenance, technique

- [ ] **Licence du projet** ❓ : le dépôt est public mais sans licence, ce qui veut dire « tous droits réservés » par défaut. À décider : garder ainsi, ou choisir une licence (MIT, CC BY-NC…). Les crédits des données sont déjà dans le README, y compris la mention des illustrations générées avec Gemini.
- [ ] **Versions à surveiller** dans le circuit GitHub : Ubuntu fixé à 24.04, Playwright 1.56, actions (checkout v7, setup-python v7, upload-pages-artifact v5, deploy-pages v5). À mettre à jour de temps en temps, quand GitHub prévient d'une fin de prise en charge.
- [ ] **Tests d'interface dans le circuit** : la plupart des parcours (rituel du tirage, calendrier, coordonnées GPS, impression, « Mon profil ») sont vérifiés par des scripts de Claude, hors du dépôt. ⭐ En intégrer quelques-uns au circuit GitHub.
- [ ] **Limites de validité** : calculs garantis de 1900 à 2100 (avertissement affiché au-delà) ; table des éclipses et base des villes GeoNames à rafraîchir un jour ; fuseaux horaires fournis par le navigateur.
- [x] **Accessibilité, audit automatique** (31 octobre, V7) : axe-core sur l'accueil et les 5 onglets, français et arabe, thèmes sombre et clair ; 0 anomalie, vérifié à chaque publication.
- [ ] **Accessibilité, essais réels** : navigation au clavier dans toutes les sections, lecteur d'écran (VoiceOver sur iPhone, NVDA sur PC) sur la roue et les cartes ; un audit automatique ne remplace pas ces essais.
- [ ] **Promesse de confidentialité** : à préserver à chaque nouvelle fonction (aucun appel réseau, aucune statistique, aucun pistage).

---

## 9. Décisions en attente (récapitulatif)

| # | Sujet | Options | ⭐ Recommandation |
|---|---|---|---|
| 1 | Arcanes mineurs : où ? | ✅ décidé et fait | tirage du jour, en option « jeu complet » |
| 2 | Arcanes mineurs : illustrations | ✅ décidé et fait | un jeu scénique commun, deux habillages |
| 3 | Arcanes mineurs : chargement | ✅ décidé et fait | tout au démarrage (plus simple hors ligne) |
| 4 | Portrait symbolique | ✅ décisions du cahier V0.3 intégrées | contrôle de la publication après dépôt |
| 5 | Frise annuelle | pour tous · dans la console d'administration | à décider après le portrait |
| 6 | Console d'administration | périmètre exact | export 12 mois, dos de cartes, habillages, fichier de réglages |
| 7 | Version hors ligne | réactiver · laisser grisé | à trancher avec l'étape iPhone |
| 8 | Licence du dépôt | aucune · MIT · CC BY-NC | à discuter |
| 9 | Compatibilité : note sur 5 | garder · adoucir · remplacer | forces et points d'attention plutôt qu'un verdict |
| 10 | Oracle Oui / Non : emplacement | onglet Tarot · accueil | à décider au moment du chantier |
| 11 | Financement | rien · lien « soutenir le projet » · message partenaire · publicité classique | rien pour l'instant ; si besoin, message partenaire sans pistage. Abonnement premium mis de côté |

---

## 10. Ordre proposé

1. ✅ **Arcanes mineurs** (§ 1) ; reste les 9 illustrations à refaire avec Gemini (§ 1.1), quand il refonctionnera.
2. ✅ **Portrait symbolique** (§ 2).
3. ✅ **Accessibilité (audit automatique) et tests Safari / Firefox** (§ 6, § 8), V7 à V7.3.
4. **Animation de recherche passable** (§ 7), puis **Oracle Oui / Non** (§ 3.1) : deux petits chantiers.
5. **Compatibilité approfondie** (§ 3.2).
6. **Onglet Tarot et nouveaux tirages** (§ 3.3).
7. **Carré de Pythagore** (§ 3.4).
8. **Améliorations rapides** (§ 7) au fil de l'eau, dont l'allègement des mises à jour.
9. **Frise annuelle** (§ 4) et **console d'administration** (§ 5), éventuellement ensemble, puisque la console peut produire la frise.
10. **Qualité et maintenance** (§ 8), en continu.
11. **iPhone et version hors ligne** (§ 6), en dernier.

Financement (§ 3.6) : à part, à décider plus tard. Abonnement premium (§ 3.5) : mis de côté.
