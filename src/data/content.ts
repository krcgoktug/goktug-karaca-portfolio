/* ==========================================================================
   Single source of truth for everything the site says, in both languages.
   Lifted verbatim from the previous build so no wording drifted.
   ========================================================================== */

export type Lang = "en" | "tr";

export interface Project {
  repo: string;
  name: string;
  cat: "ai" | "backend" | "web" | "data" | "systems";
  year: number;
  tags: string[];
  live: string | null;
  team: boolean;
  image?: string;
  en: string;
  tr: string;
}

export interface LedgerRow {
  when: string;
  when_tr?: string;
  now?: boolean;
  org: string;
  org_tr?: string;
  en: { title: string; text: string };
  tr: { title: string; text: string };
  links: { label: string; url: string }[];
}

export interface SpecRow {
  key_en: string;
  key_tr: string;
  items: string[];
}

export const GH = "https://github.com/krcgoktug/";

export const PROJECTS: Project[] = [
  {
    repo: "tabforge-agent",
    image: "/assets/shots/tabforge.webp",
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
    image: "/assets/shots/rateflix.webp",
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
    image: "/assets/shots/autorent.webp",
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

export const TIMELINE: LedgerRow[] = [
  {
    when: "Aug — Oct 2026",
    when_tr: "Ağu — Eki 2026",
    org: "ITserv Technology · İstanbul",
    en: {
      title: "Software developer — internship",
      text: "Building a project operations platform in Next.js, React and TypeScript: task workflows that scale, interactive planning tools, validation that holds at the edges, and a relational PostgreSQL schema behind it with automated quality checks and a locked-down Supabase integration."
    },
    tr: {
      title: "Yazılım geliştirici — staj",
      text: "Next.js, React ve TypeScript ile bir proje operasyon platformu: ölçeklenebilir görev akışları, etkileşimli planlama araçları, uç durumlarda da tutan doğrulama ve arkasında otomatik kalite kontrolleri ile sıkılaştırılmış bir Supabase entegrasyonu olan ilişkisel PostgreSQL şeması."
    },
    links: []
  },
  {
    when: "Jul — Sep 2026",
    when_tr: "Tem — Eyl 2026",
    org: "FlyRank AI · Remote",
    org_tr: "FlyRank AI · Uzaktan",
    en: {
      title: "Backend AI engineering intern",
      text: "A remote programme built on weekly deliverables rather than coursework. I finished both the Backend AI Engineering and AI Fluency tracks, shipped something every week — a JWT auth API, a robots-first scraper, a workflow → MCP → agent case study — and closed with a reviewed capstone: a usage metering and billing engine that holds under duplicate webhooks and concurrent retries."
    },
    tr: {
      title: "Backend AI engineering stajyeri",
      text: "Ders yerine haftalık teslimler üzerine kurulu uzaktan bir program. Backend AI Engineering ve AI Fluency hatlarının ikisini de tamamladım, her hafta bir iş teslim ettim — JWT auth API'si, robots.txt önceliğine uyan bir tarayıcı, workflow → MCP → ajan vaka çalışması — ve değerlendirilen bitirme projesiyle kapattım: tekrar eden webhook'lar ve eşzamanlı denemeler altında bozulmayan bir kullanım ölçüm/faturalama motoru."
    },
    links: [
      { label: "Billing engine", url: GH + "flyrank-capstone-metering-billing" },
      { label: "Workflow → agent", url: GH + "flyrank-workflow-agent" },
      { label: "Auth API", url: GH + "flyrank-auth-api" }
    ]
  },
  {
    when: "Jul — Aug 2026",
    when_tr: "Tem — Ağu 2026",
    org: "Microsoft · AI Innovators · Remote",
    org_tr: "Microsoft · AI Innovators · Uzaktan",
    en: {
      title: "AI Innovators programme participant",
      text: "A local RAG agent that reads the two browser tabs you last looked at and turns their combined context into a new software project, with every answer traceable to the chunk it came from. Python, FastAPI, Playwright, LangChain and Microsoft Foundry Local."
    },
    tr: {
      title: "AI Innovators programı katılımcısı",
      text: "En son baktığın iki sekmeyi okuyup ikisinin birleşik bağlamından yeni bir yazılım projesi çıkaran, her cevabı geldiği parçaya kadar izlenebilen yerel bir RAG ajanı. Python, FastAPI, Playwright, LangChain ve Microsoft Foundry Local."
    },
    links: [{ label: "TabForge Agent", url: GH + "tabforge-agent" }]
  },
  {
    when: "Jun 2026 — now",
    when_tr: "Haz 2026 — bugün",
    now: true,
    org: "ZENO Bilişim ve Danışmanlık · İstanbul",
    en: {
      title: "Software developer — internship, now part-time volunteer",
      text: "CRM work on the consultancy side: Microsoft Dynamics implementation, integration between it and the systems around it, and the reporting that comes with it — plus IoT projects where the hard part is getting telemetry out of a site with almost no connectivity. The internship ran June to August; I have stayed on part-time as a volunteer since."
    },
    tr: {
      title: "Yazılım geliştirici — staj, şimdi yarı zamanlı gönüllü",
      text: "Danışmanlık tarafında CRM işleri: Microsoft Dynamics kurulumu, çevresindeki sistemlerle entegrasyonu ve beraberinde gelen raporlama — bir de zor kısmı neredeyse hiç bağlantı olmayan bir sahadan telemetriyi dışarı çıkarmak olan IoT projeleri. Staj Haziran–Ağustos arasıydı; o günden beri yarı zamanlı gönüllü olarak devam ediyorum."
    },
    links: []
  },
  {
    when: "Jul 2025",
    when_tr: "Tem 2025",
    org: "DenizBank · İstanbul",
    en: {
      title: "Mobile app developer — seasonal programme",
      text: "An AI-integrated personal finance application for a smartwatch, where every interaction had to survive a screen you can cover with a thumb."
    },
    tr: {
      title: "Mobil uygulama geliştirici — dönemsel program",
      text: "Akıllı saat için yapay zekâ entegre bir kişisel finans uygulaması — her etkileşimin başparmakla kapatılabilecek bir ekranda çalışması gerekiyordu."
    },
    links: []
  }
];

export const EDUCATION: LedgerRow[] = [
  {
    when: "Aug 2025 — May 2027",
    when_tr: "Ağu 2025 — May 2027",
    org: "Fenerbahçe University · İstanbul",
    org_tr: "Fenerbahçe Üniversitesi · İstanbul",
    en: {
      title: "BSc Computer Engineering — final year",
      text: "Systems programming, digital system design, data mining, database systems, object-oriented design, computer architecture. The courses I cared about did not stop at the grade."
    },
    tr: {
      title: "Bilgisayar Mühendisliği lisans — son sınıf",
      text: "Sistem programlama, sayısal sistem tasarımı, veri madenciliği, veritabanı sistemleri, nesne yönelimli tasarım, bilgisayar mimarisi. Önemsediğim dersler notla bitmedi."
    },
    links: []
  },
  {
    when: "Sep 2022 — Aug 2025",
    when_tr: "Eyl 2022 — Ağu 2025",
    org: "Maltepe University · İstanbul",
    org_tr: "Maltepe Üniversitesi · İstanbul",
    en: {
      title: "BSc Computer Engineering",
      text: "The first three years of the degree, before transferring to Fenerbahçe University."
    },
    tr: {
      title: "Bilgisayar Mühendisliği lisans",
      text: "Lisansın ilk üç yılı; ardından Fenerbahçe Üniversitesi'ne yatay geçiş."
    },
    links: []
  }
];

export const SPEC: SpecRow[] = [
  { key_en: "Languages", key_tr: "Diller", items: ["C", "C++", "Java", "Kotlin", "Python", "TypeScript", "JavaScript", "PHP", "SQL", "Verilog"] },
  { key_en: "Backend", key_tr: "Backend", items: ["FastAPI", "REST", "JWT auth", "Idempotency", "Rate limiting", "Stripe (test)", "OpenAPI"] },
  { key_en: "AI", key_tr: "Yapay zekâ", items: ["RAG", "Embeddings", "LangChain", "Foundry Local", "Ollama", "MCP", "Q-Learning", "A*"] },
  { key_en: "IoT & hardware", key_tr: "IoT & donanım", items: ["ESP32 / Arduino", "I²C sensors", "LoRa", "Verilog HDL", "Sockets"] },
  { key_en: "Mobile & web", key_tr: "Mobil & web", items: ["TypeScript", "Next.js", "React", "Supabase", "Kotlin / Android", "Flutter"] },
  { key_en: "Data", key_tr: "Veri", items: ["PostgreSQL", "MySQL", "SQLite", "3NF modelling", "pandas", "scikit-learn"] },
  { key_en: "Tooling", key_tr: "Araçlar", items: ["Git & GitHub", "Docker", "Linux", "Vercel", "Playwright", "Postman"] }
];

export const INTERESTS = [
  { en: "IoT & embedded", tr: "IoT & gömülü" },
  { en: "Applied AI", tr: "Uygulamalı YZ" },
  { en: "Mobile apps", tr: "Mobil uygulama" },
  { en: "Backend systems", tr: "Backend sistemler" }
];

export const CATS = [
  { id: "all", en: "All", tr: "Tümü" },
  { id: "ai", en: "AI & agents", tr: "Yapay zekâ" },
  { id: "backend", en: "Backend", tr: "Backend" },
  { id: "web", en: "Web & app", tr: "Web & uygulama" },
  { id: "data", en: "Data", tr: "Veri" },
  { id: "systems", en: "Systems & hardware", tr: "Sistem & donanım" }
];

export const I18N = {
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
      "Everything below is a repository I actually pushed. Filter by what you want to see, open any of them on GitHub.",
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
    foot_built: "Astro, Tailwind and a lot of rewriting.",
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
      "Aşağıdaki her şey gerçekten push ettiğim bir repo. Görmek istediğini filtrele, istediğini GitHub'da aç.",
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
    foot_built: "Astro, Tailwind ve bir sürü yeniden yazım.",
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
