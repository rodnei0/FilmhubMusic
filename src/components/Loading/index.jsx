import React from "react";
import { Container } from "./styles";
import { ThreeDots } from  'react-loader-spinner'

export function Loading() {
return (
    <Container>
        <ThreeDots
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
            />
    </Container>
    )
}