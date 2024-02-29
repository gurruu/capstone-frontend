import React from 'react'
import { Link } from 'react-router-dom';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCupHot, BsCashStack, BsHouseDoorFill}
 from 'react-icons/bs'
 import { FaPowerOff,FaRegNewspaper } from "react-icons/fa";
function SideBar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCupHot  className='icon_header'/> Hi Gaurav!
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <Link to="/">
          <li className='sidebar-list-item'>
                <a className='home-link' href="">
                    <BsHouseDoorFill className='icon-home'/> Home
                </a>
            </li>
          </Link>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCashStack className='icon'/> New Investment
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaRegNewspaper className='icon'/> News Feed
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Advisors
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaPowerOff className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar