import React from 'react'
import Button from './Button'
import dayjs from 'dayjs'
import handlePayment from '../payment/handlePayment'

const BookingCard = ({roomNo,checkIn,checkOut,amount,active,status,bookingId,isPayed}) => {
    checkIn = dayjs(checkIn).format("DD/MM/YY")
    checkOut = dayjs(checkOut).format("DD/MM/YY")
    
    return (
        <div className='flex justify-between  cursor-pointer rounded-xl bg-[#F4F7FE] dark:bg-[var(--bg-primary)] font-semibold p-4'>
            <div className='flex flex-col gap-1 items-center'>
                <div className='text-sm text-gray-400'>Room No</div>
                <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{roomNo}</div>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='text-sm text-gray-400'>Check-In</div>
                <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{checkIn}</div>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='text-sm text-gray-400'>Check-Out</div>
                <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{checkOut}</div>
            </div>
           { status && <div className={`flex flex-col gap-1 items-center `}>
                <div className='text-sm text-gray-400'>Status</div>
                <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{status}</div>
            </div>}
            {(active === "Active" && !isPayed) && <div className={`flex flex-col items-center gap-1 `}>
                <div className='font-bold text-green-500 text-lg '>{amount}</div>
                <div onClick={()=>handlePayment({amount,bookingId})}><Button children={"Pay Now"} className='bg-gradient-to-tl h-fit from-blue-700 to-blue-300 text-white font-semibold' /></div>
            </div>}
        </div>
    )
}

export default BookingCard
