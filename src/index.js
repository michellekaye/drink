import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
// import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Drink from "./pages/Drink";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Categories />} />
				<Route path="about" element={<About />} />
				<Route path="categories" element={<Categories />}>
					<Route path=":categoryId" element={<Category />} />
				</Route>
				<Route path="drinks">
					<Route path=":drinkId" element={<Drink />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
