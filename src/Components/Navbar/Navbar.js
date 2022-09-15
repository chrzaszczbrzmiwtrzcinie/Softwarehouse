import React  from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
      </NavLink>
      <button 
        className="navbar-toggler"
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <li className="nav-item active">
              <NavLink className="nav-link a" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link a" to="/contact" exact>
                <i 
                className="far fa-address-book">
                </i>Contact
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link a" to="/about" exact>
                <i 
                className="far fa-clone">
                </i>About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link a" to="/testimonial" exact>
                <i 
                className="far fa-chart-bar">
                </i>Testimonial
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;