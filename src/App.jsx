import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setTours(tours);
		} catch (e) {
			console.log(e);
		}
		setIsLoading(false);
	};
	useEffect(() => {
		fetchTours();
	}, []);

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	return (
		<main>
			<Tours tours={tours} />
		</main>
	);
};
export default App;
