import React from "react";
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import data from '../../data/sourceData.json'
import DashTable from "../dashboardTable/Dashtable";
import Profile from "./Profile";
import NewInvest from "../NewInvestment/NewInvest"

function Home({ investmentData }) {
  Chart.register(ArcElement);
 const totalPortfolioValue = investmentData.reduce((total, investment) => total + investment.amount, 0);

  const chartLabels = investmentData.map(investment => investment.investmentName);
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
                {investmentData.map((investment, index) => (
                  <tr key={index}>
                    <td className="dash-th-left">{investment.investmentName}</td>
                    <td className="dash-table-right">{investment.amount}</td>
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
          <button className="dash-start-btn">Start</button>
        </div>
      </div>

      <div className="main-cards-doughnut">
        <div className=" card-doughnut">
          <div className="card-inner-doughnut">
            <Doughnut
              data={{
                labels: chartLabels,
                datasets: [
                  {
                    data: chartData,
                    backgroundColor: [
                      '#BBCFAC',
                      '#003943',
                      '#2B5D5C',
                      '#558375'
                    ],
                    hoverOffset: 5
                  }
                ]
              }}
            />
          </div>
        </div>
        <div className="card-doughnut">
        <div className="card-inner">
      <NewInvest></NewInvest>
      </div>
      </div>
      </div>
      <DashTable />
    </main>
  );
}

export default Home;