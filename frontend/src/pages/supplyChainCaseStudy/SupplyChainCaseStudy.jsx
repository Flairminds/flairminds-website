import React, { useState } from 'react';
import styles from './SupplyChainCaseStudy.module.css';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Seo from '../../components/seo/Seo';

import schedulingWorkbenchImg from '../../assets/supply-chain/scheduling-workbench.webp';
import ganttChartImg from '../../assets/supply-chain/gantt-chart.webp';
import capacityPlanningImg from '../../assets/supply-chain/capacity-planning.webp';
import dashboardKpiImg from '../../assets/supply-chain/dashboard-kpi.webp';
import detailedSchedulingImg from '../../assets/supply-chain/detailed-scheduling.webp';

const tabs = [
  {
    title: "Scheduling Workbench",
    desc: "Planners can interactively schedule orders on machines using drag-and-drop. Auto-scheduling optimizes capacity and rules, highlighting bottlenecks in real-time.",
    badges: [
      { label: "Automated Scheduling", cls: "blue" },
      { label: "Drag & Drop", cls: "teal" },
      { label: "Constraint-Aware", cls: "green" }
    ],
    img: schedulingWorkbenchImg,
  },
  {
    title: "Gantt Chart & Production Timeline",
    desc: "Visual Gantt timeline showing machine and resource utilization across shifts and days. Planners can instantly see bottlenecks, idle time, and conflicts — and resolve them with real-time drag-and-drop rescheduling.",
    badges: [
      { label: "Gantt Timeline", cls: "blue" },
      { label: "Conflict Detection", cls: "teal" },
      { label: "Multi-shift View", cls: "green" }
    ],
    img: ganttChartImg
  },
  {
    title: "Capacity & Machine Load Planning",
    desc: "Capacity load analysis across all machines and work centers. Identify overloaded resources, smooth production loads, and make data-driven decisions about overtime, subcontracting, or rescheduling.",
    badges: [
      { label: "Machine Load", cls: "blue" },
      { label: "Capacity Analysis", cls: "teal" },
      { label: "Resource Balancing", cls: "green" }
    ],
    img: capacityPlanningImg
  },
  {
    title: "Dashboard & KPI Overview",
    desc: "Executive and operational dashboards with live production KPIs — schedule adherence, machine utilization, order completion rates, and on-time delivery performance across the floor.",
    badges: [
      { label: "Live KPIs", cls: "blue" },
      { label: "Schedule Adherence", cls: "teal" },
      { label: "OTD Tracking", cls: "green" }
    ],
    img: dashboardKpiImg
  },
  {
    title: "Detailed Production Scheduling",
    desc: "Granular scheduling view with operation-level detail — individual work center assignments, setup times, run times, and dependencies. The foundation for accurate delivery date commitments.",
    badges: [
      { label: "Operation-Level", cls: "blue" },
      { label: "Setup Times", cls: "teal" },
      { label: "Dependency Mgmt", cls: "green" }
    ],
    img: detailedSchedulingImg
  }
];

function badgeCls(cls) {
  if (cls === 'teal') return styles.badgeTeal;
  if (cls === 'green') return styles.badgeGreen;
  return styles.badgeBrand;
}

export default function SupplyChainCaseStudy() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className={styles.container}>
      <Seo
        title="AI-Powered Supply Chain Orchestration Case Study | FlairMinds"
        description="Explore how FlairMinds transformed supply chain operations with an AI-powered Supply Chain Orchestration solution, improving visibility, efficiency, and decision-making."
        path="/case-study/supply-chain-orchestration"
      />
      <section className={styles.heroSection}>
        <div className={`${styles.maxW7xl} ${styles.heroGrid}`}>

          {/* Text Area */}
          <div className={styles.heroTextCol}>
            <div className={styles.heroTag}>
              <span className={styles.heroPingDot}></span>
              Next-Gen Supply Chain Orchestration
            </div>
            <h1 className={styles.heroTitle}>
              We Don’t Just Provide Supply Chain Intelligence. <br />
              <span className={styles.titleGradient}>We Orchestrate Decisions.</span>
            </h1>
            <p className={styles.heroDescription}>
              Move from passive dashboards to automated, high-precision action plans. FlairMinds connects planning directly to physical execution, synchronizing every node to drive real-world outcomes.
            </p>
            <div className={styles.heroBtnGroup}>
              <a href="#why-us" className={styles.primaryBtn}>
                See Why We Are Different
              </a>
              <a href="#nodes" className={styles.secondaryBtn}>
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* Graphic Area (Generic Orchestration Flow) */}
          <div className={styles.heroGraphicCol}>
            {/* Main Graphic */}
            <div className={styles.graphicCard}>
              <div className={styles.graphicGlow}></div>

              <h4 className={styles.graphicTitle}>Dynamic Orchestration Loop</h4>

              <div className={styles.graphicLoop}>
                {/* Node 1 */}
                <div className={styles.graphicNode}>
                  <div className={styles.nodeLeft}>
                    <div className={`${styles.nodeAvatar} ${styles.avatarBrand}`}>D</div>
                    <div>
                      <div className={styles.nodeTitle}>Demand Signals</div>
                      <div className={styles.nodeSubtitle}>Real-time market ingestion</div>
                    </div>
                  </div>
                  <span className={styles.nodeStatus}>Active</span>
                </div>

                {/* Connector Arrow */}
                <div className={styles.graphicArrow}>
                  <svg className={styles.arrowSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-6l-7 7-7-7"></path>
                  </svg>
                </div>

                {/* Orchestration Core (Center) */}
                <div className={styles.brainCard}>
                  <div className={styles.brainGlow}></div>
                  <div className={styles.brainTitle}>Decision Brain</div>
                  <div className={styles.brainSubtitle}>FlairMinds Autonomous Engine</div>
                  <div className={styles.brainText}>Cross-Node Action Reconciliation</div>
                </div>

                {/* Connector Arrow */}
                <div className={styles.graphicArrow}>
                  <svg className={styles.arrowSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-6l-7 7-7-7"></path>
                  </svg>
                </div>

                {/* Node 2 */}
                <div className={styles.graphicNode}>
                  <div className={styles.nodeLeft}>
                    <div className={`${styles.nodeAvatar} ${styles.avatarTeal}`}>E</div>
                    <div>
                      <div className={styles.nodeTitle}>Optimized Execution</div>
                      <div className={styles.nodeSubtitle}>Procure & Delivery action</div>
                    </div>
                  </div>
                  <span className={styles.statusPill}>Synchronized</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Supply Chain Challenges We Solve */}
      <section id="challenges" className={styles.challengesSection}>
        <div className={styles.maxW7xl}>

          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Supply Chain Challenges We Solve</span>
            <h2 className={styles.sectionTitle}>
              We Start With the Problem,<br />Not the Software
            </h2>
            <p className={styles.sectionDesc}>
              Your operations are complex. We bring deep supply chain expertise, not off-the-shelf templates, to every engagement.
            </p>
          </div>

          <div className={styles.challengesGrid}>

            <div className={styles.challengeCard}>
              <div className={styles.challengeIcon}>📦</div>
              <h3 className={styles.cardTitle}>Inventory Inefficiencies</h3>
              <p className={styles.cardDesc}>Excess stock tying up working capital alongside frequent stockouts eroding service levels and customer trust.</p>
            </div>

            <div className={styles.challengeCard}>
              <div className={`${styles.challengeIcon} ${styles.challengeIconTeal}`}>🚚</div>
              <h3 className={styles.cardTitle}>Logistics Cost Escalation</h3>
              <p className={styles.cardDesc}>Carrier fragmentation, inefficient routing, and reactive freight decisions compounding transportation spend.</p>
            </div>

            <div className={styles.challengeCard}>
              <div className={styles.challengeIcon}>📊</div>
              <h3 className={styles.cardTitle}>Demand Volatility</h3>
              <p className={styles.cardDesc}>Legacy forecasting methods unable to capture market signals, promotional effects, or external disruptions in time.</p>
            </div>

            <div className={styles.challengeCard}>
              <div className={`${styles.challengeIcon} ${styles.challengeIconTeal}`}>⚙️</div>
              <h3 className={styles.cardTitle}>Manual Planning Processes</h3>
              <p className={styles.cardDesc}>Spreadsheet-driven planning consuming analyst capacity, introducing errors, and slowing response to market changes.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Intelligence Across Every Node of Your Chain (Simplified, 3 Nodes, Generic Focus) */}
      <section id="nodes" className={styles.nodesSection}>
        <div className={styles.maxW7xl}>

          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Orchestration Nodes</span>
            <h2 className={styles.sectionTitle}>
              Intelligence Across Every Node of Your Chain
            </h2>
            <p className={styles.sectionDesc}>
              Unlock optimal, automated decision-making across three foundational elements of your supply chain ecosystem.
            </p>
          </div>

          {/* Visual Flow Connector */}
          <div className={styles.visualConnector}>
            <div className={styles.connectorSegment}>
              <div className={`${styles.connectorDot} ${styles.dotBrand}`}></div>
              <div className={`${styles.connectorLine} ${styles.lineToTeal}`}></div>
            </div>
            <div className={styles.connectorSegment}>
              <div className={`${styles.connectorDot} ${styles.dotTeal}`}></div>
              <div className={`${styles.connectorLine} ${styles.lineToBrand}`}></div>
            </div>
            <div className={`${styles.connectorDot} ${styles.dotBrand}`}></div>
          </div>

          <div className={styles.nodesGrid}>

            {/* Node 1: Demand Planning */}
            <div className={styles.nodeCard}>
              <div>
                {/* Custom Graphic SVG */}
                <div className={styles.nodeIcon}>
                  <svg className={styles.nodeIconSvg} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className={styles.nodeCardTitle}>Demand Planning</h3>
                <p className={styles.cardDesc}>
                  Achieve precise demand forecasting by processing real-world historical indicators, seasonal shifts, and market factors. Eliminate guessing and prevent understocking.
                </p>
              </div>
            </div>

            {/* Node 2: Procurement */}
            <div className={styles.nodeCard}>
              <div>
                {/* Custom Graphic SVG */}
                <div className={`${styles.nodeIcon} ${styles.nodeIconTeal}`}>
                  <svg className={styles.nodeIconSvg} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <h3 className={styles.nodeCardTitle}>Procurement</h3>
                <p className={styles.cardDesc}>
                  Automate vendor evaluations, purchase trigger signals, and supplier allocation parameters. Align lead times seamlessly with dynamic manufacturing and replenishment needs.
                </p>
              </div>
            </div>

            {/* Node 3: Inventory */}
            <div className={styles.nodeCard}>
              <div>
                {/* Custom Graphic SVG */}
                <div className={styles.nodeIcon}>
                  <svg className={styles.nodeIconSvg} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <h3 className={styles.nodeCardTitle}>Inventory</h3>
                <p className={styles.cardDesc}>
                  Optimize buffer strategies, safety stock targets, and internal multi-location allocation dynamically. Reduce working capital lockups without sacrificing end-user service agreements.
                </p>
              </div>
            </div>


            <div className={styles.nodeCard}>
              <div>
                {/* Custom Graphic SVG */}
                <div className={styles.nodeIcon}>
                  <svg className={styles.nodeIconSvg} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className={styles.nodeCardTitle}>Production Planning</h3>
                <p className={styles.cardDesc}>
                  We sync supply chain strategy with execution, balancing workloads dynamically to create a self-improving loop.Our platform optimizes inventory, prevents over-production, and frees up capital without sacrificing service levels.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Production Planning, Scheduling & Deliver (Themed around "Deliver" and Benefits) */}






      {/* Why FlairMinds Section (Moved to Upper Section) */}


      {/* Pillar 1: Human Expertise (NEWLY ADDED & PROMINENT) */}


      {/* Pillar 2: Data Engineering (WMS/TMS removed) */}


      {/* Pillar 3: AI & Machine Learning */}


      {/* See the Platform in Action (Product Showcase) */}
      <section id="product" className={styles.showcaseSection}>
        <div className={styles.maxW7xl}>

          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Production Planning &amp; Scheduling</span>
            <h2 className={styles.sectionTitle}>
              See the Platform in Action
            </h2>
            <p className={styles.sectionDesc}>
              FlairMinds' Production Planning &amp; Scheduling application — real screenshots from our deployed solution helping manufacturers plan, schedule, and reschedule with precision.
            </p>
          </div>

          <div className={styles.productTabs}>
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className={`${styles.productTabButton} ${activeTab === idx ? styles.active : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className={styles.maxW7xl}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseCardHeader}>
                <div className={styles.showcaseTextContent}>
                  <div className={styles.showcaseTitle}>{tabs[activeTab].title}</div>
                  <div className={styles.showcaseDesc}>{tabs[activeTab].desc}</div>
                </div>
                <div className={styles.showcaseBadges}>
                  {tabs[activeTab].badges.map((b, bIdx) => (
                    <span key={bIdx} className={`${styles.badge} ${badgeCls(b.cls)}`}>
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.showcaseCardBody}>
                <div className={styles.appWindow}>
                  <div className={styles.windowTitlebar}>
                    <span className={`${styles.windowDot} ${styles.dotRed}`}></span>
                    <span className={`${styles.windowDot} ${styles.dotYellow}`}></span>
                    <span className={`${styles.windowDot} ${styles.dotGreen}`}></span>
                    <span className={styles.windowUrl}>app.flairminds.com/production-scheduler</span>
                  </div>
                  <img
                    src={tabs[activeTab].img}
                    alt={tabs[activeTab].title}
                    loading="lazy"
                    className={styles.appImage}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why FlairMinds — A Different Kind of Partner */}
      <section id="why" className={styles.whySection}>
        <div className={styles.maxW7xl}>
          <div className={`${styles.maxW7xl} ${styles.whyGrid}`}>

            <div className={styles.whyLeft}>
              <span className={styles.eyebrow}>Why FlairMinds</span>
              <h2 className={styles.whyTitle}>A Different Kind of Partner</h2>
              <p className={styles.whyDesc}>We're not a software vendor asking you to fit your operations into our product. We're a transformation partner that builds around your reality.</p>

              <div className={styles.graphicLoop}>
                <div className={styles.whyPillar}>
                  <span className={styles.pillarNum}>01</span>
                  <div>
                    <h3 className={styles.pillarTitle}>Business-first approach</h3>
                    <p className={styles.cardDesc}>Every engagement starts with understanding your operations, competitive context, and strategic goals — before any technology decision is made.</p>
                  </div>
                </div>
                <div className={styles.whyPillar}>
                  <span className={styles.pillarNum}>02</span>
                  <div>
                    <h3 className={styles.pillarTitle}>Genuine AI expertise</h3>
                    <p className={styles.cardDesc}>Our AI work is grounded in supply chain operations, not generic model deployment. We build models that work in your data environment, with your constraints.</p>
                  </div>
                </div>
                <div className={styles.whyPillar}>
                  <span className={styles.pillarNum}>03</span>
                  <div>
                    <h3 className={styles.pillarTitle}>End-to-end delivery accountability</h3>
                    <p className={styles.cardDesc}>From initial discovery to production deployment and optimization — one team, one outcome, shared accountability for business results.</p>
                  </div>
                </div>
                <div className={styles.whyPillar}>
                  <span className={styles.pillarNum}>04</span>
                  <div>
                    <h3 className={styles.pillarTitle}>Scalable enterprise architecture</h3>
                    <p className={styles.cardDesc}>Solutions designed to grow with your business — modular, integration-ready, and built on proven cloud and data infrastructure patterns.</p>
                  </div>
                </div>
                <div className={styles.whyPillar}>
                  <span className={styles.pillarNum}>05</span>
                  <div>
                    <h3 className={styles.pillarTitle}>Human Expertise</h3>
                    <p className={styles.cardDesc}>Our teams consist of deep domain veterans and systems integration experts. We bridge the gap between algorithmic code and complex real-world daily operations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.whyRightCard}>
              <div className={styles.rightCardTitle}>Our Delivery Approach</div>
              <div className={styles.approachList}>
                <div className={styles.approachItem}>
                  <div className={styles.approachIcon}>🎯</div>
                  <div>
                    <div className={styles.approachItemTitle}>Problem-first discovery</div>
                    <div className={styles.approachItemDesc}>Map business challenge before solution design</div>
                  </div>
                </div>
                <div className={styles.approachItem}>
                  <div className={styles.approachIcon}>🔬</div>
                  <div>
                    <div className={styles.approachItemTitle}>Data and process analysis</div>
                    <div className={styles.approachItemDesc}>Study operational data, constraints, and workflows</div>
                  </div>
                </div>
                <div className={styles.approachItem}>
                  <div className={styles.approachIcon}>🏛️</div>
                  <div>
                    <div className={styles.approachItemTitle}>Architecture design</div>
                    <div className={styles.approachItemDesc}>Solution architecture aligned to enterprise standards</div>
                  </div>
                </div>
                <div className={styles.approachItem}>
                  <div className={styles.approachIcon}>⚙️</div>
                  <div>
                    <div className={styles.approachItemTitle}>Build and deploy</div>
                    <div className={styles.approachItemDesc}>Agile delivery with operational feedback loops</div>
                  </div>
                </div>
                <div className={styles.approachItem}>
                  <div className={styles.approachIcon}>📊</div>
                  <div>
                    <div className={styles.approachItemTitle}>Continuous optimization</div>
                    <div className={styles.approachItemDesc}>Refine through live operational data and usage patterns</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Served Section (Vertical List of Industries) */}
      <section id="industries" className={styles.industriesSection}>
        <div className={styles.maxW7xl}>

          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Industries</span>
            <h2 className={styles.sectionTitle}>
              Vertical Expertise Across Sectors
            </h2>
            <p className={styles.sectionDesc}>
              Tailored orchestration architectures built specifically for sector-specific constraints.
            </p>
          </div>

          {/* Industry Grid Layout */}
          <div className={styles.industriesGrid}>

            {/* Sector 1 */}
            <div className={styles.industryCard}>
              <div className={styles.cardBorderBrand}></div>
              <div className={styles.industryIcon}>
                <svg className={styles.industryIconSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <span className={`${styles.industryLabel} ${styles.labelBrand}`}>Complex Constraints</span>
              <h3 className={styles.cardTitle}>Manufacturing & Assembly</h3>
              <p className={styles.industryDesc}>Managing machinery variables, resource dependencies, and work-in-progress inventories.</p>
            </div>

            {/* Sector 2 */}
            <div className={styles.industryCard}>
              <div className={styles.cardBorderTeal}></div>
              <div className={`${styles.industryIcon} ${styles.industryIconTeal}`}>
                <svg className={styles.industryIconSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <span className={`${styles.industryLabel} ${styles.labelTeal}`}>Dynamic Demand</span>
              <h3 className={styles.cardTitle}>Consumer Packaged Goods (CPG)</h3>
              <p className={styles.industryDesc}>Mitigating promotional demand peaks, channel volatility, and fast-moving dynamic shelf lifespans.</p>
            </div>

            {/* Sector 3 */}
            <div className={styles.industryCard}>
              <div className={styles.cardBorderBrand}></div>
              <div className={styles.industryIcon}>
                <svg className={styles.industryIconSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V13a1 1 0 00-1-1h-6v4"></path></svg>
              </div>
              <span className={`${styles.industryLabel} ${styles.labelBrand}`}>Flow Management</span>
              <h3 className={styles.cardTitle}>Logistics & Distribution</h3>
              <p className={styles.industryDesc}>Synchronizing transit lanes, shipping variables, cross-dock assignments, and carrier planning.</p>
            </div>

            {/* Sector 4 */}
            <div className={styles.industryCard}>
              <div className={styles.cardBorderTeal}></div>
              <div className={`${styles.industryIcon} ${styles.industryIconTeal}`}>
                <svg className={styles.industryIconSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <span className={`${styles.industryLabel} ${styles.labelTeal}`}>Ultra-Fast Cycles</span>
              <h3 className={styles.cardTitle}>Enterprise E-commerce</h3>
              <p className={styles.industryDesc}>Coordinating fast direct-to-consumer order flow, multi-depot holdings, and returns processing.</p>
            </div>

            {/* Sector 5 */}
            <div className={styles.industryCard}>
              <div className={styles.cardBorderBrand}></div>
              <div className={styles.industryIcon}>
                <svg className={styles.industryIconSvg} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <span className={`${styles.industryLabel} ${styles.labelBrand}`}>Regulatory & Batch</span>
              <h3 className={styles.cardTitle}>Pharmaceuticals & Healthcare</h3>
              <p className={styles.industryDesc}>Adhering strictly to compliance regulations, handling cold-chain requirements, and batch tracking.</p>
            </div>

            {/* Sector 6: Visual closing tile */}
            <div className={styles.closingTile}>
              <div className={styles.closingGlow1}></div>
              <div className={styles.closingGlow2}></div>
              <svg className={styles.closingIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              <h3 className={styles.closingTitleText}>Don't see your sector?</h3>
              <p className={styles.closingDesc}>Our orchestration architecture adapts to any multi-node operational environment.</p>
              <a href="#contact" className={styles.closingLink}>
                Let's talk
                <svg className={styles.nodeFooterSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Business Outcomes Section (Compact, Reduced Spacing, One-Line Outcomes) */}
      <section className={styles.outcomesSection}>
        {/* Design Graphics Accents */}
        <div className={styles.outcomesGlowLeft}></div>
        <div className={styles.outcomesGlowRight}></div>

        <div className={styles.maxW7xl} style={{ position: "relative", zIndex: 10 }}>

          <div className={styles.outcomesHeader}>
            <span className={styles.outcomesEyebrow}>Measurable Outcomes</span>
            <h2 className={styles.outcomesTitle}>Continuous Business Improvement</h2>
          </div>

          <div className={styles.outcomesGrid}>

            <div className={styles.outcomeCard}>
              <div className={styles.statNumber}>22%</div>
              <div className={styles.statTitle}>Working Capital</div>
              <p className={styles.statDesc}>Reduced by up to 22% through dynamic buffer stock synchronization.</p>
            </div>

            <div className={styles.outcomeCard}>
              <div className={styles.statNumber}>15-30%</div>
              <div className={styles.statTitle}>Forecast Accuracy</div>
              <p className={styles.statDesc}>Improved forecasting accuracy by capturing real-time demand fluctuations.</p>
            </div>

            <div className={styles.outcomeCard}>
              <div className={styles.statNumber}>18-24%</div>
              <div className={styles.statTitle}>Cost Reduction</div>
              <p className={styles.statDesc}>Decreased operational costs by smoothing production queues.</p>
            </div>

            <div className={styles.outcomeCard}>
              <div className={styles.statNumber}>35%</div>
              <div className={styles.statTitle}>Machine Idle Time</div>
              <p className={styles.statDesc}>Slashed overall idle time across all work centers and shifts.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <FaShieldAlt className={styles.ctaIcon} />
          <h2 className={styles.ctaTitle}>Ready to Orchestrate Decisions?</h2>
          <p className={styles.ctaText}>
            Connect with our functional architecture specialists to evaluate bottlenecks in your current pipeline.
          </p>
          <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
            Discuss Your Orchestration Challenge <FaArrowRight />
          </button>
        </div>
      </section>


    </div>
  );
}
