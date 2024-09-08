import React from 'react'
import ProfileCard from './TeamProfile'
import me from "../../assets/Profile.jpeg"
import Rishi from "../../assets/Rishi.jpg"
import Avinash from "../../assets/Avinash.jpg"
function About() {
    return (
        <>
       <div className="main flex justify-center">
        <h1 className='font-bold text-[4rem] text-yellow-600 '>Team Members</h1>
       </div>

       <div className="profile md:flex ">

       <ProfileCard name="Avinash Nisad(Lead)" profile={Avinash} title="IOT and Web-Developer" />
       <ProfileCard name="Nilkamal" profile={me} title="Web-Developer"/>
       <ProfileCard name="Rishi Raj" profile={Rishi} title="App-Developer"/>
       </div>
       <div className="profile md:flex ">

       <ProfileCard name="Aditya Verma"/>
       <ProfileCard name="Sharique Rahmani"/>
       <ProfileCard name="Aarju"/>
     
       </div>
      
       
      




   
       </>
     );
}

export default About;