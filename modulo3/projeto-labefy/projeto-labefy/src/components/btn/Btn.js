import React from 'react';
import styled from 'styled-components';

export function Btn(props){
    return(
        <button onClick={props.funcao}>{props.etiqueta}</button>
    )
}