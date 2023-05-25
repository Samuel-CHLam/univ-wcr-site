import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "../../utilities.css"
import "./About.css";

import TopBanner from "../modules/TopBanner";
import ContentBlock from "../modules/ContentBlock";

// import TopBanner from "../modules/TopBanner";
// import TopBannerImage from "../../img/topbanner/crossrail.jpg";

const Profile = ({userId}) => {
  const [currentUser, setCurrentUser] = useState({});

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
  
  if (!currentUser) {
    return <div className="u-block"> You do not have the permission to look at this page. </div>
  }
  return (
    <>
      <TopBanner 
          bgColorKey="secondary" 
          title="Your profile" 
          content={`Welcome ${currentUser.name}`} />

      {/* <Fade cascade={true} direction="up" triggerOnce> */}
      <ContentBlock title="Welcome! Here is your profile!">
        <p>Name: {currentUser.name} </p>
        <p>WCR Role: {currentUser.wcrRole}</p>
        <p>Subject: {currentUser.subject} </p>
        <p>Joined Univ since: {currentUser.joinedUnivSince}</p>
      </ContentBlock>
      {/* </Fade> */}
    </>
  );
}

export default Profile;