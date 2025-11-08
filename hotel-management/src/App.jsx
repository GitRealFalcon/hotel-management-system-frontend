import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'

function App() {

  return (
  <div className='relative min-h-screen overflow-x-hidden' >
    <div class="absolute top-0 -z-10  w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"><div className='shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-0 from-gray-800 bg-gradient-to-br '></div></div>
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
  </div>
  )
}

export default App
