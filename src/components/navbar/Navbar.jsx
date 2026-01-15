import logo from "../../assets/flairminds-logo.png";
import navbarStyles from "./Navbar.module.css";
import React, { useEffect, useState, useCallback } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = React.memo(({ scrolled }) => {
  const location = useLocation();
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(document.cookie.includes("auth=true"));
  }, []);

  const navLinks = [{
    name: "Store",
    activePath: "/"
  }, {
    name: "Blogs",
    activePath: "/blogs"
  }, {
    name: "Case Study",
    activePath: "/case-study"
  }, {
    name: "Contact",
    activePath: "/contact",
  }
  ];

  const handleNavLinkClick = useCallback((path) => {
    setActiveNavbar(false);
    navigate(path);
  }, [navigate]);

  return (
    <div
      className={`${navbarStyles.navbar} ${scrolled ? navbarStyles.scrolled_navbar : ""
        }`}
    >
      <div className={`${navbarStyles.logo}`}>
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className={`${navbarStyles.nav_logo}`}
          />
        </a>
      </div>
      <RxHamburgerMenu
        className={navbarStyles.hamburger}
        onClick={() => setActiveNavbar(true)}
      />
      <div>
        <ul
          className={`${activeNavbar ? navbarStyles.nav_list_active : navbarStyles.nav_list
            }`}
        >
          <RxCross2
            className={navbarStyles.close}
            onClick={() => setActiveNavbar(false)}
          />
          {navLinks?.map((link, index) => (
            <li
              key={index}
              onClick={() => handleNavLinkClick(link?.activePath)}
            >
              {link.name}
            </li>
          ))}
          {user && (
            <li
              className={`${location.pathname.startsWith("/dashboard") ? navbarStyles.active : ""
                }`}
              onClick={() => handleNavLinkClick("/dashboard")}
            >
              Dashboard
            </li>
          )}
        </ul>
      </div>
    </div>
  );
});

export default Navbar;