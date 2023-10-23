import React from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./NotFound.css";
import ButtonFlex from "../modules/ButtonFlex";

const NotFound = () => {
    return (
      <>
          <div className="NotFound-banner u-banner u-standard-banner">
          {/* Insert content here if necessary */}
          </div>
          {/* <Fade cascade={true} direction="up" triggerOnce> */}
          <div className="u-block">
              <h1 className="u-section-title">Your requested page could not be found</h1>
              <p>Please navigate to your desired page using the navigation bar.</p>
          </div>
          {/* </Fade> */}
      </>
    );
  }
  
export default NotFound;
