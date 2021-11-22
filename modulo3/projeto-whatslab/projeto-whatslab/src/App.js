import React from 'react';
import BlocoMensagem from './Components/BlocoMensagem/BlocoMensagem';
import Styled from 'styled-components'

const ContainerPrincipal = Styled.body`
  display:flex;
  justify-content: center;
`
class App extends React.Component {
  render() {
    return(
      <ContainerPrincipal>
          
        <BlocoMensagem/>
        
      </ContainerPrincipal>
    )
  }
}

export default App;