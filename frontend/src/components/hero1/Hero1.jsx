import React from 'react'
import Hero1Styles from './Hero1.module.css'
import arrow from "../../assets/arrow-small-right.png"
import {motion} from 'motion/react'
import { useNavigate } from 'react-router-dom'

const Hero1 = () => {
    const navigate=useNavigate()
    const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0,      // Delay before the first child starts animating
            staggerChildren: 0.25, // Delay between each paragraph
          },
        },
      };
      const getInTouchVariant = {
        hidden: {opacity:0,y:20},
        visible: {
            opacity:1,
            y:0,
            transition: {
                delay: 1,      // Delay before the first child starts animating
                staggerChildren: 0.25, // Delay between each paragraph
            },
        },
      };
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
      const waveContainer = {
        hidden: { opacity: 1, y:0 },
        visible: {
          opacity: 1,
          y:0,
          transition: {
            delayChildren: 0,      // Delay before wave starts
            staggerChildren: 0.01, // Time between letters
          },
        },
      };
      const waveLetter = {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        },
      };
      const WaveText = ({ text, customClassName }) => (
        <motion.p
          variants={waveContainer}
          initial="hidden"
          animate="visible"
          className={customClassName}
        >
          {text.split("").map((char, i) => (
            <motion.span key={i} variants={waveLetter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      );
  return (
    <div className={Hero1Styles.main}>
        <div className={Hero1Styles.main_container}>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="1018" height="107" viewBox="0 0 1018 107" className={Hero1Styles.fm_heading}>
            {/* <defs>
                <linearGradient id="text-stroke-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#005ba1" />
                <stop offset="50%" stopColor="#b9ed5e" />
                <stop offset="100%" stopColor="#005ba1" />
                </linearGradient>
            </defs> */}
            <path d="M93.384 34.624L85.32 38.08L68.936 14.4H40.008V47.168H53.832L63.176 33.344H71.368V71.488L62.024 76.224L53.32 58.048H40.008V90.048L62.92 94.656L58.312 104H2.632V95.808L14.664 86.336V16.704L0.328 12.608L4.936 3.392H83.4L93.384 1.088V34.624ZM185.829 104.128H102.757V95.936L114.789 86.464V16.192L100.453 12.608L105.061 3.392H152.293V11.456L140.133 20.928V92.992H167.653L187.749 64.192L195.813 67.52V106.432L185.829 104.128ZM314.828 104H264.524V95.808L279.116 87.616L271.948 70.08H233.42L227.276 85.184L246.092 94.656L241.484 104H199.372V95.808L213.836 85.056L245.58 7.488L270.412 0.959991L306.252 88.384L319.436 94.656L314.828 104ZM252.748 22.72L237.9 59.2H267.596L252.748 22.72ZM371.239 104H324.007V95.808L336.039 85.44V16.576L321.703 12.608L326.311 3.392H373.543V11.456L361.383 21.952V90.688L375.847 94.656L371.239 104ZM485.365 103.872H456.437L432.885 59.968L427.381 56.64L430.837 49.728H436.469C440.65 49.728 443.936 48.32 446.325 45.504C448.8 42.688 450.037 38.7627 450.037 33.728C450.037 28.0107 448.501 23.36 445.429 19.776C442.442 16.1067 438.048 14.272 432.245 14.272C428.576 14.272 425.205 15.3387 422.133 17.472V90.56L436.597 94.528L431.989 103.872H384.757V95.68L396.789 85.312V16.32L382.453 12.48L387.061 3.26399H410.229C417.482 3.26399 424.693 3.00799 431.861 2.49599C436.981 2.15466 440.778 1.98399 443.253 1.98399C449.994 1.98399 455.968 3.17866 461.173 5.56799C466.464 7.87199 470.517 11.072 473.333 15.168C476.234 19.1787 477.685 23.7013 477.685 28.736C477.685 34.624 475.125 40.128 470.005 45.248C464.885 50.2827 458.528 54.1653 450.933 56.896L461.685 59.84L477.301 88.768L490.101 94.528L485.365 103.872ZM629.285 104.128H582.053V95.936L594.085 86.464V28.224L563.109 104.128H550.821L518.949 27.072V89.28L533.541 94.784L528.805 104.128H494.757V95.936L506.789 86.464V18.368L492.453 12.608L497.061 3.392H535.589L564.005 71.744L591.781 3.392H631.717V11.456L619.557 20.928V91.072L634.021 94.784L629.285 104.128ZM690.114 104H642.882V95.808L654.914 85.44V16.576L640.578 12.608L645.186 3.392H692.418V11.456L680.258 21.952V90.688L694.722 94.656L690.114 104ZM799.888 22.208V104.256H787.6L727.824 38.208V88L747.536 94.784L742.928 104.128H703.632V95.936L715.664 85.568V20.8L701.328 12.608L705.936 3.392H729.36L787.6 67.52V19.392L768.144 12.608L772.752 3.392H812.048V11.712L799.888 22.208ZM876.333 2.11199C886.146 2.11199 894.85 4.24533 902.445 8.51199C910.04 12.6933 915.885 18.5387 919.981 26.048C924.162 33.5573 926.253 42.048 926.253 51.52C926.253 61.248 923.138 70.2507 916.909 78.528C910.68 86.72 902.914 93.248 893.613 98.112C884.397 102.891 875.608 105.28 867.245 105.28C863.49 105.28 859.693 105.067 855.853 104.64C849.453 104.213 844.546 104 841.133 104H819.757V95.808L831.789 86.336V16.96L817.453 12.608L822.061 3.392H841.005C848.856 3.392 856.536 3.136 864.045 2.62399C869.677 2.28266 873.773 2.11199 876.333 2.11199ZM870.957 92.864C876.077 92.864 880.77 91.328 885.037 88.256C889.304 85.184 892.632 81.0027 895.021 75.712C897.496 70.336 898.733 64.32 898.733 57.664C898.733 49.728 897.538 42.5173 895.149 36.032C892.845 29.4613 889.261 24.256 884.397 20.416C879.618 16.4907 873.645 14.528 866.477 14.528C863.149 14.528 860.034 15.3813 857.133 17.088V90.56C861.058 92.0107 865.624 92.736 870.829 92.736L870.957 92.864ZM991.109 83.392C991.109 80.832 990.085 78.4 988.037 76.096C986.074 73.792 983.642 71.7013 980.741 69.824C977.84 67.8613 973.786 65.3867 968.581 62.4C962.181 58.7307 957.061 55.616 953.221 53.056C949.381 50.4107 946.096 47.3387 943.365 43.84C940.634 40.256 939.269 36.3307 939.269 32.064C939.269 27.7973 941.274 23.232 945.285 18.368C949.296 13.4187 954.202 9.27999 960.005 5.952C965.893 2.53866 971.269 0.831993 976.133 0.831993C982.021 0.831993 988.89 1.472 996.741 2.752C1004.68 4.032 1010.48 5.39733 1014.15 6.84799V35.776H999.813C996.57 28.864 992.858 23.488 988.677 19.648C984.496 15.808 980.144 13.888 975.621 13.888C972.634 13.888 970.288 14.8693 968.581 16.832C966.874 18.7093 966.021 21.1413 966.021 24.128C966.021 26.8587 967.045 29.4613 969.093 31.936C971.141 34.3253 973.658 36.544 976.645 38.592C979.717 40.5547 983.898 42.9867 989.189 45.888C995.418 49.3867 1000.41 52.416 1004.17 54.976C1008.01 57.536 1011.25 60.5653 1013.89 64.064C1016.62 67.4773 1017.99 71.2747 1017.99 75.456C1017.99 79.7227 1015.81 84.3307 1011.46 89.28C1007.19 94.144 1001.99 98.2827 995.845 101.696C989.701 105.024 984.069 106.688 978.949 106.688C972.72 106.688 965.381 106.048 956.933 104.768C948.485 103.488 942.384 102.123 938.629 100.672V71.616H952.837C956.336 78.528 960.432 83.904 965.125 87.744C969.904 91.584 974.725 93.504 979.589 93.504C983.088 93.504 985.861 92.5227 987.909 90.56C990.042 88.5973 991.109 86.208 991.109 83.392Z" 
        // stroke="url(#text-stroke-gradient)"  strokeWidth="2"  fill="none" 
        />
        </svg>
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={Hero1Styles.text_container}
        >
        <motion.h3 variants={itemVariants} className={Hero1Styles.subheading}>Transform Industries with AI-Driven Precision – Where Intelligence Meets Action.</motion.h3>
        <motion.p variants={itemVariants} className={Hero1Styles.hero_subheading}>Empowering BFSI Leaders, Enterprise Innovators, and Regulated Sectors with Bespoke Solutions to Unlock Efficiency, Compliance, and Strategic Growth.</motion.p>
        {/* <WaveText customClassName={Hero1Styles.subheading} variants={itemVariants} text="Transform Industries with AI-Driven Precision – Where Intelligence Meets Action." />
        <WaveText customClassName={Hero1Styles.hero_subheading} variants={itemVariants} text="Empowering BFSI Leaders, Enterprise Innovators, and Regulated Sectors with Bespoke Solutions to Unlock Efficiency, Compliance, and Strategic Growth" /> */}
        {/* <img src={curlyWhiteArrow} alt="arrow" className={Hero1Styles.hero_arrow}/> */}
        <br />
        <motion.div 
            variants={getInTouchVariant}
            initial="hidden"
            animate="visible" 
            className={Hero1Styles.hero_button_container} 
            onClick={()=>navigate('/contact')}>
            <button className={Hero1Styles.get_in_touch}>Get in Touch</button>
            <img src={arrow} alt="arrow" />
        </motion.div>
        </motion.div>
        </div>
    </div>
  )
}

export default Hero1