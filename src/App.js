import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

const CATEGORIES_URL =
	"http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const FILTER_BY_CATEGORY_URL =
	"http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

function App() {
	const [categories, setCategories] = useState([]);

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
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCategories();
	}, []);

	const handleCategoryClick = (category) => {
		const param = category.split(" ").join("_");
		getCocktails(param);
	};

	return (
		<main className="App">
			{categories.map((category) => {
				return (
					<button onClick={() => handleCategoryClick(category)}>
						{category}
					</button>
				);
			})}
		</main>
	);
}

export default App;
