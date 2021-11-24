import React from 'react';
import Styled from 'styled-components';

const ContainerEtapa1 = Styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 1rem;
`

const ContainerFormEtapa1 = Styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export default class Etapa1 extends React.Component{
    
    state = {
        nome: "",
        idade: "",
        email: "",        
        opcoesEscolaridades : [
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensiono superior incompleto",
            "Ensino superio completo",
        ]        
    }
    
    onChangeNome = (event) =>{
        this.setState({nome: event.target.value})
    }

    onChangeIdade = (event) =>{
        this.setState({idade: event.target.value})
    }

    onChangeEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    render(){
        return(
            <ContainerEtapa1>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <ContainerFormEtapa1>
                   <label for="nome">1. Qual o seu nome?</label>
                   <input
                    type = "text"
                    id = "nome"
                    name = "nome" 
                    value = {this.state.nome}
                    onChange = {this.onChangeNome}
                    />

                   <label for="idade">2. Qual o sua idade?</label>
                   <input
                    type = "text"
                    id = "idade"
                    name = "idade" 
                    value = {this.state.idade}
                    onChange = {this.onChangeIdade}
                    />

                   <label for="email">3. Qual o seu e-mail?</label>
                   <input
                    type = "text"
                    id = "email"
                    name = "email" 
                    value = {this.state.email}
                    onChange = {this.onChangeEmail}
                    />
                </ContainerFormEtapa1>

            </ContainerEtapa1>
        )
    }
}