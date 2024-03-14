import React ,{useState} from 'react'
import AdSideBar from './AdSideBar';
import AdHeader from './AdHeader';
import Plans from './Plans';;

function PlansPage() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
  return (
    <>
    <div className='grid-container profile-page-contaner'>
    <AdHeader OpenSidebar={OpenSidebar} />
    <AdSideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
    <div className="main-container-dashboard">
    <Plans/>
    </div>
    </div>
    </>
  )
}

export default PlansPage;