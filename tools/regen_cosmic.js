#!/usr/bin/env node
/* Génération locale, déterministe et sans réseau de « Cosmic Daily » à partir des JSON validés
   (data/cosmic/cosmic-xx.json). Exécution : node tools/regen_cosmic.js
   Produit :
   - zodiac-cosmic-ui.js : libellés de l'onglet et texte de la bulle (i), 14 langues (toujours chargé, ~25 Ko) ;
   - zodiac-cosmic-xx.js : les textes d'une langue (« la Lune en… », phrases d'ambiance, Mercure, signes avec
     leurs 3 voix × 5 rubriques (8 variantes en Classique, 12 en Drôle et Piquant) et leurs 15 « Roast My Zodiac »,
     événements du ciel). Sur le site, ils ne
     sont chargés qu'à la demande, une langue à la fois (build-standalone.py) ; la version autonome les contient tous.
   Toute anomalie arrête la génération : structure différente du français, {moon} ou {shower} déplacé, accolade, chevron,
   apostrophe courbe (langues en alphabet latin), deux-points ou point final en thaï, marques « Cosmic Daily » et
   « Cosmic Roast » traduites. */
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
const read = l => JSON.parse(fs.readFileSync(path.join(root, 'data', 'cosmic', `cosmic-${l}.json`), 'utf8'));
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
    const moons = (v.match(/\{moon\}/g) || []).length;
    if (moons !== (frTexts.get(p).match(/\{moon\}/g) || []).length) fail(`${lang}${p} : {moon} déplacé`);
    if ((v.match(/\{shower\}/g) || []).length !== (frTexts.get(p).match(/\{shower\}/g) || []).length) fail(`${lang}${p} : {shower} déplacé`);
    if (/[{}<>]/.test(v.replace(/\{(moon|shower)\}/g, ''))) fail(`${lang}${p} : accolade ou chevron`);
    if (LATIN.includes(lang) && /[’]/.test(v)) fail(`${lang}${p} : apostrophe courbe`);
    if (lang === 'th' && (/[:：]/.test(v) || /\.$/.test(v))) fail(`${lang}${p} : deux-points ou point final en thaï`);
    n++;
  }
  if (d.ui.tab !== 'Cosmic Daily' || d.ui.rubrics.roast !== 'Cosmic Roast') fail(`${lang} : marques traduites`);
  ui[lang] = d.ui;
  const { moon, sky, mercury, signs, events } = d;
  const data = JSON.stringify({ moon, sky, mercury, signs, events }).replace(/</g, '\\u003c');
  fs.writeFileSync(path.join(root, `zodiac-cosmic-${lang}.js`),
    `/* Généré par tools/regen_cosmic.js — NE PAS ÉDITER. Source : data/cosmic/cosmic-${lang}.json. */\n` +
    `(window.COSMIC_I18N = window.COSMIC_I18N || {}).${lang} = Object.freeze(${data});\n`, 'utf8');
  console.log(`${lang} : ${n} textes vérifiés`);
}
fs.writeFileSync(path.join(root, 'zodiac-cosmic-ui.js'),
  '/* Généré par tools/regen_cosmic.js — NE PAS ÉDITER. Sources : data/cosmic/cosmic-xx.json (partie « ui »). */\n' +
  'const COSMIC_UI = Object.freeze(' + JSON.stringify(ui).replace(/</g, '\\u003c') + ');\n', 'utf8');
console.log('zodiac-cosmic-ui.js et 14 fichiers zodiac-cosmic-xx.js régénérés');
