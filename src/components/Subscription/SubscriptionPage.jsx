



import React from 'react';
import './SubscriptionPage.css';
import Subscription from './Subscription';

function SubscriptionPage() {
  
  return (
    
      <div className='apple-flex-container'>
        
      <h2 className='buy-header'>Subscription Details</h2>
      <Subscription />
      <a href="/" class='linkstyle'>Take a Free Trail for 7 Days</a>
      <br/>

      <button class="enterbutton">Buy</button>
      </div>
    
  );
}

export default SubscriptionPage;




