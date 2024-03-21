import React, { useState, useEffect } from "react";
import "./Bonds.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BondsData from "../../data/BondsData.json";

const Bonds = () => {
  const [bondsData, setBondsData] = useState(BondsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [bondsPerPage] = useState(9);
  const [rowBgColor, setRowBgColor] = useState("white");

  
  const notify = () => toast.success("Investment added!");
  const err = () => toast.error("Could not add investment");
  const navigate = useNavigate();


  const indexOfLastBond = currentPage * bondsPerPage;
  const indexOfFirstBond = indexOfLastBond - bondsPerPage;
  const currentBonds = bondsData.slice(indexOfFirstBond, indexOfLastBond);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBondSelect = (e) => {
    console.log(e.target.closest("tr"));
    const clickedRow = e.target.closest("tr");
    const rowData = Array.from(clickedRow.cells).map((cell) => cell.textContent);
    setRowBgColor("#3c7e63");

    console.log(rowData);
  };

  const handleInvestClick = async (bond) => {

    const userData = JSON.parse(localStorage.getItem("userData"));
    let email = null;
    if (userData) {
      email = userData.email || userData.nameid;
    }

    try {
      const response = await fetch(`https://localhost:7244/api/newInvestment/bonds?userEmail=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Amount: bond.FaceValue, 
          PurchaseDate: new Date(),
          Type: bond.Type,
          MaturityDate: bond.MaturityDate,
          Risk: bond.Risk,
          Series: bond.Series,
          BondName: bond.Name,
          Credit: bond.Credit,
          CouponValue: bond.Coupon,
          ExpectedReturn: bond.ExpectedReturn,
        }),
      });
      if (!response.ok) {
        err();
        throw new Error("Failed to add investment");
      }

      const data = await response.json();
      notify();
      navigate("/dashboard");
      console.log("success", data.message);
    } catch (error) {
      console.error("Error adding investment:", error.message);
      err();
    }
  };

  return (
    <div className="container-bonds">
      <div className="mutual-funds-list bonds-wrap">
        <h2 className="center">Available Bonds</h2>
        <br />
        <table>
          <thead className="bonds-th-color">
            <tr>
              <th>Name</th>
              <th>Series</th>
              <th>FaceValue</th>
              <th>Type</th>
              <th>Credit</th>
              <th>Coupon</th>
              <th>LTP</th>
              <th>MaturityDate</th>
              <th>Risk</th>
              <th>Invest Here</th>
            </tr>
          </thead>
          <tbody>
            {currentBonds.map((bond) => (
              <tr key={bond.ID} onClick={handleBondSelect}>
                <td>{bond.Name}</td>
                <td>{bond.Series}</td>
                <td>{bond.FaceValue}</td>
                <td>{bond.Type}</td>
                <td>{bond.Credit}</td>
                <td>{bond.Coupon}</td>
                <td>{bond.LTP}</td>
                <td>{bond.MaturityDate}</td>
                <td>{bond.Risk}</td>
                <td>
                  <button className="bonds-invest-button" onClick={() => handleInvestClick(bond)}>
                    Invest
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(bondsData.length / bondsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bonds;
