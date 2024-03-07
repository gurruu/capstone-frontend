 import React from "react";   
 import Card from "./card";   
    import "./cardbox.css"
const cardbox = () => {
  return (
    <div className="app">
      {/* <h1>Card Container with Modal</h1> */}
      {/* <Login/>  */}
      <div className="container" >
        <div className="row">
      <Card imageUrl=".\pictures\Fixed_investment.jpg" modalTitle="Fixed Deposit" modalContent="This is the content for Fixed Deposit." />
      <Card imageUrl=".\pictures\gold_investment.jpg" modalTitle="Gold" modalContent="This is the content for Gold Investment."/>
      </div>
      <div className="row">
     <Card imageUrl=".\pictures\mutual_funds.jpg" modalTitle="Mutual Funds" modalContent="This is the content for Mutual Funds."/>
      <Card imageUrl=".\pictures\SIP's_investment.jpg" modalTitle="SIPs" modalContent="This is the content for SIP's."/>
      </div>
      </div>
    </div>
  );
};

export default cardbox;