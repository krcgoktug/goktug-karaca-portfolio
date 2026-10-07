/* ==========================================================================
   Single source of truth for everything the site says, in both languages.
   Lifted verbatim from the previous build so no wording drifted.
   ========================================================================== */

export type Lang = "en" | "tr";

export interface Project {
  repo: string;
  name: string;
  name_tr?: string;
  cat: "ai" | "backend" | "web" | "data" | "systems";
  year: number;
  tags: string[];
  tags_tr?: string[];
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
  links: { label: string; label_tr?: string; url: string }[];
}

export interface SpecRow {
  key_en: string;
  key_tr: string;
  items: string[];
  items_tr?: string[];
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
    tr: "Kullanıcının en son baktığı iki tarayıcı sekmesini okuyor ve içeriği Foundry Local ile bilgisayarda parçalara ayırıp vektöre çeviriyor. Soruları yalnızca bu içerikten, kaynağını göstererek cevaplıyor; ardından iki konunun kesiştiği noktadan yeni bir proje taslağı çıkarıyor. Microsoft AI Innovators programındaki bitirme projem."
  },
  {
    repo: "flyrank-capstone-metering-billing",
    name: "Metering & Billing Engine",
    name_tr: "Kullanım Ölçümü ve Faturalama",
    cat: "backend",
    year: 2026,
    tags: ["Python", "Stripe", "Idempotency"],
    live: null,
    team: false,
    en: "A SaaS billing core built to stay correct under pressure: one idempotency key survives twelve concurrent retries, the request that lands exactly on the quota passes and the next one gets a 429, money is integer maths, and duplicate Stripe webhooks change nothing.",
    tr: "Yük altında da doğru çalışması gereken bir SaaS faturalama altyapısı. Aynı idempotency anahtarıyla gelen on iki eşzamanlı istek yalnızca tek bir kayıt oluşturuyor, kotayı tam dolduran istek geçiyor ve bir sonraki 429 alıyor. Tutarlar tam sayıyla hesaplanıyor; aynı Stripe webhook'u iki kez gelse de sonuç değişmiyor."
  },
  {
    repo: "flyrank-workflow-agent",
    name: "Workflow → MCP → Agent",
    name_tr: "Workflow → MCP → Ajan",
    cat: "ai",
    year: 2026,
    tags: ["Python", "MCP", "Agents"],
    tags_tr: ["Python", "MCP", "Ajanlar"],
    live: null,
    team: false,
    en: "A five-step automation workflow, an MCP server that exposes it, and an agent built on top of both — written up as a case study that reports the honest result: the agent came out worse than the plain workflow.",
    tr: "Beş adımlı bir otomasyon akışı, bu akışı dışarıya açan bir MCP sunucusu ve ikisinin üzerine kurulmuş bir ajan. Sonucu olduğu gibi yazdığım bir vaka çalışması: ajan, sade akıştan daha kötü sonuç verdi."
  },
  {
    repo: "flyrank-polite-scraper",
    name: "Polite Scraper",
    cat: "backend",
    year: 2026,
    tags: ["Python", "robots.txt", "Schema"],
    tags_tr: ["Python", "robots.txt", "Şema doğrulama"],
    live: null,
    team: false,
    en: "A crawler that asks first: robots.txt before anything else, a rate limit it actually respects, schema-checked output, and logs you can read when a page changes shape.",
    tr: "Siteleri yormayan bir web kazıyıcı: işe robots.txt dosyasını okuyarak başlıyor, hız sınırına uyuyor, çıktıyı şemayla doğruluyor ve sayfanın yapısı değiştiğinde ne olduğunu okunaklı loglarla gösteriyor."
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
    tr: "Kayıt, giriş, token yenileme ve JWT ile korunan endpoint'ler. Her backend'de gereken ama kimsenin yazmayı pek sevmediği kısmı, tekrar kullanabilmek için bir kez düzgünce yazdım."
  },
  {
    repo: "RATEFLIX",
    image: "/assets/shots/rateflix.webp",
    name: "RATEFLIX",
    cat: "web",
    year: 2026,
    tags: ["JavaScript", "Web app"],
    tags_tr: ["JavaScript", "Web uygulaması"],
    live: "https://rateflix-lime.vercel.app/login",
    team: false,
    en: "A movie and series tracker: accounts, watchlists, ratings and a browsing flow that does not fight the user. Internet Programming term project, deployed and public.",
    tr: "Film ve dizi takip uygulaması: hesap oluşturma, izleme listeleri, puanlama ve kullanımı kolay bir arayüz. İnternet Programcılığı dersi için yaptığım dönem projesi, şu an yayında."
  },
  {
    repo: "web-autorent",
    image: "/assets/shots/autorent.webp",
    name: "web-autorent",
    cat: "web",
    year: 2025,
    tags: ["PHP", "SQLite", "UI"],
    tags_tr: ["PHP", "SQLite", "Arayüz"],
    live: "https://web-autorent-wk34.onrender.com",
    team: false,
    en: "A car rental platform with dynamic pricing and a match advisor that narrows the fleet down to the two cars you probably want. Plain PHP and SQLite, deliberately no framework.",
    tr: "Dinamik fiyatlandırmalı bir araç kiralama sitesi. Eşleştirme asistanı, filodaki araçları kullanıcıya en uygun iki seçeneğe kadar daraltıyor. Bilerek framework kullanmadım; sade PHP ve SQLite ile yazdım."
  },
  {
    repo: "System-Programming-Term-Project",
    name: "Student Information System",
    name_tr: "Öğrenci Bilgi Sistemi",
    cat: "systems",
    year: 2026,
    tags: ["C++", "PostgreSQL", "Docker"],
    live: null,
    team: true,
    en: "A containerized student information system with a C++ backend and PostgreSQL persistence — process handling, sockets and build discipline learned the hard way.",
    tr: "C++ ile yazılmış backend'i ve PostgreSQL veritabanıyla Docker üzerinde çalışan bir öğrenci bilgi sistemi. Süreç yönetimi, soketler ve düzenli bir build süreci konusunda en çok şey öğrendiğim projelerden biri."
  },
  {
    repo: "Data-Mining-for-Cybersecurity-Project",
    name: "IDS on CIC-IDS2017",
    name_tr: "CIC-IDS2017 ile Saldırı Tespiti",
    cat: "data",
    year: 2026,
    tags: ["Python", "ML", "Security"],
    tags_tr: ["Python", "Makine öğrenmesi", "Güvenlik"],
    live: null,
    team: true,
    en: "An intrusion detection pipeline over the CIC-IDS2017 dataset: cleaning, feature selection, model comparison, and a hard look at what the accuracy number is actually hiding.",
    tr: "CIC-IDS2017 veri seti üzerinde bir saldırı tespit sistemi: veri temizleme, öznitelik seçimi ve model karşılaştırması. Yüksek doğruluk oranının arkasında neyin gizlendiğini de ayrıca inceledik."
  },
  {
    repo: "Autonomous-AI-Parking-Simulation",
    name: "Parking: A* vs Q-Learning",
    name_tr: "Otopark: A* ve Q-Learning",
    cat: "ai",
    year: 2026,
    tags: ["Python", "Q-Learning", "A*"],
    live: null,
    team: true,
    en: "Same 15×15 parking lot, two agents: one that plans with A* and one that learns with Q-Learning. The interesting part is where the learner wins and where it never catches up.",
    tr: "Aynı 15×15 otopark, iki farklı ajan: biri A* ile yol planlıyor, diğeri Q-Learning ile deneme yanılmayla öğreniyor. Asıl ilginç kısım, öğrenen ajanın nerede öne geçtiği ve nerede hiç yetişemediği."
  },
  {
    repo: "digital-system-design-cpu-chip",
    name: "CPU Chip (Verilog)",
    name_tr: "İşlemci Tasarımı (Verilog)",
    cat: "systems",
    year: 2026,
    tags: ["Verilog", "ALU", "RTL"],
    live: null,
    team: false,
    en: "An 8-bit ALU, a 16-bit instruction decoder, an 8×8 register file and the wiring that makes them a CPU — plus the testbench that proves the ALU does what the spec says.",
    tr: "8-bit ALU, 16-bit komut çözücü, 8×8 register dosyası ve bunları bir işlemciye dönüştüren bağlantılar. ALU'nun tasarıma uygun çalıştığını doğrulayan bir testbench de var."
  },
  {
    repo: "luminalib",
    name: "LuminaLib",
    cat: "systems",
    year: 2026,
    tags: ["Java 17", "OOP", "Concurrency"],
    tags_tr: ["Java 17", "OOP", "Eşzamanlılık"],
    live: null,
    team: false,
    en: "A library system used as an excuse to get object modelling right: a real role hierarchy, an automated fine policy, layered search, and a catalog kept thread-safe with a read/write lock.",
    tr: "Nesne yönelimli tasarımı doğru oturtmak için yaptığım bir kütüphane sistemi: rol hiyerarşisi, otomatik gecikme cezası, katmanlı arama ve read/write lock ile thread-safe çalışan bir katalog."
  },
  {
    repo: "viewflix-database",
    name: "VIEWFLIX Database",
    name_tr: "VIEWFLIX Veritabanı",
    cat: "data",
    year: 2026,
    tags: ["SQL", "3NF", "ER"],
    live: null,
    team: false,
    en: "A streaming platform modelled properly: 11 tables in 3NF, real constraints, an ER diagram that matches the schema, and fifteen queries from trivial to genuinely annoying.",
    tr: "Bir dizi ve film platformu için veritabanı tasarımı: 3NF'te 11 tablo, gerçek kısıtlar, şemayla birebir uyuşan bir ER diyagramı ve basitten epey zorlayıcıya kadar on beş sorgu."
  },
  {
    repo: "smart-fridge-project",
    name: "Zero Waste Smart Fridge",
    name_tr: "Sıfır Atık Akıllı Buzdolabı",
    cat: "systems",
    year: 2026,
    tags: ["C++", "IoT", "Vision"],
    tags_tr: ["C++", "IoT", "Görüntü işleme"],
    live: null,
    team: true,
    en: "A fridge that keeps track of what is inside and how long it has been there, so food gets eaten instead of thrown out. Embedded sensing on one end, computer vision on the other.",
    tr: "İçindeki ürünleri ve ne zamandır orada durduklarını takip eden bir buzdolabı. Amaç, yiyeceklerin bozulup çöpe gitmeden tüketilmesi. Bir tarafta gömülü sensörler, diğer tarafta görüntü işleme var."
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
    tr: "Android için kişisel finans uygulaması: harcamaları kaydediyor, paranın nereye gittiğini gösteriyor ve ay sonunda gerçekten işe yarayan bir özet çıkarıyor."
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
    tr: "Ruh haline ve saate göre kahve demleme yöntemi öneren küçük bir komut satırı aracı. Bir akşamda yazdım; her şeyin dönem projesi olması gerekmiyor."
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
      title: "Yazılım geliştirici stajyer",
      text: "Next.js, React ve TypeScript ile geliştirilen bir proje yönetim platformunda çalışıyorum: görev akışları, etkileşimli planlama ekranları, form doğrulama ve arka planda ilişkisel bir PostgreSQL şeması. Supabase entegrasyonu ve her değişiklikte çalışan otomatik kontroller de işin bir parçası."
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
      title: "Backend AI mühendisliği stajyeri",
      text: "Ders yerine haftalık teslimlerle ilerleyen, uzaktan bir staj programı. Backend AI Engineering ve AI Fluency eğitimlerinin ikisini de tamamladım ve her hafta bir proje teslim ettim: JWT ile kimlik doğrulama yapan bir API, robots.txt kurallarına uyan bir web kazıyıcı, workflow → MCP → ajan vaka çalışması. Son olarak değerlendirmeden geçen bir bitirme projesi hazırladım: tekrar gelen webhook'larda ve eşzamanlı isteklerde de doğru çalışan bir kullanım ölçümü ve faturalama sistemi."
    },
    links: [
      { label: "Billing engine", label_tr: "Faturalama sistemi", url: GH + "flyrank-capstone-metering-billing" },
      { label: "Workflow → agent", label_tr: "Workflow → ajan", url: GH + "flyrank-workflow-agent" },
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
      text: "Kullanıcının en son baktığı iki tarayıcı sekmesini okuyup bu içerikten yeni bir yazılım projesi taslağı çıkaran, bilgisayarda yerel çalışan bir RAG ajanı geliştirdim. Her cevabın hangi metin parçasından geldiği görülebiliyor. Python, FastAPI, Playwright, LangChain ve Microsoft Foundry Local kullandım."
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
      title: "Yazılım geliştirici stajyer, şimdi yarı zamanlı gönüllü",
      text: "Danışmanlık projelerinin CRM tarafında çalışıyorum: Microsoft Dynamics kurulumu, diğer sistemlerle entegrasyonu ve raporlama. Bir de internet bağlantısının neredeyse hiç olmadığı sahalardan sensör verisi toplamaya çalıştığımız IoT projeleri var. Stajım Haziran–Ağustos arasındaydı; şimdi yarı zamanlı gönüllü olarak devam ediyorum."
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
      title: "Mobil uygulama geliştirici, dönemsel program",
      text: "Akıllı saat için yapay zekâ destekli bir kişisel finans uygulaması geliştirdim. Saat ekranı bir başparmakla kapanacak kadar küçük olduğu için her etkileşimi buna göre tasarlamam gerekti."
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
      title: "Bilgisayar Mühendisliği, son sınıf",
      text: "En çok ilgilendiğim dersler sistem programlama, sayısal sistem tasarımı, veri madenciliği, veritabanı sistemleri, nesne yönelimli tasarım ve bilgisayar mimarisi oldu. Bu derslerde yaptığım projelerin çoğu yukarıda, GitHub'da duruyor."
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
      title: "Bilgisayar Mühendisliği",
      text: "Lisansın ilk üç yılı. Ardından Fenerbahçe Üniversitesi'ne yatay geçiş yaptım."
    },
    links: []
  }
];

export const SPEC: SpecRow[] = [
  { key_en: "Languages", key_tr: "Programlama dilleri", items: ["C", "C++", "Java", "Kotlin", "Python", "TypeScript", "JavaScript", "PHP", "SQL", "Verilog"] },
  { key_en: "Backend", key_tr: "Backend", items: ["FastAPI", "REST", "JWT auth", "Idempotency", "Rate limiting", "Stripe (test)", "OpenAPI"], items_tr: ["FastAPI", "REST", "JWT ile kimlik doğrulama", "Idempotency", "Rate limiting", "Stripe (test modu)", "OpenAPI"] },
  { key_en: "AI", key_tr: "Yapay zekâ", items: ["RAG", "Embeddings", "LangChain", "Foundry Local", "Ollama", "MCP", "Q-Learning", "A*"] },
  { key_en: "IoT & hardware", key_tr: "IoT ve donanım", items: ["ESP32 / Arduino", "I²C sensors", "LoRa", "Verilog HDL", "Sockets"], items_tr: ["ESP32 / Arduino", "I²C sensörler", "LoRa", "Verilog HDL", "Soket programlama"] },
  { key_en: "Mobile & web", key_tr: "Mobil ve web", items: ["TypeScript", "Next.js", "React", "Supabase", "Kotlin / Android", "Flutter"] },
  { key_en: "Data", key_tr: "Veri", items: ["PostgreSQL", "MySQL", "SQLite", "3NF modelling", "pandas", "scikit-learn"], items_tr: ["PostgreSQL", "MySQL", "SQLite", "3NF veri modelleme", "pandas", "scikit-learn"] },
  { key_en: "Tooling", key_tr: "Araçlar", items: ["Git & GitHub", "Docker", "Linux", "Vercel", "Playwright", "Postman"] }
];

export const INTERESTS = [
  { en: "IoT & embedded", tr: "IoT ve gömülü sistemler" },
  { en: "Applied AI", tr: "Yapay zekâ uygulamaları" },
  { en: "Mobile apps", tr: "Mobil uygulamalar" },
  { en: "Backend systems", tr: "Backend geliştirme" }
];

export const CATS = [
  { id: "all", en: "All", tr: "Tümü" },
  { id: "ai", en: "AI & agents", tr: "Yapay zekâ" },
  { id: "backend", en: "Backend", tr: "Backend" },
  { id: "web", en: "Web & app", tr: "Web ve mobil" },
  { id: "data", en: "Data", tr: "Veri" },
  { id: "systems", en: "Systems & hardware", tr: "Sistem ve donanım" }
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
    title: "Göktuğ Karaca | Yazılım Geliştirici",
    desc: "İstanbul'da bilgisayar mühendisliği okuyan Göktuğ Karaca'nın kişisel sitesi: backend, yapay zekâ ve IoT projeleri, staj deneyimleri ve iletişim bilgileri.",
    nav_work: "Projeler",
    nav_profile: "Hakkımda",
    nav_track: "Deneyim",
    nav_education: "Eğitim",
    nav_stack: "Teknolojiler",
    nav_resume: "CV",
    nav_contact: "İletişim",
    hero_meta: "Bilgisayar Mühendisliği son sınıf · İstanbul",
    hero_lede:
      "Aynı istek defalarca gelse de tutarlı kalan backend servisleri, cevabının kaynağını gösteren yapay zekâ ajanları ve bağlantı koptuğunda da veri göndermeye devam eden cihazlar geliştiriyorum.",
    hero_cta_work: "Projelere göz at",
    plate_caption: "Göktuğ Karaca, İstanbul",
    scroll_cue: "Aşağı kaydır",
    work_title: "Projeler",
    work_note:
      "Buradaki her proje GitHub'da açık bir repo. Kategoriye göre filtreleyebilir, kodları GitHub'da inceleyebilirsiniz.",
    work_all: "Tüm repolar GitHub'da",
    work_empty: "Bu kategoride henüz proje yok.",
    preview_open: "Repoyu aç ↗",
    profile_title: "Hakkımda",
    profile_note: "Kısaca nasıl çalıştığım ve nelerle ilgilendiğim.",
    profile_p1:
      "Öğrendiklerimin çoğu derslerden değil, gerçekten çalışması gereken projelerden geldi. Aynı isteği defalarca gönderen bir istemci, beklediğim gibi davranmayan bir veri seti ya da internete hiç bağlanamayan bir geliştirme kartı bana derslerden daha çok şey öğretti.",
    profile_p2:
      "Çalışma şeklim basit: kapsamı küçük tutuyor, çalıştığını testle gösteriyorum. Bir faturalama sistemi aynı anda gelen on iki tekrar isteğinde doğru sonucu vermiyorsa işe yaramaz; bir yapay zekâ ajanı cevabını hangi kaynaktan verdiğini göstermiyorsa ona güvenemezsiniz. Bu yüzden önce çalışan en küçük sürümü yazıyor, test ediyor ve nerede bozulduğunu not ediyorum.",
    profile_p3:
      "En çok ilgimi çeken işler üç alanın kesiştiği yerde duruyor: sinyalin zayıf olduğu yerlerden veri göndermesi gereken cihazlar, verdiği cevabı açıklayabilen modeller ve bunları kullanıcıya anlaşılır şekilde sunan mobil ya da web arayüzleri. Bir uçta Verilog, ortada FastAPI, diğer uçta telefon var. Donanımın nasıl çalıştığını bilmek, üst katmanlarda da daha doğru kararlar vermemi sağlıyor.",
    fact_based: "Konum",
    fact_now: "Şu sıralar",
    fact_now_v: "Yerel çalışan yapay zekâ ajanları ve IoT",
    fact_focus: "İlgi alanları",
    fact_focus_v: "Backend · IoT · Yapay zekâ · Mobil",
    fact_langs: "Diller",
    fact_langs_v: "Türkçe (ana dil), İngilizce",
    fact_status: "Durum",
    fact_status_v: "2026/27 stajlarına açık",
    track_title: "Deneyim",
    track_note: "Stajlarda ve programlarda neler yaptığım.",
    edu_title: "Eğitim",
    edu_note: "Üniversite eğitimim ve en çok ilgilendiğim dersler.",
    stack_title: "Teknolojiler",
    stack_note: "Eğitim videolarında değil, bitirdiğim projelerde gerçekten kullandığım araçlar.",
    contact_title: "İletişim",
    contact_note: "Staj, iş birliği ya da projelerimle ilgili bir sorunuz varsa yazabilirsiniz.",
    ch_resume: "CV",
    ch_resume_v: "PDF, her zaman güncel",
    ch_booking: "20 dakikalık görüşme",
    ch_booking_v: "Size uygun iki saati e-postayla iletin",
    enter_cta: "Ekrana tıkla",
    foot_built: "Astro ve Tailwind ile yaptım, birkaç kez de baştan yazdım.",
    foot_top: "Başa dön ↑",
    team: "Ekip projesi",
    live: "Canlı",
    ticker: [
      "2026/27 stajlarına açığım",
      "IoT · Uygulamalı YZ · Mobil · TypeScript",
      "İstanbul, Türkiye",
      "{n} repo ve devamı geliyor"
    ]
  }
};
