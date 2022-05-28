import React from 'react'
import './../../Components/CSS/Footer.css';

const Footer = () => {
  return (
  <div className="container">
<footer>
    <div className='footer'>
    <h2>JarlTeam</h2>
    <div className='footerlist'>
        <ul>
            <li>
                <p>Services</p>
            </li>
            <li>
                <p>Contact</p>
            </li>
        </ul>
        <ul>
            <li>
                <p>About</p>
            </li>
            <li>
                <p>Terms</p>
            </li>
        </ul>
        <ul>
            <li>
                <p>Login</p>
            </li>
            <li>
                <p>Register</p>
            </li>
        </ul>
    </div>
    </div>
</footer>
    
  </div>
  )
}
export default Footer;