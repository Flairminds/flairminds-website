import React from 'react';
import styles from './PipelineSection.module.css';
import { FaLayerGroup } from 'react-icons/fa';

const diagramNodes = [
    { num: '01', title: 'Source Database', lines: ['MSSQL', 'Trading & lead records'], fill: '#F1F5F9', stroke: '#CDD2D9', text: '#10151F', sub: '#5B6472', badgeBg: '#5B6472' },
    { num: '02', title: 'ETL Pipeline', lines: ['Extract → Clean', 'PySpark feature layer'], fill: '#EAF2FC', stroke: '#9DC3F2', text: '#0B1D35', sub: '#3B6EA8', badgeBg: '#2a78d6' },
    { num: '03', title: 'Train & Tune', lines: ['CatBoost · XGBoost', 'Optuna hyperparameter search'], fill: '#E7EEFA', stroke: '#5598e7', text: '#0B1D35', sub: '#1c5cab', badgeBg: '#1c5cab' },
    { num: '04', title: 'Test & Validate', lines: ['Benchmarked across', '6 model families'], fill: '#E6F4F3', stroke: '#0A9396', text: '#0B1D35', sub: '#0A9396', badgeBg: '#0A9396' },
    { num: '05', title: 'Predict & Score', lines: ['Every non-converted lead', '1–1000 composite score'], fill: '#FDF6E8', stroke: '#E3A63E', text: '#0B1D35', sub: '#C4831A', badgeBg: '#C4831A' },
    { num: '06', title: 'Serve', lines: ['MySQL → FastAPI', '→ React dashboard'], fill: '#0B1D35', stroke: '#1B2C4A', text: '#FFFFFF', sub: '#E3A63E', badgeBg: '#E3A63E', badgeText: '#1B1200' },
];

const DIAGRAM_NODE_W = 190;
const DIAGRAM_NODE_H = 118;
const DIAGRAM_GAP = 42;
const DIAGRAM_STEP = DIAGRAM_NODE_W + DIAGRAM_GAP;
const DIAGRAM_Y = 40;
const DIAGRAM_H = DIAGRAM_Y * 2 + DIAGRAM_NODE_H;
const DIAGRAM_W = DIAGRAM_NODE_W * diagramNodes.length + DIAGRAM_GAP * (diagramNodes.length - 1) + 40;

const PipelineSection = () => {
    return (
        <section className={styles.pipelineSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <FaLayerGroup className={styles.titleIcon} />
                    Under the Hood
                </h2>
                <p className={styles.sectionSubtitle}>
                    On startup, the system waits for the database, builds its own tables, and runs its full
                    ML lifecycle end to end — no manual data-science handoff required to keep scores current.
                </p>
            </div>
            <div className={styles.diagramWrap}>
                <svg
                    viewBox={`0 0 ${DIAGRAM_W} ${DIAGRAM_H}`}
                    width="100%"
                    style={{ minWidth: DIAGRAM_W * 0.62 }}
                    role="img"
                    aria-label="Data flow diagram: source MSSQL database into an ETL pipeline, then model training and tuning, testing and validation, prediction and scoring, and finally serving through MySQL, FastAPI, and the React dashboard"
                >
                    <defs>
                        <marker id="lsaseArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
                        </marker>
                    </defs>

                    {diagramNodes.slice(0, -1).map((_, i) => {
                        const x1 = 20 + i * DIAGRAM_STEP + DIAGRAM_NODE_W;
                        const x2 = 20 + (i + 1) * DIAGRAM_STEP;
                        const y = DIAGRAM_Y + DIAGRAM_NODE_H / 2;
                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y}
                                x2={x2 - 8}
                                y2={y}
                                stroke="#94A3B8"
                                strokeWidth="2"
                                markerEnd="url(#lsaseArrow)"
                            />
                        );
                    })}

                    {diagramNodes.map((node, i) => {
                        const x = 20 + i * DIAGRAM_STEP;
                        const y = DIAGRAM_Y;
                        const cx = x + DIAGRAM_NODE_W / 2;
                        return (
                            <g key={i}>
                                <rect
                                    x={x}
                                    y={y}
                                    width={DIAGRAM_NODE_W}
                                    height={DIAGRAM_NODE_H}
                                    rx="14"
                                    fill={node.fill}
                                    stroke={node.stroke}
                                    strokeWidth="1.5"
                                />
                                <circle cx={x + 24} cy={y + 22} r="13" fill={node.badgeBg} />
                                <text
                                    x={x + 24}
                                    y={y + 26}
                                    textAnchor="middle"
                                    fontSize="10.5"
                                    fontWeight="700"
                                    fontFamily="SFMono-Regular,Consolas,monospace"
                                    fill={node.badgeText || '#FFFFFF'}
                                >
                                    {node.num}
                                </text>
                                <text
                                    x={cx}
                                    y={y + 50}
                                    textAnchor="middle"
                                    fontSize="14"
                                    fontWeight="700"
                                    fill={node.text}
                                >
                                    {node.title}
                                </text>
                                <text x={cx} y={y + 74} textAnchor="middle" fontSize="11" fill={node.sub}>
                                    {node.lines[0]}
                                </text>
                                <text x={cx} y={y + 92} textAnchor="middle" fontSize="11" fill={node.sub}>
                                    {node.lines[1]}
                                </text>
                            </g>
                        );
                    })}
                </svg>
                <p className={styles.diagramCaption}>
                    Leads flow from the source trading database through automated ETL, model training and
                    validation, prediction, and out to the sales floor — the same pipeline re-runs on every sync.
                </p>
            </div>
        </section>
    );
};

export default PipelineSection;
