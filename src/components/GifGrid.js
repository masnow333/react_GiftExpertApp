//import React, { useEffect, useState } from "react";
import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifts(category);

	let contain = [];

	if (images.length === 0 && loading === false) {
		contain = <p>Category not found</p>;
	} else {
		contain = images.map((image) => <GifGridItem key={image.id} {...image} />);
	}

	return (
		<>
			<h3 className="animate__animated animate__flipInX">{category}</h3>
			<hr />
			{loading && <p>Loading...</p>}
			<div className="card-grid">{contain}</div>
			<hr />
		</>
	);
};

export default GifGrid;
