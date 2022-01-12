import React,{useEffect, useState} from "react";
import axios from "axios";
import {ContainerMain, ContainerHeader, ContainerBody, ContainerFooter, BtnUsers} from "./Styled";
import IconListUsers from "../../img/bxs-user-detail.svg";

function Home(props){

    const [profile, setProfile] = useState({});

    const getProfileToChoose = () =>{
        const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luciano/person"
        
        axios
        .get(URL)
        .then((res)=>{
            setProfile(res.data.profile)
        })
        .catch((err)=>{
            console.log(err)
        })     
    }

    useEffect(()=>{
        getProfileToChoose()
    },[])

    return(
        <ContainerMain>
            <ContainerHeader>
                <h1>ASTROMATCH</h1>
                <BtnUsers onClick={props.functionRender}>
                    <img src={IconListUsers} alt={"iconer list of added users"}/>
                </BtnUsers>
            </ContainerHeader>
            <ContainerBody>
                <img src={profile.photo} alt={"test"}/>
                <h3>{profile.name},</h3>{profile.age}
                <p>{profile.bio}</p>
            </ContainerBody>
            <ContainerFooter>
                <button>X</button>
                <button>+</button>
            </ContainerFooter>
        </ContainerMain>
    )
}

export default Home;