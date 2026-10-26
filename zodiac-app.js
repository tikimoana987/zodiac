/* ============================================================
   Zodiaque & Décans — application
   État, thème, animation, rendu, modale, actions, initialisation. Chargé en dernier.
   ============================================================ */

/* Version autonome (fichier unique, attribut data-standalone posé par build-standalone.py) :
   copie vierge de la page, prise ici, avant toute modification, pour pouvoir se retélécharger.
   Elle ne contient aucune donnée personnelle : nom, historique et lieu restent dans le navigateur. */
const PRISTINE_PAGE = document.documentElement.dataset.standalone
  ? { head: document.head.innerHTML, body: document.body.innerHTML }
  : null;

/* ============================================================
   1. ÉTAT GLOBAL
   ============================================================ */
let currentLang = 'fr';
let currentSignKey = null;
let currentDecanIdx = 0;
let currentDate = null;
let currentTime = null;    // "HH:MM" ou null
let currentName = '';      // prénom ou nom facultatif, gardé sur l'appareil uniquement (jamais dans l'URL)
let currentSky = null;     // résultat de computeSky()
let currentCn = null;      // résultat de chineseYearInfo(), null hors 1900-2100
let skyDate = null;        // date de lecture de l'horoscope ("AAAA-MM-JJ"), aujourd'hui par défaut
let skyPeriod = 'day';     // 'day' ou 'week'
let isSearching = false;   // empêche deux animations simultanées (Entrée pressée deux fois)
let lastFocus = null;      // élément à re-focaliser à la fermeture de la modale

/* Le nom est saisi librement : on l'échappe avant de l'insérer dans du HTML */
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
/* "Joann Dupré" → "joann-dupre" (nom de fichier de l'export) ; vide si aucun caractère latin */
function slugify(s){
  return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* localStorage peut lever une exception (navigation privée, iframe sandboxée, file:// selon le navigateur) */
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k, v); } catch(e){} },
  remove(k){ try { localStorage.removeItem(k); } catch(e){} }
};

/* ============================================================
   2. THÈME DYNAMIQUE
   ============================================================ */
/* Mode clair / sombre : la couleur du signe est assombrie en mode clair pour rester lisible
   (contraste ≥ 4,5:1 sur le fond, vérifié par les tests). --gold-bright garde la couleur vive pour le ciel nocturne. */
let themeColors = null;   // palette du signe affiché, null = palette par défaut
const LIGHT_SHADE = { gold: 0.48, purple: 0.4 };
function shade(hex, f){
  const n = parseInt(hex.slice(1), 16);
  return '#' + [16, 8, 0].map(s => Math.round(((n >> s) & 255) * (1 - f)).toString(16).padStart(2, '0')).join('');
}
function isLight(){ return document.documentElement.dataset.theme === 'light'; }
function paintTheme(){
  const base = themeColors || { gold: '#e8c36a', purple: '#9b7ede' }, light = isLight();
  const gold = light ? shade(base.gold, LIGHT_SHADE.gold) : base.gold;
  const purple = light ? shade(base.purple, LIGHT_SHADE.purple) : base.purple;
  const st = document.documentElement.style;
  st.setProperty('--gold', gold);
  st.setProperty('--purple', purple);
  st.setProperty('--glow', hexToRgba(gold, light ? .3 : .28));
  st.setProperty('--gold-bright', base.gold);
}
function applyTheme(signKey){
  if (!SIGN_THEME[signKey]) return;
  themeColors = SIGN_THEME[signKey];
  paintTheme();
}
function resetTheme(){ themeColors = null; paintTheme(); }
function setMode(mode){
  // Bascule instantanée : transitions coupées le temps du changement, sinon certains boutons
  // gardaient près d'une seconde les couleurs de l'autre mode
  const root = document.documentElement;
  root.classList.add('theme-switching');
  if (mode === 'light') root.dataset.theme = 'light'; else delete root.dataset.theme;
  store.set('zodiac_theme', mode);
  paintTheme();
  updateThemeButton();
  void root.offsetHeight;   // force le recalcul des styles avant de rétablir les transitions
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')));
}
function updateThemeButton(){
  const btn = document.getElementById('themeBtn'), t = I18N[currentLang];
  btn.setAttribute('aria-pressed', String(isLight()));
  btn.setAttribute('aria-label', t.theme.light);
  btn.title = t.theme.light;
  document.getElementById('themeIcon').textContent = isLight() ? '☾' : '☀';
}
function hexToRgba(hex, a){
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ============================================================
   3. ANIMATION DE RECHERCHE
   ============================================================ */
function prefersReducedMotion(){
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function runSearch(signKey, onDone){
  if (prefersReducedMotion()) { onDone(); return; }
  const t = I18N[currentLang];
  const overlay = document.getElementById('overlay');
  const crosshair = document.getElementById('crosshair');
  const svg = document.getElementById('constSvg');
  const searchText = document.getElementById('searchText');

  overlay.classList.remove('hidden','fade-out');
  overlay.setAttribute('aria-hidden','false');
  svg.innerHTML = '';
  searchText.textContent = t.searching;
  crosshair.style.transition = 'none';
  crosshair.style.opacity = '1';
  crosshair.style.left = '50%';
  crosshair.style.top = '50%';
  crosshair.style.transform = 'translate(-50%,-50%) scale(1)';

  const scan = setInterval(() => {
    crosshair.style.transition = 'all .14s ease';
    crosshair.style.left = (25 + Math.random()*50) + '%';
    crosshair.style.top  = (25 + Math.random()*50) + '%';
  }, 130);

  setTimeout(() => {
    clearInterval(scan);
    crosshair.style.transition = 'all .5s ease-out';
    crosshair.style.left = '50%';
    crosshair.style.top = '50%';
    crosshair.style.transform = 'translate(-50%,-50%) scale(1.5)';
    searchText.textContent = t.found + ' · ' + t.signNames[signKey];

    setTimeout(() => {
      drawConstellation(signKey);
      crosshair.style.opacity = '0';
      setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => {
          overlay.classList.add('hidden');
          overlay.setAttribute('aria-hidden','true');
          onDone();
        }, 380);
      }, 1500);
    }, 480);
  }, 1400);
}

function drawConstellation(signKey){
  const svg = document.getElementById('constSvg');
  const data = CONST[signKey];
  svg.innerHTML = '';
  const NS = 'http://www.w3.org/2000/svg';
  data.stars.forEach(([x,y], i) => {
    const c = document.createElementNS(NS,'circle');
    c.setAttribute('cx',x); c.setAttribute('cy',y); c.setAttribute('r',2.6);
    c.setAttribute('class','const-star');
    c.style.animationDelay = (i*0.07) + 's';
    svg.appendChild(c);
  });
  data.lines.forEach(([a,b], i) => {
    const [x1,y1] = data.stars[a], [x2,y2] = data.stars[b];
    const p = document.createElementNS(NS,'path');
    p.setAttribute('d',`M ${x1} ${y1} L ${x2} ${y2}`);
    p.setAttribute('class','const-line');
    p.setAttribute('pathLength','100');
    p.style.animationDelay = (0.25 + i*0.14) + 's';
    svg.appendChild(p);
  });
}

/* ============================================================
   4. RENDU DU PROFIL
   ============================================================ */
function starHtml(score){
  let html = '';
  for (let i=0;i<5;i++) html += i < score ? `<span class="star-${score}">★</span>` : `<span class="star-empty">☆</span>`;
  return html;
}

/* En-tête du profil : nom (si saisi) + date et heure de naissance. Mis à jour en direct quand le nom change. */
function renderOwner(){
  const el = document.getElementById('profileOwner');
  if (!el) return;
  const name = currentName ? `<div class="owner-name">${escapeHtml(currentName)}</div>` : '';
  const yr = parseISODate(currentDate).y;
  const warn = yr < 1900 || yr > 2100 ? `<p class="range-warn" role="note">${I18N[currentLang].rangeWarning}</p>` : '';
  el.innerHTML = name + `<div class="owner-birth">${formatBirth(currentDate, currentTime, currentLang)}${birthPlace(currentBirthPlace) ? ' · ' + escapeHtml(placeName(birthPlace(currentBirthPlace), currentLang)) : ''}</div>` + warn;
}

/* Briques de rendu partagées par les deux fiches */
const infoItem = (label, value, info) => `<div class="info-item"><span class="info-label">${label}${info ? infoBtn(info, label) : ''}</span><span class="info-value">${value}</span></div>`;
const swatches = (colors, t) => colors.map(c => `<span class="swatch" style="background:${COLOR_HEX[c]}"></span>${t.colors[c]}`).join(', ');
const tags = list => list.map(x => `<span class="trait-tag">${x}</span>`).join('');
function strengthsCard(t, strengths, weaknesses){
  return `<div class="card">
        <h3>${t.sections.strengthWeak}</h3>
        <div class="duo">
          <div class="duo-block strengths"><h4>${t.labels.strengths}</h4><ul>${strengths.map(s => `<li>${s}</li>`).join('')}</ul></div>
          <div class="duo-block weaknesses"><h4>${t.labels.weaknesses}</h4><ul>${weaknesses.map(s => `<li>${s}</li>`).join('')}</ul></div>
        </div>
      </div>`;
}
function loveCareerCard(t, love, career){
  return `<div class="card">
        <h3>${t.sections.loveCareer}</h3>
        <div class="duo-info">
          <div class="info-block"><span class="icon" aria-hidden="true">💕</span><h4>${t.labels.love}</h4><p class="text">${love}</p></div>
          <div class="info-block"><span class="icon" aria-hidden="true">💼</span><h4>${t.labels.career}</h4><p class="text">${career}</p></div>
        </div>
      </div>`;
}
function affinityCard(t, sys, own, keys, sym, name, score){
  const items = keys.map(other => `
          <div class="aff-item" role="button" tabindex="0" data-sys="${sys}" data-aff="${other}" aria-label="${name(own)} + ${name(other)}">
            <div class="aff-top"><span class="aff-sym" aria-hidden="true">${sym(other)}</span><span class="aff-name">${name(other)}</span></div>
            <div class="aff-stars" aria-label="${score(other)}/5">${starHtml(score(other))}</div>
          </div>`).join('');
  return `<div class="card">
        <h3>${t.sections.affinities}${infoBtn(sys === 'cn' ? 'cnAffinities' : 'affinities', t.sections.affinities)}</h3>
        <p class="aff-hint">${t.sections.affinityHint}</p>
        <div class="affinity-grid">${items}</div>
      </div>`;
}

/* Lune natale : phase et signe (deux signes possibles si la Lune en change ce jour-là sans heure connue) */
function natalMoonItems(t){
  const date = parseISODate(currentDate);
  if (!date) return '';
  const moon = natalMoon(date, parseTime(currentTime), birthTz());
  const signs = moon.signs.map(s => `<span aria-hidden="true">${SIGN_META[s].sym}</span> ${t.signNames[s]}`).join(' / ');
  return infoItem(t.labels.natalMoon, `<span aria-hidden="true">${MOON_PHASE_EMOJI[moon.phase.index]}</span> ${t.horo.phases[moon.phase.index]}`)
       + infoItem(t.labels.moonSign, signs);
}

/* Fiche occidentale : 5 cartes (profil, forces, amour, décan, affinités) */
function westernCards(t, signKey, decanIdx){
  const meta = SIGN_META[signKey];
  const ruler = decanRuler(signKey, decanIdx);
  const [decanTraitList, decanDesc] = t.decanTraits[signKey][decanIdx];
  return [
    `<div class="card">
        <h3>${t.sections.western}${infoBtn('signVsConstellation', t.sections.western)}</h3>
        <div class="sign-head">
          <span class="sign-icon" aria-hidden="true">${meta.sym}</span>
          <div>
            <div class="sign-name">${t.signNames[signKey]}</div>
            <div class="sign-meta">${t.elements[meta.element]} · ${t.rulers[meta.ruler]} · ${t.modalities[meta.modality]}</div>
          </div>
        </div>
        ${currentSky && currentSky.cusp ? `<p class="cusp-note">${currentSky.cusp === 'sign' ? t.cuspSign : t.cuspDecan}</p>` : ''}
        <p class="summary">${t.summaries[signKey]}</p>
        <div class="info-grid">
          ${infoItem(t.labels.dateRange, formatDateRange(signKey, currentLang))}
          ${currentSky ? infoItem(t.labels.sunPosition, ltr(formatSunPosition(currentSky)), 'sunPosition') : ''}
          ${natalMoonItems(t)}
          ${infoItem(t.labels.modality, t.modalities[meta.modality], 'modality')}
          ${infoItem(t.labels.ruler, t.rulers[meta.ruler], 'ruler')}
          ${infoItem(t.labels.luckyNumbers, meta.luckyNumbers)}
          ${infoItem(t.labels.colors, swatches(meta.colors, t))}
          ${infoItem(t.labels.stone, t.stones[meta.stone])}
          ${infoItem(t.labels.day, formatDay(meta.day, currentLang))}
        </div>
      </div>`,
    strengthsCard(t, t.strengths[signKey], t.weaknesses[signKey]),
    loveCareerCard(t, t.love[signKey], t.career[signKey]),
    `<div class="card">
        <h3>${t.sections.decan}${infoBtn('decan', t.sections.decan)}</h3>
        <div class="decan-badge"><span class="num">${decanIdx + 1}</span><span>${t.decanLabel[decanIdx]}</span></div>
        <p class="decan-desc">${decanDesc}</p>
        <div class="traits">
          ${tags(decanTraitList)}
          <span class="trait-tag ruler-tag" title="${t.labels.ruler}"><span aria-hidden="true">${PLANET_SYM[ruler]}</span> ${t.rulers[ruler]}</span>
        </div>
      </div>`,
    affinityCard(t, 'west', signKey, SIGN_ORDER, k => SIGN_META[k].sym, k => t.signNames[k], k => AFF[signKey][k])
  ];
}

/* Fiche chinoise : 5 cartes en miroir (profil, forces, amour, élément de l'année, affinités) */
function chineseCards(t, cn, hourAnimal){
  if (!cn) return [`<div class="card"><h3>${t.sections.chinese}</h3><p class="summary">${t.cn.outOfRange}</p></div>`];
  const meta = CN_META[cn.animal], el = cn.element, polarity = cn.yang ? 'yang' : 'yin';
  const [elTraits, elDesc] = t.cn.elementTraits[el];
  const glyphName = k => `<span aria-hidden="true">${CN_META[k].glyph}</span> ${t.cn.names[k]}`;
  return [
    `<div class="card">
        <h3>${t.sections.chinese}</h3>
        <div class="sign-head">
          <span class="sign-icon" aria-hidden="true">${meta.glyph}</span>
          <div>
            <div class="sign-name">${t.cn.names[cn.animal]}</div>
            <div class="sign-meta">${cnYearName(t, cn.animal, el)}</div>
          </div>
        </div>
        <p class="summary">${t.cn.summaries[cn.animal]}</p>
        <div class="info-grid">
          ${infoItem(t.cn.labels.year, formatCnSpan(cn, currentLang), 'cnYear')}
          ${infoItem(t.cn.labels.yearElement, `<span aria-hidden="true">${CN_ELEMENT_SYM[el]}</span> ${t.cn.elements[el]}`, 'yearElement')}
          ${infoItem(t.cn.labels.polarity, t.cn[polarity], 'polarity')}
          ${infoItem(t.cn.labels.fixedElement, t.cn.elements[meta.element], 'fixedElement')}
          ${infoItem(t.cn.labels.hourAnimal, hourAnimal ? glyphName(hourAnimal) : '—', 'hourAnimal')}
          ${infoItem(t.labels.luckyNumbers, meta.luckyNumbers)}
          ${infoItem(t.labels.colors, swatches(meta.colors, t))}
        </div>
      </div>`,
    strengthsCard(t, t.cn.strengths[cn.animal], t.cn.weaknesses[cn.animal]),
    loveCareerCard(t, t.cn.love[cn.animal], t.cn.career[cn.animal]),
    `<div class="card">
        <h3>${t.sections.yearElement}</h3>
        <div class="decan-badge"><span class="num cn-num" aria-hidden="true">${CN_ELEMENT_SYM[el]}</span><span>${t.cn.elements[el]} · ${t.cn[polarity]}</span></div>
        <p class="decan-desc">${elDesc}</p>
        <div class="traits">${tags(elTraits)}</div>
        <p class="cn-note">${t.cn.polarityDesc[polarity]}</p>
        <div class="cn-hour">
          <span class="info-label">${t.cn.labels.hourAnimal}</span>
          ${hourAnimal
            ? `<span class="info-value">${glyphName(hourAnimal)} · ${cnHourRange(hourAnimal)}</span><p>${t.cn.hourNote}</p>`
            : `<p>${t.cn.noHour}</p>`}
        </div>
      </div>`,
    affinityCard(t, 'cn', cn.animal, CN_ORDER, k => CN_META[k].glyph, k => t.cn.names[k], k => cnScore(cn.animal, k))
  ];
}

function renderResult(signKey, decanIdx){
  const t = I18N[currentLang];
  const container = document.getElementById('result');
  currentCn = chineseYearInfo(parseISODate(currentDate));
  const hourAnimal = chineseHourAnimal(parseTime(currentTime));

  container.innerHTML = `
    <div class="result-actions">
      <button class="btn-secondary" id="btnShare">🔗 ${t.btnShare}</button>
      <button class="btn-secondary" id="btnExport">📷 ${t.btnExport}</button>
      <button class="btn-secondary" id="btnReset">↺ ${t.btnReset}</button>
    </div>
    <div class="view-tabs" role="tablist" aria-label="${t.natal.tabsLabel}">
      <button type="button" role="tab" id="tabSigns" aria-controls="viewSigns"><span class="vt-icon" aria-hidden="true">☉</span><span class="vt-txt"><span class="vt-title">${t.natal.tabSigns}</span><span class="vt-sub">${t.natal.tabSignsSub}</span></span></button>
      <button type="button" role="tab" id="tabNatal" aria-controls="viewNatal"><span class="vt-icon" aria-hidden="true">✦</span><span class="vt-txt"><span class="vt-title">${t.natal.tabNatal}</span><span class="vt-sub">${t.natal.tabNatalSub}</span></span></button>
      <button type="button" role="tab" id="tabSky" aria-controls="viewSky"><span class="vt-icon" aria-hidden="true">☾</span><span class="vt-txt"><span class="vt-title">${t.tabs.sky}</span><span class="vt-sub">${t.tabs.skySub}</span></span></button>
      <button type="button" role="tab" id="tabCompat" aria-controls="viewCompat"><span class="vt-icon" aria-hidden="true">♡</span><span class="vt-txt"><span class="vt-title">${t.tabs.compat}</span><span class="vt-sub">${t.tabs.compatSub}</span></span></button>
      <button type="button" role="tab" id="tabNumbers" aria-controls="viewNumbers"><span class="vt-icon" aria-hidden="true">№</span><span class="vt-txt"><span class="vt-title">${t.tabs.numTarot}</span><span class="vt-sub">${t.tabs.numTarotSub}</span></span></button>
    </div>
    <div id="profileContent">
      <div class="owner" id="profileOwner"></div>
      <div class="dual" id="viewSigns" role="tabpanel" aria-labelledby="tabSigns">
        ${westernCards(t, signKey, decanIdx).join('\n')}
        ${chineseCards(t, currentCn, hourAnimal).join('\n')}
      </div>
      <div class="natal" id="viewNatal" role="tabpanel" aria-labelledby="tabNatal">${natalHtml(t)}</div>
      <div class="sky-view" id="viewSky" role="tabpanel" aria-labelledby="tabSky">
    <section class="card sky-card" aria-labelledby="skyTitle">
      <div class="sky-head">
        <h3 id="skyTitle">${t.horo.title} · ${t.signNames[signKey]}${infoBtn('horoscope', t.horo.title)}</h3>
        <div class="sky-controls">
          <label class="sr-only" for="skyDate">${t.horo.date}</label>
          <input type="date" id="skyDate" value="${skyDate || todayISO()}">
          <div class="seg" role="group" aria-label="${t.horo.day} / ${t.horo.week}">
            <button type="button" data-period="day" aria-pressed="${skyPeriod === 'day'}">${t.horo.day}</button>
            <button type="button" data-period="week" aria-pressed="${skyPeriod === 'week'}">${t.horo.week}</button>
          </div>
        </div>
      </div>
      <div id="skyBody"></div>
    </section>
    <section class="card map-card" aria-labelledby="mapTitle">
      <div class="sky-head">
        <h3 id="mapTitle">${t.map.title}${infoBtn('skymap', t.map.title)}</h3>
        <div class="sky-controls">
          <label class="sr-only" for="mapPlace">${t.map.place}</label>
          <select id="mapPlace">${placeOptions(t)}</select>
          <button type="button" class="btn-secondary" id="mapLocate">${t.map.locate}</button>
        </div>
      </div>
      <div class="map-grid">
        <div class="map-main">
          <svg id="skySvg" viewBox="-112 -112 224 224" role="img" aria-label="${t.map.title}"></svg>
          <div class="map-time">
            <label for="mapTime">${t.map.time}</label>
            <input type="range" id="mapTime" min="0" max="1430" step="10">
            <output id="mapTimeOut" for="mapTime"></output>
          </div>
        </div>
        <aside class="map-side" id="mapSide"></aside>
      </div>
      <p class="sky-note">${t.map.note}</p>
    </section>
    <section class="card night-card" aria-labelledby="nightTitle">
      <h3 id="nightTitle">${t.night.title}${infoBtn('night', t.night.title)}</h3>
      <div id="nightBody"></div>
      <p class="sky-note">${t.night.note}</p>
    </section>
      </div>
      <div class="compat-view" id="viewCompat" role="tabpanel" aria-labelledby="tabCompat">${compatCardHtml(t)}</div>
      <div class="numtarot" id="viewNumbers" role="tabpanel" aria-labelledby="tabNumbers">
        <h2 class="section-title">${t.num.tab}</h2><div class="numbers" id="numbersBody"></div>
        <h2 class="section-title">${t.tarot.tab}</h2><div class="tarot" id="tarotBody"></div>
      </div>
    </div>
  `;
  container.classList.remove('hidden');
  document.querySelector('.app').classList.add('has-result');
  renderOwner();
  applyTheme(signKey);
  updateWheel();
  wheelToSign(signKey);

  // Bindings
  document.getElementById('btnReset').addEventListener('click', reset);
  document.getElementById('btnShare').addEventListener('click', shareProfile);
  document.getElementById('btnExport').addEventListener('click', exportImage);

  closeInfo(false);
  setView(viewMode);
  const complete = document.getElementById('natalComplete');
  if (complete) complete.addEventListener('click', () => {
    const target = document.getElementById(document.getElementById('birthTime').value ? 'birthPlace' : 'birthTime');
    target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
    target.focus({ preventScroll: true });
  });
  const tabs = VIEW_MODES.map(m => document.getElementById(VIEW_TABS[m]));
  tabs.forEach((tb, i) => {
    tb.addEventListener('click', () => setView(VIEW_MODES[i]));
    tb.addEventListener('keydown', e => {   // flèches gauche / droite entre les onglets (sens inversé en écriture de droite à gauche)
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const step = (e.key === 'ArrowRight') !== (document.documentElement.dir === 'rtl') ? 1 : -1;
      setView(VIEW_MODES[(VIEW_MODES.indexOf(viewMode) + step + VIEW_MODES.length) % VIEW_MODES.length], true);
    });
  });

  if (!skyDate) skyDate = todayISO();
  renderNumbers();
  renderTarot();
  document.getElementById('skyDate').addEventListener('change', e => {
    if (parseISODate(e.target.value)) { skyDate = e.target.value; mapMinutes = null; renderSky(); renderMap(); renderNumbers(); renderTarot(); }
  });
  document.querySelectorAll('.seg button').forEach(btn => btn.addEventListener('click', () => {
    skyPeriod = btn.dataset.period;
    document.querySelectorAll('.seg button').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    renderSky();
  }));
  renderSky();
  bindMap();
  bindCompat();

  document.querySelectorAll('.aff-item').forEach(el => {
    el.addEventListener('click', () => openCompat(el.dataset.sys, el.dataset.aff));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCompat(el.dataset.sys, el.dataset.aff); }
    });
  });
}

/* Date du jour au format "AAAA-MM-JJ" (heure locale) */
function todayISO(){
  const n = new Date(), p = v => String(v).padStart(2, '0');
  return `${String(n.getFullYear()).padStart(4, '0')}-${p(n.getMonth() + 1)}-${p(n.getDate())}`;
}

/* Horoscope du jour ou de la semaine : transits « signe entier » des astres vers le signe solaire,
   rétrogradations, positions des planètes et, en mode semaine, les phases de la Lune. */
function renderSky(){
  const el = document.getElementById('skyBody');
  const date = parseISODate(skyDate);
  if (!el || !date || !currentSignKey) return;
  const t = I18N[currentLang], h = t.horo, days = skyPeriod === 'week' ? 7 : 1;
  const tr = transits(currentSignKey, date, days);
  const short = ms => new Intl.DateTimeFormat(loc(currentLang), { day:'numeric', month:'short' }).format(new Date(ms));
  const when = r => {
    if (days === 1 || (r.from === 0 && r.to === days - 1)) return '';
    if (r.from === 0) return h.when.until.replace('{d}', short(tr.noons[r.to]));
    if (r.to === days - 1) return h.when.from.replace('{d}', short(tr.noons[r.from]));
    return h.when.range.replace('{a}', short(tr.noons[r.from])).replace('{b}', short(tr.noons[r.to]));
  };
  const whenTag = r => when(r) ? ` <span class="tr-when">${when(r)}</span>` : '';
  const aspectLine = a => `<li class="transit"><span class="tr-sym" aria-hidden="true">${PLANET_SYM[a.body]}</span><div>
      <div class="tr-head"><strong>${t.rulers[a.body]}</strong> <span class="tr-sign" aria-hidden="true" title="${t.signNames[a.sign]}">${SIGN_META[a.sign].sym}</span> <span class="tr-aspect">${h.aspects[a.aspect]}</span>${whenTag(a)}</div>
      <p>${h.texts[a.body][a.aspect]}</p></div></li>`;
  const retroLine = r => `<li class="transit"><span class="tr-sym" aria-hidden="true">${PLANET_SYM[r.body]}</span><div>
      <div class="tr-head"><strong>${t.rulers[r.body]}</strong> <span class="tr-aspect">℞ ${h.retrograde}</span>${whenTag(r)}</div>
      <p>${h.retroTexts[r.body]}</p></div></li>`;
  const block = (title, items, line) => items.length ? `<h4>${title}</h4><ul class="transits">${items.map(line).join('')}</ul>` : '';
  // Transits sur le thème natal (mis en mémoire : la période d'influence des planètes lentes demande des centaines de positions)
  const birth = parseISODate(currentDate), btime = parseTime(currentTime), bplace = birthPlace(currentBirthPlace);
  const nKey = `${currentDate}|${currentTime}|${currentBirthPlace}|${tr.noons[0]}|${days}`;
  if (!natalTransitCache || natalTransitCache.key !== nKey) natalTransitCache = { key: nKey, list: natalTransits(natalPoints(natalChart(birth, btime, bplace), !!btime), tr.noons) };
  const nt = natalTransitCache.list.filter(x => x.slow || PERSONAL_POINTS.includes(x.point)).slice(0, 8);
  const n = t.natal, bare = s => s.replace(/\s*[（(][^()（）]*[)）]\s*$/, '');   // sans « (empreinte de génération) »
  // Date courte, avec l'année quand elle diffère de celle de la lecture (les transits lents s'étalent souvent sur deux années)
  const readYear = new Date(tr.noons[0]).getFullYear();
  const shortY = ms => new Date(ms).getFullYear() === readYear ? short(ms)
    : new Intl.DateTimeFormat(loc(currentLang), { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(ms));
  const pointName = p => p === 'asc' ? n.ascendant : p === 'mc' ? n.midheaven : t.rulers[p];
  const pointSym = p => p === 'asc' ? 'AC' : p === 'mc' ? 'MC' : PLANET_SYM[p];
  const pointDomain = p => p === 'asc' ? n.houses[0] : p === 'mc' ? n.houses[9] : n.domains[p];
  const natalLine = x => `<li class="transit"><span class="tr-sym" aria-hidden="true">${PLANET_SYM[x.body]}</span><div>
      <div class="tr-head"><strong>${t.rulers[x.body]}</strong> <span class="tr-aspect"><span aria-hidden="true">${ASPECT_SYM[x.type]}</span> ${n.aspectNames[x.type]}</span> <strong><span aria-hidden="true">${pointSym(x.point)}</span> ${pointName(x.point)}</strong>
        <span class="tr-when">${[x.exact ? h.natalExact.replace('{d}', shortY(x.exact)) : '', h.when.range.replace('{a}', shortY(x.start)).replace('{b}', shortY(x.end))].filter(Boolean).join(' · ')}</span></div>
      <p>${n.aspectMeanings[x.type]} — ${t.rulers[x.body]} (${bare(n.domains[x.body])}) ↔ ${pointName(x.point)} (${bare(pointDomain(x.point))})</p></div></li>`;
  const natalBlock = `<h4>${h.groups.natal}${infoBtn('natalTransits', h.groups.natal)}</h4>` + (nt.length ? `<ul class="transits">${nt.map(natalLine).join('')}</ul>` : `<p class="sky-none">${h.natalNone}</p>`);
  const major = tr.aspects.filter(a => SLOW_BODIES.includes(a.body));
  const moment = tr.aspects.filter(a => !SLOW_BODIES.includes(a.body));

  let heading;
  if (days === 1) {
    const ph = moonPhase(tr.noons[0]);
    const pct = new Intl.NumberFormat(loc(currentLang), { style:'percent' }).format(ph.illumination);
    heading = `${formatToday(currentLang, new Date(tr.noons[0]))} · <span aria-hidden="true">${MOON_PHASE_EMOJI[ph.index]}</span> ${h.phases[ph.index]} · ${pct}`;
  } else {
    const long = new Intl.DateTimeFormat(loc(currentLang), { day:'numeric', month:'short', year:'numeric' }).format(new Date(tr.noons[6]));
    heading = h.weekOf.replace('{start}', short(tr.noons[0])).replace('{end}', long);
  }
  const positions = skyAt(tr.noons[0]).map(p => `<li><span class="pos-sym" aria-hidden="true">${PLANET_SYM[p.body]}</span>
      <span class="pos-name">${t.rulers[p.body]}</span>
      <span class="pos-sign"><span aria-hidden="true">${SIGN_META[p.sign].sym}</span> ${t.signNames[p.sign]} ${ltr(Math.floor(p.lon % 30) + '°')}</span>
      ${p.retro ? `<span class="pos-retro" title="${h.retrograde}">℞</span>` : '<span></span>'}</li>`).join('');
  let moonWeek = '';
  if (days > 1) {
    const start = localInstant(date, 0, 0), end = localInstant({ y: date.y, m: date.m, d: date.d + 7 }, 0, 0);
    const fmt = new Intl.DateTimeFormat(loc(currentLang), { weekday:'short', day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' });
    const idx = { new: 0, firstQuarter: 2, full: 4, lastQuarter: 6 };
    const ev = lunarEvents(start, end);
    if (ev.length) moonWeek = `<h4>${h.groups.moon}</h4><ul class="moon-events">${ev.map(e =>
      `<li><span aria-hidden="true">${MOON_PHASE_EMOJI[idx[e.type]]}</span> ${h.phases[idx[e.type]]} · ${fmt.format(new Date(e.ms))}</li>`).join('')}</ul>`;
  }
  el.innerHTML = `
    <p class="sky-sub">${heading}</p>
    <div class="sky-grid">
      <div class="sky-main">
        ${natalBlock}
        ${major.length || moment.length ? block(h.groups.major, major, aspectLine) + block(h.groups.moment, moment, aspectLine) : `<p class="sky-none">${h.none}</p>`}
        ${block(h.groups.retro + infoBtn('retrograde', h.groups.retro), tr.retro, retroLine)}
      </div>
      <aside class="sky-side">
        <h4>${h.groups.positions}</h4><ul class="positions">${positions}</ul>
        ${moonWeek}
      </aside>
    </div>
    <p class="sky-note">${h.note}</p>`;
}

/* ============================================================
   ROUE DU ZODIAQUE
   ============================================================ */
let wheelAngle = 0;        // rotation actuelle (degrés, sens horaire)
let wheelAnim = null;      // { from, to, start } pendant la rotation vers le signe trouvé
let wheelLast = null;      // horodatage de l'image précédente (rotation lente)
let wheelRunning = false;  // une seule boucle d'animation à la fois
let wheelSign = null;      // signe sur lequel la roue s'est arrêtée

/* Angle à l'écran (degrés, sens horaire depuis le haut) d'une longitude : le Bélier à gauche,
   les signes dans le sens antihoraire, comme sur une roue astrologique traditionnelle */
function wheelScreenAngle(lon){ return 270 - lon; }
function wheelPoint(r, a){ return [r * Math.sin(a * DEG), -r * Math.cos(a * DEG)]; }
/* Rotation qui amène le milieu d'un signe en haut de la roue */
function wheelTargetFor(signKey){ return -wheelScreenAngle(SIGN_ORDER.indexOf(signKey) * 30 + 15); }

function buildWheel(){
  const svg = document.getElementById('wheel');
  if (!svg) return;
  const f = v => v.toFixed(2);
  let g = '';
  SIGN_ORDER.forEach((k, i) => {
    const a0 = wheelScreenAngle(i * 30), a1 = wheelScreenAngle(i * 30 + 30);
    const [x0, y0] = wheelPoint(108, a0), [x1, y1] = wheelPoint(108, a1), [x2, y2] = wheelPoint(70, a1), [x3, y3] = wheelPoint(70, a0);
    g += `<path class="ws ws-${SIGN_META[k].element}" data-sign="${k}" d="M${f(x0)},${f(y0)} A108,108 0 0 0 ${f(x1)},${f(y1)} L${f(x2)},${f(y2)} A70,70 0 0 1 ${f(x3)},${f(y3)} Z"/>`;
  });
  for (let d = 0; d < 360; d += 10) {
    const a = wheelScreenAngle(d), [ax, ay] = wheelPoint(108, a), [bx, by] = wheelPoint(d % 30 ? 102 : 70, a);
    g += `<line class="wt${d % 30 ? '' : ' wt-major'}" x1="${f(ax)}" y1="${f(ay)}" x2="${f(bx)}" y2="${f(by)}"/>`;
  }
  SIGN_ORDER.forEach((k, i) => {
    const [gx, gy] = wheelPoint(89, wheelScreenAngle(i * 30 + 15));
    g += `<text class="wg" data-x="${f(gx)}" data-y="${f(gy)}" x="${f(gx)}" y="${f(gy)}">${SIGN_META[k].sym}</text>`;
  });
  g += `<circle class="w-inner" r="70"/>`;
  for (const [id, sym] of [['wheelSun', PLANET_SYM.sun], ['wheelMoon', PLANET_SYM.moon]])
    g += `<circle class="wm-dot" id="${id}Dot" r="8"/><text class="wm" id="${id}">${sym}</text>`;
  svg.innerHTML = `<circle class="w-outer" r="111"/><g id="wheelRot">${g}</g>`;
}
function setWheelMarker(id, lon, r){
  const [x, y] = wheelPoint(r, wheelScreenAngle(lon)), dot = document.getElementById(id + 'Dot'), txt = document.getElementById(id);
  if (!dot) return;
  dot.setAttribute('cx', x.toFixed(2)); dot.setAttribute('cy', y.toFixed(2));
  txt.setAttribute('x', x.toFixed(2)); txt.setAttribute('y', y.toFixed(2));
  txt.dataset.x = x.toFixed(2); txt.dataset.y = y.toFixed(2);
}
/* Applique la rotation ; les symboles sont contre-tournés pour rester droits */
function drawWheel(){
  const rot = document.getElementById('wheelRot');
  if (!rot) return;
  rot.setAttribute('transform', `rotate(${wheelAngle.toFixed(2)})`);
  rot.querySelectorAll('[data-x]').forEach(el => el.setAttribute('transform', `rotate(${(-wheelAngle).toFixed(2)} ${el.dataset.x} ${el.dataset.y})`));
}
function wheelFrame(ts){
  if (wheelAnim) {
    if (wheelAnim.start === null) wheelAnim.start = ts;
    const p = Math.min(1, (ts - wheelAnim.start) / 1600), e = 1 - Math.pow(1 - p, 3);
    wheelAngle = wheelAnim.from + (wheelAnim.to - wheelAnim.from) * e;
    drawWheel();
    if (p < 1) { requestAnimationFrame(wheelFrame); return; }
    wheelAnim = null;
    wheelAngle %= 360;
    drawWheel();
  }
  if (!currentSignKey && !prefersReducedMotion()) {          // accueil : rotation lente, 4° par seconde
    if (wheelLast !== null) wheelAngle = (wheelAngle + (ts - wheelLast) * 0.004) % 360;
    wheelLast = ts;
    drawWheel();
    requestAnimationFrame(wheelFrame);
    return;
  }
  wheelRunning = false;
  wheelLast = null;
}
function startWheel(){
  if (wheelRunning) return;
  wheelRunning = true; wheelLast = null;
  requestAnimationFrame(wheelFrame);
}
/* Fait tourner la roue jusqu'au signe (un tour complet en plus pour l'effet) ; rien si déjà dessus */
function wheelToSign(signKey){
  if (wheelSign === signKey) return;
  wheelSign = signKey;
  const target = wheelTargetFor(signKey);
  if (prefersReducedMotion()) { wheelAnim = null; wheelAngle = target; drawWheel(); return; }
  wheelAnim = { from: wheelAngle, to: wheelAngle + ((target - wheelAngle) % 360 + 360) % 360 + 360, start: null };
  startWheel();
}
/* Surbrillance du signe, Soleil et Lune (du jour à l'accueil, de naissance avec un résultat), légende */
function updateWheel(){
  const svg = document.getElementById('wheel');
  if (!svg) return;
  const t = I18N[currentLang];
  svg.setAttribute('aria-label', t.wheel.title);
  svg.querySelectorAll('.ws').forEach(p => p.classList.toggle('ws-mine', p.dataset.sign === currentSignKey));
  let sunLon, moonLon, moonSigns, label;
  if (currentSky && currentDate) {
    const d = parseISODate(currentDate), tm = parseTime(currentTime);
    sunLon = currentSky.lon;
    moonLon = moonLongitude(tm ? localInstant(d, tm.h, tm.min, birthTz()) : localInstant(d, 12, 0, birthTz()));
    moonSigns = natalMoon(d, tm, birthTz()).signs;
    label = t.wheel.birth;
  } else {
    const now = Date.now();
    sunLon = sunLongitude(now); moonLon = moonLongitude(now);
    moonSigns = [signFromLongitude(moonLon)];
    label = t.wheel.today;
  }
  if (!document.getElementById('wheelRot')) return;
  setWheelMarker('wheelSun', sunLon, 54);
  setWheelMarker('wheelMoon', moonLon, 36);
  drawWheel();
  const sun = signFromLongitude(sunLon);
  const name = k => `<span aria-hidden="true">${SIGN_META[k].sym}</span> ${t.signNames[k]}`;
  document.getElementById('wheelCaption').innerHTML =
    `${label} · <span aria-hidden="true">${PLANET_SYM.sun}</span> ${name(sun)} · <span aria-hidden="true">${PLANET_SYM.moon}</span> ${moonSigns.map(name).join(' / ')}`;
}

/* ============================================================
   HISTORIQUE DES RECHERCHES (sur l'appareil uniquement)
   ============================================================ */
const HISTORY_MAX = 8;
function readHistory(){
  try {
    const h = JSON.parse(store.get('zodiac_history') || '[]');
    return Array.isArray(h) ? h.filter(e => e && parseISODate(e.date)) : [];
  } catch (e) { return []; }
}
/* Ajoute une recherche en tête, sans doublon (même date, heure et nom), en gardant les plus récentes */
function pushHistory(list, entry, max = HISTORY_MAX){
  const key = e => `${e.date}|${e.time || ''}|${e.place || ''}|${(e.name || '').toLowerCase()}`;
  return [entry, ...list.filter(e => key(e) !== key(entry))].slice(0, max);
}
function renderHistory(){
  const el = document.getElementById('history');
  if (!el) return;
  const t = I18N[currentLang], list = readHistory();
  el.hidden = !list.length;
  if (!list.length) { el.innerHTML = ''; return; }
  const fmt = new Intl.DateTimeFormat(loc(currentLang), { day: 'numeric', month: 'short', year: 'numeric' });
  el.innerHTML = `<span class="history-label">${t.history.title}</span>` + list.map((e, i) => {
    const d = parseISODate(e.date), dt = new Date(2000, 0, 1, 12);
    dt.setFullYear(d.y, d.m - 1, d.d);
    const sym = SIGN_META[e.sign] ? `<span aria-hidden="true">${SIGN_META[e.sign].sym}</span> ` : '';
    return `<button type="button" class="history-chip" data-i="${i}">${sym}${e.name ? escapeHtml(e.name) + ' · ' : ''}${fmt.format(dt)}${e.time ? ' · ' + e.time : ''}</button>`;
  }).join('') + `<button type="button" class="history-clear" id="historyClear">${t.history.clear}</button>`;
  el.querySelectorAll('.history-chip').forEach(b => b.addEventListener('click', () => {
    const e = list[+b.dataset.i];
    const nameInput = document.getElementById('userName');
    nameInput.value = e.name || '';
    currentName = nameInput.value.trim();
    if (currentName) store.set('zodiac_name', currentName); else store.remove('zodiac_name');
    document.getElementById('birthDate').value = e.date;
    document.getElementById('birthTime').value = e.time || '';
    birthField.set(e.place);
    launchSearch();
  }));
  document.getElementById('historyClear').addEventListener('click', () => { store.remove('zodiac_history'); renderHistory(); });
}

/* ============================================================
   BULLES D'INFORMATION (boutons « i »)
   Une seule bulle partagée, ouverte sous le bouton touché ; fonctionne au doigt comme à la souris
   (pas de survol). Fermeture : second appui, touche Échap, appui ailleurs, nouveau rendu.
   ============================================================ */
function infoBtn(key, title){
  const t = I18N[currentLang];
  const plain = String(title).replace(/<[^>]*>/g, '').trim();
  return `<button type="button" class="info-btn" data-info="${key}" data-title="${escapeHtml(plain)}" aria-label="${escapeHtml(t.infoLabel + ' : ' + plain)}" aria-expanded="false">i</button>`;
}
let infoOpenBtn = null;
function closeInfo(restoreFocus){
  const pop = document.getElementById('infoPop');
  if (pop) pop.hidden = true;
  document.querySelectorAll('.natal-svg.nw-focusing').forEach(s => s.classList.remove('nw-focusing'));
  document.querySelectorAll('.natal-svg .nw-on').forEach(g => g.classList.remove('nw-on'));
  if (infoOpenBtn) { infoOpenBtn.setAttribute('aria-expanded', 'false'); if (restoreFocus && infoOpenBtn.isConnected) infoOpenBtn.focus(); }
  infoOpenBtn = null;
}
function openInfo(btn){
  const t = I18N[currentLang];
  showPop(btn, btn.dataset.title, t.info[btn.dataset.info] || '');
}
/* Bulle d'explication sous (ou au-dessus de) l'élément « anchor » : bouton (i) ou élément de la roue du thème */
function showPop(anchor, title, text){
  let pop = document.getElementById('infoPop');
  if (!pop) {
    pop = document.createElement('div');
    pop.id = 'infoPop'; pop.className = 'info-pop'; pop.setAttribute('role', 'dialog'); pop.hidden = true;
    pop.innerHTML = '<p class="info-pop-title" id="infoPopTitle"></p><p class="info-pop-text"></p>';
    pop.setAttribute('aria-labelledby', 'infoPopTitle');
    document.body.appendChild(pop);
  }
  closeInfo(false);
  pop.querySelector('.info-pop-title').textContent = title;
  pop.querySelector('.info-pop-text').textContent = text;
  pop.hidden = false;
  // Sous l'élément, gardée dans l'écran ; au-dessus s'il manque de place en bas
  const r = anchor.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight, m = 10;
  const left = Math.min(Math.max(m, r.left + r.width / 2 - w / 2), document.documentElement.clientWidth - w - m);
  const below = r.bottom + 8 + h < window.innerHeight || r.top - 8 - h < 0;
  pop.style.left = `${left + window.scrollX}px`;
  pop.style.top = `${(below ? r.bottom + 8 : r.top - 8 - h) + window.scrollY}px`;
  anchor.setAttribute('aria-expanded', 'true');
  infoOpenBtn = anchor;
}
document.addEventListener('click', e => {
  const hit = e.target.closest && e.target.closest('.natal-svg [data-kind]');
  if (hit) { e.preventDefault(); if (hit === infoOpenBtn) closeInfo(false); else openWheelDetail(hit); return; }
  const btn = e.target.closest && e.target.closest('.info-btn');
  if (btn) { e.preventDefault(); e.stopPropagation(); if (btn === infoOpenBtn) closeInfo(false); else openInfo(btn); return; }
  if (infoOpenBtn && !e.target.closest('#infoPop')) closeInfo(false);
}, true);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && infoOpenBtn) closeInfo(true);
  const hit = (e.key === 'Enter' || e.key === ' ') && e.target.closest && e.target.closest('.natal-svg [data-kind]');
  if (hit) { e.preventDefault(); if (hit === infoOpenBtn) closeInfo(false); else openWheelDetail(hit); }
});
window.addEventListener('resize', () => closeInfo(false));

/* ============================================================
   THÈME NATAL (vue « Thème natal » du résultat)
   ============================================================ */
let currentBirthPlace = '';   // identifiant de la ville de naissance (zodiac-places.js), '' si non précisé
let viewMode = 'signs';       // onglet affiché : 'signs' (signe & zodiaque chinois), 'natal' ou 'numbers' (numérologie)
const VIEW_MODES = ['signs', 'natal', 'sky', 'compat', 'numbers'];   // une section par onglet ; 'numbers' : numérologie et tarot
const VIEW_TABS = { signs: 'tabSigns', natal: 'tabNatal', sky: 'tabSky', compat: 'tabCompat', numbers: 'tabNumbers' };
let tarotDeck = 'marseille';  // jeu de tarot : 'marseille' (par défaut) ou 'ws' (Waite-Smith) ; retenu sur l'appareil
const OFFLINE_ENABLED = false;  // bouton « Version hors ligne » : désactivé pour le moment (true pour le réactiver)
const ASPECT_SYM = { conjunction: '☌', sextile: '⚹', square: '□', trine: '△', opposition: '☍' };
let currentChart = null;   // thème affiché (roue interactive)
/* Ponctuation selon la langue : fin de phrase, deux-points, énumération */
const endPunct = () => ({ zh: '。', ja: '。', hi: '।', th: '' })[currentLang] ?? '.';
const colon = () => currentLang === 'fr' ? ' : ' : ['zh', 'ja'].includes(currentLang) ? '：' : ': ';
const listOf = items => new Intl.ListFormat(loc(currentLang), { type: 'unit', style: 'short' }).format(items);
/* Explication d'un élément de la roue : { title, text } (texte brut ; degrés isolés pour l'écriture de droite à gauche) */
function wheelDetail(chart, t, kind, key){
  const n = t.natal, iso = s => '\u2066' + s + '\u2069';
  const nf = new Intl.NumberFormat(loc(currentLang), { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  if (kind === 'body') {
    const b = chart.bodies.find(x => x.body === key);
    const asp = chart.aspects.filter(a => a.a === key || a.b === key).map(a => `${ASPECT_SYM[a.type]} ${t.rulers[a.a === key ? a.b : a.a]}`);
    return { title: `${PLANET_SYM[key]} ${t.rulers[key]} · ${t.signNames[b.sign]} ${iso(degMin(b.lon))}${b.house ? ` · ${n.house} ${b.house}` : ''}${b.retro ? ' ℞' : ''}`,
             text: `${capitalize(n.domains[key])} — ${n.styles[b.sign]}${b.house ? ` — ${n.house} ${b.house} (${n.houses[b.house - 1]})` : ''}${endPunct()}` + (asp.length ? ` ${n.aspects}${colon()}${listOf(asp)}${endPunct()}` : '') };
  }
  if (kind === 'sign') return { title: `${SIGN_META[key].sym} ${t.signNames[key]}`, text: t.summaries[key] };
  if (kind === 'house') {
    const i = +key, inside = chart.bodies.filter(b => b.house === i + 1).map(b => `${PLANET_SYM[b.body]} ${t.rulers[b.body]}`);
    return { title: `${n.house} ${i + 1}`, text: capitalize(n.houses[i]) + (inside.length ? ` — ${listOf(inside)}` : '') + endPunct() };
  }
  if (kind === 'angle') {
    const lon = key === 'asc' ? chart.asc : chart.mc, s = signFromLongitude(lon);
    return { title: `${key === 'asc' ? 'AC ' + n.ascendant : 'MC ' + n.midheaven} · ${t.signNames[s]} ${iso(degMin(lon))}`, text: key === 'asc' ? n.asc[s] : n.mcText };
  }
  const a = chart.aspects[+key];
  return { title: `${PLANET_SYM[a.a]} ${t.rulers[a.a]} ${ASPECT_SYM[a.type]} ${PLANET_SYM[a.b]} ${t.rulers[a.b]} · ${n.aspectNames[a.type]} ${iso(nf.format(a.orb) + '°')}`,
           text: `${capitalize(n.aspectMeanings[a.type])} — ${n.domains[a.a]} ↔ ${n.domains[a.b]}${endPunct()}` };
}
/* Ouvre l'explication d'un élément de la roue et met en avant ses aspects */
function openWheelDetail(el){
  if (!currentChart) return;
  const d = wheelDetail(currentChart, I18N[currentLang], el.dataset.kind, el.dataset.key);
  showPop(el, d.title, d.text);
  const svg = el.closest('.natal-svg');
  if (el.dataset.kind === 'body' || el.dataset.kind === 'aspect') {
    svg.classList.add('nw-focusing');
    el.classList.add('nw-on');
    const bodies = el.dataset.kind === 'body' ? [el.dataset.key] : [el.dataset.a, el.dataset.b];
    svg.querySelectorAll('.nw-asp-g').forEach(g => { if (el.dataset.kind === 'body' ? bodies.includes(g.dataset.a) || bodies.includes(g.dataset.b) : g === el) g.classList.add('nw-on'); });
    svg.querySelectorAll('.nw-pl').forEach(g => { if (bodies.includes(g.dataset.key)) g.classList.add('nw-on'); });
  }
}

function birthTz(){ const p = birthPlace(currentBirthPlace); return p ? p.tz : null; }
/* ---------- Champ de recherche de ville (~34 000 villes) ----------
   Composant réutilisable : lieu de naissance, et lieu de naissance de la 2e personne (compatibilité).
   Suggestions au fil de la frappe, flèches, Entrée, Échap, bouton ×. */
function placeLabel(p){ return `${placeName(p, currentLang)} (${regionName(p.country)})`; }
function makePlaceField(inputId, listId, clearId, onEnter){
  const input = document.getElementById(inputId), list = document.getElementById(listId), clear = document.getElementById(clearId);
  let key = '', results = [], active = -1, timer = null;
  const close = () => { list.hidden = true; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); active = -1; };
  const set = k => {
    const p = birthPlace(k);
    key = p ? p.key : '';
    input.value = p ? placeLabel(p) : '';
    clear.hidden = !input.value;
    close();
  };
  const render = () => {
    const t = I18N[currentLang], q = normPlace(input.value).replace(PLACE_ARTICLES, '');
    if (!results.length) list.innerHTML = `<li class="po-empty" role="presentation">${t.placeNoMatch}</li>`;
    else {
      const dupes = new Set(), seen = new Set();
      for (const p of results) { const k = p.name + '|' + p.country; if (seen.has(k)) dupes.add(k); seen.add(k); }
      const nf = new Intl.NumberFormat(loc(currentLang), { maximumFractionDigits: 2 }), dir = t.map.directions;
      list.innerHTML = results.map((p, i) => {
        // Nom trouvé dans une autre langue : affiché pour qu'on comprenne la suggestion (« London · Londres »)
        const alt = !(' ' + p.norm).includes(' ' + q) ? p.alts.find((a, k) => (' ' + p.normAlts[k]).includes(' ' + q)) : null;
        const where = dupes.has(p.name + '|' + p.country) ? ` · ${ltr(nf.format(Math.abs(p.lat)) + '°')} ${p.lat >= 0 ? dir[0] : dir[4]}, ${ltr(nf.format(Math.abs(p.lon)) + '°')} ${p.lon >= 0 ? dir[2] : dir[6]}` : '';
        return `<li role="option" id="${listId}Opt${i}" data-i="${i}" aria-selected="${i === active}"><span class="po-name">${escapeHtml(placeName(p, currentLang))}${alt ? ` <span class="po-alt">· ${escapeHtml(alt)}</span>` : ''}</span><span class="po-meta">${regionName(p.country)}${where}</span></li>`;
      }).join('');
    }
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    if (active >= 0) { input.setAttribute('aria-activedescendant', `${listId}Opt${active}`); document.getElementById(`${listId}Opt${active}`).scrollIntoView({ block: 'nearest' }); }
    else input.removeAttribute('aria-activedescendant');
  };
  const update = () => {
    const v = input.value.trim();
    clear.hidden = !v;
    // 2 lettres minimum en alphabet latin, 1 caractère pour les écritures où un signe vaut une syllabe ou un mot
    const enough = v.length >= 2 || /[\u0e00-\u0e7f\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/.test(v);
    if (!enough) { results = []; close(); return; }
    results = searchPlaces(v, 8);
    active = results.length ? 0 : -1;
    render();
  };
  /* Texte saisi sans choisir dans la liste : accepté s'il désigne exactement une ville (la plus peuplée) */
  const resolve = () => {
    const v = input.value.trim();
    if (!v || key) return true;
    const first = searchPlaces(v, 1)[0];
    if (first && (normPlace(first.name) === normPlace(v) || placeLabel(first) === v || first.normAlts.includes(normPlace(v)) || first.alts.some(a => `${a} (${regionName(first.country)})` === v))) { set(first.key); return true; }
    return false;
  };
  input.addEventListener('input', () => { key = ''; clearTimeout(timer); timer = setTimeout(update, 60); });   // léger délai : frappe fluide sur téléphone
  input.addEventListener('focus', () => { if (input.value.trim() && !key) update(); });
  input.addEventListener('keydown', e => {
    const open = !list.hidden && results.length;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) { update(); return; }
      active = (active + (e.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length;
      render();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (open && active >= 0) set(results[active].key); else onEnter();
    } else if (e.key === 'Escape' && !list.hidden) { e.preventDefault(); e.stopPropagation(); close(); }
  });
  input.addEventListener('blur', () => setTimeout(() => { close(); resolve(); }, 120));
  list.addEventListener('mousedown', e => e.preventDefault());   // garder le focus dans le champ
  list.addEventListener('click', e => { const li = e.target.closest('li[data-i]'); if (li) set(results[+li.dataset.i].key); });
  clear.addEventListener('click', () => { set(''); input.focus(); });
  return { get key(){ return key; }, set, resolve, relabel(){ if (key) set(key); } };
}
let birthField = null;   // champ « Lieu de naissance » (créé à l'initialisation)
let pairField = null;    // lieu de naissance de la 2e personne (recréé avec la carte de compatibilité)
/* Valeur en degrés isolée en lecture gauche-droite : sinon, en arabe, le « ° » ou le « ′ » (caractères neutres)
   passe du mauvais côté du nombre (« °1 » au lieu de « 1° ») */
const ltr = s => `<bdi dir="ltr">${s}</bdi>`;
const degMin = lon => { const x = lon % 30, d = Math.floor(x); return `${d}°${String(Math.floor((x - d) * 60)).padStart(2, '0')}′`; };
const signTag = (t, s) => `<span aria-hidden="true">${SIGN_META[s].sym}</span> ${t.signNames[s]}`;
const capitalize = s => s.charAt(0).toLocaleUpperCase(currentLang) + s.slice(1);

/* Dessin du thème : signes en couronne, maisons, astres, aspects ; ascendant à gauche (ou Bélier sans ascendant) */
function natalWheelSvg(chart, t){
  const ref = chart.asc === null ? 0 : chart.asc;
  const pt = (r, lon) => wheelPoint(r, 270 - (lon - ref));
  const f = v => v.toFixed(2);
  let g = '';
  SIGN_ORDER.forEach((k, i) => {
    const [x0, y0] = pt(140, i * 30), [x1, y1] = pt(140, i * 30 + 30), [x2, y2] = pt(118, i * 30 + 30), [x3, y3] = pt(118, i * 30);
    const [gx, gy] = pt(129, i * 30 + 15);
    g += `<g class="nw-hit" data-kind="sign" data-key="${k}" tabindex="0" role="button" aria-label="${escapeHtml(t.signNames[k])}"><path class="ws ws-${SIGN_META[k].element}" d="M${f(x0)},${f(y0)} A140,140 0 0 0 ${f(x1)},${f(y1)} L${f(x2)},${f(y2)} A118,118 0 0 1 ${f(x3)},${f(y3)} Z"/>`
       + `<text class="nw-sign" x="${f(gx)}" y="${f(gy)}">${SIGN_META[k].sym}</text></g>`;
  });
  for (let d = 0; d < 360; d += 5) { const [ax, ay] = pt(118, d), [bx, by] = pt(d % 10 ? 115 : 112, d); g += `<line class="nw-tick" x1="${f(ax)}" y1="${f(ay)}" x2="${f(bx)}" y2="${f(by)}"/>`; }
  g += `<circle class="nw-ring" r="118"/><circle class="nw-ring" r="58"/>`;
  if (chart.cusps) chart.cusps.forEach((c, i) => {
    const axis = i % 3 === 0, [ax, ay] = pt(axis ? 146 : 118, c), [bx, by] = pt(58, c);
    g += `<line class="nw-house${axis ? ' nw-axis' : ''}" x1="${f(ax)}" y1="${f(ay)}" x2="${f(bx)}" y2="${f(by)}"/>`;
    const next = chart.cusps[(i + 1) % 12], mid = c + norm360(next - c) / 2, [nx, ny] = pt(66, mid);
    g += `<g class="nw-hit" data-kind="house" data-key="${i}" tabindex="0" role="button" aria-label="${escapeHtml(t.natal.house)} ${i + 1}"><circle class="nw-hitzone" cx="${f(nx)}" cy="${f(ny)}" r="7"/><text class="nw-num" x="${f(nx)}" y="${f(ny)}">${i + 1}</text></g>`;
  });
  if (chart.asc !== null) for (const [lon, lab] of [[chart.asc, 'AC'], [chart.mc, 'MC']]) { const [x, y] = pt(150, lon); g += `<g class="nw-hit" data-kind="angle" data-key="${lab === 'AC' ? 'asc' : 'mc'}" tabindex="0" role="button" aria-label="${escapeHtml(lab === 'AC' ? t.natal.ascendant : t.natal.midheaven)}"><circle class="nw-hitzone" cx="${f(x)}" cy="${f(y)}" r="9"/><text class="nw-axis-lab" x="${f(x)}" y="${f(y)}">${lab}</text></g>`; }
  // Aspects (sauf conjonctions, déjà visibles côte à côte) entre les positions exactes
  const pos = Object.fromEntries(chart.bodies.map(b => [b.body, b.lon]));
  chart.aspects.forEach((a, idx) => {
    if (a.type === 'conjunction') return;
    const [x1, y1] = pt(56, pos[a.a]), [x2, y2] = pt(56, pos[a.b]), xy = `x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"`;
    // Trait fin visible + trait large invisible pour le toucher au doigt ; pas dans l'ordre de tabulation (la liste des aspects est lisible plus bas)
    g += `<g class="nw-hit nw-asp-g" data-kind="aspect" data-key="${idx}" data-a="${a.a}" data-b="${a.b}"><line class="nw-hitline" ${xy}/><line class="nw-asp ${a.type === 'trine' || a.type === 'sextile' ? 'nw-harm' : 'nw-tense'}" ${xy}/></g>`;
  });
  // Astres : repère à la position exacte, symbole écarté si plusieurs astres sont proches
  const sorted = [...chart.bodies].sort((a, b) => a.lon - b.lon), shown = sorted.map(b => b.lon);
  for (let pass = 0; pass < 3; pass++) for (let i = 1; i < shown.length; i++) if (shown[i] - shown[i - 1] < 8) shown[i] = shown[i - 1] + 8;
  sorted.forEach((b, i) => {
    const [ax, ay] = pt(118, b.lon), [bx, by] = pt(108, b.lon), [px, py] = pt(97, shown[i]);
    g += `<g class="nw-hit nw-pl" data-kind="body" data-key="${b.body}" tabindex="0" role="button" aria-label="${escapeHtml(t.rulers[b.body])}"><line class="nw-ptick" x1="${f(ax)}" y1="${f(ay)}" x2="${f(bx)}" y2="${f(by)}"/><circle class="nw-hitzone" cx="${f(px)}" cy="${f(py)}" r="8"/><text class="nw-planet" x="${f(px)}" y="${f(py)}">${PLANET_SYM[b.body]}</text></g>`;
  });
  return `<svg class="natal-svg" viewBox="-156 -156 312 312" role="img" aria-label="${t.natal.title}">${g}</svg>`;
}

function natalHtml(t){
  const n = t.natal, date = parseISODate(currentDate), time = parseTime(currentTime), place = birthPlace(currentBirthPlace);
  const chart = natalChart(date, time, place);
  currentChart = chart;
  const sun = chart.bodies[0], moon = chart.bodies[1];
  const chip = (sym, label, sign) => `<div class="big-chip"><span class="big-sym" aria-hidden="true">${sym}</span><span class="big-label">${label}</span><span class="big-sign">${signTag(t, sign)}</span></div>`;
  const notes = [];
  if (!chart.exact) notes.push(!time && !place ? n.needBoth : !time ? n.needTime : n.needPlace);
  if (!time) notes.push(n.noonMoon);
  if (chart.exact) notes.push(`${n.tzNote} ${chart.system === 'placidus' ? n.placidus : n.equal}`);
  const signCell = lon => `<span class="nt-sign">${signTag(t, signFromLongitude(lon))}</span> <span class="nt-deg">${ltr(degMin(lon))}</span>`;
  const rows = chart.bodies.map(b => `<tr><td class="nt-sym" aria-hidden="true">${PLANET_SYM[b.body]}</td><td>${t.rulers[b.body]}</td>
      <td>${signCell(b.lon)}</td><td class="nt-house">${b.house || ''}</td><td class="nt-retro">${b.retro ? '℞' : ''}</td></tr>`).join('');
  const angles = chart.exact ? [[n.ascendant, chart.asc, 'AC'], [n.midheaven, chart.mc, 'MC']].map(([lab, lon, ab]) =>
      `<tr class="nt-angle"><td class="nt-sym">${ab}</td><td>${lab}</td><td>${signCell(lon)}</td><td></td><td></td></tr>`).join('') : '';
  const head = chart.exact ? `<thead><tr><th></th><th></th><th></th><th class="nt-house">${n.house}${infoBtn('houses', n.house)}</th><th></th></tr></thead>` : '';
  const lines = chart.bodies.map(b => `<li><div class="nl-head"><span class="nl-sym" aria-hidden="true">${PLANET_SYM[b.body]}</span> <strong>${t.rulers[b.body]}</strong> · ${signTag(t, b.sign)}${b.house ? ` · ${n.house} ${b.house}` : ''}</div>
      <p>${capitalize(n.domains[b.body])} — ${n.styles[b.sign]}${b.house ? ` — ${n.house} ${b.house} (${n.houses[b.house - 1]})` : ''}${endPunct()}</p></li>`).join('');
  const nf = new Intl.NumberFormat(loc(currentLang), { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const aspects = chart.aspects.slice(0, 14).map(a => `<li><span class="na-pair"><span aria-hidden="true">${PLANET_SYM[a.a]}</span> ${t.rulers[a.a]} <span class="na-sym" aria-hidden="true">${ASPECT_SYM[a.type]}</span> <span aria-hidden="true">${PLANET_SYM[a.b]}</span> ${t.rulers[a.b]}</span>
      <span class="na-type">${n.aspectNames[a.type]} · ${ltr(nf.format(a.orb) + '°')}</span><span class="na-mean">${n.aspectMeanings[a.type]}</span></li>`).join('');
  const ascSign = chart.exact ? signFromLongitude(chart.asc) : null, mcSign = chart.exact ? signFromLongitude(chart.mc) : null;
  return `<div class="card natal-main">
        <h3>${n.title}${infoBtn('natalChart', n.title)}</h3>
        <div class="big-three">${chip(PLANET_SYM.sun, t.rulers.sun, sun.sign)}${chip(PLANET_SYM.moon, t.rulers.moon, moon.sign)}${ascSign ? chip('AC', n.ascendant, ascSign) : ''}</div>
        ${notes.map(x => `<p class="natal-note">${x}</p>`).join('')}
        ${chart.exact ? '' : `<button type="button" class="btn-secondary natal-complete" id="natalComplete">${n.completeFields}</button>`}
        <div class="natal-grid">
          <div class="natal-wheel">${natalWheelSvg(chart, t)}<p class="wheel-hint">${n.wheelHint}</p></div>
          <div class="natal-table"><h4>${n.positions}</h4><table>${head}<tbody>${rows}${angles}</tbody></table></div>
        </div>
      </div>
      <div class="card natal-reading">
        <h3>${n.reading}</h3>
        <p class="natal-legend">${n.legend}</p>
        ${ascSign ? `<div class="natal-asc"><h4>${n.ascendant} · ${signTag(t, ascSign)}${infoBtn('ascendant', n.ascendant)}</h4><p>${n.asc[ascSign]}</p>
          <h4>${n.midheaven} · ${signTag(t, mcSign)}${infoBtn('midheaven', n.midheaven)}</h4><p>${n.mcText}</p></div>` : ''}
        <ul class="natal-lines">${lines}</ul>
      </div>
      <div class="card natal-aspects">
        <h3>${n.aspects}${infoBtn('aspects', n.aspects)}</h3>
        ${aspects ? `<ul class="natal-asp-list">${aspects}</ul>` : `<p class="natal-note">${n.noAspects}</p>`}
      </div>`;
}

/* ============================================================
   NUMÉROLOGIE (troisième onglet) — cycles personnels à la date de lecture de l'horoscope
   ============================================================ */
function renderNumbers(){
  const el = document.getElementById('numbersBody'), birth = parseISODate(currentDate), on = parseISODate(skyDate || todayISO());
  if (!el || !birth || !on) return;
  const t = I18N[currentLang], u = t.num;
  const tags = n => `<div class="traits">${u.numbers[n].keywords.map(k => `<span class="trait-tag">${k}</span>`).join('')}</div>`;
  const item = (label, desc, n) => `<div class="num-item">
      <div class="num-head"><span class="num-value">${n}</span><div><div class="num-label">${label}</div><div class="num-desc">${desc}</div></div></div>
      ${MASTER_NUMBERS.includes(n) ? `<span class="num-master">${u.master}</span>` : ''}${tags(n)}<p class="num-text">${u.numbers[n].text}</p></div>`;
  const cy = personalCycles(birth, on), nm = nameNumbers(currentName);
  const cycle = (label, n, text) => `<div class="num-cycle"><span class="num-value small">${n}</span><div><div class="num-label">${label}</div><p class="num-text">${text}</p></div></div>`;
  const onLabel = new Intl.DateTimeFormat(loc(currentLang), { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(on.y, on.m - 1, on.d));
  let names;
  if (!currentName) names = `<p class="num-missing">${u.nameMissing}</p>`;
  else if (!nm) names = `<p class="num-missing">${u.nameScript}</p>`;
  else names = `<p class="sky-sub">${escapeHtml(currentName)}${nm.abjadTotal ? ` · ${u.abjad.replace('{v}', new Intl.NumberFormat(loc(currentLang)).format(nm.abjadTotal))}` : ''}</p>
      <div class="num-grid">${item(u.expression, u.expressionDesc, nm.expression)}${nm.soul ? item(u.soul, u.soulDesc, nm.soul) : ''}${nm.personality ? item(u.personality, u.personalityDesc, nm.personality) : ''}</div>`;
  el.innerHTML = `
    <div class="card num-card"><h3>${u.dateCard}${infoBtn('numerology', u.tab)}</h3>${item(u.lifePath, u.lifePathDesc, lifePath(birth))}</div>
    <div class="card num-card"><h3>${u.cyclesCard}${infoBtn('personalYear', u.cyclesCard)}</h3><p class="sky-sub">${onLabel}</p>
      <div class="num-cycles">${cycle(u.personalYear, cy.year, u.years[cy.year - 1])}${cycle(u.personalMonth, cy.month, u.numbers[cy.month].keywords.join(' · '))}${cycle(u.personalDay, cy.day, u.numbers[cy.day].keywords.join(' · '))}</div></div>
    <div class="card num-card"><h3>${u.nameCard}</h3>${names}</div>
    <p class="sky-note">${u.note}</p>`;
}

/* ============================================================
   TAROT (quatrième onglet) — carte de naissance et carte du jour (date de lecture de l'horoscope)
   ============================================================ */
/* Tirage à trois cartes : mémorisé pour la journée et pour la personne ; vide tant qu'on n'a pas tiré */
function currentSpread(){
  try {
    const s = JSON.parse(store.get('zodiac_spread') || 'null');
    return s && s.day === todayISO() && s.birth === currentDate && Array.isArray(s.cards) && s.cards.length === 3 && s.cards.every(k => TAROT_KEYS.includes(k)) ? s.cards : null;
  } catch { return null; }
}
function spreadHtml(t, deck){
  const u = t.tarot, cards = currentSpread();
  const pos = [u.spreadPast, u.spreadPresent, u.spreadFuture];
  const body = cards ? `<div class="spread-row">${cards.map((key, i) => {
      const name = tarotName(t, key, deck), num = tarotNumeral(key, deck);
      return `<div class="spread-slot"><div class="spread-pos">${pos[i]}</div><div class="spread-visual">${tarotCardSvg(key, deck, name)}</div>
        <div class="tarot-title">${num ? `<span class="tarot-num">${num}</span> ` : ''}${escapeHtml(name)}</div>
        <div class="traits">${u.cards[key].keywords.map(k => `<span class="trait-tag">${k}</span>`).join('')}</div>
        <p class="num-text">${u.cards[key].text}</p></div>`;
    }).join('')}</div><p class="sky-note">${u.spreadNote}</p>` : '';
  return `<div class="card spread-card"><h3>${u.spreadTitle}${infoBtn('spread', u.spreadTitle)}</h3>
    ${cards ? '' : `<p class="sky-sub">${u.spreadIntro}</p>`}${body}
    <div class="spread-actions"><button type="button" class="btn-reveal" id="spreadDraw">${cards ? u.spreadAgain : u.spreadDraw}</button></div></div>`;
}
function tarotName(t, key, deck){ return deck === 'marseille' && t.tarot.marseilleNames[key] ? t.tarot.marseilleNames[key] : t.tarot.cards[key].name; }
function renderTarot(){
  const el = document.getElementById('tarotBody'), birth = parseISODate(currentDate), on = skyDate || todayISO(), d = parseISODate(on);
  if (!el || !birth || !d) return;
  const t = I18N[currentLang], u = t.tarot, deck = tarotDeck;
  const slot = (key, title, desc) => {
    const name = tarotName(t, key, deck), num = tarotNumeral(key, deck);
    return `<div class="card tarot-slot"><h3>${title}</h3><p class="sky-sub">${desc}</p>
      <div class="tarot-body"><div class="tarot-visual">${tarotCardSvg(key, deck, name)}</div>
        <div class="tarot-text"><div class="tarot-title">${num ? `<span class="tarot-num">${num}</span> ` : ''}${escapeHtml(name)}</div>
          <div class="traits">${u.cards[key].keywords.map(k => `<span class="trait-tag">${k}</span>`).join('')}</div>
          <p class="num-text">${u.cards[key].text}</p></div></div></div>`;
  };
  const dLabel = new Intl.DateTimeFormat(loc(currentLang), { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(d.y, d.m - 1, d.d));
  el.innerHTML = `
    <div class="tarot-deck" role="group" aria-label="${escapeHtml(u.deck)}"><span class="tarot-deck-label">${u.deck}${infoBtn('tarot', u.tab)}</span>
      ${TAROT_DECKS.map(k => `<button type="button" class="deck-btn" data-deck="${k}" aria-pressed="${k === deck}">${u.decks[k]}</button>`).join('')}</div>
    <div class="tarot-pair">${slot(tarotByNumber(birthCardNumber(birth), deck), u.birthCard, u.birthCardDesc)}${slot(dayCardKey(currentDate, on), u.dayCard, u.dayCardDesc.replace('{d}', dLabel))}</div>
    ${spreadHtml(t, deck)}
    <p class="sky-note">${u.note}</p>`;
  const drawBtn = el.querySelector('#spreadDraw');
  if (drawBtn) drawBtn.addEventListener('click', () => {
    store.set('zodiac_spread', JSON.stringify({ day: todayISO(), birth: currentDate, cards: drawCards(3) }));
    renderTarot();
    const again = document.getElementById('spreadDraw'); if (again) again.focus();
  });
  el.querySelectorAll('.deck-btn').forEach(b => b.addEventListener('click', () => {
    tarotDeck = b.dataset.deck; store.set('zodiac_deck', tarotDeck); renderTarot();
    el.querySelector(`.deck-btn[data-deck="${tarotDeck}"]`).focus();
  }));
}

/* Bascule entre les vues, sans recalcul ; le choix est retenu pour les recherches suivantes */
function setView(mode, focus){
  viewMode = mode;
  store.set('zodiac_view', mode);
  for (const [tab, panel, m] of [['tabSigns', 'viewSigns', 'signs'], ['tabNatal', 'viewNatal', 'natal'], ['tabSky', 'viewSky', 'sky'], ['tabCompat', 'viewCompat', 'compat'], ['tabNumbers', 'viewNumbers', 'numbers']]) {
    const tb = document.getElementById(tab), pn = document.getElementById(panel);
    if (!tb) continue;
    tb.setAttribute('aria-selected', String(m === mode)); tb.tabIndex = m === mode ? 0 : -1;
    pn.hidden = m !== mode;
    if (focus && m === mode) tb.focus();
  }
}

/* ============================================================
   COMPATIBILITÉ À DEUX
   ============================================================ */
let pairState = null;    // { name, date: "AAAA-MM-JJ", time: "HH:MM" ou "" } — en mémoire seulement, jamais enregistré

function compatCardHtml(t){
  const p = pairState || { name: '', date: '', time: '', place: '' }, q = t.pair;
  return `<section class="card compat-card" aria-labelledby="pairTitle">
      <h3 id="pairTitle">${q.title}${infoBtn('compat', q.title)}</h3>
      <div class="compat-form">
        <div class="field"><label for="pairName">${q.partnerName} <span class="opt">${t.optional}</span></label>
          <input type="text" id="pairName" maxlength="40" spellcheck="false" autocomplete="off" value="${escapeHtml(p.name)}"></div>
        <div class="field"><label for="pairDate">${q.partnerDate}</label><input type="date" id="pairDate" value="${p.date}"></div>
        <div class="field field-time"><label for="pairTime">${q.partnerTime} <span class="opt">${t.optional}</span></label>
          <input type="time" id="pairTime" value="${p.time}"></div>
        <div class="field field-place"><label for="pairPlace">${q.partnerPlace} <span class="opt">${t.optional}</span></label>
          <div class="place-box">
            <input type="text" id="pairPlace" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="pairPlaceList" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(t.placePlaceholder)}">
            <button type="button" class="place-clear" id="pairPlaceClear" hidden aria-label="${escapeHtml(t.placeClear)}">×</button>
            <ul class="place-list" id="pairPlaceList" role="listbox" hidden></ul>
          </div></div>
        <button type="button" class="btn-reveal" id="pairBtn">${q.compare}</button>
      </div>
      <p class="pair-error hidden" id="pairError" role="alert"></p>
      <div id="pairBody" aria-live="polite"></div>
    </section>`;
}

function renderCompat(){
  const el = document.getElementById('pairBody');
  if (!el) return;
  if (!pairState || !currentDate) { el.innerHTML = ''; return; }
  const t = I18N[currentLang], q = t.pair;
  const me = { date: parseISODate(currentDate), time: parseTime(currentTime), tz: birthTz() };
  const op = birthPlace(pairState.place);
  const other = { date: parseISODate(pairState.date), time: parseTime(pairState.time), tz: op ? op.tz : null };
  const c = compatibility(me, other);
  const nameA = escapeHtml(currentName || q.you), nameB = escapeHtml(pairState.name || q.other);
  const cnA = chineseYearInfo(me.date), cnB = chineseYearInfo(other.date);
  const chip = (name, sign, cn) => `<div class="pair-person"><div class="pair-name">${name}</div>
      <div class="pair-signs"><span aria-hidden="true">${SIGN_META[sign].sym}</span> ${t.signNames[sign]}${cn ? ` · <span aria-hidden="true">${CN_META[cn.animal].glyph}</span> ${t.cn.names[cn.animal]}` : ''}</div></div>`;
  const nf = new Intl.NumberFormat(loc(currentLang), { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const axis = (title, symA, symB, nmA, nmB, score, text, badge) => `<div class="pair-axis">
      <h4>${title}</h4>
      <div class="pair-line"><span><span aria-hidden="true">${symA}</span> ${nmA} + <span aria-hidden="true">${symB}</span> ${nmB}</span>
        <span class="aff-stars" aria-label="${score}/5">${starHtml(score)}</span></div>
      <p>${text}</p>${badge ? `<span class="modal-element">${badge}</span>` : ''}</div>`;
  const elA = SIGN_META[c.west.a].element, elB = SIGN_META[c.west.b].element;
  let axes = axis(q.western, SIGN_META[c.west.a].sym, SIGN_META[c.west.b].sym, t.signNames[c.west.a], t.signNames[c.west.b], c.west.score,
    t.compat.pairs[compatKey(elA, elB)], `${t.elements[elA]} × ${t.elements[elB]}`);
  axes += c.cn
    ? axis(q.chinese, CN_META[c.cn.a].glyph, CN_META[c.cn.b].glyph, t.cn.names[c.cn.a], t.cn.names[c.cn.b], c.cn.score, t.cn.relations[c.cn.rel], t.cn.relationNames[c.cn.rel])
    : `<div class="pair-axis"><h4>${q.chinese}</h4><p>${t.cn.outOfRange}</p></div>`;
  if (c.moon) {
    const mA = SIGN_META[c.moon.a].element, mB = SIGN_META[c.moon.b].element;
    axes += axis(q.moon, `☽${SIGN_META[c.moon.a].sym}`, `☽${SIGN_META[c.moon.b].sym}`, t.signNames[c.moon.a], t.signNames[c.moon.b], c.moon.score,
      t.compat.pairs[compatKey(mA, mB)], `${t.elements[mA]} × ${t.elements[mB]}`);
  } else axes += `<div class="pair-axis"><h4>${q.moon}</h4><p>${q.moonUnknown}</p></div>`;
  // Synastrie : aspects entre les planètes des deux thèmes natals
  const n = t.natal, bare = s => s.replace(/\s*[（(][^()（）]*[)）]\s*$/, '');
  const syn = synastry(natalPoints(natalChart(me.date, me.time, birthPlace(currentBirthPlace)), !!me.time),
                       natalPoints(natalChart(other.date, other.time, op), !!other.time));
  const pName = p => p === 'asc' ? n.ascendant : t.rulers[p], pSym = p => p === 'asc' ? 'AC' : PLANET_SYM[p];
  const pDomain = p => bare(p === 'asc' ? n.houses[0] : n.domains[p]);
  const synLine = x => `<li><div class="syn-pair"><span aria-hidden="true">${pSym(x.a)}</span> <strong>${pName(x.a)}</strong> <span class="sub">${nameA}</span>
      <span class="syn-asp"><span aria-hidden="true">${ASPECT_SYM[x.type]}</span> ${n.aspectNames[x.type]}</span>
      <span aria-hidden="true">${pSym(x.b)}</span> <strong>${pName(x.b)}</strong> <span class="sub">${nameB}</span></div>
      <p>${pDomain(x.a)} ↔ ${pDomain(x.b)}</p></li>`;
  const synCol = (title, cls, list) => `<div class="syn-col ${cls}"><h5>${title}</h5>${list.length ? `<ul>${list.slice(0, 5).map(synLine).join('')}</ul>` : `<p class="sky-none">${q.synNone}</p>`}</div>`;
  const synHtml = `<div class="syn">
      <h4>${q.synTitle}${infoBtn('synastry', q.synTitle)}</h4>
      <p class="syn-balance">${q.synBalance.replace('{h}', syn.harmony.length).replace('{t}', syn.tension.length)}</p>
      <div class="syn-cols">${synCol(q.synHarmony, 'good', syn.harmony)}${synCol(q.synTension, 'bad', syn.tension)}</div>
      ${!me.time || !other.time ? `<p class="sky-note">${q.synNote}</p>` : ''}
    </div>`;
  const rounded = Math.round(c.avg);
  el.innerHTML = `
    <div class="pair-head">${chip(nameA, c.west.a, cnA)}<span class="pair-x" aria-hidden="true">×</span>${chip(nameB, c.west.b, cnB)}</div>
    <div class="pair-global">
      <span class="pair-global-label">${q.global}</span>
      <span class="modal-stars" aria-label="${nf.format(c.avg)}/5">${starHtml(rounded)}</span>
      <span class="pair-score">${nf.format(c.avg)} / 5</span>
      <span class="modal-level">${t.compat.levels[rounded]}</span>
    </div>
    <div class="pair-axes">${axes}</div>
    ${synHtml}
    <p class="sky-note">${q.note}</p>`;
}

function bindCompat(){
  const t = I18N[currentLang], err = document.getElementById('pairError');
  const run = () => {
    const date = document.getElementById('pairDate').value;
    err.classList.add('hidden');
    if (!date) { err.textContent = t.pair.noDate; err.classList.remove('hidden'); return; }
    if (!parseISODate(date)) { err.textContent = t.pair.invalid; err.classList.remove('hidden'); return; }
    if (!pairField.resolve()) { err.textContent = t.placeUnknown; err.classList.remove('hidden'); return; }
    const time = document.getElementById('pairTime').value;
    pairState = { name: document.getElementById('pairName').value.trim(), date, time: parseTime(time) ? time.slice(0, 5) : '', place: pairField.key };
    renderCompat();
  };
  pairField = makePlaceField('pairPlace', 'pairPlaceList', 'pairPlaceClear', run);
  if (pairState && pairState.place) pairField.set(pairState.place);
  document.getElementById('pairBtn').addEventListener('click', run);
  ['pairName', 'pairDate', 'pairTime'].forEach(id => document.getElementById(id).addEventListener('keydown', e => { if (e.key === 'Enter') run(); }));
  renderCompat();
}

/* ============================================================
   CARTE DU CIEL
   ============================================================ */
let mapMinutes = null;   // minutes après midi (heure locale) du jour de lecture ; null = choix automatique
let skyCache = null;     // étoiles et tracés ramenés à l'équinoxe de la date de lecture

/* Lieu d'observation : choix enregistré, sinon ville par défaut de la langue */
function currentPlace(){
  let saved = null;
  try { saved = JSON.parse(store.get('zodiac_place') || 'null'); } catch (e) {}
  if (saved && Number.isFinite(saved.lat) && Number.isFinite(saved.lon)) return saved;
  const c = CITIES.find(x => x[0] === DEFAULT_CITY[currentLang]) || CITIES[0];
  return { kind: 'city', name: c[0], lat: c[2], lon: c[3] };
}
function regionName(code){
  try { return new Intl.DisplayNames([loc(currentLang)], { type: 'region' }).of(code); } catch (e) { return code; }
}
/* Par défaut : l'heure actuelle si l'on regarde aujourd'hui après midi, sinon 22:00 */
/* Fuseau du lieu d'observation : celui de la ville choisie ; null (appareil) pour « Ma position » */
function mapTz(place){
  if (place.kind !== 'city') return null;
  const c = CITIES.find(x => x[0] === place.name);
  return c ? c[4] : null;
}
/* Curseur : minutes après midi (heure locale du lieu) ; par défaut « maintenant » si on est dans la nuit affichée, sinon 22 h */
function defaultMapMinutes(){
  const date = parseISODate(skyDate);
  if (!date) return 600;
  const m = (Date.now() - localInstant(date, 12, 0, mapTz(currentPlace()))) / 60000;
  return m >= 0 && m < 1440 ? Math.round(m / 10) * 10 : 600;
}
function placeOptions(t){
  const p = currentPlace();
  const geo = p.kind === 'geo' ? `<option value="geo" selected>${t.map.myPosition}</option>` : '';
  return geo + CITIES.map((c, i) => `<option value="${i}"${p.kind === 'city' && p.name === c[0] ? ' selected' : ''}>${c[0]} (${regionName(c[1])})</option>`).join('');
}

function renderMap(){
  const svg = document.getElementById('skySvg'), side = document.getElementById('mapSide');
  const date = parseISODate(skyDate);
  if (!svg || !side || !date) return;
  const t = I18N[currentLang], m = t.map, R = 100, f = v => v.toFixed(1);
  if (mapMinutes === null) mapMinutes = defaultMapMinutes();
  document.getElementById('mapTime').value = mapMinutes;
  const tz = mapTz(currentPlace());
  const ms = localInstant(date, 12, 0, tz) + mapMinutes * 60000;
  const T = julianCenturies(ms), eps = obliquity(T);
  const place = currentPlace(), lat = place.lat, lon = place.lon;

  // Étoiles et tracés ramenés à la date (la précession ne bouge pas en une nuit : calcul une fois par date)
  if (!skyCache || skyCache.key !== skyDate) {
    const stars = [];
    for (let i = 0; i < STARS.length; i += 4) stars.push([...precessFromJ2000(STARS[i], STARS[i + 1], T), STARS[i + 2], STARS[i + 3]]);
    const lines = {};
    for (const id in CONSTELLATION_LINES) lines[id] = CONSTELLATION_LINES[id].map(poly => {
      const pts = []; for (let i = 0; i < poly.length; i += 2) pts.push(precessFromJ2000(poly[i], poly[i + 1], T)); return pts;
    });
    const labels = {};
    for (const id in CONSTELLATION_LABELS) labels[id] = precessFromJ2000(...CONSTELLATION_LABELS[id], T);
    skyCache = { key: skyDate, stars, lines, labels };
  }
  const proj = (ra, dec) => { const h = altAz(ra, dec, lat, lon, ms); return h.alt > 0 ? projectSky(h.alt, h.az, R) : null; };
  const pathOf = pts => { let d = '', open = false; for (const p of pts) { const q = proj(p[0], p[1]); if (q) { d += `${open ? 'L' : 'M'}${f(q[0])},${f(q[1])}`; open = true; } else open = false; } return d; };
  const sun = bodyAltAz('sun', lat, lon, ms), day = sun.alt > -6;

  let out = `<circle class="sky-bg" r="${R}"/>`;
  for (const a of [30, 60]) out += `<circle class="alt-ring" r="${f(R * Math.tan((90 - a) * DEG / 2))}"/>`;
  for (const id in skyCache.lines) {
    const sign = ZODIAC_CONSTELLATIONS[id];
    const cls = sign ? (sign === currentSignKey ? 'cl cl-mine' : 'cl cl-zod') : 'cl';
    const d = skyCache.lines[id].map(pathOf).join('');
    if (d) out += `<path class="${cls}" d="${d}"/>`;
  }
  const ecl = []; for (let l = 0; l <= 360; l += 3) ecl.push(eclToEq(l, 0, eps));
  const de = pathOf(ecl); if (de) out += `<path class="ecl" d="${de}"/>`;
  for (const [ra, dec, mag, bv] of skyCache.stars) {
    const q = proj(ra, dec); if (!q) continue;
    const cls = bv < 0 ? 'st-b' : bv < 0.5 ? 'st-w' : bv < 1 ? 'st-y' : 'st-o';
    out += `<circle class="st ${cls}" cx="${f(q[0])}" cy="${f(q[1])}" r="${Math.max(0.4, 2.1 - 0.38 * mag).toFixed(2)}"/>`;
  }
  for (const id in skyCache.labels) {
    const q = proj(...skyCache.labels[id]); if (!q) continue;
    const sign = ZODIAC_CONSTELLATIONS[id];
    const name = sign ? t.signNames[sign] : m.constellations[id];
    const cls = sign ? (sign === currentSignKey ? 'lbl lbl-zod lbl-mine' : 'lbl lbl-zod') : 'lbl';
    out += `<text class="${cls}" x="${f(q[0])}" y="${f(q[1])}">${name}</text>`;
  }
  const local = new Date(ms), localDate = { y: local.getFullYear(), m: local.getMonth() + 1, d: local.getDate() };
  const active = activeShowers(localDate);
  for (const k of active) {
    const q = proj(...METEOR_SHOWERS[k].radiant);
    if (q) out += `<text class="radiant" x="${f(q[0])}" y="${f(q[1])}">✶ ${m.showers[k]}</text>`;
  }
  const SHOWN = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'];
  const pos = {};
  for (const b of SHOWN) {
    const h = bodyAltAz(b, lat, lon, ms); pos[b] = h;
    if (h.alt <= 0) continue;
    const [x, y] = projectSky(h.alt, h.az, R), r = b === 'sun' || b === 'moon' ? 3 : 1.6;
    out += `<circle class="pl-dot pl-${b}" cx="${f(x)}" cy="${f(y)}" r="${r}"/><text class="pl-txt" x="${f(x + r + 1)}" y="${f(y + 1.7)}">${PLANET_SYM[b]} ${t.rulers[b]}</text>`;
  }
  [[0, 0, -R - 7], [2, -R - 7, 0], [4, 0, R + 7], [6, R + 7, 0]].forEach(([i, x, y]) => { out += `<text class="dir" x="${x}" y="${y}">${m.directions[i]}</text>`; });
  svg.innerHTML = out;
  svg.classList.toggle('daylight', day);

  // Panneau latéral
  const when = new Intl.DateTimeFormat(loc(currentLang), { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', ...(tz ? { timeZone: tz } : {}) }).format(local);
  document.getElementById('mapTimeOut').textContent = when;
  const nf = new Intl.NumberFormat(loc(currentLang), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const coords = `${ltr(nf.format(Math.abs(lat)) + '°')} ${lat >= 0 ? m.directions[0] : m.directions[4]} · ${ltr(nf.format(Math.abs(lon)) + '°')} ${lon >= 0 ? m.directions[2] : m.directions[6]}`;
  const visible = SHOWN.filter(b => b !== 'sun' && pos[b].alt > 0).map(b => {
    const icon = b === 'moon' ? MOON_PHASE_EMOJI[moonPhase(ms).index] : PLANET_SYM[b];
    return `<li><span class="map-sym" aria-hidden="true">${icon}</span> ${t.rulers[b]} <span class="sub">· ${ltr(Math.round(pos[b].alt) + '°')} · ${m.directions[compassIndex(pos[b].az)]}</span></li>`;
  }).join('');
  const peakFmt = new Intl.DateTimeFormat(loc(currentLang), { day: 'numeric', month: 'long' });
  const peakDate = (y, mo, d) => peakFmt.format(new Date(y, mo - 1, d, 12));
  let meteors;
  if (active.length) meteors = active.map(k => {
    const s = METEOR_SHOWERS[k];
    return `<li>✶ ${m.showers[k]} <span class="sub">· ${m.meteorActive.replace('{d}', peakDate(localDate.y, ...s.peak)).replace('{zhr}', s.zhr)}</span></li>`;
  }).join('');
  else { const n = nextShowerPeak(localDate); meteors = `<li>${m.meteorNext.replace('{name}', m.showers[n.key]).replace('{d}', peakDate(n.date.y, n.date.m, n.date.d))}</li>`; }
  const eFmt = new Intl.DateTimeFormat(loc(currentLang), { day: 'numeric', month: 'short', year: 'numeric', ...(tz ? { timeZone: tz } : {}) });
  let solarSeen = false;
  const eclipses = nextEclipses(ms, 3).map(e => {
    let where;
    if (e.solar) { const r = eclipseLocal(e.ms, lat, lon); solarSeen = solarSeen || !!(r && r.visible); where = solarLocalText(r, m, tz); }
    else where = lunarEclipseVisible(e.ms, lat, lon) ? m.visibleHere : m.notVisibleHere;
    return `<li>${m.eclipseTypes[e.type]} <span class="sub">· ${eFmt.format(new Date(e.ms))} · ${where}</span></li>`;
  }).join('');
  side.innerHTML = `
    <p class="map-place">${place.kind === 'geo' ? m.myPosition : `${place.name} (${regionName((CITIES.find(c => c[0] === place.name) || [])[1] || '')})`}<br><span class="sub">${coords}</span></p>
    ${day ? `<p class="map-day">${m.daylight}</p>` : ''}
    <h4>${day ? m.aboveHorizon : m.visibleNow}</h4><ul class="map-list">${visible || `<li class="sub">${m.noneVisible}</li>`}</ul>
    <h4>${m.meteors}</h4><ul class="map-list">${meteors}</ul>
    ${eclipses ? `<h4>${m.eclipses}${infoBtn('solarEclipse', m.eclipses)}</h4><ul class="map-list">${eclipses}</ul>` : ''}
    ${solarSeen ? `<p class="ecl-safety">${m.eclSafety}</p>` : ''}`;
  renderNight();
}

/* ============================================================
   OBSERVER LE CIEL CETTE NUIT (même lieu et même date que la carte du ciel)
   ============================================================ */
let nightCache = null;
let natalTransitCache = null;
const eclipseCache = new Map();
function eclipseLocal(ms, lat, lon){
  const key = `${ms}|${lat}|${lon}`;
  if (!eclipseCache.has(key)) eclipseCache.set(key, solarEclipseLocal(ms, lat, lon));
  return eclipseCache.get(key);
}
/* Heure locale du lieu observé (fuseau de la ville ; appareil pour « Ma position ») */
function placeTime(ms, tz){
  return ms ? new Intl.DateTimeFormat(loc(currentLang), { hour: '2-digit', minute: '2-digit', ...(tz ? { timeZone: tz } : {}) }).format(new Date(ms)) : '—';
}
/* Durée en minutes et secondes, unités dans la langue (« 2 min 3 s ») */
function formatDuration(sec){
  const l = loc(currentLang), m = Math.floor(sec / 60), s = Math.round(sec % 60);
  const u = (v, unit) => new Intl.NumberFormat(l, { style: 'unit', unit, unitDisplay: 'short' }).format(v);
  return m ? `${u(m, 'minute')} ${u(s, 'second')}` : u(s, 'second');
}
/* Éclipse de Soleil vue du lieu, en une ligne */
function solarLocalText(r, m, tz){
  if (!r || !r.visible) return m.notVisibleHere;
  const pctValue = r.kind === 'partial' && r.obscuration > 0.99 ? Math.floor(r.obscuration * 1000) / 1000 : r.obscuration;
  const pct = new Intl.NumberFormat(loc(currentLang), { style: 'percent', maximumFractionDigits: pctValue > 0.99 && pctValue < 1 ? 1 : 0 }).format(pctValue);
  const fill = tpl => tpl.replace('{pct}', pct).replace('{a}', placeTime(r.start, tz)).replace('{b}', placeTime(r.end, tz))
    .replace('{m}', placeTime(r.kind === 'partial' ? r.max : (r.central.start + r.central.end) / 2, tz))
    .replace('{dur}', r.central ? formatDuration((r.central.end - r.central.start) / 1000) : '');
  let txt = fill(r.kind === 'total' ? m.eclTotal : r.kind === 'annular' ? m.eclAnnular : m.eclPartial);
  if (r.risesEclipsed) txt += ` · ${m.eclRises}`;
  if (r.setsEclipsed) txt += ` · ${m.eclSets}`;
  return txt;
}
function renderNight(){
  const el = document.getElementById('nightBody'), date = parseISODate(skyDate);
  if (!el || !date) return;
  const t = I18N[currentLang], n = t.night, place = currentPlace(), tz = mapTz(place);
  const from = localInstant(date, 12, 0, tz), key = `${from}|${place.lat}|${place.lon}`;
  if (!nightCache || nightCache.key !== key) nightCache = { key, plan: nightPlan(place.lat, place.lon, from) };
  const p = nightCache.plan, hm = ms => placeTime(ms, tz), dirs = t.map.directions;
  const item = (label, value) => `<div class="night-item"><span class="night-label">${label}</span><span class="night-value">${value}</span></div>`;
  const parts = [];
  if (p.polarDay) parts.push(`<p class="night-msg">${n.polarDay}</p>`);
  else if (p.polarNight) parts.push(`<p class="night-msg">${n.polarNight}</p>`);
  const sunItems = [];
  if (p.sunset) sunItems.push(item(`<span aria-hidden="true">☀︎</span> ${n.sunset}`, hm(p.sunset)));
  if (p.astroDusk) sunItems.push(item(n.dark, `${hm(p.astroDusk)} → ${hm(p.astroDawn)}`));
  if (p.sunrise) sunItems.push(item(`<span aria-hidden="true">☀︎</span> ${n.sunrise}`, hm(p.sunrise)));
  const lit = new Intl.NumberFormat(loc(currentLang), { style: 'percent' }).format(p.moonPhase.illumination);
  const moonEvents = [[p.moonrise, n.moonrise], [p.moonset, n.moonset]].filter(e => e[0]).sort((a, b) => a[0] - b[0]).map(e => e[1].replace('{t}', hm(e[0])));
  const moonText = `<span aria-hidden="true">${MOON_PHASE_EMOJI[p.moonPhase.index]}</span> ${n.moonLit.replace('{pct}', lit)} · ${moonEvents.length ? moonEvents.join(' · ') : (p.moonUp ? n.moonAllNight : n.moonNone)}`;
  sunItems.push(item(n.moon, moonText));
  parts.push(`<div class="night-grid">${sunItems.join('')}</div>`);
  if (p.noAstroNight && !p.polarDay) parts.push(`<p class="night-msg">${n.noAstroNight}</p>`);
  const best = p.dark.filter(([a, b]) => b - a >= 20 * 60e3);
  if (!p.noAstroNight && !p.polarDay) parts.push(`<h4>${n.best}</h4><p class="night-best">${best.length ? best.map(([a, b]) => `${hm(a)} → ${hm(b)}`).join(' · ') : n.bestNone}</p>`);
  if (!p.polarDay) parts.push(`<h4>${n.planets}</h4>` + (p.planets.length
    ? `<ul class="night-planets">${p.planets.map(x => `<li><span class="map-sym" aria-hidden="true">${PLANET_SYM[x.body]}</span> ${t.rulers[x.body]} <span class="sub">· ${t.signNames[x.sign]} · ${hm(x.start)} → ${hm(x.end)} · ${dirs[compassIndex(x.az)]}</span></li>`).join('')}</ul>`
    : `<p class="night-best">${n.noPlanets}</p>`));
  el.innerHTML = parts.join('');
}

/* Branchements de la carte (appelés après chaque rendu du résultat) */
function bindMap(){
  const t = I18N[currentLang];
  const select = document.getElementById('mapPlace'), btn = document.getElementById('mapLocate');
  select.addEventListener('change', () => {
    if (select.value !== 'geo') {
      const c = CITIES[+select.value];
      store.set('zodiac_place', JSON.stringify({ kind: 'city', name: c[0], lat: c[2], lon: c[3] }));
    }
    renderMap();
  });
  btn.addEventListener('click', () => {
    const fail = () => { btn.textContent = t.map.locate; btn.disabled = false; showError(t.map.geoError); };
    if (!navigator.geolocation) return fail();
    btn.textContent = t.map.locating; btn.disabled = true;
    navigator.geolocation.getCurrentPosition(p => {
      store.set('zodiac_place', JSON.stringify({ kind: 'geo', lat: +p.coords.latitude.toFixed(2), lon: +p.coords.longitude.toFixed(2) }));
      select.innerHTML = placeOptions(t);
      btn.textContent = t.map.locate; btn.disabled = false;
      renderMap();
    }, fail, { timeout: 10000, maximumAge: 600000 });
  });
  let pending = false;
  document.getElementById('mapTime').addEventListener('input', e => {
    mapMinutes = +e.target.value;
    if (!pending) { pending = true; requestAnimationFrame(() => { pending = false; renderMap(); }); }
  });
  renderMap();
}

/* ============================================================
   5. MODALE COMPATIBILITÉ
   ============================================================ */
/* sys = 'west' (signes, affinités par éléments) ou 'cn' (animaux, relations traditionnelles) */
function openCompat(sys, other){
  const t = I18N[currentLang];
  lastFocus = document.activeElement;
  let own, score, sym, name, body;
  if (sys === 'cn') {
    own = currentCn.animal;
    const rel = cnRelation(own, other);
    score = CN_RELATION_SCORE[rel];
    sym = k => CN_META[k].glyph; name = k => t.cn.names[k];
    body = `<p>${t.cn.relations[rel]}</p><span class="modal-element">${t.cn.relationNames[rel]}</span>`;
  } else {
    own = currentSignKey;
    score = AFF[own][other];
    const el1 = SIGN_META[own].element, el2 = SIGN_META[other].element;
    sym = k => SIGN_META[k].sym; name = k => t.signNames[k];
    body = `<p>${t.compat.pairs[compatKey(el1, el2)] || ''}</p><span class="modal-element">${t.elements[el1]} × ${t.elements[el2]}</span>`;
  }
  const ov = document.getElementById('modalOverlay');
  document.getElementById('modalPair').innerHTML = `
    <span aria-hidden="true">${sym(own)}</span>
    <span class="plus" aria-hidden="true">+</span>
    <span aria-hidden="true">${sym(other)}</span>
  `;
  document.getElementById('modalTitle').textContent = `${name(own)} + ${name(other)}`;
  document.getElementById('modalStars').innerHTML = starHtml(score);
  document.getElementById('modalLevel').textContent = t.compat.levels[score];
  document.getElementById('modalBody').innerHTML = body;
  ov.classList.remove('hidden');
  ov.setAttribute('aria-hidden','false');
  document.getElementById('modalClose').focus();
}

function closeCompat(){
  const ov = document.getElementById('modalOverlay');
  ov.classList.add('hidden');
  ov.setAttribute('aria-hidden','true');
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  lastFocus = null;
}

/* ============================================================
   6. ACTIONS
   ============================================================ */
async function shareProfile(){
  const t = I18N[currentLang];
  const url = window.location.href;
  try {
    if (!navigator.clipboard) throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText(url);
    showToast(t.shareCopied);
  } catch (e) {
    window.prompt(t.btnShare, url);   // repli : l'utilisateur copie à la main
  }
}

async function exportImage(){
  closeInfo(false);   // pas de bulle ni de mise en avant de la roue dans l'image
  const t = I18N[currentLang];
  if (typeof html2canvas === 'undefined') {
    showToast(t.exportError);
    return;
  }
  const btn = document.getElementById('btnExport');
  const orig = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '⏳ ...';
  /* L'image reprend ce qui est affiché : double fiche, compatibilité (seulement si elle est renseignée),
     horoscope et carte du ciel. Chaque bloc est recopié dans un cadre de largeur exacte, avec une marge tout
     autour, puis mesuré avant la capture : la mise en page recalculée par html2canvas ne peut plus déborder
     (la barre de défilement de Windows décalait le rendu et rognait le bord droit et le bas). Les commandes
     (champs, boutons, curseur, menu des villes) sont retirées : html2canvas les dessine mal, et la date, le
     lieu et l'heure figurent déjà en texte. Le cadre reste « visible » pour que html2canvas recopie aussi
     les décorations ▲ ▼, mais il est enfermé dans un conteneur de taille nulle qui le masque à l'écran ;
     ce conteneur n'est ouvert que dans la copie d'export. */
  const src = document.getElementById('profileContent');
  const parts = [src];   // toutes les sections sont dans la zone des onglets ; seule la section affichée est visible
  const holder = document.createElement('div');
  holder.id = 'exportHolder';
  holder.setAttribute('aria-hidden', 'true');
  holder.style.cssText = 'position:absolute;left:0;top:0;width:0;height:0;overflow:hidden;pointer-events:none;';
  const frame = document.createElement('div');
  frame.style.cssText = `position:absolute;left:0;top:0;width:${Math.ceil(src.getBoundingClientRect().width)}px;`
    + `padding:32px;box-sizing:content-box;background:${getComputedStyle(document.documentElement).getPropertyValue('--export-bg').trim()};`;
  for (const part of parts) {
    const copy = part.cloneNode(true);
    copy.querySelectorAll('.compat-form, .pair-error, .sky-controls, .map-time input, .map-time label, .info-btn, .natal-complete, .wheel-hint, .spread-actions').forEach(n => n.remove());
    copy.querySelectorAll('[id]').forEach(n => n.removeAttribute('id'));
    copy.removeAttribute('id');
    frame.appendChild(copy);
  }
  const foot = document.createElement('p');
  foot.className = 'export-foot';
  foot.textContent = `✦ ${t.appTitle}`;
  frame.appendChild(foot);
  holder.appendChild(frame);
  document.body.appendChild(holder);
  try {
    const box = frame.getBoundingClientRect();
    const w = Math.ceil(box.width), h = Math.ceil(box.height);
    // Résolution ×2 si possible, réduite pour rester sous les limites des navigateurs
    // (≈ 16,7 millions de pixels sur iPhone et iPad, 32 767 pixels de haut)
    const scale = Math.max(0.5, Math.min(2, Math.sqrt(16e6 / (w * h)), 32000 / h));
    const canvas = await html2canvas(frame, {
      backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--export-bg').trim(),
      scale,
      logging: false,
      useCORS: true,
      x: 0, y: 0, scrollX: 0, scrollY: 0,
      width: w, height: h,
      windowWidth: window.innerWidth, windowHeight: window.innerHeight,
      onclone: doc => { const h = doc.getElementById('exportHolder'); h.style.overflow = 'visible'; h.style.width = 'auto'; h.style.height = 'auto'; }
    });
    const link = document.createElement('a');
    link.download = ['zodiac', slugify(currentName), currentSignKey, currentDate].filter(Boolean).join('-') + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast(t.exported);
  } catch (e) {
    console.error(e);
    showToast(t.exportError);
  } finally {
    holder.remove();
    btn.disabled = false;
    btn.innerHTML = orig;
  }
}

function reset(){
  document.getElementById('result').classList.add('hidden');
  document.getElementById('birthDate').value = '';
  document.getElementById('birthTime').value = '';
  birthField.set('');
  currentBirthPlace = '';
  store.remove('zodiac_lastPlace');
  document.getElementById('userName').value = '';
  document.getElementById('btnReveal').disabled = false;
  currentName = '';
  store.remove('zodiac_name');
  currentSignKey = null;
  currentDecanIdx = 0;
  currentDate = null;
  currentTime = null;
  currentSky = null;
  currentCn = null;
  skyDate = null;
  skyPeriod = 'day';
  mapMinutes = null;
  pairState = null;
  wheelSign = null;
  document.querySelector('.app').classList.remove('has-result');
  updateWheel();
  startWheel();
  resetTheme();
  updateURL('', '', currentLang);
  store.remove('zodiac_lastDate');
  store.remove('zodiac_lastTime');
  document.getElementById('birthDate').focus();
}

/* Bouton « Version hors ligne » : télécharge l'outil complet en un seul fichier HTML.
   Depuis la version autonome, la page se recopie elle-même ; depuis la version en plusieurs fichiers
   (qui ne peut pas relire ses propres fichiers en local), on télécharge ZODIAC-standalone.html livré à côté. */
function downloadOffline(){
  const a = document.createElement('a');
  a.download = 'ZODIAC-standalone.html';
  if (PRISTINE_PAGE) {
    const html = '<!DOCTYPE html>\n<html lang="fr" data-standalone="1">\n<head>' + PRISTINE_PAGE.head + '</head>\n<body>' + PRISTINE_PAGE.body + '</body>\n</html>\n';
    a.href = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  } else if (location.protocol === 'file:') {
    // Le navigateur refuse de télécharger un fichier local depuis une page locale : on ouvre la version
    // autonome dans un nouvel onglet (la page en cours est conservée), où le bouton enregistre le fichier
    a.removeAttribute('download');
    a.href = 'ZODIAC-standalone.html';
    a.target = '_blank';
    a.rel = 'noopener';
    showToast(I18N[currentLang].offline.opened, 6000);
  } else {
    a.href = 'ZODIAC-standalone.html';
  }
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function showToast(msg, duration = 1800){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; }, duration);
  setTimeout(() => t.remove(), duration + 400);
}

function hideError(){
  const el = document.getElementById('errorMsg');
  clearTimeout(el._tid);
  el.classList.add('hidden');
}
function flagInput(input){
  input.classList.add('error');
  input.focus();
  setTimeout(() => input.classList.remove('error'), 1200);
}

function showError(msg){
  const el = document.getElementById('errorMsg');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(el._tid);
  el._tid = setTimeout(() => el.classList.add('hidden'), 4000);
}

/* ============================================================
   7. LANCEMENT DE RECHERCHE
   ============================================================ */
function launchSearch(){
  if (isSearching) return;
  const t = I18N[currentLang];
  const input = document.getElementById('birthDate');
  if (!input.value) { showError(t.errorNoDate); flagInput(input); return; }
  const date = parseISODate(input.value);
  if (!date) { showError(t.errorInvalid); flagInput(input); return; }
  const timeValue = document.getElementById('birthTime').value;
  const time = parseTime(timeValue);           // facultative : null si vide
  if (!birthField.resolve()) {
    showError(t.placeUnknown);
    flagInput(document.getElementById('birthPlace'));
    return;
  }
  const place = birthPlace(birthField.key);
  const sky = computeSky(date, time, place ? place.tz : null);
  const sign = sky.sign;
  hideError();

  currentSky = sky;
  currentSignKey = sign;
  currentDecanIdx = sky.decan;
  currentDate = input.value;
  currentTime = time ? timeValue.slice(0, 5) : null;
  currentName = document.getElementById('userName').value.trim();
  currentBirthPlace = place ? place.key : '';

  // Persistance
  store.set('zodiac_lastDate', currentDate);
  store.set('zodiac_history', JSON.stringify(pushHistory(readHistory(), { name: currentName, date: currentDate, time: currentTime || '', place: currentBirthPlace, sign })));
  if (currentBirthPlace) store.set('zodiac_lastPlace', currentBirthPlace); else store.remove('zodiac_lastPlace');
  renderHistory();
  if (currentTime) store.set('zodiac_lastTime', currentTime); else store.remove('zodiac_lastTime');
  updateURL(currentDate, currentTime, currentLang);

  isSearching = true;
  document.getElementById('result').classList.add('hidden');
  document.getElementById('btnReveal').disabled = true;

  runSearch(sign, () => {
    renderResult(sign, currentDecanIdx);
    document.getElementById('btnReveal').disabled = false;
    isSearching = false;
  });
}

function updateURL(date, time, lang){
  try {
    const url = new URL(window.location);
    if (date) url.searchParams.set('date', date); else url.searchParams.delete('date');
    if (date && time) url.searchParams.set('time', time); else url.searchParams.delete('time');
    if (date && currentBirthPlace) url.searchParams.set('place', currentBirthPlace); else url.searchParams.delete('place');
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  } catch (e) { /* certains contextes (iframe sandboxée) interdisent replaceState */ }
}

/* ============================================================
   8. I18N / RENDU UI GLOBAL
   ============================================================ */
function applyUITranslations(){
  const t = I18N[currentLang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('labelBirthDate').textContent = t.labelBirthDate;
  document.getElementById('labelBirthTime').textContent = t.labelBirthTime;
  document.getElementById('labelBirthPlace').textContent = t.labelBirthPlace;
  document.getElementById('timePlaceHint').textContent = t.timePlaceHint;
  const pin = document.getElementById('birthPlace');
  pin.placeholder = t.placePlaceholder;
  document.getElementById('placeClear').setAttribute('aria-label', t.placeClear);
  document.getElementById('placesCredit').textContent = t.placesCredit;
  if (birthField) birthField.relabel();   // pays affiché dans la nouvelle langue
  document.getElementById('labelName').textContent = t.labelName;
  document.getElementById('offlineLabel').textContent = t.offline.button;
  document.getElementById('offlineHint').textContent = t.offline.hint;
  if (!OFFLINE_ENABLED) {   // grisé, avec « bientôt disponible » ; le code du téléchargement reste en place
    const ob = document.getElementById('offlineBtn');
    ob.disabled = true; ob.setAttribute('aria-disabled', 'true');
    document.getElementById('offlineLabel').textContent = `${t.offline.button} — ${t.offline.soon}`;
    document.getElementById('offlineHint').hidden = true;
  }
  updateThemeButton();
  updateWheel();
  renderHistory();
  document.querySelectorAll('.input-zone .opt').forEach(el => { el.textContent = t.optional; });
  const now = new Date();
  const todayCn = chineseYearInfo({ y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() });
  document.getElementById('today').textContent = formatToday(currentLang, now) + (todayCn ? ' · ' + cnYearName(t, todayCn.animal, todayCn.element) : '');
  document.getElementById('btnReveal').textContent = t.btnReveal;
  document.getElementById('modalClose').setAttribute('aria-label', t.close);
  const sel = document.getElementById('langSelect');
  sel.setAttribute('aria-label', t.langSelector);
  sel.innerHTML = LANGS.filter(([code]) => I18N[code]).map(([code, name]) => `<option value="${code}" lang="${loc(code).split('-u-')[0]}">${name}</option>`).join('');
  sel.value = currentLang;
  document.title = t.appTitle;
  document.documentElement.lang = loc(currentLang).split('-u-')[0];
  document.documentElement.dir = RTL_LANGS.includes(currentLang) ? 'rtl' : 'ltr';
}

/* ============================================================
   9. INITIALISATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Déterminer la langue (URL > localStorage > 'fr')
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  const urlDate = params.get('date');
  const urlTime = params.get('time');
  const urlPlace = params.get('place');
  const savedView = store.get('zodiac_view') === 'tarot' ? 'numbers' : store.get('zodiac_view');   // ancien onglet « Tarot » : section commune
  viewMode = VIEW_MODES.includes(savedView) ? savedView : 'signs';
  tarotDeck = TAROT_DECKS.includes(store.get('zodiac_deck')) ? store.get('zodiac_deck') : 'marseille';
  const lsLang = store.get('zodiac_lang');
  const lsDate = store.get('zodiac_lastDate');
  const lsTime = store.get('zodiac_lastTime');

  currentLang = (urlLang && I18N[urlLang]) ? urlLang :
                (lsLang && I18N[lsLang]) ? lsLang : 'fr';

  applyUITranslations();
  birthField = makePlaceField('birthPlace', 'placeList', 'placeClear', () => launchSearch());

  // Version hors ligne
  document.getElementById('offlineBtn').addEventListener('click', downloadOffline);

  // Application installable (site en ligne, page avec manifeste) : le service worker garde l'outil
  // en mémoire pour qu'il fonctionne hors ligne une fois ajouté à l'écran d'accueil (iPhone compris)
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && document.querySelector('link[rel="manifest"]')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  // Mode clair / sombre, roue du zodiaque
  paintTheme();
  document.getElementById('themeBtn').addEventListener('click', () => setMode(isLight() ? 'dark' : 'light'));
  buildWheel();
  updateWheel();
  startWheel();

  // 2. Changement de langue (menu)
  document.getElementById('langSelect').addEventListener('change', e => {
    if (!I18N[e.target.value]) return;
    currentLang = e.target.value;
    store.set('zodiac_lang', currentLang);
    applyUITranslations();
    updateURL(currentDate || '', currentTime || '', currentLang);   // seule une date réellement recherchée va dans l'URL
    // Re-render si résultat affiché
    if (currentSignKey && !document.getElementById('result').classList.contains('hidden')) {
      renderResult(currentSignKey, currentDecanIdx);
    }
  });

  // 3. Nom : restauré depuis l'appareil, mis à jour en direct (profil affiché compris)
  const nameInput = document.getElementById('userName');
  nameInput.value = store.get('zodiac_name') || '';
  currentName = nameInput.value.trim();
  nameInput.addEventListener('input', () => {
    currentName = nameInput.value.trim();
    if (currentName) store.set('zodiac_name', currentName); else store.remove('zodiac_name');
    renderOwner();
    renderCompat();
  });

  // 4. Lancer depuis URL
  const input = document.getElementById('birthDate');
  const timeInput = document.getElementById('birthTime');
  if (urlDate) {
    if (parseISODate(urlDate)) {
      input.value = urlDate;
      if (parseTime(urlTime)) timeInput.value = urlTime.slice(0, 5);
      if (birthPlace(urlPlace)) birthField.set(urlPlace);
      launchSearch();
    } else showError(I18N[currentLang].errorInvalid);
  } else if (parseISODate(lsDate)) {
    input.value = lsDate;
    if (parseTime(lsTime)) timeInput.value = lsTime;
    const lsPlace = store.get('zodiac_lastPlace');
    if (birthPlace(lsPlace)) birthField.set(lsPlace);
  }

  // 5. Boutons
  document.getElementById('btnReveal').addEventListener('click', () => launchSearch());
  ['userName', 'birthDate', 'birthTime'].forEach(id => document.getElementById(id).addEventListener('keydown', e => {
    if (e.key === 'Enter') launchSearch();
  }));

  // 6. Modale
  document.getElementById('modalClose').addEventListener('click', closeCompat);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target.id === 'modalOverlay') closeCompat();
  });
  document.addEventListener('keydown', e => {
    if (document.getElementById('modalOverlay').classList.contains('hidden')) return;
    if (e.key === 'Escape') closeCompat();
    // Piège à focus : le bouton Fermer est le seul élément focusable de la modale
    else if (e.key === 'Tab') { e.preventDefault(); document.getElementById('modalClose').focus(); }
  });

  // 7. Mode test : ZODIAC.html?test charge zodiac-tests.js (même dossier) et affiche le rapport
  if (params.has('test')) {
    // Version autonome : la suite est intégrée à la page (non exécutée tant qu'on ne demande pas ?test)
    const inline = document.getElementById('zodiacTests');
    if (inline) { new Function(inline.textContent)(); return; }
    const s = document.createElement('script');
    s.src = 'zodiac-tests.js';
    s.onerror = () => showError('zodiac-tests.js introuvable : placez-le dans le même dossier que ZODIAC.html.');
    document.body.appendChild(s);
  }
});
