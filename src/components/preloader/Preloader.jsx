import React, { useEffect } from 'react';
import preloadeeStyles from './Preloader.module.css'
const Preloader = () => {
  useEffect(()=>{
    console.log("loading")
  },[])
  console.log("loading")
  return (
    <div className={preloadeeStyles.main}>
      <h1 className={preloadeeStyles.flairminds}>Flairminds</h1>
    </div>
  );
}

export default Preloader;
