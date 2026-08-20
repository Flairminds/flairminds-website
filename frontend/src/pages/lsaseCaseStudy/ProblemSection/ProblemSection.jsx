import React from 'react';
import styles from './ProblemSection.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';

const problems = [
    {
        num: '01',
        title: 'No early signal.',
        desc: 'Retention, profitability, and risk only become obvious months later — long after the sales window to influence them has closed.',
    },
    {
        num: '02',
        title: 'Flat prioritization.',
        desc: 'Without a ranking, reps default to first-in-first-out or gut feel, not the leads most likely to convert into long-term revenue.',
    },
    {
        num: '03',
        title: 'Black-box distrust.',
        desc: "Even where scoring models exist, sales and compliance teams won't act on a number they can't explain to a lead — or a regulator.",
    },
];

const ProblemSection = () => {
    return (
        <section className={styles.problemSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <FaExclamationTriangle className={styles.titleIcon} />
                    The Problem
                </h2>
                <p className={styles.sectionSubtitle}>
                    Not every converted lead is a good lead — but every rep treats them the same. A brokerage's
                    CRM fills with newly converted accounts every day; without a way to tell them apart early,
                    sales effort gets spread evenly across leads worth very different amounts.
                </p>
            </div>
            <div className={styles.problemGrid}>
                {problems.map((p, i) => (
                    <div key={i} className={styles.problemCard}>
                        <div className={styles.problemNum}>{p.num}</div>
                        <p><strong>{p.title}</strong> {p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProblemSection;
