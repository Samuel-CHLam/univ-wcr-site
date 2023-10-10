import React from "react";

import "../../utilities.css";
import "./ProfileBasicInfo.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param userObj for user object
 */

import default_img_src from "../../img/logo/univ_192x192.png";

const ProfileBasicInfo = ( {userObj} ) => {
  return (
        <div>
            <div style={{backgroundImage: `url(http://localhost:1337${userObj.profilePicture.url})`}} className="u-image u-aspect-43"> </div>
            <div className="profilebasicinfo-basic">
                <p>Current Role <br/> <b>{userObj.wcrRole}</b></p>
                <p>Subject <br/> <b>{userObj.subject}</b></p>
                <p>Joined Univ Since <br/><b>{userObj.joinedUnivSince}</b></p>
                <p>
                  {userObj.univIntroLink && (<a href={userObj.univIntroLink}><img src={default_img_src} style={{width: 40, margin: 0, padding: 0}}/></a>)}
                  {userObj.websiteLink && (<a href={userObj.websiteLink}><i className="fa-solid fa-globe fa-3x"></i></a>)}
                  {userObj.facebookLink && (<a href={userObj.facebookLink}><i className="fa-brands fa-facebook fa-3x"></i></a>)}
                  {userObj.twitterLink && (<a href={userObj.twitterLink}><i className="fa-brands fa-twitter fa-3x"></i></a>)}
                  {userObj.linkedInLink && (<a href={userObj.linkedInLink}><i className="fa-brands fa-linkedin fa-3x"></i></a>)}
                </p>
            </div>
        </div>
    );
  }

export default ProfileBasicInfo;