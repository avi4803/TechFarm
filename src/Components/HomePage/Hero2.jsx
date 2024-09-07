import React from 'react';
import wheat from "../../assets/rover.jpg"
import mustard from "../../assets/mustard.jpeg"
import benefit from "../../assets/chemical.jpg"
import working from "../../assets/working.jpg"

const ResponsiveSection = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row   rounded items-center md:items-start mt-[5rem] p-[3rem] w-full">
      {/* Left Section: Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={wheat}
          alt="Descriptive Alt Text"
          className="w-full h-auto object-cover  rounded"
        />
      </div>

      {/* Right Section: Text */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-2xl md:text-[2.3rem] text-green-500 font-bold mb-2">
         Welcome to our Technical Farming Project
        </h1>
      
        <p className="text-base md:text-lg mb-4 mt-7">
         <span className='text-yellow-300'>Technical Farming</span> represents a revolutionary approach to agriculture, integrating advanced technologies to enhance farming practices and improve crop productivity. By leveraging cutting-edge tools such as <span className='text-yellow-300'>soil moisture sensors , nutrient detectors, and climate monitoring systems,</span>  technical farming provides farmers with real-time data and actionable insights. This approach allows for precise management of soil conditions, optimized water usage, and targeted nutrient application, ultimately leading to increased crop yields and more sustainable farming practices. With the ability to monitor and analyze various soil parameters, technical farming helps in making informed decisions, reducing waste, and ensuring healthier, more resilient crops. This blend of technology and agriculture is paving the way for a smarter, more efficient future in farming.
        </p>
       
       
      </div>
    </div>
    <div className="flex flex-col md:flex-row   rounded items-center md:items-start mt-[5rem] p-[3rem] w-full">
      

      {/* Right Section: Text */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-2xl md:text-[3rem] text-green-500 font-bold mb-2">
        Key Features
        </h1><br/><br/>
      
       <ul className='mx-5'>
        <li className='gap-5'><span className='text-yellow-400 font-bold'>Soil Moisture Monitoring:</span> Real-time tracking of soil moisture levels.</li><br/>
        <li> <span className='text-yellow-400 font-bold'>Nitrogen Level Detection:</span> Accurate measurement of nitrogen content.</li><br/>
        <li><span className='text-yellow-400 font-bold'>Additional Soil Data</span> pH levels, temperature, and more.</li><br/>
       </ul>
       
       
      </div>
      {/* Left Section: Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={mustard}
          alt="Descriptive Alt Text"
          className="w-full h-auto object-fit  rounded"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row   rounded items-center md:items-start mt-[5rem] p-[3rem] w-full">
      {/* Left Section: Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={working}
          alt="Descriptive Alt Text"
          className="w-full h-auto object-cover  rounded"
        />
      </div>

      {/* Right Section: Text */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-2xl md:text-[2.3rem] text-green-500 font-bold mb-2">
         How it Works?
        </h1>
      
        <p className="text-base md:text-lg mb-4 mt-7">
         <span className='text-yellow-300'>Technical Farming</span> represents a revolutionary approach to agriculture, integrating advanced technologies to enhance farming practices and improve crop productivity. By leveraging cutting-edge tools such as <span className='text-yellow-300'>soil moisture sensors , nutrient detectors, and climate monitoring systems,</span>  technical farming provides farmers with real-time data and actionable insights. This approach allows for precise management of soil conditions, optimized water usage, and targeted nutrient application, ultimately leading to increased crop yields and more sustainable farming practices. With the ability to monitor and analyze various soil parameters, technical farming helps in making informed decisions, reducing waste, and ensuring healthier, more resilient crops. This blend of technology and agriculture is paving the way for a smarter, more efficient future in farming.
        </p>
       
      
      </div>
    </div>

    <div className="flex flex-col md:flex-row   rounded items-center md:items-start mt-[5rem] p-[3rem] w-full">
      

      {/* Right Section: Text */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-2xl md:text-[2.3rem] text-green-500 font-bold mb-2">
        Benefits
        </h1><br/>
      
       <ul>
        <li><span className='text-yellow-400 font-bold'>Optimized Water Usage: </span>The system’s real-time soil moisture monitoring ensures that water is applied precisely when and where it’s needed, reducing water waste and conserving this vital resource.</li><br/>
        <li><span className='text-yellow-400 font-bold'>Targeted Fertilization:  </span>By measuring soil nutrient levels, the project helps in applying fertilizers more effectively, avoiding overuse and minimizing environmental impact.</li><br/>
        <li><span className='text-yellow-400 font-bold'>Improved Crop Health:  </span>Accurate monitoring of soil conditions allows for timely interventions, such as adjusting watering schedules or adding nutrients, leading to healthier plants and higher yields.</li><br/>
        <li><span className='text-yellow-400 font-bold'>Predictive Analytics: </span>Advanced analytics help predict future soil conditions and trends, allowing farmers to plan ahead and make proactive adjustments.</li><br/>
        <li><span className='text-yellow-400 font-bold'>Reduced Chemical Use: </span>By precisely measuring soil needs, the project minimizes the use of chemical fertilizers and pesticides, reducing their environmental footprint and promoting sustainable farming practices.</li><br/>
       
       </ul>
       
   
      </div>
      {/* Left Section: Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={benefit}
          alt="Descriptive Alt Text"
          className="w-full h-auto object-cover  mt-14 rounded"
        />
      </div>
    </div>


    </>
  );
};

export default ResponsiveSection;