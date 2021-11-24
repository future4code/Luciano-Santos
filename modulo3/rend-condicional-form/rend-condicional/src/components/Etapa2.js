import React from 'react';
import Styled from 'styled-components';

const ContainerEtapa2 = Styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 1rem;
`
const ContainerFormEtapa2 = Styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export default class Etapa2 extends React.Component{
    
    state = {
        curso: "",
        unidadeDeEnsino: ""
    }
    
    onChangeCurso = (event) =>{
        this.setState({curso: event.target.value})
    }

    onChangeUnidadeDeEnsino = (event) =>{
        this.setState({unidadeDeEnsino: event.target.value})
    }

    render(){
        return(
            <ContainerEtapa2>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <ContainerFormEtapa2>
                    <label for="curso">5. Qual curso?</label>
                    <input
                    type = "text"
                    id = "curso"
                    name = "curso" 
                    value = {this.state.curso}
                    onChange = {this.onChangeCurso}
                    />

                    <label for="unidadeDeEnsino">6. Qual a unidade de ensino?</label>
                    <input
                    type = "text"
                    id = "unidadeDeEnsino"
                    name = "unidadeDeEnsino" 
                    value = {this.state.unidadeDeEnsino}
                    onChange = {this.onChangeUnidadeDeEnsino}
                    />
                </ContainerFormEtapa2>


            </ContainerEtapa2>
        )
    }
}