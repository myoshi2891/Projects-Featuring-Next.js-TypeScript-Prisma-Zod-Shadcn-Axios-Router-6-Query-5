import { useGlobalContext } from "./Context";

const App = () => {
	const { isSidebarOpen } = useGlobalContext();
	return <h2>Strapi Starter</h2>;
};
export default App;
