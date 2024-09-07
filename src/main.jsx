import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { BrowserRouter,Routes,Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import OurTeam from './Components/OurTeam/OurTeam'
import Contacts from './Components/Contacts/Contacts'
import Layout from './Layout'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
      
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/ourteam',
          element: <OurTeam />,
          },
      
        {
          path: '/contacts',
          element: <Contacts />,
      
        },
      ]
  
  
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
