import { ContainerMain, 
    ContainerContents, 
    Header, 
    ContainerButtons, 
    ContainerTrips }
from "./styles";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { green, red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Card(props) {
    return(
        <ContainerMain>
            <ContainerContents>
                <ContainerTrips>
                    <div onClick={props.detail}>
                        {props.name === "" ? null : <Header>{props.name}</Header>}
                        {props.profession === "" ? null : <p>Profissão: {props.profession}</p>}
                        {props.age === "" ? null : <p>Idade: {props.age}</p>}
                        {props.country === "" ? null : <p>País: {props.country}</p>}
                        {props.applicationText === "" ? null : <p>Texto de candidatura: {props.applicationText}</p>}
                        {props.description === "" ? null : <p>Descrição: {props.description}</p>}
                        {props.planet === "" ? null : <p>Planeta: {props.planet}</p>}
                        {props.durationInDays === "" ? null : <p>Duração: {props.durationInDays} dias</p>}
                        {props.date === "" ? null : <p>Data: {props.date}</p>}         
                    </div>
                     
                        <div>
                        {props.deleteTrip ?
                            <IconButton color="secondary" aria-label="delete" onClick={props.deleteTrip}> <DeleteIcon/> </IconButton> 
                            : null}
                        </div>
                </ContainerTrips>
                {props.profession === "" ? null :
                <ContainerButtons>
                    <CheckIcon onClick={props.approve} style={{ color: green[500], fontSize: 40 }}/>
                    <ClearIcon onClick={props.notApprove} style={{ color: red[500], fontSize: 40 }}/>
                </ContainerButtons>}                
            </ContainerContents>            
        </ContainerMain>
    )        
}