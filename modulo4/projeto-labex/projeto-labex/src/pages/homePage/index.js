import MenuHeader from "../../components/menuHeader";
import { Container, ContainerMain, ContainerDescription, ContainerSubmenu } from "./styles";
import { useNavigate } from "react-router-dom";
import imgHome from "../../assets/img_astro_home.svg";
import Button from "../../components/button/index";
import Typewriter from "typewriter-effect";
import Footer from "../../components/footer/footer";

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
                    {/* <h1>Viva algo, jamais vivênciado!</h1> */}
                    <h1 style={{
                        fontFamily: 'Bebas Neue',
                    }}>
                        <Typewriter  
                            onInit={(typewriter)=> {
                                typewriter   
                                .typeString("Bem vindo ao Labex...")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Viva algo, jamais vivênciado!")
                                .start();
                            }}
                        />
                    </h1>
                </ContainerDescription>
                <ContainerSubmenu>
                    <Button
                        onClick={() => navigate("/trips/list")}                        
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
            {/* <Footer/> */}
        </Container>
    );
};