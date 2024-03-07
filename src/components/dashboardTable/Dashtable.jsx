import React from 'react'
import './Dashtable.css'
import {data} from '../../data/tabledata'
function Dashtable() {
  return (
    <>
    <div className='table-comp-heading'>
        <h1>Recent Investments</h1>
    </div>
    <div className='dash-table-wrap'>
        {/* <h1>Recent In</h1> */}
        <div className='table-head-wrap'>
            <ul className='table-head-list'>
                <li>Name</li>
                <li>Amount</li>
                <li>PV</li>
                <li>Risk</li>
                <li>Type</li>
                <li className='display-none-text'>Name</li>
            </ul>
        </div>
         {data.map((val)=>{
            return ( <div className='table-data-wrap'>
            <ul id={val.id} className='table-head-list'>
                <li>{val.name}</li>
                <li>{val.amount}</li>
                <li>{val.pv}</li>
                <li>{val.risk}</li>
                <li>{val.type}</li>
                <li><button className='withdraw-btn-table'>Withdraw</button></li>
            </ul>
        </div>
            )
         })}
    </div>
    </>
  )
}

export default Dashtable