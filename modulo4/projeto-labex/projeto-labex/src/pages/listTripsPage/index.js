import { useRequestGet } from "../../hooks/useRequests";
import {base_URL} from "../../constants/urls";
import MenuHeader from "../../components/menuHeader";
import Card from "../../components/card/index";
import {useHistory} from "react-router-dom";
import {Header} from "./styles";
import { Container, ContainerTrips, Trips, H1 } from "./styles";
import Button from "../../components/button/index";

export default function ListTripPage(){
    const trips = useRequestGet(`${base_URL}/trips`, [])
    const history = useHistory()
    
    const goToSignUpForTrip = () =>{
        history.push("/form/application")
    }
    
    return(
        <Container>
            <MenuHeader
                item1={"Home"}
                item2={"Sobre"}
                item3={"Contato"}              
            />
            <ContainerTrips>
                <Header>
                    <H1>Lista de viagens</H1>
                    <Button 
                    onClick={goToSignUpForTrip}
                    color={"#2cbc63"}
                    text="Inscrever-se"
                    width={"10rem"}
                    height={"4rem"}
                    />
                </Header>
                <Trips>
                    {trips.map(trip =>
                        <Card
                            key={trip.id}
                            name={trip.name}
                            profession={""}
                            age={""}
                            country={""}
                            applicationText={""}
                            description={trip.description}
                            planet={trip.planet}
                            durationInDays={trip.durationInDays}
                            date={trip.date}
                            deleteTrip={""}
                        />
                    )}
                </Trips>
 
            </ContainerTrips>
        </Container>
    )
}