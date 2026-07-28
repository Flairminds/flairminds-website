import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './FableFintech.module.css';
import Seo from '../../components/seo/Seo';

Chart.register(...registerables);

const FableFintech = () => {
  const partnerGrowthChartRef = useRef(null);
  const chartInstanceRef = useRef(null);

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

    if (partnerGrowthChartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = partnerGrowthChartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Onboarded Partners', 'Planned Integrations'],
          datasets: [{
            label: 'Number of Partners',
            data: [25, 70],
            backgroundColor: [
              energeticPalette.blue,
              energeticPalette.green
            ],
            borderColor: [
              energeticPalette.blue,
              energeticPalette.green
            ],
            borderWidth: 1,
            borderRadius: 4
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
              title: {
                display: true,
                text: 'Count of Partners'
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
      <Seo
        title="Fable Fintech Case Study | FlairMinds"
        description="A seamless and secure way to handle high-value remittance transactions across international corridors, with standardized API integration for global banking partners."
        path="/case-study/fable_fintech"
      />
      <div className={styles.containerInner}>

        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Powering Global Remittance with AlfaNow</h1>
          <p className={styles.subtitle}>How Fable Fintech built a scalable API gateway for its financial partners.</p>
        </header>

        <section className={styles.businessNeedSection}>
          <div className={styles.businessNeedContent}>
            <h2 className={styles.sectionTitle}>The Business Need</h2>
            <p className={styles.businessNeedText}>
              Fable Fintech's AlfaNow platform required a seamless and secure way to handle high-value remittance transactions across numerous international corridors. The goal was to standardize API integration for a growing number of global banking partners, ensuring compliance, speed, and reliability to expand its worldwide financial reach.
            </p>
          </div>
        </section>

        <section className={styles.challengesSection}>
          <h2 className={styles.sectionTitleCenter}>Navigating Key Project Challenges</h2>
          <div className={styles.challengesGrid}>
            <div className={styles.challengeCard}>
              <div className={styles.challengeIcon}>🧩</div>
              <h3 className={styles.challengeTitleBlue}>Diverse API Specs</h3>
              <p className={styles.challengeText}>Each partner had unique API structures and security protocols requiring a flexible approach.</p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeIcon}>📜</div>
              <h3 className={styles.challengeTitleGreen}>Regulatory Compliance</h3>
              <p className={styles.challengeText}>Adapting to different financial regulations across multiple countries was critical.</p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeIcon}>📈</div>
              <h3 className={styles.challengeTitleYellow}>Scalability Constraints</h3>
              <p className={styles.challengeText}>Ensuring system performance would not degrade as the number of partners increased.</p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeIcon}>🧪</div>
              <h3 className={styles.challengeTitleRed}>Testing Complexities</h3>
              <p className={styles.challengeText}>Validating real-time transactions with diverse currencies and institutions.</p>
            </div>
          </div>
        </section>

        <section className={styles.integrationSection}>
          <h2 className={styles.sectionTitleCenter}>A Four-Step Integration Blueprint</h2>
          <div className={styles.flowContainer}>
            <div className={styles.flowStepBlue}>
              <div className={styles.flowIcon}>1️⃣</div>
              <h3 className={styles.flowTitle}>POC Validation</h3>
              <p className={styles.flowText}>Validate partner APIs using a Proof of Concept built with Java Spring Boot and JSP.</p>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStepGreen}>
              <div className={styles.flowIcon}>2️⃣</div>
              <h3 className={styles.flowTitle}>Component Development</h3>
              <p className={styles.flowText}>Develop reusable Java components for transactions, authentication, and compliance.</p>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStepYellow}>
              <div className={styles.flowIcon}>3️⃣</div>
              <h3 className={styles.flowTitle}>Cloud Deployment</h3>
              <p className={styles.flowText}>Deploy and test API integrations on AWS to ensure performance and scalability.</p>
            </div>
            <div className={styles.flowArrow}>→</div>
            <div className={styles.flowStepRed}>
              <div className={styles.flowIcon}>4️⃣</div>
              <h3 className={styles.flowTitle}>Live Integration</h3>
              <p className={styles.flowText}>Successfully onboard partners using the new, streamlined integration process.</p>
            </div>
          </div>
        </section>
        
        <section className={styles.growthSection}>
          <div className={styles.growthGrid}>
            <div className={styles.growthContent}>
              <h2 className={styles.growthTitle}>Rapid Growth & Future Scale</h2>
              <p className={styles.growthDescription}>
                The standardized integration framework has dramatically accelerated partner onboarding, laying the groundwork for exponential growth. The platform is now positioned to rapidly expand its global network.
              </p>
              <div className={styles.statsContainer}>
                <div className={styles.stat}>
                  <p className={styles.statNumber}>25</p>
                  <p className={styles.statLabel}>Partners Onboarded</p>
                </div>
                <div className={styles.stat}>
                  <p className={styles.statNumberGreen}>70+</p>
                  <p className={styles.statLabel}>Partners in Pipeline</p>
                </div>
              </div>
            </div>
            <div className={styles.chartSection}>
              <h3 className={styles.chartTitle}>Partner Onboarding Progress</h3>
              <p className={styles.chartSubtitle}>Visualizing the current success and the ambitious roadmap for future integrations.</p>
              <div className={styles.chartContainer}>
                <canvas ref={partnerGrowthChartRef}></canvas>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitleCenter}>Key Business & Technical Benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitleBlue}>Business Benefits</h3>
              <ul className={styles.benefitList}>
                <li>
                  <span className={styles.benefitBold}>Faster Partner Onboarding:</span> Streamlined process reduces integration time significantly.
                </li>
                <li>
                  <span className={styles.benefitBold}>Increased Revenue Streams:</span> Expanded global capabilities attract more clients and transactions.
                </li>
                <li>
                  <span className={styles.benefitBold}>Enhanced Customer Experience:</span> Secure, efficient, and reliable remittance services.
                </li>
                <li>
                  <span className={styles.benefitBold}>Regulatory Readiness:</span> Built-in compliance ensures trust and reduces legal and financial risks.
                </li>
              </ul>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitleGreen}>Technical Benefits</h3>
              <ul className={styles.benefitList}>
                <li>
                  <span className={styles.benefitBold}>Standardized API Integration:</span> A structured, reusable framework for consistent onboarding.
                </li>
                <li>
                  <span className={styles.benefitBold}>High Scalability:</span> AWS cloud deployment handles increasing transaction volumes with ease.
                </li>
                <li>
                  <span className={styles.benefitBold}>Robust Security:</span> Strong encryption and secure authentication mechanisms protect all data.
                </li>
                <li>
                  <span className={styles.benefitBold}>Optimized Performance:</span> Efficiently handles large-scale transactions with minimal latency.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p className={styles.footerText}>A successful API integration project for Fable Fintech, enhancing global remittance services.</p>
          <p className={styles.footerSubtext}>Industry: FinTech / Remittance | Technology: Java, Spring Boot, AWS</p>
        </footer>

      </div>
    </div>
  );
};

export default FableFintech;