import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import styles from "./VendorRiskManagement.module.css";

Chart.register(...registerables);

const VendorRiskAssessment = () => {
    const pieRef = useRef(null);
    const instRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        if (!pieRef.current) return;
        if (instRef.current) instRef.current.destroy();

        const ctx = pieRef.current.getContext("2d");
        instRef.current = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Critical", "High", "Medium", "Low", "Very Low"],
                datasets: [
                    {
                        data: [6, 20, 34, 25, 15],
                        backgroundColor: ["#dc2626", "#f59e0b", "#10b981", "#3b82f6", "#06b6d4"],
                        borderWidth: 2,
                        borderColor: "#fff",
                    },
                ],
            },
            options: {
                cutout: "70%",
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            boxWidth: 15,
                            padding: 15,
                            font: { size: 13, family: 'Inter, sans-serif' },
                            usePointStyle: true,
                        },
                    },
                },
            },
        });

        return () => instRef.current?.destroy();
    }, []);

    const challenges = [
        { icon: "🔄", title: "Eliminate Onboarding Chaos", desc: "Stop disjointed handoffs. Standardize intake across every team and accessor instantly." },
        { icon: "📋", title: "Unify Risk Intelligence", desc: "Ditch fragmented questionnaires. Capture consistent, comparable risk data every time." },
        { icon: "✉️", title: "Kill the Email Loop", desc: "Clarifications shouldn't get lost in inboxes. Centralize context directly within the assessment." },
        { icon: "👁️", title: "Total Audit Visibility", desc: "No more black boxes. Gain instant, granular insight into every compliance decision." },
        { icon: "⚙️", title: "Automate Governance", desc: "Enforce policy without the police work. Standardize scoring and cycles automatically." },
        { icon: "🤝", title: "Transparent Engagement", desc: "Build trust with vendors through clear, governed engagement models and subscription tracking." },
    ];

    const capabilities = [
        { icon: "✅", title: "Smart Gatekeeping", desc: "Automated workflows that ensure only compliant vendors enter your ecosystem.", color: "#3b82f6" },
        { icon: "🔗", title: "Lifecycle Management", desc: "Seamlessly manage Accessor–Vendor engagements from day one to offboarding.", color: "#10b981" },
        { icon: "📚", title: "Intelligent Repository", desc: "A centralized 'Brain' for your master questions, ensuring consistency at scale.", color: "#f59e0b" },
        { icon: "🎯", title: "Dynamic Personalization", desc: "Smart mapping that adapts questionnaires to the specific risk tier of the vendor.", color: "#8b5cf6" },
        { icon: "💬", title: "Rapid Clarifications", desc: "Structured communication channels that close information gaps in record time.", color: "#06b6d4" },
        { icon: "💰", title: "Financial Governance", desc: "Connect risk to revenue. Track payments and subscription health in real-time.", color: "#ec4899" },
        { icon: "📊", title: "Audit-Ready Logs", desc: "Be ready for regulators anytime with comprehensive, immutable activity trails.", color: "#f43f5e" },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.container}>

                {/* HERO */}
                <header className={styles.header}>
                    <div className={styles.badge}>
                        Enterprise Risk Intelligence
                    </div>
                    <h1 className={styles.title}>
                        Vendor Risk, <span className={styles.titleHighlight}>Reimagined.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        The Operating System for Third-Party Trust
                    </p>
                    <p className={styles.lead}>
                        Stop chasing spreadsheets and start automating compliance.
                        Our platform unifies onboarding, continuous assessment, and audit trails into a single source of truth—slashing manual effort and fortifying operational resilience.
                    </p>
                </header>

                {/* CHALLENGES */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Why Traditional Methods Fail</h2>

                    <div className={styles.challengesGrid}>
                        {challenges.map((challenge, idx) => (
                            <div
                                key={idx}
                                className={styles.challengeCard}
                                onMouseEnter={() => setHoveredCard(`challenge-${idx}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={styles.challengeIcon}>
                                    {challenge.icon}
                                </div>
                                <h3 className={styles.challengeTitle}>
                                    {challenge.title}
                                </h3>
                                <p className={styles.challengeDesc}>
                                    {challenge.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CAPABILITIES */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>The Platform Advantage</h2>

                    <div className={styles.capabilitiesGrid}>
                        {capabilities.map((cap, idx) => (
                            <div
                                key={idx}
                                className={styles.capCard}
                                onMouseEnter={() => setHoveredCard(`cap-${idx}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={styles.capBar}
                                    style={{ backgroundColor: cap.color }}
                                />
                                <div
                                    className={styles.capIcon}
                                    style={{ backgroundColor: `${cap.color}15`, color: cap.color }}
                                >
                                    {cap.icon}
                                </div>
                                <h4 className={styles.capTitle}>
                                    {cap.title}
                                </h4>
                                <p className={styles.capDesc}>
                                    {cap.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PERSONAS */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Empowering Every Stakeholder</h2>

                    <div className={styles.personaGrid}>
                        {/* Admin */}
                        <div className={`${styles.personaCard} ${styles.admin}`}>
                            <div className={styles.personaBadge} style={{ backgroundColor: "#3b82f6" }}>
                                Admin
                            </div>
                            <h4 className={styles.personaTitle}>Command & Control</h4>
                            <ul className={styles.personaList}>
                                <li><span className={styles.personaCheck} style={{ color: "#3b82f6" }}>✓</span> Centralized lifecycle orchestration</li>
                                <li><span className={styles.personaCheck} style={{ color: "#3b82f6" }}>✓</span> Global question mapping controls</li>
                                <li><span className={styles.personaCheck} style={{ color: "#3b82f6" }}>✓</span> Real-time payment & alert oversight</li>
                            </ul>
                        </div>

                        {/* Accessor */}
                        <div className={`${styles.personaCard} ${styles.accessor}`}>
                            <div className={styles.personaBadge} style={{ backgroundColor: "#10b981" }}>
                                Accessor
                            </div>
                            <h4 className={styles.personaTitle}>Precision Risk Ops</h4>
                            <ul className={styles.personaList}>
                                <li><span className={styles.personaCheck} style={{ color: "#10b981" }}>✓</span> Standardized, data-driven scoring</li>
                                <li><span className={styles.personaCheck} style={{ color: "#10b981" }}>✓</span> 360° Portfolio risk visibility</li>
                                <li><span className={styles.personaCheck} style={{ color: "#10b981" }}>✓</span> Accelerated clarification loops</li>
                            </ul>
                        </div>

                        {/* Auditor */}
                        <div className={`${styles.personaCard} ${styles.auditor}`}>
                            <div className={styles.personaBadge} style={{ backgroundColor: "#8b5cf6" }}>
                                Auditor
                            </div>
                            <h4 className={styles.personaTitle}>Instant Verification</h4>
                            <ul className={styles.personaList}>
                                <li><span className={styles.personaCheck} style={{ color: "#8b5cf6" }}>✓</span> One-click comprehensive audit trails</li>
                                <li><span className={styles.personaCheck} style={{ color: "#8b5cf6" }}>✓</span> Immutable document history</li>
                                <li><span className={styles.personaCheck} style={{ color: "#8b5cf6" }}>✓</span> Zero-prep historical access</li>
                            </ul>
                        </div>

                        {/* Vendor */}
                        <div className={`${styles.personaCard} ${styles.vendor}`}>
                            <div className={styles.personaBadge} style={{ backgroundColor: "#f59e0b" }}>
                                Vendor
                            </div>
                            <h4 className={styles.personaTitle}>Frictionless Experience</h4>
                            <ul className={styles.personaList}>
                                <li><span className={styles.personaCheck} style={{ color: "#f59e0b" }}>✓</span> Transparent subscription governance</li>
                                <li><span className={styles.personaCheck} style={{ color: "#f59e0b" }}>✓</span> Clear submission & feedback insights</li>
                                <li><span className={styles.personaCheck} style={{ color: "#f59e0b" }}>✓</span> Milestone-based payment clarity</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* OUTCOMES + CHART */}
                <section className={styles.outcomesSection}>
                    <div className={styles.outcomesLeft}>
                        <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '1rem' }}>Measurable Business Impact</h2>

                        <div className={styles.outcomesList}>
                            <div className={styles.outcomeItem}>
                                <span className={styles.outcomeIcon}>📈</span>
                                <span className={styles.outcomeText}>100% Audit Readiness & Traceability</span>
                            </div>

                            <div className={styles.outcomeItem}>
                                <span className={styles.outcomeIcon}>⚡</span>
                                <span className={styles.outcomeText}>50% Faster Assessment Cycles</span>
                            </div>

                            <div className={styles.outcomeItem}>
                                <span className={styles.outcomeIcon}>🛡️</span>
                                <span className={styles.outcomeText}>Zero-Compromise Regulatory Compliance</span>
                            </div>

                            <div className={styles.outcomeItem}>
                                <span className={styles.outcomeIcon}>💼</span>
                                <span className={styles.outcomeText}>Optimized Vendor Spend & Engagement</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.outcomesRight}>
                        <h3 className={styles.chartTitle}>Live Risk Pulse</h3>
                        <div className={styles.chartWrap}>
                            <canvas ref={pieRef}></canvas>
                        </div>
                        <p className={styles.chartNote}>Real-time visualization of portfolio risk exposure</p>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <h3 className={styles.footerTitle}>Ready to Secure Your Growth?</h3>
                        <p className={styles.footerDesc}>
                            Join the forward-thinking institutions using our platform to turn vendor risk management into a competitive advantage.
                        </p>

                        <div className={styles.featureList}>
                            <span className={styles.featureTag}>✓ End-to-End Governance</span>
                            <span className={styles.featureTag}>✓ Intelligent Risk Assessment</span>
                            <span className={styles.featureTag}>✓ Seamless Collaboration</span>
                            <span className={styles.featureTag}>✓ Data Integrity</span>
                            <span className={styles.featureTag}>✓ Full Audit Traceability</span>
                            <span className={styles.featureTag}>✓ Enterprise Control</span>
                        </div>

                        <button className={styles.ctaButton}>
                            Request a Demo
                        </button>

                        <div className={styles.techStack}>
                            Technology Stack: React.js | Django | MySQL | Redis | AWS | Docker | 
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default VendorRiskAssessment;