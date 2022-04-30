import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import RadioButton from "../../components/RadioButton/RadioButton";
import { Title, MainDiv } from "./styled";
import { SplashPage } from "../SplashPage/SplashPage";
import {useState} from 'react'

export default function LocationPage() {
  const [splashScreentime, setSplashScreentime] = useState(true);

  setTimeout(() => {
    setSplashScreentime(false);
  }, 4000);

  return (
    <>
      {splashScreentime ? (
        <SplashPage />
      ) : (
        <MainDiv>
        <Header name={'Localização'}/>
        <Title>Qual seu destino hoje ?</Title>
        <RadioButton />
        <Map />
        <Navbar isMap="true"/>
        </MainDiv>
      )}
    </>
  );
}
