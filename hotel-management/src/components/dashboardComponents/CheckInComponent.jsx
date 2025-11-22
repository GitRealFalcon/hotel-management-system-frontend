import React from 'react'
import { useState } from 'react'
import Button from '../Button'
import dayjs from 'dayjs'
import api from '../../api/axios'
import { useDispatch } from 'react-redux'
import { setBooking } from '../../features/booking/bookingSlice'
import { toast } from 'react-toastify'

const CheckInComponent = ({booking}) => {
    const dispatch = useDispatch()
    const handleCheckedIn = async()=>{
        const data = {
            bookingId:booking._id
        }
        try {
            await api.patch("bookings/checkin",data)
            const res = await api.get("bookings/get-bookings")
            const resData = res.data.data
            dispatch(setBooking(resData))
            toast.success("Checked-In Successfully")
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div>
       <div
            
            className="transform transition-all duration-400 w-full flex flex-col gap-4 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] p-4 rounded-2xl"
        >
            <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold">
                <div>
                    <div className="text-sm text-gray-400 ">Id</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                        {booking?._id ? booking._id : "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-400">Name</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                      {booking?.customerDetails[0].fullName ? booking?.customerDetails[0].fullName : "N/A"}
                    </div>
                </div>
                 <div>
                        <div className="text-sm text-gray-400 ">Email</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                           {booking?.customerDetails[0].email ?booking.customerDetails[0].email: "N/A"}
                        </div>
                    </div>

                <div>
                    <div className="text-sm text-gray-400">Check-In</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                        {booking?.checkIn ? dayjs(booking.checkIn).format("DD/MM/YYYY") : "N/A"}
                    </div>
                </div>
                
            </div>

            <div className={`transition-all duration-300 overflow-hidden max-h-40`} >

                <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold">
                   <div>
                    <div className="text-sm text-gray-400 overflow-clip">Check-Out</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                       {booking?.checkOut ? dayjs(booking.checkOut).format("DD/MM/YYYY") : "N/A"}
                    </div>
                </div>
                    <div>
                        <div className="text-sm text-gray-400">isPayed</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                           {booking?.payment?.isPayed ? "Payed" : "Unpayed"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">Amount</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                            {booking?.totalAmount ? booking.totalAmount : "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400 ">UTR</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                            {booking?.payment?.paymentId ? booking.payment.paymentId : "N/A"}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 grid-rows-1 gap-3 font-semibold mt-4">
                   
                    <div>
                        <div className="text-sm text-gray-400 ">
                            Days
                        </div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                           {booking?.totalDays ? booking.totalDays : "N/A"}
                        </div>
                    </div>
                    <Button onClick={handleCheckedIn} children={"Check-In"} className="w-fit col-end-5" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckInComponent
