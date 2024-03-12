import React from 'react';
import './advisorTable.css';
import { useNavigate } from 'react-router-dom';
import { data } from '../../data/advisortabledata';
import AdvisorSubscription from './advisorsubscription';
 
import Header from './Header';
import SideBar from './SideBar';
 
function AdvisorTable() {
    const navigate = useNavigate();
 
  const handleSelectClick = () => {
    navigate('/advisorsubscription'); // Navigate to the subscription page
  };
  return (
    <>
   
    <div className='advisor-table-wrap'>
       
        <div className='advisor-table-head-wrap'>
            <ul className='advisor-table-head-list'>
                <li>Name</li>
                <li>No. of Subs</li>
                <li>ROI</li>
                <li>Expertise</li>
                <li>Action</li>
                {/* <li className='display-none-text'>Name</li> */}
            </ul>
        </div>
         {data.map((val)=>{
            return ( <div className='advisor-table-data-wrap'>
            <ul id={val.id} className='advisor-table-head-list'>
                <li>{val.name}</li>
                <li>{val.subs}</li>
                <li>{val.roi}</li>
                <li>{val.expertise}</li>
                {/* <li>{val.action}</li> */}
                <li><button className='advisor-select-btn-table' onClick={handleSelectClick}>Select</button></li>
            </ul>
        </div>
            )
         })}
    </div>
    </>
  )
}
 
export default AdvisorTable