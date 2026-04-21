import MarqueeStrip from "../aiToolsStrip/MarqueeStrip";
import { FaMicrophone, FaServer, FaBalanceScale, FaRobot, FaBoxOpen } from "react-icons/fa";
import { FaGears, FaMoneyBillTrendUp, FaIndustry } from "react-icons/fa6";
import { MdManageSearch } from "react-icons/md";
import { GiScales } from "react-icons/gi";

const solutions = [
  { icon: <FaRobot />, label: "Agentic CI/CD – n8n" },
  { icon: <FaMicrophone />, label: "Intellivoice – 99% Accurate" },
  { icon: <FaServer />, label: "Infra Monitoring" },
  { icon: <FaMoneyBillTrendUp />, label: "Leverage Modelling" },
  { icon: <FaBalanceScale />, label: "Borrowing Base" },
  { icon: <FaIndustry />, label: "SCRAPECO" },
  { icon: <FaBoxOpen />, label: "Product Matching – 94% Accuracy" },
  { icon: <GiScales />, label: "Legal AI – 80% Time Saved" },
  { icon: <FaGears />, label: "TPVRA Risk Management" },
  { icon: <MdManageSearch />, label: "Document Search – 10× Faster" },
];

// Scrolls left→right (reverse = false) to alternate with CaseStudiesStrip
const SolutionsStrip = () => (
  <MarqueeStrip
    items={solutions}
    badge="Solutions"
    badgeLink="/store"
    reverse={false}
    accentColor="#f59e0b"
  />
);

export default SolutionsStrip;
