import React from 'react';
import Styled from 'styled-components';

const ContainerEtapa3 = Styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 1rem;
`
const ContainerFormEtapa3 = Styled.form`
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    width: 200px;
`

export default class Etapa3 extends React.Component{

    state = {
        conclusao: ""
    }

    onChangeConclusao = (event) =>{
        this.setState({conclusao: event.target.value})
    }

    render(){
        return(
            <ContainerEtapa3>
                <ContainerFormEtapa3>
                    <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                    <label for="conclusao">5. Por que você não terminou um curso de graduação?</label>
                    <input type = "text" id = "conclusao" name = "conclusao"                  
                        value = {this.state.conclusao}
                        onChange = {this.onChangeConclusao}
                    />
                    <label for="cursoComplementar">6. Você fez algum curso complementar?</label>
                    <select name="cursoComplementar" id="cursoComplementar">
                        <option value="valor1">nenhum</option>
                        <option value="valor2">Curso técnico</option>
                        <option value="valor3">Curso de inglês</option>
                    </select>
                </ContainerFormEtapa3>
            </ContainerEtapa3>
        )
    }
}