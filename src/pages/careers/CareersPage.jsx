import React from 'react';
import styles from './CareersPage.module.css';
import heroBg from '../../assets/careers_hero_bg.png';
import { FaGraduationCap, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

// Culture icons
import youngDynamicIcon from '../../assets/culture_young_dynamic.png';
import growthIcon from '../../assets/culture_growth.png';
import prideWorkIcon from '../../assets/culture_pride_work.png';
import improvementIcon from '../../assets/culture_improvement.png';

const CareersPage = () => {
    const culturePillars = [
        { icon: youngDynamicIcon, title: "Young and Dynamic" },
        { icon: growthIcon, title: "Endless Growth Opportunities" },
        { icon: prideWorkIcon, title: "Pride in Your Work" },
        { icon: improvementIcon, title: "Continuous Improvement" }
    ];

    const benefits = [
        {
            icon: <FaRocket />,
            title: "Innovation First",
            description: "Work on cutting-edge technologies that shape tomorrow's digital landscape."
        },
        {
            icon: <FaGraduationCap />,
            title: "Continuous Learning",
            description: "We offer opportunities for skill enhancement and career advancement at every level."
        },
        {
            icon: <FaUsers />,
            title: "Inclusive Culture",
            description: "Join a diverse environment that values creativity, collaboration, and excellence."
        },
        {
            icon: <FaLightbulb />,
            title: "Empowered Success",
            description: "Whether you're a seasoned expert or just starting, we empower your growth."
        }
    ];

    const openRoles = [
        { title: "Senior Full Stack Developer", department: "Engineering", location: "Pune / Remote" },
        { title: "AI/ML Engineer", department: "Data Science", location: "Pune" },
        { title: "UI/UX Designer", department: "Design", location: "Remote" },
        { title: "Product Manager", department: "Product", location: "Singapore / Remote" }
    ];

    return (
        <div className={styles.careersPage}>
            {/* Hero Section */}
            <section className={styles.heroSection} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 91, 161, 0.9), rgba(0, 91, 161, 0.4)), url(${heroBg})` }}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Ignite Your Career with <span className={styles.highlight}>FlairMinds</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Where Innovation Meets Opportunity. Join a team of passionate professionals
                        fostering a culture of growth and excellence.
                    </p>
                    <button className={styles.ctaButton} onClick={() => document.getElementById('open-roles').scrollIntoView({ behavior: 'smooth' })}>
                        View Open Roles
                    </button>
                </div>
            </section>

            {/* Intro Section - User Provided Text */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introContent}>
                        <p className={styles.introText}>
                            At FlairMinds Software, we foster a culture of growth, innovation, and collaboration.
                            Join a team of passionate professionals working on cutting-edge technologies that shape
                            tomorrow's solutions. Whether you're a seasoned expert or just starting, we offer
                            opportunities for continuous learning, skill enhancement, and career advancement.
                            Explore our open roles and be part of a dynamic environment that values creativity,
                            diversity, and excellence. Your next big career move starts here at FlairMinds!
                        </p>
                    </div>
                </div>
            </section>

            {/* Culture at FlairMinds Section */}
            <section className={styles.cultureSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Culture at FlairMinds Software</h2>
                    <p className={styles.cultureIntro}>
                        At FlairMinds, we believe in empowering our team with freedom and responsibility.
                        Enjoy unrestricted internet access to stay connected on platforms like LinkedIn,
                        Facebook, Twitter, and even YouTube. Our motto, <strong>"With great power comes
                            great responsibility,"</strong> reflects our trust in our employees to use this
                        freedom wisely.
                    </p>
                    <div className={styles.cultureGrid}>
                        {culturePillars.map((pillar, index) => (
                            <div key={index} className={styles.cultureCard}>
                                <div className={styles.cultureIconWrapper}>
                                    <img src={pillar.icon} alt={pillar.title} className={styles.cultureIconImg} />
                                </div>
                                <h3 className={styles.cultureCardTitle}>{pillar.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className={styles.benefitsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Why Join Us?</h2>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>{benefit.icon}</div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section id="open-roles" className={styles.rolesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Current Openings</h2>
                    <div className={styles.rolesGrid}>
                        {openRoles.map((role, index) => (
                            <div key={index} className={styles.roleCard}>
                                <div className={styles.roleInfo}>
                                    <h3 className={styles.roleTitle}>{role.title}</h3>
                                    <div className={styles.roleMeta}>
                                        <span className={styles.roleDept}>{role.department}</span>
                                        <span className={styles.roleLocation}>{role.location}</span>
                                    </div>
                                </div>
                                <button className={styles.applyButton}>Apply Now</button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.noRoleNotice}>
                        Don't see a role that fits? Email us at <a href="mailto:hr@flairminds.com">hr@flairminds.com</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
