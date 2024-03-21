import React, { useState, useEffect } from 'react';
import './adRequestTable.css';
import { useNavigate, useParams } from 'react-router-dom';

function AdRequestTable() {
  const navigate = useNavigate();
  const { advisorId } = useParams();
  const [plans, setPlans] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const advisorCredential = JSON.parse(localStorage.getItem("advisorID"));

  let email = null;
  if(userData){
    email = userData.nameid || userData.email;
  }

  useEffect(() => {
    const fetchAdvisorPlans = async () => {
      try {
        const response = await fetch(`https://localhost:7244/api/viewAdvisorPlans?advisorId=${advisorCredential}`);
        if (response.ok) {
          const data = await response.json();
          setPlans(data.allPlans);
        } else {
          console.error('Failed to fetch advisor plans:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching advisor plans:', error);
      }
    };

    fetchAdvisorPlans();
  }, [advisorId]);

  const handleModifyClick = () => {
    navigate('/'); // Navigate to the home page on clicking
  };

  return (
    <div className='adRequest-table-wrap'>
      <div className='adRequest-table-head-wrap'>
        <ul className='adRequest-table-head-list'>
          <li>Name</li>
          <li>Amount</li>
          <li>Start Date</li>
          <li>Type</li>
          <li>Risk</li>
          <li>Actions</li>
        </ul>
      </div>
      {plans.map((val, index) => (
        <div key={index} className='adRequest-table-data-wrap'>
          <ul id={val.investorInfoID} className='adRequest-table-head-list'>
            <li>{val.investmentName}</li>
            <li>{val.amount}</li>
            <li>{val.startDate}</li>
            <li>{val.investmentType}</li>
            <li>{val.risk}</li>
            <li><button className='adRequest-modify-btn-table' onClick={handleModifyClick}>Modify</button></li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AdRequestTable;
