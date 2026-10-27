# 🗺️ Zodiaque & Décans — ce qu'il reste à faire

> État au 27 octobre 2026. Ce document complète `projet.md` (ce qui est fait) et `reprise.md` (notes techniques).
> Légende : 🟢 petit · 🟡 moyen · 🔴 gros chantier · ❓ décision à prendre · ⭐ recommandation de Claude

---

## 0. Où en est l'appli

| Domaine | État |
|---|---|
| Feuille de route d'origine (étapes 1 à 6) | ✅ terminée, sauf l'iPhone (gardé pour la fin) |
| Pistes 1 à 5 | ✅ version et bandeau de mise à jour · ✅ cartes renversées · ✅ lieux par coordonnées GPS · ✅ calendrier du ciel · ✅ fiche du thème natal à imprimer ou en PDF |
| Langues | 14 (FR, EN, ES, PT, IT, DE, TR, RU, AR, HI, TH, ZH, JA, KO) |
| Tests automatiques | 77, dans 5 fuseaux horaires, plus la version autonome hors ligne et le site installable |
| Publication | automatique sur GitHub Pages, après les tests (circuit GitHub Actions) |
| Poids | version autonome ≈ 3,8 Mo, dont ≈ 1 Mo d'illustrations du tarot |
| Confidentialité | aucune donnée envoyée en ligne (adresse en « # », pas de serveur, pas de statistiques) ; seule exception : les événements ajoutés à Google Agenda à la demande de l'utilisateur |

---

## 1. 🔴 Les 56 arcanes mineurs (prochain chantier)

Aujourd'hui, l'appli n'utilise que les 22 arcanes majeurs. Les arcanes mineurs comptent 4 couleurs de 14 cartes : As à 10, puis 4 figures.

### 1.1 Décisions (✅ prises le 27 octobre 2026 : tirage du jour en option « jeu complet », un jeu scénique commun avec deux habillages, chargement au démarrage, cartes renversées)

> **Organisation** : textes rédigés par ChatGPT selon `docs/cahier-arcanes-mineurs.md`, illustrations par Gemini avec `docs/prompts-gemini-arcanes-mineurs.md`, intégration par Claude dans une nouvelle conversation (`docs/prompt-reprise.md`).


- [ ] **Où les utiliser ?**
  - ⭐ dans le **tirage du jour**, en option : « Jeu complet (78 cartes) » ou « Arcanes majeurs seuls », les majeurs restant le choix par défaut ;
  - la **carte de naissance** reste un arcane majeur, car son calcul (réduction à 22) ne concerne que les majeurs ;
  - la **carte du jour** : majeurs seuls ⭐, ou jeu complet.
- [ ] **Les noms selon le jeu** :
  - couleurs : Marseille *Bâtons, Coupes, Épées, Deniers* ; Waite-Smith *Bâtons, Coupes, Épées, Pentacles* (ou Deniers) ;
  - figures : Marseille *Valet, Cavalier, Reine, Roi* ; Waite-Smith *Page, Chevalier, Reine, Roi*.
- [ ] **Les illustrations**, la vraie différence entre les deux jeux :
  - Marseille : les cartes numérotées ne montrent traditionnellement que les symboles alignés (sept coupes, par exemple) ;
  - Waite-Smith : une scène illustrée pour chaque carte ;
  - ⭐ proposition : **un seul jeu de 56 illustrations scéniques** dans notre style gravure céleste, avec les deux habillages actuels (cadre et bandeaux). C'est simple et homogène. Variante plus fidèle mais deux fois plus lourde : 40 cartes « à symboles » pour Marseille en plus des scènes.
- [ ] **Les cartes renversées** pour les mineurs : ⭐ oui, comme pour les majeurs, puisque l'option existe déjà.

### 1.2 Travail à prévoir

- [ ] **Illustrations (Gemini)** : 10 planches de 6 cartes (56 cartes + 4 cases libres, à utiliser pour d'éventuelles retouches), avec les mêmes consignes de style et la planche 1 jointe comme modèle. Ensuite découpe, contrôle (aucun texte, aucun chiffre), retouches et conversion WebP.
- [ ] **Poids** : environ +1,9 Mo, ce qui porterait la version autonome vers 5,7 Mo. ❓ Option : ne charger les mineurs qu'au premier tirage complet. C'est plus léger au démarrage, mais il faut alors veiller au fonctionnement hors ligne.
- [ ] **Textes**, pour chacune des 56 cartes : nom (selon le jeu), 3 mots-clés et une explication à l'endroit, puis 3 mots-clés et une explication renversée, le tout dans les 14 langues. C'est le plus gros volume de textes du projet : environ 9 000 textes, à écrire par lots.
- [ ] **Logique** : numérotation et noms par jeu, tirage dans 78 cartes (hasard du navigateur, sans répétition), anciens tirages relus correctement.
- [ ] **Affichage** : gabarit de carte (numéro ou figure en haut, nom en bas), mention de la couleur, bulle (i) sur les couleurs (Bâtons : feu, action ; Coupes : eau, émotions ; Épées : air, pensée ; Deniers : terre, matière).
- [ ] **Tests** : 78 cartes présentes, noms et textes dans les 14 langues, tirage dans le jeu complet, cartes renversées.

### 1.3 Découpage proposé en livraisons

1. **6c-1** : décisions, puis prompts Gemini des 10 planches ; tu génères les planches au fur et à mesure.
2. **6c-2** : découpe, contrôle, retouches, intégration des images.
3. **6c-3** : textes à l'endroit (14 langues, par lots) et logique du jeu complet.
4. **6c-4** : textes renversés, tests, documentation, livraison.

---

## 2. 🟡 Frise annuelle des événements (en image)

Idée notée le 27 octobre : visualiser l'année du ciel sous forme d'une frise stylisée, belle à regarder et à partager.

- [ ] Contenu : les 12 mois en ligne ou en spirale, avec lunes, éclipses, rétrogradations (bandes colorées par planète), changements de signe du Soleil et transits personnels.
- [ ] Forme : ❓ image dans l'appli (avec export PNG comme les autres sections), ou affiche à imprimer en PDF (A4 ou A3 paysage).
- [ ] Accès : ❓ pour tous dans « Ciel du moment », ou réservée à la console d'administration.
- [ ] Données : déjà disponibles (module du calendrier, calcul d'un an en moins d'une seconde).
- [ ] Textes : quelques intitulés et une légende (environ 10 textes × 14 langues).

---

## 3. 🟡 Console d'administration locale (non publiée)

Idée notée le 27 octobre. Point clé : l'appli est publique et n'a pas de serveur, donc une section « admin » cachée dans le site ne serait jamais vraiment protégée. ⭐ D'où **une console à part, présente dans le dépôt mais exclue du site en ligne**, que tu ouvres sur ton ordinateur.

- [ ] **Export d'un calendrier de 12 mois** en .ics pour n'importe quel profil (Apple, Outlook ; Google en import sur ordinateur).
- [ ] **Dos de cartes** : choix par jeu, et ❓ selon les saisons ou les périodes de l'année (par exemple un dos par saison, ou pour les solstices et équinoxes).
- [ ] **Habillages de l'appli (skins)** : palettes, fonds, typographies ; aperçu en direct.
- [ ] **Fichier de réglages** (`zodiac-config.js`) produit par la console, à déposer sur GitHub comme une mise à jour ; le site en tient compte à la publication suivante.
- [ ] Éventuellement : génération de la frise annuelle (§ 2) pour un profil, aperçu des nouvelles cartes avant publication.
- [ ] Technique : la console réutilise les modules de l'appli ; `build-standalone.py` l'exclut du dossier `site/` ; ses propres tests.

---

## 4. 🔴 iPhone et version hors ligne (en dernier)

- [ ] **Bouton « Version hors ligne »** : il est grisé (« bientôt disponible ») ; ❓ décider s'il est réactivé, et pour quels appareils. Une seule ligne suffit : `OFFLINE_ENABLED = true` dans `zodiac-app.js`.
- [ ] **Appli installée sur iPhone** (« Sur l'écran d'accueil ») : vérifier le fonctionnement hors ligne, la conservation des données (Safari peut effacer les données d'un site non utilisé pendant plusieurs semaines ; c'est moins vrai pour une appli installée, à vérifier), le bandeau de mise à jour, les zones sûres (encoche, barre d'accueil).
- [ ] **Fichier autonome sur iPhone** : l'application Fichiers n'ouvre pas bien un fichier HTML local, d'où la question de l'intérêt du bouton sur iPhone.
- [ ] **Fonctions à vérifier dans Safari** (moteur WebKit) : export en image (html2canvas), impression ou PDF, calendrier .ics (« Ajouter tous les événements »), coordonnées GPS, tirage du jour, partage.
- [ ] **Tests WebKit dans le circuit GitHub** (Playwright sait piloter WebKit) : pour détecter les soucis propres à Safari avant publication. Même idée pour Firefox.
- [ ] Icône, écran de démarrage et nom sur l'écran d'accueil de l'iPhone.

---

## 5. 🟢 Améliorations notées en cours de route (à valider)

- [ ] **Numérologie** : « nombre actif » (prénom usuel) et « nombre héréditaire » (nom de famille), en plus des nombres actuels.
- [ ] **Tarot** : autres tirages (oui ou non, croix celtique…), si le tirage à trois cartes plaît.
- [ ] **Dos de cartes** : le n° 6 (rose des vents) reste en réserve, par exemple pour un troisième jeu ou une saison (§ 3).
- [ ] **Page d'aide ou foire aux questions** : installer l'appli, importer le calendrier, enregistrer en PDF, effacer ses données, confidentialité.
- [ ] **Relecture des traductions** par des personnes dont c'est la langue maternelle, en priorité arabe, hindi, thaï, chinois, japonais et coréen. Les textes ont été écrits avec soin, mais une relecture humaine reste préférable.
- [ ] **Performance sur les appareils modestes** : le flou et les étoiles animées du fond coûtent cher en dessin. Le mode « animations réduites » les coupe déjà ; ❓ envisager un allègement automatique sur les petits appareils.

---

## 6. 🟢 Qualité, maintenance, technique

- [ ] **Licence du projet** ❓ : le dépôt est public mais sans licence, ce qui veut dire « tous droits réservés » par défaut. À décider : garder ainsi, ou choisir une licence (MIT, CC BY-NC…). Les crédits des données sont déjà dans le README, y compris la mention des illustrations générées avec Gemini.
- [ ] **Versions à surveiller** dans le circuit GitHub : Ubuntu fixé à 24.04, Playwright 1.56, actions (checkout v7, setup-python v7, upload-pages-artifact v5, deploy-pages v5). À mettre à jour de temps en temps, quand GitHub prévient d'une fin de prise en charge.
- [ ] **Tests d'interface dans le circuit** : la plupart des parcours (rituel du tirage, calendrier, coordonnées GPS, impression, « Mon profil ») sont vérifiés par des scripts de Claude, hors du dépôt. ⭐ En intégrer quelques-uns au circuit GitHub.
- [ ] **Limites de validité** : calculs garantis de 1900 à 2100 (avertissement affiché au-delà) ; table des éclipses et base des villes GeoNames à rafraîchir un jour ; fuseaux horaires fournis par le navigateur.
- [ ] **Accessibilité** : audit complet (contrastes en thème clair, navigation au clavier dans toutes les sections, lecteurs d'écran sur la roue et les cartes).
- [ ] **Promesse de confidentialité** : à préserver à chaque nouvelle fonction (aucun appel réseau, aucune statistique, aucun pistage).

---

## 7. Décisions en attente (récapitulatif)

| # | Sujet | Options | ⭐ Recommandation |
|---|---|---|---|
| 1 | Arcanes mineurs : où ? | tirage du jour seul · aussi la carte du jour | tirage du jour, en option « jeu complet » |
| 2 | Arcanes mineurs : illustrations | un jeu scénique commun · scènes + symboles Marseille | un jeu scénique commun, deux habillages |
| 3 | Arcanes mineurs : chargement | tout au démarrage · au premier tirage complet | tout au démarrage (plus simple hors ligne) |
| 4 | Frise annuelle | pour tous · dans la console d'administration | à décider après les mineurs |
| 5 | Console d'administration | périmètre exact | export 12 mois, dos de cartes, habillages, fichier de réglages |
| 6 | Version hors ligne | réactiver · laisser grisé | à trancher avec l'étape iPhone |
| 7 | Licence du dépôt | aucune · MIT · CC BY-NC | à discuter |

---

## 8. Ordre proposé

1. **Arcanes mineurs** (§ 1), en quatre livraisons.
2. **Améliorations rapides** (§ 5) au fil de l'eau, selon tes envies.
3. **Frise annuelle** (§ 2) et **console d'administration** (§ 3), éventuellement ensemble, puisque la console peut produire la frise.
4. **Qualité et maintenance** (§ 6), en continu.
5. **iPhone et version hors ligne** (§ 4), en dernier.
