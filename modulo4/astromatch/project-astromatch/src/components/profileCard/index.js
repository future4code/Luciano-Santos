import {ContainerProfileCard, P} from "./Styled"
import Avatar from "@material-ui/core/Avatar";

function ProfileCard(props){
    return(
        <ContainerProfileCard>
            <Avatar src={props.photo}/>
            <P>{props.name}</P>
        </ContainerProfileCard>
    )
}

export default ProfileCard;