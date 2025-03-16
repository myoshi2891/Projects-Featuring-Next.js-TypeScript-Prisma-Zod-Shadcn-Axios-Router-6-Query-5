import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
	return {
		queryKey: ["search", searchTerm || "all"],
		queryFn: async () => {
			searchTerm = searchTerm || "a";
			const response = await axios.get(
				`${cocktailSearchUrl}${searchTerm}`
			);
			return response.data.drinks;
		},
	};
};

export const loader = async ({ request }) => {
	const url = new URL(request.url);

	const searchTerm = url.searchParams.get("search") || "gin";
	// const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
	return {
		// drinks: response.data.drinks,
		searchTerm,
	};
};

function Landing() {
	const { searchTerm } = useLoaderData();
	const { data: drinks, isLoading } = useQuery(
		searchCocktailsQuery(searchTerm)
	);

	if (isLoading) return <h4>Loading...</h4>;

	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} />
		</>
	);
}

export default Landing;
