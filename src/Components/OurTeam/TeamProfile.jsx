import React from 'react'


function TeamProfile({name,profile,title}) {
  return (
        // profile card
        <div className="container p-[4rem] mx-auto">
        <div className="max-w-sm mx-auto   bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative  h-auto ">
          <img
            className="w-full  rounded-lg h-72 p-3 object-cover object-center"
            src={profile}
            alt="image"
          />
        </div>
        <div className="p-3 flex md:flex-col justify-center">
          <h2 className="text-2xl  text-center font-semibold text-gray-800">{name} </h2>
           <p className='text-center text-lg'>{title}</p>
          <div className="mt-4">
           
          </div>
        </div>
      </div>
      </div>
   
  )
}

export default TeamProfile
