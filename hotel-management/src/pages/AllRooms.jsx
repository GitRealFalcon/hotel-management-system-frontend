import React, { useEffect, useState } from 'react'
import RoomCard from "../components/RoomCard"
import { useSelector, useDispatch } from 'react-redux'
import api from '../api/axios'
import { getRooms } from '../features/rooms/roomSlice'
import Select from '../components/Select'

const AllRooms = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    ; (async () => {
      try {
        const res = await api.get("rooms/all-rooms")
        const data = res.data.data
        dispatch(getRooms(data))
      } catch (error) {
        console.log(error);
      }
    })()
  }, [dispatch])

  const { roomsData } = useSelector((state) => state.room)
  const [rooms, setrooms] = useState([])
  const [filterRooms, setfilterRooms] = useState([])
  const [priceFilter, setpriceFilter] = useState("All")
  const [typeFilter, settypeFilter] = useState("")
  const [capFilter, setcapFilter] = useState("")
  const [capecity, setcapecity] = useState([])
  const options = ["Single", "Double", "Suite", "Deluxe", "Family"]
  const priceOptions = [
     "All",
    "500 1000",
    "1000 2000",
    "2000 3000",
    "3000 4000",
    "4000 5000"
  ]
  useEffect(() => {
    setrooms(roomsData.filter((each)=> each.isAvailable))
  }, [roomsData])
  
  useEffect(() => {
      const capValues = Array.from(new Map(rooms.map((room)=>[room.capacity,room])).values())
      console.log(capValues);
      
      setcapecity(capValues)
      let filter = rooms
      if (priceFilter === "All") {
        filter = rooms
      } else {
        const [min, max] = priceFilter.split(" ").map(Number)
        filter = filter.filter((each)=> each.price >= min && each.price <= max)
      }

      if (typeFilter) {
        filter = filter.filter((each)=> each.type === typeFilter)
      }

      if (capFilter) {
        filter = filter.filter((each)=> each.capacity === capFilter)
        
      }
     
      setfilterRooms(filter)
      
  }, [roomsData,rooms,priceFilter,typeFilter,capFilter])


  return (
    <div className='w-full bg-[#F4F7FE] dark:bg-[var(--bg-primary)]'>
      <div className='w-full min-h-screen flex mt-[72px]'>
        <div className=' flex  w-[20%] dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] flex-col gap-4  p-2'>
          <div className=' bg-[#F4F7FE] dark:bg-[var(--bg-primary)] flex flex-col justify-center py-4 p-3 gap-3 rounded-xl'>
              <Select onChange={(e)=>setpriceFilter(e.target.value)} label="Price" flex_col="flex-col" options={priceOptions}/>
              <Select onChange={(e)=>settypeFilter(e.target.value)} label="Room Type" flex_col="flex-col" options={options}/>
               {capecity.map((item) => <div key={item.capacity} onClick={() => setcapFilter(item.capacity)} className='cursor-pointer dark:text-[var(--text-primary)] overflow-clip text-[#1A202C] p-2 text-center border rounded-lg '>{item.capacity + " Guest"}</div>)}
          </div>
        </div>
        <div className=' p-4 h-full overflow-y-auto w-[80%] grid grid-cols-3 gap-4 '>
          {filterRooms.length > 0 && filterRooms.map((room) => <RoomCard
            key={room._id}
            type={room.type}
            image={room.image[0].secure_url}
            capecity={room.capacity}
            price={room.price}
            roomNo={room.roomNo}
          />)}
        </div>
      </div>
    </div>
  )
}

export default AllRooms
