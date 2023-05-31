import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import NavBarDropdown from "./NavBarDropdown.js";

import "../../utilities.css";
import "./NavBar.css";

import univLogo from "../../img/logo/univ_192x192.png";

function NavBar ({ userId, handleLogin, handleLogout }) {

  // // login
  // const login = useGoogleLogin({
  //   onSuccess: () => handleLogin,
  //   onError: err => console.log(err),
  //   flow: 'auth-code',
  // });

  // hamburger menu
  const [click, setClick] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownEA, setDropdownEA] = useState(false); // for external affairs page

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

  // about and governance pages
  const onMouseEnterAbout = () => {
    if (window.innerwidth < 1200) {setDropdownAbout(false)} else {setDropdownAbout(true)};
  };

  const onMouseLeaveAbout = () => {setDropdownAbout(false)};

  const aboutSubpages = [
    {title: "Governance", localpath: true, path: "/governance"},
    {title: "Constitution (PDF)", localpath: true, path: ""},
    {title: "Meeting Records", localpath: true, path: ""},
  ]

  // external affairs pages


  const onMouseEnterEA = () => {
    if (window.innerwidth < 1240) {setDropdownEA(false)} else {setDropdownEA(true)};
  };

  const onMouseLeaveEA = () => {setDropdownEA(false)};

  const eaSubpages = [
    {title: "Policy directory", localpath: true, path: ""},
  ]

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
              <Link to="/events" className="navbar-links">Events</Link>
            </li>

            <li className="navbar-item" onClick={collapseAfterClick}> 
              <Link to="/news" className="navbar-links">News</Link>
            </li>

            <li className="navbar-item" onMouseEnter={onMouseEnterAbout} onMouseLeave={onMouseLeaveAbout}> 
              <Link to="/about" className="navbar-links">
                About <i className="fas fa-caret-down"/> </Link>
                {dropdownAbout && <NavBarDropdown menuItems={aboutSubpages} />}
            </li>

            <li className="navbar-item"> 
              <Link to="/welfare" className="navbar-links" onClick={collapseAfterClick}>Welfare</Link></li>

            <li className="navbar-item" onMouseEnter={onMouseEnterEA} onMouseLeave={onMouseLeaveEA}> 
              <Link to="/about" className="navbar-links">
                External Affairs <i className="fas fa-caret-down"/> </Link>
                {dropdownEA && <NavBarDropdown menuItems={eaSubpages} />}
            </li>

            <li className="navbar-item"> 
              <Link to="/welfare" className="navbar-links" onClick={collapseAfterClick}>Contact Us</Link></li>

            {userId ? (
              <li className="navbar-item">
                <Link to="/profile" className="navbar-links" onClick = {collapseAfterClick}>Your profile</Link></li>
            ) : (<></>)}

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