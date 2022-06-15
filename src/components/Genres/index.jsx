import AlbumsCards from "../Albums";
import { Genre } from "./styles";

export default function Genres(genres) {
	const { genre } = genres;
	const name = genre[0];
	const albums = genre[1];

	return (
		<Genre>
			<h1>{name}</h1>
			<AlbumsCards album={albums}></AlbumsCards>
		</Genre>
	);
}
