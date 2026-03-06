import heroStyles from "./Hero.module.css"
import curlyWhiteArrow from "../../assets/white-curly-arrow.png"
import arrow from "../../assets/arrow-small-right.png"
import { useNavigate } from "react-router-dom"
import FMHero from '../../assets/FMHero1.png'
import {motion} from "motion/react"

const Hero = () => {
  const navigate=useNavigate()
  return (
    <motion.div
      className={heroStyles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className={heroStyles.hero_heading}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Transform Industries with AI-Driven Precision
      </motion.h1>

      <motion.h1
        className={heroStyles.hero_heading}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Where Intelligence Meets Action.
      </motion.h1>

      <motion.p
        className={heroStyles.hero_subheading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Empowering BFSI Leaders, Enterprise Innovators, and Regulated Sectors
        with Bespoke Solutions to Unlock Efficiency, Compliance, and Strategic
        Growth
      </motion.p>

      <motion.img
        src={curlyWhiteArrow}
        alt="arrow"
        className={heroStyles.hero_arrow}
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      <br />

      <motion.div
        className={heroStyles.hero_button_container}
        onClick={() => navigate("/contact")}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        whilehover={{ scale: 1.05 }}
        whiletap={{ scale: 0.95 }}
      >
        <button className={heroStyles.get_in_touch}>Get in Touch</button>
        <img src={arrow} alt="arrow" />
      </motion.div>
    </motion.div>
  )
}

export default Hero

{/* <div className={heroStyles.hero}> */}
      {/* <img src={FMHero} alt="" style={{width:"100%",objectFit:"cover"}}/> */}
    //     <h1 className={heroStyles.hero_heading}>Transform Industries with AI-Driven Precision</h1>
    //     <h1 className={heroStyles.hero_heading}>Where Intelligence Meets Action.</h1>
    //     <p className={heroStyles.hero_subheading}>Empowering BFSI Leaders, Enterprise Innovators, and Regulated Sectors with Bespoke Solutions to Unlock Efficiency, Compliance, and Strategic Growth</p>
    //     <img src={curlyWhiteArrow} alt="arrow" className={heroStyles.hero_arrow}/>
    //     <br />
    //     <div className={heroStyles.hero_button_container} onClick={()=>navigate('/contact')}>
    //     <button className={heroStyles.get_in_touch}>Get in Touch</button>
    //     <img src={arrow} alt="arrow" />
    //     </div>
    // </div>