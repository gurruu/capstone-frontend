import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Company
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/signin" className="button is-primary">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
