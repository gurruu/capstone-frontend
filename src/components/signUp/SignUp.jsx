import React, { useState } from "react";
import "./SignUp.css";
import image from "../../assets/patternImg.f93bd17c.svg";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function SignUp() {
  const [currValue, setCurrValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    state: "",
    City: "",
    address: "",
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
    const passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const enteredPass = currValue.password;

    if (!passw.test(enteredPass)) {
      setIsFormDataValid(false);
      return;
    }
    setIsFormDataValid(true);
    console.log(currValue);
    setCurrValue({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      state: "",
      city: "",
      address: "",
    });
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
        <h3 className="heading">Welcome to Capstone</h3>
        <div className="input-container">
          <form onSubmit={submitHandler}>
            <div className="name-container">
              <div className="input">
                <input
                  type="text"
                  onChange={changeHandler}
                  id="firstname"
                  placeholder="First Name"
                  name="firstname"
                  value={currValue.firstname}
                  required
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  onChange={changeHandler}
                  id="lastname"
                  placeholder="Last Name"
                  name="lastname"
                  value={currValue.lastname}
                  required
                />
              </div>
            </div>
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
              {!isFormDataValid && (
                <p className="error-class">
                  Password must consist a lowercase,uppercase, special character
                  and a digit.
                </p>
              )}
            </div>
            <div className="city-container input">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  name="City"
                  required
                  id="city"
                  onChange={changeHandler}
                  value={currValue.city}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  required={true}
                  id="state"
                  onChange={changeHandler}
                  value={currValue.state}
                />
              </div>
            </div>
            <div className="input">
              <textarea
                onChange={changeHandler}
                value={currValue.address}
                className="addressText"
                name="address"
                id="address"
                cols="30"
                rows="5"
                placeholder="Address"
              >
                HomeIcon
              </textarea>
            </div>
            <div className="button-container">
              <button className="submit">Register</button>
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
          Already have account?{" "}
          <Link className="link-text" to="/login">
            {" "}
            Click Here
          </Link>
        </p>
      </div>
    </div>
  );
}
