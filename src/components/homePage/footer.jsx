import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer>


      {/* Social Media Icons */}
      <div className="social-icons">
        <a className="social-icons-great" href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
        <a className="social-icons-great" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a className="social-icons-great" href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className="social-icons-great" href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
        <a className="social-icons-great" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
      </div>
      
      <div className="footer-section">
        {/* Product Links */}

        <div className="line1">
          <h3>Products</h3>
          <ul>
            <li >
              <Link to="/stocks">Stocks</Link>
            </li>
            <li>
              <Link to="/fd">Fixed Deposit</Link>
            </li>
            <li>
              <Link to="/sip">SIP</Link>
            </li>
            <li>
              <Link to="/gold">Gold</Link>
            </li>
          </ul>
        </div>

                {/* Investor Links */}
                <div>
          <h3>Investo</h3>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/">LinkedIn</a>
            </li>
            {/* External link to LinkedIn */}
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
            {/* External link to Instagram */}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/amc-mutual-funds">AMC Mutual Funds</Link>
            </li>
            <li>
              <Link to="/calculators">Calculators</Link>
            </li>
            <li>
              <Link to="/glossary">Glossary</Link>
            </li>
            <li>
              <Link to="/open-demat-account">Open Demat Account</Link>
            </li>
            <li>
              <Link to="/sitemap">Sitemap</Link>
            </li>
            <li>
              <Link to="/income-tax-calculators">Income Tax Calculators</Link>
            </li>
          </ul>
        </div>
      </div>

      

      {/* Copyright */}
      <div className="copyright">
        <p>Copyright © 2024.All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
