import DrinkIcon from "./DrinkIcon";
import "./Button.css";

const Button = ({ onClick, label, thumb }) => {
	return (
		<button className="button" onClick={onClick}>
			<span className="button__label">
				<DrinkIcon drink={label} thumb={thumb} />
				{label}
			</span>
		</button>
	);
};

export default Button;
