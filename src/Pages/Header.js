/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../CSS/Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../Images/logo11.png'


const Header = () => {
  return (
    <div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary header">
  <div className="container-fluid">
    <a className="navbar-brand"><a className="navbar-brand" ><img src={logo} width="180px"></img></a></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/"  >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Aboutus">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contactus">Contact us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Careers">Careers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Industries">Industries</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header