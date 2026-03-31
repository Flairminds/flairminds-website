import React from 'react';
import styles from './SwiftIQCaseStudy.module.css';
import {
    FaShieldAlt, FaArrowRight, FaExclamationTriangle, FaCheckCircle,
    FaChartLine, FaBrain, FaSearch, FaLock, FaDatabase, FaUsers,
    FaCogs, FaCode, FaRocket, FaClipboardCheck, FaBolt, FaEye,
    FaLayerGroup, FaFilter, FaArrowDown,
} from 'react-icons/fa';
import { MdAutoAwesome, MdSpeed, MdTimeline, MdSecurity } from 'react-icons/md';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiPython, SiReact, SiPostgresql } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const tiers = [
    {
        number: '01',
        color: '#1D5ECC',
        label: 'TIER 1',
        icon: <FaShieldAlt />,
        title: 'Deterministic Rule Engine',
        badge: 'Instant · < 5ms',
        tech: 'Vanilla JavaScript',
        businessValue: 'Blocks known-bad patterns before any AI is involved — zero latency, zero cost per transaction.',
        points: [
            'High-Risk Corridor Detection against FATF blacklist countries',
            'Structuring Alerts: amounts $9,500–$9,999 near the $10,000 CTR threshold',
            'TBML Scrutiny: dual-use HS codes in MT700 trade finance messages',
            'CRITICAL flag immediately activates Safe-Path override',
        ],
    },
    {
        number: '02',
        color: '#0A8C5A',
        label: 'TIER 2',
        icon: <FaBrain />,
        title: 'ML Intelligence',
        badge: 'Probabilistic · ~120ms',
        tech: 'XGBoost · Isolation Forest · Flask',
        businessValue: 'Catches novel money-laundering patterns that have never been defined in rules — trained on 50K real transactions.',
        points: [
            'XGBoost four-class risk classification (LOW / MEDIUM / HIGH / CRITICAL)',
            'Isolation Forest unsupervised anomaly detection for unusual profiles',
            'Six feature vectors: amount, corridor, round-number, threshold proximity, account age, 7-day frequency',
            'Flask microservice — independently scalable and upgradeable',
        ],
    },
    {
        number: '03',
        color: '#7C3AED',
        label: 'TIER 3',
        icon: <FaSearch />,
        title: 'Sanctions Screening',
        badge: 'Fuzzy Matching · < 200ms',
        tech: 'Levenshtein · OFAC · EU · UN',
        businessValue: 'Screens both parties against 3 global watchlists simultaneously — catches spelling variants that rule-exact-match would miss.',
        points: [
            'Screens :50: (originator) and :59: (beneficiary) fields',
            'OFAC SDN, EU Consolidated, and UN Security Council lists in parallel',
            'Levenshtein fuzzy match at 80% threshold catches deliberate typos',
            '"TEHERAN IMPORT EXPORT CO" detected at 92% similarity vs. OFAC list',
        ],
    },
    {
        number: '04',
        color: '#C67A00',
        label: 'TIER 4',
        icon: <GiArtificialIntelligence />,
        title: 'AI Synthesis & Audit Narrative',
        badge: 'Safe-Path · Llama 3.1 · < 2s',
        tech: 'Llama 3.1 · Ollama · On-Premise',
        businessValue: 'Produces a regulator-ready audit narrative — in plain English — without any data leaving the bank\'s network.',
        points: [
            'Safe-Path consensus: highest severity from any tier wins (no averaging)',
            'On-premise Llama 3.1 via Ollama — zero data sent to external APIs',
            '2–4 sentence professional audit narrative at temperature 0.2 for consistency',
            'Stored in Supabase with INSERT-only RLS — even DB admins cannot delete',
        ],
    },
];

const challenges = [
    {
        icon: <FaExclamationTriangle />,
        title: 'Compliance is Legally Mandatory',
        desc: 'Every bank processing SWIFT messages must screen for money laundering, sanctions violations, and financial crime. Failure means criminal liability — not just fines.',
    },
    {
        icon: <FaChartLine />,
        title: '$500K–$5M/yr Enterprise Price Tag',
        desc: 'Actimize, FCCM, and Fircosoft cost $500K–$5M per year. Mid-tier and regional banks legally need compliance but simply cannot afford these platforms.',
    },
    {
        icon: <FaCogs />,
        title: 'Excel-Based Manual Screening',
        desc: 'Most mid-tier banks currently run AML compliance on Excel spreadsheets and manual officer review — SWIFT messages go unscreened or under-screened.',
    },
    {
        icon: <FaLock />,
        title: 'Data Residency Violations',
        desc: 'Enterprise black-box tools send transaction data to external servers, creating GDPR and MAS TRM data residency violations that regulators increasingly scrutinise.',
    },
    {
        icon: <FaDatabase />,
        title: 'No Explainable Audit Trail',
        desc: 'Existing tools produce machine-formatted output, not human-readable audit narratives. Compliance officers and regulators cannot understand or defend flagging decisions.',
    },
    {
        icon: <FaUsers />,
        title: 'Novel Patterns Go Undetected',
        desc: 'Rule-based systems only catch known patterns. Emerging structuring tactics and new shell-company profiles bypass deterministic rules entirely.',
    },
];

const marketBanks = [
    {
        icon: '🏦',
        title: 'Mid-Tier & Regional Banks',
        role: 'Primary Target',
        roleColor: '#0A9396',
        desc: 'AML is legally required. No budget for enterprise tools. Currently on Excel. SwiftIQ Guard is the complete standalone, affordable platform.',
    },
    {
        icon: '🏛️',
        title: 'Large Global Institutions',
        role: 'Augmentation Layer',
        roleColor: '#1D5ECC',
        desc: 'Adds the narrative + explainability layer that Actimize and FCCM cannot provide — ISO 20022 gap flagging and challenger scoring.',
    },
    {
        icon: '📱',
        title: 'Fintechs, Neobanks & PSPs',
        role: 'Secondary Market',
        roleColor: '#7C3AED',
        desc: 'SWIFT screening required but no compliance team. SwiftIQ delivers compliance-grade screening without needing a compliance department.',
    },
    {
        icon: '🏢',
        title: 'RegTech Consultancies',
        role: 'Channel Partner',
        roleColor: '#C67A00',
        desc: 'Audit compliance for 10–50 small banks. White-label opportunity: deploy SwiftIQ Guard under their own brand across their entire client portfolio.',
    },
];

const techStack = [
    { icon: <SiReact />, label: 'React + Vite + Tailwind' },
    { icon: <FaCode />, label: 'Vanilla JS Parsers' },
    { icon: <SiPython />, label: 'Flask + XGBoost + scikit-learn' },
    { icon: <GiArtificialIntelligence />, label: 'Llama 3.1 via Ollama' },
    { icon: <SiPostgresql />, label: 'Supabase / PostgreSQL' },
    { icon: <FaLock />, label: 'JWT + RBAC' },
];

const testingLayers = [
    {
        color: '#1D5ECC',
        label: 'Unit Tests — Jest',
        title: '55 / 55 Tests Passing',
        desc: 'Parsers, rule engine (structuring, TBML, corridors), fuzzy matcher, Safe-Path consensus, RBAC permissions.',
    },
    {
        color: '#0A8C5A',
        label: 'Integration Tests — Jest',
        title: '29 / 29 Tests Passing',
        desc: 'Flask ML endpoints, full 4-tier pipeline, Supabase case persistence, audit log immutability, API RBAC enforcement.',
    },
    {
        color: '#7C3AED',
        label: 'E2E Tests — Playwright',
        title: '21 / 21 Tests Passing',
        desc: 'Auth flows, screening UI, queue case actions, audit log access by role — across 3 browsers.',
    },
    {
        color: '#C67A00',
        label: 'Performance Tests — k6',
        title: 'P95 < 3,000ms',
        desc: 'Pipeline P95 < 3s, ML microservice P95 < 500ms, error rate < 1% under 100 concurrent users.',
    },
];

const engineeringDecisions = [
    {
        icon: '🔒',
        title: 'On-Premise LLM is Not a Compromise — It Is a Feature',
        body: 'Sending transaction data to OpenAI or Anthropic APIs would violate banking data residency policies under GDPR and MAS TRM. Running Llama 3.1 locally delivers audit narrative quality indistinguishable from frontier APIs for this structured task — with no external rate limits and predictable latency.',
    },
    {
        icon: '⚠️',
        title: 'The Safe-Path Policy Eliminates a Category of False Negatives',
        body: 'Early versions used weighted averages. A CRITICAL TBML flag could be diluted by a LOW ML score, passing a danger transaction to manual review. The maximum-severity Safe-Path policy eliminates this failure mode entirely — asymmetric consequences demand asymmetric policy.',
    },
    {
        icon: '🎯',
        title: 'Fuzzy Match Threshold is a Business Decision, Not a Technical One',
        body: 'The 80% Levenshtein threshold was set in consultation with compliance requirements — not optimised for F1 score alone. Too low floods the compliance queue. Too high lets deliberate phonetic variants of sanctioned names pass undetected.',
    },
    {
        icon: '📋',
        title: 'Immutability Enforced at the Database Level, Not the Application',
        body: 'Supabase row-level security enforces INSERT-only on the audit log. A direct SQL DELETE returns 403 even for database administrators. This is the guarantee regulators need and lawyers can defend in court.',
    },
];

const roadmapItems = [
    { quarter: 'Q2 2026', color: '#1D5ECC', bg: 'rgba(29,94,204,0.1)', border: 'rgba(29,94,204,0.3)', title: 'Live Watchlist Sync', desc: 'Auto-update OFAC/EU/UN lists daily via published APIs. Firefox E2E coverage in CI pipeline.' },
    { quarter: 'Q3 2026', color: '#0A8C5A', bg: 'rgba(10,140,90,0.1)', border: 'rgba(10,140,90,0.3)', title: 'Batch Upload UI + FATF Scoring', desc: 'Front-end for batch file submission. FATF dynamic country risk scoring matrix with 200 countries.' },
    { quarter: 'Q4 2026', color: '#7C3AED', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.3)', title: 'Full ISO 20022 Expansion', desc: 'camt.053, pacs.008, pacs.004 message types. Automated monthly XGBoost retraining on flagged cases.' },
    { quarter: 'Q1 2027', color: '#C67A00', bg: 'rgba(198,122,0,0.1)', border: 'rgba(198,122,0,0.3)', title: 'Real-Time SWIFT Gateway Integration', desc: 'Direct SWIFT Alliance Gateway — messages screen automatically as received. Correspondent bank risk profiles.' },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

const SwiftIQCaseStudy = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>

                {/* ── Hero ─────────────────────────────────────── */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <FaShieldAlt className={styles.heroBadgeIcon} />
                            <span>CASE STUDY · AML COMPLIANCE PLATFORM</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Enterprise AML Compliance<br />Without the Enterprise Price Tag
                        </h1>
                        <p className={styles.heroSubtitle}>
                            SwiftIQ Guard: a privacy-first, on-premise SWIFT message screening platform
                            using a 4-tier AI decision chain - deterministic rules to on-premise LLM
                            - at 200× lower cost than enterprise AML tools.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>200×</span>
                                <span className={styles.heroStatLabel}>Cheaper Than Enterprise</span>
                            </div>
                            <div className={styles.heroStatDivider} />
                            <div className={styles.heroStat}>
                                <span className={styles.heroStatNumber}>&lt;3s</span>
                                <span className={styles.heroStatLabel}>End-to-End Screening</span>
                            </div>
                        </div>
                        <div className={styles.heroTags}>
                            <span className={styles.heroTag} style={{ color: '#60A5FA', borderColor: 'rgba(96,165,250,0.35)', background: 'rgba(96,165,250,0.08)' }}>AML Compliance</span>
                            <span className={styles.heroTag} style={{ color: '#34D399', borderColor: 'rgba(52,211,153,0.35)', background: 'rgba(52,211,153,0.08)' }}>AI Architecture</span>
                            <span className={styles.heroTag} style={{ color: '#FBBF24', borderColor: 'rgba(251,191,36,0.35)', background: 'rgba(251,191,36,0.08)' }}>FinTech</span>
                            <span className={styles.heroTag} style={{ color: '#A78BFA', borderColor: 'rgba(167,139,250,0.35)', background: 'rgba(167,139,250,0.08)' }}>Machine Learning</span>
                            <span className={styles.heroTag} style={{ color: '#94A3B8', borderColor: 'rgba(148,163,184,0.3)', background: 'rgba(148,163,184,0.08)' }}>SWIFT Messaging</span>
                            <span className={styles.heroTag} style={{ color: '#F472B6', borderColor: 'rgba(244,114,182,0.35)', background: 'rgba(244,114,182,0.08)' }}>On-Premise LLM</span>
                        </div>
                    </div>
                </section>

                {/* ── Problem Statement ──────────────────────── */}
                <section className={styles.challengeSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaExclamationTriangle className={styles.titleIcon} />
                            The Problem
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            AML compliance is a legal obligation — but enterprise tools are priced out of reach for most banks
                        </p>
                    </div>
                    <div className={styles.challengeGrid}>
                        {challenges.map((item, i) => (
                            <div key={i} className={styles.challengeCard}>
                                <div className={styles.challengeIcon}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Business Solution Overview ─────────────── */}
                <section className={styles.solutionSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <MdAutoAwesome className={styles.titleIconLight} />
                            The Solution
                        </h2>
                        <p className={styles.sectionSubtitleLight}>
                            Enterprise-grade AML compliance on an open-source stack — at a fraction of the cost
                        </p>
                    </div>

                    <div className={styles.spotlightOverview}>
                        <div className={styles.spotlightProblem}>
                            <h3><FaExclamationTriangle className={styles.spotlightIcon} /> Before: Excel &amp; Manual Review</h3>
                            <p>
                                Mid-tier banks screen SWIFT messages manually using Excel spreadsheets and compliance officers.
                                Transactions go unscreened. Sanctions violations are missed. A single regulatory failure means
                                billion-dollar fines and criminal liability for compliance officers — not a slap on the wrist.
                            </p>
                        </div>
                        <div className={styles.spotlightSolution}>
                            <h3><FaShieldAlt className={styles.spotlightIconGreen} /> After: 4-Tier AI Decision Chain</h3>
                            <p>
                                SwiftIQ Guard screens every SWIFT message through four complementary analysis tiers in under 3 seconds,
                                produces an AI-generated audit narrative in plain English, and stores a tamper-proof record — all running
                                entirely within the institution's own network at $500–$3,000/month infrastructure cost.
                            </p>
                        </div>
                    </div>

                    <div className={styles.timelineComparison}>
                        <div className={styles.timelineCard}>
                            <div className={styles.timelineHeader}>
                                <FaCogs className={styles.timelineIcon} />
                                <span className={styles.timelineLabel}>Enterprise AML Tools</span>
                            </div>
                            <div className={styles.timelineValue} style={{ color: '#EE9B00' }}>$500K–$5M</div>
                            <p>Annual licensing for Actimize, FCCM, Fircosoft — pricing most banks out</p>
                        </div>
                        <div className={styles.timelineArrow}><FaArrowRight /></div>
                        <div className={`${styles.timelineCard} ${styles.timelineCardAi}`}>
                            <div className={styles.timelineHeader}>
                                <FaShieldAlt className={styles.timelineIconAi} />
                                <span className={styles.timelineLabel}>SwiftIQ Guard</span>
                            </div>
                            <div className={styles.timelineValue} style={{ color: '#0A9396' }}>$500–$3K</div>
                            <p>Per month infrastructure cost — 200× cheaper, fully on-premise</p>
                        </div>
                        <div className={styles.timelineSavings}>
                            <span className={styles.savingsValue}>200×</span>
                            <span className={styles.savingsLabel}>Cost Reduction</span>
                        </div>
                    </div>
                </section>

                {/* ── 4-Tier Decision Chain ──────────────────── */}
                <section className={styles.tiersSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaLayerGroup className={styles.titleIcon} />
                            The 4-Tier AI Decision Chain
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Every SWIFT message passes all four tiers. Safe-Path consensus: the highest severity always wins.
                        </p>
                    </div>

                    {/* Pipeline diagram */}
                    <div className={styles.pipelineDiagram}>
                        {tiers.map((tier, i) => (
                            <React.Fragment key={i}>
                                <div className={styles.pipelineBox} style={{ '--tier-color': tier.color }}>
                                    <span className={styles.pipelineLabel} style={{ color: tier.color }}>{tier.label}</span>
                                    <div className={styles.pipelineTitle}>{tier.title}</div>
                                    <div className={styles.pipelineTech}>{tier.tech}</div>
                                    <div className={styles.pipelineBadge} style={{ background: `${tier.color}1A`, color: tier.color, border: `1px solid ${tier.color}40` }}>{tier.badge}</div>
                                </div>
                                {i < tiers.length - 1 && (
                                    <div className={styles.pipelineArrow}><FaArrowRight /></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={styles.pipelineCaption}>
                        Safe-Path consensus · Highest severity wins · Zero external data transfer · End-to-end &lt; 3 seconds
                    </div>

                    {/* Tier detail cards */}
                    <div className={styles.tiersGrid}>
                        {tiers.map((tier, i) => (
                            <div key={i} className={styles.tierCard} style={{ '--tier-color': tier.color }}>
                                <div className={styles.tierCardHeader} style={{ background: `${tier.color}15`, borderBottom: `1px solid ${tier.color}30` }}>
                                    <div className={styles.tierNum} style={{ background: tier.color }}>{tier.number}</div>
                                    <div className={styles.tierCardHeaderText}>
                                        <div className={styles.tierCardTitle}>{tier.title}</div>
                                        <div className={styles.tierCardTech}>{tier.tech}</div>
                                    </div>
                                    <span className={styles.tierCardBadge} style={{ background: tier.color }}>{tier.badge}</span>
                                </div>
                                <div className={styles.tierCardBody}>
                                    <div className={styles.tierBusinessValue}>
                                        <span className={styles.tierBVLabel}>Business Value</span>
                                        <p>{tier.businessValue}</p>
                                    </div>
                                    <ul className={styles.tierPoints}>
                                        {tier.points.map((pt, j) => (
                                            <li key={j}>
                                                <FaCheckCircle style={{ color: tier.color, flexShrink: 0, marginTop: 2 }} />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Operational Workflow ───────────────────── */}
                <section className={styles.workflowSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <MdTimeline className={styles.titleIconLight} />
                            Operational Workflow
                        </h2>
                        <p className={styles.sectionSubtitleLight}>
                            From raw SWIFT message to regulator-ready audit record — in under 3 seconds
                        </p>
                    </div>

                    <div className={styles.workflowFlow}>
                        {[
                            { step: '1', title: 'Submit', desc: 'Compliance officer pastes a raw SWIFT MT/MX message or uploads a batch file', color: '#1D5ECC' },
                            { step: '2', title: 'Parse', desc: 'Custom JS parser converts raw SWIFT text to structured JSON — parties, amounts, HS codes extracted', color: '#0A8C5A' },
                            { step: '3', title: 'Screen', desc: '4-tier pipeline runs in sequence: Rule Engine → ML Intelligence → Sanctions Screening → AI Synthesis', color: '#7C3AED' },
                            { step: '4', title: 'Verdict', desc: 'Safe-Path consensus produces a risk level and AI-generated audit narrative in plain English', color: '#C67A00' },
                            { step: '5', title: 'Review', desc: 'HIGH/CRITICAL cases enter compliance queue — officer clears, blocks, or escalates with mandatory case notes', color: '#C0293E' },
                            { step: '6', title: 'Record', desc: 'Every action written to immutable INSERT-only audit log with officer ID, role, timestamp, and full screening snapshot', color: '#0A9396' },
                        ].map((item, i) => (
                            <div key={i} className={styles.workflowStep}>
                                <div className={styles.workflowNum} style={{ background: `${item.color}20`, border: `1.5px solid ${item.color}50`, color: item.color }}>{item.step}</div>
                                <div className={styles.workflowContent}>
                                    <div className={styles.workflowTitle} style={{ color: item.color }}>{item.title}</div>
                                    <div className={styles.workflowDesc}>{item.desc}</div>
                                </div>
                                {i < 5 && <div className={styles.workflowConnector} />}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Market Positioning ─────────────────────── */}
                <section className={styles.marketSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaChartLine className={styles.titleIcon} />
                            Market Positioning
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            A distinct value proposition for every institution tier
                        </p>
                    </div>

                    <div className={styles.costCallout}>
                        <div className={styles.costNum}>$500–$3K<span>/mo</span></div>
                        <div className={styles.costVs}>vs $500K–$5M/yr — enterprise AML licensing</div>
                        <div className={styles.costTag}>Infrastructure cost only · No per-message fees · No vendor lock-in</div>
                    </div>

                    <div className={styles.marketGrid}>
                        {marketBanks.map((bank, i) => (
                            <div key={i} className={styles.marketCard}>
                                <div className={styles.marketIcon}>{bank.icon}</div>
                                <div className={styles.marketBody}>
                                    <div className={styles.marketTitle}>{bank.title}</div>
                                    <p className={styles.marketDesc}>{bank.desc}</p>
                                </div>
                                <span className={styles.marketRole} style={{ background: `${bank.roleColor}18`, color: bank.roleColor, border: `1px solid ${bank.roleColor}40` }}>{bank.role}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── RBAC Roles ─────────────────────────────── */}
                <section className={styles.rolesSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaUsers className={styles.titleIconLight} />
                            User Roles &amp; Access Control
                        </h2>
                        <p className={styles.sectionSubtitleLight}>
                            Three-tier RBAC enforced at every API route — ensuring segregation of duties
                        </p>
                    </div>

                    <div className={styles.rolesGrid}>
                        <div className={styles.roleCard} style={{ '--role-color': '#1D5ECC' }}>
                            <div className={styles.roleHeader} style={{ background: '#1D5ECC15', borderBottom: '1px solid #1D5ECC30' }}>
                                <div className={styles.roleAvatar} style={{ background: '#1D5ECC' }}>AD</div>
                                <div className={styles.roleName} style={{ color: '#1D5ECC' }}>Compliance Administrator</div>
                            </div>
                            <div className={styles.roleBody}>
                                <p>Full system access. Configures risk thresholds, manages users, screens messages, and exports full audit logs for regulatory reporting.</p>
                                <div className={styles.permTags}>
                                    {['Screen messages', 'Manage queue', 'Clear & Block', 'Manage users', 'Export audit log', 'Configure thresholds'].map(p => (
                                        <span key={p} className={styles.permYes}>{p}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.roleCard} style={{ '--role-color': '#C67A00' }}>
                            <div className={styles.roleHeader} style={{ background: '#C67A0015', borderBottom: '1px solid #C67A0030' }}>
                                <div className={styles.roleAvatar} style={{ background: '#C67A00' }}>OF</div>
                                <div className={styles.roleName} style={{ color: '#C67A00' }}>Compliance Officer</div>
                            </div>
                            <div className={styles.roleBody}>
                                <p>Day-to-day operational role. Screens messages and takes actions on compliance queue — clear, block, or escalate. Cannot configure the system.</p>
                                <div className={styles.permTags}>
                                    {['Screen messages', 'Manage queue', 'Clear & Block', 'Escalate cases'].map(p => (
                                        <span key={p} className={styles.permYes}>{p}</span>
                                    ))}
                                    {['Cannot manage users', 'Cannot configure'].map(p => (
                                        <span key={p} className={styles.permNo}>{p}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.roleCard} style={{ '--role-color': '#0A8C5A' }}>
                            <div className={styles.roleHeader} style={{ background: '#0A8C5A15', borderBottom: '1px solid #0A8C5A30' }}>
                                <div className={styles.roleAvatar} style={{ background: '#0A8C5A' }}>VI</div>
                                <div className={styles.roleName} style={{ color: '#0A8C5A' }}>Viewer / Internal Auditor</div>
                            </div>
                            <div className={styles.roleBody}>
                                <p>Read-only access for internal auditors, regulators, and senior management. Satisfies regulatory requirements for independent oversight.</p>
                                <div className={styles.permTags}>
                                    {['View audit log', 'View case details', 'View queue'].map(p => (
                                        <span key={p} className={styles.permYes}>{p}</span>
                                    ))}
                                    {['Cannot screen', 'Cannot act on cases'].map(p => (
                                        <span key={p} className={styles.permNo}>{p}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Tech Stack ─────────────────────────────── */}
                <section className={styles.techSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCode className={styles.titleIcon} />
                            Technology Stack
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Open-source. On-Premise. No vendor lock-in.
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

                {/* ── Testing ────────────────────────────────── */}
                <section className={styles.testingSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaClipboardCheck className={styles.titleIconLight} />
                            4-Layer Test Coverage
                        </h2>
                        <p className={styles.sectionSubtitleLight}>
                            Every tier validated independently and in combination — 105/105 tests passing
                        </p>
                    </div>
                    <div className={styles.testingGrid}>
                        {testingLayers.map((t, i) => (
                            <div key={i} className={styles.testCard} style={{ '--test-color': t.color }}>
                                <div className={styles.testCardLabel} style={{ color: t.color }}>{t.label}</div>
                                <div className={styles.testCardResult} style={{ color: t.color }}>{t.title}</div>
                                <p className={styles.testCardDesc}>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.testSummary}>
                        <div className={styles.testStat}>
                            <span className={styles.testStatNum}>105</span>
                            <span className={styles.testStatLabel}>Total Tests</span>
                        </div>
                        <div className={styles.testStatDivider} />
                        <div className={styles.testStat}>
                            <span className={styles.testStatNum}>100%</span>
                            <span className={styles.testStatLabel}>Pass Rate</span>
                        </div>
                        <div className={styles.testStatDivider} />
                        <div className={styles.testStat}>
                            <span className={styles.testStatNum}>3</span>
                            <span className={styles.testStatLabel}>Browser Coverage</span>
                        </div>
                    </div>
                </section>

                {/* ── Engineering Decisions ──────────────────── */}
                <section className={styles.decisionsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaBolt className={styles.titleIcon} />
                            Key Engineering Decisions
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Four architectural choices that define the platform's reliability and regulatory defensibility
                        </p>
                    </div>
                    <div className={styles.decisionsGrid}>
                        {engineeringDecisions.map((d, i) => (
                            <div key={i} className={styles.decisionCard}>
                                <div className={styles.decisionEmoji}>{d.icon}</div>
                                <h3 className={styles.decisionTitle}>{d.title}</h3>
                                <p className={styles.decisionBody}>{d.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Roadmap ────────────────────────────────── */}
                <section className={styles.roadmapSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaRocket className={styles.titleIconLight} />
                            Product Roadmap
                        </h2>
                        <p className={styles.sectionSubtitleLight}>
                            Planned enhancements to deepen coverage and automate compliance further
                        </p>
                    </div>
                    <div className={styles.roadmapGrid}>
                        {roadmapItems.map((item, i) => (
                            <div key={i} className={styles.roadmapCard} style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                                <span className={styles.roadmapQ} style={{ color: item.color, background: `${item.color}18`, border: `1px solid ${item.border}` }}>{item.quarter}</span>
                                <div className={styles.roadmapTitle} style={{ color: item.color }}>{item.title}</div>
                                <p className={styles.roadmapDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ────────────────────────────────────── */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <FaShieldAlt className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Ready to Modernise Your AML Compliance?</h2>
                        <p className={styles.ctaText}>
                            Let us deploy SwiftIQ Guard for your institution — enterprise-grade SWIFT screening,
                            on-premise AI narrative generation, and a tamper-proof audit trail at a fraction of
                            the cost of traditional compliance platforms.
                        </p>
                        <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
                            Discuss Your Compliance Challenge <FaArrowRight />
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default SwiftIQCaseStudy;
