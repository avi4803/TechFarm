import React, { useRef, useEffect, useState } from "react";

import { ref as firebaseRef, onValue, getDatabase } from "firebase/database";


function Container({color1,title,data}) {
 
  return(
    <>
      <div
        className={`container md:w-[20%]   mx-auto p-5 rounded-xl mt-5 ${color1}`}
      >
        <div className="row p-3">
          <div className="col-md-4  flex-col ">
            <h1 className="font-bold text-center text-white text-2xl">
              {title}
            </h1>

            <div className="image mt-5 mb-5 p-3 rounded-xl flex justify-center  w-full ">
              {/* <img className='rounded-xl h-36 items-center' src={greenWheat}/> */}
            </div>
            <div className="data">
              <p className="text-center text-white text-3xl font-bold">
                {data}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
