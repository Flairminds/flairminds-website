import React from 'react';
import styles from './AIContest.module.css';
import { FaTrophy, FaMedal, FaRocket, FaBrain, FaUsers, FaLightbulb, FaStar } from 'react-icons/fa';
import { MdEmojiEvents } from 'react-icons/md';
import eventPhoto1 from '../../assets/blogs/ai-contest-1.jpg';
import eventPhoto2 from '../../assets/blogs/ai-contest-2.jpg';
import shivaniPhoto from '../../assets/blogs/ai-contest-3.jpg';
import gauravPhoto from '../../assets/blogs/ai-contest-4.jpg';

const AIContest = () => {
    return (
        <>
            <head>
                <title>AI Productivity Challenge - Empowering Innovation</title>
                <meta name="description" content="Celebrating our team's journey in harnessing AI for enhanced productivity and innovation" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Hero Section */}
                    <div className={styles.hero}>
                        <div className={styles.heroIcon}>
                            <FaRocket />
                        </div>
                        <h1 className={styles.title}>
                            Empowering Innovation: Our AI Productivity Challenge Journey
                        </h1>
                        <p className={styles.subtitle}>
                            Discover how our team transformed AI from a concept into a daily productivity partner, creating  innovative solutions that augment human intelligence and drive measurable results.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* Introduction */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaBrain className={styles.titleIcon} />
                            Embracing the AI Revolution
                        </h2>
                        <p className={styles.paragraph}>
                            In today's rapidly evolving technological landscape, artificial intelligence has transitioned from a futuristic concept to an indispensable productivity partner. Recognizing this transformative shift, we recently launched our <strong>AI Productivity Challenge</strong> – an initiative designed to harness the collective intelligence of our team and discover practical, impactful ways AI can enhance our daily workflows.
                        </p>
                        <p className={styles.paragraph}>
                            The challenge was straightforward yet powerful: encourage every team member to explore how AI can improve productivity, quality, and efficiency across their roles. What we received in return exceeded all expectations: a treasure trove of innovative ideas, practical implementations, and unanimous enthusiasm for integrating AI into our work culture.
                        </p>
                    </div>

                    {/* AI Importance */}
                    <div className={styles.calloutBox}>
                        <h3 className={styles.calloutTitle}>
                            <FaLightbulb className={styles.calloutIcon} />
                            Why AI Matters Now
                        </h3>
                        <p className={styles.calloutText}>
                            <strong>AI is no longer a luxury</strong> reserved for tech giants – it has become a competitive necessity. Our challenge aimed to democratize AI adoption, emphasizing that <strong>AI productivity isn't about replacing human intelligence – it's about augmenting it</strong>. The most successful teams of tomorrow will seamlessly blend human creativity with AI's computational power.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* Event Highlights */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>Event Highlights</h2>
                        <div className={styles.eventPhotosGrid}>
                            <div className={styles.eventPhotoCard}>
                                <img src={eventPhoto1} alt="AI Productivity Challenge Event" className={styles.eventPhoto} />
                            </div>
                            <div className={styles.eventPhotoCard}>
                                <img src={eventPhoto2} alt="Team Presentations and Celebrations" className={styles.eventPhoto} />
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Winners Podium */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>
                            <MdEmojiEvents className={styles.titleIcon} />
                            Celebrating Our Winners
                        </h2>

                        {/* Winner Cards */}
                        <div className={styles.winnersGrid}>
                            {/* First Place */}
                            <div className={`${styles.winnerCard} ${styles.firstPlace}`}>
                                <img src={shivaniPhoto} alt="Shivani Kulkarni - 1st Place Winner" className={styles.winnerPhoto} />
                                <div className={styles.winnerBadge}>
                                    <FaTrophy className={styles.badgeIcon} />
                                    <span>1st Place</span>
                                </div>
                                <h3 className={styles.winnerName}>Shivani Kulkarni</h3>
                                <h4 className={styles.winnerProject}>AI Decision Memory System</h4>
                                <div className={styles.winnerDescription}>
                                    <p>
                                        A solution that preserves the "why" behind our work. While Git captures <em>what</em> changed and <em>when</em>, this system captures crucial context: business intent, assumptions, and trade-offs.
                                    </p>
                                    <p>
                                        The system prompts developers to add brief reasons (1-2 lines), structures this using AI with intelligent tagging, and enables natural language search for instant context retrieval.
                                    </p>
                                </div>
                                <div className={styles.impactBadge}>
                                    <strong>Impact:</strong> Eliminates repetitive "why" questions, accelerates onboarding, and democratizes organizational knowledge
                                </div>
                            </div>

                            {/* Second Place */}
                            <div className={`${styles.winnerCard} ${styles.secondPlace}`}>
                                <img src={gauravPhoto} alt="Gaurav Singh - 2nd Place Winner" className={styles.winnerPhoto} />
                                <div className={styles.winnerBadge}>
                                    <FaMedal className={styles.badgeIcon} />
                                    <span>2nd Place</span>
                                </div>
                                <h3 className={styles.winnerName}>Gaurav Singh</h3>
                                <h4 className={styles.winnerProject}>Intelligent Workflow Automation Suite</h4>
                                <div className={styles.winnerDescription}>
                                    <p>
                                        A comprehensive suite of AI tools targeting multiple friction points across modern work:
                                    </p>
                                    <ul className={styles.featureList}>
                                        <li><strong>Meeting Intelligence</strong> – Auto-records and summarizes into searchable repositories</li>
                                        <li><strong>Document Q&A</strong> – Conversational interaction with lengthy documents</li>
                                        <li><strong>Smart Filtering</strong> – Prioritizes critical messages, filters noise</li>
                                        <li><strong>AI Development</strong> – Context-aware coding acceleration</li>
                                    </ul>
                                </div>
                                <div className={styles.impactBadge}>
                                    <strong>Philosophy:</strong> "AI removes repetitive work, reduces cognitive load, and improves decision-making"
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Notable Innovations */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaStar className={styles.titleIcon} />
                            Notable Innovations
                        </h2>

                        <div className={styles.innovationGrid}>
                            {/* Lalit's Innovation */}
                            <div className={styles.innovationCard}>
                                <div className={styles.innovationHeader}>
                                    <h3 className={styles.innovationTitle}>AI Automation Recorder</h3>
                                    <p className={styles.innovationAuthor}>by Lalit</p>
                                </div>
                                <p className={styles.innovationText}>
                                    An AI-powered browser extension with Play/Pause/Stop controls that records user actions and auto-converts them into production-ready Selenium or Playwright code. Eliminates manual scripting, reduces QA onboarding time, and lets testers focus on strategic coverage.
                                </p>
                                <div className={styles.innovationTag}>QA Excellence</div>
                            </div>

                            {/* Tejal's Innovation */}
                            <div className={styles.innovationCard}>
                                <div className={styles.innovationHeader}>
                                    <h3 className={styles.innovationTitle}>AI Deployment Readiness Assistant</h3>
                                    <p className={styles.innovationAuthor}>by Tejal</p>
                                </div>
                                <p className={styles.innovationText}>
                                    Integrates with GitHub, CI/CD, and Terraform to automatically review pre-deployment changes. Scans for breaking changes, converts Terraform plans into plain-English summaries with risk levels, and generates deployment readiness scores. Catches production issues before deployment.
                                </p>
                                <div className={styles.innovationTag}>DevOps Innovation</div>
                            </div>

                            {/* Rashmi's Innovation */}
                            <div className={styles.innovationCard}>
                                <div className={styles.innovationHeader}>
                                    <h3 className={styles.innovationTitle}>AI Task Optimizer</h3>
                                    <p className={styles.innovationAuthor}>by Rashmi</p>
                                </div>
                                <p className={styles.innovationText}>
                                    Transforms to-do lists into executable daily plans. Decomposes tasks into 15-45 minute sub-tasks, estimates effort with buffers, schedules time blocks around meetings, and dynamically replans when schedules slip. Converts intent into time realism and eliminates decision fatigue.
                                </p>
                                <div className={styles.innovationTag}>Productivity Optimizer</div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Broader Movement */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaUsers className={styles.titleIcon} />
                            The Broader Movement: AI as a Daily Companion
                        </h2>
                        <div className={styles.movementBox}>
                            <p className={styles.paragraph}>
                                Beyond individual innovations, our submissions revealed a fascinating trend: <strong>AI is becoming deeply embedded in daily workflows</strong>, spanning technical execution, strategic planning, and operational excellence across multiple dimensions of software development and leadership.
                            </p>
                            <p className={styles.paragraph}>
                                Team members are leveraging AI across the full spectrum – from technical validation in specialized domains like C#, SQL Server, and PLC/BACnet development, to communication enhancement through AI-assisted drafting. The integration extends to IDE-level tools providing real-time code completion, boilerplate generation, and SQL optimizations.
                            </p>
                            <p className={styles.paragraph}>
                                Our team is piloting cutting-edge approaches like "vibe-coded" applications where AI generates complete modules from natural language descriptions. The most advanced practitioners have evolved beyond chatbots to orchestrating specialized AI agents for mission control, with measurable impacts: <strong>70% reduction in scaffolding time</strong>, virtually eliminated library errors, and the ability to architect features simultaneously rather than sequentially.
                            </p>
                            <p className={styles.highlightText}>
                                This represents a fundamental shift – from <em>writing</em> code to <em>managing</em> autonomous agents; from <em>searching</em> documentation to <em>conversing</em> with intelligent assistants; from <em>manual</em> improvements to <em>AI-suggested</em> optimizations.
                            </p>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Closing */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Looking Forward: Building an AI-Powered Culture</h2>
                        <p className={styles.paragraph}>
                            The overwhelming participation, creativity, and practical value demonstrated in this challenge signal something profound: <strong>our team isn't just experimenting with AI – they're actively building an AI-integrated future</strong>. From SQL analytics to DevOps automation, every discipline is discovering unique ways to leverage AI for measurable productivity gains.
                        </p>
                        <p className={styles.paragraph}>
                            These aren't flashy demonstrations or theoretical possibilities – they're pragmatic solutions addressing real workplace friction, designed for immediate implementation, and grounded in domain expertise. Our team understands that AI's true power emerges when it augments human intelligence rather than attempting to replace it.
                        </p>
                        <div className={styles.finalCallout}>
                            <p className={styles.finalMessage}>
                                <strong>To every participant:</strong> Thank you for your creativity, engagement, and commitment to continuous improvement. Together, we're not just adopting AI – we're pioneering a smarter, more efficient, and more innovative way to work.
                            </p>
                            <p className={styles.tagline}>
                                The future of productivity is here, and it's being built by teams like ours, one intelligent solution at a time. 🚀
                            </p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className={styles.tags}>
                        <span className={styles.tag}>#AIAtWork</span>
                        <span className={styles.tag}>#Productivity</span>
                        <span className={styles.tag}>#Innovation</span>
                        <span className={styles.tag}>#LearningCulture</span>
                        <span className={styles.tag}>#FutureOfWork</span>
                        <span className={styles.tag}>#TeamLearning</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIContest;
