import React from 'react';
import styles from './DigitalTransformation.module.css';
import {
    FaRocket, FaCheckCircle, FaBolt, FaChartLine, FaArrowRight,
    FaLightbulb, FaCogs, FaCloud, FaDatabase, FaExclamationTriangle
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DigitalTransformation = () => {
    const navigate = useNavigate();

    const challenges = [
        {
            icon: <FaExclamationTriangle />,
            title: "Outdated Systems",
            description: "Legacy infrastructure limiting business agility and innovation"
        },
        {
            icon: <FaCogs />,
            title: "Technical Debt",
            description: "Accumulated technical debt slowing down development"
        },
        {
            icon: <FaChartLine />,
            title: "Competitive Pressure",
            description: "Need to modernize to stay competitive in digital economy"
        },
        {
            icon: <FaDatabase />,
            title: "Data Fragmentation",
            description: "Siloed data across legacy systems preventing insights"
        }
    ];

    const benefits = [
        {
            icon: <FaRocket />,
            title: "Future-Proof Systems",
            description: "Modern, scalable architecture that adapts to changing business needs",
            metric: "70%",
            metricLabel: "Improved Agility"
        },
        {
            icon: <FaBolt />,
            title: "Operational Efficiency",
            description: "Streamlined processes and automated workflows reduce manual effort",
            metric: "60%",
            metricLabel: "Cost Reduction"
        },
        {
            icon: <FaChartLine />,
            title: "Competitive Advantage",
            description: "Digital capabilities that differentiate your business in the market",
            metric: "3x",
            metricLabel: "Faster Innovation"
        }
    ];

    const offerings = [
        {
            title: "Legacy Modernization",
            description: "Migrate monolithic applications to microservices and cloud-native architecture"
        },
        {
            title: "Cloud Migration",
            description: "Move on-premise workloads to AWS, Azure, or GCP with minimal disruption"
        },
        {
            title: "Digital Strategy",
            description: "Assessment and roadmap for digital transformation initiatives"
        },
        {
            title: "Process Automation",
            description: "Automate business workflows with RPA and intelligent automation"
        },
        {
            title: "Data Modernization",
            description: "Consolidate and modernize data infrastructure for analytics"
        },
        {
            title: "Change Management",
            description: "Training and support to ensure successful adoption"
        }
    ];

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <FaRocket className={styles.heroBadgeIcon} />
                            <span>DIGITAL TRANSFORMATION</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Modernize Your Enterprise for the Digital Era
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Transform legacy systems into modern, cloud-native architecture.
                            Our digital transformation services help you stay competitive and agile.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>20+</span>
                                <span className={styles.heroStatLabel}>Systems Modernized</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>60%</span>
                                <span className={styles.heroStatLabel}>Cost Reduction</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>3x</span>
                                <span className={styles.heroStatLabel}>Faster Innovation</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaLightbulb className={styles.titleIcon} />
                            Transformation Challenges
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Common obstacles in modernization
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
                            <FaCogs className={styles.titleIcon} />
                            Our Transformation Approach
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Phased, risk-managed modernization
                        </p>
                    </div>
                    <div className={styles.approachContent}>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>01</div>
                            <h3>Assessment & Strategy</h3>
                            <p>Evaluate current state, define vision, and create transformation roadmap</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>02</div>
                            <h3>Architecture Design</h3>
                            <p>Design target architecture with modern patterns and technologies</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>03</div>
                            <h3>Phased Migration</h3>
                            <p>Incremental migration with minimal disruption to business operations</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>04</div>
                            <h3>Continuous Optimization</h3>
                            <p>Ongoing improvements and optimization post-migration</p>
                        </div>
                    </div>
                </section>

                <section className={styles.offeringsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCheckCircle className={styles.titleIcon} />
                            What We Offer
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Comprehensive transformation services
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
                            Digital transformation in action
                        </p>
                    </div>
                    <div className={styles.portfolioGrid}>
                        <div className={styles.portfolioCard} onClick={() => navigate('/case-study/ent_data_transformation')}>
                            <h3>Enterprise Data Transformation</h3>
                            <p>Modernized enterprise data platform reducing processing time by 70%</p>
                            <span className={styles.portfolioLink}>View Case Study <FaArrowRight /></span>
                        </div>
                        <div className={styles.portfolioCard} onClick={() => navigate('/case-study/vendor_risk_assessment')}>
                            <h3>Vendor Risk Management</h3>
                            <p>Digital platform for automated vendor risk assessment and compliance</p>
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
                            Why choose FlairMinds for digital transformation
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
                        <FaRocket className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready to Modernize Your Enterprise?</h2>
                        <p className={styles.ctaText}>
                            Let's transform your legacy systems into modern, agile platforms for the digital age.
                        </p>
                        <button
                            className={styles.ctaButton}
                            onClick={() => navigate('/contact')}
                        >
                            Start Your Transformation <FaArrowRight />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DigitalTransformation;
