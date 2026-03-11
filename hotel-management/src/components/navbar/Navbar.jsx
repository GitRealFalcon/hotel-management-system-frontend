import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Select from '../Select'
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authThunks';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { setTheme } from '../../features/theme/themeSlice';
import { toggleSideNavbar } from '../../features/theme/themeSlice';
import { useEffectEvent } from 'react';



const Navbar = () => {
    const [selected, setSelected] = useState("");
    const { isAuthenticated, user } = useSelector((state) => state.auth)
    const option = [user?.fullName, "Profile", user?.isAdmin && "Dashboard"]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [toggleImage, setToggleImae] = useState()
    const [profileChar, setprofileChar] = useState("@")
    const dropDownRef = useRef()
    const [showDropdown, setshowDropdown] = useState(false)

    const toggleTheme = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove('dark')
            dispatch(setTheme(false))
            setToggleImae("/sun.svg")

        } else {
            document.documentElement.classList.add('dark')
            dispatch(setTheme(true))
            setToggleImae('/bedtime.svg')
        }
    }
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            dispatch(setTheme(true))
            setToggleImae('/bedtime.svg')

        } else {
            document.documentElement.classList.remove('dark')
            dispatch(setTheme(false))
            setToggleImae("sun.svg")
        }
    }, [])
    const handleLogout = async () => {
        try {
           
            dispatch(logOut())
            toast.info("LogOut successfully")

        } catch (error) {
            toast.error(error)
        }
    }

    const handleSelect = (e) => {
        setSelected(e.target.value)
        switch (e.target.value) {
            case "Profile":
                navigate("/profile")
                break;
            case "Dashboard":
                navigate("/admin-dashboard")
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setSelected("");
    }, [location.pathname]);


    useEffect(() => {

        if (user) {
            const name = user?.fullName
            const str = name?.split(" ")
            if (str.length > 1) {
                setprofileChar(str[0]?.charAt(0) + str[1]?.charAt(0))
            } else {
                setprofileChar(str[0]?.charAt(0))
            }
        } else {
            setprofileChar("@")
        }

    }, [isAuthenticated, user])


    useEffect(() => {
        const handleShowDropdown = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setshowDropdown(false)
            }
        }

        if (showDropdown) {
            document.addEventListener("mousedown", handleShowDropdown)
        }else{
            document.removeEventListener("mousedown",handleShowDropdown)
        }

        return ()=>{
            document.removeEventListener("mousedown", handleShowDropdown)
        }

    }, [showDropdown])



    return (
        <div className='fixed w-full top-0 z-30 bg-gradient-to-bl shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-0 dark:from-[#0B1437] to-gray-400 h-18 px-2'>
            <nav className=' p-1 w-full flex justify-between '>

                <div className='  lg:w-1/3' >
                    <Logo width={54} />
                </div>

                <div  >
                    <ul className='hidden forth:flex h-full items-center gap-5 font-semibold'>
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
                </div>

                <div className=' lg:w-1/3 flex items-center gap-3 justify-end'>

                    {!isAuthenticated && <div className=' gap-2 hidden second:flex items-center ' >
                        <Link to={"/signup"} ><Button children={"Singup"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' /></Link>
                        <Link to={"/login"}> <Button children={"Login"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' /></Link>
                    </div>}

                    {isAuthenticated && <div className='hidden second:flex gap-3  items-center'>
                        {/* <div className='flex font-bold mr-5 dark:text-[var(--text-primary)] text-[#1A202C] items-center '>{user.fullName}</div> */}
                        <div>
                            <Select value={selected} onChange={handleSelect} className="dark:text-[var(--text-primary)]  font-semibold text-[#1A202C] " options={option} />
                        </div>
                        <Button onClick={handleLogout} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' children={"Logout"} />
                    </div>}

                    {<div onClick={() => setshowDropdown(!showDropdown)} className="w-8 h-8 second:hidden rounded-full text-[0.7rem] flex justify-center items-center bg-[#11047a] text-white">
                        {profileChar}
                    </div>}

                    <div><img onClick={toggleTheme} src={toggleImage} alt="toggle " /></div>
                    <div onClick={() => dispatch(toggleSideNavbar(true))} className='forth:hidden block'>
                        <img src="/menu.svg" alt="menu" />
                    </div>
                </div>

            </nav>
            <div ref={dropDownRef} className={`${!showDropdown && "opacity-0 hidden"} transform transition-all duration-400 flex flex-col items-center justify-center gap-2 p-2 border border-gray-500 font-semibold dark:text-[var(--text-primary)] min-w-28 min-h-20 absolute right-4 top-19 dark:bg-[var(--bg-primary)] bg-[#F4F7FE] rounded-xl`}>
                {isAuthenticated && <div className='flex flex-col items-center justify-center gap-2'>
                    <Link to={"/profile"} className='hover:text-lg'>
                        {user?.fullName}
                    </Link>
                    {user?.isAdmin && <Link to={"/admin-dashboard"} className='hover:text-lg'>
                        Dashboard
                    </Link>}

                    <Link onClick={handleLogout} className='hover:text-lg'>
                        Logout
                    </Link>
                </div>}

                {!isAuthenticated && <div className='flex flex-col items-center justify-center gap-2'>
                    <Link to={"/login"} className='hover:text-lg'>
                        Login
                    </Link>
                    <Link to={"/signup"} className='hover:text-lg'>
                        Singup
                    </Link>
                </div>}

            </div>
        </div>
    )
}

export default Navbar
