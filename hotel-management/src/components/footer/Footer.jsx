import React from 'react'
import Logo from "../Logo"
import { Link } from 'react-router-dom'
import Button from "../Button"



const Footer = () => {
  return (
    <footer className='w-full h-[400px]  mt-10 flex flex-col items-center gap-7 justify-center p-5'>
      <div className='flex justify-between w-full'>
        <Logo height={60} width={60} />
        <div className=' flex gap-3'>
          <Link to={"https://www.facebook.com/Falcon.web.dev/"} target='_blank'> <img className='border rounded-full p-1 w-7 h-7' src="/facebook-02-stroke-rounded.svg" alt="facbook" /> </Link>
          <Link to={"https://github.com/GitRealFalcon"} target='_blank'> <img className='border rounded-full p-1 w-7 h-7' src="/github-stroke-rounded.svg" alt="github" /> </Link>
          <Link to={"https://www.linkedin.com/in/linkedrealfalcon/"} target='_blank'> <div className='border rounded-full  w-7 h-7 p-1'><img src="/linkedin-02-stroke-rounded.svg" alt="linkegin" /></div> </Link>
          <Link to={"https://x.com/Xrealfalcon"} target='_blank'> <img className='border rounded-full p-1 w-7 h-7' src="/new-twitter-stroke-rounded.svg" alt="twitter" /> </Link>
        </div>
      </div>

      <div className='flex justify-between w-full'>

        <div className='flex flex-col gap-2 w-1/5 text-sm'>
          <span className='font-semibold'>Service</span>
          <span>Find a hotel</span>
          <span>Location</span>
          <div className='flex gap-2 h-3.5 items-center'>
            <span>Sign up</span>
            <span className='h-full border-x'></span>
            <span>Log in</span>
            </div>
        </div>

        <div className='flex flex-col gap-2 w-1/5 text-sm'>
          <span className='font-semibold'>Company</span>
          <span>About</span>
          <span>Careers</span>
          <span>Media Center</span>
          <span>Travel Agents</span> 
        </div>

        <div className='flex flex-col w-1/5 gap-2 text-sm'>
          <span className='font-semibold'>Help</span>
          <span>Customer Support</span>
          <span>Guest Feedback</span>
          <span>Sitemap</span>
        </div>


        <div className='flex w-1/3 flex-col gap-2 text-sm'>
          <span className='font-semibold'>Falcon Plaza Privilege Club</span>
          <span>Welcome to the Falcon Plaza Privilege Club where luxury meets loyalty. Enjoy exclusive benefits, special offers, and memorable experiences designed to make every stay extraordinary.</span>
          <Button children={"Join Now"} className={"bg-gradient-to-tl from-gray-300 to-gray-950 text-white font-semibold"} />
        </div>

       


      </div>
      <p className="text-gray-600 mt-4">© 2025 Falcon Plaza Hotel & Event Center</p>
    </footer>
  )
}

export default Footer

