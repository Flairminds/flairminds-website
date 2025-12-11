import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import styles from "./Footer.module.css";

const features = [
  "End-to-End Governance",
  "Intelligent Risk Assessment",
  "Seamless Collaboration",
  "Data Integrity",
  "Full Audit Traceability",
  "Enterprise Control",
];

const Footer = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.topGradient} />
      <div className={styles.bottomGlow} />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.inner}
        >
          <h2 className={styles.heading}>
            Ready to Secure Your <span className={styles.gradientText}>Growth</span>?
          </h2>

          <p className={styles.subheading}>
            Join forward-thinking institutions using our platform to turn vendor risk management into a competitive advantage.
          </p>

          {/* Feature tags */}
          <div className={styles.featureWrap}>
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={styles.featureTag}
              >
                <CheckCircle className={styles.featureIcon} />
                <span className={styles.featureText}>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={styles.ctaButton}
          >
            Request a Demo
            <ArrowRight className={styles.ctaIcon} />
          </motion.button>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={styles.techStack}
          >
            <p className={styles.techText}>
              Technology Stack:{" "}
              <span className={styles.techItems}>
                React.js • Django • MySQL • Redis • AWS • Docker
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
