import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button"; // Import Button from MUI
import './advisorsubscription.css';
import { AppBar } from '@mui/material';
import Header from './Header';
import SideBar from './SideBar';

const data = [
  { name: "Small Cap Mutual Fund", amount: 1000000, time: 18, risk: "MF", action: "ABC BANK" },
  { name: "ABC BANK", amount: 57282, time: 6, risk: "FD", action: "XYZ GOLD" },
  { name: "XYZ GOLD", amount: 65632, time: 12, risk: "Gold", action: "DEF PVT LTD." },
  { name: "DEF PVT LTD.", amount: 200000, time: 8, risk: "Bonds", action: "" },
];

const handleTickClick = (item) => {
  console.log("Tick clicked for", item.name);
};

const handleCrossClick = (item) => {
  console.log("Cross clicked for", item.name);
};

const AdvisorSubscription = () => {
  return (
    <div className="wrapper-login">
      <Header></Header>
      
    <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple financial table">
        <TableHead>
          <TableRow className="tableHeaderRow">
            <TableCell className="tableHeaderCell">Name</TableCell>
            <TableCell align="center" className="tableHeaderCell">Amount</TableCell>
            <TableCell align="center" className="tableHeaderCell">Time (in months)</TableCell>
            <TableCell align="center" className="tableHeaderCell">Risk</TableCell>
            <TableCell align="center" className="tableHeaderCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.risk}</TableCell>
              <TableCell align="center">
                <Button onClick={() => handleTickClick(row)} style={{ marginRight: '10px', background: 'green', color: 'white' }}>✓</Button>
                <Button onClick={() => handleCrossClick(row)} style={{ background: 'red', color: 'white' }}>✕</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default AdvisorSubscription;
