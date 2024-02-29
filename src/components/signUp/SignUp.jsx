import React, { useState } from "react";
import "./SignUp.css";
import image from "../../assets/patternImg.f93bd17c.svg";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function SignUp() {
  const [currValue, setCurrValue] = useState({
    fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
      address: "",
      city: "",
      state:"",
      dob:"",
      pincode:""
  });

  const [isFormDataValid, setIsFormDataValid] = useState(true);

  const changeHandler = (e) => {
    setCurrValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const resisterSubmitHandler = (e) => {
    e.preventDefault();
    const passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const enteredPass = currValue.password;

    if (!passw.test(enteredPass)) {
      setIsFormDataValid(false);
      return;
    }
    setIsFormDataValid(true);
    console.log(currValue);
    setCurrValue({
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
      address: "",
      city: "",
      state:"",
      dob:"",
      pincode:""
    });
  };

  return (
   <div className="signin-box-size-signin">
     <div className="sign-wrapper">
      <form onSubmit={resisterSubmitHandler}>
        <h1>Sign Up</h1>
        <div className="input-wrapper">
        <div className="sign-name-container">
          <div className="input-box">
            <input
              type="text"
              onChange={changeHandler}
              id="fullname"
              placeholder="Full Name"
              name="fullname"
              value={currValue.fullname}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              onChange={changeHandler}
              id="address"
              placeholder="Address"
              name="address"
              value={currValue.address}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
        </div>
        <div className="sign-name-container">
        <div className="input-box">
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={changeHandler}
            value={currValue.email}
            required
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
            <input
              type="text"
              placeholder="City"
              name="city"
              required
              id="city"
              onChange={changeHandler}
              value={currValue.city}
            />
            <i className="bx bxs-user"></i>
          </div>
        
        </div>

        
        <div className="sign-name-container">
        <div className="input-box">
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
            value={currValue.password}
            required
            minLength={8}
          />
          {!isFormDataValid && (
            <p className="error-class">
              Password must consist a lowercase,uppercase, special character and
              a digit.
            </p>
          )}
          <i className="bx bxs-lock-alt"></i>
        </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="State"
              name="state"
              required
              id="state"
              onChange={changeHandler}
              value={currValue.state}
            />
            <i className="bx bxs-user"></i>
          </div>
        </div>
        <div className="sign-name-container">
        <div className="input-box">
          <input
            type="password"
            id="confirmpassword"
            placeholder="Confirm Password"
            name="confirmpassword"
            onChange={changeHandler}
            value={currValue.confirmpassword}
            required
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="text"
            id="dob"
            placeholder="Date of birth"
            name="dob"
            onChange={changeHandler}
            value={currValue.dob}
            required
          />
          <i className="bx bxs-user"></i>
        </div>
        </div>
        <div className="sign-name-container">
        <div className="input-box">
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            name="phone"
            onChange={changeHandler}
            value={currValue.phone}
            required
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="text"
            id="pincode"
            placeholder="Pincode"
            name="pincode"
            onChange={changeHandler}
            value={currValue.pincode}
            required
          />
          <i className="bx bxs-user"></i>
        </div>
        </div>
        <button type="submit" className="btn-sign">
        <Link to="/dashboard">
          Register
          </Link>
        </button>
        
        <div className="register-link">
          <p>
            Already have an account? <Link to="/login"> Log In</Link>
          </p>
        </div>
        </div>
      </form>
      <div className="under-line">
        <p>Or</p>
        <GoogleOAuthProvider clientId="1006719320012-bpprguisgq6oq9o716i7lrd14s1ol0dr.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
   </div>
  );
}
