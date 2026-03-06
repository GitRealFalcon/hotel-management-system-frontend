import React from 'react'
import Logo from "../Logo"
import { Link } from 'react-router-dom'
import Button from "../Button"
import { useSelector } from 'react-redux'



const Footer = () => {
  const {isAuthenticated} = useSelector((state)=>state.auth)
  return (
    <footer className='w-full h-[750px]  fifth:h-[550px] md:h-[400px] dark:bg-[var(--bg-secondry)] bg-[#FFFFFF]  flex flex-col items-center gap-7 justify-center p-5'>
      <div className='flex justify-between w-full'>
        <Link to={"/"}><Logo height={60} width={60} /></Link>
        <div className=' flex gap-3'>
          <Link to={"https://www.facebook.com/Falcon.web.dev/"} target='_blank'> <img className='border dark:bg-gray-300 rounded-full p-1 w-7 h-7' src="/facebook-02-stroke-rounded.svg" alt="facbook" /> </Link>
          <Link to={"https://github.com/GitRealFalcon"} target='_blank'> <img className='border dark:bg-gray-300 rounded-full p-1 w-7 h-7' src="/github-stroke-rounded.svg" alt="github" /> </Link>
          <Link to={"https://www.linkedin.com/in/linkedrealfalcon/"} target='_blank'> <div className='border dark:bg-gray-300 rounded-full  w-7 h-7 p-1'><img src="/linkedin-02-stroke-rounded.svg" alt="linkegin" /></div> </Link>
          <Link to={"https://x.com/Xrealfalcon"} target='_blank'> <img className='border dark:bg-gray-300 rounded-full p-1 w-7 h-7' src="/new-twitter-stroke-rounded.svg" alt="twitter" /> </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 fifth:grid-cols-2 gap-2 sm:grid-cols-4 w-full'>

        <div className='flex flex-col gap-2  text-sm'>
          <span className='font-semibold dark:text-[var(--text-primary)]  text-[#1A202C]'>Service</span>
          <span className='font-semibold text-gray-400'>Find a hotel</span>
          <span className='font-semibold text-gray-400'>Location</span>
          {!isAuthenticated && <div className='flex gap-2 h-3.5 items-center'>
            <Link to={"/signup"}><span className='font-semibold text-gray-400'>Sign up</span></Link>
            <span className='h-full border-gray-400 border-x'></span>
            <Link to={"/login"}><span className='font-semibold text-gray-400'>Log in</span></Link>
            </div>}
        </div>

        <div className='flex flex-col gap-2  text-sm'>
          <span className='font-semibold dark:text-[var(--text-primary)]  text-[#1A202C]'>Company</span>
          <Link to={"/about"}><span className='font-semibold text-gray-400'>About</span></Link>
          <span className='font-semibold text-gray-400'>Careers</span>
          <span className='font-semibold text-gray-400'>Media Center</span>
          <span className='font-semibold text-gray-400'>Travel Agents</span> 
        </div>

        <div className='flex flex-col  gap-2 text-sm'>
          <span className='font-semibold dark:text-[var(--text-primary)]  text-[#1A202C]'>Help</span>
          <Link to={"/service"}><span className='font-semibold text-gray-400'>Customer Support</span></Link>
          <span className='font-semibold text-gray-400'>Guest Feedback</span>
          <span className='font-semibold text-gray-400'>Sitemap</span>
        </div>


        <div className='flex flex-col gap-2 text-sm'>
          <span className='font-semibold dark:text-[var(--text-primary)]  text-[#1A202C]'>Falcon Plaza Privilege Club</span>
          <span className='font-semibold text-gray-400'>Welcome to the Falcon Plaza Privilege Club where luxury meets loyalty. Enjoy exclusive benefits, special offers, and memorable experiences designed to make every stay extraordinary.</span>
          <Button children={"Join Now"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' />
        </div>

       


      </div>
      <p className="text-gray-400 mt-4">© 2025 Falcon Plaza Hotel & Event Center</p>
    </footer>
  )
}

export default Footer

