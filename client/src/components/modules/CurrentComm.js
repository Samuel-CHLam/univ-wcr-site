import React, { Component } from "react";

import "../../index.css"
import "./CurrentComm.css";

import commCurrent from "../../data/CommCurrent.js";
import icrts from "../../img/logo/icrts.png"

class CurrentCommittee extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }
  
    render() {
      return (
        <div className="CurrentComm-container">
            {commCurrent.map( (comm) => { 
              let bG
              if (comm.background) {
                bG = `linear-gradient(rgba(0,0,0,${1-comm.opacity || 0}), 
                rgba(0,0,0,${1-comm.opacity || 0})), url("${comm.background}")`;
              } else {
                bG = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${icrts}")`;
              }

              return (
                <div key={comm.key} className="CurrentComm-single">
                    <div className="CurrentComm-background" style={{
                        backgroundImage: bG}}> </div>
                    <div className="CurrentComm-about"> 
                        <div className="name"> <b>{comm.firstName}</b> {comm.lastName} </div>
                        <div className="post"> {comm.post} </div>
                    </div>
                </div>
              )
            })}
        </div>
      );
    }
  }
  
  export default CurrentCommittee;