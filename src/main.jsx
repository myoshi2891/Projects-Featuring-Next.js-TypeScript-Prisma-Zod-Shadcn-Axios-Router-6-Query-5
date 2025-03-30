import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";

import { store } from "./store.js";
import { Provider } from "react-redux";
import ErrorBoundary from "./ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
			<ErrorBoundary>
				{/* <ToastContainer position="top-center" /> */}
			</ErrorBoundary>
		</Provider>
	</StrictMode>
);
