import React, { useEffect, useState } from 'react';
import Hammer from 'hammerjs';
import style from "../css/clinic.module.css";
import styles from "../css/slider.module.css";
import Slider from '../slider/ThreeDSlider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Clinic = () => {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate text and other elements using GSAP
    let tl=gsap.timeline({
      scrollTrigger:{
        trigger:".impact",
        start:"10% center",
        end:"40% center",
        scrub:true,
        markers:false,
        
      }
      
    });
    tl.to('.impact',{
      x:800,
      duration:0.5
    })
  }, []);
    // const [activeSlideIndex, setActiveSlideIndex] = useState(2); // Index of the active slide

    // useEffect(() => {
    //   const dir = document.documentElement.getAttribute('dir');
    //   const sliderElement = document.getElementById('slider');
  
    //   const swipeHandler = new Hammer(sliderElement);
  
    //   swipeHandler.on('swipeleft', () => handleSwipe(dir === 'rtl' ? 'right' : 'left'));
    //   swipeHandler.on('swiperight', () => handleSwipe(dir === 'rtl' ? 'left' : 'right'));
    // }, []);
  
    // const handleSwipe = (direction) => {
    //   const newActiveIndex = direction === 'left' ? activeSlideIndex + 1 : activeSlideIndex - 1;
    //   if (newActiveIndex >= 0 && newActiveIndex < 8) {
    //     setActiveSlideIndex(newActiveIndex);
    //   }
    // };
  
    // const handleArrowClick = (direction) => {
    //   const newActiveIndex = direction === 'left' ? activeSlideIndex - 1 : activeSlideIndex + 1;
    //   if (newActiveIndex >= 0 && newActiveIndex < 8) {
    //     setActiveSlideIndex(newActiveIndex);
    //   }
    // };
  
    // const handleDotClick = (index) => {
    //   setActiveSlideIndex(index);
    // };
  
  return (
    <div className={style['maindiv']}>
        <div className={style['container']}>
            <div className={style['container-1']}>
                <h1 className={style['impact']}>IMPACT</h1>
                <p className={style['impact-text-1']}>IT'S WHAT WE DO</p>
                <p className={style['impact-text-2']}>By developing iconic, 
                    behaviour-changing, value-driving products that fits the brand voice. When a brand needs innovative product. Kingenic makes it happen by taste, feel, 
                    dosage,compliance and overall impact.</p>
            </div>
            {/* <div className={style['container-2']}> */}
              <Slider/>
            {/* <div className={styles['slider-container']}>
      <span
        className={`${styles['arrow']} ${styles['arrow-left']}`}
        onClick={() => handleArrowClick('left')}
      ></span>
      <span
        className={`${styles['arrow']} ${styles['arrow-right']}`}
        onClick={() => handleArrowClick('right')}
      ></span>
      <div className={styles['slider']} id="slider">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div
            key={index}
            className={`${styles['slide']} ${index === activeSlideIndex ? styles['active'] : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className={styles['dots']}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <span
            key={index}
            className={`${styles['dot']} ${index === activeSlideIndex ? styles['active'] : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div> */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default Clinic;
