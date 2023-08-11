import React, { useState, useEffect } from 'react';
import './imageslider.css'; // Import your CSS file

const ImageSlider = () => {
  const [nowLi, setNowLi] = useState(0);
  const visibleSlides = 4;
  const li_count = 7; // Update with the correct number of li elements

  useEffect(() => {
    const sliderWidth = document.querySelector('.slider').clientWidth;
    const sliderUl = document.querySelector('.slider ul');
    sliderUl.style.width = `${li_count * sliderWidth}px`;

    const sliderLi = document.querySelectorAll('.slider li');
    sliderLi.forEach((li) => {
      li.style.width = `${sliderWidth / visibleSlides}px`;
    });

    const timer = setInterval(perpic, 5000);

    return () => clearInterval(timer);
  }, []);

  const sliderChange = () => {
    const sliderWidth = document.querySelector('.slider').clientWidth;
    const sliderUl = document.querySelector('.slider ul');
    sliderUl.style.left = `${-nowLi * (sliderWidth / visibleSlides)}px`;
  };

  const perpic = () => {
    setNowLi((prevNowLi) => (prevNowLi + 1 >= li_count ? 0 : prevNowLi + 1));
  };

  const handleArrowClick = (direction) => {
    const nextLi = direction === 'next' ? nowLi + 1 : nowLi - 1;
    setNowLi(nextLi >= li_count ? 0 : nextLi < 0 ? li_count - 1 : nextLi);
    sliderChange();
  };

  return (
    <div>
      <div className="slider">
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
          <li>five</li>
          <li>six</li>
          <li>seven</li>
        </ul>
      </div>
      <div className="arrowControls">
        <button onClick={() => handleArrowClick('prev')}>Previous</button>
        <button onClick={() => handleArrowClick('next')}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
