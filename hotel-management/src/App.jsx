import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import { ClassNames } from '@emotion/react'
function App() {

  return (
  <>
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
      <Navbar/>
      <Home/>
  </>
  )
}

export default App
