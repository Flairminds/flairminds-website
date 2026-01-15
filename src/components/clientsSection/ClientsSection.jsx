import styles from './ClientsSection.module.css';
import clientsImage from '../../assets/clients_team_photo_1768472800312.png';

const ClientsSection = () => {
    const clientHighlights = [
        {
            title: "Trusted by Industry Leaders & Innovators",
            description: ""
        },
        {
            title: "From Startups to Enterprises",
            description: "Empowering businesses of all sizes with scalable and future-ready solutions."
        },
        {
            title: "Industry-Specific Expertise",
            description: "Delivering AI-driven, data-powered, and cloud-optimized solutions across healthcare, finance, e-commerce, and telecom."
        },
        {
            title: "Tailor-Made Digital Transformation",
            description: "Accelerating business growth with custom software development, automation, and advanced analytics."
        },
        {
            title: "Agile & Scalable Technology",
            description: "Ensuring seamless adaptability to industry demands, enhancing efficiency and innovation."
        }
    ];

    return (
        <section className={styles.clientsSection}>
            <h2 className={styles.sectionTitle}>CLIENTS</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.highlightsContainer}>
                    {clientHighlights.map((highlight, index) => (
                        <div key={index} className={styles.highlightItem}>
                            <div className={styles.bullet}></div>
                            <div>
                                <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                                {highlight.description && (
                                    <p className={styles.highlightDescription}>{highlight.description}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    <button className={styles.exploreButton}>
                        Explore
                    </button>
                </div>

                <div className={styles.imageContainer}>
                    <img
                        src={clientsImage}
                        alt="Our Team"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
