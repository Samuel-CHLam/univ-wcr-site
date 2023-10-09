import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../../utilities.css"
import "./Profile.css";

import TopBanner from "../modules/TopBanner";
import ProfileBanner from "../modules/ProfileBanner";
import ProfileBasicInfo from "../modules/ProfileBasicInfo";
import ContentBlock from "../modules/ContentBlock";
import BasicProfileEdit from "../modules/BasicProfileEdit";
import ButtonFlex from "../modules/ButtonFlex";
import PersonalIntroEdit from "../modules/PersonalIntroEdit";

const Profile = () => {
  let { userName } = useParams();

  const [currentUser, setCurrentUser] = useState({});
  const [currentEngage, setCurrentEngage] = useState({});

  const fetchUser = async () => {
    const BaseURL = "http://localhost:1337/api";
    const resUser = await axios.get(`${BaseURL}/users?filters[username][$eq]=${userName}&populate=profilePicture`);
    const resEngage = await axios.get(`${BaseURL}/univ-engagements?populate[user][fields][0]=username&filters[user][username][$eq]=${userName}`)
    console.log(resUser.data[0]);
    console.log(resEngage.data.data);
    setCurrentUser(resUser.data[0]);
    setCurrentEngage(resEngage.data.data);
    }

  useEffect(() => {fetchUser();}, []);
  
  if (!currentUser.preferredName) {
    return (
      <>
        <TopBanner title="" content="This profile does not exist." />
        <div className="u-block">Please contact us for further assistance.</div>
      </>
    )
  }
  return (
    <>
      <ProfileBanner title="Profile" userObj={currentUser} bgColorKey="secondary" />
      <ContentBlock title="Univ Engagement">
        <div className="profile-engagement-container">
          {currentEngage.sort((item1, item2) => {return (item2.attributes.startDate > item1.attributes.startDate)}).map((item) => {
            const startYear = new Date(item.attributes.startDate);
            const endYear = new Date(item.attributes.endDate) || "";

            return (
              <div className="profile-engagement"> 
                {item.attributes.Name}, {item.attributes.Organisation} {startYear.getFullYear()}-
                {endYear && (<>{endYear.getFullYear()}</>)}</div>
                );
              }
            )
          }
        </div>
      </ContentBlock>

      <ContentBlock title="Personal introduction">
        <div dangerouslySetInnerHTML={{ __html: currentUser.personalIntro}} />
      </ContentBlock>
    </>
  );
}

export default Profile;