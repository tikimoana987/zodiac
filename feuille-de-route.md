# 🗺️ Zodiaque & Décans — ce qu'il reste à faire

> État au 27 octobre 2026, après l'intégration des arcanes mineurs. Ce document complète `projet.md` (ce qui est fait) et `reprise.md` (notes techniques).
> Légende : 🟢 petit · 🟡 moyen · 🔴 gros chantier · ❓ décision à prendre · ⭐ recommandation de Claude

---

## 0. Où en est l'appli

| Domaine | État |
|---|---|
| Feuille de route d'origine (étapes 1 à 6) | ✅ terminée, sauf l'iPhone (gardé pour la fin) |
| Pistes 1 à 6 | ✅ version et bandeau de mise à jour · ✅ cartes renversées · ✅ lieux par coordonnées GPS · ✅ calendrier du ciel · ✅ fiche du thème natal à imprimer ou en PDF · ✅ arcanes mineurs (jeu complet de 78 cartes) |
| Langues | 14 (FR, EN, ES, PT, IT, DE, TR, RU, AR, HI, TH, ZH, JA, KO) |
| Tests automatiques | 93 (79 historiques + 14 nouveaux), dans 5 fuseaux horaires, plus la version autonome hors ligne et le site installable |
| Publication | automatique sur GitHub Pages, après les tests (circuit GitHub Actions) |
| Poids | version autonome ≈ 6,2 Mo, dont ≈ 3,1 Mo d'illustrations du tarot |
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
- [x] **Tests** : six cas du cahier, 36 décans, deux jeux, 14 langues, repli, export et frontières incertaines dans `zodiac-portrait-tests.js`.
- [x] **Documentation** : cahier V0.3 copié dans `docs/`, notes `reprise.md` et `projet.md` mises à jour.

---

## 3. 🟡 Frise annuelle des événements (en image)

Idée notée le 27 octobre : visualiser l'année du ciel sous forme d'une frise stylisée, belle à regarder et à partager.

- [ ] Contenu : les 12 mois en ligne ou en spirale, avec lunes, éclipses, rétrogradations (bandes colorées par planète), changements de signe du Soleil et transits personnels.
- [ ] Forme : ❓ image dans l'appli (avec export PNG comme les autres sections), ou affiche à imprimer en PDF (A4 ou A3 paysage).
- [ ] Accès : ❓ pour tous dans « Ciel du moment », ou réservée à la console d'administration.
- [ ] Données : déjà disponibles (module du calendrier, calcul d'un an en moins d'une seconde).
- [ ] Textes : quelques intitulés et une légende (environ 10 textes × 14 langues).

---

## 4. 🟡 Console d'administration locale (non publiée)

Idée notée le 27 octobre. Point clé : l'appli est publique et n'a pas de serveur, donc une section « admin » cachée dans le site ne serait jamais vraiment protégée. ⭐ D'où **une console à part, présente dans le dépôt mais exclue du site en ligne**, que tu ouvres sur ton ordinateur.

- [ ] **Export d'un calendrier de 12 mois** en .ics pour n'importe quel profil (Apple, Outlook ; Google en import sur ordinateur).
- [ ] **Dos de cartes** : choix par jeu, et ❓ selon les saisons ou les périodes de l'année (par exemple un dos par saison, ou pour les solstices et équinoxes).
- [ ] **Habillages de l'appli (skins)** : palettes, fonds, typographies ; aperçu en direct.
- [ ] **Fichier de réglages** (`zodiac-config.js`) produit par la console, à déposer sur GitHub comme une mise à jour ; le site en tient compte à la publication suivante.
- [ ] Éventuellement : génération de la frise annuelle (§ 3) pour un profil, aperçu des nouvelles cartes avant publication.
- [ ] Technique : la console réutilise les modules de l'appli ; `build-standalone.py` l'exclut du dossier `site/` ; ses propres tests.

---

## 5. 🔴 iPhone et version hors ligne (en dernier)

- [ ] **Bouton « Version hors ligne »** : il est grisé (« bientôt disponible ») ; ❓ décider s'il est réactivé, et pour quels appareils. Une seule ligne suffit : `OFFLINE_ENABLED = true` dans `zodiac-app.js`.
- [ ] **Appli installée sur iPhone** (« Sur l'écran d'accueil ») : vérifier le fonctionnement hors ligne, la conservation des données (Safari peut effacer les données d'un site non utilisé pendant plusieurs semaines ; c'est moins vrai pour une appli installée, à vérifier), le bandeau de mise à jour, les zones sûres (encoche, barre d'accueil).
- [ ] **Fichier autonome sur iPhone** : l'application Fichiers n'ouvre pas bien un fichier HTML local, d'où la question de l'intérêt du bouton sur iPhone.
- [ ] **Fonctions à vérifier dans Safari** (moteur WebKit) : export en image (html2canvas), impression ou PDF, calendrier .ics (« Ajouter tous les événements »), coordonnées GPS, tirage du jour, partage.
- [ ] **Tests WebKit dans le circuit GitHub** (Playwright sait piloter WebKit) : pour détecter les soucis propres à Safari avant publication. Même idée pour Firefox.
- [ ] Icône, écran de démarrage et nom sur l'écran d'accueil de l'iPhone.

---

## 6. 🟢 Améliorations notées en cours de route (à valider)

- [ ] **Numérologie** : « nombre actif » (prénom usuel) et « nombre héréditaire » (nom de famille), en plus des nombres actuels.
- [ ] **Tarot** : autres tirages (oui ou non, croix celtique…), si le tirage à trois cartes plaît.
- [ ] **Dos de cartes** : le n° 6 (rose des vents) reste en réserve, par exemple pour un troisième jeu ou une saison (§ 4).
- [ ] **Page d'aide ou foire aux questions** : installer l'appli, importer le calendrier, enregistrer en PDF, effacer ses données, confidentialité.
- [ ] **Turc** : les sens des 22 arcanes majeurs tutoient (sen), alors que l'interface et les arcanes mineurs vouvoient (siz) ; harmoniser au vouvoiement.
- [ ] **Relecture des traductions** par des personnes dont c'est la langue maternelle, en priorité arabe, hindi, thaï, chinois, japonais et coréen. Les textes ont été écrits avec soin, mais une relecture humaine reste préférable.
- [ ] **Performance sur les appareils modestes** : le flou et les étoiles animées du fond coûtent cher en dessin. Le mode « animations réduites » les coupe déjà ; ❓ envisager un allègement automatique sur les petits appareils.

---

## 7. 🟢 Qualité, maintenance, technique

- [ ] **Licence du projet** ❓ : le dépôt est public mais sans licence, ce qui veut dire « tous droits réservés » par défaut. À décider : garder ainsi, ou choisir une licence (MIT, CC BY-NC…). Les crédits des données sont déjà dans le README, y compris la mention des illustrations générées avec Gemini.
- [ ] **Versions à surveiller** dans le circuit GitHub : Ubuntu fixé à 24.04, Playwright 1.56, actions (checkout v7, setup-python v7, upload-pages-artifact v5, deploy-pages v5). À mettre à jour de temps en temps, quand GitHub prévient d'une fin de prise en charge.
- [ ] **Tests d'interface dans le circuit** : la plupart des parcours (rituel du tirage, calendrier, coordonnées GPS, impression, « Mon profil ») sont vérifiés par des scripts de Claude, hors du dépôt. ⭐ En intégrer quelques-uns au circuit GitHub.
- [ ] **Limites de validité** : calculs garantis de 1900 à 2100 (avertissement affiché au-delà) ; table des éclipses et base des villes GeoNames à rafraîchir un jour ; fuseaux horaires fournis par le navigateur.
- [ ] **Accessibilité** : audit complet (contrastes en thème clair, navigation au clavier dans toutes les sections, lecteurs d'écran sur la roue et les cartes).
- [ ] **Promesse de confidentialité** : à préserver à chaque nouvelle fonction (aucun appel réseau, aucune statistique, aucun pistage).

---

## 8. Décisions en attente (récapitulatif)

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

---

## 9. Ordre proposé

1. ✅ **Arcanes mineurs** (§ 1) ; reste les 9 illustrations à refaire avec Gemini (§ 1.1), quand il refonctionnera.
2. ✅ **Portrait symbolique** (§ 2) : rédaction des 14 langues, intégration et tests ; contrôle final de la publication après dépôt.
3. **Améliorations rapides** (§ 6) au fil de l'eau, selon tes envies.
4. **Frise annuelle** (§ 3) et **console d'administration** (§ 4), éventuellement ensemble, puisque la console peut produire la frise.
5. **Qualité et maintenance** (§ 7), en continu.
6. **iPhone et version hors ligne** (§ 5), en dernier.
