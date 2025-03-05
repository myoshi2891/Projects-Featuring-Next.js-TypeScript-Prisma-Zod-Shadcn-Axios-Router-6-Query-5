import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=office`;
function Gallery() {
	const response = useQuery({
		queryKey: ["images"],
		queryFn: async () => {
			const result = await axios.get(url);

			return result.data;
		},
	});

	console.log(response);

	return <div>Gallery</div>;
}

export default Gallery;
