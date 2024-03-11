import React, { useState, useEffect } from 'react';
import './Dashtable.css';
import { data } from '../../data/tabledata';
import { ThumbUp, ThumbDown, GetApp } from '@mui/icons-material';

function Dashtable() {
  const [investmentData, setInvestmentData] = useState([]);
  const [totalPortfolioValue, setTotalPortfolioValue] = useState(0);
  const [error, setError] = useState(null);

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
      setError('JWT token or user email not found in Local Storage');
    }
  }, []);

  return (
    <div className='dash-table-wrap-one'>
      <div className='table-comp-heading-one'>
        <h1>Recent Investments</h1>
      </div>
      {error && <div>{error}</div>}
      <div>Total Portfolio Value: {totalPortfolioValue}</div>
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
                {val.advice ? <ThumbUp style={{ color: 'green' }} /> : <ThumbDown style={{ color: 'red' }} />}
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
  );
}

export default Dashtable;
