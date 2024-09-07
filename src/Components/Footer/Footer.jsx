import React from 'react'
import { Link } from 'react-router-dom'
// import { FaFacebook,FaInstagram ,FaGithub } from "react-icon/fa";



function Footer() {
    return ( <>
     <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Tech-Farm</h1>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <Link href="#about" className="text-gray-400 hover:text-white">
            About Us
          </Link>
          <a href="#services" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
          {/* <FaFacebook /> */}

          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          {/* <FaInstagram /> */}


          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          {/* <FaGithub /> */}


          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-8">
        <p>&copy; 2024 Tech-Farm. All rights reserved. </p>
        <p className='mt-3'>Made by Nil✨</p>
      </div>
    </footer>
                   
    
    </> );
}


export default Footer;