import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
export const ContainerBtn = styled.div`
    display: flex;
    align-items: center;
`
export const BtnHome = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 .2rem;
    height: 3rem;
    width: 215px;
    background-color: #F20530;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: .2rem;
    border: none;
    cursor: pointer;
`
export const BtnLista = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 .2rem;
    height: 3rem;
    width: 215px;
    background-color: #F29849;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: .2rem;
    border: none;
    cursor: pointer;
`
export const BtnSalvar = styled.button`
    height: 2rem;
    width: 105px;
    background-color: #0d0126;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: .2rem;
    border: none;
    cursor: pointer;
`
export const ContainerInput = styled.div`
    display: flex;
    margin-top: 1rem;
`
export const StyleInput = styled.input`
    border: none;
    border-bottom: solid 1px;
    margin-right: 1rem;
    outline: 0;
}
`