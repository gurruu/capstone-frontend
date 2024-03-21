import React, { useState } from 'react';
import './BankDetails.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BankDetails = () => {
  const [pancardNumber, setPancardNumber] = useState('');
  const [panFile, setPanFile] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifscCode, setIFSCCode] = useState('');
  const [error, setError] = useState('');



  const notify = () => toast.success('Bank Details Updated!');
  const err = () => toast.error('Error updating details!');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));
    const jwtToken = localStorage.getItem("jwtToken");

    let email = null;
    if (userData) {
      email = userData.email || userData.nameid;
    }

    try {
      const formData = new FormData();
      formData.append('userEmail', email);
      formData.append('panNumber', pancardNumber);
      formData.append('bankAccNumber', accountNumber);
      formData.append('accHolderName', accountHolderName);
      formData.append('bankName', bankName);
      formData.append('ifscCode', ifscCode);
      formData.append('panFile', panFile); // Add the file to the form data

      const response = await fetch(`https://localhost:7244/api/addBankDetails?userEmail=${email}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        err();
        throw new Error(errorData.errors[""]);
      }

      const data = await response.json();
      notify();
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      console.log(error);
      setError('Failed to add bank details');
    }
  };

  return (
    <div className="card-bank">
      <div className="header-bank">
        <h7>Sign Up</h7>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="section-bank">
          <h3 style={{ color: '#5E5E5E', fontStyle: 'normal', fontWeight: 700, fontSize: '20px', lineHeight: '35px' }}>Pancard Details<span style={{ color: '#cb1212' }}>*</span></h3>
          <div className="input-group-bank">
            <input type="text" placeholder="Pancard Number" value={pancardNumber} onChange={(e) => setPancardNumber(e.target.value)} />
            <input type="file" accept=".png, .jpeg, .jpg, .pdf" onChange={(e) => setPanFile(e.target.files[0])} />
          </div>
        </div>

        <div className="section-bank">
          <h3 style={{ color: '#5E5E5E', fontStyle: 'normal', fontWeight: 700, fontSize: '20px', lineHeight: '35px' }}>Bank Account Details<span style={{ color: '#cb1212' }}>*</span></h3>
          <div className="input-group-bank">
            <input type="number" placeholder="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            <input type="text" placeholder="Account Holder Name" value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} />
          </div>
          <div className="input-group-bank">
            <input type="text" placeholder="Bank Name" value={bankName} onChange={(e) => setBankName(e.target.value)} />
            <input type="text" placeholder="IFSC Code" value={ifscCode} onChange={(e) => setIFSCCode(e.target.value)} />
          </div>
        </div>

        <div className="footer-bank">
          <button type="submit">Update Details</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default BankDetails;
