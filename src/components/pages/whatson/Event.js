import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";

import EventBanner from "../../modules/EventBanner";
import ContentBlock from "../../modules/ContentBlock";
import ButtonFlex from "../../modules/ButtonFlex";

import "../../../utilities.css"
import "./Event.css";


const Event = () => {
  let { eventId } = useParams();

  const [event, setEvent] = useState({});

  const getEvent = async () => {
    const BaseURL = "https://samuelchlam.herokuapp.com/api"
    const response = await axios.get(`${BaseURL}/events/${eventId}?populate=natures&populate=banner`
    + "&populate=wcrContacts" + "&populate=prevCommContacts" 
      ).then().catch((e) => console.log(e));
    setEvent(response.data.data.attributes);
  };

  useEffect(() => {getEvent();}, []);

  return (
    <>
      <EventBanner eventObj={event} />
      <ContentBlock title="Description">
        <Markdown>{event.description}</Markdown>
      </ContentBlock>
      <ContentBlock title="Contacts">
        <h2>MCR Contacts</h2>
        <ul>
          {event.wcrContacts && event.wcrContacts.data.map((item, idx) => <li key={idx}><Link to={`/profile/${item.attributes.username}`}>{item.attributes.preferredName}</Link></li>)}
          {event.prevCommContacts && event.prevCommContacts.data.map((item, idx) => <li key={idx}>{item.attributes.preferredName}</li>)}
        </ul>
        <h2>Other Contacts</h2>
        <Markdown>{event.otherContacts}</Markdown>
      </ContentBlock>
    </>
  );
};
  
export default Event;
