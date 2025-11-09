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
    <div className='w-full h-[425px] rounded-xl p-2 flex flex-col gap-3 bg-gradient-to-br from-gray-200 to-gray-100 backdrop-blur-md backdrop-filter bg-opacity-0'>
      <div className='h-[60%] overflow-hidden rounded-xl'>
        <img className='object-cover h-full w-full' src={image} alt="room" />
      </div>

      <div className='flex flex-col gap-2' >
        <h1 className='font-bold text-2xl pl-1'>{type}</h1>
        <div className='flex gap-2 w-full'>
          <div className='flex gap-1 text-sm text-gray-800'><img width={18} height={18} src="/person.svg" alt="person" /><span className='underline'>{capecity + " Guest"}</span></div>
          <div className='flex gap-1 text-sm text-gray-800 '><img width={18} height={18} src="/no_smoke.svg" alt="smoke" /> <span className='text-sm'>No Smoking</span></div>
        </div>
      </div>

      
      <div className='flex justify-between items-center px-1'>
       <div className=' flex flex-col  gap-0.5'>
        <h2 className='underline font-bold text-lg'>Room Details</h2>
            <p className='font-mono font-bold text-2xl'>{"₹"+ price}</p><p className='text-sm text-gray-500'>INR/night</p>
        </div>
        <div className={`h-full flex items-end`}>
        <Button onClick={handleBooking} children={"Book Now"} className={`${btnShow? "hidden": ""} bg-gradient-to-br h-fit from-gray-300 to-gray-950 text-white font-semibold w-fit`}/>
        </div>
      </div>

    </div>
  )
}

export default RoomCard
