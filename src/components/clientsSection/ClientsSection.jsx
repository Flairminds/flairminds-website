import styles from './ClientsSection.module.css';
import collabImage from '../../assets/tech_collaboration.png';
import { FaUserShield, FaGlobe, FaCertificate } from 'react-icons/fa';

const ClientsSection = () => {
    const trustFactors = [
        {
            icon: <FaUserShield />,
            title: "Security & Trust",
            description: "Adhering to global compliance and security standards."
        },
        {
            icon: <FaGlobe />,
            title: "Global Scalability",
            description: "Solutions built to run seamlessly across borders and cultures."
        },
        {
            icon: <FaCertificate />,
            title: "Certified Excellence",
            description: "Industry-standard methodologies (Agile, DevSecOps) for quality."
        }
    ];

    return (
        <section className={styles.clientsSection}>
            <div className={styles.container}>
                <div className={styles.gridContainer}>
                    {/* Left: Content */}
                    <div className={styles.textCol}>
                        <div className={styles.trustBadge}>TRUSTED PARTNERSHIPS</div>
                        <h2 className={styles.sectionHeading}>Empowering Visionaries Across <span className={styles.highlight}>Agencies & Enterprises</span></h2>
                        <p className={styles.description}>
                            We don't just build software; we build the technological foundation for the world's most innovative companies.
                            From disruptive startups to Fortune 500 giants.
                        </p>

                        <div className={styles.trustGrid}>
                            {trustFactors.map((factor, index) => (
                                <div key={index} className={styles.trustItem}>
                                    <div className={styles.iconBox}>{factor.icon}</div>
                                    <div className={styles.factorInfo}>
                                        <h4 className={styles.factorTitle}>{factor.title}</h4>
                                        <p className={styles.factorDesc}>{factor.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className={styles.imageCol}>
                        <div className={styles.visualContainer}>
                            <img
                                src={collabImage}
                                alt="Modern Team Collaboration"
                                className={styles.clientsImage}
                                width={600}
                                height={400}
                                loading="lazy"
                                decoding="async"
                            />
                            {/* Accent elements */}
                            <div className={styles.decorationDot}></div>
                            <div className={styles.decorationSquare}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
