#!/usr/bin/env python3
"""Zodiaque & Décans — lanceur de tests (ordinateur ou GitHub Actions).

Vérifie, dans un navigateur piloté par Playwright (Chromium par défaut) :
  1. la suite intégrée (ZODIAC.html?test) dans 5 fuseaux horaires d'appareil ;
  2. la même suite dans la version autonome (ZODIAC-standalone.html), réseau coupé ;
  3. un parcours réel en français, arabe (droite à gauche) et japonais : résultat, thème natal, nuit, portrait, sans erreur ;
  4. le site installable (dossier site/) servi comme sur GitHub Pages : installation, puis fonctionnement réseau coupé ;
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
import os
import pathlib
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
            await page.locator('.tarot-deck .deck-btn[data-deck="ws"]').click(timeout=10000)
            after_deck = await page.locator('#numbersBody #portraitCard').count() == 1
            selected = await page.locator('.tarot-deck .deck-btn[data-deck="ws"]').get_attribute('aria-pressed')
            visible_after = await page.locator('#numbersBody #portraitCard .portrait-detail').is_visible()
            report(sections == 6 and preview and opened and after_deck and selected == 'true' and visible_after and not errors,
                   f'{lang} : portrait présent, 6 rubriques, repli, changement de jeu' + (f' | {errors}' if errors else ''))
        except Exception as exc:
            report(False, f'{lang} : portrait absent ou non interactif — {str(exc)[:350]}')
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
            for tab in ('accueil', 'tabSigns', 'tabNatal', 'tabSky', 'tabCompat', 'tabNumbers'):
                if tab != 'accueil':
                    await page.click('#' + tab)
                    await page.wait_for_timeout(250)
                await page.add_script_tag(content=script)
                violations = await page.evaluate("""async () => (await axe.run(document, { resultTypes: ['violations'] }))
                    .violations.map(v => v.id + ' (' + v.impact + ') : ' + v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(', '))""")
                found += [f'{tab} : {v}' for v in violations]
            theme = 'sombre' if scheme == 'dark' else 'clair'
            report(not found and not errors, f'{lang}, thème {theme} : '
                   + (f'{len(found + errors)} anomalie(s) | {found + errors}' if found or errors else 'aucune anomalie'))
            await ctx.close()


async def installable_site(browser):
    site = ROOT / 'site'
    if not (site / 'index.html').exists():
        report(False, 'site/ absent : lancer d\'abord python build-standalone.py')
        return
    print('Site installable (servi comme sur GitHub Pages, sous /zodiac/)')
    with tempfile.TemporaryDirectory() as tmp:
        shutil.copytree(site, pathlib.Path(tmp) / 'zodiac')
        class Quiet(http.server.SimpleHTTPRequestHandler):
            def log_message(self, *args):   # pas de journal des requêtes dans la sortie des tests
                pass
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
            report(controlled, 'installation : le service worker garde l\'appli en mémoire')
            await ctx.set_offline(True)
            await page.goto(base + '?date=1982-11-03&lang=fr')
            await page.wait_for_selector('.sign-name', timeout=60000)
            report(not errors, 'réseau coupé : l\'appli s\'ouvre et calcule' + (f' | {errors}' if errors else ''))
            await ctx.close()
        finally:
            server.shutdown()


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
        if BROWSER == 'chromium':
            await accessibility(browser, ROOT / 'ZODIAC.html')
        await installable_site(browser)
        await browser.close()
    print('\n' + ('Tout passe.' if not problems else f'{len(problems)} problème(s) : ' + ' | '.join(problems)))
    sys.exit(1 if problems else 0)


if __name__ == '__main__':
    asyncio.run(main())
