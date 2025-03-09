import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	About,
	HomeLayout,
	Landing,
	Error,
	Newsletter,
	Cocktail,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: landingLoader,
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
