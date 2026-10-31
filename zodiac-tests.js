/* ============================================================
   Zodiaque & Décans — suite de tests
   Utilisation : placer ce fichier à côté de ZODIAC.html, puis ouvrir ZODIAC.html?test
   Le rapport s'affiche en bas à droite de la page (et dans la console).
   Les valeurs de référence astronomiques viennent d'astropy (bibliothèque d'astronomie
   indépendante) : la formule du fichier n'est donc pas testée contre elle-même.
   ============================================================ */
(function(){
  const results = [];
  let group = '';
  function section(name){ group = name; }
  function test(name, fn){
    try { fn(); results.push({ group, name, ok: true }); }
    catch (e) { results.push({ group, name, ok: false, info: e.message }); }
  }
  function assert(cond, msg){ if (!cond) throw new Error(msg); }
  function assertEq(got, exp, msg){ if (got !== exp) throw new Error(`${msg} : obtenu ${got}, attendu ${exp}`); }
  const angleDiff = (a, b) => Math.abs(((a - b + 540) % 360) - 180);
  const utc = iso => new Date(iso.replace('Z', ':00Z')).getTime();

  /* Longitudes du Soleil calculées par astropy (instant UTC, degrés) — 40 instants de 1900 à 2100 */
  const SUN_REF = [
    ["1900-03-14T19:26Z", 353.78],
    ["1905-03-28T13:53Z", 7.2178],
    ["1910-05-31T04:49Z", 68.8503],
    ["1915-04-12T16:26Z", 21.6837],
    ["1920-05-20T06:43Z", 58.9325],
    ["1925-12-17T01:48Z", 264.6187],
    ["1930-10-24T06:56Z", 210.146],
    ["1935-12-24T10:27Z", 271.6919],
    ["1941-06-24T09:49Z", 92.476],
    ["1946-02-25T07:14Z", 336.0862],
    ["1951-05-11T20:48Z", 50.3469],
    ["1956-08-16T07:44Z", 143.4032],
    ["1961-12-22T00:17Z", 269.914],
    ["1967-01-10T09:49Z", 289.4611],
    ["1972-05-16T00:13Z", 55.2348],
    ["1977-01-31T09:21Z", 311.3997],
    ["1982-07-06T23:02Z", 104.5286],
    ["1987-09-05T06:25Z", 162.1726],
    ["1992-10-04T11:17Z", 191.484],
    ["1997-08-31T12:09Z", 158.1209],
    ["2003-04-27T04:20Z", 36.5097],
    ["2008-01-18T01:49Z", 297.3327],
    ["2013-08-06T09:53Z", 134.1035],
    ["2018-05-08T06:24Z", 47.6213],
    ["2023-06-22T11:34Z", 90.8198],
    ["2028-09-06T17:24Z", 164.6379],
    ["2033-10-29T23:55Z", 216.8772],
    ["2039-04-05T19:46Z", 15.8826],
    ["2044-06-05T04:14Z", 75.1666],
    ["2049-08-02T03:34Z", 130.3155],
    ["2054-06-26T14:11Z", 95.2223],
    ["2059-08-25T05:27Z", 152.0652],
    ["2064-10-10T19:36Z", 198.299],
    ["2069-10-29T14:51Z", 216.7751],
    ["2075-04-08T10:20Z", 18.7247],
    ["2080-07-26T10:22Z", 124.3734],
    ["2085-05-06T13:32Z", 46.7476],
    ["2090-08-12T09:31Z", 140.2156],
    ["2095-10-21T03:16Z", 208.0127],
    ["2100-11-19T21:50Z", 237.6312]
  ];
  /* Instant UTC (midi) → signe et décan attendus, d'après astropy (cas à plus de 0,6° d'une limite) */
  const SIGN_CASES = [
    ["1990-05-15T12:00Z", "taurus", 3],
    ["2000-12-25T12:00Z", "capricorn", 1],
    ["1985-08-10T12:00Z", "leo", 2],
    ["1970-03-25T12:00Z", "aries", 1],
    ["1990-01-19T12:00Z", "capricorn", 3],
    ["1990-01-21T12:00Z", "aquarius", 1],
    ["1990-03-21T12:00Z", "aries", 1],
    ["1978-07-05T12:00Z", "cancer", 2],
    ["1995-10-20T12:00Z", "libra", 3],
    ["1990-04-15T12:00Z", "aries", 3],
    ["2050-11-30T12:00Z", "sagittarius", 1],
    ["1923-09-01T12:00Z", "virgo", 1]
  ];

  /* ---------------- Calcul astronomique ---------------- */
  section('Calcul astronomique');
  test('Longitude du Soleil à ±0,02° d’astropy sur 40 instants (1900-2100)', () => {
    let worst = 0, at = '';
    for (const [iso, ref] of SUN_REF) { const d = angleDiff(sunLongitude(utc(iso)), ref); if (d > worst) { worst = d; at = iso; } }
    assert(worst < 0.02, `écart maximal ${worst.toFixed(4)}° le ${at}`);
  });
  test('Équinoxes et entrées dans un signe connues', () => {
    for (const [iso, target, label] of [['2024-03-20T03:06Z', 0, 'équinoxe 2024'], ['2000-03-20T07:35Z', 0, 'équinoxe 2000'],
      ['1990-12-22T03:06Z', 270, 'Capricorne 1990'], ['1990-01-20T08:01Z', 300, 'Verseau 1990']]) {
      const d = angleDiff(sunLongitude(utc(iso)), target);
      assert(d < 0.02, `${label} : écart ${d.toFixed(4)}°`);
    }
  });
  test(`Signe et décan sur ${SIGN_CASES.length} dates de référence`, () => {
    for (const [iso, sign, decan] of SIGN_CASES) {
      const lon = sunLongitude(utc(iso));
      assert(signFromLongitude(lon) === sign && decanFromLongitude(lon) + 1 === decan,
        `${iso} : ${signFromLongitude(lon)} décan ${decanFromLongitude(lon) + 1}, attendu ${sign} décan ${decan}`);
    }
  });
  test('Le 20 mars 2024 à midi est en Bélier (l’ancienne table fixe disait Poissons)', () => {
    assert(signFromLongitude(sunLongitude(utc('2024-03-20T12:00Z'))) === 'aries', 'pas Bélier');
  });

  /* Les tests suivants passent par l'heure locale : ils sont écrits pour réussir quel que soit le fuseau */
  const localParts = ms => { const d = new Date(ms); return [{ y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() }, { h: d.getHours(), min: d.getMinutes() }]; };
  test('Jour de changement de signe sans heure → alerte « signe »', () => {
    const [date] = localParts(utc('1990-12-22T03:06Z'));
    assert(computeSky(date, null).cusp === 'sign', `cusp = ${computeSky(date, null).cusp}`);
  });
  test('Jour de changement de décan sans heure → alerte « décan »', () => {
    const [date] = localParts(utc('1990-12-31T22:41Z'));
    assert(computeSky(date, null).cusp === 'decan', `cusp = ${computeSky(date, null).cusp}`);
  });
  test('Jour ordinaire → aucune alerte', () => {
    const [date] = localParts(utc('1990-12-26T12:00Z'));
    assert(computeSky(date, null).cusp === null, `cusp = ${computeSky(date, null).cusp}`);
  });
  test('L’heure de naissance tranche le jour de transition', () => {
    const ingress = utc('1990-12-22T03:06Z');
    const before = computeSky(...localParts(ingress - 2 * 3600e3));
    const after = computeSky(...localParts(ingress + 2 * 3600e3));
    assert(before.sign === 'sagittarius' && after.sign === 'capricorn', `${before.sign} → ${after.sign}`);
    assert(before.cusp === null && after.cusp === null, 'alerte affichée alors que l’heure est connue');
  });
  test('Affichage de la position : minutes avec heure, « ≈ » sans heure', () => {
    const date = { y: 1990, m: 4, d: 15 };
    assert(/^\d+°\d{2}′/.test(formatSunPosition(computeSky(date, { h: 10, min: 30 }))), 'format avec heure');
    assert(/^≈ \d+°/.test(formatSunPosition(computeSky(date, null))), 'format sans heure');
  });

  /* ---------------- Saisie ---------------- */
  section('Saisie');
  test('parseISODate accepte les vraies dates et refuse les autres', () => {
    for (const [v, ok] of [['2024-02-29', true], ['2023-02-29', false], ['1990-13-01', false], ['1990-04-31', false],
      ['abc', false], ['', false], [null, false], ['0050-06-15', true], ['1990-1-5', false]])
      assert(!!parseISODate(v) === ok, `parseISODate(${v}) devrait être ${ok}`);
  });
  test('parseTime accepte HH:MM et HH:MM:SS, refuse le reste', () => {
    for (const [v, ok] of [['09:05', true], ['23:59', true], ['12:30:15', true], ['24:00', false], ['12:60', false], ['9:05', false], ['', false], [null, false]])
      assert(!!parseTime(v) === ok, `parseTime(${v}) devrait être ${ok}`);
  });

  /* ---------------- Décans ---------------- */
  section('Décans');
  test('Planètes des décans (système des triplicités)', () => {
    const expected = { aries: ['mars','sun','jupiter'], taurus: ['venus','mercury','saturn'], cancer: ['moon','pluto','neptune'],
      libra: ['venus','uranus','mercury'], capricorn: ['saturn','venus','mercury'], pisces: ['neptune','moon','pluto'] };
    for (const k in expected) for (let i = 0; i < 3; i++)
      assert(decanRuler(k, i) === expected[k][i], `${k} décan ${i + 1} : ${decanRuler(k, i)}, attendu ${expected[k][i]}`);
  });
  test('Les 3 planètes d’un signe appartiennent à des signes du même élément', () => {
    for (const k of SIGN_ORDER) for (let i = 0; i < 3; i++) {
      const owner = SIGN_ORDER[(SIGN_ORDER.indexOf(k) + 4 * i) % 12];
      assert(SIGN_META[owner].element === SIGN_META[k].element, `${k} décan ${i + 1}`);
    }
  });

  /* ---------------- Compatibilité ---------------- */
  section('Compatibilité');
  test('Matrice d’affinités symétrique, scores entiers de 1 à 5', () => {
    for (const a of SIGN_ORDER) for (const b of SIGN_ORDER) {
      assert(AFF[a][b] === AFF[b][a], `${a}/${b} asymétrique`);
      assert(Number.isInteger(AFF[a][b]) && AFF[a][b] >= 1 && AFF[a][b] <= 5, `${a}/${b} hors 1-5`);
    }
  });
  test('Les 144 paires ont un texte de niveau et d’éléments, dans les 7 langues', () => {
    for (const l in I18N) for (const a of SIGN_ORDER) for (const b of SIGN_ORDER) {
      assert(I18N[l].compat.pairs[compatKey(SIGN_META[a].element, SIGN_META[b].element)], `${l} ${a}+${b} : texte d’éléments`);
      assert(I18N[l].compat.levels[AFF[a][b]], `${l} ${a}+${b} : texte de niveau`);
    }
  });
  test('Étoiles : n étoiles dorées de classe star-n, puis des étoiles vides', () => {
    for (let n = 1; n <= 5; n++) {
      const html = starHtml(n);
      assert((html.match(new RegExp(`star-${n}"`, 'g')) || []).length === n, `score ${n}`);
      assert((html.match(/star-empty/g) || []).length === 5 - n, `vides pour ${n}`);
    }
  });

  /* ---------------- Traductions ---------------- */
  section('Traductions');
  function sameShape(a, b, path, lang){
    if (Array.isArray(a)) { assert(Array.isArray(b) && b.length === a.length, `${lang}${path} : longueur`); a.forEach((x, i) => sameShape(x, b[i], `${path}[${i}]`, lang)); return; }
    if (a && typeof a === 'object') { for (const k in a) { assert(b && k in b, `${lang}${path}.${k} manquant`); sameShape(a[k], b[k], `${path}.${k}`, lang); } return; }
    assert(typeof b === typeof a && (typeof b !== 'string' || b.trim()), `${lang}${path} vide ou mal typé`);
  }
  test('Chaque langue a exactement la structure du français', () => { for (const l in I18N) sameShape(I18N.fr, I18N[l], '', l); });
  test('Aucun texte d’interface ou de contenu resté en français', () => {
    // Mots identiques légitimes d'une langue à l'autre
    const ALLOW = new Set(['de:sections.profile', 'tr:sections.profile']);
    for (const l in I18N) { if (l === 'fr') continue;
      for (const k in I18N.fr) if (typeof I18N.fr[k] === 'string') assert(I18N[l][k] !== I18N.fr[k] || ALLOW.has(`${l}:${k}`), `${l}.${k} en français`);
      for (const grp of ['labels', 'sections']) for (const k in I18N.fr[grp])
        assert(I18N[l][grp][k] !== I18N.fr[grp][k] || ALLOW.has(`${l}:${grp}.${k}`), `${l}.${grp}.${k} en français`);
      for (const f of ['summaries', 'love', 'career']) for (const s of SIGN_ORDER) assert(I18N[l][f][s] !== I18N.fr[f][s], `${l}.${f}.${s} en français`);
      for (const s of SIGN_ORDER) for (let i = 0; i < 3; i++) assert(I18N[l].decanTraits[s][i][1] !== I18N.fr.decanTraits[s][i][1], `${l} décan ${s} ${i + 1} en français`);
    }
  });
  test('Chaque description de décan nomme sa planète et a 3 traits', () => {
    for (const l in I18N) for (const s of SIGN_ORDER) for (let i = 0; i < 3; i++) {
      const name = I18N[l].rulers[decanRuler(s, i)];
      const needle = l === 'ru' ? name.slice(0, Math.min(4, name.length - 1)) : name;   // le russe décline les noms
      const [traits, desc] = I18N[l].decanTraits[s][i];
      assert(desc.includes(needle), `${l} ${s} décan ${i + 1} ne nomme pas ${name}`);
      assert(traits.length === 3, `${l} ${s} décan ${i + 1} : ${traits.length} traits`);
    }
  });

  /* ---------------- Zodiaque chinois ---------------- */
  section('Zodiaque chinois');
  test('Dates connues du Nouvel An chinois', () => {
    for (const [y, m, d] of [[1900,1,31],[1916,2,3],[1990,1,27],[2000,2,5],[2024,2,10],[2025,1,29],[2026,2,17],[2034,2,19],[2100,2,9]]) {
      const l = lunarNewYear(y);
      assert(l && l.m === m && l.d === d, `${y} : ${l ? l.m + '/' + l.d : 'absent'}, attendu ${m}/${d}`);
    }
  });
  test('Table du Nouvel An complète et cohérente (1900-2101)', () => {
    let prev = null;
    for (let y = 1900; y <= 2101; y++) {
      const l = lunarNewYear(y);
      assert(l, `${y} absent`);
      assert((l.m === 1 && l.d >= 20) || (l.m === 2 && l.d <= 21), `${y} : ${l.m}/${l.d} hors du 20 janvier – 21 février`);
      const ms = Date.UTC(y, l.m - 1, l.d);
      if (prev) { const days = (ms - prev) / 864e5; assert((days >= 353 && days <= 355) || (days >= 383 && days <= 385), `${y - 1}→${y} : ${days} jours`); }
      prev = ms;
    }
  });
  test('Année, animal, élément et polarité', () => {
    const cases = [['1990-04-15', 1990, 'horse', 'metal', true], ['1990-01-26', 1989, 'snake', 'earth', false],
      ['2026-02-16', 2025, 'snake', 'wood', false], ['2026-02-17', 2026, 'horse', 'fire', true],
      ['2000-02-05', 2000, 'dragon', 'metal', true], ['1984-03-01', 1984, 'rat', 'wood', true]];
    for (const [iso, year, animal, element, yang] of cases) {
      const c = chineseYearInfo(parseISODate(iso));
      assert(c && c.year === year && c.animal === animal && c.element === element && c.yang === yang,
        `${iso} : ${c ? [c.year, c.animal, c.element, c.yang].join(' ') : 'null'}`);
    }
    assert(chineseYearInfo(parseISODate('1899-06-01')) === null && chineseYearInfo(parseISODate('1900-01-15')) === null, 'hors plage');
  });
  test('Cycle de 60 ans : la polarité de l’année suit toujours celle de l’animal', () => {
    for (let y = 1900; y <= 2100; y++) {
      const c = chineseYearInfo({ y, m: 6, d: 1 });
      assert(c.yang === (CN_ORDER.indexOf(c.animal) % 2 === 0), `${y}`);
    }
  });
  test('Animal de l’heure', () => {
    for (const [h, min, a] of [[23,30,'rat'],[0,30,'rat'],[1,0,'ox'],[11,59,'horse'],[12,0,'horse'],[13,0,'goat'],[22,59,'pig']])
      assert(chineseHourAnimal({ h, min }) === a, `${h}:${min} → ${chineseHourAnimal({ h, min })}, attendu ${a}`);
    assert(chineseHourAnimal(null) === null, 'sans heure');
    assert(cnHourRange('rat') === '23:00–00:59' && cnHourRange('horse') === '11:00–12:59', cnHourRange('rat'));
  });
  test('Relations conformes aux règles du cycle des 12 branches', () => {
    // Vérification indépendante des listes : opposition = 6 branches d'écart, harmonie = somme ≡ 1 (mod 12),
    // triade = même reste modulo 4, nuisance = somme ≡ 7 (mod 12)
    for (let i = 0; i < 12; i++) for (let j = 0; j < 12; j++) {
      if (i === j) continue;
      const a = CN_ORDER[i], b = CN_ORDER[j], rel = cnRelation(a, b);
      let expected;
      if (Math.abs(i - j) === 6) expected = 'clash';
      else if ((i + j) % 12 === 1) expected = 'harmony';
      else if (i % 4 === j % 4) expected = 'triad';
      else if ((i + j) % 12 === 7) expected = 'harm';
      if (expected) assert(rel === expected, `${a}+${b} : ${rel}, attendu ${expected}`);
      else assert(rel === 'punishment' || rel === 'neutral', `${a}+${b} : ${rel}`);
      assert(cnRelation(a, b) === cnRelation(b, a), `${a}+${b} asymétrique`);
    }
    for (const [a, b, rel] of [['ox','dog','punishment'],['rat','rabbit','punishment'],['dragon','dragon','selfPunish'],['rat','rat','same'],['snake','monkey','harmony']])
      assert(cnRelation(a, b) === rel, `${a}+${b} : ${cnRelation(a, b)}, attendu ${rel}`);
  });
  test('Nom de l’année dans chaque langue, sans trou ni accord manquant', () => {
    const expected = { fr: 'Année du Cheval de Feu', en: 'Year of the Fire Horse', es: 'Año del Caballo de Fuego', zh: '火马年',
      ru: 'Год Огненной Лошади', de: 'Jahr des Feuer-Pferdes', it: 'Anno del Cavallo di Fuoco', ja: '火のウマ年', ko: '붉은 말의 해', pt: 'Ano do Cavalo de Fogo', tr: 'Ateş Atı Yılı', ar: 'عام حصان النار', hi: 'अग्नि घोड़े का वर्ष', th: 'ปีมะเมีย ธาตุไฟ' };
    for (const l in I18N) {
      assert(cnYearName(I18N[l], 'horse', 'fire') === expected[l], `${l} : ${cnYearName(I18N[l], 'horse', 'fire')}`);
      for (const a of CN_ORDER) for (const e of CN_ELEMENTS) {
        const n = cnYearName(I18N[l], a, e);
        assert(n && !/[{}]|undefined/.test(n), `${l} ${a} ${e} : ${n}`);
      }
    }
  });
  test('Textes chinois traduits, chaque élément nommé dans sa description', () => {
    for (const l in I18N) for (const e of CN_ELEMENTS) {
      const name = I18N[l].cn.elements[e];
      const needle = l === 'ru' ? name.slice(0, Math.min(4, name.length - 1)) : name;
      assert(I18N[l].cn.elementTraits[e][1].includes(needle), `${l} ${e} ne nomme pas ${name}`);
      assert(I18N[l].cn.elementTraits[e][0].length === 3, `${l} ${e} : traits`);
    }
    for (const l in I18N) { if (l === 'fr') continue;
      for (const f of ['summaries', 'love', 'career']) for (const a of CN_ORDER) assert(I18N[l].cn[f][a] !== I18N.fr.cn[f][a], `${l}.cn.${f}.${a} en français`);
      for (const k in I18N.fr.cn.relations) assert(I18N[l].cn.relations[k] !== I18N.fr.cn.relations[k], `${l}.cn.relations.${k} en français`);
    }
  });

  /* ---------------- Planètes ---------------- */
  section('Planètes et Lune');
  /* [instant UTC (ms), Soleil, Lune, Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune, Pluton]
     Longitudes géocentriques de référence (astropy ; PyEphem pour Pluton), 16 instants de 1900 à 2100 */
  const BODY_REF = [
    [-2207509120147, 297.604, 143.333, 283.331, 327.603, 297.144, 244.296, 269.656, 251.025, 84.787, 74.985],
    [-1835047804058, 224.486, 63.09, 233.579, 179.149, 67.848, 232.827, 46.941, 295.864, 113.766, 88.736],
    [-1514750940933, 279.969, 312.721, 282.614, 270.594, 213.31, 197.248, 187.366, 336.619, 135.473, 98.987],
    [-1244968648442, 117.162, 46.962, 123.157, 156.881, 64.251, 95.333, 277.184, 15.374, 151.989, 109.38],
    [-794261518774, 217.606, 31.907, 224.05, 250.326, 222.081, 170.149, 100.733, 72.387, 185.194, 130.239],
    [-452536165956, 156.161, 300.475, 176.73, 155.61, 151.838, 136.773, 225.903, 120.276, 206.202, 146.796],
    [-8001846362, 187.034, 62.702, 184.962, 158.825, 275.735, 194.352, 37.614, 184.576, 236.69, 175.388],
    [443115421838, 295.697, 89.301, 272.36, 258.848, 212.809, 269.356, 225.103, 251.977, 269.912, 212.033],
    [794321566632, 343.481, 19.749, 316.668, 301.894, 135.763, 254.184, 344.821, 298.963, 294.763, 240.604],
    [1131053277083, 221.563, 244.264, 244.915, 268.559, 46.229, 211.909, 131.005, 336.9, 314.836, 262.824],
    [1469218749004, 120.43, 336.714, 136.835, 133.044, 236.412, 170.45, 250.155, 24.489, 341.655, 285.842],
    [2029426330386, 33.639, 101.658, 35.82, 60.103, 70.226, 0.515, 105.713, 92.872, 20.321, 318.161],
    [2593467682172, 348.11, 77.238, 356.212, 34.138, 288.384, 182.911, 325.999, 178.725, 58.071, 341.646],
    [2981601478225, 94.526, 228.444, 114.403, 103.235, 102.088, 181.673, 119.569, 233.16, 87.562, 357.737],
    [3337946183825, 197.458, 205.636, 182.461, 217.038, 139.831, 179.958, 254.287, 281.157, 114.286, 8.742],
    [3774043823158, 133.419, 114.935, 160.715, 100.204, 185.355, 220.398, 69.314, 340.979, 142.517, 24.456]
  ];
  /* [instant UTC (ms), planète, rétrograde ?] — astropy, instants éloignés des stations */
  const RETRO_REF = [
    [1224710146923, "mercury", false],
    [1778561836714, "mercury", false],
    [-245015716434, "mercury", false],
    [-459340231837, "mercury", true],
    [14958831638, "mercury", false],
    [361405858307, "mercury", true],
    [1498526025168, "mercury", false],
    [509995941279, "mercury", false],
    [662255379504, "venus", false],
    [1011466097609, "venus", false],
    [-628916425810, "venus", true],
    [999259614269, "venus", false],
    [-273647736620, "venus", true],
    [379640959719, "venus", true],
    [1663325445365, "venus", false],
    [2009653761950, "venus", false],
    [3352030857853, "mars", true],
    [986337934628, "mars", false],
    [243667148555, "mars", false],
    [-330038486324, "mars", false],
    [893743333085, "mars", false],
    [2923721719942, "mars", false],
    [392402096455, "mars", false],
    [3266727886597, "mars", false],
    [-472401860921, "jupiter", true],
    [2748104997097, "jupiter", false],
    [-349001747045, "jupiter", false],
    [3132267493984, "jupiter", false],
    [-383136336885, "jupiter", false],
    [854528514947, "jupiter", false],
    [1766481939106, "jupiter", true],
    [3318562938453, "jupiter", true],
    [677136067914, "saturn", true],
    [3061851912013, "saturn", true],
    [2179621461700, "saturn", true],
    [2911196981563, "saturn", false],
    [1866690850849, "saturn", false],
    [2356277334580, "saturn", false],
    [-287440057952, "saturn", false],
    [313319585153, "saturn", false],
    [-584764815559, "uranus", false],
    [3027108467278, "uranus", false],
    [2675370917759, "uranus", false],
    [667217809463, "uranus", false],
    [3266171182938, "uranus", true],
    [247100930035, "uranus", false],
    [3397598556728, "neptune", false],
    [1709628996158, "neptune", false],
    [-529712864486, "neptune", true],
    [1200510699858, "neptune", false],
    [186635182147, "neptune", false],
    [486169092753, "neptune", true],
    [983226535892, "neptune", false]
  ];
  /* Phases lunaires de janvier à juin 2024 (astropy) */
  const PHASE_REF = [
    [1704339029255, "lastQuarter"],
    [1704974247199, "new"],
    [1705549956091, "firstQuarter"],
    [1706205240222, "full"],
    [1706915882383, "lastQuarter"],
    [1707519552011, "new"],
    [1708095655787, "firstQuarter"],
    [1708777822389, "full"],
    [1709479416796, "lastQuarter"],
    [1710061224427, "new"],
    [1710648637346, "firstQuarter"],
    [1711350020588, "full"],
    [1712027685246, "lastQuarter"],
    [1712600455372, "new"],
    [1713208381756, "firstQuarter"],
    [1713916143353, "full"],
    [1714562830831, "lastQuarter"],
    [1715138521236, "new"],
    [1715773678431, "firstQuarter"],
    [1716472386298, "full"],
    [1717089156584, "lastQuarter"],
    [1717677463200, "new"],
    [1718342305752, "firstQuarter"],
    [1719018470025, "full"],
    [1719611604418, "lastQuarter"]
  ];
  test(`Positions des 10 astres à ±0,08° des références (${BODY_REF.length} instants, 1900-2100)`, () => {
    for (const row of BODY_REF) BODIES.forEach((b, i) => {
      const d = angleDiff(bodyLongitude(b, row[0]), row[i + 1]);
      assert(d < 0.08, `${b} le ${new Date(row[0]).toISOString().slice(0, 10)} : écart ${d.toFixed(3)}°`);
    });
  });
  test(`Rétrogradations conformes (${RETRO_REF.length} cas)`, () => {
    for (const [ms, b, r] of RETRO_REF) assert(isRetrograde(b, ms) === r, `${b} le ${new Date(ms).toISOString().slice(0, 10)}`);
    assert(!isRetrograde('sun', Date.now()) && !isRetrograde('moon', Date.now()), 'Soleil ou Lune rétrogrades');
  });
  test(`Phases de la Lune : ${PHASE_REF.length} événements de 2024 retrouvés à moins de 10 minutes`, () => {
    const found = lunarEvents(Date.UTC(2024, 0, 1), Date.UTC(2024, 6, 1));
    assert(found.length === PHASE_REF.length, `${found.length} trouvés`);
    for (const [ms, type] of PHASE_REF) {
      const f = found.find(e => e.type === type && Math.abs(e.ms - ms) < 6e5);
      assert(f, `${type} du ${new Date(ms).toISOString().slice(0, 16)} non retrouvé`);
    }
    const full = moonPhase(PHASE_REF.find(e => e[1] === 'full')[0]);
    assert(full.index === 4 && full.illumination > 0.99, 'pleine Lune mal classée');
  });
  test('Aspects « signe entier »', () => {
    const exp = { aries:'conj', leo:'trine', sagittarius:'trine', cancer:'square', capricorn:'square', libra:'opp', gemini:null, taurus:null };
    for (const s in exp) assert(wholeSignAspect(s, 'aries') === exp[s], `${s} → ${wholeSignAspect(s, 'aries')}`);
  });
  test('Transits sur une semaine : plages cohérentes, Lune exclue', () => {
    const tr = transits('scorpio', { y: 2026, m: 10, d: 25 }, 7);
    assert(tr.noons.length === 7, 'jours');
    assert(!tr.aspects.some(a => a.body === 'moon'), 'Lune présente en mode semaine');
    for (const a of [...tr.aspects, ...tr.retro]) assert(a.from >= 0 && a.to <= 6 && a.from <= a.to, `${a.body} : plage ${a.from}-${a.to}`);
    for (const a of tr.aspects) assert(wholeSignAspect(a.sign, 'scorpio') === a.aspect, `${a.body} : aspect incohérent`);
    const day = transits('scorpio', { y: 2026, m: 10, d: 25 }, 1);
    assert(day.aspects.every(a => a.from === 0 && a.to === 0), 'mode jour');
  });
  test('Lune natale : un signe avec l’heure, un ou deux sans', () => {
    const d = { y: 1990, m: 4, d: 15 };
    assert(natalMoon(d, { h: 10, min: 30 }).signs.length === 1, 'avec heure');
    const n = natalMoon(d, null).signs.length;
    assert(n === 1 || n === 2, `${n} signes`);
  });
  test('Textes de l’horoscope : traduits, sans répéter l’en-tête', () => {
    // L'en-tête affiche déjà « Mercure ℞ rétrograde » : le texte ne doit pas recommencer par le nom de la planète
    for (const l in I18N) for (const b of Object.keys(I18N.fr.horo.retroTexts)) {
      const txt = I18N[l].horo.retroTexts[b];
      assert(txt && !txt.startsWith(I18N[l].rulers[b]), `${l} ${b} répète le nom de la planète`);
    }
    for (const l in I18N) { if (l === 'fr') continue;
      for (const b of BODIES) for (const a of ['conj','trine','square','opp'])
        assert(I18N[l].horo.texts[b][a] !== I18N.fr.horo.texts[b][a], `${l} ${b} ${a} en français`);
      for (const b of Object.keys(I18N.fr.horo.retroTexts))
        assert(I18N[l].horo.retroTexts[b] !== I18N.fr.horo.retroTexts[b], `${l} rétrogradation ${b} en français`);
    }
  });

  /* ---------------- Carte du ciel ---------------- */
  section('Carte du ciel');
  /* [instant UTC (ms), objet, ra, dec (J2000, étoiles), latitude, longitude, hauteur, azimut] — astropy, sans réfraction */
  const ALTAZ_REF = [
    [660638107141, "star", 279.2347, 38.7837, 48.86, 2.35, 21.807, 55.438],
    [660638107141, "jupiter", 0, 0, 48.86, 2.35, 43.867, 241.863],
    [660638107141, "star", 279.2347, 38.7837, 35.68, 139.69, 61.294, 287.099],
    [660638107141, "star", 279.2347, 38.7837, 64.15, -21.94, 21.468, 42.965],
    [660638107141, "jupiter", 0, 0, 64.15, -21.94, 41.709, 202.576],
    [1917098176728, "star", 37.9546, 89.2641, 48.86, 2.35, 48.262, 0.206],
    [1917098176728, "mars", 0, 0, 48.86, 2.35, 9.815, 278.33],
    [1917098176728, "star", 279.2347, 38.7837, 35.68, 139.69, 15.03, 307.318],
    [1917098176728, "star", 37.9546, 89.2641, 64.15, -21.94, 63.549, 359.729],
    [1202133413365, "star", 279.2347, 38.7837, 48.86, 2.35, 42.621, 283.918],
    [1202133413365, "star", 101.2872, -16.7161, -33.87, 151.21, 55.694, 291.64],
    [1202133413365, "star", 101.2872, -16.7161, 35.68, 139.69, 33.726, 205.132],
    [1202133413365, "star", 279.2347, 38.7837, 64.15, -21.94, 54.677, 244.669],
    [2161981600646, "star", 279.2347, 38.7837, 48.86, 2.35, 74.473, 124.105],
    [2161981600646, "star", 186.6496, -63.0991, -33.87, 151.21, 13.47, 161.044],
    [2161981600646, "star", 37.9546, 89.2641, 35.68, 139.69, 36.258, 0.137],
    [2161981600646, "star", 37.9546, 89.2641, 64.15, -21.94, 63.566, 0.175],
    [2161981600646, "mars", 0, 0, 64.15, -21.94, 12.104, 279.681],
    [2251417870077, "jupiter", 0, 0, 48.86, 2.35, 17.583, 234.047],
    [2251417870077, "mars", 0, 0, -33.87, 151.21, 42.278, 318.019],
    [2251417870077, "star", 37.9546, 89.2641, 35.68, 139.69, 36.216, 0.246],
    [2251417870077, "star", 279.2347, 38.7837, 64.15, -21.94, 51.725, 107.158],
    [2251417870077, "jupiter", 0, 0, 64.15, -21.94, 14.968, 207.643],
    [-46785010468, "jupiter", 0, 0, 48.86, 2.35, 37.207, 120.059],
    [-46785010468, "star", 186.6496, -63.0991, -33.87, 151.21, 36.91, 213.165],
    [-46785010468, "star", 37.9546, 89.2641, 35.68, 139.69, 34.983, 0.671],
    [-46785010468, "star", 279.2347, 38.7837, 64.15, -21.94, 13.338, 350.448],
    [-46785010468, "jupiter", 0, 0, 64.15, -21.94, 19.117, 104.305],
    [-261597103805, "star", 37.9546, 89.2641, 48.86, 2.35, 49.302, 358.77],
    [-261597103805, "moon", 0, 0, -33.87, 151.21, 67.684, 47.41],
    [-261597103805, "star", 279.2347, 38.7837, 35.68, 139.69, 49.634, 69.805],
    [-261597103805, "mars", 0, 0, 35.68, 139.69, 38.825, 217.946],
    [-261597103805, "star", 37.9546, 89.2641, 64.15, -21.94, 64.883, 358.713],
    [3120123838336, "jupiter", 0, 0, 48.86, 2.35, 4.292, 124.804],
    [3120123838336, "star", 186.6496, -63.0991, -33.87, 151.21, 11.036, 165.243],
    [3120123838336, "star", 101.2872, -16.7161, 35.68, 139.69, 4.181, 114.149],
    [3120123838336, "star", 279.2347, 38.7837, 64.15, -21.94, 50.977, 105.17],
    [3120123838336, "mars", 0, 0, 64.15, -21.94, 11.336, 192.119],
    [748388735626, "star", 101.2872, -16.7161, -33.87, 151.21, 68.612, 319.854],
    [748388735626, "jupiter", 0, 0, -33.87, 151.21, 9.932, 90.989],
    [748388735626, "star", 37.9546, 89.2641, 35.68, 139.69, 35.974, 359.127],
    [645730878820, "star", 279.2347, 38.7837, 48.86, 2.35, 19.922, 53.303],
    [645730878820, "star", 279.2347, 38.7837, -33.87, 151.21, 6.663, 326.906],
    [645730878820, "mars", 0, 0, -33.87, 151.21, 30.081, 61.831],
    [645730878820, "moon", 0, 0, 35.68, 139.69, 20.681, 84.781],
    [645730878820, "star", 37.9546, 89.2641, 64.15, -21.94, 63.812, 358.395]
  ];
  const MOONLAT_REF = [
    [4074957468507, -4.9672],
    [1824447334920, -2.3407],
    [1093034670102, 0.7665],
    [2576531052951, 1.184],
    [3253728885184, 0.1465],
    [2298192017614, 2.4004],
    [597207472426, -2.7787],
    [-1350830367176, 1.902],
    [1746060278359, 5.15],
    [5759449417, 1.685]
  ];
  test(`Hauteur et azimut à ±0,1° d’astropy (${ALTAZ_REF.length} cas : étoiles, Lune, planètes, 4 villes)`, () => {
    for (const [ms, kind, ra, dec, la, lo, alt, az] of ALTAZ_REF) {
      let h;
      if (kind === 'star') { const p = precessFromJ2000(ra, dec, julianCenturies(ms)); h = altAz(p[0], p[1], la, lo, ms); }
      else h = bodyAltAz(kind, la, lo, ms);
      const dAz = angleDiff(h.az, az) * Math.cos(alt * DEG);
      assert(Math.abs(h.alt - alt) < 0.1 && dAz < 0.1, `${kind} (${la}, ${lo}) : hauteur ${h.alt.toFixed(2)} / ${alt}, azimut ${h.az.toFixed(2)} / ${az}`);
    }
  });
  test('Latitude écliptique de la Lune à ±0,02°', () => {
    for (const [ms, l] of MOONLAT_REF) assert(Math.abs(bodyLatitude('moon', ms) - l) < 0.02, `${new Date(ms).toISOString().slice(0, 10)}`);
  });
  test('Projection : zénith au centre, nord en haut, est à gauche', () => {
    const near = (a, b) => Math.abs(a[0] - b[0]) < 1e-9 && Math.abs(a[1] - b[1]) < 1e-9;
    assert(near(projectSky(90, 0, 100), [0, 0]), 'zénith');
    assert(near(projectSky(0, 0, 100), [0, -100]), 'nord');
    assert(near(projectSky(0, 90, 100), [-100, 0]), 'est');
    assert(near(projectSky(0, 270, 100), [100, 0]), 'ouest');
  });
  test('Table des éclipses : éclipses connues présentes, dans l’ordre', () => {
    const known = { '1999-08-11':'T', '2017-08-21':'T', '2023-04-20':'H', '2024-04-08':'T', '2026-08-12':'T', '2027-02-06':'A',
      '2018-07-27':'t', '2022-11-08':'t', '2024-03-25':'n', '2025-03-14':'t', '2026-03-03':'t', '2026-08-28':'p' };
    const byDay = {}; for (const [m, ty] of ECLIPSES) byDay[new Date(m * 60000).toISOString().slice(0, 10)] = ty;
    for (const d in known) assert(byDay[d] === known[d], `${d} : ${byDay[d]}, attendu ${known[d]}`);
    for (let i = 1; i < ECLIPSES.length; i++) assert(ECLIPSES[i][0] > ECLIPSES[i - 1][0], 'ordre');
    assert(ECLIPSES.length > 650 && ECLIPSES.length < 720, `${ECLIPSES.length} éclipses`);
  });
  test('Visibilité locale des éclipses de Lune', () => {
    const at = d => ECLIPSES.find(e => new Date(e[0] * 60000).toISOString().startsWith(d))[0] * 60000;
    assert(lunarEclipseVisible(at('2018-07-27'), 48.86, 2.35), '27 juillet 2018 depuis Paris');
    assert(!lunarEclipseVisible(at('2022-11-08'), 48.86, 2.35), '8 novembre 2022 depuis Paris');
    assert(lunarEclipseVisible(at('2022-11-08'), 35.68, 139.69), '8 novembre 2022 depuis Tokyo');
  });
  test('Étoiles filantes : pluies actives et prochain pic', () => {
    assert(activeShowers({ y: 2026, m: 8, d: 12 }).includes('perseids'), 'Perséides le 12 août');
    assert(activeShowers({ y: 2027, m: 1, d: 2 }).includes('quadrantids'), 'Quadrantides le 2 janvier');
    assert(activeShowers({ y: 2026, m: 3, d: 1 }).length === 0, 'rien le 1er mars');
    const a = nextShowerPeak({ y: 2026, m: 3, d: 1 }), b = nextShowerPeak({ y: 2026, m: 12, d: 30 });
    assert(a.key === 'lyrids' && a.date.y === 2026, `après le 1er mars : ${a.key}`);
    assert(b.key === 'quadrantids' && b.date.y === 2027, `après le 30 décembre : ${b.key} ${b.date.y}`);
  });
  test('Villes : coordonnées valides, pays reconnus, ville par défaut pour chaque langue', () => {
    const names = new Set();
    for (const [n, cc, la, lo] of CITIES) {
      assert(Math.abs(la) <= 90 && Math.abs(lo) <= 180, n);
      assert(new Intl.DisplayNames(['fr'], { type: 'region' }).of(cc) !== cc, `${n} : pays ${cc}`);
      assert(!names.has(n), `${n} en double`); names.add(n);
    }
    for (const l in I18N) assert(names.has(DEFAULT_CITY[l]), `ville par défaut ${l}`);
  });

  /* ---------------- Compatibilité ---------------- */
  section('Compatibilité à deux');
  test('Axes et moyenne : Bélier-Cheval (15/04/1990) et Lion-Dragon (10/08/1988)', () => {
    const c = compatibility({ date: { y: 1990, m: 4, d: 15 }, time: { h: 10, min: 30 } }, { date: { y: 1988, m: 8, d: 10 }, time: { h: 8, min: 0 } });
    assert(c.west.a === 'aries' && c.west.b === 'leo' && c.west.score === 5, `occidental : ${c.west.a} ${c.west.b} ${c.west.score}`);
    assert(c.cn.a === 'horse' && c.cn.b === 'dragon' && c.cn.rel === 'neutral' && c.cn.score === 3, `chinois : ${c.cn.a} ${c.cn.b} ${c.cn.rel}`);
    assert(c.moon && !c.moonUnknown, 'Lunes connues avec les heures');
    assert(Math.abs(c.avg - (c.west.score + c.cn.score + c.moon.score) / 3) < 1e-12, 'moyenne');
  });
  test('La compatibilité est symétrique', () => {
    let seed = 7; const rnd = n => (seed = (seed * 16807) % 2147483647) % n;
    for (let k = 0; k < 40; k++) {
      const p = { date: { y: 1920 + rnd(170), m: 1 + rnd(12), d: 1 + rnd(28) }, time: rnd(2) ? { h: rnd(24), min: rnd(60) } : null };
      const q = { date: { y: 1920 + rnd(170), m: 1 + rnd(12), d: 1 + rnd(28) }, time: rnd(2) ? { h: rnd(24), min: rnd(60) } : null };
      const a = compatibility(p, q), b = compatibility(q, p);
      assert(Math.abs(a.avg - b.avg) < 1e-12 && a.west.score === b.west.score && !!a.moon === !!b.moon, `paire ${k}`);
      assert(a.avg >= 1 && a.avg <= 5, `moyenne ${a.avg}`);
    }
  });
  test('Axes absents : hors plage chinoise, Lune incertaine', () => {
    const c = compatibility({ date: { y: 1850, m: 6, d: 1 }, time: { h: 12, min: 0 } }, { date: { y: 1990, m: 4, d: 15 }, time: { h: 12, min: 0 } });
    assert(c.cn === null, 'axe chinois hors 1900-2100');
    assert(Math.abs(c.avg - (c.west.score + c.moon.score) / 2) < 1e-12, 'moyenne sur 2 axes');
    // Une date sans heure où la Lune change de signe → axe lunaire écarté
    let day = null;
    for (let d = 1; d <= 28 && !day; d++) if (natalMoon({ y: 2000, m: 1, d }, null).signs.length === 2) day = d;
    assert(day, 'aucun changement de signe lunaire trouvé en janvier 2000');
    const u = compatibility({ date: { y: 2000, m: 1, d: day }, time: null }, { date: { y: 1990, m: 4, d: 15 }, time: { h: 12, min: 0 } });
    assert(u.moonUnknown && u.moon === null, 'Lune incertaine non écartée');
  });

  /* ---------------- Interface ---------------- */
  section('Interface');
  test('Le nom saisi est neutralisé avant insertion dans la page', () => {
    assert(escapeHtml(`<img src=x onerror="a">&'`) === '&lt;img src=x onerror=&quot;a&quot;&gt;&amp;&#39;', escapeHtml(`<img src=x onerror="a">&'`));
  });
  test('Nom de fichier de l’export', () => {
    assert(slugify('Joann Dupré') === 'joann-dupre', slugify('Joann Dupré'));
    assert(slugify('  Ève--Marie ! ') === 'eve-marie', slugify('  Ève--Marie ! '));
    assert(slugify('李小龙') === '', 'nom non latin');
  });
  test('Date du jour en en-tête', () => {
    const d = new Date(2026, 9, 25, 12, 0);
    assert(formatToday('fr', d) === 'Dimanche 25 octobre 2026', formatToday('fr', d));
    assert(formatToday('en', d) === 'Sunday, October 25, 2026', formatToday('en', d));
  });
  test('Ligne de naissance du profil', () => {
    assert(formatBirth('1990-04-15', null, 'fr') === '15 avril 1990', formatBirth('1990-04-15', null, 'fr'));
    assert(formatBirth('1990-04-15', '10:30', 'fr') === '15 avril 1990 · 10:30', formatBirth('1990-04-15', '10:30', 'fr'));
    assert(formatBirth('pas une date', null, 'fr') === '', 'date invalide');
  });

  test('Symboles des signes forcés en rendu texte (sinon emoji violets sous Windows et à l’export)', () => {
    for (const k of SIGN_ORDER) assert(SIGN_META[k].sym.length === 2 && SIGN_META[k].sym.endsWith('\uFE0E'), `${k} sans sélecteur de variante texte`);
  });

  test('Mode clair : couleurs des 12 signes lisibles (contraste ≥ 4,5:1, WCAG AA)', () => {
    const lum = h => { const c = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255).map(x => x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
    const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
    const palettes = [{ gold: '#e8c36a', purple: '#9b7ede' }, ...Object.values(SIGN_THEME)];
    for (const p of palettes) {
      const g = shade(p.gold, LIGHT_SHADE.gold), v = shade(p.purple, LIGHT_SHADE.purple);
      assert(ratio(g, '#f4f1fb') >= 4.5, `texte ${g} sur le fond : ${ratio(g, '#f4f1fb').toFixed(2)}`);
      assert(ratio('#ffffff', g) >= 4.5, `bouton ${g} : ${ratio('#ffffff', g).toFixed(2)}`);
      assert(ratio('#ffffff', v) >= 4.5, `pastille ${v} : ${ratio('#ffffff', v).toFixed(2)}`);
    }
  });
  test('Roue du zodiaque : Bélier à gauche, sens antihoraire, chaque signe ramené en haut', () => {
    assert(wheelScreenAngle(0) === 270 && wheelScreenAngle(90) === 180, 'orientation');
    for (const k of SIGN_ORDER) {
      const a = (wheelScreenAngle(SIGN_ORDER.indexOf(k) * 30 + 15) + wheelTargetFor(k)) % 360;
      assert(Math.abs(a) < 1e-9, `${k} : ${a}°`);
    }
    assert(document.querySelectorAll('#wheel .ws').length === 12 && document.querySelectorAll('#wheel .wg').length === 12, 'roue incomplète');
  });
  test('Historique : récent en tête, sans doublon, 8 au maximum', () => {
    let h = [];
    for (let i = 1; i <= 10; i++) h = pushHistory(h, { date: `1990-01-${String(i).padStart(2, '0')}`, time: '', name: '', sign: 'capricorn' });
    assert(h.length === 8 && h[0].date === '1990-01-10' && h[7].date === '1990-01-03', `${h.length} entrées`);
    h = pushHistory(h, { date: '1990-01-05', time: '', name: '', sign: 'capricorn' });
    assert(h.length === 8 && h[0].date === '1990-01-05' && h.filter(e => e.date === '1990-01-05').length === 1, 'doublon');
    h = pushHistory(h, { date: '1990-01-05', time: '', name: 'Alex', sign: 'capricorn' });
    assert(h[0].name === 'Alex' && h.length === 8, 'même date, autre nom : entrée distincte');
  });

  test('Version autonome : copie vierge complète, sans donnée personnelle', () => {
    if (!document.documentElement.dataset.standalone) { assert(PRISTINE_PAGE === null, 'copie inutile hors version autonome'); return; }
    assert(PRISTINE_PAGE, 'copie absente');
    // Analyse de la copie comme un vrai document (chercher du texte se tromperait : ce test contient lui-même « <script src= »)
    const doc = new DOMParser().parseFromString('<!DOCTYPE html><html><head>' + PRISTINE_PAGE.head + '</head><body>' + PRISTINE_PAGE.body + '</body></html>', 'text/html');
    assert(doc.querySelectorAll('script[src], link[rel="stylesheet"]').length === 0, 'ressource externe dans la copie');
    const code = [...doc.querySelectorAll('script, style')].map(n => n.textContent).join('\n');
    for (const marker of ['html2canvas', 'const STARS', 'I18N.fr =', 'I18N.it =', 'function sunLongitude', 'function renderMap', '.dual{'])
      assert(code.includes(marker), `élément manquant dans la copie : ${marker}`);
    assert(doc.getElementById('zodiacTests'), 'suite de tests absente de la copie');
    assert(!doc.getElementById('result').innerHTML.trim() && !doc.getElementById('history').innerHTML.trim(), 'la copie contient un résultat ou un historique');
  });

  /* ---------------- Thème natal ---------------- */
  // Références : maisons Placidus de la Swiss Ephemeris 2.10 ; conversions d'heure de la base IANA 2026e (Python zoneinfo)
  const NATAL_REF = [[-708271082201, "Buenos Aires", -34.6, -58.38, 104.4312, 34.6856, [104.4312, 143.6648, 182.9199, 214.6856, 239.7316, 261.6904, 284.4312, 323.6648, 2.9199, 34.6856, 59.7316, 81.6904]], [1808738609523, "Reykjavík", 64.15, -21.94, 131.1247, 3.46, [131.1247, 141.8403, 157.6332, 183.46, 229.1792, 282.4117, 311.1247, 321.8403, 337.6332, 3.46, 49.1792, 102.4117]], [2041354518064, "Paris", 48.86, 2.35, 8.8061, 273.7504, [8.8061, 51.0971, 74.8487, 93.7504, 113.3476, 139.9075, 188.8061, 231.0971, 254.8487, 273.7504, 293.3476, 319.9075]], [939865184476, "Singapore", 1.35, 103.82, 242.483, 148.7795, [242.483, 270.4874, 298.6316, 328.7795, 1.0009, 32.932, 62.483, 90.4874, 118.6316, 148.7795, 181.0009, 212.932]], [-160320655649, "Anchorage", 61.22, -149.9, 173.097, 79.5768, [173.097, 193.3029, 221.2133, 259.5768, 300.368, 330.7187, 353.097, 13.3029, 41.2133, 79.5768, 120.368, 150.7187]], [2921785064563, "Nairobi", -1.29, 36.82, 64.5487, 331.0393, [64.5487, 92.4845, 120.7148, 151.0393, 183.3454, 215.1639, 244.5487, 272.4845, 300.7148, 331.0393, 3.3454, 35.1639]], [3538939849700, "Moskva", 55.76, 37.62, 234.7079, 171.9729, [234.7079, 266.6279, 310.9963, 351.9729, 20.2496, 39.8476, 54.7079, 86.6279, 130.9963, 171.9729, 200.2496, 219.8476]], [-1886300567184, "Sydney", -33.87, 151.21, 357.3885, 267.1616, [357.3885, 24.4266, 54.8147, 87.1616, 119.5245, 150.0329, 177.3885, 204.4266, 234.8147, 267.1616, 299.5245, 330.0329]], [-1874659506952, "Moskva", 55.76, 37.62, 247.0156, 191.46, [247.0156, 284.0275, 333.4864, 11.46, 35.9569, 53.1973, 67.0156, 104.0275, 153.4864, 191.46, 215.9569, 233.1973]], [1186288148917, "Paris", 48.86, 2.35, 131.4745, 24.8186, [131.4745, 149.8852, 173.4484, 204.8186, 243.636, 281.3377, 311.4745, 329.8852, 353.4484, 24.8186, 63.636, 101.3377]], [1743705814408, "Singapore", 1.35, 103.82, 304.2619, 219.46, [304.2619, 335.0756, 7.7156, 39.46, 68.6108, 96.1277, 124.2619, 155.0756, 187.7156, 219.46, 248.6108, 276.1277]], [3405106020073, "Sydney", -33.87, 151.21, 300.4613, 200.0179, [300.4613, 322.5515, 348.5771, 20.0179, 55.2996, 89.7777, 120.4613, 142.5515, 168.5771, 200.0179, 235.2996, 269.7777]], [-1050575707360, "Anchorage", 61.22, -149.9, 153.7319, 49.0885, [153.7319, 170.4633, 194.3153, 229.0885, 273.6309, 308.5848, 333.7319, 350.4633, 14.3153, 49.0885, 93.6309, 128.5848]], [-428294514841, "Anchorage", 61.22, -149.9, 164.1308, 65.789, [164.1308, 182.7779, 208.9538, 245.789, 288.3444, 320.4644, 344.1308, 2.7779, 28.9538, 65.789, 108.3444, 140.4644]]];
  const TZ_REF = [["America/New_York", 2019, 4, 21, 1, 15, 1555823700000], ["Europe/Paris", 1995, 8, 28, 7, 45, 809588700000], ["Europe/Helsinki", 1971, 3, 28, 12, 15, 39003300000], ["Europe/Brussels", 2076, 4, 13, 9, 0, 3353986800000], ["Europe/Vienna", 2006, 3, 5, 8, 0, 1141542000000], ["Europe/Berlin", 1977, 10, 19, 0, 30, 246065400000], ["Europe/Paris", 1979, 6, 27, 9, 45, 299317500000], ["Asia/Singapore", 1980, 3, 16, 15, 15, 322040700000], ["Europe/Paris", 2040, 7, 12, 12, 0, 2225700000000], ["America/Mexico_City", 2034, 5, 25, 14, 0, 2032200000000], ["Indian/Antananarivo", 1994, 5, 2, 13, 0, 767872800000], ["Europe/Zurich", 1987, 9, 20, 11, 15, 559127700000], ["Europe/Berlin", 1970, 12, 18, 2, 30, 30331800000], ["Asia/Ho_Chi_Minh", 1981, 5, 6, 2, 15, 357938100000], ["Asia/Manila", 2076, 5, 16, 5, 0, 3356802000000], ["Europe/Paris", 2053, 9, 13, 1, 15, 2641331700000], ["Asia/Shanghai", 2052, 6, 27, 8, 45, 2603061900000], ["Asia/Kolkata", 2007, 3, 2, 20, 0, 1172845800000], ["Australia/Sydney", 2026, 6, 27, 6, 15, 1782504900000], ["Asia/Hong_Kong", 2044, 3, 21, 13, 0, 2342149200000], ["Pacific/Noumea", 2011, 6, 5, 1, 45, 1307198700000], ["America/Sao_Paulo", 2024, 12, 24, 10, 45, 1735047900000], ["Europe/Madrid", 1974, 8, 13, 4, 0, 145591200000], ["Europe/Warsaw", 2036, 3, 21, 15, 30, 2089722600000], ["Europe/Paris", 1991, 12, 19, 21, 0, 693172800000], ["Asia/Shanghai", 1978, 6, 18, 22, 30, 267028200000], ["America/New_York", 2024, 5, 25, 22, 30, 1716690600000], ["America/Sao_Paulo", 1987, 11, 6, 18, 0, 563227200000], ["Europe/Moscow", 2040, 5, 11, 21, 30, 2220373800000], ["Europe/Moscow", 1973, 9, 21, 21, 30, 117484200000], ["Europe/Berlin", 1970, 11, 12, 23, 45, 27297900000], ["America/Santiago", 2022, 5, 23, 2, 45, 1653288300000], ["Pacific/Noumea", 2057, 10, 17, 21, 45, 2770541100000], ["Europe/Lisbon", 2059, 9, 25, 20, 30, 2831743800000], ["Asia/Riyadh", 2066, 3, 8, 21, 15, 3035297700000], ["Asia/Tehran", 2083, 1, 16, 7, 15, 3567296700000], ["Europe/Luxembourg", 2040, 1, 14, 14, 30, 2210160600000], ["Europe/Warsaw", 2069, 10, 3, 18, 15, 3148042500000], ["America/Toronto", 2083, 6, 1, 11, 45, 3579090300000], ["America/Sao_Paulo", 1971, 7, 28, 3, 30, 49530600000], ["Europe/Paris", 2040, 10, 10, 3, 30, 2233445400000], ["Africa/Abidjan", 2031, 6, 19, 9, 30, 1939627800000], ["Pacific/Auckland", 2069, 1, 13, 3, 30, 3125226600000], ["Africa/Lagos", 2057, 9, 5, 10, 45, 2766908700000], ["Europe/Athens", 2010, 4, 16, 9, 45, 1271400300000], ["Asia/Kuala_Lumpur", 1997, 7, 28, 5, 30, 870039000000], ["Asia/Shanghai", 1977, 8, 9, 13, 0, 239950800000], ["Europe/Rome", 1978, 8, 10, 4, 45, 271565100000], ["Asia/Novosibirsk", 2036, 9, 9, 7, 45, 2104533900000], ["Asia/Manila", 1973, 5, 16, 19, 45, 106400700000], ["Africa/Casablanca", 2065, 10, 24, 3, 0, 3023575200000], ["Asia/Dubai", 1975, 12, 17, 0, 45, 187994700000], ["Europe/Berlin", 1992, 11, 24, 18, 15, 722625300000], ["America/Anchorage", 2075, 9, 7, 0, 45, 3335071500000], ["Asia/Seoul", 2009, 10, 19, 22, 45, 1255959900000], ["America/New_York", 1998, 8, 13, 21, 15, 903057300000], ["America/Havana", 1975, 8, 27, 2, 30, 178353000000], ["Asia/Beirut", 2020, 5, 5, 5, 45, 1588646700000], ["Asia/Ho_Chi_Minh", 2040, 8, 11, 17, 15, 2228292900000], ["Europe/Athens", 2049, 9, 26, 1, 0, 2516220000000]];

  test('Lieu de naissance : heure locale → temps universel (changements d\'heure compris)', () => {
    const iso = ms => new Date(ms).toISOString().slice(0, 16);
    const cases = [
      ['Europe/Paris', 1982, 11, 3, 19, 0, '1982-11-03T18:00'],   // hiver : UTC+1
      ['Europe/Paris', 1982, 7, 15, 19, 0, '1982-07-15T17:00'],   // été : UTC+2
      ['Europe/Paris', 1970, 7, 15, 12, 0, '1970-07-15T11:00'],   // pas d'heure d'été avant 1976
      ['America/New_York', 1990, 7, 4, 12, 0, '1990-07-04T16:00'],
      ['Australia/Sydney', 2000, 1, 1, 12, 0, '2000-01-01T01:00'], // été austral : UTC+11
      ['Europe/Paris', 2024, 3, 31, 2, 30, '2024-03-31T01:30'],   // heure inexistante : décalage d'avant le changement
      ['Europe/Paris', 2024, 10, 27, 2, 30, '2024-10-27T00:30'],  // heure ambiguë : première occurrence
    ];
    for (const [tz, y, m, d, h, mi, exp] of cases) assertEq(iso(zonedInstant({ y, m, d }, h, mi, tz)), exp, `${tz} ${y}-${m}-${d} ${h}:${mi}`);
    for (const [tz, y, m, d, h, mi, exp] of TZ_REF) assertEq(zonedInstant({ y, m, d }, h, mi, tz), exp, `${tz} ${y}-${m}-${d} ${h}:${mi}`);
  });

  test('Villes : chaque fuseau officiel est reconnu par le navigateur', () => {
    for (const c of CITIES) {
      assert(typeof c[4] === 'string' && c[4].includes('/'), `${c[0]} : fuseau manquant`);
      try { new Intl.DateTimeFormat('en', { timeZone: c[4] }); } catch (e) { throw new Error(`${c[0]} : fuseau ${c[4]} inconnu`); }
    }
    assert(birthPlace('Paris').tz === 'Europe/Paris' && birthPlace('Nowhere') === null, 'birthPlace');
  });

  test('Ascendant, Milieu du Ciel et maisons Placidus (Swiss Ephemeris, ≤ 0,03°)', () => {
    const d = (a, b) => Math.abs(((a - b + 540) % 360) - 180);
    for (const [ms, name, lat, lon, asc, mc, cusps] of NATAL_REF) {
      const eps = obliquity(julianCenturies(ms)), ramc = ramcAt(ms, lon);
      assert(d(ascendant(ramc, eps, lat), asc) <= 0.03, `${name} ${new Date(ms).toISOString()} : ascendant`);
      assert(d(midheaven(ramc, eps), mc) <= 0.03, `${name} : Milieu du Ciel`);
      const pc = placidusCusps(ramc, eps, lat);
      assert(pc, `${name} : maisons non calculées`);
      cusps.forEach((v, i) => assert(d(pc[i], v) <= 0.03, `${name} : maison ${i + 1} (${pc[i].toFixed(3)} au lieu de ${v})`));
    }
  });

  test('Maisons : appartenance et repli en maisons égales au-delà du cercle polaire', () => {
    const cusps = [350, 20, 50, 80, 110, 140, 170, 200, 230, 260, 290, 320];
    assertEq(houseOf(355, cusps), 1, 'avant 0°'); assertEq(houseOf(5, cusps), 1, 'après 0°'); assertEq(houseOf(20, cusps), 2, 'sur la pointe');
    assertEq(houseOf(349.9, cusps), 12, 'fin du cycle');
    const polar = natalChart({ y: 2000, m: 6, d: 21 }, { h: 12, min: 0 }, { name: 'Test', lat: 70, lon: 20, tz: 'Europe/Oslo' });
    assertEq(polar.system, 'equal', 'système');
    polar.cusps.forEach((c, i) => assert(Math.abs(((c - polar.asc - 30 * i) % 360 + 360) % 360) < 1e-9, `pointe ${i + 1}`));
  });

  test('Thème natal de référence (3 nov. 1982, 19 h, Paris), quel que soit le fuseau de l\'appareil', () => {
    const c = natalChart({ y: 1982, m: 11, d: 3 }, { h: 19, min: 0 }, birthPlace('Paris'));
    assert(c.exact && c.system === 'placidus', 'thème complet');
    assertEq(new Date(c.ms).toISOString().slice(0, 16), '1982-11-03T18:00', 'instant');
    assertEq(signFromLongitude(c.asc), 'gemini', 'ascendant'); assert(Math.abs(c.asc - 74.72) < 0.03, 'degré de l\'ascendant');
    assertEq(signFromLongitude(c.mc), 'aquarius', 'Milieu du Ciel');
    const by = Object.fromEntries(c.bodies.map(b => [b.body, b]));
    assertEq(by.sun.sign, 'scorpio', 'Soleil'); assertEq(by.sun.house, 6, 'maison du Soleil');
    assertEq(by.moon.sign, 'gemini', 'Lune'); assertEq(by.moon.house, 12, 'maison de la Lune');
    assert(c.aspects.some(a => a.a === 'sun' && a.b === 'venus' && a.type === 'conjunction'), 'Soleil conjoint à Vénus');
    assert(c.aspects.some(a => a.a === 'moon' && a.b === 'uranus' && a.type === 'opposition'), 'Lune opposée à Uranus');
    // Sans lieu : ni ascendant ni maisons
    const partial = natalChart({ y: 1982, m: 11, d: 3 }, { h: 19, min: 0 }, null);
    assert(!partial.exact && partial.asc === null && partial.bodies.every(b => b.house === undefined), 'thème partiel');
  });

  test('Thème natal : textes des 7 langues (ascendants, mots-clés, aspects)', () => {
    for (const lang of Object.keys(I18N)) {
      const n = I18N[lang].natal;
      assert(SIGN_ORDER.every(s => n.asc[s] && n.styles[s]), `${lang} : signe manquant`);
      assert(BODIES.every(b => n.domains[b]) && n.houses.length === 12, `${lang} : astres ou maisons`);
      assert(Object.keys(ASPECT_SYM).every(a => n.aspectNames[a] && n.aspectMeanings[a]), `${lang} : aspects`);
      assertEq(new Set(SIGN_ORDER.map(s => n.asc[s])).size, 12, `${lang} : ascendants distincts`);
      if (lang !== 'ru') SIGN_ORDER.forEach(s => assert(n.asc[s].includes(I18N[lang].signNames[s]), `${lang} : le texte de l'ascendant ${s} ne nomme pas le signe`));
      if (lang !== 'fr') assert(n.asc.aries !== I18N.fr.natal.asc.aries && n.title !== I18N.fr.natal.title, `${lang} : textes non traduits`);
    }
  });

  test('Bulles d\'information (i) : 39 explications complètes et traduites', () => {
    const keys = Object.keys(I18N.fr.info);
    assertEq(keys.length, 39, 'nombre d\'explications');
    for (const lang of Object.keys(I18N)) {
      const info = I18N[lang].info;
      assert(keys.every(k => typeof info[k] === 'string' && info[k].length > 20), `${lang} : explication manquante ou trop courte`);   // 20 : le chinois est bien plus dense
      assertEq(new Set(keys.map(k => info[k])).size, keys.length, `${lang} : explications en double`);
      if (lang !== 'fr') assert(keys.every(k => info[k] !== I18N.fr.info[k]), `${lang} : explication non traduite`);
      assert(I18N[lang].timePlaceHint && I18N[lang].infoLabel && I18N[lang].natal.completeFields, `${lang} : libellés`);
    }
  });

  test('Villes de naissance : base GeoNames complète, fuseaux reconnus', () => {
    const all = loadPlaces();
    assert(all.length > 30000, `seulement ${all.length} villes`);
    for (const tz of PLACE_TZ) { try { new Intl.DateTimeFormat('en', { timeZone: usableTimeZone(tz) }); } catch (e) { throw new Error(`fuseau ${tz} inconnu du navigateur, sans équivalent`); } }
    // Fuseaux récents : l'équivalent ancien donne les mêmes heures (vérifiable quand le navigateur connaît les deux)
    const known = z => { try { new Intl.DateTimeFormat('en', { timeZone: z }); return true; } catch (e) { return false; } };
    const spans = { 'America/Coyhaique': [1947, 2025.15], 'America/Ciudad_Juarez': [1922, 2022.7], 'Europe/Kyiv': [1900, 2026], 'America/Nuuk': [1900, 2026] };
    for (const [tz, old] of Object.entries(TZ_FALLBACK)) {
      assert(known(old), `équivalent ${old} inconnu du navigateur`);
      assert(PLACE_TZ.includes(tz), `${tz} absent de la base des villes`);
      if (known(tz)) {
        assertEq(usableTimeZone(tz), tz, `${tz} connu : gardé tel quel`);
        const [from, until] = spans[tz];
        for (let ms = Date.UTC(from, 0, 1, 12); ms < Date.UTC(Math.floor(until), Math.round((until % 1) * 12), 1); ms += 15 * 86400e3)
          assertEq(tzOffset(ms, old), tzOffset(ms, tz), `${tz} ≠ ${old} le ${new Date(ms).toISOString().slice(0, 10)}`);
      } else assertEq(usableTimeZone(tz), old, `${tz} inconnu : remplacé par ${old}`);
    }
    assertEq(usableTimeZone('Europe/Paris'), 'Europe/Paris', 'fuseau courant inchangé');
    assert(all.every(p => p.tz && Math.abs(p.lat) <= 90 && Math.abs(p.lon) <= 180 && /^[A-Z]{2}$/.test(p.country)), 'ville mal décodée');
    assertEq(new Set(all.map(p => p.key)).size, all.length, 'identifiants uniques');
    assert(all.filter(p => p.country === 'FR').length > 600, 'villes françaises');
    const paris = birthPlace('Paris|FR');
    assert(paris && paris.tz === 'Europe/Paris' && Math.abs(paris.lat - 48.85) < 0.02 && Math.abs(paris.lon - 2.35) < 0.02, 'Paris');
    for (const p of all.filter((_, i) => i % 997 === 0)) assertEq(birthPlace(p.key), p, `aller-retour ${p.key}`);
    // Anciens identifiants (les 123 villes d'avant) : rattachés à la bonne ville de la base, même fuseau
    assertEq(birthPlace('Paris').key, 'Paris|FR', 'ancien identifiant Paris'); assertEq(birthPlace('東京 Tokyo').key, 'Tokyo|JP', 'ancien identifiant Tokyo');
    assert(!searchPlaces('paris', 8).some(p => /^Paris \d/.test(p.name)), 'pas d\'arrondissements dans les suggestions');
    for (const c of CITIES) { const p = birthPlace(c[0]); assert(p && p.country === c[1] && p.tz && Math.hypot(p.lat - c[2], p.lon - c[3]) < 0.35, `ancien identifiant ${c[0]}`); }
  });

  test('Villes de naissance : recherche (accents, autres langues, articles, doublons)', () => {
    const first = q => (searchPlaces(q, 1)[0] || {}).key;
    assertEq(first('paris'), 'Paris|FR', 'paris');
    assertEq(first('Sao Paulo'), 'São Paulo|BR', 'sans accent');
    assertEq(first('londres'), 'London|GB', 'nom français');
    assertEq(first('Moscou'), 'Moscow|RU', 'Moscou');
    assertEq(first('東京'), 'Tokyo|JP', 'écriture japonaise');
    assertEq(first('Le Caire'), 'Cairo|EG', 'article ignoré');
    assertEq(first('القاهرة'), 'Cairo|EG', 'écriture arabe : article et variantes de lettres');
    // Petites villes et grandes villes dans l'écriture de leur pays (noms choisis sans lettres d'autres langues)
    assertEq(first('الدار البيضاء'), 'Casablanca|MA', 'Casablanca en arabe'); assertEq(first('تونس'), 'Tunis|TN', 'Tunis en arabe');
    assertEq(first('Москва'), 'Moscow|RU', 'Moscou en russe'); assertEq(first('Санкт-Петербург'), 'Saint Petersburg|RU', 'Saint-Pétersbourg en russe');
    assertEq(first('Удомля'), 'Udomlya|RU', 'petite ville russe'); assertEq(first('เชียงใหม่'), 'Chiang Mai|TH', 'thaï'); assertEq(first('부산'), 'Busan|KR', 'coréen');
    assert(searchPlaces('saint denis', 8).some(p => p.country === 'RE') && searchPlaces('st denis', 8).some(p => p.country === 'FR'), 'Saint-Denis (Réunion et France), « St » = « Saint »');
    assert(searchPlaces('papeete', 3).some(p => p.country === 'PF' && p.tz === 'Pacific/Tahiti'), 'Papeete');
    assertEq(searchPlaces('zzqx', 5).length, 0, 'aucun résultat');
    const tokyo = birthPlace('Tokyo|JP');
    assertEq(placeName(tokyo, 'ja'), '東京', 'nom japonais'); assertEq(placeName(tokyo, 'zh'), '东京', 'nom chinois simplifié');
    assertEq(placeName(birthPlace('Osaka|JP'), 'ja'), '大阪', 'Osaka en idéogrammes, pas en hiragana');
    assertEq(placeName(birthPlace('Guangzhou|CN'), 'ja'), '広州', 'forme japonaise'); assertEq(placeName(birthPlace('Guangzhou|CN'), 'zh'), '广州', 'forme simplifiée');
    assertEq(placeName(birthPlace('Paris|FR'), 'ja'), 'パリ', 'katakana pour une ville étrangère');
    assertEq(placeName(birthPlace('Seoul|KR'), 'ko'), 'Seoul', 'coréen : nom de la base (noms anciens et actuels mêlés)');
    assertEq(placeName(tokyo, 'fr'), 'Tokyo', 'alphabet latin : nom de la base');
    assertEq(placeName(birthPlace('Papeete|PF'), 'ja'), 'Papeete', 'petite ville sans nom traduit');
    assert(searchPlaces('a', 8).length === 8, 'limite de résultats');
  });

  test('Version corrective : heure stricte, fuseau de la 2e personne, fuseau de la carte, période vérifiée', () => {
    // Heure : HH:MM ou HH:MM:SS, rien d'autre
    assertEq(JSON.stringify(parseTime('12:34')), '{"h":12,"min":34}', '12:34');
    assertEq(JSON.stringify(parseTime('12:34:56')), '{"h":12,"min":34}', 'avec secondes');
    for (const bad of ['12:34xyz', '12:34:99', '24:00', '7:05', '12:3', ' 12:34', '']) assertEq(parseTime(bad), null, `refusé : « ${bad} »`);
    // 2e personne : son fuseau, pas celui de l'appareil. On cherche un jour où la Lune change de signe entre
    // midi à Tokyo et midi à Los Angeles, puis on vérifie que la compatibilité suit le fuseau donné
    let found = null;
    for (let d = 1; d <= 28 && !found; d++) {
      const date = { y: 2001, m: 3, d };
      const tokyo = signFromLongitude(moonLongitude(zonedInstant(date, 12, 0, 'Asia/Tokyo')));
      const la = signFromLongitude(moonLongitude(zonedInstant(date, 12, 0, 'America/Los_Angeles')));
      if (tokyo !== la) found = { date, tokyo, la };
    }
    assert(found, 'jour de test introuvable');
    const me = { date: { y: 1990, m: 6, d: 15 }, time: { h: 12, min: 0 }, tz: 'Europe/Paris' };
    const withTokyo = compatibility(me, { date: found.date, time: { h: 12, min: 0 }, tz: 'Asia/Tokyo' });
    const withLA = compatibility(me, { date: found.date, time: { h: 12, min: 0 }, tz: 'America/Los_Angeles' });
    assertEq(personChart(found.date, { h: 12, min: 0 }, 'Asia/Tokyo').moon.signs[0], found.tokyo, 'Lune de la 2e personne à Tokyo');
    assertEq(personChart(found.date, { h: 12, min: 0 }, 'America/Los_Angeles').moon.signs[0], found.la, 'Lune de la 2e personne à Los Angeles');
    assert(JSON.stringify(withTokyo) !== JSON.stringify(withLA), 'le lieu de la 2e personne change le résultat');
    // Carte du ciel : fuseau de la ville choisie, appareil pour « Ma position »
    assertEq(mapTz({ kind: 'city', name: 'Paris' }), 'Europe/Paris', 'Paris');
    assertEq(mapTz({ kind: 'city', name: '東京 Tokyo' }), 'Asia/Tokyo', 'Tokyo');
    assertEq(mapTz({ kind: 'geo', lat: 1, lon: 2 }), null, 'ma position');
    // Période vérifiée : message présent et traduit dans chaque langue
    for (const l of Object.keys(I18N)) assert(I18N[l].rangeWarning && /1900/.test(I18N[l].rangeWarning) && /2100/.test(I18N[l].rangeWarning), `${l} : avertissement`);
  });

  test('Observation : éclipses de Soleil vues d\'un lieu et nuit (références astropy)', () => {
    const ecl = (iso, lat, lon) => { const day = Date.parse(iso + 'T12:00:00Z') / 60000;
      const e = ECLIPSES.find(x => Math.abs(x[0] - day) < 1440 && 'TAHP'.includes(x[1])); return solarEclipseLocal(e[0] * 60000, lat, lon); };
    const dallas = ecl('2024-04-08', 32.78, -96.80);
    assert(dallas.visible && dallas.kind === 'total', 'Dallas 2024 : totale');
    const tot = (dallas.central.end - dallas.central.start) / 1000;
    assert(Math.abs(tot - 230) <= 45, `Dallas 2024 : totalité ${tot} s au lieu d'environ 230 s`);
    const paris = ecl('2027-08-02', 48.86, 2.35);
    assert(paris.visible && paris.kind === 'partial' && Math.abs(paris.obscuration - 0.513) < 0.02, `Paris 2027 : ${paris.obscuration}`);
    const ny = ecl('2021-06-10', 40.71, -74.01);
    assert(ny.visible && ny.risesEclipsed && !ny.setsEclipsed && Math.abs(ny.obscuration - 0.725) < 0.02, 'New York 2021 : lever éclipsé');
    const madrid = ecl('2026-08-12', 40.42, -3.70);
    assert(madrid.visible && madrid.setsEclipsed && madrid.obscuration > 0.99, 'Madrid 2026 : coucher éclipsé, Soleil caché à plus de 99 %');
    const sydney = ecl('2026-08-12', -33.87, 151.21);
    assert(sydney === null || !sydney.visible, 'Sydney 2026 : non visible');
    assertEq(obscuration(1, 1, 0), 1, 'disques confondus'); assertEq(obscuration(1, 1, 2), 0, 'disques tangents');
    assert(Math.abs(obscuration(1, 1, 1) - 0.391) < 0.001, 'demi-recouvrement');
    // Nuit à Paris, 25 octobre 2026 : coucher 16:42:10 TU, lever 06:27:50 TU (astropy) — à 90 s près
    const plan = nightPlan(48.86, 2.35, zonedInstant({ y: 2026, m: 10, d: 25 }, 12, 0, 'Europe/Paris'));
    assert(Math.abs(plan.sunset - 1792946530000) < 90e3, `coucher ${new Date(plan.sunset).toISOString()}`);
    assert(Math.abs(plan.sunrise - 1792996070000) < 90e3, `lever ${new Date(plan.sunrise).toISOString()}`);
    assert(plan.astroDusk > plan.sunset && plan.astroDawn < plan.sunrise && !plan.polarDay && !plan.polarNight, 'nuit noire entre coucher et lever');
    const day = nightPlan(69.65, 18.96, zonedInstant({ y: 2026, m: 6, d: 21 }, 12, 0, 'Europe/Oslo'));
    const night = nightPlan(69.65, 18.96, zonedInstant({ y: 2026, m: 12, d: 21 }, 12, 0, 'Europe/Oslo'));
    assert(day.polarDay && !day.sunset && night.polarNight && !night.sunrise, 'Tromsø : jour polaire en juin, nuit polaire en décembre');
  });

  test('Transits sur le thème natal : détection, période, jour exact, points retenus', () => {
    const now = Date.UTC(2026, 9, 26, 12);
    const sat = bodyLongitude('saturn', now), mars = bodyLongitude('mars', now);
    // Thème fictif : Vénus à 90° de Saturne (carré exact), Soleil à 120° de Mars + 0,5° (trigone dans l'orbe)
    const pts = [{ point: 'venus', lon: norm360(sat + 90) }, { point: 'sun', lon: norm360(mars + 120.5) }, { point: 'mercury', lon: norm360(sat + 45) }];
    const list = natalTransits(pts, [now]);
    const sq = list.find(x => x.body === 'saturn' && x.point === 'venus');
    assert(sq && sq.type === 'square' && sq.gap < 0.01 && sq.slow, 'Saturne carré Vénus');
    assert(sq.start < now && sq.end > now && sq.end - sq.start > 20 * 86400e3, 'période d\'influence de plusieurs semaines');
    assert(sq.exact && Math.abs(sq.exact - now) < 2 * 86400e3, 'jour exact proche');
    const tri = list.find(x => x.body === 'mars' && x.point === 'sun');
    assert(tri && tri.type === 'trine' && Math.abs(tri.gap - 0.5) < 0.05 && !tri.slow, 'Mars trigone Soleil');
    assert(!list.some(x => x.point === 'mercury' && x.body === 'saturn'), 'pas d\'aspect à 45°');
    assert(list.indexOf(sq) < list.indexOf(tri), 'planètes lentes en premier');
    // Points retenus : sans heure, ni Lune, ni ascendant ; avec heure et lieu, tout
    const chartNoon = natalChart({ y: 1982, m: 11, d: 3 }, null, null);
    assert(!natalPoints(chartNoon, false).some(p => ['moon', 'asc', 'mc'].includes(p.point)), 'sans heure : ni Lune ni angles');
    const full = natalChart({ y: 1982, m: 11, d: 3 }, { h: 19, min: 0 }, birthPlace('Paris|FR'));
    const fp = natalPoints(full, true).map(p => p.point);
    assert(['moon', 'asc', 'mc'].every(k => fp.includes(k)) && !fp.includes('pluto'), 'avec heure et lieu : Lune, ascendant, milieu du ciel ; pas de Pluton natal');
    for (const l of Object.keys(I18N)) assert(I18N[l].horo.groups.natal && /\{d\}/.test(I18N[l].horo.natalExact) && I18N[l].horo.natalNone, `${l} : textes`);
  });

  test('Synastrie : aspects entre deux thèmes, harmonie et tension, points retenus', () => {
    const P = (point, lon) => ({ point, lon });
    const A = [P('sun', 10), P('venus', 100), P('mars', 200), P('moon', 300), P('mc', 50)];
    const B = [P('moon', 130.5), P('mars', 101), P('saturn', 13), P('sun', 50)];
    const s = synastry(A, B);
    const find = (list, a, b) => list.find(x => x.a === a && x.b === b);
    assert(find(s.harmony, 'sun', 'moon') && find(s.harmony, 'sun', 'moon').type === 'trine', 'Soleil trigone Lune : harmonie');
    assert(find(s.harmony, 'venus', 'mars') && find(s.harmony, 'venus', 'mars').type === 'conjunction', 'Vénus–Mars conjoints : harmonie (attirance)');
    assert(find(s.tension, 'sun', 'saturn') && find(s.tension, 'sun', 'saturn').type === 'conjunction', 'conjonction avec Saturne : tension');
    assert(find(s.tension, 'mars', 'mars') === undefined || find(s.tension, 'mars', 'mars').type !== 'conjunction', 'pas de faux aspect');
    assert(!s.harmony.concat(s.tension).some(x => x.a === 'mc' || x.b === 'mc'), 'milieu du ciel exclu');
    assert(s.harmony[0].weight >= s.harmony[s.harmony.length - 1].weight, 'points importants en premier');
    assertEq(synastryTone('conjunction', 'mars', 'sun'), 'tension', 'Mars–Soleil conjoints'); assertEq(synastryTone('opposition', 'venus', 'jupiter'), 'tension', 'opposition');
    for (const l of Object.keys(I18N)) assert(/\{h\}/.test(I18N[l].pair.synBalance) && /\{t\}/.test(I18N[l].pair.synBalance) && I18N[l].pair.synTitle, `${l} : textes`);
  });

  test('Roue du thème interactive : éléments touchables et explications dans chaque langue', () => {
    const chart = natalChart({ y: 1982, m: 11, d: 3 }, { h: 19, min: 0 }, birthPlace('Paris|FR'));
    const box = document.createElement('div'); box.innerHTML = natalWheelSvg(chart, I18N.fr);
    const count = k => box.querySelectorAll(`[data-kind="${k}"]`).length;
    assertEq(count('sign'), 12, 'signes'); assertEq(count('house'), 12, 'maisons'); assertEq(count('body'), 10, 'astres'); assertEq(count('angle'), 2, 'AC et MC');
    assertEq(count('aspect'), chart.aspects.filter(a => a.type !== 'conjunction').length, 'aspects tracés');
    const keys = [...box.querySelectorAll('[data-kind]')].map(e => [e.dataset.kind, e.dataset.key]);
    for (const l of Object.keys(I18N)) for (const [kind, key] of keys) {
      const d = wheelDetail(chart, I18N[l], kind, key);
      assert(d.title && d.text && !/undefined|NaN/.test(d.title + d.text), `${l} : ${kind} ${key}`);
    }
    const sat = wheelDetail(chart, I18N.fr, 'body', 'saturn');
    assert(/Saturne/.test(sat.title) && /Balance/.test(sat.title) && /maison 6/i.test(sat.title), `Saturne : ${sat.title}`);
    const noTime = natalChart({ y: 1982, m: 11, d: 3 }, null, null); box.innerHTML = natalWheelSvg(noTime, I18N.fr);
    assertEq(count('house') + count('angle'), 0, 'sans heure ni lieu : ni maisons ni angles');
  });

  test('Numérologie : chemin de vie, cycles, nombres du nom (latin, abjad, cyrillique), textes', () => {
    assertEq(lifePath({ y: 1982, m: 11, d: 3 }), 7, '3/11/1982 : 3 + 11 + 2 = 16 → 7');
    assertEq(lifePath({ y: 1993, m: 11, d: 29 }), 8, '29/11/1993 : 11 + 11 + 22 = 44 → 8');
    assertEq(lifePath({ y: 1985, m: 2, d: 9 }), 7, '9/2/1985 : 9 + 2 + 5 = 16 → 7');
    assertEq(lifePath({ y: 1975, m: 9, d: 15 }), 1, '15/9/1975 : 6 + 9 + 22 (1975 → 22, nombre maître gardé) = 37 → 10 → 1');
    const cy = personalCycles({ y: 1982, m: 11, d: 3 }, { y: 2026, m: 10, d: 26 });
    assertEq(JSON.stringify(cy), '{"year":6,"month":7,"day":6}', 'cycles au 26/10/2026');
    const n = s => nameNumbers(s);
    assertEq(JSON.stringify([n('Joann').expression, n('Joann').soul, n('Joann').personality]), '[9,7,11]', 'Joann (personnalité 11, nombre maître)');
    assertEq(n('Yvette').soul, 8, 'Y initial voyelle'); assertEq(n('Yann').soul, 1, 'Y devant voyelle : consonne'); assertEq(n('Sylvie').soul, 3, 'Y entre consonnes');
    assertEq(n('Éloïse Dupré').expression, n('Eloise Dupre').expression, 'accents ignorés');
    const m = n('محمد'); assert(m.system === 'abjad' && m.abjadTotal === 92 && m.expression === 11 && m.soul === null, 'محمد : abjad 92 → 11');
    assertEq(n('مُحَمَّد').abjadTotal, 92, 'voyelles brèves ignorées');
    const a = n('Анна'); assert(a.system === 'cyrillic' && a.expression === 5 && a.soul === 2 && a.personality === 3, 'Анна');
    assertEq(n('佐藤'), null, 'écriture non prise en charge'); assertEq(n(''), null, 'nom vide');
    for (const l of Object.keys(I18N)) {
      const u = I18N[l].num;
      assert(u && ['1', '2', '3', '4', '5', '6', '7', '8', '9', '11', '22', '33'].every(k => u.numbers[k] && u.numbers[k].keywords.length === 3 && u.numbers[k].text), `${l} : sens des nombres`);
      assert(u.years.length === 9 && u.years.every(Boolean) && /\{v\}/.test(u.abjad) && u.tab && u.nameScript, `${l} : textes`);
    }
  });

  test('Tarot : carte de naissance, numérotation des deux jeux, carte du jour, cartes et textes', () => {
    assertEq(birthCardNumber({ y: 1982, m: 11, d: 3 }), 7, '3 + 11 + 1982 = 1996 → 25 → 7');
    assertEq(tarotByNumber(7, 'marseille'), 'chariot', 'VII : Le Chariot');
    assertEq(birthCardNumber({ y: 1999, m: 12, d: 31 }), 8, '31 + 12 + 1999 = 2042 → 2 + 0 + 4 + 2 = 8 (Justice à Marseille, Force chez Waite-Smith)');
    assertEq(tarotByNumber(8, 'marseille'), 'justice', 'VIII à Marseille : la Justice'); assertEq(tarotByNumber(8, 'ws'), 'strength', 'VIII chez Waite-Smith : la Force');
    assertEq(tarotByNumber(11, 'marseille'), 'strength', 'XI à Marseille : la Force'); assertEq(tarotByNumber(11, 'ws'), 'justice', 'XI chez Waite-Smith : la Justice');
    assertEq(tarotByNumber(22, 'ws'), 'fool', '22 : le Fou');
    assertEq(tarotNumeral('fool', 'marseille'), '', 'Le Mat sans numéro'); assertEq(tarotNumeral('fool', 'ws'), '0', 'Le Fou : 0');
    assertEq(tarotNumeral('strength', 'marseille'), 'XI', 'Force XI'); assertEq(tarotNumeral('world', 'ws'), 'XXI', 'Monde XXI'); assertEq(tarotNumeral('hangedman', 'ws'), 'XII', 'Pendu XII');
    assertEq(dayCardKey('1982-11-03', '2026-10-26'), dayCardKey('1982-11-03', '2026-10-26'), 'carte du jour stable');
    const days = new Set(); for (let i = 1; i <= 28; i++) days.add(dayCardKey('1982-11-03', `2026-02-${String(i).padStart(2, '0')}`));
    assert(days.size >= 12, `carte du jour variée (${days.size} cartes en 28 jours)`);
    assert(TAROT_KEYS.concat(['back_marseille', 'back_ws']).every(k => /^data:image\/webp;base64,/.test(TAROT_ART_IMG[k])), 'illustration de chaque arcane et des deux dos');
    assert(tarotCardSvg('sun', 'ws', 'Le Soleil').includes(TAROT_ART_IMG.sun) && tarotBackSvg('marseille', 'x').includes(TAROT_ART_IMG.back_marseille), 'cartes et dos illustrés');
    assert(!/>L'Arcane sans nom</.test(tarotCardSvg('death', 'marseille', "L'Arcane sans nom")) && />La Mort</.test(tarotCardSvg('death', 'ws', 'La Mort')), 'XIII sans nom à Marseille');
    for (const l of Object.keys(I18N)) {
      const u = I18N[l].tarot;
      assert(u && TAROT_KEYS.every(k => u.cards[k] && u.cards[k].name && u.cards[k].keywords.length === 3 && u.cards[k].text), `${l} : 22 arcanes`);
      assert(Object.keys(u.marseilleNames).length === 8 && u.decks.marseille && u.decks.ws && /\{d\}/.test(u.dayCardDesc) && I18N[l].offline.soon, `${l} : textes`);
    }
  });

  test('Tirage à trois cartes : trois arcanes distincts, hasard réparti, textes', () => {
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const counts = Object.fromEntries(TAROT_KEYS.map(k => [k, 0]));
    for (let i = 0; i < 2200; i++) {
      const c = drawCards(3, rnd);
      assert(c.length === 3 && new Set(c).size === 3 && c.every(k => TAROT_KEYS.includes(k)), 'trois arcanes distincts');
      c.forEach(k => counts[k]++);
    }
    const values = Object.values(counts);
    assert(Math.min(...values) > 200 && Math.max(...values) < 400, `répartition équilibrée (${Math.min(...values)} à ${Math.max(...values)} sur 300 attendus)`);
    const real = drawCards(3); assert(new Set(real).size === 3, 'hasard du navigateur');
    for (const l of Object.keys(I18N)) {
      const u = I18N[l].tarot;
      assert(['spreadTitle', 'spreadIntro', 'spreadDraw', 'spreadAgain', 'spreadPast', 'spreadPresent', 'spreadFuture', 'spreadNote'].every(k => u[k]), `${l} : textes du tirage`);
    }
  });

  test('Rituel du tirage : un par jour et par personne, question, cartes face cachée', () => {
    const keepDate = currentDate, keepSpread = store.get('zodiac_spread');
    try {
      currentDate = '1982-11-03';
      store.remove('zodiac_spread');
      assert(spreadHtml(I18N.fr, 'marseille').includes('id="spreadQuestion"'), 'sans tirage : formulaire de question');
      saveSpread({ day: todayISO(), birth: '1982-11-03', question: 'Que dois-je comprendre ?', cards: ['sun', 'moon', 'star'], revealed: [true, false, false] });
      const sp = currentSpread();
      assert(sp && sp.question === 'Que dois-je comprendre ?' && sp.revealed[0] && !sp.revealed[1], 'tirage du jour retrouvé');
      const html = spreadHtml(I18N.fr, 'marseille');
      assert((html.match(/class="spread-flip"/g) || []).length === 2 && html.includes('spread-question') && !html.includes('id="spreadDraw"'), 'deux cartes face cachée, question affichée, pas de second tirage');
      saveSpread({ ...sp, revealed: [true, true, true] });
      const done = spreadHtml(I18N.fr, 'ws');
      assert(done.includes('spread-done') && !done.includes('spread-flip') && !done.includes('id="spreadDraw"'), 'trois cartes retournées : prochain tirage demain');
      currentDate = '1990-01-01'; assertEq(currentSpread(), null, 'autre personne : pas de tirage');
      currentDate = '1982-11-03';
      saveSpread({ day: '2000-01-01', birth: '1982-11-03', question: 'x', cards: ['sun', 'moon', 'star'], revealed: [true, true, true] });
      assertEq(currentSpread(), null, 'tirage d\'un autre jour : nouveau tirage possible');
      store.set('zodiac_spread', JSON.stringify({ day: todayISO(), birth: '1982-11-03', cards: ['sun', 'moon', 'star'] }));
      assert(currentSpread().revealed.every(Boolean) && currentSpread().question === '', 'tirage de l\'ancienne version : affiché retourné');
      for (const l of Object.keys(I18N)) {
        const u = I18N[l].tarot;
        assert(['spreadQuestionLabel', 'spreadQuestionHint', 'spreadFlip', 'spreadTomorrow', 'artCredit'].every(k => u[k]) && /\{pos\}/.test(u.spreadFlipAria), `${l} : textes du rituel`);
      }
    } finally {
      currentDate = keepDate;
      if (keepSpread === null) store.remove('zodiac_spread'); else store.set('zodiac_spread', keepSpread);
    }
  });

  test('« C\'est mon profil » : profil désigné, comparaison, textes', () => {
    const keep = store.get('zodiac_me');
    try {
      store.remove('zodiac_me'); assertEq(readMe(), null, 'aucun profil désigné');
      store.set('zodiac_me', JSON.stringify({ name: 'Joann', date: '1982-11-03', time: '19:00', place: 'Paris|FR' }));
      assert(readMe() && readMe().date === '1982-11-03', 'profil désigné lu');
      assertEq(profileKey({ name: ' joann ', date: '1982-11-03', time: '19:00', place: 'Paris|FR' }), profileKey(readMe()), 'même profil malgré la casse et les espaces du nom');
      assert(profileKey({ name: 'Joann', date: '1983-06-03', time: '10:05', place: 'Paris|FR' }) !== profileKey(readMe()), 'autre personne');
      store.set('zodiac_me', '{"date":"pas une date"}'); assertEq(readMe(), null, 'profil invalide ignoré');
      for (const l of Object.keys(I18N)) assert(['set', 'is', 'saved', 'removed'].every(k => I18N[l].me && I18N[l].me[k]), `${l} : textes`);
    } finally { if (keep === null) store.remove('zodiac_me'); else store.set('zodiac_me', keep); }
  });

  test('Adresse en « # » (rien d\'envoyé au serveur), version, bandeau de mise à jour, textes', () => {
    assert(appVersionLabel() === 'dev' || /^\d{4}-\d{2}-\d{2} · [0-9a-f]{7}$/.test(appVersionLabel()), `version : ${appVersionLabel()}`);
    const keep = location.pathname + location.search + location.hash;
    try {
      history.replaceState(null, '', location.pathname + '?test&date=1990-01-01&place=Paris%7CFR#lang=en');
      const p = readUrlParams();
      assert(p.get('date') === '1990-01-01' && p.get('place') === 'Paris|FR' && p.get('lang') === 'en', 'ancien lien en « ? » et « # » lus ensemble');
      const keepPlace = currentBirthPlace; currentBirthPlace = 'Paris|FR';
      updateURL('1990-01-01', '10:05', 'fr'); currentBirthPlace = keepPlace;
      assert(!/date=|place=|time=/.test(location.search) && /date=1990-01-01/.test(location.hash) && /time=10%3A05/.test(location.hash) && /test/.test(location.search), `données après « # » seulement : ${location.search} ${location.hash}`);
    } finally { history.replaceState(null, '', keep); }
    showUpdateBanner(); const b = document.getElementById('updateBanner');
    assert(b && b.textContent.includes(I18N[currentLang].version.reload), 'bandeau de mise à jour'); b.remove();
    for (const l of Object.keys(I18N)) {
      const t = I18N[l];
      assert(/\{v\}/.test(t.version.label) && t.version.available && t.privacyLine && t.privacyTitle && t.info.fieldName && t.info.fieldTime && t.info.fieldPlace && t.info.privacy, `${l} : textes`);
    }
  });

  test('Lieu par coordonnées GPS : formats, liens de cartes, fuseau de la ville la plus proche, identifiant', () => {
    const P = s => { const c = parseCoords(s); return c ? `${c.lat},${c.lon}` : null; };
    assertEq(P('48.8566, 2.3522'), '48.8566,2.3522', 'décimal'); assertEq(P('48,8566 ; 2,3522'), '48.8566,2.3522', 'virgules décimales');
    assertEq(P('48°51\'24"N 2°21\'08"E'), '48.8567,2.3522', 'degrés-minutes-secondes'); assertEq(P('40.7128° N, 74.0060° W'), '40.7128,-74.006', 'lettres, ouest négatif');
    assertEq(P('2.35 E 48.85 N'), '48.85,2.35', 'longitude en premier'); assertEq(P('S 33° 52\' E 151° 12\''), '-33.8667,151.2', 'lettre devant, minutes');
    assertEq(P('https://www.google.com/maps/place/X/@48.858,2.294,17z/data=!3d48.8583701!4d2.2944813'), '48.8584,2.2945', 'lien Google Maps (épingle)');
    assertEq(P('https://www.openstreetmap.org/?mlat=48.8566&mlon=2.3522#map=15/48.8566/2.3522'), '48.8566,2.3522', 'lien OpenStreetMap');
    assertEq(P('https://maps.apple.com/?ll=-22.9068,-43.1729'), '-22.9068,-43.1729', 'lien Apple Plans');
    for (const bad of ['Paris', '1982', '95, 200', '48.85 N 2.35 N', '12 rue de Paris', '']) assertEq(parseCoords(bad), null, `refusé : « ${bad} »`);
    const kehl = birthPlace('@48.5708,7.8136,');
    assert(kehl.coords && kehl.tz === 'Europe/Berlin' && kehl.ref.country === 'DE' && kehl.tzChoices.includes('Europe/Paris'), 'frontière : fuseau de la ville la plus proche, fuseau voisin proposé');
    const choisi = birthPlace('@48.5708,7.8136,Europe/Paris');
    assert(choisi.tz === 'Europe/Paris' && birthPlace(choisi.key).tz === 'Europe/Paris', 'fuseau choisi conservé dans l\'identifiant');
    const c = natalChart({ y: 1982, m: 11, d: 3 }, { h: 19, min: 0 }, birthPlace('@48.8566,2.3522,Europe/Paris')), ref = natalChart({ y: 1982, m: 11, d: 3 }, { h: 19, min: 0 }, birthPlace('Paris|FR'));
    assert(c.exact && Math.abs(c.asc - ref.asc) < 0.1, `thème natal avec coordonnées ≈ Paris (${c.asc.toFixed(2)} / ${ref.asc.toFixed(2)})`);
    for (const l of Object.keys(I18N)) assert(/\{city\}/.test(I18N[l].placeNear) && /\{km\}/.test(I18N[l].placeTzFrom) && I18N[l].placeCoordsHint && I18N[l].placeTz, `${l} : textes`);
  });

  test('Cartes renversées : carte tête en bas, sens renversé, anciens tirages droits, textes', () => {
    const keepDate = currentDate, keepSpread = store.get('zodiac_spread');
    try {
      currentDate = '1982-11-03';
      saveSpread({ day: todayISO(), birth: '1982-11-03', question: 'Que dois-je comprendre ?', cards: ['sun', 'moon', 'star'], revealed: [true, true, true], reversed: [false, true, false] });
      const html = spreadHtml(I18N.fr, 'marseille');
      assertEq((html.match(/is-reversed/g) || []).length, 1, 'une seule carte tête en bas');
      assert(html.includes(I18N.fr.tarot.reversed.moon.text) && html.includes(I18N.fr.tarot.cards.sun.text) && html.includes(I18N.fr.tarot.reversedBadge), 'sens renversé de la Lune, sens droit du Soleil, mention « Renversée »');
      store.set('zodiac_spread', JSON.stringify({ day: todayISO(), birth: '1982-11-03', question: 'x', cards: ['sun', 'moon', 'star'], revealed: [true, true, true] }));
      assert(!spreadHtml(I18N.fr, 'ws').includes('is-reversed'), 'tirage sans indication de sens : cartes droites');
      assert(tarotCardSvg('sun', 'ws', 'Le Soleil', true).includes('is-reversed') && !tarotCardSvg('sun', 'ws', 'Le Soleil').includes('is-reversed'), 'gabarit de carte');
      for (const l of Object.keys(I18N)) {
        const u = I18N[l].tarot;
        assert(u.reversedToggle && u.reversedBadge && TAROT_KEYS.every(k => u.reversed[k] && u.reversed[k].keywords.length === 3 && u.reversed[k].text), `${l} : 22 sens renversés`);
      }
    } finally {
      currentDate = keepDate;
      if (keepSpread === null) store.remove('zodiac_spread'); else store.set('zodiac_spread', keepSpread);
    }
  });

  test('Arcanes mineurs : 78 cartes, noms des deux jeux, numéros, illustrations, textes', () => {
    assertEq(TAROT_MINOR_KEYS.length, 56, '4 couleurs × 14 cartes');
    assertEq(new Set(TAROT_ALL_KEYS).size, 78, 'jeu complet : 78 cartes distinctes');
    assert(TAROT_KEYS.every(k => !isMinorKey(k)) && TAROT_MINOR_KEYS.every(isMinorKey), 'majeurs et mineurs bien séparés');
    assert(minorParts('pentacles_10').suit === 'pentacles' && minorParts('pentacles_10').rank === '10', 'couleur et rang');
    assertEq(tarotNumeral('cups_ace', 'marseille'), 'I', 'As : I'); assertEq(tarotNumeral('swords_7', 'ws'), 'VII', 'Sept : VII');
    assertEq(tarotNumeral('wands_10', 'ws'), 'X', 'Dix : X'); assertEq(tarotNumeral('pentacles_queen', 'marseille'), '', 'figure sans numéro');
    assertEq(tarotTitleNum('cups_7', 'ws'), '', 'pas de numéro devant le nom d\'un mineur'); assertEq(tarotTitleNum('sun', 'ws'), 'XIX', 'numéro devant le nom d\'un majeur');
    assert(TAROT_MINOR_KEYS.every(k => /^data:image\/webp;base64,/.test(TAROT_ART_IMG[k])), 'illustration de chaque arcane mineur');
    assertEq(new Set(TAROT_ALL_KEYS.map(k => TAROT_ART_IMG[k])).size, 78, '78 illustrations différentes');
    assert(tarotCardSvg('cups_9', 'marseille', 'Neuf de Coupes').includes(TAROT_ART_IMG.cups_9) && />IX</.test(tarotCardSvg('cups_9', 'ws', 'Neuf de Coupes')), 'carte illustrée et numérotée');
    const fr = I18N.fr;
    assertEq(tarotName(fr, 'wands_page', 'marseille'), 'Valet de Bâtons', 'Marseille : Valet'); assertEq(tarotName(fr, 'wands_page', 'ws'), 'Page de Bâtons', 'Waite-Smith : Page');
    assertEq(tarotName(fr, 'swords_knight', 'marseille'), "Cavalier d'Épées", 'Marseille : Cavalier'); assertEq(tarotName(fr, 'pentacles_ace', 'ws'), 'As de Pentacles', 'Waite-Smith : Pentacles');
    assertEq(tarotName(I18N.en, 'pentacles_ace', 'marseille'), 'Ace of Coins', 'anglais, Marseille : Coins'); assertEq(tarotName(fr, 'sun', 'marseille'), fr.tarot.cards.sun.name, 'majeurs inchangés');
    assert(minorBadge(fr, 'pentacles_3', 'marseille').includes('Deniers') && minorBadge(fr, 'pentacles_3', 'ws').includes('Pentacles') && minorBadge(fr, 'cups_2', 'ws').includes('Eau'), 'mention de la couleur et de l\'élément');
    for (const l of Object.keys(I18N)) {
      const m = I18N[l].tarot.minors, ok = s => typeof s === 'string' && s.trim().length > 0;
      assert(m && ok(m.fullDeck) && ok(m.badge) && /78/.test(m.fullDeck), `${l} : option et mention`);
      assert(MINOR_SUITS.every(s => m.suits[s] && ok(m.suits[s].marseille) && ok(m.suits[s].ws) && ok(m.suits[s].element)), `${l} : 4 couleurs`);
      assert(TAROT_MINOR_KEYS.every(k => m.cards[k] && ok(m.cards[k].name.marseille) && ok(m.cards[k].name.ws) && m.cards[k].keywords.length === 3 && m.cards[k].keywords.every(ok) && ok(m.cards[k].text)), `${l} : 56 cartes à l'endroit`);
      assert(TAROT_MINOR_KEYS.every(k => m.reversed[k] && m.reversed[k].keywords.length === 3 && m.reversed[k].keywords.every(ok) && ok(m.reversed[k].text)), `${l} : 56 sens renversés`);
      const texts = TAROT_MINOR_KEYS.flatMap(k => [m.cards[k].text, m.reversed[k].text]);
      assertEq(new Set(texts).size, 112, `${l} : 112 textes tous différents`);
      for (const d of TAROT_DECKS) assertEq(new Set(TAROT_MINOR_KEYS.map(k => m.cards[k].name[d])).size, 56, `${l} : 56 noms différents (${d})`);
      if (l !== 'fr') assert(TAROT_MINOR_KEYS.every(k => m.cards[k].text !== I18N.fr.tarot.minors.cards[k].text && m.reversed[k].text !== I18N.fr.tarot.minors.reversed[k].text), `${l} : textes traduits`);
      assert(!/[’‘]/.test(JSON.stringify(m)), `${l} : apostrophes droites`);
    }
  });

  test('Tirage du jeu complet : 78 cartes en option, anciens tirages, carte mineure renversée', () => {
    let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const counts = Object.fromEntries(TAROT_ALL_KEYS.map(k => [k, 0]));
    for (let i = 0; i < 2600; i++) {
      const c = drawCards(3, rnd, true);
      assert(c.length === 3 && new Set(c).size === 3 && c.every(k => TAROT_ALL_KEYS.includes(k)), 'trois cartes distinctes du jeu complet');
      c.forEach(k => counts[k]++);
    }
    const values = Object.values(counts);
    assert(Math.min(...values) > 50 && Math.max(...values) < 160, `répartition équilibrée (${Math.min(...values)} à ${Math.max(...values)} sur 100 attendus)`);
    for (let i = 0; i < 300; i++) assert(drawCards(3, rnd).every(k => TAROT_KEYS.includes(k)), 'sans l\'option : arcanes majeurs seuls');
    const keepDate = currentDate, keepSpread = store.get('zodiac_spread');
    try {
      currentDate = '1982-11-03';
      saveSpread({ day: todayISO(), birth: '1982-11-03', question: 'Que dois-je comprendre ?', cards: ['cups_7', 'sun', 'swords_page'], revealed: [true, true, true], reversed: [false, false, true] });
      assert(currentSpread() && currentSpread().cards[0] === 'cups_7', 'tirage avec des arcanes mineurs retrouvé');
      const m = I18N.fr.tarot.minors, mar = spreadHtml(I18N.fr, 'marseille'), ws = spreadHtml(I18N.en, 'ws');
      assert(mar.includes('Sept de Coupes') && mar.includes(m.cards.cups_7.text) && mar.includes(m.reversed.swords_page.text) && mar.includes(escapeHtml("Valet d'Épées")), 'noms et sens des mineurs, sens renversé');
      assert(!mar.includes(m.cards.swords_page.text) && (mar.match(/is-reversed/g) || []).length === 1 && (mar.match(/minor-badge/g) || []).length === 2, 'une carte renversée, deux mentions « arcane mineur »');
      assert(ws.includes(I18N.en.tarot.minors.cards.swords_page.name.ws) && ws.includes(I18N.en.tarot.cards.sun.text), 'Waite-Smith en anglais');
      saveSpread({ day: todayISO(), birth: '1982-11-03', question: 'x', cards: ['sun', 'moon', 'nope_1'], revealed: [true, true, true] });
      assertEq(currentSpread(), null, 'carte inconnue : tirage ignoré');
      for (const l of Object.keys(I18N)) assert(I18N[l].info.tarotMinors && I18N[l].info.tarotMinors.length > 20, `${l} : bulle (i) du jeu complet`);
    } finally {
      currentDate = keepDate;
      if (keepSpread === null) store.remove('zodiac_spread'); else store.set('zodiac_spread', keepSpread);
    }
  });

  test('Calendrier du ciel : stations, lunes, entrées, transits, fichier .ics conforme', () => {
    const start = Date.UTC(2026, 9, 27), end = Date.UTC(2027, 0, 27);
    const ev = calendarEvents(start, end, { moon: true, eclipses: true, retro: true, ingress: true, transits: false }, []);
    const near = (e, iso, days) => Math.abs(e.ms - Date.parse(iso)) < days * 864e5;
    const st = (b, r) => ev.find(e => e.kind === 'station' && e.body === b && e.retro === r);
    assert(st('mercury', false) && near(st('mercury', false), '2026-11-13T16:00Z', 1), 'Mercure redevient direct le 13 novembre 2026');
    assert(st('mars', true) && near(st('mars', true), '2027-01-10T14:00Z', 1) && st('mars', true).sign === 'virgo', 'Mars devient rétrograde le 10 janvier 2027, en Vierge');
    const full = ev.find(e => e.kind === 'moon' && e.phase === 'full');
    assert(full && near(full, '2026-11-24T15:00Z', 0.1) && full.sign === 'gemini', 'Pleine Lune du 24 novembre 2026 en Gémeaux');
    const sag = ev.find(e => e.kind === 'ingress' && e.body === 'sun' && e.sign === 'sagittarius');
    assert(sag && near(sag, '2026-11-22T07:00Z', 0.1), 'Soleil en Sagittaire le 22 novembre 2026');
    const pts = natalPoints(natalChart({ y: 1982, m: 11, d: 3 }, { h: 19, min: 0 }, birthPlace('Paris|FR')), true);
    const tr = calendarEvents(start, end, { transits: true }, pts);
    assert(tr.length && tr.every(e => e.kind === 'transit' && aspectGap(bodyLongitude(e.body, e.ms), pts.find(p => p.point === e.point).lon, TRANSIT_ASPECTS.find(a => a[0] === e.type)[1]) < 0.05), 'transits exacts à moins de 0,05°');
    const ics = buildIcs('Calendrier du ciel — Joann', [{ uid: 'x1', ms: start, allDay: false, title: '🌕 Pleine Lune · ♊ Gémeaux; test, virgule', description: 'Ligne 1\nLigne 2 ' + 'longue '.repeat(20) }, { uid: 'x2', ms: start, allDay: true, title: 'Transit' }]);
    const lines = ics.split('\r\n');
    assert(lines[0] === 'BEGIN:VCALENDAR' && lines.includes('END:VCALENDAR') && lines.filter(l => l === 'BEGIN:VEVENT').length === 2, 'structure');
    assert(lines.every(l => new TextEncoder().encode(l).length <= 75), 'lignes de 75 octets au plus');
    assert(ics.includes('Gémeaux\\; test\\, virgule') && ics.includes('Ligne 1\\nLigne 2') && ics.includes('DTSTART;VALUE=DATE:'), 'échappements et journée entière');
    const s2 = Date.UTC(2026, 10, 8), week = calendarWeekItems(I18N.fr, calendarEvents(s2, s2 + 30 * 864e5, { moon: true, retro: true }, []), s2);   // 8-15 nov. : Nouvelle Lune, Mercure direct
    assert(week.length >= 3 && week.every(it => it.ms < s2 + 7 * 864e5) && week[week.length - 1].title === I18N.fr.cal.reminder && week[week.length - 1].allDay, '7 prochains jours, puis le rappel le dernier jour');
    assertEq(calendarWeekItems(I18N.fr, [], start).length, 0, 'semaine vide : rien à exporter (pas de fichier vide)');
    const g = googleCalLink({ ms: Date.UTC(2026, 10, 24, 14, 54), allDay: false, title: '🌕 Pleine Lune · ♊ Gémeaux', description: 'x' });
    assert(g.startsWith('https://calendar.google.com/calendar/render?action=TEMPLATE&text=') && g.includes('dates=20261124T145400Z/20261124T152400Z'), `lien Google : ${g}`);
    assert(googleCalLink({ ms: new Date(2026, 10, 24, 12).getTime(), allDay: true, title: 'T' }).includes('dates=20261124/20261125'), 'lien Google, journée entière');
    for (const l of Object.keys(I18N)) { const c = I18N[l].cal; assert(c.thisWeek && c.toolGoogle && c.hintGoogle && c.weekEmpty && c.reminder && c.addOne, `${l} : textes de la liste et des outils`); }
    for (const l of Object.keys(I18N)) { const c = I18N[l].cal; assert(c && /\{n\}/.test(c.months) && /\{n\}/.test(c.count) && /\{name\}/.test(c.calName) && c.catTransits && c.direct, `${l} : textes`); }
  });

  test('Fiche du thème natal à imprimer : bouton, mention de bas de page, textes', () => {
    const keep = currentDate; currentDate = '1982-11-03';
    let html; try { html = natalHtml(I18N.fr); } finally { currentDate = keep; }
    assert(html.includes('id="natalPrint"') && html.includes('id="printFooter"'), 'bouton et mention de bas de page');
    assert(typeof printNatal === 'function', 'fonction d\'impression');
    for (const l of Object.keys(I18N)) { const p = I18N[l].print; assert(p && p.button && p.hint && /\{name\}/.test(p.title) && /\{date\}/.test(p.footer), `${l} : textes`); }
  });

  test('Animation de recherche : passable d\'un toucher, puis version courte', () => {
    const keepMotion = prefersReducedMotion, keepSeen = searchSeen, overlay = document.getElementById('overlay');
    const skip = document.getElementById('searchSkip'), text = document.getElementById('searchText'), t = I18N[currentLang];
    let calls = 0;
    try {
      prefersReducedMotion = () => false; searchSeen = false; quickReveal = false;
      runSearch('scorpio', () => calls++);
      assert(!overlay.classList.contains('hidden'), 'écran de recherche affiché');
      assertEq(skip.textContent, t.skip, 'bouton « Passer » traduit');
      assertEq(text.textContent, t.searching, 'première recherche : balayage complet');
      skip.click();
      assertEq(calls, 1, 'un toucher affiche aussitôt le résultat');
      assert(overlay.classList.contains('hidden') && overlay.getAttribute('aria-hidden') === 'true', 'écran de recherche masqué');
      overlay.click(); document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      assertEq(calls, 1, 'résultat affiché une seule fois');
      runSearch('leo', () => calls++);
      assert(document.getElementById('constSvg').classList.contains('quick'), 'recherche suivante : version courte');
      assert(text.textContent.includes(t.signNames.leo), 'version courte : constellation trouvée');
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      assertEq(calls, 2, 'touche Échap');
    } finally {
      prefersReducedMotion = keepMotion; searchSeen = keepSeen;
      overlay.classList.add('hidden'); overlay.setAttribute('aria-hidden', 'true');
    }
    for (const l of Object.keys(I18N)) assert(I18N[l].skip && (l === 'fr' || I18N[l].skip !== I18N.fr.skip), `${l} : « Passer » traduit`);
  });

  /* ---------------- Rapport ---------------- */
  const failed = results.filter(r => !r.ok);
  window.__testResults = results;
  console.table(results.map(r => ({ groupe: r.group, test: r.name, ok: r.ok ? '✓' : '✗', détail: r.info || '' })));
  const panel = document.createElement('section');
  panel.setAttribute('aria-label', 'Rapport de tests');
  panel.style.cssText = 'position:fixed;right:1rem;bottom:1rem;z-index:400;max-width:min(560px,calc(100vw - 2rem));max-height:70vh;overflow:auto;' +
    'background:#0f0c24;border:1px solid ' + (failed.length ? '#ff5470' : '#7de6a0') + ';border-radius:16px;padding:1rem 1.2rem;' +
    'color:#f0eaff;font:13px/1.5 system-ui,sans-serif;box-shadow:0 20px 40px rgba(0,0,0,.6)';
  let html = `<strong style="font-size:15px;color:${failed.length ? '#ff5470' : '#7de6a0'}">` +
    (failed.length ? `${failed.length} test(s) en échec sur ${results.length}` : `Les ${results.length} tests passent`) + '</strong>';
  let last = '';
  for (const r of results) {
    if (r.group !== last) { html += `<div style="margin-top:.7rem;color:#e8c36a;font-weight:600">${r.group}</div>`; last = r.group; }
    html += `<div style="color:${r.ok ? '#b8aed6' : '#ff5470'}">${r.ok ? '✓' : '✗'} ${r.name}${r.info ? ` — ${r.info}` : ''}</div>`;
  }
  panel.innerHTML = html;
  document.body.appendChild(panel);
})();
