import React, { Component } from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Home.css";
import TopBanner from "../modules/TopBanner";
import TopBannerImage from "../../img/topbanner/eurovision.png";

const Home = () => {
  return (
    <>
      <TopBanner 
        backgroundImage={TopBannerImage} 
        bgColorKey="black" 
        title="Home" 
        content="Welcome to the University College WCR" />
    </>
  );
}

export default Home;
