import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import RadioButton from "../../components/RadioButton/RadioButton";
import {Title, MainDiv} from './styled'


export default function LocationPage(){
    return(
        <MainDiv>
        <Header name={'Localização'}/>
        <Title>Qual seu destino hoje ?</Title>
        <RadioButton />
        <Map />
        <Navbar isMap="true"/>
        </MainDiv>
    )
}