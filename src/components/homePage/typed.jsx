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
    <div className="heading">
      <ReactTyped className="hero"
        strings={textLines}
        typeSpeed={100}
        loop
        backSpeed={20}
        cursorChar=">"
        showCursor={false}
        style={{ fontSize: "60px", display: "block" }}
      />
    </div>
  );
};

export default Typed;
