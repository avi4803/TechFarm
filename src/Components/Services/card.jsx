import React from "react";
import Temprature from "../../assets/Temperature.png"

const Card = ({ title, temperature }) => {
  return (

    <div className="max-w-lg  mx-auto rounded overflow-hidden shadow-lg p-4 bg-white    ">
        
    <h1 className="font-bold text-xl mb-2 text-center">Temprature</h1> 
          
      <img className="w-full h-48 object-fit" src={Temprature} alt={title} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Temperature: <span className="font-semibold">{temperature}°C</span>
        </p>
      </div>

      
    </div>
 
  );
};

export default Card;