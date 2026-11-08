/* ============================================================
   Zodiaque & Décans — « Cosmic Daily » : l'horoscope du jour, avec humour
   Idée d'une testeuse (4 novembre 2026), version 2 après ses essais (7 novembre 2026).
   Chaque jour, pour le signe et la voix choisis (Classique, Drôle, Piquant) : une phrase d'ambiance d'après le vrai
   ciel du jour (élément du signe que traverse la Lune à midi), cinq rubriques propres au signe (Carrière, Amour,
   Bien-être, Sagesse cosmique, Cosmic Roast ; 8 variantes chacune, qui tournent jour après jour), une ligne de plus
   quand Mercure est rétrograde, et « Roast My Zodiac » (10 roasts par signe, à partager en image).
   Deux entrées : l'onglet du profil, et le bouton de l'accueil (fenêtre, sans profil).
   Textes : data/cosmic/cosmic-xx.json → tools/regen_cosmic.js → zodiac-cosmic-ui.js (libellés, toujours chargé) et
   zodiac-cosmic-xx.js (textes d'une langue ; sur le site, chargés à la demande : window.ZODIAC_LAZY).
   On taquine les clichés des signes, jamais les personnes. Rien n'est envoyé : le partage part de l'appareil.
   Dépend de zodiac-app.js, zodiac-planets.js (moonLongitude, isRetrograde), zodiac-support.js (APP_URL).
   ============================================================ */

const COSMIC_VOICES = ['classic', 'funny', 'piquant'];
const COSMIC_RUBRICS = [['career', '💼'], ['love', '❤️'], ['wellbeing', '🌿'], ['wisdom', '✨'], ['roast', '😈']];
let cosmicVoice = COSMIC_VOICES.includes(store.get('zodiac_cosmicVoice')) ? store.get('zodiac_cosmicVoice') : 'classic';
/* Deux affichages : 'tab' (onglet du profil : signe du profil par défaut) et 'dlg' (fenêtre de l'accueil :
   dernier signe choisi, retenu sur l'appareil) ; roast : décalage du bouton « Encore un » */
const cosmicCtx = {
  tab: { body: 'cosmicBody', sign: null, roast: 0, open: false },
  dlg: { body: 'cosmicDlgBody', sign: SIGN_ORDER.includes(store.get('zodiac_cosmicSign')) ? store.get('zodiac_cosmicSign') : null, roast: 0, open: false }
};

// Bulle (i)
for (const l in COSMIC_UI) if (I18N[l] && I18N[l].info) I18N[l].info.cosmic = COSMIC_UI[l].info;

function cosmicUi(lang = currentLang){ return COSMIC_UI[lang] || COSMIC_UI.fr; }

/* Textes d'une langue : déjà présents (ZODIAC.html, version autonome) ou chargés à la demande (site) */
const cosmicLoading = {};
function cosmicData(lang){ return window.COSMIC_I18N && window.COSMIC_I18N[lang] || null; }
function ensureCosmic(lang){
  if (cosmicData(lang)) return Promise.resolve(true);
  const file = (window.ZODIAC_LAZY || {})[`zodiac-cosmic-${lang}.js`];
  if (!file) return Promise.resolve(false);
  return cosmicLoading[lang] || (cosmicLoading[lang] = new Promise(resolve => {
    const s = document.createElement('script');
    s.src = file;
    s.onload = () => resolve(!!cosmicData(lang));
    s.onerror = () => { delete cosmicLoading[lang]; s.remove(); resolve(false); };   // hors ligne et jamais chargé
    document.head.appendChild(s);
  }));
}

/* Ciel du jour, à midi heure de l'appareil : signe et élément de la Lune, Mercure rétrograde ou non */
function cosmicSky(iso){
  const d = parseISODate(iso), ms = localInstant(d, 12, 0, null);
  const moonSign = signFromLongitude(moonLongitude(ms));
  return { moonSign, element: SIGN_META[moonSign].element, mercuryRx: isRetrograde('mercury', ms), day: Math.floor(Date.UTC(d.y, d.m - 1, d.d) / 864e5) };
}

/* Horoscope du jour. Chaque rubrique parcourt ses 8 variantes en 8 jours, décalée selon la rubrique et le signe
   (deux signes ou deux rubriques ne tombent pas sur le même rang le même jour) ; la phrase d'ambiance est la même
   pour tous (c'est le même ciel). « {moon} » devient « la Lune en … », avec majuscule en début de phrase. */
function cosmicReading(lang, sign, voice, iso){
  const data = cosmicData(lang) || cosmicData('fr'), sky = cosmicSky(iso);
  if (!data) return null;
  const moon = data.moon[sky.moonSign];
  const cap = s => s.charAt(0).toLocaleUpperCase(lang) + s.slice(1);
  const fill = s => s.replace(/(^|[.!?。！？]\s*)\{moon\}/g, (m, before) => before + cap(moon)).replace(/\{moon\}/g, moon);
  const si = SIGN_ORDER.indexOf(sign), pick = (arr, offset) => arr[(((sky.day + offset) % arr.length) + arr.length) % arr.length];
  const ambiance = data.sky[voice][sky.element];
  const out = { sky, moon: cap(moon), ambiance: fill(pick(ambiance, 0)) };
  COSMIC_RUBRICS.forEach(([r], ri) => { out[r] = pick(data.signs[sign][voice][r], ri * 3 + si * 5); });
  if (sky.mercuryRx) out.mercury = fill(pick(data.mercury[voice], 0));
  return out;
}
/* Roast My Zodiac : le roast du jour, puis les suivants avec « Encore un » */
function cosmicRoastMy(lang, sign, iso, shift = 0){
  const data = cosmicData(lang) || cosmicData('fr');
  if (!data) return '';
  const arr = data.signs[sign].roastMy, day = cosmicSky(iso).day + SIGN_ORDER.indexOf(sign) + shift;
  return arr[((day % arr.length) + arr.length) % arr.length];
}

function cosmicDateLabel(iso, lang){
  const d = parseISODate(iso);
  const s = new Intl.DateTimeFormat(loc(lang), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(Date.UTC(d.y, d.m - 1, d.d));
  return s.charAt(0).toLocaleUpperCase(lang) + s.slice(1);   // « Jeudi 5 novembre 2026 »
}
const cosmicSym = k => SIGN_META[k].sym.replace(/\uFE0E/g, '');

/* Carte complète ; le choix du signe ou de la voix, et « Encore un », ne redessinent que leur partie :
   le focus reste sur la commande utilisée */
function renderCosmic(which = 'tab'){
  const c = cosmicCtx[which], body = document.getElementById(c.body);
  if (!body) return;
  const t = I18N[currentLang], u = cosmicUi(), iso = todayISO(), id = s => `${s}-${which}`;
  if (!c.sign || !SIGN_ORDER.includes(c.sign)) c.sign = which === 'tab' && currentSky ? currentSky.sign : 'aries';
  c.roast = 0;
  const tag = which === 'dlg' ? 'div' : 'section';   // dans la fenêtre, le dialogue porte déjà le titre : pas de second repère
  body.innerHTML = `<${tag} class="card cosmic-card" aria-labelledby="${id('cosmicTitle')}">
      <h3 id="${id('cosmicTitle')}">${escapeHtml(u.tab)}${infoBtn('cosmic', u.tab)}</h3>
      <p class="cosmic-intro">${escapeHtml(which === 'dlg' ? u.homeHint : u.intro)}</p>
      <p class="cosmic-date">${escapeHtml(cosmicDateLabel(iso, currentLang))}</p>
      <p class="cosmic-sky"><span class="cosmic-sky-label">${escapeHtml(u.skyToday)}</span> <span class="cosmic-sky-text"></span></p>
      <div class="cosmic-controls">
        <div class="cosmic-field"><label for="${id('cosmicSign')}">${escapeHtml(which === 'dlg' ? u.pickSign : u.sign)}</label>
          <select id="${id('cosmicSign')}" class="cosmic-sign">${SIGN_ORDER.map(k => `<option value="${k}"${k === c.sign ? ' selected' : ''}>${SIGN_META[k].sym} ${escapeHtml(t.signNames[k])}</option>`).join('')}</select></div>
        <div class="cosmic-voices" role="radiogroup" aria-label="${escapeHtml(u.voice)}">
          <span class="cosmic-voice-label" aria-hidden="true">${escapeHtml(u.voice)}</span>
          ${COSMIC_VOICES.map(v => `<label class="cosmic-voice"><input type="radio" name="cosmicVoice-${which}" value="${v}"${v === cosmicVoice ? ' checked' : ''}> ${escapeHtml(u.voices[v])}</label>`).join('')}
        </div>
      </div>
      <p class="cosmic-ambiance"></p>
      <div class="cosmic-rubrics" aria-live="polite"></div>
      <div class="cosmic-roastmy">
        <button type="button" class="cosmic-roast-btn" aria-expanded="false" aria-controls="${id('cosmicRoastBox')}">😈 Roast My Zodiac</button>
        <div class="cosmic-roast-box" id="${id('cosmicRoastBox')}" hidden>
          <p class="cosmic-roast-hint">${escapeHtml(u.roastMyHint)}</p>
          <p class="cosmic-roast-text" aria-live="polite"></p>
          <div class="cosmic-roast-actions">
            <button type="button" class="btn-secondary cosmic-roast-again">🎲 ${escapeHtml(u.roastAgain)}</button>
            <button type="button" class="btn-secondary cosmic-roast-image">🖼️ ${escapeHtml(u.shareImage)}</button>
          </div>
        </div>
      </div>
      <div class="cosmic-foot">
        <button type="button" class="btn-secondary cosmic-share">🔗 ${escapeHtml(u.share)}</button>
        <p class="cosmic-note">${escapeHtml(u.note)}</p>
      </div>
    </${tag}>`;
  body.querySelector('.cosmic-sign').addEventListener('change', e => {
    c.sign = e.target.value; c.roast = 0;
    if (which === 'dlg') store.set('zodiac_cosmicSign', c.sign);
    renderCosmicParts(which);
  });
  body.querySelectorAll('.cosmic-voice input').forEach(r => r.addEventListener('change', () => {
    if (!r.checked) return;
    cosmicVoice = r.value;
    store.set('zodiac_cosmicVoice', cosmicVoice);
    renderCosmicParts(which);
  }));
  const roastBtn = body.querySelector('.cosmic-roast-btn'), roastBox = body.querySelector('.cosmic-roast-box');
  roastBtn.addEventListener('click', () => {
    const open = roastBox.hidden;
    roastBox.hidden = !open;
    roastBtn.setAttribute('aria-expanded', String(open));
  });
  body.querySelector('.cosmic-roast-again').addEventListener('click', () => { c.roast++; renderCosmicParts(which); });
  body.querySelector('.cosmic-roast-image').addEventListener('click', () => shareRoastImage(which));
  body.querySelector('.cosmic-share').addEventListener('click', () => shareCosmic(which));
  renderCosmicParts(which);
  if (!cosmicData(currentLang)) {   // site : textes de la langue chargés à la demande
    const lang = currentLang;
    ensureCosmic(lang).then(ok => { if (ok && lang === currentLang) renderCosmicParts(which); });
  }
}

function renderCosmicParts(which){
  const c = cosmicCtx[which], body = document.getElementById(c.body);
  if (!body) return;
  const u = cosmicUi(), iso = todayISO(), r = cosmicReading(currentLang, c.sign, cosmicVoice, iso);
  const box = body.querySelector('.cosmic-rubrics');
  if (!r) { box.innerHTML = '<p class="cosmic-wait">…</p>'; return; }
  body.querySelector('.cosmic-sky-text').textContent = r.moon + (r.sky.mercuryRx ? ' · ' + u.mercuryRx : '');
  body.querySelector('.cosmic-ambiance').textContent = r.ambiance;
  box.innerHTML = COSMIC_RUBRICS.map(([k, icon]) => `<article class="cosmic-rubric cosmic-${k}">
      <h4><span class="cosmic-icon" aria-hidden="true">${icon}</span> ${escapeHtml(u.rubrics[k])}</h4>
      <p>${escapeHtml(r[k])}</p></article>`).join('') +
    (r.mercury ? `<p class="cosmic-mercury"><span aria-hidden="true">☿</span> ${escapeHtml(r.mercury)}</p>` : '');
  body.querySelector('.cosmic-roast-text').textContent = cosmicRoastMy(currentLang, c.sign, iso, c.roast);
}

/* Partage du jour : texte (signe, voix, rubriques) et adresse du site, jamais le profil */
async function shareCosmic(which = 'tab'){
  const c = cosmicCtx[which], t = I18N[currentLang], u = cosmicUi(), iso = todayISO(), r = cosmicReading(currentLang, c.sign, cosmicVoice, iso);
  if (!r) return;
  const text = `${u.tab} — ${cosmicDateLabel(iso, currentLang)}\n${t.signNames[c.sign]} · ${u.voices[cosmicVoice]}\n${r.ambiance}\n\n` +
    COSMIC_RUBRICS.map(([k, icon]) => `${icon} ${u.rubrics[k]} : ${r[k]}`).join('\n') +
    (r.mercury ? `\n☿ ${r.mercury}` : '') + `\n\n${APP_URL}`;
  if (navigator.share) {
    try { await navigator.share({ title: u.tab, text }); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(text); showToast(u.copied); }
  catch (e) { window.prompt(u.share, text); }   // repli : copie à la main
}

/* Roast My Zodiac en image (1080 × 1350, format des réseaux) : dessinée sur l'appareil, partagée par le système
   ou, à défaut, téléchargée. Coupure des lignes par mots (Intl.Segmenter si présent : thaï, chinois, japonais). */
function wrapCosmicText(g, text, lang, width){
  let parts;
  try { parts = [...new Intl.Segmenter(loc(lang), { granularity: 'word' }).segment(text)].map(s => s.segment); }
  catch (e) { parts = /^(zh|ja|th)/.test(lang) ? [...text] : text.split(/(\s+)/); }
  const lines = [];
  let line = '';
  for (const p of parts) {
    if (g.measureText(line + p).width > width && line.trim()) { lines.push(line.trim()); line = p.trimStart(); }
    else line += p;
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}
function cosmicRoastCanvas(sign, text, lang){
  const W = 1080, H = 1350, cv = document.createElement('canvas'), g = cv.getContext('2d'), t = I18N[lang];
  cv.width = W; cv.height = H;
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#120f2e'); bg.addColorStop(1, '#2d2160');
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  g.fillStyle = 'rgba(255,255,255,.55)';
  for (let i = 0; i < 110; i++) {   // étoiles, hors du bloc de texte
    const x = rnd() * W, y = rnd() * H, r = rnd() * 2.2 + .4;
    if (y > 500 && y < 1210 && x > 70 && x < W - 70) continue;
    g.beginPath(); g.arc(x, y, r, 0, 2 * Math.PI); g.fill();
  }
  const font = (size, weight = 400) => `${weight} ${size}px system-ui, -apple-system, "Segoe UI", "Noto Sans", sans-serif`;
  const dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';   // en-tête et adresse en lettres latines : toujours ltr
  g.textAlign = 'center';
  g.direction = 'ltr';
  g.fillStyle = '#e8c36a'; g.font = font(38, 700);
  g.fillText('ZODIAC · Roast My Zodiac', W / 2, 140);
  g.font = font(170); g.fillText(cosmicSym(sign), W / 2, 360);
  g.direction = dir;
  g.fillStyle = '#ffffff'; g.font = font(60, 700);
  g.fillText(t.signNames[sign], W / 2, 460);
  let size = 48, lines;
  for (; size >= 32; size -= 2) {
    g.font = font(size);
    lines = wrapCosmicText(g, text, lang, 880);
    if (lines.length * size * 1.4 <= 640) break;
  }
  g.fillStyle = '#f0eaff';
  const lh = size * 1.4, top = 560 + (640 - lines.length * lh) / 2;
  lines.forEach((l, i) => g.fillText(l, W / 2, top + (i + 1) * lh - lh * .25));
  g.direction = 'ltr';
  g.fillStyle = '#b8aed6'; g.font = font(34);
  g.fillText(APP_URL.replace(/^https?:\/\//, '').replace(/\/$/, ''), W / 2, 1270);
  return cv;
}
async function shareRoastImage(which = 'tab'){
  const c = cosmicCtx[which], text = cosmicRoastMy(currentLang, c.sign, todayISO(), c.roast);
  if (!text) return;
  const blob = await new Promise(res => cosmicRoastCanvas(c.sign, text, currentLang).toBlob(res, 'image/png'));
  if (!blob) return;
  const file = new File([blob], `roast-my-zodiac-${c.sign}.png`, { type: 'image/png' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: 'Roast My Zodiac', text: APP_URL }); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}

/* Fenêtre de l'accueil (sans profil) : focus gardé, Échap, retour du focus au bouton */
let cosmicOpener = null;
function openCosmicDialog(opener){
  const ov = document.getElementById('cosmicDialog');
  cosmicOpener = opener || document.activeElement;
  renderCosmic('dlg');
  ov.setAttribute('aria-labelledby', 'cosmicTitle-dlg');
  document.getElementById('cosmicDlgClose').setAttribute('aria-label', I18N[currentLang].close);
  ov.classList.remove('hidden');
  ov.setAttribute('aria-hidden', 'false');
  cosmicCtx.dlg.open = true;
  document.querySelector('#cosmicDlgBody .cosmic-sign').focus();
}
function closeCosmicDialog(){
  const ov = document.getElementById('cosmicDialog');
  if (ov.classList.contains('hidden')) return;
  ov.classList.add('hidden');
  ov.setAttribute('aria-hidden', 'true');
  cosmicCtx.dlg.open = false;
  document.getElementById('cosmicDlgBody').innerHTML = '';
  if (cosmicOpener && document.contains(cosmicOpener)) cosmicOpener.focus();
  cosmicOpener = null;
}
document.getElementById('cosmicOpen').addEventListener('click', e => openCosmicDialog(e.currentTarget));
document.getElementById('cosmicDlgClose').addEventListener('click', closeCosmicDialog);
document.getElementById('cosmicDialog').addEventListener('click', e => { if (e.target.id === 'cosmicDialog') closeCosmicDialog(); });
// Phase de capture : une bulle (i) ouverte dans la fenêtre se ferme d'abord (zodiac-app.js), la fenêtre ensuite
document.addEventListener('keydown', e => {
  if (!cosmicCtx.dlg.open || document.getElementById('article') && !document.getElementById('article').classList.contains('hidden')) return;
  if (e.key === 'Escape') {
    if (document.querySelector('#infoPop:not([hidden])')) return;
    e.preventDefault(); e.stopPropagation(); closeCosmicDialog(); return;
  }
  if (e.key !== 'Tab') return;
  const items = [...document.querySelectorAll('#cosmicDialog button, #cosmicDialog select, #cosmicDialog input[type="radio"]:checked')]
    .filter(el => !el.closest('[hidden]'));
  if (!items.length) return;
  const i = items.indexOf(document.activeElement);
  if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
  else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
}, true);

/* Libellé du bouton de l'accueil */
function cosmicHomeLabel(){ const el = document.getElementById('cosmicOpenLabel'); if (el) el.textContent = cosmicUi().tab; }
cosmicHomeLabel();

/* Site : la langue affichée est chargée tôt (puis gardée par le service worker pour l'usage hors ligne) */
window.addEventListener('load', () => setTimeout(() => ensureCosmic(currentLang), 1500));
document.getElementById('langSelect').addEventListener('change', () => setTimeout(() => { cosmicHomeLabel(); ensureCosmic(currentLang); }, 0));
