import React, { Component, useState } from "react";
import axios from "axios";
import {useSelector} from 'react-redux'
import Header from "./Header";

const GunsAmmo = (props) => {
  const {isLoggedIn} = useSelector((stateRedux) => stateRedux.user)
  const [content, setContent] = useState('')

  const submit = () => {
    console.log(props);
    axios
      .post("/news/post", this.state)
      .then(() => props.history.push("/news"))
      .catch((err) => console.log(err));
  }
  
  console.log(isLoggedIn)
    return (
      <div>
        <Header />
        <div className="gunsmain">
          <img
            className="gunsammo"
            src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/ammo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true"
            alt="ammoflag"
          ></img>
          <p className="gunstext">
            FFL special orders<br></br> Check below for our specials
          </p>
        </div>
        {isLoggedIn ? ( 
        <div className="form content-box">
          <div className="form-main">
            <div className="form-input-box"></div>
            <div className="form-text-box">
              <p className="newsfeed">Content:</p>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <button onClick={submit} className="dark-button">
            Post
          </button>
        </div>

        ) : (
          <div className='dealslist'>Deals List</div>

        )}
        
      </div>
    );
  }

export default GunsAmmo;
