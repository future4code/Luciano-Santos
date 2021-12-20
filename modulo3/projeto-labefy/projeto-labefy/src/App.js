import React from 'react';
import styled from 'styled-components';
import Home from './components/home/Home';
import TelaCriarPlaylist from './components/telaCriarPlaylist/TelaCriarPlaylist';
import TelaDetalhes from './components/TelaDetalhes/TelaDetalhes';
import TelaListaPlaylist from './components/telaListaPlaylist/TelaListaPlaylist';

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class App extends React.Component{

  state = {
    estagio: "home"
  }

  trocarParaSuasPlaylists = () =>{
    this.setState({estagio: "lista"})
  }

  trocarParaDetalhesPlaylist = () =>{
    this.setState({estagio: "detalhes"})
  }

  trocarParaCriarPlaylist = () =>{
    this.setState({estagio: "criar"})
  }

  trocarParaHome = () =>{
    this.setState({estagio: "home"})
  }

  trocaParaDetalhesDaPlaylist = () =>{
    this.setState({estagio: "detalhes"})
  }

  render(){

    const estagio = this.state.estagio
    let estagioAtual

    switch (estagio) {
      case 'home':
        estagioAtual = 
        <Home 
        trocarParaSuasPlaylists={this.trocarParaSuasPlaylists}
        trocarParaCriarPlaylist={this.trocarParaCriarPlaylist}
        />
        break;
      case 'lista':
        estagioAtual = 
        <TelaListaPlaylist
        trocarParaHome={this.trocarParaHome}
        trocarParaCriarPlaylist={this.trocarParaCriarPlaylist}
        trocarParaDetalhesPlaylist={this.trocarParaDetalhesPlaylist}        
        />
        break;
      case 'criar':
        estagioAtual = 
        <TelaCriarPlaylist
        trocarParaHome={this.trocarParaHome}
        trocarParaSuasPlaylists={this.trocarParaSuasPlaylists}
        />
        break;
      case 'detalhes':
        estagioAtual = 
        <TelaDetalhes
        trocarParaSuasPlaylists={this.trocarParaSuasPlaylists}
        />
        break;   
      default:
        estagioAtual = <p>Página não encontrada!</p>
        break;
    }

    return(
      <ContainerPrincipal>       
        {estagioAtual}
      </ContainerPrincipal>
    )
  }
}