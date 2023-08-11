import React, { useState } from 'react';
import './imageslider2.css'; // Make sure to adjust the path to your CSS file
import photoweb1 from "../assets/w2.webp";
import photoweb2 from "../assets/w3.webp";
import photoweb3 from "../assets/mac.webp";
import photo5 from "../assets/wen4.webp";
import photo6 from "../assets/web6.webp";
import photo7 from "../assets/web5.webp";
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Assuming 6 cards in total
    document.querySelector(".wrapper").classList.remove("looped");
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
    document.querySelector(".wrapper").classList.add("looped");
  };
  return (
    <div className="wrapper">
      <ul className="carousel">
        <li className="card">
          <div className='numbers'><h2 className='number-1'>01</h2></div>
          <div className="img">
            <img src={photoweb1} alt="web1" draggable="false" />
          </div>
          <h2>Blanche Pearson</h2>

        </li>
        <li className="card">
          <div className='numbers'><h2 className='number-1'>02</h2></div>
          <div className="img">
            <img src={photoweb2} alt="web1" draggable="false" />
          </div>
          <h2>Joenas Brauers</h2>

        </li>
        <li className="card">
          <div className='numbers'><h2 className='number-1'>03</h2></div>
          <div className="img">
            <img src={photoweb3} alt="web1" draggable="false" />
          </div>
          <h2>Lariach French</h2>

        </li>
        <li className="card">
          <div className='numbers'><h2 className='number-1'>04</h2></div>
          <div className="img">
            <img src={photo5} alt="web1" draggable="false" />
          </div>
          <h2>James Khosravi</h2>

        </li>
        <li className="card">
          <div className='numbers'><h2 className='number-1'>05</h2></div>
          <div className="img">
            <img src={photo6} alt="web1" draggable="false" />
          </div>
          <h2>Kristina Zasiadko</h2>

        </li>
        <li className="card">
          <div className='numbers'><h2 className='number-1'>06</h2></div>
          <div className="img">
            <img src={photo7} alt="web1" draggable="false" />
          </div>
          <h2>Donald Horton</h2>
        </li>
      </ul>
      <div
      className="loop-indicator"
      style={{
        left: `calc(${currentIndex * (100 / 6)}% - 1px)` // Adjust if needed
      }}
    ></div>
      {/* <i id="left" className="fa-solid fa-angle-left" onClick={prevSlide}></i>
      <i id="right" className="fa-solid fa-angle-right" onClick={nextSlide}></i> */}
    </div>
  );
};

export default ImageSlider;