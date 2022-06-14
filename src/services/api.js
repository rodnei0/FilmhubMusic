import axios from "axios";

const { REACT_APP_API_BASE_URL } = process.env;

const baseAPI = axios.create({
	baseURL: REACT_APP_API_BASE_URL || "http://localhost:4000"
});

async function getAlbums() {
	const result = await baseAPI.get("/albums");

	return result;
}

const api = {
	getAlbums,
};

export default api;
