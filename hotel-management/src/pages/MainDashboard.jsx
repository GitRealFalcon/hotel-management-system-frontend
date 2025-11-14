import React, { useEffect, useState } from 'react'
import ValueCard from '../components/dashboardComponents/ValueCard'
import LineChart from '../components/dashboardComponents/LineChart'
import BarChart from '../components/dashboardComponents/BarChart'
import Table from '../components/dashboardComponents/Table'
import { useSelector, useDispatch } from 'react-redux'
import api from '../api/axios'
import { setTransection } from '../features/payment/paymentSlice'
import { setBooking } from '../features/booking/bookingSlice'
import { setCustomers } from '../features/customer/customerSlice'
import { getRooms } from '../features/rooms/roomSlice'
import dayjs from 'dayjs'


const MainDashboard = () => {
  const { isDark } = useSelector((state) => state.theme)
  const { transections } = useSelector((state) => state.transection)
  const { bookings } = useSelector((state) => state.booking)
  const { customers } = useSelector((state) => state.customer)
  const { roomsData } = useSelector((state) => state.room)
  const dispatch = useDispatch()
  const [pendingPayment, setpendingPayment] = useState("")
  const [monthlyIncome, setmonthlyIncome] = useState("")
  const [customerCount, setcustomerCount] = useState("")
  const [bookingCount, setbookingCount] = useState("")
  const [availableRooms, setavailableRooms] = useState("")
  const [completeBooking, setcompleteBooking] = useState("")
  const [cancelledBookingData, setcancelledBookingData] = useState([])
  const [completedBookingData, setcompletedBookingData] = useState([])
  const [pendingPaymentMonthlyData, setpendingPaymentMonthlyData] = useState([])
  const [payedPaymentMothlyData, setpayedPaymentMothlyData] = useState([])



  useEffect(() => {
    ; (async () => {
      try {
        const res = await api.get("transections/get-transections")
        const data = res.data.data
        dispatch(setTransection(data))
      } catch (error) {
        console.log(error);
      }

      try {
        const res = await api.get("bookings/get-bookings")
        const data = res.data.data
        dispatch(setBooking(data))
      } catch (error) {
        console.log(error);

      }

      try {
        const res = await api.get("users/get-customers")
        const data = res.data.data
        dispatch(setCustomers(data))
      } catch (error) {
        console.log(error);
      }

      try {
        const res = await api.get("rooms/all-rooms")
        const data = res.data.data
        dispatch(getRooms(data))
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  useEffect(() => {
    const pendingPaymentData = bookings.filter((each) => !each.payment.isPayed).reduce((acc, each) => { return acc + each.totalAmount }, 0)
    setpendingPayment(pendingPaymentData)

    const monthlyIncomeData = transections.reduce((acc, each) => acc + each.amount, 0)
    setmonthlyIncome(monthlyIncomeData)

    setcustomerCount(customers.length)

    setbookingCount(bookings.filter((each) => each.status === "Active").length)

    setavailableRooms(roomsData.filter((each) => each.isAvailable).length)

    setcompleteBooking(bookings.filter((each) => each.status === "Completed").length)

    
    let temp = []
    for (let index = 0; index <= 11; index++) {
     const data = bookings.filter((each)=>dayjs(each.checkIn).month() === index && each.status === "Cancelled").length
      temp.push(data)   
    }
    setcancelledBookingData(temp)

    temp = []
    for (let index = 0; index <= 11; index++) {
     const data = bookings.filter((each)=>dayjs(each.checkIn).month() === index && each.status === "Completed").length
      temp.push(data)   
    }
    setcompletedBookingData(temp)

    temp = []
    for (let index = 0; index <= 11; index++) {
      const data = bookings.filter((each)=>dayjs(each.checkIn).month() === index && each.payment.isPayed)
      .reduce((acc,each)=>acc + each.totalAmount,0)
      
      temp.push(data)
    }
    setpayedPaymentMothlyData(temp)
    
    temp = []
     for (let index = 0; index <= 11; index++) {
      const data = bookings.filter((each)=>dayjs(each.checkIn).month() === index && !each.payment.isPayed)
      .reduce((acc,each)=>acc + each.totalAmount,0)
      
      temp.push(data)
    }
    setpendingPaymentMonthlyData(temp)
   
    

  }, [transections, bookings, customers, roomsData])

  console.log(cancelledBookingData);
  
  
  return (
    <div>
      <div className='transform transition-all duration-400 w-full h-[650px] third:h-[350px] second:h-[250px] gap-5 p-3 grid grid-rows-6 third:grid-cols-2 third:grid-rows-3 second:grid-cols-3 second:grid-rows-2'>
        <ValueCard image={isDark ? '/bar_chart.svg' : '/bar_chart_blue.svg'} leval={"Monthy Revenue"} value={`₹${monthlyIncome}`} />
        <ValueCard image={isDark ? "/person.svg" : "/person_blue.svg"} leval={"Active Guests"} value={customerCount} />
        <ValueCard image={isDark ? "/booking.svg" : "/booking_blue.svg"} leval={"Active Bookings"} value={bookingCount} />
        <ValueCard image={isDark ? "/currency_rupee.svg" : "/currency_rupee_blue.svg"} leval={"Pending Payments"} value={`₹${pendingPayment}`} />
        <ValueCard image={isDark ? "bedroom.svg" : "bedroom_blue.svg"} leval={"Available Room"} value={availableRooms} />
        <ValueCard image={isDark ? "/checkIn.svg" : "/checkIn_blue.svg"} leval={"Complete Booking"} value={completeBooking} />
      </div>
      <div className='transform transition-all duration-400 w-full h-[800px] third:h-[400px] second:h-[350px] p-3 gap-5 grid grid-rows-2 grid-cols-1 third:grid-cols-2 third:grid-rows-1 '>
        <div className='bg-[#FFFFFF] dark:bg-[var(--bg-secondry)] w-full p-3 rounded-2xl '>
          <LineChart cancelled={cancelledBookingData} completed={completedBookingData} />
        </div>
        <div className='bg-[#FFFFFF] dark:bg-[var(--bg-secondry)] p-3 rounded-2xl '>
          <BarChart payed={payedPaymentMothlyData} pending={pendingPaymentMonthlyData} />
        </div>
      </div>
      <div className='transform transition-all duration-400 w-full h-[1200px] third:h-[700px]  second:h-[350px] p-3 gap-5 flex flex-col second:flex-row' >
        <div className='transform transition-all duration-400 second:w-1/2 h-1/3 third:h-1/2 second:h-full dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] rounded-2xl'>
          <Table payments={transections} />
        </div>
        <div className='transform transition-all duration-400 second:w-1/2 h-8/12 third:h-1/2 second:h-full grid gap-5 grid-rows-2 grid-cols-1 second:gap-2 third:grid-cols-2 third:grid-rows-1'>
          <div className='bg-[#FFFFFF] dark:bg-[var(--bg-secondry)] rounded-2xl' ></div>
          <div className='bg-[#FFFFFF] dark:bg-[var(--bg-secondry)] rounded-2xl' ></div>

        </div>
      </div>
    </div>
  )
}

export default MainDashboard
