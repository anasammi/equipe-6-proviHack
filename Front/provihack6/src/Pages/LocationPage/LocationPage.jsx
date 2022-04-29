import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import RadioButton from "../../components/RadioButton/RadioButton";
import {Title, SubTitle} from './styled'


export default function LocationPage(){
    return(
        <>
        <Header name={'Localização'}/>
        <Title>Sua Rota</Title>
        <RadioButton />
        <Map />
        </>
    )
}