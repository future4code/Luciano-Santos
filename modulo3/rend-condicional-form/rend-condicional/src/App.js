import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';
import Styled from 'styled-components'

const ContainerPrincipal = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`
export default class App extends React.Component{

  state = {
    pagina: 1
  }

  render(){
    let proximaPagina = <Etapa1/>
    const irParaProximaPagina = () =>{
      this.setState({pagina: this.state.pagina + 1})
      
    }
    switch(this.state.pagina){
      case 2:
        proximaPagina = <Etapa2/>
      break;
      case 3:
        proximaPagina = <Etapa3/>
      break;
      case 4:
        proximaPagina = <Etapa4/>
      break;
    }
        
    console.log(this.state.pagina)

    return(
      <ContainerPrincipal>
        {proximaPagina}
        {this.state.pagina !== 4 ? <button onClick = {irParaProximaPagina}>Próxima etapa</button> : null}
      </ContainerPrincipal>
    )
  }
}
