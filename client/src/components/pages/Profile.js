import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "../../utilities.css"
import "./Profile.css";

import TopBanner from "../modules/TopBanner";
import ProfileBanner from "../modules/ProfileBanner";
import ProfileBasicInfo from "../modules/ProfileBasicInfo";
import ContentBlock from "../modules/ContentBlock";
import BasicProfileEdit from "../modules/BasicProfileEdit";
import ButtonFlex from "../modules/ButtonFlex";
import PersonalIntroEdit from "../modules/PersonalIntroEdit";

const Profile = ({userId}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [editBasicProfile, setEditBasicProfile] = useState(false);
  const [editPersonalIntro, setEditPersonalIntro] = useState(false);

  const fetchUser = async () => {
    if (userId) {
        const anotherUser = await get("/api/user", {googleid: userId});
        setCurrentUser(anotherUser);
        }
        else {
            console.log("you need to login!")
        };
      }

  useEffect(() => {fetchUser();}, [userId]); // make sure to call the useEffect once again when the userId input changes.

  const onEditBasicProfile = () => {setEditBasicProfile(true)};
  const afterEditBasicProfile = () => {fetchUser().then(setEditBasicProfile(!editBasicProfile))};
  const onEditPersonalIntro = () => {setEditPersonalIntro(true); console.log(editPersonalIntro)};
  const afterEditPersonalIntro = () => {fetchUser().then(setEditPersonalIntro(!editPersonalIntro))};

  const currentBasicProfile = {
    name: currentUser.name,
    wcrRole: currentUser.wcrRole,
    subject: currentUser.subject,
    joinedUnivSince: currentUser.joinedUnivSince,
    websiteLink: currentUser.websiteLink,
    facebookLink: currentUser.facebookLink,
    twitterLink: currentUser.twitterLink,
    linkedInLink: currentUser.linkedInLink
  };

  const currentPersonalIntro = currentUser.personalIntro;

  
  if (!currentUser.name) {
    return (
      <>
        <TopBanner title="" content="You do not have permission to visit this page" />
        <div className="u-block">Please contact us for further assistance.</div>
      </>
    )
  }
  return (
    <>
      <ProfileBanner title="Profile" userObj={currentUser} bgColorKey="secondary" />
      { !editBasicProfile ? (
        <ContentBlock title="Univ Engagement">
          <div className="profile-flex">
            <div>
              <p>Website: { currentUser.websiteLink ? (<a href={currentUser.websiteLink}>{currentUser.websiteLink}</a>) : (<>not provided</>)}</p>
              <p>Facebook: { currentUser.facebookLink ? (<a href={currentUser.facebookLink}>{currentUser.facebookLink}</a>) : (<>not provided</>)}</p>
              <p>Twitter: { currentUser.twitterLink ? (<a href={currentUser.twitterLink}>{currentUser.twitterLink}</a>) : (<>not provided</>)}</p>
              <p>LinkedIn: { currentUser.linkedInLink ? (<a href={currentUser.linkedInLink}>{currentUser.linkedInLink}</a>) : (<>not provided</>)}</p>
            </div>
            {/* <img className="profile-img" src={ currentUser.profile_pic_link } /> */}
          </div>
          <ButtonFlex display={[{key: 1, onClick: onEditBasicProfile, des:"Click to edit your basic profile", color: "primary"}]}/>
        </ContentBlock>
      ) : (
        <ContentBlock title="You are now editing your profile" >
          <p>You are now editing your profile.</p>
          <BasicProfileEdit userId={userId} currentBasicProfile={currentBasicProfile} afterSubmit={afterEditBasicProfile}/>
        </ContentBlock>
      )}
      
      <ContentBlock title="Personal introduction">
        { !editPersonalIntro ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: currentUser.personalIntro}} />
            <ButtonFlex display={[{key: 1, onClick: onEditPersonalIntro, des:"Click to edit your personal introduction", color: "primary"}]}/>
          </>
        ) : (
          <>
            <p><b>Please note:</b> for the safety of the website, only the following types of contents (html tags) are allowed: 
              Normal paragraph <code>{"<p>"}</code>, headings in level 3 and 4 <code>{"<h3>, <h4>"}</code>, bold <code>{"<b>"}</code>, 
              italics <code>{"<i>"}</code>, underline <code>{"<u>"}</code>, anchor/link <code>{"<a>"}</code>, unordered lists <code>{"<ul>"}</code> and 
              ordered list <code>{"<ol>"}</code> with list items <code>{"<li>"}</code>. Although there might be other type of contents included 
              in the editor, they will be sanitised before being rendered. We will consider adding more functionalities in the future.
            </p>
            <ButtonFlex display={[{key: 1, isLocal: false, link: "https://stackoverflow.com/questions/38663751/how-to-safely-render-html-in-react", des: "Find out how we render your personal introduction"}]}/>
            <PersonalIntroEdit userId={userId} currentPersonalIntro={currentPersonalIntro} afterSubmit={afterEditPersonalIntro}/>
          </>
        )}
      </ContentBlock>
    </>
  );
}

export default Profile;