import React from 'react'

const EditProfile = () => {
  return (
    <div className={` h-screen w-full backdrop-blur-sm bg-opacity-0 from-gray-400 flex items-center justify-center absolute`}>
      <div className=' h-[60%] w-[60%] bg-white flex flex-col justify-around p-6 rounded-xl border border-slate-300'>
        <form action="">
        <div className='flex justify-between h-10'>
          <h2 className='font-semibold'>Booking information</h2>
          <div onClick={onClose} className='font-semibold cursor-pointer hover:font-bold'>Close</div>
        </div>

        <div className='w-full border-b'></div>

        <div className='w-full  flex  justify-between p-2 py-5 text-sm'>
           

        </div>
        <div className='w-full h-16 flex justify-end gap-4 p-2'>
          <div ><Button type="submit" bgColor='bg-green-500' className='font-semibold ' children={"Pay Now"} /></div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
