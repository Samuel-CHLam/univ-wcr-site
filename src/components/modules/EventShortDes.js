import React from "react";

import "../../utilities.css";
import "./EventShortDes.css";

/**
 * EventShortDes is a component in the What's On page showing summaries 
 * of individual events.
 *
 * Proptypes
 * @param {Object} attributes
 */

const EventShortDes = ({attributes}) => {

  return (
    <>
      <div>
        <b>{attributes.title} </b> 
        {attributes.natures.data && attributes.natures.data.map(
          (tag) => {
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
              <span key={tag.id} className="eventshortdes-nature" style={{
                backgroundColor: tagToColor.find((obj) => {return obj.key === tag.attributes.name}).bkgColor,
                color: tagToColor.find((obj) => {return obj.key === tag.attributes.name}).textColor,
              }}>
                {tag.attributes.name}
              </span>);
            }
        )}
      </div>
      <div style={{fontSize: "0.95rem"}}>
      <p className="u-nomargin">Time: {new Date(attributes.startDate).toLocaleDateString(
        undefined, {
          weekday: 'short', 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric', 
          hour: '2-digit', 
          hour12: false,
          minute: '2-digit',
        })}</p>
      { attributes.secondVenue ? (
        <>
          <p className="u-nomargin">First Venue: {attributes.firstVenue}</p>
          <p className="u-nomargin">Second Venue: {attributes.secondVenue}</p>
        </>
      ) : (
        <p className="u-nomargin">Venue: {attributes.firstVenue}</p>
      )
      }
      </div>
    </>
    );
  }

export default EventShortDes;