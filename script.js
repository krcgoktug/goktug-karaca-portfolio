/* ==========================================================================
   goktugkaraca.com — content + motion
   Plain JS, no build step, no framework.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Content
   -------------------------------------------------------------------------- */

const GH = "https://github.com/krcgoktug/";

/* cat: ai | backend | web | data | systems */
const PROJECTS = [
  {
    repo: "tabforge-agent",
    name: "TabForge Agent",
    cat: "ai",
    year: 2026,
    tags: ["Python", "FastAPI", "RAG", "SQLite"],
    live: null,
    team: false,
    en: "Reads the two browser tabs you last looked at, chunks and embeds them locally with Foundry Local, answers only from those chunks with visible sources, then drafts a new project from where the two topics intersect. Microsoft AI Innovators capstone.",
    tr: "En son baktığın iki sekmeyi okur, Foundry Local ile yerelde parçalayıp gömer, yalnızca o parçalardan ve kaynağını göstererek cevaplar, sonra iki konunun kesişiminden yeni bir proje taslağı çıkarır. Microsoft AI Innovators bitirme projesi."
  },
  {
    repo: "flyrank-capstone-metering-billing",
    name: "Metering & Billing Engine",
    cat: "backend",
    year: 2026,
    tags: ["Python", "Stripe", "Idempotency"],
    live: null,
    team: false,
    en: "A SaaS billing core built to stay correct under pressure: one idempotency key survives twelve concurrent retries, the request that lands exactly on the quota passes and the next one gets a 429, money is integer maths, and duplicate Stripe webhooks change nothing.",
    tr: "Baskı altında doğru kalmak için yazılmış bir SaaS faturalama çekirdeği: tek idempotency anahtarı on iki eşzamanlı denemeyi atlatıyor, kotaya tam denk gelen istek geçiyor bir sonraki 429 alıyor, para tam sayı matematiğiyle hesaplanıyor ve tekrar eden Stripe webhook'ları hiçbir şeyi değiştirmiyor."
  },
  {
    repo: "flyrank-workflow-agent",
    name: "Workflow → MCP → Agent",
    cat: "ai",
    year: 2026,
    tags: ["Python", "MCP", "Agents"],
    live: null,
    team: false,
    en: "A five-step automation workflow, an MCP server that exposes it, and an agent built on top of both — written up as a case study that reports the honest result: the agent came out worse than the plain workflow.",
    tr: "Beş adımlı bir otomasyon akışı, bunu dışarı açan bir MCP sunucusu ve ikisinin üzerine kurulan bir ajan — dürüst sonucu yazan bir vaka çalışması olarak: ajan, düz akıştan daha kötü çıktı."
  },
  {
    repo: "flyrank-polite-scraper",
    name: "Polite Scraper",
    cat: "backend",
    year: 2026,
    tags: ["Python", "robots.txt", "Schema"],
    live: null,
    team: false,
    en: "A crawler that asks first: robots.txt before anything else, a rate limit it actually respects, schema-checked output, and logs you can read when a page changes shape.",
    tr: "Önce izin isteyen bir tarayıcı: her şeyden önce robots.txt, gerçekten uyduğu bir hız limiti, şemayla doğrulanan çıktı ve sayfa değiştiğinde okunabilen loglar."
  },
  {
    repo: "flyrank-auth-api",
    name: "Auth API",
    cat: "backend",
    year: 2026,
    tags: ["FastAPI", "JWT", "Postgres"],
    live: null,
    team: false,
    en: "Registration, login, token refresh and JWT-protected routes — the boring part of every backend, done properly once so it can be reused.",
    tr: "Kayıt, giriş, token yenileme ve JWT korumalı uçlar — her backend'in sıkıcı kısmı, tekrar kullanılabilsin diye bir kez düzgün yapılmış hâli."
  },
  {
    repo: "RATEFLIX",
    name: "RATEFLIX",
    cat: "web",
    year: 2026,
    tags: ["JavaScript", "Web app"],
    live: "https://rateflix-lime.vercel.app/login",
    team: false,
    en: "A movie and series tracker: accounts, watchlists, ratings and a browsing flow that does not fight the user. Internet Programming term project, deployed and public.",
    tr: "Film ve dizi takip uygulaması: hesaplar, izleme listeleri, puanlama ve kullanıcıyla kavga etmeyen bir gezinme akışı. İnternet Programcılığı dönem projesi, yayında."
  },
  {
    repo: "web-autorent",
    name: "web-autorent",
    cat: "web",
    year: 2025,
    tags: ["PHP", "SQLite", "UI"],
    live: "https://web-autorent-wk34.onrender.com",
    team: false,
    en: "A car rental platform with dynamic pricing and a match advisor that narrows the fleet down to the two cars you probably want. Plain PHP and SQLite, deliberately no framework.",
    tr: "Dinamik fiyatlama ve filoyu muhtemelen istediğin iki araca indiren bir eşleştirme danışmanı olan araç kiralama platformu. Düz PHP ve SQLite, bilerek framework'süz."
  },
  {
    repo: "System-Programming-Term-Project",
    name: "Student Information System",
    cat: "systems",
    year: 2026,
    tags: ["C++", "PostgreSQL", "Docker"],
    live: null,
    team: true,
    en: "A containerized student information system with a C++ backend and PostgreSQL persistence — process handling, sockets and build discipline learned the hard way.",
    tr: "C++ backend ve PostgreSQL kalıcılığı olan konteynerize öğrenci bilgi sistemi — süreç yönetimi, soketler ve derleme disiplini zor yoldan öğrenildi."
  },
  {
    repo: "Data-Mining-for-Cybersecurity-Project",
    name: "IDS on CIC-IDS2017",
    cat: "data",
    year: 2026,
    tags: ["Python", "ML", "Security"],
    live: null,
    team: true,
    en: "An intrusion detection pipeline over the CIC-IDS2017 dataset: cleaning, feature selection, model comparison, and a hard look at what the accuracy number is actually hiding.",
    tr: "CIC-IDS2017 veri seti üzerinde saldırı tespit hattı: temizleme, öznitelik seçimi, model karşılaştırması ve doğruluk oranının aslında neyi sakladığına dikkatli bir bakış."
  },
  {
    repo: "Autonomous-AI-Parking-Simulation",
    name: "Parking: A* vs Q-Learning",
    cat: "ai",
    year: 2026,
    tags: ["Python", "Q-Learning", "A*"],
    live: null,
    team: true,
    en: "Same 15×15 parking lot, two agents: one that plans with A* and one that learns with Q-Learning. The interesting part is where the learner wins and where it never catches up.",
    tr: "Aynı 15×15 otopark, iki ajan: biri A* ile plan yapıyor, diğeri Q-Learning ile öğreniyor. İlginç kısım, öğrenenin nerede kazandığı ve nerede asla yetişemediği."
  },
  {
    repo: "digital-system-design-cpu-chip",
    name: "CPU Chip (Verilog)",
    cat: "systems",
    year: 2026,
    tags: ["Verilog", "ALU", "RTL"],
    live: null,
    team: false,
    en: "An 8-bit ALU, a 16-bit instruction decoder, an 8×8 register file and the wiring that makes them a CPU — plus the testbench that proves the ALU does what the spec says.",
    tr: "8-bit ALU, 16-bit komut çözücü, 8×8 register dosyası ve bunları bir CPU yapan bağlantılar — bir de ALU'nun spesifikasyona uyduğunu kanıtlayan testbench."
  },
  {
    repo: "luminalib",
    name: "LuminaLib",
    cat: "systems",
    year: 2026,
    tags: ["Java 17", "OOP", "Concurrency"],
    live: null,
    team: false,
    en: "A library system used as an excuse to get object modelling right: a real role hierarchy, an automated fine policy, layered search, and a catalog kept thread-safe with a read/write lock.",
    tr: "Nesne modellemesini doğru yapmak için bahane edilen bir kütüphane sistemi: gerçek bir rol hiyerarşisi, otomatik ceza politikası, katmanlı arama ve read/write lock ile thread-safe tutulan bir katalog."
  },
  {
    repo: "viewflix-database",
    name: "VIEWFLIX Database",
    cat: "data",
    year: 2026,
    tags: ["SQL", "3NF", "ER"],
    live: null,
    team: false,
    en: "A streaming platform modelled properly: 11 tables in 3NF, real constraints, an ER diagram that matches the schema, and fifteen queries from trivial to genuinely annoying.",
    tr: "Düzgün modellenmiş bir yayın platformu: 3NF'de 11 tablo, gerçek kısıtlar, şemayla birebir uyuşan bir ER diyagramı ve basitten gerçekten can sıkıcıya on beş sorgu."
  },
  {
    repo: "smart-fridge-project",
    name: "Zero Waste Smart Fridge",
    cat: "systems",
    year: 2026,
    tags: ["C++", "IoT", "Vision"],
    live: null,
    team: true,
    en: "A fridge that keeps track of what is inside and how long it has been there, so food gets eaten instead of thrown out. Embedded sensing on one end, computer vision on the other.",
    tr: "İçinde ne olduğunu ve ne kadar süredir orada durduğunu takip eden bir buzdolabı; amaç yemeğin çöpe değil, sofraya gitmesi. Bir ucunda gömülü sensörler, diğer ucunda görüntü işleme."
  },
  {
    repo: "budgee-1",
    name: "Budgee",
    cat: "web",
    year: 2025,
    tags: ["Kotlin", "Android"],
    live: null,
    team: true,
    en: "A personal finance app for Android: log what you spend, see where it went, and get a number that means something at the end of the month.",
    tr: "Android için kişisel finans uygulaması: harcadığını kaydet, nereye gittiğini gör ve ay sonunda anlamı olan bir sayı al."
  },
  {
    repo: "bean-mode",
    name: "bean-mode",
    cat: "backend",
    year: 2026,
    tags: ["Python", "CLI"],
    live: null,
    team: false,
    en: "A very small CLI that picks your coffee brew from your mood and the time on the clock. Built in an evening, because not everything has to be a term project.",
    tr: "Ruh hâline ve saate bakıp kahveni seçen küçücük bir CLI. Bir akşamda yazıldı, çünkü her şeyin dönem projesi olması gerekmiyor."
  }
];

const TIMELINE = [
  {
    when: "Aug — Sep 2026",
    when_tr: "Ağu — Eyl 2026",
    org: "ITServ Tech · İstanbul",
    en: {
      title: "Software internship",
      text: "A short internship spent on TypeScript work."
    },
    tr: {
      title: "Yazılım stajı",
      text: "TypeScript tarafında çalıştığım kısa bir staj."
    },
    links: []
  },
  {
    when: "Jul 2026 — now",
    when_tr: "Tem 2026 — bugün",
    now: true,
    org: "ZENO Bilişim ve Danışmanlık · İstanbul",
    en: {
      title: "Software developer — internship, now voluntary",
      text: "CRM work on the consultancy side: Microsoft Dynamics implementation, integration between it and the systems around it, and the reporting that comes with it — plus IoT projects where the hard part is getting telemetry out of a site with almost no connectivity. It started as a summer internship; I have stayed on as a volunteer since it ended."
    },
    tr: {
      title: "Yazılım geliştirici — staj, şimdi gönüllü",
      text: "Danışmanlık tarafında CRM işleri: Microsoft Dynamics kurulumu, çevresindeki sistemlerle entegrasyonu ve beraberinde gelen raporlama — bir de zor kısmı neredeyse hiç bağlantı olmayan bir sahadan telemetriyi dışarı çıkarmak olan IoT projeleri. Yaz stajı olarak başladı; staj bittiğinden beri gönüllü olarak devam ediyorum."
    },
    links: []
  },
  {
    when: "Jul — Aug 2026",
    when_tr: "Tem — Ağu 2026",
    org: "Microsoft · AI Innovators · Remote",
    en: {
      title: "AI Innovators Program participant",
      text: "Project-based AI work built on LLM and retrieval-augmented generation, delivered as a production-minded MVP in four weeks: local retrieval over your two most recent browser tabs, answers that show the chunk they came from, and a synthesis mode that turns two unrelated tabs into one project spec."
    },
    tr: {
      title: "AI Innovators programı katılımcısı",
      text: "LLM ve retrieval-augmented generation üzerine kurulu proje tabanlı yapay zekâ çalışması, dört haftada üretime bakan bir MVP olarak: en son açtığın iki sekme üzerinde yerel retrieval, hangi parçadan geldiğini gösteren cevaplar ve alakasız iki sekmeyi tek bir proje taslağına çeviren bir sentez modu."
    },
    links: [{ label: "TabForge Agent", url: GH + "tabforge-agent" }]
  },
  {
    when: "Jul 2026 — now",
    when_tr: "Tem 2026 — bugün",
    now: true,
    org: "FlyRank AI · Remote",
    en: {
      title: "Backend AI engineering intern",
      text: "Shipped deliverables every week instead of exercises: a JWT auth API, a usage metering and billing engine that holds under duplicate webhooks and concurrent retries, a robots-first scraper, and a workflow → MCP → agent case study whose conclusion was that the agent was the worse option."
    },
    tr: {
      title: "Backend AI engineering stajyeri",
      text: "Alıştırma yerine her hafta teslim edilen işler: JWT auth API'si, tekrar eden webhook'lar ve eşzamanlı denemeler altında bozulmayan bir kullanım ölçüm/faturalama motoru, robots.txt önceliğine uyan bir tarayıcı ve sonucu 'ajan daha kötü çıktı' olan bir workflow → MCP → ajan vaka çalışması."
    },
    links: [
      { label: "Billing engine", url: GH + "flyrank-capstone-metering-billing" },
      { label: "Workflow → agent", url: GH + "flyrank-workflow-agent" },
      { label: "Auth API", url: GH + "flyrank-auth-api" }
    ]
  },
  {
    when: "Jul — Aug 2025",
    when_tr: "Tem — Ağu 2025",
    org: "DenizBank · İstanbul",
    en: {
      title: "Android developer",
      text: "A seasonal programme on the mobile side: an AI-integrated personal finance application for a smartwatch, where every interaction had to survive a screen you can cover with a thumb."
    },
    tr: {
      title: "Android geliştirici",
      text: "Mobil tarafta dönemsel bir program: akıllı saat için yapay zekâ entegre bir kişisel finans uygulaması — her etkileşimin başparmakla kapatılabilecek bir ekranda çalışması gerekiyordu."
    },
    links: []
  }
];

const EDUCATION = [
  {
    when: "2023 — 2027",
    when_tr: "2023 — 2027",
    org: "Fenerbahçe University · İstanbul",
    en: {
      title: "BSc Computer Engineering — final year",
      text: "Systems programming, digital system design, data mining, database systems, object-oriented design, computer architecture. The courses I cared about did not stop at the grade."
    },
    tr: {
      title: "Bilgisayar Mühendisliği lisans — son sınıf",
      text: "Sistem programlama, sayısal sistem tasarımı, veri madenciliği, veritabanı sistemleri, nesne yönelimli tasarım, bilgisayar mimarisi. Önemsediğim dersler notla bitmedi."
    },
    links: []
  }
];

const SPEC = [
  { key_en: "Languages", key_tr: "Diller", items: ["C", "C++", "Java", "Kotlin", "Python", "TypeScript", "JavaScript", "PHP", "SQL", "Verilog"] },
  { key_en: "Backend", key_tr: "Backend", items: ["FastAPI", "REST", "JWT auth", "Idempotency", "Rate limiting", "Stripe (test)", "OpenAPI"] },
  { key_en: "AI", key_tr: "Yapay zekâ", items: ["RAG", "Embeddings", "Foundry Local", "Ollama", "MCP", "Q-Learning", "A*"] },
  { key_en: "IoT & hardware", key_tr: "IoT & donanım", items: ["ESP32 / Arduino", "I²C sensors", "LoRa", "Verilog HDL", "Sockets"] },
  { key_en: "Mobile & web", key_tr: "Mobil & web", items: ["TypeScript", "Next.js", "React", "Kotlin / Android", "Flutter"] },
  { key_en: "Data", key_tr: "Veri", items: ["PostgreSQL", "MySQL", "SQLite", "3NF modelling", "pandas", "scikit-learn"] },
  { key_en: "Tooling", key_tr: "Araçlar", items: ["Git & GitHub", "Docker", "Linux", "Vercel", "Playwright", "Postman"] }
];

const INTERESTS = [
  { en: "IoT & embedded", tr: "IoT & gömülü" },
  { en: "Applied AI", tr: "Uygulamalı YZ" },
  { en: "Mobile apps", tr: "Mobil uygulama" },
  { en: "Backend systems", tr: "Backend sistemler" }
];

const CATS = [
  { id: "all", en: "All", tr: "Tümü" },
  { id: "ai", en: "AI & agents", tr: "Yapay zekâ" },
  { id: "backend", en: "Backend", tr: "Backend" },
  { id: "web", en: "Web & app", tr: "Web & uygulama" },
  { id: "data", en: "Data", tr: "Veri" },
  { id: "systems", en: "Systems & hardware", tr: "Sistem & donanım" }
];

const I18N = {
  en: {
    title: "Göktuğ Karaca — Computer Engineer",
    desc: "Göktuğ Karaca — computer engineering student in Istanbul. Backends that stay correct under retries, AI agents that cite their sources, and hardware that has to work offline.",
    nav_work: "Work",
    nav_profile: "Profile",
    nav_track: "Track",
    nav_education: "Education",
    nav_stack: "Stack",
    nav_resume: "Résumé",
    nav_contact: "Contact",
    hero_meta: "Computer engineering · İstanbul · BSc 2027",
    hero_lede:
      "I build backends that stay correct when the client retries, AI agents that cite their sources, and devices that keep reporting when the network doesn't.",
    hero_cta_work: "See the work",
    plate_caption: "Göktuğ Karaca, İstanbul",
    scroll_cue: "Scroll",
    work_title: "Selected work",
    work_note:
      "Everything below is a repository I actually pushed. Hover a row to read it, click to open it on GitHub.",
    work_all: "All repositories on GitHub",
    work_empty: "Nothing in this filter yet.",
    preview_open: "Open repository ↗",
    profile_title: "Profile",
    profile_note: "Who is writing all of this, and how.",
    profile_p1:
      "Most of what I know came from shipping things that had to survive contact with something real — a retrying client, a dataset that did not cooperate, a board with no internet — rather than from a lecture hall.",
    profile_p2:
      "The pattern in my work is narrow scope, honest verification. A billing engine is only interesting if it survives twelve concurrent retries. A retrieval agent is only useful if it shows which chunk it answered from. So I build the smallest version that can be proven, prove it, and write down where it breaks.",
    profile_p3:
      "The work I go looking for sits between three things: devices that have to report from somewhere with bad signal, models that have to justify their answers, and the mobile or TypeScript surface that makes both readable to a person. Verilog on one end, FastAPI in the middle, a phone on the other — knowing what the machine is actually doing makes me better three layers up.",
    fact_based: "Based in",
    fact_now: "Currently",
    fact_now_v: "Local AI agents and IoT telemetry",
    fact_focus: "Focus",
    fact_focus_v: "Backend · IoT · Applied AI · Mobile",
    fact_langs: "Languages",
    fact_langs_v: "Turkish, English",
    fact_status: "Status",
    fact_status_v: "Open to 2026/27 internships",
    track_title: "Track record",
    track_note: "Internships, programmes, and what each one actually produced.",
    edu_title: "Education",
    edu_note: "Where the degree comes from, and what the coursework turned into.",
    stack_title: "Stack",
    stack_note: "Tools I have actually used in a finished project, not a tutorial.",
    contact_title: "Contact",
    contact_note: "Internships, collaborations, or a question about any repo above.",
    ch_resume: "Résumé",
    ch_resume_v: "PDF, always current",
    ch_booking: "Book 20 minutes",
    ch_booking_v: "Suggest two times by email",
    enter_cta: "Click the screen",
    foot_built: "Hand-written HTML, CSS and JavaScript. No framework.",
    foot_top: "Back to top ↑",
    team: "Team project",
    live: "Live",
    ticker: [
      "Open to 2026/27 internships",
      "IoT · Applied AI · Mobile · TypeScript",
      "İstanbul, Türkiye",
      "{n} repositories and counting"
    ]
  },
  tr: {
    title: "Göktuğ Karaca — Bilgisayar Mühendisi",
    desc: "Göktuğ Karaca — İstanbul'da bilgisayar mühendisliği öğrencisi. Tekrar denemelerde bozulmayan backend'ler, kaynağını gösteren yapay zekâ ajanları ve internetsiz çalışması gereken donanım.",
    nav_work: "İşler",
    nav_profile: "Profil",
    nav_track: "Deneyim",
    nav_education: "Eğitim",
    nav_stack: "Yığın",
    nav_resume: "Özgeçmiş",
    nav_contact: "İletişim",
    hero_meta: "Bilgisayar mühendisliği · İstanbul · Lisans 2027",
    hero_lede:
      "İstemci isteği tekrarladığında bile doğru kalan backend'ler, kaynağını gösteren yapay zekâ ajanları ve ağ çöktüğünde bile veri göndermeye devam eden cihazlar yazıyorum.",
    hero_cta_work: "İşlere bak",
    plate_caption: "Göktuğ Karaca, İstanbul",
    scroll_cue: "Kaydır",
    work_title: "Seçilmiş işler",
    work_note:
      "Aşağıdaki her şey gerçekten push ettiğim bir repo. Okumak için satırın üstüne gel, GitHub'da açmak için tıkla.",
    work_all: "GitHub'daki tüm repolar",
    work_empty: "Bu filtrede henüz bir şey yok.",
    preview_open: "Repoyu aç ↗",
    profile_title: "Profil",
    profile_note: "Bütün bunları kim, nasıl yazıyor.",
    profile_p1:
      "Bildiklerimin çoğu ders anlatımından değil, gerçek bir şeyle temas etmek zorunda kalan işleri teslim etmekten geldi: isteği tekrarlayan bir istemci, uyum sağlamayan bir veri seti, internetsiz bir kart.",
    profile_p2:
      "İşlerimdeki tek desen şu: kapsamı dar tut, doğrulamayı dürüst yap. Bir faturalama motoru ancak on iki eşzamanlı denemeyi atlatırsa ilginçtir. Bir retrieval ajanı ancak cevabı hangi parçadan verdiğini gösteriyorsa işe yarar. O yüzden kanıtlanabilecek en küçük sürümü yazar, kanıtlar ve nerede kırıldığını not ederim.",
    profile_p3:
      "Aradığım iş üç şeyin arasında duruyor: sinyalin zor olduğu bir yerden veri göndermek zorunda olan cihazlar, cevabını gerekçelendirmek zorunda olan modeller ve ikisini de insanın okuyabileceği hâle getiren mobil ya da TypeScript arayüz. Bir uçta Verilog, ortada FastAPI, diğer uçta telefon — makinenin ne yaptığını bilmek üç katman yukarıda işimi iyileştiriyor.",
    fact_based: "Konum",
    fact_now: "Şu an",
    fact_now_v: "Yerel yapay zekâ ajanları ve IoT telemetrisi",
    fact_focus: "Odak",
    fact_focus_v: "Backend · IoT · Uygulamalı YZ · Mobil",
    fact_langs: "Diller",
    fact_langs_v: "Türkçe, İngilizce",
    fact_status: "Durum",
    fact_status_v: "2026/27 stajlarına açık",
    track_title: "Deneyim",
    track_note: "Stajlar, programlar ve her birinin gerçekten ortaya çıkardığı iş.",
    edu_title: "Eğitim",
    edu_note: "Diplomanın geldiği yer ve derslerin dönüştüğü şeyler.",
    stack_title: "Yığın",
    stack_note: "Tutorial'da değil, bitmiş bir projede gerçekten kullandığım araçlar.",
    contact_title: "İletişim",
    contact_note: "Staj, iş birliği ya da yukarıdaki repolardan biriyle ilgili bir soru.",
    ch_resume: "Özgeçmiş",
    ch_resume_v: "PDF, her zaman güncel",
    ch_booking: "20 dakikalık görüşme ayarla",
    ch_booking_v: "E-postayla iki saat öner",
    enter_cta: "Ekrana tıkla",
    foot_built: "Elle yazılmış HTML, CSS ve JavaScript. Framework yok.",
    foot_top: "Başa dön ↑",
    team: "Ekip projesi",
    live: "Yayında",
    ticker: [
      "2026/27 stajlarına açığım",
      "IoT · Uygulamalı YZ · Mobil · TypeScript",
      "İstanbul, Türkiye",
      "{n} repo ve devamı geliyor"
    ]
  }
};

/* --------------------------------------------------------------------------
   2. Small helpers
   -------------------------------------------------------------------------- */

const root = document.documentElement;
const still = root.classList.contains("still");
const touch = root.classList.contains("touch");
const $ = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

let lang = root.getAttribute("lang") === "tr" ? "tr" : "en";
let dict = I18N[lang];

/* deterministic little sigil per project, so every card gets its own mark */
function emblem(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const rnd = () => {
    h = (Math.imul(h, 1664525) + 1013904223) >>> 0;
    return h / 4294967296;
  };
  const n = 4;
  const c = 100 / n;
  let out = "";
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const r = rnd();
      const cx = x * c + c / 2;
      const cy = y * c + c / 2;
      if (r < 0.2) {
        out += '<circle cx="' + cx + '" cy="' + cy + '" r="' + c * 0.3 + '"/>';
      } else if (r < 0.4) {
        out +=
          '<rect x="' + (x * c + c * 0.22) + '" y="' + (y * c + c * 0.22) +
          '" width="' + c * 0.56 + '" height="' + c * 0.56 + '"/>';
      } else if (r < 0.58) {
        out +=
          '<path d="M' + (x * c + c * 0.2) + " " + (y * c + c * 0.8) +
          "L" + cx + " " + (y * c + c * 0.2) +
          "L" + (x * c + c * 0.8) + " " + (y * c + c * 0.8) + 'Z"/>';
      } else if (r < 0.76) {
        out +=
          '<rect x="' + (x * c + c * 0.16) + '" y="' + (cy - 1.6) +
          '" width="' + c * 0.68 + '" height="3.2"/>';
      }
    }
  }
  return '<svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor" aria-hidden="true">' + out + "</svg>";
}

/* --------------------------------------------------------------------------
   3. Rendering
   -------------------------------------------------------------------------- */

const workList = $("#workList");
const filtersBox = $("#filters");
const timelineBox = $("#timeline");
const educationBox = $("#education-list");
const specBox = $("#spec");
const preview = $("#preview");

function renderFilters() {
  filtersBox.innerHTML = CATS.map((cat) => {
    const count = cat.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === cat.id).length;
    return (
      '<button type="button" data-filter="' + cat.id + '"' +
      (cat.id === activeFilter ? ' class="on"' : "") +
      ">" + cat[lang] + "<sup>" + count + "</sup></button>"
    );
  }).join("");
}

function renderWork() {
  workList.innerHTML = PROJECTS.map((p, i) => {
    const num = String(i + 1).padStart(2, "0");
    const tags = p.tags.join(" · ");
    const badge = p.live ? '<span class="tag-live">' + dict.live + "</span>" : "";
    const url = p.live || GH + p.repo;
    return (
      '<li data-cat="' + p.cat + '" data-repo="' + p.repo + '">' +
      '<a class="row" href="' + url + '" target="_blank" rel="noreferrer" data-idx="' + i + '">' +
      '<span class="row-num">' + num + "</span>" +
      '<span class="row-title">' + p.name + badge + "</span>" +
      '<span class="row-body">' + p[lang] + "</span>" +
      '<span class="row-tags">' + tags + "</span>" +
      '<span class="row-year">' + p.year + "</span>" +
      '<span class="row-emblem">' + emblem(p.repo) + "</span>" +
      "</a></li>"
    );
  }).join("");
}

function renderLedger(box, rows) {
  if (!box) return;
  box.innerHTML = rows
    .map((t) => {
      const body = t[lang];
      const when = lang === "tr" && t.when_tr ? t.when_tr : t.when;
      const external = (url) => (url.charAt(0) === "#" ? "" : ' target="_blank" rel="noreferrer"');
      const links = t.links.length
        ? '<div class="tl-links">' +
          t.links
            .map((l) => "<a href=\"" + l.url + "\"" + external(l.url) + ">" + l.label + "</a>")
            .join("") +
          "</div>"
        : "";
      return (
        '<li class="tl-item">' +
        '<div class="tl-when meta">' +
        "<span>" + when + (t.now ? " <b>●</b>" : "") + "</span>" +
        '<span class="tl-org">' + t.org + "</span>" +
        "</div>" +
        '<div class="tl-body">' +
        '<h3 class="tl-title">' + body.title + "</h3>" +
        (body.text ? '<p class="tl-text">' + body.text + "</p>" : "") +
        links +
        "</div></li>"
      );
    })
    .join("");
}

function renderInterests() {
  const box = $("#interests");
  if (box) box.innerHTML = INTERESTS.map((i) => "<li>" + i[lang] + "</li>").join("");
}

function renderSpec() {
  specBox.innerHTML = SPEC.map((row) => {
    return (
      '<div class="spec-row">' +
      '<span class="spec-key meta">' + row["key_" + lang] + "</span>" +
      '<div class="chips">' + row.items.map((i) => '<span class="chip">' + i + "</span>").join("") + "</div>" +
      "</div>"
    );
  }).join("");
}

function renderTicker() {
  const track = $("#tickerTrack");
  const unit = dict.ticker
    .map((t) => "<span>" + t.replace("{n}", PROJECTS.length) + "<em>✳</em></span>")
    .join("");
  track.innerHTML = unit + unit + unit + unit;
}

/* --------------------------------------------------------------------------
   4. Language + theme
   -------------------------------------------------------------------------- */

function applyLang(next) {
  lang = I18N[next] ? next : "en";
  dict = I18N[lang];
  root.setAttribute("lang", lang);
  document.title = dict.title;
  const meta = $('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict.desc);

  $$("[data-i18n]").forEach((node) => {
    const value = dict[node.dataset.i18n];
    if (value) node.textContent = value;
    delete node.dataset.text; /* drop any scrambled copy of the old language */
  });

  $$(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));

  renderFilters();
  renderWork();
  renderLedger(timelineBox, TIMELINE);
  renderLedger(educationBox, EDUCATION);
  renderSpec();
  renderTicker();
  renderInterests();
  applyFilter(activeFilter, true);
  enhanceFromGitHub();
  observeNew();

  try {
    localStorage.setItem("gk-lang", lang);
  } catch (e) {}
}

function applyTheme(next) {
  root.setAttribute("data-theme", next);
  const themeColor = $('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", next === "light" ? "#efebe0" : "#0c0c0d");
  try {
    localStorage.setItem("gk-theme", next);
  } catch (e) {}
  paintField();
}

$$(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));

$("#themeBtn").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  if (document.startViewTransition && !still) {
    try {
      const vt = document.startViewTransition(() => applyTheme(next));
      /* a skipped transition rejects these; the theme still flips */
      ["ready", "finished", "updateCallbackDone"].forEach((k) => {
        if (vt && vt[k] && vt[k].catch) vt[k].catch(() => {});
      });
    } catch (e) {
      applyTheme(next);
    }
  } else {
    applyTheme(next);
  }
});

/* --------------------------------------------------------------------------
   5. Work: filters and the floating preview
   -------------------------------------------------------------------------- */

let activeFilter = "all";

function applyFilter(id, silent) {
  activeFilter = id;
  let shown = 0;
  $$("#workList li").forEach((li) => {
    const on = id === "all" || li.dataset.cat === id;
    li.classList.toggle("gone", !on);
    if (on) shown++;
  });
  $$(".filters button").forEach((b) => b.classList.toggle("on", b.dataset.filter === id));
  $("#workEmpty").hidden = shown !== 0;
  if (!silent) renumber();
  else renumber();
}

function renumber() {
  let n = 0;
  $$("#workList li").forEach((li) => {
    if (li.classList.contains("gone")) return;
    n++;
    const num = $(".row-num", li);
    if (num) num.textContent = String(n).padStart(2, "0");
  });
}

filtersBox.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-filter]");
  if (btn) applyFilter(btn.dataset.filter);
});


/* floating preview follows the pointer over the index */
let pvX = 0, pvY = 0, pvTX = 0, pvTY = 0, pvOn = false;

function showPreview(idx) {
  if (touch || still) return;
  const p = PROJECTS[idx];
  if (!p) return;
  $("#previewEmblem").innerHTML = emblem(p.repo);
  $("#previewKind").textContent =
    p.tags.join(" / ") + (p.team ? " / " + dict.team : "");
  $("#previewText").textContent = p[lang];
  $(".preview-open").textContent = dict.preview_open;
  if (!pvOn) {
    /* first hover: start next to the pointer instead of flying in from 0,0 */
    pvX = pvTX + 26;
    pvY = Math.max(14, pvTY - 90);
  }
  preview.classList.add("on");
  pvOn = true;
}

function hidePreview() {
  preview.classList.remove("on");
  pvOn = false;
}

workList.addEventListener("pointerover", (e) => {
  const row = e.target.closest(".row");
  if (row) showPreview(Number(row.dataset.idx));
});

workList.addEventListener("pointerleave", hidePreview);

document.addEventListener("pointermove", (e) => {
  pvTX = e.clientX;
  pvTY = e.clientY;
});

/* --------------------------------------------------------------------------
   6. Live data from GitHub (progressive enhancement, silent on failure)
   -------------------------------------------------------------------------- */

let ghCache = null;

function enhanceFromGitHub() {
  const paint = (map) => {
    $$("#workList li").forEach((li) => {
      const info = map[li.dataset.repo.toLowerCase()];
      if (!info) return;
      const year = $(".row-year", li);
      if (year) year.textContent = info.year;
    });
  };

  if (ghCache) {
    paint(ghCache);
    return;
  }

  fetch("https://api.github.com/users/krcgoktug/repos?per_page=100&sort=pushed")
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((repos) => {
      if (!Array.isArray(repos)) return;
      const map = {};
      repos.forEach((r) => {
        map[r.name.toLowerCase()] = { year: String(r.pushed_at).slice(0, 4) };
      });
      ghCache = map;
      paint(map);
    })
    .catch(() => {
      /* offline or rate limited: the static years below stay in place */
    });
}

/* --------------------------------------------------------------------------
   7. Motion
   -------------------------------------------------------------------------- */

/* 7.1 split headlines into letters */
function splitText() {
  $$("[data-split]").forEach((node) => {
    if (node.dataset.done) return;
    const text = node.textContent;
    node.dataset.done = "1";
    node.setAttribute("aria-label", text);
    node.innerHTML = Array.from(text)
      .map((ch, i) => {
        const c = ch === " " ? "&nbsp;" : ch;
        return '<span class="ch" style="--d:' + i * 34 + 'ms">' + c + "</span>";
      })
      .join("");
  });
}

/* 7.2 reveal on scroll — plain geometry, no IntersectionObserver, so it also
   works in embedded/headless contexts where observer callbacks never fire */
let revealQueue = [];

function observeNew() {
  const targets = $$(
    ".section-head, .prose p, .facts, .plate, .interests li, .work li, .tl-item, .spec-row, .channels li, .shout, .all-repos, .work-bar, [data-split]"
  ).filter((n) => !n.dataset.watched);

  targets.forEach((node, i) => {
    node.dataset.watched = "1";
    if (!node.hasAttribute("data-split")) node.setAttribute("data-reveal", "");
    node.style.setProperty("--d", Math.min(i * 26, 260) + "ms");
    revealQueue.push(node);
  });

  checkReveals();
}

function checkReveals() {
  if (!revealQueue.length) return;
  const h = window.innerHeight;
  revealQueue = revealQueue.filter((node) => {
    const r = node.getBoundingClientRect();
    if (r.top > h * 0.92 || r.bottom < 0) return true;
    node.classList.add("in");
    const title = node.querySelector("[data-scramble]");
    if (title) scramble(title);
    return false;
  });
}

/* 7.3 text scramble */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&/*+=<>";

function scramble(node) {
  if (still || node.dataset.busy) return;
  const text = node.dataset.text || node.textContent;
  node.dataset.text = text;
  node.dataset.busy = "1";
  const chars = Array.from(text);
  let frame = 0;
  const steps = chars.map((_, i) => ({ start: i * 2, end: i * 2 + 8 + Math.floor(Math.random() * 8) }));
  const run = () => {
    let out = "";
    let done = 0;
    chars.forEach((ch, i) => {
      if (ch === " ") {
        out += " ";
        done++;
        return;
      }
      if (frame >= steps[i].end) {
        out += ch;
        done++;
      } else if (frame >= steps[i].start) {
        out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      } else {
        out += " ";
      }
    });
    node.textContent = out;
    frame++;
    if (done < chars.length) requestAnimationFrame(run);
    else {
      node.textContent = text;
      node.dataset.busy = "";
    }
  };
  run();
}

$$("[data-scramble]").forEach((node) => {
  node.addEventListener("pointerenter", () => scramble(node));
});

/* 7.5 custom cursor + magnetic buttons */
const cursor = $("#cursor");
const cursorLabel = $("#cursorLabel");
let cx = window.innerWidth / 2, cy = window.innerHeight / 2, tx = cx, ty = cy;
/* separate pointer for the hero field, so it stays calm until the mouse moves */
let px = -9999, py = -9999;
document.addEventListener("pointermove", (e) => {
  px = e.clientX;
  py = e.clientY;
});

if (!touch && !still) {
  document.addEventListener("pointermove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.classList.add("on");
  });

  document.addEventListener("pointerleave", () => cursor.classList.remove("on"));

  const HOT = "a, button, .row, .chip, .facts dl > div";
  document.addEventListener("pointerover", (e) => {
    const hot = e.target.closest(HOT);
    if (!hot) return;
    cursor.classList.add("hot");
    const row = hot.closest(".row");
    let label = hot.dataset.cursor || "";
    if (row) label = lang === "tr" ? "Aç" : "Open";
    else if (hot.tagName === "A" && hot.target === "_blank") label = label || (lang === "tr" ? "Git" : "Visit");
    cursorLabel.textContent = label;
  });

  document.addEventListener("pointerout", (e) => {
    if (e.target.closest(HOT) && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(HOT))) {
      cursor.classList.remove("hot");
    }
  });

  $$(".magnet").forEach((node) => {
    node.addEventListener("pointermove", (e) => {
      const r = node.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
      node.style.transform = "translate3d(" + dx + "px," + dy + "px,0)";
    });
    node.addEventListener("pointerleave", () => {
      node.style.transform = "";
    });
  });
}

/* 7.6 the dash field behind the hero */
const canvas = $("#field");
const ctx = canvas ? canvas.getContext("2d") : null;
let dashes = [];
let fieldOn = !still;
let inkColor = "rgba(255,255,255,.2)";
let accentColor = "#ff4d17";

function paintField() {
  const cs = getComputedStyle(root);
  accentColor = cs.getPropertyValue("--accent").trim() || "#ff4d17";
  inkColor = cs.getPropertyValue("--ink").trim() || "#f3efe4";
}

function buildField() {
  if (!canvas) return;
  const r = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = r.width * dpr;
  canvas.height = r.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const step = r.width < 700 ? 46 : 54;
  dashes = [];
  for (let y = step / 2; y < r.height; y += step) {
    for (let x = step / 2; x < r.width; x += step) {
      dashes.push({ x: x, y: y, a: Math.random() * Math.PI, t: Math.random() * Math.PI });
    }
  }
}

function drawField(now) {
  if (!ctx || !fieldOn) return;
  const r = canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, r.width, r.height);
  const mx = px - r.left;
  const my = py - r.top;
  const time = now * 0.0006;

  dashes.forEach((d) => {
    const dx = mx - d.x;
    const dy = my - d.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const pull = clamp(1 - dist / 320, 0, 1);
    const want = pull > 0 ? Math.atan2(dy, dx) : Math.sin(d.x * 0.01 + d.y * 0.008 + time) * 1.4;
    let diff = want - d.a;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    d.a += diff * (0.06 + pull * 0.14);

    const len = 8 + pull * 14;
    ctx.strokeStyle = pull > 0.42 ? accentColor : inkColor;
    ctx.lineWidth = pull > 0.42 ? 1.4 : 1;
    ctx.globalAlpha = 0.13 + pull * 0.72;
    ctx.beginPath();
    ctx.moveTo(d.x - Math.cos(d.a) * len * 0.5, d.y - Math.sin(d.a) * len * 0.5);
    ctx.lineTo(d.x + Math.cos(d.a) * len * 0.5, d.y + Math.sin(d.a) * len * 0.5);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;
}

/* 7.7 ticker, scroll progress, sticky header, timeline draw, preview follow */
const tickerTrack = $("#tickerTrack");
const progressBar = $("#progressBar");
const topbar = $("#topbar");
const footName = $(".foot-name span");

let tickerX = 0;
let lastY = window.scrollY;
let velocity = 0;
let revealTick = 0;

function frame(now) {
  /* pointer trail */
  cx = lerp(cx, tx, 0.22);
  cy = lerp(cy, ty, 0.22);
  if (cursor) cursor.style.transform = "translate3d(" + cx + "px," + cy + "px,0)";

  /* floating preview */
  if (preview && pvOn) {
    const w = preview.offsetWidth;
    const h = preview.offsetHeight;
    const wantX = pvTX + 26 + w > window.innerWidth ? pvTX - w - 26 : pvTX + 26;
    const wantY = clamp(pvTY - h / 2, 14, window.innerHeight - h - 14);
    pvX = lerp(pvX, wantX, 0.16);
    pvY = lerp(pvY, wantY, 0.16);
    preview.style.transform = "translate3d(" + pvX + "px," + pvY + "px,0) scale(1)";
  }

  /* marquee, faster while scrolling */
  if (tickerTrack && !still) {
    const unit = tickerTrack.scrollWidth / 4;
    tickerX -= 0.55 + Math.min(Math.abs(velocity) * 0.05, 5.5);
    if (unit && tickerX <= -unit) tickerX += unit;
    tickerTrack.style.transform = "translate3d(" + tickerX + "px,0,0)";
  }

  /* reveals are re-checked on a slow tick as well as on scroll: fonts landing
     or a deep link can move things without a scroll event ever firing */
  if (revealQueue.length && ++revealTick % 6 === 0) checkReveals();

  velocity *= 0.9;
  drawField(now);
  requestAnimationFrame(frame);
}

function onScroll() {
  const y = window.scrollY;
  velocity = y - lastY;

  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.transform = "scaleX(" + (max > 0 ? clamp(y / max, 0, 1) : 0) + ")";

  topbar.classList.toggle("stuck", y > 24);
  topbar.classList.toggle("hide", y > 420 && velocity > 6 && !drawerOpen);

  /* only paint the hero field while the hero is on screen */
  if (canvas) {
    const cr = canvas.getBoundingClientRect();
    fieldOn = !still && cr.bottom > 0 && cr.top < window.innerHeight;
  }

  if (footName && !still) {
    const r = footName.getBoundingClientRect();
    const p = clamp(1 - r.top / window.innerHeight, 0, 1);
    footName.style.transform = "translate3d(" + ((0.55 - p) * 320).toFixed(1) + "px,0,0)";
  }

  checkReveals();

  let current = "";
  $$("main section[id]").forEach((sec) => {
    if (sec.getBoundingClientRect().top < window.innerHeight * 0.42) current = sec.id;
  });
  $$(".nav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));

  lastY = y;
}

/* 7.8 drawer, top button, clock */
let drawerOpen = false;
const drawer = $("#drawer");
const menuBtn = $("#menuBtn");

function setDrawer(open) {
  drawerOpen = open;
  menuBtn.setAttribute("aria-expanded", String(open));
  if (open) {
    drawer.hidden = false;
    requestAnimationFrame(() => drawer.classList.add("open"));
    $$("#drawer nav a").forEach((a, i) => (a.style.transitionDelay = 90 + i * 55 + "ms"));
  } else {
    drawer.classList.remove("open");
    $$("#drawer nav a").forEach((a) => (a.style.transitionDelay = "0ms"));
    setTimeout(() => {
      if (!drawerOpen) drawer.hidden = true;
    }, 620);
  }
}

menuBtn.addEventListener("click", () => setDrawer(!drawerOpen));
$$("#drawer nav a").forEach((a) => a.addEventListener("click", () => setDrawer(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawerOpen) setDrawer(false);
});

$("#toTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: still ? "auto" : "smooth" });
});

const clock = $("#clock");
function tickClock() {
  try {
    clock.textContent = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Istanbul",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date());
  } catch (e) {
    clock.textContent = new Date().toTimeString().slice(0, 8);
  }
}

/* 7.9 smooth in-page scrolling that respects the fixed header */
$$('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id === "#" || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - (id === "#top" ? 0 : 48);
    window.scrollTo({ top: top, behavior: still ? "auto" : "smooth" });
  });
});

/* --------------------------------------------------------------------------
   7.10 Enter: on a first visit the site arrives on a monitor you click through
   -------------------------------------------------------------------------- */

const embedded =
  (() => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  })() || new URLSearchParams(location.search).has("embed");

if (embedded) root.classList.add("embed");

function initEnter() {
  const box = $("#enter");
  if (!box) return false;

  const params = new URLSearchParams(location.search);
  const forced = params.has("intro");
  let visited = false;
  try {
    /* sessionStorage, not localStorage: the desk comes back on a fresh visit,
       but a refresh in the same tab goes straight to the page */
    visited = sessionStorage.getItem("gk-visited") === "1";
    localStorage.removeItem("gk-visited"); /* flag left by an earlier build */
  } catch (e) {}

  /* the flag is only set once the desk has actually been shown — skipping for a
     small window or a deep link must not burn someone's one first visit */
  const small = window.innerWidth < 940 || window.innerHeight < 560;
  if (embedded || still || touch || small || location.hash || (visited && !forced)) {
    return false;
  }

  const stage = $("#enterStage");
  const photo = $("#enterPhoto");
  const screenEl = $("#enterScreen");
  const frame = $("#enterFrame");

  /* where the laptop's panel sits inside the photograph, as fractions of it */
  const PANEL = { x: 0.2952, y: 0.2772, w: 0.3826, h: 0.3639 };

  /* the panel is trimmed to the viewport's shape and the page inside is
     rendered at full viewport size, then scaled down to fill it — so walking in
     is a plain scale back to 1 and lands pin sharp on the real page */
  const fit = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pr = photo.getBoundingClientRect();
    let w = PANEL.w * pr.width;
    let h = PANEL.h * pr.height;
    let x = PANEL.x * pr.width;
    let y = PANEL.y * pr.height;
    const va = vw / vh;

    if (w / h > va) {
      const nw = h * va;
      x += (w - nw) / 2;
      w = nw;
    } else {
      const nh = w / va;
      y += (h - nh) / 2;
      h = nh;
    }

    screenEl.style.left = x + "px";
    screenEl.style.top = y + "px";
    screenEl.style.width = w + "px";
    screenEl.style.height = h + "px";
    frame.style.width = vw + "px";
    frame.style.height = vh + "px";
    frame.style.transform = "scale(" + (w / vw).toFixed(5) + ")";
  };

  box.hidden = false;
  box.setAttribute("aria-hidden", "false");
  root.classList.add("locked");
  fit();

  /* the laptop wakes up once the page inside it has actually loaded */
  const lightUp = () => box.classList.add("lit");
  frame.addEventListener("load", lightUp);
  setTimeout(lightUp, 900);
  frame.src = "/?embed=1";
  window.addEventListener("resize", fit);

  let walked = false;
  const walkIn = () => {
    if (walked) return;
    walked = true;
    try {
      sessionStorage.setItem("gk-visited", "1");
    } catch (e) {}

    const vw = window.innerWidth;
    const st = stage.getBoundingClientRect();
    const sr = screenEl.getBoundingClientRect();
    const scale = vw / sr.width;
    const tx = -st.left - scale * (sr.left - st.left);
    const ty = -st.top - scale * (sr.top - st.top);

    box.classList.add("go");
    stage.style.transform =
      "translate(" + tx.toFixed(1) + "px," + ty.toFixed(1) + "px) scale(" + scale.toFixed(5) + ")";

    /* cross-fade only after the zoom has landed, so the copy on the laptop and
       the real page are pixel-identical while both are visible */
    setTimeout(() => {
      box.classList.add("done");
      root.classList.remove("locked");
      setTimeout(() => {
        box.hidden = true;
        frame.src = "about:blank";
        window.removeEventListener("resize", fit);
      }, 300);
    }, 1220);
  };

  box.addEventListener("pointerdown", walkIn);
  box.addEventListener("click", walkIn);
  document.addEventListener("keydown", (e) => {
    if (walked || box.hidden) return;
    if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
      e.preventDefault();
      walkIn();
    }
  });

  return true;
}

/* --------------------------------------------------------------------------
   8. Boot
   -------------------------------------------------------------------------- */

function start() {
  root.classList.remove("booting");
  splitText();
  observeNew();
  $$(".hero [data-split]").forEach((n) => n.classList.add("in"));
  onScroll();
}

function boot() {
  const bootEl = $("#boot");
  const count = $("#bootCount");
  const bar = $("#bootBar");
  const intro = initEnter();

  /* the counter curtain is for return visits; the first visit gets the desk */
  if (still || intro || embedded) {
    bootEl.style.display = "none";
    start();
    return;
  }

  const begin = performance.now();
  const dur = 1150;
  const step = (now) => {
    const t = clamp((now - begin) / dur, 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    count.textContent = String(Math.round(eased * 100)).padStart(3, "0");
    bar.style.width = eased * 100 + "%";
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      bootEl.classList.add("out");
      start();
      setTimeout(() => {
        bootEl.style.display = "none";
      }, 900);
    }
  };
  requestAnimationFrame(step);
}

/* go */
$("#year").textContent = String(new Date().getFullYear());
applyLang(lang); /* renders filters, work, timeline, spec and ticker */
paintField();
buildField();
tickClock();
setInterval(tickClock, 1000);

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => {
  buildField();
  onScroll();
});


root.classList.add("booting");
requestAnimationFrame(frame);

if (document.readyState === "complete") boot();
else window.addEventListener("load", boot);

/* safety: never let the boot screen trap the page */
setTimeout(() => {
  const bootEl = $("#boot");
  if (bootEl && bootEl.style.display !== "none" && root.classList.contains("booting")) {
    bootEl.style.display = "none";
    start();
  }
}, 4000);
