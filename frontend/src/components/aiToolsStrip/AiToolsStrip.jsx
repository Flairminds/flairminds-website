import MarqueeStrip from "./MarqueeStrip";
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
  { icon: <FaRobot />,      label: "Agentic AI" },
  { icon: <SiLangchain />,  label: "LangChain" },
  { icon: <GiBrain />,      label: "LangGraph" },
  { icon: <SiOpenai />,     label: "LLMs" },
  { icon: <SiPython />,     label: "RAG Pipelines" },
  { icon: <SiReact />,      label: "n8n Workflows" },
  { icon: <SiDocker />,     label: "MLOps" },
  { icon: <TbBrandAws />,   label: "AWS / Azure / GCP" },
  { icon: <SiKubernetes />, label: "Kubernetes" },
  { icon: <SiTerraform />,  label: "Terraform" },
];

const AiToolsStrip = () => (
  <MarqueeStrip
    items={tools}
    badge="AI-Powered Solutioning"
    badgeLink="/services/ai-tech-stack"
    reverse={false}
    accentColor="#b9ed5e"
  />
);

export default AiToolsStrip;
