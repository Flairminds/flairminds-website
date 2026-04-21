import React, { useState } from 'react';
import styles from './AiTechStack.module.css';
import {
    FaRocket, FaCheckCircle, FaBolt, FaChartLine,
    FaArrowRight, FaClock, FaCode, FaCogs,
    FaShieldAlt, FaGlobe, FaBug, FaTools,
    FaMicroscope, FaBrain, FaRobot, FaMicrophone,
    FaBook, FaHeart, FaStickyNote, FaDraftingCompass, FaWater, FaChalkboardTeacher,
    FaDatabase, FaSearch, FaTerminal, FaPalette
} from 'react-icons/fa';
import {
    SiGithubcopilot, SiAnthropic, SiMeta, SiNotion,
    SiNodedotjs, SiPython, SiOpenai, SiGooglegemini,
    SiLangchain, SiGithubactions, SiReplit, SiStackblitz, SiVercel
} from 'react-icons/si';
import { MdAutoAwesome, MdSpeed, MdSmartToy, MdAutoFixHigh } from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ['All', 'Planning & Requirements', 'Design & Prototyping', 'AI IDEs & Copilots', 'Generative AI', 'Agentic Platforms', 'DevOps & QA'];

const tools = [
    // ── Planning & Requirements ─────────────────────────────────────
    {
        icon: <SiNotion />,
        name: 'Notion AI',
        category: ['Planning & Requirements'],
        color: '#000000',
        visible: true,
        points: [
            'AI-powered workspace for user story writing, PRD drafting, and project documentation.',
            'Generates structured meeting notes, sprint plans, and requirement specs from plain text.',
            'Reduces documentation effort by 50% and keeps requirements always in sync with dev progress.'
        ]
    },
    {
        icon: <FaMicrophone />,
        name: 'Fireflies.ai',
        category: ['Planning & Requirements'],
        color: '#7B5EA7',
        visible: true,
        points: [
            'AI notetaker that transcribes, summarises, and action-items every stakeholder meeting.',
            'Integrates with Zoom, Meet, and Teams - feeding structured insights directly into project tools.',
            'Eliminates manual meeting notes, saving 2-3 hours per week per team member.'
        ]
    },
    {
        icon: <FaBook />,
        name: 'NotebookLM',
        category: ['Planning & Requirements'],
        color: '#4285f4',
        visible: true,
        points: [
            "Google's AI notebook that grounds research in your own documents, PDFs, and sources.",
            'Used for competitive analysis, feasibility research, and synthesising large knowledge bases.',
            'Cuts research phase duration by up to 60% with cited, document-grounded answers.'
        ]
    },
    {
        icon: <FaChalkboardTeacher />,
        name: 'Gamma',
        category: ['Planning & Requirements'],
        color: '#7c3aed',
        visible: true,
        points: [
            'AI-powered presentation and document builder — converts text or bullet points into polished decks instantly.',
            'Used for creating client proposals, sprint review decks, and stakeholder reports in minutes.',
            'Reduces presentation preparation time by 80% with smart layouts, themes, and auto-generated visuals.'
        ]
    },

    // ── Design & Prototyping ─────────────────────────────────────────
    {
        icon: <FaHeart />,
        name: 'Lovable',
        category: ['Design & Prototyping'],
        color: '#e14dff',
        visible: true,
        points: [
            'AI full-stack app builder that converts natural language prompts into working React UIs.',
            'Generates responsive, styled components and connects them to backend logic in minutes.',
            'Reduces UI prototyping time from days to under an hour for client demos and PoCs.'
        ]
    },
    {
        icon: <FaStickyNote />,
        name: 'Napkin AI',
        category: ['Planning & Requirements', 'Design & Prototyping'],
        color: '#f59e0b',
        visible: true,
        points: [
            'Converts text descriptions into visual diagrams, charts, and concept illustrations instantly.',
            'Used for converting requirements and ideas into shareable visual briefs for stakeholders.',
            'Saves 2-4 hours per design sprint by auto-generating visual assets from written content.'
        ]
    },
    {
        icon: <FaDraftingCompass />,
        name: 'Eraser.io',
        category: ['Planning & Requirements', 'Design & Prototyping'],
        color: '#6366f1',
        visible: true,
        points: [
            'AI-powered diagramming tool for system architecture, flow charts, and entity-relationship diagrams.',
            'Write diagrams as code (or plain text) and render them instantly - ideal for technical documentation.',
            'Speeds up architecture planning and onboarding documentation by 3x compared to manual tools.'
        ]
    },

    // ── AI IDEs & Copilots ──────────────────────────────────────────
    {
        icon: <MdAutoAwesome />,
        name: 'Antigravity',
        category: ['AI IDEs & Copilots', 'Design & Prototyping', 'DevOps & QA'],
        color: '#b9ed5e',
        visible: true,
        points: [
            'Agentic AI coding assistant that plans, writes, and verifies multi-file changes autonomously.',
            'Understands full project context - eliminates manual back-and-forth debugging sessions.',
            'Reduces feature development time by up to 70% through end-to-end automated code generation.'
        ]
    },
    {
        icon: <SiGithubcopilot />,
        name: 'GitHub Copilot',
        category: ['AI IDEs & Copilots', 'DevOps & QA'],
        color: '#2dba4e',
        visible: true,
        points: [
            'Real-time inline code suggestions trained on billions of lines of public code.',
            'Autocompletes functions, tests, and documentation with high contextual accuracy.',
            'Saves developers 30-55% of time on repetitive boilerplate and CRUD code.'
        ]
    },
    {
        icon: <VscCode />,
        name: 'Cursor',
        category: ['AI IDEs & Copilots', 'DevOps & QA'],
        color: '#6c73ff',
        visible: true,
        points: [
            'AI-native IDE with chat, edit, and multi-file refactoring built directly into the editor.',
            'Supports natural language commands to restructure entire codebases with one prompt.',
            'Cuts complex refactoring and bug-fix cycles from hours to minutes.'
        ]
    },
    {
        icon: <FaWater />,
        name: 'Windsurf',
        category: ['AI IDEs & Copilots', 'DevOps & QA'],
        color: '#00c4cc',
        visible: true,
        points: [
            'Agentic AI IDE by Codeium with Cascade - understands multi-file context and executes complex tasks.',
            'Combines real-time autocomplete with intelligent multi-step agentic code generation.',
            'Reduces development cycle time by up to 50% through deep codebase awareness and automation.'
        ]
    },
    {
        icon: <SiAnthropic />,
        name: 'Claude Code',
        category: ['AI IDEs & Copilots'],
        color: '#cc785c',
        visible: true,
        points: [
            'Used via Cursor and API integrations for long-context code generation and review.',
            'Excels at understanding large codebases and producing safe, well-reasoned outputs.',
            'Dramatically speeds up code review and refactoring with its 200K token context window.'
        ]
    },

    // ── Generative AI ───────────────────────────────────────────────
    {
        icon: <SiOpenai />,
        name: 'ChatGPT',
        category: ['Generative AI', 'Planning & Requirements'],
        color: '#10a37f',
        visible: true,
        points: [
            'Used for ideation, PRD drafting, user story generation and technical writing.',
            'o1 and GPT-4o models handle complex reasoning tasks across planning and architecture.',
            'Reduces documentation effort by 60% and accelerates requirements gathering.'
        ]
    },
    {
        icon: <SiGooglegemini />,
        name: 'Gemini',
        category: ['Generative AI', 'Planning & Requirements', 'Design & Prototyping'],
        color: '#4285f4',
        visible: true,
        points: [
            'Deep Research mode used for competitive analysis, market research and technical feasibility.',
            'Integrated into design workflows for converting briefs into UI wireframe suggestions.',
            'Cuts research and discovery phase duration by up to 50%.'
        ]
    },
    {
        icon: <SiAnthropic />,
        name: 'Claude',
        category: ['Generative AI', 'Design & Prototyping', 'DevOps & QA'],
        color: '#cc785c',
        visible: true,
        points: [
            "Anthropic's safety-first LLM used for nuanced writing, summarisation and Q&A workflows.",
            'Preferred for long-document analysis: contracts, reports, and dense technical specs.',
            'Reduces manual review workload by 65% on document-heavy projects.'
        ]
    },
    {
        icon: <SiMeta />,
        name: 'Llama',
        category: ['Generative AI', 'Agentic Platforms'],
        color: '#0668e1',
        visible: true,
        points: [
            'Open-source LLM from Meta, deployed on-premise for privacy-sensitive workloads.',
            'Fine-tuned for domain-specific tasks: custom knowledge bases and internal AI assistants.',
            'Eliminates API cost for high-volume inference - reduces AI infrastructure spend by 80%.'
        ]
    },

    // ── Agentic Platforms ───────────────────────────────────────────
    {
        icon: <MdSmartToy />,
        name: 'Antigravity Agents',
        category: ['Agentic Platforms'],
        color: '#b9ed5e',
        visible: false,
        points: [
            'Multi-step agentic workflows that plan, execute, and verify tasks across the entire SDLC.',
            'Orchestrates tool use (browser, terminal, file system) to complete complex engineering tasks end-to-end.',
            'Enables autonomous sprint delivery - reducing human touchpoints by up to 60%.'
        ]
    },
    {
        icon: <SiLangchain />,
        name: 'LangChain',
        category: ['Agentic Platforms'],
        color: '#1c3c3c',
        visible: true,
        points: [
            'Framework for building LLM-powered chains, RAG pipelines and tool-using agents.',
            'Used to connect AI models with internal databases, APIs, and document stores.',
            'Reduces time-to-build for AI-powered features from weeks to days.'
        ]
    },
    {
        icon: <FaRobot />,
        name: 'AutoGen',
        category: ['Agentic Platforms'],
        color: '#7b2fc6',
        visible: false,
        points: [
            "Microsoft's multi-agent conversation framework for orchestrating teams of AI agents.",
            'Enables specialist agents (coder, tester, reviewer) to collaborate on complex tasks.',
            'Accelerates agentic feature development by 3x through parallel agent execution.'
        ]
    },
    {
        icon: <FaBrain />,
        name: 'CrewAI',
        category: ['Agentic Platforms'],
        color: '#e05c5c',
        visible: true,
        points: [
            'Role-based multi-agent framework where agents collaborate with defined goals and tools.',
            'Used for automated research pipelines, content generation, and data analysis workflows.',
            'Cuts multi-step research and reporting tasks from days to under an hour.'
        ]
    },

    // ── DevOps & QA ─────────────────────────────────────────────────
    {
        icon: <FaMicroscope />,
        name: 'CodeRabbit',
        category: ['DevOps & QA'],
        color: '#f97316',
        visible: true,
        points: [
            'AI-powered pull request reviewer that provides contextual line-by-line feedback.',
            'Detects logic errors, security issues, and style violations automatically on every PR.',
            'Reduces human code review time by 50% and catches bugs before they reach production.'
        ]
    },
    {
        icon: <SiGithubactions />,
        name: 'GitHub Actions AI',
        category: ['DevOps & QA'],
        color: '#2088ff',
        visible: false,
        points: [
            'AI-assisted CI/CD pipeline generation and optimization for automated deployments.',
            'Automatically suggests workflow fixes and parallelization improvements.',
            'Brings CI/CD setup time from days to hours for new projects.'
        ]
    },
    {
        icon: <FaBug />,
        name: 'Kusho',
        category: ['DevOps & QA'],
        color: '#9333ea',
        visible: true,
        points: [
            'AI agent that autonomously generates comprehensive API test suites from OpenAPI specs.',
            'Covers edge cases and failure scenarios that manual testers routinely miss.',
            'Reduces QA cycle length by 70% with zero-effort test case generation.'
        ]
    },
    {
        icon: <FaShieldAlt />,
        name: 'AWS DevOps Agent',
        category: ['DevOps & QA'],
        color: '#ff9900',
        visible: true,
        points: [
            'Amazon Q Developer assists with IaC generation, CloudFormation, and CDK templates.',
            'Provides AI-guided root cause analysis for production incidents and CloudWatch anomalies.',
            'Cuts infrastructure provisioning time by 60% and MTTR for incidents by 40%.'
        ]
    },

    // ── Design & Prototyping (new) ───────────────────────────────
    {
        icon: <SiReplit />,
        name: 'Replit Agent',
        category: ['Design & Prototyping', 'AI IDEs & Copilots'],
        color: '#f26207',
        visible: true,
        points: [
            'Cloud IDE where the AI agent plans architecture, writes code, installs deps, and deploys — all in-browser.',
            'Describe your app in plain English; Agent builds full-stack apps with live preview and automated testing.',
            'Zero local environment setup: ideal for rapid PoC delivery and client demos with instant public URLs.'
        ]
    },
    {
        icon: <SiStackblitz />,
        name: 'Bolt.new',
        category: ['Design & Prototyping'],
        color: '#1389fd',
        visible: true,
        points: [
            'Browser-based prompt-to-full-stack builder using WebContainers — no server or local install needed.',
            'AI controls the filesystem, package manager, terminal, and browser console for complete app lifecycle management.',
            'Compresses full-stack PoC delivery from days to under an hour with built-in hosting and database support.'
        ]
    },
    {
        icon: <FaPalette />,
        name: 'Google Stitch',
        category: ['Design & Prototyping'],
        color: '#4285f4',
        visible: true,
        points: [
            "Google's Gemini-powered AI tool that generates mobile and web UIs from natural language descriptions.",
            'Rapidly iterates on interface concepts — from prompt to polished screen without writing CSS.',
            'Bridges the gap between designer intent and developer output, accelerating early-stage design sprints.'
        ]
    },
    {
        icon: <SiVercel />,
        name: 'v0 by Vercel',
        category: ['Design & Prototyping'],
        color: '#000000',
        visible: true,
        points: [
            'Generates production-ready React + Tailwind UI components from plain text prompts.',
            'Integrates with Git workflows and supports one-click Vercel deployment for instant live previews.',
            'Compresses UI prototyping from days to minutes — used heavily for client demos and design sprints.'
        ]
    },

    // ── Planning & Requirements (new) ────────────────────────────
    {
        icon: <FaSearch />,
        name: 'Perplexity AI',
        category: ['Planning & Requirements', 'Generative AI'],
        color: '#20808d',
        visible: true,
        points: [
            'AI-powered research engine that surfaces cited, real-time web sources for feasibility and market analysis.',
            'Used for competitive intelligence, technical due diligence, and synthesising large research corpora.',
            'Cuts research phase duration by up to 60% with source-backed, context-rich answers.'
        ]
    },

    // ── AI IDEs & Copilots (new) ─────────────────────────────────
    {
        icon: <FaTerminal />,
        name: 'Cline',
        category: ['AI IDEs & Copilots'],
        color: '#a97bff',
        visible: true,
        points: [
            'Open-source VS Code AI agent (BYOM) — pair it with Ollama/Llama for fully on-premise coding assistance.',
            'Autonomously reads, writes, and executes multi-file changes from plain English instructions.',
            'Privacy-first alternative to cloud copilots — ideal for regulated industries where code must stay on-prem.'
        ]
    },

    // ── Agentic Platforms (new) ──────────────────────────────────
    {
        icon: <FaDatabase />,
        name: 'LlamaIndex',
        category: ['Agentic Platforms'],
        color: '#6b3fa0',
        visible: true,
        points: [
            'Industry-standard data framework for building RAG pipelines and LLM-powered agents grounded in enterprise data.',
            'Connects LLMs to internal databases, PDFs, APIs, and knowledge bases with structured query routing.',
            'Dramatically reduces hallucinations by grounding AI responses in verified proprietary data sources.'
        ]
    },
    {
        icon: <MdAutoFixHigh />,
        name: 'Dify.ai',
        category: ['Agentic Platforms'],
        color: '#1d4ed8',
        visible: true,
        points: [
            'Open-source visual platform with drag-and-drop workflow studio, Prompt IDE, and LLMOps monitoring.',
            'Orchestrates custom AI agents and pipelines — non-technical stakeholders can build and deploy without code.',
            'Supports any LLM backend (OpenAI, Claude, Ollama) with built-in observability and version control.'
        ]
    },
];

const benefits = [
    {
        icon: <MdSpeed />,
        title: 'Faster Time-to-Market',
        description: 'AI tools across planning, coding, review and QA compress the SDLC - shipping features in days instead of weeks.',
        metric: '3x',
        metricLabel: 'Faster Delivery'
    },
    {
        icon: <FaChartLine />,
        title: 'Higher Code Quality',
        description: 'Automated reviewing, testing and security scanning catch issues before they reach production, reducing bug rates significantly.',
        metric: '60%',
        metricLabel: 'Fewer Production Bugs'
    },
    {
        icon: <FaGlobe />,
        title: 'Lower Development Cost',
        description: 'AI automation replaces hours of manual effort at every stage - delivering enterprise-grade results at startup economics.',
        metric: '50%',
        metricLabel: 'Cost Reduction'
    }
];

const AiTechStack = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All');
    const [expandedCards, setExpandedCards] = useState(new Set());

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setExpandedCards(new Set()); // collapse all on filter change
    };

    const toggleCard = (key) => {
        setExpandedCards(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    const filteredTools = (activeCategory === 'All'
        ? tools
        : tools.filter(t => t.category.some(c => c === activeCategory))
    ).filter(t => t.visible !== false);

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>

                {/* ── Hero ──────────────────────────────────────────── */}
                <section className={styles.hero}>
                    <div className={styles.heroGlow} />
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <MdAutoAwesome className={styles.heroBadgeIcon} />
                            <span>AI-FIRST DEVELOPMENT</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Our AI-Powered Tech Stack
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We embed cutting-edge AI tools at every stage of the software development lifecycle -
                            from planning and design through coding, review, testing, and deployment.
                            This is how we deliver 3× faster without sacrificing quality.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>20+</span>
                                <span className={styles.heroStatLabel}>AI Tools Integrated</span>
                            </div>
                            <div className={styles.heroStatDivider} />
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>60%</span>
                                <span className={styles.heroStatLabel}>Dev Time Saved</span>
                            </div>
                            <div className={styles.heroStatDivider} />
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>5</span>
                                <span className={styles.heroStatLabel}>SDLC Stages Covered</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Category Filters ──────────────────────────────── */}
                <section className={styles.filterSection}>
                    <div className={styles.filterTabs}>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ''}`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* ── Tool Cards ────────────────────────────────────── */}
                <section className={styles.toolsSection}>
                    <div className={styles.toolsGrid}>
                        {filteredTools.map((tool, index) => (
                            <div
                                key={index}
                                className={styles.toolCard}
                                style={{ '--tool-color': tool.color }}
                            >
                                <div className={styles.toolCardTop}>
                                    <div className={styles.toolIconWrap} style={{ color: tool.color }}>
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <h3 className={styles.toolName}>{tool.name}</h3>
                                        <div className={styles.toolBadges}>
                                            {tool.category.map((cat, ci) => (
                                                <span key={ci} className={styles.toolBadge}>{cat}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <ul className={styles.toolPoints}>
                                    {(expandedCards.has(tool.name)
                                        ? tool.points
                                        : tool.points.slice(0, 1)
                                    ).map((pt, i) => (
                                        <li key={i} className={styles.toolPoint}>
                                            <FaCheckCircle className={styles.pointIcon} />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                                {tool.points.length > 1 && (
                                    <button
                                        className={styles.expandBtn}
                                        onClick={() => toggleCard(tool.name)}
                                    >
                                        {expandedCards.has(tool.name)
                                            ? '▲ Show less'
                                            : `▼ Show more`}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Benefits ──────────────────────────────────────── */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaBolt className={styles.titleIcon} />
                            Why Our AI Stack Matters
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Measurable outcomes from embedding AI across every phase of development
                        </p>
                    </div>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((b, i) => (
                            <div key={i} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>{b.icon}</div>
                                <h3>{b.title}</h3>
                                <p>{b.description}</p>
                                <div className={styles.benefitMetric}>
                                    <span className={styles.metricValue}>{b.metric}</span>
                                    <span className={styles.metricLabel}>{b.metricLabel}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── SDLC Coverage ─────────────────────────────────── */}
                <section className={styles.sdlcSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCogs className={styles.titleIcon} />
                            AI Across Every SDLC Stage
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            No stage left behind — AI accelerates the entire delivery pipeline
                        </p>
                    </div>
                    <div className={styles.sdlcTimeline}>
                        {[
                            {
                                stage: '01', color: '#7c3aed',
                                label: 'Planning & Requirements',
                                useCase: 'User story generation, PRD writing, meeting summaries, and market research.',
                                tools: ['Notion AI', 'Fireflies.ai', 'NotebookLM', 'ChatGPT', 'Gemini', 'Gamma', 'Napkin AI'],
                                icon: <FaClock />
                            },
                            {
                                stage: '02', color: '#e14dff',
                                label: 'Design & Prototyping',
                                useCase: 'Converting briefs to wireframes, generating UI components, and architecture diagrams.',
                                tools: ['Lovable', 'Napkin AI', 'Eraser.io', 'Gemini', 'Claude', 'Antigravity'],
                                icon: <FaCode />
                            },
                            {
                                stage: '03-a', color: '#b9ed5e',
                                label: 'Development',
                                useCase: 'Real-time code completion, multi-file refactoring, and agentic app building.',
                                tools: ['Antigravity', 'Cursor', 'Windsurf', 'GitHub Copilot', 'Claude Code', 'ChatGPT'],
                                icon: <FaCogs />
                            },
                            {
                                stage: '03-b', color: '#10a37f',
                                label: 'Agentic Workflows',
                                useCase: 'Multi-step orchestration, autonomous task execution, and RAG-powered AI agents.',
                                tools: ['LangChain', 'CrewAI', 'Llama', 'Antigravity'],
                                icon: <FaRocket />
                            },
                            {
                                stage: '04', color: '#f97316',
                                label: 'Code Review & Quality',
                                useCase: 'Automated PR summaries, security vulnerability scanning, and logic checks.',
                                tools: ['CodeRabbit', 'Antigravity', 'Cursor', 'Windsurf', 'GitHub Copilot'],
                                icon: <FaCheckCircle />
                            },
                            {
                                stage: '05', color: '#9333ea',
                                label: 'Testing & QA',
                                useCase: 'Autonomous test case generation, self-healing scripts, and visual regression.',
                                tools: ['Kusho', 'Antigravity', 'ChatGPT', 'Claude'],
                                icon: <FaBug />
                            },
                            {
                                stage: '06', color: '#ff9900',
                                label: 'DevOps & Deployment',
                                useCase: 'IaC generation, log analysis, CI/CD automation, and predictive anomaly detection.',
                                tools: ['AWS DevOps Agent', 'Antigravity', 'Claude', 'GitHub Actions AI'],
                                icon: <FaTools />
                            }
                        ].map((item, i, arr) => (
                            <div key={i} className={styles.sdlcRow} style={{ '--sdlc-color': item.color }}>
                                <div className={styles.sdlcLeft}>
                                    <div className={styles.sdlcIconBox} style={{ background: item.color }}>
                                        {item.icon}
                                    </div>
                                    {i < arr.length - 1 && <div className={styles.sdlcConnector} />}
                                </div>
                                <div className={styles.sdlcContent}>
                                    <div className={styles.sdlcStageNum} style={{ color: item.color }}>STAGE {item.stage}</div>
                                    <h3 className={styles.sdlcLabel}>{item.label}</h3>
                                    <p className={styles.sdlcUseCase}>{item.useCase}</p>
                                    <div className={styles.sdlcToolPills}>
                                        {item.tools.map((t, ti) => (
                                            <span key={ti} className={styles.sdlcPill} style={{ borderColor: item.color, color: item.color }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────── */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <MdAutoAwesome className={styles.ctaIconTop} />
                        <h2 className={styles.ctaTitle}>Ready to Build with AI?</h2>
                        <p className={styles.ctaText}>
                            Let's discuss how our AI-powered stack can accelerate your next project -
                            whether it's a web app, agentic AI platform, or enterprise system.
                        </p>
                        <button
                            className={styles.ctaButton}
                            onClick={() => navigate('/contact')}
                        >
                            Start a Conversation <FaArrowRight />
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default AiTechStack;
