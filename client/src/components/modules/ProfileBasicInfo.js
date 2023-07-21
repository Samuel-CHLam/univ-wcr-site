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
            <div style={{backgroundImage: `url(${userObj.profile_pic_link})`}} className="u-image u-aspect-43"> </div>
            <div className="profilebasicinfo-basic">
                <p>Current Role <br/> <b>{userObj.wcrRole}</b></p>
                <p>Subject <br/> <b>{userObj.subject}</b></p>
                <p>Joined Univ Since <br/><b>{userObj.joinedUnivSince}</b></p>
            </div>
        </div>
    );
  }

export default ProfileBasicInfo;