import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";

import "../../utilities.css"
import "./Profile.css";

import TopBanner from "../modules/TopBanner";
import ProfileBanner from "../modules/ProfileBanner";
import ContentBlock from "../modules/ContentBlock";

const Profile = () => {
  let { userName } = useParams();

  const [currentUser, setCurrentUser] = useState({});
  const [currentEngage, setCurrentEngage] = useState({});

  const fetchUser = async () => {
    const BaseURL = "http://localhost:1337/api";
    const resUser = await axios.get(
      `${BaseURL}/users?filters[username][$eq]=${userName}&populate=profilePicture`
      ).then().catch(e => {console.log(e)});
    const resEngage = await axios.get(
      `${BaseURL}/univ-engagements?populate[user][fields][0]=username&filters[user][username][$eq]=${userName}`
      ).then().catch(e => console.log(e));

    setCurrentUser(resUser.data[0]);
    setCurrentEngage(resEngage.data.data);}

  useEffect(() => {fetchUser();}, []);

  try {
    return (
    <>
      <ProfileBanner title="Profile" userObj={currentUser} bgColorKey="secondary" />
      <ContentBlock title="Univ Engagement">
        <div className="profile-engagement-container">
          {currentEngage.sort((item1, item2) => {return (item2.attributes.startDate > item1.attributes.startDate)}).map((item) => {
            const startYear = new Date(item.attributes.startDate);
            const endYear = item.attributes.endDate ? new Date(item.attributes.endDate) : "";

            return (
              <div className="profile-engagement"> 
                {item.attributes.Name}, {item.attributes.Organisation} {startYear.getFullYear()}-
                {endYear ? (<>{endYear.getFullYear()}</>) : (<></>)}</div>
                );
              }
            )
          }
        </div>
      </ContentBlock>

      <ContentBlock title="Personal introduction">
        <Markdown>{currentUser.personalIntro}</Markdown>
      </ContentBlock>
    </>
  );

  } catch (err) {
    console.log(err);

    return (
      <>
        <TopBanner title="" content="This profile does not exist." />
        <div className="u-block">Please contact us for further assistance.</div>
      </>
    )
    
  }};

export default Profile;