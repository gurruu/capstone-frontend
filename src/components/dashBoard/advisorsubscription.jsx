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
import { useNavigate, useParams } from 'react-router-dom';

const AdvisorSubscription = () => {
  const { advisorId } = useParams();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const navigate = useNavigate();

  const handleTickClick = () => {
    
    navigate(`/sentRequests/${advisorId}`);
  };

  const handleCrossClick = () => {
  };


  const handleSentPlansClick = () => {
    navigate(`/sentRequests/${advisorId}`)
  };


  useEffect(() => {
    const fetchAdvisorPlans = async () => {
      try {
        const response = await fetch(`https://localhost:7244/api/viewAdvisorPlans?advisorId=${advisorId}`);
        if (response.ok) {
          const data = await response.json();
          setPlans(data.allPlans);
        } else {
          console.error('Failed to fetch advisor plans:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching advisor plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvisorPlans();
  }, [advisorId]);


  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <SideBar
        showProfileModal={() => setShowProfile(true)}
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <div className="advisor-wrapper-login">
        <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029", borderRadius: '30px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple financial table">
            <TableHead>
              <TableRow className="tableHeaderRow">
                <TableCell className="tableHeaderCell">Name</TableCell>
                <TableCell align="center" className="tableHeaderCell">Amount</TableCell>
                <TableCell align="center" className="tableHeaderCell">Type</TableCell>
                <TableCell align="center" className="tableHeaderCell">Risk</TableCell>
                <TableCell align="center" className="tableHeaderCell">Start Date</TableCell>
                <TableCell align="center" className="tableHeaderCell">Plan Details</TableCell>
                <TableCell align="center" className="tableHeaderCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plans.map((row, index) => (
                <TableRow key={row.investorInfoID}>
                  <TableCell component="th" scope="row">{row.investmentName}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">{row.investmentType}</TableCell>
                  <TableCell align="center">{row.risk}</TableCell>
                  <TableCell align="center">{row.startDate}</TableCell>
                  <TableCell align="center">
                    <Button className='advisor-view-Button' style={{
                      width: '97.77px',
                      height: '46px',
                      background: '#5E5E5E',
                      borderRadius: '50px',
                      fontStyle: 'normal',
                      fontWeight: '80',
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

        <button onClick={handleSentPlansClick} className="sent-plans-button">
          Sent Plans
        </button>
      </div>
    </div>
  );
};

export default AdvisorSubscription;
