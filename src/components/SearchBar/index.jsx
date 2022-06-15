import React from "react";
import { useEffect, useState } from "react";
import useAlbums from "../../hook/useAlbums";
import api from "../../services/api";
import { Container, Search } from "./styles";

export default function SearchBar() {
	const {setAlbums} = useAlbums();
	const [search, setSearch] = useState("");
	const [auxiliar, setAuxiliar] = useState([]);

	useEffect(() => {
		async function getAlbums(){
			try {
				const result = await api.getAlbums();
				setAuxiliar(result.data);
			} catch (error) {
				console.log(error.response);
			}
		}
		getAlbums();
	},[search]);
	
	async function handleSearch(e) {
		setSearch(e.target.value);
		let filteredAlbums = auxiliar.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
		if (e.target.value === "") filteredAlbums = auxiliar;
		setAlbums(filteredAlbums);
	}

	return (
		<Container>
			<Search placeholder="search" value={search} onChange={handleSearch}></Search>
			<ion-icon name="search-outline"></ion-icon>
		</Container>
	);
}
