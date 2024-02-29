import React from 'react';
import Card from './card.jsx';
import './cardbox.css';

const Cardbox = () => {
  return (
    <div className='ccard'>
      <h1 class="two">How <span class="one">Investo</span> Helps You?</h1>
      <div className="container">
        <Card
          title="Choose your own Advisor." 
          content="Select and Subscribe to your ideal investment Advisor." 
        />
        <Card
          title="Personalized Investment Plans." 
          content="Share your investment details, risk appetite, and receive a personalized investment plan from your advisor." 
        />
        <Card
          title="Investment Advisor Verdict." 
          content="Advisor tracks the portfolio, advices withdrawals when needed." 
        />
      </div>
    </div>
  );
}

export default Cardbox;