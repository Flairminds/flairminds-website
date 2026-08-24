import documentSearchImage from '../assets/documentSearch.png'
import chatbotCollage from "../assets/chatbotCollage.png"
// import demoVideo from '../assets/demoVideo.mp4'
import intellivoice from '../assets/intellivoice.png'
import infraMonitoring from '../assets/infraMonitoring.png'
import leverageModelling from '../assets/leverageModelling1.png'
import borrowingBase from '../assets/borrowingBase.png'
import iksula from '../assets/productMatching.png'
import scrapManagement from '../assets/scrapManagement.png'
import legalai from '../assets/legalai.png'
import aiagent from '../assets/aiagent.png'
import n8nCiCd from '../assets/product-displays/n8n-cicd.png'
import tpvra from '../assets/tpvra.jpg'
import aiExecutiveAssistantImage from '../assets/product-displays/ai-executive-assistant/AI-exec-assistane-solutions.webp'
import aiExecutiveAssistantDemo from '../assets/product-displays/ai-executive-assistant/ai-executive-assistant-demo.mp4'
// import legalai from '../assets/Legal AI solution.mp4'
export const products = [
  {
    id: 1,
    linkDisplay: "ai_executive_assistant",
    name: "AI Executive Assistant",
    image: aiExecutiveAssistantImage,
    detailsParagraphs: [
      "Your Intelligent Executive Partner for Smarter Communication, Scheduling & Productivity.",
      "Save 10+ Hours Every Week – Automate Emails, Meetings & Follow-ups.",
    ],
    subHeading: "Key Features of the Platform:",
    list: [
      "AI Email Assistant: Automatically prioritises, summarises, and extracts key actions from incoming emails, ensuring nothing important is missed.",
      "Meeting Intelligence: Generates meeting briefs before discussions and creates Minutes of Meeting (MoM), decisions, and action items afterwards.",
      "Smart Task & Follow-up Engine: Detects commitments from emails and meetings, assigns tasks, tracks deadlines, and drafts follow-up emails automatically.",
      "Calendar & Scheduling Assistant: Organises meetings intelligently, manages schedules, and keeps your day on track with proactive reminders.",
      "Enterprise-Ready & Secure: Deploy on-premises or private cloud with seamless integration across Gmail, Outlook, Teams, Zoom, Slack, and Google Calendar.",
      "Built for CXOs, Founders, Executive Assistants, Project Managers & Enterprise Leaders – Let AI Handle the Routine While You Focus on Strategic Decisions."
    ],
    highlight: ["Save 10+ Hours Every Week", "AI Email Assistant", "Meeting Intelligence", "Smart Task & Follow-up Engine", "Calendar & Scheduling Assistant", "Enterprise-Ready & Secure", "CXOs, Founders, Executive Assistants, Project Managers & Enterprise Leaders"],
    tags: ["CXOs", "Founders", "Executive Assistants", "Project Managers", "Enterprise Leaders"],
    techTags: [],
    upcomingFeatures: [],
    demoButton: true,
    demoLink: aiExecutiveAssistantDemo,
    status: "released",
    tagline: "Built for CXOs, Founders, Executive Assistants, Project Managers & Enterprise Leaders – Let AI Handle the Routine While You Focus on Strategic Decisions.",
    cta: "Let AI Handle the Routine While You Focus on Strategic Decisions.",
    developer: "",
  }, {
    id: 2,
    linkDisplay: "n8n_ci_cd",
    name: "Agentic AI + CI/CD using n8n",
    image: n8nCiCd,
    detailsParagraphs: ["Your AI-powered automated solution for code reviews and security reviews"],
    subHeading: "Key Features of the Platform:",
    list: ["Closed environment access to ensure data security",
      "Tailored workflows for project specific requirements and enriched context",
      "Get suggestions on fixing issues directly on PRs",
    ],
    highlight: ["Closed environment", "Tailored workflows", "suggestions", "BFSI Portfolio Managers", "Find Critical Data 10x Faster."],
    tags: ["DevOps", "Tech Managers", "Code Review"],
    techTags: ["n8n", "CI/CD"],
    upcomingFeatures: [],
    buttonText: "Try Now",
    projectLink: "https://n8n.flairminds.com/workflow/TTS3rskm8Stfhtn1",
    status: "released",
    tagline: "Find any file, clause, or contract instantly—AI-driven search built for compliance and speed",
    cta: "",
    developer: "Atharva Bhandvalkar",
  },
  {
    id: 3,
    linkDisplay: "intellivoice",
    name: "Intellivoice",
    image: intellivoice,
    detailsParagraphs: [
      "Transcribe Calls & Meetings – Without the Legal Headache.",
      "For Healthcare, Legal & Finance: 99% Accurate, Compliance-Built AI."
    ],
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "HIPAA/GDPR Guardrails: AI auto-flags sensitive terms in transcripts.",
      "No More Notes: Searchable, highlight-ready meeting records.",
      "Workflow Magic: AI extracts deadlines, actions, or key terms.",
    ],
    highlight: ["HIPAA/GDPR Guardrails", "No More Notes", "Workflow Magic", "Healthcare, Legal & Finance", "Get Audit-Proof Transcripts"],
    projectLink: "http://sparkvoice.centralindia.cloudapp.azure.com:8000/",
    buttonText: "Try Now",
    demoButton: true,
    demoLink: 'https://app.storylane.io/share/wdbldbm4vg0i',
    status: "released",
    tagline: "Transcribe meetings with 99% accuracy—compliant, searchable, and action-ready audio intelligence.",
    cta: "Get Audit-Proof Transcripts",
    developer: "",
  },
  {
    id: 4,
    linkDisplay: "infra_monitoring",
    name: "Infra-Monitoring",
    image: infraMonitoring,
    detailsParagraphs: [
      "See System Issues Before Your Users Do.",
      "For DevOps, SaaS & Telecom: Real-Time Log Intelligence & Visual Monitoring."
    ],
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "Unified Log View: Ingest logs from apps, containers & cloud — all centralized.",
      "Smart Parsing Engine: Analyze logs with AI-driven or SQL-like queries.",
      "Grafana Dashboards: Live visualization of errors, uptime & usage trends.",
      "Anomaly Detection: Spot issues before they escalate.",
      "Custom Alerts: Real-time notifications via Slack, Email, or PagerDuty."
    ],
    highlight: ["Smart Parsing Engine", "Grafana Dashboards", "Anomaly Detection", "Custom Alerts"],
    projectLink: "http://infra-monitoring.centralindia.cloudapp.azure.com:3000",
    buttonText: "Try Now",
    status: "released",
    tagline: "From logs to insights—visualize, monitor, and predict app performance with Grafana-driven intelligence.",
    cta: "Predict app performance with Grafana-driven intelligence",
    developer: "DevOps",
  },
  {
    id: 5,
    linkDisplay: "leverage_modelling",
    name: "Leverage Modelling",
    image: leverageModelling,
    detailsParagraphs: [
      "Run Leverage Scenarios in Minutes – Not Days.",
      "For Investment Managers: Python-Powered, Excel-Friendly Modelling."
    ],
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "1-Click Simulations: Test “what-if” scenarios without rebuilding models.",
      "Transparent Math: See every calculation step (no black boxes).",
      " Portfolio Insights: Model risk exposure across assets.",
    ],
    highlight: ["1-Click Simulations", "Transparent Math", "Portfolio Insights", "Investment Managers", "From Data to Strategy"],
    projectLink: "https://leveragemodel.azurewebsites.net/",
    buttonText: "Try Now",
    status: "old",
    tagline: "Model leverage scenarios in minutes—Python-powered transparency meets Excel simplicity for smarter investments.",
    cta: "From Data to Strategy – Model Like a Pro.",
    developer: "Onpepper",
  },
  {
    id: 6,
    name: "Borrowing Base",
    linkDisplay: "borrowing_base",
    image: borrowingBase,
    detailsParagraphs: [
      "ABL Calculations Without the Spreadsheet Nightmare.",
      "Automate Collateral Tracking, Limits & Compliance."
    ],
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "Instant Discrepancy Detection: Upload files – AI checks for errors.",
      "Live Scenario Testing: Adjust asset values, see impacts in real time.",
      "Concentration Alerts: Avoid overexposure with smart thresholds.",
    ],
    highlight: ["Instant Discrepancy Detection", "Live Scenario Testing", "Concentration Alerts", "Lend Smarter, Not Harder"],
    projectLink: "https://borrowing-base-uat.azurewebsites.net/",
    buttonText: "Try Now",
    status: "released",
    tagline: "Ditch spreadsheet chaos—automate asset-based lending with real-time tracking and smart compliance checks.",
    cta: "Lend Smarter, Not Harder – Demo ABL AI.",
    developer: "Onpepper",
  },
  {
    id: 7,
    linkDisplay: "scrap_management",
    name: "SCRAPECO",
    image: scrapManagement,
    detailsParagraphs: [
      "Turn Scrap Chaos into Profit – Automatically.",
      "AI-Powered Matching for Sellers & Buyers in Heavy Industries."
    ],
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "Faster Deals: Auto-match scrap supply/demand by grade, location.",
      "Paperless Compliance: Contracts, payments & docs in one place.",
      "Real-Time Tracking: Know where every ton is – and what it’s worth.",
    ],
    highlight: ["Faster Deals", "Paperless Compliance", "Real-Time Tracking", "Sellers & Buyers in Heavy Industries.", "Sell Scrap Smarter"],
    projectLink: "http://13.201.70.253:9082/sc",
    buttonText: "Try Now",
    status: "released",
    tagline: "Transform industrial scrap into revenue—AI matches buyers and sellers, paperlessly and profitably.",
    cta: "Sell Scrap Smarter – Get a Custom Workflow Demo.",
    developer: "Sammyak",
  },
  {
    id: 8,
    linkDisplay: "product_matching",
    name: "Product Matching Engine",
    image: iksula,
    detailsParagraphs: [
      "94% Accurate Product Matches – Boost Sales, Not Work.",
      "AI That Knows ‘Similar’ Better Than Your Team."
    ],
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "Pricing Power: Match competitors’ SKUs instantly.",
      "Clean Data, Smarter Ads: Auto-categorise messy product feeds.",
      "Scalable to Millions: Speed stays high, even as catalogue grows.",
    ],
    highlight: ["Pricing Power", "Clean Data, Smarter Ads", "Scalable to Millions", "94% Accurate Product Matches", "Launch Better Campaigns with AI Matching – Try It."],
    projectLink: "https://borrowing-base-uat.azurewebsites.net/",
    // buttonText:"Try Now",
    status: "released",
    tagline: "Match millions of SKUs with 94% accuracy—cleaner data, better ads, smarter selling.",
    cta: "Launch Better Campaigns with AI Matching – Try It.",
    developer: "Data Science",
  },
  {
    id: 9,
    linkDisplay: "legal_ai",
    name: "Legal AI",
    image: legalai,
    detailsParagraphs: [
      " Cut Legal Drafting Time by 80% – Without Missing a Clause.",
      "AI That Works Like a Paralegal + Associate, at Bot Speed."
    ],
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "Contract Summarizer: Extract key terms, risks, obligations in seconds.",
      "Change Radar: Compare versions, highlight critical edits.",
      "Virtual Courtroom: Prep for hearings with AI-generated Q&A.",
    ],
    highlight: ["Contract Summarizer", "Change Radar", "Virtual Courtroom", "Cut Legal Drafting Time by 80%", "Let AI Handle the Paperwork"],
    projectLink: "https://happy-dune-0ee899c00.6.azurestaticapps.net/",
    buttonText: "Try Now",
    status: "released",
    demoLink: 'https://res.cloudinary.com/dwphbjpi8/video/upload/v1745571793/nkjtzhwycu7aozc3ba0r.mp4',
    demoButton: true,
    tagline: "Draft, summarize, and prep legal docs in minutes—AI that works like your legal team.",
    cta: "Let AI Handle the Paperwork – Focus on Winning Cases.",
    developer: "Sairushi",
  },
  {
    id: 11,
    linkDisplay: "tpvra",
    name: "TPVRA: Financial Third-Party Risk Management",
    image: tpvra,

    detailsParagraphs: [
      "Move from fragmented spreadsheets to a unified, bank-grade compliance engine. TPVRA centralizes due diligence, continuous monitoring, and immutable audit trails—creating a single source of truth across your third-party ecosystem.",
      "Built for Financial Institutions: TPVRA reduces operational risk, eliminates manual overhead, and delivers the governance, transparency, and forensic history required by auditors and regulators."
    ],

    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],

    list: [
      "Standardized Due Diligence: Eliminate intake inconsistencies with a uniform risk assessment protocol across all business units.",
      "Unified Risk Taxonomy: Consolidate scattered data into one centralized view for consistent financial and operational risk scoring.",
      "Regulatory-Grade Auditability: Gain full transparency with granular, immutable decision logs for internal audits and regulatory examinations.",
      "Automated Policy Enforcement: Operationalize risk frameworks by automating scoring logic and re-assessment cycles for continuous compliance.",
      "Secure Vendor Collaboration: Enable controlled vendor interactions through a governed portal that preserves data privacy and process integrity."
    ],

    highlight: [
      "Built for Financial Institutions",
      "Engineered for Financial Institutions",
      "Standardized Due Diligence",
      "Unified Risk Taxonomy",
      "Regulatory-Grade Auditability",
      "Automated Policy Enforcement",
      "Secure Vendor Collaboration",
      "Where confidence meets compliance!"
    ],

    projectLink: "https://tprva.flairminds.com",
    buttonText: "Try Now",
    status: "released",
    demoLink: "https://res.cloudinary.com/dxvmidcow/video/upload/v1765790121/TPVRA.mp4",
    demoButton: true,

    tagline: "The definitive TPRM operating system for modern finance—unifying Admin oversight, Assessor analytics, and Vendor compliance.",
    cta: "Where confidence meets compliance!",
    developer: "Sairushi",
  },
  {
    id: 10,
    linkDisplay: "ai_agent",
    name: "AI Agent for Integrations",
    image: aiagent,
    detailsParagraphs: [
      "Cut POC Coding Time by 70% – Automate Integration, Minimize Redundancy.",
      "AI That Builds POC Code Like a Tech Lead + Integrator, at Lightning Speed."
    ],
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "Excel-to-POC Converter: Auto-extracts partner API details from Excel sheets, generates integration-ready code in minutes.",
      "Smart Decision Engine: Customizes logic per partner using LangGraph + GeminiAI.",
      "Reusable AI Agents: Replicates integration workflows across APIs, ensuring consistency and scalability.",
    ],
    highlight: ["Cut POC Coding Time by 70%", "Excel-to-POC Converter:", "Smart Decision Engine:", "Reusable AI Agents:", "Let AI help you building", "Built for Tech Architects, Integration Engineers & Product Managers – Empower Your Development with AI. Focus on What Matters Most."],
    projectLink: "http://4.186.25.221:8080/",
    buttonText: "Try Now",
    status: "released",
    demoLink: 'https://res.cloudinary.com/dwphbjpi8/video/upload/v1745571793/nkjtzhwycu7aozc3ba0r.mp4',
    demoButton: false,
    tagline: "Accelerate backend development by letting AI generate reliable POC code from your API specs—so your team can focus on building real value.",
    cta: "Built for Tech Architects, Integration Engineers & Product Managers – Empower Your Development with AI. Focus on What Matters Most.",
    developer: "Roshan",
  },
  {
    id: 2,
    linkDisplay: "document_search",
    name: "Document Search Platform",
    image: documentSearchImage,
    detailsParagraphs: ["Stop Hunting for Documents. Let AI Find What You Need – Before You Ask.",
      "For BFSI Portfolio Managers: Secure, Instant Search Across Contracts, Reports & Compliance Files."],
    subHeading: "Key Features of the Platform:",
    list: [" Zero Waiting: Upload PDFs/Word files – AI organizes & retrieves them in seconds.",
      "Elasticsearch on Steroids: Pinpoint clauses, figures, or risks with filters & OCR.",
      "Built for Auditors: Compliance-ready storage & search, so you’re always prepared.",
    ],
    highlight: ["Zero Waiting", "Elasticsearch on Steroids", "Built for Auditors", "BFSI Portfolio Managers", "Find Critical Data 10x Faster."],
    tags: ["BFSI", "Portfolio Managers", "Auditors"],
    techTags: ["Elasticsearch"],
    upcomingFeatures: [],
    buttonText: "Try Now",
    projectLink: "http://dev-docsearch.centralindia.azurecontainer.io",
    status: "released",
    tagline: "Find any file, clause, or contract instantly—AI-driven search built for compliance and speed",
    cta: "Try AI-Powered Search – Find Critical Data 10x Faster.",
    developer: "Utkarsh",
  },
  {
    id: 2,
    linkDisplay: "rag",
    name: "RAG-Context Aware Chatbots",
    image: chatbotCollage,
    detailsParagraphs: ["Turn Your Knowledge Base into a Real-Time Decision Engine.",
      "For Telecom, Banking & Regulated Industries: Chatbots That Understand Complexity."
    ],
    demoButton: true,
    demoLink: 'https://app.storylane.io/share/hxz08unj5naz',
    subHeading: "Key Features of the Platform:",
    upcomingFeatures: [],
    list: [
      "FM Doc Summarizer: Get boardroom-ready insights from lengthy reports in seconds.",
      "TeleConnect Companion: Resolve customer queries instantly (no human needed).",
      "Jargon-Smart AI: Answers in plain English or industry-specific terms.",
      "Each chatbot is uniquely optimized for accuracy, these chatbots are perfect for professionals, researchers, and everyday users."
    ],
    highlight: ["FM Doc Summarizer", "TeleConnect Companion", "Jargon-Smart AI", "Telecom, Banking & Regulated Industries", "Deploy a Chatbot That Talks Like Your Top Analyst"],
    buttonText: null,
    chatbot: [
      {
        id: 'chat1',
        text: "FM Doc Summarizer",
        link: "https://fm-doc-summarizer.streamlit.app/"
      },
      {
        id: 'chat2',
        text: "FM Doc Summary & Upload",
        link: "https://fm-doc-summary-upload.streamlit.app/"
      }
    ],
    status: "released",
    tagline: "Smartest chatbots in regulated industries—turn your documents into real-time, decision-making machines.",
    cta: "Deploy a Chatbot That Talks Like Your Top Analyst – Demo Today.",
    developer: "",
  },
]