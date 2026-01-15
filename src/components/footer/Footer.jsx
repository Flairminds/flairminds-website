import React from 'react'
import footerStyles from './Footer.module.css'
import shortLogo from '../../assets/flairminds-short-logo.png'
import { FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

const Footer = () => {
    const addresses = [
        {
            area: "India (HQ)",
            address: "1st Floor Alluring Sky Off Aundh Baner Link Road, Vidhate Vasti, Pune",
            addressLink: "https://g.co/kgs/CUxozJv",
        },
        {
            area: "Global Presence",
            address: "Paris | Singapore | New Jersey",
            addressLink: "#",
        }
    ]

    const quickLinks = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Store", link: "/store" },
        { name: "Blogs", link: "/blogs" },
        { name: "Case Study", link: "/case-study" },
        { name: "Contact", link: "/contact" }
    ]

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerContainer}>
                <div className={footerStyles.footerGrid}>
                    {/* Brand Section */}
                    <div className={footerStyles.brandSection}>
                        <div className={footerStyles.logoWrapper}>
                            <img src={shortLogo} alt="FlairMinds logo" className={footerStyles.footerLogo} />
                            <span className={footerStyles.brandName}>FlairMinds</span>
                        </div>
                        <p className={footerStyles.brandTagline}>
                            Your Trusted Global Partner for Innovation, Efficiency, and Resiliency in Tech Solutions.
                        </p>
                        <div className={footerStyles.socialLinks}>
                            <a href="https://www.linkedin.com/company/flairmindssoftware/" target='_blank' rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.youtube.com/@flairmindssoftware" target='_blank' rel="noreferrer" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className={footerStyles.linkSection}>
                        <h3 className={footerStyles.sectionHeading}>Quick Links</h3>
                        <ul className={footerStyles.linkList}>
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>
                                        <FaArrowRight className={footerStyles.linkIcon} /> {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className={footerStyles.contactSection}>
                        <h3 className={footerStyles.sectionHeading}>Contact Us</h3>
                        <div className={footerStyles.contactInfo}>
                            <a href="mailto:sales@flairminds.com" className={footerStyles.contactEmail}>
                                <FaEnvelope className={footerStyles.emailIcon} />
                                sales@flairminds.com
                            </a>
                            <p className={footerStyles.contactText}>
                                Reach out for partnerships, solutions, or career opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Locations Section */}
                    <div className={footerStyles.locationSection}>
                        <h3 className={footerStyles.sectionHeading}>Locations</h3>
                        <div className={footerStyles.locationList}>
                            {addresses.map((address, index) => (
                                <div key={index} className={footerStyles.locationItem}>
                                    <h4 className={footerStyles.locationArea}>
                                        <FaLocationDot className={footerStyles.locIcon} /> {address.area}
                                    </h4>
                                    <p className={footerStyles.locationAddress}>{address.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={footerStyles.footerBottom}>
                    <p className={footerStyles.copyright}>
                        © {new Date().getFullYear()} <span className={footerStyles.brandHighlight}>FlairMinds</span>. All rights reserved.
                    </p>
                    <div className={footerStyles.legalLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer