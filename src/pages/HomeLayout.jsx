import { Outlet } from "react-router-dom";
function HomeLayout() {
	return (
		<>
			<nav>
				<span className="text-4xl text-primary">Comfy</span>
				<Outlet />
			</nav>
		</>
	);
}

export default HomeLayout;
