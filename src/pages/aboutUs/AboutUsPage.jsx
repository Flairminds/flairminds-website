import styles from './AboutUsPage.module.css';
import visionIcon from '../../assets/vision_icon.png';
import missionIcon from '../../assets/mission_icon.png';
import valuesIcon from '../../assets/values_icon.png';
import leadersIcon from '../../assets/leaders_icon.png';
import visionariesIcon from '../../assets/visionaries_icon.png';
import partnersIcon from '../../assets/partners_icon.png';
import teamImage from '../../assets/aboutUs/team.jpg';
import workingTogether from '../../assets/aboutUs/working-together.jpg';
import lunchTogether from '../../assets/aboutUs/lunch-together.jpg';
import teamFestival from '../../assets/aboutUs/team-festival.jpg';
import teamFestival2 from '../../assets/aboutUs/team-festival-2.jpg';
import welcomingClient from '../../assets/aboutUs/welcoming-client.jpg';
import welcomingClient2 from '../../assets/aboutUs/welcoming-client-2.jpg';
import learningTogether from '../../assets/aboutUs/learning-together.jpeg';
import playingTogether from '../../assets/aboutUs/playing-together.jpg';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutUsPage = () => {
    const values = [
        "Drive innovation",
        "Deliver excellence",
        "Ensure reliability",
        "Foster agility",
        "Empower success",
        "Embrace perseverance",
        "Accelerate growth"
    ];

    const teamStats = [
        { title: "Business Leaders", icon: leadersIcon },
        { title: "Tech Visionaries", icon: visionariesIcon },
        { title: "Global Partners", icon: partnersIcon }
    ];

    const carouselData = [
        {
            image: workingTogether,
            tag: "COLLABORATION",
            title: "Cracking Challenges Together",
            description: "Innovation happens when diverse minds come together. Our breakout sessions are where the most complex problems meet their match."
        },
        {
            image: lunchTogether,
            tag: "COMMUNITY",
            title: "Bonding Over Bites",
            description: "Great ideas often spark during our shared lunch hours. We value the relationships we build as much as the code we write."
        },
        {
            image: teamFestival,
            tag: "CELEBRATIONS",
            title: "Work Hard, Play Harder",
            description: "From tech fests to festive celebrations, we know how to honor our hard work and recharge our creative energy."
        },
        {
            image: teamFestival2,
            tag: "FESTIVITIES",
            title: "Culture in Every Pixel",
            description: "Our diverse team brings a rich tapestry of traditions to the workplace, making every festival a moment of shared joy and unity."
        },
        {
            image: welcomingClient,
            tag: "PARTNERSHIPS",
            title: "A Legacy of Trust",
            description: "Building long-term relationships is at our core. We take pride in welcoming our global partners and planning successful roadmaps together."
        },
        {
            image: welcomingClient2,
            tag: "MILESTONES",
            title: "Collaborating for Impact",
            description: "Every handshake represents a new chapter of innovation. Our client interactions are fueled by transparency and a shared vision for excellence."
        },
        {
            image: learningTogether,
            tag: "GROWTH",
            title: "Continuous Learning",
            description: "Knowledge sharing is our pulse. From internal workshops to global certifications, we never stop evolving our craft."
        },
        {
            image: playingTogether,
            tag: "SPIRIT",
            title: "Recreational Energy",
            description: "A team that plays together, stays together. Our downtime is spent recharging through sports and leisure, fueling our next innovation."
        }
    ];

    return (
        <div className={styles.aboutUsPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.mainTitle}>ABOUT US</h1>
                    <p className={styles.heroDescription}>
                        FlairMinds Software is committed to <strong>Innovation, Efficiency, and Resiliency</strong> in IT,
                        delivering cutting-edge, client-focused tech solutions. We optimize software engineering for
                        performance and scalability, ensuring swift, reliable market entry. Through close collaboration
                        and the latest technologies, we aim to lead with excellence and create purpose-driven,
                        high-performance software.
                    </p>
                </div>
            </section>

            {/* Vision, Mission, Values Grid */}
            <section className={styles.vmvSection}>
                <div className={styles.vmvGrid}>
                    {/* Vision */}
                    <div className={styles.vmvCard}>
                        <div className={styles.imageIconWrapper}>
                            <img src={visionIcon} alt="Vision" className={styles.imageIcon} />
                        </div>
                        <h2 className={styles.cardTitle}>VISION</h2>
                        <p className={styles.cardContent}>
                            To be an innovative technology company by pursuing excellence and perseverance
                            to enable success stories.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className={styles.vmvCard}>
                        <div className={styles.imageIconWrapper}>
                            <img src={missionIcon} alt="Mission" className={styles.imageIcon} />
                        </div>
                        <h2 className={styles.cardTitle}>MISSION</h2>
                        <p className={styles.cardContent}>
                            Build software that is performant, scalable and "fit for purpose", enabling
                            customers to go to market quickly and reliably.
                        </p>
                    </div>

                    {/* Values */}
                    <div className={styles.vmvCard}>
                        <div className={styles.imageIconWrapper}>
                            <img src={valuesIcon} alt="Values" className={styles.imageIcon} />
                        </div>
                        <h2 className={styles.cardTitle}>VALUES</h2>
                        <ul className={styles.valuesList}>
                            {values.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className={styles.teamSection}>
                <h2 className={styles.teamTitle}>Meet Our Team</h2>
                <p className={styles.teamDescription}>
                    50+ Strong passionate team of young and driven minds with expertise across multiple technologies
                </p>

                {/* Team Culture Gallery */}
                <section className={styles.imageGallerySection}>
                    <div className={styles.galleryContent}>
                        <div className={styles.imageFrame}>
                            <img src={teamImage} alt="Flairminds Team" className={styles.teamPhoto} />
                            <div className={styles.imageCaption}>
                                <span className={styles.captionTag}>OUR_COLLABORATIVE_SPIRIT</span>
                                <h2 className={styles.captionTitle}>Innovation Through Teamwork</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.teamGrid}>
                    {teamStats.map((stat, index) => (
                        <div key={index} className={styles.teamCard}>
                            <div className={styles.teamImageIconWrapper}>
                                <img src={stat.icon} alt={stat.title} className={styles.teamImageIcon} />
                            </div>
                            <h3 className={styles.teamCardTitle}>{stat.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Life at Flairminds Carousel */}
            <section className={styles.carouselSection}>
                <div className={styles.carouselHeader}>
                    <h2 className={styles.carouselTitle}>Life at Flairminds</h2>
                    <p className={styles.carouselSubtitle}>Beyond the code: glimpses into our vibrant tech community</p>
                </div>

                <div className={styles.carouselWrapper}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className={styles.swiperContainer}
                    >
                        {carouselData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className={`${styles.slideContent} ${index % 2 !== 0 ? styles.evenSlide : ''}`}>
                                    <div className={styles.slideImageWrapper}>
                                        <img src={slide.image} alt={slide.title} className={styles.slideImage} />
                                    </div>
                                    <div className={styles.slideTextContent}>
                                        <span className={styles.slideTag}>{slide.tag}</span>
                                        <h3 className={styles.slideTitle}>{slide.title}</h3>
                                        <p className={styles.slideDescription}>{slide.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
