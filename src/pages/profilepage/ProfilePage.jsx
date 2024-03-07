import React ,{useState} from 'react'
import SideBar from '../../components/dashBoard/SideBar'
import Header from '../../components/dashBoard/Header';
import Profile from '../../components/dashBoard/Profile';

function ProfilePage() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
  return (
    <>
    <div className='grid-container profile-page-contaner'>
    <Header OpenSidebar={OpenSidebar} />
    <SideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
        <Profile/>
    </div>
    </>
  )
}

export default ProfilePage