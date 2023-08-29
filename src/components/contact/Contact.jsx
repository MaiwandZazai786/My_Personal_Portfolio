import React from 'react'
import './contact.css';
import { BiMailSend } from 'react-icons/bi';
import { SiMessenger } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
      
    emailjs.sendForm('service_9bwyaud', 'template_shiexpw', form.current, 'yyk2etnw-EY7Eami8')
      e.target.reset(); 
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>



      <div className="container contact__container">
          <div className="contact__options">
          <article className='contact_option'>
            <BiMailSend className='contact_option-icon' />
            <h4>Email</h4>
            <h5>Maiwand.Zazai77@gamil.com</h5>
            <a href="mailto:Maiwand.Zazai77@gmail.com" target='_blank'>Send Mail</a>
          </article>

          <article className='contact_option'>
            <SiMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Maiwand Zazai</h5>
            <a href="http://m.me/pakitawal.zazai.9" target='_blank'>Chat With Me</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>Maiwand Zazai</h5>
            <a href="https://wa.me/+93799999513" target='_blank'>WhatsApp Me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' autoComplete='off' required/>
          <input type="email" name="email" id="email" placeholder='Your Email' autoComplete='off' required />
          <textarea name="message" id="" placeholder='Your Message' rows="7" autoComplete='off' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact