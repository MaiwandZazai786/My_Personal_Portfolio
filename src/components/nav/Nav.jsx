import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { RiContactsBookUploadFill } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "#", offset: document.querySelector("header")?.offsetTop || 0 },
        {
          id: "#about",
          offset: document.querySelector("#about")?.offsetTop || 0,
        },
        {
          id: "#experience",
          offset: document.querySelector("#experience")?.offsetTop || 0,
        },
        {
          id: "#services",
          offset: document.querySelector("#services")?.offsetTop || 0,
        },
        {
          id: "#contact",
          offset: document.querySelector("#contact")?.offsetTop || 0,
        },
      ];

      const scrollPos = window.scrollY + 200; // Trigger active earlier

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].offset) {
          setActiveNav(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        title="Home"
      >
        <AiTwotoneHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        title="About"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        title="Experience"
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        title="Services"
      >
        <RiServiceFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        title="Contact"
      >
        <RiContactsBookUploadFill />
      </a>
    </nav>
  );
};

export default Nav;
