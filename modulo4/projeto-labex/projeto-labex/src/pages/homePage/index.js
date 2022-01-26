import Footer from "../../components/footer";
import MenuHeader from "../../components/menuHeader";
import { ContainerMain, ContainerDescription, ContainerSubmenu } from "./styles";
import Button from '@mui/material/Button';

export default function Home(){
    return(
        <div>
            <MenuHeader
                item1={"HOME"}
                item2={"SOBRE"}
                item3={"CONTATO"}
            />
            <ContainerMain>
                <ContainerDescription></ContainerDescription>
                <ContainerSubmenu>
                  <Button variant="contained">Teste</Button>  
                  <Button variant="contained">Teste</Button>  
                </ContainerSubmenu>
            </ContainerMain>
            <Footer/>
        </div>
    )
}