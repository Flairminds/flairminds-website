import styles from './AboutUs.module.css';
import aboutBgImage from '../../assets/about_us_bg.jpg';

const AboutUs = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.backgroundImage}>
                <img src={aboutBgImage} alt="Modern Architecture" className={styles.bgImage} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h2 className={styles.title}>ABOUT US</h2>

                <div className={styles.textContent}>
                    <p className={styles.paragraph}>
                        At FlairMinds Software, we are committed to driving digital transformation through innovative IT solutions that prioritize scalability, efficiency, and resilience. Our expertise lies in software engineering optimization, helping businesses streamline operations, enhance product reliability, and accelerate time-to-market.
                    </p>

                    <p className={styles.paragraph}>
                        By leveraging cutting-edge technologies such as AI, cloud computing, and automation, we craft tailored, high-performance software solutions that align with your business needs. Our client-first approach ensures seamless collaboration, deep industry insights, and technology-driven strategies that future-proof your operations.
                    </p>

                    <p className={styles.highlight}>
                        Empower your business with FlairMinds Software – where innovation meets impact.
                    </p>

                    <div className={styles.callToAction}>
                        <p className={styles.ctaText}>
                            Transform Your Tech Landscape – Let's Build the Future Together!<br />
                            Explore Our Solutions & See the Impact in Action!
                        </p>

                        <button className={styles.exploreButton}>
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
