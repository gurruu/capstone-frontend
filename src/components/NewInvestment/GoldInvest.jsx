import React, { useState } from 'react';
import './GoldInvest.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import logo from './svbtn-logo.svg';




const GoldInvest = () => {
  const [investmentName, setInvestmentName] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const [amount, setAmount] = useState(0);
  const [risk, setRisk] = useState('');
  const [expectedAmount, setExpectedAmount] = useState('');
  const [error, setError] = useState('');
  const [frequency, setFrequency] = useState('Daily');
  const [period, setPeriod] = useState(1); // Setting initial period to 1 year

  const handlePeriodChange = (newValue) => {
    if (newValue >= 0.5 && newValue <= 5) {
      setPeriod(newValue);
    }
  };



  const calculateSum = () => {
    let sum = 0;
    if (amount && frequency && period) {
      if (frequency === 'Daily') {
        sum = parseFloat(amount) * 365 * parseFloat(period);
      } else if (frequency === 'Monthly') {
        sum = parseFloat(amount) * 12 * parseFloat(period);
      } else if (frequency === 'One-time') {
        sum = parseFloat(amount) * parseFloat(period);
      }
    }
    return sum.toFixed(2);
  };



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
     
      <div className="sub-container-goldinvest">
      <h1 className="heading-goldinvest" style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Calculate&Decide</h1>
        {/* <div className="input-container-goldinvest">
          <label htmlFor="name">Investment Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={investmentName}
            onChange={(e) => setInvestmentName(e.target.value)}
          />
        </div> */}

        {/* <div className="input-container-goldinvest">
          <label htmlFor="name">Type</label>
          <input
            type="text"
            id="investmentType"
            placeholder="Type"
            value={investmentType}
            onChange={(e) => setInvestmentType(e.target.value)}
          />
        </div> */}

        {/* <div className="input-container-goldinvest">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value ? e.target.value : '₹' + e.target.value)}
        />
      </div> */}

      <div className="input-container-goldinvest">
      <label htmlFor="amount">Amount</label>
      <input
       type="number"
       id="amount"
       placeholder="₹"
       value={amount}
       onChange={(e) => {
      const input = e.target.value;
      const newValue = input >= 0 ? input : amount; // Only update if input is non-negative
      setAmount(newValue);
    }}
    />
    </div>



  <div className="input-container-goldinvest">
        <label htmlFor="frequency" style={{ marginRight: '10px' }}>Frequency</label>
        <div className="freq-all" style={{ display: 'inline-block' }}>
          <button
            className={`frequency-goldinvest ${frequency === 'Daily' ? 'selected' : ''}`}
            onClick={() => setFrequency('Daily')}
          >
            Daily
          </button>
          <button
            className={`frequency-goldinvest ${frequency === 'Monthly' ? 'selected' : ''}`}
            onClick={() => setFrequency('Monthly')}
          >
            Monthly
          </button>
          <button
            className={`frequency-goldinvest ${frequency === 'One-time' ? 'selected' : ''}`}
            onClick={() => setFrequency('One-time')}
          >
            One-time
          </button>
        </div>
      </div>



      <div className="input-container-goldinvest">
        <label htmlFor="period">Period (years)</label>
        <input className="disabled-input"
        style={{ width: '150px'}}
          type="number"
          id="period"
          value={period}
          min="0.5"
          max="5"
          step="0.5"
          onChange={(e) => handlePeriodChange(parseFloat(e.target.value))}
        />
      </div>




        {/* <div className="input-container-goldinvest">
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
        </div> */}



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

        <div className="last-goldinvest">
        <img src={logo} alt="logo" />
        <p style={{color:'#757575'}}>
          If you had invested <strong>₹{amount} {frequency}</strong> for <strong>{period}</strong> Years, your investments would be worth
        </p>
        <p><strong>₹{calculateSum()}</strong></p>
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
