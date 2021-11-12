import React from 'react';
import styled from 'styled-components'

const BoxCardGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImgCardGrande = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const TituloCardGrande = styled.h4`
    margin-bottom: 15px;
`

const DivInterna = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (

        <BoxCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <DivInterna>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </DivInterna>
        </BoxCardGrande>
    )
}

export default CardGrande;