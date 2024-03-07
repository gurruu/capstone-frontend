import React from 'react';
import './BankDetails.css';

const BankDetails = () => {
  return (
    <div className="card-bank">

      <div className="header-bank">
        <h7>Account Details</h7>
      </div>


      <div className="section-bank">
        {/* <h3>Pancard Details*</h3> */}
        <h3 style={{color: '#5E5E5E', fontStyle: 'normal', fontWeight: 700, fontSize: '20px', lineHeight: '35px'}}>Pancard Details<span style={{color: '#cb1212'}}>*</span></h3>
        <div className="input-group-bank">
          <input type="text" placeholder="Pancard Number" />
          <input type="file" accept=".png, .jpeg, .jpg, .pdf" />
        </div>
      </div>


      <div className="section-bank">
        {/* <h3>Bank Account Details*</h3> */}
        <h3 style={{color: '#5E5E5E', fontStyle: 'normal', fontWeight: 700, fontSize: '20px', lineHeight: '35px'}}>Bank Account Details<span style={{color: '#cb1212'}}>*</span></h3>
        <div className="input-group-bank">
          <input type="number" placeholder="Account Number" />
          <input type="text" placeholder="Account Holder Name" />
        </div>
        <div className="input-group-bank">
          <input type="text" placeholder="Bank Name" />
          <input type="text" placeholder="IFSC Code" />
        </div>
      </div>


      <div className="footer-bank">
        <button>Update Details</button>
      </div>

    </div>
  );
};

export default BankDetails;
