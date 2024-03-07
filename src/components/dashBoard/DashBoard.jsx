import React, { useState, useEffect } from 'react';
import './DashBoard.css';
import Header from './Header';
import SideBar from './SideBar';
import Home from './Home';
import Profile from "./Profile";
import SubscriptionPage from "../Subscription/SubscriptionPage";

function DashBoard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [investmentData, setInvestmentData] = useState([]);
  const [error, setError] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showBuyPage, setShowBuyPage] = useState(false);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  
  const handleShowBuyPage=()=>{
    setShowBuyPage(true)
  }
  const handleShowProfilePage=()=>{
    setShowProfile(false)
  }

  useEffect(() => {
    const fetchInvestmentData = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        const userData = JSON.parse(localStorage.getItem('userData'));
        const userEmail = userData ? userData.nameid : null;
  
        if (!jwtToken || !userEmail) {
          throw new Error('JWT token or user email not found in Local Storage');
        }
  
        const response = await fetch(`https://localhost:7244/api/investmentdata?userEmail=${userEmail}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch investment data');
        }
  
        const responseData = await response.json();
        setInvestmentData(responseData.data); 
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
  
    fetchInvestmentData();
  }, []);
  return (
    <div className='grid-container'>
     <Profile
        showBuyModal={handleShowBuyPage}
        openProfileModal={showProfile}
        closeProfileModal={handleShowProfilePage}
      />
      <SubscriptionPage openBuyModal={showBuyPage} closeBuyPage={()=>setShowBuyPage(false)}/>
      <Header OpenSidebar={OpenSidebar} />
      <SideBar
        showProfileModal={() => setShowProfile(true)}
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home investmentData={investmentData}/>
    </div>
  );
}

export default DashBoard;
