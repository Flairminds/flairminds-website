import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import styles from './AiPocDevelopment.module.css';
import {
    FaRocket, FaBrain, FaCode, FaVial, FaCloud, FaFileAlt,
    FaBolt, FaDollarSign, FaChartLine, FaClock, FaUsers,
    FaCheckCircle, FaLightbulb, FaCogs, FaArrowRight,
    FaExclamationTriangle, FaMagic, FaLayerGroup, FaRedo, FaQuestionCircle,
    FaShieldAlt, FaLock, FaServer, FaUserShield, FaEyeSlash, FaClipboardCheck,
    FaDatabase, FaChartPie, FaReact, FaPython
} from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdSpeed, MdAutoAwesome, MdArchitecture, MdTimeline } from 'react-icons/md';
import { SiPytorch, SiFastapi } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const AiPocDevelopment = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Turnaround Time Comparison Chart
        const turnaroundCtx = document.getElementById('turnaroundChart');
        if (turnaroundCtx) {
            new Chart(turnaroundCtx, {
                type: 'bar',
                data: {
                    labels: ['Traditional Approach', 'AI-Powered Approach'],
                    datasets: [{
                        label: 'Development Time (Weeks)',
                        data: [11, 4.5],
                        backgroundColor: ['#EE9B00', '#0A9396'],
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: { display: false }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }

        // Productivity Gains Chart
        const productivityCtx = document.getElementById('productivityChart');
        if (productivityCtx) {
            new Chart(productivityCtx, {
                type: 'doughnut',
                data: {
                    labels: ['AI-Assisted Work', 'Manual Work'],
                    datasets: [{
                        data: [70, 30],
                        backgroundColor: ['#0A9396', '#E9D8A6'],
                        borderColor: ['#FFFFFF'],
                        borderWidth: 4,
                        hoverOffset: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#4B5563',
                                font: { weight: '600' }
                            }
                        }
                    }
                }
            });
        }

        // SDLC Impact Chart
        const sdlcCtx = document.getElementById('sdlcChart');
        if (sdlcCtx) {
            new Chart(sdlcCtx, {
                type: 'radar',
                data: {
                    labels: ['Requirements', 'Design', 'Development', 'Testing', 'Deployment'],
                    datasets: [
                        {
                            label: 'Traditional',
                            data: [40, 35, 30, 25, 45],
                            backgroundColor: 'rgba(238, 155, 0, 0.2)',
                            borderColor: '#EE9B00',
                            borderWidth: 2,
                            pointBackgroundColor: '#EE9B00'
                        },
                        {
                            label: 'AI-Enhanced',
                            data: [85, 80, 90, 85, 88],
                            backgroundColor: 'rgba(10, 147, 150, 0.2)',
                            borderColor: '#0A9396',
                            borderWidth: 2,
                            pointBackgroundColor: '#0A9396'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                stepSize: 20
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#4B5563',
                                font: { weight: '600' }
                            }
                        }
                    }
                }
            });
        }
    }, []);

    const sdlcPhases = [
        {
            icon: <FaFileAlt />,
            phase: 'Requirements',
            traditional: 'Manual document analysis, lengthy stakeholder meetings',
            aiPowered: 'AI-powered requirement extraction, smart summarization, gap analysis',
            improvement: '60%'
        },
        {
            icon: <MdArchitecture />,
            phase: 'Design',
            traditional: 'Manual wireframing, iterative architecture reviews',
            aiPowered: 'AI-assisted architecture suggestions, rapid prototyping, pattern matching',
            improvement: '40%'
        },
        {
            icon: <FaCode />,
            phase: 'Development',
            traditional: 'Line-by-line manual coding, extensive debugging',
            aiPowered: 'AI code generation, intelligent autocomplete, instant refactoring',
            improvement: '70%'
        },
        {
            icon: <FaVial />,
            phase: 'Testing',
            traditional: 'Manual test case creation, repetitive execution',
            aiPowered: 'AI-generated test cases, automated QA, predictive bug detection',
            improvement: '60%'
        },
        {
            icon: <FaCloud />,
            phase: 'Deployment',
            traditional: 'Manual configurations, error-prone setups',
            aiPowered: 'AI-optimized CI/CD, infrastructure-as-code generation',
            improvement: '50%'
        }
    ];

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <GiArtificialIntelligence className={styles.heroBadgeIcon} />
                            <span>AI-POWERED DELIVERY</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Accelerating PoC Development with AI
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Transform your proof-of-concept delivery from weeks to days.
                            Discover how AI integration across the entire SDLC enables faster time-to-market,
                            higher quality prototypes, and unprecedented developer productivity.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>3x</span>
                                <span className={styles.heroStatLabel}>Faster Delivery</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>70%</span>
                                <span className={styles.heroStatLabel}>Less Manual Work</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>5x</span>
                                <span className={styles.heroStatLabel}>Code Quality</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenge Section */}
                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaExclamationTriangle className={styles.titleIcon} />
                            The Traditional PoC Challenge
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Organizations face critical bottlenecks when developing proof-of-concepts using conventional methods
                        </p>
                    </div>
                    <div className={styles.challengeGrid}>
                        <div className={styles.challengeCard}>
                            <FaClock className={styles.challengeIcon} />
                            <h3>Extended Timelines</h3>
                            <p>Traditional PoCs take 8-12 weeks, risking missed market windows and stakeholder fatigue</p>
                        </div>
                        <div className={styles.challengeCard}>
                            <FaUsers className={styles.challengeIcon} />
                            <h3>Resource Intensive</h3>
                            <p>Requires dedicated senior developers for extended periods, straining team capacity</p>
                        </div>
                        <div className={styles.challengeCard}>
                            <FaCogs className={styles.challengeIcon} />
                            <h3>Repetitive Tasks</h3>
                            <p>Developers spend 60%+ time on boilerplate code, configurations, and documentation</p>
                        </div>
                        <div className={styles.challengeCard}>
                            <FaChartLine className={styles.challengeIcon} />
                            <h3>Quality Variability</h3>
                            <p>Time pressure leads to technical shortcuts, resulting in fragile prototypes</p>
                        </div>
                        <div className={styles.challengeCard}>
                            <FaRedo className={styles.challengeIcon} />
                            <h3>Frequent Rework</h3>
                            <p>Misaligned expectations and unclear requirements lead to costly iterations and scope changes</p>
                        </div>
                        <div className={styles.challengeCard}>
                            <FaQuestionCircle className={styles.challengeIcon} />
                            <h3>Knowledge Silos</h3>
                            <p>Critical domain knowledge trapped with individuals, creating bottlenecks and continuity risks</p>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className={styles.solutionSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <MdAutoAwesome className={styles.titleIcon} />
                            AI-Powered SDLC Transformation
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Comprehensive AI integration across every phase of the software development lifecycle
                        </p>
                    </div>

                    {/* SDLC Flow */}
                    <div className={styles.sdlcFlow}>
                        {sdlcPhases.map((phase, index) => (
                            <React.Fragment key={phase.phase}>
                                <div className={styles.sdlcPhase}>
                                    <div className={styles.sdlcPhaseIcon}>{phase.icon}</div>
                                    <span className={styles.sdlcPhaseLabel}>{phase.phase}</span>
                                    <span className={styles.sdlcImprovement}>↑{phase.improvement}</span>
                                </div>
                                {index < sdlcPhases.length - 1 && (
                                    <div className={styles.sdlcArrow}>→</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Detailed Comparison Table */}
                    <div className={styles.comparisonTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.tableHeaderCell}>SDLC Phase</div>
                            <div className={styles.tableHeaderCell}>Traditional Approach</div>
                            <div className={styles.tableHeaderCell}>AI-Enhanced Approach</div>
                            <div className={styles.tableHeaderCell}>Improvement</div>
                        </div>
                        {sdlcPhases.map((phase) => (
                            <div className={styles.tableRow} key={phase.phase}>
                                <div className={styles.tableCell}>
                                    <span className={styles.phaseIcon}>{phase.icon}</span>
                                    <strong>{phase.phase}</strong>
                                </div>
                                <div className={`${styles.tableCell} ${styles.traditional}`}>
                                    {phase.traditional}
                                </div>
                                <div className={`${styles.tableCell} ${styles.aiPowered}`}>
                                    {phase.aiPowered}
                                </div>
                                <div className={`${styles.tableCell} ${styles.improvement}`}>
                                    <span className={styles.improvementBadge}>{phase.improvement} Faster</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Project Spotlight Section */}
                <section className={styles.spotlightSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <MdTimeline className={styles.titleIcon} />
                            Project Spotlight: AI-Driven Lead Scoring System
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            A real-world example showcasing AI's transformative impact across the entire development lifecycle
                        </p>
                    </div>

                    {/* Project Overview */}
                    <div className={styles.spotlightOverview}>
                        <div className={styles.spotlightProblem}>
                            <h3><FaExclamationTriangle className={styles.spotlightIcon} /> The Challenge</h3>
                            <p>
                                Build an AI-driven customer profiling and lead scoring system that analyzes historical data
                                from converted customers - including profiles, trading activity, and engagement patterns - to generate meaningful scores indicating retention strength, liquidity behavior, trading profitability, and expected conversion time.
                            </p>
                        </div>
                        <div className={styles.spotlightSolution}>
                            <h3><FaLightbulb className={styles.spotlightIcon} /> The Solution</h3>
                            <p>
                                A full-stack ML platform featuring React frontend, FastAPI backend, CatBoost ML models,
                                and PySpark-based ETL pipeline - enabling sales teams to prioritize high-potential leads with clear, explainable scores for smarter, data-driven decision-making.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Comparison */}
                    <div className={styles.timelineComparison}>
                        <div className={styles.timelineCard}>
                            <div className={styles.timelineHeader}>
                                <FaClock className={styles.timelineIcon} />
                                <span className={styles.timelineLabel}>Without AI</span>
                            </div>
                            <div className={styles.timelineValue}>10-12 Weeks</div>
                            <p>Manual research, trial-and-error design, sequential development phases</p>
                        </div>
                        <div className={styles.timelineArrow}>
                            <FaArrowRight />
                        </div>
                        <div className={`${styles.timelineCard} ${styles.timelineCardAi}`}>
                            <div className={styles.timelineHeader}>
                                <GiArtificialIntelligence className={styles.timelineIcon} />
                                <span className={styles.timelineLabel}>With AI</span>
                            </div>
                            <div className={styles.timelineValue}>4-5 Weeks</div>
                            <p>Accelerated design, parallel development, best practices from start</p>
                        </div>
                        <div className={styles.timelineSavings}>
                            <span className={styles.savingsValue}>~60%</span>
                            <span className={styles.savingsLabel}>Time Saved</span>
                        </div>
                    </div>

                    {/* AI Usage Across SDLC */}
                    <div className={styles.sdlcExamples}>
                        <h3 className={styles.sdlcExamplesTitle}>How AI Was Used Across the SDLC</h3>
                        <div className={styles.sdlcExamplesGrid}>
                            <div className={styles.sdlcExample}>
                                <div className={styles.sdlcExampleHeader}>
                                    <MdArchitecture className={styles.sdlcExampleIcon} />
                                    <h4>Planning & Architecture</h4>
                                </div>
                                <ul>
                                    <li>AI designed system architecture: React, FastAPI, ML models, PySpark ETL</li>
                                    <li>Defined lead scoring problem by converting business goals to measurable indicators</li>
                                    <li>Recommended CatBoost for strong categorical feature performance</li>
                                </ul>
                            </div>
                            <div className={styles.sdlcExample}>
                                <div className={styles.sdlcExampleHeader}>
                                    <FaCode className={styles.sdlcExampleIcon} />
                                    <h4>Development</h4>
                                </div>
                                <ul>
                                    <li>Complete FastAPI backend with proper routes & hyperparameter tuning</li>
                                    <li>React UI with Dashboard, Leads, Analytics pages & reusable components</li>
                                    <li>PySpark ETL pipeline for MSSQL extraction to Parquet format</li>
                                </ul>
                            </div>
                            <div className={styles.sdlcExample}>
                                <div className={styles.sdlcExampleHeader}>
                                    <FaVial className={styles.sdlcExampleIcon} />
                                    <h4>Testing & Validation</h4>
                                </div>
                                <ul>
                                    <li>AI-generated unit tests for data pipelines, ML models, and APIs</li>
                                    <li>Model evaluation metrics validation for reliable, explainable results</li>
                                    <li>Early mock data integration for UI visualization before real systems</li>
                                </ul>
                            </div>
                            <div className={styles.sdlcExample}>
                                <div className={styles.sdlcExampleHeader}>
                                    <FaCloud className={styles.sdlcExampleIcon} />
                                    <h4>Deployment</h4>
                                </div>
                                <ul>
                                    <li>AI-assisted CI/CD workflow and Docker Compose configuration</li>
                                    <li>Deployment scripts with best practices</li>
                                    <li>Infrastructure setup with minimal trial-and-error</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Used */}
                    <div className={styles.spotlightTech}>
                        <span><FaReact /> React</span>
                        <span><SiFastapi /> FastAPI</span>
                        <span><FaPython /> PySpark</span>
                        <span><FaDatabase /> MSSQL</span>
                        <span><FaChartPie /> CatBoost ML</span>
                        <span><FaCloud /> Docker</span>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaRocket className={styles.titleIcon} />
                            Business Value Delivered
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Tangible outcomes that drive competitive advantage
                        </p>
                    </div>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>
                                <MdSpeed />
                            </div>
                            <h3>Faster Time-to-Market</h3>
                            <p>Deliver working prototypes in days instead of weeks, enabling rapid stakeholder validation and faster decision-making</p>
                            <div className={styles.benefitMetric}>
                                <span className={styles.metricValue}>60%</span>
                                <span className={styles.metricLabel}>Reduction in Delivery Time</span>
                            </div>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>
                                <FaDollarSign />
                            </div>
                            <h3>Reduced Development Costs</h3>
                            <p>Minimize resource allocation with AI-augmented development, freeing senior developers for strategic work</p>
                            <div className={styles.benefitMetric}>
                                <span className={styles.metricValue}>50%</span>
                                <span className={styles.metricLabel}>Lower PoC Investment</span>
                            </div>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>
                                <FaCheckCircle />
                            </div>
                            <h3>Higher Quality Output</h3>
                            <p>AI-assisted code review, automated testing, and best-practice enforcement ensure production-ready prototypes</p>
                            <div className={styles.benefitMetric}>
                                <span className={styles.metricValue}>90%</span>
                                <span className={styles.metricLabel}>Code Quality Score</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Capabilities Highlight */}
                <section className={styles.capabilitiesSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaBrain className={styles.titleIcon} />
                            AI Capabilities We Leverage
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Cutting-edge AI tools integrated throughout the development workflow
                        </p>
                    </div>
                    <div className={styles.capabilitiesGrid}>
                        <div className={styles.capabilityCard}>
                            <FaMagic className={styles.capabilityIcon} />
                            <h4>Intelligent Code Generation</h4>
                            <p>AI-powered code completion, boilerplate generation, and pattern-based scaffolding</p>
                        </div>
                        <div className={styles.capabilityCard}>
                            <FaLightbulb className={styles.capabilityIcon} />
                            <h4>Smart Requirements Analysis</h4>
                            <p>Automated extraction of requirements from documents with gap identification</p>
                        </div>
                        <div className={styles.capabilityCard}>
                            <FaVial className={styles.capabilityIcon} />
                            <h4>Automated Test Generation</h4>
                            <p>AI-created test cases with edge case coverage and regression prevention</p>
                        </div>
                        <div className={styles.capabilityCard}>
                            <FaFileAlt className={styles.capabilityIcon} />
                            <h4>Auto Documentation</h4>
                            <p>Intelligent documentation generation from code, APIs, and architecture</p>
                        </div>
                        <div className={styles.capabilityCard}>
                            <FaCogs className={styles.capabilityIcon} />
                            <h4>Architecture Assistance</h4>
                            <p>AI-suggested design patterns, dependency management, and tech stack optimization</p>
                        </div>
                        <div className={styles.capabilityCard}>
                            <FaBolt className={styles.capabilityIcon} />
                            <h4>Rapid Prototyping</h4>
                            <p>Quick UI/UX generation from descriptions with responsive design patterns</p>
                        </div>
                    </div>
                </section>

                {/* Data & Security Section */}
                <section className={styles.securitySection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaShieldAlt className={styles.titleIcon} />
                            Data & Information Security
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Enterprise-grade security practices ensuring your intellectual property and sensitive data remain protected
                        </p>
                    </div>

                    {/* Security Approach Cards */}
                    <div className={styles.securityGrid}>
                        <div className={styles.securityCard}>
                            <div className={styles.securityCardHeader}>
                                <FaServer className={styles.securityIcon} />
                                <h3>Enterprise AI Deployment</h3>
                            </div>
                            <p>For sensitive projects, we deploy AI models within your private infrastructure or utilize enterprise-tier AI services with strict data isolation:</p>
                            <ul className={styles.securityList}>
                                <li><FaCheckCircle className={styles.listIcon} /> Private cloud AI instances (Azure OpenAI, AWS Bedrock)</li>
                                <li><FaCheckCircle className={styles.listIcon} /> Self-hosted open-source models (Llama, CodeLlama)</li>
                                <li><FaCheckCircle className={styles.listIcon} /> Enterprise agreements with data retention controls</li>
                                <li><FaCheckCircle className={styles.listIcon} /> SOC 2 / ISO 27001 compliant AI providers</li>
                            </ul>
                        </div>

                        <div className={styles.securityCard}>
                            <div className={styles.securityCardHeader}>
                                <FaEyeSlash className={styles.securityIcon} />
                                <h3>Data Never Exposed</h3>
                            </div>
                            <p>Our AI-assisted development follows strict data handling protocols to ensure sensitive information never leaves your control:</p>
                            <ul className={styles.securityList}>
                                <li><FaCheckCircle className={styles.listIcon} /> Code context only - no client data in prompts</li>
                                <li><FaCheckCircle className={styles.listIcon} /> Synthetic/mock data for development & testing</li>
                                <li><FaCheckCircle className={styles.listIcon} /> Data anonymization before any AI processing</li>
                                <li><FaCheckCircle className={styles.listIcon} /> No training on client code (opt-out enforced)</li>
                            </ul>
                        </div>

                        <div className={styles.securityCard}>
                            <div className={styles.securityCardHeader}>
                                <FaUserShield className={styles.securityIcon} />
                                <h3>Public AI Tool Protocol</h3>
                            </div>
                            <p>When using publicly available AI tools, we follow a rigorous protocol to protect your interests:</p>
                            <ul className={styles.securityList}>
                                <li><FaCheckCircle className={styles.listIcon} /> Pre-approved tool list with security reviews</li>
                                <li><FaCheckCircle className={styles.listIcon} /> Strict guidelines on what can/cannot be shared</li>
                                <li><FaCheckCircle className={styles.listIcon} /> Generic patterns only - no proprietary logic</li>
                                <li><FaCheckCircle className={styles.listIcon} /> Alternative private solutions for sensitive tasks</li>
                            </ul>
                        </div>
                    </div>

                    {/* Security Commitment Banner */}
                    <div className={styles.securityBanner}>
                        <FaLock className={styles.bannerIcon} />
                        <div className={styles.bannerContent}>
                            <h4>Our Security Commitment</h4>
                            <p>
                                We understand that AI adoption raises legitimate data security concerns. Our approach is designed to maximize AI productivity benefits
                                while maintaining the same security standards you expect from traditional development. We establish approved tools, data handling procedures, and audit trails before project kickoff.
                            </p>
                        </div>
                    </div>

                    {/* What We Protect */}
                    <div className={styles.protectionGrid}>
                        <div className={styles.protectionItem}>
                            <FaClipboardCheck className={styles.protectionIcon} />
                            <span>Source Code IP</span>
                        </div>
                        <div className={styles.protectionItem}>
                            <FaClipboardCheck className={styles.protectionIcon} />
                            <span>Business Logic</span>
                        </div>
                        <div className={styles.protectionItem}>
                            <FaClipboardCheck className={styles.protectionIcon} />
                            <span>Client Data</span>
                        </div>
                        <div className={styles.protectionItem}>
                            <FaClipboardCheck className={styles.protectionIcon} />
                            <span>API Keys & Secrets</span>
                        </div>
                        <div className={styles.protectionItem}>
                            <FaClipboardCheck className={styles.protectionIcon} />
                            <span>Architecture Details</span>
                        </div>
                        <div className={styles.protectionItem}>
                            <FaClipboardCheck className={styles.protectionIcon} />
                            <span>Compliance Data</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <GiArtificialIntelligence className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready to Accelerate Your Next PoC?</h2>
                        <p className={styles.ctaText}>
                            Let us demonstrate how AI-powered development can transform your proof-of-concept
                            delivery from months to weeks, with higher quality and lower investment.
                        </p>
                        <button
                            className={styles.ctaButton}
                            onClick={() => navigate('/contact')}
                        >
                            Start Your AI-Powered PoC Journey <FaArrowRight />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AiPocDevelopment;
