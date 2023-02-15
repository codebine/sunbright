/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../CSS/Main.css'

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3n2ez6p', 'template_ylzduoh', form.current, 'busLLDqzt7_enYw8d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='cntpage'>
      <h1 className='my-5'>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="container">
          <div className="row d-flex justify-content-center align-item-center">
            <div className='col-sm-4'>
              <div className='row'>
                <div className="mb-3">
                  <label  className="form-label" >Your Name</label>
                  <input type="text" className="form-control" name="user_name" ></input>
                </div>
                <div className="mb-3">
                  <label  className="form-label">Email address</label>
                  <input type="email" className="form-control" name="user_email" ></input>
                  
                </div>
                <div className="mb-3">
                  <label  className="form-label">Message</label>
                  <textarea className="form-control" rows="3" name="message"></textarea>
                </div>
                <button type="submit"  value="Send" className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className='mt-4'>
        
        <div className="col-sm-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243686.23795416966!2d78.4069584474576!3d17.38309202313335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9748b97beacd%3A0x60355862ca431bb5!2sEenadu%20Office!5e0!3m2!1sen!2sin!4v1673693964104!5m2!1sen!2sin" width="100%" height="400" ></iframe>
        </div>
      </div>


    </div>
  )
}

export default Contactus