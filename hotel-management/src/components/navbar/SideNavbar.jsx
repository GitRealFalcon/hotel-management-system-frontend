import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideNavbar } from '../../features/theme/themeSlice'
import Button from '../Button'



const SideNavbar = () => {
    const { sideNavebar } = useSelector((state) => state.theme)
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector((state)=>state.auth)


    return (
        <div className={`first:w-[10%] second:w-[30%] third:w-[40%] forth:w-[50%] fifth:w-[60%] sixth:w-[70%] h-screen p-2 transform transition-all duration-400 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] fixed z-50  ${sideNavebar ? "right-0" : "right-[-70%]"}`} >
            <div onClick={() => dispatch(toggleSideNavbar(false))}><img src="close.svg" alt="close" /></div>
            <div className='mt-10 flex flex-col gap-5'>
                <ul className='flex flex-col h-full items-center gap-5 font-semibold'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-lg font-bold' : ''} end>
                        <li className='dark:text-[var(--text-primary)] hover:text-lg font-semibold text-[#1A202C]' >
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/rooms" className={({ isActive }) => isActive ? 'text-lg font-bold' : ''}>
                        <li className='dark:text-[var(--text-primary)] hover:text-lg font-semibold text-[#1A202C]'>
                            Rooms
                        </li>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-lg font-bold' : ''}>
                        <li className='dark:text-[var(--text-primary)] hover:text-lg font-semibold text-[#1A202C]'>
                            About
                        </li>
                    </NavLink>
                    <NavLink to="/service" className={({ isActive }) => isActive ? 'text-lg font-bold' : ''}>
                        <li className='dark:text-[var(--text-primary)] hover:text-lg font-semibold text-[#1A202C]'>
                            Service
                        </li>
                    </NavLink>

                </ul>

                 {!isAuthenticated && <div className='flex flex-col-reverse gap-2 items-center ' >
                        <Link to={"/signup"} ><Button children={"Singup"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' /></Link>
                        <Link to={"/login"}> <Button children={"Login"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' /></Link>
                    </div>}
            </div>
        </div>
    )
}

export default SideNavbar
