import React,{useEffect} from 'react'
import DashboarSidebar from '../components/dashboardComponents/DashboarSidebar'
import DashboardNavbar from '../components/dashboardComponents/DashboardNavbar'
import { Outlet } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUser } from '../features/auth/authThunks'



const Dashboard = () => {
   const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
   dispatch(fetchUser())
  }, [dispatch,isAuthenticated])
  
  
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
