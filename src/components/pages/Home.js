import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Home.css";
import TopBanner from "../modules/TopBanner";
import TopBannerImage from "../../img/topbanner/eurovision.png";
import EventShortDes from "../modules/EventShortDes";
import Image from "../modules/Image";
import ContentBlock from "../modules/ContentBlock";

const Home = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const BaseURL = "https://samuelchlam.herokuapp.com/api"
    const response = await axios.get(`${BaseURL}/events?sort=startDate&pagination[pageSize]=50&populate=banner&populate=mainContact&populate=natures`);
    setEvents(response.data.data);
  };

  useEffect(() => {getEvents();}, []);

  return (
    <>
      <TopBanner 
        backgroundImage={TopBannerImage} 
        bgColorKey="black" 
        title="Home" 
        content="Welcome to the University College WCR" />
      <ContentBlock title="The website grows with you!">
        <p>The WCR will finally have its website again since its closure in 2019, as a 
          celebration of the end of Covid and the revival of the community. The website is 
          under active development. Therefore, information available here may not be up-to-date, 
          and you are strongly advised to double check with the WCR members. The website may be down 
          from time to time for maintenance - we will try to inform you 48 hours before the 
          maintenance sessions. Feedbacks are welcomed: please share by 
          contacting <Link to="/profile/Samuel-CHLam">Samuel Chun Hei Lam</Link>, or attending the 
          open WCR committee meeting.
        </p>
      </ContentBlock>
      <div className="u-block">
        <h1 className="u-section-title">Upcoming Events</h1>
        <div className="u-gridPic-3">
          {events.filter(
            (item) => new Date(item.attributes.startDate) > new Date()
            ).slice(0,3).map(
              (item) => {
                return (
                  <Image 
                    key={item.id}
                    title="" 
                    src={item.attributes.banner.data ? item.attributes.banner.data.attributes.url : ""}
                    opacity={item.attributes.banner.data ? 1 : .5}
                    isBlack={Boolean(true)}
                    aspect="16/9"
                    suppressArrow={Boolean(true)}
                    des={<EventShortDes attributes={item.attributes}/>}
                    linkdes={`/events/${item.id}`}
                    isLocal={Boolean(true)}
                    altText={item.attributes.banner.data ? item.attributes.banner.data.attributes.alternativeText : ""}/>
                )}
            )}
        </div>
      </div>
    </>
  );
}

export default Home;
