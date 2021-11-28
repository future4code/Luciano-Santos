import React from 'react';
import Styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

const ContainerEtapa = Styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 1rem;
`
const ContainerFormEtapa = Styled.form`
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    width: 200px;
`
// const Form = Styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 1rem;
// `
// const LabelForm = Styled.label`
//     padding-bottom:1rem;
// `

export default class Etapa3 extends React.Component{

    // state = {
    //     conclusao: ""
    // }

    // onChangeConclusao = (event) =>{
    //     this.setState({conclusao: event.target.value})
    // }

    render(){
        
        return(
            <ContainerEtapa>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <ContainerFormEtapa>
                    <PerguntaAberta label={"5. Por que você não terminou um curso de graduação?"}/>
                    <PerguntaFechada 
                        label={"6. Você fez algum curso complementar?"} 
                        opcao1={"nenhum"}
                        opcao2={"Curso técnico"}
                        opcao3={"Curso de inglês"}
                        opcao4={null}
                    />
                    {/* <Form>
                        <LabelForm for="conclusao">5. Por que você não terminou um curso de graduação?</LabelForm>
                        <input type = "text" id = "conclusao" name = "conclusao"                  
                            value = {this.state.conclusao}
                            onChange = {this.onChangeConclusao}
                        />
                    </Form>
                    <Form>
                        <LabelForm for="cursoComplementar">6. Você fez algum curso complementar?</LabelForm>
                        <select name="cursoComplementar" id="cursoComplementar">
                            <option value="valor1">nenhum</option>
                            <option value="valor2">Curso técnico</option>
                            <option value="valor3">Curso de inglês</option>
                        </select>
                    </Form> */}
                </ContainerFormEtapa>
            </ContainerEtapa>
        )
    }
}