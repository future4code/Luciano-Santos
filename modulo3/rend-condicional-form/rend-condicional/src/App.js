import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Styled from 'styled-components'

const ContainerPrincipal = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export default class App extends React.Component{
  render(){
    return(
      <ContainerPrincipal>
        <Etapa1/>
        <Etapa2/>
        <button>Próxima etapa</button>
      </ContainerPrincipal>
    )
  }
}
