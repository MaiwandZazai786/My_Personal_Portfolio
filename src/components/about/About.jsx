import React from "react";
import "./about.css";
import ME from "../../assets/new_photo.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me!</h2>
      <div className="container about__conatainer">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+3 Years Wroking</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Team Collaborations</h5>
              <small>50+ Colleagues Worked With</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I am Maiwand Zazai, a Full-Stack Developer with over 3 years of
            experience at Roshan Telecommunication, where I successfully
            delivered more than 10 projects from start to finish. I then spent 6
            months with Fidabo Holding in Italy, contributing to innovative
            software development initiatives. Alongside my professional roles, I
            have built a strong freelance career, providing high-quality,
            tailored solutions to diverse clients. I am currently freelancing
            while actively seeking a permanent Full-Stack Developer position,
            where I can leverage my expertise to build impactful, scalable
            applications.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
