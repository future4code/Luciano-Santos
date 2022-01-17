import Styled from "styled-components";

export const ContainerMain = Styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const ContainerHeader = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
export const ContainerBody = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    z-index: 10000;
    margin-top: .5rem;
    justify-content: center;
    width: 100%;
`
export const ContainerBtnClear = Styled.div`
    margin-top: 1rem;
    width: 100%;
`
export const H1 = Styled.h1`
    color: #7843e6;
    text-shadow: 1px 2px 2px #44FADD;
    font-family: bungee;
`