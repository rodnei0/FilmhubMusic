import React from "react";
import { createContext, useState } from "react";

export const AlbumsContext = createContext(null);

export function AlbumsProvider({ children }) {
	const [albums, setAlbums] = useState([]);

	return (
		<AlbumsContext.Provider value={{ albums, setAlbums }}>
			{children}
		</AlbumsContext.Provider>
	);
}
