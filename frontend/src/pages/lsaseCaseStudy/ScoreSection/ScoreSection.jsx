import React, { useEffect, useRef, useState } from 'react';
import styles from './ScoreSection.module.css';
import { FaBullseye } from 'react-icons/fa';

const bands = [
    {
        min: 700,
        label: 'High Priority',
        color: '#C4831A',
        colorSoft: 'rgba(196, 131, 26, 0.12)',
        desc: "This lead sits in the top band of active leads — strong projected retention, healthy trading engagement, low liquidity risk. Every score ships with a plain-language explanation, so the rep opens the call already knowing why this account matters.",
    },
    {
        min: 400,
        label: 'Medium Priority',
        color: '#0A9396',
        colorSoft: 'rgba(10, 147, 150, 0.12)',
        desc: "This lead sits mid-pipeline — average retention signal, moderate trading activity, and no immediate risk flags. Worth a call once the high-priority queue is cleared.",
    },
    {
        min: 0,
        label: 'Low Priority',
        color: '#B23A2E',
        colorSoft: 'rgba(178, 58, 46, 0.12)',
        desc: "This lead sits in the bottom band — weak retention signal, elevated liquidity risk, and almost no trading engagement. Deprioritize unless the liquidity picture improves.",
    },
];

const cyclePoints = [742, 480, 220];
const CYCLE_MS = 4500;
const TWEEN_MS = 900;

const getBand = (score) => bands.find((b) => score >= b.min) || bands[bands.length - 1];

const getMetrics = (score) => {
    const f = score / 1000;
    return {
        retention: Math.min(1, Math.max(0, f * 1.05)),
        liquidity: Math.min(1, Math.max(0, 1 - f * 0.95)),
        trading: Math.min(1, Math.max(0, f * 0.98)),
    };
};

const ScoreSection = () => {
    const [cycleIndex, setCycleIndex] = useState(0);
    const [autoScore, setAutoScore] = useState(cyclePoints[0]);
    const [hoverScore, setHoverScore] = useState(null);
    const rafRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        if (hoverScore !== null) return undefined;
        const timer = setInterval(() => {
            setCycleIndex((i) => (i + 1) % cyclePoints.length);
        }, CYCLE_MS);
        return () => clearInterval(timer);
    }, [hoverScore]);

    useEffect(() => {
        const target = cyclePoints[cycleIndex];
        const start = autoScore;
        const startTime = performance.now();

        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        const tick = (now) => {
            const t = Math.min(1, (now - startTime) / TWEEN_MS);
            const eased = 1 - Math.pow(1 - t, 3);
            setAutoScore(Math.round(start + (target - start) * eased));
            if (t < 1) {
                rafRef.current = requestAnimationFrame(tick);
            }
        };
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cycleIndex]);

    const handleGaugeMove = (e) => {
        const svg = svgRef.current;
        if (!svg) return;
        const rect = svg.getBoundingClientRect();
        const vbX = ((e.clientX - rect.left) / rect.width) * 300;
        const vbY = ((e.clientY - rect.top) / rect.height) * 180;
        const dx = vbX - 150;
        const dy = 160 - vbY;
        let theta = Math.atan2(dy, dx) * (180 / Math.PI);
        theta = Math.max(0, Math.min(180, theta));
        const fraction = 1 - theta / 180;
        setHoverScore(Math.round(1 + fraction * 999));
    };

    const handleGaugeLeave = () => setHoverScore(null);

    const displayScore = hoverScore !== null ? hoverScore : autoScore;
    const band = getBand(displayScore);
    const metrics = getMetrics(displayScore);
    const fraction = Math.max(0, Math.min(1, displayScore / 1000));
    const dashOffset = 100 - fraction * 100;

    return (
        <section className={styles.scoreSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <FaBullseye className={styles.titleIcon} />
                    One Number a Rep Can Act On in Seconds
                </h2>
            </div>
            <div className={styles.scoreCard}>
                <div className={styles.gaugeWrap}>
                    <svg
                        ref={svgRef}
                        viewBox="0 0 300 180"
                        width="100%"
                        role="img"
                        aria-label={`Interactive gauge, currently showing a composite lead score of ${displayScore} out of 1000. Move the cursor across the arc to preview other scores.`}
                        className={styles.gaugeHoverable}
                        onMouseMove={handleGaugeMove}
                        onMouseLeave={handleGaugeLeave}
                    >
                        <path d="M 30 160 A 120 120 0 0 1 270 160" fill="none" stroke="#F1F5F9" strokeWidth="18" strokeLinecap="round" />
                        <path
                            d="M 30 160 A 120 120 0 0 1 270 160"
                            fill="none"
                            stroke={band.color}
                            strokeWidth="18"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="100"
                            strokeDashoffset={dashOffset}
                            className={hoverScore !== null ? styles.gaugeArcLive : styles.gaugeArc}
                        />
                        <text x="150" y="140" textAnchor="middle" fontSize="34" fontWeight="700" fill="#10151F" fontFamily="SFMono-Regular,Consolas,monospace">{displayScore}</text>
                        <text x="150" y="162" textAnchor="middle" fontSize="11" fill="#8A93A0">out of 1000</text>
                        <text x="30" y="178" fontSize="10" fill="#8A93A0">1</text>
                        <text x="262" y="178" fontSize="10" fill="#8A93A0">1000</text>
                    </svg>
                    <p className={styles.gaugeCaption}>Move your cursor across the gauge to see how the score, priority, and drivers shift in real time.</p>
                </div>
                <div>
                    <span
                        className={styles.scoreBadge}
                        style={{ color: band.color, background: band.colorSoft }}
                    >
                        {band.label}
                    </span>
                    <p className={styles.scoreDetail}>
                        {band.desc}
                    </p>
                    <div className={styles.scoreBreakdown}>
                        <div className={styles.sbRow}>
                            <span>Retention</span>
                            <span className={styles.sbTrack}><span className={styles.sbFill} style={{ width: `${metrics.retention * 100}%`, background: band.color }} /></span>
                            <span className={styles.sbVal}>{metrics.retention.toFixed(2)}</span>
                        </div>
                        <div className={styles.sbRow}>
                            <span>Liquidity risk</span>
                            <span className={styles.sbTrack}><span className={styles.sbFill} style={{ width: `${metrics.liquidity * 100}%`, background: band.color }} /></span>
                            <span className={styles.sbVal}>{metrics.liquidity.toFixed(2)}</span>
                        </div>
                        <div className={styles.sbRow}>
                            <span>Trading activity</span>
                            <span className={styles.sbTrack}><span className={styles.sbFill} style={{ width: `${metrics.trading * 100}%`, background: band.color }} /></span>
                            <span className={styles.sbVal}>{metrics.trading.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScoreSection;
