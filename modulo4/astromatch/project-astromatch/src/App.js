import React,{useEffect, useState} from "react";
import Styled from "styled-components";
import Home from "./components/Home/Home";
import ProfileList from "./components/ProfileList/ProfileList"

const ContainerApp = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`
function App(props){

  const [renderingKey, setRenderingKey] = useState(true);

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