import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../utilities.css"
import "./CurrentComm.css";

import default_img_src from "../../img/logo/univ_192x192.png";


const CurrentCommittee = () => {

  const [currentComm, setCurrentComm] = useState([]);

  const fetchComm = async () => {
    const BaseURL = "http://localhost:1337/api";
    const resCurrent = await axios.get(
      `${BaseURL}/users?populate[role][fields][0]=type&filters[role][type][$eq]=wcr_committee_member&populate[profilePicture][fields][0]=url`
      ).then().catch(e => {console.log(e)});

    setCurrentComm(resCurrent.data);
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
        {currentComm.sort(
          (comm1, comm2) => {return comm1.orderOfDisplay > comm2.orderOfDisplay}
        ).map(
          (comm) => { 
          let bG
          if (comm.profilePicture) {
            bG = `url("http://localhost:1337${comm.profilePicture.url}")`;
          } else {
            bG = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${default_img_src}")`;
          }

          return (
            <div key={comm.id} className="CurrentComm-single">
              <Link to={`/profile/${comm.username}`} onClick={scrollToTop}>
              <div className="CurrentComm-background" style={{backgroundImage: bG}}> </div>
              <div className="CurrentComm-about"> 
                  <div className="name"> <b>{comm.preferredName}</b> ({comm.preferredPronoun}) </div>
                  <div className="post"> {comm.wcrRole} </div>
              </div>
              </Link>
            </div>
          )
        })}
    </div>
  );
};
  
export default CurrentCommittee;