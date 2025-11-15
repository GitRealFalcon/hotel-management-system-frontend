import React from 'react'

const Map = () => {
  return (
    <div className='mt-9 flex flex-col mb-5 gap-4'>

      <span className='text-orange-700 font-semibold'>LOCATION</span>
      <h1 className='text-3xl dark:text-[var(--text-primary)]  text-[#1A202C] font-bold font-serif'>Connect to the Falcon Plaza Hotel</h1>

      <div className='w-full h-[500px] border border-gray-300 rounded-xl overflow-hidden '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873.4609914000938!2d78.73303116582741!3d28.873258801765463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afeb6dcb21905%3A0xdf243e4754e6dfc!2sEsy%20Bazaar!5e0!3m2!1sen!2sin!4v1762576172513!5m2!1sen!2sin" className='w-full h-full' style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Map
