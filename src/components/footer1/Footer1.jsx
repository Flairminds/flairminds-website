import React from 'react'
import Footer1Styles from './Footer1.module.css'
import shortLogo from '../../assets/flairminds-short-logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import shortLogo from '../../assets/flairMinds-short-logo.png'

const Footer1 = () => {
    const addresses=[
        {
            area:"India",
            address:"1st Floor Alluring Sky Off Aundh Baner Link Road,Vidhate Vasti, Pune",
            addressLink:"https://g.co/kgs/CUxozJv",
        },
        {
            area:"Paris",
            address:"",
            addressLink:"",
        },
        {
            area:"Singapore",
            address:"",
            addressLink:"",
        },
        {
            area:"New Jersey",
            address:"",
            addressLink:"",
        },
    ]
  return (
    <div className={Footer1Styles.footer}>
        <div className={Footer1Styles.left}>
            <img src={shortLogo} alt="" style={{width:'100px'}}/>
            <div className={Footer1Styles.contact_details}>
                 <p className={Footer1Styles.Footer1_sub_heading}>Contact Us </p>
                 {/* <p>sales@flairminds.com</p> */}
                 <a href="mailto:sales@flairminds.com">sales@flairminds.com</a>
            </div>
            <p className={Footer1Styles.Footer1_sub_heading}>Follow us on </p>
            <div className={Footer1Styles.social_icons}>
                <a href="https://www.linkedin.com/company/flairmindssoftware/" target='blank'>
                    <FaLinkedin className={Footer1Styles.linkedin_icon} />
                </a>
                <a href="https://www.youtube.com/@flairmindssoftware" target='blank'>
                    <FaYoutube  className={Footer1Styles.youtube_icon}/>
                </a>
           </div>
        </div>
        <div className={Footer1Styles.right}>
            <p className={Footer1Styles.footer1_heading}>Your Trusted Global Partner, Right Where You Are!</p>
            <div className={Footer1Styles.right_container}>
            <div className={Footer1Styles.menu}>
            <ul>
                 <li className={Footer1Styles.Footer1_sub_heading}>Menu</li>
                 <li><a href="https://flairminds.com/">Home</a></li>
                 <li><a href="https://flairminds.com/about-us">Who we are</a></li>
                 <li><a href="https://store.flairminds.com">What we do</a></li>
                 <li><a href="https://flairminds.com/services">Solutions</a></li>
                 <li><a href="https://flairminds.com/resources">Resources</a></li>
                 <li><a href="https://flairminds.com/career">Career</a></li>
             </ul>
            </div>
            <div className={Footer1Styles.locations}>
            <p className={Footer1Styles.Footer1_sub_heading}>locations</p>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                {addresses.map((address)=>
                    <>
                        <a href={address.addressLink} target='blank'>
                            <p><FaLocationDot /> {address.area}</p>
                            <p style={{paddingLeft:'20px'}}>{address.address}</p>
                        </a>
                    </>
                )}
            </div>
        </div>
        </div>
        </div>
    </div>
    // <div className={Footer1Styles.Footer1}>
    //     <div className={Footer1Styles.Footer1_top}>
    //         <p className={Footer1Styles.Footer1_heading}>Your Trusted Global Partner, Right Where You Are!</p>
    //     </div>
    //     <div className={Footer1Styles.Footer1_middle}>
    //         <div className={Footer1Styles.contact_us}>
    //             <div className={Footer1Styles.contact_details}>
    //             <p className={Footer1Styles.Footer1_sub_heading}>Contact Us </p>
    //             {/* <p>sales@flairminds.com</p> */}
    //             <a href="mailto:sales@flairminds.com">sales@flairminds.com</a>
    //             </div>
    //             <p className={Footer1Styles.Footer1_sub_heading}>Follow us on </p>
    //           <div className={Footer1Styles.social_icons}>
    //             <a href="https://www.linkedin.com/company/flairmindssoftware/" target='blank'>
    //                 <FaLinkedin className={Footer1Styles.linkedin_icon} />
    //             </a>
    //             <a href="https://www.youtube.com/@flairmindssoftware" target='blank'>
    //                 <FaYoutube  className={Footer1Styles.youtube_icon}/>
    //             </a>
    //           </div>
    //         </div>
    //         <div className={Footer1Styles.menu}>
    //             <ul>
    //                 <li className={Footer1Styles.Footer1_sub_heading}>Menu</li>
    //                 <li><a href="https://flairminds.com/">Home</a></li>
    //                 <li><a href="https://flairminds.com/about-us">Who we are</a></li>
    //                 <li><a href="https://store.flairminds.com">What we do</a></li>
    //                 <li><a href="https://flairminds.com/services">Solutions</a></li>
    //                 <li><a href="https://flairminds.com/resources">Resources</a></li>
    //                 <li><a href="https://flairminds.com/career">Career</a></li>
    //             </ul>
    //         </div>
    //         <div className={Footer1Styles.locations}>
    //             <p className={Footer1Styles.Footer1_sub_heading}>locations</p>
    //             <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
    //                 {addresses.map((address)=>
    //                     <>
    //                         <a href={address.addressLink} target='blank'>
    //                             <p><FaLocationDot /> {address.area}</p>
    //                             <p style={{paddingLeft:'20px'}}>{address.address}</p>
    //                         </a>
    //                     </>
    //                 )}
    //             </div>
    //         </div>
    //     </div>
    //     <div className={Footer1Styles.Footer1_bottom}>
    //         <img src={shortLogo} alt="logo" className={Footer1Styles.Footer1_logo}/>
    //         <p className={Footer1Styles.copyright_text}>Copyright © 2024 FlairMinds. All rights reserved.</p>
    //     </div>
    // </div>
  )
}

export default Footer1