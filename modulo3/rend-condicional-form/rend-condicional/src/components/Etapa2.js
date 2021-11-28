import React from 'react';
import Styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';

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

export default class Etapa2 extends React.Component{
    
    // state = {
    //     curso: "",
    //     unidadeDeEnsino: ""
    // }
    
    // onChangeCurso = (event) =>{
    //     this.setState({curso: event.target.value})
    // }

    // onChangeUnidadeDeEnsino = (event) =>{
    //     this.setState({unidadeDeEnsino: event.target.value})
    // }

    render(){
        return(
            <ContainerEtapa>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <ContainerFormEtapa>
                    <PerguntaAberta label={"5. Qual curso?"}/>
                    <PerguntaAberta label={"6. Qual a unidade de ensino?"}/>
                    {/* <Form>
                        <LabelForm for="curso">5. Qual curso?</LabelForm>
                        <input
                        type = "text"
                        id = "curso"
                        name = "curso" 
                        value = {this.state.curso}
                        onChange = {this.onChangeCurso}
                        />
                    </Form>
                    <Form>
                        <LabelForm for="unidadeDeEnsino">6. Qual a unidade de ensino?</LabelForm>
                        <input
                        type = "text"
                        id = "unidadeDeEnsino"
                        name = "unidadeDeEnsino" 
                        value = {this.state.unidadeDeEnsino}
                        onChange = {this.onChangeUnidadeDeEnsino}
                        />
                    </Form> */}
                </ContainerFormEtapa>
            </ContainerEtapa>
        )
    }
}