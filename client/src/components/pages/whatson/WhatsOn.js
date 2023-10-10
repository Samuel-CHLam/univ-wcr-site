import React, {useState, useEffect} from "react";
// import { Fade } from "react-awesome-reveal";

import axios from "axios";
import Image from "../../modules/Image";
import "../../../utilities.css"
import "./WhatsOn.css";
import "../NotFound.css";
import EventShortDes from "../../modules/EventShortDes";
import ButtonFlex from "../../modules/ButtonFlex";

const WhatsOn = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await axios.get("http://localhost:1337/api/events?sort=startDate&pagination[pageSize]=200&populate=banner&populate=mainContact&populate=nature");
    setEvents(response.data.data);
  };

  useEffect(() => {getEvents();}, []);

  console.log(events);

  return (
    <>
      <div className="u-block">
        <h1 className="u-section-title">Events</h1>
        <p>Please search below upcoming events happening in the college.</p>
        <div className="u-gridPic-3">
          {events.map(
              (item) => {
                return (
                  <Image 
                    key={item.id}
                    title="" 
                    src={item.attributes.banner.data ? "http://localhost:1337" + item.attributes.banner.data.attributes.url : ""}
                    opacity={item.attributes.banner.data ? 1 : .5}
                    isBlack={Boolean(true)}
                    aspect="16/9"
                    suppressArrow={Boolean(true)}
                    des={<EventShortDes attributes={item.attributes}/>}
                    linkdes="/governance"
                    isLocal={Boolean(true)}
                    altText={item.attributes.banner.data ? item.attributes.banner.data.attributes.alternativeText : ""}/>
                )}
            )}
        </div>
      </div>
    </>
  );
};
  
export default WhatsOn;
