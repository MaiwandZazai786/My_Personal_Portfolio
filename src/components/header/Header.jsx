import React from 'react';
import './header.css'; 
import CTA from '../CTA';
import ME from '../../assets/Maiii-removebg-preview.png';
import HeaderSocials from '../HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Maiwand Zazai</h1>

        <h5 className="text-light">
          Fullstuck Developer
        </h5>
        <CTA />
      <HeaderSocials />
        <div className="me">
          <img src={ME} alt="ME"  />  
        </div>
        <a href="#contact" className='scroll__down'>Scroll Dwon</a>
      </div>  
    </header>
  )
}

export default Header