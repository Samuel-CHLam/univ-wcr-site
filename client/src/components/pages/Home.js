import React, { Component } from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Home.css";
import Triplet from "../modules/Triplet.js";
import TopBanner from "../modules/TopBanner";
import TopBannerImage from "../../img/topbanner/eurovision.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div>
        {/* Banner Picture */}
        <TopBanner 
          backgroundImage={TopBannerImage} 
          bgColorKey="black" 
          title="Home" 
          content="Welcome to the University College WCR" />

        {/* Intro */}
        
        <div className="u-block">
          <h1> We are a vibrant and diverse community of graduate students at the University College, Oxford.</h1>
          <p>
          The WCR has a double meaning: it refers to the graduate body of students at University College and also 
          to the physical space in the College where graduate students can relax and socialise. It is an engaging 
          and diverse community of early-researchers consisting around 150 members across all year groups and subjects. 
          Whether you are here for a one/two-year Masters programme or a DPhil programme we do hope you choose to get 
          involved with college life!
          </p>
        </div>

        <div className="u-block u-block--narrow">
          <Triplet />
        </div>
      </div>
    );
  }
}

export default Home;
