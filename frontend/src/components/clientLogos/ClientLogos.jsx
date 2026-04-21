import styles from './ClientLogos.module.css';
import clientLogosImage from '../../assets/client_logos.webp';
import TechBackground from './TechBackground';
import ClientLogoGrid from '../clientLogoGrid/ClientLogoGrid';

const ClientLogos = () => {
    return (
        <section className={styles.clientLogosSection}>
            <TechBackground />
            <div className={styles.container}>
                <ClientLogoGrid />
                {/* <h2 className={styles.sectionTitle}>OUR TRUSTED GLOBAL CLIENTS</h2> */}
                {/* <div className={styles.imageContainer}>
                    <img
                        src={clientLogosImage}
                        alt="Our Clients - Trusted Partners"
                        className={styles.image}
                        width={1200}
                        height={200}
                        loading="lazy"
                        decoding="async"
                    />
                </div> */}
            </div>
        </section>
    );
};

export default ClientLogos;
