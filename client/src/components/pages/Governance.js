import React from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Governance.css";
import TopBannerImage from "../../img/topbanner/WCR_all_committee.jpg";

import TopBanner from "../modules/TopBanner";
import ContentBlock from "../modules/ContentBlock";
import CurrentCommittee from "../modules/CurrentComm.js";
import PastCommittee from "../modules/PastComm.js";
import ButtonFlex from "../modules/ButtonFlex";
import constitutionPDF from "../../data/WCR_constitution_2018.pdf";

const Governance = () => {

  return (<>
    <TopBanner backgroundImage={TopBannerImage} title="About" content="Governance" />

    {/* <Fade cascade={true} direction="up" triggerOnce> */}
    <ContentBlock title="Governance">
      <p>The WCR is governed by a committee of graduate students, who pay their timeless 
      efforts to serve, advocate for and represent the interests of the graduate student 
      body within the College and the University. They also run exciting social events 
      (including BOPs), providing welfare support and promoting environmental awareness. 
      The WCR committee binds with the constitution, and is elected at the end of the 
      Hilary (second) Term each year.</p>
      <ButtonFlex display={[
          {key: 1, isLocal: false, des: "Click here to view the constitution", link: constitutionPDF}
        ]}/>
    </ContentBlock>
    <ContentBlock title="Current Committee Members (2023/24)">
      <CurrentCommittee />
    </ContentBlock>
    <ContentBlock title="Past Committee Members">
      <p>So that they aren't lost in the depths of time, and they can be remembered for all the work they've done...</p>
        <PastCommittee />
    </ContentBlock>
    {/* </Fade> */}
    </>
  );
}

export default Governance;