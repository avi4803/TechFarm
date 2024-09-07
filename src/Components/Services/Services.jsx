import React from 'react'
import Cards from './Cards';
import Camera from './Camera';
import Controls from './Controls';


import { useRef, useEffect, useState } from "react";

import { ref as firebaseRef, onValue, getDatabase } from "firebase/database";
import { useFirebase } from '../FireBase/FirebaseConfig';

function Container() {
  const containerRef = useRef(null);
  const [humidityData, setHumidityData] = useState(null);
  const [tempData, settempData] = useState(null);
  const [moistureData, setmoistureData] = useState(null); // State variable to store data

  const firebase = useFirebase();



  useEffect(() => {
    const database = getDatabase();
    const dataRef = firebaseRef(database, "humidity");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (!!data) {
        setHumidityData(data); // Update the state with the humidity data
        console.log(data);
      } else {
        console.log("Data not found");
      }
    });
  }, []);


  useEffect(() => {
    const database = getDatabase();
    const dataRef = firebaseRef(database, "temperature");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (!!data) {
        settempData(data); // Update the state with the humidity data
        console.log(data);
      } else {
        console.log("Data not found");
      }
    });
  }, []);



  useEffect(() => {
    const database = getDatabase();
    const dataRef = firebaseRef(database, "moisture");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      
        setmoistureData(data); // Update the state with the humidity data
        console.log(data);
      
    });
  }, []);
    return ( <>
     <body className='p-5  md:flex'>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md
        :justify-start md:space-x-10">
            
        </div>

     
     <Cards title="Temprature" color1="bg-yellow-500" data={tempData}/>
     <Cards title="Humidity" color1="bg-blue-200"  data={humidityData}/>
     <Cards title="Moisture" color1="bg-pink-400"   data={moistureData}/>
     <Cards title="Weather" color1="bg-green-500"    />
     
     
     </body>
     <div className="container p-5 md:items-center md:ms-10  ">
       
     <Camera/>
     <Controls/>
     </div>
  
  
    </> );
}

export default Container;