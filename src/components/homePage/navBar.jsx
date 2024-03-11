import React from "react";
import "./navBar.css";
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {

  const authToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!authToken) {
      navigate("/login");
    }
    else {
      navigate("/dashboard");
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/pictures/logo.png" width={"150px"} />
      </div>



      <div className="navbar-left">
        <button as="button" class="tab__bJxhD" tabindex="0" cur-idx="0" is-selected=" ">
          {/* <div onClick={handleClick}>
            {authToken ? */}
              <Link to="/dashboard" className="nav-item-div">
                Dashboard
              </Link>
              
            

          {/* </div> */}
        </button>
        <button as="button" class="tab__bJxhD" tabindex="0" cur-idx="0" is-selected=" ">
          <div className="nav-item-div">Investment Feed</div>
        </button>
        <button as="button" class="tab__bJxhD" tabindex="0" cur-idx="0" is-selected=" ">
          <div className="nav-item-div">Calculator</div>
        </button>
        <button as="button" class="tab__bJxhD" tabindex="0" cur-idx="0" is-selected=" ">
          <div className="nav-item-div">FAQs</div>
        </button>

        <button as="button" class="tab__bJxhD" tabindex="0" cur-idx="0" is-selected=" ">
          <div className="nav-item-div">Contact Us</div>
        </button>
      </div>





      <div className="navbar-end">
        <div className="navbar-item">
          {authToken ? "" :
            <Link to="/login" className="button is-primary">
              Login
            </Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;