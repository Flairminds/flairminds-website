import React from 'react';
import styles from './TechStackSection.module.css';
import { FaCode, FaLock } from 'react-icons/fa';
import { SiReact, SiPython, SiScikitlearn, SiMysql, SiDocker, SiApachespark } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const techStack = [
    { icon: <SiReact />, label: 'React + Vite' },
    { icon: <FaCode />, label: 'FastAPI + Uvicorn' },
    { icon: <GiArtificialIntelligence />, label: 'CatBoost + XGBoost' },
    { icon: <SiScikitlearn />, label: 'scikit-learn' },
    { icon: <FaLock />, label: 'JWT Authentication' },
    { icon: <SiPython />, label: 'Optuna Tuning' },
    { icon: <SiApachespark />, label: 'PySpark ETL' },
    { icon: <SiMysql />, label: 'MySQL 8.0' },
    { icon: <SiDocker />, label: 'Docker Compose' },
];

const TechStackSection = () => {
    return (
        <section className={styles.techSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <FaCode className={styles.titleIcon} />
                    Technology Stack
                </h2>
                <p className={styles.sectionSubtitle}>
                    Open-source. Fully containerized. No vendor lock-in.
                </p>
            </div>
            <div className={styles.techGrid}>
                {techStack.map((t, i) => (
                    <div key={i} className={styles.techCard}>
                        <span className={styles.techIcon}>{t.icon}</span>
                        <span className={styles.techLabel}>{t.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStackSection;
