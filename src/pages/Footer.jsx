import React, { useState } from 'react'
import logo from "../assets/Kingenic_Logo-03.png";
import style from "../css/footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    return (
        <div className={style['maindiv']}>
            <div className={style['footer-1']}>
                <div className={style['footer-1-grid1']}>
                    <img src={logo} alt="logo" className={style['logo']} />
                </div>
                <div className={style['footer-1-grid2']}>

                    <div className={style['social-icons']}>
                        <p className={style['footer-1-follow']}>Follow us</p>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <div className={style['icons-name']}>
                                <FontAwesomeIcon icon={faLinkedin} className={style['linkedin']} />
                            </div>

                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <div className={style['icons-name']}>
                                <FontAwesomeIcon icon={faTwitter} className={style['linkedin']} />
                            </div>

                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <div className={style['icons-name']}>
                                <FontAwesomeIcon icon={faInstagram} className={style['linkedin']} />
                            </div>

                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <div className={style['icons-name']}>
                                <FontAwesomeIcon icon={faFacebook} className={style['linkedin']} />
                            </div>

                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <div className={style['icons-name']}>
                                <FontAwesomeIcon icon={faYoutube} className={style['linkedin']} />
                            </div>

                        </a>
                    </div>
                </div>
                <div className={style['footer-1-grid3']}>
                    
                        <p className={style['back']} onClick={handleBackToTop}>
                            Back to Top
                        </p>
                  
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className={style['up-arrow']}
                            
                        />
                    
                </div>
            </div>
            <div className={style['footer-2']}>
                <div>
                    <ul className={style['list-items']}>
                        <li className={style['list-item']}>Contact</li>
                        <li className={style['list-item']}>Legal Notice</li>
                        <li className={style['list-item']}>Privacy & data protection</li>
                        <li className={style['list-item']}>Cookies Policy</li>
                        <li className={style['list-item']}>Code of Conduct</li>
                        <li className={style['list-item']}>Our Publication</li>
                        <li className={style['list-item']}>Sitemap</li>
                        <li className={style['list-item']}>Directory</li>
                        {/* Add <br/> if needed */}
                        <div className={style['line-break-container']}>
                            <li className={style['list-item']}>Accessibility:Partial compilance</li>
                            <li className={style['list-item']}>Sanofi Today</li>
                        </div>
                    </ul>
                </div>
                <div className={style['rights']}><p> Kingenic 2004-2023 -All right reserved</p></div>
            </div>
        </div>
    )
}

export default Footer