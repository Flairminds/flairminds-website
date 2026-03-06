import React from 'react';
import styles from './QualityEngineering.module.css';
import {
    FaCheckCircle, FaRocket, FaBolt, FaChartLine, FaArrowRight,
    FaVial, FaShieldAlt, FaCogs, FaBug, FaRobot, FaTheaterMasks
} from 'react-icons/fa';
import { SiSelenium, SiCypress, SiJest } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const QualityEngineering = () => {
    const navigate = useNavigate();

    const challenges = [
        {
            icon: <FaBug />,
            title: "Late Bug Discovery",
            description: "Finding critical defects late in the development cycle increases costs"
        },
        {
            icon: <FaCogs />,
            title: "Manual Testing Bottlenecks",
            description: "Time-consuming manual testing slows down releases"
        },
        {
            icon: <FaShieldAlt />,
            title: "Inconsistent Quality",
            description: "Variable quality across releases due to lack of automation"
        },
        {
            icon: <FaChartLine />,
            title: "Limited Test Coverage",
            description: "Incomplete test coverage leads to production issues"
        }
    ];

    const techStack = [
        { icon: <SiSelenium />, name: "Selenium" },
        { icon: <SiCypress />, name: "Cypress" },
        { icon: <SiJest />, name: "Jest" },
        { icon: <FaTheaterMasks />, name: "Playwright" },
        { icon: <FaVial />, name: "JUnit" },
        { icon: <FaVial />, name: "TestNG" },
        { icon: <FaRobot />, name: "Appium" },
        { icon: <FaBolt />, name: "K6" }
    ];

    const benefits = [
        {
            icon: <FaBolt />,
            title: "Faster Releases",
            description: "Automated testing enables continuous delivery with confidence",
            metric: "60%",
            metricLabel: "Faster QA Cycles"
        },
        {
            icon: <FaShieldAlt />,
            title: "Zero Critical Bugs",
            description: "Comprehensive testing strategies catch defects before production",
            metric: "95%",
            metricLabel: "Bug Detection Rate"
        },
        {
            icon: <FaChartLine />,
            title: "Test Coverage",
            description: "Extensive automated test suites ensure comprehensive coverage",
            metric: "90%",
            metricLabel: "Code Coverage"
        }
    ];

    const offerings = [
        {
            title: "Test Automation",
            description: "End-to-end test automation for web, mobile, and API testing"
        },
        {
            title: "Performance Testing",
            description: "Load testing and stress testing to ensure scalability"
        },
        {
            title: "Security Testing",
            description: "Vulnerability scanning and penetration testing"
        },
        {
            title: "CI/CD Integration",
            description: "Automated testing integrated into deployment pipelines"
        },
        {
            title: "AI-Driven Testing",
            description: "Intelligent test generation and predictive bug detection"
        },
        {
            title: "Quality Consulting",
            description: "QA strategy and process optimization"
        }
    ];

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <FaCheckCircle className={styles.heroBadgeIcon} />
                            <span>QUALITY ENGINEERING</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Ensure Zero-Defect Releases
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Deliver flawless software with comprehensive QA testing, automation,
                            and AI-driven quality assurance strategies.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>95%</span>
                                <span className={styles.heroStatLabel}>Bug Detection</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>90%</span>
                                <span className={styles.heroStatLabel}>Test Coverage</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>60%</span>
                                <span className={styles.heroStatLabel}>Faster QA</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaBug className={styles.titleIcon} />
                            Quality Challenges
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Common testing and quality obstacles
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

                <section className={styles.approachSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaRocket className={styles.titleIcon} />
                            Our QA Approach
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Comprehensive quality assurance methodology
                        </p>
                    </div>
                    <div className={styles.approachContent}>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>01</div>
                            <h3>Test Strategy</h3>
                            <p>Define comprehensive test plans covering functional, performance, and security</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>02</div>
                            <h3>Test Automation</h3>
                            <p>Build robust automation frameworks for regression and continuous testing</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>03</div>
                            <h3>Continuous Testing</h3>
                            <p>Integrate testing into CI/CD pipelines for early defect detection</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>04</div>
                            <h3>Quality Metrics</h3>
                            <p>Track and improve quality with comprehensive metrics and dashboards</p>
                        </div>
                    </div>
                </section>

                <section className={styles.techStackSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCogs className={styles.titleIcon} />
                            Our Tech Stack
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Industry-leading testing tools
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

                <section className={styles.offeringsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCheckCircle className={styles.titleIcon} />
                            What We Offer
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Comprehensive QA and testing services
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

                <section className={styles.portfolioSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaRocket className={styles.titleIcon} />
                            Success Stories
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Quality engineering in action
                        </p>
                    </div>
                    <div className={styles.portfolioGrid}>
                        <div className={styles.portfolioCard} onClick={() => navigate('/case-study/test-automation')}>
                            <h3>Test Automation Framework</h3>
                            <p>Comprehensive automation reducing testing time by 60% and improving coverage to 90%</p>
                            <span className={styles.portfolioLink}>View Case Study <FaArrowRight /></span>
                        </div>
                    </div>
                </section>

                <section className={styles.benefitsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaBolt className={styles.titleIcon} />
                            Key Benefits
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Why choose FlairMinds for quality engineering
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

                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <FaCheckCircle className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready for Zero-Defect Releases?</h2>
                        <p className={styles.ctaText}>
                            Let's build a comprehensive quality strategy that ensures flawless software delivery.
                        </p>
                        <button
                            className={styles.ctaButton}
                            onClick={() => navigate('/contact')}
                        >
                            Get Started <FaArrowRight />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default QualityEngineering;
