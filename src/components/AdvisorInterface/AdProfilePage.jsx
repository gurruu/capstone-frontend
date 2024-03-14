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
    <div className='grid-container profile-page-contaner'>
    <AdHeader OpenSidebar={OpenSidebar} />
    <AdSideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
    <AdProfile/>
    </div>
    </>
  )
}

export default AdProfilePage