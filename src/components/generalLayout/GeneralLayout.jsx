import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Footer1 from '../footer1/Footer1'
const GeneralLayout = () => {
  const [scrolled, setScrolled] = useState()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 101 }}>
        <Navbar scrolled={scrolled} />
      </div>
      <div>
        <Outlet />
        <Footer />
      </div>
      {/* <Footer1/> */}
    </div>
  )
}

export default GeneralLayout