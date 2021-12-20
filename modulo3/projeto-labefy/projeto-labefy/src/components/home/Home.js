import React from 'react';
import iconeBtnPlaylist from '../../img/Btn-playlist.svg'
import iconeBtnAdd from '../../img/Btn-add.svg'
import { ContainerHome } from './Styled';
import { ContainerBtn } from './Styled';
import { BtnLista } from './Styled';
import { BtnAdd } from './Styled';

export default class Home extends React.Component{
    render(){
        return(
            <ContainerHome>
                <h1>BOA NOITE!</h1>
                <h1>BEM-VINDOS A LABEFY</h1>
                <ContainerBtn>
                    <BtnLista onClick={this.props.trocarParaSuasPlaylists}><img src={iconeBtnPlaylist}/>Suas playlists</BtnLista>
                    <BtnAdd onClick={this.props.trocarParaCriarPlaylist}><img src={iconeBtnAdd}/>Criar Playlist</BtnAdd>
                </ContainerBtn>
            </ContainerHome>
        )
    }
}