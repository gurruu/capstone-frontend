import React from 'react';
import './adRequestTable.css';
import { useNavigate } from 'react-router-dom';
import { dataa } from '../data/requestdata';

 
function AdRequestTable() {

  const navigate = useNavigate();
 
  const handleSelectClick = () => {
    navigate('/'); // Navigate to the that page page on clicking 
  };

  return (
    <>
    <div className='adRequest-table-wrap'>
       
        <div className='adRequest-table-head-wrap'>
            <ul className='adRequest-table-head-list'>
                <li>Name</li>
                <li>Amount</li>
                <li>Time(in months)</li>
                <li>Type</li>
                <li>Risk</li>
                <li>Actions</li>
               
            </ul>
        </div>
         {dataa.map((val)=>{
            return ( <div className='adRequest-table-data-wrap'>
            <ul id={val.id} className='adRequest-table-head-list'>
                <li>{val.name}</li>
                <li>{val.amt}</li>
                <li>{val.time}</li>
                <li>{val.type}</li>
                <li>{val.risk}</li>
                <li><button className='adRequest-modify-btn-table' onClick={handleSelectClick}>Modify</button></li>
            </ul>
        </div>
            )
         })}
    </div>
    </>
  )
}
 
export default AdRequestTable;