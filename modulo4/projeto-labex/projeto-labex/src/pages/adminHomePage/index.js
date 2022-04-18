import {useState, useEffect} from "react";
import * as services from "../../services/apiRequestAxios";
import { base_URL } from "../../constants/urls";
import MenuHeader from "../../components/menuHeader/index";
import TripCard from "../../components/tripCard";
import {Container, ContainerMain, Trips} from "./styles";
import { useNavigate } from "react-router-dom";

export default function AdminHomePage(){
    
    const [trips, setTrips] = useState([]);
    const navigate = useNavigate();

    const getTrips = () =>{
        services.request.get(`${base_URL}/trips`)
        .then(res => setTrips(res.data.trips))
        .catch()
    }

    const deleteTrip = (id) =>{
        services.request.delete(`${base_URL}/trips/${id}`,{
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then(getTrips)
        .catch(err => console.log(err.response.data))
    }

    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/login");       
    };

    const goToDetailsTrip = (id) =>{
        navigate(`/admin/trips/${id}`)
    };
    
    useEffect(()=>{
      getTrips()  
    },[])

    return(
        <Container>
            <MenuHeader
                item1={"Criar Viagem"}
                item2={"Logout"}
                function2={logout}
            />
            <ContainerMain>
                <h1>Painel administrativo</h1>
                <Trips>
                    {trips.length ? trips.map(trip =>
                        <TripCard
                            key={trip.id}
                            name={trip.name}
                            deleteTrip={() => deleteTrip(trip.id)}
                            detail={() => goToDetailsTrip(trip.id)}
                        />
                    ) : <p>Não existe nenhuma viagem aberta!</p>}
                </Trips>
            </ContainerMain>
        </Container>
    )
}