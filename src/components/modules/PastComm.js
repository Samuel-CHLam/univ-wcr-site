import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../utilities.css"
import "./PastComm.css";

import default_img_src from "../../img/logo/univ_192x192.png";

const PastCommittee = () => {

  const [previousComm, setPreviousComm] = useState([]);

  const fetchComm = async () => {
    const resPrevious = await axios.get(
      `https://samuelchlam.herokuapp.com/api/prev-comms?populate[profilePicture][fields][0]=url`
      ).then().catch(e => {console.log(e)});

    setPreviousComm(resPrevious.data.data);
  };

  useEffect(() => {fetchComm().then(console.log(previousComm));}, []);

  const scrollToTop = () => {
    setTimeout(
      function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, 50)
  };

  console.log(previousComm)

  return (
    <div className="CurrentComm-container">
        {previousComm.sort(
          (comm1, comm2) => {return comm1.attributes.preferredName > comm2.attributes.preferredName}
        ).map(
          (comm) => { 
          let bG
          if (comm.attributes.profilePicture) {
            bG = `url("${comm.attributes.profilePicture.data.attributes.url}")`;
          } else {
            bG = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${default_img_src}")`;
          }

          return (
            <div key={comm.id} className="CurrentComm-single">
              <Link to={`/profile/${comm.attributes.username}`} onClick={scrollToTop}>
              <div className="CurrentComm-background" style={{backgroundImage: bG}}> </div>
              <div className="CurrentComm-about"> 
                  <div className="name"> <b>{comm.attributes.preferredName}</b> ({comm.attributes.preferredPronoun}) </div>
                  <div className="post"> {comm.attributes.wcrRole} </div>
              </div>
              </Link>
            </div>
          )
        })}
    </div>
  );
};
  
export default PastCommittee;