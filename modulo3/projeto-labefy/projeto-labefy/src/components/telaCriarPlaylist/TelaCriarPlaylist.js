import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import iconeBtnHome from '../../img/Btn-home.svg'
import iconeBtnPlaylist from '../../img/Btn-playlist.svg'
import { ContainerMain } from './Styled';
import { ContainerBtn } from './Styled';
import { BtnHome } from './Styled';
import { BtnLista } from './Styled';
import { BtnSalvar } from './Styled';
import { ContainerInput } from './Styled';
import { StyleInput } from './Styled';

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
            name: this.state.Nome.toUpperCase()
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
                <ContainerBtn>
                    <BtnHome onClick={this.props.trocarParaHome}><img src={iconeBtnHome}/>Home</BtnHome>
                    <BtnLista onClick={this.props.trocarParaSuasPlaylists}><img src={iconeBtnPlaylist}/>Suas Playlists</BtnLista>
                </ContainerBtn>
                <ContainerInput>
                    <StyleInput
                        value={this.state.Nome}
                        onChange={this.onChangeNome}
                        placeholder={'Nome playlist'}
                    />
                    <BtnSalvar onClick={this.criarPlayList}>Salvar</BtnSalvar>
                </ContainerInput>
            </ContainerMain>
        )
    }
}