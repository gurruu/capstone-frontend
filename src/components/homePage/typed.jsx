import React from "react";
import { Link } from "react-router-dom";
import "./typed.css";

const Typed = ({ modalShowInNav }) => {

  const authToken = localStorage.getItem("jwtToken");


  return (
    <div className="hero-section">
      <h1 className="hero-title">
        <span className="hero-highlight" style={{ color: "#5c977c" }}>
          <div className="investo-text">Investo:</div>
          <span className="empowering-text" style={{ color: "#000000" }}>
            Empowering
          </span>{" "}
        </span>
        <br />
        <span className="hero-secondary-title" style={{ color: "#000" }}>
          Your Financial Future
        </span>
      </h1>
  
      <div
        onClick={modalShowInNav}
        className="get-started-button-container"
        style={{ marginTop: "90px" }}
      >
        {authToken ? 
        
          <Link to="/dashboard" className="get-started-button">Get Started</Link>
          :
          <Link to="/login" className="get-started-button">Get Started</Link>
        }
      </div>
    </div>
  );
};

export default Typed;
