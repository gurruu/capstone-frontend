import React from 'react';
import './Subscription.css';

function Subscription() {
  return (
    <div className="container_one">
      <div className="cardone">
        <h2>Monthly</h2>
        <p>₹999</p>
        <p className='para'>0.00%</p>
        <p>Saving Annually</p>
      </div>
      <div className="cardone">
        <h2>Quarterly</h2>
        <p>₹2799</p>
        <p className='para'>6.61%</p>
        <p>Saving Annually</p>
      </div>
      <div className="cardone">
        <h2>Semi Annual</h2>
        <p>₹5499</p>
        <p className='para'>8.26%</p>
        <p>Saving Annually</p>
      </div>
      <div className="cardone">
        <h2>Annual</h2>
        <p>₹10499</p>
        <p className='para'>12.42%</p>
        <p>Saving Annually</p>                                                                                  
      </div>
    </div>
  );
}

export default Subscription;
