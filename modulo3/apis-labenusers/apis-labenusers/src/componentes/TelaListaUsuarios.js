import React from  'react';
import axios from 'axios';
import BtnExcluir from '../img/btn_excluir.svg'
import { Btn } from './Btn';
import styled from 'styled-components';

const ContainerListaUsuarios = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerUsuario = styled.ul`
    display: flex;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 350px;
    justify-content: space-between;
`
const BtnCadastrar = styled.button`
    border: none;
    background: #2cbc63;
    color: white;
    height: 2rem;
    cursor: pointer;
`

export default class TelaListaUsuarios extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount(){
        this.pegarUsuario()
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
                this.pegarUsuario()
                alert('Usuário(a) deletado(a) com sucesso!')
            }).catch((err)=>{
                alert('Erro ao deletar usuário(a)!')
                console.log(err.response.data)
            })
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
        
        return(
            <ContainerListaUsuarios>
                <BtnCadastrar onClick={this.props.MudarParaTelaCadastro}>Fazer cadastro</BtnCadastrar>
                {listaUsuarios}
            </ContainerListaUsuarios>
        )
    }
}