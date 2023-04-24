import React from "react";

import "../../utilities.css";
import "./TopBanner.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param background
 * @param title
 * @param content
 * @param des describing the background image
 */

const TopBanner = ( {background, title, content} ) => {
  return (
      <div className="topbanner topbanner--standard" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`}}>
          <div className="topbanner-bodycontainer">
              <h3 className="topbanner-title"> {title} </h3>
              <h1 className="topbanner-content"> 
                <span className="topbanner-line"></span>
                {content} 
              </h1>
          </div>
      </div>
    );
  }

export default TopBanner;