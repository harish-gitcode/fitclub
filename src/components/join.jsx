import React,{useRef}from 'react';
import './join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3550vbi', 'template_fxrjvjl', form.current, '0J2NMpLqneco2HXIi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <div className="Join" id="join-us" style={{ padding: '1.5rem' }}>
        <div class="left-j">
        <hr/>
            <div>
                <span className="stroke-text">Ready to </span>
                <span>level up </span>
            </div>
            <div>
                <span>your body</span>
                <span className="stroke-text">with us?</span>
            </div>
        </div>
        <div class="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email'/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join;