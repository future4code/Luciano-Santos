import Styled from "styled-components";

export const Container = Styled.div`
    width: 400px;
`
export const ContainerMain = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const ContainerHeader = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10vh; 
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
export const ContainerBody = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 60vh;
    padding: .2rem;
`
export const ContainerPhoto = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 90%;
    height: 100%;
    padding: .2rem;
    border-radius: 1rem;
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #393E46;
`
export const ContainerText = Styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.2rem;
    padding: 0 .5rem;
    color: azure;
    background-color: #00000010;
    backdrop-filter: blur(5px);
`
export const ContainerNameAge = Styled.div`
    display: flex;
    align-items: center;
`
export const ContainerFooter = Styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: 100%;
    height: 10vh;
`
export const ContainerButtons = Styled.div`
    display: flex;
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