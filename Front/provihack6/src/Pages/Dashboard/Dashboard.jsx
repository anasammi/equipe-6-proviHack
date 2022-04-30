import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { GridStatus, H2Styled, Image, MainStyle, Paragraph, PointStyled, PStyled } from "./styled";
import BikeImg from '../../assests/bike-riding.png'

export default function Dashboard() {
    return (
        <MainStyle>
            <Header name={"Dashboard"} />
            <H2Styled>Pontuação</H2Styled>
            <PointStyled>
                <Paragraph>45</Paragraph>
            </PointStyled>
            <H2Styled>Status</H2Styled>
            <GridStatus>
                <h3>CO2/Kg</h3>
                <h3>Km</h3>
                <h3>Gás</h3>
                <PStyled>20kg</PStyled>
                <PStyled>30km</PStyled>
                <PStyled>50L</PStyled>
            </GridStatus>
            <Image src={BikeImg} alt="" />

            <Navbar isHome="true" />
        </MainStyle>
    )
};