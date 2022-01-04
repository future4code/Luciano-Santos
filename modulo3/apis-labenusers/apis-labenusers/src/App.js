import React from 'react';
import TelaCadastro from './componentes/TelaCadastro';
import TelaListaUsuarios from './componentes/TelaListaUsuarios';
import styled from 'styled-components';

const ContainerBody = styled.div`
  display: flex;
  justify-content: center;

`

const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:500px;
    height: 100vh;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export default class App extends React.Component{
    
    state = {
      condicao: 'cadastro'
    }

    MudarParaTelaUsuariosCadastrados = () =>{
      if(this.state.condicao === 'cadastro'){
        this.setState({condicao: 'lista'})
      }
    }

    MudarParaTelaCadastro = () =>{
      if(this.state.condicao === 'lista'){
        this.setState({condicao: 'cadastro'})
      }
    }

  render(){

    return(
      <ContainerBody>
        <ContainerPrincipal>
          {this.state.condicao === 'cadastro' ? <TelaCadastro MudarParaTelaUsuariosCadastrados={this.MudarParaTelaUsuariosCadastrados}/> :
          <TelaListaUsuarios MudarParaTelaCadastro={this.MudarParaTelaCadastro}/>}        
        </ContainerPrincipal>
      </ContainerBody>
    )
  }
}