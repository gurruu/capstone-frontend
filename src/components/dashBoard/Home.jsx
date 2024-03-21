import React from "react";
import {Doughnut } from 'react-chartjs-2'
import DashTable from "../dashboardTable/Dashtable";
import NewInvest from "../NewInvestment/NewInvest";
import { Chart, ArcElement } from "chart.js";
import PieChart from "../piechart/PieChart";
import { Link } from "react-router-dom";

function Home({ investmentData }) {
  const totalPortfolioValue = investmentData.reduce((total, investment) => total + investment.amount, 0);
  
  const investmentSums = investmentData.reduce((acc, investment) => {
    const { investmentType, amount } = investment;
    if (!acc[investmentType]) {
      acc[investmentType] = amount;
    } else {
      acc[investmentType] += amount;
    }
    return acc;
  }, {});

  const uniqueInvestments = Object.keys(investmentSums);
  Chart.register(ArcElement);

  const chartLabels = investmentData.map(investment => investment.investmentType);
  const chartData = investmentData.map(investment => investment.amount);


  return (
    <main className="main-container-dashboard">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Portfolio Value</h3>
          </div>
          <h4>Rs. {totalPortfolioValue}</h4>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>ROI</h3>
          </div>
          <h4>33% <svg
            style={{
              width: '1em',
              height: '1em',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: '5px',
            }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12,0 24,24 0,24" fill="#459A7A" />
          </svg></h4>
        </div>

        <div className="card">
          <div className="card-inner">
            <table className="dash-table-invest-info">
              <thead>
                <tr>
                  <th className="dash-th-left">Type</th>
                  <th className="dash-table-right">Investment(INR)</th>
                </tr>
              </thead>
              <tbody>
                {uniqueInvestments.map((investment, index) => (
                  <tr key={index}>
                    <td className="dash-th-left">{investment}</td>
                    <td className="dash-table-right">{investmentSums[investment]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card ">
          <div className="card-inner">
            <h3>Request an Investment Plan</h3>
          </div>
          <Link to="/Investment_Plan" className="dash-start-btn" style={{textAlign:"center",padding:"3px"}}>Start</Link>
        </div>
      </div>
  
      <div className="dashboard-row-2">
        <div className="card-doughnut">
          <div className="card-inner-doughnut">
            <PieChart userData={investmentData}/>
          </div>
        </div>
        <div className="card-chart-dashboard">
        <div className="card-new-invest-inner">
      {/* <NewInvest></NewInvest> */}
      <p>Charts here</p>
      </div>
      </div>
        <div className="card-new-invest">
        <div className="card-new-invest-inner">
      <NewInvest></NewInvest>
      </div>
      </div>
      </div>
      <DashTable />
      </main>
  );
}

export default Home;
