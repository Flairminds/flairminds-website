import styles from './HeroSection.module.css';
import aiSolutionsImage from '../../assets/ai_solutions_hero.webp';
import { FaTerminal, FaServer, FaCogs, FaNetworkWired, FaCodeBranch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.heroWrapper}>
            {/* Ambient Background with Particles */}
            <div className={styles.ambientOverlay}>
                <div className={styles.particleField}></div>
                <div className={styles.radialGlow}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.dashboardGrid}>

                    {/* Left: Command Console */}
                    <div className={styles.consoleSection}>

                        <h1 className={styles.mainHeading}>
                            Engineering the <br />
                            <span className={styles.glowText}>Next Generation</span> <br />
                            of Digital Infrastructure
                        </h1>

                        <div className={styles.systemTag}>
                            <FaTerminal className={styles.tagIcon} />
                            <span className={styles.flickerText}>FL_SYS_V4.0_DEPLOYED</span>
                        </div>

                        <div className={styles.terminalWindow}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.dots}><span></span><span></span><span></span></div>
                                <div className={styles.terminalTitle}>flairminds_engine --active</div>
                            </div>
                            <div className={styles.terminalBody}>
                                <p className={styles.codeLine}><span className={styles.label}>&gt; initializing</span> ai_integration_module...</p>
                                <p className={styles.codeLine}><span className={styles.label}>&gt; status:</span> 200 OK | systems optimized</p>
                                <p className={styles.codeLine}><span className={styles.label}>&gt; expertise:</span> AI, Cloud, Dynamic Solutions</p>
                                <div className={styles.cursor}></div>
                            </div>
                        </div>

                        <div className={styles.actionRow}>
                            <button className={styles.primaryBtn} onClick={() => navigate('/contact')}>START YOUR JOURNEY</button>
                        </div>
                    </div>

                    {/* Right: Holographic AI Integration Visual */}
                    <div className={styles.visualSection}>
                        <div className={styles.hologramFrame}>
                            <img src={aiSolutionsImage} alt="AI Integration Solutions" className={styles.archVisual} />

                            {/* Floating Data Nodes */}
                            <div className={`${styles.dataNode} ${styles.topRight}`}>
                                <FaCogs /> <span>AI_CORE_READY</span>
                            </div>
                            <div className={`${styles.dataNode} ${styles.bottomLeft}`}>
                                <FaCodeBranch /> <span>INTELLIGENT_FLOW</span>
                            </div>

                            <div className={styles.hologramBase}></div>
                        </div>

                        {/* System Monitor Sidebar */}
                        <div className={styles.monitorSidebar}>
                            <div className={styles.monitorItem}>
                                <span className={styles.monitorLabel}>AI_LOAD_CAPACITY</span>
                                <div className={styles.barWrapper}><div className={styles.barFill}></div></div>
                            </div>
                            <div className={styles.monitorItem}>
                                <span className={styles.monitorLabel}>INTELLIGENCE_STREAM</span>
                                <div className={styles.barWrapper}><div className={`${styles.barFill} ${styles.active}`}></div></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Side Labels */}
            <div className={styles.sideLabelLeft}>AI_SOLUTIONS_UNIT</div>
            <div className={styles.sideLabelRight}>DYNAMIC_ENTERPRISE_CORE</div>
        </section>
    );
};

export default HeroSection;
