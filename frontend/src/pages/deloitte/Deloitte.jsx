import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import styles from './Deloitte.module.css';

const Deloitte = () => {
  useEffect(() => {
    // Efficiency Chart
    const efficiencyCtx = document.getElementById('efficiencyChart');
    if (efficiencyCtx) {
      new Chart(efficiencyCtx, {
        type: 'doughnut',
        data: {
          labels: ['Time Saved by AI', 'Remaining Manual Effort'],
          datasets: [{
            label: 'Efficiency Gain',
            data: [70, 30],
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

    // Geography Chart
    const geographyCtx = document.getElementById('geographyChart');
    if (geographyCtx) {
      new Chart(geographyCtx, {
        type: 'bar',
        data: {
          labels: ['USA (PDF)', 'Canada (PDF)', 'Netherlands (HTML)'],
          datasets: [{
            label: 'Document Complexity Score',
            data: [85, 80, 95],
            backgroundColor: ['#0A9396', '#94D2BD', '#EE9B00'],
            borderRadius: 4
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
          }
        }
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>AI Automation Case Study</h1>
        </div>
      </header> */}

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <section id="hero" className={styles.hero}>
          <h2 className={styles.heroTitle}>Automating Tax Due Diligence</h2>
          <p className={styles.heroSubtitle}>
            An AI-powered solution to extract structured data from diverse commercial tax documents, enabling faster, more accurate financial due diligence for <span className="font-semibold text-[#0A9396]">US, Netherlands, and Canada</span>.
          </p>
        </section>

        <section id="problem-solution" className={styles.problemSolution}>
          <div className={styles.grid2Col}>
            <div className={styles.kpiCard}>
              <h3 className={styles.sectionTitle}>The Business Challenge</h3>
              <p className={styles.sectionSubtitle}>
                Manual review of complex tax filings from multiple jurisdictions is slow, costly, and error-prone. With high document volume and diversity, a scalable and accurate method was critical to streamline analysis and accelerate deal cycles.
              </p>
            </div>
            <div className={`${styles.kpiCard} ${styles.kpiCardBlue}`}>
              <div className={styles.kpiNumber}>70%</div>
              <div className={styles.kpiLabel}>Reduction in Document Processing Time</div>
              <p className={styles.kpiDescription}>Achieved through AI-powered automation, significantly improving overall efficiency.</p>
            </div>
          </div>
        </section>

        <section id="solution-flow" className={styles.solution}>
          <div className={styles.solutionHeader}>
            <h3 className={styles.sectionTitle}>Our Automated Solution Pipeline</h3>
            <p className={styles.sectionSubtitle}>
              We implemented a modular pipeline using Azure Document Intelligence to orchestrate the entire data extraction process from ingestion to final reporting.
            </p>
          </div>
          <div className={styles.flow}>
            <div className={styles.flowStep}>Ingest</div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStep}>Classify Documents</div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStep}>Extract Attributes</div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStep}>Normalize Data</div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStep}>Generate Report</div>
          </div>
        </section>

        <section id="charts" className={styles.chartsSection}>
          <div className={styles.gridCard}>
            <h3 className={styles.sectionTitle}>Processing Time: Manual vs. AI</h3>
            <p className={styles.sectionSubtitle}>The AI solution drastically cuts down on processing overhead, freeing up expert time for value-added analysis.</p>
            <div className={styles.chartContainer}>
              <canvas id="efficiencyChart"></canvas>
            </div>
          </div>
          <div className={styles.gridCard}>
            <h3 className={styles.sectionTitle}>Cross-Jurisdiction Capability</h3>
            <p className={styles.sectionSubtitle}>Our solution was trained to handle distinct document formats across three key geographies, including both PDF and HTML sources.</p>
            <div className={styles.chartContainer}>
              <canvas id="geographyChart"></canvas>
            </div>
          </div>
        </section>

        <section id="benefits" className={styles.benefits}>
          <div className="text-center mb-10">
            <h3 className={styles.sectionTitle}>Key Benefits & Outcomes</h3>
            <p className={styles.sectionSubtitle}>The project delivered significant value across technical and business domains.</p>
          </div>
          <div className={styles.grid2Col}>
            <div>
              <h4 className={styles.cardTitle}>Business Impact</h4>
              <ul className={styles.cardList}>
                <li className={styles.cardListItem}>
                  <span className={styles.cardListItemIcon}>⚡</span>
                  <div className={styles.cardListItemText}><strong>Increased Efficiency:</strong> Slashed document processing time by over 70%.</div>
                </li>
                <li className={styles.cardListItem}>
                  <span className={styles.cardListItemIcon}>🎯</span>
                  <div className={styles.cardListItemText}><strong>Improved Accuracy:</strong> Drastically reduced manual data entry errors.</div>
                </li>
                <li className={styles.cardListItem}>
                  <span className={styles.cardListItemIcon}>⏱️</span>
                  <div className={styles.cardListItemText}><strong>Faster Deal Cycles:</strong> Accelerated financial due diligence efforts.</div>
                </li>
                <li className={styles.cardListItem}>
                  <span className={styles.cardListItemIcon}>💰</span>
                  <div className={styles.cardListItemText}><strong>Cost Savings:</strong> Lowered operational costs tied to manual data review.</div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.cardTitle}>Technical Advantages</h4>
              <ul className={styles.cardList}>
                <li className={styles.cardListItem}>
                  <span className={styles.cardListItemIcon}>🔄</span>
                  <div className={styles.cardListItemText}><strong>Cross-Format:</strong> Natively handles both PDF and HTML document processing.</div>
                </li>
                <li className={styles.cardListItem}>
                  <span className={styles.cardListItemIcon}>🧠</span>
                  <div className={styles.cardListItemText}><strong>Custom ML Models:</strong> Fine-grained control over data extraction from varied templates.</div>
                </li>
                <li className={styles.cardListItem}>
                  <span className={styles.cardListItemIcon}>📈</span>
                  <div className={styles.cardListItemText}><strong>Scalability:</strong> Ingests hundreds of documents in batch mode with low latency.</div>
                </li>
                <li className={styles.cardListItem}>
                  <span className={styles.cardListItemIcon}>🧩</span>
                  <div className={styles.cardListItemText}><strong>Extensibility:</strong> Easily adaptable for new countries or document types.</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="challenges" className={styles.challenges}>
          <div className="text-center mb-6">
            <h3 className={styles.sectionTitle}>Challenges Overcome</h3>
            <p className={styles.sectionSubtitle}>Navigating complexity was key to the project's success.</p>
          </div>
          <div className={styles.challengeContainer}>
            <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Document Variability:</strong> Managed diverse layouts, formats, and noisy scans.</div>
            <div className={styles.challengeCard}><strong className={styles.challengeTitle}>HTML Parsing:</strong> Built custom scrapers for semi-structured Dutch documents.</div>
            <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Model Training:</strong> Iteratively refined high-accuracy ML models.</div>
            <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Data Normalization:</strong> Harmonized data from different tax terminologies.</div>
            <div className={styles.challengeCard}><strong className={styles.challengeTitle}>Language Nuances:</strong> Adapted models to domain-specific language.</div>
          </div>
        </section>
      </main>

      {/* <footer className={styles.footer}>
        <p>&copy; This case study represents a project engagement for the Global Tax M&A division.</p>
      </footer> */}
    </div>
  );
};

export default Deloitte;
