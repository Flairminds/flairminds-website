import React from 'react';
import styles from './SolutionSection.module.css';
import { MdAutoAwesome } from 'react-icons/md';

const indicators = [
    {
        letter: 'R',
        title: 'Retention Efficiency',
        desc: 'Net position relative to deposits — an early read on whether a customer is likely to stay funded.',
        weight: '40% of composite',
    },
    {
        letter: 'L',
        title: 'Liquidity Stress',
        desc: 'Withdrawal behavior and negative-balance patterns that flag accounts under financial strain.',
        weight: '30% of composite',
    },
    {
        letter: 'T',
        title: 'Trading Profitability',
        desc: 'Profitability normalized by engagement — separates active, valuable traders from one-off dabblers.',
        weight: '30% of composite',
    },
    {
        letter: 'C',
        title: 'Time-to-Conversion',
        desc: 'Predicted days to convert, surfaced separately to sequence outreach on leads still in the pipeline.',
        weight: 'Sequencing signal',
    },
];

const SolutionSection = () => {
    return (
        <section className={styles.solutionSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <MdAutoAwesome className={styles.titleIconLight} />
                    Four Interpretable Indicators, One Prioritized Score
                </h2>
                <p className={styles.sectionSubtitleLight}>
                    LSASE reads first-month post-conversion behavior — deposits, withdrawals, trading activity —
                    and produces four calibrated indicator scores per lead, then blends them into a single
                    composite ranking sales can act on immediately.
                </p>
            </div>
            <div className={styles.indicatorGrid}>
                {indicators.map((ind, i) => (
                    <div key={i} className={styles.indicatorCard}>
                        <span className={styles.indicatorChip}>{ind.letter}</span>
                        <h3>{ind.title}</h3>
                        <p>{ind.desc}</p>
                        <span className={styles.indicatorWeight}>{ind.weight}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SolutionSection;
