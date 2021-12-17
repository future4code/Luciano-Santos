import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Btn } from './Btn';
import { CardPlaylist } from './CardPlaylist';
import iconeBtnExcluir from '../img/Btn-X.svg'

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
                <div key={playlist.id}>
                    <CardPlaylist                   
                    name={playlist.name}
                    funcao={()=>this.deletarPlaylist(playlist.id)}
                    etiqueta={<img src={iconeBtnExcluir} alt={'Botão para excluir playlist.'}/>}
                    />
                </div>
            )
        })

        return(
            <ContainerMain>
                <h1>AQUI ESTÃO SUAS PLAYLISTS</h1>
                <Btn
                funcao={this.props.trocarParaHome}
                etiqueta={'Home'}
                />
                <Btn
                funcao={this.props.trocarParaCriarPlaylist}
                etiqueta={'Criar Playlist'}
                />
                {listaPlaylist}
            </ContainerMain>
        )
    }
}