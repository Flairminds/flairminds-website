import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Link2, BookOpen, Target, MessageSquare, DollarSign, BarChart3 } from "lucide-react";
import styles from "./CapabilitiesSection.module.css";

const capabilities = [
  { icon: CheckCircle, title: "Smart Gatekeeping", desc: "Automated workflows ensure only compliant vendors enter your ecosystem.", color: "primary" },
  { icon: Link2, title: "Lifecycle Management", desc: "Seamlessly manage engagements from onboarding to offboarding.", color: "accent" },
  { icon: BookOpen, title: "Intelligent Repository", desc: "A centralized 'Brain' for consistency.", color: "risk-high" },
  { icon: Target, title: "Dynamic Personalization", desc: "Smart mapping adapts questionnaires to vendor risk tiers.", color: "risk-medium" },
];

const underlineClass = {
  primary: styles.primaryUnderline,
  accent: styles.accentUnderline,
  "risk-high": styles["risk-highUnderline"],
  "risk-medium": styles["risk-mediumUnderline"],
};

const CapabilitiesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.accentCircle} />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.headingBlock}
        >
          <h2 className={styles.heading}>
            The Platform <span className={styles.gradientAccent}>Advantage</span>
          </h2>
          <p className={styles.subtext}>
            Purpose-built capabilities that transform how you manage third-party risk.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${styles.card} ${isHovered ? styles.cardHover : ""}`}
              >
                <div className={`${styles.cardOverlay} ${styles[cap.color]}`} />

                <div className={styles.cardInner}>
                  <div className={`${styles.iconBox} ${styles[cap.color]}`}>
                    <Icon className={styles.icon} />
                  </div>

                  <h3 className={styles.cardTitle}>{cap.title}</h3>
                  <p className={styles.cardDesc}>{cap.desc}</p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${styles.underline} ${underlineClass[cap.color]}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
