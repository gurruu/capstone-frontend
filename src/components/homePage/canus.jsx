import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./canus.css"; // Import CSS file for styling

const Canus = () => {
  return (
    <div className="canus-container">
      <h2 className="help-text">We're Here to Help</h2>
      <p className="query-text">Still have some queries? Get in touch with us.</p>
      <Link to="/email" className="email-button">Email</Link>
    </div>
  );
};

export default Canus;
