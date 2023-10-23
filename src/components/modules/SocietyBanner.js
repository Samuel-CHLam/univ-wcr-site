import React from "react";

import "../../utilities.css";
import "./societybanner.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param societyObj for user object
 */

const SocietyBanner = ( {societyObj} ) => {
  let finalKey = societyObj.nature || "Other"
  let bgStyle = {};
  
  try {
    bgStyle = {backgroundImage: `linear-gradient(rgba(0,0,0,0.5), 
      rgba(0,0,0,0.5)), 
      url(${societyObj.banner.data.attributes.url})`};
  } catch {
    bgStyle = {
      backgroundColor: "black",
    };
  }
  
  const tagToColor = [
    {key: "Academic Related", bkgColor: "rgb(229,52,44)", textColor: "#FFF"},
    {key: "Chaplaincy", bkgColor: "#1a6f2b", textColor: "#FFF"},
    {key: "College Development", bkgColor: "rgb(122,178,221)", textColor: "rgb(0,59,121)"},
    {key: "Freshers", bkgColor: "rgb(251,189,26)", textColor: "rgb(0,59,121)"},
    {key: "Music", bkgColor: "rgb(255,87,51)", textColor: "#FFF"},
    {key: "Other", bkgColor: "rgb(69,69,69)", textColor: "#FFF"},
    {key: "Social", bkgColor: "rgb(148,18,118)", textColor: "#FFF"},
    {key: "Sports", bkgColor: "rgb(0,59,121)", textColor: "#FFF"},
    {key: "Welfare and Access", bkgColor: "#539728", textColor: "#FFF"},
  ];
  
  return (
      <>
        <div className="societybanner" style={bgStyle}>
          <div className="societybanner-bodycontainer">
            <div className="societybanner-left">
              <h3 className="societybanner-title" style={{color: "white"}}>Societies</h3>
              <h1 className="societybanner-content" style={{color: "white"}}> 
                <span className="societybanner-line" style={{color: "white"}}></span>
                {societyObj.fullName}
              </h1>
            </div>
            <div className="societybanner-right">
              <p> Also known as: <b>{societyObj.shortName}</b> <span className="societybanner-nature" style={{
                  backgroundColor: tagToColor.find((obj) => {return obj.key === finalKey}).bkgColor,
                  color: tagToColor.find((obj) => {return obj.key === finalKey}).textColor,
                }}>
                  Nature: {societyObj.nature}
                </span> 
              </p>

              {societyObj.mailingList && <a 
                style={{textDecoration: "none"}}
                href={societyObj.mailingList}><button className="societybanner-register">Mailing List</button></a>}
              <div>
                {societyObj.email && (<><a href={`mailto:${societyObj.email}`}><i className="fa-solid fa-envelope fa-3x"></i></a> </>)}
                {societyObj.websiteLink && (<><a href={societyObj.websiteLink}><i className="fa-solid fa-globe fa-3x"></i></a> </>)}
                {societyObj.facebookLink && (<><a href={societyObj.facebookLink}><i className="fa-brands fa-facebook fa-3x"></i></a> </>)}
                {societyObj.twitterLink && (<><a href={societyObj.twitterLink}><i className="fa-brands fa-twitter fa-3x"></i></a> </>)}
                {societyObj.instagramLink && (<><a href={societyObj.instagramLink}><i className="fa-brands fa-instagram fa-3x"></i></a> </>)}
                {societyObj.whatsappLink && (<><a href={societyObj.whatsappLink}><i className="fa-brands fa-whatsapp fa-3x"></i></a> </>)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default SocietyBanner;