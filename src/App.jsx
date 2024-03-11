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
import ProfilePage from "./pages/profilepage/ProfilePage";
import BuyPage from "./pages/buypage/BuyPage";
import AdvisorPage from "./pages/advisorpage/AdvisorPage";
import NewInvest from "./components/NewInvestment/NewInvest";
import GoldInvest from "./components/NewInvestment/GoldInvest";
import FDInvest from "./components/NewInvestment/FDInvest";
import AccountDetail from "./pages/bankdetailpage/AccountDetail";
import Investments_Page from "./components/dashBoard/Investments_Page";
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
          <Route exact path="/profilepage" element={<ProfilePage />} />
          <Route exact path="/buy" element={<BuyPage />} />
          {/* <Route exact path="/BankDetails" element={<BankDetails />} /> */}
          <Route exact path="/SubscriptionPage" element={<SubscriptionPage/>} />
          <Route exact path="/advisors" element={<AdvisorPage />} />
          <Route exact path="/FDInvest" element={<FDInvest />} />
          <Route exact path="/GoldInvest" element={<GoldInvest />} />
          <Route exact path="/bankdetails" element={<AccountDetail />} />
          <Route path="/Investments_Page" element={<Investments_Page/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
