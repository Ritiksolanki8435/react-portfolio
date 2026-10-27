/** @format */

// Career start drives the "years of experience" numbers, so they never go stale.
export const CAREER_START = new Date(2023, 2, 1);

export const YEARS_OF_EXPERIENCE =
  Math.floor(((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000)) * 10) / 10;

export const RESUME_URL = "/Ritik_Solanki_Resume.pdf";

export const TITLE = "Software Developer";
export const SUBTITLE = "Full-Stack (MERN) & AI / Agentic Systems";

export const ROLES = [
  "full-stack web apps",
  "RAG pipelines",
  "AI agents",
  "MCP servers",
  "chatbots as a service",
];

export const HERO_CONTENT = `Software developer with ${YEARS_OF_EXPERIENCE} years of experience building scalable full-stack web applications across the MERN stack, with hands-on expertise in applied AI: Retrieval-Augmented Generation, vector databases, agentic tool-calling workflows and MCP servers.`;

export const ABOUT_TEXT = [
  `I ship production features end to end, from architecture and API design through testing and deployment. Most of my work lives in React, Next.js, Node.js and Express, backed by MongoDB, PostgreSQL and Supabase.`,
  `Over the last two years I've moved deep into applied AI: RAG systems that answer questions over thousands of documents, agents that call tools to automate multi-step work, and a multi-tenant chatbot platform that any website can embed with a single script.`,
  `I care about performance, reliability and turning business goals into clean technical solutions, and I enjoy mentoring junior developers along the way.`,
];

export const CURRENT_COMPANY = "Docusoft Solution";

export const NOW = {
  title: "Moving Kriyova AI's agent tooling to MCP servers",
  detail: "Turning per-tenant chatbot tools into Model Context Protocol servers any agent can discover and call.",
};

export const HIGHLIGHTS = [
  { value: `${YEARS_OF_EXPERIENCE}`, label: "Years of experience" },
  { value: "10k", label: "Documents indexed by a RAG corpus" },
  { value: "8+", label: "Projects shipped" },
];

export const STACK = [
  {
    key: "ai",
    title: "Applied AI & Agentic Systems",
    blurb:
      "Retrieval that grounds answers in real documents, agents that call tools to automate multi-step work, and MCP servers that expose them cleanly.",
    items: [
      "Generative AI",
      "RAG",
      "AI Agents",
      "Tool calling",
      "MCP",
      "Vector databases",
      "Pinecone",
      "Vertex AI Vector Search",
      "pgvector",
      "LLM integration",
      "Prompt engineering",
    ],
  },
  {
    key: "backend",
    title: "Backend & Data",
    blurb: "APIs and data layers built to scale, from GraphQL tuning to relational and document stores.",
    items: ["Node.js", "Express", "GraphQL", "REST APIs", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    key: "frontend",
    title: "Frontend",
    blurb: "Fast, responsive interfaces, with code-splitting and state management done right.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "jQuery",
      "HTML5",
      "CSS3",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    key: "cloud",
    title: "Cloud & Tools",
    blurb: "From GCP pipelines to the everyday tooling of a delivery team.",
    items: ["Google Cloud", "Vertex AI", "Cloud Storage", "AWS", "Git", "GitHub", "Postman", "Swagger", "Figma"],
  },
];

export const AI_FLOWS = [
  {
    key: "rag",
    label: "RAG Pipeline",
    caption: "How DocuAssist answers questions over large document collections.",
    steps: [
      { title: "Upload", detail: "Multi-file uploads to GCS", log: "upload  ▸ batch of PDFs, DOCX, TXT → Cloud Storage" },
      { title: "Import", detail: "Automated index pipeline", log: "import  ▸ GCS → Vertex AI RAG corpus" },
      { title: "Retrieve", detail: "Vector similarity search", log: "search  ▸ top matching chunks for the query" },
      { title: "Augment", detail: "Build grounded context", log: "context ▸ passages + metadata → prompt" },
      { title: "Answer", detail: "LLM response with sources", log: "answer  ▸ context-aware reply with sources ✓" },
    ],
  },
  {
    key: "agent",
    label: "Agent & Tools",
    caption: "An LLM that decides which tool to call and when.",
    steps: [
      { title: "Request", detail: "User asks in plain language", log: "user    ▸ \"add the new policy docs\"" },
      { title: "Reason", detail: "Pick the right tool", log: "plan    ▸ needs corpus update + verify" },
      { title: "Call", detail: "Function / tool calling", log: "tool    ▸ updateCorpus({ folder: \"policies\" })" },
      { title: "Observe", detail: "Read the tool result", log: "result  ▸ import complete, index refreshed" },
      { title: "Respond", detail: "Confirm & continue", log: "agent   ▸ documents added and searchable ✓" },
    ],
  },
  {
    key: "mcp",
    label: "MCP Server",
    caption: "Moving Kriyova's agent tooling onto the Model Context Protocol.",
    steps: [
      { title: "Client", detail: "Agent runtime connects", log: "client  ▸ connect → kriyova-tools server" },
      { title: "Handshake", detail: "Negotiate capabilities", log: "init    ▸ tools · resources · prompts" },
      { title: "Discover", detail: "List tenant's tools", log: "list    ▸ tools enabled for this client" },
      { title: "Invoke", detail: "Typed JSON-RPC call", log: "call    ▸ searchKnowledge({ query })" },
      { title: "Respond", detail: "Results from pgvector", log: "result  ▸ matches → model context ✓" },
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "Aug 2024 — Present",
    role: "Software Developer",
    company: "Docusoft Solution India Pvt. Ltd.",
    location: "Indore, M.P.",
    points: [
      "Designed, developed and optimized full-stack web applications, improving page load speed through efficient frontend architecture and code-splitting.",
      "Built and integrated AI features using RAG pipelines and vector databases to power intelligent document search and Q&A.",
      "Prototyped agentic AI workflows with function/tool calling to automate multi-step backend tasks and reduce manual work.",
      "Owned features across the full SDLC, from requirements and design to testing and deployment, and engineered reusable UI components that sped up delivery across teams.",
    ],
    technologies: ["Node.js", "Express", "React", "Next.js", "RAG", "Vertex AI", "pgvector", "jQuery"],
  },
  {
    year: "Mar 2023 — Aug 2024",
    role: "Software Developer",
    company: "Technomatz IT Solutions",
    location: "Indore, M.P.",
    points: [
      "Designed and implemented responsive full-stack applications, reducing API response time through GraphQL query optimization.",
      "Optimized database queries and application state management for a meaningful improvement in overall system performance.",
      "Applied code-splitting to optimize component load and rendering in scalable UI features.",
      "Worked with cross-functional teams to set best practices for JavaScript frameworks, API integration and technical documentation.",
    ],
    technologies: ["React", "Redux", "GraphQL", "Node.js", "MongoDB", "TypeScript"],
  },
];

export const EDUCATION = [
  { title: "B.Tech, Computer Science & Engineering", place: "RGPV, Bhopal", year: "2019 — 2023", score: "CGPA 8.0" },
  { title: "12th (PCM)", place: "M.P. Board", year: "", score: "85.8%" },
  { title: "10th", place: "M.P. Board", year: "", score: "86.5%" },
];

export const PROJECTS = [
  {
    title: "Kriyova AI",
    tagline: "Configurable AI chatbot as a service",
    role: "Full-Stack Developer · 1 of 2 core devs",
    description:
      "A multi-tenant chatbot platform built around AI agents and tools that clients enable and tailor to their business. Any website can run its own bot by embedding a single, secure script.",
    points: [
      "Client module: profiles, document uploads for chatbot knowledge, agent enable/disable requests",
      "Admin module: client management, agent access control, manual invoices",
      "Scheduler that bills each client monthly based on usage",
      "Leading the migration of agent tooling to MCP servers",
    ],
    technologies: ["Node.js", "Express", "TypeScript", "Next.js", "Supabase", "pgvector"],
    link: "https://kriyovasolutions.com/",
    featured: true,
  },
  {
    title: "DocuAssist",
    tagline: "RAG-powered knowledge assistant",
    role: "Full-Stack Developer",
    description:
      "Context-aware Q&A over large document corpora on Google Vertex AI, with an agent that queries the vector store, fetches documents and triggers corpus updates through tool calls.",
    points: [
      "Automated corpus management for up to 10,000 documents across file types",
      "GCS import pipelines feeding the Vertex AI RAG vector index",
    ],
    technologies: ["Vertex AI", "LLMs", "Vector DB", "Cloud Storage", "Express", "React"],
    link: "https://docusoftpractice.com/",
  },
  {
    title: "Docusoft Practice",
    tagline: "Enterprise document & CRM platform",
    role: "Web Developer",
    description:
      "A document digitization platform with an integrated CRM: fast storage and retrieval, portal messaging, task management, attachments and legally compliant digital signatures.",
    points: [],
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"],
    link: "https://docusoftpractice.com/",
  },
  {
    title: "Unikaksha",
    tagline: "E-learning marketplace",
    role: "Frontend Developer",
    description:
      "Connects tutors and learners: tutors list courses, set slot availability and manage students, while learners browse with tutor and course filters.",
    points: [],
    technologies: ["React", "Redux", "Material UI"],
    link: "",
  },
];

// Earlier client work, shown as compact cards under the featured projects.
export const MORE_PROJECTS = [
  {
    title: "Accelarated",
    category: "SaaS · Growth",
    description: "A/B testing platform that helps web apps grow their reach, with experiment management and built-in licensing.",
    technologies: ["Express", "MongoDB", "GraphQL"],
  },
  {
    title: "The Language Platform",
    category: "EdTech",
    description: "E-learning platform with class scheduling, course listings, live classes and user authentication.",
    technologies: ["React", "TypeScript"],
  },
  {
    title: "Sawah-Leap",
    category: "Travel",
    description: "Tour and travel management: trip creation and updates, bookings and subscriptions.",
    technologies: ["React", "TypeScript"],
  },
  {
    title: "NeutriCare",
    category: "HealthTech",
    description: "Responsive diet-planning app that builds personalised plans from user inputs, with subscription tiers.",
    technologies: ["React", "Bootstrap"],
  },
];

export const PROJECT_DOMAINS = ["SaaS", "AI chatbots", "EdTech", "CRM", "Document management", "Travel", "HealthTech", "Internal tools"];

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ritik-solanki-9200a3210" },
  { label: "GitHub", href: "https://github.com/Ritiksolanki8435" },
  { label: "WhatsApp", href: "https://wa.me/918435943098" },
  { label: "Instagram", href: "https://www.instagram.com/me._hrithik__/" },
];

export const CONTACT = {
  location: "Indore, India",
  timezone: "Asia/Kolkata",
  phoneNo: "+91 8435943098",
  email: "ritiksolanki726@gmail.com",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "ai-lab", label: "AI Lab" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
