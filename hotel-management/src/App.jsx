import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUser } from "./features/auth/authThunks"
import { useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    
    dispatch(fetchUser());

  }, [dispatch,isAuthenticated])


  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative bg-[#F4F7FE] dark:bg-[var(--bg-primary)]">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />


      <Navbar />
      <main className="grow">
        <ScrollToTop/>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
