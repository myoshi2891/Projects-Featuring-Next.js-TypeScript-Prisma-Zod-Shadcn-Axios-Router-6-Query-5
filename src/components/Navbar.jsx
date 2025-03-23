import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
	return (
		<nav className="bg-base-200">
			<div className="navbar align-element">
				<div className="navbar-start">
					{/* TITLE */}
					<NavLink
						to="/"
						className="hidden md:flex btn btn-primary text-3xl items-center"
					>
						C
					</NavLink>
					{/* DROPDOWN */}
					<div className="dropdown">
						<label
							htmlFor=""
							tabIndex={0}
							className="btn btn-ghost md:hidden"
						>
							<FaBarsStaggered className="h-6 w-6" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200"
						>
							nav links
						</ul>
					</div>
				</div>
				<div className="navbar-center hidden md:flex">
					<ul className="menu menu-horizontal">nav links</ul>
				</div>
				<div className="navbar-end">
					{/* THEME SETUP */}
					{/* CART LINK */}
					<NavLink
						to="/cart"
						className="btn btn-ghost btn-circle btn-md ml-4"
					>
						<div className="indicator">
							<BsCart3 className="h-6 w-6" />
							<span className="badge badge-sm badge-primary indicator-item">8</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
