import React,{useEffect, useState} from "react";
import {ContainerMain, ContainerHeader, ContainerBody, BtnUsers} from "./Styled"
import IconHome from "../../img/bx-home.svg"

function Home(props){
    return(
        <ContainerMain>
            <ContainerHeader>
                <h1>ASTROMATCH</h1>
                <BtnUsers onClick={props.functionRender}>
                    <img src={IconHome} alt={"iconer list of added users"}/>
                </BtnUsers>
            </ContainerHeader>
            <ContainerBody>
            </ContainerBody>
        </ContainerMain>
    )
}

export default Home;