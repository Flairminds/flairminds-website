import styles from './ClientLogos.module.css';
import clientLogosImage from '../../assets/client_logos.webp';
import TechBackground from './TechBackground';

const ClientLogos = () => {
    return (
        <section className={styles.clientLogosSection}>
            <TechBackground />
            <div className={styles.container}>
                {/* <h2 className={styles.sectionTitle}>OUR TRUSTED GLOBAL CLIENTS</h2> */}
                <div className={styles.imageContainer}>
                    <img
                        src={clientLogosImage}
                        alt="Our Clients - Trusted Partners"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
