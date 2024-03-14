import './AdClients.css';
import React ,{useState} from 'react'
import AdSideBar from '../AdSideBar';
import AdHeader from '../AdHeader';
import ClientTable from './ClientTable'

function AdClients() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
  
  return (
    
    <div className='grid-container '>
    <AdHeader OpenSidebar={OpenSidebar} />
    <AdSideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
        <div className="main-container-dashboard">
     
        <ClientTable></ClientTable>
        </div>
        
    </div>
    
  );
}

export default AdClients;
