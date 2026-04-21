import React, { useEffect, useState } from "react";
import hero2Styles from "./Hero2.module.css";
import arrow from "../../assets/arrow-small-right.png";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { products } from "../../data/productsData";
import HeroCarousel from "../heroCarousel/HeroCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import n8n1 from "../../assets/homepage-assets/n8n-1.png";
import langchain from "../../assets/homepage-assets/langchain.png";
import rag from "../../assets/homepage-assets/rag.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Hero2 = () => {
  const [screenWidth, setScreenWidth] = useState();
  const [scrollToId, setScrollToId] = useState();
  const [activeIndex, setActiveIndex] = useState();

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);

  const [swiperRef, setSwiperRef] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    scrollDown(scrollToId);
  }, [scrollToId]);

  const carauselImages = [
    {
      id: 1,
      image: n8n1,
    },
    {
      id: 2,
      image: langchain,
    },
    {
      id: 3,
      image: rag,
    },
  ];

  const scrollDown = (id) => {
    if (id !== undefined) {
      const productElement = document.getElementById(parseInt(id));
      if (productElement) {
        const yOffset = 70; // Adjust offset as needed
        const y =
          productElement.getBoundingClientRect().top + window.scrollY - yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // stagger delay
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className={hero2Styles.main}>
      <div className={hero2Styles.inner_container}>
        <motion.h2
          className={hero2Styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Stop Losing Hours to Manual Work.
        </motion.h2>
        <motion.h2
          className={hero2Styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Let AI Handle It - <span className={hero2Styles.highlight}>Cheaper. Faster.</span>
        </motion.h2>
        <motion.p
          className={hero2Styles.sub_heading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          FlairMinds deploys production-ready AI for fintech, banking, legal &amp; enterprise teams -
          from AML compliance and document intelligence to agentic workflows and risk automation.
          Real outcomes: 80% less manual effort, 60% faster delivery, zero vendor lock-in.
        </motion.p>
        <motion.div
          className={hero2Styles.hero_button_container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button
            className={hero2Styles.get_in_touch}
            onClick={() => navigate("/contact")}
          >
            Book a Free Demo
          </button>
          <FaArrowRight />
        </motion.div>
      </div>
      {/* <div className={hero2Styles.slideshow}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
          style={{ width: "100%", height: "100%" }}
        >
          {carauselImages.map((product) => (
            <SwiperSlide key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className={hero2Styles.slide_img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      {/* <div className={hero2Styles.slideshow}>
			<Swiper
				onSwiper={setSwiperRef}
				breakpoints={{
					0: { slidesPerView: 1.75 },
					640: { slidesPerView: 2.5 },
					900: { slidesPerView: 3.5 },
					1220: { slidesPerView: 4.5 },
				}}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				centeredSlides={true}
				// navigation={    
				//   {
				//     nextEl: `.${hero2Styles.swiper_button_next_custom}`,
				//     prevEl: `.${hero2Styles.swiper_button_prev_custom}`
				//   }}
				// navigation={true}
				modules={[Autoplay,Navigation]}
				speed={4000}
				loop={true}
				autoplay={{
				delay: 0, // 3 seconds
				disableOnInteraction: false,
				}}
				style={{width:'100%'}}
			>
				{products.map((product,index) => {
					return <SwiperSlide key={product.id} onClick={()=>setScrollToId(product.id)}>
						<HeroCarousel product={product} customClass={activeIndex===index?"main":"main1"}/>
					</SwiperSlide>
				})}
			</Swiper>
		</div> */}
    </div>
  );
};

export default Hero2;
