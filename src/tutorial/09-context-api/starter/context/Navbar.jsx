import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);
function NavBar() {
	const [user, setUser] = useState({ name: "bob" });
	const logout = () => {
		setUser(null);
	};

	return (
		<NavbarContext.Provider value={{ user, logout }}>
			<nav className="navbar">
				<h5>Context API</h5>
				<NavLinks />
			</nav>
		</NavbarContext.Provider>
	);
}

export default NavBar;
