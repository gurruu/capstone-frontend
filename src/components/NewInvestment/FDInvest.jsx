import React, { useState } from 'react';
import './FDInvest.css';
import logo from "./svbtn-logo.svg";
import FDData from "../../data/FDData.json"; 
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const itemsPerPage = 6;

const FDInvest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFDId, setSelectedFDId] = useState('');
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [estimatedReturn, setEstimatedReturn] = useState(0);

  const navigate = useNavigate();
  const notify = () => toast.success("FD Investment Added Successfully!");
  const err = () => toast.error("Error adding investment!");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const calculateEstimatedReturn = () => {
    if (!selectedFDId || !amount || !tenure) return;

    const selectedFD = FDData.find(fd => fd.FixedDepositID === parseInt(selectedFDId));
    if (!selectedFD) return;

    const monthlyRate = parseFloat(selectedFD.RateOfInterest.replace('%', '')) / 12 / 100;
    const tenureInMonths = parseInt(tenure) * 12;
    const futureValue = amount * (Math.pow(1 + monthlyRate, tenureInMonths));
    setEstimatedReturn(futureValue);
  };

  const totalPages = Math.ceil(FDData.length / itemsPerPage);
  const currentFDData = FDData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handleInvest = async () => {

    const userData = JSON.parse(localStorage.getItem("userData"));
    let email = null;
    if(userData){
      email = userData.nameid || userData.email;
    }

    const selectedFD = FDData.find(fd => fd.FixedDepositID === parseInt(selectedFDId));
      if (!selectedFD) {
        throw new Error("Selected FD not found.");
      }
    try {
      const response = await fetch(`https://localhost:7244/api/newInvestment/FD?userEmail=${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FixedDepositID: parseInt(selectedFDId),
            Amount: parseInt(amount),
            PurchaseDate: new Date().toISOString(),
            Type: "Fixed Deposits",
            Risk: selectedFD.Risk,
            RateOfInterest: parseFloat(selectedFD.RateOfInterest.replace('%', '')), 
            Timeframe: selectedFD.tenure,
            ExpectedAmount: estimatedReturn,
            FDName: selectedFD.FDName,
            FDType: selectedFD.Type,
        }),
      });
      
      if (!response.ok) {
        console.error('Failed to add investment');
        err();
        return;
      }
  
      const data = await response.json();
      console.log('Investment added successfully:', data.message);
      notify();
      navigate("/dashboard");
    } catch (error) {
      err();
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="fd-new-investment">
      <div className="fd-funds-list">
        <h2 className='center'>Available FD'S</h2>
        <br/>
        <table>
          <thead>
            <tr>
              <th>FD Name</th>
              <th>Type</th>
              <th>Rate of Interest</th>
              <th>Minimum Investment</th>
              <th>Maximum Investment</th>
              <th>Lock-in Period</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {currentFDData.map(fund => (
              <tr key={fund.FixedDepositID} className={selectedFDId === fund.FixedDepositID ? 'selected' : ''} onClick={() => setSelectedFDId(fund.FixedDepositID)}>
                <td>{fund.FDName}</td>
                <td>{fund.Type}</td>
                <td>{fund.RateOfInterest}</td>
                <td>{fund.MinimumInvestment}</td>
                <td>{fund.MaximumInvestment}</td>
                <td>{fund.LockInPeriod}</td>
                <td>{fund.Risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <br/>
        <div className="investment-type"></div>
        
        <div>
          <label>Name:</label>
          <select value={selectedFDId} onChange={(e) => setSelectedFDId(e.target.value)} className="select-small">
            <option value="">Select FD</option>
            {FDData.map(fd => (
              <option key={fd.FixedDepositID} value={fd.FixedDepositID}>{fd.FDName}</option>
            ))}
          </select>
        </div>
      
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min={parseInt(selectedFDId ? FDData.find(fd => fd.FixedDepositID === parseInt(selectedFDId)).MinimumInvestment.replace(/[^0-9]/g, '') : 0) || 0} />
        </div>
      
        <div>
          <label>Time Period (Years):</label>
          <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
        </div>

        {selectedFDId && (
          <p>Rate of Interest: <b>{FDData.find(fd => fd.FixedDepositID === parseInt(selectedFDId)).RateOfInterest}</b></p>
        )}
      
        <button className='calculate-btn' onClick={calculateEstimatedReturn}>Calculate</button>
        <button className='invest-btn' onClick={handleInvest}>Invest</button>

        <div>
          <p>Estimated Return: <b>₹{estimatedReturn.toFixed(2)}</b></p>
        </div>

        <div className="last-fixed-deposit">
          <img src={logo} alt="logo" />
          <p className="fixed-deposit-para-amt">
            If you had invested{" "}
            <strong>
              ₹{amount} 
            </strong>{" "}
            for <strong>{tenure}</strong> Years, your investments would be worth
          </p>
          <p className="fixed-deposit-para-amt-2">
            <strong>₹{estimatedReturn}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FDInvest;
