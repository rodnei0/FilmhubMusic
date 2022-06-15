import React from "react";
import { Card, Albums } from "./styles";

export default function AlbumsCards(albums) {
	const { album } = albums;

	return (
		<Albums>
			{album.map((album, index) => {
				return (
					<a key={index} href={album.artistUrl} target="_blank" rel="noreferrer">
						<Card >
							<img src={album.artworkUrl100} alt="userImg"></img>
							<h3>{album.name}</h3>
							<h4>{album.artistName}</h4>
						</Card>
					</a>
				);
			})}
		</Albums>
	);	
}
