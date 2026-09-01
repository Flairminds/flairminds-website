import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCalendarDays,
  FaSliders,
  FaBolt,
  FaCircleCheck,
  FaCircleQuestion,
  FaStar,
  FaDiagramProject,
  FaMicrochip,
  FaNetworkWired,
  FaArrowRight,
} from 'react-icons/fa6';
import Seo from '../../components/seo/Seo';
import AutomationBackground from './AutomationBackground';
import TiltCard from './TiltCard';
import styles from './IndustrialBuildingAutomation.module.css';

const bacnetFeatures = [
  {
    icon: <FaCalendarDays />,
    color: 'cyan',
    title: 'Master Schedules with Ease',
    desc: 'Leverage BACnet Schedule and Calendar Objects to define recurring programs, weekly schedules, and automated date-based exception overrides.',
    points: ['Weekly program schedules', 'Holiday & override calendars'],
  },
  {
    icon: <FaSliders />,
    color: 'purple',
    title: 'Intuitive UI for Control',
    desc: 'Effortlessly configure automation rules and bind UI events directly to BACnet object properties with real-time visual feedback.',
    points: ['Schedule & Notification objects', 'Direct object property linking'],
  },
  {
    icon: <FaBolt />,
    color: 'blue',
    title: 'UI to Ladder Logic Triggers',
    desc: 'Initiate system-wide events directly from the UI or fire schedules automatically through custom PLC Ladder Logic circuits.',
    points: ['Dual-trigger capability', 'Hardware-level synchronization'],
  },
];

const benefitCards = [
  {
    color: 'cyan',
    tag: 'Business Value',
    title: 'Zero 3rd-Party Costs',
    desc: 'Reduces customer dependence on third-party programming software and significantly cuts overall development cost.',
  },
  {
    color: 'purple',
    tag: 'Global Agility',
    title: 'Streamlined Deployment',
    desc: 'Supports global project deployment by streamlining PLC configuration for engineers and plant operators.',
  },
  {
    color: 'green',
    tag: 'Standardized',
    title: 'Intuitive UI Adaptation',
    desc: 'Logic creation is simplified and fully aligned to global PLC programming standards through dynamic Ladder diagrams.',
  },
  {
    color: 'yellow',
    tag: 'Performance',
    title: 'Low Latency Sync',
    desc: 'Ensures fast, real-time mapping between the visual canvas logic and the underlying internal firmware actions.',
  },
];

const faqs = [
  {
    color: 'cyan',
    q: 'Do we need third-party tools to deploy logic?',
    a: 'No. Our custom software suites enable users to design Ladder Logic and deploy it directly to PLC hardware without the need for expensive third-party tools.',
  },
  {
    color: 'purple',
    q: 'How does the BACnet integration work?',
    a: 'We seamlessly integrate the BACnet protocol into the PLC application, providing a user-friendly interface to intuitively manage schedules, calendars, and building automation tasks.',
  },
  {
    color: 'blue',
    q: 'Can UI events trigger PLC logic directly?',
    a: 'Absolutely. Our dual-trigger capability ensures that events initiated directly from the user interface can trigger schedules and notifications via custom PLC ladder logic.',
  },
  {
    color: 'green',
    q: 'Is it possible to monitor memory values in real-time?',
    a: 'Yes. We design intuitive UIs that allow you to fetch and display real-time values from PLC memory addresses directly inside your visual logic IDE.',
  },
];

function colorSuffix(color) {
  return color.charAt(0).toUpperCase() + color.slice(1);
}

function tagCls(color) {
  const map = {
    cyan: styles.tagCyan,
    purple: styles.tagPurple,
    blue: styles.tagBlue,
    green: styles.tagGreen,
    yellow: styles.tagYellow,
  };
  return map[color] || styles.tagCyan;
}

function iconWrapCls(color) {
  const map = {
    cyan: styles.iconWrapCyan,
    purple: styles.iconWrapPurple,
    blue: styles.iconWrapBlue,
    green: styles.iconWrapGreen,
  };
  return map[color] || styles.iconWrapCyan;
}

function glowCardCls(color) {
  const map = {
    cyan: styles.glowCyan,
    purple: styles.glowPurple,
    blue: styles.glowBlue,
    green: styles.glowGreen,
    yellow: styles.glowYellow,
  };
  return map[color] || styles.glowCyan;
}

export default function IndustrialBuildingAutomation() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Seo
        title="Industrial & Building Automation Solutions | FlairMinds"
        description="FlairMinds engineers mission-critical industrial automation software — from custom PLC Ladder Logic IDEs and direct firmware execution to BACnet building automation integration."
        path="/industrial-building-automation"
      />

      <AutomationBackground />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`${styles.maxW7xl} ${styles.heroGrid}`}>
          <div className={styles.heroTextCol}>
            <div className={styles.heroTag}>
              <span className={styles.heroPingDot}></span>
              Industrial &amp; Building Automation
            </div>
            <h1 className={styles.heroTitle}>
              Powering Advanced <br />
              <span className={styles.titleGradientCyan}>Industrial &amp; Building</span> <br />
              <span className={styles.titleGradientPurple}>Automation Systems</span>
            </h1>
            <p className={styles.heroDescription}>
              From generic PLC Ladder Logic environments and direct firmware execution to intelligent
              BACnet building protocols, FlairMinds engineers mission-critical automation software.
            </p>
            <div className={styles.heroBtnGroup}>
              <a href="#casestudy" className={styles.primaryBtn}>
                Explore Custom Solutions
              </a>
              <a href="#bacnet" className={styles.secondaryBtn}>
                See BACnet Integration
              </a>
            </div>
          </div>

          <div className={styles.heroGraphicCol}>
            <TiltCard maxTilt={15} scale={1.03} className={styles.graphicCard}>
              <div className={styles.graphicGlow}></div>
              <div className={styles.graphicCardHeader}>
                <span className={styles.graphicCardLabel}>Universal Automation Suite</span>
                <FaMicrochip className={styles.microchipIcon} />
              </div>
              <div className={styles.deviceScreen}>
                <div className={styles.deviceGlow}></div>
                <div className={styles.deviceTopRow}>
                  <span className={styles.deviceProtocol}>
                    <FaNetworkWired /> Any Protocol / BACnet
                  </span>
                  <span className={styles.deviceOnline}>ONLINE ●</span>
                </div>
                <div className={styles.deviceCenter}>
                  <div className={styles.deviceTitle}>CUSTOM PLC IDE</div>
                  <div className={styles.deviceSubtitle}>Universal Firmware Gateway Active</div>
                </div>
                <div className={styles.deviceStatsRow}>
                  <div>LOGIC: <span className={styles.statValue}>RUN</span></div>
                  <div>SCAN: <span className={styles.statValue}>10ms</span></div>
                  <div>MEMORY: <span className={styles.statValueGreen}>MAPPED</span></div>
                </div>
              </div>
              <div className={styles.graphicFooterRow}>
                <span>Direct Firmware Execution</span>
                <span className={styles.footerLink}>Hardware Agnostic <FaArrowRight /></span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* BACnet Integration Section */}
      <section id="bacnet" className={styles.bacnetSection}>
        <div className={styles.maxW7xl}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Building Automation</span>
            <h2 className={styles.sectionTitle}>BACnet Integration for Intelligent Control</h2>
            <p className={styles.sectionDesc}>
              Bridging high-speed PLC hardware logic with modern smart building automation protocols for
              total operational harmony.
            </p>
          </div>

          <div className={styles.bacnetGrid}>
            {bacnetFeatures.map((feature, idx) => (
              <TiltCard
                key={idx}
                maxTilt={10}
                scale={1.02}
                className={`${styles.featureCard} ${glowCardCls(feature.color)}`}
              >
                <div className={styles.featureCardWatermark}>{feature.icon}</div>
                <div className={`${styles.iconWrap} ${iconWrapCls(feature.color)}`}>{feature.icon}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
                <ul className={styles.pointList}>
                  {feature.points.map((point, pIdx) => (
                    <li key={pIdx}>
                      <FaCircleCheck className={styles[`checkIcon${colorSuffix(feature.color)}`]} />
                      {point}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="casestudy" className={styles.caseStudySection}>
        <div className={styles.maxW7xl}>
          <div className={styles.caseStudyCard}>
            <div className={styles.caseStudyGlow}></div>
            <div className={styles.caseStudyGrid}>

              <div className={styles.caseStudyLeft}>
                <div className={styles.caseStudyBadge}>
                  <FaStar className={styles.starIcon} /> Client Case Study Highlight
                </div>
                <h2 className={styles.caseStudyTitle}>
                  XMPS - 2000 <br />
                  <span className={styles.caseStudySubtitle}>Custom Ladder Logic Platform</span>
                </h2>
                <p className={styles.caseStudyDesc}>
                  Developed for a <strong>Leading Indian PLC Manufacturing Pioneer</strong> with global
                  deployments, eliminating dependence on high-cost third-party programming suites.
                </p>

                <div className={styles.caseStudyPoints}>
                  <div className={styles.caseStudyPoint}>
                    <div className={styles.pointIconWrap}><FaDiagramProject /></div>
                    <div>
                      <h4>Visual Ladder Logic Editor</h4>
                      <p>Draw standard ladder symbols and convert into native hardware code without 3rd-party software.</p>
                    </div>
                  </div>
                  <div className={styles.caseStudyPoint}>
                    <div className={`${styles.pointIconWrap} ${styles.pointIconPurple}`}><FaMicrochip /></div>
                    <div>
                      <h4>Real-time Memory (OM) Mapping</h4>
                      <p>Fetch and display values directly from PLC memory addresses in the UI.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.caseStudyRight}>
                <div className={styles.benefitColumns}>
                  {[
                    [benefitCards[0], benefitCards[2]],
                    [benefitCards[1], benefitCards[3]],
                  ].map((column, colIdx) => (
                    <div
                      key={colIdx}
                      className={`${styles.benefitColumn} ${colIdx === 1 ? styles.benefitColumnOffset : ''}`}
                    >
                      {column.map((card, idx) => (
                        <TiltCard
                          key={idx}
                          maxTilt={12}
                          scale={1.03}
                          className={`${styles.benefitCard} ${glowCardCls(card.color)}`}
                        >
                          <div className={styles.benefitCardGlow}></div>
                          <span className={`${styles.benefitTag} ${tagCls(card.color)}`}>{card.tag}</span>
                          <h4 className={styles.benefitTitle}>{card.title}</h4>
                          <p className={styles.benefitDesc}>{card.desc}</p>
                        </TiltCard>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={styles.faqSection}>
        <div className={styles.maxW7xl}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Got Questions?</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <TiltCard key={idx} maxTilt={5} scale={1.01} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>
                  <FaCircleQuestion className={styles[`faqIcon${colorSuffix(faq.color)}`]} />
                  {faq.q}
                </h3>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaGlow}></div>
          <h2 className={styles.ctaTitle}>Ready to Build Your Custom Automation Platform?</h2>
          <p className={styles.ctaText}>
            Let's turn your industrial or building automation vision into a scalable, hardware-agnostic
            digital solution.
          </p>
          <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
            Discuss Your Automation Project <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
