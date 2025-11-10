import React from 'react'
import Button from './Button'
import dayjs from 'dayjs'
import handlePayment from '../payment/handlePayment'

const BookingCard = ({roomNo,checkIn,checkOut,amount,active,status,bookingId,isPayed}) => {
    checkIn = dayjs(checkIn).format("DD/MM/YY")
    checkOut = dayjs(checkOut).format("DD/MM/YY")
    
    return (
        <div className='flex justify-between  border cursor-pointer rounded-xl border-gray-300 p-2 text-sm'>
            <div className='flex flex-col gap-1 items-center'>
                <div className='text-gray-600'>Room No</div>
                <div className='font-semibold'>{roomNo}</div>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='text-gray-600'>Check-In</div>
                <div className='font-semibold'>{checkIn}</div>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='text-gray-600'>Check-Out</div>
                <div className='font-semibold'>{checkOut}</div>
            </div>
           { status && <div className={`flex flex-col gap-1 items-center `}>
                <div className='text-gray-600'>Status</div>
                <div className='font-semibold'>{status}</div>
            </div>}
            {(active === "Active" && !isPayed) && <div className={`flex flex-col items-center gap-1 `}>
                <div className='font-bold text-green-500 text-lg '>{amount}</div>
                <div onClick={()=>handlePayment({amount,bookingId})}><Button children={"Pay Now"} className='bg-gradient-to-tl h-fit from-blue-700 to-blue-300 text-white font-semibold' /></div>
            </div>}
        </div>
    )
}

export default BookingCard
