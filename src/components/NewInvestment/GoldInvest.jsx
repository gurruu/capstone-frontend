import React, { useState } from 'react';
import './GoldInvest.css';

const GoldInvest = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [days, setDays] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [expectedAmount, setExpectedAmount] = useState('');
  const [risk, setRisk] = useState('');

  const handleInvest = () => {
    // investment logic
    console.log('Invest button clicked');
  };

  return (
    <div className="container-goldinvest">

      <h1 className="heading-goldinvest" style={{ textAlign: 'center',fontFamily:'font-family: Montserrat;' }}>Gold Investment</h1>
      <div className="sub-container-goldinvest">
      <div className="input-container-goldinvest">
        <label htmlFor="name">Type</label>
        <input
          type="text"
          id="name"
          placeholder="Type"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-container-goldinvest">
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          placeholder="₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value.startsWith('₹') ? e.target.value : '₹' + e.target.value)}
        />
      </div>

      <div className="input-container-goldinvest">
        <label htmlFor="timeframe">Time frame</label>
        <input 
          type="text"
          id="years"
          placeholder="Years"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          style={{ width: '72px' }}
        />
        <input
          type="text"
          id="months"
          placeholder="Months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          style={{ width: '80px' }}
        />
        <input
          type="text"
          id="days"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          style={{ width: '70px' }}
        />
      </div>

      <div className="input-container-goldinvest">
        <label htmlFor="risk">Risk</label>
        <select style={{ width: '240px', color: '#757575' }} value={risk} onChange={(e) => setRisk(e.target.value)}>
          <option value="">Select Risk</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          
        </select>
      </div>

      <div className="input-container-goldinvest">
        <label htmlFor="expectedAmount">Expected Amount</label>
        <input
          type="text"
          id="expectedAmount"
          placeholder="₹"
          value={expectedAmount}
          onChange={(e) => setExpectedAmount(e.target.value.startsWith('₹') ? e.target.value : '₹' + e.target.value)}
        />
      </div>

      <div className="center-goldinvest">
      <button id="invest-btn-goldinvest" onClick={handleInvest}>
        Invest
      </button>
      </div>
    </div>
    </div>
  );
};

export default GoldInvest;

