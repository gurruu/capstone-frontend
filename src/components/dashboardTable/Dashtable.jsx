
import React from 'react';
import './Dashtable.css';
import { data } from '../../data/tabledata';
import { ThumbUp, ThumbDown, GetApp } from '@mui/icons-material'; // Import icons from MUI

function Dashtable() {
  return (
    <div className='dash-table-wrap-one'>
      <div className='table-comp-heading-one'>
        <h1>Recent Investments</h1>
      </div>
      <table className='dash-table-one'>
        <thead>
          <tr className='table-head-row-one'>
            <th className='table-content-one'>Name</th>
            <th className='table-content-one'>Amount</th>
            <th className='table-content-one'>PV</th>
            <th className='table-content-one'>Risk</th>
            <th className='table-content-one'>Type</th>
            <th className='table-content-one'>Advice</th> {/* New column for Advice */}
            <th className='table-content-one'>Action</th>
            <th className='table-content-one'>Report</th> {/* New column for Report */}
            {/* <th className='display-none-text'>Name</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id} className='table-data-row-one'>
              <td className='table-content-one'>{val.name}</td>
              <td className='table-content-one'>{val.amount}</td>
              <td className='table-content-one'>{val.pv}</td>
              <td className='table-content-one'>{val.risk}</td>
              <td className='table-content-one'>{val.type}</td>
              <td className='table-content-one'>
                {val.advice ? <ThumbUp style={{ color: 'green' }} /> : <ThumbDown style={{ color: 'red' }} />}
              </td>
              <td className='table-content-one'>
                <button className='withdraw-btn-table-one'>Withdraw</button>
              </td>
              <td className='table-content-one'>
                <GetApp />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashtable;
