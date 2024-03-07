import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'; // Assuming you have a CSS file for styling
import profileIcon from './profile-icon.png'; // Import the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


function Profile({ openProfileModal, children, closeProfileModal, showBuyModal }) {
  if (!openProfileModal) return null

  const handleBuyClick = (e) => {
    // console.log("from dash" , e.target)
    closeProfileModal()
    showBuyModal()
  }
  return (
    <div className="app-profile">
      {/* Section 1: Header */}
      {/* <header className="header-profile">
        <div className="profile">
          <span className='myprofile'>My Profile</span>
          <img className="profile-icon" src={profileIcon} alt="Profile Icon" />
        </div>
        </header>
        <div className="divider" /> */}


      {/* Section 2: Main Content */}
      <main className="main-profile">

        <div className="left">
          <div className="field-profile">
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" />
          </div>
          <div className="field-profile">
            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" />
          </div>
          <div className="field-profile">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" />
          </div>
          <div className="field-profile">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" />
          </div>
          <div className="field-profile">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" />
          </div>
          <div className="field-profile">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" />
          </div>
          <div className="field-profile">
            <label htmlFor="pincode">Pin Code:</label>
            <input type="text" id="pincode" />
          </div>
          <div className="field-profile">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" />
          </div>
          <button className="save-btn">Save</button>
        </div>



        <div className="right">
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={closeProfileModal}
            style={{ float: "right", width: "50px", height: "30px", cursor: "pointer" }}
          />
          <div onClick={closeProfileModal} className="card-profile">
            <h3>Update your bank & Verification Details</h3>
            {/* <button className="update-btn">Update</button> */}
            <Link className="update-btn">Update</Link>
          </div>
          <div onClick={handleBuyClick} className="card-profile ">
            <h3>Purchase a subscription</h3>
            {/* <button className="buy-btn">Buy Now</button> */}
            <Link className="buy-btn buy-btn-expand">Buy Now</Link>
          </div>
        </div>
      </main>



      {/* Section 3: Footer */}
      {/* <div className="footer-profile">
        <button className="save-btn">Save</button>
      </div> */}
      {/* {children} */}
    </div>
  );
}

export default Profile;

