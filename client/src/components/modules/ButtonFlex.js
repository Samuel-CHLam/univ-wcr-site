import React from "react";
import { Link } from "react-router-dom";

import "../../utilities.css"
import "./ButtonFlex.css";

const ButtonFlex = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="Triplet-container">
      <div className="u-b-secondary Triplet-link-black"> <Link onClick={() => scrollToTop()} to="/about">Learn More</Link> </div>
      <div className="u-b-primary Triplet-link-white"> <a href="https://forms.office.com/r/2vTvALSNBx" className="">Contact us</a> </div>
    </div>
  );
}
  
export default ButtonFlex;
  