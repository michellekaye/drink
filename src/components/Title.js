import "./Title.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Title = ({ category, drinkTitle }) => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="title">
			{(category || drinkTitle) && (
				<button className="title__back" onClick={() => goBack()}>
					<HiOutlineArrowLeft />
				</button>
			)}
			<h1 className="title__h1">Drinks recipes</h1>
			{!drinkTitle && (
				<h2 className="title__h2">{category ? category : "Categories"}</h2>
			)}
			{drinkTitle && <h3 className="title__h3">{drinkTitle}</h3>}
		</div>
	);
};

export default Title;
