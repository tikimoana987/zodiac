#!/usr/bin/env node
/* Génération locale, déterministe et sans réseau des textes de la compatibilité approfondie
   à partir des JSON validés (data/compat/compat-xx.json). Exécution : node tools/regen_compat.js
   Toute clé manquante ou en trop arrête la génération. Cahier : docs/cahier-compatibilite.md */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const langs = ['fr','en','es','pt','it','de','tr','ru','ar','hi','th','zh','ja','ko'];
const D = ['d0','d1','d2','d3','d4','d5','d6'];
const AX = ['moon','venus','attraction','mercury','sun','mars','asc'];
const shape = {
  lang: 0,
  labels: { axes: ['moon','venus','attraction','mercury','sun','mars','asc','lifePath','chinese'],
    strength: 0, toBuild: 0, harmonies: 0, complements: 0, attentions: 0, analysed: 0, advice: 0, more: 0, less: 0, further: 0,
    signUncertain: 0, readingUncertain: 0, complete: 0, bothWays: 0, mention: 0 },
  tones: ['harmony','complement','attention'],
  relations: D,
  families: ['mind','matter','creation'],
  readings: Object.fromEntries(AX.map(a => [a, D])),
  chinese: ['harmony','triad','same','neutral','clash','harm','punishment','selfPunish'],
  lifePath: ['same','family','different'],
  advice: { ...Object.fromEntries(['moon','venus','attraction','mercury','sun','mars','asc','chinese'].map(a => [a, ['attention','complement']])),
    lifePath: ['complement'], harmony: 0, closing: 0 },
  preview: ['mostlyHarmony','mostlyComplement','balanced','mostlyToBuild','noResource'],
  info: ['compat','compatRelations','compatLifePath'],
  cnNames: ['clash','same','selfPunish']   // noms de relations chinoises renommés (évite « Opposition » et « Même signe »)
};
const fail = msg => { throw new Error(msg); };
function check(obj, sh, where){
  if (sh === 0) { if (typeof obj !== 'string' || !obj.trim()) fail(`${where} : texte vide ou absent`); if (/[{}]/.test(obj)) fail(`${where} : accolade interdite`); return 1; }
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) fail(`${where} : objet requis`);
  const keys = Array.isArray(sh) ? sh : Object.keys(sh);
  const got = Object.keys(obj);
  const missing = keys.filter(k => !got.includes(k)), extra = got.filter(k => !keys.includes(k));
  if (missing.length || extra.length) fail(`${where} : clés manquantes [${missing}] ou en trop [${extra}]`);
  return keys.reduce((n, k) => n + check(obj[k], Array.isArray(sh) ? 0 : sh[k], `${where}.${k}`), 0);
}
const all = {}, missing = [];
for (const lang of langs) {
  const file = path.join(root, 'data', 'compat', `compat-${lang}.json`);
  if (!fs.existsSync(file)) { missing.push(lang); continue; }
  const obj = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (obj.lang !== lang) fail(`${lang} : code langue`);
  const n = check(obj, shape, lang) - 1;   // sans le code langue
  all[lang] = obj;
  console.log(`${lang} : ${n} textes vérifiés`);
}
if (!all.fr) fail('fr : fichier de référence absent');
const data = JSON.stringify(all).replace(/</g, '\\u003c');
fs.writeFileSync(path.join(root, 'zodiac-compat-data.js'),
  '/* Généré par tools/regen_compat.js — NE PAS ÉDITER. Sources : data/compat/compat-xx.json. */\n' +
  'const COMPAT_I18N = Object.freeze(' + data + ');\n', 'utf8');
console.log(`zodiac-compat-data.js régénéré (${Object.keys(all).length} langue(s))` + (missing.length ? ` — en attente : ${missing.join(', ')}` : ''));
