import styles from './AboutUsPage.module.css';
import visionIcon from '../../assets/vision_icon.png';
import missionIcon from '../../assets/mission_icon.png';
import valuesIcon from '../../assets/values_icon.png';
import leadersIcon from '../../assets/leaders_icon.png';
import visionariesIcon from '../../assets/visionaries_icon.png';
import partnersIcon from '../../assets/partners_icon.png';

const AboutUsPage = () => {
    const values = [
        "Drive innovation",
        "Deliver excellence",
        "Ensure reliability",
        "Foster agility",
        "Empower success",
        "Embrace perseverance",
        "Accelerate growth"
    ];

    const teamStats = [
        { title: "Business Leaders", icon: leadersIcon },
        { title: "Tech Visionaries", icon: visionariesIcon },
        { title: "Global Partners", icon: partnersIcon }
    ];

    return (
        <div className={styles.aboutUsPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.mainTitle}>ABOUT US</h1>
                    <p className={styles.heroDescription}>
                        FlairMinds Software is committed to <strong>Innovation, Efficiency, and Resiliency</strong> in IT,
                        delivering cutting-edge, client-focused tech solutions. We optimize software engineering for
                        performance and scalability, ensuring swift, reliable market entry. Through close collaboration
                        and the latest technologies, we aim to lead with excellence and create purpose-driven,
                        high-performance software.
                    </p>
                </div>
            </section>

            {/* Vision, Mission, Values Grid */}
            <section className={styles.vmvSection}>
                <div className={styles.vmvGrid}>
                    {/* Vision */}
                    <div className={styles.vmvCard}>
                        <div className={styles.imageIconWrapper}>
                            <img src={visionIcon} alt="Vision" className={styles.imageIcon} />
                        </div>
                        <h2 className={styles.cardTitle}>VISION</h2>
                        <p className={styles.cardContent}>
                            To be an innovative technology company by pursuing excellence and perseverance
                            to enable success stories.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className={styles.vmvCard}>
                        <div className={styles.imageIconWrapper}>
                            <img src={missionIcon} alt="Mission" className={styles.imageIcon} />
                        </div>
                        <h2 className={styles.cardTitle}>MISSION</h2>
                        <p className={styles.cardContent}>
                            Build software that is performant, scalable and "fit for purpose", enabling
                            customers to go to market quickly and reliably.
                        </p>
                    </div>

                    {/* Values */}
                    <div className={styles.vmvCard}>
                        <div className={styles.imageIconWrapper}>
                            <img src={valuesIcon} alt="Values" className={styles.imageIcon} />
                        </div>
                        <h2 className={styles.cardTitle}>VALUES</h2>
                        <ul className={styles.valuesList}>
                            {values.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className={styles.teamSection}>
                <h2 className={styles.teamTitle}>Meet Our Team</h2>
                <p className={styles.teamDescription}>
                    50+ Strong passionate team of young and driven minds with expertise across multiple technologies
                </p>

                <div className={styles.teamGrid}>
                    {teamStats.map((stat, index) => (
                        <div key={index} className={styles.teamCard}>
                            <div className={styles.teamImageIconWrapper}>
                                <img src={stat.icon} alt={stat.title} className={styles.teamImageIcon} />
                            </div>
                            <h3 className={styles.teamCardTitle}>{stat.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
