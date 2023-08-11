import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import fog from 'vanta/dist/vanta.fog.min';
import style from '../css/home.module.css';
// Import FontAwesome icons and styles
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ProgressBar from "../components/ProgressBar";
import { Link } from 'react-router-dom';
import styles from "../css/nav.module.css";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleNext = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handlePrevious = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  useEffect(() => {
    vantaEffect.current = fog({
      THREE,
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 100.0,
      minWidth: 100.0,
      highlightColor: 0xf2f2f2,
      midtoneColor: 0xffe1e1,
      lowlightColor: 0x96a4ff,
      baseColor: 0xffffff,
      blurFactor: 0.9,
      speed: 1.3,
      zoom: 1.5,
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);
  // const handleMenuClick = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <>
    
      <div className={style.maindiv} ref={vantaRef}>
     
        <div className={style['text-container']}>
          <h2>Rethinking Nutrition<br />Rethinking Tomorrow</h2>
          <p className={style['text-container-2']}>From formulation to a finished product<br />
            we have got you covered</p>
        </div>
        <div className={style['down-arrow-container']}>
          <FontAwesomeIcon icon={faArrowDown} />
          <div className={style.progressBar}>
            <ProgressBar />
            <div className={style['press-release']} style={{ marginTop: '20px' }}>
              <span className={style['press']} style={{ marginTop: "12px" }}>
                <span><p className={style['press-span']}>Press Release</p></span>
                <span><p className={style['pawan']}>{texts[currentTextIndex]}
                </p>
                </span>
              </span>
              <p></p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
