import { useEffect } from "react";
import { useState } from "react";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			console.log(tours);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchTours();
	}, []);
	return <h2>Tours Starter</h2>;
};
export default App;
