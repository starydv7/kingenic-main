// Intro.js
import React, { useEffect, useState } from 'react';
import style from '../css/intro.module.css';
import photo1 from "../assets/man-laughin.png";
import arrow from "../assets/forward-arrow.png";
import exp from "../assets/experiment.png";
import baby from "../assets/baby.png";
import smile from "../assets/smiling-woman 1.png";
import photo3 from "../assets/expertise-3.jpg";
import photo4 from "../assets/expertise-4.jpg";
const Intro = () => {
    
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percentage = (scrollTop / totalScroll) * 100;
            setScrollPercentage(percentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const gradientColors = [
        'rgb(255, 127, 80)',
        'rgb(255, 215, 0)',
        'rgb(32, 178, 170)'
      ];
    
      const updateGradientColor = () => {
        const scrollPercent = scrollPercentage / 100;
        const colorIndex = Math.min(Math.floor(scrollPercent * gradientColors.length), gradientColors.length - 1);
        const color = gradientColors[colorIndex];
        document.documentElement.style.setProperty('--gradient-color-1', color);
      };
    
      useEffect(() => {
        // ... Your existing scroll and event listeners ...
    
        return () => {
          // ... Your existing cleanup ...
          document.documentElement.style.removeProperty('--gradient-color-1');
        };
      }, [scrollPercentage]);
    
    return (
        <>
        <div className={style['container']}></div>
        <div className={style['maindiv']}>
            <div className={style['progress-bar']} style={{ width: `${scrollPercentage}%` }}></div>
            <div className={style['grid-item-1']}></div>
            <div className={style['grid-item-2']}>
                <p className={style['transform-text']}>
                    Transforming 
                </p>
                <p className={style['transform-text1']}>Nutrition</p>
            </div>
            <div className={`${style['grid-item']} ${style['second-row']}`}>
                {/* <img src={photo1} alt="man laughing" className={style['image-1']} />
                <img src={baby} alt="man laughing" className={style['image-baby']} /> */}
            </div>
        </div>

        <div className={style['grid-grid']}>
            <div className={style['grid-grid1']}>
            <div className={`${style['grid-item-3']} ${style['intro-row']}`}>
                <ul>
                    <li>
                        Intro
                    </li>
                    <li>
                        Expertise
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Brands
                    </li>
                    <li>
                        Intro
                    </li>
                    <li>
                        Expertise
                    </li>
                </ul>
            </div>
            </div>
            <div className={style['grid-grid2']}>
            <div className={`${style['grid-item-4']} ${style['intro-row']}`}>
                <div className={style['intro']}>
                    <p className={style['our-intro']}>Our Intro</p>
                    <div className={style['horizontal-line']}></div>
                </div>
                <p className={style['intro-detail']}>Kingenic is a multifunctional nutrition solution partner with key focus on  end-to-end solutions with highest quality, affordable oral nutrition supplements (ONS).</p>
            </div>
            </div>
            <div className={style['grid-grid3']}>
            <div className={style['intro']}>
                    <p className={style['our-intro']}>We Develop & Manufacture</p>
                    <div className={style['horizontal-line-1']}></div>

                </div>
            <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>01</span>
                    <span className={style['content-text']}>Nutraceuticals</span>
                    <span className={style['arrow-span-1']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>02</span>
                    <span className={style['content-text']}>Dietary Supplements</span>
                    <span className={style['arrow-span-2']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>03</span>
                    <span className={style['content-text']}>Food for special dietary use</span>
                    <span className={style['arrow-span-3']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>04</span>
                    <span className={style['content-text']}>Food for special medical <br/> purpose</span>
                    <span className={style['arrow-span-4']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>05</span>
                    <span className={style['content-text']}>Fast Moving Consumer Goods (Food)</span>
                    <span className={style['arrow-span-5']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
            </div>
            <div className={style['grid-grid4']}>
                <img src={photo1} alt="img-2" className={style['grid-last-img']}/>
            </div>
        </div>
        <div className={style["last-grid"]}>
            <div className={style["last-grid1"]}>
                <img src={photo3}alt="expertise3"className={style['expertise3']}/>
            </div>
            <div className={style["last-grid2"]}></div>
            <div className={style["last-grid3"]}>
                <img src={photo4}alt="expertise4"className={style["expertise4"]}/>
            </div>
            <div className={style["last-grid4"]}></div>
        </div>
        </>
    );
};

export default Intro;

{/* <div className={`${style['grid-item-3']} ${style['intro-row']}`}>
                <ul>
                    <li>
                        Intro
                    </li>
                    <li>
                        Expertise
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Brands
                    </li>
                    <li>
                        Intro
                    </li>
                    <li>
                        Expertise
                    </li>
                </ul>
            </div>
            <div className={`${style['grid-item-4']} ${style['intro-row']}`}>
                <div className={style['intro']}>
                    <p className={style['our-intro']}>Our Intro</p>
                    <div className={style['horizontal-line']}></div>
                </div>
                <p className={style['intro-detail']}>Kingenic is a multifunctional nutrition solution partner with key focus on  end-to-end solutions with highest quality, affordable oral nutrition supplements (ONS).</p>
            </div>
            <div className={`${style['grid-item-5']} ${style['third-row']}`}>
                <div className={style['intro']}>
                    <p className={style['our-intro']}>We Develop & Manufacture</p>
                    <div className={style['horizontal-line-1']}></div>

                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>01</span>
                    <span className={style['content-text']}>Nutraceuticals</span>
                    <span className={style['arrow-span-1']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>02</span>
                    <span className={style['content-text']}>Dietary Supplements</span>
                    <span className={style['arrow-span-2']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>03</span>
                    <span className={style['content-text']}>Food for special dietary use</span>
                    <span className={style['arrow-span-3']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>04</span>
                    <span className={style['content-text']}>Food for special medical <br/> purpose</span>
                    <span className={style['arrow-span-4']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
                <div className={style['develop-manufacture']}>
                    <span className={style['number-text']}>05</span>
                    <span className={style['content-text']}>Fast Moving Consumer Goods (Food)</span>
                    <span className={style['arrow-span-5']}><img src={arrow} alt="arrow" className={style['image-2']} /></span>
                </div>
            </div> */}
