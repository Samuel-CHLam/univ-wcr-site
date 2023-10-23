import React from "react";

import "../../utilities.css";
import "./EventBanner.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param eventObj for user object
 */

import default_img_src from "../../img/logo/univ_192x192.png";

const catToColor = [
  {key: "College Official", bkgColor: "251,189,26", textColor: "rgb(0,59,121)"},
  {key: "Common Room", bkgColor: "0,59,121", textColor: "#FFF"},
  {key: "Student Society", bkgColor: "255,87,51", textColor: "#FFF"},
  {key: "Other", bkgColor: "69,69,69", textColor: "#FFF"},
];

const EventBanner = ( {eventObj} ) => {
  let finalCategory = eventObj.category || "Other"
  const actualBkgColor = catToColor.find((element) => element.key === finalCategory).bkgColor;
  const actualColor = catToColor.find((element) => element.key === finalCategory).textColor;
  
  let bgStyle = {};
  
  try {
    bgStyle = {backgroundImage: `linear-gradient(rgba(${actualBkgColor},0.8), 
      rgba(${actualBkgColor},0.8)), 
      url(${eventObj.banner.data.attributes.url})`};
  } catch {
    bgStyle = {
      backgroundColor: `rgb(${actualBkgColor})`,
    };
  }
  
  return (
      <>
        <div className="eventbanner" style={bgStyle}>
          <div className="eventbanner-bodycontainer">
            <div className="eventbanner-left">
              <h3 className="eventbanner-title" style={{color: actualColor}}>Event</h3>
              <h1 className="eventbanner-content" style={{color: actualColor}}> 
                <span className="eventbanner-line" style={{color: actualColor}}></span>
                {eventObj.title} 
              </h1>
            </div>
            <div className="eventbanner-right">
              <p className="u-nomargin">{eventObj.category} event</p>
              <p className="u-nomargin"><b>{new Date(eventObj.startDate).toLocaleDateString(
                undefined, {
                  weekday: 'short', 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  hour12: false,
                  minute: '2-digit',
                })}</b>
              </p>
              <>
              { eventObj.secondVenue ? (
                  <>
                    <p className="u-nomargin"><b>{eventObj.firstVenue}</b>, then</p>
                    <p className="u-nomargin"><b>{eventObj.secondVenue}</b></p>
                  </>
                ) : (
                  <p className="u-nomargin"><b>{eventObj.firstVenue}</b></p>
                )
                }
              </>
              <p>
                {eventObj.nature && eventObj.nature.data.map((tag) => {
                  const tagToColor = [
                    {key: "Academic Related", bkgColor: "rgb(229,52,44)", textColor: "#FFF"},
                    {key: "Chaplaincy", bkgColor: "#1a6f2b", textColor: "#FFF"},
                    {key: "College Development", bkgColor: "rgb(251,189,26)", textColor: "rgb(0,59,121)"},
                    {key: "Freshers", bkgColor: "white", textColor: "black"},
                    {key: "Music", bkgColor: "rgb(255,87,51)", textColor: "#FFF"},
                    {key: "Other", bkgColor: "rgb(69,69,69)", textColor: "#FFF"},
                    {key: "Social", bkgColor: "rgb(148,18,118)", textColor: "#FFF"},
                    {key: "Sports", bkgColor: "rgb(0,59,121)", textColor: "#FFF"},
                    {key: "Welfare", bkgColor: "#539728", textColor: "#FFF"},
                    {key: "Equality and Access", bkgColor: "#539728", textColor: "#FFF"},
                    {key: "LGBTQ+", bkgColor: "#F5A9B8", textColor: "rgb(0,59,121)"},
                  ];

                return (
                  <span key={tag.id} className="eventbanner-nature" style={{
                    backgroundColor: tagToColor.find((obj) => {return obj.key === tag.attributes.name}).bkgColor,
                    color: tagToColor.find((obj) => {return obj.key === tag.attributes.name}).textColor,
                  }}>
                    {tag.attributes.name}
                  </span>);
                }
              )}
              </p>
              {eventObj.promotionLink && <a 
                style={{textDecoration: "none"}}
                href={eventObj.promotionLink}><button className="eventbanner-register">Information / Register Here</button></a>}
                {eventObj.eventLink && <a 
                style={{textDecoration: "none"}}
                href={eventObj.eventLink}><button className="eventbanner-eventlink">Join here!</button></a>}
            </div>
          </div>
        </div>
      </>
    );
  }

export default EventBanner;