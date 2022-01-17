import React,{useEffect, useState} from "react";
import * as actions from "../../constants/actions"
import {ContainerMain, ContainerHeader, ContainerBody, ContainerBtnClear, H1} from "./Styled";
import ProfileCard from "../profileCard/index";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {deepPurple } from '@material-ui/core/colors';


function Home(props){

    const [matches, setMatches] = useState([])
    const [keyRender, setKeyRender] = useState(false)

    // Funcão para pegar a lista de matches.
    const getMatches = (matches) =>{
        actions.request.get(`matches?q=${matches}`)
        .then((res)=>{
            setMatches(res.data.matches)
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

    // Sempre que é feito a limpeza da lista de mathes, a página é atualizada através do estado 'KeyRender',
    // no qual é alterado entre 'true e false', através da função clear. 
    useEffect(()=>{
        getMatches()
    }, [keyRender])

    const renderListMatches = matches.map(item =>{
        return(
            <ProfileCard
                photo={item.photo}
                name={item.name}
            />            
        )
    })
    return(
        <div>
            <ContainerMain>
                <ContainerHeader>
                    <Button onClick={props.functionRender} alt={"button to go Home."}
                    style={{ background: "none" }}>
                        <ArrowBackIosIcon style={{ fontSize: 40, color: deepPurple[500] }}/>
                    </Button>
                    <H1>ASTROMATCH</H1>
                </ContainerHeader>
                <ContainerBody>
                    {renderListMatches}
                </ContainerBody>
            </ContainerMain>
            <ContainerBtnClear>
                <Button onClick={clear} alt={"button to clear swipes and matches."} variant="outlined" color="primary" style={{width: 400 }}>Limpar swipes e matches</Button>
            </ContainerBtnClear>
        </div>
    )
}

export default Home;