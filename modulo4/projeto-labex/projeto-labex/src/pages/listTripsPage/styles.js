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
    width: 100vw;
    height: 100vh;    
    border-radius: 5px;
`
export const Trips = styled.div`
    display: grid;
    gap: 1rem;

    @media(min-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media(min-width: 768px) and (max-width: 1023px){
        grid-template-columns: repeat(3, 1fr);
    }
`
export const H1 = styled.h1`
    margin: .5rem;
`