import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

function NavBar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksRef = useRef(null);

    const toggleLinks = () => {
        console.log(linksRef.current.getBoundingClientRect());
        setShowLinks(!showLinks);
    };

    const linkStyles = {
        height: showLinks
            ? `${linksRef.current.getBoundingClientRect().height}px`
            : "0px",
    };

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="logo" />
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <ul className="links" ref={linksRef} style={linkStyles}>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
