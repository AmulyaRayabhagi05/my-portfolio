export type Track = "cyber" | "swe";

export const tracks: Record<Track, {
  label: string;
  icon: string;
  title: string;
  summary: string;
  highlights: { title: string; body: string }[];
  skills: string[];
  certs: string[];
}> = {
  cyber: {
    label: "Cybersecurity",
    icon: "",
    title: "Cybersecurity Track",
    summary:
      "ERP security engineering, IAM, and secure application architecture across enterprise-scale environments.",
    highlights: [
      { title: "ERP Security Administrator — UT Dallas", body: "Engineered Oracle PeopleSoft security objects, permission lists, and multi-tier access control for 40,000+ users across HCM, FMS, and Campus Solutions." },
      { title: "IAM & Federated Auth", body: "Hardened application zone integrity and deployed federated authentication across 4 environments, reducing provisioning time by 30%." },
      { title: "Incident Response", body: "Resolved 150+ user-facing access incidents with 95% first-contact resolution using Application Engine debugging." },
      { title: "Better Auth on Rainbow Roundup", body: "Signed 5-minute cookie validation + Email OTP, reducing session DB overhead by 65%." },
    ],
    skills: ["Oracle PeopleSoft", "PeopleTools", "IAM", "RBAC", "Federated Auth", "Better Auth", "SDLC Compliance", "Change Management"],
    certs: ["Docker Foundations Professional Certificate (2026)", "Collegium V Honors", "Cum Laude Latin Honors"],
  },
  swe: {
    label: "Software Engineering / Data Science",
    icon: "",
    title: "Software Engineering & Data Science Track",
    summary:
      "Full-stack platforms, RAG pipelines, multi-agent AI, and scalable web systems with production-grade performance.",
    highlights: [
      { title: "SWE Intern — LLM Software", body: "FastAPI + React platform cut claim processing 25%; XGBoost predictive models + multi-agent AI validation reached 95% precision." },
      { title: "Guidepoint (React Native)", body: "IMU sensor fusion for 0mm drift, YOLOv8 hazard detection at 92%, A* pathfinding cut latency 25%." },
      { title: "Elevatr (LangChain + RAG)", body: "Async RAG pipeline @ 500+ tokens/sec, ChromaDB semantic search at 94.2% match accuracy, MongoDB + Redis dual persistence." },
      { title: "Rainbow Roundup (Nuxt.js PWA)", body: "AWS EC2 deploy, Prisma ORM, RBAC across 4 roles, Docker-containerized background tasks." },
    ],
    skills: ["Python", "FastAPI", "LangChain", "asyncio", "React 18", "Nuxt.js", "TypeScript", "MongoDB", "ChromaDB", "Redis", "XGBoost", "YOLOv8", "Docker"],
    certs: ["Docker Foundations Professional Certificate (2026)", "Collegium V Honors", "Cum Laude Latin Honors"],
  },
};

export const experiences = [
  {
    role: "Software Engineering Intern",
    org: "LLM Software",
    location: "Dallas, TX",
    date: "Aug 2025 — Dec 2025",
    bullets: [
      "Accelerated financial claim processing 25% with a FastAPI + React platform integrated with predictive XGBoost models.",
      "Reached 95% classification precision by implementing specialized multi-agent AI validation workflows.",
      "Optimized GenAI efficiency with persistent memory structures for multistep data validations.",
    ],
    stack: ["FastAPI", "React", "XGBoost", "Multi-Agent AI", "GenAI"],
  },
  {
    role: "ERP Security Administrator",
    org: "The University of Texas at Dallas",
    location: "Richardson, TX",
    date: "May 2025 — Aug 2025",
    bullets: [
      "Engineered Oracle PeopleSoft security across HCM, FMS, and Campus Solutions for 40,000+ users with 100% IAM compliance.",
      "Deployed federated authentication across 4 environments, cutting provisioning time 30%.",
      "Resolved 150+ access incidents with 95% first-contact resolution using Application Engine debugging.",
    ],
    stack: ["Oracle PeopleSoft", "PeopleTools", "IAM", "Federated Auth", "SDLC"],
  },
];

export type Project = {
  date: string;
  name: string;
  tagline: string;
  tags: string[];
  bullets: string[];
  github?: string;
  external?: string;
};

export const projects: Project[] = [
  {
    date: "Jan 2026 — May 2026",
    name: "Guidepoint",
    tagline: "Mobile Navigation App for the Visually Impaired",
    tags: ["React Native", "YOLOv8", "CNN", "IMU Fusion", "A*"],
    bullets: [
      "0mm tracking divergence via IMU sensor fusion in React Native — no GPS required.",
      "Custom CNN + YOLOv8 pedestrian hazard classifier at 92% success rate.",
      "Optimized A* pathfinding on geometric floor grids cut real-time routing latency 25%.",
    ],
    github: "https://github.com/nandanpabolu/GuidePoint_NAN",
    external: "https://canva.link/nysfzckg65kmsfh",
  },
  {
    date: "Jan 2026 — Apr 2026",
    name: "Elevatr",
    tagline: "AI Web Platform for Distributed Career Analytics",
    tags: ["LangChain", "asyncio", "ChromaDB", "MongoDB", "Redis"],
    bullets: [
      "Async RAG pipeline handling 500+ tokens/sec via LangChain + Python asyncio.",
      "94.2% match accuracy on ChromaDB semantic vector index over MongoDB applicant datasets.",
      "Dual-persistence MongoDB + Redis caching via TanStack Query cut rendering latency 35%.",
    ],
    github: "https://github.com/AmulyaRayabhagi05/RAG-Based-Career-Prep",
    external: "https://canva.link/ah0zdrxddyn1yth",
  },
  {
    date: "Aug 2024 — Dec 2024",
    name: "Rainbow Roundup",
    tagline: "Events Calendar PWA",
    tags: ["Nuxt.js", "Prisma", "AWS EC2", "Better Auth", "Docker"],
    bullets: [
      "Full-stack Nuxt.js PWA with Prisma ORM deployed to AWS EC2 with RBAC across 4 roles.",
      "5-minute signed client-side cookie validation + Email OTP via Better Auth cut DB session overhead 65%.",
      "Docker-containerized background tasking with Google Places + Calendar API integrations.",
    ],
    github: "https://github.com/AmulyaRayabhagi05/Rainbow-Roundup-Calendar-Event-App",
    external: "https://docs.google.com/document/d/1qpb8pybP9ZniA3UOQkhhlsyE5MkxmlQh5KR03fJ8z08/edit?usp=sharing",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "FastAPI", "LangChain", "asyncio", "JavaScript", "TypeScript", "React 18", "Nuxt.js", "Vue", "SQL", "NoSQL", "C++"],
  },
  {
    group: "Machine Learning",
    items: ["RAG", "LLMs", "Multi-Agent Orchestration", "YOLOv8", "CNNs", "XGBoost"],
  },
  {
    group: "Tools & Infrastructure",
    items: ["ChromaDB", "Redis", "MongoDB", "SQLite", "Docker", "Git", "Prisma ORM", "Better Auth", "REST API", "Vitest"],
  },
];

export const certifications = [
  { name: "Docker Foundations Professional Certificate", issuer: "Docker Inc.", year: "2026" },
  { name: "Collegium V Honors", issuer: "UT Dallas", year: "2023 — 2026" },
  { name: "Cum Laude Latin Honors", issuer: "UT Dallas", year: "2026" },
];

export const articles = [
  {
    id: "bcfl",
    title: "Math Over Middlemen: How BCFL destroys the need for central trust",
    date: "Jun 3",
    read: "3 min read",
    abstract:
      "Imagine an alien threat suddenly emerges, and you and four other rival spy agencies are asked to build a joint intelligence model — but nobody trusts anybody with their raw data.",
    visual: "bcfl" as const,
    body: `# Math Over Middlemen: How BCFL destroys the need for central trust

Imagine an alien threat suddenly emerges, and you and four other rival spy agencies are asked to build a joint intelligence model — but nobody trusts anybody with their raw data.

## Federated Learning, in one paragraph
Instead of shipping raw data to a central server, each client trains locally and only ships **model weights** $w_t^{(k)}$ back. The server aggregates:

$$w_{t+1} = \\sum_{k=1}^{K} \\frac{n_k}{n} \\, w_t^{(k)}$$

## Where BCFL enters
Blockchain-based Federated Learning replaces the *single* central server with a distributed ledger. Every update is signed, ordered, and auditable. There is no honeypot to bribe, no single admin to compromise.

## Why it matters
- **Byzantine-tolerance** via majority validators
- **Verifiable aggregation** via smart contracts
- **Zero central custody** of the global weights $w_t$

If the alien threat is real, the math is the treaty.`,
  },
  {
    id: "dpo",
    title: "The hidden equation that proved all language models are secretly reward models",
    date: "Jun 2",
    read: "7 min read",
    abstract:
      "To understand Direct Preference Optimization (DPO), we need to see the identity that lets us skip training a separate reward model entirely.",
    visual: "dpo" as const,
    body: `# The hidden equation that proved all language models are secretly reward models

To understand **Direct Preference Optimization (DPO)**, we need the identity that lets us skip training a separate reward model.

## The RLHF setup
Classical RLHF: fit a reward $r_\\phi(x, y)$, then optimize a policy $\\pi_\\theta$ under a KL constraint to a reference $\\pi_{\\text{ref}}$:

$$\\max_{\\pi_\\theta} \\; \\mathbb{E}_{x, y \\sim \\pi_\\theta}\\big[r_\\phi(x,y)\\big] - \\beta \\, \\mathrm{KL}\\big(\\pi_\\theta \\,\\|\\, \\pi_{\\text{ref}}\\big)$$

## The closed form
The optimal policy has a clean form:

$$\\pi^\\star(y \\mid x) = \\frac{1}{Z(x)} \\, \\pi_{\\text{ref}}(y \\mid x) \\, \\exp\\!\\left(\\tfrac{1}{\\beta} r_\\phi(x,y)\\right)$$

Rearranging gives the reward as a **log-ratio** of policies — meaning any language model *is already* a reward model up to a partition function.

## DPO's trick
Substitute that identity into the Bradley–Terry preference likelihood and the reward $r_\\phi$ cancels. What remains is a supervised loss over preference pairs $(y_w, y_l)$:

$$\\mathcal{L}_{\\text{DPO}} = -\\log \\sigma\\!\\left(\\beta \\log \\tfrac{\\pi_\\theta(y_w|x)}{\\pi_{\\text{ref}}(y_w|x)} - \\beta \\log \\tfrac{\\pi_\\theta(y_l|x)}{\\pi_{\\text{ref}}(y_l|x)}\\right)$$

No reward model. No PPO. Just a log-likelihood.`,
  },
  {
    id: "sbert",
    title: "From 65 Hours to 5 Seconds: How Sentence-BERT rewrote semantic search",
    date: "May 29",
    read: "5 min read",
    abstract:
      "Before we dive in, let's get the basics straight. What's BERT? It stands for Bidirectional Encoder Representations from Transformers — and it's slow for pairwise similarity.",
    visual: "sbert" as const,
    body: `# From 65 Hours to 5 Seconds: How Sentence-BERT rewrote semantic search

Before we dive in — **BERT** = Bidirectional Encoder Representations from Transformers. It's phenomenal, but for pairwise similarity over 10k sentences it takes ~65 hours.

## The bottleneck
Vanilla BERT does **cross-encoding**: you feed both sentences $A$ and $B$ together. For $n$ sentences that's $O(n^2)$ forward passes.

## SBERT's trick
Encode each sentence *independently* into a fixed vector $u$ or $v$, then compare with cosine similarity:

$$\\text{sim}(A, B) = \\frac{u \\cdot v}{\\lVert u \\rVert \\, \\lVert v \\rVert}$$

Training uses a classification objective over $(u, v, |u - v|)$ concatenated through a softmax head. At inference, you just embed and dot-product.

## The speedup
- 10k × 10k comparisons: **65 hours → 5 seconds**
- Same benchmark accuracy on STS-B
- Enables real-time retrieval and clustering

This is why every modern RAG pipeline starts with a sentence encoder — it's the difference between a research demo and a shipping product.`,
  },
];
