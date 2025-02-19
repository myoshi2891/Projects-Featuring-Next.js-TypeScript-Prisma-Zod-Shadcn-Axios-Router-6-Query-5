
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import logo from "./logo.svg";
function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src={logo} alt="coding addict" className="logo" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="social-links">
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default Sidebar;
