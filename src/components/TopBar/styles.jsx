import styled from "styled-components";

const Header = styled.header`
 	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	width: 100%;

	margin-bottom: 50px;
`;

const Logo = styled.div`
	font-size: 5rem;
	font-weight: bold;
`;


const SearchBar = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	height: 5rem;

	ion-icon {
		display: flex;
		position: absolute;
		left: 8px;
		color: #ADB5BD;
        font-size: 1.25rem;

	}
`;

const Search = styled.input`
    padding: 10px;
    padding-left: 40px;
    border: 2px #71a5de;
    border-radius: 20px;

    ::placeholder {
        font-size: 1.10rem;
        color: #ADB5BD;
    }
	
    :focus {
        outline: 0;
    }

`;

export {
	Header, Logo, Search, SearchBar
};