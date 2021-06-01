import { connect } from "react-redux";
import { logoutAdmin } from "../redux/adminReducer";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

const Header = ({ logoutAdmin, user }) => {
  const [toggle, setToggle] = useState(false);
  function cartDropdown() {
    setToggle(!toggle);
  }

  return (
    <div className="header-component">
      <header className="main-header">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="links">
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faHome} />
          </Link>
          <Link to="/classes">Classes</Link>
          <Link to="/schedule">
            <FontAwesomeIcon className="icon" icon={faCalendarWeek} />
          </Link>
          <Link to='/gunsammo'>Guns&Ammo</Link>
          {!user.isLoggedIn ? (
            <Link to="/admin">Admin</Link>
          ) : (
            <Link
              onClick={() => {
                logoutAdmin();
                setToggle(!toggle);
              }}
              className="dashboard-button"
              to={`/`}
            >
              Sign Out
            </Link>
          )}
          <div className="nav-cart-dropdown">
        <button onClick={cartDropdown} className="cart-dropdown">
          ☰
        </button>
        {toggle ? (
          <ul className="dropdown-content">
            <li>
              <Link
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="dropdown-link"
                to={`/highalt`}
              >
                High Altitude Training
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="dropdown-link"
                to={`/news`}
              >
                Global News
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="dropdown-link"
                to={`/science`}
              >
                Science&Tech
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="dropdown-link"
                to={`/aboutus`}
              >
                About Us
              </Link>
            </li>
          
          </ul>
        ) : null}
      </div>
          {/* <Link to="/science">Science&Tech</Link> */}
          {/* <Link to="/highalt">High Altitude Training</Link> */}
          {/* <Link to='/news'>Global News</Link> */}
          {/* <Link to="/aboutus">About Us</Link> */}

          
        </div>
      </header>
    </div>
  );
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { logoutAdmin })(Header);
