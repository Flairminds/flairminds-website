import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBuildingColumns,
  FaMoneyBillWave,
  FaShieldHeart,
  FaChartPie,
  FaBuilding,
  FaChartColumn,
  FaCircleCheck,
  FaLock,
  FaGlobe,
  FaDatabase,
  FaClipboardCheck,
  FaArrowsRotate,
  FaHeadset,
  FaWandMagicSparkles,
  FaCircleNodes,
  FaGauge,
  FaFileLines,
  FaChartLine,
  FaSquareCheck,
  FaGaugeHigh,
  FaArrowTrendUp,
  FaSitemap,
  FaFileContract,
  FaRoute,
  FaShieldHalved,
  FaReceipt,
  FaHeartPulse,
  FaMoneyBillTransfer,
  FaArrowsLeftRight,
  FaScaleBalanced,
  FaDesktop,
  FaGavel,
  FaHourglassHalf,
  FaTriangleExclamation,
  FaBrain,
  FaGears,
  FaFileWaveform,
  FaRobot,
  FaCloud,
  FaClock,
  FaDiagramProject,
  FaListCheck,
  FaMagnifyingGlass,
  FaCompassDrafting,
  FaHammer,
  FaRocket,
  FaUserShield,
  FaAward,
  FaArrowRight,
  FaChevronDown,
} from 'react-icons/fa6';
import Seo from '../../components/seo/Seo';
import TiltCard from '../industrialBuildingAutomation/TiltCard';
import heroBgVideo from './hero-bg-video.mp4';
import ctaBgVideo from './cta-bg-video.mp4';
import caseCustodianImg from './case-custodian.jpg';
import caseInvestmentImg from './case-investment.jpg';
import caseAmlImg from './case-aml.jpg';
import caseDocsImg from './case-docs.jpg';
import styles from './BfsiIndustry.module.css';

const metrics = [
  { value: '99.99%', label: 'Uptime SLA Reliability' },
  { value: '$500B+', label: 'Daily Transaction Volume' },
  { value: '250+', label: 'Global Banks & FinTechs' },
  { value: '4 Hubs', label: 'Pune · Paris · SG · NJ' },
];

const industries = [
  {
    id: 'banking',
    icon: <FaBuildingColumns />,
    navLabel: 'Banking',
    tag: 'Retail, Commercial & Custodian Banking',
    title: 'Operational Efficiency Across the Full Banking Value Chain',
    desc: 'Supporting banks across the full operational spectrum — from data management and transaction processing to regulatory reporting and back-office automation. We help banking teams reduce manual effort, improve data quality, and deliver faster insights to operations and leadership.',
    bullets: [
      'ETL pipeline modernization for custodian and retail banking',
      'Regulatory reporting automation and data governance',
      'Production support for critical banking applications',
    ],
    stats: [
      { icon: <FaDatabase />, title: 'Data Management', desc: 'Unified data across systems' },
      { icon: <FaClipboardCheck />, title: 'Compliance Reporting', desc: 'Regulatory-ready outputs' },
      { icon: <FaArrowsRotate />, title: 'ETL Automation', desc: 'Batch to real-time pipelines' },
      { icon: <FaHeadset />, title: 'Application Support', desc: '24/7 operational continuity' },
    ],
  },
  {
    id: 'financial-services',
    icon: <FaMoneyBillWave />,
    navLabel: 'Financial Services',
    tag: 'FinTech & Financial Services',
    title: 'Scalable Technology for Financial Services Providers',
    desc: 'Helping financial services firms build data-driven operations, automate workflows, and deliver reporting and analytics that support faster, more confident business decisions across products and client segments.',
    bullets: [
      'Operational reporting and executive dashboards',
      'AI-assisted workflow automation for operations teams',
      'Data integration across platforms and product lines',
    ],
    stats: [
      { icon: <FaChartLine />, title: 'Analytics', desc: 'Data to insights' },
      { icon: <FaWandMagicSparkles />, title: 'Automation', desc: 'Workflow efficiency' },
      { icon: <FaCircleNodes />, title: 'Integration', desc: 'Connected platforms' },
      { icon: <FaGauge />, title: 'Reporting', desc: 'Executive dashboards' },
    ],
  },
  {
    id: 'insurance',
    icon: <FaShieldHeart />,
    navLabel: 'Insurance',
    tag: 'Life, General & Specialty Insurance',
    title: 'Data & Technology for Insurance Operations',
    desc: 'Enabling insurance organizations to modernize their data infrastructure, automate document processing, improve claims analytics, and deliver regulatory and management reporting with greater accuracy and speed.',
    bullets: [
      'Claims data analytics and operational dashboards',
      'Intelligent document processing for policy and claims data',
      'Regulatory and solvency reporting automation',
    ],
    stats: [
      { icon: <FaFileLines />, title: 'Document AI', desc: 'Policy data extraction' },
      { icon: <FaChartColumn />, title: 'Claims Analytics', desc: 'Data-driven decisions' },
      { icon: <FaSquareCheck />, title: 'Regulatory Reports', desc: 'Solvency & compliance' },
      { icon: <FaGaugeHigh />, title: 'Operational Speed', desc: 'Faster processing cycles' },
    ],
  },
  {
    id: 'investment-mgmt',
    icon: <FaChartPie />,
    navLabel: 'Investment Management',
    tag: 'Asset & Investment Management',
    title: 'Technology for Asset Managers & Investment Operations',
    desc: 'Supporting investment management firms with data integration, portfolio analytics, reporting automation, and AI-assisted workflows that improve operational efficiency across investment, middle, and back office functions.',
    bullets: [
      'Multi-custodian data aggregation and ETL normalization',
      'Automated client and management reporting',
      'Investment workflow automation and process orchestration',
    ],
    stats: [
      { icon: <FaArrowTrendUp />, title: 'Portfolio Analytics', desc: 'Performance & attribution' },
      { icon: <FaSitemap />, title: 'Custodian Data', desc: 'Normalized & aggregated' },
      { icon: <FaFileContract />, title: 'Client Reporting', desc: 'Automated & accurate' },
      { icon: <FaRoute />, title: 'Workflow Engine', desc: 'End-to-end orchestration' },
    ],
  },
  {
    id: 'investment-banking',
    icon: <FaBuilding />,
    navLabel: 'Investment Banking',
    tag: 'M&A, Advisory & Structured Finance',
    title: 'Front-to-Back Technology for Investment Banking Operations',
    desc: 'Enabling investment banking teams with technology that connects front office deal activity to middle office risk and controls, and back office settlement and reporting — reducing friction, manual work, and data gaps across the operating model.',
    bullets: [
      'Front-to-back office data flow and integration',
      'Risk, controls, and reconciliation automation',
      'Production support for trading and banking applications',
    ],
    stats: [
      { icon: <FaChartLine />, title: 'Front Office', desc: 'Trading & client ops' },
      { icon: <FaShieldHalved />, title: 'Middle Office', desc: 'Risk & controls' },
      { icon: <FaReceipt />, title: 'Back Office', desc: 'Settlement & reporting' },
      { icon: <FaHeartPulse />, title: 'App Support', desc: 'Production continuity' },
    ],
  },
  {
    id: 'capital-markets',
    icon: <FaChartColumn />,
    navLabel: 'Capital Markets',
    tag: 'Equities, Fixed Income & Derivatives',
    title: 'Technology Across the Capital Markets Value Chain',
    desc: 'Supporting capital markets institutions with data integration, trade lifecycle operations, reconciliation, regulatory reporting, and production support for trading systems and market data platforms.',
    bullets: [
      'Trade data pipelines and ETL for capital markets systems',
      'Reconciliation, settlement, and post-trade operations',
      'Trading application monitoring and production support',
    ],
    stats: [
      { icon: <FaMoneyBillTransfer />, title: 'Trade Lifecycle', desc: 'End-to-end operations' },
      { icon: <FaArrowsLeftRight />, title: 'Reconciliation', desc: 'Automated matching' },
      { icon: <FaScaleBalanced />, title: 'Regulatory', desc: 'EMIR, MiFID II' },
      { icon: <FaDesktop />, title: 'System Monitoring', desc: 'Trading app support' },
    ],
  },
];

const challenges = [
  {
    icon: <FaCircleNodes />,
    title: 'Data Fragmentation & Silos',
    desc: 'Critical data spread across disconnected systems — making it hard to get a single, accurate view of positions, risk, or performance without significant manual effort.',
  },
  {
    icon: <FaGears />,
    title: 'Legacy Systems & Integration Debt',
    desc: 'Aging core systems that are difficult to integrate, expensive to maintain, and slow to adapt — creating bottlenecks in operations and reporting.',
    alt: true,
  },
  {
    icon: <FaGavel />,
    title: 'Regulatory & Compliance Pressure',
    desc: 'Growing regulatory demands require consistent, accurate, and timely reporting — but manual processes make this slow, error-prone, and costly.',
  },
  {
    icon: <FaHourglassHalf />,
    title: 'Reporting Latency & Manual Processes',
    desc: 'Reports that take hours or days to produce, rely on spreadsheets, and require multiple reconciliation steps before leadership can act on the data.',
    alt: true,
  },
  {
    icon: <FaTriangleExclamation />,
    title: 'Operational Risk in Production',
    desc: 'Critical trading and banking applications running without adequate monitoring — leading to delayed incident detection and unplanned business disruption.',
  },
  {
    icon: <FaBrain />,
    title: 'AI Readiness & Automation Gap',
    desc: 'Teams spending excessive time on repetitive manual tasks — data entry, reconciliation, document review — that AI and automation could handle, freeing people for higher-value work.',
    alt: true,
  },
];

const technologies = [
  {
    icon: <FaDatabase />,
    title: 'Data & Integration',
    desc: 'Building and maintaining data pipelines that move, transform, and validate financial data reliably across systems.',
    tags: ['ETL / ELT', 'Data Integration', 'Data Migration', 'Data Quality', 'Snowflake', 'Databricks', 'dbt'],
  },
  {
    icon: <FaChartColumn />,
    title: 'Analytics & Reporting',
    desc: 'Delivering reporting solutions and analytics platforms that give BFSI teams accurate, timely, and actionable information.',
    tags: ['Tableau', 'Power BI', 'Analytics Platforms', 'Executive Dashboards', 'Regulatory Reporting'],
  },
  {
    icon: <FaBrain />,
    title: 'AI & Automation',
    desc: 'Applying AI and automation technologies practically to BFSI workflows — reducing manual effort and improving operational throughput.',
    tags: ['LLMs', 'AI Agents', 'Intelligent Automation', 'Document AI', 'Predictive Analytics'],
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & Platform',
    desc: 'Working across major cloud platforms and enterprise data platforms to build, deploy, and operate scalable BFSI technology solutions.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Data Platforms'],
  },
];

const caseStudies = [
  {
    id: 'custodian',
    navLabel: 'Custodian Banking',
    navIcon: <FaBuildingColumns />,
    tag: 'ETL & Reporting Modernization',
    title: '4.5× Faster Financial Reporting for Fortune 100 Bank',
    challenge: 'Legacy ETL batch processes causing 14+ hours of reporting latency, preventing timely financial insights for a global custodian bank.',
    solution: 'Modernized ETL pipelines and implemented a governed enterprise data warehouse with strict data lineage and automated multi-currency reporting across 12 asset classes.',
    technology: 'Data Integration · ETL Modernization · Enterprise Data Warehouse · Reporting',
    outcome: '4.5× faster reporting · 14 hours manual latency eliminated · Consolidated multi-currency reporting',
    statLabel: 'Velocity Gain',
    statValue: '4.5× Faster',
    image: caseCustodianImg,
  },
  {
    id: 'investment',
    navLabel: 'Investment Lifecycle',
    navIcon: <FaChartLine />,
    tag: 'Workflow Automation',
    title: 'End-to-End Investment Automation for $50B+ AUM',
    challenge: 'Manual task routing and validation across the investment lifecycle creating delays, errors, and compliance gaps for a large asset manager.',
    solution: 'Intelligent workflow orchestration connecting front, middle, and back offices with automated task routing, validation workflows, and fully auditable process trails.',
    technology: 'Workflow Automation · Data Integration · Process Orchestration · Regulatory Audit Trail',
    outcome: '$50B+ AUM managed · End-to-end automation · Regulatory-compliant audit trails across the lifecycle',
    statLabel: 'Platform Scale',
    statValue: '$50B+ AUM',
    image: caseInvestmentImg,
  },
  {
    id: 'aml',
    navLabel: 'AML Screening',
    navIcon: <FaShieldHalved />,
    tag: 'AI & Intelligent Automation',
    title: '80% Reduction in False Positives for Tier-1 Bank',
    challenge: 'Excessive AML false positives consuming compliance analyst capacity and significantly increasing operational costs for a tier-1 financial institution.',
    solution: 'Advanced AI screening models using graph analytics to identify genuine risk patterns, dramatically reducing noise and focusing analyst attention on real threats.',
    technology: 'AI & Machine Learning · Graph Analytics · Real-time Screening · AML Automation',
    outcome: '80% fewer false positives · Sub-15ms screening · $4.2M annual cost savings in manual review',
    statLabel: 'Noise Reduction',
    statValue: '80% Less',
    image: caseAmlImg,
  },
  {
    id: 'docs',
    navLabel: 'Document Intelligence',
    navIcon: <FaFileWaveform />,
    tag: 'Document AI & Automation',
    title: '99.2% Accuracy in Financial Document Extraction',
    challenge: 'Manual data entry across complex multi-page financial agreements and trade confirmations causing delays, errors, and significant operational cost.',
    solution: 'Intelligent document processing using layout-aware AI to extract structured data from financial documents with high accuracy, integrated directly with downstream systems.',
    technology: 'Document AI · Intelligent Automation · Data Integration · Enterprise OCR',
    outcome: '99.2% extraction accuracy · Manual data entry eliminated · Integrated with core credit systems',
    statLabel: 'Accuracy',
    statValue: '99.2%',
    image: caseDocsImg,
  },
];

const howWeWork = [
  { number: 'STEP 01', icon: <FaMagnifyingGlass />, title: 'Discovery', desc: 'Understanding your business context, data environment, and specific operational challenges before any solution design.' },
  { number: 'STEP 02', icon: <FaCompassDrafting />, title: 'Design', desc: 'Designing the right solution architecture, data model, and technology approach for your environment and constraints.' },
  { number: 'STEP 03', icon: <FaHammer />, title: 'Build', desc: 'Delivering iteratively with transparency, following DevSecOps practices and BFSI-grade quality standards at every stage.' },
  { number: 'STEP 04', icon: <FaRocket />, title: 'Deploy', desc: 'Carefully managed deployment into production environments — controlled rollouts with stakeholder sign-off at each step.' },
  { number: 'STEP 05', icon: <FaHeadset />, title: 'Support', desc: 'Ongoing production support, monitoring, and continuous improvement — keeping critical systems reliable and teams unblocked.' },
];

const trustStrip = [
  { icon: <FaUserShield />, title: 'SOC 2 Type II', desc: 'Security certified' },
  { icon: <FaLock />, title: 'ISO 27001', desc: 'Information security' },
  { icon: <FaGlobe />, title: '4 Global Hubs', desc: 'Pune · Paris · SG · NJ' },
  { icon: <FaAward />, title: 'Follow-the-Sun', desc: 'Global delivery model' },
];

export default function BfsiIndustry() {
  const navigate = useNavigate();
  const [activeIndustry, setActiveIndustry] = useState('banking');
  const [activeCase, setActiveCase] = useState('custodian');
  const [openCapability, setOpenCapability] = useState('cap-ibcm');

  const currentIndustry = industries.find((i) => i.id === activeIndustry) ?? industries[0];
  const currentCase = caseStudies.find((c) => c.id === activeCase) ?? caseStudies[0];

  const toggleCapability = (id) => {
    setOpenCapability((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.container}>
      <Seo
        title="BFSI Technology Solutions | FlairMinds"
        description="FlairMinds delivers BFSI technology capabilities across investment banking, capital markets, reporting & analytics, AI automation, and production application support."
        path="/bfsi-technology-solutions"
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <video className={styles.heroBgVideo} autoPlay loop muted playsInline>
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        <div className={styles.heroBgWash}></div>

        <div className={`${styles.maxW7xl} ${styles.heroGrid}`}>
          <div className={styles.heroTextCol}>
            <div className={styles.heroTag}>
              <span className={styles.heroPingDot}></span>
              Trusted BFSI Technology Partner
            </div>

            <h1 className={styles.heroTitle}>
              Technology That Understands <br />
              <span className={styles.titleGradientTeal}>How BFSI Works</span>
            </h1>

            <p className={styles.heroDescription}>
              We help financial institutions modernize investment operations, accelerate reporting,
              automate workflows with AI, and maintain critical production environments — with deep
              domain expertise at every step.
            </p>

            <div className={styles.heroBtnGroup}>
              <a href="#capabilities" className={styles.primaryBtn}>
                <span>Explore Capabilities</span>
                <FaArrowRight />
              </a>
              <button className={styles.secondaryBtn} onClick={() => navigate('/contact')}>
                <span>Talk to Our Experts</span>
              </button>
            </div>

            <div className={styles.heroTrustRow}>
              <div className={styles.heroTrustItem}><FaCircleCheck /><span>SOC 2 Type II</span></div>
              <div className={styles.heroTrustItem}><FaLock /><span>ISO 27001 Certified</span></div>
              <div className={styles.heroTrustItem}><FaGlobe /><span>4 Global Hubs</span></div>
            </div>
          </div>

          <div className={styles.heroGraphicCol}>
            <TiltCard maxTilt={12} scale={1.02} className={styles.graphicCard}>
              <div className={styles.graphicGlow}></div>
              <div className={styles.graphicCardHeader}>
                <span className={styles.graphicCardLabel}>BFSI Intelligence Core</span>
                <FaBuildingColumns className={styles.pulseIcon} />
              </div>
              <div className={styles.deviceScreen}>
                <div className={styles.deviceGlow}></div>
                <div className={styles.deviceRow}>
                  <span className={styles.deviceRowLabel}><FaChartLine /> Reporting Latency</span>
                  <span className={styles.deviceLive}>4.5× FASTER</span>
                </div>
                <div className={styles.deviceRow}>
                  <span className={styles.deviceRowLabel}><FaShieldHalved /> AML False Positives</span>
                  <span className={styles.deviceLive}>-80%</span>
                </div>
                <div className={styles.deviceRow}>
                  <span className={styles.deviceRowLabel}><FaFileLines /> Document Extraction</span>
                  <span className={styles.deviceLive}>99.2%</span>
                </div>
              </div>
              <div className={styles.graphicFooterRow}>
                <span>Live Operations</span>
                <span className={styles.footerLink}>Global Delivery <FaArrowRight /></span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className={styles.metricsSection}>
        <div className={styles.maxW7xl}>
          <div className={styles.metricsGrid}>
            {metrics.map((m, idx) => (
              <div key={idx}>
                <div className={styles.metricValue}>{m.value}</div>
                <div className={styles.metricLabel}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.section} id="industries">
        <div className={styles.maxW7xl}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Industry Expertise</span>
            <h2 className={styles.sectionTitle}>Built for BFSI. Understood from Within.</h2>
            <p className={styles.sectionDesc}>
              Industry expertise backed by deep domain understanding and proven technology capabilities
              across every major financial services vertical.
            </p>
          </div>

          <div className={styles.industryPillsNav}>
            {industries.map((ind) => (
              <button
                key={ind.id}
                className={`${styles.industryPill} ${activeIndustry === ind.id ? styles.industryPillActive : ''}`}
                onClick={() => setActiveIndustry(ind.id)}
              >
                {ind.icon}
                <span>{ind.navLabel}</span>
              </button>
            ))}
          </div>

          <div className={styles.industryPanelWrap}>
            <div className={styles.industryPanelGrid}>
              <div>
                <span className={styles.industryPanelTag}>{currentIndustry.tag}</span>
                <h3 className={styles.industryPanelTitle}>{currentIndustry.title}</h3>
                <p className={styles.industryPanelDesc}>{currentIndustry.desc}</p>
                <ul className={styles.industryPanelList}>
                  {currentIndustry.bullets.map((b, i) => (
                    <li key={i}>
                      <span className={styles.checkBadge}><FaCircleCheck /></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.industryStatsGrid}>
                {currentIndustry.stats.map((s, i) => (
                  <div key={i} className={styles.industryStatCard}>
                    {s.icon}
                    <div className={styles.industryStatTitle}>{s.title}</div>
                    <div className={styles.industryStatDesc}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="challenges">
        <div className={styles.maxW7xl}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>BFSI Challenges</span>
            <h2 className={styles.sectionTitle}>The Challenges We Help You Solve</h2>
            <p className={styles.sectionDesc}>
              Financial institutions face common structural and operational challenges that slow down
              teams, increase risk, and limit the value of technology investments.
            </p>
          </div>

          <div className={styles.challengesGrid}>
            {challenges.map((c, idx) => (
              <div key={idx} className={styles.challengeCard}>
                <div className={`${styles.challengeIconWrap} ${c.alt ? styles.challengeIconAlt : ''}`}>{c.icon}</div>
                <h3 className={styles.challengeTitle}>{c.title}</h3>
                <p className={styles.challengeDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Pillars */}
      <section className={styles.section} id="capabilities">
        <div className={styles.maxW7xl}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Capabilities</span>
            <h2 className={styles.sectionTitle}>Four Pillars of BFSI Technology Excellence</h2>
            <p className={styles.sectionDesc}>
              We understand BFSI business functions and provide technology capabilities that support
              investment operations, reporting, AI-driven productivity, and critical production
              environments.
            </p>
          </div>

          <div className={styles.capabilitiesList}>

            {/* 01 — Investment Banking & Capital Markets */}
            <div className={styles.capabilityPillar}>
              <button className={styles.capabilityHeader} onClick={() => toggleCapability('cap-ibcm')}>
                <div className={styles.capabilityNumber}>01</div>
                <div className={styles.capabilityHeaderBody}>
                  <div className={styles.capabilityHeaderTop}>
                    <div>
                      <span className={styles.capabilityTag}>Investment Banking &amp; Capital Markets</span>
                      <h3 className={styles.capabilityTitle}>Front-to-Back Office Operating Model</h3>
                    </div>
                    <FaChevronDown className={`${styles.capabilityChevron} ${openCapability === 'cap-ibcm' ? styles.capabilityChevronOpen : ''}`} />
                  </div>
                  <p className={styles.capabilitySummary}>
                    Connecting the investment banking and capital markets operating model — from
                    client-facing front office functions through risk and controls, to settlement and
                    reporting — with integrated data flows at every layer.
                  </p>
                </div>
              </button>
              <div className={`${styles.capabilityBody} ${openCapability === 'cap-ibcm' ? styles.capabilityBodyOpen : ''}`}>
                <div className={styles.capabilityBodyInner}>
                  <div className={styles.capabilityDivider}></div>
                  <div className={styles.capabilityGrid}>
                    <div>
                      <h4 className={styles.subheading}>Operating Model</h4>
                      <div className={styles.flowBoxStack}>
                        <div className={`${styles.flowBox} ${styles.flowBoxPrimary}`}>
                          <div className={styles.flowBoxLabel}>Front Office</div>
                          <div className={styles.flowBoxItems}>Trading · Investment Decisions · Client &amp; Market Operations</div>
                        </div>
                        <div className={styles.flowArrow}>↓</div>
                        <div className={`${styles.flowBox} ${styles.flowBoxSecondary}`}>
                          <div className={`${styles.flowBoxLabel} ${styles.flowBoxLabelSecondary}`}>Middle Office</div>
                          <div className={styles.flowBoxItems}>Risk · Controls · Reconciliation · Data Validation</div>
                        </div>
                        <div className={styles.flowArrow}>↓</div>
                        <div className={`${styles.flowBox} ${styles.flowBoxTertiary}`}>
                          <div className={`${styles.flowBoxLabel} ${styles.flowBoxLabelTertiary}`}>Back Office</div>
                          <div className={styles.flowBoxItems}>Settlement · Reporting · Operations · Data Processing</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className={styles.subheading}>Data Flow</h4>
                      <div className={styles.dataPipeline}>
                        {[
                          { icon: <FaDatabase />, label: 'Data Sources' },
                          { icon: <FaArrowsRotate />, label: 'ETL / ELT' },
                          { icon: <FaCircleNodes />, label: 'Integration' },
                          { icon: <FaSquareCheck />, label: 'Processing & Validation' },
                          { icon: <FaGauge />, label: 'Business Applications' },
                          { icon: <FaChartColumn />, label: 'Reporting & Analytics' },
                        ].map((step, i, arr) => (
                          <React.Fragment key={i}>
                            <div className={styles.pipelineStep}>
                              <div className={styles.pipelineIcon}>{step.icon}</div>
                              <div className={styles.pipelineLabel}>{step.label}</div>
                            </div>
                            {i < arr.length - 1 && <span className={styles.pipelineArrow}>→</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 — Reporting & Analytics */}
            <div className={styles.capabilityPillar}>
              <button className={styles.capabilityHeader} onClick={() => toggleCapability('cap-reporting')}>
                <div className={styles.capabilityNumber}>02</div>
                <div className={styles.capabilityHeaderBody}>
                  <div className={styles.capabilityHeaderTop}>
                    <div>
                      <span className={styles.capabilityTag}>Reporting &amp; Analytics</span>
                      <h3 className={styles.capabilityTitle}>From Raw Data to Confident Decisions</h3>
                    </div>
                    <FaChevronDown className={`${styles.capabilityChevron} ${openCapability === 'cap-reporting' ? styles.capabilityChevronOpen : ''}`} />
                  </div>
                  <p className={styles.capabilitySummary}>
                    Helping BFSI organizations improve reporting accuracy, reduce delivery time, and
                    move from static outputs to dynamic analytics that inform leadership and operations
                    teams in real time.
                  </p>
                </div>
              </button>
              <div className={`${styles.capabilityBody} ${openCapability === 'cap-reporting' ? styles.capabilityBodyOpen : ''}`}>
                <div className={styles.capabilityBodyInner}>
                  <div className={styles.capabilityDivider}></div>
                  <div className={styles.capabilityGrid}>
                    <div>
                      <h4 className={styles.subheading}>Reporting Coverage</h4>
                      <div className={styles.tileGrid}>
                        {[
                          { icon: <FaChartColumn />, title: 'Management Reporting' },
                          { icon: <FaReceipt />, title: 'Operational Reporting' },
                          { icon: <FaScaleBalanced />, title: 'Regulatory Reporting' },
                          { icon: <FaGauge />, title: 'Executive Dashboards' },
                          { icon: <FaChartLine />, title: 'Data Visualization' },
                          { icon: <FaChartPie />, title: 'Advanced Analytics' },
                        ].map((t, i) => (
                          <div key={i} className={styles.tile}>
                            {t.icon}
                            <div className={styles.tileTitle}>{t.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className={styles.subheading}>Analytics Value Chain</h4>
                      <div className={styles.analyticsFlow}>
                        <span className={styles.analyticsFlowStep}>DATA</span>
                        <span className={styles.analyticsArrow}>→</span>
                        <span className={styles.analyticsFlowStep}>ANALYTICS</span>
                        <span className={styles.analyticsArrow}>→</span>
                        <span className={styles.analyticsFlowStep}>INSIGHTS</span>
                        <span className={styles.analyticsArrow}>→</span>
                        <span className={`${styles.analyticsFlowStep} ${styles.analyticsFlowHighlight}`}>DECISIONS</span>
                      </div>
                      <h4 className={styles.subheading} style={{ marginTop: '2rem' }}>Technologies</h4>
                      <div className={styles.techTags}>
                        {['Tableau', 'Power BI', 'Snowflake', 'Databricks', 'dbt', 'BI Platforms'].map((t, i) => (
                          <span key={i} className={styles.techTag}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 — AI & Intelligent Automation */}
            <div className={styles.capabilityPillar}>
              <button className={styles.capabilityHeader} onClick={() => toggleCapability('cap-ai')}>
                <div className={styles.capabilityNumber}>03</div>
                <div className={styles.capabilityHeaderBody}>
                  <div className={styles.capabilityHeaderTop}>
                    <div>
                      <span className={styles.capabilityTag}>AI &amp; Intelligent Automation</span>
                      <h3 className={styles.capabilityTitle}>AI That Augments Teams and Accelerates Work</h3>
                    </div>
                    <FaChevronDown className={`${styles.capabilityChevron} ${openCapability === 'cap-ai' ? styles.capabilityChevronOpen : ''}`} />
                  </div>
                  <p className={styles.capabilitySummary}>
                    AI that augments teams, automates repetitive work, and accelerates decision-making —
                    applied practically to BFSI operations where it delivers measurable, sustainable
                    impact.
                  </p>
                </div>
              </button>
              <div className={`${styles.capabilityBody} ${openCapability === 'cap-ai' ? styles.capabilityBodyOpen : ''}`}>
                <div className={styles.capabilityBodyInner}>
                  <div className={styles.capabilityDivider}></div>
                  <div className={styles.capabilityGrid}>
                    <div>
                      <h4 className={styles.subheading}>AI Applications in BFSI</h4>
                      <div className={styles.aiAppList}>
                        {[
                          { icon: <FaWandMagicSparkles />, title: 'Intelligent Workflow Automation', desc: 'Automating repetitive operational tasks across investment and banking workflows' },
                          { icon: <FaFileWaveform />, title: 'Document & Data Processing', desc: 'Extracting structured data from financial documents and unstructured sources' },
                          { icon: <FaRobot />, title: 'Knowledge Assistants', desc: 'AI assistants that help analysts and operations teams find information and act faster' },
                          { icon: <FaArrowTrendUp />, title: 'Predictive Analytics', desc: 'Using data patterns to anticipate outcomes and support proactive decision-making' },
                          { icon: <FaGears />, title: 'AI-Enabled Operational Workflows', desc: 'Integrating AI into existing BFSI operational processes without disruption' },
                        ].map((a, i) => (
                          <div key={i} className={styles.aiAppItem}>
                            <div className={styles.aiAppIcon}>{a.icon}</div>
                            <div>
                              <div className={styles.aiAppTitle}>{a.title}</div>
                              <div className={styles.aiAppDesc}>{a.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className={styles.subheading}>AI Value Chain</h4>
                      <div className={styles.flowBoxStack}>
                        <div className={`${styles.flowBox} ${styles.flowBoxPrimary}`}>
                          <div className={styles.flowBoxLabel}>AI &amp; Automation</div>
                          <div className={styles.flowBoxItems}>LLMs · AI Agents · Intelligent Automation</div>
                        </div>
                        <div className={styles.flowArrow}>↓</div>
                        <div className={`${styles.flowBox} ${styles.flowBoxSecondary}`}>
                          <div className={`${styles.flowBoxLabel} ${styles.flowBoxLabelSecondary}`}>Team Augmentation</div>
                          <div className={styles.flowBoxItems}>Less manual work · Faster analysis · Better accuracy</div>
                        </div>
                        <div className={styles.flowArrow}>↓</div>
                        <div className={`${styles.flowBox} ${styles.flowBoxTertiary}`}>
                          <div className={`${styles.flowBoxLabel} ${styles.flowBoxLabelTertiary}`}>Business Productivity</div>
                          <div className={styles.flowBoxItems}>More capacity · Faster decisions · Reduced operational cost</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 04 — Production & Application Support */}
            <div className={styles.capabilityPillar}>
              <button className={styles.capabilityHeader} onClick={() => toggleCapability('cap-support')}>
                <div className={styles.capabilityNumber}>04</div>
                <div className={styles.capabilityHeaderBody}>
                  <div className={styles.capabilityHeaderTop}>
                    <div>
                      <span className={styles.capabilityTag}>Production &amp; Application Support</span>
                      <h3 className={styles.capabilityTitle}>Keeping Critical BFSI Systems Running</h3>
                    </div>
                    <FaChevronDown className={`${styles.capabilityChevron} ${openCapability === 'cap-support' ? styles.capabilityChevronOpen : ''}`} />
                  </div>
                  <p className={styles.capabilitySummary}>
                    Operational support for critical BFSI applications and production environments —
                    ensuring reliability, fast incident response, and continuous operational continuity
                    for trading and banking systems.
                  </p>
                </div>
              </button>
              <div className={`${styles.capabilityBody} ${openCapability === 'cap-support' ? styles.capabilityBodyOpen : ''}`}>
                <div className={styles.capabilityBodyInner}>
                  <div className={styles.capabilityDivider}></div>
                  <div className={styles.capabilityGrid}>
                    <div>
                      <h4 className={styles.subheading}>Support Coverage</h4>
                      <div className={styles.tileGrid}>
                        {[
                          { icon: <FaDesktop />, title: 'Application Monitoring' },
                          { icon: <FaClock />, title: 'Job & Batch Monitoring' },
                          { icon: <FaTriangleExclamation />, title: 'Incident Identification' },
                          { icon: <FaDiagramProject />, title: 'Data Pipeline Support' },
                          { icon: <FaListCheck />, title: 'Daily & Weekly Checks' },
                          { icon: <FaChartColumn />, title: 'Trading App Support' },
                        ].map((t, i) => (
                          <div key={i} className={styles.tile}>
                            {t.icon}
                            <div className={styles.tileTitle}>{t.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className={styles.subheading}>Operational Continuity Model</h4>
                      <div className={styles.flowBoxStack}>
                        <div className={`${styles.flowBox} ${styles.flowBoxPrimary}`}>
                          <div className={styles.flowBoxLabel}>Applications</div>
                          <div className={styles.flowBoxItems}>Trading Systems · Banking Apps · Data Platforms</div>
                        </div>
                        <div className={styles.flowArrow}>↓</div>
                        <div className={`${styles.flowBox} ${styles.flowBoxSecondary}`}>
                          <div className={`${styles.flowBoxLabel} ${styles.flowBoxLabelSecondary}`}>Monitoring</div>
                          <div className={styles.flowBoxItems}>Real-time health · Job tracking · Alert management</div>
                        </div>
                        <div className={styles.flowArrow}>↓</div>
                        <div className={`${styles.flowBox} ${styles.flowBoxSecondary}`}>
                          <div className={`${styles.flowBoxLabel} ${styles.flowBoxLabelSecondary}`}>Issue Detection</div>
                          <div className={styles.flowBoxItems}>Anomaly identification · Root cause analysis</div>
                        </div>
                        <div className={styles.flowArrow}>↓</div>
                        <div className={`${styles.flowBox} ${styles.flowBoxSecondary}`}>
                          <div className={`${styles.flowBoxLabel} ${styles.flowBoxLabelSecondary}`}>Response</div>
                          <div className={styles.flowBoxItems}>Incident management · Escalation · Resolution</div>
                        </div>
                        <div className={styles.flowArrow}>↓</div>
                        <div className={`${styles.flowBox} ${styles.flowBoxTertiary}`}>
                          <div className={`${styles.flowBoxLabel} ${styles.flowBoxLabelTertiary}`}>Continuous Operations</div>
                          <div className={styles.flowBoxItems}>Stability · Reliability · Operational continuity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Enablement */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="technology">
        <div className={styles.maxW7xl}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Technology Enablement</span>
            <h2 className={styles.sectionTitle}>Your Stack. Our Expertise.</h2>
            <p className={styles.sectionDesc}>
              Technology is an enabler, not the goal. We work across the platforms and tools your teams
              already rely on — and bring the right capabilities to solve the right problems.
            </p>
          </div>

          <div className={styles.technologyGrid}>
            {technologies.map((t, idx) => (
              <div key={idx} className={styles.techCard}>
                <div className={styles.techCardIcon}>{t.icon}</div>
                <h3 className={styles.techCardTitle}>{t.title}</h3>
                <p className={styles.techCardDesc}>{t.desc}</p>
                <div className={styles.techTags}>
                  {t.tags.map((tag, i) => (
                    <span key={i} className={styles.techTag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className={styles.section} id="case-studies">
        <div className={styles.maxW7xl}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Case Studies</span>
            <h2 className={styles.sectionTitle}>Real BFSI Problems. Practical Technology Solutions.</h2>
            <p className={styles.sectionDesc}>
              How we have helped financial institutions solve operational challenges through targeted
              technology intervention.
            </p>
          </div>

          <div className={styles.industryPanelWrap}>
            <div className={styles.tabsNav}>
              {caseStudies.map((c) => (
                <button
                  key={c.id}
                  className={`${styles.tabBtn} ${activeCase === c.id ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveCase(c.id)}
                >
                  {c.navIcon}
                  <span>{c.navLabel}</span>
                </button>
              ))}
            </div>

            <div className={styles.caseGrid}>
              <div>
                <span className={styles.caseTag}>{currentCase.tag}</span>
                <h3 className={styles.caseTitle}>{currentCase.title}</h3>
                <div className={styles.caseDetailRow}>
                  <span className={styles.caseDetailLabel}>Challenge</span>
                  <span className={styles.caseDetailValue}>{currentCase.challenge}</span>
                </div>
                <div className={styles.caseDetailRow}>
                  <span className={styles.caseDetailLabel}>Solution</span>
                  <span className={styles.caseDetailValue}>{currentCase.solution}</span>
                </div>
                <div className={styles.caseDetailRow}>
                  <span className={styles.caseDetailLabel}>Technology</span>
                  <span className={styles.caseDetailValue}>{currentCase.technology}</span>
                </div>
                <div className={styles.caseDetailRow}>
                  <span className={styles.caseDetailLabel}>Outcome</span>
                  <span className={`${styles.caseDetailValue} ${styles.caseDetailOutcome}`}>{currentCase.outcome}</span>
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <button className={styles.primaryBtn} onClick={() => navigate('/contact')}>
                    Talk to Our BFSI Experts
                  </button>
                </div>
              </div>

              <div className={styles.caseImagePanel}>
                <img src={currentCase.image} alt={currentCase.title} className={styles.caseImage} />
                <div className={styles.caseImageBadge}>
                  <div className={styles.caseStatLabel}>{currentCase.statLabel}</div>
                  <div className={styles.caseStatValue}>{currentCase.statValue}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="how-we-work">
        <div className={styles.maxW7xl}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>How We Work</span>
            <h2 className={styles.sectionTitle}>A Structured Approach to Every Engagement</h2>
            <p className={styles.sectionDesc}>
              From first conversation to live production — we follow a disciplined engagement model
              designed for the complexity and risk profile of BFSI technology delivery.
            </p>
          </div>

          <div className={styles.timeline}>
            {howWeWork.map((step, idx) => (
              <div key={idx} className={styles.processStep}>
                <div className={styles.processStepNumber}>{step.number}</div>
                <div className={styles.processStepIcon}>{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.trustStrip}>
            {trustStrip.map((t, idx) => (
              <div key={idx}>
                <div className={styles.trustItemIcon}>{t.icon}</div>
                <div className={styles.trustItemTitle}>{t.title}</div>
                <div className={styles.trustItemDesc}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <video className={styles.ctaBgVideo} autoPlay loop muted playsInline>
            <source src={ctaBgVideo} type="video/mp4" />
          </video>
          <div className={styles.ctaGlow}></div>
          <h2 className={styles.ctaTitle}>
            Build Smarter, More Resilient <br />BFSI Operations
          </h2>
          <p className={styles.ctaText}>
            Partner with our BFSI team to design, deliver, and support technology capabilities built
            for real financial workloads — with domain understanding at every step.
          </p>
          <div className={styles.ctaBtnGroup}>
            <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
              Talk to Our BFSI Experts <FaArrowRight />
            </button>
            <button className={styles.ctaButtonSecondary} onClick={() => navigate('/contact')}>
              Request a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
