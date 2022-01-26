import {Container, ContainerMenu} from "./styles"

export default function MenuHeader(props){
    return(
        <Container>
            <h1>LabeX</h1>
            <ContainerMenu>
                <ul>{props.item1}</ul>
                <ul>{props.item2}</ul>
                <ul>{props.item3}</ul>
            </ContainerMenu>
        </Container>
    )
}