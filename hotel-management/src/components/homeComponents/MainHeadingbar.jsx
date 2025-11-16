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
  <div className='w-full mt-4 h-30 flex justify-around items-center p-1'>
      <div className='logo w-[20%] flex justify-end items-center '>
        <Logo height={100} width={100}/>
      </div>
      <div className='h-[90%] border-x border-gray-400'></div>
      <div className='heading w-[50%] h-[90%] flex flex-col justify-around'>
            <div className='text-red-700 w-fit border-2 font-semibold border-red-700 rounded-md px-1'>HOTEL SELLING FAST</div>
            <h1 className='text-3xl font-bold font-serif dark:text-[var(--text-primary)] text-[#1A202C]'>
                Falcon Plaza Hotel & Event Center
            </h1>
      </div>
      <div className='offerCheckout h-[90%] w-[20%]  flex flex-col justify-between py-1'>
        <div className='font-mono flex items-center gap-0.5'>
            <p className='dark:text-[var(--text-primary)]  text-[#1A202C] font-bold text-2xl'>₹2500</p><p className='text-sm text-gray-500 dark:text-gray-400'>INR/night</p>
        </div>
        <Button onClick={findRooms} children={"View Rooms"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold'/>
      </div>
    </div>
  )
}

export default MainHeadingbar
