/* ============================================================
   Zodiaque & Décans — Compatibilité approfondie (cahier V0.2.1, docs/cahier-compatibilite.md)
   Neuf axes lus par signes, trois tonalités (harmonie, complémentarité, point d'attention), bilan sans note,
   aperçu, analyse complète repliable, Conseils des étoiles. Textes : zodiac-compat-data.js (COMPAT_I18N).
   Calcul pur et symétrique (échanger les deux personnes ne change rien) ; aucune donnée enregistrée ni envoyée.
   Dépend de zodiac-data.js, zodiac-astro.js, zodiac-planets.js, zodiac-natal.js, zodiac-numerology.js.
   ============================================================ */
const COMPAT_AXES = ['moon', 'venus', 'attraction', 'mercury', 'sun', 'mars', 'asc', 'lifePath', 'chinese'];   // ordre des rangs
const COMPAT_SIGN_AXES = ['moon', 'venus', 'mercury', 'sun', 'mars'];
const COMPAT_BODY_SYM = { moon: '☽', venus: '♀', mercury: '☿', sun: '☉', mars: '♂', asc: 'AC' };

/* Écart entre deux signes sur la roue, dans le sens le plus court : 0 (même signe) à 6 (opposition) */
function compatDistance(a, b){
  const x = (SIGN_ORDER.indexOf(b) - SIGN_ORDER.indexOf(a) + 12) % 12;
  return Math.min(x, 12 - x);
}
/* Tonalité d'une relation : 0, 2, 4 harmonie ; 1, 3, 5 point d'attention ; 6 complémentarité */
function compatTone(d){ return d === 6 ? 'complement' : d % 2 === 0 ? 'harmony' : 'attention'; }
/* Attirance : deux sens combinés ; harmonie seulement si les deux le sont, point d'attention de même, sinon complémentarité */
function compatCombine(t1, t2){
  if (t1 === 'harmony' && t2 === 'harmony') return 'harmony';
  if (t1 === 'attention' && t2 === 'attention') return 'attention';
  return 'complement';
}
/* Familles de nombres (convention pythagoricienne) ; 11, 22, 33 rattachés à 2, 4, 6 */
function lifePathFamily(n){
  const r = { 11: 2, 22: 4, 33: 6 }[n] || n;
  return [1, 5, 7].includes(r) ? 'mind' : [2, 4, 8].includes(r) ? 'matter' : 'creation';
}
const CN_TONE = { harmony: 'harmony', triad: 'harmony', same: 'complement', neutral: 'complement',
  clash: 'attention', harm: 'attention', punishment: 'attention', selfPunish: 'attention' };

/* Une personne = { date, time | null (avec fold éventuel), tz | null, place | null }. Signes de midi (affichés) et signes possibles
   dans la journée quand l'heure manque (0 h et 23 h 59, fuseau du lieu, à défaut de l'appareil) */
function compatPerson(p){
  const at = (h, m, fold) => localInstant(p.date, h, m, p.tz || null, fold);
  const signAt = (body, ms) => signFromLongitude(bodyLongitude(body, ms));
  const out = { lifePath: lifePath(p.date), cn: chineseYearInfo(p.date), shown: {}, cand: {} };
  for (const body of COMPAT_SIGN_AXES) {
    if (p.time) { out.shown[body] = signAt(body, at(p.time.h, p.time.min, p.time.fold)); out.cand[body] = [out.shown[body]]; }
    else { out.shown[body] = signAt(body, at(12, 0)); out.cand[body] = [...new Set([at(0, 0), at(23, 59)].map(ms => signAt(body, ms)))]; }
  }
  const chart = p.time && p.place ? natalChart(p.date, p.time, p.place) : null;
  if (chart && chart.exact) { out.shown.asc = signFromLongitude(chart.asc); out.cand.asc = [out.shown.asc]; }
  return out;
}

/* Axe par signes : tonalités de tous les couples de signes possibles */
function compatSignAxis(A, B, body){
  if (!A.cand[body] || !B.cand[body]) return null;
  const tones = new Set(), dists = new Set();
  for (const a of A.cand[body]) for (const b of B.cand[body]) { const d = compatDistance(a, b); dists.add(d); tones.add(compatTone(d)); }
  const d = compatDistance(A.shown[body], B.shown[body]);
  const unsure = A.cand[body].length > 1 || B.cand[body].length > 1;
  return { kind: 'sign', body, a: A.shown[body], b: B.shown[body], aCand: A.cand[body], bCand: B.cand[body], d,
    tone: tones.size === 1 ? [...tones][0] : null, readingUncertain: tones.size > 1, signUncertain: unsure && tones.size === 1 };
}

/* Compatibilité approfondie de deux personnes : axes, bilan, aperçu, conseils */
function compatDeep(p1, p2){
  const A = compatPerson(p1), B = compatPerson(p2), ax = {};
  for (const body of COMPAT_SIGN_AXES) ax[body] = compatSignAxis(A, B, body);
  ax.asc = compatSignAxis(A, B, 'asc');
  // Attirance : Vénus de la première personne × Mars de la seconde, et Mars de la première × Vénus de la seconde
  const dirTones = (V, M) => { const s = new Set(); for (const v of V) for (const m of M) s.add(compatTone(compatDistance(v, m))); return s; };
  const combos = new Set();
  for (const t1 of dirTones(A.cand.venus, B.cand.mars)) for (const t2 of dirTones(A.cand.mars, B.cand.venus)) combos.add(compatCombine(t1, t2));
  const d1 = compatDistance(A.shown.venus, B.shown.mars), d2 = compatDistance(A.shown.mars, B.shown.venus);
  const unsure = [A.cand.venus, A.cand.mars, B.cand.venus, B.cand.mars].some(c => c.length > 1);
  ax.attraction = { kind: 'attraction', d1, d2, venusA: A.shown.venus, marsB: B.shown.mars, marsA: A.shown.mars, venusB: B.shown.venus,
    cand: { venusA: A.cand.venus, marsB: B.cand.mars, marsA: A.cand.mars, venusB: B.cand.venus },
    tone: combos.size === 1 ? [...combos][0] : null, readingUncertain: combos.size > 1, signUncertain: unsure && combos.size === 1 };
  const fa = lifePathFamily(A.lifePath), fb = lifePathFamily(B.lifePath);
  ax.lifePath = { kind: 'lifePath', a: A.lifePath, b: B.lifePath, fa, fb,
    key: A.lifePath === B.lifePath ? 'same' : fa === fb ? 'family' : 'different', tone: fa === fb ? 'harmony' : 'complement' };
  if (A.cn && B.cn) { const rel = cnRelation(A.cn.animal, B.cn.animal); ax.chinese = { kind: 'chinese', a: A.cn.animal, b: B.cn.animal, rel, tone: CN_TONE[rel] }; }
  else ax.chinese = null;
  // Bilan : seuls les axes certains comptent
  const counted = COMPAT_AXES.filter(k => ax[k] && ax[k].tone && !ax[k].readingUncertain);
  const of = tone => counted.filter(k => ax[k].tone === tone);
  const H = of('harmony'), C = of('complement'), T = of('attention'), n = counted.length;
  const share = n ? (H.length - T.length) / n : 0;
  const opening = share >= 0.25 ? 'mostlyHarmony' : share <= -0.25 ? 'mostlyToBuild' : C.length * 2 >= n && n ? 'mostlyComplement' : 'balanced';
  return { ax, counted, harmony: H.length, complement: C.length, attention: T.length, n, opening,
    strength: H[0] || C[0] || null, toBuild: T[0] || null, advice: counted.filter(k => ax[k].tone !== 'harmony').slice(0, 3) };
}

/* ---------- Affichage ---------- */
function compatTexts(lang){ return COMPAT_I18N[lang] || COMPAT_I18N.fr; }
function compatSep(lang){ return lang === 'th' ? ' ' : lang === 'fr' ? ' : ' : (lang === 'ja' || lang === 'zh') ? '：' : ': '; }
let compatDeepOpen = false, compatDeepKey = '';

/* Le cœur de l'onglet Compatibilité : bilan, aperçu, analyse complète (repliée), conseils, synastrie repliée */
function compatDeepHtml(c, nameA, nameB, synHtml, missingAsc){
  const lang = currentLang, t = I18N[lang], x = compatTexts(lang), L = x.labels, sep = compatSep(lang);
  const esc = escapeHtml;
  const signTxt = s => `<span aria-hidden="true">${SIGN_META[s].sym}</span> ${t.signNames[s]}`;
  const cands = list => list.map(s => t.signNames[s]).join(' / ');
  const pill = tone => `<span class="tone-pill tone-${tone}">${esc(x.tones[tone])}</span>`;
  const note = text => `<p class="compat-note">${esc(text)}</p>`;
  const block = (key, line, body, tone, extra = '') => `<div class="compat-axis${tone ? '' : ' compat-unsure'}">
      <div class="compat-axis-head"><h4>${esc(L.axes[key])}</h4>${tone ? pill(tone) : ''}</div>
      <div class="compat-line">${line}</div>${extra}${body}</div>`;
  let axes = '';
  for (const key of COMPAT_AXES) {
    const a = c.ax[key];
    if (key === 'asc' && !a) { if (missingAsc) axes += block(key, '', note(L.complete), null); continue; }
    if (key === 'chinese' && !a) { axes += block(key, '', note(t.cn.outOfRange), null); continue; }
    if (!a) continue;
    if (a.kind === 'sign') {
      const sym = COMPAT_BODY_SYM[a.body];
      const line = a.readingUncertain
        ? `<span aria-hidden="true">${sym}</span> ${cands(a.aCand)} × <span aria-hidden="true">${sym}</span> ${cands(a.bCand)}`
        : `<span aria-hidden="true">${sym}</span> ${signTxt(a.a)} × <span aria-hidden="true">${sym}</span> ${signTxt(a.b)} · ${esc(x.relations['d' + a.d])}`;
      const badge = key === 'sun' && !a.readingUncertain ? `<span class="modal-element">${t.elements[SIGN_META[a.a].element]} × ${t.elements[SIGN_META[a.b].element]}</span>` : '';
      axes += block(key, line, a.readingUncertain ? note(L.readingUncertain) : `<p>${esc(x.readings[key]['d' + a.d])}</p>${a.signUncertain ? note(L.signUncertain) : ''}${badge}`, a.readingUncertain ? null : a.tone);
    } else if (a.kind === 'attraction') {
      const dir = (v, m, nv, nm, d) => `<span aria-hidden="true">♀</span> ${t.rulers.venus} ${signTxt(v)} <span class="sub">${nv}</span> × <span aria-hidden="true">♂</span> ${t.rulers.mars} ${signTxt(m)} <span class="sub">${nm}</span>${d === null ? '' : ` · ${esc(x.relations['d' + d])}`}`;
      let line, body;
      if (a.readingUncertain) {
        line = `<span aria-hidden="true">♀</span> ${cands(a.cand.venusA)} × <span aria-hidden="true">♂</span> ${cands(a.cand.marsB)}<br><span aria-hidden="true">♂</span> ${cands(a.cand.marsA)} × <span aria-hidden="true">♀</span> ${cands(a.cand.venusB)}`;
        body = note(L.readingUncertain);
      } else if (a.d1 === a.d2) {
        line = `${dir(a.venusA, a.marsB, nameA, nameB, null)}<br>${dir(a.venusB, a.marsA, nameB, nameA, null)}`;
        body = `<p><strong>${esc(x.relations['d' + a.d1])} · ${esc(L.bothWays)}</strong>${sep}${esc(x.readings.attraction['d' + a.d1])}</p>`;
      } else {
        line = '';
        body = `<p class="compat-dir">${dir(a.venusA, a.marsB, nameA, nameB, a.d1)}</p><p>${esc(x.readings.attraction['d' + a.d1])}</p>
          <p class="compat-dir">${dir(a.venusB, a.marsA, nameB, nameA, a.d2)}</p><p>${esc(x.readings.attraction['d' + a.d2])}</p>`;
      }
      axes += block(key, line, body + (a.signUncertain ? note(L.signUncertain) : ''), a.readingUncertain ? null : a.tone);
    } else if (a.kind === 'lifePath') {
      axes += block(key, `${a.a} × ${a.b} · ${esc(x.families[a.fa])} × ${esc(x.families[a.fb])}${infoBtn('compatLifePath', L.axes.lifePath)}`, `<p>${esc(x.lifePath[a.key])}</p>`, a.tone);
    } else if (a.kind === 'chinese') {
      axes += block(key, `<span aria-hidden="true">${CN_META[a.a].glyph}</span> ${t.cn.names[a.a]} × <span aria-hidden="true">${CN_META[a.b].glyph}</span> ${t.cn.names[a.b]} · ${esc(t.cn.relationNames[a.rel])}`,
        `<p>${esc(x.chinese[a.rel])}</p>`, a.tone);
    }
  }
  const adviceList = c.advice.length
    ? c.advice.map(k => `<li><strong>${esc(L.axes[k])}</strong>${sep}${esc(x.advice[k][c.ax[k].tone])}</li>`).join('')
    : `<li>${esc(x.advice.harmony)}</li>`;
  const strengthLine = c.strength
    ? `<p class="compat-key"><strong>${esc(L.strength)}</strong>${sep}${esc(L.axes[c.strength])} ${pill(c.ax[c.strength].tone)}</p>`
    : `<p class="compat-key">${esc(x.preview.noResource)}</p>`;
  const toBuildLine = c.toBuild ? `<p class="compat-key"><strong>${esc(L.toBuild)}</strong>${sep}${esc(L.axes[c.toBuild])}</p>` : '';
  return `<p class="compat-tally">
      <span>${esc(L.harmonies)} <strong>${c.harmony}</strong></span><span aria-hidden="true">·</span>
      <span>${esc(L.complements)} <strong>${c.complement}</strong></span><span aria-hidden="true">·</span>
      <span>${esc(L.attentions)} <strong>${c.attention}</strong></span><span aria-hidden="true">·</span>
      <span>${esc(L.analysed)} <strong>${c.n}/9</strong></span></p>
    <div class="compat-preview">
      <p>${esc(x.preview[c.opening])}</p>${strengthLine}${toBuildLine}
    </div>
    <p class="compat-toggle-row"><button type="button" class="btn-secondary compat-toggle" aria-expanded="${compatDeepOpen}" aria-controls="compatFull">${esc(compatDeepOpen ? L.less : L.more)} ${compatDeepOpen ? '▴' : '▾'}</button></p>
    <div class="compat-full" id="compatFull"${compatDeepOpen ? '' : ' hidden'}>
      <p class="compat-method">${esc(x.relations.d0)} · ${esc(x.relations.d2)} · ${esc(x.relations.d4)} → ${esc(x.tones.harmony)} — ${esc(x.relations.d6)} → ${esc(x.tones.complement)} — ${esc(x.relations.d1)} · ${esc(x.relations.d3)} · ${esc(x.relations.d5)} → ${esc(x.tones.attention)}${infoBtn('compatRelations', `${x.tones.harmony} · ${x.tones.complement} · ${x.tones.attention}`)}</p>
      <div class="compat-axes">${axes}</div>
      <div class="compat-advice"><h4>${esc(L.advice)}</h4><ul>${adviceList}</ul><p>${esc(x.advice.closing)}</p></div>
      <details class="compat-further"><summary>${esc(L.further)}</summary>${synHtml}</details>
      <p class="sky-note">${esc(L.mention)}</p>
    </div>`;
}

/* Repli / dépli de l'analyse complète (le choix reste tant que la paire ne change pas) */
document.addEventListener('click', e => {
  const btn = e.target.closest && e.target.closest('.compat-toggle');
  if (!btn) return;
  const x = compatTexts(currentLang).labels, full = document.getElementById('compatFull');
  compatDeepOpen = !compatDeepOpen;
  full.hidden = !compatDeepOpen;
  btn.setAttribute('aria-expanded', String(compatDeepOpen));
  btn.textContent = `${compatDeepOpen ? x.less : x.more} ${compatDeepOpen ? '▴' : '▾'}`;
});

/* Textes partagés avec le reste de l'appli : bulles (i), relations chinoises (aussi dans l'onglet Signes),
   libellé « Points d'attention » de la synastrie. Langues sans traduction : textes actuels gardés (bulles : français). */
(function installCompatTexts(){
  for (const lang of Object.keys(I18N)) {
    const own = COMPAT_I18N[lang], x = own || COMPAT_I18N.fr, t = I18N[lang];
    t.info.compatRelations = x.info.compatRelations;
    t.info.compatLifePath = x.info.compatLifePath;
    if (own) {
      t.info.compat = own.info.compat; t.cn.relations = { ...own.chinese }; t.pair.synTension = own.labels.attentions;
      t.cn.relationNames = { ...t.cn.relationNames, ...own.cnNames };
    }
  }
})();
