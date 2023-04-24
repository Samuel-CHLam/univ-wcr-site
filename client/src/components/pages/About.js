import React from "react";

import "../../utilities.css"
import "./About.css";

import TopBanner from "../modules/TopBanner";
import TopBannerImage from "../../img/topbanner/crossrail.jpg";

const About = () => {
  return (
    <>
      <TopBanner background={TopBannerImage} title="About" content="About" />
      {/* <Fade cascade={true} direction="up" triggerOnce> */}
        <div className="u-block">
          <h1>The graduate community of University College, Oxford.</h1>
          <p>The main objectives of the common room are:</p>
          <ul>
            <li>promoting the interests and welfare of WCR members; </li>
            <li>organising social activities among WCR members; and</li>
            <li>representing the interests of WCR members to the Governing Body of the College.</li>
          </ul>
          {/* <h3 className="u-margin-top"> You can read our constitution <a href={constitution}>here</a>.</h3> */}
        </div>
        <div className="u-block">
          <h1>Our Building</h1>
          <p>
            The WCR room is situated on the first floor of the Mitchell building, right behind the Old library. It is a regular 
            meeting-point for the graduate community here at Univ. A whole suite of events are held in the WCR from drinks 
            receptions, art socials, discussion groups and our graduate bops. The building is John Fryman of the Architects Design 
            Partnership, and is named after Sir Harold Mitchell, an Old Member of the College, who paid for its construction.
          </p>
          <h2>General Facilities</h2>
          <ul>
            <li>Comfortable lounge with plenty of seatings.</li>
            <li>Fully equipped kitchen, including a coffee machine, available for use by any member of the graduate body free of charge.</li>
            <li>Pigeon holes (or “pidges”) that hosts all mail correspondence sent to you during your stay in college accommodation.</li>
            <li>Two gender-neutral bathrooms.</li>
          </ul>
          <h2>Entertainment</h2>
          <ul>
            <li>Foosball (table football)</li>
            <li>Table tennis table</li>
            <li>Newspaper and magazine subscriptions</li>
            <li>A large selection of books and DVDs, kindly donated to the common room by alumni and the previous Master</li>
            <li>Music and TV facilities</li>
          </ul>
        </div>
      {/* </Fade> */}
    </>
  );
}

export default About;
