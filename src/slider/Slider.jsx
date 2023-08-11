import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Images from "./Images";
import "./slider.css";
import arrow1 from "../assets/Arrow 11.png";
import arrow2 from "../assets/Arrow 9.png";

const SliderPhoto = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: (
          <div className='arrow-slider'>
            <div className="next-slick-arrow">
                <img src={arrow2}alt="arrow1"className='arrow-1'/>
                 </div>
          </div>
        ),
        prevArrow: (
          <div className='arrow-slider'>
            <div className="prev-slick-arrow"> <img src={arrow1}alt="arrow1"className='arrow-2'/> </div>
          </div>
        ),
      };
  return (
   <>
   <div className="content">
      <div className="container">
        <Slider {...settings}>
          {Images.map((item) => (
            <div key={item.id} className='card'>
              <img src={item.src} alt={item.alt} className="img" />
              <h2 className="title">{item.title}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
   </>
  )
}

export default SliderPhoto;