import React from 'react'
import footerStyles from './Footer.module.css'
import shortLogo from '../../assets/flairminds-short-logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
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
    <div className={footerStyles.footer}>
        <div className={footerStyles.footer_top}>
            <p className={footerStyles.footer_heading}>Your Trusted Global Partner, Right Where You Are!</p>
        </div>
        <div className={footerStyles.footer_middle}>
            <div className={footerStyles.contact_us}>
                <div className={footerStyles.contact_details}>
                <p className={footerStyles.footer_sub_heading}>Contact Us </p>
                {/* <p>sales@flairminds.com</p> */}
                <a href="mailto:sales@flairminds.com">sales@flairminds.com</a>
                </div>
                <p className={footerStyles.footer_sub_heading}>Follow us on </p>
              <div className={footerStyles.social_icons}>
                <a href="https://www.linkedin.com/company/flairmindssoftware/" target='blank'>
                    <FaLinkedin className={footerStyles.linkedin_icon} />
                </a>
                <a href="https://www.youtube.com/@flairmindssoftware" target='blank'>
                    <FaYoutube  className={footerStyles.youtube_icon}/>
                </a>
              </div>
            </div>
            <div className={footerStyles.menu}>
                <ul>
                    <li className={footerStyles.footer_sub_heading}>Menu</li>
                    <li><a href="https://flairminds.com/">Home</a></li>
                    <li><a href="https://flairminds.com/about-us">Who we are</a></li>
                    <li><a href="https://store.flairminds.com">What we do</a></li>
                    <li><a href="https://flairminds.com/services">Solutions</a></li>
                    <li><a href="https://flairminds.com/resources">Resources</a></li>
                    <li><a href="https://flairminds.com/career">Career</a></li>
                </ul>
            </div>
            <div className={footerStyles.locations}>
                <p className={footerStyles.footer_sub_heading}>locations</p>
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
        <div className={footerStyles.footer_bottom}>
            <img src={shortLogo} alt="logo" className={footerStyles.footer_logo}/>
            <p className={footerStyles.copyright_text}>Copyright © 2025 FlairMinds. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer