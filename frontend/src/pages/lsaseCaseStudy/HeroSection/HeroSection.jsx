import React from 'react';
import styles from './HeroSection.module.css';
import { FaBullseye } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroBadge}>
                    <FaBullseye className={styles.heroBadgeIcon} />
                    <span>CASE STUDY · LEAD SCORING &amp; SALES EFFICIENCY</span>
                </div>
                <h1 className={styles.heroTitle}>
                    Know which lead is worth the call — <mark>before you dial</mark>.
                </h1>
                <p className={styles.heroSubtitle}>
                    LSASE scores every converted lead on retention, liquidity risk, and trading activity,
                    blends it into one explainable 1–1000 priority number, and puts it in front of your
                    sales team automatically.
                </p>
                <div className={styles.heroStats}>
                    <div className={styles.heroStat}>
                        <span className={styles.heroStatNumber}>1–1000</span>
                        <span className={styles.heroStatLabel}>Composite Priority Score</span>
                    </div>
                    <div className={styles.heroStatDivider} />
                    <div className={styles.heroStat}>
                        <span className={styles.heroStatNumber}>4</span>
                        <span className={styles.heroStatLabel}>Explainable ML Models</span>
                    </div>
                </div>
                <div className={styles.heroTags}>
                    <span className={styles.heroTag} style={{ color: '#E3A63E', borderColor: 'rgba(227,166,62,0.4)', background: 'rgba(227,166,62,0.08)' }}>Trading &amp; Brokerage CRM</span>
                    <span className={styles.heroTag} style={{ color: '#60A5FA', borderColor: 'rgba(96,165,250,0.35)', background: 'rgba(96,165,250,0.08)' }}>Lead Scoring</span>
                    <span className={styles.heroTag} style={{ color: '#34D399', borderColor: 'rgba(52,211,153,0.35)', background: 'rgba(52,211,153,0.08)' }}>SHAP Explainability</span>
                    <span className={styles.heroTag} style={{ color: '#A78BFA', borderColor: 'rgba(167,139,250,0.35)', background: 'rgba(167,139,250,0.08)' }}>Machine Learning</span>
                    <span className={styles.heroTag} style={{ color: '#94A3B8', borderColor: 'rgba(148,163,184,0.3)', background: 'rgba(148,163,184,0.08)' }}>Working MVP</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
