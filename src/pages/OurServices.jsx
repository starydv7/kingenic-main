import React, { useState } from 'react';
import style from "../css/services2.module.css";
import arrow from "../assets/Arrow 9.png";
import photo1 from "../assets/Scientist  1.png";
import photo2 from "../assets/image 13.png";
import photo3 from "../assets/image 14.png";
import photo4 from "../assets/experiment.png";
import photo5 from "../assets/smiling-woman 1.png";
import backarrow from "../assets/Arrow 11.png";
import { Carousel } from '@trendyol-js/react-carousel';
import Slider from '../slider/Slider';
import SliderPhoto from '../slider/Slider';
import arrow5 from "../assets/forward-arrow.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import photoweb from "../assets/mac.webp";
import photoweb1 from "../assets/w2.webp";
import photoweb2 from "../assets/w3.webp";
import ImageSlider from '../slider/ImageSlider2';

const OurServices = () => {
    return (
        <>
        <div className={style['maindiv']}>
        <div className={style['container1']}>
        <div className={style['grid-1']}>
            
        </div>
        <div className={style['grid-2']}>
        <div className={style['services-intro']}>
                <h2>Our Services</h2>
            </div>
        </div>
        <div className={style['grid-3']}>
            <div className={style['grid-3-button']}>
                <div className={style['arrow-container']}>

                <FontAwesomeIcon icon={faArrowRight} className={`${style['forward-arrow']} custom-color`}/>
                </div>
                <div className={style['product-text']}>
                    <p className={style['product-text1']}>Our Products</p>
                </div>
            </div>
        </div>
        

        </div>
        <div className={style['container2']}>
         <div className={style['container2-grid1']}></div>
         <div className={style['container2-grid2']}>
            <p className={style['container2-text1']}>
                A flexible manufacturer 
            </p>
            <p className={style['container2-text-2']}>that fits your needs</p>
         </div>
         <div className={style['container2-grid3']}>
            <h3 className={style['container2-text2']}>
            Kingenic is your ideal turnkey partner to either develop a new custom formula, match a benchmark, leverage an existing formula from our private label library or pick a ready brand for distribution, we have everything that you need to expand your business vertical
            </h3>
         </div>
        </div>
        <div className={style['container-arrow']}>
            <div className={style['arrow-control-left']}>
         
          <FontAwesomeIcon icon={faArrowLeft} className={style['left-arrow']}/>
        </div>
            <div className={style['arrow-control-right']}>
           
          <FontAwesomeIcon icon={faArrowRight} className={style['right-arrow']} />
        
            </div>
        </div>
        <div>
            <ImageSlider/>
        </div>
        {/* <div className={style['image-slider']}>
           <div className={style['image-slider1']}>
            <div className={style['img-card1']}>
                <div className={style['img-container']}>
                    <div className={style['numbers']}>
                        <span className={style['number-span-text']}>01</span></div>
                    <div className={style['img-div']}>
                        <img src={photo1}alt="photo1"className={style['img-1']}/>
                    </div>
                    <div className={style['img-text']}>
                        <p className={style['img-text1']}>
                            Custom Formula <br/>
                            Development
                        
                        
                        </p>
                    </div>
                </div>
            </div>
           </div>
           <div className={style['image-slider2']}>
           <div className={style['img-card2']}>
           <div className={style['img-container']}>
                    <div className={style['numbers']}>
                        <span className={style['number-span-text']}>01</span></div>
                    <div className={style['img-div']}>
                        <img src={photoweb2}alt="photo1"className={style['img-1']}/>
                    </div>
                    <div className={style['img-text']}>
                        <p className={style['img-text1']}>
                            Private Label <br/> Manufacturing
                            </p>
                    </div>
                </div>
           </div>
           </div>
           <div className={style['image-slider3']}>
           <div className={style['img-card3']}>
           <div className={style['img-container']}>
                    <div className={style['numbers']}>
                        <span className={style['number-span-text']}>01</span></div>
                    <div className={style['img-div']}>
                        <img src={photoweb}alt="photo1"className={style['img-1']}/>
                    </div>
                    <div className={style['img-text']}>
                        <p className={style['img-text1']}>Contract <br/>Manufacturing</p>
                    </div>
                </div>
           </div>
           </div>
           <div className={style['image-slider4']}>
           <div className={style['img-card4']}>
           <div className={style['img-container']}>
                    <div className={style['numbers']}>
                        <span className={style['number-span-text']}>01</span></div>
                    <div className={style['img-div']}>
                        <img src={photoweb}alt="photo1"className={style['img-1']}/>
                    </div>
                    <div className={style['img-text']}>
                        <p className={style['img-text1']}>Food Clinical<br/>
                        Trails Service</p>
                    </div>
                </div>
           </div>
           </div>
        </div> */}
        </div>
        </>
    );
}

export default OurServices;


// <div className={style['maindiv']}>
          
//             <div className={style['our-services']}>
//                 <div className={style['services']}>
//                     <p className={style['services-text']}>Our Service</p>
//                 </div>
//                 <div className={style['our-product']}>
//                     <div className={style['our-product-button']}>
//                         <div className={style['our-product-arrow']}>
//                             <img src={arrow} alt="arrow" className={style['arrow']} />
//                         </div>
//                         <span><p className={style['our-product-text-2']}>Our Products</p></span>

//                     </div>

//                 </div>

//             </div>
//             <div className={style['line']}></div>
//             <div className={style['service-2']}>
//                 <div className={style['service-2-text-1']}>
//                     <p className={style['service-2-text']}>A flexible manufacturer that fits your needs</p>
//                 </div>
//                 <div className={style['service-2-text-2']}>
//                     <p className={style['service-2-text2']}>Kingenic is your ideal turnkey partner to either develop a new custom formula, match a benchmark, leverage an existing formula from our private label library or pick a ready brand for distribution, we have everything that you need to expand your business vertical</p>
//                 </div>

//             </div>
            
//             <div className={style['arrow-slider']}>
//                 <div className={style['image-container2']}> </div>
//             </div>
//             <div className={style['image slider']}>
//                 <div className={style['image-container']}> </div>
//             </div>

//             {/* <div className={style['craousal']}> */}
//             <div className={style['slider-part']}>
//                 <SliderPhoto/>
//             </div>

//         </div>