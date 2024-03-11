import React, { useState } from 'react';
import './GoldInvest.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';




const GoldInvest = () => {
  const [investmentName, setInvestmentName] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const [amount, setAmount] = useState(0);
  const [risk, setRisk] = useState('');
  const [expectedAmount, setExpectedAmount] = useState('');
  const [error, setError] = useState('');




  const notify = () => toast.success('Investment added!');
  const err = () => toast.error('Could not add investment');
  const navigate = useNavigate();


  const handleInvest = async () => {
    
    const userData = JSON.parse(localStorage.getItem("userData"));
    let email = null;
    if (userData) {
      email = userData.email || userData.nameid; 
    }
  
    try {
      const goldInvestment = {
        InvestmentName: investmentName,
        InvestmentType: investmentType,
        Amount: parseFloat(amount),
        Risk: risk,
        ExpectedAmount: parseFloat(expectedAmount)
      };

      const response = await fetch(`https://localhost:7244/api/newInvestment/gold?userEmail=${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(goldInvestment)
      });

      if (!response.ok) {
        err();
        throw new Error('Failed to create gold investment');
      }

      const data = await response.json();
      notify();
      navigate("/dashboard");
      console.log("success",data.message);
    } catch (error) {
      console.error(error); // Log any errors
      setError('Failed to create gold investment');
    }
  };


  return (
    <div className="container-goldinvest">
      <h1 className="heading-goldinvest" style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Gold Investment</h1>
      <div className="sub-container-goldinvest">
        <div className="input-container-goldinvest">
          <label htmlFor="name">Investment Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={investmentName}
            onChange={(e) => setInvestmentName(e.target.value)}
          />
        </div>

        <div className="input-container-goldinvest">
          <label htmlFor="name">Type</label>
          <input
            type="text"
            id="investmentType"
            placeholder="Type"
            value={investmentType}
            onChange={(e) => setInvestmentType(e.target.value)}
          />
        </div>

        <div className="input-container-goldinvest">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value ? e.target.value : '₹' + e.target.value)}
        />
      </div>

        <div className="input-container-goldinvest">
          <label htmlFor="risk">Risk</label>
          <select
            style={{ width: '240px', color: '#757575' }}
            value={risk}
            onChange={(e) => setRisk(e.target.value)}
          >
            <option value="">Select Risk</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* <div className="input-container-goldinvest">
          <label htmlFor="expectedAmount">Expected Amount</label>
          <input
            type="text"
            id="expectedAmount"
            placeholder="Expected Amount"
            value={expectedAmount}
            onChange={(e) => setExpectedAmount(e.target.value)}
          />
        </div> */}

        <div className="center-goldinvest">
          <button id="invest-btn-goldinvest" onClick={handleInvest}>
            Invest
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default GoldInvest;
