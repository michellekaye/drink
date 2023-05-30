import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import Button from "../components/Button";
import ScrollToTop from "../components/ScrollToTop";
import Title from "../components/Title";

const CATEGORIES_URL =
	"http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

function Categories() {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const navigate = useNavigate();
	const { categoryId } = useParams();

	const getCategories = async () => {
		try {
			const res = await axios.get(CATEGORIES_URL);
			setCategories(res.data.drinks.map((item) => item.strCategory));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (categoryId) {
			const param = categoryId.split("_").join(" ");
			const title = param.split("-").join("/");
			setSelectedCategory(title);
		} else {
			setSelectedCategory("");
		}
		getCategories();
	}, []);

	useEffect(() => {
		if (categoryId) {
			const param = categoryId.split("_").join(" ");
			const title = param.split("-").join("/");
			setSelectedCategory(title);
		} else {
			setSelectedCategory("");
		}
		getCategories();
	}, [categoryId]);

	const handleCategoryClick = (category) => {
		const query = category.split(" ").join("_");
		const param = query.split("/").join("-");
		setSelectedCategory(category);
		navigate(`/categories/${param}`);
	};

	return (
		<main className="App">
			<ScrollToTop />
			<div className="wrapper">
				<Title category={selectedCategory} />

				{categories.length > 0 && !selectedCategory && (
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

				<Outlet />
			</div>
		</main>
	);
}

export default Categories;
