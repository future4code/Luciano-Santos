import React from 'react';
import Styled from 'styled-components';

const Form = Styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`
const LabelForm = Styled.label`
    padding-bottom:1rem;
`

export default class PerguntaAberta extends React.Component{

    state = {
        valorInput: ""
    }

    onChangeValorInput = (event) =>{
        this.setState({valorInput: event.target.value})
    }

    render(){
        return(
        <Form>
            <LabelForm for="input">{this.props.label}</LabelForm>
            <input type = "text" id = "input" name = "input"                  
            value = {this.state.valorInput}
            onChange = {this.onChangeValorInput}
            />
        </Form>
        )
    }
}