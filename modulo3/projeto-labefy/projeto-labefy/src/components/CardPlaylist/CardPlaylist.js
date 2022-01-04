import React from 'react';
import styled from 'styled-components';

const ContainerCardPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: .2rem;
    background-color: #0D0126;
`
const ContainerBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 25%;
`
const Btn = styled.button`
    display: flex;
    margin: .2rem;
    background: none;
    border: none;
    cursor: pointer;
`
const ContainerH1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;    
    color: white;
`
const H1 = styled.h1`
    display: flex;    
`

export default class CardPlaylist extends React.Component{
    render(){
        return(
            <ContainerCardPlaylist>
                
                <ContainerBtn>
                    <Btn onClick={this.props.funcaoAddMusica}>{this.props.iconeAddMusica}</Btn>
                    <Btn onClick={this.props.trocarParaDetalhesPlaylist}>{this.props.iconeDetalhes}</Btn>
                    <Btn onClick={this.props.funcaoExcluir}>{this.props.iconeExcluir}</Btn>
                </ContainerBtn>
    
                <ContainerH1>
                    <H1>{this.props.name}</H1>
                </ContainerH1>
    
            </ContainerCardPlaylist>
        )
    }
}