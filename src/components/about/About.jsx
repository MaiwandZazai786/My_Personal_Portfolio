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
            My name is Maiwand Zazai. I have over 3 years of experience at
            Roshan Telecommunication, where I worked on more than 10 projects
            and successfully completed all of them. After that, I spent 6 months
            at Fidabo Holding in Italy, contributing to software development
            initiatives. In addition, I have worked extensively as a freelancer,
            delivering high-quality solutions to a variety of clients. I am
            currently freelancing while actively seeking a permanent position as
            a Full-Stack Developer, where I can apply my skills to build
            impactful, scalable applications
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
