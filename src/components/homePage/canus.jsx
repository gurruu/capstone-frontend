// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./canus.css"; // Import CSS file for styling

// const Canus = () => {
//   return (
//     <div className="canus-container">
//       <h2 className="help-text">We're Here to Help</h2>
//       <br></br>
//       <p className="query-text">Still have some queries? Get in touch with us.</p>
//       <br></br><br></br>
//       <Link to="/email" className="email-button">Email</Link>
//     </div>
//   );
// };

// export default Canus;

import React from "react";
import { Link } from "react-router-dom";
import "./canus.css";

const Canus = () => {
  const handleEmailClick = () => {
    // Construct the mailto URI with the recipient email address
    const mailtoUrl = "mailto:ashish.kumar4@incedoinc.com";

    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoUrl;
  };

  return (
    <div className="canus-container">
      <h2 className="help-text">We're Here to Help</h2>
      <br></br >
      <p className="query-text">Still have some queries? Get in touch with us.</p>
      <br></br><br></br>
      {/* Call the handleEmailClick function when the Email button is clicked */}
      {/* <button className="email-button" onClick={handleEmailClick}>Email</button> */}
      <Link onClick={handleEmailClick} className="email-button">Email</Link>
    </div>
  );
};

export default Canus;
