import MenuHeader from "../../components/menuHeader/index";
import {useState} from "react";
import {Container, ContainerForm, ContainerButtons, Form} from "./styles";
import { listPlanets } from "../../constants/listPlanets";
import * as services from "../../services/apiRequestAxios";
import { base_URL } from "../../constants/urls";
import Button from "../../components/button/index";

export default function CreateTripPage(){

    const [name, setName] = useState("");
    const [planet, setPlanet] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [durationInDays, setDurationInDays] = useState("");
    
    const onChangeName = ({target}) =>{
        setName(target.value)
    }

    const handleChange = ({target}) =>{
        setPlanet(target.value)
    }

    const onChangeDate = ({target}) =>{
        setDate(target.value)
    }

    const onChangeDescription = ({target}) =>{
        setDescription(target.value)
    }

    const onChangeDurationInDays = ({target}) =>{
        setDurationInDays(target.value)
    }

    const createTrip = () =>{
        services.request.post(`${base_URL}/trips`,{
            name,
            planet,
            date,
            description,
            durationInDays
        },{
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then(alert("viagem criada com sucesso!"))
        .catch(err => console.log(err.response.data))
    }

    return(
        <Container>
            <MenuHeader            
            />
            <ContainerForm>
                <h1>Criar viagem</h1>
                <Form>
                    <input
                        value={name}
                        onChange={onChangeName}
                        placeholder="Nome"
                    />
                    <select
                        defaultValue={"DEFAULT"}
                        onChange={handleChange}
                        value={planet}
                    >
                        <option Value="DEFAULT">Escolha um planeta</option>
                        {listPlanets.map(planet =>
                            <option key={planet}>{planet}</option>
                        )}
                    </select>
                    <input
                        value={date}
                        onChange={onChangeDate}
                        placeholder="dd/mm/aaaa"
                        type="date"
                    />
                    <input
                        value={description}
                        onChange={onChangeDescription}
                        placeholder="Descrição"
                    />
                    <input
                        value={durationInDays}
                        onChange={onChangeDurationInDays}
                        placeholder="Duração em dias"
                        type="number"
                    />
                </Form>
                <ContainerButtons>
                <Button 
                    onClick={createTrip}
                    color={"#2cbc63"}
                    text="Criar"
                    width={"10rem"}
                    height={"4rem"}
                />
                </ContainerButtons>
            </ContainerForm>

        </Container>
    )
}