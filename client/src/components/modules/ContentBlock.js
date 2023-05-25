import React, {useState, useRef, useEffect} from "react";

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
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
      }, 
      { rootMargin: "-150px" }    
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting])

  useEffect(() => {
    if (isIntersecting) {
        ref.current.querySelectorAll("h1").forEach((el) => {
            el.classList.add("contentblock-title")
        })
    }
  }, [isIntersecting])

  return (
      <div className="contentblock" ref={ref}>
        {title ? (<h1>{title}</h1>) : (<></>)}
        {children}
      </div>
    );
  }

export default ContentBlock;