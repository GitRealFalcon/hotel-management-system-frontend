import React, { useEffect } from 'react'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import api from '../../api/axios'
import { useDispatch } from 'react-redux'
import { getRooms } from '../../features/rooms/roomSlice'
import { toast } from 'react-toastify'

const EditRoom = ({ onClose, showEditRoom, room }) => {
  const dispatch = useDispatch()
  const selectRef = useRef()
  const { register, handleSubmit,reset, formState: { errors } } = useForm()
  
  useEffect(() => {
    if (room) {
     reset({
    roomNo: room.roomNo || "",
    price: room.price || "",
    description : room.description || "",
    capacity : room.capacity || "",
    type : room.type || ""
  })
   }
  }, [room, reset])
  
  
  const onSubmit = (data) => {
   
    ; (async () => {
      try { 
        await api.patch("rooms/update-details", data)
        const res = await api.get("rooms/all-rooms")
        const roomData = res.data.data
        dispatch(getRooms(roomData))
        toast.success("Room Update successfully")
        onClose()
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data.message)
      }
    })()

  }

  const Options = ["Single", "Double", "Suite", "Deluxe", "Family"]
  if (!showEditRoom) return null;
  return (
    <div className='w-full h-full  z-10 absolute backdrop-blur-sm bg-opacity-0 from-gray-400 flex pt-10 justify-center'>
      <div className=' h-[70%] w-[60%] dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] dark:border-none flex flex-col justify-around p-6 rounded-xl border border-slate-300'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-between h-10'>
            <h2 className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>Add Room</h2>
            <div onClick={onClose} className='dark:text-[var(--text-primary)] text-[#1A202C] font-semibold cursor-pointer hover:font-bold'>Close</div>
          </div>
          <div className='w-full border-gray-400 border-b'></div>
          <div className='w-full  flex flex-col gap-5 p-2 py-5 text-sm'>
            <div className='flex gap-5'>
              <div>
                <Input disabled min="1" label="Room No" type="number" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                  {...register("roomNo", {
                    required: "ROOM NO is Required",
                    min: { value: 1, message: "Room number must be at least 1" }

                  })}
                />
                {errors.roomNo && (
                  <p className="text-red-500 text-sm mt-1">{errors.roomNo.message}</p>
                )}
              </div>

              <div>
                <Input min="500" type="number" label="Price" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                  {...register("price", {
                    required: "Price is Required",
                     min: { value: 500, message: "Price must be at least 500" }
                  })}
                />

                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                )}
              </div>
              <Input label="Description" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                {...register("description", {
                  required: "Description is Required",
                })}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>
            <div>
              <Input min="1" label="Capacity" type="number" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                {...register("capacity", {
                  required: "Capacity is Required",
                   min: { value: 1, message: "Capacity must be at least 1 person" }
                })}
              />
              {errors.capacity && (
                <p className="text-red-500 text-sm mt-1">{errors.capacity.message}</p>
              )}
            </div>
            <div className='flex gap-5'>
              <div>
                <Select ref={selectRef} label="Type" className="font-semibold" flex_col="flex-col" options={Options}
                  {...register("type", {
                    required: "select Room Type",
                  })}
                />
                {errors.type && (
                  <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
                )}
              </div>

            </div>

          </div>
          <div className='w-full h-16 flex justify-end gap-4 p-2'>
            <div ><Button type="submit" bgColor='bg-green-500' className='font-semibold ' children={"Update Room"} /></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditRoom
