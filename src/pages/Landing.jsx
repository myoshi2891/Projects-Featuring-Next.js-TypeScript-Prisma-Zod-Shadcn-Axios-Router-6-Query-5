import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils";
const url = "/products?featured=true";

export const loader = (queryClient) => async () => {
	const response = await customFetch(url);
	const products = response.data.data;
	return { products };
};

function Landing() {
	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	);
}

export default Landing;
