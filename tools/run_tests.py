#!/usr/bin/env python3
"""Zodiaque & Décans — lanceur de tests (ordinateur ou GitHub Actions).

Vérifie, dans un navigateur piloté par Playwright (Chromium par défaut) :
  1. la suite intégrée (ZODIAC.html?test) dans 5 fuseaux horaires d'appareil ;
  2. la même suite dans la version autonome (ZODIAC-standalone.html), réseau coupé ;
  3. un parcours réel en français, arabe (droite à gauche) et japonais : résultat, thème natal, nuit, portrait, sans erreur ;
     articles « En savoir plus » au clavier depuis une bulle (i) et depuis l'Oracle ; changement d'heure le jour de naissance ;
     puis l'Oracle Oui / Non, animations actives : ouverture, réponse après la rotation, nouvelle question, fermeture ;
     l'audit d'accessibilité couvre aussi l'oracle ouvert et la fenêtre « Soutenir le projet » ;
  4. le site installable (dossier site/) servi comme sur GitHub Pages : installation, mise à jour qui ne retélécharge
     que le module modifié, puis fonctionnement réseau coupé ;
  5. (Chromium seulement) l'accessibilité : audit axe-core de l'accueil et des 5 onglets, en français et en arabe,
     thèmes sombre et clair ; la moindre anomalie fait échouer les tests.

Usage, dans le dossier du projet :
    pip install -r tools/requirements.txt && python -m playwright install chromium
    npm install --no-save --no-package-lock --prefix tools axe-core@4.10.2   # outil d'audit (facultatif hors GitHub)
    python build-standalone.py        # assemble la version autonome et site/
    python tools/run_tests.py                       # Chromium
    python tools/run_tests.py --browser webkit      # moteur de Safari (ou firefox) ; installer d'abord ce navigateur
Code de sortie : 0 si tout passe, 1 sinon.
"""
import asyncio
import functools
import http.server
import importlib.util
import os
import pathlib
import re
import shutil
import sys
import tempfile
import threading

from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
TIMEZONES = ['UTC', 'Europe/Paris', 'America/Los_Angeles', 'Pacific/Auckland', 'Asia/Kolkata']
BROWSERS = ('chromium', 'webkit', 'firefox')
BROWSER = sys.argv[sys.argv.index('--browser') + 1] if '--browser' in sys.argv[:-1] else 'chromium'
AXE = ROOT / 'tools' / 'node_modules' / 'axe-core' / 'axe.min.js'
PROFILE = '?date=1982-11-03&time=19:00&place=Paris%7CFR&lang='
problems = []


def report(ok, label):
    print(('  ✓ ' if ok else '  ✗ ') + label, flush=True)
    if not ok:
        problems.append(label)
        if os.environ.get('GITHUB_ACTIONS'):   # annotation : affichée sur la page du passage, lisible sans connexion
            print(f'::error title=Test en échec ({BROWSER})::' + label.replace('%', '%25').replace('\r', '%0D').replace('\n', '%0A'), flush=True)


async def offline(ctx):
    """Coupe tout accès réseau (seuls les fichiers locaux restent accessibles)."""
    async def guard(route):
        if route.request.url.startswith(('file:', 'blob:', 'data:')):
            await route.continue_()
        else:
            await route.abort()
    await ctx.route('**/*', guard)


async def suite(browser, file, cut_network):
    print(f'Suite de tests — {file.name}' + (' (réseau coupé)' if cut_network else ''))
    for tz in TIMEZONES:
        ctx = await browser.new_context(timezone_id=tz, reduced_motion='reduce')
        if cut_network:
            await offline(ctx)
        page = await ctx.new_page()
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        await page.goto(file.as_uri() + '?test')
        await page.wait_for_function('window.__testResults', timeout=120000)
        results = await page.evaluate('window.__testResults')
        await page.wait_for_function('window.__portraitTestResults', timeout=120000)
        results += await page.evaluate('window.__portraitTestResults')
        failed = [r['name'] + ' — ' + str(r.get('info', '')) for r in results if not r['ok']]
        report(not failed and not errors, f'{tz:20s} {len(results) - len(failed)}/{len(results)}' + (f' | {failed + errors}' if failed or errors else ''))
        await ctx.close()


async def journey(browser, file):
    print(f'Parcours réels — {file.name}')
    for lang in ('fr', 'ar', 'ja'):
        ctx = await browser.new_context(viewport={'width': 1280, 'height': 900}, reduced_motion='reduce', timezone_id='Europe/Paris')
        page = await ctx.new_page()
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        await page.goto(file.as_uri() + PROFILE + lang)
        await page.wait_for_selector('#tabNatal', timeout=60000)
        await page.click('#tabNatal')
        natal = await page.locator('.natal-main .big-three').count()
        night = await page.locator('#nightBody .night-grid').count()
        direction = await page.evaluate('document.documentElement.dir')
        ok = natal == 1 and night == 1 and not errors and (direction == 'rtl') == (lang == 'ar')
        report(ok, f'{lang} : thème natal, nuit, sens d\'écriture {direction}' + (f' | {errors}' if errors else ''))

        # Protection d'intégration réelle : ne se contente PAS d'appeler le module directement.
        # Si le branchement à renderNumbers/renderTarot est supprimé, GitHub Actions doit échouer.
        try:
            await page.locator('#tabNumbers').click(timeout=10000)
            portrait = page.locator('#numbersBody #portraitCard')
            await portrait.wait_for(state='visible', timeout=15000)
            sections = await portrait.locator('.portrait-section').count()
            preview = await portrait.locator('.portrait-preview').is_visible()
            toggle = portrait.locator('.portrait-toggle')
            await toggle.click(timeout=10000)
            opened = await portrait.locator('.portrait-detail').is_visible()
            await page.locator('#tabTarot').click(timeout=10000)   # le choix du jeu est dans l'onglet Tarot
            await page.locator('.tarot-deck .deck-btn[data-deck="ws"]').click(timeout=10000)
            selected = await page.locator('.tarot-deck .deck-btn[data-deck="ws"]').get_attribute('aria-pressed')
            await page.locator('#tabNumbers').click(timeout=10000)
            after_deck = await page.locator('#numbersBody #portraitCard').count() == 1
            visible_after = await page.locator('#numbersBody #portraitCard .portrait-detail').is_visible()
            report(sections == 6 and preview and opened and after_deck and selected == 'true' and visible_after and not errors,
                   f'{lang} : portrait présent, 6 rubriques, repli, changement de jeu' + (f' | {errors}' if errors else ''))
        except Exception as exc:
            report(False, f'{lang} : portrait absent ou non interactif — {str(exc)[:350]}')

        # Articles « En savoir plus » au clavier : bulle (i) → lien → panneau (focus gardé) → Échap → retour au bouton (i) ;
        # puis depuis l'Oracle : Échap ferme l'article seulement, l'Oracle reste ouvert
        try:
            await page.locator('#tabSigns').click(timeout=10000)
            info = page.locator('.info-btn[data-info="decan"]').first
            await info.focus()
            await page.keyboard.press('Enter')
            await page.wait_for_selector('#infoPop:not([hidden]) .info-pop-more:not([hidden])', timeout=5000)
            await page.keyboard.press('Tab')
            on_more = await page.evaluate("document.activeElement.classList.contains('info-more')")
            await page.keyboard.press('Enter')
            await page.wait_for_selector('#article:not(.hidden)', timeout=5000)
            title = await page.text_content('#articleTitle')
            expected = await page.evaluate(f"ARTICLES_I18N['{lang}'].articles.signs.title")
            sections = await page.locator('#article .article-section').count()
            tabs = []
            for _ in range(3):
                await page.keyboard.press('Tab')
                tabs.append(await page.evaluate('document.activeElement.id'))
            await page.keyboard.press('Escape')
            closed = await page.locator('#article.hidden').count() == 1
            back = await page.evaluate('document.activeElement.dataset.info')
            await page.locator('#tabTarot').click(timeout=10000)
            await page.locator('.oracle-teaser').click(timeout=10000)
            await page.locator('#oracleArticle').click(timeout=10000)
            await page.wait_for_selector('#article:not(.hidden)', timeout=5000)
            oracle_title = await page.text_content('#articleTitle') == await page.evaluate(f"ARTICLES_I18N['{lang}'].articles.oracle.title")
            await page.keyboard.press('Escape')
            oracle_kept = await page.locator('#article.hidden').count() == 1 and await page.locator('#oracle:not(.hidden)').count() == 1
            oracle_focus = await page.evaluate('document.activeElement.id') == 'oracleArticle'
            await page.locator('#oracleClose').click(timeout=10000)
            ok = (on_more and title == expected and sections == 5 and tabs == ['articleClose', 'articleDone', 'articleClose']
                  and closed and back == 'decan' and oracle_title and oracle_kept and oracle_focus and not errors)
            report(ok, f'{lang} : article « {title} » au clavier, focus gardé, Échap, retour au bouton (i), article de l\'Oracle'
                   + ('' if ok else f' | lien {on_more}, rubriques {sections}, tab {tabs}, fermé {closed}, retour {back}, oracle {oracle_title}/{oracle_kept}/{oracle_focus}')
                   + (f' | {errors}' if errors else ''))
        except Exception as exc:
            report(False, f'{lang} : articles « En savoir plus » absents ou non interactifs — {str(exc)[:350]}')

        # Carré de Pythagore : une case, une ligne, l'analyse complète
        try:
            await page.locator('#tabNumbers').click(timeout=10000)
            await page.wait_for_selector('#squareCard', timeout=10000)
            await page.locator('#squareCard .sq-cell[data-key="c4"]').click()
            cell_ok = await page.locator('#squareCard .sq-cell[data-key="c4"][aria-pressed="true"]').count() == 1
            await page.locator('#squareCard .sq-line[data-key="r147"]').click()
            line_ok = await page.locator('#squareCard .sq-line[data-key="r147"][aria-pressed="true"]').count() == 1
            await page.locator('#squareCard .square-toggle').click()
            items = await page.locator('#squareCard .sq-full-item').count()
            report(cell_ok and line_ok and items == 17 and not errors,
                   f'{lang} : carré de Pythagore, case et ligne choisies, 17 lectures' + (f' | {errors}' if errors else ''))
        except Exception as exc:
            report(False, f'{lang} : carré de Pythagore absent ou non interactif — {str(exc)[:350]}')

        # Onglet Tarot : question, mélange, trois cartes choisies au clavier, pose, retournement, tirage retrouvé après rechargement
        try:
            await page.locator('#tabTarot').click(timeout=10000)
            await page.click('.spread-choice[data-type="three"]')
            if await page.locator('.tarot-fan').count() == 0 and await page.locator('.spread-flip, .spread-done').count() == 0:
                await page.fill('#spreadQuestion', 'Que dois-je comprendre ?')
                await page.click('#spreadDraw')
                await page.wait_for_selector('.tarot-fan', timeout=10000)
                await page.focus('.fan-card[tabindex="0"]')
                for key in ('Enter', 'ArrowRight', 'Enter', 'ArrowRight', 'Enter'):
                    await page.keyboard.press(key)
                await page.click('#spreadPlace')
            while await page.locator('.spread-flip').count():
                await page.locator('.spread-flip').first.click()
            shown = await page.locator('.spread-slot .tarot-title').count()
            await page.reload()
            await page.wait_for_selector('#tabTarot', timeout=60000)
            await page.locator('#tabTarot').click()
            again = await page.locator('.spread-slot .tarot-title').count()
            report(shown == 3 and again == 3 and not errors,
                   f'{lang} : tarot, trois cartes choisies au clavier, posées, retournées, retrouvées après rechargement'
                   + (f' | {errors}' if errors else ''))
        except Exception as exc:
            report(False, f'{lang} : onglet Tarot absent ou non interactif — {str(exc)[:350]}')

        # Compatibilité approfondie, par le vrai formulaire : date de l'autre personne, « Comparer », dépli
        try:
            await page.locator('#tabCompat').click(timeout=10000)
            await page.fill('#pairDate', '1990-04-17')
            await page.fill('#pairTime', '08:30')
            await page.click('#pairBtn')
            await page.wait_for_selector('#pairBody .compat-tally', timeout=15000)
            tally = (await page.text_content('#pairBody .compat-tally')).replace('\n', ' ')
            await page.click('#pairBody .compat-toggle')
            axes = await page.locator('#pairBody .compat-axis').count()
            pills = await page.locator('#pairBody .compat-axis .tone-pill').count()
            advice = await page.locator('#pairBody .compat-advice li').count()
            report(axes == 9 and pills >= 7 and 1 <= advice <= 3 and '/9' in tally and not errors,
                   f'{lang} : compatibilité, 9 axes, bilan « …{tally.split("·")[-1].strip()} », {advice} conseil(s)' + (f' | {errors}' if errors else ''))
        except Exception as exc:
            report(False, f'{lang} : compatibilité absente ou non interactive — {str(exc)[:350]}')
        await ctx.close()


async def oracle_journey(browser, file):
    """Oracle Oui / Non depuis l'accueil, animations actives : la flèche tourne puis s'arrête sur une des 4 réponses."""
    ctx = await browser.new_context(viewport={'width': 1280, 'height': 900}, reduced_motion='no-preference', timezone_id='Europe/Paris')
    page = await ctx.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    try:
        await page.goto(file.as_uri() + '?lang=fr')
        await page.click('#oracleOpen')
        await page.wait_for_selector('#oracle:not(.hidden)', timeout=10000)
        answers = await page.evaluate("Object.values(I18N.fr.oracle.answers)")
        times, got = [], []
        for _ in range(2):   # deux questions de suite
            box = await page.locator('#oracleSpin').bounding_box()
            start = await page.evaluate('performance.now()')
            await page.mouse.click(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2)
            await page.wait_for_function("document.getElementById('oracleResult').textContent !== ''", timeout=15000)
            times.append((await page.evaluate('performance.now()') - start) / 1000)
            got.append(await page.text_content('#oracleResult'))
        await page.click('#oracleClose')
        closed = await page.locator('#oracle.hidden').count() == 1
        ok = all(2.5 < s < 8 for s in times) and all(g in answers for g in got) and closed and not errors
        report(ok, f'Oracle Oui / Non : réponses « {got[0]} » puis « {got[1]} » après {times[0]:.1f} s et {times[1]:.1f} s, fermeture'
               + (f' | {errors}' if errors else ''))
    except Exception as exc:
        report(False, 'Oracle Oui / Non : ' + (str(exc).strip().splitlines() or ['erreur inconnue'])[0][:300])
    await ctx.close()


async def dst_journey(browser, file):
    """Changement d'heure le jour de naissance (Paris) : heure vécue deux fois, choix au clavier, lien, retour ;
    heure qui n'a pas existé : message seul. En français, arabe et japonais."""
    print(f'Changement d\'heure — {file.name}')
    asc = "signFromLongitude(natalChart(parseISODate(currentDate), birthTime(), birthPlace(currentBirthPlace)).asc)"
    for lang in ('fr', 'ar', 'ja'):
        ctx = await browser.new_context(viewport={'width': 1280, 'height': 900}, reduced_motion='reduce', timezone_id='America/New_York')
        page = await ctx.new_page()
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        step = 'ouverture'
        try:
            await page.goto(file.as_uri() + f'?date=2026-10-25&time=02:30&place=Paris%7CFR&lang={lang}')
            await page.wait_for_selector('.dst-note input[name="dstFold"]', timeout=60000)
            first = (await page.evaluate(asc), await page.locator('input[name="dstFold"][value="0"]').is_checked())
            await page.locator('input[name="dstFold"][value="0"]').focus()
            step = 'choix au clavier'
            await page.keyboard.press('ArrowDown')   # flèches : choix suivant du groupe, dans tous les sens d'écriture
            await page.wait_for_function("location.hash.includes('fold=1')", timeout=10000)
            step = 'focus rendu au bouton choisi'
            await page.wait_for_function("document.activeElement && document.activeElement.name === 'dstFold'", timeout=5000)
            second = (await page.evaluate(asc), await page.evaluate('document.activeElement.value'))
            link = await page.evaluate('location.href')
            await page.goto('about:blank')
            step = 'lien rouvert'
            await page.goto(link)   # lien partagé : le choix est repris
            await page.wait_for_selector('.dst-note input[name="dstFold"]', timeout=60000)
            reopened = (await page.evaluate(asc), await page.locator('input[name="dstFold"][value="1"]').is_checked())
            step = 'heure sautée'
            await page.goto(file.as_uri() + f'?date=2026-03-29&time=02:30&place=Paris%7CFR&lang={lang}')
            await page.wait_for_selector('.dst-note', timeout=60000)
            gap = await page.locator('.dst-note input').count() == 0 and '{' not in await page.text_content('.dst-note')
            ok = first == ('leo', True) and second == ('virgo', '1') and reopened == ('virgo', True) and gap and not errors
            report(ok, f'{lang} : heure vécue deux fois → choix au clavier (ascendant Lion → Vierge), gardé dans le lien ; heure sautée signalée'
                   + ('' if ok else f' | {first} {second} {reopened} {gap}') + (f' | {errors}' if errors else ''))
        except Exception as exc:
            report(False, f'{lang} : changement d\'heure, étape « {step} » — {str(exc).splitlines()[0][:200]}')
        await ctx.close()


async def accessibility(browser, file):
    """Audit axe-core : accueil + 5 onglets, français et arabe, thèmes sombre et clair. Aucune anomalie tolérée."""
    print(f'Accessibilité (audit axe-core) — {file.name}')
    if not AXE.exists():
        if os.environ.get('CI'):
            report(False, 'axe-core absent : l\'étape « Installer l\'outil d\'audit » du circuit a échoué')
        else:
            print('  – audit ignoré : axe-core non installé (voir l\'usage en tête de ce fichier)')
        return
    script = AXE.read_text(encoding='utf-8')
    for lang in ('fr', 'ar'):
        for scheme in ('dark', 'light'):
            ctx = await browser.new_context(viewport={'width': 1280, 'height': 900}, reduced_motion='reduce',
                                            timezone_id='Europe/Paris', color_scheme=scheme)
            page = await ctx.new_page()
            errors, found = [], []
            page.on('pageerror', lambda e: errors.append(str(e)))
            await page.goto(file.as_uri() + PROFILE + lang)
            await page.wait_for_selector('#tabNumbers', timeout=60000)
            if scheme == 'light':   # l'appli est sombre par défaut : on passe au thème clair par son bouton ☀
                await page.click('#themeBtn')
                await page.wait_for_function("document.documentElement.dataset.theme === 'light'", timeout=5000)
                await page.wait_for_timeout(300)
            for tab in ('accueil', 'tabSigns', 'tabNatal', 'tabSky', 'tabCompat', 'tabNumbers', 'tabTarot'):
                if tab != 'accueil':
                    await page.click('#' + tab)
                    await page.wait_for_timeout(250)
                await page.add_script_tag(content=script)
                violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                    .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
                found += [f'{tab} : {v}' for v in violations]
            await page.click('#tabSigns')   # bulle (i) avec son lien « En savoir plus », puis l'article ouvert
            await page.click('.info-btn[data-info="decan"]')
            for stage in ('bulle', 'article'):
                if stage == 'article':
                    await page.click('#infoPop .info-more')
                    await page.wait_for_selector('#article:not(.hidden)', timeout=5000)
                await page.add_script_tag(content=script)
                violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                    .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
                found += [f'{stage} : {v}' for v in violations]
            await page.keyboard.press('Escape')
            await page.click('#tabNumbers')   # carré de Pythagore : une ligne choisie, analyse complète dépliée
            await page.click('#squareCard .sq-line[data-key="d159"]')
            await page.click('#squareCard .square-toggle')
            await page.add_script_tag(content=script)
            violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
            found += [f'carré : {v}' for v in violations]
            await page.click('#tabTarot')   # tarot : éventail ouvert, puis tirage d'une carte retourné
            await page.click('.spread-choice[data-type="one"]')
            await page.fill('#spreadQuestion', 'Que dois-je comprendre ?')
            await page.click('#spreadDraw')
            await page.wait_for_selector('.tarot-fan', timeout=10000)
            for stage in ('éventail', 'tirage retourné'):
                if stage == 'tirage retourné':
                    await page.locator('.fan-card').nth(3).click()
                    await page.click('#spreadPlace')
                    await page.locator('.spread-flip').first.click()
                await page.add_script_tag(content=script)
                violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                    .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
                found += [f'tarot, {stage} : {v}' for v in violations]
            await page.click('#tabCompat')   # compatibilité approfondie dépliée, avec une autre personne
            await page.evaluate("pairState = { name: '', date: '1990-04-17', time: '08:30', place: 'Lyon|FR' }; renderCompat();")
            await page.click('#pairBody .compat-toggle')
            await page.evaluate("document.querySelector('.compat-further').open = true")
            await page.add_script_tag(content=script)
            violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
            found += [f'compatibilité : {v}' for v in violations]
            await page.click('#tabTarot')   # l'Oracle ouvert depuis l'onglet Tarot (le bouton de l'accueil est masqué quand un profil est affiché)
            await page.click('.oracle-teaser')
            await page.add_script_tag(content=script)
            violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
            found += [f'oracle : {v}' for v in violations]
            await page.click('#oracleClose')
            # Message de changement d'heure avec son choix (heure vécue deux fois à Paris)
            await page.evaluate("""document.getElementById('birthDate').value = '2026-10-25';
                document.getElementById('birthTime').value = '02:30'; birthField.set('Paris|FR'); quickReveal = true; launchSearch();""")
            await page.wait_for_selector('.dst-note input[name="dstFold"]', timeout=10000)
            await page.add_script_tag(content=script)
            violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
            found += [f'changement d\'heure : {v}' for v in violations]
            # « Soutenir le projet » : caché tant qu'aucun lien n'est renseigné ; un lien d'essai le fait apparaître
            await page.evaluate("SUPPORT_LINKS[0].url = 'https://ko-fi.com/exemple'; refreshSupport()")
            await page.click('#supportOpen')
            await page.add_script_tag(content=script)
            violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
            found += [f'soutien : {v}' for v in violations]
            theme = 'sombre' if scheme == 'dark' else 'clair'
            report(not found and not errors, f'{lang}, thème {theme} : '
                   + (f'{len(found + errors)} anomalie(s) | {found + errors}' if found or errors else 'aucune anomalie'))
            await ctx.close()


def load_builder():
    """build-standalone.py chargé comme module : sert à publier une « version suivante » du site pendant le test."""
    spec = importlib.util.spec_from_file_location('build_standalone', ROOT / 'build-standalone.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


async def installable_site(browser):
    site = ROOT / 'site'
    if not (site / 'index.html').exists():
        report(False, 'site/ absent : lancer d\'abord python build-standalone.py')
        return
    print('Site installable (servi comme sur GitHub Pages, sous /zodiac/)')
    with tempfile.TemporaryDirectory() as tmp:
        served = pathlib.Path(tmp) / 'zodiac'
        shutil.copytree(site, served)
        log = []   # (adresse, code, octets envoyés) de chaque demande reçue par le serveur

        class Quiet(http.server.SimpleHTTPRequestHandler):
            def log_message(self, *args):   # pas de journal des requêtes dans la sortie des tests
                pass

            def send_response(self, code, message=None):
                self.code_sent = code
                super().send_response(code, message)

            def do_GET(self):
                super().do_GET()
                path = self.path.split('?')[0]
                file = pathlib.Path(tmp) / path.lstrip('/')
                if file.is_dir():
                    file = file / 'index.html'
                code = getattr(self, 'code_sent', 0)
                log.append((path, code, file.stat().st_size if code == 200 and file.exists() else 0))

        handler = functools.partial(Quiet, directory=tmp)
        server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        base = f'http://127.0.0.1:{server.server_address[1]}/zodiac/'
        try:
            ctx = await browser.new_context(reduced_motion='reduce')
            page = await ctx.new_page()
            errors = []
            page.on('pageerror', lambda e: errors.append(str(e)))
            await page.goto(base)
            await page.evaluate('navigator.serviceWorker.ready')
            await page.reload()
            controlled = await page.evaluate('!!navigator.serviceWorker.controller')
            first = sum(size for _, _, size in log)
            report(controlled, f'installation : le service worker garde l\'appli en mémoire ({first // 1024} Ko téléchargés)')

            # Version suivante : un seul module modifié (le texte français). La mise à jour ne doit télécharger
            # que la page, le service worker et ce module ; les autres restent en mémoire, l'ancien est effacé.
            builder = load_builder()
            app = next(served.glob('zodiac-app.*.js')).read_text(encoding='utf-8')
            stamp = re.search(r"const APP_VERSION = '([^']*)';", app).group(1)
            before = {p.name for p in served.iterdir()}
            fr = (ROOT / 'zodiac-i18n-fr.js').read_text(encoding='utf-8') + '\n/* essai de mise à jour */\n'
            nxt = builder.build_site(stamp, dest=served, override={'zodiac-i18n-fr.js': fr})
            changed = [a for a in nxt['assets'] if a not in before]
            log.clear()
            await page.evaluate('navigator.serviceWorker.getRegistration().then(r => r.update())')
            keys = []
            for _ in range(150):   # au plus 30 s : nouvelle version installée, ancienne effacée
                keys = await page.evaluate('caches.keys()')
                if f"zodiac-page-{nxt['version']}" in keys and sum(k.startswith('zodiac-page-') for k in keys) == 1:
                    break
                await page.wait_for_timeout(200)
            await page.reload()
            await page.wait_for_selector('#birthDate', timeout=60000)
            modules = [p.rsplit('/', 1)[-1] for p, code, _ in log if code == 200 and re.search(r'\.[0-9a-f]{10}\.(js|css)$', p)]
            update = sum(size for _, _, size in log)
            kept = await page.evaluate("caches.open('zodiac-files').then(c => c.keys()).then(k => k.map(r => r.url.split('/').pop()))")
            ok = (len(changed) == 1 and modules == changed and sorted(kept) == sorted(nxt['assets'])
                  and update < 400 * 1024 and f"zodiac-page-{nxt['version']}" in keys and not errors)
            report(ok, f'mise à jour : {len(modules)} module retéléchargé sur {len(nxt["assets"])} '
                       f'({update // 1024} Ko au lieu de {first // 1024} Ko), anciens modules effacés'
                   + ('' if ok else f' | modifiés {changed}, reçus {modules}, mémoire {len(kept)}, versions {keys}')
                   + (f' | {errors}' if errors else ''))

            # Coupure réseau, identique pour tous les navigateurs : le serveur s'arrête (connexion refusée).
            # Le mode « hors ligne » simulé de Playwright n'est ajouté que pour Chromium : dans WebKit,
            # il peut aussi bloquer le service worker, ce qu'un vrai Safari ne fait pas.
            server.shutdown()
            server.server_close()
            if BROWSER == 'chromium':
                await ctx.set_offline(True)
            await page.goto(base + '?date=1982-11-03&lang=fr')
            await page.wait_for_selector('.sign-name', timeout=60000)
            report(not errors, 'réseau coupé, après la mise à jour : l\'appli s\'ouvre et calcule' + (f' | {errors}' if errors else ''))
            await ctx.close()
        except Exception as exc:   # un échec est signalé comme les autres, sans interrompre le rapport
            report(False, 'site installable : ' + (str(exc).strip().splitlines() or ['erreur inconnue'])[0][:300])
        finally:
            server.shutdown()
            server.server_close()


async def main():
    async with async_playwright() as p:
        if BROWSER not in BROWSERS:
            report(False, f'navigateur inconnu : {BROWSER} (choix : {", ".join(BROWSERS)})')
            sys.exit(1)
        print(f'Navigateur : {BROWSER}')
        browser = await getattr(p, BROWSER).launch()
        await suite(browser, ROOT / 'ZODIAC.html', cut_network=False)
        standalone = ROOT / 'ZODIAC-standalone.html'
        if standalone.exists():
            await suite(browser, standalone, cut_network=True)
        else:
            report(False, 'ZODIAC-standalone.html absent : lancer d\'abord python build-standalone.py')
        await journey(browser, ROOT / 'ZODIAC.html')
        await oracle_journey(browser, ROOT / 'ZODIAC.html')
        await dst_journey(browser, ROOT / 'ZODIAC.html')
        if BROWSER == 'chromium':
            await accessibility(browser, ROOT / 'ZODIAC.html')
        await installable_site(browser)
        await browser.close()
    print('\n' + ('Tout passe.' if not problems else f'{len(problems)} problème(s) : ' + ' | '.join(problems)))
    sys.exit(1 if problems else 0)


if __name__ == '__main__':
    asyncio.run(main())
