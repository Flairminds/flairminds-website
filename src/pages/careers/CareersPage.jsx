import React from 'react';
import styles from './CareersPage.module.css';
import heroBg from '../../assets/careers_hero_bg.png';
import { FaGraduationCap, FaRocket, FaUsers, FaLightbulb, FaTerminal, FaCode, FaMicrochip, FaGlobe, FaAccessibleIcon, FaAnchor } from 'react-icons/fa';

// Culture icons
import youngDynamicIcon from '../../assets/culture_young_dynamic.png';
import growthIcon from '../../assets/culture_growth.png';
import prideWorkIcon from '../../assets/culture_pride_work.png';
import improvementIcon from '../../assets/culture_improvement.png';
import visionariesIcon from '../../assets/visionaries_icon.png';

const CareersPage = () => {
    const culturePillars = [
        { icon: youngDynamicIcon, title: "Young and Dynamic", code: "GEN_ALPHA" },
        { icon: growthIcon, title: "Endless Growth Opportunities", code: "EXP_SCALE" },
        { icon: prideWorkIcon, title: "Pride in Your Work", code: "CRAFT_EX" },
        { icon: improvementIcon, title: "Continuous Improvement", code: "ITERATE_++" },
        { icon: visionariesIcon, title: "Visionary Leadership", code: "VISION_2030" }
    ];

    const benefits = [
        {
            icon: <FaRocket />,
            title: "Innovation First",
            description: "Work on cutting-edge technologies that shape tomorrow's digital landscape.",
            tag: "TECH_STACK:MODERN"
        },
        {
            icon: <FaGraduationCap />,
            title: "Continuous Learning",
            description: "We offer opportunities for skill enhancement and career advancement at every level.",
            tag: "SKILL_UPGRADE:AUTO"
        },
        {
            icon: <FaUsers />,
            title: "Inclusive Culture",
            description: "Join a diverse environment that values creativity, collaboration, and excellence.",
            tag: "ENV:COLLAB"
        },
        {
            icon: <FaLightbulb />,
            title: "Empowered Success",
            description: "Whether you're a seasoned expert or just starting, we empower your growth.",
            tag: "IMPACT:HIGH"
        },
        {
            icon: <FaGlobe />,
            title: "Global Impact",
            description: "Work on projects that transcend borders and impact users worldwide.",
            tag: "SCALE:GLOBAL"
        }
    ];

    const openRoles = [
        { id: "FM_SF_2026", title: "Senior Full Stack Developer", department: "Engineering", location: "Pune", status: "OPS_OPEN", experience: "3+ years" },
        { id: "FM_AI_2026", title: "AI/ML Engineer", department: "Data Science", location: "Pune", status: "OPS_OPEN", experience: "3+ years" },
        { id: "FM_AI_2026", title: "AI/ML Engineer", department: "Data Science", location: "Pune", status: "OPS_OPEN", experience: "0-3 years" },
    ];

    return (
        <div className={styles.careersPage}>
            {/* Mission Briefing Hero */}
            <section className={styles.heroSection}>
                <div className={styles.scanline}></div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.systemStatus}>
                        <span className={styles.statusDot}></span> SYSTEM_READY // TALENT_ACQUISITION_ACTIVE
                    </div>
                    <h1 className={styles.heroTitle}>
                        Design the Future <span className={styles.highlight}>with Code</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Join the FlairMinds Mission Control. We're looking for architects, builders,
                        and dreamers to engineer the next generation of AI-driven solutions.
                    </p>
                    <div className={styles.actionRow}>
                        <div className={styles.terminalPrompt}>
                            <FaTerminal /> <span className={styles.typing}>npm run join-flairminds</span>
                        </div>
                        <button className={styles.ctaButton} onClick={() => document.getElementById('open-roles').scrollIntoView({ behavior: 'smooth' })}>
                            INITIATE_APPLICATION
                        </button>
                    </div>
                </div>
            </section>

            {/* Technical Manifesto */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.manifestoWrapper}>
                        <div className={styles.manifestoHeader}>
                            <FaCode className={styles.manifestoIcon} />
                            <span>ENGINEERING_MANIFESTO.md</span>
                        </div>
                        <p className={styles.manifestoText}>
                            At FlairMinds Software, we foster a culture of growth, innovation, and collaboration.
                            Join a team of passionate professionals working on cutting-edge technologies that shape
                            tomorrow's solutions. Whether you're a seasoned expert or just starting, we offer
                            opportunities for continuous learning, skill enhancement, and career advancement.
                            Your next big career move starts here.
                        </p>
                        <div className={styles.terminalManifest}>
                            <div className={styles.terminalTop}>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </div>
                            <div className={styles.terminalBody}>
                                <div className={styles.commandLine}>
                                    <span className={styles.prompt}>$</span> {`python3 -c "import json; stats = {'status': 'ONLINE', 'culture': 'ENG_EXCELLENCE', 'stack': ['AI/ML', 'React', 'Python', 'Cloud', 'AI Agents'], 'impact': 'GLOBAL'}; print('[SCAN] Analyzing FlairMinds DNA...\\n' + '\\n'.join([f'[OK] {k.upper()}: {v}' for k, v in stats.items()]) + '\\n\\n' + json.dumps(stats, indent=2))"`}
                                </div>
                                <div className={styles.commandOutput}>
                                    <pre className={styles.asciiArt}>
                                        {`[SCAN] Analyzing FlairMinds DNA...
[OK] STATUS: ONLINE
[OK] CULTURE: ENG_EXCELLENCE
[OK] STACK: ['AI/ML', 'React', 'Python', 'Cloud', 'AI Agents']
[OK] IMPACT: GLOBAL

{
  "status": "ONLINE",
  "culture": "ENG_EXCELLENCE",
  "stack": [
    "AI/ML",
    "React",
    "Python",
    "Cloud",
    "AI Agents"
  ],
  "impact": "GLOBAL"
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crystal Culture Section */}
            <section className={styles.cultureSection}>
                <div className={styles.container}>
                    <div className={styles.headerGroup}>
                        <span className={styles.subTag}>// INTERNAL_VALUES</span>
                        <h2 className={styles.sectionTitle}>The FlairMinds DNA</h2>
                    </div>
                    <div className={styles.cultureGrid}>
                        {culturePillars.map((pillar, index) => (
                            <div key={index} className={styles.cultureCard}>
                                <div className={styles.crystalEffect}></div>
                                <div className={styles.cardHeader}>
                                    <span className={styles.pillarCode}>ID:{pillar.code}</span>
                                </div>
                                <div className={styles.cultureIconWrapper}>
                                    <img src={pillar.icon} alt={pillar.title} className={styles.cultureIconImg} />
                                </div>
                                <h3 className={styles.cultureCardTitle}>{pillar.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Perks */}
            <section className={styles.benefitsSection}>
                <div className={styles.container}>
                    <div className={styles.headerGroupCentered}>
                        <span className={styles.subTag}>// SYSTEM_BENEFITS</span>
                        <h2 className={styles.sectionTitle}>The Builder's Advantage</h2>
                    </div>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitHeader}>
                                    <span className={styles.benefitTag}>{benefit.tag}</span>
                                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                                </div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Ops (Open Roles) */}
            <section id="open-roles" className={styles.rolesSection}>
                <div className={styles.container}>
                    <div className={styles.headerGroup}>
                        <span className={styles.subTag}>// ACTIVE_MISSIONS</span>
                        <h2 className={styles.sectionTitle}>Choose Your Campaign</h2>
                    </div>
                    <div className={styles.rolesGrid}>
                        {openRoles.map((role, index) => (
                            <div key={index} className={styles.roleCard}>
                                <div className={styles.roleHeader}>
                                    <span className={styles.missionId}>MIS_ID: {role.id}</span>
                                    <span className={`${styles.statusBadge} ${role.status === 'OPS_URGENT' ? styles.urgent : ''}`}>
                                        {role.status}
                                    </span>
                                </div>
                                <div className={styles.roleMain}>
                                    <div className={styles.roleInfo}>
                                        <h3 className={styles.roleTitle}>{role.title}</h3>
                                        <div className={styles.roleMeta}>
                                            <span className={styles.roleItem}><FaTerminal /> {role.department}</span>
                                            <span className={styles.roleItem}><FaGlobe /> {role.location}</span>
                                            <span className={styles.roleItem}><FaAnchor /> {role.experience}</span>
                                        </div>
                                    </div>
                                    <button className={styles.applyButton}>
                                        ACCESS_MISSION
                                        <span className={styles.buttonGlow}></span>
                                    </button>
                                </div>
                                <div className={styles.roleFooter}>
                                    <div className={styles.dataBar}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.noRoleNotice}>
                        <span className={styles.terminalIcon}>{">"}</span> NO_MATCHING_MISSION?
                        <a href="mailto:hr@flairminds.com">
                            <button className={styles.applyButton}>
                                TRANSMIT_RESUME_TO_COMMAND
                                <span className={styles.buttonGlow}></span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
