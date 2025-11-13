import React from 'react'

const Table = () => {
    return (
        <div className='w-full h-full flex flex-col gap-2 py-3 items-center'>
            <div>
                <div className='text-2xl dark:text-[var(--text-primary)] text-[#1A202C] font-bold'>Bookings Table</div>
                
            </div>
            <div className="flex flex-col w-full p-3 gap-2">
                <div className="grid grid-cols-4 h-7 w-full border-b border-gray-400 text-sm  text-gray-400 font-bold">
                    <div className='pl-1' >GUEST ID</div>
                    <div className="pl-1">NAME</div>
                    <div className="pl-1">ROOM-NO</div>
                    <div className="pl-1">STATUS</div>
                </div>

                <div className="grid grid-cols-4 h-7 py-1 w-full dark:text-[var(--text-primary)] text-[#1A202C] text-sm font-bold">
                    <div className="pl-1 flex gap-2 overflow-x-clip"> 
                        <input checked  className='accent-[#422AFB] w-4' type="checkbox" /> 
                    <p>    
                        455212asasa
                        </p>
                    </div>
                    <div className="pl-1 overflow-x-clip">Mohd Naeem</div>
                    <div className="pl-1  ">1</div>
                    <div className="pl-1">Checked-In</div>
                </div>
            </div>


        </div>
    )
}

export default Table
