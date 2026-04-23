import React from 'react';
import styles from './DocExtractBlog.module.css';
import {
    FaFilePdf, FaImage, FaTable, FaChartBar, FaPenFancy,
    FaCheckCircle, FaTimesCircle, FaLightbulb, FaShieldAlt,
    FaCogs, FaProjectDiagram, FaServer
} from 'react-icons/fa';
import { MdApi, MdAutoFixHigh } from 'react-icons/md';

import HeroImage from './doc-extract-hero.png';
import BenchmarkChart from './benchmark-scores-chart.png';
import ArchitectureDiagram from './docextract-architecture.png';
import SelectionGuide from './engine-selection-guide.png';

const DocExtractBlog = () => {
    return (
        <>
            <head>
                <title>Benchmarking Modern Document Intelligence | FlairMinds</title>
                <meta
                    name="description"
                    content="A comprehensive benchmarking study comparing PaddleOCR, LlamaParse, Gemini Vision, PyMuPDF4LLM, MinerU, and Azure Document Intelligence across various document types."
                />
            </head>

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Hero Section */}
                    <div className={styles.hero}>
                        <div className={styles.metaRow}>
                            <span className={styles.badge}>Research</span>
                            <span className={styles.metaDate}>23 April 2026 · 8 min read · Sairaj Dhamal</span>
                        </div>
                        <h1 className={styles.title}>
                            Benchmarking Modern Document Intelligence: OCR, VLMs, and Layout Parsers
                        </h1>
                        <p className={styles.subtitle}>
                            Which extraction architecture yields the highest fidelity across diverse document types? We ran six engines in parallel to find out.
                        </p>
                        <div className={styles.heroImageContainer}>
                            <img src={HeroImage} alt="Document Intelligence Benchmarking Concept" className={styles.heroImage} />
                        </div>
                    </div>

                    {/* Abstract Box */}
                    <div className={styles.abstractBox}>
                        <p><strong>Abstract:</strong> This study evaluates six document extraction methodologies (PaddleOCR, LlamaParse, Gemini Vision, PyMuPDF4LLM, MinerU+Qwen, Azure Document Intelligence) across five document types (digital text, scanned images, tables, charts, handwriting). Our findings indicate that no single engine dominates; rather, document type is the primary determinant for optimal engine selection.</p>
                    </div>

                    {/* Introduction */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}><FaCogs className={styles.titleIcon} /> The Extraction Challenge</h2>
                        <p className={styles.paragraph}>
                            While extracting text from well-formed PDFs is largely solved, real-world documents contain scanned images, complex tables, charts, and handwriting. Poor extraction directly degrades downstream systems like Retrieval-Augmented Generation (RAG) pipelines.
                        </p>
                        <p className={styles.paragraph}>
                            We built the <strong>DocExtract Framework</strong>—a parallel orchestration engine—to empirically compare these architectures and provide actionable guidance for developers.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* The Contenders */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}><FaServer className={styles.titleIcon} /> The 6 Engines Under Review</h2>
                        <div className={styles.enginesGrid}>
                            <div className={`${styles.engineCard} ${styles.paddle}`}>
                                <div className={styles.engineHeader}>
                                    <h4 className={styles.engineName}>PaddleOCR</h4>
                                </div>
                                <p className={styles.engineType}>Traditional Local OCR</p>
                                <p>Deep learning CNN/CRNN. Fast, private, but lacks layout understanding.</p>
                            </div>
                            <div className={`${styles.engineCard} ${styles.pymupdf}`}>
                                <div className={styles.engineHeader}>
                                    <h4 className={styles.engineName}>PyMuPDF4LLM</h4>
                                </div>
                                <p className={styles.engineType}>Heuristic Layout-Aware</p>
                                <p>Uses PDF metadata. Great for digital text, fails on scanned images.</p>
                            </div>
                            <div className={`${styles.engineCard} ${styles.llamaparse}`}>
                                <div className={styles.engineHeader}>
                                    <h4 className={styles.engineName}>LlamaParse</h4>
                                </div>
                                <p className={styles.engineType}>Cloud RAG Parser</p>
                                <p>Optimized for LLM-ready Markdown and structured table extraction.</p>
                            </div>
                            <div className={`${styles.engineCard} ${styles.gemini}`}>
                                <div className={styles.engineHeader}>
                                    <h4 className={styles.engineName}>Gemini Vision</h4>
                                </div>
                                <p className={styles.engineType}>Vision-Language Model</p>
                                <p>Multimodal reasoning. Excellent zero-shot handwriting recognition.</p>
                            </div>
                            <div className={`${styles.engineCard} ${styles.mineru}`}>
                                <div className={styles.engineHeader}>
                                    <h4 className={styles.engineName}>MinerU + Qwen</h4>
                                </div>
                                <p className={styles.engineType}>Hybrid Local AI</p>
                                <p>Structural analysis with VLM refinement. Dominates chart interpretation.</p>
                            </div>
                            <div className={`${styles.engineCard} ${styles.azuredi}`}>
                                <div className={styles.engineHeader}>
                                    <h4 className={styles.engineName}>Azure Doc Intel</h4>
                                </div>
                                <p className={styles.engineType}>Enterprise Cloud</p>
                                <p>Prebuilt models offer the highest accuracy for scanned and handwritten text.</p>
                            </div>
                        </div>
                    </div>

                    {/* Architecture */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}><FaProjectDiagram className={styles.titleIcon} /> System Architecture</h2>
                        <img src={ArchitectureDiagram} alt="DocExtract Parallel Extraction Architecture" className={styles.sectionImage} />
                        <p className={styles.imageCaption}>FastAPI backend dispatching requests to 6 engines in parallel via asyncio.gather().</p>
                    </div>

                    <hr className={styles.divider} />

                    {/* Methodology */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>Evaluation Dataset & Methodology</h2>
                        <div className={styles.categoriesGrid}>
                            <div className={styles.categoryCard}>
                                <span className={styles.categoryEmoji}>📄</span>
                                <div className={styles.categoryNum}>01</div>
                                <h4>Digital PDFs</h4>
                                <p>Selectable text layer</p>
                            </div>
                            <div className={styles.categoryCard}>
                                <span className={styles.categoryEmoji}>📸</span>
                                <div className={styles.categoryNum}>02</div>
                                <h4>Scanned Image</h4>
                                <p>No embedded text</p>
                            </div>
                            <div className={styles.categoryCard}>
                                <span className={styles.categoryEmoji}>📊</span>
                                <div className={styles.categoryNum}>03</div>
                                <h4>Tables</h4>
                                <p>Multi-column bordered</p>
                            </div>
                            <div className={styles.categoryCard}>
                                <span className={styles.categoryEmoji}>📈</span>
                                <div className={styles.categoryNum}>04</div>
                                <h4>Charts</h4>
                                <p>Bar, line, pie visual data</p>
                            </div>
                            <div className={styles.categoryCard}>
                                <span className={styles.categoryEmoji}>✍️</span>
                                <div className={styles.categoryNum}>05</div>
                                <h4>Handwriting</h4>
                                <p>Cursive & printed notes</p>
                            </div>
                        </div>

                        <div className={styles.scoringGrid}>
                            <div className={styles.scoringCard}>
                                <div className={styles.scoringNum}>%</div>
                                <div>
                                    <h4>Weighted Scoring</h4>
                                    <p>0.20 × 1-page + 0.30 × 5-page + 0.50 × 10-page (penalizes compounding errors).</p>
                                </div>
                            </div>
                            <div className={styles.scoringCard}>
                                <div className={styles.scoringNum}>★</div>
                                <div>
                                    <h4>Dimensions</h4>
                                    <p>Text completeness, structural fidelity, table quality, and semantic coherence (0-10 scale).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Benchmark Results */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>Benchmark Results</h2>
                        <img src={BenchmarkChart} alt="Composite Benchmark Scores Bar Chart" className={styles.sectionImage} />

                        <div className={styles.tableWrapper}>
                            <table className={styles.benchmarkTable}>
                                <thead>
                                    <tr>
                                        <th>Document Type</th>
                                        <th>PaddleOCR</th>
                                        <th>LlamaParse</th>
                                        <th>Gemini Vision</th>
                                        <th>PyMuPDF4LLM</th>
                                        <th>MinerU+Qwen</th>
                                        <th>Azure DI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Digital PDF</td>
                                        <td className={styles.scoreExcellent}>10.23</td>
                                        <td className={styles.scoreExcellent}>10.33</td>
                                        <td className={styles.scoreExcellent}>10.33</td>
                                        <td className={styles.scoreExcellent}>10.33</td>
                                        <td className={styles.scoreExcellent}>10.33</td>
                                        <td className={styles.scoreExcellent}>10.23</td>
                                    </tr>
                                    <tr>
                                        <td>Scanned Image</td>
                                        <td className={styles.scoreFailed}>3.33</td>
                                        <td className={styles.scorePartial}>4.90</td>
                                        <td className={styles.scoreGood}>8.17</td>
                                        <td className={styles.scoreGood}>8.60</td>
                                        <td className={styles.scoreFailed}>0.00</td>
                                        <td className={styles.scoreExcellent}>8.80</td>
                                    </tr>
                                    <tr>
                                        <td>Structured Tables</td>
                                        <td className={styles.scorePartial}>5.20</td>
                                        <td className={styles.scoreGood}>7.80</td>
                                        <td className={styles.scoreFailed}>4.45</td>
                                        <td className={styles.scoreGood}>6.20</td>
                                        <td className={styles.scorePartial}>5.70</td>
                                        <td className={styles.scorePartial}>5.80</td>
                                    </tr>
                                    <tr>
                                        <td>Charts</td>
                                        <td className={styles.scoreFailed}>3.10</td>
                                        <td className={styles.scoreGood}>8.02</td>
                                        <td className={styles.scorePartial}>5.77</td>
                                        <td className={styles.scoreFailed}>0.00</td>
                                        <td className={styles.scoreExcellent}>8.92</td>
                                        <td className={styles.scoreFailed}>3.40</td>
                                    </tr>
                                    <tr>
                                        <td>Handwriting</td>
                                        <td className={styles.scoreFailed}>2.50</td>
                                        <td className={styles.scoreFailed}>3.13</td>
                                        <td className={styles.scoreGood}>8.40</td>
                                        <td className={styles.scorePartial}>5.13</td>
                                        <td className={styles.scoreGood}>7.35</td>
                                        <td className={styles.scoreGood}>8.85</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Champions */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}><FaCheckCircle className={styles.titleIcon} /> Category Champions</h2>
                        <div className={styles.championsGrid}>
                            <div className={styles.championCard}>
                                <div className={styles.championScore}>10.33</div>
                                <div className={styles.championCategory}>Digital Text</div>
                                <div className={styles.championEngine}>All Engines</div>
                            </div>
                            <div className={styles.championCard}>
                                <div className={styles.championScore}>8.80</div>
                                <div className={styles.championCategory}>Scanned Docs</div>
                                <div className={styles.championEngine}>Azure DI</div>
                            </div>
                            <div className={styles.championCard}>
                                <div className={styles.championScore}>7.80</div>
                                <div className={styles.championCategory}>Tables</div>
                                <div className={styles.championEngine}>LlamaParse</div>
                            </div>
                            <div className={styles.championCard}>
                                <div className={styles.championScore}>8.92</div>
                                <div className={styles.championCategory}>Charts</div>
                                <div className={styles.championEngine}>MinerU + Qwen</div>
                            </div>
                            <div className={styles.championCard}>
                                <div className={styles.championScore}>8.85</div>
                                <div className={styles.championCategory}>Handwriting</div>
                                <div className={styles.championEngine}>Azure DI</div>
                            </div>
                        </div>
                        <div className={styles.insightBox}>
                            <FaLightbulb className={styles.insightIcon} />
                            <div>
                                <strong>Key Insight</strong>
                                <p>No single engine dominates all categories. Document type is the primary determinant of optimal engine selection.</p>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Decision Guide */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitleCentered}>Engine Selection Guide</h2>
                        <img src={SelectionGuide} alt="Engine Selection Decision Flowchart" className={styles.sectionImage} />

                        <div className={styles.recommendationsList}>
                            <div className={`${styles.recommendationItem} ${styles.pymupdf}`}>
                                <div className={styles.recommendationEngine}>PyMuPDF4LLM</div>
                                <div className={styles.recommendationContent}>
                                    <h4>High-Volume Digital PDFs</h4>
                                    <p>Fastest extraction at zero API cost. Reconstructs layout from PDF metadata perfectly.</p>
                                </div>
                            </div>
                            <div className={`${styles.recommendationItem} ${styles.llamaparse}`}>
                                <div className={styles.recommendationEngine}>LlamaParse</div>
                                <div className={styles.recommendationContent}>
                                    <h4>Complex Tables for RAG</h4>
                                    <p>Optimized specifically for structured Markdown output, preserving row/col alignment.</p>
                                </div>
                            </div>
                            <div className={`${styles.recommendationItem} ${styles.mineru}`}>
                                <div className={styles.recommendationEngine}>MinerU + Qwen</div>
                                <div className={styles.recommendationContent}>
                                    <h4>Charts & Visual Data</h4>
                                    <p>Two-stage pipeline uniquely capable of local visual data interpretation.</p>
                                </div>
                            </div>
                            <div className={`${styles.recommendationItem} ${styles.azure}`}>
                                <div className={styles.recommendationEngine}>Azure DI</div>
                                <div className={styles.recommendationContent}>
                                    <h4>Enterprise Intake (Scans/Handwriting)</h4>
                                    <p>Best OCR infrastructure with automatic fallback for cursive and printed handwritten notes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.decisionGrid}>
                            <div className={`${styles.decisionCard} ${styles.pros}`}>
                                <h4>Privacy vs. Performance</h4>
                                <p>Local models (PaddleOCR, PyMuPDF4LLM, MinerU) are viable for sensitive PII/legal documents without external network calls.</p>
                            </div>
                            <div className={`${styles.decisionCard} ${styles.cons}`}>
                                <h4>Cost-Benefit</h4>
                                <p>Cloud services incur API costs but solve complex edge cases. MinerU+Qwen offers a compelling zero-cost alternative for charts if you can manage deployment complexity.</p>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Conclusion */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}><FaShieldAlt className={styles.titleIcon} /> Conclusion</h2>
                        <p className={styles.paragraph}>
                            This study proves that the assumption of a "one-size-fits-all" extraction tool is flawed. While cloud APIs like Azure DI and LlamaParse offer high fidelity for unstructured or heavily tabular data, local models like PyMuPDF4LLM and MinerU combined with VLMs provide competitive, cost-effective, and privacy-preserving alternatives for specific document types.
                        </p>

                        <div className={styles.conclusionHighlight}>
                            <h3>Future Work</h3>
                            <ul className={styles.decisionList}>
                                <li>Automated document-type classification for intelligent engine routing before extraction.</li>
                                <li>Benchmarking next-gen Gemini 2.5 Pro capabilities on charts/tables.</li>
                                <li>Quantitative cost-per-page scalability testing under concurrent loads.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className={styles.tags}>
                        <span className={styles.tag}>#DocumentIntelligence</span>
                        <span className={styles.tag}>#OCR</span>
                        <span className={styles.tag}>#RAG</span>
                        <span className={styles.tag}>#VLM</span>
                        <span className={styles.tag}>#AzureDI</span>
                        <span className={styles.tag}>#LlamaParse</span>
                        <span className={styles.tag}>#PaddleOCR</span>
                        <span className={styles.tag}>#LLM</span>
                        <span className={styles.tag}>#DataExtraction</span>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DocExtractBlog;
