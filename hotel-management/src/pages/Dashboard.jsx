import React from 'react'
import DashboarSidebar from '../components/dashboardComponents/DashboarSidebar'
import DashboardNavbar from '../components/dashboardComponents/DashboardNavbar'
import MainDashboard from './MainDashboard'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
   
  
    return (
        <div className='w-full flex bg-[#F4F7FE] dark:bg-[var(--bg-primary)]'>
            <DashboarSidebar/>
            <div className=' first:w-[90%] transform transition-all duration-400 w-full p-3 relative'>
                <DashboardNavbar />
               <Outlet/>
              
            </div>

        </div>
    )
}

export default Dashboard
