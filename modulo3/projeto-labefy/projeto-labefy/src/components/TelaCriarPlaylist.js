import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import iconeBtnHome from '../img/Btn-home.svg'
import iconeBtnPlaylist from '../img/Btn-playlist.svg'

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
const ContainerBtn = styled.div`
    display: flex;
    align-items: center;
`
const BtnHome = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 .2rem;
    height: 3rem;
    width: 215px;
    background-color: #F20530;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: .2rem;
    border: none;
    cursor: pointer;
`
const BtnLista = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 .2rem;
    height: 3rem;
    width: 215px;
    background-color: #F29849;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: .2rem;
    border: none;
    cursor: pointer;
`
const BtnSalvar = styled.button`
    height: 2rem;
    width: 105px;
    background-color: #0d0126;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: .2rem;
    border: none;
    cursor: pointer;
`
const ContainerInput = styled.div`
    display: flex;
    margin-top: 1rem;
`
const StyleInput = styled.input`
    border: none;
    border-bottom: solid 1px;
    margin-right: 1rem;
    outline: 0;
}
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