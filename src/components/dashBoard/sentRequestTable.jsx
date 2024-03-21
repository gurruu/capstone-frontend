import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import Header from "./Header";
import './sentRequestTable.css';

function SentRequestTable() {
    const { advisorId } = useParams();
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPlansByAdvisorId(advisorId);
    }, [advisorId]);

    const fetchPlansByAdvisorId = async (advisorId) => {
        try {
            const response = await fetch(`https://localhost:7244/api/viewPlans?advisorId=${advisorId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch plans');
            }
            const data = await response.json();
            console.log("plans", data.allPlans); 
            setPlans(data.allPlans);
        } catch (error) {
            console.error('Error fetching plans:', error);
        }
    };

    const handleReceivedPlansClick = () => {
        navigate(`/receivedRequests/${advisorId}`); // Navigate to ReceivedRequests page with advisorId as parameter
    };

    return (
        <div className="grid-container">
            <Header />
            <SideBar />
            <div className='sent-request-table-wrap'>
                <div className='sent-request-table-head-wrap'>
                    <ul className='sent-request-table-head-list'>
                        <li>Name</li>
                        <li>Amount</li>
                        <li>Type</li>
                        <li>Risk</li>
                        <li>Status</li>
                    </ul>
                </div>
                {plans.map((plan) => (
                    <div key={plan.investorInfoID} className='sent-request-table-data-wrap'>
                        <ul className='sent-request-table-data-list'>
                            <li>{plan.investmentName}</li>
                            <li>{plan.amount}</li>
                            <li>{plan.investmentType}</li>
                            <li>{plan.risk}</li>
                            <li>{plan.status}</li>
                        </ul>
                    </div>
                ))}
                <button onClick={handleReceivedPlansClick} className="received-plans-button">
                    Received Plans
                </button>
            </div>
        </div>
    );
}

export default SentRequestTable;
