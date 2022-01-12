import Styled from "styled-components";

export const ContainerMain = Styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 80vh;
    border: solid 1px black;
`
export const ContainerHeader = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%; 
    border-bottom: solid 1px black;
`
export const ContainerBody = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    flex-grow: 1;
    border-bottom: solid 1px black;
`
export const ContainerFooter = Styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: 100%;
`
export const BtnUsers = Styled.button`
    border: none;
    background: none;
    cursor: pointer;
`