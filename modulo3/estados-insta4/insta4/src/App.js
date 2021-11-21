import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`
const Form = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  background-image: radial-gradient( circle 998px at 0.2% 1%, rgba(200,253,255,1) 0%, rgba(216,200,255,1) 100.1% );
  border: none;
  border-radius: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 300px;
  text-align: center
`
const Botao = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 1rem;
  background-image: radial-gradient( circle 476px at -1.7% -3.6%, rgba(38,36,79,1) 0.1%, rgba(44,70,131,1) 100.2% );
  color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 300px;
  margin-bottom: 0.5rem;
`


class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "eduardo",
        fotoUsuario: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150?random=1"
      },
      {
        nomeUsuario: "pedro",
        fotoUsuario: "https://picsum.photos/50/50?random=3",
        fotoPost: "https://picsum.photos/200/150?random=4"
      }
    ],
      // Declaração valores Inputs
      valorInputNomeUsuario: "", 
      valorInputFotoUsuario: "https://picsum.photos/200/150?random=1",
      valorInputFotoPost: "https://picsum.photos/200/150?random=2"
  }
  // Função que adiciona um novo post ao clicar no botão
  adicionaNovoPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novaListaDePosts = [novoPost, ...this.state.posts]

    this.setState({posts: novaListaDePosts})
  }
  // Funções onChanges para cada Input
  onChangeNomeUsuario = (event) =>{
    this.setState({valorInputNomeUsuario: event.target.value})
  }

  onChangeFotoUsuario = (event) =>{
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeFotoPost = (event) =>{
    this.setState({valorInputFotoPost: event.target.value})
  }

  render() {

    const listaDeComponetesDePosts = this.state.posts.map((post)=>{
      return(
        <Post 
        nomeUsuario = {post.nomeUsuario}
        fotoUsuario = {post.fotoUsuario}
        fotoPost = {post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
          <Form 
            value = {this.state.valorInputNomeUsuario}
            onChange = {this.onChangeNomeUsuario}
            placeholder = {"Nome"}
          />
          <Form 
            value = {this.state.valorInputFotoUsuario}
            onChange = {this.onChangeFotoUsuario}
            placeholder = {"Foto usuário"}
          />
          <Form 
            value = {this.state.valorInputFotoPost}
            onChange = {this.onChangeFotoPost}
            placeholder = {"Foto do post"}
          />
          <Botao onClick = {this.adicionaNovoPost}>Compartilhar</Botao>
          {listaDeComponetesDePosts}        
      </MainContainer>
    );
  }
}

export default App;
