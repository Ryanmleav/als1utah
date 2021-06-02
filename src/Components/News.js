import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import {useSelector} from 'react-redux'
import "../Form.css";

const News = (props) => {
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
          <div className='newsposts'>Daily news</div>

        )}
        
      </div>
    );
  }


export default News;
