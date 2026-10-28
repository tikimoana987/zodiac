/* Tests spécifiques portrait V0.3.1. ?test uniquement ; résultat exposé à la CI. */
(function(){
  if (!new URLSearchParams(location.search).has('test')) return;
  document.addEventListener('DOMContentLoaded', () => {
    const cases = [];
    const test = (name, fn) => {try {fn();cases.push({name,ok:true});}
      catch(err) {cases.push({name,ok:false,info:String(err.message || err)});}};
    const ok = (cond,msg) => {if(!cond) throw Error(msg);};
    const count = text => (text.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)||[]).length;
    const specimen = (date,sign,decan,deck='marseille',cusp='none',lang='fr') => ZODIAC_PORTRAIT.model(parseISODate(date),sign,decan,cusp,deck,lang);
    const sample = [
      ['1982-11-03','scorpio',1,7,'chariot','chariot','cups_6','pluto','neptune'],
      ['1975-01-24','aquarius',0,11,'priestess','strength','swords_5','uranus','uranus'],
      ['1976-08-18','leo',2,22,'emperor','fool','wands_7','sun','mars'],
      ['1975-02-18','aquarius',2,33,'lovers','lovers','swords_7','uranus','venus'],
      ['1975-01-08','capricorn',1,4,'fool','emperor','pentacles_3','saturn','venus'],
      ['1990-04-17','aries',2,4,'emperor','emperor','wands_4','mars','jupiter']
    ];
    test('14 langues : structure complète et textes non vides',()=>{
      ok(Object.keys(PORTRAIT_I18N).length===14,'nombre de langues');
      const arc=Object.keys(PORTRAIT_I18N.fr.arcana),paths=Object.keys(PORTRAIT_I18N.fr.lifePath);
      ok(arc.length===22 && paths.length===11,'22 majeurs / 11 chemins');
      for (const [lang,d] of Object.entries(PORTRAIT_I18N)) {
        ok(Object.keys(d.arcana).join('|')===arc.join('|'),'arcanes '+lang);
        ok(Object.keys(d.lifePath).join('|')===paths.join('|'),'chemins '+lang);
        ok(arc.every(k=>d.arcana[k]?.essence),'essences '+lang);
        ok(paths.every(k=>['energy','strengths','challenges','lesson','thread'].every(part=>d.lifePath[k]?.[part])),'unités '+lang);
        ok(d.info.portrait && d.info.portraitDecan && d.phrases.convergence && d.phrases.master && d.phrases.skyIntro,'compléments '+lang);
        ok(I18N[lang].info.portrait && I18N[lang].info.portraitDecan,'bulles '+lang);
      }
    });
    test('36 décans : couleurs/rangs Golden Dawn, planètes et mots-clés',()=>{
      const expect = ['wands_2','wands_3','wands_4','pentacles_5','pentacles_6','pentacles_7','swords_8','swords_9','swords_10',
        'cups_2','cups_3','cups_4','wands_5','wands_6','wands_7','pentacles_8','pentacles_9','pentacles_10',
        'swords_2','swords_3','swords_4','cups_5','cups_6','cups_7','wands_8','wands_9','wands_10',
        'pentacles_2','pentacles_3','pentacles_4','swords_5','swords_6','swords_7','cups_8','cups_9','cups_10'];
      let idx=0;for(const s of SIGN_ORDER) for(let d=0;d<3;d++){
        const m=specimen('1990-04-17',s,d);
        ok(m.minor===expect[idx++],s+' '+d+' mineure');
        ok(m.skyRows.length===3 && m.skyRows.every(r=>r.keywords.length===3),s+' '+d+' mots-clés');
        ok(ZODIAC_PORTRAIT.GD_PLANETS[s][d],s+' '+d+' planète GD');
      }
    });
    for (const [index,c] of sample.entries()) test(`Référence ${index+1} : ${c[0]}`,()=>{
      const m=specimen(c[0],c[1],c[2]);
      const [, , ,n,birthKey,pathKey,minor,owner,planet]=c;
      ok(m.n===n && m.birthKey===birthKey && m.pathKey===pathKey,'chemin/arcane');
      ok(m.minor===minor && m.owner===owner && m.zodiacDecanPlanet===planet,'correspondances');
      ok(m.converges===(index===0||index===3||index===5),'convergence');
      ok(m.master===(n===11||n===22||n===33?n:null),'maître');
      ok(m.parts.arcana.length===(m.master?3:2),'phrases conditionnelles');
      const prose=Object.values(m.parts).flat().map(count).reduce((a,b)=>a+b,0);
      const keywords=m.skyRows.flatMap(r=>r.keywords).map(count).reduce((a,b)=>a+b,0);
      const total=prose+keywords;
      ok(total>=250&&total<=350,`mots du portrait ${total} (prose ${prose}, mots-clés ${keywords})`);
      ok(count(m.preview)>=35&&count(m.preview)<=50,`aperçu ${count(m.preview)}`);
    });
    test('11, 22 et 33 : cartes et lectures secondaires selon le jeu',()=>{
      for(const deck of ['marseille','ws']){
        const a=specimen('1975-01-24','aquarius',0,deck),b=specimen('1976-08-18','leo',2,deck),c=specimen('1975-02-18','aquarius',2,deck);
        ok(a.pathKey===(deck==='marseille'?'strength':'justice') && a.parts.arcana[2].includes('2'),deck+' 11/2');
        ok(b.pathKey==='fool' && b.parts.arcana[2].includes('4'),deck+' 22/4');
        ok(c.pathKey==='lovers' && c.parts.arcana[2].includes('6'),deck+' 33/6');
        ok(b.skyRows[0].key==='strength' && a.skyRows[1].key==='fool','identités indépendantes des numéros');
      }
    });
    test('Bélier 3 : Jupiter ZODIAC, Vénus Golden Dawn, Quatre de Bâtons',()=>{
      const m=specimen('1990-04-17','aries',2);
      ok(m.zodiacDecanPlanet==='jupiter' && m.gdPlanet==='venus' && m.minor==='wands_4','double tradition');
      ok(PORTRAIT_I18N.fr.info.portraitDecan.includes('Jupiter') && PORTRAIT_I18N.fr.info.portraitDecan.includes('Vénus'),'bulle');
    });
    test('Frontière sans heure : seules les lignes concernées incertaines',()=>{
      const sign=specimen('1990-04-17','aries',2,'marseille','sign');
      const decan=specimen('1990-04-17','aries',2,'marseille','decan');
      ok(sign.skyRows.every(r=>r.uncertain),'frontière de signe');
      ok(!decan.skyRows[0].uncertain && !decan.skyRows[1].uncertain && decan.skyRows[2].uncertain,'frontière décan');
    });
    test('Formule naissance : chaque étape intermédiaire est visible',()=>{
      const fake=document.createElement('div');fake.id='numbersBody';document.body.append(fake);
      const saved={date:currentDate,name:currentName,time:currentTime,place:currentBirthPlace,sign:currentSignKey,
        decan:currentDecanIdx,sky:currentSky,deck:tarotDeck,lang:currentLang};
      try {
        currentDate='1982-11-03';currentName='';currentTime=null;currentBirthPlace='';
        currentSignKey='scorpio';currentDecanIdx=1;currentSky={cusp:null};tarotDeck='marseille';currentLang='fr';
        ZODIAC_PORTRAIT.render();
        const text=fake.querySelector('.portrait-formula').textContent;
        ok(text.includes('1996 → 25 → 7'),`étape intermédiaire manquante : ${text}`);
        ok(!text.includes('7 → 7'),'réduction fictive');
      } finally {
        currentDate=saved.date;currentName=saved.name;currentTime=saved.time;currentBirthPlace=saved.place;
        currentSignKey=saved.sign;currentDecanIdx=saved.decan;currentSky=saved.sky;tarotDeck=saved.deck;currentLang=saved.lang;
        fake.remove();
      }
    });
    test('Formule chemin maître 22 : conserver le maître sans 22 → 22',()=>{
      const fake=document.createElement('div');fake.id='numbersBody';document.body.append(fake);
      const saved={date:currentDate,name:currentName,time:currentTime,place:currentBirthPlace,sign:currentSignKey,
        decan:currentDecanIdx,sky:currentSky,deck:tarotDeck,lang:currentLang};
      try {
        currentDate='1976-08-18';currentName='';currentTime=null;currentBirthPlace='';
        currentSignKey='leo';currentDecanIdx=2;currentSky={cusp:null};tarotDeck='marseille';currentLang='fr';
        ZODIAC_PORTRAIT.render();
        const text=fake.querySelectorAll('.portrait-formula')[1].textContent;
        ok(text.includes('9 + 8 + 5 = 22'),`somme attendue : ${text}`);
        ok(!text.includes('22 → 22'),`réduction fictive : ${text}`);
        ok(text.includes('(22/4)'),`lecture secondaire : ${text}`);
      } finally {
        currentDate=saved.date;currentName=saved.name;currentTime=saved.time;currentBirthPlace=saved.place;
        currentSignKey=saved.sign;currentDecanIdx=saved.decan;currentSky=saved.sky;tarotDeck=saved.deck;currentLang=saved.lang;
        fake.remove();
      }
    });
    test('Décans traduits et ponctuation FR / EN / DE / TH',()=>{
      const fake=document.createElement('div');fake.id='numbersBody';document.body.append(fake);
      const saved={date:currentDate,name:currentName,time:currentTime,place:currentBirthPlace,sign:currentSignKey,
        decan:currentDecanIdx,sky:currentSky,deck:tarotDeck,lang:currentLang};
      try {
        currentDate='1982-11-03';currentName='';currentTime=null;currentBirthPlace='';
        currentSignKey='scorpio';currentDecanIdx=1;currentSky={cusp:null};tarotDeck='marseille';
        for(const lang of Object.keys(PORTRAIT_I18N)) {
          currentLang=lang;ZODIAC_PORTRAIT.render();
          const h=fake.querySelectorAll('.portrait-sky-head');
          ok(h.length===3,`${lang} : lignes du ciel`);
          ok(h[2].textContent.includes(I18N[lang].decanLabel[1]),`${lang} : ordinal du décan`);
          if(lang==='fr') ok(h[0].textContent.includes(' : ') && h[2].textContent.includes('ZODIAC : '),'FR : ponctuation');
          if(lang==='en' || lang==='de') ok(h[0].textContent.includes(': ') && !h[0].textContent.includes(' : ')
            && h[2].textContent.includes('ZODIAC: '),`${lang} : ponctuation`);
          if(lang==='th') ok([...h].every(n=>!n.textContent.includes(':')),`TH : deux-points interdits`);
        }
      } finally {
        currentDate=saved.date;currentName=saved.name;currentTime=saved.time;currentBirthPlace=saved.place;
        currentSignKey=saved.sign;currentDecanIdx=saved.decan;currentSky=saved.sky;tarotDeck=saved.deck;currentLang=saved.lang;
        fake.remove();
      }
    });
    test('Export : copie dépliée, aperçu et bouton retirés',()=>{
      const frame=document.createElement('div');
      frame.innerHTML='<section class="portrait-card"><div class="portrait-preview">Aperçu</div><div class="portrait-detail" hidden>Contenu complet</div><button class="portrait-toggle">Ouvrir</button></section>';
      document.body.append(frame);
      try{
        const opts={width:0,height:0,scale:0};ZODIAC_PORTRAIT.prepareExport(frame,opts);
        ok(!frame.querySelector('.portrait-preview') && !frame.querySelector('.portrait-toggle'),'éléments repliés retirés');
        ok(!frame.querySelector('.portrait-detail').hidden,'portrait déplié');
        ok(opts.width>0 && opts.height>0 && opts.scale>0,'mesure après dépliage');
      }finally{frame.remove();}
    });
    test('Interface : 14 langues, repli, six rubriques, changement de jeu et de profil',()=>{
      const saved={date:currentDate,name:currentName,time:currentTime,place:currentBirthPlace,
        sign:currentSignKey,decan:currentDecanIdx,sky:currentSky,lang:currentLang,deck:tarotDeck};
      const fake=document.createElement('div');fake.id='numbersBody';document.body.append(fake);
      try {
        currentDate='1975-01-24';currentName='';currentTime=null;currentBirthPlace='';
        currentSignKey='aquarius';currentDecanIdx=0;currentSky={cusp:null};tarotDeck='marseille';
        for (const lang of Object.keys(PORTRAIT_I18N)) {
          currentLang=lang;ZODIAC_PORTRAIT.render();
          const el=fake.querySelector('#portraitCard');
          ok(el && el.querySelectorAll('.portrait-section').length===6,'rubriques '+lang);
          ok(el.querySelectorAll('.portrait-sky-row .trait-tag').length===9,'mots-clés '+lang);
          ok(el.querySelector('.portrait-preview') && el.querySelector('.portrait-toggle'),'repli '+lang);
        }
        currentLang='fr';ZODIAC_PORTRAIT.render();
        let b=fake.querySelector('.portrait-toggle');
        ok(b.getAttribute('aria-expanded')==='false','fermé par défaut');
        b.click();ok(b.getAttribute('aria-expanded')==='true' && !fake.querySelector('#portraitDetail').hidden,'déplié');
        tarotDeck='ws';ZODIAC_PORTRAIT.render();
        ok(fake.querySelector('#portraitDetail') && !fake.querySelector('#portraitDetail').hidden,'déplié après changement de jeu');
        ok(fake.querySelectorAll('.portrait-arcana-name')[1].textContent.includes('Justice'),'XI Waite-Smith');
        currentName='Profil-test';ZODIAC_PORTRAIT.render();
        ok(fake.querySelector('#portraitDetail').hidden,'nouveau profil replié');
      } finally {
        currentDate=saved.date;currentName=saved.name;currentTime=saved.time;currentBirthPlace=saved.place;
        currentSignKey=saved.sign;currentDecanIdx=saved.decan;currentSky=saved.sky;currentLang=saved.lang;tarotDeck=saved.deck;
        fake.remove();
      }
    });
    test('Sécurité : aucune ressource distante pour les données du portrait',()=>{
      ok(!document.querySelector('script[src^="http"]'),'scripts distants');
      ok(typeof PORTRAIT_I18N.fr.info.portrait==='string','source embarquée');
      ok(PORTRAIT_I18N.en && PORTRAIT_I18N.it,'sources présentes');
    });
    const failed=cases.filter(c=>!c.ok);
    window.__portraitTestResults=cases;
    console.table(cases);
    if (failed.length) console.error('Portrait symbolique :',failed);
  });
})();
