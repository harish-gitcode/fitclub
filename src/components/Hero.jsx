import React from 'react';
import './Hero.css';
import Header from './Header';
import heroImg from '../assets/hero_image.png'
import heroImgback from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calorie from '../assets/calories.png'

import {motion} from 'framer-motion';
const Hero = () => {
  const transition={type:'spring',duration : 3};
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="hero" id="home">
    <div class="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* for the best add*/}
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile?"178px":"238px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          >

          </motion.div>
          <span>
            The Best Fitness Club in the town
          </span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In Here we will you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>

        </div>
        {/* widgets */}
        <div className="figures">
          <div>
            <span>+50</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+897</span>
            <span>members joined</span>
          </div>
          <div>
            <span>34</span>
            <span>fitness programs</span>
          </div>

        </div>
        {/* hero button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>


      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div className="heart-rate"
          initial={{right:'-1rem'}}
          whileInView={{right:"4rem"}}
          transition={transition}
          >
          <img src={Heart} alt=""></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={heroImg} className="heroImg" alt=""></img>
        <img src={heroImgback} className="heroImgback" alt=""></img>
        <div className="calories">
          <img src={Calorie} alt=""></img>
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero