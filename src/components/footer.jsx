import React from 'react';
import './footer.css';
import Github from '../assets/github.png'
import insta from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import Logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div class="footer">
                <div class="social-links">


                    <img src={Github} alt="" />
                    <img src={insta} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>

                <div class="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div class="blur footer-blur-1"></div>
            <div class="blur footer-blur-2"></div>
        </div>
    )
}

export default Footer