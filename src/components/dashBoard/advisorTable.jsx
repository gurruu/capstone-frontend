import React, { useState, useEffect } from 'react';
import './advisorTable.css';
import { Link, useNavigate } from 'react-router-dom';

function AdvisorTable() {
  const [advisors, setAdvisors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdvisorsData()
      .then(advisorsData => setAdvisors(advisorsData))
      .catch(error => console.error('Error fetching advisors data:', error));
  }, []);

  const fetchAdvisorsData = async () => {
    try {
      const response = await fetch('https://localhost:7244/api/getAdvisors', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch advisors data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const handleSelectAdvisor = async (advisor) => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      let email = null;
      if (userData) {
        email = userData.nameid || userData.email;
      }
      const userFirstName = localStorage.getItem("userName");

      const response = await fetch(`https://localhost:7244/api/addClient?userEmail=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          AdvisorID: advisor.advisorID,
          RoleID: 808,
          ClientName: userFirstName,
          PortfolioValue: 0,
          SubscribedOn: new Date().toISOString(),
          TypeOfInvestment: "GOLD/MF/BONDS/FD",
        }),
      });

      if (!response.ok) {
        if (response.status === 409) {
          navigate(`/sentRequests/${advisor.advisorID}`);
        } else {
          console.error('Failed to add client. Status:', response.status);
          const errorMessage = await response.text();
          console.error('Error message:', errorMessage);
          throw new Error('Failed to add client');
        }
      }

      const responseData = await response.json();

      if (responseData.message === "Client registered successfully") {
        navigate(`/sentRequests/${advisor.advisorID}`);
      } else if (responseData.message === "Client already exists!") {
        navigate(`/sentRequests/${advisor.advisorID}`);
      }
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };




  return (
    <div className='advisor-table-wrap'>
      <h1 style={{ textAlign: "center", marginBottom: "90px" }}>List of Advisors</h1>

      <div className='advisor-table-head-wrap'>
        <ul className='advisor-table-head-list'>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Company</li>
          <li>Advisor ID</li>
          <li>Action</li>
        </ul>
      </div>
      {advisors && advisors.map(advisor => (
        <div key={advisor.userID} className='advisor-table-data-wrap'>
          <ul className='advisor-table-head-list'>
            <li>{advisor.firstName}</li>
            <li>{advisor.email}</li>
            <li>{advisor.phone ? advisor.phone : "NULL"}</li>
            <li>{advisor.company ? advisor.company : "NULL"}</li>
            <li>{advisor.advisorID ? advisor.advisorID : "NULL"}</li>
            <li>
              {!advisor.isClient ? (
                <button className='advisor-select-btn-table' onClick={() => handleSelectAdvisor(advisor)}>Select</button>
              ) : (
                <span>Already a Client</span>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AdvisorTable;
