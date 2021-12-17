import React from 'react';
import styled from 'styled-components';
import { Btn } from './Btn';
import { CardPlaylist } from './CardPlaylist';

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export default class Home extends React.Component{
    render(){
        return(
            <ContainerHome>
                <h1>BOA NOITE!</h1>
                <h1>BEM-VINDOS A LABEFY</h1>
                <Btn 
                funcao={this.props.trocarParaSuasPlaylists}
                etiqueta={"Suas playlists"}/>
                <Btn 
                funcao={this.props.trocarParaCriarPlaylist}
                etiqueta={"Criar Playlist"}/>
            </ContainerHome>
        )
    }
}