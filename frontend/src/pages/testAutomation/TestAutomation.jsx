import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import styles from './TestAutomation.module.css';
import { FaPython, FaCogs, FaBullseye, FaChartBar, FaCube, FaRocket, FaLock, FaCheckCircle, FaCamera, FaProjectDiagram, FaBolt, FaDollarSign, FaShippingFast, FaTools, FaFileAlt, FaWrench, FaChartLine, FaMicrosoft } from 'react-icons/fa';
import { SiPytest } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import Seo from '../../components/seo/Seo';

const TestAutomation = () => {
    useEffect(() => {
        // Test Coverage Chart
        const coverageCtx = document.getElementById('coverageChart');
        if (coverageCtx) {
            new Chart(coverageCtx, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                    datasets: [{
                        label: 'Test Coverage %',
                        data: [15, 35, 55, 72, 88, 100],
                        backgroundColor: 'rgba(10, 147, 150, 0.2)',
                        borderColor: '#0A9396',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function (value) {
                                    return value + '%';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#4B5563',
                                font: {
                                    weight: '600'
                                }
                            }
                        }
                    }
                }
            });
        }

        // Execution Time Comparison Chart
        const timeCtx = document.getElementById('timeChart');
        if (timeCtx) {
            new Chart(timeCtx, {
                type: 'bar',
                data: {
                    labels: ['Manual Testing', 'Automated Testing'],
                    datasets: [{
                        label: 'Time (hours)',
                        data: [120, 18],
                        backgroundColor: ['#EE9B00', '#0A9396'],
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }

        // Defect Detection Rate Chart
        const defectCtx = document.getElementById('defectChart');
        if (defectCtx) {
            new Chart(defectCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Automated Detection', 'Manual Testing Gaps'],
                    datasets: [{
                        label: 'Defect Detection',
                        data: [95, 5],
                        backgroundColor: ['#0A9396', '#E9D8A6'],
                        borderColor: ['#FFFFFF'],
                        borderWidth: 4,
                        hoverOffset: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#4B5563',
                                font: {
                                    weight: '600'
                                }
                            }
                        }
                    }
                }
            });
        }
    }, []);

    return (
        <div className={styles.container}>
            <Seo
                title="Enterprise Test Automation Case Study | FlairMinds"
                description="A fully automated UI regression suite for PLC programming, eliminating manual testing and delivering an 85% reduction in regression time with 100% release confidence."
                path="/case-study/test-automation"
            />
            <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <section id="hero" className={styles.hero}>
                    <h2 className={styles.heroTitle}>Enterprise Test Automation Framework</h2>
                    <p className={styles.heroSubtitle}>
                        A <span className="font-semibold text-[#0A9396]">fully automated UI regression suite</span> for <span className="font-semibold text-[#0A9396]">PLC programming </span>
                        - eliminating manual testing completely and delivering <span className="font-semibold text-[#EE9B00]">100% confidence</span> in core functionality with every release.
                    </p>
                </section>

                <section id="problem-solution" className={styles.problemSolution}>
                    <div className={styles.grid2Col}>
                        <div className={styles.kpiCard}>
                            <h3 className={styles.sectionTitle}>The Quality Assurance Challenge</h3>
                            <p className={styles.sectionSubtitle}>
                                Manual regression testing for Windows desktop applications is time-consuming, error-prone, and non-scalable.
                                Every release required extensive manual validation, delaying deployments and risking critical defects in production.
                                The team needed a robust, repeatable, and enterprise-grade automation solution.
                            </p>
                        </div>
                        <div className={`${styles.kpiCard} ${styles.kpiCardBlue}`}>
                            <div className={styles.kpiNumber}>85%</div>
                            <div className={styles.kpiLabel}>Reduction in Regression Testing Time</div>
                            <p className={styles.kpiDescription}>Achieved through enterprise-grade test automation and CI/CD integration.</p>
                        </div>
                    </div>
                </section>

                <section id="tech-stack" className={styles.techStack}>
                    <div className={styles.solutionHeader}>
                        <h3 className={styles.sectionTitle}>Industry-Standard Technology Stack</h3>
                        <p className={styles.sectionSubtitle}>
                            Built using professional-grade tools and frameworks adopted by Fortune 500 companies worldwide.
                        </p>
                    </div>
                    <div className={styles.techGrid}>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}><FaPython className={styles.iconPython} /></div>
                            <h4 className={styles.techTitle}>Python 3.13</h4>
                            <p className={styles.techDesc}>Industry standard for test automation</p>
                        </div>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}><FaCogs className={styles.iconCogs} /></div>
                            <h4 className={styles.techTitle}>pywinauto (UIA)</h4>
                            <p className={styles.techDesc}>Gold standard for Windows desktop automation</p>
                        </div>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}><SiPytest className={styles.iconPytest} /></div>
                            <h4 className={styles.techTitle}>pytest</h4>
                            <p className={styles.techDesc}>Most powerful and flexible testing framework</p>
                        </div>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}><FaMicrosoft className={styles.iconAzure} /></div>
                            <h4 className={styles.techTitle}>UI Automation API</h4>
                            <p className={styles.techDesc}>Microsoft's stable element identification</p>
                        </div>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}><FaChartBar className={styles.iconChart} /></div>
                            <h4 className={styles.techTitle}>pytest-html</h4>
                            <p className={styles.techDesc}>Professional HTML test reports</p>
                        </div>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}><FaCube className={styles.iconCube} /></div>
                            <h4 className={styles.techTitle}>Page Object Model</h4>
                            <p className={styles.techDesc}>Enterprise design pattern (Google, Microsoft)</p>
                        </div>
                    </div>
                </section>

                <section id="solution-flow" className={styles.solution}>
                    <div className={styles.solutionHeader}>
                        <h3 className={styles.sectionTitle}>Automated Test Execution Pipeline</h3>
                        <p className={styles.sectionSubtitle}>
                            Complete end-to-end automation with test isolation, smart dialog handling, and comprehensive reporting.
                        </p>
                    </div>
                    <div className={styles.flow}>
                        <div className={styles.flowStep}>Launch XMPS 2000</div>
                        <div className={styles.flowArrow}>→</div>
                        <div className={styles.flowStep}>Create Project</div>
                        <div className={styles.flowArrow}>→</div>
                        <div className={styles.flowStep}>Execute Actions</div>
                        <div className={styles.flowArrow}>→</div>
                        <div className={styles.flowStep}>Validate Results</div>
                        <div className={styles.flowArrow}>→</div>
                        <div className={styles.flowStep}>Generate Report</div>
                    </div>
                </section>

                <section id="charts" className={styles.chartsSection}>
                    <div className={styles.gridCard}>
                        <h3 className={styles.sectionTitle}>Test Coverage Growth</h3>
                        <p className={styles.sectionSubtitle}>Systematic expansion of automated test coverage over 6 weeks</p>
                        <div className={styles.chartContainer}>
                            <canvas id="coverageChart"></canvas>
                        </div>
                    </div>
                    <div className={styles.gridCard}>
                        <h3 className={styles.sectionTitle}>Execution Time: Manual vs Automated</h3>
                        <p className={styles.sectionSubtitle}>Dramatic reduction in regression testing time</p>
                        <div className={styles.chartContainer}>
                            <canvas id="timeChart"></canvas>
                        </div>
                    </div>
                    <div className={styles.gridCard}>
                        <h3 className={styles.sectionTitle}>Defect Detection Rate</h3>
                        <p className={styles.sectionSubtitle}>95% of defects caught by automated testing</p>
                        <div className={styles.chartContainer}>
                            <canvas id="defectChart"></canvas>
                        </div>
                    </div>
                </section>

                <section id="features" className={styles.features}>
                    <div className="text-center mb-10">
                        <h3 className={styles.sectionTitle}>Key Features & Architecture</h3>
                        <p className={styles.sectionSubtitle}>Enterprise-grade quality assurance infrastructure</p>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}><FaRocket className={styles.iconRocket} /></div>
                            <h4 className={styles.featureTitle}>100% Automated E2E Flow</h4>
                            <p className={styles.featureText}>
                                Launches XMPS 2000, creates projects, executes user-defined operations, and validates grid data—completely hands-free.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}><FaLock className={styles.iconLock} /></div>
                            <h4 className={styles.featureTitle}>Complete Test Isolation</h4>
                            <p className={styles.featureText}>
                                Every test starts with a fresh application instance. Zero data contamination, zero flaky tests—100% repeatable results.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}><GiArtificialIntelligence className={styles.iconAI} /></div>
                            <h4 className={styles.featureTitle}>Intelligent Dialog Handling</h4>
                            <p className={styles.featureText}>
                                Smart detection and handling of "Save Current Project?" dialogs—only acts when present, ensuring smooth execution.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}><FaCheckCircle className={styles.iconCheck} /></div>
                            <h4 className={styles.featureTitle}>Business Scenario Validation</h4>
                            <p className={styles.featureText}>
                                Validates critical flows: Add → Save → Verify (1 row), Add → Cancel → Verify (0 rows). Prevents data corruption.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}><FaCamera className={styles.iconCamera} /></div>
                            <h4 className={styles.featureTitle}>Screenshot on Failure</h4>
                            <p className={styles.featureText}>
                                Automatic full-screen capture embedded in HTML reports on any failure—instant debugging without log diving.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}><FaProjectDiagram className={styles.iconDiagram} /></div>
                            <h4 className={styles.featureTitle}>Page Object Model (POM)</h4>
                            <p className={styles.featureText}>
                                Industry best practice for maintainability. UI changes update once, all tests auto-adapt. Scales to 100+ scenarios.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="benefits" className={styles.benefits}>
                    <div className="text-center mb-10">
                        <h3 className={styles.sectionTitle}>Delivered Value & Outcomes</h3>
                        <p className={styles.sectionSubtitle}>Measurable impact across quality, speed, and cost efficiency</p>
                    </div>
                    <div className={styles.grid2Col}>
                        <div>
                            <h4 className={styles.cardTitle}>Business Impact</h4>
                            <ul className={styles.cardList}>
                                <li className={styles.cardListItem}>
                                    <span className={styles.cardListItemIcon}><FaBolt className={styles.iconBolt} /></span>
                                    <div className={styles.cardListItemText}><strong>85% Faster Testing:</strong> Regression suite completes in hours, not days.</div>
                                </li>
                                <li className={styles.cardListItem}>
                                    <span className={styles.cardListItemIcon}><FaBullseye className={styles.iconBullseye} /></span>
                                    <div className={styles.cardListItemText}><strong>Zero Manual Effort:</strong> Complete automation eliminates human error and frees QA for exploratory testing.</div>
                                </li>
                                <li className={styles.cardListItem}>
                                    <span className={styles.cardListItemIcon}><FaDollarSign className={styles.iconDollar} /></span>
                                    <div className={styles.cardListItemText}><strong>Cost Reduction:</strong> Significant savings on regression testing labor and faster time-to-market.</div>
                                </li>
                                <li className={styles.cardListItem}>
                                    <span className={styles.cardListItemIcon}><FaShippingFast className={styles.iconShip} /></span>
                                    <div className={styles.cardListItemText}><strong>Release Confidence:</strong> 100% confidence in core functionality before every production deployment.</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={styles.cardTitle}>Technical Excellence</h4>
                            <ul className={styles.cardList}>
                                <li className={styles.cardListItem}>
                                    <span className={styles.cardListItemIcon}><FaTools className={styles.iconTools} /></span>
                                    <div className={styles.cardListItemText}><strong>CI/CD Ready:</strong> Seamless integration with build pipelines for automated nightly regression.</div>
                                </li>
                                <li className={styles.cardListItem}>
                                    <span className={styles.cardListItemIcon}><FaFileAlt className={styles.iconFile} /></span>
                                    <div className={styles.cardListItemText}><strong>Beautiful Reports:</strong> Self-contained HTML reports with screenshots, shareable with stakeholders.</div>
                                </li>
                                <li className={styles.cardListItem}>
                                    <span className={styles.cardListItemIcon}><FaWrench className={styles.iconWrench} /></span>
                                    <div className={styles.cardListItemText}><strong>Highly Maintainable:</strong> Page Object Model ensures single point of change for UI updates.</div>
                                </li>
                                <li className={styles.cardListItem}>
                                    <span className={styles.cardListItemIcon}><FaChartLine className={styles.iconChartLine} /></span>
                                    <div className={styles.cardListItemText}><strong>Scalable Architecture:</strong> Framework designed to expand from 2 to 100+ test scenarios effortlessly.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="challenges" className={styles.challenges}>
                    <div className="text-center mb-6">
                        <h3 className={styles.sectionTitle}>Engineering Challenges Overcome</h3>
                        <p className={styles.sectionSubtitle}>Complex problems solved with expert QA engineering</p>
                    </div>
                    <div className={styles.challengeContainer}>
                        <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Windows Desktop Complexity:</strong> Mastered pywinauto and UIA for reliable WinForms automation.</div>
                        <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Dialog Unpredictability:</strong> Built conditional handling for async dialogs without breaking test flow.</div>
                        <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Test Data Management:</strong> Designed isolated test instances preventing data leakage between runs.</div>
                        <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Flaky Test Prevention:</strong> Implemented smart waits and retry logic for 100% stability.</div>
                        <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Maintainability at Scale:</strong> Architected POM framework supporting long-term test suite growth.</div>
                    </div>
                </section>

                <section id="conclusion" className={styles.conclusion}>
                    <div className={styles.conclusionCard}>
                        <h3 className={styles.conclusionTitle}>Quality Assurance Infrastructure</h3>
                        <p className={styles.conclusionText}>
                            This isn't just test automation—it's a <strong>quality assurance infrastructure</strong> built on
                            global best practices used by Fortune 500 companies. The framework delivers repeatable, reliable,
                            and rapid feedback on application quality, ready for CI/CD integration, nightly regression,
                            and pre-release validation. We've transformed quality assurance from a bottleneck into a competitive advantage.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TestAutomation;
