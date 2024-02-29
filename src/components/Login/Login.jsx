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
    console.log("hi from login")
    console.log(currValue);
    setCurrValue({
    email: "",
    password: "",
    })
    
  };

  return (
    <div className="box-size-login">
      <div className="main-log-container">
      <div className="wrapper-login">
    <form onSubmit={submitHandler}>
      <h1>Login</h1>
      <div className="input-box-login">
      <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                onChange={changeHandler}
                value={currValue.email}
                required
              />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box-login">
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
                  Password must consist a lowercase,uppercase, special character
                  and a digit.
                </p>
              )}
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="remember-forgot-login">
        <label><input type="checkbox" />Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <Link to='/dashboard'><button type="submit" className="btn-login"> Login</button></Link>
      <div className="register-link-login">
        <p>Don't have an account? <Link to="/signin"> Sign Up</Link></p>
      </div>
    </form>
    <div className="under-line-login">
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
    
   
  </div>
    </div>
    </div>
  );
}
