import IntroSection from "./IntroSection/IntroSection";
import ChallengesSection from "./ChallengesSection/ChallengesSection";
import CapabilitiesSection from "./Capabilities/CapabilitiesSection";
import PersonasSection from "./PersonasSection/PersonasSection";
import OutcomesSection from "./OutcomesSection/OutcomesSection";
import Footer from "./Footer/Footer";
import Seo from "../../components/seo/Seo";

const VendorRiskAssessment = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Seo
        title="Vendor Risk Assessment Case Study | FlairMinds"
        description="Fast, accurate, and data-driven evaluation of third-party vendors and tenants for modern banking, reducing underwriting time."
        path="/case-study/vendor_risk_assessment"
      />
      <IntroSection />
      <ChallengesSection />
      <CapabilitiesSection />
      <PersonasSection />
      <OutcomesSection />
      <Footer />
    </main>
  );
};

export default VendorRiskAssessment;
