import React from "react";
// import { Fade } from "react-awesome-reveal";

import "../../../utilities.css"
import "./WhatsOn.css";
import "../NotFound.css";
import ButtonFlex from "../../modules/ButtonFlex";

const WhatsOn = () => {
    return (
      <>
          {/* <Fade cascade={true} direction="up" triggerOnce> */}
          <div className="u-block">
              <h1 className="u-section-title">Events</h1>
              <p>Please search below upcoming events happening in the college.</p>
          </div>
          <div className="u-block">
          <h1 className="u-section-title">Or you want to hear about us more...</h1>
              <ButtonFlex />
          </div>
          {/* </Fade> */}
      </>
    );
  }
  
export default WhatsOn;
