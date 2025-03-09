import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	About,
	HomeLayout,
	Landing,
	Error,
	Newsletter,
	Cocktail,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,

		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "cocktail",
				element: <Cocktail />,
			},
			{
				path: "newsletter",
				element: <Newsletter />,
			},
			// {
			// 	path: "*",
			// 	element: <Error />,
			// },
		],
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
