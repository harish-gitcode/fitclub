import React from 'react';
import './Reason.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';
import tick from '../assets/tick.png';

const Reason = () => {
  return (
    <div className="Reason" id="reason" style={{ padding: '1.5rem' }}>
      <div className="left-r">
        <img src={image1} alt=""></img>
        <img src={image2} alt=""></img>
        <img src={image3} alt=""></img>
        <img src={image4} alt=""></img>
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose Us?</span>
        </div>
        <div className='details-r'>
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 50+ EXPERT TRANIER</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE </span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span id='span'>OUR PARTNERS</span>
        <div class="patners">
          <img src={nb} alt=""></img>
          <img src={adidas} alt=""></img>
          <img src={nike} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Reason
