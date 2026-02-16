import React from 'react';
import styles from './ShadowLightBlog.module.css';
import {
    FaRocket,
    FaBrain,
    FaUsers,
    FaLightbulb,
    FaStar,
    FaCheckCircle,
    FaCode,
    FaGlobe,
    FaComments,
    FaChrome,
    FaClock,
    FaBolt,
    FaLayerGroup,
    FaCompass
} from 'react-icons/fa';
import { MdAccessibility } from 'react-icons/md';
import NavigationImage from './Navigation image.png';
import AccessibilityImage from './accesibility image.png';
import IntelligenceImage from './Intelligence image.png';
import AssistantImage from './Assistant image.png';
import HeroImage from './hero-image.png';

const ShadowLightBlog = () => {
    return (
        <>
            <head>
                <title>ShadowLight: AI-Powered Accessibility - Building with AI in Record Time</title>
                <meta name="description" content="How our intern team leveraged AI to build a production-ready Chrome extension in 2 weeks. Discover the technical architecture, AI-accelerated development workflow, and a 50% reduction in build time." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Hero Section */}
                    <div className={styles.hero}>
                        <h1 className={styles.title}>
                            ShadowLight: AI-Powered Accessibility
                        </h1>
                        <p className={styles.subtitle}>
                            Leveraging AI to Build a Production-Ready Chrome Extension for Improving Web Accessibility
                        </p>
                        {/* Hero Image */}
                        <div className={styles.heroImageContainer}>
                            <img src={HeroImage} alt="ShadowLight Chrome Extension" className={styles.heroImage} />
                        </div>
                    </div>


                    {/* Introduction */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaBrain className={styles.titleIcon} />
                            Introduction: The Power of AI-Accelerated Development
                        </h2>
                        <p className={styles.paragraph}>
                            In an era where AI is transforming how we build software, our team at FlairMinds took on an ambitious challenge: create a fully-functional, AI-powered Chrome extension that makes the web more accessible - <strong>in just 2 weeks</strong>. The result? <strong>ShadowLight</strong>, a sophisticated browser extension that combines real-time AI guidance, visual accessibility features, and intelligent navigation assistance.
                        </p>
                        <p className={styles.paragraph}>
                            This blog explores how we harnessed cutting-edge AI tools to accelerate development by <strong>50%</strong>, the technical architecture behind the extension, and the innovation driven by our talented intern team.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* The Challenge */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaLightbulb className={styles.titleIcon} />
                            The Challenge: Accessibility Meets AI
                        </h2>

                        <h3 className={styles.subsectionTitle}>The Problem We're Solving</h3>
                        <p className={styles.paragraph}>Modern websites present several challenges:</p>

                        <div className={styles.challengesGrid}>
                            <div className={styles.challengeCard}>
                                <FaGlobe className={styles.challengeIcon} />
                                <h4>Navigation Complexity</h4>
                                <p>Finding specific buttons or links in enterprise dashboards can be tedious</p>
                            </div>
                            <div className={styles.challengeCard}>
                                <FaBrain className={styles.challengeIcon} />
                                <h4>Information Overload</h4>
                                <p>Parsing long articles or technical documentation for key insights is time-consuming</p>
                            </div>
                            <div className={styles.challengeCard}>
                                <MdAccessibility className={styles.challengeIcon} />
                                <h4>Visual Accessibility</h4>
                                <p>Users with color blindness or visual fatigue struggle with standard web designs</p>
                            </div>
                            <div className={styles.challengeCard}>
                                <FaCode className={styles.challengeIcon} />
                                <h4>Content Efficiency</h4>
                                <p>Professionals need to quickly repurpose web content for different platforms</p>
                            </div>
                        </div>

                        <h3 className={styles.subsectionTitle}>Our Solution: ShadowLight</h3>
                        <div className={styles.solutionBox}>
                            <p>ShadowLight is an AI-powered Chrome extension that transforms web accessibility through:</p>
                            <ul className={styles.featureList}>
                                <li><strong>Contextual Intelligence</strong>: Real-time page scraping and analysis</li>
                                <li><strong>Guided Interaction</strong>: Step-by-step navigation instructions with visual highlighting</li>
                                <li><strong>Visual Adaptation</strong>: Dynamic CSS filters and accessibility presets</li>
                                <li><strong>Natural Language Interface</strong>: A chatbot that "knows" what's on your screen</li>
                            </ul>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* AI-Powered Development */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaBolt className={styles.titleIcon} />
                            AI-Powered Development: 50% Faster Build Time
                        </h2>

                        <h3 className={styles.subsectionTitle}>The Traditional vs. AI-Powered Timeline</h3>
                        <div className={styles.comparisonTable}>
                            <div className={styles.tableHeader}>
                                <span>Approach</span>
                                <span>Duration</span>
                                <span>Key Difference</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Traditional Development</strong></span>
                                <span>4 weeks</span>
                                <span>Manual coding, documentation, testing</span>
                            </div>
                            <div className={`${styles.tableRow} ${styles.highlighted}`}>
                                <span><strong>AI-Accelerated Development</strong></span>
                                <span><strong>2 weeks</strong></span>
                                <span>AI-assisted code generation, automated testing, enhanced documentation</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Time Saved</strong></span>
                                <span><strong>~14 days</strong></span>
                                <span><strong>50% reduction in development time</strong></span>
                            </div>
                        </div>

                        <h3 className={styles.subsectionTitle}>AI Tools That Made It Possible</h3>
                        <div className={styles.aiToolsGrid}>
                            <div className={styles.toolCard}>
                                <FaBrain className={styles.toolIcon} />
                                <h4>Google Gemini 3</h4>
                                <p>Flash for speed, Pro for reasoning - Core AI engine for content understanding</p>
                            </div>
                            <div className={styles.toolCard}>
                                <FaCode className={styles.toolIcon} />
                                <h4>Claude</h4>
                                <p>Code generation, analysis, and architecture design</p>
                            </div>
                            <div className={styles.toolCard}>
                                <FaRocket className={styles.toolIcon} />
                                <h4>Antigravity IDE</h4>
                                <p>Context-aware development environment</p>
                            </div>
                            <div className={styles.toolCard}>
                                <FaBolt className={styles.toolIcon} />
                                <h4>LLaMA</h4>
                                <p>Local processing for privacy-sensitive operations</p>
                            </div>
                        </div>

                        <h3 className={styles.subsectionTitle}>How AI Accelerated Each Phase</h3>
                        <div className={styles.accelerationList}>
                            <div className={styles.accelerationItem}>
                                <div className={styles.stepNumber}>1</div>
                                <div>
                                    <strong>Rapid Prototyping</strong>
                                    <p>Instead of writing boilerplate code manually, AI generated complete component structures</p>
                                </div>
                            </div>
                            <div className={styles.accelerationItem}>
                                <div className={styles.stepNumber}>2</div>
                                <div>
                                    <strong>Intelligent Code Generation</strong>
                                    <p>Natural language descriptions converted to production-ready TypeScript/React code</p>
                                </div>
                            </div>
                            <div className={styles.accelerationItem}>
                                <div className={styles.stepNumber}>3</div>
                                <div>
                                    <strong>Automated Testing</strong>
                                    <p>AI-generated test cases and validation scripts</p>
                                </div>
                            </div>
                            <div className={styles.accelerationItem}>
                                <div className={styles.stepNumber}>4</div>
                                <div>
                                    <strong>Enhanced Documentation</strong>
                                    <p>Auto-generated technical docs and architecture diagrams</p>
                                </div>
                            </div>
                            <div className={styles.accelerationItem}>
                                <div className={styles.stepNumber}>5</div>
                                <div>
                                    <strong>Reduced Development Cycles</strong>
                                    <p>Parallel feature development instead of sequential implementation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Technical Architecture */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaLayerGroup className={styles.titleIcon} />
                            Technical Architecture: Modern, Scalable, and Intelligent
                        </h2>

                        <h3 className={styles.subsectionTitle}>Tech Stack Overview</h3>
                        <div className={styles.techStackTable}>
                            <div className={styles.tableHeader}>
                                <span>Component</span>
                                <span>Technology</span>
                                <span>Why We Chose It</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Language</strong></span>
                                <span>TypeScript</span>
                                <span>Type safety for complex DOM interactions</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Framework</strong></span>
                                <span>React 19 + Vite</span>
                                <span>Fast builds and responsive UI</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Extension Framework</strong></span>
                                <span>Plasmo (Manifest V3)</span>
                                <span>Auto-configured Chrome extension setup</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Styling</strong></span>
                                <span>Tailwind CSS + Headless UI</span>
                                <span>Rapid, accessible component styling</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>AI Engine</strong></span>
                                <span>Google Gemini 3 + Groq Cloud API (Llama 3)</span>
                                <span>Ultra-fast AI inference</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>State Management</strong></span>
                                <span>TanStack Query</span>
                                <span>Clean API call management</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Communication</strong></span>
                                <span>Chrome Extension Messaging API</span>
                                <span>Secure inter-component messaging</span>
                            </div>
                        </div>

                        <h3 className={styles.subsectionTitle}>System Architecture Flow</h3>
                        <div className={styles.architectureFlow}>
                            <div className={styles.flowStep}>User Input (Side Panel)</div>
                            <div className={styles.flowArrow}>↓</div>
                            <div className={styles.flowStep}>Page Scraper (Content Script)</div>
                            <div className={styles.flowArrow}>↓</div>
                            <div className={styles.flowStep}>AI Controller (Background Script)</div>
                            <div className={styles.flowArrow}>↓</div>
                            <div className={styles.flowStep}>Gemini/Groq AI Processing</div>
                            <div className={styles.flowArrow}>↓</div>
                            <div className={styles.flowBranch}>
                                <div className={styles.flowBranchItem}>
                                    <strong>Chat Response</strong>
                                    <p>Chatbot Interface</p>
                                </div>
                                <div className={styles.flowBranchItem}>
                                    <strong>Visual Effects</strong>
                                    <p>Page Overlay - dimming, highlighting, contrast adjustment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Four Features */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>
                            Four Powerful Features Built in 2 Weeks
                        </h2>

                        <div className={styles.featuresGrid}>
                            {/* Feature 1: Navigation */}
                            <div className={styles.featureCard}>
                                <img src={NavigationImage} alt="Navigation Module" className={styles.featureImage} />
                                <div className={styles.featureHeader}>
                                    {/* <FaCompass className={styles.featureIcon} /> */}
                                    <h3>Navigation Module</h3>
                                </div>
                                <h4 className={styles.featureSubtitle}>Natural Language Navigation</h4>
                                <p><strong>What It Does:</strong> Find and interact with any page element using natural language</p>
                                <div className={styles.featureDetails}>
                                    <p><strong>How It Works:</strong></p>
                                    <ul>
                                        <li>User types: <em>"I want to logout"</em></li>
                                        <li>AI detects the correct button automatically</li>
                                        <li>Visual overlay dims the page and highlights the target element</li>
                                        <li>Step-by-step guidance with "Next" and "Previous" controls</li>
                                    </ul>
                                </div>
                                <div className={styles.techNote}>
                                    <strong>Technical Implementation:</strong> Sense-Plan-Act Cycle with DOM selectors and driver.js integration
                                </div>
                            </div>

                            {/* Feature 2: Accessibility */}
                            <div className={styles.featureCard}>
                                <img src={AccessibilityImage} alt="Accessibility Module" className={styles.featureImage} />
                                <div className={styles.featureHeader}>
                                    {/* <MdAccessibility className={styles.featureIcon} /> */}
                                    <h3>Accessibility Module</h3>
                                </div>
                                <h4 className={styles.featureSubtitle}>Visual Presets & Color Blindness Support</h4>
                                <p><strong>What It Does:</strong> Makes web content accessible to users with visual impairments</p>
                                <div className={styles.featureDetails}>
                                    <p><strong>Features:</strong></p>
                                    <ul>
                                        <li><strong>Visual Presets:</strong> One-click High Contrast, Dark Mode, Grayscale</li>
                                        <li><strong>Color Blindness Simulation:</strong> Protanopia, Deuteranopia, Tritanopia filters</li>
                                        <li><strong>Dynamic CSS Filters:</strong> Real-time accessibility adjustments</li>
                                        <li><strong>User-Controlled:</strong> Toggle modes instantly with state synced to active tab</li>
                                    </ul>
                                </div>
                                <div className={styles.techNote}>
                                    <strong>Technical Implementation:</strong> Content script injects global CSS with SVG filters for color blindness simulation
                                </div>
                            </div>

                            {/* Feature 3: Intelligence */}
                            <div className={styles.featureCard}>
                                <img src={IntelligenceImage} alt="Intelligence Module" className={styles.featureImage} />
                                <div className={styles.featureHeader}>
                                    {/* <FaBrain className={styles.featureIcon} /> */}
                                    <h3>Intelligence Module</h3>
                                </div>
                                <h4 className={styles.featureSubtitle}>Smart Summarization & Content Repurposing</h4>
                                <p><strong>What It Does:</strong> Understand and repurpose web content instantly</p>
                                <div className={styles.featureDetails}>
                                    <p><strong>Features:</strong></p>
                                    <ul>
                                        <li><strong>Smart Summarization:</strong> ELI5, Short, or Full formats</li>
                                        <li><strong>Content Repurposing:</strong> Convert research into Tweets, Blog posts, or Articles</li>
                                        <li><strong>Real-Time Analysis:</strong> Powered by Gemini 3 for context-aware understanding</li>
                                    </ul>
                                </div>
                                <div className={styles.techNote}>
                                    <strong>Technical Implementation:</strong> Extracts text using document.body.innerText and sends to Gemini with optimized prompts
                                </div>
                            </div>

                            {/* Feature 4: Assistant */}
                            <div className={styles.featureCard}>
                                <img src={AssistantImage} alt="Assistant Module" className={styles.featureImage} />
                                <div className={styles.featureHeader}>
                                    {/* <FaComments className={styles.featureIcon} /> */}
                                    <h3>Assistant Module</h3>
                                </div>
                                <h4 className={styles.featureSubtitle}>Direct Page Chat</h4>
                                <p><strong>What It Does:</strong> Conversational AI that understands your current webpage</p>
                                <div className={styles.featureDetails}>
                                    <p><strong>Features:</strong></p>
                                    <ul>
                                        <li><strong>Talk to Any Website:</strong> Ask questions about the current page</li>
                                        <li><strong>Contextual Understanding:</strong> AI has full knowledge of page content</li>
                                        <li><strong>Natural Conversation:</strong> Follow-up questions and detailed explanations</li>
                                        <li><strong>Multi-Purpose:</strong> Explain complex terms, find specific data, provide navigation help</li>
                                    </ul>
                                </div>
                                <div className={styles.techNote}>
                                    <strong>Technical Implementation:</strong> Chrome Extension Messaging API with TanStack Query for state management
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Team Section */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaUsers className={styles.titleIcon} />
                            Meet the Team: Innovation Driven by Interns
                        </h2>

                        <h3 className={styles.subsectionTitle}>The ShadowLight Team</h3>
                        <div className={styles.teamTable}>
                            <div className={styles.tableHeader}>
                                <span>Role</span>
                                <span>Name</span>
                                <span>Responsibility</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Team Lead</strong></span>
                                <span>Swarup Kusalkar</span>
                                <span>Repurpose & Summarization Module</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Tech Lead</strong></span>
                                <span>Sanjana Palkar</span>
                                <span>AI Engine & Navigation System</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Team Member</strong></span>
                                <span>Sairaj Dhamal</span>
                                <span>DOM Scripting & Accessibility Features</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Team Member</strong></span>
                                <span>Samay Gangwal</span>
                                <span>UI Design & QA Lead</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Team Member</strong></span>
                                <span>Manasi Choudhari</span>
                                <span>QA & Documentation</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span><strong>Mentor</strong></span>
                                <span>Punit Suman</span>
                                <span>Project Guidance & Technical Oversight</span>
                            </div>
                        </div>

                        <h3 className={styles.subsectionTitle}>What Made This Team Special</h3>
                        <div className={styles.teamHighlights}>
                            <div className={styles.highlightCard}>
                                <FaBolt className={styles.highlightIcon} />
                                <h4>Embracing AI from Day One</h4>
                                <p>Instead of traditional development approaches, the team leveraged AI at every stage</p>
                            </div>
                            <div className={styles.highlightCard}>
                                <FaRocket className={styles.highlightIcon} />
                                <h4>Rapid Learning</h4>
                                <p>Mastered modern technologies (React 19, TypeScript, Plasmo, Gemini API) in parallel with development</p>
                            </div>
                            <div className={styles.highlightCard}>
                                <FaUsers className={styles.highlightIcon} />
                                <h4>Collaborative Innovation</h4>
                                <p>Each team member contributed unique features while maintaining architectural consistency</p>
                            </div>
                            <div className={styles.highlightCard}>
                                <FaCheckCircle className={styles.highlightIcon} />
                                <h4>Quality Focus</h4>
                                <p>Despite the accelerated timeline, maintained production-ready code quality and comprehensive testing</p>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Productivity Gains */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaClock className={styles.titleIcon} />
                            Productivity Gains: Measurable Impact
                        </h2>

                        <div className={styles.productivityGrid}>
                            <div className={styles.productivitySection}>
                                <h3 className={styles.subsectionTitle}>Development Efficiency</h3>
                                <ul className={styles.metricsList}>
                                    <li><FaCheckCircle className={styles.checkIcon} /> <strong>70% Reduction in Scaffolding Time:</strong> AI-generated boilerplate and component structures</li>
                                    <li><FaCheckCircle className={styles.checkIcon} /> <strong>Virtually Eliminated Library Errors:</strong> AI-assisted dependency management and API usage</li>
                                    <li><FaCheckCircle className={styles.checkIcon} /> <strong>Parallel Feature Development:</strong> Multiple features developed simultaneously instead of sequentially</li>
                                    <li><FaCheckCircle className={styles.checkIcon} /> <strong>Instant Documentation:</strong> Auto-generated technical docs and inline comments</li>
                                </ul>
                            </div>

                            <div className={styles.productivitySection}>
                                <h3 className={styles.subsectionTitle}>Code Quality Improvements</h3>
                                <ul className={styles.metricsList}>
                                    <li><FaCheckCircle className={styles.checkIcon} /> <strong>Type Safety:</strong> TypeScript caught errors at compile-time</li>
                                    <li><FaCheckCircle className={styles.checkIcon} /> <strong>Consistent Patterns:</strong> AI-enforced architectural patterns across the codebase</li>
                                    <li><FaCheckCircle className={styles.checkIcon} /> <strong>Automated Testing:</strong> AI-generated test cases for critical paths</li>
                                    <li><FaCheckCircle className={styles.checkIcon} /> <strong>Performance Optimizations:</strong> AI-suggested caching and rendering improvements</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Key Takeaways */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>
                            Key Takeaways: Lessons from AI-Accelerated Development
                        </h2>

                        <div className={styles.takeawaysGrid}>
                            <div className={styles.takeawayCard}>
                                <div className={styles.takeawayNumber}>1</div>
                                <h3>AI as a Force Multiplier</h3>
                                <p>AI doesn't replace developers—it <strong>amplifies</strong> their capabilities. Our interns became significantly more productive by:</p>
                                <ul>
                                    <li>Focusing on <strong>high-level architecture</strong> rather than boilerplate</li>
                                    <li>Leveraging AI for <strong>rapid prototyping and iteration</strong></li>
                                    <li>Using AI-assisted <strong>debugging and optimization</strong></li>
                                </ul>
                            </div>

                            <div className={styles.takeawayCard}>
                                <div className={styles.takeawayNumber}>2</div>
                                <h3>Modern Tools Matter</h3>
                                <p>The right tech stack makes all the difference:</p>
                                <ul>
                                    <li><strong>Plasmo</strong> eliminated Chrome extension configuration complexity</li>
                                    <li><strong>React + TypeScript</strong> provided structure and type safety</li>
                                    <li><strong>Gemini's ultra-low latency</strong> enabled real-time AI features</li>
                                    <li><strong>Tailwind CSS</strong> accelerated UI development</li>
                                </ul>
                            </div>

                            <div className={styles.takeawayCard}>
                                <div className={styles.takeawayNumber}>3</div>
                                <h3>Team Learning Accelerates When AI Removes Friction</h3>
                                <p>Interns could learn advanced concepts faster because:</p>
                                <ul>
                                    <li>AI explained complex patterns in real-time</li>
                                    <li>Less time debugging syntax, more time understanding architecture</li>
                                    <li>Instant feedback on code quality and best practices</li>
                                </ul>
                            </div>

                            <div className={styles.takeawayCard}>
                                <div className={styles.takeawayNumber}>4</div>
                                <h3>Quality Doesn't Suffer with Speed</h3>
                                <p>Despite the accelerated timeline:</p>
                                <ul>
                                    <li>✅ Production-ready code quality</li>
                                    <li>✅ Comprehensive accessibility features</li>
                                    <li>✅ Secure communication patterns</li>
                                    <li>✅ Responsive, polished UI</li>
                                    <li>✅ Privacy-first architecture (no data stored)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Future Enhancements */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Future Enhancements: The Roadmap Ahead
                        </h2>
                        <p className={styles.paragraph}>
                            While ShadowLight is already production-ready, we're planning exciting enhancements:
                        </p>

                        <div className={styles.roadmapGrid}>
                            <div className={styles.roadmapItem}>
                                <h4>Voice Navigation</h4>
                                <p>Integrating Speech-to-Text for completely hands-free web browsing</p>
                            </div>
                            <div className={styles.roadmapItem}>
                                <h4>Multi-Tab Context</h4>
                                <p>Allowing the AI to reference information from multiple open tabs simultaneously</p>
                            </div>
                            <div className={styles.roadmapItem}>
                                <h4>Personalized Accessibility</h4>
                                <p>Auto-detecting page contrast issues and suggesting adjustments based on user preferences</p>
                            </div>
                            <div className={styles.roadmapItem}>
                                <h4>Offline Modes</h4>
                                <p>Using local LLMs (like Chrome Built-in AI) for basic summarization to enhance privacy</p>
                            </div>
                            <div className={styles.roadmapItem}>
                                <h4>Multi-Language Support</h4>
                                <p>Enabling users to interact with the extension in different languages</p>
                            </div>
                            <div className={styles.roadmapItem}>
                                <h4>Cross-Browser Support</h4>
                                <p>Extending compatibility to Firefox and Edge</p>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Conclusion */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Conclusion: The Future of AI-Assisted Development
                        </h2>

                        <p className={styles.paragraph}>
                            ShadowLight represents more than just a Chrome extension - it's a <strong>case study in modern, AI-accelerated software development</strong>. Our intern team demonstrated that with the right tools, guidance, and AI assistance, even complex, production-ready applications can be built at unprecedented speed without compromising quality.
                        </p>

                        <div className={styles.beyondCode}>
                            <h3>Beyond the Code</h3>
                            <p>
                                The real innovation isn't just the technology - it's the <strong>mindset shift</strong>. Our team didn't just write code; they <strong>orchestrated AI agents</strong>, <strong>managed autonomous systems</strong>, and <strong>designed intelligent workflows</strong>. This represents a fundamental evolution from writing code to <strong>engineering intelligent systems</strong>.
                            </p>
                        </div>

                        <div className={styles.finalCallout}>
                            <FaChrome className={styles.calloutIcon} />
                            <h3>Try ShadowLight</h3>
                            <p>
                                ShadowLight is a testament to what's possible when innovative teams embrace AI as a development partner. Whether you're a developer exploring AI-assisted workflows, a business looking to improve web accessibility, or simply curious about the future of software development, ShadowLight showcases the transformative potential of AI in action.
                            </p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className={styles.tags}>
                        <span className={styles.tag}>#AI</span>
                        <span className={styles.tag}>#ChromeExtension</span>
                        <span className={styles.tag}>#Accessibility</span>
                        <span className={styles.tag}>#WebDevelopment</span>
                        <span className={styles.tag}>#ReactJS</span>
                        <span className={styles.tag}>#TypeScript</span>
                        <span className={styles.tag}>#Productivity</span>
                        <span className={styles.tag}>#Innovation</span>
                        <span className={styles.tag}>#InternProject</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShadowLightBlog;
