import logo from "../../assets/flairminds-short-logo.png";
import navbarStyles from "./Navbar.module.css";
import React, { useEffect, useState, useCallback } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = React.memo(({ scrolled }) => {
  const location = useLocation();
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [user, setUser] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const navigate = useNavigate();

  // Detect light background pages
  const isLightBg = ['/blogs', '/store', '/case-study', '/contact', '/services/ai-data-science'].includes(location.pathname);

  useEffect(() => {
    setUser(document.cookie.includes("auth=true"));
  }, []);

  const navLinks = [
    { name: "Home", activePath: "/" },
    { name: "About", activePath: "/about" },
    {
      name: "Services",
      activePath: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Web & Mobile Development", path: "/services/web-mobile-development" },
        { name: "Cloud & DevOps", path: "/services/cloud-devops" },
        { name: "AI & Data Science", path: "/services/ai-data-science" },
        { name: "Quality Engineering", path: "/services/quality-engineering" },
        { name: "Digital Transformation", path: "/services/digital-transformation" },
        { name: "IT Management", path: "/services/it-management" },
      ]
    },
    { name: "Case Studies", activePath: "/case-study" },
    { name: "Our Solutions", activePath: "/store" },
    { name: "Blogs", activePath: "/blogs" },
    { name: "Careers", activePath: "/careers" },
    { name: "Contact", activePath: "/contact" },
  ];

  const handleNavLinkClick = useCallback((path) => {
    setActiveNavbar(false);
    navigate(path);
  }, [navigate]);

  return (
    <nav className={`${navbarStyles.navbarWrapper} ${scrolled ? navbarStyles.scrolled : ""} ${isLightBg && !scrolled ? navbarStyles.lightBg : ""} ${activeNavbar ? navbarStyles.navOpened : ""}`}>
      <div className={navbarStyles.navbarContainer}>
        {/* Logo Section */}
        <div className={navbarStyles.logoWrapper}>
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/'); }} style={{ textDecoration: "none" }}>
            <div className={navbarStyles.crystalLogo}>
              <img src={logo} alt="FlairMinds Logo" className={navbarStyles.navLogo} />
              <div className={navbarStyles.logoName}>FlairMinds</div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className={navbarStyles.navLinks}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${navbarStyles.navItem} ${link.hasDropdown ? navbarStyles.dropdownContainer : ""} ${location.pathname === link.activePath || (link.hasDropdown && location.pathname.startsWith('/services')) ? navbarStyles.activeItem : ""}`}
              onClick={() => {
                if (link.hasDropdown) {
                  setServicesDropdown(!servicesDropdown);
                } else {
                  handleNavLinkClick(link.activePath);
                }
              }}
              onMouseEnter={() => link.hasDropdown && setServicesDropdown(true)}
              onMouseLeave={() => link.hasDropdown && setServicesDropdown(false)}
            >
              {link.name}
              {link.hasDropdown && (
                <ul className={`${navbarStyles.dropdownMenu} ${servicesDropdown ? navbarStyles.showDropdown : ""}`}>
                  {link.dropdownItems.map((item, i) => (
                    <li
                      key={i}
                      className={navbarStyles.dropdownItem}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavLinkClick(item.path);
                        setServicesDropdown(false);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {user && (
            <li
              className={`${navbarStyles.navItem} ${navbarStyles.dashboardBtn} ${location.pathname.startsWith("/dashboard") ? navbarStyles.activeItem : ""}`}
              onClick={() => handleNavLinkClick("/dashboard")}
            >
              Dashboard
            </li>
          )}
        </ul>

        {/* Action Button (Optional/Modern) */}
        {/* <div className={navbarStyles.navActions}>
          <button
            className={navbarStyles.contactBtn}
            onClick={() => handleNavLinkClick('/contact')}
          >
            Get Started
          </button>
        </div> */}

        {/* Hamburger Menu */}
        <div className={navbarStyles.mobileToggle}>
          {activeNavbar ? (
            <RxCross2 className={navbarStyles.menuIcon} onClick={() => setActiveNavbar(false)} />
          ) : (
            <RxHamburgerMenu className={navbarStyles.menuIcon} onClick={() => setActiveNavbar(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${navbarStyles.mobileOverlay} ${activeNavbar ? navbarStyles.showOverlay : ""}`}>
        <ul className={navbarStyles.mobileLinks}>
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              <li
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (link.hasDropdown) {
                    setServicesDropdown(!servicesDropdown);
                  } else {
                    handleNavLinkClick(link.activePath);
                  }
                }}
                className={link.hasDropdown && servicesDropdown ? navbarStyles.mobileActive : ""}
              >
                {link.name}
                {link.hasDropdown && <span className={`${navbarStyles.arrow} ${servicesDropdown ? navbarStyles.arrowRotate : ""}`}>▾</span>}
              </li>
              {link.hasDropdown && (
                <ul className={`${navbarStyles.mobileSubLinks} ${servicesDropdown ? navbarStyles.showMobileSubLinks : ""}`}>
                  {link.dropdownItems.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        handleNavLinkClick(item.path);
                        setServicesDropdown(false);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
          {user && (
            <li onClick={() => handleNavLinkClick("/dashboard")}>Dashboard</li>
          )}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;