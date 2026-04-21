import styles from './ProjectsSection.module.css';
import archImage from '../../assets/software_architecture.webp';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ProjectsSection = () => {
    const navigate = useNavigate();

    const highlights = [
        {
            title: "Scalable Architectures",
            description: "Designing systems that grow with your business using microservices and cloud-native patterns."
        },
        {
            title: "Performance Optimization",
            description: "High-speed, low-latency execution for demanding enterprise workloads."
        },
        {
            title: "Secure by Design",
            description: "Rigorous security protocols embedded into every layer of development."
        },
        {
            title: "Full-Stack Mastery",
            description: "End-to-end expertise from intuitive frontend to robust, data-rich backends."
        }
    ];

    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left: Interactive Info */}
                    <div className={styles.infoCol}>
                        <h2 className={styles.sectionTitle}>OUR EXPERTISE</h2>
                        <h3 className={styles.mainHeading}>Transforming Complexity into <span className={styles.highlight}>Clear Solutions</span></h3>

                        <div className={styles.highlightsList}>
                            {highlights.map((item, index) => (
                                <div key={index} className={styles.highlightItem}>
                                    <div className={styles.dash}></div>
                                    <div className={styles.itemContent}>
                                        <h4 className={styles.itemTitle}>{item.title}</h4>
                                        <p className={styles.itemDescription}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className={styles.primaryButton}
                            onClick={() => navigate('/case-study')}
                        >
                            Explore Portfolio <FaArrowRight />
                        </button>
                    </div>

                    {/* Right: Technical Visual */}
                    <div className={styles.visualCol}>
                        <div className={styles.techImageCard}>
                            <img
                                src={archImage}
                                alt="Technical Architecture"
                                className={styles.archImage}
                                width={400}
                                // height={500}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className={styles.glassBadge}>
                                <div className={styles.badgeLabel}>VERSION 4.0</div>
                                <div className={styles.badgeText}>Enterprise Ready Architecture</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
