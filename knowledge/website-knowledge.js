/**
 * FlairMinds Website Knowledge Base
 * Injected as system context into every Gemini chatbot prompt.
 * Keep this updated as the website content changes.
 */

const websiteKnowledge = `
# FlairMinds — Company Overview

FlairMinds is a technology consulting and AI engineering company that helps global enterprises solve complex technical challenges through AI, cloud, data, and software engineering.

**Website:** https://flairminds.com  
**Contact page:** /contact  
**About us:** /about  
**Careers:** /careers

---

# Services

FlairMinds offers the following services (all accessible from /services):

## 1. AI & Data Science
Route: /services/ai-data-science  
Description: End-to-end AI/ML development — from data strategy and model development to deployment and monitoring. Covers LLM integration, RAG pipelines, predictive analytics, NLP, computer vision, and on-premise AI solutions.

## 2. Web & Mobile Development
Route: /services/web-mobile-development  
Description: Full-stack web and mobile applications using React, Next.js, Node.js, Python, and cloud-native architectures. Specializes in enterprise-grade SaaS products, responsive UIs, and API-first design.

## 3. Cloud & DevOps
Route: /services/cloud-devops  
Description: Cloud architecture design, migration, and optimization on AWS, Azure, and GCP. CI/CD pipelines, Kubernetes orchestration, Infrastructure-as-Code (Terraform), and cost optimization.

## 4. Quality Engineering & Test Automation
Route: /services/quality-engineering  
Description: Automated testing suites using Playwright, Selenium, Jest, and k6. UI regression, API testing, performance testing, and end-to-end test coverage for mission-critical systems.

## 5. Digital Transformation
Route: /services/digital-transformation  
Description: Guiding organizations through modernization — legacy system migration, process automation, RPA, change management, and technology strategy consulting.

## 6. IT Management
Route: /services/it-management  
Description: Managed IT services, infrastructure monitoring, helpdesk operations, and strategic IT planning for mid-to-large enterprises.

## 7. AI Technology Stack (AI Tech Stack)
Route: /services/ai-tech-stack  
Description: Advisory and implementation of the full AI technology stack — LLMs, vector databases, embedding models, Ollama, LangChain, RAG architectures, and MLOps pipelines.

---

# Case Studies

All case studies are listed at: /case-study

## SwiftIQ Guard — AML Compliance Platform
Route: /case-study/swiftiq-guard  
ID: CASE_AML_10  
Status: DEPLOYED  
Summary: A privacy-first, on-premise SWIFT message AML screening platform built for banks and financial institutions. Uses a 4-tier AI decision chain:
- Tier 1: Deterministic Rule Engine (<5ms) — structuring alerts, high-risk corridor detection, TBML HS code flags
- Tier 2: ML Intelligence (~120ms) — XGBoost risk classification + Isolation Forest anomaly detection
- Tier 3: Sanctions Screening (<200ms) — OFAC, EU, UN watchlists with Levenshtein fuzzy matching
- Tier 4: AI Synthesis (<2s) — On-premise Llama 3.1 via Ollama generates professional audit narratives
Key stats: 200× cheaper than enterprise AML tools (Actimize, FCCM), end-to-end screening in <3 seconds, 105/105 tests passing, $500–$3,000/month infrastructure cost vs $500K–$5M/yr enterprise licensing.
Tech stack: React, Vite, Vanilla JS SWIFT parsers, Python Flask, XGBoost, Isolation Forest, Llama 3.1, Ollama, Supabase, PostgreSQL, JWT/RBAC.

## AI MDM Platform
Route: /case-study/ai-mdm-platform  
ID: CASE_MDM_09  
Status: DEPLOYED  
Summary: An AI-powered Master Data Management platform that automates data ingestion, profiling, deduplication, enrichment, and pipeline building — replacing weeks of manual cleaning with intelligent AI pipelines. 80% reduction in manual data cleaning effort.
Tech stack: React, ReactFlow, FastAPI, Python, RapidFuzz, scikit-learn, Oracle DB, OpenAI GPT, RAG.

## AI-Powered PoC Development
Route: /case-study/ai-poc-development  
ID: CASE_AI_POC_01  
Status: CAPABILITY  
Summary: Accelerating proof-of-concept delivery with AI across the entire SDLC — reducing turnaround time by 60% while maintaining enterprise-quality standards.

## Enterprise Test Automation
Route: /case-study/test-automation  
ID: CASE_QA_01  
Status: DEPLOYED  
Summary: Fully automated UI regression suite for PLC programming — eliminating manual testing and delivering 85% reduction in regression time with 100% release confidence.
Tech stack: Playwright, Jest, CI/CD pipelines.

## AI Automation (Deloitte)
Route: /case-study/ai_automation  
ID: CASE_AI_02  
Status: COMPLETED  
Summary: AI-powered solution to extract structured data from diverse commercial tax documents enabling faster, more accurate financial due diligence for US, Netherlands, and Canada.

## Enterprise Data Transformation
Route: /case-study/ent_data_transformation  
ID: CASE_DATA_03  
Status: PRODUCTION  
Summary: A global investment leader overcame data silos by centralizing fragmented data streams, reducing operational risk and improving reporting and compliance.

## Cloud Optimization
Route: /case-study/cloud_optimization  
ID: CASE_CLOUD_04  
Status: SCALED  
Summary: Complete redesign and migration of a SaaS AI platform cloud architecture to build a robust, secure, and highly scalable foundation.

## Quantfinance Preparation Platform
Route: /case-study/quant_finance  
ID: CASE_QUANT_05  
Status: ACTIVE  
Summary: A specialized platform for mastering complex quantitative finance topics and interview preparation.

## E-Sign Platform
Route: /case-study/e_sign_platform  
ID: CASE_SIGN_06  
Status: STABLE  
Summary: Comprehensive e-signature platform replacing manual paper-based workflows with robust security, real-time authentication, and multi-party signing.

## Fable Fintech
Route: /case-study/fable_fintech  
ID: CASE_FABLE_07  
Status: DEPLOYED  
Summary: Seamless and secure high-value remittance transactions across international corridors with standardized API integration for global banking partners.

## Vendor Risk Assessment
Route: /case-study/vendor_risk_assessment  
ID: CASE_RISK_08  
Status: LIVE  
Summary: Fast, accurate, data-driven evaluation of third-party vendors and tenants — reducing underwriting time significantly for a major bank.

---

# Blogs

All blogs listed at: /blogs

## Agentic AI Blog
Route: /blogs/agentic-ai  
Summary: Deep dive into agentic AI systems — what they are, how multi-agent architectures work, and how FlairMinds implements them for enterprise use cases.

---

# Company Information

## About FlairMinds
Route: /about  
FlairMinds is led by a team of experienced engineers, data scientists, and technology strategists. The company is headquartered in India and serves global clients across fintech, banking, healthcare, and enterprise sectors.

## Careers
Route: /careers  
FlairMinds is actively hiring engineers, data scientists, and consultants. Open positions span AI/ML engineering, full-stack development, DevOps, and project management.

## Contact
Route: /contact  
Visitors can reach FlairMinds through the contact page to discuss projects, request demos, or get pricing information. The team typically responds within 24 hours.

---

# Key Differentiators

1. **Privacy-first AI**: On-premise LLM deployments (Ollama, Llama) ensuring data never leaves the client's network — critical for banking and regulated industries.
2. **Full-stack AI engineering**: Not just consulting — FlairMinds builds and deploys production-ready AI systems end-to-end.
3. **Domain expertise**: Deep experience in fintech, AML compliance, MDM, and enterprise data management.
4. **Open-source stack**: No vendor lock-in — solutions built on proven open-source technologies.
5. **Measurable outcomes**: Every engagement is tied to specific business metrics (200× cost reduction, 80% effort saved, 85% regression time reduction).

---

# Navigation Summary

| Page | Route |
|------|-------|
| Home | / |
| About | /about |
| Services | /services (and sub-routes above) |
| Case Studies | /case-study |
| Blogs | /blogs |
| Contact | /contact |
| Careers | /careers |
`;

export default websiteKnowledge;
