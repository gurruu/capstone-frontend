import React, { useState } from "react";
import "./Login.css";
import image from "../../assets/patternImg.f93bd17c.svg";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [currValue, setCurrValue] = useState({
    email: "",
    password: "",
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

  const submitHandler = (e) => {
    e.preventDefault();
    const passw=  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const enteredPass=currValue.password
    
    if(!passw.test(enteredPass))
    {
        setIsFormDataValid(false)
        return
    }
    setIsFormDataValid(true)
    console.log(currValue);
    setCurrValue({
    email: "",
    password: "",
    })
    
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <img className="image-container" src={image} alt="" />
        <div className="img-text">
          <p>Hey! Start Investing for free.</p>
        </div>
      </div>
      <div className="right-container">
        <h3 className="heading-login-page">Welcome to Capstone</h3>
        <div className="input-container">
          <form onSubmit={submitHandler}>
            
            <div className="input email ">
              
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                onChange={changeHandler}
                value={currValue.email}
                required
              />
            </div>
            <div className="input password">
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
              {!isFormDataValid && <p className="error-class">Password must consist a lowercase,uppercase, special character and a digit.</p>}
            </div>
           
            <div className="button-container">
              <button className="submit">Login</button>
            </div>
          </form>
        </div>
        <div className="under-line">
          <p>Or</p>
          <GoogleOAuthProvider  clientId="1006719320012-bpprguisgq6oq9o716i7lrd14s1ol0dr.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed")
            }}
          />
          
        </GoogleOAuthProvider>
        </div>
        
        <p>
          Don't have account? <Link className="link-text" to="/signin"> Click Here</Link>
        </p>
      </div>
    </div>
  );
}
