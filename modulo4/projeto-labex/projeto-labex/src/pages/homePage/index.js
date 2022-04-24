import MenuHeader from "../../components/menuHeader";
import { Container, ContainerMain, ContainerDescription, ContainerSubmenu, ContainerText } from "./styles";
import { useNavigate } from "react-router-dom";
import imgHome from "../../assets/img_astro_home.svg";
import Button from "../../components/button/index";

export default function Home(){
    const navigate = useNavigate();
    
    const goToAreaAdmin = () =>{
        const token = localStorage.getItem("token");
        token ? navigate("/admin/trips/list") : navigate("/login");
    };

    return(
        <Container>
            <MenuHeader
                item1={"Home"}
                item2={"Sobre"}
                item3={"Contato"}
            />
            <ContainerMain>
                <ContainerDescription>
                    <img src={imgHome}/>
                    <h1>Viva algo, jamais vivênciado!</h1>
                </ContainerDescription>
                <ContainerSubmenu>
                    <Button
                        onClick={() => navigate("/trips/list")}                        
                        color={"#93FFD8"} 
                        colorHover={"#2C394B"} 
                        text="Ver viagens"
                        width={"15rem"}
                        height={"5rem"}
                        margin={"0 0 0 -2em;"}
                    />
                    <Button
                        onClick={goToAreaAdmin}                        
                        color={"#93FFD8"} 
                        colorHover={"#2C394B"} 
                        text="Área admin"
                        width={"15rem"}
                        height={"5rem"}
                        margin={"0 0 0 -2em;"}
                    />
                </ContainerSubmenu>
            </ContainerMain>
        </Container>
    );
};