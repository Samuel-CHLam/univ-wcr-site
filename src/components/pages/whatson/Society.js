import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";
// import { Fade } from "react-awesome-reveal";

import SocietyBanner from "../../modules/SocietyBanner";
import ContentBlock from "../../modules/ContentBlock";

import "../../../utilities.css"
import "./Society.css";


const Society = () => {
  let {abbreviation} = useParams();

  const [society, setSociety] = useState({});

  const getSociety = async () => {
    const BaseURL = "https://samuelchlam.herokuapp.com/api";
    const resSoc = await axios.get(`${BaseURL}/societies?filters[abbreviation][$eq]=${abbreviation}` + 
      "&populate[wcrContacts][fields][0]=username&populate[wcrContacts][fields][1]=preferredName" + 
      "&populate[prevCommContacts][fields][0]=username&populate[prevCommContacts][fields][1]=preferredName" + 
      "&populate[banner][fields][0]=url"
      ).then().catch((e) => console.log(e));
    setSociety(resSoc.data.data[0].attributes);
  };

  useEffect(() => {getSociety();}, []);

  return (
    <>
      <SocietyBanner societyObj={society} />
      <ContentBlock title="Description">
        <Markdown>{society.description}</Markdown>
      </ContentBlock>
      <ContentBlock title="Meeting schedule for this term">
        <Markdown>{society.regularSchedule}</Markdown>
      </ContentBlock>
      <ContentBlock title="Contacts">
        <h2>MCR Contacts</h2>
        <ul>
          {society.wcrContacts && society.wcrContacts.data.map((item, idx) => <li key={idx}><Link to={`/profile/${item.attributes.username}`}>{item.attributes.preferredName}</Link></li>)}
          {society.prevCommContacts && society.prevCommContacts.data.map((item, idx) => <li key={idx}>{item.attributes.preferredName}</li>)}
        </ul>
        <h2>Other Contacts</h2>
        <Markdown>{society.otherContacts}</Markdown>
      </ContentBlock>
    </>
  );
};
  
export default Society;
