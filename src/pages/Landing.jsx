import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
	const searchTerm = "a";
	const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
	const { drinks, searchTerm } = useLoaderData();
	console.log(drinks);

	return (
		<>
			<SearchForm />
			<CocktailList drinks={drinks} />
		</>
	);
}

export default Landing;
