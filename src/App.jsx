import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id != id);
		setTours(newTours);
  };

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

  if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>no tours left</h2>
					<button
						type="button"
						style={{ marginTop: "2rem" }}
						className="btn"
						onClick={fetchTours}
					>
						refresh
					</button>
				</div>
			</main>
		);
  }
  return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
  );
};
export default App;
