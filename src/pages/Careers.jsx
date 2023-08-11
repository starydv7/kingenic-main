import React from 'react'
import style from "../css/career.module.css";
import photo from "../assets/Arrow 9.png";
const Careers = () => {
  return (
    <div className={style['maindiv']}>
     <div className={style['container']}>
        <p className={style['container-text']}>
            Do you want to be consider for future openings?
        </p>
        <p className={style['text-2']}>If you believe that you have what it takes
            to be part of highly successful team<br/>
            and you share our commitment to improve patient care,
            please send us your <br/> <p className={style['text-3']}>resume.</p>
        </p>
        <div className={style['button']}>
            <div className={style['arrow']}>
                <img src={photo}alt="arrow" className={style['arrow-img']}/>
            </div>
            <div className={style['button-text']}>
                Send us your resume
            </div>
        </div>
     </div>
    </div>
  )
}

export default Careers;