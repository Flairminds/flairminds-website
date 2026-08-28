import React from 'react';
import styles from './ImpactSection.module.css';
import { FaChartLine } from 'react-icons/fa';

const beforeList = [
    'Leads worked in the order they arrived, not the order they matter',
    "Retention and risk only visible after the fact, once it's too late to act",
    "Prioritization lives in a rep's head — leaves when they do",
    "No consistent way to explain why one lead got a call and another didn't",
];

const afterList = [
    'Every lead pre-ranked on a single, comparable 1–1000 score',
    'Retention, risk, and trading signal available from week one, not month three',
    'Prioritization logic lives in a governed, versioned pipeline — repeatable across the whole team',
    'Every score comes with a plain-language "why," ready to defend to a manager or auditor',
];

const ImpactSection = () => {
    return (
        <section className={styles.impactSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <FaChartLine className={styles.titleIcon} />
                    What Changes on the Sales Floor
                </h2>
                <p className={styles.sectionSubtitle}>
                    The shift isn't just a new dashboard — it's what a rep does in the first five minutes of their day.
                </p>
            </div>
            <div className={styles.compareGrid}>
                <div className={`${styles.compareCol} ${styles.compareColBefore}`}>
                    <h3>Before — Manual Triage</h3>
                    <ul className={styles.compareList}>
                        {beforeList.map((li, i) => <li key={i}>{li}</li>)}
                    </ul>
                </div>
                <div className={`${styles.compareCol} ${styles.compareColAfter}`}>
                    <h3>After — LSASE-Ranked Worklist</h3>
                    <ul className={styles.compareList}>
                        {afterList.map((li, i) => <li key={i}>{li}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
