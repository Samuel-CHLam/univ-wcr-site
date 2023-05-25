import React, { Component } from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./NotFound.css";
import ButtonFlex from "../modules/ButtonFlex";

class NotFound extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }
  
    render() {
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
            <div className="u-block">
            <h1 className="u-section-title">Or you want to hear about us more...</h1>
                <ButtonFlex />
            </div>
            {/* </Fade> */}
        </>
      );
    }
  }
  
export default NotFound;
