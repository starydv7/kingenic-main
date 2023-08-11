import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import fog from 'vanta/dist/vanta.fog.min';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css';
import logo from "../assets/Kingenic_Logo-03.png";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import down from "../assets/darrow.png";
import logo1 from "../assets/black (1).png";
import logo2 from "../assets/black (2).png";
import menu from "../assets/menu.png";

const Header = () => {
  return (
    <>
    
      <div className="main">
        <div className="navbar">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none' }}>
             <img src={logo1} alt="smalllogo"className='logo1'/>
            </Link>
          </div>
          <div className="hema">
            <Link to="/">
              <img src={logo2}alt="logo2"className='logo2'/>
            </Link>
          </div>
          <div className="search">
            <FontAwesomeIcon icon={faSearch} className='searchbar' />
          </div>
          {/* <div className="menu">
            <img src={menu}alt="menubar"className='menubar'/>
          </div> */}
          <div className='menu-text'><img src={menu}alt="menubar"className='menubar'/></div>
          <p className='menu-text1'>MENU</p>
        </div>
        <div className="title-main">
          <p className='rethink-1'>Rethinking Nutrition 
          
          </p>
          <p className='rethink-2'>Rethinking Tomorrow</p>
          <p className='rethink-3'>
            From formula to a finish product
          </p>
          <p className='rethink-4'>
            we have got you covered
          </p>
        </div>
        <div className='progressbar'>
          <ProgressBar />
          </div>
        
        <div className="arrow-button-container">
          <Link to="/expertise">
            <img src={down}alt="downarrow"className="arrow-icon" />
          {/* <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" /> */}
          </Link>
        </div>
        
        <div className='press'>
          <div className='press-1'><p className='press-title'>Press Release</p></div>
          <div className='press-2'><p> 2022-08-23 &nbsp;&nbsp;&nbsp;&nbsp;Kingenic launched collagen republic in United States in distribution partnership with...</p></div>
        
        </div>
      </div>
      
    </>
  );
};

export default Header;