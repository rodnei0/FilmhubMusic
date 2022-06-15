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



export {
	Header, Logo
};