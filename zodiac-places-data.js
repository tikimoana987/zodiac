/* Zodiaque & Décans — villes de naissance (fichier généré par build-places.py : ne pas modifier à la main).
   Source : GeoNames (www.geonames.org), 33955 villes de plus de 15 000 habitants et capitales de territoires,
   licence Creative Commons Attribution 4.0 (CC BY 4.0). Format décrit dans build-places.py. */
const PLACE_TZ = ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Ciudad_Juarez", "America/Costa_Rica", "America/Coyhaique", "America/Cuiaba", "America/Curacao", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fortaleza", "America/Glace_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Vincennes", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Merida", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Recife", "America/Regina", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Darwin", "Australia/Hobart", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kirov", "Europe/Kyiv", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zurich", "Indian/Antananarivo", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Efate", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Majuro", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wallis"];
const PLACE_DATA = `=AD
Andorra la Vella;a83e087dh
les Escaldes;a83e097dh
=AE
Dubai;8voi5n58q;杜拜|迪拜|دبى|دبي|ドバイ|두바이|Dúbæ|Dabei|Dibai|Dibay|Dubae|Dubaj|Dubay|Dubajo|Dubayy|Doubayi|Dubaija|Dubajus|Ntoumpai|Dubai City|Fort Dabei|Dubai emiraat|दुबई|ดูไบ|Дубаи|دۇبائى
Abu Dhabi;8txi3458p;アブダビ|阿布扎比|아부다비|أبوظبي|ابوظبی|Abu Dabi|Abu Daby|Abu Zabi|Abu Zaby|Ebu Dabi|Äbu Saby|Əbu-Dabi|AEbu Saby|Abou Dabi|Abu Dabis|Abu Daibi|Abu Zabye|Abu Zabyo|Abu-Dabio|Abu-Dzabi|Ebu Dhabi|Aboe Dhabi|A-pu-that-pi|Ampou Ntampi|Abu-Dabi khot|Абу Даби|Абу-Дабі|अबु धाबी|อาบูดาบี|ابو ظبى
Sharjah;8wdi5x58p;夏尔迦|샤르자|Sarja|Sarjo|Sarza|Xarja|Sardza|Sarika|Sharga|Sharja|Xarjah|Charjah|Sardzsa|Shardza|Szardza|Shardzha|Sharijah|Shariqah|Al Sharjah|Schardscha|Ash Shariqa|Ash 'Mariqah|Ash Shariqah|Sharjah city|Shardzha kuorat|Ash-Shariqah emiraat|Шарџа|Шарҗә|شارجه|شارجہ|शारजा|शारजाह|シャールジャ|ชาร์จาห์|الشارقة|إمارة الشارقة
Al Ain City;8t7i6w58o;العين|مدينة العين
Ajman;8wki6458n;اجمان|عجمان|عيمان
Dayrah;8w7i5m58m;ديرة
Ras Al Khaimah;8xni7e58m;راس الخيمة|ras ٱlkhaymat|رَأْس ٱلْخَيْمَة
Musaffah;8toi3c58m;مصفح
Jebel Ali;8vgi5358l;جبل علي
Business Bay;8vzi5j58l
Dubai Investments Park;8vhi5858l
Dubai Marina;8vpi5758k;مرسى دبي
International City;8vwi5x58k
Fujairah;8vsi8i58k;فجيرة|فجيره|الفجيرة
Al Majaz;8wci5v58k
Warīsān;8vxi5x58k;ورسان
Dubai Silicon Oasis;8vsi5v58k
Ar Rumaylah;8wki5z58k;الرميلة
Khalifah A City;8tvi3o58k;مدينة خليفة أ
Mohammed Bin Zayed City;8tni3j58k
Hawr al ‘Anz;8w8i5q58k;هور العنز
Reef Al Fujairah City;8vui8958k;ريف الفجيرة
Bani Yas City;8tji3r58k;مدينة بني ياس
Dubai Festival City;8w2i5s58k
Al Karama;8w4i5m58k
Zayed City;8rpi1758j;مدينة زايد
Al Shamkhah City;8tri3z58j;مدينة الشامخة
Mirdif;8w2i5x58j;مردف
Al Warqaa;8vzi5y58j
Umm Al Quwain City;8x0i6c58j;أم القيوين|ام القيوين|مدينة ام القيوين
Al Sajaah;8wci6j58j
Lahbab;8vki6f58j;لهباب
Nāyf;8w7i5m58j;نايف
Ţarīf Kalbā;8vni8h58j
Al Muteena;8w7i5o58j
Al Qusais 1;8w8i5t58j
Mankhūl;8w5i5l58i;منخول
As Saţwah;8w2i5j58i;السطوه
Khawr Fakkān;8wdi8i58i;مدينة خور فكان
Jumayrā;8w1i5h58i;جميرا
Ar Rāshidīyah;8w2i5v58i;الراشدية
Kalbā;8vli8j58i
Dubai International Financial Centre;8w1i5k58i
Dibba Al-Fujairah;8x3i8a58i;دبا الفجيرة
Al Ḩamīdīyah;8wki6958i;الحميدية
Dibba Al-Hisn;8x6i8b58i
Al Furjan;8vji5758i
The Palm Jumeirah;8vsi5658i;نخلة الجميرة
Ar Ruways;8szhyh58i;الرويس
Dubai Internet City;8vqi5858i
Al Wasl;8w0i5i58h
Al Waheda;8w9i5q58h
Adh Dhayd;8w9i7858h;الذيد
Al Murar al Qadīm;8w8i5n58h;المرر القديم
Halwan;8wfi5y58h
Al Bada'a;8w2i5j58h;البدع
Bur Dubai;8w6i5m58h;بر دبي
Abū Hayl;8w8i5p58h
Al Jurf;8wmi6758h;الجرف
Al Mizhar First;8w5i6058h
Umm Suqaym;8vvi5d58h;أم سقيم
Al Safa;8vxi5f58h
Ḩattā;8uwi7x58h;حتا
=AF
Kabul;9lxj855kr;카불|喀布尔|喀布爾|كابل|کابل|カブール|カーブル|Cabul|Kabil|Kabol|Kobul|Kubha|Cabool|Caboul|Cabura|Caubul|Kaboel|Kaboul|Kabula|Kabuli|Kabulo|Kabura|Kabulas|Kampoul|Кабул|Кобул|काबुल|คาบูล
Herāt;9lfios5kn
Kandahār;9dtiyj5kn
Mazār-e Sharīf;9rzj2f5kn
Jalālābād;9lnjbp5km
Kunduz;9s1j7a5kl
Ghazni;9j7j625kl
Balkh;9s4j1u5kk
Baghlān;9qdj6v5kk
Gardez;9jcj8b5kk
Khōst;9imja85kk
Maymana;9psivy5kk
Khanabad;9rwj7z5kj
Bāzār-e Yakāwlang;9mij215kj
Bāzārak;9o3j945kj
Khulm;9ryj425kj
Taloqan;9s2j955kj
Bāmyān;9mqj4f5kj
Pul-e Khumrī;9puj6w5kj
Shibirghān;9rviyn5kj
Charikar;9n9j855kj
Sar-e Pul;9qmiz55kj
Zaranj;9c0inu5kj
Paghmān;9m3j7j5kj
Asadābād;9mvjdn5kj
Aībak;9qqj4y5kj
Fayzabad;9t4jc25kj
Lashkar Gāh;9driut5kj
Gereshk;9eeivd5kj
Farah;9fxiok5kj
Istālif;9mrj7w5ki
Andkhoy;9sniww5ki
Bahārak;9ssjcz5ki
Nīlī;9joizp5ki
Ghormach;9p9it65ki
Shīnḏanḏ;9iiion5ki
Rustāq;9t5j9z5ki
Khān Neshīn;9avit75ki
Qarāwul;9tej725ki
Jurm;9sejcr5kh
Nahrīn;9q6j815kh
Baraki Barak;9kdj7j5kh
Ārt Khwājah;9t1j905kh
Eslam Qaleh;9mbiln5kh
Karukh;9lsipv5kh
Mehtar Lām;9mbjb15kh
Kushk;9iiio35kh
Shahrak;9kriun5kh
Āsmār;9nbje85kh
Sang-e Chārak;9plj0k5kh
Khāsh;9dliqf5kh
Markaz-e Woluswalī-ye Āchīn;9ktjcf5kh
Jabal os Saraj;9nkj8c5kh
Qarqīn;9tyizg5kh
=AG
Saint John’s;89k9481ij
=AI
The Valley;8cm90u1hd
=AL
Tirana;a4tff28nm
Durrës;a4sfe18nl
Vlorë;a2ffe48nk
Elbasan;a47ffs8nk
Shkodër;a6vfe78nk
Lushnjë;a3qfeq8nj
Berat;a33fff8nj
Fier-Çifçi;a34fed8nj
Korçë;a2ufhq8nj
Fier;a35fec8nj
Krujë;a5bfez8nj
Pogradec;a3mfhd8nj
Kukës;a6wfgq8ni
Kuçovë;a3cffc8ni
Kavajë;a4ffec8ni
Bulqizë;a59fg68ni
Gjirokastër;a1cffy8nh
Librazhd;a4efgg8nh
Patos Fshat;a2wfel8nh
Sarandë;a0sffk8nh
Rrashbull;a4sfe78nh
Lezhë;a62fek8nh
Fushë-Krujë;a58fes8nh
Peqin;a41fev8nh
Patos;a30fei8nh
=AM
Yerevan;a1mhbn6to;葉里溫|예레반|エレバン|Ereun|Revan|Ereban|Erevan|Erewan|Erivan|Eriwan|Erywan|Iravan|Ayrivan|Erebuni|Erehvan|Erevana|Erevano|Ierevan|Jerevan|Jerewan|Yiriwan|Djerevan|Eireavan|Erevanum|Gierevan|Jerevani|Jerjewan|Jerevanas|Erevan osh|Eruandawan|Ervandavan|Yervandavan|Єреван|Ереван|ایروان|يريفان|येरेवान|येरेव्हान|เยเรวาน
Malatia-Sebastia;a1lhbh6tl
Shengavit;a1khbk6tl
Nor Nork;a1ohbt6tl
Kentron;a1mhbn6tk
Erebuni;a1hhbp6tk
Ajapnyak;a1ohbj6tk
Arabkir;a1phbm6tk
Gyumri;a3bh9t6tk
Vanadzor;a3dhbm6tk
Kanaker-Zeytun;a1qhbq6tk
Avan;a1phbu6tj
Davtashen;a1qhbk6tj
Abovyan;a1vhbz6tj
Hrazdan;a2khcc6tj
Vagharshapat;a1lhb16tj
Kapan;9yxhgx6ti
Armavir;a1khac6ti
Masis;a1bhbg6th
Artashat;a0zhbr6th
Charentsavan;a28hc06th
Sevan;a2nhcv6th
Ijevan;a3khdf6th
Gavar;a23hdc6th
Artik;a2uha56th
Ashtarak;a1yhb86th
Ararat;a0phc56th
Goris;9zrhgq6th
Dilijan;a36hcm6th
=AO
Luanda;69gewr0xq;盧安達|罗安达|루안다|ルアンダ|Luand|Loanda|Luando|Lwanda|Louanda|Louanta|Luandae|لونڈا|لوآندا|Луандæ|Луанда|लुआंडा|लुआण्डा|ลูอันดา
Mulenvos;69dex10xo
Viana;699ex50xo
Kikolo;69mex10xn
Maianga;69fews0xn
Camama;696ewv0xn
Golfe;69dewu0xn
Calumbo;68lexa0xn
Hoji ya Henda;69jewx0xn
Lubango;5skexh0xn
Huambo;5yif3q0xn
Benguela;5z2ex80xn
Cabinda;6iketv0xn
Talatona;698ewn0xn
Nova Vida;699ewq0xn
Malanje;67if5e0xn
Kima Kieza;69hewy0xn
Cazenga;69geww0xm
Lobito;5zoexm0xm
Saurimo;676fgn0xm
Samba;69cewo0xm
Cuíto;5zmf710xm
Ramiros;68uew90xm
Uíge;6cvf1u0xm
Luena;61affc0xm
Vila Flor;692ewz0xm
Mossamedes;5rsetr0xm
Menongue;5taf950xm
Chitato;6dqfhl0xm
Navegantes;5z1ex70xm
Kilamba;69feww0xm
Soyo;6gzeud0xl
Sumbe;62veyg0xl
Zango;68zex60xl
Benfica;696ewk0xl
Rangel;69hewu0xl
Sambizanga;69leww0xl
Dundo;6djfhu0xl
Bocoio;5zdeza0xl
N'dalatando;686f1f0xl
Panguíla;69vexd0xl
Mbanza Kongo;6glezk0xl
Cacuaco;69mex50xl
Ingombota;69iewr0xl
Caála;5ybf380xk
Ondjiva;5mlf3p0xk
Catchiungo;5z3f530xk
Gabela;63vezy0xk
Lucapa;6amfhm0xk
Balombo;5zpf110xk
Baía Farta;5z0ewo0xk
Catumbela;5zhexn0xk
Negage;6cgf2f0xk
Longonjo;5y5f2d0xk
Porto Amboim;647ey90xk
Cubal;5xsezl0xk
Cafunfo;69nfa00xk
Cela;62af200xk
Quissecula;62df1x0xk
Ecunna;5ysf330xk
Matala;5t3f1r0xk
Barra do Dande;6ahex50xk
Bailundo;67ff4f0xj
Cahama;5orezr0xj
Luquembo;646f980xj
Gama;6a7exg0xj
Camucuio;5utews0xj
Ganda;5xuf0o0xj
Dondo;674f030xj
Dondo;68vf2k0xj
Nzagi;6apf2i0xj
Camacupa;60mf8k0xj
Luau;649flq0xj
Caxito;6a6exy0xj
Cuango-Luzamba;68lfa40xj
Cangandala;66uf5n0xj
Andulo;623f6e0xj
Ucu Seles;62bezr0xj
Tômbua;5q4esw0xj
Calulo;668f1e0xj
Virei;5qbevz0xj
Maquela do Zombo;6h6f1z0xi
Cuímba;6h0f0m0xi
Úcua;69zezc0xi
Buco Zau;6kreuv0xi
Cacuso;67uf3r0xi
Alto Hama;601f370xi
Humbe;5nnf1e0xi
Xangongo;5nif1l0xi
Cazombo;60yfnm0xi
Cazombo;69rf2p0xi
Mussende;64tf4i0xi
Chindumbo;60tf070xi
Songo;6dlf190xi
Caluquembe;5vhf030xi
Bula Atumba;69xf140xi
Santa Clara;65pf2v0xi
N'zeto;6dxevr0xi
Catabola;609f800xi
Quibala;647f1m0xi
Chinguar;5z4f5e0xi
Cuilo;6b4fe90xi
Piri;6abf040xi
Lubalo;68lfdk0xi
Chitembo;5wdf670xi
Dombe Grande;5y1ewe0xi
Belize;6l3evh0xi
Quipungo;5suf0e0xh
Sanza Pombo;6dpf4g0xh
Ucuma;5y0f1u0xh
Camabatela;6b9f2p0xh
Mungo;615f540xh
Capunda;633f070xh
Conda;635ezu0xh
Muxaluando;6bgezp0xh
Canacassala;6bcez80xh
Tombôco;6f3ex10xh
Cassanguidi;6d8fj60xh
Cuemba;609fa80xh
Golungo Alto;68nf110xh
Lucala;689f2d0xh
Gombe;6bgezp0xh
Lumbala;5uufjk0xh
Cubal do Lumbo;5ztez90xh
Nharêa;624f740xh
Cambundi;6d9f7c0xh
Cambundi;63rf9c0xh
Cambundi Catembo;660f8r0xh
Londuimbali;600f2k0xh
Mabubas;6acey10xh
Cage Mazumbo;6ayezu0xh
Pango Aluquém;69tf060xh
Kunda dya Baze;699f7d0xh
=AR
Buenos Aires;49v9du1kq;Baires|Bonaero|Bwenoze|Bos Aires|Bouonezar|Buenos Ares|Bonaeropolis|Buenos Ajres|Buenos Ayres|Buenosairesa|Bouenos Aires|Buehnos Ajres|Buehnas-Ajrehs|Buehnos-Ajres osh|布宜諾斯艾利斯|布宜诺斯艾利斯|ブエノスアイレス|부에노스아이레스|بوينس آيرس|بیونس آئرس|บัวโนสไอเรส|Буенос Аирес|Буенос Аірес|बुएनोस आइरेस|ब्युएनॉस एरीस
Córdoba;4ir8xp1mp;コルドバ|科尔多瓦|코르도바|Kordov|Cordova|Corduba|Kordava|Kordoba|Kordobo|Kordova|Kordovae|Kuorduoba|Kordova khot|Кордава|Кордоба|كوردوبا|کاردوبا|कोर्डोबा|कोर्दोबा|กอร์โดบา
Rosario;4eh97k1mo
Mar del Plata;40g9g41kn
San Miguel de Tucumán;4vi8uv1un
Salta;5138ua1rn
Santa Fe;4i397d1mm
Avellaneda;49q9dv1km
Corrientes;4tp9cl1mm
Posadas;4tx9ko1mm
Bahía Blanca;3yg9311km
Resistencia;4tq9c51mm
Merlo;49p9cv1km
Quilmes;49k9e71km
San Salvador de Jujuy;52t8un1nm
Santiago del Estero;4ss8xi1mm
Paraná;4hv97v1mm
Neuquén;3xt8my1rl
José C. Paz;4a49cr1kl
Formosa;4xa9ef1ml
Lanús;49l9dt1kl
La Plata;4909f11kl
Berazategui;49f9eb1kl
La Rioja;4ob8qa1ol
San Luis;4dj8rs1tl
San Miguel;4a29cx1kl
Ituzaingó;4td9ij1ml
Catamarca;4qx8t91ll
Río Cuarto;4dz8x91ml
Balvanera;49v9ds1kl
Moreno;49t9cp1kl
Concordia;4it9eu1ml
Comodoro Rivadavia;3em8oj1ll
Belgrano;4a09dm1kl
San Nicolás de los Arroyos;4df98r1kl
Isidro Casanova;49m9d91kk
Rawson;4ia8lm1sk
San Rafael;49u8m71pk
Tandil;42b9bq1kk
Ezeiza;4979dg1kk
Mendoza;4en8kr1pk
Villa Lugano;49o9dl1kk
Lomas de Zamora;49g9ds1kk
San Juan;4ie8ln1sk
Castelar;49r9d41kk
San Justo;49o9dc1kk
Santa Rosa;44a8xf1rk
Morón;49r9d61kk
Zárate;4ba9c21kk
Burzaco;4999ds1kk
Trelew;3lv8ul1lk
Luján;49z9bt1kk
Villa Mercedes;4cg8u61tk
Río Gallegos;2yl8jn1qk
Cipolletti;3xv8n51rk
San Carlos de Bariloche;3rp8dx1rk
Villa María;4fz90c1mk
Pergamino;4bv97r1kk
Reconquista;4p19ab1mk
San Vicente;48q9dq1kk
Olavarría;43j98g1kk
Rafaela;4j79571mk
Berisso;4959f81kk
Junín;49x96p1kk
San Ramón de la Nueva Orán;55q8xc1rk
Campana;4b49c81kk
Monte Chingolo;49j9dx1kk
Mar del Tuyú;44f9ij1kk
San Martín;4e48lt1pk
Presidencia Roque Sáenz Peña;4vl9841mk
Remedios de Escalada de San Martín;49j9ds1kk
Pilar;4aa9cd1kk
Bella Vista;49z9cz1kk
Gualeguaychú;4eb9dg1mk
Barracas;49r9du1kk
Gobernador Gálvez;4e997k1mj
Chimbas;4ij8ln1sj
Necochea;3yx9cu1kj
General Roca;3xl8oa1rj
Venado Tuerto;4c993v1mj
Don Torcuato;4a79d51kj
Goya;4p29be1mj
Villa Carlos Paz;4iq8wv1mj
Concepción del Uruguay;4fs9e91mj
General Pico;46y8yw1rj
Chivilcoy;49299a1kj
Azul;43u99q1kj
Puerto Madryn;3n78vc1lj
Punta Alta;3y093k1kj
Ensenada;4969f51kj
Mercedes;49r9ax1kj
Santa Lucía;4ie8lq1sj
Banfield;49h9dt1kj
Tartagal;57g8yr1rj
Sarandí;49o9dx1kj
Hurlingham;49x9d51kj
Santo Tomé;4i29771mj
San Francisco;4iq93k1mj
El Palomar;49u9d81kj
San Pedro de Jujuy;52p8vt1nj
Colón;4gi9ei1mj
Colegiales;49z9dn1kj
Ushuaia;2pr8m81vj
Oberá;4tn9mw1mj
Caleta Olivia;3cz8og1qj
Eldorado;4wo9oa1mj
Río Tercero;4gm8xx1mj
Los Polvorines;4a69cx1kj
Río Grande;2sl8nx1vj
Plottier;3xr8mh1rj
Tres Arroyos;3ze98k1kj
Barranqueras;4to9ca1mj
Yerba Buena;4vj8um1uj
Libertador General San Martín;53v8w11nj
Viedma;3sm9101rj
Tafí Viejo;4vr8uq1uj
Boedo;49t9dq1kj
Palpalá;52m8uv1nj
Centenario;3y58mr1rj
San Lorenzo;4rv9cr1mj
San Pedro;4cg9a91kj
Cutral-Có;3xv8jp1rj
Chacabuco;49s9811kj
San Isidro;4a99dg1kj
Balcarce;40v9e61kj
Villa Constitución;4dp98f1mj
Paso de los Libres;4nh9hf1mj
Villa Ángela;4te97d1mj
Villa de Mayo;4a59d01kj
General Pacheco;4ab9d41kj
Nogoyá;4g199x1mj
Chilecito;4p08oi1oj
Nueve de Julio;47k96w1ki
Cañuelas;48n9cs1ki
Tortuguitas;4a89ct1ki
Valentín Alsina;49p9dr1ki
Pocito;4i08li1si
Alta Gracia;4i38x11mi
Trenque Lauquen;46391r1ki
Chascomús;4769ev1ki
Pinamar;42x9i11ki
Bragado;48g97z1ki
Retiro;49y9du1ki
Ingeniero Pablo Nogués;4a89cx1ki
Alderetes;4vi8v21ui
Tunuyán;4cq8ka1pi
San Vicente;4w29pn1mi
General Güemes;51h8vb1ri
San José de los Cerrillos;50u8u41ri
Haedo;49s9d91ki
San Antonio de Padua;49q9cy1ki
Santos Lugares;49w9de1ki
Juan José Castelli;4xx97m1mi
Pehuajó;46j9421ki
Curuzú Cuatiá;4n99er1mi
Jesús María;4jy8xz1mi
Cañada de Gómez;4eu95g1mi
Esperanza;4in96r1mi
Lobos;4899bu1ki
General Alvear;48u8ny1pi
Baradero;4c39aq1ki
Bell Ville;4fd91v1mi
Rivadavia;4dt8lu1pi
San José de Metán;4z68vj1ri
Miramar;3zp9fc1ki
Salto;4ar98n1ki
Villa Santa Rita;49v9dk1ki
Pontevedra;49h9cy1ki
Gualeguay;4dy9b91mi
Lincoln;4959531ki
Coronel Suárez;41y93z1ki
Aguilares;4tt8tr1ui
Caucete;4i38mc1si
Granadero Baigorria;4eq97c1mi
Quitilipi;4vd98q1mi
Puerto Iguazú;4yw9of1mi
Villaguay;4hh9c11mi
Casilda;4e89641mi
San Isidro;4qy8tg1li
General José de San Martín;4wa9b61mi
San Carlos de Bolívar;45d9681ki
San Lorenzo;51a8u31ri
Zapala;3xy8hd1ri
Villa Regina;3xe8po1ri
Tigre;4ad9da1ki
Famaillá;4uv8uc1ui
Chajarí;4kl9ey1mi
Mercedes;4oy9eo1mi
Arrecifes;4be9921ki
Saladillo;47099y1ki
Dolores;4549fs1ki
Apóstoles;4sh9l51mi
Ramallo;4cz99b1ki
Villa General San Martín;4io8lo1si
Rosario de la Frontera;4yc8vj1ri
San Vicente;4v09oo1mi
Garupá;4to9kx1mi
Gobernador Virasora;4s39kd1mi
Esquel;3mt8dw1li
Adrogué;49c9du1ki
Cruz del Eje;4kn8w01mi
Machagai;4v79971mi
Pichanal;5588xm1ri
Villa Dolores;4h98ux1mi
Termas de Río Hondo;4tn8vu1mi
Charata;4ue9611mi
Tristán Suárez;4939db1ki
Allen;3xq8nl1ri
Malargüe;47g8ip1pi
Leandro N. Alem;4tc9mc1mi
Capitán Bermúdez;4eu97c1mi
Las Breñas;4ur96c1mi
Muñiz;4a09cx1ki
Fontana;4tu9c01mi
Cinco Saltos;3y68my1ri
Esquina;4mn9an1mi
Rawson;3lq8v51li
Rosario de Lerma;50l8tu1ri
Colón;4bu96a1ki
Carmen de Patagones;3so9121ki
Villa Nueva;4fx90b1mi
Mar de Ajó;43z9ik1ki
Profesor Salvador Mazza;58r8z31ri
Pico Truncado;3c08n81qi
Victoria;4fe98x1mi
Las Flores;45z9bu1ki
Jardín América;4uw9ml1mi
La Calera;4ix8xa1mi
Tres Isletas;4wu9851mi
Las Heras;3cq8kj1qi
La Paz;4km9ab1mi
Monte Caseros;4lz9fw1mi
Coronel Brandsen;48b9e81ki
Pérez;4ec9771mi
La Unión;4949de1ki
Marcos Juárez;4f693h1mi
Colonia Caroya;4ju8y21mi
Embarcación;55j8xy1ri
Veinticinco de Mayo;47l98v1ki
Monteros;4uj8u21ui
San Pedro;4w29pp1mi
San Martín de los Andes;3ug8dt1rh
Avellaneda;4p49aa1kh
Villa Gesell;42i9hr1kh
San Antonio de Areco;4av9at1kh
El Calafate;3268b81qh
Santo Tomé;4qp9kc1mh
Villa Ortúzar;49y9dl1kh
General Villegas;48p90z1kh
Montecarlo;4w79nw1mh
Río Segundo;4i38yh1mh
Rojas;4b097b1kh
San Justo;4kh97p1mh
San Miguel del Monte;47k9cn1kh
Villa Allende;4j38xe1mh
Coronel Pringles;40h95l1kh
General Juan Madariaga;4389ha1kh
El Bolsón;3pg8db1rh
Arroyo Seco;4dx97x1mh
Morteros;4kp93r1mh
Albardón;4io8ln1sh
Añatuya;4qy91h1mh
Deán Funes;4li8x91mh
Laboulaye;4b78zx1mh
General Mosconi;5788yr1rh
Vera;4o698r1mh
Arroyito;4iq90v1mh
El Soberbio;4u69pg1mh
Diamante;4gx97k1mh
Carlos Casares;47295j1kh
Perdriel;4e58kn1ph
Joaquín V. González;5098xv1rh
Pirané;4yj9bt1mh
Villa Ocampo;4qv9b51mh
Villa Paula de Sarmiento;4ij8lm1sh
Cosquín;4j78wx1mh
General Belgrano;46n9dj1kh
Ayacucho;42t9dj1kh
Sunchales;4k29501mh
Las Varillas;4hh91s1mh
Rodeo del Medio;4ed8l71ph
Pilar;4i08yk1mh
Santa Elena;4k299x1mh
Gálvez;4h195y1mh
Rufino;4au91t1mh
Saladas;4ri9d61mh
Crespo;4h198h1mh
Firmat;4d29581mh
Santa Rosa;5518x11rh
Los Toldos;48s96g1kh
Villa del Rosario;4id8zi1mh
Puerto Rico;4vj9n61mh
Villa Sarmiento;49t9db1kh
Toay;4458x61rh
Coronda;4h796s1mh
San Antonio Oeste;3sv8vl1rh
Tupungato;4db8jx1ph
San Jorge;4he9461mh
Cafayate;4xl8sq1rh
Puerto Deseado;39d8sy1qh
Navarro;48r9bc1kh
Río Ceballos;4jf8xc1mh
Santa Clara del Mar;40x9g91kh
Aimogasta;4qo8qf1oh
Santa María;4vv8sj1lh
Tostado;4ot94f1mh
Federal;4k09cq1mh
Río Colorado;3xp8xy1rh
Pigüé;41k92n1kh
Carmen de Areco;4ai99u1kh
Embalse;4gj8x41mh
Benito Juárez;41d99v1kh
General Pinedo;4u395s1mh
Carcarañá;4eq9651mh
San Javier;4l299j1mh
Puerto Esperanza;4xq9ob1mh
Colonia Wanda;4xv9og1mh
Unquillo;4j88xd1mh
San Luis del Palmar;4tl9dc1mh
Magdalena;48k9g91kh
Santa Teresita;44i9ij1kh
Belén;4t78pt1lh
Catriel;40s8np1rh
Bella Vista;4ux8um1uh
La Falda;4jn8ww1mh
General Acha;4268wk1rh
=AS
Pago Pago;5uc0pu9lg
=AT
Vienna;anxf5h8rp;빈|비엔나|Беч|Вена|وین|فيينا|維也納|Bech|Becs|Veen|Vena|Vien|Viin|Vine|Wean|Wene|Wien|Dunaj|Fiena|Viden|Viena|Vieno|Vjena|Vyana|Wenen|Bienne|Vieden|Vienne|Viyana|Vjenna|Wieden|Wjedzyn|Vinarborg|Vindobona|ウィーン|वियना|เวียนนา
Graz;akrf2w8rm
Linz;ao7ezp8rl
Favoriten;ansf5i8rl
Donaustadt;anzf5q8rl
Floridsdorf;ao1f5k8rl
Salzburg;amsew88rl
Innsbruck;alaern8rk
Ottakring;anyf5a8rk
Simmering;anuf5n8rk
Klagenfurt am Wörthersee;ajiezr8rk
Landstraße;anwf5j8rk
Penzing;anwf578rk
Meidling;antf5d8rk
Brigittenau;ao0f5i8rk
Fünfhaus;anwf5c8rk
Döbling;ao1f5d8rk
Villach;ajheyi8rj
Hernals;anzf5b8rj
Margareten;anvf5f8rj
Eisenzicken;alcf568rj
Hietzing;anvf5a8rj
Währing;anzf5e8rj
Aspern;anyf5s8rj
Dornbirn;alpen28rj
Wiener Neustadt;amsf538rj
Alsergrund;anyf5g8ri
Steyr;angf028ri
Hötting;alberl8ri
Feldkirch;al8emo8ri
Jakomini;akpf2x8ri
Pradl;alberq8ri
Neubau;anwf5f8ri
Mariahilf;anwf5f8ri
Lend;aksf2u8ri
Bregenz;alyen38ri
Gries;akqf2u8ri
Baden;andf538ri
Traun;anyezk8ri
Wolfsberg;ak4f188ri
Geidorf;aksf2w8ri
Josefstadt;anxf5f8ri
Lustenau;alremu8rh
Sankt Pölten;anxf3g8rh
Essling;anxf5w8rh
Mödling;anlf598rh
Eggenberg;akrf2s8rh
Sankt Peter;ajjezu8rh
Sankt Martin;ajiezo8rh
Andritz;akvf2u8rh
Ansfelden;anxezp8rh
Wilten;alaern8rh
Wels;anteyz8rh
Saalfelden am Steinernen Meer;alrevp8rh
Innere Stadt;anxf5h8rh
Hohenems;alkemx8rh
Stockerau;aoef528rh
Straßgang;aknf2s8rh
Sankt Leonhard;akrf2y8rh
Wetzelsdorf;akpf2s8rh
Klosterneuburg;ao7f5d8rh
Amstetten;anof1b8rh
Telfs;alfeqr8rh
Sankt Peter;akpf2z8rh
Bludenz;akzena8rh
Perchtoldsdorf;anof578rh
=AU
Sydney;4bxpk17br;悉尼|雪梨|시드니|sډny|سڈنی|シドニー|Sidni|Sek-na|Sidnef|Sidnei|Sidnej|Sidney|Sit-ni|Sidneja|Sidnejo|Sidnejus|Sydneium|Sedniejos|Sydney City|Sanctus Dionysius|Сидни|Сідні|सिडनी|सिद्नी|ซิดนีย์
Melbourne;40zp2o79r;멜번|멜버른|墨尔本|墨爾本|新金山|メルボルン|Melben|Melburn|Melpurn|Mel'burn|Melborns|Melburna|Melburno|Melburnas|Melvourni|Melbournum|Melbourne City|Greater Melbourne|ملبورن|میلبرن|Мелбурн|Мелбърн|मेलबोर्न|เมลเบิร์น
Brisbane;4tppp375q;布里司班|布里斯本|布里斯班|브리즈번|ブリスベン|برسبان|برسبین|Brisben|Brisbin|Brysben|Bresbens|Brisbano|Brisbehn|Brisbena|Brizbejn|Brisbenas|Brismpein|Pu-li-su-pan|Brisbane City|Брисбен|Брисбэн|บริสเบน|ब्रिसबेन
Perth;4h9mtu7aq;珀斯|퍼스|پرت|prtھ|パース|Pert|Perþ|Purt|Perta|Perto|Pirth|Peairt|Pertas|Perthia|Perth City|Перт|Пърт|पर्थ|เพิร์ท
Adelaide;48zol074p;阿德来得|阿德莱德|aډlyd|اډلید|ॲडलेड|एडिलेड|アデレード|애들레이드|Adalet|Adelejd|Edelaid|Adelaida|Adelajda|Adelajdo|Adehlaida|Adelaidae|Adelaidis|Tarndanya|Tarndarnya|Аделейд|Аделејд|แอดิเลด
Gold Coast;4s8pq775n
Newcastle;4ejplm7bn
Sunshine Coast;4vypp875m
Canberra;480pe97bm
Central Coast;4d5pkh7bm
Logan City;4t8ppb75m
Geelong;401p1079m
Wollongong;4aepj57bm
Hobart;3mwp9978m
Townsville;5ghp7t75l
Cairns;5n0p4x75l
Toowoomba;4tgpm375l
Darwin;5zenzg77l
City of Port Phillip;40xp2m79k
Ballarat;41nozl79k
Mandurah;4fnmtg7ak
Bendigo;43wp0s79k
Caloundra;4vkppc75k
Launceston;3qwp8p78k
Maitland;4f3pl07bk
Tuggeranong;47mpe37bk
Mackay;5b9ped75k
Rockhampton;552pi375k
Coffs Harbour;4luppb7bk
Blue Mountains;4cdphl7bk
Bunbury;4dfmt87ak
Bundaberg;50xpn775j
Adelaide Hills;491olb74j
Point Cook;40pp2379j
Craigieburn;41kp2n79j
Pittwater;4chpka7bj
Melbourne City Centre;40yp2p79j
Tarneit;40wp1u79j
Pakenham;409p4379j
Hervey Bay;4zrpod75j
Port Macquarie;4ippor7bj
Reservoir;418p2s79j
Berwick;40dp3r79j
Werribee;40qp1v79j
Blacktown;4c7pj87bj
Gladstone;53rpk675j
Tamworth;4jnpj97bj
Dubbo;4ggpcs7bj
Glen Waverley;40sp3879j
Orange;4dkpe67bi
Castle Hill;4cbpjg7bi
Wodonga;45op8179i
Sunbury;41mp2179i
Geraldton;4q2mqd7ai
Baldivis;4g7mtr7ai
St Albans;416p2879i
Frankston;402p3479i
Auburn;4bzpjj7bi
Hoppers Crossing;40sp1y79i
Baulkham Hills;4c8pjf7bi
Truganina;40yp2379i
Bathurst;4d6pfi7bi
Mount Waverley;40sp3579i
Saint Albans;417p2879i
Albany;48pmzg7ai
Bankstown;4bspjj7bi
Mildura;4b1ouw79i
Canning Vale;4gymu07ai
Frankston East;403p3579i
Preston;415p2u79i
Palmerston;5zbnzu77i
Rowville;40np3f79i
Epping;41fp2v79i
Southport;4sbpq475i
Warrnambool;3zeovt79i
Shepparton;44yp3w79i
Liverpool;4bspj97bi
Surfers Paradise;4s8pq775i
Doncaster East;411p3779i
Noble Park;40jp3979i
Narre Warren South;40cp3l79i
Kwinana;4ghmtm7ai
Maroubra;4bppk37bi
Parramatta;4c2pjg7bi
Bentleigh East;40op2x79i
Dandenong;40ip3c79i
Keysborough;40hp3979i
Wangaratta;450p6g79i
Hurstville;4bnpjq7bi
Merrylands;4c1pje7bi
Kalgoorlie;4kln9f7ai
Randwick;4btpk57bi
Buderim;4vwpp675i
Mill Park;41dp2z79i
Richmond;40yp2s79i
Bundoora;41ap2y79i
Mosman;4c0pk47bi
Narre Warren;40dp3m79i
Kellyville;4cdpjb7bi
Maryborough;4z2po675i
Ferntree Gully;40sp3m79i
Busselton;4cjmsf7ai
Doreen;41kp3779i
Traralgon;3zwp7279i
Quakers Hill;4cbpj47bi
Coburg;415p2p79i
Croydon;410p3k79i
Ryde;4c2pjr7bi
Caboolture;4uspov75i
Devonport;3rmp6j78i
Marrickville;4btpjw7bi
Glen Iris;40tp2z79i
Hampton Park;40dp3h79i
Alice Springs;546o7w77i
Strathfield;4bwpjo7bi
Mornington;3zup2w79i
Sydney Central Business District;4bypk17bi
Mount Gambier;40xor274i
Northcote;413p2s79i
South Yarra;40wp2r79i
Chatswood;4c4pjy7bi
Doncaster;411p3479i
South Morang;41fp3279i
Upper Coomera;4skppt75i
Brunswick;413p2p79i
Bacchus Marsh;41dp1879i
Cranbourne North;408p3m79i
Cranbourne East;404p3m79i
Ellenbrook;4hrmu57ai
Goulburn;49hpfw7bi
Kew;40zp2v79i
Caroline Springs;416p2279i
Campsie;4btpjq7bi
Endeavour Hills;40ip3i79i
Wollert;41mp2v79i
Greenacre;4bupjm7bi
Dianella;4hfmtv7ai
Carlingford;4c6pjl7bi
Roxburgh Park;41hp2l79i
Morphett Vale;48foks74i
Cheltenham;40jp2x79i
Glenroy;41ap2l79i
Ashfield;4bvpjs7bi
Thornlie;4gymu47ah
Boronia;40tp3k79h
Greystanes;4c2pjb7bh
Epping;4c7pjo7bh
Mernda;41kp3279h
Brighton;40pp2s79h
Lalor;41dp2u79h
Cessnock;4etpkg7bh
Robina;4s1pq375h
Mooroolbark;412p3o79h
Glenmore Park;4c5pij7bh
Southbank;40yp2o79h
Forest Lake;4t9pox75h
Dandenong North;40jp3d79h
Morley;4hfmtz7ah
Hornsby;4cepjq7bh
Gympie;4x9po275h
Hawthorn;40yp2w79h
Malvern East;40tp2w79h
Springvale;40lp3779h
Langwarrin;3zzp3979h
Carrum Downs;406p3979h
Camberwell;40wp2z79h
Cabramatta;4bupj97bh
Mount Barker;48lolr74h
Armidale;4laplb7bh
Balwyn North;411p3179h
Cranbourne;405p3k79h
Greenvale;41hp2f79h
North Lakes;4uepp275h
Essendon;415p2j79h
Morayfield;4uppov75h
Glenferrie;40xp2x79h
Hawthorn South;40xp2w79h
Gosnells;4gwmu97ah
Dee Why;4c9pk97bh
Greensborough;41ap3279h
Kirwan;5gep7l75h
Narangba;4ugpow75h
Whyalla;4e9oi474h
Wantirna South;40sp3e79h
Wheelers Hill;40qp3a79h
Griffith;4arp5p7bh
Wyndham Vale;40rp1q79h
Burnie;3ryp5a78h
Thomastown;41cp2u79h
Kallangur;4ubpoz75h
Punchbowl;4brpjl7bh
Gawler;49wolf74h
Cranbourne West;406p3j79h
Mulgrave;40np3a79h
St Clair;4c4piu7bh
Warragul;400p5d79h
Mount Martha;3zpp2u79h
Adelaide city centre;48zol074h
Lidcombe;4bypjk7bh
Bexley;4bppjs7bh
Deception Bay;4uhpp375h
Saint Kilda;40tp2q79h
Willetton;4gzmtx7ah
Grafton;4nkpot7bh
Seven Hills;4c6pj97bh
Ringwood;40yp3f79h
Wollongong city centre;4adpj57bh
Redbank Plains;4t7pom75h
Thornbury;414p2t79h
Clayton;40op3479h
Byford;4gimu97ah
Eltham;417p3779h
Frankston South;3zzp3679h
Mount Eliza;3zyp3079h
Cherrybrook;4ccpjl7bh
Sunshine West;411p2a79h
Torquay;3zjp0x79h
Officer;40ap3x79h
Altona Meadows;40sp2679h
Ballajura;4hkmty7ah
Highton;3zzp0v79h
Saint Ives;4cbpjw7bh
Maroochydore;4vyppa75h
Labrador;4sepq475h
Mount Isa;5cfoni75h
Burwood;4bwpjq7bh
Pascoe Vale;417p2l79h
Deer Park;413p2579h
Capalaba;4tippk75h
Fairfield;4bxpjb7bh
Bentleigh;40op2w79h
Carnegie;40rp2y79h
Yagoona;4bupji7bh
Sunnybank Hills;4tbpp575h
Westmead;4c4pjf7bh
Eastwood;4c5pjo7bh
Cronulla;4bepjv7bh
Bairnsdale;40ypa179h
Wahroonga;4ccpjs7bh
Port Melbourne;40wp2m79h
Scarborough;4hemtk7ah
Earlwood;4bspjt7bh
Batemans Bay;46tph67bh
Broken Hill;4h7osx76h
Lilydale;415p3r79h
Hillside;41bp2279h
Seaford;406p3579h
Engadine;4bdpjh7bh
Footscray;410p2i79h
Karratha;5cemwl7ah
Horsham;441ov079h
Templestowe;415p3779h
Calamvale;4tapp575h
Lakemba;4bspjo7bh
Caulfield North;40tp2u79h
Parafield Gardens;49eol174h
Helensvale;4sgppx75h
Mitcham;40yp3c79h
Brighton East;40qp2u79h
Nerang;4s9ppy75h
Granville;4c0pjh7bh
Bracken Ridge;4u4pp375h
Mount Druitt;4c7piy7bh
Pacific Pines;4seppv75h
Paralowie;49gol174h
Kogarah;4bnpju7bh
Umina Beach;4cwpkb7bh
The Gap;4tspou75h
Taree;4hdpnh7bh
Moonee Ponds;413p2k79h
Manly;4c4pk97bh
West Pennant Hills;4c9pjl7bh
Carlton;410p2p79h
Alexandra Hills;4tjppn75h
Glenwood;4cbpj97bh
Muswellbrook;4gepj57bh
Australind;4dkmtg7ah
Mascot;4brpjz7bh
Duncraig;4hlmtm7ah
Coorparoo;4tnpp675h
Lara;40ep1579h
Banora Point;4rnpqi7bh
Surry Hills;4bwpk17bh
Casula;4bppj67bh
Cranebrook;4cdpin7bh
Yarraville;40yp2i79h
Albany Creek;4u1pox75h
Docklands;40zp2n79h
Rockdale;4bppjt7bh
Taylors Hill;419p2379h
Carindale;4tlppa75h
Landsdale;4hnmtv7ah
North Melbourne;410p2n79h
Warwick;4rmpmb75h
Eight Mile Plains;4teppa75h
Kingsford;4bspk37bh
Coogee;4bspk67bh
Prestons;4bqpj37bh
Rockingham;4gcmth7ah
Port Hedland;5dln1h7ah
Corio;408p1279h
Palm Beach;4rwpqb75h
Ascot Vale;412p2k79h
Taylors Lakes;41ap2779h
Elwood;40sp2q79h
Burwood;40vp3479h
Miranda;4bgpjq7bh
Springfield Lakes;4t5pos75h
Keilor East;417p2f79h
Rochedale South;4tcppc75h
Echuca;45mp2379h
Kensington;4bspk27bh
Wallan;422p2q79h
=AW
Oranjestad;7ws8hh1wi
Noord;7wx8hh1wi
Tanki Leendert;7wu8hi1wh
Santa Cruz;7wr8hm1wh
=AX
Mariehamn;bkyffd84g
=AZ
Baku;a26hql4xp;巴库|바쿠|バクー|Bacu|Bagu|Baki|Bako|Baky|Bakı|Baqu|Boku|Bakoe|Bakou|Bakue|Bakuo|Bakuu|Mpakou|Баку|Бакы|باكو|باکو|बाकु|บากู
Sumgayit;a2rhpz4xn
Ganja;a30hgs4xm
Khirdalan;a2dhq84xl
Yevlakh;a2uhiz4xk
Mingachevir;a38hiq4xk
Naxçıvan;9yxhe54xk
Lankaran;9xnhnp4xk
Qaraçuxur;a28hqt4xk
Lerik;9xphmh4xk
Şirvan;a0yhnx4xj
Sheki;a4fhj14xj
Xaçmaz;a56hnl4xj
Bakıxanov;a2ahqt4xj
Göyçay;a2xhkm4xj
Bilajari;a2chqd4xj
Barda;a26hix4xi
Shamkhir;a3fhfu4xi
Aghjabadi;a19hju4xi
Shamakhi;a2vhn44xi
Maştağa;a2lhqx4xi
Saray;a2lhq44xi
Aghdam;a13hid4xi
Salyan;a00ho24xi
Hövsan;a25hr54xi
Jalilabad;9yxhmp4xi
Imishli;a0rhli4xi
Zaqatala;a5nhhk4xi
Lokbatan;a21hq54xi
Sabirabad;a15hmo4xi
Haji Zeynalabdin;a2uhpo4xi
Amirdzhan;a2bhqu4xi
Ismayilli;a3ahlr4xi
Siyazan;a44hog4xi
Fuzuli;a00hiz4xi
Buzovna;a2khr74xi
Biny Selo;a2dhr54xi
Ağdaş;a2xhjv4xh
Divichibazar;a4gho34xh
Hacıqabul;a18hny4xh
Quba;a4whmr4xh
Aghsu;a2phmg4xh
Zabrat;a2ghqq4xh
Sabunçu;a2chqr4xh
Gazakh;a45he14xh
Mehdiabad;a2ihqh4xh
Tartar;a22hid4xh
Saatlı;a0xhmd4xh
Goygol;a2rhgo4xh
Shusha;a0ghhv4xh
Kyurdarmir;a22hls4xh
Neftçala;9zehot4xh
Jorat;a2phq34xh
Pushkino;9zmhmu4xh
Gobu;a28hq34xh
Hokmali;a2bhq64xh
Əhmədbəyli;a0shmf4xh
Nehram;9yohea4xh
Yeni Suraxanı;a2bhr04xh
Qusar;a53hmj4xh
Ujar;a2khkd4xh
Govlar;a3rhf14xh
Beylagan;a0ihka4xh
Mardakan;a2hhra4xh
Astara;9wuhnr4xh
=BA
Sarajevo;abtfb08gn
Banja Luka;aeef7t8gl
Zenica;acsf9q8gl
Tuzla;adqfbv8gl
Mostar;aaef9h8gk
Bihać;aeif438gk
Ilidža;abrfav8gj
Lukavac;adqfbh8gj
Bugojno;acef8h8gi
Brčko;aenfca8gi
Bijeljina;aecfdd8gi
Prijedor;aeyf6f8gi
Trebinje;a8nfay8gi
Travnik;acvf938gi
Doboj;ae9fa98gi
Cazin;aexf4a8gh
Velika Kladuša;afif3x8gh
Visoko;ac7fai8gh
Goražde;abbfcq8gh
Konjic;ab9f9w8gh
Gračanica;ae6fav8gh
Gradačac;aeofb78gh
Bosanska Krupa;aeof4v8gh
=BB
Bridgetown;7yf9ae20k
=BD
Dhaka;8rvkv556s;达卡|達卡|다카|دكا|داكا|ダッカ|Daca|Daka|Dakk|Dako|Deka|Daaka|Dacca|Dakah|Dakka|Dakke|Dgaka|Ntaka|Dakkae|Ntakka|Mujib City|Дака|Даака|ढाका|ธากา
Chattogram;8o2kz356q;吉大港|吉大港市|치타공|チッタゴン|چټگرام|chټgram|चटगाँव|चिटागोंग|Cetagons|Citagaon|Citagong|Cattagram|Chitagong|Chytagong|Citagonga|Citagongo|Cittaqonq|Cottogram|Islamabad|Chittagong|Chottogram|Citagongas|Csittagong|Tsitankon'nk|Chittagong Ghat|Читагонг|Чытагонг|จิตตะกอง
Gazipur;8sokv656q;ガジプール|Газипур|Газіпур|غازيبور|غازي پور|गाजीपुर|Jaydebpur|Joydebpur|Joydeypur
Khulna;8pdkss56p;쿨나|クルナ|库尔纳市|Hulna|Kulna|Kulno|Xulna|Kkhelna|Kkhulna|Кулна|Құлна|خولنا|خولنه|खुलना
Rangpur;8xjkrx56o;랑푸르|ランプル|朗布尔市|rnګpwr|رنګپور|रंगपुर|Kotwali|Rongpur|Rangpuras|Rangpur City|Mosque Rangpur|Рангпур
Rajshahi;8tpkq456o
Comilla;8r6kxb56n
Pallabi;8s6kv156n
Mirpur Model Thana;8s5kv056n
Mohammadpur;8v6kpx56n
Hāthazāri;8ojkz156n
Bāndarban;8nol0656n
Shibganj;8vgks456m
Natore;8ttkr756m
Kafrul;8s3kv156m
Tungi;8sdkv456m
Bhatara;8s4kv956m
Savar;8s9kup56m
Narsingdi;8sgkw056m
Nagar Naluākot;8t4kw556m
Bagerhat;8oyktf56m
Brāhmanbāria;8slkx356m
Cox’s Bāzār;8lkkzl56m
Jessore;8qdkrt56m
Nāgarpur;8sukto56m
Sylhet;8v6kz756l
Mymensingh;8uskv556l
Narayanganj;8rlkve56l
Ashuganj City;8sskwt56l
Bogra;8v1ks956l
Dinajpur;8x7kq856l
Karnaphuli;8p1l0756l
Chāndpur;8qjkvt56l
Motijheel;8rxkv656l
Barishal;8p2kv156l
Saidpur;8xmkqx56l
Pār Naogaon;8uwkr356l
Pābna;8spkrw56l
Paltan;8rykv556l
Tangail;8tdkts56l
Jamālpur;8v8ktv56l
Puthia;8tpkqr56l
Ramna Maidan;8rxkv456l
Nawābganj;8ubkp756l
Kushtia;8sekrk56l
Maijdi;8pjkx256k
Sonārgaon;8rpkvq56k
Sātkhira;8p3krf56k
Sirajganj;8tykt756k
Tungipara;8pmktq56k
Farīdpur;8rlktk56k
Sherpur;8viku256k
Rangamati;8owl0356k
Bhairab Bāzār;8stkwq56k
Shāhzādpur;8t6ksw56k
Bhola;8p1kvs56k
Azimpur;8rxkv356k
Kishorganj;8twkw656k
Bibir Hat;8p0kyz56k
Habiganj;8tqkxx56k
Madaripur;8qdkul56k
Feni;8pxkxw56k
Lākshām;8qkkx456k
Ishwardi;8t1krf56k
Sarishābāri;8urktj56k
Netrakona;8v4kw156k
Sunāmganj;8vnkxw56j
Joypur Hāt;8vqkrb56j
Mānikganj;8saku156j
Thākurgaon;8ybkpr56j
Pālang;8qikuz56j
Lalmonirhat;8y0ksh56j
Patuakhali;8o5kuz56j
Rāipur;8q0kw556j
Lakshmīpur;8pqkwb56j
Maulavi Bāzār;8u1kyx56j
Rāmganj;8q6kwd56j
Narail;8qcksm56j
Pirojpur;8oqkty56j
Dhanmondi;8rykv256j
Sandwīp;8ojky156j
Sātkania;8nckzp56j
Patiya;8nykzi56j
Gopālganj;8qiku656j
Khagrachhari;8q7kzh56j
Chilmāri;8x0kt356j
Nageswari;8y5kt556j
Panchagarh;8z5kq056j
Uttar Char Fasson;8nrkvz56j
Parbatipur;8xakr156j
Paotana Hat;8xaksm56j
Burhānuddin;8oikw056j
Kālīganj;8r1krm56j
Dohār;8rjkue56j
Hājīganj;8qlkwe56j
Bhanga;8qzkty56j
Bhātpāra Abhaynagar;8pxksg56j
Lālmohan;8o2kw256j
Jhingergācha;8q7krh56i
Mirzāpur;8sykua56i
Sakhipur;8tkkuh56i
Teknāf;8jyl0e56i
Gaurnadi;8ptkum56i
Kālia;8q0ksz56i
Dohazāri;8nkkzr56i
Bera;8swksz56i
Mehendiganj;8pekvh56i
Chhāgalnāiya;8pyky756i
Chhātak;8vkkyn56i
Nālchiti;8owkur56i
Bherāmāra;8sqkr756i
Phultala;8p4ksn56i
Dukuria;8rvkv156i
Baniachang;8u4kxs56i
Sarankhola;8nzktf56i
Shibganj;8ulkow56i
Pīrgaaj;8xukpg56i
Bājitpur;8takwn56i
Char Bhadrāsan;8qrkun56i
Mātuail;8rvkva56i
Gafargaon;8tvkvk56i
Badarganj;8xbkrd56i
Nabīnagar;8sdkwp56i
Morrelgonj;8oektm56i
Kesabpur;8pnkru56i
Bhāndāria;8ohku656i
Mathba;8nxktw56i
Shāhbāzpur Town;8stkx956i
Burirchar;8nikul56i
Raojān;8omkzc56i
Manikchari;8pgkz456i
Muktāgācha;8uskuq56i
Taluker Char Doani;8niktu56i
Srimangal;8tjkyt56h
Ayla Patakata;8nqkul56h
Natona;8n9ku356h
Charāmaddi;8owkv756h
=BE
Brussels;av9e837jo;比律悉|布魯塞爾|布鲁塞尔|브뤼셀|Brisel|Brusel|Bruxel|Brwsel|Brasels|Brisele|Bruksel|Brusela|Bruselj|Bruselo|Brussel|Bryssel|Bryusel|Breissel|Brjuksel|Brjusel'|Brueksel|Bruessel|Bruiseal|Bruksela|Brukseli|Brukselo|Brusehl'|Bruselas|Bruseles|Brussele|Bruxelas|Brüsszel|Briuselis|Brjussel'|Bruesszel|Bruxellae|Bruxelles|Bryxelles|Kota Brusel|An Bhruiseil|Брисел|Брусэль|بروكسل|بروکسل|ブリュッセル|ब्रसेल्स|บรัสเซลส์
Antwerp;awae887jn
Gent;avte6c7jm
Charleroi;au1e8c7jl
Liège;aunebh7jl
Anderlecht;av8e7z7jl
Schaerbeek;avbe867jk
Brugge;aw9e4y7jk
Namur;au7e9j7jk
Leuven;avce927jk
Molenbeek-Saint-Jean;av9e7z7jk
Mons;au5e6z7jk
Ixelles;av7e857jk
Uccle;av4e827jk
Deurne;awae8f7jk
Hasselt;avheau7jk
Aalst;avie787jk
Mechelen;avre8g7jk
La Louvière;au9e7n7jk
Kortrijk;av7e527jj
Tournai;aule5f7jj
Ostend;awae457jj
Sint-Niklaas;aw5e7i7jj
Genk;avkeba7jj
Seraing;auieba7jj
Woluwe-Saint-Lambert;av8e8b7jj
Forest;av6e817jj
Roeselare;avje4o7jj
Verviers;aujeca7jj
Jette;avbe817jj
Mouscron;auye4x7jj
Saint-Gilles;av7e827jj
Etterbeek;av7e877jj
Borgerhout;aw9e8c7jj
Dendermonde;avre7e7jj
Beveren;aw9e7u7jj
Merksem;awde8d7jj
Turnhout;awke9q7jj
Berchem;aw7e8b7jj
Evere;avbe887ji
Lokeren;avye737ji
Wilrijk;aw5e887ji
Beringen;avteaj7ji
Dilbeek;av9e7u7ji
Heist-op-den-Berg;avwe957ji
Sint-Truiden;av6eaf7ji
Braine-l'Alleud;ause857ji
Brasschaat;awhe8h7ji
Grimbergen;avhe857ji
Vilvoorde;avhe8b7ji
Herstal;auqebm7ji
Maasmechelen;avlebt7ji
Waregem;avde5j7ji
Châtelet;au0e8l7ji
Ieper;av9e417ji
Ninove;av7e777ji
Geel;aw5e9v7ji
Halle;auxe7r7ji
Hoboken;aw6e837ji
Wavre;auwe8s7ji
Auderghem;av6e8b7ji
Knokke-Heist;awne537ji
Schoten;awde8i7ji
Lier;aw1e8p7ji
Mol;aw7ea87ji
Sint-Amandsberg;avue6f7ji
Binche;au1e7k7ji
Lommel;awbear7ji
Menen;av4e4o7ji
Oudenaarde;av9e617ji
Tienen;av5e9q7ji
Evergem;avze6b7ji
Heusden;avseao7ji
Wevelgem;av4e4t7ji
Geraardsbergen;av1e6s7ji
Sint-Pieters-Leeuw;av2e7s7ji
Blauwput;avde947ji
Kessel-Lo;avde967ji
Helchteren;avueay7ji
Houthalen;avreax7ji
Tongeren;av2eb67ji
Deinze;avme5t7ji
Waterloo;auve887ji
Bilzen;avbebc7ji
Louvain-la-Neuve;aure8t7ji
Courcelles;au6e857ji
Asse;avfe7o7ji
Zaventem;avce8f7ji
Aarschot;avne9g7ji
Saint-Josse-ten-Noode;av9e857ji
Ans;auqebc7ji
Ath;aune6i7ji
Kapellen;awje8c7ji
Izegem;avfe4x7ji
Arlon;as0ec67ji
Temse;aw1e7p7ji
Harelbeke;av9e577ji
Herentals;aw6e9f7ji
Maaseik;avyec27ji
Berchem-Sainte-Agathe;avbe7y7ji
Watermael-Boitsfort;av4e897ji
Flémalle-Haute;aukeb47ji
Soignies;auie7b7ji
Ganshoren;avbe807ji
Lanaken;avdebp7ji
Mortsel;aw5e8d7ji
Jumet;au4e8c7ji
Zottegem;avbe6l7ji
Ronse;auze607ji
Nivelles;auke817ji
Andenne;au9ea67ji
Marcinelle;atze8c7jh
Oupeye;auvebp7jh
Wondelgem;avxe6b7jh
Overijse;av1e8l7jh
Zwevegem;av5e5a7jh
Ekeren;awge8a7jh
Heverlee;avae927jh
Beersel;av1e7y7jh
Wetteren;avpe6s7jh
Hamme;avye7i7jh
Willebroek;avue847jh
Saint-Nicolas;aunebd7jh
Westerlo;avxe9o7jh
Diest;avnea17jh
Saint-Ghislain;au5e6m7jh
Manage;auae7s7jh
Maldegem;aw9e5l7jh
Fleurus;au8e8n7jh
Koekelberg;avae817jh
Zedelgem;aw2e4q7jh
Koksijde;aw0e3c7jh
Edegem;aw4e8d7jh
Gembloux;auge927jh
Rixensart;auve8l7jh
Oostkamp;aw3e4z7jh
Zemst;avme8e7jh
Grivegnée;aumebl7jh
Chaudfontaine;auiebn7jh
Nijlen;aw4e8z7jh
Tervuren;av6e8j7jh
Frameries;au1e6u7jh
Schilde;awce8q7jh
Kontich;aw1e8d7jh
Zele;avve787jh
Braine-le-Comte;aule7j7jh
Boussu;au3e6j7jh
Gilly;au2e8g7jh
Bornem;avye7s7jh
Balen;aw5ead7jh
Huy;auceaj7jh
Colfontaine;au1e6q7jh
Zonhoven;avneax7jh
Assebroek;aw7e527jh
Lochristi;avye6n7jh
Jambes;au6e9j7jh
Poperinge;av9e3l7jh
Sint-Katelijne-Waver;avve8l7jh
Sint-Andries;aw8e4u7jh
Tielt;avoe597jh
Herent;avfe8z7jh
Eeklo;aw7e5w7jh
Torhout;avve4m7jh
Aalter;avxe5l7jh
Montignies-sur-Sambre;au1e8h7jh
Hoogstraten;awse987jh
Meise;avie817jh
Quaregnon;au4e6r7jh
Zwijndrecht;awae817jh
Morlanwelz-Mariemont;au6e7t7jh
Koersel;avuean7jh
Eupen;aunecs7jh
Blankenberge;awje4p7jh
Tubize;aute7o7jh
Sint-Genesius-Rode;auze847jh
Middelkerke;aw7e3u7jh
Kortenberg;avde8m7jh
Kasterlee;awce9t7jh
Diepenbeek;avfeb27jh
Lessines;auve6o7jh
Sint-Gillis-Waas;awae7g7jh
Walcourt;atle8c7jh
Kalmthout;awqe8g7jh
Ranst;aw7e8p7jh
Lebbeke;avoe7h7jh
Wervik;av2e4g7jh
Stabroek;awle857jh
Zolder;avqear7jh
Châtelineau;au1e8k7jh
Haaltert;avfe747jh
Mariakerke;avve687jh
Visé;auyebu7jh
Stekene;aw9e787jh
Denderleeuw;avde7c7jh
Dour;au0e6i7jh
Marche-en-Famenne;atjeau7jh
Destelbergen;avue6k7jh
Lede;avle737jh
Merelbeke;avne6f7jh
Péruwelz;aube5z7jh
Tessenderlo;avvea57jh
Herve;auoec37jh
Herzele;avde6t7jh
Beerse;awke9h7jh
Neerpelt;awbeb47jh
Duffel;avye8j7jh
Sint-Kruis;aw9e517jh
Fléron;aumebs7jh
Puurs;avve7x7jh
Pont-à-Celles;aube857jh
Gentbrugge;avse6h7jh
Boom;avxe857jh
Riemst;av5ebk7jh
Peer;aw1eb67jh
Diksmuide;avre3y7jh
Lille;awce9e7jh
Heusy;auhecb7jh
Mechelen-aan-de-Maas;avlebt7jh
Bevere;av9e5z7jh
Putte;avte8v7jh
Soumagne;aulebz7jh
Marchienne-au-Pont;au1e887jh
Rotselaar;avje947jh
=BF
Ouagadougou;7wddrr1aq;瓦加杜古|와가두구|Waaduu|Uagadugu|Uaqaduqu|Vagadugu|Wagadugu|Huagadugu|Owagadugu|Uagaduguo|Ouagadouga|Ougadougou|Uagadougou|Ouankantounkou|ワガドゥグー|Уагадугу|اوگاڈوگو|واغادوغو|वागाडुगू|วากาดูกู
Bobo-Dioulasso;7t2dk31ao
Koudougou;7w1dpf1al
Saaba;7wdds31al
Ouahigouya;7zqdpa1ak
Kaya;7yddt01ak
Banfora;7rkdit1ak
Pouytenga;7w1dut1ak
Houndé;7tydm81ak
Fada N'gourma;7vidx01aj
Nioko I;7wgds01aj
Dédougou;7wmdme1aj
Tenkodogo;7uqduz1aj
Djibo;816drh1aj
Kongoussi;7z1drr1aj
Léo;7sudq51aj
Koupéla;7vudv11aj
Titao;809dq91aj
Saonré;7w4drm1aj
Dori;80zdvx1aj
Aribinda;81jdtl1aj
Gaoua;7qpdn61aj
Garango;7usduh1ai
Gourcy;7ypdpg1ai
Yako;7y0dpq1ai
Zorgo;7w1dua1ai
Réo;7w8dp51ai
Orodara;7sidic1ai
Ziniaré;7wydse1ai
Niangoloko;7qkdic1ai
Nouna;7xddla1ai
Bama;7vgdjs1ai
Bittou;7tadv51ai
Kombissiri;7vjdsa1ai
Manga;7uedt11ai
Pô;7t1dsu1ai
Bourzanga;800drp1ai
Barogo;7wvdtb1ai
Gao;7uddpy1ai
Tougan;7ybdnh1ai
Sapouy;7u3dr31ai
Yalgo;7xxdtn1ai
Kokologo;7vvdqs1ai
Dano;7szdni1ai
Mogtédo;7w4dto1ai
Diébougou;7sgdmz1ai
Boussé;7x6dqq1ai
Solenzo;7vtdko1ai
Boulsa;7x7duf1ai
Pissila;7ykdtq1ah
Béguédo;7uqdtz1ah
Zabré;7t2du91ah
Bogandé;7y2dvl1ah
Fara Department;7u1dob1ah
Boromo;7undnv1ah
Cinkansé;7swdw11ah
Zinguédéssé;7w1drm1ah
Korsimoro;7xndt11ah
Batié;7pgdnw1ah
Kouka;7zbdrj1ah
Natiaboani;7uidxf1ah
Tita;7v4dp01ah
Kindi;7wkdqd1ah
Namponkoré;7ume0y1ah
Tô;7tsdpt1ah
Toma;7xgdny1ah
Diapaga;7vje0z1ah
Karankasso;7t6dj41ah
Gomboussougou;7trdtv1ah
Gayéri;7x5dxd1ah
Pa;7x7dl11ah
Mani;7yudvf1ah
Sabou;7vjdpt1ah
Kompienga;7ssdy01ah
=BG
Sofia;a8mfos8ko;索菲亞|소피아|Sofi|Sofie|Sofii|Sofij|Sofio|Sofja|Sofya|Safija|Sofiae|Sofija|Sofijo|Sofiya|Soifia|Sophia|Szofia|Serdica|Sredets|Suofeje|Sofija osh|Ulpia Serdica|Софи|Сафія|ソフィア|سۆفیا|صوفيا|सोफिया|โซเฟีย|Софий|София
Plovdiv;a73fsr8km;Пловдив|Фїлїппополь
Varna;aa2g1j8km;Варна|Варнæ|Варна хот
Burgas;a83g0b8kl;Бургас|Бургас хот|Пѷргъ
Stara Zagora;a7vfv88kk;Стара Загора|Стара-Загора|Стара-Загорæ
Ruse;abtfw38kk;Русе|Роусє
Pleven;aamfse8kk;Плевен
Sliven;a8lfx58kk;Сливен|Слівен
Pernik;a8cfnz8kk;Перник|Пернік
Shumen;aa7fys8kj;Шумен
Dobrich;ab0g1b8kj;Добрич|Добрыч
Blagoevgrad;a6pfo68kj;Благоевград|Благоеўград|Благоєвград
Haskovo;a6hfv08kj;Хасково|Хаскава
Yambol;a80fxm8kj;Ямбол
Veliko Tŭrnovo;a9ofv78kj;Велико Търново|Veliko Tүrnovo|Велико Тырново
Pazardzhik;a78frl8kj;Пазарджик|Пазарџик
Asenovgrad;a6qft38kj;Асеновград
Vratsa;aa1fpg8kj;Враца|Врацæ
Gabrovo;a93fuc8kj;Габрово|Габрава
Kazanlak;a8efuk8kj;Казанлък|Казанлык
Montana;aalfoi8kj;Монтана|Монтанæ|Монтана · Блъгарїи
Kyustendil;a7gfn18kj;Кюстендил
Kardzhali;a5pfuh8kj;Кърджали|Кырджали|Кирджалі
Dimitrovgrad;a6tfv48ki;Димитровград
Vidin;ac7fnk8ki;Видин|Видинъ
Targovishte;aa5fxt8ki;Трговиште|Тирговиште|Тырговиште
Dupnitsa;a7efo88ki;Дупница|Дупниця
Gorna Oryahovitsa;a9tfve8ki;Горна Оряховица
Petrich;a50foh8ki;Петрич|Пєтричь
Smolyan;a5hfsn8ki;Смолян
Karlovo;a8ffsw8ki;Карлово
Svishtov;ab6fuf8ki;Свищов
Silistra;ackfzq8ki;Силистра|Силистрæ|Сілістра
Razgrad;aaxfxo8ki;Разград
Sandanski;a5hfoo8ki;Сандански|Свети Врач
Lovech;a9tfso8ki;Ловеч|Лавеч
Asparuhovo;a9yg1h8ki;Аспарухово
Samokov;a7mfpg8ki;Самоков
Sevlievo;a9iftq8ki;Севлиево
Nova Zagora;a80fwa8kh;Нова Загора|Нова-Загора
Troyan;a95fso8kh;Троян|Община Троян
Aytos;a8mfzp8kh;Айтос
Botevgrad;a97fq38kh;Ботевград
Gotse Delchev;a5hfpx8kh;Гоце Делчев|Гоце-Делчев|Неврокоп
Velingrad;a6rfqn8kh;Велинград
Karnobat;a8hfyy8kh;Карнобат|Карнобатски проход
Panagyurishte;a82fr78kh;Панагюрише|Панагюрище
Harmanli;a6hfvy8kh;Харманли
Peshtera;a6rfri8kh;Пештера|Пещера
Lom;abrfok8kh;Лом
Parvomay;a6yfu28kh;Първомай|Первомай
Svilengrad;a61fws8kh
Popovo;aaffwv8kh;Попово
Rakovski;a7hftd8kh;Раковски|Генерал Николаево|Калъчлии
Chirpan;a78fud8kh;Чирпан
Berkovitsa;aa4fo98kh;Берковица|Беркович|Община Берковица
=BH
Al Muharraq;8yyhsl4wl;محرق|اَلْمُحَرَّق
Manama;8yvhsj4wl;منامه|مەنامە|المنامة
Madīnat Ḩamad;8ykhsb4wl;مدينة حمد|مَدِينَة حَمَد
Ar Rifā‘;8ylhsg4wk;رفاع|الرفاع|اَلرِّفَاع
Sitrah;8ynhsm4wj;سترة|ستره|سِتْرَة
Jidd Ḩafş;8yuhsf4wj;جِدّ حَفْص
Dār Kulayb;8yfhsa4wj;دَار كُلَيْب
Madīnat ‘Īsá;8yphsf4wi;مدينة عيسى|مَدِينَة عِيسَى
=BI
Bujumbura;6omg5k0bo
Gitega;6ohg740bj
Ngozi;6pxg6v0bj
Mpanda;6p7g5o0bj
Rumonge;6mzg5s0bj
Cibitoke;6pzg4w0bi
Kayanza;6pwg6b0bi
Cendajuru;6ovg900bi
Bubanza;6pgg5n0bi
Vyanda;6mmg690bi
Zanandore;6ozg7n0bi
Gatumba;6org590bh
Karusi;6peg7s0bh
Kirundo;6qug7m0bh
=BJ
Cotonou;7fpe2q1bn
Abomey-Calavi;7fxe2k1bm
Porto-Novo;7g2e381bm
Parakou;7nye3b1bm
Godomè;7fre2j1bm
Abomey;7hye1j1bk
Djougou;7oze0n1bk
Bohicon;7hye1r1bk
Ekpé;7fre321bk
Nikki;7pme4x1bj
Malanville;7uze5e1bj
Kandi;7sxe461bj
Kérou;7s3e1u1bj
Natitingou;7qmdzu1bj
Pobé;7hee3e1bj
Ouidah;7foe1t1bj
Lokossa;7gge0s1bj
Bassila;7n1e0n1bj
Tchaourou;7mpe381bj
Cové;7i2e2i1bj
Sakété;7gqe3e1bj
Comé;7fte181bj
Missérété;7g8e371bi
Dogbo;7gwe0y1bi
Kétou;7ige381bi
Savalou;7k1e1i1bi
Banikoara;7tee2s1bi
Péhonko;7qfe1k1bi
Kalalé;7qle5e1bi
Sinendé;7qre2m1bi
Banigbé;7ghe3j1bi
Savé;7kbe2x1bi
Bembèrèkè;7qfe3e1bi
Dassa-Zoumè;7jje221bi
Kopargo;7pce0a1bi
Kouandé;7fse1r1bi
Tanguiéta;7ridzj1bi
Kpozoun;7i3e251bi
Sé;7g3e131bi
Ségbana;7sde691bi
Aplahoué;7h9e0o1bi
Cobly;7r5dys1bi
Matéri;7rqdyy1bi
Adjarra;7g5e3f1bi
Djidja;7iee1d1bi
Klouékanmè;7hee141bi
Semi;7fpe3a1bh
Allada;7gje1z1bh
Ndali;7pee3k1bh
Boukoumbé;7qadz31bh
Adjaouèrè;7hge391bh
Toviklin;7h5e141bh
Avrankou;7g8e3d1bh
Glazoué;7k5e261bh
Ganvié;7fye2n1bh
Djakotomé;7h6e0s1bh
Zinvié;7gee2k1bh
Banté;7lde191bh
Ouaké;7oudzu1bh
Ouinhi;7hoe2w1bh
Tobré;7qbe1x1bh
Zé;7gue2e1bh
Toukountouna;7r6dzt1bh
Pèrèrè;7p8e4a1bh
Ouessé;7lle2r1bh
Athiémé;7gae0n1bh
=BL
Gustavia;8bq91f48f
=BM
Hamilton;9fp8w26vc
=BN
Bandar Seri Begawan;7blmra52j
Sengkurong;7bkmqz52i
Mentiri;7btmri52i
Kuala Belait;7aqmpb52i
Seria;7atmpk52i
Tutong;7bcmqh52h
Serasa;7bymrm52h
Liang;7b0mq252h
=BO
La Paz;5o68mp36p;ラパス|拉巴斯|라파스|A Paz|La Pas|Lapasa|La-Pazo|La Pasas|Chukiyawu|Chuqiyapu|Chuqi Yapu|La-Pas shaary|لاباز|لاپاز|ลาปาซ|Ла Паз|Ла Пас|ला पाझ|ला पास
Santa Cruz de la Sierra;5kl90i36p;サンタクルス|Santa Cruz|Santa-Kruzo|Santa-Krus-de-la-S'erra|Santa-Krus-de-la-Sierra|Santa-Krus-deh-la-S'era|Санта-Крус-дэ-ла-Сьера|Санта-Крус-де-ла-Сиерра
Cochabamba;5lq8s836o
Sucre;5h58uq36l
Oruro;5k38pn36l
Sacaba;5lo8sk36l
Quillacollo;5lp8rw36l
Tarija;5a68w736l
Potosí;5fm8td36l
Riberalta;63f8sj36k
Montero;5lu90b36k
Viacha;5nr8ma36k
Trinidad;5st8vq36k
Yacuiba;58u8z436k
Tiquipaya;5lu8s236j
Vinto;5lp8rs36j
Colcapirhua;5lp8s036j
Sipe Sipe;5lj8ro36j
Caranavi;5q18ob36j
Villamontes;5ay8zp36i
Guayaramerín;63x8ug36i
Bermejo;56v8xa36i
Mizque;5k68ui36i
Villazón;58n8tt36i
Llallagua;5iu8r236i
Camiri;5ec8zk36i
Cobija;63d8kz36i
San Borja;5sr8ql36i
San Ignacio de Velasco;5oi96o36h
Tupiza;5ag8tg36h
Warnes;5lc90j36h
Achocalla;5nz8mp36h
Ascención de Guarayos;5pv90h36h
Cotoca;5ki90v36h
Villa Yapacaní;5lo8yp36h
Laja;5o38m236h
El Torno;5k08zx36h
Huanuni;5j78qc36h
Punata;5la8t536h
=BQ
Kralendijk;7vr8md35g
=BR
São Paulo;54laag47s;圣保罗|聖保羅|상파올로|상파올루|Sampa|Sanpaulu|San Paolo|San Paulo|San Paulu|San Pawlo|San Poulo|Sao Paolo|Sawo Palo|San Paulas|San Pauluw|Saun Paulu|Urbs Paulistana|サンパウロ|ساؤ پالو|ساؤ پولو|เซาเปาลู|Сан Пауло|Сан Паулу|साओ पाउलो
Rio de Janeiro;56dak247r;里約熱內盧|里约热内卢|리우데자네이루|リオデジャネイロ|Riodezaneiro|Rio-de-Janejro|Rio-de-Janeyro|Rio-de-Zaneiro|Rio-de-Zanejro|Rio-de-Zaneyro|Rio-de-Zhanejro|Urbs Fluminensis|Rya-deh-Zhanehjra|ریو دوژانیرو|รีโอเดจาเนโร|รัฐรีโอเดจาเนโร|Рио-де-Жанейро|Рыа-дэ-Жанэйра
Belo Horizonte;5eoahy47q;Bhte|Belo Hte|Bel-Horizonto|Belo Orizonte|Belo Orizonti|Belu Orizonti|Belu-Aryzonty|Bello Horizonte|Belo Khorizonte|貝洛奥里藏特|贝洛奥里藏特|벨루오리존치|ベロオリゾンチ|ベロオリゾンテ|بيلو أفق|بلو هوریزونته|Бело Оризонте|Бело Оризонти|เบโลโอรีซอนชี|बेलो होरिजोंटे|बेलो होरिझोन्ते
Salvador;5xyax31yq;Baia|Bahia|Sal'vador|Salvadora|Salvadoro|Salvadoras|Soteropolis|Sao Salvador|萨尔瓦多|사우바도르|サルバドール|サルヴァドール|سلوادور|سالفادور|Салвадор|Сальвадор|साल्वेडोर|ซัลวาดอร์
Fortaleza;6noawy2pq;福塔雷萨|福塔雷薩|Ceara|Fartaleza|Fortalezo|Fortalezae|Fortalaetia|포르탈레자|フォルタレザ|فورتالزا|فورتاليزا|Фарталеза|Форталезæ|फोर्टालेजा|फोर्तालेझा|ฟอร์ตาเลซา
Manaus;6pe99a3cp;马瑙斯|マナウス|Manos|Manaos|Manauso|مناؤس|ماناوس|मनाउस|Манаус
Brasília;5q6a6v47p;巴西利亚|巴西利亞|ブラジリア|브라질리아|Braxilia|Braxiłia|Brazilia|Brazilja|Braziljo|Breselya|Brazileje|Brazilija|Mprazilia|Bahsihleihya|Brasiliopolis|Braziliavaros|Brazilija shaary|Бразилиа|Бразилия|برازيليا|برازیلیا|ब्रसिलिया|ब्राझिलिया|บราซีเลีย
Curitiba;4zda3547p;クリチバ|古里提巴|庫里奇巴|쿠리치바|Kuritib|Corityba|Curityba|Curytiba|Kuritiba|Kuritibo|Kuritiwa|Kuryciba|Kurytyba|Kouritiba|Kuritibae|Kuritiyba|Kuriytyva|Kouritimpa|Куритибæ|Куритиба|كوريتيبا|کوریتیبا|कुरितिबा|กูรีตีบา
Recife;6bnb7441p;李斯腓|累西腓|헤시피|レシフェ|ریسیف|ريسيفي|Recifo|Resife|Resifi|Rehsifi|Arrecife|Mauricea|Pernambuco|Fernambucum|Ресифе|Ресифи|रेसिफे|रिसीफ़ी|เรซีฟี
Goiânia;5noa3747p;戈亚尼亚|Gojas|Goiana|Gojani|Goyania|Gojanija|Goyaniya|Гойас|Гояни|ゴイアニア|고이아니아|جويانيا|غويانيا|गोयानिया|โกยาเนีย
Belém;6tya5a21p;贝伦|벨렝|بلم|بيليم|ベレン|Para|Vele|Belen|Belemo|Belena|Belenas|Bethlehem|Белем|Белен|बेलेम|เบเลง
Porto Alegre;4ml9xp47p;阿雷格里港|포르투알레그리|ポルト・アレグレ|Portualegri|Porto Alegri|Porto-Alegro|Portu-Alegre|Portu-Alegri|Portu-Alegry|Porto Alenkre|Portus Alacer|Puerto Alegre|پورتو الگره|بورتو أليغري|Порто Алегре|Порто Алегри|पोर्टो अलेग्रे|पोर्तू अलेग्री
Guarulhos;54uaar47o;Гуарульюс|Guarul'jus
Maceió;675b4q3ao;马塞约|مسیو|ماسيو|マセイオ|마세이오|Macayo|Macejo|Macelo|Masejo|Maseyo|Masejas|Масейо|Масејо|मासेइओ|มาเซโอ
Campinas;56da9a47o;坎皮纳斯|캄피나스|カンピーナス|Kampino|Kampinas|Kampinasas|کمپیناس|كامبيناس|Кампинас|Кампінас
São Luís;6qzagy2po
Campo Grande;5d89o726o
Natal;6hwb672po
Teresina;6jval42po
Nova Iguaçu;56sajb47o
Duque de Caxias;56pajp47o
João Pessoa;6e8b762po
Sorocaba;54qa8647o
São Bernardo do Campo;547aao47n
Osasco;54naa147n
São José dos Campos;55macj47n
Ribeirão Preto;5b6a7747n
Aracaju;63pb113an
Santo André;54aaaq47n
Jaboatão dos Guararapes;6bhb6r41n
Contagem;5enahn47n
Feira de Santana;5zxavr1yn
Cuiabá;5qo9k62gn
Londrina;5599xw47n
Uberlândia;5hga5w47n
Porto Velho;69o8yi3yn
Juiz de Fora;59kajl47n
Serra;5e3as147n
Macapá;6y49y521n
Aparecida de Goiânia;5naa3847n
Florianópolis;4tca5547n
Campos dos Goytacazes;59lap747n
São José do Rio Preto;5c6a2u47n
São João de Meriti;56oajj47n
Belford Roxo;56sajg47n
Joinville;4wya4b47n
Niterói;56gaka47n
Jundiaí;55la9s47n
Ananindeua;6u7a5n21n
Boa Vista;75u97h23m
Rio Branco;66b8nn43m
Santos;53gabb47m
Mauá;549aay47m
Montes Claros;5niai647m
Maringá;54x9vq47m
Piracicaba;56va7n47m
Caruaru;6b0b4241m
Vila Velha;5djas347m
Diadema;547aai47m
Carapicuíba;54oa9w47m
Petrolina;67wari41m
Grajaú;53zaad47m
Betim;5ejah847m
Caxias do Sul;4oz9xu47m
Bauru;581a3q47m
Itaquaquecetuba;54rab947m
Olinda;6brb7641m
Blumenau;4v8a3p47m
Franca;5cya8c47m
Caucaia;6nmawn2pm
Cariacica;5dqarq47m
Praia Grande;53bab447m
Campina Grande;6dxb4c2pm
Paulista;6byb7541m
Uberaba;5f5a6v47m
São Vicente;53gab547m
Ribeirão das Neves;5f3ahj47m
São José dos Pinhais;4z3a3b47m
Canoas;4mw9xu47m
Mogi das Cruzes;54oabp47m
Guarujá;53dabi47m
Taubaté;561adg47m
Pelotas;4hr9um47m
Anápolis;5ona4147m
Barueri;54pa9s47m
Várzea Grande;5qj9k32gm
Vitória;5dkary47m
Jardim Angela;544aa347m
Suzano;54mabd47m
Palmas;65ra5r1jm
Foz do Iguaçu;4z19od47m
Ponta Grossa;50aa0o47m
Limeira;57ca8c47m
Ceilândia;5q3a6b47m
Viamão;4mg9ya47m
Volta Redonda;57gahi47m
Sumaré;56ma8p47m
Taboão da Serra;54daa147m
Petrópolis;57iak247m
Santa Maria;4nk9qj47m
Parnamirim;6hkb622pm
Capao Redondo;549aa247m
São José;4taa4x47m
Parauapebas;6h5a1e21m
Sapopemba;54gaas47m
Gravataí;4mu9yd47m
Mossoró;6jlb0a2pm
Sacomã;54daak47m
Jardim Sao Luis;548aa647m
Rondonópolis;5o99o82gm
Cascavel;50o9ri47m
Indaiatuba;55va8v47m
Novo Hamburgo;4nk9xz47m
Cotia;54ga9o47m
Vitória da Conquista;5spaqk1ym
Governador Valadares;5hnanh47m
Embu das Artes;54ba9v47m
Cidade Ademar;549aae47m
Americana;56ua8j47m
São José de Ribamar;6qwahm2pm
Magé;573akg47m
Arapiraca;66xb263am
Brasilandia;54vaab47m
Itapevi;54la9n47m
Marília;58ba1947m
Itaboraí;56uaky47m
Cabo Frio;56fan947m
Juazeiro;67vari1ym
Campo Limpo;54caa347l
Maracanaú;6n8awp2pl
Hortolândia;56ia8u47l
Colombo;4zra3a47l
Divinópolis;5e2afb47l
Ipatinga;5fxalu47l
Sete Lagoas;5fxah347l
Rio Verde;5kk9yj47l
Águas Lindas de Goiás;5q8a5w47l
Presidente Prudente;58j9x947l
Juazeiro do Norte;6dzaus2pl
Santa Luzia;5f3ai747l
Samambaia;5pwa6e47l
Imperatriz;6ina832pl
Cabo de Santo Agostinho;6azb6p41l
Sinop;6129lu2gl
Jabaquara;54baaf47l
Jacareí;559acb47l
Maricá;56cal247l
Jaraguá;54waa647l
Itaquera;54nab047l
São Leopoldo;4nc9xx47l
Luziânia;5ova6t47l
Itabuna;5sxauw1yl
Itaim Paulista;54qab547l
São Carlos;58ua6z47l
Lauro de Freitas;5y7axj1yl
Sobral;6nrarx2pl
Rio Claro;57ra7w47l
São José;4rna3g47l
Valparaíso de Goiás;5pda6q47l
Plano Piloto;5q5a7047l
Taguatinga;5q1a6i47l
Nossa Senhora do Socorro;63ub0v3al
Castanhal;6ufa6v21l
Cidade Tiradentes;54iab447l
Nova Friburgo;584alv47l
Planaltina;5qma7n47l
Santarém;6r89o144l
Camaçari;5yqaxk1yl
Santa Bárbara d'Oeste;56ta8b47l
Rio Grande;4h09va47l
Alvorada;4mo9y447l
Cachoeiro de Itapemirim;5c3apt47l
Jaraguá do Sul;4wfa3p47l
Cidade Dutra;543aaa47l
Guarapuava;4zh9x147l
Pirituba;54raa747l
Passo Fundo;4ri9uf47l
Ferraz de Vasconcelos;54mab747l
Angra dos Reis;563agw47l
Bragança Paulista;569aaq47l
Teresópolis;57qakm47l
Palhoça;4t7a4t47l
Timon;6jval02pl
Ibirité;5eeahm47l
Araçatuba;5b39zx47l
Vila Andrade;54daa747l
Poços de Caldas;59haao47l
Araraquara;59ha6647l
Porto Seguro;5obavi1yl
Rio das Ostras;57fani47l
Linhares;5g5asp47l
São Caetano do Sul;54eaap47l
Pindamonhangaba;56cadq47l
Francisco Morato;55caa547l
Lages;4sqa0747l
Lajeado;54nab347l
Barra Mansa;57eahb47l
Pedreira;545aaf47l
Dourados;58a9nr26l
Criciúma;4qca2v47l
Chapecó;4uq9tu47l
Barreiras;609af11yl
Patos de Minas;5ieaas47l
Itapecerica da Serra;544a9v47l
Abaetetuba;6t8a4821l
Itapetininga;54ha6j47l
Caxias;6kiajk2pl
Camaragibe;6bqb6u41l
Itajaí;4v9a4u47l
São Mateus;54faaw47l
Ilhéus;5swavl1yl
Santana de Parnaíba;54wa9o47l
Parelheiros;53taa747l
Mogi Guaçu;57va9l47l
Pouso Alegre;589ace47l
Araucária;4yxa2r47l
Garanhuns;69cb2m41l
Santa Rita;6e9b6u2pl
Iguatemi;54fab147l
Queimados;56waj047l
Fazenda Rio Grande;4yqa3147l
Sao Rafael;54daaz47l
Botucatu;56fa5g47l
Nilópolis;56najf47l
Marabá;6j2a3j21l
Paço do Lumiar;6qzahh2pl
Teixeira de Freitas;5laatm1yl
Franco da Rocha;558aa747l
Atibaia;55saap47l
Cachoeirinha;54vaae47l
Macaé;57uany47l
Trindade;5nra2j47l
Brusque;4uqa4547l
Cangaiba;54qaas47l
Paranaguá;4z4a5747l
Vila Curuca;54pab247l
Gama;5pha6h47l
Balneário Camboriú;4v1a4x47l
Sao Lucas;54haaq47l
Parnaíba;6pyany2pl
Araruama;56hame47l
Itu;55ea8m47l
Freguesia do Ó;54qaaa47l
Cidade Lider;54kaav47l
Varginha;5a5adt47l
Campo Largo;4zaa2f47l
Cachoeirinha;4mt9y347l
Araras;57wa8e47l
Vila Jacui;54qaay47l
Cametá;6rsa2i21l
Vitória de Santo Antão;6bgb5z41l
Jaú;582a5447l
Santa Cruz do Sul;4ng9ud47k
Sapucaia do Sul;4n69xx47k
Rio Pequeno;54jaa447k
Itapipoca;6obau22pk
Crato;6dxauj2pk
Apucarana;54l9x247k
Jardim Helena;54sab347k
Sabará;5eraib47k
Vespasiano;5fbai047k
Tatuí;554a7247k
Copacabana;567ak147k
Águas Claras;5q0a6l47k
Bosque Saúde;54faai47k
Jose Bonifacio;54jab147k
Votorantim;54la8847k
Jequié;5viasn1yk
Vila Mariana;54haah47k
Sertãozinho;5baa6p47k
Barcarena;6tta4x21k
Valinhos;567a9g47k
Altamira;6p49uz44k
Barbacena;5b1aif47k
Guarapari;5clari47k
Ji Paraná;63r93x3yk
Itaguaí;56jaie47k
São Mateus;5i0ata47k
Butanta;54jaa747k
Uruguaiana;4nd9hf47k
Caraguatatuba;54eadv47k
Itaituba;6m49ki44k
Bento Gonçalves;4oz9ww47k
Bragança;6v3aa321k
Alagoinhas;60aaxa1yk
Itatiba;563a9w47k
Barretos;5cwa5347k
Igarassu;6c9b7141k
Sorriso;5z59l92gk
Guará;5q3a6r47k
Almirante Tamandaré;4zoa3147k
Salto;55ka8n47k
Toledo;51d9qq47k
Arapongas;54y9x647k
Piraquara;4zca3p47k
Sarandi;54w9vx47k
Senador Canedo;5nla3n47k
Jandira;54na9q47k
Guaratinguetá;56maeh47k
Araguari;5i7a6547k
Raposo Tavares;54haa147k
Bairro da Penha;553abd47k
Umuarama;53z9rw47k
Pinhais;4zca3d47k
Santa Maria;5pha6l47k
Ipiranga;54gaai47k
Campo Grande;549aab47k
Formosa;5qua8j47k
São Gonçalo do Amarante;6hxb5v2pk
Catanduva;5baa3z47k
Várzea Paulista;55ja9x47k
Santana;54raag47k
Ribeirão Pires;545ab347k
Recanto das Emas;5pta6i47k
Vila Medeiros;54raam47k
Simões Filho;5yiaxc1yk
Catalão;5jja6t47k
Codó;6lmai32pk
Eunápolis;5oiau21yk
Itabira;5fiajx47k
Paulo Afonso;67vaxv1yk
Tangará da Serra;5te9gb2gk
Itacoatiara;6pa9do3ck
Cubatão;53mab147k
Ermelino Matarazzo;54raax47k
Passos;5cgaaj47k
Marituba;6u8a5q21k
Nova Lima;5ehai747k
Araxá;5fla9m47k
Conselheiro Lafaiete;5cmaid47k
Resende;57lagj47k
São Lourenço da Mata;6bsb6q41k
Manacapuru;6ou97m3ck
São Pedro da Aldeia;56kan247k
Paulínia;56sa9147k
Tubarão;4qxa3v47k
Guaianases;54mab347k
Vila Maria;54paal47k
Luis Eduardo Magalhães;60fact1yk
Santana;6xw9xv21k
Itaperuna;5b4ann47k
Cambé;55c9xk47k
Breves;6tc9zs21k
Açailândia;6k9a822pk
Jataí;5kc9wc47k
Ipojuca;6aob6m41k
Vila Prudente;54haan47k
Nova Serrana;5esaf247k
Paragominas;6poa8h21k
Riacho Fundo II;5pua6j47k
Maranguape;6n7awj2pk
Assis;5729zz47k
Planaltina;5r3a7r47k
Araguaína;6e1a631jk
Artur Alvim;54maav47k
Lavras;5azaf047k
Coronel Fabriciano;5fsall47k
Muriaé;5bbamb47k
Ourinhos;566a1h47k
Abreu e Lima;6c1b7241k
Novo Gama;5pea6k47k
Poá;54naba47k
Bacabal;6m9afm2pk
Mandaqui;54uaag47k
Vila Matilde;54maas47k
Itabaiana;64cb013ak
Ubá;5bcakq47k
Cursino;54daai47k
Itanhaém;52uaa147k
Santo Antônio de Jesus;5xzauy1yk
Caieiras;554aa647k
Perdizes;54maac47k
Birigui;5ava0647k
Ituiutaba;5hba2m47k
Japeri;574air47k
Parintins;6qp9ie3ck
Mairiporã;558aal47k
Pôr do Sol;5pya6c47k
Balsas;6d3ac42pk
Lagarto;63oazf3ak
Itaim Bibi;54haac47k
Colatina;5fqar547k
Teófilo Otoni;5keaop47k
Tucuruvi;54saaj47k
Campo Mourão;5389ui47k
Bagé;4iz9pp47k
Caldas Novas;5kqa4x47k
São Sebastião;5pua7a47k
Tatuapé;54maan47k
Barra do Piraí;57lai947k
Santa Cruz do Capibaribe;6bwb3g41k
Leme;58da8d47k
Iguatu;6gcauu2pk
Itaúna;5e8ag647k
Rio Largo;67ob4f3ak
Pará de Minas;5euag347k
Vicente Pires;5q3a6l47k
Ariquemes;66h90w3yk
Francisco Beltrão;4xk9sm47k
Corumbá;5h79fv26k
Caçapava;55uad147k
Avaré;55ua4347k
Erechim;4t99us47k
Vilhena;5ym98x3yk
São Cristóvão;63fb0n3ak
Saquarema;56eam147k
Aracruz;5eyas547k
Jaçanã;54uaan47k
Paracatu;5m6a9t47k
Lajeado;4o59vo47k
Itajubá;57padr47k
Guaíba;4md9xg47k
Cajamar;554a9s47k
Patos;6eib0g2pk
São João da Boa Vista;58zaa047k
Lucas do Rio Verde;5xp9kp2gk
Vila Formosa;54jaap47k
Ponta Porã;57e9l726k
Paranavaí;55x9u947k
Cruzeiro do Sul;6ct8a443k
Gravatá;6b8b5841k
Manhuaçu;5dqan947k
Pato Branco;4x59tp47k
Ubatuba;54xaet47k
Cidade Ocidental;5p9a6v47k
Cáceres;5pd9fs2gk
Tucuruí;6nja2021k
Arujá;550abc47k
Araripina;6cyari41k
Ponte Rasa;54oaav47k
Patrocínio;5hea9h47k
Itapeva;53ea4847k
Aricanduva;54jaas47k
Gurupi;61fa3p1jk
Sao Domingos;54raa547k
Perus;550aa547k
Guanambi;5uial61yk
Caratinga;5f1amy47k
Serra Talhada;6btaxm41k
Cacoal;62895b3yk
Barra do Corda;6ipaec2pk
Unaí;5oka9p47k
Navegantes;4vaa4v47k
Agua Rasa;54jaan47k
Valença;5wvavh1yk
Esmeraldas;5f4agx47k
Redenção;6bpa1121k
Santo Amaro;54baaa47k
Goiana;6d0b6s41k
Camboriú;4uxa4v47k
Santa Inês;6ntady2pk
Lorena;56vaeo47k
Ijuí;4r59q947k
Seropédica;56uail47k
Pinheiro;6r0aes2pk
Sant'Ana do Livramento;4k79lr47k
Carrao;54laaq47k
Quixadá;6k7avm2pk
Moju;6ssa4j21k
Cianorte;54a9tw47k
Jardim Paulista;54jaae47k
Belo Jardim;6aub2u41k
São Bento do Sul;4x3a2u47k
Carpina;6c7b6341k
Picos;6ecaot2pk
Sobradinho II;5qla7547k
Bayeux;6e8b6z2pk
Jacobina;62yarh1yk
Limão;54raad47k
Três Rios;58kajz47k
Macaíba;6hqb5t2pk
Quixeramobim;6jkauv2pk
Arcoverde;6amb1341k
Moema;54gaae47k
Concórdia;4ud9vh47k
São Sebastião;540adv47k
Timóteo;5fmalj47k
Pacatuba;6myawq2pk
Tianguá;6nnaq52pk
Chapadinha;6nmajk2pk
São Miguel;54rab147k
Santa Cecilia;54naaf47k
Mooca;54kaak47k
Curvelo;5hwagl47k
Casa Verde;54qaae47k
Água Rasa;5d9aej47k
Serrinha;61mavn1yk
João Monlevade;5ezak347k
Vinhedo;561a9i47k
Cachoeira do Sul;4mk9t347k
Itumbiara;5iua3a47k
São Roque;54na9247k
Tefé;6on8w83ck
Ceará-Mirim;6idb5l2pk
Matão;5a0a5n47k
Alfenas;5ahacd47k
Três Lagoas;5c99we26k
São João del Rei;5baah247k
Lins;59sa1u47k
Mogi Mirim;57pa9k47k
Jardim Botânico;5pxa7747k
Campo Limpo Paulista;55jaa247k
Canaã dos Carajás;6fwa1j21k
Santa Rosa;4sl9oo47k
Santo Ângelo;4re9pa47k
Biguaçu;4tna4u47k
Viçosa;5cdakw47k
Crateús;6jmar12pk
Bebedouro;5bta5c47k
Esteio;4n29xu47k
Itapema;4ura4z47k
Sapiranga;4no9yb47k
Ibiúna;54aa8u47k
Lapa;54oaa947k
Três Corações;59qaeb47k
Anhanguera;54xaa147k
Lagoa Santa;5fhai247k
Telêmaco Borba;52g9ze47k
Barbalha;6dpauu2pk
Cruzeiro;57baf347j
Ouro Preto;5ddaj547j
Parque Do Carmo;54iaay47j
Senhor do Bonfim;64yasd1yj
Irecê;62manq1yj
Canindé;6lwaut2pj
Eusébio;6n7ax72pj
Grajaú;6huabu2pj
Coari;6mo90m3cj
Caçador;4vm9yb47j
Goianésia;5rga3k47j
Pirassununga;58wa8947j
Viana;5ddari47j
Castro;515a1347j
Santa Isabel do Pará;6uea6821j
Russas;6kaayi2pj
Cascavel;6mjaxs2pj
Barra do Garças;5pv9uu2gj
Amparo;56yaa447j
Rio do Sul;4ufa2447j
Gaspar;4v7a4047j
Tailândia;6pta4121j
Alegrete;4na9l147j
Candeias;5ytawx1yj
Tabatinga;6m98hq3cj
Sobradinho;5qja7947j
Santo Antônio do Descoberto;5pqa5y47j
Casa Nova;68jaq61yj
Itapira;57oa9y47j
Araranguá;4pma2i47j
Goianira;5o6a2p47j
Jaboticabal;5aza5s47j
São Sebastião do Paraíso;5bwa9h47j
Rolândia;5599xb47j
Indaial;4vaa3947j
Dias d'Ávila;5yzaxm1yj
Valença;587aim47j
Campo Formoso;64tas01yj
Fernandópolis;5doa0f47j
Campo Belo;54daad47j
Horizonte;6mmax32pj
Pacajus;6mfax62pj
Janaúba;5q4ajp47j
Brumado;5ukao91yj
Capanema;6uoa8y21j
Farroupilha;4ou9xd47j
Mineiros;5l79u147j
Votuporanga;5daa1747j
Bairro Parque Nossa Senhora do Carmo;54zabc47j
Alenquer;6sm9ny44j
Venâncio Aires;4nr9v147j
Porto Nacional;649a5i1jj
Peruíbe;52ga9g47j
Oriximiná;6t39kt44j
Formiga;5d6adt47j
Conceição do Coité;61wauw1yj
Mococa;5ada9g47j
Tomé-Açu;6raa6921j
Sousa;6f8axt2pj
Iranduba;6ow98t3cj
Embu-Guaçu;53ta9z47j
Cabedelo;6emb792pj
Lençóis Paulista;578a4g47j
Cataguases;5alale47j
Liberdade;54kaah47j
Itapetinga;5rnas71yj
Montenegro;4nj9x247j
Maués;6om9fo3cj
Barreirinhas;6qcal12pj
Bom Jesus da Lapa;5x6aje1yj
Piripiri;6m5any2pj
São Félix do Xingu;6fk9vk21j
Itapoã;5q9a7b47j
Acaraú;6pzask2pj
Ouricuri;6c4aso41j
Januária;5r0agr47j
Pinheiros;54jaab47j
Aquiraz;6n6axd2pj
Estância;62pb003aj
Itaberaba;5z7as11yj
Igarapé Miri;6sia4021j
Bezerros;6b5b4k41j
Bertioga;53rabu47j
Monte Mor;569a8k47j
Itaitinga;6mzawz2pj
Vacaria;4qt9yj47j
Surubim;6c9b4p41j
Tupã;5939zp47j
Paranoá;5q6a7a47j
Capão da Canoa;4nda1347j
Benevides;6u8a6021j
Mirassol;5c6a2g47j
Cajazeiras;6evaww2pj
Campo Bom;4nk9y747j
Pesqueira;6asb2241j
Icó;6g8aw22pj
Pedro Leopoldo;5fiaho47j
Portel;6sm9yu21j
Salgueiro;6blavc41j
Marechal Deodoro;671b4a3aj
Camocim;6pyaqk2pj
Humaitá;6d490x3cj
Escada;6asb6641j
Camaquã;4kb9w347j
Boituva;55ca7l47j
Floriano;6f7aki2pj
Nova Odessa;56qa8m47j
Carazinho;4rg9td47j
Penápolis;5aia0w47j
Extremoz;6i5b5x2pj
Andradina;5by9xa47j
Euclides da Cunha;64tavm1yj
Morada Nova;6jtaxf2pj
Mariana;5deaje47j
Coroatá;6mjahg2pj
Tauá;6hcas32pj
Nova Mutum;5vl9k82gj
Caicó;6g2b0y2pj
União dos Palmares;68kb3x3aj
Novo Repartimento;6lza1o21j
Republica;54maag47j
Itapecuru Mirim;6olags2pj
Cruz das Almas;5ytave1yj
Cristalina;5nfa7q47j
Penedo;65fb2d3aj
Ibitinga;59ka4d47j
Bela Vista;54kaaf47j
São Borja;4qe9kg47j
Monte Alegre;6sg9ps44j
Registro;51za7447j
Jacundá;6lna3k21j
Cachoeiras de Macacu;57malj47j
Cosmópolis;573a8w47j
Viçosa do Ceará;6o4apv2pj
Itamaraju;5moau71yj
Limoeiro do Norte;6jpay62pj
Irati;4z99zb47j
Rio Bonito;56xaln47j
Içara;4q9a3247j
Acará;6ska6421j
Cruz Alta;4qg9r347j
Jaguariúna;56xa9h47j
Viseu;6uoabu21j
Frutal;5eea4247j
São Gabriel;4lq9p447j
Dom Eliseu;6m4a8221j
Trairi;6owaux2pj
Batatais;5bza7u47j
Ponte Nova;5daakt47j
Manicoré;6hv95q3cj
Mongaguá;533aai47j
Santa Luzia;6n0ad62pj
Guarabira;6ezb5f2pj
Ipirá;608atm1yj
Paudalho;6c2b6a41j
Limoeiro;6c5b5j41j
Capitão Poço;6t5a9a21j
Açu;6iib1h2pj
Rolim de Moura;61894c3yj
São Gabriel da Cachoeira;6xo8pn3cj
Santo Amaro;5z5awh1yj
Marechal Cândido Rondon;51s9pu47j
Belem;54maal47j
Pirapora;5luaf647j
Brazlândia;5qga6447j
Buriticupu;6m0aaz2pj
Videira;4uz9xx47j
Jaguare;54maa547j
Moreno;6bgb6j41j
Mafra;4xha1n47j
Três Pontas;5anadl47j
Paraíso do Tocantins;65qa491jj
Olímpia;5cea4547j
União da Vitória;4x59y347j
Canoinhas;4xaa0147j
Pontes e Lacerda;5rp9b62gj
Palmares;69wb5541j
Buíque;6a2b0s41j
Tramandaí;4mqa0r47j
Medianeira;4zq9pr47j
Guapimirim;57eakm47j
São Gonçalo do Amarante;6nzavr2pj
Ribeira do Pombal;63xawy1yj
Extrema;56jabc47j
Porto Feliz;55ja8047j
São Miguel dos Campos;66ub3r3aj
Itabirito;5draic47j
Tutóia;6qcaml2pj
Granja;6pcaql2pj
Consolação;54laae47j
Taquara;4nn9yy47j
Santa Isabel;558abm47j
Artur Nogueira;57ba8z47j
Rondon do Pará;6kqa6h21j
Beberibe;6meay32pj
Piedade;545a8947j
São Miguel do Guamá;6tha8421j
Xinguara;6eaa1a21j
Congonhas;5d1ai647j
Delmiro Gouveia;67xayg3aj
São Francisco;5ppafe47j
São Francisco do Sul;4x4a4w47j
Porto Ferreira;59ba8447j
Vila Guilherme;54paaj47j
Imbituba;4rka4t47j
Campos do Jordão;56uadd47j
Óbidos;6so9ls44j
Campo Belo;5byae847j
Santo Estêvão;5zhauz1yj
Taquaritinga;5aja5a47j
São José do Rio Pardo;5a0a9r47j
Inhumas;5oka2i47j
Parobé;4np9yt47j
Caetité;5uxam01yj
Louveira;55va9l47j
Coruripe;65vb3i3aj
Bom Despacho;5f6aeb47j
Morumbi;54gaa947j
Baião;6q9a2121j
Xanxerê;4vc9ug47j
Ibiporã;55d9y747j
Tijucas;4uca4x47j
Viana;6p2af02pj
Lagoa da Prata;5eeadi47j
Morrinhos;5kra3m47j
Sapé;6eab652pj
Tremembé;568adh47j
Leopoldina;5a7alk47j
Brejo da Madre de Deus;6bdb2z41j
Barra;637ak61yj
Brejo Santo;6d7avp2pj
Guaxupé;5ataa947j
Tobias Barreto;62yayg3aj
Juruti;6s19k744j
Vigia;6vma6a21j
Jaru;65092h3yj
Naviraí;55y9ph26j
Vargem Grande Paulista;54ga9d47j
Boa Viagem;6jratn2pj
Capivari;564a8147j
Campo Novo do Parecis;5w09f72gj
Mairinque;54la8y47j
Itupiranga;6jra2z21j
Canguçu;4is9to47j
São Bento do Una;6acb2s41j
Prudentópolis;4zz9ye47j
Nova Venécia;5i1ars47j
Canela;4og9yv47j
Santiago;4ox9nl47j
Lábrea;6du8w03cj
Jales;5dp9zl47j
Tucano;63kaw91yj
Casimiro de Abreu;57kams47j
Nova Andradina;5899ru26j
Aquidauana;5d59l126j
São Joaquim da Barra;5cua7347j
Quirinópolis;5ir9zv47j
Araci;62javr1yj
Poções;5tnarv1yj
Palmas;4wg9vl47j
Catu;5zpaxe1yj
São Bento;6qiafi2pj
Bocaiúva;5mhaia47j
Barras;6m8amj2pj
Estância Velha;4nn9xv47j
Campo Verde;5qt9mr2gj
Campina Grande do Sul;4zpa3q47j
Juína;62a9ct2gj
Monte Santo;650aur1yj
Diamantina;5jbaiw47j
Monte Carmelo;5i0a8247j
Queimadas;6dkb4a2pj
São Benedito;6mraqi2pj
Monte Alto;5aya5a47j
Altos;6k0am22pj
Santana do Ipanema;67yb0j3aj
Osório;4mza0d47j
São Francisco de Itabapoana;5auaq847j
São José de Mipibu;6h5b642pj
Sidrolândia;5bv9nc26j
Cabreúva;559a9347j
Vila Leopoldina;54naa747j
João Pinheiro;5kqabr47j
Guaramirim;4wha3w47j
Santa Cruz do Rio Pardo;56ea2547j
Itapagé;6nrau12pj
Capão Bonito;53ba5p47j
Bom Conselho;68jb2441j
Seabra;5zianz1yj
Timbaúba;6d5b5w41j
União;6l9aky2pj
Timbó;4via3547j
Jaguaquara;5wfasz1yj
Paiçandu;54u9vf47j
Igarapé;5e9agy47j
Campo Maior;6klamv2pj
Breu Branco;6mwa2h21j
Mauriti;6dhawb2pj
Dracena;5ac9wv47j
Barra Velha;4w1a4s47j
Muaná;6tra3a21j
Autazes;6o29br3cj
Araquari;4wra4o47j
Jardinópolis;5bma7c47j
Jaraguá;5q8a2z47j
Cornélio Procópio;55m9zb47j
Cambuci;54kaai47j
Presidente Dutra;6jbagf2pj
Marau;4qz9v047j
Maracaju;59z9mr26j
Lapa;4yfa1w47j
Acopiara;6h2auf2pj
Dois Vizinhos;4yj9sm47j
Pederneiras;57xa4i47j
Santana do Paraíso;5g8alr47j
São Lourenço;58kaev47j
Salinópolis;6waa8h21j
Xique-Xique;63yalb1yj
Itaberaí;5pia1n47j
Cerquilho;55oa7e47j
Conceição do Araguaia;6b2a3521j
Mamanguape;6f0b6f2pj
Augusto Corrêa;6v6aag21j
Paraíba do Sul;58gajr47j
Itararé;531a2z47j
Lago da Pedra;6lcaen2pj
Santo Antônio da Platina;55aa0w47j
Sudoeste/Octagonal;5q4a6v47j
São Miguel d'Oeste;4vr9rc47j
Porangatu;5woa3h47j
Aracati;6lcaz32pj
Rio Grande da Serra;542ab447j
Serrana;5b3a7s47j
Livramento de Nossa Senhora;5w4ans1yj
Salto de Pirapora;54ba7v47j
Águas Belas;68pb0w41j
Santo Antônio de Pádua;5a6amu47j
Paracambi;577ail47j
Mangaratiba;568aho47j
Uruará;6no9qq44j
Panambi;4rf9re47j
Tarauacá;6bc8ff43j
Vargem Grande;6o6ai02pj
Pedreira;56ua9q47j
Itarema;6pwat42pj
Santo Antônio da Patrulha;4n69zo47j
Laguna;4qwa4i47j
Simão Dias;646ayz3aj
Mata de São João;5z7axm1yj
José de Freitas;6ksalq2pj
Uruaçu;5toa3i47j
Vera Cruz;5y0awr1yj
Barra de São Francisco;5hwaqf47j
Armação dos Búzios;56tano47j
Afogados da Ingazeira;6chazg41j
Santos Dumont;5aeaj147j
São Mateus do Sul;4y5a0247j
Amontada;6ooatd2pi
Garça;58ba2247i
Guaratuba;4y4a5347i
Barreiros;69ib6941i
Guaraciaba do Norte;6mfaqt2pi
São Lourenço do Sul;4iv9vm47i
Marataizes;5bkaqm47i
Macaúbas;5xuale1yi
Marialva;54s9w547i
Lago Norte;5qaa7247i
Torres;4oia1v47i
Coelho Neto;6m6akj2pi
Santa Maria de Jetibá;5edaqu47i
Santa Helena;6rtae62pi
Barra dos Coqueiros;63pb143ai
Arcos;5doadi47i
Socorro;579aar47i
Sena Madureira;68u8l943i
Currais Novos;6gmb2k2pi
Curuçá;6vza7321i
Nossa Senhora da Glória;65mb023ai
São Fidélis;59vao147i
Toritama;6brb3u41i
Paraguaçu Paulista;57r9zi47i
Pacajá;6nc9zc21i
Ipu;6m0aqx2pi
Esperantina;6n6amp2pi
São Sebastião do Passé;5z9ax21yi
Paranaíba;5fc9xt26i
São Gotardo;5gdac347i
Sirinhaém;6a5b6g41i
Zé Doca;6oxad62pi
Ipiaú;5uratm1yi
Itabaianinha;62paz13ai
Santa Rita do Sapucaí;587ad247i
Porto de Moz;6t59uw44i
Remanso;67aan41yi
Santa Maria da Boa Vista;69jatd1yi
Andradas;58paan47i
Benjamin Constant;6lu8hh2ni
Jacarezinho;55oa1747i
Almenara;5p2aqz47i
Colinas;6h9ah32pi
Pedra Branca;6ivato2pi
Santa Quitéria;6lzasg2pi
Salinas;5p3amj47i
Gramado;4oe9yp47i
Vargem Grande do Sul;59da9r47i
Curitibanos;4u89zi47i
Boa Esperança;5bfadf47i
Itapemirim;5bnaql47i
Espírito Santo do Pinhal;58caa547i
Capelinha;5kvalw47i
Lajedo;69yb3441i
Eldorado do Sul;4mg9wm47i
Riacho Fundo;5pwa6m47i
Tucumã;6f99xw21i
São Gonçalo dos Campos;5zhavt1yi
Nova Viçosa;5kbaun1yi
Presidente Epitácio;59k9v847i
Itápolis;5a0a4f47i
Barra da Tijuca;564ajj47i
Custódia;6bjazg41i
Guajará Mirim;6428ui3yi
Amambai;55u9ml26i
Guaíra;5dka5t47i
Bom Jardim;6ccb5541i
Oliveira;5ciafh47i
Rio Negrinho;4x3a2g47i
Matinhos;4y9a5647i
Bonito;6ahb4r41i
Teotônio Vilela;66hb303ai
Visconde do Rio Branco;5bnal047i
Araioses;6pzanm2pi
Várzea Alegre;6f5auu2pi
Paracuru;6ojavl2pi
São Raimundo Nonato;68yale2pi
Brumadinho;5e2ah847i
São Mateus do Maranhão;6msagg2pi
Caeté;5esaip47i
Brás;54laai47i
São Francisco do Conde;5yxawk1yi
Ouro Branco;5d0ain47i
São João da Barra;59wapz47i
Santa Maria da Vitória;5wtah81yi
Atalaia;67mb3y3ai
Santa Helena de Goiás;5kj9zg47i
Rosário;6puah32pi
Novo Horizonte;5ada3a47i
Orlândia;5cga6z47i
Iturama;5f7a0k47i
São Pedro;57da6x47i
Boca do Acre;69p8os3ci
Oeiras;6ehamz2pi
Sento Sé;66xann1yi
Entre Rios;60uay81yi
Socorro;547aa947i
Mucuri;5jrau51yi
Ulianópolis;6nma8321i
Rolim de Moura do Guaporé;5xo9303yi
Pedro II;6lqaou2pi
Mateus Leme;5ehagl47i
Santaluz;62qaun1yi
Pentecoste;6nhaux2pi
Afuá;6xka0121i
Mombaça;6i2atx2pi
Leblon;566ajy47i
Massapê;6o8ary2pi
Machado;59tacg47i
Agudos;57la3x47i
Tietê;55ua7h47i
Jaíba;5reaip47i
Jeremoabo;660axh1yi
Matozinhos;5foahk47i
Pontal;5bma6k47i
Rio Brilhante;59g9oh26i
Ituverava;5dia7a47i
Rio Branco do Sul;501a3147i
Confresa;64g9wr2gi
Jarinu;55uaa747i
Guariba;5aoa6147i
Turiaçu;6teadz2pi
Cansanção;64daua1yi
Porteirinha;5qaakh47i
Ipanema;566ak047i
Aliança;6cwb6541i
Alto De Pinheiros;54laa947i
Girau do Ponciano;66kb1p3ai
Santa Cruz;6gpb3y2pi
São Manuel;56va5347i
Bom Jesus do Itabapoana;5bbao847i
São Caitano;6avb3m41i
Amarante do Maranhão;6ijaa62pi
Pedreiras;6lbag52pi
Santa Rita;6paagv2pi
Dom Pedrito;4jy9o547i
Campos Novos;4tw9xq47i
Castelo;5csapm47i
Sarzedo;5ecahe47i
Missão Velha;6dvava2pi
Assis Chateaubriand;5269rc47i
Ipueiras;6leaqw2pi
Mandaguari;54o9wg47i
José Bonifácio;5bja1z47i
Rosário do Sul;4ly9nh47i
Itambé;6dfb6h41i
Barra do Choça;5soara1yi
Amargosa;5xtau01yi
Pilar;67cb443ai
Iperó;555a7j47i
Tuntum;6jeafz2pi
Bodocó;6ceat241i
Apodi;6iaaz02pi
Piumhi;5d5acc47i
Setor Complementar de Indústria e Abastecimento;5q6a6p47i
Colinas do Tocantins;6bma5c1ji
Vassouras;57saiq47i
Juara;62q9g82gi
Santa Teresa;56cak147i
Maragogipe;5yiavw1yi
Igarapé-Açu;6uva7q21i
Rurópolis;6mm9nh44i
Itaqui;4p39ix47i
Iporá;5oc9y047i
Goiatuba;5jza2x47i
Adamantina;59r9y547i
Ilhabela;53yae047i
Prainha;6t09rg44i
Eirunepé;6fi8hx2ni
Feijó;6bb8gl43i
Domingos Martins;5dgar247i
Rio Real;624ayn1yi
Pilão Arcado;668am01yi
Conceição do Jacuípe;5zsawb1yi
Baturité;6lzaw02pi
Presidente Venceslau;5989w047i
São Paulo de Olivença;6om8kp3ci
Jaguariaíva;52oa1x47i
Promissão;5a6a1i47i
Laranjal do Jari;6vp9u521i
Pimenta Bueno;61l9613yi
Ouro Preto do Oeste;6459363yi
Nanuque;5kgarx47i
Charqueadas;4mt9wl47i
Palotina;52k9qg47i
Prado;5luav21yi
Padre Bernardo;5rva5w47i
Niquelândia;5tta5e47i
Posse;5uvab747i
Borba;6lt9ah3ci
São José do Belmonte;6c6awc41i
Santa Fé do Sul;5dv9yj47i
São Luiz Gonzaga;4r39nc47i
Rio Pardo;4mp9ui47i
Bela Vista de Goiás;5mva4147i
Itaporanga d'Ajuda;63gb0d3ai
Mãe do Rio;6sba7x21i
São Joaquim de Bicas;5ebah147i
Barra Bonita;57ja5447i
Garibaldi;4oq9wv47i
Araçuaí;5n7an547i
Pomerode;4vqa3e47i
Almeirim;6ts9ty44i
Nova Cruz;6g0b5l2pi
Serra do Ramalho;5weaiy1yi
Curaçá;691at51yi
Petrolândia;692axu41i
Brejo;6nsal92pi
Portão;4ni9xo47i
São Domingos do Maranhão;6iiagp2pi
Curralinho;6sza1o21i
Itiúba;64batb1yi
Palmeira;4zda1347i
São Luís de Montes Belos;5o3a0347i
Oeiras do Pará;6sga1j21i
Inhambupe;61aaxh1yi
Braço do Norte;4rga3f47i
Américo Brasiliense;59oa6e47i
Várzea da Palma;5l4afr47i
Jaguaribe;6hnawq2pi
Itaíba;695b0241i
Pitangueiras;5bna6247i
Penha;4vna4v47i
Araçoiaba da Serra;54pa7r47i
Novo Progresso;6e59m644i
Peixoto de Azevedo;65m9na2gi
Morro do Chapéu;61xapo1yi
Cachoeira;5z0avr1yi
Pitanga;5189w847i
Bom Retiro;54naag47i
Ribeirão;6adb5q41i
Fraiburgo;4ux9yk47i
Poço Redondo;66razc3ai
Barra Funda;54oaad47i
Barreirinha;6q99hh3ci
Exu;6d5ato41i
Riachão do Jacuípe;617aul1yi
Estreito;6fsa882pi
João Câmara;6imb4i2pi
Cravinhos;5aqa7f47i
Catende;69xb4s41i
Capim Grosso;62easv1yi
Maragogi;68zb663ai
Aparecida;56jaed47i
Palmeira das Missões;4si9rx47i
Araguatins;6iba6d1ji
Bom Jardim;6o6adb2pi
Taiobeiras;5q3amp47i
Touros;6jkb5i2pi
Presidente Figueiredo;6sd99a3ci
Porto União;4x49y447i
Itamarandiba;5keaky47i
Aguaí;58qa9i47i
Tanguá;56vald47i
São Desidério;5zoaf31yi
Urbano Santos;6p3ajg2pi
Sertânia;6blb0i41i
Igrejinha;4nv9yx47i
Teutônia;4o79w347i
Arraial do Cabo;567an947i
Bela Cruz;6pjasf2pi
Ubajara;6nbaqc2pi
Ivaiporã;52n9wg47i
Campo Alegre;66ub313ai
Jaguarari;65iasc1yi
São Sebastião;66fb2h3ai
Itatiaia;57iag847i
São João Batista;4u8a4b47i
Canavieiras;5qgavt1yi
Rorainópolis;70n98623i
Frederico Westphalen;4u09rp47i
Esplanada;618aym1yi
Caçapava do Sul;4l99rg47i
Penalva;6ovaej2pi
Pombal;6f7az02pi
Ourilândia do Norte;6f99y421i
Correntina;5wyag01yi
Careiro;6nj98b3ci
Santana do Araguaia;682a0521i
Pires do Rio;5lya5w47i
Monteiro;6c3b0w2pi
São Gabriel da Palha;5h6are47i
Guanhães;5huakr47i
São Bento;6gkaz52pi
Laranjeiras do Sul;4zf9ue47i
Paraipaba;6ogav92pi
Estrela;4o29vn47i
Gandu;5vuaub1yi
Ibaté;591a6o47i
Matões;6ioak02pi
Coxim;5il9nw26i
Miguel Alves;6mfaku2pi
Pojuca;5zhaxj1yi
Guaíra;5349pb47i
Ouro Fino;584ab747i
Barrinha;5b5a6847i
São Miguel Arcanjo;53oa6o47i
Brasília de Minas;5ozagl47i
Colíder;63y9lz2gi
Nísia Floresta;6h3b672pi
Nerópolis;5ofa3a47i
Xaxim;4v49u347i
Bagre;6sqa0j21i
Palmeiras de Goiás;5nba1b47i
Anapu;6od9xs21i
São Luís do Quitunde;684b583ai
Gurupá;6u49wk21i
Descalvado;596a7q47i
Cabrobó;6adaut41i
Jaguaruana;6klaz22pi
Itapicuru;62kaxt1yi
Capela;64ub133ai
Turilândia;6ruae52pi
Floresta;6a4awv41i
Bariri;58pa4m47i
Cachoeira Paulista;572aez47i
Cururupu;6sxafd2pi
São José da Tapera;67gb063ai
Sapezal;5we9cm2gi
Mandaguaçu;5559va47i
Parambu;6graqz2pi
Forquilhinha;4q5a2l47i
Pindaré-Mirim;6nzae22pi
Guarantã do Norte;66d9nh2gi
Rio das Pedras;56ka7r47i
Rio Negro;4xha1o47i
Água Boa;5uz9v42gi
Bandeirantes;55ta0347i
Osvaldo Cruz;59g9yo47i
Poconé;5ou9iq2gi
Parnarama;6i8akb2pi
Carangola;5cfan947i
Guararema;54zac447i
Esperança;6ehb4e2pi
Itaperuçu;4zya2x47i
Pompéu;5gmaf647i
Guararapes;5ay9zc47i
São José do Egito;6d8b0h41i
Chapadão do Sul;5ht9tu26i
Santa Vitória do Palmar;4cw9rr47i
Irituia;6t3a8821i
Cícero Dantas;64kaxe1yi
Carauari;6kg8q63ci
Flores da Cunha;4pd9xu47i
Vitorino Freire;6m3aeb2pi
Raposa;6raahi2pi
Vitória do Mearim;6oeafd2pi
Lavras da Mangabeira;6f9avs2pi
Buriti;6n2akr2pi
Barão de Cocais;5elaj747i
Itapoá;4xga4y47i
Quedas do Iguaçu;4zb9t247i
Além Paraíba;597ale47i
Juatuba;5elagu47i
Riacho de Santana;5w7akq1yi
Dois Irmãos;4nu9y347i
Machadinho d'Oeste;67s93u3yi
Nova Russas;6kxarc2pi
Afonso Cláudio;5e9aps47i
Baixo Guandu;5fsaq247i
Campo Alegre de Lourdes;67kakj1yi
Catolé do Rocha;6geaz52pi
Tabuleiro do Norte;6jfay32pi
Nazaré da Mata;6cib6541i
Luís Correia;6q0ao92pi
Santana do Acaraú;6oeasb2pi
Caarapó;5759nq26i
Ipubi;6crash41i
São Domingos do Capim;6tda7b21i
Vera Cruz;5yxaq11yi
Pau dos Ferros;6h1axw2pi
Camamu;5v9ave1yi
Santa Bárbara;5ekaje47i
Santo Antônio do Içá;6pe8na3ci
Espinosa;5sjal247i
Caetés;69nb2a41i
Pontal do Paraná;4ypa5947i
Carlos Barbosa;4om9wy47i
Glória do Goitá;6bsb5z41i
Ipixuna do Pará;6qwa8221i
Trindade;6cgas541i
Campo Magro;4zja2n47i
Cláudio;5d8afn47i
Joaçaba;4ui9wy47i
Soledade;4py9u547i
Sombrio;4p5a2647i
Anchieta;5c7ar347i
Vila Galvão;54taam47i
Garopaba;4s6a4z47i
Imbituva;4zx9zg47i
Serra Negra;577aaa47i
Pinhão;4ym9wi47i
Querência;5z09v02gi
Bom Jardim;58ham647i
Biritiba Mirim;54jac447i
Canguaretama;6gab6f2pi
Pedras de Fogo;6dgb6g2pi
Paty do Alferes;57paje47i
São Gabriel do Oeste;5g49of26i
Iguaba Grande;56kamp47i
Barra do Bugres;5s59h62gi
Limoeiro do Ajuru;6sqa2u21i
Jaciara;5pn9nb2gi
Cambuí;577ac247i
Arari;6ofafm2pi
Cândido Mota;56ta0147i
Piraju;55la2u47i
Espigão dOeste;62096j3yi
Guaçuí;5caao847i
Paratinga;5yrak21yi
São João dos Inhamuns;6hcas42pi
Santa Cruz Cabrália;5osavm1yi
Alegre;5ccaon47i
São Miguel do Iguaçu;4zl9pc47i
Iguape;51da7w47i
Piraí;575ai247i
Nova Santa Rita;4n39xk47i
Carmo do Paranaíba;5h8abc47i
Jaguaré;5hhaso47i
Candelária;4nl9td47i
Três Marias;5jfaec47i
Coromandel;5ipa8w47i
Carinhanha;5uaaig1yi
Santa Cruz das Palmeiras;59da8r47i
Piracuruca;6n3ao52pi
Ibaiti;53ra0l47i
Bom Jesus;68tags2pi
Ibimirim;6aaazb41i
Muritiba;5yxavp1yi
Santo Antônio do Sudoeste;4xl9qr47i
Bom Jesus das Selvas;6lka9v2pi
Tracuateua;6v0a9q21i
Iúna;5dhaom47i
Rancharia;5899yn47i
Cajati;51aa6c47i
Goioerê;52u9sp47i
Miracema;5ajams47i
Conceição das Alagoas;5epa5l47i
Prata;5gda4447i
Passira;6bsb5641i
Ruy Barbosa;5zwarj1yi
Rio Pardo de Minas;5qnalu47i
Nova Olinda do Norte;6n79bu3ci
Maravilha;4vo9sb47i
Álvares Machado;58o9x147i
Paranatinga;5tx9pv2gi
Cocal;6odaok2pi
Eldorado dos Carajás;6h2a2w21i
Itabela;5nyau51yi
Miguel Pereira;57naj947i
Conchal;57za8z47i
Casa Branca;59ja9747i
Irará;60jawb1yi
Anajás;6v9a1a21i
Buritis;65n8yp3yi
Mirandópolis;5bb9y247i
Morro Agudo;5cfa6i47i
Melgaço;6t09z521i
Monção;6obaeb2pi
Itapissuma;6ceb7341i
Hidrolândia;5mwa3947i
Presidente Tancredo Neves;5wnaui1yi
Lagoa Seca;6e3b4f2pi
João Alfredo;6c6b5541i
Itacaré;5ucavo1yi
Porto Belo;4uka5547i
Tabira;6cxazq41i
Aparecida do Taboado;5e79y326i
Lucas;5on9kn2gi
Lagoa Vermelha;4rn9wv47i
Canarana;5wd9ut2gi
Mutum;5f0aow47i
Maracás;5woarp1yi
Pilar do Sul;53va7g47i
Conde;6dub712pi
Pombos;6beb5o41i
Novo Oriente;6inaqr2pi
Lambari d'Oeste;5rg9ew2gi
Mirassol d'Oeste;5qg9en2gi
Triunfo;4mu9wc47i
Inajá;69aayy41i
Oiapoque;78o9w021i
Santo Antônio do Tauá;6uta6b21i
Conceição da Barra;5idatn47i
Mandirituba;4yea2z47i
Jardim;6cyauw2pi
Juquitiba;53ja9947i
Santa Rita de Cássia;63fagc1yi
Macau;6jsb292pi
Santo Antônio do Monte;5e7ae747i
Corrente;650aek2pi
Santo Amaro da Imperatriz;4t3a4i47i
Bady Bassitt;5bwa2n47i
Água Preta;69tb5b41i
Redenção;6m9awf2pi
Mocajuba;6qua2h21i
Balneário Piçarras;4voa4t47i
Medicilândia;6of9t344i
Minaçu;5wfa6247i
Nazaré;5xsavn1yi
Alexânia;5pca5947i
Novo Cruzeiro;5lhano47i
São Bernardo;6ooam62pi
Tupanatinga;69pb0a41i
Baraúna;6jwazi2pi
Concórdia do Pará;6sga6t21i
Canindé de São Francisco;676az13ai
Imbé;4mqa0r47i
Goianinha;6glb672pi
Vera Cruz;4ng9u647i
Coração de Maria;601awd1yi
Pirenópolis;5pza4047i
Pitangui;5fcafb47i
Sacramento;5eta8847i
Propriá;65nb1o3ai
Paripiranga;64bayu1yi
Jaguarão;4fj9rq47i
Nova Esperança;55m9v047i
Porto da Folha;66gb0g3ai
Marapanim;6w0a7i21i
Mantena;5huaq647i
Ituporanga;4tva2847i
Sooretama;5goasm47i
Capão do Leão;4hs9u847i
Timbiras;6m6ahy2pi
Universidade Rural;56rain47i
Goianésia do Pará;6nca3m21i
Vicência;6cqb5v41i
Elói Mendes;59zadf47i
Caririaçu;6egauw2pi
Ibotirama;605ajy1yi
Batalha;6muan52pi
Laranjal Paulista;55za7447i
Lago Sul;5pza7047i
Igarapava;5eca7d47i
Craíbas;67ab1v3ai
Itapuranga;5qsa1947i
Campos Gerais;5b0acw47i
Camanducaia;56sabu47i
Colniza;67v9c22gi
São José da Lapa;5faahw47i
Alagoa Grande;6egb512pi
Costa Rica;5ii9sf26i
Piracaia;55zab847i
Barra da Estiva;5w5ap71yi
Aripuanã;65q9av2gi
Brasiléia;63e8l143i
Queimadas;63iatx1yi
Maracanã;6vva8721i
São Joaquim;4rfa1b47i
Murici;685b463ai
Milagres;6dpavt2pi
Formosa do Rio Preto;63baeh1yi
Marco;6pcash2pi
Arapoti;52wa1l47i
Cruzeiro;5q5a6u47i
Lapão;62eant1yi
Rio Preto da Eva;6qi9a63ci
Alto Alegre do Pindaré;6ntacn2pi
Nova Prata;4q29wn47i
Guaraí;69ha591ji
Humberto de Campos;6qsaja2pi
São Sebastião da Boa Vista;6t9a2f21i
Urucurituba;6pb9eg3ci
São João Nepomuceno;5a6akj47i
Jijoca de Jericoacoara;6pyarn2pi
Aracoiaba;6lvaw72pi
Ilha Solteira;5d99xe47i
Ipameri;5ksa6847i
Miranda;5ds9je26i
Ilha de Itamaracá;6chb7941i
Jacutinga;583aaj47i
Arame;6kfac82pi
Santa Helena;50y9p347i
Nova Xavantina;5ta9uk2gi
Astorga;55h9wh47i
Sobradinho;67paqo1yi
Tupaciguara;5ida4q47i
Ipixuna;6ef8cv2ni
Nova Mamoré;6548uj3yi
São José do Norte;4h39vg47i
Anagé;5tfapq1yi
Três Passos;4tq9q747i
Condado;6cxb6h41i
Ibatiba;5dtaop47i
Coração de Jesus;5nnags47i
Luzilândia;6oeamb2pi
Pirapozinho;5849wy47i
Ibirapitanga;5uoaun1yi
Anajatuba;6oyag22pi
Quijingue;645av31yi
Aimorés;5fuapy47i
Guaporé;4pv9vv47i
Tanabi;5cpa2347i
Cândido Sales;5qyapg1yi
Uruçuí;6dxag82pi
Brodowski;5bpa7m47i
Taquari;4n89vy47i
Limoeiro de Anadia;66yb2m3ai
Itaí;54ya3n47i
Campos Sales;6edaru2pi
Canhotinho;69cb3h41i
Pinheiral;57hahs47i
Bombinhas;4ula5b47i
São João dos Patos;6fyaim2pi
Nepomuceno;5b1aed47i
Cocalzinho de Goiás;5q5a4i47i
Satuba;67gb4i3ai
Nossa Senhora das Dores;64vb0p3ai
Novo Aripuanã;6js98a3ci
Ponta de Pedras;6u5a4921i
Três de Maio;4sv9pc47i
Apiaí;51xa4c47i
Piracanjuba;5lya3u47i
Martinópolis;58h9xv47i
João Dourado;62iaoa1yi
Santa Rita do Passa Quatro;59pa8447i
Tamboril;6klas02pi
Icatu;6qaahl2pi
São Lourenço do Oeste;4ws9t747i
Santana;5xyahn1yi
Ubiratã;51t9st47i
Taquaritinga do Norte;6c2b3w41i
Jaguara;54paa547i
Brasil Novo;6ot9u244i
Castro Alves;5yjauh1yi
João Lisboa;6iva8c2pi
Garrafão do Norte;6sna9b21i
Uauá;66oauc1yi
Miguel Calmon;629ar81yi
Boquim;631azi3ai
Santa Maria do Pará;6u9a7u21i
Agrestina;6aib4641i
Iaçu;5yjasb1yi
Poxoréu;5q09ox2gi
Rio Tinto;6f4b6k2pi
Reserva;51j9yr47i
Tapejara;4s19vj47i
Guabiruba;4ura3z47i
Rocinha;565ajv47i
Alcobaça;5lcav41yi
Maraú;5uuavn1yi
Porto Calvo;68wb5o3ai
Cordeirópolis;57ka8647i
Angatuba;54ra5j47i
Dois Córregos;57va5m47i
Ocara;6ljaws2pi
Mimoso do Sul;5biap347i
Wenceslau Guimarães;5vzauc1yi
Igaci;67ib293ai
Codajás;6nc93m3ci
São Sebastião do Caí;4nt9xa47i
Três Coroas;4o09yy47i
Viçosa;67zb3c3ai
Pedra Azul;5pjapa47i
Minas Novas;5m6alp47i
Itambé;5roar61yi
Bujaru;6tsa6k21i
Junqueiro;66fb2o3ai
Valente;62baue1yi
Taquarituba;54na3847i
Matriz de Camaragibe;68lb5b3ai
Guaiúba;6msawo2pi
Pedro do Rosário;6prae12pi
Santa Luzia do Paruá;6qyacu2pi
Cantanhede;6nxagq2pi
Cupira;6a2b4541i
Pão de Açúcar;66xb003ai
Senador Pompeu;6ihaun2pi
Nova Soure;62tax41yi
Santa Terezinha de Itaipu;4zc9ow47i
São Geraldo do Araguaia;6g8a5421i
Valparaíso;5b19yp47i
Carutapera;6unac62pi
Canarana;61kanz1yi
Soure;6w0a5821i
Estrela;4s29yi47i
Ortigueira;52r9yh47i
Quatro Barras;4zja3o47i
Forquilha;6ngas62pi
Amélia Rodrigues;5zkawc1yi
Itaporã;58o9nt26i
Salvaterra;6vxa5821i
Traipu;66bb183ai
Anastácio;5d49kz26i
Paraopeba;5ghago47i
Espera Feliz;5cnanl47i
Pereira Barreto;5co9y147i
Areia Branca;6k8b0u2pi
Monte Sião;57paan47i
Lagoa Grande;690as541i
Goiás;5pra0q47i
Carolina;6dma862pi
Alto Alegre do Maranhão;6mbagj2pi
Jacareacanga;6gq9fl44i
Buritis;5qmab247i
Independência;6j0as12pi
Veranópolis;4pm9wt47i
Jequitinhonha;5odaq447i
Cachoeira do Arari;6v7a4021i
Jardim;5ac9k226i
Capivari de Baixo;4r0a4047i
Laranjeiras;63zb0r3ai
Ibiapina;6n4aqf2pi
São Gonçalo do Sapucaí;597adc47i
Bom Jesus de Goiás;5jea1v47i
Itaporanga;6dqay12pi
São João da Ponte;5prahr47i
Belo Oriente;5gmam047i
Jucás;6fvau72pi
Umbaúba;62eaze3ai
Irauçuba;6nlati2pi
Pinheiros;5izasb47i
Buritizeiro;5ltaf447i
São João do Paraíso;5rhanb47i
Porto Franco;6gea8c2pi
Tacaratu;68pay141i
Brotas;584a6b47i
Iraquara;5zzaoe1yi
Macaparana;6d1b5j41i
Miranda do Norte;6o3ag62pi
São João;69cb2z41i
Se;54laah47i
Cruzeiro do Oeste;53y9sl47i
Cajuru;5awa8m47i
Encruzilhada do Sul;4l69u447i
Carandaí;5btaib47i
Aurora do Pará;6s3a7w21i
Manari;694azh41i
Aurora;6eqavr2pi
Orleans;4r8a3347h
Bonito;5bc9j426h
Santa Quitéria do Maranhão;6oaals2ph
Conde;617azj1yh
Piraí do Sul;51va1947h
Itaocara;59tan447h
Santa Gertrudes;57ma7z47h
Tamandaré;69ob6i41h
Bambuí;5efaca47h
São Miguel;6grax22ph
Corinto;5iyagi47h
Mojuí dos Campos;6qk9o844h
Quaraí;4ll9j747h
Carmo do Cajuru;5dyafn47h
Francisco Sá;5o8aj747h
Raul Soares;5e6am347h
Santa Rosa de Viterbo;5ada8g47h
Pindoretama;6mtaxm2ph
Planalto;5t9arl1yh
Coronel Vivida;4xu9tz47h
Capinzal;4u29wn47h
Nova Petrópolis;4oe9y147h
Aldeias Altas;6l5aj92ph
Estácio;56cak047h
Santo Antônio de Posse;577a9o47h
Senador Guiomard;65t8nu43h
Loanda;56c9se47h
Cambará;55za0x47h
Tocantinópolis;6gfa8a1jh
Feira Grande;66ib243ah
Itabaiana;6dnb5v2ph
Conceição do Mato Dentro;5h4ajd47h
Ribas do Rio Pardo;5d89qo26h
Bananeiras;6f9b512ph
Governador Nunes Freire;6s3acj2ph
Quissamã;58laot47h
Igaraçu do Tietê;57ha5447h
Dom Pedro;6k0agk2ph
Piranhas;67aaz43ah
Bataguassu;59p9ue26h
Monte Alegre;6h5b5v2ph
Panelas;69yb3z41h
Ivoti;4nt9xw47h
Encantado;4os9vx47h
Santa Luzia;6csa8u2ph
Colorado;56k9vn47h
Capela do Alto;54ta7f47h
Sarandi;4se9t047h
Siqueira Campos;547a1l47h
Santa Teresa;5emar847h
Campo Verde;5da9pt26h
São José do Vale do Rio Preto;58haks47h
Pedra;6aeb1e41h
Morrinhos;6p1ask2ph
Inhapim;5fpan047h
Abaeté;5gsadr47h
Areia;6eob4v2ph
Olindina;62faxj1yh
Camacan;5r6aua1yh
Senador José Porfírio;6qt9vp21h
Itinga do Maranhão;6lna7z2ph
Trizidela do Vale;6lbag22ph
Diamantino;5tz9j72gh
Caculé;5tqamq1yh
Buriti Bravo;6hsai92ph
Pirajuí;58wa2m47h
Barreira;6m3awo2ph
Muritiba;5y4auz1yh
Cedro;6fnavi2ph
Candeias do Jamari;69j8z23yh
Piúma;5c4aqw47h
Catete;56bak247h
Park Way;5pta6u47h
Monte Aprazível;5cba1x47h
Valença do Piauí;6g7ao12ph
Silvânia;5npa4z47h
Ibiá;5fwaaq47h
Medeiros Neto;5lrasa1yh
Santo Antônio;6ghb5g2ph
Teodoro Sampaio;57f9v347h
Feira Nova;6bxb5p41h
Araçariguama;54wa9a47h
Posto da Mata;5kbata1yh
Mata Grande;68oaz73ah
Riachão;6dkaai2ph
Beruri;6n695j3ch
Igreja Nova;65vb263ah
Cunha;55xaf447h
Itaiópolis;4wua1d47h
Ceres;5rha2847h
Matinha;6peaex2ph
Silva Jardim;573am947h
Bom Jesus dos Perdões;55qaax47h
Ecoporanga;5izaql47h
Pinhalzinho;4vf9st47h
Iracemápolis;57aa8047h
Vertentes;6c2b4141h
Arroio do Meio;4oc9vq47h
Serro;5icaji47h
Mazagão;6xo9xj21h
Ituberá;5vuav91yh
São Miguel do Araguaia;5x4a0o47h
São Francisco de Paula;4o79zi47h
Muzambinho;5amaar47h
Pio XII;6ndael2ph
Várzea Alegre;6j5aru2ph
Nova Alvorada do Sul;5ad9oy26h
Orobó;6cib5441h
Poço Verde;649axy1yh
Conceição de Macabu;58nanp47h
Apuí;6e099n3ch
Alhandra;6dcb712ph
Herval dOeste;4uh9wz47h
Paraguaçu;5a5acy47h
Guapiaçu;5c8a3a47h
Assaré;6exat82ph
Ibicaraí;5sqau11yh
Riachão das Neves;61daf91yh
Núcleo Bandeirante;5pxa6r47h
São Miguel do Guaporé;61j91t3yh
Bela Vista;58l9iz26h
Macarani;5qrarq1yh
Ibirubá;4qh9sj47h
Acreúna;5loa0247h
Ladário;5h89g026h
Pedro Canário;5jxash1yh
Boca da Mata;678b3e3ah
Mari;6eeb5w2ph
Bastos;5949z347h
Parelhas;6ffb262ph
Alta Floresta d'Oeste;60r93x3yh
Iguaí;5t0asn1yh
Cerqueira César;560a3f47h
Cordeiro;58tamc47h
Tambaú;59qa8p47h
Icapuí;6kxb082ph
São João do Piauí;6asamn2ph
Uruçuca;5thauw1yh
Matupá;65r9nf2gh
Jandaia do Sul;54g9wk47h
Perdões;5bfaer47h
Rolante;4nn9zi47h
Chã Grande;6b4b5i41h
São Sepé;4m89r747h
Caaporã;6d4b712ph
São José da Laje;68zb3u3ah
Altinho;6afb3u41h
Teofilândia;624avo1yh
Maracaçumé;6scacc2ph
Olho d'Água das Flores;67ib0f3ah
Princesa Isabel;6ciayh2ph
Nhamundá;6rx9ih44h
Alto Alegre;76295623h
São Domingos do Araguaia;6ima4n21h
Itapaci;5sha2d47h
Santa Bárbara do Pará;6uma5v21h
Chopinzinho;4y69u447h
São Marcos;4pj9y547h
Porto Real;57qagz47h
Palmeirândia;6qnafa2ph
Caxambu;58yaf747h
Paulistana;6beapp2ph
Laje;5xeauh1yh
Itapecerica;5d5aen47h
Itambacuri;5jxao847h
Mirador;6gbags2ph
São Jerônimo;4ms9wc47h
Alagoa Nova;6edb4o2ph
Tanhaçu;5v2apf1yh
Freguesia do Ribeirao da Ilha;4t0a5447h
Ribeirão da Ilha;4t2a5747h
Cassilândia;5gx9wb26h
Santa Vitória;5hoa0s47h
Caracaraí;73296723h
Carmo do Rio Claro;5brabw47h
Coreaú;6o5ar22ph
Santa Bárbara;60savq1yh
Urussanga;4qsa3047h
Monte Santo de Minas;5b5a9i47h
Quixeré;6jxayh2ph
Flores;6c5ayj41h
Lajinha;5e1aoe47h
Conselheiro Pena;5graot47h
Conceição da Feira;5z9avo1yh
Ibicoara;5wrapb1yh
Chaves;6xka1521h
Oliveira dos Brejinhos;5zsaku1yh
Divino;5cramx47h
Campestre;59pabj47h
São João de Pirabas;6vva8y21h
Riacho das Almas;6bfb4e41h
Manhumirim;5dgang47h
Cachoeirinha;6afb3d41h
Fátima do Sul;57v9ol26h
Governador Mangabeira;5z0avk1yh
Itupeva;55pa9a47h
Tapauá;6id90i3ch
Capanema;4yp9qj47h
Peritoró;6luagv2ph
Nova Esperança do Piriá;6rpa9j21h
Junqueirópolis;5a99x547h
Paraisópolis;57dacu47h
Itatira;6lfaty2ph
São Pedro;57qakn47h
Lambari;58yae147h
Jaboticatubas;5ftaii47h
Potim;56kaeb47h
Jaguaruna;4qia3t47h
Santa Luzia do Pará;6tsa9q21h
Paramirim;5woamo1yh
Paulo Ramos;6lnaec2ph
Monte Azul;5rwakx47h
São Felipe;5ybavf1yh
Salgado;63dazw3ah
Porto Real do Colégio;65pb1o3ah
Ervália;5c4ali47h
Buri;53wa5147h
Pauini;6cl8py3ch
Tonantins;6q18no3ch
Quiterianópolis;6hsaqy2ph
Pompéia;58la0n47h
Uruburetama;6nyau92ph
Monte Alegre de Minas;5hla4847h
Chorozinho;6m2ax22ph
Medina;5oyaos47h
Regente Feijó;58a9xi47h
Aquidabã;65gb163ah
Belmonte;5pyaw01yh
Nova Hartz;4nu9ym47h
Piatã;5xhanz1yh
Barroso;5b5ahu47h
Palmas de Monte Alto;5udak41yh
Lucélia;59o9ya47h
Schroeder;4wna3p47h
Mutuípe;5x9aua1yh
São Joaquim do Monte;6alb4k41h
Presidente Getúlio;4uva2647h
Rio Formoso;69xb6c41h
Tupanciretã;4p89qg47h
Campinas;4tda4z47h
Turmalina;5lzalb47h
Cantagalo;58yamb47h
Castilho;5c19wz47h
Vazante;5k1a9p47h
Tibagi;51x9zz47h
Curionópolis;6h2a2821h
Carira;658aza3ah
Ponto Novo;63uasj1yh
Araçoiaba;6cdb6j41h
Cândido Mendes;6tzacz2ph
Livramento do Brumado;5w3anr1yh
Andirá;55za0h47h
Ibirama;4uua2g47h
Vila Rica;6679y02gh
Rio Verde de Mato Grosso;5hg9no26h
Careiro da Várzea;6p499t3ch
Itaparica;5y7awk1yh
Rubiataba;5rwa1o47h
Araripe;6dzasi2ph
Simonésia;5e4anc47h
Três Barras;4xha0847h
Crisópolis;621ay11yh
Caraúbas;6hxazo2ph
Cuité;6g0b3l2ph
Orós;6goavx2ph
Rafael Jambeiro;5zjaua1yh
Buriti dos Lopes;6p6anp2ph
Miracatu;52ka8647h
Cachoeira do Piriá;6t4aap21h
Ampére;4y19rh47h
Jussara;5py9yp47h
Palmital;56pa0i47h
Buritirama;649ait1yh
Bequimão;6r7afm2ph
Engenheiro Coelho;57ja8v47h
Vargem Alta;5claq347h
Água Branca;68aaym3ah
Caraí;5m9ao747h
Guapó;5n9a2f47h
Ipanema;5f0ao547h
Carnaíba;6cbaz141h
Urucará;6qy9fk3ch
São Vicente Ferrer;6pzafc2ph
Miguelópolis;5dya6l47h
Formoso do Araguaia;618a2f1jh
Itaquiraí;54t9pi26h
Taquarana;678b2m3ah
Nova Granada;5cza3147h
Paranapanema;551a4o47h
Barro;6e2awa2ph
Chapada dos Guimarães;5r29l52gh
Canto do Buriti;6bhakq2ph
Afrânio;6acaq441h
Presidente Médici;62y9423yh
Boquira;5yealb1yh
Pacaraima;7ab96523h
Sobradinho;5ydave1yh
Mâncio Lima;6cv89i43h
Castelo do Piauí;6j8aol2ph
Rio Bananal;5giarz47h
Realeza;4yf9rb47h
Ourolândia;63japw1yh
Pariquera-Açu;51ca7047h
Wenceslau Braz;53pa1o47h
Cocos;5umagb1yh
Itaobim;5o0aoq47h
Guaranésia;5auaa047h
Papanduva;4wra0q47h
Abadia de Goiás;5nga2o47h
Contenda;4yoa2e47h
Encruzilhada;5qvaqd1yh
Butiá;4mc9vo47h
Pindobaçu;646arw1yh
Itatinga;55ua4y47h
São José de Piranhas;6e8ax22ph
Guaratinga;5nyati1yh
Cesário Lange;55ha6t47h
Lagoa do Itaenga;6byb5z41h
Cafelândia;51m9rw47h
Barão de Grajaú;6f8aki2ph
Lagoa Formosa;5huab347h
Montanha;5jnarw47h
Pancas;5gmaqj47h
Capoeiras;69rb2941h
Manga;5t0ahz47h
Horizontina;4t99p547h
Varzelândia;5qeahp47h
Lagoa da Canoa;66pb1y3ah
São José da Coroa Grande;69ab6d41h
Pastos Bons;6foahk2ph
Ibirataia;5uxatw1yh
Miracema do Tocantins;67fa5l1jh
Terra Santa;6s69j344h
Itajuípe;5t8aum1yh
Presidente Olegário;5iuab247h
Epitaciolândia;63d8l243h
Marechal Floriano;5dbar047h
Altônia;53p9qa47h
Pedra Preta;5nu9op2gh
Belém de São Francisco;69pavr41h
Aroeiras;6d1b4t2ph
Cantá;75997o23h
São Raimundo das Mangabeiras;6eiado2ph
Placas;6n99pe44h
Ribeirão Branco;52qa4j47h
Barcelos;6vb9173ch
Ubaíra;5x5atu1yh
Sanharó;6asb2f41h
Seara;4ul9up47h
Carlos Chagas;5kuaqr47h
Parnamirim;6bjau241h
Guará;5d9a7647h
Reriutaba;6miara2ph
São Gabriel;62tano1yh
Morros;6q2aho2ph
Matipó;5doame47h
Garuva;4xpa4b47h
São João Batista;6psafj2ph
Morro da Fumaça;4qfa3b47h
Nordestina;63yauh1yh
Madre de Deus;5ymawq1yh
Anicuns;5oaa1847h
Potirendaba;5bka2u47h
Colina;5cha5647h
Amaraji;6aqb5j41h
Alcântara;6rcagm2ph
Comodoro;5w299x2gh
Matelândia;4zw9q247h
Águas Formosas;5mkaqa47h
Belo Campo;5s8ape1yh
Governador Edison Lobão;6i1a8g2ph
Quitandinha;4y5a2i47h
Aragarças;5pu9uv47h
Rio Maria;6dpa0z21h
Itapororoca;6f1b632ph
Pirapora do Bom Jesus;550a9g47h
Baependi;590afb47h
São Benedito do Rio Preto;6oraj32ph
Picuí;6fxb312ph
Riachão do Dantas;639az83ah
Esperantinópolis;6kgafc2ph
Taió;4uoa1447h
Morretes;4z8a4d47h
Pontalina;5lba2n47h
Alpinópolis;5c2ab547h
Aveiro;6nz9mb44h
Sapucaia;58wakt47h
Paraibano;6g5ahu2ph
Conceição;6d0ax12ph
Águas de Lindóia;57kaah47h
Xapuri;64f8lq43h
Júlio de Castilhos;4ot9qw47h
Baixa Grande;60sasf1yh
Farias Brito;6erau32ph
Nazaré Paulista;55mab447h
Serrita;6bzauu41h
Solonópole;6i3avn2ph
Barreiro do Jaíba;5qmaix47h
Muniz Freire;5d6aoz47h
São Luís Gonzaga do Maranhão;6luafx2ph
Souzas;56ga9k47h
Monte Azul Paulista;5bxa4w47h
Campo do Brito;647azv3ah
Una;5rjavg1yh
Terra Roxa;52w9pq47h
Campos Belos;5xsaa347h
Varjota;6mdark2ph
Belterra;6qo9ne44h
Mucajaí;74s96t23h
Antonina;4zda4p47h
Areia Branca;644b0c3ah
Água Azul do Norte;6f59zt21h
Mendes;57faij47h
Taperoá;5weave1yh
Dianópolis;61pa9y1jh
Fundão;5enars47h
Campina Verde;5fqa2j47h
Bom Jesus do Tocantins;6jza4z21h
Carmópolis de Minas;5cyag047h
Serra Preta;608aur1yh
Camocim de São Félix;6asb4o41h
Itaberá;53qa3i47h
Lagoa do Carro;6c8b5w41h
Gameleira;6a6b5p41h
São João do Rio do Peixe;6fbax72ph
Santo Anastácio;58y9wj47h
Sapeaçu;5ynav61yh
Rio Claro;56wahe47h
Anori;6nj94s3ch
Quipapá;69hb3z41h
Olho d’Água das Cunhãs;6miaeo2ph
Ituaçu;5vnapa1yh
Floresta do Araguaia;6d1a1x21h
Não-Me-Toque;4qy9ta47h
Filadélfia;646asj1yh
Fátima;64kaxu1yh
Canutama;6fv8x63ch
Remígio;6enb4k2ph
Luz;5f0ad347h
Hidrolândia;6lrars2ph
Ourém;6tpa9521h
Porto Grande;6zz9x721h
Itapiúna;6lcavw2ph
Major Isidoro;67jb193ah
Porciúncula;5bsan847h
São José dos Quatro Marcos;5qm9ee2gh
Itanhém;5mbarz1yh
Jucurutu;6h9b162ph
Cairu;5wjavk1yh
Dormentes;6ajaqr41h
Carmo;593aln47h
Formosa da Serra Negra;6g4abp2ph
Pirapemas;6nnah62ph
Elias Fausto;560a8f47h
Ingá;6dsb542ph
Mairi;61hash1yh
Paraibuna;551ad647h
Correntes;68nb3341h
Jaguaripe;5xlavy1yh
Alto Araguaia;5lx9s62gh
Terenos;5d89nm26h
Estreito;6hyajv2ph
Abaré;69savd1yh
Cariré;6n1arl2ph
Tijucas do Sul;4xza3e47h
São Francisco de Assis;4nx9mv47h
Pio IX;6f0ar72ph
Iati;68vb1n41h
Boqueirão;6d8b3n2ph
Ubaitaba;5u9aus1yh
Alumínio;54ma8q47h
Água Branca;6hnalk2ph
Terra Boa;53z9uc47h
Piritiba;61farc1yh
Arroio Grande;4gg9sj47h
São Miguel do Tapuio;6iqap82ph
Jaicós;6dkapq2ph
Apicum-Açu;6traes2ph
Malacacheta;5kgan447h
Presidente Sarney;6qtae02ph
Piratini;4in9si47h
Brasnorte;60c9ew2gh
Croatá;6lqaqe2ph
Urucuia;5p7acy47h
Corbélia;5149rx47h
Umirim;6nsaup2ph
Pocinhos;6ecb3u2ph
Cafarnaum;61jaot1yh
Peçanha;5ihals47h
Rio Pomba;5axak247h
Rosana;57a9sm47h
Nova Era;5f5akg47h
Matões do Norte;6nxag82ph
Viradouro;5c1a5u47h
Borda da Mata;585abr47h
Abelardo Luz;4w89un47h
São Domingos do Prata;5euakn47h
Joaquim Gomes;68nb4p3ah
Vila Bela da Santíssima Trindade;5sb99h2gh
Pari;54naai47h
Padre Paraíso;5mlaos47h
Coaraci;5tcau51yh
Otacílio Costa;4toa0s47h
Mundo Novo;612arl1yh
Fortim;6lnaz02ph
Santo Antônio do Amparo;5btaf847h
Arinos;5psabx47h
Sengés;531a2m47h
Capistrano;6llavy2ph
Venturosa;6a7b1l41h
Cocal do Sul;4qka3047h
Amarante;6goakz2ph
Jaguaretama;6ifawb2ph
Cipó;636ax11yh
Resplendor;5gbape47h
Lima Duarte;59caid47h
Passagem Franca;6guaie2ph
Buritama;5bha0p47h
Carnaubal;6mfaqa2ph
Itacarambi;5s2ahj47h
Banabuiú;6j9avw2ph
Araruna;6fsb4q2ph
Sumé;6cpb1k2ph
Massaranduba;4w3a3v47h
Poção de Pedras;6ktaf62ph
Tanque Novo;5wdalz1yh
Altinópolis;5bla8f47h
Cássia;5cua9o47h
Juquiá;52ga7p47h
Tejuçuoca;6mxau22ph
Bom Sucesso;5blafo47h
Perdizes;5g9a8n47h
Monsenhor Tabosa;6kpasq2ph
Ipaba;5g3am647h
Regeneração;6gpalf2ph
Pouso Redondo;4uaa1b47h
Ipueiras;6eharn2ph
Batalha;674b0w3ah
Caconde;5a7aag47h
Cristinápolis;624az43ah
Cruz do Espírito Santo;6e6b6j2ph
Marechal Thaumaturgo;69689t43h
Mata Roma;6nyak92ph
Pradópolis;5aoa6h47h
Jenipapo dos Vieiras;6j3ad82ph
Sítio Novo;6hoaaa2ph
Cidreira;4m6a0j47h
Guapiara;52ua5747h
Serra Dourada;5ykahx1yh
Crixás;5tla1747h
Indiara;5mea1547h
Coronel João Sá;65gayn1yh
Paulino Neves;6qgalv2ph
Souto Soares;60faoc1yh
Condeúba;5smanf1yh
Itarantim;5qiasp1yh
Porteiras;6d3avc2ph
Ilhota;4vaa4d47h
Ribeirópolis;64qb023ah
Solânea;6f9b4y2ph
São Simão;5h99zm47h
Piranga;5ckajq47h
Cariús;6fuaua2ph
Manaquiri;6oh9823ch
Itajobi;5asa3r47h
Fortuna;6i3ahc2ph
Ibititá;61xane1yh
Bacabeira;6pragw2ph
Serafina Corrêa;4q99vq47h
Santana do Cariri;6e1atm2ph
Tibau do Sul;6gtb6j2ph
Governador Celso Ramos;4u5a5447h
Carlópolis;54ya1w47h
Madalena;6kiau22ph
São João do Soter;6jtaib2ph
Boa Vista do Tupim;5yuar71yh
Macatuba;57ia4p47h
Santo Antônio do Leverger;5px9k82gh
São Paulo do Potengi;6hmb4o2ph
Pitimbu;6d9b7b2ph
Água Clara;5d79t426h
Barra de Santo Antônio;67wb5d3ah
Porto Acre;67d8of43h
São Vicente Férrer;6cxb5f41h
Alvarães;6p28w03ch
São Caetano de Odivelas;6vxa6m21h
Cafelândia;59ga2747h
Araçagi;6ezb5q2ph
Fartura;551a2h47h
Itapiranga;4uj9qt47h
Salitre;6dsarm2ph
Itororó;5s0asp1yh
Piquet Carneiro;6hwaui2ph
Cajueiro;67wb3l3ah
Ibipeba;61oanb1yh
Mangueirinha;4xy9v247h
Getúlio Vargas;4sj9ux47h
Plácido de Castro;65a8pd43h
Cabaceiras do Paraguaçu;5z6av51yh
Itaquitinga;6cpb6i41h
Indiaroba;620azt3ah
Santa Maria das Barreiras;69da1x21h
Caiapônia;5mw9w347h
Novo Airão;6qq96q3ch
Xangri-lá;4n8a1047h
Piancó;6e0ayn2ph
Neópolis;65cb2e3ah
Cajari;6osaez2ph
Belém;6ffb5b2ph
Orizona;5mpa5u47h
Sananduva;4sd9w347h
Santa Margarida;5deamn47h
Poço Fundo;59iacc47h
Faxinal;53c9xg47h
Nova Resende;5bbab247h
Caridade;6m9av52ph
Jussara;63canf1yh
Demerval Lobão;6j4alg2ph
Central;632an11yh
Alto Paraíso;6709053yh
Nova Olímpia;5sw9gv2gh
Lagoa da Confusão;641a261jh
Tremedal;5seaoz1yh
Bacuri;6t7aem2ph
São Francisco do Guaporé;60j8zf3yh
Raposos;5ejaic47h
Utinga;60gapv1yh
Centro Novo do Maranhão;6s2abw2ph
Cumaru;6brb4u41h
Japaratuba;64lb1e3ah
Piaçabuçu;653b2t3ah
Tocantins;5b6aki47h
Itirapina;587a7647h
Cerro Azul;512a3647h
Canudos;66iavl1yh
Jacupiranga;51fa6o47h
Ubatã;5ujau71yh
São Lourenço da Serra;53ra9m47h
Cacimba de Dentro;6fkb4l2ph
Fonte Boa;6r18sf3ch
Agudo;4nn9s447h
Giruá;4s59p147h
Sátiro Dias;61sawu1yh
Balneário Rincão;4pxa3847h
Cruz Machado;4xq9xd47h
Colônia Leopoldina;699b4s41h
Campanha;59cadw47h
Sertanópolis;55y9y847h
Aporá;61may81yh
Mirante do Paranapanema;5839vt47h
Quixelô;6gnav42ph
Marmeleiro;4xd9sp47h
Mário Campos;5eaah947h
Atalaia do Norte;6lv8h12nh
Cerejeiras;5xd9733yh
Tapejara;5439t547h
Tupi Paulista;5am9wr47h
Bonito;60rapd1yh
Jataúba;6btb2m41h
Maraã;6sv8tv3ch
Balneário Arroio do Silva;4pha2q47h
Tapiramutá;613aqp1yh
Conceição do Almeida;5yiav71yh
Ferreiros;6dbb6441h
Nobres;5t49jj2gh
Iporã;53c9qu47h
Canapi;68oazk3ah
Itatim;5ypatq1yh
Mirangaba;63lara1yh
Santa Juliana;5gda7z47h
Correia Pinto;4tea0447h
Campina da Lagoa;51p9tc47h
Maruim;646b103ah
Campinápolis;5tm9tc2gh
Messias;67yb4g3ah
Estrela de Alagoas;67xb1w3ah
Sumidouro;58ralh47h
Balneário Gaivota;4p0a2a47h
Colorado do Oeste;5xk97u3yh
Frecheirinha;6nkaqm2ph
Palmitos;4ut9sc47h
Vitória do Xingu;6q09vj44h
Terra Preta;575a9b47h
São Pedro do Sul;4nq9pi47h
Lagoa Nova;6h3b2p2ph
Natividade;5bkanf47h
Santa Cecília;4v49zx47h
Charqueada;57ha7a47h
Bituruna;4xc9wt47h
Itariri;52ja8z47h
Igaporã;5vrald1yh
Pedregulho;5dqa8447h
Glória;682axr1yh
Passa Quatro;57taf347h
Inhapi;68eaz53ah
Turaru;6o0auh2ph
Nova Olinda;6ebats2ph
Malhada;5u6aif1yh
Cruzília;59cafj47h
Urandi;5szali1yh
Teolândia;5w8aub1yh
Jupi;69tb2u41h
Santo Cristo;4sq9o647h
São João Evangelista;5ihal847h
Itagibá;5ucatc1yh
Guamaré;6jtb342ph
Uarini;6pp8v53ch
Pereiro;6h8ax62ph
Tapurah;5ym9j12gh
Corupá;4wla3847h
Cândido de Abreu;51r9xf47h
Trairão;6lb9km44h
Itanhandu;582af747h
Rosário Oeste;5ss9j92gh
Conchas;562a6n47h
Pinhalzinho;56qaal47h
Salto do Lontra;4ye9rx47h
Barrocas;61zavg1yh
Salesópolis;54nacn47h
São Félix do Coribe;5wsah91yh
Espumoso;4q89t747h
Meruoca;6o6arn2ph
Biritinga;61qaw81yh
América Dourada;626aow1yh
Presidente Dutra;62mand1yh
Jaguapitã;55t9wv47h
Paraty;55iaft47h
Vidigal;565ajw47h
Piratininga;57ra3j47h
Trindade;4tda5847h
Holambra;575a9a47h
Cambuci;5a2anl47h
Clevelândia;4wo9ul47h
Capela;67vb3t3ah
Cajueiro;671b2r3ah
Alvinópolis;5e5akf47h
Tucumã;6xla0y21h
Brasilândia de Minas;5mrac747h
Guareí;553a6647h
Andorinha;65aatc1yh
Dionísio Cerqueira;4x29r047h
=BS
Nassau;8vm7x63ol
Lucaya;8zp7th3oj
Freeport;8zp7te3oi
Killarney;8vl7wy3oh
=BT
Thimphu;92bkt06jk
Phuntsholing;90lksb6ji
Tsirang;912kuc6jh
Punākha;92nkto6jh
=BW
Gaborone;51jfvz0mm
Francistown;5b7g0f0mk
Mogoditshane;51lfvv0mk
Maun;5eifp20mk
Molepolole;527fuu0mj
Serowe;57tfy70mj
Tlokweng;51hfw50mj
Palapye;57dfzd0mj
Mochudi;526fwn0mj
Mahalapye;55ufyh0mj
Kanye;50nfud0mj
Selebi-Phikwe;58yg1c0mj
Letlhakane;5ajfv30mi
Ramotswa;50xfvv0mi
Lobatse;4zyfvc0mi
Mmopone;51rfvv0mi
Thamaga;51hfuy0mi
Mosopa;517fum0mi
Tonota;5agg0a0mh
Bobonong;58zg300mh
Gabane;51hfvm0mh
Ghanzi;59qfk50mh
Jwaneng;51ofsp0mh
Tutume;5d3fz30mh
Janeng;4zefuz0mh
=BY
Minsk;b3qg0l85p;明斯克|明斯克市|민스크|منسک|مينسك|ミンスク|Minsc|Mins'k|Minska|Minsko|Minszk|Myensk|Minscum|Minskaj|Minskas|Myenyesk|Minsk osh|Минск|Мінск|มินสก์|मिन्‍स्‍क|Минскай|Минск ош
Homyel';aznga285n;Гомел|Гомель|Гомељ
Hrodna;b34fq785m;Гродна|Гродно|Гародня
Vitebsk;b7bg7w85m;Витебск|Витьбьскъ|Витепск
Mahilyow;b3rg8a85m;Магілёў|Могилев|Могилёв
Brest;ayrfpw85m;Брест|Брэст|Берестя
Bobruysk;b1ng5585l;Бoбруйск|Бобруйск|Бабруйск
Baranovichi;b1lfw985l;Барановичи|Баранавічы
Barysaw;b4ng3685l;Барысаў|Борисов
Pinsk;aysfwf85k;Пинск|Пінск|Пінськ
Mazyr;aykg5685k;Мазыр|Мозырь|Мозир
Lida;b3ofua85k;Лида|Ліда
Orsha;b5fg8g85k;Орша
Soligorsk;b0ng0i85k;Солигорск|Салигорск|Солігорськ
Novopolotsk;b89g3f85k;Новополоцк|Новополоцьк|Наваполацк
Maladziečna;b4wfyl85k;Маладзечна|Молодечно
Polotsk;b85g3z85k;Полоцк|Полоцьк|Полотьскъ
Zhlobin;b0xg7e85k;Жлобин|Жлобін
Rechytsa;azgg8f85j;Рэчыца|Речица
Horad Zhodzina;b4ag2p85j;Жодзiна|Горад Жодзіна|Жодино
Svetlogorsk;b07g6m85j;Светлогорск|Светлагорск
Slutsk;b1ag0i85j;Слуцк|Слуцьк
Kobryn;az1fro85j;Кобрын|Кобрин|Кобринь
Slonim;b1hfuc85j;Слоним|Слонім
Vaukavysk;b1ofrx85i;Ваўкавыск|Вавкависк|Волковыск
Kalinkovichi;aytg5h85i;Калинковичи|Калинкавичы
Smarhoń;b5cfxc85i;Смаргонь|Сморгонь
Rahachow;b1hg7h85i;Рагачов|Рагачоў|Рогачов
Dzyarzhynsk;b34fzd85i;Дзяржынск|Дзјаржинск|Дзержинск
Osipovichi;b23g3j85i;Осиповичи|Асіпоповічы
Horki;b4tga385i;Горки|Горкі
Byaroza;azxfte85i;Бяроза|Берёза
Novogrudok;b2vfvq85i;Новогрудок|Навагрудак
Vileyka;b5dfyr85i;Вилейка|Вілейка
Smaliavičy;b42g2185i;Смолевичи|Горад Смалявічы
Luninyets;az5fyg85h;Лунинец|Лунінец
Krychaw;b38gc385h;Крычаў|Кричев
Ivatsevichi;b0ffue85h;Ивацевичи|Івацэвічы
Mar’ina Gorka;b2ng2785h;Марьина Горка|Мар’іна Горка
Fanipol;b3bfzx85h;Фаниполь|Фанiпаль
Pruzhany;azzfrx85h;Пружаны
Pastavy;b74fyj85h;Паставы|Пастави|Поставы
Dobrush;azlgaz85h;Добруш
Hlybokaye;b76g0x85h;Глыбокае|Глубокое
Stowbtsy;b2kfya85h;Столбцы|Стоўбцы|Столбци
Lyepyel’;b6gg3q85h;Лепель
Zaslawye;b41fzr85h;Заслаўе|Заславль|Заславъл
Kalodzishchy;b3ug1685h;Калодзішчы|Колодищи
Oshmyany;b56fw285h;Ошмяны|Ашмяны|Ошмяни
Bykhov;b2og7z85h;Быхов|Бихов|Быхаў
Nesvizh;b1ufy485h;Несвиж|Нясвіж
Ivanovo;ayvfux85h;Иваново|Іванава
Žytkavičy;az2g1e85h;Житкавичи|Жыткавычы|Жыткавічы
Logoysk;b4lg1d85h;Логойск|Лагойск
Astraviec;b5pfw485h;Астравец|Островец|Островцы
Shchuchyn;b2wfsr85h;Шчучын|Щучин
=BZ
Belize City;8am73022j
San Ignacio;89o70l22h
San Pedro;8bs73n22h
Orange Walk;8c872022h
Belmopan;89x71g22h
=CA
Toronto;abf7rg4hq;多伦多|多倫多|토론토|トロント|تورنتو|ٹورنٹو|Taronta|Torontu|Torontas|Torontum|Таронта|Торонто|टोरण्टो|टोरन्टो|โทรอนโต
Montréal;agf87l4hp;蒙特利尔|몬트리올|Monreal|Monreala|Monreyal|Manrehal'|Monrealis|Mont-real|Montreali|Montrealo|Mons Regius|Montreal City|Монреал|Манрэаль|مونترآل|مونتريال|モントリオール
Calgary;avt5332mo;卡加利|卡尔加里|캘거리|کلگری|کالگری|カルガリー|कैलगरी|कॅल्गारी|Kalgari|Kalgary|Kalqari|Kelgery|Calgaria|Kalgario|Kalgaris|Kalnkari|Калгари|Калгары|แคลกะรี
Ottawa;ag581q4ho;オタワ|渥太華|오타와|Atava|Otava|Otavo|Otawa|Ottaba|Ottava|Ottahua|Ottavae|Атава|Отава|اتاوا|اٹاوہ|ओटावा|ออตตาวา
Edmonton;b2r54t2mo;埃德蒙顿|에드먼턴|एडमंटन|एडमॉन्टन|エドモントン|ادمونتن|ایڈمنٹن|Edmuntun|Edmontona|Edmontono|Ehdmantan|Ehdmonton|Entmonton|Edmontonas|Edmundopolis|Едмонтон|Едмънтън|เอดมันตัน
Winnipeg;ask6e54ln
Mississauga;ab27qq4hn
Vancouver;aqt4e04jn
Brampton;abc7qf4hn
Hamilton;aa57q74hn
Surrey;aqf4et4jn
Québec;ak18e74hn
Halifax;ae08ze2xn
Laval;agl87b4hn
London;a9e7md4hn
Etobicoke;ab87qz4hm
Markham;abv7rt4hm
Vaughan;abs7r64hm
Gatineau;agc81q4hm
Victoria;aok4dd4jm
Saskatoon;ayt5np42m
Kitchener;aan7od4hm
Burnaby;aqv4eh4jm
Windsor;a7i7he4hl
Longueuil;agg87x4hl
Regina;au55te42l
Oakville;aap7qo4hl
Richmond;aql4dy4jl
Richmond Hill;abv7rc4hl
Burlington;aaj7q84hl
Nepean;afy81o4hl
Oshawa;aby7sz4hl
Greater Sudbury;aj57n14hl
Newton;aqh4er4jl
Gloucester;afz81x4hl
Saguenay;aoi8el4hl
Coquitlam;aqw4ey4jl
Barrie;adc7qp4hl
Rosemont–La Petite-Patrie;agi87j4hl
Villeray–Saint-Michel–Parc-Extension;agk87j4hl
Kelowna;ask4o34jl
Trois-Rivières;air8ah4hl
Guelph;aaz7p24hl
Lévis;ak08ea4hl
Mercier–Hochelaga-Maisonneuve;agl87p4hl
Abbotsford;aqa4gf4jl
Whitby;abw7sr4hl
St. Catharines;a9x7rw4hl
Ahuntsic-Cartierville;agl87d4hl
Le Vieux-Longueuil;agi87t4hl
Milton;aaw7q44hk
Langley;aqe4fa4jk
Kingston;acv7zk4hk
Cambridge;aag7ox4hk
Sherbrooke;ag48ca4hk
Orléans;aga82a4hk
Ottawa South;ag381r4hk
Saint-Louis-de-Terrebonne;agy8714hk
Ajax;abt7sh4hk
Saanich;aov4db4jk
Rivière-des-Prairies–Pointe-aux-Trembles;ags87m4hk
Terrebonne;agy87f4hk
Sainte-Foy;ajy8dz4hk
St. John's;am49tl49k
Thunder Bay;aoe7034hk
La Cité-Limoilou;ak38e54hk
Sydney;ai698u2qk
Le Plateau-Mont-Royal;agh87m4hk
Waterloo;aar7oc4hk
Ville-Marie;age87n4hk
Brantford;a9t7p14hk
Kamloops;aur4ls4jk
Lethbridge;as256m2mk
Whalley;aqm4ep4jk
Delta;aqd4e74jk
Chilliwack;aql4h94jk
Dartmouth;ae38ze2xk
Red Deer;az753w2mk
Niagara Falls;a9q7sd4hk
Saint-Laurent;age87d4hk
Saint-Jean-sur-Richelieu;afv88i4hk
Chomedey;agh8754hk
Pickering;aby7s74hk
Newmarket;acd7r94hk
Nanaimo;aql4bq4jk
Airdrie;awi5382mk
Kanata;afu8144hk
La Haute-Saint-Charles;ak98dr4hk
North Vancouver;ar04e54jk
Montréal-Nord;ago87h4hk
Le Sud-Ouest;agb87l4hk
Moncton;ai18w03kk
Peterborough;ad27ug4hk
Repentigny;ah287z4hk
Charlesbourg;aka8dy4hk
Saint-Hubert;age8824hk
Maple Ridge;aqq4fg4jk
Beauport;ak68e94hk
East Hastings;aqv4e64jk
Saint-Léonard;agn87k4hk
Willowdale;abl7rg4hk
Prince George;b3s4f14jk
New Westminster;aqp4el4jk
South Surrey;aq94ex4jk
Les Rivières;ak28e14hk
Caledon;abv7pt4hk
Stoney Creek;aa27qf4hk
Cloverdale;aqf4f34jj
Pierrefonds-Roxboro;age86w4hj
Nutana Sector;ayq5ns42j
Sarnia;a9e7j44hj
Sault Ste. Marie;aj87dr4hj
Saint John;afr8si3kj
Sherwood Park;b2o5582mj
Grande Prairie;b794q02mj
Confederation;ayu5nm42j
Brossard;ag987x4hj
Verdun;aga87n4hj
Chicoutimi;aoi8em4hj
Notre-Dame-de-Grâce;agc87j4hj
Fort McMurray;bbl5am2mj
Granby;ag489z4hj
Waterfront Communities-The Island;ab77ri4hj
Fleetwood;aql4ew4jj
Fort Garry South;asb6e44lj
Guildford;aqn4ew4jj
Hull;ag781p4hj
Medicine Hat;at05ck2mj
Fredericton;ahn8qt3kj
Halton Hills;ab87pz4hj
Brighouse-City Centre;aql4dz4jj
Downtown Vancouver;aqw4e04jj
Norfolk County;a8z7oq4hj
North Delta;aql4ek4jj
Drummondville;ahg8ao4hj
Pierrefonds;aga86r4hj
Port Coquitlam;aqv4ez4jj
St. Albert;b2z54c2mj
Aylmer;ag481f4hj
Saint-Michel;agl87i4hj
Aurora;ac87r94hj
Saint-Jérôme;ah686g4hj
Jonquière;aoi8e34hj
Woburn;abl7rx4hj
Metrotown;aqq4ec4jj
Welland;a9e7rv4hj
University Heights;ayu5ny42j
Lower Sackville;aee8z42xj
Renfrew-Collingwood;aqs4e84jj
Lakewood;ayr5nx42j
Belleville;acp7x24hj
Willowdale East;abl7rg4hj
North Bay;aio7r94hj
Saint-Hyacinthe;agr89c4hj
Whitchurch-Stouffville;ac87ro4hj
Kensington-Cedar Cottage;aqt4e54jj
Dollard-Des Ormeaux;agd86y4hj
Brandon;ash66d4lj
Cornwall;af284f4hj
West End;aqw4dz4jj
Langford;aol4cy4jj
Rouge;abo7s34hj
Blainville;agv86s4hj
Victoria-Downtown;aoj4dc4jj
West Vancouver;ar14dw4jj
Georgetown;ab97q04hj
L'Amoreaux;abo7rp4hj
Islington-City Centre West;ab77r24hj
Malvern;abp7ry4hj
Quinte West;acq7wj4hj
Chatham;a7t7jq4hj
Innisfil;ad27qr4hj
Kitsilano;aqv4dv4jj
Salaberry-de-Valleyfield;afp8634hj
Châteauguay;ag28754hj
Rimouski;aol8lo4hj
Saint-Eustache;agk86p4hi
Timmins;aon7m34hi
Sorel-Tracy;ahw88x4hi
Mission;aqh4ga4ji
Strawberry Hill;aqh4eo4ji
Val-des-Arbres;ago87c4hi
Stittsville;afp8144hi
Ancaster;aa27pt4hi
Woodstock;a9t7np4hi
Vernon;atn4op4ji
Bowmanville;ac07tg4hi
Boucherville;agn8804hi
Spruce Grove;b2p53k2mi
St. Thomas;a8t7mi4hi
Charlottetown;aif90n2xi
Okanagan Mission;ase4o44ji
Shawinigan;ajd89x4hi
Neufchâtel-Est–Lebourgneuf;ak58du4hi
Duvernay;agm87d4hi
Laval-des-Rapides;agk87a4hi
Stouffville;ac57rv4hi
Dovercourt-Wallace Emerson-Junction;abb7rc4hi
Sunset;aqq4e24ji
Core Neighbourhoods;ayt5np42i
Leamington;a6t7ik4hi
Rock Forest;ag08c04hi
Prince Albert;b1s5q742i
Downsview-Roding-CFB;abh7r74hi
Parkwoods-Donalda;abk7rn4hi
Rutland;asm4od4ji
Joliette;ahu8824hi
Cartierville;agh87a4hi
Mascouche;ah387k4hi
Mirabel;agt8684hi
Lawson;ayw5ns42i
Hastings-Sunrise;aqw4e94ji
Victoriaville;ahx8c34hi
Brant;a9t7ot4hi
Mimico;ab67r54hi
Moose Jaw;au05qv42i
Parc-Extension;agh87h4hi
Penticton;arg4nt4ji
Arcola East;au35tm42i
Fairview;aqu4dz4ji
Surrey City Centre;aqn4er4ji
Campbell River;asy4844ji
West Humber-Clairville;abg7qw4hi
Mount Pleasant;aqv4e24ji
Mt Pleasant;aqu4e24ji
Mount Olive-Silverstone-Jamestown;abj7qx4hi
LaSalle;a7c7ha4hi
Chestermere;avr53u2mi
Cochrane;aw65212mi
Snowdon;agd87h4hi
Lloydminster;b1z5ee2mi
Stratford;aah7n54hi
Chilliwack-Downtown;aqk4h84ji
Côte-Saint-Luc;agb87d4hi
Church-Yonge Corridor;aba7ri4hi
Willoughby;aqh4f84ji
Niagara;ab87rf4hi
Saint-Georges;ai38fp4hi
Orillia;adx7re4hi
Victoria-Fraserview;aqq4e54ji
Orangeville;ac07pi4hi
Fort Erie;a967sr4hi
Annex;abb7rg4hi
Glenfield-Jane Heights;abj7r54hi
Ville-Émard;ag987k4hi
Okotoks;aux53e2mi
Pointe-Claire;ag986y4hi
Bendale;abl7rv4hi
Desmarchais-Crawford;ag987m4hi
North Cowichan;apo4cf4ji
Mount Pleasant West;abe7rh4hi
Alma;aov8cz4hi
Killarney;aqr4e84ji
Grandview-Woodlands;aqw4e54ji
Agincourt North;abo7rs4hi
Sainte-Julie;agm88b4hi
West Kelowna;asi4nu4ji
Sept-Îles;atg8rm4hi
Courtenay;as148t4ji
Whitehorse;bmo3gv4ki
Fredericton Northside;ahq8qw3ki
Wexford/Maryvale;abj7rq4hi
South Riverdale;ab97rm4hi
Marpole;aqp4dz4ji
St. James-Assiniboia East;asl6dx4li
Banbury-Don Mills;abi7rl4hi
York University Heights;abl7r74hi
Port Moody;aqw4eu4ji
Tam O'Shanter-Sullivan;abm7rq4hi
West Hill;abl7s24hi
Saint-Constant;ag187n4hi
Grimsby;aa07qz4hi
Dieppe;ai08wb3ki
Conception Bay South;aly9ss49i
Don Valley Village;abm7rl4hi
Clairlea-Birchmount;abf7rs4hi
Bolton;abw7qi4hi
Milliken;abq7rq4hi
Boisbriand;agq86x4hi
Westminster-Branson;abm7rb4hi
Beltline;avs5352mi
Bay Street Corridor;aba7rh4hi
Vaudreuil-Dorion;ag486d4hi
Thetford-Mines;ai18dx4hi
Centretown;ag681q4hi
Walnut Grove;aqk4fc4ji
Coquitlam West;aqu4eo4ji
Downtown Halifax;ae18ze2xi
Val-d'Or;anm7vw4hi
Panorama Hills;aw35342mi
Prince Edward;ac87xf4hi
Sainte-Thérèse;ags86x4hi
Steveston;aqh4du4ji
Stonegate-Queensway;ab87r64hi
Dorset Park;abj7rs4hi
Brooklin;ac47so4hi
Fallingbrook;agc82c4hi
Fraser Heights;aqo4ey4ji
South Granville;aqu4dy4ji
Alta Vista;ag381u4hi
Steeles;abp7rn4hi
Bridlewood;aft81a4hi
Waterdown;aad7q44hi
Saint-Bruno-de-Montarville;agh8894hi
Saddle Ridge;aw153h2mi
Midland;aeb7q44hi
Coquitlam Town Centre;aqw4ew4ji
Chinatown;aqw4e14ji
East Gwillimbury;aci7rc4hi
Mile End;agg87k4hi
Outremont;agg87j4hi
High Park-Swansea;ab97r94hi
Brockville;adv81r4hi
Strathroy;a9c7la4hi
Newtonbrook West;abn7rd4hi
Squamish;as24dw4ji
Agincourt South-Malvern West;abn7rt4hi
White Rock;aq64ew4jh
Rouyn-Noranda;ao07si4hh
La Prairie;ag687u4hh
Bedford Park-Nortown;abh7re4hh
Tecumseh;a7k7hs4hh
Broadmoor;aqj4dz4jh
Ladner;aqd4e44jh
Paradise;am19t449h
Cariboo;aqt4eo4jh
Eglinton East;abi7rv4hh
Halifax West End;ae18za2xh
Vedder Crossing;aqe4h74jh
Chambly;ag988g4hh
Riley Park;aqs4e34jh
Mount Pearl;am09te49h
Englemount-Lawrence;abg7rc4hh
Edmonds;aqp4ei4jh
Birchcliffe-Cliffside;abd7rt4hh
Rockcliffe-Smythe;abb7r74hh
Duncan;api4ce4jh
High Park North;aba7r94hh
Willowridge-Martingrove-Richview;abc7r14hh
Kingsville;a6y7i74hh
Kingsview Village-The Westway;abe7r14hh
Flemingdon Park;abg7rn4hh
South Parkdale;ab87rc4hh
Collingwood;adk7p64hh
Black Creek;abk7r44hh
Tsawwassen;aq64e44jh
The Beaches;abb7rq4hh
Baie-Comeau;aqq8mp4hh
Bedford;ae98z52xh
Fort St. John;ba94kb2ih
Bayview Village;abm7ri4hh
East End-Danforth;abc7rq4hh
Owen Sound;adt7n64hh
Gordon Head;aoo4dg4jh
Dunbar-Southlands;aqs4dt4jh
Oakwood Village;abc7rc4hh
Uxbridge;aci7s84hh
Thorncliffe Park;abf7rl4hh
Townline;aqa4g44jh
Haney;aqq4fg4jh
Keswick;acx7r94hh
Varennes;agw8814hh
Rosedale-Moore Park;abc7ri4hh
Cranston;avd53e2mh
Clarence-Rockland;agj82v4hh
Evergreen;avh5322mh
Fergus;abf7oq4hh
Port Alberni;aqs49c4jh
Wasaga Beach;ado7pq4hh
Riverview;ahx8vy3kh
Renfrew Heights;aqt4e94jh
Moss Park;ab97rj4hh
Westmount;agc87k4hh
Kirkland;ag986t4hh
Ile-des-Soeurs;aga87p4hh
Camrose;b1a56k2mh
Lindsay;ad77tb4hh
Yellowknife;brh52b2mh
Cranbrook;ari4yf2mh
Templeton-Est;agd8214hh
Woodlawn;ae48zj2xh
Halifax South End;adz8ze2xh
Saint-Lazare;ag48634hh
L'Île-Bizard–Sainte-Geneviève;agd86q4hh
Huntsville;afx7ry4hh
Westwood Plateau;aqy4ex4jh
Lower Lonsdale;aqz4e54jh
Tuscany;aw052o2mh
Maywood;aqq4eb4jh
Terrace;b5g3ys4jh
North Battleford;b0m5j642h
Salmon Arm;auu4op4jh
Corner Brook;apz9f149h
Beaconsfield;ag786t4hh
Cole Harbour;ae38zo2xh
Dorval;ag98754hh
Mont-Royal;agg87f4hh
Beloeil;agl88n4hh
Alliston;acn7q54hh
Thorold;a9s7s04hh
Quispamsis;ag68st3kh
Dewdney East;au55tl42h
Evanston;aw45302mh
O'Connor-Parkview;abf7rp4hh
New Glasgow;agm91z2xh
North St.James Town;abb7ri4hh
Tillsonburg;a927nr4hh
Eringate-Centennial-West Deane;aba7qy4hh
Rivière-du-Loup;amv8iu4hh
Pitt Meadows;aqq4f74jh
Central Lonsdale;ar14e54jh
Downtown Eastside;aqw4e34jh
Hespeler;aan7ow4hh
Carey;aon4d94jh
Port Colborne;a967rx4hh
Wîhkwêntôwin;b2q54o2mh
Cobourg;ac47uv4hh
Auburn Bay;avd53g2mh
Blundell;aqk4dw4jh
Oak Bay;aol4di4jh
Stony Plain;b2p53c2mh
Weston;abe7r44hh
Kensington-Chinatown;ab97rg4hh
Amos;aox7v04hh
St. Andrew-Windfields;abk7ri4hh
Brookhaven-Amesbury;abe7r74hh
Esquimalt;aok4d74jh
Taradale;aw053i2mh
Fiddlesticks;aaj7oz4hh
Miramichi;akn8u23kh
Niagara-on-the-Lake;aa67sb4hh
Victoria Village;abh7rp4hh
McKenzie Towne;avf53f2mh
Laflèche;age87x4hh
Sylvan Lake;azb5342mh
Saint-Lin-Laurentides;ahd8734hh
Morningside;abn7rz4hh
Valley East;ajk7n04hh
Deux-Montagnes;agh86q4hh
Les Coteaux;afs85t4hh
Central Saanich;aox4d64jh
Coventry Hills;aw55362mh
Saint-Augustin-de-Desmaures;aju8dj4hh
Petawawa;ahh7xc4hh
Danforth East York;abd7rn4hh
Kennedy Park;abg7ru4hh
Vanier;ag881u4hh
Willowdale West;abl7rd4hh
Hillcrest Village;abo7rl4hh
University Endowment Lands;aqu4do4jh
Glace Bay;aic99g2qh
Colwood;aoj4cz4jh
Leaside-Bennington;abe7rj4hh
Mount Pleasant East;abe7ri4hh
Sainte-Catherine;ag487m4hh
Greenfield Park;agd87y4hh
Scarborough Village;abi7ry4hh
Brocklehurst;auv4lj4jh
Buckingham;agn82i4hh
Swift Current;ato5kk4eh
Edmundston;all8m73kh
Trinity-Bellwoods;ab97rf4hh
Clayton Park West;ae28z52xh
L'Ancienne-Lorette;ajz8dt4hh
Armdale;ae08z92xh
Clanton Park;abi7rb4hh
Stonebridge;ayo5nu42h
Yorkton;awa5zd42h
Lutes Mountain;ai68vp3kh
Sainte-Catherine;aio8af4hh
Lansing-Westgate;abj7re4hh
Newtonbrook East;abn7rf4hh
Seafair;aqj4du4jh
Bracebridge;af37ro4hh
Candiac;ag287s4hh
Cliffcrest;abg7rx4hh
L'Assomption;aha8814hh
Greater Napanee;acx7y94hh
Bathurst Manor;abk7ra4hh
Maillardville;aqs4ep4jh
Steinbach;arl6fg4lh
Pleasant View;abn7rm4hh
Lake Country;asx4oc4jh
Saint-Henri;agb87k4hh
Henry Farm;abl7rl4hh
Mont-Saint-Hilaire;agl88p4hh
Taylor-Massey;abe7rq4hh
Saint-Basile-le-Grand;agh88g4hh
Forest Heights;aam7oc4hh
Leduc;b1z54l2mh
Little Portugal;ab97rd4hh
Magog;afr8bl4hh
Humbermede;abj7r24hh
Edenbridge-Humber Valley;abb7r44hh
Central Coquitlam;aqu4es4jh
Christopher-Champlain;aaf7oy4hh
Lougheed;aqt4en4jh
Arbutus Ridge;aqt4dv4jh
Saint-Charles-Borromée;ahx87x4hh
Saint John West;afq8sg3kh
Vanier;aan7oj4hh
Edgemont;aw152x2mh
Saint-Vincent-de-Paul;agq87f4hh
Lawrence Park South;abg7rf4hh
Kenora;as96lj4lh
Sooke;aod4cb4jh
Harewood;aqj4bp4jg
=CC
West Island;608lcy8z8
=CD
Kinshasa;6lzf2j0tt;金夏沙|金沙薩|雷堡城|킨샤사|キンシャサ|Kinsas|Kincasa|Kinsasa|Kinsaso|Kinxasa|Kinchasa|Kinshase|Kinsjasa|Kinszasa|Kinchassa|Quinxassa|Leopoldstad|Leopoldville|کنشاسا|کنشاسہ|Киншаса|Киншасе|กินชาซา|किन्शासा
Lubumbashi;61mg0c0yp;盧本巴希|루붐바시|루붐바시 시|ルブンバシ|E'ville|Lubumbasi|Lubumbashy|Lubumbasis|Lumumbashi|Elizabethstad|Elisabethville|Elizabethville|Lubumbashi shaary|لوبمباشی|لوبومباشي|Лубумбаши|Лубумбашы|लुबुम्बाशी
Mbuji-Mayi;6gyfpj0yp;ムブジマイ|姆布吉马伊|Bakwanga|Mbuzhi-Mai|Mbuzhy-Mai|Boutzi-Magi|Mbudzi Maji|Mbuzhi-Maji|Мбужы-Маі|Мбужі-Маї|مبوجي ماي|مبوجی میی|म्बुजी-मायी
Kananga;6hmfma0yo;卡南加|카낭가|カナンガ|Lulua|Kanaga|Kanange|Luluaburg|Luluabourg|Канага|Кананга|كنانجا|کنانگا|कनांगा
Kisangani;6zgftz0yo;基桑加尼|키상가니|キサンガニ|کسنگانی|كيسانجاني|किसंगानी|Singitini|Kisanganis|Kisan'nkani|Stanleystad|Stanleyville|Кисангани|Кісангані
Bukavu;6r3g440yo
Kolwezi;649fur0yo
Likasi;63ifya0yn
Tshikapa;6g6fhs0yn
Kikwit;6k0fca0tn
Masina;6luf2r0tn
Mbandaka;6y5faq0tn
Goma;6tdg570yn
Matadi;6hsexe0tn
Uvira;6okg4y0ym
Bunia;72cg810ym
Boma;6hrew90tm
Mwene;66qfnj0ym
Butembo;6yeg5d0ym
Isiro;75pg0q0ym
Kindu;6pufw00yl
Kabinda;6gyfs00yl
Gandajika;6f9fqj0yl
Bandundu Province;6osf8a0tl
Kamina;69qftg0yl
Gemena;772fex0tl
Mwene-Ditu;6ejfp50yl
Kipushi;61cfzp0yl
Kalemie;6hhg530yl
Bumba;743fmf0tl
Mbanza-Ngungu;6jef1a0tl
Beni;6zdg5v0yl
Moanda;6hjeud0tk
Lisala;73zfjs0tk
Ilebo;6lzfh70yk
Tshilenge;63jfnm0yk
Inkisi;6jrf1t0tk
Bukama;68gfvt0yk
Bakwa;79hg040yk
Kambove;63tfxw0yk
Binga;74lfgy0tk
Lodja;6o8fpk0yk
Katwa;6y9g5f0yk
Mulongo;6c9fz00yk
Idiofa;6k7fef0tk
Kongolo;6j1fz00yk
Rutshuru;6upg5t0yk
Manono;6dqg040yk
Babamba;6yig0c0yk
Kasongo;6lpfy30yk
Bulungu;6lefbo0tk
Mweka;6kjfjw0yk
Kabalo;6h7fyr0yk
Baudhuinville;6ecg6m0yk
Buta;75rfsp0yk
Kanyama;6d4fr50yk
Miabi;6gqfoz0yk
Bolenge;6y0fam0tk
Kimpese;6ikf030tk
Basoko;71gfpm0yk
Hyosha;6zyg600yj
Gbadolite;79wfic0tj
Kalima;6irg2e0yj
Inongo;6snfat0tj
Kituku;6cyg7x0yj
Tshela;6k4evz0tj
Mangai;6mufe90tj
Kenge;6hzexy0tj
Nyunzu;6hgg1u0yj
Nioki;6qgf950tj
Yangambi;705frw0yj
Aketi;75mfq20yj
Mushie;6pmf700tj
Kutu;6qgfaf0tj
Dibaya-Lubwe;6mgff60tj
Mangina;6zog5f0yj
Luputa;6e4fpu0yj
Kirumba;6uzg5d0yj
Kayna;6wbg510yj
Boende;6x8fi00tj
Fungurume;64ifx40yj
Lusambo;6k6fp40yj
Zongo;7a2fbn0tj
Businga;77afi10tj
Watsa;76gg620yj
Bolobo;6s0f530tj
Lukula;6n9fqc0yj
Kipamba;6b7fxe0yj
Masi-Manimba;6kqf9p0tj
Aru;75yg9o0yj
Luebo;6j5fji0yj
Kasangulu;6laf250tj
Mangbwalu;73eg7g0yj
Kanyobagonga;6w2g510yj
Kabeya-Kamwanga;6hcfol0yj
Malemba;656fs70yj
Katanda;6vpg5k0yi
Lubero;6xkg580yi
Djugu;73cg8q0yi
Basankusu;71eff00ti
Dungu;6nyfcd0ti
Pweto;6ahg4a0yi
Lubao;6j1fvj0yi
Libenge;785fbs0ti
Kabare;6r2g3z0yi
Kampene;6o0fy30yi
Mokambo;5zhg2r0yi
Malemba-Nkulu;6bofyg0yi
Pepa;6cmg6q0yi
Demba;6iqflv0yh
Kasongo-Lunda;6g0f6q0th
Bondo;78lfpt0yh
Wamba;73zg1r0yh
Sake;6tng4o0yh
=CF
Bangui;7a4fbj06o
Bimbo;79ufb606m
Bégoua;7adfbh06m
Carnot;7bqf4406k
Berbérati;79uf3v06k
Bambari;7e1fhg06k
Bouar;7ehf3c06j
Bossangoa;7g1f8i06j
Kaga-Bandoro;7hffdb06j
Bangassou;7b6fne06j
Paoua;7i4f5o06j
Bria;7g6fl306j
Kouango;7bvffg06i
Bocaranga;7hff3g06i
Baboua;7e4f1706i
Alindao;7bzfix06i
Sibut;7dwfcz06i
Nola;77sf4l06i
Ippy;7fffiy06i
Ndélé;7ldfhd06i
Batangafo;7iafas06i
Mbaïki;78rf9z06h
Yaloké;7csf7i06h
Bozoum;7fkf5i06h
Abba;7ctf2306h
Dekoa;7fkfd006h
Bouca;7g3fas06h
Boali;7bcfad06h
Baoro;7drf4d06h
Zemio;7bzftu06h
Bossembélé;7cnf9106h
Bobangui;799fac06h
Kabo;7jefbr06h
=CG
Brazzaville;6m5f2g0ap;브라자빌|Braza|N'Tamo|Brazavil|Brazavilo|Brazzavil|Maya-Maya|Mprazabil|Brazavilis|布拉柴维尔|ブラザヴィル|Бразавил|Бразавіль|برازافيل|برازاویل
Pointe-Noire;6kqesy0ao;푸앵트누아르|ポワントノワール|pwanٹ nwar|pwanټ nwar|Пуэнт-Нуар|पॉइंट-नोयर|Puehnt-Nuar|Puent Nuaras
Dolisie;6mcev70ak
Nkayi;6meewx0ak
Kayes;6mcewx0aj
Impfondo;72ifa60aj
Ouesso;72hf4l0ai
Owando;6wof460ai
Sibiti;6nsex30ai
Loutété;6m2eyh0ai
Bouansa;6maey80ai
Gamboma;6ssf420ai
Loandjili;6ksesy0ah
Mossaka;6umf6o0ah
Mindouli;76mfbf0ah
Oyo;6usf4d0ah
Makoua;6y1f3f0ah
Loudima;6mkewb0ah
Mossendjo;6pteva0ah
Mouyondzi;6mxeyp0ah
Bétou;76ifbg0ah
Djambala;6qyf0z0ah
Pokola;71wf5c0ah
=CH
Zürich;allejr8wm
Geneva;aiced38wl
Basel;am4eh18wl
Lausanne;aj8eef8wl
Bern;akfegp8wk
Winterthur;alzek88wk
Luzern;akpej38wk
Sankt Gallen;alqem18wk
Lugano;ahtekw8wj
Biel/Bienne;akyeg58wj
Zürich (Kreis 11);alqejo8wj
Zürich (Kreis 3);alkejm8wj
Zürich (Kreis 9);almejk8wj
Thun;ajveh68wj
Bellinzona;aibel28wj
Köniz;akcegl8wi
Fribourg;ak0efv8wi
La Chaux-de-Fonds;akueez8wi
Schaffhausen;amiejz8wi
Zürich (Kreis 10);alpejm8wi
Chur;ak5emh8wi
Rapperswil;al7eki8wi
Uster;aljek88wi
Sitten;aifegg8wi
Zürich (Kreis 7);alleju8wi
Neuchâtel;akjef98wi
Emmen;akseiz8wi
Zug;al1ejo8wi
Yverdon-les-Bains;ajyeeg8wi
Vernier;aieecw8wi
Zürich (Kreis 6);alnejq8wi
Zürich (Kreis 2);aliejo8wi
Zürich (Kreis 9) / Altstetten;alnejl8wi
Zürich (Kreis 12);aloeju8wi
Lancy;aibecz8wi
Zürich (Kreis 4) / Aussersihl;almejo8wi
Montreux;aizef78wi
Frauenfeld;am4ekq8wi
Kriens;aknej18wi
Wetzikon;alhekg8wi
Wil;aluel58wi
Bulle;ajiefm8wh
Horgen;alaejw8wh
Kreuzlingen;amdeli8wh
Opfikon;alreju8wh
Aarau;alneic8wh
Zürich (Kreis 3) / Sihlfeld;allejn8wh
Renens;ajaeeb8wh
Dietikon;aloejc8wh
Baar;al4ejp8wh
Bülach;am0ejq8wh
Zürich (Kreis 6) / Unterstrass;aloejq8wh
Riehen;am6eh98wh
Vevey;aj2ef08wh
Dübendorf;aloejy8wh
Meyrin;aifecw8wh
Carouge;aiaed28wh
Baden;alvej38wh
Reinach;alyeh38wh
Olten;aljehy8wh
Martigny-Ville;ai2efn8wh
Wettingen;alvej58wh
Allschwil;am3egy8wh
Zürich (Kreis 11) / Oerlikon;alpejq8wh
Zürich (Kreis 11) / Seebach;alqejr8wh
Monthey;aihefb8wh
Jona;al7ekk8wh
Onex;aiaecy8wh
Zürich (Kreis 11) / Affoltern;alqejn8wh
Zürich (Kreis 10) / Höngg;aloejm8wh
Gossau;alqelp8wh
Muttenz;am0eh98wh
Nyon;aiuedc8wh
Sierre;ailegy8wh
Solothurn;al5egy8wh
Cham;al2eji8wh
Zürich (Kreis 9) / Albisrieden;allejl8wh
Burgdorf;akqeh78wh
Oberwinterthur (Kreis 2);am0ekd8wh
Kloten;alteju8wh
Pully;aj7eei8wh
Stadt Winterthur (Kreis 1);alxek88wh
Littau;akpeiy8wh
Zürich (Kreis 2) / Wollishofen;aliejp8wh
Grenchen;al3egk8wh
Einsiedeln;akxekb8wh
Locarno;ai9ekg8wh
Herisau;alnels8wh
Zürich (Kreis 10) / Wipkingen;aloejp8wh
Steffisburg;ajyeh78wh
Morges;aj7ee28wh
Zürich (Kreis 8);aljejs8wh
Seen (Kreis 3);alwekd8wh
Adliswil;alfejo8wh
Schwyz;akmek18wh
=CI
Abidjan;7cvdkw00r;阿必仁|阿比让|아비장|アビジャン|Abican|Abijan|Abiyan|Abidzan|Abigano|Abidzana|Abidzans|Abidzhan|Ampitzan|Abidzanas|Abizhan khot|Abidzhan shaary|Абиџан|Абиджан|آبدجان|آبیجان|आबिजान|अबिदजान|อาบีจาน
Abobo;7d2dku00p;Abobo-Gare
Bouaké;7jddi100o
Korhogo;7oadgd00n
Daloa;7h4de300n
Koumassi;7cqdkz00m
San-Pédro;7b7ddk00m
Gagnoa;7f1dfh00m
Yamoussoukro;7gydhc00m
Sinfra;7gedfl00m
Man;7ildb100m
Marcory;7crdkx00l
Bondoukou;7kcdo800l
Dabou;7ctdju00l
Divo;7e8dh400l
Anyama;7d9dkr00l
Soubré;7e2ddp00k
Abengourou;7gpdma00k
Bonon;7h9df700k
Duekoué;7gqdbl00k
Bouaflé;7hfdg200k
Séguéla;7k4ddh00k
Daoukro;7hmdl000k
Grand-Bassam;7chdlm00k
Vavoua;7iide000k
Bingerville;7cwdl700k
Agboville;7ehdkb00k
Danané;7i6d9d00k
Adzopé;7ezdla00k
Méagui;7d1dds00j
Ferkessédougou;7ondhl00j
Dimbokro;7ghdix00j
Issia;7g1ddp00j
Guiglo;7g6db700j
Zagné;7f9db800j
Agnibilékrou;7htdn400j
Katiola;7kmdhu00j
Aboisso;7d7dn300j
Oumé;7fqdgy00j
Toumodi;7g8di200j
Odienné;7ofdb000j
Tengréla;7r4de700j
Boundiali;7ogddz00j
Bonoua;7cndm000j
Ouangolodougou;7ppdhp00j
Doropo;7p9dmp00j
Affery;7fkdl100j
Zuénoula;7indf700j
Diégonéfla;7fhdgj00j
Bloléquin;7g9d9s00i
Hiré;7f7dhb00i
Djapadji;7cpdd200i
Arrah;7gjdkz00i
Fengolo;7gvdbh00i
Grand-Lahou;7cadi200i
Bongouanou;7ghdkc00i
Akoupé;7fqdl700i
Tanda;7jodn700i
Goya;7g8dbd00i
Ndouci;7eadis00i
Tiassalé;7eedim00i
Saïoua;7g1dek00i
Sassandra;7brdf300i
Ahouanou;7dbdii00i
Dianra;7muden00i
Balakouya;7chded00i
Béoumi;7jbdgi00i
Kahin;7h7dat00i
Buyo;7fgdck00i
Gligbeuadji;7cgdde00i
Lakota;7e9dg800i
Grand-Zattry;7f0ddu00i
Ancien-Prozi;7jbdcn00i
Bonoufla;7htde100i
Konéfla;7ghdgf00i
Zouan-Hounien;7h8d9700i
Tabou;7aadbl00i
Touba;7l0dao00i
M’Bengué;7psdfm00i
Gbapleu;7g0dc300i
Boboniessoko;7hdddi00i
Zaliohouan;7gwdeo00i
Diawala;7q3dgt00i
Kaouara;7q1dhl00i
Guépaouo;7fzdg500i
Yabayo;7eiddo00i
Luénoufla;7hndeo00i
Zou;7hedac00i
Gonaté;7h6deo00i
Niellé;7qcdge00i
Adiaké;7cpdmu00i
Tiébissou;7hwdhi00i
Bouna;7nrdno00i
Oupoyo;7dgddp00i
M’Batto;7fzdjw00i
Belleville;7f6dct00h
Belleville;7h3dcz00h
Bangolo Tahouake;7hkdc300h
Guibéroua;7fcdev00h
Biankouma;7jidav00h
Mabéhiri;7drde600h
Para;7dcdbn00h
Gabiadji;7bydds00h
Bédiala;7hwdeh00h
Tafiré;7n7dho00h
Dagbao I;7dgdfa00h
Gnatroa;7egdex00h
Bangolo;7hhdb700h
Gohouo;7hldbc00h
Niakaramandougou;7m2dhb00h
Fronan;7ktdhr00h
Biéby;7ewdlw00h
Dagadji;7c9dd300h
Galébré;7epdej00h
Moussadougou;7f3dg700h
Sahoua;7c2dem00h
Watté;7bqdd600h
Tortiya;7mddg700h
Touih;7cmddv00h
Aboisso Comoé;7dydmk00h
Niablé;7gidmx00h
Bécédi-Brignan;7efdkv00h
Guézon;7gqdc800h
Guézon;7g9dam00h
Bléniméouin;7htdc200h
Mankono;7kedet00h
Gnago;7ckdfw00h
Ahigbé Koffikro;7d1dmm00h
Mahapleu;7i2d9z00h
M’Bahiakro;7iqdjy00h
Doukouya;7fvdgk00h
Ogoudou;7eedho00h
Lobakuya;7c5dee00h
Ebilassokro;7fqdmp00h
Erémankono;7ehdi200h
Niapidou;7cvdf600h
Dabakala;7l8djp00h
Pélézi;7i8dd300h
Mignouré;7itdd500h
Rubino;7evdk100h
Dikodougou;7n7dfz00h
Azaguié;7dndko00h
Guéssabo;7gqdcp00h
Vrouo;7jeddt00h
Baoutifla;7i3de100h
Gbabam;7d7dgh00h
Bianouan;7epdn500h
Zaïbo;7hfddh00h
Bahé-Blaon;7gjdbm00h
Sakassou;7ipdhb00h
Maféré;7d2dnl00h
Okromodou;7cvdg800h
Touagui;7d3dds00h
Nambingué;7pxdh600h
Diourouzon;7h5db400h
Gadouan;7gidev00h
Kranzadougou;7g0dc000h
Petitgoa I;7f0ddd00h
Andé;7gudkn00h
Nzianouan;7epdim00h
Gbolouville;7e3dj200h
Bayota;7fydfh00h
Logoualé;7hrdb100h
Petit Grabo;7cndbp00h
Baibli;7hydbq00h
Loboville;7f2dd000h
Gagny;7c1dda00h
Zéaglo;7g8daa00h
Okrouyo;7e0de700h
Gnépasso;7budce00h
Flakièdougou;7lkdnb00h
Gaoulou;7bzdex00h
Kolia;7p5de200h
Aboka;7g6dd200h
Dignago;7fhdek00h
Zoukougbeu;7gsdcy00h
Kouibly;7i6dbw00h
Borotou-Koro;7lldc200h
Nizahon II;7fpdbg00h
Bognonzra;7hadff00h
Kong;7nfdj700h
Diéhiba;7h6dbf00h
Guéyo;7dtdf500h
=CK
Avarua;5b31k69qh
=CL
Santiago;4d28fr45r;圣地亚哥|聖地亞哥|산티아고|Stgo.|Santjago|Sant'jago|Santianko|Sanctiacobi|CiudadSantiago|Ciles Santjagas|サンティアゴ|Сантьяго|Сантјаго|سانتياغو|سانتیاگو|ซันติอาโก
Puente Alto;4cn8fy45n
Maipú;4cx8ff45n
Antofagasta;54b8gg45m
Viña del Mar;4ea8d945m
Valparaíso;4e88d145m
Ñuñoa;4d38fy45m
San Bernardo;4cp8fm45m
Puerto Montt;3qt89e45m
Arica;5io8gq45m
Peñalolén;4d18g345m
Temuco;3ye8ac45m
Concepción;43p89345l
Rancagua;4b38fi45l
Quilicura;4db8fl45l
La Pintana;4cq8ft45l
Iquique;5dv8h545l
Talca;47m8cz45l
Calama;57m8kk45l
Coquimbo;4mt8du45l
La Serena;4mx8e345l
Talcahuano;44088w45l
Chillán;44b8bq45l
Renca;4d88fl45l
Colina;4ds8fp45l
Alto Hospicio;5dp8ha45l
Osorno;3tb88v45l
Valdivia;3vf88j45l
Villa Mercedes;4248c245k
Quilpué;4e78dk45k
Copiapó;4tz8gn45k
Los Ángeles;41x8b145k
San Pedro de la Paz;43o88y45k
Punta Arenas;2uc8f140k
Coronel;43588u45k
Lo Prado;4d48fj45k
Curicó;48u8e445k
Lampa;4dj8f445k
Villa Alemana;4e78dr45k
San Antonio;4cp8d345k
Hualpén;43t88y45k
Peñaflor;4cn8f445k
Chiguayante;43f89545k
Ovalle;4l08e845k
Padre Las Casas;3yc8ac45j
Paine;4c38fi45j
Linares;46f8d545j
Quillota;4eo8e345j
Buin;4cb8fi45j
Padre Hurtado;4cr8fb45j
Melipilla;4cf8e645j
Los Andes;4et8fw45j
San Felipe;4f18fj45j
Talagante;4ci8ez45j
Tomé;44a89c45j
La Calera;4ex8e845j
Villarrica;3wv8bd45j
Hacienda La Calera;4ey8e645j
Lota;42z88s45j
Limache;4eb8e245j
Penco;43y89845j
Coyhaique;3fe8bt2fj
Vallenar;4qm8fg45j
Angol;4108a045j
San Vicente de Tagua Tagua;4ac8ek45j
Machalí;4b28fr45j
Concón;4ek8dc45i
Castro;3o187345i
Constitución;47v8av45i
Ancud;3pp86y45i
Molina;48h8e045i
San Javier;4748cr45i
San Clemente;47a8df45i
Placilla;4e18d745i
Cauquenes;4638b445i
Rengo;4af8f645i
Puerto Varas;3r889945i
Labranza;3yb89x45i
Santa Cruz;49s8dr45i
Lautaro;3yz8as45i
Chimbarongo;49l8eo45i
Calbuco;3pz88v45i
Panguipulli;3vw8b345i
Victoria;3zt8b345i
La Ligua;4fv8e545i
Curanilahue;41w88a45i
Cañete;41088645i
San Carlos;44u8c445i
Río Bueno;3tz89c45i
Las Animas;3vf88m45i
Nueva Imperial;3ye89d45i
Chillán Viejo;44a8bn45i
Longaví;4648cw45i
Vicuña;4mk8fl45i
Cabrero;4358aw45i
Mulchén;4188bc45i
Pucón;3ww8c545i
Parral;45m8ch45i
Nacimiento;41u8a545i
El Monte;4cg8eu45i
La Unión;3u389045i
Tocopilla;58n8h045i
Coihueco;4498ch45i
Arauco;42j88c45i
Casablanca;4dg8do45i
Carahue;3yh88s45i
Hualqui;43b89e45i
Collipulli;40l8at45h
Graneros;4bd8fj45h
Illapel;4i58eb45h
Llaillay;4es8ew45h
San Vicente;4ad8ek45h
Vilcún;3yl8bd45h
Freire;3xt8a945h
Lebu;41j87f45h
Quintero;4ex8db45h
Pitrufquén;3xp8a845h
Quellón;3m887i45h
Loncoche;3wn8a945h
Purranque;3sd88s45h
Cañete;41088445h
Los Álamos;41h87y45h
Cabildo;4fx8el45h
Paillaco;3up89k45h
Puerto Natales;2yb8al40h
Curacaví;4d88ef45h
Los Vilos;4hd8de45h
Cartagena;4ct8d345h
Colbún;46v8dn45h
Sagrada Familia;48s8dq45h
Quillón;43x8ap45h
La Cruz;4et8e545h
Traiguén;3zr8a545h
San Esteban;4ew8fy45h
El Quisco;4d88cv45h
Puerto Aysén;3fw8a32fh
Pozo Almonte;5dq8i545h
Batuco;4dp8fb45h
Chicureo;4dk8fr45h
Llanquihue;3re89745h
Caldera;4ut8fa45h
Coelemu;44n8a245h
Cunco;3xv8bx45h
Maullín;3qe87k45h
Teodoro Schmidt;3xp88z45h
Putaendo;4fd8fk45h
Frutillar;3rs89245h
=CM
Douala;799emy0jp;杜阿拉|두알라|Dual|Doula|Duala|Dualao|Ntouala|ドゥアラ|Дуала|دوالا|डुआला|दौआला|ดูอาลา
Yaoundé;78res00jo;耶溫得|雅温得|야운데|ヤウンデ|Jande|Jaunde|Yaunde|Jaundeh|Jaundeo|Yawunde|Giaounte|Яунде|Яўндэ|ياوندي|یاؤندے|याउंदे|ยาอุนเด
Bamenda;7ekeo70jm
Bafoussam;7d8eoy0jm
Maroua;7rfezs0jm
Ngaoundéré;7idexq0jm
Kumba;7awem90jl
Nkongsamba;7brenm0jl
Buea;79jelo0jl
Kousséri;7vkf1r0jl
Bertoua;7aqey00jl
Limbe;796ell0jk
Foumban;7dxeqa0jk
Kumbo;7f8epn0jk
Edéa;78keo50jk
Ébolowa;762eqz0jk
Dschang;7d4enx0jk
Tiko;79cem00jk
Kribi;766enj0jk
Mbalmayo;77sery0jk
Guider;7pleyr0jk
Sangmélima;765eta0jk
Melong;7c8eno0jk
Foumbot;7dbepj0jj
Bafia;7b7er70jj
Mbouda;7dneoh0jj
Mutengene;79delv0jj
Mora;7speza0jj
Meïganga;7g4ezq0jj
Yagoua;7qqf2b0jj
Loum;7b4en20jj
Bafang;7cceoa0jj
Mokolo;7rueyc0jj
Batouri;7abezx0jj
Banyo;7gresu0jj
Garoua Boulaï;7ecf0f0jj
Obala;79les10jj
Oku;7fdeoz0jj
Mbanga;7aieml0jj
Muyuka;79xem50jj
Bangangté;7caep90jj
Fundong;7fgeok0jj
Fontem;7d7eng0jj
Wum;7fqenz0jj
Manjo;7bgena0ji
Ngaoundal;7g2ewv0ji
Ndop;7enep00ji
Tibati;7fzev30ji
Tchéboa;7n3ewm0ji
Garoua;7nuex80ji
Pitoa;7o2exi0ji
Lagdo;7n6exz0ji
Yokadouma;77sf1t0ji
Kaélé;7q3f050ji
Bogo;7rtf0l0ji
Bandjoun;7cyeox0ji
Figuil;7p4eys0ji
Magba;7ejer60ji
Akonolinga;78heu10ji
Mbandjok;7adet20ji
Makak;77veqn0ji
Touboro;7jlf2o0ji
Nanga Eboko;7b0eud0ji
Eséka;785epx0ji
Nkoteng;7aketf0ji
Bali;7edent0ji
Blangwa;7xif0f0ji
Njombé;7aqemu0ji
Kekem;7ccenu0ji
Nkambe;7gfepn0ji
Bafut;7eweo20ji
Ambam;74merc0ji
Souza Gare;79remq0ji
Bamusso;7aeekq0ji
Guidiguis;7q5f0v0ji
Maga;7s4f1i0ji
Abong Mbang;792ewm0ji
Tombel;7b7emv0ji
Bélabo;7bpewy0ji
Okoa;792es80ji
Ekondo Titi;7asel40ji
Tcholliré;7lcezd0jh
Lolodorf;76zept0jh
Penja;7awemw0jh
Mamfe;7dzelv0jh
Dizangué;78henq0jh
Tonga;7btepq0jh
=CN
Shanghai;9cqn9e6du;沪|上海|上海市|상해|상하이|शंघाई|Sangaj|Sangay|Sanxay|Xangai|Ka Ting|Sanghaj|Sanghay|Sanhaja|Sanhajo|Shangai|Shangaj|Shanxay|Sjanghæ|Gaa Ding|San'nkae|Shankhaj|Sjanghae|Sjanghai|Szanghaj|Sanchajus|Schanghai|Seung hoi|Shang-hai|Sheung Hoi|Thuong Hai|Shanghai City|Shang-hai-shih|Шангај|Шанхай|شاڭخەي|شنگهای|เซี่ยงไฮ้
Beijing;a0vmvc6dt;北京|北京市|북경|베이징|پکن|بكين|Peken|Pekin|Beixin|Bejing|Pechin|Pekina|Peking|Pekini|Pekino|Peping|Pequim|Pequin|Pikkin|Beising|Beyjing|Beȝcinȝ|Dai Dou|Pechino|Pechinu|Pecinum|Pekinas|Pet-kin|Peycing|Bac Kinh|Baekging|Bak Ging|Bak Ping|Bejdzing|Pechinum|Yin Ging|Baek-ging|Behehzhin|Pei-ching|Pei-p'ing|Beijing Shi|Beijing City|Pei-ching-shih|Pei-p'ing-shih|Пекин|Пекін|बीजिंग|बेइजिङ|ปักกิ่ง
Shenzhen;8onmov6dt;宝安|寶安|新安|심천|선전 시|شن‌ژن|شينزين|Bao'an|Pao-an|Senzen|Sam Zan|Sen-cen|Sencjen|Sencsen|Senjeno|Senzden|Shenzen|Shendzen|Shumchun|Sendzenas|Sham Chan|Sham Chun|Shen-chen|Shen-chun|Shundzhun|Shiem Chun|Tham Quyen|Shen-ch'uan|Pao-an-hsien|Shen'chzhen'|Chhum-chun-su|Tschhimtschun|Shehn'chzhehn'|Shen-ch'uan-hsu|Shen-ch'uan-chen|Шенџен|Шънджън|षेंचेन|शेन्झेन|เซินเจิ้น
Guangzhou;8q8mml6dt;广州|広州|廣州|광저우|광저우 시|Koshu|Puyun|Cantao|Canton|Fan-yu|Kanton|Guangsu|Hiroshu|Kantono|P'an-yu|Guanczou|Guand'ou|Guandzou|Guangjow|Guanzhou|Quancjou|Guanchjou|Guandzhou|Guangdzou|Guangdzov|Guong-ciu|Gwong Zau|Kwangchow|Quancheum|Guanchzhou|Gvangjcouh|Kuang-chou|Kwangtsjou|Kwong Chau|Quang Chau|Shengcheng|Kong-chu-su|Kouang-chou|Kwang-chowfu|Guangzhou Shi|Kng-chiu-chhi|Kouan'nktsoou|Kuang-chou-shih|Guaңҗu|Гуаңҗу|غوانزو|کانتون|क्वांगचौ|ग्वांगझोउ|กว่างโจว
Chengdu;9b7lx36dt;天府|成都|成都市|छंतू|चेंगदू|청두 시|Cendu|Cengdu|Chendu|Chundu|Tianfu|Tin fu|Cengduo|Chehndu|Csengtu|Sing-du|Txengdu|Cwngzduh|Hua-yang|Thanh Do|Thành Đô|Ccheng-tu|Ch'eng-tu|Sang-tu-su|Chengdu Shi|Tsen'nkntou|Seng-to-chhi|Ch'eng-tu-shih|Ch'eng-tu-hsien|Ченду|Чънду|چنگدو|تشنغدو|เฉิงตู
Tianjin;9yqmxi6ds;天津|天津市|천진|톈진 시|تیانجن|تيانجين|Tiencin|Tjencin|Tianjing|Tiantzin|Tiencsin|Tiendzin|Tientsin|Tjandzin|Tjangino|Tehnd'iin|Thien Tan|Tjandzina|Tyantszin|T'ien-chin|Tchien-tin|Thien-tsin|Tiandzinas|Tjan'czin'|Tyan'czin'|T'ien-ching|Tianjin Shi|T'ien-ching-shih|Тјенцин|Тиендзин|तिआंजिन|त्यांजिन|เทียนจิน
Wuhan;9aympf6ds;武汉|武漢|武汉市|Uhan|Uxan|Owhan|Uhana|Ukhan|Vuhan|U-hang|Uhanas|Vu Han|Vuhani|Vuhano|Vujhan|Vukhan|Gouchan|Wu-chan|Vu-hon-su|Wuhan Shi|Bu-han-chhi|Wu-han-shih|Ухан|Үһән|وهان|ووهان|우한 시|वूहान|อู่ฮั่น
Dongguan;8pymnz6ds;东莞|東莞|东莞市|둥관 시|Dunguan|Tungkun|Tungkuan|Deng-uang|Ntonkouan|Tung-kuan|Đông Hoản|GJong Hoan|Tung-kon-su|Dongguan City|Tong-koan-chhi|Dongwen shehiri|Дунгуан|Донггуан|دونگوان|ڈwngwan|डोंग्गूआन
Xi’an;9l6mal6ds;西安|西安市|Sian|Sjan|Xian|Siana|Siano|Hsi-an|Sianas|Sianfu|Siking|Singan|Tay An|Hsingan|Singano|Ch'ang-an|Hsi-ching|Si-Gan-Fu|Xi'an Shi|Hsi-an-shih|Hsi-ching-shih|Ch'ang-an-hsien|سیان|شيآن|शिआन|시안 시|Сиань|Сіань|ซีอาน
Nanjing;9f2n1y6ds;南京|南京市|난징|남경|ننجنگ|نانجنگ|Namkin|Nankin|Nankijn|Nanking|Nanquim|Nanquin|Nam Kinh|Nan'czin|Nan'zhin|Nanchino|Nandzing|Nankinas|Nankingo|Nanzging|Nan-ching|Nanchinum|Nandzjina|Nang-ging|Nam-kin-su|Nantsin'nk|Nanjing Shi|Nan-ching-shih|Нанкин|Нанкін|नांजिंग|नानजिंग|หนานจิง
Hangzhou;9a5n5s6ds;杭州|杭州市|항주|항저우|Hang|Hanczou|Handzou|Hancheum|Hangchow|Hangcsou|Hangdzou|Hanggouo|Hong-ciu|Khanzhou|Xanchjou|Xangzhou|Chang-cou|Hang Chau|Hang-chou|Hangtsjou|Hangzcouh|Khandzhou|Khangdzou|Khangzhou|Hanchow-fu|Hang-hsien|Khanchzhou|Hong-chu-su|Chan'nktsoou|Hangzhou Shi|Hangzhou City|Hang-chiu-chhi|Hang-chou-shih|Ханжоу|Хангџоу|هانگژو|ہانگژو|हांगचौ|हांगझोऊ|หางโจว
Foshan;8pzmm96ds;佛山|仏山市|佛山市|포산 시|Fosan|Fachan|Fo-san|Fosjan|Namhoi|Nanhoi|Fak San|Fatshan|Fo Shan|Fosanas|Nan-hai|Nom Hoy|Fuk Shan|Fut Shan|Huk-sang|Phat Son|Fut-san-su|Hotokeyama|Foshan City|Fo-shan-chen|Fo-shan-shih|Fu-shan-chen|Hut-san-chhi|Nanhai-hsien|Фошан|Фошань|فوشان|فۇشەن شەھىر
Chongqing;984m406dr;重庆|重慶|重庆市|충칭 시|Yuzhou|Chuncin|Cunkinq|Yu-chou|Congcing|Cuncjina|Pa-hsien|Chongking|Chungking|Congcingo|Csungking|Congcingas|Trung Khanh|Tshung-khin|Tsjoengking|Cchung-cching|Ch'ung-ch'ing|Chongqing Shi|Ch'ung-ch'ing-shih|Чунцин|Чунцін|ฉงชิ่ง|چونگچنگ|چونگ کنگ|चोंगछिंग|चोंग्किंग
Wuzhong;9vjm306dr;吴忠|吴忠市|吴忠镇|Wu-chung|Uchzhunpu|Wu-chung-p'u|Wu-chung-pao|Wuzhong Xian|Wuzhong Zhen|Wu-chung-shih
Qingdao;9q6n6e6dr;青岛|青島|青岛市|칭다오 시|Cindao|Sindao|Chindao|Cingdao|Cjindao|Ching-do|Csingtao|Tsingtao|Tsingtau|Thanh Đảo|Cching-tao|Ch'ing-tao|Thanh GJao|Tsin'nktao|Qingdao Shi|Chheng-to-chhi|Ch'ing-tao-shih|Циндао|Ціндао|چنگڈاؤ|chngڈaw|चिंगदाओ|ชิงเต่า
Shenyang;a63nev6dr;沈阳|瀋陽|沈阳市|선양|심양|Шънян|Шеньян|Mukden|Moukden|Senjana|Senjang|Senyanq|Shenyan|Shunjan|Sen-jang|Senjango|Shen'jan|Shenjang|Sjenyang|Senjangas|Shehn'jan|Shengking|Sing-iong|Swnjyangh|Feng-t'ien|Tham Duong|Sen'gian'nk|Shenyang Shi|Sim-iong-chhi|Shehn'jan khot|Shen-yang-shih|Shen-yang-hsien|شنيانغ|شنیانگ|शेनयांग|षन्यांग|เสิ่นหยาง
Suzhou;9cyn706dr;苏州|蘇州|苏州市|سوجو|سوژو|Суџоу|Сүжоу|सूझोऊ|ซูโจว|쑤저우 시|Su-ciu|Su-cou|Sudzou|Sugouo|Soochow|Su-chou|Suchjou|Sudzhou|Sutsjou|Szucsou|To Chau|Soutsoou|Suchzhou|Wu-hsien|Su-chu-su|Suzhou Shi|So-chiu-chhi
Puxi;9csn9f6dr;浦西
Pudong;9csn9i6dr;浦东|上海浦东|浦东新区|Pudun|Pootung|P'u-tung|Phố Đông|Pho GJong|Пудун
Harbin;ah3nnt6dr;哈尔滨|哈爾濱|哈尔滨市|ハルビン|هاربن|ہarbn|하얼빈 시|Xarbin|Charbin|Harbina|Harbino|Harbinq|Kharbin|Charmpin|Ha'erbin|Pinkiang|Charbinas|Ha-erh-pin|Harbin Shi|Pin-chiang|Harbin-chhi|Ha-erh-pin-shih|Pin-chiang-hsien|Харбин|Харбін|हारबिन|हार्पिन|ฮาร์บิน
Hefei;9eimxs6dr;合肥|合肥市|خفي|هفئی|हफै|हेफ़ेई|Hefej|Hefey|Hofej|Chefei|Hefejo|Heyfey|Ho-fei|Khefej|Khufej|Luchow|Che-fej|Hak-bui|Hefejus|Hop Phi|Hozfeiz|Lu-chou|Lunchow|Khehfehj|Luchowfu|Hefei Shi|Ho-fei-shih|Hap-pui-chhi|Ho-fei-hsien|Хефей|Хефеј|허페이 시|เหอเฝย์
Dalian;9y3n9s6dr;大连|大連|旅大|대련|다롄 시|Luta|Lüda|Dalny|Lu-ta|Lueda|Lueta|Dairen|Dal'niy|Daljan'|Ntalian|Ta-lien|Dalian Shi|Lu-ta-shih|Dalian City|Ta-lien-shih|Далянь|داليان|دالیان|ต้าเหลียน
Changchun;abwnk46dr;長春|长春|長春市|장춘|창춘 시|Cancun|Cancuna|Cangcun|Cangcuno|Chanchun|Hsinking|Cangcunas|Cangzcenh|Csangcsun|Hsin-chin|Changchuen|Hsin-ching|Diong-chung|Truong Xuan|Tschangtung|Cchang-cchun|Changchun Shi|Kwan-cheng-tze|Chhong-chhun-su|K'ua-ch'eng-tzu|Tiong-chhun-chhi|Ch'ang-ch'un-shih|Ch'ang-ch'un-hsien|Чанчун|Чанчунь|چانگچون|چانگ چون|चांगचून|छांगछुन
Xiamen;8u0n006dr;厦门|廈門|厦门市|Amoy|Ha Mon|Shamen|Siamen|Sjamen|Sjamun|A-muong|Hiyamin|Sia-men|Sjamyn'|Hsia-men|Hsziamen|Siamenas|Sjamehn'|Ssu-ming|Ha-mun-su|E-mng-chhi|Xiamen Shi|Xiamen City|Hsia-men-shih|Szeming-hsien|Ssu-ming-hsien|샤먼 시|Сямън|Сямень|شيامن|شیامن|เซี่ยเหมิน
Bao'an;8onmoc6dr
Wuxi;9dpn656dr;无锡|無錫|无锡市|Уси|Усі|Usis|Vusi|U-sek|Vusio|Wu-si|Wusih|Vuhszi|Vuzsiz|Wu-hsi|Vo Tich|Wuxi Shi|Wusihsien|Bu-sek-chhi|Wu-hsi-shih|Wusih-hsien|Wu-hsi-hsien|ووشي|ووشی|우시 시|อู๋ซี
Jinan;9rvmx06dr;济南|済南|濟南|جنان|جينان|지난 시|Ђинан|Дзинан|जीनान|Csinan|Dzinan|Ginano|Szinan|Te Nam|Ti-nan|Tsinah|Tsinan|Tzinan|Ca-nang|Chi-nan|Cijnanz|Cinanum|Czinan'|Zhinan'|Dzinanas|Dzjinana|Jinan Shi|Li-ch'eng|Chi-nam-su|Tsi-nan-fu|Che-lam-chhi|Chi-nan-shih|จี่หนาน
Taiyuan;9v7mko6dr;太原|太原市|Yanka|Yangku|Taijuan|Tajjuen|Tajjüan|Tajuano|Tayyuan|Daiyienz|Taijuana|Tajjuean|Tajuanas|Taigiouan|Taiyuenum|Yang-ch'u|Tai-nguong|Taiyuan-fu|Tchaj-jüan|Taiyuan Shi|Tchaj-juean|Thai Nguyen|T'ai-yuan-shih|Thai-goan-chhi|Тайюен|Таијуан|타이위안 시|تاییوان|تاي يوان|ताइयुआन|थाय्युआन|ไท่หยวน
Zhengzhou;9mkmnp6dr;郑州|鄭州|郑州市|चंचौ|झेंगझोऊ|Cheng|Cencou|Cengcou|Zengzou|Ceng-cou|Cjencjou|Cwngcouh|Dang-ciu|Dzendzou|Genggouo|Chengchow|Csengcsou|Czengczou|Dzengdzou|Dzengdzov|Tsentsoou|Cheng-chou|Dzhundzhou|Trinh Chau|Zhengtsjou|Cheng-hsien|Chzhenchzhou|Chzhehnchzhou|Zhengzhou Shi|Chhiang-chu-su|Cheng-chou-shih|ژنگژو|ژینگژو|정저우 시|Жөнжоу|Џенгџоу|เจิ้งโจว
Shijiazhuang;9vomq06dq;石家庄|石家荘|石家莊|스자좡 시|Chentow|Shih-men|Chen-t'ou|Siciyajuang|Sigjaguango|S'-tia-cuang|Shicziyajuan|Shihkiachwan|Shizhjazhuan|Sicsiacsuang|Sidzjadzuana|Sidzjadzuang|Sioh-ga-cong|Sitziazouank|Shih-men-shih|Shihjiazhuang|Shihkiachwang|Shudzjadzhuan|Swzgyahcuengh|Shiczjachzhuan|Sidziadzuangas|Shitszyachzhuan|Shih-chia-chuang|Shih-chuang-shih|Shijiazhuang Shi|Chioh-ka-chng-chhi|Shih-chia-chuang-shih|Шижяжуан|Шиђаџуанг|شیجیاژوانگ|شجیا جھوانگ|ฉือเจียจวง|शिजियाझुआंग|ष-च्याच्वांग
Kunming;8vkltc6dq;昆明|昆明市|쿤밍 시|Kunmin|Kun'min|Kunmina|Kunminq|Yun-nan|Con Minh|Kounmink|Kuenming|Kunmingo|Yunnanfu|Kong-ming|Kunmingas|Gvwnhmingz|Kchun-ming|Kunming Shi|K'un-ming-shih|Khun-beng-chhi|Kun'min shaary|K'un-ming-hsien|Кунмин|Kүn'min|کونمنگ|كونمينغ|कुनमिंग|คุนหมิง
Zhongshan;8okmmy6dq;中山|中山市|중산 시|Zongsan|Cung-san|Dzungshan|Trung Son|Xiangshan|Chzhunshan'|Chung-san-su|Zhongshan Shi|Jongshen shehiri|Џунгшан|Чжуншань
Nanning;8pem8w6dq;南宁|南寧|南宁市|난닝 시|Nanin|Naning|Nannin|Nan'nin|Naningo|Nannina|Nanninq|Nam Ninh|Nan-ning|Naningas|Namzningz|Nang-ning|Yung-ning|Nam-nen-su|Nanning Shi|Lam-leng-chhi|Nan-ning-shih|Yung-ning-hsien|Нанин|Нанинг|نانينغ|نانينگ|नाननींग|หนานหนิง
Shantou;8qvmw46dq;汕头|汕頭|潮汕|Laiwu|Santau|Santou|Santov|Swatow|Ciu San|San Tau|Santouo|Shantow|Sjantou|Sán Đầu|Chaoshan|San GJau|Sang-tau|Shan'tou|San-tchou|San-theu-su|Shan-t'ou-shih|شانتو|شانتوؤ|산터우 시|Шантоу|Шаньтоу|ซัวเถา
Fuzhou;8yen3f6dq;福州|福州市|فوجو|فوژو|फूचौ|फ़ूझोउ|Fuzov|Fu-cou|Fuchau|Fucheu|Fucjou|Fucsou|Fudzou|Fugouo|Minhow|Focheum|Foochow|Fouzhou|Fu-chou|Fudzhou|Futsjou|Fuzcouh|Hok-ciu|Lin-sen|Min-hou|Foutsoou|Fuchzhou|Min Hsien|Phuc Chau|Fuk-chu-su|Fu-chou-shih|Minhow-hsien|Hok-chiu-chhi|Lin-sen-hsien|Min-hou-hsien|Min-hou-hsien-ch'eng|Фуџоу|Фуджоу|푸저우 시
Ningbo;990n9n6dq;宁波|寧波|宁波市|닝보 시|Ninbo|Ningpo|Ning-po|Ninh Ba|Nen-po-su|Yin-hsien|Ning-hsien|Ningbo Shi|Ning-po-shih|Chiang-pei-an|Leng-pho-chhi|Нинбо|Нінбо|ننگبو|نانگبو|หนิงปัว
Puyang;97un516dq;浦阳|浦阳街道|Pujiang|Pukiang|P'u-chiang|Pukianghsien|P'u-yang-chen|Puyang Jiedao|P'u-chiang-hsien-ch'eng
Shiyan;9gpmfq6dq;十堰|十堰市|스옌 시|S-jen|Shijen|Shujen|Shijan'|Sek-ieng|Shih-yen|Thap Yen|Shiyan Shi|Chap-ian-chhi|Shih-yen-chen|Shih-yen-shih|Шиянь|Шијен|شییان
Tangshan;a04n0a6dq;唐山|唐山市|탕산 시|Таншан|Тангшан|Tangsan|Tanshan|Tangsano|Tongshan|Tan'nksan|Tangsanas|GJuong Son|Tchang-san|T'ang-shan-chen|T'ang-shan-shih|تانگشان|تاڭشەن شەھىرى|तांग्शान
Lüliang;9u8mgq6dq;吕梁市
Changzhou;9e9n576dq;常州|常州市|Wujin|Wutsin|Wu-chin|Cangdzou|Cangdzov|Canggouo|Chandzhou|Changchow|Changdzou|Csangcsou|Siong-ciu|Cchang-cou|Chanchzhou|Changtsjou|Ch'ang-chou|Thuong Chau|Chang-chow-fu|Chanzhou khot|Wu-chin-hsien|Siong-chiu-chhi|Ch'ang-chou-shih|창저우 시|چانگژو|چاڭجو شەھىر|Чангџоу|Чанджоу
Zibo;9s7mzy6dq;淄博|シ博市|淄博市|C-po|Czybo|Dzubo|Tzu-po|Cu-bauk|Truy Bac|Zhangdian|Chang-tien|Chu-phok-chhi|Chang-chou-shih|Chang-tien-shih|زيبو|زیبو|쯔보 시|Дзъбо|Цзыбо
Changsha;94cmlt6dq;長沙|长沙|長沙市|창사 시|Cansa|Cangsa|Chansha|Csangsa|Cangzsah|Changsja|Diong-sa|Cchang-sa|Truong Sa|Tsan'nksa|Chhong-sa-su|Tng-soa-chhi|Changsha City|Ch'ang-sha-shih|Ch'ang-sha-hsien|Чанша|Чангша|ฉางชา|چانگشا|تشانغشا|चांगशा|छांग्षा
Guiyang;8zum4g6dq;貴陽|贵阳|貴陽市|Guyan|Gujjan|Guyyan|Quyinq|Guejang|Guejjan|Guijang|Kweichu|Goi-iong|Guijango|Kuei-chu|Kweiyang|Guijangas|Gveiyangz|Kuei-yang|Kuej-jang|Queiyanga|Quy Duong|Kweiyangfu|Guiyang Shi|Kui-iong-chhi|Kuei-yang-shih|Гуйян|Ґуйян|구이양 시|غوييانغ|گوئیانگ|गुइयांग|กุ้ยหยาง
Ürümqi;aboknc6nq;迪化|乌鲁木齐|烏魯木齊|ウルムチ|Dihua|Tihwa|Dikhua|Ti-hua|Tikhua|Tikhva|Urumci|Öremçe|OEremce|Tihwafu|Urumchi|Urumchy|Urumcio|Urumcis|Urumczi|Urumtsi|Urunchi|Ürümcsi|O'rumchi|UEruemci|UEruemqi|Urumptsi|Urumutsi|Wulumuqi|Ouroumtsi|UEruemcsi|Urumtschi|Ouroumtchi|Urumi City|Wurumch'ih|Ürümchi-sṳ|Ti-hua-shih|Ürümqi-chhī|Ti-hua-hsien|UEruemchi-su|Ti-hua-ch'eng|UEruemqi-chhi|Wu-lu-mu-ch'i|Wu-lu-mu-ch'i-shih|Урумчи|Урумчы|ارومچی|ئۈرۈمچى|उरुमची|उरुम्छी|우루무치 시|อุรุมชี
Lanzhou;9q6lwg6dq;兰州|蘭州|兰州市|لانژو|لان جو|란저우 시|Kaolan|Lan-cou|Lanchow|Lancjou|Lancsou|Landzou|Landzov|Langouo|Lan Chau|Lan'zhou|Lan-chou|Lanchjou|Landzhou|Lang-ciu|Lantsjou|Lantsoou|Lanzcouh|Lanchowfu|Lan'chzhou|Lanzhou Shi|Kao-lan-hsien|Lan-chiu-chhi|Lan-chou-shih|Lan'chzhou shaary|Ланџоу|Ланджоу|लान्झू|หลานโจว
Huizhou;8q7mpu6dq;恵州|惠州|恵州市|هویژو|ہوئیژوؤ|후이저우 시|Hie-ciu|Hujdzov|Waichow|Weichow|Hue Chau|Hui-chou|Hui-yang|Huitsjou|Waiyeung|Chuej-cou|Fi-chu-su|Khuejdzou|Kuei-shan|Waichowfu|Huichou-fu|Khojchzhou|Khuejchzhou|Khuehjchzhou|Hui-chiu-chhi|Hui-chou-chen|Xuyjo shehiri|Hui-chou-ch'eng|Хойчжоу|Хуејџоу
Haikou;8hnmej6dq;海口|海口市|هايكو|هایکو|Haikow|Hajkou|Haykou|Heihow|Hoihau|Hoihow|Hai-kau|Hajkouo|Hoi Hao|Khajkou|Hai Khau|Haijgouj|Haik-how|Chaj-kchou|Haikou Shi|Ha k'uo-shih|Xeyko shehir|Hai-k'ou-shih|Hai-khau-chhi|Hai-k'ou-so-ch'eng|Хайкоу|Хајкоу|हाइकोऊ|하이커우 시
Linyi;9nen0q6dq;临沂|臨沂|临沂市|لنیی|لینیای|린이 시|Ichow|Lin'i|Linji|I-chou|Yichow|Ichowfu|Ling-gi|Lam Nghi|Lan-shan|Lin-i-shih|Liuyihsien|Lim-ki-chhi|Lin-i-hsien|Линьи|Линји
Baoding;9xzmsq6dq;保定|保定市|바오딩 시|Baodin|Baodina|Bo-deng|Bảo Định|Pao-ting|Bao GJinh|Baodingas|Tsingyuan|Ching-yuang|Po-teng-chhi|Pao-ting-shih|Bawding shehiri|Tsingyuan-hsien|Ch'ing-yuan-hsien|Баодин|Баодін|باوڈنگ|بائودینگ|เป่าติ้ง
Minhang;9cfn956dq;闵行|Ming-hang|Shang-hai|Min-hang-chen
Bazhong;9ejm4i6dq;巴中|巴中市|바중시|Бачжун|باژانگ|باتشونغ|Bachzhun
Wenzhou;93sn776dq;温州|温州市|溫州市|ونژو|ونتشو|원저우 시|Vengou|On Chau|Ung-ciu|Vencsou|Vendzou|Wen-cou|Wenchow|Whenzou|Yongjia|Yungkai|Yungkia|Uundzhou|Wen-chou|Wentsjou|Yung-chia|Ven'chzhou|Vun-chu-su|Wenchow-fu|Vehn'chzhou|Wenzhou Shi|Un-chiu-chhi|Wen-chou-shih|Wenju shehiri|Yungkia-hsien|Yung-chia-hsien|Венџоу|Уънджоу
Yunfu;8ppmj86dq;云浮|雲浮|云浮市|ینفو|یانفو|윈푸 시|Юньфу|Jun'fu|Wanfow|Hung-pu|Juen-fu|Tung-an|Van Phu|Yun-fou|Yun-ch'eng|Hun-phu-chhi|Yun-fou-hsien|Yun-ch'eng-chen
Huai'an;9jbn2m6dq;淮安|淮安市|화이안시|Хуајан|Хуайань|Huaiyin|Hwaiyin|Khuajan|Chuaj-an|Huai-yin|Qingjiang|Tsinkiangpu|Tsingkiangpo|Ch'ing-chiang|Huai-yin-shih|Hwaiyin-hsien|Huai-yin-hsien|Huai-yin-ch'eng|Ch'ing-chiang-p'u|Ch'ing-chiang-shih
Nanchang;95omtt6dp;南昌|南昌市|난창 시|Nancan|Nancana|Nancang|Nancano|Nanchan|Nan'chan|Nancsang|Nam Xuong|Nancangas|Nancianga|Nanzcangh|Nan-cchang|Nanchang-fu|Nang-chiong|Nam-chhong-su|Nan-ch'ang-shih|Lam-chhiong-chhi|Nan-ch'ang-hsien|Нанчан|Нанчанг|ننچانگ|نانچانگ|नानचांग
Hohhot;a3dmi56dp;呼市|呼和浩特|フフホト市|フフホト|Хохот|Хох хот|هوهوت|ہوہوٹ|होहोत|होह्होट|ฮูฮอต|Hohoto|Hou-ho|Hoxhot|Huhhot|Hohotas|Huhehot|Khokhot|Kweihwa|Kweisui|Suiyuan|Kuei-hua|Kuei-sui|Hohhot-su|Huhehaote|Chöch Chot|Hohhot Shi|Huhe Hoter|Khokh khot|Kuku-khoto|Choech Chot|Hohhot-chhi|Khukh-Khoto|Hu-ho-hao-t'e|Kuei-sui-shih|Kwei-hwa-ting|Kweisui-hsien|Kuei-sui-hsien|Kwei-hwa-cheng|Kökxot shehiri|Koekxot shehiri|Kweihwa-Suiyuan|Hu-ho-hao-t'e-shih|후허하오터 시
Shaoxing;99cn6y6dp;紹興|绍兴|紹興市|소흥|사오싱 시|Шаосин|Шаосін|شاوشنگ|شاوشینگ|Saosing|Shaosin|Sao-sing|Shaohing|Shaosing|Sjaoxing|Sieu-hing|Shao-hsing|Shaohingfu|Thieu Hung|Shaoxing City|Siau-heng-chhi|Shawshin shehiri
Nantong;9ezn7r6dp;南通|南通市|난퉁 시|Nantun|Nan'tun|Nantung|Tunchow|Tungchow|Nam Thong|Nan-t'ung|Nang-tung|Nan-tchung|T'ung-chou|Lam-thong-chhi|Nan-t'ung-shih|Nan-t'ung-hsien|Nentung shehiri|Нантун|Нантунг|หนานทง|نانتانگ|نانتونگ
Baoshan;9d9n9h6dp;宝山|Pao-shan|Pao-shan-hsien|Pao-shan-ch'eng
Yantai;9u4n9c6dp;烟台|煙臺|烟台市|연대|연태|Chifu|Chefoo|Jantai|Jantaj|Jan'taj|Yên Đài|Ieng-dai|Yen GJai|Yen-t'ai|Jen-tchaj|Ian-tai-chhi|Yen-t'ai-shih|Янтай|Јантај|یانتای|یانتائی
Zhuhai;8nwmnh6dp;珠海|珠海市|Guhaj|Chu Hai|Chu Hoi|Cio-hai|Cu-chaj|Dzukhaj|Zyu Hoi|Chau Hai|Chyu Hoy|Dzhukhaj|Chzhukhaj|Huengchow|Xiangzhou|Chu-hoi-su|Heung chau|Hsiang-chou|Chu-hai-chhi|Juxey shehiri|Hsiang-chou-fou|Hsiang-chou-chen|Џухај|Джухай|جوهای|زوهاي|주하이 시
Baotou;a2xmd46dp;包头|包頭|包头市|Baatou|Paotou|Bao Đầu|Bau-tau|Bautouo|Pao-tow|Bao GJau|Pao-t'ou|Pao-tchou|Bugat khot|Pau-theu-su|Baotou shaary|Pau-thau-chhi|Баатоў|Баотоу|بائوتو|باۋتۇ شەھىر|바오터우 시
Qingyang;9p7m706dp;庆阳|庆阳市
Kunshan;9d6n7z6dp;崑山|昆山|玉山|쿤산 시|Kunsan|Yushan|Con Son|Kan-shan|Kunsanas|Kchun-san|Kun'shan'|Kunshan Shi|Yushan Zhen|K'un-shan-hsien|K'un-shan-ch'eng|Куншан|Куньшань|کونشان
Weifang;9rzn2u6dp;潍坊|濰坊|イ坊市|웨이팡 시|Vejfan|Vehjfan|Vejfang|Wej-fang|Wei-hsien|Duy Phuong|I-hng-chhi|Wei-fang-shih|Вейфан|Вэйфан|ویفانگ
Zunyi;92xm4z6dp;遵义|遵義|遵义市|쭌이 시|Cun-i|Cunji|Dzuni|Gunji|Zunji|Cuenji|Czun'i|Tsun-i|Tsunyi|Cong-ngie|Tuan Nghia|Tsun-i-shih|Chun-gi-chhi|Tsun-i-hsien|Tsunyi-hsien|Tsun-i-ch'eng|زونئی|زونیئی|Цзуньи|Цзуньї
Lianyungang;9m4n366dp;连云港|連雲港|连云港市|롄윈강 시|Ляньюньган|Ljan'jun'gan
Ganzhou;8xtmr96dp;贛州|赣州|カン州|간저우 시|Ганџоу|Ганьчжоу|گانژوو|Gandzou|Gandzov|Kan-cou|Kanchow|Cam Chau|Gang-ciu|Gantsjou|Kan-chou|Kan-hsien|Gan'chzhou|Kam-chu-su|Ganzhou Shi|Kan-chou-shih|Kong-chiu-chhi
Songjiang;9c7n8q6dp;松江|松江区|Sunkiang|Sunchiang|Sungkiang|Sunkiangfu|Sung-chiang|Songjiang Qu|Sungkiang-hsien|Sung-chiang-hsien
Ordos;a01mcy6dp;Erdos|Ordos khot|Ордос|Ордос хот|オルドス市|鄂尔多斯市|어얼둬쓰 시
Jieyang;8remv96dp;揭阳|揭陽|掲陽市|Цзеян|지에양 시|Czejan|Kityang|Kiehyang|Tie-jang|Giek-iong|Rongcheng|Yet Duong|Chieh-yang|Chieh-yung|Chien Yang|Kityang-hsien|Kiat-iong-chhi|Chieh-yang-hsien|جی یانگ|جیئیانگ
Jilin;abtnnk6dp;吉林|吉林市|지린 시|Girin|Kilin|Kirin|Csilin|Dzilin|Gilino|Ti-lin|Yungki|Cat Lam|Chi-lin|Czilin'|Chi-ling|Dzilinas|Gek-ling|Yung-chi|Jilin Shi|Jilinstad|Girin khot|Jilin City|Kota Jilin|Jilin Ceety|Jilin Hiria|Chi-lin-shih|Kiat-lim-chhi|Yung-chi-shih|Yung-chi-hsien|Ђилин|Гирин|جی‌لین|جیلن شہر
Jiading;9d7n8s6dp;嘉定|嘉定镇|嘉定镇街道|Kiating|Chia-tang|Chia-ting|Kiating Ku|Jiadingzhen|Chia-ting-hsien|Jiadingzhen Jiedao
Shangqiu;9llmta6dp;商丘|商丘市|Kuei-te|Kweiteh|Shangkiu|Shang-ch'in|Shang-ch'iu|Shangkiuhsien|Shang-ch'iu-hsien
Nanchong;9bkm2o6dp;南充|南充市|난충 시|Нанчунг|Наньчун|نانچونگ|Nam Sung|Nan'chun|Nanchung|Shunking|Shun'tsin|Nan-cchung|Nan-ch'ung|Nang-chung|Shun-ch'ing|Nan-ch'ung-shih|Lam-chhiong-chhi|Nan-ch'ung-hsien
Datong;a1dmmp6dp;大同市|Dagu|Daido|Datun|Ta-ku|Datung|Ta-jen|Datongo|Datongas|Ta-t'ung|Đại Đồng|Ta-tchung|GJai GJong|Datong City|Ta-jen-hsien|Ta-t'ung-shih|Ta-t'ung-hsien|다퉁 시|Датун|Датунг|داتونگ|داتۇڭ شەھىر
Nanyang;9hpmkn6dp;南阳|南陽|南阳市|난양 시|Nanyan|Nan'jan|Nanjang|Nan-jang|Nam Duong|Nang-iong|Lam-iong-chhi|Nan-yang-shih|Nenyang shehiri|Наньян|Нанјанг|نانیانگ، ہینان
Jiangmen;8oqmm46dp;江門|江门|江門市|장먼 시|Pakhai|Sunwui|Gjanmen|Kongmun|Đangmen|Dzjanmun|Hsin-hui|Kongmoon|Wom Moon|Czjanmen'|Czjanmyn'|Giang Mon|Tiang-men|Chiang-men|Czjanmehn'|Geng-muong|Dziangmenas|Kong-mun-su|Kang-mng-chhi|Kongmoon City|Hsin-hui-hsien|Chiang-men-shih|Chiang-men-ch'eng|Ђангмен|Дзянмън|جیانگمن|ژیانگمن
Jiangyin;9enn626dp;澄江|江阴市|澄江街道|Kiangyin|Chengjiang|Chiang-yin|Kiang Ying|Jiangyin Shi|Chiang-yin-hsien|Chengjiang Jiedao|Chiang-yin-ch'eng
Fuyang;9hemtq6dp;阜陽|阜阳市|阜陽市|Фуян|푸양 시|Fujan|Fuyan|Ruyin|Fowyang|Fu-jang|Fou-yang|Inchzhou|Yingchow|Paiu-iong|Phu Duong|Ying-chou|Puyanghsien|Yingchow-fu|Fu-yang-shih|Hu-iong-chhi|Fowyang-hsien|Fou-yang-hsien|فویانگ
Bayan Nur;a36m6b6dp;巴彦淖尔市
Chaozhou;8rpmvy6dp;潮州|潮州市|چاوژو|چاؤژوؤ|Caogou|Caodzou|Chao'an|Chaochow|Chaodzou|Chauchow|Dieu-ciu|Cchao-cou|Chaotsjou|Ch'ao-chou|Chaochowfu|Chaochzhou|Trieu Chau|Chheu-chu-su|Tio-chiu-chhi|Ch'ao-an-hsien|Ch'ao-chou-chen|Ch'ao-chou-shih|Чаоџоу|Чаочжоу|차오저우 시|แต้จิ๋ว
Qingyuan;8rumlz6dp;清远|清遠|清远市|칭위안 시|چنگیوآن|کینگوان|Tsingyun|Cinujuan'|Qingcheng|Tsingyuan|Ching-uong|Thanh Vien|Ch'ing-yuan|Čching-jüan|Cching-juean|Chhin-yen-su|Tsingyunhsien|Chheng-oan-chhi|Ch'ing-yuan-hsien|Цинъюань
Tai’an;9qjmxc6dp;泰安市|Tajan'|Taianfu|T'ai-an-shih|T'ai-an-hsien|Тайань
Xining;9rrlqo6dp;西宁|西寧|西宁市|زننگ|شينينغ|시닝 시|Sinin|Shinin|Siniin|Sining|Sinino|Sa-ning|Si-ning|Hsi-ning|Hszining|Sihningz|Siningas|Siningfu|Tay Ninh|Si-nen-su|Xining Shi|Se-leng-chhi|Sining-hsien|Hsi-ning-shih|Shining shehiri|Синин|Сінін|शिनिंग
Changshu;9dxn7e6dp
Huainan;9gnmx06dp;淮南市
Suzhou;9jgmwy6dp;宿州市|Suchow|Suxian|Su-hsien|Suchzhou|Сучжоу|شيۇجۇ شەھىرى
Lu’an;9e6mvo6dp;六安|六安市|Luan'|Liu-an|Liuanchow|Lu'an Shi|Liu-an-hsien|Луань
Yancheng;9ion5s6dp;盐城|鹽城|塩城市|옌청 시|Йенчън|Яньчэн|یانچنگ|ینچینگ|Jenchun|Jancengo|Jancheng|Jan'chehn|Diem Thanh|Jen-ccheng|Yen-ch'eng|Sieng-siang|Yancheng City|Yen-ch'eng-chen|Yen-ch'eng-hsien
Taizhou;9g9n536dp;泰州|泰州市|T'ai|Tajgou|Tai-ciu|Taichow|Tajdzou|Taitsjou|Tajdzhou|T'ai-chou|Tajchzhou|Tchaj-cou|Thai Chau|T'ai-hsien|Taizhou Shi|Teyju shehiri|T'ai-chou-shih|Thai-chiu-chhi|T'ai-hsien-ch'eng|تایژو|تائیژو، جیانگسو|Тајџоу|Тайджоу|타이저우 시
Daqing;ajenj86dp;大庆|大慶|大庆市|Anda|An-ta|Dacin|Dacyn|Sartu|DaCing|Dachin|Taching|Dai-keng|Ta-cching|Đại Khánh|An-ta-shih|GJai Khanh|Sa-erh-t'u|Daqing CIty|Sha-erh-t'u|Tai-kheng-chhi|다칭 시|Дацин|Дацын|داچینگ|داکینگ
Wuhu;9d3n0z6dp;芜湖|蕪湖|芜湖市|Уху|Вуху|Ouhu|U-hu|Ukhu|Vuhu|Vu Ho|Vukhu|Wu-chu|Wuhu Shi|Bu-ho-chhi|Wu-hu-shih|Wu-hu-hsien|واها|ووہو|우후 시
Dazhou;9cpm6i6dp;达州|達州|达州市|داژو|داژوو، سیچوان|다저우 시|Daxian|Suting|Suydin|Ta-cou|Dak-ciu|Dasyan'|Dachzhou|Sui-ting|Ta-hsien|Đạt Châu|GJat Chau|Sui-ting-fu|That-chu-su|Tat-chiu-chhi|Дачжоу
Yangzhou;9g0n3s6dp;扬州|揚州|扬州市|İnçiü|Inciue|Jancjou|Kiangtu|Iong-ciu|Jandzhou|Jang-cou|Jangdzou|Jangdzov|Yangchow|Chiang-tu|Janchzhou|Yang-chou|Yangtsjou|Duong Chau|Han-chiang|Yang-chow-fu|Iong-chiu-chhi|Yang-chou-shih|Yangjo shehiri|Chiang-tu-hsien|양저우 시|Янджоу|Янчжоу|یانگژو|يانغتشو
Guilin;8w8mee6dp;桂林|桂林市|구이린 시|Gujlin|Guejlin|Kweilin|Que Lam|Gveilinz|Kuei-lin|Kuej-lin|Lin-kuei|Lin-kwei|Guilin Shi|Kui-lim-su|Ling-ch'uan|Kuei-lin-shih|Kweilin-hsien|Lin-kuei-hsien|गुइलिन|Гуейлин|Гуејлин|กุ้ยหลิน|گۇيلىن شەھىرى
Zhaoqing;8q1mke6dp;肇庆|肇慶|肇庆市|Koyiu|Kao-yao|Dzaocing|Shiuhing|Chao-chou|Chao-king|Chzhaocin|Dieu-keng|Shiu Hing|Cao-cching|Koynihsien|Shiuhingfu|Chao-ch'ing|Koyiu-hsien|Sau-khin-su|Trieu Khanh|Kao-yao-hsien|Tiau-kheng-chhi|Chao-ch'ing-chen|자오칭 시|ژاوچنگ|ژاؤچینگ|Џаоћинг|Чжаоцин
Mianyang;9dflys6dp;綿陽|绵阳|綿陽市|몐양 시|Миенян|Мяньян|Mienjan|Mienchow|Mjan'jan|Mjenjang|Myan'yan|Mien-chou|Mien-jang|Mien-yang|Mien Duong|Mieng-iong|Mianyang Shi|Bian-iong-chhi|Mien-yang-hsien|میانیانگ|ميەنياڭ شەھىرى
Wanzhou;9bgm946dp;万州区
Putian;8won2l6dp;ホ田|莆田|ホ田市|푸톈 시|Putjen|Hinghwa|Putjan'|Phủ Điền|Buo-dieng|Hinghwafu|Hsing-hua|P'u-t'ien|Phu GJien|Putian Shi|Pchu-tchien|Phu-thien-su|Pho-chhan-chhi|Putyen shehiri|P'u-t'ien-hsien|P'u-t'ien-hsien-ch'eng|Путянь|Путјен|پوتیان
Yinchuan;9wvm376dp;銀川|银川|銀川市|인촨 시|Ho-lan|Inchuan|Jincuan|Ningsia|Incuanas|Jinchuan|Yinzconh|In'chuan'|Ning-hsia|Ningsiafu|Jin-cchuan|Ngan Xuyen|Ngung-chiong|Yinchuan Shi|Ningsia-hsien|Gin-chhoan-chhi|Yin-ch'uan-shih|Инчуан|Јинчуан|ینچوآن|ین چوان|यिनचुआन
Taizhou;95mn9b6dp;台州|台州市|타이저우 시|Тайчжоу|Taitsjou|Tajchzhou|Tchaj-cou|Thai Chau|Taizhou Shi|Thoi-chu-su|Tai-chiu-chhi|تەيجۇ شەھىرى
Yiwu;97gn5k6dp;Иу|义乌|義烏縣|I-wu|Choucheng|Yiwuhsien|I-wu-hsien
Quanzhou;8v7n1f6dp;泉州|泉州市|Zaitun|Zayton|Chinchu|Chinchew|Ciong-ciu|Ciuandzou|Quantsjou|Tsinkiang|Tuyen Chau|Čchüan-čou|Cchuean-cou|Ch'uan-chou|Chin-chiang|Chuanchowfu|Tsin-chiang|Cjuan'chzhou|Chhien-chu-su|Choan-chiu-chhi|Chüenju shehiri|Tsingkianghsien|Ch'uan-chou-shih|Chueenju shehiri|Chin-chiang-hsien|چوئنژو|چوانژو|취안저우 시|Цюаньчжоу|เฉวียนโจว
Jinhua;96vn4c6dp;金华|金華|金华市|진화 시|جنہوا|جينهوا|Kinhwa|Kim Hoa|Chin-hua|Ging-hua|Kinhwafu|Tin-chua|Czin'khua|Kim-fa-su|Jinhua Shi|Kim-hoa-chhi|Kinhwa-hsien|Chin-hua-shih|Chin-hua-hsien|Chin-hua-hsien-ch'eng|Цзиньхуа
Cixi;99un8t6dp;慈溪|浒山|慈溪市|Hushan|Xushan|Cixi Shi|Tz'u-hsi|Cixi City|Tz'u-ch'i|Hu-shan-chen|Xushan Jiedao|Hu-shan-so-ch'eng
Changde;96nmia6dp;常徳|常德|常徳市|창더 시|Чандэ|Чангде|Cangde|Wuling|Chandeh|Changteh|Cchang-te|Ch'ang-te|Siong-daik|Changde Shi|Song-tet-su|Thuong GJuc|Ch'ang-te-shih|Changteh-hsien|Siong-tek-chhi|Ch'ang-te-hsien|Ch'ang-te-ch'eng|چانگدا|چانگدی
Kaifeng;9mompj6dp;开封|開封|开封市|카이펑 시|Kajfen|Kajfyn|Kayfin|Kajfehn|Kajfeng|Kai Feng|Kai-hung|Kchaj-feng|Khai Phong|Kai-feng Fu|K'ai-feng-shih|Khai-hong-chhi|K'ai-feng-hsien|Keyfeng shehiri|Кайфен|Кайфын|كايفنغ|کایفنگ|ไคเฟิง
Anshan;a48ndn6dp;鞍山|鞍山市|안산 시|Anxan|An Son|An-san|Ansano|Ansjan|Ansanas|An'shan'|Ang-sang|Anshan Shi|An-san-chhi|An-shan-shih|Аншан|Аньшань|آنشان|ئەنشەن شەھىرى
Baoji;9lhm5w6dp;宝鸡|寶雞|宝鶏市|باوژی|바오지 시|Baoczi|Баоцзи
Suqian;9kbn0m6dp;宿迁市|Sutsien|Su-ch'ien|Hsui-ch'ien|Sutsienhsien|Su-ch'eng-chen|Su-ch'ien-hsien|Su-ch'ien-ch'eng
Liuzhou;8tkmbx6dp;柳州|柳州市|류저우시|Љуџоу|Лючжоу|ليوشو|Linzhou|Liuchow|Ljudzou|Liou-cou|Liu-chou|Ma-p'ing|Lieu Chau|Liuchowfu|Ljuchzhou|Liu-chiang|Mapinghsien|Liu-chou-shih
Zhangjiagang;9ein6u6dp;张家港|张家港市|Shazhou|Yangshe|Sha-chou|Yang-she-chen|Yang-she-ying|Zhangjiagang Shi
Jinjiang;8uyn1d6dp;晉江|晋江|青阳|진장 시|جنجیانگ|جینجیانگ|Qingyang|Ceng-gong|Tan Giang|Czin'czjan|Ch'ing-yang|Chin-chiang|Jinjiang Shi|Tsin-kong-su|Qingyang Zhen|Chin-kang-chhi|Ch'ing-yang-chen|Цзиньцзян
Bozhou;9k4mtl6dp;亳州|亳州市|بوژؤ|بوجوا|보저우 시|Boxian|Po-cou|Pochow|Bok-ciu|Bac Chau|Bochzhou|Po-hsien|Pok-chiu-chhi|Бочжоу
Qujing;8wslwa6dp;曲靖|曲靖市|취징 시|چوجنگ|Kutsing|Cjujczin|Nan-ning|Khuc Tinh|Kuoh-ceng|Čchü-ťing|Cchue-ting|Ch'u-ching|Ku-tsing-fu|Kutsinghsien|Qujing Hiria|Chiu-ch'u-ching|Ch'u-ching-hsien|Khiok-cheng-chhi|Цюйцзин|ฉู่จิ้ง
Zhanjiang;8kzmen6dp;湛江|湛江市|Hsi-ying|Tsamkong|Chankiang|Kwangchow|Tram Giang|Chan-chiang|Fort Bayard|Kwangchowan|Chzhan'czjan|Kwangchowwan|Zhanjiang Shi|Chan-chiang-shih|Чжаньцзян|جاڭجياڭ شەھىرى
Fushun;a6dnga6dp;撫順|抚顺市|撫順市|푸순 시|Fusun|Fu-sun|Fusjun|Fusuno|U-song|Fu-shan|Fusunas|Phu Thuan|Bu-sun-chhi|Fushuncheng|Chiu-fu-shun|Fu-shun-shih|Fu-shun-hsien|Фушун|Фушунь|فوشون
Luoyang;9mbmkc6dp;洛阳|洛陽|河南府|Лаян|Лоян|뤄양 시|Honan|Lajan|Lojan|Lojang|Luojan|Honanfu|Lo-yand|Lo-yang|Luojang|Lok-iong|Luo-jang|Luojango|Lac Duong|Luojangas|Louogian'nk|Lo-yang-shih|Lojan shaary|Lo-yang-hsien|Lok-iong-chhi|لويانغ|لوویانگ|लुओयांग|ลกเอี๋ยง
Guankou;948mnn6dp;关口|浏阳|浏阳市|Лиуянг|Liujang|Liuyang|Liuyang Shi|Liu-yang-hsien
Handan;9rpmq16dp;邯郸|邯鄲|邯郸市|한단 시|Хандан|Ханьдань|هاندان|ہاندان|Han-tan|Handano|Hàm Đan|Khandan|Chan-tan|Ham GJan|Handanas|Hang-dang|Khan'dan'|Han-tan-chhi|Han-tan-shih|Han-tan-hsien
Yichang;9bbmh46dp;宜昌|宜昌市|Ican|Ichan|Ichang|Jicang|I-chang|Jichang|Tung-hu|I-cchang|Nghi Xuong|Ngi-chiong|Che-Keou-chan|I-ch'ang-shih|I-ch'ang-hsien|Gi-chhiong-chhi|Ічан|Ичан|یچنگ|ایچانگ|이창 시
Heze;9nwmsr6dp;菏泽|菏澤|カ沢市|هزه|ہازا|Хеце|Хэцзэ|허쩌 시|Khece|Che-ce|He-tse|Ho-dek|Ho-tse|Hotseh|Ko-tse|Caozhou|Ha Trach|Khehczeh|Ts'aochow|Ts'ao-chou|Tsaochowfu|Ha-tek-chhi|Ho-tse-shih|Hotseh-hsien|Ko-tse-hsien
Liupanshui;8zvlz76do;六盤水|六盘水市|六盤水市|류판수이 시|Люпаньшуй|ليوبانشيو|لیوپانشای|Ljupan'shuj|Lek-buang-cui|Liou-pchan-suej
Maoming;8m7mg36do;茂名|茂名市|마오밍 시|Maomin|Chaozhou|Hsin-p'o|Mao-ming|Mau Danh|Maiu-ming|Bo-beng-chhi|Meu-miang-su|Mao-ming-shih|Маомин|Маоминг|ماومنگ|ماومینگ
Qinzhou;8n2m9t6do;欽州|钦州|欽州市|Ch'in|Yamchow|Chinchow|Ginhcouh|King-ciu|Yamhsien|Cchin-cou|Kham Chau|Ch'in-chou|Cin'chzhou|Ch'in-hsien|Khim-chu-su|Khim-chiu-chhi|Ch'in-chou-chen|چنژوؤ|کینژو|친저우 시|Циньчжоу
Luohe;9j9mor6do;漯河|漯河市|ラク河市|Лохэ|Луохе|لوهی|뤄허 시|Lo-he|Lo-ho|Tak-o|Lokheh|Luokhe|T'a-ho|Luo-che|Thap Ha|Lo-ho-chai|Lo-ho-shih|Lui-ho-chhi|T'a-ho-chai
Xiangyang;9f0mji6do;樊城|襄樊|襄阳|샹양시|Сян'ян|Сянъян|Fancheng|Siangfan|Sjan'jan|Sjanujan|Xiangfan|Siangyang|Sjangjang|Hsiang-fan|Siang-jang|Hsiang-yang|Hsziangjang|Tuong Duong|Xiangyangfu|Xiangfan Shi|Fancheng Zhen|Xiangyang Shi|Siangyang-hsien|Hsiang-yang-hsien|شياڭفان شەھىرى
Yangjiang;8mqmj06do;阳江|陽江|阳江市|양장 시|Янцзян|Јангђанг|Janczjan|Iong-gong|Yeungkong|Jang-tiang|Jiangcheng|Liang-yang|Duong Giang|Yang-chiang|Yong-kong-su|Iong-kang-chhi|Yeungkong-hsien|Yang-chiang-hsien|Chiang-ch'eng-chen|ینگجیانگ|یانگژیانگ
Yixing;9d4n4u6do;宜城|宜兴市|宜城街道|Ihing|I-hsing|Yicheng|Yixing Shi|I-ch'eng-chen|I-hsing-hsien|I-hsing-ch'eng|Yicheng Jiedao
Qingpu;9cjn8f6do;青浦|Tsingpu|Ch'ing-p'u|Tsingpi hsien|Tsingpu hsien|Ch'ing-p'u-hsien
Xuchang;9kjmoa6do;将官池|许昌市|Hsuchow|Hsu-chou|Syuychan|Hsu-ch'ang|Jiangguanchi|Hsu-ch'ang-shih|Hsu-ch'ang-hsien
Zigong;97ilz26do;自貢|自贡|自貢市|쯔궁 시|C-kung|Cigung|Czygun|Dzugun|Tu Cong|Tzekung|Ceu-gong|Tzu-kung|Dzigongas|Tzeliuching|Tzeliutsing|Tzuliutsing|Chu-kong-chhi|Tzu-kung-shih|Tzu-liu-ching|Дзъгун|Цзыгун|زيجونج|زیگانگ
Xuzhou;9l0mxs6do;徐州|徐州市|شوژو|쉬저우 시|Сјуџоу|Сюйчжоу|Sjudzou|Pengcheng|Sjujchzhou
Neijiang;986lzu6do;內江|内江|内江市|네이장 시|Nejgjan|Neikiang|Noi-geng|Nehjczjan|Nej-tiang|Noi Giang|Nei-chiang|Nui-kong-su|Lai-kang-chhi|Neikianghsien|Nei-chiang-shih|Nei-chiang-hsien|Нејђанг|Нэйцзян|نائجیانگ|نایجیانگ
Heshan;95dmk36do;益阳|赫山|益阳市|Иян|Ijan|I-yang|I-yeng|Yiyang|Heshan Qu|Yiyang Shi|I-yang-shih|I-yang-hsien|Yiyang-hsien|I-yang-ch'eng
Jining;9ocmvu6do;济宁|濟寗|濟寧|지닝 시|جنینگ|جینینگ|Czinin|Đining|Ca-ning|Csining|Dzining|Gjining|Te Ninh|Ti-ning|Tsining|Chi-ning|Che-leng-chhi|Chi-ning-shih|Chi-ning-hsien|Tsi-ning-hsien|Ђининг|Цзинин
Putuo;9ctn976do;普陀|P'u-t'o
Xinyang;9f8mov6do;信阳|信陽|信阳市|신양 시|Czinan'|Sinyang|Hsin-yang|Sinyang-hsien|Hsin-yang-shih|Hsin-yang-hsien|Цзинань|شينيانج|شین‌یانگ
Liaocheng;9r9mu86do;聊城|聊城市|랴오청 시|Ляочэн|Љаоченг|Liaoceng|Ljaochehn|Ljaocheng|Lieu Thanh|Lieu-siang|Liao-ccheng|Tung-ch'ang|Tungchangfu|Liao-ch'eng-shih|Liao-ch'eng-hsien|لیاوچینگ
Jinzhong;9uoml76do;晋中市
Changzhi;9qimm76do;潞安|長治|长治|창즈 시|Cangi|Lu'an|Cangdzi|Handian|Lu'anfu|Cchang-c|Chandzhu|Changdzi|Diong-de|Chanchzhi|Chang-chi|Truong Tri|Ch'ang-chih|Changzhi Shi|Tiong-ti-chhi|Ch'ang-chih-shih|Ch'ang-chih-hsien|Чангџи|Чанджъ|چانگجی|چانگژی
Tianshui;9m2m1q6do;天水|天水市
Yangpu;9cun9k6do;杨浦
Weinan;9lumc76do;渭南|渭南市|웨이난 시|Veinan|Vejnan|Veynan|Vi Nam|Oi-nang|Wej-nan|Vehjnan'|Weinan Shi|Ui-lam-chhi|Wei-nan-hsien|Вејнан|Вэйнань|وئینان|واینان
Jiaxing;9bfn7f6do;嘉兴|嘉興|嘉兴市|자싱 시|Ђасинг|Дзясин|جیاشنگ|جیشانگ|Czjasin|Dzjasin|Ga-hing|Kashing|Gia Hung|Tia-sing|Chia-hsing|Dziasingas|Ka-shing-fu|Chiahsing-Fu|Ka-heng-chhi|Kashing-hsien|Chia-hsing-hsien|Chia-hsing-hsien-ch'eng
Zhongwei;9u7m076do;中卫|中衛|中卫市|중웨이 시|Dung-oi|Cung-wej|Trung Ve|Chung-wei|Chzhunvey|Chzhunvehj|Zhongwei Shi|Tiong-oe-chhi|Chung-wei-hsien|Чжунвэй|ژونگوئی
Panjin;a48nb36do;盘锦市
Jiujiang;98imu86do;九江|九江市|주장 시|Te-hua|Ciuciang|Kiukiang|Cuu Giang|Czjuczjan|Dzjudzjan|Tiou-tiang|Chiu-chiang|Kiukiang-hsien|Chiu-chiang-shih|Chiu-chiang-hsien|Ђуђанг|Дзюдзян
Anyang;9qampq6do;安阳市|安陽市|灯塔路|Анян|Аньян|안양 시|Anjan|An'jan|Anjang|An'jang|Zhangde|Ahn Yang|An Duong|Anjangas|Chang-te|Changteh|Changten|Dengtalu|Changte-fu|An-yang-hsien|انيانغ
Luohu District;8onmp16do
Fengxiang;9bqn9f6do;奉贤|奉贤区|Fengsien
Bijie;91um0h6do;毕节|畢節|毕节市|비제 시|Bicze|Pi-tie|Bek-ciek|Tat Tiet|Pit-chiat-chhi|Бицзе|بیجئی|بیجای
Zhuzhou;93bmmb6do;株洲|株洲市|Gugou|Cu-cou|Tu-ciu|Chuchow|Cyu Cou|Dzudzou|Dzudzov|Chu Chau|Chu-chou|Jianning|Zhutsjou|Dzhudzhou|Chu-chu-su|Chzhuchzhou|Zhuzhou Shi|Chu-chiu-chhi|Chu-chou-shih|Џуџоу|Джуджоу|ژانژو|ژوژوو|주저우 시
Shangrao;951mzm6do;上饒|上饶|上饒市|Xuri|Kwangsin|Sang-zao|Shanzhao|Sjangrao|Kuanghsin|Shang-jao|Shangzhao|Siong-ngieu|Shangrao Shi|Thuong Nhieu|Song-ngieu-su|Shang-jao-shih|Shang-jao-hsien|Siong-jiau-chhi|상라오 시|Шанжао|Шангжао|شانگراو
Huaibei;9kdmwf6do;淮北|淮北市|هوایبی|ہوآئیبئی|화이베이 시|Hsu-kou|Huajbej|Huaybey|Hoai Bac|Huai-pei|Khuajbej|Chuaj-pej|Huai-baek|Huaibejus|Khuajbehj|Sui-hsi-shih|Hoai-pak-chhi|Huai-pei-shih|Хуайбей|Хуайбэй
Xuhui;9con9d6do;徐汇|Hsu-hui|Siccawei|Hsu-chia-hui|Hsu-chia-t'ang|Hsu-chia-hui-chen
Meishan;99glwg6do;眉山|眉山市|메이산 시|Mi Son|Meichow|Mej-san|Mi-sang|Mei-chou|Meyshan'|Mehjshan'|Bi-san-chhi|Mei-shan-hsien|مایشان|میئشان|Мэйшань
Fuzhou;93omv56do;抚州|撫州|抚州市|U-ciu|Fu-cou|Fuchow|Fu-chou|Fuchzhou|Linchwan|Phu Chau|Vu-chu-su|Fu-chow-fu|Lin-ch'uan|Bu-chiu-chhi|Fu-chou-shih|Linchwanhsien|Lin-ch'uan-hsien|فوژوا|فوژو، جیانگشی|푸저우 시|Фучжоу
Guigang;8q8mcf6do;貴港|贵港|貴港市|Kuei|Gujgan|Guixian|Goi-geng|Guicheng|Quy Cang|Gveigangj|Kuej-kang|Kweihsien|Kuei-hsien|Kui-kong-su|Kui-kang-chhi|구이강 시|Гуйган|گوئگانگ|گویگانگ
Hengyang;90pmku6do;衡陽|衡阳市|衡陽市|헝양 시|Henan|Henchow|Khunjan|Heng-nan|Hengchow|Hengjang|Heng-chou|Heng-iong|Khehnujan|Khengjang|Cheng-jang|Hanh Duong|Hengchowfu|Hengjangas|Fen-yong-su|Heng-iong-chhi|Heng-nan-hsien|Heng-yang-shih|Hengyang-hsien|Heng-yang-ch'eng|Xengyang shehiri|Хънян|Хэнъян|هنگیانگ|ہینگیانگ
Yulin;8ovmdz6do;玉林|玉林市|یولن|یولاین|위린 시|Jü-lin|Watlam|Jue-lin|Jujlin'|Yo-ling|Yoglinz|Ngoc Lam|Nguk-ling|Yu-lin-chen|Ngiuk-lim-su|Watlam-hsien|Yu-lin-hsien|Giok-lim-chhi|Юйлинь
Jingzhou;9abmjn6do;荊州|荆州市|荊州市|징저우 시|جنگژوو|جیانگژو|Ging-ciu|Kingchow|Kingling|Ting-cou|Dzindzhou|Jiangling|Jingtsjou|Kiangling|Kinh Chau|Ching-chou|Czinchzhou|Kingchowfu|Chiang-ling|Chingchou-fu|Keng-chiu-chhi|Kiangling-hsien|Chiang-ling-hsien|Дзинджоу|Цзинчжоу
Xinxiang;9nrmo46do;南干道|新乡市|Синьсян|Sin'sjan|Nangandao|Singsieng|Hsin-hsiang|Hsinghsiang|Sinsiang-hsien|Hsin-hsiang-shih|Hsin-hsiang-hsien
Yichun;93bmps6do;宜春|宜春市|یچان|ییشون، جیانگشی|이춘 시|Ичунь|Ichun'|I-cchun|I-ch'un|Yuanchow|Nghi Xuan|Ngi-chung|Yuan-chou|Yichun Shi|Ni-chhun-su|I-ch'un-chen|Yuen-chow-fu|Gi-chhun-chhi|I-ch'un-hsien
Xianyang;9lem9y6do;咸阳|咸陽|咸阳市|셴양 시|Саньян|Сиенян|San'jan|Sienjan|Syanyan|Sjan'jan|Sjanjang|Ham Duong|Hang-iong|Sien-jang|Sjanjango|Hsien-yang|Hszienjang|Sianjangas|Xianyang Shi|Ham-iong-chhi|Sienyanghsien|Hsien-yang-shih|Hsien-yang-hsien|شیانیانگ|شیان‌یانگ|เสียนหยาง
Sanya;8cpmc76do;三亚|三亞|三亚市|Sama|Sanj|Samah|Tam A|San'ja|San-ah|Sang-a|Ya Xian|Yehsien|Ya-hsien|Yai-hsien|Sam-a-chhi|San-ya-chen|San-ya-chiang|Senya shehiri|San-ya-chiang-shih|싼야 시|Санья|سانيا|سانیا|ซานย่า
Shaoguan;8uwmni6do;韶关|韶關|韶关市|사오관 시|Kakong|Kukong|Kukiang|Saoguan|Sao-kuan|Shaokwan|Shiuchow|Shiukuan|Chao-kuan|Shao-chou|Shao-kuan|Sieu-guang|Thieu Quan|Ch'u-chiang|Seu-koan-su|Kukong-hsien|Kiukianghsien|Siau-koan-chhi|Ch'u-chiang-hsien|Шаогуан|Шаогуань|شاؤگوآن
Longyan;8vnmx26do;竜岩|龍岩|龙岩|룽옌 시|Лунъянь|لانگیان|لونغيان|Lung-jen|Lung-yen|Lunujan'|Long Nham|Lung-ngang|Longyan Shi|Lungyenchow|Leng-na-chhi|Liung-ngam-su|Lung-yen-hsien|Longyen shehiri
Yongzhou;8zemi16do;永州|永州市|융저우 시|Langlin|Lingling|Yungchow|Yung-chou|Yung-chow-fu
Huzhou;9brn5l6do;吴兴|湖州|吴兴区|Huchow|Wuhing|Wuxing|Hu-chou|Huchowfu|Wu-hsing|Wuxing Qu|Huzhou Shi|Huhinghsien|Huzhou City|Hu-chou-shih|Wu-hsing-hsien|Wu-hsing-hsien-ch'eng
Wuwei;9vdlt36do;武威|武威市|Liangzhou|Wuwei Shi|Liang-chou|Liang-chow|Wu-wei-hsien
Hanzhong;9hwm5a6do;汉中|汉台|漢中|한중 시|Hantai|Chan-cung|Han Trung|Han-chung|Hang-dung|Hantai Qu|Nan-cheng|Nan'chzhen|Khan'chzhun|Han-chung-fu|Hanzhong Shi|Han-chung-shih|Han-tiong-chhi|Nan-cheng-hsien|ہانژونگ|Ханьчжун
Hezhou;8tsmhx6do;賀州|賀州市|贺州市|هیژو|ہیژوؤ|허저우 시|Ho-ciu|Che-cou|Ha Chau|Hohcouh|Fo-chu-su|Khehchzhou|Ho-chiu-chhi|Хэчжоу
Zhu Cheng City;9q0n3o6do
Dongying;9u2n156do;東營|胜利|东营市
Luzhou;969m0v6do;泸州|瀘州|泸州市
Meizhou;8thmuk6do;梅州|梅州市
Yueyang;97lmm56do;岳阳市|岳陽市
Laiwu;9qjmyu6do;萊蕪|莱芜市|莱蕪市
Benxi;a4pnfs6do;本渓|本溪|本渓市
Pingdingshan;9jpmms6do;平頂山|平顶山|平頂山市
Bengbu;9himy06do;蚌埠|蚌埠市
Sanhe;a12mx76do;三河
Xiangtan;93dmlm6do;湘潭|湘潭市
Linfen;9q9mhs6do;临汾|平阳|臨汾
Zhenjiang;9fhn3u6do;鎮江|镇江|镇江市
Huludao;a37n7o6do;葫芦岛|葫芦岛市
Jing’an;9cqn9a6do;静安
Baoshan;8vsljg6do;保山|保山市
Rui’an;936n766do;瑞安
Laibin;8rzmbe6do;來賓|来宾|来宾市
Xiaogan;9bxmog6do;孝感|孝感市
Ziyang;99olyp6do;雁江|资阳市
Quzhou;96gn276do;衢州|衢州市
Zaozhuang;9mumyj6do;棗莊|枣庄市|棗荘市
Pingxiang;92qmo96do;萍乡|萍郷|萍鄉
Zhoushan;99bnbg6do;定海|舟山|定海区
Qiqihar;alingc6do;齊齊哈爾|齐齐哈尔|チチハル市
Puning;8qrmup6do;普宁|普寧|普宁市
Ankang;9gsmau6do;安康|安康市
Langfang;9zsmw76do;廊坊|廊坊市
Jiaozuo;9nwmmk6do;焦作|焦作市
Wanxian;9bmm916do;万州
Guang’an;9anm486do;广安市
Weihai;9u7nb76do;威海|威海市
Zhabei;9cun9e6do;闸北
Xinyu;938mr96do;新余|新喻|新余市
Yibin;95wlyo6do;叙府|宜宾|宜賓
Taicang;9ddn8d6do;城厢|太仓|城厢镇
Jinshan;9bon8x6do;金山|金山区
Chenzhou;8xomlz6do;郴州
Anqing;9armx56do;安庆|安慶|安庆市
Xingtai;9symq16do;邢台|邢台市|ケイ台市
Zhaotong;91wlw46do;昭通|昭通市
Panzhihua;8zvlqj6do;攀枝花|攀枝花市
Chuzhou;9fsn0m6do;滁州|滁州市|ジョ州市
Xuancheng;9bzn1w6do;宣城市
Shangyu;99en7r6do;上虞|上虞区|上虞县
Anshun;8yxm296do;安順|安順市|安顺市
Wuzhou;8r8mh56do;梧州|梧州市
Qinhuangdao;a0yn476do;秦皇岛|秦皇島|秦皇岛市
Shaoyang;91omhm6do;邵陽|邵阳市|邵陽市
Hegang;aljnxx6dn;鶴崗|鹤岗|鶴崗市
Ma’anshan;9e1n176dn;马鞍山|马鞍山市
Shizuishan;9yam3j6dn;石嘴山市
Deyang;9chlxy6dn;德陽|徳陽市|德阳市
Yangquan;9v6mng6dn;阳泉|陽泉|阳泉市
Zhumadian;9hmmor6dn;驻马店|驻马店市
Changzhi;9ntmie6dn
Changning;9cqn9a6dn;长宁
Zhangjiakou;a3amr36dn;张家口|張家口|张家口市
Fuxin;a6qn9y6dn;阜新|阜新市
Changsha;8o6ml06dn;开平|长沙|长沙街道
Huangshi;9a1mrl6dn;黄石|黃石市|黄石市
Liaoyang;a4nne56dn;遼陽|辽阳市|遼陽市
Hongkou;9ctn9h6dn;虹口
Baise;8sdm476dn;百城|百色|百色市
Binzhou;9ttmzu6dn;濱州|浜州市|滨州市
Yuncheng;9namgb6dn;安邑|运城|運城
Dezhou;9u1mv96dn;德州|徳州市|德州市
Sanmenxia;9mmmgv6dn;三門峽|三门峡|三門峡市
E’zhou;9agmr56dn;鄂州|鄂州市
Mudanjiang;adrnw36dn;牡丹江|牡丹江市
Leshan;984lw86dn;乐山|樂山|乐山市
Rizhao;9odn416dn;日照|日照市
Suining;9arm196dn;遂宁|遂寧|遂宁市
Puyang;9pcmrk6dn;濮阳|濮陽|濮阳市
Chongming;9duna26dn;崇明|崇明区
Hebi;9p9mph6dn;鶴壁|鹤壁|鶴壁市
Jingmen;9c7mjo6dn;荊門|荆门市|荊門市
Dandong;a1hnhj6dn;丹東|丹东市|丹東市
Panshan;a4fnb16dn
Jiaozhou;9qsn5c6dn
Suizhou;9e3mmw6dn;隨州|随州市
Chizhou;9b6myc6dn;池州|池州市
Ya'an;99blu46dn;雨城|雅安市|雨城区
Jinzhou;a47n8i6dn;錦州|錦州市|锦州市
Sanming;8yxmyq6dn;三明|三明市
Shuangyashan;ajoo096dn;双鸭山|雙鴨山|双鴨山市
Luancheng;9v8mqh6dn;栾城
Mengzi;8qxlv66dn;蒙自市
Yingkou;a2ynbj6dn;営口|營口|营口
Zhangzhou;8u3myu6dn;漳州|漳州市|ショウ州市
Shihezi;ad2kj06nn;石河子|石河子乡|石河子市
Wenchang;8gbmfs6dn;文城|文昌|文城镇
Siping;a9wnhi6dn;四平|四平市|四平街
Chuxiong;8vklq36dn;楚雄|楚雄市
Huaihua;92kmdk6dn;懷化|怀化市|懐化市
Ulanqab;a3vmm96dn;乌兰察布市
Jiamusi;ak0nxz6dn;佳木斯|佳木斯市|ジャムス市
Korla;a60kjb6nn;库尔勒|コルラ市|库尔勒市
Wanning;8e8mem6dn;万城|万寧|萬寧
Xinzhou;9wpml56dn;忻州|忻州市|忻府区
Pingdu;9s6n576dn;平度
Ji’an;91cmre6dn;吉安|吉安市
Guli;968n5f6dn
Aqsu;a4ek306nn;阿克苏|アクス市|阿克苏市
Tanggu;9yemyt6dn;塘沽
Shangluo;9k3mdd6dn;商洛市
Qionghai;8fgmeu6dn;嘉积|琼海|瓊海
Cangzhou;9wfmwl6dn;沧州|滄州|沧州市
Beihai;8lomb46dn;北海|北海市
Hengshui;9uumtc6dn;衡水|衡水市
Daxing’anling;azdnif6dn;大兴安岭
Guangyuan;9g4m1y6dn;广元|廣元|广元市
Xianning;98wmpk6dn;咸宁市
Mianzhu, Deyang, Sichuan;9d2lxi6dn
Tonghua;a5wnlt6dn;通化|通化市
Banan;97mm3y6dn;巴南区|龙洲湾
Zhangye;9y5ln16dn;张掖|張掖|甘州
Kashgar;9znjr36nn;喀什|喀什市|カシュガル市
Zhoukou;9jfmqf6dn;周口|周口市
Pingliang;9oqm4d6dn;平凉|平涼|平凉市
Huangpu;9csn9g6dn;黄浦
Zhucheng;9pzn3o6dn;密州
Loudi;931mj36dn;婁底|娄底市|婁底市
Shanwei;8pamsf6dn;汕尾|汕尾市
Jianshui;8tglp66dn;碱水
Xichang;93ils26dn;西昌|西昌市
Chéngguān Qū;98ckww6dn
Jincheng;9ommlf6dn;晉城|晋城|晋城市
Yan’an;9romc56dn;延安|延安市
Shouguang;9sgn1u6dn
Jingdezhen;97dmxl6dn;景徳鎮|景德镇|景德镇市
Jiaojiang;95qn9f6dn;椒江村
Nanping;900n096dn;南平|南平市
Longshan;a95njm6dn;辽源|遼源|龙山
Heyuan;8rxmqk6dn;河源|河源市
Huangshan;98jn0n6dn;屯溪|黄山|屯溪区
Wafangdian;a02nax6dn
Yongji;9mvmes6dn;永济|赵伊|永济市
Lishui;952n536dn;丽水|麗水|丽水县
Wenshan City;8qwlxl6dn;文山|文山市
Chengde;a3rmzo6dn;承德|承徳市|承德市
Basuo;8f2m9v6dn;八所|东方市|八所镇
Zhangjiajie;96xmew6dn;永定|张家界|張家界
Bei’an;ao3nno6dn
Shuozhou;9z8mka6dn;朔州|朔州市
Ningde;902n406dn;宁德|宁德市
Jiuquan;a0elho6dn;肃州|酒泉|酒泉市
Dingxi;9otlym6dm;定西|定西市
Tongchuan;9myman6dm;铜官|铜川|铜川市
Guyuan;9q1m386dm;固原|固原市
Chaoyang;a5hn6m6dm;朝阳市|朝陽市
Gujangbagh;9t3k216nm;和田|和田市|古江巴格
Jixi;aftnzs6dm;鶏西|鷄西|鸡西
Tongling;9bzmz66dm;五松|铜陵|铜陵市
Gaomi;9r2n4n6dm
Chongzuo;8o6m696dm;崇左
Tanzhou;8numn76dm;坦洲|坦洲镇
Hechuan;99bm366dm;合川
Xuanhua;a2tmrm6dm;宣化|张家口市宣化区
Dachang;9czn9a6dm;大场
Fenghuang;93mmcg6dm
Huanggang;9almr36dm;黃岡|黄冈|黄岡
Anqiu;9r7n336dm
Jizhou;9ubmt16dm;冀州
Nanqiao;9bwn9d6dm
Huocheng;acdk4n6nm;霍城|霍城县
Lhoka;978kyx6dm;山南市
Pengze;992mvr6dm
Xilinhot;ac2muf6dm;希日塔拉|锡林浩特|锡林浩特市
Hulunbuir;aqpn4o6dm;呼伦贝尔|呼伦贝尔市
Daye;99kmrb6dm
Chifeng;a7fn2g6dm;赤峰|红山区|赤峰市
Yunlong;9l5mxp6dm
Qitaihe;ah5nzw6dm;太和|七台河|太河村
Pizhou;9lbmzn6dm
Shiqi;8okmmz6dm;石岐|石岐街道
Laixi;9sen6t6dm
Tieling;a7hng06dm;鐵嶺|铁岭|鉄嶺市
Hechi;8ulm886dm;河池市
Tongshan;9kymxg6dm;徐州|徐州市
Yanji;a95nvq6dm;延吉|延吉市
Lincang;8sclm16dm;临沧市
Xingyi;8vqlzf6dm;兴义|兴义市
Tantou;8p7mo76dm;潭头
Baicheng;agqnd76dm;白城|白城市
Lianshan;a38n7p6dm;连山|连山区
Changyi;9sdn3n6dm;奎聚|昌邑
Xinyi;9lin0r6dm;新安|新沂|新安镇
Yangshuo;8uumex6dm;阳朔
Linqu;9rgn1a6dm
Pu'er;8pbloh6dm;思茅|思茅镇|普洱市
Baiyin;9rjlxd6dm;白銀|白银|白銀市
Gaozhou;8mwmfy6dm;高州
Xiuying;8hkmed6dm;秀英
Dengzhou;9gsmjd6dm;花洲|邓州
Artux;a0bjrm6nm;阿图什|阿图什市
Qibao;9cjn946dm;七宝
Xinyuan;aankb96nm;新源|新源县
Enshi;9a6mc46dm;恩施|恩施市
Tanghe;9gtmlf6dm;唐河|滨河
Zoucheng;9ocmwx6dm;邹城市|鄒城市
Fangchenggang;8mhm906dm;防城港|防城港市
Kaili;8zvm7y6dm;凯里|凱裡|凯里市
Xingning;8t3mtg6dm;兴城|兴宁|兴城镇
Linxia Chengguanzhen;9owlup6dm;临夏市|临夏城关镇
Turpan;a9bkrq6nm;吐鲁番|吐鲁番县|吐鲁番市
Longling County;8ubli56dm
Ghulja;ac0k5w6nm;伊宁|伊梨|伊宁市
Fuling;98jm6b6dm;涪陵
Chengzhong;9bymnf6dm;城中|应城|城中街道
Hulan Ergi;al4nff6dm
Donghai;8prmt86dm;东海|陆丰
Dongtai;9h9n676dm;东台|东台市|东台镇
Karamay;agmkft6nm;克拉玛依|克拉瑪依|カラマイ市
Tongliao;ab5nbn6dm;通辽|通遼|通辽市
Nianbo;9rclsi6dm;海东市
Changle;9rzn236dm
Jining;a3zmm76dm;集宁|集宁区|平地泉镇
Rugao;9fxn6y6dm
Suicheng;9k6mzl6dm
Nada;8g8mce6dm;那大|儋州市|那大镇
Yanzhou;9ormwj6dm
Laohekou;9fzmi76dm;老河口
Suihua;ajlnop6dm;綏化|绥化|綏化市
Beibei;98vm3o6dm;北碚
Shijie;8q6mo36dm;石碣|石碣镇
Hami;a8zl3r6nm;哈密市|クムル市|哈密地区
Huayin;9m1mdr6dm
Jiyuan;9nhmkr6dm;双桥|济源|济源县
Gucun;9d3n976dm;顾村
Xiantao;9admn46dm
Qingzhou;9ryn146dl
Yuci;9uoml56dl;榆次|榆次区
Bole;aepk7z6dl;博乐|博樂
Dali;8x2lmd6dl;大理|大理市
Jiayuguan;a0llh16dl;嘉峪关市|嘉峪関市|嘉峪關市
Changzheng;9csn956dl;长征|长征镇
Jinchang;9wylrv6dl;金昌|金昌市
Fendou;ajkniu6dl;奋斗|让胡路|奋斗街道
Huanggang;8rsmx06dl;黄冈
Jingling;9b5mm66dl
Heihe;atknq56dl;黑河|黒河|黑河市
Tongchuanshi;9nfmb06dl;銅川|銅川市|铜川市
Xintai;9pqmz36dl
Wuxue;98xmsz6dl;武穴|武穴街道
Wuhai;a08m4q6dl;乌海|烏海|乌海市
Yintai;9nkmb26dl
Jinzhou;9ymna46dl
Longgang;8p4mpe6dl;龙岗|竜崗区|龍崗區
Yingtan;94fmx06dl;鷹潭|鷹潭市|鹰潭市
Zitong;99um1z6dl;梓潼|潼南县|梓潼街道
Luojiang;9cylya6dl;罗江
Lijiang;90nlme6dl;麗江|丽江市|麗江市
Hailar;aqon4i6dl;海拉尔区|ハイラル区
Daliang;8pgmml6dl;大良|顺德区|大良街道
Bachuan;98xm2l6dl;巴川|铜梁县|巴川街道
Hangu;9z1mz76dl
Gunan;96mm496dl;古南|古南镇|綦江县
Jinghong;8n4lnx6dl;景洪|景洪市
Gongheyong;8p8mo36dl;共和涌
Nanchuan;96zm5i6dl;东城|南川区
Bishan;987m326dl;璧城|璧山县|璧城街道
Yanghang;9d5n9c6dl;杨行
Gaoping;9bim2q6dl;高坪
Nyingchi;98dl646dl
Beiliu;8p3mej6dl
Changji;ac9kmi6nl;昌吉|昌吉市|延安北路
Duyun;8yzm6o6dl;都勻|都匀|都匀市
Kaiyuan;8ruluy6dl;开远
Mentougou;a0ymuh6dl;门头沟
Lushui;8xqlim6dl;泸水市
Jijiang;97dm356dl;几江|江津区|几江街道
Hanfeng;9clm946dl;开县|汉丰|汉丰街道
Peicheng;9mimws6dl
Ezhou;9agmqz6dl
Zhengding;9vzmq96dl;正定
Yongchuan;97jm256dl;永川|永川区
Hepu;8m6mbc6dl;合浦|廉州|廉州镇
Aihui;asunq46dl;爱辉|爱辉镇
Fuding;91xn5x6dl;福鼎
Humen;8pemnr6dl;虎门|虎门镇
Haicheng;a3hncz6dl;海城|海城市
Beipiao;a63n7i6dl
Jinshanlu;amxkot6nl;金山路|阿勒泰|阿勒泰市
Guixi;9a9m676dl;桂溪|垫江县|桂溪镇
Laizhou;9tan566dl;掖县|莱州|文昌路
Huixing;98gm456dl;回兴|黄葛坪|回兴街道
Changyuan;97om1b6dl;昌元|荣昌县|昌元街道
Shangri-La;93blkz6dl;香格里拉|香格里拉市
Yangcheng;99cm366dl;阳城|合阳城|阳城街道
Dunhuang;a1ll706dl;敦煌|敦煌市
Jing’an;8npmmp6dl;井岸|井岸镇
Zaoyang;9f9ml76dl
Baishan;a6inn66dl;白山|八道江|白山市
Zhenping;9hrmjr6dl;镇平|镇平城关镇
Anda;aj1nk26dl;安达|安达市|安达镇
Pingwu County;9g1lyd6dl
Qianjiang;9aimll6dl;园林|园林街道
Zhenzhou;9fon316dl;真州|仪征市|真州镇
Xindi;98umn76dl
Fengcheng;98vm5e6dl;凤城|长寿区|凤城街道
Jiutai;acnnlj6dl;九台
Licheng;8qqmo66dl;曾城|荔城|荔城街道
Dongling;a65nfa6dl
Laiyang;9sqn7b6dl
Ulanhot;ai0nb46dl;王爷庙|乌兰浩特|乌兰浩特市
Songcheng;90on5c6dl;松城|松城街道
Hengshan;aflnzm6dl;奋斗|恒山|恒山区
Tongzhou;a0umw26dl;通州
Anbu;8r5mw46dl;庵埠
Ning’er;8q0loo6dl;宁洱
Fengcheng;9memvv6dl
Tacheng;ajvkag6nl;塔城|塔城乡|塔城市
Zhicheng;9a6mhq6dl;枝城|枝城镇
Nanpiao;a46n7f6dl;南票
Lizhi;98im6c6dl;荔枝|涪陵区|荔枝街道
Yizhou;8u2m9v6dl;宜州
Xinqiao;9can8z6dl;新桥|新桥镇
Yichun;amknu06dl;伊春|伊春市
Lianghu;99bn7u6dl;梁湖|梁湖镇
Guangshui;9dumoo6dl;广水|广水街道
Fu’an;919n4c6dl;城阳|福安|城阳乡
Zhaodong;ahxnlw6dl;肇东|肇东市|肇东镇
Wujiaqu;acokn46nl;五家渠|五家渠市
Sanshui;8qbmll6dl;三水
Boshan;9rcmzb6dl
Yangchun;8nlmii6dl;阳春
Dingzhou;9wzmrf6dl;定州
Pengpu;9cxn9c6dl;彭浦
Chenghua;8r6mwd6dl;澄华|澄海
Longfeng;aj9nji6dl;龙凤|龙凤区|龙凤街道
Beining;a5knab6dl
Dunhua;aahns76dl;敦化
Sujiatun;a5qnem6dl
Honggang;aiwniw6dl;红岗|红岗区|红岗街道
Taozhou;9bvn3p6dl;广德|桃州|桃州镇
Xinji;9vdms26dl;辛集
Taishan;8ntmla6dl;台城|台山|台山市
Acheng;agjnon6dl;阿城|阿城市
Hailin;adtnvf6dl;海林|海林市
Yong’an;9c6mc26dl;永安|奉节县|永安镇
Nanjin;99am376dl;南津|合川区|南津街道
Qianjiang;981ma56dl;城西|黔江区|城西街道
Jieshou;9iemsg6dl;界首|界首市
Yushu;9holdh6dl;玉树市
Sanhe;98zm796dl;三合|三合镇|丰都县
Gongzhuling;aauniq6dl
Shuizhai;8shmtk6dl;水寨|水寨镇
Shanhaiguan;a14n4n6dl;山海关
Yuepu;9dbn9a6dl;月浦
Huadian;a9dno26dl;桦甸
Liuzhi;8yvm0v6dl;六枝
Fuyu;afiniq6dl
Chaohu;9dsmzf6dl;巢湖市
Liangping;9b6m7d6dl;梁平
Doilungdêqên;98ekwr6dl;东嘎
Jieshi;8pdmtr6dl;碣石|碣石镇
Hejiang;961m1z6dl;合江
Xiayang;9cjn8g6dl;夏阳|青浦区|夏阳街道
Wuyishan;934mzv6dl;武夷山|武夷山市
Jiashan;9bpn7x6dl
Huinong;9yzm4l6dl;惠农区
Gejiu;8qwluj6dl;锡城|个旧市
Jiagedaqi;au2ngs6dl;加格达奇区|加格達奇区|加格達奇區
Tumxuk;a0rjzm6nl;图木舒克|图木舒克市
Shiqiao;8prmmw6dl;市桥|番禺|市桥街道
Shenglilu;97jm246dl;胜利路|胜利路街道
Jiawang;9lnmy86dl
Puqi;98kmoc6dk
Wugang;909mfb6dk;武冈
Zhalantun;andncy6dk;兴华|扎兰屯|兴华街道
Fuji;96zm0p6dk;福集
Dawukou;9ygm3k6dk
Majie;8vjlt46dk;马街
Hepo;8r3mtr6dk;河婆
Shangzhi;aflnrk6dk;尚志|尚志市
Shuangcheng;ag2nmv6dk;双城
Dongyang;97bn5z6dk;东阳|东阳市
Nantou;8p4mmp6dk;南头|南头镇
Jiazi;8pkmuf6dk;甲子|甲子镇
Wuda;9zqm4f6dk;乌达|乌达区|巴音赛
Pingxiang;8nem4k6dk;萍乡
Santo António;8nomne5tk;花王堂區|聖安多尼堂區
Leiyang;8zcmli6dk;耒阳
Shuanglonghu;98km456dk;双龙湖
Shache;9wqjuk6nk
Gaojing;9d0n9g6dk;高境
Songnan;9d3n9g6dk;淞南
Jiangyou;9e9lyw6dk
Tengyue;8vflhn6dk;腾越
Shajing;8p7mo66dk;沙井|沙井街道
Jinfeng;94gmvw6dk;金峰
Jingzhi;9qvn3n6dk
Danshui;8pcmpz6dk;淡水|惠阳区
Macheng;9cmmri6dk;麻城|麻城市
Ālā'ĕr;a2mk5r6nk;阿拉尔|阿拉尔市
Nossa Senhora de Fátima;8npmnf5tk;花地瑪堂區
Huicheng;8q0mv16dk;惠城
Xiazhen;9momxb6dk
Haimen;8qfmvx6dk;海门|海门镇
Shahecheng;9smmq36dk
Yushu;aejnni6dk;榆树
Lecheng;8vtmmv6dk;乐城|乐城街道
Nancun;9rhn5p6dk;南村
Jiupu;a43ndj6dk
Baoshan;ajdo0z6dk;宝山
Luoyang;8qcmpf6dk;罗阳
Jiaohe;abgnpp6dk;民主|蛟河
Huangzhou;9almqw6dk
Xiulin;98kmk86dk
Zhoucun;9samza6dk
Xiangcheng;8wrlnc6dk;祥城
Longshui;985m1s6dk;龙水|龙水镇
Lianhe;akxnv36dk;南岔|联合|南岔区
Xilin Hot;ac5mub6dk;锡林浩特|锡林浩特市|阿巴哈纳尔旗
Lichuan;9a6mad6dk
Fengcheng;a2dngn6dk
Bao'an Centre;8oqmog6dk
Zhujing;9bun8k6dk;朱泾|朱泾镇
Zhaoyuan;9tsn6h6dk;罗峰|招远市
Lhasa;98dkx26dk;拉萨|拉薩|ラサ市
Xunchang;951lyv6dk;巡场
Nanbin;99cm8b6dk;南宾|南宾镇|石柱土家族自治县
Luodian;9dan916dk;罗店
Shaoshan;93kmkk6dk;韶山|韶山市
Wushan;9ccmd86dk;巫峡|巫山县|巫峡镇
Shunyi;a1gmw16dk;顺义
Longjing;a8tnvi6dk;龙井
Gulin;93wm1x6dk;古蔺
Chenggu;9i3m656dk
Dasha;8q7mn46dk;大沙|大沙街道
Yakeshi;aqwn7d6dk;牙克石|喜桂图旗|新工街道
Baisha;96qm2s6dk;白沙|白沙镇
Anliu;8rumtc6dk;安流|安流镇
Lengshuijiang;92xmhj6dk;冷水江|冷水江市
Tianfu;9tinb16dk;天福|文登|文登市
Mingshui;9s0mye6dk
Qiaotou;9smlqf6dk;桥头|大通回族土族自治县
Yuyao;99hn8j6dk;余姚
Zhaozhou;agznjz6dk;肇州
Wansheng;96gm516dk;万盛|万盛区
Wayaobu;9t6mcm6dk
Pingshan;8pvmqn6dk;平山
Songyuan;afdnir6dk;松原|松原市
Maba;8ukmnk6dk;马坝
Chengqiao;9dvn976dk;城桥
Taonan;afxnd26dk;光明|洮南|洮南市
Haikou;8uulsy6dk;海口|海口镇
Shaowu;91ymyc6dk;邵武
Mengmao;8solfu6dk;勐卯
Kaiyuan;a85ngk6dk
Wuzhishan;8e6mc66dk;冲山|冲山镇|五指山市
Xigang;9x3m3f6dk;习岗|贺兰县
Chóngfú;9atn6j6dk;崇福|崇福镇
Encheng;8nnmjy6dk;思城|恩平|恩城街道
Zhuji;98kn606dk;诸暨|诸暨市
Datun;9mpmwq6dk
Qingnian;9scmtf6dk;临青|青年
Linshui;9r6mp86dk
Hailun;altnok6dk;海伦|海伦市|海伦镇
Shilong;8q7mo96dk;石龙|石龙镇
Didao;afznzg6dk;东兴|滴道|滴道区
Jianchang;92kmw06dk;建昌|南城县|建昌镇
Hulan;ahhnnm6dk;呼兰
Zhongxiang;9clmkq6dk
Dehui;adqnl56dk;德惠
Hanjia;97em8g6dk;彭水|汉葭|汉葭镇
Taibai;9bmm906dk;太白|太白街道
Xuyong;949m0v6dk;叙永
Nehe;aooniv6dk;讷河
Jalai Nur;ardmyy6dk;扎赉诺尔
Tieli;akinrp6dk;铁力|铁力市|铁力镇
Shaping;8p9mls6dk;沙坪|沙坪街道
Anning;8v8lso6dk;安宁|连然|安宁市
Longjiang;aline86dk;龙江|龙江县|龙江镇
Buhe;9a5mjr6dk;埠河|埠河镇
Xinghua;9hin4v6dk
Chengtangcun;9ngmxj6dk;滕县|滕州|滕州市
Yidu;9s5n0y6dk
Zhonghe;951mar6dk;中和|中和镇|秀山土家族苗族自治县
Puyang Chengguanzhen;9p7mrj6dk;濮阳|濮阳城关镇|濮阳县城关镇
Daxing;a0emv56dk;大兴
Yezhou;9b0mcs6dk;业州|建始|建始县
Pailou;9bkm936dk;牌楼|牌楼街道
Pulandian;9zgnat6dk;普兰店
Wuchuan;8lmmfp6dk;吴川
Salaqi;a2mmez6dk;萨拉齐|土默特右旗
Jishu;ad4no86dk
Yuxi;8tolsu6dk;玉溪|红塔|玉渓市
Bashan;935mud6dk;巴山|崇仁县|巴山镇
Tongren;9onlre6dk;同仁|隆务|同仁县
Gangu Chengguanzhen;9mim0l6dk;甘谷县|甘古城关镇
Xincheng;a5vkad6nk;库车|新城|库车县
Jishou;94omct6dk;乾州|吉首|吉首市
Shuifu;95jly16dk;水富|向家坝|水富县
Hedong;8sgmtm6dk;河东|河东镇
Huacheng;8svmt56dk;华城|华城镇
Lianjiang;8m5mec6dk;廉江
Linxi;a0bn116dk;林西
Xinzhai;9r4n1i6dk
Kangding;99clr86dk;康定市
Qincheng;91lmvp6dk;琴城|南丰县|琴城镇
Menghuan;8twlhu6dk;芒市
Xixiang;9hnm7c6dk;西乡|西乡县
Dongsheng;a0mmdi6dk;东胜|东胜区
Wangkui;ak3nnc6dk;望奎|望奎县|望奎镇
Meihekou;a85nl46dk;梅河口
Xinle;9wjmql6dk;新乐
Linghe;9r0n2s6dk
Xingcheng;a2un7c6dk
Renqiu;9xjmui6dk;任丘|任丘市
Suifenhe;adco0b6dk;綏芬河|绥芬河
Xinshi;9c9mma6dk;新市
Xinyi;8o5mg76dk;信宜
Chengzihe;afynzw6dk;城子河
Xishan;92vmna6dk;西山|醴陵|醴陵市
Yeyuan;9r6n166dk
Guanhu;9lnmzs6dk
Jiudian;9srn5w6dk;旧店
Xinxing;9mmm0k6dk;新兴|新兴镇
Fangshan;a09mu86dk;房山
Jinniu;8xolnd6dk;金牛
Houzhen;9srn2h6dk
Gongguan;8mkmcg6dk
Nanxi;964lzm6dk;南溪
Lubu;8qdmjw6dk;禄步|禄步镇
Jinsha;9f5n8b6dk;通州|金沙|通州市
Ducheng;8qkmht6dk;都城|都城镇
Shenjiamen;998nbq6dk;沈家门|沈家门街道
Boli;ah3nyq6dk;勃利|勃利县
Xiaoshan;99tn626dk;萧山|萧山县
Xingguo;9mum1j6dk;兴国|秦安县
Wuchang;aetnp86dk;五常|五常市|五常镇
Bayan Hot;9xwm1j6dk;巴彦浩特|巴彦浩特镇|阿拉善左旗
Dunhou;915mr66dk;敦厚|吉安县|敦厚镇
Ximeicun;8vfn0v6dk;西美|西美村
Yishui;9pen1j6dk
Zhongduo;965ma46dk;钟多|钟多镇|酉阳土家族苗族自治县
Fangcheng;9iemlw6dk;方城|方城城关镇
Daotian;9sbn2a6dk
Baijiantan;agxkgi6nk;白碱滩|白碱滩镇
Yunnanyi;8wmlnp6dk;云南驿
Shuangliao;aavnf26dk;双辽
Zhaoyuan;aggnjg6dk;肇源
Dalai;agenha6dk
Tangwu;9r9n266dk
Jiayue;9q2n326dk
Changping;a1qmuv6dk;昌平
Lianzhou;8uumk56dk;连州|连州镇
Yingqiu;9rhn2j6dk
Dongcun;9s6n8k6dk
Danjiangkou;9gemhr6dk
Bai’anba;9bgm986dk;百安坝|百安坝街道
Zhongshu;8u4lw96dk;中枢
Huazhou;8m3mf66dk
Xingren;8wnm0b6dk
Longquan;8ujlrs6dk;易门|龙泉|易门县
Yatou;9t8nc46dk;崖头|荣成|荣成市
Tanfang;9ryn1n6dk
Lingyuan;a4kn3o6dk
Gaoyou;9h3n3s6dk;高邮|高邮市|高邮镇
Yulinshi;9wdmcu6dk;楡林|榆林|楡林市
Hanting;9s5n356dk;寒亭|潍县|寒亭区
Tongren;930mbb6dk;铜仁市
Xihe;9e1mn76dk;淅河|淅河镇
Duobao;9b7ml16dk;多宝|多宝镇
Sishui;9p1mxs6dk
Gantang;928mj16dk
Luomen;9mjlzq6dk;洛门
Huaidian;9ivmrj6dk
Baisha;8mcmco6dk
Miaohang;9d0n9c6dk;庙行
Fujin;al9o2r6dk;富锦
Huaicheng;8sgmjm6dk;怀城|怀城镇
Micheng;8weln56dk;弥城
Lucheng;9crmxs6dk;庐城|庐江县
Hede;9jtn626dk;合德|射阳
Chengxiang;9d8mcd6dk;城厢|城厢镇|巫溪县
Nandajie;97im256dk;南大街|南大街街道
Lengshuitan;8zdmi06dk;冷水滩
Wangqing;aabnwg6dk;汪清|王清县|王清镇
Xiazhuang;9r9n4w6dk
Dongxing;8lvm7x6dk
Gengqing;9eelhu6dk;更庆|更庆镇
Linjiacun;9pzn4d6dk
Zhoujiaba;9bom916dk;周家坝|周家坝街道
Honghe;9r4n2c6dk
Baixi;95qlyf6dk;柏溪|宜宾县|柏溪镇
Lidu;98mm616dk;李渡|李渡镇
Yuzhou;9kvmn76dk;禹州|颍川
Gusong;94nm0c6dk;古宋|古宋镇
Hanchuan;9b5mo16dk
Tiefu;9lxmzv6dk
Qiongshan;8hlmej6dk;琼山|琼山区
Xiangxiang;931mkl6dk;湘乡|湘乡市|湘郷市
Deqing;9aun586dk;德清|德清县
Xujiang;90kmv46dk;旴江|广昌县|旴江镇
Mishan;agjo2c6dk
Nenjiang;aqlnju6dk;嫩江|嫩江县
Menglang;8oollj6dk;勐朗
Shizilu;9npn236dk
Jiangshan;9rwn6t6dk;姜山
Zhaogezhuang;a0hn0x6dk;赵各庄
Anlong;8vqm146dk
Qamdo;9chldy6dk;昌都|昌都市
Nanfeng;8rxmik6dk;南丰|南丰镇
Zhonggulou;9bmm926dk;钟鼓楼|钟鼓楼街道
Longnan;9islzg6dk;隴南| 陇南|陇南市
Helong;a86nuc6dk;和龙|和龙市|和龙镇
Nanding;9s3mzy6dk
Guozhen;9lhm686dk;虢镇|虢镇镇|陈仓区
Dengzhou;9v1n7g6dk;登州|蓬莱|蓬莱市
Qufu;9owmwz6dk;曲阜市
Laojunmiao;a0nlfh6dk;玉门|老君庙|老君庙镇
Dacheng;8g7mbv6dk;大成|大成镇
Mianyang;9i4m4d6dk;勉县|勉阳|勉阳镇
Dazhong;9i8n6m6dk;大中|大中镇
Liaolan;9rvn506dk;蓼兰
Jinxiang;927n716dk;金乡
Dongxia;9s3n1e6dk
Degan;97cm336dk;德感|德感街道
Xiannü;9g3n446dk;仙女|江都市
Yinma;9run3u6dk
Lingdong;ajbo0a6dk;岭东
Nanzhang Chengguanzhen;9eamin6dk;南漳城关镇
Xucheng;8ihme16dk;徐城|徐城镇|徐城街道
Wensu;a4ok2w6nk;温宿|温宿县
Hecun;9rhmoz6dk
Ningyang;9pcmwf6dk
Jinshi;988mir6dk;津市|津市市
Yuanping;9xkml86dk;原平|原平市
Aoxi;927mts6dk;鳌溪|乐安县|鳌溪镇
Liping;8yvmb56dk
Changqing;9rkmw96dk
Dali Old Town;8xdlm86dk
Xindian;9s8n0l6dk
Yima;9mimis6dk
Qiaoguan;9rkn286dk
Nangong;9trmsj6dk;南宫
Lüshun;9xsn8v6dk;旅順|旅顺口区
Anguo;9mrmwi6dk
Shiwan;8pwmm46dk;石湾|石湾街道
Donghe;9fjm3a6dk;东河|旺苍|东河镇
Huaiyang;9uwmq46dk;槐阳
Tangping;8n7miy6dk;塘平|塘坪镇
Yudong;97mm3w6dk
Changning;95elzg6dk;长宁
Xiugu;93jmwe6dk;秀谷|秀谷镇|金溪县
Feicheng;9nymzp6dk
Shanting;9ngmya6dk
Junlian;949lyb6dk;筠连
Nianzhuang;9lamz56dk
Yingjiang;8unlg26dk;平原|盈江
Zhuanghe;a0andn6dk
Loushanguan;946m4q6dk;桐梓|娄山关|桐梓县
Baoying;9ibn3f6dk
Dashiqiao;a2wnca6dk;大石桥|大石桥市
Panshi;a9anm66dk;磐石
Xichang;8m3man6dk
Huanglou;9rtn1h6dk
Dushan;8xrm6p6dk
Rikaze;979kqw6dk;日喀则|日喀则市|桑珠孜区
Songlou;9m1mvw6dk
Taixing;9fdn5d6dk;泰兴|泰兴市|泰兴镇
Tangjiazhuang;a0en116dk;唐家庄
Yanta;9qomtb6dk;雁塔
Zhuangyuan;9tnn7n6dk;庄园|栖霞市
Wuyang;9evmux6dk
Xiongzhou;8vsmpi6dk;雄州
Chaigou;9qpn4a6dk
Xinzhou;9brmqw6dk
Shitanjing;9yzm3e6dk
Tumen;a9dnwo6dk;图们
Qinggang;97vm346dk;青杠|大字号|青杠街道
Hengbei;8scmth6dk
Yishan;9qmn1q6dk
Youhao;amxntw6dk;友好|友好区|友好街道
Pingyi;9ommyr6dk
Wulong;97gm7c6dk;武隆
Linping;9ain666dk;临平|临平镇
Xixiang;8ormod6dk;西乡|西乡街道
Huankou;9mvmw36dk
Linkou;afsnxv6dk;林口|林口县
Huangmei;99vmua6dk;黄梅
Feicheng;9qpmwd6dk
Songling;9cnn7c6dk;松陵
Jishui;9jpmsk6dk
Shulan;addnon6dk;舒兰
Baicheng;9qxn4q6dk
Damiao;9l6my06dk
Jiexiu;9sumiv6dk;介休|介休市
Hunchun;a93ny46dk;珲春|珲春市
Sandu;8gzmbe6dk;三都|三都镇
Liangxiang;a0emul6dk;良乡
Zhaodun;9lamze6dk
Fenghua;98en996dk;奉化|奉化市
Yaxing;8g1mbi6dk;雅星|雅星镇
Yangliuqing;9yqmx06dk;杨柳青
Qiuji;9jwmzs6dk
Qingquan;9alms66dk;清泉|浠水县|清泉镇
Shouxian;9mtmvi6dk
Lintong;9limbd6dk;临潼
Kageleke;9tmk146nk;喀格勒克
Kanjia;9r1n466dk
Yinzhu;9pon5a6dk;隐珠
Chaoyang;a8inm36dk
Shangmei;932mh66dk;上梅
Fuyu;amrnhq6dk;富裕|富裕县|富裕镇
Maozhou;8p8mo56dj;茅洲
Huilong;9edn9x6dj;启动|汇龙|启动市
Beidao;9m1m256dj;北道|麦积区|北道街道
Yanggu;9qbmtm6dj;阳谷
Longgang;98im1n6dj;龙岗|龙岗街道
Shancheng;9momug6dj
Zhangzhai;9m6mwv6dj
Nanma;9qin076dj;南麻|南麻镇
Huicheng;98zn0z6dj;徽城|歙县|徽城镇
Yuanshang;9s5n6b6dj;院上
Suixi;9k5mwd6dj;濉溪
Xinmin;a6nnd76dj
Zhangzhuang;9lwmx16dj
Gucheng Chengguanzhen;9fnmi36dj;古城城关镇
Xianshuigu;9ybmy26dj;津南|咸水沽|津南区
Yunyang;9ixml36dj;云阳
Huayuan;94lmxl6dj;花园|贵溪|贵溪市
Lanxi;976n3v6dj
Genhe;av2n9k6dj;根河|河西|根河市
Luocheng;97mlwz6dj;罗城
Heguan;9shn1d6dj
Juegang;9fsn8n6dj;掘港|如东县|掘港镇
Shixing;8vbmov6dj
Dongdu;9plmyy6dj
Yanjia;98vm586dj;晏家|晏家街道
Dongkan;9kgn4v6dj
Huangchuan;9famrk6dj;定城|潢川
Wusu;adfkf86nj;乌苏|乌苏市
Lanxi;aiinms6dj;兰西|兰西县|兰西镇
Miyang;8tslvc6dj;弥勒|弥阳|弥勒县
Jiangzhuang;9rdn4r6dj
Beichengqu;a2cmmb6dj;丰镇|豊鎮|丰镇市
Xinzhi;9remia6dj
Licheng;9dbn3w6dj;凓城|凓城镇|溧阳市
Zhoucheng;9prmv36dj
Caidian;9aymor6dj;蔡甸|蔡甸区|蔡甸街道
Xiuyan;a1xnef6dj;岫岩
Luohuang;97jm3o6dj;珞璜|珞璜镇
Shangsi;8nkm7y6dj;上思|思阳
Qarasu;acsk3e6nj;卡拉苏|霍尔果斯
Changtu;a8ungq6dj;昌图|昌图县
Huashan;9m7mwa6dj
Anlu;9cumns6dj;安陆
Yilan;aionvw6dj;依兰|依兰县|依兰镇
Linjiang;9cem8m6dj;临江|临江镇
Guiping;8qzmdr6dj;桂平|桂平镇
Kuandian;a35nim6dj
Shenzhen City Centre;8ommow6dj
Poyang;96jmw36dj;鄱阳|鄱阳县|鄱阳镇
Yongfeng;929mjl6dj;永丰
Gongchangling;a48nex6dj
Jimo;9r3n6m6dj;即墨|即墨市
Baiquan;am9nm86dj;拜泉|拜泉县|拜泉镇
Jiangyan;9gbn5q6dj;姜堰|姜堰市|姜堰镇
Shiguai;a33med6dj;石拐|石拐区|石拐矿区
Fuyang;99hn576dj;富阳|富阳市
Haining;9aun796dj;硖石|硖石街道
Shankou;8m0mcs6dj
Pan’an;9mjlzz6dj;磐安镇
Mengcheng Chengguanzhen;9ifmvt6dj;蒙城城关镇
Xinhe;9skn476dj;新河
Shima;96jm286dj;石蟆|石蟆镇
Fengping;8tslho6dj
Chengxian Chengguanzhen;9jrm1p6dj;成县|城关镇|成县城关镇
Xininglu;ad6kfu6nj;独山子|西宁路|独山子区
Xuantan;975m196dj;玄滩
Jiehu;9oqn126dj
Linjiang;a65noj6dj;临江
Tantou;8ybn486dj;潭头|潭头镇
Xiaoshi;a4qngs6dj;小市|本溪|小市镇
Jinjiang;8gtmdl6dj;金江|澄迈县
Yunmen;99km3c6dj;云门|云门镇
Wushan;9mglzd6dj;武山
Heishan;a5tnb76dj
Pengcheng;9r7mp56dj
Wenjiang;94vlyg6dj;文江
Shima;8txmz96dj;石码
Mingguang;9h2mzo6dj
Ninghai;97dn9a6dj;宁海|宁海县
Chaihe;aecnw86dj;柴河|柴河镇
Minggang;9g6mot6dj
Tangzhai;9lnmvv6dj
Xunyang;9h6mbt6dj
Yanghe;9wcm356dj;杨和|永宁县
Dongfeng;a8jnkp6dj;东丰|东丰村
Jiang’an;95tlzv6dj;江安
Zhenlai;ahdne86dj;镇赉
Shuangfengqiao;98km476dj;双凤桥|渝北区|双凤桥街道
Songjianghe;a77nq46dj;松江河|松江河镇
Luorong;8ttmch6dj
Lüeyang Chengguanzhen;9ilm2v6dj;略阳|略阳城关镇
Wenling;94un966dj;温岭
Huajing;9cgn9d6dj;华泾
Fuqing;8xhn3l6dj;福清
Caohe;99zmsn6dj;漕河|漕河镇
Gaoliu;9s8n166dj
Xinzhou;8grmbn6dj;新州|新州镇
Pingzhuang;a6sn3d6dj;平庄|平庄镇|元宝山区
Tianliu;9ssn1y6dj
Lushar;9rclq46dj;湟中县|鲁沙尔
Wanggou;9mbmvl6dj
Fengkou;99kmmt6dj;峰口|峰口镇
Shajing Town;8p6mo56dj
Liuhe;a7gnlb6dj;柳河|柳河县
Hanyin Chengguanzhen;9hdm9e6dj;汉阴县|汉阴城关镇
Wacheng Neighborhood;9jumq46dj;娲城
Duoba;9rulq16dj;多巴|多巴镇
Shaozhuang;9s3n0o6dj
Tailai;aivnet6dj;泰来|泰来县|泰来镇
Lishi;96sm366dj;李市|李市镇
Chengyang;9oun236dj
Sanchazi;a6wnno6dj
Daxu;9l8myj6dj
Qaraqash;9tjk1h6nj;喀拉喀什|喀拉喀什镇
Taihe;99mm2l6dj;太和|太和镇|太河坝
Lianyuan;92xmi66dj;涟源|涟源市|漣源市
Wuxi;8zumiq6dj;浯溪|浯溪镇
Qipan;9l4n0e6dj;棋盘村
Tangxiang;98im1o6dj;棠香|大足县|棠香街道
Huinan;a8enmq6dj
Beimeng;9ron3y6dj
Luoyang;8vcn1o6dj;洛阳
Muling;aesnyk6dj;穆棱|八面通|穆棱市
Huanren;a4mnk96dj
Qionghu;964mk46dj;琼湖|沅江市
Huanan;aignyn6dj;桦南|桦南县|桦南镇
Xiaolingwei;9ezn256dj;孝陵卫|孝陵卫街道
Ganshui;95um4f6dj;赶水|赶水镇
Yaoji;9knmza6dj
Qiantang;99um3c6dj;钱塘|钱塘镇
Mengyin;9p7mzl6dj
Jietou;8wnli16dj
Xiangcheng;9k1mn96dj;襄城|襄城城关镇
Bayiji;9l7myw6dj
Shangkou;9spn286dj
Ligezhuang;9r0n5q6dj;李哥庄
Dashitou;aabnsz6dj
Huanghua;9ppn3u6dj
Qingyang;9u6n8u6dj;清洋|福山|福山区
Babu;8tumhs6dj
Yebaishou;a50n4c6dj
Huaiyuan Chengguanzhen;9hkmxh6dj;怀远城关镇
Xincheng;9jfmry6dj;新城
Bianzhuang;9mtmzw6dj
Suyangshan;9ljmz46dj
Hepingjie;a6unok6dj;湾沟|和平街|湾沟镇
Liuxin;9lhmxc6dj
Caoqiao;9len036dj
Longshan;8ucli66dj;龙山
Fengrun;a0nn066dj;丰润
Kunyang;92vn6x6dj
Tianzhuang;9s8n4m6dj;田庄
Lingao;8hbmcp6dj;临城|临高|临城镇
Shikang;8mhmbo6dj
Fenggang;92jmut6dj;风冈|宜黄县|风冈镇
Picheng;9lrmzp6dj
Renzhao;9rsn5w6dj;仁兆
Changli;a0bn306dj;昌黎
Kaihua;8qxlxo6dj;开化
Yunmeng Chengguanzhen;9camo16dj;云梦城关镇
Yangzhou;9iam6q6dj;洋县|洋洲|洋洲镇
Qinggang;ajqnm96dj;青冈|青冈县|青冈镇
Dengbu;94dmwi6dj;邓埠|余江县
Yangcun;9zcmx66dj
Zhicheng;9c5n536dj;雉城|长兴县|雉城镇
Lulou;9mgmwd6dj
Baihecun;8nfm5w6dj;百合|百合村
Guanyin;96ulxz6dj;观音
Mabai;8pxly56dj;马白
Nanlong;9d3m2m6dj;南隆
Youxi;975m2u6dj;油溪|油溪镇
Xiazhuang;9n0n1k6dj
Changcheng;9q9n3t6dj
Shanwang;9rjn1r6dj;山旺
Botou;9vrmvt6dj;泊头
Liuku;8xtlim6dj
Baoqing;aioo376dj;宝清
Shizhai;9mpmw06dj
Jinggou;9qsn436dj
Fanlou;9lsmwl6dj
Changle;8mnmby6dj
Miaojie;8wblmk6dj
Kaitong;aehndw6dj;开通
Zhangjiachuan;9n7m316dj;张家川|张家川回族自治县
Pingnan;8remen6dj;平南|平南镇
Dêqên;998kw06dj;德庆
Songyang;9lqmlz6dj;嵩阳
Yucheng;9n1mvj6dj
Shuikou;8smmty6dj;水口|水口镇
Shuangyang;aawnl26dj;双阳
Nianzishan;alzndd6dj;碾子山
Pingyin;9qsmvh6dj
Bin Xian;ah2nq26dj;宾县|宾州|宾州镇
Qingshuping;922mj66dj
Hushitai;a6inf26dj;虎石台
Zhaobaoshan;999na16dj;镇海|招宝山|镇海区
Zhangji;9kumy26dj
Huoqiu Chengguanzhen;9fvmv16dj;霍邱城关镇
Mudu;9cun6s6dj;木渎|木渎镇
Fengyi;8x2lmn6dj
Nandu;8phmfu6dj
Longfeng;9afmc76dj;龙凤坝|龙凤坝镇
Taoluo;9nzn3l6dj
Yingshang Chengguanzhen;9gnmuz6dj;颖上城关镇
Xiangzhou;9qgn3q6dj
Yongning;8p8m9c6dj;蒲庙|邕宁|蒲庙镇
Xinye;9gdmk56dj;新野|汉城
Lishu;aabnhd6dj;梨树
Oroqen Zizhiqi;auhnfo6dj;阿里河|阿里河镇|鄂伦春自治旗
Xianju;965n7d6dj;仙居
Jianguang;94bmtm6dj;丰城|丰城市
Dongning;acgo086dj;东宁|东宁县|东宁镇
Dashi;99lm326dj;大石|大石镇
Tianchang;9vkmoq6dj
Xifeng;a8qnig6dj
Datong;9gmmx66dj
Nanhu;9oln3j6dj
Yicheng;9e2mju6dj;鄢城|鄢城街道
Xiema;98pm3h6dj;歇马|歇马镇
Yanliang;9mambf6dj;阎良
Tahe;azcnie6dj;塔河
Erdaojiang;a62nm36dj
Tianpeng;9c3lwq6dj;天彭
Xixiang;9nomli6dj
Yaowan;9kymzz6dj
Mujiayingzi;a70n1y6dj
Dingjia;97pm2u6dj;丁家|丁家镇
Langzhong;9dnm2f6dj;阆中
Liancheng;8xgmwb6dj;莲峰|连城
Jiangbei;98lm486dj;江北
Longgang;9uln696dj;龙港|龙港街道
Taitou;9svn1j6dj
Gushu;9don146dj;姑熟
Fenshui;9bcm886dj;分水|分水镇
Wujing;9r9n0w6dj
Wucheng;988n096dj;五城|五城镇
Yuxia;9kmm9r6dj;余下|余下镇
Runan;9hompn6dj;汝南|汝宁
Zhijiang;9aimif6dj
Gucheng;9snn1w6dj
Taozhuang;9mtmxx6dj
Sandaohezi;ad5khu6nj;三道河子|三道河子镇
Yongbei;901lny6dj;永北
Dazeshan;9srn546dj;大泽山
Wuzhen;9bfn6p6dj;乌镇|乌镇镇
Zhujiajiao;9cfn8a6dj;朱家角|朱家角镇
Jiangkou;8wtn346dj;江口|江口镇
Maqin County;9lrlmg6dj;玛沁县
Pucheng;93kn196dj;南浦|浦城|南浦镇
Baimajing;8grmbe6dj;白马井|白马井镇
Tuanbao;9aamb56dj;团堡|团堡镇
Wenshang;9p9mvm6dj
Mingshui;al2nlq6dj;明水|明水县|明水镇
Huiqu;9qrn2p6dj
Gannan;an4nf26dj;甘南|甘南县|甘南镇
Pánlóngchéng Jīngjì Kāifāqū;9b9mpf6dj
Hongjiang;91bmdk6dj
Jian’ou;914n0o6dj;建瓯|芝城|建瓯市
Tashan;9lemyl6dj
Jixian;ajto096dj;集贤
Hezuo;9n7ltv6dj;合作|合作市|合作镇
Haizhou;9m2n2x6dj;海州
Longgu;9mymwh6dj
Yigou;9phmpk6dj
Langtoucun;a18nhe6dj;浪头|浪头村
Xiaoweizhai;8yrm6n6dj
Antu;a9qnu36dj;安图|明月
Suozhen;9snn026dj
Taifu;96im1g6dj;太伏
Shiqiaozi;9qgn3a6dj
Jidong;afqo086dj;鸡东
Fenyi;939mqj6dj;分宜|分宜县|分宜镇
Chonglong;98qlz96dj;重龙
Xinglongshan;ac4nkj6dj
Barkam;9emlry6dj;马尔康市
Tongchuan;9cdlzx6dj;潼川
Shibuzi;9qcn2u6dj
Lixian;9kzm056dj
Hongqiao;90dmjf6dj;洪桥
Changbai;a52ns46dj;长白
Zhutuo;96mm216dj;朱沱|朱沱镇
Dingtao;9nfmt16dj;定陶
Dongxi;95wm4a6dj
Juye;9obmuf6dj;巨野|巨野镇
Hancheng;9oimer6dj
Santangpu;925mj36dj
Jing'an;9lumws6dj
Emin;aj9kcb6nj;额敏|额敏镇
Longtan;95wmao6dj;龙潭|龙潭镇
Shenliu;97pmjk6dj;安乡|深柳|安乡城关镇
Maocun;9limxp6dj
Huangpi;9bsmpq6dj;黄陂|黄陂区
Shanhecun;agznt66dj;山河村
Yantongshan;aa9nm16dj
Guiren;9jjn0b6dj
Zhongxing;9jmn1o6dj
Langxiang;akfntz6dj;朗乡|朗乡镇
Bageqi;9t6k1s6nj;巴格其
Suiling;al7np36dj;绥棱|绥棱县|绥棱镇
Wenxing;95omlk6dj;文星|湘阴县
Yingli;9syn216dj
Baishishan;ab2nqd6dj
Ninghai;9tun9t6dj;宁海|宁海街道
Zhuzhai;9mkmwh6dj
Jinji;8qjmfv6dj
Weining;90llxj6dj
Qingfu;950lyc6dj;庆符
Daokou;9otmq46dj;道口
Yashan;8nomde6dj
Nantai;a3ond46dj;南台|南台镇
Changleng;95qmtq6dj
Hutang;9dln3x6dj;湖塘
Sanchuan;90blnm6dj
Sitou;9qvn0x6dj
Zibihu;8yjlln6dj;玉湖
Baidi;9camcf6dj;白帝|浣花溪|白帝镇
Gaogou;9kin336dj;高沟|高沟镇
Linghai;a4dn956dj
Longshi;99xm3q6dj;龙市|龙市镇
Xuzhuang;9lamya6dj
Gongyi;9mkmlx6dj;紫荆路
Qinnan;9idn536dj
Gelan;99gm5k6dj;葛兰|葛兰镇
Changling;acznge6dj;长岭
Dalianwan;9yfna26dj
Bonan;8wqlkh6dj;老街
Zhuyi;9c7mbv6dj
Yongqing;9mjm2t6dj;永清|清水县
Linqiong;9ailve6dj;临邛
Qishan;98wmz06dj;祁山
Lanshan;9kamz16dj
Anjiang;91wmdu6dj
Xinqing;ao5nvs6dj;新青
Dorbod;ak6nho6dj;泰康|泰康镇|杜尔伯特
Yutan;94imko6dj;玉潭|宁乡县
Ahu;9lin1g6dj
Bayan;ai0npv6dj;巴彦|巴彦县|巴彦镇
Licha;9q6n4q6dj;里岔
Pingjin;9b1m6q6dj;屏锦|屏锦镇
Shilin;8uylv16dj;石林|石林镇
Liguo;9lzmxx6dj
Huangnihe;ab0nrm6dj
Manzhouli;arsmy76dj;満州里|満州里市|满洲里市
Huguo;95fm0p6dj;护国
Liuji;9lgmx56dj
Liangzhai;9lumwb6dj
Liaozhong;a5bncw6dj
Wangji;9kemz36dj
Nanzhou;97kmk96dj;南县|南洲|南洲镇
Yunjin;96sm1g6dj;云锦
Luojing;9dgn926dj;罗泾|罗泾镇
Fangcun;9kpmyb6dj
Yongjian;8wnlmd6dj
Xiazhuang;8wklo36dj
Mingcun;9s3n4c6dj;明村
Lingcheng;9jyn036dj
Jinding;8zglk86dj;金顶
Qingxichang;94wmai6dj;清溪场|清溪场镇
Jinhua;8zqllk6dj;金华
Buzhuang;9sjn446dj
Shiquan;9hsm8o6dj
Yangtun;9mwmwo6dj
Zhangfeng;8t7lfo6dj;章凤
Yousuo;8ybllz6dj
Zhaozhuang;9mimvi6dj
Tangzhang;9kvmxp6dj
Lingwu;9vum3e6dj
Taoyuan;9k1mz56dj
Beisu;9vzmqx6dj;北苏|北苏镇
Wulingyuan;97jmf26dj;军地坪|喻家咀|武陵源
Malingshan;9l0n0s6dj
Hualong;9snn1f6dj
Dianbu;9ryn6b6dj;店埠
Daxing;91qlo66dj;大兴
Puji;9qdn4k6dj
Xingqiao;9agn616dj;星桥|星桥镇|星桥街道
Songlingcun;a1xn0j6dj;松岭|松岭村
Yunshan;9san5z6dj;云山
Dapeng;9l8mx86dj
Sanzhuang;9omn316dj
Zhawa;9tdk176nj;扎瓦
Jitai;9s4n1u6dj
Zizhuang;9lgmyd6dj
Liangji;9kcmzp6dj
Ānwén;96qn6k6dj;安文|安文镇
Dashahe;9lymvy6dj
Duzhou;990m5g6dj;渡舟|渡舟镇
Zhongxin;8zylpb6dj;中心
Weimiao;9m2mx76dj
Qishan;9m7mwg6dj
São Lourenço;8nnmnd5tj;風順堂區|风顺堂区
Zepu;9w3jun6nj;泽普
Liuquan;9lnmxu6dj
Zhefang;8tflh06dj
Sanhui;99km436dj;三汇|三汇镇
Dianzi;9sin4z6dj;店子
Panlong;97ym0p6dj;盘龙|盘龙镇
Gangshang;9lwn046dj
Guanshan;9jwmzf6dj
Datong;95gm4b6dj;打通|打通镇
Shuijiang;979m606dj;水江|水江镇
Guanzhuang;9qqn336dj
Shanji;9l0myo6dj
Lhünzhub;991kxi6dj
Hanyuan;9h7m356dj;宁强|汉源|宁强县
Yanghe;9qen536dj;洋河
Nanjian;8vkln76dj;南涧
Naxi;95xm0o6dj;纳溪
Zhenxi;992m6i6dj;珍溪|珍溪镇
Yongxin;96hm3x6dj;永新|永新镇
Changdian;9mmmvu6dj
Xinglou;9m1mzb6dj
Mihe;9rqn196dj
Maizhokunggar;98wkyt6dj;工卡
Shuanghe;97gm196dj;双河|双河镇
Guangshun;97lm156dj;广顺|广顺街道
Gaoliang;9bmm8u6dj;高粱|高粱镇
Dongcheng;8grmc26dj;东成|东成镇
Jinjiang;94wmwq6dj;锦江|锦江镇
Gao’an;9a5m6i6dj;高安|高安镇
Jiawang Zhen;9lmmyb6dj
Haiyang;98rn0a6dj;休宁|海阳|海阳镇
Gupi;9krmzg6dj
Xinhe;9kzmzr6dj
Ningdong;9w0m436dj
Xianfeng;975m3a6dj;先锋|先锋镇
Gaoliu;9lcn186dj
Liutuan;9sln3m6dj
Da’an;97mm2h6dj;大安|大安镇
Chenlou;9ljmzx6dj
Qing’an;9kdmzg6dj
Shiyan;99km5p6dj;石堰|石堰镇
Dalu;98lm326dj;大路|大路镇
Qianliu;8pmlmc6dj
Weiji;9kjmzn6dj
Wangfen;9rjn0u6dj
Jielong;979m4m6dj;接龙|接龙镇
Shuangfu;97pm376dj;双福|双河场|双福镇
Damxung;9aokx36dj;当曲卡
Baizi;99lm1n6dj;白梓|白梓镇
Yuexi;9bvm8g6dj;岳溪|岳溪镇
Cuijiaji;9rrn4j6dj;崔家集
Jieshi;97nm456dj;界石
Damoujia;9rin4t6dj;大牟家
Shunhe;9msmvs6dj
Gongqingcheng;979mtp6dj
Hekou;9m2mwh6dj
Diaoyucheng;99cm376dj;钓鱼城|钓鱼城街道
Hanwang;9kzmx86dj
Changsha;9c4m8u6dj;长沙|长沙镇
Kongtan;96ylyr6dj;孔滩
Sunlou;9mbmvu6dj
Qabqa;9qslnh6dj;共和县|恰卜恰
Nanpeng;97hm496dj
Yuqunweng;abvk6q6nj;愉群翁|愉群翁回族乡
Shaji;9k6n056dj
Nantong;96em4w6dj;南桐|南桐镇
Sanjiao;97xm236dj;三教|三教镇
Sankeshu;8zsm876dj
Mangshi;8txlht6dj;芒市
Biantang;9lmmyt6dj
Baitao;983m6l6dj;白涛|白涛镇
Shijiao;96cm4k6dj;石角|石角镇
Chefushan;9lsmz36dj
Shuanggou;9kkmym6dj
Gudong;8welhk6dj
Pingli;9fymbr6dj
Zouzhuang;9m4mzx6dj
Dangjiang;8m5mb46dj
Tangba;99em1w6dj;塘坝|塘坝镇
Nongzhang;8uelfw6dj
Hekou;8omlwx6dj;河口
Yanguan;9l6m0y6dj
Shangyun;8q1llb6dj
Dahuangshan;9l9mxy6dj
Hegou;9lln046dj
Qisha;8lym9c6dj
Shuitu;98qm3u6dj;水土|水土镇
Guxian;9s1n5z6dj;古岘
Jiushan;9qkn136dj
Xindian;9kun0q6dj
Youting;97rm1q6dj;邮亭|邮亭镇
Qingshanquan;9lmmy06dj
Caojie;99cm3j6dj;草街
Beiwangli;9xamsk6dj
Shuanglong;951lxu6dj;双龙
Gaojia;99em7m6dj;高家|高家镇
Caijia;96bm3e6dj;蔡家|蔡家镇
Rizhuang;9snn6e6dj;日庄
Han’airike;9uak2k6nj;罕艾日克
Shihao;95am4c6dj;石壕|石壕镇
Jingguan;992m406dj;静观|静观镇
Juexi;96clxm6dj;蕨溪
Gaozuo;9k6mzw6dj
Zhonghe;9cmm8d6dj;中和|中和镇
Kuiya;9tmk186nj;奎牙
Zhigou;9psn366dj
Bowangshan;94nlzt6dj;博望山
Huangji;9lnmwy6dj
Zhengji;9lomx46dj
Jiangping;8m0m8f6dj
Baichihe;9qcn416dj
Tushan;9l2mzc6dj
Guandu;9c0md56dj;官渡|官渡镇
Pu’an;9f0m0z6dj;普安|剑阁县|普安镇
Luobuqiongzi;971krx6dj;白朗县|洛布穷孜
E’erguna;atin5t6dj;拉布大林|拉布达林|额尔古纳
Daizhuang;9lvmzd6dj
Zhuhai;97lm246dj;竹海|茶山
Qushi;8w2lhw6dj
Guangtong;8vxlqn6dj
Mali;9malyu6dj;马力乡
Malianzhuang;9szn6m6dj;马连庄|马连庄镇
Luobei;am6nzd6di;凤翔|萝北|凤翔镇
Tieqiao;9c8m8d6di;铁桥|铁桥镇
Wangyuan;9wmm376di
Gutao;9tcmjm6di;古陶|古陶镇|平遥县
Quxu;97kkw16di;曲水
Yinggen;8ewmd46di;营根|营根镇|琼中黎族苗族自治县
Wuduan;9m1mxa6di
Tiancheng;9brm916di;天城|塘坊场|天城镇
Linshi;98fm5r6di;蔺市|蔺市镇
Shiji;9l0n146di
Naliang;8m7m7n6di
Baihua;96tlyl6di;白花
Guye;a0en116di;古冶
Xinglong;9b6mc16di;兴隆|三角坝|兴隆镇
Laisu;97bm1u6di;来苏|来苏镇
Chengxi;99xm5y6di;澄溪|澄溪镇
Chongxing;9vnm3a6di
Xunsi;942lyg6di;巡司
Baisheng;98tm6b6di;百胜|百家场|百胜镇
Tuxiang;9bbmb86di;吐祥|吐祥镇|熊家塝
Nanmen;9c0m8o6di;南门|南门镇
Baihe;9cum9a6di;白鹤|白鹤街道
Ka'ersai;9u4k146ni;喀尔赛
Anyuan;9mwm0g6di
Xili;8ormoj6di;西丽|西丽街道
Luolong;961lze6di;罗龙
Sihu;9m7mzp6di
Mutang;8h1mbr6di;木棠|木棠镇
Shiwan;8mfmbc6di
Yuntai;99qm5s6di;云台|云台镇
Anfu;97km0z6di;安北|安富|安富镇
Mingguang;8wtlhq6di
Nanshu;9sun6a6di;南墅|南墅镇
Dongyang;98vm3p6di;东阳|东阳街道
Daxing;984m2w6di;大兴|兴隆场|大兴镇
Gangtou;9lcn0d6di
Zhaojia;9ccm956di;赵家|赵家镇
Shuanghuai;99um406di;双槐|双槐镇|渭溪场
Mingshan;990m766di;名山
Chenshi;97fm2f6di;陈食|陈食镇
Sanjiang;96em4f6di;三江|三江镇
Chenghai;8zilno6di
Baojia;97sm8v6di;保家|保家镇
Liji;9jtmz66di
Shichuan;98pm4q6di;石船|石船镇
Huixian Chengguanzhen;9jtm2o6di;徽县|城关镇|徽县城关镇
Wenquan;9d4m9g6di;温泉|温泉镇
Zhuyuan;9cymbi6di;竹园|竹园坪|竹园镇
Xilinji;b17nec6di;西林吉
Mangbang;8v9li36di
Lequn;8oqmob6di
Baishikante;9wujv86ni;白什坎特
Jinzhongzi;9qxn3a6di
Shili;9kbm0h6di;十里
Balu;9kzmzj6di
Renyi;97zm106di;仁义|仁义镇
Gongping;9chmbc6di;公平|公平镇|川主宫
Bailin;95um3q6di;柏林|柏林镇
Jiachuan;9fhm316di;嘉川|嘉川镇
Hetoudian;9sun6x6di;河头店|河头店镇
Xihu;96um3k6di;西湖
Anxiang;9wmmq66di;安香|安香乡
Xinxing;9q5n426di
Zhancheng;9kymz46di
Miaozi;9rsn0f6di
Weixinghu;978m246di;卫星湖
Hegeng;96ym236di;何埂|何埂镇
Fate;adknne6di
Longshan;9nbm2o6di
Changshouhu;993m5w6di;长寿湖|长寿湖镇
Jinshan;9mpm0v6di
Shahe;8onmom6di;沙河|沙河街道
Zhonghe;8vmlhc6di;中河
Yingpan;8zhljf6di
Yihe;98mm5u6di;义和|义和镇
Gecheng;9erm9u6di;葛城|城口县|葛城镇
Hanyuan;9khm0h6di;汉源|西和|西和县
Jelilyüzi;ac5k6i6ni;吉里于孜
Wayao;9lin0f6di
Tange;9m7lz86di;滩歌镇
Yuanyang;98fm406di;鸳鸯|鸳鸯街道
Guojia;9n5m186di;郭嘉|郭嘉镇
Biyang;995mzn6di;碧阳|黟县|碧阳镇
Dunhao;9d1m906di;敦好|鹿呜|敦好镇
Luoqi;98km516di;洛碛|洛碛镇
Qina;8z3lnj6di
Elixku;9xjjux6ni;艾里西湖
Liufeng;9mhm0r6di;六峰|六峰镇
Mudong;985m4s6di;木洞|木洞镇
Bake;992m5a6di;八颗|八颗镇
Zhiping;97am3g6di;支坪
Dadamtu;ac6k5v6ni;达达木图|达达木图乡
Xianlong;96zm1u6di;仙龙|仙龙镇
Haomen;9tulqa6di;浩门镇
Longtan;97tm5i6di;龙潭|龙潭镇
Longxing;98im4n6di;龙兴|龙兴镇
Dachang;9cvmd06di;大昌|大昌镇
Weituo;99gm2v6di;渭沱|渭沱镇
Sanmiao;9a0m2t6di;三庙|三庙镇
Zhutang;8p4ll96di
Longhe;98wm7z6di;龙河|观音寺|龙河镇
Shimen;96um2j6di;石门|石门镇
Caijiagang;98mm3s6di;蔡家场|蔡家岗|蔡家岗镇
Longhe;99em5q6di;龙河|龙河镇
Kangle;9cfmbz6di;康乐|康乐镇|郭家沟
Ziyang Chengguanzhen;9gcm9h6di;紫阳县|紫阳城关镇
Sanjiao;96pm4i6di;三角|三角镇
Shidui;9r3n3f6di
Mapo;9lwmx76di
Langao Chengguanzhen;9fqmah6di;岚皋县|岚皋城关镇
Puqiakeqi;9tok1f6ni
Heqiao;9lpmwq6di
Yizhuang;9kwmyn6di
Baiyang;9bmm9p6di;白羊|白羊镇
Changling;9bhm9c6di;长岭
Miaoyu;9brmcl6di;庙宇|庙宇槽|庙宇镇
Huangdi;9xtjv56ni;荒地
Taoyuan;8yvlnc6di;涛源
Haitou;8g7man6di;海头|海头镇
Guxi;9a9m236di;古溪|古溪镇
Tage'erqi;9x3jum6ni;塔尕尔其
Wujia;98bm0r6di;吴家|吴家镇
Longqiao;98jm616di;龙桥
Wuying;9n9m266di;五营乡
Lianhua;9nem1v6di;莲花
Xinmiao;98em5d6di;新妙|新妙镇
Zhelou;8vdm1y6di
Xintian;9bam946di;新田|新田镇
Zhuxi;982m1j6di;朱溪|朱溪镇|赵家院子
Liushan;9r9n1w6di
Longfeng;98um3n6di;龙凤|龙凤街道
Lüfeng;98ym2d6di;侣俸|侣俸镇
Yawa;9txk0v6ni;雅瓦
Wushan;9qpn246di
Shuangjiang;99ym1r6di;双江|双江镇|向家坝
Shuanghekou;9bfm916di;双河口|双河口街道
Fuxing;98um406di;复兴|复兴场|复兴镇
Mawang;969man6di;麻旺|麻旺镇
Shetan;99bm6y6di;社坛|社坛镇
Shuangfeng;99em3n6di;双凤|双凤镇
Xiongjia;9bum976di;熊家|熊家镇
Baocheng;8dsmcq6di;保城|保亭黎族苗族自治县
Bayandai;ac5k5p6ni;巴彦岱
São Lázaro;8nomnf5ti;望德堂区|望德堂區
Ronglong;97sm0x6di;荣隆|荣隆镇
Shawei;8okmor6di
Jukui;9b4m6w6di;聚奎|聚奎镇|黄土坎
Nanping;96tm576di;南平|南平镇
Wuhe;8v2li36di
Guofu;965m446di
Jiulongshan;9cnm8p6di;九龙山|广佛寺|九龙山镇
Zhoujia;9aim6q6di;周嘉|周嘉镇
Heba;9kam0a6di;何坝
Yongxing;96jm2y6di;永兴|永兴镇
Haojiaqiao;9vmm386di
Shaodian;9ktn0z6di
Mixia;9wtjul6ni;米夏
Xiasi;9fpm136di;下寺|下寺镇
Mawu;987m636di;马武|马武镇
Saybag;9t7k1a6ni;萨依巴格
Futian;9cqmcr6di;福田|桥头溪|福田镇
Dagzê;98fkxr6di;德庆
Rongjiang;8zrlp96di
Huzhai;9mbmx16di
Dajin;9djm996di;大进|大进镇
Anfu;9n5m1f6di
Shunzhou;8zylnb6di
Huilong;9atm6k6di;回龙|回龙镇
Fenhe;9cimc86di;汾河|汾河镇
Jiangzhuang;9ltmy46di
Longju;9b1m9s6di;龙驹|龙驹镇
Guōlèmùdé;9r7l7e6di;郭勒木德|郭勒木德镇
Tanchang Chengguanzhen;9kklxz6di;宕昌|城关镇|宕昌县
Fenggao;97rm1k6di;峰高|峰高镇
Baliwan;9mtm0p6di
Dasheng;9qwn266di
Taolin;9pgn416di
Zhonghe;8gumbq6di;中和|中和镇
Dade;9cpm8y6di;大德|土地垭|大德乡
Anlan;979m436di;安澜
Wudalike;9wkju96ni;乌达力克
Jiuxian;98ym306di;旧县|旧县镇
Guojia;9cym9c6di;郭家|花坪坝|郭家镇
Wenxian Chengguanzhen;9hjlys6di;文县|城关镇|文县城关镇
Wenfeng;9d8mbf6di;文峰|文峰镇|新店子
Songbai;9e8mff6di;松柏
Zhakou;8mbmc46di;闸口社区
Zhong’ao;98om1j6di;中敖|中敖镇
Daocheng;96olmm6di;道成
Yengisar;9y5jrl6ni
Yushan;981m976di;郁山|郁山镇
Tianfu;98zm3u6di;天府|天府镇
Pingkai;94zmas6di;平凯|平凯镇
Shuangtang;9lhn136di
Wanghong;9w5m336di;望洪一队
Shaping;9anm6g6di;沙坪|沙坪镇
Ganning;9b7m8s6di;甘宁|甘宁镇
Pingtan;98xm246di;平滩|平滩镇
Shagang;8m7mav6di
Xiagezhuang;9rxn6j6di;夏格庄
Tongjing;98ym4s6di;统景|统景镇
Longsheng;96sm4q6di;隆盛|隆盛镇
Xingyi;998m7i6di;兴义|兴义镇|泥巴溪
Anwen;95om4k6di;安稳|安稳镇
Sandaoling Lutiankuang Wuqi Nongchang;a9hl206ni;三道岭露天矿五七农场
Yujia;9blm7v6di;余家|余家镇
Honghu;99cm536di;洪湖|洪湖镇
Yanwo;9a9m2n6di;燕窝|万古场|燕窝镇
Mengla;8lmlq46di;勐腊
Hufeng;98km2r6di;虎峰|虎峰镇
Mugala;9sdk6u6ni;于田县|木尕拉|木尕拉镇
Shangpa;90sliv6di;上帕
Chahe;9lxmzg6di
Yebao;9n2m1h6di;叶堡|叶堡镇
Taiping;8uilft6di
Fuyuan;aoco926di;抚远|撫遠
Nagqu;9dgkzq6di;那曲|那曲市|那曲镇
Tianducheng;9afn606di;天都城
Nyêmo;97skuf6di;尼木
Xihu;9ohn386di
Luoyu;9k0m0b6di;洛峪
Qarek;9wljtv6ni;恰热克
Yishikuli;9wxjug6ni;伊什库力
Anhua;9j3lzt6di;安化|安化镇
Huyanghe;ae6kfn6ni;胡杨河
Jingui;9wym3m6di
Dachang Shandao;9z4nck6di;大长山岛|大长山岛镇
Nuozhadu;8oqlmj6di
Tongxi;99cm2t6di;铜溪|铜溪镇
Yantai;99rm646di;砚台|砚台镇
Yunlong;9asm706di;云龙|云龙镇|沙垭场
Meijiang;94imav6di;梅江|梅江镇
Caotang;9cdmci6di;草堂|草堂镇
Tuomuwusitang;9wkjuj6ni;托木吾斯塘
Chaotian;9gom256di;朝天
Pingshan;99mm6e6di;坪山|坪山镇
Xichuan;9nbm2m6di;西川
Xindian;8w8lq46di
Qingxi;98sm6i6di;清溪|清溪镇
Shuanglong;998m5s6di;双龙|双龙镇
Wutan;97am2m6di;吴滩|吴滩镇
Dongwenquan;97um4u6di;东温泉
Shizhi;99hm7f6di;十直|十字路|十直镇
Shiqiao;9kvm016di
Layka;9t0k1h6ni;拉依喀|拉依喀乡
Wangu;98gm2a6di;万古|万古镇
Tiaoshi;97cm486di;圣灯山
Guanzhuang;957mat6di;官庄|官庄镇
Heshan;9oon3z6di
Longxing;99vm2m6di;隆兴|女儿碑|隆兴镇
Ruidian;8wxlhd6di
Gangxia;8ommou6di;冈厦
Sanqu;98cm1e6di;三驱|三驱镇|汪家坝
Qingshizui;9u3lpr6di;青石嘴|青石嘴镇
Zhifeng;98dm1u6di;智凤|智凤镇
Nanya;9ccm896di;南雅|南雅镇
Majie;9iylzk6di;马街
Zheshan;9qfn2f6di
Hadapu Zhen;9l3lxi6di;哈达铺镇
Longsha;9b4m8o6di;龙沙|沙包子|龙沙镇
Chengjiang;98zm3i6di;澄江|澄江镇
Xinmin;9agm6b6di;新民|新民镇
Leifeng;94cmlh6di
Yinqiao Zhen;8xjlm46di
Yitang;9l6mzh6di
Jinqiao;9cvn9r6di;金桥
Houqiao;8wclh06di;猴桥
Longhua;975m316di;龙华|龙门|龙华镇
Kuangshi;9vrmot6di
Zhengxing;97um2t6di;正兴|正兴镇
Guangcun;8gkmbr6di;光村
Chongkan;99sm1d6di;光辉|崇龛|崇龛镇
Xinsheng;9bom786di;新盛|新盛镇
Lijun;9w3m2s6di
Hanwang;9imlzp6di;汉王|汉王镇
Luotian;9asm9k6di;罗田|罗田镇
Hebao;985m166di;河包|河包镇
Yunji;994m666di;云集|云集镇|华中村
Dashi;9mym076di
Xiaodu;998m256di;小渡|三汇场|小渡镇
Kuanchuan;9kxm166di
Mazhan;8w1lhk6di
Akesalayi;9t9k1d6ni;阿克萨拉依
Jiasi;96wm3p6di;贾嗣|贾嗣镇
Liangshui;9ivlz56di;两水|两水镇
Simen;9m6lzp6di;四门
Xiaomian;99om3x6di;小沔|小沔镇
Zhongshan;9n2m246di;中山
Buzhake;9szk1o6ni;布扎克
Jiangxi;9kgm086di;姜席
Puchuan;8umlht6di
Yigai'erqi;9wijv76ni;依盖尔其
Zuitai;9ilm1c6di;咀台|康县|咀台镇
Huatugou;9wakwf6di;花土沟
Tawakule;9uwk2u6ni;塔瓦库勒
Qinglian;9cnmbg6di;青莲
Weidian;9nim196di;魏店乡
Dushi;96zm3x6di;杜市|杜市镇
Shuikou;8xzmbn6di
Shuanglu;97xm1s6di;双路|双桥区|双路街道
Dafengdong;907m7h6di
Nantuo;98ym6p6di;南沱|南沱镇
Yong’an;9abm6n6di;永安|梅家场|永安镇
Yuanyang;9mnlz26di;鸳鸯镇
Kuoyiqi;9trk1g6ni;阔依其
Báigōng Jiēdào;9a5m836di;忠县|忠州|忠州镇
Zhuyang;96qm2a6di;朱杨|朱杨镇
Onyar;abtk766ni;温亚尔
Yihe;9ckm886di;义和|义和镇
Xialu;996m886di;下路|下路镇
Sangzhe;97cm946di;桑柘|桑柘镇
Shituo;98km5m6di;石沱|石沱镇
Zouma;9axm986di;走马|走马镇
Longchi;9snn3h6di
Wuma;9bpmbu6di;五马|五马乡
Luotang;9hvm0e6di;洛塘|洛塘镇
Huolu;97nm7n6di;火炉|火炉镇
Linjiang;979m2c6di;临江|临江镇
Yanzibu;9lvmyy6di
Shanghuang;9d0mc46di;上磺|上磺崆|上磺镇
Baima;97om6q6di;白马|白马镇
Qilian;9w2lmg6di;八宝|祁连县
Xituo;9ahm8m6di;西沱|西沱镇
Xiasi;8zom7e6di
Panjim;ac9k666ni;潘津
Nantou;8ommog6di;南头|南头街道
Fuhuan;963m4k6di
Zhoubai;981maa6di;舟白|舟白街道
Awati;9x9jv06ni;阿瓦提
Changxin;9xfm3d6di
Lushan;901m7e6di
Longcheng;9n8m2d6di;陇城
Xianglong;9a2m426di;香龙|香龙镇
Bojia;8zjmj16di
Shahe;9bnm8z6di;沙河
Guandu;99km3n6di;官渡|官渡镇
Gar;9gak2i6di;噶尔县|阿里地区|森格居委会
Renhe;8zelom6di
Luoping;9cpmdt6di;骡坪|骡坪镇
Hehua;8vdlhb6di
Longchi;95hmax6di;龙池|龙池镇
Anping;9c0mbr6di;安坪|安坪乡
Yengitam;abjk6u6ni;英塔木|英塔木乡
Chenjiaba;9blm956di;万州区|陈家坝|陈家坝街道
Chentuan;9omn3b6di
Minning;9w9m2d6di
Tuwaite;9tqk1l6ni;吐外特
Yanjing;996m3f6di;盐井|盐井镇
Wuling;9arm8q6di;武陵|武陵镇
Pianjiao;8yalne6di
Longxing;9a1m276di;龙形|茶店子|龙形镇
Jiahanbage;9tck1f6ni;加汗巴格
Hucheng;9blm6q6di;虎城|虎城镇
Xiyu;9klm0i6di;西峪
Laitan;99um3t6di;涞滩|上涞滩|涞滩镇
Lixi;959m9p6di;李溪|李溪镇|杨家坝
Jiagao;9btmba6di;甲高|万家嘴|甲高镇
Taiping;9a2m616di;太平|太平镇
Shuangshi;97om206di;双石|双石镇
Wangwu;8gmmbl6di;王五|王五镇
Tai’an;99jm1x6di;太安|太安镇
Haitang;99tm5v6di;海棠|海棠镇
Shandan;9mjlz76di;山丹乡
Wofo;993m1v6di;卧佛|卧佛镇|复兴场
Songgang;8pamo96di;松岗|松岗街道
Ligang;9xdm3n6di
Nanling;8p3lls6di
Xingdaohu;8mbmb56di
Gantang;908mcx6di
Changdao;9l0m0m6di;长道|长道镇
Xingfeng;9mum206di;兴丰
Yufengshan;98km4g6di;石坪|玉峰山|玉峰山镇
Guanba;960m4p6di;关坝|关坝镇
Linfeng;991m5u6di;邻封|邻封镇
Zhanhe;90mlob6di;战河
Luhe;9khm0m6di;卢河
Batang;98wm396di;八塘|八塘镇
Lanyang;8g2mcm6dh;兰洋|兰洋镇
Jiuhe;90cllr6dh
Nanfeng;8fxmcb6dh;南丰|南丰镇
Fujia;9jym2b6dh;伏家|伏家镇
Ying’awati;9tmk1r6nh;英阿瓦提
Gaoqiao;9d5m8o6dh;高桥|高桥镇
Alamaiti;9x6jv86nh;阿拉买提
Kax;ab8k7f6nh;喀什|喀什乡
Xinlin;axjnhk6dh
Jiaoshi;98km6w6dh;焦石|焦石镇
Báishí Zhèn;9a8m7o6dh;白石|白石镇
Wangpu;9nem0w6dh;王铺
Manglai;9tkk1c6nh;芒来
Xiaying;9swn3w6dh
Lihe;9bmm8q6dh;李河|李河镇
Mu’er;98tm486dh;木耳|木耳镇
Gongmen;9n2m3a6dh;恭门
Guanlong;8ormoi6dh
Lintan Chengguanzhen;9mdlv36dh;临潭|临潭县|临潭城关镇
Huimin;97um4e6dh;惠民|惠民镇
Cizhu;99bm4i6dh;茨竹|茨竹镇
Labuleng;9nslss6dh;夏河县|拉卜楞|拉卜楞镇
Zhuxi;9cgm8t6dh;竹溪|竹溪镇
Shima;98bm1z6dh;石马|石马镇|马跑场
Banqiao;97zm2b6dh;板桥|板桥镇
Pulü;98um2w6dh;蒲吕|蒲吕场|蒲吕镇
Mingda;9bdm726dh;明达|明达镇|杨家咀
Tongyangdao;a61mdh6dh;通阳道|白云鄂博|通阳道街道
Beihai;8volhu6dh
Shibao;9krm0k6dh;石堡
Meng’a;8nolmy6dh;猛阿
Dawan;99em4q6dh;大湾
Yongle;9c5mc66dh;永乐|永乐镇
Yongjia;985m2g6dh;永嘉|永嘉镇
Gulu;9d1mc06dh;古路|古路镇
Panghai;909m866dh
Wanshun;99gm556dh;万顺|万顺镇
Gulebage;9wpjuj6nh;古勒巴格|古勒巴格村
Qingnian;967m4s6dh;青年|青年镇
Wangyin;9mrm1s6dh;王尹
Zhongchao;8ymmbe6dh
Shigang;9cimbs6dh;石岗|石岗乡
Chapchal;absk5f6nh;察布查尔|察布查尔自治县
Yongxing;9l1m0l6dh
Xiejiawan;9mpm056dh;谢家湾|谢家湾乡
Dongta;9vsm3e6dh;东塔|东塔镇|灵武市
Maguan;9nfm2j6dh;马关
Hoxtolgay;aj8kiw6nh;和什托洛盖|和什托洛盖镇
Zhouzhuang;9cgn7o6dh;周庄|周庄镇
Zhouqu Chengguanzhen;9julxw6dh;舟曲|舟曲县|舟曲城关镇
Pushun;9anm6w6dh;普顺|普顺镇
Xinmin;9bumc36dh;新民|新民镇
Paosha;9jom1k6dh;抛沙|抛沙镇
Siyeke;9shk6g6nh;斯也克
Dasheng;991m4y6dh;大盛|大盛镇
Dayang;9n7m2n6dh;大阳
Fubang;8pmll86dh
Tongjiaxi;98gm3o6dh;同兴场|童家溪|童家溪镇
Fengjia;97nma66dh;冯家|冯家街道
Dashu;9cpmbo6dh;大树|三洞河|大树镇
Jinlong;97zm2m6dh;金龙|九龙场|金龙镇
Honglu;97jm1p6dh;红炉|红炉镇
Xinshi;998m5i6dh;新市|新市镇
Shawan;9jflyg6dh;沙湾|沙湾镇
Jiangnan;98rm5c6dh;新场|江南|江南镇
Renxian;9b6m746dh;仁贤|仁贤镇|沙河铺
Shangchong;8yxm9u6dh
Baoluan;98om746dh;包鸾|包鸾镇
Liuping;9mxm1o6dh;刘坪
Bayi;98el646dh;八一|八一镇|林芝市
Judian;91vlkt6dh
Guocun;9axm8h6dh;郭村|郭村镇
Hongzhou;8ylmbx6dh
Haidong Zhen;8xflmi6dh
Qiaotou;9hzlz56dh;桥头
Qitang;98qm396dh;七塘
Qingping;99am3w6dh;清平|清平镇
Zhuantang;96am4b6dh;篆塘|篆塘镇
Caohui;9agm6j6dh;曹回|回龙场|曹回乡
Shuren;99bm7a6dh;树人|大柏树|树人镇
Xinyingpan;91hloc6dh
Shigu;90nllo6dh
Anju;99bm2j6dh;安居|安居镇
Sanjianzai;8p5mo26dh;三间仔
Ji’an;970m1r6dh;吉安|吉安镇
Hongbao;9mjm2m6dh;红堡
Yongning;93blnn6dh
Jiangkou;978m7o6dh;江口|江口镇
Wanqiao Zhen;8xnlm46dh
Gaofeng;99ym6d6dh;高峰|高峰镇
Heqing;8g9mcj6dh;和庆|和庆镇
Wuqiao;9bim9a6dh;五桥|五桥街道
Shanghe;99sm296dh;上和|太和|上和镇
Heqian;9d9m9b6dh;和谦|和谦镇
Wenheng;8xbmwb6dh;文亨|文亨乡
Daguan;97am566dh;大观|大观镇
Xincheng;9mblvr6dh;新城
Zhongshan;966m3e6dh;中山
Wutongshu;9w2m386dh
Xinglong;971m596dh;兴隆|兴隆镇
Baijiawan;9mem0h6dh
Chengjiao;9irlzg6dh;城郊|姚寨
Rongxi;958mag6dh;溶溪|溶溪镇
Shilong;97cm4y6dh;石龙|石龙镇
Beitun;aljkny6nh;北屯|北屯镇
Zishui;9d9m8v6dh;紫水|紫水乡
Zhuoshui;97ema56dh;濯水|濯水镇
Longfeng;9a3m2i6dh;龙凤|龙凤镇
Xinglong;991m4f6dh;兴隆|兴隆镇
Fulu;9b5m7x6dh;福禄|福禄镇
Burqin;amikla6nh
Huangshan;90jlme6dh;黄山
Shilongba;8zulpk6dh
Hongqiao;927lo06dh
Tuqiang;b0ynd16dh
Rensha;99hm6v6dh;仁沙|仁沙乡|沙滩场
Hebian;98em306dh;河边|河边镇
Arewusitang;abok6g6nh;阿热吾斯塘
Wujian;972m1z6dh;五间|五间镇
Fengle;9cnm956dh;丰乐|丰乐街道
Wushan;9bym7v6dh;巫山|巫山乡
Yisilamu'awati;9uek2q6nh;伊斯拉木阿瓦提
Paikeqi;9x3juh6nh;拍克其
Xinglong;9kkm0m6dh;兴隆
Lirang;9b8m6z6dh;礼让|礼让镇|老营场
Xambabazar;9shk6f6nh;先拜巴扎|先拜巴扎镇
Fuyun;akjkso6nh
Lichuan Zhen;9l5lxs6dh;理川镇
Zhongzhai;9i7ly26dh;中寨
Yajiang;97tm696dh;鸭江|鸭江镇
Qingfeng;97im1z6dh;青锋|青锋镇
Samuyuzi;abgk7e6nh;萨木于孜
Heyan;9d4m9v6dh;河堰|河堰镇
Tai’an;9bkm9u6dh;太安|新场|太安镇
Gaofeng;9bbm8y6dh;高峰|高峰镇
Dingshi;95ym9j6dh;丁市|丁市镇
Langgar;9ryk6e6nh;兰干
Baolong;9bymdl6dh;抱龙|抱龙镇
Gulou;99um2x6dh;古楼|古楼镇
Longkong;99gm7r6dh;龙孔|龙孔乡
Waina;9i9lzt6dh;外纳
Longmen;9bkm756dh;龙门|龙门镇
Shitan;99jm3u6dh;狮滩|狮滩镇
Sansheng;991m476dh;三圣
Helin;9aym746dh;和林|和林镇|马家场
Baytokay;abck776nh;巴依托海
Jiangluo;9k6m1y6dh;江洛|江洛镇
Tonggu;95ym9w6dh;铜鼓|铜鼓乡
Shaoyun;99am2e6dh;少云|少云镇
Baijia;99em656dh;白家|白家乡
Longjing;9cdmd96dh;龙井|龙井乡
Jiaogong;9j9lyp6dh;角弓
Gangjia;99ym6m6dh;杠家|杠家乡
Baoxing;98am1l6dh;宝兴|宝兴镇
Mengman;8o0lo96dh;勐满|大荒坝
Sanxi;9chmdt6dh;三溪|三溪乡
Suhe;9kmm0a6dh;苏合
Qiemo;9vxkhl6nh;且末|且末县
Jiaping;96jm3f6dh;嘉平
Mangnai Zhen;9wnkug6dh;茫崖
Maliuzui;98hm526dh;麻柳嘴|麻柳嘴镇
Dashun;985m5d6dh;大顺
Zhendong;9cnm946dh;镇东|镇东街道
Tuohula;9tgk1d6nh;托胡拉
Kaqun;9vijtj6nh;喀群
Shekou;8ohmog6dh;蛇口|蛇口街道
Dongjia;99ym776dh;董家|董家镇
Gulu;98wm4i6dh;古路|古路镇
Weiwu'eryuqiwen;abkk7e6nh;玉其温|玉其温乡|维吾尔玉其温
Tongle;97um5s6dh;同乐|同乐乡
Shuanglong;9cnmd86dh;双龙|双龙镇|巴雾河
Cuiyun;98hm436dh;翠云
Panlong;9b4m7l6dh;蟠龙|蟠龙镇
Apengjiang;96zma26dh;阿蓬江|阿蓬江镇
Tonggu;9bxmct6dh;铜鼓|铜鼓镇
Kokyar;9sak6r6nh;科克亚
Yinping;9aum6u6dh;荫平|荫平镇|麻柳场
Longchang;903m7s6dh
Ciyun;96sm316dh;慈云|慈云镇
Hudiyuzi;ac1k656nh;胡地于孜
Nuofu;8nqlky6dh
Qianhu;9mom1a6dh;千户
Wushipai;8okmof6dh
Kaitang;908m8d6dh
Lingquan;ar9myw6dh;灵泉
Guchang;97xm1b6dh;古昌|古昌镇|梁家场
Shaoyu;9kmm0p6dh;稍峪
Danzi;9bqm816dh;弹子|弹子镇
Jiuchao;8yhma56dh
Wenquan;9m9lzt6dh;温泉
Quankou;9trlqm6dh;泉口
Dianshui;97cm896dh;靛水|靛水乡
Yongping;9l9m0f6dh
Oytograk;9sbk7l6nh;奥依托格拉克|奥依托格拉克乡
Erong;95dmbl6dh;峨溶|峨溶镇
Xintian;974m8r6dh;新田|头党坝|新田乡
Hong’an;956mbj6dh;洪安|洪安镇
Gaolou;9mklys6dh;高楼
Jianlong;97km2z6dh;健龙|健龙乡
Longlin;9kalzv6dh;龙林
Puzi;98bm8x6dh;普子|普子镇
Baiguan;9kdlzf6dh;白关
Lop;9t0k2q6nh;洛浦|洛浦镇
Bibo;8zpm6z6dh
Baohe;99im766dh;保合|何家场|保合乡
Bishan;9bhm6i6dh;碧山|叶家湾|碧山镇
Xiaochuan;9jkm186dh;小川|小川镇
Baihe;9k3lz96dh;白河
Guangpu;97im2v6dh;广普|广普镇
Dongchuan;9ttlqw6dh;东川|东川镇
Arele;9s9k6v6nh;阿热勒
Arix;9s4k6p6nh;阿日希
Wangyao;9mwm166dh
Taiping;992m2k6dh;太平|太平镇
Changtan;9bem9o6dh;长滩|长滩镇
Nima;9kglrj6dh;尼玛|玛曲|尼玛镇
Youchou;96gmb66dh;酉酬|酉酬镇
Liulin;9m3lvi6dh;卓尼|柳林|卓尼县
Jiuchi;9bkm916dh;九池|九池乡
Yongcheng;96mm4q6dh;永城|永城镇
Yangjiaying;9zomi96dh;杨家营
Jiayi;9sdk6s6nh;加依
Baoding;98nm1s6dh;宝顶
Dunbage;9xyjva6nh;墩巴格
Paipu;8gkmb86dh;排浦|排浦镇
Liuyin;998m456dh;柳荫|柳荫镇
Xiaba;96wm3v6dh;夏坝|夏坝镇
Tuantian;8unli16dh;团田
Maliu;9dbm8o6dh;麻柳|麻柳乡
Hongguang Qidui;9xlm396dh;洪广七队
Arele;9wmjur6nh;阿热勒
Houba;9cpm9f6dh;厚坝
Huoshilafu;9v7jt26nh;霍什拉甫|霍什拉甫乡
Sanhe;99gm8i6dh;三河
Jianshan;9dbmai6dh;尖山|尖山镇|枇杷大店
Eman;8h6mbi6dh;峨蔓|峨蔓镇
Huimin;8nulm06dh
Erlang;9acm2f6dh;二郎|二郎镇
Fuyong;8ozmo66dh;福永|福永街道
Gongtan;96bm8z6dh;龚滩|龚滩镇
Tuchang;995m3t6dh;土场|土主场|土场镇
Siwei;9vmmp36dh
Wudong;99xm666dh;五洞|五洞镇
Heishui;96qma86dh;黑水|黑水镇
Longshe;981m8l6dh;龙射|张家坝|龙射镇
Wanshui;90am7z6dh
Hexing;9bem7i6dh;合兴|合兴镇
Shajing Residential District;8p5mo56dh
Tangfang;9d7mbn6dh;塘坊|塘坊乡
Conglin;96nm556dh;丛林|丛林镇
Taxkowrük;abxk5v6nh;塔什科瑞克
Bage'awati;9wxjve6nh;巴格阿瓦提
Huwei;993m706dh;大池|虎威|虎威镇
Long’e;8xpmbd6dh
Dalain Hob;a6lloq6dh;达来呼布|额济纳旗|达来呼布镇
Shenzhenwan;8ohmoi6dh
Xiangshui;9b6m8j6dh;响水|响水镇
Zhouxi;8zkm7s6dh
Dongjiang;9iqlzj6dh;东江|东江镇
Zhuzilin;8ommoq6dh
Ehen Hudag;9yxlqf6dh;阿拉善右旗|额肯呼都格|额肯呼都格镇
Liangping;9cgmdh6dh;两坪|两坪乡|花栗树
Baitu;9b0ma96dh;白土|白土镇
Shuangjiang;8y5mak6dh
Fudong;8q8lls6dh;富东
Lixin;9mzlzw6dh
Zhaoxing;8xzmba6dh
Linhe;9wgm3h6dh;临河
Changlong;9a7m6d6dh;长龙|长龙乡|高桥坝
Muhe;9nam2t6dh;木河
Xigaoshan;9jpm0r6dh;西高山
Zhongling;94mmao6dh;钟灵|钟灵乡|马路口
Jiangjia;97nm4q6dh;姜家
Langru;9shk166nh;朗如
Yuxi;9a8m1u6dh;玉溪|玉溪镇
Ersheng;97vm4l6dh
Erenhot;ab9mj26dh;乌兰|乌兰街道|二连浩特
Kuoshi'airike;9xajuo6nh;阔什艾日克
Wu'erqi;9tok106nh;乌尔其
Jutou;9mqlzr6dh;嘴头
Tianjia;99lm226dh;田家|田家镇
Xiaojia;9a5m3r6dh;肖家|肖家镇
Xinhua;8urlhk6dh
Zhushan;9bdm8r6dh;柱山|柱山乡
Longxi;9cymck6dh;龙溪|长溪河|龙溪镇
Damiao;98cm2n6dh;大庙|大庙镇
Jifeng;9jim1i6dh
Puchi;9j5lz56dh;蒲池
Bikou;9gzm0c6dh
Yunshan;9mkm1v6dh;云山
Qingyang;981m5s6dh;青羊|安镇坝|青羊镇
Mujia;8pvlkr6dh
Zhongba;9kklzr6dh;中坝
Dazhuang;9n4m0m6dh
Maying;9jclz96dh;马营
Hualin;9mrlyz6dh;桦林|桦林乡
Shiwan;989m256dh;拾万
Yulong;983m1x6dh;玉龙|玉龙镇
Xiaochangshan;9z0ncw6dh;小长山|小长山岛镇
Dianga;9kmlup6dh;电尕|迭部|电尕村
Dashan;8pwlm36dh
Lijia;98gm3t6dh;礼嘉|礼嘉镇
Linxi;9ahm8z6dh;临溪|临溪镇
Azhatebage;9xejv76nh;阿扎特巴格
Lianhu;98im986dh;连湖|连湖镇
Xinsheng;998m1r6dh;新生|新生镇
Tieshan;98hm126dh;铁山|双河场|铁山镇
Yùmén;a1xldl6dh
Baituo;9mtm2g6dh;白驼
Wujia;8mhmav6dh
Zengfu;97zm576dh;增福|增福乡
Gaogu;97om876dh;高谷|高谷桥|高谷镇
Fengling;9d0mcb6dh;峰灵|峰灵乡|谭家祠堂
Fengping;9bnmc66dh;冯坪|庙坝|冯坪乡
Fazhanhe;8o1lm96dh
Daxie;99jm8b6dh;大歇|大歇乡
Zhen’an;9cjm8w6dh;镇安|镇安镇
Wangjia;98pm4e6dh;王家
Awuliya;ac1k6x6nh;阿乌利亚
Yulong;9j3m066dh;鱼龙
Donghui;8ocll86dh
Houshan;9bnm836dh;后山|后山镇
Qinglong;9bimbi6dh;青龙|青龙镇
Houhai;8ojmoh6dh;后海
Changba;97hm6j6dh;长坝|长坝镇
Guochuan;9mcm1x6dh;郭川
Tanjia;9dem9e6dh;谭家|谭家乡
Dure;aj7kpx6nh;杜热|杜热乡
Wanmu;95jm9e6dh;万木|屯上|万木乡
Yongxi;98mm2e6dh;雍溪|油坊坡|雍溪镇
Shihui;985m9p6dh;石会|石会镇
Oymak;an0kln6nh;窝依莫克|窝依莫克乡
Xiping;9m5m006dh;西坪
=CO
Bogotá;7at86824s;ボゴタ|波哥大|보고타|Bogot|Bagata|Bogoto|Boqota|Wukuta|Buoguota|Mponkota|Santa-Fe-de-Bogota|بگوٹا|بوجوتا|Багата|Богота|बोगोटा|बोगोता|โบโกตา
Cali;77j7zg24q;卡利|칼리|Kali|Kalio|Kalis|Calium|Кали|Калі|كالي|کالی|काली|กาลี|サンティアゴ・デ・カリ|santiago・de・kari
Medellín;7fc82324p;麦德林|메데인|メデジン|مدلین|myڈyln|Medegin|Medelim|Medelin|Medel'in|Medehl'in|Medeljina|Medeljino|Medeljinas|Меделин|Медељин|मेदेयीन|मेडेल्लिन|เมเดยิน
Barranquilla;7sh84a24o;巴兰基亚|巴冷基也|바랑키야|Killa|Quilla|Barankila|Barankilja|La Arenosa|Barankil'ja|Barankilija|Barankilijo|Barrankilya|Barran'kigia|Barrankil'ja|Barranquilha|バランキージャ|Баранкиля|Баранкиља|بارانکولا|باراکویلا|बेरानकिला|ब्यारेन्क्विला|บาร์รังกียา
Kennedy;7au86124o
Cartagena;7qw82b24o
Cúcuta;7jz8am24o
Soacha;7aq85u24n
Bucaramanga;7hs88w24n
Ibagué;7ac83424n
Santa Marta;7t885x24n
Montería;7mb81824n
Valledupar;7r388j24n
Pereira;7bd81r24n
Manizales;7c382924n
Buenaventura;77y7y424n
Bello;7fm82424m
Pasto;71d7xc24m
Neiva;76582w24m
Soledad;7sc84c24m
Villavicencio;79h87h24m
Popayán;74s7z724m
Palmira;77u80224m
Armenia;7am81t24m
Itagüí;7f682024m
Sincelejo;7nu82l24m
Floridablanca;7hm88z24m
Buenaventura;78s7y124m
Tuluá;79c80c24l
Dosquebradas;7bg81t24l
Barrancabermeja;7hn86v24l
Riohacha;7u289h24l
Tunja;7de88824l
Yopal;7cu8ax24l
Florencia;72i82024l
Maicao;7tm8bc24l
Piedecuesta;7hf89324l
Envigado;7f682124l
Facatativá;7bd85h24l
Pitalito;73580r24l
Madrid;7b585q24l
Cartago;7b781524l
Zipaquirá;7by86g24k
Quibdó;7dt7z224k
Malambo;7s684b24k
Rionegro;7f482n24k
Mosquera;7b385t24k
Chía;7bi86a24k
Magangué;7no84d24k
Funza;7b485v24k
Guadalajara de Buga;78u80224k
Sogamoso;7dv89f24k
Girón;7hn88r24k
Girardot City;79y84724k
Sabanalarga;7rj83w24k
Ocaña;7kw88824k
Santander de Quilichao;76d7zk24k
Aguachica;7l387i24k
Cereté;7mo81h24k
Duitama;7e689524k
Montelíbano;7k682i24k
Fusagasugá;7a285g24k
Ciénaga;7sl85r24k
Tumaco;72z7t524k
Apartadó;7jw7z524k
Chigorodó;7jb7z024k
Arauca;7ho8fg24k
Sabaneta;7f381y24k
Caldas;7ex81w24k
La Dorada;7d584m24k
Calarcá;7al81w24k
Ipiales;70b7wc24k
Yumbo;77y7zj24j
Planeta Rica;7ld82124j
Granada;77v87924j
Chinchiná;7bu82024j
Baranoa;7rz83w24j
Villa del Rosario;7jr8ap24j
San Marcos;7m283b24j
Sahagún;7mv82g24j
Fundación;7r885x24j
Los Patios;7js8am24j
San Andrés;7wy7l224j
Caucasia;7k783524j
Santa Rosa de Cabal;7bj81y24j
Orito;6zv7yh24j
Marinilla;7f582q24j
Mocoa;7177z324j
Espinal;79j84024j
Turbaco;7qp82j24j
Ayapel;7l383a24j
El Banco;7n086i24j
Cajicá;7bo86d24j
Barbosa;7fw82r24j
Pamplona;7ii8a724j
San José del Guaviare;7558a824j
Agustín Codazzi;7pw88k24j
El Bagre;7j484724j
Puerto Berrío;7g185c24j
Cimitarra;7fj86l24j
Chinú;7nb82k24j
Turbo;7kh7yv24j
Arjona;7qh82q24j
Carmen de Viboral;7ew82q24j
La Estrella;7f481w24j
Copacabana;7fn82924j
Samaniego;71q7wg24j
Plato;7p784a24j
Leticia;6mb8hq24j
El Carmen de Bolívar;7p083c24j
Florida;77880924j
Puerto Tejada;76z7zq24j
San Gil;7g888u24j
Chiquinquirá;7dm86y24j
Jamundí;7727zf24j
Pradera;77i80824j
Piendamo;75c7zf24j
Sevilla;79u81324j
Miranda;77180924j
Montenegro;7ap81l24i
Aracataca;7rf85x24i
Guaduas;7c384t24i
La Unión;7al80m24i
Acacías;79387424i
Lorica;7no81f24i
Bosconia;7pp86r24i
San Juan del Cesar;7rx89824i
Túquerres;7117we24i
Segovia;7ho84i24i
Corozal;7nw82v24i
Líbano;7bo83i24i
El Cerrito;78980124i
Barrancas;7sg89t24i
Santa Rosa de Osos;7gh82e24i
Patía;73r7xz24i
Bosconia;7bi86i24i
Payandé;79y83e24i
San Pablo;7px82x24i
Belalcázar;75d80z24i
La Ceja;7er82h24i
Gigante;74n82524i
Quimbaya;7au81k24i
Villamaría;7c182924i
Sabanagrande;7rz84c24i
Curumaní;7nk87q24i
Paz de Ariporo;7ec8cb24i
San Antero;7o181k24i
San Juan Nepomuceno;7pn83g24i
Quinchía;7cu81n24i
Corinto;76t80624i
Puerto Rico;73b83824i
Puebloviejo;7sj85o24i
Sonsón;7dv82t24i
Sitionuevo;7ry84g24i
San Sebastián de Mariquita;7cg83z24i
Anserma;7ct81h24i
Pivijay;7r284q24i
San Onofre;7p282724i
Caicedonia;7a181d24i
Fonseca;7s989n24i
Villanueva;7co8c324i
Puerto Wilches;7if86q24i
Mompós;7no85924i
San Luis de Sincé;7no83924i
San Pedro de Urabá;7l07zu24i
Guamo;79783r24i
Chimichagua;7nq86z24i
Socorro;7fz88i24i
Mitú;71i8gw24i
Puerto Asís;6zf7zi24i
Morales;75n7z524i
Purificación;78q83v24i
Garzón;74481x24i
Flandes;79x84624i
Tame;7fy8cq24i
Zarzal;7a780p24i
Santo Tomás;7rw84d24i
El Charco;74w7v124i
El Copey;7q786k24i
Honda;7ch84e24i
Sabana de Torres;7ij87u24i
Luruaco;7ri83924i
Roldanillo;7a980h24i
Santiago de Tolú;7og82224i
Puerto Boyacá;7em84t24i
Circasia;7au81w24i
La Tebaida;7ad81h24i
Palmar de Varela;7ru84d24i
Chiriguaná;7o087k24i
Albania;7t08ad24i
La Mesa;7cn86o24i
Supía;7d581v24i
Ariguaní;7qh86g24i
Tierralta;7kp80q24i
Puerto Colombia;7sj83t24i
Mahates;7qf83524i
El Zulia;7k18ac24i
Melgar;79o84o24i
La Virginia;7bm81824i
Anaime;7a882g24i
Repelón;7r683c24i
Guamal;7ne85u24i
Hatonuevo;7sr89v24i
Isnos;73e80824i
Zaragoza;7it84124i
Nechí;7kh84a24i
Cumaribo;7ad8i424i
Candelaria;77h7zx24i
Ituango;7hx81k24i
San Jacinto;7pb83c24h
San Carlos;7mg81q24h
Ponedera;7rk84d24h
María la Baja;7pq82u24h
Ciudad Bolívar;7e980t24h
Pinillos;7ms85524h
Santa Fe de Antioquia;7g881d24h
Sucre;7mh84g24h
Sibaté;7ah85q24h
Rivera;75q82y24h
Campo de la Cruz;7qu84024h
Dabeiba;7hg80524h
Campoalegre;75g82s24h
Natagaima;78283f24h
Yarumal;7hc82i24h
San Martín;78a87a24h
Tauramena;7by89x24h
Timbiquí;75p7w924h
Planadas;76w81v24h
Belén de Umbría;7cg81924h
La Jagua de Ibirico;7ok88b24h
Sampués;7ni82m24h
Puerto Carreño;7f78ok24h
Moniquirá;7ec87n24h
La Unión;7el82o24h
Aguadas;7dl82e24h
Retiro;7eu82a24h
Villeta;7bx85524h
Carepa;7jk7z324h
Silvania;7a885d24h
Neira;7cd82824h
Villa de San Diego de Ubaté;7cr86y24h
Becerril;7oy88g24h
Cota;7bd86624h
Rovira;79s83024h
San Martín;7k887t24h
Barbosa;7eh87i24h
Galeras;7ng83j24h
Frontino;7gt80j24h
Puerto Leguízamo;6xh84a24h
Tolú Viejo;7o982g24h
San Juan de Urabá;7mc7zf24h
Chaparral;78c82c24h
Buesaco;71u7xo24h
Málaga;7gm89z24h
Galapa;7sa83z24h
Suárez;7677yy24h
Guacarí;78g7zz24h
Polonuevo;7ry84324h
Vélez;7ep87d24h
El Retén;7rh85p24h
Padua;7c983a24h
La Plata;74n81724h
Manatí;7r183s24h
Rioblanco;77t81v24h
Riosucio;7d281q24h
Balboa;73o7xi24h
Urrao;7fk80j24h
Juan de Acosta;7s383l24h
Fredonia;7eh81t24h
Villa Rica;74z7yj24h
Villanueva;7rh89a24h
Morales;7l086t24h
Pizarro;7br7x324h
San Diego;7qp88q24h
Astrea;7oe86i24h
Santa Rosa;7r082n24h
Chivolo;7pv84q24h
San Benito Abad;7mt83l24h
Andalucía;79l80f24h
Salamina;7d182b24h
San Vicente;7fh82r24h
Tiquisio;7ls85q24h
El Doncello;72o82w24h
Santuario;7f282y24h
Fresno;7cb83k24h
El Carmen de Chucurí;7gm87t24h
Ciénaga de Oro;7mn81y24h
Restrepo;79u87o24h
Abejorral;7e382h24h
Yondó;7hh86p24h
Nueva Granada;7p885d24h
Puerto Triunfo;7eb84o24h
Lérida;7bi83x24h
Tadó;7cn7zc24h
Pailitas;7mw87i24h
Pacho;7c986024h
Puerto López;79e89c24h
San Lorenzo;7267xi24h
Manzanares;7cl83924h
San Estanislao;7qw83924h
Pupiales;70f7wc24h
Andes;7dq81824h
Puerto Santander;7l88av24h
Momil;7no81t24h
Cotorra;7n481h24h
Tarqui;73v81e24h
Concordia;7et81524h
Guadalupe;73m81k24h
Salgar;7el80z24h
Darien;78x7zk24h
Santa Lucía;7qo83s24h
Aguazul;7cd8ah24h
Candelaria;7r284024h
Marsella;7bq81m24h
Tocancipá;7bt86p24h
Simití;7k486m24h
Betulia;7ez80y24h
La Unión;72g7xr24h
Puerto Salgar;7d684n24h
=CR
San José;7pl7eg2em
Limón;7pr7hc2ej
San Francisco;7pr7eb2ej
Alajuela;7pu7e32ej
Liberia;7rk7ao2ej
Paraíso;7pc7f12ei
Puntarenas;7pq7cc2ei
San Isidro;7o17fi2ei
Curridabat;7pj7ek2ei
San Vicente;7po7ej2ei
San Vicente de Moravia;7po7ej2ei
San José;7sf7bi2ei
Purral;7po7el2ei
Turrialba;7pi7fk2ei
San Miguel;7pf7ei2ei
San Pedro;7pl7ej2ei
San Rafael Abajo;7pb7dv2ei
Quesada;7qp7dh2ei
Ipís;7pp7em2ei
Cartago;7pe7ew2ei
Chacarita;7pq7ci2ei
San Juan;7po7eg2ei
Mercedes Norte;7pt7eb2ei
Guadalupe;7pn7ei2ei
Aserrí;7pe7ef2ei
San Rafael;7pl7ea2ei
San Felipe;7pi7ed2ei
Patarrá;7pg7ek2ei
Tejar;7p27e12eh
Heredia;7ps7ec2eh
San Pablo;7ps7ee2eh
Calle Blancos;7pn7eh2eh
Cañas;7qz7bm2eh
Guápiles;7qe7fa2eh
Siquirres;7q27g12eh
San Diego;7pi7eo2eh
Colima;7po7eg2eh
Esparza;7pr7ct2eh
San Juan de Dios;7pg7eg2eh
Nicoya;7q77an2eh
San Rafael Arriba;7pg7eh2eh
=CU
Havana;8q97j62yp;ハバナ|哈瓦那|夏灣拿|아바나|Abana|Havan|Gavana|Gavane|Habana|Hafana|Havano|Hawana|LAvana|Ħavana|ŁAvana|Gavanae|Havanna|Khavana|L'Avana|LAvan-a|LHabana|LHavana|La Avan|A Habana|LAvann-a|Hahvaxnaz|La Ahuana|La Habana|La Havana|La Havane|ہوانا|هافانا|हवाना|Гaванa|Гаванæ|ฮาวานา
Santiago de Cuba;8hm81e2yn
Camagüey;8le7vk2ym
Holguín;8k18062ym
Guantánamo;8hy8332ym
Santa Clara;8o97pv2ym
Almendares;8q77j22ym
Diez de Octubre;8q57j82yl
Arroyo Naranjo;8q07j62yl
Mantilla;8q37ja2yl
Las Tunas;8k87y92yl
Bayamo;8il7z42yl
Boyeros;8px7j42yl
Pinar del Río;8oa7fi2yl
Cienfuegos;8nj7oj2yl
Fontanar;8py7j32yl
Ciudad Camilo Cienfuegos;8qc7jb2yl
San Miguel del Padrón;8q67jb2yl
Centro Habana;8q97j72yl
Balcón de la Lisa;8q17iz2yl
Matanzas;8q07le2yl
Ciego de Ávila;8mo7t82yl
Plaza de la Revolución;8q87j52yl
Marianao;8q37j12yl
Cerro;8q77j62yk
Manzanillo;8ii7xs2yk
Sancti Spíritus;8mx7rc2yk
Guanabacoa;8q97je2yk
Vedado;8qa7j52yk
Palma Soriano;8i580x2yk
Alamar;8qc7jg2yk
Cárdenas;8q07mf2yk
La Habana Vieja;8q97j92yk
Moa;8je83t2yk
Puerto Padre;8kw7z82yk
Vedado del Cotorro;8q17jj2yj
Contramaestre;8ie8082yj
Güira de Melena;8pc7it2yj
Consolación del Sur;8oj7g12yj
Güines;8pg7k52yj
Artemisa;8pd7i42yj
San Luis;8i381b2yj
Morón;8nf7tl2yj
Colón;8p47na2yj
Florida;8lt7up2yj
Sagua la Grande;8pd7pl2yj
Trinidad;8mk7pu2yj
San Cristobal;8p47ha2yj
Placetas;8nz7qr2yj
San José de las Lajas;8ps7jt2yj
Jagüey Grande;8ol7mn2yj
Nuevitas;8lu7xe2yj
Banes;8k881o2yj
Bartolomé Masó;8i17ya2yj
Corralillo;8pu7o52yj
Jesús Menéndez;8ks7zk2yj
Jobabo;8k37xc2yj
Baracoa;8ij8522yj
Jovellanos;8pc7mh2yj
Bauta;8pu7ip2yj
Santo Domingo;8or7p42yj
Cabaiguán;8nc7r62yj
Regla;8q97jb2yj
San Germán;8j880j2yj
Ranchuelo;8o57pd2yj
San Antonio de los Baños;8pl7it2yj
Cacocum;8jm7zz2yj
Yaguajay;8o17rw2yj
Manicaragua;8nj7pu2yi
Amancio;8jv7wi2yi
Jiguaní;8il7zp2yi
Cifuentes;8ox7pn2yi
Guáimaro;8kh7x52yi
Caibarién;8ok7r92yi
Cumanayagua;8nj7p82yi
Condado;8ms7q82yi
Camajuaní;8og7qh2yi
Santiago de las Vegas;8pt7j52yi
Santa Cruz del Sur;8jk7vc2yi
Minas de Matahambre;8or7et2yi
Remedios;8oh7r12yi
Madruga;8pn7km2yi
Unión de Reyes;8pc7li2yi
Vertientes;8l27ux2yi
Ciro Redondo;8n67te2yi
Mariel;8pv7i52yi
Yara;8ib7y92yi
La Salud;8pj7j22yi
Pilón;8hb7x82yi
Maisí;8i98612yi
Gibara;8kn80j2yi
Naranjito;8q47j62yi
Viñales;8ou7fh2yi
Pedro Betancourt;8p57m72yi
Cueto;8jd8132yi
Encrucijada;8ou7q62yi
Río Guayabal de Yateras;8il83m2yi
Los Palacios;8or7gr2yi
Limonar;8pr7lv2yi
Guanajay;8pp7ib2yi
Campechuela;8i77xc2yi
Cruces;8o27p12yi
Chambas;8nn7st2yi
Perico;8p97my2yi
Río Cauto;8j47yc2yi
Aguada de Pasajeros;8o77nf2yh
Calimete;8ol7n92yh
Víbora;8q57j72yh
Palmira;8ns7op2yh
Víbora Park;8q47j92yh
Lajas;8o97oz2yh
Jimaguayú;8l07vt2yh
Cauto Cristo;8j47zl2yh
Minas;8lp7wf2yh
Cojímar;8qc7je2yh
Esmeralda;8mp7v02yh
Nueva Gerona;8mt7hz2yh
Jaruco;8q07k72yh
Colombia;8kb7wx2yh
Varadero;8qc7mc2yh
Fomento;8ne7qk2yh
Bahía Honda;8pm7h02yh
Florencia;8nj7sn2yh
Jatibonico;8my7s32yh
Rodas;8o27o82yh
Niquero;8hp7wi2yh
Guisa;8ia7ze2yh
Santa Cruz del Norte;8qb7kg2yh
Sagua de Tánamo;8j68302yh
Bejucal;8pp7j52yh
Primero de Enero;8mz7u52yh
Jobabo;8k98022yh
La Sierpe;8mh7rt2yh
Sibanicú;8l07wn2yh
Media Luna;8hy7ww2yh
Abreus;8nw7o72yh
Venezuela;8me7t52yh
Guane;8no7ef2yh
Alquízar;8pc7im2yh
Baraguá;8m87tl2yh
=CV
Praia;83hc2p6xl
Mindelo;88xbym6xj
Espargos;88kc4a6xi
Assomada;83yc286xh
=CW
Willemstad;7vo8kn2hk
Bandariba;7vl8kt2hh
=CX
Flying Fish Cove;652m1k8yb
=CY
Nicosia;9npggn5yl
Limassol;9mcgfs5yl
Larnaca;9n0ghf5yj
Stróvolos;9nnggl5yj
Famagusta;9nkgia5aj
Káto Lakatámeia;9nkggl5yi
Paphos;9mmge25yi
Kyrenia;9o6ggk5ai
Mórfou;9nsgfn5yi
Káto Polemídia;9megfn5yh
Aradíppou;9n3ghb5yh
Aglantziá;9nnggs5yh
Égkomi;9nogi45ah
Protaras;9n9gim5ah
Germasógeia;9mggfw5yh
=CZ
Prague;at5f028bo;プラハ|布拉格|프라하|Prag|Praag|Praga|Prago|Praha|Pragae|Праг|Прагæ|براغ|پراگ|ปราก
Brno;aqof658bm
Ostrava;asffas8bm
Pilsen;as7ex68bl
Liberec;av1f1u8bk
Olomouc;arsf7x8bk
České Budějovice;aq1f078bk
Hradec Králové;athf3z8bk
Ústí nad Labem;auqeyz8bk
Pardubice;at0f3u8bk
Brno střed;aqnf658bk
Havířov;asafb88bk
Zlín;aqrf938bj
Kladno;atbez68bj
Most;auaexw8bj
Stodůlky;at1ezs8bj
Opava;asqf9q8bj
Žižkov;at4f058bj
Frýdek-Místek;as0faz8bj
Teplice;auoeye8bj
Jihlava;ar8f3b8bj
Chodov;at0f0a8bj
Královské Vinohrady;at3f048bj
Karviná;ashfbi8bj
Chomutov;au6exa8bj
Děčín;av2ezh8bj
Jablonec nad Nisou;auwf258bj
Karlovy Vary;atjevr8bj
Mladá Boleslav;au1f1e8bj
Prostějov;arff7j8bj
Přerov;aref8h8bi
Třinec;as0fbv8bi
Staré Strašnice;at4f0b8bi
Holešovice;at6f058bi
Vršovice;at3f068bi
Česká Lípa;autf0e8bi
Tábor;ar9f0q8bi
Libeň;at7f078bi
Znojmo;apqf4l8bi
Záběhlice;at2f0a8bi
Nusle;at2f048bi
Smíchov;at3f008bi
Třebíč;aqpf448bi
Modřany;asxf018bi
Kolín;aszf288bi
Cheb;at4eud8bi
Příbram;as1eyx8bi
Trutnov;augf478bi
Písek;aqzezb8bi
Šumperk;astf758bi
Kroměříž;aqyf8b8bi
Orlová;ashfb78bi
Valašské Meziříčí;arff9x8bi
Krč;at0f058bi
Nové Město;at4f028bi
Kobylisy;at8f058bi
Nový Jičín;arrfa18bi
Břeclav;apgf6w8bi
Český Těšín;as7fbr8bi
Vsetín;ar2fa08bi
Uherské Hradiště;aqbf8i8bi
Líšeň;aqpf6d8bi
Litoměřice;audez98bi
Havlíčkův Brod;artf3a8bi
Královo Pole;aqrf638bi
Chrudim;asrf3w8bh
Hodonín;appf7l8bh
Hlubočepy;at0f008bh
Kopřivnice;arsfae8bh
Dejvice;at6ezz8bh
Starý Bohumín;asofay8bh
Jindřichův Hradec;aqif1o8bh
Klatovy;ar8ewy8bh
Bystrc;aqrf5x8bh
Krnov;at5f968bh
Černý Most;at6f0i8bh
Řepy;at3ezq8bh
Litvínov;aukexu8bh
Strakonice;aqueym8bh
Háje;at0f0d8bh
Sokolov;ateev48bh
Letňany;at9f0c8bh
Kutná Hora;asrf2f8bh
Beroun;assez38bh
Michle;at1f068bh
Náchod;au2f4w8bh
Vyškov;aqwf788bh
Žďár nad Sázavou;arof4a8bh
Bohumín;asmfb08bh
Brandýs nad Labem-Stará Boleslav;atff0q8bh
Blansko;ar4f688bh
Žabovřesky;aqpf618bh
Jirkov;auaexd8bh
Mělník;atvf078bh
Hostivař;at1f0c8bh
Žatec;attexn8bh
Židenice;aqof698bh
Kadaň;atyewv8bh
Louny;atweyc8bh
Hranice;arnf998bh
Braník;aszf028bh
Vysočany;at7f0c8bh
Otrokovice;aqpf8q8bh
Kralupy nad Vltavou;atkezr8bh
Rožnov pod Radhoštěm;arefae8bh
Říčany;asvf0p8bh
Benešov;asaf0t8bh
Prosek;at8f0b8bh
Pelhřimov;arbf2a8bh
Bohnice;at9f028bh
Neratovice;atmf0c8bh
Uherský Brod;aq7f918bh
Jičín;au4f2n8bh
Dvůr Králové nad Labem;au3f3x8bh
Košíře;at3ezw8bh
Svitavy;as8f5r8bh
Střížkov;at9f098bh
Rakovník;at6ey58bh
Ostrov;atrevy8bh
Horní Měcholupy;at1f0h8bh
Poděbrady;ataf208bh
Ústí nad Orlicí;astf5j8bh
Slaný;atjez58bh
Bruntál;asvf8i8bh
Česká Třebová;asmf5o8bh
=DE
Berlin;azwex97hq;柏林|베를린|ベルリン|Belin|Berlim|Berlyn|Perlin|Beirlin|Berleno|Berlien|Berliin|Berlijn|Berline|Berlini|Berlino|Birlinu|Berliini|Berlynas|Berolino|Berolinum|برلين|برلین|Берлин|Берлін|बर्लिन|เบอร์ลิน
Hamburg;b2renr7hp;汉堡|漢堡|汉堡市|함부르크|ハンブルク|Amborg|Amburgo|Amburgu|Gamburg|Hamborg|Hamburk|Hamburq|Hambörj|Hampuri|Ħamburg|Ambourgo|Hamboerg|Hamboerj|Hambourg|Hamburch|Hamburga|Hamburgo|Hamburgu|Hamepuka|Hanburgo|Khamburg|Hamboarch|Hamburgas|Hamburgum|Hambuurich|Augusta Gambriviorum|ہymbrg|ہیمبرگ|Гамбург|Гамбурґ|हैम्बर्ग|ฮัมบูร์ก
Munich;anqes67hp;뮌헨|慕尼黑|مونخ|مونیخ|Minca|Minga|Munic|Munih|Munix|Minche|Minhen|Miwnix|Monacu|Muenih|Munhen|Munike|Mynihu|Münegh|Minhene|Minkhen|Mnichov|Mnichow|Monacho|Monacum|Muenegh|Muenhen|Munchen|Munique|Munkeno|Munkhen|Myunxen|Mjunkhen|Muenchen|Monachium|Miunchenas|ミュンヘン|Минхен|Мюнхен|มิวนิก|म्यूनिख|म्युन्शेन
Köln;avhefb7ho;古龍|科隆|쾰른|کلن|كولن|ケルン|Keln|Cwlen|K'oln|Kel'n|Kelne|Kelni|Koeln|Kol'n|Kolon|Kyoln|Kölle|Kelnas|Keulen|Kiolns|Kjol'n|Koelle|Koloin|Cologna|Cologne|Colonha|Colonia|Cołogna|Culonia|Kolonia|Kolonjo|Augusta Ubiorum|Oppidum Ubiorum|Colonia Agrippina|Colonia Agrippinensis|Келн|Көлн|โคโลญ|क्योल्न
Frankfurt am Main;at8ek47hn
Düsseldorf;awaeeu7hn
Stuttgart;apieli7hn
Essen;awyefh7hn
Dortmund;ax3egr7hn
Dresden;avtey67hn
Bremen;b1gekh7hn
Nuremberg;ardeqs7hn
Hannover;azhen17hn
Leipzig;awmeud7hn
Duisburg;awveet7hn
Wandsbek;b2ueo07hm
Bochum;ax0eg27hm
Wuppertal;aweefv7hm
Bielefeld;ayjejp7hm
Bonn;auxefq7hm
Hamburg-Nord;b2venq7hm
Münster;ayceh77hm
Mannheim;arhejj7hm
Hamburg-Mitte;b2renu7hm
Augsburg;aodeqa7hm
Wiesbaden;at5eiw7hm
Marienthal;b2teo07hm
Karlsruhe;aq5ejc7hm
Gelsenkirchen;ax3efq7hm
Eimsbüttel;b2teno7hm
Aachen;av2ecw7hm
Mönchengladbach;aw7edw7hm
Kiel;b4weo57hm
Altona;b2renl7hm
Chemnitz;av8evx7hm
Braunschweig;az7ep97hm
Magdeburg;aytesb7hm
Krefeld;awmee77hm
Halle (Saale);ax0eta7hm
Freiburg;anceht7hm
Neue Neustadt;ayvesb7hl
Mainz;asuej07hl
Oberhausen;ax0ef27hl
Erfurt;avmeqo7hl
Lübeck;b3nepp7hl
Hagen;awoegr7hl
Rostock;b49etq7hl
Kassel;awkeme7hl
Potsdam;azkewb7hl
Saarbrücken;aqrefh7hl
Hamm;axkehq7hl
Mülheim;awvef47hl
Herne;ax6eg37hl
Harburg;b2ienq7hl
Darmstadt;asjek17hl
Osnabrück;az7eid7hl
Neukölln;azsexb7hl
Solingen;aw5efo7hl
Ludwigshafen am Rhein;argejh7hl
Leverkusen;avrefe7hl
Oldenburg;b1meit7hl
Kreuzberg;azuex87hl
Neuss;aw8eel7hl
Regensburg;aq6etm7hl
Prenzlauer Berg;azyexa7hl
Heidelberg;ar9ek57hl
Paderborn;axoekb7hl
Würzburg;asbenn7hl
Fürth;argeqj7hk
Charlottenburg;azweww7hk
Wolfsburg;azmepy7hk
Schöneberg;azuex27hk
Recklinghausen;axdeg07hk
Göttingen;ax5enl7hk
Heilbronn;aqielm7hk
Ingolstadt;apherq7hk
Ulm;aogenr7hk
Bottrop;ax4ef97hk
Bergedorf;b2keof7hk
Pforzheim;apsek67hk
Offenbach;at6ekd7hk
Bremerhaven;b2reju7hk
Friedrichshain;azwexd7hk
Remscheid;aw6efz7hk
Nippes;avlefb7hk
Porz am Rhein;avdefm7hk
Reutlingen;aopelk7hk
Marzahn;azzexp7hk
Rodenkirchen;avdeff7hk
Koblenz;atveh27hk
Siegen;avbeia7hk
Bergisch Gladbach;avneft7hk
Salzgitter;ayweoy7hk
Jena;avhes77hk
Gera;avcetk7hk
Moers;awxeef7hk
Hildesheim;ayvenn7hk
Erlangen;arreql7hk
Mitte;azwex87hk
Wilmersdorf;azsex07hk
Trier;as8eeg7hk
Zwickau;auxeup7hk
Kaiserslautern;arcehl7hk
Schwerin;b2zerp7hk
Gütersloh;ay7eja7hk
Gesundbrunnen;azzex77hk
Düren;av4ee17hk
Rahlstedt;b2weo87hk
Esslingen;apeelu7hk
Tübingen;aosel57hk
Iserlohn;awqehe7hk
Witten;awwegf7hk
Ratingen;awief17hk
Marl;axiefp7hk
Lünen;axeegx7hk
Gießen;aujek47hk
Hanau am Main;at9ekr7hk
Velbert;awmefk7hk
Ludwigsburg;apuelj7hk
Lichterfelde;aznewz7hk
Flensburg;b67em87hk
Wedding;azzex47hk
Cottbus;axsezt7hk
Wilhelmshaven;b2reii7hk
Hellersdorf;azxext7hk
Reinickendorf;b00ex27hk
Minden;az9ekr7hk
Norderstedt;b36enr7hk
Villingen-Schwenningen;aniejl7hk
Konstanz;ameeli7hk
Worms;arvej87hk
Moabit;azxex27hk
Neumünster;b47enq7hk
Dorsten;axiefd7hk
Lüdenscheid;awaeh77hk
Marburg an der Lahn;av5ekd7hk
Rheinhausen;awseen7hk
Castrop-Rauxel;ax8egb7hk
Bogenhausen;anresa7hk
Rheine;az9ego7hk
Viersen;awdedr7hk
Delmenhorst;b1dejz7hk
Gladbeck;ax9eff7hk
Arnsberg;awqeig7hj
Troisdorf;av5efv7hj
Wattenscheid;ax0efu7hj
Bocholt;ay0eee7hj
Detmold;ayaekn7hj
Bayreuth;asres67hj
Steglitz;azqex17hj
Landshut;aotets7hj
Lüneburg;b1xeoy7hj
Billstedt;b2reo57hj
Celle;b06eo07hj
Bamberg;asmeqa7hj
Aschaffenburg;asuelf7hj
Neubrandenburg;b2sewu7hj
Dessau;ay0eu17hj
Lippstadt;axjej67hj
Köpenick;azpexp7hj
Aalen;apoeo17hj
Dinslaken;ax8eeq7hj
Neuwied;au3egr7hj
Unna;ax6ehd7hj
Plauen;auaetq7hj
Pankow;b01ex87hj
Herten;axcefu7hj
Herford;ayrek37hj
Grevenbroich;avxeea7hj
Weimar;avmerh7hj
Kerpen;avbeem7hj
Fulda;aufemw7hj
Dormagen;avyeez7hj
Bergheim;avkeeg7hj
Garbsen;azlemn7hj
Tempelhof;azrex87hj
Wesel;axjeee7hj
Kempten (Allgäu);amleon7hj
Sindelfingen;apael27hj
Schwäbisch Gmünd;apken87hj
Rosenheim;amyeto7hj
Brandenburg an der Havel;azmeuv7hj
Rüsselsheim am Main;asveje7hj
Berlin Köpenick;azoexq7hj
Offenburg;aonei27hj
Langenfeld;avzefb7hj
Stralsund;b4vewc7hj
Hameln;ayqem07hj
Friedrichshafen;ameemc7hj
Göppingen;apaemt7hj
Görlitz;aw4f1n7hj
Stolberg;av1edb7hj
Frankfurt (Oder);azff0f7hj
Neu-Hohenschönhausen;b01exj7hj
Baden-Baden;apgeiw7hj
Hattingen;awsefz7hj
Hilden;aw5ef97hj
Winterhude;b2vent7hj
Sankt Augustin;av2eg07hj
Eschweiler;av6edf7hj
Friedrichsfelde;azvexj7hj
Ahlen;axsehx7hj
Bad Salzuflen;aypeka7hj
Euskirchen;auqeev7hj
Meerbusch;awdeel7hj
Wolfenbüttel;aywepa7hj
Hürth;avbef37hj
Zehlendorf;aznewt7hj
Schweinfurt;at1eoe7hj
Neustadt an der Weinstraße;ar3eim7hj
Pulheim;avoeex7hj
Gummersbach;avreh07hj
Wilhelmsburg;b2lent7hj
Waiblingen;apnelw7hj
Nordhorn;aznefn7hj
Mariendorf;azoex67hj
Universitäts- und Hansestadt Greifswald;b49ex87hj
Cuxhaven;b3nek67hj
Wetzlar;augejm7hj
Menden;awwehm7hj
Bergkamen;axeeh87hj
Frechen;avfeex7hj
Lichtenrade;azkex97hj
Bad Homburg vor der Höhe;atjejy7hj
Willich;aweee77hj
Emden;b29eg17hj
Neu-Ulm;aofent7hj
Lingen;azwegd7hj
Erftstadt;av5eev7hj
Neubrück;aw1eeg7hj
Lahr;aoaehv7hj
Ibbenbueren;az8ehf7hj
Passau;aoxexb7hj
Gronau;az1efi7hj
Langenhagen;azpen27hj
Schwerte;awweh17hj
Speyer;ar0ejf7hj
Alt-Hohenschönhausen;azzexi7hj
Heidenheim an der Brenz;ap8eo77hj
Treptow;aztexc7hj
Peine;azceog7hj
Neunkirchen;ar2efy7hj
Bad Oeynhausen;az1ekg7hj
Leonberg;apkel27hj
Hof;atret37hj
Kleve;axved27hj
Ravensburg;amqemp7hj
Elmshorn;b3bemu7hj
Bornheim;av0eff7hj
Soest;axaeij7hj
Hennef (Sieg);av2eg87hj
Rastatt;apqeit7hj
Erkrath;awaef77hj
Bruchsal;aqgejw7hj
Weißensee;b00exf7hj
Singen;amoekk7hj
Stuttgart-Ost;apiell7hj
Dülmen;axzeg87hj
Frankenthal;arlej77hj
Herzogenrath;avbecx7hj
Lörrach;am9eha7hj
Albstadt;anyel37hj
Oberursel;atheju7hj
Gotha;avjepq7hj
Melle;az0ej67hj
Staaken;azyewj7hj
Bünde;az0ejv7hj
Alsdorf;avced47hj
Böblingen;ap8el17hj
Langenhorn;b33enu7hj
Rheda-Wiedenbrück;ay1ej27hj
Kamen;axbeha7hj
Gohlis;awpeud7hj
Hansestadt Stade;b2vemb7hj
Meiderich;awzeet7hj
Wismar;b3peru7hj
Amberg;arcesy7hj
Neustadt am Rübenberge;azuema7hj
Erkelenz;avwedk7hj
Homburg;ar1ege7hj
Straubing;apseux7hj
Halle-Neustadt;ax0et47hj
Memmingen;anaeob7hj
Brühl;av7ef67hj
Fellbach;aplels7hj
Lehrte;azhenq7hj
Nordhausen;ax2eq07hj
Freiberg;avfex27hj
Pirmasens;aqoeh57hj
Goslar;ay6eoz7hj
Lankwitz;azoex37hj
Bietigheim-Bissingen;apyelc7hj
Filderstadt;ap6elm7hj
Suhl;aulepp7hj
Weinheim;arnek37hj
Rodgau;aszekp7hj
Bad Kreuznach;asgehv7hj
Ohligs;aw3efg7hj
Monheim am Rhein;avxef57hj
Gifhorn;azsepb7hj
Britz;azoexb7hj
Rottenburg;aooeku7hj
Rudow;azmexh7hj
Freising;aogesn7hj
Weiden;as0ets7hj
Kaufbeuren;an0epi7hj
Nettetal;awkedg7hj
Kaarst;awbeee7hi
Gallus;at6ejz7hi
Eberswalde;b0reye7hi
Bautzen;aw6f037hi
Lemgo;ayjekq7hi
Coburg;atmeqg7hi
Laatzen;azcen87hi
Mülheim;avlefg7hi
Dreieich;asyek67hi
Schorndorf;aplemh7hi
Landau in der Pfalz;aqoeik7hi
Heinsberg;avuecy7hi
Lichtenberg;azvexi7hi
Westend;azweww7hi
Seevetal;b2cenp7hi
Wunstorf;azmem87hi
Leinfelden-Echterdingen;ap9elh7hi
Königswinter;ausefz7hi
Bensheim;as0ejy7hi
Völklingen;aqtef27hi
Germering;anperm7hi
Niendorf;b2yenn7hi
Borken;ay0ef27hi
Buchholz in der Nordheide;b25enf7hi
Oranienburg;b0jewt7hi
Eisenach;avmeoo7hi
Pinneberg;b32en87hi
Südstadt;azgen37hi
Wilhelmstadt;azwewn7hi
Pirna;avkeyq7hi
Aurich;b2jegs7hi
Barmbek-Nord;b2xenw7hi
Nürtingen;ap3ely7hi
Kirchheim unter Teck;ap5em97hi
Buckow;azmexc7hi
Märkisches Viertel;b04ex47hi
Hückelhoven;avuedb7hi
Dachau;ao2err7hi
Halberstadt;ay6eqq7hi
Spandau;azzewo7hi
Kehl;aoxehq7hi
Neumarkt in der Oberpfalz;aqweru7hi
Mettmann;awdefe7hi
Löhne;ayzek57hi
Kamp-Lintfort;ax2ee77hi
Freital;avoexx7hi
Siegburg;av4eg17hi
Maintal;atbekj7hi
Ilmenau;auseqc7hi
Backnang;apzem87hi
Langen;asvek37hi
Biebrich;at0eix7hi
Warendorf;aybei77hi
Sankt Ingbert;aqwefs7hi
Falkenhagener Feld;azzewl7hi
Ettlingen;apyejd7hi
Altenburg;avneuk7hi
Schwabach;ar1eqm7hi
Leuben;avpeye7hi
Saarlouis;aqzeer7hi
Linden;azgemz7hi
Buxtehude;b2jemx7hi
Ahaus;ayoefh7hi
Haltern am See;axqefy7hi
Mühlhausen;aw9ep17hi
Hamm;b2reny7hi
Neustadt/Süd;avhefb7hi
Weißenfels;aw8et97hi
Horn;b2reo17hi
Beckum;axseic7hi
Hofheim am Taunus;at5ejh7hi
Stendal;b05esy7hi
Gropiusstadt;aznexe7hi
Hemer;awrehl7hi
Falkensee;b00ewd7hi
Würselen;av6ed17hi
Sinsheim;aqteko7hi
Wermelskirchen;aw2eg27hi
Tegel;b02ewx7hi
Coesfeld;ayaefx7hi
Bitterfeld-Wolfen;axeeu87hi
Schwäbisch Hall;aqfen27hi
Lurup;b2veng7hi
Niederkassel;av6efk7hi
Porta Westfalica;az3eks7hi
Datteln;axiegf7hi
Bad Vilbel;ateeka7hi
Barmbek-Süd;b2uenw7hi
Crailsheim;aqhenz7hi
Pasing;anqeru7hi
Wesseling;av7efd7hi
Voerde;axceel7hi
Emsdetten;ayxegx7hi
Farmsen-Berne;b2xeo47hi
Neu-Isenburg;at1ek57hi
Zweibrücken;aqtegh7hi
Ottensen;b2senk7hi
Greven;aypeh37hi
Eidelstedt;b2xenj7hi
Lage;ayfekf7hi
Bonn Hardtberg;auuefl7hi
Uelzen;b14epd7hi
Wedel;b2uemy7hi
Bernau bei Berlin;b0cexr7hi
Tuttlingen;anaeki7hi
Merseburg;awnetb7hi
Vegesack;b1qejy7hi
Rheinfelden;am4ehn7hi
Steinfurt;ayvege7hi
Balingen;ao4ekl7hi
Seelze;azkemo7hi
Meppen;b0deg97hi
Herrenberg;ap0ekn7hi
Papenburg;b1gegm7hi
Kempen;awoedu7hi
Geldern;ax4edk7hi
Kornwestheim;apqelj7hi
Jülich;avgedo7hi
Leer;b1vegq7hi
Limburg an der Lahn;atyeid7hi
Fennpfuhl;azxexf7hi
Schwedt (Oder);b1eezo7hi
Goch;axked47hi
Ostfildern;apdelp7hi
Fürstenwalde;azgez27hi
Fürstenfeldbruck;anuer97hi
Erding;ao7et37hi
Korschenbroich;aw7ee37hi
Dietzenbach;asxeke7hi
Itzehoe;b3semg7hi
Burglesum;b1pek57hi
Radebeul;avzexy7hi
Buer;axaefl7hi
Achim;b19el37hi
Mörfelden-Walldorf;asveju7hi
Höxter;axuem27hi
Gevelsberg;awkege7hi
Winsen;b28eod7hi
Nienburg;b08elm7hi
Viernheim;armeju7hi
Ennepetal;awiegg7hi
Königs Wusterhausen;azaexv7hi
Stuhr;b1bekb7hi
Lampertheim;arsejj7hi
Biberach an der Riß;anlen77hi
Marienfelde;azmex57hi
Weil am Rhein;am7eh67hi
Meschede;awnej07hi
Rheinberg;ax7eec7hi
Wernigerode;ay0epy7hi
Werl;ax7ehz7hi
Bernburg;axvesm7hi
Neugraben-Fischbek;b2jenc7hi
Eisenhüttenstadt;ayvf0p7hi
Langendreer;awyegd7hi
Niederschönhausen;b02ex87hi
Neuruppin;b11evk7hi
Ansbach;aqyepf7hi
Emmerich;ay0edd7hi
Kreuztal;avlei77hi
Radolfzell;ammekx7hi
Osterholz-Scharmbeck;b1vekf7hi
Lohmar;av8eg17hi
Hakenfelde;b00ewp7hi
Georgsmarienhütte;az0eic7hi
Güstrow;b3gett7hi
Cloppenburg;b0teid7hi
Ganderkesee;b1cejr7hi
Merzig;arceeg7hi
Deggendorf;apoew07hi
Burgdorf;azpent7hi
Northeim;axnens7hi
Werne;axieh77hi
Hoyerswerda;awwezk7hi
Bad Hersfeld;avbemz7hi
Forchheim;as4eqq7hi
Schönebeck;ayiesl7hi
Oer-Erkenschwick;axgeg67hi
Andernach;au3egk7hi
Tönisvorst;awkee17hi
Bad Nauheim;atweka7hi
Bretten;aq8ek77hi
Schwelm;awheg97hi
Waltrop;axeegk7hi
Taunusstein;atbein7hi
Ahrensburg;b34eog7hi
Schnelsen;b30enk7hi
Rietberg;axxejf7hi
Wittenberg;ay3ev57hi
Friedberg;aoceqi7hi
Delbrück;axtejs7hi
Winnenden;apsem47hi
Springe;az1emj7hi
Mahlsdorf;azvext7hi
Einbeck;axyenf7hi
Vechta;b0hej17hi
Naumburg;aw3est7hi
Altglienicke;azlexm7hi
Gaggenau;apkej57hi
Geesthacht;b2geot7hi
Altona-Altstadt;b2renn7hi
Haan;aw7efh7hi
Riesa;awjewx7hi
Oelde;axzein7hi
Idar-Oberstein;as3egb7hi
Wetter;awregj7hi
Blankenfelde-Mahlow;azeex97hi
Senftenberg;ax5eyw7hi
Biesdorf;azvexn7hi
Düsseldorf-Pempelfort;awceev7hi
Vaihingen an der Enz;apyekw7hi
Köthen;axret97hi
Geislingen an der Steige;ap2enb7hi
Bühl;apaeim7hi
Mühlheim am Main;at8ekj7hi
Warstein;awwej77hi
Meissen;aw4exf7hi
Unterschleißheim;ao4es67hi
Neuburg an der Donau;apder37hi
Geilenkirchen;avled07hi
Zeitz;avtetq7hi
Rendsburg;b4uemv7hi
Schwandorf in Bayern;ar1etn7hi
Bramsche;azlei67hi
Karlshorst;azsexl7hi
Plettenberg;aw9ehv7hi
Kelkheim;ataejh7hi
Neustadt/Nord;avjefb7hi
Neukirchen-Vluyn;awxee77hi
Lennestadt;aw0eif7hi
Lohne;b0beiw7hi
Wegberg;aw2edg7hi
Leichlingen;avzefi7hi
Kevelaer;axaedd7hi
Stuttgart Feuerbach;aplelg7hi
Saalfeld;auperl7hi
Friedenau;azrex17hi
Baunatal;awdem57hi
Königsbrunn;ao4eq97hi
Baesweiler;avfed77hi
Bad Neuenahr-Ahrweiler;aueefr7hi
Ehingen;ao4en17hi
Wiesloch;aqyek67hi
Heiligenhaus;awlefd7hi
Hörde;ax0egu7hi
Dorstfeld;ax2egl7hi
Sundern;awlei87hi
Kulmbach;at6ert7hi
Dotzheim;at3eis7hi
Bad Zwischenahn;b1qei87hi
Selm;axmegr7hi
Mechernich;aujeeh7hi
Grimma;awbevc7hi
Altstadt Sud;avhefc7hi
Friedberg;atuekc7hi
Hamminkeln;axpeeb7hi
Emmendingen;anoeht7hi
Overath;avheg87hi
Wersten;aw6eex7hi
Leimen;ar3ek57hi
Rathenow;b05eua7hi
Petershagen;aziekx7hi
Wangen;amhenb7hi
Niederrad;at4ejz7hi
Brilon;awrejt7hi
Landsberg am Lech;anheq87hi
Verden;b10elo7hi
Sankt Wendel;arfefx7hi
Rösrath;aveefy7hi
Lübbecke;azbejx7hi
Mühlacker;apzekk7hi
Achern;ap3eig7hi
Strausberg;b02eyl7hi
Weiterstadt;asmejv7hi
Remseck am Neckar;aprelr7hi
Neckarsulm;aqneln7hi
Osdorf;b2uene7hi
Lauf an der Pegnitz;arjerc7hi
Sprockhövel;awneg47hi
Espelkamp;aziejy7hi
Bingen am Rhein;astehy7hi
Wiehl;avjegz7hi
Rheinbach;aunefb7hi
Weinstadt-Endersbach;aplem07hi
Schmallenberg;aw3ej17hi
Hennigsdorf;b08ewo7hi
Misburg;azjend7hi
Stuttgart Mühlhausen;apoeln7hi
Fischeln;awieeb7hi
Garmisch-Partenkirchen;alxequ7hi
Delitzsch;ax5eua7hi
Nordenham;b2mejl7hi
Altona-Nord;b2senm7hi
Idstein;atieiz7hi
Zirndorf;arceqf7hi
Rummelsburg;azuexh7hi
Olpe;avreht7hi
Arnstadt;av8eqf7hi
Horb am Neckar;aokek57hi
Aschersleben;axseru7hi
Herdecke;awsego7hi
Rinteln;ayzel87hi
Übach-Palenberg;avged07hi
Helmstedt;az3eql7hi
Meckenheim;aumefj7hi
Rottweil;antejz7hi
Heppenheim an der Bergstrasse;arwejz7hi
Pfungstadt;asdejw7hi
Bad Honnef;auoeg37hi
Markkleeberg;awgeud7hi
Obertshausen;at3ekl7hi
Griesheim;asiejt7hi
Zittau;avef157hi
Reinbek;b2oeoh7hi
Wolfen;axieu37hi
Varel;b2ceim7hi
Netphen;avgeii7hi
Butzbach;au3ek37hi
Mosbach;ar3elf7hi
Roth;aqteqt7hi
Hannoversch Münden;awuemt7hi
Hattersheim;at3ejl7hi
Ellwangen;aq0eo57hi
Gonsenheim;asweis7hi
Ingelheim am Rhein;asteie7hi
Burg bei Magdeburg;az7esx7hi
Bedburg;avnee97hi
Brackel;ax5egy7hi
Wertheim;as8emf7hi
Blasewitz;avteyc7hi
Eißendorf;b2henn7hi
Rudolstadt;auweri7hi
Eppendorf;b2venr7hi
Apolda;avres07hi
Attendorn;aw1ehy7hi
Norden;b2weg17hi
Wittenau;b03ex07hi
Waldkraiburg;anxeug7hi
Nieder-Ingelheim;asueif7hi
Salzkotten;axjejw7hi
Lindau;am3emw7hi
Korbach;awgekn7hi
Walsrode;b0uemn7hi
Friedrichsdorf;atlek07hi
Bad Oldesloe;b3heot7hi
Warburg;ax1elf7hi
Syke;b0zeki7hi
Herzogenaurach;arpeq97hi
Harsewinkel;ayceiv7hi
Wallenhorst;azfeia7hi
Ludwigsfelde;azaewt7hi
Ditzingen;apnel77hi
Greiz;auqetw7hi
Poppenbüttel;b32eo07hi
Schleswig;b5geml7hi
Radevormwald;aw8egg7hi
Lüdinghausen;axtego7hi
Verl;ay4ejo7hi
Olching;anwerh7hi
Starnberg;anceri7hi
Sonneberg;atwer17hi
Freudenstadt;aonejd7hi
Döbeln;aw0ewf7hi
Weingarten;amtems7hi
Calw;apbeka7hi
Wipperfürth;aw0egk7hi
Limbach-Oberfrohna;avaevg7hh
Groß-Gerau;asoejk7hh
Oberschöneweide;azqexk7hh
Neuehrenfeld;avkefa7hh
Stellingen;b2venl7hh
Ronnenberg;azcemu7hh
Weilheim;amweqz7hh
Misburg-Nord;azkene7hh
Geretsried;amyerw7hh
Sangerhausen;awzere7hh
Pfaffenhofen an der Ilm;aotery7hh
Staßfurt;ay1es77hh
Riedstadt;asfejm7hh
Quedlinburg;axveqz7hh
Sasel;b31eo37hh
Hoheluft-Ost;b2uenq7hh
Bad Soden am Taunus;ataejm7hh
Annaberg-Buchholz;auiew57hh
Stadthagen;azcelk7hh
Lütgendortmund;ax2egf7hh
Sehnde;azbenp7hh
Neheim;awxei57hh
Opladen;avvefg7hh
Dillenburg;auyej17hh
Bad Harzburg;ay4epc7hh
Nagold;aovek87hh
Duderstadt;ax3eoi7hh
Neusäß;aofeq37hh
Forst;axqf0o7hh
Kalk;aviefh7hh
Öhringen;aqoemf7hh
Schmargendorf;azsewx7hh
Kapellen;ax9edp7hh
Lengerich;ayzehu7hh
Isernhagen Farster Bauerschaft;azrenc7hh
Schwetzingen;ar6eju7hh
Jüchen;avyee27hh
Haren;b0neg47hh
Rees;axseds7hh
Reichenbach/Vogtland;aumeu67hh
Eisleben Lutherstadt;ax5es37hh
Bad Mergentheim;arhen57hh
Eving;ax7egs7hh
Vreden;aykeez7hh
Büdingen;atpelb7hh
Waldshut-Tiengen;amaeiu7hh
Eschborn;ataejt7hh
Werder;azievx7hh
Leutkirch;amvenu7hh
Eislingen;apaemz7hh
Coswig;aw1exq7hh
Neustrelitz;b28ewb7hh
Senden;ao8enw7hh
Büren;ax7ejs7hh
Eilbek;b2tenx7hh
Rotenburg;b1jem47hh
Metzingen;aouels7hh
Scharnhorst;ax7egy7hh
Meinerzhagen;avzeh97hh
Elsdorf;aviee97hh
Soltau;b17enc7hh
Marsberg;awyekl7hh
Seesen;ay5eoa7hh
St. Pauli;b2seno7hh
Westerstede;b1yei17hh
Hohen Neuendorf;b0ceww7hh
Gelnhausen;atgelj7hh
Alfter;auxefi7hh
Sondershausen;awpeq77hh
Lindlar;avqegi7hh
Karben;atjekd7hh
Bad Pyrmont;ayfelp7hh
Luckenwalde;aypewl7hh
Guben;aybf0v7hh
Donaueschingen;an8ejm7hh
Aplerbeck;ax0egz7hh
Gorbitz;avtexy7hh
Xanten;axiedx7hh
Meiningen;auheoy7hh
Eckernförde;b5benc7hh
Dillingen;ar4eep7hh
Lusan;av8etj7hh
Überlingen;ampelh7hh
Wilnsdorf;av6eii7hh
Waren;b2oev87hh
Französisch Buchholz;b04exb7hh
Glauchau;av6euu7hh
Stadtallendorf;av6el17hh
Halle;aymej87hh
Kitzingen;as6eo77hh
Auerbach;aubeug7hh
Schortens;b2qei37hh
Wittmund;b2uehm7hh
Lichtenfels;atbeqq7hh
Bad Kissingen;atgeo07hh
Seligenstadt;at0ekx7hh
Querenburg;awxeg77hh
Sonthofen;am0eok7hh
Groß-Umstadt;asjekt7hh
Traunreut;an8euz7hh
Löbtau;avsey17hh
Eschwege;aw6enx7hh
Eppingen;aqiekr7hh
Zerbst;aydetl7hh
Klotzsche;avzey97hh
Hansestadt Salzwedel;b0teqz7hh
Püttlingen;aqxef57hh
Aichach;aomeqx7hh
Vaterstetten;annesp7hh
Holzminden;axzem97hh
Versmold;aykein7hh
Germersheim;aqpej97hh
Prenzlau;b24eyi7hh
Altena;awhehb7hh
Sömmerda;aw4eqw7hh
Unterhaching;anjesa7hh
Husum;b5del57hh
Engelskirchen;avnegl7hh
Haßloch;ar4eiy7hh
Bothfeld;azmen87hh
Hiddenhausen;ayxejy7hh
Bad Berleburg;avtejb7hh
Wülfrath;awgefk7hh
Ennigerloh;ay0eib7hh
Loschwitz;avteyd7hh
Volksdorf;b31eoa7hh
Edewecht;b1lei67hh
Bockum;awneee7hh
Hockenheim;ar0ejr7hh
Geseke;axgejn7hh
Stadtlohn;ayfef87hh
Heide;b4kela7hh
Bad Rappenau;aqsela7hh
Bergneustadt;avqeha7hh
Werdau;auyeue7hh
Bruchköbel;ateeks7hh
Fröndenberg;ax0ehl7hh
Herborn;ausej27hh
Nottuln;ay9egf7hh
Quickborn;b39enj7hh
Rheinstetten;aq1ej37hh
Oberkirch;aoteig7hh
Werdohl;aweehl7hh
Senden;ay2egs7hh
Nördlingen;appep57hh
Friesoythe;b1aehu7hh
Haldensleben I;az9erp7hh
Gersthofen;aoieq77hh
Haiger;auyeit7hh
Vlotho;ayxekm7hh
Adlershof;azoexn7hh
Zülpich;auteeh7hh
Giengen an der Brenz;ap2eog7hh
Blieskastel;aqseg67hh
Waghäusel;aqtejn7hh
Wittenberge;b18esn7hh
Waldkirch;anmei47hh
Neu Wulmstorf;b2jen77hh
Hessisch Oldendorf;ayxelp7hh
Nidderau;atkekn7hh
Kürten;avteg77hh
Rastede;b1xeis7hh
Wachtberg;aunefq7hh
Flörsheim;asxejf7hh
Schwanewede;b1uejv7hh
Mössingen;aohel57hh
Heusweiler;ar2ef97hh
Johannisthal;azpexj7hh
Hörstel;azaeh27hh
Wandlitz;b0iexe7hh
Steinhagen;aygejc7hh
Enger;ayuejs7hh
Bad Waldsee;an4en37hh
Eitorf;av1egp7hh
Kaltenkirchen;b3jeno7hh
Günzburg;aomeok7hh
Bad Schwartau;b3sepq7hh
Bad Driburg;axpel27hh
Schmalkalden;auwep07hh
Kröpeliner-Tor-Vorstadt;b49eto7hh
Waldbröl;avceh67hh
Teltow;azkewu7hh
Bemerode;azfenb7hh
Lebach;ar9ef77hh
Ochtrup;az1efz7hh
Schwalmtal;awaedf7hh
Charlottenburg-Nord;azxewx7hh
Mayen;atteg27hh
Kaulsdorf;azwexr7hh
Hechingen;aobekw7hh
Bönen;axcehl7hh
Telgte;ayeehm7hh
Schopfheim;amdehq7hh
Sulzbach-Rosenberg;ariesn7hh
Puchheim;anrerj7hh
Steilshoop;b2xeny7hh
Weil der Stadt;apfekn7hh
Schwalmstadt;avhelm7hh
Bremervörde;b2lelf7hh
Bückeburg;az6el57hh
Gauting;anjerm7hh
Burscheid;avwefr7hh
Schifferstadt;ar6eja7hh
Ottobrunn bei München;aniese7hh
Schneverdingen;b1ken77hh
Parchim;b2fesx7hh
Rhede;ay0eem7hh
Alfeld;ayeena7hh
Gröbenzell;anwerl7hh
Eselsberg;aohenn7hh
Gerlingen;apkel67hh
Heusenstamm;at2ekg7hh
Laupheim;anzeng7hh
Friedrichshagen;azpexu7hh
Lauchhammer;ax1ey97hh
Alzenau in Unterfranken;at5el67hh
Finsterwalde;axfey37hh
Baumschulenweg;azrexh7hh
Langen;b2xejw7hh
Oschersleben;ayjer77hh
Karow;b05exg7hh
Borna;aw0euq7hh
Dingolfing;ap4eup7hh
Lahnstein;atqeh67hh
Torgau;ax8ew47hh
Dillingen an der Donau;aoyep67hh
Bad Münder am Deister;az0ema7hh
Sarstedt;az3end7hh
Schwalbach;aqyeey7hh
Bad Dürkheim;areeip7hh
Radeberg;avzeyn7hh
Vellmar;awoemc7hh
Freudenberg;aveehv7hh
Sachsenheim;aq0el67hh
Schramberg;anyejb7hh
Aue;aujevb7hh
Konz;as2eea7hh
Marktoberdorf;amqepi7hh
Illingen;ar5efl7hh
Schkeuditz;awsety7hh
Hemmingen;azben07hh
Mölln;b2yepp7hh
Wadgassen;aqveeu7hh
Traunstein;amzev47hh
Löbau;avyf0r7hh
Donauwörth;apcepy7hh
Weißenburg in Bayern;aq7eqh7hh
Lilienthal;b1mekq7hh
Crimmitschau;av6euf7hh
Pfullingen;aomeln7hh
Burghausen;antevn7hh
Neufahrn bei Freising;ao8ese7hh
Kronach;atkerh7hh
Alzey;as7eik7hh
Nidda;au1el17hh
Buchen in Odenwald;arkelw7hh
Marktredwitz;aswetl7hh
Kierspe;aw1eh37hh
Großenhain;awhexl7hh
Tettnang;amfemn7hh
Wildeshausen;b0xejf7hh
Heiligensee;b05ewt7hh
Äußere Neustadt;avvey87hh
Müllheim;amteh77hh
Korntal;apnelc7hh
Eppelborn;ar8efd7hh
Bad Wildungen;aw0elc7hh
Kolbermoor;amxetj7hh
Altstadt Nord;aviefc7hh
Uetersen;b35emu7hh
Karlsfeld;anzerw7hh
Bad Saulgau;aneeme7hh
Kleinmachnow;azlewr7hh
Uerdingen;awneeg7hh
Wittlich;asvef57hh
Sinzig;aueeg57hh
Reinheim;asfekk7hh
Holzwickede;ax2eh77hh
Arheilgen;asnek27hh
Brakel;axoelj7hh
Bexbach;ar3eg67hh
Taufkirchen;anhesa7hh
Munster;b17eo17hh
Gartenstadt;areejc7hh
Kronberg;ateejn7hh
Babenhausen;astekv7hh
Bad Aibling;amyetd7hh
Harvestehude;b2uenr7hh
Garching;ao1esd7hh
Halver;aw7egu7hh
Frankenberg;avuekg7hh
Templin;b1kexi7hh
Mühldorf;ao1eus7hh
Schmelz;arbef17hh
Haar;annesl7hh
Kronberg Tal;ateejm7hh
Bendorf;au2eh27hh
Renningen;apheku7hh
Bad Tölz;amoes47hh
Nordstadt;azjen07hh
Nümbrecht;aveegy7hh
Oerlinghausen;aybek27hh
Hummelsbüttel;b31enw7hh
Moosburg;aonet67hh
Wittstock;b1oeuo7hh
Meerane;av9eum7hh
Cham;aqrev67hh
Oberasbach;araeqg7hh
Michelstadt;as0el07hh
Wörth am Rhein;aq9eiy7hh
Schlüchtern;atvemh7hh
Heilbad Heiligenstadt;awqeo67hh
Wolfratshausen;an3erq7hh
Blomberg;ayael97hh
Zossen;az2exd7hh
Selb;atdetp7hh
Gescher;aybefg7hh
Rotherbaum;b2tenq7hh
Elmschenhagen;b4teob7hh
Hochheim am Main;asxej77hh
Dulsberg;b2ueny7hh
Eutin;b4eeph7hh
Hausbruch;b2jeng7hh
Kamenz;awfez57hh
Dahlem;azqewx7hh
Bad Reichenhall;amlevs7hh
Gilching;annerd7hh
Bad Arolsen;awqel17hh
Eltville;aszeik7hh
Stockach;amxel17hh
Huckarde;ax5egm7hh
Schneeberg;aujev47hh
Diepholz;b05ej97hh
Holzkirchen;an0esi7hh
Hermsdorf;b05ewz7hh
Bad Langensalza;avzepl7hh
Marienberg;aupewk7hh
Vilshofen;ap3ewn7hh
Frohnau;b07ewx7hh
Heidenau;avleyj7hh
Bobingen;ao3eq37hh
Losheim;arjeer7hh
Wassenberg;avyed37hh
Mittweida;avnew27hh
Nauen;b05evr7hh
Sigmaringen;anleln7hh
Hille;azdekb7hh
Stockelsdorf;b3pepl7hh
Bad Säckingen;am3ei37hh
Hohenstein-Ernstthal;av4evb7hh
Eilenburg;awyev37hh
Illertissen;anyeo27hh
Harpen;ax2eg97hh
Gunzenhausen;aqgepw7hh
Haselhorst;azyews7hh
Hilchenbach;avoeij7hh
Wadern;armef57hh
Wendelstein;ar3eqz7hh
Hofgeismar;ax2em27hh
Königslutter am Elm;az5eq27hh
Bad Salzungen;av5eog7hh
Petersberg;augemz7hh
Seeheim-Jugenheim;as8ek17hh
Loxstedt;b2jek17hh
Kirchhain;av7ekt7hh
Sulzbach;aqyefm7hh
Hückeswagen;aw3ege7hh
Kladow;azpewi7hh
Großostheim;asoel87hh
Kirchlengern;az0ejz7hh
Hünfeld;ausen57hh
Weilerswist;auzef17hh
Hochfeld;awueer7hh
Remagen;auieg37hh
Baiersbronn;aoqeja7hh
Leopoldshöhe;ayhek67hh
Vechelde;az6eos7hh
Boppard;atjeh37hh
Halstenbek;b2zenc7hh
Glinde;b2qeod7hh
Bassum;b0tek97hh
Neuenhagen;azxey17hh
Brake (Unterweser);b25ejk7hh
Schrobenhausen;aowera7hh
Linden-Nord;azhemz7hh
Rahden;aznejx7hh
Lohr am Main;asveml7hh
Künzell;aueen07hh
Brüggen;awced67hh
Erwitte;axdej67hh
Penzberg;amnerm7hh
Witzenhausen;awmene7hh
Bad Segeberg;b3ueon7hh
Rissen;b2uen47hh
Ginsheim-Gustavsburg;astej77hh
Damme;azweis7hh
Petershausen-West;amfeli7hh
Wardenburg;b1eeis7hh
Grefrath;awmedm7hh
Othmarschen;b2renh7hh
Oschatz;awiewf7hh
Beckingen;ar8eem7hh
Blankenburg;axveqg7hh
Hövelhof;axyek17hh
Uslar;axiems7hh
Hettstedt;axherz7hh
Alsfeld;auzelr7hh
Neustadt in Holstein;b4beq17hh
Ratekau;b3vept7hh
Ebersbach an der Fils;apcemg7hh
Freilassing;amwew27hh
Unterkrozingen;an4ehd7hh
Bruckmühl;an0et37hh
Olsberg;awoejl7hh
Schiffweiler;ar5eft7hh
Lubnjow;ay2eyr7hh
Preetz;b4oeok7hh
Bad Essen;azcej57hh
Wendlingen am Neckar;ap7em27hh
Kelheim;apwet17hh
Weener;b1pegf7hh
Zeulenroda-Triebes;aupeta7hh
Königstein im Taunus;ateejj7hh
Riegelsberg;aqyef97hh
Klingenstein;aoienj7hh
Spenge;ayuejk7hh
Eberbach;arfekz7hh
Odenthal;avrefs7hh
Füssen;am5epq7hh
Marbach am Neckar;apyelq7hh
Hude;b1jejj7hh
Bad Bentheim;azaefw7hh
Niederkrüchten;aw8eda7hh
Schwarzenberg;aueevj7hh
Angermünde;b19eyw7hh
Bad Neustadt an der Saale;atseod7hh
Bilderstöckchen;avlef97hh
Ober-Ramstadt;asfekb7hh
Bürstadt;arweji7hh
Bochum-Werne;ax1egb7hh
Clausthal-Zellerfeld;axxeoq7hh
Ribnitz-Damgarten;b4oeum7hh
Straelen;awwedf7hh
Altdorf bei Nürnberg;ar7erk7hh
Oyten;b1del27hh
Lauda-Königshofen;arpemz7hh
Neu-Anspach;atsejm7hh
Karlstadt;assen57hh
Beverungen;axjem17hh
Drensteinfurt;axwehi7hh
Deutz;avhefd7hh
Freiberg am Neckar;apxelk7hh
Wurzen;awpeve7hh
Much;aveegk7hh
Alsterdorf;b2xent7hh
Wickede;ax5eh67hh
Eggenstein-Leopoldshafen;aqdejc7hh
Ascheberg;axueh67hh
Bad Laasphe;avhejf7hh
Bad Lippspringe;axueki7hh
Dieburg;asmekl7hh
Humboldtkolonie;avheff7hh
Brackenheim;aqcel77hh
Künzelsau;aqwemw7hh
Trossingen;ankek07hh
Weißwasser;ax2f0o7hh
=DJ
Djibouti;7u7h7v0in
Balbala;7u4h7r0in
Ali Sabih;7t0h6n0ij
Dikhil;7suh5p0ii
Tadjoura;7urh740ih
Arta;7u1h710ih
Obock;7v9h890ih
=DK
Copenhagen;b8oeux7no;哥本哈根|코펜하겐|Kodan|Hafnia|Copenaga|Kopenage|Kopenhag|Copenhaga|Kobenhavn|Kopenhaga|Kopenhage|Kopenhago|Köpenhamn|København|Cobanhavan|Copenaghen|Copenaguen|Copenhague|Kjobenhavn|Kjopenhamn|Kjøpenhamn|Kobenhaven|Koebenhavn|Koepenhamn|Kopenchage|Kopengagen|Kopenhagen|Koppenhaga|Copenhaguen|Kapehngagen|Kobenhamman|Kopenhaagen|Kopenhagena|Kopenkhagen|Københámman|Kööpenhamina|Kaupmannahöfn|Keypmannahavn|Kaupmannahoefn|Koeoepenhamina|コペンハーゲン|كوبنهاغن|كوپېنھاگېن|कोपनहागन|Капэнгаген|Копенгаген|โคเปนเฮเกน
Århus;ba0eod7nm
Odense;b7weov7nl
Aalborg;bchenk7nl
Frederiksberg;b8oeut7nk
Esbjerg;b83ejh7nj
Randers;bauenw7nj
Kolding;b85emb7nj
Horsens;b96end7nj
Vejle;b8remi7nj
Hvidovre;b8keuo7nj
Avedøre;b8jeum7nj
Klinteby Frihed;b7ces87nj
Roskilde;b8ketk7nj
Herning;b9yeky7nj
Silkeborg;ba1emj7nj
Hørsholm;b98euq7nj
Greve;b8eeu67nj
Hedensted;b8xemy7nj
Valby;b8neur7nj
Næstved;b7feso7nj
Viborg;batem47ni
Fredericia;b8den37ni
Rødovre;b8oeul7ni
Ballerup;b8teuc7ni
Charlottenlund;b8veux7ni
Køge;b82etu7ni
Vanløse;b8oeup7ni
Hillerød;b9deu67ni
Taastrup;b8leu67ni
Helsingør;b9oev17ni
Holstebro;bakejy7ni
Slagelse;b7werj7ni
Viby;b9weo77ni
Albertslund;b8meuc7ni
Holbæk;b8sesj7ni
Sønderborg;b6jen77ni
Svendborg;b6yeph7ni
Indre By;b8oeux7ni
Allerød;b97euc7ni
Hjørring;bdmenq7ni
Nørresundby;bcienk7ni
Glostrup;b8neug7nh
Ringsted;b80esr7nh
Frederikshavn;bdkepa7nh
Haderslev;b7hemd7nh
Birkerød;b95euj7nh
Farum;b91euc7nh
Skive;bb5el37nh
Brøndbyvester;b8leuh7nh
Stenløse;b8xetw7nh
Nykøbing Falster;b65esz7nh
Ishøj;b8ieub7nh
Vordingborg;b6tet37nh
Nyborg;b7nepz7nh
Solrød Strand;b89ety7nh
Frederikssund;b94etj7nh
Lillerød;b97eub7nh
Vallensbæk;b8ieuf7nh
Aabenraa;b6wem67nh
Tønder;b6lekn7nh
Middelfart;b87en17nh
Kalundborg;b8oeqt7nh
Tilst;ba3eo37nh
=DM
Roseau;84i95h2lh
=DO
Santo Domingo;8db8hv46p;聖多明哥|산토도밍고|Santa-Daminga|Santo-Dominqo|Saint Domingue|Ciudad Trujillo|Santo Ntomin'nko|Санта-Дамінга|Санто Доминго
Santiago de los Caballeros;8g18fn46o;聖地牙哥|Santiago|Sant'jago-de-los-Kabal'eros|산티아고데로스카바예로스|サンティアゴ・デ・ロス・カバリェロス|Сантьяго-де-лос-Кабальерос
Santo Domingo Oeste;8de8hk46n
Santo Domingo Este;8dd8hz46n
San Pedro de Macorís;8d98jh46l
La Romana;8d68kf46l
Bella Vista;8da8hp46l
San Cristóbal;8d68h946l
Puerto Plata;8gz8fn46l
San Francisco de Macorís;8fl8gv46k
Salvaleón de Higüey;8dq8l546k
La Vega;8fe8g346k
Punta Cana;8dm8m046k
Santa Cruz de Barahona;8cl8ei46k
Bonao;8em8gf46j
San Juan de la Maguana;8e98e546j
Bajos de Haina;8d68hh46j
Baní;8cs8gn46j
Moca;8fv8g446j
Azua;8d98fj46j
Cristo Rey;8de8hr46j
Villa Francisca;8dc8hv46j
Mao;8gb8ek46j
Boca Chica;8d98io46j
Salcedo;8fu8ge46j
Esperanza;8ge8eu46i
Cotuí;8ex8h546i
Villa Altagracia;8dv8h346i
Hato Mayor del Rey;8e58jm46i
Nagua;8fu8hz46i
Villa Bisonó;8gc8f446i
Jarabacoa;8f48fs46i
Constanza;8ej8fi46i
Villa Consuelo;8dc8hu46i
Santa Cruz de El Seibo;8e48k846h
Tamboril;8g58fv46h
Las Matas de Farfán;8ef8dc46h
San José de Ocoa;8dj8g546h
Bayaguana;8e38ik46h
Río Grande;8gn8ff46h
Monte Llano;8gt8fw46h
Ciudad Nueva;8db8hv46h
Neiba;8dd8dm46h
Quisqueya;8dk8j746h
San Fernando de Monte Cristi;8h58cz46h
Sabana Grande de Boyá;8em8i546h
Dajabón;8gb8ct46h
San Ignacio de Sabaneta;8g48du46h
Monte Plata;8e98i646h
=DZ
Algiers;9s1e4l03p;알제|Alge|Alje|Alse|Alger|Algir|Aljer|Aljir|Alxer|Alzer|Alzir|Argel|Arhel|Arjel|Arxel|Alcher|Algeri|Algero|Algier|Alzhir|Alzhyr|Alziir|Alzira|Alzirs|Argier|Cäsair|Jazoir|Zzayer|Alzyras|Caesair|Cezayir|Icosium|Al Jazair|Al-jezair|Algeirsborg|Alzhir khot|Alzhir shaary|アルジェ|阿爾及爾|Алжир|Алжыр|ئالجىر|الجیرز|अल्जीएर्स|अल्जीयर्स|แอลเจียร์|jەzayyr|الجزائر
Oran;9p6du803o;وهران|ولاية وهران
Constantine;9r0eed03n;قسنطينة
Annaba;9siehl03m;عنابة|عنابه
Blida;9rbe3v03m;البليدة
Batna;9osed503m;باتنة|ولاية باتنة
Bab Ezzouar;9s1e4u03m;باب الزوار|باب‌الزوار
Djelfa;9mbe5203m;جلفه|الجلفة|ولاية الجلفة
Sétif;9qjeb103m;سطف|سطيف|ولاية سطيف
Sidi Bel Abbes;9nrdu903l;سيدي بلعباس|ولاية سيدي بلعباس
Biskra;9mtebx03l;بسكرة|ولاية بسكرة
Tébessa;9oceik03l;تبسة
El Oued;9ioef203l;الوادي|اﻟﻮادى|وادي سوف
Skikda;9sgef703l;سكيكدة|فيليبفيل|ولاية سعيدة
Tiaret;9o9dzo03l;تيارت
Chlef;9qhdzp03l;شلف|الشلف|الأصنام
Béjaïa;9s4ea403l;بجاية
Tlemcen;9mwdsc03l;تلمسان
Ouargla;9ereat03l;ورقلة
Béchar;9dudpu03l;بشار
Mostaganem;9ptdw903l;مستغانم|مستاغانم
Bordj Bou Arreridj;9q7e9803l;برج بوعريريج
El Achir;9q6e8v03l;اليشير
Souk Ahras;9qtei303l;سوق أهراس
Médéa;9qqe3n03l;المدية
El Eulma;9qfebt03l
Touggourt;9hzecv03l;تقرت|توقرت
Ghardaïa;9g9e6703l;غرداية|ولاية غرداية
Saïda;9mrdwf03l;سعيدة
Laghouat;9jwe3z03l;اغواط|الأغواط
M'Sila;9p7e8m03k;المسيلة
Jijel;9saec003k;جيجل
Relizane;9padxk03k;غليزان|ولاية غليزان
Bordj el Kiffan;9s3e4v03k;برج الكيفان
Guelma;9raegn03k;قالمة|ڤالمة
Rouiba;9s2e5403k;الرويبة
Aïn Beïda;9pgegj03k
Khenchela;9ogefu03k;خنشلة|خنشله
Bou Saâda;9nte7l03k;بوسعادة|بو سعادة|بلد السعادة
Mascara;9ocdwe03k;معسكر|معسكر‎
Baraki;9rve4m03k;براقي
Tizi Ouzou;9rze7903k;تيزي وزو
Barika;9obeax03k;بريكة
Aïn Oussera;9ohe4303k;بول كازيل|عين وسارة
Messaad;9kve5q03k
Aflou;9kre1u03k
Beni Mered;9rge3y03k
El Khroub;9qqeel03k
Maghnia;9mtdr703k
El Bayadh;9jkdyu03k;البيض|ولاية البيض
Hamma Bouziane;9r5eec03k
Tamanghasset;8paebc03k;تمنغست|تامنغست|تمنراست
Rouissat;9eoeav03k
Khemis Miliana;9qqe2603k;أفرفيل|الخميس|خميس مليانة
Hassi Bahbah;9nfe4f03k
Birkhadem;9rze4h03j;بئر خادم
Sougueur;9nre0603j
Aïn Temouchent;9o2dsu03j;عين تموشنت
Bir el Ater;9mieie03j;بئر العاتر|بير العاتر
Bouïra;9r1e6u03j;البويرة
Adrar;93fdv703j;أدرار|ادرار|ادرار، الجزائر
Bir el Djir;9p8dui03j
Oum el Bouaghi;9poefr03j;أم البواقي
Sidi Aïssa;9ppe6h03j
Besbes;9ryeht03j
Cheria;9nzehj03j
Tissemsilt;9oxe1103j;فيالار|تسمسيلت|تيسمسيلت
Aïn M’Lila;9q4ee903j
Mecheria;9j6dv803j
Ali Mendjeli;9qpee903j
Mila;9r9ede03j;ميلة
Mohammadia;9ovdw703j
Kolea;9rse3p03j
Sig;9opdvh03j
District of Taher;9s5ece03j
Ech Chettia;9qkdzi03j
Ksar el Boukhari;9ppe3n03j
Guerara;9h3e8i03j
Ouled Djellal;9lnea203j;أولاد جلال|اولاد جلال
Larbaâ;9rke4r03j
Arzew;9pldv403j;أرزيو|سان لو
El Menia;9aye4003j;المنيعة
Boufarik;9rle4303j
Boudouaou;9s1e5h03j;بودواو
Berrouaghia;9qee4303j
Aïn Touta;9oaece03j
Oued Rhiou;9pwdyk03j;وادي رهيو|وادي ارهيو
Aïn Defla;9qqe1h03j;عين الدفلة|عين الدفلى|عين الدفلى‎
Drean;9rwehj03j
Reghaïa;9s2e5a03j
Boghni;9rie6z03j;بوغني
Chelghoum el Aïd;9qged503j
Assi Bou Nif;9p5dum03j
Bordj el Bahri;9s7e5103j;ماتيفو|برج البحري|رأس ماتيفو
Mansoûra;9mudsa03j
En Nedjma;9p1duf03j
Ksar Chellala;9nte2g03j
Aïn Oulmene;9pseaq03j
Tolga;9mgeay03j
Frenda;9nfdyx03j
Aïn Fakroun;9pxef303j
Guemar;9j1eew03j
Merouana;9ozecf03j
Aïn Sefra;9gzdue03j
Ouenza;9pveil03j
Khemis el Khechna;9rte5903j
Douéra;9rve4603j;بلدية دويرة
El Milia;9s3edf03j
Tindouf;92vd9d03j;تندوف|تيندوف
Sedrata;9qdegx03j
Sidi Amar;9saehg03j
Râs el Oued;9pue9z03j;توكفيل|رأس الواد|رأس الوادي
Bordj Menaïel;9s2e6c03j
Oued Fodda;9qje0903j;واد فدة|وادي فدة|واد الفضة
Hassi Messaoud;9e0ecv03j;حاسي مسعود
Boû Arfa;9rae3t03j
Sour el Ghozlane;9qfe6903j
Miliana;9qve2603j;مليانة
Lakhdaria;9rke5z03j;لخضرية|الأخضرية|الأخضريه
Tadjenanet;9qcecn03i
Tazoult-Lambese;9okede03i
Draa el Mizan;9rie6n03i
Timizart;9s8e7v03i
Tebesbest;9i0ecw03i
Bou Ismaïl;9rse3h03i
Meftah;9rqe4y03i
Souma;9rge4303i
Ouled Moussa;9rwe5d03i
Rouached;9raecs03i
Héliopolis;9reego03i
Tighenif;9oedwx03i
Beni Saf;9o2ds603i;بني صاف
El Hadjira;9glebb03i
Metlili Chaamba;9fne6303i
El Abiodh Sidi Cheikh;9hddxj03i
El Meghaïer;9kbecg03i;المغير
Es Senia;9p1dua03i;السانية‎
Sidi Khaled;9lje9v03i;سيدي خالد
Bougara;9rie4k03i
Akbou;9rae8l03i;أقبو
’Aïn Azel;9piebb03i
Dar el Beïda;9rze4x03i;الدار البيضاء
Aïn el Bya;9pgdv603i
Debila;9j4efb03i
Chetouane;9n0dse03i
Arris;9nyedn03i
M’Daourouch;9q8ehq03i
’Aïn el Turk;9padtv03i;عين الترك
’Aïn Deheb;9mse0b03i
Sidi ech Chahmi;9p2duk03i
El Kala;9siejg03i;القالة
El Affroun;9rbe3b03i
Djamaa;9j5ecn03i;جامعة
Makouda;9s7e7a03i
’Aïn Merane;9qgdyp03i;دائرة عين مران
Cherchell;9roe2303i;شرشال
Râs el Aïoun;9p3ebp03i
Bordj Ghdir;9pqe9m03i
Beni Tamou;9rie3u03i
Hadjout;9rfe2p03i
Azzaba;9s2efr03i;جماب|عزابة
Beni Douala;9rqe7c03i
Aïn Taya;9s7e5503i;عين طاية
El Attaf;9qme0n03i
El Arrouch;9rtef003i
Reggane;908dwh03i;رقان
El Aouinet;9pnehx03i
’Aïn el Melh;9mse7k03i
Gdyel;9pedut03i;قديل|سان كلو
Kaïs;9olef803i
Tamalous;9sceeg03i;تمالوس
Sebdou;9m8dsb03i
Aïn Bessem;9qte6703i;عين بسام
In Salah;91ke2w03i;إن صالح|عين صالح
Aïn Smara;9qree203i;عين سمارة
Djidiouia;9ptdyb03i
Barbacha;9rle9t03i;برباشة|سوق الثلاثاء|مرباشة مرباشة
Bougaa;9qxea503i
’Aïn el Bell;9lee4y03i
el hed;9rte9903i;الحد|إلماثن|تيميزارت إلماثن
Remchi;9neds103i;الرمشي|مونتنياك
Megarine;9i7ecx03i
Mehdia daira de meghila;9ofe0w03i
’Aïn Benian;9s8e4403i
Freha;9s3e8003i
Sidi Moussa;9rpe4l03i
L’Arbaa Naït Irathen;9rre7o03i
Aïn Kercha;9pseem03i
Oued Sly;9qadzc03i;مالاكف|واد سلي|وادي سلي
Robbah;9igef703i
Bouinan;9rhe4b03i
Berriane;9h7e6h03i
Meskiana;9ozehb03i
Lardjem;9pbe0b03i
Rais Hamidou;9sae4d03i;رايس حميدو|بوانت بسكاد|الرئيس حميدو
El Idrissia;9lpe3103i
Sidi Amrane;9j2ecp03i
Ahmed Bel Hadj;9s8eh503i
Mekla;9rwe7u03i;مقلع
Sidi Okba;9mjece03i
’Aïn Abid;9qnefa03i
N’Gaous;9osebl03i;نقاوس
Draa Ben Khedda;9s1e7003i
Collo;9stee803i
Ténès;9rfdzn03i
Ouled Haddaj;9rze5a03i
Boumerdas;9s5e5o03i;بومرداس|بو مرداس|أبو مرداس
Zighout Youcef;9rheen03i
Ain el Hadjel;9p3e6s03i
Boukadir;9q7dz503i;بوقادير
Mouzaïa;9rbe3h03i
Grarem;9rgedl03i
Hammamet;9ohei303i
Ghazaouet;9nidqu03i
Ben Mehidi;9s5ehz03i
’Aïn el Hammam;9rke7z03i
Tizi Gheniff;9rne6h03i
Sfizef;9nvdvc03i;سفيزف
Cheraga;9s5e4803i
Nedroma;9n9dr503i
Charef;9m6e3s03i
Theniet el Had;9pne1n03i
Bou Hanifia el Hamamat;9o3dvv03i
Ouled Slama Fouaga;9rje4n03i
Ammi Moussa;9pndz303i
Oued Zenati;9qwefw03i
El Abadia;9qre0p03i
Kerkera;9sleeb03i;الكركرة
Feidh el Botma;9lue6h03i
Birine;9p0e4y03i
Dar Chioukh;9mye5p03i
Sidi Akkacha;9radzm03i
Azazga;9s2e8503i
Hennaya;9n3ds703i
El Amria;9oodt603i;لورمل|لورمال|العامرية
Dellys;9ske6v03i;دلّس
Tirmitine;9rte7203i;تيرمتين|ثيرميثين|ثيرميثين أوفلا
Telerghma;9qcedn03i
Fedj M’Zala;9r5eci03i
Bou Tlelis;9otdti03i
Maâtkas;9roe7203i
Chellalat el Adhaouara;9pue5i03i
El Hadjar;9s8ehi03i
El Kseur;9rwe9i03i;القصر
Hammam Bou Hadjar;9oadtb03i;حمام بوحجر|حمام أبو حجر|حمام بو حجار
Amizour;9rse9m03i;كلمار|أميزور|كولمار
Didouche Mourad;9r9eeg03i
Melouza;9pye7n03i
Ouled Mimoun;9mydt503i
Aïn Arnat;9qjear03i;عين أرنات
Reguiba;9j8eem03i;الرقيبة
Sidi Mérouane;9rgede03i
Abou el Hassan;9r6dzc03i;دائرة أبو الحسن
Arhribs;9s7e7z03i
Sidi Abdelli;9nfdsu03h
Salah Bey;9pleap03h;بسكال|دزيرة|باسكال
Chiffa;9rae3m03h
Zeribet el Oued;9mcee303h
Boumahra Ahmed;9raegv03h
Oued el Abtal;9oidxx03h
Tizi-n-Tleta;9rje7a03h
Mazouna;9qcdyi03h
Mansourah;9q9e8d03h
Timimoun;97adwo03h;تميمون|تيميمون
Zemoura;9p8dy403h
Aoulef;90xdz003h;آولف|أولف|أولف العرب
Feraoun;9rke9h03h;فرعون
Chemini;9roe8u03h
Bensekrane;9nfdsm03h
Oued el Alleug;9rke3r03h
Taïbet;9hxedr03h
Tadmaït;9s2e6u03h
Boudjima;9s8e7j03h
Chorfa;9r1e8103h
Mers el Kebir;9p9du103h;بلدية المرسى الكبير
Chebli;9rme4d03h;الشبلي
Seddouk;9rje9103h;صدوق
Beni Mester;9mvds203h
Bordj Zemoura;9qre9i03h
Chabet el Ameur;9rse6903h
El Malah;9obdsz03h;المالح|ريو سالادو
Berrahal;9scegp03h
Brezina;9hydzi03h
Babor;9rdebe03h;بابور|بلدية بابور
Beni Amrane;9rve5z03h;بني عمران
Tizi Rached;9rve7n03h
Zeralda;9rze3w03h
Arbatache;9rse5d03h
Saoula;9rye4e03h
’Aïn el Berd;9o8dul03h
Thenia;9s1e5w03h
Naciria;9s3e6n03h
Tipasa;9rne2t03h;تيبازة|تيباسة
Ighram;9rae8j03h
=EC
Quito;6xd7tw2vq;キト|基多|키토|Kita|Kito|Kitu|Kitas|Kuito|Quitu|Quitum|Кито|Кіта|كىتو|كيتو|กีโต|क्वितो|क्वीटो
Guayaquil;6rw7q32vq;과야킬|瓜亞基爾|グアヤキル|Wayakil|Guajakil|Gvajakil|Guaiaquil|Gvajakila|Gvajakilo|Gouagiakil|Gvajakilis|Guaiaquilum|Гуаякил|Гвајакил|گوایاکل|غواياكيل|กวายากิล|ग्वायाकिल
Cuenca;6py7sk2vn
Santo Domingo de los Colorados;6xb7s22vn
Ambato;6uj7tm2vm
Portoviejo;6v27oj2vm
Eloy Alfaro;6rz7q82vm
Machala;6oy7pw2vm
Loja;6mx7s02vm
Manta;6vd7nr2vm
Riobamba;6td7ti2vm
Ibarra;6yz7v02vl
Esmeraldas;70o7qr2vl
Quevedo;6v57ra2vl
Latacunga;6vf7tm2vl
Daule;6su7pu2vl
Milagro;6s37qx2vl
Tulcán;7097w42vk
Babahoyo;6t07r42vk
La Libertad;6rt7n92vk
El Empalme;6v47qs2vj
Puerto Francisco de Orellana;6wr7y42vj
Pasaje;6or7qb2vj
Chone;6w27pj2vj
Salinas;6rv7n52vj
Santa Elena;6rt7ne2vj
Rosa Zarate;6yx7r92vi
Santa Rosa;6oe7pw2vi
Balzar;6u77q12vi
Huaquillas;6oc7p52vi
Ventanas;6u07ra2vi
Bahía de Caráquez;6wc7om2vi
La Troncal;6ra7rm2vi
Jipijapa;6u97o62vi
Azogues;6qe7sz2vi
Naranjito;6rz7ra2vi
Vinces;6to7qh2vi
Otavalo;6yn7um2vi
El Triunfo;6sn7pv2vi
Naranjal;6qk7qu2vi
Posorja;6qh7p32vi
Playas;6qp7op2vi
Pomasqui;6xv7u32vi
Yaguachi Nuevo;6s67qn2vi
Guabo;6p07q92vi
Cayambe;6y47ux2vi
Arenillas;6o57pl2vi
Machachi;6wl7tr2vi
Puyo;6tv7vc2vi
Nueva Loja;6y97ye2vi
Samborondón;6sk7qj2vi
Macas;6rl7v02vh
Pedro Carbo;6sy7p52vh
Guaranda;6tl7sk2vh
Boca Suno;6w27xq2vh
San Lorenzo de Esmeraldas;71l7t02vh
Valencia;6vd7rk2vh
Catamayo;6mx7rk2vh
Montecristi;6v37ny2vh
Atuntaqui;6yx7uq2vh
Calceta;6vn7pc2vh
Tena;6v87vv2vh
Gualaceo;6pz7t62vh
Piñas;6ns7qo2vh
Cariamanga;6lz7r02vh
Pelileo;6ub7tt2vh
La Maná;6ve7rx2vh
Pujilí;6vc7te2vh
Montalvo;6t17rr2vh
Sucre;6ug7om2vh
Zamora;6mq7sp2vh
=EE
Tallinn;bj4fsr8mm
Lasnamäe;bj3ft28mk
Tartu;bg6fy98mk
Mustamäe;bj0fsk8mj
Kesklinn;bj4fss8mj
Põhja-Tallinn;bj5fsm8mj
Narva;biyg2b8mj
Haabersti;bj2fsh8mj
Pärnu;bg7fs28mi
Nõmme;biyfsl8mi
Kohtla-Järve;bj0fzr8mi
Kristiine;bj2fsn8mi
Pirita;bj7ft08mh
Viljandi;bg4fv38mh
Maardu;bj7fte8mh
=EG
Cairo;99igat0cs;开罗|開羅|カイロ|카이로|Kair|Masr|Misr|Caire|Cairu|Kaira|Kairo|Kajro|Kayro|Cairus|Gahire|Kahira|Kahire|Kairas|Kaherah|Kahirae|O Cairo|El Caire|El Cairo|Il Cairo|Le Caire|El Kahira|El-Qahira|Lo Cayiro|Al Qahirah|El Kahirah|Каир|Каїр|ไคโร|قاهره|قاہرہ|القاهرة
Alexandria;9cog740cr;亞歷山卓|亚历山大港|亞歷山大港|알렉산드리아|Iskandri|Alejandria|Alexandrie|Taskendrit|Alegsandiri|Alehandriya|Aleixandria|Aleksandria|Aleksandrii|Aleksandrij|Aleksandrio|Aleksandrje|Alessandria|Alexandreia|Iskandariah|Iskandariya|Iskenderiye|Iskindiriya|Aleksandrija|Aleksandriya|Aleksandryja|Aleksandryjo|Iskandariyah|Ol'oksandrija|El Iskandariya|Al Iskandariyah|Alexandria Magna|Cathair Alastair|Alesandria dEgito|Ałesandria dEgito|Lisandria dEgittu|Alessandria d'Egitto|Alessandria dEggittu|Искандри|Искәндәриә|اسكندريه|اسکندریه|アレクサンドリア|सिकन्दरिया|अलेक्झांड्रिया|อะเล็กซานเดรีย|الإسكندرية|yەskەndەryە
Giza;99dgap0cr;ギーザ|Gize|Gizo|Gizah|Gizeh|Guiza|Ghizeh|El-Giza|Al Jizah|El Gizeh|Гиза|جیزه|الجيزة
Shubrā al Khaymah;99pgat0co;شبرا الخيمة|Shubra al-Khayma|Shubra el-Kheima
Port Said;9cvgdq0co;بورسعيد|بور سعيد
Suez;999ged0cn;سوئز|سويس|السويس
Madīnat an Naşr;99jgay0cn
Al Mansurah;9c8gb60cn;منصورة|منصوره|المنصورة
Al Maḩallah al Kubrá;9c1gal0cn;المحلة الكبرى
Tanta;9bjga40cn;طنطا
Assiut;91igam0cn;أسيوط
Al Fayyum;97fg9o0cn;الفيوم|محافظة الفيوم
Al Khuşūş;99rgb00cn
Esna;8w9gef0cn;إسنا
Zagazig;9azgbi0cn;الزقازيق
Ismailia;9b0gdn0cn;اسماعيليه|الإسماعيلية|مدينة الإسماعيلية
Luxor;8xegeo0cn;اقصر|الأقصر|الاقصر
Kom Ombo;8u0gfj0cm
Aswān;8sxgfe0cm;أسوان|اسوان
6th of October City;98uga90cm
Ḩadā’iq al Qubbah;99lgaw0cm;حدائق القبة
Damanhur;9c7g8n0cm;دمنهور
Al Qāhirah al Jadīdah;99ggbc0cm;القاهرة الجديدة
New Cairo;99fgbf0cm;القاهرة الجديدة
Damietta;9dagcd0cm;دمياط
Rosetta;9d8g8i0cm;رشيد
Minya;941g9g0cm;المنيا
Banī Suwayf;96rgae0cm;بني سويف
Shibīn al Kawm;9avga50cm;شبين الكوم
Sohag;8zsgc10cm;سوهاج
Qina;8yogex0cm;قنا|استان قنا
Al ‘Āshir min Ramaḑān;9a6gc70cm;عاشر من رمضان|العاشر من رمضان|ەل-اشىير-مىين-رامادان
Ḩalwān;98wgay0cl;حلوان
Mallawī;931g9o0cl;ملوي
Hurghada;91qghx0cl;غردقه|الغردقة|الغردقه
Arīsh;9chghw0cl;العريش
Kafr ash Shaykh;9cfg9y0cl;كفر الشيخ
Bilbeis;9aigbo0cl;بلبيس|بىيلبەيس
Banhā;9amgam0cl;بنها
Idkū;9czg860cl;إدكو
Marsá Maţrūḩ;9d3fzo0cl;مرسى مطروح
Al Maţarīyah;9cmgcz0cl;المطرية
Qalyub;99ugap0cl;قليوب
Al Ḩawāmidīyah;992gat0cl
Abū Kabīr;9bdgbz0cl;أبو كبير
Mīt Ghamr;9bcgau0cl;ميت غمر
Akhmīm;8zsgc70cl;أخميم
Girga;8z6gcl0cl;جرجا
Disūq;9chg950cl;دسوق
Samālūţ;94ng9b0cl;سمالوط
Al-'Ubūr;99zgbg0cl;العبور
Kirdāsah;99fgaf0cl;كرداسة
Bilqās;9cpgb40cl;بلقاس
Būsh;96zgah0cl;ناصر-بوش سابقا
Ţahţā;90dgbi0cl;طهطا
Sinnūris;97pg9r0cl
Kafr ad Dawwār;9chg7p0ck;كفر الدوار
Al Manzalah;9ckgcq0ck;المنزلة
Munūf;9ang9x0ck;منوف
Ashmūn;9a6ga20ck;أشمون
As Sinbillāwayn;9bsgbe0ck;السنبلاوين
Maghāghah;95lg9o0ck;مغاغة
Manfalūţ;91vga10ck;منفلوط
Fāqūs;9bdgcc0ck;فاقوس
Banī Mazār;955g9l0ck;بني مزار
Al Fashn;962g9u0ck;الفشن
Ţalkhā;9c9gb60ck;طلخا
Abnūb;91rgaj0ck;أبنوب
Zefta;9bbgas0ck;زفتى
Abū Tīj;915gb00ck;أبو تيج
Dayrūţ;92kg9l0ck;ديروط
Ţimā;90rgbb0ck;طما
Dikirnis;9cdgbr0ck;دكرنس
Al Jammālīyah;9cmgci0ck;الجمالية
Al Qūşīyah;928g9m0ck;القوصية
Minyā al Qamḩ;9asgb30ck;منيا القمح
Ash-Shaykh Zāyid;99ega40ck;الشيخ زايد
Bibā;96cga30ck;ببا
Al Qurayn;9b2gc60ck;القرين
Awsīm;99ogai0ck;أوسيم
Fuwwah;9cog8v0ck;فوة|فوه
El Shorouk;99qgbu0ck;الشروق
Al Minshāh;8zkgcc0ck;المنشاة
Al Badrashayn;98xgav0ck
Abū Qurqāş;93lg9o0ck;أبو قرقاص
Biyalā;9clgaq0ck;بيلا
Samannūd;9c0gas0ck;سمنود
Abū an Numrus;997gao0ck
Ibshawāy;97kg980ck;إبشواي
Qūş;8y0gf00ck;قوص
Al Qanāţir al Khayrīyah;99vgai0ck;القناطر الخيرية
Kafr az Zayyāt;9bmg9m0ck;كفر الزيات
Al Khārjah;8wpg8v0ck;الخارجة
Al-Khārijah;8w5g8v0ck
Ḩawsh ‘Īsá;9bvg850ck
Minyat an Naşr;9chgbw0ck;منية النصر
Maţāy;94yg9i0ck;مطاي
Al Khānkah;99xgb50ck
Diyarb Najm;9bfgbc0ck;ديرب نجم
Edfu;8vegfc0ck;إدفو|ادفو|ەدفۋ
Armant;8x6gee0ck;أرمنت
Sirs al Layyānah;9akga10ck;سرس الليانة
Ītāy al Bārūd;9btg970ck;إيتاي البارود
Juhaynah;903gbi0ck;جهينة
Shirbīn;9cogbk0ck;شربين
Ash Shuhadā’;9b0g9u0ck;الشهداء
Mashtūl as Sūq;9acgb60ck
Basyūn;9byg9l0ck
Hihyā;9b7gbr0cj;ههيا
Iţsā;978g9j0cj;أطسا
Shibīn al Qanāţir;9a7gb00cj;شبين القناطر
Ţāmiyah;97wga00cj
Talā;9b8g9y0cj;تلا
Madīnat as Sādāt;9adg8r0cj
Farshūţ;8yegdc0cj;فرشوط
Al Ghanāyim;90ogb10cj;الغنايم|الغنايم الشرقية
Al Qanāyāt;9b2gbe0cj;القنايات
Ihnāsyā al Madīnah;96tg9y0cj
Ad Dilinjāt;9bng8u0cj;الدلنجات
Al Balyanā;8ywgcw0cj;البلينا
Abū al Maţāmīr;9bvg7t0cj
Quwaysinā;9awgak0cj;قويسنا
Sumusţā al Waqf;96cg9p0cj;سمسطا الوقف
Dishnā;8ykge70cj;دشنا
Ihnāsīyah;96tga60cj
Al Bājūr;9ajga80cj;الباجور
Darāw;8ttgfg0cj
Aş Şaff;984gaw0cj;الصف
Abū Ḩummuş;9cdg870cj;أبو حمص
Dayr Mawās;92sg9p0cj;دير مواس
Al Burj;9dqga20cj;البرج
Nag Hammâdi;8ydgdk0cj;نجع حمادى
Aş Şāliḩīyah al Jadīdah;9b3gcq0cj;الصالحية الجديدة
Nabarūh;9cegay0cj;نبروه
Al Ḩāmūl;9czgaj0cj;الحامول
Al Wāsiţah;97igap0cj
Al Badārī;90zgba0cj;البداري
Kawm Ḩamādah;9bgg9a0cj;كوم حماده
Dumyāţ al Jadīdah;9dbgc00cj;دمياط الجديدة
As Sāḩil;916gb20cj;الساحل|ساحل سليم
Al Ibrāhīmīyah;9bcgbo0cj;الإبراهيمية
Al Marāghah;906gbs0cj;المراغة
Safaga;90bgia0cj;سفاجا
‘Izbat ‘Alī as Sayyid;9ckg7r0cj;عزبة علي السيد
Ţūkh;9abgao0cj;طوخ
Būlāq Abū al ‘Ilā;99igar0cj;بولاق|بولاق أبو العلا
Balţīm;9dogad0cj;بلطيم
Birkat as Sab‘;9b3gac0cj;بركة السبح
Al Ḩusaynīyah;9bqgco0cj;الحسينية
Qillīn;9c9g9p0cj;قلين
Mīt Salsīl;9clgcc0cj;ميت سلسيل
Kafr al Baţţīkh;9d8gc60cj;كفر البطيخ
Aga;9bygax0cj;أجا
Zaafarana;96vgeq0cj
At Tall al Kabīr;9augcb0cj;التل الكبير
Banī ‘Ubayd;93ng9i0cj;بني عبيد
Burj al ‘Arab al Jadīdah;9btg660cj;برج العرب الجديدة
As Sanţah;9bfgah0cj;السنطه
Al ‘Ayyāţ;98agau0cj
Aş Şalāḩāt;9c4gbv0cj;الصلاحات|كفر الصلاحات
Ain Sukhna;988gds0cj;العين السخنة
Al ‘Ayn as Sukhnah;987gdu0cj
Kafr al Kurdī;9clgc90cj;الكردي|كفر الكردي
Ras Gharib;94sgfw0cj
Sīdī Sālim;9cvg9j0cj;سيدي سالم
Kafr Şaqr;9bjgbv0cj;كفر صقر
Ar Raḩmānīyah;9ceg940cj;الرحمانية
Rafaḩ;9cwgj40cj;رفح
Muţūbas;9cxg8s0cj;مطوبس
Fāraskūr;9d1gc40cj;فارسكور
Abū Ḩammād;9augc00cj;أبو حماد
Shubrākhīt;9c7g9b0ci;شبراخيت
Madīnat Wādī an Naţrūn;9aeg8b0ci;مدينة وادي النطرون
Aţ Ţārif;8xigeo0ci;الطارف
Sharm el-Sheikh;93kgjd0ci;شرم الشيخ
El-Tor;94gghe0ci;الطور
Sīdī Barānī;9dtfw10ci;سيدى برانى|سيدي براني
Dār as Salām;8z0gd20ci;دار السلام
Abū Qīr;9czg7i0ci;أبو قير|ابو قير
‘Izbat al Burj;9djgcg0ci;عزبة البرج
Sumusţā as Sulţānī;96cg9p0ci
Qahā;9a4gap0ci;قها
Fāyīd;9a7gdr0ci
Al Waqf;8yhge20ci;وقف|الوقف
Al Maḩmūdīyah;9cmg8s0ci;المحمودية
Sāqultah;902gbz0ci;ساقلتة
Badr;99qgc40ci
Al Başalīyah Baḩrī;8vvgew0ci
Awlād Şaqr;9bxgc20ci;أولاد صقر
Abu Suweir-el-Mahatta;9axgd70ci
Banī Suwayf al Jadīdah;96ngaf0ci
Quţūr;9c1ga00ci;قطور
Maḩallat Damanah;9cbgbi0ci;محلة دمنة
Al Qanţarah;9bqgdr0ci;القنطرة
Ar-Rawḍah;9d0gc80ci
Şān al Ḩajar al Qiblīyah;9c1gcj0ci;صان الحجر القبلية
Kafr Shukr;9avgas0ci
Ţūd;8x2ged0ci;طود
Şidfā;90xgb60ci;صدفا
As Sarw;9csgbx0ci;السرو
New Bani Sewif City;96ogag0ci
Sīdī Ghāzī;9cpga90ci;سيدي غازي
Badr;9ayg9b0ci
El Dabaa;9c7g300ci;الضبعة
Hala'ib;8nqgpt0ci
Az Zarqā;9cpgbw0ci;الزرقا
Aţfīḩ;97pgat0ci
Mūţ;8wtg4i0ci
Naqādah;8xygew0ci;نقادة
Ash Shaykh Zuwayd;9cqgir0ci;الشيخ زويد
Bi’r al ‘Abd;9c6gfp0ci;بئر العبد|بير العبد
Al ‘Idwah;95qg9h0ci;العدوة
Sīwah;974fuw0ci;واحة سيوة
Al Quşayr;8yjgj80ci;القصير
Al Qaşşāşīn;9awgcp0ci;القصاصين|القصاصين الجديده
Ar Riyāḑ;9csg9z0ci;الرياض
Qifţ;8y8gf60ci;قفط
Yūsuf aṣ-Ṣiddīq;97mg8w0ci
Al Bayāḑīyah;8xageo0ch;البياضية
An Nūbārīyah;9b7g7j0ch;النوبارية
Munsha‘at Abū ‘Umar;9bvgcy0ch;منشأة أبو عمر
Burj al ‘Arab;9bug630ch;برج العرب
An Nāşirīyah;91lgao0ch
As Sibā‘īyah;8vzges0ch;السباعية
Mīt Abū Ghālib;9cxgc00ch;ميت أبو غالب
Jarājūs;8xvgf00ch;جراجوس|جراجوس‎
Timayy al Imdīd;9bygbl0ch;تمي الإمديد
Az Zaynīyah Qiblī;8xjges0ch;الزينية قبلي
An-Najaylah;9d9fxu0ch;النجيلة
Manshīyat al Qanāţir;99ugaf0ch;منشية القناطر
Al Ḩammām;9bpg5n0ch;الحمام
Abū Ţisht;8ykgd60ch;أبو طشت
Kafr Sa‘d;9d4gc00ch;كفر سعد
Al-Minyā al-Jadīdah;941g9l0ch
As Sallūm;9dnftw0ch;السلوم
Ar Radīsīyah Qiblī;8v7gfd0ch
Al Bawīţī;94rg470ch;البويطي|الباويطى
=EH
Laayoune;91ecvd0kl
Dakhla;8rscno0kk
Boujdour;8ylcrr0kj
El Marsa;91acuq0ki
=ER
Asmara;84mgw504n
Keren;85ugut04j
Himora;81qgpp04j
Massawa;85dgxn04h
Assab;7y5h6q04h
Mendefera;83dgvu04h
Barentu;83zgsf04h
=ES
Madrid;a2adlq82q;馬德里|马德里|マドリード市|마드리드|مدريد|میدرد|マドリード|Madril|Madrit|Madryd|Madryt|Mairil|Matrit|Madride|Madridi|Madrido|Madrids|Madrite|Magerit|Maidrid|Madridas|Makelika|Matritum|Ma-tet-li|Ma-daik-li|Madrid osh|Los Madriles|Мaдрид|Мадрид|मद्रिद|माद्री|มาดริด
Barcelona;a4ze2082p;巴塞罗那|巴塞隆納|巴薩隆拿|バルセロナ|바르셀로나|Barcino|Barselon|Baselona|Barcelone|Barcelono|Barceluna|Barcełona|Barkelone|Barselona|Barselono|Barseluna|Barslon-a|Barzelona|Parselona|Barcellona|Barcillona|Barseloana|Barselonae|Barseluona|Bartzelona|Bartzellona|Barcellonn-a|بارسلون|برشلونة|Барселон|Барселонæ|बार्सिलोना|बार्सेलोना|บาร์เซโลนา
Valencia;9znduy82o
Zaragoza;a5qdtk82n
Sevilla;9tudff82n
Málaga;9s0djq82n
Murcia;9vjdsv82n
Palma;9zxe3d82n
Las Palmas de Gran Canaria;942cp66wm
Alicante;9wjduo82m
Bilbao;aa6dnv82m
Córdoba;9v9dir82m
Valladolid;a5qdiw82m
Vigo;a7bd7s82m
Gijón;aaydga82m
Eixample;a4ze2082m
Gasteiz / Vitoria;a91dol82m
L'Hospitalet de Llobregat;a4we1u82m
Latina;a27dll82m
Carabanchel;a27dlo82m
A Coruña;aahd8o82m
Puente de Vallecas;a27dlu82m
Fuencarral;a2idls82m
Sant Martí;a52e2482l
Elche;9wadu282l
Granada;9tbdlz82l
Ciudad Lineal;a2ddlv82l
Fuencarral-El Pardo;a2idln82l
Oviedo;aagdfs82l
Terrassa;a5he1m82l
Badalona;a55e2982l
Cartagena;9ugdta82l
Jerez de la Frontera;9rxdey82l
Sabadell;a5ee1v82l
Santa Cruz de Tenerife;953cmv6wl
Pamplona;a8ydrg82l
Móstoles;a20dla82l
Almería;9scdp682l
Alcalá de Henares;a2gdmo82l
Fuenlabrada;a1wdlh82l
Leganés;a21dlk82l
Getafe;a1zdln82l
Donostia / San Sebastián;aabdqj82l
Sants-Montjuïc;a4xe1z82l
Burgos;a7mdlq82l
Santander;aardlg82l
Albacete;9ybdqu82l
Alcorcón;a23dle82l
Castelló de la Plana;a13dvv82l
Horta-Guinardó;a52e2182l
Nou Barris;a54e2282l
Hortaleza;a2fdlw82l
San Blas-Canillejas;a2cdly82l
Marbella;9rgdif82l
Tetuán de las Victorias;a2edlq82l
Logroño;a7zdp782l
La Laguna;955cmo6wl
Badajoz;9y0dcn82l
Madrid Centro;a2adlq82l
Arganzuela;a28dlq82l
Sarrià-Sant Gervasi;a50e1y82l
Salamanca;a2bdls82l
Chamberí;a2bdlq82l
Salamanca;a3tdga82l
Huelva;9tjdcq82l
Sant Andreu;a54e2382l
Tarragona;a48dzh82l
Usera;a27dlq82l
Lleida;a5mdxq82l
Chamartín;a2edls82l
Mataró;a5ee2s82k
Villaverde;a23dlq82k
Retiro;a29dls82k
León;a8cdgj82k
Telde;93rcp66wk
Dos Hermanas;9tkdfk82k
Gràcia;a50e2082k
Algeciras;9qddgv82k
Santa Coloma de Gramenet;a55e2582k
Torrejón de Ardoz;a2edmd82k
Cadiz;9rhdej82k
Moncloa-Aravaca;a2cdln82k
Alcobendas;a2ndlw82k
Parla;a1sdlj82k
Jaén;9uxdlh82k
Delicias;a5pdth82k
Ourense;a7mda682k
Moratalaz;a29dlv82k
Reus;a4cdz382k
Ciutat Vella;a4ye2182k
Orihuela;9vsdte82k
Barakaldo;aaadnp82k
Girona;a6me3u82k
Santiago de Compostela;a94d8982k
Lugo;a9hdb082k
Cáceres;9zodeb82k
Las Rozas de Madrid;a2hdl982k
San Fernando;9rcdes82k
Roquetas de Mar;9s4dor82k
Guadalajara;a2vdn882k
Lorca;9undra82k
Talavera de la Reina;a10dil82k
Centro;945cp56wk
El Puerto de Santa María;9rndep82k
Cornellà de Llobregat;a4ve1s82k
Toledo;a0qdku82k
Melilla;9o1dnu0ek
El Ejido;9s6do782k
Chiclana de la Frontera;9r6dey82k
Ceuta;9ppdh882k
Pontevedra;a7vd8082k
Algorta;aafdnn82k
Torrevieja;9vidu482k
Pozuelo de Alarcón;a2bdlf82k
Sant Boi de Llobregat;a4ue1o82k
Les Corts;a4ze1x82k
Coslada;a2adm482k
Getxo;aagdnn82k
Mijas;9rodj482k
Sant Cugat del Vallès;a57e1t82k
Avilés;aazdfk82k
Palencia;a6pdjg82k
Arona;942clo6wk
Torrent;9zkdup82k
Manresa;a5xe1282k
San Sebastián de los Reyes;a2odlx82k
Valdemoro;a1ndls82j
Ciudad Real;9ybdl382j
Vélez-Málaga;9s6dkm82j
Gandia;9y9dvi82j
Rubí;a59e1n82j
Santa Lucía;93jcou6wj
Fuengirola;9ridj682j
Benidorm;9x2dvn82j
Alcalá de Guadaira;9tqdfs82j
Valdefuentes;a2hdlw82j
Ponferrada;a87ddo82j
Rivas-Vaciamadrid;a21dm982j
Majadahonda;a2fdl982j
Sanlúcar de Barrameda;9s6ded82j
Campiña;9w6dnq82j
Estepona;9r7dhp82j
Ferrol;aasd9582j
Aluche;a27dlk82j
Vicálvaro;a28dm082j
Castelldefels;a4oe1h82j
Viladecans;a4re1l82j
Sagunto;a08dv982j
Vilanova i la Geltrú;a4ie0t82j
Torremolinos;9rqdji82j
Villa de Vallecas;a25dm082j
Valverde;a2idls82j
La Línea de la Concepción;9qhdh582j
Molina de Segura;9vpdsn82j
Paterna;9zqdus82j
El Prat de Llobregat;a4te1t82j
Collado-Villalba;a2wdkw82j
Pueblo Nuevo;a2bdlw82j
Grao de Murviedro;a04dvc82j
Irun;aaedr182j
Zamora;a5bdg282j
Alcoy;9xjdup82j
Arrecife;96gcud6wj
Granollers;a5le2d82j
Motril;9s3dm882j
Gamonal;a7odlt82j
Santutxu;aa5dnw82j
Mérida;9y4dee82j
Benalmádena;9rodjb82j
Cerdanyola del Vallès;a59e1y82j
la Nova Esquerra de l'Eixample;a4ye1z82j
Ávila;a2ydiy82j
Linares;9vudlw82j
Barri de Sant Andreu;a54e2382j
San Vicent del Raspeig;9woduj82j
Torrelavega;aafdkr82j
Elda;9wwdtt82j
Cuenca;a1bdq382j
Aranjuez;a17dm082j
Huesca;a72duv82j
San Bartolomé de Tirajana;93kcor6wj
Vallecas;a26dly82j
Boadilla del Monte;a28dl882j
Utrera;9tbdfy82j
Mollet del Vallès;a5ee2582j
Pinar del Rey;a2fdlv82j
Puertollano;9xhdkl82j
Calvià;9zxe2z82j
Segovia;a3rdkk82j
Sagrada Família;a50e2182j
Arganda;a1ydmg82j
Las Águilas;a26dlj82j
la Vila de Gràcia;a50e2082j
Vila-real;a0ydvq82j
Ventas;a2adlv82j
Ibiza;9y3dzz82j
Buenavista;a25dll82j
Numancia;a28dlu82j
Vista Alegre;a26dll82j
Sant Gervasi - Galvany;a50e1y82j
Santurtzi;aaddnl82j
Barri de les Corts;a4ze1x82j
Figueres;a7fe4882j
Esplugues de Llobregat;a4ye1t82j
Embajadores;a29dlq82j
Mislata;9zoduu82j
Gavà;a4re1k82j
Mairena del Aljarafe;9tqdf682j
Portugalete;aacdnm82j
el Raval;a4ye2182j
Pilar;a2gdlp82j
Antequera;9sudjc82j
San Diego;a27dlt82j
Lavapiés;a29dlq82j
Alzira;9yrdut82j
Peña Grande;a2fdlo82j
Mieres;aa5dfz82j
Llefià;a54e2682j
Dreta de l'Eixample;a50e2182j
Colmenar Viejo;a2ydlj82j
Pinto;a1sdlq82j
Barajas de Madrid;a2fdm282j
Puerta del Angel;a29dln82j
Adeje;944clj6wj
Palomeras Sureste;a27dlw82j
Sant Feliu de Llobregat;a4ye1p82j
Basauri;aa4dnz82j
Manacor;9zxe4x82j
Lucena;9txdjj82j
Guindalera;a2cdlt82i
Tres Cantos;a2sdlp82i
l'Antiga Esquerra de l'Eixample;a4ze2082i
La Orotava;94vcm46wi
Denia;9xwdwb82i
Alcantarilla;9vhdsm82i
Poble Sec;a4xe2082i
Sants;a4xe1y82i
Palomeras Bajas;a26dlu82i
Casco Histórico de Vallecas;a23dly82i
San Isidro;a28dln82i
Puerto Real;9rhdet82i
Plasencia;a17df382i
Blanes;a5re3r82i
Granadilla de Abona;944cly6wi
Sama;aaadg882i
Écija;9uadhw82i
Vic;a6he2982i
Canillas;a2edlw82i
San Fernando de Henares;a2adm782i
Miranda de Ebro;a8ldnt82i
Soria;a60dp582i
Igualada;a5ie0i82i
Errenteria;aabdqq82i
Rincón de la Victoria;9s0dk482i
Burjassot;9zrduv82i
Vilafranca del Penedès;a4ve0q82i
Ripollet;a5ae2082i
el Camp de l'Arpa del Clot;a51e2282i
Sant Antoni;a4ye2082i
Los Rosales;a24dlr82i
Ontinyent;9xudub82i
Narón;aaud9982i
Vilagarcía de Arousa;a8cd7o82i
Lloret de Mar;a5ue3x82i
Andújar;9vodkr82i
Don Benito;9y8dfq82i
Ronda;9s2dhn82i
Los Palacios y Villafranca;9t8dfk82i
Puerta Bonita;a26dlm82i
Lucero;a28dll82i
Marratxí;a02e3l82i
Sant Adrià de Besòs;a53e2682i
Los Realejos;94ucly6wi
Arucas;944cow6wi
Teruel;a23dsx82i
el Guinardó;a52e2182i
Tomelloso;9ysdnm82i
Llucmajor;9zpe4182i
Acacias;a28dlp82i
Maspalomas;934cop6wi
Prosperidad;a2cdlt82i
Realejo Alto;94uclx6wi
La Rinconada;9u5dfe82i
El Vendrell;a4ie0982i
Mirasierra;a2idlo82i
Puerto del Rosario;956cti6wi
Torre-Pacheco;9uudtd82i
Oleiros;aadd8w82i
Casco Histórico de Vicálvaro;a27dm382i
Entrevías;a26dlt82i
Villena;9xcdtl82i
Mazarrón;9ugdsd82i
Tortosa;a3ddxg82i
Alhaurín de la Torre;9rudjc82i
Yecla;9x9dsx82i
San Pedro Alcántara;9rddi582i
Cieza;9w8ds282i
Los Angeles;a24dlq82i
Cuatro Caminos;a2ddlq82i
Tudela;a6udrk82i
Azuqueca de Henares;a2pdmx82i
Úbeda;9vldmn82i
Burriana;a0tdvs82i
Águilas;9txdrm82i
el Camp d'en Grassot i Gràcia Nova;a51e2182i
el Poblenou;a50e2482i
Opañel;a27dlo82i
Villajoyosa;9wzdvd82i
Olot;a76e2x82i
Almendralejo;9xgde782i
Montcada i Reixac;a58e2282i
Aranda de Duero;a5rdlr82i
Pacífico;a28dls82i
Universidad;a2bdlp82i
Cambrils;a43dyy82i
Puerto de la Cruz;94ycm16wi
La Paz;a2gdlq82i
Sant Joan Despí;a4xe1q82i
Castro-Urdiales;aaidn282i
Galapagar;a2qdkw82i
Santa Pola;9w3duf82i
Fort Pienc;a4ze2282i
Abrantes;a26dln82i
Aldaia;9znduq82i
Hispanoamérica;a2edls82i
San Javier;9v1dto82i
Arroyomolinos;a1vdl482i
El Carmel;a52e2082i
Santa Eulària des Riu;9yae0982i
Carballo;aa1d7v82i
Arcos de la Frontera;9s3dfv82i
Leioa;aaddnp82i
Valdepeñas;9xodmm82i
Barberà del Vallès;a5ce1w82i
Hellín;9wzdra82i
San Andrés del Rabanedo;a8ddge82i
Rosas;a2bdm182i
Alcázar de San Juan;9zfdn382i
Coria del Río;9tldf782i
Salt;a6le3r82i
Manises;9zpduq82i
Valdezarza;a2fdlo82i
la Marina de Port;a4we1y82i
Camargo;aaldl882i
Puente-Genil;9tvdir82i
Oliver-Valdefierro;a5odtf82i
Culleredo;aa9d8p82i
Xirivella;9zndut82i
Atamaría;9ugdtr82i
Pinar de Chamartín;a2gdlt82i
Puerto del Carmen;96ccu16wi
Arteixo;aaad8d82i
Goya;a2bdlt82i
Xàtiva;9ybduk82i
Bellas Vistas;a2ddlp82i
Alaquàs;9zmduq82i
Ingenio;93kcp56wi
Inca;a0ce4382i
el Putxet i el Farró;a51e1y82i
la Verneda i la Pau;a52e2482i
San Roque;9qldh282i
Galdakao;aa3do482i
Totana;9uxdru82i
Redondela;a7gd8382i
Ciutadella;a14e6o82i
Maó;a0te7v82i
Canillejas;a2ddlz82i
Crevillente;9w9dtr82i
Agüimes;93jcp36wi
Sueca;9ywdv582i
Rota;9rqdec82i
Portazgo;a27dlv82i
Simancas;a2cdlx82i
La Sagrera;a52e2382i
Camas;9twdf982i
Carmona;9u3dgb82i
Delicias;a28dlr82i
Oliva;9y4dvo82i
Sant Pere de Ribes;a4me0x82i
Vinaròs;a2fdxc82i
Durango;a9xdop82i
Javea;9xqdwh82i
Sant Vicenç dels Horts;a4ze1l82i
El Campello;9wrduw82i
Martorell;a57e1d82i
Morón de la Frontera;9t4dgv82i
Almuñécar;9s1dlr82i
Sitges;a4ke1182i
Villaviciosa de Odón;a24dl682i
Ribeira;a8qd8k82i
Aravaca;a2edli82i
Sestao;aabdnn82i
Eibar;a9ydp582i
Premià de Mar;a59e2l82i
Algemesí;9yvdus82i
El Viso;a2ddls82i
Rios Rosas;a2cdlq82i
Novelda;9wmdtv82i
Santa Uxía de Ribeira;a87d7182i
Catarroja;9zgduw82i
el Clot;a51e2382i
Salou;a44dz682i
Pineda de Mar;a5ne3h82i
Benicarló;a2adx782i
Villarrobledo;9z3dos82i
Horta;a54e2082i
Moscardó;a27dlp82i
Valdeacederas;a2fdlq82i
Níjar;9spdpv82i
Lebrija;9skdf482i
Caravaca;9vvdqu82i
Sant Andreu de la Barca;a55e1h82i
Sant Martí de Provençals;a52e2482i
la Prosperitat;a54e2282i
Marroquina;a29dlw82i
Marín;a7rd7u82i
Lepe;9thdc082i
La Oliva;95hctb6wi
Almassora;a0zdvu82i
Almozara;a5qdti82i
La Bonanova;a51e1x82i
Villanueva de la Serena;9yadfw82i
Almonte;9tiddw82i
Cangas do Morrazo;a7ed7m82i
Berruguete;a2edlq82i
Jumilla;9wwdsc82i
el Baix Guinardó;a51e2182i
Vilapicina i la Torre Llobeta;a53e2182i
Quart de Poblet;9zodus82i
Quintana;a2cdlv82i
Arcos;a2adly82i
Palos de Moguer;a28dlr82i
Valls;a4pdzh82i
Santa Perpètua de Mogoda;a5de2282i
Argüelles;a2bdlo82i
Onda;a10dva82i
Iturrama;a8xdre82i
Sarrià;a50e1w82i
Calahorra;a7jdqj82i
Martos;9usdkz82i
Trafalgar;a2bdlq82i
Porta;a53e2282i
Almansa;9xzdsy82i
Nueva España;a2edls82i
Barri Gòtic;a4ye2282i
Adra;9s3dnm82i
Sants - Badal;a4xe1x82i
Candelaria;94rcmj6wi
Calafell;a4ge0d82i
Erandio;aaadnr82i
Alboraya;9zqdv182i
Gáldar;947coj6wi
Arapiles;a2bdlp82i
Cullera;9ytdvb82i
Ibi;9xbduf82i
Molins de Rei;a52e1m82i
la Maternitat i Sant Ramon;a4ye1w82i
Castellar del Vallès;a5me1s82i
Icod de los Vinos;94tcll6wi
Santa Eugenia;a26dlz82i
Altea;9x8dvv82i
San Pedro del Pinatar;9v4dtt82i
San Fermín;a25dlr82h
Tacoronte;954cmf6wh
Paiporta;9zjduu82h
Los Barrios;9qidgr82h
Palacio;a2adlp82h
Baza;9u5dob82h
El Masnou;a58e2g82h
Calp;9xcdw482h
Alhaurín el Grande;9rsdiz82h
Olesa de Montserrat;a5ee1982h
el Besòs i el Maresme;a51e2682h
Cambre;aa9d8t82h
Ponteareas;a75d8e82h
Orcasitas;a25dlp82h
Almenara;a2fdlr82h
Montilla;9ufdj482h
Llíria;a03duc82h
Gaztambide;a2bdlp82h
Sant Pere, Santa Caterina i La Ribera;a4ye2282h
Vícar;9sbdoo82h
Almendrales;a26dlq82h
Alcalá la Real;9u2dl482h
Tomares;9ttdf782h
Comillas;a27dlp82h
Estrella;a29dlt82h
Zarautz;aa8dpz82h
Priego de Córdoba;9u0dkc82h
Barbate;9qjdfk82h
Primer Ensanche;a8xdrf82h
Segundo Ensanche;a8xdrg82h
Mutxamel;9wqdur82h
Mejorada del Campo;a27dmc82h
Conil de la Frontera;9qsdf382h
Imperial;a29dlo82h
Palafrugell;a6ge4s82h
Ciempozuelos;a1kdly82h
Navas;a52e2382h
Arrasate / Mondragón;a9mdp382h
Carrizal;93jcp76wh
Ribarroja del Turia;9zvduf82h
Torre del Mar;9s2dkn82h
Sant Feliu de Guíxols;a62e4f82h
Sant Joan d'Alacant;9wodus82h
Costillares;a2gdlt82h
Moncada;9zvduw82h
Coín;9rudis82h
Esparreguera;a5ee1782h
Sant Antoni de Portmany;9yadzm82h
Nerja;9s3dl982h
Torrelodones;a2qdl382h
Laguna de Duero;a5idiw82h
Carcaixent;9yodur82h
Mogán;93gcob6wh
Navalcarnero;a1xdkv82h
Loja;9t9dkh82h
Medina del Campo;a4rdid82h
Ibiza;a2adlt82h
Pilar de la Horadada;9v7dtt82h
Armilla;9t6dlx82h
Cabra;9u3djo82h
Isla Cristina;9tcdbo82h
Butarque;a22dls82h
Cártama;9rzdj582h
Illescas;a1gdlb82h
Amposta;a33dxm82h
Palma del Río;9uqdhc82h
Las Torres de Cotillas;9vndsk82h
l'Alfàs del Pi;9x6dvq82h
La Felguera;aabdg782h
Lista;a2bdls82h
Concepción;a2cdlv82h
Fuente del Berro;a2adlu82h
Baena;9uidk082h
Ayamonte;9tddbf82h
Vila-seca;a47dz782h
Alfafar;9ziduy82h
Pájara;94rcst6wh
Maracena;9tddlx82h
San Juan de Aznalfarache;9tsdf882h
Vilassar de Mar;a5be2n82h
Bétera;9zzduq82h
A Estrada;a8ld8f82h
Manlleu;a6oe2c82h
Castillejos;a2edlr82h
Almoradí;9vvdtt82h
Guía de Isora;94dcle6wh
Mairena del Alcor;9ttdg182h
Rojales;9vtdtz82h
La Pobla de Vallbona;a00duh82h
Provenals del Poblenou;a51e2482h
Requena;9zpdsy82h
Hernani;aa7dqi82h
Algete;a2sdma82h
Aspe;9wjdtv82h
Los Llanos de Aridane;95mci86wh
Lalín;a8id9h82h
Barañáin;a8xdrc82h
Calatayud;a4vdrg82h
Montecanal;a5ndte82h
Natahoyo;aaydg882h
Alhama de Murcia;9v5ds182h
Vallehermoso;a2cdlp82h
Tías;96gcu36wh
Alcúdia;a0pe4o82h
Picassent;9zcduq82h
Marchena;9tpdgy82h
Chopera;a27dlq82h
Campamento;a27dlg82h
Alameda de Osuna;a2ddm182h
Banyoles;a70e3p82h
Moguer;9tkdd082h
El Arahal;9tidgl82h
Monforte de Lemos;a84db582h
San Isidro;940cm06wh
Legazpi;a27dlr82h
Almagro;a2bdlr82h
Teguise;96qcuc6wh
Chipiona;9s2de482h
Lora del Río;9umdgn82h
Roses;a7ee4u82h
El Viso del Alcor;9tvdg482h
Manzanares;9ycdmn82h
Benavente;a6odg882h
El Goloso;a2ndlq82h
Puçol;a02dv682h
Moaña;a7gd7q82h
Zubia;9t4dm282h
Silla;9zcduv82h
Burlata;a8zdri82h
Boiro;a8hd7c82h
Adelfas;a28dlt82h
Bailén;9vudli82h
Calella;a5le3d82h
Guadix;9tmdna82h
Bormujos;9ttdf582h
Daimiel;9yjdlz82h
San Bartolomé;96kcu76wh
Ciudad Jardín;a2ddlt82h
La Bordeta;a4xe1y82h
Malgrat de Mar;a5pe3m82h
Sant Quirze del Vallès;a5de1s82h
San Pascual;a2cdlv82h
Laudio / Llodio;a9udns82h
Santa Brígida;93vcoy6wh
Felanitx;9zne4r82h
San Martín de la Vega;a1pdm382h
Justicia;a2adlq82h
Archena;9vwdse82h
Tavernes de la Valldigna;9yjdv982h
Tarifa;9q1dgf82h
El Astillero;aakdle82h
Humanes de Madrid;a1tdld82h
Benicàssim;a19dw782h
L'Eliana;9zxduj82h
Tolosa;a9tdq882h
Nigrán;a72d7j82h
Son Rapinya;9zze3a82h
Aljaraque;9tjdci82h
Callosa de Segura;9vwdtk82h
Cartaya;9tkdc582h
Cármenes;a28dlm82h
Palamós;a69e4p82h
San Lorenzo de El Escorial;a2rdkh82h
Pradolongo;a26dlp82h
la Nucia;9x9dvn82h
Osuna;9tgdhu82h
Amorebieta;aa2dof82h
Oria;aa6dqe82h
Teo;a8wd8982h
Lasarte;aa7dqe82h
Arroyo de la Miel;9rodje82h
La Unión;9uidtk82h
Utebo;a5vdt882h
Pozoblanco;9wmdij82h
Güimar;94ncmf6wh
Huercal-Overa;9tvdqm82h
Parets del Vallès;a5he2782h
Porriño;a74d8282h
Valdebernardo;a28dly82h
Rejas;a2ddm382h
Fontarrón;a28dlv82h
Ejea de los Caballeros;a71dsu82h
Media Legua;a29dlu82h
La Pineda;a44dza82h
Vilaseca;a6ue2a82h
San Cristobal;a22dlr82h
Tui;a6td8082h
Pollença;a0se4e82h
Navalmoral de la Mata;a0tdgm82h
Sanxenxo;a7sd7j82h
Ermitagaña;a8xdre82h
Berga;a6ye1582h
Playa del Ingles;934coq6wh
Castilleja de la Cuesta;9tvdf782h
Albolote;9tfdlu82h
Castilla;a2fdls82h
Monzón;a6fdwj82h
Poio;a7xd7v82h
Villaquilambre;a8hdgk82h
Ubrique;9rwdgv82h
Mula;9vodrv82h
Bermeo;aamdog82h
Barbastro;a6sdwd82h
Castellana;a2bdls82h
Torrox;9s4dl182h
Caldes de Montbui;a5ne2182h
Vinateros;a29dlw82h
Sant Celoni;a5te2x82h
Balaguer;a63dy982h
Villanueva de la Cañada;a2ddkw82h
Cardedeu;a5oe2k82h
Tàrrega;a5pdz682h
Las Tres Torres;a50e1x82h
Hondarribia;aahdr082h
Zafra;9wrde682h
Alcañiz;a41dvn82h
Las Cabezas de San Juan;9sqdfi82h
Las Gabias;9t6dlt82h
Ciudad Universitaria;a2edlm82h
Guardamar del Segura;9vtdu682h
La Algaba;9u2dfb82h
Yaiza;96gctr6wh
Baeza;9vjdmd82h
Ermua;a9zdp282h
Gernika-Lumo;aacdok82h
Viveiro;abadax82h
Montijo;9y3ddm82h
Seseña;a1edlq82h
Mungia;aafdo382h
San Miguel De Abona;942clu6wh
La Roda;9yxdq082h
El Grao;a11dw182h
Canovelles;a5me2c82h
Pasaia;aaddqn82h
Corvera de Asturias;aaydfn82h
Hostafrancs;a4ye1y82h
Barrio de Peral;9ujdt982h
El Escorial;a2qdkj82h
Sant Just Desvern;a4ye1r82h
Los Alcázares;9uudtn82h
Santa Cruz de la Palma;95ocio6wh
Tarancón;a15dnn82h
les Roquetes;a55e2282h
Vallcarca;a51e1y82h
el Turó de la Peira;a53e2182h
Carlet;9yzduk82h
La Solana;9y6dn082h
Sant Carles de la Ràpita;a2udxo82h
Montornès del Vallès;a5ee2b82h
Recoletos;a2adlr82h
Albal;9zgduu82h
Apostol Santiago;a2gdlu82h
Santafé;9tbdlo82h
Atarfe;9tedlr82h
Piera;a5ce0v82h
Tordera;a5ue3k82h
Santomera;9vqdt382h
Miguelturra;9y8dl782h
Benetússer;9ziduw82h
Arenys de Mar;a5ie3382h
La Carolina;9wcdly82h
Torredembarra;a4bdzw82h
la Barceloneta;a4ye2382h
Massamagrell;9zxdv382h
la Guineueta;a54e2182h
Sant Agustí;9zve3882h
Niño Jesús;a29dlt82h
Villanueva del Pardillo;a2hdl082h
Piovera;a2edlw82h
Berja;9sddnt82h
Cehegín;9vtdr082h
Béjar;a27dg082h
Campo de Criptana;9zgdnc82h
=ET
Addis Ababa;7n2gvn02q;Tungga|Finfinne|Addisaaba|Adisabeba|Adis Ababa|Adis Abeba|Adis-Abebo|Adys-Abeba|Atis Apapa|Addis Abeba|Addis Abaeba|Addis Abbaba|Addis-Abebae|Addisz-Abeba|Neanthopolis|Antis Ampempa|阿迪斯阿貝巴|아디스아바바|アディスアベバ|Адис Абеба|Адыс-Абеба|آدیس آبابا|أديس أبابا|अदिस अबाबा
Jijiga;7nzh6w02n
Gonder;7x0gs302n
Mek'ele;7zigxo02n
Nazrēt;7lrgx302n
Warder;7hdhdy02n
Awasa;7hmguw02n
Bahir Dar;7u7grv02m
Dire Dawa;7onh4b02m
Dessie;7sxgy302m
Jimma;7jbgqb02m
Shashamane;7i0gv802l
Bishoftu;7mbgwa02l
Sodo;7h2gsw02l
Arba Minch;7ergsb02l
Hosa’ina;7izgt502l
Dīla;7fugug02l
Harar;7nvh5002l
Nek’emtē;7n8gpj02l
Ārabī;7poh6102l
Debre Birhan;7owgxt02l
Debre Mark’os;7qrgst02l
Āsela;7k3gwp02l
Kombolcha;7ssgye02k
Debre Tabor;7uxgtm02k
Ādīgrat;81ogxm02k
Weldiya;7uvgxz02k
Sebeta;7msgva02k
Burayu;7n4gve02k
Inda Silasē;816guc02k
Hāgere Hiywet;7mygt502k
Arsi Negele;7ifgvf02k
Gambēla;7kxgk202k
Aksum;818gvk02k
Ziway;7k1gvk02k
Butajīra;7kkgul02k
Adwa;81cgw202k
Gununo;7h8gsl02k
Āreka;7hngsq02k
Yirga ‘Alem;7grguq02k
Waliso;7lpgth02k
Welk’īt’ē;7l0gsy02k
Mek’ī;7kngvu02k
Negēlē;7csgxy02j
K’olīto;7icgts02j
Alamata;7wigxw02j
Ciro;7jrgu702j
Āsosa;7pzgjx02j
Gode;7ejh8z02j
Tēpī;7i0gmh02j
Goba;7higz202j
Duramē;7i3gt802j
Bodītī;7hdgt702j
Gimbi;7nhgnj02j
Wik’ro;80cgy002j
‘Alemaya;7o3h4p02j
Mīzan Teferī;7hggmv02j
Mojo;7lvgwo02j
Dembī Dolo;7lpgko02j
Felege Neway;7figqg02j
Metu;7l2gmu02j
Wendo;7gcguq02j
Mot’a;7ssgt702j
Finote Selam;7rqgrj02j
Hagere Maryam;7dngu802j
Fichē;7p8gvl02j
Kobo;7pvgyp02j
Bonga;7i9goo02j
Dangila;7tbgqb02j
Jinka;7dpgpt02j
Āgaro;7jtgpt02j
Chagni;7sggpe02j
Sek’ot’a;7x3gwf02j
Samara;7urh1x02j
Maych’ew;7xjgxu02j
Ch’iko;7gaguh02j
Genet;7n7guy02j
Hadero;7i0gsn02j
Werota;7v4gsq02j
Kibre Mengist;7ecgwa02j
Injibara;7skgqk02j
Shakiso;7e0gw302j
Degeh Bur;7kuh9002j
Debark’;7ykgta02j
Burē;7rqgqz02j
Kebri Dahar;7gqhb002j
Nefas Mewch’a;7ulguv02j
Kemisē;7rsgyr02j
Dodola;7hegwu02j
Ādēt;7tbgs402j
Āsasa;7hqgww02j
Mer’āwī;7tqgr902j
Shonē;7htgtf02i
Dolo;7zigy402i
Gebre Guracha;7p8guo02i
Yirga Ch’efē;7f5gu402i
Bedelē;7ligoz02i
Robit;7prgyu02i
Asaita;7u5h3402i
Nejo;7oegmm02i
T’īs Isat;7twgse02i
Lalibela;7vfgwh02i
Shinshicho;7i1gsy02i
Lasoano;7fehe302i
Bedēsa;7mqh1a02i
Batī;7t3gz602i
Gīnch’ī;7n3gtz02i
Qorof;7gahgz02i
Bek’ojī;7ixgx102i
Babīlē;7nnh5l02i
Bichena;7r1gu402i
Āwash;7mzgzl02i
Mersa;7ufgy502i
Yabēlo;7bkgts02i
Ādīs Zemen;7vogsy02i
Dubti;7ulh2402i
Sheraro;820gtd02i
Yamarugley;7gxhg002i
Korem;7wrgxs02i
Ghinnir;7huh1302i
Gīdolē;7dpgrt02i
Badessa;7h4gte02i
Logīya;7ulh1u02i
Gelemso;7mih0k02i
Ābīy Ādī;7zogw902i
Bako;7e2gpl02i
Fadhigaradle;7f6hdu02i
Neefkuceliye;7g7he302i
Āykel;7wvgqz02i
Bale Hawassa;7h8gs902i
Leku;7h3gus02i
Welench’ītī;7m3gxj02i
Bale Robe;7hsgz402i
Shambu;7olgr202i
Īteya;7klgwz02i
Dayē;7pggub02i
Āsbe Teferī;7n9h1j02i
Dēra;7lcgvx02i
Guder;7mxgsw02i
Insēno;7kfguv02i
Abomsa;7pqgz202i
Tulu Bolo;7m3gu602i
Dembech’a;7rbgs402i
Komtikas;7hcgms02i
Mehoni;7xkgy402i
Wonji;7lhgwy02i
Mendī;7p8gli02i
Hāyk’;7tegy802i
Dabat;7y2gsw02i
Gutin;7olgps02i
Wacha;7hvgni02i
Tikil Dingay;7y2gqw02i
Kofelē;7hngvq02i
Gasuba;7gogsd02i
Mī’ēso;7nnh1802i
Mertule Maryam;7s3gub02i
Ch’ench’a;7fdgsd02i
Huruta;7kngxb02i
Amba Giorgis;7xhgsi02i
K’ola Diba;7wigro02i
May Cadera;813gpl02i
Ibnat;7vpgtp02i
Deder;7nvh3402i
Filakit;7ufgvs02i
Gurbetē;7tkgqn02i
Waka;7hngr902i
Bambesi;7p3gkh02i
Āt’aye;7qrgyy02i
Felana;7oah5602i
Maksenyit;7wegsb02i
Metemma;7xzgog02i
Sendafa;7nfgwe02i
Chinahsen;7ofh6d02i
Idaga Hamus;81fgxw02i
Worabe;7jtgu302i
Abala;81jgqs02i
Dimtu;7h9gtx02i
Raqo;7fuhfd02i
Funyan Bīra;7o4h5k02i
Mehal Mēda;7qngy602i
Sagurē;7jjgwr02i
Gimja Bēt Maryam;7s5gqg02i
Ginja Bet;7s5gqh02i
Bedēsa;7gzgts02i
Harbu;7scgyj02i
Ābderafī;805gp902i
Tarch’a Sodo;7hvgr902i
Hīrna;7nmh2602i
Mambuk;7tcgom02i
Gedeb;7olh7y02i
Waal;7h5hge02i
Shendi;7rkgqn02i
‘Alem T’ēna;7l2gw702h
‘Alem Ketema;7q0gwf02h
Metahāra;7mqgyw02h
Gēdo;7n2gs102h
Gobēsa;7j6gxq02h
Wegeda;7t6guk02h
Kele;7ewgtn02h
Ara Ali;7elh1z02h
Arerti;80rh0z02h
El Bahay;7fnhec02h
Gīmbīcho;7ipgsj02h
Kachīsī;7oogt302h
Sheno;7nxgx502h
Wenago;7fkgub02h
Sifra;7u8gz602h
Mena;7fugyp02h
Digih Habar Es;7fwhfq02h
Hartīshēk;7ngh8f02h
Adebaye;81ggq402h
Damboya;7ifgtf02h
Intich’o;81ogwr02h
Āyana;7pggpq02h
Mīlē;7tqh1802h
Indabaguna;80rgu202h
Dibate;7rlgom02h
Sīrē;7l4gxo02h
Kuyera;7iagvd02h
Chelenko;7o4h3g02h
Lumamē;7qhgtd02h
Ādīs ‘Alem;7n3guo02h
Suntu;7kigqn02h
Robīt;7vegy302h
Were Īlu;7rfgxk02h
Kercha;7e2gup02h
Tīlīlī;7s5gqu02h
Ādīs K’idamē;7ssgqg02h
Golwayn;7g3hfb02h
Kahandhale;7dzhet02h
Tebela;7gngsx02h
Wenjī;7lhgx402h
Shanto;7higt602h
=FI
Helsinki;bl5fta7rn
Espoo;bl9fsh7rm
Tampere;boufq37rm
Vantaa;blhftk7rm
Oulu;bylfur7rl
Turku;blxflv7rl
East Helsinki;bl9fto7rl
Jyväskylä;bqwfvg7rl
Kuopio;bspg0w7rk
Lahti;bnefva7rk
Pori;bosfkj7rk
Joensuu;brwg6o7rk
Kouvola;bn3fy67rk
Lappeenranta;bnmg2b7rj
Vaasa;btafk27rj
Hämeenlinna;bngfry7rj
Seinäjoki;bsffnf7rj
Rovaniemi;c2qfvd7rj
Porvoo;blrfvb7rj
Mikkeli;bpdfzr7rj
Salo;blqfo97rj
Kotka;blzfyv7rj
Kokkola;bvcfo97rj
Järvenpää;blzftp7rj
Lohja;bldfqv7rj
Nurmijärvi;blyfsx7rj
Hyvinge;bmfft37rj
Tuusula;blsftj7rj
Kirkkonummi;bl0frw7ri
Vuosaari;bl9ftu7ri
Rauma;bntfjr7ri
Kerava;blsftq7ri
Kaarina;bltfm57ri
Nokia;borfpa7ri
Kajaani;bwfg117ri
Mellunkylä;blbftq7ri
Kangasala;boqfqw7ri
Ylöjärvi;bp0fpk7ri
Savonlinna;bpvg487ri
Vartiokylä;blaftq7ri
Vihti;blufrk7ri
Riihimäki;bmqfsu7ri
Leppävaara;bl9fsx7ri
Haaga;blaft67ri
Kallio;bl6ftb7ri
Raseborg;bkmfp47ri
Kaarela;bldft47ri
Herttoniemi;bl7ftk7ri
Raisio;bm1fll7ri
Hervanta;bopfq97ri
Lempäälä;bocfpz7ri
Imatra;bnxg3v7ri
Sastamala;boffnn7ri
Oulunkylä;blbftc7ri
Raahe;bxofs07rh
Sibbo;blqfu77rh
Karhula;bm4fyt7rh
Hollola;bngfuu7rh
Matinkylä;bl4fsq7rh
Laajasalo;bl6ftj7rh
Siilinjärvi;bt8g0v7rh
Pirkkala;boqfpn7rh
Klaukkala;blqfsr7rh
Mäntsälä;bmffuc7rh
Tornio;c0xfr37rh
Valkeakoski;bo6fqr7rh
Lieto;bm3fme7rh
Hollola;bnlfun7rh
Iisalmi;bukfzj7rh
Naantali;blzfl67rh
Lauttasaari;bl4ft37rh
Suutarila;blgfti7rh
Jakobstad;buvfn27rh
Varkaus;br4g1f7rh
Kurikka;bryfma7rh
Kemi;c0mfs87rh
Hamina;bm9fzk7rh
Jämsä;bpuftz7rh
Laukaa;brdfw37rh
Myyrmäki;blfft17rh
Pitäjänmäki;blaft27rh
Heinola;bo1fwc7rh
Espoonlahti;bl3fsh7rh
Äänekoski;brwfvh7rh
Munkkiniemi;bl8ft47rh
Haukipudas;bz2fuf7rh
Pieksämäki;br2fzd7rh
Korsholm;btbfk87rh
Olari;bl5fsp7rh
Anjala;bmkfyj7rh
Vammala;bodfnm7rh
Suurmetsä;blfftl7rh
Forssa;bmxfpm7rh
Pohjois-Hervanta;bopfq97rh
Janakkala;bn6fsc7rh
Orimattila;bmwfvh7rh
Väståboland;blifly7rh
Ylivieska;bw0fs77rh
Taka-Töölö;bl6ft87rh
Loimaa;bn1fo27rh
Viikki;blafti7rh
Kontiolahti;bscg6x7rh
Kauhava;btafo37rh
=FJ
Nasinu;5jtrnv9bk
Suva;5jmrnn9bk
Lautoka;5l2rkx9bj
Nadi;5kkrku9bj
Labasa;5odrq89bi
Lami;5jprnl9bi
Sigatoka;5jmrl39bh
=FK
Stanley;2yf9fa73d
=FM
Palikir;7h8q3c9of
=FO
Tórshavn;bq9dd76yg
=FR
Paris;appe2j89p;パリ|巴黎|파리|Pari|Baris|Bariz|Pa-ri|Paras|Parij|Pariz|Parys|Paryz|Bahliz|Lutece|Paarys|Palika|Paname|Paries|Parigi|Pariis|Parijs|Parisi|Parixe|Parize|Parizh|Parizo|Parizs|Paryzh|Paräis|Baariis|Lutetia|Paraeis|Parigge|Pariggi|Pariisi|Pariizu|Parighji|Paryzius|Pantruche|Parizh osh|Ville-Lumiere|Lutetia Parisorum|پیرس|باريس|Париж|Париз|पॅरिस|ปารีส
Marseille;aaaeay89o
Lyon;ah3e9h89n
Toulouse;ab4e0089n
Nice;abeeg789m
Nantes;al6drp89m
Marne La Vallée;apoe3c89m
Strasbourg;aoyehj89m
Bordeaux;aekdue89m
Montpellier;ab5e6s89m
Lille;aune4i89m
Rennes;anndrd89l
Reims;aqve7789l
Le Havre;arhdwb89l
Cergy-Pontoise;aq8e1s89l
Saint-Étienne;ag7e8789l
Toulon;a9sech89l
Angers;alvduh89l
Dijon;alfe9x89l
Grenoble;afiebv89l
Nîmes;abse8489l
Clermont-Ferrand;ah6e4l89l
Aix-en-Provence;aaxeb589l
Saint-Quentin-en-Yvelines;aphe1m89l
Brest;aofdjj89l
Le Mans;ancdwk89l
Amiens;asme2e89l
Tours;alndxy89l
Limoges;ahbdzh89l
Villeurbanne;ah5e9k89k
Besançon;al9ecq89k
Metz;aqged589k
Orléans;an2e1a89k
Rouen;arcdz289k
Mulhouse;amnegd89k
Montreuil;apqe2s89k
Perpignan;a8me4289k
Caen;aqndv089k
Boulogne-Billancourt;apoe2889k
Nancy;ap8ed689k
Argenteuil;apze2989k
Roubaix;aute4t89k
Tourcoing;auwe4s89k
Saint-Denis;apye2j89k
Avignon;ac3e9d89k
Asnières-sur-Seine;apwe2c89k
Nanterre;apte2589k
Dunkirk;avre2m89k
Poitiers;ajedwy89k
Versailles;apke1x89k
Courbevoie;apue2a89k
Créteil;apje2v89k
Pau;aabdv089k
Colombes;apwe2989k
Vitry-sur-Seine;apje2o89k
Aulnay-sous-Bois;apye2x89k
La Rochelle;ai8dst89k
Champigny-sur-Marne;apme2x89k
Rueil-Malmaison;apse2389k
Antibes;ab2efs89k
Gare;apne2m89k
Saint-Maur-des-Fossés;apje2x89k
Cannes;aazefh89j
Calais;avje1689j
Béziers;aaee4x89j
Aubervilliers;apwe2m89j
Mérignac;aekdu789j
Bourges;akse2o89j
Saint-Nazaire;alcdpu89j
Colmar;ankegg89j
Maison Blanche;apne2j89j
Valence;aete9n89j
Quimper;ancdkm89j
Drancy;apxe2t89j
Noisy-le-Grand;appe3489j
Villeneuve-d'Ascq;aume4t89j
La Seyne-sur-Mer;a9qecc89j
Levallois-Perret;apte2d89j
Picpus;apoe2o89j
Chambéry;aglecg89j
Issy-les-Moulineaux;apme2c89j
Neuilly-sur-Seine;apse2b89j
Troyes;ao6e7d89j
Juan-les-Pins;ab1efr89j
Antony;apfe2e89j
La Roche-sur-Yon;ajnds189j
Lorient;amndmn89j
Sarcelles;aq4e2m89j
Pessac;aehdu989j
Ivry-sur-Seine;apme2m89j
Évreux;aq6dz789j
Vénissieux;agye9l89j
Cergy;aq8e1s89j
Clichy;apue2f89j
Saint-Quentin;ashe5589j
Niort;aioduq89j
Belfort;amcef189j
Ajaccio;a6geka89j
Vannes;amedoc89j
Sartrouville;apze2389j
Maisons-Alfort;aple2s89j
Meaux;aq0e4089j
Blois;am7dzp89j
Brive-la-Gaillarde;afge0989j
Arles;abce8v89j
Beauvais;arbe1s89j
Châteauroux;ak1e0p89j
Cholet;akqdtk89j
Fréjus;aaneeq89j
Pantin;apte2p89j
Saint-Brieuc;aosdob89j
Montauban;acadzr89j
Charleville-Mézières;as9e9489j
Albi;ac1e1z89j
Tarbes;aa3dw789j
Fontenay-sous-Bois;appe2w89j
Évry;ap3e2s89j
Clamart;apke2b89j
Châlons-en-Champagne;apze8589j
Narbonne;a9ye4c89j
Saint-Malo;ap5dqf89j
Laval;anjdtv89j
Hyères;a9sed189j
Carcassonne;aa2e2j89j
Angoulême;agtdwf89j
Annecy;ahjed189j
Bondy;apue2x89j
Le Blanc-Mesnil;apye2u89j
Villejuif;apje2k89j
Grasse;abaef989j
Sevran;apye3189j
Castres;ab5e2889j
Chalon-sur-Saône;ajye9h89j
Arras;atpe3q89j
Boulogne-sur-Mer;auwe0h89j
Chelles;apse3789j
Cagnes-sur-Mer;abaefv89j
Saint-Herblain;al5drf89j
Douai;atxe4k89j
Épinay-sur-Seine;apze2g89j
Vincennes;appe2s89j
Roquette;apqe2m89j
Martigues;aalea289j
Bourg-en-Bresse;aideaj89j
Bobigny;apve2t89j
Montluçon;aiqe3889j
Aubagne;aa9ebh89j
Valenciennes;atwe5t89j
Suresnes;apre2789j
Meudon;aple2889j
Bayonne;aatdrx89j
Istres;aave9v89j
Thionville;ar4ed489j
Mantes-la-Jolie;aq3e0s89j
Compiègne;arae3v89j
Nevers;akje4s89j
Chartres;aole0589j
Le Cannet;ab2efi89j
Wattrelos;auue4y89j
Caluire-et-Cuire;ah7e9h89j
Gap;adsecw89j
Talence;aehdud89j
Alès;acke7c89j
Gennevilliers;apxe2e89j
Saint-Priest;agye9q89i
Rosny-sous-Bois;apre2y89i
Auxerre;amse5x89i
Salon-de-Provence;ab8ea589i
Saint-Germain-en-Laye;apue1t89i
Bastia;a8mem989i
Sète;aake6989i
Anglet;aatdrs89i
Puteaux;apse2889i
Corbeil-Essonnes;ap1e2x89i
Garges-lès-Gonesse;aq1e2o89i
Roanne;ahwe7b89i
Savigny-sur-Orge;ap8e2j89i
Livry-Gargan;apwe3289i
Épinal;anuedx89i
Saint-Ouen;apve2h89i
Rezé;al3drn89i
Montigny-le-Bretonneux;aphe1n89i
Noisy-le-Sec;apte2u89i
Melun;aove3d89i
Bagneux;apke2f89i
Massy;apde2c89i
Haguenau;apmehn89i
Montrouge;apme2f89i
Marcq-en-Barœul;aure4k89i
Vitrolles;aaqeal89i
Draguignan;aayedy89i
Lens;au3e3v89i
Gagny;apse3189i
Saint-Chamond;agce8j89i
Bron;ah2e9n89i
Vaulx-en-Velin;ah7e9p89i
Joué-lès-Tours;aljdxv89i
Alfortville;aple2q89i
La Courneuve;apxe2o89i
Châtellerault;ak2dxj89i
Villepinte;aq0e3189i
Cambrai;atee4z89i
Poissy;apxe1p89i
Conflans-Sainte-Honorine;aq4e1u89i
Sainte-Marguerite;appe2n89i
Bel-Air;apoe2o89i
Mont-de-Marsan;abxdum89i
Plaisir;apme1f89i
Marignane;aameah89i
Dieppe;asodz089i
Montélimar;adre9789i
Tremblay-en-France;apze3589i
Choisy-le-Roi;aphe2q89i
Saint-Martin-d'Hères;afiec089i
Mâcon;aine9f89i
Romans-sur-Isère;af5ea389i
Saint-Raphaël;aameet89i
Pontault-Combault;apke3989i
Six-Fours-les-Plages;a9pec689i
Périgueux;afjdxz89i
Aurillac;aete2s89i
Neuilly-sur-Marne;appe3389i
Liévin;au2e3q89i
Agen;acsdxq89i
Franconville;aq2e2789i
Sainte-Geneviève-des-Bois;ap5e2g89i
Maubeuge;atoe7189i
Bagnolet;apre2q89i
Saumur;aladvs89i
Biarritz;aasdro89i
La Ciotat;a9xebk89i
Échirolles;affebv89i
Villefranche-sur-Saône;ahre9489i
Châtenay-Malabry;aphe2b89i
Stains;apze2m89i
Châtillon;apke2d89i
Vienne;aghe9j89i
Schiltigheim;ap1ehj89i
Les Mureaux;aq3e1b89i
Le Perreux-sur-Marne;appe2y89i
Guyancourt;aphe1r89i
Palaiseau;apce2989i
Saint-Dizier;ap4e9r89i
Creil;aque2w89i
Vandœuvre-lès-Nancy;ap6ed589i
Thonon-les-Bains;aitee089i
Béthune;aude3c89i
Colomiers;ab5dzp89i
Folie Méricourt;apre2l89i
Nogent-sur-Marne;apoe2w89i
Athis-Mons;apbe2n89i
Viry-Châtillon;ap7e2n89i
Houilles;apwe2389i
Soissons;ar6e5889i
Dreux;apedzt89i
Charenton-le-Pont;apme2p89i
Villeneuve-Saint-Georges;apde2t89i
Élancourt;apie1g89i
Saint-Ambroise;apqe2m89i
Alençon;aojdw989i
Sotteville-lès-Rouen;ar9dz189i
Orange;acme9d89i
Villenave-d'Ornon;aeeduf89i
Pontoise;aq9e1u89i
Villiers-sur-Marne;apne3389i
Chatou;apte2089i
Goussainville;aq5e2v89i
Lomme;auoe4b89i
Vierzon;al6e1r89i
Saint-Médard-en-Jalles;aeqdu089i
Thiais;apge2o89i
Carpentras;aceea189i
L'Haÿ-les-Roses;apie2i89i
Menton;abmegu89i
Saint-Laurent-du-Var;abbefz89i
Saintes;ah3du989i
Rochefort;ahmdtb89i
Malakoff;apme2e89i
Draveil;ap8e2p89i
Saint-Leu;ajte8i89i
Saint-Sébastien-sur-Loire;al5dru89i
Le Chesnay;apme1w89i
Tournefeuille;ab3dzo89i
Clichy-sous-Bois;apve3389i
Chaumont;anneaa89i
Saint-Étienne-du-Rouvray;ar6dz289i
Meyzieu;ah5e9w89i
Yerres;apce2x89i
Montbéliard;alzeew89i
Saint-Cloud;appe2489i
Sens;anwe5489i
Laon;aroe6389i
Lambersart;aupe4f89i
Trappes;aphe1m89i
Rodez;ad7e3589i
Bergerac;aeldxc89i
Annemasse;aibedc89i
La Garde;a9secp89i
Ermont;aq3e2a89i
Rillieux-la-Pape;ahae9m89i
Villemomble;apse2y89i
Pierrefitte-sur-Seine;aq1e2k89i
Le Kremlin-Bicêtre;aple2k89i
Champs-sur-Marne;appe3889i
Aix-les-Bains;agxecf89i
Bezons;apwe2589i
Vallauris;ab2efl89i
Taverny;aq7e2689i
Illkirch-Graffenstaden;aotehg89i
La Teste-de-Buch;adzdst89i
Épernay;aq8e7089i
Villiers-le-Bel;aq5e2o89i
Vichy;ai5e5j89i
Hôpital Saint-Louis;apse2l89i
Sannois;aq1e2989i
Gonesse;aq3e2t89i
Vigneux-sur-Seine;apae2p89i
Cavaillon;abrea089i
Rambouillet;ap4e1389i
Cherbourg;arwdri89i
Armentières;aute4089i
Lunel;abce7i89i
Cachan;apke2i89i
Le Grand-Quevilly;ar8dyx89i
Abbeville;at7e1489i
La Garenne-Colombes;apue2989i
Montigny-lès-Metz;aqeed389i
Quinze-Vingts;appe2l89i
Vanves;apme2d89i
Vernon;aqde0289i
Savigny-le-Temple;aoxe3689i
Dole;akteb989i
Villeneuve-sur-Lot;adddxy89i
Les Ulis;ap8e2189i
Oyonnax;aiiebq89i
Oullins;agze9d89i
Le Creusot;ak1e8a89i
Hénin-Beaumont;au1e4889i
Orvault;albdri89i
Coudekerque-Branche;avqe2n89i
Herblay-sur-Seine;aq3e2189i
Ris-Orangis;ap5e2p89i
Sucy-en-Brie;aphe3189i
Grigny;ap5e2n89i
Fresnes;apge2g89i
Romainville;apte2r89i
Fontenay-aux-Roses;apje2d89i
Décines-Charpieu;ah5e9s89i
Saint-Dié-des-Vosges;ao4efb89i
Fontaine;afjebt89i
Auch;ab9dxn89i
Bruay-la-Buissière;au8e3389i
Lisieux;aqjdwn89i
Sarreguemines;aqfefn89i
Torcy;appe3d89i
Gradignan;aeddub89i
Lanester;amodmq89i
Brétigny-sur-Orge;ap1e2f89i
Muret;aaqdzp89i
Bois-Colombes;apwe2b89i
Blagnac;ab8dzv89i
Hérouville-Saint-Clair;aqpdv589i
Libourne;aerdvc89i
Le Bouscat;aemduc89i
Miramas;ab3e9w89i
Beaune;akme9g89i
Brunoy;ap9e2x89i
Eaubonne;aq4e2c89i
Villeparisis;apye3989i
Montfermeil;apue3689i
Sèvres;apme2689i
Fougères;aobdso89i
Saint-Pol-sur-Mer;avre2i89h
La Madeleine;aupe4k89h
Gif-sur-Yvette;ap8e1x89h
Bègles;aehduh89h
Cahors;adhe0089h
Hazebrouck;auwe3289h
Millau;acie4k89h
Grande-Synthe;avqe2e89h
La Valette-du-Var;a9uecm89h
Moulins;ajce5989h
Mont-Saint-Aignan;aredz189h
Étampes;aoke2089h
Mons-en-Barœul;aune4o89h
Agde;aabe5o89h
Saint-Ouen-l'Aumône;aq8e1w89h
Vertou;al1drx89h
Montgeron;apbe2t89h
Maisons-Laffitte;apze1z89h
Le Puy-en-Velay;af4e6t89h
Le Petit-Quevilly;ar9dyy89h
Lormont;aeoduk89h
Olivet;amye1a89h
Ozoir-la-Ferrière;aphe3f89h
Le Plessis-Robinson;apje2b89h
Cenon;aemduj89h
Combs-la-Ville;ap6e3589h
Dax;abfdt389h
Frontignan;aape6g89h
Voiron;ag0ebj89h
Loos;aule4e89h
Le Mée-sur-Seine;aote3b89h
Villeneuve-la-Garenne;apye2f89h
Fécamp;as8dx189h
Cormeilles-en-Parisis;aq1e2489h
Sainte-Foy-lès-Lyon;ah1e9c89h
Verdun;aqkeay89h
Vélizy-Villacoublay;apie2389h
Saint-Lô;aqgdsz89h
Achères;aq0e1r89h
Lunéville;aozee189h
Deuil-la-Barre;aq2e2h89h
La Celle-Saint-Cloud;appe1z89h
Annecy-le-Vieux;ahked289h
Sceaux;apie2d89h
Lannion;apddme89h
Denain;atte5f89h
Allauch;aaeeb889h
Concarneau;an0dl489h
Eysines;aeodu789h
Croix;ause4r89h
Forbach;aqnef589h
Manosque;abrec389h
Saint-Mandé;apoe2q89h
Plaine du Var;abceg089h
Montmorency;aq3e2i89h
Porte Saint-Martin;apre2k89h
Gardanne;aapeb789h
Les Lilas;apse2q89h
Fleury-les-Aubrais;an5e1c89h
Dammarie-les-Lys;aose3d89h
Roissy-en-Brie;apje3d89h
Saint-Genis-Laval;agye9b89h
Saint-Louis;am7eh089h
Cognac;agydv389h
Saint-Michel-sur-Orge;ap3e2f89h
Longjumeau;ap9e2d89h
Bressuire;ak4dun89h
Vauréal;aq7e1n89h
Lons-le-Saunier;ajoebg89h
Ploemeur;ammdmh89h
Lagny-sur-Marne;apre3k89h
Sedan;as2e9q89h
Orly;apfe2n89h
Saint-Vincent de Paul;apse2k89h
Pontarlier;akaedo89h
Chamalières;ah5e4j89h
Meylan;aflec289h
Montceau-les-Mines;ajne8589h
Halluin;av3e4p89h
Riom;ahhe4n89h
Chevilly-Larue;apge2j89h
Croulebarbe;aple2j89h
La Defense;apte2889h
Sainte-Marguerite;aa6eb089h
Romorantin-Lanthenay;alle0v89h
Mantes-la-Ville;aq1e0q89h
Pertuis;abdeba89h
Morsang-sur-Orge;ap6e2j89h
Vesoul;ambed289h
Saint-Jean-de-Braye;an3e1i89h
Les Pennes-Mirabeau;aalear89h
Cluses;ahyee989h
Bourg-lès-Valence;aeve9l89h
Villefontaine;agpeab89h
Saint-Gratien;aq1e2d89h
Les Pavillons-sous-Bois;apve2z89h
Fontainebleau;aohe3i89h
Hem;aupe4v89h
Nogent-sur-Oise;aqve2v89h
Bagnols-sur-Cèze;acoe8u89h
Couëron;al5dr889h
Écully;ah5e9a89h
Cran-Gevrier;ahiecy89h
Wasquehal;aure4p89h
Mandelieu-la-Napoule;aazefa89h
Vendôme;amrdyz89h
Louviers;aqqdz989h
Gujan-Mestras;ae0dt189h
Sanary-sur-Mer;a9sec489h
Senlis;aqpe3789h
Albertville;agvedr89h
Limeil-Brévannes;apee2x89h
Jouy-le-Moutier;aq5e1o89h
Marmande;admdwh89h
Royan;agrdt589h
Maurepas;apge1d89h
Digne-les-Bains;achedb89h
Mougins;ab4efg89h
Challans;ak5dqs89h
Sélestat;ao2egp89h
Garches;apoe2289h
Bourg-la-Reine;apie2g89h
Chilly-Mazarin;apbe2g89h
Équeurdreville-Hainneville;arxdrf89h
Cournon-d'Auvergne;ah2e4w89h
Saint-Roch;abfeg989h
Chaville;aple2389h
Neuilly-Plaisance;apqe2z89h
Bonneuil-sur-Marne;aphe2w89h
Sorgues;ac9e9j89h
Vence;abgefr89h
Saint-Barthélémy;aadeb089h
Le Plessis-Trévise;aple3589h
Bar-le-Duc;apheac89h
Seynod;ahhecx89h
Mitry-Mory;aq2e3a89h
Carvin;au9e4889h
Limay;aq4e0u89h
La Flèche;amidvs89h
Plaisance-du-Touch;ab1dzm89h
La Chapelle-sur-Erdre;aledrp89h
Avion;au1e3v89h
Annonay;afoe8z89h
Ronchin;auke4l89h
Mauguio;ab6e7589h
Chennevières-sur-Marne;apke3289h
Autun;akfe7y89h
Saint-Avold;aqeeem89h
Tourlaville;arwdrn89h
Saint-Omer;auze2a89h
Argentan;apedvy89h
Givors;agne9989h
Joinville-le-Pont;apne2v89h
Carquefou;aledrv89h
Cestas;aeadu489h
Castelnau-le-Lez;ab8e6u89h
Montigny-lès-Cormeilles;aq2e2489h
La Crau;a9vecv89h
Firminy;ag3e7x89h
Orsay;apae2389h
Saint-Amand-les-Eaux;au5e5j89h
La Pomme;aa9eb489h
Le Pré-Saint-Gervais;apte2o89h
Lucé;aoke0289h
Les Clayes-sous-Bois;apme1j89h
La Baule-Escoublac;alddpg89h
Salpêtrière;apoe2k89h
Sin-le-Noble;atwe4p89h
Toul;ap8ecd89h
Villeneuve-le-Roi;apee2o89h
Mazargues;aa5eb089h
Saint-Jean-de-la-Ruelle;an3e1689h
Morlaix;aoydld89h
Montargis;ance3l89h
Soisy-sous-Montmorency;aq3e2e89h
Bischheim;ap2ehj89h
Flers;apeduf89h
Marly-le-Roi;apre1s89h
Lattes;ab1e6u89h
Saint-Cyr-sur-Loire;alodxv89h
Fos-sur-Mer;aaoe9q89h
Arcueil;apke2h89h
Lingolsheim;aowehc89h
Vitré;anodsn89h
Vitry-le-François;apce8q89h
Elbeuf;aqxdys89h
Pamiers;a9se0h89h
Montereau-Fault-Yonne;aoee4789h
Tulle;afre0x89h
L'Isle-sur-la-Sorgue;ac0ea189h
Octeville;arvdrg89h
Tassin-la-Demi-Lune;ah3e9b89h
Bouguenais;al2dri89h
Verneuil-sur-Seine;aq1e1g89h
Verrières-le-Buisson;apfe2b89h
Pontivy;anjdnr89h
Le Vésinet;apte1x89h
Sallanches;ahmeef89h
Montivilliers;arndwj89h
Domont;aq7e2h89h
Blanquefort;aerdu889h
Douarnenez;anmdjz89h
Le Camas;aa9eaz89h
Osny;aqbe1q89h
Le Pecq;apte1u89h
Guérande;alhdp989h
Floirac;aejduj89h
Saint-Cyr-l'École;apke1r89h
Laxou;ap8ed389h
Fontenay-le-Comte;aj3dtr89h
Moissy-Cramayel;ap3e3889h
Saran;an7e1889h
Bry-sur-Marne;apoe3089h
Cesson-Sévigné;anodrk89h
Le Pontet;ac4e9i89h
Montbrison;agpe7b89h
Faches-Thumesnil;auie4j89h
Viroflay;apke2089h
Les Sables-d'Olonne;aj6dr289h
Saint-Loup;aa8eb389h
Saint-Leu-la-Forêt;aq6e2989h
Saint-Fons;agze9h89h
Landerneau;aoldk789h
Saint-Avertin;alkdy289h
Châteaudun;anjdzq89h
Issoire;agie5189h
Gien;amhe3b89h
Bayeux;aqwdu289h
Gentilly;aple2i89h
Château-Thierry;aq9e5g89h
Port-de-Bouc;aale9u89h
Saint-Égrève;afnebs89h
Villers-lès-Nancy;ap7ed389h
Brie-Comte-Robert;ap9e3989h
Boissy-Saint-Léger;apfe2z89h
Guéret;ai9e1789h
Chenôve;alde9w89h
Lourdes;a9pdvv89h
Wittenheim;amtegd89h
Canteleu;arcdyu89h
Crépy-en-Valois;aqre4189h
Haubourdin;aule4b89h
Berck-Plage;au1e0c89h
Les Herbiers;ak7dt689h
Yutz;ar4ed789h
Outreau;auve0f89h
Berck;au0e0g89h
Mayenne;ao6dub89h
Audincourt;alwef189h
Balma;ab5e0689h
Hautmont;atle6w89h
Lognes;apoe3b89h
Hayange;ar1ecu89h
Les Moulins;abceg089h
Tergnier;arye5689h
Carrières-sous-Poissy;apze1o89h
Illzach;ampegf89h
Pont-à-Mousson;apvecu89h
Cugnaux;aaydzq89h
Éragny;aq6e1u89h
Noisiel;appe3a89h
La Blancarde;aaaeb189h
Saint-Pierre-des-Corps;alndy389h
Coulommiers;aple4k89h
Montesson;apve1y89h
Saint-Maximin-la-Sainte-Baume;aapeca89h
Les Olives;aaceb689h
Noyon;arqe4c89h
Porte Saint-Denis;apre2j89h
Brignoles;aalecu89h
Avon;aoge3k89h
=GA
Libreville;6z3em90vo
Port-Gentil;6w0eke0vl
Franceville;6thexq0vk
Owendo;6yteme0vk
Oyem;72ges60vj
Moanda;6tnewo0vj
Ntoum;6z3en40vj
Lambaréné;6w2eog0vj
Mouila;6steqq0vj
Akanda;6zpelx0vi
Tchibanga;6pveqi0vi
Bitam;73sery0vi
Koulamoutou;6uueum0vi
Oyam;6xgepo0vi
Makokou;6zlevq0vi
=GB
London;ax3dvn80s;伦敦|倫敦|런던|Lonn|Londe|Londn|Lakana|Landan|Landen|Lodoni|Londan|Londar|Londen|Londin|Londra|Londri|Londro|Londye|Londyn|Lonton|Lontoo|Lontra|Lunden|Lundra|Lundun|Lunnin|Lunnon|Ranana|Łondra|ILondon|Ljondan|Londain|Londino|Londona|Londoni|Londono|Londons|Londonu|Londres|Londrez|Lun-tun|Llundain|Londonas|Loundres|Lundunir|Lunnainn|Luân Đôn|Londinium|Luan GJon|Lung-dung|London osh|لندن|لأندأن|लंडन|लंदन|ロンドン|Лондан|Лондон|ลอนดอน
Birmingham;azsdqq80o;伯明翰|伯明翰市|버밍엄|Brum|Birmingam|Birmingem|Birmingema|Birminghem|Birmin'gxam|Birmingamas|Birminghamo|Mpermincham|Birminghamia|برمنگم|بیرمنگام|バーミンガム|बर्मिंघम|बर्मिंगहॅम|Бирмингам|Бирмингем|เบอร์มิงแฮม
Glasgow;b97dk680n
Manchester;b2kdps80n
Sheffield;b2adrx80n
Leeds;b3gdrp80n
Edinburgh;b9fdn480n
Liverpool;b2ddnq80n
Bristol;awydos80n
Cardiff;ax0dn680m
Leicester;b08dsv80m
Bradford;b3fdr580m
Belfast;b5odfj80m
Coventry;azldrt80m
Brent;ax7dv680m
Birkenhead;b2bdnn80m
Nottingham;b13dst80m
Islington;ax6dvq80m
Reading;awydtb80m
Kingston upon Hull;b3adv280m
Preston;b3cdoi80m
Swansea;axedl280m
Newcastle upon Tyne;b6pdrj80m
Southend-on-Sea;ax6dxz80m
Brighton;av7dvm80m
Derby;b10drw80m
Southampton;aveds480m
Wolverhampton;b03dq480m
Plymouth;atxdki80m
Stoke-on-Trent;b18dpx80m
Milton Keynes;aykdtw80m
City of Westminster;ax2dvm80m
Northampton;az5dtk80m
Oldham;b2qdq480l
Bexley;awwdwf80l
Luton;ay4duu80l
Barking;ax5dw880l
Archway;ax9dvn80l
Portsmouth;av4dsz80l
Swindon;ax8dr280l
Dudley;azudq880l
Aberdeen;bcqdq680l
Sutton;awndvg80l
St Helens;b2hdof80l
Ipswich;aymdz880l
Wigan;b2qdoo80l
Croydon;awqdvq80l
Warrington;b2bdou80l
Walsall;b03dqi80l
Mansfield;b1ldso80l
Sunderland;b6ids680l
Ilford;ax8dw780l
Slough;ax3duc80l
Bournemouth;auwdqs80l
Peterborough;b01dvb80l
Oxford;axrdsi80l
Newport;axbdno80l
Enfield Town;axhdvs80l
York;b3wdt080l
Telford;b0cdp780l
Poole;auvdqi80l
Burnley;b3gdpt80l
Harrow;axadv380l
Huddersfield;b31dr280l
Dundee;bavdnr80l
Blackburn;b3bdp480l
Cambridge;az0dwc80l
Blackpool;b3idnj80l
Basildon;ax9dxa80l
Norwich;b07dzm80l
Middlesbrough;b5mdsl80l
Bolton;b2udp980l
Stockport;b2ddq080l
High Wycombe;axfdtx80k
Gloucester;ay3dps80k
Exeter;auwdm780k
Colchester;ay5dyi80k
Tottenham;axcdvt80k
Salford;b2ldpn80k
Newcastle under Lyme;b18dpt80k
Solihull;azldr280k
Watford;axiduw80k
Saint Peters;awpdzy80k
Crawley;avzdvi80k
Burton upon Trent;b0pdrg80k
Cheltenham;ay6dq880k
Rotherham;b2fds880k
Worthing;av6duy80k
Doncaster;b2odsv80k
Chesterfield;b1xds280k
Chelmsford;axqdxb80k
Mendip;awcdop80k
Sutton Coldfield;b01dqy80k
Wakefield;b34dru80k
Walthamstow;axbdvy80k
Dagenham;ax7dwh80k
Basingstoke;awedsz80k
Maidstone;awfdxg80k
Bedford;aytdup80k
Woking;awkdug80k
Lincoln;b1vdui80k
West Bromwich;azwdqh80k
Eastbourne;av1dws80k
Worcester;ayzdpu80k
Bath;awqdpg80k
Gillingham;awrdxj80k
Becontree;ax7dwd80k
Rochdale;b2ydq080k
Hemel Hempstead;axrdur80k
Romford;axadwj80k
Hayes;ax4duu80k
Harlow;axudwb80k
Hastings;avadxm80k
High Peak;b29dqv80k
Darlington;b5gdrp80k
Stevenage;ay6dvg80k
Southport;b31dnn80k
Chester;b1rdnz80k
Wembley;ax7dv680k
Grays;ax0dwx80k
Harrogate;b3zdrq80k
Hartlepool;b5xdsn80k
Nuneaton;azwdrx80k
Redditch;azbdql80k
Fulham;ax0dvg80k
Londonderry County Borough;b6sdbp80k
Grimsby;b2tdvs80k
Cannock;b0ddqd80k
St Albans;axrdv380k
South Shields;b6sds180k
Derry;b6sdbp80k
Weston-super-Mare;awndnq80k
Halifax;b38dqv80k
Edmonton;axfdvu80k
Tamworth;b07dra80k
Gosport;av4dsv80k
Scunthorpe;b2udu780k
Chatham;awqdxh80k
Stockton-on-Tees;b5ldsc80k
Carlisle;b6idnu80k
Southall;ax3duz80k
Rugby;azhdsi80k
Gateshead;b6odrk80k
Lisburn;b5gdf880k
Paisley;b93djp80k
Putney;awydve80k
Shrewsbury;b0fdod80k
Fylde;b3jdnw80k
Crewe;b1idp880k
Bracknell;awtdtx80k
Battersea;awzdvk80k
East Kilbride;b8wdke80k
Hove;av7dvj80k
Aylesbury;axydtr80j
Canary Wharf;ax3dvy80j
Purley;awmdvp80j
Guildford;awcduf80j
Peckham;awzdvt80j
Barnsley;b2rdrw80j
Lowestoft;azse0v80j
Chingford;axfdw080j
Maidenhead;ax4du080j
Stafford;b0pdq480j
Uxbridge;ax7duo80j
Rhondda;axidmf80j
Royal Tunbridge Wells;aw1dwq80j
Wimbledon;awudvf80j
Corby;azudu380j
Stamford Hill;ax9dvt80j
Paignton;au4dm380j
Rossendale;b34dpo80j
Washington;b6idrs80j
Folkestone;avwdz980j
Brixton;awzdvp80j
Hounslow;awzdv080j
Finchley;axcdvg80j
Wrexham;b1ddnp80j
Ellesmere Port Town;b20dny80j
Torquay;au6dm780j
Cricklewood;ax8dve80j
Loughborough;b0ldso80j
Taunton;avpdne80j
Waterlooville;avcdt580j
Bognor Regis;av2du480j
Newtownabbey;b5udfl80j
Buckley;b1pdng80j
Great Yarmouth;b05e0t80j
Mitcham;awsdvj80j
Feltham;awxduv80j
Margate;awqdzv80j
Ashford;aw3dyf80j
Sale;b2fdpk80j
Tonypandy;axedme80j
Acton;ax3dv880j
Scarborough;b4sduw80j
Widnes;b28dof80j
Runcorn;b26dof80j
Bury;b2wdpm80j
Dewsbury;b35drh80j
Bangor;b5udg980j
Beckenham;awtdvx80j
Farnborough;awhdtw80j
Tynemouth;b6uds180j
Hereford;aymdoh80j
Stroud;axrdpw80j
Halesowen;azpdqb80j
Chelsea;ax1dvj80j
Craigavon;b59de980j
Wallasey;b2edni80j
Littlehampton;av5dui80j
Streatham;awvdvn80j
Bootle;b2jdnm80j
Bebington;b27dnm80j
Kidderminster;azjdpr80j
Morley;b3adrk80j
Stourbridge;azqdq280j
Livingston;b9adm880j
Castlereagh;b5ldfo80j
Kettering;azkdtz80j
Wellingborough;azadu380j
Barrow in Furness;b4bdn180j
South Croydon;awodvr80j
Canterbury;awgdz080j
Dunfermline;b9rdme80j
Huyton;b2ddo480j
Leytonstone;ax9dw180j
Barry;awsdmw80j
Hamilton;b8xdkt80j
Meikle Earnock;b8vdkt80j
Sittingbourne;awmdy180j
Macclesfield;b1ydq380j
Gravesend;awwdx180j
Eastleigh;avlds980j
Smethwick;aztdqj80j
Braintree;ay4dxj80j
Weymouth;auldp680j
Brentwood;axedwv80j
Esher;awpduz80j
Dunstable;ay5duk80j
Morecambe;b47do280j
Redhill;awcdvj80j
Welwyn Garden City;axwdvf80j
Horsham;avudv380j
Dartford;awxdwl80j
Staines;awvdul80j
Royal Leamington Spa;az9drs80j
Hinckley;azyds680j
Clacton-on-Sea;axvdz880j
Cumbernauld;b9fdkx80j
Kirkcaldy;b9wdn880j
Bletchley;ayfdtz80j
Yeovil;avidop80j
Keighley;b3ndqp80j
Altrincham;b2bdph80j
Bridgend;ax3dm280j
Llanelli;axkdkg80j
Willenhall;b03dqa80j
Eltham;awxdw580j
South Benfleet;ax7dxk80j
Banbury;aymdsa80j
Cwmbran;axhdnm80j
Morden;awsdvg80j
Long Eaton;b0ydsh80j
Inverness;bdodka80j
Durham;b66drm80j
Northwich;b1ydp080j
Perth;baodmh80j
Lancaster;b45do880j
Tipton;azxdq980j
Kilmarnock;b8hdji80j
Dumfries;b6zdlz80j
Banstead;awkdvf80j
Ayr;b82dj580j
Neath;axidlg80j
King's Lynn;b0jdx480j
Winchester;avvdsc80j
Middleton;b2rdpw80j
Havant;avadt980j
Kirkby;b2kdnz80j
Carshalton;awpdvj80j
Boston;b16dvx80j
Castleford;b39ds880j
Catford;awwdvy80j
Salisbury;avvdr080j
Worksop;b22dsw80j
Pontefract;b35dsd80j
Grantham;b0zdu880j
Willesden;ax5dvd80j
Coatbridge;b96dku80j
Merthyr Tydfil;axrdmm80j
Great Sankey;b2bdoo80j
Bexhill-on-Sea;av9dxb80j
Cheshunt;axmdvx80j
Ashton-under-Lyne;b2ldq680j
Leigh;b2mdp080j
Leatherhead;awidv380j
Newark on Trent;b1fdtq80j
Wallsend;b6rdrr80j
Leighton Buzzard;ay8du680j
Lytham St Annes;b3adno80j
Redruth;atjdhi80j
Canning Town;ax3dw280j
Andover;aw9drv80j
Fareham;av9dsq80j
Ramsgate;awmdzy80i
Stretford;b2hdpk80i
Urmston;b2hdph80i
Dover;aw1dzn80i
Coity;ax4dm480i
Newburn;b6rdr680i
Holloway;ax7dvo80i
Bury St Edmunds;az5dxz80i
Greenock;b9fdis80i
Bridgwater;aw1dno80i
Hatfield;axsdve80i
Wokingham;awtdto80i
Welling;awydwb80i
Ilkeston;b15dsd80i
Trowbridge;awkdpv80i
Bishops Stortford;ay3dwg80i
Prescot;b2fdo880i
Kingswood;awxdp180i
Aldershot;awddtw80i
Bloxwich;b06dqg80i
Ewell;awndvb80i
North Shields;b6udrz80i
Shepherds Bush;ax2dve80i
Batley;b36drh80i
Cleethorpes;b2sdvx80i
Skelmersdale;b2rdob80i
Fleet;awgdtp80i
Abingdon;axjdsg80i
Glenrothes;ba4dn780i
Canvey Island;ax4dxm80i
Surbiton;awrdv680i
Whitley Bay;b6wdrz80i
Greenford;ax5dv080i
Stirling;b9wdl280i
Arnold;b18dsv80i
Coalville;b0gds780i
Leyland;b36doj80i
Chadderton;b2qdq280i
Rushden;az9duc80i
Yeadon;b3mdrb80i
Blyth;b75drt80i
Eccles;b2kdpj80i
Warwick;az8drm80i
Wigston Magna;b02dsz80i
Redcar;b5qdt280i
Heston;ax0duy80i
Farnham;aw9dts80i
Chester-le-Street;b6edrn80i
Great Malvern;ayrdpj80i
Houghton-Le-Spring;b6cdry80i
Stratford;ax5dw080i
West Bridgford;b11dsv80i
Newton Abbot;auddlz80i
Mangotsfield;ax1dp280i
Sutton in Ashfield;b1ldsi80i
Airdrie;b97dky80i
Billericay;axfdx680i
Borehamwood;axhdv880i
Exmouth;aumdmk80i
Tonbridge;aw8dwr80i
Tyldesley;b2ndp580i
Hyde;b2hdq880i
Chippenham;awydq480i
Billingham;b5ndsf80i
Pontypool;axmdnk80i
Walkden;b2odpc80i
Falkirk;b9kdlh80i
Hitchin;aybdv880i
Briton Ferry;axfdle80i
Hoddesdon;axsdvz80i
Bridlington;b48dvh80i
Accrington;b3bdpg80i
Bentley;b2pdst80i
Bromsgrove;azedqa80i
Lichfield;b0cdqx80i
Swadlincote;b0ldro80i
Felling;b6ndrn80i
Chiswick;ax1dva80i
Totton;avgdrv80i
Irvine;b8idj280i
Letchworth Garden City;ayedvd80i
Chorley;b31doq80i
Bicester;ay6dst80i
Haywards Heath;avodvq80i
Wednesfield;b04dq780i
Strood;awrdxc80i
Loughton;azndov80i
Cramlington;b71drl80i
Ebbw Vale;axudn380i
Newbury;awsdsc80i
North Watford;axkdux80i
Portadown;b56de480i
Washwood Heath;azudqx80i
Brighouse;b36dr280i
Motherwell;b8zdkx80i
Darwen;b36dp680i
Wisbech;b0bdwg80i
Rayleigh;axbdxo80i
Aston;azudqs80i
Whitstable;awodyv80i
Deeside;b1sdnk80i
Lower Earley;awvdtg80i
Shirley;azldqy80i
Falmouth;atbdhx80i
Thamesmead;ax2dwc80i
Chichester;av8dtu80i
Barnstaple;avwdkq80i
Windsor;ax0duc80i
Prestwich;b2pdpo80i
Epsom;awldv980i
Christchurch;auydr280i
Stanley;b6fdra80i
Pontypridd;axcdmq80i
Thornton-Cleveleys;b3ndnm80i
Aberdare;axndmf80i
Bedworth;azsdrx80i
Caerphilly;ax9dn280i
Ruislip;ax9duu80i
Rutherglen;b93dkb80i
Deal;awadzw80i
Saint Neots;az2dv980i
Cambuslang;b91dkg80i
Harpenden;axydv080i
Burgess Hill;avkdvn80i
Beverley;b3lduu80i
Greenwich;ax0dvz80i
Spalding;b0ndvl80i
Stratford-upon-Avon;ayzdr980i
Winsford;b1rdp080i
Camberley;awmdty80i
Wishaw;b8xdl480i
Barnet;axhdvg80i
Radcliffe;b2sdpk80i
Hucknall;b1bdso80i
Egham;awvduh80i
Stanford-le-Hope;ax4dx780i
Sevenoaks;awfdwj80i
Kidsgrove;b1hdps80i
Jarrow;b6qdrw80i
Newtownards;b5ndg780i
Didcot;axddsk80i
Nelson;b3jdpw80i
Colwyn Bay;b21dln80i
Burntwood;b0cdqn80i
Carrickfergus;b60dfv80i
Kendal;b4xdod80i
Consett;b6ddqx80i
Witney;axudrv80i
Heswall;b25dne80i
Kilburn;ax7dvh80i
Cheadle Hulme;b2adpx80i
Ballymena;b6edek80i
Bideford;avqdkb80i
Rochester;awrdxf80i
Shipley;b3jdr380i
Bearsden;b9cdjz80i
Wood Green;axcdvo80i
Bushey;axgdv080i
Newton Mearns;b8xdjz80i
Daventry;az6dss80i
Heywood;b2vdpu80i
Brierley Hill;azsdq480i
Muswell Hill;axbdvm80i
Sunbury-on-Thames;awsduu80i
Newry;b4idee80i
Melton Mowbray;b0ldtj80i
Bow;ax5dvy80i
Evesham;aypdql80i
Ashington;b7adro80i
Kirkby in Ashfield;b1idsk80i
Wickford;axddxg80i
Burngreave;b2bdry80i
Denton;b2idq480i
Cleckheaton;b38dr980i
Ashford;awvduq80i
Longton;b16dq380i
Haverhill;ayodx880i
Maghull;b2odnu80i
Aldridge;b05dqo80i
Stalybridge;b2kdqa80i
Highbury;ax7dvq80i
Acocks Green;azpdqy80i
East Grinstead;aw0dvz80i
Flint;b1wdnb80i
Newton Aycliffe;b5qdrn80i
Ashton in Makerfield;b2kdon80i
Portishead;ax0dob80i
Westhoughton;b2rdp080i
Fleetwood;b3tdnn80i
Frome;awbdpk80i
Congleton;b1odpv80i
Rugeley;b0kdqm80i
Camden Town;ax6dvm80i
Bishop Auckland;b5udrc80i
Northolt;ax7duz80i
Rhyl;b24dmb80i
Hertford;axwdvs80i
Wilmslow;b25dpt80i
Staveley;b1zds980i
Coleraine;b75ddh80i
Farnworth;b2rdpc80i
Clydebank;b9adjr80i
New Milton;av0drd80i
Coulsdon;awkdvm80i
Crowthorne;awpdtt80i
Hawarden;b1qdnl80i
Hornchurch;ax8dwm80i
Thatcham;awsdsi80i
Saddleworth;b2rdqg80i
Rickmansworth;axgduo80i
Pudsey;b3gdre80i
Rhosllannerchrugog;b19dni80i
Witham;axwdxs80i
Blackheath;awydw180i
Elgin;be5dms80i
Isleworth;ax0dv280i
Hindley;b2pdou80i
Pitsea;ax8dxf80i
Chalk Farm;ax6dvl80i
Newport;auudsf80i
Skegness;b1mdwy80i
Herne Bay;awpdz580i
Selby;b3edt180i
Thetford;azmdy380i
Market Harborough;azsdtg80i
Newton-le-Willows;b2hdos80i
Vale of Leven;b9hdja80i
Felixstowe;aycdzr80i
St Austell;atudir80i
Renfrew;b97djt80i
Plymstock;atwdkn80i
Ryde;auxdss80i
Ormskirk;b2tdo080i
Golborne;b2kdos80i
Gosforth;b6sdri80i
Huntingdon;azddvh80i
Sudbury;aykdy180i
Oadby;b05dt080i
Droitwich;az7dq180i
New Malden;awsdva80i
Ammanford;axvdkx80h
Yate;ax6dpa80h
Droylsden;b2kdq180h
Bishopbriggs;b9bdka80h
Arbroath;bb4dot80h
Musselburgh;b9ednj80h
Bathgate;b9adlw80h
Hanworth;awvduy80h
Whitefield;b2rdpm80h
Lofthouse;b39dru80h
Penarth;awwdn780h
Belper;b1adrw80h
Hailsham;avadwq80h
Maldon;axpdxv80h
Formby;b2sdnh80h
Burnham-on-Sea;awcdno80h
Broadstairs;awoe0080h
Heanor;b19ds980h
Chapeltown;b2jdrx80h
Truro;atndhz80h
Faversham;awjdyh80h
Rawtenstall;b36dpo80h
Litherland;b2jdno80h
Whitehaven;b5jdm280h
Swinton;b2mdph80h
Waltham Abbey;axldw080h
Royton;b2tdq480h
Walton-on-Thames;awrduv80h
Wellington;b0edp080h
Woodford Green;axddw280h
Godalming;aw7dub80h
Bartley Green;azodqg80h
Potters Bar;axldvi80h
Seaford;av1dwa80h
Alfreton;b1ids680h
South Ockendon;ax3dws80h
Kenilworth;azfdrm80h
Seaham;b6cds980h
Thornaby-on-Tees;b5hdse80h
Tiverton;avedmb80h
Retford;b24dte80h
Atherton;b2odp380h
Heavitree;auwdma80h
Berkhamsted;axsduf80h
Ossett;b34drm80h
Swanley;awsdwh80h
Reigate;awcdvf80h
Rottingdean;av5dvu80h
Amersham;axjdua80h
Crowborough;avudwg80h
Hadley Wood;axjdvj80h
Richmond;awydv580h
Old Trafford;b2idpn80h
Garston;b25dny80h
Speke;b26do480h
Darton;b2vdrr80h
Hebburn;b6pdrs80h
Workington;b5sdm680h
Horley;aw5dvk80h
Cowes;av0dse80h
Barnes;awzdvb80h
Dukinfield;b2jdq780h
Dronfield;b22drw80h
Ripley;b1bds480h
Omagh;b5odbq80h
March;azzdw980h
Stowmarket;ayzdys80h
Clevedon;awwdo280h
Maesteg;axddlu80h
Guiseley;b3odr980h
Notting Hill;ax3dvf80h
Bordon;avzdtm80h
Caterham;awgdvs80h
Wallington;awodvl80h
Goole;b36dtk80h
Sandhurst;awndtt80h
Harwich;ayadzk80h
Pimlico;ax1dvm80h
Chesham;axmduc80h
Gerrards Cross;axbdug80h
Stamford;b09duo80h
Stourport-on-Severn;azedpo80h
Gorseinon;axjdks80h
Ely;azkdwq80h
Failsworth;b2mdpz80h
Nailsea;awvdoc80h
Gainsborough;b2adtv80h
Hythe;avads480h
Camborne;athdha80h
Risca;axddne80h
Halewood;b28do580h
Alloa;b9wdlh80h
Newmarket;az4dx480h
Tewkesbury;ayfdq080h
Yateley;awmdtp80h
Wednesbury;azzdqe80h
Peterlee;b64dsa80h
Cirencester;axodqj80h
Newquay;au2dhx80h
Hazel Grove;b2adq480h
Sandown;aupdss80h
Colne;b3mdpz80h
Chalfont Saint Peter;axddug80h
Buxton;b1ydqp80h
Ampthill;ayjdum80h
Bowthorpe;b08dze80h
Hampton;awtduz80h
Kempston Hardwick;aypdum80h
Kingswinford;azudpz80h
Portslade;av8dve80h
Dumbarton;b9edjb80h
Poulton-le-Fylde;b3jdnq80h
Brough;b39duf80h
Kempston;aysdum80h
Penzance;at8dgm80h
Dinnington;b29dso80h
Bellshill;b92dku80h
Antrim;b60der80h
Soho;ax3dvm80h
Kirkintilloch;b9edkh80h
Norris Green;b2hdnw80h
Keynsham;awtdp280h
Earl Shilton;b02dsc80h
Adwick le Street;b2tdsq80h
Weybridge;awpduq80h
Blackwall;ax3dw080h
Irlam;b2gdpa80h
Chessington;awodv680h
Alton;aw3dtb80h
Liversedge;b37drb80h
Leek;b1idqe80h
Melksham;awpdq280h
Horsforth;b3kdrg80h
Clydach;axkdl680h
East Dereham;b0cdyl80h
Great Wyrley;b0adqf80h
Yarm;b5eds880h
Shoreham-by-Sea;av7dv980h
Pinner;axbduy80h
Prestatyn;b26dmj80h
Peterhead;bdrdr280h
Hook;awpdv580h
Nether Edge;b28drv80h
Humberstone;b09dsz80h
South Elmsall;b2wdsg80h
Golders Green;axadvg80h
Mirfield;b33dra80h
Emsworth;av9dte80h
Aberystwyth;azmdko80h
Oswestry;b0udnj80h
Horwich;b2wdox80h
Lancing;av7dv480h
Kirkdale;b2fdnq80h
Eastwood;b18dse80h
Peacehaven;av3dvz80h
East Molesey;awsdv180h
West Molesey;awsduy80h
Southsea;av2dsz80h
Isle of Lewis;bfqde980h
Wealdstone;axcdv280h
Rawmarsh;b2idsa80h
Bedlington;b75drl80h
Uckfield;avldwa80h
Larne;b6ddfu80h
Saint Andrews;baido880h
Mansfield Woodhouse;b1odsp80h
Bangor;b1vdkj80h
Bonnyrigg;b97dnd80h
Hadleigh;ax7dxp80h
Marlow;ax9dtv80h
Fulwood;b27drp80h
Chapel Allerton;b3jdrq80h
Heckmondwike;b37drc80h
Brymbo;b1fdnh80h
East Barnet;axhdvk80h
Bingley;b3ldqw80h
Dalserf;b8tdl480h
Hedge End;avfdse80h
Sandbach;b1ndpg80h
New Mills;b29dqg80h
Ascot;awtdu580h
Barrhead;b90djt80h
Manchester City Centre;b2kdpr80h
Glossop;b2gdql80h
Spennymoor;b5ydrk80h
Dorking;awbdv380h
Amersham on the Hill;axjdub80h
Abbey Wood;ax1dwb80h
Moreton;b2cdnc80h
Biddulph;b1kdpy80h
Bishopstoke;avldsb80h
Ferndown;av5dqq80h
Bethnal Green;ax5dvu80h
Ware;axxdvx80h
Maltby;b2edso80h
Bayswater;ax3dvi80h
Warminster;aw8dpy80h
Walton-on-the-Naze;ay1dzj80h
Louth;b29dw080h
Gelligaer;axidmy80h
Sleaford;b18duv80h
Haydock;b2jdok80h
Lewes;avbdw180h
Mountsorrel;b0gdst80h
Thorne;b2xdtc80h
Haslemere;avxdu180h
Calne;awwdqf80h
Evington;b04dt180h
Friern Barnet;axddvk80h
Nantwich;b1fdp080h
Bramhall;b28dpz80h
Glen Parva;b03dsr80h
Harlesden;ax6dvb80h
Primrose Place;b00dvp80h
Romsey;avndru80h
Brockley;awydvw80h
Blantyre;b90dkn80h
Ramsbottom;b31dpk80h
Bredbury;b2edq480h
Heysham;b44dnz80h
Westbury;awedpx80h
Guisborough;b5hdt280h
Wath upon Dearne;b2mds980h
Frinton-on-Sea;axzdzg80h
Bodmin;au7diw80h
Hayling Island;av2dtb80h
Dorchester;auwdp980h
Braunstone;b06dsq80h
Devizes;awndqh80h
Northallerton;b4yds180h
Saint Ives;azddvs80h
Longfield;awsdwu80h
South Ruislip;ax8duv80h
High Blantyre;b8ydkm80h
Rochford;axadxz80h
Plumstead;ax0dw880h
Cobham;awlduv80h
Hale;b2adpj80h
Penrith;b5vdoc80h
Brixham;atzdm880h
Whickham;b6ndrc80h
Saffron Walden;ayidwo80h
Biggleswade;aypdva80h
Kensington;b2ddnt80h
South Norwood;awsdvt80h
Cowley;axpdsn80h
Harringay;axadvq80h
Norbury;awudvo80h
Enfield Lock;axjdvx80h
Nigg;bcodq780h
Fazakerley;b2idnv80h
Ripon;b4edrr80h
Hartley;awrdwu80h
Tooting;awvdvk80h
Stepney;ax4dvw80h
Banbridge;b4zdek80h
Penicuik;b93dn180h
Roehampton;awxdvc80h
Grangemouth;b9ldlo80h
Kilwinning;b8ldix80h
Ryton;b06dph80h
Upper Norwood;awudvr80h
Worcester Park;awqdvc80h
Viewpark;b93dkq80h
Longsight;b2idpw80h
Basford;b15dsq80h
Limehouse;ax3dvx80h
Broxburn;b9ddmd80h
Seven Sisters;axadvs80h
Chertsey;awrdul80h
Kippax;b3dds780h
Ealing Common;ax3dv680h
Conisbrough;b2kdsl80h
Johnstone;b93djg80h
Hayes;awqdw280h
Carmarthen;ay2dk180h
Hoyland Nether;b2mdrz80h
Tadley;awndsv80h
Swanscombe;awxdwv80h
Royston;ayldvy80h
Fort William;bbudht80h
New Cross;ax0dvw80h
Hunts Cross;b28do180h
Baildon;b3ldr180h
Carterton;axsdrl80h
Porthcawl;ax0dlq80h
Ponders End;axgdvv80h
Hale;awbdtt80h
Elland;b35dqw80h
Perry Vale;awwdvw80h
Belle Vale;b2bdo280h
Chislehurst;awudw780h
Queenstown;ax0dvl80h
Old Swan;b2ddnx80h
Saltash;au1dk980h
Earlsfield;awwdvh80h
Wimborne Minster;av2dqi80h
West Ham;ax5dw280h
Allerton;b29dnz80h
Erskine;b9adjn80h
Wombwell;b2ods480h
Furzedown;awudvl80h
South Hayling;av3dta80h
Blackwood;axjdn380h
Llandudno;b24dld80h
Latchmere;awzdvj80h
Neston;awtdpw80h
Manor Park;ax7dw580h
Orpington;awpdwa80h
Haslingden;b36dpk80h
West Ealing;ax3dv480h
Palmers Green;axedvp80h
Totteridge;axfdvg80h
Blaydon-on-Tyne;b6odr980h
Sinfin;b0wdrv80h
Shadwell;ax3dvu80h
Mexborough;b2ldsf80h
Newport Pagnell;aypdu080h
Neston;b20dnj80h
Tottenham Hale;axbdvu80h
Larkhall;b8tdkz80h
=GD
Saint George's;7vh94h2sg
=GE
Tbilisi;a5thcj6ho;Қарҭ|Тбилис|طفلس|تبلیس|トビリシ|第比利斯|트빌리시|Tbilis|Tbilsi|Tblisi|Tiflis|Tıflis|Tbiliso|Tbilisy|Tiblisi|Tpilisi|Ttuplis|Tbilisis|Tbilissi|Tbiliszi|Thbilisi|Tibilisi|Tiblissi|Tiphlida|Triphelis|Tbilisi osh|ทบิลิซิ|त्बिलिसी|थ्बिलीसी
Batumi;a5oh3n6hl
Kutaisi;a7fh6l6hl
Rustavi;a5ghcy6hk
Sokhumi;a9hh1v87j
Gori;a6nhaj6hi
Poti;a72h3r6hi
Zugdidi;a83h4b6hi
Ts’khinvali;a7bha56hi
Stantsiya Novyy Afon;a9oh1g6hi
Marneuli;a59hcg6hi
Khashuri;a6oh946hi
Samtredia;a73h5m6hh
Zestaponi;a6zh7j6hh
Telavi;a6gheb6hh
Kobuleti;a67h426hh
Akhaltsikhe;a5oh7f6hh
=GF
Cayenne;7bq9un29j
Matoury;7bh9uo29i
Saint-Laurent-du-Maroni;7da9px29i
Kourou;7cc9ts29i
Rémire-Montjoly;7bo9ut29h
=GG
Saint Peter Port;aredoy7qh
=GH
Kumasi;7gldri01q;クマシ|库马西|쿠마시|Kumase|Kumaso|Kumasy|Kumasis|Kumassi|Coomassie|Kumasi shaary|Кумаси|Кумасі|كوماسي|کوماسی
Accra;7dgdvg01p;アクラ|阿克拉|아크라|Acra|Akkr|Akra|Aakra|Akara|Akkra|Akrao|Nkran|Akkrae|Акра|Аккрæ|آکرا|أكرا|अक्रा|आक्रा|อักกรา
Tamale;7o4dto01n
Takoradi;7bmdr401m
Sekondi;7bpdr901m
Cape Coast;7c7dsj01l
Atsiaman;7dudv301l
Ashaiman;7dudvx01l
Obuase;7f8drd01l
Tema;7drdvy01l
Koforidua;7exdva01l
Teshi Old Town;7didvp01l
Sekondi-Takoradi;7bpdr401l
Ho;7gcdxb01k
Amanfrom;7deduw01k
Medina Estates;7drdvk01k
Twifu Praso;7dldrp01k
Japekrom;7j2do901k
Tema New Town;7dpdw301k
Sunyani;7iedpj01k
Hohoe;7hvdxb01k
Jirapa;7radoi01k
Kasoa;7ddduu01k
Gbawe;7didv501k
Techiman;7j3dqm01k
Bolgatanga;7rzdtn01k
Wa;7pydp201k
Mandela;7dfdv201k
Bawku;7sqdvc01k
Winneba;7cvdua01j
Ejura;7ijds801j
Berekum;7ipdou01j
Nungua;7dkdvs01j
Aflao;7f0dzb01j
Yendi;7o8dvz01j
Buduburam;7dcduo01j
Akim Oda;7ehdt901j
Swedru;7dedu201j
Kintampo;7kedr701j
Mampong;7hmds401j
Adenta;7dvdvl01j
Suhum;7esdur01j
Tafo;7gpdrj01j
Tarkwa;7cqdqh01j
Lashibi;7dsdvw01j
Nsawam;7e5dv101j
Dome;7dpdvc01j
Nkawkaw;7g7dtw01j
Agogo;7gwdt001j
Asamankese;7eadu601j
Wankyi;7jidq601j
Osu;7dgdvh01j
Konongo;7gedsm01j
Dunkwa;7ekdr201j
Taifa;7dqdvb01j
Mankesim;7cndt601i
Savelugu;7oqdtp01i
Domaa-Ahenkro;7i7do101i
Assin Foso;7dudrf01i
New Achimota;7dndva01i
Bibiani;7fxdpk01i
Mim;7h6dow01i
Prestea;7d3dq201i
Esim;7bjdps01i
Nkoranza;7j1dr901i
Elmina;7c4ds901i
Bimbila;7mldw601i
Anloga;7e3dyi01i
Akwatia;7esdtr01i
Sakumona;7dmdvv01i
Atebubu;7jkdta01i
Awoshi;7didv801i
Ahwiaa;7gsdrl01i
Bekwai;7fxdrm01i
Akatsi;7f1dy801i
Dzodze;7fcdys01i
Nsoatre;7ikdp501i
Effiduase;7h1ds401i
New Tafo;7godrj01i
Yegyi;7kvdu701i
Kade;7exdto01i
Anyinam;7fqduh01i
Atronie;7hvdpc01i
Begoro;7frduy01i
Kpandu;7hgdwt01i
Salaga;7lrduk01i
Navrongo;7s9dsz01i
Saltpond;7chdt201i
Elubo;7cpdob01i
Damongo;7n8dqy01h
Dambai;7kfdwi01h
Goaso;7gwdp001h
Shama Junction;7bydre01h
Apam;7codtx01h
Foso;7dudsf01h
Ahwiaa;7h6drf01h
Aburi;7e9dvj01h
Keta;7egdyr01h
Tepa;7hhdpz01h
Nalerigu;7r9duz01h
Bechem;7hpdqe01h
Duayaw-Nkwanta;7hxdq601h
=GI
Gibraltar;9qedh57pi
=GL
Nuuk;bwa9wc3rh
=GM
Serekunda;7zcclo07m
Brikama;7yvclr07k
Bununka Kunda;7zbcln07j
Sukuta;7z9cll07j
Talinding;7zbclp07j
Faji Kunda;7zaclp07j
Bakau;7zgclo07j
Banjul;7zdcly07i
Nema Kunku;7ytcnw07i
Farafenni;7zpcoo07i
Bakau New Town;7zfcln07i
Busumbala;7z2cln07i
Lamin;7z3cmd07i
Welingara;7z8clp07i
Brufut;7z6clh07i
Ibo Town;7zcclo07i
Sanchaba;7zacll07i
Latri Kunda;7zdcln07i
Gunjur;7yoclj07h
Manjai Kunda;7zdclm07h
Dippa Kunda;7zccln07h
New Jeshwang;7zdclq07h
Bakoti;7zbclm07h
Kunkujang;7z7clp07h
Sinchu Alagi;7z5clo07h
Kotu;7zecll07h
Abuko;7z8clq07h
Latri Sabiji;7z9clo07h
Tanji;7z3cld07h
Kanifing;7zdclp07h
Soma;7zbcov07h
Sanyang;7yvclg07h
Farato;7z8csi07h
=GN
Conakry;7oicu00fp;コナクリ|科納克里|코나크리|Conacri|Konakri|Konakry|Konakrio|Konakris|Конакри
Camayenne;7oictz0fp;Camayen
Nzérékoré;7jkd7i0fl
Kankan;7qvd650fl
Manéah;7p1cuq0fl
Dubréka;7p7cug0fl
Kindia;7pycw90fl
Siguiri;7tqd6j0fl
Dixinn;7ojcu10fl
Kissidougou;7nid3y0fk
Kamsar;7rlcre0fk
Labé;7tgcxw0fk
Gueckedou;7ltd3v0fk
Mamou;7qucyf0fk
Coyah;7ozcuu0fk
Faranah;7pwd260fj
Macenta;7lqd5p0fj
Fria;7qtcua0fj
Boké;7sdcsb0fj
Kolaboui;7s0cs00fj
Sangarédi;7suctr0fj
Koumbia;7uscui0fj
Kouroussa;7rld4k0fi
Lola;7jod8b0fi
Kolenté;7qlcxg0fi
Télimélé;7sacvt0fi
Dabola;7rud150fi
Bissikrima;7s5d1n0fi
Kintinian;7u8d5y0fi
Dogomet;7rfd0y0fi
Kérouané;7nrd6y0fi
Tougué;7ttczm0fi
Pita;7sqcxl0fi
Donghol-Sigon;7uscy20fi
Wendou Borou;7trctg0fi
Banko;7rsd280fh
Douako;7p1d3q0fh
Forécariah;7o7cvn0fh
Koundara;7wocv20fh
Dinguiraye;7tdd290fh
Yende Millimou;7mpd3r0fh
Beyla;7m5d7z0fh
Mandiana;7rjd7v0fh
Albadéria;7ojd3y0fh
Moussadou;7mdd820fh
Arfa Moussaïa;7rxd0f0fh
Kamabi;7wgcuq0fh
=GP
Les Abymes;8779552tj
Baie-Mahault;87794x2ti
Le Gosier;8719572ti
Petit-Bourg;86z94x2ti
Sainte-Anne;87395i2th
Le Moule;87d95l2th
Sainte-Rose;87d94m2th
Capesterre-Belle-Eau;86k9502th
Pointe-à-Pitre;8749532th
Basse-Terre;86g94j2tg
=GQ
Bata;736en510l
Malabo;78geke10l
Ebebiyin;73zerh10i
Ciudad de la Paz;72feq210d
=GR
Athens;9vifpx7fn
Thessaloníki;a2wfnp7fm
Pátra;9w9fke7fl
Piraeus;9vefpp7fl
Lárisa;a03fma7fl
Peristéri;9vmfpt7fl
Irákleion;9o5ftu7fl
Kallithéa;9vffpu7fk
Acharnés;9vsfpx7fk
Kalamariá;a2qfnr7fk
Níkaia;9vhfpp7fk
Glyfáda;9v6fq07fk
Volos;9zdfnr7fk
Ílion;9vnfpu7fk
Ilioúpoli;9vdfq17fk
Keratsíni;9vgfpm7fk
Évosmos;a2zfnn7fj
Khalándrion;9vmfq47fj
Néa Smýrni;9vffpv7fj
Maroúsi;9vpfq47fj
Agios Dimitrios;9vdfpx7fj
Zográfos;9vifq17fj
Aigáleo;9vifps7fj
Néa Ionía;9vofq07fj
Ioánnina;a06fhx7fj
Palaió Fáliro;9vdfpu7fj
Korydallós;9vifpp7fj
Tríkala;9zvfkh7fj
Výronas;9vgfpz7fj
Agía Paraskeví;9vmfq77fj
Galátsi;9vmfpz7fj
Chalkída;9wufpk7fj
Petroúpolis;9vofps7fj
Sérres;a44fpf7fj
Ródos;9r8g2e7fj
Kalamata;9swflf7fj
Kavála;a3qfrt7fj
Chaniá;9onfqr7fj
Kateríni;a1vfmj7fj
Alexandroupoli;a3hfvw7fj
Lamía;9y2fmb7fj
Irákleio;9vpfq17fj
Xánthi;a49ft57fj
Fylí;9vufpr7fj
Kifisiá;9vrfq57fj
Agrínio;9xafjh7fj
Stavroúpoli;a2zfnq7fj
Chaïdári;9vlfpr7fj
Komotiní;a48ful7fj
Sykiés;a2xfnr7fj
Dráma;a4bfr37fj
Véroia;a2kflo7fj
Álimos;9vbfpw7fi
Corfu;a02ffc7fi
Políchni;a2zfnr7fi
Lagkadás;a37fo37fi
Pylaía;a2sfnv7fi
Kozáni;a1yfkj7fi
Ágioi Anárgyroi;9vnfpw7fi
Argyroúpoli;9vbfpz7fi
Áno Liósia;9vsfpu7fi
Kardítsa;9zcfkw7fi
Rethymno;9o9fs07fi
Thívai;9wgfos7fi
Néa Ionía;9zefnp7fi
Cholargós;9vkfq47fi
Vrilissia;9vnfq77fi
Asprópyrgos;9vqfpj7fi
Kórinthos;9vefnr7fi
Ptolemaḯda;a2jfk87fi
Chalkidóna;a35fms7fi
Gérakas;9vmfqa7fi
Metamórfosi;9vrfq07fi
Kamaterón;9vqfpv7fi
Voúla;9v4fq27fi
Mytilene;9ynfxs7fi
Giannitsá;a3bfm97fi
Elefthério - Kordelió;a2yfnm7fi
Trípoli;9u7fm67fi
Agía Varvára;9vjfpq7fi
Kaisarianí;9vgfq17fi
Neapoli;a2xfnq7fi
Néa Filadélfeia;9vnfpy7fi
Moskháton;9vffps7fi
Pérama;9vhfph7fi
Salamína;9vgfpa7fi
Elefsína;9vofpe7fi
Chios;9wlfwm7fi
Mégara;9vjfou7fh
Kilkís;a3vfnj7fh
Dhafní;9vffpx7fh
Melíssia;9vpfq77fh
Pýrgos;9uofjk7fh
Árgos;9ujfn57fh
Artémida;9vhfqo7fh
Árta;9ysfib7fh
Livadeiá;9wsfnk7fh
Péfki;9vqfq37fh
Oraiókastro;a35fno7fh
Aígio;9w9flc7fh
Náousa;a2vflb7fh
Kos;9shfzt7fh
Koropí;9vafqb7fh
Édessa;a3cfl97fh
Néa Erythraía;9vtfq67fh
Peraía;a2ifnp7fh
Néa Mákri;9vtfqm7fh
Chortiátis;a2tfo67fh
Flórina;a3afjh7fh
Panórama;a2rfnz7fh
Préveza;9y8fhn7fh
Amaliáda;9v0fjb7fh
Vári;9v3fq47fh
Ellinikó;9v9fpy7fh
Sparta;9szfmb7fh
Orestiáda;a5afxp7fh
Efkarpía;a31fnr7fh
Agios Ioannis Rentis;9vgfpr7fh
=GS
Grytviken;2r8b2l711
=GT
Guatemala City;82o6wl2uo
Villa Nueva;82d6wd2un
Mixco;82n6wb2un
Cobán;84z6wz2ul
Quetzaltenango;8386ts2ul
Jalapa;82o6y12ul
Escuintla;81q6vt2ul
Villa Canales;8286wj2ul
Jutiapa;81o6yb2ul
Chichicastenango;83i6ux2ul
San Juan Sacatepéquez;82w6w82ul
Petapa;82a6wg2ul
Santa Lucía Cotzumalguapa;81u6v62uk
Chiquimula;8346z92uk
Coatepeque;82u6su2uk
Chinautla;82u6wm2uk
Totonicapán;83f6u82uk
Puerto Barrios;85p71w2uk
Chimaltenango;82q6vq2uk
Malacatán;83f6sa2uk
Retalhuleu;82e6tc2uk
Santa Catarina Pinula;82h6wm2uk
San José Pinula;82f6wv2uk
Huehuetenango;84k6tx2uk
Santa Cruz del Quiché;83r6ut2uk
Mazatenango;82d6tu2uk
Panzos;84s6z02uj
Amatitlán;8286w92uj
Palín;8206w22uj
Salamá;83y6x42uj
Chicacao;82e6ub2uj
Zacapa;83l6zb2uj
Comitancillo;83x6t52uj
Fraijanes;8276ws2uj
San Pedro Ayampuc;8326wr2uj
Patzún;82s6v72uj
San Francisco El Alto;83i6u02uj
Ostuncalco;83b6ti2uj
Soloma;85i6u12uj
Asunción Mita;81t6yt2uj
Colomba;82v6t72uj
Barberena;81r6x02uj
San Marcos;83k6t12uj
Antigua Guatemala;82g6vz2uj
Sololá;8316uq2uj
Masagua;81g6vn2uj
Cantel;8356ty2ui
Cuilapa;81o6x62ui
Patulul;8226us2ui
San Pedro Sacatepéquez;83l6t42ui
Nuevo San Carlos;82j6tb2ui
Jacaltenango;85j6t92ui
Yepocapa;82a6vd2ui
Tecpán Guatemala;8306v92ui
Ciudad Vieja;82c6vw2ui
Santiago Atitlán;82o6ul2ui
Comalapa;82y6vj2ui
Momostenango;83s6u32ui
San Benito;8906y82ui
Santiago Sacatepéquez;82o6w42ui
San Sebastián;82g6tf2ui
Jalpatagua;81a6xz2ui
Sumpango;82p6vz2ui
Nahualá;8386uc2ui
San Andrés Itzapa;82m6vo2ui
Guastatoya;8396xt2ui
San Luis Jilotepeque;82p6ys2ui
San Felipe;82m6tk2ui
Zaragoza;82p6vj2ui
La Gomera;8146v32ui
Alotenango;8296vs2ui
Nebaj;84t6ut2uh
Cabricán;83v6tf2uh
San Francisco Zapotitlán;82j6ts2uh
Santa María de Jesús;8296w12uh
Patzicía;82n6vf2uh
San Lucas Sacatepéquez;82l6w62uh
Esquipulas;82h6zt2uh
El Estor;8556zv2uh
Flores;8906ya2uh
San Pablo Jocopilas;82j6tz2uh
San Cristóbal Verapaz;84p6wo2uh
Salcajá;83c6ty2uh
Gualán;8406zs2uh
Morales;84z7182uh
Guazacapán;8136wu2uh
Puerto San José;80o6vq2uh
Palencia;82r6x02uh
Tiquisate;81o6u82uh
Lívingston;85z71h2uh
Jocotenango;82i6vy2uh
El Asintal;82k6t72uh
Poptún;87d6zm2uh
Santa Bárbara;8246ul2uh
Chisec;85x6x72uh
La Esperanza;83b6to2uh
San Pedro Carchá;8506x52uh
Sanarate;8336xg2uh
El Tejar;82p6vt2uh
El Palmar;82p6tm2uh
Rabinal;83x6wn2uh
San Andrés Xecul;83e6tw2uh
=GU
Dededo Village;7zkp2c9ej
Yigo Village;7zmp2h9eh
Tamuning;7zhp269eh
Tamuning-Tumon-Harmon Village;7zhp269eh
Mangilao Village;7zdp289eh
Hagåtña;7zgp239ec
=GW
Bissau;7uycoo08n
Bairro Militar;7uzcom08j
Gabú;7w4csi08j
Contumo;7uxcom08j
Reino de Bandim;7uxcoo08j
Missira;7uycon08i
Bafatá;7vtcra08i
Reino de Antula;7v2coq08i
Quelele;7uzcol08i
Plaque;7v0com08i
Luanda;7v0coo08i
Sintra-Nema;7uycoo08h
Xitole;7ulcqu08h
Belem;7uxcoo08h
Santa-Luzia;7v1cop08h
=GY
Georgetown;7gw9eg2wl
Linden;7ep9e12wj
New Amsterdam;7fd9g82wi
=HK
Hong Kong;8nwmp55er;香港|홍콩|हङकङ|हांगकांग|ฮ่องกง|Gankong|Gonkong|Honkong|Gon Kong|Hongkong|Honkongo|Khonkong|Victoria|Khongkong|Xianggang|Heung Gong|Hiong-geng|Chon'nk Kon'nk|Ганконг|Гонконг|شياڭگاڭ|هنگ کنگ
New Territories;8oamoz5eq;新界|Xinjie
Kowloon;8o0mp65ep;九龍|九龙|주룽|Koulun|Czjulun|Kaulunas|Chiu-lung|Цзюлун
Hong Kong Island;8nump65eo;香港岛|香港島|Hong Kong|Xianggangdao
Victoria;8nxmp25eo
Tuen Mun;8o7mol5en;屯門|屯门
Sha Tin;8o6mp65en;沙田
Sham Shui Po;8o1mp45en;深水埗區
Wong Tai Sin;8o3mp65en;黃大仙|黄大仙
Kowloon City;8o1mp75em;九龍城|九龙城
Tseung Kwan O;8o1mpd5em
Kwai Chung;8o5mp25em;葵涌
Tsuen Wan;8o5moz5em;荃灣
Tin Shui Wai;8oemoo5em;天水囲|天水围|天水圍
Tai Po;8odmp55em;大埔|大埔墟
Fanling;8ohmp25em
Ma On Shan;8o9mpc5el;馬鞍山|马鞍山|馬鞍山村
Yuen Long;8odmor5el;元朗|元朗墟
Yuen Long San Hui;8obmor5el;元朗|元朗新墟
Kowloon City Centre;8o1mp75el
Tsing Yi Town;8o3moy5el;青衣
Yuen Long Kau Hui;8odmor5el;元朗墟|元朗旧墟|元朗舊墟
Wan Chai;8nwmp55el;灣仔
Aberdeen;8ntmp35el;香港仔
San Tung Chung Hang;8nwmoi5ek;新东涌坑|新東涌坑
Tung Chung;8nxmoi5ek;东涌|東涌
Sha Tin Wai;8o6mp85ek;沙田|沙田围|沙田圍
Shap Pat Heung;8oamos5ek
Pok Fu Lam;8nvmp15ek
Nam Cheong;8o1mp35ej
Kowloon West End;8o1mp75ej
Mong Kok;8o0mp55ej;旺角
Siu Lek Yuen;8o6mp95ej;小瀝源
Sau Mau Ping;8o0mpb5ej;秀茂坪
Tiu Keng Leng;8nympd5ej;調景嶺|调景岭
LOHAS Park;8nxmpf5ej
Mei Foo;8o2mp25ej;美孚
Ping Shan;8ocmop5ej;屏山
Kai Tak;8o0mp85ej;啟德
Jordan;8nzmp55ei;佐敦
Pat Heung;8odmox5ei
Whampoa;8nzmp75ei
Choi Wan;8o1mp95ei
Kennedy Town;8nwmp15ei;堅尼地城
Mei Foo Sun Chuen;8o2mp25ei
Tsz Wan Shan;8o3mp85ei;慈云山|慈雲山
Hang Hau;8o0mpf5ei;坑口
Sai Kung;8o6mpf5ei;西貢|西贡
Tai Koo;8nwmpa5ei
Taikoo Shing;8nxmpa5ei
Yau Tong;8nympc5ei;油塘
Tai Kok Tsui;8o0mp45ei;大角咀
Shek Lei;8o5mp25ei;石梨
Whampoa Garden;8nzmp75ei
Yau Ma Tei;8nzmp55ei;油麻地
Lower Wong Tai Sin Estate (I & II);8o2mp75ei
South Horizons;8nsmp35ei
South Horizons (Estate);8nsmp35ei
Leighton Hill;8nwmp65ei;礼顿山|禮頓山
Chuk Yuen;8o3mp75ei;竹园|竹園
Lei Tung;8nsmp45ei;利東
Wah Fu;8ntmp25ei;华富邨|華富邨
Sham Tseng;8o5mot5ei;深井
Shek Kip Mei Estate;8o1mp55ei
Choi Wan Estate (I & II);8o1mp95ei
Tsim Sha Tsui;8nymp55ei;尖沙咀|尖沙嘴
Wu Kai Sha;8obmpc5eh
Laguna City;8nzmpb5eh
Shuen Wan;8ofmp95eh;船湾|船灣
Fo Tan;8o8mp75eh;火炭
Kam Tin;8ocmou5eh;錦田|锦田
Tsz Ching Estate;8o3mp85eh
Ha Tsuen;8odmon5eh;厦村市|廈村市
Tai Wo Hau;8o5mp05eh;大窝口|大窩口|大窝口村
Chek Chue;8nqmp95eh;赤柱
Shek O;8nrmpd5eh;石澳|石澳村
Sheung Shui;8okmp05eh;上水
Hong Lok Yuen;8oemp45eh;康樂園
Fairview Park;8ofmot5eh
Ma Tau Wai;8o0mp75eh;古瑾圍|碼頭圍|馬頭圍
Tai Wai;8o5mp65eh;大圍
Ho Man Tin;8o0mp65eh;何文田
Cheung Chau;8npmor5eh
Shui Chuen O;8o5mp85eh
San Tin;8oimov5eh;新田
Tuen Mun San Hui;8o8mom5eh;屯門新墟
Olympic;8o0mp45eh
Discovery Bay;8nymoq5eh;愉景灣
The Peak;8nump45eh;山頂
Sung Wong Toi;8o0mp75eh;宋皇臺
So Uk;8o2mp45eh;蘇屋
Kowloon Tong;8o1mp65eh;九龍塘|九龙塘
Siu Sai Wan Estate;8numpd5eh
Sai Wan Ho;8nwmpa5eh;西湾河|西灣河
So Uk Estate;8o2mp45eh
Tak Long Estate;8o1mp85eh
Keng Hau;8o5mp55eh
Un Chau Estate;8o2mp45eh
Lam Tin;8nzmpc5eh;藍田
Lei Tung Estate;8nsmp45eh
San Po Kong;8o2mp85eh;新蒲崗
Hok Yuen;8nzmp75eh
Laguna Verde;8nzmp75eh
Shek Kip Mei;8o1mp55eh;石硤尾
Heng Fa Chuen;8nwmpc5eh
Aldrich Bay;8nwmpa5eh
Choi Hung Estate;8o2mp95eh
Tai Shui Hang;8o9mpa5eh;大水坑
Wo Che;8o7mp75eh;禾輋
Tai Mei Tuk;8ofmpb5eh;大美督|大埔海滨|大埔海濱
Kadoorie;8o0mp65eh;嘉道理
Oi Man Estate;8nzmp65eh
Discovery Park;8o6moz5eh
Ting Kau;8o5mow5eh;汀九
Chuk Yuen North Estate;8o3mp75eh
Wang Tau Hom;8o2mp75eh
Pak Tin Estate;8o2mp55eh
Tin Wan;8ntmp35eh;田湾|田灣
Wang Tau Hom Estate;8o2mp75eh
Kwun Tong;8nzmpa5eh;官塘|観塘|觀塘
Kam Ying;8oampc5eh
San Tin;8o5mp65eh;新田
Sun Tin Wai;8o5mp75eh
Sam Shing;8o6mom5eh
Wong Chuk Hang;8nsmp55eh
Yeung Uk Tsuen;8odmoq5eh
Braemar Hill;8nwmp85eh
Hoi Lai Estate;8o1mp35eh
Mount Davis;8nwmp05eh
Pok Hong;8o6mp85eh
Fu Cheong Estate;8o1mp35eh
To Kwa Wan;8o0mp75eh;土瓜灣
Lee On;8obmpc5eh
Butterfly;8o6mok5eh
Prince Edward;8o0mp65eh
Fortress Hill;8nxmp75eh;炮臺山|砲台山
Mid Levels;8nwmp35eh
Tung Tau Estate;8o1mp75eh
City One;8o7mp85eh;第一城
City Garden;8nxmp75eh
Yiu Tung Estate;8nwmpa5eh
=HN
Tegucigalpa;81475r4fo
San Pedro Sula;85373h4fo
Danlí;80z77i4fl
La Ceiba;85s76y4fl
La Ceiba;85t76t4fl
Puerto Cortez;85z73r4fl
Catacamas;83979f4fl
Choloma;85d73p4fl
Siguatepeque;82k7414fk
Olanchito;85077j4fk
Tocoa;85k7944fk
El Progreso;84s7444fk
Santa Cruz de Yojoa;83m73v4fk
Ciudad Choluteca;7yz75u4fk
San Pedro de Copán;82m7154fj
Comayagua;82674k4fj
Omoa;85u73g4fj
El Negrito;84k74e4fj
Sonaguera;85f7874fj
Quimistán;84n72f4fj
La Lima;84v73s4fj
Teupasenti;81i7764fj
Lepaera;83271x4fi
Macuelizo;84j7224fi
Victoria;83i7594fi
Sabá;84z78f4fi
Juticalpa;82q78i4fi
Villa de San Antonio;81t74n4fi
Villanueva;84j73l4fi
Dulce Nombre de Culmí;83y7af4fi
El Rosario;82i74b4fi
Tela;85t7514fi
Santa Rosa de Copán;83171e4fi
Potrerillos;84b73o4fi
La Iguala;82m7294fi
Arizona;85f75g4fi
San Francisco de Yojoa;83p73n4fi
Marcovia;7yx75h4fi
San Luis;84172c4fi
Sabanagrande;80d75m4fi
San Antonio de Cortés;84073g4fh
Gualaco;83r78x4fh
San Lorenzo;7za7534fh
Yamaranguila;81o72w4fh
Santa Rita;84873w4fh
Iriona;86d7bn4fh
Esquías;82y75b4fh
Langue;7zu74j4fh
Cofradía;84s7354fh
Azacualpa;82v73b4fh
Yorito;83v75k4fh
Corquín;82h7154fh
San José de Colinas;83s72q4fh
El Paraíso;80j77l4fh
Colomoncagua;80r72s4fh
Sulaco;83g75l4fh
Atima;83h7274fh
La Paz;81s74g4fh
Morocelí;81876p4fh
Cucuyagua;82p7154fh
San Juan de Flores;81n7694fh
Belén Gualcho;82871c4fh
Yoro;84275z4fh
Erandique;81k72a4fh
Santa Bárbara;83g72w4fh
=HR
Zagreb;ah9f4e8vn
Split;aavf5o8vl
Rijeka;afxf048vk
Osijek;agjfbx8vk
Zadar;ackf2b8vj
Sesvete;ahbf4s8vj
Pula;aeneyh8vj
Slavonski Brod;afgfa28vj
Karlovac;agdf378vi
Centar;ah9f4e8vi
Varaždin;aimf5e8vi
Šibenik;abhf458vi
Velika Gorica;agzf4o8vi
Vinkovci;aftfc88vi
Sisak;agbf5i8vi
Dubrovnik;a8gfab8vi
Bjelovar;ahif6t8vi
Koprivnica;ai8f6r8vh
Vukovar;afzfcs8vh
Solin;aayf5t8vh
Zaprešić;ahef3x8vh
Samobor;ah8f3o8vh
Đakovo;afvfb58vh
Požega;afyf958vh
Čakovec;aiuf5n8vh
Liberpolis;ah5fcg8v7
=HT
Port-au-Prince;8di8b23wo;太子港|포르토프랭스|ポルトープランス|Potoprens|Portoprensa|Portoprinco|Port-o-Prens|Port-o-Prins|Port-o-Prehns|Porto Principe|Puerto Principe|Portus Principis|پورتوپرنس|پورتو پرنس|Порт-о-Пренс|Порт-о-Прэнс|ปอร์โตแปรงซ์|पोर्ट-ऑ-प्रिंस|पोर्ट-औ-प्रिन्स
Carrefour;8dh8aw3wn
Delmas;8di8b63wm
Pétionville;8df8b73wm
Port-de-Paix;8he89p3wm
Saint-Marc;8f38a23wm
Croix-des-Bouquets;8dm8bd3wl
Dessalines;8fi8ak3wl
Jacmel;8co8ai3wl
Cap-Haïtien;8gw8bg3wl
Léogâne;8df8a93wl
Arcahaie;8e58al3wk
Les Cayes;8cj8753wk
Tigwav;8d789l3wk
Jérémie;8dt8643wk
Saint-Michel de l'Atalaye;8ft8b33wk
Miragoâne;8d988z3wk
Gonaïves;8g18a33wk
Thomazeau;8dt8br3wj
Grangwav;8d789v3wj
Verrettes;8ex8ap3wj
Kenscoff;8d98b83wj
Saint-Raphaël;8g08bg3wi
Ti Port-de-Paix;8hd89p3wi
Lenbe;8gr8aw3wi
Gressier;8di8aj3wi
Terrier Rouge;8gk8c53wh
Hinche;8f68bz3wh
Fond Parisien;8df8c23wh
Grand Gosier;8cj8c83wh
Désarmes;8er8ax3wh
=HU
Budapest;alyfcw7lp;布达佩斯|ブダペスト|부다페스트|بودابست|بوداپست|Boedapes|Boudapes|Boedapest|Budapesht|Budapesta|Budapeste|Budapesti|Budapesto|Budapeszt|Ofen-Pest|Boudapeste|Budaipeist|Budapescht|Budapeshha|Budapestas|Budimpesta|Budimpeshta|Budapestinum|Budapesht osh|Будапешт|Будапеща|बुडापेस्ट|बुदापेस्त|บูดาเปสต์
Pest;alyfd07lo;佩斯|بشت|페슈트|Пешт|Пеща|ペシュト|Pesht|Pesta|Peste|Pesth|Pestj|Pesto|Peszt|Peshha|Peshta|Pestinum
Buda;alyfcv7ln
Debrecen;am1fk27ll
Szeged;aihffz7ll
Miskolc;anmfhq7ll
Pécs;ai0fan7ll
Budapest XI. kerület;alwfcw7ll
Zugló;am0fd37lk
Győr;amgf907lk
Budapest III. kerület;am2fcx7lk
Nyíregyháza;an8fkc7lk
Budapest XIII. kerület;am1fd07lk
Kecskemét;akbfep7lk
Székesfehérvár;al3fb57lk
Újpest;am5fd07lk
Budapest IV. kerület;am4fd17lk
Budapest XVIII. kerület;alsfda7lk
Budapest II. kerület;am0fcu7lk
Budapest VIII. kerület;alxfcz7lk
Budapest XV. kerület;am4fd47lk
Kőbánya;alwfd67lk
Budapest XVII. kerület;alwfdh7lk
Szombathely;al7f667lk
Józsefváros;alxfcz7lk
Budapest XXI. kerület;alqfcz7lk
Szolnok;al2fg47lj
Budapest XVI. kerület;alzfd97lj
Tatabánya;am7fb27lj
Kaposvár;aitf9g7lj
Budapest XX. kerület;alsfd27lj
Érd;alnfcj7lj
Sopron;amhf637lj
Angyalföld;am3fd07lj
Erzsébetváros;alyfcz7lj
Zalaegerszeg;ak4f6s7lj
Budapest XIX. kerület;altfd77lj
Kispest;altfd67lj
Békéscsaba;ajofim7lj
Ferencváros;alwfd17lj
Pestlőrinc;alrfde7lj
Veszprém;aktf9r7lj
Budapest XII. kerület;alxfct7lj
Eger;an2fgl7lj
Kelenföld;alvfcv7lj
Budapest XXII. kerület;alrfcw7lj
Dunaújváros;akgfcm7lj
Nagykanizsa;aj1f777lj
Hódmezővásárhely;aiyfgh7lj
Budapest VI. kerület;alyfcz7li
Cegléd;al1ff07li
Rákospalota;am4fd47li
Baja;aiafcn7li
Újlipótváros;am0fcx7li
Újpalota;am2fd67li
Pesterzsébet;alrfd47li
Vác;amqfd67li
Salgótarján;anmff07li
Szekszárd;airfbz7li
Középső-Ferencváros;alvfd07li
Óbuda;am3fcv7li
Pápa;alhf8j7li
Gyöngyös;amqffd7li
Kazincbarcika;ao1fhb7li
Gödöllő;am8fds7li
Gyula;ajlfj47li
Hajdúböszörmény;amffjs7li
Kiskunfélegyháza;ajrff47li
Ajka;akuf8s7li
Orosháza;ajdfhf7li
Mosonmagyaróvár;amzf7z7li
Dunakeszi;amcfd67li
Ózd;anyfge7li
Kiskunhalas;aizfe47li
Alsórákos;am1fd47li
Esztergom;amrfc27li
Szentes;ajmfga7li
Jászberény;alyffc7li
Komló;aibfaq7li
Budafok;alqfcw7li
Budapest V. kerület;alyfcx7li
Óhegy;alwfd77li
Újszeged;aihfg17li
Makó;aiefgw7li
Budaörs;alufco7li
Rákoskeresztúr;alvfdi7li
Szigetszentmiklós;alifcw7li
Budapest I. kerület;alyfcw7li
Naphegy;alxfcv7li
Hajdúszoboszló;altfjg7li
Szentendre;amffd07lh
Nagykőrös;aknfey7lh
Tata;amdfaw7lh
Rákosszentmihály;am0fd87lh
Siófok;akafa67lh
Törökszentmiklós;al2fgq7lh
Karcag;algfi57lh
Gyál;almfde7lh
Monor;aljfe17lh
Várpalota;al4fae7lh
Békés;ajxfip7lh
Dombóvár;aiufae7lh
Paks;ajifce7lh
Budapest XXIII. kerület;alofd37lh
Oroszlány;alxfav7lh
Hatvan;amffeo7lh
Mátyásföld;alzfdd7lh
Lágymányos;alvfcy7lh
Keszthely;ajxf7w7lh
Vecsés;alpfdl7lh
Mezőtúr;akkfhb7lh
Komárom;ammfac7lh
Mátészalka;an8fm07lh
Mohács;ahrfbx7lh
Csongrád;ajrffy7lh
Csepel-Csillagtelep;alpfcy7lh
Kalocsa;aj9fcp7lh
Kisvárda;anyflc7lh
Szarvas;ak7fh37lh
Veresegyház;amdfdm7lh
Diósgyőr;anmfhg7lh
Sátoraljaújhely;aoffk67lh
Hajdúnánás;amxfjj7lh
Balmazújváros;amafjb7lh
Mezőkövesd;amufh67lh
Tapolca;ak8f8g7lh
Százhalombatta;alhfcm7lh
Tiszaújváros;an5fik7lh
Dunaharaszti;aljfd27lh
Fót;amafdb7lh
Dabas;al3fdn7lh
Abony;al3ffk7lh
Püspökladány;algfio7lh
Csepel-Királyerdő;alofd17lh
Göd;amgfd57lh
Sárvár;al9f727lh
Sashalom;am0fd97lh
Gyomaendrőd;akdfhv7lh
Kiskőrös;ajifdl7lh
=ID
Jakarta;6grm4t5hs;勿礁維|勿礁维|耶加達|자카르타|ジャカルタ|バタヴィア|Sakata|Batavia|Cakarta|Gakarto|Iacarta|Jacarta|Jakarte|Xacarta|Yakarta|D'akarta|Djakarta|Dzakarta|Giacarta|Jogkarta|Tzakarta|Xhakarta|Zhakarta|Djogkarta|Dzhakarta|Jayakarta|Sundapura|Yajgyadaz|Big Durian|Dzhakartae|Dki Jakarta|Sunda Kelapa|جکارتا|جکارتہ|Џакарта|Жакарта|जकार्ता|จาการ์ตา
Surabaya;6dvml75hq;泗水|スラバヤ|수라바야|Сурабая|Сурабайа|Surabaia|Surabaja|Surabajo|Soerabaja|Soerabaya|Sourabaya|Sourampagia|Kota Surabaya|Kutha Surabaya|سورابايا|سورابایا|สุราบายา
Bekasi;6gpm575hq;ブカシ|勿加泗|브카시|بکاسی|بيكاسي|Bekaso|Bekasis|Kota Bekasi|Kutha Bekasi|Бекаси|Бекасі
Bandung;6esm6x5hq;万隆|萬隆|반둥|バンドン|Бандуң|Бандунг|بندونگ|بنڈونگ|บันดุง|Banduna|Bandunq|Bandoeng|Bandungo|Bandungas|Bantoun'nk|Kota Bandung|Kuta Bandung|Kutha Bandhung
Medan;77yli35hq;棉蘭|메단|メダン|مدان|ميدان|Медан|เมดาน|Medana|Medano|Mentan|Medanas|Kota Medan|Kuta Medan|Kutha Medan
Depok;6g8m4q5hp;德博|德博市|デポック|Депок|Дэпак|Dehpak|Depokas|Kota Depok|Depok kutha
Tangerang;6gum475hp;坦格朗|當格朗|탕에랑|タンゲラン|تانگرانگ|Tangarang|Tanqeranq|Tangerango|Tangerangas|Kota Tangerang|Kutha Tangerang|Тангеранг
Palembang;6pwlyz5hp;巨港|旧港|팔렘방|パレンバン|Palimbao|Palembanq|Pelembang|Palembangas|Palempan'nk|Kota Palembang|Kutha Palembang|پالمبانگ|باليمبانج|Палембанг|पालेंबांग|ปาเล็มบัง
Semarang;6elmeq5hp;三孖冷|三宝垄|三寶瓏|스마랑|スマラン|سمارانگ|سيمارانج|เซมารัง|Samarang|Semaranq|Semaran'nk|Semarangas|Kota Semarang|Kutha Semarang|Семаранг
Makassar;6jpn3r5vp;마카사르|マカッサル|Makasar|Macassar|Makasser|Makasaras|Djumpandang|Ujungpandang|Kota Makassar|Udjung Pandang|ماکاسار|Макассар
South Tangerang;6gjm4g5hp;Tangerang Selatan
Batam;717lwy5ho;巴淡島|バタム島|باتم|باتام|बाटम|바탐 섬|Батам|บาตัม|Kota Batam|Kutha Batam
Jepara;6fpmff5ho;Japara|Yapara|Djapara|Djepara|جيبارا
Pekanbaru;6zglps5ho;北干巴魯|페칸바루|プカンバル|پکانبارو|پیکانبارو|Pakanbaru|Pakanbahru|Pakanbaroe|Pekanbaroe|Kota Pekanbaru|Kutha Pekanbaru|Пеканбару
Bandar Lampung;6ixm0e5ho;班達楠榜|반다르람풍|バンダールランプン|Telukbetung|Bandarlampung|Tanjungkarang|Tanjungkarang-Telukbetung|بندر لامپونگ|Бандар-Лампунг
Bogor;6fpm4n5ho;茂物|보고르|ボゴール|Богор|بوكور|بوگور|Bogoro|Buitenzorg|Kota Bogor|Kutha Bogor
Padang;6vdlmr5ho
Malang;6bumkv5ho
Samarinda;6wnmxf5vo
Tasikmalaya;6dnm8m5ho
Serang;6h0m2v5hn
Balikpapan;6uhmwj5vn
Pontianak;6xxmbo64n
Situbondo;6clmop5hn
Denpasar;69zms25vn
Banjarmasin;6osmqb5vn
Jambi City;6tklvu5hn
Cimahi;6exm6q5hn
Surakarta;6d0mfv5hn
Kupang;65rnfd5vn
Cilegon;6hbm2l5hn
Manado;724nit5vn
Mataram;6a6muk5vn
Jayapura;6qzoqw5im
Bengkulu;6ngls35hm
Palu;6vhn4z5vm
Yogyakarta;6ccmek5hm
Sukabumi;6esm515hm
Cibinong;6g0m4t5hm
Kendari;6myncc5vm
Dumai;72nlps5hm
Ambon;6nqns25im
Cirebon;6fdm9k5hm
Pekalongan;6evmco5hm
Palangkaraya;6rvmog64m
Percut;783lim5hm
Karawang;6ghm645hm
Kediri;6camj65hm
Jember;6bbmnu5hm
Tegal;6exmb65hm
Banjarbaru;6ogmr05vm
Cileungsir;6g9m545hm
Binjai;780lhl5hm
Pematangsiantar;768lj75hm
Banda Aceh;7del8t5hm
Pasarkemis;6gvm3x5hm
Cilacap;6cjmat5hm
Tarakan;777myn5vm
Singkawang;70jmaq64m
Padangsidempuan;71uljr5hm
Probolinggo;6chmmi5hm
Toli-Toli;70wn7m5vm
Lubuklinggau;6ovltq5hl
Purwokerto;6dembf5hl
Tanjung Pinang;70kly65hl
Pangkalpinang;6s3m2r5hl
Batu;6c5mkl5hl
Bitung;720njl5vl
Klungkung;6abmsk5vl
Sorong;6vko0m5il
Citeureup;6fzm4w5hl
Pasuruan;6crmln5hl
Loa Janan;6wemxa5vl
Ternate;707npu5il
Banjar;6e0m6f5hl
Ciputat;6gom4e5hl
Ciampea;6ftm4e5hl
Gorontalo;6zindu5vl
Madiun;6ctmhs5hl
Rengasdengklok;6gwm625hl
Lhokseumawe;7celdv5hl
Sumedang;6eym7s5hl
Salatiga;6dnmex5hl
Sawangan;6g8m4l5hl
Bontang;6ydmyd5vl
Padalarang;6f0m6j5hl
Curug;6glm405hl
Tanjungbalai;769ll85hl
Labuan Bajo;6aen515vl
Palopo;6ppn5w5vl
Pemalang;6evmbu5hl
Langsa;7aflg55hl
Lembang;6f3m6y5hl
Singosari;6c3mkz5hl
Metro;6jtm0j5hl
Purwakarta;6fsm6g5hl
Teluknaga;6h2m485hl
Cianjur;6f2m5m5hl
Pamulang;6gem4i5hl
Cikupa;6gom3v5hl
Ungaran;6e6meo5hl
Plumbon;6fem9b5hl
Sampit;6qzmlr64l
Bima;6ain1t5vl
Banjaran;6efm6v5hl
Baubau;6iunck5vl
Blitar;6bimjl5hl
Parepare;6mvn4b5vl
Sunggal;77ylhy5hl
Perbaungan;77xliw5hl
Watampone;6len695vl
Astanajapura;6f4m9r5hl
Timika;6l7ofo5il
Kisaran;76alkq5hl
Mojokerto;6d9mkb5hl
Payakumbuh;6xelnj5hl
Batang;6g0mfj5hl
Purwodadi;6ebmg45hl
Sidoarjo;6dbml45hl
Weru;6fdm9e5hl
Subang;6frm7c5hl
Rangkasbitung;6gcm355hl
Gunungsitoli;71llf55hl
Baturaja;6mjlxd5hl
Adiwerna;6eqmb55hl
Singaraja;6bhmrp5vl
Manokwari;6vmo8e5ik
Garut;6dwm7s5hk
Martapura;6ojmr25vk
Parung;6g6m4h5hk
Magelang;6d9me65hk
Cikampek;6g6m6i5hk
Klaten;6clmf95hk
Jombang;6d1mjr5hk
Paseh;6edm7f5hk
Sukawati;6afmrl5vk
Lumajang;6bfmmi5hk
Indramayu;6gfm8w5hk
Kotamobagu;702nhb5vk
Bukittinggi;6x5lmt5hk
Sepatan;6h0m425hk
Banyuwangi;6b5mpo5hk
Tebingtinggi;779ljg5hk
Kedungwuni;6enmcl5hk
Merauke;6aeoq15ik
Soreang;6ehm6o5hk
Pamanukan;6gkm7h5hk
Lawang;6c8ml15hk
Kuningan;6emm9c5hk
Cileunyi;6eqm7b5hk
Kresek;6gzm3i5hk
Ciamis;6dnm8z5hk
Pelabuhanratu;6elm3z5hk
Pangkalanbuun;6qkmi364k
Pati;6f8mgg5hk
Cikarang;6gmm5n5hk
Pare;6cfmjo5hk
Arjawinangun;6fjm955hk
Subulussalam;75elfw5hk
Depok;6cgmer5hk
Prabumulih;6ohlxj5hk
Tanjung Pandan;6qfm6z5hk
Rantauprapat;73ullb5hk
Belawan;78ili45hk
Sungai Penuh;6salpn5hk
Sungailiat;6svm2s5hk
Grogol;6cwmfu5hk
Negara;6asmqe5vk
Sumedang Utara;6ezm7s5hk
Nabire;6oooce5ik
Dukuhturi;6eumb05hk
Sumber;6f8m9c5hk
Wonosobo;6dkmda5hk
Palimanan;6fdm965hk
Selong;69zmvp5vk
Pamekasan;6e4mn75hk
Pandeglang;6ghm2r5hk
Sibolga;72ulie5hk
Pariaman;6walm45hk
Kudus;6f4mfw5hk
Caringin;6fdm4q5hk
Tual;6ido4r5ik
Banjar;6b9mrd5vk
Cicurug;6f6m4m5hk
Kartasura;6d1mfm5hk
Klangenan;6fdm985hk
Maumere;6a2nbh5vk
Wonosari;6bvmf85hk
Ende;69gn9y5vk
Bojonegoro;6e5mis5hk
Bangkalan;6efml65hk
Kasihan;6c9meh5hk
Bangil;6cwmle5hk
Sintang;6y7mhq64k
Sumenep;6ejmoa5hk
Margahayukencana;6enm6t5hk
Galesong;6j8n3l5vk
Atambua;68pnix5vk
Muntilan;6cymed5hk
Kedungwaru;6blmiw5hk
Serpong;6ggm4a5hk
Genteng;6armp35hk
Gedangan;6dhml55hk
Ponorogo;6c5mhm5hk
Ciranjang-hilir;6f2m5y5hk
Tuban;6eumja5hk
Kebomas;6e3mkv5hk
Karangsembung;6ezm9s5hk
Tarub;6ermb95hk
Ubud;6adms75vj
Majene;6o6n2h5vj
Gresik;6e5mky5hj
Sewon;6c4mek5hj
Kabanjahe;76mlhl5hj
Solok;6vslnm5hj
Majalengka;6f0m8n5hj
Jatibarang;6g1m8w5hj
Sragen;6ddmge5hj
Pagar Alam;6mtlut5hj
Raha;6kkncw5vj
Mertoyudan;6d4me75hj
Bondowoso;6c1mo65hj
Nganjuk;6cvmiu5hj
Tanjung Selor;75wmy15vj
Melati;6cjmel5hj
Nunukan;79imyt5vj
Sokaraja;6dambl5hj
Gamping Lor;6ccmeh5hj
Wamena;6mmolz5ij
Lahat;6nhlvm5hj
Polewali;6ohn3i5vj
Tulungagung;6blmiu5hj
Ambarawa;6dumeo5hj
Meulaboh;79ilb15hj
Muncar;6almpl5hj
Bantul;6c3meh5hj
Tulangan Utara;6d9mkx5hj
Godean;6cfmed5hj
Sumbawa Besar;6afmy65vj
Abepura;6qsoqn5ij
Slawi;6emmb65hj
Pecangaan;6femfj5hj
Kertosono;6cymje5hj
Boyolali;6d3mf85hj
Sengkang;6mjn5f5vj
Lamongan;6e8mka5hj
Baki;6cvmfq5hj
Padangpanjang;6wqlmx5hj
Weleri;6enmdr5hj
Jatiwangi;6fbm8q5hj
Baekrajan;6f7mfx5hj
Kota Sambas;71smbm5dj
Purbalingga;6dhmbs5hj
Balai Pungut;70ylpd5hj
Mendaha;6v6lvr5hj
Sleman;6ckmek5hj
Pandak;6c1med5hj
Barabai;6qumsi5vj
Amuntai;6rams55vj
Besuki;6cjmnu5hj
Taliwang;69qmwl5vj
Wedi;6cimf65hj
Cepu;6e5mhz5hj
Dompu;6aan125vj
Pemangkat;719map64j
Sampang;6e1mmk5hj
Tanjungagung;6n2lwc5hj
Terbanggi Besar;6kgm0a5hj
Dobo;6i0o8v5ij
Kepanjen;6bfmkp5hj
Blora;6enmhi5hj
Comal;6etmc95hj
Gombong;6cvmc75hj
Sidikalang;75nlh35hj
Sangkapura;6hrmkx5hj
Kawalu;6dim8l5hj
Amahai;6oqnu45ij
Jatiroto;6c4mgo5hj
Labuhan Deli;78slhz5hj
Gampengrejo;6cgmj75hj
Gatak;6cxmfi5hj
Tanjung Balai;70slva5hj
Singaparna;6dlm8b5hj
Banyumas;6d5mbl5hj
Pameungpeuk;6eim6w5hj
Berastagi;76vlhn5hj
Kefamenanu;67rnhs5vj
Buduran;6ddml45hj
Luwuk;6vdnd35vj
Sungai Raya;6zymai64j
Bireun;7cglcm5hj
Balung;6cjmog5hj
Poso;6u4n7f5vj
Karanganom;6crmfa5hj
Singkil;74dlfn5hj
Muara Teweh;6vdmr664j
Curup;6odlss5hj
Candi Prambanan;6chmex5hj
Sentani;6qvoqb5ij
Bambanglipuro;6bxmec5hj
Ketanggungan;6eqmah5hj
Rembangan;6femha5hj
Gebog;6famfw5hj
Sabang;7edl8s5hj
Kencong;6b0mmx5hj
Panji;6cjmoy5hj
Indralaya;6ozlys5hj
Baturaden;6dqmbe5hj
Kotabumi;6kllzc5hj
Biak;6uqoe05ii
Diwek;6cymjr5hi
Ruteng;6a3n6m5vi
Sinjai;6jsn615vi
Rantepao;6prn525vi
Reuleuet;7cilbg5hi
Soe;66mnh85vi
Juwana;6fcmgr5hi
Pekan Bahapal;76nljh5hi
Rajapolah;6dym8j5hi
Benoa;69pms25vi
Tarutung;73llix5hi
Wiradesa;6evmci5hi
Manggar;6q0m8r5hi
Majenang;6dqma45hi
Buaran;6efmcb5hi
Krian;6dfmkq5hi
Wonopringgo;6emmci5hi
Masamba;6qxn695vi
Namlea;6oynp15ii
Jekulo;6f3mg55hi
Karangnongko;6ccmf75hi
Tanjung;6rzmsl5vi
Simpang;6uilx65hi
Masohi;6ounu95ii
Srono;6aompf5hi
Waingapu;676n625vi
Mulia;6npojb5ii
Tambolaka;67tn385vi
Kualakapuas;6pnmpr5hi
Wangon;6d4max5hi
Tahuna;781nkl5vi
Sumberpucung;6bcmkg5hi
Praya;69tmuz5vi
Pangururan;759li65hi
Pandaan;6crml15hi
Tobelo;72tnrl5ii
Kuala Tungkal;6vqlve5hi
Tabanan;6aamrt5vi
Lebaksiu;6efmb65hi
Labuan;6gam1z5hi
Mlonggo;6fvmfi5hi
Bengkayang;70bmc064i
Tondano;71nniz5vi
Tanggulangin;6d6ml25hi
Jaten;6cymg25hi
Boyolangu;6bgmit5hi
Katobu;6klncx5vi
Amlapura;6ajmt65vi
Amlapura city;6ajmt55vi
Airmadidi;71znj65vi
Bandar;73pll35hi
Kutoarjo;6ckmdb5hi
Karangampel;6g2m995hi
Panarukan;6cmmog5hi
Sidareja;6d8ma75hi
Dalung;6a1mrx5vi
Pakisaji;6blmks5hi
Selogiri;6cemfz5hi
Lewoleba;6arneu5vi
Kuta;69smrx5vi
Maros;6k3n455vi
Sanana;6sanly5ii
Kawasi;6tlnpx5ii
Srandakan;6byme95hi
Singojuruh;6awmpb5hi
Wongsorejo;6btmps5hi
Trenggalek;6bkmib5hi
Lasem;6ffmhl5hi
Utan;6gum535hi
Ceper;6cpmfg5hi
Randudongkal;6eambo5hi
Balapulang;6efmb25hi
Kraksaan;6cgmn05hi
Batubulan;6a2ms65vi
Jogonalan;6cmmf25hi
Mranggen;6ehmf05hi
Deli Tua;77rli45hi
Margasari;6ebmau5hi
Sijunjung;6w2loi5hi
Tomohon;71onio5vi
Sofifi;702nqc5ii
Bulakamba;6exmao5hi
Demak;6evmfc5hi
Paciran;6ewmk65hi
Babat;6e9mjk5hi
Stabat;78dlhh5hi
Driyorejo;6djmku5hi
Muntok;6s9m045hi
Tayu;6fumgh5hi
Ngunut;6bhmj65hi
Colomadu;6d3mfn5hi
Wanaraja;6e3m7y5hi
Welahan;6f4mfk5hi
Teluk Dalam;6zllfo5hi
Malinau;77zmvy5vi
Pangkalan Brandan;796lh05hi
Soko;6d8mkb5hi
Bungku;6qxnat5vi
Teluk Nibung;76clla5hi
Tanjungtiram;79alh95hi
Seririt;6b9mra5vi
Bintuni;6s5o6w5ii
Lahewa;71vldx5hi
Delanggu;6cumfg5hi
Prigen;6comku5hi
Blangpidie;78eld05hi
Pundong;6bxmej5hi
Kalianget;6efmoi5hi
Agats;6ilojq5ii
Ngemplak;6d1mfk5hi
Trucuk;6ckmfe5hh
Daruba;73pnsd5ih
Mojoagung;6czmk35hh
Kroya;6ctmbh5hh
Dampit;6b7ml75hh
Tuban;69qmrx5vh
Ngoro;6comju5hh
Waisai;6xcnyj5ih
Gambiran Satu;6apmp35hh
Kamal;6e3ml45hh
Gongdanglegi Kulon;6bamkw5hh
Ngawi;6dgmhl5hh
Kebonarun;6cmmf45hh
Namrole;6nbno15ih
Tiom;6n4okl5ih
Muara Bungo;6tvlrn5hh
Bedugul;6ajmt35vh
Teminabuan;6u0o2p5ih
Kalabahi;6b6nhz5vh
Fakfak;6pwo3i5ih
Manismata;6r5mgf64h
Barus;73llhc5hh
Sigli;7cylak5hh
Ransiki;6tto8p5ih
Paropo;75zlho5hh
Tongging;762lho5hh
Leuwiliang;6e8m6m5hh
=IE
Dublin;b25den7oo;都柏林|더블린|دبلن|ڈبلن|ダブリン|Dulyn|Dablin|Diblin|Divlyn|Dulenn|Eblana|Difelin|Dublina|Dublini|Dublino|Dublinu|Dueblin|Dyflinn|Doublino|Dublinas|Dublin city|Даблин|Дублин|डब्लिन|दब्लिन|ดับลิน
South Dublin;b21dee7om
Cork;ay6d8h7ol
Limerick;b0ad827ok
Galway;b1zd6v7ok
Tallaght;b21deb7ok
Waterford;az6dc97oj
Drogheda;b38ded7oj
Dundalk;b40de67oj
Swords;b2ideq7oi
Navan;b31ddg7oi
Bray;b1sdf27oi
Dún Laoghaire;b21dey7oi
Ennis;b0sd717oi
Carlow;b0sdcr7oi
Douglas;ay3d8k7oi
Tralee;az7d527oi
Portlaoise;b1bdbq7oh
Athlone;b2ed9y7oh
Droichead Nua;b1qdd47oh
An Muileann gCearr;b2odbm7oh
Letterkenny;b6ndaj7oh
Sandyford;b1zdep7oh
Greystones;b1mdf67oh
Balbriggan;b2xdeu7oh
Kilkenny;b09dbv7oh
Wexford;azdde27oh
Naas;b1uddh7oh
Sligo;b4rd8h7oh
Celbridge;b26ddu7oh
Finglas;b2bdei7oh
Ballincollig;ay4d867oh
Cluain Meala;azfdam7oh
Carrigaline;axxd8o7oh
Templeogue;b22deh7oh
Rathfarnham;b22dek7oh
Maynooth;b2addp7oh
Malahide;b2hdex7oh
Blanchardstown;b2bdea7oh
Tullamore;b1zdb77oh
Leixlip;b29ddy7oh
Donaghmede;b2cdew7oh
Lucan;b28de37oh
=IL
Jerusalem;9e9glu5jo
Tel Aviv;9f4gkm5jn
West Jerusalem;9eaglu5jm
Haifa;9h5gl85jm
Rishon LeTsiyyon;9etgkn5jm
Petaẖ Tiqva;9f5gkx5jm
Netanya;9ftgku5jl
Ashdod;9ebgk95jl
Bnei Brak;9f4gkr5jl
H̱olon;9exgkm5jl
Beersheba;9ctgkn5jl
Ramat Gan;9f4gkp5jl
Reẖovot;9elgkp5jl
Ashkelon;9dzgk15jl
Bat Yam;9eygkj5jk
Bet Shemesh;9e5gl75jk
Kfar Saba;9fegkz5jk
Jaffa;9f1gkj5jk
Herzliya;9fdgkr5jk
Hadera;9g4gky5jk
Modi‘in Makkabbim Re‘ut;9elgla5jk
Nazareth;9gugm25jk
Lod;9ergkx5jk
Modiin Ilit;9epglc5jk
Ramla;9epgku5jk
Ra'anana;9fegkv5jk
Rosh Ha‘Ayin;9f6gl45jj
Hod HaSharon;9fcgkx5jj
Kiryat Gat;9dtgkk5jj
Givatayim;9f3gkp5jj
Qiryat Ata;9h5glj5jj
Nahariyya;9hpgli5jj
Umm el Faḥm;9gcgln5jj
Eilat;984gl35jj
Acre;9hhglg5jj
Ness Ziona;9epgko5jj
El‘ad;9f1gl35jj
Yavné;9ekgki5jj
Ramat HaSharon;9fbgks5jj
Karmi’el;9hfgm25jj
Afula;9glgm15jj
Pardés H̱anna Karkur;9g7gl65jj
Tiberias;9h3gmp5jj
Eṭ Ṭaiyiba;9fngl95jj
Qiryat Bialik;9h7glh5jj
Netivot;9dagk35jj
Naẕerat ‘Illit;9gvgm45jj
Qiryat Motsqin;9h8glg5jj
Shefar‘am;9h5glp5ji
Kiryat Ono;9f2gku5ji
Qiryat Yam;9h9glf5ji
Or Yehuda;9ezgku5ji
Dimona;9cbglb5ji
Safed;9hkgmm5ji
Ofaqim;9czgk65ji
Sakhnīn;9hbgm25ji
Gedera;9edgkm5ji
Bāqa el Gharbīya;9g2glc5ji
Yehud-Monosson;9ezgkw5ji
Giv'at Shmuel;9f4gkt5ji
Arad;9cuglt5ji
Tirat Karmel;9h0gl55ji
Be’er Ya‘aqov;9eqgks5ji
Sderot;9dkgk45ji
Eṭ Ṭīra;9fjgl35ji
Tamra;9h9gls5ji
Migdal Ha‘Emeq;9gsglw5ji
Yehud;9ezgkx5ji
Qiryat Mal’akhi;9e5gkj5ji
Ganei Tikva;9f2gkv5ji
Daliyat al Karmel;9gtgld5ji
Qiryat HaYovel;9e9glp5ji
‘Ara-‘Ar‘ara;9gaglh5ji
Kfar Yona;9fsgl25ji
Nesher;9h1glc5ji
Mevasseret Tsiyyon;9ecgln5ji
Gan Yavne;9ebgkf5ji
Kafr Qāsim;9f7gl65ji
Yoqne‘am ‘Illit;9gpglh5ji
Zikhron Ya‘aqov;9ghgl35jh
Maghār;9hdgmd5jh
Kafr Kannā;9gzgm65jh
Qiryat Shmona;9i9gmt5jh
Kadima Zoran;9fogl05jh
maalot Tarshīhā;9hqglz5jh
H̱ura;9cygl25jh
Judeida Makr;9hhglo5jh
Kuseifa;9ctglh5jh
Shoham;9ewgl35jh
Ariel;9f7glq5jh
Tel Sheva‘;9ctgku5jh
Kafr Mandā;9h5gly5jh
Rahat;9d8gkk5jh
Kafr Qari‘;9gbgld5jh
Or Akiva;9gbgl05jh
Yāfā;9gtgm05jh
Qiryat Tiv‘on;9gvgll5jh
‘Ar‘ara BaNegev;9ckgla5jh
Yirkā;9hjglt5jh
Qalansuwa;9fogl65jh
Bet She’an;9gagmm5jh
Binyamina-Giv'at Ada;9gcgl35jh
Binyamina-Giv‘at ‘Ada;9gcgl25jh
Ar Rayna;9gwgm45jh
Giv\`at H̱ananya;9e9glv5jh
Majd el Kurūm;9hgglx5jh
=IM
Douglas;b4fdjk7si
=IN
Mumbai;8ezjig5os;孟买|孟買|뭄바이|ムンバイ|بمبئی|ممبئي|बम्बई|मुंबई|มุมไบ|Bombai|Bombaj|Bombay|Bombej|Bumbaj|Mumbaj|Mumbay|Numbai|Vomvai|Bombaim|Bombaya|Mumbaja|Mumbajo|Bombejus|Moembaai|Mumbajus|Asumumbay|Бомбай|Бомбей|मुम्बई
Delhi;95ljuj5os;德里|델리|دلی|dlھy|デリー|Deli|Dehli|Delis|Dilhi|Dilli|Dähli|Daehli|Delchi|Delhio|Delkhi|Dellium|New Delhi|Old Delhi|Stare Deli|Sahdzahanabad|Faritani Delhi|Дели|Делі|เดลี|देहली|दिल्ली|नई दिल्ली
Bengaluru;7y1jvj5os;뱅걸로|방갈로르|班加罗尔|班加羅爾|بنگلور|بنغالور|बंगलौर|बंगळूर|バンガロール|Bangalor|Bangalur|Bangalore|Bangaluri|Bengalour|Bengaluro|Ban'nkalor|Bengaluras|Bengalurus|Bangalore City|Бангалор|Бенгалуру|บังคาลอร์|बेङ्गलोर
Hyderabad;8aajxy5or;海得拉巴|ハイデラバード|حیدرآباد|حیدر آباد|हैदराबाद|Bhaganagar|Haiderabad|Hajdarabad|Hajderabad|Khajdarabad|Khajderabad|Haidarabadas|Hyderabad AP|Хайдарабад|Хајдерабад
Ahmedabad;8pzjhn5or;阿哇|亞美達巴德|艾哈迈德堡|아마다바드|अमदाबाद|अमदावाद|Amadavad|Amdavada|Ahmadabad|Ahmadobod|Amedabato|Exmetabad|Ahmadabado|Akhmadabad|Akhmedabad|Amedebatum|Ahmadabadas|Achmentampant|Akhmadabad shaary|احمدآباد|أحمد آباد|アフマダーバード|Ахмадабад|Ахмедабад|อัห์มดาบาด|अहमदाबाद
Chennai;7ydk305or;清奈|金奈|첸나이|چنای|چنائی|Cenaj|Cenay|Cenajo|Cennai|Cennaj|Chenaj|Madras|Cenajus|Chehnai|Chennaj|Csennai|Tsennai|Tamizhagam|Tamulinadu|Maderaspatanum|Ченай|Ченај|เจนไน|チェンナイ|चेन्नई|चेन्नै
Kolkata;8ookpg5or;콜카타|コルカタ|加尔各答|架利吉打|كلكتا|کلکته|Kolkat|Calcuta|Kalkata|Kalkota|Kalkuta|Kolkate|Kolkato|Sealdah|Calcutta|Kal'kuta|Kalikata|Kalkouta|Kalkueta|Kalkutta|Kal'kutta|Kal'kuttae|Kaelkuettae|Caligardamana|Колката|Колкате|कलकत्ता|कोलकाता|โกลกาตา
Surat;8kwjib5or;苏拉特|सुरत|スーラト|Сурат|Surate|Surato|Suratas
Pune;8dgjl65oq;浦納|浦那|푸네|プネー|Puna|Puni|Puno|Poona|Poune|Punae|Puneo|Пунæ|Пуна|بونه|پونا|पुणे|पुणे शहर|ปุเณ
Jaipur;90sjqj5oq;齋浦爾|齋葡亞|자이푸르|جيپور|جايبور|जयपुर|जयपुरम्|ジャイプル|Caypur|Jaypur|Dzaipur|Dzajpur|Gajpuro|Iaipura|Jayapur|Jeypore|Zhajpur|Dzajpura|Dzhajpur|Dzsaipur|Jainagar|Tzaipour|Dzaipuras|Jaipur City|Џајпур|Жайпур|ชัยปุระ
Kanpur;8zjk375oq;カーンプル|Kanpwr|Kanpour|Kanpuro|Cawnpore|Kanpuras|Cawnporne|Канпур|कानपुर
Navi Mumbai;8ewjiu5oq;新孟買|나비뭄바이|ナビムンバイ|بمبئی نو|نوی ممبئی|नवी मुंबई|नवि मुम्बई|Novmumbajo|Navi Mumbaj|Nova Bombaim|Navi Moembaai|Marathi  Maharashtra|Нави Мумбаи|Нави Мумбај
Lucknow;90kk4s5oq;勒克瑙|लखनऊ|लखनौ|ラクナウ|ラクナウー|러크나우|لكهنؤ|لکناو|Laknau|Luknow|Lakhnau|Laknaou|Laknauo|Laknava|Lakkhnau|Lucknow City|Lakkhnau shaary|Лакнау|Лакхнау|ลัคเนา
Nagpur;8krjzo5oq;Ajni|Nagpore|Nagpura|Nagpuro|Nagpuras|Nankpour|那格浦尔|나그푸르|ナーグプル|Нагпур|Наґпур|ناغبور|ناگپور|नागपुर|नागपुरम्
Coimbatore;7sljtt5op;哥印拜陀|Kovai|Koimbator|Koimbatur|Koimbatore|Koyamuttur|Kojambuttur|Koyambattur|코임바토르|کويمبتور|کویمبٹور|कोइंबतूर|कोयंबतूर|Коимбатор|Коимбатур|コーヤンブットゥール|कोयम्बत्तूर
Indore;8p4jqn5op;印多尔|인도르|Indor|Indaur|Indhur|Induro|Induras|Индор|Індаур|إندور|ایندور|इंदूर|इन्दोर|インドール|इन्दौर
Thāne;8fcjio5op;塔那|ثين|تانه|Tane|Tanna|Thana|Tkhana|Tkhane|Тане|Тхана|ठाणे
Vadodara;8nyjjd5op;巴罗达|瓦多达拉|瓦多達拉|바도다라|ヴァドダラ|ヴァドーダラー|Baroda|Vadadara|Vadodaro|Vadodarae|Vantontara|Vapadedara|ودودره|وڈودرا|वडोदरा|वदोदरा|วโฑทรา|Вaдодaрa|Вададара
Bhopal;8qljv05op;보팔|博帕尔|ボパール|ボーパール|Bopal|Bhojpal|Bhopala|Bhopalo|Bkhapal|Bkhopal|Bhopalas|Бопал|Бхапал|بوبال|بوپال|भोपाल|भोपाळ
Rasapūdipalem;8b9kbg5op;Raspari Palao|Visakhapatnam
Pimpri-Chinchwad;8dqjl05op;賓布里金傑沃德|핌프리친치와드|ピンプリ・チンチワッド|پمپری چنچواڈ|پمپری-چنچواڑ|पिंपरी चिंचवड|Pimpri-Cincvad|Pimpri-Chinchvad|Pimpri-Csincsvad|Pimpry-Chynchvad|Pimpris-Cincvadas|Пимпри-Чинчвад|Пімпры-Чынчвад
Patna;8x3kgi5op;パトナ|パトナー|巴特那|파트나|پتنه|پٹنہ|पटना|पाटणा|Патна|ปัฏนา|Patnao|New Patna|पाट्ना
Kallakurichi;7uljzc5op
Ludhiana;9bvjqp5op;卢迪亚纳|ルディアーナ|ルディヤーナー|Ludijana|Ludhijana|Ludkhiana|Ludkhijana|Лудијана|Лудхияна|लुधियाना
Nashik;8hkjkz5op;纳西克|나시크|ناسک|ناشک|ナーシク|Nasik|Nasiko|Naszik|Nasikas|Насик|Нашик|नाशिक|नाशीक|नासिक
Madurai;7pkjx05op;马杜赖|마두라이|मदुरई|मदुरै|มทุไร|マドゥライ|Madura|Maduraj|Mathurai|Madurajus|مدورای|مادورائ|Мадурай|Мадурај|मधुरै
Tirunelveli;7m9jvs5op;티루넬벨리|Nellai|Tinnevelli|Tinnevelly|Tirunelweli|Tinnevelly Junction|蒂魯內爾維利|ترونلویلی|تيرونلفلي|ティルネルヴェーリ|तिरुनलवेली|तिरुनॆल्वेलि|Тирунелвели
Agra;91ijwq5op;阿格拉|아그라|Agro|Aqra|Агра|Аґра|آگرہ|आगरा|アーグラ|アーグラー
Faridabad;94xjur5op;ファリダバード|ファリーダーバード|فریدآباد|फरीदाबाद|Farydabad|Faridabado|Faridabadas|Фаридабад|Фарыдабад
Rājkot;8nxjcn5op;ラージコット|Radzkot|Radzhkot|Radzkotas|Раджкот
Najafgarh;95hjtu5op;納嘉夫嘎爾|नजफगढ़|ナジャフガル|نجف گڑھ|Najafgarli|Najfargharh
Jamshedpur;8pckjf5op;哲雪舖|賈姆謝德布爾|贾姆谢德布尔|잠셰드푸르|جمشدپور|جمشيدبور|जमशेदपुर|ジャムシェドプル|ジャムシェードプル|Cemsidpur|Gamsedpur|Jamsedpur|Tatanagar|Dzamsedpur|Jamshidpur|Dzamsedpura|Dzamshedpur|Dzsamsedpur|Jarnshedpur|Dzamsedpuras|Dzhamshedpur|Tzamsentpour|Dzhamshehdpur|Џамшедпур|Джамшедпур|ชัมเศทปุระ
Gorakhpur;97tjq75oo;Gorakpura|Горакпура
Pimpri;8dqjl15oo;پمپري|پمپری|Пимпри|Пімпрі|पिंपरी
Kalyān;8fgjj65oo;Кальян|Kal'jan
Dombivali;8fejj05oo;東比夫里|Dombivli|Kalyan-Dombivli|Домбивли|دومبیولی|डोंबिवली
Meerut;96ijvv5oo;密拉特|메루트|मीरत|मेरठ|メーラト|Mirat|Mirut|Merath|Meratkh|Miratas|Meerut City|Мирут|Мірут|ميروت|ميروټ
Virār;8g2ji95oo;Vasai-Virar City
Nowrangapur;8ffk9b5oo;Nowrangpur|Nabarangpur|Nabarangapur
Srinagar;9kpjnt5oo;جموں|سرينغر|斯利那加|스리나가르|ศรีนคร|Caspira|Srinigar|Srynagar|Shrinagar|Srinagaro|Srinankar|Szrinagar|Srinagaras|Suryanagar|श्रीनगर|सिरीनगर|シュリーナガル|Сринагар|Срынагар|श्रीनगरम्
Ghāziābād;95njv45oo;غازی|غازی‌آباد|加濟阿巴德|가지아바드|Gaziabad|Ghazibad|Gaziabade|Gazijabad|Газиабад|Газіабад|गाजियाबाद|गाझियाबाद|ガーズィヤーバード
Dhanbad;8s4kk35oo;دنباد|dھnbad|धनबाद|ダンバード|Дханбад|Dhanabad|Dhanbaid|Dkhanbad
Aurangabad;8h8jpa5oo;औरंगाबाद|औरंगाबाद शहर|アウランガーバード|Аурангабад|أورنك آباد|اورنگ آباد|Aurangabado|Aurangabadas
Varanasi;8wckal5oo;Kasi|Kashi|Banaras|Banares|Benares|Waranasi|Varanasio|Varanasis|Varanassi|काशी|वाराणसी|瓦臘納西|바라나시|بنارس|وارانسي|พาราณสี|ワーラーナシー|Варанаси
Amritsar;9dujo05oo;阿姆利则|阿姆利則|암리차르|امبرسر|امرتسر|अमृतसर|अमृतसरः|アムリトサル|Amricar|Amrytsar|Amritsara|Amritszar|Amritsaras|Амрицар|Амритсар|อมฤตสระ
Vijayawada;87vk415oo;维杰亚瓦达|비자야와다|Bezwada|Bejawada|Bezawada|Vijajauada|Vijayavada|Vidzajavada|Widzajawada|Vidzhajavada|Vidzsajavada|وجیاوادا|ويجیواډا|विजयवाडा|ヴィジャヤワーダ|Виджаявада|Виџајавада
Ranchi;8qukgz5oo;蘭契|란치|Ranci|Rancis|Rancsi|Ранчи|Ранчі|رانشي|رانچي|राँची|रांची जिल्ला|ラーンチー
Jabalpur;8qdk235oo;자발푸르|贾巴尔普尔|جبلبور|جبل پور|जबलपुर|जबलपुरम्|ジャバルプル|Џабалпур|Джабалпур|Dzabalpur|Gabalpuro|Dzhabalpur|Dzsabalpur|Jubbulpore|Dzabalpuras
Prayagraj;8wok7c5oo;安拉阿巴德|Prayag|Ilahabad|Allahabad|Alahabadas|Allakhabad|アラハバード|イラーハーバード|الہ آباد|إلٰه‌آباد|इलाहाबाद|Аллахабад
Visakhapatnam;8b4kb45oo;Visak|Vizag|Visakha|Vizag City|Vizagapatam|Vizagapatnam|Vishakapatnam|Vishakhapatnam|Visakhapatnamas|Vishakhapatanam|Vishakkhapatnam|Vaisakhapattanam|维沙卡帕特南|비샤카파트남|فشاكاباتنم|وشاکاپاتنم|ヴィシャーカパトナム|Визагапатнам|Вишакхапатнaм|विशाखपट्टणम्|विशाखापट्टणम|วิศาขาปัตตนัม|विशाखापत्तनम
Jodhpur;8yzjit5oo;焦特布尔|조드푸르|ジョドプル|ジョードプル|Codpur|Dzodpur|Godhpur|Dzodhpur|Dzodhpura|Dzsodhpur|Dzhodkhpur|Dzodhpuras|Tzontchpour|Jodhpur City|Џодпур|Джодхпур|جودبور|جودپور|जोधपुर|जोधपुरम्
Gwalior;8yvjx55oo;Gvalior|Гвалиор
Teni;7ptjv85oo;Theni|Tkheni|Тхени
Howrah;8oqkpc5oo;ハウラー|ハーウラー|Haora|Haura|Hawrah
Raipur;8kzk6r5oo;賴布爾|라이푸르|ラーイプル|Rajpur|Raypur|Raipura|Rajpuro|Raipuras|Rayapura|Райпур|Рајпур|رايبور|راۓپور|रायपुर
Tiruchirappalli;7s2jym5oo;Trichy|Tiruchi|Tirucirapali|Trichinopoli|Trichinopoly|Tiruchirapali|Trichinapalli|Trinchinopoly|Tiruchirapalli|Tiruccirappalli|Tiruccsirapalli|Tiruchchinappalli|Tiruchchirappalli|蒂魯吉拉帕利|티루치라팔리|تروچراپلی|تيروچيراپلي|ティルチラーパッリ|ティルッチラーッパッリ|Тиручирапали|Тіручірапаллі|तिरुचिरापल्ली|तिरुचिरापळ्ळि|ट्रिचिमलैदुर्गम्
Kota;8vyjqo5oo;科塔|코타|Кота|کوتا|کوٹا|कोटा|コーター|Kotah|Kotah City
Shivaji Nagar;8dhjl55oo
Sholapur;8b3jqv5oo;सोलापूर
Chandigarh;9bejtb5oo;चंडीगढ़
Tiruppur;7swjuv5oo;तिरुपुर|तिरुपूर|तिरूपुर
Guwahati;8yqkyv5oo;गुवहाटी|गुवाहाटी
Hubballi;84njop5oo
Mysuru;7w6jsw5oo;मैसूर|मैसूरु|म्हैसूर
Salem;7udjx45oo;सेलम
Gurugram;952jtz5oo;गुडगांव|गुरगांव|गुड़गाँव
Bhubaneswar;8ibkif5oo;भुवनेश्वर
Bhiwandi;8fmjiy5oo;भिवंडी|भिवन्दी
Jalandhar;9d1jpy5oo;जलंधर|जलन्धर|जालंदर
Rohini;95uju35oo
Kanayannur;7ppjrv5oo
Bhayandar;8fmjid5oo;भाईंदर
Narela;965ju55oo
Thiruvananthapuram;7lljtr5oo;तिरुवनंतपुरम|तिरुवनन्तपुरम|तिरुअनन्तपुरम्
Alīgarh;93gjwv5oo;अलीगढ़
Bareilly;94tk0n5on;बरेली|बरैली
Morādābād;964jyu5on
Warangal;8c0k125on;वरंगल|वारंगल|वारंगळ
Dhārāvi;8exjif5on
Gorakhpur;90dkbl5on;गोरखपुर|गोरखपूर|गोरखपुरम्
Guntur;87ak3i5on;गुंटुर|गुंटूर|गुण्टूरुमण्डलम्
Puducherry;7v5k1r5on;पॉण्डिचेरी
Jājmau;8zfk3d5on;जाजमऊ
Amravati;8k5jvz5on;अमरावती
Bikaner;93ujjn5on;बीकानेर
Kochi;7pmjru5on;कोच्चि
Bhilai;8kxk675on;भिलाई|भिलै नगर
Cuttack;8iukik5on;कटक|कटकम्
Borivli;8ffjie5on;बोरिवली
Bhavnagar;8mgjgf5on;भावनगर
Sāngli;88tjn45on
Jamnagar;8ofjan5on;जामनगर|जामनगरम्
Jammu;9gyjny5on;जम्मू
Bokāro;8rrkjb5on
Nanded;8f8jur5on;नांदेड|नांदेड़|नान्देड
Kozhikode;7t9jqi5on;कोळिकोड|कोलिक्कोट|कोष़िक्कोड
Kolhāpur;88ejm75on
Nellore;825k275on;नेल्लोर|नेल्लौर|नेल्लूरु-नगरम्
Kalaburagi;8a6jtg5on;गुलबर्ग|गुलबर्गा|गुल्बर्गा
Ajmer;8zhjnc5on;अजमेर
Dehradun;9a8jwr5on;देहरादुन|देहरादून
Erode;7tijvx5on;इरोड|ईरोड|एरोड
Durgapur;8rckmj5on;दुर्गापुर|दुर्गापूर
Ulhasnagar;8fejj75on;उल्हासनगर
Loni;95vjup5on
Siliguri;907kpn5on;सिलीगुड़ी
Ujjain;8qejqi5on;उज्जैन|उज्जयिनी
Bilimora;8jpjio5on
Karol Bāgh;95ljuf5on
Āsansol;8rsklm5on;आसनसोल
Mangaluru;7xwjny5on;मंगळूर|मैंगलूर|मङ्गलूरु
Belagavi;861jmy5on;बेलगाँव|बेलगांव|बेळगांव
Sahāranpur;999jvf5on
Vellore;7xwjzt5on;भेल्लोर|वेल्लूर|वेल्लोर
Bhātpāra;8pjkpk5on
Malegaon;8j3jn15on
Gaya;8uwkg45on
Ambattur;7yek2o5on
Jalgaon;8kcjpx5on;जलगाव|जळगाव|जलगाँव
Kurnool;85zjws5on;कर्नूल|कुरनूल|कर्नूलु
Rāmgundam;8e8k0p5on
Udaipur;8ubjkr5on;उदयपुर|उदयपूर|उदयपुरम्
Maheshtala;8ojkp55on
Patiāla;9aajs75on
Shyamnagar;8pfkph5on
Davangere;827jqx5on
Akola;8jjjtw5on;अकोला
Rajpur Sonarpur;8ockpn5on
Korba;8o3k9q5om;कोरबा जिला
Jhānsi;8wqjya5om
Thoothukudi;7mdjx15om;तूतुकुडि|तूतुकुडी|तूत्तुक्कुटि
Ballari;842jto5om;बळ्ळारी|बेल्लारी
Bhāgalpur;8w4kll5om
Agartala;8s8kxk5om;अगरतला|अगरताल|अगरताला
Kākināda;894k8g5om
Latur;8d4jsp5om;लातूर
Pānihāti;8p1kph5om
Rajamahendravaram;899k765om
Dhule;8k2jnq5om;धुले|धुळे
Rohtak;969jsr5om;रोहतक
Ahilyanagar;8f1jnm5om;अहिल्यानगर
Kollam;7mojsq5om;कोल्लम|कोल्लम्
Bilāspur;8nck885om
Bhilwara;8wfjnc5om
Brahmapur;8fnkfj5om;ब्रह्मपुर
Muzaffarpur;8ykkh75om;मुजफ्फरपुर|मुझफ्फरपुर|मुझफ्फरपूर
Punāsa;8nsjs75om
Muzaffarnagar;97vjvu5om;मुझफ्फरनगर|मुजफ्फरनगरम्|मुज़फ़्फ़र नगर
Avadi;7yfk2j5om
Kadapa;828jyy5om
Kukatpally;8akjxt5om;कुकातपल्ले
Kāmārhāti;8ozkph5om
Mathura;92ejvr5om;मथुरा
Chānda;8hfk0a5om;चंद्रपुर|चंद्रपूर|चन्द्रपुर
Vijayapura;88qjqc5om;बीजापुर|विजापूर|बिजापुरम्
Shivamogga;80pjpx5om;शिमोगा
Alwar;92kjsu5om;अलवर|अल्वर
Shāhjānpur;93gk1z5om
Jūnāgadh;8lsjbq5om
New Delhi;95ijuh5om;नई दिल्ली
Thrissur;7r8jrq5om
Nizāmābād;8dvjwy5om
Tumkūr;7z2ju65om
Parbhani;8fjjt95om;परभणी
Hisar;96zjqc5om;हिसार
Fīrozābād;91fjxs5om
Kulti;8rxkl85om
Karnāl;98hjtu5om
Barddhamān;8qmko25om
Gundupālaiyam;7v6k1o5om
Bārāsat;8p4kps5om
Mulugu;8cjk225om
Bihār Sharīf;8w0khk5om
Bāli;8oxkpe5om
Rāmpur;961jzj5om
Darbhanga;8ynkim5om;दरभंगा|दरभङ्गा
Panipat;97njtt5om
Tirupati;7zwk0m5om;तिरुपति|तिरुपती|तिरुपतिः
Greater Noida;956jve5om;ग्रेटर नोएडा
Noida;95ejut5om;नोइडा|नोएडा|नोयडा
Aizawl;8rxl1k5om;ऐजोल|ऐझॉल|आइजोल
Gandhinagar;8qijhw5om;गान्धीनगरम्
Dindigul;7qtjwm5om;दिंडुक्कल|दिन्दिगुल|दिण्डुक्कल
Thanjavur;7rzjzu5om;तंजावुर|तंजावूर
Karīmnagar;8d8jzt5om
Dewas;8ptjra5om;देवस|देवास
Sonīpat;96jjty5om
Ichalkaranji;88djmu5om;इचलकरंजी|ईचल्करंजी
Bathinda;99xjo65om;बठिंडा|बठिण्डा
Jālna;8h4jqt5om
Kirāri Sulemānnagar;95qju25om
Satna;8uak4j5om
Purnia;8xmkmz5om;पुर्णिया|पूर्णिया
Imphal;8uxl4y5om;इंफाल|इम्फाल
Saugor;8s8jyq5om;सागर
Kushinagar;90akd15om
Rourkela;8nqkfq5om;रुरकेला|राउरकेला
Durg;8kvk5s5om;दुर्ग
Anantapur;82sjvl5om;अनंतपूर|अनन्तपुर|अनन्तपुरम्
Ratlām;8qtjog5om
Rānipet;7xwk0d5om
Lal Bahadur Nagar;8a7jy85om
Arrah;8x0kf65om;आरा
Baranagar;8owkpi5om;बारानगर
Gajuwaka;8b6kb65om;गजुवका|गाजुवाका
Etāwah;90ejzi5om
Ambarnath;8fcjj95om
Naihāti;8plkpm5om
Bharatpur;91mjv95om;भरतपुर|भरतपूर|भरतपुरम्
Begusarai;8wmkj95om;बेगुसराई|बेगुसराय|बेगूसराय
Tiruvottiyūr;7ykk325om
Gāndhīdhām;8q4jat5om
Mau;8y2kc45om;मऊ|मौ|मवु
Sīkar;92pjoq5om
Ramagundam;8e4k0r5om;रामगुंडं मण्डल
Hāpur;95tjw25om
Farrukhābād;923k125om
Alappuzha;7odjs15om
Katihar;8wykn95om
Sri Ganganagar;994jl75om
Rewa;8u5k5t5ol;रीवा|रेवा शहर
Uluberiya;8ogkoq5ol
Sivakasi;7o9jw45ol;चिवकाचि|शिवकाशी
Karur;7sgjww5ol;करुर|करूर|करूरु
Rāichūr;871juw5ol
Pallāvaram;7y1k2n5ol
Ooty;7tpjt25ol;उदगमंदलम
Pāli;8xljjo5ol
Hosūr;7xejw75ol
Vizianagaram;8cckbp5ol;विजयनगरम|विजयनगरम्
Shrīrāmpur;8p7kpe5ol
Quthbullapur;8amjxy5ol;कुत्बुल्लापुर मण्डल
Nadiād;8p1jie5ol
Nāgercoil;7kqjv35ol
Karāwalnagar;95tjun5ol
Mango;8pfkji5ol
Murwāra;8s8k3b5ol
Kanchipuram;7xok1e5ol;काञ्ची|कांचिपुरम|कांचीपुरम
Singrauli;8t8k9o5ol;सिंगरौली
Mirzāpur;8vuk9d5ol
Kharagpur;8o2kml5ol;खरगपुर|खरगपूर
Eluru;88fk5a5ol;एलुरु|एलूरू
Rāniganj;8afjy15ol
Yamuna Nagar;99pjuo5ol
Raurkela Industrial Township;8nokfq5ol
Bidar;8brjvc5ol;बीदर
Munger;8whkk75ol
Nandyāl;850jy05ol
Panchkula;9b9jth5ol;पंचकुला|पञ्चकुला
Burhānpur;8l7jrr5ol
Morvi;8pejcs5ol
Anand;8onjio5ol;आणंद|आनंद|आणन्द
Ongole;852k2c5ol;ओंगोल|ओङ्गोल|ओङ्गोल्
Hosapete;84fjs75ol;होसपेटे|होस्पेट
Nāngloi Jāt;95oju35ol
Secunderabad;8amjy65ol;सिकंदराबाद
Deoghar;8u1kku5ol;देवघर
Chāpra;8xmkff5ol;छपरा|चप्रा|छप्रा
Khandwa;8mmjs35ol;खंडवा|खण्डवा|खांडवा
Puri;8h0kie5ol
Morena;8zmjwo5ol;मुरैना|मोरेना
Gyānpur;8wdk935ol
Bulandshahr;94wjwa5ol;बुलंदशहर|बुलन्दशहर|बुलन्दसहर
Bhind;8ztjyv5ol;भिंड|भिण्ड|भिन्द
Bhālswa Jahangirpur;95ujud5ol
Khammam;89xk2m5ol;खम्मम|खम्माम
Sambhal;95ejy95ol;संभल
Bhiwāni;95zjri5ol
Panvel;8erjj35ol;पनवेल
Ambāla;9acjtc5ol
Kumarapalayam;7tsjvv5ol
Machilīpatnam;86zk5e5ol
Mahesāna;8rkjh25ol
Mahbūbnagar;88ijwn5ol
Sambalpur;8lnkda5ol;संबलपुर|संबलपूर
Bhusawal;8kgjqj5ol
Raebareli;8yvk5n5ol;रायबरेली
Haridwar;997jx45ol;हरिद्वार|हरिद्वारम्
Phusro;8s0kix5ol
Adoni;85fjun5ol
Sūjāngarh;92yjmv5ol
Sirsa;981jof5ol;सिरसा
Dinapur Nizamat;8x8kg95ol
Bahraigh;92lk6n5ol
Kāraikkudi;7pzjyt5ol
Sultan Pur Majra;95pju45ol
Guna;8uhjur5ol;गुणा|गुना
Chandannagar;8pikph5ol;चंदनगर|चंदननगर|चन्दननगर
Baharampur;8sykp55ol;बहरमपुर|बहरामपुर|बहरामपूर
Shahuwadi;88zjlf5ol
Madanapalle;7znjy25ol;मदनपल्ली|मदनपल्ले मण्डल
Shivpuri;8wmjvq5ol;शिवपुरी
Surendranagar;8p5jf15ol
Neyveli;7u9k0u5ol
Silchar;8uzl1s5ol;सिलचर|शिलचर-नगरम्
Proddatūr;82zjy75ol
Hugli;8pnkpk5ol
Hashtsāl;95jju25ol
Amroha;96ajxz5ol
Chhindwāra;8najza5ol
Tambaram;7xwk2l5ol;तांबरम
Bhetia;8pbkja5ol
Pathānkot;9fnjq55ol;पठाणकोट|पठानकोट
Badlapur;8f8jjj5ol;बदलापूर|बादलपुर
Cuddalore;7uok1l5ol;कडलूर|कडलूरु|कड्डालोर
Shimla;9cejud5ol;शिमला
Gadag-Betageri;84ujq25ol
Gadag;84vjq35ol
Verāval;8k3jbh5ol
Navsari;8k6jik5ol
Bahadurgarh;95pjtq5ol;बहादुरगढ|बहादुरगढ़
Haldia;8nakor5ol
Rāiganj;8x5kos5ol
Malda;8vgkov5ol;इंग्लिश बाजार
Jaunpur;8xjk9p5ol;जौनपुर|जौनपुरम्
Deoli;956juj5ol
Bharūch;8m9jiq5ol
Hoshiārpur;9dmjqv5ol
Jīnd;97gjs05ol
Kumbakonam;7sgk0j5ol;कुंभकोणम|कुम्बकोनाम
Mohali;9b8jt45ol
Fatehpur;8y1k4h5ol
Tonk;8ypjqj5ol;टोंक|टोङ्क
Udupi;7z1jnn5ol;उडुपी|उड्पी|उडुपीमण्डलम्
Thenali;874k405ol
Sītāpur;92kk445ol
Alandur;7y4k2t5ol
Bhadrāvati;80hjqb5ol
Vapi;8iljii5ol;वापि|वापी
Moga;9bljot5ol;मोगा
Rāj-Nāndgaon;8kmk535ol
Robertsonpet;7y0jxg5ol;रॉबर्टसनपेट
Unnāo;8zrk3l5ol
Budaun;93wjzt5ol;बुडौन|बदांयू|बदायूँ
Madhyamgram;8p1kpp5ol;मध्यमग्राम
Chittoor;7ypjzq5ol;चितूर|चित्तूर
Jāmuria;8ruklw5ol
Jaigaon;90lksa5ol
Batāla;9edjow5ol
Orai;8y7k0p5ol
Saharsa;8xvkkk5ol;सहरसा|सहर्सा
Vidisha;8rdjw55ol;विदिशा
Hanumāngarh;986jmh5ol
Thānesar;999jtf5ol
Hassan;7y5jre5ol;हसन|हासन|हस्सन
Kishangarh;8zvjnx5ol;किशनगढ़|किशानगढ
Dalūpura;95hjus5ol
Rudrapur;96ik0k5ol;रुद्रपुर|रुद्रपुरम्
Nalgonda;89dk075ol;नलगोंडा|नालगोंडा|नल्गोन्डा
Hazāribāgh;8snkh45ol;हजारीबाग
Medinīpur;8oakmk5ol
Bālurghāt;8w2kqm5ol
Fyzābād;90ek875ol
Dinapore;8x8kg95ol
Porbandar;8m4j9d5ol;पोरबंदर|पोरबन्दर
Bānda;8wsk355ol
Hindupur;80fjv95ol
Beāwar;8yijmg5ol
Anantnag;9jpjor5ol;अनंतनाग|अनन्तनाग
Serilingampalle;8aljxi5ol
Raigarh;8mukbo5ol;रायगढ|रायगढ़
Malkajgiri;8ahjy55ol;मलकाजगिरि|मल्कजगञ्ज
Shāntipur;8qlkpn5ol
Bhuj;8qlj9j5ol;भुज|भूज
Bārākpur;8p9kpg5ol
Hājīpur;8xdkgp5ol
Sasarām;8vbkde5ol
Bhimavaram;87yk6g5ol
Beed;8erjqg5ol;बीड
Burāri;95wjug5ol
Krishnanagar;8r1kpt5ol;कृष्णनगर|कृष्णानगर
Chitradurga;81ijs85ol;चित्रदुर्ग|चित्रदुर्गम्
Dibrugarh;92cl7n5ol;दिब्रुगढ|डिब्रूगढ़|डिब्रुगर-नगरम्
Abohar;99qjm45ol;अबोहर
Tiruvannamalai;7vzjzn5ol
Kaithal;98sjs85ol;कैथल
Balasore;8lpklh5ol;बालेश्वर
Godhra;8pajkh5ol;गोधरा
Shillong;8x1kz85ol;शिलाँग|शिलांग|शिलोंग
Rewāri;94cjsu5ol
Basirhat City;8oykqt5ol
Chhatarpur;8v8k135ol;छतरपुर|छत्रपूर|छतरपुरम्
Mandsaur;8svjoj5ol;मंदसौर|मन्दसौर
Chas;8rokjd5ol;चस|चास
Pālanpur;8t5jh85ol
Lakhīmpur;93nk4e5ol
Valsād;8j9jil5ol
Damoh;8s7k0o5ol;दमोह|दामोह
Haldwani;976k0x5ol;हल्द्वानी|हल्द्वानी-काठगोदाम|हल्द्वानी-व-काठगोदाम
Hābra;8pgkqa5ol
Kolār;7yijx15ol
Srikakulam;8cukd25ol;श्रीकाकुलम|श्रीकाकुलम्
Mandya;7wsjtm5ol;मंड्या|मांड्या
Madhurampur Dehri;8vdkdw5ol
Kānchrāpāra;8pskpn5ol
Dimāpur;8xzl4c5ol
Māler Kotla;9atjqs5ol
Siwān;8yukec5ol
Kalol;8qljhe5ol
Bānkura;8qjklv5ol
Pātan;8s9jgd5ol
Gondā City;91dk7n5ol
Dhaulpur;905jwc5ok
Gondiā;8lmk2r5ok;गोंदिया|गोण्डिया|गोंदिया जिला
Palakkad;7rxjsx5ok;पलक्कड|पालक्काड|पालक्काड़
Bettiah;90gkeq5ok;बेतिया|बेत्तिया
Palwal;946jut5ok;पलवल
Rānīganj;8rmkm15ok
Etah;92kjyi5ok;एटा|एटा जिल्ला
Pīlibhīt;95jk1o5ok
Rajapalayam;7o9jvf5ok
Botad;8nljf35ok
Deoria;8zmkcq5ok;देवरिया
Nimach;8tyjnz5ok
Khardah;8p4kpi5ok
Yavatmāl;8injx15ok
Hālīsahar;8ppkpm5ok
Khanna;9bbjrq5ok;खन्ना
Titāgarh;8p6kph5ok
Mustafābād;95sjun5ok
Hāthras;92ojwt5ok
Jorhat;90cl5o5ok
Lalitpur;8uljxu5ok;ललितपुर|ललितपूर|ललितपुरम्
Guntakal;845juw5ok;गंतलक|गुंटकल
Pithampur;8osjqa5ok
Mothīhāri;901kfw5ok;मोतिहारी
Kanhangad;7w7jon5ok
Jagdalpur;8f0k7u5ok;जगदलपुर|जगदलपूर|जगदल्पुर
Jagādhri;99tjuq5ok
Dārjiling;913kp75ok
Kurichchi;7sgjtt5ok
Dam Dam;8ovkpm5ok
Hardoī;923k2l5ok
Puruliya;8qtkjw5ok
Dharmavaram;821jvw5ok
Gokalpur;95qjup5ok
Bhadreswar;8pekpe5ok
Nagaon;8z7l1f5ok
Vejalpur;8p1jkc5ok
Chikmagalūr;7z0jqh5ok
Bhadrak;8khkkc5ok;भद्रक
Sawai Madhopur;8yajs25ok;सवाईमाधोपुर|सवाई माधोपुर|सवाई माधोपूर
Ambikāpur;8q8kb45ok
Mandoli;95qjur5ok
Satara;8b5jlj5ok
Chūru;94mjo95ok
Gangāpur;8zjjt45ok
Madhavaram;7yjk2v5ok;मदावरम|माधवराम|माधवारम
Dohad;8pfjma5ok
Barshi;8cnjq95ok;बर्शि|बार्शी
Ādilābād;8gnjy65ok
Jhunjhunūn;945jpg5ok
Jetpur;8mfjc65ok
Uppal Kalan;8adjy85ok
Gudivāda;87ok505ok
Bārān;8vqjsk5ok
Narmadapuram;8p7jvx5ok;हुशंगाबाद|होशंगाबाद|नर्मदापुरम
Amreli;8m0jdt5ok;अमरेली
Pudukkottai;7qujyy5ok
Narasaraopet;873k2d5ok;नरसरावुपेट
Rishra;8p4kpf5ok
Baripāda;8mxkkx5ok
Muktsar;9anjn05ok
Azamgarh;8yfkb25ok;आजमगढ|आझमगढ|आज़मगढ़
Barnāla;9adjpv5ok
Yelahanka;7yejvk5ok;यलहंक
Chittorgarh;8v5jna5ok;चित्तोडगढ|चित्तौडगढ|चित्तौरगढ
Tinsukia;92dl8w5ok
Khargone;8mmjq15ok
Baidyabāti;8pakpd5ok
Bastī;90fk9s5ok
Gangavati;84vjsl5ok
Ambur;7xjjyo5ok;अम्बुर
Giridih;8t7kjr5ok;गिरीडीह|गिरीडीह जिला
Wardha;8jmjyc5ok;वर्धा
Tadepalligudem;88pk6h5ok
Chanduasi;951jyu5ok
Bagaha;91akdl5ok
Achalpur;8l2jvb5ok;अचलपुर|अचलपूर|अलचपुर
Gondal;8n0jco5ok
Dharashiv;8cijr85ok;उस्मानाबाद
Port Blair;7ufl1n5ok;पोर्ट ब्लेर|पोर्टब्लेयर|पोर्ट ब्लेयर
Bagalkot;86zjqa5ok;बागलकोट|बागलकोटेमण्डलम्
Suriāpet;89mk165ok
Bangaon;8q1kqr5ok;बानगावं
Ashoknagar Kalyangarh;8pikq85ok
Deesa;8tejgi5ok
Navadwīp;8r1kph5ok
Nandurbar;8ldjm85ok;नंदुरबार|नंदूरबार|नन्दुरबार
Sultānpur;8yyk7z5ok
Delhi Cantonment;95gju95ok
Firozpur;9bxjn95ok
Pandit Deen Dayal Upadhyaya Nagar;8w8kaw5ok
Sehore;8qgju45ok;सीहोर
Kanpur Cantonment;8zik3a5ok
Bānsbāria;8prkpk5ok
Tadpatri;83fjwp5ok
Jalpāiguri;8zokqh5ok
Mangalagiri;87nk3t5ok;मंगलगिरी
Ranebennur;82mjq35ok
Khurja;94hjwa5ok;खुर्जा
Kishanganj;8yikoc5ok
Ponnāni;7rxjqx5ok
Hindaun;909ju05ok;हिंडोन|हिण्डौन|हिण्डौन सिटी
Jamālpur;8wbkk95ok
Nāgaur;91kjkt5ok
Ambala Sadar;9aajti5ok
Bhiwadi;94djti5ok;भिवाडी|भिवादी|भिवाड़ी
Būndi;8wojq45ok
Miryalaguda;88vk105ok
Soyībug;9kojnj5ok
Jagtiāl;8e7jz85ok
Roorkee;98zjwd5ok;रुडकी|रूरकी|रुड़की
Udgīr;8d3ju85ok
Nagda;8r6jpi5ok
Betūl;8mujwe5ok
Jahānābād;8w1kg35ok
Kashipur;975jzc5ok;काशीपुर|काशीपूर
Ghazīpur;8x2kc75ok
Amaravati;87vk3o5ok
Nagapattinam;7rwk1s5ok
Buxar;8x2kda5ok
Mormugao;84rjl15ok
Seoni;8ndk0z5ok
Aurangābād;8urked5ok
Hinganghāt;8j3jz05ok
Dhamtari;8jjk6j5ok
Chilakalūrupet;86pk2p5ok
Malappuram;7sojrc5ok;मलप्पुरम
Bānswāra;8rejms5ok
Chirmiri;8qfk8r5ok
Itārsi;8otjw05ok
Vasco da Gama;84sjl25ok
Gangtok;91xkq55ok;गंगटोक|गाङतोक|गान्तोक
Datia;8xbjxy5ok
Phagwāra;9cqjqh5ok
Airoli;8f7jis5ok
Luckeesarai;8vykj55ok
Shikohābād;91bjyb5ok
Kāsganj;939jyh5ok;कासगंज|कस्गञ्ज|कासगञ्ज
Khambhāt;8o0jhq5ok
Kohima;8xbl5f5ok;कोहिमा
Pandharpur;8b4jp95ok;पंढरपुर|पंढरपूर
Kapurthala Town;9d6jpe5ok;कपुरथला|कपूरथला|कपुर्थला
Mahuva;8kljfd5ok
Silvassa;8ibjis5ok;सिलवास|सिलवासा|सिल्वासा
Balāngīr;8jikbx5ok
Nawāda;8v5khm5ok
Bhilai Charoda;8kyk6a5ok
Shāmli;97tjur5ok
Jharsuguda;8mqkdd5ok;झर्सुगुडा|झारसुगुडा
Sādatpur Gujran;95tjul5ok
Chalisgaon;8iujoe5ok
Villupuram;7v6k0t5ok
Amalner;8kgjoi5ok;अमळनेर|अमल्नेर
Tellicherry;7unjpp5ok;तालासेरी
Manjeri;7swjrg5ok;मंजेरी
Birgaon;8l7k6r5ok
Bārmer;8xjjeb5ok
Pūth Kalān;95rju45ok
Kuniyamuttūr;7sgjtr5ok
Sardārshahr;950jmx5ok
Sāhibganj;8w4knf5ok
Sānand;8pvjh25ok
Paramagudi;7ojjyb5ok
Zerakpur;9b6jte5ok
Tiruchengode;7tmjwd5ok;तिरुचेंगोड
Closepet;7xcjuo5ok
Emmiganūr;85tjv85ok
Vaniyambadi;7x8jye5ok;वनियामबादी
Kovilpatti;7nhjwb5ok;कोभिलपट्टी
Parli Vaijnāth;8edjsl5ok;वैजनाथ|परली वैजनाथ|परळी-वैद्यनाथ तालुका
Mainpuri;91njzj5ok;मैनपुरी|मैन्पुरी
Khāmgaon;8jjjsp5ok
Makrāna;914jnk5ok
Allinagaram;7pvjv85ok
Gudiyatham;7xzjz35ok
Dhār;8orjp65ok
Baraut;96ujum5ok
Kalyani;8pukpn5ok
Doddaballapura;7yxjve5ok
Chīrāla;85yk375ok
Akot;8kmju25ok;अकोट|अकोत
Fatehpur;93rjo85ok
Gharroli;95ijut5ok
Rajpura;9aojsr5ok
Ballarpur;8h5k0f5ok
Kot Kapūra;9ayjnv5ok
Bhandāra;8ktk195ok
Molārband;956jur5ok
Bagaha;8u5kga5ok
Rayachoti;812jyr5ok
Kadayanallur;7n7juu5ok
Valparai;7qpjtr5ok
Pollachi;7rmjtx5ok;पोल्लाची
Kāvali;83gk275ok
Roha;8d8jj45ok;रोहे
Mancherial;8efk0n5ok
Avaniyāpuram;7pgjwz5ok
Murādnagar;95yjva5ok;मुरादनगर
Ankleshwar;8m3jir5ok
Kadiri;817jx45ok
Shahdol;8qpk605ok;शहडोल|शहदोल
Shrirampur;8gijne5ok
Mahobā;8w9k1w5ok
Rāmgarh;8rnkhk5ok
Contai;8miknr5ok
Sangrūr;9a1jqo5ok
Nirmal;8f2jxm5ok;निर्मल
Deoband;98ijvs5ok;देवबंद|देवबन्द
Neyyāttinkara;7lcju55ok
Tāndā;8zrk9m5ok
Kolar;8qcjv25ok
Jhumri Telaiya;8tvkhl5ok
Aruppukkottai;7ofjwy5ok
Farīdkot;9b7jno5ok
Madgaon;84gjlg5ok
Velampālaiyam;7syjur5ok
Jamūī;8v9kjj5ok
Anjār;8q7jaj5ok
Paralakhemundi;8e6kdm5ok;पारलाखेमूंदी
Jharia;8rykk15ok;झरिया
Kāraikāl;7sck1r5ok
Kāmthi;8kyk005ok
Hānsi;96ujr05ok
Mayiladuthurai;7suk195ok;मयिलदुथुराय|मयीलाडूतुरै
Anakapalle;8b5kak5ok
Maduravoyal;7ybk2o5ok;मदुरभोयल
Sārni;8nejx55ok
Dausa;90pjs25ok;दौसा
Parādīp Garh;8igkkl5ok
Hingoli;8grjua5ok;हिंगोली|हिङ्गोली
Bāruni;8wskit5ok
Jeypore;8eek9d5ok
Bijnor;97ljx25ok;बिजनोर|बिजनौर|बिज्नोर
Dhoraji;8mdjbp5ok
Vīrappanchathiram;7tjjvv5ok
Bālāghāt;8mmk2r5ok
Udhampur;9hgjoq5ok;उधमपुर|उधमपूर|उधमपुरम्
Najībābād;989jxm5ok
Idaiyarpālaiyam;7sojto5ok
Harihar;82bjql5ok;हरिहर
Chilla Soroda Bāngar;95gjuq5ok
Sirsilla;8d3jyx5ok
Karauli;8zmjtz5ok;करौली
Mānsa;99bjpg5ok
Jangipur;8tzkoo5ok
Gobindgarh;9b7jry5ok
Saunda;8rqkh15ok
Maraimalainagar;7xkk2b5ok
Ashoknagar;8uajvx5ok;अशोकनगर|अशोकनगरम्|अशोकनगर जिल्ला
Phulwari Sharif;8x2kgb5ok
Mhow;8oojqh5ok;महू|म्होव क्यान्टोन्मेन्ट
Malout;99xjmw5ok
Kadi;8qqjgx5ok
Vijalpor;8k4jij5ok
Palakollu;87wk715ok
Himatnagar;8rkjip5ok
Dholka;8p5jh85ok
Kotkapura;9ayjnv5ok
Bargarh;8l9kca5ok;बरगढ|बरगढ़|बरागढ
Kharghar;8exjiz5ok;खारघर
Kairāna;97ojuh5ok;कैराना
Brajarajnagar;8mmkd45ok;ब्रजराजनगर
Kāmāreddi;8cwjxm5ok
Palwancha;8auk445ok
Manmād;8i9jms5ok
Srikalahasti;808k1e5ok;श्रीकालहस्ति|कालाहस्ती मंदिर
Kottagūdem;8ark3y5ok
Nawābganj;90tk5k5ok
Gokak;86xjnu5ok
Tīkamgarh;8uqjyz5ok
Arakkonam;7yck1b5ok
Arāria;8ynkn35ok;अररिया
Koch Bihār;8z5ksh5ok
Kharakvasla;8d8jky5ok
Bhadohi;8wkk9d5ok;भदोही
Kātoya;8rpkot5ok
Medininagar;8sskdj5ok;डाल्टनगंज|मेदिनीनगर|डाल्टनगञ्ज
Wāshīm;8hvju95ok
Bagbera;8p8kjf5ok
Savarkundla;8laje25ok
Basoda;8s9jwi5ok
Tanuku;88jk6w5ok;तणुकु मण्डल
Gurdaspur;9f0jpg5ok;गुरदासपुर|गुरुदासपुरम्
Edattala;7pyjs65ok
Bodhan;8dujwd5ok
Balrāmpur;927k8b5ok
Bāramūla;9l1jmi5ok
Karwar;835jlx5ok;करवर|कारवार|कारवारम्
Dhuliān;8ukkob5ok
Rabkavi-Banhatti;87rjoo5ok
Mawāna;96ujwg5ok;मवना|मवाना
Shirpur;8lbjo05ok;शिरपुर|शिरपूर
Budge Budge;8ogkoy5ok
Kundla;8laje35ok
Visnagar;8rujhj5ok
Kannauj;916k205ok;कनौज|कन्नौज
Khajoori Khas;95rjum5ok
Neelankarai;7xzk2y5ok;नीलंकरई
Nagīna;97sjxw5ok
Badagara;7u8jpy5ok;वटकरा
Fazilka;9agjln5ok
Electronic City Phase I;7xpjvq5ok
Ratnagiri;897jjn5ok;रत्नगिरी|रत्नागिरि|रत्‍नागिरी
Keshod;8l6jb55ok
Konnagar;8p3kpe5ok
Chintamani;7z8jwt5ok
Pammal;7y2k2l5ok
Sindhnūr;85tjt85ok
Madhubani;8z7kj35ok
Bodināyakkanūr;7ptjuv5ok
Khadki;8dkjl55ok
Dhrāngadhra;8pvjej5ok
Tezpur;8zzl1s5ok;तेजपुर|तेजपूर
Srivilliputhur;7ofjvn5ok;श्रीविल्लीपुतूर
Benipur;8yekjb5ok
Pāloncha;8awk475ok
Jaora;8rojop5oj;जावरा
Tura;8wvkuk5oj
Gūdūr;81bk1t5oj
Narnaul;93wjrf5oj;नर्नौल|नारनौल
Balotra;8xrjgo5oj
Kharar;9bfjsx5oj;खरड़|खरार
Yadgir;88ljua5oj;यादगिर|यादगीर|यादगिरि
Harda;8o2ju65oj
Pilkhua;95rjvq5oj
Ambājogāi;8e1js75oj
Kāpas Herd;959ju45oj
Bela;8y0k7s5oj
Rabkavi;87sjon5oj
Bawāna;960jtz5oj
Shāhābād;92sk225oj
Virudhachalam;7tzk0d5oj;विरुधाचलम|विरुद्धचलम्
Chāndpur;96xjxf5oj
Kāsipālaiyam;7tgjvv5oj
Sikandarābād;951jvu5oj
Virudunagar;7onjwk5oj
Pattukkottai;7qyk0c5oj;पट्टुक्कोटै
Pusad;8hbjvi5oj
Tindivanam;7vzk1a5oj
Chopda;8l1jp65oj;चोपडा|चोप्दा
Taliparamba;7vgjpc5oj
Sangāreddi;8ayjwx5oj
Pālghar;8gqji55oj
Dharapuram;7rujvd5oj;धारापुरम
Payyanur;7vljow5oj
Sheopur;8xajt25oj;श्योपुर|श्योपुरम्
Channapatna;7x5juh5oj;चन्नपटण|चन्नपटना
Koyilandy;7tsjq95oj
Farīdpur;94dk0y5oj
Barauni;8wrkiu5oj
Krishnagiri;7wsjx95oj;कृष्णगिरि|कृष्णगिरी
Sopur;9l9jmv5oj
Rāyagada;8f9kbp5oj
Zahirābād;8b4jvl5oj
Khopoli;8e7jjr5oj;खोपोली
Ratangarh;940jna5oj
Mārkāpur;85qk075oj
Kalamassery;7pyjs15oj
Bolpur;8rqknm5oj;बोलपुर|बोलपुर पश्चिम बंगाल
Panjim;852jl35oj;पणजी
Rānāghāt;8qekq15oj
Bāpatla;866k3j5oj
Fatehābād;980jpm5oj
Beypore;7t1jql5oj;बेपुर
Koppal;84njrj5oj;कोप्पल|कोप्पळ
Badvel;82zjzm5oj
Dādri;95bjvf5oj
Thenkasi;7mwjus5oj
Suratgarh;97gjla5oj
Auraiya;8zjk0v5oj;औरया|औरैया|औराइया
Palani;7r1jvc5oj;पलनी|पळणी|पळनी
Nallūr;7sujuz5oj
Chamrajnagar;7v4jtq5oj
Mīthepur;956jus5oj
Māngrol;8kojar5oj
Basavakalyan;8bnjtr5oj;बसभकल्याण|बसवकल्याण|बसवकल्याणम्
Pul Pehlad;956jup5oj
Chāībāsa;8onkic5oj
Tripunittura;7pmjs15oj
Shājāpur;8r3jrw5oj
Mettupalayam;7tejtp5oj;मेट्टुपालयम
Sunām;99pjqk5oj
Bhawānipatna;8hbkb15oj
Ziauddin Pur;95rjuo5oj
Jamkhandi;87ujp55oj
Basmat;8fpjuc5oj
Taj Pul;955jur5oj
Kayamkulam;7nijsi5oj
Dharmapuri;7vpjx45oj;धर्मपुरी
Bīsalpur;94lk1o5oj;बीसलपुर|विशालपुर
Attili;88ek6o5oj
Cumbum;7p2juo5oj
Munnar;7q1ju25oj;मुन्नार|मुन्नार्
Panipat Taraf Makhdum Zadgan;97qjtv5oj
Nābha;9aejrj5oj
Bihāt;8wnkiy5oj
Samāstipur;8xukia5oj
Kāranja;8iwjv95oj
Sītāmarhi;8zvkhh5oj
Rājsamand;8vnjl85oj
Malkāpur;8k1jro5oj
Modāsa;8r6jjm5oj
Jaisalmer;90sjcy5oj;जेसलमेर|जैसलमेर
Buldāna;8j1jrm5oj
Dhenkānāl;8jekhs5oj
Urun-Islāmpur;89djmb5oj
Gopālganj;8zjkek5oj
Bongaigaon;8zkkvk5oj
Sangamner;8gdjm55oj;संगमनेर तालुक|संगमनेर तालुका
Hāveri;833jpg5oj
Mannargudi;7rnk0p5oj;मन्नर्गुडी
Jhālāwār;8ucjrk5oj
Tarn Taran;9ddjo55oj
Siddipet;8cajz15oj
Bellampalli;8eyk0t5oj
Barbil;8nekh65oj
Koratla;8eajyn5oj
Rishīkesh;99njxh5oj
Goyerkāta;906krb5oj
Mandamarri;8epk0r5oj
Puliyankudi;7nhjv05oj
Palāsa;8e5keh5oj
Gohāna;96yjt25oj
Pulivendla;822jxb5oj
Chengalpattu;7x9k265oj;चेंगलपट्टु|चेंगलपट्टू
Wadgaon Kolhati;8h4jp05oj
Lādnūn;92tjmo5oj
Supaul;8ykkkk5oj
Gangārāmpur;8wkkpx5oj
Ramanathapuram;7o1jyz5oj;रामनाथपुरम|रामनाथपुरम्
Jagraon;9bjjpn5oj;जग्रावं
Sinnar;8h5jlk5oj;सिन्नर
Kopargaon;8h8jmw5oj;कोपरगाँव|कोपारगांव|कोपरगाव तालुका
Alīpur Duār;8zkkso5oj
Tandur;89xjvi5oj
Khatauli;97cjvx5oj;खटौली|खतौली
Vīrarāghavapuram;7ybk2j5oj
Siuri;8sfkn55oj
Bīna;8t5jx75oj
Pālitāna;8ltjfi5oj
Chaumu;91hjqc5oj
Hālol;8oijk35oj
Kodār;898k255oj
Bāngarda Chhota;8p6jql5oj
Tādepalle;87sk3w5oj
Tirupattur;7wpjy95oj
Chinnachowk;828jz05oj;चिन्नाचौक
Bishnupur;8q3kmk5oj
Āmūr;8e7jxg5oj
Baheri;95xk0u5oj
Nawalgarh;93djp35oj;नवलगढ
Ānaiyūr;7pojwz5oj
Kunnamkulam;7rljrb5oj;कुन्नम्कुलम्
Rāghogarh;8twjug5oj
Tohāna;98jjqu5oj
Jatani;8i0ki35oj
Arni;7x7k095oj
Chik Ballāpur;7zcjvx5oj
Dhubri;8yaktz5oj;धुबरी
Borsad;8o9jii5oj
Gadwāl;874jw45oj
Pidugurālla;87sk1x5oj
Sheikhpura;8vukig5oj
Sirsi;82mjnw5oj;शिरसि|सिरसी
Nipāni;87kjmm5oj
Kannur;7uzjpc5oj;कण्णुर|कण्णूर|कन्नूर
Bāri;901jvm5oj
Nokha;92kjk35oj
Vinukonda;86lk1i5oj
Renukūt;8takao5oj
Nagari;7z0k135oj
Chidambaram;7tok1d5oj;चिदंबरम|चिदाम्बरम
Dabwāli;997jnm5oj
Sibsāgar;90yl6w5oj
Narwāna;988jrg5oj
Okha;8ofj7v5oj
Nani Daman;8ipjib5oj
Kuchāman;91fjny5oj
Nīmbāhera;8uejng5oj
Siddhapur;8sgjh15oj
Diphu;8xsl3j5oj
Attur;7u7jyc5oj;अत्तुर
Rāyadrug;82ujth5oj
Rāth;8x3k115oj
Cheruvannur;7t3jqn5oj
Vriddhāchalam;7u0k0c5oj
Bārh;8wski35oj
Shāhāda;8lvjmv5oj
Dabra;8xxjxl5oj
Udumalaippettai;7rfjul5oj
Tiptūr;7yujsg5oj
Sahaswān;93zjyr5oj
Wanparti;87hjwv5oj
Sirhind;9b4js65oj
Bārdoli;8kojj35oj
Mokameh;8wkkio5oj
Arāmbāgh;8pkknu5oj
Poonamalle;7y9k2j5oj
Keonjhargarh;8m3khs5oj
Bhadravati;8hujzr5oj
Panruti;7uqk0z5oj
Ilkal;86cjrf5oj
Kīratpur;97zjx95oj
Vrindāvan;92mjvu5oj
Kodungallūr;7qfjro5oj
Nedumangād;7lwjtw5oj
Bangaon;8xvkkb5oj
Narsimhapur;8prjzy5oj
Ponnur;86nk3r5oj
Kathua;9fxjpt5oj;कठुआ|कथुआ|कठुवा
North Lakhimpur;91ol5e5oj;लखीमपुर|उत्तर लखिमपुर|उत्तर लखीमपूर
Masaurhi Buzurg;8wfkg75oj
Nerkunram;7yak2t5oj
Shegaon;8jrjt25oj;शेगांव
Mandideep;8q4jvd5oj
Pāchora;8jfjpb5oj
Gobichettipalayam;7ttjv45oj;गोबिचेट्टिपलयम
Gangoh;98qjum5oj
Itanagar;919l415oj;ईटानगर|इटानगरम्
Jaitpur;957jut5oj
Narasapur;87nk6y5oj;नरसापुरं मण्डल
Dhone;84sjwb5oj
Rājgarh;95kjpf5oj;राजगढ़
Ullal;7xljny5oj
Panna;8uok2r5oj
Gola Gokarannāth;940k3j5oj
Gohad;8zfjxw5oj;गोहद
Wani;8hqjzb5oj
Thiruvarur;7rxk185oj;तिरुवरुर|तिरुवारूर|तिरुवारूरु
Upleta;8mejb85oj
Nūzvīd;88nk4l5oj
Lonavla;8e3jjx5oj
Una;8jujdc5oj
Sillod;8iejq55oj;सिल्लोड
Sīra;806jtm5oj
Chikhli;8ijjru5oj;चिखली
Jhārgrām;8odkln5oj
Kagaznāgār;8fpk0r5oj
Bhātāpāra;8mek7n5oj
Kāsībugga;8e4kei5oj
Hasanpur;95sjxg5oj
Lohārdagā;8r3kf85oj
Jahāngīrābād;94xjwz5oj
Sherkot;97hjy95oj
Kātrās;8s4kjq5oj
Mācherla;87sk0o5oj
Naksalbāri;904kp25oj
Sankarankovil;7nhjve5oj
Mulbāgal;7ykjxr5oj
Kandukūr;84ak1y5oj
Tiruvalla;7o2jsp5oj
Roshanpura;95gjtv5oj
Ponnūru;86nk3r5oj
Kollegāl;7vrju75oj
Mukandpur;95ujue5oj
Unjha;8s4jh35oj
Chhibrāmau;91fk0u5oj
Tilhar;93ok1i5oj
Lunglei;8pll1m5oj;लुङ्गलै|लुंग्लेइ|लुंग्लेई
Hoskote;7ybjw45oj;होसकोटे|होस्कोटे
Byasanagar;8k8kj95oj
Bada Barabīl;8nfkh75oj
Sāmalkot;89ek8a5oj
Karīmganj;8v3l0k5oj
Bobbili;8dlkbk5oj;बोब्बिलि
Mettur;7urjw45oj
Sattenapalle;87jk2n5oj
Tirūrangādi;7sojqw5oj
Tennala;7sjjqy5oj
Chakradharpur;8p0khv5oj;चक्रधरपुर|चक्रधरपूर
Sendhwa;8m9jom5oj;सेंधवा
Talegaon Dābhāde;8e2jko5oj
Hiriyūr;80qjsu5oj
Anjangaon;8ktjur5oj
Charkhi Dādri;95fjrv5oj
Ujhāni;93sjzh5oj
Bankra;8oskp85oj
Dabhoi;8nmjjz5oj
Teghra;8wtkiq5oj
Obra;8tukaj5oj
Tiruvallur;7yik1z5oj;तिरुवल्लुर|तिरुवळ्ळूरु
Mandapeta;88uk7l5oj
Tirur;7sbjqw5oj
Ropar;9c1jsl5oj
Nāmakkal;7t6jx55oj
Arcot;7xvk0c5oj
Lāharpur;92zk4q5oj
Viramgām;8q9jg55oj
Islāmpur;8yzkoz5oj
Karād;8a1jm25oj
Yanam;88hk8d5oj
Ābu Road;8u0ji65oj
Raxaul;90ykfp5oj;रक्सौल
Moonniyur;7sqjqu5oj
Barwāni;8n7jo25oj
Kottayam;7onjsk5oj;कोट्टयम्|कोट्टायम
Tiruttangal;7ocjw75oj
Petlād;8ogji85oj
Jālaun;8ynk0e5oj
Periya Semūr;7tkjvt5oj
Madhupur;8tfkko5oj
Dhūri;9adjqr5oj
Challakere;81sjsx5oj;चल्लकेरे
Etāwa;8t6jx85oj
Chiplūn;8apjk75oj
Mandlā;8osk395oj
Bhīmunipatnam;8bpkbt5oj
Mawlai-Mawïong;8x6kz85oj
Kavanur;7y4k2g5oj
Pithāpuram;89kk8h5oj
Kāndi;8skkok5oj
Idappadi;7u7jw85oj
Sāhibābād Daulotpur;95vju75oj
Punganūru;7z5jy95oj
Ghātāl;8oyknp5oj
Jāfarābād;95ojun5oj
Sāgar;81cjof5oj
Sihor;8mbjfw5oj;सिहोर
Mūndka;95ojtz5oj
Deglur;8djjvi5oj;देगलूर|देग्लुर
Madhepura;8y0kl35oj;मधेपुरा
Bārāmati;8cfjn65oj
Mahāsamund;8knk815oj
Sidhi;8tsk7g5oj
Kāsaragod;7wqjob5oj
Garhchiroli;8i2k295oj
Puttūr;7zck0z5oj
Jalor;8wfjhq5oj
Samāna;99rjro5oj
Rāzampeta;81gjzw5oj
Wāri;8krjzh5oj
Shella;8vykyk5oj
Palmaner;7yojyr5oj
Deolāli;8hejl35oj
Kanakapura;7wvjv25oj;कनकपुरा
Wokha;8yil5u5oj
Umred;8jxk0c5oj;उमरेड|उमरेड़
Kālna;8qikpg5oj
Pallichal;7lhjtz5oj
Tāndoni;7sdjwx5oj
Pārvatipuram;8e6kbr5oj
Kotharia;8nrjcq5oj
Ottapalam;7rxjs65oj;ओट्टापालम
Dīdwāna;924jn65oj
Begampur;95tju35oj
Gaddi Annaram;8a9jy45oj
Dumraon;8wzkdr5oj;डुमराँव|दम्रावं
Nerupperichchal;7t0jux5oj
Jaggaiahpet;88xk2i5oj
Rampur Hat;8t6knu5oj
Khanapuram Haveli;89yk2p5oj
Goālpāra;8yqkvr5oj
Tuni;8a8k9b5oj
Laxmangarh;93ajof5oj;लक्ष्मणगढ़
Shāhpur;88ejtg5oj
Bhongīr;8aojz55oj
Puttūr;7xgjow5oj
Ullagaram;7y2k2s5oj
Sri Dūngargarh;942jll5oj
Ayodhya;90gk8c5oj;अयोद्धा|अयोध्या
Mubarakpur;8yhkbd5oj
Amalāpuram;882k7t5oj
Arsikere;7yzjru5oj;अरसीकेरे|अर्सिकेरी
Phaltan;8bzjmr5oj;फलटण
Ashta;8pyjt45oj
Sandīla;917k3n5oj
Vikārābād;8a6jwe5oj
Baruipur;8o5kpn5oj
Choudwar;8j2kio5oj
Shāhābād;89ljtq5oj
Sultānganj;8w4kky5oj
Mandi Dabwāli;999jni5oj
Konch;8y7jzv5oj
Bāprola;95kjtx5oj
Venkatagiri;80sk125oj
Dabhel;8ipjig5oj
Biswān;92ek505oj
Kosi;937jv45oj
Siruguppa;85fjtl5oj
Sironj;8syjvt5oj
Jangaon;8b9jzv5oj
Daudnagar;8vjkeg5oj
Dandeli;84fjna5oj;दंदेली|डन्डेलि|दांदेली
Ramapuram;7y7k2q5oj
Mudhol;87djp45oj;मुधोल
Thodupuzha;7phjt45oj;तोडुपुळा|तोडुपुज़ा
Devakottai;7pnjyy5oj;देवकोट्टई
Arwal;8w4kf75oj
Kāliyāganj;8x7kpd5oj
Nasīrābād;8z2jnl5oj
Khagaul;8x2kg95oj;खगौल
Changanācheri;7o8jsm5oj
Shorāpur;87wjt85oj
Māndvi;8pfj8n5oj
Rajgangpur;8nokey5oj
Ozar;8htjld5oj;ओझर
Peranāmpattu;7xxjyo5oj
Gumlā;8q0keu5oj
Rāmnagar;97njzt5oj
Vazhakkala;7ptjs15oj
Shujālpur;8r1jt35oj
Tirumangalam;7pajwm5oj
Sidlaghatta;7z7jwa5oj;शिदलाघट्टा
Khurai;8ssjxl5oj
Hilsa;8wckgw5oj
Rampura Phul;9a4jp05oj
Fatwa;8wvkgz5oj
Tūndla;91ljxc5oj
Mannārakkāt;7sjjse5oj
Metpalle;8edjyf5oj
Naya Gaon;9bijtb5oj
Repalle;86ik4j5oj;रेपल्ले मण्डल
Hunsūr;7w6jrx5oj
Nanjangūd;7vojt05oj
Forbesganj;8z2kmf5oj
Nithari;95qju15oj
Sunabeda;8e1ka35oj
Gajraula;965jxc5oj
Vīrapāndi;7sqjuv5oj
Dāhānu;8hhjhz5oj
Rasipuram;7tujx75oj
Sālūr;8dgkb55oj
Bhabhua;8vkkc95oj
Hodal;93hjux5oj;होडल|होडाल
Bhadrāchalam;8b3k4p5oj
Aonla;94jjzx5oj
Tirupparangunram;7pgjwv5oj
Chatrā;8t9kfr5oj
Khagaria;8wukk75oj
Dhāmpur;97fjy35oj
Phalodi;91djh15oj;फलोदी
Gangākher;8epjt75oj
Sardhana;96zjvl5oj;सरधना
Nohar;972jnp5oj;नोहर
Yeola;8hojmx5oj;येभ्ल|येवला
Bhaisa;8f3jwk5oj
Perintalmanna;7sijrr5oj;पेरिंतलमन्ना
Jugsālai;8pakje5oj
Perambalur;7t7jz45oj;पेरम्बलूरु
Badūria;8p6kqn5oj
Gudalur;7u0jsg5oj
Kizhake Chālakudi;7qmjs25oj
Narkatiāganj;91akem5oj
Peddāpuram;89gk865oj
Majalgaon;8f8jrp5oj
Daund;8dbjn65oj;दौंड
Kapadvanj;8pyjiz5oj
Kotputli;92yjro5oj
Dyāne;8j5jn15oj
Bail-Hongal;85xjny5oj
Biaora;8sgjtn5oj
Naugachhia;8wjkly5oj
Kānūru;87uk455oj
Dehu Road;8dwjkt5oj
Pipariā;8p8jxn5oj
Barpeta;8z4kwt5oj;बारपेटा|बार्पॆट
Gooty;840jvo5oj;गूटी
Tamlūk;8nyko95oj
Vengara;7spjr25oj
Jaisingpur;88mjn35oj
Nangal;9d7js65oj
Jasdan;8n8jdt5oj
Godda;8uzkm95oj;गोड्डा
Bikramganj;8w1ke25oj
Morār;8yvjxa5oj
Jhajjar;95hjsy5oj;झज्जर
Rāmnagar;91gke85oj
Nihtaur;97gjxr5oj
Mahnar Bazar;8x5khg5oj
Vite;89zjn25oj
Gumia;8s4kif5oj
Anakaputhur;7y2k2l5oj
Tānālūr;7sfjqv5oj
Bhīnmāl;8vgjgr5oj
Sadasivpet;8ayjwj5oj
Bakhtiarpur;8wqkhl5oj
Jalandhar Cantonment;9cxjq25oj
Athani;88hjoi5oj;अथणी|अथ्नी|अथणी तालुका
Warud;8lnjxf5oj;वरुड|वरुद
Wānkāner;8otjd25oj
Churāchāndpur;8tll475oj
Dūngarpur;8s8jkr5oj
Chhaya;8m3j9f5oj
Dumka;8tfkmd5oj;दुमका|डुम्का|दुम्का
Gādarwāra;8pojyu5oj
Pithorāgarh;986k2t5oj
Ballia;8wmkjr5oj
Bihtā;8x0kfr5oj
Atraulī;93vjxh5oj
Walajapet;7xxk0h5oj
Koraput;8e9k9r5oj;कोरापुट
Umarkhed;8ggjvt5oj
Gudalur;7owjul5oj
Kunnamangalam;7tejqs5oj
Valasaravakkam;7y8k2p5oj
Alangad;7q2jrx5oj
Alengād;7q4jry5oj
Jodhpur;8mujaj5oj
Punalūr;7n2jto5oj
Vikramasingapuram;7m7juz5oj
Vattiyūrkāvu;7lojtv5oj
Padrauna;90qkda5oj;पडरौना|पड़रौना
Ambāh;906jxb5oj
Komalapuram;7oijs25oj
Mattanur;7v5jpx5oj
Harpanahalli;833jr35oj
Kendrāparha;8iykk25oj
Tighri;957juk5oj
Pallikal;7syjqx5oj
Selu;8g2jsc5oj
Medak;8c5jxe5oj;मेडक|मेंडक|मेडक जिला
Patancheru;8apjxe5oj
Chhatarpur;956jue5oj
Dondaicha;8l8jn55oj
Jāmner;8jtjqi5oj
Burla;8lrkcz5oj
Porur;7y8k2o5oj
Nellikkuppam;7uqk1b5oj
Padra;8nsjj05oj
Kawardha;8n5k5n5oj
Gulāothi;95fjw35oj
Joda;8n6kha5oj
Seohāra;975jyb5oj
Warora;8i7jzg5oj;वरोडा|वरोरा
Mānvi;86fju15oj
Kurseong;90okp85oj
Manglaur;98rjwc5oj
Nilambūr;7tbjrr5oj
Ganj Dundwāra;931jza5oj
Nānpāra;93ek6e5oj
Khordha;8i2khu5oj;खुर्दा
Atarra;8w9k3t5oj
Barbigha;8w2ki55oj
Merta;901jln5oj
Jammalamadugu;839jxq5oj
Garhwa;8t4kct5oj
Nawanshahr;9cgjrg5oj;नवनशहर|नवांशहर|नवान शहर
Rānāvāv;8m9j9q5oj
Bānka;8v4klg5oj
Thoubāl;8ugl545oj
Mahmudābād;91tk5c5oj
Milavittan;7mijwx5oj
Pakur;8ugko05oj
Cherthala;7owjs25oj;चेर्तला|चेर्थला|चेर्थाला
Nāyudupet;80nk1x5oj
Farrukhnagar;89gjx85oj
Rāmpura;9a2jp05oj
Chirakkal;7v3jpc5oj
Chirkunda;8rzkl35oj
Coonoor;7tjjtb5oj;कूनूर|कुन्नूर
Pāndhurnā;8m0jy55oj
Shertallai;7oxjs25oj
Kodur;7smjrb5oj
Giddarbāha;99wjnf5oj
Meddappakkam;7xwk2r5oj
Nandikotkūr;862jxf5oj
Khalīlābād;90dkar5oj
Chittaranjan;8sakle5oj
Pāthardih;8rrkk35oj
Chāmpa;8n8k9k5oj
Mehkar;8hzjsp5oj;मेहकर|मेह्कार
Dhanpuri;8qfk6k5oj
Sundergarh;8ngkdf5oj;सुंदरगढ
Dīg;92bjut5oj
Tumsar;8lek1h5oj;तुमसर
Rameswaram;7ntk0b5oj;रामेश्वरम|रामेश्वरम शहर|रामेश्वरम तीर्थ
Bangarapet;7y3jx65oj
Tānda;96ijza5oj
Vishāram;7xwk085oj
Thiruthani;7ymk165oj
Digras;8hujvw5oj
Maradu;7pmjs05oj
Bāndīkūi;915jsp5oj
Dowleswaram;893k765oj
Bālāpur;8jfjt95oj
Tondalam;7tyjs35oj
Jawaharnagar;8anjy95oj
Homnābād;8bdju95oj
Memāri;8qekoq5oj
Nāndūra;8jvjse5oj
Kottangara;7msjsx5oj
Angul;8jwkge5oj;अंगुल|अनुगुल|अनुगोल
Kōttakkal;7skjr55oj
Libāspur;95vjub5oj
Dalli Rājhara;8j7k585oj
Kālpi;8ykk1h5oj
Jintūr;8ghjt15oj
Daman;8ipjib5oj;दमण|दमन
Rāmnagar;8w7kan5oj
Anekal;7xbjvu5oj;आनॆकल|आनॆकल्
Akkarampalle;7zxk0m5oj
Nidadavole;88zk6v5oj
Raisen;8qtjw25oj
Gūduvāncheri;7xpk2e5oj
Varangaon;8kejqv5oj
Sihorā;8r9k2i5oj
Chidawa;94gjq45oj
Ahmadpur;8dzjtq5oj
Olavanna;7t6jqn5oj
Gobārdānga;8pkkqj5oj
Melmadai;7pljx35oj
Saint Thomas Mount;7y4k2s5oj
Yellandu;8avk345oj
Hāflong;8vwl2e5oj
Polavaram;89xk6s5oj
Kanuru;879k5p5oj;कनुरु|कानुरू
Bodupāl;8aejya5oj
Rāmachandrapuram;88sk7v5oj
Panachikkad;7ohjsm5oj
Shōranūr;7rwjrv5oj
Pallikaranai;7xyk2u5oj
Kāndhla;97gjun5oj
Barwāla;97ljqv5oj
Nilithi;95lju25oj
Jambusar;8n9ji85oj
Varkala;7m9jt45oj;वर्कला|वर्कले|वर्कल्
Kātol;8l3jyb5oj
Kopali;8pgkjf5oj
Sainthia;8sjknk5oj
Choornikkara;7q1js25oj
Perungudi;7y0k2w5oj
Kamal Pur Majra Burari;95vjuf5oj
Jīwanpur;95rjuo5oj
Barhiya;8w9kiy5oj
Sojat;8y0jkn5oj;सॉजत
Kālimpong;913kq75oj
Periyakulam;7q4jve5oj
Simdega;8oukeq5oj;सिमडेगा
Bishrāmpur;8tdkd55oj
Kottuvalli;7q3jrt5oj
Bairāgnia;90akgv5oj
Diglipur;7yvl2c5oj;दिगलीपुर
Panipat Taraf Ansar;97pjtr5oj
Ranjangaon S;8h4jox5oj
Kakkodi;7tgjqk5oj
Mahbūbābād;8awk285oj
Perumbaikad;7oqjsl5oj
Ārvi;8kcjxb5oj
Parāsia;8nnjys5oj
Sivaganga;7pdjy05oj;शिवगङ्गा
Limbdi;8opjfh5oj
Chavara;7mxjsm5oj
Dahegām;8qdjia5oj
Shāhābād;99tjtj5oj
Jaspur;97cjyz5oj;जसपुर|जस्पुर
Thān;8opjds5oj
Bāola;8pfjh05oj
Khekra;967juo5oj
Bhupalpally;8d7k1u5oj
Dīnhāta;8ymksi5oj
Aland;8asjsp5oj;आलंद|आलन्द
Kumbalangy;7pgjrw5oj
Naini Tāl;97ok0p5oj
Idar;8s8jis5oj;ईदार
Chinnamanūr;7pcjuy5oj
Bhawāni Mandi;8tujqo5oj
Kyathampalle;8gnjy55oj
Sikandra Rao;92xjxq5oj
Palladam;7sjjup5oj
Rāzām;8d9kce5oj
Jājpur;8jxkju5oi
Jora;8z6jw55oi
Canning;8nzkqb5oi
Khairābād;92hk4b5oi;खैराबाद
Pratāpgarh;8srjnq5oi
Dhāka;903kgl5oi
Kannad;8iajoq5oi
Nāthdwāra;8vajl25oi
Abdu Rahiman Nagar;7srjqy5oi
Golāghāt;8znl505oi
Kekri;8y5jor5oi;केकड़ी|केक्री
Barauli;8zakez5oi
Mahē;7uijpt5oi
Diamond Harbour;8nnkoz5oi
Sūrampatti;7thjvv5oi
Bāghpat;96ejui5oi
Bar Bigha;8w2ki55oi
Nārāyanpet;88jjva5oi
Khambhāliya;8npj9h5oi
Bilāra;8yqjkr5oi
Trikonavattam;7mpjsz5oi
Rājgīr;8vjkha5oi
Kudappanakkunnu;7lrjts5oi
Paithan;8g4jpf5oi;पैठण
Kodīnar;8jrjce5oi
Pīleru;7zyjza5oi
Pirāyiri;7rxjsv5oi
Rāmganj Mandi;8uhjqy5oi
Vaijāpur;8hdjnl5oi
Kannamangalam;7ssjr35oi
Saundatti;85tjoo5oi
Jaggayyapeta;88xk2i5oi
Peddapalli;8dpk0h5oi
Dhupgāri;8zvkr95oi
Triprangod;7s4jqz5oi
Chākan;8e4jl65oi
Bharthana;90bk025oi;भरथना|भर्तहना
Patti;9cwjny5oi
Jalārpet;7wxjy95oi
Vadgaon;8imjwz5oi
Tālcher;8k7kgr5oi
Thottada;7uwjpi5oi
Kalliyoor;7lfjtx5oi
Arantāngi;7q9jzf5oi
Athiyannur;7lbju25oi
Icchannūr;7tkjqi5oi
Sherghāti;8u8kfj5oi
Bhādra;96ujot5oi
Jhajha;8utkjy5oi;झाझा
Ghātsīla;8orkk85oi
Dharmanagar;8tpl015oi
Kayalpattinam;7ltjx05oi;कायलपट्टनम|कयल्पट्टिनम
Nowgong;8vmk0o5oi
Savanūr;83ljpa5oi
Nailā;8n6k9d5oi
Nannambra;7sjjqv5oi
Manapparai;7rhjxv5oi
Boyampālaiyam;7szjuv5oi
Kallakkurichchi;7umjzc5oi
Kulathummal;7lnju45oi
Ettumānūr;7ovjso5oi
Ghātampur;8ynk2p5oi
Channarāyapatna;7xvjs75oi
Akivīdu;882k625oi
Kovvūr;89ak715oi
Vellakkovil;7sfjvv5oi
Bhālki;8c4juh5oi
Sabalgarh;8yxjv15oi;सबलगढ़
Kāttipparutti;7s7jr95oi
Murtajāpur;8jljux5oi
Peringathur;7ujjpz5oi
Solan;9bvju75oi
Nādāpuram;7ugjq55oi
Gursahāiganj;91ck1h5oi
Maihar;8tfk4c5oi
Bantvāl;7xtjof5oi
Pallipalayam;7tljw05oi
Mapusa;85bjl15oi;म्हापुसा
Tāki;8orkr15oi
Akalkot;8apjrp5oi
Maner;8x9kfr5oi;मनेर
Mālūr;7y4jwi5oi
Bakhri;8x4kjm5oi
Mayyanād;7mkjsx5oi
Mappilaiurani;7mkjx25oi
Melur;7pvjxm5oi
Hāsimāra;90bks75oi
Sathupalli;89xk4n5oi
Pūranpur;957k2n5oi
Aklūj;8bpjoe5oi
Bānsi;91ikad5oi
Bīlāspur;969k075oi
Vadavalli;7smjtm5oi
Thakurdwara;973jz25oi
Amudālavalasa;8d5kd25oi
Vyāra;8knjjv5oi
Bhavāni;7ttjvs5oi
Samālkha;978jtx5oi
Lakkanahalli;7vnjx35oi
Porsa;903jxp5oi;पोरसा
Kadungalūr;7q1js05oi
Kālappatti;7ssju05oi
Anandpur;8kxkj85oi
Chaklāsi;8oxjim5oi
Rādhanpur;8s7jew5oi
Murshidābād;8t6kp75oi
Manakunnam;7phjs55oi
Bhachāu;8qqjbe5oi
Jalālābād;9b1jma5oi
Kurinjippādi;7u3k135oi
Sedam;89qjup5oi;सेडम
Vādāsinor;8psjjq5oi
Kampli;84tjss5oi
Kāro;8s3kiu5oi
Tirkadavūr;7msjsr5oi
Jogbani;8zckmf5oi
Mūkondapalli;7xfjw45oi
Sirohi;8v5jid5oi;सिरोही
Aroor;7pfjry5oi;अरूर
Othukkungal;7snjr75oi
Ghosī;8yjkc25oi;घोसी
Sumerpur;8vvjj05oi
Pehowa;99ajsq5oi;पेहवा|पिहोवा
Kārakkād;7rfjr85oi
Nūrpur;96zjxt5oi
Revelganj;8xnkf45oi
Betamcherla;84xjx35oi
Belpahar;8mmkcx5oi
Chīka;99hjs25oi
Paravūr Tekkumbhāgam;7mfjsz5oi
Tuvāgudi;7rvjyy5oi
Dwārka;8nsj7l5oi
Kotamangalam;7pyjsv5oi
Kātpādi;7y1jzv5oi
Rangat;7wrl245oi
Sagauli;90ckfe5oi
Rāhuri;8fvjnd5oi
Sanāwad;8nljrb5oi
Kondapalle;886k3q5oi
Vetapālem;85vk335oi
Sangariā;98sjmv5oi
Jalesar;92bjxi5oi
Nattakam;7ojjsj5oi
Paliā Kalān;94zk3u5oi
Bayāna;90rjup5oi
Rājula;8kgjeg5oi
Bodh Gaya;8umkg35oi;बोधगया|बोद्ध गया
Keru;8yrjiw5oi
Kollancode;7l1ju75oi
Kilakarai;7nnjyv5oi;कीलाकाराई
Kumhāri;8l3k6g5oi
Chikodi;87njn75oi;चिकोडी|चिक्कोडी|चिकोडी तालुका
Khairtal;938jsw5oi
Pathanāmthitta;7nrjta5oi
Chōrōd;7ubjpz5oi
Nandigāma;88lk315oi
Indi;89qjqz5oi
Kondli;95hjut5oi
Nildoh;8knjzf5oi
Kabnur;88ejms5oi
Malavalli;7wfju25oi
Sūlūru;802k2a5oi
Kāman;92ujun5oi
Chetwayi;7r9jr95oi
Nongthymmai;8x0kzb5oi;नोङथीम्मई|नोंगथिम्माई
Shahbazpur;8z3kmh5oi;शाहबाजपुर
Wādi;89djtv5oi
Tirupati NMA;7zvk0t5oi
Gauribidanur;7ztjvc5oi
Tāsgaon;89cjn85oi
Agar;8rvjr65oi
Rajakilpakkam;7xwk2p5oi
Gharonda Neemka Bangar;95ijup5oi
Dibai;94djxe5oi
Robertsganj;8ulkar5oi;राबर्ट्स्गञ्ज
Pen;8e2jj25oi
Tarikere;803jql5oi
Maudaha;8xck2j5oi;मौदहा
Gharaunda;982jtt5oi;घरौंडा|घरौंदा
Sathyamangalam;7tzjuk5oi;सत्यमंगलम
Cheyyar;7x6k0y5oi
Sonepur;8xekgl5oi
Niwai;8z8jqw5oi
Gogri Jamālpur;8wlkkq5oi
Bilāsipāra;8yvkun5oi
Nangli Sakrawat;95ijtv5oi
Satānā;8j7jm45oi
Rāwatbhāta;8v9jpz5oi
Ellenabad;97tjne5oi
Wānādongri;8kljzd5oi
Parola;8k0joo5oi;पारोला
Pāthri;8fijsb5oi
Bopal;8pzjhb5oi
Chettipālaiyam;7t1juu5oi
Talattala;7mnjsz5oi
Jhālrapātan;8u6jrl5oi
Zira;9c1job5oi;ज़ीरा
Leh;9kxjvi5oi;लेह
Kānker;8ibk6d5oi
Sārangpur;8rhjsf5oi
Sandūr;83xjsn5oi
Bāngarmau;90pk2t5oi
Kanigiri U;84tk0v5oi
Jaito;9aljo15oi
Dongargarh;8kvk4b5oi;डोंगरगड|डोंगरगढ़|डोंग्रागढ
Phulbāni;8iwkdz5oi
Malayinkeezhu;7llju05oi
Attingal;7m6jte5oi;अत्तिनगल
Perunkalattu;7xwk2g5oi
Morsi;8lajwp5oi
Pilibangan;97tjlu5oi
Nelamangala;7yejuz5oi
Sindgi;890jrr5oi
Vettūr;7m8jt55oi
Bhadgaon;8jfjoz5oi
Ratia;98hjpy5oi
Sirūr;8ebjml5oi
Ashta;893jmp5oi;आष्टा
Lālganj;8xvkgl5oi
Tinnanūr;7yfk2b5oi
Bandipura;9lmjnc5oi
Bābarpur;95pjup5oi
Pujali;8ofkov5oi
Garhmuktesar;95zjwy5oi
Bahādurganj;8yykny5oi
Nakodar;9chjpo5oi;नकोदार
Lūnāvāda;8q9jkh5oi
Vazhayur;7t6jqu5oi
Hojāi;8y8l1y5oi
Akbarpur;8zfk995oi;अक्बरपुरम्
Pīpār;8zajka5oi
Lanka;8y1l275oi
Tuensang;8yzl7e5oi
Vuyyūru;87gk4k5oi
Lakshmeshwar;841jpn5oi
Kumta;823jmq5oi;कुम्ता
Yāval;8ktjqa5oi
Tilda Newra;8lvk785oi
Kattivākkam;7yqk345oi
Peringottupulam;7snjre5oi
Sohna;94hju35oi;सोहना
Patāmundai;8j6kkg5oi
Kodaikānāl;7qgjv95oi
Ichchāpuram;8f3kf95oi
Daryāpur;8k4jut5oi
Chunār;8vtka85oi
Amīnpur;8aojxk5oi
Mungeli;8nbk6x5oi
Barnagar;8q1jpe5oi
Pūrna;8fajtz5oi
Khunti;8q4kgw5oi
Nargund;85ojpf5oi;नरगुंद|नर्गुंद
Parappur;7sljr35oi
Neem ka Thana;932jqj5oi
Vilappil;7loju05oi
Nilanga;8ccjt75oi;निलंगा|निलांगा
Naharlagun;91al4a5oi;नहार्लगुन|नाहरलागुन
Boisar;8h0ji45oi;बोइसर|बोईसर|बोइसार
Ausa;8cpjsi5oi;औसा
Sadābād;928jws5oi
Bindki;8yck3u5oi
Mahālingpur;87jjon5oi
Rāvu;8owjql5oi
Mālpura;8z0jpc5oi
Bramhapuri;8j9k1u5oi
Wai;8bvjl95oi;वाई
Shikaripura;81njpc5oi
Shirdi;8gxjmw5oi;शिरडी|शिर्डी
Neduva;7sqjqr5oi
Venganoor;7lcjtw5oi
Ramanattukara;7t2jqr5oi
Mokokchūng;8z4l6k5oi
Pinjaur;9bkjto5oi
Mādāyi;7vfjp05oi
Partūr;8ggjrq5oi
Dīndārpur;95gjtv5oi
Talakkād;7s8jqx5oi
Krishnarājāsāgara;7wkjs65oi
Jhābua;8p9jn75oi
Madipakkam;7y0k2s5oi;मदिप्पक्कम
Karāla;95uju05oi
Gariadhar;8lujeu5oi
Kakrāla;93hjzz5oi
Bīdāsar;93cjmg5oi
Lahār;8yrjza5oi
Ambasamudram;7m7jv55oi;अम्बसमुद्राम
Islāmpur;8vukgp5oi
Kaipamangalam;7qpjri5oi
Medchal;8azjy05oi
Ganaur;96xjty5oi
Sholinganallur;7xtk2v5oi
Kovūr;82ak275oi
Tuljāpur;8c1jrb5oi
Barpeta Road;8zmkwp5oi;बरपेटा रोड|बर्र्या रोड
Uravakonda;83ijul5oi
Babīna;8w4jxz5oi
Rafiganj;8uykf35oi
Umarga;8bkjsu5oi;उमरगा
Igatpuri;8gqjkc5oi;इगतपुरी
Perumanna;7t9jqt5oi
Budhāna;97djv85oi;बुधना
Lingsugūr;86wjsk5oi
Rājpīpla;8mrjk65oi
Dharangaon;8kdjp35oi;धरणगाव|धरनगाँव|धरनगांव
Mahemdāvād;8peji45oi
Karamsad;8omjii5oi
Sūrandai;7myjv25oi
Manali;7ylk2z5oi
Wāris Alīganj;8vikhw5oi
Pulgaon;8jkjxk5oi
Usilampatti;7ppjw35oi
Puzhathi;7v2jpf5oi
Perunād;7mvjsw5oi
Kāramadai;7t8jts5oi
Giddalūr;84pjz95oi
Atmakūr;864jyb5oi
Pāppinisshēri;7v8jpa5oi
Vijāpur;8rgji35oi
Rāwatsār;97bjmo5oi
Dubrājpur;8s3kmq5oi
Karumattampatti;7svjue5oi
Jalālābād;931k1a5oi
Māranchēri;7rujr15oi
Podaturpet;7ywk0t5oi
Shāhābād;95djzh5oi
Peruvallur;7sujqx5oi
Rairangpur;8nvkjd5oi;राइरंगपुर
Sīrkāzhi;7t8k1i5oi
Kichha;96bk0w5oi
Vijayapura;7yyjw45oi;विजयपुरा
Hebbagodi;7xnjvs5oi;हेब्बगोडी|हेब्बागोडी
Chēmanchēri;7tojqc5oi
Erāttupetta;7oxjta5oi
Rāmdurg;86bjp65oi
Jāmadoba;8rwkk05oi
Safidon;97pjsz5oi
Bolārum;8asjxn5oi
Bareli;8pwjxb5oi;बरेली
Erāmala;7uhjpz5oi
Shikārpūr;94kjwp5oi
Sankeshwar;876jmw5oi
Karjat;8ejjjo5oi;कर्जत
Bakhtiyārpur;8wqkhl5oi
Bagasra;8lpjd45oi
Villiappally;7uajq35oi
Aymanam;7opjsi5oi
Angamāli;7qbjs75oi
Villianur;7v3k1k5oi;विल्लियानूर
Manipal;7z3jnq5oi
Lālsot;8zsjs15oi
Mehidpur;8r9jq65oi
Soyāgaon;8j3jmz5oi
Sāngola;8agjov5oi
Vedaraniyam;7qtk1t5oi
Kuruvattūr;7tijqo5oi
Muddebihāl;87ejrh5oi
Navāpur;8ksjkz5oi
Khāchrod;8r2jp45oi
Yanamalakuduru;87tk435oi
Malajkhand;8n9k485oi
Vapi INA;8ikjil5oi
Kunigal;7y6jtz5oi;कुणिगल|कुनिगाल
Kadūr;7znjr55oi
Chelambra;7szjqr5oi
Hamīrpur;8y4k2n5oi
Kokrajhar;8zckur5oi;कोक्राझार|कॊक्राझार्|कोकराझाड़ जिला
Risod;8hijtb5oi
Kālka;9bojtq5oi;कालका
Nawābganj;95ak175oi
Kāgal;882jmg5oi
Pārassāla;7l6jub5oi
Titlāgarh;8idkaz5oi
Begamganj;8rkjxm5oi
Nagalapuram;7z7k1o5oi
Jāmkhed;8e2jp75oi
Fatehpur;91hk5l5oi;तहसील फ़तेहपुर
Elampalloor;7mwjsz5oi
Jayamkondacholapuram;7t5k0g5oi
Tudiyalūr;7ssjtq5oi
Ālankōd;7rvjr75oi
Shāhpura;923jr05oi
Elayavur;7v1jph5oi
Guledagudda;86ljqj5oi
Iramallūr;7pyjsp5oi
Piro;8wdkeg5oi
Guskhara;8r9knp5oi
Umreth;8p2jj45oi
Narsīpatnam;8b3k9h5oi
Bahjoi;94wjyf5oi;बहज़ोई|बह्जोइ
Dharmābād;8ehjw95oi
Chockli;7uljpw5oi
Vemalwāda;8dbjz35oi
Colgong;8w6kmb5oi
Bāsudebpur;8kokkx5oi
Rājākhera;90qjx55oi
Hailākāndi;8ukl145oi
Jagatsinghapur;8iakjd5oi
Gevrai;8fijqf5oi
Madikeri;7wjjqe5oi
Kopāganj;8yakc55oi
Thāna Bhawan;987jv25oi
Pūndri;98ojso5oi
Vagholi;8dmjli5oi
Birmitrapur;8o8kfh5oi
Chaksu;8zxjqz5oi;चक्षु|चाकसू
Darsi;85tk1c5oi
Zaidpur;90jk5x5oi;जैदपुर|ज़ैदपुर
Remuna;8ltklb5oi;रेमुना
Puthenvelikara;7qbjrt5oi
Āmli;8icjiu5oi
Anūpgarh;973jjd5oi
Salāya;8nzj9c5oi
Idangansālai;7ubjwn5oi
Kosamba;8lmjio5oi
Basavana Bāgevādi;881jr15oi
Muhammadābād;8x6kco5oi
Lakhyabad;8rrkkr5oi;लोयाबाद
Aya Nagar;953ju95oi
Umaria;8rck4k5oi
Chanderi;8unjx25oi;चंदेरी|चन्देरी
Ajānūr;7wajol5oi
Manendragarh;8qhk8c5oi
Rāmgarh;949joa5oi
Bhādāsar;94njmd5oi
Srvanampatti;7ssjtw5oi
Bhokar;8fejvr5oi;भोकर
Patrātu;8rrkgy5oi
Sānchor;8urjfd5oi
Kurumbapet;7v6k1l5oi
Kaimganj;92jk0e5oi;कायमगंज|कैम्गञ्ज
Bāmaur;8z6jwy5oi
Jānjgīr;8n5k9e5oi
Egra;8mukn65oi
Bihārīganj;8xhkln5oi
Mushābani;8ojkk65oi
Udaipur;8rdky45oi
Dighwāra;8xikg55oi
Ngūr;8rel3d5oi
Garhākota;8s2jzu5oi
Vengola Kizhakkumbāgam;7pyjsg5oi
Mamun;9fojqa5oi
Nānjikkottai;7rtjzu5oi
Bijuri;8qlk845oi
Ghugus;8hejzr5oi
Tārānagar;95njof5oi
Nepānagar;8lljs75oi
Bādepalli;88jjx25oi
Nautanwa;927kbq5oi
Pīrzādagūda;8abjyb5oi
Hisua;8uzkha5oi;हिसुआ
Shamshabad;89xjxu5oi
Vallabh Vidyanagar;8oljii5oi
Erraguntla;82ojy65oi
Edappāl;7ryjr55oi
Manuguru;8btk4j5oi
Soro;8l4kkt5oi
Ulliyeri;7ttjqh5oi
Saoner;8lfjz85oi;सावनेर
Muttayyāpuram;7mbjx15oi
Manwath;8fmjsi5oi;मन्वथ|मानवत
Dhandhuka;8o6jfz5oi
Jūjūvādi;7xhjw35oi
Hatta;8t1k145oi
Jagdīspur;8wrkei5oi
Almora;988k1a5oi;अलमोडा|अल्मोडा|अल्मोड़ा
Thuraiyur;7szjyc5oi
Saknepalli;8elk0q5oi
Anta;8vvjry5oi
Gajendragarh;85qjr15oi
Narsinghgarh;8rvju55oi
Kalyandurg;82fju75oi
Chittūr;7rqjt75oi
Madhapar;8qkj9m5oi
Chhabra;8uijtg5oi
Manamadurai;7ovjxz5oi;मनमदुराय
Tiruchchendur;7lmjx05oi
Bisauli;94njza5oi
Kangayam;7sljvg5oi
Mannanchōri;7oljs35oi
Kakching;8u2l525oi
Turaiyūr;7szjyc5oi
Bijaynagar;8y1jnd5oi
Ferokh;7t2jqo5oi
Dhāmnod;8npjpn5oi
Jora Khurd;8zljwm5oi
Pāvugada;816juo5oi
Thenhippalam;7sxjqs5oi
Halvad;8pyjdq5oi
Meerpet;8a4jy55oi
Zamānia;8wmkc45oi
Bhatkal;80vjn45oi
Malkapur;89yjm25oi
Makhdumpur;8vnkg15oi
Shafi Pur Ranhola;95mju05oi
Jāridih;8s1kiq5oi
Rasrā;8xukcx5oi
Sādpalli;89tk4k5oi
Sattur;7o0jwg5oi
Maur;99kjp15oi
Chhota Gobindpur;8p7kjm5oi
Sāsvad;8cyjln5oi
Vilavoorkkal;7lkjty5oi
Kotma;8qgk7q5oi
Kottaikuppam;7v8k1s5oi
Khaira;8gzji45oi
Tālīkota;87rjrz5oi
Puzhal;7ykk2s5oi
Kalpatta;7u9jrc5oi;कल्पेट्टा|कालपेट्टा
Ambad;8ghjqj5oi
Rāhatgarh;8s3jxr5oi
Sijua;8s2kjt5oi
Vandavāsi;7wqk155oi
Tirumuruganpūndi;7t0jur5oi
Thanneermukkom;7oujs65oi
Parūr;7q7jrr5oi
Gomoh;8sbkjb5oi
Elūr;7pzjrw5oi
Chemmumiahpet;826jyx5oi
Jalālpur;8z3k9u5oi
Kharagpur;8vskkg5oi;खडगपुर|खडगपूर|खरगपुर
Sri Mādhopur;92bjq05oi
Lumding Railway Colony;8xjl2t5oi
Ahmedgarh;9b8jqn5oi
Chītāpur;89kju45oi
Jhanjhārpur;8yykjo5oi
Nāspur;8edk0q5oi
Singānallūr;7skjtz5oi
Unchagao;88ejmb5oi
Bagru;90hjpv5oi
Cheriyamundam;7sfjr05oi
Allapuram;7xujzt5oi
Rāmāpuram;7yejzy5oi
Rosera;8xjkiz5oi
Podili;85dk155oi
Shrīgonda;8dqjni5oi
Kalliyasshēri;7vajpc5oi
Kannānendal;7pojx25oi
Pāndharkawada;8hmjy75oi
Mankāchar;8wxktm5oi
Katirur;7uqjpt5oi
Erandol;8k4jp95oi;एरंडोल|एरानडोल
Adirampattinam;7qqk0i5oi
Kūrāli;9bnjsq5oi
Jagdīshpur;90bk3r5oi
Ponneri;7z2k2r5oi
Shamsābād;912jx05oi
Malakanagiri;8d0k7h5oi
Deolali;8g3jna5oi
Mangrūl Pīr;8ifjuu5oi
Narsampet;8btk1x5oi
Berasia;8rnjv35oi;बैरसिया|बेरासिया
Bādāmi;867jq85oi
Pasān;8pgk8c5oi
Pāmban;7nsk015oi
Banda;8ssjzc5oi
Kalakkādu;7lnjvf5oi
Kondagaon;8gfk6u5oi
Puthuppariyāram;7s1jsv5oi
Vilāngudi;7pnjwx5oi
Rūdarpur;8zgkc95oi
Sholinghur;7ygk0m5oi
Mānāvadar;8lqjau5oi
Purāini;8vuklm5oi
Deūlgaon Rāja;8hmjr85oi
Dharmadam;7uqjpm5oi
Madurāntakam;7wrk1w5oi
Kizhuvalam-Koonthalloor;7m2jtd5oi
Dharamsala;9fijs05oi;धरमशाला|धर्मशाला
Pedana;876k5e5oi
Kaij;8dzjrb5oi
Kallamchavadi;7xzk2l5oi
Un;8sdjfd5oi
Vadanappally;7r3jrc5oi
Irimbiliyam;7s6jrd5oi
Mūdbidri;7ybjoc5oi
Pallappatti;7rsjwc5oi
Cheranellūr;7pxjrx5oi
Mahārāganj;91ekc45oi
Nāgāvaram;8aljyc5oi
Tarakeswar;8plkoh5oi
Tifrā;8nak855oi
Siraspur;95wju95oi
Kundapura;7zvjnh5oi
Uran;8egjim5oi;उरण
Kasba;8xukn65oi
Karjan;8n9jj45oi
Muvattupuzha;7pqjsp5oi;मुवात्तुपुझा|मूवाट्टुपुषा
Manāwar;8nsjol5oi
Pihānī;92qk2s5oi
Madukkarai;7sbjts5oi;मदुकरै|मदुक्कराई
Amlai;8qgk6m5oi
Mānsa;8r3jhu5oi
Dhāruhera;94djtc5oi
Sarkhej;8pujhe5oi
Banmankhi Bazar;8xxkm75oi
Rehli;8rojzm5oi
Udaipur;930jpn5oi
Tāramangalam;7uhjwl5oi
Amla;8mwjx15oi
Tirukkoyilur;7v9k005oi
Musiri;7sfjxw5oi
Hīrākud;8ltkcz5oi
Khair;93mjw85oi;खैर|खैर प्रखण्ड
Rajauli;8ugkhi5oi
Kakkalapalle;82ojvh5oi
Cherukavu;7t1jqv5oi
Seoni Mālwa;8odjv75oi
Oddanchathiram;7r4jvz5oi
Fatehpur Sīkri;919jvq5oi;फ़तेहपुर सीकरी
Azhiyūr;7uhjpw5oi
Byādgi;82rjpp5oi
Birpara;906krn5oi
Cherpulassery;7s8jrz5oi
Multai;8mhjxe5oi;मुल्तै|मुल्ताई
Holenarasipura;7xjjrs5oi
Talāja;8lbjg45oi
Marhaura;8y5kfr5oi;मढ़ौरा|मर्हौरा
Kareli;8pojzm5oi
Baddi;9c0jtb5oi
Bhongaon;91qjzy5oi
Pānakkudi;7l4jvi5oi
Gadhada;8n1jeu5oi
Pūlakkōd;7tfjqz5oi
Mukeriān;9erjq25oi
Rāmgarh;91pjou5oi
Ariyānkuppam;7v2k1p5oi
Karumālūr;7q5jrw5oi
Kottārakara;7n0jt95oi
Mavoor;7tbjqw5oi
Pilāni;94tjq05oi
Devarkonda;88djz85oi
Rājgarh;8spjt55oi
Mīnād;7mljt25oi
Nedumbassery;7q8js85oi
Rājūra;8gyk0g5oi
Bilāri;95ijyw5oi
Mūvattupula;7pqjsq5oi
Adūr;7ngjt55oi
Walwadi;8k4jno5oi
Puthuppally;7okjsp5oi
Mīrānpur Katra;93vk1b5oi
Rāisinghnagar;982jk15oi
Kidarakulam;7ltjtv5oi
Kuttuparamba;7uvjpx5oi
Ārangaon;8evjnj5oi
Pakridayal;8zskg95oi
Dhanera;8u3jg25oi
Chengamanād;7q7js25oi
Lākheri;8xbjrm5oi
Kalavoor;7oljs15oi
Behror;93hjrw5oi;बेह्रोर
Reddipālaiyam;7yfk2k5oi
Zunheboto;8y5l6k5oi
Rajaori;9iqjmf5oi
Sankagiri;7twjwb5oi
Mharal Bk;8fhjja5oi
Maināguri;8zskqq5oi
Nedumpana;7mrjt15oi
Puttankulam;7mhjt45oi
Nāgar Karnūl;87sjxk5oi
Sāgwāra;8rsjlm5oi
Ibrāhīmpatnam;882k3n5oi
Vadakku Valliyūr;7lajvl5oi
Jāmtāra;8skkl45oi
Khedbrahma;8srjix5oi
Tirukkalikkunram;7x1k2e5oi
Talakkolattur;7tjjqg5oi
Pālkonda;8dokco5oi
Cheruthazham;7vkjp25oi
Dhāri;8l9jdb5oi
Amballūr;7qzjru5oi
Koovappady;7q8jsh5oi
Chendamangalam;7q8jrr5oi
Jewar;944jvg5oi
Nawāpāra;8k9k7e5oi
Tarsadi;8lnjin5oi
Ner;8ixjwb5oi
Shāhpura;8x6jo45oi
Vijayapuram;7onjso5oi
Husainābād;8u5kdc5oi
Udaipurwati;931jpn5oi
Bachhraon;96djxb5oi
Jandiāla Gurū;9dojof5oi
Irinjālakuda;7qqjrp5oi
Renwāl;91gjpc5oi
Kumbalam;7pjjrz5oi
Basni;91hjkl5oi
Morigaon;8yxl0j5oi
Madhugiri;7zyjuh5oi;मधुगिरि|मधुगिरी|मधुगिरिः
Urakam;7spjr35oi
Ariyalūr;7syjzo5oi
Islāmnagar;94pjyp5oi
Ponmana;7n1jsk5oi
Mahendragarh;94jjrj5oi
Mudalgi;87ejo95oi
Nakrekal;89ok0n5oi
Unamaucheri;7xqk2j5oi
Gorai;8fhji65oi
Uttamapālaiyam;7p9jut5oi
Khandela;92ojpq5oi;खण्डेला
Sirsāganj;916jyl5oi
Chodavaram;8bjkae5oi
Umarkot;8gnk8d5oi
Hupari;886jmo5oi
Suār;96njzm5oi
Devadurga;87mjtq5oi;देवादुर्गा
Manoharpur;91ujqz5oi
Nāhan;9awjup5oi
Lādwa;99bju15oi
Gil;9bpjqq5oi
Gunupur;8f0kct5oi
Avinashi;7t3jun5oi
Kotagiri;7tqjti5oi;कोटागिरी
Sikka;8obja05oi
Panipat Taraf Rajputan;97kjtq5oi
Kondotty;7syjr15oi
Desāīganj;8jak245oi
Rusera;8xjkiz5oi
Maddūr;7wyju05oi
Nongstoin;8wwkxi5oi;नोङस्तोइन|नाँगस्टॉइन|नोंग्स्टोइन
Rāikot;9b5jq05oi
Dinapur Cantonment;8x8kg65oi
Jhālod;8q6jm05oi
Karera;8wqjx25oi
Murlīganj;8xyklo5oi
Soron;93hjyr5oi
Mukher;8dzjux5oi
Vandiyūr;7pjjx45oi
Alandi;8dwjla5oi;आळंदी|अलन्दी|आलन्दी
Pattāmbi;7s0jrm5oi
Tekkali;8dpke05oi
Duliajan;920l8s5oi;दुलियाजान|दुलियाजान नं. १
Duliajan Oil Town;920l8r5oi
Kāraippudūr;7sqjur5oi
Ambikāpuram;7rzjsx5oi
Sūryampālaiyam;7tojvv5oi
Motipur;8yxkgk5oi
Ālangulam;7mmjva5oi
Addanki;85xk255oi
Bemetāra;8mck6h5oi
Milak;95hjzx5oi;मिलक
Losal;924jo45oi;लोसल
Alirajpur;8nyjmk5oi;अलिराजपुर|अलीराजपुर|अलीराजपुरम्
Pārdi;8izjin5oi
Kinwat;8gjjx85oi;किनवट|किन्वात
Pasan;8qck7l5oi
Lālgola;8tukp55oi
Utraula;91wk8y5oi;उतरैला|उतरौला तहसील
Baikunthpur;8qmk9c5oi
Jowai;8wol035oi;जवाई|जोवाइ|जोवाई
Ochira;7ndjsj5oi
Rāpar;8rhjc95oi
Jammu Cantonment;9gujny5oi
Bānswāda;8d2jwc5oi
Hosadurga;80cjrw5oi;होसदुर्ग|होस्दुर्गा
Ramanayyapeta;893k8g5oi
Mīnjūr;7ywk2y5oi
Sonāmukhi;8qrkmt5oi
Kukshi;8npjno5oi
Kansad;8kjjig5oi
Kālāvad;8npjbi5oi
Jashpur Nagar;8plkdq5oi
Māvelikara;7nqjso5oi
Dhanaura;96gjxe5oi
Jalgaon Jamod;8khjsl5oi;जलगांव|जलगाँव जामोद
Pallipuram;7p4js45oi
Sujānpur;9fsjq15oi
Annigeri;84vjpj5oi
Piravam;7pfjsi5oi
Ganderbal;9l3jnp5oi;गंदेरबल|गांदरबल|गान्दरबल
Uliyazhathura;7lujto5oi
Mandi;9e3jtp5oi;मंडी|मण्डी
Atholi;7tnjqg5oi
Shiggaon;83njoy5oi
Pandua;8q3kp95oi
Pūnch;9jtjlt5oi
Kottaikādu;7w2k265oi
Hāngal;830joo5oi
Jhadeshwar;8mbjiv5oi
Polūr;7wrjzs5oi
Sheohar;8znkgx5oi
Perumbavoor;7q3jsf5oi
Gundlupēt;7utjt15oi
Sachīn;8kljig5oi
Koynanagar;8acjkx5oi;कोयनानगर
Gotegaon;8pzk0s5oi
Kalwākurti;88ajy15oi
Sheoganj;8vujiz5oi
Devanahalli;7ytjvv5oi;देवनहल्ली|देवन्हल्ली
Āron;8tqjv25oi
Hadagalli;83qjqx5oi
Patran;998jr95oi
Tharād;8tsjez5oi
Panāgar;8qpk285oi
Dāsna;95ojvc5oi
Kulittalai;7sdjxt5oi
Sulur;7smju95oi;सुलूर
Rangia;8zhkyh5oi
Bāmor Kalān;8v5jx35oi
Umargām;8i4ji35oi
Nalbāri;8zgky05oi
Pallikunnu;7v1jpc5oi
Trittāla;7s0jrh5oi
Vadnagar;8s3jhs5oi
Jaswantnagar;90ojz65oi;जसवंतनगर|जस्वन्तनगर
Afzalgarh;97njyj5oi;अफ्जलगढ|अफज़लगढ़
Gangāpur;8gqjod5oi
Mahna;99zjob5oi
Rāipur;9a7jwx5oi
Mathur;7ylk2x5oi
Tehri;9afjy05oi;टिहरी|नई टिहरी|नवे तेहरी
Māgadi;7y0jui5oi
Pūvātūparamba;7tbjqt5oi
Bāspalli;8aqjxo5oi
Mahād;8c8jjy5oi
Ezhupunna;7pajry5oi
Sānkrāil;8onkp35oi
Wārāseonī;8mgk2c5oi
Beldānga;8shkp65oi
Jilādiguda;8a5jy55oi
Sausar;8m6jyw5oi
Moothakunnam;7qbjro5oi
Pathirappally;7oijs05oi
Hadgāon;8g6jvq5oi
Chandrapura;8rzkj85oi
Rājaldesar;93vjmv5oi
Pachor;8rvjt55oi
Azhoor;7m0jtc5oi
Mīrānpur;97djwj5oi
Sādri;8vzjk15oi
Kullattūr;7xyk2r5oi
Balussheri;7ttjqn5oi
Kālānwāli;98wjo95oi
Kadodara;8ksjio5oi
Chakapara;8ovkpf5oi
Nanminda;7tqjqm5oi
Nokha;8vqkdo5oi
Kattumannarkoil;7tck105oi;कत्तुमन्नरकोइल|काट्टुमन्नारकोइल
Kalamb;8ewjlg5oi
Āndippatti;7psjvm5oi
Arumuganeri;7ltjwx5oi
Elamanchili;8arka65oi
Adichānallūr;7mojt45oi
Laitumkhrah;8x1kza5oi
Gulābpura;8xyjne5oi
Pāthardi;8f9jot5oi
Kundarkhi;95ojyv5oi;कुन्दरकी|कुन्दर्की
Ukhrul;8vsl645oi;उखरुल|उख्रुल
Gadhinglaj;872jmj5oi;गधिंगलज|गडहिंग्लज
Bilgrām;91ik2b5oi
Ali;958jur5oi
Jāfarābād;8jzje95oi
Bhelai;8nzk9h5oi
Bidhūna;90gk0v5oi
Ayakudi;7r1jvf5oi
Vettanād;7lxjtq5oi
Āsandh;980jst5oi
Perumpāvūr;7q4jsg5oi
Chanpatia;90ukeu5oi
Afzalpur;89sjs45oi
Gobindpur;8ovkj35oi
Tikkotti;7twjq25oi
Gingee;7w1k0m5oi;जिंजी|गिन्जी
Rāver;8l1jr85oi
Bāgepalli;80ajw45oi
Kotdwāra;98njy45oi
Payakaraopeta;8a9k9d5oi
Bhawanipur;8zhklr5oi
Elamkunnapuzha;7pvjrq5oi
Ettumanoor;7ovjsp5oi
Lātehār;8rykeq5oi
Chengam;7w7jyv5oi
Rājgarh;91ojsu5oi
Kumārapuram;7nrjsb5oi
Margherita;91sl9r5oi
Kulasēkarapuram;7n9jsl5oi
Sāmba;9ggjoo5oi
Pirthīpur;8w1jyr5oi
Vepagunta;8bekb65oi
Vadipatti;7q0jwk5oi;वाडिपट्टी
Shenkottai;7myjul5oi
Edacchēri;7ugjq25oi
Banmankhi;8xxkm75oi
Srīnivāspur;7z2jx95oi
Palavakkam;7xzk2y5oi
Chāndur;8gtjzx5oi
Indāpur;8cujjh5oi
Varappuzha;7q0jrv5oi
Kemrī;961k005oi;केमरी|केम्री
Alattūr;7rljsl5oi
Bela;8x0kej5oi
Krishnāpuram;7nfjsk5oi
Kartārpur;9dcjpq5oi
Māmidālapādu;861jwp5oi
Karhal;910jza5oi
Lar;8yskd95oi
Kūdligi;83ejs75oi
Alīganj;92djzx5oi
Baloda Bāzār;8m6k885oi
Manihāri;8wekne5oi
Kottur;7rajtu5oi
Faizpur;8ktjqq5oi
Manāsa;8u0joq5oi
Sankarapatti;7pxjyr5oi
Songadh;8ktjkc5oi
Pauri;99rjyu5oi;पौडी|पौरी|पौड़ी
Shāhganj;8ydk9o5oi
Dhrol;8opjbm5oi
Pallippatti;7v6jxs5oi
Barwāh;8ntjr85oi
Mauganj;8ujk7f5oi
Bablāi;9acjtk5oi
Nādbai;91mjug5oi
Terdāl;87tjoh5oi
Kallidaikurichi;7m5jv75oi
Taloda;8lwjm55oi
Murugampālaiyam;7ssjus5oi
Mon;90al825oi
Kheri;93ik4g5oi;खीरी|खेरी
Bilsi;945jz75oi;बिल्सी
Basi;9azjtg5oi
Āyanchēri;7ubjq75oi
Anjad;8n8joi5oi
Kottūru;836jrq5oi
Chinnalapatti;7qkjwg5oi
Narasannapeta;8d5kdg5oi
Ongallur-II;7rzjrq5oi
Rāmpur;98tjv55oi
Aklera;8ttjsp5oi
Mirganj;8z9ke95oi
Kūdlu;7wtjoa5oi
Tekkalakote;855jtk5oi
Mungaoli;8ttjwy5oi
Budhlāda;995jpw5oi
Anuppānadi;7pijx25oi
Reengus;920jpx5oi;रींगस
Sutrāpāra;8jwjbs5oi
Kodoli;8b3jln5oi
Phulera;90njp05oi
Renigunta;7zxk0v5oi;रेणिगुंट मण्डल
Basi;90jjr95oi
Khoni;8fojiy5oi;खोणी|खोनी
Areraj;8zrkf85oi
Muttanampālaiyam;7ssjv05oi
Junnar;8fdjl85oi;जुन्नर
Mehsi;8z8kgd5oi
Edavai;7mcjt15oi
Mangaldai;8zgkzn5oi
Naduvannūr;7txjqi5oi
Krishnarājpet;7x7jsh5oi
Tirāwari;98sjtp5oi
Mannachanallur;7sbjym5oi
Periyanayakkanpalaiyam;7szjtr5oi
Kuttikkāttūr;7tajqs5oi
Kālol;8otjk25oi
Jaynagar Majilpur;8nmkpm5oi
Kailāras;8z2jvm5oi
Chīpurupalle;8cvkc55oi
Iringal;7u4jq25oi
Jamjodhpur;8mujak5oi
Chumukedima;8xql4i5oi
Thodiyoor;7n8jsq5oi
Jāmul;8l1k645oi
Nalhāti;8tiknz5oi
Kāladi;7s2jr55oi
Muhamma;7opjs45oi
Ponmundam;7sfjqz5oi
Mulamthuruthy;7pijs75oi
Gokarna;82fjmg5oi;गोकर्ण
Ganguwa;96vjqa5oi
Koregaon;8dtjlq5oi
Kāndla;8pzjb25oi
Erannoli;7upjps5oi
Kārkala;7ypjob5oi
Dārwha;8ifjw15oi
Chhota Udepur;8nyjlm5oi
Avanigadda;86ik4s5oi
Mussoorie;9aljwv5oi;मसुरी|मसूरी
Kuttippuram;7s4jr75oi
Jaleshwar;8mkkma5oi
Jais;8yyk6j5oi
Kallam;8dmjr65oi
Pawāyan;93zk2i5oi
Irugūr;7smju25oi
Jevargi;899jt95oi;जेवर्गी|जेवार्गी
Mechcheri;7uvjwi5oi
Silao;8vokhb5oi
Khajuraho Group of Monuments;8v1k215oi;खजुराहो
Silapathar;92nl745oi;सिलापथार
Dākor;8p7jj75oi
Wadgaon;88sjmf5oi
Deori Khās;8qzjzi5oi
Jandiāla;9ckjq25oi
Balakrishnapuram;7qsjwo5oi
Panayāttur Vadakkumbhāgam;7mvjsu5oi
Pāsighāt;93zl8t5oi
Kheda;8p7jhx5oi
Nagar;926ju65oi;नगर
Viswanatham;7o7jw45oi
Kamalāpuram;84ijsg5oi
Poranki;87sk475oi
Parangipettai;7txk1k5oi
Andipalayam;7stjur5oi
Adampur;97cjpn5oi
Kakkanad;7pujs25oi
Indāpur;8ccjof5oi
Talikkulam;7r0jrd5oi
Colonelganj;91dk6y5oi;कर्नलगंज|कर्नेलगञ्ज
Mehndāwal;90ykav5oi
Koelwār;8x2kfk5oi
Harūr;7vhjy05oi
Bannūr;7w9jti5oi
Mūl;8hrk1c5oi
Kuttampuzha;7q7jt65oi
Karuva;7mvjss5oi
Dorāha;9bkjr65oi
Koothanallur;7rsk0w5oi;कौथनल्लुर|कूतानल्लूर
Khātegaon;8osjtn5oi
Nīlēshwar;7w2joq5oi
Edaicode;7lajug5oi
Kadakkavoor;7m4jt95oi
Haludbani;8p7kjh5oi
Chāndor;8ihjm85oi
Sundarnagar;9dmjtm5oi
Amarpur;8vkkle5oi
Karungappalli;7najsm5oi
Gadkhol;8m4jit5oi
Banganapalle;84kjxb5oi
Anūpshahr;94sjxf5oi
Jalālābad;98ajv45oi
Chitaguppa;8b6jui5oi
Bābra;8mpje35oi
Shamsābād;92ik0o5oi
Kithor;967jwi5oi
Kallūr Vadakummuri;7qhjs15oi
Machhlīshahr;8xdk8x5oi
Bagha Purana;9b9jom5oi
Bhānder;8xijyr5oi
Azhikkōd;7v4jpa5oi
Uttiramerūr;7x1k1k5oi
Dasūya;9eejq55oi
Gursarāi;8x6jzy5oi
Pāonta Sāhib;9akjvm5oi
Tirorā;8lgk215oi
Rājgurunagar;8efjla5oi
Pottaneri Nallakavundanpatti;7usjwa5oi
Kamaruddinnagar;95oju15oi
Gauripur;8ygktw5oi
Rānia;980jnw5oi
Mugalivakkam;7y6k2p5oi
Thazhecode;7tgjr25oi
Saiha;8ohl2a5oi
Chinna Salem;7ubjz35oi
Vayalār;7ozjs25oi
Ahraura;8vikan5oi
Rampachodavaram;8agk765oi
Māngrol;8wdjsj5oi
Shrīrangapattana;7wijt05oi
Kantai;8ytkgy5oi
Kharkhauda;968jtn5oi
Kanigiri;84tk0v5oi
Chengannūr;7nwjsu5oi
Sohāgpur;8p2jx85oi
Chandauli;8w6kbb5oi;चंदौली|चन्दौली
Paramathi Velur;7t3jwk5oi
Velur;7svjwo5oi
Naubatpur;8wukg05oi
Sāndi;91tk235oi
Kolasib;8tal1g5oi;कोलसिब|कोलासिब
Marayur;7qkjuc5oi
Padam;9izjtk5oi
Shiraguppi;886jnj5oi
Ābu;8ubji05oi
Sadulshahar;993jm25oi
Borāwar;912jng5oi
Marutharōd;7ryjt25oi
Gajwel;8bljyk5oi
Devarshola;7u2jsc5oi
Kunda;8xgk6f5oi;कुंडा
Sakleshpur;7xyjqi5oi
Perundurai;7tcjvj5oi
Mundargi;849jqs5oi;मुन्दर्गी
Māchhīwāra;9bwjro5oi
Nainpur;8obk2j5oi
Tarāna;8qtjr85oi
Keirao Bitra;8unl515oi
Kānth;96qjyf5oi
Charkhāri;8wkk1j5oi
Kushtagi;85sjrn5oi
Churi;8rpkg55oi
Vellalūr;7sijtz5oi
Srīperumbūdūr;7y1k225oi
Muthutala;7s4jrk5oi
Mahwa;915jtp5oi;महवा|मह्वा
Kandahār;8efjuf5oi
Avilala;7ztk0m5oi
Fālna;8w7jjg5oi
Ghoti Budrukh;8gsjkj5oi
Safīpur;90ak365oi
Brāhmana Periya Agrahāram;7tljvv5oi
Thirunavaya;7s7jr35oi
Anklesvar INA;8m2jiv5oi
Kalamnūri;8gnjur5oi
Kabrāi;8wkk285oi
Ilaiyankudi;7orjye5oi
Talwāra;9eqjqt5oi
Fīrozpur Jhirka;937jtq5oi
Tijāra;93ljti5oi
Pūnāhāna;93ejug5oi
Tattānkuttai;7tsjvw5oi
Koregaon;8b6jm05oi
Phillaur;9c6jqj5oi
Pākāla;7zdjzr5oi
Hinjilicut;8g4kfe5oi;हिंजिलिकट
Damua;8nnjxz5oi
Ezhudesam;7kzjua5oi
Andol;8bhjww5oi
Shāmgarh;8t7jq45oi
Ratanpur;8nxk895oi
Kodarma;8tzkhr5oi;कोडरमा|कोडर्मा|कोदर्मा
Keshorai Pātan;8w9jqy5oi
Navalgund;858jpb5oi
Bholav;8mcjit5oi
Williamnagar;8wukvq5oi
Bijbehara;9jvjon5oi;बिजबेहरा|बिजबिहारा
Gorantla;80ujw15oi
Dātāganj;93vk0l5oi
Tiruppuvanam;7pbjxe5oi
Beohāri;8sqk625oi
Pantheeramkavu;7t7jqp5oi
Chharra;93kjxs5oi
Hudkeshwar Buzurg;8kkjzt5oi
Pindwāra;8uwjiy5oi
Singāpur;8ajjx15oi
Sahaspur;96wjye5oi;सहासपुर
Ugrākheri;97mjtx5oi
Kānt;939k1n5oi
Bhokardan;8iajqh5oi
Maheshwar;8nmjpz5oi;महेश्वर
Thiruthuraipoondi;7r9k175oi
Meenambakkam;7y2k2p5oi
Chiknāyakanhalli;7zajsu5oi
Mahārājgani;8yjkeq5oi
Ayanavelikulangara Vadakku;7n4jsk5oi
Kaithoon;8vsjr15oi
Denkanikota;7wtjw35oi
Chekkiād;7ukjq45oi
Mayāng Imphāl;8udl4t5oi
Haliyal;84ljno5oi;हलियाल
Vilankurichi;7srjty5oi
Rajākheri;8sajyv5oi
Sitārganj;96dk1e5oi
Nāndgaon;8ifjne5oi
Siuliban;8rzkl25oi
Dharampur;8j2jj95oi
Sikandarpur;8yckdh5oi
Muhammadābād;8ybkbm5oi
Srīsailain;86njz35oi
Barki Saria;8t6kil5oi
Loha;8emju85oi
Mhaswad;8azjnr5oi;म्हसवड|म्हस्वाद
Alot;8s0jpw5oi;अलोट|आलोट
Suryaraopeta;898k8e5oi
Aluva;7q3js35oi;आलुव|अलुवा
Hastināpur;970jwp5oi
Chettipālaiyam;7sbju05oi
Sōmēshvara;7xkjny5oi
Pacode;7l6juh5oi
Pāppākurichchi;7s1jyr5oi
Morinda;9bjjsi5oi;मोरिंडा
Diu;8jjjd65oi;दिउ|दीव
Nabīnagar;8udkdp5oi
Dīnānagar;9fajpn5oi
Māyābandar;7xvl225oi
Kaikalapettai;7y6k2k5oi
Bāzpur;96zjzr5oi
Karumāndi Chellipālaiyam;7tejvj5oi
Dalsingh Sarai;8xbkig5oi
Makronia;8s9jyw5oi
Longowal;99wjq85oi
Sāvantvādi;866jl25oi
Vīrakeralam;7sljtn5oi
Nāsriganj;8vlke95oi
Pādiyanallūr;7yok2q5oi
Reoti;8xtkee5oi;रेवती
Fatehganj West;953k0b5oi
Sadalgi;880jn15oi
Nasrullāhganj;8p0jun5oi
Sarjamda;8p7kjj5oi
Narakal;7pwjrq5oi
Lalgudi;7s7jyy5oi;लालगुडी
Ulundurpet;7uhk095oi
Lālganj;8y1k6y5oi
Malakpur Kohi Rangpur;95aju85oi
Nivāri;8wfjyw5oi
Vypīn;7ppjrt5oi
Muluppilagadu;7usjpl5oh
Alwaye;7q3js35oh
Tisaiyanvilai;7l6jwb5oh
Srīkandamangalam;7oujs45oh
Kutiatodu;7p8js15oh
Pipri;8jrjyb5oh
Natham;7qfjxb5oh
Unnamalaikadai;7l2juk5oh
Penugonda;889k735oh
Balod;8jlk5l5oh
Mariāni;902l605oh
Qadian;9eejpe5oh;कादियां
Painkulam;7kyjud5oh
Prāntij;8r4jic5oh
Kulgam;9jgjoe5oh;कुलगाम|कुल्गाम|कुल्गांव
Chinnūr;8eek1o5oh
Katheru;89ck765oh
Mairwa;8yvkds5oh
Todaraisingh;8yajpo5oh;टोडारायसिंह
Pokaran;90sjfs5oh
Kūmher;91wjux5oh
Sreekaryam;7lrjto5oh
Pānchla;8omkou5oh
Mudkhed;8f8jva5oh
Shivpur Charcha;8qtk995oh
Jhīnjhak;8zsk1h5oh
Pethāpur;8qmjhv5oh
Malpe;7z3jni5oh
Birūr;7zsjr15oh
Māndal;8wojn55oh
Shīshgarh;95tk0b5oh
Kuchera;90zjlh5oh;कुचेरा
Pattiyūrgrāmam;7nijsi5oh
Sevilimedu;7xlk1d5oh
Pawni;8jrk185oh
Mānesar;94rjtq5oh
Chhātāpur;8yuklo5oh
Tūnēri;7uijq35oh
Urmar;9e0jq45oh
Lonar;8hjjsk5oh;लोणार|लोनार
Pugalūr;7srjwq5oh
Rāmtek;8lgk0d5oh
Monoharpur;8nfkoo5oh
Injambakkam;7xwk2x5oh;इन्जम्बक्कम
Mandāwa;93yjor5oh
Mahārājpur;8vik1h5oh
Soygaon;8j8jq25oh
Kalānaur;963js85oh
Chitrakoot Dham;8w1k4s5oh
Ron;85mjqd5oh
Vengattūr;7yek215oh
Nāyanakulam;7pojx25oh
Bewar;91mk0a5oh
Marampilly;7q3jsc5oh
Od;8oujj45oh
Tapa;9a6jpd5oh
Vaikam;7p3js85oh
Kērkandi;7tljt75oh
Bissāu;94hjok5oh
Colachel;7kqjum5oh
Sāhibganj;8z3kfx5oh
Karmāla;8d5jov5oh
Tharangambadi;7snk1t5oh
Hinakallu;7w9jss5oh
Thiruvankulam;7pnjs55oh
Tiruverumbūr;7rzjyt5oh
Kudachi;887jnx5oh;कुडची|कुद्ची
Seondha;8ynjyu5oh;सेवढ़ा
Kurduvādi;8c9jpi5oh
Mattigiri;7xajw55oh
Lalganj;8xokak5oh
Polasara;8gpkfl5oh;पोलसरा
Iroopara;7lxjtn5oh
Nakūr;994juq5oh
Narasingapuram;7u8jya5oh
Palwal Rural;947juv5oh
Pallikonda;7xvjza5oh
Asifābād;8fsk085oh
Pīpri;8gzjpu5oh
Indargarh;8xzjy85oh
Sivagiri;7nyjv35oh
Vadakkanandal;7uqjz05oh
Ancharakandy;7v0jpp5oh
Trikarpūr South;7vojov5oh
Hukeri;873jn85oh;हुकेरी|हुक्केरी|हुक्केरी तालुका
Todabhim;90sjte5oh;तोडाभीम
Dooru Verinag;9j8joz5oh
Pehlādpur Bāngar;95vju45oh
Tiruchanur;7ztk0p5oh
Kanhān;8kzk045oh
Gopavaram;832jy95oh
Vattalkundu;7q8jw05oh
Dhamanagar;8k4kk55oh
Saidpur;8wykb65oh
Tittagudi;7tpjzs5oh
Phulpur;8wzk815oh
Kunnatnād;7pwjsa5oh
Jharoda Mazra Burāri;95tjuh5oh
Karanjiā;8mgkit5oh
Sāngaria;8yrjiv5oh
Balarāmpur;8q6kji5oh
Aramboli;7kxjvc5oh
Ubaidullāhganj;8pwjvj5oh
Chitarpur;8rhkhx5oh
Naraingarh;9aoju95oh;नारायणगढ़
Sāmbhar;90rjov5oh
Vellūr;7lzjtf5oh
Fatehnagar;8uxjlu5oh
Raghunathpur;8rekkr5oh
Pariyāpuram;7smjqr5oh
Kasrāwad;8nhjq15oh
Lāthi;8mcjeb5oh
Dugda;8rzkjd5oh
Khirkiya;8nljti5oh;खिरकिया|खिर्किया
Mudgal;86hjsc5oh;मिद्गल
Curchorem;84ejlv5oh
Chorwād;8kfjb35oh
Madhira;890k385oh
Kādiganpalli;7wsjx95oh
Akaltara;8n6k8z5oh;अकलतरा|अकालतारा
Etmadpur;91ojx85oh
Katghora;8oik9a5oh;कटघोरा|कट्घोरा
Lohāra;8injwx5oh
Ponda;84sjlm5oh;पोंडा|फोंडा|फ़ोंडा
Cumbum;85ajzr5oh
Mātābhānga;8z6kru5oh
Jaitāran;8ysjle5oh
Tāoru;94djtr5oh
Lehragaga;996jqk5oh
Jāmai;8nojyb5oh
Sholavandan;7pujwk5oh
Nāgod;8u9k3v5oh
Khairāgarh;8lik4y5oh
Kurikuppi;84ajsx5oh
Ariyallur;7ssjqp5oh
Pukhrāyān;8yuk1s5oh
Rāman;997joa5oh
Sirsi;95kjyg5oh
Bankāpur;83gjp25oh
Godoli;8b3jll5oh
Baswa;91fjsq5oh
Rājmahal;8vlknz5oh
Nambol;8uml4m5oh
Bikram;8wpkfq5oh
Tulsīpur;92hk8y5oh
Belūr;7yljqr5oh
Sānehwāl;9bojr35oh
Sisauli;99qjum5oh
Kanniyākumāri;7khjve5oh
Senapparetti;7sgjwz5oh
Naraura;94cjxr5oh
Kailāshahar;8tlkzk5oh
Triparappu;7lbjun5oh
Deogarh;8lukfd5oh
Rātu;8r2kgp5oh
Puthencruz;7pqjs95oh
Kurandvād;88cjn75oh
Timurni;8o5juj5oh
Pachgaon;88ajm75oh
Rahata;8gsjmw5oh
Pāli;8qwk545oh
Bhawānīgarh;9a3jr85oh
Suket;8uhjr85oh
Panniyannūr;7unjpy5oh
Ādanāttutekkumuri Kizhakku;7n8jsj5oh
Ankola;82qjme5oh;अंकोल|अंकोला
Mariāhu;8x4k9g5oh
Kilapavoor;7mrjv35oh
Rāmavarappādu;87wk445oh
Purwā;8zik4d5oh
Attimarappatti;7majwz5oh
Dasnapur;8gljy35oh
Badāmibāgh;9knjnx5oh
Lingiādīh;8nck8a5oh
Sahāwar;938jyz5oh
Bhuban;8k0kif5oh;भुबन|भुवन
Nilakottai;7q8jw95oh
Sidhaulī;91sk4j5oh
Palavansathu;7xtjzt5oh
Adra;8rakks5oh
Muhammadābād;91vk0n5oh
Sarapāka;8b5k4n5oh
Bhānvad;8mxj9u5oh
Someshwar;7zhjoj5oh
Nārāinpur;8gsk5o5oh
Nāmagiripettai;7tujxf5oh
Nāwa;912joc5oh
Peravurani;7qlk005oh
Kathhāra;8s0kik5oh
Kathlāl;8pmjir5oh
Siwāna;8x9jh65oh
Deoli;8xkjpe5oh;देवली
Kizhuparamba;7t9jr65oh
Palai;7ozjt05oh
Chhanerā;8n0jt15oh
Marakkanam;7vvk225oh
Chhatrapur;8fskg25oh;छत्रपुर
Bhinga;92yk7l5oh;भिंगा|भिनगा
Lauri;8vuk285oh
Nalambūr;7ydk2p5oh
Kuppam;7xfjxm5oh
Fatehābād;913jxi5oh
Kīl Bhuvanagiri;7tsk195oh
Saktī;8n7kag5oh
Karuvanthuruthy;7t1jqm5oh
Kollivāyal;7tyjsg5oh
Sancoale;84qjla5oh;सांकवाल|सांकोले
Polichalur;7y3k2m5oh
Bhābhar;8svjew5oh
Nowrozabad;8qvk4y5oh
Laungowāl;99vjq85oh
Chāchaura;8t6jtw5oh
Ghulewadi;8ggjm35oh
Chandrakona;8p5kn45oh
Sangod;8v9jrx5oh
Kherālu;8sdjhq5oh
Farakka;8uyko65oh;फ़रक्का
Mulavukad;7ptjru5oh
Mangalvedha;8anjpl5oh
Māniyūr;7u3jq55oh
Kantābānji;8ivkac5oh
Chalthan;8krjio5oh
Jainagar;8zvkja5oh;जयनगर
Kopawor;9lxjma5oh
Sakri;8kbjmf5oh;साक्री
Dattāpur;8jqjx25oh
Umarsera;8iljx05oh
Napāsar;93ojkc5oh
Shendurjana;8lsjxg5oh
Pātūr;8iujtq5oh
Digboi;923l9m5oh
Jirapur;8sqjs65oh
Kalleribhāgam;7n5jso5oh
Muthupet;7qwk0t5oh
Dum Duma;92ll9g5oh
Pāmpur;9kijo45oh
Munderi;7v5jpl5oh
Sūrajgarh;94njqd5oh
Kadayal;7ldjun5oh
Kundli;967ju85oh
Bālāchor;9cajry5oh
Pushkar;8zljn35oh;पुष्कर|पुस्कर|पुष्करनगरम्
Doda;9i3jpv5oh
Karanpur;98wjk25oh
Samthar;8xsjz75oh
Banat;97ujuv5oh;बनत
Dhekiajuli;906l0w5oh
Māndalgarh;8vzjoj5oh
Barāra;99xju05oh
Tammampatti;7tsjy15oh
Chamba;9ggjrh5oh;चंबा|चम्बा
Murādābād Pahāri;95cjub5oh
Mahādula;8l1jzo5oh
Bānsdīh;8xwkdy5oh
Srisailam Project RFC Township;86njz35oh
Bacheli;8dwk5r5oh
Āsika;8ghkf65oh
Guruvāyūr;7rfjr85oh
Lālru;9apjtc5oh
Virugambakkam;7y9k2r5oh
Chotila;8oajds5oh
Vāsudevanallūr;7nojv15oh
Kuju;8rxkhj5oh
Padmanābhapuram;7kwjut5oh
Mandāwar;97xjx15oh
Paippad;7o6jsq5oh
Kondasamudram;7xzjz45oh
Mahgawān;8zljye5oh
Bedi;8oijak5oh;बेडी|बेदी
Tekāri;8vakfo5oh
Dindori;8pqk585oh
Channagiri;80yjqx5oh;चन्नगिरि|चन्नागिरि
Kuzhithurai;7l4juf5oh
Kodamthuruth;7p8jry5oh
Ghātanji;8hyjxj5oh
Naduvattam;7s8jr45oh
Chhāta;930jvb5oh
Sanaur;9a6jse5oh;सनौर
Reethapuram;7kqjul5oh
Kottappally;7u9jq65oh
Serchhīp;8qpl1x5oh
Pudupattanam;7wrk2n5oh
Telhāra;8kfjtg5oh
Narkher;8lnjy55oh
Ajnāla;9egjno5oh
Anthiyur;7u6jvj5oh
Bisālgarh;8rskxk5oh
Dhulagari;8oqkox5oh
Talala;8khjbx5oh
Būndu;8qckhr5oh
Teliamura;8s8kyj5oh
Devgadh Bāriya;8p3jlb5oh
Patharia;8sejzz5oh;पथरिया
Kiraoli;91ejw35oh
Patnāgarh;8jjkax5oh
Bhānpura;8u3jqf5oh
Perinjanam;7qnjrj5oh
Anklav;8o6jis5oh
Abrama;8jyjij5oh
Bagulā;8qukq85oh
Gunnaur;94gjxw5oh
Pālakkodu;7w7jwv5oh
Sindi;8jmjyb5oh
Chelora;7v1jpk5oh
Rajpur;8myjoq5oh
Nāravārikuppam;7ynk2q5oh
Marthandam;7l3jui5oh
Vinnamāla;80nk1z5oh
Sarauli;955jzp5oh
Adampur;9dbjqb5oh;आदमपुर|आदमपुर9|अदम्पुर्
Badnāwar;8pyjoz5oh
Banga;9cnjr35oh
Heli Mandi;94qjt85oh
Chincholi;8ajjv25oh
Hungund;86mjra5oh
Thaikkattussery;7p5js25oh
Bangawan;8qfk855oh
Kapasan;8v5jmg5oh
Sālamedu;7v3k0t5oh
Barpāli;8kvkc75oh
Gormi;8zwjy35oh;गोरमी|गोर्मी
Begūn;8vejoc5oh
Lawngtlai;8oll225oh
Nandri;8z3jj25oh
Dhing;8zjl0v5oh;ढिंग|धिंग|धिङ्ग शहर
Vadakarai Kīl Pidāgai;7n4jun5oh
Clement Town;9a2jwp5oh;क्लेमेंट टाऊन|क्लेमेन्ट टाउन
Sonepur;8jvkd45oh;सोनपुर
Kaikalūr;87zk5l5oh
Akhnūr;9hejnl5oh
Alībāg;8dtjig5oh;अलिबाग|अलीबाग|अलिबाग्
Kāpren;8wljrb5oh
Muthukulam;7nmjse5oh
Bhadauni;8v4khl5oh
Alīpur;960ju95oh
Achampet;87kjyg5oh
Ghorabandha;8p9kjn5oh
Koduvayur;7rpjsy5oh
Sāmalāpuram;7srjug5oh
Chākia;8zekg95oh
Jining;94el7h5oh
Bhanjanagar;8hdkey5oh;भंजनगर
Vadāli;8sijiw5oh
koppana Agrahara;7xqjvr5oh
Madattukkulam;7rcjux5oh
Gurmatkāl;88vjuz5oh
Dhāriwāl;9esjp85oh
Patuvilāyi;7uzjps5oh
Dayal Pur;95sjun5oh
Talwandi Sābo;99ajok5oh
Jahāzpur;8x6jp45oh
Sāvda;8krjqt5oh
Vadakakarai;7q9jro5oh
Viratnagar;928jrm5oh
Belsand;8zgkh85oh;बेलसंड|बेलसांढ
Sāmpla;95yjt95oh
Vasind;8fxjji5oh
Kishtwār;9ijjqh5oh
Achhnera;91ijw05oh
Attibele;7xijw15oh;अतिबेले
Bhikkiwind Uttār;9d3jni5oh
Chillupār;8z0kbz5oh;बड़हलगंज|बर्लहलगञ्ज
Tilpat;953jut5oh
Bijāwar;8uek0t5oh
Nellimarla;8cgkbt5oh
Maham;96hjrx5oh
Maniar;8y7kdt5oh
Yellāpur;83kjnj5oh
Keevallur;7v2jpt5oh
Nangli;9e1jo15oh
Baud;8jwke95oh
Nīmāj;8ynjlk5oh
Korochi;88gjmt5oh
Tufānganj;8z4kt35oh
Pataudi;94pjta5oh;पटौदी
Dhārūr;8eajrf5oh
Pariyāram;7vijp85oh
French Rocks;7wqjsz5oh
Ahīwāra;8lck665oh
Bāda;8yejoe5oh
Sarwar;8ywjop5oh;सरवाड़
Edavilangu;7qgjrl5oh
Jhālu;97ijxb5oh
Killannur;7rgjrq5oh
Mundra;8pgj9o5oh
Byndoor;80jjnb5oh
Chāpar;8yzkv95oh
Kondalampatti;7ubjx05oh
Bawāni Khera;96fjr75oh
Basi;9b9js85oh
Ālampālaiyam;7tkjw15oh
Umbri;8jjjtz5oh
Wellington;7tljta5oh
Hārij;8rtjfr5oh
Raipur Domana;9h4jnq5oh
Settūr;7o5jv85oh
Penukonda;814jvj5oh
Waluj Buzurg;8h0joz5oh
Kotivakkam;7y1k2y5oh
Srīnagar;99yjyu5oh
Kataiya;8ztkdk5oh
Nirmāli;8z3kkj5oh
Surajpur;8qhka75oh
Puliyankannu;7xyk0b5oh
Morwa;8pmjl45oh
Pāttyam;7urjpw5oh
Kaimori;8qyk1i5oh;कीमोर|कैमोर
Mau;8yzjyj5oh
Pudussery West;7rzjt55oh
Mau Aimma;8xek7k5oh;मौ ऐमा|मऊ आइमा
Chinnavādampatti;7sqjtu5oh
Fālākāta;8zokrs5oh
Sūleswaranpatti;7rkjtx5oh
Dhaurahra;93sk595oh
Khairāgarh;90ujw65oh
Maksi;8qmjrj5oh
Annur;7t8ju75oh;अन्नुर|अन्नूर
Pulwama;9k3jo25oh
Sirumugai;7tgjtx5oh
Singānuram;8eak0u5oh
Dergaon;906l515oh;देरगाँव|देरगांव
Cheppad;7nnjsf5oh
Khowai;8swkyg5oh
Govardhan;92ejv65oh
Saraipali;8l8kal5oh
Paravai;7pojwv5oh
Khalāri;8rpkg55oh
Rāya;92kjw35oh
Powai;8f4jii5oh;पवई|पंचकुटिर
Pāmūru;83yk0l5oh
Sawar;8xkjoy5oh;सावर
Belonia;8qlky15oh
Takhatpur;8nhk7f5oh;तखतपुर
Sullya;7wwjpf5oh;सुल्लिया|सुळ्य तालुका
Bhusawar;914ju15oh;भुसवार
Chunchupally;8aok3w5oh
Charthāwal;983jvj5oh
Siswā Bāzār;91fkco5oh
Bīrpur;8znklp5oh
Kandalloor;7nijsf5oh
Dhanaula;9a4jpx5oh
L.A.Sagaram;80mk1x5oh
Sarigam INA;8idjid5oh
Kanjiramkulam;7l8ju15oh
Anūppur;8q6k6x5oh
Moirāng;8u2l4i5oh
Nattappettai;7xmk1j5oh
Bāli;8w0jjl5oh
Bokajān;8yal4i5oh
Rānikhet;98ck0n5oh
Sirka;8rpkhb5oh
Boriavi;8otjil5oh
Aurād;8cpjv25oh
Sankaraperi;7mkjwz5oh
Kulu;9esju75oh;कुलु|कुल्लु|कुल्लू
Kalinjur;7xzjzt5oh
Chetput;7wmk0f5oh
Kolavallúr;7unjq25oh
Sonāri;912l7y5oh
Deoraniān;95jk0s5oh
Kolāras;8w2jvl5oh
Chinna Āndānkovil;7sfjwv5oh
Raval;8mwj905oh
Chāndūr;8jtjwm5oh
Kannānkurichchi;7uijx65oh
Kattanam;7nijso5oh
Ghatkesar;8ahjyk5oh
Borgaon;8jkjyc5oh
Sendamangalam;7tcjxb5oh
Chhāpar;93ajms5oh
Udangudi;7lfjwr5oh
Tirumeshi;7y9k2e5oh
Kerūr;86hjpv5oh
Verukulambu;7l2jup5oh
Shāhpur;8l0jrr5oh
Jhinjhāna;980jui5oh
Kumbhrāj;8tpju15oh
Bareja;8phjhn5oh
Vadakku Viravanallur;7m6jvc5oh
Mokēri;7uqjpx5oh
Samrāla;9bojrn5oh
Jūnāgarh;8h6kad5oh
Nalco;8jzkgm5oh
Badi;8q0jww5oh
Charipara;8s5kxh5oh
Resubelpara;8xykvp5oh
Jharoda Kalān;95ljtr5oh
Kalmeshwar;8kzjz85oh
Lāwar Khās;96vjw25oh
Srīrāmnagar;89zjxe5oh
Mulakumūd;7kzjup5oh
Pattan;9kwjn45oh
Bāgbahra;8khk8v5oh
Vīsāvadar;8lajcj5oh
Pināhat;90ojxq5oh
Pennādam;7tok045oh
Nainwa;8xljqp5oh;नैनवा|नैन्वा
Rameswaram;82yjy65oh
Jānsath;97hjw95oh
Santrampur;8qfjla5oh
Richha;95pk0w5oh;रिछा
Bhāyāvadar;8mqjb55oh
Aistala;8qekq25oh
Methukummal;7l3jub5oh
Gannavaram;87yk4g5oh
Amarpātan;8tjk4y5oh
Sojītra;8omji05oh
Singur;8pdkp35oh
Singarāyakonda;84bk2b5oh
Punnayūr;7rljr45oh
Konnūr;870jnn5oh
Narwar;8x8jwf5oh
Weir;912jue5oh
Wazīrganj;94djzm5oh
Kakdwip;8mskoz5oh
Tamenglong;8vil3p5oh
Jalochi;8cgjn95oh
Kaimur;8stk3x5oh
Maholi;92uk3j5oh;महोली|माहोली
Bilhaur;90kk2e5oh
Mangalam;7zyk0q5oh
Raja Pur Khurd;95kjtz5oh
Khānāpur;85gjmz5oh
Tiruppālai;7pqjx15oh
Burhar;8qhk6h5oh;बुढ़ार|बुर्हर
Nimāparha;8hqkiw5oh
Deoli;8jdjy05oh
Devadanapatti;7q7jvo5oh;देवदानपट्टी|देवादनापट्टी
Hamīrpur;9e0jsl5oh
Laksar;98ojws5oh
Vakkam;7m4jt95oh
Ezhome;7vfjp45oh
Ammainaickanur;7q9jwf5oh
Kesinga;8i3kb65oh
Chhaprauli;975jud5oh
Sardulgarh;98hjp05oh
Maduraivayal;7yak2p5oh
Hirekerūr;826jpg5oh
Kōttayam;7uvjpv5oh
Shehera;8prjkj5oh
Suriānwān;8wqk8y5oh
Rijokri;957ju85oh
Kadikkād;7rnjr25oh
Biswanath Chariali;909l2r5oh
Siwāni;96bjq15oh
Honnavar;81ojms5oh
Jalladiampet;7xwk2t5oh
Torūr;8auk1a5oh
Mir Pur Turk;95qjum5oh
Bhitarwār;8xnjwz5oh
Kallukuttam;7krjup5oh
Chautāpal;89yjz65oh
Arang;8kwk7p5oh;आरंग
Dharmkot;9bzjoz5oh
Kirandul;8dsk5q5oh
Kothakota;87ijwi5oh
Katangi;8r4k1o5oh
Āmlāgora;8phkmm5oh
Karthikappally;7nqjsd5oh
Anshing;8hojus5oh
Parīchhatgarh;96ijwh5oh
Tiruvattār;7l5jun5oh
Kesariyā;8z7kfr5oh
Bhor;8cfjl45oh
Kadachira;7uwjpl5oh
Kulpahār;8wck185oh
Khariar Road;8k2k975oh
Punjai Puliyampatti;7tjjud5oh
Kunnimangalam;7vjjp05oh
Kharsia;8n3kau5oh
Nahorkatiya;91tl8t5oh
Khilchipur;8ssjsq5oh
Mulgund;84gjps5oh
Kansāpur;99rjun5oh
Somandepalle;80xjvl5oh
Sriramnagar;8cskc15oh
Gummidipundi;7z9k2j5oh
Koāth;8wdke25oh
Martūru;7q9jsb5oh
Manchar;8esjle5oh
Shāhpur;97jjvf5oh
Mārahra;932jy95oh
Mundgod;83ljog5oh;मुंडगोड|मुन्द्गोद
Bhati;94zjuj5oh
Chicholi;8lnk1e5oh
Mālvan;86mjk25oh
Pahāsu;949jwu5oh
Lateri;8sujv15oh
Tādikombu;7r0jwj5oh
Chhipa Barod;8uejt35oh
Akbarpur;8zak235oh
Maithon;8s2kl55oh
Chhiri;8imjim5oh
Mallasamudram;7txjwr5oh
Rānīpur;8w5jzm5oh
Gadhra;8p7kjl5oh
Solsumba;8i0ji75oh
Chāndūr Bāzār;8l0jvz5oh
Sompeta;8emkey5oh
Gangāpur;8w2jma5oh
Chanod;8ijjil5oh
Banūr;9avjt45oh
Paranda;8cqjpm5oh
Shādīpur Julāna;96wjs95oh
Rakkiyapālaiyam;7svjtq5oh
Kammivapettai;7unk1j5oh
Amod;8n3jif5oh
Rangāpāra;90kl1f5oh
Nanauta;98jjv25oh;ननौता|नानौता
Raybag;87tjnp5oh
Kundgol;84ejp15oh;कुंदगोल|कुन्दगोल
Murbād;8fhjjv5oh
Lonand;8c4jm35oh
Tiruvankod;7kxjuq5oh
Una;9dejrv5oh
Pālda;8p0jqt5oh
Haldaur;97djxg5oh
Srirāmpur;8prkoi5oh
Māndvi;8l2jjm5oh
Valabhīpur;8mtjfo5oh
Kardhān;9a8jtj5oh
Kalāyat;98gjru5oh
Kurumathur;7vgjph5oh
Kim;8lgjil5oh;कीम
Mamsapuram;7oejvj5oh
Mangattidam;7uwjpu5oh
Silvāni;8qqjxw5oh
Tyāgadurgam;7umjzo5oh
Khārupatia;8zokzz5oh
Palappallam;7ktjul5oh
Pālaiyampatti;7oijwy5oh
Nadim Tiruvuru;89jk3x5oh
Jadugora;8oxkjw5oh
Bhadaur;9aojp95oh
Bhoom;8dajq65oh;भुम|भूम
Durgāpur;8hlk0a5oh
Chandili;8fhkbp5oh
Phalauda;973jw75oh;फलावदा
Bānk;8p2jqk5oh
Harpālpur;8w9k0d5oh
Rāmpura;8tzjpk5oh
Jogipet;8bkjwv5oh;जोगिपेट
Alang;8lgjgi5oh
Barkā Kānā;8rmkhf5oh
Deshnoke;938jjq5oh;देशणोक|देशनोके
Ūttangarai;7w3jy65oh
Chicholi;8l3jzs5oh
Mukandgarh;93njoy5oh
Sāvli;8oojje5oh
Tondi;7p2jzi5oh
Kannapuram;7vajp65oh
Pottanūr;7svjwn5oh
Padampur;98jjkj5oh
Gubbi;7yzjtq5oh;गुबबि|गुब्बी
Unchahra;8tqk4e5oh
Baroda;8wujsx5oh
Khali Kachigam;8imjif5oh
Nāmrup;91jl8s5oh
Neral;8eujjo5oh
Sirgittī;8n9k875oh
Mandapam;7nsjzs5oh
Along;949l7c5oh
Kotā;8nyk7u5oh;कोटा
Moram;8bfjsf5oh
Kādīpur;95xjuc5oh
Chhoti Sādri;8tqjni5oh
Vāzhakulam;7q1jsa5oh
Fort Gloster;8oikoy5oh
Seppa;920l2g5oh
Majhiāon Kalān;8tkkcu5oh
Thākurganj;8zfkot5oh
Naldurg;8bijrw5oh
Thāsra;8pcjjd5oh
Bada Malhera;8u8k0b5oh
Kākori;90nk4f5oh
Alangāyam;7x2jyr5oh
Cheranmahadevi;7m4jvh5oh
Chetput;7ybk2w5oh
Rāmjībanpur;8pfknd5oh
Hutagalli;7wajsr5oh
Howli;8zekwq5oh
Daboh;8y8jz45oh
Talod;8qvjin5oh
Palugal;7l7juf5oh
Inam Maniyachi;7nhjw95oh
Ghogardīha;8z0kk75oh
Vengikkal;7w2jzn5oh
Udaipura;8q3jy35oh
Behat;99tjvl5oh;बेहत|बेहात
Trikarpūr North;7vrjot5oh
Khetri;93sjqj5oh;खेतड़ी|खेर्ती
Kheri Nāngal;97jjtu5oh
Pasthal;8h2ji15oh
Kariapatti;7owjwy5oh
Gairtganj;8r1jxa5oh
Tezu;93jlb15oh
Jalālī;93fjxd5oh
Gaurela;8p7k7i5oh
Singampunari;7qbjxu5oh;सिंगमपुनरी
Moonak;98vjqt5oh
Palayad;7u3jq35oh
Vettaikkaranpudur;7rcjtn5oh
Pichor;8vyjx75oh
Bakarwāla;95njty5oh
Koipādi;7wzjo85oh
Māchai;85vjmw5oh
Eruvādi;7lgjvk5oh
Namminikara;7qzjrt5oh
Thara;8sljfi5oh
Jhalidā;8qxkiu5oh
Aurangabad Cantonment;8h8jp55oh
Fatehgarh Chūriān;9eijo85oh
Kunnummal;7ugjqb5oh
Kattur;7qtjrl5oh
Vadamadurai;7r0jwy5oh;वडमदुरा
Tirumala;800k0f5oh
Bhogpur;9dnjq45oh
Patiriyat;7uxjpr5oh
Satyāmangala;7y6jrg5oh
Bhattiprolu;86qk4e5oh
Barjala;8rmkxs5oh
Nalloor;7l3jui5oh
Mahīshādal;8nnkoe5oh
Sir Muttra;8zojux5oh
Dumjor;8oukp55oh
Jadcherla;88ljx25oh
Noāmundi;8nkkhi5oh
Barwala;8nqjg75oh
Narauli;955jyn5oh
Arukutti;7pfjs35oh
Murudeshwara;815jmw5oh
Nīlokheri;98wjtp5oh
Nāteputa;8bqjnn5oh
Honnāli;81kjq55oh
Titabor Town;8zvl5n5oh
Samdari;8xpjhm5oh;समदड़ी
Saiyad-ul-ajaib;958jug5oh
Pudunagaram;7rojt05oh
Bayad;8qijjd5oh
Kanjari;8otjik5oh
Vadlapūdi;81rk1o5oh
Bhindār;8u2jm35oh
Piranvādi;85wjmw5oh
V.S.K.Valasai (Dindigul-Dist.);7qojx35oh
Handiā;8wgk8b5oh
Avalēpalli;7xhjwa5oh
Narasimhanaickenpalayam;7swjtq5oh
Adiyanuthu;7qpjwm5oh
Sarāi Mīr;8ybkac5oh
Trāl;9k9joo5oh
Akalkuva;8lvjlm5oh
Bhīkhi;99ijpu5oh
Sīlappādi;7qvjwp5oh
Kulattuppālaiyam;7rwjvi5oh
Rāmachettipālaiyam;7sgjto5oh
Bilgi;87fjq25oh
Nāgamangala;7xmjt75oh
Shāhpur;8x4keg5oh
Dāmnagar;8m9jeo5oh
Manalur;7r5jre5oh
Ambaji;8tljid5oh
Kannod;8ozjt65oh
Jagiroad;8ykl045oh
Patdi;8qgjff5oh
Mahudha;8pejim5oh
Chettināyakkanpatti;7qvjwm5oh
Gotan;902jku5oh
Mangalam;7sujun5oh
Peddanāyakkanpālaiyam;7udjy35oh
Bhuwāna;8uejkr5oh
Kothanallur;7l0jur5oh
Bālugān;8gtkgq5oh
Kherli;91rjtv5oh
Rahimatpur;8avjm45oh;रहिमतपुर|रहिमतपूर
Nangavaram;7s7jy65oh
Padmapur;8kckar5oh;पद्मपुर
Pipili;8hvkif5oh;पिपिली
Koratti;7qjjs35oh
Vittal;7xgjom5oh
Shirhatti;84bjpy5oh
Devgarh;8wxjlb5oh
Bargi;8pvk1w5oh
Jarwal;91gk6i5oh
Nichlaul;91vkcl5oh;निचलौल|निच्लौल
Kānke;8r3kh05oh
Vazhapadi;7uejxs5oh
Achhībal;9jkjoy5oh
Papanasam;7sdk075oh
Kodoli;88wjm35oh
Raipur;8ycjlm5oh
Tājpur;970jy05oh
Bānki;8imkhl5oh
Settiyārpatti;7o3jv95oh
North Guwāhāti;8yskys5oh
Madhuban;8zgkgi5oh
Bānapur;8gykgl5oh
Jatāra;8vhjzl5oh
Palera;8vik035oh;पलेरा
Indri;990ju25oh;इन्द्री
Bodrī;8n6k835oh
Kallūr Tekkumuri;7qgjs05oh
Pennāgaram;7vpjwe5oh
Dharmapuram;7kkjuz5oh
Depālpur;8phjpu5oh
Mūndwa;916jl25oh
Auhammadpur Mājri;95tju05oh
Tādigadapa;87rk465oh
Calangute;856jkw5oh
Sarāi Ākil;8wik6f5oh
Nīsang;98hjt75oh
Panoor;7uojpy5oh
Amet;8wbjld5oh;अमेट|आमेट
Bareta;98yjqa5oh
Kavisuryanagar;8gekfg5oh
Puthūr;7r5jrw5oh
Hāt Piplia;8p9jry5oh
Bhundsi;94rju25oh
Naregal;859jql5oh
Bermo;8s3kiq5oh
Khongapani;8qfk885oh
Bagdogra;906kpb5oh;बागडोगरा
Indergarh;90uk1b5oh
Lāsalgaon;8hyjm85oh
Periyakottai;7rfjuo5oh
Edakkazhiyūr;7rijr45oh
Phirangipuram;879k2y5oh
Nārsala;8kljzu5oh
Keezhkulam;7kvjuf5oh
Jalalpore;8k7jii5oh
Chhala;8qrji55oh
Sivagirippatti;7r1jvd5oh
Āthagarh;8j0khv5oh
Lakhnādon;8osk145oh
Takhatgarh;8wcjis5oh;तखतगढ़
Talwandi Bhai;9bqjo55oh
Mūlki;7ydjnr5oh
Kāttatturai;7l0juo5oh
Bhānpurī;8klk4t5oh
Kulasegaram;7l8juq5oh
Deori;8nek8j5oh
Nilagiri;8lmkl15oh;नीलगिरि
Mannarai;7swjux5oh
Ajara;86sjm55oh
Bhikshāndārkovil;7s8jym5oh
Jagalūr;82cjs25oh
Palangarai;7t4jur5oh
Virajpet;7vwjql5oh
Nārnaund;976jri5oh
Pudūr;7tsjvs5oh
Bālugaon;8i2kgf5oh
Irivēri;7uyjpn5oh
Alnāvar;84vjnm5oh
Bilthra;8ylkd15oh
Anaimalai;7rejtp5oh;अनैमली|आनेमलई
Guru Har Sahāi;9bbjmo5oh
Tangla;902kzb5oh
Mendarda;8l8jbo5oh
Taleigao;84zjl35oh
Jāwad;8ucjny5oh;जावद
Basukinath;8trklx5oh
Uttarkāshi;9bdjxw5oh
Rājgarh;8p0jo65oh
Ayyalur;7r4jx45oh
Kolaccheri;7vajpi5oh
Nāranammālpuram;7mcjvy5oh
Chālakilakākara;7uxjpk5oh
Shaktinagar;87gjuw5oh
Amroli;8l1jic5oh
Chalāla;8lhjdp5oh
Samālka;959ju55oh
Mēppādam;7nwjsh5oh
Madambakkam;7xpk2d5oh
Nongpoh;8xykz85oh;नोंगपो|नोङपोह|नॉँगपोह
Mahiari;8orkp45oh
Naraina;90fjox5oh
Kokōtamangalam South;7owjs45oh
Teonthar;8vek6s5oh;त्योंथर
Jigani;7xjjvo5oh
Nayāgarh;8hxkge5oh
Kusum Pur;95bjuc5oh
Eravattūr;7u6jqe5oh
Nawābganj;90mk865oh
Maghar;90ckax5oh;मघर|मगहर
Varam;7v2jph5oh
Ongallur-I;7s0jrq5oh
Bicholim;85bjlf5oh;दिवचल|डिचोली|बिचोलिम
Hukumpeta;897k785oh
Valvachatottam;7l0jum5oh
Bijaipur;8ydjux5oh
Garhshankar;9cqjri5oh
Dirba;99jjr45oh
Rānpur;8o3jf75oh
Dukli;8s4kxm5oh
Manjhanpur;8wxk625oh;मंझनपुर|मंझनपूर|मञ्झानपुरम्
Mihona;8z0jze5oh;मिहोना
Gothara;93zjqm5oh
Mākum;92dl945oh
Kalghatgi;846jo95oh
Eruvatti;7utjpt5oh
Merta Road;908jlc5oh
Tanakpur;96rk2j5oh
Undera;8o3jj55oh
Khed;8b8jjw5oh
Kutiyāna;8m2jae5oh
Sultanpur;9cpjow5oh
Ahor;8whji65oh
Sirālkoppa;81yjp15oh
Sithurajapuram;7o6jw35oh
Vandalūr;7xtk2g5oh
Moreh;8tdl5y5oh
Chelamartam;7q6jse5oh
Challapalle;86sk4t5oh
Konārka;8h9kj65oh
Gandevi;8jtjis5oh
Āchāripallam Vāniyakudi;7kpjuy5oh
Peralassery;7uvjpo5oh
Bara Uchāna;97vjrm5oh
Arkalgūd;7xgjra5oh
Kāmākhyānagar;8k5khm5oh
Budhni;8pbjvs5oh
Pinarāyi;7usjpo5oh
Pāchchal;7wrjy85oh
Navalpattu;7rvjyu5oh
Vathirairuppu;7osjvo5oh
Sivagiri;7swjw35oh
Bāwal;93zjsq5oh
Hanumana;8uuk825oh
Porathissery;7qujro5oh
Vallam;7rsjzm5oh
Āmta;8oqkoh5oh
Vāda;8gljj75oh
Kadod;8kyjje5oh
Valavanur;7v4k125oh;वलवनूर
Khapat;8m5j9d5oh
Bābai;8p2jwh5oh
Harsūd;8nejt55oh
Andada;8m6jiu5oh
Beri Khās;95qjsq5oh;बेरि|बेरी
Dera Māndi;950jue5oh
Chanaje;8eejin5oh
Sāmbūrvadakara;7n0juz5oh
Thorapadi;7xtjzs5oh
Karingal;7kwjuk5oh
Nal Khera;8s8jrs5oh
Piriyāpatna;7w9jre5oh
Nohsa;8x1kga5oh
Phaphūnd;8zwk0q5oh
Sarangpore;8m4jix5oh
Babrāla;94ijxt5oh
Vīrnūr;7uwjw95oh
Ajaigarh;8v6k2y5oh
Baihar;8nek3r5oh;बैहर
Malīhābād;90sk475oh
Jhūsi;8wok7j5oh
Trajpar;8pejcv5oh
Pudusseri;7rwjtb5oh
Pattamadai;7m3jvi5oh
Cuncolim;846jlj5oh
Pathalgaon;8ookbu5oh
Baliguda;8i4kd35oh;बालिगुड़ा
Āsind;8xhjmh5oh
Vāghodia;8nzjjw5oh
Nazareth;7lsjwl5oh
Samurou;8uml4u5oh
Madhuban;8s2kxl5oh
Lālpettai;7tek105oh
Sālūmbar;8t2jlo5oh
Sonkach;8ptjs35oh
Jāmbai;7tvjvo5oh
Kōtekāra;7xjjnz5oh
Chāndāmeta;8nnjyp5oh
Kiphire;8xvl7b5oh
Khātra;8pukl95oh
Gorāya;9cgjqh5oh
Sundakkāmpālaiyam;7rdjuh5oh
Sindkhed Raja;8hfjrh5oh
Susner;8sjjrd5oh;सुसनेर
Bharwāri;8x0k6d5oh
Chendrappini;7qsjrh5oh
Rāni Khera;95rjtz5oh
Bhainsdehi;8m4jvn5oh;भैंसदेही|भैन्स्देही
Kankauli;877jkr5oh
Gokavaram;89yk7d5oh
Padampur;8kckaq5oh
Curti;84ujlm5oh;कुर्ती
Nambiyūr;7tkjus5oh
Lochapada;8fpkfk5oh
Bargūr;7wujxo5oh
Dharampuri;8njjpa5oh
Shopian;9jojnv5oh;शोपियां
Mūllānpur;9bpjq65oh
Ūttukuli;7rljtu5oh
Kandāri;8kijql5oh
Khada;91ikd05oh
Jasidih;8u3kkp5oh;जसिदिह|जसीडीह
Kargil;9m0jrh5oh;करगिल|कारगिल|कार्गिलनगरम्
Kotapārh;8f6k8p5oh
Tikri Kalān;95ojtt5oh
Chākuliā;8ogkkw5oh
Shāhgarh;8tjjzs5oh
Kadamakudi;7pyjrt5oh
Annāmalainagar;7tok1h5oh
Āmbāsa;8sikz55oh
Arumanai;7l9juk5oh
Anandpur;9csjsi5oh
Omalur;7umjwt5oh
Hatti;870jsy5oh
Chennimalai;7t0jvk5oh
Madukkūr;7r4k0k5oh
Bahula;8rpkm45oh
Ayyampettāi;7sajzy5oh
Naroli;8ibjim5oh
Nūh;942jtw5oh
Thimiri;7xnk0b5oh
Ellakkudi;7s1jyr5oh
Kamalganj;91qk175oh
Bhikangaon;8mrjr05oh
Neelagiri;7rwjzp5oh
Jalakandapuram;7uijwb5oh;जलकण्डापुरम|जलकाण्डपुरम
Mullānwāla;9cajnu5oh
Pandaria;8nqk655oh
Thiruvaiyaru;7s8jzq5oh
Elandakuttai;7tpjw25oh
Sānwer;8ptjqn5oh
Nallavila;7ktjuu5oh
Kāmayakkavundanpatti;7p2jus5oh
Bījāpur;8e7k4i5oh
Kuthalam;7srk105oh
Chengalam;7oojsf5oh
Cherukunnu;7vcjp55oh
Kuda;8xxl4e5oh
Chevvoor;7r2jrp5oh
Vāniyamkulam;7ryjs15oh
Tevāram;7pijuo5oh
Bhiloda;8s1jjh5oh
Shāhi;95bk0c5oh
Kedia;8s3khr5oh
Simga;8m3k6y5oh;सिमगा|सिम्ग
Kandamkunnu;7uzjpy5oh
Kudāl;86hjkp5oh
Utnūr;8ftjyu5oh
Hindoria;8sek115oh;हिन्दोरिया
Betma;8p1jq15oh
Kappiyara;7kxjum5oh
Vellakkinar;7srjts5oh
Balaungi;9bdjt15oh
Hājo;8yxky95oh
Māliya;8q5jck5oh
Kombai;7pdjuq5oh
Asāra;979jur5oh
Koothappar;7s0jyv5oh
Udalguri;90bkzu5oh
Vaso;8oyji45oh
Chānasma;8rvjgb5oh
Boothapandi;7kzjv55oh
Bharanikāvu Tekku;7nijso5oh
Rura;8zlk1y5oh
Bunjwah;9i3jqz5oh
Chandia;8rqk475oh
Vijayapuri North;883k0c5oh
Khaniādhāna;8vjjx15oh
Kannampālaiyam;7skju65oh
Pipraich;90jkc15oh;पिपराइच
Abhayāpuri;8z4kvx5oh
Srivaikuntam;7lzjwf5oh
Sunel;8tpjr05oh;सुनेल
Sisauli;97pjv75oh;सिसौली
Unhel;8qujpw5oh
Marattakara;7r3jru5oh
Vadakkēkkād;7rmjr45oh
Domchānch;8tzki15oh
Molakālumuru;82wjt75oh
Jalda;8nnkfo5oh
Jodiya Bandar;8p4jb85oh
Dera Colliery Township;8k7kgl5oh
Holalkere;810jrm5oh;होललकेरे|होलालकेरे
Dumra;8ztkhk5oh;डुमरा|दम्रा
Pudukkottai;7pmjwt5oh
Mennānyam;7u4jqg5oh
Binika;8kfkct5oh;बिनिका
Sonpet;8evjsf5oh
Bāngarda;8p8jqk5oh
Dhārni;8lvjtl5oh
Thandla;8pxjn65oh
Khuldābād;8hljov5oh
Elumalai;7pfjvu5oh;एलुमलइ|एलूमलई
Khetia;8m7jn75oh;खेतिया
Bhudgaon;88zjn85oh
Khusropur;8wskh65oh
Yerkhera;8kyjzz5oh
Khatīma;96ck255oh
Bari Sādri;8ttjmv5oh
Dāpoli;8bcjjb5oh
Kumārapālaiyam;7tyjum5oh
Kabilpor;8k7jio5oh
Periyapatti;7t5jx35oh
Yamjāl;89zjya5oh
Rāhon;9c9jrg5oh
Vadakāncheri;7rmjrt5oh
Bagar;94bjpq5oh
Manaveli;7v1k1p5oh
Manthani;8dtk1b5oh
Vidyavihar;94tjpy5oh
Neb Sarai;957jug5oh
Lakhipur;8ybkuv5oh
Panangad;7qjjrl5oh
Chokkanāthapuram;7prjuw5oh
Kamatgi;86ojql5oh
Khūtār;94ck2z5oh
Sātalkheri;8uhjr45oh
Maval;8e4jk05oh
Kasāra;8gljk35oh
Agaram;7r0jwj5oh
Baben;8kqjj25oh
Nārāyankher;8c3jw15oh
Salangaippālaiyam;7trjvh5oh
Baberu;8wzk465oh
Danta;91ujov5oh
Bādshāhpur;94vju15oh
Chengala;7wqjoh5oh
Haripād;7nsjse5oh
Gulgam;9lzjm65oh
Kuchinda;8mekeb5oh
Husainpur;9czjp85oh
Kompalli;8aqjy15oh
Kalher;8fhjiu5oh
Toshām;967jqw5oh
Ponmana;7l8jut5oh
Sanjan;8i3jia5oh
Bilsanda;94gk235oh
Leteri;8sujv15oh
Vettavalam;7vnk055oh
Mani Mājra;9bbjtg5oh
Kurwai;8t0jws5oh
Taranagar;8slkxt5oh
Kosigi;862juk5oh
Brāhmanān di Bāri;9gojo35oh
Tindal;7tgjvr5oh
Kalugumalai;7nfjvv5oh
Tīrthahalli;801jp15oh
Ajeetgarh;926jqm5oh
Parvatsar;90pjnp5oh
Kachhwa;8w1k9r5oh
Rāmachandrapuran;8anjxh5oh
Rāmpur;8kjkea5oh
Sāyla;8onjek5oh
Seoni Chhapāra;8o7k0y5oh
Purushottampur;8g8kft5oh
Bāh;90njyb5oh;बाह
Kanhirode;7v4jpm5oh
Davorlim;84fjlj5oh
Dornakal;8agk2n5oh
Morampudi;896k7c5oh
Penha de França;854jl45oh
Kanchanpur;8ssl045oh
Badgām;9kijnk5oh
Pappinivattom;7qljrk5oh
Pālaiyam;7rtjx25oh
Mīrganj;95ak015oh
Dārāsuram;7sfk0g5oh
Kushālnagar;7wmjr05oh
Sayan;8l8jig5oh;सायन
Katangi;8mhk1p5oh
Bhauri;8uijij5oh
Kāthor;8l5jim5oh
Villukuri;7kujux5oh
Bāonlī;8z5jrr5oh
Bāntva;8lpjao5oh
Chimbel;851jl75oh
Dalkola;8xwko05oh
Srīvardhan;8c5jiu5oh
Vilattikulam;7ndjx55oh
Koratagere;7zkjuk5oh;कोरटगेरे|कोरातागेरी
Thekkumkara;7qkjrp5oh
Bommasandra Industrial Area;7xmjvs5oh
Kudali;7v4jpn5oh
Yadagirigutta;8avjza5oh
Mūlanūr;7rzjvv5oh
Ichhāwar;8pzjty5oh
Sāram;8s0kif5oh
Jugiāl;9fxjq85oh
Goniāna Mandi;9a8jo35oh
Gangolli;7zxjnf5oh
R.S. Pora;9gljnl5oh
Niz-Hajo;8yxky85oh
Kīlattingal;7m5jtb5oh
Kangeyanallur;7xzjzv5oh
Buguda;8h1kfj5oh
Khāpa;8lijze5oh
Petlāwad;8pxjns5oh
Mahabalipuram;7x2k2r5oh
Ghantapada;8k5kgn5oh
Sultan Pur;956juc5oh
Lormi;8nvk6y5oh
Ottakkadai;7pojx75oh
Korwai;8t0jws5oh
Kenda;8qgkkb5oh
Karamuck;7r4jre5oh
Pupri;8zjki25oh
Āyikudi;7n0juu5oh
Saligram;7zijnj5oh
Shrivardhan;8c5jis5oh
Garot;8tkjq55oh
Phek;8xbl6i5oh;फेक जिला
Sorada;8gwkej5oh
Kizhariyūr;7tyjq85oh
Kharhiāl;8idk9w5oh
Tirunāgeswaram;7sgk0n5oh
Naraini;8vzk3k5oh
Lālpur;8nnjac5oh
Amīngarh;86mjqz5oh
Panth Pīplia;8t8jod5oh
Usehat;938k045oh
Ālūr;7krjuw5oh
Pachperwa;92fk9k5oh
Sumbal;9l3jnd5oh
Khamaria;8qjk1w5oh
Misrikh;927k3p5oh
Ūn;986jum5oh
Kāveripatnam;7wijxa5oh
Ahwa;8jojkp5oh
=IQ
Baghdad;9imhbc4vr;巴格达|巴格達|바그다드|Bagda|Bexda|Bagdad|Bagdat|Bagdod|Bagdado|Bagdate|Beghdad|Bagdadas|Bagdatum|بغداد|بەغداد|बगदाद|バグダード|Багдад|Бағдод|bەghdad
Al Mawşil al Jadīdah;9qxh7r4vp;الموصل الجديدة
Al Başrah al Qadīmah;9aqhku4vp;البصرة القديمة
Mosul;9qyh7s4vp;모술|摩苏尔|摩蘇爾|mwsڵ|موسڵ|モースル|Masul|Mosel|Mousl|Musil|Musił|Musul|Musıl|Mosoel|Mossul|Mosula|Mosulo|Moszul|Mosouli|Mossoul|Mosulas|Al Mosul|Al Musil|Moussoul|Al Mawsil|Mausilium|Mosul khot|Масул|Мосeл|मोसुल|โมซูล|موصل
Erbil;9qjha94vp;Arbil|Irbil|Ərbil|Arbeel|Arbela|Arvila|Ermpil|Hawler|Hewler|Ehrbil'|Viloati Arbil|Арбил|Ербил|أربيل|اربیل|埃爾比勒省|アルビール県
Basrah;9arhkq4vo;バスラ|巴士拉|巴斯拉|بصرة|بصره|Basra|Besre|Busra|Bacora|Basora|Bassra|Busrah|Vasora|Bassora|Bussora|Al-Basra|Bassorah|Al Basrah|Басра|البصرة
Karbala;9gmhaa4vo;卡爾巴拉|카르발라|کربلا|ڪربلا|करबला|カルバラー|Karbalo|Karbila|Kerbala|Kerbela|Nainawa|Karbalaa|Karmpala|Qerbelaja|Meshed Hussain|Meshed Hussein|Shathi'ul-Furat|Vilojati Karbalo|Карбала|Кербала|كربلاء|كةربالا
Sadr City;9irhbi4vo;Sadr|مدينة الصدر
Kirkuk;9ojhbb4vo;基爾庫克|키르쿠크|كركوك|کرکوک|キルクーク|Karkuk|Kerkuk|Kerkouk|Kerkuek|Kirkoek|Kirkouk|Kirkukas|Karkh Slukh|Киркук|Кіркук|คีร์คูก|كەركوك
Abū Ghurayb;9ijhaq4vo;أبو غريب
Sulaymaniyah;9oshe74vo;slێmany|السليمانية
Nasiriyah;9cahgi4vn;الناصرية|الناصريه
Najaf;9ezhb74vn;نجف|النجف|النجف الاشرف
Al Hillah;9g6hbe4vn;hlە|حلە|الحلة
Abū al-Kahṣīb;9akhl04vm
Al Maḩmūdīyah;9huhb94vm;المحمودية
Dihok;9sfh7f4vm;دهوك|دهۆك
Al ‘Amārah;9eghiy4vm;العمارة|العماره
Al Diwaniyah;9evhct4vm;dywanyە|الديوانية
Al-Kut;9gbhfa4vm;كوت|الكوت
Al Madīnah;9c0hjb4vm;المدينة
Kelar;9m7hdw4vm;كلار|كەلار
Ramadi;9iuh8b4vl;ڕەmady|الرمادى|الرمادي
Al Fallūjah;9inh9n4vl;fەlwjە|فەلوجە|الفلوجة
Ash Shaţrah;9d9hg94vl;الشطرة
Khānaqīn;9lfhe34vl;خانقين|خانەقين|khanەqyn
Bayjī;9n1h8t4vl;بيجي
Ash Sharqāt;9ooh834vl;الشرقاط
Sāmarrā’;9l0h9x4vl;سامراء
Al Miqdādīyah;9kehcu4vl;المقدادية
As Samawah;9d1hdt4vl;سماوه|السماوه
Baqubah;9jrhbx4vl;بعقوبة|بعقوبه|bەʿqwwbە
Simele;9seh714vl
Sumayl;9seh714vl;سميل|sێmێl|سومێل
Khasnahzān;9qkham4vl;كسنزان|مركز كسنزان|كسنزان اسماعيل
Qeładizê;9qihdd4vl;قلادزي|qەڵadzێ|qەڵadzە
Al Hindīyah;9gehau4vl;الهندية
Al Qurnah;9c6hjr4vl;القرنة
Baḥarkah;9qwhac4vk;بركه|بحركة|بهركة
Sīnah;9s9h7k4vk;سينة|سينە
Az Zubayr;9afhki4vk;الزبير
Ţūz Khūrmātū;9mxhbz4vk;طوز|طوزخورماتو|توز خورماتو
Rānyah;9qqhco4vk;رانية|ڕانيە
An Nu‘mānīyah;9gghe54vk;النعمانية
Kufa;9f1hbg4vk;كوفه|الكوفة|الكوفه
Qal‘at Sukkar;9eihfz4vk
Umm Qaşr;99ghl44vk;ام قصر
'Ākra;9s1h9w4vk;بيوك
Al Fāw;999hmn4vk;الفاو
Al-Musayab;9h2hb14vk;المسيب
Nāḩiyat al Iskandarīyah;9hdhb74vk;الإسكندرية|ناحية الإسكندرية
Zaxo;9t7h6l4vk;زاخو|زاخۆ
Al-Qāsim;9fqhc44vk;القاسم|ناحية القاسم
Al Hārithah;9ayhko4vk;الهارثة
Soran;9ruhbq4vk;dyanە|sۆran|ديانا
Hajiawa;9qohcf4vk
Al Ḩayy;9fdhfw4vk;الحي
Aş Şuwayrah;9hhhce4vk;الصويرة
Al Qā’im;9ljh1v4vj;حصيبة|القائم|مركز قضاء القائم
Khāliş;9jxhbp4vj;خالص
Ash Shāmīyah;9eshbw4vj;الشامية
Halabja;9nqhfr4vj;حلبجة
Al-Hamdaniya;9qrh8i4vj;قضاء الحمدانية
Ar Rumaythah;9dlhdk4vj;الرميثة
Koysinceq;9q8hbz4vj;كوية|كۆيە|كويسنجق
Al ‘Azīzīyah;9hfhd64vj;العزيزية
Jamjamāl;9ophcj4vj;جمجمال|chەmchەmaڵ
Tikrīt;9m6h9c4vj;تكريت
Balad;9khhan4vi;بلد
Qal‘at Şāliḩ;9dlhjd4vi;قلعة صالح
Pīrmām;9r3has4vi;سەلاحەدين|صلاح الدين
Sinjār;9qwh4c4vi;سنجار
Saddat al Hindīyah;9gwhb04vi;سدة الهندية|ناحية سدة الهندية
‘Afak;9f2hdp4vi;عفك
Shaqlāwah;9r4hb54vi;شقلاوة|شقلاوه|شەقڵاوە
Ḩarir;9rjhb74vi;حرير|hەryr|حەرير
Hīt;9jgh6z4vi;هيت
Al Maḩāwīl;9gqhbd4vi;المحاويل
Ḩadīthah;9kuh5q4vi;حديثة
Nahiyat Ghammas;9e6hby4vi;غماس|ناحية غماس
Kifrī;9mdhcw4vi;كفرى|كفري
Shūrash;9oohck4vi;شورش
Mandalī;9jrhek4vi;مندلي
Batifa;9t9h7h4vi;باتوفا|باتوفە|باتيفا
Baynjiwayn;9oyhfn4vi;بنجوين|بينجوين
‘Anah;9lhh4m4vi;عنة|ريحانة|الريحانة
Ad Dujayl;9k1hav4vi
Al-'Alam;9mfh9e4vi;العلم|ناحية العلم
Tallkayf;9rdh7s4vh;تلكيف|قضاء تلكيف
Al Mishkhāb;9echbl4vh;المشخاب
‘Aqrah;9s4h9x4vh;عقرة|ئاكرێ
Ṟuwandiz;9rphbo4vh;رواندز|ڕwandz|ڕواندز
Şafwān;99ohkk4vh;صفوان
Nāḩiyat ash Shināfīyah;9dqhc14vh;الشنافية|ناحية الشنافية
Ar Ruţbah;9hsgzx4vh;الرطبة
Tāzah Khūrmātū;9o2hb54vh;تازة خورماتو|تازە خورماتوو
Nāḩiyat al Fuhūd;9c1hhs4vh
Khalīfān;9rphbc4vh;خليفان
‘Anat al Qadīmah;9lrh4i4vh;عنة القديمة
‘Alī al Gharbī;9g6hhp4vh;علي الغربي
=IR
Tehran;9p5huu6ir;德黑兰|德黑蘭|테헤란|テヘラン|Teera|Tahran|Teerao|Tegeran|Teheran|Tehrano|Taekhran|Teherana|Teherano|Tekheran|Techerane|Teheranas|تهران|تهرون|Тæхран|Теҳрон|तेहरान|เตหะราน
Mashhad;9quihl6ip;مشهد|مشہد|मशहद|馬什哈德|마슈하드|Masat|Mexed|Masant|Mashad|Maxhad|Meixad|Meshed|Mashado|Masyhad|Mesheda|Meszhed|Maschhad|Mashkhad|Meshedas|Meshkhed|Sanaabad|Alexandria|マシュハド|Машхад|Машҳад|มัชฮัด
Isfahan;9gphvj6ip;伊斯法罕|이스파한|Spahan|Esfahan|Esfehan|Isfahon|Isfehan|Ispahan|Yspyhan|Aspadana|Esfahano|Isfachan|Isfahana|Isfakhan|Iszfahan|Isfahanas|Isfahanum|Kota Isfahan|أصفهان|اصفہان|Ісфахан|Исфахан|इस्फहान|エスファハーン|อิสฟาฮาน
Karaj;9pjhtn6ip;كرج|کرج|卡拉季|카라지|キャラジ|Karej|Kerec|Heredi|Karadj|Karadz|Karago|Karatz|Keredi|Kerezh|Leredi|Karadje|Karadzs|Keredzh|Karadsch|Keredzas|Qasabeh-e Karaj|Карай|Караџ|कैरैज|คาราจ
Tabriz;9vshgl6ip;大不里士|타브리즈|تبريز|تبریز|タブリーズ|Tabrez|Tabris|Tauris|Tebriz|Tewrez|Töwriz|Tabrizo|Taebris|Taebriz|Tampriz|Tebriza|Tehbryz|Toewriz|Tebrizas|Табрез|Табриз|तबरेज़|ตาบริซ
Shiraz;989hxx6io;設拉子|시라즈|Siraz|Xiraz|Chimaz|Chiraz|Sheroz|Shyraz|Siraza|Sirazo|Sjiraz|Sziraz|Schiras|Sirazas|Шероз|Шираз|شيراز|شیراز|ชีราซ|シーラーズ
Qom;9m8htc6io
Ahvaz;9d0hn86io
Kermanshah;9lbhiq6in
Rasht;9tkhpr6in
Kerman;9a4iak6in
Orūmīyeh;9ubhd86in
Zahedan;97yil26in
Hamadān;9mohmr6in
Arāk;9kphq26in
Yazd;9emi316in
Eslamshahr;9orhuc6in
Ardabīl;9w9hm56im
Zanjan;9rwhmq6im
Bandar Abbas;91ji8c6im
Sanandaj;9o3hik6im
Qazvin;9qrhqw6im
Khorramshahr;9akhlu6im
Khorramabad;9j1hmc6im
Shahrīār;9p2htu6im
Qods;9p8htz6im
Kashan;9kehuv6im
Kāshān;9kghuw6im
Khomeynī Shahr;9gthv66im
Dezful;9fyhmh6im
Marāgheh;9tvhgg6im
Marāgheh;9pjihn6im
Sari;9rkhze6im
Borūjerd;9k6hnf6im
Qarchak;9ofhva6im
Gorgān;9sci386im
Sabzevar;9qlic86im
Golestān;9oohu66im
Āmol;9rbhxf6im
Pākdasht;9okhvk6il
Najafābād;9gnhup6il
Abadan;9aahm66il
Varāmīn;9o4hvh6il
Neyshābūr;9qlifc6il
Sāveh;9nahrw6il
Naz̧arābād;9pvhsl6il
Qā’em Shahr;9rbhyv6il
Bābol;9rjhyc6il
Nasimshahr;9othu46il
Nasīm Shahr;9othu46il
Sirjan;97ti6o6il
Khūy;9x3hcv6il
Bīrjand;9hbigi6il
Būkān;9rghgd6il
Bojnūrd;9u3ib96il
Fardīs;9pchto6il
Shāhīn Shahr;9hahv76il
Malāyer;9lahnm6il
Mahābād;9s4hf06il
Piranshahr;9ryhde6il
Bushehr;96hht86il
Saqqez;9qphgj6il
Shahrud;9r6i4q6il
Bandar-e Māhshahr;9awhon6il
Gonbad-e Kāvūs;9thi596il
Marvdasht;98zhyo6il
Rafsanjān;9ahi7j6il
Kamālshahr;9pmhtb6il
Jahrom;956i0s6il
Īlām;9jghgy6il
Marīvān;9oohga6il
Andīmeshk;9g6hmb6il
Shahreẕā;9exhw26il
Mīāndoāb;9sphg36il
Kāshmar;9nwief6ik
Iranshahr;91kikk6ik
Jīroft;95oice6ik
Shahr-e Kord;9fthta6ik
Torbat-e Ḩeydarīyeh;9nzigi6ik
Semnan;9oui0b6ik
Marand;9wrhf56ik
Behbahān;9b0hrk6ik
Shahr-e Ṣadrā;98shxu6ik
Zābol;9c7imt6ik
Dorūd;9j1hoa6ik
Moḩammad Shahr;9pchtg6ik
Īz̄eh;9efhqj6ik
Bandar-e Anzalī;9u3hpe6ik
Andīsheh;9pbhug6ik
Shahre Jadide Andisheh;9p4htq6ik
Pardīs;9pbhvx6ik
Kāzerūn;98ahvh6ik
Qūchān;9t3iej6ik
Borāzjān;97bhua6ik
Bāneh;9q0hfh6ik
Chālūs;9ruhuu6ik
Bahārestān;9g9hvt6ik
Mīāneh;9tyhkk6ik
Robāţ Karīm;9okhtw6ik
Pārsābād;a05hl46ik
Shūshtar;9f1hnp6ik
Lāhījān;9tchqx6ik
Ahar;9wwhir6ik
Masjed Soleymān;9eqhoy6ik
Shahrak-e Pardīsān;9m0ht46ik
Bam;96vie46ik
Fasā;96ei116ik
Mīnāb;91dial6ik
Parand;9ojhtm6ik
Yasuj;9b7hvb6ik
Dogonbadan;9acht46ik
Behshahr;9rxi0r6ik
Eslāmābād-e Gharb;9krhh96ik
Moḩammadīyeh;9qmhre6ik
Alvand;9qjhr26ik
Alīgūdarz;9ishq16ik
Kūhdasht;9j5hk96ik
Fūlād Shahr;9g9hus6ik
Qorveh;9nphkt6ik
Tajrīsh;9pghuv6ik
Mehestan;9pzhsz6ik
Bāghestān;9p1hu16ik
Shīrvān;9twicx6ik
Sahand;9vfhg36ik
Salmās;9w4hcd6ik
Naqadeh;9sohe36ik
Bonāb;9tqhfy6ik
Būmahen;9p9hw36ik
Bandar-e Emam Khomeyni;9akhoe6ik
Khomeyn;9jghr46ik
Shūsh;9ffhm06ik
Nahāvand;9kzhmd6ik
Rāmhormoz;9cwhps6ij
Meshgīn Shahr;9wohkg6ij
Tākestān;9q7hq26ij
Dārāb;95vi3i6ij
Abhar;9qfhoq6ij
Khāsh;94eim26ij
Mobārakeh;9fvhv26ij
Langarūd;9tchrb6ij
Dāmghān;9qhi2y6ij
Omīdīyeh;9bghq26ij
Nūrābād;9knhl96ij
Fīrūzābād;964hy16ij
Ārān Bīdgol;9kmhv06ij
Bāqershahr;9ophus6ij
Māhdāsht;9p9ht56ij
Lār;92wi2y6ij
Meshkīn Dasht;9pbhti6ij
Nekā;9rti026ij
Bandar-e Kangān;93bhwm6ij
Ābyek;9q4hsd6ij
Sarāvān;921ip56ij
Esfarāyen;9t0ibr6ij
Abadeh;9ckhy96ij
Ābādeh;963hzp6ij
Zarand;9bli946ij
Golpāyegān;9ixhrp6ij
Torbat-e Jām;9nwike6ij
Ardakān;9fri226ij
Ṣāleḥīeh;9onhu76ij
Harsīn;9l7hk76ij
Kāmyārān;9mohie6ij
Borūjen;9ethuh6ij
Nūrābād;99nhv46ij
Dehdasht;9bjhsh6ij
Malārd;9p3htm6ij
Kūt-e ‘Abdollāh;9cshn66ij
Zarrīn Shahr;9fzhuq6ij
Asadābād;9mmhlo6ij
Hashtgerd;9pwhss6ij
Ābyek;9q7hsf6ij
Eqbālīyeh;9qnhqo6ij
Javānrūd;9mphh56ij
Şabbāshahr;9ouhtz6ij
Bandar-e Torkaman;9sii276ij
Chenārān;9rtig86ij
Pīshvā;9o3hvp6ij
'Alī Ābād-e Katūl;9sji4f6ij
Bandar-e Genāveh;986hsc6ij
Kahnūj;93mica6ij
Meybod;9fli226ij
Shahr-e Bābak;99oi546ij
Takāb;9r4hiv6ij
Sūsangerd;9dohlv6ij
Kangāvar;9luhl96ij
Khalkhāl;9uihmt6ij
Oshnavīyeh;9swhda6ij
Khorramdarreh;9qlhoo6ij
Tūyserkān;9lzhmk6ij
Bījār;9pnhk96ij
Tabas;9jcia46ij
Chahār Dangeh;9owhuj6ij
Falāvarjān;9gghv36ij
Īstgāh-e Rāh Āhan-e Garmsār;9nvhxb6ij
Rehnān;9gshvc6ij
Garmsār;9nuhxe6ij
Bābolsar;9ryhy96ij
Āzādshahr;9t1i596ij
Rūdsar;9t6hrp6ij
Aznā;9iyhpe6ij
Aznā;9jdhnx6ij
Chabahar;8w9ikg6ij
Şowme‘eh Sarā;9tmhp06ij
Maku;9z5hbi6ij
Makū;93dhxm6ij
Sarakhs;9riilw6ij
Sardasht;9qghec6ij
Dehlorān;9gthjb6ij
Neyrīz;974i2x6ij
Sarpol-e Z̄ahāb;9lqhfe6ij
Bāfq;9dsi5w6ij
Hashtpar;9v0hnv6ij
Sarāb;9vehk26ij
Āstāneh-ye Ashrafīyeh;9tihqq6ij
Āz̄arshahr;9uwhfq6ij
Eqlīd;9buhye6ij
Sonqor;9mmhk86ij
Naţanz;9j3hw86ij
Ḩasanābād;9o9hub6ij
Gonābād;9lfif06ij
Konārak;8wgijs6ij
Maḩallāt;9k7hs56ij
Poldasht;9zbhd76ij
Shādegān;9b5hn66ii
Shāhīn Dezh;9rwhhd6ii
Khūrmūj;95lhuq6ii
Lordegān;9djht76ii
Rāvar;9cvi9t6ii
Qā’en;9jpige6ii
Nowshahr;9rthv26ii
Kord Kūy;9s7i2b6ii
Kīsh;8zsi226ii
Āstārā;9wrhnr6ii
Qaşr-e Qand;8yxikr6ii
Kahrīzak;9o7hw06ii
Kahrīzak;9oohuo6ii
Tāybād;9miiku6ii
Tonekābon;9sahtb6ii
Dorcheh Pīāz;9gmhv86ii
Golbahār;9rligf6ii
Dargaz;9u0ig76ii
Eqbālīyeh;9o2hv66ii
Qīāmdasht;9oohvh6ii
Estahbān;96xi246ii
Sheybān;9d9hnj6ii
Rūdān;928iav6ii
Rāmsar;9skhsp6ii
Fūman;9tehoz6ii
Şaḩneh;9lshkh6ii
Āq Qalā;9sti3a6ii
Qīdar;9qbhmz6ii
Bāft;977i986ii
Gerāsh;92vi2e6ii
Hādīshahr;9xxheu6ii
Mahrīz;9dqi386ii
Ferdowsīyeh;9owhtu6ii
Fereydūn Kenār;9rwhxw6ii
Dīvāndarreh;9prhim6ii
Kalāleh;9tui656ii
Dowlatābād;9h4hvm6ii
Delījān;9kfhss6ii
Chamrān;9bbhok6ii
Vaḩīdīyeh;9p7huz6ii
Vaḩīdīyeh;9oxhtr6ii
Khvāf;9m2ij26ii
Jūybār;9rshyz6ii
Ṣafādasht;9p5ht96ii
Farrokh Shahr;9fnhtm6ii
Zarqān;98phyg6ii
Maḩmūdābād;9rrhx66ii
Kavār;975hyd6ii
Jam;93bhxd6ii
Eyvān;9jzhgn6ii
Fārsān;9fmhsg6ii
Amīr Kolā;9rohyb6ii
Bandar-e Lengeh;8zsi4g6ii
Mīnūdasht;9tfi5t6ii
Eshtehārd;9p9hrx6ii
Pāsārgād;99whzq6ii
Shahrak-e Qods;9pchuq6ii
Sardrūd;9vnhg76ii
Karahrūd;9kmhpw6ii
Ajab Shīr;9u4hfh6ii
Qahderījān;9gihux6ii
Lamerd;91xhzq6ii
Khowrzūq;9h2hvh6ii
Damāvand;9p8hwn6ii
Hendījān;9a0hq36ii
Germī;9yehlk6ii
Ferdows;9kiidl6ii
Bahār;9mzhmk6ii
Nasirshahr;9olhu26ii
Rūdehen;9p9hw76ii
Bardaskan;9nyid16ii
Aleshtar;9k2hm26ii
Abarkūh;9chi006ii
Malekān;9t6hg26ii
Nā’īn;9hahzh6ii
Nūr;9rlhwi6ii
Semīrom;9dahv96ii
Şafāshahr;9b1hzs6ii
Qā’emīyeh;98xhvb6ii
Qarah Ẕīā’ od Dīn;9y1hd36ii
Poldokhtar;9i3hkj6ii
Bāgh-e Malek;9dkhql6ii
Shahrak-e Ţāleqānī;9bohrg6ii
Pāveh;9nchgs6ii
Bandar-e Deylam;99hhrc6ii
Kelīshād va Sūdarjān;9gfhv56ii
Shāhedshahr;9othtw6ii
Showţ;9yyhcd6ii
Goldasht;9gnhuw6ii
Bardsīr;994i956ii
Āshkhāneh;9ucia46ii
Rāmshīr;9bthp96ii
Qeshm;90vi8b6ii
Darreh Shahr;9i2hjm6ii
Ravānsar;9mghhl6ii
Gaz-e Borkhar;9h4hve6ii
Gotvand;9flhnl6ii
Bandar-e Deyr;93chwa6ii
Ābdānān;9hnhjq6ii
Gālīkesh;9tji5z6ih
Ḩājjīābād;94ni7a6ih
‘Ālī Shahr;96dhtv6ih
Mojtame‘-e Maskūnī-ye Nāmjū;9ojhvo6ih
Baravāt;96rie86ih
Garmdarreh;9pbhtv6ih
Shabestar;9w2hey6ih
Ḥamīdiyeh;9dghmj6ih
Maḩmūdābād Nemūneh;9qthqm6ih
Khosrowshahr;9vfhfx6ih
Khānsār;9iahrr6ih
Māmūnīyeh;9o2hsa6ih
Aghajari;9bahqf6ih
Bostānābād;9v5hi46ih
Tīrān;9guhu36ih
Ferūnābād;9oohve6ih
Ḩājjīābād;94si366ih
Shahrak-e ‘Alā’īn;9ouhuy6ih
Galūgāh;9s1i1h6ih
Galūgāh;9qvhy76ih
Hafshejān;9fjht36ih
Shāzand;9k9hp96ih
Mahdishahr;9p7i076ih
Ţorqabeh;9qvigx6ih
Khomām;9tvhpy6ih
Bandar-e Gaz;9s5i1v6ih
Katālem va Sādāt Shahr;9shhsu6ih
Hashtrūd;9u4hip6ih
Sharīfābād;9qlhrb6ih
Mahājerān;9klhpb6ih
Farrāshband;966hwp6ih
Najafshahr;97ni6s6ih
Dārān;9hnhs16ih
Qīr;954hzb6ih
Abrīsham;9gghv96ih
Surian;9ami116ih
Evaz;934i206ih
Sīāhkal;9t7hqj6ih
Līkak;9bthr56ih
Jājarm;9sni8m6ih
Reẕvānshahr;9ubhoi6ih
Hoveyzeh;9dehlj6ih
Fāẕelābād;9sii436ih
Māhān;99iib56ih
Khonj;93hi0f6ih
Kabūdarāhang;9nthnc6ih
Bandar-e Kong;8zwi4m6ih
Gomīshān;9szi286ih
Ashkez̄ar;9ewi2l6ih
Sedeh Lanjān;9fyhuk6ih
Dīzīcheh;9fzhv36ih
Āb Pakhsh;97khtv6ih
Nakhl-e Taqī;92ehy36ih
Choghādak;96jhts6ih
Varnāmkhvāst;9fwhuq6ih
Lālī;9fthod6ih
Qaşr-e Shīrīn;9lwhem6ih
Taft;9e6i2k6ih
Oskū;9vchg46ih
Nehbandān;9dmiis6ih
Sarvestān;97bhzu6ih
‘Anbarābād;954icp6ih
Lavāsān;9pihvg6ih
Jālq;92oiq76ih
Mādavān;9bchv66ih
Bīdestān;9qnhr86ih
Pārsiān;91lhzc6ih
Dehāqān;9eqhvh6ih
Māsāl;9tshoh6ih
Seyah Cheshmeh;9yjhba6ih
Dastgerd;9h4hvi6ih
Arsanjān;993i036ih
‘Eyn-e Do;9d3hn06ih
Ovrīn;9orhu16ih
Fīrūzkūh;9pchyl6ih
Pādegān-e Manjīl;9s2hpa6ih
Khabarābād;9oqhu36ih
Sīmīn Shahr;9sti2n6ih
Sa‘ādat Shahr;99khzl6ih
Nīkshahr;8yvij96ih
Jask;8x9ici6ih
Īlkhchī;9vehfq6ih
Tafresh;9mdhqy6ih
Sa‘īdābād;9p3hu76ih
Zīr Āb;9qihz56ih
Shahrak-e Mohandesī-ye Zerā‘ī;9pdhtk6ih
Ardestān;9iqhxh6ih
Pīshīn;8yginj6ih
Haftkel;9ddhpl6ih
Manūjān;924ibq6ih
Manjīl;9s2hp86ih
Chamgordān;9fzhum6ih
Anār;9bri5j6ih
Morteẕá Gerd;9owhun6ih
Amlash;9t2hrf6ih
Bandar-e Khamīr;90vi6f6ih
Boshrūyeh;9k3ibj6ih
Veys;9dhhns6ih
Shāl;9pqhq96ih
Charām;9bghsz6ih
Ahram;968huf6ih
Gorjī-ye Soflá;9r3ihs6ih
=IS
Reykjavík;bw6c7670k
Kópavogur;bw3c7570i
Hafnarfjörður;bvzc7270i
Reykjanesbær;bvsc5c70h
Akureyri;c0gchr70h
Keflavík;bvsc5c70h
=IT
Rome;a6deur8dp;رم|روم|羅馬|罗马市|로마|Рим|Ром|रोम|रोमा|โรม|ローマ|Hrom|Roma|Romo|Roum|Rzym|Urbs|Ramma|Roeme|Romma|Rooma|Erroma|Rhufain|An Roimh
Milan;agaelj8dp;米蘭|ミラノ|밀라노|Mila|Milao|Milaan|Milana|Milano|Milanu|Mailand|Milanas|Mediolan|Mediolanum|Mилан|Милан|مىلان|ميلان|มิลาน
Naples;a3hezn8do
Turin;af7ehd8do
Palermo;9vwex48dn
Genoa;adceku8dn
Bologna;adleri8dm
Florence;abmer98dm
Bari;a48f6v8dm
Catania;9u5f1v8dm
Verona;ag8eqj8dm
Messina;9w3f378dl
Trieste;agteya8dl
Padua;ag5et18dl
Brescia;agieod8dl
Taranto;a2ef7x8dl
Parma;aegeop8dl
Prato;abwequ8dl
Modena;ae1eqd8dl
Reggio Calabria;9vvf3i8dl
Quarto Oggiaro;agfele8dl
Reggio nell'Emilia;ae6epj8dl
Livorno;aayeop8dl
Cagliari;9yzelc8dl
Rimini;aceeux8dl
Mestre;agdeu18dl
Circoiscrizione II;af5eh88dl
Foggia;a56f378dl
Circoiscrizione VIII;af4ehb8dl
Ferrara;aekesa8dk
Circoiscrizione III;af6eh78dk
Acilia-Castel Fusano-Ostia Antica;a60eu98dk
Circoiscrizione V;afaeha8dk
Salerno;a30f138dk
Monza;agmelr8dk
Siracusa;9t0f2h8dk
Bergamo;agyemv8dk
Trento;ahzeqw8dk
Perugia;a9reuf8dk
Pescara;a7yezg8dk
Forlì;acuetg8dk
Vicenza;agjes38dk
Terni;a88ev48dk
Pisa;abfeow8dk
Bolzano;aj5eri8dk
Circoiscrizione VI;afaehe8dk
Piacenza;af5emx8dk
Novara;ag9ejy8dk
Arezzo;aaqet08dk
Udine;ahzews8dk
Andria;a4jf5a8dk
Circoiscrizione IV;af8eh78dk
Cesena;acmeu08dk
La Spezia;aciena8dk
Barletta;a4rf588dk
Alessandria;aerejx8dk
Sassari;a35ejs8dk
Ancona;ab5exj8dk
Circoiscrizione VII;af8ehe8dk
Guidonia Montecelio;a6nevc8dk
Campo di Marte;abmerc8dk
Brindisi;a2vf9u8dk
Treviso;agveu08dk
Torre del Greco;a3bezx8dk
Lido di Ostia;a5xeu48dk
Como;ah9el88dk
Busto Arsizio;agpekl8dk
Sesto San Giovanni;agheln8dk
Lucca;absep68dk
Pozzuoli;a3gez68dk
Ravenna;addetw8dk
Lecce;a23fah8dk
Varese;ahaekj8dk
Giugliano in Campania;a3pezg8dk
Catanzaro;9y0f648dk
Circoiscrizione I;af7ehd8dk
Marsala;9v0euk8dk
Pesaro;abzevw8dk
Fuorigrotta;a3fezg8dk
Latina;a57evu8dk
Cinisello Balsamo;agkell8dk
Gela;9szezk8dk
Aprilia;a5jev58dj
Asti;aeqeit8dj
Ragusa;9slf0w8dj
Casoria;a3nezp8dj
Pistoia;ac1eqc8dj
Caserta;a43ezt8dj
Cremona;afdenu8dj
Carpi;aeeeq88dj
Altamura;a3ff5z8dj
Lamezia Terme;9y8f5b8dj
Imola;ad8esj8dj
San Carlo All'Arena;a3jezm8dj
Arenella;a3iezi8dj
Trapani;9vmeuu8dj
Quartu Sant'Elena;9yzelp8dj
Castellammare di Stabia;a32f098dj
Pavia;afjelg8dj
Massa;acceo68dj
Crotone;9ykf7l8dj
Afragola;a3oezr8dj
Cosenza;9z6f558dj
Caltanissetta;9u5ez28dj
Viareggio;abveoh8dj
Savona;ad3ejk8dj
Fano;absew68dj
Grosseto;a8seqv8dj
Matera;a2zf648dj
Olbia;a3oeme8dj
Acerra;a3qezx8dj
Molfetta;a4gf648dj
Carrara;acgeo28dj
Benevento;a49f128dj
Vigevano;afvekl8dj
Pianura;a3iezd8dj
Legnano;agoeks8dj
Manfredonia;a5nf488dj
Foligno;a9beva8dj
Potenza;a2wf3x8dj
Moncalieri;af0ehc8dj
Cuneo;adbegz8dj
Bisceglie;a4kf5u8dj
Pozzo Strada;af7eh78dj
Modica;9sef108dj
Teramo;a8iey28dj
Cerignola;a4nf468dj
Trani;a4of5l8dj
Siena;aacerh8dj
Portici;a3eezu8dj
Ercolano;a3dezv8dj
Montesilvano;a83ezb8dj
Bagheria;9vsexj8dj
Cava Dè Tirreni;a32f0v8dj
Aversa;a3tezh8dj
Velletri;a5tevi8dj
Ponticelli;a3hezt8dj
San Severo;a5tf2q8dj
Secondigliano;a3mezn8dj
Bitonto;a47f6d8dj
Mazara del Vallo;9umeuz8dj
Venice;ag8eu98dj
Vittoria;9snf0d8dj
Gallarate;aguekf8dj
Barriera di Milano;af9ehd8dj
Rovigo;af7esr8dj
Barriera di Lanzo;afbeh98dj
Marano di Napoli;a3mezf8dj
Pordenone;ahoev68dj
Nettuno;a56ev68dj
Lingotto;af3eh98dj
Acireale;9uhf258dj
Campobasso;a5gf0r8dj
Scafati;a38f0e8dj
Rivoli;af7egv8dj
Avellino;a3nf138dj
San Lorenzo;a3iezm8dj
Nichelino;af0eh98dj
Civitavecchia;a6xess8dj
Settimo Torinese;afeehl8dj
Viterbo;a7uetn8dj
Battipaglia;a2tf1m8dj
Rho;aghel48dj
Sanremo;abqehm8dj
Chioggia;afmeu48dj
Parella;af8eh78dj
Lecco;aheem48dj
Collegno;af8eh18dj
Corato;a4bf5l8dj
Paderno Dugnano;aglelg8dj
Paternò;9udf1e8dj
Vercelli;afweje8dj
San Benedetto del Tronto;a9ceyk8dj
Casalnuovo di Napoli;a3nezu8dj
Cologno Monzese;aghels8dj
Sesto Fiorentino;abrer48dj
Nocera Inferiore;a37f0p8dj
Misterbianco;9u8f1p8dj
Filadelfia;af2eh88dj
San Giorgio a Cremano;a3fezu8dj
Anzio;a55ev28dj
Soccavo;a3hezf8dj
Monte Rosello;a36ejt8dj
Scandicci;abjer38dj
Vomero;a3gezj8dj
Frosinone;a5oex28dj
Chieti;a7nezc8dj
Alcamo;9view08dj
Marino;a61ev68dj
Arcella;ag6et18dj
Torre Annunziata;a37f058dj
Biella;agkeie8dj
Seregno;agtell8dj
Imperia;abxeic8dj
Civitanova Marche;aaaey48dj
Gravina in Puglia;a3ef5m8dj
Desio;agqelk8di
San Donà di Piave;agreux8di
Ascoli Piceno;a91exp8di
Faenza;ad1et08di
Vasto;a6zf0v8di
Mirafiori Nord;af4eh78di
Capannori;absepd8di
Merano;ajner08di
Lodi;afveme8di
Chiaia;a3fezj8di
Sciacca;9u7ewc8di
Cascina;abcepb8di
Marcianise;a3zezq8di
Nicastro;9y9f5b8di
Cantù;ah2eld8di
Fondi;a4wexb8di
Rozzano;ag2elg8di
Mantua;afgeq08di
Rieti;a7sevq8di
Pomigliano d'Arco;a3nezy8di
Voghera;aezel18di
Caltagirone;9tgf0c8di
Ciampino;a64ev08di
Bassano del Grappa;ah5esl8di
Saronno;agrel48di
Avezzano;a6rexb8di
Monopoli;a3rf828di
Martina Franca;a32f868di
Quarto;a3keza8di
Lissone;agpelo8di
Monterotondo;a6tev28di
Cesano Maderno;agrelf8di
Jesi;aawews8di
Melito di Napoli;a3oezj8di
Sassuolo;adqepy8di
Chieri;af1ehq8di
Grugliasco;af7eh28di
Barra;a3gezs8di
Licata;9t2eyq8di
Modugno;a44f6m8di
Cenisia;af7eh98di
Nuoro;a20elx8di
San Salvario;af5ehc8di
Aosta;ah2egc8di
Bollate;agjelc8di
Carini;9vxewm8di
Arzano;a3nezn8di
Lanciano;a7bezz8di
Caivano;a3sezr8di
Barcellona Pozzo di Gotto;9vzf298di
Fiumicino;a61eu08di
Maddaloni;a40ezy8di
Adrano;9umf178di
Gorizia;ahmexu8di
Empoli;abgeqf8di
Formigine;adteq58di
Alghero;a2oej48di
Mugnano di Napoli;a3nezh8di
Ladispoli;a6jetk8di
Pioltello;ageelx8di
Rovereto;ahheqo8di
Piombino;a99ep98di
Casalecchio di Reno;adkerb8di
Schio;agzerk8di
L'Aquila;a7nex88di
Mirafiori Sud;af2eh68di
Corsico;ag7elb8di
Sant'Antimo;a3qezj8di
Venaria Reale;afdeh78di
Francavilla Fontana;a2lf8v8di
Borgo San Paolo;af6eh88di
Casale Monferrato;afdejh8di
Brugherio;agjelu8di
Avvocata;a3hezk8di
Canicattì;9tseyh8di
Mira Taglio;ag7etp8di
Campi Bisenzio;abqeqx8di
Pagani;a36f0l8di
Abbiategrasso;ag4eks8di
Riccione;ac8ev68di
Casal Palocco;a5zeub8di
San Donato;af8eha8di
Agrigento;9tnexq8di
Somma Vesuviana;a3jf048di
Lucera;a5bf2m8di
Mascalucia;9udf1t8di
Favara;9toexy8di
Limbiate;agoeld8di
Milazzo;9w6f2c8di
Santa Maria Capua Vetere;a44ezl8di
Castelvetrano;9uoevj8di
Oristano;a0uejv8di
Angri;a36f0h8di
Crema;ag0emw8di
Grottaglie;a2mf8g8di
Verbania;ahkejr8di
San Giuliano Milanese;ag3elt8di
Termoli;a6of1n8di
Terracina;a4pews8di
Senigallia;abgewp8di
Massafra;a2rf7k8di
Pinerolo;aepegd8di
Macerata;aaaexd8di
Conegliano;ahheu68di
Augusta;9tgf2a8di
Stella;a3iezl8di
Marigliano;a3of068di
Canosa di Puglia;a4if4n8di
Infernetto;a5xeuc8di
Frattamaggiore;a3qezo8di
San Paolo;a48f6n8di
Santa Rita;af5eh88di
Nardò;a1mfa38di
Vanchiglia;af7ehe8di
Monterusciello;a3jez48di
Gragnano;a31f0c8di
Cernusco sul Naviglio;aghelx8di
Chinatown;agceli8di
Pallanza-Intra-Suna;ahmejt8di
Sarno;a3df0m8di
Partinico;9vpewg8di
Cervia;acyeub8di
Mondragone;a47eyl8di
Avola;9sjf228di
Marghera;ag9ety8di
Formia;a4mext8di
San Donato Milanese;ag5elr8di
Segrate;agdelu8di
Piscinola;a3lezj8di
Manduria;a28f908di
Cisterna di Latina;a5jevn8di
Casal de' Pazzi;a6heux8di
San Giovanni Rotondo;a5vf3p8di
Rapallo;ad7eln8di
Niscemi;9t7ezz8di
San Giuseppe Vesuviano;a3gf0a8di
Boscoreale;a39f088di
Triggiano;a43f718di
Camaiore;ac2eom8di
Monfalcone;ah8exl8di
Albano Laziale;a5xev68di
Montebelluna;ah6eth8di
Chiavari;ad4elw8di
Gravina di Catania;9ucf1u8di
Mesagne;a2of9h8di
Nizza Millefonti;af3ehb8di
San Miniato Basso;abdeq48di
Parabiago;agkekv8di
Comiso;9snf0l8di
Eboli;a2uf1u8di
Romano Banco;ag6elb8di
Garbagnate Milanese;aglel88di
Novi Ligure;aecekf8di
Falconara Marittima;ab7ex88di
Giussano;agyell8di
Scandiano;adwepq8di
Terlizzi;a49f5z8di
Bresso;agielj8di
Bacoli;a3cez38di
Castelfranco Veneto;agvet58di
Assemini;9z5el08di
Villaricca;a3oezf8di
Belluno;ai6ety8di
Lainate;aglel38di
Lucento;afbeha8di
Marina di Carrara;accenw8di
Treviglio;aggemn8di
Alba;ae6eib8di
Santeramo in Colle;a3bf6k8di
Vittorio Veneto;ahqeu68di
Orta di Atella;a3sezn8di
Mola di Bari;a42f7h8di
Aci Catena;9uhf228di
Spinaceto;a62euk8di
Gioia del Colle;a3cf708di
Ostuni;a35f8u8di
Giarre;9usf268di
Ventimiglia;abneh58di
Lentini;9tlf1o8di
Nola;a3pf0d8di
Bra;ae6eht8di
Ruvo di Puglia;a48f5s8di
Pompei;a37f0a8di
Miano;a3lezl8di
Casa Santa;9vneuv8di
San Giovanni a Teduccio;a3gezr8di
Rossano Stazione;a00f678di
Sora;a5wext8di
Qualiano;a3oezb8di
Lumezzane;agteoi8dh
Spinea-Orgnano;agdets8dh
Putignano;a3hf7k8dh
Poggioreale;a3jezp8dh
Ivrea;agbehw8dh
Seriate;agxen08dh
Copertino;a1vfa58dh
Nocera Superiore;a36f0r8dh
Chiaiano;a3kezh8dh
Ottaviano;a3hf088dh
Scampia;a3mezk8dh
Cesano Boscone;ag8el98dh
Bagnoli;a3dezd8dh
Selargius;9z2elg8dh
Fabriano;aaeevu8dh
San Sebastiano;agteoi8dh
Muggiò;agneln8dh
Biancavilla;9ukf1b8dh
Montecalvario;a3gezl8dh
Chivasso;afjehx8dh
Carmagnola;aelehg8dh
Enna;9udezn8dh
Termini Imerese;9viey28dh
Volla;a3jezu8dh
Quattromiglia;9zaf548dh
Dalmine;agtemp8dh
Posillipo;a3dezg8dh
Tortona;aeqekm8dh
Seveso;agtele8dh
Vimercate;agqem18dh
Desenzano del Garda;agbepa8dh
Meda;aguelf8dh
Conversano;a3tf7j8dh
Iglesias;9z7ejq8dh
Palma di Montechiaro;9tbey98dh
Mariano Comense;agyeli8dh
Carbonara di Bari;a43f6v8dh
Fasano;a3gf888dh
Magenta;agaeko8dh
Valdagno;agsere8dh
Città di Castello;aareu08dh
Massarosa;abveoq8dh
Vignola;adkeql8dh
San Lazzaro;adjerp8dh
Pomezia;a5reuq8dh
Nova Milanese;agnelk8dh
Cardito;a3rezq8dh
Porto Sant'Elpidio;aa5ey88dh
Floridia;9t0f238dh
San Cataldo;9u4eyv8dh
San Giovanni la Punta;9uef1x8dh
Cecina;aabep88dh
Tivoli;a6kevk8dh
Mogliano Veneto;agkeu08dh
Noicattaro;a3zf778dh
Monreale;9vsewx8dh
Fidenza;aeneny8dh
Castel Volturno;a3zeyq8dh
Mondovì;adcehq8dh
Orbassano;af1egy8dh
Poggibonsi;aareqz8dh
Carbonia;9ysejo8dh
Porto Torres;a3fejd8dh
Legnago;afjere8dh
Madonna di Campagna;afaeha8dh
Lugo;adeet38dh
Esquilino;a6eeur8dh
Arzignano;aggerh8dh
Cassano Magnago;agvekj8dh
Follonica;a99epw8dh
San Nicola la Strada;a41ezt8dh
Thiene;agzerw8dh
Francavilla al Mare;a7uezo8dh
Sulmona;a6teyp8dh
Cassino;a59eyf8dh
Guidonia;a6nevc8dh
Tor Lupara;a6oev28dh
Montecchio Maggiore-Alte Ceccato;ageerp8dh
Colleferro;a5xew48dh
Sant'Anastasia;a3jf008dh
Palo del Colle;a42f6e8dh
Giardinetti-Tor Vergata;a69ev28dh
Senago;agmeld8dh
Casal di Principe;a3xez98dh
Genzano di Roma;a5vev98dh
Acquaviva delle Fonti;a3mf6s8dh
Pachino;9s0f1x8dh
Giulianova;a8reyt8dh
Sarzana;acjeno8dh
Borgomanero;agyeji8dh
Castrovillari;a0mf508dh
Centro;af7ehc8dh
Marina di Ardea-Tor San Lorenzo;a5feuu8dh
Monserrato;9z2ele8dh
Cornaredo;ageel38dh
San Giovanni Lupatoto;ag2eqo8dh
Frascati;a65ev88dh
Cormano;agjelg8dh
Viadana;aeuep88dh
Aurora;af8ehd8dh
Trezzano sul Naviglio;ag6el68dh
Sambiase;9y9f588dh
Gaeta;a4hexp8dh
Rosignano Solvay-Castiglioncello;aajep08dh
Novate Milanese;aghele8dh
Rosolini;9saf1j8dh
Galatina;a1lfah8dh
Pontedera;abaepj8dh
Poggiomarino;a3cf0e8dh
Trecate;ag7eka8dh
Casarano;a15fag8dh
Sabaudia;a4qew78dh
Spoleto;a8qeve8dh
Vibo Valentia;9xgf4q8dh
Sondrio;ai9enf8dh
Giovinazzo;a4ef6b8dh
Gallipoli;a1af9z8dh
Misilmeri;9vnexd8dh
Arese;agjel88dh
Marina di Massa;ac8eo38dh
Bronte;9uzf178dh
Villabate;9vsexc8dh
Porta Palazzo;af8ehc8dh
Gorgonzola;aghem58dh
Cesenatico;acseug8dh
Cusano;agjeli8dh
Pietrasanta;ac4eof8dh
Sant'Antonio Abate;a34f0e8dh
Fossano;adrehg8dh
Gioia Tauro;9wrf468dh
Monselice;afoesn8dh
Montevarchi;aaxes58dh
Casavatore;a3mezo8dh
Ischia;a36eyr8dh
Palmi;9wkf418dh
Castiglione delle Stiviere;ag3ep58dh
San Mauro Torinese;afaehl8dh
Brera;agbelj8dh
Noto;9shf1v8dh
San Ferdinando;a3fezl8dh
Casamassima;a3sf708dh
Crocetta;af6ehb8dh
Vanchiglietta;af7ehg8dh
Abano Terme;ag0esr8dh
Ischia Porto;a36eyr8dh
Cento;ae9erd8dh
Sestu;9z6el98dh
Pozzallo;9s1f198dh
Grottaferrata;a63ev78dh
Fermo;a9wey48dh
Melzo;ageem68dh
Palazzolo sull'Oglio;agoenh8dh
Montecatini-Terme;abwepx8dh
Grumo Nevano;a3qezm8dh
Bastia umbra;a9meuv8dh
Acqui Terme;ae4ejj8dh
Cercola;a3iezw8dh
Domodossola;ai4ej18dh
Arpino;a3lezs8dh
Piazza Armerina;9tuezx8dh
Rutigliano;a3xf798dh
Ribera;9u6ewv8dh
Bellaria-Igea Marina;acmeun8dh
San Vito dei Normanni;a2yf978dh
Aci Castello;9ucf238dh
Romano di Lombardia;aggen38dh
Adriano;agfelp8dh
Montemurlo;ac1eqo8dh
Ariccia;a5wev78dh
Portogruaro;ah6evo8dh
Ciriè;afneh48dh
Mirandola;aepeqr8dh
San Giovanni in Fiore;9z1f6e8dh
San Bonifacio;ag4erb8dh
Agropoli;a23f1n8dh
Riva del Garda;ahheq48dh
Paolo VI;a2kf7z8dh
San Pietro a Patierno;a3lezp8dh
Castelfranco Emilia;adveqp8dh
Valenza;af1ek08dh
Fornacelle;ac0eqo8dh
Cassano d'Adda;aghemg8dh
Torvaianica;a5meum8dh
Tradate;agzekr8dh
Terzigno;a3cf098dh
San Salvo;a6sf0x8dh
Albenga;acdeiu8dh
Ardea;a5leuu8dh
Vimodrone;agfelt8dh
Trentola-Ducenta;a3uezd8dh
Mentana;a6sev48dh
Nerviano;agjeky8dh
Polo Nord;af5eh98dh
Este;afmese8dh
Sestri Levante;aczem48dh
Torremaggiore;a5tf2h8dh
Isernia;a5kezj8dh
Piossasco;aezegq8dh
San Miniato;abceq58dh
Pendino;a3hezm8dh
Malafede;a61eue8dh
Savigliano;ae1eha8dh
Adelfia;a3wf6v8dh
Melegnano;ag0elw8dh
Arcore;agrelw8dh
Orta Nova;a4tf3n8dh
Scordia;9tmf188dh
Sacile;ahneuq8dh
Colle di Val d'Elsa;aameqx8dh
Osimo;aatexg8dh
Alpignano;af9egw8dh
Porto Empedocle;9tlexk8dh
San Felice A Cancello;a3yf098dh
Suzzara;aezepu8dh
Bareggio;agcel08dh
Bovisio-Masciago;agpelf8dh
Roseto degli Abruzzi;a8jeyx8dh
Saluzzo;ae1egt8dh
Ceglie Messapica;a2xf8o8dh
Tolentino;aa1ewx8dh
Albignasego;afzesz8dh
Erba;ah9eln8dh
Caronno Pertusella;agoel58dh
Ghedi;ag4eok8dh
Belpasso;9uff1m8dh
Fiorano;adqeq18dh
Casal Bertone;a6eeut8dh
Minturno;a4mey78dh
Palagonia;9tpf0y8dh
Cattolica;ac4eve8dh
Ginosa;a2qf6k8dh
Scicli;9s7f0u8dh
Valenzano;a40f6w8dh
Sezze;a5aewa8dh
Castel Maggiore;aduerk8dh
San Giovanni Valdarno;ab1es18dh
Quartiere Otto;agdele8dh
Forio;a36eyi8dh
Zola Predosa;adler68dh
Cordenons;ahqeva8dh
Sava;a28f8r8dh
Villafranca di Verona;afzeq48dh
Cerveteri;a6netl8dh
Bressanone;ajsese8dh
San Nicandro Garganico;a68f398dh
Sinnai;9z6elk8dh
San Giovanni in Persiceto;ae0er28dh
Oderzo;ah6eup8dh
Salsomaggiore Terme;aeienr8dh
Lido;ag5eud8dh
Galliate;agcek68dh
Siderno;9wbf5a8dh
Correggio;aedepy8dh
Porto San Giorgio;a9yeyb8dh
Chiari;agienl8dh
Frattaminore;a3sezn8dh
Malnate;ah7eko8dh
Capua;a47ezh8dh
Carate Brianza;agwelo8dh
Palagiano;a2qf7c8dh
Noci;a3bf7l8dh
Carugate;agjely8dh
Todi;a8ueuh8dh
Lancenigo-Villorba;agzeu28dh
Brusciano;a3of028dh
Bussolengo;agbeq58dh
Mirano;agdetn8dh
Corigliano Scalo;a03f5v8dh
Villanova;a6kevg8dh
Eppan;aj2era8dh
Vicaria;a3iezn8dh
Rocca di Papa;a61eva8dh
Montichiari;ag5eow8dh
=JE
Saint Helier;aqndq67ui
=JM
Kingston;8c07yp32o
New Kingston;8c17yq32n
Spanish Town;8bz7y832l
Portmore;8bx7yf32k
Montego Bay;8db7vk32k
Mandeville;8c47wp32j
May Pen;8bw7xf32j
Ocho Rios;8d57xu32i
Old Harbour;8bu7xt32i
Linstead;8ce7y132h
Half Way Tree;8c17yo32h
Barrett Town;8df7vw32h
Savanna-la-Mar;8cm7uz32h
=JO
Amman;9esgnv4po;安曼|암만|Aman|Amani|Amano|Amans|Ammon|Amanas|Ammana|Rabbah|Philadelphia|Rabbath Ammon|Аман|Амман|امان|عمان|アンマン|अम्मान|อัมมาน
Zarqa;9f3go94po;زرقاء|الزرقاء
Irbid;9gggnl4pn;إربد|اربد
Russeifa;9eygo54pm;الرصيفة|الرصيفه
Ḩayy Khildā;9evgnk4pm;خلدا|حي خلدا
Khuraybat as Sūq;9ekgns4pl;خريبة السوق
Wādī as Sīr;9ergni4pl;وادي السير
Ar Ramthā;9gggo14pl;الرمثا
Ṣuwayliḥ;9eygnk4pl;صويلح
‘Ajlūn;9ftgnb4pk;عجلون
As Salţ;9f0gn94pk;السلط
Aqaba;981gl94pk;عقبه|العقبة
Rukban;9ijgvi4pk;الرُّقبان|الرُّكبان
Marj Al Hamam;9emgnl4pk;مرج الحمام
Mādabā;9e4gnf4pk;مأدبا|مادبا|محافظة مادبا
Mafraq;9fugol4pj;مفرق|المفرق|شهر المفرق
Az̧ Z̧ulayl;9f8gos4pj;الضليل|الظليل
Ma'an;99wgn94pj;معان
Al Jubayhah;9exgnq4pj;الجبيهة
Saḩāb;9ejgo04pi;سحاب
Ḩayy al Quwaysimah;9engnv4pi;حي القويسمة
Jarash;9fognq4pi;جرش
Aţ Ţafīlah;9bogmw4pi;الطفيلة
‘Izrā;9ckgn54ph
Qīr Moāv;9cmgn64ph;الكرك
Karak City;9ckgnc4ph
Judita;9g1gn74ph;جديتا
Al Fuḩayş;9ewgne4ph;الفحيص
Aydūn;9gbgnm4ph;ايدون
Umm as Summāq;9elgnl4ph;ام السمّاق
Kurayyimah;9fogmw4ph;كريمة
Māḩiş;9evgnd4ph;ماحص
‘Anjarah;9frgnb4ph;عنجرة
Safi;9c8gmj4ph;الصافي|غورالصافي
=JP
Tokyo;9p5oo16ks;东京|東京|東京都|도쿄|동경|Tocio|Tokio|Tochiu|Tokija|Toquio|Tokijas|Токио|Токіо|توكيو|توکیو|टोक्यो|โตเกียว
Yokohama;9ofonx6kq;横浜|横浜市|横滨市|よこはま|ヨコハマ|요코하마 시|Якагама|Јокохама|Iokogama|Jakagama|Jokohama|Jokohamo|Jokokhama|Yokohamashi|Yokohama-shi|يوكوهاما|โยะโกะฮะมะ
Osaka;9mdoce6kq;大阪|大阪市|Osaca|Osako|Oszaka|Osaacke|Osaka-shi|Осака|おおさかし|오사카 시|أوساكا|ئوساكا|โอซะกะ
Nagoya;9nqogb6kp;名古屋|名古屋市|なごやし|Нагоя|Нагоја|나고야 시|Nagoia|Nagoja|Nagojo|Naqoya|Nagoya-shi|Nagoya City|ناغويا|ناگویا، آیچی|นะโงะยะ
Sapporo;a9nosn6kp;札幌|札幌市|さっぽろ|サッポロ|삿포로 시|Sapara|Saporo|Saporas|Sapporum|Szapporo|Sapporoshi|Sapporo-shi|Sapporo-chhi|Сапара|Сапоро|سابورو|ساپورو|सप्पोरो|ซัปโปะโระ
Fukuoka;9jcnya6kp;福岡|福岡市|ふくおか|フクオカ|فوكوكا|후쿠오카 시|Fucuoca|Fukuoko|Hukuoka|Fukuokashi|Fukuoka-shi|Фукуока
Kawasaki;9oooo46kp;川崎|川崎市|가와사키 시|Kauasaki|Kavasaki|Kavasakis|Kavaszaki|Kawasaki Si|Kawasaki City|Kawasaki-chhi|Кавасаки|Кавасакі|كاواساكي|کاواساکی، کاناگاوا|कावासाकी|คะวะซะกิ
Kobe;9mdobi6kp;神戶|神戸|神户市|Кобе|Кобэ|كوبه|کوبه|कोबे|こうべし|고베 시|Kobeh|Kobeo|Kompe|Kobe-shi|Kobe-chhi|โคเบะ
Kyoto;9naod36kp;京都|京都市|Кёто|Киото|キョウト|きょうとし|교토 시|Kioto|Kjoto|Kyotu|Kijota|Kiotas|Kyotum|Quioto|Kejuots|Kyoto-shi|كيوتو|کیوتو|क्योटो|क्योतो|เคียวโตะ
Saitama;9prony6ko;さいたま|Саитама|سايتاما
Hiroshima;9lko3x6ko;広島|広島市|廣島市|ひろしま|ヒロシマ|히로시마 시|Hirosima|Hirosimo|Hiroxima|Chirosima|Hiroszima|Khirosima|Khiroshima|Hiroshimashi|Hiroshima-shi|Хиросима|Хирошима|هيروشيما|هیروشیما|हिरोशिमा|ฮิโรชิมา|จังหวัดฮิโระชิมะ
Sendai;9wborb6ko;仙台|仙台市|せんだい|センダイ|Sendaj|Sendaishi|Sendai-shi|Сендай
Chiba;9owop86ko;ちば|チバ|千葉
Kitakyushu;9k1nzh6ko;北九州|北九州市
Setagaya;9p0onx6ko;世田谷|世田谷区
Sakai;9m2ocb6ko;堺|堺市
Niigata;9vcom86ko;新潟|新潟市|にいがた
Hamamatsu;9meoil6ko;浜松|浜松市|滨松市
Ōta;9osoo46kn;大田区
Kumamoto;9h5nz16kn;熊本|熊本市|くまもとし
Aihara;9owon06kn;相原
Okayama;9m9o816kn;岡山|岡山市|おかやま
Sagamihara;9otoms6kn;相模原
Edogawe;9p5ooj6kn;江戸川区
Adachi;9pcood6kn;足立|足立区
Shizuoka;9n6oke6kn;静岡|静岡市|靜岡市
Honchō;9p6oov6kn;本町|船橋|船橋市
Kawaguchi;9phoo36kn;川口|川口市|かわぐち
Kagoshima;9dpnyn6kn;鹿児島|かごしま|カゴシマ
Suginami;9qkopo6kn;杉並
Itabashi;9pboo36kn;板橋|いたばし|イタバシ
Hachiōji;9p2on06kn;八王子|八王子市
Kotō;9h2nz76kn;湖東|ことう|コトウ
Himeji;9mqoa66kn;姫路|姫路市|姬路市
Utsunomiya;9rlook6kn;宇都宮|宇都宮市|うつのみや
Matsuyama;9k0o4t6kn;松山|松山市|まつやまし
Matsudo;9peoom6kn;松戸|松戶市|松戸市
Ichikawa;9p9oon6kn;市川
Higashiosaka;9mbocm6kn;東大阪|東大阪市
Nishinomiya;9mgobx6kn;西宮|西宮市|西宮浜
Kurashiki;9m2o7l6kn;倉敷|倉敷市
Ōita;9ibo1k6kn;大分|大分市|おおいた
Fukuyama;9lso6h6kn;福山|福山市
Kanazawa;9roofi6kn;金沢|金沢市|金澤市
Amagasaki;9mgoc66kn;尼崎|尼崎市
Katsushika;9p9ooh6kn;葛飾|葛飾区
Fujisawa;9o7ong6kn;藤沢|藤沢市|藤澤市
Kashiwa;9pmoou6kn;柏|柏市
Machida;9oqond6kn;町田|町田市
Toyota;9ngogz6kn;豊田|丰田市|豊田市
Shinagawa;9jgo5h6kn;品川区
Takamatsu;9ldo8d6km;高松|高松市|たかまつ
Toyama;9ryoh66km;富山|とやま|トヤマ
Yokosuka;9o0onz6km;横須賀|横須賀市|橫須賀市
Nagasaki;9gznws6km;長崎|長崎市|长崎市
Hirakata;9mpoct6km;枚方|枚方市
Gifu;9oeofw6km;岐阜|ぎふし|岐阜市
Toyonaka;9mmocb6km;豊中
Miyazaki;9eoo126km;宮崎|宮崎市|みやざき
Suita;9mkocg6km;吹田|吹田市
Okazaki;9n3oh16km;岡崎|岡崎市
Ichinomiya;9o2og06km;一宮|一宮市
Toyohashi;9mlohm6km;豊橋|豊橋市|豐橋市
Minato;9l2obf6km;湊
Takasaki;9qxom66km;高崎|高崎市
Nagano;9rtoju6km;長野|ながの|ナガノ
Nara-shi;9mdod86km;奈良|ならし|奈良市
Iwaki;9sxorc6km;磐城|いわき|磐城市
Wakayama;9l3obh6km;和歌山|わかやま|ワカヤマ
Kawagoe;9pronh6km;川越|川越市
Takatsuki;9mtocq6km;高槻|高槻市
Shinjuku;9p5oo36km;新宿|新宿区
Koshigaya;9ppoob6km;越谷|越谷市
Ōtsu;9n8odf6km;大津|おおつ|オオツ
Nakano;9p6onz6km;中野|なかの|ナカノ
Tokorozawa;9pgonf6km;所沢|所沢市|所澤市
Asahikawa;ablovg6km;旭川|旭川市
Maebashi;9r4omc6km;前橋|前橋市|まえばし
Kita;9pboo56km;北|北区
Kochi;9j7o6x6km;高知|こうち|コウチ
Kōriyama;9twopy6km;郡山|郡山市
Naha;8ytnqo6km;なは|ナハ|那覇
Kasugai;9nxogh6km;春日井|春日井市
Akita;a0cop86km;秋田|秋田市
Yokkaichi;9n5ofi6km;四日|四日市市
Akashi;9maob16km;明石|明石市
Kurume;9iknyk6km;久留米|久留米市
Toshima;9pcoo66km;豊島|としま|トシマ
Aomori;a3eoqx6km;青森|青森市|あおもり
Fukushima;9uvoq76km;福島|福島市|ふくしま
Morioka;a0aos36km;盛岡|盛岡市|もりおか
Meguro;9ozoo26km;目黒|目黒区
Sumida;9p9ooe6km;墨田
Ibaraki;9mqocl6km;茨木|茨城市|茨木市
Ichihara;9ooop46km;原|市原市
Hakodate;a62oqy6km;函館|函館市
Tsu;9mhof86km;つ|ツ|津
Yao;9m6oco6km;八尾|八尾市
Kakogawachō-honmachi;9mloaj6km;加古川市|加古川町本町
Mito;9qzoq56km;みと|ミト|水戸
Tokushima;9kno9t6km;徳島|徳島市|とくしま
Nagaoka;9u1olp6km;長岡|長岡市
Shimonoseki;9kcnzq6km;下关市|下関市
Fuchū;9p3ong6km;府中
Fukui-shi;9q6oee6km;福井|福井市|ふくいし
Minato City;9p2oo76km;港区
Hiratsuka;9o5on26km;平塚|平塚市
Sōka;9pkooc6km;草加
Yamagata;9w7opx6km;山形|山形市|やまがた
Fuji;9npol86km;富士|富士市
Sasebo;9i5nwd6km;佐世保|佐世保市
Chigasaki;9o6on86km;茅ケ崎|茅ヶ崎|茅崎市
Chōfu;9p2onn6km;調布ヶ丘
Yamato;9ojond6km;大和
Tsukuba;9q8op86km;筑波|つくば|筑波市
Matsumoto;9qnoj96km;松本|松本市
Bunkyo;9opona6km;文京
Hachinohe;a2iot26km;八戸
Neyagawa;9mlocr6km;寝屋川|寝屋川市
Saga;9ibnxy6kl;さが|サガ|佐賀
Shibuya;9p2oo36kl;渋谷|渋谷区
Kasukabe;9pyoo76kl;粕壁|春日部|かすかべ
Ageo;9pxont6kl;上尾|上尾下|上尾市
Takarazuka;9mooc06kl;宝塚|宝塚市|寶塚市
Ōta;9quon56kl;太田|太田市
Minamirinkan;9omonc6kl;南林間
Atsugi;9ogon56kl;厚木|厚木市|厚木町
Arakawa;9paooa6kl;荒川|荒川区
Kure;9l3o496kl;呉|吳市|呉市
Isesaki;9qwomo6kl;伊勢崎|伊勢崎市
Taito;9p7ooa6kl;台東|台東区
Nishi-Tokyo-shi;9p9onm6kl;保谷市|田無市|西東京
Kishiwada;9lroc16kl;岸和田|岸和田市
Matsue;9oko5l6kl;松江|まつえ|マツエ
Nagareyama;9pmoom6kl;流山|流山市
Yachiyo;9paop86kl;八千代|八千代市
Kodaira;9p9onh6kl;小平
Itami;9mmoc46kl;伊丹|伊丹市
Higashihiroshima;9llo4q6kl;東広島
Suzuka;9mwofe6kl;鈴鹿|鈴鹿市
Kamirenjaku;9p5onn6kl;上連雀|かみれんじゃく|カミレンジャク
Kumagaya;9qdon76kl;熊谷|熊谷市
Yamaguchi;9kyo176kl;山口|山口市|やまぐち
Uji;9mxod86kl;宇治|宇治市
Hino;9p3on86kl;日野|日野市
Kofu;9p3okx6kl;甲府|こうふ|コウフ
Numazu;9niolr6kl;沼津|沼津市
Jōetsu;9t7ok06kl;上越|上越市
Odawara;9nyomk6kl;小田原|小田原市
Anjō;9n4ogs6kl;安城|安城市
Tottori-shi;9omo8v6kl;鳥取|鳥取市
Toyokawa;9mqoho6kl;豊川|豊川市|豐川市
Izumi;9lsoc76kl;和泉
Tachikawa;9p7ona6kl;立川
Narashino;9p4op06kl;習志野
Tomakomai;a8gotc6kl;苫小牧|苫小牧市
Hitachi;9rooqp6kl;日立|日立市
Sakura;9p8opj6kl;佐倉|佐倉市
Ube;9kao0l6kl;宇部|宇部市
Kamakura;9o3onn6kl;鎌倉|鎌倉市|镰仓市
Izumo;9o9o4t6kl;出雲|出雲市
Urayasu;9p2oom6kl;浦安市
Imabari;9kno5g6kl;今治
Takaoka;9s3ogm6kl;高岡|高岡市
Nishio;9mvogp6kl;西尾|西尾市
Chūō;9p3ooa6kl;中央区
Hirosaki;a2roq76kl;弘前|弘前市
Kushiro;a9ep116kl;釧路|釧路市
Oyama;9quooc6kl;小山|小山市
Iwata;9meoix6kl;磐田|磐田市
Obihiro;a98oxs6kl;帯広|帯広市|帶廣市
Niiza;9piono6kl;新座|にいざ|ニイザ
Hadano;9o9omq6kl;秦野|秦野市
Ōgaki;9o7ofi6kl;大垣|大垣市
Miyakonojō;9e5o036kl;都城|都城市
Sayama;9plon96kl;狭山|狭山市|狹山市
Matsusaka;9m2ofa6kl;松阪|松坂市
Tochigi;9r2oo56kl;栃木|栃木市
Ueda;9r4ok46kl;上田|上田市
Hitachi-Naka;9r4oqd6kl;ひたちなか|ひたちなか市
Katsuta;9r2oqd6kl
Kawanishi;9mqoc66kl;川西|川西市
Noda;9pvooj6kl;野田|野田市
Kariya;9n6ogi6kl;刈谷|刈谷市
Higashimurayama;9pbonf6kl;東村山|東村山市
Kukichūō;9q7onz6kl;久喜|久喜中央|くきちゅうおう
Musashino;9p7ono6kl;武蔵野|武蔵野市|武藏野市
Shūnan;9koo276kl;周南
Komaki;9o0ogc6kl;小牧|小牧市
Yonago;9ofo6d6kl;米子|米子市
Tama;9p0onf6kl;多摩|多摩市
Iruma;9pion56kl;入間|入間市
Fujieda;9mvok36kl;藤枝|藤枝市
Ashikaga;9qxond6kl;足利|足利市
Kakamigahara;9oeog76kl;各務原|各务原市|各務原市
Tsuchiura;9q9oph6kl;土浦
Kusatsu;9naodp6kl;草津
Moriguchi;9mhocl6kl;守口|守口市
Okinawa;8z6nr06kl;沖縄|沖縄市|沖繩市
Misato, Saitama;9pkook6kl;三郷|三郷市|三鄉市
Fukayachō;9qkomw6kl;深谷町
Asaka;9pgons6kl;朝霞|朝霞市
Shimotoda;9pioo16kl;下戸田|しもとだ|シモトダ
Ishinomaki;9wqosi6kl;石巻|石卷市|石巻市
Kuwana;9ndofn6kl;桑名|桑名市
Yaizu;9mvok86kl;焼津|焼津市|燒津市
Koga;9qioo46kl;古河|古河市
Minoh;9mrocb6kl;箕面|箕面市
Ebina;9oaon86kl;海老名|海老名市
Kisarazu;9oaoop6kl;木更津|きさらづ|キサラヅ
Isahaya;9h8nx86kl;諌早|諫早|諌早市
Inazawa;9nxofy6kl;稲沢|稲沢市|稻澤市
Ebetsu;a9rot76kl;江別|江別市
Ōme;9peoms6kl;青梅|青梅市
Narita;9peops6kk;成田|成田市
Tondabayashichō;9luoco6kk;富田林|富田林市|富田林町
Sandachō;9mwobn6kk;三田町|さんだちょう|サンダチョウ
Fujinomiya;9nuol26kk;富士宮|富士宮市
Zama;9olon76kk;座間|座間市
Ōmuta;9hrnyd6kk;大牟田|大牟田市
Abiko;9pnooy6kk;我孫子|我孫子市
Kadoma;9miocl6kk;門真|門真市
Onomichi;9lmo606kk;尾道|尾道市
Matsubara;9m1ocj6kk;松原
Kokubunji;9p6ong6kk;国分寺|国分寺市|國分寺市
Iwakuni;9kwo3a6kk;岩国|岩国市|岩國市
Ōsaki;9x7orl6kk;大崎|大崎市
Seto;9nvogu6kk;瀬戸|瀨戶市|瀬戸市
Iizuka;9jgnz16kk;飯塚|飯塚市
Koganei;9p6onj6kk;小金井
Tsuruoka;9xkooe6kk;鶴岡|鶴岡市
Uruma;8zanr66kk;うるま|うるま市|宇流麻市
Kashihara-shi;9lvod76kk;橿原|橿原市
Ise;9lsofq6kk;伊勢|伊勢市
Kirishima;9e6nz86kk;霧島
Honmachi;9ganys6kk;本町|八代市|ほんまち
Niihama;9kco6b6kk;新居浜|にいはま|新居浜市
Beppu;9igo1a6kk;別府|別府市
Kashiwara;9lpod56kk
Ikoma;9mcocy6kk;生駒|生駒市
Nobeoka;9gio1r6kk;延岡|延岡市
Daitō;9mfocq6kk;大東|だいとうし
Kitami;aboozp6kk;北見|北見市
Aizu-Wakamatsu;9u5oor6kk;会津若松|会津若松　
Kakegawa;9mloje6kk;掛川|掛川市
Handa;9mwogd6kk;半田|半田市
Sano;9qwonq6kk;佐野|佐野市
Karatsu;9iwnx16kk;唐津|唐津市
Higashikurume;9pbonj6kk;東久留米
Hōfu;9klo1h6kk;防府
Kōnosu;9q7onk6kk;鴻巣|こうのす|コウノス
Nasushiobara;9sqop36kk;那須塩原|那須塩原市|那須鹽原市
Urasoe;8yynqt6kk;浦添
Otaru;a9zoro6kk;小樽|小樽市
Ichinoseki;9y4os16kk;一関|一关市|一関市
Hatsukaichi;9lfo3l6kk;廿日|廿日市市
Akishima;9p8on66kk;昭島|昭島市
Tōkai;9naogb6kk;東海
Hikone;9nxoeh6kk;彦根|彦根市
Nagahama;9oaoej6kk;長浜|長浜市
Fujimino;9pqonk6kk;ふじみ野
Ōshū;9yqos56kk;奥州|奧州|奥州市
Youkaichi;9nkoec6kk;八日市市
Kazo;9qcons6kk;加須|加須市
Kasuga;9j5nye6kk;春日|春日市
Matsutō;9rgofd6kk
Kamagaya;9pdoow6kk;鎌ケ谷
Marugame;9l8o7m6kk;丸亀|丸亀市|丸龜市
Habikino;9lzocn6kk;羽曳野|はびきの|羽曳野市
Kiryū;9r4on16kk;桐生|桐生市
Iwatsuki;9pwoo26kk;岩槻|いわつき|イワツキ
Komatsu;9r4of16kk;小松|小松市
Mishima;9nkolw6kk;三島|三島市
Tajimi;9o4ogx6kk;多治見|多治見市
Inzai;9pjopc6kk;印西|印西市
Ikeda;9mqoc76kk;池田|池田市
Saijō;9k8o5y6kk;西条|西条市|西條市
Toride;9pqop46kk;取手|取手市
Isehara;9ocomz6kk;伊勢原
Chikushino-shi;9j2nyk6kk;筑紫野|筑紫野市
Yono;9poonv6kk;中央区
Tsuyama;9ndo886kk;津山|津山市
Kani;9ocogq6kk;可児|可児市|可兒市
Ōnojō;9j6nyg6kk;大野城|大野城市
Kawachi-Nagano;9loocm6kk;河内長野
Iida;9oooiu6kk;飯田|飯田市
Tokuyama;9klo266kk
Kanoya;9d6nzh6kk;鹿屋|鹿屋市
Chikusei;9qwoou6kk;筑西|筑西市
Sakado;9pwon76kk;坂戸|坂戶市|坂戸市
Sakata;9y4ooi6kk;酒田|酒田市
Izumisano;9lmobw6kk
Ginowan;8yynqw6kk;宜野湾|ぎのわん|宜野湾市
Saku;9qmoko6kk;佐久|佐久市
Itoshima;9j6nxm6kk;糸島
Kōnan;9o5og76kk;江南
Chitose;a8yoth6kk;千歳|千歲市|千歳市
Kameoka;9n8ocm6kk;亀岡|亀岡市|龜岡市
Munakata;9jwnyo6kk;宗像
Shibata;9vfon16kk;新発田|新発田市|新發田市
Muroran;a7korn6kk;室蘭|室蘭市
Shimada;9mqoju6kk;島田|島田市
Kamisu;9pqoqr6kk;神栖|神栖市
Ōmura;9hgnwz6kk;大村|大村市
Yotsukaidō;9p1opd6kk;四街道|四街道市
Kanuma;9rjoo56kk;鹿沼|鹿沼市
Hanamaki;9zeos06kk;花巻|花卷市|花巻市
Sanjō;9uiolz6kk;三条|三条市|三條市
Yonezawa;9vbop86kk;米沢|米沢市|米澤市
Azumino;9qtoj16kk;安曇野
Ashiya;9mhobu6kk;芦屋|芦屋市|蘆屋市
Yashio;9pioog6kk;八潮
Inagi;9ozoni6kk;稲城
Ōbu;9naogf6kk;大府|大府市
Kitakami;9z4os06kk;北上|北上市
Kaizuka;9lpobz6kk;貝塚|貝塚市
Maizuru;9ohobx6kk;舞鶴|舞鶴市|舞鹤市
Sendai;9eenxy6kk;川内|川内市|薩摩川内
Sakai;9qfoeb6kk;坂井
Nisshin;9nmogp6kk;日進|日进市|日進市
Higashi-Matsuyama;9q3ona6kk;東松山
Daisen;9zkoq96kk;大仙|大仙市
Imizu;9s5ogx6kk;射水|射水町|いみずちょう
Mihara;9lko5o6kk;三原|三原市
Kōka;9n6oe86kk;甲賀|甲賀市
Iga;9mkoe56kk;伊賀|伊賀市
Takayama;9qdoh96kk;高山|高山市|たかやま
Fukuroi;9mjoj46kk;袋井|袋井市
Mobara;9ofopq6kk;茂原|もばら|モバラ
Takasago;9mkoaf6kk;高砂
Settsu;9mmoco6kk;摂津|攝津
Gotemba;9o4oly6kk;御殿場
Hamakita;9mooiq6kk;浜北市
Kitanagoya;9nxog86kk;北名古屋
Gyōda;9qeone6kk;行田|行田市
Kashiwazaki;9ttokv6kk;柏崎|柏崎市
Ama;9nqog06kk;あま
Ryūgasaki;9pqope6kk;龍ケ崎|龍崎市|龍ケ崎市
Yokote;9z8oqf6kk;横手|横手町
Moriyama;9nfodq6kk;守山
Sekimachi;9okogc6kk;関
Iwamizawa;aa0ots6kk;岩見沢|岩見沢市|岩見澤市
Komae;9ozonq6kk;狛江
Nakatsu;9jco0f6kk;中津市
Ushiku;9pxop96kk;牛久|牛久市
Chita;9n8og66kk;知多|ちたし|知多市
Wako;9pfonu6kk;和光
Ayase;9ogonb6kk;綾瀬
Higashiyamato;9pcond6kk;東大和|東村山|東大和市
Yamatokōriyama;9m5od56kk;大和郡山
Owariasahi;9ntogn6kk;尾張旭
Amakusa;9g6nxn6kk;天草|天草市役所|あまくさしやくしょ
Echizen;9ppoe96kk;越前
Kimitsu;9o7ooj6kk;君津|きみつ|キミツ
Kamigyō-ku;9nbod46kk
Shikokuchūō;9keo6z6kk;四国中央
Ōmihachiman;9nloe26kk;近江八幡|近江八幡市
Tanashichō;9p9onm6kk;田無町|たなしちょう|タナシチョウ
Akiruno;9p9omr6kk;あきる野
Tatebayashi;9qponl6kk;館林|館林市
Kōtari;9n0ocz6kk;神足
Hannō;9plon06kk;飯能|飯能市
Gamagōri;9mroh76kk;蒲郡|蒲郡市
Kashihara;9m2ocq6kk;柏原
Nakatsugawa;9okohy6kk;中津川|中津川市
Mooka;9r7ooy6kk;真岡|真岡市
Natori-shi;9w1orc6kk;名取
Honjō;9qoomn6kk;本庄|本庄市
Toyooka;9oqoai6kk;豊岡|豊岡市|豐岡市
Kashiba;9lxocz6kk;香芝|香芝市
Kizugawa;9miodc6kk;木津川
Tome;9xjos46kk;登米
Nikkō;9s3onu6kk;日光|日光市
Tsubame;9umolx6kk;燕|燕市
Fukuchiyama;9o2obc6kk;福知山|福知山市
Akihabara;9p6oo96kk;秋葉原
Kunitachi;9p4onc6kk;国立
Nabari;9m6oe06kk;名張|名張市
Tsurusaki;9ido1t6kk;鶴崎
Shiki;9pjonq6kk;志木|志木市
Aira;9e9nyr6kk;姶良
Furukawa;9x5ork6kk;古川市
Kiyose;9peonl6kk;清瀬
Shibukawa;9rcom46kk;渋川|渋川市|澀川市
Yurihonjō;9zfop26kk;由利本荘|由利本荘市|由利本莊市
Takefu;9pqoe96kk;武生市
Warabi;9pioo16kk;蕨
Miki;9mooay6kk;三木|三木市
Kai;9p4okr6kk;甲斐
Okegawa;9q0ono6kk;桶川|桶川市
Katano;9mnocx6kk;交野
Sukagawa;9tkopy6kk;須賀川|須賀川市
Yotsuya;9p5oo46kj;四谷|よつや|ヨツヤ
Jōyō;9msod96kj;城陽
Katori-shi;9pqoqa6kj;香取|佐原市|香取市
Izumiōtsu;9luoc46kj;泉大津
Tatsuno;9mro9q6kj;たつの
Tosu;9ipnyk6kj;鳥栖|鳥栖市
Inuyama;9oaoge6kj;犬山|犬山市
Kyōtanabe;9mood56kj;京田辺
Kasama;9r2opn6kj;笠間|笠間市
Yoshikawa;9ppoog6kj;吉川
Dazaifu;9j3nyk6kj;太宰府|太宰府市|だざいふしやくしょ
Ishioka;9qiopn6kj;石岡|石岡市
Hekinan;9mwogi6kj;碧南|碧南市
Chiryū;9n8ogn6kj;知立|知立市
Ōtawara;9sfooz6kj;大田原|大田原市
Yawata;9mvocy6kj;八幡|八幡市
Minami-Alps;9oyokm6kj;南アルプス
Yukuhashi;9jpnzu6kj;行橋|行橋市
Tenri;9m2odb6kj;天理|天理市
Tanabe;9jpoc16kj;田辺|田辺市|田邊市
Musashimurayama;9paonb6kj;武蔵村山|武蔵村山市|武藏村山市
Uwajima;9iao486kj;宇和島|宇和島市
Maebaru-chūō;9j8nxo6kj;前原中央
Eniwa;a95ota6kj;恵庭
Rittō;9nbods6kj;栗東
Anan;9k8oa16kj;阿南|阿南市
Tsurugashima;9pwon86kj;鶴ヶ島
Yokota;9pbon66kj;横田
Fuefuki;9p0ol46kj;笛吹
Minamiarupusu;9oxokm6kj;南アルプス市
Toyoake;9ncogk6kj;豊明|豊明市
Ōdate;a1voqg6kj;大館|大館市|おおだて
Sōja;9mco7j6kj;総社
Moriya;9ptoow6kj;守谷|守谷市
Itō;9n5omc6kj;伊東|伊東市
Yachimata;9p1ops6kj;八街|八街市
Gion;9lno3z6kj;祇園
Tsuruga;9p1ody6kj;敦賀|敦賀市
Sabae;9pvoea6kj;鯖江|鯖江市
Ina;9pjoj76kj;伊那|伊那市
Hashima;9o5ofo6kj;羽島|羽島市
Kaga;9quoep6kj;加賀
Tamano;9lwo836kj;玉野|玉野市
Tsushima;9npofs6kj;津島
Kiyosu;9nuog36kj;清須|清須市
Shiojiri;9qaoj96kj;塩尻|塩尻市|鹽尻市
Fukutsu;9junyh6kj;福津
Kashima-shi;9pxoqo6kj;鹿島|鹿嶋|鹿島市
Saiki;9hjo2e6kj;佐伯|佐伯市
Chiyoda;9p4oo76kj;千代田区
Kurihara;9xnoro6kj;栗原
Tōgane;9oropx6kj;東金|東金市
Kitamoto;9q3onm6kj;北本|きたもと|キタモト
Niitsu-honchō;9v0omg6kj;新津市|新津本町
Tanabe;9mqod56kj;田辺
Mitoyo;9l1o7b6kj;三豊
Tendō;9wjopx6kj;天童
Gushikawa;8z8nr76kj;具志川|具志川市
Sodegaura;9odooy6kj;袖ケ浦
Hita;9iknzq6kj;日田|日田市
Asahi;9p8oqp6kj;旭|旭市
Tomigusuku;8yrnqo6kj;豊見城
Fujioka;9qpomb6kj;藤岡|藤岡市
Yanagawa;9i5ny86kj;柳川|柳川市
Imaichi;9s0oo06kj;今市市
Tamana;9hjnyp6kj;玉名|たまな|タマナ
Narutochō-mitsuishi;9l0o9x6kj;鳴門|鳴門町三ッ石
Fujiidera;9m1oco6kj;藤井寺
Shimodate;9quoou6kj;下館市
Nago;8zynrj6kj;名護|名護市
Ōjima;9p5oof6kj;大島
Tagajō-shi;9weoro6kj;多賀城
Shiroi;9pgop36kj;白井|白井市
Tanba;9noob46kj;丹波
Asakusa;9p8ooc6kj;浅草|浅草区|あさくさ
Miyoshi;9nhogt6kj;みよし
Kōshi;9hdnza6kj;合志
Yamato-Takada;9lwod36kj;大和高田
Ueno-ebisumachi;9mkoe56kj;上野恵美須町
Hasuda;9pxonx6kj;蓮田|はすだ|ハスダ
Tamba;9npob36kj;丹波市
Mizusawa;9ypos16kj;水沢市
Kuroiso;9spop16kj;黒磯市
Chichibu;9pzomc6kj;秩父|秩父市
Kesennuma;9y2ota6kj;気仙沼|氣仙沼
Hashimoto;9lcocq6kj;橋本|橋本市
Itoman;8ylnqn6kj;糸満|いとまん
Jōsō;9q4oos6kj;常総|常総市
Aisai;9nooft6kj;愛西|愛西市|あいさいし
Towada;a2uos96kj;十和田|十和田市
Yame;9ibnyx6kj;八女
Kinokawa;9l7oc56kj;紀の川|紀の川市|紀之川市
Takaishi;9lwoc76kj;高石
Sanyōonoda;9kjo0c6kj;山陽小野田
Shimotsuke;9r5ooj6kj;下野|下野市
Tahara;9mbohb6kj;田原|田原市
Nagakute;9npogq6kj;長久手
Sennan;9lfobr6kj;泉南
Zushi;9o1onq6kj;ずし|ズシ|逗子
Hyūga;9g2o1o6kj;日向
Uki;9gmnyy6kj;宇城
Kosai;9meoi06kj;湖西
Date;9v2oqa6kj;伊達
Shirakawa;9t4opm6kj;白河
Chikuma;9rhojl6kj;千曲|千曲市
Ogōri;9irnyn6kj;小郡
Minami-Sōma;9ujorm6kj;南相馬
Kitahiroshima;a9eot96kj;北広島|北広島市|北廣島市
Koga;9jpnyf6kj;古賀
Ishikari;aa4osn6kj;石狩|石狩市
Tokoname;9mwog56kj;常滑|常滑市
Hanyū;9qhonl6kj;羽生|羽生市
Toki;9o7oh26kj;土岐|土岐市
Sayama;9lwock6kj;狭山|大阪狭山
Choshi;9p9or76kj;銚子|銚子市
Sakurai;9luodd6kj;桜井|桜井市|櫻井市
Murakami;9w7ong6kj;村上|村上市
Imarichō-kō;9ifnws6kj;伊万里町甲
Kokubu-matsuki;9e5nz96kj;国分|国分松木
Kan’onjichō;9kto796kj;観音寺町
Nonoichi;9rhofi6kj;野々|野々市市
Hamada;9mwo2w6kj;浜田|浜田市|濱田市
Bandō;9q7ooj6kj;坂東
Sakaidechō;9lco7s6kj;坂出|坂出町
Annaka;9qxolu6kj;安中|安中市
Minokamo;9okogm6kj;美濃加茂|美濃加茂市
Mukō;9n5ocy6kj;向日
Nōgata;9jqnz46kj;直方
Fussa;9paon06kj;福生|福生市
Chino;9pzojr6kj;茅野|茅野市
Mizuho;9obofn6kj;瑞穂
Mutsu;a4posa6kj;むつ|むつ市|陸奧市
Kudamatsu;9kho2b6kj;下松
Takizawa;a0kos16kj;滝沢
Minamiuonuma;9t0olr6kj;南魚沼
Hidaka;9pson46kj;日高|日高市
Satte;9q7oo56kj;幸手|さって|サッテ
Shijōnawate;9mhocw6kj;四条畷|四條畷
Miyakojima;8uvnk36kj;宮古島|宮古島市
Hamura;9pcon06kj;羽村
Konan;9n8oe26kj;湖南
Himimachi;9seogj6kj;比美町
Okaya;9q6ojh6kj;岡谷
Suzaka;9rtok86kj;須坂|須坂市
Iwade;9l5obw6kj;岩出
Kurihama;9nvoo26kj;久里浜|くりはま|クリハマ
Arao;9hmnyd6kj;荒尾|あらお|アラオ
Miyoshi;9moo516kj;三次|三次市
Goshogawara;a3coq46kj;五所川原|五所川原市
Nihommatsu;9ueoq36kj;二本松
Inada;9r7oqc6kj
Tōkamachi;9t5olh6kj;十日町|十日町市
Ōami;9ooops6kj
Naka;9q5opd6kj;那珂市
Hatogaya-honchō;9pjoo66kj;鳩ヶ谷本町|はとがやほんちょう|ハトガヤホンチョウ
Yokkaichi;9j6o0t6kj;四日市
Shiogama;9wgorr6kj;塩竃|塩竈
Tomiya;9wnord6kj;富谷市
Hannan;9ldobp6kj;阪南
Kamifukuoka;9pnonj6kj;上福岡|上福岡市|かみふくおか
Noshiro;a1pooz6kj;能代|能代市|能代町
Shiraoka;9q2ony6kj;白岡|しらおか|シラオカ
Kariya;9mjo9b6kj;仮屋
Izumi;9f4ny56kj;出水
Futtsu;9o3ooe6kj;富津|ふっつ|フッツ
Tagawa;9jfnzc6kj;田川|田川市
Sado;9vmokc6kj;佐渡
Miura;9nmonu6kj;三浦|三浦市
Nichinan;9dso0x6kj;日南|日南市
Susono;9npolv6kj;裾野|裾野市|すそのし
Fuchū;9ljo436kj
Miyako;a05oua6kj;宮古|宮古市
Hikari;9kco2j6kj;光|光市
Kyōtango;9oxob46kj;京丹後
Fuchūchō;9m1o646kj;府中|府中町
Yasu;9niodu6kj;野洲
Yūki;9quook6kj;結城|結城市
Ōi;9plonk6kj;大井|おおい|オオイ
Nanao;9sxogh6kj;七尾|七尾市
Asakura;9itnz46kj;朝倉
Midori;9r8omw6kj;綠市|みどり|みどり市
Kasaoka;9lvo6u6kj;笠岡
Katanawa;9j4nya6kj;片縄
Tateyama;9n6ooj6kj;館山|館山市
Arashiyama;9n9ocw6kj;嵐山
Tsukubamirai;9pyoox6kj;筑波未來市|つくばみらい|つくばみらい市
Kameyama;9mtof16kj;亀山
Ryōgoku;9p8opx6kj
Takashimadaira;9pfony6kj;高島平|たかしまだいら|タカシマダイラ
Ogawa;9n5ogh6kj;緒川
Kikuchi;9hmnze6kj;菊池|菊池市
Yamaga;9hqnz16kj;山鹿|やまが|ヤマガ
Suwa;9q4ojn6kj;諏訪|諏訪市
Omitama;9qpopy6kj;小美玉|小美玉市
Chikugo;9i9nyh6kj;筑後
Fujiyoshida;9ogolk6kj;富士吉田市
Ena;9ohohm6kj;恵那|恵那市|惠那市
Takahama;9n0ogi6kj;高浜|高浜市
Tonami;9rqoge6kj;砺波
Hitachi-ota;9rjoqd6kj;常陸太田
Izunokuni;9ncolz6kj;伊豆の国
Kurayoshi;9ofo7q6kj;倉吉|倉吉市
Ami;9q3opg6kj;阿見
Nomimachi;9r5of46kj;能美|能美町
Kikugawa;9meojo6kj;菊川
Gosen;9utoml6kj;五泉
Sanmu;9ozoq26kj;山武|山武市
Kainan;9kvobl6kj;海南|海南市
Nihammatsu;9o9on76kj
Wakasugi;9jdnyl6kj;若杉
Ōamishirasato;9onopv6kj;大網白里
Iwakura;9o0og76kj;岩倉
Nanto;9rfog96kj;南砺|南砺市
Nanto-shi;9rlogb6kj;南砺|南砺市
Takeo;9i7nx66kj;武雄市
Tomioka;9qpolu6kj;富岡|富岡市
Shima;9ldog36kj;志摩|志摩市
Higashine;9wsoq06kj;東根|東根市
Ishigaki;8tmngw6kj;石垣|石垣市|いしがき
Ono;9mtoat6kj;小野|小野市
Sawara;9pooqa6kj;佐原市
Umeki;9dzny66kj
Shido;9lco8p6kj;志度
Inashiki;9pwops6kj;稲敷|稲敷市|稻敷市
Takashima;9ododu6kj;高島|高島市
Numata;9rrom96kj;沼田|沼田市
Hokuto;9pjokg6kj;北杜|北杜市
Nakama;9jynz36kj;中間|中間市
Nankoku;9j9o796kj;南国
Noboribetsu;a7xos66kj;登別|登別市
Shime;9jbnyh6kj;志免
Komoro;9qwokj6kj;小諸|小諸市
Kitakata;9ulooj6kj;喜多方|喜多方市
Hokuto;a66oqn6kj;北斗|北斗市
Hokota;9qfoqc6kj;鉾田|鉾田市
Uozu;9s8oho6kj;魚津|魚津市
Minamiawaji;9l7oae6kj;南あわじ
Obita;9h6nws6kj
Takikawa;aazou76kj;滝川
Masuda;9mbo296kj;益田|益田市
Inabe;9njofd6kj;いなべ|いなべ市
Shinden;9q0onu6kj;新田|しんでん|シンデン
Sakura;9s0oov6kj;さくら
Hagi;9lko126kj;萩|萩市
Sugito;9q3oo56kj;杉戸|すぎと|スギト
Shinshiro;9myohy6kj;新城|新城市
Yuzawa;9ytoqa6kj;湯沢|湯沢市|湯澤市
Onoda;9kgo0e6kj
Otofuke;a9foxs6kj;音更
Kobayashi;9eunzu6kj;小林
Iwanuma;9vuora6kj;岩沼
Nanjō;8ymnqx6kj;南城
Himi;9sdogi6kj;氷見|氷見市
Ogi;9ignxo6kj;小城
Morowa;9niogr6kj;諸輪
Ōkubo-naka;9lkoby6kj;大久保中
Akaiwa;9mpo8a6kj;赤磐
Sagae;9wlopn6kj;寒河江|寒河江市
Taketoyo;9mtogc6kj;武豊町
Maruobara;9miojq6kj;丸尾原
Shimabara;9h2ny56kj;島原|島原市
Okino;9hbnzb6kj;沖野|おきの|オキノ
Nakatogari;9nmolu6kj;中土狩
Unnan;9nwo566kj;雲南
Mitsuke;9u9olx6kj;見附
Ryūō;9p1okq6kj
Nishifukuma;9jtnyf6kj;西福間
Kamaishi;9z4ou36kj;釜石|釜石市
Yatomi;9njoft6kj;弥富
Misawa;a31osr6kj;三沢|みさわ|ミサワ
Maniwa;9njo7g6kj;真庭
Kasai;9n1oal6kj;加西
Nakano;9s3okd6kj;中野
Awaji;9lsoat6kj;淡路
Shimo-tsuma;9qioot6kj;下妻
Iwai;9q5oom6kj
Kōta;9mvoh16kj
Minamishimabara;9grnxv6kj;南島原
Amagi;9iunyx6kj;甘木|甘木市
Sumoto;9leoap6ki;洲本
Kamikoizumi;9qqonb6ki;上小泉
Gujō;9paogg6ki;郡上|郡上市
Kitaibaraki;9s7oqz6ki;北茨城|北茨城市
Hisai-motomachi;9mbof36ki;久居元町
Kurobe-shi;9sioht6ki;黒部|黒部新
Komono;9n8of86ki;菰野
Ibara;9m4o6r6ki;井原|井原市
Shirone;9uwom66ki;白根|白根市
Amami;94unvp6ki;奄美
Naze;94tnvo6ki;名瀬市
Yomitan;8zcnqv6ki;読谷村
Mitsukaidō;9q2oou6ki
Shinjō;9xoopq6ki;新庄
Unzen;9h1nxt6ki;雲仙
Minamiashigara;9o4omf6ki;南足柄|南足柄市
Hondomachi-hondo;9g6nxl6ki;本渡町本渡|ほんどまちほんど|ホンドマチホンド
Kannabechō-yahiro;9m0o6m6ki;神辺町八尋
Itoigawa;9svoix6ki;糸魚川|糸魚川市
Agano;9v4omq6ki;阿賀野
Katō;9n0ob36ki;加東
Ōzu;9j2o476ki;大洲|大洲市
Kanegusuku;8ysnqt6ki;兼城
Toyosu;9p1oob6ki;豊洲
Hirai;9p7oog6ki;平井
Kasumigaura;9qfopl6ki;霞浦市|かすみがうら|かすみがうら市
Sasayama;9nfobm6ki;篠山|篠山市
Tatsunochō-tominaga;9muo9r6ki;龍野町富永
Minawa;9ooon06ki
Umi;9j9nyj6ki;宇美
Morohongō;9puomy6ki
Tamba-Sasayama;9nfobm6ki;丹波篠山市
Aobadai;9oronk6ki;青葉台
Hamanoichi;9e4nz56ki
Mibu;9r6ooc6ki;壬生町
Hitachiomiya;9rkoq06ki;常陸大宮
Ōkawa;9i9ny66ki;大川|大川市
Hasaki;9p9or76ki
Iwase;9qzop66ki;岩瀬町
Bizen;9mno8w6ki;備前
Higashimatsushima;9wpos66ki;東松島|ひがしまつしま|ヒガシマツシマ
Sakuragawa;9qpop86ki;桜川|桜川市|櫻川市
Kaseda-shirakame;9dany06ki;加世田白亀
Ibusuki;9crnyx6ki;指宿|指宿市
Minakuchichō-matoba;9n5oe96ki;水口町的場
Yasugichō;9oeo646ki;安来町
Ōmagari;9zloq86ki;大曲|大曲市
Yoshinogawa;9kko916ki;吉野川
Nishiwaki;9n6oax6ki;西脇
Kuroishi;a2xoqi6ki;黒石|黑石市|黒石市
Miyoshidai;9pjonm6ki;みよし台
Murata;9vwoqw6ki;村田
Maibara;9o4oek6ki;米原|米原市
Kamiiso;a66oqo6ki;上磯町
Hitoyoshi;9finz76ki;人吉|人吉市
Tokai;9rboqg6ki;東海
Mizunami;9o9oh96ki;瑞浪|瑞浪市
Tsubata;9rvofu6ki;津幡
Kanda;9junzu6ki;苅田
Kawanoechō;9kio726ki;川之江町
Uto;9gsnyz6ki;宇土
Katsuragi;9ltocy6ki;葛城|葛城市
Tomobe;9qzopq6ki
Kanekomachi;9r5om46ki;金古町
Hanawa;a1mor36ki;花輪|鹿角市
Kamizawa;9niolz6ki;上沢
Washinomiya;9qaony6ki;鷲宮
Kanie;9nlog06ki;蟹江町
Tamamura;9quomg6ki;玉村町
Sakaiminato;9oqo636ki;境港|境港市
Yaita;9s8oop6ki;矢板|矢板市
Sugai;9mjod86ki;菅井
Usuki;9i0o246ki;臼杵|臼杵市
Komatsushimachō;9kgo9u6ki;小松島|小松島町
Setouchi;9mao8m6ki;瀬戸内
Rifu;9whorm6ki;利府|利府町
Nishishinminato;9s6ogs6ki;西新湊
Miyama;9i0nyi6ki;みやま
Minamibōsō;9nboop6ki;南房総
Abashiri;acap0r6ki;網走|網走市
Sōsa;9p8oqf6ki;匝瑳|匝瑳市
Shisō;9n6o9s6ki;宍粟
Kaminoyama;9vzopn6ki;上山|上山市
Isumi;9nvoq06ki;いすみ|夷隅市|いすみ市
Kami;9j5nz86ki;上
Ōfunato;9yjoto6ki;大船渡|大船渡市
Uwa;9ioo436ki
Funaishikawa;9rboqh6ki;舟石川
Yakami;9kuo9m6ki;矢上
Ōzu;9hcnzj6ki;大津|おおづ|オオヅ
Tamura;9tzoqk6ki;田村|田村市
Iyo;9jro4m6ki;伊予|伊予市
Gero;9pgoh76ki;下呂|下呂市
Nishihara;8yxnqu6ki;西原|西原町|ニシバル
Kaizu;9nsofk6ki;海津
Date;a7zorb6ki;伊達|伊達市
Kahoku;9s4ofr6ki;かほく|河北市|かほく市
Sōma;9uzorh6ki;相馬
Awa;9kpo906ki;阿波
Ojiya;9tmolk6ki;小千谷
Namerikawa;9s4ohk6ki;滑川|滑川市
Okunoya;9qsoq26ki;奥谷
Nakamura;9hmo596ki;中村市
Ōizumi-gakuenchō;9pdonr6ki;大泉学園町|おおいずみがくえんちょう|オオイズミガクエンチョウ
Uonuma;9tgom06ki;魚沼|魚沼市
Kuji;a1nott6ki;久慈
Gotō;9gsntt6ki;五島
Hirara;8uwnk26ki;平良|ひらら|平良市
Ōdachō-ōda;9nro436ki;大田市|大田町大田
Gojō;9lfocy6ki;五條|五條市
Tsuma;9f6o106ki
Katsuren-haebaru;8z5nr76ki;勝連南風原
Atami;9nhom96ki;熱海|熱海市
Miyashiro;9q2oo56ki;宮代
Fusō;9o8ogb6ki
Tōon;9jvo556ki;東温
Wakkanai;ag5otj6ki;稚内|稚內市|稚内市
Hikiso;9lyod26ki;疋相
Mie;9hlo1i6ki
Ono;9pyof56ki;大野
Shōbara;9mto5i6ki;庄原|庄原市
Higashinozoe;9mgoao6ki;東野添
Maruoka;9qfoej6ki;丸岡町
Ikaruga;9mro9u6ki;鵤
Watari;9voor96ki
Yamanashi;9p3ola6ki;山梨
Shiroishi;9vkoqm6ki;白石
Soo;9dxnzv6ki;曽於
Kakuda;9vhor16ki;角田|角田市
Hotaka;9qyoj06ki
Fujishiro;9psop86ki;藤代町
Minamikyushu;9d3nye6ki;南九州
Motosu;9okofn6ki;本巣|本巢市|本巣市
Shingū;9jnnyb6ki;新宮|新宮町
Minamisatsuma;9d7nxw6ki;南さつま
Yorii;9qcomn6ki;寄居
Asakuchi;9lxo746ki;浅口
Yufu;9i8o0y6ki;由布
Kameda-honchō;9v7omf6ki;亀田本町
Shimoda;9hjo5f6ki
Yōkaichiba;9p6oqf6ki;八日市場市
Ōiso;9o4on06ki;大磯
Kuroda;9o7ofy6ki
Nagato;9lio0g6ki;長門|長門市
Shimada;9h0nzb6ki;島田|しまだ|シマダ
Yanai;9kdo306ki;柳井
Haruta;9nmog16ki;春田
Ōharu;9npog26ki
Aki-takata;9mbo4k6ki;安芸高田
Akatsuka;9peonw6ki;赤塚|あかつか|アカツカ
Tawaramoto;9lzod76ki
Yamashita;9j9o7e6ki;山下
Komagane;9p8oj66ki;駒ヶ根|駒根市|駒ヶ根市
Namegata;9q1oqa6ki;行方|行方市
Hizume;9zvos56ki;日詰
Kamogawa;9niop66ki;鴨川
Yamoto;9wros96ki;矢本|やもと|ヤモト
Yawatahama;9iyo3v6ki;八幡浜
Ayabe;9o2obp6ki;綾部|綾部市
Hakonegasaki;9pdon36ki;箱根ケ崎
Katagami;a0soow6ki;潟上
Fushimi;9njolu6ki;伏見
Uekimachi-mōno;9henz16ki;植木町舞尾|うえきまちもうの|ウエキマチモウノ
Hayama;9o0onq6ki;葉山|はやま|ハヤマ
Zentsujichó;9l3o7m6ki;善通寺|善通寺町
Nantan;9njocd6ki;南丹
Takahashi;9mmo766ki;高梁|高梁市
Kōshū;9p8olh6ki;甲州
Kita-Akita;a1oopz6ki;北秋田
Sakai-nakajima;9qromt6ki;境中島
Kaminokawa;9r7ooo6ki;上三川
Nemuro;aacp4e6ki;根室|根室市
Chūō;9ovokq6ki;中央区
Sasaguri;9jenyn6ki;篠栗|篠栗町
Hirado;9ipnvv6ki;平戸|平戶市|平戸市
Omaezaki;9m4ojy6ki;御前崎|御前崎市
Nagai;9vuooz6ki;長井|長井市
Kanzakimachi-kanzaki;9ijny56ki;神埼町神埼
Tsuru;9orolv6ki;都留
Yurigaoka;9k1nyv6ki;百合ヶ丘
Ikegami;9ouoo36ki;池上
Yaese;8ylnqu6ki;八重瀬
Hirakawa;a2roqh6ki;平川|平川市
Tsugaru;a3coq06ki;つがる|津輕市|つがる市
Minase;9mwocv6ki;水無瀬
Izu;9n5olz6ki;伊豆|伊豆市
Niimi;9n6o6r6ki;新見
Ichikikushikino;9e5nxx6ki;いちき串木野
Masaki-chō;9jvo4n6ki;松前町
Takehara;9leo586ki;竹原|竹原市
Nanyō;9voop76ki;南陽
Myoko;9svok26ki;妙高
Ujiie;9rwoot6ki
Iki;9junwc6ki;壱岐
Ishigami;9qpomj6ki
Inami;9mjoar6ki;稲美町
Motomiya;9u7oq06ki;本宮|本宮市
Shibushi;9dgo066ki;志布志|志布志市
Narimasu;9peonv6ki;成増|なります|ナリマス
Kashima;9hznxd6ki;鹿島|鹿島市
Ōtake;9l1o3a6ki;大竹
Tōmi;9r0okc6ki;東御
Togitsu;9h7nwp6ki;時津町
Kimokawa;9mwoc16ki;肝川
Kaitaichi;9lho456ki
Isawa;9p1ol36ki;石和町
Yamaguma;9iunyt6ki;山隈
Nirasaki;9p6okl6ki;韮崎
Obama;9omod36ki;小浜|小浜市|小濱市
Minamata;9finy86ki;水俣|水俁市|水俣市
Machiya;9pbooa6ki;町屋
Saito;9f4o106ki;西都
Hōshakuji;9rroou6ki
Muikamachi;9szols6ki;六日町
Maki;9uvols6ki;真木
Bibai;aacou26ki;美唄|美唄市
Wadayama;9o4oan6ki
Oyabe;9rvog56ki;小矢部
Ogawamachi;9q5omv6ki;おがわ|オガワ|小川町
Sumiyoshi;9mjok16ki;住吉
Matsubushi;9psood6ki;松伏|松伏町
Yoshioka;9wsorc6ki;吉岡
Makuhari;9p1op16ki;幕張
Tanuma;9r1onq6ki;田沼町
Sue;9jbnyi6ki;須恵|須恵町
Hiji;9ipo1d6ki;日出|日出町
Honchō;a6doqt6ki;本町|ほんちょう|ホンチョウ
Tainai;9vqon96ki;胎内
Tsushima;9l1nv56ki;対馬|対馬市|對馬市
Horikiri;9pboof6ki;堀切
Agui;9n1ogb6ki;阿久比
Aioi;9moo9j6ki;相生|相生市|あいおいし
Fukiage-fujimi;9qaond6ki;吹上町|吹上富士見
Higashikagawa;9l1o966ki;東かがわ
Chatan;8z3nqx6ki;北谷
Hiratachō;9ofo4y6ki;平田町
Ōuda-yamaguchi;9lqodn6ki;宇陀|大宇陀山口
Miyaodai;9k1nz36ki;宮尾台
Yahaba;a01os36ki;矢巾町
Mima;9klo8m6ki;美馬
Kitsuki;9iuo1m6ki;杵築
Hōjō;9keo4u6ki;北条市
Ukiha;9ionz76ki;うきは
Aoto;9pbooh6ki;青戸
Toyoshina;9quoj26ki
Kurihashi;9qdoo26ki;栗橋町
Takahagi;9s0oqw6ki;高萩|高萩市
Menuma;9qmon66ki;妻沼|妻沼町
Itako;9ptoqf6ki;潮来|潮來市|潮来市
Ōmiya;9rjoq26ki
Hōryūji;9m5od26ki;斑鳩町|法隆寺
Ninomiya;9o2omu6ki;二宮
Ōmachi;9reoiz6ki;大町|大町市
Awara;9qmoeb6ki;あわら|蘆原市|あわら市
Shingū;9jpodq6ki;新宮|新宮市
Arai;9ssojz6ki;新井
Tarui;9o9of96ki;垂井町
Yamagata;9okofx6ki;山県|山県市
Nayoro;ad7ovq6ki;名寄|名寄市
Minami-ōi;9ovoo56ki;南大井
Kachidoki;9p2oo96ki;勝どき
Katsuyama;9q6of66ki;勝山|勝山市
Aso;9hio046ki;阿蘇|阿蘇市
Buzen;9jdo096ki;豊前
Takada;9o2ofd6ki;高田
Hiragi;9l7o8l6ki;平木
Funabori;9p4ooj6ki;船堀
Arida;9koobc6ki;有田
Fukuechō;9guntx6ki;福江町|ふくえちょう|フクエチョウ
Makubetsu;ag1oty6ki;幕別町
Mukai-awagasaki;9rrofk6ki;向粟崎
Fujikawaguchiko;9olol96ki;富士河口湖町
Gose;9lpod16ki;御所|御所市
Tosayamadachō-nakano;9jco7c6ki;土佐山田町中野
Rumoi;ac1otg6ki;留萌|留萌市
Miyawaka;9jonyw6ki;宮若
Saikai;9hmnw86ki;西海
Kunisaki;9j7o1x6ki;国東
Susaki;9iro696ki;須崎|須崎市
Ōno-hara;9l8o3f6ki;大野原
Matsubase;9gpnyz6ki;松原|まつばせ|マツバセ
Fukagawa;abfouk6ki;深川|深川市
Innoshima;9l8o5y6ki;因島市
Hikarigaoka;9pconv6ki;光が丘|ひかりがおか|ヒカリガオカ
Tōno;9z8ot56ki;遠野|遠野市
Mashiko;9rbop66ki;益子
Kamo;9umom86ki;加茂
Hayashino;9n8o8n6ki;林野
Sagara;9mdojw6ki;相良|相良町
Ginan;9obofy6ki
Shimo-furano;aafovi6ki
Tōyō;9p3ood6ki;東陽
Semboku;a0boqz6ki;仙北
Ureshinomachi-shimojuku;9hznx46ki;嬉野町下宿
Tōin;9nhofg6ki;東員町
Sarubetsu;a93oy66ki;猿別|さるべつ|サルベツ
Omigawa;9ploqm6ki;小見川町
Kushikino;9e4nxv6ki;串木野市
Tosa;9j2o6o6ki;土佐
Narutō;9owoq26ki;成東町
Noborito;9oyono6ki;登戶|登戸
Yoshii;9qpom26ki
Ogikubo;9p6onu6ki;荻窪|おぎくぼ|オギクボ
Mochibaru;9e8o096ki;餅原
Sakuradai;9paony6ki;桜台|さくらだい|サクラダイ
Ōwa;9qkonh6ki;大輪
Ninohe;a1xosj6ki;二戸
Nakatsukuma;9iknyc6ki;中津隈
Yoshida-kasugachō;9uools6ki;吉田春日町
Kamimaruko;9qwok36ki;上丸子
Itogawa;9kjobp6ki;糸川
Ijūin;9duny86ki
Oga;a0rooh6ki;男鹿|男鹿市
Enzan;9p6old6ki;塩山市
Yamazakichō-nakabirose;9n8o9r6ki;山崎町中広瀬
Akune;9eynxo6ki;阿久根
Hachimantai;a0uos16ki;八幡平|八幡平市
Ishii;9kno9g6ki;石井|石井町
Nyūzen;9smohy6ki;入膳
Kinoshita;9pqojb6ki
Itsukaichi;9p9omq6ki;五日市町
Ishige;9qcoot6ki;石下町
Nogi;9qnoo56ki;野木
Nasukarasuyama;9rtopc6ki;那須烏山|那須烏山市
Gohyakkoku;9ruohg6ki;五百石
Wajima;9twoga6ki;輪島|輪島市|輪島崎町
Etajima;9l4o406ki;江田島
Ōyanomachi-noboritate;9gknyb6ki;大矢野町登立|おおやのまちのぼりたて|オオヤノマチノボリタテ
Hakui;9sgofy6ki;羽咋
Hobaramachi;9v2oqf6ki;保原町
Isa;9f3nyt6ki;伊佐
Kamojimachō-jōgejima;9kno976ki;鴨島町上下島|かもじまちょうじょうげじま|カモジマチョウジョウゲジマ
Asagayakita;9p7onw6ki;阿佐谷北
Nishinippori;9p9oo96ki;西日暮里
Ōguchi;9o6ogb6ki
Hitokawame;a2wosw6ki;一川目|ひとかわめ|ヒトカワメ
Sakai;9qaooc6ki;境町
Yoyogi;9p4oo16ki;代々木
Oji;9m4ocy6ki;王寺
Ukima;9pfoo26ki;浮間|うきま|ウキマ
Nakashibetsu;aazp2p6ki;中標津|中標津町
Gōtsuchō;9n9o3b6ki;江津|江津町
Kogota-ekimae;9x1orv6ki;藤ケ崎
Setakamachi-takayanagi;9i3nyf6ki;瀬高町高柳
Ōtsuki;9oyom16ki;大月|大月市
Ishiki;9moogm6ki
Nasu;9swop56ki
Kitahama;9npodk6ki
Ōji;9pcoo66kh;王子
Tadotsu;9l8o7j6kh;多度津町
Ōkawara;9vpoqx6kh
Ikedachō;9kjo7p6kh;池田町
Matsuura;9imnwa6kh;松浦|松浦市
Funehikimachi-funehiki;9u1oqi6kh;船引町|船引町船引
Ogōri-shimogō;9kqo106kh;小郡下郷
Gobō;9k4obh6kh;御坊|御坊市
Mikuni;9qloe76kh
Nikaho;9z3ooq6kh;にかほ|にかほ市|仁賀保市
Yugawara;9nnomb6kh;湯河原町
Sobue;9nxofs6kh
Takahata;9vkopf6kh;高畠|高畠町
Ikeno;9ofofe6kh;池野
Shirahama;9jkobz6kh;白浜町
Mine;9kzo0i6kh;美祢
Tatsuno-kita;9m4ocx6kh;立野北
Shirahamachō-usazakiminami;9mmoa86kh;白浜町宇佐崎南
Uenohara;9oyomg6kh;上野原|上野原市
Bungo-Takada-shi;9j8o156kh;高田|豊後高田|豊後高田市
Tochio-honchō;9u4om46kh;栃尾本町
Kajiki;9e5nyz6kh;加治木町
Mombetsu;ad7oy76kh;紋別
Motomachi;abrp0a6kh;元町|もとまち|モトマチ
Kamata;9osoo46kh;蒲田
Kumano;9ldo496kh
Kanmaki;9m0ocz6kh;上牧|上牧町
Takabō;9kto9p6kh;高坊
Tennō;a0uoot6kh;天王
Takanawa;9ozoo56kh;高輪
Takinomiya;9l5o806kh;滝宮
Furukawa;9qnoh26kh;飛騨|飛騨市
Hida;9qooh16kh;飛騨
Murayama;9wvoq16kh;村山
Kaminoma;9mpog66kh;上野間
Saikū;9lxofj6kh;斎宮
Shizunai-furukawachō;a7lovh6kh;静内古川町
Ōkuchi-shinohara;9f3nyu6kh;大口篠原|おおくちしのはら|オオクチシノハラ
Ishikawa;8zenr26kh;石川|石川市
Kasamatsuchō;9o9ofx6kh;笠松町
Yatsuomachi-higashikumisaka;9rlogx6kh;八尾町東葛坂
Yabu;9ocoad6kh;養父|養父市
Nakagusuku;8yxnqy6kh;中城
Shōbu;9q7ons6kh;菖蒲|しょうぶ|ショウブ
Ino;9j7o6n6kh;いの町
Kushima;9dho0k6kh;串間|串間市
Yokoshiba;9p1oq86kh;横芝|横芝町
Kozakai-chō;9moohk6kh;小坂井町|こざかいちょう
Higashigō;9i7nxi6kh;東郷
Tsurugi-asahimachi;9r9ofj6kh;鶴来朝日町
Kurono;9ojofj6kh;黒野
Makurazaki;9cvny06kh;枕崎
Naka-niida;9x5or96kh
Toyohama;9mfogd6kh;豊浜
Ōizumimachi;9pcons6kh;大泉町|おおいずみまち|オオイズミマチ
Nishiarai;9peooa6kh;西新井
Namie;9u4oro6kh
Ogura;9raom46kh;小倉
Shibetsu;abap356kh;标津|標津
Ōyama;9m4ojy6kh;大山
Tsukumiura;9hwo2b6kh;津久見|津久見浦
Yashiro;9n0oax6kh
Kodamachō-kodamaminami;9qiomh6kh;児玉町児玉南
Shimoda;9mcoly6kh;下田|下田市
Akaike;9jlnz96kh;赤池
Sugita;9oaonu6kh;杉田|すぎた|スギタ
Ōmamachō-ōmama;9r7omw6kh;大間々町大間々
Ebara;9oxoo26kh;荏原
Tanushimarumachi-toyoki;9innz06kh;田主丸町豊城
Hino;9n8oeh6kh;日野町
Furano;aafovi6kh;富良野|富良野市
Shin’ichi;9m0o676kh;新市
Yachiyo;9qiool6kh;八千代町
Shonai;9xxoom6kh;庄内町
Ichinoe;9p5ook6kh;一之江
Shōwa;9ozoku6kh;昭和町
Sendagi;9p9oo86kh;千駄木
Echigawa;9npoec6kh;愛知川
Kisai;9qaonq6kh;騎西
Kamiichi;9ryohl6kh;上市町
Obanazawa;9x8oq06kh;尾花沢|尾花沢市|尾花澤市
Kumakura;9t7opd6kh;熊倉
Yanagawamachi-saiwaichō;9v5oqk6kh;梁川町幸町
Edosaki;9pvops6kh;江戸崎町
Mino;9opogc6kh;美濃
Shisui;9p8opn6kh;酒々井
Namioka;a33oqj6kh;浪岡|浪岡町|なみおか
Takanosu;a1qopx6kh;鷹巣|鷹巣町
Haramachi;9jto4v6kh;原町
Miyata;9jnnyx6kh;宮田|宮田町
Suibara;9v5omr6kh;水原
Takedamachi;9hlo106kh
Kanaya;9mqojp6kh;金谷|金谷町
Tsuruda;9ernyg6kh;鶴田
Ōhara;9nxopz6kh;大原|おおはら|オオハラ
Takanabe;9f9o1a6kh;高鍋町
Shiozawa;9swolp6kh;塩沢|塩沢町
Ajiki;9pjopj6kh;安食
Iiyama;9sdokd6kh;飯山
Sunagawa;aatou76kh;砂川|砂川市
Yotsutsuji;9opoba6kh;四辻
Shimosuwa;9q7ojk6kh
Karuizawa;9qzol36kh;軽井沢
Sueyoshichō-ninokata;9dxnzy6kh;末吉町二之方
Hirokawa;9icnyn6kh
Ikebukuro;9paoo36kh;池袋
Minamishibetsuchō;acnovh6kh;士別市|南士別町|みなみしべつちょう
Kogota;9x3ort6kh;小牛田町
Nukui;9paonv6kh;貫井|ぬくい|ヌクイ
Yamata;9q8on56kh;山田
Muramatsu;9upoml6kh;村松|村松町
Yonabaru;8ysnqv6kh;与那原|与那原町
Wakabayashi;9p1ony6kh;若林
Mishōhirajō;9hko496kh;御荘平城
Fukumitsu;9rkog76kh;福光
Ibi;9okofd6kh
Igusa;9pxonf6kh;伊草
Nishitawara;9n4oad6kh;西田原
Gōdo;9oeofg6kh;神戸町
Makabe;9qrop66kh;真壁町
Sukumo;9hho4p6kh;宿毛|宿毛市
Kajiya;9nfoas6kh
Engaru;acdoyr6kh;向遠軽|むかいえんがる|ムカイエンガル
Asagaya-minami;9p6onw6kh;阿佐ヶ谷|阿佐谷南|あさがやみなみ
Tarumizu;9dgnz26kh;垂水
Ashibetsu;aavouz6kh;芦別|芦別市|蘆別市
Ōtsuka;9p8oo56kh;大塚
Aizu-misato Machi;9txood6kh;会津美里町|あいづみさとまち
Arita;9i6nwu6kh;有田町
Yoichi;aa0or16kh;港町|余市町
Iijima;9q9oes6kh;飯島
Den’enchōfu;9owonz6kh;田園調布
Tatsuno;9pyojc6kh;辰野|辰野町
Shimokizukuri;a3eopy6kh;下木造|木造町|しもきづくり
Miyako;9jmnzo6kh
Ishikawa;9t7oq56kh;石川町
Takenotsuka;9pfooc6kh;竹の塚
Koga;9k2nz16kh;古賀
Fukura;9l6oa86kh;福良
Utazu;9lao7q6kh;宇多津町
Sugamo;9p9oo56kh;巣鴨|すがも|スガモ
Oshima;9srofx6kh;大島
Rokugō;9zioqf6kh;六郷
Oyama;9o8om46kh;小山|小山町
Karasuyama;9rtopb6kh
Haibara-akanedai;9lxodn6kh;榛原あかね台
Kamogatachō-kamogata;9lyo736kh;鴨方町鴨方
Kitagata;9ofofo6kh;北方|北方町
Honjō;9euo0t6kh
Hasune;9peoo06kh;蓮根|はすね|ハスネ
Minakami;9rxom36kh;月夜野|月夜野町
Tsukawaki;9igo0c6kh;塚脇
Mitake;9oeogx6kh;御嵩|御嵩町
Fujioka;9qponx6kh;藤岡町
Kanaishima;9o6omg6kh;金井島
Mori;9mroj56kh;森|森町
Taku;9ignxf6kh;多久
Yono;9n0oce6kh;余野
Shimoigusa;9p8onu6kh;下井草|しもいぐさ|シモイグサ
Rikuzen-Takata;9yeoth6kh;陸前高田
Nagasaki;9p9oo16kh;長崎|ながさき|ナガサキ
Ōgushi;9q2onf6kh;大串
Shōbudahama;9wcoru6kh;菖蒲田浜
Ishitsuka;9rcopy6kh;石塚
Memuro-minami;a97oxc6kh;芽室南
Fuki;9m7ocy6kh;福貴
Kanamachi;9pdooj6kh;金町
Kishaba;8z2nqz6kh;喜舎場
Tsuha;902nrt6kh;津波
Kawage;9moofb6kh
Ranzan;9q6on06kh;嵐山|嵐山町
Shibetsu;acpovk6kh;士別
Anamizu;9tfoga6kh;穴水町
Nishinoomote;9bdnzw6kh;西之表|西之表市
Yae;9mco456kh
Shiraoi;a87osn6kh;白老町
Toba;9lsog46kh;鳥羽|鳥羽市
Akitsu;9pdonh6kh;秋津|秋津町
Azamino;9otonm6kh;あざみ野
Wakimachi;9kno8n6kh;脇町
Yachi;9wqopr6kh;谷地
Ebino;9f1nzg6kh;えびの
Akasaka;9p3oo56kh;赤坂|あかさか|アカサカ
Muroto-misakicho;9iho8p6kh;室戸市|室戸岬町
Komagome;9paoo66kh;駒込|こまごめ|コマゴメ
Kadogawa;9g7o1p6kh;門川町
Kamigotō;9hmnuk6kh
Miharu;9tzoq86kh
Aoi;9pdooe6kh;青井
Shioiri;9kwo7t6kh;塩入
Kawasaki;9jcnzd6kh;川崎|川崎町
Yabuki;9tcops6kh;矢吹|矢吹町
Igusa;9p9onu6kh;井草
Sonobe;9iunyi6kh;園部
Tsuiki;9jjo006kh;築城
Kamiōi;9o4omk6kh;上大井
Sashiōgi;9pronq6kh;指扇|さしおうぎ|サシオウギ
Minaminagareyama;9pkoom6kh;南流山
Takatsukadai;9m2od16kh;高塚台
Miyazu;9oqobk6kh;宮津|宮津市
Arai;9mcoi56kh
Iwai;9pbomr6kh
Katsuura;9nnops6kh;勝浦|勝浦市|かつうら
Owase;9knoec6kh;尾鷲
Mifune;9gwnze6kh;御船|御船町
Nanaku;a28osf6kh;七区|ななく|ナナク
Sasazuka;9p4onz6kh;笹塚|ささづか|ササヅカ
Togoshi;9oxoo46kh;戸越
Shimobuchi;9ljod76kh;下渕
Isogo;9odonu6kh;磯子|いそご|イソゴ
Tōbetsu;aa2ot46kh;当別町
Ushibukamachi;9fgnx66kh;牛深市|牛深町|うしぶかまち
Minamichita;9mcogl6kh;南知多町
Saginomiya;9p8onw6kh;鷺宮|さぎのみや|サギノミヤ
Tadaoka-higashi;9ltoc46kh;忠岡東
Shintomi;9f2o196kh;新富
Hitoto;9sroga6kh;一青
Sekimachi-minami;9p8onq6kh;関町南|せきまちみなみ|セキマチミナミ
Toyota;a37osd6kh;豊田|とよた|トヨタ
Aki;9j2o7y6kh;安芸|安芸市|安藝市
Yabase;9omo7c6kh;八橋
Matsushima;9wloru6kh;松島|まつしま|マツシマ
Ryōtsu-minato;9vsokk6kh;両津湊
Shuzenji;9n5olw6kh;修善寺|修善寺町
Ishinari;9iony86kh;石動
Ōkubo;9p6oo26kh;大久保|おおくぼ|オオクボ
Shizukuishi;a09orm6kh;雫石
Kushimoto;9izod66kh;串本町
Kumano;9k6oe46kh;熊野|熊野市
Nagasu;9hhnyc6kh;長洲|ながす|ナガス
Kamiya;9pdoo56kh;神谷
Kasumi;9ozo9z6kh
Matsuzaki;9ojo7y6kh;松崎
Hakurōmachi;a2kosj6kh;博労町|はくろうまち|ハクロウマチ
Nakaiburi;9laoch6kh;中飯降
Oyamazaki;9mxocw6kh;下山
Kōge;9odo8x6kh;久能寺
Nakanobu;9owoo36kh;中延
Sayō;9n8o986kh;佐用|佐用町
Inokashira;9p5onq6kh;井の頭
Yakumo;a7dopn6kh;八雲町
Yōga;9ozonw6kh;用賀
Kutchan;a96oqy6kh
Minamiminowa;9pnoja6kh;南箕輪村
Ōarai;9qvoqi6kh;大洗町
Kamiigusa;9p8ont6kh;上井草|かみいぐさ|カミイグサ
Wakuya;9x2os16kh;涌谷|涌谷町
Daigo;9s5opv6kh;大子
Ōgi;9pdoo96kh;扇
Eifuku;9p4onw6kh;永福|えいふく|エイフク
Kanō;9ltocs6kh;加納
Ushitsu;9tnogz6kh;宇出津
Sashiki;9fqnyi6kh;佐敷|さしき|サシキ
Toyoyama;9nxogb6kh
Sakai;9p7onm6kh;境|さかい|サカイ
Shimo’ochiai;9p8oo26kh;下落合
Kanegasaki;9ywos06kh;金ケ崎町
Nakanojō;9rnolo6kh;中之条町
Tachiarai;9isnyu6kh;大刀洗町
Miyota;9qyokr6kh;御代田
Higashigotanda;9ozoo56kh;五反田|東五反田
Toneri;9phoo96kh;舎人
Kamigōri;9mvo986kh;上郡|上郡町
Kawaminami;9feo1c6kh;川南
Mikuriya;9ono6u6kh;御来屋
Fukawa;9plopb6kh;布川
Uchiko;9j7o4h6kh;内子
Moritake;a1eop46kh;森岳
Sayama;9mwod36kh;佐山
Asso;9jmoc66kh;朝来
Ogawa;9s3op96kh;小川|小川町
Yamada;9znoub6kh;山田|山田町
Minami-aoyama;9p2oo46kh;南青山|みなみあおやま|ミナミアオヤマ
Kōzan;9m2o5l6kh
Toyoda;9naofn6kh;豊田
Ebisu;9p1oo46kh;恵比寿
Ōno;a1xotf6kh;大野村
Inokura;9jwnz06kh;猪倉
Bange;9ucooe6kh;坂下
Tamaru;9lsofj6kh;田丸
Sakaki;9rboju6kh;坂城|坂城町
=KE
Nairobi;6uggqa16r;內羅比|内罗毕|奈洛比|ナイロビ|나이로비|نيروبي|نیروبی|नैरोबी|ไนโรบี|Nairoba|Nairoby|Nairovi|Najrobi|Najrobo|Nayrobi|Nayropi|Nayrubi|Nairobia|Nairobis|Nairompi|Najrobio|Nayroobi|Nai-lok-pi|Najrobi osh|Nayiiroobii|Найроби|Найробі
Kakamega;6ysgkj16p;卡卡梅加|Kakamege|Какамега|Какамеге|کاکامگا، کنیا
Mombasa;6mrgy616o;蒙巴萨|몸바사|モンバサ|Mvita|Mambasa|Mombaca|Mombaso|Mompasa|Mombaaso|Mombassa|ممباسا|مومباسا|Мамбаса|Момбаса|मोम्बासा
Nakuru;6x5go716n
Ruiru;6utgqo16n
Eldoret;6zgglz16n
Kisumu;6xqgkk16m
Kikuyu;6ujgpu16m
Thika;6v5gqz16m
Naivasha;6w1gp716l
Karuri;6uqgq416l
Karuri;6w2gra16l
Matuga;6mfgxx16l
Mwala;6u9gs116l
Lang'ata;6u7gq116l
Ongata Rongai;6u4gq416l
Jomvu;6mxgy116l
Garissa;6wrgy516l
Kitale;70ugl916l
Limuru;6uxgps16l
Juja;6uygqt16l
Kitengela;6twgqo16l
Kiambu;6urgqc16l
Mlolongo;6u4gqm16l
Malindi;6p2gzg16k
Mandera;78yh4a16k
Khwisero;6yhgk316k
Kisii;6w4gkl16k
Ngong;6u9gpv16k
Mtwapa;6n2gyf16k
Wajir;72vgza16k
Lodwar;76ogmw16k
Athi River;6tygqq16k
Meru;6y5gsm16k
Nyeri;6wugqn16k
Isiolo;6yzgse16k
Ukunda;6m3gxw16k
Kiserian;6u1gpx16k
Kilifi;6nxgyp16j
Nanyuki;6y1gqz16j
Busia;6zagir16j
Migori;6v2gjr16j
Bungoma;6zkgk016j
Narok;6v0gnn16j
Embu;6wigs216j
Machakos;6tsgrj16j
Githunguri;6v2gq616j
Githunguri;6uegqr16j
El Wak;75th1p16j
Gilgil;6wmgow16j
Upper Gilgil;6xfgor16j
Mbale;6y8gkg16j
Kimilili;707gkg16j
Kapenguria;71gglj16j
Kericho;6wzgm016j
Voi;6okgv416j
Imara Daima Estate;6ucgqg16j
Wanguru;6w4grs16j
Habaswein;70ugxp16j
Molo;6xbgn916j
Moyale;77tgwi16j
Ol Kalou;6x9gp216j
Mumias;6yxgjt16j
Homa Bay;6wjgjq16j
Kenol;6vegr416j
Kinoi;6tegrt16j
Masalani;6tbgzl16j
Murang’a;6w0gr716j
Webuye;6zogkl16j
Njoro;6x3gnu16j
Iten;6zvgmn16i
Kapsabet;6ykgli16i
Lugulu;6z3gja16i
Tetu;6wtgqk16i
Nyahururu;6y4gp016i
Marsabit;74hgtj16i
Ramu;78xh2i16i
Siaya;6y6gj916i
Mariakani;6nagxn16i
Maralal;712gpy16i
Mairo Inya;6y3gp516i
Rongai;6xjgnm16i
Kerugoya;6wmgrk16i
Pumwani;6uggqd16i
Kitui;6u7gtl16i
Makutano;71igli16i
Elburgon;6x6gnh16i
Watamu;6opgz616i
Lamu;6rph1m16i
Kajiado;6svgq616i
Kabarnet;6zdgna16i
Nyamira;6wggl216i
Isebania;6ulgjq16i
Karatina;6wogr516h
Kakuma;78bgku16h
Lafey;76rh2f16h
Bondo;6xqgj716h
Chuka;6x3gsl16h
Kihancha;6upgk616h
Maua;6yngte16h
Taveta;6okgso16h
Takaba;77cgzq16h
Eldama Ravine;6y5gn916h
Hola;6twgz716h
Maai Mahiu;6v9gpn16h
Mai;6vagpn16h
Rongo;6vwgk416h
Makueni Boma;6t0gsi16h
Ogembo;6vsgkh16h
Oyugis;6wlgkh16h
Wote;6t2gsj16h
Emali;6s8gs316h
Garba Tula;6zhgv016h
Mwingi;6vegtq16h
Awendo;6vhgjx16h
Awendo;6wmgjk16h
Kiminini;70hgl016h
Moi‘s Bridge;70fglk16h
Mazeras;6n0gxv16h
Malaba;6zsgj816h
Muhoroni;6xkgls16h
Makindu;6rogt216h
Thomas Magena home;6vvgkj160
=KG
Bishkek;a93jn751o;Бишкек|Бишкек ош
Osh;a2lji851m;Ош|Өш|Өsh
Manas;a3qjir51k;Манас|Жалалабат|Жалал-Абад
Karakol;a81jxr51k;Каракол|Харгол|Пржевальск
Tokmok;a90jp651j;Токмок|Токмак
Uzgen;a39jjm51j;Узген|Өзген
Kara-Balta;a8xjl551j;Кара-Балта
Balykchy;a7yjrn51j;Балыкчы|Балыкчи|Балыкчы шаары
Naryn;a53jr451i;Нарын
Bazar-Korgon;a40ji351i;Базар-Коргон
Talas;a84jgo51i;Талас
Razzakov;a0oj9551i;Раззаков|Ісфана|Исфана
Kyzyl-Kyya;a1ujgd51i;Кызыл-Кыя|Кызыл-Кия
Suzak;a3mjii51i;Сузак
Batken;a1ajcq51i;Баткен
Kara-Kul’;a5njhv51i;Кара-Куль
Kara Suu;a32jif51i;Кара Суу|Кара-Суу
Iradan;a1vjga51i;Ирадан
Tash-Kumyr;a4vjgm51h;Таш-Кумыр
Belovodskoye;a8zjlv51h;Беловодское
Kant;a95jnx51h;Кант
Lebedinovka;a94jng51h;Лебединовка
Toktogul;a6bjim51h;Токтогул
Massy;a42jhr51h;Массы|Ленин-Джол
Nookat;a1vjhq51h
Ivanovka;a95jok51h;Ивановка
Kochkor-Ata;a40jhc51h;Кочкор-Ата|Кучкар-Ата
Kara-Kulja;a2vjkf51h;Кара-Кульджа
Ala-Buka;a51jel51h;Ала-Бука
Kyzyl-Suu;a7mjwp51h;Кызыл-Суу|Покровка
Suluktu;a0yj9951h;Сулюкта
=KH
Phnom Penh;7u4lzg63p;金边|프놈펜|プノンペン|พนมเปญ|พนมเปณ|Nam Van|Nom Pen|Pnompen|Nam-Vang|Phnompen|Pnampen'|Pnom Pen|Pnompena|Pnompeno|Phnom Pen|Phnompenh|Phon Phen|Pnom Pene|Pnom Penh|Pnompenis|Phnum Penh|Phnum Peny|Pnom Pehn'|Pnom Pen'ch|Krong Chaktomuk|فنوم پن|پنوم پن|Пнампень|Пном Пен|नामपेन्ह|पनॉम पेन
Takeo;7sjlz263o
Siem Reap;7z4lwi63l
Battambang;7yeluo63k
Paoy Paet;7zylsw63k
Dangkao;7tzlzd63k
Kampong Chhnang;7w1lyr63k
Sihanoukville;7rhlvl63j
Preaek Prasab;7wbm2k63j
Kampong Cham;7vbm0y63j
Anlong Veaeng;81jlx463j
Pursat;7wulwo63j
Ta Khmau;7twlzj63j
Phumĭ Yoŭl Toŭng;7tclyy63j
Phumĭ Véal Srê;7silz263j
Bavet;7sqm2u63j
Kep;7r4lxs63i
Kandoeng;7tdlz863i
Kampong Speu;7ttlyc63i
Koh Kong;7ualu263i
Prey Veng;7txm0l63i
Suong;7v3m1i63i
Smach Mean Chey;7u3lu863i
Phumĭ Véal Tônsay;7uilyi63i
Stung Treng;7zlm2d63i
Boeng Kak Pir;7u5lzd63i
Tbeng Meanchey;80dlzm63i
Svay Rieng;7stm1w63i
Sisophon;7zrlu163h
Chrang Chamreh Muoy;7ublzd63h
Dar;7urm2p63h
Kampot;7rhlxe63h
Phumĭ Tnaôt;7xzlyh63h
Kratié;7wpm2i63h
Kampong Thom;7xblzd63h
Lumphat;7zhm5663h
Samraong;81elvk63h
Pailin;7xplt163h
Mémót;7uvm2y63h
Banlung;806m5763h
Phum Ânlŭng Vĭl;7yclus63h
Snuol;7vjm3m63h
Yeang;7znlvt63h
Phumĭ Âmpĭl Leu;7vdm0v63h
Ângk Tasaôm;7sllyr63h
Ou Bei Choan;809lte63h
=KI
Tarawa;71pr8i9ti
=KM
Moroni;61ih8690j
Moutsamoudou;607hbc90i
Fomboni;5zvh9i90h
=KN
Basseterre;8a291s4ag
=KP
Pyongyang;9yfnlb65q;平壌|平壤|平壤市|평양|평양시|Heijo|Heizyo|Phenian|Phenjan|Pxenyan|Heijo-fu|Phenjana|Pienyang|Pingyang|Pionyang|Pjongian|Pkhenjan|Heizyo Hu|Piongiang|Pjongjang|Pkhen'jan|P'yongyang|Pchenjanas|Pjoengjang|Pjongjango|Pyeongyang|Pyoengyang|Binh Nhuong|Hpyeng-yang|Pchjongjang|Phyeng-yang|Phyong-yang|P-hjong-jang|Pion'gian'nk|Pionguiangue|Pyongyang-si|P'yongyang-si|Pion'nkgian'nk|Пхенян|Пхеньян|پيوڭياڭ|بيونغيانغ|เปียงยาง|प्याँगयांग|प्योंगयांग|평양직할시
Hamhŭng;a0wnqa65n;함흥|함흥시
Namp’o;9xmnkd65n;남포
Sunch’ŏn;9zjnlt65n
Hŭngnam;a0onqj65m;흥람
Kaesŏng;9vhnnj65m;개성|개성시|개성특급시
Wŏnsan;9yrnq065m;원산|원산시
Chongjin;a64nwi65m;청진시
Man’gyŏngdae-ri;9ybnl265m;만경대리
Kaech’ŏn;a0anlp65m;개천
Sariwŏn-si;9wznlc65m;사리원|사리원시
Sinŭiju;a1enhk65m;신의주|신의주시
Tŏkch’ŏn;a0fnmq65l;덕천
Haeju;9vonl765l;해주
Kanggye;a3tnnn65l;강계|강계시
Changam-ch’on;a2tntq65l;장암촌
Hyesan;a50ns265l;혜산|혜산시
Paech’ŏn-ŭp;9vjnmu65l;배천읍
Sinp’o;a18ns365l;신포
Songnim-ni;9xonl065l;송림리
Ch’ŏngdan-ŭp;9vhnlu65l;청단읍
Sinch’ŏn-ŭp;9wjnkk65l;신천읍
Paek'ak;9zmnkx65k;백학
Chaeryŏng-ni;9xmnjv65k;재령리
Manp’o;a4bnmt65k;만포
Ŭllyul;9wznjr65k;은률|은률읍
Kangnyŏng;9vbnkn65k;강령
Kangsŏn;9y6nku65k
P’yŏngsŏng;9z1nln65k
Hwasŏng;a4mnvp65k;화성
Myŏnggan-dong;a4anvp65k;명간동
Hyesan-dong;a50ns365k;혜산동
Ŭnch’ŏn-ŭp;9x5nkf65k;은천|은천읍
Kwail-ŭp;9wtnja65k
Ŭndŏk;a84ny165k;은덕
Ŏrang;a55nw665k;어랑
Samch’ŏn;9wknk565k;삼천
Sinwŏn-ŭp;9w8nlc65k;신원읍
Pongch’ŏn-ŭp;9vwnmk65k
Yuktae-dong;a16ns065k
Hongwŏn;a17nrg65j;홍원
Hwadae;a3gnvq65j;화대
Rajin;a7enxw65j;라진
Namyang-nodongjagu;a9bnwq65j;남양-노동자구
Myŏngch’ŏn;a43nvj65j;명천
T’aet’an-ŭp;9vtnk265j;태탄|태탄읍
Ongjin;9vdnk865j;옹진
Kilju;a3snv965j;길주
Chaeryŏng-ŭp;9wonky65j;재령읍
Anju;a02nl265j;안주
Uiju;a1onhx65j;의주
Puryŏng-ŭp;a6unwa65j;부녕|부령|부녕동
Yŏch’im-dong;a24nnu65j;여침동
Songhwa;9wknjm65j;송화
Hoeryŏng;a7wnwf65j;회령
Ch’ŏsal-li;9zgnkn65j;처산리
Sijung;a44nn265i;시중
Chunggang;a62nof65i;중강
Sŭngho 1-tong;9ybnly65i;승호1동
Changyŏn;9w9nji65i;장연
Songwŏn;a26nlo65i;송원|송원읍
Songwŏn-ŭp;a25nmv65i;송원|송원읍
Yŏnsa-ŭp;a6fnud65i
Sunan;9ywnl565i;순안
Hwangju-ŭp;9xfnle65i;황주읍
Kyŏngsŏng;a5jnw165i;경성
Aoji-ri;a84ny865i;당산|아오지|아오지동
Ranam;a5vnw865i;라남
Anbyŏn-ŭp;9ygnq865i
Kop’ung;a2snlv65i;고풍
Samjiyŏn-ŭp;a64nsg65i;삼지연읍
Kusŏng-si;a12njx65i;구성|귀성|구성시
Chŏngju;a09njt65i;정주
Kangdong-ŭp;9yqnma65i
Sŏnbong;a7nny665i;선봉
Unggi;a7mny965i;웅기|선봉구역
Iwŏn-ŭp;a20nte65i;리원
Hŭkkyo-ri;9xsnlf65i;흑교리
Kosan;9xynpy65i;고산
Yŏnan-ŭp;9vbnmg65h
Namyang;a9bnwq65h;남양
Yŏnggwang-ŭp;a16nq165h
Musan-ŭp;a7bnux65h;무산읍
Kowŏn-ŭp;9zknpg65h;고원
Hoeyang;9xjnqg65h;회양
T’ongch’ŏn-ŭp;9y7nr965h
Kapsan-ŭp;a45nsd65h;갑산읍
Anak;9wznkl65h;안악
Onsŏng;a9cnx365h;온성
Kujang-ŭp;a0rnm365h
Sil-li;9zpnkj65h
Chunghwa;9xynlg65h;중화
Samho-rodongjagu;a0znr765h;삼호로동자구
Sinmak;9wqnmn65h;신막
Sakchu-ŭp;a27njd65h
Ayang-ni;9w9nlf65h;아양리
Sinanju;a00nkx65h;신안주
=KR
Seoul;9udnoq6cs;首尔|首爾|首尔特别市|경성|서울|सोल|सियोल|โซล|ソウル|Seol|Seul|Siul|Soul|Seoel|Seuel|Seula|Seulo|Soeul|Szöul|Wo-jo|Seulas|Seulum|Sye-ul|Szoeul|Hanyang|Seoul-si|Syou-ouen|Wang-ching|Сеул|Соул|سئول|سیول|한성
Busan;9ninuf6cq;釜山|釜山市|釜山广域市|부산|부산시|Fusan|Fuzan|Pusan|Bousan|Fousan|Pusana|Pusano|Phu San|Busan-si|Tsau-liang-hai|Бусан|Пусан|بوسان|बुसान|ปูซาน|부산광역시
Incheon;9u2nnz6cq;인천|인천시|انچن|إنتشون|Incon|Inchon|Incono|Incxon|Intson|Incchon|Inch'on|Inchona|Inconas|Incshon|Chemulpo|Inchkhon|Inchkhun|Incheon-si|Nhan Xuyen|Инчон|Інчхон|仁川广域市|仁川広域市|仁川廣域市|इंचियॉन|इंचेवॉन|อินช็อน|인천광역시
Daegu;9pnnt76cp;대구|대구시|Tegu|Tägu|Taegu|Taiku|Teguo|Tehgu|Daikyu|Taikyu|Ntenkou|Daegu-si|Taikando|Đại Khâu|GJai Khau|Daegu Kong-hek-chhi|Тегу|Тэгу|ديغو|ڈygw|दैगू|दाएगु|แทกู|大邱广域市|大邱広域市|大邱廣域市|대구광역시
Daejeon;9qznpu6cp;대전|대전시|大田广域市|大田広域市|Daejon|Daiden|Taejon|Taiden|Tetyan|Daigono|Tehdzhon|Thai-tyen|Daejeon-si|Тэджон|ڈyjywn|ڈیجیون|दाएजोन|대전광역시
Gwangju;9nnnok6cp;光州|光州市|光州广域市|광주|광주시|Koshu|Kosyu|Kvanju|Kuangju|Kvandzu|Kvanzhe|Kwangju|Quansua|Gouanjou|Kuandzhu|Kuangjuo|Kvandzhu|Kvangdzu|Kwangdzu|Kvangdzsu|Gwangju-si|Kwang-choo|Kwang-dschu|Gwangju Kong-hek-chhi|Кванже|Куанжү|گوانجو|غوانغجو|ควังจู|ग्वांगजु|광주광역시
Suwon;9tlnot6co;수원|수원시|水原市|سوون|سووون|Suvon|Suigen|Sououon|Suwon-si|Сувон|सुवॉन|सुवोन|ซูว็อน
Ulsan;9oqnv86co;蔚山|蔚山広域市|울산|울산시|ألسان|الزان|उलसान|Ul'san|Ulsano|Urusan|Ulsan-si|Ульсан|울산광역시
Goyang-si;9umnob6co;고양|고양시|Goyang|Kojango|Goyang city
Changwon;9nvntg6co;昌原|昌原市|창원시|Shogen|Chanvon|Sangwon|Cangvono|Changuon|Cangvonas|Cchangwon|Ch'angwon|Chkhanvon|Cshangvon|Chkhangvon|Чанвон|Чангуон|چانگون|چانگوون|चांग्वॉन
Seongnam-si;9u0np66co;성남|성남시
Cheongju-si;9rsnq56co;청주|청주시
Bucheon-si;9u6no66co;부천|부천시
Cheonan;9s9np76cn;천안|천안시
Hwaseong-si;9tdnoa6cn;화성|화성시
Jeonju;9pinp76cn;전주|전주시
Ansan-si;9tonoa6cn;안산|안산시
Anyang-si;9tvnol6cn;안양|안양시
Kimhae;9nvnu06cn;김해시
Pohang;9q3nvc6cn;포항
Jeju City;9j3nng6cn;제주|제주시
Uijeongbu-si;9uunox6cn;의정부|의정부시
Masan;9nlnob6cn;마산
Gumi;9qbnsi6cm;구미|구미시
Sejong;9rnnpl6cm;세종
Pyeongtaek;9srnp16cm;평택|평택시
Yangsan;9o6nuf6cm;양산|양산시
Gwangmyeong;9u4nof6cm;광명|광명시
Wŏnju;9trnrf6cm;원주시
Chinju;9nrnrs6cm;진주시
Iksan;9punon6cm;익산시
Gunpo;9ttnon6cm;군포
Chuncheon;9v7nqt6cm;춘천|춘천시
Suncheon;9n3nq56cm;순천
Yeosu;9mknqm6cm;여수|여수시
Mokpo;9mpnn36cm;목포
Gyeongsan-si;9pintm6cm;경산|경산시
Gunsan;9pynnz6cm;군산시
Hanam;9uanpd6cm;하남|하남시
Gyeongju;9pknux6cm;경주시
Osan;9t7noz6cm;오산|오산시
Geoje;9mpntj6cl;거제
Chungju;9sqnrd6cl;충주|충주시
Gangneung;9uvntz6cl;강릉|강릉시
Gimpo-si;9uinnz6cl;김포|김포시
Icheon-si;9tknq06cl;이천|이천시
Guri-si;9ugnp66cl;구리|구리시
Yangju;9v3noy6cl;양주|양주시
Seogwipo;9idnnk6cl
Gijang;9nwnux6cl;기장
Gwangyang;9n2nqq6cl;광양
Andong;9rlntk6cl;안동|안동시
Gimcheon;9qcnrw6cl;김천|김천시|김 천시
Jeongeup;9ownok6cl;정읍시
Siheungdong;9u1noj6ck;시흥동
Yeoju;9tmnqj6ck;여주|여주시
Hwado;9ulnpn6ck
Sangju;9r6ns06ck;상주
Donghae City;9uanun6ck
Asan;9s6nos6ck;아산|아산시
Wabu;9ufnpe6ck;와부
Boryeong;9qznno6ck;보령|보령시
Muan;9n7nnc6ck
Namyangju;9uknpd6ck;남양주|남양주시
Kwangyang;9n6nqf6ck
Hongseong;9ronnv6ck;홍성
Yeongju;9santb6ck;영주|영주시
Wanju;9plnp76ck;완주|완주군
Yangp'yŏng;9u5nq56ck;양평|양평군
Ungsang;9odnut6ck
Sinhyeon;9mwntb6ck
Gwangju;9txnpi6ck;광주|광주시
Nangen;9odnpv6ck
Sokcho;9w5nt76ck;속초
Naesŏ;9nxnt06ck
Mungyeong;9rnns46ck;문경|문경시
Hongch’ŏn;9upnr96ck;홍천|홍천군
Changnyeong;9oqnsy6cj;창녕|창녕군|창녕읍
Seosan;9s6nn96cj;서산|서산시
Koch'ang;9ofnny6cj;고창|고창군
Gongju;9ranp46cj;공주|공주시
Kyosai;9mtnt76cj
Tongyeong;9mtnsr6cj;충무
Anseong;9stnpj6cj;안성|안성시
Hwawŏn;9pgnsy6cj
Uiwang;9ttnon6cj;의왕
Pubal;9tlnq76cj
Kosong;9wmnsv6cj;고성|고성군
Chinch'ŏn;9senq06cj;진천|진천군
Hwasun;9nenor6cj;화순
Buyeo;9qrnoj6cj;부여
Okcheon;9qunqd6cj;옥천|옥천군
Eisen;9pxnu56cj
Gapyeong;9v3nq76cj;가평|가평군
Tallang-dong;9j1nnc6cj
Yecheon;9runsu6cj;예천
Sinan;9mrnmb6cj;신안|신안군
Miryang;9olntn6cj;밀양시
Yeonggwang;9o0nnf6cj;영광
Yeongam;9monny6cj;영암
T’aebaek;9tanub6cj;태백
Ido-dong;9j2nnh6cj
Kimje;9pgnoh6cj
Damyang;9o4noq6cj;담양
Koesan;9s9nqz6cj;괴산|괴산군
Nonsan;9qknp06cj;논산시
Yeongdong;9qinqy6cj;영동
Munsan;9v6no66cj
Seodong;9j0nnd6cj;서동
Naju;9nbno06cj;나주|나주시
Santyoku;9u0nut6ci;삼척
Jangseong;9o2no66ci;장성
Hadong;9nfnqv6ci;하동
Cheorwon;9w5npe6ci;철원
Ara-dong;9iznnh6ci
Yesan;9rwnoc6ci;예산|예산군
Jungpyong;9s6nqe6ci
Boseong;9mlnp06ci;보성
Heunghae;9qbnvb6ci;흥해
Yeonil;9q0nv86ci;연일
Jangheung;9mcnoj6ci;장흥
Kunwi;9qnnt56ci;군위|군위군
Tangjin;9shnnr6ci;당진|당진시
Cheongsong gun;9r7nui6ci;청송|청송군|청송읍
Jinan-gun;9pfnpz6ci;진안군
Kurye;9ntnq26ci;구례|구례군
Waegwan;9pznso6ci;왜관
Seonghwan;9sknp56ci;성환
Hayang;9prntu6ci
Goseong;9n6nsg6ci;고성
Changsu;9p1nq86ci;장수|장수군
Imsil;9oxnpk6ci;임실|임실군
Ganghwa-gun;9uvnnd6ci;강화군
Neietsu;9tansv6ci;영월
Kinzan;9qanq56ci;금산
Yŏnmu;9qdnp26ci
Yanggu;9vvnrj6ci;양구|양구군
Haenam;9m1nno6ci;해남
Gaigeturi;9iynmw6ci
Namsa;9ptnox6ch
Taesal-li;9spnn96ch;대산리
Hwacheon;9vvnqr6ch;화천|화천군
Buan;9p9no16ch
Jenzan;9qonse6ch;선산
Jumunjin;9v9ntv6ch;주문진
Beolgyo;9mtnpq6ch;벌교
Ora-dong;9j0nnf6ch
=KW
Al Aḩmadī;96shlk5sn;الأحمدي|الاحمدي|اَلأَحْمَدِي
Ḩawallī;97hhlf5sl;حولي|حَوَلِّي
As Sālimīyah;97hhlk5sl;السالمية|اَلسَّالِمِيَّة
Şabāḩ as Sālim;97ahli5sl;صَبَاح اَلسَّالِم
Al Farwānīyah;97chl85sk;الفروانية|اَلْفَرْوَانِيَّة
Al Faḩāḩīl;96shlp5sj;الفحاحيل|اَلْفُحَيْحِيل
Kuwait City;97lhl95sj;اَلْكُوَيْت|مدينة الكويت
Ar Rumaythīyah;97fhlj5sj;الرميثية|اَلرُّمَيْثِيَّة
Ar Riqqah;96zhll5sj;الرقة|اَلرِّقَّة
Salwá;97ehlk5si;سلوى|سَلْوَى
Al Manqaf;96uhlp5si;المنقف|اَلْمَنْقَف
Ar Rābiyah;97ehl55si;اَلرَّابِيَة
Bayān;97ehlh5si;بيان|بَيَان
Al Jahrā’;97ihke5si;جهرا|الجهراء|اَلْجَهْرَاء
Al Finţās;971hlo5sh;الفنطاس|اَلْفِنْطَاس
Janūb as Surrah;97bhla5sh;جَنُوب اَلسُّرَّة
Al Mahbūlah;96yhlp5sh;المهبولة|اَلْمَهْبُولَة
Ad Dasmah;97khlc5sh;اَلدَّسْمَة
=KY
George Town;8fl7lz2ai
West Bay;8fu7lx2ah
=KZ
Almaty;aa5jtn4op;알마티|阿拉木圖|Werny|Almata|Almati|Almato|Almatı|Ałmaty|Vernyj|Vernyy|Virnij|Almaato|Alma-Ata|アルマトイ|Алмати|Алматы|آلماتی|ألماتي|अलमाती|अल्माटी|อัลมาตี|Алмаато
Astana;aw6jeh4op;アスタナ|阿斯塔纳|아스타나|Bozok|Akmola|Aqmola|Astano|Ostona|Ak-Mola|Asztana|Akmolinsk|Qaraotkel|Akmolins'k|Cilinograd|Nur-Soltan|Nur-Sultan|Nur-Sultano|Tselinograd|Noer-Soeltan|Nour-Soultan|astanٱ|astanہ|Акмола|Астана|Остона|Нур-Солтан
Shymkent;a7jj9c4oo;쉼켄트|奇姆肯特|شمکنت|شمکینت|シムケント|Cimkent|Simkent|Somkent|Symkent|Ximkent|Xymkent|Şımkent|Chimkent|Chymkent|Shimkent|Shımkent|Simkenta|Simkento|Sjimkent|Sjymkent|Szymkent|Schymkent|Symkentas|Tsjimkent|Чимкент|Чымкент|शिमकेंट|शिमकेंत|Шымкент|Шимкент
Aktobe;atoiax4sn;Актобе|Актюбинск
Karagandy;ascjj24on;Караганда|Карганда
Taraz;a96je94om;Тараз|Тораз
Kyzylorda;aelixz68m;Кызылорда|Қызылорда|Қызыл Орда
Oral;awdhuv62m;Орал|Уралск|Уральск
Pavlodar;az8jtt4om;Павлодар
Ust-Kamenogorsk;astk9h4om;Усть-Каменогорск|Ост-Каменогорск|Өskemen
Semey;au2k2x4om;Семей|Семипалатинск
Atyrau;akuhw44um;Атырау|Атърау|Атирау
Turkistan;aa9j5m4ol;Туркестан|Туркистон
Kostanay;b1tisq67l;Костанай|Қостанай|Кустанай
Petropavl;b6fj834ol;Петропавл|Петропавел|Петропавловск
Temirtau;at1jin4ol;Темиртау
Kokshetau;b20j8r4ol;Кокшетау
Aktau;abahu54rl;Актау|Шевченко
Rudnyy;b15irb67k;Рудный
Ekibastuz;axojp84ok;Екибастуз|Экибастуз
Taldykorgan;af2jxp4ok;Талдыкорган|Талдъкорган|Талдикорган
Zhezqazghan;amrj434ok;Жезказган|Джезказган
Zhanaozen;aaehyu4rk;Жанаозен|Новый Узень
Balqash;ak5joa4ok;Балхаш
Sarqant;ag5k204ok;Сарканд
Baikonur;agqirw67j;Байконур|Ленинск
Satpayev;an2j3m4oj;Сатпаев|Никольский
Kentau;aawj6a4oj;Кентау
Ridder;atvkc04oj;Риддер|Лениногорск
Qulsary;akfi224uj;Кульсары
Shchuchinsk;b12jaz4oj;Щучинск
Stepnogorsk;azfjfo4oj;Степногорск|Степногорськ|Степногор
Altay;as6ke14oj;Алтай|Зырян|Зыряновск
Aksu;aykjtp4oj;Аксу|Ермак
Zhitikara;ayzim067j;Житикара|Джетыгара
Saran;ascjib4oj;Саран|Сарань|Соран
Talghar;aaajuk4oj;Талгар
Konayev;abvju24oi;Конаев|Қонаев|Капчагай
Arkalyk;atlj1u67i;Аркалык
Shakhtinsk;as3jhn4oi;Шахтинск
Lisakovsk;azyipm67i;Лисаковск|Лисаков
Shu;ab5jkw4oi;Шу|Чу
Karatau;a9yjbq4oi;Каратау|Қаратау
Zhetysay;a3aj5t4oi;Жетысай|Джетысай
Arys;a7vj754oi;Арыс|Арысь|Арись
Novokazalinsk;ahdion68i;Новоказалинск|Айтеке-Би|Әйтеке Би
Abay;arwjif4oi;Абай
Aqsay;aw5hz862i;Аксай
Atbasar;axxj5w4oi;Атбасар
Zharkent;acpk294oi;Жаркент|Панфилов
Zhangatas;ab0j9p4oi;Жанатас
Ayagoz;an8k3f4oi;Аягоз|Аягуз
Aral;ak0ina68i;Арал|Аралск|Аральск
Esik;aagjv54oi;Есик|Ишек|Иссык
Mangistau;abdhuk4ri;Мангистау|Мангышлак
Shiyeli;acpj1d68i;Шиели|Чиили
Shelek;ab4jxe4oi;Шелек|Чилик
Kandyagash;arfibi4si;Кандыагаш|Кандыагач|Октябрьск
Shalqar;amvihm4si;Шалкар|Челкар
Shalkar;anfhnu4ui;Шалкар
Tekeli;aenjyp4oi;Текели
Aksu;a7uj9z4oi;Аксу|Белые Воды
Shardara;a4mj4t4oi;Шардара|Чардара
Saryaghash;a56j854oi;Сарыагаш|Сарыагач
Abay;a4vj7j4oi;Абай
Khromtau;atliec4si;Хромтау
Kalbatau;ar1k6l4oh;Калбатау|Қалбатау|Георгиевка
Zhangaqorghan;abzj2t68h;Жанакорган|Яныкурган
Lenger;a76ja54oh;Ленгер
Burunday;aagjth4oh;Бурундай|Боралдай
Ushtobe;afpjwm4oh;Уштобе
Shemonaikha;aunk7j4oh;Шемонаиха
Zhosaly;agdiu068h;Жосалы|Джусалы
Balykshi;akrhw34uh;Балыкши
Otegen Batyra;aamjty4oh;Отеген Батыра|Өтеген Батыр|Энергетический
Embi;apnidj4sh;Емба|Эмба|Җимбе
Maqanshy;ajyk7u4oh;Маканчи
Turar Ryskulov;a85jbf4oh;Турара Рыскулова
Makinsk;b07jbm4oh;Макинск
Zaysan;alvkfr4oh;Зайсан
Akkol’;b22j9c4oh;Акколь
Tasbuget;aediy368h;Тасбугет|Тасбогет
Merke;a93jjc4oh;Мерке
Sarykemer;a9hjen4oh;Сарыкемер|Михайловка
=LA
Vientiane;8bxlt06oo
Savannakhet;881lz06ok
Thakhèk;8adlz76ok
Pakse;840m1w6ok
Ban Khoan;8ijlm16oj
Xam Nua;8iqlx06oj
Luang Prabang;8h9lrr6oj
Muang Phônsavan;8g1lun6oi
Ban Xénô;88clzn6oi
Muang Xay;8jhlra6oi
Vang Vieng;8eklsl6oi
Muang Sing;8kvloz6oh
Pakxan;8d3lvy6oh
Ban Laongam;84zm2x6oh
Sekong;84nm4g6oh
Borikhan;8dklw56oh
Ban Kèngkok;87om086oh
Ban Houakhoua;8i9ln16oh
=LB
Beirut;9k5gmm50p;貝魯特|贝鲁特|베이루트|Berut|Birut|Bairut|Bayrut|Beirot|Bejrut|Bewout|Beyrut|Baeyrut|Beiriut|Beiroet|Beirots|Beirout|Beiruta|Beirute|Bejruti|Bejruto|Berytos|Berytus|Beirutas|Beyrouth|Bejrut oshs'|بيروت|بیروت|बैरूत|बेयरूत|เบรุต|ベイルート|Бейрут|Бејрут|بېيرۇت
Ra’s Bayrūt;9k6gmk50o
Tripoli;9lngnk50l;ترابلس|طرابلس|طرابلس الشام
Sidon;9j8gm950l;صيدا
Tyre;9ifglr50l;صور|الصور
Aley;9jxgmw50k;عالية|عاليه
Nabatîyé et Tahta;9iqgmk50k;نبطيه والطهطا|النبطية والطهطا
Habboûch;9itgmk50k;حبّوش
Jounieh;9kegmy50k;جونيه
Zahlé;9k1gnq50k;زحلة|زحله|زحله، لبنان
Aarsâl;9kygp650j;عرسال
Ghazieh;9j4gm950j;الغازية
Baalbek;9khgom50i;بعلبك
Chmistâr;9kcgo250i;شمسطار
En Nâqoûra;9i0glm50i;ناقوره|الناقورة|الناقوره
El Hermel;9ljgp250h;الهرمل
Byblos;9ksgn150h;جبيل|بيبلوس|جبيل بيبلوس
Bsharri;9l5go150h;بشري
=LC
Gros Islet;81396p4bi
Castries;80w96j4bh
=LI
Vaduz;akyemg8pf
=LK
Colombo;7hak1t54n
Dehiwala-Mount Lavinia;7h0k1v54l
Maharagama;7h1k2154l
Jaffna;7ovk2954l
Moratuwa;7gtk1w54l
Negombo;7i1k1s54l
Pita Kotte;7h5k1y54k
Sri Jayewardenepura Kotte;7h4k1z54k
Kandy;7i9k3z54k
Trincomalee;7luk5n54k
Kalmunai;7ilk7b54k
Galle;7etk2t54k
Point Pedro;7pak2v54k
Batticaloa;7jfk6x54k
Katunayaka;7hxk1x54k
Ambalantota;7f0k5254k
Valvedditturai;7pak2p54k
Matara;7ejk3q54k
Battaramulla South;7h6k2054k
Dambulla;7juk4154j
Kolonnawa;7h9k1w54j
Kotikawatta;7h9k1z54j
Anuradhapura;7l3k3d54j
Vavuniya;7mbk3m54j
Beliatta;7etk4954j
Hendala;7hfk1w54j
Ambalangoda;7fck2d54j
Ratnapura;7glk3c54j
Badulla;7hek5654j
Pottuvil;7h4k7b54j
Puttalam;7kck1r54j
Devinuwara;7ehk3v54j
Ampara;7iak6w54j
Welisara;7hjk1y54i
Kalutara;7gak2454i
Bentota;7fvk2854i
Matale;7irk3y54i
Mannar;7mzk1w54i
Homagama;7h0k2854i
Beruwala;7g0k2654i
Panadura;7gnk1y54i
Mulleriyawa;7h9k2154i
Kandana;7hlk1x54i
Ja Ela;7hnk1x54i
Wattala;7hfk1x54i
Mullaittivu;7nrk4i54i
Kelaniya;7hck2054i
Peliyagoda;7hdk1w54i
Kurunegala;7isk3954i
Nuwara Eliya;7hdk4e54i
Chilaw;7j2k1o54i
Gampola;7hwk3t54i
Eravur Town;7jmk6o54h
Hanwella Ihala;7h6k2h54h
Weligama;7emk3f54h
Vakarai;7klk6754h
Kataragama;7ftk5x54h
Hambantota;7f0k5c54h
Kegalle;7i5k3654h
Hatton;7h5k3w54h
=LR
Monrovia;7fid2015p;蒙罗维亚|蒙羅維亞|몬로비아|モンロビア|Monrovi|Monrobia|Monrofia|Monrovii|Monrovio|Monrowia|Manrovija|Monrovija|Monroviya|Монрови|Манровія|مانروویا|مونروفيا|มันโรเวีย|मोन्रोव्हिया
Gbarnga;7hgd5p15k
Buchanan;7ecd4315k
Ganta;7i4d7215j
Kakata;7g5d3915j
Zwedru;7evd9e15i
Harbel;7fdd3815i
Harper;7a6dal15i
Pleebo City;7ardap15i
Foya Kamara;7l8d3n15i
New Yekepa;7j2d8a15i
Voinjama;7led4x15h
Tubmanburg;7h3d1y15h
Saclepea;7hcd7g15h
Greenville;7bxd6w15h
Sanniquellie;7igd7t15h
=LS
Maseru;4okg0c12m
Maputsoe;4prg1i12j
Mohale's Hoek;4m9g0c12j
Mafeteng;4n6fzo12j
Hlotse;4ptg1x12j
Butha-Buthe;4q3g2h12i
Mabote;4oog0g12i
Quthing;4lkg0y12i
Teyateyaneng;4p1g1312i
Qacha’s Nek;4mcg3p12i
Thaba-Tseka;4o0g3h12h
=LT
Vilnius;b5xfu88sn
Kaunas;b6ifqf8sm
Klaipėda;b8rfiq8sl
Šiauliai;b9dfos8sk
Panevėžys;b8tfro8sk
Dainava (Kaunas);b6kfql8sj
Alytus;b54fqs8sj
Šilainiai;b6lfqd8si
Eiguliai;b6lfqh8si
Antakalnis;b5zfuc8si
Fabijoniškės;b61fu48si
Naujoji Vilnia;b5yfum8si
Šeškinė;b5zfu58si
Marijampolė;b5kfov8si
Naujininkai;b5ufu88si
Pašilaičiai;b61fu28si
Mazeikiai;bagfm18si
Karoliniškės;b5xfu28si
Lazdynai;b5vfu18si
Justiniškės;b60fu28si
Naujamiestis;b5wfu78si
Jonava;b70frg8si
Utena;b86fv48si
Aleksotas;b6gfqf8si
Kėdainiai;b7lfql8sh
Vilkpėdė;b5vfu58sh
Telsiai;b9iflt8sh
Taurage;b7hflx8sh
Pilaitė;b5yfty8sh
Ukmerge;b7hfsr8sh
Plunge;b9bfko8sh
Palanga;b9cfij8sh
Visaginas;b8gfxg8sh
Kretinga;b99fj08sh
Gargždai;b8rfjf8sh
Radviliskis;b92fpd8sh
=LU
Luxembourg;arted181k
Esch-sur-Alzette;ariecm81i
Dudelange;argecx81h
=LV
Riga;bc7fqz8cn
Daugavpils;b98fxp8ck
Liepāja;bayfid8cj
Jelgava;bbdfpv8cj
Jūrmala;bc9fq18cj
Ventspils;bdffjw8ci
Rēzekne;bazfzy8ci
Valmiera;bdufun8ch
Ogre;bbufsd8ch
Jēkabpils;bayfvu8ch
Mārupe;bc3fqt8ch
Salaspils;bbyfrp8ch
Dārzciems;bc7fr58ch
Tukums;bc9foc8ch
Cēsis;bd7fu78ch
=LY
Tripoli;9hdewn1do;トリポリ|的黎波里|트리폴리|Tripol|Tripul|Trables|Trablus|Triboli|Tripili|Tripole|Tripolo|Tripoly|Tripołi|Tripuli|Trypali|Tarables|Tripolis|Trypolis|Tarabulus|ترابلس|طرابلس|Триполи|Триполі|ตริโปลี|ताराबूलस|त्रिपोली|تەرابلوس
Benghazi;9f7ffr1do;بنغازى|بنغازي
Misratah;9fyf1x1dm;مصراتة|مصراته
Zliten;9g7f0h1dl;زليتن
Al Khums;9gpezm1dl;الخمس|الخُمس|المرقب
Az Zāwīyah;9h0evd1dl;الزاوية
Zawiya;9gzevd1dl;الزاوية
Janzūr;9h6ew61dl;جنزور
Sabha;914f031dl;سبها|سبهة|سَبها
Tobruk;9f5fqj1dl;طبرق
Ajdabiya;9bgfg71dk;أجدابيا|إجدابيا|اجدابيا
Al Ajaylat;9h0eue1dk;العجيلات|النقاط الخمس
Al Bayḑā’;9h0fkg1dk;البيضاء|قرية البيضاء
Al Jadīd;915f001dk;الجديد
Sirte;9cpf631dk;سرت|شعبية سرت
Darnah;9h1fmw1dk;درنة|درنه
Al Jumayl;9h9eti1dk;الجميل
Qaşr Bin Ghashīr;9gsewm1dk
Tājūrā’;9hcex31dk
Al Marj;9g9fhv1dk;المرج|شعبية المرج
Şabrātah;9h3eup1dk;صبراتة
Al Ḩurshah;9h0ev71dk;الحرشة
Şurmān;9h0eux1dk;صرمان
Msalātah;9giez01dj;مسلاتة
As Sawānī;9gwewb1dj
Tarhuna;9g4exv1dj
Al ‘Azīzīyah;9gdew61dj;العزيزية|العَزيزية
Qaşr al Qarabūllī;9gzey31dj;قصر القربولي|قصر القرهبلي
At Tāj;8t8fop1dj
Bani Walid;9e7eyu1dj;بني وليد|قصر ليبيا|قصر بني وليد
Al Jawf;8t8fop1di;الجوف
Gharyan;9fdew61di;غريان
Zuwarah;9hhetk1di;زوارة|زواره|زُوارة
Ubari;8zvevi1di;أوباري|اوباري
Zintan;9epeu11di;الزنتان|الزنتان‎
Al Abyār;9fffh81di;الأبيار‎
Sīdī Bin Zīnah;9hdetb1di;سيدي بن زينة
Al Burayqah;9ahfed1di;البريقة|قصر البريقة|مرسى البريقة
Murzuk;8y0eyo1di;مرزق
Shahhat;9h4fkr1di
Nālūt;9ejeqi1di;نالوت
Al Aşābi‘ah;9ezevr1di
Az Zahrā’;9gsevr1di
Al Qubbah;9h0fls1di;القبة
Hūn;96xf4b1di;هون|مدينة هون
Al Ghurayfah;8zoew51dh;الغريفة
Yafran;9f2eut1dh;يفرن|شعبية يفرن
Az Zuwaytīnah;9bzffw1dh;الزويتينة
An Nāşirīyah;9gnevr1dh
Qaryat Sulūq;9dzfg91dh;سلوق|قرية سلوق
Qarqūzah;9gzevo1dh
Al-'Alūaṣ;9gveyt1dh
Wādī 'Utbah;8yiexo1dh
Mizdah;9ddew31dh;مزدة
Qaşr Khiyār;9gueyh1dh;قصر خيار
Brak;92jezn1dh;براك|براك الشاطئ
Bin Jawwād;9bkfa81dh;بن جواد
Al Qawāsim;9feewa1dh
Ar Rayāyinah;9ezeuc1dh
=MA
Casablanca;9jbdav0dq;Anfa|Anafi|Kasablank|Casabranca|Kasablanka|Kazablanka|Kazablanko|Casa Branca|Kasablankae|White House|Dar-el-Beida|Darul Baidha|Dâr-ül-Beydâ|Kazamplan'ka|Dar-uel-Beyda|Tigemmi Tamellalt|أنفا|دارالبیضا|卡萨布兰卡|카사블랑카|カサブランカ|कसाबलांका|कासाब्लांका|Казабланка|Касабланкæ|กาซาบล็องกา|كازابلانكا|الدار البيضاء
Rabat;9khdd10dp;剌八|拉巴特|ラバト|라바트|Raba|Rbat|Rabot|Rabata|Rabato|Rampat|Rabatas|Rabatum|ربات|رباط|रबाट|रबात|Рабат|ราบัต|رابات
Fes;9kjdi40do;Фес|فاس|फेस|フェズ
Tangier;9pddfw0do;坦幾亞|تنجه|طنجة|タンジェ|Tanca|Tanger|Tanjer|Tanzha|Tingis|Tangeri|Tangero|Tanzher|Tangiers|Танжа|Тангер|तांजिए|ټnjh
Marrakesh;9dvd9s0do;مراكش
Salé;9kldd40do;سلا
Agadir;9aid5c0dn;aګadyr|أغادير|أكادير
Meknes;9k5dgl0dn;مكناس
Oujda;9mcdqp0dn;وجدة|وجده|وجدة-أنجاد
Kenitra;9l6ddq0dn;القنيطرة
Tétouan;9oudh30dm;تطوان
Al Hoceïma;9nxdl20dm;الحسيمة
Temara;9k9dct0dm
Safi;9fqd6c0dm;آسفي
Mohammedia;9jldbi0dl;المحمدية|الهراويين
Khouribga;9hcdct0dl;خريبكة
El Jadida;9ied8d0dl;الجديدة
Beni Mellal;9fuded0dl;بني ملال
Salé Al Jadida;9kgdda0dl
Ait Melloul;9aad5m0dl
Nador;9npdnv0dl;ناظور|الناظور
Dar Bouazza;9j4daa0dl
Taza;9l1dkv0dl;تازة|تازه
Fès al Bali;9kndi90dl
Settat;9hodau0dl;سطات|سلطات
Berrechid;9ifdax0dl
Khemisset;9jydf50dl
Inezgane;9acd5i0dl
Ksar El Kebir;9n8dfm0dl
Larache;9nrdew0dl;عرائش|العرائش
Guelmim;96jd420dk;كلميم|ڭلميم
Khenifra;9hhdga0dk;خنيفرة
Berkane;9n0dpk0dk;بركان
Taourirt;9lldny0dk
Bouskoura;9ixdar0dk
Al Fqih Ben Çalah;9gaddf0dk
Dchira El Jihadia;9add5h0dk
Oued Zem;9haddr0dk;واد زم|وادي زم
El Kelaa des Srarhna;9f1dbf0dk
Sidi Slimane;9l6dfj0dk
Errachidia;9epdjp0dk;الرشيدية|الرشيدية‎
Guercif;9l3dmp0dk
Oulad Teïma;9afd6f0dk
Ben Guerir;9fkd9x0dk
Ouislane;9k7dgr0dk
Tiflet;9k5deh0dk
Lqoliaa;9a6d5p0dk
Taroudant;9and7c0dk;تارودانت
Sefrou;9jzdil0dk
Essaouira;9djd4v0dk;الصويرة|موغادور|موكادور
Fnidek;9pldh40dk
Sidi Kacem;9l2dg50dk;سدي قاسم
Tiznit;98id4z0dk;تزنيت
Tan-Tan;950d160dk;طانطان
Ouarzazate;9bwdcv0dk;ورززات|ورزازات
Souk El Arbaa;9mcdfc0dk
Youssoufia;9fld8b0dj
Ifrane;9j5dht0dj;إفران|افران
Lahraouyine;9j6db30dj
Martil;9oydhc0dj
Aïn Harrouda;9jgdbb0dj
Souq Sebt Oulad Nemma;9fqdde0dj
Skhirate;9k1dch0dj
Ouezzane;9modgi0dj
Benslimane;9jedc80dj
Beni Enzar;9nydnv0dj
Mdiq;9p4dh70dj
Sidi Bennour;9gpd8l0dj
Midelt;9gtdit0dj
Azrou;9ivdhi0dj;أزرو|ازرو
Tirhanimîne;9nwdl10dj
My Drarga;9aed5p0dj
Dakhla;9ahd5h0dj;الداخلة‎
Ain El Aouda;9jwdd50dj
Ben Jerrar;9a2d5m0dj
Ad Darwa;9ipdb20dj
Al Aaroui;9n9dnn0dj
Kasba Tadla;9gkdel0dj
Bejaâd;9h1de90dj
Sidi Taibi;9kzddg0dj
Jerada;9lbdq00dj
Chefchaouen;9npdhe0dj;شفشاون
Mrirt;9i4dgj0dj
Tinghir;9djdgn0dj
El Aïoun;9m2dp10dj
Azemmour;9ihd8u0dj
Souq Larb’a al Gharb;9mddfc0dj
Zagora;9a9dfs0dj
Ait Ourir;9dpdaq0dj
Azilal;9esddr0di
Smara;90aczl0di;سمارا|سماره|السمارة
Sidi Yahia El Gharb;9ladei0di
Tine Biougra;99xd5y0di
Taounate;9lydj40di
Bouznika;9jvdc40di
Had Soualem;9iuda70di
Imzouren;9nndlb0di
Zaïo;9n2dof0di
Aourir;9apd580di
El Hajeb;9jldh30di
Zeghanghane;9nodno0di
Ben Ahmed;9hvdbw0di
Tit Mellil;9j8db70di
Mechraa Bel Ksiri;9m1dfg0di
Asilah;9ojdf90di;صيلة|أصيلة
Tabount;9budcs0di
Laâttaouia;9egdbp0di
Sidi Slimane Echcharaa;9mzdph0di
Demnate;9e5dcj0di
Arfoud;9dcdk90di
Bouarfa;9gddqk0di
Souk et Tnine Jorf el Mellah;9ltdgp0di
Mehdya;9l6ddh0di
Aïn Taoujdat;9kadhj0di
Tamesna;9jydcs0di
Oadar Temsia;9add5v0di
Chichaoua;9dmd7o0di
Tahla;9kldjq0di
Sabaa Aiyoun;9k6dh30di
Rich;9fmdji0di
Missour;9htdkx0di
Zawyat ech Cheïkh;9godfk0di
Bouknadel;9ksdda0di
Aïn Attig;9k5dcn0di
Tamansourt;9e8d9h0di
Echemmaia Est;9f4d820di
Oulad Barhil;9b4d8h0di
Bir Jdid;9ipd9t0di
Oulad Ayad;9fgdd40di
Zawyat an Nwaçer;9iqdau0di
Gueznaia;9p6dfn0di
Mediouna;9ixdb40di
Moulay Ali Cherif;9cwdk50di
Sidi Ifni;97md3r0dh;سيدي إفني
Selouane;9nfdnu0dh
Azla;9ordhg0dh
El Gara;9igdbx0dh
Imi-n-Tanout;9cld7f0dh
Sidi Rahal;9j0d9y0dh
New Fes;9kldi30dh
Ras el Ma;9kddhu0dh
Setti Fatma;9crdao0dh
El Ksiba;9ghdfa0dh
El Mansouria;9jrdbq0dh
Ahfir;9n3dq60dh
Al Brouj;9gadc10dh
Imouzzer Kandar;9jpdi30dh
Douar Toulal;9k4dgg0dh
Karia Ba Mohamed;9lhdhj0dh
Reçani;9cwdk50dh
Tata;98md9v0dh
Sebt Gzoula;9f7d6s0dh
Bni Bouayach;9njdlc0dh
Beni Yakhlef;9jkdbm0dh
Oulmes;9ivdfc0dh;ولماس|أولماس
Aoulouz;9b7d9a0dh
Asni;9ctd9u0dh
Kelaat Mgouna;9ctdez0dh
Méchouar-Kasba;9dsd9t0dh
Ribat Al Khayr;9jydjr0dh
Agouraï;9jfdgi0dh
Tamallalt;9eedb50dh
Goulmima;9e1di90dh;كلميمة
Outat Oulad Al Haj;9imdlq0dh
Aïn Beni Mathar;9khdqd0dh
Boujniba;9hedd70dh;ابي الجعد (البلدية)
Mers El Kheir;9k2dcr0dh
Sidi Allal El Bahraoui;9khddv0dh
Lalla Mimouna;9mtdf50dh
Boumia;9gwdhu0dh
El Harhoura;9kadcr0dh
Midar;9n2dm70dh
Driouch;9n6dmm0dh
Assa;95hd5t0dh
Amizmiz;9cqd950dh
Ait Yazza;9aqd7k0dh
Ben Taieb;9ncdmf0dh
Bou Izakarn;972d510dh
Oulad Tayeb;9kbdi40dh
Aguelmous;9i4dfr0dh
=MC
Monaco;abiegm86i
Monte-Carlo;abiegn86h
=MD
Chisinau;aklg467mn
Tiraspol;ak4g6b7ml
Bălţi;amog1l7mk
Bender;ak3g5w7mk
Rîbniţa;ampg4l7mj
Cahul;ahig2c7mi
Ungheni;al5g187mi
Soroca;ansg2k7mi
Durleşti;akmg3w7mi
Orhei;alng437mi
Dubăsari;albg517mh
Comrat;ailg3m7mh
Edineţ;antfzu7mh
Ceadîr-Lunga;ahyg437mh
Căuşeni;ajkg5p7mh
Strășeni;akyg3h7mh
Hînceşti;ak3g3f7mh
Floreşti;an1g2l7mh
Drochia;angg197mh
Codru;akig427mh
Bilicenii Vechi;ameg1x7mh
Slobozia;ajtg6i7mh
=ME
Podgorica;a7wfdi8al
Nikšić;a8tfcm8aj
Herceg Novi;a7xfbi8ah
Pljevlja;aagfds8ah
Budva;a7hfcc8ah
Bar;a6xfd28ah
Bijelo Polje;a9kfev8ah
Cetinje;a7rfcj8ah
=MF
Marigot;8c790s3df
=MG
Antananarivo;5hhhk28xp;Tana|Tananaribe|Tananarive|Antananarifo|Antananarivu|Antananariwo|Antananaryvu|Antananarywa|Antenenerivo|Antananaryvas|塔那那利佛|安塔那那利佛|안타나나리보|アンタナナリボ|Тананариве|Антананариво|अन्टाननरीवो|अंतानानारिव्हो|آنتاناناریوو|أنتاناناريفو|อันตานานาริโว
Toamasina;5jlhp88xm
Antsirabe;5ethin8xm
Mahajanga;5qchgo8xm
Fianarantsoa;5afhit8xl
Toliara;555h9b8xl
Antsiranana;5zshox8xl
Sambava;5udhrd8xk
Imerintsiatosika;5hahjg8xj
Antalaha;5smhro8xj
Tôlanaro;50hhii8xj
Antanifotsy;5ffhjg8xj
Ambovombe;502hg18xj
Ambilobe;5xcho98xj
Ambanja;5w1hml8xj
Moramanga;5hdhlz8xj
Antsalova;5i5hby8xj
Morondava;5dnhb48xj
Hell-Ville;5wshm38xj
Ivato;5hshjw8xj
Ambatondrazaka;5khhmi8xj
Amboasary;50hhgu8xj
Tsiroanomandidy;5hvhfx8xj
Manakara;58hhld8xj
Ambalavao;59dhid8xj
Maroantsetra;5r4hq68xj
Fenoarivo Atsinanana;5lqhp98xj
Ambositra;5czhj88xj
Soavinandriana;5grhht8xj
Ihosy;57shg58xi
Marovoay;5p9hhk8xi
Vangaindrano;555hk88xi
Antsohihy;5sohlb8xi
Ampanihy;51fhcb8xi
Mahanoro;5eqhnk8xi
Ambatofinandrahana;5cxhi08xi
Andilamena;5mrhmx8xi
Soanierana Ivongo;5n0hpq8xi
Ikongo;598hjr8xi
Vavatenina;5lhhoo8xi
Faratsiho;5g4hif8xi
Mananara;5p3hq98xi
Nosy Varika;5cuhmt8xi
Farafangana;56mhkv8xi
Andapa;5tbhpx8xi
Betafo;5exhi58xi
Ambato Boeny;5o9hhs8xi
Amparafaravola;5l5hly8xi
Ambatolampy;5g6hjq8xi
Maromandia;5uihlk8xi
Didy;5johmt8xi
Ambodimanga II;5m1hol8xi
Bealanana;5tmhnf8xi
Antsohimbondrona;5xohnp8xi
Itampolo;51gha38xi
Fandriana;5dthjm8xi
Mampikony;5pbhkd8xi
Arivonimamo;5h6hj28xi
Tsiombe;4zqhec8xi
Ankazobe;5j4hiw8xi
Ambodifotatra;5muhqh8xi
Sahavato;5cshm98xi
Maevatanana;5mxhi38xi
Betioky;544hba8xi
Miandrarivo;5g1hhv8xi
Vohipaho;54lhjy8xi
Mananjary;5b1hma8xi
Tsaratanana;5nchkd8xi
Marolambo;5ebhlo8xi
Ankazoabo;584hbo8xi
Anjozorobe;5iwhkz8xi
Vohibinany;5ltho78xi
Ambohidratrimo;5hqhjr8xi
Ampahana;5t1hri8xi
Morombe;59mh8g8xi
Boriziny;5qthkf8xi
Belo sur Tsiribihina;5fahbr8xi
Maintirano;5juhab8xh
Manjakandriana;5hghks8xh
Iharan̈a;5wxhqw8xh
Beloha;503hd58xh
Ivohibe;57khi88xh
Jafaro;50sheg8xh
Sakaraha;56ehbp8xh
Miandrivazo;5frhea8xh
Ampasimanolotra;5hqhob8xh
Sitampiky;5nphg28xh
Soanindrariny;5eqhj78xh
Bekily;52qhdw8xh
Vondrozo;56mhjc8xh
Fenoarivo Be;5ithhd8xh
Beroroha;59thdh8xh
Befandriana;5rmhmu8xh
Betroka;55dhg08xh
Amboanjo;58whkx8xh
Ambohitrolomahitsy;5i2hkg8xh
Sadabe;5i9hki8xh
Vatomandry;5gbho28xh
Ifanadiana;5auhkb8xh
Ambarakaraka;5wihnr8xh
Alarobia;5hbhkl8xh
Ankazondandy;5i2hkq8xh
Vohipeno;57xhkv8xh
Ikalamavony;5b9hhe8xh
Soalala;5pahdw8xh
Imerimandroso;5llhmy8xh
=MH
Majuro;7hpr429gi
Dalap-Uliga-Dorrit;7hpr429gh
=MK
Skopje;a6ofjj8jn;Скопе|Скоп'е|Скоп'є
Kumanovo;a71fkc8jk;Куманово|Коуманово|Кумаково
Prilep;a4vfjv8jj;Прилеп
Bitola;a3zfja8jj;Битола|Битоля|Битољ
Čair;a6qfjk8jj;Чаир
Tetovo;a6pfi98jj;Тетово|Хътѣтово|Цетава
Kisela Voda;a6jfjq8jj;Кисела Вода
Veles;a5wfkh8jj;Велес|Вєлєсъ
Gostivar;a64fi38jj;Гостивар|Гостивар҄ь
Shtip;a5zflo8jj;Штип|Щип
Centar Župa;a58fh48jj;Центар Жупа|Вапа
Ohrid;a48fhs8ji;Охрид|Охрыд|Охрїдъ
Gjorče Petro;a6pfjb8ji;Ѓорче Петров
Kavadarci;a53fl58ji;Кавадарчи|Кавадарци|Кавадарці
Struga;a4efhg8ji;Струга|Строуга
Butel;a6rfjl8ji;Бутел
Kochani;a6gfm98ji;Кочани
Strumica;a54fmw8ji;Струмица
Kičevo;a5bfi88ji;Кичево|Кꙑчєво
Lipkovo;a74fjz8ji;Липково
Zelino;a6mfii8ji;Зелино|Желино
Saraj;a6ofj98ji;Сарай|Сарај
Radovis;a5ofme8ji;Радовиш
Tearce;a6wfih8jh;Теарце
Kriva Palanka;a78fm18jh;Крива Паланка
Šuto Orizare;a6sfji8jh;Шуто Оризари
Gevgelija;a4afmi8jh;Гевгели|Гевгелия|Гевгелија
Negotino;a58fld8jh;Неготино
Studeničani;a6gfjt8jh;Студеничани
Vinica;a6cfmj8jh;Виница
Debar;a5cfh08jh;Дебар|Дебър|Дєбаръ
Negotino;a6cfi08jh;Неготино|Неготино-Полошко
Delcevo;a6lfn98jh;Делчево
Resen;a45fid8jh;Ресен
Ilinden;a6nfjy8jh;Илинден|Белимбегово
Brvenica;a6lfia8jh;Брвеница|Брвенце
Kamenjane;a6jfi58jh;Камењане
Bogovinje;a6gfi48jh;Боговинье|Боговиње
=ML
Bamako;7x1d9u05r;バマコ|巴馬科|바마코|Bamaco|Bamaku|Bamakas|Bammaco|Bammako|Mpamako|Бамако|باماكو|باماکو
Sikasso;7tgdg905m
Koutiala;7wfdgt05l
Ségou;7zcdem05l
Kayes;825d0805l
Mopti;828dke05l
Kalaban Koro;7wxd9p05l
Gao;877dvw05k
Kati;7xed9l05k
San;7yydie05k
Bougouni;7tqdb805k
Timbuktu;88ldnn05k
Kita;7y8d5n05k
Dialakorodji;7xad9w05j
Koulikoro;7xqdb005j
Fana;7xidco05j
Markala;800df505j
Niono;81ldfd05j
Nioro;84bd5d05j
Pèlèngana;7zbdeq05j
Kolokani;7zpd9p05j
Bourem;894dv105j
Sangarébougou;7xbda205j
Massiogo;7qndf105i
Djenné;80ndjd05i
Kidal;8d8dzx05i
Kadiolo;7rbdfz05i
Douentza;83pdnt05i
Bla;7xzdg005i
Moninnpébougou;81bdgo05i
Zégoua;7r5dgb05i
Diré;876dmk05i
Diéma;82ed6h05i
Banamba;7zndbb05i
Bankass;814dm805i
Bamba;7qudc505i
Bafoulabé;80dd1x05i
Mahina;80md3y05i
Sibi;7wed8v05i
Diourou;801dft05i
Bandiagara;81vdlz05i
Dougabougou;80edf005i
Koro;812dng05i
Yanfolila;7t2d9d05i
Siribala Coro;810df105i
Kabala;7wtd9o05i
Finnkolo;7tbdgp05i
Moribabougou;7x9da605i
Nara;845dbr05h
Dioïla;7wpdd405h
Kouri;7vudio05h
Sirakoro Méguétana;7wwda005h
I-n-Tillit;857duq05h
Toubakoura;7zedbi05h
Goundam;87ldlt05h
Andéranboukan;84ve4e05h
Yorosso;7wcdiq05h
Kangaba;7v5d8m05h
Sagalo;7vwd2a05h
Ké-Macina;80sdh405h
=MM
Yangon;88plb46rr;仰光|양곤|ヤンゴン|Dagon|Jangon|Jangun|Rangon|Rangum|Rangun|Yanqon|Jangona|Jangono|Rangoon|Rangoun|Yankoun|Rangunas|Gian'nkon|Jangon khot|Ngiong-kong|Yangjgvangh|Янгон|Јангон|رنگون|يانجون|यांगून|रङ्गुन|ย่างกุ้ง
Mandalay;8n1law6ro;曼德勒|만달레이|マンダレー|मांडले|माण्डले|Mandale|Mandalaj|Mandalej|Mandalaja|Mandalajo|Mandalajus|Mandalay piirkond|ماندالی|ماندالے|Мандалай|Мандалеј|มัณฑะเลย์
Nay Pyi Taw;8gulb16ro
Hlaingthaya;88tlav6rn
Mawlamyine;87tlf76rn
Kalemyo;8qfl5a6rm
Insein;88xlay6rm
Bago;8a6lc06rm
Amarapura;8mvlat6rm
Pathein;88ml756rl
Yawnghwe;8jeld96rl
Monywa;8nfl8a6rl
Kyaukpyu;8fzl3v6rl
Sittwe;8hzl226rl
Meiktila;8k0laa6rl
Myeik;7wklhw6rl
Kēng Tung;8m3lll6rl
Mu-se;8solfy6rl
Taunggyi;8jrldk6rl
Myingyan;8lml8z6rl
Dawei;814lgr6rl
Mingaladon;890lay6rl
Pyay;8eal8i6rl
Hinthada;8b1l966rl
Kyauktan;888lbl6rk
Mingala Tangnyunt;88nlb56rk
Lashio;8pqlfj6rk
Pakokku;8l9l846rk
Thaton;890leh6rk
Ann;8h0l596rk
Pyin Oo Lwin;8n8lby6rk
Möng Yang;8mplkw6rk
Kyimyindine;88plb06rk
Set Ka Lay;88plaz6rk
Yenangyaung;8ivl7j6rk
Taungoo;8emlbv6rk
San Chaung;89ilay6rk
Thayetmyo;8fol8e6rk
Pyinmana;8gulb96rk
Magway;8hzl7p6rk
Heho;8jklcy6rk
Kalaw;8jblc86rk
Myitkyina;8wilek6rk
Chauk;8k2l7e6rk
Mogok;8polc36rk
Nyaunglebin;8bvlco6rk
Sangyoung;88plb16rk
Mudon;876lfg6rk
Shwebo;8opl9u6rk
Taikkyi;8a3lak6rk
Lakang;8uildz6rk
Sagaing;8mslam6rk
Thanhlyin;88mlbd6rk
Dawbon;87wl9k6rk
Taungdwingyi;8hll9f6rj
Thanlyin;88llbd6rj
Bogale;879l906rj
Gwa;8avl6q6rj
Hpākān;8x5lbj6rj
Yamethin;8irlb26rj
Shwegu;8tblcv6rj
Myaungmya;884l7o6rj
Kanbe;88flao6rj
Kawthoung;7pqlhr6rj
Myaydo;8ftl8i6rj
Minbu;8i2l7k6rj
Thanbyuzayat;86dlfh6rj
Buthidaung Town;8k0l116rj
Bhamo;8tdle36rj
Tharyarwady;8b1la36rj
Thongwa;88klc46rj
Kyaiklat;87pl9w6rj
Tachilek;8itllg6rj
Manaung;8edl4d6rj
Kyaukse;8m1lb26rj
Hpa-An;88xlf76rj
Kyaikto;8a3ldh6rj
Martaban;87xlf66rj
Nyaung-U;8kwl7n6rj
Kawkareik;880lgw6rj
Kyaikkami;86olf06rj
Pyapon;879l9s6rj
Twante;88flah6rj
Myawaddy;88dlhn6rj
Mawlaik;8rol686rj
Nyaung;88rlax6rj
Tamu;8tal5z6rj
Möng La;8m7llt6rj
Kyaukpadaung;8jwl896rj
Kyauktan;8tglad6rj
Wakema;884l8e6rj
Maubin;88hl9p6rj
Thin Gan Kyun Gyi;894lb46rj
Myanaung;8ctl8s6rj
Oke Kan;88tlav6rj
Tatkon;8ukl836ri
Ahlone;88nlb16ri
Pazundaung;88olb56ri
Pyu;8dclbw6ri
Kayan;88zlc86ri
Nyaungdon;89cl9o6ri
Shwenatha;897lb46ri
Kyaukme;8omldj6ri
Möng Yawng;8kulms6ri
Letpandan;8bfl9z6ri
Hlegu;89ilba6ri
Daik-u;8bglcj6ri
Thanatpin;8a1lca6ri
Paungde;8ddl9b6ri
Botataung;88llb56ri
Mrauk U;8j7l2v6ri
Ye;84dlfu6ri
Mawlamyinegyunn;87il8m6ri
Tangyan;8ohlhb6ri
Namhkam;8s7lfc6ri
Mohnyin;8uulbp6ri
Wundwin;8kllar6ri
Pyawbwe;8j7lat6ri
Danai;8z8lco6ri
Kyauktaga;8allde6ri
Aungban;8jelcf6ri
Ywar Ma West;88ylax6ri
Lewe;8gklaz6ri
Pauk Kone;893lb36ri
Labutta;86vl786ri
Lawksawk;8l1ld36ri
Paung;886leq6ri
Shwe Lin Ban;88ylav6ri
Kungyangon;87olaq6ri
Payathonzu;84klhb6ri
Panglong;8sylh36ri
Taungup;8eel5s6ri
Katha;8t6lbm6ri
Pyan Lel Nay Yar Cha Htar Ye;895lb16ri
Hmaw Bi;888lf66ri
Kanbalu;8qgl9c6ri
Mogaung;8wblda6ri
Kutkai;8r6lg26ri
Zee Kone;893lay6ri
Hakha;8owl416ri
Shwegyin;8bsld46ri
Yedashe;8f8lbn6ri
Madaya;8nplay6ri
Pawgan;88zlay6ri
Kyonpyaw;8a2l8g6ri
Nansang;8k1lfg6ri
Min Ga Lar Don Zay;890lb06rh
Kyeintali;8c1l6h6rh
Laukkai;8rulic6rh
Hopin;8vflc56rh
Yesagyo;8m3l8l6rh
Ah Lel;890lau6rh
Waw;8aklck6rh
Sinngu;88zlay6rh
Da Nyin Kone;891lax6rh
Kone Ta La Paung;899lb36rh
Zalun;8akl9g6rh
Saw Bwar Gyi Kone;88xlb16rh
Ye-u;8p9l936rh
Ingabu;8bhl8n6rh
Kyauktaw;8jwl2a6rh
Taung Thu Kone;88ylaz6rh
Myenigon;88plb26rh
Aung San;890lay6rh
Myo Thit Ka;88vlay6rh
Okpo;895lax6rh
Loikaw;8gole16rh
Ywar Ma East;88ylay6rh
Kyo Kone East;88xlaz6rh
Pangkham;8nmljh6rh
Shan Chaung;88ulax6rh
Kan Nar Middle;88wlay6rh
Pèkon;8h7ldh6rh
Zigon;8cyl9m6rh
Setsan;88plaz6rh
=MN
Ulan Bator;an3m4w6mo;Улан Батор|Улан-Батор|Уланбатар
Erdenet;aq7lx46mk;Ерденет|Эрденет|Эрдэнэт
Darhan;arhm286mk;Дарhan|Дарhан|Дархан
Choibalsan;anjmq56mj;Чойбалсан
Nalayh;ampm606mi
Mörön;arvlm86mi;Морон|Мурен|Мурэн
Bayanhongor;aiblns6mi;Баянhонгор|Баянхонгор
Ulaangom;asukzr5fi;Улаангом|Улангом
Khovd;andkyk5fi;Ховд|Ховда|Кобдо
Arvayheer;aiilth6mi;Арвайhээр|Арвайхээр
Ölgii;aq1ktw5fi;Öлгий|Улгий|Өлгий
Bogd;ae3lrt6mi;Богд
Dalandzadgad;ab1ly26mi;Даланзадгад
Sühbaatar;atjm316mh;Сухэ-Батор
Undurkhaan;algmfe6mh;Ундурхаан|Ундурхон
Tsetserleg;alwlpt6mh;Цецерлег|Цэцэрлэг|Цэцэрлэг хот
Saynshand;aeomdw6mh;Сайншанд
Dzüünharaa;appm3q6mh;Зуунэхараа
Baruun-Urt;ajommo6mh;Баруун-Урт|Барун Урт|Барун-Урт
Altai;aitlbe5fh;Алтай
Bulgan;apllvl6mh;Булган
Dzuunmod;amjm536mh;Дзуунмод|Зуунмод
Zuunmod;amjm536mh;Зуунмод
Uliastay;ammld05fh;Улиастай|Улиасутай|Үliəstaj
=MO
Macau;8nomnf5tn;澳門|澳门
Taipa;8nkmng5tk;氹仔
Sé;8nnmnf5tj;大堂区|大堂區
Luhuan;8ngmnf5ti;路环|路環|聖方濟堂區
Zhuojiacun;8nkmng5ti;卓家村
Lai Chi Van;8ngmnf5th;荔枝碗
=MP
Saipan;849p4v9rj
=MQ
Fort-de-France;82k96d3ek
Le Lamentin;82l96k3ei
Le Robert;82s96q3ei
Sainte-Marie;83296l3eh
Le François;82m96u3eh
Ducos;82i96n3eh
Saint-Joseph;82r96g3eh
La Trinité;82y96o3eh
=MR
Nouakchott;8c9cnm19o;或索|努瓦克肖特|누악쇼트|Nouaxot|Nuaksot|Nuakxot|Nwaqcut|Nouaksot|Nuakchot|Nuakshot|Nuaksota|Nuaksoto|Nuaksott|Nävakjut|Naevakjut|Nawakshot|Nawakszut|Nouakchat|Nouakchot|Nuaksjott|Nuaksotas|Нуакшот|نواكشوط|نواکشوت|नवाकसुत|ヌアクショット|นูแอกชอต
Nouadhibou;8k6cko19l;نواذيبو
Kiffa;886d0c19j;كيفة
Dar Naim;8cbcnr19j;دار النعيم
Néma;886dbu19j;النعمة
Mbera;862dfx19j
Ksar;8cacno19j
Kaédi;86vcuh19j;كيهيدي
Zouérat;8p6cxd19j;ازويرات|الزويرات
Tevragh Zeina;8cacnl19j;تفرغ زينه
Bougadoum;863dbj19i
Sélibaby;844cy619i;سيلبابي|سيليبابي
Atar;8j0cvr19i;آتار|أطار|اطار
Ayoun El Atrous;88ad5b19i;لعيون|العيون|عيون العتروس
Guerou;89gcyk19i
Boutilimitt;8arcr619i
El ’Ayoûn;858d0y19h
Tékane;884cpd19h
Bogué;883cse19h;بوغي|بوكى|بوكي
Aleg;89dctd19h;ألاك
Tembedgha;874d9b19h;تمبدغة
Rosso;87vco319h;روسو|روصو
Akjoujt;8gucs119h;أكجوجت
Ṭinṭâne;87jd3r19h
Elghabra;889cwt19h
Magṭa‘ Laḥjar;8ancvn19h
=MS
Brades;88n9373nc
Plymouth;88f9373n0
=MT
San Pawl il-Baħar;9pvf0283i
Birkirkara;9pqf0683i
Mosta;9prf0383h
Sliema;9prf0a83h
Qormi;9pof0783h
Żabbar;9pof0e83h
Valletta;9pqf0b83f
=MU
Port Louis;5e0ibq94l
Vacoas;5dmibo94k
Beau Bassin-Rose Hill;5dtibn94k
Curepipe;5dkibt94k
Quatre Bornes;5dqibo94k
Triolet;5eaibv94i
Goodlands;5ecic594h
Bel Air Rivière Sèche;5dqicf94h
Bambous;5dqibh94h
Centre de Flacq;5dxicb94h
Mahébourg;5dbica94h
Saint Pierre;5duibt94h
Le Hochet;5e2ibt94h
Baie du Tombeau;5e4ibp94h
=MV
Male;79mjk793k
=MW
Lilongwe;5v7ghv09o;利隆圭|里朗威|릴롱궤|リロングウェ|ลิลองเว|Lilongve|Lilongvo|Lilongüe|Lilonhue|Lilonqve|Lilonguee|Lilongveh|Lilon'nkoue|Лилонгве|Лілонгве|ليلونغوي|لیلونگوه|लिलाँग्वे
Blantyre;5q6gl909o
Mzuzu;625gii09m
Zomba;5r9gm409k
Karonga;66fgi909j
Kasungu;5xtgh009j
Mangochi;5tsgly09j
Salima;5vqgjq09i
Liwonde;5s5glv09i
Balaka;5segl409i
Dedza;5u2gjd09i
Nkhotakota;5y3gja09i
Mchinji;5vogfc09i
Nsanje;5n0gly09i
Mzimba;60yghc09i
Mponela;5wfghq09i
Rumphi;63egi209i
Ntcheu;5sugk809i
Mwanza;5qogjw09h
Chitipa;672ggf09h
Monkey Bay;5uwgl009h
Mulanje;5phgmm09h
Nkhata Bay;61rgj909h
=MX
Mexico City;8fz68n3is;墨西哥城|Nkoyo|Mehiko|Meksyk|Mexico|Mexiko|Mekhiko|Meksiko|Meksikas|Mexico DF|Mexico by|Meksikurbo|Mexikoborg|Grad Mexico|Mexico D.F.|Mexico-stad|Mexicopolis|Meksiko Siti|Mexiko Hiria|Mexiko-Stadt|Ciudad Mexico|멕시코 시|멕시코시티|Мехико|Мехіко|مکزیکو|مکزیکوسیتی|メキシコシティ|เม็กซิโกซิตี|मेक्सिको सिटी
Tijuana;9ga4v04gp;蒂華納|티후아나|ティフアナ|Tihuana|Tijuano|Tixuana|Tichuana|Tikhuana|Tykhuana|Zaragoza|Tia Juana|Tichouana|Tikhuanae|Тихуанæ|Тихуана|تيخوانا|تیخوانا|तिहुआना|ตีฮัวนา
Iztapalapa;8fs68u3ip;伊斯塔帕拉帕|Istapalapa|Ixtapalapa|Iztaoalaoa|Iztapalapan|Delegacion Iztapalapa|Delegazione Iztapalapa|Истапалапа
Puebla;8ex6b73ip;プエブラ|普埃布拉|푸에블라|Puebl|Pueblo|Puehbla|Pouempla|Angelopolis|Byen Puebla|Puebla City|Yucha Nchu'u|Cuetlaxcoapan|Puehbla-de-Saragosa|Puehblae-de-Saragosae|Ehroika-Puehbla-deh-Saragosa|Пуебла|Пуэбла|بويبلا|پویبلا|पुएबला
Ecatepec de Morelos;8gg68u3ip;Morelos|Ecatepec|Ekatepeko|San Cristobal|Ecatepec Morelos
Santiago de Querétaro;8j76553ip;ケレタロ|克雷塔罗|케레타로|Kepetapo|Keretaro|Queretaro|Queretarum|Queretaro City|Ciudad Queretaro|Santiago Tlachco|Sant'jago-de-Keretaro|Kepeтapo|Керетаро|เกเรตาโร|کرتارو، کرتارو|کوارتارو، کوارتارو
León de los Aldama;8ko61k3ip;レオン|Leon|Leon Guanajuato
Ciudad Juárez;9e45oa2dp;華雷斯城|Juarez|Huaresa|Juarezo|Chuaresas|Syudat Xuares|Lungsod Juarez|Siudad Khuares|Sjudad Khvarez|Altepetl Juarez|S'judad-Khuares|S'judad-Khuarehs|Sioudad Chouares|Siudad Chuaresas|시우다드후아레스|シウダー・フアレス|Сиудад Хуарес|Сьюдад-Хуарес|سيوداد خواريز|سیوداد خواریز|सिउदाद हुआरेझ
Zapopan;8jk5wt3ip;萨波潘|サポパン|Sapapan|Sapopan|Sapopano|Tzapopan|Sapopanas|Запопан|Сапапан|زاپوپان، خالیسکو|سابوبان، خاليسكو
Guadalajara;8jg5wx3ip;瓜达拉哈拉|과달라하라|グアダラハラ|Atemaxac|Guadalaxara|Gvadalahara|Gvadalaharo|Qvadalaxara|Guadalakhara|Gvadalachara|Gvadalakhara|Gouadalachara|Gvadalakharae|گواڈلہارا|غوادالاخارا|Гвадалахарæ|Гвадалахара|ग्वाडलाहारा|ग्वादालाहारा|กวาดาลาฮารา
Mérida;8k96z23ho;メリダ|梅里达|梅里達|메리다|ماردة|myryڈa|Meryda|Emerita|Мерида|Мерыда|मेरिडा
Gustavo Adolfo Madero;8g568p3io;Guadalupe|Villa Madero|Guadalupe Hidalgo
Monterrey;8xc65c3lo;蒙特雷|몬테레이|モンテレイ|مونتری|مونتيري|माँतेरे|मोंटेरी|Monterej|Monterey|Monterejo|Monterrei|Monterrej|Mantehrehj|Mons Regis|Monterejus|Monterreja|Tlahtoantepec|Monterrey City|Мантэрэй|Монтерей|มอนเตรเรย์
Ciudad Nezahualcoyotl;8fw68z3io;Neza|Cd. Neza|Ciudad Neza|Nezahualcoyotl|Nesaual'kojotl'|Netzahualcoyotl|Nezahualkojotlo|Nesahualkojotlis|Cd. Nezahualcoyotl|Ciudad Netzahualcoyotl|Rancheria Netzahualcoyotl|Несауалькойотль
Mexicali;9gn4zb4go;メヒカリ|墨西卡利|멕시칼리|مخیکالی|مكسيكالي|Mexicalo|Mexikali|Mekhikali|Meksikali|Mexihcali|Meksikalis|Мехикали|Мехікалі|เมคีกาลี|मेक्सिकली
Chihuahua;95k5pb2co
Cancún;8kt76r27o
Naucalpan de Juárez;8g468c3io
Hermosillo;96t5br2zo
Culiacán;8uw5lp3go
Morelia;8gq62y3in
Torreón;8wy5wq3ln
Álvaro Obregón;8fs68g3in
San Luis Potosí;8nj63j3ln
Aguascalientes;8ms5zw3in
Saltillo;8wn63i3ln
Guadalupe;8xc65i3ln
Acapulco de Juárez;88t66h3in
Tlalnepantla;8ga68g3in
Tlaquepaque;8jc5x33in
Coyoacán;8fr68k3in
Tuxtla;88j6pc3hn
Reynosa;8yg6b03fn
Tlalpan;8fm68k3in
Cuautitlán Izcalli;8gk68e3in
Cuauhtémoc;8g168l3in
Victoria de Durango;8sq5ta3ln
Heroica Matamoros;8xw6d63fn
Toluca;8fl6773in
Ciudad López Mateos;8gc68a3in
Ciudad Apodaca;8xm65p3ln
Ciudad General Escobedo;8xo65c3ln
Ensenada;9ej4w44gn
Xochimilco;8fh68q3in
Venustiano Carranza;8g068q3in
Veracruz;8fa6gy3in
Xalapa de Enríquez;8g96es3in
Nuevo Laredo;92c67k3fm
Azcapotzalco;8g568h3im
San Nicolás de los Garza;8xi65e3lm
Tonalá;8ja5x83im
Ojo de Agua;8go68z3im
Benito Juárez;8ft68k3im
Xico;8fj6953im
Iztacalco;8fw68q3im
Mazatlán;8qi5oe3gm
Irapuato;8jf62g3im
Miguel Hidalgo;8fz68g3im
Benito Juarez;8fw68k3im
Tapachula;83f6rq3hm
Villahermosa;8bz6pu3hm
Celaya;8j063z3im
Cuernavaca;8el68d3im
Tepic;8lr5sn3gm
Ciudad Victoria;8ry68m3lm
Soledad de Graciano Sánchez;8nn63m3im
Ciudad Obregón;92d5em2zm
Ixtapaluca;8fo69c3im
Coatzacoalcos;8cf6lo3im
Tampico;8nx6c43lm
Ciudad Benito Juárez;8x965z3lm
Tláhuac;8fl68z3im
Santa Catarina;8xb64y3lm
Uruapan;8fy60i3im
Cholula;8ey6ay3im
Nicolás Romero;8gk6853im
Zumpango;8h068q3im
Coacalco;8gj68p3im
Nogales;9cz5bu2zm
Gómez Palacio;8x15wi3lm
Los Mochis;8xn5h83gm
Pachuca de Soto;8hw69r3im
Oaxaca;89e6fb3im
La Paz;8t25dl3gm
Colonia del Valle;8fv68k3im
Tehuacán;8da6dg3im
Magdalena Contreras;8fp68f3im
Puerto Vallarta;8ja5rp3il
Campeche;8h46wk3hl
Buenavista;8gh68j3il
Ciudad Acuña;97g63l3fl
San Cristóbal de las Casas;88h6qo3hl
Jiutepec;8eg68i3il
Monclova;90r62a3ll
Córdoba;8eg6er3il
Cabo San Lucas;8pl5ep3gl
Ciudad Madero;8nt6c83ll
Ciudad Lázaro Cárdenas;8bw6043il
Ciudad del Carmen;8dt6sx3hl
Chilpancingo;8ar67m3il
Zamora de Hidalgo;8hi5zv3il
Poza Rica de Hidalgo;8j16da3il
Cuautitlán;8gn68i3il
San Luis Río Colorado;9g65172zl
San Miguel de Allende;8k46463il
Chicoloapan;8fy69a3il
Guadalupe;8p75z83il
Chetumal;8dg72q27l
Chalco;8fi69a3il
Cuauhtémoc;94x5n52cl
Comitán;8746s23hl
Salamanca;8j562w3il
Delegación Cuajimalpa de Morelos;8ft6873il
Manzanillo;8f45u63il
Tuxtepec;8c96gz3il
Cuautla;8e96963il
San Pablo de las Salinas;8gn68r3il
San Martin Texmelucan de Labastida;8fk6ak3il
Piedras Negras;95q64s3fl
Playa del Carmen;8jb76427l
Ciudad Delicias;94b5r12cl
Colima;8fg5vx3il
Fresnillo;8qd5y93il
San Juan del Río;8in6683il
San José del Cabo;8q15fa3gl
San Pedro Garza García;8xa6543lk
Zacatecas;8p95z23ik
Huixquilucan;8fs6813ik
Ciudad Valles;8n468z3ik
Orizaba;8ed6ea3ik
Miramar;8o46c23lk
Iguala de la Independencia;8cz67i3ik
Ciudad de Villa de Álvarez;8fj5vu3ik
Heroica Guaymas;93k5by2zk
Navojoa;9175g02zk
Minatitlán;8c06lc3ik
Ciudad Guzmán;8gq5wm3ik
Yautepec;8eg68t3ik
Texcoco de Mora;8g769c3ik
Hidalgo del Parral;90t5qh2ck
Teziutlan;8h26dk3ik
Tepexpan;8gh6963ik
Tulancingo;8hs6as3ik
Apatzingán;8f15zo3ik
Rosarito;9fw4uv4gk
Colonia Lindavista;8g568o3ik
Lagos de Moreno;8lc60v3ik
Temixco;8ed68d3ik
Ciudad Río Bravo;8y76bj3lk
Amozoc de Mota;8ex6bo3ik
García;8xo64l3lk
Tepatitlán de Morelos;8ju5yk3ik
Cárdenas;8c06om3ik
Heroica Ciudad de Juchitán de Zaragoza;87n6k23ik
Hacienda Santa Fe;8j05wu3ik
Atlixco;8ej6ak3ik
Paraiso;8d46p33ik
Tecomán;8ek5vg3ik
Los Reyes Acaquilpan;8fs6923ik
Ciudad Mante;8p66933lk
Túxpam de Rodríguez Cano;8k86df3ik
Tlaxcala;8fo6b43ik
Salina Cruz;86y6jl3ik
Heróica Zitácuaro;8g06583ik
Ocotlán;8ij5yj3ik
La Piedad de Cabadas;8ii60m3ik
Tepeji del Río de Ocampo;8ha6823ik
Lerdo;8wy5wg3lk
Matehuala;8rp64g3ik
Agua Prieta;9d05fq2zk
Kanasín;8k56z83hk
Cozumel;8iy76i27k
Silao de la Victoria;8k66293ij
Fuentes del Valle;8gj68m3ij
Guamúchil;8wq5js3gj
Guanajuato;8ke62q3ij
El Pueblito;8j26503ij
Guasave;8x15ip3gj
San Francisco del Rincón;8ke6123ij
Santa María Chimalhuacán;8fy6953ij
Linares;8v267f3lj
Frontera;90t6273lj
Cadereyta Jiménez;8x36683lj
Valle de Santiago;8in62x3ij
Cadereyta;8x266a3lj
San Mateo Atenco;8fj67j3ij
Santo Domingo Tehuantepec;87c6jg3ij
Montemorelos;8vz66p3lj
Ixtapa-Zihuatanejo;8b061x3ij
Dolores Hidalgo;8ks63n3ij
Santa Cruz Xoxocotlán;89b6fa3ij
Ramos Arizpe;8wy63l3lj
Tultepec;8go68n3ij
Tecate;9gh4w14gj
Sahuayo de Morelos;8hq5yo3ij
Puerto Peñasco;9d054m2zj
San Francisco Tesistán;8js5wk3ij
San Andrés Tuxtla;8d96jj3ij
Cortazar;8iw63k3ij
San Salvador Tizatlalli;8fi67d3ij
Ciudad Hidalgo;8gp64o3ij
Martínez de la Torre;8hr6ee3ij
Villa Vicente Guerrero;8f46bb3ij
Colonia Nativitas;8fu68m3ij
Heroica Caborca;9bc58g2zj
Altamira;8o76by3lj
Acámbaro;8hn6483ij
Huauchinango;8i16bn3ij
Nuevo Casas Grandes;9ai5k92cj
Pátzcuaro;8g761r3ij
Sabinas;93e6343lj
San Bernardino Tlaxcalancingo;8ev6b03ij
Zinacantepec;8fk66z3ij
Jacona de Plancarte;8hg5zt3ij
Jardines de la Silla;8x765p3lj
Santiago Teyahualco;8gm68o3ij
Coatepec;8g16eo3ij
Papantla de Olarte;8it6do3ij
Rioverde;8mx6693ij
Ciudad de Huajuapan de León;8bh6ce3ij
Matamoros;8wx5x93lj
Arandas;8jj5zp3ij
Huamantla;8fn6bz3ij
Uriangato;8hy62y3ij
Teoloyucan;8gu68i3ij
Acayucan;8bv6kd3ij
Taxco de Alarcón;8dj67b3ij
Zacapu;8h26193ij
Pijijiapan;85l6p33ij
Polanco;8fz68g3ij
San Luis de la Paz;8l664t3ij
Apizaco;8fx6be3ij
Emiliano Zapata;8ec68i3ij
Valladolid;8jh7303hj
Valle Hermoso;8xb6cb3lj
San Pedro;8xk5xy3lj
San Juan de los Lagos;8l15zr3ij
Colonia del Sol;8pn5en3gj
Santa Ana Chiautempan;8fn6b93ij
Tierra Blanca;8d96gc3ij
Tlapa de Comonfort;8ar6a63ij
Tizimín;8kq7353hj
Autlán de Navarro;8gx5u33ij
Chiapa de Corzo;88f6pn3ij
San Buenaventura;8fm69e3ij
Purísima de Bustos;8kf6103ij
Tizayuca;8h46923ij
Moroleón;8hx62x3ij
Jerez de García Salinas;8ox5xx3ij
Jesús María;8n05zq3ij
Palenque;8an6si3hj
Izúcar de Matamoros;8do6ai3ij
Las Choapas;8br6mm3ij
Empalme;93o5c72zj
Cintalapa de Figueroa;88c6no3ij
Juventino Rosas;8jc63g3ij
Zacatelco;8fe6b43ii
Ocosingo;88z6s73ii
Comalcalco;8cq6p23hi
San Pedro;8wn5xa3li
Ciudad Constitución;8vj59u3gi
Loma Bonita;8cb6ho3ii
Pánuco;8n96ba3ii
Río Blanco;8eb6e43ii
Santa Rosalía de Camargo;92w5rv2ci
Cihuatlán;8fg5tj3ii
Pénjamo;8ir61g3ii
Huejutla de Reyes;8kq6am3ii
San Andrés Cholula;8ex6ay3ii
Xicotepec de Juárez;8ic6bw3ii
Umán;8k06yp3hi
San José del Castillo;8iz5x83ii
Los Reyes de Salgado;8gf5zd3ii
Ocozocoautla de Espinosa;88k6on3hi
Esperanza;92m5en2zi
Melchor Ocampo;8gq68m3ii
Nueva Rosita;93m62u3li
Tepotzotlán;8gs68e3ii
Las Guacamayas;8c26033ii
Perote;8gc6dw3ii
Paracho de Verduzco;8gl60j3ii
Progreso;8l46yy3hi
Villaflores;8736ox3ii
Salvatierra;8i663s3ii
Santa Teresa;8h468d3ii
Santiago;8wn65t3li
San Jerónimo Cuatro Vientos;8fl69g3ii
Ameca;8j35uz3ii
Agua Dulce;8ce6mh3ii
Xalisco;8lk5sm3gi
Coyotepec;8gy68f3ii
Ciudad Mendoza;8e96e23ii
Tala;8jd5vy3ii
San Martín Azcatepec;8gp6933ii
Tlapacoyan;8hg6dz3ii
Tonalá;86p6nl3ii
La Barca;8id5z63ii
San Pablo Autopan;8fs6763ii
Ciudad Melchor Múzquiz;93g6203li
Ixmiquilpan;8iw68e3ii
Fraccionamiento Real Palmas;8xy65s3li
San Miguel Topilejo;8fc68m3ii
Maravatío de Ocampo;8h96503ii
José Mariano Jiménez;91d5sk2ci
Pórticos de San Antonio;9g44ux4gi
Coatzintla;8ix6d93ii
Parras de la Fuente;8wo6063li
San Isidro;8fq6953ii
Zacatlán;8he6bw3ii
Calpulalpan;8gf6a73ii
Ciudad Sabinas Hidalgo;8zm65q3li
Río Grande;8s75xt3ii
Ticul;8io6zb3hi
Jáltipan de Morelos;8bx6kx3ii
Víctor Rosales;8pr5yq3ii
Tenosique;8aj6u23ii
Nueva Italia de Ruiz;8eu60f3ii
Zapotlanejo;8ja5xp3ii
Actopan;8ib6963ii
Macuspana;8bc6qs3ii
Centro Familiar la Soledad;8kq61d3ii
Huixtla;8426r63ii
Ciudad Fernández;8my6673ii
Amecameca;8f469n3ii
Cananea;9c25dm2zi
Huatusco;8f76en3ii
San José Guadalupe Otzacatipan;8fq67d3ii
Chilapa de Álvarez;8aw68j3ii
Champotón;8fq6w03hi
Miguel Alemán (La Doce);9645ac2zi
Escuinapa de Hidalgo;8pf5q63gi
Tantoyuca;8lb6b53ii
Cosamaloapan;8d16hw3ii
Puruándiro;8ht6203ii
Huatabampo;90j5fg2zi
San Agustín;8j35wl3ii
Tlajomulco de Zúñiga;8iv5wn3ii
Puerto Escondido;8626ed3ii
Tequisquiapan;8j066j3ii
San Miguel Ajusco;8fe68g3ii
Coyula;8je5x93ii
Pinotepa Nacional;87e6bn3ii
Escárcega;8dp6vx3hi
Marfil;8kc62n3ii
Santa Isabel;9gn4yz4gi
Cocula;8il5vm3ii
Tequila;8k05vk3ii
San Fernando;8v16bd3li
Navolato;8ut5ku3gi
Ixtapa;8jk5rr3ii
Tecamachalco;8eg6cj3ii
Pabellón de Arteaga;8nj5zw3ii
Ciudad Sahagun;8gy6a73ii
Tula de Allende;8hp6823ii
San Felipe;8lo62u3ii
Metepec;8fi67c3ii
San Sebastián el Grande;8j15wp3ii
Nuevo México;8jo5wo3ii
Berriozábal;88o6ox3hi
Ojinaga;9855tm3si
Ajalpan;8d26du3ii
Tultitlán de Mariano Escobedo;8gl68j3ii
Apaseo el Alto;8iu64i3ii
Rincón de Romos;8nr5zs3ii
San Francisco Acuautla;8fr69e3ii
Sanctorum;8f26b33ii
Catemaco;8d66jt3ii
Contla;8fp6bb3ii
Gabriel Leyva Solano;8xa5i83gi
Tuxpan;8gc5wu3ii
Tepeaca;8ep6c23ii
Abasolo;8it61z3ii
Huimanguillo;8bj6ol3hi
Moyotzingo;8fh6ao3ii
Villagrán;8iz63g3ii
Atotonilco el Alto;8j35z93ii
La Joya;9g44v04gi
Misantla;8hd6ez3ii
Sayula;8h85w83ii
Apan;8gr6aj3ii
Francisco I. Madero;8xl5x53li
Magdalena de Kino;9b35bs2zi
Teapa;8as6pt3hi
Las Pintitas;8j45x23ii
Río de Teapa;8bd6py3hi
Magdalena Atlicpac;8ft6953ii
Isla;8c36in3ii
San Jerónimo;8fk67d3ii
Reforma;8bm6p93hi
Ixtaczoquitlán;8ed6ee3ii
Apaseo el Grande;8j364b3ii
Santiago Papasquiaro;8vk5r63li
Ciudad de Allende;8w86663li
Ocoyoacac;8fj67q3ii
Acatzingo;8eq6ce3ii
Tecax;8i56zz3hi
Felipe Carrillo Puerto;8ge73f27i
Valente Diaz;8f86gq3ii
Huejotzingo;8f86an3ii
Tacámbaro de Codallos;8fg6263ii
Tejupilco de Hidalgo;8ei65t3ii
Valle de Bravo;8fc65v3ii
Mixquiahuala de Juarez;8i768f3ii
Ixtepec;8806ju3ii
Emiliano Zapata;8fq6933ii
Nanchital de Lázaro Cárdenas del Río;8c76lr3ii
Yuriria;8i56333ii
Ciudad Altamirano;8d064d3ii
Álamo;8k36co3ii
Cuautlancingo;8f16b13ii
Encarnación de Díaz;8lt6003ii
Hunucmá;8ke6yc3hi
San Francisco Cuaxusco;8fj67a3ii
Costa Rica;8ub5lp3gi
Zumpango del Río;8b167j3ii
Tamazunchale;8l269l3ii
La Isla;8do6gx3ii
Arriaga;8746n63ii
Jalostotitlán;8kt5ze3ii
San Antonio Tecómitl;8fe6913ii
Ébano;8nq6aq3ii
Loreto;8nv60p3ii
El Salto;8s25rc3li
Jiquilpan de Juárez;8hj5yo3ii
Licenciado Benito Juárez;8ui5la3gi
Ometepec;88d6an3ii
San Juan Ixtayopan;8ff6903ii
San Miguel el Alto;8kf5zk3ii
Miahuatlán de Porfirio Díaz;87d6fo3ii
Yurécuaro;8ii5zw3ii
Ciudad Serdán;8er6db3ii
Motozintla;84p6rr3hi
Teocaltiche;8lj5z33ii
Purépero de Echáiz;8hb60n3ih
Comonfort;8jk6443ih
Castaños;90f6293lh
Allende;8cf6lt3ih
Juan José Ríos;8xk5hq3gh
Teloloapan;8d166l3ih
San Martín Cuautlalpan;8fk69h3ih
San José Iturbide;8kc6553ih
Teotihuacán de Arista;8gp69e3ih
Ixtlán del Río;8kg5u33gh
Motul;8km7003hh
Jesús del Monte;8fu6873ih
Alvarado;8e56i03ih
Zacualtipán;8jd69y3ih
San Jorge Pueblo Nuevo;8fh6793ih
Oxkutzkab;8if6zm3hh
San Lorenzo Acopilco;8fp6833ih
Papalotla;8f96b83ih
Rodolfo Sánchez Taboada;9e44w74gh
Las Pintas de Arriba;8j65x03ih
Zapotiltic;8gj5wq3ih
Tixtla de Guerrero;8at67w3ih
Frontera;8di6qn3ih
Atlacomulco de Fabela;8h066k3ih
Manuel Ojinaga;9845ty3sh
Lerma de Villada;8fl67l3ih
Tequixquiac;8hb68m3ih
San Mateo Otzacatipan;8fp67c3ih
San Miguel Coatlinchán;8g169d3ih
Pedro Meoqui;94j5r02ch
El Salto;8ih5tq3ih
San José del Valle;8jo5rp3gh
Cosoleacaque;8c06l43ih
Cerro Azul;8kv6ci3ih
Nava;94y6433lh
Nogales;8eb6e43ih
Reyes Acozac;8gy6923ih
Playas del Rosario;8bl6pv3ih
Huetamo de Núñez;8dr63q3ih
Santa María Atzompa;89i6f63ih
Tenango de Arista;8f267d3ih
Chiconcuac;8gc69a3ih
Tuxpan;8my5ri3gh
Sombrerete;8rn5w43ih
Petatlán;8aq62p3ih
El Salto;8j05xe3ih
Chapala;8id5xd3ih
Zacatepec;8dt68h3ih
Atoyac de Álvarez;89t6513ih
Fortín de las Flores;8ej6ek3ih
Romita;8jz6203ih
Puente de Ixtla;8dp6843ih
San Pedro Totoltepec;8fn67f3ih
Xoxocotla;8dw68b3ih
El Grullo;8h15ui3ih
Acajete;8f36bx3ih
San Rafael;8fd69o3ih
Las Margaritas;87b6si3hh
Capulhuac de Mirafuentes;8fb67p3ih
Allende;94q63v3lh
Xonacatlán;8fx67j3ih
San Buenaventura;91661x3lh
Jaral del Progreso;8il63a3ih
Terrazas del Valle;9g94vh4gh
Santa Anita;8j35wo3ih
San Antonio de la Cal;89b6fe3ih
La Orilla;8c06013ih
Mezcales;8jl5rk1zh
Naranjos;8lb6cn3ih
Emiliano Zapata;8ba6t33ih
Ciudad Miguel Alemán;8zc68x3lh
Cunduacán;8c76p73ih
Peto;8hx7103hh
Calvillo;8mp5yo3ih
Altotonga;8gx6dv3ih
La Ermita;8kr61f3ih
Banderilla;8gf6eq3ih
Chignahuapan;8h46bp3ih
San Juan Zitlaltepec;8h168l3ih
Lomas del Sur;8ix5wq3ih
Pueblo Nuevo;8qy5rb3lh
Acatlán de Osorio;8ck6bn3ih
Xochitepec;8e668d3ih
Acaponeta;8oh5rc3gh
José Cardel;8ft6gb3ih
Matías Romero Avendaño;88w6k03ih
Jojutla;8dp68i3ih
Jocotepec;8id5wp3ih
Cuautepec de Hinojosa;8ho6ax3ih
Las Rosas;87h6rf3ih
Tamazula de Gordiano;8go5x73ih
Santa María Totoltepec;8fn67d3ih
Lerdo de Tejada;8dr6io3ih
Comalapa;85i6s23hh
Arcelia;8cw65g3ih
Xico;8fy6ej3ih
Juan Aldama;9645pt2ch
Santa Rosa Jáuregui;8jm64z3ih
San José de los Olvera;8j36523ih
Tlaquiltenango;8dr68k3ih
Parque Industrial Ciudad Mitras;8xn64z3lh
Milpa Alta;8fb68y3ih
Mitras Poniente;8xm6513lh
Santiago Ixcuintla;8ml5rr3gh
Tulum;8i575227h
Villa del Prado 2da Sección;9g24v34gh
Altepexi;8d16dq3ih
Zacoalco de Torres;8i75wb3ih
Coalcomán de Vázquez Pallares;8e65xg3ih
San Andrés Cuexcontitlán;8fs67a3ih
Chichén-Itzá;8jf71z3hh
Carlos A. Carrillo;8d16i13ih
Tres de Mayo;8ef68f3ih
Mapastepec;84v6py3ih
Santa María Ajoloapan;8gw6943ih
Don Antonio;8h76973ih
San José del Quince;8j25x43ih
Ixtapan de la Sal;8ec6743ih
Santiago Momoxpan;8ez6b13ih
Compostela;8l05sm3gh
Heroica Ciudad de Tlaxiaco;89z6co3ih
Axochiapan;8de69p3ih
Progreso de Alvaro Obregon;8i968h3ih
Ciudad de Huitzuco;8cu6833ih
Huilango;8go68a3ih
Tres Valles;8co6gy3ih
San Salvador El Seco;8f56cs3ih
Casa Blanca;8ew6bg3ih
Palmarito Tochapan;8ei6cs3ih
Jamay;8id5yp3ih
San Salvador Atenco;8gb6983ih
Ciudad Guadalupe Victoria;9fp50a4gh
Palaú;93h62a3lh
Tezoyuca;8gf6993ih
La Magdalena Tlaltelulco;8fk6b83ih
Salinas de Hidalgo;8ov61h3ih
Yecapixtla;8eg69e3ih
Zaragoza;8gx6d03ih
La Providencia Siglo XXI;8hq69s3ih
San Felipe;9c75104gh
Ozumba de Alzate;8ew69k3ih
Santa Rosa Treinta;8dy68i3ih
Los Reyes de Juárez;8en6cc3ih
Suchiapa;8866pe3hh
Anáhuac;91o65v3fh
Yajalón;89p6rj3ih
Ario de Rosales;8fd61h3ih
Cacahoatán;83n6s03ih
Nochistlán de Mejía;8lc5yb3ih
Hidalgo;8y564z3lh
San Francisco Tlalcilalcalpan;8fl66v3ih
Guadalupe Victoria;8tx5us3lh
San Antonio Acahualco;8fj66v3ih
Tlaltenango de Sánchez Román;8mi5x23ih
Tamuín;8n569m3ih
Lázaro Cárdenas;9at4xz4gh
Ampliación San Mateo;8gi68l3ih
Teolocholco;8fg6b93ih
Teopisca;87y6r53hh
Magdalena;8k35v63ih
Izamal;8k570q3hh
Medina;8kr61q3ih
Bucerías;8jo5re1zh
Santa Ana Xalmimilulco;8fd6aq3ih
San Francisco de los Romo;8nb5zx3ih
Tepatlaxco de Hidalgo;8f06bv3ih
Santiago Tulantepec;8ho6as3ih
Fraccionamiento Ciudad Olmeca;8cf6ld3ih
Juchitepec;8f269c3ih
El Rosario;8pv5pz3gh
San Rafael Tlanalapan;8fl6ah3ih
Vicente Guerrero;8rx5v63lh
Ciudad de Armería;8em5v83ih
Tecámac de Felipe Villanueva;8gr6933ih
Zinapécuaro de Figueroa;8h663x3ih
Santiago Tlacotepec;8ff6753ih
Jalpa de Méndez;8ci6pi3ih
La Cruz;8sg5n33gh
Zinacatepec;8cy6dv3ih
Tulantongo;8g969d3ih
Venceremos;8j36543ih
Libres;8g36cn3ih
Ahualulco de Mercado;8ji5v73ih
San Pablo Oztotepec;8fb68t3ih
Venustiano Carranza;87e6qw3ih
Las Delicias;9g14v64gh
Cárdenas;8n46783ih
Santiago Tuxtla;8db6ja3ih
Madera;9735jm2ch
Peribán de Ramos;8g85zi3ih
Juan Aldama;8th5wt3ih
San Mateo Huitzilzingo;8ff6973ih
Ayutla de los Libres;89468q3ih
Tuzantla;8fc64n3ih
Villa Independencia;8hq6ef3ih
Coscomatepec de Bravo;8ez6ef3ih
Tecámac;8gr6933ih
Tepeapulco;8gz6a93ih
Alborada Jaltenco;8gm68t3ih
Tepalcatepec;8fb5yb3ih
Villa Hidalgo;8m85z13ih
Puebla;9gh4zl4gh
Ciénega de Flores;8y365r3lh
Tetla;8g06bi3ih
Crucecita;85t6gy3ih
Técpan de Galeana;89u64h3ih
Tangancícuaro de Arista;8h96033ih
Xalatlaco;8fa67u3ih
Ocotlán de Morelos;88n6fg3ih
Alto Lucero;8k76dc3ih
=MY
Kuala Lumpur;76qlqh5qp;吉隆坡|쿠알라룸푸르|クアラルンプール|كوالالمبور|کوالالمپور|Gizlungzpoh|Kuala Lumpor|Kualalumpura|Kuala-Lumpuro|Kualae-Lumpur|Kouala Loumpou|Kvala Lumpuras|Kouala Loumpour|कुआलालम्पुर|क्वालालंपूर|Куалæ-Лумпур|Куала Лумпур|กัวลาลัมเปอร์
Johor Bahru;723lw85qo
Kampung Baru Subang;76rlq15qo
Petaling Jaya;76nlq95qo
Ipoh;7aqlos5qo
Shah Alam;76llq15qn
Subang Jaya;76glq65qn
Bukit Rahman Putra;76ylq45qn
Pelentong;728lwe5qn
Malacca;744ls05qn
Iskandar Puteri;71vlvu5qn
Kota Bharu;7f0ls05qn
Kuantan;78llv15qn
Kota Kuala Muda;7djlmt5qn
Sungai Petani;7dpln55qn
Selayang Baru Utara;771lqf5qn
Pasir Gudang;722lwn5qn
Mukim Pulai;729lvz5qn
Kota Kinabalu;7elmuf5rn
Kampung Larkin Lama;726lw65qn
Kota Damansara;76rlq65qn
Sandakan;7e8n045rn
Kuala Terengganu;7ctlui5qn
Taman Petaling;76wlqd5qn
Alor Setar;7f0lms5qm
Kampung Kangkar Teberau;729lw75qm
Kuching;72bmeh5rm
Puchong;76clqa5qm
Seremban;75llr65qm
Tawau;79smzh5rm
Setapak;76xlql5qm
Kluang;73nlv05qm
Muar;73olsx5qm
Miri;7a8mon5rm
Kapar;76plpm5qm
Batu Caves;770lqg5qm
Klang;76glps5qm
Kajang;76blqr5ql
Teluk Intan;796lom5ql
Kampong Baharu Cheras Batu Sebelas;76hlqp5ql
Pasir Mas;7etlrq5ql
Paya Terubong;7cxlmk5ql
Sungai Buloh;76xlq45ql
Bandar Seri Alam;726lwk5ql
Taiping;7bhlnt5ql
Wangsa Maju;76wlqm5ql
Bukit Mertajam;7cwln35ql
Sepang;75hlqn5ql
Bandar Sunway;76jlq95ql
Bandar Utama;76rlq95ql
Bukit Jalil;76hlqg5ql
Rawang;778lq65ql
Sibu;74emim5rl
Kuala Kubu Baharu;77wlqe5ql
Kulim;7cwlnc5ql
Skudai;72alvy5ql
George Town;7d1lmq5ql
Batu Pahat;735ltx5ql
Sitiawan;79qlnq5ql
Bintulu;76tmlz5rl
Bandar Tasik Puteri;775lpv5ql
Bercham;7awloy5ql
Setia Alam;76mlpu5ql
Bandar Bukit Raja;76llpr5ql
Kampung Pasir Gudang Baru;723lwk5ql
Kampung Sungai Glugur;7cxlmn5ql
Masai;725lwk5ql
Kampung Sungai Ara;7ctlmj5ql
Pasir Puteh;7e7lsg5ql
Cheras;76nlql5ql
Tasek Glugor;7d8ln65ql
Bayan Lepas;7cqlmi5qk
Seri Kembangan;76flqk5qk
Ampang;76rlqp5qk
Titiwangsa;76ulqi5qk
Bukit Bintang;76rlqj5qk
Port Dickson;750lqs5qk
Maran;77zlth5qk
Butterworth;7d0lms5qk
Lahad Datu;7byn0p5rk
Kuala Krai;7ddlrw5qk
Perling;724lw05qk
Ijok;778lpo5qk
Bandar Mahkota Cheras;76hlqs5qk
Sentul;76ulqg5qk
Seri Manjung;79olnn5qk
Taman Melawati;76xlqn5qk
Pagoh;73zlth5qk
Labuan;7coms55qk
Pendang;7eoln45qk
Bandar Kinrara;76hlqc5qk
Kuala Nerus;7cxlu65qk
Semenyih;767lqw5qk
Marudi;79mmpk5rk
Val Dor;7clln55qk
Kampung Manjoi;7aulor5qk
Kepong;76xlqc5qk
Damansara Damai;76wlq75qk
Kampung Sungai Kajang;77ilp15qk
Cukai;79tlva5qk
Parit Sulung;73ilts5qk
Cyberjaya;764lqe5qk
Putatan;7ehmue5rk
Donggongon;7efmui5rk
Keningau;7cumuo5rk
Ulu Tiram;72glwe5qk
Taman Senai;72glvw5qj
Bandar Saujana Utama;76xlpw5qj
Serendah;77clq85qj
Segamat;74zltm5qj
Kampung Baru Balakong;76flqn5qj
Yan Besar;7e4lmt5qj
Tanjong Malim;788lq05qj
Johor Jaya;72alwd5qj
Perai;7cylmu5qj
Taman Senawang Indah;75hlrb5qj
Gelang Patah;721lvr5qj
Kangar;7fwlmc5qj
Kulai;72mlvs5qj
Jelutong;7czlmo5qj
Jitra;7fflmy5qj
Semporna;7agn1h5rj
Kempas;72blw25qj
Parit;7agloc5qj
Kampong Sidam;7ddlnd5qj
Setia Tropika;72blw45qj
Ara Damansara;76olq75qj
Bukit Indah;724lvy5qj
Putra Heights;76blq55qj
Temerluh;77llsi5qj
Simpang Renggam;732luz5qj
Kampong Dungun;76ylpg5qj
Serian;719mf55rj
Simpang Empat;7brlnj5qj
Kuala Selangor;77blp95qj
Kampung Bukit Baharu;746ls55qj
Hulu Langat;76nlqt5qj
Bandar Labuan;7coms55rj
Bukit Tengah;7cvln05qj
Pandamaran;76dlpq5qj
Kota Tinggi;72ulwm5qj
Bau;71ymdz5rj
Padang Serai;7dblnb5qj
Kuchai Lama;76klqh5qj
Putrajaya;766lqh5qj
Sri Petaling;76jlqh5qj
Taman Melati;76ylqk5qj
Bentong Town;77slr35qj
Teluk Panglima Garang;763lpv5qj
Sungai Siput;7a7lp35qj
Niah;78qmnw5rj
Bandar Sri Damansara;76vlq95qj
Banting;75tlpy5qj
Bedong;7dxln75qj
Sri Aman;71hmhl5rj
Batu Gajah;7afloo5qj
Bangi;762lqq5qj
Elmina;76vlq05qj
Taman Permas Jaya;727lwe5qj
Kampung Perak;78rlsz5qj
Bandar Baharu;7c9ln65qj
Sarikei;73wmhs5rj
Durian Tunggal;74fls45qj
Mentakab;77plsb5qj
Rompin;75jlsq5qi
Taman Greenwood;76zlqi5qi
Pontian Besar;727lv65qi
Bentung;77tlr25qi
Nibong Tebal;7cdln45qi
Raub;78jlqy5qi
Bandar Tun Hussein Onn;76hlqo5qi
Bangsar;76plqf5qi
Bukit Gambir;745lt55qi
Taman Sri Sinar;76vlqd5qi
Kampong Pangkal Kalong;7eglry5qi
Lumut;79rlnj5qi
Kuala Kangsar;7b9lod5qi
Sipitang;7c4msz5ri
Bandar Country Homes;779lq15qi
Kampung Setia;770lq15qi
Klebang Besar;746lrw5qi
Kampung Baharu Nilai;75slqs5qi
Padang Rengas;7b9lo55qi
Kampung Alor Mengkudu;7exlmv5qi
Limbang;7b7mrh5ri
Kampung Ayer Keroh;74bls45qi
Taman Tun Dr Ismail;76rlqb5qi
Jawi;7ciln55qi
Betong;71wmhs5ri
Kamunting;7bklnt5qi
Petagas;7efmud5ri
Tangkak;74blsv5qi
Alam Damai;76ilqm5qi
Bukit Kerinchi;76nlqf5qi
Denai Alam;76slq05qi
Sibu Jaya;748mj15ri
Sungai Lalang;7duln75qi
Selama;7cilnp5qi
Dungun;7balva5qi
Jerantut;78ylsc5qi
Mukah;761mjd5ri
Gerisek;745ltb5qi
Kapit;73kmlp5ri
Sungkai;794lpg5qi
Sik;7e7lnv5qi
Kudat;7h5mwi5ri
Kawasan Penempatan Ulu Benut Lima;72ulv05qi
Kawasan Penempatan Ulu Benut Tiga;72vluw5qi
Kawasan Penempatan Ulu Sungai Benut;72vluw5qi
Taman Pelangi;74rlt85qi
Kampung Kerubong;74els15qi
Tatau;760mlh5ri
Pekan;77olv85qi
Bandar Nabawan;7c0mvf5ri
Bahau;75tlsg5qi
Kuala Kurau;7bylmz5qi
Taman Seremban Jaya;75glr95qi
Gerik;7d2lox5qi
Lahat;7amloo5qi
Mont Kiara;76tlqd5qi
Chemor;7b4low5qi
Bakri;73olt55qi
Kuah;7flllc5qi
Bidur;79glpc5qi
Taman Scientex;727lwo5qi
Taman Universiti;729lvu5qi
Tokai;7erlmx5qi
Gemas;756lt15qi
Sebauh;76ommn5ri
Rembau;757lrl5qi
Tambunan;7dwmvc5ri
Kampong Masjid Tanah;74jlro5qi
Tanah Merah;7e4lrr5qi
Beluru;792moy5ri
Hutan Melintang;78slod5qi
Tampin;74vlrz5qi
Ulu Kelang;76ulqp5qi
Sungai Dua;7d4lmz5qi
Tapah Road;79llp45qi
Parit Buntar;7c9ln55qi
Siburan;71tmeo5ri
Kubang Semang;7d0ln25qi
Permatang Kuching;7d6lmu5qi
Yong Peng;73llub5qi
Sungai Besar;787loj5qi
Lundu;72nmd55ri
Bandar Sri Sendayan;75flqz5qi
Sungai Udang;74blrq5qi
Lawas;7bimsl5ri
Taman OUG;76jlqg5qi
Cangkat Jong;793low5qi
SS2;76olqa5qi
Tebedu;70vmek5ri
Batu Berendam;749ls15qi
Bandar Puncak Alam;770lpr5qi
Taman Desa;76nlqh5qi
Jenjarum;75zlpx5qi
Kampung Jelutong Tengah;723lvp5qi
Kanowit;73umjj5ri
Kertih;7ajlvd5qi
Kuala Penyu;7dhmt45ri
Balik Pulau;7cvlmg5qh
Ladang Seri Kundang;775lq05qh
Pekan Nenas;727lvj5qh
Peringat;7erls45qh
Bandar Tun Razak;762ltt5qh
Kampung Tanjung Minyak;74blrw5qh
Simunjan;71umfn5rh
Bukit Tambun;7cnln25qh
Batu Arang;778lpv5qh
Kampung Sedenak;72rlvl5qh
Belaga;75imo25rh
Tanjung Sepat;75elq45qh
Batu Kurau;7btlo05qh
Mersing;74rlwg5qh
Batu Anam;756ltb5qh
Labis;74mlu65qh
Kampung Batu Empat;72ylwj5qh
Bandar Baru Salak Tinggi;75tlqm5qh
Kampung Teluk Kumbar;7cplmh5qh
Marang;7chlup5qh
Kuang;772lq35qh
Dalat;75fmjc5rh
Paka;7awlvc5qh
Bagan Serai;7bxlna5qh
Hulu Yam Lama;77llqc5qh
Maradong;73smi25rh
Alor Gajah;74mlrx5qh
Bukit Beruntung;77ilq45qh
Batang Berjuntai;77elpq5qh
Batu Feringgi;7d7lmh5qh
Desa Petaling;76klqj5qh
Kampung Hutan Arau;7fvlmk5qh
Kampung Selang;74jlts5qh
Pelabuhan Klang;76clpn5qh
Tropicana Indah;76qlq75qh
Selangau;750mk15rh
Bandar Putra Kulai;72llvv5qh
Gua Musang;7bklr95qh
Seminyih;767lqx5qh
Pokok Sena;7f5ln85qh
Sungai Jawi;7cgln55qh
Kuala Pilah;75mls15qh
Daro;750mhj5rh
Kampung Minyak Beku;730ltu5qh
Kampung Teluk Air Tawar;7d8lmu5qh
Ranau;7ejmw25rh
Papar;7dxmu15rh
Kampong Kadok;7eols15qh
Kuala Kedah;7eylmm5qh
Kuala Ketil;7dklnl5qh
Kampung Cheng;74alry5qh
Kawasan Perindustrian Cheng;74alrz5qh
Pulai;7dploa5qh
Kampar;79yloz5qh
Saratok;72tmh95rh
Kampung Baru Ulu Melaka;7fnll75qh
Changloon;7fvlmz5qh
Kampung Kupang;7dolo55qh
Horizon Hills;722lvx5qh
Relau;7ctlmk5qh
Glugor;7cxlmn5qh
Merlimau;73ylsj5qh
Seputeh;76olqg5qh
FELDA Chini;77dlty5qh
Lunas;7d3ln95qh
Teloi Kanan;7dwlnm5qh
Kampung Jeli;7dulqv5qh
Kampung Simpang Renggam;733luy5qh
Parit Raja;737luf5qh
Bukit Rambai;74alru5qh
Bukit Gemuroh;7cqlmd5qh
Kepala Batas;7dclmz5qh
Kampung Bertam Ulu;74dlrv5qh
Wakaf Baharu;7f0lrw5qh
Ayer Itam;7d0lmk5qh
Kampung Teluk Kemang;74ulqy5qh
Anak Bukit;7f6lmu5qh
Desa Parkcity;76vlqb5qh
Lukut;755lqv5qh
Kampung Tanjung Karang;77ilp25qh
Pantai Remis;7aelnj5qh
Padang Besar;7fqlmm5qh
Kampung Machap Baru;74mls95qh
Gurun;7e6ln35qh
Beaufort;7cvmtj5rh
Kinarut;7e6mud5rh
Kampung Ayer Molek;745ls95qh
Pengerang;71tlx75qh
Pakan;738mi85rh
Kuala Lipis;79mlrh5qh
Julau;73mmiw5rh
Bandar Tenggara;737lvu5qh
Engkilili;716mi75rh
=MZ
Maputo;4xvgei11o;マプト|马普托|마푸토|마푸투|Mabuto|Mabutu|Maputu|Kapfumo|Mapouto|Can Pfumo|Lourenco Marques|Мапуто|Мапуту|مابوتو|ماپوتو|मापुतो|มาปูโต
Matola;4xwge611o;マトラ|Матола|ماتولا|मातोला|Vila Salazar
Nampula;5s0gx311o
Beira;5ewgks11n
Chimoio;5gwgh011n
Tete;5p4ghb11m
Quelimane;5kcgqh11m
Lichinga;5x1glw11m
Nacala;5tkh1111m
Pemba;5xzh0k11l
Mocuba;5n8gqr11l
Gurúè;5r1gqq11l
Xai-Xai;50fghg11l
Maxixe;53qgm711k
Mandimba;5u5gn111k
Ressano Garcia;4zcgcw11k
Angoche;5oxgyv11k
Inhambane;53qgma11k
Cuamba;5swgpi11k
Montepuez;5xjgwc11k
Dondo;5fjgki11k
Chibuto;51fgh511j
Manhiça;4zggf511j
Chokwé;51vgfm11j
Mozambique;5s9h1511j
Nametil;5qcgxa11j
Monapo;5skgzy11j
Alto Molocue;5qkgsp11j
Marromeu;5j7gnv11j
Mocímboa da Praia;62hh0311j
Moatize;5p8ghp11j
Vilankulo;58wgm411j
Manica;5hfgfc11i
Gondola;5gzghh11i
Chiúre;5wugyi11i
Namialo;5skgz211i
Milange;5pagnd11i
Mutuáli;5spgqs11i
Macia;50hgfy11i
Songo;5qogf011i
Ribáuè;5sigug11i
Nhamatanda;5ghgj111i
Micolene;5njgwz11i
Mocímboa;62kh0311i
Boane;4xogdt11i
Mueda;61mgxv11i
Namapa-erati;5vxgyn11i
Catandica;5jugg511i
Massinga;557gma11i
Mossuril;5sfh0y11i
Morrumbala;5lvgmu11i
Xilembene;51fgge11i
Malema;5shgry11h
Macomia;5zzgzg11h
Namacurra;5lfgqv11h
Gorongosa;5i4gin11h
Caia;5kigm611h
Iapala;5s9gto11h
Murrupula;5r2gvg11h
Maganja;5lxgs711h
Chinde;5iegpa11h
Pebane;5m2gty11h
Búzi;5eugjr11h
Machipanda;5h9gey11h
Messica;5h9gfw11h
Ulongué;5t4gjg11h
=NA
Windhoek;57cf7g1fm
Rundu;5k8fex1fk
Walvis Bay;568f0b1fj
Swakopmund;570f0d1fj
Oshakati;5klf3m1fj
Rehoboth;558f7h1fi
Katima Mulilo;5lefrg1fi
Otjiwarongo;5d6f691fi
Ondangwa;5k9f4e1fi
Okahandja;58yf6y1fi
Grootfontein;5fnfaa1fi
Ongwediva;5knf3t1fi
Keetmanshoop;4w6fad1fh
Helao Nafidi;5lpf451fh
Tsumeb;5gjf971fh
Gobabis;57nfcp1fh
Katutura;57gf7e1fh
Ndiyona;5jwfhi1fh
Lüderitz;4vzf231fh
=NC
Nouméa;585qqd9kk
Mont-Dore;586qqp9ki
Dumbéa;58gqqe9kh
=NE
Niamey;7zje1v18o;ニアメ|尼亞美|니아메|Niame|Niamei|Niamej|Niameo|Niameja|Nijamej|Niamejus|نيامي|نیامی|Ниамей|Ніамей|नियामे|นีอาเม
Maradi;7ziefq18m
Zinder;80dekz18m
Tahoua;83dean18l
Agadez;895ei718l
Arlit;8e2egj18k
Alaghsas;89aeia18k
Birni N Konni;80ceal18k
Dosso;7y9e4v18k
Gaya;7v0e5l18j
Tessaoua;808ei718j
Diffa;7z0ev118j
Dogondoutchi;7zwe7718j
Méhana;81zdz518i
Dakoro;82bees18i
Téra;80xdy318i
Mirriah;803elf18i
Madaoua;813eck18i
Matamey;7zaejj18i
Magaria;7y4ekr18i
Tibiri;7zoefl18i
Nguigmi;81lewf18i
Youri Kourtéré;7z1e2918i
Tillabéri;81he0118i
Illéla;826eak18i
Abalak;84xedg18i
Tanout;83lekp18i
Ayorou;82xdyk18i
Gouré;80ueoj18i
Guidan Roumdji;7zyeem18i
Aguié;7zjehm18h
Mayahi;80sehb18h
Baléyara;80ae4718h
Tchin Tabaradèn;866ec418h
Kollo;7yye2i18h
Gazaoua;7zlehz18h
Birnin Gaouré;7yce4318h
Say;7yee2l18h
Maïné Soroa;7ypete18h
Filingué;81ve5818h
Madarounfa;7yzefw18h
Torodi;7yge1018h
=NF
Kingston;4pbqul9jc
=NG
Lagos;7fxe5f0ut;ラゴス|拉哥斯|라고스|라구스|Lagas|Laqos|Logos|Lagosa|Lagoso|Lagosas|Laguosos|Lacupolis|Lagos shaary|Лагас|Лагос|لاجوس|لاغوس|लागोस|เลกอส
Kano;7vcejo0ur;カノ|卡諾|카노|Cano|Kanas|Byen Kano|Кано|كانو|کانو|कानो
Ibadan;7iie6v0uq;伊巴丹|이바단|イバダン|Ібадан|Ибадан|إبادان|إيبادان|इबादान|Ibadana|Ibadano|Ibadanas|Impantan|Ibadan shaary
Abuja;7n6egu0uq;阿布賈|阿布贾|아부자|アブジャ|Abuca|Abudz|Abugo|Abuya|Abodza|Abouja|Abudza|Abugia|Abuzha|Abudzha|Ampouza|Абужа|Абуџа|آبوجا|yەbwwja|अबुजा|อาบูจา
Port Harcourt;7baefh0up;哈科特港|포트하커트|ポートハーコート|Ugwu Ocha|Port Harkurt|Port Kharkurt|Port Xarcourt|Port-Kharkort|Port Harkortas|pwrٹ ہarkwrٹ|بورت هاركورت|Порт Харкурт|Порт-Харкорт|पोर्ट हारकोर्ट
Kaduna;7r9ego0up;卡杜納|카두나|カドゥナ|Kadun|Kaduno|Кадуна|كادونا|کادونا|कादुना
Benin City;7fmebn0up;贝宁城|بنين|بنین|베닌시티|Benim|Benin|Beninas|Benin by|Beninborg|Beninurbo|Ilu Benin|Benin Siti|Benin-Sici|Benin-stad|Kota Benin|Benin-Stadt|Shakhri Benin|Magaalaa Benin|Magaalada Benin|Бенин|Бенин Сити|ベニンシティ|เบนินซิตี|बेनिन सिटी
Onitsha;7f3eev0up;奧尼查|오니차|オニチャ|Онича|Оніча|Onicha|Onicjo
Aba;7c7egh0uo;アバ|阿巴|아바|Аба|آبا|آبا، ابیا
Maiduguri;7uxewk0uo;邁杜古里|마이두구리|ميدغري|maydwګry|マイドゥグリ|मैदुगुरी|Maidiguri|Maidugari|Majduguri|Maiduguris|Маидугури|Майдугурі
Ilorin;7lme8m0uo;伊洛林|일로린|イロリン|الورن|الورین|Iloryn|Illorin|Ilorinas|Ілорын|Илорин|इलोरिन
Jos;7plekp0uo;乔斯|조스|Џос|Йос|جاس|جوس|जोस|ジョス|Dzos|Dzhos
Sokoto;7yaeak0uo;ソコト|索科托|소코토|Socoto|Sokotas|Sokoto stad|swkwٹw|سوكوتو|Сокото|सोकोटो
Zaria;7svehg0uo
Enugu;7fwegu0uo
Warri;7dcebz0uo
Oyo;7jte6x0un
Abeokuta;7hwe5b0un
Akure;7i5eaf0un
Bauchi;7qnenc0un
Agege;7gee590un
Katsina;7y3eh40un
Osogbo;7jle8o0un
Gombe;7qler10un
Ile-Ife;7ise8o0un
Ajegunle;7fxe590un
Owerri;7d8efj0un
Calabar;7bsej50un
Ebute Ikorodu;7gce5p0un
Okene;7izedc0un
Ikare;7ixebz0un
Yola;7nleuo0un
Uyo;7c1ei10un
Ado-Ekiti;7j6eai0un
Ogbomoso;7kle7s0un
Minna;7oqee70un
Lekki;7fxe5o0um
Bida;7n8ecp0um
Makurdi;7jhejo0um
Ondo;7hpe9g0um
Umuahia;7dcegt0um
Iseyin;7k5e600um
Gboko;7icel00um
Yenagoa;7bpedf0um
Ijebu Ode;7gye6w0um
Obalende;7fxe5i0um
Ilesa;7j7e960um
Ikeja;7gce5a0um
Akowonjo;7gde570um
Alimosho;7gde560um
Sapele;7edebs0um
Efon-Alaaye;7jae9o0um
Owo;7i0ebj0um
Ikot Ekpene;7ceehf0um
Ota;7gle4z0um
Iwo;7j8e7m0um
Jimeta;7nseum0um
Atani;7epeer0ul
Aliayabiagba;7fxe590ul
Gusau;7vteei0ul
Mubi;7qjewv0ul
Ikire;7ihe7n0ul
Shagamu;7h1e650ul
Ugep;7e5eig0ul
Chakwama;7u4emu0ul
Mushin;7g5e5b0ul
Nnewi;7eqef80ul
Surulere;7g2e5c0ul
Ise-Ekiti;7iqeb20ul
Ila Orangun;7kae9m0ul
Saki;7m3e5f0ul
Oshodi;7g8e5a0ul
Awka;7f9efn0ul
Ijero-Ekiti;7jqea30ul
Inisa;7jte810ul
Suleja;7niefy0ul
Ede;7jie8c0ul
Kisi;7n8e6p0ul
Shomolu;7g6e5d0ul
Irewe;7fue4q0ul
Gbongan;7ise830ul
Ejigbo;7jye7z0ul
Funtua;7u0egb0ul
Igboho;7mke6g0ul
Buguma;7b6ef20ul
Ikirun;7jze8z0ul
Abakaliki;7fkeij0ul
Okrika;7b6efo0uk
Amaigbo;7e3ehs0uk
Lafia;7llejo0uk
Gashua;7xreqo0uk
Modakeke;7iie7u0uk
Bama;7u0ey10uk
Ilobu;7jse8h0uk
Jalingo;7mperk0uk
Okigwe;7e7egf0uk
Offa;7kne940uk
Esuk Oron;7bceix0uk
Nsukka;7h2egk0uk
Nguru;7xsep20uk
Hadejia;7wlenw0uk
Ijebu-Igbo;7hde740uk
Uromi;7gmedl0uk
Birnin Kebbi;7wle7o0uk
Pindiga;7pqeqf0uk
Azare;7ufeob0uk
Nkpor;7f3eez0uk
Ikere-Ekiti;7iueaj0uk
Lafiagi;7mleb20uk
Alasia;7fze4t0uk
Kontagora;7qweb70uk
Kuje;7moeg30uk
Biu;7rhetv0uk
Olupona;7j4e7n0uk
Lere;7qvejt0uk
Wukari;7jven60uk
Igbo-Ora;7ine550uk
Emure-Ekiti;7ioeb60uk
Isieke;7fqeic0uk
Ifo;7gxe4w0uk
Igede-Ekiti;7jbea90uk
Effium;7gfeie0uk
Idanre;7hrea80uk
Potiskum;7ujeqs0uk
Keffi;7mlehv0uk
Makoko;7g2e5f0uk
Epe;7gae720uk
Gamboru;7wdezh0uk
Ogaminana;7j3eda0uk
Ihiala;7e9ef20uk
Ipoti;7jvea40uk
Lalupon;7ire7b0uk
Ughelli;7d9eco0uk
Bende;7dgeh70uk
Oke Mesi;7jqe9o0uk
Kafanchan;7omej10uk
Ikom;7elek70uk
Agulu;7eyefm0uk
Daura;7u3erp0uk
Numan;7oaetf0uk
Kagoro;7opejb0uk
Ode;7jnebv0uk
Igbo-Ukwu;7eqefi0uk
Aramoko-Ekiti;7jeea00uj
Igbara-Odo;7iuea20uj
Ozubulu;7ekef10uj
Aku;7gnegc0uj
Oyan;7kde990uj
Jega;7vye860uj
Asaba;7f8eep0uj
Ohafia-Ifigh;7dlehp0uj
Afikpo;7edei20uj
Apomu;7ife7m0uj
Fiditi;7jfe6w0uj
Orita-Eruwa;7j0e5k0uj
Eha Amufu;7giehk0uj
Malumfashi;7ureh60uj
Kaura Namoda;7wzeeb0uj
Enugu-Ukwu;7f5efh0uj
Idah;7hreeq0uj
Obonoma;7b3eev0uj
Agbor;7fded70uj
Ezza-Ohu;7fweig0uj
Uga;7eiefo0uj
Nkwerre;7e0efq0uj
Auchi;7hnede0uj
Lokoja;7joeeq0uj
Ekpoma;7gqed20uj
Ijebu-Jesa;7jce9e0uj
Kabba;7jrecw0uj
Ilaro;7h5e4d0uj
Damaturu;7unet80uj
Argungu;7xee8l0uj
Gumel;7x3em30uj
Geidam;7xtet50ui
Talata Mafara;7wxecu0ui
Gummi;7vqea80ui
Otan Ayegbaju;7k3e9b0ui
Ogoja;7giekg0ui
Katsina-Ala;7hxels0ui
Igangan;7jce4u0ui
Itu;7cgei60ui
Kumo;7pxer50ui
Oke Ila;7k3e9u0ui
Eruwa;7iye5i0ui
Pankshin;7nxem80ui
Nasarawa;7lqehf0ui
Kachia;7pfei30ui
Dikwa;7vgeyo0ui
Moriki;7xree10ui
Patigi;7m9ec00ui
Wamba;7muejw0ui
Baro;7lyedu0ui
Okuta;7nme4w0ui
Birnin Kudu;7ttemc0ui
Badagry;7fue400ui
Ogwashi-Uku;7f6ee40ui
Eket;7awei00ui
Kamba;7uxe650ui
Daura;7y7ej40ui
Takum;7i7enq0ui
Igbeti;7mbe7h0ui
Zungeru;7p9ed30ui
Zuru;7tseaj0ui
Tegina;7pzed70ui
Awgu;7evegs0uh
Wudil;7utekk0uh
Nafada;7suerh0uh
Ibi;7kqen20uh
Sofo-Birnin-Gwari;7smeeu0uh
Dutsen Wai;7s5eis0uh
Kaiama;7ope6y0uh
Ubiaja;7giedq0uh
Otukpa;7hqeha0uh
Oguta;7dveex0uh
Damboa;7t0evg0uh
Jebba;7nce9e0uh
Garko;7qaer00uh
Mokwa;7ntea10uh
Gaya;7uyel00uh
Tambuwal;7whe8x0uh
Elele;7c6eex0uh
Monguno;7x7ext0uh
Kwale;7dvedv0uh
Gembu;7gpera0uh
Obudu;7gjelg0uh
Gombi;7q9eve0uh
Magumeri;7vnevn0uh
Degema Hulk;7b8eer0uh
Enugu-Ezike;7heegq0uh
Kari;7t9epc0uh
Darazo;7skeox0uh
Rano;7u4eju0uh
Kiyawa;7uqemp0uh
Deba;7qdern0uh
Igbor;7ipejx0uh
Babana;7qze6l0uh
Egbe;7kuebb0uh
Gwadabawa;7z4eak0uh
Beli;7jueqh0uh
Illela;805eaq0uh
Iyesi;7gie4u0uh
Dutse;7uoely0uh
Dukku;7s2epx0uh
Bonny;7adefx0uh
Bode Saadu;7mue9a0uh
Rijau;7sueam0uh
Kumagunnam;7yjepj0uh
Ijoko;7gqe520uh
Lapai;7n4ee90uh
Burutu;7cvebb0uh
Gwarzo;7v4ei10uh
Kukawa;7xwexp0uh
Akwanga;7mrejd0uh
Biliri;7pfer70uh
River Atuwara;7gke4q0uh
Iperu;7h7e670uh
Gwaram;7tceng0uh
Soba;7sieie0uh
Marte;7wdeyf0uh
Ibeto;7r5eab0uh
Bukuru;7p7ekm0uh
Anchau;7sgejb0uh
Ado-Odo;7gce460uh
Ganye;7lfeth0uh
Gwoza;7ssey20uh
Ajaokuta;7j0eeh0uh
Doma;7lbej80uh
Isanlu-Itedoijowa;7kzec80uh
=NI
Managua;7vp78f3bo
León;7wk76o3bl
Masaya;7v978u3bk
Chinandega;7x375z3bk
Matagalpa;7xx79c3bk
Estelí;7yd7843bk
Granada;7v57993bk
Mateare;7w077x3bj
Jinotega;7yd7943bj
El Viejo;7x675v3bj
Nueva Guinea;7uh7de3bj
Ciudad Sandino;7vs7863bj
Juigalpa;7vn7av3bj
Tipitapa;7vw78u3bj
Bluefields;7vd7fc3bj
Diriamba;7uy78g3bi
Ocotal;7zv77t3bi
Puerto Cabezas;8107gd3bi
Chichigalpa;7wx7693bi
Rivas;7ts79l3bi
San Rafael del Sur;7ux77w3bi
Jinotepe;7ux78k3bi
Boaco;7wn7a23bi
Nagarote;7w377k3bi
Jalapa;80o78s3bi
La Paz Centro;7wa7783bh
San Marcos;7v378k3bh
Masatepe;7v378q3bh
Nandaime;7uo78z3bh
Rama;7vs7e23bh
Somoto;7zg77i3bh
Corinto;7wo75v3bh
Río Blanco;7xx7ba3bh
Camoapa;7we7ah3bh
El Crucero;7vb7893bh
Siuna;8057ci3bh
Somotillo;7y876l3bh
=NL
Rotterdam;ay8e8g7co
Amsterdam;azhe9l7cn
The Hague;ayoe7y7cn
Utrecht;aypea87cm
Groningen;b1uee97cm
Eindhoven;awweb87cl
Tilburg;ax8ea57cl
Breda;axbe9a7cl
Nijmegen;ay0ec97cl
Almere Stad;azheah7cl
Haarlem;azie8w7cl
Arnhem;ayeecf7cl
's-Hertogenbosch;axmeaq7cl
Enschede;az2ef67cl
Zaanstad;azpe9d7cl
Amersfoort;ayweaz7cl
Apeldoorn;az1ecl7cl
Hoofddorp;azae917ck
Zwolle;azvecx7ck
Leeuwarden;b1sec57ck
Maastricht;av9ebt7ck
Leiden;aywe8h7ck
Dordrecht;axxe8z7ck
Zoetermeer;ayme8h7ck
Venlo;awped57ck
Deventer;az6ed47ck
Delft;ayhe847ck
Alkmaar;b07e977ck
Heerlen;avcecm7ck
Amsterdam-Zuidoost;azbe9t7ck
Hilversum;az2eae7ck
Hengelo;az7eev7ck
Purmerend;azue9s7ck
Lelystad;azveb87ck
Amstelveen;azae9i7ck
Roosendaal;ax5e8f7ck
Oss;axsebc7ck
Schiedam;ay8e877ck
Spijkenisse;ay0e817cj
Helmond;ax0ebq7cj
Vlaardingen;ay7e827cj
Almelo;azgeei7cj
Gouda;ayie937cj
Zaandam;azoe9f7cj
Alphen aan den Rijn;ayte8y7cj
Hoorn;b08ea27cj
Assen;b18ee87cj
Velsen-Zuid;azqe8x7cj
Ede;ayjebq7cj
Bergen op Zoom;ax2e7x7cj
Capelle aan den IJssel;ay9e8q7cj
Nieuwegein;ayjea47cj
Veenendaal;ayjebg7cj
Zeist;aypeaj7cj
Den Helder;b14e987cj
Hardenberg;b02eee7cj
Emmen;b0mef77cj
Oosterhout;axhe9i7cj
Doetinchem;aycedh7cj
Kerkrade;avbecu7cj
Leidsche Rijn;aypea17cj
Kampen;b00ecf7cj
Weert;awdebv7cj
Woerden;ayoe9k7cj
Sittard;avoecb7cj
Heerhugowaard;b0be9h7cj
Rijswijk;ayke817cj
Middelburg;ax2e617cj
Emmeloord;b0febz7cj
Zwijndrecht;axye8v7cj
Waalwijk;axkea37cj
Vlissingen;awwe5x7cj
Ridderkerk;ay3e8s7cj
Drachten;b1jecy7cj
Soest;ayxeap7cj
Roermond;aw7ecn7cj
Heerenveen;b14ecg7cj
Medemblik;b0lea77ci
Huizen;azaeak7ci
Tiel;ay5eb37ci
Harderwijk;azeebm7ci
Maarssen;ayuea07ci
Heemskerk;azve8z7ci
Venray;ax4ecm7ci
Hoogeveen;b0gee07ci
Barendrecht;ay2e8l7ci
Nijkerk;az2eb97ci
Voorburg;ayne847ci
Beverwijk;azse8y7ci
Goes;ax2e6t7ci
Zutphen;ayued87ci
Wageningen;aydebr7ci
Castricum;azze8z7ci
Barneveld;ayuebi7ci
Hoogvliet;ay2e847ci
Gorinchem;ay0e9t7ci
Uden;axiebm7ci
IJsselstein;ayiea07ci
Epe;azfecm7ci
Sneek;b1bebq7ci
Geleen;avlec77ci
Maassluis;ay8e7t7ci
Wijchen;axxebw7ci
IJmuiden;azqe8t7ci
Papendrecht;axze917ci
Nieuw-Vennep;az6e8v7ci
Oldenzaal;azbef97ci
Bussum;az7eac7ci
Valkenswaard;awneb67ci
Meppel;b0eed77ci
Ypenburg;ayke857ci
Bergen;b0be927ci
Winterswijk;aydeeo7ci
Boxtel;axbeat7ci
Brunssum;avjecl7ci
Leusden;ayteb37ci
Best;ax3eaz7ci
Krimpen aan den IJssel;ay8e8s7ci
Delfzijl;b25ef87ci
Veendam;b1jef47ci
Groot IJsselmonde;ay4e8n7ci
Dronten;azwebw7ci
Terneuzen;awme6n7ci
Geldrop;awuebg7ci
Rijssen;azbee47ci
Uithoorn;az4e9f7ci
Culemborg;aybeaj7ci
Dalfsen;azvede7ci
Zaltbommel;axxeak7ci
Zevenaar;ay9ecv7ci
Oisterwijk;axaeaf7ci
Leiderdorp;aywe8l7ci
Geldermalsen;ay4eap7ci
Heemstede;azfe8u7ci
Beuningen;ay2ec17ci
Duiven;aybecp7ci
Dongen;axfe9q7ci
Wassenaar;ayve887ci
Veghel;axeebf7ci
Wierden;azgeeb7ci
Waddinxveen;ayle8x7ci
Ommoord;ayce8n7ci
Vught;axheap7ci
Hoensbroek;avgech7ci
Nijverdal;azgedz7ci
Baarn;az1eap7ci
Noordwijk-Binnen;az3e8c7ci
Diemen;azee9s7ci
Assendelft;azre967ci
Heiloo;b04e917ci
Haaksbergen;ayweeq7ci
Borne;azaeer7ci
Sliedrecht;axye9a7ci
Steenbergen;axae807ch
Oud-Beijerland;axye897ch
Bilthoven;ayteag7ch
Schijndel;axeeb37ch
Nuenen;awzebf7ch
Putten;az6ebl7ch
Loon op Zand;axfea47ch
Scheveningen;ayqe7w7ch
Aalsmeer;az6e987ch
Goirle;ax4ea37ch
Voorschoten;ayte8d7ch
Losser;az6efg7ch
Lisse;az6e8o7ch
Borssele;awue6d7ch
Urk;b0aebk7ch
De Meern;ayoea07ch
Volendam;azuea37ch
Hellevoetsluis;axze7h7ch
Elburg;azpec87ch
Hoogezand;b1oees7ch
Brummen;ayped47ch
Oegstgeest;ayye8f7ch
Hendrik-Ido-Ambacht;ay0e8w7ch
Geertruidenberg;axme9i7ch
Leerdam;ay5ea57ch
Elst;ay8ec87ch
Tubbergen;azleeu7ch
Tegelen;awmed27ch
Berkel en Rodenrijs;ayfe8g7ch
Raalte;azjedg7ch
Katwijk aan Zee;az0e887ch
Stadskanaal;b17efb7ch
Cranendonck;awiebj7ch
Vianen;ayfea57ch
Schagen;b0ne9c7ch
Huissen;ayaech7ch
Tongelre;awxebc7ch
Leek;b1oedq7ch
Lichtenvoorde;ayfee97ch
Nunspeet;aziec37ch
Wisch;ay9edu7ch
Bodegraven;ayoe977ch
's-Gravenzande;ayge7l7ch
Aalten;ay9eea7ch
Zeewolde;azdebe7ch
Nootdorp;ayle887ch
Benthuizen;ayoe8m7ch
Groesbeek;axueci7ch
Pijnacker;ayie8b7ch
Driebergen-Rijsenburg;ayleao7ch
Winschoten;b1mefj7ch
Hillegom;az9e8q7ch
Alblasserdam;ay3e8y7ch
Rhoon;ay2e8a7ch
Eersel;awoeas7ch
Bergeijk;awkeaw7ch
Rhenen;aycebh7ch
Didam;ayaed17ch
Weesp;azbea07ch
Naaldwijk;ayfe7p7ch
Velp;aygecl7ch
Middelharnis;axse7l7ch
Wijk bij Duurstede;aydeau7ch
Enkhuizen;b0eeap7ch
Glanerbrug;az2efd7ch
Steenwijk;b0ned07ch
Naarden;azaeac7ch
Sint-Oedenrode;ax9eb67ch
Zandvoort;azhe8l7ch
Korrewegwijk;b1vee97ch
Gennep;axmecl7ch
Bergschenhoek;ayfe8i7ch
Merenwijk;ayye8j7ch
Eibergen;ayqeeh7ch
Schiebroek;ayce8f7ch
Rijen;axbe9o7ch
Maaspoort;axpeaq7ch
Lindenholt;axzec37ch
Harlingen;b1peb27ch
Hoge Vucht;axde9b7ch
Gemert;ax8ebt7ch
Blerick;awped37ch
Staphorst;b09ed97ch
Sassenheim;az2e8k7ch
Velserbroek;azne8y7ch
Mijdrecht;az1e9i7ch
Boskoop;ayne8y7ch
Bennekom;aygebs7ch
Julianadorp;b0xe967ch
Badhoevedorp;azee9b7ch
=NO
Oslo;bkfepv88o;オスロ|奥斯陆|奧斯陸|오슬로|Osla|Oslu|Asloa|Ohoro|Oslas|Oslo osh|Kristiania|Christiania|Осла|Осло|اسلو|أوسلو|ओस्लो|ออสโล
Bergen;blreas88m
Trondheim;bu7eow88l
Stavanger;bhtebx88l
Kristiansand;bfjei888k
Drammen;bjyeoc88k
Lillestrøm;bkkeqp88k
Sandnes;bhheby88k
Fredrikstad;biieqd88k
Sandefjord;bi9eoe88j
Asker;bk7ep088j
Sarpsborg;bioeqv88j
Tønsberg;bineox88j
Ålesund;brjed388j
Skien;bihemp88j
Moss;bj3epm88j
Tromsø;cbhfco88i
Haugesund;bj1ean88i
Nesttun;blkeav88i
Porsgrunn;biaemu88i
Bodø;c4wezy88i
Arendal;bgeekd88i
Sola;bhlebp88i
Hamar;bmveqr88i
Lillehammer;bnsep388i
Horten;bj2ep488i
Ytrebygda;bljeao88i
Grimstad;bg2ejv88i
Kristiansund;btbehh88i
Larvik;bi1enw88h
Molde;bsaefw88h
Halden;bi8ern88h
Harstad;c94f5y88h
Levanger;bv3ere88h
Time;bh5ebu88h
Mo i Rana;c27eza88h
Tromsdalen;cbhfcu88h
Kongsberg;bjremt88h
Gjøvik;bmwepp88h
Stjørdalshalsen;bubeqd88h
Alta;ccdfon88h
=NP
Kathmandu;92ykh05np;加德滿都|카트만두|カトマンズ|کھٹمنڈو|كاتماندو|Catmandu|Kantipur|Katmando|Katmandu|Catmandum|Kantipura|Katemandu|Katmandoe|Katmandou|Katmanduo|Katmantou|Khatmandu|Kathmandau|Kathmandou|Катманду|काठमांडू|काठमाडौं|กาฐมาณฑุ|काठमाण्डू
Pokhara;94jkd95nn;पोखरा|पोखरा गाविस|पोखरा उपमहानगरपालिका
Bharatpur;92wkek5nm;भरतपुर|भरतपूर|भरतपुर  नेपाल
Pātan;92wkgz5nm
Birgañj;912kfs5nm
Biratnagar;8zikmf5nm;बिराटनगर|विराटनगर|बिराटनगर उपमहानगरपालिका
Dhangaḍhi̇̄;95qk3v5nl
Hetauda;927kg75nl;हेटौडा|हेटौंडा|हेटौंडा उपमहानगरपालिका
Janakpur;909kip5nl;जनकपुर|जनकपुर नगरपालिका|जनकपुर उपमहानगरपालिका
Butwāl;92xkbt5nl;बुटवल
Dharān;90hkmg5nl
Nepalgunj;93xk6q5nl
Birendranagar;95gk6q5nl;वीरेन्द्रनगर|वीरेन्द्रनगर नगरपालिका
Madhyapur Thimi;92wkh75nk;थिमि|मध्यपुर थिमि|मध्यपुर ठिमी नगरपालिका
Lahān;908kk85nk
Bhimdatta;96gk2q5nk;भिमदत्त
Triyuga;90fkku5nj
Inaruwa;8zxkm35nj
Rājbirāj;8zqkkz5nj
Banepā;92rkhk5nj;बनेपा|भोत नगरपालिका|बनेपा नगरपालिका
Siddharthanagar;92ekbt5nj
Gulariyā;94dk5z5nj
Chautārā;936ki35nj
Īṭahari̇̄;902kmf5nj
Panauti;92mkhk5nj
Ṭikāpur;959k5c5nj
Ki̇̄rtipur;92wkgw5nj;कीर्तिपुर|किपू नगरपालिका|कीर्तिपुर नगरपालिका
Chari̇̄koṭ;92vkj15ni
Tulsi̇̄pur;945k8m5ni
Dipayal;97ak4u5ni;दिपायल
Panauti̇̄;92mkhj5ni
Gaur;90ckgw5ni
Siraha;901kjh5ni
Tānsen;93fkc35nh
Jaleshwar;901kic5nh
Bāgluṅ;94jkc85nh
Khā̃dbāri̇̄;922km95nh
Dhankutā;90ykml5nh;धनकुटा
Wāliṅ;93qkco5nh
Dailekh;964k6z5nh
Malaṅgawā;90mkho5nh
Bhadrapur;8zqkop5nh
Amargaḍhi̇̄;97ek3u5nh
Dārchulā;98vk3r5nh
Ilām;90rko95nh
Dhulikhel;92qkhm5nh;धुलिखेल|धुलिखेल नगरपालिका
=NR
Yaren;6whqrp9hc
=NU
Alofi;5h30s09ib
=NZ
Auckland;43nrdg98p;오클랜드|Oklan|Okland|Oklant|Oklend|Aucland|Oklenda|Auklando|Awklanda|Oklandas|Aucopolis|Tamaki-makau-rau|آکلند|aklynڈ|ऑकलंड|ऑक्लैण्ड|Окланд|Окленд|オークランド|奧克蘭都會區|โอคแลนด์
Christchurch;3l3r7j98m
Wellington;3rbrdi98m
Manukau City;439rds98m
North Shore;43srdf98m
Hamilton;412rew98l
Tauranga;41brhd98l
Dunedin;3elr1m98k
Lower Hutt;3rirdw98k
Palmerston North;3twrft98k
New Plymouth;3xhrbk98k
Hastings;3vwrj998k
Napier;3wbrjf98j
Rotorua;402rhl98j
Porirua;3rrrdp98j
Invercargill;3d4qvn98j
Papatoetoe;43brdo98j
Nelson;3rdr9c98j
Whangarei;46rrc898j
Whanganui;3v3re998j
Upper Hutt;3rqre998j
Manurewa;436rds98i
Gisborne;3ynrmg98i
Papakura;432rdy98i
Rolleston;3kyr6u98i
Paraparaumu;3scre698i
Blenheim;3qorb798i
Timaru;3ior3p98i
Masterton;3s8rfy98i
Mangere East;43brdm98i
Remuera;43krdk98i
Taupo;3ykrh498i
Avondale;43krda98i
Otara;43drdr98i
New Lynn;43hrd998i
Mangere;43brdk98h
Massey;43ord198h
Massey East;43prd298h
Ashburton;3k2r5198h
Pukekohe East;42ordz98h
Wainuiomata;3rdrdz98h
Stoke;3r8r9798h
Epsom;43jrdh98h
Richmond;3r7r9298h
Levin;3t5rew98h
Rangiora;3lqr7e98h
Henderson;43krd298h
Whakatane;40krjn98h
Otahuhu;43erdo98h
Lincoln;43mrd298h
Te Atatu South;43mrd598h
Takanini;434rdx98h
Mount Eden;43krdg98h
Titirangi;43erd698h
Karori;3rcrde98h
Hamilton East;411rex98h
Te Atatu Peninsula;43ord598h
Cambridge;40srfc98h
=OM
Muscat;8riie95xo;مسقط|مۇسكات|مەسقەت
Seeb;8rridn5xn;السيب|السيب الجديدة
Bawshar;8riie85xm;بوشر
‘Ibrī;8qji905xl;والاية عبري
Şalālah;89ai295xl;سلالة|صلالة|صلاله
Şaḩam;8t5ia15xl
Rustaq;8qzibi5xk;الرستاق
Sohar;8tni9j5xk;صحار|ولاية صحار
As Suwayq;8s9ibk5xk;السويق
Barkā’;8rsict5xk;بركاء
Samā’il;8qqicz5xk;سمائل
Al Buraymī;8tdi6z5xj;البريمي
Nizwá;8ppibt5xj;نزوى
Sur;8opihd5xj;صور|صور، عمان|ولاية صور
Qurayyāt;8qmifo5xj;قريات
Bahlā’;8puib65xj;بهلاء
Al Khābūrah;8slial5xj;الخابورة
Shināş;8uqi8v5xj;شناص
Sufālat Samā’il;8qsid65xj
Izkī;8ppich5xi;إزكي
Liwá;8u5i945xi;لوى
Ibrā’;8p1iel5xi;إبراء|ابراء
Bidbid;8r1idh5xh
Badīyah;8odifc5xh
Khasab;8yqi895xh;خصب|خصب، عمان|ولاية خصب
Adam;8o6ibt5xh;أدم
Yanqul;8rji925xh;ينقل
=PA
Panama City;7mz7r43tm
San Miguelito;7n57r93tm
Juan Díaz;7n47rc3tk
David;7lf7j13tk
Colón;7o07q23tk
Arraiján;7mu7qs3tk
Las Cumbres;7n97r23tj
La Chorrera;7mo7qe3tj
Pedregal;7n77rd3tj
Tocumen;7n97ri3tj
Santiago de Veraguas;7ki7n23tj
Parque Lefevre;7n27r83ti
Chilibre;7nf7qu3ti
Cativá;7o07q93ti
Río Abajo;7n27r73ti
Nuevo Belén;7n97rh3ti
Ancón;7mw7r13th
Alcalde Díaz;7nc7r03th
El Chorrillo;7mv7r13th
Changuinola;7o77is3th
La Cabima;7nc7r33th
La Concepción;7lo7ii3th
Pedregal;7la7j13th
Veracruz;7mp7qu3th
Curundú;7mx7r13th
Penonomé;7lo7os3th
Sabanitas;7nz7qb3th
=PE
Lima;60k7y137s;リマ|利馬|리마|Lime|Limo|Limae|Limaq|Limma|Lioma|Лимæ|Лима|لىما|ليما|लिमा|लीमा|ลิมา
Callao;60j7xr37o;カヤオ|卡亞俄|카야오|Каяо|Каляо|کلاؤ|كاياو|Kajao|Kalao|Kaljao|Kallao|Kallaw|Kalyao|Kal'jaa|Kal'jao|El Callao|कल्लाओ
Arequipa;5og8da37o;アレキパ|阿雷基帕|아레키파|Arekip|Arecipa|Arekipa|Arekipo|Arikipa|Ariqipa|Arehkipa|ارکیپا|أريكيبا|Арекипа|Арекіпа|अरेकिपा|अरेक्विपा|อาเรกีปา
Trujillo;6bg7sh37o;特鲁希略|트루히요|تروخیو|ٹrwjylw|トルヒーリョ|Трухійо|Трухилло|Troxillo|Truhillu|Trukhijo|Trukhil'o|Trukhiljo|Trukhillo|Turgalium|Truchiljas|Trukhil'jo|त्रुजिल्लो
Piura;6jm7ny37n
Chiclayo;6f77q737n
Huancayo;60h83337n
Cusco;5wf8c337n
Iquitos;6nl88j37m
Pucallpa;6aq84x37m
Chimbote;68s7tp37m
Tacna;5jz8gv37m
Ica;5uw81n37m
Santiago de Surco;60a7y337m
Juliaca;5qy8h737m
Cajamarca;6e47ty37l
Huánuco;66f80837l
Miraflores;60d7y137l
Santa Anita - Los Ficus;60j7y737l
Sullana;6ke7nv37l
Chincha Alta;5wr80j37l
Ayacucho;5xg85u37l
San Martin;6jl7nx37k
Puno;5q08hi37k
Huaraz;67j7wn37k
San Francisco De Borja;60f7y437k
Talara;6la7m937k
Tumbes;6o47ok37k
Chosica;60u7yx37k
Puerto Maldonado;5z18js37k
Breña;60i7xz37k
San Juan;6ni88g37k
Ciudad Satelite;5od8db37k
Chilca;60f83337j
Selva Alegre;5oj8db37j
Abancay;5w589k37j
Moquegua;5m88ey37j
Chulucanas;6jv7pc37j
San Isidro;60e7y037j
San Fernando;6ao84y37j
Jesus Maria;60h7y037j
Santiago;5wf8c237j
Huaral;6227xj37j
Pisco;5vx80b37j
Villa Poeta José Gálvez Barrenechea;6037yd37j
San Miguel;5r08h837j
Wanchaq;5wg8c337j
Cerro de Pasco;64d80737j
Belen;6nk88j37j
Catacaos;6jd7nw37j
Paita;6jv7mp37j
Huacho;6347wf37j
Ilo;5l18du37j
Tingo María;68680w37j
Jaén;6i57t337j
Tarma;62a81r37j
Moyobamba;6h97y737j
Huancavelica;5yh83r37j
Centenario;67k7wn37j
Cono Norte;5oo8d637j
Barranca;6457vz37j
Jacobo Hunter;5oc8d937j
Lambayeque;6fe7q137j
Picsi;6fc7qf37j
Chepén;6dy7re37i
Carmen De La Legua Reynoso;60j7xu37i
Yurimaguas;6hm80k37i
Saña;6es7qy37i
Tambopata;5yt8jc37i
Juanjuí;6e27yv37i
Barranco;60a7y237i
La Unión;6j07nq37i
Ferreñafe;6fk7qd37i
Sicuani;5ud8e537i
La Oroya;62081637i
Chocope;6cd7ry37i
Imperial;5xq7zx37i
Nuevo Imperial;5xo80037i
Chachapoyas;6gp7vp37i
Tambo Grande;6kb7ou37i
La Rinconada;5td8j337i
Pacasmayo;6dg7qz37i
Tocache;6b97zg37i
Mollendo;5mq8bz37i
Chaupimarca;6537zm37i
Paramonga;64d7vt37i
La Peca;6if7u437i
Chancay;61v7xd37i
Hualmay;6367wf37i
Monsefú;6ex7q537i
Marcavelica;6kg7nt37i
San Vicente de Cañete;5xo7zt37i
Querecotillo;6kk7nz37i
Guadalupe;6dv7r837i
Quillabamba;5ya8a337i
Requena;6jy86v37i
Santa Ana;5y98a037i
Rioja;6h67xn37i
La Banda;6fz7zy37i
Laredo;6bj7so37i
Yanacancha;64d80637i
Yauri;5sx8dn37i
Nazca;5st83u37h
Yanacancha;65k7z337h
Sechura;6ik7ni37h
Moche;6bb7sj37h
Ayaviri;5sn8fx37h
Ilave;5pc8ih37h
Santiago de Cao;6bw7rw37h
Huamachuco;6cc7v537h
Paiján;6cj7rq37h
Jauja;61a82a37h
Contamana;6dn83m37h
Virú;6am7t937h
Huaura;6397wg37h
Bagua Grande;6i07u437h
El Pedregal;5ok8bh37h
Huanta;5y385r37h
Aguaytía;68w82937h
Santa Rosa;63o84037h
Uchiza;6ai7zm37h
La Breita;6m67nb37h
Andahuaylas;5w288537h
Mala;5yu7z537h
Zarumilla;6oa7p137h
Atalaya;64787437h
Camaná;5nu8a137h
San Martín de Pangoa;62985337h
San Pedro de Lloc;6dd7r637h
Huarmey;6617ux37h
Chongoyape;6fk7rh37h
San Clemente;5w180h37h
San Antonio;5m68ez37h
Pimentel;6f07pz37h
Satipo;62r84o37h
Minas de Marcona;5rr83d37h
Junín;63080x37h
Pátapo;6fb7qs37h
Bellavista;6ee7z937h
Coishco;68y7tm37h
=PF
Faaa;5l82cg9si
Papeete;5lb2cj9si
Punaauia;5l12cg9si
=PG
Port Moresby;67op8r9pm
Lae;6fcp8c9pk
Arawa;6gppw599i
Mount Hagen;6hqp0n9pi
Popondetta;69npbr9pi
Madang;6jip4z9pi
Kokopo;6lypmz9pi
Mendi;6gxoz29pi
Kimbe;6ilph29ph
Goroka;6h4p3v9ph
Wewak;6o5oyz9ph
Bulolo;6e0p7c9ph
Daru;68soxt9ph
=PH
Quezon City;82pn895wq;奎松市|Quezon|Kezonurbo|Keson-Siti|Kezon Siti|Quezon-Stadt|Ciudad Quezon|Lungsod Quezon|Кезон Сити|Кесон-Сити
Davao;7hnnkx5wp;ダバオ|达沃市|다바오|दवाओ|Davaa|Davao City|Davao Stad|Davao Lakanbalen|Даваа|Давао|دافاو|داواؤ
Caloocan;82pn815wp;加洛坎|칼로칸|カローカン|Kalukan|Kalookan|Caloocan City|Калукан|Калоокан
Manila;82kn825wp;マニラ|馬尼拉|马尼拉|마닐라|Manyl|Manilo|Menila|Mainile|Manilae|Manilla|Manille|Maynila|Manillah|Manila City|مانیل|مانىلا|मनिला|मनीला|มนิลา|มะนิลา|Манилæ|Манила
Taguig;82cn8c5wo;Tagig|Santa Ana|Тагиг
Budta;7i0nho5wo
Malingao;7hwnhs5wo
Zamboanga;7h7nb35wo;三宝颜|삼보앙가|サンボアンガ|Замбоанга|Zamboanga City|Burleigh School|Zamboanga Lakanbalen
Cebu City;7qong55wo
Antipolo;82nn8g5wo
Pasig City;82jn8a5wo
Cagayan de Oro;7lkni95wn
Valenzuela;82un815wn
General Santos;7eznjp5wn
Paranaque City;828n865wn
Las Piñas;825n825wn
Calamba;81hn8l5wn
Muntinlupa;81zn895wn
Makati City;82fn875wn
Lapu-Lapu City;7qnngb5wn
Angeles City;843n6y5wn
Imus;823n7y5wn
Iloilo;7rqncg5wn
Marikina City;82pn8f5wn
Mandaluyong City;82in885wn
Bacolod City;7rnndj5wn
Mansilingan;7rjndm5wn
Dasmariñas;81tn7y5wn
Mandaluyong;82in885wn
Pasay;82en845wm
Tarlac City;850n705wm
Cotabato;7i2nh55wm
Malabon;82rn7y5wm
San Jose del Monte;835n895wm
Bacoor;826n7y5wm
San Pedro;81wn895wm
Cabanatuan City;851n815wm
Iligan;7kvnh45wm
Mandaue City;7qong85wm
Iligan City;7kxnhk5wm
Butuan;7mvnkq5wm
Cabuyao;81nn8h5wm
San Pablo;813n915wm
Biñan;81un8c5wm
Santol;844n6x5wm
Cainta;82in8g5wm
Baguio;87mn6z5wm
Malolos;838n7l5wm
Mantampay;7kpnh25wm
Bagong Silang;832n885wm
Marawi City;7k8nh85wm
Tacloban;7t8nj85wm
San Fernando;83rn785wm
Libertad;7munkm5wm
Navotas;82rn7z5wm
Ormoc;7slni55wm
Batangas;808n8a5wm
Magugpo Poblacion;7ipnlg5wl
Taytay;82gn8h5wl
Lucena;80pn9u5wl
Meycauayan;82yn805wl
NIA Valencia;7jznjh5wl
Puerto Princesa;7p2n1u5wl
Olongapo;837n645wl
Binangonan;826n8n5wl
Santa Rosa;81rn8f5wl
Commonwealth;82un8c5wl
Lipa City;80qn8k5wl
Panabo;7ibnl45wl
Kabankalan;7pqnd55wl
Toledo;7qunfg5wl
Pagadian;7jrnew5wl
Koronadal;7g2nit5wl
Bago City;7r9nd75wl
Panalanoy;7t9nj95wl
Mabalacat City;84an6x5wl
Sorsogon;7y1ngf5wl
Roxas City;7u7ncz5wl
Legaspi;7yinfq5wl
Concepcion;84ln765wl
Naga;7zune65wl
Dagupan;86kn695wl
Tuguegarao;8ayna45wl
Ilagan;89nnal5wl
Pandi;83an805wl
Capas;84ln6z5wl
Mariveles;823n6p5wl
Guyong;838n825wl
Urdaneta;86en6x5wl
San Jose;7wbn8b5wl
La Trinidad;87qn6z5wl
Norzagaray;83fn895wl
Gingoog;7mjnji5wl
Naga;7qdnfs5wl
Candelaria;80pn9a5wl
Baliuag;83jn7u5wl
Angono;82dn8j5wl
Rodriguez;830n8o5wl
San Mateo;82un8g5wl
San Juan;82kn875wl
Talisay;7qgng15wk
Muricay;7jrnf05wk
Bulaon;83wn765wk
Gapan;84jn7z5wk
Bayambang;85xn6m5wk
Cadiz;7sfneh5wk
Rosario;7zvn8q5wk
Pulong Santa Cruz;81nn8c5wk
Bayawan;7o0nd45wk
Santa Cruz;82kn825wk
Sultan Kudarat;7i3nh65wk
Poblacion;81yn865wk
Hagonoy;837n7d5wk
Tabuk;8ajn9f5wk
Tabuk;8adn8w5wk
Calumpit;83gn7h5wk
Apalit;83jn7h5wk
Plaridel;83dn7q5wk
Silang;81in815wk
Malita;7funkx5wk
Guiguinto;837n7s5wk
Manolo Fortich;7l9niu5wk
Midsayap;7hznhx5wk
Himamaylan;7q2ndb5wk
Los Baños;81dn8s5wk
Tacurong;7glnic5wk
Dinaig;7hxnh15wk
Digos;7grnk85wk
Cavite City;828n7u5wk
Tayabas;80zn9r5wk
Iriga City;7zbnet5wk
Quezon;7jhnji5wk
Dumaguete;7nvnej5wk
Carmona;81rn8a5wk
Laoag;8ckn705wk
Pulilan;83en7p5wk
Bayugan;7mcnld5wk
Maramag;7jknj95wk
Talisay;7rundl5wk
Santiago;88dn9n5wk
Santa Cruz;81on9a5wk
Catbalogan;7uqnix5wk
Bagong Silangan;82vn8f5wk
Paniqui;85jn6y5wk
Mati;7hcnmm5wk
Tanza;82sn7y5wk
Putatan;820n895wk
Isulan;7gfni45wk
Jolo;7etn845wk
Calasiao;86hn6c5wk
Bislig;7kunmw5wk
Bocaue;834n7x5wk
Catarman;7wqni85wk
Escalante;7s4nf25wk
Monkayo;7jqnm55wk
General Trias;81zn7s5wk
Daanbantayan;7t9ngh5wk
Dipolog;7ltnel5wk
Ozamiz City;7knng05wk
Banco Filipino Homes;823n865wk
Banga;7funim5wk
Surallah;7fqnij5wk
Sablayan;7xnn7h5wk
Prosperidad;7lunlq5wk
Alabel;7eynk15wk
Calauan;81bn905wk
Polangui;7yxnf15wk
Kalibo (poblacion);7ujnbw5wk
Calabanga;803ne95wk
Mangaldan;86nn6g5wk
Bais;7onne05wk
Arayat;843n7h5wk
Surigao;7p7nkm5wk
Tagaytay;816n7x5wk
Dapitan;7m2neu5wk
Maco;7ignlm5wk
Bantayan;7t1nfo5wk
Victorias;7sandv5wk
Tagbilaran City;7oung15wk
Muñoz;85on7u5wk
Tanjay;7ogne45wk
Binonga;7rxndm5wk
Marilao;830n7z5wk
Bulacan;833n7s5wk
San Fernando;886n685wk
Malapatan;7elnk15wk
Pagbilao;80tna25wk
Limay;82gn705wk
Lambayong;7g4njc5wk
Bustos;83kn7w5wk
Paco;82jn835wk
San Francisco;7lqnlv5wk
Kidapawan;7hhnjh5wk
Tupi;7flnj35wk
Bamban;84fn6x5wk
Daet;817ndk5wk
Bauang;87xn695wk
Bagong Barrio;82rn835wk
Brookes Point;7mdmzc5wk
Virac;7zqnh45wk
Alicia;88mna25wj
Sipalay;7p3nc05wj
Don Carlos;7jcnj85wj
Kawit;824n7u5wj
Balanga;82sn6u5wj
Port Area;82jn815wj
Sagay;7seneu5wj
La Paz;84wn7d5wj
Solana;8b1na15wj
Borongan;7u9nkf5wj
Oroquieta;7llnfw5wj
Buenavista;7mynkd5wj
Mariano;7mjnjk5wj
Danao;7r8ngj5wj
Mauban;81fna55wj
Indang;81gn7s5wj
Bongabon;85fn8i5wj
San Leonardo;84on805wj
Calauag;80snbp5wj
Magalang;84an765wj
Libon;7yynew5wj
Lupon;7h6nm15wj
Tanauan;815n8j5wj
Aparri;8d0n9w5wj
Calbayog City;7vjni45wj
Angat;83hn875wj
La Carlota;7qyndg5wj
Subic;83cn5z5wj
Rosales;865n735wj
City of Isabela;7gmnat5wj
Dinalupihan;83cn6l5wj
Santa Cruz;85tn535wj
Calapan;7z9n8m5wj
San Ildefonso;83wn7y5wj
San Miguel;842n825wj
Villasis;866n6z5wj
Oas;7yunf25wj
Talavera;85bn7w5wj
Enrique B. Magalona;7s8ndm5wj
Polomolok;7fanje5wj
Pateros;82en8b5wj
Orion;82mn6y5wj
Nasugbu;813n735wj
Tinongan;7qends5wj
Minglanilla;7qgnfw5wj
Malaybalay;7konjl5wj
Tunasan;81yn895wj
Gubat;7xwngs5wj
Buluan;7gonio5wj
Ualog;7rdner5wj
Cogan;7rfngi5wj
Bambang;87jn8f5wj
Tanay;82an8w5wj
Obando;82vn7y5wj
Balagtas;836n7r5wj
Itogon;87gn785wj
Manaoag;86kn6p5wj
Jose Rizal;7momye5wj
Bañga;7funim5wj
Paombong;837n7j5wj
Magsaysay;7gtnjq5wj
Tabaco;7z4nfp5wj
Cupang;823n885wj
Santo Tomas;817n8i5wj
Batac City;8c6n6w5wj
Lingayen;86in5z5wj
Masinloc;856n575wj
Impasugong;7l3nj85wj
Lubao;83in705wj
Naic;81sn7h5wj
Estancia;7tune35wj
Burauen;7sinix5wj
Sibonga;7punfe5wj
Mercedes;817ndp5wj
Zaragoza;84xn7k5wj
Patuto;818n815wj
Kalamansig;7g7ngl5wj
Maluñgun;7fgnk05wj
Victoria;7ymn8w5wj
Cardona;829n8r5wj
El Nido;7t3n3o5wj
Siocon;7jfnba5wj
Bunawan;7kpnlz5wj
Tubod;7kenfv5wj
Balayan;80qn7d5wj
Cabiao;84dn7p5wj
Morong;82cn8s5wj
Liloan;7qwngg5wj
Consolacion;7qungc5wj
Vigan;8atn6f5wj
Inabanga;7pvngn5wj
Norala;7g4nia5wj
Bangued;8axn745wj
Bayombong;87sn8j5wj
Masbate;7wdnfe5wj
Upper Bicutan;82an895wj
Candaba;83yn7n5wj
Santa Ana;83yn7h5wj
Noveleta;823n7s5wj
Bugo;7lnnik5wj
Vinzons;81dndf5wj
Sariaya;80sn9l5wj
Parang;7ihnh75wj
Orani;834n6u5wj
Canlaon;7qvnea5wj
Hinatuan;7l9nmx5wj
Amadeo;81dn7w5wj
Binmaley;86jn635wj
Mexico;83un7c5wj
Samal;7hnnl75wj
Pinamalayan;7y9n9e5wj
Passi;7svnco5wj
Recodo;7hbnas5wj
Compostela;7jbnm95wj
Balulang;7lhni75wj
Maragondon;81nn7e5wi
Masantol;83en7b5wi
Tagbina;7lhnmh5wi
Malilipot;7z0nfq5wi
Gerona;85dn705wi
Samal;831n6u5wi
Carcar;7q3nfg5wi
Mamatid;81jn8k5wi
Taal;80kn7w5wi
Jaen;84ln7w5wi
Camiling;85ln6h5wi
Hinigaran;7qjnd95wi
San Pascual;80dn865wi
Pantubig;83ln7z5wi
Talipapa;82tn875wi
Sultan sa Barongis;7gwni85wi
Papaya;84kn7o5wi
San Antonio;83jn5l5wi
Binalbagan;7qbnda5wi
Bayanan;821n895wi
Calaca;80pn7l5wi
Del Pilar;83sn7a5wi
Pandan;7umnb65wi
Bantay;8aun6f5wi
Mendez-Nuñez;819n7v5wi
Ramon;88mn9m5wi
Solano;87wn8m5wi
Bel Air;82gn875wi
Tagudin;892n6k5wi
San Jose;7z3nf75wi
Abucay;82xn6t5wi
Jalajala;81vn905wi
Teresa;82gn8q5wi
Pila;81jn945wi
Manapla;7sgne05wi
San Nicolas;8chn705wi
Aliaga;852n7o5wi
Baclaran;82dn835wi
Hermosa;837n6r5wi
Bauan;80bn855wi
Bay;81en8x5wi
Jetafe;7q7ngv5wi
San Luis;83sn7j5wi
Dupax Del Norte;87bn8f5wi
General Tinio;84nn895wi
Jagna;7otnhh5wi
Guimba;85in7h5wi
Quiapo;82kn825wi
San Narciso;83pn5k5wi
Kabacan;7hrnir5wi
Alaminos;812n8t5wi
Maluso;7g6nak5wi
General Salipada K. Pendatun;7gznig5wi
Cabadbaran;7ncnkq5wi
Pagaluñgan;7hunhi5wi
Lucban;817n9o5wi
Aglipay;87tn9w5wi
Paraiso;7s8neo5wi
Pililla;829n8z5wi
Tagoloan;7lqnij5wi
Lumbang;81qn9e5wi
Buhi;7zbnf45wi
Malvar;810n8k5wi
Aringay;87jn6b5wi
Tangub;7kenfr5wi
Bagong Pagasa;82qn875wi
Atimonan;80wnao5wi
Cordova;7qgnga5wi
Mapun;7hdn175wi
San Simon;83on7i5wi
Tandag;7n8nmk5wi
Agoo;86on5m5wi
Bah-Bah;7lxnlr5wi
Pandacaqui;845n755wi
Bulan;7x7ng45wi
Majayjay;81bn9f5wi
Narra;7nrn0w5wi
Burgos;85pn6x5wi
Sibulan;7o0neg5wi
Santa Maria;893n6k5wi
Peñaranda;84nn845wi
Pulupandan;7r8nd45wi
Castillejos;83hn5w5wi
Iba;84ln5a5wi
Paete;81wn9g5wi
Catanauan;7zrnbs5wi
San Jose;7qankt5wi
Bongao;7bzn4p5wi
Santa Catalina;7nxnda5wi
Sanchez-Mira;8dkn8r5wi
San Antonio;84jn7q5wi
Rizal;85nn8f5wi
Telabastagan;840n715wi
Maao;7r5ndn5wi
Lopez;80knbm5wi
Nabua;7z9nep5wi
Concepcion Ibaba;80on9e5wi
Pangil;820n9f5wi
Cabagan;8afna95wi
Ayala Alabang;821n865wi
Talisay;815n865wi
Baggabag B;87vn8n5wi
Manibaug Pasig;83yn6w5wi
Nagcarlan;81an9a5wi
Victoria;81jn915wi
La Castellana;7qondq5wi
Pio;83tn6s5wi
General Emilio Aguinaldo;81en7k5wi
Glan;7e6njs5wi
Mamburao;7yqn705wi
Palayan City;856n8c5wi
Al-Barka;7g1nbe5wi
San Fernando;7q8nfn5wh
Bogo;7spngh5wh
Asia;7ojncc5wh
Bontoc;89hn825wh
Culion;7v1n5e5wh
Pinamungahan;7qjnfa5wh
Mansalay;7wsn9c5wh
Botolan;84hn5e5wh
Guihulñgan;7q4nef5wh
Apas;7qqng65wh
Gumaca;80onb65wh
Bignay Uno;80in9h5wh
Balamban;7r6nfo5wh
Guiset East;86nn785wh
Loma de Gato;833n845wh
Malanday;82vn8h5wh
Lake Sebu;7fanif5wh
Porac;83vn6u5wh
Cuenca;80mn895wh
Bansalan;7gvnjt5wh
Inopacan;7r6nii5wh
Jose Pañganiban;81pnct5wh
Dupax del Sur;878n8d5wh
Sasmuan;83in725wh
Molave;7kgnf15wh
Goa;802nf15wh
Irosin;7xangj5wh
New Corella;7j3nli5wh
Binondo;82kn815wh
Taloc;7rdnde5wh
Manay;7i2nni5wh
Baras;82cn8v5wh
Danao;7ojnfs5wh
Sampaloc;82en945wh
Ternate;81pn7c5wh
Pacol;7r1nd65wh
Talitay;7hjnie5wh
Suay;7pxnd85wh
Baao;7zdnep5wh
San Francisco;84on7o5wh
Malabanban Norte;80rn9b5wh
Laur;85bn8m5wh
Ipil;7jmncj5wh
Lagawe;88on8g5wh
Malanday;82wn805wh
Nunungan;7jqngd5wh
Sumag;7rgndg5wh
Compostela;7r2ngh5wh
San Marcelino;83ln5s5wh
San Mariano;7iunm05wh
San Miguel;84wn705wh
Quezon;857n7l5wh
General Mamerto Natividad;85cn895wh
Maasin;7q5nis5wh
Veruela;7kfnlw5wh
Labo;81bnd75wh
Del Remedio;815n8z5wh
Wao;7jcnib5wh
Pilar;82qn6x5wh
Laguilayan;7gjnhw5wh
Baybay;7ronio5wh
Esperanza;7umngk5wh
Palo;7t0nj75wh
Carigara;7tenic5wh
Murcia;7rhnds5wh
Maganoy;7h2nho5wh
Sitangkai;7ayn3o5wh
Mahayag;7kknex5wh
Bato;7z3nep5wh
Tiwi;7zenfk5wh
Santa Maria;7g7nkj5wh
Laoang;7wxnj95wh
Nabunturan;7j5nlx5wh
Roxas;89kn9u5wh
Tanauan;7svnja5wh
Cabayangan;7ilnl95wh
Jasaan;7m1nik5wh
Loboc;7osngj5wh
Zumarraga;7ucnis5wh
San Mateo;88wn9r5wh
Aurora;7z3ncc5wh
Morong;82sn635wh
San Vicente;84hn755wh
Calatagan;80fn735wh
Novaliches Proper;82wn895wh
Trento;7kdnm65wh
Isabela;7qcndn5wh
Mankayan;88un7i5wh
Abuyog;7rvnj95wh
Calumpang;82mn8d5wh
Talacogon;7linle5wh
Diadi;88hn945wh
Boroon;7kqngy5wh
Santa Barbara;86gn6g5wh
Santa Cruz;83fn6x5wh
Romblon;7wynbn5wh
Tagas;7ylnfo5wh
Lilio;819n9c5wh
Roxas;7qon3j5wh
Magarao;7zyne75wh
Dologon;7jsnjc5wh
Domalanoan;86gn5x5wh
Babo-Pangulo;83wn6s5wh
Ramos;85jn745wh
=PK
Lahore;9dojmj5ms;拉合尔|拉合爾|라호르|لہور|lwہwr|ラホール|ラーホール|Lahor|Lohur|Lahaur|Lahora|Lahoro|Lakhor|Lachori|Lahoras|Lahorium|Лахор|लाहोर|लाहौर|ลาฮอร์
Karachi;8v2j255ms;カラチ|カラーチー|卡拉奇|喀拉蚩|카라치|کراچی|کراچۍ|कराची|Karaci|Karasi|Keraci|Carachi|Karaaji|Karaces|Karachy|Karacio|Karacis|Karacsi|Karaczi|Karatsi|Karatxi|Karochi|Karanchi|Karatsji|Kurrachi|Karatschi|Kurrachee|Карачи|Карачы|การาจี
Peshawar;9khjeu5mr;白沙瓦|페샤와르|پشاور|پېښور|पेशावर|ペシャーワル|Pesabar|Pesavar|Pesaver|Pexauar|Pesavara|Pesavaro|Peshavar|Peshovar|Pesjawar|Peszawar|Pesavaras|Peschawar|Пешавар|เปศวาร์
Faisalabad;9dajj15mq;Lyallpur|Fajsalabad|Fejsalabad|Faisalabada|Faisalabado|Feisalabadas|Shah Faisalabad|ファイサラバード|ファイサラーバード|فيصل آباد|فیصل آباد|Файсалабад|Фейсалабад
Rawalpindi;9jcjix5mq;라왈핀디|拉瓦尔品第|راولبندي|راولپندی|रावलपिंडी|रावळपिंडी|ラーワルピンディー|Ralalpindi|Ravalpindi|Ravalpindo|Ravalpinti|Ravalpindis|Ravalpindzi|Равалпинди|Равалпінді|ราวัลปินดี
Gujranwala;9fcjm35mq;古杰兰瓦拉|Gajranvala|Gujranvala|Qucranvala|Gudzranvala|Gudzranwala|Gudzhranvala|gwjranwalہ|گوجرانوالہ|Гайранвала|Гујранвала|गुजरांवाला
Multan;99wjek5mp;물탄|木爾坦|ムルターン|Мултан|مُلتان|Moultan|Multano|Multanas|मुल्तान
Hyderabad;8wkj5y5mp;海得拉巴|하이데라바드|ハイデラバード|حیدرآباد|حيدر آباد|हैदराबाद|Hiderabad|Haidarabad|Hajdarabad|Hajderabad|Haydarabad|Haydarobod|Hajderabado|Khajdarabad|Khajderabad|Haidarabadas|Chainterampant|Hyderabad City|Хайдарабад|Хајдерабад
Quetta;99uj245mp;奎達|퀘타|Shal|Ketta|Kotah|Kueta|Kveta|Kveto|Kweta|Kvetta|Kwatah|Shalkot|کوټه|كويته|クエッタ|Квета|Куета|क्वेटा|क्वेट्टा|เควตตา
Bannu;9hnjc45mp;반누|バンヌ|Banu|بنوں|Банну|बन्नू
Sargodha;9f5jhv5mo
Sialkot;9g9jn15mo
Bahawalpur;97ojf45mo
Arifwala;9a5jiz5mo
Dera Ismail Khan;9efjcy5mo
Muzaffarābād;9lhjk35mn
Battagram;9mcjiu5mn
Chunian;9c1jli5mn
Jhang Sadr;9cvjgw5mn
Islamabad;9jojiw5mn
Shekhupura;9e3jlj5mn
Gujrat;9ghjls5mn
Sukkur;92yj7a5mn
Sahiwal;9etjgx5mn
Sahiwal;9b7jj25mn
Okara;9bljk15mn
Rahim Yar Khan;94yjba5mn
Kasur;9cgjmt5mn
Jalalpur Pirwala;97zjdu5mn
Dera Ghazi Khan;99hjc85mn
Pindi Bhattian;9emjjj5mn
Tando Bago;8uvj7l5mn
Tando Allahyar;8wqj6w5mn
Wah Cantt;9jtji35mm
Chak Jhumra;9dpjja5mm
Bhawana;9dpjht5mm
Larkana;92kj5h5mm
Nawabshah;8ywj605mm
Burewala;99tjht5mm
Mingora;9mmjh05mm
Sinjhoro;8ybj755mm
Hafizabad;9f3jkp5mm
Chiniot;9e4jiq5mm
Mardan;9l0jg55mm
Malir Cantonment;8vaj2p5mm
Kamoke;9eujm65mm
Abbottabad;9kvjjd5mm
Saddiqabad;94njat5mm
Mirpur Khas;8wxj7p5mm
Skardu;9o2jq35mm
Muridke;9ecjma5mm
Shahkot;9dpjk55mm
Bahawalnagar;99cjjh5mm
Bahawalnagar;9avjjv5mm
Kunri;8vyj995ml
Muzaffargarh;99jjdr5ml
Digri;8vwj7z5ml
Jacobabad;94kj645ml
Khuzdar;939j115ml
Gilgit;9psjmf5ml
Gojra;9cjjhw5ml
Shikarpur;93oj6o5ml
Dadu;909j4a5ml
Talhar;8v4j755ml
Dajal;984jbi5ml
Qadirpur Ran;9a5jf35ml
Ahmadpur East;96yjdy5ml
Hub;8vjj1t5ml
Dhirkot;9kkjke5ml
Garhi Khairo;93yj4u5ml
Khairpur Mir’s;92hj705ml
Jhelum;9hhjkt5ml
Tando Adam;8xlj6q5ml
Hasilpur;98hjhj5ml
Kamalia;9bdjht5ml
Arif Wala;8z4j065ml
Jampur;98cjc45ml
Wazirabad;9g4jlw5ml
Kohat;9jajeh5ml
Layyah;9c0jd25ml
Shujaabad;990je15ml
Eminabad;9f0jma5ml
Jaranwala;9d1jjy5ml
Tordher;9kfjgt5ml
Chishtian;98sjie5ml
Harunabad;989jj65ml
Jalalpur Jattan;9gojm55ml
Umarkot;8wgj9q5ml
Lodhran;981jez5ml
Moro;902j4w5ml
Khanpur;95ljca5ml
Attock City;9jtjh05ml
Manjhand;8xzj5k5ml
Mian Channun;9akjh05ml
Bhakkar;9dvjde5mk
Narowal;9f6jnz5mk
Chaman;9bwj0l5mk
Nankana Sahib;9ddjkr5mk
Mandi Bahauddin;9gjjk55mk
Mianwali;9gijep5mk
Daur;8zij5s5mk
Daska Kalan;9fsjmj5mk
Shakargarh;9fmjos5mk
Pakpattan;9aajjv5mk
Mailsi;98sjgh5mk
Dokri;921j565mk
New Mirpur City;9i3jkv5mk
Toba Tek Singh;9c1jhc5mk
Haveli Lakha;9aljkp5mk
Shahdad Kot;93dj4n5mk
Charsadda;9kvjfa5mk
Ghotki;93sj8k5mk
Sambrial;9g8jmj5mk
Badin;8uij785mk
Taunsa;9bajc95mk
Phool Nagar;9cojlf5mk
Tando Muhammad Khan;8vsj6e5mk
Pattoki;9c6jl55mk
Shahdadpur;8y1j6m5mk
Jauharabad;9fpjgs5mk
Vihari;99gjh05mk
Chichawatni;9atjhx5mk
Dera Murad Jamali;95bj5i5mk
Kotri;8whj5r5mk
Kot Addu;9anjd55mk
Sangla Hill;9e4jju5mk
Kharian;9h6jl95mk
Khushāb;9fqjgz5mk
Pasrur;9fmjne5mk
Pano Aqil;93ej7z5mk
Shabqadar;9l2jer5mk
Kot Radha Kishan;9cljlu5mk
Chakwal;9hhjid5mk
Renala Khurd;9bsjkg5mk
Model Town;9dgjmh5mk
Raja Jang;9cqjm95mk
Dipalpur;9b7jkl5mk
Qubo Saeed Khan;93fj435mk
Kandhkot;94hj865mk
Swabi;9ksjhb5mk
Dijkot;9cqjis5mk
Khurarianwala;9dijjj5mk
Gambat;91zj6c5mk
Rohri;92xj7e5mk
Kabirwala;9agjfm5mk
Kunjah;9gdjlh5mk
Daharki;93xj9m5mk
Dinga;9gojks5mk
Thul;94gj725mk
Nowshera Kalan;9kijfx5mk
Fort Abbas;973jie5mk
Ratodero;938j5p5mk
Fatehjang;9j8jhs5mk
Alahabad;9bsjlq5mk
Khewra;9gpjit5mk
Talagang;9hhjh65mk
Kahna Nau;9d5jml5mk
Kambar;92nj4w5mk
Zahir Pir;961jbw5mk
Hujra Shah Muqim;9bejl25mk
Paharpur;9f7jd55mk
Turbat;8y8ir55mk
Topi;9knjhq5mj
Bhalwal;9fnjii5mj
Mirpur Mathelo;93uj975mj
Sarai Alamgir;9hejkw5mj
Bat Khela;9m6jfx5mj
Sakrand;8ymj5n5mj
Tando Jam;8wnj6d5mj
Hala;8xpj625mj
Gwadar;8vsip55mj
Rabwah;9e8jij5mj
Kahror Pakka;98ajfr5mj
Gujar Khan;9idjjm5mj
Kot Malik Barkhurdar;99wj235mj
Chuhar Kana;9e7jl05mj
Darya Khan;9eajdi5mj
Shorkot;9enjcw5mj
Minchinabad;99sjkd5mj
Mansehra;9ldjjc5mj
Basirpur;9ayjl45mj
Lala Musa;9gujlg5mj
Usta Muhammad;94aj505mj
Sibi;982j4k5mj
Pindi Gheb;9icjgq5mj
Phalia;9g3jke5mj
Sanghar;8ydj7j5mj
Faqirwali;97vjiv5mj
Yazman;96wjfa5mj
Faruka;9eljh55mj
Chitral;9pljff5mj
Jahangira;9kcjgm5mj
Haripur;9kgjil5mj
Jamrud;9kgjea5mj
Sharifabad;9ivjjs5mj
Dullewala;9efjeg5mj
Pir Jo Goth;92nj6m5mj
Pabbi;9khjff5mj
Lalian;9eeji85mj
Qabula;99ujiz5mj
Pir Mahal;9bhjh75mj
Mithi;8uqj9w5mj
Kot Mumin;9ffjiv5mj
Ubauro;948j9p5mj
Rajanpur;96ujbd5mj
Zhob;9d2j8x5mj
Matli;8vkj6q5mj
Jahanian;99gjfi5mj
Buni;9qrjgq5mj
Rawalakot;9k2jkw5mj
Hadali;9gojn55mj
Sillanwali;9efjhi5mj
Nushki;983ize5mj
Jatoi Shimali;980jcs5mj
Kotli;9j4jla5mj
Mustafabad;9btjk65mj
Kamra;9k1jh35mj
Chak Thirty-one -Eleven Left;9aijhy5mj
Kanganpur;9bgjlw5mj
Mach;98yj315mj
Kandiaro;916j5h5mj
Thatta;8urj4o5mj
Fatehpur;9cmjds5mj
Kamra;9jrjk75mj
Pasni;8w6isb5mj
Kundian;9g6jek5mj
Sukheke Mandi;9ejjk75mj
Amangarh;9khjft5mi
Dunyapur;98sjfa5mi
Sehwan;8zej4i5mi
Washuk;931iw15mi
Karachi University Employees Co-operative Housing Society;8vcj2g5mi
Naushahra Virkan;9esjlh5mi
Khairpur;93yj9m5mi
Chak;93ej775mi
Choa Saidan Shah;9gwjir5mi
Ladhewala Waraich;9fcjlw5mi
Khalabat;9kmjih5mi
Kamar Mushani;9h8je85mi
New Badah;91yj4z5mi
Tank;9fijbi5mi
Tandlianwala;9c7jj55mi
Chak Azam Sahu;9bfjiv5mi
Loralai;9adj6k5mi
Havelian;9kljj85mi
Lakki;9gljcz5mi
Hangu;9j5jde5mi
Risalpur Cantonment;9kmjfz5mi
Tangi;9lajf15mi
Mehrabpur;943j4z5mi
Malakwal City;9gfjjd5mi
Khangah Dogran;9efjki5mi
Narang Mandi;9emjn05mi
Malakwal;9gfjjd5mi
Ranipur;91tj6b5mi
Utmanzai;9kzjfc5mi
Zaida;9kmjhb5mi
Kashmor;94zj9a5mi
Alipur;97mjcz5mi
Bāgh;9kejky5mi
Naudero;92vj5w5mi
Setharja Old;91lj675mi
Mamu Kanjan;9bnji85mi
Sharqpur Sharif;9dejlu5mi
Bhera;9g8jij5mi
Dursh Khela;9n8jh95mi
Raiwind;9ctjm65mi
Khairpur Tamewah;986jgo5mi
Kharan;95eixq5mi
Chak Five Hundred Seventy-five;9dnjl35mi
Nok Kundi;963iqb5mi
Nowshera Cantonment;9kgjg05mi
Mehar;91ij4e5mi
Khairpur Nathan Shah;919j455mi
Pind Dadan Khan;9gjjiw5mi
Upper Dir;9ntjfo5mi
Ghauspur;946j7w5mi
Akora Khattak;9kgjgd5mi
Kalur Kot;9fcjdz5mi
Bela;8yvj075mi
Thal;9okjgo5mi
Garh Maharaja;9bnjfq5mi
Jahanian Shah;9edjgs5mi
Mastung;98sj1p5mi
Manhala;9dljn35mi
Hajira;9jtjl95mi
Mananwala;9drjkp5mi
Fazilpur;9fejoj5mi
Talamba;9atjgo5mi
Jhawarian;9fwjhq5mi
Nasirabad;922j4o5mi
Bhimber;9hljls5mi
Sita Road;913j4h5mi
Jaglot;9p5jna5mi
Chawinda;9fujnj5mi
Kalat;96nj0z5mi
Daud Khel;9hcjet5mi
Mitha Tiwana;9fljgb5mi
Hazro City;9k7jhd5mi
Dunga Bunga;98njjg5mi
Karor;9cqjd35mi
Kot Diji;91yj6v5mi
Jiwani;8vlinj5mi
Murree;9k7jjv5mi
Mian Sahib;947j6o5mi
Ahmadpur Sial;9b8jfa5mi
Kulachi;9epjbq5mi
Pishin;9ayj235mi
Chak One Hundred Twenty Nine Left;9ajjix5mi
Harappa;9b3jif5mh
Pallandri;9jojko5mh
Zafarwal;9fujo25mh
Kot Samaba;95bjbr5mh
Kahuta;9jbjjv5mh
Khanpur Mahar;93cj8t5mh
Hingorja;91lj625mh
Naukot;8v2j8s5mh
Kuri Dulal;9iqjji5mh
Bhaun;9haji45mh
Chaksawari;9iejkz5mh
Kotli Loharan;9gjjmx5mh
Shahpur Chakar;8ynj6p5mh
Chhor;8wvj9u5mh
Oghi;9lujit5mh
Pad Idan;90dj5q5mh
Kot Ghulam Muhammad;9ftjn35mh
Lawa;9gujft5mh
Sook Kalan;9gkjlz5mh
Surkhpur;9gwjmt5mh
Dhoro Naro;8wuj995mh
Dhaunkal;9g1jly5mh
Khangarh;993jdo5mh
Sarai Naurang;9h7jcm5mh
Gharo;8uqj3r5mh
Pakistan Employees Cooperative Housing Society;8v3j2a5mh
Jhol;8y4j7d5mh
Baddomalhi;9evjne5mh
Bhit Shah;8xpj695mh
Dayal;9ijjkq5mh
Khai Gala;9k1jl35mh
Matiari;8x4j655mh
Warah;929j4c5mh
Chuhar Jamali;8trj4v5mh
Lachi;9iqje65mh
Taftan;96fin35mh
Jand;9ivjg25mh
Dera Bugti;96oj845mh
Musa Banda/Musa khan kallay;9kjjhc5mh
Tharu Shah;90uj585mh
Naushahro Firoz;90kj585mh
Alipur;9jhjja5mh
Baffa;9lojje5mh
Gadani;8vsj1d5mh
Bhopalwala;9g3jmk5mh
Dadhar;97vj3x5mh
Bhan;8zsj445mh
Goth Radhan;91kj4r5mh
Islamgarh;9i7jl45mh
Uthal;8xpj125mh
Kaleke Mandi;9eujkg5mh
Johi;905j3t5mh
Mangla;9eljh25mh
Shahr Sultan;986jda5mh
Karimabad;9qxjne5mh
Sodhri;9g6jm25mh
Kalabagh;9hkjer5mh
Kallar Kahar;9h2jhy5mh
Dhanot;986jfb5mh
Harnoli;9fojer5mh
Sarai Sidhu;9azjfx5mh
=PL
Warsaw;az3fid8up;华沙|華沙|W-wa|Wawa|Varsa|Varso|Varsja|Varsava|Varsawa|Varsova|Varsuva|Warsawa|Warskou|Warszaw|Barsobia|Varsavia|Varsavja|Varshava|Varsovia|Varsovie|Varsovio|Varssavi|Warschau|Warszawa|Varshavae|Phoenix City|ورشو|وارسو|바르샤바|ワルシャワ|वॉर्सो|วอร์ซอ|Варшавæ|Варшава
Kraków;at2ffe8uo
Wrocław;avyf7b8un
Łódź;axtfe38un
Poznań;azlf718un
Gdańsk;b4zfbt8un
Szczecin;b2ff0f8um
Lublin;awdfmp8um
Bydgoszcz;b1kfa18um
Białystok;b1lfoc8um
Katowice;atmfcu8um
Gdynia;b5gfbh8um
Częstochowa;av4fd48um
Sosnowiec;atpfd28ul
Radom;awsfir8ul
Mokotów;ayzfif8ul
Gliwice;atqfbw8ul
Rzeszów;at0fl48ul
Toruń;b19fbo8ul
Kielce;avbfhb8ul
Zabrze;atsfc78ul
Bytom;atvfcl8ul
Praga Południe;az4fil8ul
Bielsko-Biala;asefcx8ul
Olsztyn;b3efgx8ul
Ursynów;ayvfih8ul
Ruda Śląska;atmfce8ul
Rybnik;at6fbi8ul
Wola;az3fi88ul
Bielany;az9fi68uk
Tychy;atafcp8uk
Białołeka;azcfi98uk
Opole;aurf9t8uk
Elbląg;b4ffdx8uk
Płock;azzfer8uk
Wałbrzych;av1f588uk
Targówek;az9fih8uk
Bemowo;az5fi38uk
Włocławek;b09fcz8uk
Zielona Góra;ayaf338uk
Tarnów;asxfib8uk
Dąbrowa Górnicza;attfdc8uk
Gorzów Wielkopolski;b0hf2b8uk
Chorzów;atrfcp8uk
Kalisz;axsfa98uk
Koszalin;b4jf4x8uk
Legnica;aw9f4w8uk
Śródmieście;az3fie8uk
Śródmieście;avzf7g8uk
Słupsk;b5af7b8uk
Jaworzno;athfdj8uk
Jastrzębie Zdrój;assfbl8uk
Psie Pole;aw3f7c8uk
Praga Północ;az5fif8uk
Grudziądz;b2kfc38uk
Nowy Sącz;arufhi8uk
Ochota;az2fib8uk
Konin;az2fap8uk
Piotrków Trybunalski;awtfeq8uk
Inowrocław;b0ofaq8uk
Lubin;awsf508uk
Jelenia Góra;avef3p8uk
Wawer;az0fiu8uk
Siedlce;ayxflx8uk
Piła;b1nf6i8uk
Ostrowiec Świętokrzyski;avhfjf8uj
Siemianowice Śląskie;attfcv8uj
Ostrów Wielkopolski;axif9h8uj
Mysłowice;athfd98uj
Stargard;b26f1t8uj
Pabianice;axifdr8uj
Gniezno;azxf8u8uj
Fordon;b1nfah8uj
Suwałki;b4bfnp8uj
Tomaszów Mazowiecki;ax5ffl8uj
Przemyśl;asafn98uj
Stalowa Wola;auifl98uj
Zamość;auwfol8uj
Kędzierzyn-Koźle;atvfan8uj
Głogów;axif4o8uj
Wrzeszcz;b52fbp8uj
Leszno;ay0f618uj
Żory;at1fby8uj
Bełchatów;awpfds8uj
Łomża;b1qfla8uj
Tarnowskie Góry;au5fce8uj
Świdnica;av8f5t8uj
Chełm;aw2fp78uj
Tczew;b49fc68uj
Piekary Śląskie;atyfcl8uj
Mielec;atpfji8uj
Racibórz;at5fam8uj
Będzin;attfd58uj
Zgierz;ay2fdx8uj
Biała Podlaska;ayjfo88uj
Ełk;b3jfm48uj
Świętochłowice;atqfck8uj
Pruszków;ayxfht8uj
Ostrołęka;b1hfjy8uj
Starachowice;avsfij8uj
Zawiercie;au9fdy8uj
Żoliborz;az7fib8uj
Legionowo;azkfi58uj
Tarnobrzeg;auhfk88uj
Puławy;awufl18uj
Wodzisław Śląski;aswfbb8uj
Skarżysko-Kamienna;avzfhz8uj
Skierniewice;aybfg08uj
Kutno;az3fds8uj
Krosno;as1fkh8uj
Dębica;at1fjh8uj
Ursus;az0fi08uj
Nysa;au7f858uj
Starogard Gdański;b3wfbh8uj
Wejherowo;b5pfao8uj
Ciechanów;b0wfha8uj
Rumia;b5lfb38uj
Radomsko;avvfe08uj
Zduńska Wola;axcfcm8uj
Sieradz;axcfc18uj
Kołobrzeg;b4if3a8uj
Rejon placu Świętego Macieja;aw0f7c8uj
Otwock;ayrfj28uj
Bieńczyce;at5ffn8uj
Żyrardów;aylfgt8ui
Świnoujście;b3rezl8ui
Bolesławiec;awef398ui
Nowa Sól;axwf3o8ui
Świdnik;awafn28ui
Chrzanów;atafdw8ui
Knurów;atifbt8ui
Sanok;aroflp8ui
Mikołów;atdfci8ui
Chojnice;b36f8s8ui
Żary;axgf228ui
Szczecinek;b37f6e8ui
Sochaczew;az3fg88ui
Brzeg;avaf8j8ui
Jasło;as7fjn8ui
Olkusz;atofed8ui
Kwidzyn;b38fcl8ui
Mińsk Mazowiecki;ayyfjx8ui
Oleśnica;aw9f8b8ui
Malbork;b44fcv8ui
Wołomin;azefj08ui
Piaseczno;ayofie8ui
Włochy;ayyfi78ui
Kraśnik;avgflr8ui
Cieszyn;as7fbr8ui
Jarosław;asyfn08ui
Lębork;b5if9b8ui
Sopot;b58fbk8ui
Czechowice-Dziedzice;asnfcs8ui
Police;b2rf0h8ui
Czeladź;atsfd08ui
Oświęcim;aszfdd8ui
Dzierżoniów;auxf698ui
Nowy Targ;argffn8ui
Ostróda;b36ffg8ui
Myszków;auifdo8ui
Zgorzelec;aw3f1p8ui
Oława;avjf818ui
Iława;b2wfed8ui
Żywiec;as1fdb8ui
Karłowice-Różanka;aw2f7c8ui
Pilczyce-Kozanów-Popowice Północne;aw1f768ui
Ołbin;aw0f7d8ui
Chełm;b4yfbq8ui
Łuków;ay9fm68ui
Śrem;aypf7a8ui
Kabaty;aytfik8ui
Giżycko;b44fkg8ui
Ujeścisko-Łostowice;b4wfbo8ui
Łowicz;ayrfff8ui
Augustów;b3kfnu8ui
Psie Pole Zawidawie;aw3f7j8ui
Turek;ayifbe8ui
Mława;b1jfgm8ui
Bielawa;autf668ui
Krotoszyn;axmf8g8ui
Bochnia;astfgr8ui
Swarzędz;azlf7h8ui
Grzegórzki;at2ffh8ui
Czerwionka-Leszczyny;atbfbw8ui
Września;azdf8t8ui
Gorlice;aryfis8ui
Gierłoż;b48fjq8ui
Nowy Dwór Mazowiecki;aznfhk8ui
Kętrzyn;b48fje8ui
Brodnica;b1yfdw8ui
Zakopane;aqyfff8ui
Piecki-Migowo;b50fbm8ui
Rejon placu Grunwaldzkiego;aw0f7e8ui
Biłgoraj;auefn48ui
Grodzisk Mazowiecki;ayqfhb8ui
Wyszków;b03fjm8ui
Bielsk Podlaski;b0lfof8ui
Luboń;azff6x8ui
Szczytno;b2sfib8ui
Kluczbork;avlfam8ui
Wałcz;b20f5r8ui
Świecie;b2dfb98ui
Żagań;axef2j8ui
Kłodzko;au3f6a8ui
Wągrowiec;b0pf7s8ui
Jarocin;aydf8m8ui
Pszczyna;asufcn8ui
Sandomierz;ausfkf8ui
Nowa Ruda;auif5u8ui
Gądów-Popowice Południowe;aw1f758ui
Białogard;b41f4f8ui
Przymorze Wielkie;b55fbo8ui
Osiedle Powstańców Śląskich;avxf7a8ui
Kościan;aypf698ui
Jawor;avtf4z8ui
Lubliniec;aurfbw8ui
Skawina;asuff38uh
Pruszcz Gdański;b4qfbs8uh
Koło;az0fbs8uh
Bartoszyce;b4pfht8uh
Ząbki;az9fin8uh
Środmieście;b4zfbu8uh
Prudnik;atsf8t8uh
Kościerzyna;b4cf9y8uh
Piastów;ayyfhw8uh
Świebodzice;avaf5c8uh
Marki;azcfim8uh
Nadodrze;aw1f7b8uh
Zambrów;b17fls8uh
Lubartów;awyfmt8uh
Grajewo;b31fme8uh
Drzetowo-Grabowo;b2hf0i8uh
Ostrów Mazowiecka;b0ofku8uh
Opoczno;awqfgc8uh
Goleniów;b2sf178uh
Lubań;aw0f2h8uh
Płońsk;b06fgm8uh
Hajnówka;b0ifpi8uh
Łaziska Górne;atbfcc8uh
Mrągowo;b3mfj78uh
Andrychów;ashfdq8uh
Rembertów;az6fis8uh
Rydułtowy;at2fb68uh
Gajowice;avyf788uh
Środa Wielkopolska;az3f808uh
Świebodzin;az5f358uh
Kamienna Góra;av2f4j8uh
Łęczna;awifnk8uh
Wrzeszcz Dolny;b52fbp8uh
Wieluń;awafbl8uh
Polkowice;ax2f4n8uh
Rawicz;axdf6u8uh
Gryfino;b1xf098uh
Krzyki-Partynice;avuf788uh
Działdowo;b1wfg18uh
Wrzeszcz Górny;b52fbo8uh
Gostyń;ay4f798uh
Końskie;aw7fgp8uh
Rejon ulicy Traugutta;avyf7d8uh
Ozorków;aycfdl8uh
Chełmno;b27fb78uh
Przedmieście Oławskie;avyf7d8uh
Aleksandrów Łódzki;axyfdm8uh
Tomaszów Lubelski;au5fp28uh
Strzelce Opolskie;aubfau8uh
Wesoła;az5fiy8uh
Pionki;ax0fjl8uh
Biskupin-Sępolno-Dąbie-Bartoszowice;avzf7h8uh
Orunia Górna-Gdańsk Południe;b4wfbq8uh
Chodzież;b18f708uh
Bieruń;at5fd18uh
Nakło nad Notecią;b1mf8w8uh
Krasnystaw;avmfod8uh
Kęty;askfde8uh
Wadowice;askfe58uh
Pisz;b2zfkl8uh
Gaj;avwf7c8uh
Sokółka;b2dfpa8uh
Osiedle Kosmonautów;aw1f748uh
Pułtusk;b0efik8uh
Pyskowice;au0fbr8uh
Gostynin;aznfe28uh
Sierpc;b0ufen8uh
Trzebinia;atcfe38uh
Huby;avxf7c8uh
Wieliczka;asvffq8uh
Międzyrzecz;azof3a8uh
Hrubieszów;av5fqd8uh
Szamotuły;b05f628uh
Łask;axbfd58uh
Szczepin;aw0f798uh
Orzesze;atcfc68uh
Sulejówek;az5fj38uh
Złotów;b28f7c8uh
Braniewo;b52ff28uh
Konstantynów Łódzki;axrfdp8uh
Krapkowice;au8f9x8uh
Łańcut;at3flr8uh
Sokołów Podlaski;azlflt8uh
Reda;b5pfaz8uh
Sulechów;ayof3f8uh
Oborniki;b09f6p8uh
Józefów;ayufj08uh
Libiąż;at6fdo8uh
Kostrzyn nad Odrą;b03f0p8uh
Dęblin;ax8fkp8uh
Rawa Mazowiecka;axsfg98uh
Myślenice;asfffe8uh
Kobyłka;azefiw8uh
Pleszew;ay6f9f8uh
Słubice;azff0g8uh
Zielonka;azafis8uh
Radlin;at1fbc8uh
Radzionków;au0fci8uh
Międzyrzec Podlaski;ayffna8uh
Busko-Zdrój;au7fhk8uh
Kozienice;axafjv8uh
Trzcianka;b1cf5q8uh
Brzesko;astfh98uh
Jędrzejów;auofge8uh
Boguszów-Gorce;av0f508uh
Bytów;b4hf8l8uh
Gryfice;b3sf288uh
Przasnysz;b1afi08uh
Nowogard;b33f208uh
Gubin;aybf0x8uh
Rypin;b1ffdx8uh
Konstancin-Jeziorna;aypfio8uh
Lidzbark Warmiński;b4dfh68uh
Bogatynia;avff1k8uh
Łapy;b17fnk8uh
Namysłów;avwf988uh
Lędziny;atafd58uh
Ustka;b5mf6u8uh
Staszów;augfit8uh
Strzegom;avkf5f8uh
Radzyń Podlaski;axufmu8uh
Świerczewo;b2ff0b8uh
Osowa;b57fbb8uh
Olecko;b43fmj8uh
Garwolin;ay6fk18uh
Kozanów;aw2f758uh
Przeworsk;at2fmh8uh
Milanówek;aysfhf8uh
Różanka-Polanka;aw2f7a8uh
Choszczno;b1pf2u8uh
Świdwin;b3df3u8uh
Ustroń;as4fc88uh
Nisko;aucfli8uh
Złotoryja;aw1f488uh
Łęczyca;aymfdc8uh
Siemiatycze;aznfni8uh
Chełmża;b1qfbo8uh
Jelcz Laskowice;avqf848uh
Łomianki;azdfi18uh
Jelcz;avqf848uh
Ropczyce;at1fk18uh
Nowy Tomyśl;azcf4t8uh
Solec Kujawski;b1gfan8uh
Głuchołazy;atsf8a8uh
Głowno;aycfes8uh
Ząbkowice Śląskie;aujf6p8uh
Kartuzy;b4xfak8uh
=PM
Saint-Pierre;ajy9jy3jf
=PN
Adamstown;50d3um9n7
=PR
San Juan;8db8sd3zm
Bayamón;8d48s83zl
Carolina;8d28ss3zl
Ponce;8c18qy3zl
Arecibo;8db8qo3zk
Caguas;8cn8sj3zk
Guaynabo;8d08sd3zk
Trujillo Alto;8cz8sn3zk
Mayagüez;8ck8pi3zj
Fajardo;8cx8tn3zi
Levittown;8d98s63zi
Vega Baja;8d88rl3zi
Cataño;8d88sc3zi
Barceloneta;8d98r63zh
Guayama;8by8sd3zh
Humacao;8cf8t53zh
Yauco;8c38qb3zh
Cayey;8cb8s73zh
Candelaria;8d48s33zh
Manatí;8d78rb3zh
Aguadilla;8d78ph3zh
=PS
East Jerusalem;9eaglv5cn;القدس الشرقية
Gaza;9digjr5bm;غزة|غزه|غەززە
Khān Yūnis;9d2gjb5bl;خان يونس
Jabālyā;9dlgjs5bl;جباليا
Hebron;9dlglh5cl;الخليل
Nablus;9figlx5ck;نابلس|نابلوس
Rafaḩ;9cygj45bk;رفح
Dayr al Balaḩ;9dagjf5bj;دير البلح
Bayt Lāhyā;9dngju5bj;بيت لاهيا
Battir;9e2glk5jj
Ţūlkarm;9frglb5cj;طولكرم
Ramallah;9emgls5cj;ڕامەڵا|رام الله|رام‌الله
Qalqīlyah;9ffgl55cj;قلقيلية
Yaţţā;9ddglh5ci;يطا
Ma‘ale Adummim;9eagm25ji;معالي أدوميم‎
Al Bīrah;9englu5ci;البيرة
Bayt Ḩānūn;9dmgjy5bi;بيت حنون|بيت حانون
An Nuşayrāt;9ddgjj5bi;النصيرات
Old City;9eaglv5ci;القدس القديمة
Shu‘fāţ;9eeglv5ci
Al Burayj;9dcgjk5bi;البريج
Janīn;9g6gm25ci;جنين
Banī Suhaylā;9d2gjc5bi;بني سهيلا
Bethlehem;9e2gls5ci;بيت لحم|بېتلېخېم|bېtlېkhېm
Az̧ Z̧āhirīyah;9d9gl55ci;الظاهرية
Bayt Ḩanīnā;9efglv5ci;بيت حنينا
‘Aţārūt;9ejglu5ci
Surif City;9dxgle5ci;صوريف
Ar Rām wa Ḑāḩiyat al Barīd;9ehglv5ci;الرام وضاحية البريد
Ḩalḩūl;9dqgli5ch;حلحول
Dūrā;9djglb5ch;دورا
Banī Na‘īm;9dkglo5ch;بني نعيم
Jericho;9ejgmh5ch;أريحا|اريحا|مدينة القمر
Al Qarārah;9d5gje5bh;القرارة
As Samū‘;9d8glf5ch;السموع
Qabāţīyah;9g1gm05ch;قباطية
Idhnā;9dogl55ch;إذنا
‘Abasān al Kabīrah;9d0gje5bh;عبسان الكبيرة
Sa‘īr;9dqglm5ch;سعير
Al ‘Ayzarīyah;9e9glz5ch;العيزرية
Balāţah;9fhgm15ch
Az Zuwāydah;9dcgji5bh;الزوايدة
Bayt Jālā;9e4glr5ch;بيت جالا
Al Yāmūn;9g9glv5ch;اليامون
Ţūbās;9fsgm95ch;طوباس
=PT
Lisbon;9xld6l7yn
Porto;a4bd837ym
Braga;a5fd8m7yl
Amadora;9xnd6d7yl
Coimbra;a1pd8m7yl
Leiria;a0ed7j7yk
Setúbal;9x0d7b7yk
Funchal;9grckz6zk
Viseu;a2yda17yk
Queluz;9xod6b7yk
Cacém;9xpd667yk
Aveiro;a2xd7z7yk
Vila Nova de Gaia;a48d837yj
Faro;9sud9z7yj
Algueirão;9xsd627yj
Loures;9xvd6j7yj
Felgueiras;a4xd997yj
Rio de Mouro;9xpd637yj
Odivelas;9xrd6i7yj
Évora;9x5da27yj
Amora;9xbd6o7yj
Corroios;9xcd6l7yj
Barreiro;9xed6t7yj
Monsanto;9zmd7t7yj
Rio Tinto;a4ed887yj
São Domingos de Rana;9xid627yj
Figueira da Foz;a1jd7e7yj
Lumiar;9xpd6k7yj
Paranhos;a4dd847yj
Ponte de Lima;a61d867yj
Olival;9xpd6b7yj
Santo António dos Olivais;a1qd8n7yi
Sesimbra;9wsd6q7yi
Guimarães;a54d8y7yi
Guarda;a2mdbt7yi
Ermesinde;a4id897yi
Santo Ovídio;a47d847yi
Portimão;9t6d8a7yi
Damaia;9xnd6f7yi
Cidade Universitária;9xnd6k7yi
Benfica;9xnd6g7yi
Cascais;9xid5u7yi
Maia;a4kd827yi
Viana do Castelo;a5td7h7yi
Marvila;9xmd6q7yi
Bragança;a65dd87yi
Oeiras;9xhd657yi
Beja;9vlda67yi
Esposende;a5ed7m7yi
Afurada de Baixo;a4ad7z7yi
Almada;9xgd6k7yi
Olivais;9xpd6p7yi
Lagos;9t2d7x7yi
Castelo Branco;a0mdb77yi
Alcabideche;9xld5v7yi
Bairro Novo;a5ed8n7yi
Espinho;a3xd807yi
Câmara de Lobos;9gpcku6zi
Alvalade;9xnd6m7yi
Arrentela;9xad6q7yi
Montijo;9xjd737yi
Charneca de Caparica;9xad6h7yi
Campanhã;a4cd877yi
Santarém;9yzd7v7yi
Olhão;9svda87yi
Aldoar;a4dd7x7yi
Póvoa de Varzim;a4yd7o7yi
Senhora da Hora;a4fd7z7yi
Marinha Grande;a0fd777yi
Póvoa de Santa Iria;9xyd6u7yi
Sequeira;a2ndbx7yi
Massamá;9xnd687yi
Matosinhos;a4ed7v7yi
Gondomar;a4ad8b7yi
Águas Santas;a4hd867yi
Vila do Conde;a4vd7p7yi
Caldas da Rainha;9zgd6m7yi
Alfornelos;9xod6f7yi
São Martinho;9gocky6zi
Canidelo;a48d7z7yi
Sintra;9xsd5y7yi
Paço de Arcos;9xid677yi
Santo António;9gqckz6zi
São Mamede de Infesta;a4fd837yi
Quinta Do Conde;9x5d6w7yi
Torres Vedras;9yld6a7yi
Quarteira;9szd9i7yi
Oliveira do Douro;a48d867yi
Fânzeres;a4dd8b7yi
Estoril;9xjd5w7yh
Carnaxide;9xld6b7yh
Porto de Mós;9t1d7w7yh
Pinhal Novo;9xbd797yh
Monte Estoril;9xjd5v7yh
Caniço;9gpcl86zh
Sete Rios;9xmd6k7yh
Pontinha;9xpd6g7yh
São Jorge de Arroios;9xld6m7yh
Bomfim;a4bd857yh
Arcos de Valdevez;a69d8m7yh
Moscavide e Portela;9xqd6q7yh
Parque das Nações;9xpd6q7yh
Portalegre;9z5dbd7yh
Valadares;a45d817yh
Lordelo do Ouro;a4bd7z7yh
Campo De Ourique;9xkd6j7yh
São João da Madeira;a3md8f7yh
Lavradio;9xfd6v7yh
Bougado;a4ud897yh
Azambuja;9yjd7d7yh
Valongo;a4fd8e7yh
Vilar;a2vd817yh
Caparica;9xed6g7yh
Areeiro;9xmd6m7yh
Arouca;a3pd947yh
Belas;9xqd6a7yh
Laranjeiro;9xed6l7yh
Linda-a-Velha;9xjd6c7yh
Falagueira;9xod6d7yh
Trofa;a4ud887yh
Baião;a4cd9p7yh
Laranjeiro;9szdab7yh
Carcavelos;9xhd647yh
Alcântara;9xid6j7yh
Camarate;9xsd6n7yh
Ponta Delgada;9uubwp6uh
Entroncamento;9znd8h7yh
Paredes;a4gd8v7yh
Monção;a6wd8g7yh
Piedade;9xfd6k7yh
Custoias;a47dbo7yh
Algés;9xid6d7yh
Tomar;a00d8n7yh
Barcelos;a5dd827yh
São Tiago de Custoias;a4gd817yh
Pedroso;a51d7p7yh
Vilar de Andorinho;a47d857yh
São João da Talha;9xud6q7yh
Azeitão;9x0d6z7yh
Santa Iria da Azóia;9xwd6q7yh
Ovar;a3id817yh
Vila Franca de Xira;9y8d717yh
Carnide;9xpd6i7yh
Leça da Palmeira;a4fd7u7yh
Loulé;9t6d9q7yh
Moita;9xdd717yh
Sacavém;9xrd6p7yh
Covilhã;a1wdb57yh
Chaves;a5ydb97yh
Ramada;9xsd6h7yh
Pombal;a0wd817yh
Quelfes;9sydaa7yh
Ílhavo;a2sd7x7yh
Parede;9xhd617yh
Eiras;a1td8m7yh
São Paulo de Frades;a1td8p7yh
Condeixa-a-Nova;a1fd8e7yh
Alfragide;9xld6e7yh
São Pedro da Cova;a4ad8e7yh
Vila Real;a4qdai7yh
Palmela;9x5d7a7yh
Fafe;a55d9b7yh
Cabeceiras de Basto;a5bd9t7yh
Belém;9xid6h7yh
Feira;a3pd8a7yh
Leça do Bailio;a4hd817yh
Vialonga;9xzd6s7yh
Buraca;9xld6g7yh
Albufeira;9t1d937yh
Baguim do Monte;a4fd8a7yh
Alcobaça;9zvd727yh
Vermoim;a4kd837yh
Peniche;9zcd5y7yh
Campo Grande;9xnd6j7yh
Ribeira de Frades;a1pd8g7yh
São Martinho do Bispo;a1pd8i7yh
Alfena;a4kd8c7yh
Tavira;9t5dar7yh
Torres Novas;9zod8a7yh
=PW
Ngerulmud;7iuo9y9m0
=PY
Asunción;4zr9fv1xp;亞松森|아순시온|اسنشن|آسونسیون|アスンシオン|Asunson|Assuncao|Asuns'on|Asunsaun|Asunsion|Asunsjon|Asunsyon|Asunsyun|Paraguay|Asounsion|Asounsyon|Assumptio|Assuncion|Asunciono|Asuns'jon|Asunsjona|Asounthion|Asunsjonas|Асунсион|Асунсьон|आसुन्सियोन|อะซุนซิออง
Ciudad del Este;4z69o71xm
San Lorenzo;4zm9g91xl
Capiatá;4zk9gf1xl
Lambaré;4zl9fz1xk
Fernando de la Mora;4zm9g81xk
Limpio;5039gb1xk
Nemby;4zh9g61xk
Pedro Juan Caballero;57d9l61xk
Encarnación;4u39kt1xj
Mariano Roque Alonso;4zz9g71xj
Itauguá;4zh9gp1xj
Villa Elisa;4zj9g11xj
Villa Hayes;50b9g71xj
Caacupé;4zh9ha1xj
San Antonio;4ze9g51xj
Caaguazú;4z99ke1xj
Presidente Franco;4z09ob1xj
Coronel Oviedo;4zb9j81xj
Concepción;5509gh1xj
Villarrica;4yh9j81xi
Pilar;4ve9e11xi
Yby Yaú;5679iy1xi
Caazapá;4x89jf1xi
Filadelfia;57y9991xh
Itá;4z69gn1xh
San Juan Bautista;4vx9ha1xh
Loma Plata;57u99s1xh
=QA
Doha;8w9hv566m;دوحه|دوحە|دەوحە
Ar Rayyān;8w9huu66m;الريان
Lusail;8wmhv366l
Al Maţār al ‘Atīq;8w5hv866k;المطار العتيق
Al Manşūrah;8w7hv566j;اَلْمَنْصُورَة
Az̧ Z̧a‘āyin;8x2hv066j;الزعيم|الضعاين|الظعاين
Madīnat Khalīfah;8wchv066j;مَدِينَة خَلِيفَة
An Najmah;8w7hv666j;اَلنَّجْمَة
Al ‘Unayzah;8wehv366i;العنيزة|عُنَيْزَة
Umm Ghuwaylīnah;8x3hu366i;أُمّ غُوَيْلِينَة
As Sadd;8w9hv266i;اَلسَّدّ
Farīj Kulayb;8wbhv166i;فريج كليب
Farīj al Amīr;8w9huz66i;فريج الأمير
Umm Şalāl Muḩammad;8wmhut66i;أم صلال محمد|أُمّ صَلاَل مُحَمَّد
Mu‘aydhir Rawḑat Rāshid;8w6hus66i;معيذر روضة راشد|مُعَيْذِر أَبُو اَلدَّوْم
As Sulţah al Jadīdah;8w6hv366i;اَلسّلطَة اَلْجَدِيدَة
Al Wakrah;8vxhvc66i;الوكرة
Ath Thumāmah Khamsūn;8w2hv766h;الثمامة ٥٠
Ath Thumāmah Sab‘ah wa Arba‘ūn;8w4hv866h;الثمامة ٤٧
Ath Thumāmah Sittah wa Arba‘ūn;8w3hv666h;الثمامة ٤٦
Nu‘ayjah;8w5hv566h;نُعَيْجَة
Al Ghānim;8w8hv666h;اَلْغَانِم
Al Khawr;8xchv366h;الخور|الخور والدخيرة
Umm Lakhbā;8wehuz66h;أم لخبا
Al Hilāl al Gharbīyah;8w6hv566h;اَلْهِلاَل اَلْغَرْبِيَّة
Al Hilāl ash Sharqīyah;8w6hv766h;اَلْهِلاَل اَلشَّرْقِيَّة
=RE
Saint-Denis;5c0i6196l
Saint-Paul;5bni5j96k
Saint-Pierre;5aqi6496k
Le Tampon;5awi6896k
Saint-André;5bsi6l96j
Saint-Louis;5avi5x96j
Saint-Joseph;5ami6i96i
Saint-Benoît;5bki6s96i
La Possession;5bvi5p96i
Saint-Leu;5b7i5l96i
Sainte-Marie;5byi6b96i
Le Port;5bui5l96i
Piton Saint-Leu;5b2i5o96i
Sainte-Suzanne;5bxi6h96i
=RO
Bucharest;adffwj7kp;ブカレスト|布加勒斯特|부쿠레슈티|Bükreş|Buekres|Bucarest|Bukarest|Bukurest|Buxarest|Boekarest|Bucaresta|Bucareste|Bucuresti|Bukaresta|Bukareste|Bukaresto|Bukareszt|Bukharest|Bukureshh|Bukuresht|Bukarestas|Bukharehst|Bukureshta|Bukureshti|Boukouresti|بخارست|بوخارست|Букурещ|Букурешт
Sector 3;adefwp7km
Iaşi;al1g0o7km
Sector 6;adgfwa7km
Constanţa;acqg3j7km
Sector 2;adhfwl7km
Sector 4;adafwk7km
Cluj-Napoca;ajxfpk7km
Sector 5;adbfwf7km
Braşov;agtfv57km
Timişoara;ah3fiz7km
Craiova;ad4fq47kl
Sector 1;adlfwd7kl
Galaţi;ag8g1x7kl
Târgu Mureş;ajafs87kl
Oradea;akpfkw7kl
Ploieşti;aevfwa7kl
Arad;aiafj87kl
Brăila;afrg1p7kl
Piteşti;aelft37kl
Bacău;ajdfyr7kl
Sibiu;ah8fr37kl
Satu Mare;amsfni7kk
Baia Mare;amefph7kk
Buzău;afffyj7kk
Piatra Neamţ;akcfx57kk
Râmnicu Vâlcea;afafrp7kk
Botoşani;amnfy37kk
Suceava;ambfwx7kk
Reşiţa;afufkt7kk
Drobeta-Turnu Severin;adzfmx7kk
Bistriţa;akxfs27kk
Târgu Jiu;af5foo7kj
Hunedoara;ah3fnm7kj
Roman;akcfyt7kj
Bârlad;aifg0v7kj
Deva;ahgfnm7kj
Târgovişte;aetfuq7kj
Focșani;agyfzi7kj
Tulcea;afig417kj
Alba Iulia;ahzfpi7kj
Slatina;adffrp7kj
Vaslui;ajjg117kj
Giurgiu;abxfw47kj
Mediaş;ai9frn7kj
Zalău;al4fo17kj
Sfântu Gheorghe;ahffvm7kj
Paşcani;al9fy87kj
Petroşani;ag6fox7kj
Turda;ajdfq27kj
Medgidia;acxg2k7kj
Lugoj;agxfku7kj
Câmpina;afdfvh7ki
Slobozia;adsg007ki
Tecuci;ahdg077ki
Sighetu Marmaţiei;an5fqd7ki
Alexandria;ac6fud7ki
Mangalia;abqg3e7ki
Râmnicu Sărat;ag2fz57ki
Dej;akzfqb7ki
Odorheiu Secuiesc;aimfua7ki
Reghin-Sat;ajyfso7ki
Sighișoara;aiefsv7ki
Miercurea-Ciuc;airfvo7ki
Caracal;ackfrn7ki
Năvodari;ad4g3g7ki
Feteşti;adag1b7ki
Curtea de Argeş;afdfsj7ki
Dorohoi;an7fxc7ki
Făgăraș;ahdftd7ki
Lupeni;ag0fok7ki
Voluntari;adlfwp7ki
Săcele;agqfvf7ki
Fălticeni;altfx27ki
Huşi;ajng1y7ki
Mioveni;aewfta7ki
Turnu Măgurele;abjft37ki
Târnăveni;aipfri7ki
Aiud;ainfpw7ki
Caransebeş;ag6flq7ki
Roșiorii de Vede;ackfte7ki
Sebeş;ahofph7ki
Borşa;amefsi7ki
Câmpia Turzii;ajbfqc7ki
Petrila;ag9fp27ki
Zărnești;agkfuc7ki
Cugir;ahcfox7ki
Moineşti;aj4fxl7ki
Rădăuți;amxfw07ki
Fetești-Gară;adeg1b7ki
Gherla;aknfqg7ki
Comăneşti;aiyfxg7ki
Olteniţa;acgfxz7kh
Motru;aegfnt7kh
Carei;amgfmf7kh
Orăştie;ahbfog7kh
Buftea;adsfw37kh
Drăgăşani;ae1frf7kh
Balş;ad7fqy7kh
Moreni;aeyfv87kh
Codlea;agyfup7kh
Târgu Neamţ;al4fx97kh
Blaj;aiafqg7kh
Târgu Secuiesc;ahsfwl7kh
Corabia;abmfs27kh
Băicoi;af3fvt7kh
Gheorgheni;ajsfv47kh
Vulcan;ag2fon7kh
Câmpulung Moldovenesc;am1fv17kh
Băileşti;acafov7kh
Filiaşi;adrfpc7kh
Calafat;ac7fnp7kh
Cernavodă;ad6g1v7kh
Buhuşi;ajsfy67kh
Breaza;afifvb7kh
Salonta;ak0fk57kh
Luduş;aj4fqy7kh
Urziceni;ae8fxz7kh
Baia Sprie;amefpt7kh
Bocşa;ag1fkb7kh
Pantelimon;adhfws7kh
Vatra Dornei;aljfuh7kh
Brad;ai5fna7kh
Gura Humorului;am3fvy7kh
Şimleu Silvaniei;al7fnc7kh
Mizil;af2fxh7kh
Vişeu de Sus;amjfrv7kh
Ocna Mureş;aiufq97kh
Popeşti-Leordeni;adafwp7kh
Râşnov;agmfup7kh
Zimnicea;abafug7kh
Adjud;ai2fzi7kh
Cisnădie;ah0fr37kh
Găeşti;ae8fuc7kh
=RS
Belgrade;aegfgv7go;贝尔格莱德|베오그라드|بلغراد|بېلگراد|ベオグラード|Belgrad|Belgrau|Belgrað|Belqrad|Beograd|Belehrad|Belgrada|Belgrado|Belgradu|Belohrod|Beogradi|Beogrado|Bjalgrad|Běłohród|Belgradas|Beligradi|Belogradum|Singidunum|Nandorfehervar|Белград|Београд|बॅलग्रेड|Бѣлъ Градъ
Niš;aacfku7gm;Ниш
Novi Sad;afpff47gl;Нови Сад|Нови-Сад|Новий Сад
Zemun;aelfgo7gl;Земун
Kragujevac;acafi47gl;Крагуевац|Крагујевац|Крагуєваць
Čačak;abxfgj7gk;Чачак|Градац
Subotica;ai2fen7gk;Суботица
Leskovac;a9gfkz7gk;Лесковац
Novi Pazar;a9ufgz7gk;Нови Пазар|Нови пазар|Нови-Пазар
Kraljevo;abhfhh7gk;Кралево|Краљево|Карановац
Zrenjanin;ag2fgm7gk;Зренянин|Зрењанин|Бечкерек
Pančevo;aenfhc7gk;Панчево|Панчава
Kruševac;ab2fj97gk;Крушевац|Крушавац
Užice;abuff57gj;Ужице|Ужыцы|Оужицє
Smederevo;ae2fi57gj;Смедерево|Смедереве|Смедарава
Valjevo;ad0ffa7gj;Валево|Ваљево
Vranje;a87fku7gj;Вране|Враня|Врање
Šabac;aebfep7gj;Шабац
Zaječar;abyflu7gj;Заечар|Зајечар|Зайчар
Trstenik;ab6fic7gj;Трстеник|Тръстеник
Sombor;ah5fd37gj;Сомбор|Сомбар
Kikinda;ahbfgv7gi;Кикинда
Požarevac;adyfiv7gi;Пожаревац|Пожареваць|Пожарєвьць
Pirot;a9vfmr7gi;Пирот|Пірот
Bor;acffle7gi;Бор
Sremska Mitrovica;aeyfeh7gi;Сирмијум
Vršac;afcfj67gi;Вршац|Вършац
Jagodina;ac6fj27gi;Ягодина|Јагодина
Ruma;af1ff27gi;Рума
Bačka Palanka;afpfdw7gi;Бачка Паланка|Бачка паланка|Бачка-Паланка
Prokuplje;aa3fjz7gi;Прокупле|Прокупље
Smederevska Palanka;ad9fi87gi;Смедеревска Паланка|Смедеревска паланка|Смедеревска-Паланка
Vrbas;aglfek7gi;Врбас|Вербас
Bečej;agqffn7gi;Бечей|Бечеј
Knjazevac;ab1flu7gi
Inđija;af5ffs7gi;Инђија|Инѓија|Инджия
Aranđelovac;ad3fh47gi;Аранђеловац|Аранджеловац
Gornji Milanovac;acbfgu7gi;Горни Милановац|Горњи Милановац
Lazarevac;adbfga7gh;Лазаревац
Sremčica;ae4fgn7gh
Ćuprija;ac1fjd7gh;Ћуприја|Чуприя
Senta;ahlffs7gh;Сента
Loznica;adpfdg7gh;Лозницæ|Лозница
Apatin;agvfcq7gh;Апатин
Futog;afofer7gh;Футог
Negotin;acvfml7gh;Неготин
Obrenovac;ae1fg47gh;Обреновац|Палеж
Stara Pazova;aezfg07gh;Стара Пазова
Bačka Topola;ahafej7gh
Nova Pazova;aeufg67gh;Нова Пазова
=RU
Moscow;b8vgsi87s;莫斯科|مسکو|ماسکو|モスクワ|모스크바|Mosca|Mosco|Moscu|Moska|Mosko|Mosku|Musko|Maskav|Maskva|Moscfa|Moscha|Moscou|Moscoƿ|Moscua|Moskau|Moskou|Moskov|Moskow|Moskua|Moskva|Moskvo|Moskwa|Muskav|Maeskuy|Maskava|Moscova|Moscovo|Moskokh|Moskova|Moskovu|Moskowa|Moskuas|Moszkva|Matxcova|Mat-xco-va|Муско|Məskəү|มอสโก|मास्को|मॉस्को|Москва|Москъва|Москох
Saint Petersburg;bkig8787r;СПб|Питер|圣彼得堡|聖彼得堡|Piter|Pietari|Piiteri|Leningrad|Peterburg|Peterburi|Petrograd|Petrohrad|Betuyrbukh|Leningrado|Lenjingrad|Peterburgo|Petersburg|Petrapilis|Petrogrado|Petropolis|Petursborg|St Petersburg|Szentpetervar|Agia Petroupole|Cankt-Peterburg|San Petersburgo|San Pietroburgo|San Pietruburgu|Sankt Peterburg|Sankt-Peterburq|Sanktpeterburga|Sant Petersburg|Santa Peterburg|Sao Petersburgo|Sint Petersbork|Sint-Petersburg|Sankt Petersborg|Sankt Petersburg|Sankt Peterzburg|Sankt-Peterburgo|Sant Petersburgo|Sant-Petersbourg|Saint Petersbourg|Sankt Peterburgas|Sankti Petursborg|Sankt Peitersbuerg|레닌그라드|상트페테르부르크|サンクトペテルブルク|سن پترزبورگ|سانت بطرسبرغ|सेंट पीटर्सबर्ग|เซนต์ปีเตอร์สเบิร์ก|Санкт Петербург|Санкт-Петербург|Санкт Петерзбург
Novosibirsk;b6ukad60p;新西伯利亚|新西伯利亞|노보시비르스크|ノヴォシビルスク|Cen Ceper|Novosibir|Novasibirsk|Nowosibirsk|Nowosybirsk|Nobosimpirsk|Novosibirs'k|Novosibirska|Novosibirsko|Novosimpirsk|Novossibirsk|Nowosibirski|Novosibir'sku|Novosibirscum|Novosibirskaj|Novosibirskas|Novoszibirszk|Vil' Sibirkar|Novonikolaevsk|Odsibiren' osh|Novo-Nikolaevsk|Novonikolayevsk|Novo-Nikolaievsk|Çĕн Çĕпĕр|Новосібір|نووسیبرسک|نوووسبرسک|โนโวซีบีสค์|नोवोसिबिर्स्क|Новосибирск|Новосибирьскъ|Новосибирскай
Yekaterinburg;bbyike6sp;葉卡捷琳堡|예카테린부르크|エカテリンブルク|یکاترنبرگ|يكاترينبرج|Sverdlovsk|Sverolovsk|Ekaterinburg|Ekaterimburgo|Ekaterinbourg|Ekaterinburgo|Jekaterinburg|Jekaterynburg|Yekaterinburq|Jekaterinburga|Jekatyerinburg|Catharinoburgum|Jekaterinburgas|Jekaterinenburg|Свердловск|Екатеринбург|येकातेरिनबर्ग
Nizhniy Novgorod;bahha887o;Gorki|Gorky|Gorkey|Gorkii|Gorkij|Gor'kij|Gor'kiy|Nijni Novgorod|Nizni Novgorod|Nijnii Novgorod|Nishni-Nowgorod|Nizhni Novgorod|Nizhni Novqorod|Nizhny Novgorod|Niznij Nowgorod|Nischni Nowgorod|Nishnii Nowgorod|Nishnij Nowgorod|Nizhnii Novgorod|Nizhnij Novgorod|Nizjnij Novgorod|Nyizsnyij Novgorod|Горький|Нижний Новгород|ニジニ・ノヴゴロド|nijini・novugorodo|nzہny nwwgwrڈ|نزہنی نووگورڈ|निज़नी नोवगोरोड
Kazan;b8zhog87o;喀山|카잔|カザン|Caza|Kasa|Kasan|Kuzon|Qazan|Qozon|Kaasan|Kazana|Kazane|Kazani|Kazanj|Kazano|Khusan|Kozan'|Kuazan|Casanum|Khuazan|Kazan' osh|Озаҥ|Казан|कझान|काज़ान|قازان|كازان|คาซาน|Казань|Къазан
Chelyabinsk;b78imn6so;첼랴빈스크|Силәбе|Челепи|車里雅賓斯克|Chelepi|Cheljaba|Cheljabe|Cheljabi|Celabinsk|Celabinska|Celaebinsk|Celeabinsk|Celiabinsc|Celjabinsk|Celyabinsk|Chilobinsk|Czelabinsk|Celiabinsca|Celjabinsko|Chaljabinsk|Cheliabinsk|Cheljabinsk|Tjeljabinsk|Tseljabinsk|Txeliabinsk|Celiabinskas|Cheljaba osh|Cheljabins'k|Cseljabinszk|Tcheliabinsk|Tchelyabinsk|Tseliampinsk|Tsjeljabinsk|Tsyelyabinsk|Tscheljabinsk|چلیابنسک|چلیابینسک|チェリャビンスク|चेल्याबिंस्क|चेलियाबिन्स्क|Челябинск|Челяба|Челябе
Omsk;b6rjjt61o;옴스크|Omby|Omsc|Omva|Omium|Oms'k|Omska|Omsko|Omszk|Om'sku|Omskas|Омбы|Омва|امسک|أومسك|オムスク|鄂木斯克|ओम्स्क|ออมสค์|Омск|Омськ|Омьскъ
Samara;b1thra8eo;薩馬拉|사마라|サマーラ|Samar|Samare|Samaro|Samarae|Samarga|Szamara|Kuibyshev|Kujbyshev|Kuybyshev|Samar osh|Kuibyschew|Samar khot|smarہ|سمارا|Самар|Һамар|समारा|ซามารา|Самара|Самарæ
Rostov-on-Don;al6gyb87o;Rostov|Rostow|Rostov Don|Doni Rostov|Donyn Rostov|Rostov Donal|Rostov-Donyl|Rostov-an-Don|Rostov-pe-Don|Dondagy Rostov|Rastou-na-Done|Rostov-ar-Ddon|Rostov-na-Donu|Tyndagy Rostov|Dondaguy Rostov|Dondokhi Rostov|Rosztov-na-Donu|Rostov-Tan-cinchi|Rostov-sur-le-Don|Rostov sopra-u-Donu|Ростов|Донын Ростов|顿河畔罗斯托夫|로스토프나도누|ロストフ・ナ・ドヌ|रोस्तोव दॉन|रोस्तोव-नास-दोनु|rwsٹww-na-ڈwnw|روستوف-نا-دونو|Дондохи Ростов|Дондагъы Ростов
Ufa;b62i7h6so;烏法|우파|Ufа|Уфа|ウファ|Ephu|Oefa|Oufa|Owfa|Uffa|Ouffa|أوفا|ऊफ़ा|Оуфа
Krasnoyarsk;b9ol255po;Краснояр|Қызылтас|クラスノヤルスク|크라스노야르스크|Krasnodor|Krasnojar|Krasnoiarsk|Krasnojarsk|Krasnojarsko|كراسنويارسك|کراسنویارسک|क्रास्नोयार्स्क|Красноярск|Краснодор
Voronezh;axjgwv87o;보로네시|ヴォロネジ|Voronej|Voronez|Woronez|Voronejo|Voroneza|Voronezj|Voronjez|Woronesh|Voronezas|Woronesch|Voronezhskaja oblast'|Воронеж|Воронежская область
Volgograd;apbhbm8to;伏尔加格勒|伏爾加格勒|볼고그라드|Caricin|Caricyn|Zarizyn|Tsaritsyn|Valgagrad|Volqoqrad|Wolgograd|Wołgograd|Stalingrad|Vl'gogradu|Volgograda|Volgogrado|Stalingrado|Staljingrad|Volgogradas|Volgogradum|Estalingrado|Volnkonkrant|Царицин|Царицын|ولگوگراد|فولجوجراد|ヴォルゴグラード|วอลโกกราด|वोल्गोग्राद|Волгоград|Вльгоградъ|Валгаград
Perm;bf5i896so;Перм|Пермь|Перĕм
Krasnodar;af5gwa87o;Краснодар
Saratov;ax6hfr8ho;Саратов|Саратовъ|Саратов ош
Tyumen;bcriy16so;Тюмен|Тюмень|Цюмень
Tolyatti;b2php38en;Тольятти|Тольятти ош|Толиати
Izhevsk;bbxhzs8en;Ижевск|Іжевськ|Иж
Barnaul;b28kcl4zn;Барнаул|Барнауыл
Ulyanovsk;b4xhmf8on;Уляновск|Ульяновск|Ульяновськ
Irkutsk;azalxp5gn;Иркутск|Иркутскай|Іркуцк
Khabarovsk;aomoba6pn;Хабаровск|Хабаровськ|Хабаровскай
Yaroslavl;be3gyr87n;Ярославль|Ярославъл|Ярославль ош
Vladivostok;a9ro2b6pn;Владивосток|Владик
Makhachkala;a9ehjy87n;Махачкала|МахIачхъала|МахІачхъала
Tomsk;baykg26ln;Томск|Томськ|Томьскъ
Orenburg;axti526sn;Оренбург|Арэнбург|Оренбург ош
Kemerovo;b7rkj65zn;Кемерово|Кемерово хот|Кемĕр
Novokuznetsk;b3ckm25zn;Новокузнецк|Новокузнетск|Новокузнецьк
Ryazan’;b5rgya87n;Рязань
Astrakhan;airhlg7en;Астрахан|Астрахань|Астархаан
Penza;b1shd187n;Пенза|Пензæ|Пензе
Naberezhnyye Chelny;b8uhxm87n;Набережные Челны|Брежнев|Яр Чаллы
Lipetsk;b03gxv87n;Липецк|Липецьк|Липеск
Kirov;bgshpy7wn;Киров
Kalininskiy;bkog8f87n;Калининский
Cheboksary;b9xhj987n;Чебоксары|Чебоксар|Чебоксара
Tula;b4kgsi87n;Тулă|Тула|Тулæ
Kaliningrad;b5zfgz7vn;Калининград|Кенигзберг
Kursk;axpgoi87n;Курск|Курськ
Stavropol;af3h4k87n;Ставропол|Ставрополь
Bryansk;b1zgjc87n;Брянск|Брянськ
Tver;bbygnq87m;Твер|Тверь|Цвер
Magnitogorsk;b2cifx6sm;Магнитогорск
Ivanovo;bcch1t87m;Иваново|Иванов|Іваново
Nizhny Tagil;bewiik6sm;Нижний Тагил
Ulan-Ude;axzm6w5gm;Улан Уде|Улан-Удэ|Улаан-Удэ
Vladimir;b9yh0887m;Владимир|Владимир хот|Владимир шаары
Arkhangel’sk;bxbh0n87m;Архангельск|Архангельськ
Chita;aykmn953m;Чита
Belgorod;aukgpm87m;Белгород|Белгород шаары|Белгарад
Kaluga;b5hgor87m;Калуга|Калугæ|Калуго
Krasnogvargeisky;bklg8o87m;Красногвардейский
Smolensk;b66gd187m;Смоленск|Смоленськ|Смоленьск
Sochi;ab4gyc87m;Сочи
Volzhsky;apjhce8tm;Волжский
Saransk;b4ihdh87m;Саранск|Саранськ|Саран
Cherepovets;bi9gta87m;Череповец|Череповетс|Череповець
Vologda;biigys87m;Вологда|Вӧлӧгда|Bологда
Kurgan;b81ixi6sm;Курган
Vladikavkaz;a9khc387m;Владикавказ|Тэрчкъалэ|Буро-ГӀала
Orël;b15go887m;Орел|Орёл
Surgut;bo6jjy6sm;Сургут|Соргыт
Grozny;aabhex87m;Грозны|Грозный|г. Грозный
Murmansk;c9lgfy87m;Мурманск|Мурманськ|Мурманск ош
Tambov;b0ih3487m;Тамбов|Томбу
Petrozavodsk;bpmgjf87m;Петрозаводск|Петрозаводськ|Петразаводск
Taganrog;al8gw387m;Таганрог
Kostroma;behh1p87m;Кострома|Кастрама
Komsomolsk-on-Amur;aufogl6pm;Комсомольск-на-Амуре
Yoshkar-Ola;bbchl187m;Йошкaр-Ола|Йошкар-Ола
Sterlitamak;b30i7f6sm;Стерлитамак|Çтерлĕ
Bratsk;b9xlq95gm;Брацк|Братск|Братськ
Orsk;awbieh6sm;Орск|Орськ|Орски
Syktyvkar;bpaht687m;Сыктывкар|Сиктивкар|Усть-Сысольск
Nizhnevartovsk;bn9jsn6sm;Нижневартовск|Нижньовартовськ
Angarsk;b00lwn5gm;Ангарск|Ангарськ
Mar’ino;b8lgss87m;Марьино
Novorossiysk;ae9gsw87m;Новороссийск
Khimki;b9agrz87m;Химки
Nalchik;aauh9687m;Налчик|Нальчик|Налшык
Yakutsk;bqbnwc6ql;Якутск|Дьокуускай
Nizhnekamsk;b8khvy87l;Нижнекамск|Нижньокамськ|Анат Кама
Dzerzhinsk;ba8h8q87l;Дзержинск|Дзержинськ|Дзяржынск
Staryy Oskol;awigt587l;Старый Оскол|Старий Оскол
Blagoveshchensk;atonq96ql;Благовещенск|Благовешченск|Благовешенск
Velikiy Novgorod;bgkgav87l;Велики Новгород|Великий Новгород|Новгород
Shakhty;amkgzq87l;Шахты|Шахти
Prokop’yevsk;b3skkw5zl;Прокопьевск
Rybinsk;bf9gvw87l;Рыбинск|Рибинск
Vykhino-Zhulebino;b8qgt187l;Выхино-Жулебино
Zelenograd;b9igra87l;Зеленоград
Biysk;azxkgo4zl;Бийск
Centralniy;bkhg8c87l;Центральный
Pskov;bemg2p87l;Псков|Псков ош|Плесков
Vasyl'evsky Ostrov;bkig8187l;Васильевский остров|Василеостровский
Severnyy;b9egsb87l;Северный
Balakovo;ayjhks8hl;Балаково|Балакова
Armavir;af0h2787l;Армавир
Yuzhno-Sakhalinsk;akfowi6al;Южносахалинск|Южно-Сахалинск|Јужно-Сахалинск
Engels;ax0hg38hl;Енгельс|Энгельс|Покровська Слобода
Severodvinsk;bxcgyn87l;Северодвинск
Zlatoust;b79ihp6sl;Златоуст|Златавуст
Syzran;b1ohmn8el;Сызрань
Abakan;b38kxz5pl;Абакан|Абакан шаары
Kamensk-Ural’skiy;bapio16sl;Каменск-Уральский|Каменск
Petropavlovsk-Kamchatsky;b1eq4n5ll;Петропавловск Камчатски|Петропавловск-Камчатски|Петропавловск-Камчатский
Yasenevo;b8hgs887l;Ясенево
Podolsk;b7ygsb87l;Подольск
Lyublino;b8ogsw87l;Люблино
Berezniki;bj1i9u6sl;Березники|Кыдззакар
Volgodonsk;alzh5387l;Волгодонск|Волгодонськ|Валгадонск
Miass;b6xiiz6sl;Миасс|Миас|Мияс
Novocherkassk;alqgzd87l;Новочеркасск|Новочеркаск|Новочеркаськ
Nazran;aa3hcd87l;Назрань|Назра́нь|Нана-Нааьсаре
Rubtsovsk;ax3k5l4zl;Рубцовск|Рубцовськ|Рупцовск
Mytishchi;b9bgst87l;Мытищи|Митишчи
Salavat;b2ai7b6sl;Салават|Салауат
Bibirevo;b98gsg87l;Бибирево
Khoroshëvo-Mnevniki;b8ygs387l;Хорошёво-Мнёвники|Хорошёво
Gol’yanovo;b92gt187l;Гольяново
Admiralteisky;bkgg8687l;Адмиралтейский
Ussuriysk;aboo2k6pl;Уссурийск
Lyubertsy;b8ogt987l;Люберцы|Люберци|Љуберци
Kovrov;bakh2s87l;Ковров
Strogino;b92grx87l;Строгино
Balashikha;b8zgtf87l;Балашиха|Балашихæ|Балашихе
Zhulebino;b8qgt587l;Жулебино
Kolomna;b6zgvq87l;Коломна|Коломьна|Коломнæ
Kuntsevo;b8ugrw87l;Кунцево|Кунцёво
Nakhodka;a90o586pl;Находка|Находкæ|Находко
Elektrostal’;b8zguu87l;Электросталь
Biryulëvo;b8fgso87l;Бирюлёво
Orekhovo-Borisovo;b8hgst87l;Орехово-Борисово
Kuz’minki;b8qgt087l;Кузьминки
Novyye Kuz’minki;b8qgsv87l;Новые Кузьминки
Pyatigorsk;acdh7l87l;Пятигорск|Пятигорськ
Chertanovo Yuzhnoye;b8fgsg87l;Чертаново Второе
Maykop;adxgze87l;Майкоп|Майкъоп|Мыекъуапэ
Zheleznodorozhnyy;b8ugtm87l;Железнодорожный
Norilsk;cankp05pl;Норилск|Норильск|Норильськ
Al’met’yevsk;b6ihxc87l;Альметьевск
Korolev;b9bgt387l;Королев|Королёв|Корольов
Kolpino;bjzg8z87l;Колпино
Odintsovo;b8ngrk87l;Одинцово|Одинтсово
Nevinnomyssk;adzh4i87l;Невинномысск|Невинномисск|Невинномиськ
Pervouralsk;bc3iii6sl;Первоуральск
Kislovodsk;abzh6o87k;Кисловодск|Кисловодськ|Нартсанэ
Dimitrovgrad;b4lhpu8ok;Димитровград|Митреень ош|Мелекес
Novomoskovsk;b41gud87k;Новомосковск|Новомосковськ|Сталиногорск
Petrogradka;bklg8787k;Петроградка
Ramenki;b8qgs687k;Раменки
Zyablikovo;b8igsx87k;Зябликово
Kamyshin;at5he58tk;Камышин|Камишин|Камышын
Novocheboksarsk;b9vhjw87k;Новочебоксарск|Çĕнĕ Шупашкар
Serpukhov;b6kgry87k;Серпухов
Ivanovskoye;b8xgt387k;Ивановское
Orekhovo-Borisovo Severnoye;b8igso87k;Орехово-Борисово Северное
Murom;b8dh4q87k;Муром|Мурам
Khasavyurt;aa5hhf87k;Хасавюрт|Хасав-юрт|Хасав
Neftekamsk;b9ti2q6sk;Нефтекамск|Нефтекамськ|Нефтекама
Tyoply Stan;b8igs587k;Тёплый Стан
Tsaritsyno;b8jgsl87k;Царицыно|Царицино
Cherkessk;acuh4t87k;Черкесск|Черкесськ|Черкеск
Presnenskiy;b8wgsc87k;Пресненский|Красная Пресня
Veshnyaki;b8sgt287k;Вешняки
Zyuzino;b8mgsd87k;Зюзино
Orekhovo-Zuyevo;b91gwb87k;Орехово-Зуево|Арэхава-Зуева
Solntsevo;b8kgru87k;Солнцево
Troparëvo;b8mgs487k;Тропарёво
Achinsk;babkve5pk;Ачинск|Ачинськ|Ачынск
Kyzyl;axnl6c5pk;Кызыл|Қызыл|Кызыл шаары
Taganskiy;b8tgsn87k;Таганский
Noginsk;b96gut87k;Ногинск
Yelets;b05guz87k;Елец|Јелец|Єлець
Novo-Peredelkino;b8lgrq87k;Ново-Переделкино
Ochakovo-Matveyevskoye;b8ogs187k;Очаково-Матвеевское
Tobolsk;bfoj5l6sk;Тобольск
Shchyolkovo;b9cgth87k;Шчолково|Щелково|Щёлково
Nefteyugansk;bnqjho6sk;Нефтеюганск
Novokuybyshevsk;b1ihqq8ek;Новокуйбышевск|Новокуйбишевск|Новокуйбишевськ
Noyabrsk;btjjpk6sk;Ноябрьск
Bataysk;akygyg87k;Батайск
Seversk;bb8kft6lk;Северск
Arzamas;b7wh9s87k;Арзамас
Sergiyev Posad;bafgty87k;Сергиев Посад
Leninsk-Kuznetsky;b5ukjd5zk;Ленинск-Кузнецкий
Oktyabrsky;b5ci0j6sk;Октябрьский
Obninsk;b73gpp87k;Обнинск
Elista;ainhay87k;Елиста|Элиста|Элст
Cherëmushki;b8mgsc87k;Черёмушки
Novotroitsk;aw8idz6sk;Новотроицк|Новотроитск
Derbent;a6vhm587k;Дербент|Дербенд|Дзербент
Izmaylovo;b90gsy87k;Измайлово
Kiselëvsk;b3zkkq5zk;Киселевск|Киселёвск
Akademicheskoe;bkpg8f87k;Академическое
Velikiye Luki;baig8u87k;Великие Луки
Bogorodskoye;b91gss87k;Богородское
Pushkino;b9jgt387k;Пушкино
Artëm;aago376pk;Артем|Артём
Ukhta;buli1587k;Ухта|Уква
Brateyevo;b8kgsw87k;Братеево
Shchukino;b90gs187k;Щукино
Kansk;ba4l9w5pk;Канск
Khanty-Mansiysk;bngj7r6sk;Ханты-Мансийск|Ханти-Мансийск|Ёмвош
Mezhdurechensk;b35kom5zk;Междуреченск|Междурэчанск
Novyye Cherëmushki;b8qgse87k;Новые Черёмушки
Ryazanskiy;b8tgsx87k;Рязанский
Solikamsk;bjri9m6sk;Соликамск|Соль Камская|Усолье Камское
Glazov;bfihya8ek;Глазов|Глаз
Ust’-Ilimsk;bf4lt65gk;Усть-Илимск
Tekstil’shchiki;b8qgsu87k;Текстильщики
Zelenodolsk;b94hms87k;Зеленодольск|Зеленодольськ|Зеленадольск
Novoshakhtinsk;amogyx87k;Новошахтинск
Sarapul;bawi1g8ek;Сарапул
Votkinsk;bchi1z8ek;Воткинск|Воткинс|Вотка
Serov;bjkikb6sk;Серов|Кабаковск|Надеждинск
Balashov;ax7h7x8hk;Балашов
Zheleznogorsk;azegm887k;Железногорск
Zhukovsky;b8ggtw87k;Жуковский
Ramenskoye;b8cgu887k;Раменское|Раменскае
Novogireyevo;b8vgt287k;Новогиреево
Ozerki;bksg8787k;Озерки
Vostochnoe Degunino;b98gsc87k;Восточное Дегунино
Novyy Urengoy;c1kjsv6sk;Новый Уренгой
Novoural’sk;bd1iix6sk;Новоуральск|Свердловск-44|Верх-Нейвинский
Zheleznogorsk;ba9l3t5pk;Железногорск|Красноярск-26
Michurinsk;b0zh0g87k;Мичуринск
Kineshma;bdkh5187k;Кинешма|Кинешме
Krasnogorsk;b92grp87k;Красногорск|Красногорськ
Pushkin;bjvg8g87k;Пушкин|Благовещенское|Сарская Мыза
Magadan;bjgpiw5uk;Магадан|Магадаан
Bugulma;b5ihyo87k;Бугульма
Lefortovo;b8xgsq87k;Лефортово
Yaroslavskiy;b98gss87k;Ярославский
Kuznetsk;b1khhg87k;Кузнецк|Кузнецьк|Кuznjeck
Kirovo-Chepetsk;bgnhqz7wk;Кирово-Чепецк|Кирово-Чепетск
Berdsk;b63kau60k;Бердск|Бердськ
Gatchina;bjig7p87k;Гатчина|Гатчына|Троцк
Biryulëvo Zapadnoye;b8fgsl87k;Бирюлёво Западное|Красный Строитель
Sarov;b6nh8c87k;Саров|Саров ош|Сарыкылыч
Yeysk;ajpguc87k;Ейск|Єйськ
Buzuluk;b0mhx66sk;Бузулук|Бозаулык|Быҙаулыҡ
Gubkin;awggsa87k;Губкин|Гупкин
Chaykovskiy;bboi2b6sk;Чайковский
Babushkin;b97gst87k;Бабушкин
Lianozovo;b9agsf87k;Лианозово
Usol’ye-Sibirskoye;b0jlvx5gk;Усолье-Сибирское
Obruchevo;b8mgs887k
Krasnaya Glinka;b3ahz26sk;Красная Глинка
Svetlanovskiy;bkog8987k;Светлановский|Светлановское
Yegor’yevsk;b7ugwg87k;Егорьевск
Yurga;b8skft5zk;Юрга
Komendantsky aerodrom;bkog8487k;Комендантский аэродром
Kisilevsk;b40kkp5zk
Anzhero-Sudzhensk;b9skiy5zk;Анжеро-Судженск
Troitsk;b49in16sk;Троицк
Azov;akvgxh87k;Азов|Азак
Kaspiysk;a94hkc87k;Каспийск|Двигательстрой
Ozersk;b8wikm6sk;Озёрск
Yessentuki;acdh7287k;Ессентуки
Klin;bahgq187k;Клин
Vorkuta;c5jitz87k;Воркута|Вӧркута|Варкута
Fili;b8vgs587k;Фили
Kropotkin;ag8h0p87k;Кропоткин
Shadrinsk;b9tiss6sk;Шадринск|Шадринськ|Шадрин
Vyborg;bmng3v87k;Выборг|Выборге|Выборг ош
Reutov;b8wgt687k;Реутов
Alekseyevka;b8jgt087k;Алексеевка
Voskresensk;b7ngvh87k;Воскресенск|Воскресенськ|Воскресенскай
Mineralnye Vody;acth7u87k;Минеральные Воды|Минералние води|Минвод
Nagornyy;b8lgsi87k;Нагорный
Kamensk-Shakhtinsky;ao8gzu87k;Каменск-Шахтинский|Каменск
Belovo;b56kjq5zk;Белово|Бялова
Chekhov;b77gs287k;Чехов
Asbest;bcdimq6sj;Асбест|Әсбест
Birobidzhan;apjo586pj;Биробиджан
Peterhof;bkcg7287j;Петерхоф|Петергоф|Пецяргоф
Dachnoye;bk8g8287j;Дачное
Minusinsk;b36kyr5pj;Минусинск
Georgiyevsk;acnh8r87j;Георгиевск
Yelabuga;b8whwk87j;Елабуга|Јелабуга|Алабуга
Naro-Fominsk;b7vgq187j;Наро-Фоминск
Finlyandskiy;bklg8c87j;Финляндский
Sunzha;aachd587j;Сунжа|Су́нжа|Сунжæ
Chernogorsk;b3jkxn5pj;Черногорск|Харатас
Zelenogorsk;b9vl6r5pj;Зеленогорск|Зеленагорск
Grazhdanka;bkqg8i87j;Гражданка
Kopeysk;b74in66sj;Копейск
Kurortnyy;bl5g7387j
Vol’sk;aykhjm8hj;Вольск
Beloretsk;b3wie86sj;Белорецк|Белорет|Беларэцк
Ishimbay;b2hi7o6sj;Ишимбай
Adler;aangyw87j;Адлер|Адлерский район
Chapayevsk;b16hq38ej;Чапаевск
Tuymazy;b5pi176sj;Туймазы
Lys’va;bfficl6sj;Лысьва
Borisoglebsk;awph4y87j;Борисоглебск|Барысаглебск
Sosnovyy Bor;bkeg4t87j;Сосновый Бор
Dolgoprudnyy;b9fgs687j;Долгопрудный
Dorogomilovo;b8ugsb87j;Дорогомилово
Budyonnovsk;aeehap87j;Буденновск|Будённовск
Belogorsk;avfnsz6qj;Белогорск|Белагорск
Ishim;b9vj916sj;Ишим|Ішим|Ишем
Kstovo;b9zhas87j;Кстово|Кстова
Aleksin;b5egqz87j;Алексин
Parnas;bkvg8b87j;Парнас
Kungur;bdhia96sj;Кунгур|Кӧҥгыр
Klintsy;b0kgdk87j;Клинцы|Клинци|Клинтси
Neryungri;bbenig6qj;Нерюнгри|Ньируунгра
Leninogorsk;b5ohxp87j;Лениногорск
Sosnovka;bkqg8b87j;Сосновка
Gukovo;anhgyx87j;Гуково
Lesosibirsk;bfsl0w5pj;Лесосибирск|Новомаклаково
Polevskoy;basij76sj;Полевской
Meleuz;b14i7d6sj;Мелеуз
Kumertau;b0ki6z6sj;Кумертау
Slavyansk-na-Kubani;afpgtw87j;Славянск-на-Кубани
Tikhoretsk;ahdgzg87j;Тихорецк|Тихоретск
Rossosh’;aw0guz87j;Россошь
Tuapse;acigwk87j;Туапсе|Туапсэ|ТӀуапсы
Aleksandrov;baogvj87j;Александров
Kotlovka;b8mgsg87j;Котловка
Zarechnyy;b1shdj87j;Заречный
Pavlovo;b9hh7p87j;Павлово
Gorno-Altaysk;ayckio4zj;Горно-Алтайск|Горно-Алтойск|Туулу Алтай
Novaya Balakhna;baxh9487j;Балахна
Gus’-Khrustal’nyy;b8hh0x87j;Гусь-Хрустальный
Buynaksk;a8yhix87j;Буйнакск|Буйнахъск
Krasnoturinsk;bk1ij96sj;Краснотурьинск
Belebey;b4bi2c6sj;Белебей|Пелепей|Белябей
Rzhev;baagjd87j;Ржев
Chistopol’;b7thso87j;Чистополь|Чистай
Zarechnyy;b1lhhe87j;Заречный
Tikhvin;bjogh587j;Тихвин|Тихвинъ
Rossosh’;atggxx87j;Россошь
gorod Solnetchnogorsk;ba3gqq87j;г. Солнечногорск
Petrodvorets;bkeg6s87j;Петродворец
Labinsk;ae0h1687j;Лабинск
Iskitim;b5skbe60j;Искитим
Revda;bbsiii6sj;Ревда
Lobnya;b9ngs387j;Лобня
Vyksa;b7oh5587j;Выкса|Викса
Dmitrov;baigs887j;Дмитров
Sibay;b0giez6sj;Сибай
Apatity;c5qggt87j;Апатиты|Апатити|Апатыты
Novoaltaysk;b2dkd64zj;Новоалтайск
Svobodnyy;awpnry6qj;Свободный
Sal’sk;aj3h3e87j;Сальск
Stupino;b6igtr87j;Ступино
Prokhladnyy;abkhab87j;Прохладный|Прохладнэ
Shuya;bbxh2z87j;Шуя
Shchëkino;b41gs787j;Щекино|Щёкино
Bor;bakhaf87j;Бор
Dubna;bbmgrb87j;Дубна
Pavlovskiy Posad;b8ygvd87j;Павловский Посад
Ostankinskiy;b93gsi87j;Останкинский
Sviblovo;b95gsj87j;Свиблово
Mikhaylovsk;afdh4r87j;Михайловск|Шпаковское
Kotlas;bo6hhl87j;Котлас
Verkhnyaya Pyshma;bc9ika6sj;Верхняя Пышма|Верхняя Пишма|Верхня Пишма
Talnakh;cb1kpk5pj;Талнах
Mikhaylovka;at2h838tj;Михайловка
Solnechnogorsk;ba2gqp87j;Солнечногорск|Солнечногорськ|Гомзино
Arsen’yev;acoo676pj;Арсеньев
Uzlovaya;b3ygu087j;Узловая|Хрущëвская
Volzhsk;b97hmc87j;Волжск|Юлсер-Ола|Лопатино
Kogalym;bqzjmw6sj;Когалым|Кагалым|Когалим
Krymsk;aetgtj87j;Крымск|Кримск|Кримськ
Cheremkhovo;b1nluc5gj;Черемхово
Zhigulëvsk;b2chpj8ej;Жигулёвск
Sokol;b90gs887j;Сокол
Sokol’niki;b90gsn87j;Сокольники
Roslavl’;b3vgfa87j;Рославль
Borovichi;bg7gi887j;Боровичи
Chernaya Rechka;bkng8687j;Черная речка
Kirishi;bj7gd087j;Кириши
Ezhva;bpphsx87j;Эжва
Liski;avmgxq87j;Лиски|Георгиу-Деж
Vyaz’ma;b7dgja87j;Вязьма
Nazarovo;b9lkv65pj;Назарово|Назарава
Klimovsk;b7sgs987j;Климовск|Климовськ|Климовскай
Lesnoy;be2ir86sj;Лесной
Rybatskoye;bk8g8q87j;Рыбацкое
Uritsk;bk8g7u87j;Урицк
Berëzovskiy;b8nkjn5zj;Березовский|Берёзовский
Pokrovskoye-Streshnëvo;b91gs287j;Покровское-Стрешнёво
Zamoskvorech’ye;b8tgsj87j;Замоскворечье
Belorechensk;aedgyr87j;Белореченск|Беларэчанск
Krasnokamensk;at5mzv53j;Краснокаменск|Краснакаменск
Kupchino;bkag8f87j;Купчино
Altuf’yevskiy;b98gse87j;Алтуфьевский
Timashyovsk;agqgw787j;Тимашевск|Тимашёвск
Severomorsk;c9vggt87j;Североморск|Севераморск
Domodedovo;b80gsv87j;Домодедово|Дамадзедава
Vyshniy Volochëk;bdzgk187j;Вышний Волочек|Вышний Волочёк|Вышный Волочёк
Anapa;aepgro87j;Анапа|Анаапа|Анапе
Buguruslan;b32hxo6sj;Бугуруслан|Бугурслан|Богырыслан
Fryazevo;b8tguu87j;Фрязево
Yartsevo;b6ygeu87j;Ярцево
Krasnokamsk;bfci6w6sj;Краснокамск|Краснакамск
Fryazino;b9ggtp87j;Фрязино
Zarinsk;b37kfy4zj;Заринск|Заринская|Зарынск
Nyagan;bqmixn6sj;Нягань
Kimry;bbzgrs87j;Кимры|Кимри
Levoberezhnyy;b96gs387j;Левобережный|Левобережная|Аксиньино
Vidnoye;b8bgsr87j;Видное
Tulun;b5llne5gj;Тулун
Ivanteyevka;b9hgtc87j;Ивантеевка
Donetsk;aoagyz87j;Донецк|Донецьк|Данецк
Gelendzhik;adugtr87j;Геленджик|Геленджык|Хылъэжьый
Lytkarino;b8egtb87j;Лыткарино|Литкарино|Лыткарына
Kingisepp;biyg3h87j;Кингисепп|Кингисеп
Kizlyar;abthhr87j;Кизляр
Chusovoy;bfxicl6sj;Чусовой|Чусовий|Чусавой
Otradnyy;b2ahun8ej;Отрадный
Snezhinsk;b9sikr6sj;Снежинск|Снежынск|Семидесятка
Akademgorodok;b6dkav60j;Академгородок|Новосибирский Академгородок
Kozeyevo;b97gsi87j;Козеево
Kozhukhovo;b8rgso87j;Кожухово
Likhobory;b95gsd87j;Лихоборы
Metrogorodok;b91gsz87j;Метрогородок
Nikol’skoye;b8ogs487j;Никольское
Novokhovrino;b97gs687j;Новоховрино
Novokuz’minki;b8sgsy87j;Новокузьминки
Novovladykino;b95gse87j;Нововладыкино
Semënovskoye;b8ogsb87j;Семёновское
Untolovo;bkpg7x87j;Юнтолово
Vagonoremont;b9agsb87j;Вагоноремонт
Vatutino;b98gsp87j;Ватутино
Sayanogorsk;b1ikxx5pj;Саяногорск
Kanash;b87hjx87j;Канаш|Каҥаш
Monchegorsk;c6qgfb87j;Мончегорск|Мончегорськ|Манчагорск
Satka;b6wig16sj;Сатка|Чаткы
Ruzayevka;b46hcv87j;Рузаевка|Оразай ош
Salekhard;c2tj116sj;Салехард|Обдор|Обдорск
Verkhnyaya Salda;bf9ik76sj;Верхняя Салда|Верхня Салда|Югары Саллы
Osinniki;b2wkml5zj;Осинники|Осиники
Megion;bnjjrf6sj;Мегион|Майон
Torzhok;bcggl487j;Торжок|Таржок
Kuybyshev;b81jxk60j;Куйбышев|Куйбишев|Каен
Sosnovaya Polyana;bk8g7r87j;Сосновая Поляна
Vsevolozhsk;bkqg9787j;Всеволожск|Всеволожськ|Всеволошк
Ust’-Kut;bbsm1v5gj;Усть-Кут
Kurganinsk;aeoh0r87j;Курганинск|Курганинськ
Raduzhny;bqijv86sj;Радужны|Радужный|Радужни
Mtsensk;b20gpm87j;Мценск|Мцэнск|Мтсенск
Belaya Kalitva;anuh1a87j;Белая Калитва
Shelekhov;az2lx65gj;Шелехов
Gryazi;azugyy87j;Грязи
Mozhga;bathx28ej;Можга
Dzerzhinsky;b8jgt687j;Дзержинский
Beryozovsky;bc3ikw6sj;Берёзовский
Amursk;atjoga6pj;Амурск|Амурськ
Livny;azmgsg87j;Ливны|Ливни
Kurchatov;axhgn587j;Курчатов
Chebarkul’;b6qijp6sj;Чебаркуль
Nadym;c01jhg6sj;Надым|Надим
Staryy Malgobek;aayhbw87j;Старый Малгобек
Pechora;byziay87j;Печора|Печӧра|Пячора
Safonovo;b73ggc87j;Сафоново|Сафонава
Rasskazovo;b0ah4d87j;Рассказово|Расказово|Расказава
Kol’chugino;baegxe87j;Кольчугино
Volkhov;bkggdu87j;Волхов|Волховъ · градъ
Obukhovo;bk8g8l87j;Обухово
Yefremov;b1mgtw87j;Ефремов
Kanevskaya;ai2gwa87j;Каневская
Spassk-Dal’niy;adwo4y6pj;Спасск-Дальний|Спасское
Shebekino;au1gql87j;Шебекино
Chernyakhovsk;b5rfkm7vj;Черняховск|Инстенбург
Strezhevoy;bmpjvj6lj;Стрежевой
Avtovo;bkbg8387j;Автово
Kamen’-na-Obi;b3fk5x4zj;Камень-на-Оби|Камень
Akhtubinsk;ao4hg97ej;Ахтубинск
Krasnoye Selo;bjyg7l87j;Красное Село
Krasnyy Sulin;an1gzb87j;Красный Сулин
Ust’-Labinsk;aflgy987j;Усть-Лабинск
Myski;b38knw5zj;Мыски|Миски
Usinsk;c1dibt87j;Усинск|Ускар
Rtishchevo;az6h9n8hj;Ртищево|Ртишчево|Ртишево
Alapayevsk;bepind6sj;Алапаевск
Kachkanar;bh2ih86sj;Качканар
Sayansk;b4blru5gj;Саянск
Tutayev;bergxt87j;Тутаев
Pashkovskiy;af2gwm87j;Пашковский
Sertolovo;bl2g7w87j;Сертолово
Malgobek;aavhbv87j;Малгобек|Малгабек|Малхабек
Morshansk;b2gh4587j;Моршанск
Sovetsk;b70fks7vj;Советск|Савецк
Mariinsk;ba5knp5zj;Мариинск
Krasnoufimsk;bb9ich6sj;Красноуфимск|Красноуфимськ
Kronstadt;bkng6q87j;Кронштадт|Кронштат|Кронщат
Novodvinsk;bwyh1e87j;Новодвинск
Zavolzh’ye;bbch8j87j;Заволжье
Sharypovo;b8akrs5pj;Шарыпово|Шарып|Шарипово
Koryazhma;bobhiz87j;Коряжма
Novozybkov;azygcq87j;Новозыбков|Новозибков|Новозипков
Lomonosov;bkfg6p87j;Ломоносов|Ломоносов шаары
Partizansk;a9so5s6pj;Партизанск|Партизанськ|Партызанск
Konakovo;bbigq587j;Конаково|Канакова
Sokol;bj6gzg87j;Сокол|Сокал
Alatyr’;b6chhe87i;Алатырь|Улатăр
Izberbash;a89hl087i;Избербаш|Изберг
Zainsk;b7ohwn87i;Заинск|Сĕве
Lesozavodsk;agbo6k6pi;Лесозаводск|Љесозаводск|Лесазаводск
Korenovsk;agbgxl87i;Кореновск
Irbit;be7ir76si;Ирбит|Эрбет
Uryupinsk;av5h4p8ti;Урюпинск
Kyshtym;b8sik76si;Кыштым
Gay;awzied6si;Гай
Pyt-Yakh;bmrjie6si;Пыть-Ях
Urus-Martan;a9thei87i;Урус-Мартан|Урыс-Мартан|Хьалха-Марта
Lyudinovo;b3ngjp87i;Людиново
Pugachëv;ayihnk8hi;Пугачёв
Zelenokumsk;addh9w87i;Зеленокумск|Зеленокумськ|Зеленакумск
Dzerzhinskiy;b8jgt487i;Дзержинский
Birsk;b7yi6a6si;Бирск|Пӱрӧ
Frolovo;as9h998ti;Фролово|Фролава
Mozdok;abihc187i;Моздок|Маздок|Мæздæг
Yelizovo;b1rq3y5li;Елизово
Apsheronsk;adigyd87i;Апшеронск|Апшеронськ|Апшаронск
Bol'šoj Kamen';a9ro3n6pi;Большой Камень
Mirny;brqmok6qi;Мирный|Мирни|Мирней
Pereslavl’-Zalesskiy;bbmgvy87i;Переславль-Залесский
Tosno;bjeg9s87i;Тосно|Тосна
Luga;bh6g6x87i;Луга
Kashira;b6dgu287i;Кашира|Кашыра
Korkino;b6himj6si;Коркино
Langepas;bo5jox6si;Лангепас
Yagry;bxfgyl87i;Ягры
Kolomyagi;bkqg8487i;Коломяги
Uray;bl1ivz6si;Урай
Alexeyevka;aungvh87i;Алексеевка|Алексе́евка
Svetlograd;afxh7287i;Светлоград|Светлаград
Gorod Shebekino;au2gqk87i;Город Шебекино
Vyatskiye Polyany;ba7htu7wi;Вятские Поляны
Tavda;bf8ixb6si;Тавда
Kirov;b47gja87i;Киров
Sampsonievskiy;bkmg8a87i;Сампсониевский|Сампсониевское
Vyazniki;ba8h5387i;Вязники
Yuzhnoural’sk;b59im66si;Южноуральск
Muravlenko;bv7jn06si;Муравленко
Vichuga;bcxh4h87i;Вичуга
Izobil’nyy;ag1h3v87i;Изобильный
Aksay;alagyr87i;Аксай
Nizhneudinsk;b6jlj35gi;Нижнеудинск
Leningradskaya;aiogxf87i;Ленинградская
Millerovo;apxh0887i;Миллерово|Милерово
Kandalaksha;c4jge187i;Кандалакша
Dalnegorsk;adsocq6pi;Дальнегорск
Furmanov;bd1h2787i;Фурманов
Lyantor;bp6jgg6si;Лянтор
Uchaly;b50ih46si;Учалы
Tayshet;b9dlg75gi;Тайшет
Uglich;bdsgug87i;Углич|Угич
Kulebaki;b7xh6587i;Кулебаки
Troitsk;b84grn87i;Троицк|Троицкай
Baksan;abch8y87i;Баксан|Басхан|Бэхъсэн
Rezh;bddimk6si;Реж
Novovoronezh;awkgwy87i;Нововоронеж
Tynda;b77nii6qi;Тында|Тинда
Protvino;b6fgre87i;Протвино
Sestroretsk;bkyg7887i;Сестрорецк|Сестроретск|Сестрорецьк
Rostokino;b93gsn87i;Ростокино
Bogorodsk;b9uh8v87i;Богородск|Богородськ|Багародск
Serdobsk;azqhau87i;Сердобск|Сярдобск
Temryuk;afrgrw87i;Темрюк
Novokubansk;afbh2087i;Новокубанск|Новокубанськ|Новакубанск
Sukhoy Log;bc3iob6si;Сухой Лог
Slantsy;bi8g2187i;Сланцы|Сланци|Слантси
Teykovo;bbyh0m87i;Тейково
Blagodarnyy;afah8o87i;Благодарный
Chernushka;bazi7s6si;Чернушка
Yalutorovsk;bbdj066si;Ялуторовск
Valuyki;atggtw87i;Валуйки
Beslan;a9zhbp87i;Беслан|Бесла́н|Беслæн
Kasimov;b6mh3087i;Касимов
Shumerlya;b86hgx87i;Шумерля|Çĕмĕрле
Korsakov;ajjowm6ai;Корсаков
Goryachevodskiy;acah7p87i;Горячеводский
Staraya Derevnya;bkng8087i;Старая Деревня
Gul’kevichi;afzh1187i;Гулькевичи
Aznakayevo;b6ehzg87i;Азнакаево|Азнакай
Abinsk;aengu087i;Абинск
Dinskaya;afmgwz87i;Динская
Baltiysk;b5tffb7vi;Балтийск
Karabulak;aabhcq87i;Карабулак|Караболак|Элдархан-ГӀала
Trëkhgornyy;b6aied6si;Трёхгорный
Nurlat;b57ht587i;Нурлат|Норлат
Ostrogozhsk;avbgwk87i;Острогожск|Острогозьк|Астрагожск
Kondopoga;bqsgj787i;Кондопога|Кандапога
Kinel’;b1vhsn8ei;Кинель
Staraya Russa;bf4gb487i;Старая Русса
Blagoveshchensk;b6wi7i6si;Благовещенск|Благовешченск|Благовещен
Slavgorod;b18jyh4zi;Славгород
Kushva;bfxihz6si;Кушва|Кошва
Ust’-Dzheguta;acgh4m87i;Усть-Джегута|Усть-Жэгуэтэ|Усть-Джьгваты
Artëmovskiy;bdbinv6si;Артемовский|Артёмовский|Егоршинские Копи
Krasnoznamensk;b8ggqx87i;Краснознаменск|Краснознаменськ|Красназнаменск
Petrovsk;azbhe38hi;Петровск|Петровськ
Severoural’sk;bl3iij6si;Североуральск|Петропавловский
Yablonovskiy;aezgw687i;Яблоновски|Яблоновский|Яблоновський
Kizilyurt;aa0hi787i;Кизилюрт
Istra;b9cgqf87i;Истра
Nartkala;aazh9t87i;Нарткала|Нарткъалэ
Segezha;bv3gjc87i;Сегежа
Zima;b3slrg5gi;Зима
Dobryanka;bgei8p6si;Добрянка
Verkhniy Ufaley;b9pijb6si;Верхний Уфалей
Primorsko-Akhtarsk;ahxgu287i;Приморско-Ахтарск|Приморсько-Ахтарськ|Прыморска-Ахтарск
Kotovsk;b03h3a87i;Котовск
Kamenka;b1qhad87i;Каменка
Asha;b6sib16si;Аша
Marks;axnhhv8hi;Маркс
Gudermes;aafhg287i;Гудермес|Гудэрмес|Гъудэмэз
Kholmsk;akpoul6ai;Холмск
Maloyaroslavets;b6tgpb87i;Малоярославец|Малоярославетс|Малаяраславец
Velikiy Ustyug;bmshgn87i;Великий Устюг
Yubileyny;b9dgt387i;Юбилейный|Юбилейнай
Desnogorsk;b4fggg87i;Десногорск|Десногорськ|Дзяснагорск
Lukhovitsy;b6qgwg87i;Луховицы|Луховици|Луховитси
Udomlya;besgl987i;Удомля
Slobodskoy;bh5hrd7wi;Слободской
Drozhzhino;b89gsg87i;Дрожжино
Bogdanovich;bbqiod6si;Богданович
Inta;c1fij587i;Инта|Інта
Donskoy;b3xguh87i;Донской
Kimovsk;b3xgv287i;Кимовск|Михайловка|Большая Михайловка
Znamensk;aoyhf17ei;Знаменск|Капустин Яр
Privolzhskiy;awthfx8hi;Приволжский
Gorodets;bbdh8r87i;Городец|Городець|Гарадзец
Nakhabino;b95gra87i;Нахабино
Sosnovoborsk;b9wl3a5pi;Сосновоборск|Сосновоборськ|Сасноваборск
Kudymkar;bhyi3t6si;Кудымкар|Кудимкар
Mozhaysk;b86go387i;Можайск|Можайскай|Мажайск
Barabinsk;b7rjxo60i;Барабинск|Бараба
Pavlovskaya;ai6gyj87i;Павловская
Likino-Dulevo;b8rgw787i;Ликино-Дулево
Dyurtyuli;b85i4e6si;Дюртюли
Rostov Veliky;bcvgxh87i;Ростов Великий|Ростов|Стыр Ростов
Yugorsk;bobirx6si;Югорск|Комсомольский
Sorochinsk;aznhzn6si;Сорочинск
Mednogorsk;awtibz6si;Медногорск|Меднагорск
Topki;b7kkht5zi;Топки
Kirzhach;b9zgvy87i;Киржач
Starominskaya;aj9gwh87i;Староминская
Borzya;atzmvp53i;Борзя
Bogoroditsk;b3dgtw87i;Богородицк|Богородицьк
Balabanovo;b7agpu87i;Балабаново
Kostomuksha;bxdg8y87i;Костомукша
Karpinsk;bk1iip6si;Карпинск|Богословский|Угольный
Shatura;b8dgxt87i;Шатура
Divnogorsk;b9gl0m5pi;Дивногорск|Дивногорськ
Amin’yevo;b8qgs387i;Аминьево
Annino;b8egsg87i;Аннино
Annino;b8egri87i;Аннино
Davydkovo;b8sgs387i;Давыдково
Kolomenskoye;b8ngso87i;Коломенское
Kudrovo;bkeg8r87i;Кудрово
Kur’yanovo;b8mgsq87i;Курьяново
Kuskovo;b8ugt087i;Кусково
Lazarevskoye;abzgx987i;Лазаревское|Лазаревка
Leninskiye Gory;b8qgsd87i;Ленинские горы
Leonovo;b95gsl87i;Леоново
Luzhniki;b8sgsb87i;Лужники
Matveyevskoye;b8rgs487i;Матвеевское
Mikhalkovo;b8ogrz87i;Михалково
Nikulino;b8ngs387i;Никулино
Petrovskaya;b8bgsy87i;Петровская
Vorob’yovo;b8sgs987i;Воробьево
Vostryakovo;b8ngs187i;Востряково
Zagor’ye;b8egsn87i;Загорье
Kushchyovskaya;ajcgy387i;Кущёвская
Sasovo;b4zh4g87i;Сасово|Сасава|Саз
Yemanzhelinsk;b63imc6si;Еманжелинск|Јеманжелинск|Еманжелинский
Shar’ya;bg5heg87i;Шарья
Sovetskaya Gavan’;aq1opp6pi;Советская Гавань
Kirovsk;c5tghj87i;Кировск
Kapotnya;b8kgsz87i;Капотня
Sosnogorsk;buoi1p87i;Сосногорск|Сӧснагорт|Саснагорск
Morozovsk;aobh4787i;Морозовск|Морозовськ
Zernograd;ak5gzz87i;Зерноград|Зернаград
Ipatovo;ah0h7787i;Ипатово|Іпатово|Іпатава
Unecha;b0sget87i;Унеча
Krasnoarmeyskaya;ag1gu587i;Красноармейская|Полтавская
Kokhma;bc5h2587i;Кохма
Gagarin;b8bgl887i;Гагарин|Гагарын
Inozemtsevo;achh7p87i;Иноземцево
Uvarovo;ayeh5e87i;Уварово
Kuvandyk;ax0ibc6si;Кувандык|Куандык|Кувандик
Gusev;b5nflo7vi;Гусев
Karasuk;b3ajws60i;Карасук
Buturlinovka;av7h0s87i;Бутурлиновка
Isakogorka;bx1h0x87i;Исакогорка
Kartaly;b1eikg6si;Карталы|Картали
Kochubeyevskoye;ae0h4987i;Кочубеевское
Zheleznogorsk-Ilimskiy;bb6lx95gi;Железногорск-Илимский
Tomilino;b8mgtf87i;Томилино
Dalnerechensk;ahlo7i6pi;Дальнереченск
Pokhvistnevo;b31hwt8ei;Похвистнево|Похвиçнĕ
Bezhetsk;beigpy87i;Бежецк|Бежетск|Бежецьк
Argun;aa9hff87i;Аргун|Аргъун|Орга
Poykovskiy;bngjfp6si;Пойковский
Goryachiy Klyuch;adzgwq87i;Горячий Ключ
Shcherbinka;b86gsc87i;Щербинка
Polysayevo;b5okjo5zi;Полысаево
Aleysk;azuk9x4zi;Алейск|Алейськ
Aleksandrovskoye;ae7h7g87i;Александровское
Kamyshlov;bbxiq76si;Камышлов|Камышлы|Камишлов
Mirnyy;bsch0287i;Мирный
Yanaul;babi4l6si;Янаул
Kolpashevo;bg0kaa6li;Колпашево
Dagestanskiye Ogni;a70hlv87i;Дагестанские Огни
Zarechnyy;bbtimd6si;Заречный
Neftekumsk;aechcz87i;Нефтекумск|Нефцякумск
Rodniki;bcnh3y87i;Родники
Novoaleksandrovsk;ageh2j87i;Новоалександровск
Kotel’nich;bfyhma7wi;Котельнич
Atkarsk;ay4hd18hi;Аткарск|Аткарськ|Аткар
Kalach-na-Donu;ap9h8x8ti;Калач на Дону|Калач-на-Дону|Калач на Дон
Sol’-Iletsk;aw4i4r6si;Соль-Илецк
Kayyerkan;caqknq5pi;Кайеркан
Krasnoural’sk;bg4iis6si;Красноуральск|Уралмедьстрой
Nikolayevsk-on-Amure;b1noqw6pi;Николаевск-на-Амуре
Asino;bcckjc6li;Асино
Labytnangi;c36j0i6si;Лабытнанги|Лабитнанги
Dedovsk;b97gr487i;Дедовск|Дедовскай
Zarya;b8wgtu87i;Заря
Zeya;b3anpi6qi;Зея
Tara;bc2jml61i;Тара
Kotovo;atshch8ti;Котово|Котава
Gubakha;bhgibv6si;Губаха
Pavlovsk;au5gzg87i;Павловск|Павловськ
Okha;b2vox36ai;Оха
Buy;bggh3e87i;Буй
Metallostroy;bk4g8v87i;Металлострой
Oktyabr’sk;b1phna8ei;Октябрьск
Semiluki;axkgwf87i;Семилуки
Kubinka;b8egpy87i;Кубинка
Kaltan;b2pkmg5zi;Калтан
Nev’yansk;bdpij96si;Невьянск
Ozëry;b6egv387i;Озеры|Озёры
Krasnoarmeysk;avqhey8hi;Красноармейск|Краснаармейск
Fokino;a9do3t6pi;Фокино|Тихоокеанский
Severobaykal’sk;b8kmbp5gi;Северобайкальск|Хойто Байгал
Krasnoarmeysk;b9ugtx87i;Красноармейск
Zavodoukovsk;bayj0v6si;Заводоуковск|Деревня Уковская
Ekazhevo;aa1hci87i;Экажево
Kireyevsk;b3tgtc87i;Киреевск|Киреевка
Omutninsk;bgzhwz7wi;Омутнинск
Nerekhta;bdmh0p87i;Нерехта
Nelidovo;ba7gf187i;Нелидово
Yushkovo;b8cgqp87i;Юшково|Калининец
Vilyuchinsk;b11q415li;Вилючинск
Mostovskoy;addh1b87i;Мостовской
Tatarsk;b7ejr260i;Татарск|Татарськ
Bologoye;betgil87i;Бологое
Ust’-Katav;b6midm6si;Усть-Катав
Dyat’kovo;b2wgje87i;Дятьково
Gur’yevsk;b4skir5zi;Гурьевск
Shali;a9vhfi87i;Шали|Шела|Междуречье
Volokolamsk;b9ngnx87i;Волоколамск|Волоколамськ|Волоколамскай
Zverevo;anfgzg87i;Зверево|Зверава
Kirovsk;bkcga487i;Кировск
Zaraysk;b64gw087i;Зарайск
Zheleznovodsk;acmh7g87i;Железноводск
Ostrov;bdag2r87i;Остров
Tbilisskaya;ag0gzo87i;Тбилисская
Aldan;bgtnkc6qi;Алдан
Novopavlovsk;ac4h9787i;Новопавловск|Новопавловськ
Skopin;b3igxv87i;Скопин
Tayga;b9rkhu5zi;Тайга
Nikol’sk;b38hfz87i;Никольск
Semënov;bbrhbm87i;Семенов|Семёнов
Ob’;b6rk9r60i;Обь
Gusinoozyorsk;awgm3u5gi;Гусиноозёрск
Kalachinsk;b6xjn661i;Калачинск|Калачынск|Калачлы
Davlekanovo;b4mi4v6si;Давлеканово
Nizhniy Lomov;b2ph9c87i;Нижний Ломов
Lesnoy;bgwii36si;Лесной|Свердловск-45
Raychikhinsk;ascnvg6qi;Райчихинск
Troitskaya;aabhcy87i;Троицкая
Bezenchuk;b16hpb8ei;Безенчук|Безянчук|Пĕçен
Lensk;bmomr96qh;Ленск|Ленськ|Ленскей
Sovetskiy;bogism6sh;Советский
Yershov;awohm38hh;Ершов|Јершов|Єршов
Olenegorsk;c7aggd87h;Оленегорск|Аленягорск
Bogotol;ba4ksp5ph;Боготол|Багатол
Dudinka;catkje5ph;Дудинка|Дудинка шаары
Semikarakorsk;am0h1d87h;Семикаракорск|Семикаракорськ
Lyskovo;b9nhd487h;Лысково|Лисково|Лыскава
L’govskiy;axfgm087h;Льговский|Льгов
Kabanovo;b8vgw687h;Кабаново
Fedorovskiy;bp5jkr6sh;Федоровский
Lermontov;acjh7e87h;Лермонтов|Љермонтов
Osa;bd4i626sh;Оса|Аса
Vel’sk;bnnh4y87h;Вельск|Вельськ
Otradnaya;adbh3c87h;Отрадная
Bavly;b54hzx87h;Бавлы|Баулы
Il’skiy;aekgv587h;Ильский
Lebedyan’;b1agwq87h;Лебедянь
Mendeleyevsk;b9ahxb87h;Менделеевск
Dankov;b1xgwq87h;Данков
Narian-Mar;c5zhzi7wh
Severskaya;aelgvg87h;Северская
Tashtagol;b0lko55zh;Таштагол
Koz’modem’yansk;bahhhc87h;Козьмодемьянск|Цикмӓ|Чыкма
Onega;bvjgtu87h;Онега
Kirovgrad;bdjiiu6sh;Кировград|Калата
Novotitarovskaya;afogwa87h;Новотитаровская
Nizhnyaya Tura;bguii96sh;Нижняя Тура|Нижня Тура|Nižnjaja Тurа
Medvedevo;bbbhks87h;Медведево|Маскасола
Gorelovo;bk1g7p87h;Горелово
Vikhorevka;b9wlp25gh;Вихоревка
Vereshchagino;bfci3u6sh;Верещагино
Shakhun’ya;be8hhh87h;Шахунья
Sergach;b89hea87h;Сергач
Bryukhovetskaya;ah8gwc87h;Брюховецкая
Nyandoma;bpbgzp87h;Няндома
Novaya Usman’;axggxh87h;Новая Усмань|Нов.Усмань
Lodeynoye Pole;bmpgh887h;Лодейное Поле
Svetlyy;b5wffx7vh;Светлый
Losino-Petrovskiy;b97gu387h;Лосино-Петровский
Staraya Kupavna;b91gu287h;Старая Купавна|Купавна
Pikalëvo;bjcgix87h;Пикалево|Пикалёво
Ryazhsk;b37gzc87h;Ряжск|Ражск
Igra;bdvhzd8eh;Игра
Chishmy;b5ni5u6sh;Чишмы
Roshal’;b8ngyr87h;Рошаль
Sysert’;bayiky6sh;Сысерть
Toguchin;b7gkeg60h;Тогучин
Luchegorsk;aj0o916ph;Лучегорск|Лучегорськ
Linëvo;b5akbm60h;Линево|Линёво
Kizel;bi1ic56sh;Кизел|Кыдзӧл|Кыдзоль
Bakal;b6mifd6sh;Бакал
Khadyzhensk;adfgxu87h;Хадыженск|Хадыжэнск|Хадиженск
Shimanovsk;aygnqo6qh;Шимановск|Шимановськ
Kovylkino;b44ha087h;Ковылкино|Ковилкино|Ковёл ош
Otradnoye;bk2g9m87h;Отрадное
Sheksna;bihguz87h;Шексна
Abdulino;b35i126sh;Абдулино|Абдулла
Yarovoye;b11jya4zh;Яровое
Terek;aasham87h;Терек
Zelenchukskaya;abth3j87h;Зеленчукская
Suvorov;b4cgpe87h;Суворов|Суворовский
Novy Oskol;av0gt687h;Новый Оскол
Dugulubgey;abah8y87h;Дугулубгей
Berëzovka;b9ol2p5ph;Березовка|Берёзовка
Kurchaloy;aa0hg187h;Курчалой|Курчала|Курчалой-Гӏала
Khot'kovo;baagtk87h;Хотьково
Priyutovo;b3qi1t6sh;Приютово
Novomichurinsk;b44gyf87h;Новомичуринск
Sortavala;bpfg9b87h;Сортавала|Сортавалæ
Elektrogorsk;b98gvr87h;Електрогорск|Электрогорск|Електрогорськ
Surovikino;ap1h728th;Суровикино
Bobrov;avygz787h;Бобров
Nytva;beyi5q6sh;Нытва|Нитва
Chernogolovka;b9kguk87h;Черноголовка|Черноголовко|Чорноголовка
Gubkinskiy;bwzjsi6sh;Губкинский
Sobinka;b9jgz687h;Собинка
Kalach;au3h1y87h;Калач
Buinsk;b6phm587h;Буинск|Буа|Пăва
Karachayevsk;ablh4f87h;Карачаевск|Къарачай шахар|Къарча къала
Sredneuralsk;bcbijz6sh;Среднеуралск|Среднеуральск
Cherepanovo;b4mkbm60h;Черепаново
Tyrnyauz;aaih7887h;Тырныауз|Тырныавыз|Тирниауз
Beloyarskiy;buzj176sh;Белоярский
Pushchino;b6bgsh87h;Пущино|Пушчино|Пушино
Rayevskiy;b46i4l6sh;Раевский|Раевка|Альшеево
Isil’kul’;b6jjdz61h;Исилькуль
Andreyevskoye;b8bgtd87h;Андреевское
Bol’shaya Setun’;b8sgry87h;Большая Сетунь
Dagomys;abbgy787h;Дагомыс
Elektrougli;b8sgu587h;Електроугли|Электроугли
Kastanayevo;b8sgs687h;Кастанаево
Khosta;aavgyr87h;Хоста
Krestovskiy ostrov;bklg8287h;Крестовский остров
Novaya Derevnya;bkng8587h;Новая деревня
Rublëvo;b8zgrr87h;Рублево|Рублёво
Setun’;b8sgry87h;Сетунь
Slobodka;b97gse87h;Слободка
Vnukovo;b8hgrm87h;Внуково
Vrangel’;a8po5o6ph;Врангель
Zavety Il’icha;b9ogt587h;Заветы Ильича
Yessentukskaya;acbh7387h;Ессентукская
Yeniseysk;bgdl015ph;Енисейск
Usman’;aykgyd87h;Усмань
Yur’yev-Pol’skiy;baygy887h;Юрьев-Польский
Monino;b94gu387h;Монино
Kusa;b7rih46sh;Куса
Karachev;b1kgl687h;Карачев
Inza;b3lhgr8oh;Инза|Інза|Инзей ош
Petrovsk-Zabaykal’skiy;awgmad53h;Петровск-Забайкальский
Zhukovka;b2pghp87h;Жуковка
Alagir;a9khau87h;Алагир
Bikin;ak1o8x6ph;Бикин
Kotel’nikovo;ambh7u8th;Котельниково
Borodino;b9bl7n5ph;Бородино
Podporozh’ye;bn7giw87h;Подпорожье
Ostashkov;bcrgfz87h;Осташков
Yaransk;bd6hkz7wh;Яранск
Neftegorsk;b0ohu58eh;Нефтегорск
Kovdor;c5pg8o87h;Ковдор
Yuzhnyy;b1xkch4zh;Южный
Gorodishche;apkhbj8th;Городище
Kozel’sk;b44gnd87h;Козельск
Proletarsk;ajqh3w87h;Пролетарск|Пролетарськ|Пралетарск
Akhtyrskiy;aelgue87h;Ахтырский
Ivdel’;bmliju6sh;Ивдель
Novopokrovskaya;ahoh1287h;Новопокровская|Новопокровська
Katav-Ivanovsk;b63ido6sh;Катав-Ивановск|Катав-Івановськ|Кытау-Ивановск
Orlovskiy;ak7h4t87h;Орловский
Yelizavetinskaya;af5gvr87h;Елизаветинская
Nikol’skoye;bjug9i87h;Никольское
Novoanninskiy;audh6j8th;Новоаннинский
Agidel’;b9bi1t6sh;Агидель
Shchigry;ay4gqj87h;Щигры|Щигри|Шчигри
Nesterovskaya;aa4hd587h;Нестеровская
Kurovskoye;b8egw487h;Куровское|Куровське
Rybnoye;b61gxr87h;Рыбное
Anna;ax1h0a87h;Анна
Uva;bcbhwz8eh;Ува
Talitsa;bc0iiq6sh;Талица
Vorgashor;c5qit787h;Воргашор
Tal’menka;b3ikc54zh;Тальменка
Skhodnya;b9fgrm87h;Сходня
Konstantinovsk;am6h2587h;Константиновск|Константиновськ|Константиновская
Manturovo;bg1hcc87h;Мантурово
Slyudyanka;axilw35gh;Слюдянка
Staroshcherbinovskaya;ajjgve87h;Старощербиновская
Shushenskoye;b24kze5ph;Шушенское|Шушенски|Шушенське
Vyselki;agmgy687h;Выселки
Kalininsk;ax2hbk8hh;Калининск
Bronnitsy;b7ygua87h;Бронницы|Броннитси|Броници
Stroitel;av3gpc87h;Строитель
Vanino;aqeopl6ph;Ванино
Talitsa;bcdit16sh;Талица|Талиця
Agryz;bb0hz787h;Агрыз|Агриз|Әгерҗе
Galich;bg6h5n87h;Галич|Нӧрӧ|Умарь ош
Tarko-Sale;bycjw16sh;Тарко Сале|Тарко-Сале|Тарка-Сале
Turinsk;bf9isy6sh;Туринск|Туринськ|Турынск
Valday;bf2ggd87h;Валдай
Barysh;b31hix8oh;Барыш|Барыш ош|Бариш
Starodub;b03gf087h;Стародуб|Старадуб
Chigiri;atunq76qh;Чигири
Shumikha;b7firt6sh;Шумиха
Trudovoye;aaao2w6ph;Трудовое
Kyakhta;atvm3p5gh;Кяхта
Nezlobnaya;ackh8k87h;Незлобная
Malakhovka;b8lgtm87h;Малаховка
Kinel’-Cherkassy;b2jhv18eh;Кинель-Черкассы
Avtury;a9whfs87h;Автуры|Эвтара|Новосадовое
Ardon;a9yhb187h;Ардон|Æрыдон|Ӕрыдон
Kotel’niki;b8lgt687h;Котельники
Priozërsk;bnkg7q87h;Приозерск|Приозёрск|Корела
Beloozyorskiy;b82gus87h;Белоозерский|Белоозёрский
Kharabali;alphj97eh;Харабали
Afipskiy;aeqgvw87h;Афипский
Krasnovishersk;bltiak6sh;Красновишерск|Вижаиха
Sel’tso;b29giq87h;Сельцо
Abaza;b09ku95ph;Абаза
Nar'yan-Mar;c5whz887h;Нарьян-Мар|Нар’ян-Мар
Yasnogorsk;b5cgsq87h;Ясногорск|Лаптево
Povorino;aw8h5d87h;Поворино|Паворына
Chegem;ab1h9387h;Чегем|Чегем Первый
Izluchinsk;bnejto6sh;Излучинск
Otradnoye;b97gsg87h;Отрадное
Belaya Glina;ai0h1j87h;Белая Глина
Yegorlykskaya;ajdh0y87h;Егорлыкская
Kirsanov;b09h6p87h;Кирсанов
Kurtamysh;b6jiuz6sh;Куртамыш|Кортамыш|Куртамиш
Kasli;b99ikr6sh;Касли
Zhirnovsk;avmhce8th;Жирновск
Sovetsk;bdzho07wh;Совецк|Советск|Савецк
Privolzhsk;bdeh2p87h;Приволжск|Приволшк
Kosaya Gora;b4cgsa87h;Косая Гора
Nevel’;b9mg7587h;Невель
Raduzhnyy;b9kh0287h;Радужный
Zapolyarnyy;cavg9l87h;Заполярный
Aprelevka;b8bgr087h;Апрелевка
Markova;az1lxi5gh;Маркова|Марково
Kedrovka;b88kj65zh;Кедровка
Bolotnoye;b8nkef60h;Болотное
Volgorechensk;bdkh2c87h;Волгореченск
Zimovniki;akzh5z87h;Зимовники
Reftinskiy;bclinc6sh;Рефтинский
Enem;aetgw387h;Энем
Svobody;acbh7l87h;Свободы|Посёлок Свободи
Aginskoye;avzmq653h;Агинское|Ага
Kholmskiy;aelgum87h;Холмский|Холмська|Холмская
Baymak;b03idz6sh;Баймак
Nizhnyaya Salda;bfciko6sh;Нижняя Салда
Saraktash;axvi8k6sh;Саракташ
Chudovo;bi8gc087h;Чудово
Boksitogorsk;bj8gi187h;Бокситогорск|Бокситогорськ
Kantyshevo;aa3hbz87h;Кантышево
Yasnyy;avsiib6sh;Ясный
Kommunar;bjmg8f87h;Коммунар|Комунар|Камунар
Gavrilov-Yam;bd6gyp87h;Гаврилов-Ям
Polyarnyy;ca8ggw87h;Полярный
Suvorovskaya;acrh6i87h;Суворовская
Arsk;b9thqk87h;Арск|Арськ|Арча
Gribanovskiy;awxh4k87h;Грибановский
Promyshlennaya;b6jkhw5zh;Промышленная|Прамышленная|Промышленни
Novoul’yanovsk;b4fhmf8oh;Новоульяновск
Pallasovka;at1hi98th;Палласовка|Паласовка
Pokachi;bpgjpd6sh;Покачи
Plast;b51ikx6sh;Пласт
Ryl’sk;ax9gkc87h;Рыльск
Kudepsta;aaugyt87h;Кудепста
Nevel’sk;ajoou26ah;Невельск
Kavalerovo;aczob56ph;Кавалерово|Кавалерава
Medvedovskaya;ag9gwe87h;Медведовская
Novouzensk;au6hlq8hh;Новоузенск|Новоузенськ|Наваузенск
Pridonskoy;axkgwj87h;Придонской
Krasnoobsk;b6kkaj60h;Краснообск|Краснообськ|Краснаобск
Menzelinsk;b8thzi87h;Мензелинск|Мензела
Tuchkovo;b8ggpb87h;Тучково
Danilov;bfngzl87h;Данилов
Vasil’yevo;b93hnc87h;Васильево
Kukmor;ba3htd87h;Кукмор|Бол.Кукмор|Кукмара
Achkhoy-Martan;a9zhds87h;Ачхой-Мартан|Іашхойн-Марта|ТІехьа-Марта
Belyy Yar;bo6jjg6sh;Белый Яр
Plavsk;b37grl87h;Плавск|Плавское|Сергиевское
Lakinsk;b9mgyz87h;Лакинск
Poronaysk;aqqoxh6ah;Поронайск
Ilanskiy;ba8lav5ph;Иланский
Balezino;bf2hz98eh;Балезино
Kashin;bdcgsh87h;Кашин|Кашын
Severo-Zadonsk;b43guo87h;Северо-Задонск
Medvezh’yegorsk;bsrgjq87h;Медвежьегорск
Vostryakovo;b7wgt187h;Востряково
Kochenëvo;b6tk8d60h;Коченёво
Yemva;brvhta87h;Емва|Железнодорожный
Zvenigorod;b8tgqe87h;Звенигород
Kupino;b51jur60h;Купино
Surkhakhi;a9zhcq87h;Сурхахи
Chunskiy;b9tlks5gh;Чунский
Kamyzyak;ai3hlk7eh;Камызяк
Krasnogvardeyskoye;ahch3c87h;Красногвардейское
Shilovo;b4wh1k87h;Шилово
Gryazovets;bhkgzt87h;Грязовец
Sukhinichi;b4agm687h;Сухиничи
Trubchevsk;b02ght87h;Трубчевск
Pavlovsk;bjsg8j87h;Павловск
Belidzhi;a6dhmh87h;Белиджи
Golitsyno;b8hgqq87h;Голицыно|Голицино|Голитсино
Nikolayevsk;aszhea8th;Николаевск
Zherdevka;ay1h3587h;Жердевка
Tsotsin-Yurt;aa4hfs87h;Цоцин-Юрт|Цоци-Юрт|Цацан-Юрт
Bodaybo;bepmp85gh;Бодайбо
Pestovo;bgrgng87h;Пестово
Melenki;b7qh3n87h;Меленки
Pokrov;b9cgwt87h;Покров
Petushki;b9dgxm87h;Петушки
Mezgor'e;b45icm6sh;Межгорье
Arzgir;ag1hau87h;Арзгир
Svetogorsk;bnrg4687h;Светогорск|Светагорск
Persianovka;am1gxi87h;Персиановка|Персиановский
Divnoye;ahjh8f87h;Дивное
Venëv;b4zgua87h;Венёв
Semender;a9fhjo87h;Семендер
Kodinsk;bgtljh5ph;Кодинск|Кодинский
Gornyak;avok6b4zh;Горняк
Zelenogradsk;b6ofgw7vh;Зеленоградск|Зеленоградськ
Uzhur;b7oktj5ph;Ужур
Sim;b6rica6sh;Сим
Karabash;b85ij96sh;Карабаш
Kataysk;badipu6sh;Катайск
Karabanovo;bafgvi87h;Карабаново|Карабанава
Anadyr;bxtrl34qh;Анадыр|Анадырь|Анадир
Baykal’sk;ax3lxa5gh;Байкальск
Nikel;catg7y87h;Никель
Razumnoye;audgpw87h;Разумное|Розумне
Shushary;bk5g8e87h;Шушары
Aleksandrovsk;bicibx6sh;Александровск|Лытва
Strunino;balgv687h;Струнино
Donskoye;ag9h4l87h;Донское
Moskovskiy;b8ggrr87h;Московский
Mayma;aygkim4zh;Майма
Borovskiy;bcgiyk6sh;Боровский
Ochër;besi406sh;Очер|Очёр
Suzun;b3ek8o60h;Сузун
Nerchinsk;ayemvv53h;Нерчинск|Нерчинськ|Нерчынск
Kulunda;b00jza4zh;Кулунда
Tsimlyansk;amdh4x87h;Цимлянск
Bagayevskaya;algh0687h;Багаевская
Belëv;b3hgod87h;Белёв
Degtyarsk;bbiiix6sh;Дегтярск|Дегтярка
Aykhal;c15mho6qh;Айхал
Udachny;c2jmk86qh;Удачны|Удачный|Удачни
Sofrino;b9zgtd87h;Софрино
Chernyanka;avigt287h;Чернянка
Vyazemskiy;am1oac6ph;Вяземский
Novosilikatnyy;b23kca4zh;Новосиликатный
Aramil;bbiil06sh;Арамил|Арамиль
Dubovka;aqahcj8th;Дубовка
Nizhnesortymskiy;brgjfc6sh;Нижнесортымский
Yashkino;b97khb5zh;Яшкино
Yelan’;avjh9i8th;Елань
Giaginskaya;aemgzb87h;Гиагинская|Гиагински
Leninsk;apahdk8th;Ленинск
Uchkeken;ac3h6487h;Учкекен
Pochep;b11ggx87h;Почеп|Почёп
Polyarnyye Zori;c55gea87h;Полярные Зори
Boguchar;asph0n87h;Богучар
=RW
Kigali;6slg7i0so;キガリ|吉佳利|키갈리|Kigale|Kigalo|Kigaly|Kiqali|Kigalis|Kinkali|Кигали|Кігалі|كيغالي|کیگالی|किगाली|คิกาลี
Gisenyi;6tag5a0sl
Musanze;6tug6b0sl
Nyagatare;6ueg880sk
Gitarama;6s9g6o0sk
Muhanga;6seg6j0sk
Butare;6qsg6m0sj
Kibuye;6sag5j0sj
Rwamagana;6slg8j0sj
Kibungo;6s0g8u0sj
Cyangugu;6r4g4b0sj
Shyorongi;6svg780sj
Byumba;6tmg7j0sj
Ndera;6slg7t0si
Kirambo;6rkg4y0si
Kagano;6rig4t0si
Ngororero;6sug6b0si
Nzega;6r4g640si
Macuba;6rng530si
Karengera;6r0g4n0si
Nyanza;6rhg6n0si
Bugarama;6qjg4l0si
Gihombo;6rug570si
Karambi;6rkg580si
Bushekeri;6rag4t0si
Nyabitekeli;6rhg4n0si
Busogo;6tog620si
Shangi;6rcg4l0si
Kayonza;6slg8s0si
Cyato;6rdg530si
Kirimbi;6rqg540si
Gitesi;6s5g5o0si
Bushenge;6r8g4i0sh
Nyamata;6rwg7q0sh
Ruhango;6rug6r0sh
Gikongoro;6r6g650sh
Mahembe;6rsg5d0sh
Mukamira;6tjg5y0sh
Mugina;6s5g760sh
Umutara;6ueg880sh
Rangiro;6rcg500sh
Kamuhanda / Ruyenzi;6sjg7a0sh
Bugaragara;6ufg8h0sh
Mukingo;6tqg640sh
Kora;6tjg5s0sh
=SA
Jeddah;8lpgwv69r;吉达|吉達|제다|지다|جدة|جده|ジッダ|Gido|Jida|Yida|Cidda|Cidde|Dzeda|Dzida|Dzidd|Gedda|Gidda|Iedda|Jedda|Jidda|Jidde|Judah|Yidda|Chidda|Ciddae|Djedda|Djidda|Dzedda|Dzhida|Dzhyda|Dzidda|Dzudda|Jaddah|Jiddah|Juddah|Tzenta|Zhidda|Djeddah|Dzhidda|Dzhidde|Dzsidda|Dschidda|Dzhiddae|Dzhiddat|Џеда|Джида|जेद्दाह|ญิดดะฮ์
Riyadh;8ulhhs69q;リヤド|利雅得|利雅德|리야드|Riad|Riaad|Riade|Riadi|Riado|Riant|Rihad|Rijad|Riyad|Riadum|Rijada|Al-Riad|Rijadas|Al-Riyad|Ar-Riaad|Ar-Rijad|Ar-Riyad|Ar-Riyod|Er-Rijad|Er-riyad|Ər-Riyad|Ar Riyadh|Ehr-Rijad|Ehr-Ryjad|Рияд|Ријад|رياض|ریاض|रियाद|रियाध|ริยาด|رىياد|الرياض
Makkah;8ljgyn69p;麥加|메카|مكة|مكه|メッカ|Meca|Meka|Meke|Makka|Mecca|Mecka|Meice|Mekao|Mekka|Mekke|Mekko|A Meca|Mekkah|La Meca|Maekkae|La Mecca|Macoraba|La Mecque|Makkah al-Mukarramah|Мека|Мекка|मक्का|มักกะฮ์|مكة المكرمة
Madinah;8tzgy169o;麥地那|麦地那|메디나|Medin|Madina|Medina|Medine|Medino|Medyna|Madinat|Mediina|Medinae|Medzina|Yathrib|Maedinae|Al Madina|Al Medina|El Medina|Lathrippa|Al Madinah|Madinah al-Munawwarah|Al-Madinah al-Munawwarah|مدينه|مدینه|मदिना|मदीना|マディーナ|Мадина|Мединæ|มะดีนะฮ์|المدينة|المدينة المنورة
Dammam;8zfhr669o;达曼|담맘|دمام|الدمام|Damam|Damman|Ntamam|Daemmam|Damamas|Ad Dammam|Ad-Damman|Ed Dammam|Дамам|Даммам|दम्मम|दम्माम|ダンマーム|อัดดัมมาม
Sulţānah;8u1gxz69o
Buraydah;8z5ha569n;بريده|بُرَيدَة
Ta’if;8l3h0a69n;طائف|تاىيف|الطائف
Tabuk;94wgpl69n;تبوك
Ha'il;92gh3t69n;حائل
Najrān;8alhal69n;نجران
Al Kharj;8t4hjh69n;الخرج
Khamis Mushait;8cuh6p69m;خميس مشيط
Al Hufūf;8wghpr69m;هفوف|الهفوف
Al Mubarraz;8wlhpr69m;المبرز
Hafar Al-Batin;94zhfp69m;حفر الباطن‎
Thuqbah;8yyhrg69m;الثقبة
Al Jubayl;912hpu69m;الجبيل
Şabyā;89nh6f69l;صبيا
Abha;8cmh6369l;أبها|ابها
Yanbu;8sxgtq69l;ينبع
Unaizah;8yiha869l
Khobar;8z0hrh69l;خبر|الخبر
Arar;9c2h2069l;عرعر
Sakakah;999gzp69k;سكاكا
Az Zulfī;8z2hci69k;الزُّلفِي
Jizan;88xh6769k;جازان|جيزان
Qurayyat;9d1grq69k;القريات
Sabt Alalayah;8geh4k69k;سبت العلايا
Dhahran;8z1hr769k;ظهران|الظهران
Al Qaţīf;8zthqx69k;القطيف
Al Bahah;8hlh3769k;الباحة|الباحه
Ad Dawādimī;8u3hbb69k
Tārūt;8zthr069k;تاروت
Qal‘at Bīshah;8hkh6d69k
Ar Rass;8xvh8u69k;رس|الرس|الرَّس
Bariq;8elh4h69k
Rābigh;8pcgwf69j
Ash Shafā;8kjh0069j;الشفا
Al Līth;8hzgzv69j
Abū ‘Arīsh;895h6z69j;ٲبو عريش
Sayhāt;8zkhr169j;سيهات
Ţurayf;9dzgve69j
King Faisal Military City;951hfp69j
Ras Tanura;907hr369j;رحيمة|رأس تنورة|راس تنوره
Ad Dir‘īyah;8urhha69j;الدرعية
Al Khafjī;950hmp69j
Baljurashi;8h6h3g69j;بلجرشي
Al Badā’i‘ al Wusţá;8y7h9i69j;البَدائع|البَدائع الوُسطى
Ranyah;8l1h7169j;رنية
Şafwá;901hqs69j;صفوى
Afif;8sfh7869j
Al Bukayrīyah;8ymh9a69j;البُكَيرِيَّة
‘Irqah;8ukhhh69j;عرقة
Raḩīmah;907hr269i
Turaif;9dzgve69i;طريف‎‎
Ţubarjal;9aqgu669i;طبرجل
Taymā’;92qgv269i
Ad Dilam;8snhj069i;الدلم
Umluj;8vigrj69i;أملج
Al Mithnab;8xuhau69i;المذنب
Al-\`Ula;8zxgtc69i;ددن|العلا|دادان
Shaqra;8w4hdp69i;شقراء
Ḥawṭah Banī Tamīm;8rahi869i
Fayfā’;8a0h7u69i;فيفاء
Laylá;8nxhhs69i
Abqaiq;8y1hpz69i;بقيق
Al Khurmah;8mvh4r69i
Turubah;94ih7869i;تربة
Badr Ḩunayn;8s2gvr69i
Thuwal;8nwgwn69i
Şāmitah;884h7a69i
Al Wajh;8yvgpa69i;الوجه
Al ‘Awwāmīyah;8zvhqu69i;العوامية
Ḑamad;89ih6u69i;ضمد
Ḩaql;97dgl369i
Riyāḑ al Khabrā’;8yfh8z69i;رِياض الخَبراء
King Khalid Military City;93jhej69i
Rumāḩ;8x0hj069i;رماح
An Nimas;8f7h5069i;النماص
As Sulayyil;8iuhem69i
Al Mash‘ilīyah;8bchbj69h;المشعلية
Turabah;8kxh3n69h
Al Jumūm;8m2gya69h;الجموم
Duba;91zgn569h;ضبا
Aţ Ţaraf;8wghq569h;الطرف
Qaisumah;94nhg569h;القيصومه|القيصومة‎‎
Mahd adh Dhahab;8rah1k69h
Khulayş;8nkgx869h
‘Inak;8zohqz69h;عنك
Sarāt ‘Abīdah;8c9h7t69h;سراة عبيدة
Baq‘ā’;93jh5r69h;بَقعاء
Al ‘Aqīq;8jdh3269h
Al ‘Aqīq;8ibh3q69h;العقيق
Al Khabrā’;8yfh9669h;الخَبراء
Al Baţţālīyah;8wnhpv69h
Al Munayzilah;8wihpz69h
‘Uyūn al Jiwā’;8zmh9769h;عُيُون الجِواء
=SB
Honiara;67tq8b9dj
Panatina;67tq8h9di
Nggosi;67tq889di
Tandai;67rq8b9di
Kola'a;67sq8d9dh
Vura;67sq8f9dh
Malango;67uq8l9dh
=SC
Victoria;6l6i6292h
=SD
Khartoum;857ged0rp;喀土穆|하르툼|خرطوم|خارطوم|ハルツーム|Cartum|Hartum|Jartum|Kartum|Xartum|Chartum|Hartumo|Khartum|Khartun|Chartoum|Khartoem|Khartoun|Chartumas|Al Khartum|Al Khurtum|Картум|Хартум|ااالخرطوم
Omdurman;85gge80rp;恩图曼|옴두르만|オムドゥルマン|Омдурман|Омдурман қаласы|أم درمان|Omdoerman|Omdourman|Omdurmana|Omdurmanas|Umm Durman|ออมเดอร์มาน
Khartoum North;85hged0ro;بحري|الخرطوم بحري|Bahri|Barkhi|Jartum Norte|Khartum Nord|Khartoum Nord|Severni Kartum|Sjeverni Kartum|Severnyj Khartum|Pivnichnij Khartum|Бархи|Северни Картум
Nyala;7vhft40rn;نيالا
Port Sudan;8gigre0rn;بور سودان|بورتسودان
Kassala;84xgp40rm;كسل|كسلا
El Obeid;7ymg7y0rm;الأبي|الابيض
Al Qadarif;80zgma0rm;القضارف
Kosti;7ykgeq0rm;ربك
Wad Medani;820gh40rm;ود مدني
El Daein;7tufwl0rm;الدعين|الضعين
El Fasher;7zvfuf0rm;الفاشر
Singa;7yjgi90rm;سنجة
Ad-Damazin;7urgjg0rl;الدمازين
Al-Junaynah;7zdfmd0rl;الجنينة
Rabak;7ymgey0rl;ربك
El Geneina Fort;7zffme0rl
Sennar;7zpgh90rk;سنار
Al Manāqil;81lgfn0rk
Gereida;7tcftu0rk;قريضة
Atbara;8b6gif0rk;عطبرة|عطبره
An Nuhūd;7xag2z0rk;النهود
Ad-Damir;8awgid0rk;الدامر
Kadugli;7slg6k0rk;كادقلى|كادقلي
Ad Douiem;80wgdr0rk;الدويم (مدينة)
Burām;7s6ftw0rj
Shendi;88dggv0rj;شندى|شندي
New Halfa;84lgmw0rj;حلفا الجديدة|حلفا الجديده
Dilling;7vhg6d0rj
Er Roseires;7uzgjj0rj;الروصيرص
Umm Ruwaba;7xvgaq0rj;أم روابة|ام روابه
Dongola;8fag8o0rj;دنقلا|دنقله|ډwnګwla
'Ārdamatā;7zgfmh0rj
Kas;7wrfrh0rj
Mellit;819fuz0rj
Sh'īarīah;7wkfv20rj
Al Hasaheisa;82zggi0rj
Abu Jibeha;7tugar0rj
Khashm al Qirbah;83lgns0rj;خشم القربة|خشم القربه
Suakin;8f3grp0rj;سواكن
Kabkābīyah;7zxfqw0rj
Tullus;7stfs50ri
Al Mijlad;7sng110ri
Tokār;8d7gst0ri;طوكر
Ar Rahad;7xcg950ri;الرهد|الرهد، سودان
Sinkat;8ecgqc0ri
Zalinjay;7xvfp70ri;زالنجي|زالنجي (مدينة)
Kutum;81gfsj0ri
As Sūkī;7z0gi40ri
Babanūsah;7thg180ri
Tandaltī;7y6gcj0ri
Jubayt;8engqb0ri;جبيت
Al-Fāw;817gip0ri
Al Ḩawātah;7zagk70ri
Maiurno;7zaghj0ri
Rufā‘a;830ggp0ri
Al-Quṭaynah;82xgdn0ri
Kināna;810gg50ri
Berber;8c2gie0ri
Al Fūlah;7ulg2s0ri
Ad-Dindar;7z1gip0ri
Rahad al Bardi;7tefqc0ri
Abū Zabad;7wbg590rh
Ghubaysh;7vrfzz0rh
Al Jazeera Aba;7z0gel0rh
Al-Fashaqah;820gnn0rh
Umm Shawkah;7z0ght0rh
Abyei;7oog2z0rh;أبيي
Doka;7zkgnd0rh
Kuraymah;8djgch0rh
El Bauga;8cqgi70rh
Al Qiţena;83agdx0rh
Al Hilāliyya;83iggb0rh
Bārah;802g8d0rh
Ad Dindar;7yogix0rh
=SE
Stockholm;bitfa78lp;스톡홀름|斯德哥尔摩|斯德哥爾摩|Holmia|Stocolm|Stokolm|Estocolm|Stockolm|Stocolma|Stokgolm|Stokholm|Stuculma|Tukholma|Estocolme|Estocolmo|Estocolmu|Estokolma|Estokolmo|Stakgol'm|Stjokolna|Stoccholm|Stoccolma|Stokgol'm|Stokhol'm|Stokholma|Stokholmi|Stokholmo|Stokkholm|Stokkolma|Stokol'ma|Sztokholm|Stokcholme|Stokholmas|Stockholbma|Stokkholmur|Stuokhuolms|Stokgol'm osh|استکهلم|سٹاکہوم|स्टकहोम|स्तकहोम|ストックホルム|Стокхолм|Стокҳолм|สตอกโฮล์ม
Gothenburg;bebet98ln
Malmö;b8hew48lm
Uppsala;bkaf908ll
Linköping;bg9f3e8ll
Örebro;binf298ll
Sollentuna;bj3f9v8ll
Umeå;bvbfga8lk
Västerås;bjmf5z8lk
Södermalm;birfa88lk
Jönköping;beiezc8lk
Helsingborg;b9pev98lk
Norrköping;bgrf4y8lk
Huddinge;bikf9y8lk
Lund;b8rewn8lk
Luleå;c06flj8lk
Haninge;bidfae8lj
Gävle;bmjf7m8lj
Bromma;biuf9u8lj
Borås;becevy8lj
Växjö;bc0f158lj
Södertälje;bigf8z8lj
Halmstad;bbfevq8lj
Kungsholmen;bitfa48lj
Eskilstuna;bixf5v8lj
Solna;biwfa08lj
Karlskrona;ba0f3b8lj
Karlstad;biyexi8lj
Mölndal;be6etd8lj
Vasastaden;bivfa38lj
Täby;bj4fa78lj
Sundsvall;brbf838lj
Östersund;btif0o8lj
Trollhättan;bfweu58lj
Lidingö;bixfad8lj
Borlänge;bm1f2w8li
Tumba;bigf9j8li
Kristianstad;b9nezb8li
Nyköping;bh7f798li
Kalmar;bbef5g8li
Falun;bmcf3f8li
Skövde;bg7eyh8li
Upplands Väsby;bjcf9r8li
Östermalm;biufa88li
Skellefteå;bxvfi78li
Uddevalla;bg3et68li
Sundbyberg;biwf9x8li
Varberg;bcneu18li
Åkersberga;bj8fau8li
Örnsköldsvik;bttfc08li
Danderyd;bj0fa28li
Landskrona;b97evn8li
Vallentuna;bjdfa88li
Motala;bgmf1s8li
Trelleborg;b7uewk8li
Majorna;be9et48li
Partille;beeetn8li
Karlskoga;bitf0c8li
Märsta;bjmf9l8li
Lerum;beheu38li
Alingsås;bexeut8li
Nacka;birfag8li
Härnösand;brzf9u8li
Sandviken;bmef6l8li
Kungälv;bereta8li
Falkenberg;bc3eup8li
Boo;bitfas8li
Jakobsberg;bj2f9k8li
Visby;be4fau8lh
Katrineholm;bhwf518lh
Ängelholm;ba8evq8lh
Vänersborg;bg6eu88lh
Björlanda;behesv8lh
Piteå;bzgfjo8lh
Lidköping;bgjewk8lh
Enköping;bjof7g8lh
Huskvarna;bejezq8lh
Västervik;begf688lh
Gustavsberg;bitfb38lh
Karlshamn;ba1f1a8lh
Norrtälje;bk0fby8lh
Rinkeby;bizf9t8lh
Hässleholm;ba0ey98lh
Värnamo;bcvez08lh
Hässelby Villastad;biyf9h8lh
Ystad;b7zeye8lh
Kungsbacka;bdpetk8lh
Eslöv;b94ewy8lh
Kristinehamn;birez78lh
Köping;bjbf4f8lh
Oskarshamn;bd2f5p8lh
Gamla Uppsala;bkef8z8lh
Nässjö;be5f0u8lh
Mölnlycke;be6eto8lh
Falköping;bflexn8lh
Tensta;bizf9q8lh
Kiruna;c6ifg78lh
Råsunda;bixfa08lh
Boden;c0vfk98lh
Årsta;biqfa58lh
Kumla;bi9f228lh
Mariestad;bh3eye8lh
Hudiksvall;bphf7j8lh
Tullinge;bigf9q8lh
Västra Frölunda;be5et58lh
Ljungby;bbveyq8lh
Staffanstorp;b8kewp8lh
Ludvika;bl3f278lh
Kinna;bdrev98lh
=SG
Singapore;71llwh6er;新加坡|星架坡|싱가폴|싱가포르|シンガポール|Danmaxi|Temasek|Tumasik|Singapur|Sin-ka-po|Singapour|Singapura|Syonan-to|Sinkapoure|Garden City|Singapore City|سنگاپور|سنغافورة|Сингапур|Сінгапур|सिंगापुर|สิงค์โปร|ประเทศสิงคโปร์
Bedok New Town;71plwq6em
Ulu Bedok;71plwp6em
Sengkang New Town;71vlwl6em
Tampines Estate;71slwq6em
Jurong Town;71plw46em
Tampines New Town;71rlwr6em
Woodlands;720lwb6em
Jurong West;71rlw46em
Yishun New Town;71zlwf6el
Hougang New Town;71slwl6el
Punggol;71xlwn6el
Choa Chu Kang New Town;71ulw76el
Ang Mo Kio New Town;71ulwg6el
Bukit Batok New Town;71slw86el
Bukit Merah Estate;71klwe6el
Kampong Pasir Ris;71ulwp6el
Bukit Panjang New Town;71ulw86el
Kembangan;71olwn6ek
Toa Payoh New Town;71qlwh6ek
Serangoon;71slwm6ek
Serangoon New Town;71rlwj6ek
Geylang;71olwl6ek
Sembawang Estate;721lwf6ek
Queenstown Estate;71llwc6ek
Kallang;71plwj6ek
Clementi Housing Estate;71olw86ek
Bishan New Town;71rlwh6ek
Bukit Timah;71plwb6ek
Jurong East;71plw66ej
Pasir Ris New Town;71tlwr6ej
Novena;71olwg6ej
Matilda Estate;71wlwm6ej
Marine Parade;71mlwn6ej
Simei New Town;71qlws6ei
Keat Hong Village;71ulw66ei
Yew Tee;71wlw76ei
Kaki Bukit Estate;71qlwn6ei
Serangoon Garden;71slwi6ei
Peng Siang;71ulw66ei
Eunos;71olwm6ei
Kangkar;71ulwm6ei
Jelebu;71ulw86ei
Boon Lay;71nlw16ei
Thomson;71rlwg6ei
Yio Chu Kang;71vlwh6ei
MacPherson;71plwk6ei
Fajar;71ulw96ei
Hong Kah;71slw46ei
Saujana;71ulw96ei
Teck Whye;71ulw76ei
Margaret Drive;71mlwd6ei
Senja;71vlw86ei
Anak Bukit;71qlw96eh
Marsiling;71zlw96eh
Tanglin;71olwe6eh
Bangkit;71ulw96eh
Sungai Simpang;720lwf6eh
Brickworks Estate;71llwd6eh
Telok Blangah;71jlwd6eh
Outram Park;71klwg6eh
Paya Lebar;71rlwl6eh
Kampong Loyang;71ulws6eh
Loyang;71ulwt6eh
Tiong Bahru Estate;71klwf6eh
=SH
Jamestown;5psdg472b
=SI
Ljubljana;ahxf0b7zm
Maribor;ajcf3h7zk
Celje;aiff2e7zi
Kranj;aigezw7zi
Koper;agjey57zi
Novo Mesto;ah8f257zi
Velenje;aisf1z7zi
Ptuj;aiyf437zh
Trbovlje;ai7f1t7zh
=SJ
Longyearbyen;czaf3h4md
=SK
Bratislava;anrf7j7in
Košice;apbfj27il
Petržalka;anof7l7ik
Nitra;ao7fa87ik
Prešov;aq4fj07ik
Žilina;aqqfc27ik
Banská Bystrica;apefd77ij
Trnava;aoef8v7ij
Trenčín;aptfa47ij
Martin;aqbfck7ij
Poprad;aqafge7ij
Staré Mesto;anrf7h7ij
Prievidza;aphfbr7ij
Zvolen;aoxfd77ii
Považská Bystrica;aqgfb67ii
Nové Zámky;anbfag7ii
Michalovce;apffkw7ii
Karlova Ves;anrf7e7ii
Dúbravka;anvf7c7ii
Spišská Nová Ves;apyfh47ii
Komárno;anofaw7ii
Komárno;amofac7ii
Levice;anyfbp7ii
Humenné;apyfkw7ii
Bardejov;aqxfj37ii
Liptovský Mikuláš;aqcfei7ii
Dlhé diely;anrf7d7ii
Piešťany;aozf9j7ii
Ružomberok;aqbfdn7ii
Lučenec;ao9fen7ii
Pezinok;ao5f7z7ii
Topoľčany;aowfah7ii
Podunajské Biskupice;anpf7t7ih
Trebišov;ap3fkc7ih
Dunajská Streda;anbf8x7ih
Čadca;arcfc77ih
Snina;aq3flj7ih
Dubnica nad Váhom;aq0fah7ih
Rimavská Sobota;aoeffm7ih
Partizánske;ap3fb27ih
Vrakuňa;anqf7t7ih
Vranov nad Topľou;aptfk87ih
Šaľa;anrf9o7ih
Senec;anyf8c7ih
Hlohovec;aojf9g7ih
Brezno;apkfek7ih
Senica;ap8f897ih
Nové Mesto nad Váhom;apgf9j7ih
Malacky;aokf7a7ih
Dolný Kubín;aqpfdm7ih
Devínska Nová Ves;anxf767ih
Rožňava;ap6fh27ih
Púchov;aqgfax7ih
Žiar nad Hronom;aozfcd7ih
Bánovce nad Bebravou;apcfaq7ih
Handlová;apdfc47ih
Stará Ľubovňa;aqyfhh7ih
Skalica;apof7v7ih
Galanta;anvf997ih
Kežmarok;aqifgr7ih
Sereď;ao5f997ih
=SL
Freetown;7llcv80lo
Kenema;7jwd0x0lm
Bo;7k4cze0ll
Koidu;7m0d1j0lk
Makeni;7mpcyk0lk
Waterloo;7l6cvp0lj
Port Loko;7mdcwh0lj
Njala;7kvcym0li
Lunsar;7m4cx70lh
Goderich;7lfcv30lh
Kabala;7onczx0lh
Segbwema;7k7d1l0lh
Bumpe;7jxcyx0lh
Mile 91;7ljcy30lh
=SM
San Marino;ac2eul8ff
=SN
Dakar;82tcjk0gq;達喀爾|다카르|डकार|ダカール|Dacar|Dakaa|Dakara|Dakaro|Ntakar|Dakaras|Ndakaaru|Дакар|داكار|داکار|ดาการ์
Pikine;830cjp0go;皮金|ピキン|Pikin|Пикин
Touba;83acnw0go;圖巴|투바|Tuba|Tuubaa|Туба|トゥーバ
Guédiawaye;831cjo0gm
Thiès;833ckz0gm
Kaolack;81bcnd0gm
Rufisque;82wck10gm
Mbour;822ckw0gm
Saint-Louis;86icm70gm
Thiès Nones;832ckv0gm
Rufisque est;82wck10gl
Ziguinchor;7wxcmt0gl
Diourbel;82pcmw0gl
Tambacounda;809cu10gl
Louga;85ecmy0gk
Kolda;7xtcqi0gk
Tivaouane;83jcla0gk
Mbaké;833cnt0gk
Tiébo;82ncmx0gk
Keur Médoune;830cnu0gk
Richard-Toll;87qcoe0gj
Dougnane;83kcl50gj
Bargny;82uck50gj
Kaffrine;817cot0gj
Bargny Guèdj;82tck50gj
Bargny Ngoude;82tck40gj
Nguékhokh;82bcks0gj
Diamniadio;82wcka0gj
Joal;81dcl70gj
Dara;84ncp00gj
Vélingara;7yjcss0gj
Sébikhotane;82zcke0gj
Sali;824ckq0gi
Jaxaay Parcelle Niakoul Rap;831ck00gi
Niakoul Rab;832ck10gi
Mboro;842cl30gi
Fatick;81tcmf0gi
Bambey;82ucma0gi
Médina Gounas;7yicts0gi
N’diareme limamoulaye;832cjq0gi
Le Plateau;82qcjk0gi
Ndibène Dahra;84lcp00gi
Sédhiou;7xbcos0gi
Koungheul;80ucqw0gi
Kédougou;7wwcy60gi
Bignona;7xlcmx0gi
Matam;85icv60gi
Mékhé;83zclu0gi
Ouro Sogui;85dcv00gi
Kahone;81ccng0gi
Diaoubé;7xwcsn0gi
Poukham Un;81wcmf0gi
Pout;831ckm0gi
Kayar;83gckg0gh
Dagana;87scoo0gh
Koungneul Sossé;80tcqu0gh
Nioro du Rip;807co40gh
Guinguinéo;81ncnp0gh
Khombole;830cln0gh
Ndioum;87vcrb0gh
Thiadiaye;822clm0gh
Kébémer;84ocmd0gh
Linguère;84scq00gh
Gandiaye;81kcmt0gh
Goudomp;7wycnx0gh
Koumpentoum;80ucrj0gh
Gossas Village;828cn90gh
Kbombole;831clm0gh
Kanel;851cve0gh
Thilogne;868cu20gh
=SO
Mogadishu;73ohdy14q;摩加迪休|摩加迪殊|摩加迪沙|모가디슈|Xamar|Mogadis|Maqdishu|Mogadish|Mogadiso|Mogadiss|Mogadisu|Mogadixo|Mogadixu|Moqadiso|Mugadiss|Muqdisho|Muqdishu|Magadysha|Mogadisas|Mogadisho|Mogadisju|Mogadisxo|Mogadiszu|Moukdicho|Moukntiso|Mugadiccu|Mugadishu|Muqdishow|Magadiscio|Mogadiisho|Mogadischu|Mogadiscio|Mogadisciu|Mogadisjoe|Mogaidisiu|Mogandisio|Mogaadisiyo|Mogadiscium|Monkantisou|مقديشو|مقديشيو|モガディシュ|Могадиш|Магадыша|मोगादिशू|मोगादीशू|โมกาดิชู
Borama;7pmh7y14n
Hargeysa;7okhae14n
Berbera;7r0hd114m
Kismayo;6x0h6714l
Marka;72shcd14l
El Dibir;7uphua14l
Ruqi;7pph8n14l
Baidoa;76nh9914k
Cabudwaaq;7fdhge02k
Burao;7ogheh14k
Kaambooni;6tgh3j14k
Gebiley;7oyh9614k
Bosaso;7tchom14j
Beled Hawo;78xh4c14j
Balanbale;7e1hf402j
Afgooye;73yhdc14j
Gaalkacyo;7gthjr14j
Laascaanood;7lkhjk14j
Garoowe;7lchmo14j
Beledweyne;7b6hdk14j
Qoryooley;72zhbp14j
Jawhar;75qhee14j
Jilib;6zdh6v14j
Jamaame;6y7h6q14j
Baardheere;74ih5g14j
Dhabad;7fvhh214i
Ceerigaabo;7rihjl14i
Luuq;78kh6614i
Buurhakaba;75shag14i
Dhamas;76rh2u14i
Ceeldheer;78phj214i
Saaxo;7gthi014i
Tog Wajaale;7ooh8e14h
Wanlaweyn;75ahcp14h
Baki;7phh8j14h
Diinsoor;74ph7e14h
Qandala;7tvhqj14h
Eyl;7k6hqe14h
Saylac;7tjh8r14h
Bu’aale;710h6a14h
Buulobarde;78phel14h
=SR
Paramaribo;7eb9mr3ul
Blauwgrond;7e89mw3ui
Latour;7e49mn3ui
Pontbuiten;7e39mn3uh
Rainville;7e79mu3uh
Flora;7e49mo3uh
Welgelegen;7e89mm3uh
Lelydorp;7du9ml3uh
Munder Buiten;7e89mq3uh
Beekhuizen;7e59mr3uh
Weg naar Zee;7eb9mn3uh
Tammenga;7e79mo3uh
=SS
Juba;7bhgbq0pn
Winejok;7n1g0l0pm
Yei;79dg980pm
Malakal;7ohgby0pl
Wau;7jeg1r0pk
Kuacjok;7l2g1q0pk
Pajok;78rge80pj
Gogrial;7lpg220pj
Yambio;7apg2v0pi
Aweil;7mcg030pi
Rumbek;7gxg6g0pi
Bor;7f9gbo0pi
Torit;7a9geh0ph
Leer;7l2g7q0ph
Tonj;7i7g3o0ph
Kafia Kingi;7nrfru0ph
=ST
São Tomé;6yyeep1cj
=SV
San Salvador;8017092on
Soyapango;80370e2om
San Miguel;7zg7322om
Santa Ana;80v6z82ol
Mejicanos;8047092ol
Santa Tecla;8007002ok
Apopa;80d70a2ok
Delgado;80470b2oj
Sonsonate;8046ys2oj
San Marcos;7zy70a2oj
Usulután;7z272c2oj
Cojutepeque;80470z2oj
Cuscatancingo;80570a2oj
San Vicente;7zw71e2oi
Zacatecoluca;7zj7152oi
San Martín;80a7102oi
Ilopango;80270h2oi
Ahuachapán;80o6yg2oi
Antiguo Cuscatlán;7zy7032oi
Chalchuapa;80v6yw2oi
Quezaltepeque;80f7012oi
La Unión;7z27402oi
Ayutuxtepeque;8067082oi
Acajutla;7zr6yh2oh
Aguilares;80s7092oh
Sensuntepeque;80k71t2oh
Chalatenango;81070y2oh
Izalco;8066yx2oh
Metapán;81t6zj2oh
San Rafael Oriente;7z672l2oh
Puerto El Triunfo;7yw7212oh
La Libertad;7zh6zw2oh
San Francisco;80173a2oh
Sonzacate;8056yt2oh
Santiago de María;7zg7292oh
=SX
Philipsburg;8c390v39d
=SY
Aleppo;9qkgr855p;حلب|हलब|अलेप्पो|阿勒颇|알레포|Alep|Alepo|Berea|Beria|Halab|Haleb|Halep|Heleb|Xalab|Alepas|Aleppe|Aleppu|Beroea|Haleba|Khaleb|Veroia|Chalepi|Halapia|Khalepion|Khaleb khot|Madinat Halab|Алеп|Халеб|アレッポ|อะเลปโป
Damascus;9j3got55p;Cham|Damas|Domas|Damasc|Damask|Dimäjk|Dimäşq|Al-Sham|Damasch|Damasco|Damascu|Damasek|Damashq|Damaska|Damasko|Damasku|Dameski|Damsyik|Dimaejk|Dimaesq|Dimashk|Dimashq|Dimishq|Ndamako|Damasiko|Damaskas|Damaskos|Damaskus|Damaszek|Dammeseq|Dimashku|Dimishiq|Dimishku|Esh Sham|Kamakeko|Damaskosy|An Damaisc|Damaszkusz|Dimashk al-Sham|دمشق|د مشق|大馬士革|大马士革|ダマスカス|다마스쿠스|Дамаск|Димишқ|दमिश्क|दमास्कस|ดามัสกัส|دەمەشىق
Homs;9mggq155o;حمص|مدينة حمص
Latakia;9opgnf55n;لاذقية|اللاذقية
Ar Raqqah;9pvgwd55n;رقه|الرقة|ڕەqqە
Ḩamāh;9nlgq455n;حماة|حماه
Ţarţūs;9mxgnp55n;ترطوس|طرطوس
Al Ḩasakah;9reh1755n;الحسكة|hەsychە
Deir ez-Zor;9o6gzi55m;دير الزور
Al Qāmishlī;9sxh2j55l;قامشلو|قامشلۆ|qamshlۆ
Al Bāb;9r1gs855k;الباب
Idlib;9ptgpr55k;إدلب|ادلب
Dūmā;9j9gp455k;دوما
Jaramānā;9j1goz55k;جرمانا
al-Yarmūk;9izgou55k;اليرموك|مخيم اليرموك
Manbij;9rhgtf55k;منبج
Dar‘ā;9gmgoa55k;درعا|dەrʿa|دەرعا
As Salamīyah;9n9gqx55k;سلمية|السلمية
Al-Tabqa;9pkgv355k;ثورة|الثورة|الطبقة
Dārayyā;9iygon55j;داريا|داريّا
I‘zāz;9rngqx55j;أعزاز|إعزاز
Jablah;9o8gnt55j;جبلة
As Safīrah;9q8grt55j;سفيرة|السفيرة
As-Suwayda;9gvgpl55j;السويداء
Ālbū Kamāl;9lph1o55j;أبو كمال|البو كمال
At Tall;9jdgov55j;التل
Al Mayādīn;9nah0d55j;ميادين|الميادين
Ar Rastan;9n1gq155j;الرستن
Kabbasin;9r7gsd55j;قباسين
Tadmur;9m0guc55j;تدمر
Babīlā;9izgox55j;ببيلا|باب بيلا
‘Ayn al ‘Arab;9shguj55j;عرب بينار|عين العرب
An Nabk;9kigq155j;النبك
Khān Shaykhūn;9oggpt55j;خان شيخون
‘Afrīn;9rfgqf55j;عفرين
Nawá;9hdgo455j;نوا|نوى
Kafranbel;9oxgpk55j;كفرنبل|كفر نبل
‘Irbīn;9j6gp155j;عربين
Al Quşayr;9lvgpm55i;القصير
Yabrūd;9kdgpu55i;يبرود
Jisr ash Shughūr;9phgow55i;جسر الشغور
Bāniyās;9nqgnv55i;بانياس
Tallbīsah;9msgq155i;تلبيسة
Ḩarastā;9j8gp155i;حرستا
Al Qunayţirah;9i1gni55i;القنيطرة
Tādif;9qzgs955i;تادف
Saraqib;9pmgq955i;سراقب
Jayrūd;9jxgq255i;جيرود
Maşyāf;9nfgoy55i;مصياف
Ma‘arratmişrīn;9q1gpv55i;معرتمصرين|معرة مصرين
Al Qaryatayn;9l3grg55i;القريتين
Salqīn;9qegp955i;سلقين
Ţafas;9gygo755i;طفس
Şūrān;9o1gq355i;صوران
Şaḩnāyā;9ivgon55i;صحنايا
Binnish;9pwgpz55i;بنش
Jāsim;9hngo655i;جاسم
Burj Islām;9p3gng55i;برج إسلام
Tallkalakh;9mbgoq55i;تلكلخ|تل كلخ
Az Zabadānī;9jogoa55i;الزبداني
Dā‘il;9gzgod55i;داعل
Ţayyibat al Imām;9nzgpz55i;طيبة الامام
Hajīn;9meh1f55i;هجين
Inkhil;9hqgod55i;انخل
Dayr Ḩāfir;9qggsr55i;دير حافر
Şāfītā;9mqgoc55i;صافيتا|برج صافيتا
‘Āmūdā;9t2h1p55i;عامودا|عامودة
Al Mālikīyah;9tah5255i;dێryk|ديريك|دێريك
Shaykh Miskīn;9h7gog55i;شيخ مسكين|الشيخ مسكين
Aş Şanamayn;9hvgoi55i;صنمين|الصنمين
Tall Rif‘at;9rbgr155i;تل رفعت
Batabo;9qdgq255i;بتبو|باتبو
Nubl;9r2gqr55i;نبل
Subaykhān;9mth0s55i;سبيخان|صبيخان
Jarābulus;9sagtl55i;جرابلس
Al Ḩirāk;9gzgov55i;الحراك
Al Kiswah;9iogoo55h;كسوة|الكسوة
Ḩalfāyā;9nygpp55h;حلفايا
Kafr Takhārīm;9qcgpg55h;كفر تخاريم
Ad Dānā;9qlgq555h;الدانا
Kafr Zaytā;9o9gpo55h;الزيتية|كفر زيتا|كفر زيتة
Kafr Lāhā;9mxgpe55h;الحولة‎‎|كفر لاها
Ad Darbāsīyah;9szh0x55h;درباسية|الدرباسية
Qārah;9kwgq255h;قارة
Zākīyah;9ilgog55h;زاكية
Qaţanā;9iwgo855h;قطنا
Maharda;9nxgpl55h;محردة|الكرمة
Al Quţayfah;9jqgpo55h;قطيفة|القطيفة
=SZ
Manzini;4wegb613k
Mbabane;4wwgah13k
Lobamba;4whgao13f
=TC
Providenciales;8mi8bb2ri
Cockburn Town;8lm8ee2re
=TD
N'Djamena;7vnf1s17p;Lamy|Yamena|Ngameno|Tzamena|Ingamina|Injamina|Ndjamena|Ndjemena|Ndzamena|Nigamina|Fort-Lamy|Ndzhamena|Indschamina|恩賈梅納|은자메나|ンジャメナ|نجمینا|njamێna|Нджамена
Moundou;7ltf4o17l
Abéché;80ffhv17l
Sarh;7nffb217l
Kelo;7nvf3x17k
Am Timan;7sofgc17j
Doba;7m2f6t17j
Pala;7o0f1f17j
Bongor;7qkf2p17j
Goz Beida;7vzfjh17j
Koumra;7msf8r17j
Mongo;7vvfbx17j
Bol;7zff0v17j
Mao;818f2j17j
Déressia;7p4f5717j
Iriba;840flt17j
Faya-Largeau;8btfd217j
Bitkine;7vafal17i
Bébédja;7m4f6117i
Massakory;7y4f3p17i
Umm Hājar;7yyfeq17i
Moussoro;7zwf5t17i
Biltine;82dfi517i
Léré;7osezi17i
Fianga;7pjf2217i
Goré;7m1f5w17i
Ati;7ypfay17i
Amdjarass;86nfng17i
Gounou Gaya;7orf3317i
Massaguet;7wof2w17i
Laï;7o4f5a17i
Bokoro;7wef7e17i
Guelendeng;7scf3717h
Kyabé;7o9fcm17h
Adré;7zfflo17h
Maro;7nmf9717h
Mandelia;7ulf2c17h
Dourbali;7utf4317h
Benoy;7myf5c17h
Moïssala;7l6f9d17h
Fada;89rfjy17h
Mboursou Léré;7p4ezb17h
Bousso;7r4f6f17h
Mangalmé;7wbfeh17h
Bédiondo;7lzf7r17h
Béré;7nwf4w17h
=TF
Port-aux-Français;34xjb2917
=TG
Lomé;7f1dze0wp;ロメ|洛美|로메|لوم|لومه|Ламэ|Ломе|लोमे|โลเม|Lameh|Lomee|Lomeo
Sokodé;7mydz50wk
Kara;7ojdzb0wk
Atakpamé;7ixdz50wk
Kpalimé;7h6dxr0wk
Bassar;7npdy60wj
Dapaong;7s6dwl0wj
Tsévié;7fvdzd0wj
Aného;7fbe0f0wj
Mango;7qsdxb0wi
Anié;7jjdzc0wi
Notsé;7hbdz90wi
Sinkassé;7sudw10wi
Tchamba;7n3dzy0wi
Sotouboua;7lsdyq0wi
Badou;7j2dxo0wi
Niamtougou;7p5dz30wh
Bafilo;7nzdzj0wh
Tabligbo;7gae060wh
Vogan;7fle090wh
=TH
Bangkok;807ln64yr;曼谷|방콕|バンコク|بنکاک|بانكوك|बँकॉक|बैंकक|Bancac|Bankok|Banghok|Bankoko|Banqkok|Man-kuk|Ban'nkok|Bancocum|Bancoque|Bangkoka|Bankokas|Krungdeb|Siayuthia|Krung Thep|Banguecoque|Phra Nakhon|Bangkok Metropolis|Банкок|Баҥкок|กรุงเทพ|กรุงเทพฯ|กรุงเทพมหานคร
Samut Prakan;7zslng4ym;สมุทรปราการ
Mueang Nonthaburi;80iln74ym;เทศบาลนครนนทบุรี
Chon Buri;7z4loi4yl;ชลบุรี
Phra Pradaeng;7zyln94yl;พระประแดง|อำเภอพระประแดง
Bang Khae;801lmx4yl;บางแค
Hat Yai;7hhln44yl;หาดใหญ่|เทศบาลนครหาดใหญ่
Pak Kret;80nln64yl;ปากเกร็ด
Sai Mai;80olnl4yl;สายไหม
Si Racha;7yllod4yl;ศรีราชา
Latkrabang;805lnv4yl
Watthana;805lnf4yl;วัฒนา
Khlong Sam Wa;80jlnu4yl
Bang Khun Thian;7zylmz4yl;บางขุนเทียน
Lat Krabang;804lny4yl;ลาดกระบัง
Chatuchak;80flnc4yl;จตุจักร
Ban Khlong Prawet;804lno4yl
Chom Thong;800ln44yl;จอมทอง
Nong Chok;80ilo64yl;หนองจอก
Lampang;8ctlkd4yl;ลำปาง|เทศบาลนครลำปาง
Nong Khaem;803lmr4yl;หนองแขม
Bang Kapi;809lnl4yl;บางกะปี
Bueng Kum;80blnn4yl;บึงกุ่ม|บ้านกุ่ม|บ้านบึงกุ่ม
Kabin Buri;80rlqk4yl;กบินทร์บุรี
Surat Thani;7neljx4yk;สุราษฎร์ธานี|เทศบาลนครสุราษฎร์ธานี
Udon Thani;8aeltj4yk;อุดรธานี|เทศบาลนครอุดรธานี
Din Daeng;80blnd4yk;ดินแดง
Chiang Mai;8e7liy4yk;เชียงใหม่|แม่ริม เชียงใหม่
Nakhon Ratchasima;83llrm4yk;นครราชสีมา|เทศบาลนครนครราชสีมา
Hua Hin;7wxllo4yk;อำเภอหัวหิน|หัวหิน-ปราณบุรี
Bang Sue;80dln94yk;บางซื่อ
Ban Samae Dam;7zrlmv4yk;บ้านแสมดำ
Ubon Ratchathani;84clz94yk;อุบลราชธานี|เทศบาลนครอุบลราชธานี
Lat Phrao;80clnh4yk;ลาดพร้าว
Phasi Charoen;803ln04yk;ภาษีเจริญ
Ban I Chang;803lli4yk;บ้านอีจาง
Thon Buri;804ln54yk;ธนบุรี
Khlong Luang;812lnl4yk;คลองหลวง
Nakhon Pathom;80ellw4yk;นครปฐม|เทศบาลนครนครปฐม
Bangkok Noi;808ln44yk;บางกอกน้อย
Thung Khru;7zvln74yk;ทุ่งครุ
Pattaya;7xxlo84yk;พัทยา
Suan Luang;805lnl4yk;สวนหลวง
Wang Thonglang;80blnh4yk;วังทองหลาง
Khon Kaen;87pltn4yk;ขอนแก่น|เมืองขอนแก่น|เทศบาลนครขอนแก่น
Lak Si;80llne4yk;หลักสี่
Khlong Toei;803lne4yk;คลองเตย
Dusit;80aln84yk;ดุสิต
Rayong;7x8lpa4yk;ระยอง|เทศบาลนครระยอง
Taling Chan;80aln24yk;ตลิ่งชัน
Bang Bon;7zylmw4yk;บางบอน
Nakhon Si Thammarat;7lfllp4yk;นครศรีธรรมราช|เทศบาลนครนครศรีธรรมราช
Si Maha Phot;80tlpz4yk;ศรีมหาโพธิ
Chanthaburi;7x1lrm4yk;จันทบุรี|เทศบาลเมืองจันทบุรี
Bang Rak;805ln84yk;บางรัก
Tha Raeng;80jlnl4yk
Bang Na;7zzlnk4yk;บางนา
Anusawari;80llnh4yk
Yala;7g6lpc4yk;ยะลา
Ratchaburi;7zmlla4yk;ราชบุรี
Bang Phlat;80bln64yk;บางพลัด
Phra Khanong;802lng4yk;พระไขนง
Saphan Sung;809lno4yk;สะพานสูง
Khan Na Yao;80flno4yk;คันนายาว
Ban Mai;7i0lnb4yk;บ้านใหม่
Rat Burana;800ln74yk;ราษฎร์บูรณะ
Sathon;803ln94yk;สาทร|เขตสาทร
Nakhon Sawan;85mlm64yk;นครสวรรค์|เทศบาลนครนครสวรรค์
Yan Nawa;802lna4yk;ยานนาวา
Sathorn;807ln84yk
Bang Sue subdistrict;80dln94yk
Phuket;7jxlhc4yk;ภูเก็ต|เทศบาลนครภูเก็ต
Chiang Rai;8hbllb4yk;เชียงราย|เทศบาลนครเชียงราย
Bang Kruai;80cln34yk;บางกรวย
Huai Khwang;80alne4yk;ห้วยขวาง
Khlong Chan;80alnl4yk
Thawi Watthana;80almu4yk;ทวีวัฒนา
Sakon Nakhon;89olxb4yk;สกลนคร
Khlong San;805ln74yj;คลองสาน
Ratchathewi;808ln94yj;ราชเทวี
Krathum Baen;7zxlmi4yj;กระทุ่มแบน
Bangkok Yai;804ln44yj;บางกอกใหญ่
Ban Ko Sire;7jxlhf4yj;บ้านเกาะสิเหร่
Phaya Thai;80alna4yj;พญาไท
Khlong Kum;80blno4yj
Huamak;808lnl4yj
Saraburi;82dloc4yj;จังหวัดสระบุรี
Trang;7j0lkp4yj;ตรัง
Sattahip;7x7loa4yj;สัตหีบ
Kanchanaburi;80wlkj4yj;กาญจนบุรี|เทศบาลเมืองกาญจนบุรี
Nong Khai;8bolte4yj;หนองคาย|เทศบาลเมืองหนองคาย
Samut Sakhon;7znlmj4yj;สมุทรสาคร
Phitsanulok;88qlmi4yj;พิษณุโลก|เมืองพิษณุโลก|เทศบาลนครพิษณุโลก
Songkhla;7i0lng4yj;สงขลา|เทศบาลนครสงขลา
Ban Tha Kham;7zwln04yj;บ้านท่าข้าม
Ban Lam Luk Ka;80ulny4yj
Bang Khae Nuea;803lmv4yj
Prachantakham;812lq04yj;ประจันตคาม
Kamphaeng Phet;87slkg4yj;กำแพงเพชร
Chaiyaphum;85xlrf4yj;ชัยภูมิ
Uttaradit;8azlm14yj;อุตรดิตถ์|เทศบาลเมืองอุตรดิตถ์
Lop Buri;834lnl4yj;ลพบุรี
Ban Pong;80ellg4yj;บ้านโป่ง
Na Di;818lqq4yj;นาดี
Phra Phutthabat;82xlo04yj;พระพุทธบาท
Chumphon;7r6lji4yj;ชุมพร|เทศบาลเมืองชุมพร
Klaeng;7xilqd4yj;แกลง|ต.แกลง
Kalasin;87nlvj4yj;กาฬสินธุ์
Suphan Buri;827lm44yj;สุพรรณบุรี
Pathum Wan;806ln84yj;ปทุมวัน
Wat Tha Phra;805ln44yj
Tha Maka;80mll54yj
Ban Talat Yai;7jwlhc4yj
Ban Lak Song;801lmw4yj;บ้านหลักสอง
Maha Sarakham;86yluy4yj;มหาสารคาม
Phra Nakhon;809ln64yj;พระนคร
Pom Prap Sattru Phai;808ln74yj;ป้อมปราบศัตรูพ่าย
Phra Nakhon Si Ayutthaya;81vlne4yj;พระนครศรีอยุธยา|เทศบาลนครพระนครศรีอยุธยา
Phetchabun;87mlp04yj;เพชรบูรณ์
Ko Samui;7oillm4yj;เกาะสมุย
Chachoengsao;801lor4yj;ฉะเชิงเทรา|เมืองฉะเชิงเทรา
Cha-am;7xkllp4yj;ชะอำ
Pak Chong;82vlpq4yj;ปากช่อง
Chong Nonsi;801lnb4yj;ช่องนนทรี
Bangkok Riverside;807ln84yj
Takua Pa;7mnlh64yj;ตะกั่วป่า
Narathiwat;7fvlqu4yj;นราธิวาส
Pran Buri;7welli4yj;ปราณบุรี
Surin;83clvh4yj;สุรินทร์
Phetchaburi;7yfllm4yj;เพชรบุรี|เมืองเพชรบุรี
Chum Phae;87ylrm4yj;ชุมแพ
Sadao;7gglmy4yj;สะเดา
Si Sa Ket;83zlxt4yj;ศรีสะเกษ
Mae Sot;88glht4yj;แม่สอด
Pattani;7h3lp94yj;ปัตตานี
Phatthalung;7j6lm04yj;พัทลุง
Lamphun;8dmlj14yj;ลำพูน
Warin Chamrap;847lza4yj;วาริน|วารินชำราบ
Wong Sawang;80eln84yj
Su-ngai Kolok;7erlr94yj;สุไหงโก-ลก
Tha Yang;7y0llj4yj
Ban Phaeo;7zrlm34yi;บ้านแพ้ว
Bang Bua Thong;80olmy4yi;บางบัวทอง|บ้านบางบัวทอง
Lat Yao;80hlnc4yi
Nong Khae;81ulo74yi;หนองแค
Mukdahan;87zlyw4yi;มุกดาหาร
Bang Phai;803lmv4yi
Ban Na;89all14yi;บ้านนา
Bang Lamung;7y9lod4yi;บางละมุง
Roi Et;86mlvx4yi;ร้อยเอ็ด
Wichian Buri;85ilov4yi;วิเชียรบุรี
Khao Saming;7wblsj4yi;เขาสมิง
Khwaeng Bang Khae;801lmw4yi;บ้านคลองบางโคลัด
Wichit;7jxlhb4yi
Phrae;8cflm64yi;แพร่
Ban Sang;80wlp64yi;บ้านสร้าง
Khetsamsenok;80blne4yi
Khlong Yai;7uqltt4yi;คลองใหญ่
Chan Kasem;80elne4yi
Mae Chan;8hzlld4yi;แม่จัน
Sam Phran;805lme4yi;สามพราน
Sukhothai;899lla4yi;สุโขทัย
Kantharalak;82olyp4yi;กันทรลักษณ์
Photharam;801lld4yi;โพธาราม
Ban Ang Sila;7z2lod4yi;บ้านอ่างศิลา
Bang Khlo;802ln74yi;บางโคล่
Phichit;87olmr4yi;พิจิตร
Det Udom;83flzw4yi;เดชอุดม
Ban Phai;86mltd4yi;บ้านไผ่
Tha Bo;8bllsy4yi;ท่าบ่อ
Loei;8allql4yi;เลย
Samut Songkhram;7z9lls4yi;สมุทรสงคราม
Kathu;7k0lh54yi;ตำบลกะทู้
Amnat Charoen;862lyn4yi;อำนาจเจริญ|เมืองอำนาจเจริญ
Nakhon Phanom;8adlz24yi;นครพนม
Satun;7gellz4yi;สตูล
Nong Bua Lamphu;89slsk4yi;หนองบัวลำภู
Ban Ratsada;7jzlhc4yi;บ้านรัษฎา
Prachuap Khiri Khan;7uull64yi;ประจวบคีรีขันธ์
Chomphon;80clnc4yi
San Kamphaeng;8e2ljc4yi;สันกำแพง
Prachin Buri;811lpl4yi;ปราจิณ|ปราจีนบุรี|มลฑลปราจิณ
Ban Khlong Bang Phran;7zylmv4yi;บ้านคลองบางพราน
Bang Khun Si;807ln34yi
Krabi;7kflir4yi;กระบี่|เมืองกระบี่|จังหวัดกระบี่
Ban Khlong Bang Sao Thong;7zwlo34yi;บ้านคลองบางเสาธง
Yaring;7h3lpl4yi;ยะหริ่ง
Na Klang;8a3lrv4yi;นากลาง
Ban Aranyik;88rlmk4yi;บ้านอรัญญิก
Sam Sen Nai;80alnb4yi
Kaeng Khoi;82jlok4yi;แก่งคอย
Betong;7e1lor4yi;เบตง|อำเภอเบตง
Bang Phae;801lll4yi;บางแพ
Ban Phan Don;89mlu14yi;บ้านพันดอน
Ban Chang Lo;807ln44yi
Kaeng Khro;86rls24yi;แก้งคร้อ
Amphoe Sikhiu;83elqj4yi
Sa Kaeo;80dlrj4yi;สระแก้ว
Bang Bo District;7zqlo24yi;บางบ่อ
Buri Ram;83nlue4yi;บุรีรัมย์|เทศบาลเมืองบุรีรัมย์
Thung Song;7kolkw4yi;ทุ่งสง
Ban Chang;7xcloq4yi;บ้านฉาง
Ban Bang Kadi;80wlnb4yi
Nong Phai;86floq4yi;หนองไผ่
Mae Sai;8irllg4yi;แม่สาย
Chorakhe Bua;80glnh4yi
Tha Muang;80slks4yi;ท่าม่วง
Ron Phibun;7kqlld4yi;ร่อนพิบูลย์
Ban Talat Bueng;7yblok4yi;บ้านตลาดบึง
Si Satchanalai;8aoll44yi;ศรีสัชนาลัย
Inner Huai Khwang;80alne4yi
Tha Kham;7nbljn4yi;ท่าข้าม|เทศบาลเมืองท่าข้าม
Bang Pakong;7zmloj4yi;บางปะกง
Chai Badan;848lox4yi
Prachin Buri Town;811lpl4yi
Pak Phanang;7l7lmc4yi;ปากพนัง
Bangbontai;7zxlmt4yi
Bang Yi Khan;808ln54yi
Kut Chap;8aflsx4yi;กุดจับ
Nan;8e6lny4yi;น่าน|เทศบาลเมืองน่าน
Ranong;7pplhz4yi;ระนอง
Pathum Thani;80xln94yi;ปทุมธานี|เทศบาลเมืองปทุมธานี
Bang O;80gln24yi
Samphanthawong;806ln74yi;สัมพันธวงศ์
Tak;88vljd4yi;ตาก|เทศบาลเมืองตาก
Ban Khlong Bang Bon;7zwlmu4yi;บ้านคลองบางบอน
Dok Kham Tai;8f8llr4yi;ดอกคำใต้
Ban Bueng;7yzlov4yh;บ้านบึง
Kamalasai;87elvq4yh;กมลาไสย|กระมาลาไสย
Ban Talat Nua;7jwlhb4yh
Chok Chai;82xlrt4yh;โชคชัย
Damnoen Saduak;7zklln4yh;ดำเนินสะดวก
Bang Kho Laem;801ln64yh;บางคอแหลม
Bang Kho Laem subdistrict;801ln64yh
Bang Bon Nuea;7zxlms4yh
Tha Mai;7x2lrc4yh;ท่าใหม่
Ban Kamala;7k4lh04yh;กะตะบีช|หาดกมลา|บ้านกมลา
Uthai Thani;84qllu4yh;อุทัยธานี
Nang Rong;82oltj4yh;นางรอง
Khwaeng Bang Plat;80bln54yh
Phanat Nikhom;7zdlp24yh;พนัสนิคม
Ban Na San;7mglk04yh;บ้านนาสาร
Taphan Hin;872lmy4yh;ตะพานหิน
Khanu Woralaksaburi;86mlle4yh;ขาณุวรลักษบุรี
Chatuchak subdistrict;80flnc4yh
Ban Nong Wua So;89zluq4yh
Yasothon;85vlxb4yh;ยโสธร
Trat;7w0lss4yh;ตราด
Nakhon Nayok;81glp54yh;นครนายก
Phayao;8fbllg4yh;พะเยา|จังหวัดพะเยา
Kuchinarai;87ylx14yh;กุฉินารายณ์
Bang Pa-in;81jlne4yh;บางปะอิน
Sena Nikhom;80glne4yh
Aranyaprathet;801lsq4yh;อรัญประเทศ|อำเภออรัญประทศ|อำเภออรัญประเทศ
Sing Buri;83dlmw4yh;สิงห์บุรี
Thambon Na Mueang;812lpl4yh;หน้าเมือง|ตำบลหน้าเมือง|หน้าเมืองปราจีน
Phibun Mangsahan;84cm0b4yh;พิบูล|พิบูลฯ|พิบูลมังสาหาร
Arun Amarin;809ln44yh
Sawankhalok;8a4llb4yh;สวรรคโลก
Ban Khlong Bang Ramat;809lmz4yh
Ranot;7jmlmo4yh;ระโนด
Sam Roi Yot;7w3llf4yh;สามร้อยยอด
Ban Dung;8b6luu4yh;บ้านดุง
Phak Hai;826lmt4yh;ผักไห่|บ้านผักไห่
Nam Som;8bdlrv4yh;น้ำโสม
Wiset Chaichan;82klmq4yh;วิเศษชัยชาญ
Tha Ruea;82hlnt4yh;ท่าเรือ
Kui Buri;7vklld4yh;กุยบุรี
Si Mahosot;80llpp4yh;ศรีมโหสถ
Bang Krathum;882lmm4yh;บางกระทุ่ม
Phan Thong;7zflot4yh;พานทอง
Khon Buri;82dls14yh;ครบุรี
Kaset Wisai;85ilvq4yh;เกษตรวิสัย
Ban Bang Bamru;80aln44yh;บ้านบางบำหรุ
Khao Yoi;7yslla4yh;เขาย้อย
Thoen;8axljm4yh;เถิน
Non Sung;846ls24yh;โนนสูง
Ban Tak;89clj84yh;บ้านตาก
Ban Chalong;7jslh64yh;ตำบลฉลอง|บ้านฉลอง
Hang Dong;8dxlis4yh;หางดง|แขวงแม่ท่าช้าง
Bang Len;80ylm94yh;บางเลน
San Pa Tong;8drliq4yh;สันป่าตอง
Chon Daen;86zlo64yh;ชนแดน
Lat Yao;85rll74yh;ลาดยาว
Ban Phe;7x3lps4yh
Ban Selaphum;86ilwr4yh
Mae Ramat;896lho4yh;แม่ระมาด
Lom Sak;88mlp84yh;หล่มสัก
Tak Bai;7felrh4yh;ตากใบ
Laem Ngop;7vtlsf4yh;แหลมงอบ
Phu Khiao;87ilrp4yh;ภูเขียว
Den Chai;8byllx4yh;เด่นชัย
Nong Kung Si;889luy4yh
Kaset Sombun;878lr74yh;เกษตรสมบูรณ์
Ra-ngae;7filql4yh;ระแงะ
Bang Rakam;88klm44yh;บางระกำ
Bua Yai;85blsj4yh;บัวใหญ่
Sawang Daen Din;8aklve4yh;สว่างแดนดิน
Bo Phloi;81tlkf4yh;บ่อพลอย
Thap Than;84yllh4yh;ทัพทัน
Bang Ban;81xln54yh;บางบาล
Huai Yot;7jnlkr4yh;ห้วยยอด|บ้านน้ำพราย
Seka;8btlws4yh;เซกา
Wang Nam Yen;7zilru4yh;วังน้ำเย็น
Lang Suan;7pnlj84yh;หลังสวน
Phu Kradueng;88wlr04yh;ภูกระดึง
Laem Sing;7wolrj4yh;แหลมสิงห์
Phanom Sarakham;807lpj4yh;พนมสารคาม
Ban Mo;82mlnt4yh;บ้านหมอ
Wang Noi;81jlns4yh;วังน้อย
Makkasan;807lna4yh;มักกะสัน
Warichaphum;8a1lvw4yh;วาริชภูมิ
Wang Saphung;8a2lqp4yh;วังสะพุง
Bang Mun Nak;86jlmu4yh;บางมูลนาก
Pa Sang;8dhliu4yh;ป่าซาง
Dan Khun Thot;849lqp4yh;ด่านขุนทด
Prakhon Chai;82llug4yh
Thap Khlo;86wlng4yh;ทับคล้อ
Chai Nat;847lm44yh;ชัยนาท
Ban Phra;815lpn4yh;บ้านพระ
Ban Huai Thalaeng;83mlt54yh
Bang Racham;83dlmo4yh;บางระจัน
Phon Charoen;8c3lul4yh
Khao Wong;88elx54yh;เขาวง
Chom Bueng;7zulkn4yh;จอมบึง
Erawan;8a2lr74yh;เอราวัณ
Bang Saphan;7t5lkf4yh
Nakhon Luang;826lnh4yh;นครหลวง
=TJ
Dushanbe;9x2j7259n;Душанбе
Isfara;a1hjc759m;Исфара|Ісфара
Istaravshan;a0vj7o59m;Истаравшан|Істаравшан
Kŭlob;9vbj9u59l;Куляб
Konibodom;a1xjbn59l;Кoнибодом|Конибодом|Канибадам
Khujand;a1wj9e59l;Худжанд|Хужант|Ходжент
Bokhtar;9v4j7259k;Бохтар|Курган Тюбе
Qayroqqum;a1vj9w59j
Vahdat;9x4j7p59j;Вахдат|Кофарнихона
Tursunzoda;9wzj5j59i;Турсунзода|Турсунзаде
Buston;a1rj9l59i;Бустон|Чкалов
Panjakent;9zqj3t59i;Пенджикент
Zarhalol;9u2j5d59i;Коммунизм
Khorugh;9u5jer59i;Хорог
Muchun;a0sj8659i;Мучун
Ishqoshim;9s0jex59i;Ишкашим
Hisor;9x1j6f59i;Ҳисор|Гиссар
Boshkengash;9wvj7559h
Dalyoni Bolo;a0fj7o59h;Далёни Боло
Shahriston;a0hj7559h
Danghara;9vuj8m59h;Дангара
Moskovskiy;9uhj6i59h;Московский
Farkhor;9u5j8s59h;Фархор
Hulbuk;9v1j9h59h;Ҳулбук|Восеъ
Chubek;9uhj9n59h;Чубек
Kolkhozobod;9ufj6q59h;Колхозобод
Norak;9wnj8k59h;Норак
Istiqlol;a2pj9g59h;Табошар
Yovon;9wfj7s59h;Ёвон
Proletar;a1lj9259h;Пролетар|Мехрабад
Vakhsh;9urj7759h;Вахш
=TL
Dili;6a8nkt57l
Maliana;691nju57h
Suai;685njy57h
Likisá;6a5nk657h
Aileu;69rnkt57h
Lospalos;6acnos57h
Atsabe;698nkc57h
Maubara;6a3njt57h
Baukau;6agnna57h
Venilale;6a0nn257h
=TM
Ashgabat;9vfie64to;阿什哈巴德|아슈하바트|아시가바트|アシガバート|Asgabat|Ashabad|Ashabat|Asjabad|Askabad|Askabat|Asqabad|Asxabad|Achgabat|Aschabad|Asgabata|Asgabate|Asgabato|Ashgabad|Ashkabad|Ashqabad|Ashxabad|Ashxobod|Askhabad|Achkhabad|Aschgabat|Ashkhabad|Asjchabad|Asjchabat|Asjkhabad|Asnkampat|Aszchabad|Aschabadas|Aschchabad|Poltoratsk|GIashkuabad|Ashkhabad osh|Ашгабад|Ашгабат|ئاشخاباد|اشک آباد|अश्गाबाद|अश्क़ाबाद|อาชกาบัต
Türkmenabat;9yjism4tl
Daşoguz;a68iil4tl
Mary;9ufinr4tl
Türkmenbaşy;a16hz44tk
Balkanabat;9zri314tk
Bayramaly;9uiiop4tj
Tejen;9tuik34tj
Gyzylarbat;9yai8c4tj
Magdanly;9v1izh4tj
Arkadag;9vridb4ti
Boldumsaz;a71ihr4ti
Abadan;9vpido4ti
Yolöten;9tmip84ti
Bäherden;9wsibj4ti
Köneürgenç;a7ligb4ti
Yylanly;a67ihp4ti
Gökdepe;9w0id04ti
Kaka;9trihl4ti
Kerki;9v4ix54ti
Sarahs;9rgim14ti
Gumdag;9yxi3n4ti
Änew;9v9iek4ti
Görogly;a5piig4ti
Bereket;9z0i684ti
Oýrat;a6jiif4th
Gazojak;a4fimk4th
Halaç;9vriw84th
Saýat;9xqitg4th
Seydi;9zoiqr4th
Gubadag;a6wiij4th
Türkmengala;9tyip64th
Çaşgyn;9v0imz4th
Magtymguly;9wsi8c4th
Jebel;a03i2n4th
=TN
Tunis;9saeo91en;تونس|توونس
Sfax;9miepw1em;صفاقس
Sousse;9pjepk1el;سوسة|سوسه
Sukrah;9sgeoh1el;سكرة
Kairouan;9p4eo21el;القيروان
Bizerte;9tjenf1el;بنزرت|بنزرت 
Sakiet ed Daier;9mneq11ek
El Mourouj;9rzeod1ek
Aryanah;9seeob1ek;أريانة|اريانة|أريانة‎
Gabès;9k4eo21ek;قابس|ڤابس|ولاية قابس
Sejoumi;9s4eo41ek
Hammamet;9r4epi1ek;الحمامات
Sakiet ez Zit;9moepw1ek
Gafsa;9lmeke1ek;قفصة|قفصه|ڤفصة
La Gazelle;9sheob1ek
Monastir;9peeq31ek;منستير|المنستير
La Marsa;9sgeoo1ek
Msaken;9p9epe1ek;مساكن
Houmt Souk;9k4eq61ek;حومة السوق|حومه السوق
Ben Arous;9s3eoe1ek;بن عروس
Le Kram;9sceoo1ek
Ben Gardane;9i2er61ek;بنڤردان
Kasserine;9npekk1ek;القصرين
Ettadhamen;9sbeo31ek
Douar Hicher;9sbeo11ek
Zarzis;9j2eqv1ek;جرجيس
Feriana;9n3ejt1ek;فريانة
Radès;9s5eoj1ej;رادس
Le Bardo;9s9eo51ej;باردو
Medenine;9inep71ej;مدنين
Nabeul;9raepu1ej;نابل
Tataouine;9hhep11ej;تطاوين
La Mohammedia;9rveo81ej
Oued Lill;9sbenw1ej
Korba;9rmeq61ej
Skanes;9pdepz1ej
El Mgarsa;9jyeqj1ej
Kelaa Kebira;9pnepa1ej
Kélibia;9sdeqt1ej;قليبية
Moknine;9ozeqa1ej
Béja;9s1eli1ej;باجة|باجه
Douane;9r9epw1ej
Menzel Bourguiba;9t7en71ej;منزل بورقيبة
Mnihla;9sdeo31ej
Ksar Hellal;9p1eq91ej
Djemmal;9oyepw1ej;جمال
El Kef;9qhek61ej;الكاف
Mahdia;9omeqq1ej;المهدية
Jendouba;9reeke1ej;جندوبة|جندوبه
Sidi Bouzid;9ncemc1ej;سيدي بوزيد
El Hamma;9k5en81ej;الحامة
La Goulette;9saeon1ej;حلق الوادي
Fouchana;9ryeo91ej
Soliman;9ryep51ej
Jedeïda;9sbenk1ej
Zouila;9omeqq1ej
Kalaa Srira;9piepc1ej
Hammam-Lif;9s1eoq1ej;حمام الأنف
El Ain;9moepy1ej
Hammam Sousse;9pmepg1ej
Dar Chabanne;9rbepv1ei
Teboulba;9p0eqh1ei;ريج|طبلبة
Gremda;9mneps1ei
Boumhel El Bassatine;9s1eof1ei
Metlaoui;9lcejc1ei;متلوي
Menzel Temime;9s6eqj1ei
Ksour Essaf;9oeeqj1ei;قصور الساف
Tozeur;9k8eil1ei;توزر
Ez Zahra;9s3eon1ei
Douz;9izel21ei
El Ksar;9lkekg1ei
La Sebala du Mornag;9rweol1ei
Sidi Abid;9meepq1ei
Mateur;9swemv1ei
Manouba;9s9eo21ei;منوبة|منوبه
Midoun;9jxeqj1ei
Borj Cedria;9ryeov1ei
Rass el Djebel;9teeo51ei
Siliana;9q8em11ei;سليانة
Dahmani;9puekj1ei;الدهماني
Tebourba;9sbenc1ei;طبربة
Rhennouch;9kaeny1ei;غنوش
Grombalia;9roep61ei
Akouda;9pnepd1ei
Ar Rudayyif;9lieio1ei;الرّدَيِّف
Den Den;9s9eo31ei
Kebili;9jmekx1ei;قبلي
Dar el Haj Taïeb;9mmepu1ei
Mégrine;9s5eog1ei
El Fahs;9r1enj1ei;الفحص
Ajim;9jpepw1ei;أجيم
Carthage;9seeop1ei
Takelsa;9s6epj1ei
Medjez el Bab;9rtemp1ei
Sbeitla;9nvelc1ei;سبيطلة
Ouerdanine;9p5epo1eh
La Mornaghia;9s4enu1eh
Nefta;9k3ehw1eh
Menzel Jemil;9tgenj1eh;منزل جميل
Chebba;9nweqw1eh
Beni Khiar;9rbepy1eh
El Jem;9o2eps1eh
Sahline;9pbepr1eh
Moularès;9lteiz1eh
Tinja;9t8en41eh
Tabursuq;9raelp1eh;تبرسق
Zaouiet Sousse;9pfepj1eh
Zaghouan;9r4eo61eh;زغوان
Métouia;9kcens1eh
Bekalta;9oyeqj1eh;البقالطة
Tabarka;9snekc1eh;طبرقة
Ghardimaou;9r9ejg1eh;غار الدماء
Tajerouine;9ppejr1eh
Menzel Abderhaman;9tgene1eh;منزل عبد الرحمان
Maatmeur;9pbepp1eh
Douar Tindja;9t9en31eh
Mennzel Bou Zelfa;9rwepe1eh
El Alia;9t9env1eh
Ouardenine;9p7epn1eh
Thala;9otek31eh
Galaat el Andeless;9syeo41eh
Mareth;9jeeol1eh;مارث
Ezzouhour;9pfepe1eh
Chenini Nahal;9k3eny1eh
Teboulbou;9k1eo31eh
Zeramedine;9ouept1eh;زرمدين
Bembla et Mnara;9p6eq01eh
Mahires;9lxep61eh;المحرس
Kellabine;9mfer51eh;الكلابين
Beni Khalled;9rtepf1eh
=TO
Nuku‘alofa;5ba0dc9uh
=TR
Istanbul;a3xg4f7tt;伊斯坦堡|伊斯坦布尔|비잔티움|이스탄불|Bizanc|Byzanz|Byzance|Istanbu|Stambol|Stambul|Stambuł|Carigrad|Estambul|Istambul|Istambuł|Stamboul|Stambula|Vyzantio|Byzantion|Byzantium|Istamboul|Istampoul|Isztambul|Tsarigrad|Byuzandion|Micklagard|Mikligardur|Mikligarður|Kustantiniyah|Constantinoble|Constantinopla|Constantinople|Costantinopoli|Konstantinopel|Konstantinopol|Kostandnupolis|Constantinopoli|Konstantinapoly|Konstantinopolo|Constantinopolen|Constantinopolis|Konstantinoupoli|Konstantinoupolis|Vizantija (Vizantija)|Stambұl|Стамбол|استنبول|اسطنبول|イスタンブール|ビュザンティオン|इस्तांबुल
Ankara;a0wgf97tq;安卡拉|앙카라|アンカラ|Ankar|Ancara|Ancyra|Angara|Angora|Ankaro|Ankura|Ankyra|Anqara|Enguri|Enqere|Anakara|Angkara|Ankuara|Ankiwria|Enkiwriw|Ang-ka-la|Anguriyah|Ankara khot|Ankyra (Ankyra)|آنقره|أنقرة|Анкара|Әнкара|अंकारा|อังการา
Bursa;a1og4q7tq;ブルサ|布尔萨|부르사|Burs|Brusa|Burso|Prusa|Boursa|Brossa|Brussa|Bursae|Prousa|Broussa|Brousse|برصہ|بورسا|Бурсæ|Бурса|बुरसा|บูร์ซา
İzmir;9wpfze7tq;イズミル|伊兹密尔|Azmir|Ismir|Izmira|Izmiro|Smirna|Smirne|Smyrna|Smyrne|Yazmir|Esmirna|Izmiras|Zmiwrnia|Ізмір|Измир|إزمير|ازمیر|इज़मिर
Gaziantep;9sygru7tp;Antep|Dilok|Aintab|Ayintap|Ayıntap|Qazianteb|Qaziantep|Gaziantepa|Gaziantepo|Gazijantep|Guaziantep|Nkaziantep|Gaziantepas|Gazijantehp|Gazi-Ayintap|عنتاب|غازي عنتاب|加濟安泰普|가지안테프|ガズィアンテプ|Газиантеп|Газіянтэп|गज़ियांटेप|กาซีอันเตป
Diyarbakır;9vbgzq7tp;Amed|Amida|Diarbekr|Diarbekir|Diyarbekr|Dijarbakir|Dijarbakyr|Dijarbekir|Diyarbakir|Diyarbekir|Diyarbekır|Dyjarbakyr|Diari-Bekir|Dijarbakira|Dijarbakiro|Dikranakerd|Diyaribakir|Diyaribekir|Diyarıbakır|Diyarıbekir|Tigranakert|Dijarbakyras|Ntigiarmpakir|ئامەد|دیاربکر|迪亚巴克尔|디야르바키르|ディヤルバクル|Диарбекир|Диярбакыр|दियारबकिर
Adana;9srgm57tp;アダナ|阿达纳|아다나|adnہ|أضنة|अदना|Adane|Adano|Atana|Edene|Seyhan|Adhanah|Antiocheia|Адана|อาดานา
Kayseri;9xlgml7tp;開塞利|カイセリ|카이세리|قيصري|قیصری|Cearee|Mazaca|Casarea|Cesarea|Cesaree|Kaiseri|Kajseri|Kajsery|Qayseri|Caesarea|Eusebeia|Kaisaria|Kaisarie|Kaiseris|Kaizarie|Kaisareia|Kaisarije|Khuajseri|Qaisariye|ไกเซรี|Кaйсери|Кайсери|कायसेरी
Konya;9v7ge87tp;コンヤ|科尼亞|코니아|Koni|Conia|Gonia|Konia|Konja|Qonia|Qonya|Qonye|Iconio|Ikonio|Kon'ja|Konieh|Konija|Konjao|Iconium|Ikoniow|Ko'niya|Kuniyah|Kuon'ja|Кония|Конья|قونية|قونيه|कोन्या
Antalya;9sjg9a7tp;安塔利亚|安塔利亞|안탈리아|Atali|Olbia|Adalia|Atalia|Andalia|Antalia|Antalja|Antaljo|Antayla|Attalea|Attalia|Satalia|Antal'ja|Antalija|Antaliya|Attaleia|Antaliyah|Nor Adalia|アンタルヤ|antalyہ|آنتالیا|Анталия|Анталья|अंताल्या
Esenyurt;a3zg3o7to
Eskişehir;a0ig8s7to
Çankaya;a0wgfa7to
Küçükçekmece;a3vg3x7to
Erzurum;a0vh2o7to
Malatya;9wjgug7to
Bağcılar;a40g467tn
Bahçelievler;a3wg467tn
Umraniye;a3yg4w7tn
Mersin;9s9gk87tn
Nilüfer;a1pg4c7tn
Van;9wxh8i7tn
Üsküdar;a3yg4l7tn
Esenler;a40g487tn
Sancaktepe;a3wg577tn
Karabağlar;9wmfzd7tn
Batman;9v9h297tn
Muratpaşa;9shg9g7tn
Şanlıurfa;9t9gvr7tn
Elazığ;9xfgwy7tn
Sultangazi;a47g477tn
Maltepe;a3qg507tn
Beylikdüzü;a3ug3k7tm
Antakya;9qlgog7tm
Samsun;a4ogoy7tm
Kahramanmaraş;9uegql7tm
Uşak;9xfg5p7tm
Alanya;9rigcw7tm
Ataşehir;a3ug4w7tm
Sultanbeyli;a3sg5b7tm
Fatih;a3yg4e7tm
Tarsus;9skgkx7tm
Karşıyaka;9wufzb7tm
Konak;9wofza7tm
Aksaray;9wlgij7tm
Şişli;a42g4j7tm
Denizli;9uxg4t7tm
Batikent;a11gex7tm
Adıyaman;9uwguc7tm
Adapazarı;a3ag8g7tm
Gebze;a3cg5r7tm
Zeytinburnu;a3vg4a7tm
Merkezefendi;9v1g4o7tm
Çorum;a2ngl37tm
Sivas;a0fgqu7tm
Afyonkarahisar;9xog8u7tm
İskenderun;9rngoh7tm
Trabzon;a3wgyd7tm
Manisa;9x9g077tm
Balıkesir;a05g1h7tm
Ordu;a3ugt97tl
Çiğli;9wyfz77tl
Osmaniye;9szgop7tl
Çorlu;a4cg187tl
Arnavutköy;a4eg3u7tl
İzmit;a38g757tl
Düzce;a3ggak7tl
Başakşehir;a47g3z7tl
Kırıkkale;a0pgh37tl
Kütahya;9zig7a7tl
Bolu;a36gbt7tl
Edirne;a5sfxs7tl
Karaman;9tagga7tl
Siverek;9uwgx87tl
Isparta;9uwg8v7tl
Gölbaşı;a0jgf57tl
Büyükçekmece;a3yg3f7tl
Aydın;9v5g1c7tl
Ereğli;9u7gil7tl
Viranşehir;9tegyg7tl
Erzincan;a0egxp7tl
Kırşehir;9yrgiw7tl
Kızıltepe;9tbh0q7tl
Çanakkale;a1kfxd7tl
Cizre;9tph567tl
İnegol;a1cg5z7tl
Silifke;9r2gi97tk
Mardin;9tnh167tk
Tokat;a1zgpj7tk
Bingöl;9y0h0h7tk
Giresun;a3ogun7tk
Kastamonu;a4yghu7tk
Derince;a38g6t7tk
Karabük;a4ggen7tk
Ağrı;a0bh7k7tk
Samandağ;9q8gny7tk
Tekirdağ;a3ug0f7tk
Rize;a3yh0k7tk
Nazilli;9vcg2o7tk
Salihli;9wwg277tk
Amasya;a2xgnj7tk
Silopi;9tgh5y7tk
Siirt;9vdh4i7tk
Kilis;9s0gr47tk
Turhal;a27go87tk
Arsuz;9r5gnp7tk
Bandırma;a23g1q7tk
Turgutlu;9wyg0y7tk
Zonguldak;a55gcb7tk
Iğdır;a0whac7tk
Mustafakemalpaşa;a18g2x7tk
Suruç;9sqgur7tk
Manavgat;9s7gbc7tk
Soma;9yvg0p7tk
Kâhta;9uzgva7tk
Ceyhan;9sugni7tk
Burdur;9usg857tk
Polatlı;9zygda7tk
Bafra;a5hgnq7tk
Muğla;9teg2t7tk
Erciş;9yfh8g7tk
Kars;a2sh7p7tk
Niğde;9vhgkc7tk
Lüleburgaz;a50g007tk
Körfez;a39g6q7tk
Çankırı;a2sghe7tk
Nusaybin;9szh2h7tk
Ereğli;a4ogba7tk
Kozan;9u2gni7tk
Yozgat;a0mgko7tk
Patnos;9yyh727tk
Akhisar;9y4g1c7tk
Akçapınar;9y7gw67tk
Çerkezköy;a4pg1s7tk
Muş;9xlh387tk
Nizip;9stgsz7tk
Fatsa;a3zgs67tk
Bartın;a5ogdu7tk
Elbistan;9w5grc7tk
Hakkâri;9udh9i7tk
Ünye;a4agrl7tk
Midyat;9tyh2u7tk
Nevşehir;9xagkf7tk
Bismil;9v5h0y7tj
Bilecik;a1ig7a7tj
Belek;9segab7tj
Tatvan;9wxh5g7tj
Yüksekova;9udhb17tj
Yalova;a2yg5c7tj
Gemlik;a2bg507tj
Kadirli;9ttgoa7tj
Doğubayazıt;9zvhag7tj
Ayvalık;9z8fy57tj
Söke;9uvg057tj
Ardeşen;a4fh1u7tj
Şırnak;9u7h5x7tj
Ödemiş;9w7g1p7tj
Silvan;9vyh1x7tj
Ahlat;9xnh607tj
Akşehir;9wkgba7tj
Kuşadası;9v6fzq7tj
Urla;9wgfyc7tj
Sorgun;a0lglr7tj
Çubuk;a1sgfr7tj
Biga;a1rfzo7tj
Kırıkhan;9regp07tj
Fethiye;9rsg4x7tj
Kırklareli;a5yfzn7tj
Bergama;9yofzi7tj
Anamur;9q8gf87tj
Reyhanlı;9qrgpl7tj
Dörtyol;9scgon7tj
Gölcük;a34g6u7tj
Bolvadin;9xjga97tj
Zile;a1ygnp7tj
Eminönü;a3yg4h7tj
Bozüyük;a0vg7g7tj
Menemen;9x9fz77tj
Silivri;a43g2h7tj
Bitlis;9woh4z7tj
Adilcevaz;9xsh6p7tj
Ergani;9wbgyf7tj
Erbaa;a2zgpl7tj
Tavşanlı;9zug5y7tj
Orhangazi;a2hg5f7tj
Seydişehir;9tygch7tj
Merzifon;a3jgmi7tj
Kavaklı;a45g2p7tj
Çarşamba;a4ggq07tj
Torbalı;9w2fzy7tj
Güngören Merter;a3xg497tj
Merter Keresteciler;a3xg497tj
Niksar;a2rgqn7tj
Keskin;a07ghd7tj
Karapınar;9usgh77tj
Mut;9rsggw7tj
Alaşehir;9wjg387tj
Bayburt;a1ugzq7tj
Suluova;a3fgn17tj
Şebin Karahisar;a1xguq7tj
Tire;9vtg127tj
Kulu;9ymgfw7tj
Erdemli;9rogjb7tj
Çumra;9udgf17tj
Kireçocağı;9sxglv7tj
Akçaabat;a3ygxx7tj
Aliağa;9xsfyx7tj
Keşan;a3ifxz7tj
Beyşehir;9uogc47tj
Birecik;9svgti7tj
Karacabey;a1pg2s7tj
Şereflikoçhisar;9y6gh67tj
Bulancak;a3qgu77tj
Milas;9tog167tj
Sandıklı;9wug837tj
Besni;9upgt67ti
Edremit;a00fz27ti
Gönen;a1eg0t7ti
Çatalca;a4ag327ti
Afşin;9w9gqj7ti
Cimin;a0bgya7ti
Karasu Mahallesi;a43g9j7ti
Bodrum;9swg077ti
Gümüşhane;a2egxn7ti
Yalvaç;9wegam7ti
Beypazarı;a1lgco7ti
Burhaniye;9zqfyx7ti
Vakfıkebir;a41gx47ti
Sungurlu;a1lgjh7ti
Beşikdüzü;a41gwz7ti
Serik;9skgae7ti
Talas;9xhgmr7ti
Uzunköprü;a4nfy57ti
Osmancık;a3ugko7ti
Kestel;a1og557ti
Görükle;a1rg447ti
Develi;9wngml7ti
Hınıs;9zch3t7ti
Dinar;9vqg7t7ti
Yerköy;a04gjr7ti
Hendek;a3cg9f7ti
Safranbolu;a4lget7ti
Tunceli;9ymgxu7ti
Akçakoca;a45gag7ti
Simav;9ylg4i7ti
Sinop;a6rglo7ti
Göksun;9vmgpe7ti
Çay;9x7ga77ti
Marmaris;9sdg2j7ti
Çeşme;9whfx37ti
Şarkîkaraağaç;9vsgb57ti
Bor;9v9gk07ti
Kumru;a3jgri7ti
Etlik;a12gf67ti
Akçakale;9rzgw77ti
Kurtalan;9vdh3s7ti
Yeşilli;9tqh1e7ti
Of;a3qgzu7ti
İmamoğlu;9tjgn27ti
Ceylanpınar;9sdgz97ti
Bulanık;9ylh5f7ti
Ortaköy;9xmgik7ti
Kula;9x3g3l7ti
Mimarsinan;a3xg3c7ti
Karasu;a46g9a7ti
Karamürsel;a31g6a7ti
İncirli;a12gf87ti
Kemalpaşa;9wrg067ti
Görele;a3zgwc7ti
Beykonak;9qxg867ti
Araklı;a3qgza7ti
Bostanlı;9wufza7ti
Karakoçan;9y7gz77ti
Kozluk;9w3h387ti
Gürpınar;a3vg3h7ti
Şemikler;9wvfza7ti
Bucak;9u2g907ti
Selçuk;9vfg017ti
Ataşehir;9wxfz67ti
Oba;9rjgd27ti
Yakuplu;a3vg3o7ti
Yenişehir;a1ug6d7ti
Kaman;9zcgho7ti
Foça;9xffyc7ti
Gerede;a3cgdg7ti
Bozyazı;9qbgfk7ti
Terme;a4hgqp7ti
Gölbaşı;9uygsk7ti
Boyabat;a57gkl7ti
Malkara;a3lfyq7ti
Ilgın;9wcgcn7ti
Hıdırbey;9qlgod7ti
Alaca;a1lgks7ti
Babaeski;a53fza7ti
Akyurt;a1igfx7ti
Kulp;9wyh1x7ti
Erzin;9sngok7ti
Çan;a17fz57ti
Altınşehir;9uugu77ti
Malazgirt;9yrh667ti
Didim;9tufzq7ti
Artvin;a4eh467ti
Güroymak;9x6h4q7ti
Suşehri;a1kgts7ti
Elmadağ;a0wggb7ti
Sapanca;a31g837ti
Gelibolu;a29fy37ti
Kağızman;a1kh7t7ti
Vezirköprü;a4agmh7ti
Akyazı;a30g927ti
Yahyalı;9vugm87ti
Susurluk;a0vg287ti
Devrek;a4igcs7ti
Çayeli;a45h147ti
Pasinler;a12h3r7ti
Gürsu;a1qg537ti
Mahmutlar;9rdgd57ti
Tosya;a3ygik7ti
Kazan;a1rges7ti
Kelkit;a1hgxj7ti
Pazarcık;9u5grm7ti
Emet;9zag5a7ti
Şarkışla;9zbgp57ti
Ferizli;a3qg8p7ti
Sarıkamış;a21h6b7th
Oltu;a2mh4n7th
Mudanya;a26g487th
Yakınca;9wfgu87th
Akdağmadeni;a06gno7th
Kovancılar;9xkgyq7th
İdil;9tph4d7th
Ardahan;a47h6m7th
Erdek;a28g177th
Zekeriya;a4gg4n7th
Genç;9xnh0n7th
İznik;a2bg6k7th
Gediz;9ybg5n7th
Menderes;9w9fzd7th
Kırkağaç;9yng0v7th
Küçükçiğli;9wzfz67th
Çaycuma;a53gd47th
Tepecik;a3zg3b7th
Bozova;9tsgv17th
Havza;a3tgn27th
Cikcilli;9rjgcz7th
Demirci;9yhg3m7th
Çine;9uhg1y7th
Hacılar;9xdgmh7th
Çermik;9vygxk7th
Alaplı;a4egb77th
Dargeçit;9ubh3w7th
Çubuklu;a46g4s7th
Evka-Üç;9wvfzp7th
Karaçoban;9zah4y7th
Korkuteli;9syg7w7th
Darende;9x3gs77th
Kaynaşlı;a39gb07th
Geyve;a2jg857th
Belen;9rdgoj7th
Hadim;9srge67th
Emirdağ;9yegaj7th
Sürmene;a3ngzh7th
İskilip;a36gjr7th
Hayrabolu;a4hfzb7th
Şile;a4eg697th
Yomra;a3rgyq7th
Ortaca;9scg3w7th
Seferihisar;9w4fyk7th
Dalaman;9s5g407th
Taşova;a38gow7th
Nallıhan;a1ngb37th
Balatçık;9x0fz57th
Yatağan;9tqg267th
Şemdinli;9tnhbt7th
Sarayköy;9vcg4d7th
Gürgentepe;a3bgsg7th
Varto;9yth357th
İncirliova;9v5g107th
Narlıca;9qogol7th
Gazipaşa;9qrgds7th
Diyadin;9zuh9b7th
Kızılcahamam;a2fgep7th
Konaklı;9rngcm7th
Tarabya;a49g4p7th
Çerkeş;a3dgfd7th
Dursunbey;9zzg3j7th
Hopa;a4zh327th
Denizciler;9rsgol7th
Taşköprü;a5bgj17th
Kemer;9rog8w7th
Tekkeköy;a4hgpa7th
Serinhisar;9ueg5b7th
Tirebolu;a3xgvt7th
Banaz;9xmg6n7th
Horasan;a18h547th
Hilvan;9ufgw87th
Ermenek;9rsgfd7th
Gemerek;9yugo77th
Eğirdir;9v7g9p7th
Bayındır;9w6g0t7th
Serinyol;9r0gol7th
Korgan;a3egrr7th
Ürgüp;9xbgkz7th
Elmalı;9s2g747th
Mucur;9yigji7th
Turgutreis;9sufzr7th
Lice;9wuh0w7th
Kandıra;a43g7r7th
Arhavi;a4vh2q7th
Arsin;a3rgyx7th
Sarigerme;9s0g3q7th
Baskil;9x5gvu7th
Senirkent;9vug8v7th
İstinye;a47g4p7th
Osmaneli;a24g7d7th
Ezine;a0jfx67th
Çat;a01h1t7th
Çağlayancerit;9uvgrl7th
Aşkale;a0wh127th
Kestel;9rfgd47th
Solhan;9y9h217th
Hizan;9w6h5u7th
Kadınhanı;9w8gdh7th
Bigadiç;9zfg257th
Yeşilova;9w0goq7th
Akhisar;a1gg5v7th
Taşucu;9qwgi47th
Kocaali;a41g9p7th
Espiye;a3rgvi7th
=TT
Chaguanas;7r895e3xj
Mon Repos;7qk95b3xj
San Fernando;7qk9593xj
Port of Spain;7rn9543xj
Rio Claro;7qn9623xi
Arima;7rk95s3xi
Marabella;7qn95b3xi
Diego Martin;7rs94z3xi
Laventille;7rl9563xh
Point Fortin;7q994o3xh
Tunapuna;7rl95h3xh
Scarborough;7t297a3xh
Sangre Grande;7rf9673xh
Paradise;7rl95k3xh
=TV
Funafuti;6acrpr9cf
=TW
Taipei;8vln9l6fs;台北|台北市|臺北市|ไทเป|타이베이|타이뻬이|Taipe|Taipeh|Tajbej|Tajpej|Tajpeo|Taypey|Taipeia|Tajbehj|Tayipeh|Đài Bắc|GJai Bac|Pan Kiao|T'ai-pei|Taibejus|Taipeium|Taipejus|Tchaj-pej|Pan-ch'iao|Taibei Shi|Kota Taipei|Taibei Shih|T'ai-pei Shih|T'ai-pei-hsien|Pan-ch'iao-chen|Pan-ch'iao-chieh|ताइपे|Тайбей|Тайбэй|تايبيه|تەيبېي
New Taipei City;8vmn9e6fq;新北|新北市|신베이시|Nea Taipei|Neu-Taipeh|New Taipei|Nova Taipe|Novi Taipei|Novi Tajpej|Nowe Tajpej|Xinbei City|Yeni Taipei|Nieuw Taipei|Novij Tajbej|Nueva Taipei|Nuova Taipei|Novyj Tajbehj|Nouveau Taipei|Nova Tchaj-pej|Нови Тајпеј|Новий Тайбей
Taichung;8t3n786fq;台中|台中市|臺中市|타이중 시|Тайжун|Тайчжун|Tajzhun|Taychun|Taizhong|Tajcungo|Taicungas|Tajchzhun|Đài Trung|GJai Trung|Tchaj-cung|Taizhong Shi|Kota Taichung|Thoi-chung-su|Tai-tiong-chhi|Teyjong shehiri|تاي شانغ
Kaohsiung;8oun676fq;高雄|高雄巿|高雄市|たかおし|Takao|Gaosjun|Kaosjun|Cao Hung|Gaoxiong|Kaoshang|Kao-hsiung|Gaoxiongshi|Gaosyongshih|Kaohsiung City|Kao-hsiung-shih|가오슝 시|Гаосюн|Каосюн|कावशिउंग|kawhsywnګ|kawہsywng
Tainan;8pvn5x6fp;台南|臺南|台南市|타이난 시|Tajnan|Taynam|Tajnano|Đài Nam|Dai-nang|GJai Nam|T'ai-nan|Tainanas|Tchaj-nan|Kota Tainan|Tainan City|Thoi-nam-su|Tai-lam-chhi|Teynen shehiri|Тајнан|Тайнань|تاينان|تاینان|ไถหนัน
Banqiao;8vhn9f6fn;板橋|枋橋|板橋區
Taoyuan;8vfn8y6fn;桃園區|桃園市
Hsinchu;8uwn816fn;新竹|新竹市
Keelung;8vtna66fm;基隆|基隆市
Fengshan;8ovn6c6fm;鳳山|鳳山区|鳳山區
Neihu;8von9r6fm;內湖|內湖區|内湖区
Chiayi City;8r8n6l6fm;嘉義市
Yongkang;8pyn626fl;永康|永康区|永康區
Chang-hua;8svn6w6fl;彰化
Changhua;8svn6v6fl;半线|彰化市
Zhubei;8v0n856fl;竹北|竹北市
Bade;8v9n8w6fl;八德|八徳区|八德區
Xizhi;8vnn9y6fl;汐止|汐止区|汐止區
Danshui;8vxn9c6fl;淡水
Shulin;8vfn9a6fl;樹林|樹林区|樹林區
Yuanlin;8skn6y6fk;員林
Sanxia;8v9n956fk;三峽|三峡区|三峽区
Neili;8vdn8u6fk;內壢
Douliu;8rvn6u6fk;斗六|斗六市
Toufen;8uln7v6fk;頭份|頭份市|頭份鎮
Nantou;8sgn766fk;南投|南投市
Taitung;8p8n8i6fk;台東|臺東
Hualien City;8smn9s6fk;花蓮市
Caotun;8smn796fk;草屯
Zhudong;8upn8d6fk;竹東
Daxi;8v4n8x6fk;大溪|大溪區
Yilan;8usna76fk;宜蘭|宜蘭市
Yingge;8vcn936fk;鶯歌|鶯歌区|鶯歌區
Puli;8sln816fk;埔里|埔里鎮
Miaoli;8u8n7m6fk;苗栗
Xinying;8qrn676fj;新營|新営区|新營區
Wufeng;8sun7a6fj;霧峰|霧峰区|霧峰區
Magong;8rhn476fj;馬公|马公
Xihu;8skn6o6fj;溪湖
Chaozhou;8onn6u6fj;潮洲
Donggang;8ofn6l6fj;東港
Zhushan;8s0n786fj;竹山
Erlin;8sen6d6fj;二林
Buzi;8t9n6x6fi;埔子
Taibao;8r6n696fi;太保|太保市
Jincheng;8tvn0o6fi;晋城|金城
Xiluo;8s4n6m6fi;西螺
Shetou;8sen6z6fi;社頭
Yongjing;8sgn6v6fi;永靖
Tianzhong;8san6z6fi;田中
Beigang;8rhn666fi;北港
Beidou;8sbn6s6fi;北斗
Jinhu;8twn0y6fi
Xingang;8rgn6b6fi;新港
Hengchun;8n4n7e6fi;恒春|恆春鎮|恒春鎮
Pitou;8sen6o6fi;埤頭
Xizhou;8tgn796fi;溪洲
Tianwei;8sdn6s6fi;田尾
Zhongxing New Village;8skn796fi;中興新村
Erlun;8s1n6h6fi;二崙
Citong;8s0n6q6fi;莿桐
Sanzhi;8w6n9i6fh;三芝|三芝区|三芝區
Budai;8qyn5s6fh;布袋
Lugu;8rzn7f6fh;鹿谷
Xiulin;8t0n9v6fh;秀林
Linnei;8s0n726fh;林內
Yujing;8q8n6m6fh;玉井
=TZ
Dar es Salaam;6f2gx30hr;三蘭港|达累斯萨拉姆|다르에스살람|Ntontoma|Darasalam|Daresalama|Daresalamo|Daressalam|Darüsselam|Daressalaam|Daruesselam|Dar as-Salom|Dar es-Salam|Dar-ehs-Salam|Dar-ehs-Salam shaary|ダルエスサラーム|دارالسلام|دار السلام|Дар ас-Салом|Дар-ес-Салам|ดาร์-เอส-ซาลาม
Mwanza;6r0gfe0ho;姆万扎|므완자|ムワンザ|Muansa|Muanza|Mvanza|Mwamza|Mwansa|Muvanzo|Мванза|Муанза|موانزا|म्वांजा
Dodoma;6gvgna0ho
Zanzibar;6gwgww0hn
Arusha;6ongpw0hn
Mbeya;69aggx0hn
Morogoro;6f2gsm0hn
Kahama;6ndgek0hn
Tanga;6jxgwm0hm
Geita;6q1gdj0hm
Tabora;6k2gf70hm
Sumbawanga;6bvgbu0hm
Songea;64cgn10hm
Kibaha;6f7gw40hm
Bariadi;6q8gie0hm
Kasulu;6lag7m0hm
Singida;6kmgki0hl
Kigoma;6kgg6b0hl
Moshi;6opgrp0hl
Tunduma;686gf10hl
Ifakara;6bfgpw0hl
Mpanda;6gegab0hl
Iringa;6cfgn60hl
Bunda;6segi30hl
Musoma;6tughw0hl
Bukoba;6ubgcd0hl
Mtwara;65hgzm0hl
Shinyanga;6nuggu0hl
Tarime;6u9gjh0hk
Nzega;6magg60hk
Makumbako;69fgkr0hk
Sengerema;6qlgep0hk
Handeni;6ixgtm0hk
Katumba;68dghe0hk
Mafinga;6aygm10hk
Lindi;668gyc0hk
Ushirombo;6obgcs0hk
Njombe;681gkl0hk
Kilosa;6f1gqq0hk
Masasi;648gvs0hk
Vwawa;68pgfh0hk
Bagamoyo;6g4gw20hk
Kondoa;6kegne0hk
Katoro;6pogcp0hk
Vikindu;6ejgx60hj
Babati;6magnb0hj
Korogwe;6jpguw0hj
Mbinga;63ngla0hj
Uyovu;6owgbl0hj
Buseresere;6pjgcl0hj
Chake Chake;6jfgyh0hj
Kibaigwa;6h4gpt0hj
Masumbwe;6nxgde0hj
Merelani;6o4gqq0hj
Tukuyu;68bghh0hj
Utengule;69aggl0hj
Mbuguni;6o3gqn0hj
Tunduru;639grr0hj
Kyela;67egi10hj
Mbulu;6nbgmp0hj
Diobahika;6oqgbk0hj
Igunga;6m4gi40hj
Ikwiriri;6bwgw90hj
Mwandege;6emgx50hj
Nansio;6s3gft0hj
Rujewa;69ugji0hi
Dumila;6gagrq0hi
Geiro;6gxgqf0hi
Mapinga;6fogwj0hi
Mlowo;690gfm0hi
Namanyere;6d4ga90hi
Nguruka;6jtga80hi
Newala Kisimani;63lgx40hi
Kidatu;6cmgqo0hi
Boma la Ngombe;6orgr70hi
Kidodi;6cwgqs0hi
Wete;6jygyd0hi
Misungwi;6q3gfw0hi
Magu;6qtggx0hi
Mlimba;69kgni0hi
Mafinga;6dvglf0hi
Newala;63ngx60hi
Chalinze;6fkguj0hi
Same;6mpgst0hi
Biharamulo;6qpgaz0hi
Lushoto;6kqguc0hi
Somanda;6ongib0hi
Kirando;6deg900hi
Tumbi;6jxgex0hi
Bugarama;6q1g8t0hi
Ngudu;6prggl0hi
Urambo;6jxgd10hi
Mvomero;6gngvf0hi
Chanika;6iygtm0hi
Nungwi;6i3gx60hi
Kibiti;6ckgw60hi
Chato;6qogc90hi
Kisesa;6qxgfr0hi
Mpwapwa;6gdgpc0hi
Kisesa;6pggiv0hi
Lukuledi;64ngvs0hi
Mlandizi;6fegvl0hi
Ilula;6cogo40hi
Mugumu;6svgke0hi
Kibondo;6o1g9c0hi
Mkuranga;6e8gwx0hi
Shanwa;6p7ght0hi
Bungu;6ctgwi0hi
Kasamwa;6q3ge30hi
Sikonge;6idgf10hi
Malinyi;697god0hi
Mtinko;6ldgkt0hi
Maramba;6jzgva0hi
Magugu;6mugnd0hi
Matundasi;6ajggg0hi
Sokoni;6g5gxv0hi
Sepuka;6ktgjx0hi
Luchingu;63qgx90hi
Igurusi;69fgi10hi
Liwale;66vgtd0hi
Manyoni;6i1gkr0hi
Mhalamba;6qugcx0hi
Sirari;6ujgjs0hi
Chimala;69egii0hi
Shelui;6lvgj00hi
Kakonko;6owga00hi
Uvinza;6jug8f0hi
Nyalikungu;6p6ghu0hi
Matai;6aygbk0hi
Itigi;6i6gjs0hi
Ruaha;6cqgqq0hi
Makongolosi;6aogg30hi
Old Shinyanga;6o5ggs0hi
Mkoani;6j3gy50hi
Mgandu;6hhgit0hi
Songwa;6o8gh40hh
Kiomboi;6m5gjh0hh
Kilindoni;6c1gy60hh
Mwadui;6o5ghc0hh
Nangomba;63qguy0hh
Urunda;69zgja0hh
Kingori;6owgqq0hh
Igugunu;6lbgk70hh
Chala;6cygav0hh
Lalago;6ofgib0hh
Kigonsera;640gld0hh
Tinde;6n8gg80hh
Rulenge;6qgg930hh
Maswa;6qkgie0hh
Mwanhuzi;6o7gjc0hh
Mhango;6owgf90hh
Kilwa Masoko;697gxr0hh
Katesh;6lggma0hh
Kiwira;68jgh60hh
Isaka;6n6gfh0hh
Hedaru;6ligta0hh
Nachingwea;657gvo0hh
Usa River;6ongqd0hh
Usangi;6nqgsn0hh
Basotu;6lvglg0hh
Mazinde;6kogu60hh
Muriti;6sigfg0hh
Matui;6kogu90hh
Nsunga;6uugb70hh
Kiratu;6orgn30hh
Makuyuni;6o5goa0hh
Matongo;6txgjw0hh
Mikumi;6dggqq0hh
Muheza;6jngvq0hh
Ruangwa;661gw50hh
Tandahimba;645gy30hh
Dareda;6magmr0hh
Nshamba;6t0gbn0hh
Ikungi;6jrgkl0hh
Nanyamba;64cgyn0hh
Kibakwe;6fcgp10hh
Maposeni;64mgmc0hh
Kabanga;6qog8n0hh
Laela;6a7gd10hh
Bashanet;6m9gme0hh
Magomeni;6f4gx10hh
Kihangara;6quggn0hh
Mtwango;68ygko0hh
Shirati;6uvgie0hh
Ilembula;69agk20hh
Dongobesh;6mpgma0hh
Matiri;645gky0hh
Magole;6gagrt0hh
Nangwa;6llgmh0hh
Galappo;6m5gnl0hh
Katerero;6u4gc50hh
Nyakabindi;6qpgie0hh
Izazi;6e0gn90hh
Lubata;6h2gs10hh
Madizini;6gygsk0hh
Tarakea;6pogsc0hh
Msowero;6fvgrc0hh
Ipinda;67ogi60hh
Mto wa Mbu;6opgnl0hh
Usevia;6eagar0hh
Nanganga;656gwr0hh
Ilongero;6l1gkv0hh
Kibara;6s1ggx0hh
Ngerengere;6f9gtw0hh
Puma;6k4gkh0hh
Malampaka;6pbgh50hh
Lugoba;6g3guh0hh
Ngara;6r1g960hh
Mwandiga;6klg6e0hh
Mungaa;6k7gkw0hh
Nyamuswa;6sqgii0hh
Butiama;6t3gid0hh
Kishapu;6nygi30hh
Nyangao;65bgx40hh
Tingi;62mglb0hh
Kitama;648gyd0hh
Lembeni;6nigsi0hh
Kamachumu;6tigbu0hh
Mlalo;6kbgw50hh
Makuyuni;6kvgtu0hh
Usagara;6qkgfo0hh
Mabama;6jrged0hh
Mlangali;66ugjw0hh
Mahanje;66fgm50hh
=UA
Kyiv;au5g8s7xq;基輔|کیف|كييف|कीव|क्यीव|キーウ|키예프|Keju|Kief|Kieu|Kiev|Kiew|Kiiv|Kijo|Kijv|Kjiv|Kyev|Kyiw|Chijv|Ki ep|Kiebo|Kievi|Kievu|Kiiev|Kijev|Kijew|Kijiv|Kijow|Kijuw|Kiova|Kiyev|Kiyiw|Kyiiv|Kyjev|Kyjiv|Kyjiw|Küyiv|Kievom|Kijeva|Kijivo|Kiovia|Kueyiv|Chiovia|Kijevas|Kiev osh|Kænugarður|Kaenugardur|Кейӳ|Киев|เคียฟ|Кыив|Кыйив
Kharkiv;asugop7xp;카리프|카르키프|ハリコフ|哈爾科夫|Harkiv|Harkov|Jarkov|Xarkov|Charkiv|Charkiw|Charkov|Charkow|Harkiva|Harkivo|Harkova|Kharkov|Carcovia|Khar'kov|Charcovia|Charkovas|Харков|Харків|خاركوف|Харьков
Odesa;aj5g9e7xo;敖德薩|오데사|Ades|Odess|Otesa|Adehsa|Odessa|Odesse|Udessa|Odessae|Odessos|Odessus|Odessza|Odissos|Khadjibey|Kocjubiiv|Khadzhibej|Odesa-mama|Odessa osh|Stolica Jumora|Juzhnaja stolica|Pivdenna Pal'mira|Pivdenna stolicja|オデッサ|Адэса|Одеса|اودسا|أوديسا|ओदेसा|Одесса
Dnipro;aonglc7xo;Днипро|Дніпро|Днїпро
Donetsk;anegt07xo;Донецк|Донецьк|Донецьке
Lviv;asgfqq7xn;Львив|Лвов|Львов
Zaporizhzhya;amxglk7xn;Запоріжжя|Запоріжя|Запорожье
Kryvyy Rih;an3ggr7xn;Крывы Рог|Кривый Ріг|Криви Рог
Sevastopol;adxgh48in;Севастопол|Севастополь|Севастопољ
Mykolayiv;akigcv7xn;Миколаїв|Николаев|Верноленинск
Vinnytsya;aqrg337xn;Винница|Вінниця
Saltivka;asygoz7xm;Салтівка
Luhansk;aoxgx77xm;Луханск|Луганск|Луһанск
Desna;aucg987xm;Деснянський Район
Dniprovskyi;au5g907xm;Дніпровський район
Pravyi Bereh;akvgsf7xm;Правий Берег
Darnytsya;au2g9a7xm;Дарниця|Дарницький район
Makiyivka;anhgtd7xm;Макеевка|Макіївка
Simferopol;aewgir8im;Симферопол|Симферополь|Симферопољ
Chernihiv;ax3gax7xm;Чернигов|Чернігів|Чернїгів
Poltava;arrgjz7xm;Полтава|Полтав|Полтавæ
Khmelnytskyi;arafyy7xm;Хмельницкий|Хмельницький|Плоскуров
Cherkasy;arcgd27xm;Черкасы|Черкассы|Черкаси
Chernivtsi;ao5fw17xm;Чернивци|Черновци|Черновцы
Zhytomyr;atmg3o7xm;Жытомир|Жытомір|Житомир
Sumy;avggko7xm;Сумы|Суми
Rivne;aumfww7xm;Рівне|Ровно|Роўна
Vyhurivshchyna-Troyeshchyna;aubg907xm;Вигуровщина-Троещина|Вигурівщина-Троєщина|Виґурівщина-Троєщина
Horlivka;ao6gtm7xm;Һорливка|Горловка|Горлівка
Obolon;aubg8r7xm;Оболонь|Оболонський район
Ivano-Frankivsk;apwfsn7xm;Ивано-Франковск|Івано-Франківськ|Франківськ
Mariupol;akugsa7xl;Мариупол|Мариуполь|Маріуполь
Kamyanske;aosgk57xl;Кам'янське|Каменское|Дніпродзержинськ
Ternopil;arnfv37xl;Тернополь|Тернопіль
Kremenchuk;aqaggs7xl;Кременчук|Крэмэнчук|Кременчуг
Shevchenkivskyi;au6g8n7xl;Шевченківський район
Kropyvnytskyi;aorgdn7xl;Кропивницкий|Кропивницький|Кирово
Lutsk;av0fuf7xl;Луцк|Луцьк
Bila Tserkva;ascg7o7xl;Била Церква|Біла Церква|Белая Царква
Rayon KTZ;asqgp17xl;Район ХТЗ
Verhunskyi;aozgxd7xl;Вергунський|Вергунський район|Жовтневий
Borshchahivka;au3g8f7xl;Борщаговка|Борщагівка
Desnyanskyi;ax3gb07xl;Деснянський|Деснянський район
Novozavodskyi;ax1gau7xl;Новозаводський|Новозаводський район
Tsentralnyi;akugsb7xl;Центральний|Центральний район|Жовтневий район
Rutchenkivskyi;anagsq7xl;Рутченківський|Рутченківський район|Рутченкове
Fortechnyi;aoqgdl7xl;Фортечний район|Фортеця
Nyzhnodniprovsk;aooglk7xl;Нижньодніпровськ|Нижнеднепровск|Нижньодніпровськ-Вузол
Avtozavodskyi;aqeggv7xl;Автозаводський|Автозаводський район
Sykhiv;asbfqu7xl;Сихов|Сихів
Zarichnyi;avegkp7xl;Зарічний|Зарічний район
Kerch;ag0gpc8il;Керч|Керчь
Melitopol;ak5gma7xl;Мелитополь|Мелитопіль|Мелітополь
Shevchenko;arogjy7xl;Шевченківський район
Bohuniya;atog3h7xl;Богунія|Богунський|Богунський район
Kramatorsk;apdgsd7xl;Краматорск|Краматорськ|Краматорьск
Kovpakivskyi;avhgkn7xl;Ковпаківський|Ковпаківський район
Kyivskyi;anhgsy7xl;Київський|Київський район
Mykilska Borshchahivka;au3g8d7xk;Микільська Борщагівка
Vilkhivskyi;aougx47xk;Вільхівський|Вільхівський район|Артемівський
Livoberezhnyi;akvgsk7xk;Лівобережний|Лівобережний район|Орджонікідзевський
Cheremushky;aizg9b7xk;Черемушки
Tsentralno-Miskyi;ao6gtn7xk;Центрально-Міський|Центрально-Міський район
Smolyanskyi;andgsu7xk;Смолянський|Смолянський район|Куйбишевський
Uzhhorod;ap2flx7xk;Ужгород|Ужгарад
Korolyov;atkg3q7xk;Корольовський район
Kyivskyi;artgjx7xk;Київський район
Brovary;aubg9j7xk;Бровары|Бровари|Броварі
Hirnytskyi;anegth7xk;Гірницький район|Гірницький
Yevpatoriya;afkggp8ik;Евпатория|Євпаторія
Berdyansk;ajwgq77xk;Бердянск|Бердянськ|Осипенко
Alchevsk;aongvs7xk;Алчевск|Алчевськ
Nikopol;am5gjj7xk;Никополь|Никопіль|Нікополь
Slovyansk;appgsg7xk;Словяньск|Слов'янськ|Слов’янськ
Pozniaky;au0g927xk;Позняки
Kalynivskyi;andgt57xk;Калинівський|Калинівський район|Калінінський
Chumakivskyi;an8gte7xk;Чумаківський|Чумаківський район|Чумакове
Skhidni Kvartaly;aoxgxe7xk;Східні квартали|Схід
Kindrativskyi;ao6gtp7xk;Кіндратівський|Кіндратівський район|Калінінський район
Kalmiuskyi;akvgsa7xk;Кальміуський|Кальміуський район|Іллічівський
Pavlohrad;aotgnn7xk;Павлоград|Паўлаград
Pechersk;au4g8s7xk;Печерськ|Печерський Район
Oleksiyivka;at1goj7xk;Олексіївка|Алексеевка
Oleksandrivskyi;an9gt07xk;Олександрівський|Олександрівка|Олександрівський район
Siverskodonetsk;apygux7xk;Сіверськодонецьк|Северодонецк|еверодоњецк
Kamyanets-Podilskyi;ap8fxv7xk;Кам’янець-Подільський|Каменец-Подолски|Каменец-Подольский
Tsentralno-Miskyi;anigth7xk;Центрально-Міський|Центрально-Міський район
Yuzivskyi;ancgt07xk;Юзівський|Юзівський район|Ворошиловський
Kharkivskyi Masyv;au1g967xk;Харківський масив
Lysychansk;apvguq7xk;Лисичанск|Лисичанськ
Bohodukhivskyi;an9gt67xk;Богодухівський|Богодухівський район|Будьоннівський
Shevchenkivskyi;aowgx97xk;Шевченківський|Шевченківський район|Ленінський
Lisovyi Masyv;au7g937xk;Лісовий масив
Podilskyi;aoqgdo7xk;Подільськ|Подільський район
Mukachevo;aokfn47xk;Мукачево|Мукачеве
Voznesenskyi;an5gsj7xk;Вознесенський|Вознесенський район|Петровський
Konotop;awbgg87xk;Конотоп|Канатоп|Канатып
Voskresenka;au8g907xk;Воскресенка
Uman;apfg7y7xk;Уман|Умань|Куман
Berestovskyi;anggt87xk;Берестовський|Берестовський район|Червоногвардійський
Bakhmut;aozgtk7xk;Бахмут|Артемовск|Артемівськ
Khrustalnyi;anqgw47xk;Хрустальний|Красный луч|Красний Луч
Yalta;admgix8ik;Ялта
Yenakiyeve;ao0gu47xk;Енакиево|Єнакієве
Oleksandriya;ap7gg07xk;Александрия|Олександрія
Kryukiv;aq7ggw7xk;Крюків|Крюкове|Крюківський Район
Tekstylnyk;an7gsq7xk;Текстильник
Drohobych;ar3fpb7xj;Дрогобыч|Дрогобич
Chokolivka;au2g8l7xj;Чоколівка
Kadiyivka;aoxgvc7xj;Кадиевка|Кадзееўка|Кадзіеўка
Shostka;ay2ggz7xj;Шостка
Berdychiv;aslg3e7xj;Бердичив|Бэрдычыў|Бердичев
Nyvky;au6g8h7xj;Нивки
Shakhtarsk;anigus7xj;Шахтарськ|Шахтерск|Шахтёрск
Prymorskyi;akrgs67xj;Приморський|Приморський район|Портовський
Samar;ap3gly7xj;Самар|Самарчик|Новоселиця
Mykytivskyi;ao7gtk7xj;Микитівський|Микитівський район|Микитівка
Izmayil;afzg447xj;Измаил|Ізмаїл|Сміл
Vidradnyi;au3g8i7xj;Відрадний
Darnytskyi Masyv;au4g937xj;Дарницький масив|Соцмісто
Feodosiya;af3gma8ij;Феодосия|Феодосія|Теодосія
Kovel;awafsm7xj;Ковель
Kostyantynivka;aotgsr7xj;Костянтинівка|Константиновка
Nizhyn;avtgcl7xj;Нежын|Нижин|Нежин
Smila;aqrgck7xj;Смила|Смела|Сміла
Kherson;ajkgel7xj;Херсон|Херсонскую
Irpin;aucg807xj;Ирпињ|Ирпень|Ірпінь
Kalush;aq6frp7xj;Калуш
Sheptytskyi;atzfrc7xj;Шептицкий|Шептицький|Червоноград
Boryspil;atvg9z7xj;Борисполь|Бориспіль
Dovzhansk;ankgy57xj;Довжанськ|Свердловск|Свердловськ
Pervomaysk;angg9p7xj;Первомайск|Первомајск|Первомайськ
Holosiyiv;atug8v7xj;Голосеев|Голосіїв|Голосеевский Район
Shulyavka;au5g8l7xj;Шулявка
Inhulets;amlggd7xj;Інгулець
Korosten;avjg3k7xj;Коростень|Іскоростень|Коростењ
Stryi;aqufq97xj;Стрый|Стрий|Стриј
Kolomyia;aosftk7xj;Коломыя|Коломия|Коломија
Pokrovsk;ao4gra7xj;Покровск|Покровськ|Красноармейск
Chornomors’k;aimg967xj;Чорноморск|Чорноморськ|Черноморск
Vynohradar;aubg8i7xj;Виноградар
Khartsyzk;anggty7xj;Харцызск|Харцизьк
Zvyahel;aujg0p7xj;Звягель|Звјагел|Новоград-Волынский
Snizhne;anegvo7xj;Сніжне|Снежное
Rubizhne;aq5gum7xj;Рубижне|Рубіжне|Рубежное
Lozova;aptgov7xj;Лозова|Лозовая
Druzhkivka;ap2gs97xj;Дружковка|Дружківка
Chystyakove;anggv87xj;Чысьцякова|Чистяково|Часткове
Sotsmisto;apegsf7xj;Соцмісто
Khanzhonkivskyi;anmgto7xj;Ханжонківський|Ханжонківський район|Совєтський район
Svyatoshyn;au6g8b7xj;Святошин|Святошинський район
Enerhodar;alxgka7xj;Енергодар|Энергодар|Энэргадар
Pryluky;aukgdy7xj;Прилуки
Hruzkyi;anjgte7xj;Грузький|Грузький район|Кіровський
Antratsyt;anogwl7xj;Антрацит
Pivdenna Borshchahivka;au1g8g7xj;Південна Борщагівка|Південноборщагівський масив
Bosse;an8gt07xj;Боссе
Horishni Plavni;aq5ghf7xj;Горишни Плавни|Горишние Плавни|Горішні Плавні
Novovolynsk;auxfr47xj;Нововолынск|Нововолинськ
Sorokyne;ao5gyd7xj;Сорокине|Сорокино|Сарокіна
Nova Zabudova;au3g8s7xj;Нова Забудова
Bilhorod-Dnistrovskyi;aibg8b7xj;Билгород-Дњистровски|Белгород Днестровски|Белгород-Днестровскай
Okhtyrka;atrgkx7xj;Ахтырка|Охтирка
Myrnohrad;ao7grj7xj;Мирноград|Мірнаград|Димитров
Berezniaky;au3g907xj;Березняки|Зательбин Березняк
Izyum;aqpgrk7xj;Изюм|Ізюм|Изјум
Nova Darnytsya;au2g967xj;Нова Дарниця
Syrets;au8g8k7xj;Сирець
Rovenky;ankgxe7xj;Ровеньки
Pivnichna Saltivka;at1gp07xj
Marhanets;ambgk67xj;Марганец|Марганець
Bryanka;aorgvf7xj;Брянка
Lubny;asxgfo7xj;Лубны|Лубни
Nova Kakhovka;ajwggo7xj;Нова Каховка|Новая Каховка
Fastiv;at4g747xj;Фастив|Фастов|Фастів
Molodizhne;aqjggv7xj;Молодіжне|Молодіжний
Svitlovodsk;aqaggd7xj;Свитловодск|Светловодск|Світловодськ
Vyshneve;atzg8d7xj;Вишневе|Вишневое|Вишнёвое
Kamyanobridskyi;aozgx47xj;Кам'янобрідський|Кам'янобрідський район|Кам'яний Брід
Bucha;aufg7x7xj;Буча
Zhovti Vody;aobgh27xi;Жовти Води|Жовті Води|Жолтие води
Varash;awmfvu7xi;Вараш|Кузнецовск|Кузнецовськ
Stare Misto;au5g8t7xi;Старе місто|Старий Київ
Dzhankoy;agzgjj8ii;Джанкой|Џанкој
Hladkivka;anggt17xi;Гладківка
Shepetivka;atefz77xi;Шепетовка|Шепетівка
Sonyachnyi;apcgsg7xi;Даманський
Bilychi;au7g8b7xi;Біличі
Khanzhonkove;anlgts7xi;Ханжонкове
Novyi Lviv;asefqr7xi;Новий Львів
Telychka;au0g8x7xi;Теличка
Myrhorod;assghd7xi;Миргород
Pivnichni Osokorky;atzg917xi;Північні Осокорки
Podilsk;amng617xi;Подиљск|Подольск|Подільськ
Pivdennoukrainsk;amvgam7xi;Пивденоукрајинск|Південноукраїнськ|Южноукраинск
Romny;auygh27xi;Ромны|Ромни
Volodymyr-Volynskyi;av9frk7xi;Володимир-Волинський|Владимир-Волынский|Володимир
Pivnichno-Brovarskyi Masyv;au6g927xi;Північно-Броварський масив|Комсомольський масив
Yasynuvata;anpgt67xi;Ясинувата|Јасинувата|Ясиноватая
Pokrov;amdgir7xi;Покров|Орджонікідзе
Dubno;au1fvk7xi;Дубно
Vasylkiv;ateg877xi;Васиљкив|Васильков|Васильків
Chuhuyiv;asggpx7xi;Чугуев|Чугуіў|Чугуїв
Priorka;aubg8m7xi;Пріорка
Netishyn;attfy17xi;Нетишин|Нетешин|Нетішин
Sokolohirsk;ap3gv07xi;Сокологірськ|Первомайск|Первомайськ
Kakhovka;ak2gh07xi;Каховка
Avdiyivka;anqgsv7xi;Авдијивка|Авдеевка|Авдіївка
Karavayevi Dachi;au3g8k7xi;Караваєві Дачі
Vyshhorodskyi Masyv;aubg8l7xi;Вишгородський масив
Slavuta;atqfyn7xi;Славута
Arshyntseve;afugp78ii;Аршинцеве|Аршинцево|Камыш-Бурун
Teremky;atxg8m7xi;Теремки
Zhmerynka;aq8g237xi;Жмеринка
Boyarka;atsg867xi;Боярка
Starokostyantyniv;as8fzl7xi;Старокостянтинів|Староконстантинов|Костянтинів
Sambir;arkfog7xi;Самбир|Самбар|Самбор
Oleksandrivska Slobidka;au2g8o7xi;Олександрівська слобідка|Александровская слободка
Voznesensk;am4gb27xi;Вознесенск|Вознесенськ
Vyshhorod;auig8p7xi;Вышгород|Вышгородского|Вишгород
Minskyi Masyv;aucg8m7xi;Менскі масыў|Мінський масив|Мінскі масіў
Pivdenne;ajigae7xi;Пивдене|Південне|Южне
Solomyanka;au3g8l7xi;Солом'янка|Солом'янський район
Boryslav;aqxfp37xi;Борислав
Podil;arsgk37xi;Поділ
Hlukhiv;axkgi87xi;Глухив|Глухов|Глухів
Obukhiv;at8g937xi;Обухив|Обухов|Обухів
Lukyanivka;au7g8o7xi;Лук'янівка
Novoyavorivs'k;aspfph7xi;Новояворовск|Новояворівськ
Toretsk;aofgt57xi;Торецк|Торецьк|Дзержинск
Kostopil;avcfxh7xi;Костопиљ|Костополь|Костопіль
Yany Kapu;ahoghv8ii;Янъы Къапы|Яни Капу|Бромзавод
Mohyliv-Podilskyy;aokg187xi;Могиљив-Подиљски|Могилёв-Подольский|Могилів-Подільський
Synelnykove;ao8gmp7xi;Синельникове|Синельниково
Masany;ax5gar7xi;Масани
Alushta;ae4gjl8ii;Алушта
Tokmak;alagn77xi;Токмак|Великий Токмак
Demiyivka;au0g8s7xi;Демиевка|Деміївка|Сталінка
Sarny;awmfxx7xi;Сарны|Сарни
Zlatopil;ar6gom7xi;Златопиљ|Златополь|Златопіль
Novobilychi;au8g8b7xi;Новобіличі
Khust;antfoq7xi;Хуст
Chortkiv;aq6fvo7xi;Чорткив|Чортков|Чортків
Saki;afdghc8ii;Саки
Novyi Rozdil;arffr17xi;Новий Розділ|Новый Раздол
Truskavets;aqwfpa7xi;Трускавец|Трускавець
Dobropillia;aongr17xi;Добропілля|Доброполье
Terny;anrgh87xi;Терны|Терни
Zolotonosha;arzgd07xi;Золотоноша|Золотоношæ
Khmilnyk;arog1o7xi;Хмельник|Хмільник
Shakhtarske;aobgp47xi;Шахтарске|Шахтарскэ|Шахтарське
Bakhchysaray;aecgi28ii;Бахчисарай
Rusanivka;au4g907xi;Русанівка|Русанівський масив
Khrestivka;anrguk7xi;Хрестівка|Кировское|Кіровське
Kupyansk;as3gsi7xi;Купянск|Купьянск|Купянськ
Ternivka;aotgo77xi;Терновка|Тернівка
Holubivka;ap4gvc7xi;Голубівка|Кировск|Кіровськ
Rayduzhnyi Masyv;au9g8z7xi;Райдужний масив
Balakliya;aregqc7xi;Балаклея|Балаклія|Балаклија
Pereiaslav;at3gbd7xi;Переяслав|Переяславль
Livoberezhnyi Masyv;au6g8z7xi;Лівобережний масив
Podil;au7g8s7xi;Подол|Поділ|Подільський район
Stara Darnytsya;au3g937xi;Стара Дарниця
Sofiivska Borschahivka;au1g8c7xi;Софиевская Борщаговка|Софіївська Борщагівка|Сафіеўская Баршчагоўка
Tatarka;au7g8p7xi;Татарка
Haysyn;aplg5m7xi;Гайсин
Dolynska;anogf27xi;Долинська|Долинская
Vynohradiv;anqfo07xi;Виноградив|Вынаградзіў|Виноградов
Malyn;av1g587xi;Малин
Mostytskyi Masyv;auag8k7xi;Мостицький масив
Perevalsk;aokgvv7xi;Перевальск|Перевальськ
Oleshky;ajjgew7xi;Олешки|Алешки|Алёшки
Zdolbuniv;aucfwx7xi;Здолбунов|Здолбунів|Здалбуніў
Slavutych;ax4g9c7xi;Славутич|Славуціч
Armyansk;ai3ghl8ii;Армянск|Армянськ
Debaltseve;aoaguo7xi;Дебальцеве|Дебальцево
Korostyshiv;atsg4q7xi;Коростышев|Коростишів|Карастышаў
Krolevets;ax7ggq7xi;Кролевец|Кролевець
Lebedyn;auigjs7xi;Лебедин
Teremky-II;atyg8l7xi;Теремки-2|Теремки-ІІ
Kurenivka;au9g8n7xh;Куренівка
Pisochyn;asrgoa7xh;Песочин|Пісочин
Kaniv;as7gbf7xh;Канив|Канев|Канеў
Hadyach;atxgig7xh;Гадяч
Berehove;anxfmw7xh;Берегове|Берегово|Бэрэгавэ
Kozyatyn;as4g447xh;Козятин|Казатин
Brody;at5ftv7xh;Броды|Броди
Dokuchayevsk;amngso7xh;Докучаевск|Докучаєвськ|Оленівські кар'єри
Zolochiv;asdft67xh;Золочив|Золочев|Золочів
Nadvirna;ap4fs97xh;Надвирна|Надвірна|Надворная
Ladyzhyn;ap8g587xh;Ладыжин|Ладижин
Otamanivka;aobgy57xh;Отаманівка|Молодогвардейск|Молодогвардійськ
Znamyanka;apcgeq7xh;Знам’янка|Знаменка
Ihren;aooglo7xh;Ігрень|Нова Ігрень
Vilnohirsk;aoogii7xh;Вольногорск|Вільногірськ
Selydove;anrgrm7xh;Селидове|Селидово
Berestyn;ar6gmg7xh;Бэрэстын|Берестин|Костянтиноград
Bilohorodka;atzg7z7xh;Белогородка|Білогородка|Білгород-Київський
Merefa;asego67xh;Мерефа
Volnovakha;am8gs57xh;Волноваха
Kremenets;at6fvh7xh;Кременец|Кременець
Polonne;at8g0f7xh;Полонне|Полонное
Dolyna;aq1fql7xh;Далына|Долина
Sukhodilsk;aobgyd7xh;Суходольск|Суходільськ
Sokal;au7frg7xh;Сокаль
Saperna Slobidka;au0g8t7xh;Саперна Слобідка
Stebnyk;aqyfpf7xh;Стебник
Lyman;aq3gt17xh;Лыман|Лиман|Красний Лиман
Liubotyn;asrgnt7xh;Люботин
Zhuravlivka;asxgor7xh;Журавлівка|Дальня Журавлівка
Kivsharivka;arvgso7xh;Ковшаровка|Ківшарівка|Кіўшарыўка
Trostyanets;au8gl57xh;Тростянец|Тростянець
Kiliya;ag8g5a7xh;Килия|Кілія
Henichesk;ai9gkp7xh;Геническ|Генічеськ|Еніче
Popasna;ap3gul7xh;Попасна|Попасная|Попасный
Pidhorodnye;aoxgli7xh;Підгородне|Підгороднє|Подгородное
Vynnyky;asefr27xh;Винники|Вінники
Yahotyn;atogc87xh;Яготин
Krasyliv;arxfyx7xh;Красилов|Красилів
Balaklava;adnghc8ih;Балаклава
Reni;ag9g2k7xh;Рени|Рені|Рэні
Balta;an6g6a7xh;Балта|Палієве|Палієве Озеро
Kalynivka;areg387xh;Калинивка|Калиновка|Калинівка
Volochysk;armfwt7xh;Волочиск|Волочиськ|Валачыск
Hostomel;auhg837xh;Гостомель
Kurakhove;anagrk7xh;Курахове|Курахово
Vitryani Hory;aubg8k7xh;Вітряні Гори
Pyatykhatky;aohghn7xh;Пятихатки|Пјатихатки
Kreminna;aq9gu67xh;Кремина|Кремінна|Кременная
Polohy;alwgop7xh;Пологи
Lypky;au4g8t7xh;Липки
Klov;au3g8u7xh;Клов
Amvrosiivka;amrguw7xh;Амвросиевка|Амвросіївка
Skadovsk;ai3gff7xh;Скадовск|Скадовськ|Скадівське
Pelahiivka;anngv97xh;Пелагеевка|Пелагіївка
Zuhres;andgub7xh;Zuһres|Зугрес|Зугрэс
Rozdilna;ak5g7j7xh;Роздилна|Роздільна|Раздельная
Bohodukhiv;atcgmo7xh;Богодухов|Богодухів|Багадухіў
Korsun-Shevchenkivskyi;aragat7xh;Корсунь-Шевченковский|Корсунь-Шевченківський|Корсунь
Dniprorudne;alngl87xh;Дніпрорудне|Днепрорудное|Дніпроград
Berezhany;ardfta7xh;Бережаны|Бережани
Kotsyubynske;au9g897xh;Коцюбынськэ|Кацюбынскэ|Коцюбинське
Darnytsya Car Repair Plant Microdistrict;au5g987xh;Дврз
Vovchansk;atpgqm7xh;Вовчанськ|Волчанск
Skvyra;as5g6e7xh;Сквира
Rakivka;aq6ggy7xh;Раківка
Derhachi;at7goc7xh;Дергачи|Дергачі
Svalyava;aovfnv7xh;Свалява
Lutuhyne;aoggwx7xh;Лутугине|Лутугино
Nyzhnya Telychka;atzg8x7xh;Нижня Теличка
Rakove;ar8fz67xh;Ракове
Katerynivka;aowgwu7xh;Катеринівка|Ювілейне
Mostyska;asbfob7xh;Мостиска|Мостиська
Bakhmach;aw6gf77xh;Бахмач
Shpola;aq5gb77xh;Шпола
Sudak;aelgl58ih;Судак
Knyahynyn;apyfsn7xh;Княгинин
Zvenyhorodka;aqcga07xh;Звенигородка
Novoukrayinka;ao8gbk7xh;Новоукраинка|Новоукраїнка
Bilohirsk;af6gk48ih;Белогорск|Білогірськ|Белагорск
Berezan;atrgbf7xh;Березань
Svyatopetrivske;atyg887xh;Святопетрівське|Петрівське|Петровское
Iziaslav;at8fyi7xh;Изяслав|Заслав|Заславль
Svatove;ar9gu07xh;Сватове|Сватово
Kybalchych;au9g907xh;Кибальчич
Horodok;aqlfxs7xh;Городок
Trudivskyi;an7gsc7xh;Трудівські|Трудівський
Horodok;asafpp7xh;Городок
Starobilsk;aqwgw37xh;Старобельск|Старобільськ
Apostolove;amegho7xh;Апостолове|Апостолово
Slobozhanske;arrgpg7xh;Слобожанське|Слобожанское|Комсомольське
Bohuslav;arng9r7xh;Богуслав
Bahacheve;aq5ga97xh;Багачеве|Багачэвэ|Багачево
Dunayivtsi;aptfyl7xh;Дунаевцы|Дунаївці
Rakhiv;anhfr87xh;Рахов|Рахів
Bilopillia;aw3gjb7xh;Білопілля|Белополье
Bortnychi;atyg9a7xh;Бортничи|Бортничі
Verkhnodniprovsk;ap6gjd7xh;Верхньодніпровськ|Верхнеднепровск
Ilovays’k;an4gu47xh;Иловайск|Іловайськ
Bar;aqbg0v7xh;Бар
Ovruch;awlg407xh;Овруч|Овруче|Овручов
Radomyshl;auag577xh;Радомышль|Радомишль
Voznesenivka;ankgyk7xh;Вознесенівка|Червонопартизанск|Червонопартизанськ
Novhorod-Siverskyi;ayhgge7xh;Новгород-Сиверскый|Новгород Северски|Новгород-Северский
Bolhrad;agwg3i7xh;Болград|Балград
Vilnyansk;an7gmg7xh;Вольнянск|Вільнянськ|Красноармійське
Tulchyn;ap7g477xh;Тульчин|Нестервар
=UG
Kampala;6ywgei0qp;坎帕拉|캄팔라|カンパラ|Kampal|Campala|Kampalo|Kanpala|IKampala|Kambaala|Kaempaala|كمبالا|کمپالا|कंपाला|कम्पाला|Кампала|กัมปาลา
Nansana;6z0ged0qn
Kira;6z4gen0qn
Bunamwaya;6ypgeg0qm
Kyengera;6yugea0qm
Mbarara;6wcg950ql
Kasangati;6z8gek0ql
Mukono;6yzgf00ql
Njeru;6z8gg60ql
Gulu;75pgdq0ql
Katabi;6y8ge70ql
Kajansi;6ymged0ql
Lugazi;6z1gfi0qk
Hoima;71zgb30qk
Mubende;6zkgb70qk
Lira;749gfe0qk
Ibanda;6xng8q0qk
Masaka;6x3gc50qk
Kasese;6yig7k0qk
Mbale;710giy0qk
Masindi;72ngc40qk
Mityana;6z6gcy0qk
Entebbe;6y6ge80qk
Jinja;6z8gg80qk
Wakiso;6z4ge60qk
Rutoma;6wfg8e0qk
Bwizibwera;6wdg930qk
Kotido;76agit0qk
Arua;76eg9v0qj
Nakivale Refugee Camp;6vyga40qj
Kamuli;70ngg00qj
Apac;73igee0qj
Iganga;6zpggz0qj
Busia;6zbgip0qj
Koboko;77hga00qj
Soroti;72rghd0qj
Fort Portal;6zug830qj
Mpondwe;6y4g6k0qj
Kitgum;774gfd0qj
Kabale;6ujg7b0qj
Kapchorwa;71wgjp0qj
Rwamwanja Refugee Camp;6yzg950qj
Mpigi;6ymgdr0qj
Luwero;70dge70qj
Tororo;6zxgiy0qj
Yumbe;77ngat0qj
Bugembe;6zcggc0qj
Ishaka;6wig7q0qj
Kumi;722gia0qj
Kasanje;6yfge00qj
Pallisa;716ghn0qj
Nebbi;74wgad0qi
Paidha;74qga30qi
Rukungiri;6vog760qi
Adjumani;77egcb0qi
Buyale;73dgd80qi
Bugiri;6zlghq0qi
Kakira;6zfggh0qi
Isingiro;6vlg9n0qi
Nakaloke;717giv0qi
Busesa;6zrghc0qi
Wobulenzi;701geb0qi
Nyachera;6vig8i0qi
Kayunga;6zygfd0qi
Buyende;717gg40qi
Bombo;6zlgec0qi
Kyegegwa;6zega80qi
Budaka;70sgi90qi
Kasaali;6wagbn0qi
Pakwach;74ugbi0qi
Kyenjojo;6zrg920qi
Kakiri;6z6gdz0qi
Kagadi;70mg9l0qi
Muhorro;70kg9f0qi
Kyaka II Refugee Camp;6z1gaf0qi
Bukuya;6zwgce0qi
Lukaya;6xpgch0qi
Kasozi;6y2g8q0qi
Abim;75ighk0qi
Buwenge;6ztgg50qi
Anaka;758gcr0qi
Butaleja;70jgib0qi
Kamwenge;6yjg8l0qi
Kyangwali Refugee Camp;71bg9i0qi
Dokolo;73agg60qh
Opit;759ge80qh
Rubanda;6upg6x0qh
Namutumba;70cghl0qh
Namasuba;6zxge20qh
Kiboga;70kgc90qh
Bundibugyo;6zzg7i0qh
Namayumba;6zhgdl0qh
Kigumba;731gcx0qh
Kihihi;6vxg6i0qh
Kiziba;6zfgdv0qh
Ntungamo;6vkg820qh
Malaba;6zsgj60qh
Mayuge;6zagh00qh
Kaliro;70hgh20qh
Lwakyomba;714gb80qh
Mabare;6vbg8l0qh
Iryango;6vbg900qh
Nyahuka;6zwg7b0qh
Buhimba;71rgaz0qh
Magamaga;6zgggn0qh
Kinoni;6w2g8p0qh
Sironko;71fgj50qh
Budadiri;717gjd0qh
Butemba;718gbt0qh
Moyo;786gc40qh
Rwiimi;6z2g7z0qh
Buikwe;6yygfp0qh
Kisinga;6y8g6z0qh
Katoke;704g980qh
Kikube;71sgaq0qh
Kireka;6yzgep0qh
Kisoro;6ufg6g0qh
Ngora;71zghu0qh
Butunduzi;6zjg9p0qh
Namavundu;6z0ghy0qh
Kasanda;6zkgcc0qh
Ntungamo;6vkg6d0qh
Busolwe;70dgi90qh
Nyamunuka;6vpg7l0qh
Gombe;6ykgd50qh
Kanungu;6vcg6r0qh
Kiryandongo Refugee Camp;73egdd0qh
Bukomero;6zygcz0qh
Kyarusozi;706g8t0qh
Lyantonde;6wwgak0qh
Moroto;751gkb0qh
Buhesi;6zmg7x0qh
Kyazanga;6wygb30qh
Manafwa;70ngj70qh
Kakumiro;706gb00qh
Kazo;6xtg9j0qh
Busembatia;706ghe0qh
Kyamahungu;6wrg7n0qh
Kasambya;6z7gar0qh
Kalisizo;6wigbu0qh
Lwengo;6wugb90qh
=US
New York City;a3386f3ps;紐約|紐約市|뉴욕|뉴욕 시|Aebura|Kanono|Njujork|Nujorka|Ga-no-no|New Yorc|New York|Nju Jork|Novjorko|Big Apple|N'ju-Jork|Nea Yorke|Neu Jorck|New Yorke|New Yorku|Niujorkas|Nov-Jorko|Nova York|Nowy Jork|New Orange|Nueva York|Nuova York|York Berri|Nova Iorque|Nua-Eabhrac|Nyja Jorvik|Efrog Newydd|Evrek Nowydh|Neu Amsterdam|New Amsterdam|New York-borg|Nouvieau York|Nova Amsterda|Eabhraig Nuadh|Nouvelle Yorck|Novum Eboracum|Cathair Nua-Eabhrac|Њујорк|Њу Јорк|ニューヨーク|マンハッタン|نيويورك|نیویورک|न्यूयॉर्क|นครนิวยอร์ก
Los Angeles;9kl4rk38q;洛杉矶|洛杉磯|엘에이|로스앤젤레스|ロサンゼルス|لس آنجلس|لس‌آنجلس|लस एन्जलस|लास एंजलस|Os Anxeles|Angelopolis|Los Anjeles|Los Anzeles|Los-Anceles|Lok-chham-ki|Los And'eles|Los Andzelas|Los Andzeles|Los Antzeles|Los Anxheles|Los Anxhelos|Los Anzheles|Los-Angeleso|Losandzelosa|Luos Andzels|Los Andzheles|Los Andzhelis|Los-Andzhehles|Los-Anzheles shaary|Лос Анжелес|Лос Анђелес|ลอสแอนเจลิส
Brooklyn;a2x86l3pq;브루클린|Bklyn|Bruklin|Broklino|Bruklina|Breukelen|Brucclinu|Bruklinas|Breuckelen|Kings County|Marechkawick|Comitatus Bruclinum|布鲁克林区|ブルックリン区|Бруклин|Бруклін|بروكلين|بروکلین|บรุกลิน|ब्रुकलीन|ब्रूकलिन
Chicago;a6974j2bq;シカゴ|芝加哥|시카고|شکاگو|شيكاجو|Cekaga|Cikaga|Cikago|Cikaqo|Kikako|Sikago|Chicagu|Chikago|Chykaga|Shikago|Sicagum|Tsikago|Chi-ka-ko|E-Chicago|Windy City|Чикаго|Чикаґо|शिकागो|ชิคาโก
Queens;a3086w3pp;Kvino|Queens County
Houston;98o6j42bp;休斯敦|休斯頓|休斯顿|휴스턴|Хюстан|Хюстън|هيوستن|ہywsٹn|ヒューストン|Hjuston|Hustono|Hyuston|Khjustn|Hjustona|Hustonia|Khjustan|Khjuston|Chiouston|Hiustonas|Kh'juston|Hiu-su-tun|Houston City|ฮิวสตัน|ह्युस्टन
Phoenix;9ix58p3vp;凤凰城|鳳凰城|피닉스|فينکس|فینکس|Feniks|Finiks|Foinix|Peniki|Phenix|Fenikso|Finiksa|Hoozdoh|Finiksas|Finiksos|Phoeniks|Mill City|Salt River|East Phoenix|Hellings Mill|Pumpkinsville|Smith Station|Smiths Station|Феникс|Финикс|フェニックス|फिनिक्स|फीनिक्स|ฟีนิกซ์
Philadelphia;a0z8383pp;費城|费城|Phila|Philly|Fi-sang|Filadelfi|Filadel'fi|Filadelfia|Filadelfie|Filadelfii|Filadelfio|Coaquannock|Filadel'fij|Filadelfiae|Filadelfija|Filadelfijo|Filadelfiya|Filadelfiye|Quequenakee|Filadel'fija|Philadelphie|Filadehl'fija|Philadelpheia|Ga-na-ta-jen-go-na|필라델피아|フィラデルフィア|flaڈylfya|فلاڈیلفیا|Филаделфиа|Филаделфия|ฟิลาเดลเฟีย|फिलाडेल्फिया
San Antonio;97q6af2bp;圣安东尼奥|聖安東尼奧|샌안토니오|サンアントニオ|Sanantonio|San-Antonia|San Antoniyo|San Antonijus|Sanctus Antonius|Сан Антонио|Сан-Антоніа|سان آنتونیو|سان أنطونيو|सॅन अँटोनियो|सैन एन्टोनियो|แซนแอนโทนีโอ
Manhattan;a3a86j3pp;曼哈顿|맨해튼|Manatte|Manatans|Manathas|Manathes|Manathans|Manhatano|Menathans|Mankhetten|Mannahattan|Manhattanville|مانهاتن|Манхеттен|แมนฮัตตัน
San Diego;9gw4uk38p;聖地牙哥|샌디에고|샌디에이고|サンディエゴ|سن دیگو|سان ڈیگو|Graytown|Sandjego|San Diegu|San-Dieqo|San-Dyega|San Diegas|San Dijego|San Diyego|San Miguel|Didacopolis|San Ntienko|Davis' Folly|Сан Диего|Сан-Дыега|सैन डिएगो|सॅन डियेगो|แซนดีเอโก
The Bronx;a3h86t3pp;Bronx|Bronks|Bronkso|Бронкс
Dallas;9h26f32bo;ダラス|達拉斯|달라스|댈러스|डॅलस|Dalas|Dalasa|Dalaso|Ntalas|Dalasas|Dallasium|Dallas shaary|Далас|Даллас|دالاس|داڵاس|แดลลัส
Jacksonville;9a97l63po;잭슨빌|杰克逊维尔|Cowford|Cow Ford|Cow Creek|Ceksonvill|Dzeksonvil|Dzhaksnvil|Gaksonvilo|Tzaksonvil|Dzeksonvila|Iacsonvilla|Dzeksonvilis|Dzhehksanvil|Dzheksonvill|Zhehksonvill|Dzhehksonvill|Iacsoniapolis|Wakka Pilatka|ジャクソンビル|Џексонвил|Джаксънвил|جاكسونفيل|جکسون‌ویل|जैक्सनविल|ज्याकसनभिल|แจ็กสันวิลล์
Fort Worth;9gx6do2bo;沃思堡|포트워스|フォートワース|Ft Worth|Fort Uert|Fort Uurt|Fort Vort|Fortverta|Fortvorto|Camp Worth|Fort Uehrt|Fort-Owert|Fortvortas|Fort Gouorth|Arx Vorthensis|Форт Ворт|Форт Уърт|فورت وورث|فورٹ ورتھ|फोर्ट वर्थ|ฟอร์ตเวิร์ท
San Jose;9tq4hf38o
Austin;9a36ci2bo
Columbus;a107hg3po
Charlotte;9nv7ng3po
Indianapolis;a0h78o30o
San Francisco;9ux4fy38o
Seattle;am94g738o
Denver;a0e5se2jn
Washington;9y27y03pn
Nashville;9qh76y2bn
Oklahoma City;9oj6d42bn
El Paso;9e85o72jn
Boston;a7o8em3pn
Portland;agg4f838n
Detroit;a7l7hb2kn
Las Vegas;9qh50638n
New South Memphis;9nh6xu2bn
Memphis;9nn6xv2bn
Louisville;9w979s34n
Baltimore;9z57z73pn
South Boston;a7l8en3pn
Albuquerque;9ng5nr2jn
Milwaukee;a9k73t2bn
Tucson;9fi5bv3vn
Fresno;9s34nb38n
Sacramento;9x64ij38n
Atlanta;9jr7dl3pn
Miami;8xl7p93pn
Omaha;a4m6hi2bn
Raleigh;9pd7tk3pn
Kansas City;9ym6la2bn
Long Beach;9jt4rp38n
Mesa;9iu59e3vn
Staten Island;a2o8623pn
Colorado Springs;9xv5su2jn
Virginia Beach;9sd80y3pn
Oakland;9v04gd38m
Tampa;93n7iy3pm
Tulsa;9qf6hd2bm
Minneapolis;aey6oy2bm
Wichita;9up6dm2bm
Arlington;9gy6e92bm
Bakersfield;9o94pe38m
Cleveland;a5a7l23pm
New Orleans;9976xs2bm
Aurora;a0d5st2jm
Honolulu;8l71pi9fm
Anaheim;9k04sh38m
West Raleigh;9pf7ti3pm
Orlando;95a7ly3pm
Lexington;9vj7dc3pm
Riverside;9kb4tw38m
Corpus Christi;9386dg2bm
Lexington-Fayette;9vp7de3pm
Cincinnati;9yp7d93pm
Santa Ana;9jr4sl38m
Stockton;9vg4j338m
Pittsburgh;a2c7ps3pm
Saint Paul;aeu6pf2bm
Lincoln;a3c6fh2bm
Anchorage;bo22bm1gm
Meads;9wp7i93pm
Henderson;9q450m38m
Greensboro;9q77qd3pm
Plano;9hq6fe2bm
Newark;a3685z3pm
Madison;a9n6zo2bm
St. Louis;9xb6xg2bm
Chula Vista;9go4us38m
Toledo;a5q7fw3pm
Jersey City;a358683pm
Reno;9zt4n738m
Chandler;9ij59c3vm
Fort Wayne;a497bj30m
Buffalo;a957sw3pm
Durham;9pz7su3pm
St. Petersburg;9357ic3pm
Irvine;9jj4sq38m
Laredo;92f67l2bm
Lubbock;9ja6122bm
Gilbert;9in59h3vm
Tri-Cities;aih4ow38m
Winston-Salem;9qa7p43pm
Glendale;9j658d3vm
Norfolk;9sd8033pm
Hialeah;8xu7p03pl
Garland;9hf6fk2bl
Scottsdale;9j35963vl
Irving;9h56ep2bl
Boise;ab54x825l
Chesapeake;9sa8053pl
North Las Vegas;9qk50838l
Fremont;9ub4h538l
Spokane;ame4tt38l
Baton Rouge;9ak6up2bl
Upper West Side;a3b86i3pl
Richmond;9ub7wu3pl
Paradise;9qa50538l
Tacoma;al94fw38l
Jamaica;a3186z3pl
San Bernardino;9kr4u738l
Salt Lake City;a385972jl
Huntsville;9mh77h2bl
Des Moines;a5k6nz2bl
Fontana;9kp4ts38l
Modesto;9uk4jw38l
Rochester;a9v7we3pl
Maryvale;9j258e3vl
Arlington;9y07xu3pl
Oxnard;9l04oy38l
Columbus;9g67bx3pl
Worcester;a7e8ck3pl
Moreno Valley;9ka4ud38l
Little Rock;9mj6rn2bl
Fayetteville;9nd7sw3pl
Huntington Beach;9ji4s838l
Tallahassee;9ak7dw3pl
Yonkers;a3p86q3pl
Glendale;9ku4ri38l
Cypress;9996i62bl
Aurora;a6072o2bl
Amarillo;9nu6152bl
Akron;a447lk3pl
Vancouver;ags4fa38l
Birmingham;9j476w2bl
Montgomery;9fx78a2bl
Grand Rapids;a9c7a12kl
Peoria;9ja5883vl
Providence;a668dn3pl
Knoxville;9pw7ew3pl
Sunrise Manor;9ql50d38l
Grand Prairie;9gz6ek2bl
Shreveport;9gd6nl2bl
Brownsville;8xy6d62bl
Overland Park;9ya6l12bl
Newport News;9sq7zp3pl
Mobile;9b973g2bl
Fort Lauderdale;8yk7pe3pl
Santa Clarita;9lj4qq38l
Chattanooga;9nd7b13pl
East Flatbush;a2x86n3pl
Spring Valley;9qb4zw38l
Santa Rosa;9ws4f538l
Eugene;acd4e338l
Tempe;9it5953vl
Oceanside;9i84ty38l
Salem;aeu4e838l
Garden Grove;9jt4se38l
Rancho Cucamonga;9kr4td38l
Cape Coral;8zs7kd3pl
East New York;a2z86s3pl
Sioux Falls;aay6fb2bl
Ontario;9km4t738l
Fort Collins;a2r5s42jl
Springfield;9te6ou2bl
Hollywood;9kq4rb38l
Elk Grove;9wp4iv38l
Clarksville;9rh75c2bl
Pembroke Pines;8y87p63pl
Deer Valley;9jk58j3vl
Murfreesboro;9pl7812bl
Port Saint Lucie;91t7ot3pl
Corona;9k44tf38l
McKinney;9i86fm2bl
Lancaster;9me4ru38l
Cary;9pf7t63pl
Alexandria;9xs7xz3pl
Tempe Junction;9it5923vl
Palmdale;9m24rw38l
Hayward;9un4gw38l
Salinas;9rw4i238l
Sunnyvale;9tt4h038l
Frisco;9i36f22bl
Springfield;a6y8ad3pl
East Chattanooga;9nf7b73pl
Pasadena;98h6jj2bl
Jackson;9fq6xi2bl
Pomona;9km4sx38l
Kansas City;9yn6l52bl
Washington Heights;a3h86m3pl
Lakewood;a0a5s42jl
Escondido;9i04ur38l
Astoria;a3986n3pl
Hollywood;8y97pd3pl
Borough Park;a2v86g3pl
Valencia;9lo4qj38l
Rockford;a7f70j2bl
East Hampton;9sw7zz3pl
Joliet;a5d73c2bl
Savannah;9f47mq3pl
Paterson;a3o85z3pl
Bridgeport;a4e88p3pl
Naperville;a637352bl
Gainesville;98d7jc3pl
Mesquite;9h16fo2bl
Syracuse;a9l80h3pl
Torrance;9k04ra38l
Surprise;9jf57z3vl
Metairie Terrace;99a6xk2bl
Columbia;9kg7mx3pl
Pasadena;9kv4ru38l
Orange;9jv4sn38l
Fullerton;9k34sf38l
Killeen;9cg6cj2bl
McAllen;8ys6b52bl
Bellevue;am94gk38l
Metairie;99a6xl2bl
Hampton;9sv7zx3pl
Miramar;8y77p53pl
Van Nuys;9kz4qz38l
West Valley City;a3158w2jl
Dayton;a0g7e53pl
Olathe;9y06km2bl
Warren;a817hf2kl
Thornton;a0r5sf2jl
Carrollton;9hj6ev2bk
Charleston;9h27pz3pk
Midland;9ew60g2bk
Waco;9dn6e52bk
Sterling Heights;a8a7hd2kk
Denton;9i96e72bk
Cedar Rapids;a6p6tg2bk
New Haven;a4r89f3pk
Roseville;9xn4j338k
Visalia;9qx4on38k
Coral Springs;8yz7p13pk
Thousand Oaks;9kx4pw38k
Columbia;9y76rj2bk
Elizabeth;a2y85v3pk
Stamford;a4187q3pk
Concord;9vi4h138k
Norman;9nu6dc2bk
Alhambra;9j258j3vk
Athens;9kc7ge3pk
Kent;alm4gh38k
Simi Valley;9l74q238k
East Los Angeles;9ki4rr38k
Santa Clara;9tr4h838k
Sunset Park;a2x86f3pk
Topeka;9yh6i82bk
Abilene;9g566z2bk
Koreatown;9km4re38k
Sheepshead Bay;a2r86m3pk
Amherst;a9e7t43pk
Victorville;9ly4u738k
Vallejo;9vu4ge38k
Lafayette;99y6se2bk
Chico;a0d4hk38k
North Stamford;a4a87q3pk
Hartford;a608a33pk
Berkeley;9v74gd38k
West Palm Beach;9087pn3pk
Allentown;a2t82b3pk
Evansville;9vh74s2bk
Palm Bay;93v7o53pk
Fargo;ak86f52bk
Clearwater;93p7i03pk
Independence;9yl6lq2bk
Billings;ah65im2jk
Ann Arbor;a7g7fe2kk
El Monte;9kn4s538k
Harlem;a3d86l3pk
Westminster;a0o5s82jk
Round Rock;9ar6co2bk
Wilmington;9l47vh3pk
East Harlem;a3b86m3pk
Arvada;a0k5s32jk
Beaumont;99l6mm2bk
Provo;a1r59u2jk
Peoria;a316z52bk
Carlsbad;9i44u138k
Odessa;9eh5zn2bk
Springfield;a0k6z02bk
Downey;9ka4rv38k
Elmhurst;a3686s3pk
Costa Mesa;9jg4sg38k
Miami Gardens;8y27p33pk
North Peoria;a346z62bk
Fairfield;9w94h038k
Lansing;a8p7d42kk
Bushwick;a3186o3pk
Gravesend;a2s86j3pk
Rochester;aca6r52bk
Elgin;a6s72s2bk
West Jordan;a2t5922jk
Inglewood;9kc4r938k
Tuscaloosa;9i974r2bk
Richardson;9hj6fb2bk
Lowell;a8f8dw3pk
East Independence;9ym6lw2bk
Gresham;age4fx38k
Antioch;9vk4hn38k
Cambridge;a7q8eh3pk
High Point;9pw7pr3pk
Manchester;a9g8dj3pk
Temecula;9j14ul38k
Murrieta;9j74uf38k
Centennial;9zy5so2jk
Richmond;9ve4g538k
Corona;a3786u3pk
Pueblo;9w95tf2jk
Pearland;9846jb2bk
Waterbury;a5g8933pk
Greeley;a2a5t52jk
West Covina;9kn4se38k
Enterprise;9q34zw38k
North Charleston;9h97pv3pk
Everett;ana4gk38k
College Station;9b36gf2bk
Pompano Beach;8yw7pg3pk
South Fulton;9jb7ct3pk
Norwalk;9k64s038k
Boulder;a155rl2jk
Broken Arrow;9q56hx2bk
Daly City;9ur4fu38k
Sandy Springs;9k87dm3pk
Burbank;9ky4rd38k
Green Bay;ado73i2bk
Santa Maria;9n34lg38k
Universal City;9ku4r938k
Wichita Falls;9k76af2bk
Lakeland;93w7kd3pk
Clovis;9sb4ni38k
Lewisville;9ht6el2bk
Tyler;9fv6ja2bk
El Cajon;9h34v438k
San Mateo;9uc4g738k
Brandon;93m7jf3pk
Rialto;9kr4tz38k
Davenport;a5c6we2bk
Edison;a2k85b3pk
Hillsboro;agg4ed38k
Las Cruces;9fr5ne2jk
South Bend;a5s78f30k
Albany;a8h8743pk
New Bedford;a5o8ez3pk
Vista;9i84uc38k
Davie;8ye7p53pk
Chinatown;9v04fz38k
Renton;alw4gi38k
Roanoke;9tj7py3pk
San Angelo;9de6502bk
Kenosha;a8a7422bk
Clinton Township;a8b7ho2kk
Columbia;9z07yk3pk
Erie;a717pj3pk
Portsmouth Heights;9sa7zv3pk
Richmond Hill;a3286x3pk
Alief;98j6ig2bk
Spring Hill;9547ir3pk
Compton;9k64rm38k
League City;97z6jv2bk
Flint;a9h7fj2kk
Allen;9hy6fh2bk
Dorchester;a7i8el3pk
Mission Viejo;9jc4t538k
Vacaville;9wk4h538k
Ventura;9l84on38k
Highlands Ranch;9zv5sf2jk
Lawton;9m56ap2bk
Beaverton;agd4ew38k
South Gate;9kb4rn38k
Portsmouth;9sc8023pk
Sparks;9zt4nd38k
Yuma;9gx51m3vk
Brockton;a6w8eq3pk
Dearborn;a7k7gy2kk
Federal Way;alg4g938k
Lee's Summit;9y36lu2bk
Asheville;9ow7ip3pk
Spokane Valley;amf4uc38k
Fordham;a3i86q3pk
Livonia;a7p7gh2kk
Roswell;9ki7do3pk
Orem;a1y59r2jk
Fall River;a5u8ec3pk
Lawrence;9y96jg2bk
The Woodlands;99s6ir2bk
West Albany;a8k8723pk
Yakima;ajg4l938k
Quincy;a7d8es3pk
Flatbush;a2x86k3pk
Hesperia;9ln4u638k
Carson;9jz4rg38k
Boca Raton;8z87pk3pk
Santa Monica;9ki4qv38k
San Marcos;9i24uj38k
Boyle Heights;9kj4rn38k
Plantation;8yl7p53pk
Lynn;a7z8ex3pk
Miami Beach;8xn7pf3pk
Arden-Arcade;9x84iu38k
Westminster;9js4s738k
Longmont;a1l5s22jk
Santa Barbara;9lm4ni38k
Redding;a2r4g138k
Macon;9h87fp3pk
Meridian;ab54wp25k
San Leandro;9us4go38k
Greenville;9ox7x33pk
Edmond;9p16d82bk
Chinatown;a3486g3pk
Nampa;aay4w825k
Trenton;a1q84e3pk
Sandy Hills;a2q59b2jk
Newton;a7m8e73pk
Toms River;a0z85w3pk
Carmel;a1278s30k
Norwalk;a488833pk
Waukegan;a7o7402bk
Deltona;96a7ma3pk
Hawthorne;9k84r938k
Fort Smith;9ob6ls2bk
Suffolk;9s17za3pk
Sugar Land;98a6id2bk
Livermore;9uo4hr38k
Nashua;a8t8dh3pk
Reading;a228133pk
Concord;9od7o63pk
Indio;9jo4x638k
Enchanted Hills;9o65nx2jk
Rio Rancho;9nv5nq2jk
Santa Fe;9p55pq2jk
Sandy;a2r5982jk
Whittier;9ke4s538k
Canarsie;a2w86q3pk
Kirkland;amg4gj38k
Menifee;9jp4ul38k
Newport Beach;9je4sf38k
Tracy;9uu4ip38k
Citrus Heights;9xj4j438k
Bend;ace4j038k
Canton;a7j7g42kk
Lehigh Acres;8zz7la3pk
Greenburgh;a3z86w3pk
Bloomington;aek6ou2bk
West Town;a6d74h2bk
Germantown;9yt7xd3pk
Clifton;a3i8603pk
Duluth;ajy6s52bk
Champaign;a1g72w2bk
Near North Side;a6e74l2bk
Chino;9kh4t338k
Alhambra;9kq4rv38k
Ogden;a4i58z2jk
Redwood City;9u54gg38k
Bellingham;apg4fr38k
O'Fallon;9xt6w22bk
Hoover;9it76v2bk
Melbourne;9407o33pk
Danbury;a4z87z3pk
East Norwalk;a478843pk
Edinburg;8z26bc2bk
Sunrise;8yl7ph3pk
Bloomington;9yt77n30k
Cicero;a697492bk
Hemet;9jr4v338k
San Pedro;9jq4rf38k
Ahwatukee Foothills;9im58y3vk
Johns Creek;9kj7e43pk
Mission;8yu6av2bk
Troy;a8d7h12kk
Buena Park;9k34s838k
Mid-City;9kk4r838k
Palm Coast;9867mf3pk
Fayetteville;9q66mg2bk
Sioux City;a826g82bk
Lake Forest;9jh4t338k
Merced;9tm4lc38k
Longview;9ga6ku2bk
Bryan;9b76gb2bk
Westland;a7k7gc2kk
Warwick;a5u8dm3pk
Lakewood;9k14rv38k
Farmington Hills;a817ge2kk
San Tan Valley;9i75a73vk
Mount Pleasant;9h37q63pk
Cranston;a628dk3pk
Largo;93j7i13pk
Homestead;8wr7og3pk
South Suffolk;9s07z93pk
Avondale;9iw57x3vk
Tustin;9jr4sp38k
Mountain View;9tv4gw38k
Napa;9we4gb38k
Somerville;a7r8ei3pk
Kendall;8xc7ow3pk
Lawrence;a8n8ec3pk
Parma;a507l03pk
New Rochelle;a3n8723pk
Lynchburg;9tx7s63pk
Medford;a7l4eo38k
Deerfield Beach;8z47pi3pk
Sylmar;9lb4qz38k
Pleasanton;9um4hh38k
Belmont Cragin;a6h7472bk
Brooklyn Park;af96oo2bk
Goodyear;9iw57w3vk
Kennewick;aid4p238k
Alameda;9ux4ge38k
Town 'n' Country;93t7im3pk
Bellflower;9k44rw38k
Chino Hills;9kf4sw38k
Bloomington;a2g70t2bk
Alafaya;95c7mf3pk
Springdale;9qj6mj2bk
Racine;a8p7462bk
Hammond;a5i74y2bk
Milpitas;9tz4hd38k
Gary;a5j75d2bk
Scranton;a5181u3pk
Baldwin Park;9kp4sc38k
Auburn;alf4gh38k
Fishers;a1079330k
Saint Joseph;a0h6kj2bk
Pharr;8yr6ba2bk
Upland;9kq4t738k
Folsom;9xg4je38k
Baytown;98m6k62bk
San Ramon;9uy4h638k
Camden;a0x83c3pk
Lake Charles;99x6p42bk
Kalamazoo;a7h7a92kk
Brick;a1a8623pk
Arlington Heights;a6x73m2bk
Plymouth;af16oe2bk
South Ozone Park;a2z86y3pk
Doral;8xq7os3pk
Waterford;a8l7gb2kk
Evanston;a6s74f2bk
Manteca;9v04ja38k
Wyoming;a9779x2kk
Loveland;a285s52jk
Cheektowaga;a967t93pk
Kings Bridge;a3k86p3pk
Bismarck;ak16422bk
Perris;9ju4ud38j
Bethlehem;a2v82n3pj
Albany;9dq7e83pj
Schaumburg;a6r73c2bj
Gastonia;9ny7mh3pj
Brownsville;a2y86o3pj
Union City;9ug4h238j
Bolingbrook;a5u73d2bj
Iowa City;a5q6tr2bj
Layton;a4258z2jj
Appleton;acy72e2bj
Missouri City;98a6im2bj
Shelby;a8j7hd2kj
Fort Myers;8zy7ko3pj
Boynton Beach;8zp7pl3pj
Jonesboro;9pk6w22bj
South Lawndale;a6874d2bj
Logan Square;a6g74e2bj
Rapid City;acg5x92jj
Warner Robins;9gm7fp3pj
Rochester Hills;a8i7h12kj
Decatur;a0o70x2bj
Southfield;a7z7gu2kj
Saint George;9t254i2jj
New Britain;a5q89u3pj
Daytona Beach;9757my3pj
Franklin;9pt76p2bj
Turlock;9u54kb38j
Temple;9ce6dm2bj
West Ridge;a6o74f2bj
Apple Valley;9lu4uh38j
Lynwood;9k94rn38j
Waukesha;a9h72x2bj
Canton;a3c7ly3pj
Gulfport;9ad70j2bj
Pawtucket;a6c8dq3pj
Lauderhill;8ym7p73pj
Rock Hill;9n07mx3pj
Silver Spring;9yb7y13pj
West Gulfport;9ag70j2bj
Flower Mound;9hp6ea2bj
Centreville;9xw7wx3pj
Lafayette;a2a76o30j
Passaic;a3i8633pj
Riverview;93f7jb3pj
Redlands;9km4ui38j
Missoula;ak753d2jj
Rancho Cordova;9x74j238j
Wilmington;a0f8253pj
New Braunfels;98i6bg2bj
Cherry Hill;a0x83l3pj
Flagstaff;9ns59v3vj
Muncie;a1n7at30j
Mira Mesa;9hg4um38j
Woodland Hills;9kx4qj38j
Weston;8yi7oo3pj
Frederick;9zh7wz3pj
Pasco;aig4p638j
Pittsburg;9vn4hg38j
Ridgewood;a3286p3pj
Palatine;a6z73h2bj
North Richland Hills;9h76dx2bj
Union City;a3a86e3pj
Kissimmee;94m7lu3pj
Walnut Creek;9vb4gy38j
Cordova;9no6ym2bj
Mount Vernon;a3n86w3pj
Conroe;9a76iu2bj
Dothan;9cq7at2bj
Northridge;9l34qq38j
Waterloo;a816ri2bj
Maple Grove;af76oe2bj
Framingham;a7g8dm3pj
Redondo Beach;9k14r538j
Bossier City;9gc6nn2bj
Yorba Linda;9k54sr38j
Woodbury;aes6ps2bj
Eau Claire;aeh6tu2bj
Waldorf;9xa7ya3pj
Forest Hills;a3486v3pj
Davis;9x24hu38j
Glen Burnie;9ys7z63pj
Camarillo;9l24pc38j
Victoria;9616ek2bj
Gaithersburg;9yq7xk3pj
Jacksonville;9mj7wx3pj
South San Francisco;9ul4fz38j
Kenner;99b6xc2bj
Jackson Heights;a3886r3pj
Rockville;9yk7xp3pj
Jackson;9ox71b2bj
Lincoln Park;a6g74j2bj
Yuba City;9yq4i638j
Portland;aba8gu3pj
Palo Alto;9u04gq38j
Casas Adobes;9fs5bo3vj
Marysville;anh4gm38j
South Jordan;a2o5932jj
Oshkosh;aca7222bj
North Little Rock;9ml6rp2bj
Bayside;a398723pj
Bayonne;a2z8653pj
Eagan;aeg6p72bj
Delray Beach;8zi7pl3pj
Johnson City;9qv7j93pj
Dale City;9xc7x93pj
Cedar Park;9ar6ca2bj
Parkchester;a3g86u3pj
Atascocita;99c6jm2bj
Saint Cloud;agk6mg2bj
Ellicott City;9z37yo3pj
Laguna Niguel;9j44t138j
Saint Charles;9xq6wo2bj
Harlingen;8yr6cm2bj
San Clemente;9iv4tb38j
West Lynchburg;9tw7s23pj
Middletown;a278643pj
Framingham Center;a7i8dk3pj
Schenectady;a8x86m3pj
Cheyenne;a4a5su2jj
Broomfield;a0w5s32jj
Ames;a6r6ny2bj
Park Slope;a2z86h3pj
Shawnee;9yg6kw2bj
Reseda;9l04qq38j
Conway;9nh6r82bj
East Orange;a3985w3pj
Portage Park;a6k7472bj
Skokie;a6r74b2bj
West Bloomfield Township;a897ge2kj
Tamarac;8yt7p33pj
Youngstown;a467nz3pj
Lodi;9vx4j538j
North Hollywood;9kx4r638j
Greenville;9mt7j53pj
Celina;9ik6f62bj
Mansfield;9gg6e62bj
Santa Cruz;9sp4h138j
Pico Rivera;9ke4ry38j
Madera;9so4mi38j
Janesville;a8k70q2bj
West Des Moines;a5i6np2bj
Montebello;9kh4rx38j
Georgetown;9b36co2bj
Alpharetta;9ko7dv3pj
Lorain;a557jq3pj
Bowling Green;9sr77w2bj
Flatlands;a2u86n3pj
Dundalk;9z17zg3pj
Eden Prairie;ael6od2bj
North Bergen;a3c86f3pj
Florence-Graham;9kd4rk38j
Waltham;a7q8e43pj
West Hartford;a6089y3pj
Rogers;9qx6mk2bj
Carol City;8y27p33pj
Encinitas;9hs4u738j
East Village;a3586h3pj
Haverhill;a8u8ek3pj
Jupiter;90t7pj3pj
Council Bluffs;a4m6hq2bj
Wellington;9027p43pj
West Coon Rapids;afg6op2bj
North Miami;8xx7p93pj
Hamilton;9zg7d43pj
North Port;9147jk3pj
Tulare;9ql4oh38j
Coon Rapids;afc6ov2bj
Millcreek;a315982jj
La Habra;9k94sd38j
Blaine;afg6p12bj
Auburn;9gl7ak2bj
Lake Elsinore;9jj4u338j
Carmichael;9xa4iz38j
Taylor;a7c7gp2kj
Burnsville;aed6ow2bj
Monterey Park;9km4rw38j
Castro Valley;9up4gv38j
Irvington;a3585t3pj
Rocklin;9xr4j838j
Utica;a9q8313pj
Malden;a7v8el3pj
National City;9gs4uq38j
Financial District;a3386f3pj
Springfield;acd4ea38j
Bethesda;9ya7xu3pj
Terre Haute;9zn75730j
Vineland;9zp83l3pj
West Hollywood;8ya7pa3pj
San Marcos;9906by2bj
Brentwood;a3a88j3pj
Lakeville;ae16p02bj
West Allis;a9i73j2bj
Redmond;amf4gs38j
Canoga Park;9l04qk38j
Cupertino;9to4h138j
Taylorsville;a2z5922jj
Bristol;a5r89d3pj
Moore;9o66d72bj
Gardena;9k54rd38j
Petaluma;9w74fc38j
Bensalem;a1e83t3pj
Grand Junction;9yi5ih2jj
Casper;a935op2jj
Rowlett;9he6fs2bj
La Mesa;9h14uy38j
Pine Hills;95c7lr3pj
Bensonhurst;a2s86h3pj
Coney Island;a2q86h3pj
Rancho Penasquitos;9hk4uo38j
Valley Glen;9kz4r238j
Meriden;a5e89r3pj
Pontiac;a8g7gn2kj
Port Orange;96y7n03pj
Hamden;a5089i3pj
Lakewood;al14fo38j
Fountainebleau;8xl7ot3pj
Saint Clair Shores;a827hr2kj
Springfield;a0w7f73pj
Great Falls;aly5au2jj
Chapel Hill;9pr7se3pj
Canyon Country;9lm4qx38j
Huntington Park;9ke4rl38j
Lancaster;a188013pj
Coconut Creek;8yx7pa3pj
Leander;9ay6c72bj
Idaho Falls;aar58t25j
San Rafael;9vh4fn38j
Noblesville;a1979330j
Marietta;9kb7d53pj
Fairfield;a4a88i3pj
Owensboro;9ux7612bj
Eastvale;9kc4tg38j
Royal Oak;a817h22kj
Brentwood;9vd4hy38j
Dubuque;a826w62bj
Brookline;a7l8eg3pj
Novi;a807g42kj
Des Plaines;a6r73w2bj
Carson City;9ys4nb38j
Orland Park;a5n73z2bj
Bartlett;9ns6yd2bj
Woodland;9xg4hr38j
Lehi;a2759b2jj
White Plains;a3z8743pj
Arcadia;9ku4s438j
Reston;9y97x63pj
Ocala;9737ju3pj
Clay;a9z80f3pj
Central City;9iw58q3vj
South Vineland;9zl83l3pj
Sanford;9607m93pj
Bowie;9y67yv3pj
Kokomo;a2h78r30j
Wayne;a3p85o3pj
Santee;9h84v338j
Dublin;9uq4ha38j
Palm Harbor;9407i43pj
Medford;a7u8eh3pj
Midwest City;9oh6dg2bj
Center City;a0z8383pj
Margate;8yw7p73pj
South Whittier;9kb4s438j
Tinley Park;a5h7462bj
Pflugerville;9ak6cu2bj
New Brunswick;a2h8573pj
Grand Forks;an56eh2bj
Fountain Valley;9jn4sd38j
North Hills;9l44qw38j
Diamond Bar;9kj4sr38j
Taunton;a6e8ej3pj
Oak Lawn;a5v7482bj
Union;a3285q3pj
Ankeny;a5x6nz2bj
Chicopee;a738ab3pj
Irving Park;a6j74a2bj
Berwyn;a697452bj
Manhattan;9yu6fr2bj
Kendale Lakes;8xf7on3pj
Smyrna;9k47d93pj
Dearborn Heights;a7m7gp2kj
Porterville;9q74pe38j
Piscataway;a2i85c3pj
Hendersonville;9qu77e2bj
Morningside Heights;a3d86k3pj
Rocky Mount;9pu7vx3pj
Corvallis;ads4dm38j
Olympia;ako4em38j
Valdosta;9bn7go3pj
Hanford;9qx4nn38j
Castle Rock;9zd5sq2jj
Greenwood;a0178t30j
Chicago Lawn;a6274e2bj
Hempstead;a3387i3pj
Novato;9vv4fj38j
Kettering;a097e73pj
Bellevue;a4a6hn2bj
Shoreline;amo4g638j
Decatur;9m576e2bj
Paramount;9k54rs38j
Port Arthur;9916n22bj
Abington;a1g83c3pj
Anderson;a1f7a030j
Tamiami;8xk7oo3pj
Towson;9zg7z83pj
North Chicopee;a768ac3pj
Uptown;a6l74j2bj
Sarasota;91y7ir3pj
Cypress Hills;a3086r3pj
West Haven;a4n89d3pj
Rosemead;9ko4s138j
Edgewater;a6m74i2bj
Jackson;a0i8423pj
Highland;9kt4uf38j
Mount Prospect;a6v73q2bj
Colton;9kn4u538j
Encanto;9j058o3vj
Pocatello;a9357n25j
Bradenton;92e7in3pj
Rogers Park;a6p74h2bj
Weymouth;a7a8ey3pj
Port Charlotte;90y7jz3pj
Normal;a2j70t2bj
Spring;99k6iy2bj
Allapattah;8xp7p63pj
Richland;ail4oo38j
Euless;9h86ec2bj
Blue Springs;9ye6m42bj
East Pensacola Heights;9aj75u2bj
Hacienda Heights;9kf4sb38j
Ozone Park;a3086w3pj
Briarwood;a3386y3pj
Cathedral City;9ju4wh38j
Lakewood;a1e85u3pj
Elyria;a4x7jx3pj
Pensacola;9ai75q2bj
Wheaton;a6b7392bj
Commerce City;a0l5sj2jj
Hoboken;a3686d3pj
Watsonville;9sj4hs38j
Lake Havasu City;9ls52g3vj
Little Havana;8xl7p53pj
Revere;a7t8er3pj
West New York;a3b86f3pj
Yucaipa;9kj4uw38j
Gilroy;9st4ib38j
Poinciana;9467lq3pj
University of Texas;9a56ci2bj
Kingsport;9rj7io3pj
Levittown;a1k8453pj
Palm Beach Gardens;90i7pe3pj
Milford;a4i8923pj
Delano;9pd4or38j
West Sacramento;9x64if38j
Huntersville;9od7ng3pj
Perth Amboy;a2j85p3pj
Sherman Oaks;9kv4qz38j
Southaven;9n76xz2bj
Saint Peters;9xs6w92bj
Downtown DC;9y17y23pj
Harrisonburg;9wt7sx3pj
Peabody;a858ez3pj
Placentia;9k34sl38j
Lenexa;9y76kv2bj
DeSoto;9gj6ey2bj
Burlington;9qa7rc3pj
South Hill;aky4gd38j
Elkhart;a5s79630j
La Crosse;abo6uk2bj
Oak Park;a6d7462bj
Florissant;9xr6x42bj
Sammamish;amc4gw38j
Wakefield;a3m86v3pj
Albany;ae04e138j
Hoffman Estates;a6s73c2bj
Albany Park;a6l74c2bj
Methuen;a8p8e93pj
Glendora;9ku4sl38j
Wilmington;9ju4ri38j
Queens Village;a358763pj
Brookhaven;9k27dq3pj
Levittown;a3587t3pj
Palm Desert;9jo4wq38j
Joplin;9t06lh2bj
Enid;9r46c42bj
Bonita Springs;8z67ku3pj
Irondequoit;aa17wi3pj
Caldwell;aba4vv25j
Minnetonka;aer6oa2bj
Pinellas Park;93c7ia3pj
Battle Creek;a7k7be2kj
Casa Grande;9hc59k3vj
South Shore;a6074q2bj
Mott Haven;a3d86o3pj
The Villages;96d7kc3pj
Grand Island;a3p6au2bj
Grapevine;9hh6ec2bj
Stratford;a4e88v3pj
Kentwood;a937a42kj
City of Milford (balance);a4i8923pj
Tigard;ag74ez38j
East Hartford;a628ab3pj
Apple Valley;ae96p22bj
Plainfield;a2v85b3pj
Leesburg;9yo7wk3pj
Parsippany;a3i8593pj
Coral Gables;8xg7p13pj
The Trails of Frisco;9i46ex2bj
The Hammocks;8xb7ok3pj
Buckeye;9ip57a3vj
Flagami;8xk7ow3pj
Catalina Foothills;9fq5bw3vj
Lakewood;a587ks3pj
North La Crosse;abt6uj2bj
Burien;alv4g538j
Havertown;a1282t3pj
Logan;a5y59d2jj
South Peabody;a838ex3pj
Aliso Viejo;9j94sz38j
Harrisburg;a1v7yg3pj
Galveston;97e6ko2bj
Poway;9hk4uw38j
Edina;aep6op2bj
Minnetonka Mills;aeu6og2bj
Stonecrest;9jn7eb3pj
Cerritos;9k24s238j
Redford;a7q7gm2kj
East Honolulu;8l51pw9fj
Troy;a8p87b3pj
Sunnyside;a3686m3pj
Lincoln;9y14j338j
Downers Grove;a6573j2bj
Wharton;a0x8383pj
Whitman;a0w8383pj
Azusa;9kt4sh38j
Wilson;9p87vk3pj
Monroe;9gb6s42bj
Parker;9zs5t02jj
La Mirada;9k84s738j
Minot;anz62m2bj
Aloha;agd4ep38j
Saginaw;aam7et2kj
Bedford;9h86e62bj
Rancho Santa Margarita;9jg4tc38j
Cypress;9jy4s438j
Murray;a2z5972jj
Cuyahoga Falls;a497lo3pj
Coeur d'Alene;amg4vm38j
Bloomfield;a3d85x3pj
Rowland Heights;9ke4sh38j
Covina;9kp4sj38j
Stillwater;9qc6ee2bj
Niagara Falls;a9p7se3pj
Collierville;9nc6yy2bj
Oxford Circle;a1983h3pj
Summerville;9hq7pa3pj
South Bel Air;9zt7zy3pj
Sheboygan;abj74d2bj
Middletown;9zs7dk3pj
Aspen Hill;9yk7xx3pj
Dunwoody;9kb7dr3pj
Huntington;9wq7iz3pj
Maricopa;9hu58r3vj
Roswell;9ir5to2jj
Cedar Hill;9gj6eo2bj
East Brunswick;a2b85a3pj
East Lansing;a8q7dc2kj
Apopka;95o7ll3pj
Maspeth;a3486p3pj
Wheaton;9yg7xy3pj
Mishawaka;a5q78o30j
Portage;a787aa2kj
West Orange;a3c85s3pj
McLean;9y57xm3pj
Newark;a1a7j43pj
Ceres;9uf4k038j
Alexandria;9cz6r72bj
Chesterfield;9xe6we2bj
Barnstable;a5u8gq3pj
Salina;9xw6cv2bj
Lawrence;a0o79130j
Bel Air South;9zr8003pj
Pearl City;8lg1p69fj
Euclid;a5j7lj3pj
Roseville;a827hm2kj
Texas City;97m6ke2bj
Wauwatosa;a9l73j2bj
Waiau-Pacific Palisades;8lg1p99fj
Vermont Square;9kg4re38j
Florin;9wy4ir38j
Twin Falls;a8852225j
Glenview;a6v7452bj
East Providence;a658dr3pj
Palm Springs;9jz4w938j
San Luis Obispo;9o04ku38j
Mission District;9uw4fy38j
Country Club;8y37ow3pj
Gwynn Oak;9z97yz3pj
Winnetka;9l14qn38j
Madison;9me7712bj
Jeffersonville;9wc79u34j
San Jacinto;9ju4v438j
Mentor;a5r7m23pj
Charleston;9wj7l93pj
Mansfield;a387is3pj
Hattiesburg;9d16zz2bj
Draper;a2k59a2jj
Middletown;a5g8a73pj
Wylie;9hq6fu2bj
Columbus;9yw79c30j
Laguna;9wq4iq38j
Smyrna;9py77o2bj
Charlottesville;9vn7u03pj
Lacey;akn4eu38j
Makakilo / Kapolei / Honokai Hale;8la1ou9fj
Littleton;a015sa2jj
Beavercreek;a0b7ei3pj
Kannapolis;9ol7o23pj
Everett;a7t8en3pj
Binghamton;a6y8143pj
Brighton;a7n8ec3pj
Elmhurst;a6e73q2bj
Hell's Kitchen;a3886h3pj
Auburn Gresham;a5y74j2bj
City of Sammamish;am84h038j
Antelope;9xj4iz38j
Keller;9hh6dv2bj
Biloxi;9ag7132bj
Apex;9p97sz3pj
West Lafayette;a2b76l30j
Cutler Bay;8x27ou3pj
Titusville;95h7nj3pj
Altoona;a2k7u93pj
Newark;9u94h038j
Oro Valley;9fz5br3vj
Saint Louis Park;aev6op2bj
Enfield;a6m8ad3pj
Dublin;a1e7h53pj
Tuckahoe;9uf7wk3pj
Potomac;9ye7xj3pj
Cleveland Heights;a5c7lg3pj
Sayreville;a2e85g3pj
Hackensack;a3l86c3pj
Pine Bluff;9l36sg2bj
West Seneca;a917t43pj
Strongsville;a4r7ko3pj
Coachella;9jk4xb38j
Penn Hills;a2i7q83pj
Encino;9kw4qu38j
Bentonville;9r16mb2bj
Fort Pierce;9297ov3pj
Bridgewater;a2s84n3pj
Danville;9v24h438j
Oakland Park;8yp7pf3pj
Attleboro;a6i8dz3pj
Severn;9yq7yy3pj
Blacksburg;9tf7on3pj
Haltom City;9h46dt2bj
Brighton Park;a6674e2bj
Lompoc;9m84le38j
Wesley Chapel;94g7jb3pj
Urbandale;a5n6np2bj
York;a107yv3pj
Concord;aa18da3pj
North Miami Beach;8y17pc3pj
El Centro;9h34z038j
Rego Park;a3586v3pj
North Brunswick;a2d8543pj
Cleveland;9no7c83pj
Echo Park;9ko4ri38j
North Bethesda;9yg7xs3pj
Beaumont;9k94v238j
Kalihi-Palama;8l91pg9fj
Lombard;a6c73j2bj
Bountiful;a3l5982jj
North Lauderdale;8yu7p53pj
Burleson;9ge6do2bj
Ocoee;95d7li3pj
Ashburn;9yg7wr3pj
Southington;a5k89k3pj
Augusta;9iz7kb3pj
Bozeman;agw5bk2jj
Sierra Vista;9dn5dm3vj
Freeport;a2y87m3pj
Pittsfield;a7x88j3pj
Hilo;8gt1x79fj
West Babylon;a348893pj
DeKalb;a6h71h2bj
San Bruno;9uj4fz38j
Altamonte Springs;95m7lz3pj
Bell Gardens;9kd4rt38j
Schertz;9836b12bj
East Boston;a7q8eo3pj
Morgan Hill;9t54i338j
Bothell;amo4gj38j
Fond du Lac;abm72c2bj
Sicklerville;a0c83r3pj
Sayreville Junction;a2f85j3pj
Farmington;9s15je2jj
Salem;a848f23pj
Arlington;a7u8ec3pj
La Jolla;9h94u938j
Altadena;9kz4rv38j
Fairfield;9zb7d43pj
Ashburn;a5z74d2bj
Rancho Palos Verdes;9jq4r538j
North Highlands;9xh4iv38j
Moline;a5b6wk2bj
East Concord;aa48da3pj
Jefferson City;9x66rz2bj
Henrietta;a9m7wf3pj
Rockwall;9hh6g22bj
Plainfield;a5n7302bj
Burlington;adk88n3pj
Rohnert Park;9wi4f638j
Urbana;a1f72z2bj
Southglenn;9zz5sh2jj
Midland;ab67dz2kj
Prescott Valley;9m55803vj
Joint Base Pearl Harbor Hickam;8lb1p99fj
State College;a3b7vq3pi
Kearny;a398613pi
El Dorado Hills;9xh4jo38i
Danville;9rn7rg3pi
Belleville;9x06y22bi
Linden;a2u85s3pi
Moorhead;ak76f72bi
Woodside;a3786p3pi
Brea;9k84si38i
Riverton;a2k5922ji
Prescott;9ly57l3vi
Mount Laurel;a0x83z3pi
The Colony;9hx6ev2bi
Manassas;9xn7ws3pi
Brentwood;9q376y2bi
Westfield;a7189x3pi
Hutchinson;9vq6bz2bi
Leominster;a858co3pi
Catonsville;9z37yv3pi
Hicksville;a3987r3pi
Bartlett;a6o7312bi
Buffalo Grove;a7373o2bi
Woonsocket;a6o8dd3pi
West Hills;9l04qg38i
Edmonds;amt4g238i
Marana;9g45b13vi
Shelton;a4s88z3pi
Cedar Falls;a856r72bi
Chatsworth;9l64qk38i
Gage Park;a6474e2bi
Beverly;a888f43pi
University;93z7j03pi
Coppell;9hj6ei2bi
Findlay;a407fn3pi
Campbell;9tl4h938i
Lake Ridge;9xh7xa3pi
Burke;9xr7xd3pi
Mankato;aco6mv2bi
Annandale;9xv7xk3pi
Covington;9yk7d93pi
New City;a6574i2bi
Morris Heights;a3h86o3pi
Peachtree Corners;9kd7e23pi
South Valley;9n95no2ji
Ormond Beach;97d7mu3pi
Carrollwood Village;93z7is3pi
Huntsville;9bc6il2bi
Venice;9kf4qy38i
Sumter;9k87ou3pi
Annapolis;9ya7zj3pi
Quincy;a0y6u32bi
Wilkes-Barre;a4l8183pi
Lincoln Square;a6m74f2bi
La Puente;9ki4sd38i
Holyoke;a788aa3pi
Sherman;9jg6fn2bi
Goose Creek;9hm7pp3pi
Maplewood;aev6po2bi
Streamwood;a6r7322bi
Fitchburg;a8a8ck3pi
Hilton Head Island;9ff7nq3pi
La Quinta;9ji4wx38i
Crystal Lake;a7c72o2bi
Hagerstown;a047w43pi
San Gabriel;9kq4rx38i
Hickory;9p97m23pi
Beverly Cove;a878f73pi
Carol Stream;a6f7372bi
Winter Garden;95d7ld3pi
Warren;a4k7ni3pi
Marlboro;a2085r3pi
Teaneck;a3m86e3pi
Calexico;9gs4z638i
Florence;9mo74g2bi
St. Johns;99k7lh3pi
Shakopee;aeg6o72bi
Billerica;a888e13pi
Norwich;a5c8bs3pi
Amherst;a7p8ak3pi
Duncanville;9gp6et2bi
New Berlin;a9e7392bi
Marlborough;a7n8d93pi
Oakley;9vk4hx38i
Lancaster;a0b7ik3pi
Sawtelle;9kk4qz38i
Avondale;a6i74d2bi
Romeoville;a5p73b2bi
Culver City;9ki4r438i
Montclair;a3f85v3pi
Meridian;9fw71m2bi
Puyallup;al34gb38i
Woburn;a808ed3pi
Bremerton;am54fd38i
Hallandale Beach;8y67pd3pi
Clovis;9lk5xb2ji
Weslaco;8yo6bt2bi
Cape Girardeau;9tn6zc2bi
Bullhead City;9nn51r3vi
North Fort Myers;9037kk3pi
Dover;9ys8283pi
Chelsea;a7r8ep3pi
Grove City;a0s7h73pi
Princeton;8wy7on3pi
Essex;9z77zl3pi
Atlantic City;9zc85a3pi
Pacifica;9uh4fr38i
Germantown;9nh6yj2bi
Northglenn;a0t5sd2ji
Far Rockaway;a2t8743pi
Olney;a1883c3pi
Kensington;a2x86j3pi
Coram;a3j8983pi
Wausau;aew6z12bi
Hurst;9h66e32bi
Stanton;9jw4s938i
Aliamanu / Salt Lakes / Foster Village;8lc1pc9fi
Lancaster;9gj6f82bi
Friendswood;9816jk2bi
Gainesville;9la7f63pi
The Acreage;90f7p13pi
West Oak Lane;a1b8373pi
Montclair;9ko4t338i
Kailua;8lg1pu9fi
Rock Island;a5b6we2bi
Whitney;9qa50g38i
Oviedo;95n7mf3pi
Carpentersville;a7072u2bi
Manhattan Valley;a3b86k3pi
Lake Oswego;ag64f938i
Muskogee;9pb6j32bi
Hobbs;9gu5xi2ji
Muskegon;aa378f2ki
Westerville;a1h7hn3pi
Little Elm;9i46eq2bi
Hanover Park;a6o7352bi
Hillsborough;a2g84p3pi
Channelview;98q6jt2bi
Panama City;99s7a22bi
Florence;9l07qg3pi
Waipahu;8lf1p39fi
Wake Forest;9py7tx3pi
Huber Heights;a0o7ec3pi
Martinez;9vm4gr38i
East Meadow;a3387o3pi
Hanover;9yv7yw3pi
Wheeling;a7273r2bi
Apache Junction;9iu5a53vi
Pleasant Grove;a2459m2ji
Brookfield;a9m7392bi
Columbia Heights;9y57y13pi
Delaware;a1y7h93pi
Roy;a4c58t2ji
Valley Stream;a2y8793pi
Spanish Fork;a1f59v2ji
Keizer;aez4e938i
Woodlawn;9z87yv3pi
Lima;a367ed3pi
Spartanburg;9n37kf3pi
Hermitage;9qk77e2bi
Park Ridge;a6p7402bi
Fenway/Kenmore;a7m8ei3pi
Winter Haven;93u7kz3pi
Aventura;8y47pe3pi
Severna Park;9yj7zd3pi
Royal Palm Beach;9077p53pi
Brighton;a135su2ji
Phenix City;9g77bw3pi
Milton;9kt7du3pi
Sun City;9jc5853vi
Lake Worth Beach;8zy7pl3pi
Kew Gardens Hills;a3586y3pi
Jamaica Plain;a7j8eg3pi
Monrovia;9kv4s838i
Hollister;9sd4is38i
Los Banos;9sy4kb38i
Sewell;a0h83a3pi
Plant City;93u7jx3pi
Greenfield;a9c73j2bi
Marion;a6r6tk2bi
Braintree;a788es3pi
Newnan;9iq7cg3pi
Texarkana;9iv6mr2bi
Addison;a6h73l2bi
Reynoldsburg;a0z7hz3pi
South Jordan Heights;a2o5912ji
Odenton;9yk7yy3pi
Mableton;9jy7d23pi
Hilton Head;9fi7np3pi
Grants Pass;a7w4df38i
Indian Trail;9ng7nx3pi
Calumet City;a5m74v2bi
Lincoln Park;a7d7gy2ki
Lynnwood;amu4g838i
Whitestone;a3b86y3pi
Beloit;a8370p2bi
Belleville;a3b8613pi
Longview;ai64ei38i
Columbia;9oy7682bi
South Miami Heights;8x47oq3pi
Portage;a5i75u2bi
Westfield;a1878r30i
New Albany;9wd79m34i
Clifton Park;a938733pi
Fort Lee;a3h86j3pi
Brighton;a9v7wl3pi
Bartlesville;9s36he2bi
Ewing;a1v8483pi
San Juan;8yr6bc2bi
Woodhaven;a3186u3pi
Mission Bend;98h6ia2bi
San Juan Capistrano;9j24t638i
Pahrump;9ql4xu38i
Saint Charles;9x87ya3pi
Temple City;9kr4s238i
Marion;a2r7h33pi
Mechanicsville;9uh7x33pi
Lufkin;9d26kv2bi
Pennsauken;a1083i3pi
Rome;9l67bg3pi
Mattapan;a7f8ej3pi
Claremont;9kq4t038i
Franklin;a9573g2bi
West Hollywood;9kp4r838i
Richfield;aeo6ow2bi
Bell;9ke4rp38i
Lewiston;aci8gz3pi
Dunedin;93u7i33pi
Kendall West;8xf7ok3pi
Del Rio;97k63q2bi
Oakville;9wv6x62bi
Commack;a3g88f3pi
Menomonee Falls;a9y7382bi
Moorpark;9l94ps38i
Gadsden;9kh7932bi
Issaquah;am14h138i
Spring Hill;9pb76j2bi
Trumbull;a4k88o3pi
Olive Branch;9n46yh2bi
Mooresville;9ou7nj3pi
West Torrington;a6688u3pi
Willowbrook;9k84ri38i
Leavenworth;9z76kc2bi
Clinton;9xp7ye3pi
Cottage Grove;aej6pu2bi
Wildwood;9x66w62bi
Richmond West;8x57ol3pi
Richmond;a0n7c730i
Mount Pleasant;9y57y03pi
Oregon City;ag04ff38i
ʻEwa Gentry-West Loch;8lb1p19fi
Goldsboro;9oa7vd3pi
Manhattan Beach;9k44r338i
Parkland;al04fx38i
Martinez;9j47k03pi
East Florence;9mp74j2bi
Kyle;99b6c42bi
Kearns;a2y58w2ji
Linton Hall;9xo7wj3pi
Tupelo;9l671m2bi
Hot Springs;9lu6pi2bi
Wildomar;9jc4u838i
Wentzville;9xt6vn2bi
Roseville;af16p82bi
Valrico;93m7jk3pi
Coventry;a5u8cw3pi
Rosenberg;9846hv2bi
Bettendorf;a5c6wk2bi
East Point;9jk7dg3pi
Prattville;9g677u2bi
Ponte Vedra Beach;9a07lx3pi
Boardman;a3y7ny3pi
Cooper City;8ye7p13pi
Oxon Hill-Glassmanor;9xs7y73pi
Egypt Lake-Leto;93u7it3pi
North Lawndale;a6a74c2bi
Oak Creek;a9573y2bi
Peachtree City;9is7d03pi
Merrillville;a5875f2bi
Saint Cloud;94h7m83pi
La Porte;98f6k22bi
University City;9xe6x52bi
Upper Arlington;a137ha3pi
Torrington;a6488w3pi
Beverly Hills;9kn4r438i
Inver Grove Heights;ael6pk2bi
Cumberland;a6l8dl3pi
Bayview-Hunters Point;9ut4g238i
Pleasant Hill;9vf4gy38i
Stow;a4c7ls3pi
Lauderdale Lakes;8yp7p73pi
La Vergne;9q277i2bi
Winter Springs;95q7m53pi
Merritt Island;94s7nv3pi
Greenpoint;a3486l3pi
West Little River;8xu7p43pi
Brunswick;a4k7ko3pi
San Dimas;9kr4sr38i
Monroe;9n77o93pi
North Center;a6j74g2bi
Queen Creek;9id59x3vi
Kaneohe;8lg1po9fi
Gahanna;a167hs3pi
Leawood;9y96l62bi
Owasso;9qr6hr2bi
Derry Village;a958dx3pi
Orange;a3985t3pi
Central Islip;a3b88o3pi
Norristown;a1g82q3pi
Lower West Side;a6974h2bi
Dyker Heights;a2u86f3pi
Glendale;a3286r3pi
Cottonwood Heights;a2u59f2ji
Gallatin;9r377v2bi
Houma;9886w02bi
Rubidoux;9kg4tv38i
Collinwood;a5g7lf3pi
Glendale Heights;a6f73e2bi
Butte;ahs57f2ji
Dana Point;9iz4t238i
Benton;9m06qt2bi
Vestavia Hills;9ix76x2bi
La Presa;9gv4v038i
Oakton;9y07xa3pi
Chester;a0p82o3pi
Mount Vernon;aoi4g738i
Studio City;9kv4r438i
Salisbury;9p37oh3pi
Riviera Beach;90e7pm3pi
Orangevale;9xg4j938i
Oswego;a5s72l2bi
El Mirage;9jd5803vi
West Lake Sammamish;am64gu38i
Chelmsford;a8c8dr3pi
North Bel Air;9zu7zx3pi
Bay City;ab37ez2ki
Nacogdoches;9ds6l22bi
Shrewsbury;a7i8ct3pi
Dakota Ridge;a025ry2ji
McMinnville;afl4ds38i
Bridgeport;a6874j2bi
Dalton;9ml7bz3pi
Olney;9yr7xx3pi
North Providence;a698dh3pi
Newark;a0881l3pi
Oak Hill;9y57x03pi
Deer Park;98j6js2bi
Holland;a8v78t2ki
Throgs Neck;a3e86y3pi
Northbrook;a717412bi
Hilliard;a177h03pi
Wenatchee;alq4lt38i
Fair Lawn;a3q8633pi
West Fargo;ak76eu2bi
Kennesaw;9ki7cy3pi
New City;a4b86h3pi
Long Beach;a2r87e3pi
Richmond;9uv7dv3pi
Suitland-Silver Hill;9xx7yb3pi
Chillum;9y87y53pi
Foster City;9uc4gd38i
Fairborn;a0m7em3pi
Menlo Park;9u14gm38i
Chicago Loop;a6c74l2bi
Cibolo;9846b52bi
Lawndale;9k54r938i
Hinesville;9eh7lc3pi
Waxahachie;9fz6ez2bi
St. Charles;9x97yc3pi
Cobbs Creek;a0z8303pi
Woodridge;a5z73f2bi
Carrollwood;93x7iv3pi
Brentwood;9kl4qx38i
Somerton;a1g83n3pi
Elk Grove Village;a6o73n2bi
Pekin;a2p6z02bi
Socorro;9dx5oq2ji
Elmont;a328793pi
Adelanto;9m24tv38i
Tooele;a2l5822ji
Golden Glades;8xz7p83pi
Marrero;9926xq2bi
Jackson;a7d7dk2ki
Foothill Farms;9xg4ix38i
Englewood;a055sd2ji
Copperas Cove;9cg6c22bi
Bath Beach;a2s86g3pi
Huntington Station;a3h8833pi
Seaside;9rp4hj38i
Kearney;a3268s2bi
Redan;9jr7eb3pi
Manitowoc;ach74i2bi
Williamsburg;a3386l3pi
Goshen;a5i79l30i
St. Charles;a6f72p2bi
Greenacres City;8zy7pf3pi
Kiryas Joel;a4u85z3pi
Salisbury;9wk8203pi
Douglasville;9jr7cl3pi
Silver Lake;9kp4rh38i
Security-Widefield;9xn5t52ji
University Place;al84fl38i
Pullman;ajt4ui38i
West Lawn;a6174c2bi
Mount Lebanon;a247pn3pi
Windsor;a2g5sm2ji
Alabaster;9ic76u2bi
Farmers Branch;9hh6eu2bi
Oildale;9oe4pe38i
La Verne;9kq4sv38i
Mason;9zc7dt3pi
Eastpointe;a7z7hk2ki
Bustleton;a1c83l3pi
Gillette;ad15qy2ji
Valparaiso;a577662bi
Midvale;a2t5962ji
Spring Valley;a4786c3pi
Rome;aa182e3pi
Lewiston;aiy4uy38i
West Village;a3586f3pi
North Ridgeville;a4z7k63pi
Petersburg;9tf7x03pi
Santa Rosa Beach;9ag78h2bi
Ken Caryl;9zy5s12ji
Randallstown;9zd7yo3pi
Westlake;a567kg3pi
Bangor;aeg8kz3pi
Clermont;95b7kv3pi
Sun Prairie;a9y7072bi
Georgetown;9w57d43pi
Greater Grand Crossing;a6074n2bi
Fairbanks;by42ho1gi
College Park;9ya7ya3pi
Springville;a1l59z2ji
Natick;a7g8dt3pi
Massillon;a3c7lk3pi
Walla Walla;ahy4ra38i
Florence;9yc7cx3pi
Andover;afn6ov2bi
Hopkinsville;9sf74z2bi
Overbrook;a138303pi
Laramie;a4r5qp2ji
Greenville;9it6v22bi
West Englewood;a6274h2bi
Bethel Park;a217po3pi
Cookeville;9qg7ai2bi
Randolph;a748eo3pi
Oceanside;a2w87g3pi
Danville;a1g74l2bi
Helena;ajf58s2ji
Montgomery Village;9yu7xk3pi
North Olmsted;a527kg3pi
Land O' Lakes;94e7iy3pi
Watertown;a7p8ea3pi
Glastonbury;a5v8ab3pi
Westmont;9ka4re38i
Hyde Park;a7e8eg3pi
Garfield;a3k8653pi
Laguna Hills;9jd4t138i
West Bend;aan7322bi
Willingboro;a178413pi
Cicero;a9y80k3pi
Mundelein;a7e73k2bi
Centereach;a3i88y3pi
Juneau;bfy3im33i
Mount Juliet;9qk77o2bi
Naugatuck;a598933pi
San Luis;9g95163vi
Brighton Beach;a2q86k3pi
Michigan City;a5v76m2bi
Dania Beach;8yd7pe3pi
Makiki / Lower Punchbowl / Tantalus;8l81pl9fi
Lewiston Orchards;aiu4v238i
Lexington;a7x8e63pi
Chatham;a5y74n2bi
Navarre;9ag76q2bi
Holly Springs;9p17t13pi
Shawnee;9o56er2bi
Brentwood Estates;9q376y2bi
Galesburg;a3r6wz2bi
Bowling Green;a4x7fn3pi
Des Moines;alo4g838i
Wheat Ridge;a0h5s42ji
Florence;9hr5al3vi
Gurnee;a7p73u2bi
Myrtle Beach;9jl7sv3pi
Parkersburg;9z37lg3pi
Miami Lakes;8xz7ox3pi
Saratoga;9ti4h238i
East Lake;9437ib3pi
Banning;9k94vc38i
Goleta;9lo4n538i
Lakeside;99p7kv3pi
Long Branch;a1y86h3pi
Fair Oaks;9xc4j538i
Wayne;a1882l3pi
Lake Stevens;ane4gy38i
Dover;aa08f53pi
Radnor;a1982o3pi
Holladay;a2z59e2ji
Herriman;a2j58t2ji
South Kingstown;a558dc3pi
Estero;8zg7kr3pi
Ithaca;a7w7zi3pi
North Tonawanda;a9k7sy3pi
Brooklyn Center;af86or2bi
Pikesville;9zd7yw3pi
New Iberia;99c6sy2bi
Alamogordo;9he5po2ji
Parkville;9ze7ze3pi
Statesboro;9g57ku3pi
Morgantown;a037pw3pi
Los Gatos;9tf4h738i
Matthews;9nk7ns3pi
Los Altos;9tv4gt38i
Clearfield;a4758t2ji
Franklin;a6w8do3pi
Owings Mills;9zi7yq3pi
Hawai‘i Kai;8l61py9fi
Aiken;9j87l03pi
Plainfield;a0a78030i
Ballwin;9x86wh2bi
Manchester;a628ak3pi
Algonquin;a7572r2bi
Bel Air North;9zv7zv3pi
Newington;a5u8a03pi
Westfield;a2y85h3pi
Santa Paula;9lf4pa38i
Fallbrook;9iq4ub38i
Eldersburg;9zg7y93pi
Sherwood;9mq6ru2bi
Springfield Gardens;a2y8743pi
Lawrenceville;9kc7ep3pi
Springfield;9xr7xl3pi
Kaysville;a405922ji
Granger;a5z78t30i
Burlingame;9ue4g338i
Post Falls;amk4v538i
Liberty;9z16lq2bi
West Roxbury;a7g8ed3pi
San Pablo;9vg4g538i
Savage;aee6oq2bi
Poughkeepsie;a5u86o3pi
Texarkana;9iw6ms2bi
North Royalton;a4r7l03pi
Chicago Heights;a5b74k2bi
Lebanon;9ql78b2bi
Walnut;9ki4sl38i
Madison Heights;a817h52ki
DeLand;96n7m63pi
Cedar City;9uo55y2ji
Parkland;8z37p43pi
West Warwick;a5u8dc3pi
Jamestown;a6y7rw3pi
New Bern;9nj7y03pi
Rochester;aaa8eu3pi
Cleburne;9fv6dh2bi
Ashmont;a7g8el3pi
Winter Park;95g7m23pi
Carney;9zf7zg3pi
Southlake;9hi6e72bi
San Carlos;9u74ge38i
Woodstock;9kq7d83pi
East Hill-Meridian;alp4gn38i
Niles;a6q7442bi
Laplace;99j6wo2bi
Westchester;8xj7ov3pi
Atascadero;9ol4kt38i
Kent;a4b7m03pi
Gloucester;a8d8fq3pi
Nicholasville;9v87d33pi
Oak Park;a7y7gy2ki
Highland Park;a767442bi
Elizabethtown;9up79i3pi
Austintown;a467no3pi
East Palo Alto;9u34gq38i
South Gate;9yp7z53pi
Pueblo West;9wj5t42ji
Port Chester;a3w87d3pi
Princeton;a2384m3pi
Fort Cavazos;9ch6ce2bi
LaGrange;9hs7bt3pi
Salem;a8v8e83pi
Opelika;9gp7au2bi
Rahway;a2t85o3pi
Middle Village;a3486s3pi
North Chicago;a7l7402bi
Morristown;9ql7gn3pi
Cheshire;a5a89i3pi
Branford;a4o89q3pi
Raytown;9yd6lm2bi
Fruit Cove;99n7l83pi
Port Huron;a9d7j22ki
Glenville;a9986b3pi
Tewksbury;a8d8e53pi
Franklin Square;a3387c3pi
Oak Ridge;9q17dx3pi
Longfellow Community;aeu6p12bi
Southgate;a797gx2ki
East Haven;a4o89l3pi
Upper Alton;9y36xl2bi
Johnston;a668dd3pi
Atwater;9tr4kz38i
West Falls Church;9xy7xl3pi
Williamsport;a4k7y43pi
Duluth;9kg7ea3pi
Fort Bragg;9nm7sj3pi
Russellville;9o06pb2bi
Sanford;9ok7s23pi
Harker Heights;9cc6cq2bi
Burbank;a5x7462bi
Marion;a2o7a230i
Granite City;9xi6xl2bi
Milford Mill;9zb7yr3pi
Lake in the Hills;a7672n2bi
Evans;9j57jv3pi
O'Fallon;9x76y92bi
Fort Hamilton;a2u86d3pi
Carlsbad;9g25uh2ji
Ferry Pass;9ar75r2bi
Airport;8la1pb9fi
Kingman;9nr5373vi
Orcutt;9mv4lg38i
Henderson;9v474p2bi
Needham;a7g8e53pi
Crown Point;a5275b2bi
Big Spring;9fl6242bi
Dracut;a8j8dy3pi
Allston;a7o8ef3pi
Schererville;a587532bi
Burton;a9g7fq2ki
Ridgecrest;9oy4t538i
Windsor;a698a83pi
Eagle Pass;95r64u2bi
Agawam;a6v8ab3pi
Weatherford;9h06cc2bi
West Elkridge;9yx7yv3pi
East Chicago;a5o7532bi
Redmond;acz4jf38i
Jacksonville;9mv6s52bi
Socorro Mission Number 1 Colonia;9dw5or2ji
Norwood;a778e83pi
Northampton;a7l8a83pi
Englewood;a3l86j3pi
Lake Magdalene;93z7ix3pi
Perry Hall;9zh7zm3pi
Maryville;9pc7er3pi
Hobart;a5d75m2bi
Fresh Meadows;a358713pi
Frankfort;9w47c93pi
Mehlville;9wz6x42bi
Greer;9n27jl3pi
Lansing;a5g74u2bi
Harrison;a3t8793pi
Monterey;9ro4hf38i
Desert Hot Springs;9kc4we38i
West Islip;a3388d3pi
American Fork;a2659g2ji
Central;9av6v42bi
Newburgh;a5a86f3pi
McCully - Moiliili;8l51pl9fi
Chamblee;9k57du3pi
Millville;9zg83k3pi
North Andover;a8m8ee3pi
SeaTac;alt4gb38i
Elmira;a6x7yn3pi
Spring Valley;9gy4v038i
Stockbridge;9j67e13pi
Glen Ellyn;a6c73d2bi
Monroeville;a2a7qd3pi
Benicia;9vp4go38i
Fredericksburg;9we7wu3pi
Suisun;9w84h038i
Aberdeen;aga6af2bi
Cranberry Township;a307ph3pi
Garfield Heights;a527lb3pi
South Chicago;a5y74t2bi
Cornelius;9ol7ne3pi
Oakdale;aew6ps2bi
Oak Forest;a5k74a2bi
Garner;9p77tn3pi
Holmesburg;a1883l3pi
Drexel Hill;a0z82v3pi
Vestal;a6x80r3pi
North Kingstown;a5f8dh3pi
Bella Vista;9rc6m52bi
Melrose;a7y8el3pi
Fitchburg;a9c6zh2bi
Gramercy Park;a3686h3pi
Wellesley;a7i8dz3pi
Enterprise;9d079i2bi
Winchester;9qd50838i
Slidell;9a46ym2bi
University Heights;a3i86p3pi
Dodge City;9uv6662bi
West Springfield;a6z8aa3pi
Paragould;9q66wm2bi
Maywood;9kf4rp38i
Seguin;9856bw2bi
Shirley;a3c89l3pi
Livingston;a3c85l3pi
Round Lake Beach;a7p73b2bi
Sterling;9yd7wx3pi
Middletown;a5585a3pi
Fountain;9xg5t62ji
Saratoga Springs;a9o8723pi
Kirkwood;9x66wv2bi
Drexel Heights;9fa5bl3vi
Deer Park;a3888b3pi
Lafayette;a135s32ji
Fridley;af96oy2bi
West Scarborough;ab18gh3pi
Queensbury;aai87j3pi
Roslindale;a7h8eg3pi
Rexburg;abr59h25i
Wheeling;a1a7ns3pi
Shaker Heights;a577li3pi
Mililani Town;8ll1p29fi
Bergenfield;a3p86g3pi
Marshalltown;a6t6px2bi
Tucker;9k17e23pi
Nutley;a3e8603pi
Port Richmond;a1383e3pi
Lake Jackson;96n6ix2bi
Plum;a2i7qh3pi
Windsor;9x34eu38i
West Chicago;a6c7302bi
Allen Park;a7e7gv2ki
Wilmette;a6v74c2bi
Imperial Beach;9gi4up38i
Glen Cove;a3i87h3pi
Syracuse;a4558q2ji
Maryland Heights;9xj6wt2bi
Mason City;a9v6p42bi
Crofton;9yc7yz3pi
Anderson;9lu7if3pi
Eagle Mountain;a1z58v2ji
College Point;a3b86v3pi
Winchester;9yv7uw3pi
Lindenhurst;a318873pi
Spanaway;aku4fx38i
Belmont;9u84gc38i
Hunts Point;a3d86s3pi
Holbrook;a3d8903pi
New London;a4w8bq3pi
Paso Robles;9oz4kr38i
Tualatin;ag24f038i
Fleming Island;99l7l03pi
Winona;acd6tg2bi
Agua Caliente;9wg4fr38i
Thomasville;9po7pk3pi
Casselberry;95o7m33pi
Eureka;a3c4b438i
East Saint Louis;9xa6xl2bi
Garden City;9vh63t2bi
Alton;9y16xi2bi
Milton;a7d8el3pi
University Park;8xj7or3pi
Auburn;a997zb3pi
Williston;anr5w62bi
Paramus;a3q8683pi
Back Mountain;a4u80w3pi
West Milford;a4985f3pi
Jeffersontown;9w37ac34i
Garden City;a7l7gj2ki
Easton;a318323pi
Horn Lake;9n46xx2bi
Stoughton;a718ei3pi
Prairieville;9a66vb2bi
Hyde Park;a6374p2bi
Dix Hills;a3c88a3pi
Gladstone;9yw6ld2bi
Cutler Ridge;8x27ot3pi
Independence;9y67d63pi
Watertown;ac58153pi
Wooster;a3d7ke3pi
Bessemer;9is76h2bi
Merrimack;a938df3pi
Lemon Grove;9gy4ux38i
Kankakee;a4873y2bi
Wethersfield;a5v8a73pi
Bristol;9ro7jp3pi
McHenry;a7l72t2bi
Saugus;a7y8er3pi
Stevens Point;ado6z72bi
West Linn;ag14ff38i
Superior;ajs6s62bi
Tujunga;9l54rf38i
Greenville;9i26h12bi
Magna;a3358m2ji
Batavia;a6972p2bi
Cantonment;9b175e2bi
Danvers;a8a8ez3pi
Shoreview;af86p92bi
Paradise;a0g4i638i
Fremont;a536fy2bi
Smithtown;a3i88o3pi
Pearl;9fn6xn2bi
Mansfield City;a618bd3pi
Mercerville-Hamilton Square;a1r84l3pi
North Creek;amu4gm38i
Carbondale;9ut7062bi
Westport;a4a8883pi
Medina;a4a7km3pi
Bay Shore;a3588j3pi
Kahului;8k11td9fi
Leisure City;8wu7ol3pi
Vernon Hills;a7a73m2bi
Zionsville;a0z78e30i
Norco;9k94th38i
Wasco;9ov4oi38i
Mount Pleasant;a8m73y2bi
Fortuna Foothills;9gq5273vi
Barberton;a3x7lb3pi
Kingsville;92g6c62bi
Statesville;9pe7nb3pi
Plainview;a3a87x3pi
Laurel;9ym7yj3pi
Carrollton;9ja7bo3pi
South Pasadena;9ks4rt38i
Howard Beach;a2y86w3pi
Englewood;a6274j2bi
Four Corners;94p7l73pi
South Laurel;9yj7yj3pi
Asheboro;9p77qb3pi
Buenaventura Lakes;94q7m13pi
Clinton;a686xh2bi
Mount Pleasant;ab47cj2ki
Twentynine Palms;9ku4xn38i
Huntley;a7572d2bi
Pennsport;a0x8393pi
Xenia;a087ev3pi
Reisterstown;9zn7yl3pi
Central 14th Street / Spring Road;9y67y13pi
Green;a3r7lo3pi
Brawley;9hm4z338i
Yukon;9on6cg2bi
Ellendale;9nv6yh2bi
Opportunity;amd4uc38i
Forest Hills;a9c7aj2ki
Lafayette;9v94gs38i
Ramsey;afq6of2bi
Suitland;9xx7yc3pi
Pleasure Ridge Park;9vz79i34i
Rosedale;a2y8763pi
New Lenox;a5b73n2bi
Madison;9g66xo2bi
Neenah;acr72a2bi
Alvin;97q6jg2bi
Key West;8u87ku3pi
Randolph;a3h84u3pi
Temple Terrace;93w7j53pi
Owatonna;acg6p12bi
Homewood;9iz76w2bi
Sahuarita;9es5bs3vi
Maple Valley;aln4gz38i
Hazelwood;9xp6wz2bi
Troy;a187e43pi
Lemoore;9qu4na38i
Mint Hill;9nq7nz3pi
Ridgewood;a3u8643pi
Long Island City;a3686l3pi
Cabot;9n56se2bi
Rhawnhurst;a1a83i3pi
Reedley;9ro4o738i
Edgewood;9zi8033pi
Meadow Woods;94v7lz3pi
South Portland;ab88gw3pi
West Whittier-Los Nietos;9ke4s138i
Lebanon;a227zr3pi
Zanesville;a0y7k73pi
Colleyville;9hc6e42bi
Canton;9l47db3pi
Ossining;a4c86u3pi
Salem;9tl7pn3pi
Burlington;a3d6ux2bi
Saratoga Springs;a235962ji
Melrose Park;a6e73y2bi
Starkville;9ix71a2bi
Lochearn;9za7yw3pi
Chanhassen;aem6o72bi
Hercules;9vm4gb38i
Galt;9w94j238i
Prior Lake;ae76oi2bi
Castlewood;9zy5sm2ji
Grandview;9y16lf2bi
Clinton;9fu6x42bi
Yarmouth;a5v8gx3pi
Sandusky;a557i93pi
Balch Springs;9gx6fm2bi
White Bear Lake;af86pn2bi
Chaska;aef6o02bi
Harvey;a5l74j2bi
Middle River;9z97zo3pi
Woodstock;a7j72b2bi
Ardmore;9kx6e62bi
Lockport;a5j73e2bi
Woodburn;afe4eq38i
Wyandotte;a797h12ki
Mauldin;9mm7jd3pi
Belvidere;a7e7182bi
Moscow;ajt4v038i
Milford;a728dc3pi
West Memphis;9nn6xi2bi
Athens;9z97jy3pi
Mercer Island;am54gi38i
Bridgeton;9zj8313pi
Maplewood;a3585p3pi
Soledad;9r64iz38i
Farmington;a5w89p3pi
Brownsburg;a0o78030i
Saginaw Township North;aaq7en2ki
Edwardsville;9xt6y52bi
Riverside;a0i7ec3pi
Athens;9mo76f2bi
Woodbridge;9jk4st38i
Liliha - Kapalama;8la1pj9fi
Sanger;9rz4nw38i
Westmont;a6473m2bi
Wakefield;a838el3pi
San Fernando;9l84r038i
Rockledge;94r7nr3pi
Hastings;a2r6ap2bi
Cave Spring;9tf7pr3pi
North Tustin;9js4st38i
East Amherst;a9i7te3pi
Daphne;9b073u2bi
Whitehall Township;a2z82a3pi
Paducah;9t071w2bi
Cliffside Park;a3e86h3pi
Elmwood Park;a6g7432bi
Vineyard;9wu4ix38i
Lodi;a3k8683pi
Hazleton;a3s80z3pi
Coronado;9gt4ui38i
Hillside;a338713pi
Eagle River;boc2cj1gi
South Salt Lake;a345972ji
Paris;9ji6ik2bi
Mō‘ili‘ili;8l51pl9fi
Northport;9ib74q2bi
Uniondale;a3287l3pi
University Park;9h96f42bi
Ponca City;9rz6eb2bi
Muskego;a977362bi
Collinsville;9xf6y22bi
Reading;a858ei3pi
Belmont;a7s8ea3pi
Dedham;a7c8eb3pi
Short Pump;9ul7wf3pi
De Pere;adh73e2bi
Caledonia;a8x73s2bi
Inkster;a7h7gl2ki
Vincentown;a0x84d3pi
Bixby;9pu6ho2bi
Emporia;9wo6gu2bi
Fort Dodge;a826mf2bi
Walker;a9g79r2ki
Ottumwa;a3y6rb2bi
Junction City;9yf6f12bi
Seal Beach;9jq4ry38i
Tarpon Springs;9477i43pi
Franklin;9zo78z30i
Herndon;9y97x13pi
Austin;abb6pr2bi
Sachse;9hm6fo2bi
Sun City West;9ji57y3vi
Watauga;9ha6dv2bi
Burlington;a828e83pi
San Benito;8yl6ct2bi
Freeport;a7i6z22bi
Forest Grove;agg4e138i
Palmetto Bay;8x67ow3pi
Staunton;9vz7sd3pi
Selma;9rl4nr38i
South Windsor;a668aa3pi
North Potomac;9yk7xe3pi
Homer Glen;a5k73q2bi
Coral Terrace;8xj7oy3pi
Norfolk;a6r6de2bi
Ridgeland;9g36xn2bi
Scaggsville;9yr7ye3pi
Cudahy;9kc4rp38i
Washington;9t554p2ji
New Smyrna Beach;96n7n73pi
South Plainfield;a2q85b3pi
Pasadena;9yo7zb3pi
Columbine;9zz5s52ji
Greenbelt;9yc7yg3pi
South Riding;9y47wq3pi
Citrus Park;9407in3pi
Boca Del Mar;8z77pd3pi
Newport;a598dx3pi
Norton Shores;a9x78e2ki
Barstow Heights;9mv4uu38i
Rockville Centre;a2y87g3pi
Searcy;9nx6t62bi
North Platte;a486432bi
Rolling Meadows;a6w73j2bi
Carteret;a2q85t3pi
Immokalee;8ze7lu3pi
Woodlawn;a6274o2bi
Medford;a3e8983pi
Lawndale;a1983f3pi
Riverbank;9uu4k238i
Zion;a7x7412bi
Trotwood;a0k7dt3pi
North Haven;a4z89m3pi
Summerlin South;9qc4zn38i
Mahwah;a458623pi
Loma Linda;9kl4ua38i
Peekskill;a4p86o3pi
Keystone;9487ii3pi
Baldwin;a2y87j3pi
Fairfax;9xx7x93pi
Maywood;a6c7402bi
Sebastian;93a7oh3pi
Holt;a8g7d82ki
Muscatine;a526v42bi
Elk River;afu6o32bi
Rock Springs;a5j5go2ji
Golden Gate;8yr7l23pi
Corsicana;9f66g12bi
Hialeah Gardens;8xv7ow3pi
Waverly;a8q7cy2ki
Hunt Valley;9zq7z43pi
Fuquay-Varina;9ou7t43pi
Fountain Hills;9jd59o3vi
Unionport;a3f86v3pi
Champlin;afj6ok2bi
South Portland Gardens;ab88go3pi
Centerville;a037e83pi
Bloomington;9kn4tw38i
Bainbridge Island;amb4fo38i
Marshall;9ge6lv2bi
Morrisville;9pi7t13pi
Watertown;a9z71j2bi
Kernersville;9qc7pl3pi
Dickinson;ak85yh2ji
Old Bridge;a2985f3pi
Fort Washington;9xj7y23pi
Dinuba;9ri4od38h
Van Nest;a3h86u3ph
Barstow;9my4uy38h
Fairland;9yk7y83ph
Brookings;ad36f42bh
Blue Island;a5q74g2bh
Faribault;ad16ox2bh
Chestnut Hill;a7l8eb3ph
Baileys Crossroads;9xx7xr3ph
Eagle;abe4wt25h
Norland;8y37p73ph
Scotch Plains;a2y85d3ph
Glenville;a5d7la3ph
El Cerrito;9vc4g938h
Brandon;9fn6y12bh
Derby;9ub6dt2bh
Frankford;a1583g3ph
Graham;akp4gb38h
Ilchester;9z17ys3ph
Bayonet Point;94p7ic3ph
Easton;a6q8ef3ph
Loves Park;a7k70m2bh
Avon Lake;a5b7k53ph
San Lorenzo;9un4gr38h
Morton Grove;a6s7462bh
Kingston;a6h86g3ph
McDonough;9ix7e93ph
Romulus;a7a7gc2kh
Rosemount;aea6pb2bh
Northwest One;9y27y33ph
Mansfield;a6r8e63ph
Eloise;93r7ky3ph
Laguna Beach;9j64su38h
Springfield;a0x82s3ph
Bellview;9am75h2bh
Manoa;8l81po9fh
Terrytown;9936xx2bh
Crestview;9bg77j2bh
Keene;a998b83ph
Greenwood;9l07js3ph
Gallup;9op5hy2jh
South Old Bridge;a2985h3ph
Duncan;9lu6bw2bh
Dupont Circle;9y37y03ph
Griffin;9id7dy3ph
Dolton;a5o74n2bh
Webster Groves;9x76x02bh
Belton;9xt6lf2bh
Columbus;9j272d2bh
Denison;9js6fu2bh
East Elmhurst;a3886t3ph
Kerrville;99h68m2bh
Pooler;9f87mb3ph
Mequon;aa273h2bh
Vicksburg;9fv6vk2bh
Morrisania;a3f86p3ph
Wright;9am77c2bh
Pacific Palisades;9kl4qr38h
Palm City;91h7p13ph
Middleborough;a6d8f13ph
Arnold;9yf7zi3ph
Isla Vista;9ll4n238h
Vero Beach South;92q7on3ph
Van Buren;9og6lx2bh
East Peoria;a2z6z62bh
Landover;9y57ye3ph
Windham;a5u8bk3ph
Jacksonville Beach;9a57lx3ph
Calabasas;9kw4qg38h
Solon;a4z7ls3ph
Chantilly;9y17wx3ph
Candler-McAfee;9jp7dx3ph
Roselle;a6m73c2bh
Copiague;a308843ph
Westpark;9jl4sr38h
Munster;a5g74x2bh
Ladera Ranch;9j94t838h
Lisle;a6473d2bh
Picnic Point-North Lynnwood;amy4gb38h
East Naples;8ym7kv3ph
Crystal;af36oo2bh
Cloverleaf;98q6jn2bh
Dixiana;9jq77b2bh
Highland;a5f7532bh
Machesney Park;a7n70o2bh
Morgan Park;a5t74h2bh
Noe Valley;9uv4fx38h
East Tremont;a3h86r3ph
Pelham;9ih76v2bh
Auburn;aci8gx3ph
Tremont;a3h86p3ph
Lincolnia;9xu7xq3ph
Valinda;9kl4se38h
Marysville;a1s7gf3ph
Haines City;9437la3ph
Columbus;a536dj2bh
Bristol;a5s8e13ph
Millbrae;9ug4g138h
Newberg;afu4ef38h
The Crossings;8xb7oo3ph
Valley Station;9vv79h34h
East Lake-Orient Park;93q7j63ph
Lennox;9ka4r938h
Farmington;ae06pa2bh
Wilsonville;afu4ez38h
Hutto;9au6d12bh
Bloomingdale;93h7jk3ph
Inglewood-Finn Hill;amk4gh38h
West Odessa;9eg5za2bh
Oak Harbor;ao54fc38h
‘Ewa Gentry;8la1p19fh
Oak Ridge;9537lu3ph
Rosemont;9x34iw38h
Auburn Hills;a8l7gt2kh
Pottstown;a1t81v3ph
West Puente Valley;9kl4sb38h
Maple Heights;a527lf3ph
Willoughby;a5o7lv3ph
Benbrook;9gr6da2bh
Cranford;a2y85m3ph
Garden City;a3587h3ph
Farmington;a3u5972jh
Wasco;a6i72g2bh
Hastings;aea6q32bh
Avon;a557k43ph
Visitacion Valley;9us4g038h
North Augusta;9j27kb3ph
Guilford;a4p8a43ph
Cottage Lake;amm4gw38h
Corcoran;9qa4nw38h
Melrose;a3e86p3ph
East Patchogue;a398983ph
West Springfield;9xp7xi3ph
Wahiawā-Whitmore;8lr1p19fh
Hudson;a4k7ls3ph
Port Hueneme;9kv4ow38h
Holiday;94b7i63ph
Near South Side;a6a74m2bh
Radcliff;9v47993ph
Hopewell;9tm7xb3ph
New Castle;a3w7ot3ph
Grand Boulevard;a6574m2bh
South Elgin;a6n72r2bh
New Brighton;af76p42bh
Prichard;9be73c2bh
Anniston;9ji79l2bh
Palm Springs;9007pi3ph
Ruston;9gc6qo2bh
Wilmington;a878eb3ph
Midlothian;9g86el2bh
Oxford;9lh6zc2bh
Oakdale;9ux4kb38h
Darien;a5z73n2bh
Bloomingdale;a6k73c2bh
Northwood;9jn4sw38h
Venice;91a7iz3ph
Ludlow;a748ao3ph
South Bradenton;92a7im3ph
Hillside;a3285t3ph
Foggy Bottom;9y27xy3ph
North Plainfield;a2v8593ph
Acworth;9kn7cs3ph
Pascagoula;9ad7202bh
Sunny Isles Beach;8y37pg3ph
Roseburg;aa24de38h
Oxford;9zr7cl3ph
Merrick;a2y87p3ph
Somerset;a2i8533ph
Moses Lake;akx4oo38h
Greater Northdale;9437ir3ph
Northdale;9417it3ph
Saginaw;9ha6dk2bh
Summit;a3485g3ph
Watertown;aeq6e82bh
Alliance;a3o7mp3ph
Kalispell;anw52h2jh
South Holland;a5k74n2bh
Kenmore;amo4gg38h
Del City;9og6dc2bh
Derry;a948dv3ph
Hamtramck;a7r7hb2kh
Great Kills;a2n8613ph
Wekiwa Springs;95q7lt3ph
Leesburg;9617kk3ph
Duarte;9ku4sa38h
Converse;9806aw2bh
Villa Park;a6d73l2bh
Decatur;9jt7du3ph
Park Forest;a5974h2bh
Christiansburg;9t57on3ph
Jurupa Valley;9kf4tk38h
Logan;a178393ph
Ashland;9up4gt38h
West and East Lealman;93a7ib3ph
Farragut;9po7e93ph
La Porte;a5l7752bh
Mount Vernon Triangle;9y27y23ph
Prairie Village;9yb6l52bh
Smithfield;a6g8d93ph
Clarksville;9we79s34h
Wadsworth;a3z7kz3ph
Camas;agn4g038h
Fort Walton Beach;9ai77e2bh
Geneva;a6d72p2bh
Brent;9an75o2bh
South Euclid;a5c7lk3ph
Brushy Creek;9ar6ci2bh
Sugar Hill;9kr7el3ph
Westchase;93y7ij3ph
Chillicothe;9z97hi3ph
South Lake Tahoe;9y54mq38h
Anthem;9k358h3vh
West Carson;9jy4rf38h
Massapequa;a3087x3ph
Canton;a748ee3ph
Lincoln;a6g8dk3ph
Roselle;a2x85q3ph
Lumberton;9m67sj3ph
Taylors;9n07je3ph
Yucca Valley;9kr4wl38h
Westford;a8a8dk3ph
Rittenhouse;a0z8373ph
Edgewater;96j7na3ph
Allison Park;a2o7pw3ph
Bloomfield;a6789z3ph
Bay Point;9vn4h838h
Portsmouth;a9o8fg3ph
Sedalia;9xi6p12bh
Naples;8ym7ks3ph
Patterson;9u34jj38h
Greenfield;a0j79r30h
Waynesboro;9vr7sv3ph
H Street NE;9y27y43ph
Albertville;9l778j2bh
Wissinoming;a1683i3ph
Stoneham;a808ei3ph
Tustin Legacy;9jm4sp38h
Basking Ridge;a3384x3ph
Perrysburg;a5g7fp3ph
Erie;a195s72jh
Clinton;a4a58r2jh
Klamath Falls;a7a4hq38h
Green Valley;9eh5bp3vh
Evans;a265t72jh
Mandan;ak363r3qh
Winchester;a7x8ee3ph
Okemos;a8o7dh2kh
Arnold;9wr6wy2bh
East Moline;a5a6ws2bh
West Pensacola;9aj75k2bh
Kinston;9ny7wi3ph
Shelbyville;9ok77u2bh
Marquette;aja7582kh
Fairfield Heights;a0n78230h
Biddeford;aat8gb3ph
Golden Valley;af16op2bh
Canyon Lake;9906b22bh
Conda;a8p5a725h
Oxford;9jd79l2bh
South Milwaukee;a9773y2bh
Marina;9rw4ho38h
Mukilteo;an64ga38h
Rancho San Diego;9gz4v638h
Charleston;9zq7322bh
Bedford;a9b8dc3ph
Pleasant Plains;9y57y13ph
Carrboro;9pr7sc3ph
Crest Hill;a5f73a2bh
Saint Andrews;9kk7mq3ph
Ashland;9ww7ig3ph
Hays;9y06832bh
ʻEwa Beach-Iroquois Point;8l81p59fh
Mililani Mauka;8lo1p59fh
Ferguson;9xm6x52bh
Conway;9k07sf3ph
Laurelton;a2z8753ph
Lino Lakes;afg6pf2bh
West Lake Stevens;anb4gu38h
New Hope;af46ol2bh
Palm River-Clair Mel;93k7j63ph
Trussville;9je77f2bh
Woodrow;a2m85x3ph
Corinth;9i36ee2bh
Mountlake Terrace;amr4g938h
Chester;9ts7ww3ph
Nixa;9sw6ov2bh
East Ridge;9n97b73ph
Makakilo-Makaīwa Hills-Kunia;8ld1ox9fh
Plainview;9ky61h2bh
Agoura Hills;9ku4q338h
Grayslake;a7m73g2bh
Acton;a818dl3ph
Sanford;aao8ff3ph
Silver Firs;amz4go38h
Hauppauge;a3f88o3ph
Kīhei;8jo1tf9fh
Kaimukī;8l41po9fh
South El Monte;9kl4s338h
Arvin;9nt4px38h
Johnston;a5r6nq2bh
Gardner;9xt6kb2bh
Lathrop;9v24j438h
Ashland;a774f538h
Sidney;a1w7e83ph
Birmingham;a877gv2kh
Sweetwater;8xk7or3ph
Milwaukie;ag94fc38h
East Millcreek;a3259f2jh
Grand Island;a9j7so3ph
Union City;9jb7d63ph
Woodlawn;9xk7xr3ph
Piqua;a1i7e03ph
Lomita;9jv4rc38h
Cockeysville;9zo7z43ph
Easley;9mr7ik3ph
New Springville;a2r8603ph
Pleasantville;9zf8503ph
Liberal;9sw63o2bh
Palisades Park;a3h86g3ph
Jenks;9q26hf2bh
Latham;a8r8743ph
Simpsonville;9mi7jj3ph
Darien;a4487x3ph
Pleasant Prairie;a8773r2bh
NoMa;9y27y33ph
Adrian;a6e7ek2kh
Chambersburg;a0y7wa3ph
Mountain Brook;9j27712bh
West Melbourne;93z7nz3ph
East Garfield Park;a6c74e2bh
Rotterdam;a8v86j3ph
Lakeside;9ha4v838h
Kalihi Valley;8lc1pk9fh
Bethany;agk4ep38h
Lake Worth Corridor;8zy7pi3ph
Winter Gardens;9h74v738h
Lockport;a9x7tf3ph
Lebanon;9zk7e43ph
Wade Hampton;9my7jb3ph
Murphy;9hq6fn2bh
Coralville;a5s6tm2bh
Ensley;9as75l2bh
Sapulpa;9q06h12bh
American Canyon;9w14ge38h
South San Jose Hills;9kh4si38h
Belton;9ca6da2bh
Agoura;9ku4q638h
Bayville;a0v8613ph
Arbutus;9z17yy3ph
Hammond;9aq6wq2bh
Schofield-Wheeler;8lo1oz9fh
Libertyville;a7g73p2bh
Pittsburg;9tx6ky2bh
Portsmouth;9xl7hg3ph
Granite Bay;9xo4jg38h
Charlestown;a7q8em3ph
Louisville;a125rz2jh
Northfield;adi6p82bh
Rocky River;a587ko3ph
Raymore;9xs6ln2bh
Middletown;9zl81o3ph
Havelock;9mw7ye3ph
Harvey;9926xs2bh
Gardner;a8a8c03ph
Golden;a0g5rq2jh
Douglas;a6774m2bh
Cartersville;9kx7cg3ph
Ashland;a3j7jc3ph
Oakleaf Plantation;99t7ko3ph
Affton;9x36x32bh
Ramona;9hs4vd38h
Cambria Heights;a318763ph
Elko;a3f4yg38h
Elmwood Park;a3m8643ph
Hollis;a338733ph
Brooklyn Heights;a3286h3ph
Nogales;9d25bv3vh
La Cañada Flintridge;9l04rp38h
Parma Heights;a4z7kw3ph
Mustang;9oa6ck2bh
Rose Hill;9xr7xt3ph
East Northport;a3k88c3ph
Glen Avon;9kh4to38h
Shelby;9o17li3ph
Sulphur;9a06om2bh
Montville Center;a588bl3ph
Ferndale;a7y7h32kh
South Saint Paul;aep6pl2bh
Lents;agc4fj38h
Lynn Haven;9a17a32bh
Lake Ronkonkoma;a3g88v3ph
Millburn;a3485m3ph
Lexington;9ke7mc3ph
Murrysville;a2b7qm3ph
Cumberland;a057t83ph
Stephenville;9fi6b82bh
Oregon;a5o7g33ph
Eastmont;an24gm38h
Monroe;a6g7gc2kh
Coconut Grove;8xf7p23ph
West Mifflin;a247q53ph
Haddington;a118303ph
Mill Creek;amy4gk38h
Pace;9b075w2bh
Miamisburg;a047dv3ph
Palm Valley;99u7lx3ph
Rolla;9vf6t32bh
Tukwila;alv4ge38h
New Caney;99s6jj2bh
DeBary;9687m53ph
Lyndhurst;a3d8643ph
Germantown;aa37392bh
Lake Zurich;a7873b2bh
Bryant;9m46r32bh
Eustis;9657l33ph
Universal City;9836az2bh
Newburg;9w07a234h
Johnstown;a217ss3ph
Socastee;9jk7sk3ph
Ypsilanti;a7c7fr2kh
North Bellmore;a3187r3ph
Hayesville;aez4ee38h
King of Prussia;a1d82k3ph
Cortlandt Manor;a4o86t3ph
Warrensburg;9xo6nm2bh
Mokena;a5d73v2bh
Norwood;9ys7de3ph
Mariners Harbor;a2w8603ph
Bonney Lake;al24gl38h
Dickinson;97u6jz2bh
Clifton;9yl5ir2jh
Lealman;93a7ic3ph
Waikīkī;8l51pk9fh
Hermosa Beach;9k24r438h
Selden;a3j8943ph
Clemmons;9q27oq3ph
West Chester;a1081z3ph
Evergreen Park;a5w74e2bh
Southbury;a5888n3ph
Baldwin;a227pu3ph
Marblehead;a828f63ph
Norton;a6l8e93ph
Plattsburgh;ae687z3ph
North Salt Lake;a3h5952jh
Sand Springs;9qe6h12bh
Painesville;a5w7mb3ph
Diamond Head / Kapahulu / Saint Louis Heights;8l41pn9fh
Greenfield;a8b8ac3ph
Hartranft;a128393ph
Pickerington;a0s7i53ph
New Canaan;a4b87v3ph
Albany;9v94ga38h
Snellville;9k27em3ph
Fox Chase;a1c83g3ph
Sparta;a3z84o3ph
Columbia Heights;af46oy2bh
Holtsville;a3e8933ph
Salmon Creek;agz4fb38h
Kingsessing;a0y8313ph
La Crescenta-Montrose;9l34rk38h
Spanish Lake;9xr6xe2bh
Willmar;afc6k02bh
Tysons;9y47xh3ph
Forest Lake;afs6pp2bh
Bethany;9oo6ct2bh
Sun City;9jn4ug38h
Montclair;9x97x63ph
Lynbrook;a2x87d3ph
Orchards;agv4fk38h
Eastchester;a3s86z3ph
Payson;a1859n2jh
West Saint Paul;aes6pe2bh
Madisonville;9tp74y2bh
Ives Estates;8y47pa3ph
Selma;9g176a2bh
Papillion;a4b6h82bh
Montgomery;a5x72l2bh
Badger;by02i71gh
Seymour;9y879f30h
Lake Shore;9yn7zk3ph
McKeesport;a237q63ph
Pinecrest;8xb7ox3ph
Weirton Heights;a297oa3ph
Port Angeles;ano4d538h
Hazel Dell;agv4fa38h
Angleton;9716ix2bh
Fernley;a014or38h
Alice;9336bl2bh
Lake Forest;a7e7402bh
Battle Ground;ah64fn38h
Dixon;9wt4hm38h
Forest Park;9je7dn3ph
Mamaroneck;a3r8773ph
Homewood;a5g74h2bh
Bear;a0381u3ph
Bayou Cane;98a6vx2bh
Orange;99l6nm2bh
Alsip;a5r74a2bh
Lutz;9477iy3ph
Green Haven;9yq7zd3ph
Lexington;9pi7p33ph
Bellwood;a6c73w2bh
Clayton;9p17u23ph
Central Falls;a6d8dp3ph
Sun Valley;a004na38h
Horizon City;9e15oz2jh
Sherwood;ag04es38h
Waterford;a4u8bm3ph
Orinda;9v84gm38h
Pinole;9vk4ga38h
Woodbridge;a2o85o3ph
Sun City Center;9307j93ph
Altamont;a794hu38h
Rosedale;9z87zg3ph
Howard;adq73b2bh
Niu Valley;8l41pu9fh
Alamo;8yq6bg2bh
Broadview Heights;a4r7l33ph
Upper Saint Clair;a227pk3ph
Haslett;a8r7dk2kh
West Elsdon;a6374c2bh
Glassboro;a0a83d3ph
Newton;9vp6dl2bh
Altus;9m86832bh
Blythe;9jd51o38h
Silverdale;amc4f738h
Covington;alk4gs38h
Matteson;a5a74d2bh
Tumwater;akl4el38h
Old Jamestown;9xv6x72bh
Weirton;a2a7o53ph
White Oak;9yx7d03ph
Carlisle;a1o7xl3ph
Mineola;a3787g3ph
Shelbyville;9zs79q30h
Tullahoma;9o878j2bh
Ozark;9su6p32bh
Secaucus;a3b86a3ph
Jacksonville;a0d6xd2bh
Fairwood;alt4go38h
Madison;a4o8ac3ph
Camp Springs;9xs7yd3ph
Ronkonkoma;a3e88u3ph
Saco;aau8gc3ph
Maple Shade;a0z83p3ph
Hawthorne;a3r8613ph
East Massapequa;a2z8803ph
Fresno;9826iv2bh
Amherst Center;a7q8ak3ph
Montrose;9ww5kc2jh
Marion Oaks;96l7jq3ph
Brownwood;9e36912bh
Southbridge;a6w8bx3ph
Deerfield;a757402bh
Castaic;9lt4qi38h
Ennis;9ft6fl2bh
Ellensburg;akk4l538h
Columbia City;am44gc38h
Claremore;9qv6ie2bh
Waukee;a5l6n72bh
Jasmine Estates;94l7ib3ph
Melville;a3b8823ph
Kew Gardens;a3386x3ph
Petworth;9y77y23ph
Middleton;a9q6ze2bh
Bartow;93i7ko3ph
Sylvania;a5w7fh3ph
Rio Rico;9df5bq3vh
Ala Moana - Kakaʻako;8l61pi9fh
Murray;9rp72p2bh
Arlington;anw4gr38h
North Druid Hills;9jy7dt3ph
Brookfield;a6673z2bh
North Bay Shore;a3788i3ph
Stonegate;9jn4sy38h
Avon;a6589p3ph
Milledgeville;9hw7gt3ph
Stillwater;af66q72bh
Cortland;a8c80e3ph
Augusta;ad38i63ph
Berea;a4x7kn3ph
Capitol Riverfront;9y07y43ph
Twinsburg;a4r7ls3ph
Wantagh;a3087t3ph
West Hempstead;a3287f3ph
Ansonia;a4v8903ph
Troy;9ed7972bh
Mayfield Heights;a5c7lq3ph
Laurel;9e170f2bh
Syosset;a3f87u3ph
Brook Park;a507ks3ph
Union Hill-Novelty Hill;amg4h138h
Erlanger;9ye7d03ph
Park View;9y57y23ph
Rossville;a2n85v3ph
South Burlington;adj88r3ph
Mount Greenwood;a5u74d2bh
Casa de Oro-Mount Helix;9h04v338h
Langley Park;9yb7y63ph
Brigham City;a5b58u2jh
Thomasville;9bo7eq3ph
Fairmont;9zp7pe3ph
Fairhope;9as73u2bh
Mission Hill;a7l8eh3ph
Greater Upper Marlboro;9xv7yt3ph
Frederickson;aku4g438h
Iselin;a2q85k3ph
Suwanee;9kl7eh3ph
Whitehall;a117hr3ph
Rutherford;a3f8653ph
Islip;a3588n3ph
Forest Park;9z57da3ph
Westminster;9zy7y43ph
Frankfort;a5a73z2bh
Niles;a4e7nn3ph
Marshfield;ae36xj2bh
Lorton;9xi7xh3ph
Morristown;a3c8543ph
Gautier;9af71v2bh
Bourbonnais;a4b73v2bh
Goodings Grove;a5n73r2bh
Macomb;a2e6w52bh
Point Pleasant;a1c8693ph
Bellaire;98j6iu2bh
East Mount Airy;a1a8353ph
El Reno;9op6bw2bh
Chowchilla;9t44ly38h
Mead Valley;9jz4u638h
Hyattsville;9y87y93ph
Happy Valley;ag94fn38h
Onalaska;abw6uk2bh
Round Lake;a7n73b2bh
Stafford;98a6ik2bh
Yorkville;a5o72b2bh
North Ogden;a4r5902jh
Winchester;9vj7e63ph
Bensenville;a6k73q2bh
Forney;9gz6g12bh
Monsey;a478693ph
Fern Creek;9w07a934h
Shenandoah;9ag6v82bh
El Dorado;9i96ql2bh
Trenton;a727gy2kh
Ashtabula;a6b7nl3ph
Natchitoches;9e86pf2bh
Cudahy;a9c73y2bh
Dover;a3k84w3ph
Ottawa;a4v7182bh
Shafter;9om4op38h
Midlothian;9u77wb3ph
Amesbury;a928ez3ph
Franklin Park;a6i73x2bh
Meadowbrook;9u17wt3ph
McAlester;9n16hz2bh
Punta Gorda Isles;90s7k03ph
Palestine;9e86id2bh
Sherrelwood;a0o5sc2jh
Creve Coeur;9xe6wu2bh
Ballenger Creek;9zd7ww3ph
Cinco Ranch;98m6i02bh
Helena;9ii76s2bh
Palmer;a748b33ph
Belle Glade;9047nx3ph
Makakilo;8lb1ov9fh
Franconia;9xq7xp3ph
Eastlake;a5p7lr3ph
Manchester;9x86wl2bh
Cameron Park;9xf4jx38h
Steubenville;a257o13ph
Springboro;9zv7e13ph
Wallingford Center;a5589q3ph
Lanham-Seabrook;9y97yj3ph
Clark-Fulton;a567l13ph
Farmington;9uy6wu2bh
Pampa;9oq63k2bh
Somerset;a618ef3ph
Florida Ridge;92m7op3ph
Five Corners;agw4fi38h
Boone;9qm7l53ph
Seminole;93c7i13ph
Punta Gorda;90t7k33ph
Rosamond;9mu4rs38h
Cutler;8x67ox3ph
Mattoon;9zo72j2bh
Arroyo Grande;9nk4l138h
Anacortes;aor4ff38h
Monroe;amy4h738h
Rancho Mirage;9jq4wn38h
Limerick;a1r8283ph
Mililani Mauka / Launani Valley;8lo1p59fh
Wilton;a4g8803ph
Huntington;a3j8813ph
Ojus;8y37pd3ph
Santa Fe Springs;9kb4rz38h
Vincennes;9xg74v2bh
Amsterdam;a9a85x3ph
Durango;9tk5kc2jh
Dumont;a3q86g3ph
Hanahan;9hg7pq3ph
Central Point;a7q4ek38h
Highland;a2b59h2jh
Elizabeth City;9qt8073ph
Newburyport;a8x8f43ph
Rockland;a718f03ph
Westbrook;abc8gj3ph
St. Marys;9bd7lh3ph
Cary;a7972w2bh
Lackawanna;a8z7t23ph
Westerly;a4y8ch3ph
Maumelle;9mv6rc2bh
Leland;9l67v83ph
Wisconsin Rapids;ada6yi2bh
Lenoir;9pr7li3ph
North Massapequa;a3287y3ph
Scarsdale;a3x8723ph
Nanuet;a4586f3ph
Gretna;9936xv2bh
Sheridan;aeg5mw2jh
North Amityville;a328813ph
Tacony;a1783k3ph
Arcata;a3j4bc38h
Hannibal;a0b6u82bh
Wahiawā;8lq1p29fh
Colonial Heights;9tj7wz3ph
Marion;9ut70z2bh
Colonia;a2p85m3ph
Logansport;a3778430h
Oswego;aaq7zh3ph
Linda;9yp4id38h
Tinton Falls;a1y8663ph
Godfrey;9y86xh2bh
Portsmouth;a5k8e33ph
Times Square;a3886h3ph
West Garfield Park;a6c74b2bh
Willimantic;a5v8bf3ph
Calverton;9yi7ya3ph
Oxon Hill;9xs7y53ph
Takoma Park;9ya7y33ph
Sycamore;a6n71n2bh
Wallingford;a5689q3ph
Cocoa;94v7nq3ph
Martinsburg;9zm7vg3ph
Marco Island;8y27l03ph
Tiffin;a477gy3ph
Hunting Park;a1683a3ph
Albert Lea;ab96on2bh
Golden Triangle;9y37y03ph
South Hadley;a7e8af3ph
Juniata Park;a1583d3ph
Shaw;9y37y23ph
Ocean Springs;9ah7192bh
Hinsdale;a6473q2bh
Brightwood;9y87y13ph
New Castle;a0x7av30h
Winthrop;a7q8eu3ph
Lindenwold;a0m83o3ph
Kenwood;a6574o2bh
Bay City;96i6hf2bh
Hopkins;aes6oe2bh
Allendale;a9d7992kh
University City;a0z8353ph
Back Bay;a7n8ej3ph
Menasha;acs72b2bh
Palos Hills;a5u7422bh
Prunedale;9s64i138h
Culpeper;9wv7vc3ph
Stevenson Ranch;9lj4qn38h
South Houston;98e6jg2bh
Kirksville;a1n6qu2bh
Tallmadge;a467ls3ph
North Babylon;a3488c3ph
Mesquite;9s953538h
New Philadelphia;a2h7lr3ph
Saint Matthews;9w97a234h
Maitland;95j7m03ph
North Aurora;a6572n2bh
Safety Harbor;93r7ib3ph
North Canton;a3k7lw3ph
East Hemet;9jq4v638h
Radford;9t57o63ph
White Oak;9yg7y53ph
Tillmans Corner;9az7332bh
Detroit-Shoreway;a587kz3ph
Nicetown-Tioga;a158383ph
Wilton;a9y8763ph
Anoka;afk6ol2bh
East Cleveland;a5d7le3ph
Sudbury;a7q8dm3ph
Plainville;a5r89m3ph
Ada;9ml6fg2bh
Middletown;a5f8dz3ph
Glassmanor;9xu7y43ph
South Orange;a3785q3ph
Idylwood;9y27xj3ph
Seabrook;9y97yj3ph
Durant;9kf6gb2bh
Killingly Center;a688cd3ph
Kings Park;a3l88i3ph
Canby;afq4f738h
Poplar Bluff;9s46wx2bh
Moraga;9v34gr38h
Redland;9yr7xq3ph
Massapequa Park;a3087y3ph
Kuna;aat4wm25h
Foley;9ah74g2bh
Ruskin;9307j13ph
Hermiston;ahc4on38h
Nederland;9996mx2bh
Greenfield;9qw4j838h
Ashwaubenon;adk73d2bh
Live Oak;9sq4h638h
Frankford;9z97ze3ph
Okolona;9vy79z34h
Bayside;a3g4be38h
Wyckoff;a3x85z3ph
Woodmere;a2v8793ph
Huntington;a3k7ai30h
Imperial;9h94yz38h
Wayne;a7g7gd2kh
White Settlement;9h06da2bh
Eloy;9h05a53vh
Beckley;9uy7mh3ph
Broad Ripple;a0r78q30h
El Segundo;9k84r238h
Holden;a7n8ce3ph
Avenel;a2q85n3ph
East Setauket;a3q88x3ph
Goodlettsville;9qw7752bh
Fayetteville;9ix7df3ph
Elmwood;a0w8313ph
Colchester;adq88t3ph
Altoona;a5o6oe2bh
Terrell;9gy6gk2bh
Point Breeze;a0x8363ph
Artesia;9k34s038h
South Ogden;a4f58z2jh
La Vista;a4e6h92bh
Hanover;a6z8fb3ph
Tanque Verde;9fl5ce3vh
Glenvar Heights;8xf7ov3ph
Pendleton;agv4q138h
Centerville;a3o5992jh
Parkside;9uu4fr38h
Sayville;a368903ph
Clarksdale;9l06wf2bh
Fairview Heights;9x76y12bh
Norwalk;a4k7ii3ph
San Carlos Park;8zj7ks3ph
Concord;a7y8dt3ph
Springfield;9rf76o2bh
New Milford;a3q86e3ph
North Attleborough Center;a6l8dw3ph
Country Club Hills;a5h74c2bh
Lemont;a5r73k2bh
Sartell;agq6mb2bh
Parkwood Manor;a1d83r3ph
Dyersburg;9q36zp2bh
Defiance;a4o7do3ph
Beltsville;9yf7yd3ph
Centralia;ajs4eh38h
Chalmette;9966y32bh
Shorewood;a5c7302bh
Ferndale;9yu7z43ph
Mount Vernon;a277iv3ph
Westchester;a6973w2bh
Bluffton;9fk7ne3ph
Tifton;9dd7g13ph
Auburn;a778cg3ph
Nipomo;9nc4lc38h
Laurel;9uk7wp3ph
Taylor;9ax6df2bh
North Decatur;9jv7dt3ph
Morganton;9pb7l43ph
Danville;9ul7cj3ph
Barrington;a5y8dx3ph
Denville;a3l8543ph
Washington;a326zn2bh
Phoenixville;a1h8293ph
Mercedes;8yn6c12bh
Center Point;9jh7782bh
Lemay;9x16x82bh
Wolcott;a5k8993ph
Norcross;9ka7e33ph
Troutdale;agi4g138h
Oak Grove;ag64fc38h
North Valley Stream;a3187a3ph
Easton;9xp80o3ph
Easthampton;a7f8a53ph
Bothell West;amt4gg38h
Tahlequah;9ps6k72bh
Hazel Park;a7y7h62kh
Douglas;9d25fp3vh
Opelousas;9at6s82bh
Grafton;a798cv3ph
Sandalfoot Cove;8z67p93ph
Brenham;99t6g82bh
Opa-locka;8xy7p33ph
Beaver Dam;aaq7182bh
Coalinga;9qe4lo38h
Seymour;a508903ph
Cohoes;a8t87a3ph
Jenison;a9779p2kh
Swansea;a5z8e93ph
Donna;8yp6bn2bh
Vienna;9y27xd3ph
Pinewood;8xv7p63ph
Lansdale;a1s82w3ph
Sevierville;9pn7fw3ph
Chickasha;9nd6by2bh
Kingsland;9bk7l33ph
Lower Moyamensing;a0w8383ph
Uvalde;97566t2bh
Hillcrest Heights;9xv7y83ph
Stuart;91k7p33ph
Fairhaven;a5o8f23ph
Avon;a0g78030h
Zachary;9b56us2bh
Red Wing;ads6qz2bh
Sikeston;9sg6z52bh
Bethpage;a3687w3ph
Concord;9x06x02bh
Flowing Wells;9fp5bn3vh
‘Ewa Beach;8l81p39fh
Bridgeview;a5z7442bh
Fairview Park;a547km3ph
Laguna Woods;9jd4sz38h
Cañon City;9ws5ro2jh
Mount Clemens;a8c7hs2kh
Saint Michael;afl6nu2bh
South River;a2d85d3ph
Fort Thomas;9yk7df3ph
Sunset;8xf7ot3ph
Prospect Heights;a6y73q2bh
Griffith;a5d7562bh
Estelle;98x6xp2bh
Schofield Barracks;8lq1ox9fh
Bon Air;9u87wk3ph
Oconomowoc;a9r7262bh
Hough;a5b7l83ph
Vero Beach;92s7oo3ph
Sunnyside;aio4mn38h
Lebanon;adq4el38h
Bayshore Gardens;9277il3ph
Streetsboro;a4k7m13ph
Calhoun;9lu7c13ph
Fishtown;a1183a3ph
Morton;a2t6zi2bh
Menomonie;aeo6so2bh
Truckee;9z94m638h
Fremont;a4v7h43ph
Buckhall;9xl7wx3ph
Gainesville;9jf6e72bh
Aberdeen;aki4c238h
Baychester;a3j86w3ph
Hopatcong Hills;a3q84l3ph
Waterville;adr8il3ph
Oroville;9zr4ic38h
Roosevelt;a3087l3ph
Laconia;aax8dh3ph
Bellmore;a2z87r3ph
Nuuanu - Punchbowl;8la1pl9fh
Hibbing;alr6pu2bh
Sudley;9xr7wq3ph
Dublin;9ge7hq3ph
Kuliouou - Kalani Iki;8l61pt9fh
Coos Bay;aah4ay38h
Hope Mills;9n57sp3ph
Cimarron Hills;9xy5t62jh
Katy;98r6hu2bh
Brunswick;9cj7ln3ph
Clarksburg;9z47ou3ph
Jollyville;9ak6ce2bh
Highland Village;9hx6ef2bh
Ocean Acres;a0e85o3ph
Wolf Trap;9y67xb3ph
Madison;a3885a3ph
Portland;93g6do2bh
Midway;9ah76b2bh
Sulphur Springs;9i26ig2bh
Maryland City;9yl7ym3ph
Siloam Springs;9qj6le2bh
Ham Lake;afp6oz2bh
Frankfort;a1w77p30h
West Columbia;9kf7mt3ph
Dyer;a5974w2bh
Mount Pleasant;9i46k72bh
Rye;a3u87c3ph
Fort Hunt;9xl7xy3ph
Americus;9f37e13ph
Hermitage;a4j7oj3ph
Buffalo;afh6n92bh
Crawfordsville;a1876p30h
Lake Mary;95w7m43ph
Republic;9t46oc2bh
Albemarle;9o77p83ph
Cherry Hill;9x57xd3ph
El Camino Real;9jm4su38h
Country Walk;8x77ol3ph
Riverdale;9j97dj3ph
Abington;a6y8ex3ph
Floral Park;a3487a3ph
Prosper;9ic6f42bh
Walnut Park;9kd4rl38h
Pecan Grove;98b6i32bh
Overland;9xi6x02bh
Grandville;a9779s2kh
Four Corners;aet4ee38h
Sunland Park;9ec5ny2jh
North Liberty;a5z6tk2bh
Burlington;9yf7co3ph
Parole;9ya7ze3ph
Vincent;9lu4rw38h
Vincent;9kq4sg38h
Southchase;94v7ly3ph
Ukiah;9yr4dr38h
La Marque;97l6k72bh
La Palma;9k14s338h
North Arlington;a3b8633ph
Seagoville;9go6fu2bh
Lebanon;a1977t30h
Clayton;9xc6x42bh
Pearl River;a4286e3ph
Conyers;9jj7em3ph
Myrtle Grove;9ai75h2bh
Aldine;9956j22bh
Narragansett;a558dj3ph
Kaukauna;ad072t2bh
Port Washington;a3f87a3ph
New Port Richey;94g7i83ph
Aurora;a4s7m13ph
Adams Morgan;9y47y03ph
Rutland;ab589b3ph
Asbury Park;a1q86f3ph
Lutherville-Timonium;9zk7z73ph
UC Irvine;9jg4so38h
Ashland;a7e8di3ph
Hybla Valley;9xn7xw3ph
Longmeadow;a6t8ae3ph
Elkton;a0181d3ph
Strawberry Mansion;a128363ph
Grosse Pointe Woods;a7w7hp2kh
Alton;8z16ax2bh
Pinehurst;9ns7r93ph
Groves;9976n42bh
Orient Heights;a7r8es3ph
West University Place;98k6ix2bh
Wilkinsburg;a2c7q43ph
Manassas Park;9xq7wt3ph
Willow Grove;a1i83c3ph
Avon Center;a567k63ph
Gatesville;9dc6ci2bh
La Grange;a6573x2bh
Great Bend;9wk69o2bh
Shively;9w479m34h
Highland Springs;9ub7x73ph
Hueytown;9ix76c2bh
Mill Creek East;amw4gl38h
New Haven;a437bv30h
Talladega;9iw78t2bh
Koolauloa;8m11pb9fh
Middleburg Heights;a4w7kr3ph
Pacific Grove;9rq4hc38h
Mitchell;abf6bp2bh
Humble;99c6je2bh
Greenwood Village;a025sh2jh
Bryn Mawr-Skyway;alx4gg38h
Bradley;a4a73y2bh
McKinley Park;a6774h2bh
Elkridge;9yx7yx3ph
Aberdeen;9zr80g3ph
North Myrtle Beach;9jy7tg3ph
Williamstown;a0983o3ph
Long Beach;9ab70d2bh
Boulder City;9py51138h
Otsego;afr6o12bh
Fillmore;9lk4po38h
Lake Wales;93i7ld3ph
Alum Rock;9tt4hl38h
Addison;9hk6f12bh
East Riverdale;9y87yd3ph
Laurinburg;9ml7ra3ph
Hernando;9mq6y12bh
Hurricane;9ta55b2jh
Plainfield;a5s8c83ph
Hanover;a0k7y63ph
Lithia Springs;9jv7cu3ph
Farmingville;a3f8953ph
Mastic;a3c89o3ph
Setauket-East Setauket;a3p88y3ph
Harrison;a378603ph
Martha Lake;amx4gg38h
Port Richmond;a2v8623ph
Indianola;a4w6o42bh
Perry;9g67ff3ph
Atwater Village;9ks4ri38h
Jasper;9wn76j31h
Clive;a5k6no2bh
Winder;9kf7fg3ph
Clemson;9mc7hw3ph
Greenwood;9j46xi2bh
Tavares;9607kz3ph
Great Falls;9yc7xb3ph
Jamestown;akb69t2bh
Terrace Heights;a348733ph
Emerson Hill;a2t8663ph
Avocado Heights;9kk4s938h
Kapolei Villages;8la1ox9fh
Eden;9rd7qf3ph
Bay Village;a587kg3ph
Lake Butler;9567li3ph
Makakilo City;8lb1ov9fh
Bostonia;9h54v638h
Westbury;a3887l3ph
Iona;8zo7kc3ph
Dickson;9q87592bh
Newport;9yl7da3ph
Cullman;9kx76s2bh
Live Oak;9856au2bh
Payson;9l35ar3vh
Roanoke Rapids;9ra7wb3ph
Storrs;a658bb3ph
The Dalles;agn4je38h
Los Lunas;9mp5nj2jh
Dixon;a686zg2bh
Bellevue;adg73s2bh
Sunland;9l74re38h
Millbrook;9g87842bh
Brownsville;8xq7p43ph
Wailuku;8k11t99fh
Warren Township;a2t8503ph
Seaford;a2z87v3ph
Washougal;agm4g538h
Dallas;aes4dg38h
Graniteville;a2u8613ph
Henderson;9qx7u83ph
Stallings;9nh7nv3ph
River Falls;aem6qq2bh
Berkley;a827gy2kh
Damascus;9z57xk3ph
Shelbyville;9w57ba3ph
Kennedy Street;9y87y23ph
Roxbury Crossing;a7l8ej3ph
Susanville;a2a4kv38h
Pataskala;a147id3ph
Traverse City;aec7a62kh
South Yuba City;9yo4i438h
Ledyard;a548bz3ph
Merrifield;9xz7xh3ph
Fords;a2l85k3ph
Kapolei;8la1oy9fh
New Territory;9876i82bh
Clearlake;9y84fd38h
McKinleyville;a3r4ba38h
Brunswick;abz8hn3ph
Highview;9vy7a634h
Kenmore;a9d7sx3ph
Belvedere Park;9jr7dx3ph
Ripon;9uu4jk38h
Rossville;9za7zk3ph
Depew;a967tf3ph
Seven Oaks;9kl7ml3ph
Gates-North Gates;a9x7w63ph
Parlier;9rp4nz38h
Wilmington Island;9ew7n33ph
East Rancho Dominguez;9k64ro38h
Southwest Waterfront;9y07y23ph
Natchez;9do6u42bh
Cloverly;9yn7y43ph
Newton;a5u6pj2bh
Lamont;9ny4pp38h
East Brainerd;9n87bh3ph
Rio Linda;9xh4in38h
Vandalia;a0t7e43ph
East Longmeadow;a6u8al3ph
Ramsey;a428623ph
West Park;8y67p83ph
Greeneville;9qg7hx3ph
Mount Vernon;9wg7122bh
Adelphi;9yc7y73ph
Front Royal;9y47ut3ph
Weston;aep6z92bh
Spanish Springs;a054nh38h
Fort Leonard Wood;9ur6s02bh
Duxbury;a6s8fp3ph
Sterling;a636yu2bh
Capitol Hill;9y17y43ph
Williamsburg;9tj7yx3ph
Somerton;9gk51d3vh
Three Lakes;8x87oo3ph
Auburndale;93z7kt3ph
Gloversville;a9l85i3ph
Hereford;9mq5zk2bh
Eggertsville;a9c7t43ph
Batavia;a9g7ut3ph
Dumas;9pn60r2bh
=UY
Montevideo;4929jx3mo;蒙特維多|蒙得维的亚|몬테비데오|モンテビデオ|مونتفيدو|مونته‌ویدئ|Montebideo|Montevideu|Muntivideu|Muntividew|Mantehvideha|Montevidejas|Montevidiejos|Мантэвідэа|Монтевидео|मोन्तेविदेओ|मोण्टेवीडियो|มอนเตวิเดโอ
Salto;4it9f03mk
Maldonado;4929nd3mk
Rivera;4k59lp3mk
Paysandú;4g89eo3mk
Las Piedras;49j9ju3mj
Tacuarembó;4hw9ki3mj
Melo;4g39pk3mj
Artigas;4lk9j53mj
Mercedes;4dn9et3mj
Durazno;4da9j03mi
Minas;4ai9mk3mi
Florida;4ba9jv3mi
San José de Mayo;4am9ih3mi
Colonia del Sacramento;4aa9fc3mi
Barros Blancos;49h9kg3mi
San Carlos;49d9ng3mi
Rocha;4a89p33mi
Fray Bentos;4e09e13mi
Treinta y Tres;4dp9ox3mi
Canelones;4a49jo3mi
Pando;49k9kk3mi
Trinidad;4cw9hy3mh
La Paz;49g9jt3mh
Carmelo;4bk9e43mh
Delta del Tigre;49g9jg3mh
Dolores;4cv9ea3mh
Young;4f69fx3mh
Santa Lucía;4ab9jd3mh
Progreso;49p9ju3mh
Paso de Carrasco;4969kb3mh
=UZ
Tashkent;a4mj8a6gp;塔什干|타슈켄트|طشقند|تاشقند|Ташкен|Ташкент|タシュケント|Daskent|Tashken|Taskent|Taxkent|Tachkent|Taixkent|Tashkend|Tasjkent|Taskende|Taskenta|Taskento|Taszkent|Tochkent|Toshkand|Toshkent|Taschkent|Tashkenti|Taskentas|Lithopolis|Tashkent osh|Toshkent shahri|ताशकन्द|ताश्कंद|ทาชเคนต์
Andijon;a3ajgz6gn
Namangan;a3wjf36gn
Samarkand;a05j206bn
Yunusobod;a4xj8g6gm
Nukus;a7yihl6bm
Fergana;a26jfe6gm
Bukhara;a0hiuz6bm
Qarshi;9xyiyr6bm
Chilanzar;a4oj866gm
Qo‘qon;a2ljd26gm
Marg‘ilon;a2fjf86gm
Angren;a3yjau6gl
Tirmiz;9tej2w6bl
Jizzax;a1hj4f6bl
Chirchiq;a57j9a6gl
Urganch;a5fikf6bl
Navoiy;a1cixm6bl
Shahrisabz;9yij1n6bl
Olmaliq;a3gj9c6gl
Xiva;a4zijo6bk
Sergeli;a4gj8a6gk
Chust;a3wjdw6gk
Bekobod;a1qj8f6gk
Beshariq;a2cjc56gk
Quvasoy;a1yjfy6gk
Kattaqo’rg’on Shahri;a0vj036bk
Guliston;a2ij726gk
Qŭnghirot;a9kifg6bk
Denov;9wbj4m6bk
Shahrixon;a33jg66gj
Koson;9ygiy66bj
Xo‘jayli Shahri;a7tih56bj
Beruniy;a5tikr6bj
Urgut Shahri;9zij2u6bj
Kogon Shahri;a0divb6bj
Asaka;a2wjgo6gj
Yangiyŭl;a47j7t6gj
Parkent;a4pj9k6gj
Oltinko‘l;a9nifm6bj
Chortoq;a43jfi6gj
Tŭytepa;a3zj8o6gj
Gurlan;a68ijr6bj
Kosonsoy;a4ljer6gj
Novyy Turtkul’;a5fili6bj
Quva;a2kjg76gj
Yangiyer;a1wj766gj
Xonobod;a3cjip6gj
G’ijduvon Shahri;a1eivo6bj
Kitob;9yoj1t6bi
Uchqŭrghon Shahri;a47jg86gi
Oqtosh;a0wiz56bi
Ohangaron;a3nj9g6gi
Dashtobod;a1hj696gi
Piskent;a3mj8n6gi
Rishton;a24je06gi
Paxtaobod;a3pjhe6gi
Manghit;a70iiu6bi
Qorasuv;a35jih6gi
Oyim;a3eji26gi
Nurota;a2oiyh6bi
Bektemir;a4hj8l6gi
To‘rqao‘rg‘on;a3wjen6gi
Muborak;9z2iwz6bi
Uychi;a3zjfl6gi
Bulung’ur Shahri;a0gj2v6bi
Sirdaryo;a3gj6q6gi
Toshbuloq;a3ojeu6gi
Yangiqo‘rg‘on;a4fjf86gi
Pop;a3jjdj6gi
Qibray;a4zj8y6gi
Iskandar;a5fj9m6gi
Zomin Shaharchasi;a10j606bi
Shovot;a5qijh6bi
Boysun;9w5j2p6bi
Uchkuduk;a41iqe6bi
Shofirkon Shahri;a1giv66bi
Salor;a4yj8n6gi
Haqqulobod;a3ojgc6gi
Dardoq;a3ejib6gi
Poytug‘;a3mjgo6gi
Qo‘rg‘ontepa;a35ji46gi
Oltiariq;a27jej6gi
Sho‘rchi;9vkj4b6bi
Yangiobod;a48jap6gi
Yaypan;a26jcq6gi
Gagarin Shahri;a2yj5d6bi
Zafar;a3uj7e6gi
Payshamba Shahri;a15izz6bi
G’allaorol Shahri;a17j3r6bi
G‘uzor;9xaj016bi
Chinobod;a3kjfx6gi
Jalolquduq;a31jhp6gi
Chinoz;a3qj706gh
Karakul’;9ztitb6bh
G‘azalkent;a5gj9t6gh
Juma Shahri;a0cj166bh
Paxtakor Shahri;a1zj4s6bh
Kirguli;a2cjfd6gh
Xo‘jaobod;a2zjhk6gh
Sultonobod;a38jiq6gh
Bo‘ka;a3dj876gh
Chiroqchi;9yfj0x6bh
Beshkent;9xuiyd6bh
Toshloq;a2gjfd6gh
Do’stlik Shahri;a2lj4z6bh
Qo’shko’pir;a5dijn6bh
Vobkent Shahri;a14iv66bh
Hazorasp;a4siln6bh
Yangirabot;a17iz86bh
Druzhba;a4iimb6bh
Chelak;a0wj1q6bh
=VA
Vatican City;a6eeul8qc
=VC
Kingstown;7yk95x4di
Calliaqua;7yh9614di
=VE
Caracas;7r58q828q;カラカス|卡拉卡斯|카라카스|کراکس|كاراكاس|Caracae|Karakas|Caraques|Karakasa|Karakaso|Karakasas|Каракас|काराकास|การากัส
Maracaibo;7rk8d328p;马拉开波|マラカイボ|마라카이보|मारकायबो|माराकाईबो|มาราไกโบ|Marakaaya|Marakaibo|Marakajba|Marakajbo|Marakaybo|Marakaypu|Marakaibas|Marakaimpo|Маракаибо|Маракайба|ماراكايبو|ماراکایبو
Valencia;7q88n428p;巴伦西亚|발렌시아|バレンシア|Valens|Valensi|Balenzia|Valencio|Valensia|Valensii|Valentia|Valincia|Valensija|Valensiya|Valentzia|Валенс|Валенси|بلنسية|والنسيا|वेलेंसिया
Barquisimeto;7py8jc28o;巴基西梅托|バルキシメト|바르키시메토|باركیسیمتو|بارکیسیمتو|Barkisimeta|Barkisimeto|Barkizimeto|Barkisimetas|Barquisimito|Barquisimetum|Баркизимето|Баркисимето|बार्किसिमेटो
Ciudad Guayana;7l792028o
Barcelona;7q68wb28o
Maturín;7p390i28n
Maracay;7qh8o928n
Ciudad Bolívar;7kk8zh28m
Cumaná;7r28xq28m
Barinas;7ly8gx28m
Puerto La Cruz;7qd8wh28m
Petare;7r48qf28m
Cabimas;7qw8dj28m
Turmero;7qf8ol28m
Mérida;7lu8eb28m
San Cristóbal;7jl8bc28m
Alto Barinas;7lv8gx28m
Santa Teresa del Tuy;7qf8qu28m
Los Teques;7qr8ps28m
Guarenas;7r38qy28m
Coro;7tp8ig28m
Valera;7nw8fw28m
Baruta;7qz8q828m
Ciudad Ojeda;7qc8dx28m
San Fernando de Apure;7jx8ol28l
Guatire;7r38r628l
El Tigre;7mp8xj28l
Porlamar;7sg8yl28l
San Felipe;7qq8l228l
Guacara;7qf8ng28l
Acarigua;7oj8js28l
Cúa;7q88q828l
Araure;7om8jo28l
Lander;7qa8qq28l
Puerto Cabello;7r38n328l
Calabozo;7ms8op28l
Carúpano;7rn90b28l
Ocumare del Tuy;7q48qi28l
El Vigía;7lx8cy28l
San Juan de los Morros;7pj8ox28l
Valle de La Pascua;7nm8sn28l
El Limón;7qn8o528l
Punto Fijo;7uh8h028l
Anaco;7o78wy28l
Táriba;7jq8be28l
Machiques;7py8ah28k
Charallave;7qg8qa28k
Palo Negro;7q98oe28k
La Victoria;7qf8oz28k
San Carlos del Zulia;7n08c728k
Puerto Ayacucho;7dq8oa28k
Carora;7q98hc28k
Ejido;7lr8e428k
La Concepción;7ri8cg28k
San Carlos;7ou8lh28k
Cagua;7qb8om28k
Mariara;7qm8nw28k
Tinaquillo;7pk8ma28k
Punta Cardón;7ue8gy28k
Yaritagua;7q08k028k
Upata;7ka92n28k
Guanare;7n48ib28k
Catia La Mar;7rh8pt28k
Cabudare;7pv8jm28k
Los Puertos de Altagracia;7rr8dc28k
Los Rastrojos;7pv8jo28k
Tucupita;7n693n28k
Villa de Cura;7pw8oj28k
Rubio;7je8b028k
Concepción;7qx8cv28k
San Juan Bautista;7sl8ye28k
San José de Guanipa;7mp8xr28k
La Villa del Rosario;7qp8b528k
San Timoteo;7p78el28k
Güigüe;7q08nq28k
El Cafetal;7r38qd28k
Biruaca;7js8og28k
El Tocuyo;7p78i528j
Zaraza;7nz8uk28j
Socopó;7kv8fa28j
Trujillo;7o18gc28j
Chivacoa;7q88kn28j
San Joaquín;7qi8np28j
Santa Cruz de Mara;7rz8cv28j
Tacarigua;7q18nc28j
Boconó;7np8gv28j
Cantaura;7nv8x828j
Altagracia de Orituco;7pe8rm28j
Morón;7r58mk28j
Caicara del Orinoco;7j88s728j
San Antonio del Táchira;7jp8as28j
Pampatar;7sk8yt28j
Chacao;7r68qb28j
Guasdualito;7i48fj28j
San Antonio de Los Altos;7qv8q128j
Colón;7kb8ba28j
La Fría;7ku8bb28j
Punta de Mata;7ox8zb28j
Mene Grande;7pd8ez28j
Pampán;7o98g828j
Los Dos Caminos;7r58qd28j
El Hatillo;7qy8qd28j
La Dolorita;7r58qh28j
Ureña;7k08as28j
San Rafael;7sg8cr28j
Villa Bruzual;7nx8k028j
San Josecito;7ja8be28j
Nirgua;7q78lk28j
Cocorote;7qo8ky28j
Maiquetía;7rf8q028j
Caucagüito;7r58qm28j
Ciudad Bolivia;7l78fz28j
Ciudad Piar;7ip90428j
Barinitas;7mc8gf28j
Quíbor;7pl8im28j
San Mateo;7qd8oq28j
Tovar;7l58cp28j
Palmira;7js8bd28j
Lecherías;7qb8wb28j
Santa Bárbara;7jp8ea28j
Achaguas;7jm8mi28j
Lagunillas;7q58e228j
Píritu;7o18jr28j
Caripito;7q390q28j
Las Tejerías;7qh8pf28j
Tucupido;7nr8tb28j
Pueblo Nuevo El Chivo;7mw8d328i
Cariaco;7r68zh28i
Higuerote;7r48se28i
Pariaguán;7mk8w928i
Carrizal;7qr8px28i
Capacho Nuevo;7jq8b528i
Güiria;7re92y28i
Duaca;7ql8jw28i
Sabaneta;7mb8hr28i
Tinaco;7oy8lx28i
Caraballeda;7rh8qb28i
Puerto Píritu;7py8vc28i
Tumeremo;7ia95628i
La Grita;7kl8c228i
Guanarito;7m68jr28i
Temblador;7n192028i
Sanare;7p38ij28i
Pampanito;7o58g628i
Aroa;7r08kn28i
Santa Ana;7j88b828i
La Asunción;7sn8ym28i
Sabana de Mendoza;7o78ff28i
La Guardia;7sk8y628i
La Vela de Coro;7tu8ir28i
Bejuma;7q98me28i
Tucacas;7rz8m728i
Caja Seca;7ne8el28i
Aragua de Barcelona;7oa8vx28i
Ospino;7nu8j328i
Miranda;7q78m128i
Punta de Piedras;7sa8xy28i
Santa Rita;7ra8dd28i
Caucagua;7qk8rm28i
El Sombrero;7o38pq28i
Puerto Cumarebo;7tx8jd28i
Mamporal;7qt8sb28i
Santa Elena de Uairén;7as96928i
Soledad;7ko8zf28i
Montalbán;7qd8m728i
Juan Griego;7ss8yb28i
Lagunillas;7lm8dp28i
Dabajuro;7sm8fo28i
Guasipati;7is94228i
Elorza;7hm8iy28i
Urachiche;7q88kb28i
Encontrados;7n68bd28i
Cumanacoa;7qh8yg28i
Motatán;7o38fx28i
Coloncito;7l58br28i
La Guaira;7rg8q328i
Santa Cruz de los Taques;7uu8gu28i
Casigua El Cubo;7mb8ak28i
Guama;7qj8ku28i
Barrancas;7md8h928i
Sabana de Parra;7q48k828i
Tucaní;7mx8e128i
Tía Juana;7qi8ds28i
Araya;7re8xi28h
Caicara;7pa8zb28h
Tabay;7lz8ek28h
Judibana;7uo8h228h
Río Chico;7qo8sq28h
San José de Barlovento;7qm8sp28h
Boraure;7qh8kz28h
Clarines;7pm8uz28h
Santa Cruz de Mora;7lc8d028h
Camaguán;7kj8o728h
Casanay;7r68zu28h
Michelena;7k48bc28h
Las Vegas;7oi8ld28h
Bailadores;7kx8ch28h
Timotes;7my8fi28h
Nueva Bolivia;7ne8ej28h
Barrancas;7m693828h
El Dividive;7oc8fj28h
Santa Ana;7sr8yg28h
Mene de Mauroa;7ro8eo28h
La Paragua;7gz90328h
Pueblo Nuevo;7v78hs28h
El Pao;7os8mr28h
Escuque;7nu8fp28h
Boconoito;7ml8hm28h
Chaguaramas;7ny8rz28h
Obispos;7lx8ha28h
San Rafael de Onoto;7ow8kf28h
Chiquinquirá;7r08cz28h
La Azulita;7m78dk28h
El Dorado;7go94s28h
Yumare;7rg8l928h
=VG
Road Town;8d78wi4ig
=VI
Saint Croix;8b98w54cj
Charlotte Amalie;8cy8vn4ch
=VN
Ho Chi Minh City;7s2m475dt;호찌민|호치민|サイゴン|ホーチミン|胡志明市|ホーチミン市|Saigon|Sajgon|Sayqon|Hosimin|Sai Gon|Gia Định|HCM City|Hosimina|Hosiminh|Gia GJinh|Khashymin|Khoshimin|Ho-Ci-Min-urbo|Hociminovo Mesto|Ho-Chi-Minh-Stadt|Ho-Chi-Minh-Ville|Сайгон|Сајгон|سايگون
Hanoi;8kem204ys;河內|河內市|ハノイ|하노이|Anoi|Anoy|Ganoj|Hanoj|Hanoy|Kecho|Ha Noi|Ha Nui|Hanoja|Hanojo|Ke Cho|Keicho|Kescio|Khanoj|Hanojus|Ho-nui-su|Thang Long|हनोई|Ганой|Ханой|خانوي|هانوى|ฮานอย
Haiphong;8jym4c4yq;海防市|ไฮฟอง|ハイフォン|Hayfon|Hajfong|Khajfon|Hajfongo|Hai Phong|Хайфон|ہyfwng|ہیفونگ|हाईफांग
Cần Thơ;7pwm1v5dp;芹苴市|カントー|کانتو|كان ثو|कैन थो|Kan Tho|Kan Tkho|Кан Тхо
Huế;87qm6w4yp;フエ|順化|順化市|顺化市|후에|Хуе|Хюе|هيو|هوئه|เว้|Huje|Khue|Choue|Khjue|Khjueh|Sun-fa-su|ह्यू
Da Nang;86nm8m5do;岘港|峴港|다낭|ダナン|Danan|Turan|Danang|Tourane|Đà Nẵng|GJa Nang|Данан|Дананг|دانانگ|دا نانج|दा नांग
Biên Hòa;7sem4q5do;ビエンホア|Bia Hoa|Bienhoa|Ben Khoa|B'en Khoa|byn ہwa|بین ہوا|Бен Хоа|Бьен Хоа|बिएन होआ
Thanh Hóa;8h0m1t4yo
Vinh;8dvm1l4yo
Thuận An;7scm4f5dn
Nha Trang;7w1mbb5dn
Chợ Lớn;7rvm495dn
Bình Thạnh;7s1m4f5dn
Thủ Đức;7s5m4l5dn
Qui Nhon;80ambe5dn
Vũng Tàu;7qrm5g5dn
Dĩ An;7sbm4l5dn
Rạch Giá;7ptlzw5dn
Bắc Giang;8l3m2z4yn
Nam Định;8irm2y4yn
Buôn Ma Thuột;7x7m845dn
Thái Nguyên;8lzm214ym
Việt Trì;8l8m0s4ym
Quận Mười;7rxm4b5dm
Thủ Dầu Một;7sim495dm
Đống Đa;8kdm1y4ym
Bến Cát;7szm445dm
Long Bien;8kfm264ym
Bắc Từ Liêm;8kjm1r5dm
Quận Mười Một;7rwm485dm
Gia Lâm;8kem2a4ym
An Nhơn;80lmb35dm
Hai Bà Trưng;8kdm214ym
Nghi Sơn;8fpm1y4ym
Phu Quoc;7qelwt5dm
Thanh Xuân;8kbm1w4ym
Cầu Giấy;8kfm1w4ym
Bắc Ninh;8kvm2o4ym
Phú Mỹ;7rjm5f5dm
Long Xuyên;7qvm0w5dm
Ba Vì;8kkm0q4ym
Quảng Ngãi;840ma75dm
Quận Sáu;7rvm495dm
Mỹ Tho;7qsm3g5dm
Hạ Long;8k7m5f4ym
Hà Tĩnh;8cym274ym
Ðà Lạt;7v7m985dm
Xuân Lộc;7sdm5v5dm
Thị Trấn Đông Triều;8kkm3v4ym
Hải Dương;8k6m3d4ym
Thành Phố Bà Rịa;7r6m5p5dl
Phổ Yên;8lim254yl
Sơn Tây;8kqm134yl
Ninh Hòa;7wpmb45dl
Phan Thiết;7sdm8a5dl
Điện Bàn;865m8p5dl
Cà Mau;7nim035dl
Ba Dinh;8kgm1z4yl
Sóc Trăng;7oom2d5dl
Chí Linh;8kjm3c5dl
Quận Ba;7rxm4d5dl
Tân An;7ram3l5dl
Sa Dec;7qlm1s5dl
Cao Lãnh;7r2m1f5dl
Phan Rang-Tháp Chàm;7u4mar5dl
Việt Yên;8l3m2t5dl
Kon Tum;81vm815dl
Thanh Khê;86nm8j5dl
Lạng Sơn;8mpm4k4yl
Thuận Thanh;8khm2o4yl
Quận Bốn;7rxm4f5dl
Cẩm Phả;8kdm5z4yl
Quận Năm;7rwm4b5dl
Vĩnh Châu;7nwm2e5dl
Phúc Yên;8l0m1m4yl
Phú Quốc;7qllwx5dl
Thị Trấn Đại Từ;8m3m1g5dl
Tân Châu;7s0m0c5dl
Long Khánh;7sdm5x5dl
Bảo Lộc;7u3m7h5dl
Tây Hồ;8kjm1x4yl
Đồng Xoài;7u1m4w5dl
Tam Kỳ;859m9b5dl
Ðông Hà;88qm5i4yl
Trảng Bàng;7snm3g5dl
Đưc Trọng;7umm915dl
La Gi;7rmm7d5dl
Trà Vinh;7pnm3e5dl
Thốt Nốt;7qjm155dl
Bạc Liêu;7ntm1p5dl
Tuy Hòa;7yembo5dl
Đức Phổ;835mao5dl
Thị Trấn Thuận Châu;8lklw15dl
Cần Giuộc;7rhm4b5dl
Kỳ Anh;8c6m3a4yl
Hòa Thành;7tdm2t5dl
Cam Ranh;7v4mb85dl
Giá Rai;7nnm0y5dl
Huyện Lâm Hà;7uum8l5dl
Tịnh Biên;7rglzi5dl
Cai Lậy;7qwm2s5dl
Vĩnh Long;7qhm2d5dl
Phủ Lý;8j3m274yl
Hoàn Kiếm;8kfm214yl
Cẩm Phả Mines;8kem625dl
Tây Ninh;7tfm2q5dl
Đồng Hới;8ajm464yl
Quận Đức Thịnh;7qnm1q5dk
Hải Châu;868m8d5dk
Lào Cai;8ohlwt4yk
Sầm Sơn;8gtm265dk
Ô Môn;7q3m1e5dk
Thành phố Sông Công;8lom205dk
Buôn Hồ;7xzm8u5dk
Chũ;8ldm414yk
Bến Tre;7qgm3i5dk
Chơn Thành;7trm485dk
Bồ Đề;8kim234yk
Hòa Cường;86km8i5dk
Vĩnh Yên;8l7m1c4yk
Bắc Quang;8oglzb5dk
Hưng Yên;8jdm2l4yk
Kiến An;8jtm474yk
Nghi Xuân;8dum1r4yk
Cờ Đỏ;7q1m0v5dk
Mỹ Hào;8k4m2o4yk
Phong Điền;882m684yk
Pleiku;80um805dk
Bình Thủy;7pzm1q5dk
Hoàng Mai;8fjm1o4yk
Gò Vấp;7s2m4c5dk
Thới Lai;7pzm185dk
Móng Cái;8lsm7x4yk
Yên Vinh;8dvm1j4yk
Ba Đồn;8bbm3m4yk
Sơn La;8l9lwo4yk
Hòa Bình;8jum0m4yk
Tuyên Quang;8mmm094yk
Ngã Bảy;7p9m1y5dk
Hồng Ngự;7s0m0n5dk
Yên Bái;8mclzf4yk
Hà Tiên;7quly95dk
Phong Điền;7psm1j5dk
Vĩnh Thạnh;7qem0s5dk
Gò Công;7qtm4b5dk
Nghĩa Đô;8khm1w4yk
Hương Thủy;87mm705dk
Bình Minh;7pzm1y5dk
Sông Cầu;7zembe5dk
Phú Thọ;8lgm0a4yk
Bạch Mai;8kam1z4yk
Tân Bình;7s0m4a5dk
Thượng Cát;8klm1p4yk
Sơn Trà;86mm8n5dk
Vĩnh Tuy;8kcm244yk
Cái Răng;7psm1r5dk
Sóc Sơn;8l2m214yk
Gia Nghĩa;7vcm755dk
Dien Bien Phu;8lflu64yk
An Hải;86nm8n5dk
An Khê;80rm9t5dk
Lai Vung;7qim1b5dk
Cung Kiệm;8kvm2w5dk
Cẩm Lệ;86im8k5dk
Yên Hòa;8kem1v4yk
Thanh Liệt;8k9m1y4yk
Củ Chi;7shm3t5dk
Cao Bằng;8ozm364yj
Hương Trà;87xm6k4yj
Thị Trấn Mạo Khê;8kim435dj
Cổ Đô;8l4m0o4yj
Châu Đốc;7rqm005dj
Linh Đàm;8k8m1z4yj
Duyên Hải;7orm3t5dj
Núi Thành;84vm9u5dj
Nghĩa Lộ;8m0lyc5dj
Thái Hòa;8eklzl5dj
Từ Sơn;8kmm2d4yj
Thành Phố Uông Bí;8kfm4l5dj
Long Mỹ;7owm195dj
Vinhomes Ocean Park;8kbm2b4yj
Dại Mỗ;8kam1t4yj
Ngã Năm;7olm1c5dj
Trảng Bom;7sfm595dj
Châu Phong;7rsm015dj
Trần Văn Thời;7n8lzm5dj
Hà Giang;8pelzm4yj
Cần Giờ;7qxm535dj
Xóm Cái Nước;7p8lzy5dj
Phong Thạnh;7nwm0n5dj
Bỉm Sơn;8hsm225dj
Thái Bình;8itm3e4yj
Tân Uyên;7ssm4n5dj
Cửa Nam;8kem214yj
Thị Trấn Phước Bửu;7r9m6c5dj
Đố Sơn;8jjm4n5dj
Hà Đông;8k9m1u4yj
Cần Đước;7r7m445dj
Mui Ne;7sdm8s5dj
Vinhomes Smart City;8kcm1q5dj
Vinhomes Times City;8kbm234yj
Thị Trấn Ngải Giao;7rlm5x5dj
Phú Khương;7tcm2t5dj
Nga Sơn;8hlm2d4yj
Thị Trấn Đầm Hà;8lbm6w4yj
Tây Mỗ;8kcm1r4yj
Bắc Kạn;8njm1z4yj
Hoàn Lão;8aum3x4yj
Lai Châu;8o8lve4yj
Ấp Một;7pcm165dj
Mai Dịch;8kfm1u4yi
Đan Phượng;8klm1i4yi
Óc Eo;7qgm035di
Lương Bằng;8jmm2m4yi
Hưng Mỹ;7mqlzm5di
Thới Bình;7o0lzy5di
Hồng Lĩnh;8dhm1n4yi
Ninh Bình;8iam2e4yi
Cái Đôi Vàm;7mmlz55di
Ô Chợ Dừa;8kem1y5di
Quán Hàu;8acm484yi
Dương Minh Châu;7tmm335di
Xã Long Hải;7qvm5w5di
A Yun Pa;7z8m985di
Ấp Long Thạnh;7rwm0f5di
Đông Phú;85jm8m5di
Hàm Ninh;7qalx15di
Thị Trấn Lam Sơn;8ham0t5di
Thị Trấn Phố Lu;8o0lxf5di
Hoi An;864m8x5di
Xóm Mỹ Xuân;7rim5f5di
Gành Hào;7n3m0u5di
Láng Thượng;8kem1w5di
Cô Tô;7qrlzq5di
Năm Căn;7mclzn5di
Cam Lộ;88pm574yi
Trâu Quỳ;8kem2a4yi
Cát Bà;8jlm5d5di
Tu Bông;7xhmbm5di
An Trạch;7n7m0s5di
Kiến An;7rdm0p5di
Dịch Vọng;8kfm1w4yi
Long Thành;7rzm535di
Cầu Diễn;8kgm1t4yi
Quảng Phú;7xmm885di
Núi Sập;7qim0f5di
Khánh Hòa;7rom055di
Phú Quý;7r8mal5di
Phước An;7xbm8u5di
Xuân Mai;8k2m1a5di
Ecopark;8k8m295di
Quang Minh;8kvm1t5di
Kim Liên;8egm0k5di
Vị Thanh;7p6m0z5di
Thị Trấn Na Dương;8mam545di
Mỹ Khê;843mai5di
Mỹ Lại;847mah5di
Yên Phụ;8kfm1z4yi
Buôn Trấp;7wom835dh
thị xã Quảng Trị;88jm5q5dh
Tam Giang;7mgm065dh
Kiên Hải;7pplz95dh
Tràm Chim;7rnm185dh
Ấp Hô Phòng;7nnm0u5dh
Lý Sơn;84pmb45dh
Thị Trấn Tiên Yên;8l9m6d5dh
Ấp Phước Tĩnh;7qwm5q5dh
Diễn Thành;8eqm1c4yh
Ea Drăng;7yom8l5dh
Liễu Giai;8kfm1y4yh
Mường Lay;8n4luh5dh
Thị Trấn Nước Hai;8p6m2v5dh
Thị Trấn Đất Đỏ;7r5m5z5dh
Thị Trấn Thất Khê;8num3r5dh
Vinhomes Royal City;8kcm1y5dh
Nghèn;8d9m1u4yh
Long Diền;7r4m5u5dh
Thị Trấn Trùng Khánh;8pgm3w5dh
Thị Trấn Ba Chẽ;8l3m604yh
Nhà Bè;7rqm4i5dh
Bến Thủy;8dtm1m4yh
Trung Phụng;8kcm1z4yh
Bản Na Hỷ;8gclyd5dh
Cổ Lóa;8kom235dh
Đại Lộc;864m8c5dh
Ít Ong;8lslwz4yh
Thị Trấn Việt Quang;8oalz54yh
Đinh Văn;7urm8o5dh
Phú Đô;8kem1t4yh
Khánh Hải;7u7maw5dh
Phước Hòa;7vmm5k5dh
Bo;8jfm164yh
Ấp Bình Châu;7rbm6r5dh
Ea T’ling;7wzm7q5dh
Bà Nà;86em7y5dh
Phú Lộc;7o7m1q5dh
=VU
Port-Vila;5kqqvj9ai
=WF
Mata-Utu;5x40an9vc
=WS
Apia;5vl0mv97i
=XK
Pristina;a8jfit7gn
Prizren;a79fhm7gl
Mitrovicë;a94fhz7gk
Gjakovë;a7qfgr7gk
Suva Reka;a7ofhu7gj
Ferizaj;a7pfis7gj
Glogovac;a8ffi17gj
Gjilan;a7yfjn7gj
Deçan;a86fgd7gj
Pejë;a8ifgd7gj
Vitina;a7kfjc7gj
Istok;a8ufgx7gi
Dragash;a6rfhd7gi
Podujeva;a97fiv7gi
Shtime;a7vfig7gi
Vushtrri;a8yfi97gi
Orahovac;a7sfhd7gh
Llazicë;a88fho7gh
Leposaviq;a9qfhs7gh
Zvečan;a97fhw7gh
Kosovo Polje;a8ifim7gh
=YE
Sanaa;84nhat4np;萨那|사나|サヌア|Sana|Sano|San'a|Sanao|San'ah|Sana'a|Сана|Санъо|صنعاء
Aden;7xihd44no;亚丁|亞丁|아덴|عدن|अदन|एडन|アデン|Adan|Adem|Adehn|Adena|Adeni|Adeno|Aidin|Anten|Cadan|Ɛaden|Adenas|Aden khot|Aden shaary|Адан|Аден|เอเดน
Taiz;7zqhaa4no;تعز
Ibb;80thaq4no;إب|اب
Al Ḩudaydah;834h7b4nn;حديده|الحديدة
Mukalla;82ehog4nn;المكلا
Dhamār;82ehbd4nl;ذمار
‘Amrān;85iha24nk;عمران
Sayyān;845hb44nj;سيان
Zabīd;81gh8c4nj;زبيد
Sa'dah;892h9k4nj;صعدة|صعده
Bājil;83uh894nj;باجل
Ḩajjah;85lh954nj;حجة|حجه
Dhī as Sufāl;80fhaj4ni;ذي سفال|ذي السفال
Al Bayda;80vhel4ni;البيضاء
Ataq;82ehi34ni;عتق
Bayt al Faqīh;82ch8c4ni;بيت الفقيه
Yarīm;81qhba4ni;يريم
Saḩar;84khb34ni;سحر
Laḩij;7yahco4nh;لحج|لاهج|الحوطة
Ghayl Bā Wazīr;832hp54nh;غيل با وزير
Zinjibār;7yhhe24nh;زنجبار
Al Ḩazm;86whce4nh;الحزم
Ma'rib;84yhdx4nh;مأرب|معرب
Mocha;7z0h854nh;مخا|موحا|المخا
=YT
Mamoudzou;5yihdn95j
Koungou;5ynhdk95h
Labattoir;5yihds95h
Kaouéni;5yjhdm95h
Mtsapéré;5yhhdm95h
Dzaoudzi;5yihdq95h
=ZA
Johannesburg;4x8g1w0os;EGoli|IGoli|Joburg|Jo'anna|Joanesburgo|Joganesburg|Jogannesburg|Johanesburgo|Jokhanesburg|Jokhanezburg|Xohanesburgo|Yohannesburg|Yohannesburq|Yoxannesburg|IJohannesburg|Ioannesburgum|Jog'annesburg|Johanesburgas|Johannesbourg|Johannesburga|Johannesburgo|Johannesburgu|Jokhannesburg|Johannesarborg|Giochanesmpournk|Yok-hon-ni-su-pau|約翰尼斯堡|约翰内斯堡|요하네스버그|ヨハネスブルグ|جوهانسبرج|جوهانسبرغ|Ёганесбург|Јоханезбург|जोहान्सबर्ग|जोहन्नेस्बर्ग|โจฮันเนสเบิร์ก
Cape Town;4brfb60or;開普敦|好望角鎮|IKapa|Le Cap|Li Kap|Lo Cap|Ar Chab|El Cabo|Kaburbo|Kaplinn|Kapstad|Fokvaros|Kaapstad|Kaapsted|Kab town|Kaepstad|Kapetown|Kapstadt|Kapsztad|Keiptaun|Kejptaun|Kep Taun|Keyptaun|Keyptawn|Cape Toun|Höfðaborg|Kabe Urbe|Kapstaden|Keiptauna|Keiptauns|Hoefdaborg|Keip Taoun|Keiptaunas|Hovdastadur|Høvdastaður|Kapkaupunki|Kapske Mesto|Kapske Misto|Lurmutur Hiria|Civitas Capitis|케이프타운|ケープタウン|केपटाउन|केपताउन|kېp ټawn|كيب تاون|Кейптаун|Кејптаун|เคปทาวน์
Durban;4n2ga70oq;德班|爹濱|더반|ڈربن|دوربان|डरबन|ダーバン|ITheku|Durbana|Durbano|Thekong|Durbanas|Durbanum|Ntermpan|EThekwini|Port Natal|Дурбан|Дърбан|เดอร์บัน
Pretoria;4yig2b0op;プレトリア|普利托利亞|普利托里亞|比勒陀利亚|프리토리아|Pitori|IPitoli|Pretori|Tshwane|E-Pitoli|Pretorie|Pretorii|Pretorio|Priturya|Piritoria|Praetoria|Pretoriae|Pretorija|Pretoriya|Pretoriye|Pretourii|Prehtoryja|Pretooriyaa|Претори|Преториа|پرتوریا|بريتوريا|พริทอเรีย|प्रिटोरिया|प्रिटोरीया
Soweto;4x1g1e0op;索韋托|索韦托|소웨토|ソウェト|سووتو|سويتو|Soueto|Soveto|Souehto|Sovetas|Mpanzaville|Совето|Соуэто|सॉवेटो|सोव्हिटो|โซเวโต
Gqeberha;4bofv50oo;伊莉莎白港|IBhayi|Port Elizabet|Portelizabeta|Port Elisabeth|Port Elizabeth|Port-Ehlizabet|Port Elizabetas|Port Elizampeth|Porto Elizabeth|Puerto Elizabeth|Portus Elisabethae|포트엘리자베스|ポート・エリザベス|پورٹ الزبتھ|پورت الیزابت|Порт Елизабет|Порт-Елізабет|पोर्ट एलिझाबेथ|पोर्ट एलिज़ाबेथ|พอร์ตเอลิซาเบท
Soshanguve;4z9g220oo
Pietermaritzburg;4nqg8f0oo
Evaton;4wbg1d0on
Benoni;4x9g2o0on
Bloemfontein;4p4fwt0on
Thembisa;4xsg2f0on
East London;4eag1j0on
Vereeniging;4vxg1l0on
Boksburg;4x7g2i0on
Welkom;4safya0on
Newcastle;4swg750om
Krugersdorp;4xjg160om
Rustenburg;4ypfzo0om
Emalahleni;4y5g570om
Diepsloot;4xzg1t0om
Randburg;4xjg1s0om
Roodepoort;4xcg1f0om
Botshabelo;4opfy90om
Brakpan;4x4g2t0om
Kariega;4c8fuk0om
Polokwane;53mg5v0om
Germiston;4x5g2a0om
Richards Bay;4q2gd00om
Vanderbijlpark;4vtg1c0om
Athlone;4bnfbe0om
Paarl;4cbfcq0ol
Centurion;4y6g2b0ol
Klerksdorp;4vffy30ol
Somerset West;4bcfca0ol
Mdantsane;4ejg160ol
Middelburg;4yeg5u0ol
George;4bofme0ol
Springs;4x3g2w0ol
Ivory Park;4xsg2c0ol
Carletonville;4wsg040ol
Alexandra;4xhg220ol
Potchefstroom;4vsfza0ol
Mthatha;4i9g3y0ol
KwaDukuza;4ojgax0ol
Westonaria;4wwg0t0ol
Etwatwa;4xfg310ol
Vryheid;4svg9j0ol
Pinetown;4n6g9t0ol
Ladysmith;4qog6q0ol
eMbalenhle;4wbg4r0ol
Kimberley;4q7fss0ol
Nigel;4wlg340ol
Mpumalanga;4n7g940ol
Bhisho;4erg080ol
Sasolburg;4vjg1a0ol
Randfontein;4xag0y0ol
Worcester;4cjfe10ok
Ntuzuma;4neg9z0ok
Virginia;4ryfyn0ok
Brits;4ytg160ok
Alberton;4x1g240ok
Queenstown;4hefyo0ok
Kroonstad;4t7fzn0ok
Somaroboro;4zlg430ok
Hammanskraal;4zfg2l0ok
Mabopane;4z5g1y0ok
Mbombela;4z8ga10ok
Orkney;4v2fy30ok
Phalaborwa;53igai0ok
Thohoyandou;569g8o0ok
Tokoza;4wsg250ok
Standerton;4v7g580ok
Mokopane;52tg4l0ok
Ermelo;4wbg7a0ok
Stellenbosch;4brfcf0ok
Kutloanong;4spfyb0ok
Stilfontein;4vgfyd0ok
Qonce;4eog030ok
Delmas;4xdg3o0ok
Grahamstown;4difxp0ok
Bethlehem;4rlg2n0ok
Ga-Rankuwa;4yug1r0ok
Bela Bela;50wg2k0ok
Midrand;4xug240ok
Louis Trichardt;560g720ok
Heidelberg;4weg2s0ok
Dundee;4rrg7z0ok
Piet Retief;4uzg9l0ok
Phuthaditjhaba;4qsg420ok
Atlantis;4crfbc0ok
Mossel Bay;4b2flj0ok
Mafikeng;4y5fv80ok
Mmabatho;4y7fv70ok
Odendaalsrus;4slfy50ok
Oudtshoorn;4coflo0oj
Bethal;4wig5v0oj
Thaba Nchu;4ovfyk0oj
Bothaville;4txfxy0oj
Upington;4qzfj20oj
Parys;4vag0a0oj
Schweizer-Reneke;4uhfud0oj
Knysna;4bgfo10oj
Saldanha;4ebf9u0oj
Barberton;4ydga90oj
Lichtenburg;4xdfwo0oj
Tongaat;4nvgag0oj
Graaff Reinet;4gffs50oj
Fochville;4wfg0d0oj
Kokstad;4l5g5q0oj
Fort Beaufort;4ezfxz0oj
Ekangala;4ypg3t0oj
Kraaifontein;4bzfc00oj
Hermanus;4aefdf0oj
Vryburg;4v4fsp0oj
Wellington;4ckfct0oj
Viljoenskroon;4uffyv0oj
Durbanville;4c1fbt0oj
Kwaggafontein;4zng4e0oj
Mondlo;4sag9c0oj
Butterworth;4g7g270oj
Port Shepstone;4kmg8l0oj
Trichardt;4wfg570oj
Nkowakowa;53ng850oj
Musina;57xg7g0oj
Modimolle;51eg2w0oj
Letlhabile;4z8g1c0oj
Lydenburg;50ag8k0oj
Mankweng;53og6j0oj
Ficksburg;4ptg1g0oj
Wolmaransstad;4ugfw60oj
Edenvale;4xeg270oj
eSikhaleni;4ptgcm0oj
Matsulu;4z4gb40oj
Kuils River;4bqfbz0oj
Balfour;4vyg3f0oj
Vredenburg;4elf9z0oj
Beaufort West;4g4fmq0oj
Aliwal North;4krfy70oj
Siyabuswa;509g4o0oj
Cradock;4gofv60oj
Volksrust;4tzg700oj
Malmesbury;4d2fc10oj
Mkhuhlu;50lgas0oj
Wesselsbron;4snfx90oj
Lebowakgomo;52hg5y0oi
Ceres;4dbfdn0oi
Bronkhorstspruit;4ybg3u0oi
Senekal;4rcg0q0oi
Leslie;4wrg4c0oi
Phola;4xsg4n0oi
Plettenberg Bay;4bffox0oi
Mandeni;4p1gb90oi
Grabouw;4b5fcu0oi
Lukwatini;4xmg9m0oi
Giyani;55ag9c0oi
Muizenberg;4bafbc0oi
Folweni;4mog9l0oi
Calcutta;50mgar0oi
Stutterheim;4fjg060oi
Dwarsloop;515gae0oi
Humansdorp;4bhfst0oi
Theunissen;4r3fy60oi
Thabazimbi;51pg050oi
Margate;4kag8d0oi
Cullinan;4ypg380oi
Wembesi;4pbg6q0oi
Whittlesea;4gmfyi0oi
Acornhoek;51pgad0oi
Bloemhof;4t7fv50oi
Harrismith;4rhg4x0oi
Robertson;4c4ff90oi
Mtubatuba;4r2gde0oi
Empangeni;4q4gcl0oi
Heilbron;4u8g1p0oi
Jeffreys Bay;4bfft80oi
Howick;4o4g7z0oi
Richmond;4n1g830oi
De Aar;4kvfqp0oi
Ulundi;4ragba0oi
Allanridge;4sxfy00oi
Hartbeestfontein-A;4zcg0f0oi
Lebohang;4wqg4c0oi
Marapong;54ag0q0oi
Frankfort;4u8g360oi
Port Alfred;4cpfyo0oi
Ladybrand;4oxg0a0oi
Mpophomeni;4nvg7v0oi
Postmasburg;4rbfo30oi
Mookgophong;51wg3s0oi
Nhlazatje;4xog9j0oi
Driefontein;4v3g8k0oi
Bultfontein;4rffwn0oi
Ballitoville;4nygap0oi
Shakaskraal;4o7gaq0oi
Hendrina;4xcg6k0oi
Hartbeespoort;4yjg1f0oi
Praktiseer;51qg880oi
Ventersdorp;4wxfyi0oi
Estcourt;4pfg6z0oi
Dimbaza;4etfzm0oi
Retreat;4befbc0oi
White River;4znga50oi
Amandelbult;512fzu0oi
Kamaqhekeza;4ypgci0oi
Lady Frere;4hyfzn0oi
Christiana;4shftw0oi
Midstream;4y0g2c0oi
Phomolong;4s7fz80oi
Duiwelskloof;547g7q0oi
Reitz;4ssg2z0oi
Scottburgh;4lvg9f0oi
Itsoseng;4xkfvw0oi
Gonubie;4eig1t0oi
Marikana;4ymg0b0oh
Koster;4y6fyq0oh
Deneysville;4vbg220oh
Schoemansdal;4ylgbj0oh
Redhill;4x2g9n0oh
Greytown;4pag8z0oh
Hennenman;4safz20oh
Somerset East;4f4fv30oh
Middelburg;4ijfth0oh
Hartbeesfontein;4vnfxe0oh
Moloto South;4zag3l0oh
Ottosdal;4vjfw90oh
Vredendal;4i1fbe0oh
Mooi River;4ovg7b0oh
Pampierstad;4sufsl0oh
Hlanganani;50ogal0oh
Verena;4z8g4n0oh
Vrede;4ttg510oh
Lephalale;549g120oh
Hlohlolwane;4pog0l0oh
Glencoe;4rqg7r0oh
Swellendam;4bifgs0oh
Villiers;4uxg3g0oh
Coligny;4wvfx40oh
Komatipoort;4zdgcr0oh
Secunda;4w9g510oh
eMkhomazi;4m3g9k0oh
Mafemani;515gac0oh
Carolina;4xlg7n0oh
Belfast;4yng7g0oh
Queensdale;4hhfyy0oh
Franschhoek;4btfd40oh
Vaalwater;52ig230oh
Ncotshane;4u2gbq0oh
Vaalbank;505g460oh
eMuziwezinto;4ltg960oh
Riversdale;4bbfj20oh
Hoopstad;4spfvz0oh
Burgersdorp;4jwfx50oh
Zeerust;4z2fwg0oh
Tshitereke;56gg8p0oh
Kruisfontein;4bkfsp0oh
Sabie;50ag9i0oh
Zastron;4lufz80oh
Bredasdorp;4a3ffo0oh
Marquard;4qeg070oh
Driekoppies;4ymgbo0oh
Clydesdale;4lug760oh
Kinross;4wmg4t0oh
Kriel;4x3g5a0oh
Montagu;4c5ffw0oh
Ndevana;4elg0f0oh
Alice;4exfyj0oh
Groot-Brakrivier;4bgflr0oh
Warrenton;4rxft10oh
Tekwane;4z8gaj0oh
Tshiame;4rbg4j0oh
Eshowe;4prgbf0oh
Vredefort;4uzg000oh
Tzaneen;53tg7s0oh
Le Roux;4bvfd20oh
Lansdowne;4blfbe0oh
Khowa;4izg1d0oh
Breyten;4wyg7b0oh
Ga-Malakhe;4kfg890oh
Winburg;4qsfz10oh
Caledon;4axfdz0oh
Koppies;4ucg0l0oh
Frischgewaagd;4txg9z0oh
Ugie;4jcg2f0oh
Bagale;4xlg0t0oh
Leeudoringstad;4ucfww0oh
Makwassie;4u4fw70oh
Thulamahashi;51cgao0oh
Ashton;4c1ffq0oh
Gansbaai;49yfdr0oh
Tlokoeng;4krg370oh
Thubelihle;4x6g5d0oh
Daggakraal;4ung7a0oh
Cala;4igg0y0oh
Fernie;4wpg9j0oh
Malamulele;567g970oh
Northam;50ofzr0oh
Fouriesburg;4qig2d0oh
Winnie Mandela;4qafxi0oh
Mamafubedu;4t5g250oh
Moorreesburg;4dxfbu0oh
Rondebosch;4bofbc0oh
Dysselsdorp;4cqfmc0oh
Empuluzu;4wyg9h0oh
=ZM
Lusaka;5r7g2l0zp;ルサカ|盧薩卡|路沙卡|루사카|Lusak|Lusaca|Lusako|Lousaka|Louzaka|Лусака|لوساكا|لوساکا|लुसाका|ลูซากา
Kitwe;5ygg2d0zn
Ndola;5y0g3k0zn
Chipata;5w5gep0zm
Solwezi;607fxb0zm
Kabwe;5tvg310zm
Chingola;5z7g1g0zm
Luanshya;5xig2y0zl
Kasama;65ngam0zl
Livingstone;5kgfvt0zl
Mansa;62wg490zl
Mufulira;5z5g2g0zl
Chunga;5rgg2j0zk
Chililabombwe;5zog1a0zk
Mongu;5rnfo90zk
Mazabuka;5pyg130zk
Kafue;5q7g2a0zk
Kalulushi;5ycg210zk
Choma;5nbfyz0zk
Namalombwe;5r9g2b0zk
Nakonde;682gey0zk
Kapiri Mposhi;5v7g3n0zk
Madido;5rdg2t0zk
Nchelenge;681g3t0zk
Mpika;615gbd0zj
Monze;5otg0c0zj
Petauke;5uggb00zj
Chongwe;5rfg3o0zj
Mpulungu;69ogaf0zj
Chilanga Township;5qrg2j0zj
Samfya;62gg640zj
Mumbwa;5sefz60zj
Mkushi;5w6g5n0zj
Katete;5uzgd40zj
Lundazi;5zvgg60zj
Mbala;69ggb50zj
Chisankane;5r0g2r0zi
Kansanshi;60efxf0zi
Chinsali;64qgd40zi
Kaputa;6ahg6e0zi
Chirundu;5pgg440zi
Chambishi;5yxg1x0zi
Kaoma;5syfsw0zi
Isoka;65sgen0zi
Kawambwa;66tg4s0zi
Kalomo;5mpfxk0zi
Mporokoso;67zg7p0zi
Serenje;5x9g800zi
Sesheke;5lgfri0zi
Kasempa;5wmfvr0zi
Manyama;5ztfvt0zi
Luwingu;65ig750zi
Mapalo;5y2g3n0zi
Siavonga;5o2g3r0zi
Zambezi;5wefo60zi
Mufumbwe;5xifth0zi
Mwinilunga;61efrv0zi
Mpongwe;5whg280zi
Itezhi-Tezhi;5qafwc0zh
Maamba;5lrfzf0zh
Lusaka West;5rgg230zh
Senanga;5p8fon0zh
Ntandabale;5r9g2y0zh
Palabana;5r3g390zh
Lukulu;5u3fok0zh
Manyinga;5wqfrm0zh
Nyimba;5tkg9l0zh
Chavuma;5xpfn00zh
Sinda;5ujgc80zh
Kalabo;5sdfn00zh
Chisasa;60dfuu0zh
Nampundwe;5qxg1k0zh
Mwansabombwe;66qg3w0zh
Namwala;5q9fxg0zh
Sinazongwe;5m2g0a0zh
Chiengi;69yg500zh
Kabompo;5w9fr80zh
=ZW
Harare;5khga90np;ハラレ|哈拉雷|하라레|Arare|Charare|Harareo|Kharare|Kharareh|Salisbury|Hararensis Urbs|هراره|هراري|हरारे|Хараре|Харарэ|ฮาราเร
Bulawayo;5e1g3e0nn
Chitungwiza;5jzgac0nm
Mutare;5hbger0nl
Epworth;5kbgaj0nl
Gweru;5fzg6u0nl
Kwekwe;5hfg6t0nk
Kadoma;5j3g740nk
Ruwa;5kbgas0nk
Chinhoyi;5lrg7w0nk
Masvingo;5eag9n0nk
Norton;5kcg9a0nk
Marondera;5jhgbn0nj
Chegutu;5jng7q0nj
Zvishavane;5djg7j0nj
Beitbridge;58ag7c0nj
Bindura;5lygb10nj
Redcliff;5h5g6q0ni
Chiredzi;5bjgbz0ni
Hwange;5j0fxm0ni
Rusape;5ijgd90ni
Karoi;5nbg6h0ni
Victoria Falls;5k7fvr0ni
Chipinge;5dxgem0ni
Gokwe;5jgg4d0ni
Mount Hampden;5kqg9y0ni
Kariba;5o4g400ni
Gwanda;5bug4l0ni
Shurugwi;5fdg7d0nh
Mvurwi;5mpg9p0nh
Harare Western Suburbs;5kgg9s0nh`;
