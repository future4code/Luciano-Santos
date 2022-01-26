import { useState } from "react";
import { useRequestGet } from "../../hooks/useRequests";
import * as services from "../../services/apiRequestAxios";
import {base_URL} from "../../constants/urls";
import {Container, Form, ContainerForm, ContainerButtons} from "./styles";
import { CountryDropdown } from 'react-country-region-selector';
import MenuHeader from "../../components/menuHeader";
import { Input } from '@chakra-ui/react';

export default function ApplicationFormPage(){
    
    const [name, setname] = useState("");
    const [age, setAge] = useState("");
    const [applicationText, setApplicationText] = useState("");
    const [profession, setProfession] = useState("");
    const [country, setCountry] = useState("");
    const [choice, setChoice] = useState("");

    const trips = useRequestGet(`${base_URL}/trips`, [])
    
    const onChangeName = ({target}) =>{
        setname(target.value)
    }

    const onChangeAge = ({target}) =>{
        setAge(target.value)
    }

    const onChangeApplicationText = ({target}) =>{
        setApplicationText(target.value)
    }

    const onChangeProfession = ({target}) =>{
        setProfession(target.value)
    }

    const handleChange = ({target}) =>{
        setChoice(target.value)
    }

    const selectRegion = (val) =>{
        setCountry(val)
    }

    const applyToTrip = (id) =>{
        services.request.post(`${base_URL}/trips/${id}/apply`,{
            name,
            age,
            applicationText,
            profession,
            country
        })
        .then(res => alert(res.data.message))
        .catch(err => console.log(err.response.data))
    }

    return(
        <Container>
            <MenuHeader
                item1={"HOME"}
                item2={"SOBRE"}
                item3={"CONTATO"}
            />
            <ContainerForm>
            <h1>Inscreva-se para uma viagem</h1>
                <Form>
                    <select 
                        defaultValue={'DEFAULT'} 
                        onChange={handleChange}
                        value={choice}
                    >
                        <option value="DEFAULT" enable>Escolha uma viagem</option>
                            {trips.map(option =>(
                                    <option key={option.id} value={option.id}>{option.name}</option>
                                )
                            )}
                    </select>
                    <Input
                        value={name}
                        onChange={onChangeName}
                        placeholder={"Nome"}
                        variant='outline'
                    />
                    <Input
                        value={age}
                        onChange={onChangeAge}
                        placeholder={"Idade"}
                        type={"number"}
                        variant='outline'
                    />
                    <Input
                        value={applicationText}
                        onChange={onChangeApplicationText}
                        placeholder={"Texto de candidatura"}
                        variant='outline'
                    />
                    <Input
                        value={profession}
                        onChange={onChangeProfession}
                        placeholder={"Profissão"}
                        variant='outline'
                    />
                    <CountryDropdown
                        defaultOptionLabel="Escolha um País"
                        value={country}
                        onChange={(val)=> selectRegion(val)}
                    />
                </Form>
                <ContainerButtons>
                    <button variant="contained">Voltar</button>
                    <button variant="contained" onClick={()=> applyToTrip(choice)}>Enviar</button>
                </ContainerButtons>
            </ContainerForm>
        </Container>
    )
}