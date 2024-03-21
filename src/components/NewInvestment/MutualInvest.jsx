import React, { useState } from 'react';
import './MutualInvest.css'; // Import the CSS file
import mutualFundsData from '../../data/MFData.json'; // Import the JSON data
import { navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const itemsPerPage = 10; // Number of items to display per page

const MutualInvest = () => {
  const [investmentType, setInvestmentType] = useState('');
  const [investmentTenure, setInvestmentTenure] = useState(0);
  const [monthlySIP, setMonthlySIP] = useState(0);
  const [lumpsumAmount, setLumpsumAmount] = useState(0);
  const [selectedFundId, setSelectedFundId] = useState(null);
  const [estimatedReturn, setEstimatedReturn] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(mutualFundsData.length / itemsPerPage);

  // Get the current page of mutual funds data
  const currentFundsData = mutualFundsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTypeChange = (type) => {
    setInvestmentType(type);
    setSelectedFundId(null);
  };

  const calculateEstimatedReturn = () => {
    const selectedFund = mutualFundsData.find(fund => fund.schemeCode === selectedFundId);
    if (!selectedFund) {
      console.error("Selected fund not found.");
      return;
    }

    if (investmentType === 'sip') {
      const estimatedReturn = monthlySIP * investmentTenure * (selectedFund.NAV);
      setEstimatedReturn(estimatedReturn);
    } else if (investmentType === 'lumpsum') {
      const estimatedReturn = lumpsumAmount * (selectedFund.NAV);
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const notifySuccess = () => toast.success("Investment added successfully!");
  const notifyError = () => toast.error("Failed to add investment!");
  const navigate = useNavigate();


  const handleSubmit = async () => {
    try {
      const selectedFund = mutualFundsData.find(fund => fund.schemeCode === selectedFundId);
      if (!selectedFund) {
        console.error("Selected fund not found.");
        return;
      }

      const userData = JSON.parse(localStorage.getItem("userData"));
      let email = null;
      if (userData) {
        email = userData.email || userData.nameid;
      }

      const investmentData = {
        Amount: investmentType === 'sip' ? monthlySIP : lumpsumAmount,
        PurchaseDate: new Date().toISOString(), 
        Risk: selectedFund.riskProfile,
        ExpectedAmount: estimatedReturn,
        MFName: selectedFund.schemeName,
        MFType: selectedFund.type,
        NAV: selectedFund.NAV
      };

      const response = await fetch(`https://localhost:7244/api/newInvestment/mutualFunds?userEmail=${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(investmentData)
      });

      if (!response.ok) {
        notifyError();
        throw new Error("Failed to create gold investment");
      }


      const data = await response.json();
      notifySuccess();
      navigate("/dashboard");
      console.log("success", data.message);

    } catch (error) {
      console.error('Error:', error);
      notifyError();
    }
  };

  return (
    <div className="mf-new-investment">
      <div className="mutual-funds-list">
        <h2 className='center'>Available Mutual Funds</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Risk</th>
              <th>NAV</th>
            </tr>
          </thead>
          <tbody>
            {currentFundsData.map(fund => (
              <tr key={fund.schemeCode} className={selectedFundId === fund.schemeCode ? 'selected' : ''} onClick={() => setSelectedFundId(fund.schemeCode)}>
                <td>{fund.schemeName}</td>
                <td>{fund.type}</td>
                <td>{fund.riskProfile}</td>
                <td>{fund.NAV}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i + 1} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="calculator">
        <h1 className='center'>Calculator</h1>
        <br />
        <div className="investment-type">
          <button onClick={() => handleTypeChange('sip')}>SIP</button>
          <button onClick={() => handleTypeChange('lumpsum')}>Lumpsum</button>
        </div>
        {investmentType === 'sip' && (
          <div>
            <label>Investment Tenure (in months):</label>
            <input type="number" value={investmentTenure} onChange={handleInvestmentTenureChange} />
            <label>Monthly SIP:</label>
            <input type="number" value={monthlySIP} onChange={handleMonthlySIPChange} />
            <button onClick={calculateEstimatedReturn}>Calculate</button>
            <button style={{margin:"10px"}} onClick={handleSubmit}>Invest</button>
            <p>Estimated Return: <b> ₹{estimatedReturn} </b></p>
          </div>
        )}
        {investmentType === 'lumpsum' && (
          <div>
            <label>Amount:</label>
            <input type="number" value={lumpsumAmount} onChange={handleLumpsumAmountChange} />
            <button onClick={calculateEstimatedReturn}>Calculate</button>
            <button style={{margin:"10px"}} onClick={handleSubmit}>Invest</button>
            <p>Estimated Return: <b>₹{estimatedReturn}</b></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MutualInvest;
