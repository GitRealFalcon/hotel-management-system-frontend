import React from 'react'
import DashboarSidebar from '../components/dashboardComponents/DashboarSidebar'
import DashboardNavbar from '../components/dashboardComponents/DashboardNavbar'
import ValueCard from '../components/dashboardComponents/ValueCard'
import LineChart from '../components/dashboardComponents/LineChart'
import BarChart from '../components/dashboardComponents/BarChart'

const Dashboard = () => {
    return (
        <div className='w-full flex bg-[#F4F7FE]'>
            <DashboarSidebar/>
            <div className='w-[80%] p-3 relative'>
                <DashboardNavbar />
                <div className='w-full h-[250px] gap-5 p-3 grid grid-cols-3 grid-rows-2'>
                    <ValueCard image={'/bar_chart_blue.svg'} leval={"Monthy Revenue"} value={"₹95400"}/>
                    <ValueCard image={"/person_blue.svg"} leval={"Active Guests"} value={"1400"}/>
                    <ValueCard image={"/booking_blue.svg"} leval={"Recent Bookings"} value={"700"} />
                    <ValueCard image={"/currency_rupee_blue.svg"} leval={"Pending Payments"} value={"₹20000"}/>
                    <ValueCard image={"bedroom_blue.svg"} leval={"Available Room"} value={"12"}/>
                    <ValueCard image={"/checkIn_blue.svg"} leval={"Staff on Duty"} value={"24"}/>
                </div>
                <div className=' w-full h-[350px] p-3 gap-5 grid grid-cols-2 grid-rows-1 '>
                        <div className='bg-[#FFFFFF] p-3 rounded-2xl '>
                       
                             <LineChart/>
                        
                        </div>
                        <div className='bg-[#FFFFFF] p-3 rounded-2xl '>
                            <BarChart/>
                        </div>
                </div>
                <div className='w-full h-[350px] p-3 gap-5 flex' >
                    <div className='w-1/2 h-full bg-[#FFFFFF] rounded-2xl'></div>
                    <div className='w-1/2 h-full grid gap-2 grid-cols-2'>
                    <div className='bg-[#FFFFFF] rounded-2xl' ></div>
                    <div className='bg-[#FFFFFF] rounded-2xl' ></div>
                    
                    </div>
                </div>
              
            </div>

        </div>
    )
}

export default Dashboard
