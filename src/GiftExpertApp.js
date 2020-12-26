import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
	//const categories = ["one punch", "Samurai X", "Dragon Ball"]

	const [categories, setCategories] = useState(["Konosuba"]);

	/* const handleAdd = () => {
		//setCategories([...categories, "Konosuba"]);
		setCategories((cats) => [...categories, "Konosuba"]);
	}; */

	return (
		<>
			<h2>GiftExpertApp</h2>
			<hr />
			{/* <button onClick={handleAdd}>Click me</button> */}

			<CategoryAdd setCategories={setCategories} />

			<div>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
					//<li key={category}>{category}</li>
					
				))}
			</div>
		</>
	);
};

export default GiftExpertApp;
