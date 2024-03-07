



import React from 'react';
import './SubscriptionPage.css';
import Subscription from './Subscription';

function SubscriptionPage({closeBuyPage,openBuyModal}) {
  if(!openBuyModal) return null
  return (
    <div className="Apple">
      <div className='apple-flex-container'>
        <p onClick={closeBuyPage} className='close-buy-page'>X</p>
      <h2 className='buy-header'>Subscription Details</h2>
      <Subscription />
      <a href="/" class='linkstyle'>Take a Free Trail for 7 Days</a>
      <br/>

      <button class="enterbutton">Buy</button>
      </div>
    </div>
  );
}

export default SubscriptionPage;




