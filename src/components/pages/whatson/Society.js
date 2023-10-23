import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
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
    const BaseURL = "http://localhost:1337/api";
    const resSoc = await axios.get(`${BaseURL}/societies?filters[abbreviation][$eq]=${abbreviation}&populate=banner`).then().catch((e) => console.log(e));
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
    </>
  );
};
  
export default Society;
