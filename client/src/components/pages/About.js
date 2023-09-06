import React from "react";

import "../../utilities.css"
import "./About.css";

import TopBanner from "../modules/TopBanner";
import TopBannerImage from "../../img/topbanner/mcr_room.jpg";
import ContentBlock from "../modules/ContentBlock";
import ButtonFlex from "../modules/ButtonFlex";

const About = () => {
  return (
    <>
      <TopBanner backgroundImage={TopBannerImage} title="About" content="About" />

      <ContentBlock title="The graduate community of University College, Oxford.">
        <p>The main objectives of the common room are:</p>
          <ul>
            <li>promoting the interests and welfare of WCR members; </li>
            <li>organising social activities among WCR members; and</li>
            <li>representing the interests of WCR members to the Governing Body of the College.</li>
          </ul>
      </ContentBlock>

      <ContentBlock title="Our Building">
        <p>
          The WCR room is situated on the first floor of the Mitchell building, right behind the Old library. It is a regular 
          meeting-point for the graduate community here at Univ. A whole suite of events are held in the WCR from drinks 
          receptions, art socials, discussion groups and our graduate bops. The building is John Fryman of the Architects Design 
          Partnership, and is named after Sir Harold Mitchell, an Old Member of the College, who paid for its construction.
        </p>
      </ContentBlock>
      <ContentBlock>
        <ButtonFlex display={[
          {key: 1, isLocal: false, des: "Click here to learn more about the history of WCR building!", link: "https://www.univ.ox.ac.uk/news/a-history-of-the-mitchell-building/"}
        ]}/>
      </ContentBlock>
      <ContentBlock>
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
      </ContentBlock>
    </>
  );
}

export default About;
