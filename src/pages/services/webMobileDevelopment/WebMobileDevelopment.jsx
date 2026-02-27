import React, { useState } from 'react';
import styles from './WebMobileDevelopment.module.css';
import {
    FaCode, FaMobile, FaReact, FaRocket, FaCheckCircle,
    FaBolt, FaUsers, FaChartLine, FaArrowRight, FaClock,
    FaLightbulb, FaCogs, FaShieldAlt, FaGlobe, FaJava, FaDatabase,
    FaMagic, FaLayerGroup, FaSearch, FaPalette, FaBug, FaTools, FaMicroscope, FaStripe,
    FaDesktop, FaMobileAlt
} from 'react-icons/fa';
import {
    SiTypescript, SiNodedotjs, SiNextdotjs,
    SiPython, SiFlask, SiStrapi, SiDotnet, SiFastapi,
    SiDjango, SiPostgresql, SiMysql, SiMongodb,
    SiGraphql, SiNeo4J, SiRazorpay, SiRedis,
    SiAnthropic, SiGithubcopilot, SiMeta
} from 'react-icons/si';
import { MdSpeed, MdAutoAwesome } from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

// Asset Imports
import heroImage from '../../../assets/ai_solutions_hero.webp';
import discoveryImg from '../../../assets/tech_collaboration.png';
import pocImg from '../../../assets/ai_neural_network.png';
import designImg from '../../../assets/software_architecture.webp';
import scalingImg from '../../../assets/culture_growth.png';
import qualityImg from '../../../assets/ai_hologram.webp';

const WebMobileDevelopment = () => {
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'mobile'

    const challenges = [
        {
            icon: <FaClock />,
            title: "Traditional Delivery Lags",
            description: "Conventional development cycles often miss critical market windows due to manual overhead."
        },
        {
            icon: <FaCogs />,
            title: "Scalability Constraints",
            description: "Applications failing to handle growth because of rigid architectures and legacy debt."
        },
        {
            icon: <FaUsers />,
            title: "Suboptimal UX/UI",
            description: "Interfaces that lack modern engagement patterns and intuitive user flows."
        },
        {
            icon: <FaShieldAlt />,
            title: "Security & Compliance",
            description: "Difficulty maintaining high security standards in complex, cross-platform environments."
        },
        {
            icon: <FaTools />,
            title: "Maintenance Overhead",
            description: "Rising costs of managing separate codebases and technical debt in long-term projects."
        }
    ];

    const techStack = [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaReact />, name: "React Native" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiGraphql />, name: "GraphQL" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiDotnet />, name: ".NET" },
        { icon: <SiStrapi />, name: "Strapi" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiNeo4J />, name: "Neo4j" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <FaDatabase />, name: "MSSQL" },
        { icon: <FaStripe />, name: "Stripe" },
        { icon: <SiRazorpay />, name: "Razorpay" },
        { icon: <MdAutoAwesome />, name: "Antigravity" },
        { icon: <SiGithubcopilot />, name: "Copilot" },
        { icon: <VscCode />, name: "Cursor" },
        { icon: <SiAnthropic />, name: "Claude" },
        { icon: <FaMicroscope />, name: "CodeRabbit" },
        { icon: <SiMeta />, name: "Llama" },
    ];

    const aiTools = [
        {
            stage: "Planning & Requirements",
            cases: "User story generation, PRD writing, market research",
            tools: ["Napkin", "Notion AI", "ChatGPT", "Gemini Deep Research"],
            icon: <FaSearch />
        },
        {
            stage: "Design & Prototyping",
            cases: "Converting sketches to wireframes, UI components",
            tools: ["Antigravity", "Gemini", "Claude", "Lovable"],
            icon: <FaPalette />
        },
        {
            stage: "Development (Coding)",
            cases: "Real-time code completion, multi-file refactoring",
            tools: ["Antigravity", "Cursor", "Copilot", "Windsurf"],
            icon: <FaCode />
        },
        {
            stage: "Code Review & Quality",
            cases: "Automated PR summaries, logic checks",
            tools: ["Antigravity", "Cursor", "CodeRabbit"],
            icon: <FaCheckCircle />
        },
        {
            stage: "Testing & QA",
            cases: "Autonomous test case generation, visual regression",
            tools: ["Antigravity", "ChatGPT", "Claude", "Kusho"],
            icon: <FaBug />
        },
        {
            stage: "DevOps & Deployment",
            cases: "IaC generation, CI/CD automation",
            tools: ["Antigravity", "Claude", "AWS DevOps Agent"],
            icon: <FaTools />
        }
    ];

    const deliveryJourney = [
        {
            phase: "01. Discovery & Strategy",
            description: "Deep dive into business goals, user needs, and technical feasibility.",
            icon: <FaSearch />,
            image: discoveryImg
        },
        {
            phase: "02. Rapid POC / MVP",
            description: "Building functional prototypes in days using AI acceleration to validate core ideas.",
            icon: <MdSpeed />,
            image: pocImg
        },
        {
            phase: "03. Design & Architecture",
            description: "Scalable system design and intuitive UI/UX crafted for global standards.",
            icon: <FaLayerGroup />,
            image: designImg
        },
        {
            phase: "04. Phase-wise Scaling",
            description: "Iterative development adding complex features in manageable, high-quality sprints.",
            icon: <FaChartLine />,
            image: scalingImg
        },
        {
            phase: "05. Quality & Deployment",
            description: "Rigorous automated testing and seamless CI/CD for reliable global delivery.",
            icon: <FaCheckCircle />,
            image: qualityImg
        }
    ];

    const benefits = [
        {
            icon: <FaRocket />,
            title: "AI-Accelerated Delivery",
            description: "Leveraging agentic AI tools across the SDLC to deliver projects 3x faster than traditional methods.",
            metric: "60%",
            metricLabel: "Faster Time-to-Market"
        },
        {
            icon: <FaChartLine />,
            title: "Intelligent Scalability",
            description: "Applications built with AI-optimized architectures to handle massive growth with minimal refactoring.",
            metric: "10x",
            metricLabel: "Traffic Capacity"
        },
        {
            icon: <FaGlobe />,
            title: "Cost-Effective Innovation",
            description: "AI automation reduces manual effort, allowing us to deliver high-end innovation at significant cost savings.",
            metric: "50%",
            metricLabel: "Development Savings"
        }
    ];

    const offerings = [
        {
            title: "AI-Augmented Progressive Web Apps",
            description: "Modern web applications with AI-driven personalization, offline capabilities, and instant app-like experiences."
        },
        {
            title: "Intelligent Native Mobile Apps",
            description: "High-performance iOS and Android applications built with Swift, Kotlin, or React Native, optimized with AI for better UX."
        },
        {
            title: "Enterprise AI Web Platforms",
            description: "Scalable, secure web applications for complex business processes, enhanced with agentic AI for automation."
        },
        {
            title: "Next-Gen E-Commerce",
            description: "Feature-rich online stores with AI-powered search, recommendation engines, and seamless payment integrations."
        },
        {
            title: "AI-Native SaaS Products",
            description: "Multi-tenant cloud applications with built-in AI analytics, automated subscription management, and smart insights."
        },
        {
            title: "Smart API Development",
            description: "RESTful and GraphQL APIs designed with AI assistance for better performance, documentation, and versioning."
        }
    ];

    return (
        <div className={`${styles.container} ${viewMode === 'mobile' ? styles.mobileViewMode : ''}`}>
            {/* Floating Device Toggle */}
            <div className={styles.deviceToggle}>
                <button
                    className={`${styles.deviceBtn} ${viewMode === 'desktop' ? styles.deviceBtnActive : ''}`}
                    onClick={() => setViewMode('desktop')}
                    title="Desktop View"
                >
                    <FaDesktop />
                    <span>Web View</span>
                </button>
                <button
                    className={`${styles.deviceBtn} ${viewMode === 'mobile' ? styles.deviceBtnActive : ''}`}
                    onClick={() => setViewMode('mobile')}
                    title="Mobile View"
                >
                    <FaMobileAlt />
                    <span>Mobile View</span>
                </button>
            </div>

            {/* Mobile Frame Overlay (visible only in mobile mode) */}
            {viewMode === 'mobile' && (
                <div className={styles.mobileFrameOverlay}>
                    <div className={styles.mobileDeviceFrame}>
                        <div className={styles.mobileNotch}></div>
                    </div>
                </div>
            )}

            <main className={styles.mainContent}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <MdAutoAwesome className={styles.heroBadgeIcon} />
                            <span>AI-DRIVEN EXCELLENCE</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            AI-Powered Web & Mobile Development at Speed
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We combine human expertise with the power of agentic AI to deliver high-quality,
                            scalable applications in record time. From rapid POCs to enterprise-grade platforms,
                            we redefine digital delivery with AI-accelerated precision.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>50+</span>
                                <span className={styles.heroStatLabel}>Apps Delivered</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>99.9%</span>
                                <span className={styles.heroStatLabel}>Uptime</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>5M+</span>
                                <span className={styles.heroStatLabel}>Active Users</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenge Section */}
                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaLightbulb className={styles.titleIcon} />
                            Common Development Challenges
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Organizations struggle with traditional development approaches
                        </p>
                    </div>
                    <div className={styles.challengeGrid}>
                        {challenges.map((challenge, index) => (
                            <div key={index} className={styles.challengeCard}>
                                <div className={styles.challengeIcon}>{challenge.icon}</div>
                                <h3>{challenge.title}</h3>
                                <p>{challenge.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Approach Section */}
                <section className={styles.approachSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaBolt className={styles.titleIcon} />
                            Our Development Approach
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Modern practices that deliver exceptional results
                        </p>
                    </div>
                    <div className={styles.approachContent}>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>01</div>
                            <h3>Agile Methodology</h3>
                            <p>Iterative development with continuous feedback, ensuring alignment with your vision and rapid delivery of working software</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>02</div>
                            <h3>User-Centric Design</h3>
                            <p>Intuitive interfaces built on user research, wireframing, and iterative design validation</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>03</div>
                            <h3>DevOps Integration</h3>
                            <p>Automated CI/CD pipelines for seamless deployments, zero-downtime updates, and reliable releases</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>04</div>
                            <h3>Quality Assurance</h3>
                            <p>Comprehensive testing strategies including unit, integration, and end-to-end automated tests</p>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className={styles.techStackSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCogs className={styles.titleIcon} />
                            Our Tech Stack
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Cutting-edge technologies for modern applications
                        </p>
                    </div>
                    <div className={styles.techStackGrid}>
                        {techStack.map((tech, index) => (
                            <div key={index} className={styles.techStackCard}>
                                <div className={styles.techIcon}>{tech.icon}</div>
                                <span className={styles.techName}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* AI-Accelerated SDLC Section */}
                <section className={styles.aiToolsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <MdAutoAwesome className={styles.titleIcon} />
                            AI-Accelerated SDLC
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            We leverage industry-leading AI tools to speed up development while ensuring top-tier quality
                        </p>
                    </div>
                    <div className={styles.aiToolsGrid}>
                        {aiTools.map((item, index) => (
                            <div key={index} className={styles.aiToolCard}>
                                <div className={styles.aiToolHeader}>
                                    <div className={styles.aiToolIcon}>{item.icon}</div>
                                    <h3>{item.stage}</h3>
                                </div>
                                <p className={styles.aiToolCases}>{item.cases}</p>
                                <div className={styles.aiToolTags}>
                                    {item.tools.map((tool, tIdx) => (
                                        <span key={tIdx} className={styles.aiToolTag}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Delivery Journey Section */}
                <section className={styles.journeySection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaMagic className={styles.titleIcon} />
                            Our Rapid Delivery Journey
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            From idea to global scale with phase-wise excellence and AI speed
                        </p>
                    </div>
                    <div className={styles.journeyGrid}>
                        {deliveryJourney.map((step, index) => (
                            <div key={index} className={styles.journeyCard}>
                                <div className={styles.journeyImageWrapper}>
                                    <img src={step.image} alt={step.phase} className={styles.journeyCardImage} />
                                    <div className={styles.journeyIconBadge}>{step.icon}</div>
                                </div>
                                <div className={styles.journeyCardContent}>
                                    <h3>{step.phase}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Offerings Section */}
                <section className={styles.offeringsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCheckCircle className={styles.titleIcon} />
                            What We Offer
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Comprehensive development services tailored to your needs
                        </p>
                    </div>
                    <div className={styles.offeringsGrid}>
                        {offerings.map((offering, index) => (
                            <div key={index} className={styles.offeringCard}>
                                <div className={styles.offeringNumber}>{String(index + 1).padStart(2, '0')}</div>
                                <h3>{offering.title}</h3>
                                <p>{offering.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Portfolio Showcase */}
                <section className={styles.portfolioSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaRocket className={styles.titleIcon} />
                            Success Stories
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Real-world applications we've delivered
                        </p>
                    </div>
                    <div className={styles.portfolioGrid}>
                        <div className={styles.portfolioCard} onClick={() => navigate('/case-study/e_sign_platform')}>
                            <h3>E-Sign Platform</h3>
                            <p>Secure digital signature solution with blockchain verification and multi-party workflows</p>
                            <span className={styles.portfolioLink}>View Case Study <FaArrowRight /></span>
                        </div>
                        <div className={styles.portfolioCard} onClick={() => navigate('/case-study/fable_fintech')}>
                            <h3>Fable Fintech</h3>
                            <p>Modern fintech platform with real-time trading, analytics, and portfolio management</p>
                            <span className={styles.portfolioLink}>View Case Study <FaArrowRight /></span>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaBolt className={styles.titleIcon} />
                            Key Benefits
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Why choose FlairMinds for your development needs
                        </p>
                    </div>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                                <div className={styles.benefitMetric}>
                                    <span className={styles.metricValue}>{benefit.metric}</span>
                                    <span className={styles.metricLabel}>{benefit.metricLabel}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <FaCode className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready to Start Your Next Project?</h2>
                        <p className={styles.ctaText}>
                            Let's build something amazing together. Get in touch to discuss your web or mobile application needs.
                        </p>
                        <button
                            className={styles.ctaButton}
                            onClick={() => navigate('/contact')}
                        >
                            Start Your Project <FaArrowRight />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default WebMobileDevelopment;
