import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

const FILTER_BY_CATEGORY_URL =
	"http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

function Category() {
	const [cocktails, setCocktails] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const { categoryId } = useParams();

	const getCocktails = async (param) => {
		try {
			const res = await axios.get(`${FILTER_BY_CATEGORY_URL}${param}`);
			setCocktails(res.data.drinks);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		setSelectedCategory(categoryId);
		getCocktails(categoryId);
	}, []);

	return (
		<>
			{cocktails && cocktails.length > 0 && (
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
		</>
	);
}

export default Category;
