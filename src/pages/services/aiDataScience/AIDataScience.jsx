import React from 'react';
import styles from './AIDataScience.module.css';
import {
    FaBrain, FaRocket, FaCheckCircle, FaBolt, FaChartLine,
    FaArrowRight, FaDatabase, FaLightbulb, FaCogs, FaChartPie
} from 'react-icons/fa';
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiFastapi } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const AIDataScience = () => {
    const navigate = useNavigate();

    const challenges = [
        {
            icon: <FaDatabase />,
            title: "Data Silos",
            description: "Fragmented data across systems preventing unified insights"
        },
        {
            icon: <FaChartLine />,
            title: "Lack of Insights",
            description: "Unable to extract actionable intelligence from data"
        },
        {
            icon: <FaCogs />,
            title: "Manual Decision-Making",
            description: "Relying on intuition instead of data-driven decisions"
        },
        {
            icon: <FaBolt />,
            title: "Scaling AI",
            description: "Difficulty deploying and scaling ML models in production"
        }
    ];

    const techStack = [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <SiScikitlearn />, name: "Scikit-Learn" },
        { icon: <FaDatabase />, name: "PySpark" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <FaChartPie />, name: "CatBoost" },
        { icon: <FaBrain />, name: "OpenAI" }
    ];

    const benefits = [
        {
            icon: <FaBrain />,
            title: "Data-Driven Decisions",
            description: "Transform raw data into actionable insights with advanced analytics and ML",
            metric: "3x",
            metricLabel: "Better Predictions"
        },
        {
            icon: <FaBolt />,
            title: "Process Automation",
            description: "Automate repetitive tasks and workflows with intelligent AI systems",
            metric: "70%",
            metricLabel: "Time Saved"
        },
        {
            icon: <FaChartLine />,
            title: "Predictive Analytics",
            description: "Forecast trends and outcomes with custom machine learning models",
            metric: "90%",
            metricLabel: "Accuracy"
        }
    ];

    const offerings = [
        {
            title: "Custom ML Models",
            description: "Build tailored machine learning models for your specific business needs"
        },
        {
            title: "Data Pipeline Engineering",
            description: "End-to-end ETL pipelines for data extraction, transformation, and loading"
        },
        {
            title: "Predictive Analytics",
            description: "Forecast customer behavior, sales trends, and market dynamics"
        },
        {
            title: "Natural Language Processing",
            description: "Text analysis, sentiment analysis, and chatbot development"
        },
        {
            title: "Computer Vision",
            description: "Image recognition, object detection, and visual quality inspection"
        },
        {
            title: "MLOps & Deployment",
            description: "Production-ready ML systems with monitoring and continuous learning"
        }
    ];

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <FaBrain className={styles.heroBadgeIcon} />
                            <span>AI & DATA SCIENCE</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Transform Data into Intelligence
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Unlock the power of your data with custom AI and machine learning solutions.
                            From predictive analytics to intelligent automation, we deliver data science
                            solutions that drive real business value.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>25+</span>
                                <span className={styles.heroStatLabel}>ML Models Deployed</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>3x</span>
                                <span className={styles.heroStatLabel}>ROI Achieved</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>90%</span>
                                <span className={styles.heroStatLabel}>Model Accuracy</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenge Section */}
                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaLightbulb className={styles.titleIcon} />
                            Data Challenges
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Common obstacles in leveraging data
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
                            <FaRocket className={styles.titleIcon} />
                            Our AI Approach
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            End-to-end machine learning solutions
                        </p>
                    </div>
                    <div className={styles.approachContent}>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>01</div>
                            <h3>Problem Definition</h3>
                            <p>Identify business objectives and translate them into measurable ML problems</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>02</div>
                            <h3>Data Engineering</h3>
                            <p>Build robust data pipelines for collection, cleaning, and feature engineering</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>03</div>
                            <h3>Model Development</h3>
                            <p>Train and optimize custom ML models with state-of-the-art algorithms</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>04</div>
                            <h3>Production Deployment</h3>
                            <p>Deploy models with MLOps best practices for continuous improvement</p>
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
                            Cutting-edge AI and ML technologies
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

                {/* Offerings Section */}
                <section className={styles.offeringsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCheckCircle className={styles.titleIcon} />
                            What We Offer
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Comprehensive AI and data science services
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
                            AI solutions in action
                        </p>
                    </div>
                    <div className={styles.portfolioGrid}>
                        <div className={styles.portfolioCard} onClick={() => navigate('/case-study/ai-poc-development')}>
                            <h3>AI-Powered PoC Development</h3>
                            <p>Accelerated proof-of-concept delivery from weeks to days with AI integration across SDLC</p>
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
                            Why choose FlairMinds for AI and data science
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
                        <FaBrain className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready to Unlock Your Data's Potential?</h2>
                        <p className={styles.ctaText}>
                            Let's build intelligent systems that transform your business with AI and machine learning.
                        </p>
                        <button
                            className={styles.ctaButton}
                            onClick={() => navigate('/contact')}
                        >
                            Start Your AI Journey <FaArrowRight />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AIDataScience;
