import React ,{useState} from 'react'
import AdSideBar from './AdSideBar';
import AdHeader from './AdHeader';
import AdProfile from './AdProfile';

function AdProfilePage() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
  return (
    <>
    <div className='grid-container '>
    <AdHeader OpenSidebar={OpenSidebar} />
    <AdSideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
    <div className="main-container-dashboard">
    <AdProfile/>
    </div>
    </div>
    </>
  )
}

export default AdProfilePage