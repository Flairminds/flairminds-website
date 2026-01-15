import ServicesSection from "../../components/servicesSection/ServicesSection"
import ProjectsSection from "../../components/projectsSection/ProjectsSection"
import ClientsSection from "../../components/clientsSection/ClientsSection"
import ClientLogos from "../../components/clientLogos/ClientLogos"
import AboutUs from "../../components/aboutUs/AboutUs"
import HeroSection from "../../components/heroSlider/HeroSection"

const Home = () => {
    return (
        <div className="home-container">
            <HeroSection />
            <div className="content-sections">
                <AboutUs />
                <ServicesSection />
                <ProjectsSection />
                <ClientsSection />
                <ClientLogos />
            </div>
        </div>
    )
}

export default Home