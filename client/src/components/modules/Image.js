import React, { Component } from "react";

import "../../utilities.css"
import "./Image.css";

/**
 * Component to render navbar
 * 
 * Prototype
 * @param {string} src as source of picture
 * @param {string} des as description of picture
 * @param {Boolean} show_des as showing description
 */

const Image = ({src,des,show_des}) => {(
    <div>
      <div style={{backgroundColor: "violet"}} className="image"> </div>
      {/* <div style={{backgroundImage: `url(${src})`}} className="image"> </div> */}
      {/* {(des & show_des) && (<p className="u-nomargin u-margin-top"> &#9654; {des} </p>)} */}
    </div>
  );
};
  
  export default Image;