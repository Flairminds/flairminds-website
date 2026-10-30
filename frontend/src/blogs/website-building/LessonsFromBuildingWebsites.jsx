import React from 'react';
import styles from './LessonsFromBuildingWebsites.module.css';
import {
    FaFileLines,
    FaLayerGroup,
    FaLightbulb,
    FaCircleQuestion,
    FaCommentDots,
    FaAlignLeft,
    FaTableCellsLarge,
    FaClone,
    FaGem,
    FaFlagCheckered,
    FaArrowRight,
} from 'react-icons/fa6';
import Seo from '../../components/seo/Seo';
import HeroIllustration from './HeroIllustration';

/* Simple, fully-custom device glyphs for the responsive-breakpoints strip —
   the Font Awesome tablet/mobile icons render inconsistently inside a
   circular badge at this size, so these are drawn directly instead. */
const DesktopIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="12" rx="1.5" fill="currentColor" />
        <rect x="9" y="18" width="6" height="1.6" rx="0.8" fill="currentColor" />
        <rect x="10.5" y="16" width="3" height="2.4" fill="currentColor" />
    </svg>
);

const TabletIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2.5" width="14" height="19" rx="2" fill="currentColor" />
        <circle cx="12" cy="18.3" r="1" fill="var(--bg-white)" />
    </svg>
);

const MobileIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="2" width="10" height="20" rx="2.2" fill="currentColor" />
        <circle cx="12" cy="18" r="1" fill="var(--bg-white)" />
    </svg>
);

const LessonsFromBuildingWebsites = () => {
    return (
        <>
            <Seo
                title="Lessons from Building Websites for Real Clients"
                description="What working on real client websites taught me about content, feedback, responsive design and why a design the client dislikes isn't always a bad one."
                path="/blogs/lessons-from-building-client-websites"
            />

            <div className={styles.container}>
                <div className={styles.content}>

                    {/* Hero Illustration */}
                    <div className={styles.heroBanner}>
                        <HeroIllustration />
                    </div>

                    {/* Hero Section */}
                    <div className={styles.hero}>
                        <div className={styles.metaRow}>
                            <span className={styles.badge}>Website Design &amp; Client Work</span>
                            <span className={styles.metaDate}>October 5, 2026 · 6 min read · Manish Purswani</span>
                        </div>
                        <h1 className={styles.title}>
                            Lessons from Building Websites for Real Clients
                        </h1>
                        <p className={styles.subtitle}>
                            What working on real client websites taught me about content, feedback, responsive
                            design and why a design the client dislikes isn&apos;t always a bad one.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className={styles.section}>
                        <p className={styles.paragraph}>
                            Working on a client website is quite different from building one for practice or
                            personal use. In a personal project, most design decisions come down to our own
                            preferences. In a client project, the website has to represent the client&apos;s
                            business, present content clearly, look professional, and match what the client has
                            in mind.
                        </p>
                        <p className={styles.paragraph}>
                            I have worked on several client websites, mostly static, content-driven ones. Along
                            the way I learned that a good website takes more than code. Understanding the client,
                            the content and the overall visual experience matters just as much.
                        </p>
                    </div>

                    {/* Quick-reference grid of the 9 lessons */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>Nine Lessons at a Glance</h2>
                        <div className={styles.lessonsGrid}>
                            {[
                                { title: 'Start with the content, not the layout', desc: 'Decide what matters before you decide how it looks.' },
                                { title: 'Same content, very different pages', desc: 'How content is presented changes how it is understood.' },
                                { title: 'A disliked design isn’t always a bad design', desc: 'Fit for the client matters more than personal taste.' },
                                { title: 'Look behind the instruction', desc: 'Understand the "why" before implementing the "what".' },
                                { title: 'Show work early and often', desc: 'Feedback is part of the process, not the final step.' },
                                { title: 'Real content breaks neat layouts', desc: 'Design with realistic content from the beginning.' },
                                { title: 'A section can look great alone and still feel wrong', desc: 'Judge every section against the full page.' },
                                { title: 'Build for reuse and small screens from day one', desc: 'Components and responsiveness aren’t afterthoughts.' },
                                { title: 'The last 10% of polish', desc: 'Spacing and alignment decide if a page feels finished.' },
                            ].map((lesson, idx) => (
                                <div className={styles.lessonCard} key={idx}>
                                    <div className={styles.lessonNumber}>{idx + 1}</div>
                                    <div>
                                        <h4>{lesson.title}</h4>
                                        <p>{lesson.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* 1. Start with the content, not the layout */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaFileLines className={styles.titleIcon} />
                            Start with the Content, Not the Layout
                        </h2>
                        <p className={styles.paragraph}>
                            A content document gives you headings, paragraphs, images and other information,
                            but it doesn&apos;t tell you how the page should look. Before designing, we need to
                            decide what deserves more visual importance, which pieces of content belong together,
                            where visuals will help, and how the information can be presented clearly.
                        </p>
                        <div className={styles.calloutBox}>
                            <p>Content structure and visual design have to work together.</p>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* 2. Same content, very different pages */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaLayerGroup className={styles.titleIcon} />
                            Same Content, Very Different Pages
                        </h2>
                        <p className={styles.paragraph}>
                            The same content can be presented in many ways. Layout, typography, spacing, images,
                            colours and visual hierarchy all change how information is understood.
                        </p>
                        <p className={styles.paragraph}>
                            A long paragraph may fit on a webpage, but when it is broken into smaller sections
                            with clear headings, visuals and enough spacing, it becomes much easier to read. So I
                            now think about how content should be presented, not only what goes on the page.
                        </p>

                        {/* Illustrative "raw content vs. designed page" comparison */}
                        <div className={styles.compareRow}>
                            <div className={styles.comparePanel}>
                                <span className={styles.comparePanelLabel}>Raw Content Document</span>
                                <div className={styles.rawContentBlock}>
                                    <p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                                </div>
                            </div>
                            <div className={styles.comparePanel}>
                                <span className={styles.comparePanelLabel}>Same Content, Designed</span>
                                <div className={styles.designedCard}>
                                    <div className={styles.designedChip}>SECTION</div>
                                    <div className={styles.designedHeading}></div>
                                    <div className={styles.designedLine}></div>
                                    <div className={`${styles.designedLine} ${styles.short}`}></div>
                                    <div className={styles.designedGrid}>
                                        <div className={styles.designedBox}></div>
                                        <div className={styles.designedBox}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* 3. A design the client doesn't like isn't necessarily a bad design */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaLightbulb className={styles.titleIcon} />
                            A Design the Client Doesn&apos;t Like Isn&apos;t Necessarily a Bad Design
                        </h2>
                        <p className={styles.paragraph}>
                            Design is subjective. Something that looks good in one situation may feel different
                            when the content or the surrounding sections change. The same goes for clients. A
                            design one client loves may not suit another, even in the same industry with similar
                            content.
                        </p>
                        <p className={styles.paragraph}>
                            Preferences, expectations, brand identity and personal perception all play a part. A
                            design may not be &ldquo;bad&rdquo; just because someone doesn&apos;t like it. It may
                            simply not be the right fit for that client or context.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* 4. Look behind the instruction */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaCircleQuestion className={styles.titleIcon} />
                            Look Behind the Instruction
                        </h2>
                        <p className={styles.paragraph}>
                            Because design is subjective, understanding the client matters a great deal.
                            Sometimes a client knows something doesn&apos;t feel right but can&apos;t say what
                            should change. Sometimes they point to a website they like without explaining what
                            attracted them to it.
                        </p>
                        <p className={styles.paragraph}>
                            In those moments, it helps to look past the instruction and ask a few questions:
                        </p>

                        <div className={styles.stepsList}>
                            <div className={styles.stepItem}>
                                <FaCircleQuestion className={styles.stepIcon} />
                                <p>What should the website communicate?</p>
                            </div>
                            <div className={styles.stepItem}>
                                <FaCircleQuestion className={styles.stepIcon} />
                                <p>What impression should visitors leave with?</p>
                            </div>
                            <div className={styles.stepItem}>
                                <FaCircleQuestion className={styles.stepIcon} />
                                <p>
                                    What did the client like about the other site: its layout, colours,
                                    typography, imagery, spacing or overall feel?
                                </p>
                            </div>
                        </div>

                        <div className={styles.quoteBlock}>
                            &ldquo;The website represents the client&apos;s business. In a way, it is their baby.
                            We can suggest ideas from our experience, but the client won&apos;t necessarily like
                            every one, so understanding their expectations is as important as implementing the
                            design.&rdquo;
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* 5. Show work early and often */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaCommentDots className={styles.titleIcon} />
                            Show Work Early and Often
                        </h2>
                        <p className={styles.paragraph}>
                            Clients don&apos;t always share everything at the start. Many only realise what they
                            want once they see an actual design. Regular reviews catch misunderstandings early and
                            bring out expectations that were missing from the original requirements.
                        </p>
                        <div className={styles.calloutBox}>
                            <p>Feedback isn&apos;t just a final approval step. It is part of the design process itself.</p>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* 6. Real content breaks neat layouts */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaAlignLeft className={styles.titleIcon} />
                            Real Content Breaks Neat Layouts
                        </h2>
                        <p className={styles.paragraph}>
                            Placeholder text makes a design look balanced because its length is predictable. Real
                            client content is often longer or shorter than expected. Headings wrap, cards end up
                            with different heights, images need repositioning, and sections become visually
                            uneven.
                        </p>
                        <p className={styles.paragraph}>
                            A layout that looks perfect with sample text may need changes once the actual content
                            goes in. Designing with realistic content from the beginning saves a lot of rework
                            later.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* 7. A section can look great alone and still feel wrong on the page */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaTableCellsLarge className={styles.titleIcon} />
                            A Section Can Look Great Alone and Still Feel Wrong on the Page
                        </h2>
                        <p className={styles.paragraph}>
                            A section can&apos;t always be judged by itself. Spacing, image size, text length and
                            neighbouring sections all affect the balance of the page, so design decisions need to
                            be checked against the complete page, not one section at a time.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* 8. Build for reuse and small screens from day one */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaClone className={styles.titleIcon} />
                            Build for Reuse and Small Screens from Day One
                        </h2>
                        <p className={styles.paragraph}>
                            Reusable components such as headers, footers, buttons, cards and hero sections keep a
                            website consistent and make future changes easier.
                        </p>
                        <p className={styles.paragraph}>
                            Responsive design deserves the same attention from the start. A desktop layout often
                            needs significant changes for tablets and mobiles. Text wraps differently, images need
                            different proportions, and sections may need to be rearranged. Treating this as
                            something to fix at the end usually costs more time.
                        </p>

                        <div className={styles.deviceStrip}>
                            <div className={styles.deviceItem}>
                                <span className={styles.deviceIcon}><DesktopIcon /></span>
                                <span className={styles.deviceLabel}>Desktop</span>
                            </div>
                            <FaArrowRight className={styles.deviceArrow} />
                            <div className={styles.deviceItem}>
                                <span className={styles.deviceIcon}><TabletIcon /></span>
                                <span className={styles.deviceLabel}>Tablet</span>
                            </div>
                            <FaArrowRight className={styles.deviceArrow} />
                            <div className={styles.deviceItem}>
                                <span className={styles.deviceIcon}><MobileIcon /></span>
                                <span className={styles.deviceLabel}>Mobile</span>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* 9. The last 10% of polish */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaGem className={styles.titleIcon} />
                            The Last 10% of Polish
                        </h2>
                        <p className={styles.paragraph}>
                            Spacing, alignment, typography, line height, image cropping, button positioning and
                            white space have a big effect on how polished a website feels. A page can contain all
                            the required content and still look unfinished if these details are ignored.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* Conclusion */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaFlagCheckered className={styles.titleIcon} />
                            What I&apos;ll Carry into My Next Project
                        </h2>
                        <p className={styles.paragraph}>
                            I no longer see website design as just creating attractive pages. For me it is a
                            process: understand the client&apos;s business, understand the content, explore design
                            options, take regular feedback, and refine the result against the full page and real
                            content.
                        </p>
                        <p className={styles.paragraph}>
                            There may not be one perfect design. The right one fits the particular client, their
                            content, their brand and the message they want to share.
                        </p>

                        <div className={styles.conclusionHighlight}>
                            <h3>Key Takeaway</h3>
                            <p>
                                So the question isn&apos;t only &ldquo;Can we build this page?&rdquo; It is also
                                &ldquo;What does the client want to communicate, how do they want it to look, and
                                why?&rdquo;
                            </p>
                        </div>

                        {/* <p className={styles.authorNote}>
                            <FaRegCommentDots style={{ marginRight: '0.5rem', color: 'var(--primary)' }} />
                            Manish writes about website design and the client design process.
                        </p> */}
                    </div>

                    {/* Tags */}
                    <div className={styles.tags}>
                        <span className={styles.tag}>#WebsiteDesign</span>
                        <span className={styles.tag}>#ClientWork</span>
                        <span className={styles.tag}>#DesignProcess</span>
                        <span className={styles.tag}>#ResponsiveDesign</span>
                        <span className={styles.tag}>#UXDesign</span>
                        <span className={styles.tag}>#WebDevelopment</span>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LessonsFromBuildingWebsites;
