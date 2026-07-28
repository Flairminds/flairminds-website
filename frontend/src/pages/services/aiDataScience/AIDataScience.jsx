import React from 'react';
import {
    FaMicrochip, FaChartBar, FaDatabase, FaChartPie, FaSitemap,
    FaCloud, FaRobot, FaEnvelope
} from 'react-icons/fa';
import Seo from '../../../components/seo/Seo';
import styles from './AIDataScience.module.css';

const stats = [
    { value: '70–80%', label: 'Reduction in repetitive integration effort' },
    { value: '25', label: 'Partner integrations onboarded' },
    { value: '>99%', label: 'Target accuracy on entity matching' },
    { value: '1M+', label: 'Insurance claims analyzed daily' },
];

const capabilities = [
    { tag: 'Financial Compliance', title: 'AI-powered entity matching', description: 'Real-time compliance screening engine for secure and accurate financial operations.' },
    { tag: 'Agentic AI', title: 'Agentic API integration generator', description: 'Auto-generates integration-ready code, reducing manual engineering effort.' },
    { tag: 'RAG & Doc Intel', title: 'Document search & chat platforms', description: 'Semantic search and conversational interfaces over vast sets of unstructured data.' },
    { tag: 'Legal AI', title: 'Legal drafting & research assistant', description: 'Accelerates contract drafting and provides accurate AI-driven case citations.' },
    { tag: 'Executive Productivity', title: 'Executive AI assistant', description: 'Intelligent inbox triage, automated meeting preparation, and schedule optimization.' },
    { tag: 'Research Automation', title: 'Research & reporting copilot', description: 'Automated summarization and data synthesis for comprehensive analyst reports.' },
    { tag: 'Data Science & Analytics', title: 'Forecasting, pricing & segmentation', description: 'Advanced predictive models for demand forecasting and dynamic pricing strategies.' },
    { tag: 'Knowledge Graphs', title: 'Entity & company knowledge graphs', description: 'Structured data reconciliation for complex corporate hierarchies and relationships.' },
    { tag: 'MLOps', title: 'Model lifecycle & deployment', description: 'Robust experiment tracking, automated pipelines, and reliable model serving.' },
];

const outcomes = [
    { tag: 'Financial Compliance', metric: '90-91% accuracy', title: 'High-frequency entity pattern matching', description: 'Ensuring precise compliance across global transactions.' },
    { tag: 'Fintech Partnerships', metric: '25 partners', title: 'Cross-border API integration platform', description: 'Seamless connectivity for international financial services.' },
    { tag: 'Agentic AI', metric: '70–80% reduction', title: 'Repetitive code-writing eliminated', description: 'Massive productivity gains for engineering teams.' },
    { tag: 'Retail Forecasting', metric: '€2M saved', title: 'Fresh food waste reduced', description: 'Optimized supply chain through predictive models.' },
    { tag: 'Retail Personalization', metric: '+10% sales (€2M)', title: 'Growth via recommendation models', description: 'Increased cart sizes and conversion rates.' },
    { tag: 'eCommerce', metric: '94% accuracy', title: 'Product matching & catalogue analysis', description: 'Streamlined inventory management.' },
    { tag: 'Knowledge Graphs', metric: '70% less manual effort', title: 'Reconciliation pipeline', description: 'Automated data structuring and linking.' },
    { tag: 'Insurance', metric: '1M+ claims/day', title: 'Automated claims analysis', description: 'Scalable processing for major providers.' },
    { tag: 'Research Automation', metric: '8–12 hrs/week recovered', title: 'Analyst report time reduction', description: 'Empowering analysts to focus on high-value insights.' },
];

const techStack = [
    {
        icon: <FaMicrochip />, title: 'AI & Generative AI', highlighted: true,
        tags: ['LangChain', 'LangGraph', 'LlamaIndex', 'MLflow', 'Ollama', 'vLLM', 'Hugging Face', 'OpenAI', 'Gemini', 'FAISS', 'Pinecone', 'ChromaDB', 'Sentence Transformers', 'spaCy'],
    },
    {
        icon: <FaChartBar />, title: 'Machine Learning & Data Science',
        tags: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'OpenCV', 'NLTK'],
    },
    {
        icon: <FaDatabase />, title: 'Data Engineering',
        tags: ['Snowflake', 'AWS Glue', 'Apache Spark', 'MongoDB'],
    },
    {
        icon: <FaChartPie />, title: 'BI & Analytics',
        tags: ['Qlik Sense', 'Power BI', 'DBVisualizer', 'Tableau', 'Looker'],
    },
    {
        icon: <FaSitemap />, title: 'Supporting Infrastructure',
        tags: ['FastAPI', 'Docker', 'PostgreSQL', 'Redis', 'Elasticsearch'],
    },
];

const AIDataScience = () => {
    return (
        <div className={styles.page}>
            <Seo
                title="AI & Data Science Services | FlairMinds"
                description="Production AI systems for finance, legal, retail and research teams. We build agentic AI, RAG, and data science systems for regulated enterprises."
                path="/services/ai-data-science"
            />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <span className={styles.heroBadge}>AI &amp; DATA SCIENCE</span>
                    <h1 className={styles.heroTitle}>
                        Production AI systems for finance, legal, retail and research teams.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Building agentic AI, RAG, and data science systems for regulated enterprises.
                        We turn complex data challenges into measurable business outcomes.
                    </p>
                    <a href="#contact" className={styles.heroCta}>Talk to our AI team</a>
                </div>
                <div className={styles.heroStats}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.heroStat}>
                            <span className={styles.heroStatValue}>{stat.value}</span>
                            <span className={styles.heroStatLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.section} id="capabilities">
                <div className={styles.container}>
                    <span className={styles.eyebrow}>What we build</span>
                    <h2 className={styles.sectionTitle}>AI capabilities across the enterprise stack.</h2>
                    <div className={styles.bentoGrid}>
                        {capabilities.map((item, i) => (
                            <div key={i} className={styles.bentoCard}>
                                <span className={styles.tag}>{item.tag}</span>
                                <h3 className={styles.bentoCardTitle}>{item.title}</h3>
                                <p className={styles.bentoCardDescription}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className={`${styles.section} ${styles.outcomesSection}`} id="outcomes">
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Measured results</span>
                    <h2 className={styles.sectionTitle}>Business outcomes from our AI &amp; Data Science engagements.</h2>
                    <div className={styles.outcomesGrid}>
                        {outcomes.map((item, i) => (
                            <div key={i} className={styles.outcomeCard}>
                                <p className={styles.outcomeTag}>{item.tag}</p>
                                <p className={styles.outcomeMetric}>{item.metric}</p>
                                <h4 className={styles.outcomeTitle}>{item.title}</h4>
                                <p className={styles.outcomeDescription}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className={styles.section} id="tech-stack">
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Our stack</span>
                    <h2 className={styles.sectionTitle}>Technologies powering our AI &amp; Data Science engagements.</h2>
                    <div className={styles.stackGrid}>
                        {techStack.map((group, i) => (
                            <div key={i} className={`${styles.stackCard} ${group.highlighted ? styles.stackCardHighlighted : ''}`}>
                                <h3 className={styles.stackCardTitle}>
                                    <span className={group.highlighted ? styles.stackIconHighlighted : styles.stackIcon}>{group.icon}</span>
                                    {group.title}
                                </h3>
                                <div className={styles.stackTags}>
                                    {group.tags.map((tag, ti) => (
                                        <span key={ti} className={group.highlighted ? styles.stackTagHighlighted : styles.stackTag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className={`${styles.stackCard} ${styles.cloudCard}`}>
                            <div>
                                <h3 className={styles.stackCardTitle}>
                                    <span className={styles.stackIcon}><FaCloud /></span>
                                    Cloud Platforms
                                </h3>
                                <div className={styles.stackTags}>
                                    <span className={styles.stackTag}>AWS</span>
                                    <span className={styles.stackTag}>Azure</span>
                                    <span className={styles.stackTag}>Google Cloud</span>
                                </div>
                            </div>
                            <div className={styles.cloudCardDivider}>
                                <h3 className={styles.stackCardTitle}>
                                    <span className={styles.stackIconHighlighted}><FaRobot /></span>
                                    AI Automation
                                </h3>
                                <div className={styles.stackTags}>
                                    <span className={styles.stackTagHighlighted}>n8n</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta} id="contact">
                <div className={styles.ctaInner}>
                    <h2 className={styles.ctaTitle}>Have an AI or data science problem worth solving?</h2>
                    <p className={styles.ctaSubtitle}>Scope a proof of concept in weeks, not quarters.</p>
                    <a href="mailto:sales@flairminds.com" className={styles.ctaButton}>
                        <FaEnvelope /> sales@flairminds.com
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AIDataScience;
