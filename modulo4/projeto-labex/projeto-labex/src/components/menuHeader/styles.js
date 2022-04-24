import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    background-color: #7900FF;
    color: #CFFFDC;
    height: 10vh;
    width: 100%;
`
export const Ul = styled.ul`
    display: flex;
    align-items: center;    
    list-style: none;
    gap: 1rem;
    width: auto;
`
export const Li = styled.ul`
    display: flex;
    padding: 1rem;
    border-radius: 1.5rem;
    font-weight: bold;
    transition: 1s;
    :hover{        
        cursor: pointer;
        background-color: black;
        color: azure;
    }

`