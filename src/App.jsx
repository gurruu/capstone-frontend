import HomePage from "./components/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage/Login";

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
          <Route exact path="/signin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
