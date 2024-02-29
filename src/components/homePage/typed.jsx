import React from "react";
import {ReactTyped} from "react-typed";
import "./typed.css";

const Typed = () => {
  const textLines = [
    "Transforming Pennies <br>into Fortunes.",
    "Invest Smart,<br> Live Better.",
    "The Future of Investing is Here.<br> Join the Revolution."
  ];

  return (
    <div className="heroo">
      <ReactTyped className="hero"
        strings={textLines}
        typeSpeed={50}
        loop
        backSpeed={20}
        cursorChar="|"
        showCursor={false}
        style={{ fontSize: "60px", display: "block" }}
      />
      {/* <div className="permanent-line">Your permanent line here</div> */}
    </div>
  );
};

export default Typed;
