import { useState } from 'react';
import { ShieldCheck, HeartPulse, Truck, Wallet, GraduationCap, Building2, ArrowRight, Factory, Scale, CheckCircle2 } from 'lucide-react';
import styles from './IndustriesSection.module.css';

const industriesData = [
  {
    id: 'fintech',
    title: 'FinTech',
    icon: <Wallet className={styles.tabIcon} />,
    desc: 'Secure, high-performance architectures enabling seamless financial operations and transactions.',
    features: ['Custom Payment Gateways', 'Real-time Fraud Detection', 'Automated Compliance Tech'],
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'logistics',
    title: 'Logistics',
    icon: <Truck className={styles.tabIcon} />,
    desc: 'Optimizing supply chains globally with intelligent, real-time tracking software and analytics.',
    features: ['Supply Chain Visibility', 'AI Route Optimization', 'Warehouse Management Systems'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'healthtech',
    title: 'HealthTech',
    icon: <HeartPulse className={styles.tabIcon} />,
    desc: 'Modernizing healthcare with reliable, compliant data solutions that improve patient outcomes.',
    features: ['Secure EHR Integrations', 'Telehealth Platforms', 'HIPAA Compliant Cloud Hosting'],
    img: 'https://images.unsplash.com/photo-1576091160550-2173ff94031d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'industrial',
    title: 'Industrial Automation',
    icon: <Factory className={styles.tabIcon} />,
    desc: 'Enhancing productivity and efficiency with intelligent, automated industrial control systems.',
    features: ['PLC Configuration', 'IoT Sensor Networks', 'Predictive Maintenance'],
    img: 'https://images.unsplash.com/photo-1565516776101-72f88327429d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'legal',
    title: 'Legal',
    icon: <Scale className={styles.tabIcon} />,
    desc: 'Streamlining legal practice management and compliance through secure, specialized digital tools.',
    features: ['Case Management Systems', 'AI E-Discovery Tools', 'Secure Client Document Portals'],
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
  },
  // {
  //   id: 'edtech',
  //   title: 'EdTech',
  //   icon: <GraduationCap className={styles.tabIcon} />,
  //   desc: 'Scalable platforms designed for the evolving landscape of digital learning and student engagement.',
  //   img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
  // },
  // {
  //   id: 'realestate',
  //   title: 'Real Estate',
  //   icon: <Building2 className={styles.tabIcon} />,
  //   desc: 'Smart property management dashboards and seamless listing integrations for modern brokers.',
  //   img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  // },
  // {
  //   id: 'cybersecurity',
  //   title: 'Cybersecurity',
  //   icon: <ShieldCheck className={styles.tabIcon} />,
  //   desc: 'Robust threat detection mechanisms and secure access management protecting enterprise data.',
  //   img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  // },
];

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <div className={styles.header}>
          <div className={styles.sectionLabel}>INDUSTRIES WE SERVE</div>
          <h2 className={styles.sectionTitle}>
            Transforming Complex Challenges into Innovative Software Solutions
          </h2>
        </div> */}

        <div className={styles.layout}>
          <div className={styles.tabsCol}>
            {industriesData.map((ind) => (
              <button
                key={ind.id}
                className={`${styles.tabBtn} ${activeTab.id === ind.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(ind)}
                aria-selected={activeTab.id === ind.id}
              >
                {ind.icon}
                <span>{ind.title}</span>
                {activeTab.id === ind.id && <ArrowRight className={styles.activeArrow} />}
              </button>
            ))}
          </div>

          <div className={styles.contentCol}>
            <div className={styles.imageWrapper}>
              {/* <img src={activeTab.img} alt={`${activeTab.title} Solutions`} className={styles.showcaseImg} key={activeTab.id} /> */}
              <div className={styles.overlayGradient}></div>

              <div className={styles.overlayContent} key={`text-${activeTab.id}`}>
                {/* <div className={styles.tagline}>{activeTab.title} Expertise</div> */}
                <h3 className={styles.showcaseTitle}>Tailored {activeTab.title} Solutions</h3>
                <p className={styles.showcaseDesc}>{activeTab.desc}</p>

                <ul className={styles.featureList}>
                  {activeTab.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <CheckCircle2 className={styles.featureIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <button className={styles.exploreBtn}>Discuss Your Project <ArrowRight className={styles.btnIcon} /></button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
