import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    height: 15vh;
    font-family: 'Montserrat', sans-serif;
    color: #FF0000;

    h1{
        font-size: 46px;
    };
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
    font-weight: bold;
    transition: 1s;
    font-size: 20px;
    :hover{        
        cursor: pointer;
        border-bottom: 1px solid black;
    }
`