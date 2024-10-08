import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

function footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-right">
            <h2>CONNECT WITH US</h2>
            <ul>
                <li>+94 71 369 0673</li>
                <li>contact@foodwagon.com</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-left">
            <img className='logo' src={assets.logo} alt="" />
            <p>Indulge in a blend of classic and modern flavors, thoughtfully prepared with the freshest ingredients to create unforgettable meals</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ foodwagon.com - All Right Reserved.</p>
    </div>
  )
}

export default footer
