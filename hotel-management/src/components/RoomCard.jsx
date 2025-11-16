import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const RoomCard = ({
  type,image,capecity,price,btnShow,roomNo
}) => {
  const navigate = useNavigate()

    const handleBooking = ()=>{
      navigate(`/new-booking/${roomNo}`)
    }
  return (
    <div className='w-full h-[425px] rounded-xl p-3 flex flex-col gap-3 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF]'>
      <div className='h-[60%] overflow-hidden rounded-xl'>
        <img className='object-cover h-full w-full' src={image} alt="room" />
      </div>

      <div className='flex flex-col gap-2' >
        <h1 className='font-bold text-2xl pl-1 dark:text-[var(--text-primary)] text-[#1A202C]'>{type}</h1>
        <div className='flex pl-1 gap-2 w-full'>
          <div className='flex gap-1 font-semibold text-sm text-gray-400'><span className='underline'>{capecity + " Guest"}</span></div>
          <div className='flex gap-1 text-sm font-semibold text-gray-400 '> <span className='underline'>No Smoking</span></div>
        </div>
      </div>

      
      <div className='flex justify-between items-center px-1'>
       <div className=' flex flex-col  gap-0.5'>
        <h2 className='underline font-bold text-lg dark:text-[var(--text-primary)] text-[#1A202C]'>Room Details</h2>
            <p className='font-mono font-bold text-2xl dark:text-[var(--text-primary)] text-[#1A202C]'>{"₹"+ price}</p><p className='text-sm text-gray-400'>INR/night</p>
        </div>
        <div className={`h-full flex items-end`}>
        <Button onClick={handleBooking} children={"Book Now"} className={`${btnShow? "hidden": ""} bg-transparent border font-semibold`} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]'/>
        </div>
      </div>

    </div>
  )
}

export default RoomCard
