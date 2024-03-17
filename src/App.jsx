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
import AdvisorSubscription from "./components/dashBoard/advisorsubscription";
import SentRequestTable from "./components/dashBoard/sentRequestTable";
import AdDashBoard from "./components/AdvisorInterface/AdDashBoard";
import AdClients from "./components/AdvisorInterface/Clients/AdClients";
import AdRequestPage from "./components/AdvisorInterface/Requests/AdRequestPage";
import PlansPage from "./components/AdvisorInterface/PlansPage";
import AdProfilePage from "./components/AdvisorInterface/AdProfilePage";
import MutualInvest from "./components/NewInvestment/MutualInvest";
import Bonds from "./components/NewInvestment/bonds/Bonds";

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
          {/* <Route exact path="/investment" element={<Investments_Page />} /> */}
          {/* <Route exact path="/BankDetails" element={<BankDetails />} /> */}
          <Route exact path="/SubscriptionPage" element={<SubscriptionPage/>} />
          <Route exact path="/advisors" element={<AdvisorPage />} />
          <Route exact path="/FDInvest" element={<FDInvest />} />
          <Route exact path="/GoldInvest" element={<GoldInvest />} /> 
          <Route exact path="/MutualInvest" element={<MutualInvest />} />
          <Route exact path="/bonds" element={<Bonds />} />
          <Route exact path="/bankdetails" element={<AccountDetail />} />
          <Route path="/Investments_Page" element={<Investments_Page/>}/>
          <Route exact path="/sentRequestTable" element={<SentRequestTable />} />
          <Route exact path="/advisorsubscription" element={<AdvisorSubscription />} />
          <Route exact path="/Investment_Plan" element={<Investment_Plan />} />
          <Route exact path="/AdDashboard" element={<AdDashBoard/>} />
          <Route exact path="/AdClients" element={<AdClients/>} />
          <Route exact path="/adRequestPage" element={<AdRequestPage/>}/>
          <Route exact path="/PlansPage" element={<PlansPage/>} />
          <Route exact path="/AdProfilePage" element={<AdProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
