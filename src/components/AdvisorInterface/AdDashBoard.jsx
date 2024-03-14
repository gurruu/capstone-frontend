import React, { useState, useEffect } from 'react';
import './AdDashBoard.css';
import AdHeader from './AdHeader';
import AdSideBar from './AdSideBar';
import AdHome from './AdHome';

function AdDashBoard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [investmentData, setInvestmentData] = useState([]);
  const [error, setError] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showBuyPage, setShowBuyPage] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };


  const handleShowBuyPage = () => {
    setShowBuyPage(true)
  }
  const handleShowProfilePage = () => {
    setShowProfile(false)
  }

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    const userData = JSON.parse(localStorage.getItem('userData'));
    let email = null;
  
    if (userData) {
      email = userData.email || userData.nameid; 
    }
  
    console.log('Extracted Email:', email);
  
    if (email) {
      setUserEmail(email);
  
      const fetchInvestmentData = async () => {
        try {
          const response = await fetch(`https://localhost:7244/api/investmentdata?userEmail=${email}`, {
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
    } else {
      setError('JWT token or user email not found in Local Storage');
    }
  }, []);

  return (

    <div className='ad-grid-container'>
      <AdHeader OpenSidebar={OpenSidebar} />
      <AdSideBar
        showProfileModal={() => setShowProfile(true)}
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <AdHome investmentData={investmentData}/>
    </div>
  );
}

export default AdDashBoard;
