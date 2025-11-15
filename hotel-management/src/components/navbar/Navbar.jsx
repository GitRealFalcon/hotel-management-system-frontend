import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Select from '../Select'
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import api from '../../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { setTheme } from '../../features/theme/themeSlice';



const Navbar = () => {
    const [selected, setSelected] = useState("");
    const { isAuthenticated, user } = useSelector((state) => state.auth)
    const option = [user?.fullName, "Profile", "Hitory", "Booking"]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [toggleImage, setToggleImae] = useState()

    
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
            await api.get("users/logout")
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
            case "Hitory":
                navigate("/history")
                break;
            case "Booking":
                navigate("/bookings")
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setSelected("");
    }, [location.pathname]);

    return (
        <div className='fixed w-full top-0 z-30 bg-gradient-to-bl shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-0 dark:from-[#0B1437] to-gray-400 h-18 px-2'>
            <nav className=' p-1 -red-400 w-full flex justify-between '>

                <div className='  lg:w-1/3' >
                    <Logo width={54} />
                </div>

                <div  >
                    <ul className='flex h-full items-center gap-5 font-semibold'>
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

                    {!isAuthenticated && <div className='hidden lg:flex gap-2 items-center ' >
                        <Link to={"/signup"} ><Button children={"Singup"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' /></Link>
                        <Link to={"/login"}> <Button children={"Login"} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' /></Link>
                    </div>}

                    {isAuthenticated && <div className='hidden lg:flex gap-3  items-center'>
                        {/* <div className='flex font-bold mr-5 dark:text-[var(--text-primary)] text-[#1A202C] items-center '>{user.fullName}</div> */}
                        <div>
                            <Select value={selected} onChange={handleSelect} className="dark:text-[var(--text-primary)] font-semibold text-[#1A202C] " options={option} />
                        </div>
                        <Button onClick={handleLogout} textColor='dark:text-[var(--text-primary)]  text-[#1A202C]' className='  bg-transparent border font-semibold' children={"Logout"} />
                    </div>}
                    <div><img onClick={toggleTheme} src={toggleImage} alt="toggle" /></div>
                    <div className='block p-1 lg:hidden'><span className="material-symbols-outlined">
                        segment
                    </span></div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
