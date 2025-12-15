import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import styles from "./IntroSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setDemoLink, toggleDemoModal } from "../../../redux/slices/visitorDetailsModalSlice";
import DemoModal from '../../../components/demoModal/DemoModal';

const IntroSection = () => {
  const dispatch = useDispatch();
  const { demoModalOpen } = useSelector(state => state.visitorDetailsModal);
  return (
    <section className={styles.section}>
      {/* Background layers */}
      <div className={styles.bgDark} />
      <div className={styles.primaryGlow} />
      <div className={styles.accentGlow} />

      {/* Grid Overlay */}
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.badge}
          >
            <Shield className={styles.badgeIcon} />
            <span className={styles.badgeText}>
              Enterprise Risk Intelligence Platform
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className={styles.heading}>
            Vendor Risk, <span className={styles.gradientText}>Reimagined!</span>
          </h1>

          {/* Subheading */}
          <p className={styles.subTitle}>The Operating System for Third-Party Trust</p>

          <p className={styles.description}>
            Stop chasing spreadsheets and start automating compliance. Unify onboarding,
            continuous assessment, and audit trails into a single source of truth.
          </p>

          {/* Buttons */}
          <div className={styles.buttonRow}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.primaryButton}
              onClick={()=>{ dispatch(setDemoLink({ demoLink: 'https://res.cloudinary.com/dxvmidcow/video/upload/v1765790121/TPVRA.mp4' })); dispatch(toggleDemoModal()); }}
            >
              View Demo
              <ArrowRight className={styles.primaryButtonIcon} />
            </motion.button>

            {/* <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.secondaryButton}
            >
              Explore Platform
            </motion.button> */}
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.statsGrid}
        >
          {[
            { value: "50%", label: "Faster Assessments" },
            { value: "100%", label: "Audit Ready" },
            { value: "100+", label: "Enterprise Clients" },
            { value: "24/7", label: "Risk Monitoring" },
          ].map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      {demoModalOpen && <DemoModal />}
    </section>
  );
};

export default IntroSection;
