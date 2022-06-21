import React from 'react';
import "./Footer.style.css";

import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {GrTwitter} from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer-logo'>Jalol</a>

        <ul className="permailinks">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </ul>

        <div className="footer-socials">
          <a href="https://www.facebook.com/"><FaFacebookF/></a>
          <a href="https://www.instagram.com/"><FiInstagram/></a>
          <a href="https://www.twitter.com/"><GrTwitter/></a>
        </div>

        <div className="footer-copyright">
          <small>&copy; Jalol Tutorials. All right reserved</small>
        </div>
    </footer>
  )
}

export default Footer