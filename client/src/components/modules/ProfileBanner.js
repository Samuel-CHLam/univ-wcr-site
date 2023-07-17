import React from "react";

import "../../utilities.css";
import "./ProfileBanner.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param backgroundImage // link for background image
 * @param bgColorKey // primary, secondary, 
 * @param opacityLeft
 * @param opacityRight
 * @param title
 * @param content
 * @param des // describing the background image
 */

const colorArray = [
  { key: "primary", bgColor: [0,59,121], textColor: "secondary", defaultOpacity: 0.85},
  { key: "secondary", bgColor: [251,189,26], textColor: "primary", defaultOpacity: 0.85},
  { key: "blue", bgColor: [122,178,221], textColor: "primary", defaultOpacity: 0.95},
  { key: "violet", bgColor: [148,18,118], textColor: "secondary", defaultOpacity: 0.9},
  { key: "black", bgColor: [0,0,0], textColor: "white", defaultOpacity: 0.7}
]

const ProfileBanner = ( {backgroundImage, bgColorKey, opacityLeft, opacityRight, textColor, title, content} ) => {
  const finalColorKey = bgColorKey || "black";
  const backgroundRgb = colorArray.find(element => element.key == finalColorKey).bgColor;
  const finalTextColor = textColor || colorArray.find(element => element.key == finalColorKey).textColor;
  let bgStyle = {backgroundColor: `rgb(${backgroundRgb[0]}, ${backgroundRgb[1]}, ${backgroundRgb[2]})`};

  if (backgroundImage) {
    const finalOpLeft = opacityLeft || colorArray.find(element => element.key == finalColorKey).defaultOpacity;
    const finalOpRight = opacityRight || colorArray.find(element => element.key == finalColorKey).defaultOpacity;
    bgStyle = {backgroundImage: `linear-gradient(rgba(${backgroundRgb[0]}, ${backgroundRgb[1]}, ${backgroundRgb[2]}, ${finalOpLeft}), 
      rgba(${backgroundRgb[0]}, ${backgroundRgb[1]}, ${backgroundRgb[2]}, ${finalOpRight})), 
      url(${backgroundImage})`};
  }
  
  return (
      <div className="topbanner" style={bgStyle}>
          <div className="topbanner-bodycontainer">
              <h3 className="topbanner-title" style={{color: `var(--${finalTextColor})`}}> {title} </h3>
              <h1 className="topbanner-content" style={{color: `var(--${finalTextColor})`}}> 
                <span className="topbanner-line"style={{color: `var(--${finalTextColor})`}}></span>
                {content} 
              </h1>
          </div>
      </div>
    );
  }

export default ProfileBanner;