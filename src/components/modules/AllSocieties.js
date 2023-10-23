import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../utilities.css"
import "./AllSocieties.css";

import default_img_src from "../../img/logo/univ_192x192.png";

const AllSocieties = () => {

  const [societies, setSocieties] = useState([]);

  const fetchComm = async () => {
    const BaseURL = "https://samuelchlam.herokuapp.com/api";
    const resSocieties = await axios.get(
      `${BaseURL}/societies?populate=banner`).then().catch(e => {console.log(e)});
    setSocieties(resSocieties.data.data);
  };

  useEffect(() => {fetchComm();}, []);

  const scrollToTop = () => {
    setTimeout(
      function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, 50)
  };

  return (
    <div className="CurrentComm-container">
        {societies.sort(
          (soc1, soc2) => {return soc1.attributes.title > soc2.attributes.title}
        ).map(
          (soc) => { 
          
          let bG
          
          if (soc.attributes.banner) {
            bG = `url("${soc.attributes.banner.data.attributes.url}")`;
          } else {
            bG = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${default_img_src}")`;
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

          let finalKey = soc.attributes.nature || "Other"

          return (
            <div key={soc.id} className="CurrentComm-single">
              <Link to={`/societies/${soc.attributes.abbreviation}`} onClick={scrollToTop}>
              <div className="CurrentComm-background" style={{backgroundImage: bG}}> </div>
              <div className="CurrentComm-about"> 
                  <div className="name"> 
                    <b>{soc.attributes.shortName} </b> 
                    <span className="societybanner-nature" style={{
                      backgroundColor: tagToColor.find((obj) => {return obj.key === finalKey}).bkgColor,
                      color: tagToColor.find((obj) => {return obj.key === finalKey}).textColor,
                    }}>{finalKey}</span>
                  </div>
              </div>
              </Link>
            </div>
          )
        })}
    </div>
  );
};
  
export default AllSocieties;