import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "../CTA";
import ME from "../../assets/me2-removebg-preview.png";
import HeaderSocials from "../HeaderSocials";

const Header = () => {
  const text = "Maiwand Zazai";

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="typing-cursor">
          {text}
          <span className="cursor"></span>
        </h1>

        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="ME" style={{ width: "400px", height: "450px" }} />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
