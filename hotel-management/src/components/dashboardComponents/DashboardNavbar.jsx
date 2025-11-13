import React from 'react'
import Input from '../Input'

const DashboardNavbar = () => {
  return (
    <div className='p-3 h-24  w-full flex justify-center items-center rounded-2xl sticky top-0  backdrop-filter backdrop-blur-xl bg-opacity-0 '>
      <div className='  w-full flex justify-between items-center'>
        <div className='w-fit'>
          <p className='text-sm'>Page / Dashboard</p>
          <h1 className='text-4xl font-bold'>Admin Dashboard</h1>
        </div>
        <div className='  flex p-2.5 gap-2  rounded-full bg-[#FFFFFF] ' >
          <div className='flex p-2.5 rounded-full px-2 gap-1 bg-[#F4F7FE]'>
            <img width={18} height={18} src="/search.svg" alt="search" />
            <input placeholder='Search...' type="text" className='border-none outline-none text-sm font-semibold placeholder-gray-400' />

          </div>
          <img width={18} height={18} className='text-gray-400' src="/notifications.svg" alt="notifications" />
          <img width={18} height={18} src="/info.svg" alt="info" />
          <img width={18} height={18} src="/bedtime.svg" alt="bedtime" />

          <div className='  flex justify-center items-center h-10 w-10 text-[0.7rem] bg-[#11047a] text-white rounded-full'>
            <p>MN</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar
