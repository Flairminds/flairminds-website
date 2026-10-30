import React from 'react';
import styles from './AnalyticsToAIBlog.module.css';
import CoverImage from './cover.svg';
import IntelligenceImage from './reporting-to-intelligence.png';

const hashtags = [
    '#BusinessIntelligence',
    '#DataAnalytics',
    '#MachineLearning',
    '#ArtificialIntelligence',
    '#GenerativeAI',
    '#DataScience',
    '#NLP',
];

const AnalyticsToAIBlog = () => {
    return (
        <article className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Beyond Dashboards: From Business Intelligence to AI</h1>
                <p className={styles.meta}>by Rashmi Deolasi | October 30, 2026 | Blog</p>

                <img
                    src={CoverImage}
                    alt="Beyond Dashboards: From Business Intelligence to AI — 12 years in analytics, and what AI is changing"
                    className={styles.cover}
                />

                <p className={styles.lead}>
                    For more than 12 years, my work in analytics has revolved around one question: How do we turn
                    data into better business decisions?
                </p>
                <p>
                    My career began with business intelligence (BI), data warehousing, and enterprise reporting.
                    Working across SQL, Oracle BI, MicroStrategy, Tableau, Power BI, and other analytics platforms,
                    I learnt that building a dashboard is only part of the job. The real challenge is understanding
                    the business problem, connecting fragmented data, and uncovering insights people can act on.
                </p>
                <p>
                    Over time, my work and learning have expanded into machine learning, natural language
                    processing, semantic search, and AI-powered solutions. Here are three examples of how analytics
                    is evolving.
                </p>

                <h2 className={styles.heading}>Predictive Analytics &amp; Machine Learning</h2>
                <p>Can the opening of a retail giant predict nearby housing-price growth?</p>
                <p>
                    Using historical property data, retail locations, economic indicators, and logistic regression,
                    I tested this hypothesis. Adding retail-proximity variables actually reduced predictive
                    performance in the regional model.
                </p>
                <p>
                    <strong>The surprise?</strong> Areas farther from new retail locations outperformed those nearby
                    in our historical sample. Broader housing-market dynamics proved more informative than retail
                    proximity alone.
                </p>
                <p>
                    <strong>The professional takeaway:</strong> Effective data science isn't just about building
                    predictive models. it's about challenging assumptions, validating hypotheses against evidence,
                    and identifying which variables genuinely add predictive value. Sometimes, discovering what
                    doesn't improve a model is just as valuable as finding what does.
                </p>
                <p>
                    <strong>The takeaway for business leaders:</strong> Before making investment or expansion
                    decisions based on an appealing market trend, test whether it genuinely predicts outcomes. The
                    right data, a well-designed model, and objective validation can help distinguish a compelling
                    story from a reliable business signal and lead to smarter decisions.
                </p>

                <h2 className={styles.heading}>Intelligent Data Matching | NLP &amp; Semantic Search</h2>
                <p>
                    How do you identify the same financial institution when its name appears with different
                    spellings, abbreviations, or formats? I explored a solution combining named entity recognition
                    (NER), sentence embeddings, and vector search to identify potential matches beyond traditional
                    exact and fuzzy matching.
                </p>
                <p>
                    <strong>The takeaway:</strong> Machine learning and semantic search can help address complex
                    data-quality challenges that conventional rules alone may struggle to resolve.
                </p>

                <h2 className={styles.heading}>Customer Intelligence | AI &amp; Agentic Workflows</h2>
                <p>
                    How can businesses move beyond static customer dashboards? I have been exploring a customer
                    intelligence solution that combines API-based data integration, interactive analytics, and
                    AI-assisted workflows to help teams access customer context and turn information into
                    actionable insights.
                </p>
                <p>
                    <strong>The takeaway:</strong> The next evolution of BI is not just better visualization. it is
                    connecting trusted data with contextual intelligence and business action.
                </p>

                <h2 className={styles.heading}>From Reporting to Intelligence</h2>
                <p>
                    Across these projects, one principle remains constant: AI is only as valuable as the business
                    problem it solves. Reliable data, sound analytical thinking, and meaningful evaluation remain
                    essential whether we are building a dashboard, a predictive model, or an AI-powered workflow.
                </p>
                <p>
                    I see the future of analytics at the intersection of Business Intelligence, Data Engineering,
                    Machine Learning, and Generative AI, where technology does more than explain what happened and
                    helps us make better decisions about what comes next.
                </p>

                <img
                    src={IntelligenceImage}
                    alt="From Reporting to Intelligence: Business Intelligence, Data Engineering, Machine Learning and Generative AI leading to better decisions"
                    className={styles.cover}
                />

                <p className={styles.closing}>
                    As AI reshapes the analytics landscape, are we building smarter dashboards or rethinking how
                    businesses make decisions altogether?
                </p>

                <div className={styles.hashtags}>
                    {hashtags.map((tag) => (
                        <span key={tag} className={styles.hashtag}>{tag}</span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default AnalyticsToAIBlog;
