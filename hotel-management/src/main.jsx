import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './app/store.js';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from "./components/Login.jsx"
import SinghUp from "./components/SinghUp.jsx"
import Protected from './components/AuthLayout.jsx';
import Profile from "./pages/Profile.jsx"
import NewBooking from "./pages/NewBooking.jsx"
import Custom404 from './pages/404.jsx';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      
      {
        path: "/",
        element: (
            <Home />
        )
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false} >
            <Login />
          </Protected>

        )
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false} >
            <SinghUp />
          </Protected>
        )
      },
       
      {
        path:"/profile",
        element:(
          <Protected authentication={true} >
            <Profile/>
          </Protected>
      )
      },
      {
        path:"/new-booking/:roomno",
        element:(
          <Protected authentication={true} >
            <NewBooking/>
          </Protected>
      )
      },
      {
        path:"*",
        element:(
              <Custom404/>
        )
      },
     
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </Provider>

)
