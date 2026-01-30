import React, { useState, useEffect } from 'react';
import styles from './CareersPage.module.css';
import heroBg from '../../assets/careers_hero_bg.png';
import { FaGraduationCap, FaRocket, FaUsers, FaLightbulb, FaTerminal, FaCode, FaMicrochip, FaGlobe, FaAccessibleIcon, FaAnchor, FaTimes } from 'react-icons/fa';
import { sendCareerEmail, initEmailJS } from '../../services/emailService';

// Culture icons
import youngDynamicIcon from '../../assets/culture_young_dynamic.png';
import growthIcon from '../../assets/culture_growth.png';
import prideWorkIcon from '../../assets/culture_pride_work.png';
import improvementIcon from '../../assets/culture_improvement.png';
import visionariesIcon from '../../assets/visionaries_icon.png';

const CareersPage = () => {
    // Application Modal State
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [applicationForm, setApplicationForm] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        resumeLink: '',
        coverLetter: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Initialize EmailJS
    useEffect(() => {
        initEmailJS();
    }, []);

    const handleOpenModal = (role) => {
        setSelectedRole(role);
        setShowModal(true);
        setSubmitStatus(null);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedRole(null);
        setApplicationForm({
            name: '',
            email: '',
            phone: '',
            experience: '',
            resumeLink: '',
            coverLetter: ''
        });
        setSubmitStatus(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApplicationForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitApplication = async (e) => {
        e.preventDefault();

        if (!applicationForm.name || !applicationForm.email || !applicationForm.phone) {
            setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
            return;
        }

        setSubmitting(true);
        setSubmitStatus(null);

        const result = await sendCareerEmail({
            name: applicationForm.name,
            email: applicationForm.email,
            phone: applicationForm.phone,
            position: selectedRole?.title || 'General Application',
            experience: applicationForm.experience,
            resumeLink: applicationForm.resumeLink,
            coverLetter: applicationForm.coverLetter
        });

        setSubmitting(false);
        setSubmitStatus({ type: result.success ? 'success' : 'error', message: result.message });

        if (result.success) {
            setTimeout(() => {
                handleCloseModal();
            }, 3000);
        }
    };

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
        {
            id: "FM_SF_2026",
            title: "Senior Full Stack Developer",
            department: "Software Development",
            location: "Pune",
            status: "OPS_OPEN",
            experience: "2+ years",
            description: "Join our elite development team to build next-generation AI-powered applications. You'll work with cutting-edge technologies and contribute to products that impact users globally.",
            importantPoints: [
                "Design and develop scalable full-stack applications using React, Node.js, and modern cloud technologies",
                "Collaborate with cross-functional teams to deliver high-quality solutions",
                "Mentor junior developers and contribute to technical excellence",
                "Write clean, maintainable code following industry best practices",
                "Participate in architecture decisions and code reviews"
            ]
        },
        {
            id: "FM_AI_2026",
            title: "AI/ML Engineer",
            department: "Data Science",
            location: "Pune",
            status: "OPS_OPEN",
            experience: "2+ years",
            description: "Be part of our AI innovation team developing state-of-the-art machine learning solutions. Transform data into intelligent insights and build AI systems that drive real business value.",
            importantPoints: [
                "Develop and deploy machine learning models for production environments",
                "Work with large-scale datasets and implement data pipelines",
                "Optimize ML algorithms for performance and accuracy",
                "Collaborate with engineering teams to integrate AI solutions",
                "Stay updated with latest AI/ML research and implement best practices"
            ]
        },
        // { id: "FM_AI_2026", title: "AI/ML Engineer", department: "Data Science", location: "Pune", status: "OPS_OPEN", experience: "0-2 years" },
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
                                    <button className={styles.applyButton} onClick={() => handleOpenModal(role)}>
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
                        <span>
                            <span className={styles.terminalIcon}>{">"}</span> NO_MATCHING_MISSION?
                        </span>
                        <button className={styles.applyButton} onClick={() => handleOpenModal({ id: 'FM_GEN_2026', title: 'General Application', department: 'Any', location: 'Pune' })}>
                            TRANSMIT_RESUME_TO_COMMAND
                            <span className={styles.buttonGlow}></span>
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

            {/* Application Modal */}
            {showModal && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div>
                                <span className={styles.modalTag}>// MISSION_APPLICATION</span>
                                <h2 className={styles.modalTitle}>
                                    {selectedRole?.title || 'General Application'}
                                </h2>
                                <span className={styles.modalMeta}>
                                    {selectedRole?.department} • {selectedRole?.location}
                                </span>
                            </div>
                            <button className={styles.closeButton} onClick={handleCloseModal}>
                                <FaTimes />
                            </button>
                        </div>

                        <div className={styles.modalContent}>
                            {/* Left Side - JD Information */}
                            {selectedRole?.description && (
                                <div className={styles.jdSection}>
                                    <div className={styles.jdHeader}>
                                        <span className={styles.jdTag}>// JOB_DESCRIPTION</span>
                                    </div>
                                    <p className={styles.jdDescription}>
                                        {selectedRole.description}
                                    </p>

                                    {selectedRole.importantPoints && selectedRole.importantPoints.length > 0 && (
                                        <div className={styles.importantPoints}>
                                            <h3 className={styles.pointsTitle}>
                                                <FaLightbulb /> Key Responsibilities
                                            </h3>
                                            <ul className={styles.pointsList}>
                                                {selectedRole.importantPoints.map((point, index) => (
                                                    <li key={index} className={styles.pointItem}>
                                                        <span className={styles.pointBullet}>&gt;</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className={styles.jdFooter}>
                                        <span className={styles.jdFooterTag}>
                                            EXPERIENCE_REQUIRED: {selectedRole.experience}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Right Side - Application Form */}
                            <form className={styles.applicationForm} onSubmit={handleSubmitApplication}>
                                {submitStatus && (
                                    <div className={`${styles.statusMessage} ${submitStatus.type === 'success' ? styles.success : styles.error}`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">*Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={applicationForm.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">*Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={applicationForm.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">*Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={applicationForm.phone}
                                            onChange={handleInputChange}
                                            placeholder="+91 XXXXXXXXXX"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="experience">Experience</label>
                                        <input
                                            type="text"
                                            id="experience"
                                            name="experience"
                                            value={applicationForm.experience}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 3 years in Full Stack Development"
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="resumeLink">Resume/Portfolio Link</label>
                                    <input
                                        type="url"
                                        id="resumeLink"
                                        name="resumeLink"
                                        value={applicationForm.resumeLink}
                                        onChange={handleInputChange}
                                        placeholder="https://drive.google.com/... or LinkedIn profile"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="coverLetter">Cover Letter / Message</label>
                                    <textarea
                                        id="coverLetter"
                                        name="coverLetter"
                                        value={applicationForm.coverLetter}
                                        onChange={handleInputChange}
                                        placeholder="Tell us why you'd be a great fit for this role..."
                                        rows={4}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={submitting}
                                >
                                    {submitting ? 'TRANSMITTING...' : 'SUBMIT_APPLICATION'}
                                    <span className={styles.buttonGlow}></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CareersPage;
