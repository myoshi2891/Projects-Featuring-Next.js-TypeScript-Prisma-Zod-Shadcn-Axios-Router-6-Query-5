import { Link } from "react-router-dom";

function HomeLayout() {
	return (
		<div>
			<h1>HomeLayout</h1>
			<Link to="/about">About Page</Link>
		</div>
	);
}

export default HomeLayout;
