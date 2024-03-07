import React, { useState } from 'react';
import './FDInvest.css';

const FDInvest = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [days, setDays] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [expectedAmount, setExpectedAmount] = useState('');

  const handleInvest = () => {
    // investment logic
    console.log('Invest button clicked');
  };

  return (
    <div className="container-fdinvest">

      <h1 className="heading-fdinvest" style={{ textAlign: 'center',fontFamily:'font-family: Montserrat;' }}>Fixed Deposit</h1>
      <div className="sub-container-fdinvest">
      <div className="input-container-fdinvest">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-container-fdinvest">
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          placeholder="₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value.startsWith('₹') ? e.target.value : '₹' + e.target.value)}
        />
      </div>

      <div className="input-container-fdinvest">
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

      <div className="input-container-fdinvest">
        <label htmlFor="interestRate">Rate of Interest</label>
        <input
          type="text"
          id="interestRate"
          placeholder="In %"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>

      <div className="input-container-fdinvest">
        <label htmlFor="expectedAmount">Expected Amount</label>
        <input
          type="text"
          id="expectedAmount"
          placeholder="₹"
          value={expectedAmount}
          onChange={(e) => setExpectedAmount(e.target.value.startsWith('₹') ? e.target.value : '₹' + e.target.value)}
        />
      </div>

      <div className="center-fdinvest">
      <button id="invest-btn-fdinvest" onClick={handleInvest}>
        Invest
      </button>
      </div>
    </div>
    </div>
  );
};

export default FDInvest;

