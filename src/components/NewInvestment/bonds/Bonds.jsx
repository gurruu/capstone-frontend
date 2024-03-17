import React, { useState } from "react";
import "./Bonds.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../svbtn-logo.svg";
import GoldGraph from "../../../utils/goldgraph/GoldGraph";

const dummyMutualFunds = [
  {
    id: 1,
    Name: "NHIT",
    Series: "N3",
    FaceValue: 400,
    Credit: "CARE AAA Stable / IND AAA/Stable",
    Type: "Regular",
    Coupon: 7.9,
    LTP: 410,
    MaturityDate: "2047-11-14",
    Risk: "low",
  },
  {
    id: 2,
    Name: "NHIT",
    Series: "N3",
    FaceValue: 400,
    Credit: "CARE AAA Stable / IND AAA/Stable",
    Type: "Regular",
    Coupon: 7.9,
    LTP: 410,
    MaturityDate: "2047-11-14",
    Risk: "low",
  },
  {
    id: 3,
    Name: "NHIT",
    Series: "N3",
    FaceValue: 400,
    Credit: "CARE AAA Stable / IND AAA/Stable",
    Type: "Regular",
    Coupon: 7.9,
    LTP: 410,
    MaturityDate: "2047-11-14",
    Risk: "low",
  },
  // Add more dummy data as needed
];

const Bonds = () => {
  const [investmentName, setInvestmentName] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [amount, setAmount] = useState(0);
  const [risk, setRisk] = useState("");
  const [expectedAmount, setExpectedAmount] = useState("");
  const [error, setError] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [period, setPeriod] = useState(1); // Setting initial period to 1 year

  const handlePeriodChange = (newValue) => {
    if (newValue >= 0.5 && newValue <= 5) {
      setPeriod(newValue);
    }
  };

  const handleBondSelect =(e)=>{
    console.log(e)
  }

  const calculateSum = () => {
    let sum = 0;
    if (amount && frequency && period) {
      if (frequency === "Daily") {
        sum = parseFloat(amount) * 365 * parseFloat(period);
      } else if (frequency === "Monthly") {
        sum = parseFloat(amount) * 12 * parseFloat(period);
      } else if (frequency === "One-time") {
        sum = parseFloat(amount) * parseFloat(period);
      }
    }
    return sum.toFixed(2);
  };

  const notify = () => toast.success("Investment added!");
  const err = () => toast.error("Could not add investment");
  const navigate = useNavigate();

  const handleInvest = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    let email = null;
    if (userData) {
      email = userData.email || userData.nameid;
    }

    try {
      const goldInvestment = {
        InvestmentName: investmentName,
        InvestmentType: investmentType,
        Amount: parseFloat(amount),
        Risk: risk,
        ExpectedAmount: parseFloat(expectedAmount),
      };

      const response = await fetch(
        `https://localhost:7244/api/newInvestment/gold?userEmail=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(goldInvestment),
        }
      );

      if (!response.ok) {
        err();
        throw new Error("Failed to create gold investment");
      }

      const data = await response.json();
      notify();
      navigate("/dashboard");
      console.log("success", data.message);
    } catch (error) {
      console.error(error); // Log any errors
      setError("Failed to create gold investment");
    }
  };

  return (
    <div className="container-goldinvest">
      <div className="mutual-funds-list">
        <h2 className="center">Available Bonds</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Series</th>
              <th>FaceValue</th>
              <th>Credit</th>
              <th>Type</th>
              <th>Coupon</th>
              <th>LTP</th>
              <th>MaturityDate</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {dummyMutualFunds.map((fund) => (
              <tr key={fund.id} onClick={ handleBondSelect}>
                <td>{fund.Name}</td>
                <td>{fund.Series}</td>
                <td>{fund.FaceValue}</td>
                <td>{fund.Credit}</td>
                <td>{fund.Type}</td>
                <td>{fund.Coupon}</td>
                <td>{fund.LTP}</td>
                <td>{fund.MaturityDate}</td>
                <td>{fund.Risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sub-container-goldinvest">
        <h1
          className="heading-goldinvest"
          style={{ textAlign: "center", fontFamily: "Montserrat" }}
        >
          Calculate&Decide
        </h1>

        <div className="input-container-goldinvest-amount">
          <div className="gold-amt-label">
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="gold-amt-input">
            <input
              type="number"
              id="amount"
              placeholder="₹"
              value={amount}
              onChange={(e) => {
                const input = e.target.value;
                const newValue = input >= 0 ? input : amount; // Only update if input is non-negative
                setAmount(newValue);
              }}
            />
          </div>
        </div>

        <div className="input-container-goldinvest-amount">
          <div className="gold-amt-label">
            <label htmlFor="frequency">Frequency</label>
          </div>
          <div className="gold-freq-input">
            <button
              className={`frequency-goldinvest ${
                frequency === "Daily" ? "selected" : ""
              }`}
              onClick={() => setFrequency("Daily")}
            >
              Daily
            </button>
            <button
              className={`frequency-goldinvest ${
                frequency === "Monthly" ? "selected" : ""
              }`}
              onClick={() => setFrequency("Monthly")}
            >
              Monthly
            </button>
            <button
              className={`frequency-goldinvest ${
                frequency === "One-time" ? "selected" : ""
              }`}
              onClick={() => setFrequency("One-time")}
            >
              One-time
            </button>
          </div>
        </div>

        <div className="input-container-goldinvest-amount">
          <div className="gold-amt-label">
            <label htmlFor="period">Period (years)</label>
          </div>
          <div className="gold-amt-input-period">
            <input
              className="disabled-input"
              style={{ width: "150px" }}
              type="number"
              id="period"
              value={period}
              min="0.5"
              max="5"
              step="0.5"
              onChange={(e) => handlePeriodChange(parseFloat(e.target.value))}
            />
          </div>
        </div>

        <div className="last-goldinvest">
          <img src={logo} alt="logo" />
          <p className="gold-invest-para-amt">
            If you had invested{" "}
            <strong>
              ₹{amount} {frequency}
            </strong>{" "}
            for <strong>{period}</strong> Years, your investments would be worth
          </p>
          <p className="gold-invest-para-amt-2">
            <strong>₹{calculateSum()}</strong>
          </p>
          <button id="invest-btn-goldinvest" onClick={handleInvest}>
            Invest
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Bonds;
