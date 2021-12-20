import React from  'react';
import axios from 'axios';

export default class AdicionarMusica extends React.Component{

    state = {
        nome: "",
        artista: "",
        url: ""
    }

    onChangeNome = (e) =>{
        this.setState({nome: e.target.value})
    }

    onChangeArtista = (e) =>{
        this.setState({artista: e.target.value})
    }

    onChangeUrl = (e) =>{
        this.setState({url: e.target.value})
    }

    adicionarMusica = (playlistId) =>{
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,{
            name: this.state.nome,
            artist: this.state.artista,
            url: this.state.url
        },{
            headers:{
                Authorization: 'luciano-ribeiro-joy'
            }
        })
        .then(()=>{
            alert('Música adicionada com sucesso!')
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <input
                value={this.state.nome}
                onChange={this.onChangeNome}
                placeholder={'Nome da música'}
                />
                <input
                value={this.state.artista}
                onChange={this.onChangeArtista}
                placeholder={'Nome do Artista'}
                />
                <input
                value={this.state.url}
                onChange={this.onChangeUrl}
                placeholder={'Url da música'}
                />
                <button onClick={this.adicionarMusica}>Adicionar</button>
            </div>
        )
    }
}