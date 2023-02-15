/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import '../CSS/Footer.css'
import logo from '../Images/logo11.png'
import { Link } from 'react-router-dom'
const Footer = () =>

  <div className='footer'>
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-sm-3 text-start">
            <img src={logo} width="180px"></img>
            <ul className="list-unstyled d-flex mt-2">
              <li><a class="btn btn-square btn-outline-secondary rounded-circle me-2" ><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a class="btn btn-square btn-outline-secondary rounded-circle me-2"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a class="btn btn-square btn-outline-secondary rounded-circle me-2"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a class="btn btn-square btn-outline-secondary rounded-circle me-2"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>


          <div className="col-md-9 text-end ">
            <div className="row d-flex justify-content-center align-items-center">
              <ul className="list-styled">
                 <Link className='btn btn-link' to="#">Privacy</Link>
                 <Link className='btn btn-link' to="/Careers">Careers</Link>
                 <Link className='btn btn-link' to="#">Terms&Condition</Link>
                 <Link className='btn btn-link' to="/Contactus">Contact us</Link>
                 <Link className='btn btn-link' to="/Aboutus">About us</Link>
                 <Link className='btn btn-link' to="#">Industries</Link>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a > SunBrightSoftwareSolutions.com</a>
      </div>

    </footer>
  </div>

export default Footer