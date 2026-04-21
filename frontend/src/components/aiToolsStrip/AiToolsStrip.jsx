import styles from "./AiToolsStrip.module.css";
import {
  SiLangchain,
  SiOpenai,
  SiPython,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";
import { TbBrandAws } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";

const tools = [
  { icon: <FaRobot />, label: "Agentic AI" },
  { icon: <SiLangchain />, label: "LangChain" },
  { icon: <GiBrain />, label: "LangGraph" },
  { icon: <SiOpenai />, label: "LLMs" },
  { icon: <SiPython />, label: "RAG Pipelines" },
  { icon: <SiReact />, label: "n8n Workflows" },
  { icon: <SiDocker />, label: "MLOps" },
  { icon: <TbBrandAws />, label: "AWS / Azure / GCP" },
  { icon: <SiKubernetes />, label: "Kubernetes" },
  { icon: <SiTerraform />, label: "Terraform" },
];

const AiToolsStrip = () => {
  // Duplicate for seamless infinite scroll
  const repeated = [...tools, ...tools];

  return (
    <div className={styles.strip}>
      <div className={styles.badge}>
        <span className={styles.dot} />
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/services/ai-tech-stack";
          }}
        >
          AI-Powered Solutioning
        </span>
      </div>

      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {repeated.map((tool, i) => (
            <div className={styles.pill} key={i}>
              <span className={styles.pillIcon}>{tool.icon}</span>
              <span className={styles.pillLabel}>{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiToolsStrip;
