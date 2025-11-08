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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Protected authentication={false} >
            <Home />
          </Protected>
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
      }
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
