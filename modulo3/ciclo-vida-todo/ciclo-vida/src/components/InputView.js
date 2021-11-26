import React from 'react';
import Styled from 'styled-components';

const ContainerInputView = Styled.div`
    display: flex;
`

export default class InputView extends React.Component{

    state = {
        itens: [
            {
                item: ""
            }
        ],
        valorInputItem: "" 
    }

    itensALista = () =>{
        let novoItem = {
            item: this.state.valorInputItem
        }
        let novaLista = [...this.state.itens, novoItem]

        this.setState({itens: novaLista})
    }

    onChangeAdicionar = (event) =>{
        this.setState({valorInputItem: event.target.value})
    }


    render(){

        const novaListaDeComponentes = this.state.itens.map((item)=>{
            return(
                <li>{item.item}</li>
            )
        })

        return(
            <div>
                <ContainerInputView>
                    <input
                    value = {this.state.valorInputItem}
                    onChange = {this.onChangeAdicionar}
                    />
                    <button onClick = {this.itensALista}>Adicionar</button>
                </ContainerInputView>
                {novaListaDeComponentes}
            </div>
        )
    }
}