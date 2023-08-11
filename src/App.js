import './App.css';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import fog from 'vanta/dist/vanta.fog.min';
import Navbar from './components/Nav';
import Home from './pages/Home';
import Intro from './pages/Intro';
import OurServices from './pages/OurServices';
import Careers from './pages/Careers';
import Clinic from './pages/Clinic';
import Footer from './pages/Footer';
import Header from './components/Header';
import SliderPhoto from './slider/Slider';
import ThreeDSlider from './slider/ThreeDSlider';
import Slider from './slider/ThreeDSlider';
import ImageSlider from './slider/ImaeSlider';
import ImageSlider2 from './slider/ImageSlider2';
function App() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
 

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
      blurFactor: 0.7,
      speed: 2.3,
      zoom: -2.5,
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);
  
  return (
    <div className="App">
      <div className="vanta-container" ref={vantaRef}></div>
      
        <Header />
        <Intro />
        <OurServices />
        <Careers />
        <Footer />
      
    </div>
  );
}

export default App;