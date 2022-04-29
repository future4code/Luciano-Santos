import styled from "styled-components";

export const ContainerMain = styled.div`
    background: #242625;
    width: 280px;
    height: 320px;
    border-radius: 10px;
    /* box-shadow: 10px 10px 50px #1b1c1b, -20px -20px 50px #2d302f; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    /* box-shadow:  16px 16px 44px #0a0a0a, -16px -16px 44px #282a28; */
    transition: 0.3s all ease-in-out;
    color: azure;
    font-family: roboto;

    :hover{
        transition: 300ms ease-in-out;
        transform: scale(1.05);
        transform-origin: bottom;
    };
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