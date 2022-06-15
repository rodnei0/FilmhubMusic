import React from "react";
import { useEffect } from "react";
import api from "../../services/api";
import Genres from "../../components/Genres";
import { organizeByGenre } from "../../utils/albumsUtils";
import { Container } from "./styles";
import TopBar from "../../components/TopBar";
import useAlbums from "../../hook/useAlbums";
import { Loading } from "../../components/Loading";

export default function Home() {
	const {albums, setAlbums} = useAlbums();

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
	},[]);

	const genres = organizeByGenre(albums);

	return (
		<Container>
			<TopBar></TopBar>
			{albums.length === 0 ? <Loading /> : Object.entries(genres).map((genre, index) => {
				return (
					<Genres genre={genre} key={index}></Genres>
				);
			})}
		</Container>
	);
}
