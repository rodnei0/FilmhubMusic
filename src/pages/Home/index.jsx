import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home() {

	async function getAlbums(){
		try {
			const result = await api.getAlbums();
			console.log(result);
		} catch (error) {
			console.log(error.response);
		}
	}

	getAlbums();

	return (
		<h1>TESTE</h1>
	);
}