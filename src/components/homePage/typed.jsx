// import React from "react";
// import { ReactTyped } from "react-typed";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./typed.css";

// const Typed = () => {
//   const textLines = [
//     "Transforming Pennies <br>into Fortunes.",
//     "Invest Smart,<br> Live Better.",
//     "The Future of Investing is Here.<br> Join the Revolution."
//   ];

//   return (
//     <div className="heroo">
//       <ReactTyped className="hero"
//         strings={textLines}
//         typeSpeed={50}
//         loop
//         backSpeed={20}
//         cursorChar="|"
//         showCursor={false}
//         style={{ fontSize: "60px", display: "block", marginBottom:"25px"}}
//       />

//       <div className="description" style={{margin:"20px"}}>
//         <p>
//           Experience seamless<br />business management with<br />Nivesh.com's comprehensive suite of tools.
//         </p>
//       </div>
//       {/* Link the button to the sign-in component */}
//       <Link to="/signin" className="get-started-button">Get Started</Link>
//     </div>
//   );
// };

// export default Typed;



// import React from "react";
// import { Link } from "react-router-dom";
// import "./typed.css";

// const Typed = () => {
//   return (
//     <div className="hero-section" style={{ backgroundColor: "#f3f2f3" }}>
//       <h1 className="hero-title">
//         <span className="hero-highlight">Investo: Empowering</span>
//         <br />
//         Your Financial Future
//       </h1>
//       <p className="hero-description">
//         Experience seamless business management with Investo's
//         <br />
//         Comprehensive Suite of Tools.
//       </p>
//       <div className="get-started-button-container">
//         <Link to="/signin" className="get-started-button">Get Started</Link>
//       </div>
//     </div>
//   );
// };

// export default Typed;



import React from "react";
import { Link } from "react-router-dom";
import "./typed.css";

const Typed = () => {
  return (
    <div className="hero-section" style={{ backgroundColor: "#f3f2f3" }}>
      <h1 className="hero-title">
        <span className="hero-highlight" style={{ color: "#5c977c" }}><div className="investo-text">Investo:</div><span className="empowering-text" style={{ color: "#000000" }}>Empowering</span> </span><br />
        <span className="hero-secondary-title" style={{ color: "#000" }}>Your Financial Future</span>
      </h1>
      <p className="hero-description">
        Experience seamless business management with <br />
        Investo's Comprehensive Suite of Tools.
      </p>
      <div className="get-started-button-container" style={{ marginTop: "40px" }}>
        <Link to="/signin" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default Typed;





