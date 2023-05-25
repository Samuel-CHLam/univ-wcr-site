import React, { Component } from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Home.css";
import ButtonFlex from "../modules/ButtonFlex.js";
import TopBanner from "../modules/TopBanner";
import ContentBlock from "../modules/ContentBlock";
import TopBannerImage from "../../img/topbanner/eurovision.png";

const Home = () => {
  return (
    <>
      <TopBanner 
        backgroundImage={TopBannerImage} 
        bgColorKey="black" 
        title="Home" 
        content="Welcome to the University College WCR" />
      
      <ContentBlock title="Who are we?">
        <p>
          The WCR has a double meaning: it refers to the graduate body of students at University College and also 
          to the physical space in the College where graduate students can relax and socialise. It is an engaging 
          and diverse community of early-researchers consisting around 150 members across all year groups and subjects. 
          Whether you are here for a one/two-year Masters programme or a DPhil programme we do hope you choose to get 
          involved with college life!
        </p>
      </ContentBlock>

      <ContentBlock>
        <ButtonFlex />
      </ContentBlock>
    </>
  );
}

export default Home;
