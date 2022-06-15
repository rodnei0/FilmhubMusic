import React from "react";
import AlbumsCards from "../Albums";
import { Genre } from "../Genres/styles";

export default function Genres(genres) {
	const { genre } = genres;
	const name = genre[0];
	const albums = genre[1];

	return (
		<Genre>
			<h2>{name}</h2>
			<AlbumsCards album={albums}></AlbumsCards>
		</Genre>
	);
}
