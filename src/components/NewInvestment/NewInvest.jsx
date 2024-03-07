import React from 'react';
import './NewInvest.css'; 
import { Link } from 'react-router-dom';
import FDInvest from './FDInvest';
import GoldInvest from './GoldInvest';

const NewInvest = () => {
  return (
    <div className="card-newInvest">

      <h3 style={{color:'#413d3d'}} className="heading-newInvest">Create New Investment</h3>

      <div className="button-group-newInvest">
        <div className="button-container-newInvest">
        <Link to="/GoldInvest">
          <img src={require('./gold.png')} alt="Gold" />
          <p style={{ color: '#5e5e5e' }}>Gold</p>
          </Link>
        </div>

        <div className="button-container-newInvest">
          <Link to="/FDInvest">
          <img src={require('./fixed_deposit.png')} alt="Fixed Deposit" />
          <p style={{ color: '#5e5e5e' }}>Fixed Deposit</p>
          </Link>
        </div>
      </div>


      <div className="button-group-newInvest">

        <div className="button-container-newInvest">
          <img src={require('./bonds.png')} alt="Bonds" />
          <p style={{ color: '#5e5e5e' }}>Bonds</p>
        </div>
        <div className="button-container-newInvest">
          <img src={require('./mutual_funds.png')} alt="Mutual Funds" />
          <p style={{ color: '#5e5e5e' }}>Mutual Funds</p>
        </div>

      </div>

    </div>
  );
}

export default NewInvest;
