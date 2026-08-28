import React from 'react';
import styles from './TrustSection.module.css';
import { FaEye } from 'react-icons/fa';

const trustCards = [
    {
        title: 'Explains itself, per lead',
        desc: 'Every individual score ships with SHAP-driven "drivers" and "hurts" — the specific behaviors pushing this lead\'s score up or down — not just a global feature list.',
        tags: [{ label: 'Drivers', kind: 'good' }, { label: 'Hurts', kind: 'bad' }, { label: 'Per-lead', kind: '' }],
    },
    {
        title: 'Never goes dark',
        desc: 'If live explanation computation fails, the API falls back through native model importance, then to cached results — the dashboard keeps working instead of showing an error.',
        tags: [{ label: '3-stage fallback', kind: '' }],
    },
    {
        title: 'Nothing is overwritten',
        desc: "Every batch of leads and predictions is versioned rather than deleted, so a lead's score history stays intact — feeding future win/loss analysis instead of erasing it.",
        tags: [{ label: 'Versioned history', kind: '' }],
    },
    {
        title: 'Benchmarked, not assumed',
        desc: "Each indicator is trained and compared across six model families before the best performer is selected and shipped — the model isn't a guess, it's a result.",
        tags: [{ label: 'CatBoost', kind: '' }, { label: 'XGBoost', kind: '' }, { label: '+4 more', kind: '' }],
    },
];

const TrustSection = () => {
    return (
        <section className={styles.trustSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <FaEye className={styles.titleIconLight} />
                    Why Teams Trust the Score
                </h2>
                <p className={styles.sectionSubtitleLight}>
                    LSASE is built so every number a rep or manager sees can be defended — to a sales lead,
                    to compliance, or to a customer.
                </p>
            </div>
            <div className={styles.trustGrid}>
                {trustCards.map((c, i) => (
                    <div key={i} className={styles.trustCard}>
                        <h3>{c.title}</h3>
                        <p>{c.desc}</p>
                        <div className={styles.tagRow}>
                            {c.tags.map((t, j) => (
                                <span key={j} className={`${styles.tag} ${t.kind === 'good' ? styles.tagGood : t.kind === 'bad' ? styles.tagBad : ''}`}>{t.label}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustSection;
