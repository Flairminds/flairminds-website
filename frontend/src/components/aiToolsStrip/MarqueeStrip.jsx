import styles from "./MarqueeStrip.module.css";
import { useNavigate } from "react-router-dom";

/**
 * Generic animated marquee strip.
 *
 * Props:
 *  - items:      Array<{ icon?: ReactNode, label: string }>
 *  - badge:      string  — left-side label text
 *  - badgeLink:  string  — router path for the badge
 *  - reverse:    bool   — scroll direction (default left→right, reverse right→left)
 *  - accentColor: string — CSS color for icons & dot (default #b9ed5e)
 */
const MarqueeStrip = ({
  items = [],
  badge = "",
  badgeLink = "/",
  reverse = false,
  accentColor = "#b9ed5e",
}) => {
  const navigate = useNavigate();
  const repeated = [...items, ...items]; // seamless loop

  return (
    <div
      className={styles.strip}
      style={{ "--accent": accentColor }}
    >
      {/* Badge label */}
      <div className={styles.badge}>
        <span className={styles.dot} />
        <span
          className={styles.badgeText}
          onClick={() => navigate(badgeLink)}
        >
          {badge}
        </span>
      </div>

      {/* Marquee */}
      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div
          className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ""}`}
        >
          {repeated.map((item, i) => (
            <div className={styles.pill} key={i}>
              {item.icon && (
                <span className={styles.pillIcon}>{item.icon}</span>
              )}
              <span className={styles.pillLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
