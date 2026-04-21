import MarqueeStrip from "../aiToolsStrip/MarqueeStrip";
import { FaShieldHalved, FaFileContract, FaChartLine, FaBuildingColumns, FaMagnifyingGlassChart } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineAccountTree } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { HiOutlineDocumentSearch } from "react-icons/hi";

const caseStudies = [
  { icon: <FaShieldHalved />,           label: "SwiftIQ Guard – AML Screening" },
  { icon: <MdOutlineAccountTree />,      label: "AI MDM Platform" },
  { icon: <FaFileContract />,            label: "AI Automation for Deloitte" },
  { icon: <BiTestTube />,                label: "Enterprise Test Automation – 85% Faster" },
  { icon: <FaChartLine />,               label: "Enterprise Data Transformation" },
  { icon: <GiArtificialIntelligence />,  label: "AI PoC Delivery – 60% Faster" },
  { icon: <FaBuildingColumns />,         label: "Vendor Risk Assessment" },
  { icon: <HiOutlineDocumentSearch />,   label: "Document Search – 10× Retrieval" },
  { icon: <FaMagnifyingGlassChart />,    label: "Cloud Optimization & Migration" },
  { icon: <FaFileContract />,            label: "E-Sign Platform" },
];

// Scrolls right→left (reverse = false) → alternates with AiToolsStrip
const CaseStudiesStrip = () => (
  <MarqueeStrip
    items={caseStudies}
    badge="Case Studies"
    badgeLink="/case-study"
    reverse={true}
    accentColor="#60a5fa"
  />
);

export default CaseStudiesStrip;
