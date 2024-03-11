import React ,{useState} from 'react'
import SideBar from '../../components/dashBoard/SideBar'
import Header from '../../components/dashBoard/Header';
import BankDetails from '../../components/dashBoard/BankDetails';
import './AccountDetail.css'
function AccountDetail() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
  return (
    <div className='grid-container account-detail-wrap'>
    <Header OpenSidebar={OpenSidebar} />
    <SideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
        <div className='account-detail-cont'>
        <BankDetails/>
        </div>
        
    </div>
  )
}

export default AccountDetail