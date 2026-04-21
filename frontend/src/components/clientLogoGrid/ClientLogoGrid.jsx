import { useRef, useEffect } from 'react';
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
import cloudifyAlt from '../../assets/clients-logo/cloudify.png';
import vinculum from '../../assets/clients-logo/vinculum.png';
import voxomos from '../../assets/clients-logo/voxomos.jpg';

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
    { src: cloudify, alt: 'Cloudify' },
    { src: voxomos, alt: 'Voxomos' },
    { src: firstPolicy, alt: 'First Policy' },
    { src: greenfinch, alt: 'Greenfinch' },
    { src: terrafirm, alt: 'Terrafirm' },
];

// Duplicate for seamless infinite loop
const doubled = [...clients, ...clients];

const ClientLogoGrid = () => {
    const wrapperRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        let rafId;

        const tick = () => {
            const wrapper = wrapperRef.current;
            const track = trackRef.current;
            if (!wrapper || !track) { rafId = requestAnimationFrame(tick); return; }

            const wRect = wrapper.getBoundingClientRect();
            const cx = wRect.left + wRect.width / 2;   // visual center X
            const halfW = wRect.width / 2;

            const cards = track.children;
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                const cRect = card.getBoundingClientRect();
                const cardCx = cRect.left + cRect.width / 2;

                // Normalise distance: 0 = perfectly centered, 1 = at edge
                const norm = Math.min(Math.abs(cx - cardCx) / halfW, 1);

                // Cosine bell: smooth transition from center to edges
                const t = Math.cos((norm * Math.PI) / 2);   // 1→0
                const scale = (0.62 + 0.5 * t).toFixed(3);     // 1.0 → 0.62
                const opacity = (0.28 + 0.72 * t).toFixed(3);     // 1.0 → 0.28

                card.style.transform = `scale(${scale})`;
                card.style.opacity = opacity;
            }

            rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <p className={styles.eyebrow}>TRUSTED BY INDUSTRY LEADERS</p>

                <div className={styles.sliderWrapper} ref={wrapperRef}>
                    {/* Soft fade masks */}
                    <div className={styles.fade} data-side="left" aria-hidden="true" />
                    <div className={styles.fade} data-side="right" aria-hidden="true" />

                    <div className={styles.track} ref={trackRef}>
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
};

export default ClientLogoGrid;
