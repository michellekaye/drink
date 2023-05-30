import "./Title.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Title = ({ category }) => {
	return (
		<div className="title">
			{category && (
				<Link className="title__back" to="/categories" replace={true}>
					<HiOutlineArrowLeft />
				</Link>
			)}
			<h1 className="title__h1">Drinks recipes</h1>
			<h2 className="title__h2">{category ? category : "Categories"}</h2>
		</div>
	);
};

export default Title;
