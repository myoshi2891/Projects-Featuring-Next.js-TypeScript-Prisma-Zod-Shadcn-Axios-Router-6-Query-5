import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
	const { cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);
	return (
		<main>
			<Modal />
			<NavBar />
			<CartContainer />
		</main>
	);
}
export default App;
