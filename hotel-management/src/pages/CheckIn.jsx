import React, { useState,useEffect } from 'react'
import api from '../api/axios'
import CheckInComponent from '../components/dashboardComponents/CheckInComponent'
import { Button } from '../components'

const CheckIn = () => {
    const [_id, set_id] = useState("")
    const [booking, setBooking] = useState("")

    const handleInput = (e)=>{
      set_id(e.target.value)
    }

    const handleSubmit = async()=>{
            const res = await api.get("bookings/get-booking",{params:{bookingId:_id}})
            const data = res.data.data
            setBooking(data)
    }

    console.log(booking);
    
    
  return (
    <div className="flex min-h-screen mt-4 flex-col gap-3">
            <div className='w-full h-15 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] rounded-2xl text-gray-500 sticky flex items-center justify-end gap-3 p-3 top-30'>
                <input
                className='font-semibold cursor-pointer dark:text-[var(--text-primary)] px-3 text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)] p-2 rounded-xl'
                    type="text"
                    value={_id}
                    onChange={handleInput}
                />

                <Button onClick={handleSubmit} children={"Find"} className="w-fit col-end-5" />
            </div>
               {booking && <CheckInComponent booking={booking}/>}
          
        </div>
  )
}

export default CheckIn
