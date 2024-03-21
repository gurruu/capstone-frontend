import './adRequestPage.css';
import React ,{useState} from 'react'
import AdSideBar from '../AdSideBar'
import AdHeader from '../AdHeader'
import AdRequestTable from './AdRequestTable'

function AdRequestPage() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
  
  return (
    
    <div className='grid-container '>
    <AdHeader OpenSidebar={OpenSidebar} />
    <AdSideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
        <div className= 'main-container-dashboard'>

        <AdRequestTable/>
        </div>
        
    </div>
    
  );
}

export default AdRequestPage;
