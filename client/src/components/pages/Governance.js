import React, { Component } from "react";
// import { Fade } from "react-awesome-reveal";

import "../../index.css"
import "./Governance.css";
import PastComm from "../modules/PastComm.js";
import CurrentCommittee from "../modules/CurrentComm.js";


class Governance extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }
  
    render() {
      return (<>
        <div className="Committee-banner u-banner u-standard-banner">
            {/* Insert content here if necessary */}
          </div>
        {/* <Fade cascade={true} direction="up" triggerOnce> */}
          <div className="u-block u-textCenter">
            <h1> Current Committee (2022/23) </h1>
            {/* <CurrentCommittee /> */}
          </div>
          <div className="u-block u-textCenter">
            <h1> Past Committees </h1>
            <p>So that they aren't lost in the depths of time, and they can be remembered for all the work they've done...</p>
            {/* <PastComm /> */}
          </div>
        {/* </Fade> */}
        </>
      );
    }
  }
  
  export default Governance;
  