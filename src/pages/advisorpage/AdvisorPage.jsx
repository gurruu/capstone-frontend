
import './AdvisorPage.css';
import React ,{useState} from 'react'
import SideBar from '../../components/dashBoard/SideBar'
import Header from '../../components/dashBoard/Header';
import AdvisorTable from '../../components/dashBoard/advisorTable';

function AdvisorPage() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
  
  return (
    
    <div className='grid-container '>
    <Header OpenSidebar={OpenSidebar} />
    <SideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
        <div className=''>
        <AdvisorTable />
        </div>
        
    </div>
    
  );
}

export default AdvisorPage;
