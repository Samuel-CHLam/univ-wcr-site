import React from "react";
import { Link } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";

import "../../../utilities.css"
import "./SocietyAZ.css";
import ButtonFlex from "../../modules/ButtonFlex";
import roomBooking from "../../../data/pinkSlip.pdf"
// import TopBannerImage from "../../img/topbanner/WCR_all_committee.jpg";

import TopBanner from "../../modules/TopBanner";
import ContentBlock from "../../modules/ContentBlock";

const SupportSocieties = () => {

  return (<>
    <TopBanner title="What's On" content="Supports for college societies" />

    <ContentBlock title="Introduction">
      <p>Thank you for your interests in setting up a new society for Univ. Your 
        initative would make our community more vibrant and diverse!</p>
      <p>Societies are not required to register to college or any common rooms. However, 
        the WCR is here to support you in various ways together with the college.</p>
    </ContentBlock>
    <ContentBlock title="IMPORTANT: Room Booking Regulation">
      <p>Make sure to abide with the room booking regulations if you wish to host event 
        within the college. In particular, you should first contact the domestic bursary 
        at <a href="mailto:hospitality@univ.ox.ac.uk">hospitality@univ.ox.ac.uk</a> to check availability 
        of college premises, or your fellow housemates if you want to host your event in 
        accommodations. You should then complete the "pink slip" at 
        the <a href="intranet.univ.ox.ac.uk">college intranet</a>, abiding the 
        following deadlines: (last updated: Michaelmas 2023)</p>
      <ul>
        <li>10 full working days for events held in college bars</li>
        <li>3 full working days for events held in college meeting rooms</li>
        <li>48 hours for events held in accommodations</li>
      </ul>
      <p>The college reserves right to terminate any events that do not comply with the above regulations. 
        Organising or participating such events may lead to disciplinary actions.
      </p>
      <ButtonFlex display={[
          {key: 1, isLocal: false, des: "Click here for latest room booking information", link: roomBooking}
        ]}/>
    </ContentBlock>
    <ContentBlock title="Promotion on the WCR Website">
      <p>Any societies that are led by WCR members, or having sufficient involvement in WCR could 
        create a page in this WCR website for promotion. Please contact the <Link to="/profile/Samuel-CHLam">external affairs officer</Link> 
        or email <a href="mailto:wcr.externalaffairs@univ.ox.ac.uk">wcr.externalaffairs@univ.ox.ac.uk</a> if you wish to do so. Please 
        include the following details:
      </p>
      <ul>
        <li>Name of your society</li>
        <li>A logo/picture representing your society (ideally of the dimension 16:9)</li>
        <li>Points of contact (one of them must be a Univ member, ideally from WCR)</li>
        <li>Description of your society</li>
        <li>Schedule of regular meetings (if any)</li>
        <li>Nature of society: academic, music, sports, social, other</li>
        <li>Links of promotion: website, Facebook, Instagram, Twitter, WhatsApp group</li>
      </ul>
      <p>The JCR also has an independent listing of the website. You can enquire by contacting 
        the <Link to="/profile/Samuel-CHLam">external affairs officer</Link> or 
        email <a href="mailto:wcr.externalaffairs@univ.ox.ac.uk">wcr.externalaffairs@univ.ox.ac.uk</a> for more information.</p>
    </ContentBlock>
    <ContentBlock title="Funding">
      <p>Any societies that are led by WCR members could apply funding from WCR. Please contact 
        the <Link to="/profile/Lovisa-Reiche">Treasurer</Link> for information. Applications of funding 
        will be discussed during a WCR committee meeting.
      </p>
    </ContentBlock>
    {/* </Fade> */}
    </>
  );
}

export default SupportSocieties;