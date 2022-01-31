import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #191a19;
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
      margin-left:-.1px;
      transition: 1s;
    }

`
export const ContainerDescription = styled.div`
    width: 90%;
`
export const ContainerButton = styled.div`
    
`