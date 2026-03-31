// FlairMinds Website Knowledge Base — compact format for LLM context efficiency
const websiteKnowledge = `
# FlairMinds
AI + technology consulting firm. Builds & deploys production-ready AI systems end-to-end.
Site: flairminds.com | /about | /contact | /careers | /case-study | /blogs

# SERVICES (/services)

/services/ai-data-science — AI & Data Science
LLM integration, RAG pipelines, agentic AI, multi-agent systems, NLP, computer vision, predictive analytics, XGBoost, Isolation Forest, FAISS, Ollama, on-premise AI, MLOps.

/services/web-mobile-development — Web & Mobile
React, Next.js, Node.js, Python, Vite, TypeScript, enterprise SaaS, API-first, responsive UI.

/services/cloud-devops — Cloud & DevOps
AWS/Azure/GCP architecture, Kubernetes, Terraform, CI/CD, Azure App Service, multi-tenant cloud security, cost optimization.

/services/quality-engineering — Quality Engineering & Test Automation
Playwright, Selenium, Jest, k6, UI regression, API testing, performance testing, P95 SLA validation.

/services/digital-transformation — Digital Transformation
Legacy migration, process automation, RPA, change management, technology strategy.

/services/it-management — IT Management
Managed IT, infrastructure monitoring, helpdesk, strategic IT planning.

/services/ai-tech-stack — AI Tech Stack
LLMs, vector DBs, embeddings, Ollama, LangChain, LangGraph, RAG, agentic AI, MLOps advisory.

# CASE STUDIES (/case-study)

/case-study/swiftiq-guard — SwiftIQ Guard: AML Compliance Platform [DEPLOYED]
Privacy-first on-premise SWIFT message AML screening for banks. 200× cheaper than Actimize/FCCM/Fircosoft ($500–$3K/mo vs $500K–$5M/yr). End-to-end in <3s. 105/105 tests passing.
4-tier AI chain: Tier1=Rule Engine <5ms (structuring alerts $9.5K–$9.9K, FATF corridors, TBML HS codes) → Tier2=ML ~120ms (XGBoost + Isolation Forest, 50K training set) → Tier3=Sanctions <200ms (OFAC/EU/UN, Levenshtein 80%) → Tier4=AI Synthesis <2s (Llama 3.1 on-premise via Ollama, audit narrative). Safe-Path: highest severity wins. INSERT-only audit log (Supabase RLS). RBAC: Admin/Officer/Viewer.
Stack: React, Vite, Vanilla JS SWIFT parsers MT103/MT700/MX, Python Flask, XGBoost, Isolation Forest, Llama 3.1, Ollama, Supabase, PostgreSQL, JWT.

/case-study/ai-mdm-platform — AI MDM Platform [DEPLOYED]
AI-powered Master Data Management. Automates ingestion, profiling, deduplication, enrichment, pipeline building. 80% reduction in manual data cleaning. Visual pipeline builder (ReactFlow).
Stack: React, ReactFlow, FastAPI, Python, RapidFuzz, scikit-learn, Oracle DB, OpenAI GPT, RAG.

/case-study/ai-poc-development — AI PoC Development [CAPABILITY]
AI-accelerated proof-of-concept delivery across SDLC. 60% faster turnaround, enterprise-quality output.

/case-study/test-automation — Enterprise Test Automation [DEPLOYED]
Automated UI regression for PLC programming. 85% reduction in regression time, 100% release confidence. Stack: Playwright, Jest, CI/CD.

/case-study/ai_automation — AI Automation / Deloitte [COMPLETED]
AI extraction of structured data from commercial tax documents (US, Netherlands, Canada) for financial due diligence.

/case-study/ent_data_transformation — Enterprise Data Transformation [PRODUCTION]
Centralized fragmented data streams for a global investment leader. Reduced operational risk, improved compliance reporting.

/case-study/cloud_optimization — Cloud Optimization [SCALED]
Full redesign/migration of SaaS AI platform cloud architecture for scalability and security.

/case-study/quant_finance — Quantfinance Preparation Platform [ACTIVE]
Platform for mastering quantitative finance topics and quant interview preparation.

/case-study/e_sign_platform — E-Sign Platform [STABLE]
E-signature platform replacing paper workflows. Robust security, real-time auth, multi-party signing.

/case-study/fable_fintech — Fable Fintech [DEPLOYED]
High-value cross-border remittance transactions. Standardized API integration for global banking partners.

/case-study/vendor_risk_assessment — Vendor Risk Assessment [LIVE]
Fast, data-driven third-party vendor/tenant risk evaluation. Reduced underwriting time for a major bank.

# BLOGS (/blogs)

/blogs/pdf-analyzer — Financial Analyzer: From PDFs to Interactive Insights [Oct 28, 2025]
Tags: Financial Analysis, AI Chatbot, PDF Processing
LLM extracts structured financial metrics from PDFs via strict prompt contract → time-series visualization → traceable PDF page preview → RAG chatbot (FAISS) for contextual Q&A over the document library. Solves manual analyst extraction pain.

/blogs/ai-productivity-challenge — AI Productivity Challenge: Empowering Innovation [Jan 19, 2026]
Tags: AI, Productivity, Innovation, Team Learning
Internal FlairMinds team AI challenge. Winning solutions: AI Decision Memory Systems, intelligent workflow automation. Key theme: AI augments human intelligence, doesn't replace it. Showcases FlairMinds' AI-first culture.

/blogs/ai-powered-web-scraping-and-reporting — AI-Powered Web Scraping & Report Generation [Feb 2, 2026]
Tags: Web Scraping, AI, LLM, Python, Streamlit
Technical guide: async web crawling + document parsing + LLM integration in Streamlit. Covers async-sync context handling, model fallbacks, smart content extraction. Stack: Python async/await, Streamlit, LLM integration.

/blogs/shadowlight — ShadowLight: AI-Powered Accessibility in Record Time [Feb 16, 2026]
Tags: AI, Chrome Extension, Accessibility, React, TypeScript, Intern Project
FlairMinds intern team built a production Chrome extension in 2 weeks using AI-accelerated dev (50% faster build). ShadowLight: real-time AI guidance, visual accessibility features, intelligent navigation. Tech: Chrome Extension APIs, React, TypeScript.

/blogs/azure-sandbox — Inside Azure App Service Sandboxing [Mar 2, 2026]
Tags: Azure, App Service, Cloud Security, Multi-Tenant, PaaS, DevOps
Deep technical dive: Azure App Service isolation, process sandboxing, shared resource governance, noisy-neighbor elimination at cloud scale. For architects making PaaS decisions.

/blogs/strapi-blog — Decoupling Content from Code: Strapi CMS Architecture [Mar 13, 2026]
Tags: Strapi, CMS, Headless CMS, API, Content Architecture, GraphQL
How FlairMinds uses Strapi headless CMS to decouple content from frontend code — zero-deployment content updates, REST/GraphQL API integration, scalable content workflows.

/blogs/agentic-ai — From Chatbots to Digital Employees: Agentic AI & Multi-Agent Systems [Mar 18, 2026]
Tags: Agentic AI, Multi-Agent Systems, LLM, ReAct, AI Architecture, RAG, LangGraph
Comprehensive guide: shift from passive GenAI to autonomous agentic systems. Covers ReAct loop (Reason+Act), Multi-Agent architecture, agent decision frameworks, reliability engineering, tool use, function calling, LangGraph orchestration, enterprise implementation. FlairMinds' flagship AI strategy article.

# COMPANY

About (/about): Led by engineers, data scientists, strategists. Serves fintech, banking, healthcare, enterprise globally.
Careers (/careers): Hiring AI/ML engineers, full-stack devs, DevOps, PMs. Strong intern programme (ShadowLight).
Contact (/contact): Project inquiries, demos, pricing. Responds within 24hrs.

# KEY DIFFERENTIATORS
- Privacy-first: On-premise LLMs (Ollama/Llama 3.1) — data never leaves client network (banking/regulated industries)
- Full-stack AI: Build + deploy production systems end-to-end, not just consulting
- Domain depth: Fintech AML, SWIFT messaging, MDM, enterprise data, cloud (Azure/AWS/GCP), accessibility
- Open-source stack: No vendor lock-in (React, Python, PostgreSQL, Ollama, FAISS, LangGraph)
- Outcomes: 200× cost reduction (SwiftIQ), 80% effort saved (MDM), 85% regression cut (QA), 50% faster build (ShadowLight), 60% faster delivery (PoC)
- Culture: Internal AI challenges, intern empowerment, active technical blog

# PRODUCTS / SOLUTIONS STORE (/store or /)
20+ AI solutions, 100% enterprise-ready, ROI-focused. AI-powered search available on the store page.

/store#n8n_ci_cd — Agentic AI + CI/CD using n8n [RELEASED]
Tags: DevOps, Tech Managers, Code Review | Tech: n8n, CI/CD
Automated AI-powered code review & security review platform. Closed environment (data security), tailored workflows per project, PR suggestions. Link: https://n8n.flairminds.com/workflow/TTS3rskm8Stfhtn1

/store#intellivoice — Intellivoice [RELEASED]
Tags: Healthcare, Legal, Finance | 99% accurate transcription
HIPAA/GDPR-compliant call & meeting transcription. Auto-flags sensitive terms, searchable highlight-ready records, AI extracts deadlines/actions/key terms. Demo: https://app.storylane.io/share/wdbldbm4vg0i | Link: http://sparkvoice.centralindia.cloudapp.azure.com:8000/

/store#infra_monitoring — Infra-Monitoring [RELEASED]
Tags: DevOps, SaaS, Telecom | Tech: Grafana
Unified log ingestion from apps/containers/cloud. AI/SQL-like log parsing, Grafana dashboards for real-time error/uptime/usage, anomaly detection, custom alerts (Slack/Email/PagerDuty). Link: http://infra-monitoring.centralindia.cloudapp.azure.com:3000

/store#leverage_modelling — Leverage Modelling [RELEASED]
Tags: Investment Managers, Finance | Tech: Python
Python-powered leverage scenario modelling. 1-click what-if simulations, transparent math (no black boxes), portfolio risk exposure across assets. Excel-friendly. Link: https://leveragemodel.azurewebsites.net/

/store#borrowing_base — Borrowing Base [RELEASED]
Tags: Asset-Based Lending, ABL, Finance
Automates ABL collateral tracking, limits & compliance. Instant discrepancy detection (AI checks uploaded files), live scenario testing (adjust asset values → real-time impact), concentration alerts (smart overexposure thresholds). Link: https://borrowing-base-uat.azurewebsites.net/

/store#scrap_management — SCRAPECO [RELEASED]
Tags: Heavy Industries, Scrap, Supply Chain
AI-powered scrap buyer/seller matching by grade & location. Paperless contracts/payments/docs, real-time tracking of inventory value. Link: http://13.201.70.253:9082/sc

/store#product_matching — Product Matching Engine [RELEASED]
Tags: E-commerce, Retail, Ads | 94% accuracy
AI matches competitor SKUs instantly. Auto-categorises messy product feeds, scalable to millions of SKUs. Enables pricing intelligence and smarter ad targeting.

/store#legal_ai — Legal AI [RELEASED]
Tags: Legal, Compliance, Law | 80% drafting time reduction
AI paralegal: Contract Summarizer (key terms/risks/obligations in seconds), Change Radar (version comparison, critical edits), Virtual Courtroom (AI-generated hearing Q&A prep). Link: https://happy-dune-0ee899c00.6.azurestaticapps.net/

/store#tpvra — TPVRA: Financial Third-Party Risk Management [RELEASED]
Tags: Financial Institutions, TPRM, Compliance, Regulatory
Bank-grade third-party risk management. Centralized due diligence, continuous monitoring, immutable audit trails. Features: Standardized Due Diligence, Unified Risk Taxonomy, Regulatory-Grade Auditability (granular immutable decision logs), Automated Policy Enforcement (risk scoring + re-assessment cycles), Secure Vendor Collaboration portal. Built for auditors & regulators. Link: https://tprva.flairminds.com

/store#ai_agent — AI Agent for Integrations [RELEASED]
Tags: Tech Architects, Integration Engineers, Product Managers | 70% less POC coding time
Excel-to-POC Converter (auto-extracts partner API details from Excel, generates integration-ready code), Smart Decision Engine (LangGraph + Gemini AI per-partner logic), Reusable AI Agents (consistent cross-API workflows). Link: http://4.186.25.221:8080/

/store#document_search — Document Search Platform [RELEASED]
Tags: BFSI, Portfolio Managers, Auditors | Tech: Elasticsearch, OCR
AI-powered document search for contracts/reports/compliance files. Instant PDF/Word ingestion, Elasticsearch with OCR and clause/figure/risk filters, compliance-ready storage. 10× faster critical data retrieval. Link: http://dev-docsearch.centralindia.azurecontainer.io

/store#rag — RAG-Context Aware Chatbots [RELEASED]
Tags: Telecom, Banking, Regulated Industries | Tech: RAG, Streamlit
Turns knowledge base into real-time decision engine. FM Doc Summarizer (boardroom-ready insights from reports), TeleConnect Companion (instant customer query resolution), Jargon-Smart AI (plain English or industry-specific). Optimized for professionals, researchers, everyday users. Demos: FM Doc Summarizer → https://fm-doc-summarizer.streamlit.app/ | FM Doc Summary & Upload → https://fm-doc-summary-upload.streamlit.app/
`;

export default websiteKnowledge;
