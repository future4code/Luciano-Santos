import {Container, P} from "./styles";

export default function Button(props) {
    return(
        <Container 
            onClick={props.onClick} 
            color={props.color} 
            colorHover={props.colorHover}
            width={props.width}
            height={props.height}
            margin={props.margin}
        >
            <P>{props.text}</P>
        </Container>
    )
}