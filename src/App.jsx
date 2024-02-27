import HomePage from "./components/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/signUp/SignUp";
import Login from './components/Login/Login'

function App() {
  return (
    <>
      {/* <HomePage/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<HomePage />}/> */}
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" name="dashboard" element={<DefaultLayout />} /> */}
          <Route exact path="/signin" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
