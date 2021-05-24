import { connect } from "react-redux";
import { logoutAdmin } from "../redux/adminReducer";
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'


const Header = ({ logoutAdmin, user }) => {
  return (
    <div className="header-component">
      <header className="main-header">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="links">
          <Link to='/' ><FontAwesomeIcon className='icon' icon={faHome}/></Link>
          <Link to='/classes'>Classes</Link>
          <Link to="/schedule"><FontAwesomeIcon className='icon' icon={faCalendarWeek}/></Link>
          {/* <Link to="#science">Science & Technology</Link>
          <Link to="#highalt">High Altitude Training</Link>
          <Link to="#aboutus">About Us</Link> */}
          <Link to='/admin'>Admin</Link>
          {/* <Link
        to="/"
        onClick={() => {
          logoutAdmin();
        }}
        className="logout"> Logout
      </Link> */}
        </div>
      </header>
      
      
    </div>
  );
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { logoutAdmin })(Header);
