import React from 'react';
import Styled from 'styled-components';

const ContainerConteudo = Styled.div`
  display: flex;
  flex-direction: column;  
  height: 100vh;
  width: 600px;
  border: solid 1px black;
  background-color: #FFDEE9;
  background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);


`
const FooterInput = Styled.div`
    display: flex;
    width: 100%;
    height: 30px;
`
const InputMaior = Styled.input`
    display: flex;
    flex-grow: 1;
`

const ContainerVisualizacao = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
`
const ContainerBalaoMensagem = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    background-color: #BBDEFB;
    height: auto;
    width: 200px;
    border-radius: 1rem;
    margin: 0.5rem 0 0.5rem 0.5rem;
    box-shadow: rgb(0 0 0 / 13%) 0px 1px 0.5px;
`
const ContainerBalaoMensagemEu = Styled.div`
    display: flex;
    align-self: flex-end;
    padding: 0 1rem;
    background-color: #3F51B5;
    color: white;
    height: auto;
    width: 200px;
    border-radius: 1rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    box-shadow: rgb(0 0 0 / 13%) 0px 1px 0.5px;
`
const ParagrafoNome = Styled.p`
    font-weight: bold;
`

class BlocoMensagem extends React.Component{
    state = {
        mensagens: [
            {
            nome: "",
            conteudo: ""
            }
        ],
        valorInputNome: "",
        valorInputConteudo: ""
    }
    
    // Função enviar mensagem ao clicar no botão 'Enviar'
    enviaMensagem = () =>{
        const novaMensagem = {
            nome: this.state.valorInputNome,
            conteudo: this.state.valorInputConteudo
        }
        const novasMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({
            mensagens: novasMensagens
        })

        this.state.valorInputNome = ""
        this.state.valorInputConteudo = ""

        console.log("Mensagem enviada!")
    }

    // Função onChange para o input de nome
    onChangeNome = (event) =>{
        this.setState({valorInputNome: event.target.value})
    }

    // Função onChange para o input de mensagem
    onChangeConteudo = (event) =>{
        this.setState({valorInputConteudo: event.target.value})
    }
    render() {
        
        const listaDeComponetesDeMensagens = this.state.mensagens.map((mensagem) =>{
            if(mensagem.nome === "eu"){
                return(
                    <ContainerBalaoMensagemEu>
                        <p>{mensagem.conteudo}</p>
                    </ContainerBalaoMensagemEu>
                )
            }else if(mensagem.nome !== ""){
                return(
                    <ContainerBalaoMensagem>
                        <ParagrafoNome>{mensagem.nome}</ParagrafoNome>
                        <p>{mensagem.conteudo}</p>
                    </ContainerBalaoMensagem>
                )                
            }
        })   

        return(
            <ContainerConteudo>
                <ContainerVisualizacao>
                    {listaDeComponetesDeMensagens}
                </ContainerVisualizacao>
                
                <FooterInput>
                    <input 
                        value = {this.state.valorInputNome}
                        onChange = {this.onChangeNome}
                        placeholder = {"Nome"}
                    />
                    <InputMaior 
                        value = {this.state.valorInputConteudo}
                        onChange = {this.onChangeConteudo}
                        placeholder = {"Mensagem"}
                    />
                    <button onClick = {this.enviaMensagem}>Enviar</button>
                </FooterInput>
            </ContainerConteudo>
        )
    }
}

export default BlocoMensagem;