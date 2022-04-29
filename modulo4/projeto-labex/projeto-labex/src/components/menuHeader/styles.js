import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    height: 15vh;
    /* font-family: Hack, monospace; */
    font-family: roboto;
    /* background: #232526; */
    /* border-bottom: 1px solid #414345; */
    color: #FF0000;

    h1{
        font-size: 46px;
    }
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