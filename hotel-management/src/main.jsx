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
import Dashboard from './pages/Dashboard.jsx';
import MainDashboard from './pages/MainDashboard.jsx';
import Customer from './pages/Customers.jsx';
import Bookings from './pages/Bookings.jsx';
import Payments from './pages/Payments.jsx';
import CheckIn from './pages/CheckIn.jsx';
import NotAuthorized from './pages/NotAuthorized.jsx';

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
            <Login />
        )
      },
      {
        path: "/signup",
        element: (
            <SinghUp />
        )
      },

      {
        path: "/profile",
        element: (
          <Protected authentication={true} >
            <Profile />
          </Protected>
        )
      },
      {
        path: "/new-booking/:roomno",
        element: (
          <Protected authentication={true} >
            <NewBooking />
          </Protected>
        )
      },

      {
        path: "/not-authorized",
        element: (
          <NotAuthorized />
        )
      },
      {
        path: "*",
        element: (
          <Custom404 />
        )
      },

    ]
  },
  {
    path: "/admin-dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/admin-dashboard",
        element: (
          <Protected adminOnly={true} authentication={true} >
            <MainDashboard />
          </Protected>
        )
      },
      {
        path: "/admin-dashboard/customers",
        element: (
          <Protected adminOnly={true} authentication={true} >
            <Customer />
          </Protected>
        )
      },
      {
        path: "/admin-dashboard/bookings",
        element: (
          <Protected adminOnly={true} authentication={true} >
            <Bookings />
          </Protected>
        )
      },
      {
        path: "/admin-dashboard/payments",
        element: (
          <Protected adminOnly={true} authentication={true} >
            <Payments />
          </Protected>
        )
      },
      {
        path: "/admin-dashboard/check-in",
        element: (
          <Protected adminOnly={true} authentication={true} >
            <CheckIn />
          </Protected>
        )
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </Provider>

)
