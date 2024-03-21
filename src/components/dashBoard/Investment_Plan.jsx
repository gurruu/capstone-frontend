import React, { useEffect, useState } from 'react';
import './Investment_Plan.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Investment_Plan = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [days, setDays] = useState('');
  const [risk, setRisk] = useState('');
  const [type, setType] = useState('');

  const [advisors, setAdvisors] = useState([]);
  const [selectedAdvisor, setSelectedAdvisor] = useState('');

  const navigate = useNavigate();
  const notify = () => toast.success("Plan sent successfully!");
  const err = () => toast.error("Error sending plan!");



  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        const response = await fetch(`https://localhost:7244/api/getAdvisors`);
        if (!response.ok) {
          throw new Error('Failed to fetch advisors');
        }
        const data = await response.json();
        setAdvisors(data); 
      } catch (error) {
        console.error('Error fetching advisors:', error);
      }
    };

    fetchAdvisors();
  }, []);


  const handleInvest = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    let email = null;
    if (userData) {
      email = userData.nameid || userData.email;
    } 

    try {
      const response = await fetch(`https://localhost:7244/api/requestPlan?userEmail=${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          InvestmentName: name,
          InvestmentType: type,
          Amount: parseFloat(amount.replace('₹', '')),
          Risk: risk,
          AdvisorID: selectedAdvisor,
        }),
      });

      if (!response.ok) {
        err();
        throw new Error('Failed to request plan');
      }

      const data = await response.json();
      notify();
      navigate("/dashboard");
    } catch (error) {
      err();
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-plans">

      <h3 className="heading-plans" style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Request a Plan</h3>

      <div className="sub-container-plans">
        <div className="input-container-plans">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-container-plans">
          <label htmlFor="risk">Type</label>
          <select style={{ width: '260px', color: '#757575' }} value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="Gold">Gold</option>
            <option value="Fixed Deposits">Fixed Deposits</option>
            <option value="Bonds">Bonds</option>
            <option value="Mutual Funds">Mutual Funds</option>
          </select>
        </div>

        <div className="input-container-plans">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            placeholder="₹"
            value={amount}
            onChange={(e) => setAmount(e.target.value.startsWith('₹') ? e.target.value : '₹' + e.target.value)}
          />
        </div>

        <div className="input-container-plans">
          <label htmlFor="timeframe">Time frame</label>
          <input
            type="text"
            id="years"
            placeholder="Years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            style={{ width: '72px' }}
          />
          <input
            type="text"
            id="months"
            placeholder="Months"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            style={{ width: '80px' }}
          />
          <input
            type="text"
            id="days"
            placeholder="Days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            style={{ width: '70px' }}
          />
        </div>

        <div className="input-container-plans">
          <label htmlFor="risk">Risk factor</label>
          <select style={{ width: '260px', color: '#757575' }} value={risk} onChange={(e) => setRisk(e.target.value)}>
            <option value="">Select Risk</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="input-container-plans">
          <label htmlFor="advisors">Advisors</label>
          <select
            id="advisors"
            value={selectedAdvisor}
            onChange={(e) => setSelectedAdvisor(e.target.value)}
          >
            <option value="">Select Advisor</option>
            {advisors.map((advisor) => (
              <option key={advisor.advisorID} value={advisor.advisorID}>
                {advisor.firstName} {advisor.lastName}
              </option>
            ))}
          </select>
        </div>


        <div className="center-plans">
          <button id="sent-btn-plans" onClick={handleInvest}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Investment_Plan;
