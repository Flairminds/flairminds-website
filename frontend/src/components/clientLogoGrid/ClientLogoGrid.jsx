import styles from './ClientLogoGrid.module.css';

import firstPolicy from '../../assets/clients-logo/FirstPolicy.jpg';
import terrafirm from '../../assets/clients-logo/Terrafirm.png';
import cloudify from '../../assets/clients-logo/cloudify.png';
import fujitsu from '../../assets/clients-logo/fujitsu.png';
import greenfinch from '../../assets/clients-logo/greenfinch.png';
import iksula from '../../assets/clients-logo/iksula.png';
import kale from '../../assets/clients-logo/kale.jpg';
import messung from '../../assets/clients-logo/messung.jpg';
import minbowser from '../../assets/clients-logo/minbowser.png';
import pepper from '../../assets/clients-logo/pepper-logo.png';
import qualtech from '../../assets/clients-logo/qualtech.png';
import turnsku from '../../assets/clients-logo/turnsku.png';
import vaish from '../../assets/clients-logo/vaish.png';
import vinculum from '../../assets/clients-logo/vinculum.png';
import voxomos from '../../assets/clients-logo/voxomos.jpg';
import TechBackground from '../clientLogos/TechBackground';

const clients = [
    { src: fujitsu, alt: 'Fujitsu' },
    { src: messung, alt: 'Messung' },
    { src: iksula, alt: 'Iksula' },
    { src: vinculum, alt: 'Vinculum' },
    { src: minbowser, alt: 'Minbowser' },
    { src: kale, alt: 'Kale Logistics' },
    { src: qualtech, alt: 'Qualtech' },
    { src: turnsku, alt: 'Turnsku' },
    { src: pepper, alt: 'Pepper' },
    // { src: vaish,       alt: 'Vaish' },
    { src: cloudify, alt: 'Cloudify' },
    { src: voxomos, alt: 'Voxomos' },
    { src: firstPolicy, alt: 'First Policy' },
    { src: greenfinch, alt: 'Greenfinch' },
    { src: terrafirm, alt: 'Terrafirm' },
];

// Duplicate for seamless infinite loop
const doubled = [...clients, ...clients];

const ClientLogoGrid = () => (
    <section className={styles.section}>
        <div className={styles.inner}>
            <p className={styles.eyebrow}>TRUSTED BY INDUSTRY LEADERS</p>

            <div className={styles.sliderWrapper}>
                {/* Fade edges */}
                <div className={styles.fade} data-side="left" aria-hidden="true" />
                <div className={styles.fade} data-side="right" aria-hidden="true" />

                <div className={styles.track}>
                    {doubled.map(({ src, alt }, i) => (
                        <div key={`${alt}-${i}`} className={styles.logoCard}>
                            <img
                                src={src}
                                alt={alt}
                                className={styles.logo}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default ClientLogoGrid;
