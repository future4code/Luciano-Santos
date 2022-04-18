import { useState } from "react";
import { useRequestGet } from "../../hooks/useRequests";
import * as services from "../../services/apiRequestAxios";
import {base_URL} from "../../constants/urls";
import {Container, Form, ContainerForm, ContainerButtons} from "./styles";
import { CountryDropdown } from 'react-country-region-selector';
import MenuHeader from "../../components/menuHeader";
import Button from "../../components/button/index";

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

    const applyToTrip = (e, id) =>{
        e.preventDefault();
        services.request.post(`${base_URL}/trips/${id}/apply`,{
            name,
            age,
            applicationText,
            profession,
            country
        })
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err.response.data))
    }

    return(
        <Container>
            <MenuHeader
                item1={"Home"}
                item2={"Sobre"}
                item3={"Contato"}
            />
            <ContainerForm>
            <h1>Inscreva-se para uma viagem</h1>
                <Form onSubmit={(e)=> applyToTrip(e, choice)}>
                    <select
                        onChange={handleChange}
                        value={choice}
                        required
                    >
                        <option value="" disabled>Escolha uma viagem</option>
                            {trips.map(option =>(
                                    <option key={option.id} value={option.id}>{option.name}</option>
                                )
                            )}
                    </select>
                    <input
                        value={name}
                        onChange={onChangeName}
                        placeholder={"Nome"}
                        required
                    />
                    <input
                        value={age}
                        onChange={onChangeAge}
                        placeholder={"Idade"}
                        type={"number"}
                        required
                    />
                    <input
                        value={applicationText}
                        onChange={onChangeApplicationText}
                        placeholder={"Texto de candidatura"}
                        required
                    />
                    <input
                        value={profession}
                        onChange={onChangeProfession}
                        placeholder={"Profissão"}
                        required
                    />
                    <CountryDropdown
                        value={country}
                        onChange={(val)=> selectRegion(val)}
                        defaultOptionLabel="Selecione um país"
                        required
                    />
                    <ContainerButtons>
                        <Button                        
                            color={"#2cbc63"}
                            text="Enviar"
                            width={"10rem"}
                            height={"4rem"}
                        />
                    </ContainerButtons>
                </Form>
            </ContainerForm>
        </Container>
    )
}