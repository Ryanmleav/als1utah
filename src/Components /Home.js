import React from "react";
import { Link } from 'react-router-dom'



const Home = () => {

  return (
    <div className="Home">
    <Link className='dashboard-button' to='/classes'>classes</Link>
      
    </div>
   
  )
}

export default Home;