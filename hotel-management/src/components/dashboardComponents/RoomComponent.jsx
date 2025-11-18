import React from 'react'
import { Button } from "../index";
import { useState } from "react";



function RoomComponent({ room }) {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      className="transform transition-all cursor-pointer duration-400 w-full flex flex-col gap-4 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] p-4 rounded-2xl"
    >
      <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold">

        <div>
          <div className="text-sm text-gray-400">Room No</div>
          <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
            {room?.roomNo ? room.roomNo : "N/A"}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-400">Price</div>
          <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
            {room?.price ? room.price : "N/A"}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400 overflow-clip">Type</div>
          <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
            {room?.type ? room.type : "N/A"}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400 ">Capacity</div>
          <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
            {room?.capacity ? room.capacity : "N/A"}
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 overflow-hidden 
               ${show ? "max-RoomComponent-40 opacity-100" : "max-RoomComponent-0 hidden opacity-0"}`} >

        <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold">

          <img
            src={room?.image?.[0]?.secure_url || ""}
            className="w-[100px] h-[100px] object-cover"
            alt="room_image"
          />
          <div>
            <div className="text-sm text-gray-400">Status</div>
            <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
              {room?.isAvailable ? "Available" : "Un-Available"}
            </div>
          </div>

          <Button children={"Edit"} className="w-fit h-fit col-end-5" />
        </div>
      </div>
    </div>
  )
}

export default RoomComponent
