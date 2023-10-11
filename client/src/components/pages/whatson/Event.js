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
    const response = await axios.get(`http://localhost:1337/api/events/${eventId}?populate=banner&populate=mainContact&populate=nature`).then().catch((e) => console.log(e));
    console.log(response.data.data.attributes);
    setEvent(response.data.data.attributes);
  };

  useEffect(() => {getEvent();}, []);

  let mainEventContact;

  try {
    mainEventContact = event.mainContact.data
  }
  catch {
    mainEventContact = []
  }

  return (
    <>
      <EventBanner eventObj={event} />
      <ContentBlock title="Description">
        <Markdown>{event.description}</Markdown>
      </ContentBlock>
      <ContentBlock title="Contacts">
        <ul>
          {mainEventContact && (mainEventContact.map((item) => <li key={item.attributes.username}><Link to={`/profile/${item.attributes.username}`}>{item.attributes.preferredName}</Link></li>))}
          {event.otherContact && <li>{event.otherContact}</li>}
        </ul>
      </ContentBlock>
    </>
  );
};
  
export default Event;
