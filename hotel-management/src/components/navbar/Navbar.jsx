import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Select from '../Select'
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

    
const Navbar = () => {
    const [isLogin, setisLogin] = useState(true)
    const option = ["Profile", "Setting", "Bookings"]

   
    return (
        <div className='relative z-10 bg-gradient-to-br shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-0 from-gray-400 h-18 p-2'>
            <nav className=' p-1 -red-400 w-full flex justify-between'>

                <div className=' lg:w-1/3' >
                   <Logo/>
                </div>

                <div  >
                    <ul className='flex h-full items-center gap-5 font-semibold'>
                       <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-700 underline' : ''} end>
                        <li >
                            Home
                        </li>
                       </NavLink>  
                         <NavLink to="/rooms" className={({ isActive }) => isActive ? 'text-green-700 underline' : ''}>
                        <li >
                            Rooms
                        </li>
                         </NavLink>
                         <NavLink to="/about" className={({ isActive }) => isActive ? 'text-green-700 underline' : ''}>
                        <li >
                            About
                        </li>
                         </NavLink>
                         <NavLink to="/service" className={({ isActive }) => isActive ? 'text-green-700 underline' : ''}>
                        <li >
                            Service
                        </li>
                         </NavLink>
                      
                    </ul>
                </div>

                <div className=' lg:w-1/3 flex justify-end'>

                    {!isLogin && <div className='hidden lg:flex gap-2' >
                        <Button children={"Singup"} className='bg-gradient-to-tl  from-gray-300 to-gray-950 text-white font-semibold' />
                        <Button children={"Login"} className='bg-gradient-to-br  from-gray-300 to-gray-950 text-white font-semibold' />
                    </div>}

                    {isLogin && <div className='hidden lg:flex gap-2 '>
                        <div className='flex font-bold mr-5 items-center '>Mohd Naeem</div>
                        <Button className='bg-gradient-to-tl  from-gray-300 to-gray-950 text-white font-semibold' children={"Logout"} />
                        <div>
                            <Select className="bg-gradient-to-tr text-white font-semibold  from-gray-300 to-gray-950" options={option} />
                        </div>
                    </div>}
                    <div className='block p-1 lg:hidden'><span class="material-symbols-outlined">
                        segment
                    </span></div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
