import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";
import { organizeByGenre } from "../../utils/albumsUtils";

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

	const genres = organizeByGenre(albums);

	console.log(genres);

	return (
		<Container>
			{Object.entries(genres).map((genre, index) => {
				return (
					<Genre key={index}>
						<h1>{genre[0]}</h1>
						<Albums>
							{genre[1].map((album, index) => {
								return (
									<Card key={index}>
										<img src={album.artworkUrl100}></img>
										<h3>{album.name}</h3>
										<h4>{album.artistName}</h4>
									</Card>
								);
							})}
						</Albums>
					</Genre>
				);
			})}
		</Container>
	);
}

const Box = styled.div`
	height: 50px;
	width: 50px;
	background-color: red;
`;

const Container = styled.main`
 	display: flex;
	flex-wrap: wrap;
    flex-direction: column;     

    min-height: 100vh;
`;

const Card = styled.div`
 	display: flex;
    flex-direction: column;     
	gap: 10px;
	padding: 3px;

	height: auto;
	min-width: 175px;
	width: 175px;

	h3 {
		font-size: 1.20rem;
	}

	h4 {
		font-size: 1rem;
	}

	img {
        max-width: 175px;
        height: auto;
		border-radius: 50%;
    }
`;

const Genre = styled.div`
 	display: flex;
	flex-wrap: wrap;
    flex-direction: column;     

	width: 100%;

	margin-bottom: 30px;

	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 30px;
	}
`;

const Albums = styled.div`
 	display: flex;
	width: 100%;
	gap: 30px;

    overflow: auto;

	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
		-webkit-border-radius: 10px;
		box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		-webkit-border-radius: 10px;
		border-radius: 10px;
		background: #CED4DA; 
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
		box-shadow: inset 0 0 6px rgba(0,0,0,0.5);

	}
`;
