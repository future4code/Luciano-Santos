import {Container, Ul, Li} from "./styles";
import { useNavigate } from "react-router-dom";

export default function MenuHeader(props){
    const navigate = useNavigate();

    const goToHome = () =>{
        navigate("/")
    };
    return(
        <Container>
            <h1 onClick={goToHome} style={{cursor: "pointer"}}>LabeX</h1>
            <Ul>
                {props.item1 ? <Li onClick={props.function1}>{props.item1}</Li> : null}
                {props.item2 ? <Li onClick={props.function2}>{props.item2}</Li> : null}
                {props.item3 ? <Li onClick={props.function2}>{props.item3}</Li> : null}
            </Ul>
        </Container>
    );
};