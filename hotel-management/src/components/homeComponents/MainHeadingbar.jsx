import React from 'react'
import Logo from '../Logo'
import Button from "../Button"
import api from '../../api/axios'
import { useDispatch } from 'react-redux'
import { getRooms } from '../../features/rooms/roomSlice'


const MainHeadingbar = ({scrollRef,CheckInDate,CheckOutDate,guest}) => {
   const dispatch = useDispatch()
  const findRooms = async()=>{
   
    try {
      const res = await api.get("/rooms/available-room",{params:{CheckInDate,CheckOutDate,guest}})
      dispatch(getRooms(res.data.data))
      scrollToRooms()
      
    } catch (error) {
      console.error(error)
      
    }
  }
   const scrollToRooms = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    
  }
  return (
  <div className='w-full mt-4 flex gap-2 flex-col sm:h-30 sm:flex-row justify-around items-center p-1 transform transition-all duration-400'>
      <div className='logo w-[20%] flex justify-end items-center '>
        <Logo height={100} width={100}/>
      </div>
      <div className='h-[90%] hidden sm:block border-x border-gray-400 transform transition-all duration-300'></div>
      <div className='heading sm:w-[50%] h-[90%] gap-2 flex flex-col items-center sm:items-start justify-around transform transition-all duration-300'>
            <div className='text-red-700 w-fit border-2 font-semibold border-red-700 rounded-md px-1'>HOTEL SELLING FAST</div>
            <h1 className='text-3xl font-bold font-serif text-center sm:text-start dark:text-[var(--text-primary)] text-[#1A202C] transform transition-all duration-300'>
                Falcon Plaza Hotel & Event Center
            </h1>
      </div>
      <div className='offerCheckout h-[90%] sm:w-[20%]  flex flex-col justify-between py-1 transform transition-all duration-300'>
        <div className='font-mono flex items-center gap-0.5'>
            <p className='dark:text-[var(--text-primary)]  text-[#1A202C] font-bold text-2xl'>₹2500</p><p className='text-sm text-gray-500 dark:text-gray-400'>INR/night</p>
        </div>
        <Button onClick={findRooms} children={"View Rooms"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border  font-semibold'/>
      </div>
    </div>
  )
}

export default MainHeadingbar
