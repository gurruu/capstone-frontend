import React from "react";
import { Link } from "react-router-dom";
import "./typed.css";

const Typed = ({ modalShowInNav }) => {
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
      {/* <p className="hero-description">
        Experience seamless business management with <br />
        Investo's Comprehensive Suite of Tools.
      </p> */}
      <div
        onClick={modalShowInNav}
        className="get-started-button-container"
        style={{ marginTop: "90px" }}
      >
        <Link to="/login" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default Typed;
