import React from 'react'
import Button from '../Button'
import dayjs from 'dayjs';
import api from '../../api/axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../features/auth/authThunks';
import handlePayment from '../../payment/handlePayment';

const BookingDetails = ({ booking, showBooking, onClose }) => {
    if (!showBooking) return null;

    const dispatch = useDispatch()

    const user = booking?.customerDetails[0]
    const isPayed = booking?.payment.isPayed
    const isChekedIn = booking?.isChekedIn
    const status = booking?.status
    const amount = booking?.totalAmount
    const bookingId = booking?._id

    
    

    const handleCheckOut = async () => {
        const data = { bookingId: booking._id }
        try {
            await api.patch("bookings/checkout", data)
            toast.success("Check-Out successfully")
            dispatch(fetchUser())
            onClose()

        } catch (error) {
            toast.error(error.response.data.message);

        }
    }

    const handleCancel = async () => {
        const data = { bookingId: booking._id }
        try {
            await api.patch("bookings/cancel-booking", data)
            toast.success("Booking Cancel successfully")
             dispatch(fetchUser())
             onClose()
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }

    return (
        <div className={` h-screen w-full backdrop-blur-sm bg-opacity-0 from-gray-400 flex items-center justify-center absolute`}>
            <div className=' h-[60%] w-[60%] dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] flex flex-col justify-around p-6 rounded-xl dark:border-none border border-slate-300'>
                <div className='flex justify-between h-10'>
                    <h2 className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>Booking information</h2>
                    <div onClick={onClose} className='dark:text-[var(--text-primary)] text-[#1A202C] font-semibold cursor-pointer hover:font-bold'>Close</div>
                </div>

                <div className='w-full border-gray-300 border-b'></div>

                <div className='w-full  flex  justify-between p-2 py-5 text-sm'>
                    <div className='w-1/5 flex flex-col gap-10  '>
                        <div >
                            <div className='text-gray-400'>Name</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{user?.fullName ? user.fullName : "N/A"}</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Email</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{user?.email ? user.email : "N/A"}</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Status</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{status ? status : "N/A"}</div>
                        </div>

                    </div>
                    <div className='w-1/5  flex flex-col gap-10'>
                        <div>
                            <div className='text-gray-400'>Phone Number</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{user?.phone ? user.phone : "N/A"}</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Room No</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{booking?.roomNo ? booking.roomNo : "N/A"}</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>CheckIn</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{isChekedIn ? "yes" : "No"}</div>
                        </div>

                    </div>

                    <div className='w-1/5  flex flex-col gap-10'>
                        <div>
                            <div className='text-gray-400'>Check-In</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{booking?.checkIn ? dayjs(booking.checkIn).format("DD/MM/YYYY") : "N/A"}</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Days</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{booking?.totalDays ? booking.totalDays : "N/A"}</div>
                        </div>
                        {isPayed && <div>
                            <div className='text-gray-400'>UTR</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{isPayed && booking.payment.paymentId}</div>
                        </div>}
                    </div>

                    <div className='w-1/5 flex flex-col gap-10'>
                        <div>
                            <div className='text-gray-400'>Check-Out</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{booking?.checkOut ? dayjs(booking.checkOut).format("DD/MM/YYYY") : "N/A"}</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Amount</div>
                            <div className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>{booking?.totalAmount ? booking.totalAmount : "N/A"}</div>
                        </div>
                    </div>

                </div>
                <div className='w-full h-16 flex justify-end gap-4 p-2'>
                    {(!isPayed && status === "Active") && <div onClick={()=>handlePayment({amount,bookingId})} ><Button bgColor='bg-green-500' className='font-semibold ' children={"Pay Now"} /></div>}
                    {(!isChekedIn && status === "Active") && <div onClick={handleCancel} ><Button bgColor='bg-red-500' className='font-semibold' children={"Cancel"} /></div>}
                    {((status === "Active" && isChekedIn) && isPayed) && <div onClick={handleCheckOut}> <Button className='font-semibold' children={"Check Out"} /></div>}
                </div>
            </div>
        </div>

    )
}

export default BookingDetails
