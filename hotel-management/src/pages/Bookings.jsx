import React from 'react'
import BookingComponent from '../components/dashboardComponents/BookingComponent'
import { useState, useEffect } from "react";
import CustomerCard from "../components/dashboardComponents/CustomerCard";
import api from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { setBooking } from "../features/booking/bookingSlice"
import { toast } from "react-toastify";
import dayjs from 'dayjs';

const Bookings = () => {
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true)
  const [bookingFiter, setbookingFiter] = useState("")
  const { bookings } = useSelector((state) => state.booking)
  const [from, setfrom] = useState("")
  const [to, setTo] = useState(dayjs())
  const [isChecked, setisChecked] = useState(false)
  const [isPayed, setisPayed] = useState(false)
  const [status, setStatus] = useState("")

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("bookings/get-bookings")
        const data = res?.data.data
        if (data) {
          dispatch(setBooking(data))
        }
        setloading(false)
        toast.success("Booking fetch successfully")
      } catch (error) {
        console.log(error);

      }
    })()
  }, [])

  useEffect(() => {
    let filteData = bookings

    if (from) {
      filteData = bookings.filter((each) => dayjs(each.checkIn).isAfter(dayjs(from).add(-1, "day")) && dayjs(each.checkIn).isBefore(dayjs(to).add(1, "day")))
    }
    if (isChecked) {
      filteData = filteData.filter((each) => each.isChekedIn)
    }

    if (isPayed) {
      filteData = filteData.filter((each) => each.payment.isPayed)
    }
    if (status) {
      filteData = filteData.filter((each) => each.status === status)
    }
    setbookingFiter(filteData)

  }, [from, to, isChecked, isPayed, status, bookings])

  return (
    <div className="flex min-h-screen mt-4 flex-col gap-3">
      <div className='w-full h-15 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] rounded-2xl text-gray-500 sticky flex items-center justify-end gap-3 p-3 top-30'>
        <div className='flex gap-2 items-center'>
          <label className='text-sm cursor-pointer font-semibold' htmlFor="from">From</label>
          <input onChange={(e) => setfrom(e.target.value)} id='from' className='font-semibold cursor-pointer  dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)] p-2 rounded-xl' type="date" />
        </div>
        <div className='flex gap-2 items-center'>
          <label className='text-sm font-semibold cursor-pointer' htmlFor="to">To</label>
          <input onChange={(e) => setTo(e.target.value)} id='to' className='font-semibold cursor-pointer dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)] p-2 rounded-xl' type="date" />
        </div>
        <div className='flex gap-2 items-center'>
          <label className='text-sm font-semibold cursor-pointer' htmlFor="isChacked">isChecked</label>
          <input id='isChacked' className='cursor-pointer accent-[#422AFB] w-4' checked={isChecked} onChange={() => setisChecked(!isChecked)} type="checkbox" />
        </div>
        <div className='flex gap-2 items-center'>
          <label className='text-sm font-semibold cursor-pointer'  htmlFor="isPayed">isPayed</label>
          <input id='isPayed' className='cursor-pointer accent-[#422AFB] w-4' checked={isPayed} onChange={() => setisPayed(!isPayed)}  type="checkbox" />
        </div>
        <div>
          <select onChange={(e) => setStatus(e.target.value)} className='bg-[#F4F7FE] cursor-pointer dark:bg-[var(--bg-primary)] dark:text-[var(--text-primary)] text-[#1A202C] font-semibold p-2 rounded-xl' name="Status" id="status">
            <option className='dark:text-[var(--text-primary)] cursor-pointer text-[#1A202C] font-semibold' value="">Status</option>
            <option className='dark:text-[var(--text-primary)] cursor-pointer text-[#1A202C] font-semibold' value="Active">Active</option>
            <option className='dark:text-[var(--text-primary)] cursor-pointer text-[#1A202C] font-semibold' value="Cancelled">Cancelled</option>
            <option className='dark:text-[var(--text-primary)] cursor-pointer text-[#1A202C] font-semibold' value="Completed">Completed</option>
          </select>
        </div>
      </div>
      {loading && <div>Loading..</div>}
      {bookingFiter.length > 0 && bookingFiter.map((booking) => <div key={booking._id} >
        <BookingComponent booking={booking} />
      </div>)}
    </div>
  )
}

export default Bookings
