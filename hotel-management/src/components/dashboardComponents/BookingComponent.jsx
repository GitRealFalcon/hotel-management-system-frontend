import React from 'react'
import { useState } from 'react'
import Button from '../Button'
import dayjs from 'dayjs'

const BookingComponent = ({booking}) => {
const [show, setShow] = useState(false)
  return (
    <div>
       <div
            onClick={() => setShow(!show)}
            className="transform transition-all duration-400 w-full border border-gray-500 flex flex-col gap-4 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] p-4 rounded-2xl"
        >
            <div className="grid grid-cols-4 grid-rows-1 font-semibold">
                <div>
                    <div className="text-sm text-gray-400 overflow-clip">Id</div>
                    <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                        {booking?._id ? booking._id : "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-400">Status</div>
                    <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                      {booking?.status ? booking.status : "N/A"}
                    </div>
                </div>

                <div>
                    <div className="text-sm text-gray-400">Check-In</div>
                    <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                        {booking?.checkIn ? dayjs(booking.checkIn).format("DD/MM/YYYY") : "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-400 overflow-clip">Check-Out</div>
                    <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                       {booking?.checkOut ? dayjs(booking.checkOut).format("DD/MM/YYYY") : "N/A"}
                    </div>
                </div>
            </div>

            <div className={`transition-all duration-300 overflow-hidden 
               ${show ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`} >

                <div className="grid grid-cols-4 grid-rows-1 font-semibold">
                    <div>
                        <div className="text-sm text-gray-400 overflow-clip">isChecked-In</div>
                        <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                           {booking?.isChekedIn ?"Checked": "No Checked"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">isPayed</div>
                        <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                           {booking?.payment.isPayed ? "Payed" : "Unpayed"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">Amount</div>
                        <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                            {booking?.totalAmount ? booking.totalAmount : "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400 overflow-clip">UTR</div>
                        <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                            {booking?.payment.paymentId ? booking.payment.paymentId : "N/A"}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 grid-rows-1 font-semibold mt-4">
                    <div>
                        <div className="text-sm text-gray-400 overflow-clip">
                           UserId
                        </div>
                        <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                           {booking?.customer ? booking.customer : "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400 overflow-clip">
                            Days
                        </div>
                        <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                           {booking?.totalDays ? booking.totalDays : "N/A"}
                        </div>
                    </div>
                    <Button children={"User Detail"} className="w-fit col-end-5" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingComponent
