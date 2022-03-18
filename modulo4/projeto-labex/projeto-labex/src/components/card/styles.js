import styled from "styled-components";

export const ContainerMain = styled.div`
    background: #242625;
    width: 300px;
    height: 400px;
    border-radius: 10px;
    margin: 0 2rem 2rem 2rem;
`

export const ContainerContents = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    background: #191a19;
    margin: 10px auto;
    border-radius: 5px;
    padding: 20px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.3s all ease-in-out;
    color: azure;
    font-family: roboto;

    :hover{
        transform: translateY(-1em)
    }
`
export const Header = styled.div`
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    margin: 40px ;
    color: azure;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1rem;
`
export const P = styled.p`
    font-weight: bold;
`
export const ContainerTrips = styled.div`
    display: flex;
    align-items: center;
`