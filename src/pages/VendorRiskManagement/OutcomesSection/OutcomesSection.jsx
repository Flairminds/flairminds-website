import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Zap, Shield, Briefcase } from "lucide-react";
import { Chart, registerables } from "chart.js";
import styles from "./OutcomesSection.module.css";

Chart.register(...registerables);

const outcomes = [
  { icon: TrendingUp, value: 100, suffix: "%", label: "Audit Readiness & Traceability" },
  { icon: Zap, value: 50, suffix: "%", label: "Faster Assessment Cycles" },
  { icon: Shield, value: 0, prefix: "Zero", label: "Compromise Regulatory Compliance" },
  { icon: Briefcase, value: 3, suffix: "x", label: "ROI on Vendor Spend" },
];

const AnimatedCounter = ({ value, prefix, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={styles.counter}>
      {prefix || ""}{prefix ? "" : count}{suffix || ""}
    </span>
  );
};

const OutcomesSection = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [activeSegment, setActiveSegment] = useState(null);

  const riskData = [
    { label: "Critical", value: 6, color: "hsl(0, 72%, 51%)" },
    { label: "High", value: 20, color: "hsl(38, 92%, 50%)" },
    { label: "Medium", value: 34, color: "hsl(160, 84%, 39%)" },
    { label: "Low", value: 25, color: "hsl(210, 100%, 55%)" },
    { label: "Very Low", value: 15, color: "hsl(186, 100%, 42%)" },
  ];

  useEffect(() => {
    if (!chartRef.current) return;
    if (chartInstance.current) chartInstance.current.destroy();

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: riskData.map(d => d.label),
        datasets: [
          {
            data: riskData.map(d => d.value),
            backgroundColor: riskData.map(d => d.color),
            borderWidth: 0,
            hoverOffset: 10,
          },
        ],
      },
      options: {
        cutout: "75%",
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "hsl(220, 20%, 10%)",
            titleColor: "hsl(220, 20%, 96%)",
            bodyColor: "hsl(220, 10%, 55%)",
            borderColor: "hsl(220, 15%, 18%)",
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
          },
        },
        onHover: (_, elements) => {
          setActiveSegment(elements.length > 0 ? elements[0].index : null);
        },
      },
    });

    return () => chartInstance.current?.destroy();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.leftGlow} />

      <div className={styles.container}>
        <div className={styles.layout}>
          
          {/* LEFT SIDE — OUTCOMES GRID */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>
              Measurable Business <span className={styles.gradientText}>Impact</span>
            </h2>

            <div className={styles.outcomeGrid}>
              {outcomes.map((outcome, idx) => {
                const Icon = outcome.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.outcomeItem}
                  >
                    <div className={styles.outcomeIconRow}>
                      <Icon className={styles.outcomeIcon} />
                    </div>

                    <AnimatedCounter value={outcome.value} prefix={outcome.prefix} suffix={outcome.suffix} />

                    <p className={styles.outcomeLabel}>{outcome.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE — CHART */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.chartCard}
          >
            <h3 className={styles.chartTitle}>Live Risk Pulse</h3>

            <div className={styles.chartWrapper}>
              <canvas ref={chartRef}></canvas>

              <div className={styles.chartCenter}>
                <div className={styles.chartCenterInner}>
                  <div className={styles.chartCenterValue}>
                    {activeSegment !== null ? riskData[activeSegment].value : "100"}
                  </div>
                  <div className={styles.chartCenterLabel}>
                    {activeSegment !== null ? riskData[activeSegment].label : "Total Vendors"}
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className={styles.legendWrapper}>
              {riskData.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setActiveSegment(idx)}
                  onMouseLeave={() => setActiveSegment(null)}
                  className={`${styles.legendItem} ${activeSegment === idx ? styles.legendItemActive : ""}`}
                >
                  <div
                    className={styles.legendDot}
                    style={{ backgroundColor: item.color }}
                  />
                  <span className={styles.legendLabel}>{item.label}</span>
                </motion.div>
              ))}
            </div>

            <p className={styles.chartFooter}>Real-time visualization of portfolio risk exposure</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
