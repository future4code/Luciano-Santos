import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { Btn } from './Btn';
import BtnNovoUsuario from '../img/btn_novo_usuario.svg'
import BtnListaUsuario from '../img/bx-list-ul.svg'

const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
`
const InputArea = styled.input`
    margin-right: 0.5rem;
    height: 1.5rem;
`
export default class TelaCadastro extends React.Component {

    state = {
        valorInputNome: "",
        valorInputEmail: ""
    }
    
    onChangeNome = (event) => {
        this.setState({ valorInputNome: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ valorInputEmail: event.target.value })
    }
    // ========================== CRIAR NOVO USUÁRIO ==========================
    criarNovoUsuario = () => {

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
                name: this.state.valorInputNome,
                email: this.state.valorInputEmail
            },
                {
                    headers: {
                        Authorization: "luciano-ribeiro-joy"
                    }
                })
            .then(() => {
                alert(`Usuário(a) ${this.state.valorInputNome} criado com sucesso!`)
                this.setState({ valorInputNome: "", valorInputEmail: "" })
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    render() {
        return (
            <ContainerBody>                
                <ContainerInput>
                    <InputArea
                        value={this.state.valorInputNome}
                        onChange={this.onChangeNome}
                        placeholder='Nome'
                    />
                    <InputArea
                        value={this.state.valorInputEmail}
                        onChange={this.onChangeEmail}
                        placeholder='E-mail'
                    />
                    <Btn
                        funcao={this.criarNovoUsuario}
                        etiqueta={<img src={BtnNovoUsuario} alt={'Botão criar novo(a) usuário(a).'}/>}
                    />
                    <Btn
                        funcao={this.props.MudarParaTelaUsuariosCadastrados}
                        etiqueta={<img src={BtnListaUsuario} alt={'Botão visualizar lista usuários.'}/>}
                    />
                </ContainerInput>
            </ContainerBody>
        )
    }
}