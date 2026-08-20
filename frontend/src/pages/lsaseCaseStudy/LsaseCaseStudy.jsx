import HeroSection from './HeroSection/HeroSection';
import ProblemSection from './ProblemSection/ProblemSection';
import SolutionSection from './SolutionSection/SolutionSection';
import ScoreSection from './ScoreSection/ScoreSection';
import DashboardSection from './DashboardSection/DashboardSection';
import PipelineSection from './PipelineSection/PipelineSection';
import TechStackSection from './TechStackSection/TechStackSection';
import TrustSection from './TrustSection/TrustSection';
import ImpactSection from './ImpactSection/ImpactSection';
import RoadmapSection from './RoadmapSection/RoadmapSection';
import CtaSection from './CtaSection/CtaSection';
import Seo from '../../components/seo/Seo';

const LsaseCaseStudy = () => {
    return (
        <main style={{ maxWidth: '100%', overflowX: 'hidden' }}>
            <Seo
                title="LSASE — Lead Intelligence for Trading & Brokerage Sales | FlairMinds"
                description="LSASE scores every converted lead on retention, liquidity risk, and trading activity, blends it into one explainable 1–1000 priority number, and puts it in front of your sales team automatically."
                path="/case-study/lsase-lead-scoring"
            />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <ScoreSection />
            <DashboardSection />
            <PipelineSection />
            <TechStackSection />
            <TrustSection />
            <ImpactSection />
            <RoadmapSection />
            <CtaSection />
        </main>
    );
};

export default LsaseCaseStudy;
