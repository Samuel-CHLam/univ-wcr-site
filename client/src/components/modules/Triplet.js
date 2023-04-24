import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../utilities.css"
import "./Triplet.css";

class Triplet extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    componentDidMount() {
      // remember -- api calls go here!
    }

    scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    render() {
      return (
        <div className="Triplet-container">
          <div className="u-b-secondary Triplet-link-black"> <Link onClick={() => this.scrollToTop()} to="/about">Learn More</Link> </div>
          <div className="u-b-primary Triplet-link-white"> <a href="https://forms.office.com/r/2vTvALSNBx" className="">Contact us</a> </div>
        </div>
      );
    }
  }
  
  export default Triplet;
  