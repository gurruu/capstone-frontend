import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
import toast, { Toaster } from 'react-hot-toast';


export default function Login() {
  const [currValue, setCurrValue] = useState({
    email: "",
    password: "",
  });

  const [isFormDataValid, setIsFormDataValid] = useState(true);
  const navigate = useNavigate();


  const notify = () => toast.success('Login Successful!');
  const err = () => toast.error('Login Unsuccessful!');

  const changeHandler = (e) => {
    setCurrValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("inside api");
      const response = await fetch("https://localhost:7244/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currValue),
      });
      if (!response.ok) {
        err();
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      notify();
      const responseData = await response.json();
      console.log(responseData);

      
      const decodedToken = jwtDecode(responseData.token);
      localStorage.setItem('jwtToken', responseData.token);
      localStorage.setItem('userData', JSON.stringify(decodedToken));

      console.log("decoded token",decodedToken);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }

    setIsFormDataValid(true);
    console.log(currValue);
    setCurrValue({
      email: "",
      password: "",
    });
  };

  const sendUserDataToBackend = async (userData) => {
    try {
      console.log("inside google oauth");
      const response = await fetch("https://localhost:7244/api/oauth-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        err();
        throw new Error("Failed to send user data");
      }

      notify();
      console.log("User data sent successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error sending user data:", error);
    }
  };

  const handleGoogleOAuthResponse = (googleUserData) => {
    const userDataToSend = {
      id: googleUserData.exp,
      name: googleUserData.name,
      email: googleUserData.email,
      givenName: googleUserData.given_name,
    };

    sendUserDataToBackend(userDataToSend);
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
              <i className="bx bxs-user"></i>
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
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="remember-forgot-login">
              <label>
                <input type="checkbox" />Remember Me
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit" className="btn-login">              
              {" "}
              Login
            </button>
            <div className="register-link-login">
              <p>
                Don't have an account? <Link to="/signup"> Sign Up</Link>
              </p>
            </div>
          </form>
          <div className="under-line-login">
            <p>Or</p>
            <GoogleOAuthProvider clientId="1006719320012-bpprguisgq6oq9o716i7lrd14s1ol0dr.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  if (credentialResponse.credential != null) {
                    const USER_CREDENTIAL = jwtDecode(
                      credentialResponse.credential
                    );
                    console.log(USER_CREDENTIAL);
                    handleGoogleOAuthResponse(USER_CREDENTIAL);
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
    </div>
  );
}
