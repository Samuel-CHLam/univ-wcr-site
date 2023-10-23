import React from "react";
// import { Fade } from "react-awesome-reveal";

import TopBanner from "../modules/TopBanner";

import "../../utilities.css"
import "./Accessibility.css";

const Accessibility = () => {
  return (
    <>
      <TopBanner bgColorKey="secondary" title="Privacy and Accessibility" content="Privacy and Accessibility Statements" />
      {/* <Fade direction="up" triggerOnce> */}
        <div className="u-block">
          <h1>Privacy</h1>
          <h2>Information Collection, Use, and Sharing</h2>
          <p> 
            We are the sole owners of the information collected on this site. We only have access to/collect information 
            that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information 
            to anyone. 
          </p>
          <p>
            We will use your information to respond to you, regarding the reason you contacted us. We will not share your 
            information with any third party outside of our organization, other than as necessary to fulfill your request, 
            e.g. to ship an order. Unless you ask us not to, we may contact you via email in the future to tell you about 
            specials, new products or services, or changes to this privacy policy.
          </p>
          <h2>Your Access to and Control Over Information</h2>
          <p>
            You may opt out of any future contacts from us at any time. We take precautions to protect your information. 
            When you submit sensitive information via the website, your information is protected both online and offline. 
            If you feel that we are not abiding by this privacy policy, you should contact us immediately via email 
            at <a href="mailto:wcr-externalaffairs@univ.ox.ac.uk">wcr-externalaffairs@univ.ox.ac.uk</a>
          </p>
        </div>
        <div className="u-block">
          <h1> Accessibility </h1>
            <p>
              The website aims to comply with the <a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines (WCAG) 2.1</a>. Since the website is under 
              development, there may be content which are not accessible. If you need information on this website in a different format like accessible PDF, large print, 
              easy read, audio recording or braille or if you find any accessibility issues, then please contact us at <a href="mailto:wcr-externalaffairs@univ.ox.ac.uk">wcr-externalaffairs@univ.ox.ac.uk</a>. 
              We will consider your request and get back to you within seven days.
            </p>
            <p>
              The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 
              (the ‘accessibility regulations’). If you’re not happy with how we respond to your complaint, contact the <a href="https://www.equalityadvisoryservice.com/">Equality Advisory and Support Service (EASS)</a>.
            </p>
        </div>
      {/* </Fade> */}
    </>
  );
}

export default Accessibility;