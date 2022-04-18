import * as services from "../../services/apiRequestAxios";
import { base_URL } from "../../constants/urls";
import MenuHeader from "../../components/menuHeader";
import { Container, Form, ContainerForm, ContainerButtons } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/index";
import useForm from "../../hooks/useForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

export default function LoginPage(){
    const [loading, setLoading] = useState(false);
    const { form, onChange } = useForm({
        email: "",
        password: ""
    });
    
    const navigate = useNavigate();

    useEffect(() =>{
        if (!loading && localStorage.getItem("token") !== null) {
            navigate("/admin/trips/list");
        };
    },[loading, navigate]);

    const login = (e) =>{
        e.preventDefault();
        setLoading(true);
        
        const {email, password} = form;
        const body = {
            email,
            password
        };

        services.request.post(`${base_URL}/login`, body)
        .then(({ data }) => {
            localStorage.setItem("token", data.token)
            navigate("/admin/trips/list", {replace: false})
        })
        .catch(err => toast.error(err.response.data.message));
    };

    return(
        <Container>
            <ToastContainer theme={"colored"}/>
            <MenuHeader/>
            <ContainerForm>
                <h1>Login</h1>                
                <Form onSubmit={login}>
                    <input
                        name="email"
                        placeholder="Email*"
                        value={form.email}
                        onChange={onChange}
                        type={"email"}
                        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" 
                        required
                    />
                    <input
                        name="password"
                        placeholder="Senha*"
                        value={form.password}
                        onChange={onChange}
                        type={"password"}
                        pattern="^.{6,}" 
                        required                       
                    />
                    <ContainerButtons>
                        <Button
                            color={"#2cbc63"}
                            text="Entrar"
                            width={"10rem"}
                            height={"4rem"}
                        />                    
                    </ContainerButtons>             
                </Form>            
            </ContainerForm> 
        </Container>
    );
};