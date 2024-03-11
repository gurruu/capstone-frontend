import React from 'react';
import { data } from '../../data/tabledata';
import './Investment_Page.css';
import { ThumbUp, ThumbDown, GetApp } from '@mui/icons-material';
import SideBar from './SideBar';




const Investments_Page = () => {
  return (
    <div>
        
        <div className="investment-profile">
        {/* Section 1: Header */}
        <header className="header-profile-investments">
            <div className="profile-investments">
            <span className='myprofile-investments'>Investments</span>
            {/* <img className="profile-icon" src={profileIcon} alt="Profile Icon" /> */}
            </div>
            </header>
            <div className="divider-investments" />
            <br/>
            <br/>

            <div className='dash-table-wrap-investments'>
        
                <table className='dash-table-investments'>
                    <thead>
                    <tr className='table-head-row-investments'>
                        <th className='table-content-investments'>Name</th>
                        <th className='table-content-investments'>Amount</th>
                        <th className='table-content-investments'>PV</th>
                        <th className='table-content-investments'>Risk</th>
                        <th className='table-content-investments'>Type</th>
                        <th className='table-content-investments'>Advice</th> {/* New column for Advice */}
                        <th className='table-content-investments'>Action</th>
                        <th className='table-content-investments'>Report</th> {/* New column for Report */}
                        {/* <th className='display-ninvestments-text'>Name</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((val) => (
                        <tr key={val.id} className='table-data-row-investments'>
                        <td className='table-content-investments'>{val.name}</td>
                        <td className='table-content-investments'>{val.amount}</td>
                        <td className='table-content-investments'>{val.pv}</td>
                        <td className='table-content-investments'>{val.risk}</td>
                        <td className='table-content-investments'>{val.type}</td>
                        <td className='table-content-investments'>
                            {val.advice ? <ThumbUp style={{ color: 'green' }} /> : <ThumbDown style={{ color: 'red' }} />}
                        </td>
                        <td className='table-content-investments'>
                            <button className='withdraw-btn-table-investments'>Withdraw</button>
                        </td>
                        <td className='table-content-investments'>
                            <GetApp />
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
        </div>
 
    
</div>
  )
}

export default Investments_Page;
