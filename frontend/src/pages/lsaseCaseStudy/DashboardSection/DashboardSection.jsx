import React from 'react';
import styles from './DashboardSection.module.css';
import { FaChartLine } from 'react-icons/fa';

const featureDrivers = [
    { label: 'Net deposit ratio', width: '100%', val: '0.24' },
    { label: 'Trades per day', width: '79%', val: '0.19' },
    { label: 'Withdrawal frequency', width: '63%', val: '0.15' },
    { label: 'Days since first deposit', width: '50%', val: '0.12' },
];

const funnelData = [
    { label: 'Synced leads', width: '100%', color: '#9DC3F2', val: '12,480' },
    { label: 'Profile scored', width: '82%', color: '#5598e7', val: '10,260' },
    { label: 'High-priority flag', width: '35%', color: '#2a78d6', val: '3,620' },
    { label: 'Active, retained trader', width: '16%', color: '#1c5cab', val: '1,480' },
];

const modelHealth = [
    { name: 'Retention Efficiency', model: 'CatBoost' },
    { name: 'Liquidity Stress', model: 'CatBoost' },
    { name: 'Trading Profitability', model: 'CatBoost' },
    { name: 'Time-to-Conversion', model: 'XGBoost' },
];

const DashboardSection = () => {
    return (
        <section className={styles.dashboardSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <FaChartLine className={styles.titleIcon} />
                    Inside the Dashboard
                </h2>
                <p className={styles.sectionSubtitle}>
                    The same React dashboard reps use daily — score distribution, feature drivers, funnel
                    health, and live model status in one screen. Figures below are a representative session,
                    not an audited production report.
                </p>
            </div>

            <div className={styles.statRow}>
                <div className={styles.statTile}>
                    <div className={styles.statK}>Leads Scored</div>
                    <div className={styles.statV}>12,480</div>
                    <div className={styles.statD}>▲ 6.2% vs. last sync</div>
                </div>
                <div className={styles.statTile}>
                    <div className={styles.statK}>Avg. Composite Score</div>
                    <div className={styles.statV}>486</div>
                    <div className={`${styles.statD} ${styles.flat}`}>of 1000</div>
                </div>
                <div className={styles.statTile}>
                    <div className={styles.statK}>High-Priority Share</div>
                    <div className={styles.statV}>11.9%</div>
                    <div className={styles.statD}>Score ≥ 700</div>
                </div>
                <div className={styles.statTile}>
                    <div className={styles.statK}>Models Live</div>
                    <div className={styles.statV}>4 / 4</div>
                    <div className={`${styles.statD} ${styles.flat}`}>Retention · Liquidity · Trading · TTC</div>
                </div>
            </div>

            {/* Feature row 1: score distribution + drivers */}
            <div className={styles.featureRow}>
                <div className={styles.mockCard}>
                    <div className={styles.mockChrome}>
                        <span className={styles.mockDot} /><span className={styles.mockDot} /><span className={styles.mockDot} />
                        <span className={styles.mockTitle}>Composite score distribution</span>
                    </div>
                    <div className={styles.mockBody}>
                        <svg viewBox="0 0 460 170" width="100%" role="img" aria-label="Bar chart of lead counts across five composite score bands, rising toward higher scores">
                            <line x1="20" y1="140" x2="440" y2="140" stroke="#E2E5EA" strokeWidth="1" />
                            <rect x="30" y="98" width="66" height="42" rx="4" fill="#9DC3F2" />
                            <rect x="112" y="72" width="66" height="68" rx="4" fill="#5598e7" />
                            <rect x="194" y="42" width="66" height="98" rx="4" fill="#2a78d6" />
                            <rect x="276" y="86" width="66" height="54" rx="4" fill="#5598e7" />
                            <rect x="358" y="116" width="66" height="24" rx="4" fill="#1c5cab" />
                        </svg>
                        <div className={styles.mockDrivers}>
                            {featureDrivers.map((f, i) => (
                                <div key={i} className={styles.mockDriverRow}>
                                    <span className={styles.mockDriverLabel}>{f.label}</span>
                                    <span className={styles.mockDriverTrack}><span className={styles.mockDriverFill} style={{ width: f.width }} /></span>
                                    <span className={styles.mockDriverVal}>{f.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.featureText}>
                    <span className={styles.featureEyebrow}>Score Distribution &amp; Drivers</span>
                    <h3>See exactly where every lead falls — and why</h3>
                    <p>
                        Reps open the day to a live histogram of every non-converted lead across five score bands,
                        alongside the SHAP-ranked signals — net deposit ratio, trade frequency, withdrawal
                        behavior — actually driving those numbers, so the ranking is never a black box.
                    </p>
                </div>
            </div>

            {/* Feature row 2: funnel + model health */}
            <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
                <div className={styles.mockCard}>
                    <div className={styles.mockChrome}>
                        <span className={styles.mockDot} /><span className={styles.mockDot} /><span className={styles.mockDot} />
                        <span className={styles.mockTitle}>Conversion funnel &amp; model health</span>
                    </div>
                    <div className={styles.mockBody}>
                        <div className={styles.mockFunnel}>
                            {funnelData.map((f, i) => (
                                <div key={i} className={styles.mockFunnelRow}>
                                    <span className={styles.mockFunnelLabel}>{f.label}</span>
                                    <span className={styles.mockFunnelBarWrap}>
                                        <span className={styles.mockFunnelBar} style={{ width: f.width, background: f.color }} />
                                    </span>
                                    <span className={styles.mockFunnelVal}>{f.val}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.mockHealthRow}>
                            {modelHealth.map((m, i) => (
                                <div key={i} className={styles.mockHealthChip}>
                                    <span className={styles.mockStatusDot} />
                                    <span>{m.name.split(' ')[0]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.featureText}>
                    <span className={styles.featureEyebrow}>Pipeline Visibility</span>
                    <h3>Track leads from sync to retained trader — model health included</h3>
                    <p>
                        The same screen shows where leads drop off between sync, scoring, and high-priority
                        flagging, plus live status for all four indicator models — CatBoost and XGBoost —
                        benchmarked and re-tuned automatically as new conversions land.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DashboardSection;
