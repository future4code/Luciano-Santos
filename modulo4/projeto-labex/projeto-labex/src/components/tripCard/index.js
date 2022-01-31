import {Container, ContainerDescription, ContainerButton} from "./styles";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TripCard(props){
    return(
        <Container>
            <ContainerDescription onClick={props.detail}>
                <p>{props.name}</p>
            </ContainerDescription>
            <ContainerButton>
                <IconButton onClick={props.deleteTrip} color="error" aria-label="add an alarm">
                    <DeleteIcon/>
                </IconButton>
            </ContainerButton>
        </Container>
    )
}