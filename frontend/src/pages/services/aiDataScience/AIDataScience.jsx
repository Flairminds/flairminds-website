import React from 'react';
import styles from './AIDataScience.module.css';
import {
    FaBrain, FaRocket, FaCheckCircle, FaBolt, FaChartLine,
    FaArrowRight, FaDatabase, FaLightbulb, FaCogs, FaChartPie,
    FaMicrochip, FaNetworkWired, FaCodeBranch, FaSearchPlus, FaCloudDownloadAlt
} from 'react-icons/fa';
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiFastapi, SiHuggingface, SiOpenai, SiPandas } from 'react-icons/si';
import { MdModelTraining, MdAutoAwesome } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

// Asset Imports
import aiAgentVisual from '../../../assets/aiagent.png';

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
        { icon: <SiHuggingface />, name: "HuggingFace" },
        { icon: <SiOpenai />, name: "OpenAI" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiScikitlearn />, name: "Scikit-Learn" },
        { icon: <FaDatabase />, name: "Vector DBs" }
    ];

    const aiOperations = [
        {
            stage: "Neural Architecture",
            cases: "Custom LLM fine-tuning, transformer optimization, neural search",
            tools: ["PyTorch", "HuggingFace", "LangChain"],
            icon: <FaMicrochip />
        },
        {
            stage: "Intelligent ETL",
            cases: "Autonomous data cleaning, real-time feature engineering",
            tools: ["Spark", "Airflow", "dbt"],
            icon: <FaNetworkWired />
        },
        {
            stage: "MLOps Lifecycle",
            cases: "Automated model versioning, drift detection, A/B deployment",
            tools: ["MLflow", "Kubeflow", "Weights & Biases"],
            icon: <FaCodeBranch />
        },
        {
            stage: "Cognitive Security",
            cases: "Adversarial attack protection, sensitive data masking in RAG",
            tools: ["Presidio", "Guardrails AI"],
            icon: <FaCheckCircle />
        }
    ];

    const deliveryJourney = [
        {
            phase: "01. Data Audit & Discovery",
            description: "Identifying high-impact AI use cases and evaluating data quality for feasibility.",
            icon: <FaSearchPlus />
        },
        {
            phase: "02. Scalable Data Engineering",
            description: "Building robust pipelines to transform raw data into a continuous intelligence stream.",
            icon: <FaCloudDownloadAlt />
        },
        {
            phase: "03. Neural Model Design",
            description: "Developing custom deep learning models tailored to your unique business logic.",
            icon: <MdModelTraining />
        },
        {
            phase: "04. Optimization & Tuning",
            description: "Fine-tuning hyper-parameters and ensuring maximum inference speed and accuracy.",
            icon: <FaCogs />
        },
        {
            phase: "05. API & Production Scale",
            description: "Deploying high-availability inference endpoints for global enterprise scale.",
            icon: <FaRocket />
        }
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
        <div className={styles.notebookContainer}>
            <div className={styles.notebookGutter}></div>
            <main className={styles.notebookMain}>
                {/* Cell 1: Hero / In [1] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [1]:</div>
                        <div className={styles.inputArea}>
                            <span className={styles.codeComment}># Initialize AI & Data Science Infrastructure</span><br />
                            <span className={styles.codeKeyword}>import</span> flairminds_ai <span className={styles.codeKeyword}>as</span> ai<br />
                            ai.create_hero_visual(target=<span className={styles.codeString}>"Intelligence transformation"</span>)
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}>Out [1]:</div>
                        <div className={styles.outputArea}>
                            <section className={styles.heroSection}>
                                <div className={styles.heroBadge}>
                                    <FaBrain className={styles.heroBadgeIcon} />
                                    <span>AI & DATA SCIENCE v4.0</span>
                                </div>
                                <h1 className={styles.heroTitle}>Transform Data into Intelligence</h1>
                                <p className={styles.heroSubtitle}>
                                    Unlock the power of your data with custom AI and machine learning solutions.
                                    From predictive analytics to intelligent automation, we deliver data science
                                    solutions that drive real business value.
                                </p>
                                <div className={styles.heroStats}>
                                    <div className={styles.heroStat}>
                                        <span className={styles.heroStatNumber}>25+</span>
                                        <span className={styles.heroStatLabel}>ML Models</span>
                                    </div>
                                    <div className={styles.heroStatDivider}></div>
                                    <div className={styles.heroStat}>
                                        <span className={styles.heroStatNumber}>3x</span>
                                        <span className={styles.heroStatLabel}>ROI</span>
                                    </div>
                                    <div className={styles.heroStatDivider}></div>
                                    <div className={styles.heroStat}>
                                        <span className={styles.heroStatNumber}>90%</span>
                                        <span className={styles.heroStatLabel}>Accuracy</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Cell 2: Challenges / In [2] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [2]:</div>
                        <div className={styles.inputArea}>
                            ai.analyze_market_bottlenecks()
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}></div>
                        <div className={styles.outputArea}>
                            <section className={styles.challengeSection}>
                                <h2 className={styles.sectionTitle}>Data Challenges Identified</h2>
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
                        </div>
                    </div>
                </div>

                {/* Cell 3: Operations / In [3] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [3]:</div>
                        <div className={styles.inputArea}>
                            ai.configure_ops_pipeline(mode=<span className={styles.codeString}>"Industrial"</span>)
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}></div>
                        <div className={styles.outputArea}>
                            <section className={styles.aiOpsSection}>
                                <h2 className={styles.sectionTitle}>Advanced AI Operations</h2>
                                <div className={styles.aiOpsGrid}>
                                    {aiOperations.map((item, index) => (
                                        <div key={index} className={styles.aiOpsCard}>
                                            <div className={styles.aiOpsHeader}>
                                                <div className={styles.aiOpsIcon}>{item.icon}</div>
                                                <h3>{item.stage}</h3>
                                            </div>
                                            <p className={styles.aiOpsCases}>{item.cases}</p>
                                            <div className={styles.aiOpsTags}>
                                                {item.tools.map((tool, tIdx) => (
                                                    <span key={tIdx} className={styles.aiOpsTag}>{tool}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Cell 4: Transformation Journey / In [4] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [4]:</div>
                        <div className={styles.inputArea}>
                            <span className={styles.codeKeyword}>for</span> step <span className={styles.codeKeyword}>in</span> delivery_journey:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;ai.execute_transformation(step)
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}>Out [4]:</div>
                        <div className={styles.outputArea}>
                            <section className={styles.journeySection}>
                                <div className={styles.journeyContentWrapper}>
                                    <div className={styles.journeyInfoCol}>
                                        <div className={styles.journeyBadge}>PIPELINE LOGS</div>
                                        <h2 className={styles.journeyMainHeading}>Quantum <span className={styles.journeyHighlight}>Intelligence</span> Cycle</h2>
                                        <div className={styles.journeyHighlightsList}>
                                            {deliveryJourney.map((step, index) => (
                                                <div key={index} className={styles.journeyHighlightItem}>
                                                    <div className={styles.journeyDash}></div>
                                                    <div className={styles.journeyItemContent}>
                                                        <h4 className={styles.journeyItemTitle}>{step.phase}</h4>
                                                        <p className={styles.journeyItemDescription}>{step.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.journeyVisualCol}>
                                        <div className={styles.journeyTechImageCard}>
                                            <img src={aiAgentVisual} alt="AI Neural Mesh" className={styles.journeyArchImage} />
                                            <div className={styles.notebookGlassBadge}>
                                                <div className={styles.badgeLabel}>PLOT_RESULT_04</div>
                                                <div className={styles.badgeText}>Neural Agent V4 Deployed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Cell 5: Offerings / In [5] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [5]:</div>
                        <div className={styles.inputArea}>
                            ai.get_service_offerings()
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}></div>
                        <div className={styles.outputArea}>
                            <section className={styles.offeringsSection}>
                                <h2 className={styles.sectionTitle}>What We Offer</h2>
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
                        </div>
                    </div>
                </div>

                {/* Cell 6: Tech Stack / In [6] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [6]:</div>
                        <div className={styles.inputArea}>
                            ai.load_environment_configs()
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}></div>
                        <div className={styles.outputArea}>
                            <section className={styles.techStackSection}>
                                <h2 className={styles.sectionTitle}>Neural Tech Stack</h2>
                                <div className={styles.techStackGrid}>
                                    {techStack.map((tech, index) => (
                                        <div key={index} className={styles.techStackCard}>
                                            <div className={styles.techIcon}>{tech.icon}</div>
                                            <span className={styles.techName}>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Cell 7: Portfolio / In [7] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [7]:</div>
                        <div className={styles.inputArea}>
                            ai.fetch_success_stories(type=<span className={styles.codeString}>"AI_POC"</span>)
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}>Out [7]:</div>
                        <div className={styles.outputArea}>
                            <section className={styles.portfolioSection}>
                                <h2 className={styles.sectionTitle}>Success Stories</h2>
                                <div className={styles.portfolioGrid}>
                                    <div className={styles.portfolioCard} onClick={() => navigate('/case-study/ai-poc-development')}>
                                        <h3>AI-Powered PoC Development</h3>
                                        <p>Accelerated proof-of-concept delivery from weeks to days with AI integration across SDLC</p>
                                        <span className={styles.portfolioLink}>View Case Study <FaArrowRight /></span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Cell 8: Benefits / In [8] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [8]:</div>
                        <div className={styles.inputArea}>
                            ai.calculate_business_impact()
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}>Out [8]:</div>
                        <div className={styles.outputArea}>
                            <section className={styles.benefitsSection}>
                                <h2 className={styles.sectionTitle}>Key Benefits</h2>
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
                        </div>
                    </div>
                </div>

                {/* Cell 9: CTA / In [9] */}
                <div className={styles.notebookCell}>
                    <div className={styles.cellInput}>
                        <div className={styles.inputMarker}>In [9]:</div>
                        <div className={styles.inputArea}>
                            ai.start_collaboration(mode=<span className={styles.codeString}>"Enterprise"</span>)
                        </div>
                    </div>
                    <div className={styles.cellOutput}>
                        <div className={styles.outputMarker}></div>
                        <div className={styles.outputArea}>
                            <section className={styles.ctaSection}>
                                <div className={styles.ctaCard}>
                                    <FaBrain className={styles.ctaIcon} />
                                    <h2 className={styles.ctaTitle}>Ready to Run Your AI Notebook?</h2>
                                    <p className={styles.ctaText}>
                                        Let's build intelligent systems that transform your business with AI and machine learning.
                                    </p>
                                    <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
                                        Execute Collaboration <FaArrowRight />
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AIDataScience;
