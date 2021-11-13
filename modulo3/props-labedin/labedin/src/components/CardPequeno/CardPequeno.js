import React from "react";
import styled from 'styled-components'

const ContainerPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 90px; 
    width: 40vw; 
`
const ImgContainerPequeno = styled.img`
    height: 50%;
    margin-right: 10px;
`
const DivInternaContainerPequeno = styled.div`
    display: flex;
    padding-right: 10px;    
`
const Texto = styled.p`
    padding: 0 5px;
`


const CardPequeno = (props) =>{
    return (
        <ContainerPequeno>
            <ImgContainerPequeno src={props.imagem}/>
            <DivInternaContainerPequeno>
                <h4>{props.legenda}</h4>
                <Texto>{props.texto}</Texto>
            </DivInternaContainerPequeno>

        </ContainerPequeno>
    )
}

export default CardPequeno;