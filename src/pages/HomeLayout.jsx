import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
	const navigation = useNavigation();
	console.log(navigation);
	const isPageLoading = navigation.state === "loading";
	const value = "some value";

	return (
		<>
			<Navbar />
			<section className="page">
				{isPageLoading ? (
					<div>Loading...</div>
				) : (
					<Outlet context={{ value }} />
				)}
			</section>
		</>
	);
}

export default HomeLayout;
