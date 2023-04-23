import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
// import {ReactComponent as WhiteLogo} from "../../img/Samuel_Lam_Logo_for_black.svg";
// import NavBarDropdown from "./NavBarDropdown.js";

import "../../utilities.css";
import "./NavBar.css";

import univLogo from "../../img/univ_192x192.png";

function NavBar ({ userId, handleLogin, handleLogout }) {

  // // login
  // const login = useGoogleLogin({
  //   onSuccess: () => handleLogin,
  //   onError: err => console.log(err),
  //   flow: 'auth-code',
  // });

  // hamburger menu
  const [click, setClick] = useState(false);
  // const [dropdownCV, setDropdownCV] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const collapseAfterClick = () => {
    closeMobileMenu();
    scrollToTop();
  }

  // CV page
  // const onMouseEnterCV = () => {
  //   if (window.innerwidth < 1240) {setDropdownCV(false)} else {setDropdownCV(true)};
  // };

  // const onMouseLeaveCV = () => {setDropdownCV(false)};

  // const cvSubpages = [
  //   {title: "Writings", localpath: true, path: "/publication"},
  //   {title: "UG Programme", localpath: true, path: ""},
  // ]

  return (
    <>
      <nav className="navbar-container">
          <div >
            <Link to="/" className="navbar-title u-inlineBlock" onClick={scrollToTop}>
              <div className="navbar-logo-container"> <img src={univLogo} className="navbar-logo" /> </div>
              <span>University College, Oxford <br/> Weir Common Room</span> 
            </Link>
          </div>

          <div className="navbar-menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item" onClick={collapseAfterClick}> 
              <Link to="/research" className="navbar-links">News</Link>
            </li>

            <li className="navbar-item" onClick={collapseAfterClick}> 
              <Link to="/teaching" className="navbar-links">What's on</Link>
            </li>

            <li className="navbar-item"> 
              <Link to="/christian" className="navbar-links" onClick={collapseAfterClick}>Governance</Link></li>

            {/* <li className="navbar-item" onMouseEnter={onMouseEnterCV} onMouseLeave={onMouseLeaveCV}> 
              <Link to="/cv" className="navbar-links">
                Curriculum Vitae <i className="fas fa-caret-down"/> </Link>
                {dropdownCV && <NavBarDropdown menuItems={cvSubpages} />}
            </li> */}

            <li className="navbar-item">
              {userId ? (
                <button onClick={() => {googleLogout(); handleLogout();}}> Logout </button>
              ) : (
                <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
                // <button onClick={() => {login();}}> Login using Google </button>
              )}
            </li>
          </ul>
      </nav>
    </>
  );
}

export default NavBar;