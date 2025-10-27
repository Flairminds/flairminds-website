import React from 'react'
import heroCarouselStyles from './HeroCarousel.module.css'
import illustration from '../../assets/illustration.png'
import {motion} from 'motion/react'
const HeroCarousel = ({product,customClass}) => {
  const cardVariants = {
    hidden: { y: 100 },
    visible: (i) => ({
      y: 10,
      transition: {
        delay: i * 0.2, // stagger delay
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };
  return (
    <div 
    className={heroCarouselStyles[customClass]}>
        <h3>{product?.name}</h3>
        <p className={heroCarouselStyles.tagline}>{product.tagline}</p>
    </div>
    // <motion.div 
    // custom={product.id}
    // initial="hidden"
    // animate="visible"
    // variants={cardVariants}
    // className={heroCarouselStyles.main}>
    //     <p>{product?.name}</p>
    //     <img src={illustration} alt="" style={{width:'100%',borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px'}}/>
    // </motion.div>
  )
}

export default HeroCarousel