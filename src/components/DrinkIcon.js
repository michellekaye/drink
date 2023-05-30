import "./DrinkIcon.css";

const DrinkIcon = ({ drink, thumb }) => {
	let icon = "01";
	switch (drink) {
		case "Ordinary Drink":
			icon = "01";
			break;
		case "Cocktail":
			icon = "02";
			break;
		case "Shake":
			icon = "03";
			break;
		case "Other / Unknown":
			icon = "04";
			break;
		case "Cocoa":
			icon = "05";
			break;
		case "Shot":
			icon = "06";
			break;
		case "Coffee / Tea":
			icon = "07";
			break;
		case "Homemade Liqueur":
			icon = "08";
			break;
		case "Punch / Party Drink":
			icon = "09";
			break;
		case "Beer":
			icon = "10";
			break;
		case "Soft Drink":
			icon = "11";
			break;
		default:
	}

	const src = thumb ? thumb : `/icon-${icon}.png`;
	const classNames = thumb ? "drink-icon__thumb" : "drink-icon__img";

	return (
		<div className="drink-icon">
			<img className={classNames} src={src} alt="drink images" />
		</div>
	);
};

export default DrinkIcon;
