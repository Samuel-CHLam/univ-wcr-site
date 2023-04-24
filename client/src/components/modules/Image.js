import React, { Component } from "react";

import "../../index.css"
import "./Image.css";

/**
 * Component to render navbar
 * 
 * Prototype
 * @param {string} src as source of picture
 * @param {string} des as description of picture
 */

class Image extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }
  
    render() {
      return (
        <div>
            <div style={{backgroundImage: `url(${this.props.src})`}} className="image"> </div>
            <p className="u-nomargin u-margin-top"> &#9654; {this.props.des} </p>
        </div>
      );
    }
  }
  
  export default Image;