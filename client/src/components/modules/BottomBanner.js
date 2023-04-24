import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./BottomBanner.css";
import oxfordLogo from "../../img/logo/oxLogo.svg";
import univLogo from "../../img/logo/univ_badge.png";
import mailIcon from "../../img/icon/envelop.svg";
import facebookIcon from "../../img/icon/facebook.svg";
import instaIcon from "../../img/icon/instagram.svg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const BottomBanner = () => {
  return (
      <div className="u-block u-textCenter u-darkgrey BottomBanner"> 
        <div className="BottomBanner-unionlogo">
            <a href="https://www.ox.ac.uk"><img src={oxfordLogo} alt="University of Oxford"/></a>
            <a href="https://www.univ.ox.ac.uk"><img src={univLogo} alt="University College, Oxford"/></a>
        </div>
        <div className="BottomBanner-sociallogo">
            <img src={mailIcon} alt="mailing"/>
            <a href="https://www.facebook.com/groups/433253188107301"><img src={facebookIcon} alt="facebook"/></a>
            <a href="https://www.instagram.com/univwcr/"><img src={instaIcon} alt="instagram"/></a>
        </div>
        <div className="BottomBanner-description"> 
            <p> © 2023 Weir Common Room, University College, Oxford </p>
            <p> The Weir Common Room is the Middle Common Room representing the postgraduate members of University College, Oxford. </p>
            <br></br>
            <p> <Link to="/privacyaccessibility" className="author" onClick={scrollToTop}>Privacy and Accessibility</Link></p>
            <p> Website by <a href="https://samuel-chlam.github.io/newsite/#/" className="author">Samuel 
            Lam</a>. Vector icons by <a className="author" href="https://icomoon.io/app">IcoMoon</a>. </p>
        </div>
      </div>
  );
};

export default BottomBanner