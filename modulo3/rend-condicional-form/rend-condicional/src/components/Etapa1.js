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

export default class Etapa1 extends React.Component{
    
    // state = {
    //     nome: "",
    //     idade: "",
    //     email: "",      
    // }
    
    // onChangeNome = (event) =>{
    //     this.setState({nome: event.target.value})
    // }

    // onChangeIdade = (event) =>{
    //     this.setState({idade: event.target.value})
    // }

    // onChangeEmail = (event) =>{
    //     this.setState({email: event.target.value})
    // }

    render(){

        return(
            <ContainerEtapa>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <ContainerFormEtapa>
                    <PerguntaAberta label={"1. Qual o seu nome?"}/>
                    <PerguntaAberta label={"2. Qual o sua idade?"}/>
                    <PerguntaAberta label={"3. Qual o seu e-mail?"}/>
                    <PerguntaFechada 
                        label={"4. Qual a sua escolaridade?"} 
                        opcao1={"Ensino médio incompleto"}
                        opcao2={"Ensino médio completo"}
                        opcao3={"Ensino superior incompleto"}
                        opcao4={"Ensino superio completo"}
                    />
                    
                    {/* <Form>
                        <LabelForm for="nome">1. Qual o seu nome?</LabelForm>
                        <input type = "text" id = "nome" name = "nome"                  
                        value = {this.state.nome}
                        onChange = {this.onChangeNome}
                        />
                    </Form>
                    <Form>
                        <LabelForm for="idade">2. Qual o sua idade?</LabelForm>
                        <input type = "text" id = "idade" name = "idade"                                    
                        value = {this.state.idade}
                        onChange = {this.onChangeIdade}
                        />
                    </Form>
                    <Form>
                        <LabelForm for="email">3. Qual o seu e-mail?</LabelForm>
                        <input type = "text" id = "email" name = "email" 
                        value = {this.state.email}
                        onChange = {this.onChangeEmail}
                        />
                    </Form>
                    <Form>
                        <LabelForm for="opcoesEscolaridade">4. Qual a sua escolaridade?</LabelForm>
                        <select name="select" id="opcoesEscolaridade">
                            <option value="valor1">Ensino médio incompleto</option>
                            <option value="valor2">Ensino médio completo</option>
                            <option value="valor3">Ensiono superior incompleto</option>
                            <option value="valor3">Ensino superio completo</option>
                        </select>
                    </Form> */}
                </ContainerFormEtapa>
            </ContainerEtapa>
        )
    }
}