import React from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./BottomBanner.css";
import ContentBlock from "./ContentBlock";
import ButtonFlex from "./ButtonFlex";
import oxfordLogo from "../../img/logo/oxLogo.svg";
import univLogo from "../../img/logo/univ_badge.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const BottomBanner = () => {
  return (
      <>
      <ContentBlock title="About WCR">
        <p>
          The WCR has a double meaning: it refers to the graduate body of students at University College and also 
          to the physical space in the College where graduate students can relax and socialise. It is an engaging 
          and diverse community of early-researchers consisting around 150 members across all year groups and subjects. 
          Whether you are here for a one/two-year Masters programme or a DPhil programme we do hope you choose to get 
          involved with college life!
        </p>
        <ButtonFlex />
      </ContentBlock>
      <div className="u-block u-textCenter u-darkgrey BottomBanner"> 
        <div className="BottomBanner-unionlogo">
            <a href="https://www.ox.ac.uk"><img src={oxfordLogo} alt="University of Oxford"/></a>
            <a href="https://www.univ.ox.ac.uk"><img src={univLogo} alt="University College, Oxford"/></a>
        </div>
        <div className="BottomBanner-sociallogo">
            <a href="mailto:wcr.externalaffairs@univ.ox.ac.uk"><i className="fa-regular fa-envelope fa-2x" title="email"></i></a>
            <a href="https://www.facebook.com/groups/433253188107301"><i className="fa-brands fa-facebook fa-2x" title="facebook"></i></a>
            <a href="https://www.instagram.com/univwcr/"><i className="fa-brands fa-instagram fa-2x" title="instagram"></i></a>
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
      </>
  );
};

export default BottomBanner