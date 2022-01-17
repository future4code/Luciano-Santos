import React,{useState} from "react";
import Styled from "styled-components";
import Home from "./components/Home/Home";
import ProfileList from "./components/ProfileList/ProfileList";

const ContainerApp = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`
function App(){

  const [renderingKey, setRenderingKey] = useState(true);

  // Função troca de páginas, funciona como uma chave que altera em 'true e false', quando true renderiza
  // a página 'Home', quando false renderiza a página 'ProfileList', a mesma é passada por props para
  // dentro de cada componente e chamada nos botões de escolha de páginas. 
  const render = () =>{
    setRenderingKey(!renderingKey)
  }

  return(
      <ContainerApp>
        {renderingKey ? <Home functionRender={render}/> : 
        <ProfileList functionRender={render}/>}
      </ContainerApp>
  )
}

export default App;