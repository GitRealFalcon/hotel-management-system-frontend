import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideBar } from '../../features/theme/themeSlice'
import { NavLink } from 'react-router-dom'

const DashboarSidebar = () => {
    const { isOpen } = useSelector((state) => state.theme)
    const dispatch = useDispatch()
    return (
        <div className={`first:w-[10%] second:w-[30%] third:w-[40%] forth:w-[50%] fifth:w-[60%] sixth:w-[70%] h-screen dark:bg-[var(--bg-secondry)] bg-[#FFFFFF]  z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transform transition-all duration-300 first:translate-x-0 fixed first:sticky top-0 p-4`}>
            <div onClick={() => dispatch(toggleSideBar(false))} className='flex justify-end px-5 mt-8 first:hidden'> <img width={20} height={20} src="/close.svg" alt="close" /></div>
            <div className='flex flex-col h-32 justify-center items-center gap-7 w-full'>
                <div className='flex gap-2 dark:text-[var(--text-primary)] text-[#1A202C]'><h1 className='text-2xl   font-bold'>FALCON</h1><span className='text-2xl '>HOTEL</span></div>
                <div className='w-full border-gray-300 border-b'></div>
            </div>
            <div className='flex flex-col justify-center dark:text-[var(--text-primary)] text-[#1A202C]  fifth:px-4 gap-2'>
                <NavLink prefetch="intent" to={"/admin-dashboard"} end>

                    {({ isActive }) => (
                        <div className={isActive ? 'flex gap-4 text-lg items-center font-bold ' : 'flex gap-4 items-center font-semibold p-2'}>
                            <img width={isActive ? 30 : 20} height={isActive ? 30 : 20} src="/home.svg" alt="home" />
                            <p>Main Dashboard</p>
                        </div>
                    )}


                </NavLink>
                <NavLink prefetch="intent" to={"/admin-dashboard/customers"}>
                    {({ isActive }) => (
                        <div className={isActive ? 'flex gap-4 text-lg font-bold ' : 'flex gap-4 font-semibold p-2'}>
                            <img width={isActive ? 30 : 20} height={isActive ? 30 : 20} src="/person.svg" alt="person" />
                            <p>Customer</p>
                        </div>
                    )}

                </NavLink>
                <NavLink prefetch="intent" to={"/admin-dashboard/bookings"}>

                    {({ isActive }) => (
                        <div className={isActive ? 'flex gap-4 text-lg font-bold ' : 'flex gap-4 font-semibold p-2'}>
                            <img width={isActive ? 30 : 20} height={isActive ? 30 : 20} src="/bedroom.svg" alt="booking" />
                            <p>Booking</p>
                        </div>
                    )}
                </NavLink>
                <NavLink prefetch="intent" to={"/admin-dashboard/payments"}>
                    {({ isActive }) => (
                        <div className={isActive ? 'flex gap-4 text-lg font-bold ' : 'flex gap-4 font-semibold p-2'}>
                            <img width={isActive ? 30 : 20} height={isActive ? 30 : 20} src="/currency_rupee.svg" alt="home" />
                            <p>Payment</p>
                        </div>
                    )}
                </NavLink>
                <NavLink prefetch="intent" to={"/admin-dashboard/check-in"}>
                    {({ isActive }) => (
                        <div className={isActive ? 'flex gap-4 text-lg font-bold ' : 'flex gap-4 font-semibold  p-2'}>
                            <img width={isActive ? 30 : 20} height={isActive ? 30 : 20} className='hover:h-[30px] hover:w-[30px]' src="/checkIn.svg" alt="home" />
                            <p >Check-In</p>
                        </div>
                    )}
                </NavLink>
                <NavLink prefetch="intent" to={"/admin-dashboard/rooms"}>
                    {({ isActive }) => (
                        <div className={isActive ? 'flex gap-4 text-lg font-bold ' : 'flex gap-4 font-semibold  p-2'}>
                            <img width={isActive ? 30 : 20} height={isActive ? 30 : 20} className='hover:h-[30px] hover:w-[30px]' src="/bed.svg" alt="room" />
                            <p >Rooms</p>
                        </div>
                    )}
                </NavLink>
            </div>
        </div>
    )
}

export default DashboarSidebar
