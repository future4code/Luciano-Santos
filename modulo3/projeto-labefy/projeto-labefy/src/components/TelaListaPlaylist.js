import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CardPlaylist } from './CardPlaylist';
import iconeBtnExcluir from '../img/Btn-X.svg'
import iconeBtnHome from '../img/Btn-home.svg'
import iconeBtnAdd from '../img/Btn-add.svg'

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
const ContainerLista = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1rem;
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
const BtnAdd = styled.button`
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
const Img = styled.img`
    fill: white;
`


export default class TelaListaPlaylist extends React.Component{

    state = {
        playlists:[]
    }

    componentDidMount(){
        this.pegarPlaylists();
    }

    pegarPlaylists = () =>{
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
            headers:{
                Authorization: 'luciano-ribeiro-joy'
            }
        })
        .then((res)=>{
            this.setState({playlists: res.data.result.list})
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    deletarPlaylist = (playlistId) =>{
        let confirm = window.confirm('Deseja realmente excluir?')
        if(confirm){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,{
                headers:{
                    Authorization: 'luciano-ribeiro-joy'
                }
            })
            .then(()=>{
                alert('Playlist excluída com sucesso!')
                this.pegarPlaylists();
            })
            .catch((err)=>{
                console.log(err.response.data.message)
            })
        }
    }

    render(){

        const listaPlaylist = this.state.playlists.map(playlist =>{
            return(
                <CardPlaylist                   
                name={playlist.name}
                funcao={()=>this.deletarPlaylist(playlist.id)}
                etiqueta={<Img src={iconeBtnExcluir} alt={'Botão para excluir playlist.'}/>}
                />
            )
        })

        return(
            <ContainerMain>
                <h1>AQUI ESTÃO SUAS PLAYLISTS</h1>
                <ContainerBtn>
                    <BtnHome onClick={this.props.trocarParaHome}><img src={iconeBtnHome}/>Home</BtnHome>
                    <BtnAdd onClick={this.props.trocarParaCriarPlaylist}><img src={iconeBtnAdd}/>Criar Playlist</BtnAdd>
                </ContainerBtn>
                <ContainerLista>
                    {listaPlaylist}
                </ContainerLista>
            </ContainerMain>
        )
    }
}