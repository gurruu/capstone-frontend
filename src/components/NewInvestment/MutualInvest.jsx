import React, { useState } from 'react';
import './MutualInvest.css'; // Import the CSS file
import { CenterFocusStrong } from '@mui/icons-material';
import logo from "./svbtn-logo.svg";

const dummyMutualFunds = [
  { id: 1, name: 'Equity Fund 1', type: 'Equity', returnPercentage: 10 },
  { id: 2, name: 'Equity Fund 2', type: 'Equity', returnPercentage: 12 },
  { id: 3, name: 'Debt Fund 1', type: 'Debt', returnPercentage: 8 },
  { id: 4, name: 'Debt Fund 2', type: 'Debt', returnPercentage: 7 },
  { id: 5, name: 'Hybrid Fund 1', type: 'Hybrid', returnPercentage: 9 },
  // Add more dummy data as needed
];

const MutualInvest = () => {
  const [investmentType, setInvestmentType] = useState('');
  const [selectedFundType, setSelectedFundType] = useState('');
  const [investmentTenure, setInvestmentTenure] = useState(0);
  const [monthlySIP, setMonthlySIP] = useState(0);
  const [lumpsumAmount, setLumpsumAmount] = useState(0);
  const [selectedFundId, setSelectedFundId] = useState(null);
  const [estimatedReturn, setEstimatedReturn] = useState(0);

  const handleTypeChange = (type) => {
    setInvestmentType(type);
    setSelectedFundType('');
    setSelectedFundId(null);
  };

  const handleFundTypeChange = (type) => {
    setSelectedFundType(type);
  };

  const calculateEstimatedReturn = () => {
    if (investmentType === 'sip') {
        const selectedFund = dummyMutualFunds[0]; // Assuming we select the first fund in the list
        const estimatedReturn = monthlySIP * investmentTenure * 12 * (selectedFund.returnPercentage / 100);
        setEstimatedReturn(estimatedReturn);
      } else if (investmentType === 'lumpsum') {
        const selectedFund = dummyMutualFunds[0]; // Assuming we select the first fund in the list
        const estimatedReturn = lumpsumAmount * (selectedFund.returnPercentage / 100);
        setEstimatedReturn(estimatedReturn);
      }
  };

  const handleInvestmentTenureChange = (e) => {
    setInvestmentTenure(parseInt(e.target.value));
  };

  const handleMonthlySIPChange = (e) => {
    setMonthlySIP(parseInt(e.target.value));
  };

  const handleLumpsumAmountChange = (e) => {
    setLumpsumAmount(parseInt(e.target.value));
  };

  return (
    <div className="mf-new-investment">
      
      <div className="mutual-funds-list">
        <h2 className='center'>Available Mutual Funds</h2>
        <br/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Return Percentage</th>
            </tr>
          </thead>
          <tbody>
            {dummyMutualFunds.map(fund => (
              <tr key={fund.id} onClick={() => setSelectedFundId(fund.id)}>
                <td>{fund.name}</td>
                <td>{fund.type}</td>
                <td>{fund.returnPercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>    
      <div className="calculator">
        <h1 className='center'>Calculator</h1>
        <br/>
        <div className="investment-type">
        <button onClick={() => handleTypeChange('sip')}>SIP</button>
        <button onClick={() => handleTypeChange('lumpsum')}>Lumpsum</button>
      </div>
        {investmentType === 'sip' && (
          <div>
            <label>Investment Tenure:</label>
            <input type="number" value={investmentTenure} onChange={handleInvestmentTenureChange} />
            <label>Monthly SIP:</label>
            <input type="number" value={monthlySIP} onChange={handleMonthlySIPChange} />
            <button onClick={calculateEstimatedReturn}>Calculate</button>
            <p>Estimated Return: {estimatedReturn}</p>
            <br/>
            <br/>
                <div className="last-mutualinvest">
                <img src={logo} alt="logo" />
                <p className="mutual-invest-para-amt">
                    If you had invested{" "}
                    <strong>
                    ₹{monthlySIP} 
                    </strong>{" "}
                    for <strong>{investmentTenure}</strong> Years, your investments would be worth
                </p>
                <p className="mutual-invest-para-amt-2">
                    <strong>₹{estimatedReturn}</strong>
                </p>
                
                
                </div>
          </div>
        )}
        {investmentType === 'lumpsum' && (
          <div>
            <label>Amount:</label>
            <input type="number" value={lumpsumAmount} onChange={handleLumpsumAmountChange} />
            <button onClick={calculateEstimatedReturn}>Calculate</button>
            <p>Estimated Return: {estimatedReturn}</p>
            <br/>
            <br/>
                <div className="last-mutualinvest">
                <img src={logo} alt="logo" />
                <p className="mutual-invest-para-amt">
                    If you had invested{" "}
                    <strong>
                    ₹{lumpsumAmount} 
                    </strong>{" "}
                    , your investments would be worth
                </p>
                <p className="mutual-invest-para-amt-2">
                    <strong>₹{estimatedReturn}</strong>
                </p>
                
                
                </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MutualInvest; 




