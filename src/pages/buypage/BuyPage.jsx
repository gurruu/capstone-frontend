import React ,{useState} from 'react'
import SideBar from '../../components/dashBoard/SideBar'
import Header from '../../components/dashBoard/Header';
import Profile from '../../components/dashBoard/Profile';
import SubscriptionPage from '../../components/Subscription/SubscriptionPage';

function BuyPage() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
  return (
    <>
    <div className='grid-container '>
    <Header OpenSidebar={OpenSidebar} />
    <SideBar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}/>
        <div className='buy-page-contaner'>
        <SubscriptionPage/>
        </div>
        
    </div>
    </>
  )
}

export default BuyPage