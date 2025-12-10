import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import documentSearch from "../../assets/documentSearch.png"
import infraMonitoring from "../../assets/infraMonitoring.png"
import leverageModelling from "../../assets/leverageModelling1.png"
import aiagent from "../../assets/aiagent.png"

// --- Data for the Case Studies ---
const caseStudiesData = [
    {
        id: 1,
        title: "AI Automation",
        description: "An AI-powered solution to extract structured data from diverse commercial tax documents, enabling faster, more accurate financial due diligence for US, Netherlands, and Canada.",
        imageUrl: documentSearch,
        altText: "AI Automation",
        link: "ai_automation"
    },
    {
        id: 2,
        title: "Enterprise Data Transformation",
        description: "A global investment leader overcame data silos and inconsistencies by centralizing fragmented data streams, reducing operational risk and improving reporting and compliance.",
        imageUrl: leverageModelling,
        altText: "Enterprise Data Transformation",
        link: "ent_data_transformation"
    },
    {
        id: 3,
        title: "Cloud Optimization",
        description: "A rapidly growing SaaS AI platform required a complete redesign and migration of its existing cloud architecture. The goal was to build a robust, secure, and highly scalable foundation to support increasing customer demands and a fast-paced development cycle, while simultaneously controlling operational costs.",
        imageUrl: infraMonitoring,
        altText: "Enterprise Data Transformation",
        link: "cloud_optimization"
    },
    {
        id: 4,
        title: "Quantfinance Preparation Platform",
        description: "The quantitative finance industry offers rewarding yet competitive careers. Students and professionals need a specialized resource to master complex topics and succeed in interviews. The client sought a platform to fill this gap and lead quant interview preparation.",
        imageUrl: infraMonitoring,
        altText: "Quantfinance prep",
        link: "quant_finance"
    },
    {
        id: 5,
        title: "E-Sign Platform",
        description: "The client required a comprehensive e-signature platform to replace slow, manual paper-based workflows. The solution needed to be highly accessible, supporting both web and mobile devices, while offering robust security, real-time authentication, and the flexibility to handle complex, multi-party signing scenarios.",
        imageUrl: infraMonitoring,
        altText: "Everysign",
        link: "e_sign_platform"
    },
    {
        id: 6,
        title: "Fable Fintech",
        description: "Fable Fintech's AlfaNow platform required a seamless and secure way to handle high-value remittance transactions across numerous international corridors. The goal was to standardize API integration for a growing number of global banking partners, ensuring compliance, speed, and reliability to expand its worldwide financial reach.",
        imageUrl: aiagent,
        altText: "fable_fintech",
        link: "fable_fintech"
    },
    {
        id: 7,
        title: "Vendor Risk Assessment System",
        description: "Our Vendor Risk Assessment System was built to solve a major challenge in modern banking: fast, accurate, and data-driven evaluation of third-party vendors and tenants. The platform enables banks to assess financial stability, operational capability, and overall vendor risk instantly—reducing underwriting time and strengthening portfolio-level risk visibility.",
        imageUrl: aiagent,
        altText: "vendor_risk_assessment",
        link: "vendor_risk_assessment"
    },
];

// A base64 encoded SVG for the arrow to be used in the <img> tag
const arrowSrc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZT0id2hpdGUiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEzLjUgNC41IDIxIDEybTAgMC03LjUgNy41TTIxIDEySDMiIC8+Cjwvc3ZnPgo=";


// --- Styles Module ---
// Styles are separated into their own object, referencing CSS variables.
const styles = {
    caseStudiesSection: {
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'var(--primary-font)',
    },
    h1: {
        fontSize: '2.5rem',
        color: 'var(--primary)',
        marginBottom: '2.5rem',
        textAlign: 'center',
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5rem',
        maxWidth: '1200px',
    },
    productCard: {
        backgroundColor: 'var(--card-background)',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '360px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e0e0e0',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    productCardHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0 12px 25px var(--primary-translucent)',
    },
    cardImageContainer: {
        width: '100%',
        paddingTop: '56.25%',
        position: 'relative',
        backgroundColor: '#e0e0e0',
    },
    cardImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    cardContent: {
        padding: '1.5rem 2rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    h3: {
        fontFamily: 'var(--primary-font)',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: 'var(--primary)',
        marginBottom: '0.75rem',
    },
    p: {
        fontFamily: 'var(--primary-font)',
        color: 'var(--text-primary-color)',
        lineHeight: 1.6,
        flexGrow: 1,
        marginBottom: '1.5rem',
    },
    productCardButton: {
        backgroundColor: 'var(--primary)',
        color: 'var(--white-text)',
        padding: '12px 24px',
        borderRadius: '50px',
        border: 'none',
        outline: 'none',
        width: 'fit-content',
        height: 'fit-content',
        fontFamily: 'var(--primary-font)',
        fontSize: '1rem',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        transition: 'gap 0.4s ease',
    },
    productCardButtonHover: {
        gap: '25px',
    },
    arrowImg: {
        width: '18px',
        height: '18px',
        transition: 'transform 0.4s ease',
    },
    arrowImgHover: {
        transform: 'translateX(5px)',
    }
};


// --- Case Study Card Component ---
const CaseStudyCard = ({ title, description, imageUrl, altText, link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate()

    return (
        <div 
            style={{ ...styles.productCard, ...(isHovered ? styles.productCardHover : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* <div style={styles.cardImageContainer}>
                <img 
                    src={imageUrl} 
                    alt={altText} 
                    style={styles.cardImage}
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src='https://placehold.co/640x360/cccccc/ffffff?text=Image+Not+Found';
                    }}
                />
            </div> */}
            <div style={styles.cardContent}>
                <h3 style={styles.h3}>{title}</h3>
                <p style={styles.p}>{description}</p>
                <button style={{ ...styles.productCardButton, ...(isHovered ? styles.productCardButtonHover : {}) }} onClick={()=>navigate(`/case-study/${link}`)}>
                    <span>Learn More</span>
                    <img 
                        src={arrowSrc} 
                        alt="arrow right" 
                        style={{ ...styles.arrowImg, ...(isHovered ? styles.arrowImgHover : {}) }}
                    />
                </button>
            </div>
        </div>
    );
};


// --- Main App Component ---
export default function CaseStudies() {
    return (
        <>
            {/* Injecting global styles and CSS variables */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                    
                    :root {
                        --white-text: #ffffff;
                        --text-primary-color: rgb(70, 69, 69);
                        --primary: #005ba1;
                        --primary-translucent: rgba(0, 91, 161, 0.15);
                        --primary-font: "Poppins", sans-serif;
                        --card-background: #ffffff;
                    }

                    body {
                        background-color: #f7f9fc;
                        margin: 0;
                        padding: 0;
                        text-decoration: none;
                        box-sizing: border-box;
                    }
                `}
            </style>
            <main style={styles.caseStudiesSection}>
                <h1 style={styles.h1}>Our Case Studies</h1>
                <div style={styles.cardsContainer}>
                    {caseStudiesData.map(card => (
                        <CaseStudyCard 
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            altText={card.altText}
                            link={card.link}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
 