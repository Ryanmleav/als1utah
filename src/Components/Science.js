import React from "react";
import Header from "./Header";
import "../App.css";

const Science = () => {
  return (
    <div>
      <div className="Header-Container">
        <Header />
      </div>
      <div class="techno">
        <h1>Technologies</h1>
        <h2>Our Partners</h2>
        <img
          src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/nasa%20image-0001.jpg/:/rs=h:100,cg:true,m"
          alt="nasa"
        ></img>
        <img
          src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/uvu.jpg/:/rs=h:100,cg:true,m"
          alt="uvu"
        ></img>
        <img
          src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/Jeger%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:380,h:200,cg:true"
          alt="adsite"
        ></img>
        <h3>ALS1UTAH'S Current Research Projects</h3>
        <h4>
          We Are Currently Under Negotiations With NASA & UVU On Emerging
          Technologies
        </h4>
        <p>Projects will be further disclosed at closure of negotiations.</p>
      </div>
    </div>
  );
};

export default Science;
