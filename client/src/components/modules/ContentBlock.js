import React from "react";

import "../../utilities.css";
import "./ContentBlock.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param title
 * @param children
 */

const ContentBlock = ( {title, children} ) => {
  
  return (
      <div className="contentblock">
        <h1 className="contentblock-title">{title}</h1>
        {children}
      </div>
    );
  }

export default ContentBlock;