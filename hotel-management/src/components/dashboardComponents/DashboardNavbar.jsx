import React from 'react'
import Input from '../Input'
import { useState ,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTheme } from '../../features/theme/themeSlice'
import { toggleSideBar } from '../../features/theme/themeSlice'

const DashboardNavbar = () => {
  const dispatch = useDispatch()
  const [toggleImage,setToggleImae] = useState()
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
  



  return (
    <div className='p-3 h-40 third:h-24 transform transition-all duration-400  w-full flex justify-center items-center rounded-2xl sticky top-3  backdrop-filter backdrop-blur-xl bg-opacity-0 '>
      <div className=' transform transition-all duration-400  w-full flex flex-col third:flex-row gap-3 justify-between third:items-center'>
        <div className='third:w-fit w-full transform transition-all duration-400'>
          <p className='text-sm dark:text-[var(--text-secondry)]'>Page / Dashboard</p>
          <h1 className='third:text-4xl text-3xl font-semibold third:font-bold dark:text-[var(--text-primary)]'>Admin Dashboard</h1>
        </div>
        <div className='transform transition-all duration-400 w-full third:w-1/2 second:w-fit flex p-2.5 gap-2  dark:bg-[var(--bg-secondry)] rounded-full bg-[#FFFFFF] ' >
          <div className='transform cursor-pointer transition-all duration-400 flex w-[40%] fifth:w-auto flex-1 p-2.5 rounded-full px-2 gap-1 dark:bg-[var(--bg-primary)] bg-[#F4F7FE]'>
            <img width={18} height={18} src="/search.svg" alt="search" />
            <input placeholder='Search...' type="text" className='border-none dark:text-[var(--text-primary)] outline-none text-sm font-semibold placeholder-gray-400' />
          </div>
          <img onClick={()=>dispatch(toggleSideBar(true))} width={18} height={18} className='text-gray-400 cursor-pointer first:hidden' src="/menu.svg" alt="menu" />
          <img width={18} height={18} className='text-gray-400 cursor-pointer' src="/notifications.svg" alt="notifications" />
          <img width={18} height={18} className='cursor-pointer' src="/info.svg" alt="info" />
          <img onClick={toggleTheme} className='cursor-pointer' width={18} height={18} src={toggleImage} alt="bedtime" />

          <div className='cursor-pointer flex justify-center items-center h-10 w-10 text-[0.7rem] bg-[#11047a] text-white rounded-full'>
            <p>MN</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar
