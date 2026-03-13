import React from 'react';
import styles from './StrapiBlog.module.css';
import {
    FaDatabase,
    FaCode,
    FaRocket,
    FaUsers,
    FaImage,
    FaShieldAlt,
    FaBolt,
    FaSync,
    FaLayerGroup,
    FaExclamationTriangle,
    FaCheckCircle,
    FaCloudUploadAlt,
    FaClock,
    FaChartLine,
    FaUsersCog,
    FaNetworkWired,
} from 'react-icons/fa';
import { MdApi, MdContentPaste, MdDashboard, MdSecurity } from 'react-icons/md';
import HeroImage from './strapi-hero.png';
import FlowDiagram from './strapi-flow-diagram.png';
import ArchDiagram from './strapi-arch-diagram.png';

const StrapiBlog = () => {
    return (
        <>
            <head>
                <title>Decoupling Content from Code: Strapi-Powered CMS Architecture | FlairMinds</title>
                <meta
                    name="description"
                    content="How FlairMinds implemented Strapi as a headless CMS to decouple content management from frontend code — enabling faster publishing, zero deployments, and scalable content workflows."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>

            <div className={styles.container}>
                <div className={styles.content}>

                    {/* Hero Section */}
                    <div className={styles.hero}>
                        <div className={styles.metaRow}>
                            <span className={styles.badge}>CMS &amp; Architecture</span>
                            <span className={styles.metaDate}>March 13, 2026 · 5 min read · Gaurav Singh</span>
                        </div>
                        <h1 className={styles.title}>
                            Decoupling Content from Code: Strapi-Powered CMS Architecture
                        </h1>
                        <p className={styles.subtitle}>
                            How we implemented Strapi as a headless CMS to decouple content management from frontend
                            code - enabling faster publishing, zero deployments, and scalable content workflows for
                            our entire team.
                        </p>
                        <div className={styles.heroImageContainer}>
                            <img
                                src={HeroImage}
                                alt="Strapi Headless CMS Architecture"
                                className={styles.heroImage}
                            />
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaLayerGroup className={styles.titleIcon} />
                            Introduction
                        </h2>
                        <p className={styles.paragraph}>
                            Modern websites require <strong>frequent content updates</strong> - blog posts, product
                            pages, landing pages, and marketing information. Traditionally, updating website content
                            requires code changes, database schema updates, and full deployments. This creates a
                            bottleneck where every content change becomes a developer task.
                        </p>
                        <p className={styles.paragraph}>
                            To solve this challenge, we implemented <strong>Strapi</strong>, a headless CMS that
                            allows content to be managed directly through an admin panel - without modifying frontend
                            code or database structures. This dramatically improves <strong>content agility</strong>, <strong> deployment efficiency</strong>, and <strong>team scalability</strong>.
                        </p>
                        <div className={styles.calloutBox}>
                            <p>
                                With Strapi as the backbone of our content architecture, non-technical team members
                                can publish, edit, and manage all website content <strong>instantly and independently</strong> -
                                no developer involvement required.
                            </p>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* What is Strapi */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <MdDashboard className={styles.titleIcon} />
                            What is Strapi?
                        </h2>
                        <p className={styles.paragraph}>
                            Strapi is an <strong>open-source headless CMS</strong> that allows developers and content
                            teams to manage website content through APIs. Instead of hardcoding content in the
                            frontend, Strapi delivers dynamic content using <strong>REST or GraphQL APIs</strong> -
                            making the content available to any frontend, any device, and any channel.
                        </p>
                        <p className={styles.paragraph}>
                            The term "headless" refers to the separation of the <strong>body</strong> (content
                            management backend) from the <strong>head</strong> (frontend presentation layer). This
                            decoupling gives teams complete freedom to use any frontend technology while the CMS
                            remains the single source of truth for content.
                        </p>

                        <img
                            src={ArchDiagram}
                            alt="Strapi Architecture: Frontend → Strapi → Database"
                            className={styles.sectionImage}
                        />
                        <p className={styles.imageCaption}>
                            Strapi sits between the frontend and database, delivering content via API.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* Problem with Traditional Updates */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaExclamationTriangle className={styles.titleIcon} />
                            Problem With Traditional Content Updates
                        </h2>
                        <p className={styles.paragraph}>
                            Before adopting a headless CMS, every content update required going through the full
                            software development lifecycle. A simple text change on a landing page would trigger
                            the entire engineering pipeline.
                        </p>

                        <div className={styles.workflowGrid}>
                            <div className={`${styles.workflowBox} ${styles.old}`}>
                                <h4>❌ Traditional Workflow</h4>
                                <p>Content Change</p>
                                <p>→ Developer Updates Code</p>
                                <p>→ Database Migration</p>
                                <p>→ Testing &amp; Review</p>
                                <p>→ Deployment</p>
                            </div>
                            <div className={`${styles.workflowBox} ${styles.new}`}>
                                <h4>✅ With Strapi</h4>
                                <p>Content Team</p>
                                <p>→ Strapi Admin Panel</p>
                                <p>→ Content Stored in DB</p>
                                <p>→ Website Fetches via API</p>
                                <p>→ Instant Update</p>
                            </div>
                        </div>

                        <h3 className={styles.subsectionTitle}>Problems with the Traditional Approach</h3>
                        <div className={styles.challengesGrid}>
                            <div className={styles.challengeCard}>
                                <FaClock className={styles.challengeIcon} />
                                <h4>Slow Updates</h4>
                                <p>Every content change cycles through lengthy development, review, and deployment pipelines - often taking days.</p>
                            </div>
                            <div className={styles.challengeCard}>
                                <FaUsers className={styles.challengeIcon} />
                                <h4>Developer Dependency</h4>
                                <p>Content teams cannot publish independently. Every update requires developer time, creating bottlenecks.</p>
                            </div>
                            <div className={styles.challengeCard}>
                                <FaBolt className={styles.challengeIcon} />
                                <h4>Deployment Risks</h4>
                                <p>Frequent code deployments for content changes increase the risk of regression bugs and service interruptions.</p>
                            </div>
                            <div className={styles.challengeCard}>
                                <FaChartLine className={styles.challengeIcon} />
                                <h4>Poor Scalability</h4>
                                <p>Marketing teams cannot scale content operations without proportionally growing the engineering workload.</p>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Our Solution */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaRocket className={styles.titleIcon} />
                            Our Solution: Strapi-Powered Content Architecture
                        </h2>
                        <p className={styles.paragraph}>
                            By introducing Strapi as our headless CMS layer, we transformed the content update
                            workflow completely. The new architecture gives content teams full autonomy while
                            maintaining a clean, API-driven separation between content and presentation.
                        </p>

                        <img
                            src={FlowDiagram}
                            alt="Strapi Full Flow: Content Team → Strapi CMS → REST/GraphQL APIs → Website Frontend → End User"
                            className={styles.sectionImage}
                        />
                        <p className={styles.imageCaption}>
                            Content flows from the team through Strapi's APIs directly to the end user — no code changes needed.
                        </p>

                        <h3 className={styles.subsectionTitle}>Results of Our New Architecture</h3>
                        <ul className={styles.bulletList}>
                            <li><strong>No frontend code changes</strong> required for content updates</li>
                            <li><strong>No deployment required</strong> - content updates are live instantly</li>
                            <li><strong>No database schema modification</strong> for new content types</li>
                            <li><strong>Faster publishing</strong> - content can go live in minutes, not days</li>
                        </ul>
                    </div>

                    <hr className={styles.divider} />

                    {/* Key Features */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>
                            Key Features We Use in Strapi
                        </h2>
                        <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-8) auto' }}>
                            Strapi provides a powerful set of capabilities that we leverage to manage all website
                            content through a single, unified platform.
                        </p>

                        <div className={styles.capabilitiesGrid}>
                            <div className={styles.capabilityCard}>
                                <div className={styles.capabilityNumber}>1</div>
                                <h4><FaLayerGroup /> Dynamic Content Types</h4>
                                <p>Define flexible schemas for any content structure without touching the database.</p>
                                <ul className={styles.capabilityList}>
                                    <li>Blogs &amp; Articles</li>
                                    <li>Landing Pages</li>
                                    <li>FAQs &amp; Product Sections</li>
                                    <li>Marketing Banners</li>
                                </ul>
                            </div>
                            <div className={styles.capabilityCard}>
                                <div className={styles.capabilityNumber}>2</div>
                                <h4><MdApi /> API-Driven Content Delivery</h4>
                                <p>Content is exposed through auto-generated REST and GraphQL APIs, ready to consume from any frontend.</p>
                                <div className={styles.codeBlock}>
                                    <pre>
                                        <code>
                                            {"GET /api/blogs\nGET /api/pages\nGET /api/products"}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                            <div className={styles.capabilityCard}>
                                <div className={styles.capabilityNumber}>3</div>
                                <h4><MdSecurity /> Role-Based Access Control</h4>
                                <p>Fine-grained permissions ensure each team member has exactly the access they need.</p>
                                <table className={styles.roleTable}>
                                    <thead>
                                        <tr>
                                            <th>Role</th>
                                            <th>Access</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Admin</td>
                                            <td>Full access</td>
                                        </tr>
                                        <tr>
                                            <td>Editor</td>
                                            <td>Create / Edit</td>
                                        </tr>
                                        <tr>
                                            <td>Viewer</td>
                                            <td>Read only</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.capabilityCard}>
                                <div className={styles.capabilityNumber}>4</div>
                                <h4><FaImage /> Media Management</h4>
                                <p>Centralized media library for all digital assets, with built-in upload, organization, and optimization tools.</p>
                                <ul className={styles.capabilityList}>
                                    <li>Images &amp; Videos</li>
                                    <li>Documents &amp; PDFs</li>
                                    <li>Organized by content type</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Business Benefits */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>
                            Business Benefits
                        </h2>
                        <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-8) auto' }}>
                            The Strapi integration delivers measurable advantages across content operations, engineering
                            efficiency, and team collaboration.
                        </p>

                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefitCard}>
                                <FaBolt className={styles.benefitIcon} />
                                <div>
                                    <h4>Faster Content Publishing</h4>
                                    <p>Content teams publish updates in minutes — no development cycle required.</p>
                                </div>
                            </div>
                            <div className={styles.benefitCard}>
                                <FaSync className={styles.benefitIcon} />
                                <div>
                                    <h4>Reduced Deployment Cycles</h4>
                                    <p>Fewer code deployments means fewer risks, lower infra costs, and more stable releases.</p>
                                </div>
                            </div>
                            <div className={styles.benefitCard}>
                                <FaChartLine className={styles.benefitIcon} />
                                <div>
                                    <h4>Better Scalability</h4>
                                    <p>Content operations scale without growing engineering headcount proportionally.</p>
                                </div>
                            </div>
                            <div className={styles.benefitCard}>
                                <FaUsersCog className={styles.benefitIcon} />
                                <div>
                                    <h4>Improved Team Collaboration</h4>
                                    <p>Content, marketing, and engineering teams work in parallel without blocking each other.</p>
                                </div>
                            </div>
                            <div className={styles.benefitCard}>
                                <FaCloudUploadAlt className={styles.benefitIcon} />
                                <div>
                                    <h4>Real-Time Website Updates</h4>
                                    <p>Published content is immediately available on the website with zero downtime.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Conclusion */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaCheckCircle className={styles.titleIcon} />
                            Conclusion
                        </h2>
                        <p className={styles.paragraph}>
                            By integrating Strapi as a headless CMS, we created a <strong>flexible and scalable
                                content architecture</strong> that fundamentally changes how our team manages website
                            content. The API-driven approach decouples content from code, empowering non-technical
                            users while maintaining a modern, developer-friendly architecture.
                        </p>
                        <p className={styles.paragraph}>
                            This allows teams to publish content quickly, <strong>reduce development overhead</strong>,
                            and empower non-technical users — while maintaining a modern, API-driven website that
                            can evolve independently on both the content and engineering fronts.
                        </p>

                        <div className={styles.conclusionHighlight}>
                            <h3>Key Takeaway</h3>
                            <p>
                                Separating content from code isn't just an architectural preference — it's a
                                strategic business decision. With Strapi, content becomes a first-class citizen,
                                independently managed, instantly published, and infinitely scalable.
                            </p>
                        </div>

                        <div className={styles.quoteBlock}>
                            <strong>"</strong>A headless CMS like Strapi gives your content team the speed of a
                            startup and your engineering team the stability of an enterprise. It's the architecture
                            that lets both thrive simultaneously.<strong>"</strong>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className={styles.tags}>
                        <span className={styles.tag}>#Strapi</span>
                        <span className={styles.tag}>#HeadlessCMS</span>
                        <span className={styles.tag}>#CMS</span>
                        <span className={styles.tag}>#ContentArchitecture</span>
                        <span className={styles.tag}>#RESTAPI</span>
                        <span className={styles.tag}>#GraphQL</span>
                        <span className={styles.tag}>#ContentManagement</span>
                        <span className={styles.tag}>#WebArchitecture</span>
                        <span className={styles.tag}>#OpenSource</span>
                    </div>

                </div>
            </div>
        </>
    );
};

export default StrapiBlog;
