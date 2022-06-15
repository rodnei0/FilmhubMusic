export function organizeByGenre(albums) {
	let genres = {};

	for (const album of albums) {
		for (const genre of album.genres) {
			if (genre.name !== "Music") {
				genres[genre.name] === undefined ? genres[genre.name] = [album] : genres[genre.name] = [...genres[genre.name], album];
			}
		}
	}

	return genres;
}