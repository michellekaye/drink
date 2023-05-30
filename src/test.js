import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Title from "./components/Title";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import "./App.css";

const CATEGORIES_URL =
	"http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const FILTER_BY_CATEGORY_URL =
	"http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

function App() {
	const [categories, setCategories] = useState([]);
	const [cocktails, setCocktails] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const navigate = useNavigate();

	const getCategories = async () => {
		try {
			const res = await axios.get(CATEGORIES_URL);
			setCategories(res.data.drinks.map((item) => item.strCategory));
		} catch (error) {
			console.error(error);
		}
	};

	const getCocktails = async (param) => {
		try {
			const res = await axios.get(`${FILTER_BY_CATEGORY_URL}${param}`);
			setCocktails(res.data.drinks.map((item) => item));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCategories();
	}, []);

	const handleCategoryClick = (category) => {
		const param = category.split(" ").join("_");
		navigate(`/category/${param}`);
		setSelectedCategory(category);
		// getCocktails(param);
	};

	return (
		<main className="App">
			<ScrollToTop />
			<div className="wrapper">
				<Title category={selectedCategory} />

				{categories.length > 0 && !cocktails.length > 0 && (
					<div className="button-list">
						{categories.map((category) => {
							return (
								<Button
									key={category}
									onClick={() => handleCategoryClick(category)}
									label={category}
								/>
							);
						})}
					</div>
				)}

				{cocktails.length > 0 && (
					<div className="button-list">
						{cocktails.map((cocktail) => {
							return (
								<Button
									key={cocktail.idDrink}
									onClick={() => console.log(cocktail)}
									label={cocktail.strDrink}
									thumb={cocktail.strDrinkThumb}
								/>
							);
						})}
					</div>
				)}
			</div>
		</main>
	);
}

export default App;
