import React, { Component } from "react";
// import { Fade } from "react-awesome-reveal";

import "../../index.css"
import "./Contact.css";

import Facebook from "../modules/Facebook.js"
import mailIcon from "../../img/logo/envelop.svg";
import facebookIcon from "../../img/logo/facebook.svg";
import instaIcon from "../../img/logo/instagram.svg";

class Contact extends Component {
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
        <div className="u-banner u-standard-banner Contact-banner">
        </div>
        {/* <Fade direction="up" triggerOnce> */}
          <div className="u-block u-textCenter">
            <h1> Contact Us </h1>
            <div className="Contact-container">
              <div className="Contact-logoAndDes"> 
                <div> <img src={mailIcon} alt="mailing"/> </div>
                <div className="Contact-Des"> 
                  <a href="mailto:icrs@imperial.ac.uk"> icrs@imperial.ac.uk</a> 
                </div>
              </div>
              <div className="Contact-logoAndDes"> 
                <div> <img src={facebookIcon} alt="facebook"/> </div>
                <div className="Contact-Des"> 
                  <a href="https://www.facebook.com/ic.railway.transport">Imperial College Rail & Transport Society</a> 
                </div>
              </div>
              <div className="Contact-logoAndDes"> 
                <div> <img src={instaIcon} alt="instagram"/> </div>
                <div className="Contact-Des"> 
                  <a href="https://www.instagram.com/railandtransport/">railandtransport</a> 
                </div>
              </div>
            </div>
          </div>
        {/* </Fade> */}
        </>
      );
    }
  }
  
  export default Contact;
  