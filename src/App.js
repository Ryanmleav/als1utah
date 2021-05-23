import "./App.css";
import logo from "./assets/logo.jpg";
import video from "./assets/Riot - 423 (4).mp4";
import { Link } from 'react-router-dom'
// import Classes from "./Components /Classes";
// import Home from "./Components /Home"
import routes from './routes'

function App() {
  return (
    <div>
      <header class="main-header">
        <img class="logo" src={logo} alt="logo"></img>
        <div class="links">
          <a href="#course">Classes</a>
          <a href="#cal-wrap">Sign Up</a>
          <a href="#science">Science & Technology </a>
          <a href="#highalt">High Altitude Training</a>
          <a href="#aboutus">About Us</a>
          <Link className='registration-link' to={'/admin'}>Admin</Link>
        </div>
      </header>
      <div class="intro">
        <h2 class="ready">ALS1UTAH Wants To Know Are You Ready</h2>
        <video width="320" height="240" autoplay>
          <source src={video} type="video/mp4"></source>
        </video>
        <video width="320" height="240" autoplay>
          <source src="./assets/Riot - 423 (4).mp4" type="video/mp4"></source>
        </video>
      </div>
      <div id="course" class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
                src="https://blogmedia.wideners.com/blog/wp-content/uploads/DSC3836-Web.jpg"
                alt="logo"
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
              <img src="https://i.pinimg.com/originals/78/e9/8b/78e98b5cc66566cd104ef38eeda8383a.png"></img>
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
              <img src="https://tmrfirearmstraining.com/wp-content/uploads/2019/03/Logo-Fade-Arches-gold-1-300x129.png"></img>
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
              <img src="https://tmrfirearmstraining.com/wp-content/uploads/2019/03/Logo-Fade-Arches-gold-1-300x129.png"></img>
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
              <img src="https://tmrfirearmstraining.com/wp-content/uploads/2019/03/Logo-Fade-Arches-gold-1-300x129.png"></img>
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbk9yxZrEj9qVZVdH7yhxDiNDXlxSvRU8MCg&usqp=CAU"></img>
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
        <div id='science' class='techno'>
    <h1>Technologies</h1>  
    <h2>Our Partners</h2>
    <img src='https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/nasa%20image-0001.jpg/:/rs=h:100,cg:true,m'></img>
    <img src='https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/uvu.jpg/:/rs=h:100,cg:true,m'></img>
    <img src='https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/Jeger%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:380,h:200,cg:true'></img>
     <h3>ALS1UTAH'S Current Research Projects</h3>
     <h4>We Are Currently Under Negotiations With NASA & UVU On Emerging Technologies</h4>   
     <p>Projects will be further disclosed at closure of negotiations.</p>
  </div>
  <div class='highalt'>
    <h1>ALS1UTAH High Altitude Training</h1>
    <div id='highalt'class="container">
    <div class="card">
      <div class="face face1">
          <div class="content">
              <img src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/7675fb50-018d-4247-94a1-b72b60f4c3dc.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:776,h:388,cg:true"></img>
              <h3>Provo Airport</h3>
          </div>
      </div>
      <div class="face face2">
          <div class="content">

              <p>Provo, Ut - Commercial Elevation<br></br>
              4,606 FT
              </p>       
          </div>
      </div>
  </div>
 
  <div class="card">
    <div class="face face1">
        <div class="content">
            <img src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/9aacf75e-47d5-4805-85ac-9380d11f474d.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:88.89%25/rs=w:776,h:388,cg:true"></img>
            <h3>Hobble Creek</h3>
        </div>
    </div>
    <div class="face face2">
        <div class="content">
            <p>Springvillle, Ut - Elevation<br></br>
            4,600 - 7,500 FT
            </p>       
        </div>
    </div>

</div>
<div class="card">
  <div class="face face1">
      <div class="content">
          <img src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/9e0e3d97-710a-455d-9ecd-c483562c210f.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:194,cg:true"></img>
          <h3>Book Cliffs</h3>
      </div>
  </div>
  <div class="face face2">
      <div class="content">
          <p> Outside Price, Ut - Elevation<br></br>
         8,600 FT <br></br>
         High Mountain Desert, Semi-Arid Climate
          </p>       
      </div>
  </div>
</div>
<div class="card">
  <div class="face face1">
      <div class="content">
          <img src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/badb8a0c-eb8a-4f4c-80e5-2979b7ddeca1.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:66.67%25/rs=w:388,h:194,cg:true"></img>
          <h3>Beaver</h3>
      </div>
  </div>
  <div class="face face2">
      <div class="content">
          <p> Beaver, Ut - Elevation<br></br>
         6,000 - 8,000 FT <br></br>
        Borders Fishlake National Forest       
        </p>       
      </div>
  </div>
</div>
<div class="card">
  <div class="face face1">
      <div class="content">
          <img src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/34a27665-1fe6-433a-bbf7-241db99ada2c.png/:/cr=t:0%25,l:0%25,w:100%25,h:59.02%25/rs=w:388,h:194,cg:true"></img>
          <h3>Price Airport</h3>
      </div>
  </div>
  <div class="face face2">
      <div class="content">
          <p> Price, Ut - Elevation<br></br>
         5,976 FT <br></br>    
        </p>       
      </div>
  </div>
</div>
<div class="card">
  <div class="face face1">
      <div class="content">
          <img src="https://img1.wsimg.com/isteam/ip/3917c349-05e1-4218-92b3-4e2fbdcf366c/99ec96d4-e9f4-44cd-beaa-ba97fef83c6a.jpg/:/cr=t:18.75%25,l:3.12%25,w:93.75%25,h:62.5%25/rs=w:776,h:388,cg:true,m"></img>
          <h3>American Fork Canyon</h3>
      </div>
  </div>
  <div class="face face2">
      <div class="content">
          <p> American Fork, Ut - Elevation<br></br>
         Up TO 11,400 FT <br></br>  
        </p>       
      </div>
  </div>
</div>


</div>
</div>
    </div>
  );
}

export default App;
