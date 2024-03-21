import React, { useState, useEffect } from "react";
import "./SignUp.css";
import image from "../../assets/patternImg.f93bd17c.svg";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import toast, { Toaster } from 'react-hot-toast';


export default function SignUp() {
  const [currValue, setCurrValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    city: "",
    state: "",
    address: "",
  });



  const [isFormDataValid, setIsFormDataValid] = useState(true);
  const navigate = useNavigate();


  const notifyRegistration = () => toast.success('Registration Successful!');
  const errRegistration = () => toast.error('Registration Unsuccessful!');

  
  const notifyLogin = () => toast.success('Login Successful!');
  const errLogin = () => toast.error('Login Unsuccessful!');

  const changeHandler = (e) => {
    setCurrValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };



  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    // const passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // const enteredPass = currValue.password;

    // if (!passw.test(enteredPass)) {
    //   setIsFormDataValid(false);
    //   return;
    // }

    console.log("inside submit handler", currValue);

    try {
      console.log("inside api");

      const response = await fetch("https://localhost:7244/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currValue)
      });
      console.log("register data",response);
      if (!response.ok) {
        errRegistration();
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register");
      }

      const responseData = await response.json();

    
      const decodedToken = jwtDecode(responseData.token);
      localStorage.setItem('jwtToken', responseData.token);
      localStorage.setItem('userData', JSON.stringify(decodedToken));

      notifyRegistration();
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    }
    setIsFormDataValid(true);
    console.log(currValue);
    setCurrValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      company: "",
      city: "",
      state: "",
      address: "",
    });
  };



  const sendUserDataToBackend = async (googleUserData,credentialResponse) => {
    try {

      const response = await fetch("https://localhost:7244/api/oauth-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(googleUserData),
      });
      if (!response.ok) {
        errLogin();
        throw new Error("Failed to send user data");
      }


      const authToken = credentialResponse.credential;
      const userName = jwtDecode(authToken).given_name;
      const userData = JSON.stringify(jwtDecode(authToken));


      localStorage.setItem('jwtToken',authToken);
      localStorage.setItem('userName',userName);
      localStorage.setItem('userData', userData);

      notifyLogin();
      console.log("User data sent successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error sending user data:", error);
    }
  };

  const handleGoogleOAuthResponse = (googleUserData,credentialResponse) => {
    const userDataToSend = {
      firstName: googleUserData.name,
      lastName: "",
      email: googleUserData.email,
      password: "",
      phone:"",
      company: "",
      city:"",
      state:"",
      address:"",
    };

    sendUserDataToBackend(userDataToSend,credentialResponse);
  };


  return (
    <div className="signin-box-size-signin">
      <div className="sign-wrapper">
        <form onSubmit={registerSubmitHandler}>
          <h1>Sign Up</h1>
          <div className="input-wrapper">
            <div className="sign-name-container">
              <div className="input-box">
                <input
                  type="text"
                  onChange={changeHandler}
                  id="firstName"
                  placeholder="First Name"
                  name="firstName"
                  value={currValue.firstName}
                  required
                />
                <i className="bx bxs-user"></i>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  onChange={changeHandler}
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  value={currValue.lastName}
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
                  onChange={changeHandler}
                  id="company"
                  placeholder="Company"
                  name="company"
                  value={currValue.company}
                  required
                />
                <i className="bx bxs-user"></i>
              </div>
            </div>
              {/* <div className="input-box">
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
              </div> */}
              {/* <div className="input-box">
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
              </div> */}
            <div className="sign-name-container">
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
              
              {/* <div className="input-box">
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
              </div> */}

              
            </div>
            <div className="input-box-address">
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
            <button type="submit" className="btn-sign">
              Register
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
              onSuccess={credentialResponse => {
                if (credentialResponse.credential != null) {
                  const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
                  handleGoogleOAuthResponse(USER_CREDENTIAL,credentialResponse);
                }
                console.log("user logged in successfully");
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
