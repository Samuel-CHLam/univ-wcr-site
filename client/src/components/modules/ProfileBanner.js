import React from "react";

import Image from "./Image.js";

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
 * @param content
 * @param des // describing the background image
 */

import default_img_src from "../../img/logo/univ_192x192.png";

const colorArray = [
  { key: "primary", bgColor: [0,59,121], textColor: "secondary", defaultOpacity: 0.85},
  { key: "secondary", bgColor: [251,189,26], textColor: "primary", defaultOpacity: 0.85},
  { key: "blue", bgColor: [122,178,221], textColor: "primary", defaultOpacity: 0.95},
  { key: "violet", bgColor: [148,18,118], textColor: "secondary", defaultOpacity: 0.9},
  { key: "black", bgColor: [0,0,0], textColor: "white", defaultOpacity: 0.7}
]

const ProfileBanner = ( {backgroundImage, bgColorKey, opacityLeft, opacityRight, textColor, userObj} ) => {
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
      <div className="profilebanner" style={bgStyle}>
        <div className="profilebanner-bodycontainer">
          <div className="profilebanner-left">
            <h3 className="profilebanner-title" style={{color: `var(--${finalTextColor})`}}>Profile</h3>
            <h1 className="profilebanner-content" style={{color: `var(--${finalTextColor})`}}> 
              <span className="profilebanner-line"style={{color: `var(--${finalTextColor})`}}></span>
              {userObj.name} 
            </h1>
          </div>
          <div className="profilebanner-right">
            <div className="profilebanner-shift">
              <div style={{backgroundImage: `url(${userObj.profile_pic_link})`}} className="u-image u-aspect-43"> </div>
              <div className="profilebanner-basic">
                <p>Current Role <br/> <b>{userObj.wcrRole}</b></p>
                <p>Subject <br/> <b>{userObj.subject}</b></p>
                <p>Joined Univ Since <br/><b>{userObj.joinedUnivSince}</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ProfileBanner;