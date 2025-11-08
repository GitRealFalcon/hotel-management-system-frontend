import React from 'react'
import RoomCard from '../RoomCard'
import { useState, useRef, useEffect } from 'react'
import Select from '../Select'
import api from '../../api/axios'

import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const RoomSection = ({ref}) => {
  const data = useSelector((state) => state.room.roomsData) 
  const [rooms, setRooms] = useState([])
  const [capFilter, setcapFilter] = useState([])
  const selectRef = useRef()
  

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await api.get("/rooms/all-rooms", { withCredentials: true });
  //       dispatch(getRooms(res.data.data));
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Failed to load rooms");
  //     }
  //   })();
  // }, [dispatch]);


  useEffect(() => {
    setRooms(data.filter((room) => room.isAvailable));
  }, [data]);



  const options = [
    "All",
    "500 1000",
    "1000 2000",
    "3000 4000",
    "4000 5000",
    "5000 6000"
  ]

  const handleSelect = (e) => {
    if (e.target.value === "All") {
      setRooms(data)
    } else {
      const [min, max] = e.target.value.split(" ").map(Number)
      const filterRooms = data.filter((room) => room.price >= min && room.price <= max)
      setRooms(filterRooms)
    }
  }

  useEffect(() => {
    const tempFilter = Array.from(
      new Map(rooms.map(room => [room.capacity, room])).values()
    );
    setcapFilter(tempFilter)
  }, [rooms])


  const filterByCapecity = (e) => {

    setRooms(rooms.filter((room) => room.capacity === e))
  }



  return (
    <div ref={ref} className='mt-4 flex flex-col gap-4'>

      <div className='flex flex-col gap-2'>
        <span className='text-orange-700 font-semibold'>Guest Rooms</span>
        <h1 className='text-3xl font-bold font-serif'>Available Guest Rooms</h1>
      </div>

      <div className='flex gap-2 '>
        <Select ref={selectRef} onChange={handleSelect} options={options} />
        {capFilter.map((item) => <div key={item.capacity} onClick={() => filterByCapecity(item.capacity)} className='cursor-pointer p-2 text-center border rounded-lg '>{item.capacity + " Guest"}</div>)}
      </div>

      <div className='grid grid-cols-3 gap-3'>

        {rooms.map((room) => <RoomCard
          key={room._id}
          type={room.type}
          image={room.image[0].secure_url}
          capecity={room.capacity}
          price={room.price}
        />)}

      </div>
    </div>
  )
}

export default RoomSection
