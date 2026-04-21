import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CaseStudies.module.css';
import { FaArrowRight } from 'react-icons/fa';

// Assets
import documentSearch from "../../assets/documentSearch.png"
import infraMonitoring from "../../assets/infraMonitoring.png"
import leverageModelling from "../../assets/leverageModelling1.png"
import aiagent from "../../assets/aiagent.png"
import swiftiqGuard from "../../assets/swiftiqGuard.png"

const caseStudiesData = [
    {
        id: "CASE_AML_10",
        title: "SwiftIQ Guard — AML Compliance Platform",
        description: "A privacy-first, on-premise SWIFT message screening platform with a 4-tier AI decision chain (Rule Engine → ML Intelligence → Sanctions Screening → AI Synthesis) — delivering enterprise-grade AML compliance at 200× lower cost.",
        imageUrl: swiftiqGuard,
        link: "swiftiq-guard",
        status: "DEPLOYED",
        developer: "Sanjana Palkar",
    },
    {
        id: "CASE_MDM_09",
        title: "AI MDM Platform",
        description: "An AI-powered Master Data Management platform that automates data ingestion, profiling, deduplication, enrichment and pipeline building - replacing weeks of manual cleaning with intelligent AI pipelines.",
        imageUrl: aiagent,
        link: "ai-mdm-platform",
        status: "DEPLOYED",
        developer: "Ganesh Phutane",
    },
    {
        id: "CASE_AI_POC_01",
        title: "AI-Powered PoC Development",
        description: "Accelerating proof-of-concept delivery with AI across the entire SDLC - reducing turnaround time by 60% while maintaining enterprise-quality standards.",
        imageUrl: aiagent,
        link: "ai-poc-development",
        status: "CAPABILITY",
        developer: "Sairushi",
    },
    {
        id: "CASE_QA_01",
        title: "Enterprise Test Automation",
        description: "Fully automated UI regression suite for PLC programming - eliminating manual testing and delivering 85% reduction in regression time with 100% release confidence.",
        imageUrl: infraMonitoring,
        link: "test-automation",
        status: "DEPLOYED",
        developer: "Lalit",
    },
    {
        id: "CASE_AI_02",
        title: "AI Automation",
        description: "An AI-powered solution to extract structured data from diverse commercial tax documents, enabling faster, more accurate financial due diligence for US, Netherlands, and Canada.",
        imageUrl: documentSearch,
        link: "ai_automation",
        status: "COMPLETED",
        developer: "Onpepper",
    },
    {
        id: "CASE_DATA_03",
        title: "Enterprise Data Transformation",
        description: "A global investment leader overcame data silos and inconsistencies by centralizing fragmented data streams, reducing operational risk and improving reporting and compliance.",
        imageUrl: leverageModelling,
        link: "ent_data_transformation",
        status: "PRODUCTION",
        developer: "",
    },
    {
        id: "CASE_CLOUD_04",
        title: "Cloud Optimization",
        description: "A rapidly growing SaaS AI platform required a complete redesign and migration of its existing cloud architecture. The goal was to build a robust, secure, and highly scalable foundation to support increasing customer demands.",
        imageUrl: infraMonitoring,
        link: "cloud_optimization",
        status: "SCALED",
        developer: "DevOps",
    },
    {
        id: "CASE_QUANT_05",
        title: "Quantfinance Preparation Platform",
        description: "A specialized resource for mastering complex topics and succeeds in interviews. The client sought a platform to fill this gap and lead quant interview preparation.",
        imageUrl: infraMonitoring,
        link: "quant_finance",
        status: "ACTIVE",
        developer: "Ganesh Phutane",
    },
    {
        id: "CASE_SIGN_06",
        title: "E-Sign Platform",
        description: "A comprehensive e-signature platform replacement for manual paper-based workflows. The solution offers robust security, real-time authentication, and multi-party signing.",
        imageUrl: infraMonitoring,
        link: "e_sign_platform",
        status: "STABLE",
        developer: "Everysign",
    },
    {
        id: "CASE_FABLE_07",
        title: "Fable Fintech",
        description: "A seamless and secure way to handle high-value remittance transactions across international corridors. Standardized API integration for global banking partners.",
        imageUrl: aiagent,
        link: "fable_fintech",
        status: "DEPLOYED",
        developer: "Fable",
    },
    {
        id: "CASE_RISK_08",
        title: "Vendor Risk Assessment",
        description: "Solving a major challenge in modern banking: fast, accurate, and data-driven evaluation of third-party vendors and tenants instantly—reducing underwriting time.",
        imageUrl: aiagent,
        link: "vendor_risk_assessment",
        status: "LIVE",
        developer: "Sairushi",
    }
];


const CaseStudyCard = ({ data, onNavigate }) => (
    <div className={styles.caseCard}>
        <div className={styles.imageContainer}>
            <div className={styles.cardMetadata}>
                <span className={styles.caseId}>{data.id}</span>
            </div>
            <img
                src={data.imageUrl}
                alt={data.title}
                className={styles.projectImage}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/640x360/f8fafc/005ba1?text=Project+View';
                }}
            />
        </div>
        <div className={styles.caseContent}>
            <h2 className={styles.caseTitle}>{data.title}</h2>
            <p className={styles.caseDescription}>{data.description}</p>
            <div className={styles.caseFooter}>
                {/* <span className={styles.techStatus}>STATUS: {data.status}</span> */}
                <button className={styles.readMoreBtn} onClick={() => onNavigate(data.link)}>
                    Explore Case <FaArrowRight />
                </button>
            </div>
        </div>
    </div>
);

export default function CaseStudies() {
    const navigate = useNavigate();

    return (
        <div className={styles.mainContainer}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.systemStatus}>
                        <span className={styles.statusDot}></span> SUCCESS_METRICS_READY // PORTFOLIO_V_3.4
                    </div>
                    <h1 className={styles.mainTitle}>CASE STUDIES</h1>
                    <p className={styles.heroDescription}>
                        Discover how we've helped global leaders solve their most complex technical challenges
                        through innovation, precision, and architectural excellence.
                    </p>
                </div>
            </section>

            <main className={styles.showcaseSection}>
                <div className={styles.showcaseGrid}>
                    {caseStudiesData.map(caseStudy => (
                        <CaseStudyCard
                            key={caseStudy.id}
                            data={caseStudy}
                            onNavigate={(link) => navigate(`/case-study/${link}`)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}