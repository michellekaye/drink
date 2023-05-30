import "./DrinkIngredients.css";

const DrinkIngredients = ({ drink }) => {
	return (
		<>
			<div className="ingredient">
				<span className="ingredient__measure">{drink.strMeasure1}</span>
				<span className="ingredient__item">{drink.strIngredient1}</span>
			</div>

			{drink.strIngredient2 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure2}</span>
					<span className="ingredient__item">{drink.strIngredient2}</span>
				</div>
			)}

			{drink.strIngredient3 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure3}</span>
					<span className="ingredient__item">{drink.strIngredient3}</span>
				</div>
			)}

			{drink.strIngredient4 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure4}</span>
					<span className="ingredient__item">{drink.strIngredient4}</span>
				</div>
			)}

			{drink.strIngredient5 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure5}</span>
					<span className="ingredient__item">{drink.strIngredient5}</span>
				</div>
			)}

			{drink.strIngredient6 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure6}</span>
					<span className="ingredient__item">{drink.strIngredient6}</span>
				</div>
			)}

			{drink.strIngredient7 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure7}</span>
					<span className="ingredient__item">{drink.strIngredient7}</span>
				</div>
			)}

			{drink.strIngredient8 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure8}</span>
					<span className="ingredient__item">{drink.strIngredient8}</span>
				</div>
			)}

			{drink.strIngredient9 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure9}</span>
					<span className="ingredient__item">{drink.strIngredient9}</span>
				</div>
			)}

			{drink.strIngredient10 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure10}</span>
					<span className="ingredient__item">{drink.strIngredient10}</span>
				</div>
			)}

			{drink.strIngredient11 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure11}</span>
					<span className="ingredient__item">{drink.strIngredient11}</span>
				</div>
			)}

			{drink.strIngredient12 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure12}</span>
					<span className="ingredient__item">{drink.strIngredient12}</span>
				</div>
			)}

			{drink.strIngredient13 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure13}</span>
					<span className="ingredient__item">{drink.strIngredient13}</span>
				</div>
			)}

			{drink.strIngredient14 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure14}</span>
					<span className="ingredient__item">{drink.strIngredient14}</span>
				</div>
			)}

			{drink.strIngredient15 && (
				<div className="ingredient">
					<span className="ingredient__measure">{drink.strMeasure15}</span>
					<span className="ingredient__item">{drink.strIngredient15}</span>
				</div>
			)}
		</>
	);
};

export default DrinkIngredients;
