import React from 'react';
import './PerformanceContainer.css';
 
const PerformanceContainer = () => {
  return (
    <>
    
    <div className="performance-container">
    {/* <h2>Performance</h2> */}
      <div className="flex-container">
        <div className="price-container">
          <h3>Live Buy Price</h3>
          <p>₹123.45/gm</p>
        </div>
        <div className="absolute-container">
          <h3>Absolute Returns</h3>
          <p>+6.78%</p>
        </div>
        <div className="cagr-container">
          <h3>CAGR</h3>
          <p>+10.25%</p>  
        </div>
        <div className="buttons-container">
          <button>1M</button>
          <button>3M</button>
          <button>6M</button>
          <button>1Y</button>
          <button>3Y</button>
          <button>5Y</button>
        </div>
      </div>
    </div>
    </>
  );
};
 
export default PerformanceContainer;