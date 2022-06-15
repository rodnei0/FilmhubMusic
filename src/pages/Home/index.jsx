import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";

export default function Home() {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		async function getAlbums(){
			try {
				const result = await api.getAlbums();
				setAlbums(result.data);
			} catch (error) {
				console.log(error.response);
			}
		}
		getAlbums();
	},[setAlbums]);

	let genres = {};

	for (const album of albums) {
		for (const genre of album.genres) {
			if (genre.name !== "Music") {
				genres[genre.name] === undefined ? genres[genre.name] = [album] : genres[genre.name] = [...genres[genre.name], album];
			}
		}
	}

	console.log(genres);

	return (
		<Container>
			{/* {albums.map((album, index) => {
				return (
					<Card key={index}>
						<img src={album.artworkUrl100}></img>
					</Card>
				);
			})} */}
		</Container>
	);
}

const Container = styled.main`
 	display: flex;
	flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
`;

const Card = styled.div`
 	display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;

	height: 50px;
	width: 50px;
	background-color: red;
`;

const Genre = styled.div`
 	display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;

	height: 50px;
	width: 50px;
	background-color: aliceblue;
`;
