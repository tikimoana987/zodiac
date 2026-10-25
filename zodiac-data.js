/* ============================================================
   Zodiaque & Décans — données
   Signes, thèmes, constellations, affinités. Aucune dépendance.
   ============================================================ */

const SIGN_ORDER = ["aries","taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius","capricorn","aquarius","pisces"];

/* sym : symbole suivi de U+FE0E (sélecteur de variante « texte ») pour qu'il prenne la couleur du thème
   au lieu d'être dessiné en emoji (carré violet sous Windows, y compris dans l'image exportée). */
const SIGN_META = {
  aries:{ sym:"♈\uFE0E", start:[3,21], end:[4,19], element:"fire", modality:"cardinal",
          ruler:"mars", luckyNumbers:"1 · 9", colors:["red","white"], stone:"diamond", day:"tuesday" },
  taurus:{ sym:"♉\uFE0E", start:[4,20], end:[5,20], element:"earth", modality:"fixed",
           ruler:"venus", luckyNumbers:"2 · 6", colors:["green","brown"], stone:"emerald", day:"friday" },
  gemini:{ sym:"♊\uFE0E", start:[5,21], end:[6,20], element:"air", modality:"mutable",
           ruler:"mercury", luckyNumbers:"3 · 5", colors:["yellow","green"], stone:"pearl", day:"wednesday" },
  cancer:{ sym:"♋\uFE0E", start:[6,21], end:[7,22], element:"water", modality:"cardinal",
           ruler:"moon", luckyNumbers:"2 · 7", colors:["silver","white"], stone:"moonstone", day:"monday" },
  leo:{ sym:"♌\uFE0E", start:[7,23], end:[8,22], element:"fire", modality:"fixed",
        ruler:"sun", luckyNumbers:"1 · 4", colors:["gold","orange"], stone:"ruby", day:"sunday" },
  virgo:{ sym:"♍\uFE0E", start:[8,23], end:[9,22], element:"earth", modality:"mutable",
          ruler:"mercury", luckyNumbers:"5 · 6", colors:["green","brown"], stone:"sapphire", day:"wednesday" },
  libra:{ sym:"♎\uFE0E", start:[9,23], end:[10,22], element:"air", modality:"cardinal",
          ruler:"venus", luckyNumbers:"6 · 9", colors:["pink","blue"], stone:"opal", day:"friday" },
  scorpio:{ sym:"♏\uFE0E", start:[10,23], end:[11,21], element:"water", modality:"fixed",
            ruler:"pluto", luckyNumbers:"8 · 9", colors:["black","red"], stone:"topaz", day:"tuesday" },
  sagittarius:{ sym:"♐\uFE0E", start:[11,22], end:[12,21], element:"fire", modality:"mutable",
                ruler:"jupiter", luckyNumbers:"3 · 9", colors:["purple","blue"], stone:"turquoise", day:"thursday" },
  capricorn:{ sym:"♑\uFE0E", start:[12,22], end:[1,19], element:"earth", modality:"cardinal",
              ruler:"saturn", luckyNumbers:"4 · 8", colors:["black","brown"], stone:"garnet", day:"saturday" },
  aquarius:{ sym:"♒\uFE0E", start:[1,20], end:[2,18], element:"air", modality:"fixed",
             ruler:"uranus", luckyNumbers:"4 · 8", colors:["blue","silver"], stone:"amethyst", day:"saturday" },
  pisces:{ sym:"♓\uFE0E", start:[2,19], end:[3,20], element:"water", modality:"mutable",
           ruler:"neptune", luckyNumbers:"3 · 7", colors:["seaGreen","purple"], stone:"aquamarine", day:"thursday" }
};

const SIGN_THEME = {
  aries:{ gold:'#ff6b6b', purple:'#ff9f68' },
  taurus:{ gold:'#6ab04c', purple:'#c0a06a' },
  gemini:{ gold:'#f9ca24', purple:'#6ab0f9' },
  cancer:{ gold:'#e8c36a', purple:'#b0b0d0' },
  leo:{ gold:'#f9ca24', purple:'#f2a25c' },
  virgo:{ gold:'#6ab04c', purple:'#a9854b' },
  libra:{ gold:'#f48fb1', purple:'#7fa9ee' },
  scorpio:{ gold:'#e63946', purple:'#9b7ede' },
  sagittarius:{ gold:'#b388eb', purple:'#5b8def' },
  capricorn:{ gold:'#a9854b', purple:'#6ab04c' },
  aquarius:{ gold:'#48c9b0', purple:'#b0b0d0' },
  pisces:{ gold:'#48c9b0', purple:'#b388eb' }
};

const CONST = {
  aries:{ stars:[[40,130],[65,100],[85,85],[110,70],[140,55],[160,75]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
  taurus:{ stars:[[50,40],[60,80],[90,120],[120,120],[150,80],[160,40],[90,70]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[1,6],[6,4]] },
  gemini:{ stars:[[60,50],[45,100],[65,150],[140,50],[155,100],[135,150]], lines:[[0,1],[1,2],[3,4],[4,5],[0,3],[1,4],[2,5]] },
  cancer:{ stars:[[100,40],[100,90],[60,140],[140,140],[100,175]], lines:[[0,1],[1,2],[1,3],[1,4]] },
  leo:{ stars:[[50,40],[70,25],[95,35],[105,60],[85,80],[60,70],[130,100],[150,140],[120,165]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[3,6],[6,7],[7,8]] },
  virgo:{ stars:[[40,140],[70,130],[100,110],[130,90],[160,75],[140,45],[110,35],[80,55]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,2]] },
  libra:{ stars:[[100,35],[65,75],[135,75],[45,135],[155,135],[100,125]], lines:[[0,1],[0,2],[1,3],[2,4],[1,5],[2,5]] },
  scorpio:{ stars:[[40,50],[65,55],[90,65],[110,85],[125,110],[130,140],[115,165],[90,175],[70,160]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
  sagittarius:{ stars:[[60,90],[100,60],[140,90],[125,130],[75,130],[60,165],[145,145],[105,185]], lines:[[0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[2,6],[5,7],[6,7]] },
  capricorn:{ stars:[[50,70],[100,120],[150,70],[100,145],[100,175]], lines:[[0,1],[1,2],[1,3],[3,4]] },
  aquarius:{ stars:[[40,40],[70,60],[60,95],[90,115],[80,145],[110,165],[150,145]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
  pisces:{ stars:[[40,60],[65,45],[85,70],[100,105],[115,140],[140,165],[160,150],[140,130]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] }
};

const AFF = {
  aries:{ aries:4, taurus:2, gemini:4, cancer:1, leo:5, virgo:2, libra:5, scorpio:2, sagittarius:5, capricorn:1, aquarius:4, pisces:2 },
  taurus:{ aries:2, taurus:4, gemini:2, cancer:5, leo:2, virgo:5, libra:3, scorpio:4, sagittarius:2, capricorn:5, aquarius:2, pisces:4 },
  gemini:{ aries:4, taurus:2, gemini:4, cancer:2, leo:5, virgo:3, libra:5, scorpio:2, sagittarius:3, capricorn:2, aquarius:5, pisces:2 },
  cancer:{ aries:1, taurus:5, gemini:2, cancer:4, leo:2, virgo:4, libra:2, scorpio:5, sagittarius:1, capricorn:3, aquarius:2, pisces:5 },
  leo:{ aries:5, taurus:2, gemini:5, cancer:2, leo:4, virgo:2, libra:4, scorpio:2, sagittarius:5, capricorn:2, aquarius:3, pisces:2 },
  virgo:{ aries:2, taurus:5, gemini:3, cancer:4, leo:2, virgo:4, libra:3, scorpio:3, sagittarius:2, capricorn:5, aquarius:2, pisces:4 },
  libra:{ aries:5, taurus:3, gemini:5, cancer:2, leo:4, virgo:3, libra:4, scorpio:2, sagittarius:4, capricorn:3, aquarius:5, pisces:2 },
  scorpio:{ aries:2, taurus:4, gemini:2, cancer:5, leo:2, virgo:3, libra:2, scorpio:4, sagittarius:2, capricorn:3, aquarius:2, pisces:5 },
  sagittarius:{ aries:5, taurus:2, gemini:3, cancer:1, leo:5, virgo:2, libra:4, scorpio:2, sagittarius:4, capricorn:2, aquarius:4, pisces:2 },
  capricorn:{ aries:1, taurus:5, gemini:2, cancer:3, leo:2, virgo:5, libra:3, scorpio:3, sagittarius:2, capricorn:4, aquarius:2, pisces:4 },
  aquarius:{ aries:4, taurus:2, gemini:5, cancer:2, leo:3, virgo:2, libra:5, scorpio:2, sagittarius:4, capricorn:2, aquarius:4, pisces:2 },
  pisces:{ aries:2, taurus:4, gemini:2, cancer:5, leo:2, virgo:4, libra:2, scorpio:5, sagittarius:2, capricorn:4, aquarius:2, pisces:4 }
};

const COLOR_HEX = {
  red:'#e63946', white:'#f1f1f1', green:'#3aa856', brown:'#8a5a3b', yellow:'#f2c94c',
  silver:'#c0c0c0', gold:'#e8c36a', orange:'#f2a25c', pink:'#f28ab2', blue:'#5b8def',
  black:'#222', purple:'#9b7ede', seaGreen:'#4ab5a2'
};

/* Ordre canonique des éléments : construit les clés de compat.pairs ("fire_air", "earth_water"…) */
const ELEMENT_ORDER = ["fire","earth","air","water"];

const PLANET_SYM = { mars:"♂", venus:"♀", mercury:"☿", moon:"☽", sun:"☉", pluto:"♇", jupiter:"♃", saturn:"♄", uranus:"♅", neptune:"♆" };

/* ============================================================
   Zodiaque chinois
   ============================================================ */
const CN_ORDER = ["rat","ox","tiger","rabbit","dragon","snake","horse","goat","monkey","rooster","dog","pig"];
const CN_ELEMENTS = ["wood","fire","earth","metal","water"];
const CN_ELEMENT_SYM = { wood:"木", fire:"火", earth:"土", metal:"金", water:"水" };

/* glyph : caractère de l'animal ; element : élément fixe de l'animal (≠ élément de l'année) */
const CN_META = {
  rat:    { glyph:"鼠", element:"water", luckyNumbers:"2 · 3",     colors:["blue","gold"] },
  ox:     { glyph:"牛", element:"earth", luckyNumbers:"1 · 4",     colors:["white","yellow"] },
  tiger:  { glyph:"虎", element:"wood",  luckyNumbers:"1 · 3 · 4", colors:["blue","orange"] },
  rabbit: { glyph:"兔", element:"wood",  luckyNumbers:"3 · 4 · 6", colors:["red","pink"] },
  dragon: { glyph:"龙", element:"earth", luckyNumbers:"1 · 6 · 7", colors:["gold","silver"] },
  snake:  { glyph:"蛇", element:"fire",  luckyNumbers:"2 · 8 · 9", colors:["black","red"] },
  horse:  { glyph:"马", element:"fire",  luckyNumbers:"2 · 3 · 7", colors:["yellow","green"] },
  goat:   { glyph:"羊", element:"earth", luckyNumbers:"2 · 7",     colors:["brown","red"] },
  monkey: { glyph:"猴", element:"metal", luckyNumbers:"4 · 9",     colors:["white","blue"] },
  rooster:{ glyph:"鸡", element:"metal", luckyNumbers:"5 · 7 · 8", colors:["gold","brown"] },
  dog:    { glyph:"狗", element:"earth", luckyNumbers:"3 · 4 · 9", colors:["red","green"] },
  pig:    { glyph:"猪", element:"water", luckyNumbers:"2 · 5 · 8", colors:["yellow","brown"] }
};

/* Relations traditionnelles entre animaux (priorité dans cnRelation : opposition > harmonie > triade > nuisance > punition) */
const CN_HARMONY = [["rat","ox"],["tiger","pig"],["rabbit","dog"],["dragon","rooster"],["snake","monkey"],["horse","goat"]];   // 六合
const CN_TRIADS  = [["rat","dragon","monkey"],["ox","snake","rooster"],["tiger","horse","dog"],["rabbit","goat","pig"]];   // 三合
const CN_CLASH   = [["rat","horse"],["ox","goat"],["tiger","monkey"],["rabbit","rooster"],["dragon","dog"],["snake","pig"]];  // 六冲
const CN_HARM    = [["rat","goat"],["ox","horse"],["tiger","snake"],["rabbit","dragon"],["monkey","pig"],["rooster","dog"]];  // 六害
const CN_PUNISH  = [["tiger","snake"],["snake","monkey"],["tiger","monkey"],["ox","goat"],["goat","dog"],["ox","dog"],["rat","rabbit"]]; // 相刑
const CN_SELF_PUNISH = ["dragon","horse","rooster","pig"];                                                                  // 自刑
const CN_RELATION_SCORE = { harmony:5, triad:4, same:3, neutral:3, harm:2, punishment:2, selfPunish:2, clash:1 };

/* Date du Nouvel An chinois de 1900 à 2101, au format MJJ (131 = 31 janvier, 217 = 17 février).
   Source : tables du calendrier chinois (bibliothèques lunardate et lunarcalendar, concordantes), recoupées
   par le calcul astronomique des nouvelles lunes avec astropy. Seuls écarts du calcul : 1916 (la Chine utilisait
   alors l'heure locale de Pékin) et 2034 (mois intercalaire), où la table officielle fait foi. */
const LNY_FIRST_YEAR = 1900;
const LNY_DATES = [
  131,219,208,129,216,204,125,213,202,122,  // 1900–1909
  210,130,218,206,126,214,203,123,211,201,  // 1910–1919
  220,208,128,216,205,124,213,202,123,210,  // 1920–1929
  130,217,206,126,214,204,124,211,131,219,  // 1930–1939
  208,127,215,205,125,213,202,122,210,129,  // 1940–1949
  217,206,127,214,203,124,212,131,218,208,  // 1950–1959
  128,215,205,125,213,202,121,209,130,217,  // 1960–1969
  206,127,215,203,123,211,131,218,207,128,  // 1970–1979
  216,205,125,213,202,220,209,129,217,206,  // 1980–1989
  127,215,204,123,210,131,219,207,128,216,  // 1990–1999
  205,124,212,201,122,209,129,218,207,126,  // 2000–2009
  214,203,123,210,131,219,208,128,216,205,  // 2010–2019
  125,212,201,122,210,129,217,206,126,213,  // 2020–2029
  203,123,211,131,219,208,128,215,204,124,  // 2030–2039
  212,201,122,210,130,217,206,126,214,202,  // 2040–2049
  123,211,201,219,208,128,215,204,124,212,  // 2050–2059
  202,121,209,129,217,205,126,214,203,123,  // 2060–2069
  211,131,219,207,127,215,205,124,212,202,  // 2070–2079
  122,209,129,217,206,126,214,203,124,210,  // 2080–2089
  130,218,207,127,215,205,125,212,201,121,  // 2090–2099
  209,129  // 2100–2101
];
