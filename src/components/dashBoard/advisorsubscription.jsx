// import React from 'react';
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button"; // Import Button from MUI
// import './advisorsubscription.css';
// import { AppBar } from '@mui/material';
// import Header from './Header';
// import SideBar from './SideBar';

// const data = [
//   { name: "Small Cap Mutual Fund", amount: 1000000, time: 18, risk: "MF", action: "ABC BANK" },
//   { name: "ABC BANK", amount: 57282, time: 6, risk: "FD", action: "XYZ GOLD" },
//   { name: "XYZ GOLD", amount: 65632, time: 12, risk: "Gold", action: "DEF PVT LTD." },
//   { name: "DEF PVT LTD.", amount: 200000, time: 8, risk: "Bonds", action: "" },
// ];

// const handleTickClick = (item) => {
//   console.log("Tick clicked for", item.name);
// };

// const handleCrossClick = (item) => {
//   console.log("Cross clicked for", item.name);
// };

// const AdvisorSubscription = () => {
//   return (
//     <div className="wrapper-login">
//       <Header></Header>
      
//     <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple financial table">
//         <TableHead>
//           <TableRow className="tableHeaderRow">
//             <TableCell className="tableHeaderCell">Name</TableCell>
//             <TableCell align="center" className="tableHeaderCell">Amount</TableCell>
//             <TableCell align="center" className="tableHeaderCell">Time (in months)</TableCell>
//             <TableCell align="center" className="tableHeaderCell">Risk</TableCell>
//             <TableCell align="center" className="tableHeaderCell">Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="center">{row.amount}</TableCell>
//               <TableCell align="center">{row.time}</TableCell>
//               <TableCell align="center">{row.risk}</TableCell>
//               <TableCell align="center">
//                 <Button onClick={() => handleTickClick(row)} style={{ marginRight: '10px', background: 'green', color: 'white' }}>✓</Button>
//                 <Button onClick={() => handleCrossClick(row)} style={{ background: 'red', color: 'white' }}>✕</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// };

// export default AdvisorSubscription;




import React from 'react';
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
  const navigate = useNavigate();
 
  const handleTickClick = (item) => {
    console.log("Tick clicked for", item.name);
    navigate('/sentRequestTable');
  };
 
  const handleCrossClick = (item) => {
    console.log("Cross clicked for", item.name);
  };
 
  return (
    <div className="advisor-wrapper-login">
      <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
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
  );
};
 
export default AdvisorSubscription;
