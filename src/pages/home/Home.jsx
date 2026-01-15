import ServicesSection from "../../components/servicesSection/ServicesSection"
import ProjectsSection from "../../components/projectsSection/ProjectsSection"
import ClientsSection from "../../components/clientsSection/ClientsSection"
import ClientLogos from "../../components/clientLogos/ClientLogos"
import AboutUs from "../../components/aboutUs/AboutUs"
import HeroSlider from "../../components/heroSlider/HeroSlider"

const Home = () => {

    return (
        <>
            <HeroSlider />
            <div>
                <ServicesSection />
                <ProjectsSection />
                <AboutUs />
                <ClientsSection />
                <ClientLogos />
            </div>
        </>
    )
}

export default Home