import React,{useEffect, useState} from "react";
import * as actions from "../../constants/actions"
import {Container, ContainerMain, ContainerHeader, ContainerBody, 
    ContainerFooter, ContainerButtons, ContainerPhoto, ContainerText, 
    ContainerBtnClear, H1} from "./Styled";
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { green, red, deepPurple } from '@material-ui/core/colors';

function Home(props){

    const [profile, setProfile] = useState({});
    const [keyRender, setKeyRender] = useState(false)

    // Função escolha positiva(Dar match).
    const choosePersonToAdd = (choice="choose-person") =>{
        actions.request.post(`choose-person?q=${choice}`, {
            id: profile.id,
            choice: true
        })
        .then((res)=>{
            setKeyRender(!keyRender)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    // Função escolha negativa(Descartar).
    const choosePersonToDelete = (choice="choose-person") =>{
        actions.request.post(`choose-person?q=${choice}`, {
            id: profile.id,
            choice: false
        })
        .then((res)=>{
            setKeyRender(!keyRender)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    // Função limpar swipes e matches.
    const clear = (clear) =>{
        actions.request.put(`clear?q=${clear}`)
        .then((res)=>{
            setKeyRender(!keyRender)
        })
        .catch((err)=>{
          console.log(err.response)
        })
    }
    
    // Função para pegar um perfil para escolher é declarada dentro da pasta 'constants' e invocada
    // diretamente dentro do useEffect. 
    useEffect(()=>{
        actions.getProfileToChoose().then(profile => setProfile(profile))
    },[keyRender])
    
    return(
        <Container>
            <ContainerMain>
                <ContainerHeader>
                    <H1>ASTROMATCH</H1>
                    <Button onClick={props.functionRender} alt={"button to go profile list."}
                    style={{ background: "none" }}>
                        <PlaylistAddCheckIcon style={{ fontSize: 40, color: deepPurple[500] }}/>
                    </Button>
                </ContainerHeader>
                <ContainerBody>
                    <ContainerPhoto url={profile?.photo}>
                        <ContainerText>
                            <div>
                                <h3>{profile?.name}, {profile?.age}</h3>                               
                            </div>
                            <div>{profile?.bio}</div>   
                        </ContainerText>
                    </ContainerPhoto>
                </ContainerBody>
                <ContainerFooter>
                    <ContainerButtons>
                        <Button 
                            onClick={choosePersonToDelete}
                            color={"primary"}>
                            <ClearOutlinedIcon style={{ color: red[600], fontSize: 50 }}/>
                        </Button>
                        <Button 
                            onClick={choosePersonToAdd} 
                            color={"secondary"}>
                            <FavoriteIcon style={{ color: green[600], fontSize: 50 }}/>
                        </Button>                    
                    </ContainerButtons>
                </ContainerFooter>
            </ContainerMain>
            <ContainerBtnClear>
                <Button onClick={clear} alt={"button to clear swipes and matches."} variant="outlined" color="primary" style={{width: 400 }}>Limpar swipes e matches</Button>
            </ContainerBtnClear>
        </Container>
    )
}

export default Home;