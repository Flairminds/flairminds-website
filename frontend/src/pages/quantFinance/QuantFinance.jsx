import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './QuantFinance.module.css';
import Seo from '../../components/seo/Seo';

const QuantFinance = () => {
  const curriculumChartRef = useRef(null);
  const userGrowthChartRef = useRef(null);
  const curriculumChartInstance = useRef(null);
  const userGrowthChartInstance = useRef(null);

  useEffect(() => {
    const coolPalette = {
      darkSlate: '#2D3142',
      slateGray: '#4F5D75',
      silver: '#BFC0C0',
      mandarin: '#EF8354'
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

    // Curriculum Chart
    if (curriculumChartRef.current) {
      const curriculumCtx = curriculumChartRef.current.getContext('2d');
      curriculumChartInstance.current = new Chart(curriculumCtx, {
        type: 'doughnut',
        data: {
          labels: ['Quantitative Modeling', 'Algorithmic Trading', 'Data Science & ML', 'Interview Prep'],
          datasets: [{
            label: 'Curriculum Focus',
            data: [35, 30, 20, 15],
            backgroundColor: [
              coolPalette.darkSlate,
              coolPalette.slateGray,
              coolPalette.mandarin,
              coolPalette.silver
            ],
            borderColor: '#ffffff',
            borderWidth: 4
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

    // User Growth Chart
    if (userGrowthChartRef.current) {
      const userGrowthCtx = userGrowthChartRef.current.getContext('2d');
      userGrowthChartInstance.current = new Chart(userGrowthCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Active Users',
            data: [150, 400, 1100, 2500, 4200, 5150],
            fill: true,
            backgroundColor: 'rgba(239, 131, 84, 0.2)',
            borderColor: coolPalette.mandarin,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: tooltipTitleCallback.plugins.tooltip
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (curriculumChartInstance.current) {
        curriculumChartInstance.current.destroy();
      }
      if (userGrowthChartInstance.current) {
        userGrowthChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Seo
        title="Quantfinance Preparation Platform Case Study | FlairMinds"
        description="A specialized resource for mastering complex quantitative finance topics and succeeding in rigorous interviews, built to lead quant interview preparation."
        path="/case-study/quant_finance"
      />
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>
            QuantfinancePrep: Engineering Career Success
          </h1>
          <p className={styles.subtitle}>
            A case study on building a premier learning platform for quantitative finance professionals.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.maxWidthCenter}>
            <h2 className={styles.sectionTitle}>
              The Business Need: A Launchpad for Elite Careers
            </h2>
            <p className={styles.description}>
              The quantitative finance industry offers highly rewarding but fiercely competitive careers. 
              Aspiring students and mid-career professionals alike require a specialized, comprehensive 
              learning resource to master complex topics and excel in rigorous interviews. The client 
              needed a platform to bridge this gap and become the go-to destination for quant interview preparation.
            </p>
          </div>
        </section>

        <section className={styles.solutionSection}>
          <h2 className={styles.sectionTitleCenter}>
            The Solution: An Integrated Learning Ecosystem
          </h2>
          <div className={styles.gridTwoCol}>
            <div>
              <h3 className={styles.subsectionTitle}>Comprehensive Curriculum</h3>
              <p className={styles.subsectionDescription}>
                A curriculum was developed covering the full spectrum of quant finance, from foundational 
                theories to advanced, practical applications, ensuring users are prepared for any interview scenario.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>●</span>Quantitative Modeling
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>●</span>Algorithmic Trading Strategies
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>●</span>Data Science & Machine Learning
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>●</span>Advanced Interview Preparation
                </li>
              </ul>
            </div>
            <div className={styles.chartContainer}>
              <canvas ref={curriculumChartRef}></canvas>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitleCenter}>
            Overcoming Technical Debt: A Codebase Transformation
          </h2>
          <p className={styles.transformationDescription}>
            A key challenge was inheriting a legacy codebase with no documentation. Flairminds undertook 
            a complete refactoring to build a scalable, maintainable foundation for future growth.
          </p>
          <div className={styles.comparisonContainer}>
            <div className={styles.beforeCard}>
              <h3 className={styles.beforeTitle}>Before: Monolithic & Brittle</h3>
              <div className={styles.codeBlock}>
                &lt;div class="tangled-mess"&gt;<br />
                &nbsp;&nbsp;&lt;!-- Unstructured code --&gt;<br />
                &nbsp;&nbsp;&lt;script&gt;...logic...&lt;/script&gt;<br />
                &nbsp;&nbsp;&lt;!-- No separation --&gt;<br />
                &lt;/div&gt;
              </div>
              <ul className={styles.beforeList}>
                <li>Difficult to update</li>
                <li>Prone to bugs</li>
                <li>Poor scalability</li>
              </ul>
            </div>
            <div className={styles.afterCard}>
              <h3 className={styles.afterTitle}>After: Modular & Scalable</h3>
              <div className={styles.codeBlock}>
                &lt;Component.Provider&gt;<br />
                &nbsp;&nbsp;&lt;Header /&gt;<br />
                &nbsp;&nbsp;&lt;Content /&gt;<br />
                &nbsp;&nbsp;&lt;Footer /&gt;<br />
                &lt;/Component.Provider&gt;
              </div>
              <ul className={styles.afterList}>
                <li>Easy to maintain</li>
                <li>Rapid feature development</li>
                <li>Built for scale</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitleCenter}>Platform Impact & User Success</h2>
          <div className={styles.kpiGrid}>
            <div className={styles.kpiCard}>
              <p className={styles.kpiValue}>5k+</p>
              <p className={styles.kpiLabel}>Active Users in 6 Months</p>
            </div>
            <div className={styles.kpiCard}>
              <p className={styles.kpiValue}>85%</p>
              <p className={styles.kpiLabel}>Users Receiving Interview Offers</p>
            </div>
            <div className={styles.kpiCard}>
              <p className={styles.kpiValue}>92%</p>
              <p className={styles.kpiLabel}>Course Completion Rate</p>
            </div>
          </div>
          <div className={styles.growthSection}>
            <h3 className={styles.growthTitle}>User Acquisition Growth</h3>
            <p className={styles.growthDescription}>
              The platform demonstrated strong market fit with rapid, organic user growth post-launch.
            </p>
            <div className={styles.growthChartContainer}>
              <canvas ref={userGrowthChartRef}></canvas>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <h3 className={styles.footerTitle}>Technology Stack</h3>
          <div className={styles.techStack}>
            <span>React.js</span>
            <span className={styles.separator}>|</span>
            <span>Django</span>
            <span className={styles.separator}>|</span>
            <span>PostgreSQL</span>
          </div>
          <p className={styles.footerText}>
            Flairminds Software: Building robust, scalable solutions for the FinTech and EdTech sectors.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default QuantFinance;