import React from 'react'
import ValueCard from '../components/dashboardComponents/ValueCard'
import LineChart from '../components/dashboardComponents/LineChart'
import BarChart from '../components/dashboardComponents/BarChart'
import Table from '../components/dashboardComponents/Table'
import { useSelector } from 'react-redux'

const MainDashboard = () => {
  const { isDark } = useSelector((state) => state.theme)
  return (
    <div>
      <div className='transform transition-all duration-400 w-full h-[650px] third:h-[350px] second:h-[250px] gap-5 p-3 grid grid-rows-6 third:grid-cols-2 third:grid-rows-3 second:grid-cols-3 second:grid-rows-2'>
        <ValueCard image={isDark ? '/bar_chart.svg' : '/bar_chart_blue.svg'} leval={"Monthy Revenue"} value={"₹95400"} />
        <ValueCard image={isDark ? "/person.svg" : "/person_blue.svg"} leval={"Active Guests"} value={"1400"} />
        <ValueCard image={isDark ? "/booking.svg" : "/booking_blue.svg"} leval={"Recent Bookings"} value={"700"} />
        <ValueCard image={isDark ? "/currency_rupee.svg" : "/currency_rupee_blue.svg"} leval={"Pending Payments"} value={"₹20000"} />
        <ValueCard image={isDark ? "bedroom.svg" : "bedroom_blue.svg"} leval={"Available Room"} value={"12"} />
        <ValueCard image={isDark ? "/checkIn.svg" : "/checkIn_blue.svg"} leval={"Staff on Duty"} value={"24"} />
      </div>
      <div className='transform transition-all duration-400 w-full h-[800px] third:h-[400px] second:h-[350px] p-3 gap-5 grid grid-rows-2 grid-cols-1 third:grid-cols-2 third:grid-rows-1 '>
        <div className='bg-[#FFFFFF] dark:bg-[var(--bg-secondry)] w-full p-3 rounded-2xl '>
          <LineChart />
        </div>
        <div className='bg-[#FFFFFF] dark:bg-[var(--bg-secondry)] p-3 rounded-2xl '>
          <BarChart />
        </div>
      </div>
      <div className='transform transition-all duration-400 w-full h-[1200px] third:h-[700px]  second:h-[350px] p-3 gap-5 flex flex-col second:flex-row' >
        <div className='transform transition-all duration-400 second:w-1/2 h-1/3 third:h-1/2 second:h-full dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] rounded-2xl'>
          <Table />
        </div>
        <div className='transform transition-all duration-400 second:w-1/2 h-8/12 third:h-1/2 second:h-full grid gap-5 grid-rows-2 grid-cols-1 second:gap-2 third:grid-cols-2 third:grid-rows-1'>
          <div className='bg-[#FFFFFF] dark:bg-[var(--bg-secondry)] rounded-2xl' ></div>
          <div className='bg-[#FFFFFF] dark:bg-[var(--bg-secondry)] rounded-2xl' ></div>

        </div>
      </div>
    </div>
  )
}

export default MainDashboard
