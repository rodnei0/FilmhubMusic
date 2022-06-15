import { Header, Logo, Search, SearchBar} from "./styles";

export default function TopBar() {
	return (
		<Header>
			<Logo>Filmhub Music</Logo>
			<SearchBar>
				<Search placeholder="search"></Search>
				<ion-icon name="search-outline"></ion-icon>
			</SearchBar>
		</Header>
	);
}
