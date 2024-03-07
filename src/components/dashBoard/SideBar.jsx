import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCupHot, BsCashStack, BsHouseDoorFill } from 'react-icons/bs'
import { FaPowerOff, FaRegNewspaper } from "react-icons/fa";
import "./SideBar.css"


function SideBar({ openSidebarToggle, OpenSidebar,showProfileModal }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("https://localhost:7244/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        localStorage.clear();
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData.nameid;

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCupHot className='icon_header' /> Hi {userName}!
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <Link to="/">
          <li className="sidebar-list-item">
            <a className="sidebar-item" href="">
              <BsHouseDoorFill className="icon-home" /> Home
            </a>
          </li>
        </Link>
        <li className="sidebar-list-item">
          <a className="sidebar-item" href="">
            <BsCashStack className="icon" /> New Investment
          </a>
        </li>
        <Link>
          <li onClick={showProfileModal} className="sidebar-list-item">
            <a className="sidebar-item"href="">
              <FaRegNewspaper className="icon" /> Profile
            </a>
          </li>
        </Link>
        <Link to="/advisorTable">
        <li className="sidebar-list-item">
          <a className="sidebar-item" href="">
            <BsPeopleFill className="icon" /> Advisors
          </a>
        </li>
        </Link>

        <li className="sidebar-list-item">
          <a className="sidebar-item" href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>


        <li className='sidebar-list-item'>
          <a className="sidebar-item" onClick={handleLogout}>
            <FaPowerOff className='icon' /> Logout
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar
