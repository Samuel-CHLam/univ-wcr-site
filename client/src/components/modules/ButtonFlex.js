import React from "react";
import { Link } from "react-router-dom";

import "../../utilities.css"
import "./ButtonFlex.css";

const ButtonFlex = (
    {display = [
      {key: 1, des: "Learn more", isLocal: true, link: "/about"},
      {key: 2, des: "Contact us", isLocal: false, link: "https://forms.office.com/r/2vTvALSNBx"},
      {key: 3, des: "College website", isLocal: false, link: "https://www.univ.ox.ac.uk"}
    ]}
  ) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const defaultColor = ["secondary", "primary", "darkgrey"];

  return (
    <div className={`ButtonFlex-container ButtonFlex-container-${display.length}`}>
      {display.map((item, idx) => {
        return (
          <>
            { item.link ? (
              <>
                { item.isLocal ? (
                  <Link 
                    onClick={item.onClick || scrollToTop} 
                    to={item.link} 
                    className={`u-b-${item.color || defaultColor[idx]}`} 
                    key={item.key}> 
                    {item.des} </Link>
                ) : (
                  <a 
                    href={item.link}
                    className={`u-b-${item.color || defaultColor[idx]}`}
                    key={item.key}>
                      {item.des}</a>
                )}
              </>
            ) : (
              <>
                { item.isSubmit ? (
                  <input 
                    className={`u-b-${item.color || defaultColor[idx]}`}
                    type="submit"
                    key={item.key} />
                ) : (
                  <button 
                    onClick={item.onClick}
                    className={`u-b-${item.color || defaultColor[idx]}`}
                    key={item.key}>
                    {item.des}
                  </button>
                )}
              </>
            )}
          </>)
      })}
      {/* <div className="ButtonFlex-secondary"> <Link onClick={() => scrollToTop()} to="/about">Learn More</Link> </div>
      <div className="ButtonFlex-primary"> <a href="https://forms.office.com/r/2vTvALSNBx" className="">Contact us</a> </div> */}
    </div>
  );
}
  
export default ButtonFlex;
  