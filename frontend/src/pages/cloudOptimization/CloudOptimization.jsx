import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './CloudOptimization.module.css';
import Seo from '../../components/seo/Seo';

Chart.register(...registerables);

const CloudOptimization = () => {
  const costChartRef = useRef(null);
  const scalabilityChartRef = useRef(null);

  useEffect(() => {
    const energeticPalette = {
      red: '#FF6B6B',
      yellow: '#FFD166',
      green: '#06D6A0',
      blue: '#118AB2',
      dark: '#073B4C'
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

    // Cost Chart
    const costCtx = costChartRef.current.getContext('2d');
    const costChart = new Chart(costCtx, {
      type: 'bar',
      data: {
        labels: ['Before Optimization', 'After Optimization'],
        datasets: [{
          label: 'Monthly Cloud Spend',
          data: [100, 60],
          backgroundColor: [
            energeticPalette.red,
            energeticPalette.green
          ],
          borderRadius: 4,
          barPercentage: 0.5
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
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });

    // Scalability Chart
    const scalabilityCtx = scalabilityChartRef.current.getContext('2d');
    const scalabilityChart = new Chart(scalabilityCtx, {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4 (New Arch)'],
        datasets: [{
          label: 'Max Concurrent Users',
          data: [5000, 6500, 8000, 25000],
          fill: true,
          backgroundColor: 'rgba(17, 138, 178, 0.2)',
          borderColor: energeticPalette.blue,
          tension: 0.1
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
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                if (value >= 1000) {
                  return (value / 1000) + 'k';
                }
                return value;
              }
            }
          }
        }
      }
    });

    // Cleanup function
    return () => {
      costChart.destroy();
      scalabilityChart.destroy();
    };
  }, []);

  return (
    <div className={styles.body}>
      <Seo
        title="Cloud Optimization Case Study | FlairMinds"
        description="A rapidly growing SaaS AI platform required a complete redesign and migration of its existing cloud architecture to support increasing customer demands."
        path="/case-study/cloud_optimization"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Integrations. By AI. For AI.</h1>
          <p className={styles.subtitle}>
            A DevOps case study on building a highly scalable, cost-effective cloud architecture for SaaS AI Platform.
          </p>
        </header>

        <section className={styles.businessNeedSection}>
          <div className={styles.businessNeedContent}>
            <h2 className={styles.sectionTitle}>The Business Need: An Architecture for Hyperscale</h2>
            <p className={styles.businessNeedText}>
              A rapidly growing SaaS AI platform required a complete redesign and migration of its existing cloud architecture. The goal was to build a robust, secure, and highly scalable foundation to support increasing customer demands and a fast-paced development cycle, while simultaneously controlling operational costs.
            </p>
          </div>
        </section>

        <section className={styles.strategySection}>
          <h2 className={styles.strategySectionTitle}>A Multi-Pronged Optimization Strategy</h2>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>💰</div>
              <h3 className={styles.solutionTitle} style={{color: '#118AB2'}}>Cloud Cost Optimization</h3>
              <p className={styles.solutionDescription}>Analyzed and optimized Kubernetes and AWS resource utilization to eliminate waste.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>📏</div>
              <h3 className={styles.solutionTitle} style={{color: '#06D6A0'}}>VM Right-Sizing</h3>
              <p className={styles.solutionDescription}>Matched virtual machine instances precisely to workload demands, preventing over-provisioning.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>⚙️</div>
              <h3 className={styles.solutionTitle} style={{color: '#FFD166'}}>Workload-Based Infra</h3>
              <p className={styles.solutionDescription}>Engineered the infrastructure to dynamically scale based on real-time application workloads.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🚀</div>
              <h3 className={styles.solutionTitle} style={{color: '#FF6B6B'}}>Helm Deployment Upgrades</h3>
              <p className={styles.solutionDescription}>Streamlined and upgraded Helm charts to improve deployment speed and reliability for business logic.</p>
            </div>
          </div>
        </section>
        
        <section className={styles.impactSection}>
          <h2 className={styles.impactTitle}>The Impact: Measurable Results</h2>
          <div className={styles.chartGrid}>
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Infrastructure Cost Reduction</h3>
              <p className={styles.chartDescription}>Strategic optimization led to significant savings in monthly cloud spend.</p>
              <div className={styles.chartContainer}>
                <canvas ref={costChartRef}></canvas>
              </div>
            </div>
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Enhanced Scalability & Performance</h3>
              <p className={styles.chartDescription}>The new architecture supports massive horizontal scaling to meet user demand.</p>
              <div className={styles.chartContainer}>
                <canvas ref={scalabilityChartRef}></canvas>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Key Benefits Delivered</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle} style={{color: '#118AB2'}}>Technical Benefits</h3>
              <ul className={styles.benefitList}>
                <li><span className={styles.benefitLabel}>Streamlined Architecture:</span> A clean, consistent structure across all products and environments.</li>
                <li><span className={styles.benefitLabel}>Improved CI/CD Pipelines:</span> Faster, more reliable deployments via upgraded Helm charts.</li>
                <li><span className={styles.benefitLabel}>Dynamic Scaling:</span> Infrastructure that automatically adapts to performance needs.</li>
              </ul>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle} style={{color: '#06D6A0'}}>Business Benefits</h3>
              <ul className={styles.benefitList}>
                <li><span className={styles.benefitLabel}>Highly Scalable Product Base:</span> A future-proof foundation ready for exponential user growth.</li>
                <li><span className={styles.benefitLabel}>Enhanced Security Posture:</span> A robust and secure architecture protecting the core product.</li>
                <li><span className={styles.benefitLabel}>Reduced Operational Costs:</span> Significant savings on cloud infrastructure spend, improving profitability.</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <h3 className={styles.footerTitle}>Core Technologies</h3>
          <div className={styles.techList}>
            <span>AWS (Amazon Web Services)</span>
            <span className={styles.separator}>|</span>
            <span>Kubernetes</span>
            <span className={styles.separator}>|</span>
            <span>Helm</span>
          </div>
          <p className={styles.footerSubtitle}>Flairminds Software: Expert DevOps and Cloud Solutions for the AI/ML industry.</p>
        </footer>
      </div>
    </div>
  );
};

export default CloudOptimization;