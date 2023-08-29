import React from 'react'
import './experience.css'
import {BiSolidBadgeCheck} from 'react-icons/bi'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
              <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
               <h4>CSS</h4>
              <small className='text-light'>Experienced</small>

              </div>
           
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>JavaScript</h4>
              <small className='text-light text'>Experienced</small>
             </div>
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Vue.js</h4>
              <small className='text-light text'>Experienced</small>
              </div>
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>React.js</h4>
              <small className='text-light text'>Experienced</small>
              </div>
              </article>
               <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>Tailwind</h4>
              <small className='text-light text'>Experienced</small>
              </div>
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>Bootstrap</h4>
              <small className='text-light text'>Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
         <div className="experience__backend">
          
              <h3>BackEnd Development</h3>
          <div className="experience__content">
              <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>PHP</h4>
              <small className='text-light text'>Experienced</small>
             </div>
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
              <small className='text-light text '>Experienced</small>
              </div>
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>JAVA</h4>
              <small className='text-light text'>Experienced</small>
              </div>
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>MySQL</h4>
              <small className='text-light text'>Experienced</small>
              </div>
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
                <div>
                 <h4>Oracle</h4>
              <small className='text-light text'>Experienced</small>
                </div>
              </article>
               <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>Node.js</h4>
              <small className='text-light text'>Experienced</small>
             </div>
            </article>
             <article className='experience_details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Filament</h4>
              <small className='text-light text'>Experienced</small>
              </div>
              </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
