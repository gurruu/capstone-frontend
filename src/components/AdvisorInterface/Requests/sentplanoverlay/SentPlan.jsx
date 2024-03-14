import React from 'react';
import './SentPlan.css';
import { useNavigate } from 'react-router-dom';
import { data } from './sentplandata;'

 
function SentPlan() {

  const navigate = useNavigate();
 
 

  return (
    <>
    <div className='sentplan-table-wrap'>
       
        <div className='sentplan-table-head-wrap'>
            <ul className='sentplan-table-head-list'>
                <li>Name</li>
                <li>Amount</li>
                <li>Time(in months)</li>
                <li>Type</li>
                <li>Status</li>
              
               
            </ul>
        </div>
         {data.map((val)=>{
            return ( <div className='sentplan-table-data-wrap'>
            <ul id={val.id} className='sentplan-table-head-list'>
                <li>{val.name}</li>
                <li>{val.amt}</li>
                <li>{val.time}</li>
                <li>{val.type}</li>
                <li>{val.status}</li>
               
            </ul>
        </div>
            )
         })}
    </div>
    </>
  )
}
 
export default SentPlan;