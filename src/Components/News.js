import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useSelector } from "react-redux";
import "../Form.css";

const News = (props) => {
  const { isLoggedIn } = useSelector((stateRedux) => stateRedux.user);

  const [news, setNews] = useState();
  const [content, setContent] = useState("");

  const submit = () => {
    console.log(props);
    axios
      .post("/news/post", content)
      .then(() => props.history.push("/news"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("/news/all")
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((err) => console.log(err, "no news available"));
  }, []);

  console.log(isLoggedIn);

  // const mappedNews = news.map((news) => {
  //   return (
  //     <div className='review-boss' >
  //       <h3>{news.content}</h3>
  //       </div>
  //       );
  //     });
  return (
    <div>
      <Header />

      <div id="course" class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
              className='chief'
                src="https://communitywalk.s3.amazonaws.com/assets/photos/30/8/352324_s.jpg"
                alt="chief tecumseh"
              ></img>
              <h3>The Fear Of Death</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                So live your life that the fear of death can never enter your
                heart. Trouble no one about their religion; respect others in
                their view, and demand that they respect yours. Love your life,
                perfect your life, beautify all things in your life. Seek to
                make your life long and its purpose in the service of your
                people. Prepare a noble death song for the day when you go over
                the great divide. Always give a word or a sign of salute when
                meeting or passing a friend, even a stranger, when in a lonely
                place. Show respect to all people and bow to none. When you
                arise in the morning, give thanks for the food and for the joy
                of living. If you see no reason for giving thanks, the fault
                lies only in yourself. Abuse no one and nothing, for abuse turns
                the wise ones to fools and robs the spirit of its vision. When
                it comes your time to die, be not like those whose hearts are
                filled with fear of death, so that when their time comes they
                weep and pray for a little more time to live their lives over
                again in a different way. Sing your death song and die like a
                hero going home.” - Chief Tecumseh, 1768 – 1813
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
                className="washington"
                src="https://www.purelix.us/wp-content/uploads/2021/01/B389FEC4-3ECF-4E0E-AE88-5CF160895BBB-300x300-1.jpg"
                alt="george"
              ></img>
              <h3>Equality</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                {" "}
                “As Mankind becomes more liberal, they will be more apt to allow
                that all those who conduct themselves as worthy members of the
                community are equally entitled to the protections of civil
                government. I hope ever to see America among the foremost
                nations of justice and liberality.” ― George Washington{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
                className="buddah"
                src="https://lh3.googleusercontent.com/TCsPwyj9gCxG_mYrxOwWD32cPP16WEkt0uomdggXoCpvLNGlB3bptZ5kkM556ypzKachUZU=s85"
                alt="carry"
              ></img>
              <h3>Watch Your Thoughts</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                {" "}
                The thought manifests as the word. The word manifests as the
                deed. The deed develops into a habit, and a habit hardens into
                character. So watch the thought and it’s ways with care, and let
                it spring from love born our of concern for all beings.” –
                Buddha{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
                className="genghis"
                src="https://www.vastmongolia.com/wp-content/uploads/2016/06/chinggis-1.jpg"
                alt="khan"
              ></img>
              <h3>He Who Gets Drunk</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                “Who can’t stop drinking may get drunken three times a month. If
                he does it more often, he is guilty. To get drunken twice a
                month is better; once, still more praiseworthy. But not to drink
                at all - what could be better than this? But where could such a
                being be found? But if one would find it, it would be worthy of
                all honour.” ― Genghis Khan
              </p>
            </div>
          </div>
        </div>
      </div>

      {isLoggedIn ? (
        <div className="form content-box">
          <div className="form-main">
            <div className="form-input-box"></div>
            <div className="form-text-box">
              <p className="newsfeed">Content:</p>
              <input
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
        <div className="newsposts">News posts</div>
      )}
    </div>
  );
};

export default News;
