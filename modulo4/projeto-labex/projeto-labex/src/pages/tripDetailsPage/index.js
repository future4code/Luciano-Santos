import * as services from "../../services/apiRequestAxios";
import { base_URL } from "../../constants/urls";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import MenuHeader from "../../components/menuHeader/index";
import Card from "../../components/card/index";
import {Container, Candidates, ContainerDescriptionTrip,
ContainerCandidates, ContainerApproved, Description, Header, Approved} from "./styles";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage(){

    const [details, setDetails] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])
    const [keyRender, setKeyrender] = useState(false)
    const params = useParams()
    const id = params.id
    const {name, description, planet, durationInDays, date} = details;

    const navigate = useNavigate();

    const getTripDetail = (id) =>{
        services.request.get(`${base_URL}/trip/${id}`,{
            headers:{
                auth: localStorage.getItem("token")
            }
        }).then((res)=>{
            setDetails(res.data.trip)
            setCandidates(res.data.trip.candidates)
            setApproved(res.data.trip.approved)
        })
        .catch(err => console.log(err.response.data));
    };

    const decideCandidate = (tripId, candidateId, decision) =>{
        services.request.put(`${base_URL}/trips/${tripId}/candidates/${candidateId}/decide`,{
            approve: decision
        },{
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then(res => setKeyrender(!keyRender))
        .catch(err => console.log(err.response.data))
    };

    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/login");       
    };

    useEffect(()=>{
        getTripDetail(id)
    },[keyRender])

    return(
        <div>
            <MenuHeader
                item1={"Criar Viagem"}
                item2={"Logout"}
                function2={logout}
            />
            <Container>
                <ContainerDescriptionTrip>
                    <Header>
                        <h1>{name}</h1>
                    </Header>
                    <Description>
                        <p>Nome: {name}</p>
                        <p>Descrição: {description}</p>
                        <p>Planeta: {planet}</p>
                        <p>Duração: {durationInDays}</p>
                        <p>Data: {date}</p>
                    </Description>
                </ContainerDescriptionTrip>
                <ContainerCandidates>
                    <Header>
                        <h1>Candidaturas</h1>
                    </Header>                
                    <Candidates>
                        {candidates.length  ? candidates.map(candidate =>
                            <Card
                                key={candidate.id}
                                name={candidate.name}
                                profession={candidate.profession}
                                age={candidate.age}
                                country={candidate.country}
                                applicationText={candidate.applicationText}
                                description={""}
                                planet={""}
                                durationInDays={""}
                                date={""}
                                approve={() => decideCandidate(id, candidate.id, true)}
                                notApprove={() => decideCandidate(id, candidate.id, false)}
                            />
                        ) : <p>Não há canditados para aprovar!</p>}
                    </Candidates>
                </ContainerCandidates>
                <ContainerApproved>
                    <Header>
                        <h1>Candidatos aprovados</h1>
                    </Header>
                    <Approved>
                        {approved.map(item =>
                            <ul key={item.id}>
                                <li>{item.name}</li>
                            </ul>
                        )}
                    </Approved>                
                </ContainerApproved>
                {/* <button onClick={goBack}>Voltar</button> */}
            </Container>

        </div>
    )
}