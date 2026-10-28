#!/usr/bin/env node
/* Génération locale, déterministe et sans réseau des 14 portraits à partir des JSON approuvés.
   Exécution : node tools/regen_portraits.js  (depuis la racine du dépôt). */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const langs = ['fr','en','es','pt','it','de','tr','ru','ar','hi','th','zh','ja','ko'];
const arcana = 'fool magician priestess empress emperor hierophant lovers chariot strength hermit wheel justice hangedman death temperance devil tower star moon sun judgement world'.split(' ');
const lifeKeys = 'magician priestess empress emperor hierophant lovers chariot strength justice hermit fool'.split(' ');
const sections = 'arcana energy strengths challenges sky thread'.split(' ');
const assert = (ok, msg) => { if (!ok) throw Error(msg); };
const sameKeys = (obj, keys, label) => {
  assert(obj && typeof obj === 'object' && !Array.isArray(obj), label + ' : objet requis');
  assert(JSON.stringify(Object.keys(obj).sort()) === JSON.stringify([...keys].sort()), label + ' : clés invalides');
};
const all = {};
for (const lang of langs) {
  const file = path.join(root, 'data', 'portraits', `portrait-${lang}.json`);
  const obj = JSON.parse(fs.readFileSync(file, 'utf8'));
  assert(obj.lang === lang, `${lang} : code langue`);
  sameKeys(obj, ['lang','labels','phrases','arcana','lifePath','info'],lang);
  sameKeys(obj.arcana,arcana,lang+'.arcana');
  sameKeys(obj.lifePath,lifeKeys,lang+'.lifePath');
  sameKeys(obj.phrases,['convergence','master','skyIntro'],lang+'.phrases');
  sameKeys(obj.info,['portrait','portraitDecan'],lang+'.info');
  sameKeys(obj.labels,['title','more','less','sections','birthCard','lifePathArcana','sign','planet','decan','uncertain'],lang+'.labels');
  sameKeys(obj.labels.sections,sections,lang+'.labels.sections');
  for (const [k,v] of Object.entries(obj.arcana)) sameKeys(v,['essence'],lang+'.'+k);
  for (const [k,v] of Object.entries(obj.lifePath)) sameKeys(v,['energy','strengths','challenges','lesson','thread'],lang+'.'+k);
  for (const key of ['master','convergence','skyIntro']) assert(typeof obj.phrases[key] === 'string' && obj.phrases[key].trim(),lang+'.'+key);
  assert(obj.phrases.master.includes('{n}'),lang+'.master {n}');
  // Noms propres et traductions restent exactement ceux des sources validées.
  all[lang] = obj;
}
const data = JSON.stringify(all).replace(/</g, '\\u003c');
fs.writeFileSync(path.join(root,'zodiac-portrait-data.js'),
  '/* Généré par tools/regen_portraits.js — NE PAS ÉDITER. Sources : data/portraits/portrait-xx.json. */\n' +
  'const PORTRAIT_I18N = Object.freeze(' + data + ');\n','utf8');
console.log(`${langs.length} langues vérifiées — zodiac-portrait-data.js régénéré (${Buffer.byteLength(data)} octets)`);
