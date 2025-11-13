import React from 'react'

const ValueCard = ({image,leval,value}) => {
  return (
    <div className='w-full h-full flex p-4 items-center gap-4 rounded-2xl dark:bg-[var(--bg-secondry)] bg-[#FFFFFF]'>
      <div className=' w-14 h-14 dark:bg-[var(--bg-third)] bg-[#F4F7FE] rounded-full flex justify-center items-center'>
        <img width={40} height={40} src={image} alt={leval} />
      </div>
      <div>
        <p className=' text-gray-400 text-sm font-semibold'>{leval}</p>
        <h1 className='font-bold dark:text-[var(--text-primary)] text-[#1A202C] text-2xl'>{value}</h1>
      </div>
    </div>
  )
}

export default ValueCard
