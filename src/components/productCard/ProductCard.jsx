import React, { useState } from 'react'
import productCardStyles from "./ProductCard.module.css"
// import arrow from "../../assets/arrow-small-right.png"
import { FaArrowRight } from "react-icons/fa6";
import Dropdown from '../dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setDemoLink, setShareLink, toggleDemoModal, toggleModal } from '../../redux/slices/visitorDetailsModalSlice';
import { IoMdShare } from "react-icons/io";
import { message, Carousel } from 'antd';
import LearnMore from '../learnMore/LearnMore';
import {motion} from 'motion/react'
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

const ProductCard = React.memo(({ prop }) => {
  const dispatch = useDispatch()
  const containerVariants = {
    hidden: {y:20},
    visible: {
      y:0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const highlightPhrases = (text, phrases) => {
    if (!phrases || phrases.length === 0) return text;
    let parts = [text];
  
    phrases.forEach(phrase => {
      const regex = new RegExp(`(${phrase})`, "gi");
      parts = parts.flatMap(part =>
        typeof part === "string"
          ? part.split(regex).map((p, i) =>
              p.toLowerCase() === phrase.toLowerCase()
                ? <strong key={i}>{p}</strong>
                : p
            )
          : [part]
      );
    });
  
    return parts;
  };


  return (
    <div className={productCardStyles.product_card} id={prop.id}>
      <div className={productCardStyles.product_card_innner_container}>
        <div className={productCardStyles.image_container}>
          <div className={productCardStyles.product_card_image}>
            {/* <Carousel className={productCardStyles.carousel} autoplay={{ dotDuration: true }} autoplaySpeed={2000}>
              <div>
                <img src={prop?.image} alt="" style={{width:"100%",height:"100%"}} />
              </div>
              <div>
                <img src={prop?.image} alt="" style={{width:"100%",height:"100%"}} />
              </div>
              <div>
                <img src={prop?.image} alt="" style={{width:"100%",height:"100%"}} />
              </div>
              <div>
                <img src={prop?.image} alt="" style={{width:"100%",height:"100%"}} />
              </div>
            </Carousel> */}
            {prop.image.endsWith('mp4')?<video src={`${prop.image}`} loop muted style={{width:'100%'}} autoPlay/>:<img src={prop?.image} alt="" style={{ width: "100%", height: "100%" }} />}
          </div>
        </div>
        <motion.div 
          className={productCardStyles.details_container}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
      <motion.h1 variants={itemVariants}>
        {prop?.name.toUpperCase()}
      </motion.h1>

      {prop?.detailsParagraphs?.map((paragraph, i) => (
        <motion.p variants={itemVariants} key={i}>
          {/* {paragraph} */}
          {highlightPhrases(paragraph, prop?.highlight)}
        </motion.p>
      ))}

      {prop?.subheading}
      <motion.h4 variants={itemVariants}>
        {prop.subHeading}
      </motion.h4>

      <motion.ul
        className={productCardStyles.bullets}
        variants={containerVariants}
      >
        {prop?.list?.map((element, i) => (
          <motion.li
            // style={{ fontWeight: '600' }}
            key={i}
            variants={itemVariants}
          >
            {/* {element} */}
            {highlightPhrases(element, prop?.highlight)}
          </motion.li>
        ))}
      </motion.ul>
      <motion.p variants={itemVariants}>{highlightPhrases(prop?.cta, prop?.highlight)}</motion.p>
      <motion.div className={productCardStyles.options} variants={itemVariants}>
        {prop.buttonText && (
          <div className={productCardStyles.button_container}>
            <button
              onClick={() =>
                window.open(prop.projectLink)
              }
              className={productCardStyles.product_card_button}
            >
              {prop.buttonText}
              <FaArrowRight className={productCardStyles.icons}/>
              {/* <img src={arrow} alt="arrow right" className={productCardStyles.arrow} /> */}
            </button>
          </div>
        )}

        {prop.chatbot && (
          <div className={productCardStyles.button_container}>
            <Dropdown chatbot={prop.chatbot} />
          </div>
        )}

        {prop?.demoButton?
        <div className={productCardStyles.button_container} onClick={()=>{ dispatch(setDemoLink({ demoLink: prop.demoLink })); dispatch(toggleDemoModal()); }}>
          <p className={productCardStyles.product_card_button}>View Demo<MdOutlineVideoLibrary style={{scale:"120%"}}/></p>
        </div>:<div></div>}
        <div className={productCardStyles.button_container} onClick={() => {dispatch(setShareLink({ shareName: prop.linkDisplay }))}}>
          <p className={productCardStyles.product_card_button}>Share Link<IoIosShareAlt /></p>
        </div>
        

        {/* <LearnMore prop={prop} /> */}
      </motion.div>
</motion.div>
      </div>
      {(prop.upcomingFeatures && prop.upcomingFeatures.length > 0) && <>
        <div className={productCardStyles.upcoming_features}>
          <h2 className={productCardStyles.upcoming_heading}>Upcoming Features</h2>
          {prop.upcomingFeatures.map(feature => <p>{feature}</p>)}
        </div>
      </>
      }
    </div>
  )
})

export default ProductCard

//for view demo ==> onClick={() => { dispatch(setDemoLink({ demoLink: prop.demoLink })); dispatch(toggleModal({ interest: prop.name, redirectUrl: null })); }}