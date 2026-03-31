import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Chatbot from '../chatbot/Chatbot'

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
    <div style={{ overflow: 'hidden' }}>
      <div style={{ position: "sticky", top: 0, zIndex: 101 }}>
        <Navbar scrolled={scrolled} />
      </div>
      <div>
        <Outlet />
        <Footer />
      </div>
      {/* Floating AI Chatbot — visible on all public pages */}
      <Chatbot />
    </div>
  )
}

export default GeneralLayout