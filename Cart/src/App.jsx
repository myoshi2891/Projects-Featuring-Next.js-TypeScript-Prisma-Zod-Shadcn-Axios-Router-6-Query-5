// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from "./context";

function App() {
	const { loading } = useGlobalContext();
	if (loading) {
		return (
			<main>
				<h2>Loading...</h2>
				<p>Please wait a moment.</p>
				<div className="loading" style={{ marginTop: "6rem" }} />
			</main>
		);
	}
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
