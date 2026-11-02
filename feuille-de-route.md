# 🗺️ Zodiaque & Décans — ce qu'il reste à faire

> État au 2 novembre 2026, après les articles « En savoir plus » (V10.3) et l'allègement des mises à jour (V10.4) ; auparavant le portrait symbolique, l'audit d'accessibilité et les tests Safari / Firefox (V7.3), et le retour détaillé d'une testeuse (§ 3). Ce document complète `projet.md` (ce qui est fait) et `reprise.md` (notes techniques).
> Légende : 🟢 petit · 🟡 moyen · 🔴 gros chantier · ❓ décision à prendre · ⭐ recommandation de Claude

---

## 0. Où en est l'appli

| Domaine | État |
|---|---|
| Feuille de route d'origine (étapes 1 à 6) | ✅ terminée, sauf l'iPhone (gardé pour la fin) |
| Pistes 1 à 6 | ✅ version et bandeau de mise à jour · ✅ cartes renversées · ✅ lieux par coordonnées GPS · ✅ calendrier du ciel · ✅ fiche du thème natal à imprimer ou en PDF · ✅ arcanes mineurs (jeu complet de 78 cartes) |
| Langues | 14 (FR, EN, ES, PT, IT, DE, TR, RU, AR, HI, TH, ZH, JA, KO) |
| Tests automatiques | 113 (96 + 17 portrait), dans 5 fuseaux horaires, plus la version autonome hors ligne, le site installable et un audit d'accessibilité bloquant (axe-core, 0 anomalie) ; mêmes tests dans Safari (WebKit) et Firefox, pour information |
| Publication | automatique sur GitHub Pages, après les tests (circuit GitHub Actions) |
| Poids | version autonome ≈ 8,4 Mo, mesurée le 2 novembre 2026 (7,8 Mo avant les articles ; l'ancien chiffre de 6,8 Mo était dépassé) : illustrations du tarot ≈ 3,1 Mo (déjà en WebP), villes ≈ 1 Mo, 14 langues ≈ 1,6 Mo, articles ≈ 0,6 Mo, textes du portrait ≈ 0,4 Mo |
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

### 3.1 ✅ Oracle Oui / Non (V7.5)
- [x] Un cercle et quatre réponses : **Oui, Non, Peut-être, Bientôt**. La personne pense à sa question sans rien écrire et touche le centre ; une flèche lumineuse tourne, ralentit et s'arrête au hasard (générateur du navigateur). Toucher à nouveau pour une autre question.
- [x] Présenté clairement comme un jeu, pas comme une prédiction ; version sobre en mode « animations réduites ».
- [x] 9 courts textes par langue. Emplacement : bouton sur l'accueil, sous le formulaire, et lien dans « Numérologie & tarot » ; à reprendre dans l'onglet Tarot (§ 3.3) quand il existera.

### 3.2 ✅ Compatibilité approfondie (V8, 1er novembre 2026)
- [x] Cahier de décisions V0.2.1, relu par trois IA (`docs/cahier-compatibilite.md`).
- [x] Neuf axes lus par signes, trois tonalités, bilan sans note, aperçu, analyse repliable, « Conseils des étoiles », synastrie repliée ; lieu de naissance de l'autre personne pour les ascendants.
- [x] Textes français rédigés, vérifiés, intégrés et testés, puis traduits dans les 13 autres langues (127 textes par langue).
- [ ] Relecture par des personnes de langue maternelle (§ 8), comme pour le reste de l'appli.

### 3.3 ✅ Onglet Tarot et nouveaux tirages (V9)
- [x] Cahier V0.2, relu par trois IA (`docs/cahier-tarot.md`).
- [x] Onglet Tarot à part ; quatre tirages interactifs (une question · une carte, Passé · Présent · Avenir, Situation · Défi · Conseil, les six prochains mois) ; mélanger, choisir dans l'éventail, poser, retourner ; sauvegarde par profil et par type.
- [ ] Plus tard : lectures par thème (amour, travail, questions personnelles) en version légère ; tirages accessibles sans profil, depuis l'accueil.

### 3.4 ✅ Carré de Pythagore (V10)
- [x] Cahier V0.2, relu par trois IA (`docs/cahier-carre-pythagore.md`) ; méthode d'Alexandrov, variante moderne « + 19 » depuis 2000.
- [x] Grille 3 × 3 cliquable, 9 cases et 8 lignes, seuils par siècle, analyse complète repliable et exportée ; 89 textes par langue.

### 3.4 bis ✅ Articles « En savoir plus » (V10.3, 2 novembre 2026)
- [x] 10 articles (signes et décans, zodiaque chinois, thème natal, ciel du moment, compatibilité, numérologie, carré, portrait, tarot, Oracle) : titre, 4 rubriques, sources ; français rédigé par ChatGPT, contrôlé et corrigé, 13 traductions contrôlées automatiquement.
- [x] Lien « En savoir plus » à la fin des 38 bulles (i) des méthodes et dans l'Oracle ; panneau de lecture accessible ; cahier `docs/cahier-articles.md`.

### 3.5 Mis de côté : abonnement premium
- Idée externe (version gratuite et abonnement payant), **qui n'est pas la vision du projet** : mise de côté. Elle supposerait paiement, comptes ou clés, obligations légales, et contredirait la promesse de confidentialité.

### 3.6 ❓ À étudier plus tard : une courte pause financée (ton idée)
- Idée : au moment de la recherche, une pause de 5 à 10 secondes financée (publicité ou partenaire) ; fréquence à choisir : à chaque recherche, toutes les 5 recherches ou une fois par jour.
- Point clé : les régies publicitaires classiques (type Google AdSense) chargent du code d'un tiers qui suit les visiteurs. Conséquences : fin de la promesse « aucune donnée envoyée », bandeau de consentement aux cookies obligatoire en Europe, rien en version hors ligne, et des revenus faibles tant que l'audience reste petite.
- Piste compatible avec la promesse : un **message partenaire** (image et lien intégrés à l'appli, sans code tiers ni pistage) pendant l'animation de recherche (≈ 3,8 s à la première recherche, passable) ; partenariat direct ou lien d'affiliation.
- À décider quand l'appli aura des utilisateurs réguliers.
- [x] **Dons et contributions** (V7.6) : bouton « Soutenir le projet » en bas de page et ligne « Cette appli vous plaît ? » à la fin des résultats ; fenêtre qui regroupe les plateformes (Ko-fi, PayPal, Liberapay, GitHub Sponsors) et « Partager l'appli ». Simples liens, sans code tiers.
- [ ] Créer les comptes de dons, puis coller leurs adresses dans `SUPPORT_LINKS` (`zodiac-support.js`) : le bouton apparaît dès la première adresse.
- [ ] Plus tard : « Proposer une relecture de traduction » dans la même fenêtre (§ 7, relecture par des personnes de langue maternelle).

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
- [x] **Animation de recherche** : décision du 31 octobre, elle reste complète à chaque recherche, car elle fait partie de l'ambiance (la version courte et passable de la V7.4 a été annulée en V7.5).
- [ ] **Arcane de l'année personnelle** : année personnelle 1 à 9 → arcane du même numéro, avec ses mots-clés, dans la continuité du portrait 🟢
- [x] **Allègement des mises à jour** (V10.4, 2 novembre 2026) : un fichier par module, nommé d'après son contenu, gardé par le service worker d'une version à l'autre ; double téléchargement de la page supprimé. Mise à jour typique ≈ 80 Ko au lieu d'environ 4 à 8 Mo ; première visite inchangée (≈ 4,1 Mo compressés). La version autonome reste en un seul fichier.
- [ ] Plus tard, si besoin : alléger aussi la première visite (≈ 4,1 Mo compressés, dont ≈ 2,4 Mo d'illustrations) ; piste : ne charger les illustrations du tarot qu'à l'ouverture de l'onglet Tarot.
- [ ] **Performance sur les appareils modestes** : le flou et les étoiles animées du fond coûtent cher en dessin. Le mode « animations réduites » les coupe déjà ; ❓ envisager un allègement automatique sur les petits appareils.

---

## 8. 🟢 Qualité, maintenance, technique

- [ ] **Heures inexistantes ou ambiguës au changement d'heure** (signalé lors de la relecture de la compatibilité) : aujourd'hui, une heure qui n'a pas existé (passage à l'heure d'été) est avancée d'une heure, et une heure qui a existé deux fois (retour à l'heure d'hiver) prend la première occurrence. Amélioration possible pour toute l'appli : un message « cette heure n'a pas existé ce jour-là » et une mention « ascendant incertain » pour l'heure ambiguë.

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
| 10 | Oracle Oui / Non : emplacement | ✅ décidé et fait | accueil et « Numérologie & tarot », puis onglet Tarot |
| 11 | Financement | lien « soutenir le projet » · message partenaire · publicité classique | dons et contributions d'abord (lien simple, sans pistage) ; message partenaire plus tard si besoin. Abonnement premium mis de côté |

---

## 10. Ordre proposé

1. ✅ **Arcanes mineurs** (§ 1) ; reste les 9 illustrations à refaire avec Gemini (§ 1.1), quand il refonctionnera.
2. ✅ **Portrait symbolique** (§ 2).
3. ✅ **Accessibilité (audit automatique) et tests Safari / Firefox** (§ 6, § 8), V7 à V7.3.
4. ✅ **Oracle Oui / Non** (§ 3.1), V7.5 ; l'animation de recherche reste complète (§ 7). ✅ **Soutenir le projet** (§ 3.6), V7.6 : reste à renseigner les adresses de dons.
5. ✅ **Compatibilité approfondie** (§ 3.2), V8.
6. ✅ **Onglet Tarot et nouveaux tirages** (§ 3.3), V9.
7. ✅ **Carré de Pythagore** (§ 3.4), V10. ✅ **Articles « En savoir plus »** (§ 3.4 bis), V10.3.
8. ✅ **Allègement des mises à jour** (§ 7), V10.4 : mise à jour typique ≈ 80 Ko. Puis **améliorations rapides** (§ 7) au fil de l'eau.
9. **Frise annuelle** (§ 4) et **console d'administration** (§ 5), éventuellement ensemble, puisque la console peut produire la frise.
10. **Qualité et maintenance** (§ 8), en continu.
11. **iPhone et version hors ligne** (§ 6), en dernier.

Financement (§ 3.6) : à part, à décider plus tard. Abonnement premium (§ 3.5) : mis de côté.
