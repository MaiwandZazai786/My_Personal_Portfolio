import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'



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
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+2 Years Wroking</small>
            </article>
             <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Happy Clients</h5>
              <small>8+ Clients</small>
            </article>
             <article className='about__card'>
              <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
           <p>
          My Name is Maiwand Zazai, i have been Wroking With Roshan Telecomenication for 2 years 
          i have Worked on more than 10 porjects and completed 8 of them Successfully. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About