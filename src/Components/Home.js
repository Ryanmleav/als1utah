import React from "react";
import Header from './Header';
import video from "../assets/Riot - 423 (4).mp4"
// import { Link } from 'react-router-dom'



const Home = () => {

  return (
    <div className="Home">
     <Header />
     <div class="intro">
        <h2 class="ready">ALS1UTAH Wants To Know Are You Ready</h2>
        <video className='video'  autoPlay loop>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      
    </div>
   
  )
}

export default Home;