import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=omg`;
function Gallery() {
	const response = useQuery({
		queryKey: ["images"],
		queryFn: async () => {
			const result = await axios.get(url);

			return result.data;
		},
	});

	if (response.isLoading) {
		return (
			<section className="image-container">
				<h4>Loading...</h4>
			</section>
		);
	}
	if (response.isError) {
		return (
			<section className="image-container">
				<h4>There was an Error...</h4>
			</section>
		);
	}

	const results = response.data.results;

	if (results.length < 1) {
		return (
			<section className="image-container">
				<h4>No results found...</h4>
			</section>
		);
	}

	return (
		<section className="image-container">
			{results.map((item) => {
				const url = item?.urls?.regular;
				return (
					<img
						src={url}
						alt={item.alt_description}
						key={item.id}
						className="img"
					/>
				);
			})}
		</section>
	);
}

export default Gallery;
