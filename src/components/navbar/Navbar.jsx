import logo from "../../assets/flairminds-short-logo.png";
import navbarStyles from "./Navbar.module.css";
import React, { useEffect, useState, useCallback } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = React.memo(({ scrolled }) => {
  const location = useLocation();
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(document.cookie.includes("auth=true"));
  }, []);

  const navLinks = [
    { name: "Home", activePath: "/" },
    { name: "About", activePath: "/about" },
    { name: "Case Study", activePath: "/case-study" },
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
    <nav className={`${navbarStyles.navbarWrapper} ${scrolled ? navbarStyles.scrolled : ""}`}>
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
              className={`${navbarStyles.navItem} ${location.pathname === link.activePath ? navbarStyles.activeItem : ""}`}
              onClick={() => handleNavLinkClick(link.activePath)}
            >
              {link.name}
              {/* <span className={navbarStyles.indicator}></span> */}
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
            <li
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => handleNavLinkClick(link.activePath)}
            >
              {link.name}
            </li>
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