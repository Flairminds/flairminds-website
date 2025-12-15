import IntroSection from "./IntroSection/IntroSection";
import ChallengesSection from "./ChallengesSection/ChallengesSection";
import CapabilitiesSection from "./Capabilities/CapabilitiesSection";
import PersonasSection from "./PersonasSection/PersonasSection";
import OutcomesSection from "./OutcomesSection/OutcomesSection";
import Footer from "./Footer/Footer";

const VendorRiskAssessment = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
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
