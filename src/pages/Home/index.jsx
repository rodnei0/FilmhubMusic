import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";
import { organizeByGenre } from "../../utils/albumsUtils";
import Genres from "../../components/Genres";
import { Container } from "./styles";

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

	return (
		<Container>
			{Object.entries(genres).map((genre, index) => {
				return (
					<Genres genre={genre} key={index}></Genres>
				);
			})}
		</Container>
	);
}
