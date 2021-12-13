import React from 'react'
import styled from 'styled-components'

const ContainerBotao = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

export function Btn(props){
    return <ContainerBotao onClick={props.funcao}>{props.etiqueta}</ContainerBotao>
}