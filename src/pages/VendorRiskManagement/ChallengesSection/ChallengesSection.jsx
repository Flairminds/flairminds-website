import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, FileText, Mail, Eye, Settings, Handshake } from "lucide-react";
import styles from "./ChallengesSection.module.css";

const challenges = [
  { 
    icon: RefreshCw, 
    title: "Eliminate Onboarding Chaos", 
    desc: "Stop disjointed handoffs. Standardize intake across every team and accessor instantly.",
    detail: "Our automated workflow engine ensures consistent onboarding processes, reducing time-to-compliance by 60%."
  },
  { 
    icon: FileText, 
    title: "Unify Risk Intelligence", 
    desc: "Ditch fragmented questionnaires. Capture consistent, comparable risk data every time.",
    detail: "Centralized question repository with smart mapping ensures data integrity across all assessments."
  },
  { 
    icon: Mail, 
    title: "Kill the Email Loop", 
    desc: "Clarifications shouldn't get lost in inboxes. Centralize context directly within the assessment.",
    detail: "Built-in communication channels with full audit trails keep all stakeholders aligned."
  },
  { 
    icon: Eye, 
    title: "Total Audit Visibility", 
    desc: "No more black boxes. Gain instant, granular insight into every compliance decision.",
    detail: "Real-time dashboards and immutable logs provide complete transparency for regulators."
  },
  { 
    icon: Settings, 
    title: "Automate Governance", 
    desc: "Enforce policy without the police work. Standardize scoring and cycles automatically.",
    detail: "Rule-based automation ensures consistent policy enforcement without manual intervention."
  },
  { 
    icon: Handshake, 
    title: "Transparent Engagement", 
    desc: "Build trust with vendors through clear, governed engagement models.",
    detail: "Vendor portals provide clear expectations, timelines, and feedback mechanisms."
  },
];

const ChallengesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            Why Traditional Methods <span className={styles.gradientText}>Fail</span>
          </h2>
          <p className={styles.subtext}>
            Legacy approaches create friction, risk, and compliance gaps. Here's what we solve.
          </p>
        </motion.div>

        <div className={styles.layoutGrid}>
          
          {/* LEFT LIST */}
          <div className={styles.challengeList}>
            {challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              const isActive = activeIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`${styles.challengeItem} ${
                    isActive ? styles.activeItem : styles.inactiveItem
                  }`}
                >
                  <div className={styles.iconRow}>
                    <div className={`${styles.iconBox} ${isActive ? styles.iconActive : styles.iconInactive}`}>
                      <Icon className={styles.icon} />
                    </div>

                    <div className={styles.itemTextBlock}>
                      <h4 className={`${styles.itemTitle} ${isActive ? styles.itemTitleActive : styles.itemTitleInactive}`}>
                        {challenge.title}
                      </h4>

                      {!isActive && (
                        <p className={styles.itemDesc}>{challenge.desc}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT DETAIL PANEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.detailPanel}
            >
              <div className={styles.detailIconWrapper}>
                {(() => {
                  const Icon = challenges[activeIndex].icon;
                  return <Icon className={styles.detailIcon} />;
                })()}
              </div>

              <h3 className={styles.detailTitle}>{challenges[activeIndex].title}</h3>

              <p className={styles.detailDesc}>{challenges[activeIndex].desc}</p>

              <div className={styles.detailBox}>
                <p className={styles.detailText}>
                  {challenges[activeIndex].detail}
                </p>
              </div>

              <div className={styles.dotNav}>
                {challenges.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : styles.dotInactive}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
