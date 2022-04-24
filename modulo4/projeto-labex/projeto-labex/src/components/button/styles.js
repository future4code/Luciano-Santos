import styled from "styled-components";

export const Container = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border: none;
    border-radius: 5rem;
    background: ${props => props.color};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
    :hover{
        background: ${props => props.colorHover};
        transition: .5s;
        cursor: pointer;
        margin: ${props => props.margin};
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
`
export const P = styled.p`
    color: #7900FF;
    font-size: 1rem;
`