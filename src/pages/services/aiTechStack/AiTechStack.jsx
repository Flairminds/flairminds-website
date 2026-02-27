import React, { useState } from 'react';
import styles from './AiTechStack.module.css';
import {
    FaRocket, FaCheckCircle, FaBolt, FaChartLine,
    FaArrowRight, FaClock, FaCode, FaCogs,
    FaShieldAlt, FaGlobe, FaBug, FaTools,
    FaMicroscope, FaBrain, FaRobot
} from 'react-icons/fa';
import {
    SiGithubcopilot, SiAnthropic, SiMeta,
    SiNodedotjs, SiPython, SiOpenai, SiGooglegemini,
    SiLangchain, SiGithubactions
} from 'react-icons/si';
import { MdAutoAwesome, MdSpeed, MdSmartToy } from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ['All', 'AI IDEs & Copilots', 'Generative AI', 'Agentic Platforms', 'DevOps & QA'];

const tools = [
    // ── AI IDEs & Copilots ──────────────────────────────────────────
    {
        icon: <MdAutoAwesome />,
        name: 'Antigravity',
        category: 'AI IDEs & Copilots',
        color: '#b9ed5e',
        points: [
            'Agentic AI coding assistant that plans, writes, and verifies multi-file changes autonomously.',
            'Understands full project context — eliminates manual back-and-forth debugging sessions.',
            'Reduces feature development time by up to 70% through end-to-end automated code generation.'
        ]
    },
    {
        icon: <SiGithubcopilot />,
        name: 'GitHub Copilot',
        category: 'AI IDEs & Copilots',
        color: '#2dba4e',
        points: [
            'Real-time inline code suggestions trained on billions of lines of public code.',
            'Autocompletes functions, tests, and documentation with high contextual accuracy.',
            'Saves developers 30–55% of time on repetitive boilerplate and CRUD code.'
        ]
    },
    {
        icon: <VscCode />,
        name: 'Cursor',
        category: 'AI IDEs & Copilots',
        color: '#6c73ff',
        points: [
            'AI-native IDE with chat, edit, and multi-file refactoring built directly into the editor.',
            'Supports natural language commands to restructure entire codebases with one prompt.',
            'Cuts complex refactoring and bug-fix cycles from hours to minutes.'
        ]
    },
    {
        icon: <SiAnthropic />,
        name: 'Claude (IDE Mode)',
        category: 'AI IDEs & Copilots',
        color: '#cc785c',
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
        category: 'Generative AI',
        color: '#10a37f',
        points: [
            'Used for ideation, PRD drafting, user story generation and technical writing.',
            'o1 and GPT-4o models handle complex reasoning tasks across planning and architecture.',
            'Reduces documentation effort by 60% and accelerates requirements gathering.'
        ]
    },
    {
        icon: <SiGooglegemini />,
        name: 'Gemini',
        category: 'Generative AI',
        color: '#4285f4',
        points: [
            'Deep Research mode used for competitive analysis, market research and technical feasibility.',
            'Integrated into design workflows for converting briefs into UI wireframe suggestions.',
            'Cuts research and discovery phase duration by up to 50%.'
        ]
    },
    {
        icon: <SiAnthropic />,
        name: 'Claude',
        category: 'Generative AI',
        color: '#cc785c',
        points: [
            'Anthropic\'s safety-first LLM used for nuanced writing, summarisation and Q&A workflows.',
            'Preferred for long-document analysis: contracts, reports, and dense technical specs.',
            'Reduces manual review workload by 65% on document-heavy projects.'
        ]
    },
    {
        icon: <SiMeta />,
        name: 'Llama',
        category: 'Generative AI',
        color: '#0668e1',
        points: [
            'Open-source LLM from Meta, deployed on-premise for privacy-sensitive workloads.',
            'Fine-tuned for domain-specific tasks: custom knowledge bases and internal AI assistants.',
            'Eliminates API cost for high-volume inference — reduces AI infrastructure spend by 80%.'
        ]
    },

    // ── Agentic Platforms ───────────────────────────────────────────
    {
        icon: <MdSmartToy />,
        name: 'Antigravity Agents',
        category: 'Agentic Platforms',
        color: '#b9ed5e',
        points: [
            'Multi-step agentic workflows that plan, execute, and verify tasks across the entire SDLC.',
            'Orchestrates tool use (browser, terminal, file system) to complete complex engineering tasks end-to-end.',
            'Enables autonomous sprint delivery — reducing human touchpoints by up to 60%.'
        ]
    },
    {
        icon: <SiLangchain />,
        name: 'LangChain',
        category: 'Agentic Platforms',
        color: '#1c3c3c',
        points: [
            'Framework for building LLM-powered chains, RAG pipelines and tool-using agents.',
            'Used to connect AI models with internal databases, APIs, and document stores.',
            'Reduces time-to-build for AI-powered features from weeks to days.'
        ]
    },
    {
        icon: <FaRobot />,
        name: 'AutoGen',
        category: 'Agentic Platforms',
        color: '#7b2fc6',
        points: [
            'Microsoft\'s multi-agent conversation framework for orchestrating teams of AI agents.',
            'Enables specialist agents (coder, tester, reviewer) to collaborate on complex tasks.',
            'Accelerates agentic feature development by 3x through parallel agent execution.'
        ]
    },
    {
        icon: <FaBrain />,
        name: 'CrewAI',
        category: 'Agentic Platforms',
        color: '#e05c5c',
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
        category: 'DevOps & QA',
        color: '#f97316',
        points: [
            'AI-powered pull request reviewer that provides contextual line-by-line feedback.',
            'Detects logic errors, security issues, and style violations automatically on every PR.',
            'Reduces human code review time by 50% and catches bugs before they reach production.'
        ]
    },
    {
        icon: <SiGithubactions />,
        name: 'GitHub Actions AI',
        category: 'DevOps & QA',
        color: '#2088ff',
        points: [
            'AI-assisted CI/CD pipeline generation and optimization for automated deployments.',
            'Automatically suggests workflow fixes and parallelization improvements.',
            'Brings CI/CD setup time from days to hours for new projects.'
        ]
    },
    {
        icon: <FaBug />,
        name: 'Kusho',
        category: 'DevOps & QA',
        color: '#9333ea',
        points: [
            'AI agent that autonomously generates comprehensive API test suites from OpenAPI specs.',
            'Covers edge cases and failure scenarios that manual testers routinely miss.',
            'Reduces QA cycle length by 70% with zero-effort test case generation.'
        ]
    },
    {
        icon: <FaShieldAlt />,
        name: 'AWS DevOps Agent',
        category: 'DevOps & QA',
        color: '#ff9900',
        points: [
            'Amazon Q Developer assists with IaC generation, CloudFormation, and CDK templates.',
            'Provides AI-guided root cause analysis for production incidents and CloudWatch anomalies.',
            'Cuts infrastructure provisioning time by 60% and MTTR for incidents by 40%.'
        ]
    },
];

const benefits = [
    {
        icon: <MdSpeed />,
        title: 'Faster Time-to-Market',
        description: 'AI tools across planning, coding, review and QA compress the SDLC — shipping features in days instead of weeks.',
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
        description: 'AI automation replaces hours of manual effort at every stage — delivering enterprise-grade results at startup economics.',
        metric: '50%',
        metricLabel: 'Cost Reduction'
    }
];

const AiTechStack = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredTools = activeCategory === 'All'
        ? tools
        : tools.filter(t => t.category === activeCategory);

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
                            We embed cutting-edge AI tools at every stage of the software development lifecycle —
                            from planning and design through coding, review, testing, and deployment.
                            This is how we deliver 3× faster without sacrificing quality.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>16+</span>
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
                                onClick={() => setActiveCategory(cat)}
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
                                        <span className={styles.toolBadge}>{tool.category}</span>
                                    </div>
                                </div>
                                <ul className={styles.toolPoints}>
                                    {tool.points.map((pt, i) => (
                                        <li key={i} className={styles.toolPoint}>
                                            <FaCheckCircle className={styles.pointIcon} />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
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
                    <div className={styles.sdlcGrid}>
                        {[
                            { stage: '01', label: 'Planning & Discovery', tools: 'ChatGPT · Gemini Deep Research · Notion AI', icon: <FaClock /> },
                            { stage: '02', label: 'Design & Prototyping', tools: 'Antigravity · Gemini · Claude · Lovable', icon: <FaCogs /> },
                            { stage: '03', label: 'Development (Coding)', tools: 'Antigravity · Cursor · GitHub Copilot · Claude', icon: <FaCode /> },
                            { stage: '04', label: 'Code Review', tools: 'CodeRabbit · Antigravity · Cursor', icon: <FaCheckCircle /> },
                            { stage: '05', label: 'Testing & QA', tools: 'Kusho · Antigravity · ChatGPT · Claude', icon: <FaBug /> },
                            { stage: '06', label: 'DevOps & Deployment', tools: 'AWS DevOps Agent · GitHub Actions AI · Antigravity', icon: <FaTools /> },
                        ].map((item, i) => (
                            <div key={i} className={styles.sdlcCard}>
                                <div className={styles.sdlcIcon}>{item.icon}</div>
                                <div className={styles.sdlcStageNum}>{item.stage}</div>
                                <h3 className={styles.sdlcLabel}>{item.label}</h3>
                                <p className={styles.sdlcTools}>{item.tools}</p>
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
                            Let's discuss how our AI-powered stack can accelerate your next project —
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
