// import React, { useState } from 'react';
// import './FDInvest.css'; // Import the CSS file

// const dummyFDFunds = [
//   { id: 1, name: 'FD 1', minAmount: 10000, tenureInMonths: [6, 12, 24], returnPercentage: 5 },
//   { id: 2, name: 'FD 2', minAmount: 5000, tenureInMonths: [12, 24, 36], returnPercentage: 6 },
//   { id: 3, name: 'FD 3', minAmount: 20000, tenureInMonths: [12, 24], returnPercentage: 7 },
//   // Add more FD data as needed
// ];

// const FDInvest = () => {
//   const [selectedFDId, setSelectedFDId] = useState('');
//   const [amount, setAmount] = useState('');
//   const [tenure, setTenure] = useState('');
//   const [estimatedReturn, setEstimatedReturn] = useState(0);

//   const selectedFD = dummyFDFunds.find(fd => fd.id === parseInt(selectedFDId));

//   const calculateEstimatedReturn = () => {
//     if (!selectedFD || !amount || !tenure) return;
//     const monthlyRate = selectedFD.returnPercentage / 12 / 100;
//     const tenureInMonths = tenure;
//     const futureValue = amount * (Math.pow(1 + monthlyRate, tenureInMonths));
//     setEstimatedReturn(futureValue);
//   };

//   return (
//     <div className="fd-new-investment">
//       <h2>Available Fixed Deposits</h2>
//       <div>
//         <label>Name:</label>
//         <select value={selectedFDId} onChange={(e) => setSelectedFDId(e.target.value)}>
//           <option value="">Select FD</option>
//           {dummyFDFunds.map(fd => (
//             <option key={fd.id} value={fd.id}>{fd.name}</option>
//           ))}
//         </select>
//       </div>
      
//       <div>
//         <label>Amount:</label>
//         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min={selectedFD?.minAmount} />
//       </div>
      
//       <div>
//         <label>Time Period (Months):</label>
//         <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
//       </div>

//       {selectedFD && (
//         <p>Rate of Interest: {selectedFD.returnPercentage}%</p>
//       )}
      
//       <button onClick={calculateEstimatedReturn}>Calculate</button>

//       <div>
//         <p>Estimated Return: ₹{estimatedReturn.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default FDInvest;




import React, { useState } from 'react';
import './FDInvest.css'; // Import the CSS file
import { CenterFocusStrong } from '@mui/icons-material';
import logo from "./svbtn-logo.svg";

const dummyFDFunds = [
    { id: 1, name: 'SBI', minAmount: 10000, tenureInMonths: [6, 12, 24], returnPercentage: 5 },
    { id: 2, name: 'HDFC BANK', minAmount: 5000, tenureInMonths: [12, 24, 36], returnPercentage: 6 },
    { id: 3, name: 'ICIC BANK', minAmount: 20000, tenureInMonths: [12, 24], returnPercentage: 7 },
   
  ];

// const dummyFDFunds = [
//   { id: 1, name: 'Equity Fund 1', type: 'Equity', returnPercentage: 10 },
//   { id: 2, name: 'Equity Fund 2', type: 'Equity', returnPercentage: 12 },
//   { id: 3, name: 'Debt Fund 1', type: 'Debt', returnPercentage: 8.6 },
//   { id: 4, name: 'Debt Fund 2', type: 'Debt', returnPercentage: 7.52 },
//   { id: 5, name: 'Hybrid Fund 1', type: 'Hybrid', returnPercentage: 9 },
//   // Add more dummy data as needed
// ];


const FDInvest = () => {
  const [investmentType, setInvestmentType] = useState('');
  const [selectedFundType, setSelectedFundType] = useState('');
  const [investmentTenure, setInvestmentTenure] = useState(0);
  const [monthlySIP, setMonthlySIP] = useState(0);
  const [lumpsumAmount, setLumpsumAmount] = useState(0);
  const [selectedFundId, setSelectedFundId] = useState(null);
  const [estimatedReturn, setEstimatedReturn] = useState(0);

  const [selectedFDId, setSelectedFDId] = useState('');
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');

  const selectedFD = dummyFDFunds.find(fd => fd.id === parseInt(selectedFDId));
  const calculateEstimatedReturn = () => {
    if (!selectedFD || !amount || !tenure) return;
    const monthlyRate = selectedFD.returnPercentage / 12 / 100;
    const tenureInMonths = tenure;
    const futureValue = amount * (Math.pow(1 + monthlyRate, tenureInMonths));
    setEstimatedReturn(futureValue);
  };

  const handleTypeChange = (type) => {
    setInvestmentType(type);
    setSelectedFundType('');
    setSelectedFundId(null);
  };

  const handleFundTypeChange = (type) => {
    setSelectedFundType(type);
  };

  

  const handleInvestmentTenureChange = (e) => {
    setInvestmentTenure(parseInt(e.target.value));
  };

  const handleMonthlySIPChange = (e) => {
    setMonthlySIP(parseInt(e.target.value));
  };

 

  return (
    <div className="fd-new-investment">
      
      <div className="fd-funds-list">
        <h2 className='center'>Available FD'S</h2>
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
            {dummyFDFunds.map(fund => (
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
        
      </div>
        
       
        
      
      <div>
        <label>Name:</label>
        <select value={selectedFDId} onChange={(e) => setSelectedFDId(e.target.value)} className="select-small">
          <option value="">Select FD</option>
          {dummyFDFunds.map(fd => (
            <option key={fd.id} value={fd.id}>{fd.name}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min={selectedFD?.minAmount} />
      </div>
      
      <div>
        <label>Time Period (Months):</label>
        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
      </div>

      {selectedFD && (
        <p>Rate of Interest: {selectedFD.returnPercentage}%</p>
      )}
      
      <button onClick={calculateEstimatedReturn}>Calculate</button>

      <div>
        <p>Estimated Return: ₹{estimatedReturn.toFixed(2)}</p>

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




