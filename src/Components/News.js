import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import "../Form.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    console.log(this.props);
    axios
      .post("/api/post", this.state)
      .then(() => this.props.history.push("/news"))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="form content-box">
          <div className="form-main">
            <div className="form-input-box">
              <p>Title:</p>
              <input
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="form-input-box"></div>
            <div className="form-text-box">
              <p>Content:</p>
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

export default News;
