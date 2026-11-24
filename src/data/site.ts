// Facts shared by the site (index.astro) and the portfolio PDF (portfolio.astro).

export const email = 'sujitmandava123@gmail.com';

export const stops = [
  { name: 'IIT Palakkad', note: 'B.Tech CSE · 2020–24', href: '#iit' },
  { name: 'hGrid', note: '3 production products · 2024–25', href: '#hgrid' },
  { name: 'Northwestern', note: 'M.S. AI · 2025–26', href: '#northwestern' },
  { name: 'Relativity', note: 'Recall 0.30 → 0.68 · 2026', href: '#relativity' },
];

export const products = [
  {
    id: 'wren',
    letter: 'W',
    name: 'Wren',
    status: 'In beta',
    tag: "Hear how they're really doing.",
    body: "A care companion for families of a parent with memory loss. Short daily voice conversations and check-ins become a calm, readable picture of mood, medications, and gentle shifts in speech. Every change is measured against the person's own baseline, never against a diagnosis, and the whole family and the doctor see the same picture.",
    stops: [
      "Speech and language trends from everyday conversation, compared only to the person's own history",
      'Ask Wren: a RAG assistant that grounds GPT-4o in recent sessions, transcripts, check-ins, and notes',
      'One React codebase ships to web, iOS, and Android via Capacitor',
    ],
    stack: ['React', 'TypeScript', 'Capacitor', 'FastAPI', 'PostgreSQL', 'Azure OpenAI'],
    video: { src: '/video/wren.mp4', poster: '/video/wren-poster.webp', label: 'Wren launch film: the Home screen walking through one evening, from Wren Time with Ruth to “Today’s done”.', credit: 'Music: Sascha Ende, CC BY 4.0' },
  },
  {
    id: 'fpl',
    letter: 'F',
    name: 'FPL Agent AI',
    status: 'In development',
    tag: 'A Fantasy Premier League planner for anyone with a team ID.',
    body: "Enter an FPL team ID and it plans your week from FPL's public data: transfers, lineup, captain, and when to play each chip. There's no login and it never touches your account; it shows the moves and you make them. The Plan screen draws them on a tactics board against your mini-league rival.",
    stops: [
      'Expected points from minutes, xG/xA, defensive contributions, and opponent-adjusted team ratings, backtested walk-forward',
      'A mixed-integer program picks squad, XI, and captain for every gameweek, and gives every chip its own week before it expires',
      "Mini-league view: rivals' captains and chips, and effective ownership that counts captains double",
    ],
    stack: ['Python', 'PuLP', 'pandas', 'FastAPI', 'Next.js'],
    link: { href: 'https://github.com/sujitmandava/fpl-agent-ai', text: 'Source' },
    video: { src: '/video/fpl.mp4', poster: '/video/fpl-poster.webp', label: 'FPL Agent AI launch film: a sample team ID goes in, and this week’s transfers are drawn on a tactics board against a mini-league rival.', credit: 'Music: Sascha Ende, CC BY 4.0' },
  },
  {
    id: 'safewatch',
    letter: 'S',
    name: 'SafeWatch',
    status: 'MVP',
    tag: 'Faster response to safety events in nursing homes.',
    body: "In a short-staffed nursing home, a resident's fall can go unnoticed for too long. SafeWatch puts falls and sensor alerts into one triage queue and won't let them sit: every alert starts a countdown, and if nobody acknowledges it, it escalates from CNA to charge nurse to administrator.",
    stops: [
      'SLA countdowns and role-based escalation, so no alert depends on one person noticing it',
      'An immutable audit trail of every state change: who was alerted, who acknowledged, and when',
      'Takes events from an API, a UI simulator, or recorded JSON replays',
    ],
    stack: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'React', 'Docker'],
  },
];

export const projects = [
  { letter: 'T', name: 'Trace AI', kind: 'LLM systems', text: 'A compliance copilot that grades contract checklists with citations. A deterministic decision policy sits on top of the LLM, every run produces an auditable report, and a regression eval harness tracks quality.', stack: 'OpenAI · FAISS · FastAPI', href: 'https://github.com/sujitmandava/trace-ai' },
  { letter: 'C', name: 'Chronicle', kind: 'LLM systems', text: 'A staleness-aware RAG service. Retrieval scores decay with document age, answers warn when their context is stale, and only changed chunks get re-embedded.', stack: 'FastAPI · SQLite · Grafana', href: 'https://github.com/sujitmandava/chronicle' },
  { letter: 'Q', name: 'CME Trading Challenge Research Agent', kind: 'Quant', text: 'An always-on LLM research desk that never trades itself. Code enforces every stop and risk limit, Claude writes the daily plans and reviews, and exits trigger Discord alerts and phone calls.', stack: 'Claude API · Discord · Twilio' },
  { letter: 'P', name: 'AI Egress Proxy', kind: 'AI governance', text: 'An HTTP/HTTPS proxy in Go with TLS MITM and HTTP/2. It logs traffic to AI domains, redacts sensitive data by policy, and hot-reloads that policy without restarting.', stack: 'Go · TLS · DLP' },
  { letter: 'E', name: 'Edge ML', kind: 'ML', text: 'INT8 post-training quantization of MobileNet with TensorFlow Lite: 7.3× smaller (19.9 → 2.7 MB) while top-1 accuracy moved from 37.5% to 36.0%.', stack: 'TensorFlow · TFLite', href: 'https://github.com/sujitmandava/edge_ml' },
  { letter: 'V', name: 'Cellar', kind: 'Product · paused', text: 'A wine-ranking app that replaces the 100-point scale with head-to-head comparisons: binary-search placement in at most five taps, and Claude-vision label scanning against a 118k-wine catalog.', stack: 'Next.js · PostgreSQL · Claude API', paused: true },
];
