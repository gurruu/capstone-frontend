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


  const [showPassword, setShowPassword] = useState(false);
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


      const decodedToken = jwtDecode(responseData.token);
      const userName = responseData.userName;
      const advisorCredential = responseData.advisorID;

      localStorage.setItem('advisorID', advisorCredential);
      localStorage.setItem('userName', userName);
      localStorage.setItem('jwtToken', responseData.token);
      localStorage.setItem('userData', JSON.stringify(decodedToken));

      const role = responseData.roleID;
      if (role == "1337") {
        navigate("/AdDashboard");
      }
      else if (role == "808") {
        navigate("/dashboard");
      }


    } catch (error) {
      console.error("Login failed:", error);
    }

    setIsFormDataValid(true);
    setCurrValue({
      email: "",
      password: "",
    });
  };

  const sendUserDataToBackend = async (googleUserData, credentialResponse) => {
    try {
      const response = await fetch("https://localhost:7244/api/oauth-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(googleUserData),
      });
      if (!response.ok) {
        err();
        throw new Error("Failed to send user data");
      }


      const authToken = credentialResponse.credential;
      const userName = jwtDecode(authToken).given_name;
      const userData = JSON.stringify(jwtDecode(authToken));

      localStorage.setItem('jwtToken', authToken);
      localStorage.setItem('userName', userName);
      localStorage.setItem('userData', userData);

      const responseData = await response.json();
      const role = responseData.roleID;
      const advisorCredential = responseData.advisorID;

      localStorage.setItem('advisorID', advisorCredential);


      if (role == "1337") {
        navigate("/AdDashboard");
      }
      else if (role == "808") {
        navigate("/dashboard");
      }

      notify();
    } catch (error) {
      console.error("Error sending user data:", error);
    }
  };

  const handleGoogleOAuthResponse = (googleUserData, credentialResponse) => {
    const userDataToSend = {
      firstName: googleUserData.name,
      lastName: "",
      email: googleUserData.email,
      password: "",
      phone: "",
      company: "",
      city: "",
      state: "",
      address: "",
    };

    sendUserDataToBackend(userDataToSend, credentialResponse);
  };

  return (
    <div className="box-size-login">

      <div className="main-log-container">

        <div className="wrapper-login-main">
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
              <input type={showPassword ? "text" : "password"}
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
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password">
                {showPassword ? "Hide" : "Show"}
              </button>
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
                    handleGoogleOAuthResponse(USER_CREDENTIAL, credentialResponse);
                  }
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
