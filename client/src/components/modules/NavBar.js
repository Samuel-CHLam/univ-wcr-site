import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
import NavBarDropdown from "./NavBarDropdown.js";

import "../../utilities.css";
import "./NavBar.css";

import univLogo from "../../img/logo/univ_192x192.png";
import constitutionPDF from "../../data/WCR_constitution_2018.pdf";

function NavBar ({ 
  userId, 
  // handleLogin, 
  // handleLogout 
}) {

  const displayminwidth = 960;

  // // login
  // const login = useGoogleLogin({
  //   onSuccess: () => handleLogin,
  //   onError: err => console.log(err),
  //   flow: 'auth-code',
  // });

  // hamburger menu
  const [click, setClick] = useState(false);
  const [dropdownWhatsOn, setDropdownWhatsOn] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownWelfare, setDropdownWelfare] = useState(false);
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

  // what's on pages

  const onMouseEnterWhatsOn = () => {
    if (window.innerwidth < displayminwidth) {setDropdownWhatsOn(false)} else {setDropdownWhatsOn(true)};
  };

  const onMouseLeaveWhatsOn = () => {setDropdownWhatsOn(false)};

  const whatsOnSubpages = [
    {title: "Activities A to Z", localpath: true, path: "/activitiesAtoZ"},
  ]

  // about and governance pages

  const onMouseEnterAbout = () => {
    if (window.innerwidth < displayminwidth) {setDropdownAbout(false)} else {setDropdownAbout(true)};
  };

  const onMouseLeaveAbout = () => {setDropdownAbout(false)};

  const aboutSubpages = [
    {title: "Governance", localpath: true, path: "/governance"},
    {title: "Constitution (PDF)", localpath: true, path: constitutionPDF},
    {title: "Meeting records", localpath: true, path: ""},
  ]

  // welfare pages

  const onMouseEnterWelfare = () => {
    if (window.innerwidth < displayminwidth) {setDropdownWelfare(false)} else {setDropdownWelfare(true)};
  };

  const onMouseLeaveWelfare = () => {setDropdownWelfare(false)};

  const welfareSubpages = [
    {title: "Welfare FAQ", localpath: true, path: "/welfare/welfarefaq"},
    {title: "Who's who", localpath: true, path: "/welfare/whoswho"},
  ]

  // external affairs pages

  const onMouseEnterEA = () => {
    if (window.innerwidth < displayminwidth) {setDropdownEA(false)} else {setDropdownEA(true)};
  };

  const onMouseLeaveEA = () => {setDropdownEA(false)};

  const eaSubpages = [
    {title: "Voting records", localpath: true, path: ""},
    {title: "Union policy directory", localpath: true, path: ""},
  ]

  return (
    <>
      <nav className="navbar-container">
          <div >
            <Link to="/" className="navbar-title u-inlineBlock" onClick={scrollToTop}>
              <div className="navbar-logo-container"> <img src={univLogo} className="navbar-logo" /> </div>
              <span className="navbar-title-full">University College, Oxford <br/> Weir Common Room</span> 
              <span className="navbar-title-short">Univ WCR</span> 
            </Link>
          </div>

          <div className="navbar-menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>

            <li className="navbar-item" onMouseEnter={onMouseEnterWhatsOn} onMouseLeave={onMouseLeaveWhatsOn}> 
              <Link to="/whatson" className="navbar-links">
                What's on <i className="fas fa-caret-down"/> </Link>
                {dropdownWhatsOn && <NavBarDropdown menuItems={whatsOnSubpages} />}
            </li>

            {/* <li className="navbar-item" onClick={collapseAfterClick}> 
              <Link to="/news" className="navbar-links">News</Link>
            </li> */}

            <li className="navbar-item" onMouseEnter={onMouseEnterAbout} onMouseLeave={onMouseLeaveAbout}> 
              <Link to="/about" className="navbar-links">
                About <i className="fas fa-caret-down"/> </Link>
                {dropdownAbout && <NavBarDropdown menuItems={aboutSubpages} />}
            </li>

            <li className="navbar-item" onMouseEnter={onMouseEnterWelfare} onMouseLeave={onMouseLeaveWelfare}> 
              <Link to="/welfare" className="navbar-links">
                Welfare <i className="fas fa-caret-down"/> </Link>
                {dropdownWelfare && <NavBarDropdown menuItems={welfareSubpages} />}
            </li>

            <li className="navbar-item" onMouseEnter={onMouseEnterEA} onMouseLeave={onMouseLeaveEA}> 
              <Link to="/externalaffairs" className="navbar-links">
                External Affairs <i className="fas fa-caret-down"/> </Link>
                {dropdownEA && <NavBarDropdown menuItems={eaSubpages} />}
            </li>

            <li className="navbar-item"> 
              <Link to="/contact" className="navbar-links" onClick={collapseAfterClick}>Contact Us</Link></li>

            {userId ? (
              <li className="navbar-item">
                <Link to="/profile" className="navbar-links" onClick = {collapseAfterClick}>Your profile</Link></li>
            ) : (<></>)}

            {/* <li className="navbar-item">
              {userId ? (
                <button onClick={() => {googleLogout(); handleLogout();}}> Logout </button>
              ) : (
                <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
                // <button onClick={() => {login();}}> Login using Google </button>
              )}
            </li> */}
          </ul>
      </nav>
    </>
  );
}

export default NavBar;