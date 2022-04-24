import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #2C394B;
    color: azure;
    font-family: roboto;
    width: 400px;
    height: 50px;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    
    cursor: pointer;

    :hover{   
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      transition: 300ms ease-in-out;
      transform: scale(1.05);
    } 

`
export const ContainerDescription = styled.div`
    width: 90%;
`
export const ContainerButton = styled.div`
    
`