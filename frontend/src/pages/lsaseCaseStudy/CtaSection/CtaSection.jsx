import React from 'react';
import styles from './CtaSection.module.css';
import { FaBullseye, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
                <FaBullseye className={styles.ctaIcon} />
                <h2 className={styles.ctaTitle}>Stop Scoring Leads by Instinct. Start Scoring Them by Evidence.</h2>
                <p className={styles.ctaText}>
                    LSASE is running today against demo data end to end — extraction, modeling, and a live
                    dashboard. The next step is a production readiness phase against live customer data.
                </p>
                <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
                    Discuss Your Lead Scoring Needs <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default CtaSection;
