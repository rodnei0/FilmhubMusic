import React from "react";
import { Header, Logo } from "./styles";
import SearchBar from "../SearchBar";

export default function TopBar() {
	return (
		<Header>
			<Logo>Filmhub Music</Logo>
			<SearchBar></SearchBar>
		</Header>
	);
}
