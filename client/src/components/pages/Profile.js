import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "../../utilities.css"
import "./About.css";

import TopBanner from "../modules/TopBanner";
import ContentBlock from "../modules/ContentBlock";
import BasicProfileEdit from "../modules/BasicProfileEdit";

// import TopBanner from "../modules/TopBanner";
// import TopBannerImage from "../../img/topbanner/crossrail.jpg";

const Profile = ({userId}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [editBasicProfile, setEditBasicProfile] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
          const anotherUser = await get("/api/user", {userId: userId});
          setCurrentUser(anotherUser);
          }
          else {
              console.log("you need to login!")
          };
        }

    fetchUser();
    }, [userId]); // make sure to call the useEffect once again when the userId input changes.

  const onEditBasicProfile = () => {
    setEditBasicProfile(true);
  }

  const afterEditBasicProfile = () => {
    setEditBasicProfile(!editBasicProfile)
  }

  const currentBasicProfile = {
    name: currentUser.name,
    wcrRole: currentUser.wcrRole,
    subject: currentUser.subject,
    joinedUnivSince: currentUser.joinedUnivSince
  }
  
  if (!currentUser) {
    return <div className="u-block"> You do not have the permission to look at this page. </div>
  }
  return (
    <>
      { !editBasicProfile ? (
        <ContentBlock title={`Welcome ${currentUser.name}! Here is your profile!`} >
          <p>Name: {currentUser.name} </p>
          <p>WCR Role: {currentUser.wcrRole}</p>
          <p>Subject: {currentUser.subject} </p>
          <p>Joined Univ since: {currentUser.joinedUnivSince}</p>
          <button onClick={onEditBasicProfile}>Click to edit your profile.</button>
        </ContentBlock>
      ) : (
        <ContentBlock title="You are now editing your profile" >
          <p>You are now editing your profile.</p>
          <BasicProfileEdit currentBasicProfile={currentBasicProfile} afterSubmit={afterEditBasicProfile}/>
        </ContentBlock>
      )}
    </>
  );
}

export default Profile;