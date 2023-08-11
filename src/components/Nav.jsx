import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import fog from 'vanta/dist/vanta.fog.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from '../css/nav.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    vantaEffect.current = fog({
      THREE,
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 100.00,
      minWidth: 100.00,
      highlightColor: 0xf2f2f2,
      midtoneColor: 0xffe1e1,
      lowlightColor: 0x96a4ff,
      baseColor: 0xffffff,
      blurFactor: 0.90,
      speed: 1.30,
      zoom: 0.50
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <nav className={styles.navbar} ref={vantaRef}>
      <div className={styles.navBrand}>Your Logo</div>
      <div className={styles.menuIcon} onClick={handleMenuClick}>
        <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <div className={`${styles.navLinks} ${showMenu ? styles.showMenu : ''}`}>
      <Link to="/" onClick={handleMenuClick}>Home</Link>
          <Link to="/intro" onClick={handleMenuClick}>Intro</Link>
          <Link to="/service" onClick={handleMenuClick}>Our Service</Link>
          <Link to="/clinic" onClick={handleMenuClick}> Clinic</Link>
          <Link to="/career" onClick={handleMenuClick}>Career</Link>
          <Link to="/footer" onClick={handleMenuClick}> Footer</Link>
      </div>
    </nav>
     </>
  );
};

export default Navbar;
