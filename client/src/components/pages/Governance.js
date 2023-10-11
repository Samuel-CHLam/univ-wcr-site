import React from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Governance.css";
import TopBannerImage from "../../img/topbanner/WCR_all_committee.jpg";

import TopBanner from "../modules/TopBanner";
import ContentBlock from "../modules/ContentBlock";
import CurrentCommittee from "../modules/CurrentComm.js";
import PastCommittee from "../modules/PastComm.js";


const Governance = () => {

  return (<>
    <TopBanner backgroundImage={TopBannerImage} title="About" content="Governance" />

    {/* <Fade cascade={true} direction="up" triggerOnce> */}
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