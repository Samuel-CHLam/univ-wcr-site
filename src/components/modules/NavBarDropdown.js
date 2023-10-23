import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./NavBarDropdown.css";

function NavBarDropdown (props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };
    const collapseAfterClick = () => {
        closeMobileMenu();
        scrollToTop();
    }

    return (
        <> 
            <ul onClick={handleClick} className={click ? "navbardropdown-menu clicked" : "navbardropdown-menu"}>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}> 
                            {item.localpath ? (
                                <Link className="navbardropdown-link" to={item.path} onClick={collapseAfterClick}> {item.title} </Link>
                            ) : (
                                <a className="navbardropdown-link" href={item.path} onClick={collapseAfterClick}> {item.title} </a>
                            )
                        }
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavBarDropdown