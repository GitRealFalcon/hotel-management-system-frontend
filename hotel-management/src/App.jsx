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
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_50%,rgba(252,205,238,0.5)_0%,white_100%)]"></div>


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
      <main className="flex-grow">
        <ScrollToTop/>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
