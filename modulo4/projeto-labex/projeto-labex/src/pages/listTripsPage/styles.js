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
`
export const ContainerTrips = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;    
    border-radius: 5px;
`
export const Trips = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`
export const H1 = styled.h1`
    margin: .5rem;
`