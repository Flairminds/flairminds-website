import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './EntDataTransformation.module.css';

Chart.register(...registerables);

const EntDataTransformation = () => {
  const dataSourceChartRef = useRef(null);
  const timelineChartRef = useRef(null);
  const dataSourceChartInstance = useRef(null);
  const timelineChartInstance = useRef(null);

  const brilliantBluesPalette = {
    darkBlue: '#1c3a6b',
    midBlue: '#4771b2',
    lightBlue: '#8b9dc3',
    teal: '#5aa4ae',
    grey: '#dfe3ee'
  };

  const wrapLabel = (str, maxWidth) => {
    const words = str.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      if ((currentLine + " " + words[i]).length > maxWidth) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine += " " + words[i];
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const tooltipTitleCallback = {
    plugins: {
      tooltip: {
        callbacks: {
          title: function(tooltipItems) {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
              return label.join(' ');
            } else {
              return label;
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    // Data Source Chart
    if (dataSourceChartRef.current) {
      const ctx = dataSourceChartRef.current.getContext('2d');
      
      if (dataSourceChartInstance.current) {
        dataSourceChartInstance.current.destroy();
      }

      dataSourceChartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Trade Capture Systems', 'Reference Data Services', 'Operational Repositories', 'Market Data Feeds'],
          datasets: [{
            label: 'Data Volume Contribution',
            data: [45, 25, 20, 10],
            backgroundColor: [
              brilliantBluesPalette.darkBlue,
              brilliantBluesPalette.midBlue,
              brilliantBluesPalette.teal,
              brilliantBluesPalette.lightBlue
            ],
            borderColor: '#ffffff',
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            tooltip: tooltipTitleCallback.plugins.tooltip
          }
        }
      });
    }

    // Timeline Chart
    if (timelineChartRef.current) {
      const ctx = timelineChartRef.current.getContext('2d');
      
      if (timelineChartInstance.current) {
        timelineChartInstance.current.destroy();
      }

      const timelineLabels = ['ETL Design & Development', 'Data Transformation Logic', 'Automation & Scheduling', 'UAT & Go-Live'];
      const wrappedTimelineLabels = timelineLabels.map(label => wrapLabel(label, 16));

      timelineChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: wrappedTimelineLabels,
          datasets: [{
            label: 'Weeks per Phase',
            data: [5, 4, 2, 1],
            backgroundColor: [
              brilliantBluesPalette.darkBlue,
              brilliantBluesPalette.midBlue,
              brilliantBluesPalette.teal,
              brilliantBluesPalette.lightBlue
            ],
            borderRadius: 4
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: tooltipTitleCallback.plugins.tooltip
          },
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Duration in Weeks'
              }
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (dataSourceChartInstance.current) {
        dataSourceChartInstance.current.destroy();
      }
      if (timelineChartInstance.current) {
        timelineChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Case Study: Enterprise Data Transformation</h1>
          <p className={styles.subtitle}>Empowering a Global Financial Leader with a Centralized Data Vault</p>
        </header>

        <section className={styles.challengeSection}>
          <div className={styles.challengeContent}>
            <h2 className={styles.sectionTitle}>The Challenge: Overcoming Data Silos</h2>
            <p className={styles.challengeText}>
              A global leader in investment management and services faced significant hurdles in consolidating vast and varied data streams. The lack of a centralized system led to data silos, inconsistencies, and inefficiencies, which increased operational risk and hindered the ability to derive timely business insights for reporting and regulatory compliance.
            </p>
          </div>
        </section>

        <section className={styles.solutionSection}>
          <h2 className={styles.sectionTitle}>The Solution: A Modern Data Vault Architecture</h2>
          <div className={styles.flowContainer}>
            <div className={`${styles.flowStep} ${styles.flowStepBlue}`}>
              <div className={styles.flowIcon}>📥</div>
              <h3 className={styles.flowStepTitle}>Multi-Source Ingestion</h3>
              <p className={styles.flowStepDescription}>ETL pipelines extract data from trading platforms, market feeds, and operational systems.</p>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={`${styles.flowStep} ${styles.flowStepGreen}`}>
              <div className={styles.flowIcon}>⚙️</div>
              <h3 className={styles.flowStepTitle}>Data Transformation</h3>
              <p className={styles.flowStepDescription}>Raw data is validated, cleansed, and loaded into the core Data Vault.</p>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={`${styles.flowStep} ${styles.flowStepPurple}`}>
              <div className={styles.flowIcon}>⭐</div>
              <h3 className={styles.flowStepTitle}>Fact-Dimensional Model</h3>
              <p className={styles.flowStepDescription}>Data is converted into a star schema for optimized reporting and analytics.</p>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={`${styles.flowStep} ${styles.flowStepYellow}`}>
              <div className={styles.flowIcon}>📊</div>
              <h3 className={styles.flowStepTitle}>Analytics & Reporting</h3>
              <p className={styles.flowStepDescription}>A single source of truth empowers BI, compliance, and data-driven decisions.</p>
            </div>
          </div>
        </section>

        <section className={styles.kpiSection}>
          <h2 className={styles.sectionTitle}>Key Performance Improvements</h2>
          <div className={styles.kpiGrid}>
            <div className={styles.kpiCard}>
              <p className={`${styles.kpiValue} ${styles.kpiValueBlue}`}>95%</p>
              <p className={styles.kpiLabel}>Reduction in Manual Data Reconciliation</p>
            </div>
            <div className={styles.kpiCard}>
              <p className={`${styles.kpiValue} ${styles.kpiValueTeal}`}>70%</p>
              <p className={styles.kpiLabel}>Faster Report Generation</p>
            </div>
            <div className={styles.kpiCard}>
              <p className={`${styles.kpiValue} ${styles.kpiValueLight}`}>100%</p>
              <p className={styles.kpiLabel}>Data Audibility for Compliance</p>
            </div>
            <div className={styles.kpiCard}>
              <p className={`${styles.kpiValue} ${styles.kpiValueDark}`}>40%</p>
              <p className={styles.kpiLabel}>Improvement in Data Quality</p>
            </div>
          </div>
        </section>

        <section className={styles.chartsSection}>
          <div className={styles.chartsGrid}>
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Data Source Consolidation</h3>
              <p className={styles.chartDescription}>The project successfully integrated data from previously siloed systems into a single, unified vault.</p>
              <div className={styles.chartContainer}>
                <canvas ref={dataSourceChartRef}></canvas>
              </div>
            </div>
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Project Timeline & Delivery</h3>
              <p className={styles.chartDescription}>An aggressive 3-month timeline was met through efficient, modular development and phased delivery.</p>
              <div className={styles.chartContainer}>
                <canvas ref={timelineChartRef}></canvas>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Core Business & Technical Benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={`${styles.benefitTitle} ${styles.benefitTitleBusiness}`}>Business Benefits</h3>
              <ul className={styles.benefitList}>
                <li><span className={styles.benefitHighlight}>Single Source of Truth:</span> Enables consistent, trustworthy information across all business units.</li>
                <li><span className={styles.benefitHighlight}>Faster Decision-Making:</span> Empowers users with timely access to clean, reliable datasets.</li>
                <li><span className={styles.benefitHighlight}>Improved Efficiency:</span> Reduces manual effort in data gathering, leading to faster reporting.</li>
                <li><span className={styles.benefitHighlight}>Strong Data Governance:</span> Embeds compliance and accountability with full data lineage.</li>
                <li><span className={styles.benefitHighlight}>Enhanced Collaboration:</span> Provides a shared data foundation for Finance, Risk, and Operations.</li>
              </ul>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={`${styles.benefitTitle} ${styles.benefitTitleTechnical}`}>Technical Benefits</h3>
              <ul className={styles.benefitList}>
                <li><span className={styles.benefitHighlight}>Scalable Architecture:</span> Supports growing data volume and variety without core redesign.</li>
                <li><span className={styles.benefitHighlight}>Modular ETL Framework:</span> Allows for reusable components and simplified future enhancements.</li>
                <li><span className={styles.benefitHighlight}>Improved Data Quality:</span> Ensures standardized, high-quality data through built-in validation.</li>
                <li><span className={styles.benefitHighlight}>Historical Analysis:</span> Maintains a full history of data changes for trend and risk modeling.</li>
                <li><span className={styles.benefitHighlight}>Reduced IT Overhead:</span> Streamlined pipelines lower operational costs and data duplication.</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p className={styles.footerText}>This infographic represents the successful implementation of a Data Vault solution for a leading global financial services firm.</p>
          <p className={styles.footerMeta}>Industry: Asset Management & Investment Banking | Vertical: Data Science / ETL | Technology: Data Vault / SQL</p>
        </footer>
      </div>
    </div>
  );
};

export default EntDataTransformation;