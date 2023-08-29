import React from 'react'
import './services.css'
import {TbChecks} from 'react-icons/tb'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offre</h5>
      <h2>Services</h2>

      <div className="container container__services">
        <article className="services">
          <div className="servece__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='servece__list'>
            <li><TbChecks className='servece__list-icon' />
            <p>Animated Interfaces Demo</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Animated UI</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Banners</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Digital Products</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Multi Platform Guides & Slices</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Website Design</p>
            </li>

          </ul>
        </article>
  {/*End of UL/UX Section*/}

         <article className="services">
          <div className="servece__head">
            <h3>Web Development</h3>
          </div>
          <ul className='servece__list'>
            <li><TbChecks className='servece__list-icon' />
            <p>Web Development with HTML, CSS, JavaScriot</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Web Development with PHP, Laravel</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Web Development with React</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Web Development with Vue</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Web Development with Tailwind</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Web Development with Bootstrap</p>
            </li>
             <li><TbChecks className='servece__list-icon' />
            <p>Web Development with Filament PHP</p>
            </li>

          </ul>
        </article>



         <article className="services">
          <div className="servece__head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className='servece__list'>
            <li><TbChecks className='servece__list-icon' />
            <p>IOS Development</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Android Development</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Mobile App Development with Quesar</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Mobile App with Flutter</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Desktop App with Java</p>
            </li>
              <li><TbChecks className='servece__list-icon' />
            <p>Desktop MIS with Java</p>
            </li>

          </ul>
        </article>



    </div>
    </section>
  )
}

export default Services