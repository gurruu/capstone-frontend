// import React from "react";
// import { Link } from "react-router-dom";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer>
//       <ul>
//         <li>
//           <Link to="/contact-us">Contact Us</Link>
//         </li>
//         <li>
//           <Link to="/about-us">About Us</Link>
//         </li>
//         <li>
//           <Link to="/stocks">Stocks</Link>
//         </li>
//         <li>
//           <Link to="/mutual-funds">Mutual Funds</Link>
//         </li>
//         <li>
//           <Link to="/gold">Gold</Link>
//         </li>
//       </ul>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer>
//       {/* Product Links */}
//       <div>
//         <h3>Product</h3>
//         <ul>
//           <li>
//             <Link to="/stocks">Stocks</Link>
//           </li>
//           <li>
//             <Link to="/fd">Fixed Deposit</Link>
//           </li>
//           <li>
//             <Link to="/sip">SIP</Link>
//           </li>
//           <li>
//             <Link to="/gold">Gold</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Investor Links */}
//       <div>
//         <h3>Investor</h3>
//         <ul>
//           <li>
//             <Link to="/about-us">About Us</Link>
//           </li>
//           <li>
//             <a href="https://www.linkedin.com/">LinkedIn</a>
//           </li>
//           {/* External link to LinkedIn */}
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        {/* Product Links */}
        <div className="line1">
          <h3>Product</h3>
          <ul>
            <li>
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
          <h3>Investor</h3>
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
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
