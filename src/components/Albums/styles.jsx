import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;     
    gap: 10px;
    padding: 3px;

    height: auto;
    min-width: 175px;
    width: 175px;

h3 {
   font-size: 1.20rem;
}

h4 {
   font-size: 1rem;
   margin-bottom: 10px;
}

img {
   max-width: 175px;
   height: auto;
   border-radius: 50%;
}

:hover {
   color: #71a5de;
}
`;

const Albums = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;

    overflow: auto;

    ::-webkit-scrollbar {
      width: 6px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      -webkit-border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background:#71a5de; 
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
`;

export {
	Card, Albums
};