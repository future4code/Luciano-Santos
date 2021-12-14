import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { Btn } from './Btn';
import BtnExcluir from '../img/btn_excluir.svg'
import BtnNovoUsuario from '../img/btn_novo_usuario.svg'

const ContainerBody = styled.div`
    display: flex;
    justify-content: center;
`

const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:500px;
    height: 100vh;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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

const ContainerUsuario = styled.ul`
    display: flex;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 350px;
    justify-content: space-between;
`
const BtnTrocaTela = styled.button`
    background: #2cbc63;
    border: none;
    height: 2rem;
    width: 100%;
    color: white;
    cursor: pointer;
`

export default class TelaCadastro extends React.Component{

    state = {
        usuarios:[],
        valorInputNome: "",
        valorInputEmail: "",
        estadoPagina: 1
    }

    componentDidMount(){
        this.pegarUsuario()
    }

    onChangeNome = (event) =>{
        this.setState({valorInputNome: event.target.value})
    }

    onChangeEmail = (event) =>{
        this.setState({valorInputEmail: event.target.value})
    }
    // ========================== CRIAR NOVO USUÁRIO ==========================
    criarNovoUsuario = () =>{

        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
            name: this.state.valorInputNome,
            email: this.state.valorInputEmail
        },
        {
            headers: {
                Authorization: "luciano-ribeiro-joy"
            }
        })
        .then(()=>{
            alert(`Usuário(a) ${this.state.valorInputNome} criado com sucesso!`)
            this.pegarUsuario()
            this.setState({valorInputNome: "", valorInputEmail: ""})      
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }
    
    // ========================== PEGAR USUÁRIOS ==========================
    pegarUsuario = () =>{    
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "luciano-ribeiro-joy"
            }
        })
        .then((res)=>{
            this.setState({usuarios: res.data})
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    // ========================== DELETAR USUÁRIO ==========================
    deletarUsuario = (id) =>{
        let confirm = window.confirm('Tem certeza de que deseja deletar?')
        if(confirm){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
                headers: {
                    Authorization: "luciano-ribeiro-joy"
                }
            })
            .then(()=>{
                // const copiaUsuarios = [...this.state.usuarios]
                // const listaFiltrada = copiaUsuarios.filter((usuario)=>{
                //     return usuario.id !== id
                // })
                this.pegarUsuario()
                alert('Usuário(a) deletado(a) com sucesso!')
                // this.setState({usuarios: listaFiltrada})
            }).catch((err)=>{
                alert('Erro ao deletar usuário(a)!')
                console.log(err.response.data)
            })
        }
    }

    // ========================== ALTERAR ENTRE PÁGINAS ==========================
    alterarPagina = () =>{
        if(this.state.estadoPagina === 1){
            this.setState({estadoPagina: this.state.estadoPagina + 1})
        }else if(this.state.estadoPagina === 2){
            this.setState({estadoPagina: this.state.estadoPagina - 1})
        }
    }

    render(){
        const listaUsuarios = this.state.usuarios.map(usuario =>{
            return(
                <ContainerUsuario key={usuario.id}>
                    <li>{usuario.name}</li>
                    <Btn
                    funcao = {()=>this.deletarUsuario(usuario.id)}
                    etiqueta ={<img src={BtnExcluir} alt={'Botão para excluir usuário(a).'}/>}
                    />
                </ContainerUsuario>
            )
        })

        const valorEstadoPagina = this.state.estadoPagina
        return(
            <ContainerBody>
                <ContainerPrincipal>
                    <BtnTrocaTela onClick={this.alterarPagina}>{'Trocar de Tela'}</BtnTrocaTela>
                    {valorEstadoPagina === 1 ?
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
                            funcao = {this.criarNovoUsuario}
                            etiqueta = {<img src={BtnNovoUsuario} alt={'Botão criar novo(a) usuário(a).'}/>}
                        />
                    </ContainerInput> : listaUsuarios}                      
                </ContainerPrincipal>
            </ContainerBody>
        )
    }
}