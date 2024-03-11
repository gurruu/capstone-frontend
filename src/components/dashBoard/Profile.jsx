import { React, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Profile.css'; 
import toast, { Toaster } from 'react-hot-toast';

function Profile() {
  // if (!openProfileModal) return null

  const jwtToken = localStorage.getItem('jwtToken');
  const userData = JSON.parse(localStorage.getItem('userData'));
  let userEmail = null;

  if (userData) {
    userEmail = userData.email || userData.nameid;
  }


  const notify = () => toast.success('Changes saved!');
  const err = () => toast.error('Error saving changes!');
  const navigate = useNavigate();


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [company, setCompany] = useState('');


  const updateDetails = async () => {

    const userData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      company
    };
  
    try {
      const response = await fetch(`https://localhost:7244/api/updateProfile?email=${userEmail}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        err();
        throw new Error('Failed to update user information');
      }
      

      console.log("user info:", response);
      notify();
      navigate("/dashboard");
    } catch (error) {
      err();
      console.log("error", error);
    }
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
            <label htmlFor="fullname">First Name:</label>
            <input type="text" id="fullname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="field-profile">
            <label htmlFor="fullname">Last Name:</label>
            <input type="text" id="fullname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="field-profile">
            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div> 
          <div className="field-profile">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="field-profile">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="field-profile">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="field-profile">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />
          </div>
          <div className="field-profile">
            <label htmlFor="pincode">Company:</label>
            <input type="text" id="pincode" value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <button onClick={updateDetails} className="save-btn">Save</button>
        </div>


        <div className="right">
          {/* <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={closeProfileModal}
            style={{ float: "right", width: "50px", height: "30px", cursor: "pointer" }}
          /> */}
          <div className="card-profile">
            <h3>Update your bank & Verification Details</h3>
            {/* <button className="update-btn">Update</button> */}
            <Link to='/bankdetails' className="update-btn">Update</Link>
          </div>
          <div className="card-profile ">
            <h3>Purchase a subscription</h3>
            {/* <button className="buy-btn">Buy Now</button> */}
            <Link to='/buy' className="buy-btn buy-btn-expand">Buy Now</Link>
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

