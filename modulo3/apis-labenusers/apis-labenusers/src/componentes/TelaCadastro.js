import axios from 'axios';
import React from 'react';

export default class TelaCadastro extends React.Component{

    state = {
        usuarios:[],
        valorInputNome: "",
        valorInputEmail: ""
    }

    onChangeNome = (event) =>{
        this.setState({valorInputNome: event.target.value})
        console.log(event.target.value)
    }

    onChangeEmail = (event) =>{
        this.setState({valorInputEmail: event.target.value})
    }
    // Criar novo usuário.
    criarNovoUsuario = () =>{
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.valorInputNome,
            email: this.state.valorInputEmail
        }
        const headers = {
            headers: {
                Authorization: "luciano-ribeiro-joy"
            }
        }

        axios
        .post(URL, body, headers)
        .then(()=>{
            alert(`Usuário ${this.state.valorInputNome} criado com sucesso!`)
            this.pegarUsuario()
            console.log(this.state.usuarios)
        })
        .catch(()=>{
            alert("Erro ao criar usuário!")
        })
    }

    //Pegar usuário.
    pegarUsuario = () =>{
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const headers = {
            headers: {
                Authorization: "luciano-ribeiro-joy"
            }
        }

        axios
        .get(URL, headers)
        .then((res)=>{
            this.setState({usuarios: res.data})
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }



    render(){

        const listUsuarios = this.state.usuarios.map(usuario =>{
            return(
                <div>
                    <p>{usuario.name}</p>
                    <p>{usuario.email}</p>                    
                </div>
            )
        })

        return(
            <div>
                <input
                value={this.state.valorInputNome}
                onChange={this.onChangeNome}
                placeholder='Nome'
                />
                <input
                value={this.state.valorInputEmail}
                onChange={this.onChangeEmail}
                placeholder='E-mail'
                />
                <button onClick={this.criarNovoUsuario}>Criar usuário</button>
                {listUsuarios}                
            </div>
        )
    }
}