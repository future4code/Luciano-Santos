import React from 'react';
import Styled from 'styled-components';
import InputView from './components/InputView';

const ContainerPrincipal = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class App extends React.Component{
  render(){
    return(
      <ContainerPrincipal>
        <h1>Lista de tarefas</h1>
        <InputView/>        
      </ContainerPrincipal>
    )
  }
}