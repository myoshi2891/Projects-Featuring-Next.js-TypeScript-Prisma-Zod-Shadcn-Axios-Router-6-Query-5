import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
function NavBar() {
	const { openSidebar } = useGlobalContext();
  return <div className="nav-center">
    <h3 className="logo">strapi</h3>
    <button className="toggle-btn" onClick={openSidebar}>
      <FaBars />
    </button>
  </div>;
}

export default NavBar;
