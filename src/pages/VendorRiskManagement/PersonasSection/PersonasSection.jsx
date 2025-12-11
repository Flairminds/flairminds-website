import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCog, Users, ClipboardCheck, Building2 } from "lucide-react";
import styles from "./PersonasSection.module.css";

const personas = [
  {
    id: "admin",
    icon: UserCog,
    label: "Admin",
    title: "Command & Control",
    color: "primary",
    features: [
      "Centralized lifecycle orchestration",
      "Global question mapping controls",
      "Real-time payment & alert oversight",
      "User permission management",
    ],
  },
  {
    id: "accessor",
    icon: Users,
    label: "Accessor",
    title: "Precision Risk Ops",
    color: "accent",
    features: [
      "Standardized, data-driven scoring",
      "360° Portfolio risk visibility",
      "Accelerated clarification loops",
      "Custom assessment workflows",
    ],
  },
  {
    id: "auditor",
    icon: ClipboardCheck,
    label: "Auditor",
    title: "Instant Verification",
    color: "riskMedium",
    features: [
      "One-click comprehensive audit trails",
      "Immutable document history",
      "Zero-prep historical access",
      "Compliance report generation",
    ],
  },
  {
    id: "vendor",
    icon: Building2,
    label: "Vendor",
    title: "Frictionless Experience",
    color: "riskHigh",
    features: [
      "Transparent subscription governance",
      "Clear submission & feedback insights",
      "Milestone-based payment clarity",
      "Self-service portal access",
    ],
  },
];

const PersonasSection = () => {
  const [activePersona, setActivePersona] = useState(personas[0]);

  return (
    <section className={styles.section}>
      <div className={styles.darkOverlay} />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.headingBlock}
        >
          <h2 className={styles.heading}>
            Empowering Every <span className={styles.gradientText}>Stakeholder</span>
          </h2>
          <p className={styles.subtext}>
            Tailored experiences for every role in your risk management ecosystem.
          </p>
        </motion.div>

        {/* Persona tabs */}
        <div className={styles.tabRow}>
          {personas.map((persona) => {
            const Icon = persona.icon;
            const isActive = activePersona.id === persona.id;

            return (
              <motion.button
                key={persona.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePersona(persona)}
                className={`${styles.tabButton} ${isActive ? styles[`tabActive_${persona.color}`] : styles.tabInactive}`}
              >
                <Icon className={styles.tabIcon} />
                {persona.label}
              </motion.button>
            );
          })}
        </div>

        {/* Active persona content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePersona.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.personaWrapper}
          >
            <div className={styles.personaCard}>
              <div className={styles.personaHeader}>
                <div className={`${styles.personaIconBox} ${styles[`personaColor_${activePersona.color}`]}`}>
                  {(() => {
                    const Icon = activePersona.icon;
                    return <Icon className={`${styles.personaIcon} ${styles[`personaText_${activePersona.color}`]}`} />;
                  })()}
                </div>

                <div>
                  <span className={`${styles.personaLabel} ${styles[`personaText_${activePersona.color}`]}`}>
                    {activePersona.label}
                  </span>
                  <h3 className={styles.personaTitle}>{activePersona.title}</h3>
                </div>
              </div>

              <div className={styles.featureGrid}>
                {activePersona.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={styles.featureItem}
                  >
                    <div className={`${styles.featureDot} ${styles[`personaBg_${activePersona.color}`]}`} />
                    <span className={styles.featureText}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PersonasSection;
