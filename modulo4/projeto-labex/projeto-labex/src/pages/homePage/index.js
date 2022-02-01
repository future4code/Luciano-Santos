import MenuHeader from "../../components/menuHeader";
import { Container, ContainerMain, ContainerDescription, ContainerSubmenu } from "./styles";
import {useHistory} from "react-router-dom";
import imgHome from "../../assets/img_astro_home.svg";
import Button from "../../components/button/index";

export default function Home(){

    const history = useHistory()

    const goToListTrips = () =>{
        history.push("/trips/list")
    }

    const goToAreaAdmin = () =>{
        const token = localStorage.getItem("token")
        token ? history.push("/admin") : history.push("/login")
    }

    return(
        <Container>
            {console.log(history)}
            <MenuHeader
                item1={"Home"}
                item2={"Sobre"}
                item3={"Contato"}
            />
            <ContainerMain>
                <ContainerDescription>
                    <img src={imgHome}/>
                    <h2>Sua viagem espacial inesquecível !!!</h2>
                </ContainerDescription>
                <ContainerSubmenu>
                    <Button
                        onClick={goToListTrips} 
                        color={"#000000"} 
                        colorHover={"#211f1f"} 
                        text="Ver viagens"
                        width={"15rem"}
                        height={"5rem"}
                        margin={"0 0 0 -2em;"}
                    />
                    <Button 
                        onClick={goToAreaAdmin}
                        color={"#000000"} 
                        colorHover={"#211f1f"} 
                        text="Área admin"
                        width={"15rem"}
                        height={"5rem"}
                        margin={"0 0 0 -2em;"}
                    />
                </ContainerSubmenu>
            </ContainerMain>
        </Container>
    )
}