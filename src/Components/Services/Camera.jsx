import React from 'react'
const esp32IP = "192.168.134.1";


function Camera() {
  return (
   <>
   <div className="heading">
   <h1 className=' font-bold text-white text-3xl mb-5'>Manage Your Fields</h1>
   
   </div>
   
<div className="flex flex-row flex-rows-2 gap-16 flex-wrap">
   <div className="w-full md:w-[45%] flex flex-col lg:justify-center h-auto  bg-gray-400 lg:ml-0 rounded-lg overflow-hidden items-center ">
 
   {/* <video className='object-fit' src={field} loop controls muted  playsInline autoPlay></video> */}
   <iframe  className='object-fit' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7322.597505519839!2d85.40703079999999!3d23.413572800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725690199399!5m2!1sen!2sin" width="900" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

   </div>
   <div className="bg-white w-full md:w-[45%] flex flex-col lg:justify-center h-auto  bg-gray-400 lg:ml-0 rounded-lg overflow-hidden items-center ">
   <img className="size-26 object-fit"
        src={`http://${esp32IP}/stream`}
        alt="ESP32 video stream"
        style={{ width: '100%', height: 'auto' }}
      ></img>
  
   </div>
   </div>
   </>
  )
}

export default Camera;
