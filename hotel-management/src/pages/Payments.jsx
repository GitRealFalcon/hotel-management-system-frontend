import React, { useState, useEffect } from 'react'
import PaymentComponent from '../components/dashboardComponents/PaymentComponent'
import { useDispatch, useSelector } from 'react-redux'
import { setTransection } from "../features/payment/paymentSlice"
import api from '../api/axios'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'


const Payments = () => {
    const [loading, setloading] = useState(true)
    const [filterTransection, setfilterTransection] = useState([])
    const dispatch = useDispatch()
    const { transections } = useSelector((state) => state.transection)
    const [from, setFrom] = useState("")
    const [to, setTo] = useState(dayjs())
    const [_id, set_id] = useState("")
    const [customerId, setcustomerId] = useState("")
    const [bookingId, setbookingId] = useState("")
    const [activeSearch, setactiveSearch] = useState("")
    useEffect(() => {
        ; (async () => {
            try {
                const res = await api.get("transections/get-transections")
                const data = res.data.data
                dispatch(setTransection(data))
                setloading(false)
            } catch (error) {
                toast.error(error.responce.data.massege)
                console.log(error);
                
                
            }
        })()
    }, [])

    const handleInput = (e) => {
        const value = e.target.value;

        if (activeSearch === "_id") set_id(value);
        if (activeSearch === "bookingId") setbookingId(value);
        if (activeSearch === "customerId") setcustomerId(value);
    };



    useEffect(() => {
        let filterData = transections


        if (from) {
            filterData = filterData.filter((each) => dayjs(each.transactionDate).isAfter(dayjs(from).subtract(1, "day")) && dayjs(each.transactionDate).isBefore(dayjs(to).add(1, "day")))
        }

        if (activeSearch === "_id") {
            filterData = filterData.filter((each) => each._id === _id)
        }

        if (activeSearch === "bookingId") {
            filterData = filterData.filter((each) => each.bookingId === bookingId)
        }

        if (activeSearch === "customerId") {
            filterData = filterData.filter((each) => each.customerId === customerId)
        }
        setfilterTransection(filterData)

    }, [from, to, transections, _id, bookingId, customerId, activeSearch])


    return (
        <div className="flex min-h-screen mt-4 flex-col gap-3">
            <div className='w-full h-15 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] rounded-2xl text-gray-500 sticky flex items-center justify-end gap-3 p-3 top-30'>
                <div className='flex gap-2  items-center'>
                    <label className='text-sm font-semibold cursor-pointer' htmlFor="from">From</label>
                    <input onChange={(e) => setFrom(e.target.value)} id='from' className='font-semibold cursor-pointer dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)] p-2 rounded-xl' type="date" />
                </div>
                <div className='flex gap-2  items-center'>
                    <label className='text-sm font-semibold cursor-pointer' htmlFor="to">To</label>
                    <input onChange={(e) => setTo(e.target.value)} id='to' className='font-semibold cursor-pointer dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)] p-2 rounded-xl' type="date" />
                </div>
                <input
                className='font-semibold cursor-pointer dark:text-[var(--text-primary)] px-3 text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)] p-2 rounded-xl'
                    type="text"
                    value={
                        activeSearch === "_id"
                            ? _id
                            : activeSearch === "bookingId"
                                ? bookingId
                                : customerId
                    }
                    onChange={handleInput}
                />

                <div>
                    <select value={activeSearch} onChange={(e) => setactiveSearch(e.target.value)} className='bg-[#F4F7FE] cursor-pointer dark:bg-[var(--bg-primary)] dark:text-[var(--text-primary)] text-[#1A202C] font-semibold p-2 rounded-xl' name="Status" id="status">
                        <option className='dark:text-[var(--text-primary)] cursor-pointer text-[#1A202C] font-semibold' value="Select Search">Select Search</option>
                        <option className='dark:text-[var(--text-primary)] cursor-pointer text-[#1A202C] font-semibold' value="_id">Transection Id</option>
                        <option className='dark:text-[var(--text-primary)] cursor-pointer text-[#1A202C] font-semibold' value="bookingId">Booking Id</option>
                        <option className='dark:text-[var(--text-primary)] cursor-pointer text-[#1A202C] font-semibold' value="customerId">Customer Id</option>
                    </select>
                </div>
            </div>
            {loading && <div>Loading..</div>}
            {filterTransection.length > 0 && filterTransection.map((transection) => <div key={transection._id} >
                <PaymentComponent transection={transection} />
            </div>)}
        </div>
    )
}

export default Payments
