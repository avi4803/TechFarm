import React from "react";
import image from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
function Navabr() {
  return (
    <>
      <div className="navbar  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/Contacts">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/About">Project</NavLink>
              </li>
              <li>
                <NavLink to="/OurTeam">Our Team</NavLink>
              </li>
            </ul>
          </div>

          <img src={image} alt="" className="w-[10%] cursor-pointer ms-7  " />
          <a src="/home" className="btn btn-ghost text-3xl">
            Tech-Farm
          </a>
        </div>
        <div className="navbar-center hidden lg:flex border-green-300">
          <ul className="menu menu-horizontal px-5">
            <li
              to="/home"
              className={({ isActive }) =>
                `hover:text-yellow-300 border-bottom ${
                  isActive ? "text-yellow-300" : "text-grey-700"
                }`
              }
            >
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-yellow-300 ${
                    isActive ? "text-yellow-300" : "text-grey-700"
                  }`
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Contacts"
                className={({ isActive }) =>
                  `hover:text-yellow-300 ${
                    isActive ? "text-yellow-300" : "text-grey-700"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `hover:text-yellow-300 ${
                    isActive ? "text-yellow-300" : "text-grey-700"
                  }`
                }
              >
                Project
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/OurTeam"
                className={({ isActive }) =>
                  `hover:text-yellow-300 ${
                    isActive ? "text-yellow-300" : "text-grey-700"
                  }`
                }
              >
                Our Team
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end me-7">
          <a className="btn hover:bg-yellow-300 hover:text-black">Login</a>
        </div>
      </div>
    </>
  );
}

export default Navabr;
