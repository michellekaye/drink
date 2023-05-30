import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Title from "../components/Title";

function Home() {
	const params = useParams();
	const selectedCategory =
		params && params.categoryId && params.categoryId?.split("_").join(" ");

	return (
		<main className="App">
			<ScrollToTop />
			<div className="wrapper">
				<Title category={selectedCategory} />
			</div>
		</main>
	);
}

export default Home;
