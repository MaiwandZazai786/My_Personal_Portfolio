import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { ImTwitter } from 'react-icons/im';

const Footer = () => {
  return (
    <section id='footer'>
      <div className="logo">
        <img src={logo} alt="" className='footer__logo' />
      </div>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#expeirence">Expeirence</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_black'><BsFacebook/></a>
        <a href="http://instagram.com" target='_black'><BsInstagram/></a>
        <a href="https://twitter.com" target='_black'><ImTwitter/></a>
      </div>


      <div className="footer_copyright">
        <small>
            &copy; Being a Programmer. All rights reserved.
        </small>
      </div>
    </section>
  )
}

export default Footer