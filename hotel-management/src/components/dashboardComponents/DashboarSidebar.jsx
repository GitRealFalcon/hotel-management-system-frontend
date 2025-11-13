import React from 'react'

const DashboarSidebar = () => {
    return (
        <div className='w-[20%] h-screen bg-[#FFFFFF] sticky top-0 p-4'>
            <div className='flex flex-col h-32 justify-center items-center gap-7 w-full'>
                <div className='flex gap-2'><h1 className='text-2xl text-[#1A202C] font-bold'>FALCON</h1><span className='text-2xl'>HOTEL</span></div>
                <div className='w-full border-gray-300 border-b'></div>
            </div>
            <div className='flex flex-col justify-center text-[#1A202C] px-4 gap-2'>

                    <div className='flex gap-4  font-semibold p-2'>
                        <img width={20} height={20} src="/home.svg" alt="home" />
                        <p>Main Dashboard</p>
                    </div>
                    <div className='flex gap-4  font-semibold p-2'>
                        <img width={20} height={20} src="/person.svg" alt="person" />
                        <p>Customer</p>
                    </div>
                    <div className='flex gap-4  font-semibold p-2'>
                        <img width={20} height={20} src="/bedroom.svg" alt="booking" />
                        <p>Booking</p>
                    </div>
                    <div className='flex gap-4  font-semibold p-2'>
                        <img width={20} height={20} src="/currency_rupee.svg" alt="home" />
                        <p>Payment</p>
                    </div>
                    <div className='flex gap-4  font-semibold p-2'>
                        <img width={20} height={20} src="/checkIn.svg" alt="home" />
                        <p>Check-In</p>
                    </div>
            </div>
        </div>
    )
}

export default DashboarSidebar
