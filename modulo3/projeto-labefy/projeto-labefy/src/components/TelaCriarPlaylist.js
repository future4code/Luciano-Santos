import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Btn } from './Btn';

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export default class TelaCriarPlaylist extends React.Component{

    state = {
        Nome: ""
    }

    onChangeNome = (e) =>{
        this.setState({Nome: e.target.value})
    }

    criarPlayList = () =>{
        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
            name: this.state.Nome
        },{
            headers:{
                Authorization: 'luciano-ribeiro-joy'
            }
        })
        .then((res)=>{
            alert('Playlist criada com sucesso!')
            this.setState({Nome: ""})
        })
        .catch((err)=>{
            alert(err.response.data.message)
            this.setState({Nome: ""})
        })
    }

    render(){
        return(
            <ContainerMain>
                <h1>CRIE E REINVENTE SUAS PLAYLISTS</h1>
                <Btn
                funcao={this.props.trocarParaHome}
                etiqueta={'Home'}
                />
                <Btn
                funcao={this.props.trocarParaSuasPlaylists}
                etiqueta={'Suas Playlists'}
                />
                <input
                    value={this.state.Nome}
                    onChange={this.onChangeNome}
                    placeholder={'Nome playlist'}
                />
                <Btn
                    etiqueta={'Salvar'}
                    funcao={this.criarPlayList}
                />
            </ContainerMain>
        )
    }
}