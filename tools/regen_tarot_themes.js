#!/usr/bin/env node
/* Génération locale, déterministe et sans réseau du « tarot par thème » à partir des JSON validés
   (data/tarot-themes/tarot-themes-xx.json). Exécution : node tools/regen_tarot_themes.js
   Produit :
   - zodiac-tarot-themes-ui.js : noms des thèmes et libellés, 14 langues (toujours chargé, quelques Ko) ;
   - zodiac-tarot-themes-xx.js : les textes d'une langue (sens des 78 cartes par thème, phrases de position,
     combinaisons, synthèses). Sur le site, ils ne sont chargés qu'à la demande, une langue à la fois
     (build-standalone.py) ; la version autonome les contient tous.
   Toute anomalie arrête la génération : structure différente du français, repères ({card}, {month}, {a}, {b},
   {theme}) déplacés, accolade en trop, chevron, apostrophe courbe (langues en alphabet latin), deux-points ou point
   final en thaï. Cahier : docs/cahier-tarot.md */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const LANGS = ['fr','en','es','pt','it','de','tr','ru','ar','hi','th','zh','ja','ko'];
const LATIN = ['fr','en','es','pt','it','de','tr'];
const fail = msg => { throw new Error(msg); };
function shape(o){   // forme d'un objet : clés et longueurs de listes, sans les textes
  if (Array.isArray(o)) return `[${o.length}]`;
  if (o && typeof o === 'object') return '{' + Object.keys(o).map(k => k + ':' + shape(o[k])).join(',') + '}';
  return typeof o;
}
function* texts(o, p = ''){
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) yield* texts(o[i], `${p}[${i}]`);
  else if (o && typeof o === 'object') for (const k of Object.keys(o)) yield* texts(o[k], `${p}.${k}`);
  else yield [p, o];
}
const read = l => JSON.parse(fs.readFileSync(path.join(root, 'data', 'tarot-themes', `tarot-themes-${l}.json`), 'utf8'));
const fr = read('fr'), frShape = shape(fr), frTexts = new Map(texts(fr));
const ui = {};
for (const lang of LANGS) {
  const d = read(lang);
  if (d.lang !== lang) fail(`${lang} : code langue`);
  if (shape(d) !== frShape) fail(`${lang} : structure différente du français`);
  let n = 0;
  for (const [p, v] of texts(d)) {
    if (p === '.lang') continue;
    if (typeof v !== 'string' || !v.trim() || v !== v.trim()) fail(`${lang}${p} : texte vide ou espaces`);
    const marks = x => (x.match(/\{[a-z]+\}/g) || []).sort().join();
    if (marks(v) !== marks(frTexts.get(p))) fail(`${lang}${p} : repères déplacés`);
    if (/[{}<>]/.test(v.replace(/\{(card|month|a|b|theme)\}/g, ''))) fail(`${lang}${p} : accolade ou chevron`);
    if (LATIN.includes(lang) && /[’]/.test(v)) fail(`${lang}${p} : apostrophe courbe`);
    if (lang === 'th' && (/[:：]/.test(v) || /\.$/.test(v))) fail(`${lang}${p} : deux-points ou point final en thaï`);
    n++;
  }
  ui[lang] = d.ui;
  const { cards, positions, combos, synth } = d;
  const data = JSON.stringify({ cards, positions, combos, synth }).replace(/</g, '\\u003c');
  fs.writeFileSync(path.join(root, `zodiac-tarot-themes-${lang}.js`),
    `/* Généré par tools/regen_tarot_themes.js — NE PAS ÉDITER. Source : data/tarot-themes/tarot-themes-${lang}.json. */\n` +
    `(window.TAROT_THEMES_I18N = window.TAROT_THEMES_I18N || {}).${lang} = Object.freeze(${data});\n`, 'utf8');
  console.log(`${lang} : ${n} textes vérifiés`);
}
fs.writeFileSync(path.join(root, 'zodiac-tarot-themes-ui.js'),
  '/* Généré par tools/regen_tarot_themes.js — NE PAS ÉDITER. Sources : data/tarot-themes/tarot-themes-xx.json (partie « ui »). */\n' +
  'const TAROT_THEMES_UI = Object.freeze(' + JSON.stringify(ui).replace(/</g, '\\u003c') + ');\n', 'utf8');
console.log(`zodiac-tarot-themes-ui.js et ${Object.keys(ui).length} fichier(s) zodiac-tarot-themes-xx.js régénérés`);
