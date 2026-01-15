import styles from './ServicesSection.module.css';
import aiSolutionsImage from '../../assets/ai_solutions_tech_1768472767564.png';

const ServicesSection = () => {
    const services = [
        {
            title: "Custom Web & Mobile App Development",
            description: "Build scalable, responsive, and high-performance apps that deliver seamless digital experiences."
        },
        {
            title: "DevOps & Cloud Engineering",
            description: "Accelerate innovation with automated CI/CD pipelines, cloud optimization, and agile infrastructure."
        },
        {
            title: "AI & Data Science Solutions",
            description: "Unlock business growth with predictive analytics, machine learning, and actionable data insights."
        },
        {
            title: "Quality Engineering & Assurance",
            description: "Ensure flawless performance with intelligent, AI-driven testing and continuous quality validation."
        },
        {
            title: "Enterprise Digital Transformation",
            description: "Modernize your enterprise with automation, cloud-native solutions, and future-ready strategies."
        },
        {
            title: "End-to-End IT Management",
            description: "Drive agility and innovation through intelligent, full-lifecycle enterprise IT management."
        }
    ];

    return (
        <section className={styles.servicesSection}>
            <h2 className={styles.sectionTitle}>OUR SERVICES</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageCard}>
                        <img
                            src={aiSolutionsImage}
                            alt="AI-Driven Solutions"
                            className={styles.image}
                        />
                        <div className={styles.imageOverlay}>
                            <h3 className={styles.imageTitle}>UNLOCK BUSINESS GROWTH WITH AI-DRIVEN SOLUTIONS</h3>
                            <p className={styles.imageSubtitle}>
                                UNLOCK BUSINESS SOLUTIONS • AI & DATA OPERATIONS • ENTERPRISE DIGITAL TRANSFORMATION
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.servicesContainer}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceItem}>
                            <h4 className={styles.serviceTitle}>{service.title}</h4>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
