import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Investo
        </Link>
      </div>
      
      <div className="navbar-brand">
        <Link to="/dashboard" className="navbar-item">
          DashBoard
        </Link>
      </div>
      
      <div className="navbar-left">
      <button as="button" class="tab__bJxhD" tabindex="0" cur-idx="0" is-selected=" "> 
        <div>Investment Feed</div>
        
        
        </button>
        <button as="button" class="tab__bJxhD" tabindex="0" cur-idx="0" is-selected=" "> 
        <div>Calculator</div>
        
        
        </button>
        <button as="button" class="tab__bJxhD" tabindex="0" cur-idx="0" is-selected=" "> 
        <div>FAQs</div>
        
        {/* <div class="tab__bJxhD" is-selected=" " style="visibility: hidden; height: 0px; padding: 0px;">
          Investment Feed</div> */}
        </button>
        
        
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