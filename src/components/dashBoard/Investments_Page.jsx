import React, { useState, useEffect } from 'react';
import { data } from '../../data/tabledata';
import { ThumbUp, ThumbDown, GetApp } from '@mui/icons-material';
import SideBar from './SideBar';
import Header from "./Header";
import './Investment_Page.css';

function Investments_Page() {
  const [totalPortfolioValue, setTotalPortfolioValue] = useState(0);
  const [error, setError] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [investmentData, setInvestmentData] = useState([]);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };


  const fetchInvestmentData = async (userEmail) => {
    try {
      const jwtToken = localStorage.getItem('jwtToken');
      const response = await fetch(`https://localhost:7244/api/investmentData?userEmail=${encodeURIComponent(userEmail)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch investment data: ${response.statusText}`);
      }

      const data = await response.json();
      setInvestmentData(data.data);
      calculateTotalPortfolioValue(data.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const calculateTotalPortfolioValue = (data) => {
    const totalValue = data.reduce((total, investment) => total + investment.pv, 0);
    setTotalPortfolioValue(totalValue);
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    const userData = JSON.parse(localStorage.getItem('userData'));
    const email = userData ? userData.email || userData.nameid : null;
    if (email) {
      fetchInvestmentData(email);
    } else {
      // setError('JWT token or user email not found in Local Storage');
    }
  }, []);

  return (
    <div className="grid-container">
     <Header OpenSidebar={OpenSidebar} />
    <SideBar 
         showProfileModal={() => setShowProfile(true)}
         openSidebarToggle={openSidebarToggle}
         OpenSidebar={OpenSidebar} 
    />
    <div className='main-container-dashboard'>
    <div className='dash-table-wrap-one'>
      <div className='table-comp-heading-one'>
        <h1>Investments</h1>
      </div>
      {error && <div>{error}</div>}
      <table className='dash-table-one'>
        <thead>
          <tr className='table-head-row-one'>
            <th className='table-content-one'>Name</th>
            <th className='table-content-one'>Amount</th>
            <th className='table-content-one'>PV</th>
            <th className='table-content-one'>Risk</th>
            <th className='table-content-one'>Type</th>
            <th className='table-content-one'>Advice</th>
            <th className='table-content-one'>Action</th>
            <th className='table-content-one'>Report</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id} className='table-data-row-one'>
              <td className='table-content-one'>{val.name}</td>
              <td className='table-content-one'>{val.amount}</td>
              <td className='table-content-one'>{val.pv}</td>
              <td className='table-content-one'>{val.risk}</td>
              <td className='table-content-one'>{val.type}</td>
              <td className='table-content-one'>
                {!val.advice ? <ThumbUp style={{ color: 'green' }} /> : <ThumbDown style={{ color: 'red' }} />}
              </td>
              <td className='table-content-one'>
                <button className='withdraw-btn-table-one'>Withdraw</button>
              </td>
              <td className='table-content-one'>
                <GetApp />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default Investments_Page;
