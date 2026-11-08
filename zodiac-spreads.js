/* ============================================================
   Zodiaque & Décans — Onglet Tarot : tirages (cahier docs/cahier-tarot.md, V0.2)
   Quatre tirages interactifs : une question · une carte, Passé · Présent · Avenir, Situation · Défi · Conseil,
   les six prochains mois. Geste : mélanger, choisir face cachée dans l'éventail, poser, retourner.
   Sauvegarde sur l'appareil seulement (zodiac_spreads) : { <date de naissance> : { <type> : { period, draft?, reading? } } }.
   Un tirage par jour et par type (minuit, heure de l'appareil), un par mois civil pour les six mois ; expirés effacés.
   Dépend de zodiac-tarot.js (clés, cartes, secureRandom) et, à l'exécution, de zodiac-app.js (store, I18N, réglages).
   ============================================================ */
const SPREAD_TYPES = ['one', 'three', 'sca', 'six'];
const SPREAD_SIZE = { one: 1, three: 3, sca: 3, six: 6 };
const SPREAD_ASKS = { one: true, three: true, sca: true, six: false };   // question demandée
const SPREADS_KEY = 'zodiac_spreads';
let spreadType = 'three';     // tirage affiché dans l'onglet
let spreadDraft = '';         // question en cours de saisie (gardée si l'affichage est refait)
let spreadJustFlipped = -1;   // carte qui vient d'être retournée (animation)
let spreadShuffling = false;  // animation de mélange en cours
let fanFocus = 0;             // carte de l'éventail qui a le focus (un seul arrêt de la touche Tab)
/* Tarot par thème (V10.11) : thème choisi avant le tirage, gardé avec la lecture ; « general » = question libre */
const SPREAD_THEMES = ['general', 'love', 'work', 'self'];
let spreadTheme = null;      // lu sur l'appareil au premier affichage (ce fichier est chargé avant zodiac-app.js)
function chosenTheme(){
  if (spreadTheme === null) spreadTheme = SPREAD_THEMES.includes(store.get('zodiac_spread_theme')) ? store.get('zodiac_spread_theme') : 'general';
  return spreadTheme;
}
const themeOf = x => SPREAD_THEMES.includes(x) ? x : 'general';

/* Période d'un tirage : le jour (AAAA-MM-JJ) ou, pour les six mois, le mois civil (AAAA-MM) */
function spreadPeriod(type, dayISO){ return type === 'six' ? dayISO.slice(0, 7) : dayISO; }
/* Mélange de Fisher-Yates : chaque ordre a la même chance */
function shuffleKeys(keys, rnd = secureRandom){
  const a = keys.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
/* Les six mois d'un tirage (AAAA-MM), à partir du mois de sa période */
function sixMonths(period){
  const y = +period.slice(0, 4), m = +period.slice(5, 7);
  return Array.from({ length: 6 }, (_, i) => { const d = new Date(y, m - 1 + i, 1); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; });
}
function monthLabel(ym, lang){
  return new Intl.DateTimeFormat(loc(lang), { month: 'long', year: 'numeric' }).format(new Date(+ym.slice(0, 4), +ym.slice(5, 7) - 1, 1));
}
/* Textes des tirages (repli sur le français tant qu'une langue n'est pas traduite) */
function spreadTexts(t){ return t.tarot.spreads ? t.tarot : I18N.fr.tarot; }

/* ---------- Sauvegarde ---------- */
function validCards(list, n){ return Array.isArray(list) && list.length === n && list.every(k => TAROT_ALL_KEYS.includes(k)) && new Set(list).size === n; }
function loadSpreads(){
  let all = {};
  try { all = JSON.parse(store.get(SPREADS_KEY) || '{}') || {}; } catch (e) { all = {}; }
  let changed = false;
  // Tirage de l'ancienne version (zodiac_spread, trois cartes) : repris s'il est d'aujourd'hui, puis la clé est retirée
  const old = store.get('zodiac_spread');
  if (old !== null) {
    try {
      const s = JSON.parse(old);
      if (s && typeof s.birth === 'string' && typeof s.day === 'string') {
        (all[s.birth] = all[s.birth] || {}).three = { period: s.day, reading: {
          cards: s.cards, question: typeof s.question === 'string' ? s.question : '',
          revealed: Array.isArray(s.revealed) && s.revealed.length === 3 ? s.revealed.map(Boolean) : [true, true, true],   // ancienne version : affiché retourné
          reversed: Array.isArray(s.reversed) && s.reversed.length === 3 ? s.reversed.map(Boolean) : [false, false, false] } };
      }
    } catch (e) {}
    store.remove('zodiac_spread'); changed = true;
  }
  // Nettoyage : les tirages expirés (et leur question) sont effacés de l'appareil
  const today = todayISO();
  for (const birth of Object.keys(all)) {
    for (const type of Object.keys(all[birth] || {})) {
      if (!SPREAD_TYPES.includes(type) || !all[birth][type] || all[birth][type].period !== spreadPeriod(type, today)) { delete all[birth][type]; changed = true; }
    }
    if (!Object.keys(all[birth] || {}).length) { delete all[birth]; changed = true; }
  }
  if (changed) saveSpreads(all);
  return all;
}
function saveSpreads(all){
  if (Object.keys(all).length) store.set(SPREADS_KEY, JSON.stringify(all)); else store.remove(SPREADS_KEY);
}
function spreadSlot(type, birth = currentDate){
  const s = (loadSpreads()[birth] || {})[type];
  return s && s.period === spreadPeriod(type, todayISO()) ? s : null;
}
function setSpreadSlot(type, slot, birth = currentDate){
  const all = loadSpreads();
  all[birth] = all[birth] || {};
  if (slot) all[birth][type] = slot; else delete all[birth][type];
  if (!Object.keys(all[birth]).length) delete all[birth];
  saveSpreads(all);
}
function readingOf(type, birth = currentDate){
  const s = spreadSlot(type, birth), r = s && s.reading, n = SPREAD_SIZE[type];
  if (!r || !validCards(r.cards, n)) return null;
  return { cards: r.cards, question: typeof r.question === 'string' ? r.question : '', theme: themeOf(r.theme),
    revealed: Array.isArray(r.revealed) && r.revealed.length === n ? r.revealed.map(Boolean) : Array(n).fill(true),
    reversed: Array.isArray(r.reversed) && r.reversed.length === n ? r.reversed.map(Boolean) : Array(n).fill(false) };
}
function draftOf(type, birth = currentDate){
  const s = spreadSlot(type, birth), d = s && s.draft;
  if (!d || !Array.isArray(d.order) || !d.order.every(k => TAROT_ALL_KEYS.includes(k)) || !Array.isArray(d.picked)) return null;
  return { order: d.order, rev: Array.isArray(d.rev) ? d.rev.map(Boolean) : d.order.map(() => false),
    picked: d.picked.filter(i => Number.isInteger(i) && i >= 0 && i < d.order.length).slice(0, SPREAD_SIZE[type]), question: d.question || '', theme: themeOf(d.theme) };
}
function saveDraft(type, draft){ setSpreadSlot(type, draft ? { period: spreadPeriod(type, todayISO()), draft } : null); }
function saveReading(type, reading){ setSpreadSlot(type, { period: spreadPeriod(type, todayISO()), reading }); }

/* Anciennes fonctions (tirage à trois cartes), gardées pour la compatibilité */
function currentSpread(){
  const r = readingOf('three');
  return r ? { day: todayISO(), birth: currentDate, ...r } : null;
}
function saveSpread(s){
  if (!s || typeof s.birth !== 'string') return;
  const all = loadSpreads();
  (all[s.birth] = all[s.birth] || {}).three = { period: s.day, reading: { cards: s.cards, question: s.question || '', revealed: s.revealed, reversed: s.reversed } };
  saveSpreads(all);
}

/* ---------- Étapes du geste ---------- */
function startShuffle(type){
  const order = shuffleKeys(tarotFull ? TAROT_ALL_KEYS : TAROT_KEYS);   // options appliquées au moment du mélange
  const rev = order.map(() => tarotReversed && secureRandom() < 0.5);
  saveDraft(type, { order, rev, picked: [], question: SPREAD_ASKS[type] ? spreadDraft.trim() : '', theme: chosenTheme() });
  fanFocus = 0;
}
function togglePick(type, i){
  const d = draftOf(type); if (!d) return;
  const at = d.picked.indexOf(i);
  if (at >= 0) d.picked.splice(at, 1);
  else if (d.picked.length < SPREAD_SIZE[type]) d.picked.push(i);
  saveDraft(type, d);
}
function placeCards(type){
  const d = draftOf(type), n = SPREAD_SIZE[type];
  if (!d || d.picked.length !== n) return false;
  saveReading(type, { cards: d.picked.map(i => d.order[i]), reversed: d.picked.map(i => d.rev[i]), revealed: Array(n).fill(false), question: d.question, theme: d.theme });
  spreadDraft = '';
  return true;
}

/* ---------- Affichage ---------- */
function spreadPositions(t, type, period){
  const u = spreadTexts(t), s = u.spreads, lang = Object.keys(I18N).find(l => I18N[l] === t) || currentLang;
  if (type === 'one') return [{ name: s.one.pos, hint: s.one.hint }];
  if (type === 'three') return [{ name: t.tarot.spreadPast, hint: s.three.hints.past }, { name: t.tarot.spreadPresent, hint: s.three.hints.present }, { name: t.tarot.spreadFuture, hint: s.three.hints.future }];
  if (type === 'sca') return ['situation', 'challenge', 'advice'].map(k => ({ name: s.sca.pos[k], hint: s.sca.hints[k] }));
  return sixMonths(period).map(ym => ({ name: monthLabel(ym, lang), hint: s.six.hint }));
}
/* ---------- Tarot par thème (V10.11) ----------
   Données d'une langue (zodiac-tarot-themes-xx.js, tools/regen_tarot_themes.js) : sens des 78 cartes en Amour,
   Travail et argent, Vie personnelle ; phrases de position ; 40 combinaisons remarquables ; synthèses par thème.
   Déjà présentes dans ZODIAC.html et la version autonome ; sur le site, chargées à la demande (window.ZODIAC_LAZY). */
const themesLoading = {};
function themesData(lang){ return window.TAROT_THEMES_I18N && window.TAROT_THEMES_I18N[lang] || null; }
function themesUi(lang = currentLang){ return typeof TAROT_THEMES_UI === 'object' ? (TAROT_THEMES_UI[lang] || TAROT_THEMES_UI.fr) : null; }
function ensureTarotThemes(lang){
  if (themesData(lang)) return Promise.resolve(true);
  const file = (window.ZODIAC_LAZY || {})[`zodiac-tarot-themes-${lang}.js`];
  if (!file) return Promise.resolve(false);
  return themesLoading[lang] || (themesLoading[lang] = new Promise(resolve => {
    const sc = document.createElement('script');
    sc.src = file;
    sc.onload = () => resolve(!!themesData(lang));
    sc.onerror = () => { delete themesLoading[lang]; sc.remove(); resolve(false); };
    document.head.appendChild(sc);
  }));
}
function langOfTexts(t){ return Object.keys(I18N).find(l => I18N[l] === t) || currentLang; }
const STORY_POS = { one: ['answer'], three: ['past', 'present', 'future'], sca: ['situation', 'challenge', 'advice'], six: Array(6).fill('month') };
function readingSeed(type, reading, period){
  let seed = 0;
  for (const ch of type + period + reading.cards.join() + reading.reversed.join()) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  return seed;
}
/* « Votre lecture » : pour chaque carte, une phrase qui la situe (position et thème) puis son sens dans le thème
   (question libre : le sens général déjà affiché sous la carte) ; puis les combinaisons remarquables du tirage
   (deux au plus). La synthèse suit. Mêmes variantes à chaque affichage d'un même tirage. */
function spreadStoryHtml(t, deck, type, reading, period){
  const lang = langOfTexts(t), data = themesData(lang) || themesData('fr'), ui = themesUi(lang);
  if (!data || !ui) return '';
  const theme = themeOf(reading.theme), seed = readingSeed(type, reading, period);
  const months = type === 'six' ? sixMonths(period).map(ym => monthLabel(ym, lang)) : [];
  const nameOf = key => escapeHtml(tarotName(t, key, deck));
  const lines = reading.cards.map((key, i) => {
    const pool = data.positions[theme][STORY_POS[type][i]], rev = reading.reversed[i];
    const lead = escapeHtml(pool[(seed + i) % pool.length]).replace('{card}', nameOf(key)).replace('{month}', escapeHtml(months[i] || ''));
    const meaning = theme === 'general' ? tarotMeaning(t, key, rev).text : escapeHtml(data.cards[key][theme][rev ? 'rev' : 'up']);
    return `<p class="story-line"><span class="story-lead">${lead}</span> ${meaning}</p>`;
  });
  const combos = Object.keys(data.combos).filter(k => { const [a, b] = k.split('+'); return reading.cards.includes(a) && reading.cards.includes(b); })
    .slice(0, 2).map(k => { const [a, b] = k.split('+');
      return `<p class="story-combo"><span aria-hidden="true">✦</span> ${escapeHtml(data.combos[k]).replace('{a}', nameOf(a)).replace('{b}', nameOf(b))}</p>`; });
  return `<section class="spread-story" aria-labelledby="storyTitle-${type}">
      <h5 class="story-title" id="storyTitle-${type}">${escapeHtml(ui.reading)}</h5>${lines.join('')}${combos.join('')}</section>`;
}

/* Synthèse d'un tirage entièrement retourné : « Ce que cela signifie pour votre question ».
   Tendance d'ensemble à partir des tendances traditionnelles des cartes (tarotTendency, zodiac-tarot.js),
   pondérées selon leur place : présent et avenir comptent davantage ; dans Situation · Défi · Conseil, le défi
   est par nature un point d'attention et ne compte pas, le conseil compte double ; six mois : poids égaux.
   La phrase cite la carte qui décide (la carte unique, l'Avenir, le Conseil). Variantes de texte choisies d'après
   le tirage lui-même : la même lecture redonne la même synthèse. */
const SYNTH_WEIGHTS = { one: [1], three: [1, 2, 3], sca: [1, 0, 2], six: [1, 1, 1, 1, 1, 1] };
const SYNTH_KEY_CARD = { one: 0, three: 2, sca: 2 };
const TENDENCY_SCORE = { up: 1, open: 0, work: -1 };
function spreadTendency(type, reading){
  const w = SYNTH_WEIGHTS[type], tend = reading.cards.map((k, i) => tarotTendency(k, reading.reversed[i]));
  const score = tend.reduce((sum, x, i) => sum + TENDENCY_SCORE[x] * w[i], 0) / w.reduce((a, b) => a + b, 0);
  return { overall: score >= 0.3 ? 'up' : score <= -0.3 ? 'work' : 'open', cards: tend };
}
function spreadSynthHtml(t, deck, type, reading, period){
  const y = t.tarot.synth || I18N.fr.tarot.synth, lang = Object.keys(I18N).find(l => I18N[l] === t) || currentLang;
  const { overall, cards } = spreadTendency(type, reading);
  let seed = 0;
  for (const ch of type + period + reading.cards.join() + reading.reversed.join()) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const themed = reading.theme && reading.theme !== 'general' && themesData(lang) ? themesData(lang).synth[reading.theme] : null;
  const pool = themed ? themed[type][overall] : y[type][overall];   // tarot par thème : synthèse propre au thème
  let text = pool[seed % pool.length];
  if (type in SYNTH_KEY_CARD) { const i = SYNTH_KEY_CARD[type]; text = text.replace('{card}', escapeHtml(tarotName(t, reading.cards[i], deck))); }
  let months = '';
  if (type === 'six') {
    const names = sixMonths(period).map(ym => monthLabel(ym, lang));
    const list = arr => { try { return new Intl.ListFormat(loc(lang), { type: 'conjunction' }).format(arr); } catch (e) { return arr.join(', '); } };
    const pick = kind => names.filter((_, i) => cards[i] === kind);
    const best = pick('up'), care = pick('work');   // un mois sur six au moins, et pas tous : sinon rien à distinguer
    if (best.length && best.length < 6) months += `<p class="synth-months">${escapeHtml(y.sixBest.replace('{months}', list(best)))}</p>`;
    if (care.length && care.length < 6) months += `<p class="synth-months">${escapeHtml(y.sixCare.replace('{months}', list(care)))}</p>`;
  }
  const id = `synthTitle-${type}`;
  return `<section class="spread-synth synth-${overall}" aria-labelledby="${id}">
      <h5 class="synth-title" id="${id}">${escapeHtml(type === 'six' ? y.titleSix : y.title)}</h5>
      <p class="synth-tendency">${escapeHtml(y.tendency[overall])}</p>
      <p class="synth-text">${text}</p>${months}
      <p class="synth-close">${escapeHtml(y.close[seed % y.close.length])}</p></section>`;
}
/* Liste des tirages (choix du type) */
function spreadPickerHtml(t){
  const s = spreadTexts(t).spreads;
  return `<div class="spread-picker" role="group" aria-label="${escapeHtml(s.title)}">
    ${SPREAD_TYPES.map(k => `<button type="button" class="spread-choice" data-type="${k}" aria-pressed="${k === spreadType}">
      <span class="sc-name">${escapeHtml(s[k].name)}</span><span class="sc-desc">${escapeHtml(s[k].desc)}</span></button>`).join('')}</div>`;
}
/* Panneau du tirage choisi : question et « Mélanger », éventail, ou lecture */
function spreadPanelHtml(t, deck, type){
  const u = t.tarot, x = spreadTexts(t), s = x.spreads, g = x.gesture, n = SPREAD_SIZE[type];
  const reading = readingOf(type);
  if (reading) {
    const pos = spreadPositions(t, type, spreadPeriod(type, todayISO()));
    const done = reading.revealed.every(Boolean);
    const slots = reading.cards.map((key, i) => {
      const head = `<div class="spread-pos">${escapeHtml(pos[i].name)}</div><div class="spread-hint">${escapeHtml(pos[i].hint)}</div>`;
      if (!reading.revealed[i]) return `<div class="spread-slot">${head}
        <button type="button" class="spread-flip" data-i="${i}" aria-label="${escapeHtml(u.spreadFlipAria.replace('{pos}', pos[i].name))}">${tarotBackSvg(deck, pos[i].name)}</button></div>`;
      const name = tarotName(t, key, deck), num = tarotTitleNum(key, deck), rev = reading.reversed[i], m = tarotMeaning(t, key, rev);
      return `<div class="spread-slot${spreadJustFlipped === i ? ' just-flipped' : ''}${rev ? ' is-rev' : ''}">${head}<div class="spread-visual">${tarotCardSvg(key, deck, name, rev)}</div>
        <div class="tarot-title">${num ? `<span class="tarot-num">${num}</span> ` : ''}${escapeHtml(name)}${rev ? ` <span class="rev-badge">${u.reversedBadge}</span>` : ''}</div>
        ${isMinorKey(key) ? minorBadge(t, key, deck) : ''}<div class="traits">${m.keywords.map(k => `<span class="trait-tag">${k}</span>`).join('')}</div>
        <p class="num-text">${m.text}</p></div>`;
    }).join('');
    const tu = themesUi(langOfTexts(t));
    if (done && !themesData(langOfTexts(t))) {   // site : textes du thème pas encore chargés
      const lang = langOfTexts(t);
      ensureTarotThemes(lang).then(ok => { if (ok && lang === currentLang && document.getElementById('spreadPanel')) renderTarot(); });
    }
    return `<h4 class="spread-name">${escapeHtml(s[type].name)}</h4>
      ${reading.question ? `<p class="spread-question" dir="auto">${escapeHtml(reading.question)}</p>` : ''}
      ${tu && reading.theme !== 'general' ? `<p class="spread-theme">${escapeHtml(tu.chosen.replace('{theme}', tu[reading.theme]))}</p>` : ''}
      ${done ? '' : `<p class="sky-sub">${u.spreadFlip}</p>`}
      <div class="spread-row spread-${type}">${slots}</div>
      ${done ? spreadStoryHtml(t, deck, type, reading, spreadPeriod(type, todayISO())) + spreadSynthHtml(t, deck, type, reading, spreadPeriod(type, todayISO())) : ''}
      ${done ? `<p class="spread-done">${escapeHtml(type === 'six' ? s.six.done : u.spreadTomorrow)}</p>` : ''}
      <p class="sky-note">${escapeHtml(type === 'six' ? s.six.note : u.spreadNote)}</p>`;
  }
  if (spreadShuffling) {
    const back = typeof TAROT_ART_IMG !== 'undefined' ? TAROT_ART_IMG['back_' + deck] : '';
    return `<div class="tarot-shuffle" style="--fan-back:url('${back}')" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="sky-sub" role="status">${escapeHtml(g.shuffling)}</p>`;
  }
  const draft = draftOf(type);
  if (draft) {
    const back = typeof TAROT_ART_IMG !== 'undefined' ? TAROT_ART_IMG['back_' + deck] : '';
    const N = draft.order.length, full = draft.picked.length === n;
    fanFocus = Math.min(Math.max(fanFocus, 0), N - 1);
    const cards = draft.order.map((_, i) => {
      const at = draft.picked.indexOf(i);
      return `<button type="button" class="fan-card" data-i="${i}" tabindex="${i === fanFocus ? 0 : -1}" aria-pressed="${at >= 0}" aria-label="${escapeHtml(g.cardAria)} ${i + 1}/${N}">${at >= 0 ? `<span class="fan-no" aria-hidden="true">${at + 1}</span>` : ''}</button>`;
    }).join('');
    const tu = themesUi(langOfTexts(t));
    return `${draft.question ? `<p class="spread-question" dir="auto">${escapeHtml(draft.question)}</p>` : ''}
      ${tu && draft.theme !== 'general' ? `<p class="spread-theme">${escapeHtml(tu.chosen.replace('{theme}', tu[draft.theme]))}</p>` : ''}
      <p class="sky-sub">${escapeHtml(g.pick)}</p>
      <div class="tarot-fan" role="group" aria-label="${escapeHtml(g.pick)}" style="--fan-back:url('${back}')">${cards}</div>
      <p class="fan-count"><span dir="ltr">${draft.picked.length}/${n}</span></p>
      <p class="sr-only" role="status" id="fanStatus">${escapeHtml(full ? g.allChosen : '')}</p>
      <div class="fan-actions"><button type="button" class="btn-secondary" id="spreadRestart">${escapeHtml(g.restart)}</button>
        <button type="button" class="btn-reveal" id="spreadPlace"${full ? '' : ' disabled'}>${escapeHtml(g.place)}</button></div>`;
  }
  const ask = SPREAD_ASKS[type];
  return `<div class="spread-form">
      ${ask ? `<p class="sky-sub">${u.spreadIntro}</p><label for="spreadQuestion" class="spread-label">${u.spreadQuestionLabel}</label>
      <textarea id="spreadQuestion" dir="auto" rows="2" maxlength="200" placeholder="${escapeHtml(u.spreadQuestionHint)}">${escapeHtml(spreadDraft)}</textarea>` : `<p class="sky-sub">${escapeHtml(s.six.desc)}</p>`}
      ${themesUi(langOfTexts(t)) ? `<fieldset class="spread-themes"><legend class="spread-label">${escapeHtml(themesUi(langOfTexts(t)).label)}</legend>
        ${SPREAD_THEMES.map(k => `<label class="spread-theme-opt"><input type="radio" name="spreadTheme" value="${k}"${k === chosenTheme() ? ' checked' : ''}> ${escapeHtml(themesUi(langOfTexts(t))[k])}</label>`).join('')}</fieldset>` : ''}
      <div class="spread-actions"><button type="button" class="btn-reveal" id="spreadDraw"${!ask || spreadDraft.trim().length >= 3 ? '' : ' disabled'}>${escapeHtml(g.shuffle)}</button></div></div>`;
}
/* Ancienne fonction (tirage à trois cartes), gardée pour la compatibilité */
function spreadHtml(t, deck){ return spreadPanelHtml(t, deck, 'three'); }
function spreadsSectionHtml(t, deck){
  const x = spreadTexts(t);
  return `<div class="card spread-card"><h3>${escapeHtml(x.spreads.title)}${infoBtn('spread', x.spreads.title)}</h3>
    ${spreadPickerHtml(t)}<div class="spread-panel" id="spreadPanel">${spreadPanelHtml(t, deck, spreadType)}</div></div>`;
}

/* Branchements, après chaque affichage de l'onglet */
function bindSpreads(el){
  const refresh = focusSel => { renderTarot(); if (focusSel) { const f = document.querySelector(focusSel); if (f) f.focus(); } };
  el.querySelectorAll('.spread-choice').forEach(b => b.addEventListener('click', () => {
    spreadType = b.dataset.type; store.set('zodiac_spread_type', spreadType); refresh(`.spread-choice[data-type="${spreadType}"]`);
  }));
  const q = el.querySelector('#spreadQuestion'), draw = el.querySelector('#spreadDraw');
  el.querySelectorAll('input[name="spreadTheme"]').forEach(r => r.addEventListener('change', () => {   // pas de nouvel affichage : le focus reste
    if (r.checked) { spreadTheme = r.value; store.set('zodiac_spread_theme', spreadTheme); }
  }));
  if (q) q.addEventListener('input', () => { spreadDraft = q.value; draw.disabled = q.value.trim().length < 3; });
  if (draw) draw.addEventListener('click', () => {
    if (SPREAD_ASKS[spreadType] && spreadDraft.trim().length < 3) return;
    const type = spreadType;
    if (prefersReducedMotion()) { startShuffle(type); refresh('.fan-card[tabindex="0"]'); return; }
    spreadShuffling = true; renderTarot();
    setTimeout(() => { spreadShuffling = false; startShuffle(type); refresh('.fan-card[tabindex="0"]'); }, 1500);
  });
  const fan = el.querySelector('.tarot-fan');
  if (fan) {
    fan.addEventListener('click', e => {
      const c = e.target.closest('.fan-card'); if (!c) return;
      fanFocus = +c.dataset.i; togglePick(spreadType, fanFocus); refresh('.fan-card[tabindex="0"]');
      const st = document.getElementById('fanStatus');
      const d = draftOf(spreadType), g = spreadTexts(I18N[currentLang]).gesture;
      if (st && d) st.textContent = d.picked.length === SPREAD_SIZE[spreadType] ? g.allChosen : `${d.picked.length}/${SPREAD_SIZE[spreadType]}`;
    });
    fan.addEventListener('keydown', e => {
      const N = fan.querySelectorAll('.fan-card').length, rtl = getComputedStyle(fan).direction === 'rtl';
      const step = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1, ArrowDown: 1, ArrowUp: -1 }[e.key];
      let next = null;
      if (step) next = (fanFocus + step + N) % N; else if (e.key === 'Home') next = 0; else if (e.key === 'End') next = N - 1;
      if (next === null) return;
      e.preventDefault();
      const cur = fan.querySelector(`.fan-card[data-i="${fanFocus}"]`), nx = fan.querySelector(`.fan-card[data-i="${next}"]`);
      if (cur) cur.tabIndex = -1;
      fanFocus = next; nx.tabIndex = 0; nx.focus(); nx.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
    const f = fan.querySelector('.fan-card[tabindex="0"]'); if (f) f.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  const restart = el.querySelector('#spreadRestart');
  if (restart) restart.addEventListener('click', () => { const d = draftOf(spreadType); if (d) spreadDraft = d.question; saveDraft(spreadType, null); refresh('#spreadDraw'); });
  const place = el.querySelector('#spreadPlace');
  if (place) place.addEventListener('click', () => { if (placeCards(spreadType)) refresh('.spread-flip'); });
  el.querySelectorAll('.spread-flip').forEach(b => b.addEventListener('click', () => {
    const r = readingOf(spreadType); if (!r) return;
    r.revealed[+b.dataset.i] = true; saveReading(spreadType, r);
    spreadJustFlipped = +b.dataset.i; renderTarot(); spreadJustFlipped = -1;
    const next = document.querySelector('.spread-flip'); if (next) next.focus();
  }));
}

/* Site : textes du thème dans la langue affichée, chargés tôt (puis gardés hors ligne par le service worker) */
window.addEventListener('load', () => setTimeout(() => ensureTarotThemes(currentLang), 2000));
document.getElementById('langSelect').addEventListener('change', () => setTimeout(() => ensureTarotThemes(currentLang), 0));
