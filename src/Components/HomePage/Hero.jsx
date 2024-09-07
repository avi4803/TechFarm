import React from 'react'
import heroImage from "../../assets/main.jpeg"
import demo from "../../assets/demo.mp4"
function Hero() {
    return ( 
        <>

<div class=" relative w-full  h-[0vh] md:h-[40vh] lg:h-[70vh] mt-10">

  <img src={heroImage} alt="Showcase Image" class="relative w-full h-full object-cover blur-sm z-0 md:hidden"/> 
  <video src={demo} autoPlay alt="Showcase Image" class="relative w-full h-full object-cover blur-sm z-0" loop playsInline ></video>
   <div className="text absolute inset-0 flex flex-col items-center justify-center">
   <p className=" text-[5rem] md:text-[8rem] text-yellow-400 lg:text-[12rem] font-bold">Agriculture</p>
   <p className='hidden lg:block lg:text-[1.6rem] lg:font-bold text-white tracking-widest lg:text-white-700'>Take Your Farming to next level</p>
   </div>
  
</div>

<div className=" hidden lg:block quote flex justify-center font-bold mt-[5rem] text-[2.5rem]" >
 <h1 className='tracking-wider text-center' >"Harvesting the fututre, <span className='bg-green-600/80 rounded-md text-white p-2'>Nurturing</span> the land"</h1>
</div>
     
        </>
     );
}

export default Hero;