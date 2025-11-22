import React, { useEffect, useState } from 'react'
import RoomComponent from '../components/dashboardComponents/RoomComponent'
import api from '../api/axios'
import { getRooms } from '../features/rooms/roomSlice'
import { useDispatch,useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import AddRoom from '../components/dashboardComponents/AddRoom'
import EditRoom from '../components/dashboardComponents/EditRoom'

const Rooms = () => {
      const [showAddRoom, setshowAddRoom] = useState(false)
      const [showEditRoom, setshowEditRoom] = useState(false)
      const [EditRoomData, setEditRoomData] = useState("")
     const [loading, setloading] = useState(true)
    const dispatch = useDispatch()
    const {roomsData} = useSelector((state)=>state.room)

    useEffect(() => {
     ;(async()=>{
       try {
         const res = await api.get("rooms/all-rooms")
         const data = res.data.data
         dispatch(getRooms(data))
        setloading(false)
       } catch (error) {
        console.log(error);
        setloading(false)
       }
     })()
     
    }, [])
    

  return (
    <div  className="flex relative min-h-screen mt-4 flex-col gap-3">
        <AddRoom showAddRoom={showAddRoom} onClose={()=>setshowAddRoom(false)}/>
          <EditRoom room={EditRoomData} onClose={()=>setshowEditRoom(false)} showEditRoom={showEditRoom}/>
        <div className='w-full h-15 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] rounded-2xl text-gray-500 sticky flex items-center justify-end gap-3 p-3  top-30'>
            <div onClick={()=>setshowAddRoom(true)} className='font-semibold cursor-pointer hover:cursor-pointer dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)] p-3 rounded-lg '>Add Room</div>
        </div>
        {loading && <div>Loading..</div>}
      {roomsData.length > 0 && roomsData.map((room)=><div key={room._id}>
        <RoomComponent EditRoomData={(data)=>setEditRoomData(data)} showEditRoom={()=>setshowEditRoom(true)} room={room}/>
        </div>)}
    </div>
  )
}

export default Rooms
