import React from 'react';
import styles from './RoadmapSection.module.css';
import { FaRocket } from 'react-icons/fa';

const roadmapItems = [
    { tag: 'Security', title: 'Managed secrets', desc: 'Move demo credentials into a secrets manager (Vault / AWS Secrets Manager) ahead of any customer data.' },
    { tag: 'Reliability', title: 'Live model monitoring', desc: 'Add drift detection and performance dashboards so degrading scores are caught automatically, not discovered by a rep.' },
    { tag: 'Delivery', title: 'Hardened CI/CD', desc: 'Canary releases and automated rollback for model and API changes, building on the existing GitHub Actions pipeline.' },
    { tag: 'Scale', title: 'Real-time feature store', desc: 'Move from batch Parquet artifacts to a low-latency store (Feast / Delta Lake) as lead volume grows.' },
];

const RoadmapSection = () => {
    return (
        <section className={styles.roadmapSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <FaRocket className={styles.titleIconLight} />
                    Where This Stands
                </h2>
                <p className={styles.sectionSubtitleLight}>
                    LSASE runs today as a complete, demo-validated system: real ETL, real models, real
                    dashboard. Scaling it into a production revenue system is a defined next phase, not an
                    open question.
                </p>
            </div>
            <div className={styles.roadmapGrid}>
                {roadmapItems.map((item, i) => (
                    <div key={i} className={styles.roadmapCard}>
                        <span className={styles.roadmapTag}>{item.tag}</span>
                        <div className={styles.roadmapTitle}>{item.title}</div>
                        <p className={styles.roadmapDesc}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RoadmapSection;
