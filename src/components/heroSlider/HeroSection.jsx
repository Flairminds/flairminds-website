import styles from './HeroSection.module.css';
import archImage from '../../assets/software_architecture.png';
import { FaTerminal, FaServer, FaCogs, FaNetworkWired, FaCodeBranch } from 'react-icons/fa';

const HeroSection = () => {
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
                        <div className={styles.systemTag}>
                            <FaTerminal className={styles.tagIcon} />
                            <span>FL-SYS_V4.0_DEPLOYED</span>
                        </div>

                        <h1 className={styles.mainHeading}>
                            Engineering the <br />
                            <span className={styles.glowText}>Next Generation</span> <br />
                            of Digital Infrastructure
                        </h1>

                        <div className={styles.terminalWindow}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.dots}><span></span><span></span><span></span></div>
                                <div className={styles.terminalTitle}>flairminds_engine --active</div>
                            </div>
                            <div className={styles.terminalBody}>
                                <p className={styles.codeLine}><span className={styles.label}>&gt; initializing</span> scalability_module...</p>
                                <p className={styles.codeLine}><span className={styles.label}>&gt; status:</span> 200 OK | ready to deploy</p>
                                <p className={styles.codeLine}><span className={styles.label}>&gt; expertise:</span> AI, Cloud, Enterprise Software</p>
                                <div className={styles.cursor}></div>
                            </div>
                        </div>

                        <div className={styles.actionRow}>
                            <button className={styles.primaryBtn}>START PROJECT</button>
                            <button className={styles.secondaryBtn}>VIEW TECH STACK</button>
                        </div>
                    </div>

                    {/* Right: Holographic Architecture */}
                    <div className={styles.visualSection}>
                        <div className={styles.hologramFrame}>
                            <img src={archImage} alt="Enterprise Architecture" className={styles.archVisual} />

                            {/* Floating Data Nodes */}
                            <div className={`${styles.dataNode} ${styles.topRight}`}>
                                <FaServer /> <span>EDGE_NODES</span>
                            </div>
                            <div className={`${styles.dataNode} ${styles.bottomLeft}`}>
                                <FaNetworkWired /> <span>MESH_NET</span>
                            </div>

                            <div className={styles.hologramBase}></div>
                        </div>

                        {/* System Monitor Sidebar */}
                        <div className={styles.monitorSidebar}>
                            <div className={styles.monitorItem}>
                                <span className={styles.monitorLabel}>CPU_LOAD</span>
                                <div className={styles.barWrapper}><div className={styles.barFill}></div></div>
                            </div>
                            <div className={styles.monitorItem}>
                                <span className={styles.monitorLabel}>DATA_STREAM</span>
                                <div className={styles.barWrapper}><div className={`${styles.barFill} ${styles.active}`}></div></div>
                            </div>
                            <div className={styles.monitorItem}>
                                <div className={styles.connectivity}>
                                    <FaCodeBranch />
                                    <span>CONNECTED_NODES: 128</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Side Labels */}
            <div className={styles.sideLabelLeft}>CORE_DEVELOPMENT_UNIT</div>
            <div className={styles.sideLabelRight}>EST_2024_FLAIRMINDS</div>
        </section>
    );
};

export default HeroSection;
