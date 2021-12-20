import React from 'react';
import axios from 'axios';
import iconeBtnExcluir from '../../img/Btn-X.png';
import iconeBtnDetalhes from '../../img/Btn-details.png';
import iconeBtnHome from '../../img/Btn-home.svg';
import iconeBtnAdd from '../../img/Btn-add.svg';
import iconeAddMusica from '../../img/Btn-add-music.png'
import CardPlaylist from '../CardPlaylist/CardPlaylist';
import { ContainerMain } from './Styled';
import { ContainerLista } from './Styled';
import { ContainerBtn } from './Styled';
import { BtnHome } from './Styled';
import { BtnAdd } from './Styled';
import TelaDetalhes from '../TelaDetalhes/TelaDetalhes';

export default class TelaListaPlaylist extends React.Component{

    state = {
        playlists:[],
        estagio: 'lista'
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

    // PegarDetalhes = (playlistId) =>{
    //     axios
    //     .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,{
    //         headers:{
    //             Authorization: 'luciano-ribeiro-joy'
    //         }
    //     })
    //     .then((res)=>{            
    //         this.setState({detalhes: res.data.result.tracks,
    //         estagio: 'detalhes'})
    //         console.log(res.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err.response.data.message)
    //     })
    // }



    render(){
        const listaPlaylist = this.state.playlists.map(playlist =>{
            return(
                <CardPlaylist
                key={playlist.id}                   
                name={playlist.name}
                trocarParaSuasPlaylists={this.props.trocarParaSuasPlaylists}                
                trocarParaDetalhesPlaylist={this.props.trocarParaDetalhesPlaylist}
                iconeDetalhes={<img src={iconeBtnDetalhes} alt={'Botão exibir detalhes da playlist.'}/>}
                funcaoExcluir={()=>this.deletarPlaylist(playlist.id)}
                iconeExcluir={<img src={iconeBtnExcluir} alt={'Botão para excluir playlist.'}/>}
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
                {console.log(this.state.playlists)} 

            </ContainerMain>
        )
    }
}