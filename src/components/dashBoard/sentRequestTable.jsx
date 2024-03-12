import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import Header from "./Header";
import './sentRequestTable.css';
 
import { data } from '../../data/sentRequesttabledata';
 
function SentRequestTable() {
    
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
 
    return (
        <div className="grid-container">
     <Header OpenSidebar={OpenSidebar} />
    <SideBar 
         showProfileModal={() => setShowProfile(true)}
         openSidebarToggle={openSidebarToggle}
         OpenSidebar={OpenSidebar} 
    />
            <div className='sent-request-table-wrap'>
                <div className='sent-request-table-head-wrap'>
                    <ul className='sent-request-table-head-list'>
                        <li>Name</li>
                        <li>Amount</li>
                        <li>Time
                            (in months)</li>
                        <li>Type</li>
                        <li>Risk</li>
                        <li>Status</li>
                       
                    </ul>
                </div>
                {data.map((val) => {
                    return (
                        <div key={val.id} className='sent-request-table-data-wrap'>
                            <ul className='sent-request-table-data-list'>
                                <li>{val.name}</li>
                                <li>{val.amount.toLocaleString()}</li>
                                <li>{val.time}</li>
                                <li>{val.type}</li>
                                <li>{val.risk}</li>
                                <li style={{
                                        color: val.status === 'Pending' ? 'red' :
                                    val.status === 'Completed' ? 'green' :
                          val.status === 'In Progress' ? '#FFC700' : 'inherit'
                 }}>
                                {val.status}
                                </li>
                               
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
 
export default SentRequestTable;