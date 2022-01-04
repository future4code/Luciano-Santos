import React from 'react';
import axios from 'axios';
import AdicionarMusica from '../AdicionarMusica/AdicionarMusica';

export default class TelaDetalhes extends React.Component{

    state = {
        detalhes: []
    }

    componentDidMount(){
        this.PegarDetalhes()
    }

    PegarDetalhes = (playlistId) =>{
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,{
            headers:{
                Authorization: 'luciano-ribeiro-joy'
            }
        })
        .then((res)=>{            
            this.setState({detalhes: res.data.result.tracks,
            estagio: 'detalhes'})
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }
    
    render(){

        const detalhesPlaylist = this.state.detalhes.map(detalhe =>{
            return(
                <div>
                    {detalhe.name}
                </div>
            )
        })

        return(
            <div>
                <button onClick={this.props.trocarParaSuasPlaylists}>Voltar</button>
                <AdicionarMusica
                playlistId={this.props.playlistId}
                />
                {this.state.detalhes === 0 ? detalhesPlaylist : 'Playlist vazia, adicione suas músicas favoritas!'}
            </div>
        )
    }
}