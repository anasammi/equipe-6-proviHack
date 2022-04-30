import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { Image, ImageDiv, Subtitle, Icon, ImageGrid, Product, MainDiv, Points, PointDiv } from "./styled";
import StoreImg from "../../assests/cyclist.png";
import BikeIcon from "../../assests/bike-icon.png";
import TrackIcon from "../../assests/track-icon.png";

export default function Shop() {
    return (
        <MainDiv>
            <Header name="Loja" />
            <PointDiv>
                <Points>45</Points>
            </PointDiv>
            <Subtitle> Patrocinadores: </Subtitle>
            <ImageDiv>
                <Image src={StoreImg} alt="Imagem dos patrocinadores" />
            </ImageDiv>

            <Subtitle> Categorias </Subtitle>

            <ImageGrid>
                <div>
                    <Icon src={BikeIcon} alt="Ícone de ciclista" />
                    <Icon src={TrackIcon} alt="Ícone de track" />
                </div>
                <Product></Product>
                <Product></Product>
                <div></div>
                <Product></Product>
                <Product></Product>
            </ImageGrid>



            <Navbar isShop="true" />
        </MainDiv>
    )
};