
import { DaySchedule, CulturalInsight } from './types';

// Coordinates
const COORD_TOKYO_CENTER = { lat: 35.6895, lng: 139.6917 };

// Cultural Reference Library
export const CULTURAL_INSIGHTS: CulturalInsight[] = [
  // --- SOCIAL & BEHAVIOR ---
  { 
    id: 'wa', 
    category: 'social',
    title: 'Harmonie & Groep', 
    japaneseTerm: 'Wa (和)', 
    content: 'De Japanse sociale orde is fundamenteel gebaseerd op het handhaven van harmonie binnen de groep.',
    keywords: ['wa', 'harmonie', 'groep', 'stilte'],
    deepDive: 'Het concept "Wa" (Harmonie) impliceert dat het groepsbelang altijd boven het individuele belang gaat. Dit manifesteert zich in de praktijk door "Kuuki wo yomu" — letterlijk "de lucht lezen". Japanners communiceren vaak indirect; wat NIET gezegd wordt, is belangrijker dan wat wel gezegd wordt. In een trein is iedereen stil, niet omdat het verboden is om te praten, maar omdat lawaai maken de collectieve harmonie van de coupé zou verstoren. Als buitenlander word je vaak vergeven voor het breken van regels, maar het actief proberen te "lezen van de lucht" wordt gezien als de hoogste vorm van respect.'
  },
  { 
    id: 'keigo', 
    category: 'social',
    title: 'Hiërarchie & Taal', 
    japaneseTerm: 'Keigo (敬語)', 
    content: 'Japanse taal en interactie zijn nooit neutraal; ze bevestigen en herbevestigen continu de sociale rangorde.',
    keywords: ['keigo', 'beleefdheid', 'taal', 'respect'],
    deepDive: 'Keigo is de beleefdheidsvorm die de Japanse taal complex maakt. Het bestaat uit drie niveaus: "Teineigo" (beleefde taal), "Sonkeigo" (respecttaal, om de ander te verhogen) en "Kenjougo" (nederigheidstaal, om jezelf te verlagen). In een winkel of restaurant spreekt het personeel de klant aan met extreme Sonkeigo, terwijl ze zichzelf wegcijferen met Kenjougo. Als klant hoef je niet op datzelfde niveau terug te praten (dat zou raar zijn), maar een arrogante houding wordt afgekeurd. De interactie is een vaststaand rollenspel waarin ieders positie (senpai/kohai, klant/verkoper) wordt bevestigd.'
  },
  { 
    id: 'uchi-soto', 
    category: 'social',
    title: 'Binnen & Buiten', 
    japaneseTerm: 'Uchi-Soto (内・外)', 
    content: 'Het strikte onderscheid tussen de eigen kring (rein/vertrouwd) en de buitenwereld (onrein/formeel).',
    keywords: ['uchi', 'soto', 'schoenen', 'binnen', 'buiten'],
    deepDive: 'Dit concept is fysiek zichtbaar bij de "Genkan" (de hal). De grens tussen buiten (vies) en binnen (schoon) is absoluut. Schoenen uitdoen is geen "gewoonte", het is een rituele handeling om de buitenwereld achter je te laten. Dit strekt zich ook uit tot sociale relaties. Tegenover mensen uit je "Uchi" (familie, hechte collega\'s) kun je open zijn. Tegenover "Soto" (vreemden, klanten) toon je je "Tatemae" (publieke masker). Een klassieke fout van toeristen is het vergeten van de toiletslippers: deze zijn uitsluitend voor de onreine vloer van het toilet. Ermee de gang op lopen is een ernstige culturele faux pas.'
  },
  { 
    id: 'omiyage',
    category: 'social',
    title: 'Geschenkcultuur',
    japaneseTerm: 'Omiyage (お土産)',
    content: 'Souvenirs zijn geen aandenken voor jezelf, maar een sociale verplichting naar de thuisblijvers.',
    keywords: ['souvenir', 'cadeau', 'omiyage'],
    deepDive: 'In het Westen kopen we een souvenir om onszelf te herinneren aan een reis. In Japan is Omiyage "Giri" (sociale plicht). Als je op reis gaat, verstoor je de harmonie van je groep (je collega\'s moeten harder werken, je familie mist je). Het Omiyage is een offer om die harmonie te herstellen en excuses aan te bieden voor je afwezigheid. Daarom is de verpakking vaak belangrijker dan de inhoud; het moet er duur en verzorgd uitzien om de ernst van je dankbaarheid te tonen. Het gaat om de relatie, niet om het object.'
  },
  {
    id: 'walking-eating',
    category: 'social',
    title: 'Lopen & Eten',
    japaneseTerm: 'Tabearuki',
    content: 'Al lopend eten wordt traditioneel gezien als slordig en respectloos naar het voedsel.',
    keywords: ['lopen', 'eten', 'straat'],
    deepDive: 'Het woord "Tabearuki" (eten-lopen) heeft een negatieve connotatie. Voedsel verdient aandacht. Door te lopen terwijl je eet, toon je geen respect voor de maker en de ingrediënten. Bovendien is er het praktische aspect: Japan heeft nauwelijks openbare prullenbakken (sinds de Sarin-gasaanvallen in 1995). Als je lopend eet, creëer je een afvalprobleem voor jezelf. De regel is: koop iets bij een kraampje of automaat, ga ernaast staan (of zitten op een bankje), eet het op, gooi het afval in de bak van de verkoper, en vervolg dan pas je weg.'
  },

  // --- FOOD & DRINK ---
  { 
    id: 'itadakimasu',
    category: 'food',
    title: 'Eet-Etiquette', 
    japaneseTerm: 'Itadakimasu', 
    content: 'Eten is een ritueel van dankbaarheid, geworteld in Boeddhistisch respect voor al het leven.',
    keywords: ['eten', 'sushi', 'diner', 'itadakimasu'],
    deepDive: '"Itadakimasu" betekent letterlijk "Ik ontvang nederig". Het is geen "smakelijk eten", maar een dankzegging aan de planten en dieren die hun leven gaven, en de boeren en chefs die werkten. Stokjes-etiquette is cruciaal en vaak gebaseerd op begrafenisrituelen. Steek stokjes nooit verticaal in rijst (dit doet denken aan wierook voor de doden) en geef nooit eten door van stokje naar stokje (dit is hoe botresten worden doorgegeven bij een crematie). Slurpen bij noedels (Ramen/Soba) is echter functioneel: het koelt de noedels af en verbetert de smaakbeleving door zuurstofinlaat.'
  },
  {
    id: 'conbini',
    category: 'food',
    title: 'De Conbini Machine',
    japaneseTerm: 'Konbini',
    content: 'De Japanse Convenience Store is het toppunt van logistieke perfectie en service.',
    keywords: ['conbini', '7-eleven', 'lawson', 'familymart'],
    deepDive: 'Een Conbini (7-Eleven, Lawson, FamilyMart) wordt meerdere keren per dag bevoorraad. Het systeem is zo geavanceerd dat het weerbericht en lokale evenementen de voorraad bepalen. De kwaliteit van het eten (Bento, Onigiri) is hoogwaardig omdat de concurrentie moordend is. Voor de reiziger is het essentieel: je kunt er pinnen (vaak de enige plek voor buitenlandse kaarten), toiletten gebruiken, kaartjes kopen voor evenementen en bagage versturen (Takkyubin). Het is het moderne dorpsplein dat 24/7 open is.'
  },
  {
    id: 'tsukiji-fresh',
    category: 'food',
    title: 'De Versheid Obsessie',
    japaneseTerm: 'Shun (Seizoen)',
    content: 'De Japanse keuken draait niet om kruiden of sauzen, maar om de pure kwaliteit van het ingrediënt.',
    keywords: ['tsukiji', 'vis', 'sushi', 'vers'],
    deepDive: 'In de Japanse culinaire filosofie is de taak van de chef niet om de smaak te *veranderen*, maar om de inherente smaak van het product naar boven te halen. Dit vereist absolute versheid. Op markten zoals Tsukiji zie je dit in de behandeling van vis (Ikejime: een techniek om vis humaan te doden zodat er geen stresshormonen vrijkomen die de smaak verpesten). Het concept "Shun" verwijst naar het exacte moment (soms slechts 10 dagen per jaar) waarop een ingrediënt op zijn piek is. Eten buiten het seizoen wordt gezien als onnatuurlijk.'
  },
  {
    id: 'ginza-dept',
    category: 'food',
    title: 'De Depachika',
    japaneseTerm: 'Depachika',
    content: 'De kelders van warenhuizen zijn culinaire tempels waar presentatie tot kunst is verheven.',
    keywords: ['ginza', 'warenhuis', 'eten'],
    deepDive: '"Depachika" (Depato = warenhuis, Chika = kelder) is een fenomeen. Hier vind je het duurste fruit ter wereld (meloenen van €100) en patisserie die Parijs evenaart. Het toont de Japanse obsessie met perfectie en verpakking. Het personeel schreeuwt enthousiast de aanbiedingen. Veel kramen bieden gratis proefmonsters aan. Het is de ideale plek voor een hoogwaardige, maar betaalbare picknick-lunch ("Bento") om mee te nemen naar een park of de Shinkansen.'
  },

  // --- SPIRITUAL & NATURE ---
  { 
    id: 'shinto-buddhism', 
    category: 'spiritual',
    title: 'Shinto & Boeddhisme', 
    japaneseTerm: 'Shinbutsu-shūgō',
    content: 'Japanse religie is syncretisch: je wordt geboren als Shintoïst en sterft als Boeddhist.',
    keywords: ['shinto', 'boeddhisme', 'tempel', 'schrijn'],
    deepDive: 'Shinto is de oer-religie van Japan, gericht op het hier-en-nu, reinheid en natuurgeesten (Kami). Het heeft geen heilige boeken of dogma\'s. Boeddhisme kwam later uit China en richt zich op het hiernamaals en verlichting. Japanners zien geen contradictie in het combineren van beide. Shinto zorgt voor vrolijke vieringen (huwelijken, kinderfeesten), terwijl Boeddhisme zorgt voor de serieuze zaken (begrafenissen, voorouderverering). Bij een Shinto-schrijn (Torii-poort) klap je in je handen om de Kami wakker te maken. Bij een Boeddhistische tempel (Pagode) ben je stil en bid je ingetogen.'
  },
  {
    id: 'onsen',
    category: 'spiritual',
    title: 'Onsen Cultuur',
    japaneseTerm: 'Toji (Kuurbad)',
    content: 'Naakt badderen is de ultieme gelijkmaker in de Japanse samenleving.',
    keywords: ['onsen', 'bad', 'naakt'],
    deepDive: 'In een Onsen (warmwaterbron) vervalt de hiërarchie. Zonder kleren, uniformen of badges is iedereen gelijk: "Hadaka no tsukiai" (naakte gemeenschap). De regels zijn strikt om de reinheid (fysiek en spiritueel) te waarborgen. Je wast je grondig *buiten* het bad. Zeep in het badwater is een doodzonde. Tatoeages zijn historisch geassocieerd met de Yakuza (maffia) en worden vaak geweigerd, hoewel dit langzaam verandert met de komst van toeristen. Het hete water (vaak 42°C+) wordt gezien als geneeskrachtig en meditatief.'
  },
  { 
    id: 'wabi-sabi', 
    category: 'art',
    title: 'Wabi-Sabi Esthetiek', 
    japaneseTerm: 'Wabi-Sabi', 
    content: 'Schoonheid die imperfect, vergankelijk en onvolledig is.',
    keywords: ['wabi', 'sabi', 'imperfectie', 'kunst'],
    deepDive: 'Wabi-Sabi is het tegenovergestelde van het westerse ideaal van symmetrie en eeuwigheid (zoals Griekse beelden). Het waardeert de barst in de theekom, het mos op de steen, de verkleuring van oud hout. Het erkent dat niets blijft (mujo), niets af is, en niets perfect is. Kintsugi (goudlijm) is hier een uitvloeisel van: een gebroken kom wordt gerepareerd met goud, waardoor de breuklijnen het mooiste deel van het object worden. Het viert de geschiedenis en veerkracht van het object in plaats van de nieuwheid.'
  },
  {
    id: 'fuji-religion',
    category: 'spiritual',
    title: 'Fuji-san',
    japaneseTerm: 'Sangaku Shinko',
    content: 'Bergen zijn in Japan geen obstakels, maar godheden waar geesten wonen.',
    keywords: ['fuji', 'berg', 'god'],
    deepDive: 'In de Japanse animistische traditie dalen de goden (Kami) uit de hemel neer op bergtoppen. Fuji is de heiligste van allemaal. Eeuwenlang was het verboden voor gewone mensen (en vrouwen tot 1868) om de top te betreden; men aanbad de berg van een afstand. Tegenwoordig is het beklimmen een vorm van bedevaart. Het Japanse spreekwoord zegt: "Hij die Fuji nooit beklimt is een dwaas; hij die hem twee keer beklimt is ook een dwaas." De ervaring is spiritueel, maar ook fysiek uitputtend.'
  },

  // --- ARTS & HISTORY ---
  {
    id: 'kabuki-noh',
    category: 'art',
    title: 'Theater: Noh & Kabuki',
    japaneseTerm: 'Noh / Kabuki',
    content: 'Twee uitersten van theater: de verstilde maskers van Noh en het exuberante spektakel van Kabuki.',
    keywords: ['theater', 'noh', 'kabuki'],
    deepDive: 'Noh is het oudste theater, ontstaan in de 14e eeuw voor de samoerai-elite. Het is traag, minimalistisch en vol Zen-symboliek; de acteurs dragen maskers en bewegen als geesten. Kabuki ontstond in de 17e eeuw voor het gewone volk in Edo. Het is luid, kleurrijk, vol actie en speciale effecten (draaiende podia, valluiken). Oorspronkelijk door vrouwen gespeeld, werd het later verboden en nu worden alle rollen (ook de vrouwelijke "Onnagata") door mannen gespeeld. Het is een levend stuk geschiedenis.'
  },
  {
    id: 'kawaii',
    category: 'art',
    title: 'Kawaii Revolutie',
    japaneseTerm: 'Kawaii (Schattig)',
    content: 'Schattigheid is in Japan geen kinderachtigheid, maar een diepgewortelde culturele code en economische macht.',
    keywords: ['kawaii', 'anime', 'manga', 'schattig'],
    deepDive: 'De obsessie met "Kawaii" (Hello Kitty, Pokémon, mascottes) wordt door sociologen gezien als een reactie op de rigide, serieuze maatschappij. Het biedt een "veilige" ruimte van onschuld en zachtheid in een harde werkcultuur. Het is ook gerelateerd aan "Amae" (de behoefte om verzorgd te worden). Zelfs de politie en het leger gebruiken schattige mascottes om hun autoriteit te verzachten en toegankelijker te maken voor het publiek. Het is \'soft power\' in zijn puurste vorm.'
  },
  {
    id: 'meiji-modern',
    category: 'history',
    title: 'Meiji Restauratie',
    japaneseTerm: 'Meiji Ishin',
    content: 'Het moment waarop Japan in 30 jaar tijd sprong van middeleeuwen naar moderne wereldmacht.',
    keywords: ['meiji', 'geschiedenis', 'modernisering'],
    deepDive: 'Tussen 1868 en 1900 deed Japan iets wat geen enkel ander niet-westers land lukte: het industrialiseerde op eigen kracht om kolonisatie te voorkomen. "Wakon Yosai" was het motto: "Japanse ziel, Westerse techniek". Samoerai deden hun haarknot af en trokken pakken aan, treinen gingen rijden, en er kwam een grondwet. Maar de kernwaarden van keizerverering en hiërarchie bleven. Deze razendsnelle transformatie creëerde de spanningen die uiteindelijk leidden tot WOII, maar vormde ook de basis voor het huidige welvarende Japan.'
  },

  // --- TRANSPORT & CITY LIFE ---
  {
    id: 'shinkansen-7min',
    category: 'transport',
    title: 'Het 7-Minuten Wonder',
    japaneseTerm: 'Shinkansen',
    content: 'De Shinkansen is meer dan een trein; het is de belichaming van Japanse discipline en trots.',
    keywords: ['shinkansen', 'trein', 'schoonmaak'],
    deepDive: 'Wanneer een Shinkansen aankomt op het eindstation Tokyo, heeft de schoonmaakploeg ("TESSEI") exact 7 minuten om de hele trein te reinigen en stoelen te draaien. Ze bewegen met militaire precisie en choreografie. Voordat ze beginnen en als ze klaar zijn, buigen ze diep naar de trein. Dit toont aan dat werk, hoe nederig ook, met maximale toewijding en "Kodawari" (streven naar perfectie) moet worden uitgevoerd. De trein heeft in 50 jaar tijd 0 dodelijke ongevallen gehad.'
  },
  {
    id: 'taxi',
    category: 'transport',
    title: 'De Automatische Deur',
    japaneseTerm: 'Takushī',
    content: 'Probeer nooit zelf de deur van een taxi te openen of te sluiten.',
    keywords: ['taxi', 'deur', 'service'],
    deepDive: 'Japanse taxi\'s hebben sinds de Olympische Spelen van 1964 automatische achterdeuren, bediend door de chauffeur met een hendel. Het is een teken van ultieme gastvrijheid: de klant hoeft geen enkele fysieke inspanning te leveren. Als je zelf aan de deur trekt, kun je het mechanisme beschadigen en beledig je onbedoeld de chauffeur, omdat je impliceert dat hij zijn werk niet doet. De chauffeurs dragen witte handschoenen om te laten zien dat hun handen (en stuur) smetteloos schoon zijn.'
  },
  {
    id: 'shibuya-scramble',
    category: 'social',
    title: 'De Scramble Crossing',
    japaneseTerm: 'Scramble',
    content: 'Het drukste kruispunt ter wereld werkt alleen dankzij non-verbale samenwerking.',
    keywords: ['shibuya', 'kruispunt', 'drukte'],
    deepDive: 'Op het piekmoment steken hier 3.000 mensen tegelijk over. Toch botst bijna niemand. Dit is het fysieke bewijs van de Japanse groepscultuur. Iedereen scant continu zijn omgeving en past zijn tempo en richting miniem aan op de ander. Het is een onbewuste, collectieve dans. In het westen kijken we recht vooruit en verwachten we dat de ander uitwijkt; in Japan anticipeert iedereen op iedereen. Het is chaos, maar *geharmoniseerde* chaos.'
  },

  // --- MUSIC ---
  {
    id: 'jazz-kissa',
    category: 'music',
    title: 'Jazz Kissa Heiligdommen',
    japaneseTerm: 'Jazu Kissa (ジャズ喫茶)',
    content: 'Cafés waar praten verboden is en luisteren naar vinyl een religieuze ervaring is.',
    keywords: ['jazz', 'kissa', 'muziek', 'vinyl'],
    deepDive: 'Na WOII waren geïmporteerde Amerikaanse jazzplaten onbetaalbaar voor individuen. Jazz Kissa ontstonden als plekken waar je voor de prijs van een kop koffie naar de nieuwste platen kon luisteren op high-end geluidsinstallaties (JBL, McIntosh). De cultuur is uniek: in veel van deze cafés is praten taboe. De stoelen staan gericht naar de speakers, niet naar elkaar. Men zit urenlang met gesloten ogen te luisteren, de hoes van de plaat die opstaat wordt op een ezel getoond als een altaarstuk. Het is een ontsnapping aan de kleine, gehorige Japanse appartementen.'
  },
  {
    id: 'city-pop',
    category: 'music',
    title: 'City Pop & Nostalgie',
    japaneseTerm: 'Shiti Poppu',
    content: 'De soundtrack van een toekomst die nooit kwam. De muziek van de economische bubbel.',
    keywords: ['city pop', '80s', 'bubbel', 'muziek'],
    deepDive: 'City Pop (jaren 70/80) combineert funk, disco en soft rock met hyper-geproduceerde perfectie. Het roept beelden op van een eindeloze zomer, neonverlichting, cabriolets en rijkdom in Tokyo. Het genre is recent wereldwijd herontdekt ("Plastic Love"). Voor velen symboliseert het nu een "valse herinnering" aan een tijd van onbegrensd optimisme, vlak voordat de Japanse economische zeepbel in 1991 barstte en de "Verloren Decennia" begonnen. Het is de sound van het Japan dat de wereld zou overnemen.'
  },
  {
    id: 'karaoke',
    category: 'music',
    title: 'Karaoke Box',
    japaneseTerm: 'Karaoke (Leeg Orkest)',
    content: 'Niet om goed te zingen, maar om stoom af te blazen en sociale banden te smeden.',
    keywords: ['karaoke', 'zingen', 'box'],
    deepDive: 'Karaoke is essentieel voor "Nomikai" (drinken met collega\'s). In de hiërarchische kantoorcultuur mag je overdag je emoties niet tonen. In de geluidsdichte Karaoke Box mag alles: schreeuwen, vals zingen, huilen bij een ballad. De microfoon geeft je het recht om gehoord te worden. Het samen zingen creëert een gevoel van eenheid dat de volgende dag op kantoor weer verdwenen is, maar de onderlinge band wel heeft versterkt. Het is een sociaal smeermiddel in een introverte samenleving.'
  }
];

export const ITINERARY: DaySchedule[] = [
  {
    dayId: 1,
    date: 'Zondag 26 juli',
    title: 'Vertrek',
    city: 'Amsterdam / Vlucht',
    theme: 'Let’s go! Japan wacht.',
    dailyTip: 'Zet je horloge alvast op Japanse tijd om de mentale omschakeling te beginnen.',
    activities: [
      { 
        time: 'Hele dag', 
        title: 'Vlucht Amsterdam - Tokyo', 
        description: 'Vandaag begint de grote oversteek. Terwijl je vliegt, reis je feitelijk de toekomst in: Japan loopt in de zomer 7 uur voor. Gebruik de vlucht om mentaal afscheid te nemen van de Nederlandse directheid en je voor te bereiden op de Japanse "Wa" (harmonie).', 
        locationName: 'Schiphol', 
        coordinates: { lat: 52.3077, lng: 4.7674 }, 
        type: 'transport', 
        linkedInsightIds: ['schiphol-time', 'wa'] 
      }
    ]
  },
  {
    dayId: 2,
    date: 'Maandag 27 juli',
    title: 'Tokyo Intro',
    city: 'Tokyo',
    theme: 'Water, Tuin, Eten & Avondlicht',
    dailyTip: 'Acclimatiseer rustig. Vandaag draait om "landen" zonder stress.',
    relatedHistoryChapters: ['ch5', 'ch9'],
    activities: [
      { 
        time: '08:30', 
        title: 'Aankomst Tokyo', 
        description: 'Welkom in de grootste metropool ter wereld. Na de landing ervaar je direct de efficiëntie van het Japanse transportsysteem. Let op de stilte in de trein en de ordelijke rijen; dit is je eerste les in de ongeschreven sociale regels van de publieke ruimte.', 
        locationName: 'Narita/Haneda', 
        coordinates: COORD_TOKYO_CENTER, 
        type: 'transport', 
        linkedInsightIds: ['wa'] 
      },
      { 
        time: '10:30', 
        title: 'Hamarikyu Gardens', 
        description: 'Een unieke landschapstuin die zijn water direct uit de Baai van Tokyo haalt; de vijvers stijgen en dalen met het getij. Ooit de eendenjachtgrond van de Shogun, nu een oase van rust waar het traditionele theehuis Nakajima-no-ochaya een scherp contrast vormt met de torenhoge wolkenkrabbers van de zakenwijk Shiodome op de achtergrond.', 
        locationName: 'Hamarikyu', 
        coordinates: { lat: 35.6604, lng: 139.7630 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['hamarikyu-teahouse'] 
      },
      { 
        time: '12:15', 
        title: 'Tsukiji Outer Market', 
        description: 'Hoewel de beroemde tonijnveiling is verhuisd, blijft de "Buitenmarkt" het kloppende hart van de Tokyo food scene. Dwaal door de smalle steegjes vol verse vis, ingemaakte groenten en keukenmessen. Probeer zeker de Tamagoyaki (Japanse omelet op een stokje) en let op hoe de verkopers en klanten soepel langs elkaar bewegen in de drukte.', 
        locationName: 'Tsukiji', 
        coordinates: { lat: 35.6655, lng: 139.7707 }, 
        type: 'food', 
        linkedInsightIds: ['tsukiji-fresh', 'itadakimasu'] 
      },
      { 
        time: '17:30', 
        title: 'Odaiba Promenade', 
        description: 'Sluit de dag af op dit kunstmatige eiland met een spectaculair uitzicht op de skyline van Tokyo en de verlichte Rainbow Bridge. Oorspronkelijk gebouwd als verdedigingsforten ("Daiba") tegen westerse schepen in 1853, is het nu een futuristisch entertainmentdistrict.', 
        locationName: 'Odaiba', 
        coordinates: { lat: 35.6297, lng: 139.7759 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['odaiba-lands'] 
      }
    ]
  },
  {
    dayId: 3,
    date: 'Dinsdag 28 juli',
    title: 'Het Moderne & Futuristische Tokyo',
    city: 'Tokyo',
    theme: 'Architectuur, Technologie, Skyline',
    relatedHistoryChapters: ['ch6', 'ch8', 'ch9'], 
    activities: [
      { 
        time: '09:00', 
        title: 'Shibuya Sky & Scramble', 
        description: 'Begin de dag met een 360-graden uitzicht vanaf het dak van Shibuya Scramble Square. Beneden wacht het beroemdste kruispunt ter wereld, waar bij elk groen licht duizenden mensen oversteken zonder te botsen—een perfect voorbeeld van de Japanse georganiseerde chaos.', 
        locationName: 'Shibuya', 
        coordinates: { lat: 35.6580, lng: 139.7016 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['shibuya-scramble'] 
      },
      { 
        time: '10:30', 
        title: 'Harajuku Wandeling', 
        description: 'Wandel van de chique Omotesando (de "Champs-Élysées van Tokyo") naar de kleurrijke chaos van Takeshita Street. Dit is de geboortegrond van de "Kawaii" cultuur en extreme straatmode, ontstaan als jeugdig verzet tegen de conformiteit van de schooluniformen.', 
        locationName: 'Harajuku', 
        coordinates: { lat: 35.6702, lng: 139.7027 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['harajuku-fashion', 'kawaii'] 
      },
      { 
        time: '13:00', 
        title: 'Meiji Jingu', 
        description: 'Stap door de gigantische houten Torii-poort en laat het stadslawaai achter je. Dit serene bosheiligdom is gewijd aan Keizer Meiji, de vader van het moderne Japan. Het bos is volledig kunstmatig aangelegd in 1920, met bomen gedoneerd uit het hele land.', 
        locationName: 'Meiji Jingu', 
        coordinates: { lat: 35.6764, lng: 139.6993 }, 
        type: 'culture', 
        linkedInsightIds: ['meiji-modern', 'shinto-buddhism'] 
      },
      { 
        time: '18:00', 
        title: 'Roppongi Hills', 
        description: 'Dineren in het hart van het expat- en nachtleven district. Roppongi Hills staat symbool voor de stedelijke vernieuwing van de jaren 2000: een "stad in een stad" waar wonen, werken en cultuur samenkomen.', 
        locationName: 'Roppongi', 
        coordinates: { lat: 35.6604, lng: 139.7292 }, 
        type: 'food', 
        linkedInsightIds: ['city-pop'] 
      }
    ]
  },
  {
    dayId: 4,
    date: 'Woensdag 29 juli',
    title: 'Het Klassieke & Spirituele Tokyo',
    city: 'Tokyo',
    theme: 'Geschiedenis & Oude Wijken',
    relatedHistoryChapters: ['ch5'], 
    dailyTip: 'Let vandaag op "Uchi-Soto" (binnen-buiten).',
    activities: [
      { 
        time: '09:00', 
        title: 'Senso-ji Tempel', 
        description: 'Bezoek de oudste en kleurrijkste tempel van Tokyo in de wijk Asakusa. Loop door de Kaminarimon (Donderpoort) en langs de Nakamise-dori vol kraampjes. Dit is de sfeer van de "Shitamachi" (lage stad) waar gewone burgers en kooplieden leefden in de Edo-tijd.', 
        locationName: 'Asakusa', 
        coordinates: { lat: 35.7148, lng: 139.7967 }, 
        type: 'culture', 
        linkedInsightIds: ['sensoji-smoke', 'yanaka-cat'] 
      },
      { 
        time: '11:15', 
        title: 'Ueno Park & National Museum', 
        description: 'Het culturele hart van de stad. In dit park vochten de laatste loyalisten van de Shogun hun hopeloze strijd tegen het nieuwe keizerlijke leger in 1868. Nu vind je er musea van wereldklasse.', 
        locationName: 'Ueno', 
        coordinates: { lat: 35.7140, lng: 139.7741 }, 
        type: 'sightseeing', 
        linkedInsightIds: [] 
      },
      { 
        time: '17:00', 
        title: 'Yanaka Ginza', 
        description: 'Een van de weinige plekken die de bombardementen van WOII heeft overleefd. Hier proef je de nostalgische "Showa"-sfeer (jaren 50/60) met lage houten huisjes, lokale ambachtslieden en veel straatkatten.', 
        locationName: 'Yanaka', 
        coordinates: { lat: 35.7270, lng: 139.7651 }, 
        type: 'food', 
        linkedInsightIds: ['yanaka-cat'] 
      }
    ]
  },
  {
    dayId: 5,
    date: 'Donderdag 30 juli',
    title: 'Cultuur, Uitzicht & Shoppen',
    city: 'Tokyo',
    theme: 'Keizerlijk & Luxe',
    relatedHistoryChapters: ['ch5', 'ch6'], 
    activities: [
      { 
        time: '09:00', 
        title: 'Imperial Palace East Gardens', 
        description: 'Wandel over de fundamenten van wat ooit het grootste kasteel ter wereld was: Edo Castle. Hier regeerde de Shogun, en nu woont de Keizer. Het is een uitgestrekte groene leegte in het exacte centrum van de stad.', 
        locationName: 'Imperial Palace', 
        coordinates: { lat: 35.6852, lng: 139.7528 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['imperial-palace'] 
      },
      { 
        time: '11:30', 
        title: 'Ginza Shoppen', 
        description: 'De eerste straat van Japan die westers werd gemoderniseerd met bakstenen gebouwen en gaslantaarns. Nu het toppunt van luxe. Duik vooral de kelders (Depachika) van de grote warenhuizen in voor een onovertroffen culinaire ervaring.', 
        locationName: 'Ginza', 
        coordinates: { lat: 35.6712, lng: 139.7665 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['ginza-dept', 'omiyage'] 
      },
      { 
        time: '17:30', 
        title: 'Tokyo Tower', 
        description: 'Het rood-witte icoon van de naoorlogse wederopbouw, voltooid in 1958. Geïnspireerd op de Eiffeltoren, maar dan net iets hoger om de wereld te tonen dat Japan terug was.', 
        locationName: 'Tokyo Tower', 
        coordinates: { lat: 35.6586, lng: 139.7454 }, 
        type: 'sightseeing', 
        linkedInsightIds: [] 
      }
    ]
  },
  {
    dayId: 6,
    date: 'Vrijdag 31 juli',
    title: 'Anime & Gamecultuur',
    city: 'Tokyo',
    theme: 'Popcultuur, Manga & Neon',
    relatedHistoryChapters: ['ch8', 'ch9'], 
    activities: [
      { 
        time: '09:30', 
        title: 'Akihabara', 
        description: '"Electric Town". Ooit een zwarte markt voor radio-onderdelen, nu het spirituele thuis van de Otaku-cultuur. Verken de eindeloze verdiepingen vol manga, retro-games en elektronica.', 
        locationName: 'Akihabara', 
        coordinates: { lat: 35.6984, lng: 139.7731 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['akiba-otaku'] 
      },
      { 
        time: '13:30', 
        title: 'Nakano Broadway', 
        description: 'Voor de serieuze verzamelaar. Dit overdekte winkelcentrum uit de jaren 60 is een tijdscapsule vol zeldzame speelgoedwinkels (Mandarake) en niche-hobbyisten. Minder toeristisch dan Akihabara, maar des te authentieker.', 
        locationName: 'Nakano', 
        coordinates: { lat: 35.7058, lng: 139.6658 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['kawaii'] 
      },
      { 
        time: '17:00', 
        title: 'Shinjuku (Omoide Yokocho)', 
        description: 'Duik "Memory Lane" in, een smal steegje vol rokerige yakitori-kroegjes. Dit is een overblijfsel van de naoorlogse zwarte markt, waar je schouder aan schouder zit met Japanse salarymen.', 
        locationName: 'Shinjuku', 
        coordinates: { lat: 35.6938, lng: 139.7034 }, 
        type: 'food', 
        linkedInsightIds: ['shinjuku-yokocho'] 
      }
    ]
  },
  {
    dayId: 7,
    date: 'Zaterdag 1 augustus',
    title: 'Naar Fuji',
    city: 'Kawaguchiko',
    theme: 'Aankomen & Eerste Fuji-gevoel',
    relatedHistoryChapters: ['ch1'], 
    activities: [
      { 
        time: '10:30', 
        title: 'Fuji Excursion Trein', 
        description: 'Laat de betonnen jungle achter je en reis direct vanuit Shinjuku de bergen in. Let op hoe het landschap verandert van stedelijke dichtheid naar groene valleien en rijstvelden.', 
        locationName: 'Shinjuku Station', 
        coordinates: { lat: 35.6896, lng: 139.7006 }, 
        type: 'transport', 
        linkedInsightIds: ['wa'] 
      },
      { 
        time: '16:30', 
        title: 'North Shore Wandeling', 
        description: 'Wandel langs de noordelijke oever van Lake Kawaguchi voor het klassieke uitzicht op Mt. Fuji. De berg is niet zomaar een vulkaan, maar een godheid en het eeuwige symbool van de Japanse ziel.', 
        locationName: 'Kawaguchiko North', 
        coordinates: { lat: 35.5226, lng: 138.7445 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['fuji-religion'] 
      }
    ]
  },
  {
    dayId: 8,
    date: 'Zondag 2 augustus',
    title: 'Kawaguchiko',
    city: 'Kawaguchiko',
    theme: 'Natuur & Iconisch Uitzicht',
    activities: [
      { 
        time: 'Ochtend', 
        title: 'Oishi Park', 
        description: 'Beroemd om zijn bloemenvelden (lavendel of kochia, afhankelijk van het seizoen) die een kleurrijke voorgrond vormen voor de majestueuze berg Fuji aan de overkant van het meer.', 
        locationName: 'Oishi Park', 
        coordinates: { lat: 35.5226, lng: 138.7445 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['fuji-religion'] 
      },
      { 
        time: 'Middag', 
        title: 'Chureito Pagoda', 
        description: 'Misschien wel het meest gefotografeerde beeld van Japan: de rode pagode met Fuji op de achtergrond. Hoewel het er eeuwenoud uitziet, is het een vredesmonument gebouwd in de jaren 60.', 
        locationName: 'Chureito', 
        coordinates: { lat: 35.5012, lng: 138.8013 }, 
        type: 'sightseeing', 
        linkedInsightIds: [] 
      }
    ]
  },
  {
    dayId: 9,
    date: 'Maandag 3 augustus',
    title: 'Reis naar Kyoto',
    city: 'Kyoto',
    theme: 'Slim doorreizen & Zacht landen',
    relatedHistoryChapters: ['ch8'], 
    activities: [
      { 
        time: '09:20', 
        title: 'Bus naar Mishima', 
        description: 'Een mooie rit dwars door het berglandschap rondom Fuji, op weg naar de zuidkust waar de hogesnelheidslijn ligt.', 
        locationName: 'Kawaguchiko Station', 
        coordinates: { lat: 35.4982, lng: 138.7686 }, 
        type: 'transport', 
        linkedInsightIds: [] 
      },
      { 
        time: '11:15', 
        title: 'Shinkansen naar Kyoto', 
        description: 'Stap aan boord van de Tokaido Shinkansen. Geopend in 1964 voor de Olympische Spelen, blijft dit systeem het wereldwijde symbool voor punctualiteit en veiligheid. Let op de schoonmaakploegen die de trein in exact 7 minuten reinigen op het eindstation.', 
        locationName: 'Mishima', 
        coordinates: { lat: 35.1263, lng: 138.9109 }, 
        type: 'transport', 
        linkedInsightIds: ['shinkansen-7min'] 
      },
      { 
        time: '17:30', 
        title: 'Eerste Kyoto Avond', 
        description: 'Aankomst in de oude keizerlijke hoofdstad (794-1868). De sfeer is hier direct anders dan in Tokyo: intiemer, donkerder en doordrenkt van geschiedenis. Probeer een Kaiseki (meergangen) diner of simpele Obanzai (lokale Kyoto keuken).', 
        locationName: 'Kyoto Downtown', 
        coordinates: { lat: 35.0037, lng: 135.7706 }, 
        type: 'food', 
        linkedInsightIds: ['keigo'] 
      }
    ]
  },
  {
    dayId: 10,
    date: 'Dinsdag 4 augustus',
    title: 'Kyoto 1: Zuid',
    city: 'Kyoto',
    theme: 'Iconische Torii & Tempels',
    relatedHistoryChapters: ['ch1', 'ch6'], 
    dailyTip: 'Fushimi Inari is gewijd aan de rijstgod (Inari).',
    activities: [
      { 
        time: '07:30', 
        title: 'Fushimi Inari Taisha', 
        description: 'Beklim de heilige berg Inari door een tunnel van duizenden oranje Torii-poorten. Elke poort is gedoneerd door een bedrijf of individu voor zakelijk succes. Het heiligdom is gewijd aan de god van rijst en welvaart, bewaakt door stenen vossen.', 
        locationName: 'Fushimi Inari', 
        coordinates: { lat: 34.9671, lng: 135.7727 }, 
        type: 'culture', 
        linkedInsightIds: ['inari-kitsune', 'shinto-buddhism'] 
      },
      { 
        time: '11:00', 
        title: 'Tofuku-ji', 
        description: 'Een van de grote Zen-tempels van Kyoto, beroemd om zijn spectaculaire herfstkleuren en de moderne Zen-tuinen aangelegd in de jaren 30, die mos en steen combineren in abstracte patronen.', 
        locationName: 'Tofuku-ji', 
        coordinates: { lat: 34.9765, lng: 135.7743 }, 
        type: 'culture', 
        linkedInsightIds: ['zen-rocks'] 
      },
      { 
        time: '15:00', 
        title: 'Sanjusangendo', 
        description: 'Een indrukwekkende houten hal (de langste van Japan) gevuld met 1001 gouden beelden van Kannon, de godin van genade. Een meesterwerk van 12e-eeuwse beeldhouwkunst en religieuze devotie.', 
        locationName: 'Sanjusangendo', 
        coordinates: { lat: 34.9879, lng: 135.7717 }, 
        type: 'culture', 
        linkedInsightIds: [] 
      }
    ]
  },
  {
    dayId: 11,
    date: 'Woensdag 5 augustus',
    title: 'Kyoto 2: West & Noord',
    city: 'Kyoto',
    theme: 'Bamboe, Zen & Goud',
    relatedHistoryChapters: ['ch3'], 
    activities: [
      { 
        time: '08:00', 
        title: 'Arashiyama Bamboo Grove', 
        description: 'Wandel door het buitenaardse bamboebos. Het geluid van de wind door de stammen is in Japan officieel erkend als een van de "100 geluidslandschappen" die behouden moeten blijven.', 
        locationName: 'Arashiyama', 
        coordinates: { lat: 35.0172, lng: 135.6714 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['wabi-sabi'] 
      },
      { 
        time: '12:00', 
        title: 'Ryoan-ji', 
        description: 'De ultieme uitdrukking van Zen in tuinontwerp. Vijftien stenen drijven in een zee van geharkt grind. Vanaf het platform kun je er echter altijd maar veertien tegelijk zien—een les in de onvolledigheid van menselijke waarneming.', 
        locationName: 'Ryoan-ji', 
        coordinates: { lat: 35.0345, lng: 135.7182 }, 
        type: 'culture', 
        linkedInsightIds: ['zen-rocks'] 
      },
      { 
        time: '14:00', 
        title: 'Kinkaku-ji', 
        description: 'Het Gouden Paviljoen weerspiegelt in de vijver. Oorspronkelijk de rustvilla van Shogun Ashikaga Yoshimitsu, later omgevormd tot Zen-tempel. De bovenste verdiepingen zijn volledig bedekt met bladgoud, een symbool van de rijkdom van de Muromachi-periode.', 
        locationName: 'Kinkaku-ji', 
        coordinates: { lat: 35.0394, lng: 135.7292 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['kinkaku-gold'] 
      }
    ]
  },
  {
    dayId: 12,
    date: 'Donderdag 6 augustus',
    title: 'Kyoto 3: Higashiyama',
    city: 'Kyoto',
    theme: 'Oud Kyoto & Geisha wijken',
    relatedHistoryChapters: ['ch1', 'ch5'], 
    activities: [
      { 
        time: '08:00', 
        title: 'Kiyomizu-dera', 
        description: 'De "Tempel van het Zuivere Water", beroemd om zijn gigantische houten veranda die zonder spijkers is gebouwd en uitsteekt over de heuvels. Het uitzicht over Kyoto is adembenemend.', 
        locationName: 'Kiyomizu-dera', 
        coordinates: { lat: 34.9949, lng: 135.7850 }, 
        type: 'culture', 
        linkedInsightIds: ['kiyomizu-stage'] 
      },
      { 
        time: '15:00', 
        title: 'Theeceremonie', 
        description: 'Ervaar de verstilde wereld van de theeceremonie (Chado). Het gaat niet om het drinken, maar om de esthetiek van de handeling, de interactie tussen gastheer en gast, en het waarderen van het moment (Ichigo Ichie).', 
        locationName: 'Camellia', 
        coordinates: { lat: 34.9987, lng: 135.7816 }, 
        type: 'culture', 
        linkedInsightIds: ['do'] 
      },
      { 
        time: '17:00', 
        title: 'Gion Wandeling', 
        description: 'Dwaal in de schemering door Hanamikoji Street. Met geluk zie je een Geiko (Geisha) of Maiko (leerling) op weg naar een afspraak in een theehuis. Let op de discrete houten gevels; hier vindt de meest exclusieve entertainment van Japan plaats.', 
        locationName: 'Gion', 
        coordinates: { lat: 35.0037, lng: 135.7778 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['kyoto-geiko'] 
      }
    ]
  },
  {
    dayId: 13,
    date: 'Vrijdag 7 augustus',
    title: 'Dagtrip Nara',
    city: 'Nara',
    theme: 'Herten & Grote Boeddha',
    relatedHistoryChapters: ['ch1'], 
    activities: [
      { 
        time: '10:15', 
        title: 'Todai-ji', 
        description: 'Sta oog in oog met de Daibutsu, een 15 meter hoog bronzen Boeddhabeeld in het grootste houten gebouw ter wereld. Keizer Shomu liet dit in de 8e eeuw bouwen om het land spiritueel te beschermen tegen rampen en epidemieën.', 
        locationName: 'Todai-ji', 
        coordinates: { lat: 34.6890, lng: 135.8398 }, 
        type: 'culture', 
        linkedInsightIds: [] 
      },
      { 
        time: '12:15', 
        title: 'Lunch in Nara-machi', 
        description: 'De oude koopmanswijk van Nara. Smalle straatjes met traditionele machiya-huizen die nu dienst doen als cafés, winkeltjes en restaurants.', 
        locationName: 'Nara-machi', 
        coordinates: { lat: 34.6811, lng: 135.8302 }, 
        type: 'food', 
        linkedInsightIds: [] 
      },
      { 
        time: '15:00', 
        title: 'Nara Park', 
        description: 'Hier lopen meer dan 1000 Sika-herten vrij rond. Ze worden al eeuwenlang beschermd als boodschappers van de goden van het Kasuga-heiligdom. Ze zijn tam (en brutaal als je koekjes hebt!).', 
        locationName: 'Nara Park', 
        coordinates: { lat: 34.6851, lng: 135.8430 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['nara-deer'] 
      }
    ]
  },
  {
    dayId: 14,
    date: 'Zaterdag 8 augustus',
    title: 'Kyoto 4: Noordoost & Avond',
    city: 'Kyoto',
    theme: 'Tuinen, Water & Pontocho',
    relatedHistoryChapters: ['ch3'], 
    activities: [
      { 
        time: '08:30', 
        title: 'Ginkaku-ji', 
        description: 'Het Zilveren Paviljoen was nooit met zilver bedekt, en dat is precies het punt. Het belichaamt de schoonheid van het onvoltooide en sobere (Wabi-sabi), een tegenhanger van het gouden Kinkaku-ji.', 
        locationName: 'Ginkaku-ji', 
        coordinates: { lat: 35.0267, lng: 135.7983 }, 
        type: 'culture', 
        linkedInsightIds: ['wabi-sabi'] 
      },
      { 
        time: '10:00', 
        title: 'Philosopher’s Path', 
        description: 'Een rustig wandelpad langs een kanaaltje, genoemd naar de filosoof Nishida Kitaro die hier dagelijks liep om te mediteren. In de zomer biedt het bladerdek verkoeling.', 
        locationName: 'Path', 
        coordinates: { lat: 35.0260, lng: 135.7950 }, 
        type: 'sightseeing', 
        linkedInsightIds: [] 
      },
      { 
        time: '18:30', 
        title: 'Pontocho Avond', 
        description: 'Een van de meest sfeervolle steegjes van Japan, parallel aan de rivier. In de zomer zijn hier "Yuka" (houten terrassen op palen) gebouwd boven het water, waar je in de buitenlucht kunt dineren.', 
        locationName: 'Pontocho', 
        coordinates: { lat: 35.0062, lng: 135.7712 }, 
        type: 'food', 
        linkedInsightIds: ['itadakimasu'] 
      }
    ]
  },
  {
    dayId: 15,
    date: 'Zondag 9 augustus',
    title: 'Naar Osaka',
    city: 'Osaka',
    theme: 'Bruisend Osaka',
    relatedHistoryChapters: ['ch4', 'ch5'], 
    dailyTip: 'Osaka is de stad van de kooplieden ("Tenka no Daidokoro").',
    activities: [
      { 
        time: '13:30', 
        title: 'Osaka Castle', 
        description: 'Dit imposante kasteel staat op de plek van een grote veldslag die de definitieve overwinning van de Tokugawa-clan markeerde in 1615. Het huidige gebouw is een betonnen reconstructie, maar de grachten en muren zijn origineel en gigantisch.', 
        locationName: 'Osaka Castle', 
        coordinates: { lat: 34.6873, lng: 135.5262 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['osaka-escalator'] 
      },
      { 
        time: '17:15', 
        title: 'Dotonbori', 
        description: 'Het neon-hart van Osaka. Hier zie je de beroemde "Glico Man" en enorme bewegende krabben aan de gevels. Het motto van Osaka is "Kuidaore": eten tot je erbij neervalt.', 
        locationName: 'Dotonbori', 
        coordinates: { lat: 34.6687, lng: 135.5013 }, 
        type: 'food', 
        linkedInsightIds: ['walking-eating'] 
      }
    ]
  },
  {
    dayId: 16,
    date: 'Maandag 10 augustus',
    title: 'Osaka 1: Karakterwijken',
    city: 'Osaka',
    theme: 'Retro-sfeer & Lokale ziel',
    relatedHistoryChapters: ['ch8', 'ch9'], 
    activities: [
      { 
        time: '09:00', 
        title: 'Nakazakicho', 
        description: 'Een zeldzaam stukje Osaka dat de bombardementen van WOII heeft overleefd. Oude houten huizen zijn omgebouwd tot hipster-cafés, vintage kledingwinkels en galerieën. Een ontspannen bohemien sfeer.', 
        locationName: 'Nakazakicho', 
        coordinates: { lat: 34.7073, lng: 135.5055 }, 
        type: 'sightseeing', 
        linkedInsightIds: [] 
      },
      { 
        time: '12:00', 
        title: 'Tenjinbashisuji', 
        description: 'De langste overdekte winkelstraat van Japan (2,6 km). Hier winkelen de locals. Geen toeristische prullaria, maar messenwinkels, theihuizen, boekhandels en goedkope eetzaakjes.', 
        locationName: 'Tenma', 
        coordinates: { lat: 34.7052, lng: 135.5110 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['osaka-ben'] 
      },
      { 
        time: '16:30', 
        title: 'Shinsekai & Tsutenkaku', 
        description: 'De "Nieuwe Wereld" uit 1912, nu een charmant vervallen retro-wijk. Het is het thuis van de "Kushikatsu" (gefrituurde spiesjes). De sfeer is rauwer en volkser dan in de rest van Japan.', 
        locationName: 'Shinsekai', 
        coordinates: { lat: 34.6520, lng: 135.5063 }, 
        type: 'food', 
        linkedInsightIds: [] 
      }
    ]
  },
  {
    dayId: 17,
    date: 'Dinsdag 11 augustus',
    title: 'Osaka 2: Eten & Uitzicht',
    city: 'Osaka',
    theme: 'Minimale meters, maximale beleving',
    relatedHistoryChapters: ['ch5'], 
    activities: [
      { 
        time: '09:00', 
        title: 'Kuromon Market', 
        description: 'Bekend als "Osaka’s Keuken". Al 200 jaar komen hier de chefs van de stad hun inkopen doen. Je kunt er ter plekke gegrilde coquilles, wagyu-spiesjes en de duurste aardbeien ter wereld proeven.', 
        locationName: 'Kuromon', 
        coordinates: { lat: 34.6656, lng: 135.5074 }, 
        type: 'food', 
        linkedInsightIds: ['tsukiji-fresh'] 
      },
      { 
        time: '12:00', 
        title: 'Umeda Sky Building', 
        description: 'Een architectonisch wonder uit de jaren 90: twee torens die bovenin verbonden zijn door een "Floating Garden Observatory". De roltrap naar de top hangt in het luchtledige.', 
        locationName: 'Umeda Sky', 
        coordinates: { lat: 34.7053, lng: 135.4907 }, 
        type: 'sightseeing', 
        linkedInsightIds: [] 
      },
      { 
        time: '18:00', 
        title: 'Hozen-ji Yokocho', 
        description: 'Een geplaveid steegje bij de Hozen-ji tempel. Bezoekers gooien water over het mos-bedekte Fudo Myoo beeld voor geluk. Een oase van stilte midden in de chaos van Namba.', 
        locationName: 'Hozen-ji', 
        coordinates: { lat: 34.6675, lng: 135.5028 }, 
        type: 'food', 
        linkedInsightIds: ['shinjuku-yokocho'] 
      }
    ]
  },
  {
    dayId: 18,
    date: 'Woensdag 12 augustus',
    title: 'Naar Hiroshima',
    city: 'Hiroshima',
    theme: 'Historie & Vrede',
    relatedHistoryChapters: ['ch7'], 
    activities: [
      { 
        time: '13:30', 
        title: 'Peace Memorial Park', 
        description: 'Op 6 augustus 1945 veranderde de wereld hier voorgoed. De A-Bomb Dome, het enige gebouw dat overeind bleef bij het hypocentrum, staat als stille getuige. Het museum vertelt het menselijke verhaal achter de nucleaire verwoesting.', 
        locationName: 'Peace Park', 
        coordinates: { lat: 34.3929, lng: 132.4526 }, 
        type: 'culture', 
        linkedInsightIds: ['hiroshima-cranes'] 
      },
      { 
        time: '17:15', 
        title: 'Hondori & Okonomiyaki', 
        description: 'Hiroshima is herrezen als een levendige stad. Probeer de lokale specialiteit: Hiroshima-style Okonomiyaki (laagjes pannenkoek, kool, noedels en ei). Het gerecht ontstond als goedkoop krachtvoer tijdens de wederopbouw.', 
        locationName: 'Hondori', 
        coordinates: { lat: 34.3934, lng: 132.4586 }, 
        type: 'food', 
        linkedInsightIds: [] 
      }
    ]
  },
  {
    dayId: 19,
    date: 'Donderdag 13 augustus',
    title: 'Hiroshima 1',
    city: 'Hiroshima',
    theme: 'Kasteel & Stad',
    relatedHistoryChapters: ['ch4', 'ch7'], 
    activities: [
      { 
        time: '09:00', 
        title: 'Hiroshima Castle', 
        description: 'Oorspronkelijk gebouwd in de 16e eeuw, volledig verwoest door de bom, en getrouw herbouwd. Het herinnert eraan dat Hiroshima vóór 1945 een belangrijke militaire garnizoensstad was.', 
        locationName: 'Castle', 
        coordinates: { lat: 34.4023, lng: 132.4593 }, 
        type: 'sightseeing', 
        linkedInsightIds: [] 
      },
      { 
        time: '14:15', 
        title: 'Fukuromachi School', 
        description: 'Een van de weinige betonnen gebouwen die bleven staan. In de dagen na de bom werd het een noodhospitaal. Overlevenden schreven boodschappen op de muren ("Ik ben hier", "Waar is mijn zus?") die nu blootgelegd en bewaard zijn.', 
        locationName: 'Fukuromachi', 
        coordinates: { lat: 34.3908, lng: 132.4590 }, 
        type: 'culture', 
        linkedInsightIds: [] 
      }
    ]
  },
  {
    dayId: 20,
    date: 'Vrijdag 14 augustus',
    title: 'Miyajima Dagtrip',
    city: 'Miyajima',
    theme: 'Drijvende Torii & Heilige Berg',
    relatedHistoryChapters: ['ch1', 'ch2'], 
    activities: [
      { 
        time: '08:50', 
        title: 'Itsukushima Shrine', 
        description: 'Een van de mooiste heiligdommen van Japan, gebouwd op pieren boven het water. Het eiland zelf werd als zo heilig beschouwd dat gewone mensen de grond niet mochten aanraken, vandaar de constructie. Bij vloed lijkt de Torii te drijven.', 
        locationName: 'Shrine', 
        coordinates: { lat: 34.2968, lng: 132.3197 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['miyajima-tides'] 
      },
      { 
        time: '11:00', 
        title: 'Mount Misen', 
        description: 'Neem de kabelbaan (of wandel) naar de top. Hier brandt de "Kiezu-no-hi" (het eeuwige vuur) dat al 1200 jaar onafgebroken zou branden en later gebruikt werd om de vlam in het Vredespark van Hiroshima te ontsteken.', 
        locationName: 'Mt Misen', 
        coordinates: { lat: 34.2818, lng: 132.3129 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['fuji-religion'] 
      },
      { 
        time: '13:30', 
        title: 'Lunch: Oesters', 
        description: 'Miyajima staat bekend om zijn oesters, vers uit de binnenzee. Je vindt ze overal gegrild op straat.', 
        locationName: 'Omotesando', 
        coordinates: { lat: 34.2985, lng: 132.3218 }, 
        type: 'food', 
        linkedInsightIds: ['itadakimasu'] 
      }
    ]
  },
  {
    dayId: 21,
    date: 'Zaterdag 15 augustus',
    title: 'Terug naar Tokyo',
    city: 'Tokyo',
    theme: 'Souvenirs zonder stress',
    activities: [
      { 
        time: '12:15', 
        title: 'Asakusa Lunch', 
        description: 'Een laatste keer genieten van de traditionele sfeer in Tokyo voordat je naar huis gaat. Perfect moment voor Tempura of Soba.', 
        locationName: 'Asakusa', 
        coordinates: { lat: 35.7119, lng: 139.7963 }, 
        type: 'food', 
        linkedInsightIds: ['itadakimasu'] 
      },
      { 
        time: '14:30', 
        title: 'Tokyo Station / Marunouchi', 
        description: 'Bewonder de prachtige bakstenen gevel van Tokyo Station (1914), onlangs in oude glorie hersteld. Aan de ene kant zie je het Keizerlijk Paleis, aan de andere kant de wolkenkrabbers—de eeuwige dualiteit van Japan.', 
        locationName: 'Tokyo Station', 
        coordinates: { lat: 35.6812, lng: 139.7671 }, 
        type: 'sightseeing', 
        linkedInsightIds: ['omiyage'] 
      }
    ]
  },
  {
    dayId: 22,
    date: 'Zondag 16 augustus',
    title: 'Terugvlucht',
    city: 'Tokyo',
    theme: 'Sayonara Japan',
    activities: [
      { 
        time: 'Hele dag', 
        title: 'Vlucht Tokyo - Amsterdam', 
        description: 'Met een koffer vol herinneringen (en Omiyage) vlieg je terug, maar je neemt ook iets anders mee: een beetje van de Japanse aandacht voor detail en respect voor de omgeving.', 
        locationName: 'Airport', 
        coordinates: COORD_TOKYO_CENTER, 
        type: 'transport', 
        linkedInsightIds: [] 
      }
    ]
  }
];
