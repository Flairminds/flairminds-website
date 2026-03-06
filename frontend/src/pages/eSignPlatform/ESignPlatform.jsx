import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './ESignPlatform.module.css';

Chart.register(...registerables);

const ESignPlatform = () => {
  const cycleTimeChartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const modernPalette = {
      dark: '#2A3D45',
      accent: '#C17C74',
      light: '#EAEAEA',
      background: '#F7F5F2'
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

    if (cycleTimeChartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = cycleTimeChartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Traditional Process', 'Everysign Process'],
          datasets: [{
            label: 'Time to Complete (Hours)',
            data: [72, 4],
            backgroundColor: [
              modernPalette.accent,
              modernPalette.dark
            ],
            borderColor: [
              modernPalette.accent,
              modernPalette.dark
            ],
            borderWidth: 1,
            borderRadius: 4,
            barPercentage: 0.6
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
                text: 'Average Cycle Time in Hours'
              }
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Everysign: The Future of Digital Agreements</h1>
          <p className={styles.subtitle}>A case study by Flairminds on building a next-generation e-signature platform.</p>
        </header>

        <section className={styles.businessNeedSection}>
          <div className={styles.businessNeedContent}>
            <h2 className={styles.sectionTitle}>The Business Need: A Digital Revolution in Document Signing</h2>
            <p className={styles.businessNeedText}>
              The client required a comprehensive e-signature platform to replace slow, manual paper-based workflows. The solution needed to be highly accessible, supporting both web and mobile devices, while offering robust security, real-time authentication, and the flexibility to handle complex, multi-party signing scenarios.
            </p>
          </div>
        </section>

        <section className={styles.ecosystemSection}>
          <h2 className={styles.sectionTitleCenter}>The Everysign Ecosystem</h2>
          <div className={styles.ecosystemGrid}>
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>🖥️</div>
              <h3 className={styles.ecosystemCardTitle}>Web Portal (Next.js 13)</h3>
              <p className={styles.ecosystemCardText}>A powerful hub for Admins and Managers to oversee users, manage document workflows, and track signing progress in real-time.</p>
            </div>
            <div className={styles.ecosystemCard}>
              <div className={styles.ecosystemIcon}>📱</div>
              <h3 className={styles.ecosystemCardTitle}>Mobile App (React Native)</h3>
              <p className={styles.ecosystemCardText}>Native iOS & Android apps with biometric login, document capture, and on-the-go signing capabilities for ultimate convenience.</p>
            </div>
          </div>
        </section>

        <section className={styles.challengesSection}>
          <h2 className={styles.sectionTitleCenter}>Solving Complex Technical Challenges</h2>
          <div className={styles.challengesGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>👤</div>
              <h3 className={styles.benefitTitle}>Multi-Level User Hierarchy</h3>
              <p className={styles.benefitText}>Implemented a comprehensive role-based access control system (Super Admin, Customer Admin, Doc Manager, Guest) with securely scoped access to organizations, projects, and documents.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>✍️</div>
              <h3 className={styles.benefitTitle}>Dynamic Multi-Signee Fields</h3>
              <p className={styles.benefitText}>Engineered a sophisticated system to handle dynamic fields in documents for multiple signees, ensuring accurate field placement, assignment, and data integrity throughout complex workflows.</p>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.benefitsGrid}>
            <div className={styles.chartSection}>
              <h3 className={styles.chartTitle}>Drastic Reduction in Document Cycle Time</h3>
              <p className={styles.chartSubtitle}>By digitizing the entire process, Everysign reduced document turnaround from days to mere hours.</p>
              <div className={styles.chartContainer}>
                <canvas ref={cycleTimeChartRef}></canvas>
              </div>
            </div>
            <div className={styles.benefitsContent}>
              <h2 className={styles.benefitsTitle}>Transformative Business Benefits</h2>
              <p className={styles.benefitsDescription}>
                The platform delivered immediate and significant value, revolutionizing how the client and their customers handle agreements.
              </p>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.checkmark}>✓</span>
                  <div>
                    <h4 className={styles.benefitItemTitle}>Accelerated Business Cycles</h4>
                    <p className={styles.benefitItemText}>Shareable links and instant mobile access drastically shortened document completion times.</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.checkmark}>✓</span>
                  <div>
                    <h4 className={styles.benefitItemTitle}>Enterprise-Ready Scalability</h4>
                    <p className={styles.benefitItemText}>The robust user hierarchy and management tools support complex, multi-organization deployments.</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.checkmark}>✓</span>
                  <div>
                    <h4 className={styles.benefitItemTitle}>Streamlined Complex Workflows</h4>
                    <p className={styles.benefitItemText}>Enabled sequential or parallel signing for multiple users on a single document, eliminating versioning chaos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitleCenter}>Core Platform Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔗</div>
              <h3 className={styles.benefitTitle}>Secure Guest Access</h3>
              <p className={styles.benefitText}>OTP-verified signing links for guests with anti-duplication logic.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📸</div>
              <h3 className={styles.benefitTitle}>Integrated Media Handling</h3>
              <p className={styles.benefitText}>Supports photo, video, and signature capture for biometric and video consent.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔐</div>
              <h3 className={styles.benefitTitle}>Biometric Authentication</h3>
              <p className={styles.benefitText}>Mobile app login secured with fingerprint or face recognition.</p>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <h3 className={styles.footerTitle}>Technology Stack</h3>
          <div className={styles.techStack}>
            <span>Next.js 13</span>
            <span className={styles.separator}>|</span>
            <span>React Native</span>
            <span className={styles.separator}>|</span>
            <span>AWS Lambda</span>
            <span className={styles.separator}>|</span>
            <span>Firebase</span>
            <span className={styles.separator}>|</span>
            <span>JavaScript</span>
          </div>
          <p className={styles.footerText}>Flairminds Software: Your Partner in Building Scalable, Enterprise-Grade Digital Platforms.</p>
        </footer>

      </div>
    </div>
  );
};

export default ESignPlatform;