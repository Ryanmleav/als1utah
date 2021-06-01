import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

class GunsAmmo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    console.log(this.props);
    axios
      .post("/news/post", this.state)
      .then(() => this.props.history.push("/news"))
      .catch((err) => console.log(err));
  }
  render() {
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
            FFL special orders<br></br> Check below for some of our specials
          </p>
        </div>
        <div className="form content-box">
          <div className="form-main">
            <div className="form-input-box"></div>
            <div className="form-text-box">
              <p className="newsfeed">Content:</p>
              <textarea
                value={this.state.content}
                onChange={(e) => this.setState({ content: e.target.value })}
              />
            </div>
          </div>
          <button onClick={this.submit} className="dark-button">
            Post
          </button>
        </div>
      </div>
    );
  }
}
export default GunsAmmo;
