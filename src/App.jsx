import HomePage from "./components/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/Login/Login";
import DashBoard from "./components/dashBoard/DashBoard";
import toast, { Toaster } from "react-hot-toast";
import Profile from "./components/dashBoard/Profile";
import BankDetails from "./components/dashBoard/BankDetails";
import SubscriptionPage from "./components/Subscription/SubscriptionPage";
import AdvisorTable from "./components/dashBoard/advisorTable";
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/BankDetails" element={<BankDetails />} />
          <Route exact path="/SubscriptionPage" element={<SubscriptionPage/>} />
          <Route exact path="/AdvisorTable" element={<AdvisorTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
