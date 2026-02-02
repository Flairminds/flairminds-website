import React from 'react';
import styles from './CloudDevOps.module.css';
import {
    FaCloud, FaRocket, FaCheckCircle, FaBolt, FaChartLine,
    FaArrowRight, FaClock, FaShieldAlt, FaCogs, FaServer, FaAws,
    FaMagic, FaSearch, FaLayerGroup, FaTools, FaMicroscope, FaBrain, FaDatabase
} from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGitlab, SiAnsible, SiPrometheus, SiGrafana } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { MdSpeed, MdAutoAwesome } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

// Asset Imports
import auditImg from '../../../assets/tech_collaboration.png';
import iacImg from '../../../assets/software_architecture.webp';
import cicdImg from '../../../assets/ai_neural_network.png';
import monitoringImg from '../../../assets/ai_hologram.webp';
import scalingImg from '../../../assets/ai_solutions_hero.webp';
import expertiseVisual from '../../../assets/infraMonitoring.png';

const CloudDevOps = () => {
    const navigate = useNavigate();

    const challenges = [
        {
            icon: <FaClock />,
            title: "Manual Deployments",
            description: "Time-consuming manual processes leading to delays and human errors"
        },
        {
            icon: <FaCogs />,
            title: "Infrastructure Complexity",
            description: "Managing complex infrastructure across multiple environments"
        },
        {
            icon: <FaShieldAlt />,
            title: "Security Concerns",
            description: "Ensuring compliance and security across cloud environments"
        },
        {
            icon: <FaChartLine />,
            title: "Cost Optimization",
            description: "Unpredictable cloud costs and resource waste"
        }
    ];

    const techStack = [
        { icon: <FaAws />, name: "AWS" },
        { icon: <VscAzure />, name: "Azure" },
        { icon: <FaCloud />, name: "GCP" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiTerraform />, name: "Terraform" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <SiGitlab />, name: "GitLab" },
        { icon: <SiAnsible />, name: "Ansible" },
        { icon: <SiPrometheus />, name: "Prometheus" },
        { icon: <SiGrafana />, name: "Grafana" },
        { icon: <MdAutoAwesome />, name: "AI Ops Agents" }
    ];

    const aiTools = [
        {
            stage: "Infrastructure as Code",
            cases: "Automated Terraform/Bicep generation, complex architecture mapping",
            tools: ["Antigravity", "Claude", "Terraform AI"],
            icon: <FaLayerGroup />
        },
        {
            stage: "Autonomous Monitoring",
            cases: "Predictive anomaly detection, self-healing orchestration",
            tools: ["Datadog AI", "Dynatrace", "New Relic AI"],
            icon: <FaMicroscope />
        },
        {
            stage: "Intelligent Security",
            cases: "Real-time threat modeling, automated compliance remediation",
            tools: ["Snyk AI", "Wiz", "GitHub Advanced Security"],
            icon: <FaShieldAlt />
        },
        {
            stage: "Cost Governance",
            cases: "Autonomous resource right-sizing, spot instance optimization",
            tools: ["Vantage", "Finout", "CloudHealth AI"],
            icon: <FaChartLine />
        }
    ];

    const deliveryJourney = [
        {
            phase: "01. Cloud Audit & Strategy",
            description: "Evaluating current debt, security posture, and defining the AI-DevOps roadmap.",
            icon: <FaSearch />,
            image: auditImg
        },
        {
            phase: "02. AI-Powered IaC Design",
            description: "Rapidly provisioning secure, scalable environments with AI-augmented IaC best practices.",
            icon: <FaLayerGroup />,
            image: iacImg
        },
        {
            phase: "03. Intelligent CI/CD Setup",
            description: "Building automated pipelines with integrated AI security and quality gates.",
            icon: <FaBolt />,
            image: cicdImg
        },
        {
            phase: "04. Predictive Monitoring",
            description: "Setting up observability that identifies issues before they impact end-users.",
            icon: <FaBrain />,
            image: monitoringImg
        },
        {
            phase: "05. Autonomous Scaling",
            description: "Optimizing for peak performance and global reach with smart resource orchestration.",
            icon: <FaRocket />,
            image: scalingImg
        }
    ];

    const benefits = [
        {
            icon: <FaBolt />,
            title: "Faster Deployments",
            description: "Automated CI/CD pipelines enable multiple deployments per day with zero downtime",
            metric: "80%",
            metricLabel: "Faster Release Cycles"
        },
        {
            icon: <FaShieldAlt />,
            title: "Enhanced Security",
            description: "Automated security scanning, compliance checks, and infrastructure hardening",
            metric: "99.9%",
            metricLabel: "Security Compliance"
        },
        {
            icon: <FaChartLine />,
            title: "Cost Optimization",
            description: "Right-sizing resources, automated scaling, and cost monitoring reduce cloud spend",
            metric: "40%",
            metricLabel: "Cost Reduction"
        }
    ];

    const offerings = [
        {
            title: "Cloud Migration",
            description: "Seamless migration of applications and data to AWS, Azure, or GCP"
        },
        {
            title: "Infrastructure as Code",
            description: "Automated infrastructure provisioning with Terraform and CloudFormation"
        },
        {
            title: "CI/CD Pipelines",
            description: "Automated build, test, and deployment workflows with Jenkins, GitLab, GitHub Actions"
        },
        {
            title: "Container Orchestration",
            description: "Kubernetes-based microservices deployment and management"
        },
        {
            title: "Monitoring & Logging",
            description: "Comprehensive observability with Prometheus, Grafana, ELK stack"
        },
        {
            title: "Disaster Recovery",
            description: "Automated backup, failover, and recovery strategies"
        }
    ];

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <FaCloud className={styles.heroBadgeIcon} />
                            <span>CLOUD & DEVOPS</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Streamline Operations with Cloud & DevOps Excellence
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Transform your infrastructure with automated CI/CD pipelines, cloud-native architecture,
                            and DevOps best practices. Achieve faster deployments, reduced costs, and enhanced security.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>80%</span>
                                <span className={styles.heroStatLabel}>Faster Deployments</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>50+</span>
                                <span className={styles.heroStatLabel}>Cloud Migrations</span>
                            </div>
                            <div className={styles.heroStatDivider}></div>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>99.9%</span>
                                <span className={styles.heroStatLabel}>Uptime</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenge Section */}
                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCogs className={styles.titleIcon} />
                            Infrastructure Challenges
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Traditional infrastructure management struggles
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
                            Our DevOps Approach
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Modern practices for cloud excellence
                        </p>
                    </div>
                    <div className={styles.approachContent}>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>01</div>
                            <h3>Infrastructure as Code</h3>
                            <p>Version-controlled infrastructure with Terraform, ensuring consistency and repeatability</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>02</div>
                            <h3>Automated CI/CD</h3>
                            <p>End-to-end automation from code commit to production deployment</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>03</div>
                            <h3>Cloud-Native Architecture</h3>
                            <p>Microservices, containers, and serverless for scalability and resilience</p>
                        </div>
                        <div className={styles.approachCard}>
                            <div className={styles.approachNumber}>04</div>
                            <h3>Continuous Monitoring</h3>
                            <p>Real-time observability with centralized logging and alerting</p>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className={styles.techStackSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaServer className={styles.titleIcon} />
                            Our Tech Stack
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Industry-leading cloud and DevOps tools
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
                            AI-Accelerated DevOps SDLC
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            We leverage industry-leading AI tools to speed up operations while ensuring top-tier reliability
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

                {/* Transformation Journey Section */}
                <section className={styles.journeySection}>
                    <div className={styles.container}>
                        <div className={styles.journeyContentWrapper}>
                            {/* Left: Journey Steps */}
                            <div className={styles.journeyInfoCol}>
                                <div className={styles.journeyBadge}>OUR JOURNEY</div>
                                <h2 className={styles.journeyMainHeading}>
                                    Rapid AI-DevOps <span className={styles.journeyHighlight}>Transformation</span>
                                </h2>

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

                            {/* Right: Technical Visual */}
                            <div className={styles.journeyVisualCol}>
                                <div className={styles.journeyTechImageCard}>
                                    <img
                                        src={expertiseVisual}
                                        alt="Infrastructure Monitoring"
                                        className={styles.journeyArchImage}
                                    />
                                    <div className={styles.journeyGlassBadge}>
                                        <div className={styles.journeyBadgeLabel}>OPS 4.0</div>
                                        <div className={styles.journeyBadgeText}>Autonomous Cloud Control</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            Comprehensive cloud and DevOps services
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
                            Cloud transformation in action
                        </p>
                    </div>
                    <div className={styles.portfolioGrid}>
                        <div className={styles.portfolioCard} onClick={() => navigate('/case-study/cloud_optimization')}>
                            <h3>Cloud Cost Optimization</h3>
                            <p>Reduced infrastructure costs by 40% while improving performance through intelligent resource allocation</p>
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
                            Why choose FlairMinds for cloud and DevOps
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
                        <FaCloud className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready to Transform Your Infrastructure?</h2>
                        <p className={styles.ctaText}>
                            Let's modernize your cloud operations and accelerate your delivery pipeline.
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

export default CloudDevOps;
