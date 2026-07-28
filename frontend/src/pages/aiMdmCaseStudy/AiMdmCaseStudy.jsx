import React from 'react';
import styles from './AiMdmCaseStudy.module.css';
import {
    FaDatabase, FaCheckCircle, FaArrowRight, FaExclamationTriangle,
    FaLightbulb, FaCogs, FaShieldAlt, FaChartLine, FaSearch,
    FaBrain, FaLayerGroup, FaTools, FaFilter, FaUsers,
    FaRocket, FaClipboardCheck, FaCloudUploadAlt, FaEye,
    FaCode, FaBolt
} from 'react-icons/fa';
import { MdAutoAwesome, MdTimeline, MdSpeed, MdDragIndicator } from 'react-icons/md';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiFastapi, SiOracle, SiReact, SiPython, SiOllama } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Seo from '../../components/seo/Seo';

const features = [
    {
        number: '01',
        icon: <FaCloudUploadAlt />,
        title: 'Dataset Ingestion & Management',
        color: '#0A9396',
        points: [
            'Multi-format upload (CSV & Excel) with client-side parsing via PapaParse for instant preview.',
            'Chunked streaming upload in 500-row batches with Server-Sent Events (SSE) for live progress.',
            'Interactive column mapping, full CRUD operations, and CSV export for previews & duplicate rows.',
        ]
    },
    {
        number: '02',
        icon: <FaSearch />,
        title: 'Data Profiling & Exploration',
        color: '#EE9B00',
        points: [
            'Automatic column-level statistical profiling: null count, unique count, type detection, and duplicate flags.',
            'Visual quality bars showing completeness vs. uniqueness per column with per-column warning indicators.',
            'Dynamic paginated tabular preview using Oracle JSON_VALUE for efficient navigation of large datasets.',
        ]
    },
    {
        number: '03',
        icon: <FaBrain />,
        title: 'AI Recommendations & Data Quality',
        color: '#005ba1',
        points: [
            'Fuzzy duplicate detection (RapidFuzz) + TF-IDF cosine similarity clustering for semantic deduplication.',
            'Format inconsistency detection, unit standardization (lbs→kg), and canonical golden-value suggestion.',
            'Cross-column business rule validation with cluster review panel and bulk apply/export for offline review.',
        ]
    },
    {
        number: '04',
        icon: <FaTools />,
        title: 'Data Cleansing Engine',
        color: '#9333ea',
        points: [
            'Configurable rule-based cleansing with AI-assisted deduplication using survivorship strategies (manual, most-frequent, AI-driven).',
            'Missing value imputation (mode / manual / AI-driven), whitespace normalization, and special-character fixing.',
            'Human-in-the-loop review queue: approve, reject, skip, or auto-resolve — with full session history & snapshot downloads.',
        ]
    },
    {
        number: '05',
        icon: <FaLightbulb />,
        title: 'Data Enrichment (GPT + RAG)',
        color: '#10a37f',
        points: [
            'OpenAI GPT extracts missing field values from source descriptions with RAG-based example retrieval for context.',
            'Local pattern-matching fallback when the OpenAI API is unavailable, ensuring zero-downtime enrichment.',
            'Configurable source-to-target mappings, valid-value enforcement, and real-time SSE progress during batch runs.',
        ]
    },
    {
        number: '06',
        icon: <MdDragIndicator />,
        title: 'Visual Dataflow Builder',
        color: '#f97316',
        points: [
            'Drag-and-drop pipeline builder (ReactFlow) with nodes: Dataset, Filter, Join, Aggregate, Transform, Split, AI Normalize, Output.',
            'SQL-based execution engine that compiles all transformations to Oracle SQL via temp tables with topological sorting.',
            'Preview mode for flow validation, execution history with row counts & timing, and result-dataset creation from output.',
        ]
    },
    {
        number: '07',
        icon: <FaChartLine />,
        title: 'Master Data Insights',
        color: '#0668e1',
        points: [
            'Consolidated cross-dataset quality overview with composite quality scoring across multiple dimensions.',
            'Drill-down insight detail pages by type with granular analysis for targeted data governance.',
            'Role-based access control (Admin, Editor, Viewer) with secure JWT authentication and Oracle DB backend.',
        ]
    },
];

const objectives = [
    { icon: <FaDatabase />, text: 'Centralize data management - single platform for ingest, profile, cleanse, and analyze from multiple sources.' },
    { icon: <FaBrain />, text: 'Automate data quality - AI detects and resolves duplicates, inconsistencies, and missing values.' },
    { icon: <FaSearch />, text: 'Intelligent data profiling - column-level statistics: completeness, uniqueness, type detection, and quality scoring.' },
    { icon: <FaTools />, text: 'AI-driven cleansing - configurable rules, golden record creation, and human-in-the-loop workflows.' },
    { icon: <FaLightbulb />, text: 'Enrich incomplete data - LLM + RAG extraction from source descriptions fills missing field values.' },
    { icon: <FaLayerGroup />, text: 'Reusable pipelines - visual dataflow builder to create, save, and execute transformations on demand.' },
    { icon: <FaEye />, text: 'Explainable AI - every recommendation is transparent with affected-row previews and manual override.' },
    { icon: <FaShieldAlt />, text: 'Data governance - RBAC (Admin/Editor/Viewer), JWT auth, and enterprise Oracle database backend.' },
];

const techStack = [
    { icon: <SiReact />, label: 'React + ReactFlow' },
    { icon: <SiFastapi />, label: 'FastAPI' },
    { icon: <SiPython />, label: 'Python / RapidFuzz / sklearn' },
    { icon: <SiOracle />, label: 'Oracle DB' },
    { icon: <MdAutoAwesome />, label: 'AI/LLM/RAG' },
    { icon: <FaDatabase />, label: 'SSE Streaming' },
];

const AiMdmCaseStudy = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <Seo
                title="AI MDM Platform Case Study | FlairMinds"
                description="An AI-powered Master Data Management platform that automates data ingestion, profiling, deduplication, enrichment and pipeline building."
                path="/case-study/ai-mdm-platform"
            />
            <main className={styles.mainContent}>

                {/* ── Hero ────────────────────────────────────────── */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <GiArtificialIntelligence className={styles.heroBadgeIcon} />
                            <span>CASE STUDY · AI MDM PLATFORM</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            AI-Powered Master Data<br />Management Platform
                        </h1>
                        <p className={styles.heroSubtitle}>
                            An end-to-end intelligent data platform that ingests, profiles, cleanses, enriches,
                            and governs master data - replacing weeks of manual cleaning with automated AI pipelines.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>80%</span>
                                <span className={styles.heroStatLabel}>Less Manual Cleaning</span>
                            </div>
                            <div className={styles.heroStatDivider} />
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>7</span>
                                <span className={styles.heroStatLabel}>AI Feature Modules</span>
                            </div>
                            <div className={styles.heroStatDivider} />
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>RAG</span>
                                <span className={styles.heroStatLabel}>Powered Enrichment</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Problem Statement ───────────────────────────── */}
                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaExclamationTriangle className={styles.titleIcon} />
                            The Problem
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Organizations struggle with fragmented, low-quality master data spread across dozens of sources
                        </p>
                    </div>
                    <div className={styles.challengeGrid}>
                        {[
                            { icon: <FaDatabase />, title: 'Fragmented Data Sources', desc: 'Master data spread across CSV files and Excel sheets with no centralized system to ingest or manage it.' },
                            { icon: <FaExclamationTriangle />, title: 'Undetected Duplicates', desc: 'Near-duplicate records and inconsistent formats go undetected without automated deduplication tooling.' },
                            { icon: <FaUsers />, title: 'Excessive Manual Effort', desc: 'Teams spend excessive time on manual data cleaning, validation and formatting — reducing productivity.' },
                            { icon: <FaCogs />, title: 'No Enrichment Capability', desc: 'No automated way to fill missing field values or standardize formats across large datasets.' },
                            { icon: <FaCode />, title: 'Hard-to-Maintain Pipelines', desc: 'Data transformation pipelines built through manual coding are complex, fragile, and hard to reuse.' },
                            { icon: <FaChartLine />, title: 'Poor Downstream Quality', desc: 'Downstream analytics and decision-making suffer from unreliable, low-quality master data.' },
                        ].map((item, i) => (
                            <div key={i} className={styles.challengeCard}>
                                <div className={styles.challengeIcon}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Solution Overview ───────────────────────────── */}
                <section className={styles.solutionSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <MdAutoAwesome className={styles.titleIcon} />
                            The Solution
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            A comprehensive AI-powered MDM platform covering every step from raw ingestion to trusted master data
                        </p>
                    </div>
                    <div className={styles.spotlightOverview}>
                        <div className={styles.spotlightProblem}>
                            <h3><FaExclamationTriangle className={styles.spotlightIcon} /> Before: The Data Chaos</h3>
                            <p>
                                Organizations deal with large volumes of master data spread across multiple sources - CSV files,
                                Excel sheets - rife with duplicates, inconsistent formats, and missing values that go undetected.
                                Manual cleaning cycles are expensive, error-prone, and impossible to scale.
                            </p>
                        </div>
                        <div className={styles.spotlightSolution}>
                            <h3><FaLightbulb className={styles.spotlightIcon} /> After: Intelligent Data Mastery</h3>
                            <p>
                                The AI MDM platform automates data ingestion, profiling, deduplication, cleansing, enrichment,
                                and pipeline building. AI engines powered by OpenAI GPT, RAG retrieval, fuzzy matching,
                                and TF-IDF cosine similarity deliver reliable, governed master data for downstream analytics.
                            </p>
                        </div>
                    </div>

                    {/* Impact metrics */}
                    <div className={styles.timelineComparison}>
                        <div className={styles.timelineCard}>
                            <div className={styles.timelineHeader}>
                                <FaCogs className={styles.timelineIcon} />
                                <span className={styles.timelineLabel}>Manual Approach</span>
                            </div>
                            <div className={styles.timelineValue}>Weeks</div>
                            <p>Manual deduplication, rule writing, and pipeline coding per dataset</p>
                        </div>
                        <div className={styles.timelineArrow}><FaArrowRight /></div>
                        <div className={`${styles.timelineCard} ${styles.timelineCardAi}`}>
                            <div className={styles.timelineHeader}>
                                <GiArtificialIntelligence className={styles.timelineIcon} />
                                <span className={styles.timelineLabel}>AI MDM Platform</span>
                            </div>
                            <div className={styles.timelineValue}>Minutes</div>
                            <p>AI-driven profiling, deduplication and enrichment with human review</p>
                        </div>
                        <div className={styles.timelineSavings}>
                            <span className={styles.savingsValue}>80%</span>
                            <span className={styles.savingsLabel}>Effort Saved</span>
                        </div>
                    </div>
                </section>

                {/* ── Feature Modules ─────────────────────────────── */}
                <section className={styles.featuresSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaLayerGroup className={styles.titleIcon} />
                            Platform Feature Modules
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Seven purpose-built AI modules covering every stage of the master data lifecycle
                        </p>
                    </div>
                    <div className={styles.featuresGrid}>
                        {features.map((f, i) => (
                            <div key={i} className={styles.featureCard} style={{ '--feat-color': f.color }}>
                                <div className={styles.featureCardTop}>
                                    <div className={styles.featureIconWrap} style={{ color: f.color }}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <div className={styles.featureNum}>{f.number}</div>
                                        <h3 className={styles.featureTitle}>{f.title}</h3>
                                    </div>
                                </div>
                                <ul className={styles.featurePoints}>
                                    {f.points.map((pt, j) => (
                                        <li key={j} className={styles.featurePoint}>
                                            <FaCheckCircle className={styles.featurePointIcon} style={{ color: f.color }} />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Objectives ──────────────────────────────────── */}
                <section className={styles.objectivesSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaClipboardCheck className={styles.titleIcon} />
                            Project Objectives
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Eight core objectives that drove the design and architecture of the AI MDM platform
                        </p>
                    </div>
                    <div className={styles.objectivesGrid}>
                        {objectives.map((obj, i) => (
                            <div key={i} className={styles.objectiveCard}>
                                <div className={styles.objectiveIcon}>{obj.icon}</div>
                                <p>{obj.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Tech Stack ──────────────────────────────────── */}
                <section className={styles.techSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCode className={styles.titleIcon} />
                            Technology Stack
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Built with proven enterprise-grade technologies and cutting-edge AI APIs
                        </p>
                    </div>
                    <div className={styles.techGrid}>
                        {techStack.map((t, i) => (
                            <div key={i} className={styles.techCard}>
                                <span className={styles.techIcon}>{t.icon}</span>
                                <span className={styles.techLabel}>{t.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Benefits ────────────────────────────────────── */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaRocket className={styles.titleIcon} />
                            Business Value Delivered
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Measurable improvements across data quality, efficiency, and governance
                        </p>
                    </div>
                    <div className={styles.benefitsGrid}>
                        {[
                            { icon: <MdSpeed />, title: 'Drastic Time Savings', desc: 'AI-automated deduplication, profiling, and enrichment eliminates weeks of manual data preparation for each dataset.', metric: '80%', label: 'Reduction in Manual Effort' },
                            { icon: <FaChartLine />, title: 'Higher Data Quality', desc: 'Multi-dimensional quality scoring, fuzzy deduplication, and AI normalization produce reliable master data for analytics.', metric: '5x', label: 'Improvement in Data Accuracy' },
                            { icon: <FaBolt />, title: 'Reusable Pipelines', desc: 'Visual drag-and-drop dataflow builder lets teams create, save, and reuse transformation pipelines without any coding.', metric: '10x', label: 'Faster Pipeline Creation' },
                        ].map((b, i) => (
                            <div key={i} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>{b.icon}</div>
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                                <div className={styles.benefitMetric}>
                                    <span className={styles.metricValue}>{b.metric}</span>
                                    <span className={styles.metricLabel}>{b.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────── */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <GiArtificialIntelligence className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready to Transform Your Data Quality?</h2>
                        <p className={styles.ctaText}>
                            Let us build an AI-powered MDM platform tailored to your data ecosystem -
                            from ingestion to trusted, governed master data in record time.
                        </p>
                        <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
                            Discuss Your Data Challenge <FaArrowRight />
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default AiMdmCaseStudy;
