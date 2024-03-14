import React from 'react';
import './clientTable.css';
import { useNavigate } from 'react-router-dom';
import { data } from '../data/clientsdata';


 
function ClientTable() {
    const navigate = useNavigate();
 
  
  return (
    <>
    <div className='cclient-table-wrap'>
       
        <div className='cclient-table-head-wrap'>
            <ul className='cclient-table-head-list'>
                <li>Name</li>
                <li>Portfolio value</li>
                <li>ROI</li>
                <li>Subscribed on</li>
                <li>Types of investment done</li>
                
            </ul>
        </div>
         {data.map((val)=>{
            return ( <div className='cclient-table-data-wrap'>
            <ul id={val.id} className='cclient-table-head-list'>
                <li>{val.name}</li>
                <li>{val.value}</li>
                <li>{val.roi}</li>
                <li>{val.subsOn}</li>
                <li>{val.type}</li>
                                
            </ul>
        </div>
            )
         })}
    </div>
    </>
  )
}
 
export default ClientTable;