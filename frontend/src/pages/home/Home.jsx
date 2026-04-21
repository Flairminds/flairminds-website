import ServicesSection from "../../components/servicesSection/ServicesSection"
import ProjectsSection from "../../components/projectsSection/ProjectsSection"
import ClientsSection from "../../components/clientsSection/ClientsSection"
import ClientLogos from "../../components/clientLogos/ClientLogos"
import AboutUs from "../../components/aboutUs/AboutUs"
import HeroSection from "../../components/heroSlider/HeroSection"
import AiToolsStrip from "../../components/aiToolsStrip/AiToolsStrip"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AiToolsStrip />
            <div className="content-sections">
                <ProjectsSection />
                <ServicesSection />
                <AboutUs />
                <ClientsSection />
                <ClientLogos />
            </div>
        </div>
    )
}

export default Home