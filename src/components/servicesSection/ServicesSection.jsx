import styles from './ServicesSection.module.css';
import aiHologram from '../../assets/ai_hologram.png';
import { FaCode, FaCloud, FaBrain, FaCheckCircle, FaRocket, FaTasks } from 'react-icons/fa';

const ServicesSection = () => {
    const services = [
        {
            icon: <FaCode />,
            title: "Custom Web & Mobile Development",
            description: "Building high-performance, scalable applications with cutting-edge tech stacks."
        },
        {
            icon: <FaCloud />,
            title: "Cloud & DevOps Engineering",
            description: "Streamlining operations with automated CI/CD and secure cloud architecture."
        },
        {
            icon: <FaBrain />,
            title: "AI & Data Science Solutions",
            description: "Transforming raw data into actionable intelligence with custom ML models."
        },
        {
            icon: <FaCheckCircle />,
            title: "Quality Engineering",
            description: "Ensuring zero-defect releases with automated and AI-driven testing."
        },
        {
            icon: <FaRocket />,
            title: "Digital Transformation",
            description: "Modernizing legacy systems with future-proof enterprise strategies."
        },
        {
            icon: <FaTasks />,
            title: "IT Management",
            description: "Full-lifecycle IT management to drive business agility and innovation."
        }
    ];

    return (
        <section className={styles.servicesSection}>
            {/* Background Layer with Live Tech Visuals */}
            <div className={styles.backgroundVisual}>
                <img src={aiHologram} alt="" className={styles.bgImage} />
                <div className={styles.scanLine}></div>
                <div className={styles.bgOverlay}></div>
                <div className={styles.glowEffect}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.liveIndicator}>
                        <span className={styles.pulseDot}></span>
                        LIVE TECH ENGINE ACTIVE
                    </div>
                    <h2 className={styles.sectionTitle}>OUR SERVICES</h2>
                    <p className={styles.sectionSubtitle}>
                        Empowering enterprises with intelligent solutions that bridge the gap between imagination and reality.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.glassBackground}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.serviceIcon}>{service.icon}</div>
                                <h4 className={styles.serviceTitle}>{service.title}</h4>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </div>
                            <div className={styles.cardIndicator}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
