/* ============================================================
   Portrait symbolique V0.3.2 — module local, sans réseau ni stockage.
   Réutilise uniquement les fonctions publiques du projet (numérologie, tarot, astro).
   Inclut une intégration non destructive pour éviter d'altérer zodiac-app.js.
   ============================================================ */
const ZODIAC_PORTRAIT = (() => {
  'use strict';
  // Majeurs astrologiques par signe (identité, non numéro : Force et Justice échangent VIII/XI).
  const SIGN_ARCANA = Object.freeze({
    aries:'emperor', taurus:'hierophant', gemini:'lovers', cancer:'chariot',
    leo:'strength', virgo:'hermit', libra:'justice', scorpio:'death',
    sagittarius:'temperance', capricorn:'devil', aquarius:'star', pisces:'moon'
  });
  // Maîtres modernes validés : Uranus/Neptune/Pluton sont des extensions modernes.
  const PLANET_ARCANA = Object.freeze({
    mercury:'magician', moon:'priestess', venus:'empress', jupiter:'wheel',
    mars:'tower', sun:'sun', saturn:'world', uranus:'fool',
    neptune:'hangedman', pluto:'judgement'
  });
  const SUITS = Object.freeze({ fire:'wands', earth:'pentacles', air:'swords', water:'cups' });
  const RANK_START = Object.freeze({ cardinal:2, fixed:5, mutable:8 });
  // Attributions planétaires historiques des 36 décans Golden Dawn (ordre chaldéen).
  const GD_PLANETS = Object.freeze({
    aries:['mars','sun','venus'], taurus:['mercury','moon','saturn'],
    gemini:['jupiter','mars','sun'], cancer:['venus','mercury','moon'],
    leo:['saturn','jupiter','mars'], virgo:['sun','venus','mercury'],
    libra:['moon','saturn','jupiter'], scorpio:['mars','sun','venus'],
    sagittarius:['mercury','moon','saturn'], capricorn:['jupiter','mars','sun'],
    aquarius:['venus','mercury','moon'], pisces:['saturn','jupiter','mars']
  });
  // État local, sans stockage : chaque nouveau profil s'ouvre replié.
  let expanded = false, lastProfile = null;
  const html = s => escapeHtml(String(s));
  const p = s => `<p class="portrait-prose">${html(s)}</p>`;

  function pathArcana(value, deck){
    return value === 33 ? 'lovers' : tarotByNumber(value, deck);
  }
  function minorKey(sign, idx){
    const m = SIGN_META[sign];
    return `${SUITS[m.element]}_${RANK_START[m.modality] + idx}`;
  }
  // Afficher toutes les réductions réellement effectuées, sans étape fictive (22 → 22).
  // La carte de naissance s'arrête à 22 ; le chemin de vie conserve 11/22/33.
  function reductionSteps(initial, stop){
    const steps = [initial];
    while (!stop(steps[steps.length - 1])) steps.push(digitSum(steps[steps.length - 1]));
    return steps.join(' → ');
  }
  function formBirth(birth){
    const total = birth.d + birth.m + birth.y;
    return `${birth.d} + ${birth.m} + ${birth.y} = ${reductionSteps(total, n => n <= 22)}`;
  }
  function formPath(birth){
    const a = reduceNumber(birth.d), b = reduceNumber(birth.m), c = reduceNumber(digitSum(birth.y));
    return `${a} + ${b} + ${c} = ${reductionSteps(a+b+c, n => n <= 9 || MASTER_NUMBERS.includes(n))}`;
  }
  // Ponctuation de libellés techniques (indépendante des textes narratifs validés).
  function labelSeparator(lang){
    return lang === 'th' ? ' ' : lang === 'fr' ? ' : ' : (lang === 'ja' || lang === 'zh') ? '：' : ': ';
  }
  // Modèle pur pour tests : n'accède pas au DOM et ne touche à aucune donnée de l'utilisateur.
  function model(birth, sign, decan, cusp='none', deck='marseille', lang='fr'){
    if (!birth || !SIGN_META[sign] || !Number.isInteger(decan) || decan < 0 || decan > 2 || !PORTRAIT_I18N[lang])
      throw new Error('Portrait : paramètres invalides');
    const t = I18N[lang], words = PORTRAIT_I18N[lang], n = lifePath(birth);
    const birthKey = tarotByNumber(birthCardNumber(birth), deck), pathKey = pathArcana(n, deck);
    const signKey = SIGN_ARCANA[sign], owner = SIGN_META[sign].ruler;
    const planetKey = PLANET_ARCANA[owner], minor = minorKey(sign,decan);
    const zodiacDecanPlanet = decanRuler(sign, decan), gdPlanet = GD_PLANETS[sign][decan];
    const converges = birthKey === pathKey, master = [11,22,33].includes(n) ? n : null;
    const parts = {
      arcana: [words.arcana[birthKey].essence,
        converges ? words.phrases.convergence : words.arcana[pathKey].essence,
        ...(master ? [words.phrases.master.replace('{n}',String(master === 11 ? 2 : master === 22 ? 4 : 6))] : [])],
      energy:[words.lifePath[pathKey].energy], strengths:[words.lifePath[pathKey].strengths],
      challenges:[words.lifePath[pathKey].challenges,words.lifePath[pathKey].lesson],
      sky:[words.phrases.skyIntro], thread:[words.lifePath[pathKey].thread]
    };
    const skyRows = [
      { kind:'sign', key:signKey, identity:t.signNames[sign], name:tarotName(t,signKey,deck), num:tarotNumeral(signKey,deck), keywords:t.tarot.cards[signKey].keywords },
      { kind:'planet', key:planetKey, identity:t.rulers[owner], name:tarotName(t,planetKey,deck), num:tarotNumeral(planetKey,deck), keywords:t.tarot.cards[planetKey].keywords },
      { kind:'decan', key:minor, identity:`ZODIAC${labelSeparator(lang)}${t.rulers[zodiacDecanPlanet]} · Golden Dawn${labelSeparator(lang)}${t.rulers[gdPlanet]}`,
        name:t.tarot.minors.cards[minor].name[deck], num:tarotNumeral(minor,deck), keywords:t.tarot.minors.cards[minor].keywords }
    ];
    if (cusp === 'sign') skyRows.forEach(row => {row.uncertain = true;});
    if (cusp === 'decan') skyRows[2].uncertain = true;
    return { birth, sign, decan, deck, lang, n, master, birthKey, pathKey, converges, owner,
      zodiacDecanPlanet, gdPlanet, minor, parts, skyRows, preview:parts.thread[0], labels:words.labels };
  }
  function cardRef(t,key,deck){
    const n = tarotNumeral(key,deck);
    return `${n ? `<span class="portrait-roman">${html(n)}</span> ` : ''}${html(tarotName(t,key,deck))}`;
  }
  function skyLine(m,row){
    const label = row.kind==='decan' ? I18N[m.lang].decanLabel[m.decan] : m.labels[row.kind], uncertain = row.uncertain ? ` <span class="portrait-uncertain">(${html(m.labels.uncertain)})</span>` : '';
    return `<div class="portrait-sky-row"><div class="portrait-sky-head"><strong>${html(label)}</strong>${row.kind==='decan' ? ' · ' : labelSeparator(m.lang)}${html(row.identity)}${uncertain}</div>
      <div class="portrait-sky-arcana">${row.num ? `<span class="portrait-roman">${html(row.num)}</span> ` : ''}${html(row.name)}</div>
      <div class="traits">${row.keywords.map(k=>`<span class="trait-tag">${html(k)}</span>`).join('')}</div></div>`;
  }
  function section(m,k,body,extra=''){
    return `<section class="portrait-section portrait-${k}"><h4>${html(m.labels.sections[k])}${extra}</h4>${body}</section>`;
  }
  function fragment(m){
    const t=I18N[m.lang],l=m.labels;
    const birthRef=cardRef(t,m.birthKey,m.deck),lifeRef=cardRef(t,m.pathKey,m.deck);
    const a = `<div class="portrait-pair">
      <div class="portrait-arcana-tile"><div class="portrait-label">${html(l.birthCard)}</div><div class="portrait-arcana-name">${birthRef}</div><div class="portrait-formula" dir="ltr">${html(formBirth(m.birth))}</div></div>
      <div class="portrait-arcana-tile"><div class="portrait-label">${html(l.lifePathArcana)}</div><div class="portrait-arcana-name">${lifeRef}</div><div class="portrait-formula" dir="ltr">${html(formPath(m.birth))}${m.master ? ` (${m.master}/${m.master===11?2:m.master===22?4:6})` : ''}</div></div>
      </div>`;
    const details = [
      section(m,'arcana',`<h5>${html(l.birthCard)} · ${birthRef}</h5>${p(m.parts.arcana[0])}<h5>${html(l.lifePathArcana)} · ${lifeRef}</h5>${p(m.parts.arcana[1])}${m.parts.arcana[2]?p(m.parts.arcana[2]):''}`),
      section(m,'energy',p(m.parts.energy[0])),
      section(m,'strengths',p(m.parts.strengths[0])),
      section(m,'challenges',m.parts.challenges.map(p).join('')),
      section(m,'sky',p(m.parts.sky[0])+m.skyRows.map(r=>skyLine(m,r)).join(''),infoBtn('portraitDecan',l.sections.sky)),
      section(m,'thread',p(m.parts.thread[0]))
    ].join('');
    return `<section class="card portrait-card" id="portraitCard" aria-labelledby="portraitTitle">
      <h3 id="portraitTitle">✧ ${html(l.title)}${infoBtn('portrait',l.title)}</h3>
      ${a}
      <div class="portrait-preview"${expanded?' hidden':''}>${p(m.preview)}</div>
      <div class="portrait-detail" id="portraitDetail"${expanded?'':' hidden'}>${details}</div>
      <button type="button" class="portrait-toggle btn-secondary" aria-controls="portraitDetail" aria-expanded="${expanded}">${html(expanded?l.less:l.more)} <span aria-hidden="true">${expanded?'▴':'▾'}</span></button>
    </section>`;
  }
  function currentModel(){
    const birth=parseISODate(currentDate), sky=currentSky;
    if (!birth || !currentSignKey || !sky) return null;
    return model(birth,currentSignKey,currentDecanIdx,sky.cusp || 'none',tarotDeck,currentLang);
  }
  function render(){
    const target=document.getElementById('numbersBody');
    if (!target) return;
    const profile = [currentDate,currentName,currentTime,currentBirthPlace].join('|');
    if (lastProfile !== profile) { expanded=false; lastProfile=profile; }
    const m=currentModel(); if (!m) return;
    target.querySelector('#portraitCard')?.remove();
    const note=target.querySelector('.sky-note');
    if (note) note.insertAdjacentHTML('beforebegin',fragment(m));
    else target.insertAdjacentHTML('beforeend',fragment(m));
    const toggle=target.querySelector('.portrait-toggle');
    toggle.addEventListener('click',()=>{
      expanded=!expanded;
      const detail=target.querySelector('.portrait-detail'),preview=target.querySelector('.portrait-preview');
      detail.hidden=!expanded;preview.hidden=expanded;
      toggle.setAttribute('aria-expanded',String(expanded));
      toggle.innerHTML=html(expanded?m.labels.less:m.labels.more)+` <span aria-hidden="true">${expanded?'▴':'▾'}</span>`;
    });
  }
  function prepareExport(frame, opts){
    const portraits=frame.querySelectorAll('.portrait-card');
    if (!portraits.length) return;
    for (const card of portraits){
      card.querySelector('.portrait-preview')?.remove();
      card.querySelector('.portrait-toggle')?.remove();
      const detail=card.querySelector('.portrait-detail'); if (detail) detail.hidden=false;
    }
    // La mesure de l'export initial a été effectuée avant cette extension : la recalculer.
    const box=frame.getBoundingClientRect(),w=Math.ceil(box.width),h=Math.ceil(box.height);
    opts.width=w;opts.height=h;
    opts.scale=Math.max(0.5,Math.min(2,Math.sqrt(16e6/(w*h)),32000/h));
  }
  function install(){
    for (const lang of Object.keys(PORTRAIT_I18N)) {
      if (I18N[lang]) {
        I18N[lang].info.portrait=PORTRAIT_I18N[lang].info.portrait;
        I18N[lang].info.portraitDecan=PORTRAIT_I18N[lang].info.portraitDecan;
      }
    }
    // Découplage : les calculs et le code historique ne sont pas modifiés.
    const originalNumbers=renderNumbers;
    renderNumbers=function(){ originalNumbers.apply(this,arguments);render(); };
    const originalTarot=renderTarot;
    renderTarot=function(){ originalTarot.apply(this,arguments);render(); };
    if (typeof window.html2canvas === 'function') {
      const originalCanvas=window.html2canvas;
      window.html2canvas=function(frame,options){ prepareExport(frame,options);return originalCanvas.call(this,frame,options); };
    }
  }
  install();
  return Object.freeze({ model, minorKey, pathArcana, SIGN_ARCANA, PLANET_ARCANA, GD_PLANETS, render, prepareExport });
})();
