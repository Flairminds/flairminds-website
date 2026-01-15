import styles from './ClientLogos.module.css';
import clientLogosImage from '../../assets/client_logos.png';

const ClientLogos = () => {
    return (
        <section className={styles.clientLogosSection}>
            <div className={styles.imageContainer}>
                <img
                    src={clientLogosImage}
                    alt="Our Clients - Trusted Partners"
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default ClientLogos;
