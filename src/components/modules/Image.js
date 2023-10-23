import * as React from "react";

import "../../utilities.css"
import "./Image.css";
import { Link } from "react-router-dom";

/**
 * Component to render Image
 * 
 * Prototype
 * @param {string} title as the title to be displayed in the div
 * @param {number} opacity between 0 and 1, representing opacity of picture
 * @param {string} aspect "43" for 4/3, "square" for 1/1 and 16/9 otherwise
 * @param {boolean} isBlack represents Black background if True and white otherwise
 * @param {string} src as source of picture
 * @param {string} des as description of picture
 * @param {boolean} suppressArrow True to suppress arrows in description
 * @param {string} linkdes for links redirected to when picture is clicked
 * @param {boolean} isLocal to tell if the image is local or not
 */

const Image = ({title, opacity, aspect, isBlack, src, des, suppressArrow, linkdes, isLocal, altText}) => {
  let backgroundColor = 255;
  let textColor = "black";

  if (isBlack === true) {
    backgroundColor = 0;
    textColor = "white";
  }

    const scrollToTop = () => {window.scrollTo({top: 0})};

    return (
      <div>
          <div 
            style={{backgroundImage: `linear-gradient(rgba(${backgroundColor}, ${backgroundColor}, ${backgroundColor}, ${1-opacity || 0}), 
          rgba(${backgroundColor},${backgroundColor},${backgroundColor}, ${1-opacity || 0})), 
          url(${src})`}} 
            className={`image aspect-${aspect || "default"}`}
            title={altText}> 
          {des ? (<>
            {isLocal ? (
              <Link to={linkdes} style={{color: textColor}} className="Image-link" onClick={scrollToTop}> 
                <h2 className="u-nomargin"> {title} </h2> 
              </Link> 
            ) : (
              <a href={linkdes} style={{color: textColor}} className="Image-link">
                <h2 className="u-nomargin"> {title} </h2>
              </a>
          )} </>
          ) : (<h2 style={{color: textColor}} className="u-nomargin"> {title} </h2>)}
          </div>
          {des ? (<div className="u-nomargin u-margin-top"> 
          {!suppressArrow ? (<>&#9654; </>) : (<> </>)} 
          {des} </div>) : (<> </>)}
      </div>
    );
  };
  
export default Image;