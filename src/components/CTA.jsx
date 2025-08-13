import React from 'react'

import CV from '../assets/Maiwand_Zazai_-_Full_Stack_Developer.pdf';
const CTA = () => {
  return (
      <div className='cta'>
          <a href={CV} download className='btn'>Download My CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>    
      </div>
  )
}

export default CTA