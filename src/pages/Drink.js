import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import DrinkIngredients from "../components/DrinkIngredients";

const DRINK_URL = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function Drink() {
	const [drink, setDrink] = useState({});
	const { drinkId } = useParams();

	const getDrinkData = async (drinkId) => {
		try {
			const res = await axios.get(`${DRINK_URL}${drinkId}`);
			console.log(res);
			setDrink(res.data.drinks[0]);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getDrinkData(drinkId);
	}, [drinkId]);

	return (
		<main className="App">
			<div className="wrapper">
				<Title drinkTitle={drink.strDrink} />

				<img
					className="drink-image"
					src={drink.strDrinkThumb}
					alt={`${drink.strDrink}`}
				/>

				<div className="instructions">
					<DrinkIngredients drink={drink} />
					<p>{drink.strInstructions}</p>
				</div>
			</div>
		</main>
	);
}

export default Drink;
