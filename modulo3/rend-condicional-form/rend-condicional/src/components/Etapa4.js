import React from 'react';
import Styled from 'styled-components';

const ContainerEtapa4 = Styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 1rem;
`

export default class Etapa4 extends React.Component{
    render(){
        return(
            <ContainerEtapa4>
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </ContainerEtapa4>
        )
    }
}