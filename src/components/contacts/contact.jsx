import React, {useRef} from 'react';
import "./contact.style.css";
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {FaTelegramPlane} from 'react-icons/fa';

import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p5ss0cs', 'template_dmjgthb', form.current, 'qulPBZBJfIgFtAXkU')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
            <div className="contact-options">
              <article className="contact-option">
                <MdOutlineEmail className='contact-option-icon'/>
                <h4>Email</h4>
                <h5>jaloliddin9917@gmail.com</h5>
                <a href="mailto:jaloliddin9917@gmail.com" target="_blank">Send a message</a>
              </article>
              <article className="contact-option">
                <RiMessengerLine className='contact-option-icon'/>
                <h4>Messenger</h4>
                <h5>jaloliddinruxillayev</h5>
                <a href="https://m.me/jaloliddin.ruxillayev" target="_blank">Send a message</a>
              </article>
              <article className="contact-option">
                <FaTelegramPlane className='contact-option-icon'/>
                <h4>Telegram</h4>
                <h5>+998930829917</h5>
                <a href="https://t.me/jalol9917" target="_blank">Send a message</a>
              </article>
            </div>  
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Your Message'></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;