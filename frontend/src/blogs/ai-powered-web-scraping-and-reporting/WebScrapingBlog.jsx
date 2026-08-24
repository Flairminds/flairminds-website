import React from 'react';
import styles from './WebScrapingBlog.module.css';
import {
    FaRocket,
    FaCog,
    FaCode,
    FaDatabase,
    FaYoutube,
    FaFileAlt,
    FaRobot,
    FaShieldAlt,
    FaExchangeAlt,
    FaNetworkWired,
    FaLayerGroup,
    FaCheckCircle,
    FaLightbulb,
    FaDesktop,
    FaBrain,
    FaPython
} from 'react-icons/fa';
import { MdOutlineDocumentScanner, MdAutorenew } from 'react-icons/md';
import { BiGitBranch } from 'react-icons/bi';
import Seo from '../../components/seo/Seo';

const WebScrapingBlog = () => {
    return (
        <>
            <Seo
                title="AI-Powered Web Scraping & Report Generation - Technical Deep Dive"
                description="A comprehensive look at the engineering challenges and solutions behind combining async web crawling, document parsing, and LLM integration in a Streamlit application."
                path="/blogs/ai-powered-web-scraping-and-reporting"
            />

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Hero Section */}
                    <div className={styles.hero}>
                        <div className={styles.heroIcon}>
                            <FaRocket />
                        </div>
                        <h1 className={styles.title}>
                            Building an AI-Powered Web Scraping & Report Generation System
                        </h1>
                        <p className={styles.subtitle}>
                            A comprehensive look at the engineering challenges and solutions behind combining async web crawling, document parsing, and LLM integration in a Streamlit application.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* Tech Stack Section */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaLayerGroup className={styles.titleIcon} />
                            Tech Stack at a Glance
                        </h2>
                        <div className={styles.techStackGrid}>
                            <div className={styles.techCard}>
                                <div className={styles.techIcon}>
                                    <FaDesktop />
                                </div>
                                <div className={styles.techInfo}>
                                    <h4>UI Framework</h4>
                                    <p>Streamlit 1.51</p>
                                </div>
                            </div>
                            <div className={styles.techCard}>
                                <div className={styles.techIcon}>
                                    <FaNetworkWired />
                                </div>
                                <div className={styles.techInfo}>
                                    <h4>Web Scraping</h4>
                                    <p>Crawl4AI 0.7.6</p>
                                </div>
                            </div>
                            <div className={styles.techCard}>
                                <div className={styles.techIcon}>
                                    <FaYoutube />
                                </div>
                                <div className={styles.techInfo}>
                                    <h4>Video Transcripts</h4>
                                    <p>youtube-transcript-api 1.2.3</p>
                                </div>
                            </div>
                            <div className={styles.techCard}>
                                <div className={styles.techIcon}>
                                    <FaBrain />
                                </div>
                                <div className={styles.techInfo}>
                                    <h4>LLM</h4>
                                    <p>Google Gemini 0.8.5</p>
                                </div>
                            </div>
                            <div className={styles.techCard}>
                                <div className={styles.techIcon}>
                                    <FaFileAlt />
                                </div>
                                <div className={styles.techInfo}>
                                    <h4>Document Parsing</h4>
                                    <p>PyPDF2, python-docx</p>
                                </div>
                            </div>
                            <div className={styles.techCard}>
                                <div className={styles.techIcon}>
                                    <FaPython />
                                </div>
                                <div className={styles.techInfo}>
                                    <h4>Browser Automation</h4>
                                    <p>Playwright 1.55.0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Challenge 1 - Async Operations */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaCog className={styles.titleIcon} />
                            Challenge #1: Async Operations Inside Streamlit's Sync Context
                        </h2>

                        <div className={styles.problemBox}>
                            <h3 className={styles.problemTitle}>The Problem</h3>
                            <p className={styles.paragraph}>
                                Crawl4AI is built on async/await patterns for efficient I/O operations. However, Streamlit runs in a synchronous context that may already have an event loop running. Calling <code>asyncio.run()</code> inside an existing loop raises:
                            </p>
                            <div className={styles.errorBox}>
                                <code>RuntimeError: This event loop is already running</code>
                            </div>
                        </div>

                        <div className={styles.solutionBox}>
                            <h3 className={styles.solutionTitle}>
                                <FaLightbulb className={styles.solutionIcon} />
                                The Solution: Thread Delegation with Queue-Based Communication
                            </h3>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>
                                    <span>Python</span>
                                </div>
                                <pre className={styles.codeContent}>{`def run(url: str) -> str:
    try:
        loop = asyncio.get_running_loop()
    except RuntimeError:
        loop = None

    if loop and loop.is_running():
        # Already in an async context - delegate to a separate thread
        q: queue.Queue[tuple[bool, object]] = queue.Queue()

        def worker():
            new_loop = asyncio.new_event_loop()
            asyncio.set_event_loop(new_loop)
            try:
                res = new_loop.run_until_complete(scrape(url))
                q.put((True, res))
            except Exception as e:
                q.put((False, e))
            finally:
                new_loop.close()

        t = threading.Thread(target=worker, daemon=True)
        t.start()
        ok, val = q.get()  # Block until result ready
        if ok:
            return val
        raise val
    else:
        # No existing loop - safe to use asyncio.run()
        return asyncio.run(scrape(url))`}</pre>
                            </div>
                        </div>

                        <div className={styles.keyPointsGrid}>
                            <div className={styles.keyPoint}>
                                <FaCheckCircle className={styles.keyPointIcon} />
                                <div>
                                    <strong>Thread isolation</strong>
                                    <p>Each async operation gets its own event loop in a dedicated thread</p>
                                </div>
                            </div>
                            <div className={styles.keyPoint}>
                                <FaCheckCircle className={styles.keyPointIcon} />
                                <div>
                                    <strong>Queue-based result passing</strong>
                                    <p>Thread-safe communication without shared mutable state</p>
                                </div>
                            </div>
                            <div className={styles.keyPoint}>
                                <FaCheckCircle className={styles.keyPointIcon} />
                                <div>
                                    <strong>Daemon threads</strong>
                                    <p>Auto-cleanup on application exit</p>
                                </div>
                            </div>
                            <div className={styles.keyPoint}>
                                <FaCheckCircle className={styles.keyPointIcon} />
                                <div>
                                    <strong>Tuple unpacking for errors</strong>
                                    <p>Preserves exception type and traceback</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.calloutBox}>
                            <h4 className={styles.calloutTitle}>
                                <MdAutorenew className={styles.calloutIcon} />
                                Windows-Specific Event Loop Policy
                            </h4>
                            <p>Windows requires special handling for async subprocess operations:</p>
                            <div className={styles.inlineCode}>
                                <code>asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())</code>
                            </div>
                            <p>The <strong>ProactorEventLoop</strong> is required on Windows for proper subprocess and pipe handling that Crawl4AI uses internally.</p>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Challenge 2 - Unified Content Extraction */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <MdOutlineDocumentScanner className={styles.titleIcon} />
                            Challenge #2: Unified Content Extraction from Heterogeneous Sources
                        </h2>

                        <div className={styles.problemBox}>
                            <h3 className={styles.problemTitle}>The Problem</h3>
                            <p className={styles.paragraph}>
                                Different source types require different extraction strategies:
                            </p>
                            <div className={styles.sourceTypesGrid}>
                                <div className={styles.sourceType}>
                                    <FaNetworkWired className={styles.sourceIcon} />
                                    <strong>Web URLs</strong>
                                    <p>Need headless browser rendering for JavaScript-heavy sites</p>
                                </div>
                                <div className={styles.sourceType}>
                                    <FaYoutube className={styles.sourceIcon} />
                                    <strong>YouTube URLs</strong>
                                    <p>Standard scraping fails—need transcript API</p>
                                </div>
                                <div className={styles.sourceType}>
                                    <FaFileAlt className={styles.sourceIcon} />
                                    <strong>PDFs</strong>
                                    <p>Binary format requiring specialized parsing</p>
                                </div>
                                <div className={styles.sourceType}>
                                    <MdOutlineDocumentScanner className={styles.sourceIcon} />
                                    <strong>DOCX</strong>
                                    <p>XML-based format with paragraph structure</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.solutionBox}>
                            <h3 className={styles.solutionTitle}>
                                <FaLightbulb className={styles.solutionIcon} />
                                The Solution: Smart Routing with Fallback Chains
                            </h3>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>
                                    <span>Python - Smart URL Routing</span>
                                </div>
                                <pre className={styles.codeContent}>{`async def scrape(url: str) -> str:
    # Route based on URL pattern
    if _is_youtube_url(url):
        vid = _extract_youtube_video_id(url)
        if vid:
            try:
                return _fetch_youtube_transcript_text(vid)
            except Exception:
                pass  # Fallback to web crawling
    
    # Default: headless browser crawl
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(url)
        return result.markdown or ""`}</pre>
                            </div>
                        </div>

                        {/* YouTube URL Detection Diagram */}
                        <div className={styles.flowchartContainer}>
                            <h3 className={styles.flowchartTitle}>YouTube URL Detection Flow</h3>
                            <div className={styles.flowchart}>
                                <div className={styles.flowRow}>
                                    <div className={styles.flowNode}>
                                        <span className={styles.flowLabel}>Input URL</span>
                                    </div>
                                </div>
                                <div className={styles.flowArrow}>↓</div>
                                <div className={styles.flowRow}>
                                    <div className={styles.flowDecision}>
                                        <span>Is YouTube URL?</span>
                                    </div>
                                </div>
                                <div className={styles.flowBranch}>
                                    <div className={styles.flowBranchYes}>
                                        <span className={styles.branchLabel}>Yes</span>
                                        <div className={styles.flowArrow}>↓</div>
                                        <div className={styles.flowNodeSmall}>Extract Video ID</div>
                                        <div className={styles.flowArrow}>↓</div>
                                        <div className={styles.urlFormats}>
                                            <div className={styles.urlFormat}>youtu.be/ID</div>
                                            <div className={styles.urlFormat}>?v=ID</div>
                                            <div className={styles.urlFormat}>/shorts/ID</div>
                                            <div className={styles.urlFormat}>/embed/ID</div>
                                        </div>
                                        <div className={styles.flowArrow}>↓</div>
                                        <div className={styles.flowNodeSuccess}>Fetch Transcript</div>
                                    </div>
                                    <div className={styles.flowBranchNo}>
                                        <span className={styles.branchLabel}>No</span>
                                        <div className={styles.flowArrow}>↓</div>
                                        <div className={styles.flowNodeSuccess}>Web Crawler</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Challenge 3 - LLM Reliability */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaRobot className={styles.titleIcon} />
                            Challenge #3: LLM API Reliability and Model Fallback
                        </h2>

                        <div className={styles.problemBox}>
                            <h3 className={styles.problemTitle}>The Problem</h3>
                            <p className={styles.paragraph}>
                                LLM APIs can fail for various reasons. A single API call failure shouldn't break the entire workflow.
                            </p>
                            <div className={styles.failureReasons}>
                                <span className={styles.failureTag}>Rate limiting</span>
                                <span className={styles.failureTag}>Model deprecation</span>
                                <span className={styles.failureTag}>Temporary outages</span>
                                <span className={styles.failureTag}>Quota exhaustion</span>
                            </div>
                        </div>

                        <div className={styles.solutionBox}>
                            <h3 className={styles.solutionTitle}>
                                <FaLightbulb className={styles.solutionIcon} />
                                The Solution: Cascading Model Fallback
                            </h3>

                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>
                                    <span>Python - Cascading Fallback</span>
                                </div>
                                <pre className={styles.codeContent}>{`def summarize_with_gemini(text: str, prompt: str | None = None) -> str:
    genai.configure(api_key=api_key)
    
    # Ordered by preference: latest → stable fallbacks
    choices = [
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-2.5-flash-lite",
        "gemini-1.5-flash",
        "gemini-1.5-pro",
    ]
    
    last_err: Exception | None = None
    for name in choices:
        try:
            model = genai.GenerativeModel(name)
            resp = model.generate_content(full_prompt)
            
            # Handle different response structures
            if hasattr(resp, "text") and resp.text:
                return resp.text
            ...
        except Exception as e:
            last_err = e
            continue  # Try next model
    
    if last_err:
        raise last_err
    return ""`}</pre>
                            </div>
                        </div>

                        <div className={styles.engineeringNotes}>
                            <h4>Engineering Considerations</h4>
                            <ul>
                                <li><strong>Response structure handling:</strong> Gemini SDK response objects vary—defensive attribute access required</li>
                                <li><strong>Preserving the last error:</strong> If all models fail, raise the most recent exception for debugging</li>
                                <li><strong>Order matters:</strong> Prefer faster/cheaper models first, fall back to more capable ones</li>
                            </ul>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Challenge 4 - Safe Filename Generation */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaShieldAlt className={styles.titleIcon} />
                            Challenge #4: Safe Filename Generation from URLs
                        </h2>

                        <div className={styles.problemBox}>
                            <h3 className={styles.problemTitle}>The Problem</h3>
                            <p className={styles.paragraph}>
                                URLs contain characters that are invalid in filenames across different operating systems. Additionally, different URLs might generate the same filename, causing data overwrites.
                            </p>
                            <div className={styles.invalidChars}>
                                <span className={styles.charBadge}>/</span>
                                <span className={styles.charBadge}>\</span>
                                <span className={styles.charBadge}>?</span>
                                <span className={styles.charBadge}>&</span>
                                <span className={styles.charBadge}>=</span>
                                <span className={styles.charBadge}>:</span>
                            </div>
                        </div>

                        <div className={styles.solutionBox}>
                            <h3 className={styles.solutionTitle}>
                                <FaLightbulb className={styles.solutionIcon} />
                                The Solution: Slugification with Hash-Based Uniqueness
                            </h3>

                            {/* Filename Generation Flow */}
                            <div className={styles.filenameFlow}>
                                <div className={styles.filenameStep}>
                                    <div className={styles.stepNumber}>1</div>
                                    <div className={styles.stepContent}>
                                        <strong>Parse URL</strong>
                                        <code>host + path</code>
                                    </div>
                                </div>
                                <div className={styles.filenameArrow}>→</div>
                                <div className={styles.filenameStep}>
                                    <div className={styles.stepNumber}>2</div>
                                    <div className={styles.stepContent}>
                                        <strong>Slugify</strong>
                                        <code>Invalid → _</code>
                                    </div>
                                </div>
                                <div className={styles.filenameArrow}>→</div>
                                <div className={styles.filenameStep}>
                                    <div className={styles.stepNumber}>3</div>
                                    <div className={styles.stepContent}>
                                        <strong>Add Hash</strong>
                                        <code>SHA1[:8]</code>
                                    </div>
                                </div>
                                <div className={styles.filenameArrow}>→</div>
                                <div className={styles.filenameStep}>
                                    <div className={styles.stepNumber}>4</div>
                                    <div className={styles.stepContent}>
                                        <strong>Truncate</strong>
                                        <code>Max 64 chars</code>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.hashExplanation}>
                                <h4>Why SHA1?</h4>
                                <div className={styles.hashPoints}>
                                    <div className={styles.hashPoint}>
                                        <FaCheckCircle className={styles.hashIcon} />
                                        <span>Fast computation</span>
                                    </div>
                                    <div className={styles.hashPoint}>
                                        <FaCheckCircle className={styles.hashIcon} />
                                        <span>8-character prefix provides ~4 billion unique values</span>
                                    </div>
                                    <div className={styles.hashPoint}>
                                        <FaCheckCircle className={styles.hashIcon} />
                                        <span>Full URL is hashed, preserving query string uniqueness</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Challenge 5 - Markdown to DOCX */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaExchangeAlt className={styles.titleIcon} />
                            Challenge #5: Markdown to DOCX Conversion with Formatting Preservation
                        </h2>

                        <div className={styles.problemBox}>
                            <h3 className={styles.problemTitle}>The Problem</h3>
                            <p className={styles.paragraph}>
                                Enterprise users need Word documents, but LLM output is Markdown. The conversion must preserve all formatting elements.
                            </p>
                        </div>

                        <div className={styles.formattingGrid}>
                            <div className={styles.formatItem}>
                                <span className={styles.formatIcon}>H1-H6</span>
                                <p>Heading hierarchy</p>
                            </div>
                            <div className={styles.formatItem}>
                                <span className={styles.formatIcon}><strong>B</strong><em>I</em></span>
                                <p>Bold & Italic</p>
                            </div>
                            <div className={styles.formatItem}>
                                <span className={styles.formatIcon}><code>`code`</code></span>
                                <p>Inline code</p>
                            </div>
                            <div className={styles.formatItem}>
                                <span className={styles.formatIcon}>• —</span>
                                <p>Lists</p>
                            </div>
                            <div className={styles.formatItem}>
                                <span className={styles.formatIcon}>```</span>
                                <p>Code blocks</p>
                            </div>
                        </div>

                        <div className={styles.solutionBox}>
                            <h3 className={styles.solutionTitle}>
                                <FaLightbulb className={styles.solutionIcon} />
                                The Solution: Regex-Based Markdown Parser
                            </h3>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>
                                    <span>Python - Inline Markdown Processing</span>
                                </div>
                                <pre className={styles.codeContent}>{`def _add_inline_markdown(paragraph, text: str):
    """Process inline markdown: **bold**, *italic*, \`code\`"""
    pattern = re.compile(r"(\\*\\*[^*]+\\*\\*|\\*[^*]+\\*|\`[^\`]+\`)")
    pos = 0
    
    for m in pattern.finditer(text):
        # Add plain text before match
        if m.start() > pos:
            paragraph.add_run(text[pos:m.start()])
        
        token = m.group(0)
        if token.startswith("**"):
            r = paragraph.add_run(token[2:-2])
            r.bold = True
        elif token.startswith("*"):
            r = paragraph.add_run(token[1:-1])
            r.italic = True
        elif token.startswith("\`"):
            r = paragraph.add_run(token[1:-1])
            r.font.name = "Courier New"
        
        pos = m.end()
    
    # Add remaining text
    if pos < len(text):
        paragraph.add_run(text[pos:])`}</pre>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Challenge 6 - State Management */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaDatabase className={styles.titleIcon} />
                            Challenge #6: State Management and Data Isolation
                        </h2>

                        <div className={styles.problemBox}>
                            <h3 className={styles.problemTitle}>The Problem</h3>
                            <p className={styles.paragraph}>
                                Multiple users share the same application instance. Each user's data must be isolated, persisted across sessions, and efficiently queryable.
                            </p>
                        </div>

                        <div className={styles.solutionBox}>
                            <h3 className={styles.solutionTitle}>
                                <FaLightbulb className={styles.solutionIcon} />
                                The Solution: TSV-Based Index Files with User ID Column
                            </h3>

                            <div className={styles.indexStructure}>
                                <h4>Index File Structure</h4>
                                <div className={styles.indexRow}>
                                    <span className={styles.indexCol}>URL</span>
                                    <span className={styles.indexSep}>\t</span>
                                    <span className={styles.indexCol}>Filename</span>
                                    <span className={styles.indexSep}>\t</span>
                                    <span className={styles.indexCol}>Timestamp</span>
                                    <span className={styles.indexSep}>\t</span>
                                    <span className={styles.indexCol}>UserID</span>
                                    <span className={styles.indexSep}>\t</span>
                                    <span className={styles.indexCol}>UploadFlag</span>
                                    <span className={styles.indexSep}>\t</span>
                                    <span className={styles.indexCol}>Title</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Architecture Diagram */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>
                            <BiGitBranch className={styles.titleIcon} />
                            System Architecture
                        </h2>

                        <div className={styles.architectureContainer}>
                            {/* UI Layer */}
                            <div className={styles.archLayer}>
                                <div className={styles.archLayerHeader}>
                                    <FaDesktop className={styles.archLayerIcon} />
                                    <span>STREAMLIT UI (app.py)</span>
                                </div>
                                <div className={styles.archModules}>
                                    <div className={styles.archModule}>Home (Extract)</div>
                                    <div className={styles.archModule}>Extracted Data</div>
                                    <div className={styles.archModule}>Build Report (Synthesis)</div>
                                </div>
                            </div>

                            <div className={styles.archConnector}>
                                <span>↓</span>
                            </div>

                            {/* Core Engine */}
                            <div className={styles.archLayer}>
                                <div className={styles.archLayerHeader}>
                                    <FaCog className={styles.archLayerIcon} />
                                    <span>CORE ENGINE (main.py)</span>
                                </div>

                                <div className={styles.archSubLayers}>
                                    {/* Async Scraping */}
                                    <div className={styles.archSubLayer}>
                                        <h5>ASYNC SCRAPING LAYER</h5>
                                        <div className={styles.archModules}>
                                            <div className={styles.archModule}>Crawl4AI (Browser)</div>
                                            <div className={styles.archModule}>YouTube Transcript API</div>
                                            <div className={styles.archModule}>Thread Delegation</div>
                                        </div>
                                    </div>

                                    {/* Document Parsing */}
                                    <div className={styles.archSubLayer}>
                                        <h5>DOCUMENT PARSING LAYER</h5>
                                        <div className={styles.archModules}>
                                            <div className={styles.archModule}>PyPDF2 (PDF)</div>
                                            <div className={styles.archModule}>python-docx</div>
                                            <div className={styles.archModule}>Plain Text/Markdown</div>
                                        </div>
                                    </div>

                                    {/* LLM Integration */}
                                    <div className={styles.archSubLayer}>
                                        <h5>LLM INTEGRATION LAYER</h5>
                                        <div className={styles.archModules}>
                                            <div className={styles.archModuleFull}>Gemini API → Model Fallback Chain → Response Normalization</div>
                                        </div>
                                    </div>

                                    {/* Persistence */}
                                    <div className={styles.archSubLayer}>
                                        <h5>PERSISTENCE LAYER</h5>
                                        <div className={styles.archModules}>
                                            <div className={styles.archModuleSmall}>extracted_data/</div>
                                            <div className={styles.archModuleSmall}>processed_data/</div>
                                            <div className={styles.archModuleSmall}>generated_reports/</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Key Takeaways Table */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>Key Takeaways</h2>
                        <div className={styles.takeawaysTable}>
                            <div className={styles.tableHeader}>
                                <span>Challenge</span>
                                <span>Solution</span>
                                <span>Key Technique</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span>Async in sync context</span>
                                <span>Thread delegation</span>
                                <span><code>threading.Thread</code> + <code>queue.Queue</code></span>
                            </div>
                            <div className={styles.tableRow}>
                                <span>Heterogeneous sources</span>
                                <span>Smart routing with fallback</span>
                                <span>URL pattern matching + exception handling</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span>LLM reliability</span>
                                <span>Model cascade</span>
                                <span>Ordered fallback with preserved errors</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span>Safe filenames</span>
                                <span>Slugification + hashing</span>
                                <span>Regex sanitization + SHA1 prefix</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span>Markdown → DOCX</span>
                                <span>Line-by-line parsing</span>
                                <span>Regex pattern matching + python-docx</span>
                            </div>
                            <div className={styles.tableRow}>
                                <span>User isolation</span>
                                <span>Index file filtering</span>
                                <span>TSV with UserID column</span>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Conclusion */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <FaRocket className={styles.titleIcon} />
                            Conclusion
                        </h2>
                        <p className={styles.paragraph}>
                            Building a production-ready web scraping and LLM integration system involves solving numerous edge cases and platform-specific issues. The key patterns demonstrated here—<strong>thread-based async isolation</strong>, <strong>cascading fallbacks</strong>, and <strong>defensive data handling</strong>—are applicable to any Python application integrating external APIs with complex I/O patterns.
                        </p>
                        <p className={styles.paragraph}>
                            The combination of Streamlit for rapid prototyping, Crawl4AI for robust web scraping, and Gemini for intelligent summarization creates a powerful foundation that can be extended to various domains beyond financial analysis.
                        </p>
                        <div className={styles.finalCallout}>
                            <p className={styles.tagline}>
                                <strong>Built by Flairminds</strong> — Turning complex data pipelines into simple workflows.
                            </p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className={styles.tags}>
                        <span className={styles.tag}>#WebScraping</span>
                        <span className={styles.tag}>#AI</span>
                        <span className={styles.tag}>#LLM</span>
                        <span className={styles.tag}>#Python</span>
                        <span className={styles.tag}>#Streamlit</span>
                        <span className={styles.tag}>#Automation</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebScrapingBlog;
