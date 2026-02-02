import React from 'react';
import styles from './ITManagement.module.css';
import {
    FaTasks, FaCheckCircle, FaBolt, FaChartLine, FaArrowRight,
    FaUsers, FaCogs, FaShieldAlt, FaClock, FaRocket
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ITManagement = () => {
    const navigate = useNavigate();

    const challenges = [
        {
            icon: <FaUsers />,
            title: "Resource Constraints",
            description: "Limited internal IT expertise and capacity for growing demands"
        },
        {
            icon: <FaClock />,
            title: "Project Delays",
            description: "Missed deadlines due to capacity issues and dependencies"
        },
        {
            icon: <FaCogs />,
            title: "Lack of Expertise",
            description: "Need for specialized skills for modern technologies"
        },
        {
            icon: <FaShieldAlt />,
            title: "Quality Concerns",
            description: "Inconsistent delivery quality across projects"
        }
    ];

    const benefits = [
        {
            icon: <FaBolt />,
            title: "Business Agility",
            description: "Flexible teams that scale with your needs and adapt to priorities",
            metric: "50%",
            metricLabel: "Faster Delivery"
        },
        {
            icon: <FaUsers />,
            title: "Expert Teams",
            description: "Access to specialized talent across all modern technologies",
            metric: "24/7",
            metricLabel: "Support Available"
        },
        {
            icon: <FaCheckCircle />,
            title: "Predictable Delivery",
            description: "Agile processes and proven methodologies ensure on-time, quality delivery",
            metric: "95%",
            metricLabel: "On-Time Delivery"
        }
    ];

    const offerings = [
        {
            title: "Dedicated Teams",
            description: "Offshore dedicated development teams integrated with your processes"
        },
        {
            title: "Project Management",
            description: "End-to-end project delivery with Agile/Scrum methodologies"
        },
        {
            title: "Staff Augmentation",
            description: "Fill skill gaps with our expert consultants on-demand"
        },
        {
            title: "Application Support",
            description: "24/7 production support and maintenance for your applications"
        },
        {
            title: "Technology Consulting",
            description: "Strategic guidance on tech stack, architecture, and best practices"
        },
        {
            title: "Agile Coaching",
            description: "Training and coaching to improve team velocity and quality"
        }
    ];

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <FaTasks className={styles.heroBadgeIcon} />
                            <span>IT MANAGEMENT</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Full-Lifecycle IT Management
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Drive business agility and innovation with our comprehensive IT management services.
                            From dedicated teams to project delivery, we ensure your technology initiatives succeed.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>50+</span>
                                <span className={styles.heroStatLabel}>Clients Supported</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>24/7</span>
                                <span className={styles.heroStatLabel}>Operations</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>95%</span>
                                <span className={styles.heroStatLabel}>On-Time Delivery</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCogs className={styles.titleIcon} />
                            IT Challenges
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Common IT management obstacles
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
                            Our Management Approach
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Proven methodologies for success
                        </p>
                    </div>
                    <div className={styles.approachContent}>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>01</div>
                            <h3>Agile Delivery</h3>
                            <p>Scrum-based development with bi-weekly sprints and continuous feedback</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>02</div>
                            <h3>Transparent Communication</h3>
                            <p>Daily standups, sprint reviews, and real-time project dashboards</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>03</div>
                            <h3>Quality Focus</h3>
                            <p>Built-in quality gates, code reviews, and automated testing</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>04</div>
                            <h3>Proactive Support</h3>
                            <p>24/7 monitoring, incident management, and continuous improvement</p>
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
                            Comprehensive IT management services
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
                            IT management in action
                        </p>
                    </div>
                    <div className={styles.portfolioGrid}>
                        <div className={styles.portfolioCard} onClick={() => navigate('/case-study/quant_finance')}>
                            <h3>Quantitative Finance Platform</h3>
                            <p>Dedicated team managing complex trading platform with 99.9% uptime</p>
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
                            Why choose FlairMinds for IT management
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
                        <FaTasks className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready to Partner With Us?</h2>
                        <p className={styles.ctaText}>
                            Let's build a partnership that drives your technology initiatives forward.
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

export default ITManagement;
