import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "../CTA";
import ME from "../../assets/me2-removebg-preview.png";
import HeaderSocials from "../HeaderSocials";

const Header = () => {
  const text = "Maiwand Zazai";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 100 : 150;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="typing-cursor">
          {displayText}
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
