import React from "react";
import Card from "../Components/Card";
import "./main.css";

if (localStorage.getItem("theme") === null) {
	localStorage.setItem("theme", "light");
} else if (localStorage.getItem("theme") === "light") {
	document.body.classList.add("light");
} else if (localStorage.getItem("theme") === "dark") {
	document.body.classList.add("dark");
}

export const Home = () => {
	return (
		<main className="home">
			<div>
				<h1>
					<strong>Search your fav Doctor</strong>
				</h1>
			</div>
			<div className="card-grid">
				<Card />
			</div>
		</main>
	);
};
