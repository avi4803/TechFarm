import React from 'react'
import Navabr from './Components/HomePage/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function Layout() {
  return (
    <>
    <Navabr/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}

export default Layout
