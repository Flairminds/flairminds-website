import React, { useEffect } from 'react';
import preloaderStyles from './Preloader.module.css';
import logo from '../../assets/flairminds-short-logo.png';

const Preloader = () => {
  useEffect(() => {
    // Lock scroll while preloading
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={preloaderStyles.main}>
      <div className={preloaderStyles.logoWrapper}>
        <img src={logo} alt="Flairminds Logo" className={preloaderStyles.logo} />
        <div className={preloaderStyles.shimmer}></div>
      </div>
    </div>
  );
}

export default Preloader;
