import React from 'react'
import Select from '../components/Select'
import { Button } from '../components'
import RoomCard from '../components/RoomCard'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import api from '../api/axios'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import Calendar from "../components/Calendar/Calendar"
import { useNavigate } from 'react-router-dom'

const NewBooking = () => {
    const { roomno } = useParams()
    const [room, setroom] = useState({})
    const options = []
    const { user } = useSelector((state) => state.auth)
    const [first, last] = user.fullName.split(" ")
    const [calShow, setcalShow] = useState(false)
    const [isActive, setisActive] = useState("")
    const [checkIn, setcheckIn] = useState(dayjs().format("ddd, MMM DD YYYY"))
    const [checkOut, setcheckOut] = useState(dayjs().add(1, 'day').format("ddd, MMM DD YYYY"))
    const calRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        ; (async () => {
            try {
                const roomData = await api.get("rooms/get-room", { params: { roomNo: roomno } })
                setroom(roomData.data.data)
            } catch (error) {
                toast.error(error)
            }
        })()

    }, [roomno])

    for (let index = 1; index <= room.capacity; index++) {
        options.push(index)
    }

    const handleDateSelect = (date) => {
        const formated = date.format("ddd, MMM DD YYYY")
        if (isActive === "checkIn") {
            setcheckIn(formated)
        } else {
            setcheckOut(formated)
        }
        setcalShow(false);
    }

    useEffect(() => {

        function handleClickOutside(event) {

            if (calRef.current && !calRef.current.contains(event.target)) {
                setcalShow(false);
            }

        }

        if (calShow) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [calShow])

    const data = JSON.stringify({
        roomNo: roomno,
        checkIn: dayjs(checkIn).format("DD/MM/YYYY"),
        checkOut: dayjs(checkOut).format("DD/MM/YYYY"),
    });
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post("bookings/new-booking",data)
            toast.success("Booking Successfully")
            navigate("/profile")

        } catch (error) {
                toast.error(error)
        }
    }


    return (
        <div className='w-full flex items-center  justify-center pt-20'>
            <div className='bg-white rounded-xl p-4 justify-around w-[60%] items-center border flex'>
                <div className='w-[60%] p-2 bg-gradient-to-br rounded-xl from-gray-200 to-gray-100 backdrop-blur-md backdrop-filter bg-opacity-0'>
                    <form onSubmit={handleSubmit}>
                        <div className=' flex flex-col gap-2 p-2'>
                            <h1 className='font-semibold'>Booking Details</h1>
                            <div className='flex w-full'>

                                <div className='flex flex-col w-1/2 text-sm gap-2 px-2'>
                                    <div className='flex flex-col gap-1 '>
                                        <div className='text-gray-700'>Check-In</div>
                                        <div onClick={() => { setcalShow(!calShow); setisActive("checkIn") }} className='font-semibold cursor-pointer bg-gray-300 p-2 w-full rounded-lg'>{checkIn}</div>
                                    </div>
                                    <div className='flex flex-col gap-1 '>
                                        <div className='text-gray-700'>No. of Guests</div>
                                        <Select className="font-semibold cursor-pointer bg-gray-300 p-2 w-full rounded-lg" options={options} />
                                    </div>
                                </div>

                                <div className='flex flex-col text-sm w-1/2 gap-2 px-2'>
                                    <div className='flex flex-col gap-1 '>
                                        <div className='text-gray-700'>Check-out</div>
                                        <div onClick={() => { setcalShow(!calShow); setisActive("checkOut") }} className='font-semibold cursor-pointer bg-gray-300 p-2 w-full rounded-lg'>{checkOut}</div>
                                    </div>
                                    <div className='flex flex-col gap-1 '>
                                        <div className='text-gray-700'>Room</div>
                                        <div className='font-semibold bg-gray-300 p-2 w-full rounded-lg'>{room.type}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' flex flex-col gap-2 p-2'>
                            <h2 className='font-semibold'>Contact Details</h2>
                            <div className='flex w-full pb-3'>
                                <div className='flex flex-col text-sm w-1/2 gap-2 px-2'>
                                    <div className='flex flex-col gap-1 '>
                                        <div className='text-gray-700'>First Name</div>
                                        <div className='font-semibold bg-gray-300 p-2 w-full rounded-lg'>{first ? first : "N/A"}</div>
                                    </div>
                                    <div className='flex flex-col gap-1 '>
                                        <div className='text-gray-700'>Phone Number</div>
                                        <div className='font-semibold bg-gray-300 p-2 w-full rounded-lg'>{user.phone ? user.phone : "N/A"}</div>
                                    </div>
                                </div>

                                <div className='flex flex-col text-sm w-1/2 gap-2 px-2'>
                                    <div className='flex flex-col gap-1 '>
                                        <div className='text-gray-700'>Last Name</div>
                                        <div className='font-semibold bg-gray-300 p-2 w-full rounded-lg'>{last ? last : "N/A"}</div>
                                    </div>
                                    <div className='flex flex-col gap-1 '>
                                        <div className='text-gray-700'>Email</div>
                                        <div className='font-semibold bg-gray-300 p-2 w-full rounded-lg'>{user.email ? user.email : "N/A"}</div>
                                    </div>
                                </div>
                            </div>
                            <Button type='submit' children={"Book Now"} />
                        </div>
                    </form>
                </div>
                <div className='w-[38%]'>
                    <RoomCard type={room.type} capecity={room.capacity} price={room.price} image={room.image ? room.image[0].secure_url : "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"} btnShow={true} />
                </div>
            </div>
            <div ref={calRef} className={`
           fixed left-1/4 top-50 rounded-2xl shadow-xl 
             backdrop-filter backdrop-blur-sm bg-gradient-to-br translate-y-2 from-gray-400/30 to-gray-900/10
              transition-all duration-300 ease-in-out transform
                ${calShow
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible pointer-events-none"
                } `} >
                <Calendar onDateSelect={handleDateSelect}
                    minDate={isActive === "checkOut" ? dayjs(checkIn).add(1, 'day') : dayjs()} />
            </div>
        </div>
    )
}

export default NewBooking
