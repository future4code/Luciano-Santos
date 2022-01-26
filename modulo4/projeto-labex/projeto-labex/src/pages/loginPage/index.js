import {useState} from "react";
import * as services from "../../services/apiRequestAxios";
import { base_URL } from "../../constants/urls";
import MenuHeader from "../../components/menuHeader";
import {Container, Form, ContainerForm, ContainerButtons} from "./styles";

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = ({target}) =>{
        setEmail(target.value)
    }
    
    const onChangePassword = ({target}) =>{
        setPassword(target.value)
    }

    const login = () =>{
        services.request.post(`${base_URL}/login`,{
            email,
            password
        })
        .then(({data}) => localStorage.setItem("token", data.token))
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
                <h1>Login</h1>
                <Form>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={onChangeEmail}
                        type={"email"}
                    />
                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={onChangePassword}
                        type={"password"}
                    />
                </Form>
                <ContainerButtons>
                    <button>Voltar</button>
                    <button onClick={login}>Entrar</button>
                </ContainerButtons>
            </ContainerForm>
        </Container>
    )
}