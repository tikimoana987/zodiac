/* ============================================================
   Zodiaque & Décans — onglet « Cosmic Daily » : l'horoscope du jour, avec humour
   Idée d'une testeuse (4 novembre 2026). Chaque jour, pour le signe et la voix choisis (Classique, Drôle,
   Piquant) : Carrière, Amour, Bien-être, Sagesse cosmique, Cosmic Roast, d'après le vrai ciel du jour —
   l'élément du signe que traverse la Lune à midi, et une ligne de plus quand Mercure est rétrograde.
   Textes : data/cosmic/cosmic-xx.json → tools/regen_cosmic.js → zodiac-cosmic-ui.js (libellés, toujours
   chargé) et zodiac-cosmic-xx.js (textes d'une langue). Sur le site, une seule langue est chargée, à la demande
   (window.ZODIAC_LAZY, build-standalone.py) ; la version autonome et ZODIAC.html les contiennent toutes.
   Un jeu pour sourire : on taquine les clichés des signes, jamais les personnes. Rien n'est envoyé.
   Dépend de zodiac-app.js, zodiac-planets.js (moonLongitude, isRetrograde), zodiac-support.js (APP_URL).
   ============================================================ */

const COSMIC_VOICES = ['classic', 'funny', 'piquant'];
const COSMIC_RUBRICS = [['career', '💼'], ['love', '❤️'], ['wellbeing', '🌿'], ['wisdom', '✨'], ['roast', '😈']];
let cosmicVoice = COSMIC_VOICES.includes(store.get('zodiac_cosmicVoice')) ? store.get('zodiac_cosmicVoice') : 'classic';
let cosmicSign = null;   // signe lu, le signe du profil par défaut (non mémorisé : lire celui d'un ami reste ponctuel)

// Bulle (i) de l'onglet
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

/* Horoscope du jour : une variante par rubrique, qui alterne d'un jour à l'autre (décalée selon le signe et la
   rubrique) ; « {moon} » devient « la Lune en … », avec majuscule en début de phrase. Une seule rubrique cite la
   Lune quand c'est possible : si la variante du jour la cite déjà ailleurs, l'autre variante est prise. */
function cosmicReading(lang, sign, voice, iso){
  const data = cosmicData(lang) || cosmicData('fr'), sky = cosmicSky(iso);
  if (!data) return null;
  const moon = data.moon[sky.moonSign];
  const cap = s => s.charAt(0).toLocaleUpperCase(lang) + s.slice(1);
  const fill = s => s.replace(/(^|[.!?。！？]\s*)\{moon\}/g, (m, before) => before + cap(moon)).replace(/\{moon\}/g, moon);
  const si = SIGN_ORDER.indexOf(sign), out = { sky, moon: cap(moon) };
  let moonUsed = false;
  COSMIC_RUBRICS.forEach(([r], ri) => {
    const pool = (r === 'wellbeing' || r === 'wisdom' ? data.common[voice][r] : data.signs[sign][voice][r])[sky.element];
    let i = (sky.day + ri + si) % pool.length;
    if (moonUsed && pool[i].includes('{moon}')) {
      const other = pool.findIndex(x => !x.includes('{moon}'));
      if (other >= 0) i = other;
    }
    if (pool[i].includes('{moon}')) moonUsed = true;
    out[r] = fill(pool[i]);
  });
  if (sky.mercuryRx) out.mercury = fill(data.mercury[voice][sky.day % data.mercury[voice].length]);
  return out;
}

function cosmicDateLabel(iso, lang){
  const d = parseISODate(iso);
  const s = new Intl.DateTimeFormat(loc(lang), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(Date.UTC(d.y, d.m - 1, d.d));
  return s.charAt(0).toLocaleUpperCase(lang) + s.slice(1);   // « Jeudi 5 novembre 2026 »
}

/* Carte complète (une fois par affichage du profil) ; le choix du signe ou de la voix ne redessine que les
   rubriques : le focus reste sur la commande utilisée */
function renderCosmic(){
  const body = document.getElementById('cosmicBody');
  if (!body) return;
  const t = I18N[currentLang], u = cosmicUi(), iso = todayISO();
  if (!cosmicSign || !SIGN_ORDER.includes(cosmicSign)) cosmicSign = currentSky && currentSky.sign || 'aries';
  const sky = cosmicSky(iso);
  body.innerHTML = `<section class="card cosmic-card" aria-labelledby="cosmicTitle">
      <h3 id="cosmicTitle">${escapeHtml(u.tab)}${infoBtn('cosmic', u.tab)}</h3>
      <p class="cosmic-intro">${escapeHtml(u.intro)}</p>
      <p class="cosmic-date">${escapeHtml(cosmicDateLabel(iso, currentLang))}</p>
      <p class="cosmic-sky"><span class="cosmic-sky-label">${escapeHtml(u.skyToday)}</span> <span id="cosmicSkyText"></span></p>
      <div class="cosmic-controls">
        <div class="cosmic-field"><label for="cosmicSign">${escapeHtml(u.sign)}</label>
          <select id="cosmicSign">${SIGN_ORDER.map(k => `<option value="${k}"${k === cosmicSign ? ' selected' : ''}>${SIGN_META[k].sym} ${escapeHtml(t.signNames[k])}</option>`).join('')}</select></div>
        <div class="cosmic-voices" role="radiogroup" aria-label="${escapeHtml(u.voice)}">
          <span class="cosmic-voice-label" aria-hidden="true">${escapeHtml(u.voice)}</span>
          ${COSMIC_VOICES.map(v => `<label class="cosmic-voice"><input type="radio" name="cosmicVoice" value="${v}"${v === cosmicVoice ? ' checked' : ''}> ${escapeHtml(u.voices[v])}</label>`).join('')}
        </div>
      </div>
      <div class="cosmic-rubrics" id="cosmicRubrics" aria-live="polite"></div>
      <div class="cosmic-foot">
        <button type="button" class="btn-secondary" id="cosmicShare">🔗 ${escapeHtml(u.share)}</button>
        <p class="cosmic-note">${escapeHtml(u.note)}</p>
      </div>
    </section>`;
  body.querySelector('#cosmicSign').addEventListener('change', e => { cosmicSign = e.target.value; renderCosmicRubrics(); });
  body.querySelectorAll('input[name="cosmicVoice"]').forEach(r => r.addEventListener('change', () => {
    if (!r.checked) return;
    cosmicVoice = r.value;
    store.set('zodiac_cosmicVoice', cosmicVoice);
    renderCosmicRubrics();
  }));
  body.querySelector('#cosmicShare').addEventListener('click', shareCosmic);
  renderCosmicRubrics();
  if (!cosmicData(currentLang)) {   // site : textes de la langue chargés à la demande
    const lang = currentLang;
    ensureCosmic(lang).then(ok => { if (ok && lang === currentLang) renderCosmicRubrics(); });
  }
}

function renderCosmicRubrics(){
  const box = document.getElementById('cosmicRubrics');
  if (!box) return;
  const u = cosmicUi(), iso = todayISO(), r = cosmicReading(currentLang, cosmicSign, cosmicVoice, iso);
  const skyText = document.getElementById('cosmicSkyText');
  if (!r) { box.innerHTML = '<p class="cosmic-wait">…</p>'; return; }
  if (skyText) skyText.textContent = r.moon + (r.sky.mercuryRx ? ' · ' + u.mercuryRx : '');
  box.innerHTML = COSMIC_RUBRICS.map(([k, icon]) => `<article class="cosmic-rubric cosmic-${k}">
      <h4><span class="cosmic-icon" aria-hidden="true">${icon}</span> ${escapeHtml(u.rubrics[k])}</h4>
      <p>${escapeHtml(r[k])}</p></article>`).join('') +
    (r.mercury ? `<p class="cosmic-mercury"><span aria-hidden="true">☿</span> ${escapeHtml(r.mercury)}</p>` : '');
}

/* Partage : texte du jour (signe, voix, rubriques) et adresse du site, jamais le profil */
async function shareCosmic(){
  const t = I18N[currentLang], u = cosmicUi(), iso = todayISO(), r = cosmicReading(currentLang, cosmicSign, cosmicVoice, iso);
  if (!r) return;
  const text = `${u.tab} — ${cosmicDateLabel(iso, currentLang)}\n${t.signNames[cosmicSign]} · ${u.voices[cosmicVoice]}\n\n` +
    COSMIC_RUBRICS.map(([k, icon]) => `${icon} ${u.rubrics[k]} : ${r[k]}`).join('\n') +
    (r.mercury ? `\n☿ ${r.mercury}` : '') + `\n\n${APP_URL}`;
  if (navigator.share) {
    try { await navigator.share({ title: u.tab, text }); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(text); showToast(u.copied); }
  catch (e) { window.prompt(u.share, text); }   // repli : copie à la main
}

/* Site : la langue affichée est chargée tôt (puis gardée par le service worker pour l'usage hors ligne) */
window.addEventListener('load', () => setTimeout(() => ensureCosmic(currentLang), 1500));
document.getElementById('langSelect').addEventListener('change', () => setTimeout(() => ensureCosmic(currentLang), 0));
