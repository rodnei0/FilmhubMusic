import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AlbumsProvider } from "./contexts/AlbumsContext";
import Home from "./pages/Home";

function App() {

	return (
		<AlbumsProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</AlbumsProvider>
	);
}

export default App;