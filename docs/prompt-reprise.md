Bonjour Claude. Je reprends le projet ASTRO (appli web « Zodiaque & Décans ») dans une nouvelle conversation, pour économiser mon forfait.

CONTEXTE
- Dépôt GitHub public : tikimoana987/zodiac (branche main). Site : https://tikimoana987.github.io/zodiac/ — publié automatiquement par GitHub Actions après les tests.
- Commence par télécharger le dépôt (https://codeload.github.com/tikimoana987/zodiac/zip/refs/heads/main) dans ton espace de travail, puis lis dans cet ordre : reprise.md (notes techniques et conventions), projet.md (ce qui est fait), feuille-de-route.md (ce qui reste), docs/cahier-arcanes-mineurs.md et docs/prompts-gemini-arcanes-mineurs.md.
- N'ouvre ensuite que les fichiers utiles à la tâche (le code est volumineux).

TÂCHE : intégrer les 56 arcanes mineurs (décisions déjà prises : cahier, § 1).
Je te fournis les 14 fichiers minors-xx.json écrits par ChatGPT et les 10 planches d'illustrations générées par Gemini.
1. Vérifie les 14 JSON avec la liste de contrôle du cahier (§ 7) et dis-moi précisément ce qui ne va pas, avant toute intégration.
2. Découpe les planches avec tools/cut_sheets.py, contrôle chaque carte (aucun texte, nombre d'objets) et convertis-les en WebP 320 × 512 comme dans zodiac-tarot-art.js (nouveau fichier zodiac-tarot-minors-art.js, chargé juste après, tout au démarrage).
3. Intègre : textes avec tools/regen_i18n.js (ne jamais modifier les fichiers de langue à la main) ; jeu de 78 cartes dans zodiac-tarot.js (noms selon le jeu Marseille / Waite-Smith, cartes renversées) ; option « Jeu complet (78 cartes) » dans le tirage du jour, désactivée par défaut et retenue sur l'appareil ; bulle (i) ; tests dans zodiac-tests.js ; documentation (projet.md, reprise.md, feuille-de-route.md).
4. Lance les tests : python3 build-standalone.py puis python3 tools/run_tests.py — tout doit passer dans les 5 fuseaux horaires.

MES RÈGLES DE TRAVAIL
- Réponds en français, avec des explications simples : je ne suis pas développeur.
- Ne commence rien sans ma validation : propose, puis attends mon accord.
- Une seule manipulation à la fois. Je dépose les mises à jour sur GitHub avec « Add file › Upload files » puis « Commit changes ».
- Livraison : un mise-a-jour.zip contenant uniquement les fichiers modifiés par rapport à GitHub (compare avec raw.githubusercontent.com), en gardant les dossiers (tools/, docs/) ; dis-moi exactement quoi glisser.
- Promesse de confidentialité à respecter : aucune donnée de l'utilisateur envoyée en ligne.
