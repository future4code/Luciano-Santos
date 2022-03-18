import {useState} from "react";
import * as services from "../../services/apiRequestAxios";
import { base_URL } from "../../constants/urls";
import MenuHeader from "../../components/menuHeader";
import {Container, Form, ContainerForm, ContainerButtons} from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/button/index";

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const onChangeEmail = ({target}) =>{
        setEmail(target.value)
    }
    
    const onChangePassword = ({target}) =>{
        setPassword(target.value)
    }

    const login = (e) =>{
        e.preventDefault()

        services.request.post(`${base_URL}/login`,{
            email,
            password
        })
        .then(({data}) => localStorage.setItem("token", data.token),
            goToAdminPage()
        )
        .catch(err => console.log(err.response.data))
    }

    const goToAdminPage = () =>{
        history.replace("/admin")
    }


    return(
        <Container>
            <MenuHeader/>
            <ContainerForm>
                <h1>Login</h1>
                <Form onSubmit={login}>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={onChangeEmail}
                        type={"email"}
                        required
                        autoFocus
                    />
                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={onChangePassword}
                        type={"password"}
                        required                       
                    />
                    <Button
                        color={"#2cbc63"}
                        text="Entrar"
                        width={"10rem"}
                        height={"4rem"}
                    />
                </Form>
            </ContainerForm>
        </Container>
    )
}