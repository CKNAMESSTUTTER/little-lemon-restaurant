import React from 'react';
import Logo from '../images/Logo .svg';

const Footer = () => {
  return (
    <footer>

        <div className="company-info">
          <img src={Logo} alt="Logo" />
          <p>
            A cozy Italian restaurant with authentic flavors for an unforgettable dining experience that feels like home.
          </p>
        </div>

        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservation</a></li>
            <li><a href="/">Delivery</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>Address: <br /> 653, 3rd Avenue, Brooklyn, New York</li>
            <li>Telephone: <br /> 646-769-5844</li>
            <li>Email: <br /> little@lemon.com</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Social Media Links</h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Twitter</a></li>
          </ul>
        </div>

    </footer>
  );
};

export default Footer;


