

import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import Header from "./Header";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import './advisorsubscription.css';
import { useNavigate } from 'react-router-dom';
 
const data = [
  { name: "Small Cap Mutual Fund", amount: 1000000, time: 18, risk: "MF", plandetails: "Details", action: "ABC BANK" },
  { name: "ABC BANK", amount: 57282, time: 6, risk: "FD", plandetails: "Details", action: "XYZ GOLD" },
  { name: "XYZ GOLD", amount: 65632, time: 12, risk: "Gold", plandetails: "Details", action: "DEF PVT LTD." },
  { name: "DEF PVT LTD.", amount: 200000, time: 8, risk: "Bonds", plandetails: "Details", action: "" },
];
 
const AdvisorSubscription = () => {

  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const navigate = useNavigate();
 
  const handleTickClick = (item) => {
    console.log("Tick clicked for", item.name);
    navigate('/sentRequestTable');
  };
 
  const handleCrossClick = (item) => {
    console.log("Cross clicked for", item.name);
  };
 
  return (
    <div className="grid-container">
     <Header OpenSidebar={OpenSidebar} />
    <SideBar 
         showProfileModal={() => setShowProfile(true)}
         openSidebarToggle={openSidebarToggle}
         OpenSidebar={OpenSidebar} 
    />
    
    <div className="advisor-wrapper-login">
      <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029",borderRadius: '3git0px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple financial table">
          <TableHead>
            <TableRow className="tableHeaderRow">
              <TableCell className="tableHeaderCell">Name</TableCell>
              <TableCell align="center" className="tableHeaderCell">Amount</TableCell>
              <TableCell align="center" className="tableHeaderCell">Time (in months)</TableCell>
              <TableCell align="center" className="tableHeaderCell">Risk</TableCell>
              <TableCell align="center" className="tableHeaderCell">Plan Details</TableCell>
              <TableCell align="center" className="tableHeaderCell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">{row.risk}</TableCell>
                <TableCell align="center">
                <Button className='advisor-view-Button' style={{
                    width: '97.77px',
                    height: '46px',
                    background: '#5E5E5E',
                   
                   
                    borderRadius: '50px',
                    fontStyle: 'normal',
                    fontWeight: '80',
                   
                    // lineHeight: '28px',
                    color: '#FFFFFF',
                  }}>View</Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleTickClick(row)} style={{
                    marginRight: '10px',
                    backgroundColor: '#459A7A',
                    color: 'white',
                    boxShadow: '0px 10px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '5px',
                    padding: '5px 2px',
                     
                  }}>✓</Button>
                  <Button onClick={() => handleCrossClick(row)} style={{
                    backgroundColor: '#CE1313',
                    color: 'white',
                    boxShadow: '0px 10px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '5px',
                    padding: '5px 2px',
                  }}>✕</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
};
 
export default AdvisorSubscription;
