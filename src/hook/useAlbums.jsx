import { useContext } from "react";
import { AlbumsContext } from "../contexts/AlbumsContext";

export default function useAlbums() {
	const albumsContext = useContext(AlbumsContext);
	if (!albumsContext) {
		throw new Error("useAlbums must be used inside a AlbumsContext Provider");
	}

	return albumsContext;
}
