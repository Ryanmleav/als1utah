import React from "react";
import Header from './Header';

const Classes = () => {

  return (
    <div >
      <div className="Header-Container" >
        <Header />
      </div>
      <div className='background'>
      <h1 class="courses">ALS1UTAH Classes</h1>
      <div id="course" class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
                src="https://blogmedia.wideners.com/blog/wp-content/uploads/DSC3836-Web.jpg"
                alt="carry"
              ></img>
              <h3>Concealed Carry</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>info on class</p>
              <a>Book Now</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
              className='trek'
                src="https://i.pinimg.com/originals/78/e9/8b/78e98b5cc66566cd104ef38eeda8383a.png"
                alt="med"
              ></img>
              <h3>ITREK</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>info on class</p>
              <a href="#">Book Now</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
              className='pistoltrain'
                src="https://tmrfirearmstraining.com/wp-content/uploads/2019/03/Logo-Fade-Arches-gold-1-300x129.png"
                alt="begin"
              ></img>
              <h3>Beginner Defensive Pistol</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>info on class</p>
              <a href="#">Book Now</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
              className='pistoltrain'
                src="https://tmrfirearmstraining.com/wp-content/uploads/2019/03/Logo-Fade-Arches-gold-1-300x129.png"
                alt="two"
              ></img>
              <h3>Level II Defensive Pistol</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>info on class</p>
              <a href="#">Book Now</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
              className='pistoltrain'
                src="https://tmrfirearmstraining.com/wp-content/uploads/2019/03/Logo-Fade-Arches-gold-1-300x129.png"
                alt="advanced"
              ></img>
              <h3>Advanced Defensive Pistol</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>info on class</p>
              <a href="#">Book Now</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
              className='rifletrain'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbk9yxZrEj9qVZVdH7yhxDiNDXlxSvRU8MCg&usqp=CAU"
                alt="precision"
              ></img>
              <h3>Precision Long Rifle Course</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>info on class</p>
              <a href="#">Book Now</a>
            </div>
          </div>
          </div>
        </div>
      </div>

     

    </div>
  )
}

export default Classes;