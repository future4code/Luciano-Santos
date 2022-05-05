import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5rem;
    margin-bottom: 1rem;
    font-family: roboto;
    font-size: 46px;

    h1{
        margin: .5rem;
        font-size: 46px;
        color: #FF0000;
    }
`
export const ContainerTrips = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`
export const Trips = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1rem;
`